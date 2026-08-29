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
// Matches a citation whose warrant is one of this repository's own documents rather than an
// external source. Deliberately narrow: it must name a Bench artefact, so a citation that
// openly reports an unresolved source is not caught by it — that gap is recorded in
// docs/full-corpus/review/SOURCE_TRACEABILITY_REVIEW.md instead of hidden behind a pointer.
const SELF_REFERENCE = /\b(candidate audit|deep[- ]case|deep case file|disposition ledger)\b|\bM\d{3}\s+(candidate\s+)?audit\b|\bthis (dossier|repository|corpus)\b/i;

// Citations that assert what a body's guidance says now, rather than pinning an issue.
const STANDING_GUIDANCE = /\bcurrent(ly)?\b|\bas of\b|\blatest\b|\bin force\b/i;

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
      // A candidate's warrant must point outward. A citation that names one of this
      // repository's own audit or dossier documents is circular: the record is grounded in
      // the document that was written from the record. Seven such citations existed, all
      // of them in the public pool and all on direct-policy-evidence candidates — the
      // strongest basis, where a false claim of grounding does the most damage.
      for (const source of candidate.provenance?.sources ?? []) {
        if (SELF_REFERENCE.test(source.citation ?? '')) {
          problems.push(`${file}: ${candidate.id} cites a Bench document as its source warrant — "${source.citation}"`);
        }
        // A citation to standing professional guidance often has no publication year, because
        // the body revises it in place — "current ACS guidance," "Code of Medical Ethics
        // Opinion 2.1.2." That is honest, but it is only checkable if the record says when
        // "current" was. The record's as_of_date is what supplies it, so a record making such
        // a claim without one asserts something no reader can verify or falsify.
        if (STANDING_GUIDANCE.test(source.citation ?? '') && !record.as_of_date) {
          problems.push(`${file}: ${candidate.id} cites standing guidance as current, but the record has no as_of_date to anchor it — "${source.citation}"`);
        }
      }
    }
  }
}

// Reported on every run, not only under --report: a candidate whose warrant is an
// unresolved source. This is not a schema violation and it does not fail the build, because
// the gap is documented and has a named resolution path. It is printed unconditionally so
// that no release run can pass without the reader seeing it.
const unresolved = [];
for (const { record } of records.filter((r) => r.file.includes('concise'))) {
  for (const pool of POOLS) {
    for (const candidate of record.candidate_pools?.[pool] ?? []) {
      const sources = candidate.provenance?.sources ?? [];
      const open = sources.filter((s) => /^UNRESOLVED SOURCE\b/.test(s.citation ?? ''));
      if (!open.length) continue;
      const soleWarrant = open.length === sources.length;
      unresolved.push(
        `${record.case_id}: ${candidate.id} (${pool}, ${candidate.policy_basis}) — `
        + `${open.length}/${sources.length} source(s) unresolved`
        + `${soleWarrant ? '; UNRESOLVED IS THE CANDIDATE\'S ONLY WARRANT' : ''}`,
      );
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

console.log(`✓ ${candidateCount} candidates: all sourced, basis confined to its pool, none synthetic, no Bench document cited as warrant.`);

if (unresolved.length) {
  console.log(`! ${unresolved.length} candidate(s) rest partly or wholly on an unresolved source:`);
  for (const u of unresolved) console.log(`  ! ${u}`);
  console.log('  See docs/full-corpus/review/SOURCE_TRACEABILITY_REVIEW.md for the disposition.');
}
if (report) {
  console.log('\nBasis distribution:');
  for (const [key, n] of [...basisTally.entries()].sort()) console.log(`  ${key}: ${n}`);
  console.log(`\n${notes.length} item(s) for reading (never failures):`);
  for (const n of notes) console.log(`  · ${n}`);
}
