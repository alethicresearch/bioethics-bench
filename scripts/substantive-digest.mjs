#!/usr/bin/env node
/**
 * Digest of the execution-relevant research object, across the whole corpus.
 *
 * A record's content hash covers everything, lifecycle metadata included, so it changes
 * when a record moves editorial-review → reviewed → frozen → released. That is correct —
 * lifecycle position is part of the research object — but it means the content hash cannot
 * answer the question that matters at a freeze: *did what SACRE actually executes change?*
 *
 * This digests only that: scenario, decision question, candidate pools, stipulations,
 * representation identity, benchmark profile and version. It must be identical before and
 * after any lifecycle transition. If it moves, something substantive changed while nobody
 * was claiming to change anything.
 *
 *   node scripts/substantive-digest.mjs                    print the digest
 *   node scripts/substantive-digest.mjs --expect <sha256>  fail if it differs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { jcs } from './hash-case.mjs';

const dir = join(process.cwd(), 'data/featured');
const files = readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json').sort();

const substantive = files.map((f) => {
  const r = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  return {
    record_id: r.record_id,
    scenario: r.scenario,
    decision_question: r.decision_question,
    candidate_pools: r.candidate_pools,
    stipulations: r.stipulations || [],
    representation: r.representation,
    benchmark_profile: r.benchmark_profile,
    version: r.version,
  };
});

const digest = createHash('sha256').update(jcs(substantive), 'utf8').digest('hex');
const expected = process.argv.includes('--expect')
  ? process.argv[process.argv.indexOf('--expect') + 1]
  : null;

console.log(`${files.length} records`);
console.log(`substantive digest ${digest}`);

if (expected && expected !== digest) {
  console.error(`\nExpected ${expected}`);
  console.error('The execution-relevant content changed. A lifecycle transition must not move this.');
  process.exit(1);
}
if (expected) console.log('matches the expected digest');
