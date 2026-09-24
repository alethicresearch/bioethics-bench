#!/usr/bin/env node
/**
 * Build Bioethics Bench v2 from the published 200-case v1 resource.
 *
 * The v2 editorial pass covers all 199 cases other than M056/F08. It changes punctuation and
 * readability only, preserving the lexical content, case identities, policy identities, policy
 * types, sourcing labels, and 1,436-policy structure. M056 is carried forward unchanged.
 */
import fs from 'node:fs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const INPUT = 'resources/cases/full-200-cases.v1.json';
const OUTPUT = 'resources/cases/full-200-cases.v2.json';
const AUDIT = 'resources/cases/full-200-cases.v2.audit.json';
const EXCLUDED = new Set(['M056']);

const source = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const out = JSON.parse(JSON.stringify(source));
out.resource_version = '2.0.0';
out.derived_from = {
  resource_id: source.resource_id,
  resource_version: source.resource_version,
};
out.editorial_normalization = {
  scope: 'punctuation/readability only; substantive content preserved',
  excluded_case_ids: [...EXCLUDED],
  excluded_case_reason: 'M056 corresponds to the preserved F08 continuity case and is carried forward unchanged',
};

function lexicalSignature(text) {
  return String(text ?? '')
    .toLocaleLowerCase('en-US')
    .match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.join(' ') || '';
}

const changes = [];
const reviewedCaseIds = [];
for (let index = 0; index < out.cases.length; index += 1) {
  const benchCase = out.cases[index];
  const sourceCase = source.cases[index];

  if (EXCLUDED.has(benchCase.id)) {
    if (JSON.stringify(benchCase) !== JSON.stringify(sourceCase)) {
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

  if ((benchCase.policies || []).length !== (sourceCase.policies || []).length) {
    throw new Error(`${benchCase.id}: policy count changed`);
  }
  for (let pIndex = 0; pIndex < (benchCase.policies || []).length; pIndex += 1) {
    const policy = benchCase.policies[pIndex];
    const sourcePolicy = sourceCase.policies[pIndex];
    if (policy.id !== sourcePolicy.id
        || JSON.stringify(policy.types) !== JSON.stringify(sourcePolicy.types)
        || policy.type_reviewed !== sourcePolicy.type_reviewed
        || policy.type_route !== sourcePolicy.type_route
        || policy.sourcing !== sourcePolicy.sourcing) {
      throw new Error(`${benchCase.id}:${policy.id}: policy metadata changed`);
    }
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
  }
}

if (out.cases.length !== 200) throw new Error(`expected 200 cases, found ${out.cases.length}`);
if (out.policy_count !== source.policy_count || out.policy_count !== 1436) {
  throw new Error(`policy count changed: ${source.policy_count} -> ${out.policy_count}`);
}

const audit = {
  schema: 'bioethics-bench-v2-editorial-changes/1',
  from_resource: INPUT,
  to_resource: OUTPUT,
  source_resource_version: source.resource_version,
  output_resource_version: out.resource_version,
  scope: out.editorial_normalization.scope,
  excluded_case_ids: [...EXCLUDED],
  reviewed_case_count: reviewedCaseIds.length,
  reviewed_case_ids: reviewedCaseIds,
  change_count: changes.length,
  cases_changed: new Set(changes.map((change) => change.case_id)).size,
  cases_unchanged_under_rule: reviewedCaseIds.filter(
    (id) => !changes.some((change) => change.case_id === id),
  ),
  lexical_content_preserved: true,
  case_structure_preserved: true,
  policy_count_preserved: true,
  changes,
};

const rendered = JSON.stringify(out, null, 2) + '\n';
const auditRendered = JSON.stringify(audit, null, 2) + '\n';

if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  fs.writeFileSync(AUDIT, auditRendered);
  console.log(
    `✓ wrote Bioethics Bench v2: ${reviewedCaseIds.length} cases reviewed, `
    + `${changes.length} editorial field changes across ${audit.cases_changed} cases; M056 unchanged`,
  );
} else if (process.argv.includes('--check')) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, 'utf8') !== rendered) {
    throw new Error(`${OUTPUT} is stale; run node scripts/build-public-cases-v2.mjs --write`);
  }
  if (!fs.existsSync(AUDIT) || fs.readFileSync(AUDIT, 'utf8') !== auditRendered) {
    throw new Error(`${AUDIT} is stale; run node scripts/build-public-cases-v2.mjs --write`);
  }
  console.log(
    `✓ Bioethics Bench v2 verified: ${reviewedCaseIds.length} cases reviewed, `
    + `${changes.length} editorial field changes across ${audit.cases_changed} cases; M056 unchanged`,
  );
} else {
  console.log(JSON.stringify({
    reviewed_case_count: reviewedCaseIds.length,
    change_count: changes.length,
    cases_changed: audit.cases_changed,
    excluded_case_ids: audit.excluded_case_ids,
  }, null, 2));
}
