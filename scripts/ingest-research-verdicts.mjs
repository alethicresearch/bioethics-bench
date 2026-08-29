#!/usr/bin/env node
/**
 * Checks returned deep-research verdicts against current repository state.
 *
 * A review that cannot be returned into the repository is a request, not a gate. This is the
 * return path. It is unforgiving about three things and deliberately forgiving about a fourth.
 *
 * Refused:
 *   1. A verdict whose *unit* has changed since it was reviewed. Each unit carries a fingerprint
 *      over the candidate's text, basis and provenance — not the record hash, which moves whenever
 *      anything in the record moves. Repairing a citation in `pub1` must not invalidate a finding
 *      about `exp2`, and here it does not: only the affected unit is refused, and the refusal says
 *      which.
 *   2. A verdict naming a unit that does not exist, or a verdict value outside its task's set.
 *   3. A verdict asserting a defect or a discovery with no evidence. A bare judgment is not one.
 *
 * Accepted:
 *   4. Partial returns, in any order, over any period. Coverage is computed from the corpus rather
 *      than from what was returned, so an incomplete review reports as incomplete instead of
 *      looking finished.
 *
 * It decides nothing. No record is edited and `reviewed_by_human` is never set here.
 *
 *   node scripts/ingest-research-verdicts.mjs            report; non-zero only on a malformed verdict
 *   node scripts/ingest-research-verdicts.mjs --strict   also non-zero while any unit is unreviewed
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { collectUnits } from './review-units.mjs';

const VERDICTDIR = 'docs/full-corpus/review/research-tasks/verdicts';
const strict = process.argv.includes('--strict');

const VERDICTS = {
  A: new Set(['confirmed', 'misdescribed', 'unverifiable']),
  B: new Set(['no-omission', 'omission-found', 'unverifiable']),
  C: new Set(['resourced', 'not-identifiable', 'studies-do-not-support']),
};
const NEEDS_EVIDENCE = new Set(['misdescribed', 'omission-found', 'studies-do-not-support', 'resourced']);
const NOTABLE = new Set([...NEEDS_EVIDENCE, 'unverifiable', 'not-identifiable']);

const families = collectUnits();
const problems = [];
const stale = [];
const applied = [];
const accepted = new Map();

if (existsSync(VERDICTDIR)) {
  for (const file of readdirSync(VERDICTDIR).filter((f) => f.endsWith('.json'))) {
    let v;
    try { v = JSON.parse(readFileSync(join(VERDICTDIR, file), 'utf8')); }
    catch (e) { problems.push(`${file}: not valid JSON — ${e.message}`); continue; }

    const family = String(v.family ?? '').toUpperCase();
    const target = families.get(family);
    if (!target) { problems.push(`${file}: names family "${v.family}", which has no review units`); continue; }
    if (!v.reviewer || !v.reviewed_at) { problems.push(`${file}: needs both "reviewer" and "reviewed_at"`); continue; }

    for (const c of v.candidates ?? []) {
      const unit = target.units.find((u) => u.id === c.id && u.task === c.task);
      if (!unit) {
        problems.push(`${file}: verdict for ${c.id}/task ${c.task}, which is not a unit of ${family}`);
        continue;
      }
      if (!VERDICTS[c.task]?.has(c.verdict)) {
        problems.push(`${file}: ${c.id} task ${c.task} verdict "${c.verdict}" is not one of ${[...VERDICTS[c.task]].join(' | ')}`);
        continue;
      }
      if (NEEDS_EVIDENCE.has(c.verdict) && !String(c.evidence ?? '').trim()) {
        problems.push(`${file}: ${c.id} returns "${c.verdict}" with no evidence — a finding has to show its working`);
        continue;
      }
      // The forgiving part: only this unit's own fingerprint matters.
      if (!c.fingerprint) {
        problems.push(`${file}: ${c.id} carries no fingerprint — copy it from the task file or RESEARCH_HANDOFF.md`);
        continue;
      }
      if (c.fingerprint !== unit.fingerprint) {
        // A finding that was acted on necessarily moves the fingerprint of the thing it was about,
        // so "superseded" and "implemented" look identical from here. The Bench lane records the
        // difference by stamping `applied` on the verdict when it implements the finding; without
        // that, an accepted review would read as work needing redoing, which is the opposite of
        // what happened to it.
        if (c.applied) {
          applied.push(`${family}/${c.id} (task ${c.task}): ${c.verdict}, applied — ${String(c.applied).replace(/\s+/g, ' ').slice(0, 140)}`);
        } else {
          stale.push(`${family}/${c.id} (task ${c.task}): reviewed \`${c.fingerprint}\`, now \`${unit.fingerprint}\` — this candidate was repaired after your read; re-read this unit only`);
        }
        continue;
      }
      accepted.set(`${family}/${c.id}/${c.task}`, { family, ...c, reviewer: v.reviewer });
    }
  }
}

if (problems.length) {
  for (const p of problems) console.error(`✗ ${p}`);
  console.error(`✗ ${problems.length} malformed verdict(s). Nothing was ingested.`);
  process.exit(1);
}

let totalUnits = 0;
for (const [, { units }] of families) totalUnits += units.length;
const familiesTouched = new Set([...accepted.values()].map((a) => a.family));

const returned = accepted.size + applied.length;
console.log(`Deep-research review: ${returned} of ${totalUnits} units returned across ${new Set([...familiesTouched, ...applied.map((a) => a.slice(0, 4))]).size} of ${families.size} families.`);

if (applied.length) {
  console.log(`${applied.length} finding(s) accepted and implemented:`);
  for (const a of applied) console.log(`  + ${a}`);
}

if (stale.length) {
  console.log(`${stale.length} returned unit(s) superseded since review:`);
  for (const s of stale) console.log(`  ~ ${s}`);
}

// A finding can be handled two ways, and both must read as handled rather than outstanding.
// Either the fix moved the unit's fingerprint — caught above — or it was a provenance declaration
// that left the fingerprint matching, which lands here. Without this split an addressed finding
// prints as "needs action" forever, and a list that never shrinks is a list nobody works.
const notable = [...accepted.values()].filter((a) => NOTABLE.has(a.verdict));
const handled = notable.filter((a) => a.applied);
const outstanding = notable.filter((a) => !a.applied);

if (handled.length) {
  console.log(`${handled.length} finding(s) accepted and addressed in place:`);
  for (const f of handled) {
    console.log(`  + ${f.family}/${f.id} (task ${f.task}): ${f.verdict} — ${String(f.applied).replace(/\s+/g, ' ').slice(0, 140)}`);
  }
}
if (outstanding.length) {
  console.log(`${outstanding.length} unit(s) need action or could not be verified:`);
  for (const f of outstanding) {
    console.log(`  ! ${f.family}/${f.id} (task ${f.task}): ${f.verdict} — ${String(f.evidence ?? '').replace(/\s+/g, ' ').slice(0, 160)}`);
  }
}

if (returned < totalUnits) {
  console.log('Current state and per-unit fingerprints: docs/full-corpus/review/RESEARCH_HANDOFF.md');
  if (strict) process.exit(1);
}
