/* Bioethics Bench /v5 — loads the released records directly, so the page cannot
   drift from the corpus. No hand-copied case text lives here. */

const MANIFEST = '../releases/full-corpus-v1-completion-candidate/manifest.json';

const AREAS = {
  'consent-capacity-refusal':'Consent & capacity',
  'pediatric-neonatal':'Children & newborns',
  'end-of-life':'End of life',
  'assisted-dying':'Assisted dying',
  'allocation-transplantation':'Who gets scarce care',
  'reproduction-genetics':'Reproduction & genetics',
  'research-ethics':'Research ethics',
  'public-health':'Public health',
  'disability-mental-health':'Disability & mental health',
  'clinical-innovation':'Unproven treatments',
  'medical-ai-data':'AI & health data',
  'global-structural':'Global & structural',
  'animal-one-health':'Animals & One Health',
  'climate-planetary':'Climate & planetary',
  'neuroethics':'Neuroethics',
  'biosecurity-dual-use':'Biosecurity',
};
const POOLS = [
  ['public', 'Public preference'],
  ['expert', 'Expert judgment'],
  ['framework', 'Ethical framework'],
];
/* Each position declares how it stands to the source it names. The record stores that
   relation under four identifiers; the page shows what each one asserts. */
const BASIS = {
  'direct-policy-evidence': 'stated in the source',
  'source-informed-policy-inference': 'inferred from the source',
  'framework-derived-policy': 'derived from the framework',
  'synthetic-author-constructed-policy': 'constructed comparator',
};

const state = { cases: [], shown: [], current: null, q: '', area: '', loaded: new Map() };

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const $ = (id) => document.getElementById(id);

/** A source is only useful if you can get to it. Prefer a real identifier; fall back to search. */
function sourceLink(citation) {
  const c = String(citation || '').trim();
  const pmid = c.match(/\bPMID:?\s*(\d{5,10})\b/i);
  if (pmid) return { href: `https://pubmed.ncbi.nlm.nih.gov/${pmid[1]}/`, exact: true };
  const doi = c.match(/\b10\.\d{4,9}\/[^\s,;)]+/);
  if (doi) return { href: `https://doi.org/${doi[0].replace(/[).,;]+$/, '')}`, exact: true };
  if (!c) return { href: null, exact: false };
  return { href: `https://scholar.google.com/scholar?q=${encodeURIComponent(c.slice(0, 200))}`, exact: false };
}

/** Citations carry their figures and method inline; the browsing view wants the handle only. */
function shortCite(citation) {
  const c = String(citation || '').trim();
  const cut = c.split(/(?<=\.)\s(?=[A-Z])/).slice(0, 2).join(' ');
  return (cut.length > 150 ? `${cut.slice(0, 147)}…` : cut) || c;
}

function stipulationText(s) {
  return typeof s === 'string' ? s : (s?.statement ?? '');
}

/* Scenarios embed their stipulations inline — "For this benchmark, assume X; Y; and Z." — because
   the evaluated text must contain them. On screen they then appear twice, once buried in a long
   sentence and once as a list. Drop the inline run when the list is being shown; the record itself
   is untouched, and the link to it is right there. */
function readableScenario(scenario, hasStipulations) {
  const text = String(scenario ?? '');
  if (!hasStipulations) return text;
  const stripped = text.replace(/\s*For this benchmark,\s*assume[\s\S]*?\.(?=\s|$)/i, '');
  return stripped.trim().length > 120 ? stripped.replace(/\s{2,}/g, ' ').trim() : text;
}

