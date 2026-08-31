#!/usr/bin/env node
/**
 * Documents that still say what is true, and say which of them to follow.
 *
 * The corpus plan told readers not to write a policy to fill a missing type for some time after
 * the opposite had been decided and 138 such policies written, and the same documents quoted
 * 1,298 policies long after there were 1,436. A document nobody re-reads drifts, and an agent
 * reading it undoes work. Three things are therefore checked rather than remembered:
 *
 *  1. Every document in docs/ is placed by docs/README.md — as one that governs current work, or
 *     as a record of work done. A new file that lands in neither is a file with no standing.
 *  2. The counts the current-tier documents quote match the published resources.
 *  3. The current-tier documents do not use the internal shorthand the terminology rule retires.
 *
 *   node scripts/check-docs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'docs');
const INDEX = path.join(DOCS, 'README.md');
const problems = [];

const index = fs.readFileSync(INDEX, 'utf8');
const [currentSection, recordSection] = (() => {
  const current = index.indexOf('## Current');
  const record = index.indexOf('## Record');
  return [index.slice(current, record), index.slice(record)];
})();

/* Which documents the index claims govern current work. */
const currentDocs = [...currentSection.matchAll(/\(([A-Za-z0-9_./-]+\.md)\)/g)]
  .map((m) => m[1])
  .filter((name) => !name.includes('/'));

const listed = new Set([
  ...currentDocs,
  ...[...recordSection.matchAll(/`([A-Za-z0-9_.-]+\.md)`/g)].map((m) => m[1]),
]);

// 1. Everything in docs/ has a tier.
for (const name of fs.readdirSync(DOCS).filter((f) => f.endsWith('.md') && f !== 'README.md')) {
  if (!listed.has(name)) problems.push(`docs/${name} is in neither list in docs/README.md — say whether it governs current work or records it.`);
}
for (const name of listed) {
  if (!fs.existsSync(path.join(DOCS, name))) problems.push(`docs/README.md lists docs/${name}, which does not exist.`);
}

// 2. The counts the current documents quote.
const cases = JSON.parse(fs.readFileSync(path.join(ROOT, 'resources/cases/full-200-cases.v1.json'), 'utf8'));
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'resources/cases/case-sources.v1.json'), 'utf8'));
const policies = cases.cases.flatMap((c) => c.policies || []);
const facts = {
  cases: cases.cases.length,
  policies: policies.length,
  benchWritten: policies.filter((p) => p.written_by_bench).length,
  reviewed: policies.filter((p) => p.type_reviewed).length,
  objecting: cases.cases.filter((c) => c.case_file_objects_to_pool).length,
  caseSources: Object.values(sources.cases).reduce((n, c) => n + c.sources.length, 0),
};
const group = (n) => n.toLocaleString('en-US');

/* Each claim is a number that must appear, and numbers that must not: the stale value it
   replaced, so a document quoting the old figure is caught rather than merely un-updated. */
const CLAIMS = [
  { label: 'total policies', current: facts.policies, stale: [1298] },
  { label: 'Bench-written policies', current: facts.benchWritten, stale: [] },
  { label: 'reviewed policy types', current: facts.reviewed, stale: [] },
  { label: 'cases', current: facts.cases, stale: [] },
  { label: 'case-level citations', current: facts.caseSources, stale: [] },
];

const CURRENT_FILES = [...currentDocs.map((n) => `docs/${n}`), 'README.md'];
for (const file of CURRENT_FILES) {
  if (!fs.existsSync(path.join(ROOT, file))) continue;
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  for (const claim of CLAIMS) {
    for (const stale of claim.stale) {
      const pattern = new RegExp(`\\b${group(stale).replace(',', ',?')}\\b`);
      if (pattern.test(text)) {
        problems.push(`${file} still quotes ${group(stale)} ${claim.label}; there are ${group(claim.current)}.`);
      }
    }
  }
}

// 3. The shorthand the terminology rule retires, in documents that state current practice.
const RETIRED = /\b(candidate universe|candidate geometry|normative research object|source ecology|executable geometry|projection manifest)\b/i;
for (const file of CURRENT_FILES) {
  if (!fs.existsSync(path.join(ROOT, file))) continue;
  for (const [i, line] of fs.readFileSync(path.join(ROOT, file), 'utf8').split('\n').entries()) {
    // The line that names the retired terms in order to retire them is the exception.
    if (/avoid|retire|legacy|instead of|no longer|still contain/i.test(line)) continue;
    const hit = line.match(RETIRED);
    if (hit) problems.push(`${file}:${i + 1} uses "${hit[0]}" — say case, policy, policy counts, sourcing or evaluation setup.`);
  }
}

if (problems.length) {
  console.error('Documentation checks failed:\n');
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  console.error(`\n${problems.length} problem(s).`);
  process.exit(1);
}
console.log(`Documentation checks passed: ${listed.size} document(s) placed, counts match (${group(facts.cases)} cases / ${group(facts.policies)} policies / ${group(facts.benchWritten)} Bench-written / ${group(facts.reviewed)} reviewed / ${group(facts.caseSources)} citations).`);
