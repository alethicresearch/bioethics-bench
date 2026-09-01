/*
 * The bibliography, searchable, with the cases each source supports.
 *
 * Everything is read from resources/cases/source-index.v1.json, which is generated from the
 * published case and source files, so the page holds no figure of its own.
 */
const DATA = '../../../resources/cases/source-index.v1.json';
const PAGE = 60;

const KIND_LABEL = {
  study: 'Study', guideline: 'Guidance', survey: 'Survey', law: 'Law',
  report: 'Report', book: 'Book', other: 'Other',
};

const state = { q: '', kind: '', resolved: false, shared: false, policy: false, shown: PAGE };
let data = null;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const n = (x) => Number(x).toLocaleString('en-US');

function matches(source) {
  if (state.kind && source.kind !== state.kind) return false;
  if (state.resolved && !source.resolved) return false;
  if (state.shared && source.cases.length < 2) return false;
  if (state.policy && !source.cases.some((c) => c.policies.length)) return false;
  if (!state.q) return true;
  return source.haystack.includes(state.q);
}

function caseChip(entry) {
  // A policy id says the Bench recorded this source for that policy rather than for the case.
  const policies = entry.policies.length ? `<span class="pol">${entry.policies.map(esc).join(' ')}</span>` : '';
  return `<a class="case-chip" href="../../#${esc(entry.id)}"><b>${esc(entry.id)}</b>${esc(entry.title)}${policies}</a>`;
}

function row(source) {
  const cite = source.url
    ? `<a href="${esc(source.url)}" target="_blank" rel="noopener">${esc(source.citation)}</a>${source.resolved ? '' : '<span class="searchonly">search</span>'}`
    : esc(source.citation);
  return `<div class="src-row">
    <div class="src-main">
      <div class="src-cite">${cite}</div>
      <span class="kind">${esc(KIND_LABEL[source.kind] || source.kind)}</span>
    </div>
    <div class="src-cases">${source.cases.map(caseChip).join('')}</div>
  </div>`;
}

function render() {
  const hits = data.sources.filter(matches);
  $('count').textContent = hits.length === data.sources.length
    ? `${n(data.sources.length)} sources`
    : `${n(hits.length)} of ${n(data.sources.length)} sources`;
  if (!hits.length) {
    $('list').innerHTML = '<div class="src-empty">No source matches that search.</div>';
    return;
  }
  const page = hits.slice(0, state.shown);
  $('list').innerHTML = page.map(row).join('')
    + (hits.length > page.length
      ? `<button class="more" type="button" id="more">Show ${n(Math.min(PAGE, hits.length - page.length))} more of ${n(hits.length - page.length)} remaining</button>`
      : '');
  const more = $('more');
  if (more) more.addEventListener('click', () => { state.shown += PAGE; render(); });
}

function renderKinds() {
  const kinds = Object.entries(data.kinds).sort((a, b) => b[1] - a[1]);
  $('kinds').innerHTML = `<button class="pill-btn ${state.kind ? '' : 'on'}" data-kind="">All</button>`
    + kinds.map(([kind, count]) => `<button class="pill-btn ${state.kind === kind ? 'on' : ''}" data-kind="${esc(kind)}">${esc(KIND_LABEL[kind] || kind)} <span class="kind-count">${count}</span></button>`).join('');
}

function renderTiles() {
  $('tiles').innerHTML = [
    [n(data.source_count), 'distinct sources across the collection'],
    [n(data.resolved_count), 'resolve to a DOI, a PubMed record or an official page'],
    [n(data.policy_level_count), 'are recorded against a policy, not only its case'],
    [n(data.shared_count), 'are drawn on by more than one case'],
  ].map(([value, label]) => `<div class="tile"><b>${value}</b><span>${label}</span></div>`).join('');
}

fetch(DATA, { cache: 'no-store' })
  .then((response) => {
    if (!response.ok) throw new Error(`the index could not be read (${response.status})`);
    return response.json();
  })
  .then((json) => {
    data = json;
    for (const source of data.sources) {
      source.haystack = [source.citation, ...source.cases.map((c) => `${c.id} ${c.title}`)].join(' ').toLowerCase();
    }
    renderTiles();
    renderKinds();
    render();
  })
  .catch((error) => {
    $('list').innerHTML = `<div class="src-empty">The bibliography could not be loaded: ${esc(error.message)}.</div>`;
    $('count').textContent = '';
  });

$('q').addEventListener('input', (e) => { state.q = e.target.value.trim().toLowerCase(); state.shown = PAGE; render(); });
$('kinds').addEventListener('click', (e) => {
  const button = e.target.closest('[data-kind]');
  if (!button) return;
  state.kind = button.dataset.kind;
  state.shown = PAGE;
  renderKinds();
  render();
});
for (const [id, key] of [['f-resolved', 'resolved'], ['f-shared', 'shared'], ['f-policy', 'policy']]) {
  $(id).addEventListener('change', (e) => { state[key] = e.target.checked; state.shown = PAGE; render(); });
}
