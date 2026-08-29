#!/usr/bin/env node
/**
 * Generates the deep-research task package: the review work that remains on the Full Corpus and
 * that a model with retrieval can do, packaged so a person or an agent can pick up one unit,
 * answer it against sources, and return a verdict this repository can ingest.
 *
 * Six model-run review passes have closed. Each answered a question about the record. What is
 * left needs the sources themselves:
 *
 *   A. SOURCE-DESCRIPTION  — 55 inference bridges describe what their sources found. The bridge
 *      logic is checked; the descriptions were largely taken on trust. A bridge can be sound and
 *      still rest on a misdescribed finding.
 *   B. WHOLE-DOCUMENT      — the warrant review read the passage each candidate cites. Twice,
 *      reading the whole document found the source taking a position on another question the
 *      family divides along (M041, M042). Found only in deep reads, so under-detected.
 *   C. RE-SOURCE           — M045 and M060 have public pools derived from the professional-body
 *      document their expert pools cite. If the underlying public-attitude studies exist and can
 *      be cited directly, the families are repaired rather than held.
 *
 * Tasks are emitted per family so a unit is a coherent sitting. Verdicts return as JSON and are
 * checked by scripts/ingest-research-verdicts.mjs, which is what makes this a review gate rather
 * than a request: a verdict that does not name the record it judges, or judges a record whose
 * content hash has since moved, is refused.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { collectUnits, unitFingerprint } from './review-units.mjs';

const UNITS = collectUnits();
const fingerprintOf = (family, id, task) =>
  UNITS.get(family)?.units.find((u) => u.id === id && u.task === task)?.fingerprint ?? 'unknown';

const MANIFEST = 'releases/full-corpus-v1-completion-candidate/manifest.json';
const OUTDIR = 'docs/full-corpus/review/research-tasks';

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const byFamily = new Map();
for (const r of manifest.records) {
  const family = r.record_id.slice(0, 4).toUpperCase();
  if (!byFamily.has(family) || r.representation === 'concise') byFamily.set(family, r);
}

// Families whose public pool rests wholly on their own expert pool's document. M045 is caught by
// string match; M060 cites the same ASRM opinion in different words and was found by reading, so
// it is named here rather than derived.
const RESOURCE_FAMILIES = new Map([
  ['M045', 'ASRM Ethics Committee, Posthumous retrieval and use of gametes or embryos (2018) — find the public/patient attitude studies it summarises on prior consent and on partner use after death.'],
  ['M060', 'ASRM Ethics Committee, Use of reproductive technology for sex selection for nonmedical reasons (2022) — find the public-attitude studies it summarises on non-medical sex selection and family balancing.'],
]);

rmSync(OUTDIR, { recursive: true, force: true });
mkdirSync(OUTDIR, { recursive: true });

const index = [];
let unitCount = 0;

for (const family of [...byFamily.keys()].sort()) {
  const meta = byFamily.get(family);
  const rec = JSON.parse(readFileSync(meta.path, 'utf8'));

  const bridges = [];
  for (const pool of ['public', 'expert']) {
    for (const c of rec.candidate_pools?.[pool] ?? []) {
      if (c.policy_basis === 'source-informed-policy-inference') bridges.push({ pool, c });
    }
  }
  const directs = [];
  for (const pool of ['public', 'expert']) {
    for (const c of rec.candidate_pools?.[pool] ?? []) {
      if (c.policy_basis === 'direct-policy-evidence') directs.push({ pool, c });
    }
  }
  const resource = RESOURCE_FAMILIES.get(family);
  if (!bridges.length && !directs.length && !resource) continue;

  const L = [];
  L.push(`# Research task — ${family}: ${rec.title}`);
  L.push('');
  L.push('**Generated. Do not edit.** Return a verdict file, not edits to this one.');
  L.push('');
  L.push(`- Record under review: \`${rec.record_id}\``);
  L.push('- Each unit below carries a **fingerprint**. Put it in your verdict: the gate checks your');
  L.push('  unit, not the whole record, so an unrelated repair elsewhere will not invalidate your work.');
  L.push('- Current fingerprints for every family: `../RESEARCH_HANDOFF.md`');
  L.push(`- Verdict file to write: \`${OUTDIR}/verdicts/${family}.json\``);
  L.push('');
  L.push(`**Decision question the family puts to the system.** ${rec.decision_question}`);
  L.push('');
  L.push('**Fixed fact pattern.**');
  L.push('');
  L.push(String(rec.scenario).replace(/\s+/g, ' ').trim());
  L.push('');

  if (resource) {
    unitCount += 1;
    L.push('## Task C — re-source the public pool (highest priority for this family)');
    L.push('');
    L.push('Every public candidate here is grounded in a professional-body document that this');
    L.push("family's expert pool also cites, so the public–expert QCCS cells compare one document");
    L.push('against itself. The repair is to find the underlying studies and cite them directly.');
    L.push('');
    L.push(`**Document to work back from.** ${resource}`);
    L.push('');
    L.push('**What counts as success.** A named, resolvable study (PMID preferred) that reports the');
    L.push('public or patient attitude the candidate is built on, that is not authored by or');
    L.push('published under the professional body in question. **What counts as failure is equally');
    L.push('useful:** if the summarised studies cannot be identified, or exist but do not report what');
    L.push('the candidate needs, say so — that is the evidence for holding the family, and inventing');
    L.push('a plausible-looking substitute is the one outcome worse than either.');
    L.push('');
  }

  if (bridges.length) {
    unitCount += bridges.length;
    L.push('## Task A — verify what each source actually found');
    L.push('');
    L.push('Each candidate below states what its sources measured. That description has **not** been');
    L.push('checked against the sources. For each, read the cited work and answer: does it report');
    L.push('what the bridge says it reports — the population, the measure, the direction and rough');
    L.push('magnitude of the finding?');
    L.push('');
    for (const { pool, c } of bridges) {
      L.push(`### \`${c.id}\` (${pool}) — fingerprint \`${fingerprintOf(family, c.id, 'A')}\``);
      L.push('');
      L.push(`**Directs:** ${String(c.text).replace(/\s+/g, ' ')}`);
      L.push('');
      L.push(`**Claims its sources found:** ${String(c.provenance?.summary ?? '').replace(/\s+/g, ' ')}`);
      L.push('');
      L.push('**Sources:**');
      L.push('');
      for (const s of c.provenance?.sources ?? []) L.push(`- ${String(s.citation).replace(/\s+/g, ' ')}`);
      L.push('');
    }
  }

  if (directs.length) {
    unitCount += directs.length;
    L.push('## Task B — read these sources whole, not just the cited passage');
    L.push('');
    L.push('Each candidate below was verified against the passage it cites. The question here is');
    L.push('different and is the one that found real defects twice: **does the same document take a');
    L.push('position on another question this family divides along, which the record does not');
    L.push('carry?** ESHRE Task Force 14 turned out to hold a view on prior children that M041 omits;');
    L.push('the Nuffield NIPT report turned out to warn about normalisation that M042 omits. Both');
    L.push('were invisible from the abstract and from the cited passage.');
    L.push('');
    L.push('Read for what the source says about the *other* candidates in this family, not only');
    L.push('about the one citing it.');
    L.push('');
    for (const { pool, c } of directs) {
      L.push(`### \`${c.id}\` (${pool}) — fingerprint \`${fingerprintOf(family, c.id, 'B')}\``);
      L.push('');
      L.push(`**Directs:** ${String(c.text).replace(/\s+/g, ' ')}`);
      L.push('');
      L.push('**Sources:**');
      L.push('');
      for (const s of c.provenance?.sources ?? []) L.push(`- ${String(s.citation).replace(/\s+/g, ' ')}`);
      L.push('');
    }
    L.push('**The other candidates in this family, for the "does the source speak to these?" question:**');
    L.push('');
    for (const pool of ['public', 'expert', 'framework']) {
      for (const c of rec.candidate_pools?.[pool] ?? []) {
        L.push(`- \`${c.id}\` (${pool}): ${String(c.text).replace(/\s+/g, ' ')}`);
      }
    }
    L.push('');
  }

  L.push('## Returning a verdict');
  L.push('');
  L.push('Write `' + `${OUTDIR}/verdicts/${family}.json` + '` in the shape below and run');
  L.push('`node scripts/ingest-research-verdicts.mjs`. It refuses a verdict naming a unit that does');
  L.push('not exist, one asserting a defect without evidence, and one whose own unit has been');
  L.push('repaired since you read it — that last refusal names the unit, and affects only that unit.');
  L.push('');
  L.push('```json');
  L.push(JSON.stringify({
    family,
    record_id: rec.record_id,
    reviewer: 'name or agent identifier',
    reviewed_at: 'YYYY-MM-DD',
    candidates: [
      ...bridges.map(({ c }) => ({
        id: c.id,
        task: 'A',
        fingerprint: fingerprintOf(family, c.id, 'A'),
        verdict: 'confirmed | misdescribed | unverifiable',
        evidence: 'What the source actually reports — population, measure, direction, magnitude. Quote where you can.',
        proposed_repair: 'Only if misdescribed. Leave empty otherwise.',
      })),
      ...directs.map(({ c }) => ({
        id: c.id,
        task: 'B',
        fingerprint: fingerprintOf(family, c.id, 'B'),
        verdict: 'no-omission | omission-found | unverifiable',
        evidence: 'If omission-found: what the document says about another question this family divides along, and which candidate it bears on.',
        proposed_repair: '',
      })),
      ...(resource ? [{
        id: 'public-pool',
        task: 'C',
        fingerprint: fingerprintOf(family, 'public-pool', 'C'),
        verdict: 'resourced | not-identifiable | studies-do-not-support',
        evidence: 'Citations found, with PMIDs, and what each reports. Or why the summarised studies could not be identified.',
        proposed_repair: 'Proposed replacement citations, verbatim.',
      }] : []),
    ],
  }, null, 2));
  L.push('```');
  L.push('');

  writeFileSync(join(OUTDIR, `${family}.md`), `${L.join('\n')}\n`);
  index.push({ family, title: rec.title, bridges: bridges.length, directs: directs.length, resource: Boolean(resource) });
}

mkdirSync(join(OUTDIR, 'verdicts'), { recursive: true });
writeFileSync(join(OUTDIR, 'verdicts', '.gitkeep'), '');

const idx = [];
idx.push('# Deep-research task index');
idx.push('');
idx.push('**Generated by `scripts/research-tasks.mjs`. Do not edit by hand.**');
idx.push('');
idx.push(`${index.length} families, ${unitCount} review units. One file per family; each is a coherent sitting.`);
idx.push('Read `../DEEP_RESEARCH_BRIEF.md` first — it says what has already been checked, so that');
idx.push('effort goes to what has not.');
idx.push('');
idx.push('Work the **C** tasks first (2 units, both release-gating), then **B** (whole-document reads,');
idx.push('where the last two real defects were found), then **A** (the largest surface).');
idx.push('');
idx.push('| Family | Title | A: bridges | B: whole-document | C: re-source |');
idx.push('|---|---|---|---|---|');
for (const e of index) {
  idx.push(`| [${e.family}](${e.family}.md) | ${e.title} | ${e.bridges || '—'} | ${e.directs || '—'} | ${e.resource ? '**yes**' : '—'} |`);
}
idx.push('');
writeFileSync(join(OUTDIR, 'README.md'), `${idx.join('\n')}\n`);

console.log(`✓ research tasks: ${index.length} families, ${unitCount} units → ${OUTDIR}`);
