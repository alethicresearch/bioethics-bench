#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const inputPath = 'resources/cases/full-200-cases.v1.json';
const outputPath = 'resources/cases/full-200-cases.v1.1.json';
const changesPath = 'resources/cases/full-200-cases.v1.1.changes.json';
const EXCLUDED = new Set(['M056']);

const source = JSON.parse(readFileSync(inputPath, 'utf8'));
const out = structuredClone(source);
out.resource_version = '1.1.0';

const changes = [];
for (const benchCase of out.cases || []) {
  if (EXCLUDED.has(benchCase.id)) continue;
  for (const field of ['concise', 'detailed']) {
    const before = benchCase[field];
    const after = normalizeEditorialProse(before);
    if (after !== before) {
      changes.push({ case_id: benchCase.id, field, before, after });
      benchCase[field] = after;
    }
  }
  for (const policy of benchCase.policies || []) {
    for (const field of ['text', 'text_detailed']) {
      const before = policy[field];
      const after = normalizeEditorialProse(before);
      if (after !== before) {
        changes.push({ case_id: benchCase.id, policy_id: policy.id, field, before, after });
        policy[field] = after;
      }
    }
  }
}
writeFileSync(outputPath, JSON.stringify(out, null, 2) + '\n');
writeFileSync(changesPath, JSON.stringify({
  schema: 'bioethics-bench-editorial-changes/1',
  from_resource: 'full-200-cases.v1.json',
  to_resource: 'full-200-cases.v1.1.json',
  excluded_case_ids: [...EXCLUDED],
  scope: 'punctuation/readability only; substantive content preserved',
  change_count: changes.length,
  changes,
}, null, 2) + '\n');

console.log(`✓ wrote ${outputPath} with ${changes.length} editorial field changes; M056 unchanged`);
