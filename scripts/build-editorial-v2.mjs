#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const inputPath = 'resources/cases/full-200-cases.v1.json';
const outputPath = 'resources/cases/full-200-cases.v2.json';
const changesPath = 'resources/cases/full-200-cases.v2.changes.json';
const EXCLUDED = new Set(['M056']);

function lexicalSignature(text) {
  return String(text ?? '').toLocaleLowerCase('en-US')
    .match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.join(' ') || '';
}

const source = JSON.parse(readFileSync(inputPath, 'utf8'));
const out = structuredClone(source);
out.resource_version = '2.0.0';

const changes = [];
const reviewedCaseIds = [];
for (const benchCase of out.cases || []) {
  const sourceCase = source.cases.find((x) => x.id === benchCase.id);
  if (EXCLUDED.has(benchCase.id)) {
    if (JSON.stringify(sourceCase) !== JSON.stringify(benchCase)) {
      throw new Error(`${benchCase.id}: excluded case changed`);
    }
    continue;
  }
  reviewedCaseIds.push(benchCase.id);
  for (const field of ['concise', 'detailed']) {
    const before = benchCase[field];
    const after = normalizeEditorialProse(before);
    if (lexicalSignature(before) !== lexicalSignature(after)) {
      throw new Error(`${benchCase.id}.${field}: lexical content changed`);
    }
    if (after !== before) {
      changes.push({ case_id: benchCase.id, field, before, after });
      benchCase[field] = after;
    }
  }
  for (const policy of benchCase.policies || []) {
    const sourcePolicy = sourceCase.policies.find((x) => x.id === policy.id);
    for (const field of ['text', 'text_detailed']) {
      const before = policy[field];
      const after = normalizeEditorialProse(before);
      if (lexicalSignature(before) !== lexicalSignature(after)) {
        throw new Error(`${benchCase.id}:${policy.id}.${field}: lexical content changed`);
      }
      if (after !== before) {
        changes.push({ case_id: benchCase.id, policy_id: policy.id, field, before, after });
        policy[field] = after;
      }
    }
    for (const key of ['id','types','type_reviewed','type_route','sourcing','written_by_bench']) {
      if (JSON.stringify(sourcePolicy[key]) !== JSON.stringify(policy[key])) {
        throw new Error(`${benchCase.id}:${policy.id} ${key} changed`);
      }
    }
  }
}

const metadata = {
  schema: 'bioethics-bench-editorial-changes/2',
  from_resource: 'full-200-cases.v1.json',
  to_resource: 'full-200-cases.v2.json',
  excluded_case_ids: [...EXCLUDED],
  scope: 'punctuation/readability only; substantive and lexical content preserved',
  reviewed_case_count: reviewedCaseIds.length,
  reviewed_case_ids: reviewedCaseIds,
  change_count: changes.length,
  cases_changed: new Set(changes.map((x) => x.case_id)).size,
  cases_unchanged_under_rule: reviewedCaseIds.filter((id) => !changes.some((x) => x.case_id === id)),
  changes,
};

const rendered = JSON.stringify(out, null, 2) + '\n';
const renderedChanges = JSON.stringify(metadata, null, 2) + '\n';

if (process.argv.includes('--check')) {
  if (!existsSync(outputPath) || readFileSync(outputPath, 'utf8') !== rendered) {
    throw new Error(`${outputPath} is stale; run node scripts/build-editorial-v2.mjs --write`);
  }
  if (!existsSync(changesPath) || readFileSync(changesPath, 'utf8') !== renderedChanges) {
    throw new Error(`${changesPath} is stale; run node scripts/build-editorial-v2.mjs --write`);
  }
  console.log(`✓ v2 verified: reviewed ${reviewedCaseIds.length} cases; ${changes.length} fields changed; M056 unchanged`);
} else {
  writeFileSync(outputPath, rendered);
  writeFileSync(changesPath, renderedChanges);
  console.log(`✓ wrote v2: reviewed ${reviewedCaseIds.length} cases; ${changes.length} fields changed; M056 unchanged`);
}