function renderPositions(record) {
  return POOLS.map(([pool, heading]) => {
    const list = record.candidate_pools?.[pool] ?? [];
    if (!list.length) return '';
    const items = list.map((c) => {
      const srcs = (c.provenance?.sources ?? []).map((s) => {
        const { href, exact } = sourceLink(s.citation);
        const label = esc(shortCite(s.citation));
        return href ? `<a href="${href}" target="_blank" rel="noopener">${label}</a>${exact ? '' : ' <span title="no identifier in citation; search link">(search)</span>'}` : label;
      }).join('<br>');
      const basis = BASIS[c.policy_basis] ? `<span class="basis">${esc(BASIS[c.policy_basis])}</span>` : '';
      return `<div class="pos"><p>${esc(c.text)}${basis}</p><div class="srcs">${srcs}</div></div>`;
    }).join('');
    return `<div class="grp"><div class="grp-h">${esc(heading)} <span class="n">· ${list.length}</span></div>${items}</div>`;
  }).join('');
}

function renderDetail(record, entry) {
  const stips = (record.stipulations ?? []).map(stipulationText).filter(Boolean);
  const scenario = readableScenario(record.scenario, stips.length > 0);
  const assume = stips.length
    ? `<div class="assume"><b>Held fixed while this is decided</b><ul>${stips.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>`
    : '';
  const counts = POOLS.map(([p]) => (record.candidate_pools?.[p] ?? []).length);
  const i = state.shown.indexOf(entry);
  const prev = i > 0 ? state.shown[i - 1] : null;
  const next = i >= 0 && i < state.shown.length - 1 ? state.shown[i + 1] : null;
  return `
    <div class="detail-head">
      <span class="tag">${esc(AREAS[entry.area] ?? entry.area ?? '')}</span>
      <h3>${esc(record.title)}</h3>
    </div>
    <p class="q">${esc(record.decision_question)}</p>
    <p class="scenario">${esc(scenario)}</p>
    ${assume}
    ${renderPositions(record)}
    <div class="meta">
      <span>${counts[0]} public · ${counts[1]} expert · ${counts[2]} framework</span>
      <span>concise and detailed forms</span>
      <span><a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(entry.path)}" target="_blank" rel="noopener">full record, with every source ↗</a></span>
    </div>
    <div class="stepper">
      ${prev ? `<a href="#${esc(prev.id)}" class="step" data-id="${esc(prev.id)}">← ${esc(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a href="#${esc(next.id)}" class="step next" data-id="${esc(next.id)}">${esc(next.title)} →</a>` : '<span></span>'}
    </div>`;
}

async function show(id, { scroll = false } = {}) {
  const entry = state.cases.find((c) => c.id === id);
  const pane = $('detail');
  if (!entry) { pane.innerHTML = '<p class="loading">Select a case from the list.</p>'; return; }
  state.current = id;
  if (location.hash.slice(1) !== id) history.replaceState(null, '', `#${id}`);
  for (const el of document.querySelectorAll('.idx-item')) el.classList.toggle('on', el.dataset.id === id);
  pane.innerHTML = '<p class="loading">Loading record…</p>';
  try {
    if (!state.loaded.has(id)) state.loaded.set(id, await (await fetch(`../${entry.path}`)).json());
    if (state.current !== id) return;
    pane.innerHTML = renderDetail(state.loaded.get(id), entry);
  } catch {
    pane.innerHTML = `<p class="loading">Could not load this record. <a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(entry.path)}" target="_blank" rel="noopener">Open it on GitHub ↗</a></p>`;
  }
  if (scroll && window.matchMedia('(max-width:900px)').matches) {
    pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function matches(c) {
  if (state.area && c.area !== state.area) return false;
  if (!state.q) return true;
  return c.haystack.includes(state.q.toLowerCase());
}

/* The index is the navigation: every case title visible at once, grouped by area, so a reader
   can see the whole corpus and jump, instead of opening rows one at a time to find out what is in them. */
function renderIndex() {
  state.shown = state.cases.filter(matches);
  $('count').textContent = state.shown.length === state.cases.length
    ? `${state.cases.length} cases`
    : `${state.shown.length} of ${state.cases.length}`;

  const idx = $('index');
  if (!state.shown.length) {
    idx.innerHTML = '<p class="idx-empty">Nothing matches. <a href="#" id="clear">Clear</a></p>';
    $('clear').onclick = (e) => {
      e.preventDefault();
      state.q = ''; state.area = ''; $('q').value = ''; $('dom').value = '';
      renderIndex();
    };
    return;
  }

  const groups = new Map();
  for (const c of state.shown) {
    const key = AREAS[c.area] ?? c.area ?? 'Other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(c);
  }
  idx.innerHTML = [...groups.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([area, cases]) => `
      <div class="idx-group">
        <div class="idx-area">${esc(area)} <span>${cases.length}</span></div>
        ${cases.map((c) => `<a class="idx-item${c.id === state.current ? ' on' : ''}" href="#${esc(c.id)}" data-id="${esc(c.id)}">${esc(c.title)}</a>`).join('')}
      </div>`).join('');

  if (!state.shown.some((c) => c.id === state.current)) show(state.shown[0].id);
  else if (state.loaded.has(state.current)) {
    // prev/next walk the filtered list; rebuild the open case so its stepper matches what is shown.
    const entry = state.cases.find((c) => c.id === state.current);
    $('detail').innerHTML = renderDetail(state.loaded.get(state.current), entry);
  }
}

async function boot() {
  let manifest;
  try {
    manifest = await (await fetch(MANIFEST)).json();
  } catch {
    $('index').innerHTML = '<p class="idx-empty">Could not load the case list. <a href="https://github.com/alethicresearch/bioethics-bench/tree/main/data/benchmark">Records on GitHub ↗</a></p>';
    return;
  }

  // One entry per case; the concise record supplies the browsing view.
  const byCase = new Map();
  for (const r of manifest.records) {
    const key = r.record_id.slice(0, 4);
    if (!byCase.has(key) || r.representation === 'concise') byCase.set(key, r);
  }

  const records = await Promise.all([...byCase.values()].map(async (m) => {
    try { return { m, rec: await (await fetch(`../${m.path}`)).json() }; }
    catch { return null; }
  }));

  let positions = 0;
  state.cases = records.filter(Boolean).map(({ m, rec }) => {
    const pools = POOLS.map(([p]) => rec.candidate_pools?.[p] ?? []);
    positions += pools.reduce((n, a) => n + a.length, 0);
    const text = [rec.title, rec.decision_question, rec.scenario, ...pools.flat().map((c) => c.text)].join(' ').toLowerCase();
    return { id: m.record_id.slice(0, 4), title: rec.title, area: (rec.domains ?? [])[0] ?? '', path: m.path, haystack: text };
  }).sort((a, b) => a.title.localeCompare(b.title));

  // The hero carries no counts of its own; fill them only if a page provides the slots.
  const setStat = (id, v) => { const el = $(id); if (el) el.textContent = v; };
  setStat('f-cases', state.cases.length);
  setStat('f-pos', positions);

  const areas = [...new Set(state.cases.map((c) => c.area).filter(Boolean))]
    .sort((a, b) => (AREAS[a] ?? a).localeCompare(AREAS[b] ?? b));
  for (const a of areas) {
    const o = document.createElement('option');
    o.value = a; o.textContent = AREAS[a] ?? a;
    $('dom').appendChild(o);
  }

  let t;
  $('q').addEventListener('input', (e) => {
    clearTimeout(t);
    t = setTimeout(() => { state.q = e.target.value.trim(); renderIndex(); }, 120);
  });
  $('dom').addEventListener('change', (e) => { state.area = e.target.value; renderIndex(); });

  // Titles and the stepper are ordinary links, so the browser handles history and middle-click.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('.idx-item, .step');
    if (!a) return;
    e.preventDefault();
    show(a.dataset.id, { scroll: true });
  });
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (id && id !== state.current) show(id);
  });

  const opening = state.cases.find((c) => c.id === location.hash.slice(1));
  state.current = opening?.id ?? null;
  renderIndex();
  show(opening?.id ?? state.cases[0].id);
}

boot();
