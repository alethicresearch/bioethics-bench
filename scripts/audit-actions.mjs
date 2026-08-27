#!/usr/bin/env node
/**
 * The action worksheet: what does each candidate tell you to DO in this scenario?
 *
 * ── Why this is a worksheet and not a check ─────────────────────────────────────
 *
 * The M005 defect was five candidates from five sources across three pools, all
 * schema-valid, four of which recommended the same action. It was found by hand, by writing
 * each candidate's action next to the others and seeing four identical entries.
 *
 * An automated version was attempted and abandoned. Lexical overlap between the two
 * candidates that collapsed — `exp1` "elicit the patient's preferences, then provide
 * truthful information at the pace requested" and `fw1` "ask how they want serious
 * information handled and disclose truthfully according to that choice" — scores **0.14**,
 * against a threshold of 0.50 that already flags ordinary convergence. They shared exactly
 * two content words: "information" and "family". They said the same thing in different
 * vocabulary, which is what paraphrase IS, and no lexical threshold separates that from two
 * candidates that merely sound alike. A threshold low enough to catch 0.14 flags everything.
 *
 * So this defect class is not automatable by that route, and a tool that appeared to guard
 * it would be worse than none: it would licence skipping the reading that actually works.
 *
 * What is automatable is the *setup*. This prints the scenario once and every candidate
 * beside a blank, so the comparison is made in one place against one scenario rather than
 * by scrolling. Fill in what each candidate does — the first action, not its justification —
 * and the collapses become visible the way they did in M005.
 *
 *   node scripts/audit-actions.mjs <case-id-prefix>     e.g. m005, f11
 *   node scripts/audit-actions.mjs m005 --detailed      use the detailed representation
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const [prefix, ...rest] = process.argv.slice(2);
if (!prefix) {
  console.error('Usage: node scripts/audit-actions.mjs <case-id-prefix> [--detailed]');
  process.exit(2);
}
const form = rest.includes('--detailed') ? 'detailed' : 'concise';

const root = join(process.cwd(), 'data');
let found = null;
for (const collection of readdirSync(root)) {
  const dir = join(root, collection);
  if (!existsSync(dir)) continue;
  let files;
  try { files = readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json'); }
  catch { continue; }
  for (const f of files) {
    const r = JSON.parse(readFileSync(join(dir, f), 'utf8'));
    if (!r.case_id?.startsWith(prefix.toLowerCase())) continue;
    if (r.representation?.form && r.representation.form !== form) continue;
    found = { record: r, collection };
  }
}
if (!found) { console.error(`No ${form} record whose case_id starts with "${prefix}".`); process.exit(1); }

const { record: r, collection } = found;
const line = '─'.repeat(78);

console.log(`\n${r.case_id}  ·  ${form}  ·  ${collection}  ·  ${r.benchmark_profile}`);
console.log(line);
console.log('\nDECISION QUESTION\n  ' + r.decision_question);
console.log('\nSCENARIO\n' + r.scenario.replace(/(.{1,74})(\s|$)/g, '  $1\n'));
for (const s of r.stipulations || []) console.log(`  [stipulated] ${s.statement}`);

console.log(`\n${line}\nFor each candidate, write the FIRST ACTION it requires in this scenario.`);
console.log('Not its ground, not its justification — what a clinician would do on Monday.');
console.log('Two candidates with the same entry are one candidate in two voices.\n');

for (const pool of ['public', 'expert', 'framework']) {
  for (const c of r.candidate_pools?.[pool] || []) {
    console.log(`  ${c.id.padEnd(5)} [${pool}]  ${c.provenance?.construction_method || '?'}`);
    console.log(c.text.replace(/(.{1,70})(\s|$)/g, '      $1\n'));
    console.log('      ACTION: ______________________________________________\n');
  }
}
console.log(line);
console.log('Distinct actions:  ____ of ' +
  ['public', 'expert', 'framework'].reduce((n, p) => n + (r.candidate_pools?.[p] || []).length, 0) +
  ' candidates');
console.log('A framework layer with every candidate on one side of the axis does not span the case.');
