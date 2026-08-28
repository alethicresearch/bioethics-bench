#!/usr/bin/env node
// Source-to-policy fidelity checks over the Full Corpus executable subset.
//
// Two kinds of check live here and they are deliberately not treated alike.
//
// The invariants are properties the four-basis rule makes structural, so a violation is a
// defect and they exit non-zero: every candidate carries at least one source, framework
// basis appears only in the framework pool and nowhere else, and no candidate is a
// synthetic author construction, which this corpus does not use.
//
// The heuristics are reading aids. Whether a candidate's evidence bears on the represented
// action is a judgment about meaning, and no string test decides it. These print and never
// fail, because tuning a keyword list until it goes quiet would replace the judgment rather
// than support it — an earlier pass of exactly these heuristics produced four flags that
// were all false positives on phrasing ("inferred" against "inference", "do not" against
// "does not"). Read the output; do not chase it to zero.
//
//   node scripts/fidelity-audit.mjs            invariants only, exit non-zero on failure
//   node scripts/fidelity-audit.mjs --report   invariants plus the heuristic reading aids

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recordDir = join(root, 'data', 'benchmark');
const POOLS = ['public', 'expert', 'framework'];
const report = process.argv.includes('--report');

const records = readdirSync(recordDir)
  .filter((f) => f.endsWith('.json'))
  .sort()
  .map((f) => ({ file: f, record: JSON.parse(readFileSync(join(recordDir, f), 'utf8')) }));

const problems = [];
const notes = [];
let candidateCount = 0;
const basisTally = new Map();

for (const { file, record } of records) {
  const pools = record.candidate_pools ?? {};
  for (const pool of POOLS) {
    for (const candidate of pools[pool] ?? []) {
      candidateCount += 1;
      const key = `${pool} / ${candidate.policy_basis}`;
      basisTally.set(key, (basisTally.get(key) ?? 0) + 1);

      const sources = candidate.provenance?.sources ?? [];
      if (sources.length === 0) {
        problems.push(`${file}: ${candidate.id} carries no provenance sources`);
      }
      // A framework-derived policy is reasoned from a normative position; a public or
      // expert candidate is adapted from what a source actually says. Crossing those is
      // how a Bench-authored rule acquires the standing of evidence.
      if (pool === 'framework' && candidate.policy_basis !== 'framework-derived-policy') {
        problems.push(`${file}: ${candidate.id} is in the framework pool with basis ${candidate.policy_basis}`);
      }
      if (pool !== 'framework' && candidate.policy_basis === 'framework-derived-policy') {
        problems.push(`${file}: ${candidate.id} claims framework-derived basis in the ${pool} pool`);
      }
      if (candidate.policy_basis === 'synthetic-author-constructed-policy') {
        problems.push(`${file}: ${candidate.id} is a synthetic author-constructed policy; this corpus represents none`);
      }
    }
  }
}

if (report) {
  // Heuristic 1 — does each inferred candidate say what the step from evidence to policy
  // is? Phrasing varies widely, so treat a silent candidate as worth reading, not as wrong.
  const bridgeMarks = [
    'inference', 'inferred', 'translation', 'bench-authored', 'bench construction',
    'completion', 'not attributed', 'does not', 'do not', 'rather than', 'not a claim',
    'not a quotation', 'not a universal',
  ];
  for (const { file, record } of records.filter((r) => r.file.includes('concise'))) {
    for (const pool of ['public', 'expert']) {
      for (const candidate of record.candidate_pools?.[pool] ?? []) {
        if (candidate.policy_basis !== 'source-informed-policy-inference') continue;
        const summary = (candidate.provenance?.summary ?? '').toLowerCase();
        if (!bridgeMarks.some((m) => summary.includes(m))) {
          notes.push(`${record.case_id}: ${candidate.id} (${pool}) — inferred candidate, no bridge language matched; read it`);
        }
      }
    }
  }

  // Heuristic 2 — candidates that say nearly the same thing. Verbatim repeats are a
  // validator error already; this finds the near ones. Across pools a high overlap can be
  // genuine convergence between what the public wants and what professionals recommend,
  // which is a real measurement rather than a defect — unless it is the only cross-source
  // pair those two pools have, in which case it is degenerate.
  const stop = new Set(['that', 'this', 'with', 'when', 'from', 'they', 'their', 'been', 'which', 'would', 'should', 'because', 'while', 'rather', 'than', 'under', 'after', 'before']);
  const tokens = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 3 && !stop.has(w));
  const jaccard = (a, b) => {
    const A = new Set(a); const B = new Set(b);
    return [...A].filter((x) => B.has(x)).length / new Set([...A, ...B]).size;
  };
  for (const { record } of records.filter((r) => r.file.includes('concise'))) {
    const all = [];
    for (const pool of POOLS) for (const c of record.candidate_pools?.[pool] ?? []) all.push({ ...c, pool, toks: tokens(c.text) });
    for (let i = 0; i < all.length; i += 1) {
      for (let j = i + 1; j < all.length; j += 1) {
        const sim = jaccard(all[i].toks, all[j].toks);
        if (sim >= 0.5) {
          notes.push(`${record.case_id}: ${all[i].id} (${all[i].pool}) and ${all[j].id} (${all[j].pool}) overlap ${sim.toFixed(2)}; check they direct different actions`);
        }
      }
    }
  }

  // Heuristic 3 — singleton pools. Legitimate only after a competing-policy sweep showed
  // convergence, so each one should be findable in the dossier. Reported for reading
  // because dossiers state the conclusion in prose that varies too much to match reliably.
  for (const { record } of records.filter((r) => r.file.includes('concise'))) {
    for (const pool of POOLS) {
      if ((record.candidate_pools?.[pool] ?? []).length === 1) {
        notes.push(`${record.case_id}: singleton ${pool} pool — confirm the dossier records a competing-policy sweep`);
      }
    }
  }
}

if (problems.length) {
  for (const p of problems) console.error(`✗ ${p}`);
  console.error(`✗ ${problems.length} fidelity invariant violation(s).`);
  process.exit(1);
}

console.log(`✓ ${candidateCount} candidates: all sourced, basis confined to its pool, none synthetic.`);
if (report) {
  console.log('\nBasis distribution:');
  for (const [key, n] of [...basisTally.entries()].sort()) console.log(`  ${key}: ${n}`);
  console.log(`\n${notes.length} item(s) for reading (never failures):`);
  for (const n of notes) console.log(`  · ${n}`);
}
