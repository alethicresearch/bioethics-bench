/*
 * The composition page.
 *
 * Every figure is read from resources/cases/composition.v1.json, which is generated from the
 * published case and source files. Nothing here holds a number of its own, so the page cannot
 * drift from the corpus the way a hand-written summary does.
 */
const DATA = '../../resources/cases/composition.v1.json';

/* The same colours the case browser gives these labels, so a Framework policy is the same violet
   on both pages. Validated for colour-vision separation against a white surface; the sourcing set
   sits below 3:1 contrast, which is why every segment is labelled and repeated in a table. */
const SOURCING = [
  { id: 'direct', label: 'Direct source', color: '#10b981', note: 'A source states substantially this policy.' },
  { id: 'inferred', label: 'Inferred from source', color: '#3b82f6', note: 'The Bench states the policy as an inference from what a source supports.' },
  { id: 'constructed', label: 'Constructed', color: '#f59e0b', note: 'A comparison policy written for the case rather than drawn from a source.' },
];
const TYPES = [
  { id: 'public', label: 'Public', color: '#2563eb' },
  { id: 'expert', label: 'Expert', color: '#059669' },
  { id: 'framework', label: 'Framework', color: '#7c3aed' },
];
const ROUTES = [
  { id: 'reviewed', label: 'Confirmed in an approved crosswalk', color: '#0f766e' },
  { id: 'case-record', label: 'Carried over from the case record', color: '#3b82f6' },
  { id: 'wording', label: 'Read from the policy wording', color: '#f59e0b' },
  { id: 'authored', label: 'Assigned when the policy was written', color: '#94a3b8' },
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const n = (x) => Number(x).toLocaleString('en-US');
const pct = (x, of) => `${((x / of) * 100).toFixed(1)}%`;

/* A proportion bar. A segment is labelled inside itself only when the label fits; the rest are
   named by the legend and the table under every bar. */
function pbar(parts, total, minLabelShare = 0.09) {
  return `<div class="pbar">${parts.filter((p) => p.value > 0).map((p) => (
    // A track segment is the empty space a bar does not fill. It carries no quantity, so it gets
    // no label and no tooltip — a number there would encode the gap as if it meant something.
    p.track
      ? `<div class="seg track" style="flex:${p.value};background:${p.color}"></div>`
      : `<div class="seg" style="flex:${p.value};background:${p.color}"
           data-tip="${esc(p.label)}|${n(p.value)} · ${pct(p.value, total)}${p.note ? `|${esc(p.note)}` : ''}">
          ${p.value / total >= minLabelShare ? `<em>${n(p.value)}</em>` : ''}
        </div>`
  )).join('')}</div>`;
}

const legend = (parts) => `<ul class="legend">${parts.map((p) => `<li><i style="background:${p.color}"></i>${esc(p.label)}</li>`).join('')}</ul>`;

function table(head, rows) {
  // Wrapped so a wide table scrolls inside itself rather than widening the page on a phone.
  return `<div class="table-scroll"><table class="figures">
    <thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

const swatch = (color, label) => `<span class="swatch" style="background:${color}"></span>${esc(label)}`;

function render(d) {
  const bySourcing = SOURCING.map((s) => ({ ...s, value: d.sourcing[s.id] }));
  const byRoute = ROUTES.map((r) => ({ ...r, value: d.type_routes[r.id] }));
  const combos = Object.entries(d.type_combinations).sort((a, b) => b[1] - a[1]);
  const typeLabel = (key) => key.split('+').map((t) => TYPES.find((x) => x.id === t).label).join(' + ');

  return `
  <div class="tiles">
    <div class="tile"><b>${n(d.cases)}</b><span>cases</span></div>
    <div class="tile"><b>${n(d.policies)}</b><span>policies, each with a concise and a detailed form</span></div>
    <div class="tile"><b>${pct(d.sourcing.direct + d.sourcing.inferred, d.policies)}</b><span>drawn from a source, directly or by inference</span></div>
    <div class="tile"><b>${n(d.citations.total)}</b><span>citations recorded across the cases</span></div>
  </div>

  <section class="panel">
    <h2>How each policy was sourced</h2>
    <p class="note">Two thirds of the collection is inferred: a source supports the view, evidence
      or principle, and the Bench states the policy from it. A directly sourced policy is one a
      source states in substantially these words. Sourcing is separate from policy type.</p>
    ${legend(bySourcing)}
    ${pbar(bySourcing, d.policies)}
    ${table(['Sourcing', 'Policies', 'Share'], bySourcing.map((s) => [swatch(s.color, s.label), n(s.value), pct(s.value, d.policies)]))}
    <p class="note">${n(d.written_by_bench)} of the ${n(d.sourcing.constructed)} constructed policies were written by the Bench for cases
      recording no policy of one type, so every case can be evaluated across all three. Each is
      marked where it appears. ${n(d.cases_objecting_to_pool)} cases judged the evidence too thin for one, and say so.</p>
  </section>

  <section class="panel">
    <h2>Policy type</h2>
    <p class="note">A policy can represent more than one kind of position, so these count
      assignments and do not sum to ${n(d.policies)}.</p>
    <div class="rows">
      ${TYPES.map((t) => `<div class="row"><span class="row-label">${t.label}</span>
        ${pbar([
          { ...t, value: d.by_type[t.id].assignments },
          { id: 'track', color: '#eef2f7', track: true, value: Math.max(...TYPES.map((x) => d.by_type[x.id].assignments)) - d.by_type[t.id].assignments },
        ], Math.max(...TYPES.map((x) => d.by_type[x.id].assignments)), 0.06)}
      </div>`).join('')}
    </div>
    ${table(['Type', 'Assignments', 'Per case', 'Range'], TYPES.map((t) => [
      swatch(t.color, t.label), n(d.by_type[t.id].assignments), d.by_type[t.id].per_case.mean,
      `${d.by_type[t.id].per_case.min}–${d.by_type[t.id].per_case.max}`,
    ]))}
    <p class="note">Public is the thinnest layer: ${n(d.by_type.public.assignments)} assignments against ${n(d.by_type.expert.assignments)} Expert, a mean of
      ${d.by_type.public.per_case.mean} per case. What the affected public wants is harder to source than what a
      professional body recommends.</p>
    ${table(['Combination', 'Policies'], combos.map(([k, v]) => [typeLabel(k), n(v)]))}
  </section>

  <section class="panel">
    <h2>Type against sourcing</h2>
    <p class="note">${n(d.by_type.expert.sourcing.direct)} of the ${n(d.sourcing.direct)} directly sourced policies are Expert. A guideline states a
      policy in nearly the words a policy needs; a survey reports a preference and a framework
      supplies a principle, and both take a step to become one.</p>
    ${legend(SOURCING)}
    <div class="rows">
      ${TYPES.map((t) => `<div class="row"><span class="row-label">${t.label}</span>
        ${pbar(SOURCING.map((s) => ({ ...s, label: `${t.label} · ${s.label}`, value: d.by_type[t.id].sourcing[s.id] })), d.by_type[t.id].assignments)}
      </div>`).join('')}
    </div>
    ${table(['Type', ...SOURCING.map((s) => s.label)], TYPES.map((t) => [swatch(t.color, t.label), ...SOURCING.map((s) => n(d.by_type[t.id].sourcing[s.id]))]))}
  </section>

  <section class="panel">
    <h2>How each type label was arrived at</h2>
    <p class="note">Only the first has been checked, and that check is an editorial crosswalk to an
      earlier released record, not an independent re-derivation. The second carries over a label
      written into the case record by hand. The third reads the policy's own wording where the
      record said nothing, so it is the smallest set and the likeliest to be wrong.</p>
    ${legend(byRoute)}
    ${pbar(byRoute, d.policies)}
    ${table(['Route', 'Policies', 'Share'], byRoute.map((r) => [swatch(r.color, r.label), n(r.value), pct(r.value, d.policies)]))}
  </section>

  <section class="panel">
    <h2>Sources</h2>
    <p class="note">${n(d.citations.resolved)} of the ${n(d.citations.total)} citations resolve to a DOI, a PubMed record or an official
      page. The rest resolve to a scholarly search, which finds the source without linking to it.
      ${n(d.citations.cases_with_two_or_fewer)} cases rest on two citations or fewer.</p>
    <p class="note">${n(d.citations.policy_level_cases)} cases record citations policy by policy. ${n(d.citations.cases_with_layer_notes)} carry the case file's account
      of the evidence behind each kind of position, which a policy shows where it has no citation
      of its own.</p>
    ${table(['Citations', 'Count'], [
      ['Recorded across all cases', n(d.citations.total)],
      ['Resolving to a canonical locator', n(d.citations.resolved)],
      ['Cases with citations per policy', n(d.citations.policy_level_cases)],
      ['Cases carrying the case file&rsquo;s own account by type', n(d.citations.cases_with_layer_notes)],
      ['Cases resting on two citations or fewer', n(d.citations.cases_with_two_or_fewer)],
    ])}
  </section>

  <section class="panel">
    <h2>Read next</h2>
    <p class="note">These figures are generated from the published files and change with them.</p>
    <div class="readnext">
      <a href="../">Browse the cases →</a>
      <a href="https://github.com/alethicresearch/bioethics-bench/blob/main/docs/COMPOSITION.md" target="_blank" rel="noopener">The same figures as a document ↗</a>
      <a href="https://github.com/alethicresearch/bioethics-bench/blob/main/docs/REVIEW_QUEUE.md" target="_blank" rel="noopener">What is left to review ↗</a>
      <a href="https://github.com/alethicresearch/bioethics-bench/blob/main/resources/cases/composition.v1.json" target="_blank" rel="noopener">The figures as data ↗</a>
    </div>
  </section>`;
}

/* One tooltip element, moved to whichever segment the pointer is on. */
function tooltips(root) {
  const tip = document.createElement('div');
  tip.className = 'tip';
  document.body.appendChild(tip);
  const show = (event) => {
    const seg = event.target.closest('.seg[data-tip]');
    if (!seg) return;
    const [title, value, note] = seg.dataset.tip.split('|');
    tip.innerHTML = `<b>${esc(title)}</b>${esc(value)}${note ? `<br>${esc(note)}` : ''}`;
    tip.classList.add('on');
    const box = seg.getBoundingClientRect();
    const width = tip.offsetWidth;
    tip.style.left = `${Math.max(8, Math.min(box.left + box.width / 2 - width / 2, window.innerWidth - width - 8))}px`;
    tip.style.top = `${box.top > 90 ? box.top - tip.offsetHeight - 8 : box.bottom + 8}px`;
  };
  root.addEventListener('mousemove', show);
  // The tooltip is placed against the segment's box, so a scroll would leave it behind.
  window.addEventListener('scroll', () => tip.classList.remove('on'), { passive: true });
  root.addEventListener('mouseleave', () => tip.classList.remove('on'), true);
  root.addEventListener('mouseout', (e) => { if (!e.relatedTarget?.closest?.('.seg')) tip.classList.remove('on'); });
}

fetch(DATA, { cache: 'no-store' })
  .then((response) => {
    if (!response.ok) throw new Error(`the figures could not be read (${response.status})`);
    return response.json();
  })
  .then((data) => {
    document.querySelector('#page .wrap').innerHTML = render(data);
    tooltips(document.getElementById('page'));
  })
  .catch((error) => {
    document.getElementById('loading').textContent = `The figures could not be loaded: ${error.message}.`;
  });
