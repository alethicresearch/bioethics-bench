#!/usr/bin/env node
/**
 * Checks returned deep-research verdicts against committed state.
 *
 * A review that cannot be returned into the repository is a request, not a gate. This is the
 * return path, and it is deliberately unforgiving about the three ways an external review goes
 * wrong in practice:
 *
 *   1. The verdict judges a record that has since changed. Content hashes are recorded in the
 *      task and checked here, so a verdict on superseded text is refused rather than silently
 *      counted. This is the same discipline the vendor pin gets.
 *   2. The verdict answers some candidates and not others. Coverage is computed from the record,
 *      not from the verdict, so a partial return reports as partial.
 *   3. The verdict asserts a finding with no evidence. A `misdescribed`, `omission-found` or
 *      `studies-do-not-support` verdict must carry evidence text; a bare judgment is refused.
 *
 * It does not decide anything. Nothing here edits a record or sets `reviewed_by_human`. It reports
 * what has been reviewed, what each verdict says, and what remains — so the release gate can be
 * assessed from repository state rather than from someone's memory of who looked at what.
 *
 *   node scripts/ingest-research-verdicts.mjs            report; exit 0 unless a verdict is malformed
 *   node scripts/ingest-research-verdicts.mjs --strict   also exit non-zero while any unit is unreviewed
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const MANIFEST = 'releases/full-corpus-v1-completion-candidate/manifest.json';
const TASKDIR = 'docs/full-corpus/review/research-tasks';
const VERDICTDIR = join(TASKDIR, 'verdicts');
const strict = process.argv.includes('--strict');

const VERDICTS = {
  A: new Set(['confirmed', 'misdescribed', 'unverifiable']),
  B: new Set(['no-omission', 'omission-found', 'unverifiable']),
  C: new Set(['resourced', 'not-identifiable', 'studies-do-not-support']),
};
// Verdicts asserting a defect or a discovery must show their working.
const NEEDS_EVIDENCE = new Set(['misdescribed', 'omission-found', 'studies-do-not-support', 'resourced']);

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const byFamily = new Map();
for (const r of manifest.records) {
  const family = r.record_id.slice(0, 4).toUpperCase();
  if (!byFamily.has(family) || r.representation === 'concise') byFamily.set(family, r);
}

// Expected units, derived from the corpus rather than from the task files, so a stale task file
// cannot shrink what counts as complete.
const expected = new Map();
for (const [family, meta] of byFamily) {
  const rec = JSON.parse(readFileSync(meta.path, 'utf8'));
  const units = [];
  for (const pool of ['public', 'expert']) {
    for (const c of rec.candidate_pools?.[pool] ?? []) {
      if (c.policy_basis === 'source-informed-policy-inference') units.push({ id: c.id, task: 'A' });
      if (c.policy_basis === 'direct-policy-evidence') units.push({ id: c.id, task: 'B' });
    }
  }
  if (family === 'M045' || family === 'M060') units.push({ id: 'public-pool', task: 'C' });
  if (units.length) expected.set(family, { meta, rec, units });
}

const problems = [];
const reviewed = new Map();

if (existsSync(VERDICTDIR)) {
  for (const file of readdirSync(VERDICTDIR).filter((f) => f.endsWith('.json'))) {
    const path = join(VERDICTDIR, file);
    let v;
    try { v = JSON.parse(readFileSync(path, 'utf8')); }
    catch (e) { problems.push(`${file}: not valid JSON — ${e.message}`); continue; }

    const family = String(v.family ?? '').toUpperCase();
    const target = expected.get(family);
    if (!target) { problems.push(`${file}: names family "${v.family}", which has no review units`); continue; }
    if (v.record_id !== target.meta.record_id) {
      problems.push(`${file}: names record "${v.record_id}"; ${family}'s record is "${target.meta.record_id}"`);
      continue;
    }
    if (v.content_hash !== target.meta.content_hash) {
      problems.push(`${file}: judges content hash ${String(v.content_hash).slice(0, 22)}…, but ${family} is now ${target.meta.content_hash.slice(0, 22)}… — the record changed after this review; re-read it`);
      continue;
    }
    if (!v.reviewer || !v.reviewed_at) { problems.push(`${file}: needs both "reviewer" and "reviewed_at"`); continue; }

    const seen = new Map();
    for (const c of v.candidates ?? []) {
      const unit = target.units.find((u) => u.id === c.id && u.task === c.task);
      if (!unit) { problems.push(`${file}: verdict for ${c.id}/task ${c.task}, which is not a unit of ${family}`); continue; }
      if (!VERDICTS[c.task]?.has(c.verdict)) {
        problems.push(`${file}: ${c.id} task ${c.task} verdict "${c.verdict}" is not one of ${[...(VERDICTS[c.task] ?? [])].join(' | ')}`);
        continue;
      }
      if (NEEDS_EVIDENCE.has(c.verdict) && !String(c.evidence ?? '').trim()) {
        problems.push(`${file}: ${c.id} returns "${c.verdict}" with no evidence — a finding has to show its working`);
        continue;
      }
      seen.set(`${c.id}:${c.task}`, c);
    }
    reviewed.set(family, { verdict: v, seen, expectedUnits: target.units });
  }
}

let totalUnits = 0; let doneUnits = 0;
const findings = [];
for (const [family, { units }] of expected) {
  totalUnits += units.length;
  const got = reviewed.get(family);
  if (!got) continue;
  for (const u of units) {
    const c = got.seen.get(`${u.id}:${u.task}`);
    if (!c) continue;
    doneUnits += 1;
    if (NEEDS_EVIDENCE.has(c.verdict) || c.verdict === 'unverifiable' || c.verdict === 'not-identifiable') {
      findings.push(`${family}/${c.id} (task ${c.task}): ${c.verdict} — ${String(c.evidence ?? '').replace(/\s+/g, ' ').slice(0, 160)}`);
    }
  }
}

if (problems.length) {
  for (const p of problems) console.error(`✗ ${p}`);
  console.error(`✗ ${problems.length} verdict problem(s). Nothing was ingested.`);
  process.exit(1);
}

console.log(`Deep-research review: ${doneUnits} of ${totalUnits} units returned across ${reviewed.size} of ${expected.size} families.`);
if (findings.length) {
  console.log(`${findings.length} unit(s) need action or could not be verified:`);
  for (const f of findings) console.log(`  ! ${f}`);
}
if (doneUnits < totalUnits) {
  console.log('Remaining units are listed in docs/full-corpus/review/research-tasks/README.md.');
  console.log('This review is not the release gate on its own; it is what makes the gate assessable.');
  if (strict) process.exit(1);
}
