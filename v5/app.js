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

const state = { cases: [], q: '', area: '', loaded: new Map() };

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

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
    return `<div class="grp g-${pool}"><div class="grp-h">${esc(heading)} <span class="n">· ${list.length}</span></div>${items}</div>`;
  }).join('');
}

function renderBody(record) {
  const stips = (record.stipulations ?? []).map(stipulationText).filter(Boolean);
  const scenario = readableScenario(record.scenario, stips.length > 0);
  const assume = stips.length
    ? `<div class="assume"><b>Held fixed while this is decided</b><ul>${stips.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>`
    : '';
  const counts = POOLS.map(([p]) => (record.candidate_pools?.[p] ?? []).length);
  return `
    <div class="body">
      <p class="q">${esc(record.decision_question)}</p>
      <p class="scenario">${esc(scenario)}</p>
      ${assume}
      ${renderPositions(record)}
      <div class="meta">
        <span>${counts[0]} public · ${counts[1]} expert · ${counts[2]} framework</span>
        <span>concise and detailed forms</span>
        <span><code>${esc(record.case_id)}</code></span>
        <span><a href="https://github.com/alethicresearch/bioethics-bench/blob/main/data/benchmark/${esc(record.record_id)}.json" target="_blank" rel="noopener">full record, with every source ↗</a></span>
      </div>
    </div>`;
}

function matches(c) {
  if (state.area && c.area !== state.area) return false;
  if (!state.q) return true;
  return c.haystack.includes(state.q.toLowerCase());
}

function render() {
  const list = document.getElementById('list');
  const shown = state.cases.filter(matches);
  document.getElementById('count').textContent =
    shown.length === state.cases.length ? `${state.cases.length} cases` : `${shown.length} of ${state.cases.length} cases`;

  if (!shown.length) {
    list.className = '';
    list.innerHTML = `<p class="loading">Nothing matches that. <a href="#" id="clear">Clear filters</a></p>`;
    document.getElementById('clear').onclick = (e) => {
      e.preventDefault();
      state.q = ''; state.area = '';
      document.getElementById('q').value = ''; document.getElementById('dom').value = '';
      render();
    };
    return;
  }

  list.className = '';
  list.innerHTML = shown.map((c) => `
    <details class="case" data-id="${esc(c.id)}">
      <summary><h3>${esc(c.title)}</h3><span class="tag">${esc(AREAS[c.area] ?? c.area ?? '')}</span></summary>
      <div class="slot"><p class="loading" style="padding:16px 0 0">Loading…</p></div>
    </details>`).join('');

  list.querySelectorAll('details.case').forEach((el) => {
    el.addEventListener('toggle', async () => {
      if (!el.open || el.dataset.done) return;
      const id = el.dataset.id;
      const c = state.cases.find((x) => x.id === id);
      try {
        if (!state.loaded.has(id)) {
          const r = await fetch(`../${c.path}`);
          state.loaded.set(id, await r.json());
        }
        el.querySelector('.slot').innerHTML = renderBody(state.loaded.get(id));
        el.dataset.done = '1';
      } catch {
        el.querySelector('.slot').innerHTML = `<div class="body"><p class="loading">Could not load this record. <a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(c.path)}" target="_blank" rel="noopener">Open it on GitHub ↗</a></p></div>`;
      }
    });
  });
}

async function boot() {
  let manifest;
  try {
    manifest = await (await fetch(MANIFEST)).json();
  } catch {
    document.getElementById('list').innerHTML =
      '<p class="loading">Could not load the case list. <a href="https://github.com/alethicresearch/bioethics-bench/tree/main/data/benchmark">Browse the records on GitHub ↗</a></p>';
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

  document.getElementById('f-cases').textContent = state.cases.length;
  document.getElementById('f-pos').textContent = positions;

  const areas = [...new Set(state.cases.map((c) => c.area).filter(Boolean))]
    .sort((a, b) => (AREAS[a] ?? a).localeCompare(AREAS[b] ?? b));
  const sel = document.getElementById('dom');
  for (const a of areas) {
    const o = document.createElement('option');
    o.value = a; o.textContent = AREAS[a] ?? a;
    sel.appendChild(o);
  }

  let t;
  document.getElementById('q').addEventListener('input', (e) => {
    clearTimeout(t);
    t = setTimeout(() => { state.q = e.target.value.trim(); render(); }, 120);
  });
  sel.addEventListener('change', (e) => { state.area = e.target.value; render(); });

  render();
}

boot();
