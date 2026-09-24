#!/usr/bin/env node
/**
 * Build Bioethics Bench 200-case language-normalized v2 from the published v1 resource.
 *
 * M056 is excluded because it is the Full Corpus counterpart of the preserved F08 worked example.
 * All other changes are punctuation/capitalization/whitespace only and are checked by lexical
 * signature before writing.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { normalizeField, lexicalSignature } from './language-normalization-v2.mjs';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'resources/cases/full-200-cases.v1.json');
const OUTPUT = path.join(ROOT, 'resources/cases/full-200-cases.v2.json');
const AUDIT = path.join(ROOT, 'resources/cases/full-200-cases.v2.audit.json');
const EXCLUDED_CASE = 'M056';

const source = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));
const output = structuredClone(source);
output.resource_version = '2.0.0';
output.derived_from = {
  resource_id: source.resource_id,
  resource_version: source.resource_version,
  sha256: createHash('sha256').update(fs.readFileSync(SOURCE)).digest('hex'),
};
output.editorial_normalization = {
  scope: 'evaluation-facing prose',
  rule: 'semicolon-linked clauses normalized to sentences or ordinary coordination; punctuation, capitalization, and whitespace only',
  excluded_case: EXCLUDED_CASE,
  reason: 'M056 is the Full Corpus counterpart of the preserved Featured F08 worked example',
};

let changedFields = 0;
let removedSemicolons = 0;
const perCase = {};

function normalize(value, label, caseId) {
  if (typeof value !== 'string') return value;
  const before = (value.match(/;/g) || []).length;
  const afterValue = normalizeField(value, label);
  const after = (afterValue.match(/;/g) || []).length;
  if (before !== after) {
    changedFields += 1;
    removedSemicolons += before - after;
    perCase[caseId] = (perCase[caseId] || 0) + (before - after);
  }
  return afterValue;
}

for (let i = 0; i < output.cases.length; i += 1) {
  const beforeCase = source.cases[i];
  const benchCase = output.cases[i];
  if (benchCase.id === EXCLUDED_CASE) {
    if (JSON.stringify(beforeCase) !== JSON.stringify(benchCase)) {
      throw new Error(`${EXCLUDED_CASE}: excluded case changed`);
    }
    continue;
  }
  benchCase.concise = normalize(benchCase.concise, `${benchCase.id}.concise`, benchCase.id);
  benchCase.detailed = normalize(benchCase.detailed, `${benchCase.id}.detailed`, benchCase.id);
  for (const policy of benchCase.policies || []) {
    policy.text = normalize(policy.text, `${benchCase.id}.${policy.id}.text`, benchCase.id);
    policy.text_detailed = normalize(policy.text_detailed, `${benchCase.id}.${policy.id}.text_detailed`, benchCase.id);
  }
}

// Structural identity must be unchanged.
if (output.cases.length !== source.cases.length) throw new Error('case count changed');
for (let i = 0; i < source.cases.length; i += 1) {
  const a = source.cases[i], b = output.cases[i];
  if (a.id !== b.id || a.title !== b.title || a.category !== b.category || a.source_file !== b.source_file) {
    throw new Error(`${a.id}: structural identity changed`);
  }
  if ((a.policies || []).length !== (b.policies || []).length) throw new Error(`${a.id}: policy count changed`);
  for (let j = 0; j < (a.policies || []).length; j += 1) {
    const p = a.policies[j], q = b.policies[j];
    for (const key of ['id','types','type_reviewed','type_route','sourcing','written_by_bench']) {
      if (JSON.stringify(p[key]) !== JSON.stringify(q[key])) throw new Error(`${a.id}:${p.id} ${key} changed`);
    }
    for (const key of ['text','text_detailed']) {
      if (typeof p[key] === 'string' && lexicalSignature(p[key]) !== lexicalSignature(q[key])) {
        throw new Error(`${a.id}:${p.id} ${key} changed lexical content`);
      }
    }
  }
}

const remaining = [];
for (const benchCase of output.cases) {
  if (benchCase.id === EXCLUDED_CASE) continue;
  for (const [label, value] of [['concise', benchCase.concise], ['detailed', benchCase.detailed]]) {
    if (typeof value === 'string' && value.includes(';')) remaining.push(`${benchCase.id}.${label}`);
  }
  for (const policy of benchCase.policies || []) {
    for (const key of ['text','text_detailed']) {
      if (typeof policy[key] === 'string' && policy[key].includes(';')) remaining.push(`${benchCase.id}.${policy.id}.${key}`);
    }
  }
}
if (remaining.length) throw new Error(`semicolon normalization incomplete: ${remaining.slice(0, 10).join(', ')}`);

const rendered = `${JSON.stringify(output, null, 2)}\n`;
const audit = {
  schema: 'bioethics-bench-language-normalization-audit/1',
  source_resource_version: source.resource_version,
  output_resource_version: output.resource_version,
  cases: output.cases.length,
  excluded_case: EXCLUDED_CASE,
  changed_fields: changedFields,
  removed_semicolons: removedSemicolons,
  cases_changed: Object.keys(perCase).length,
  per_case_removed_semicolons: Object.fromEntries(Object.entries(perCase).sort()),
  lexical_content_preserved: true,
  output_sha256: createHash('sha256').update(rendered).digest('hex'),
};

if (process.argv.includes('--check')) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, 'utf8') !== rendered) {
    throw new Error('full-200-cases.v2.json is stale; run node scripts/build-public-cases-v2.mjs --write');
  }
  if (!fs.existsSync(AUDIT) || fs.readFileSync(AUDIT, 'utf8') !== `${JSON.stringify(audit, null, 2)}\n`) {
    throw new Error('full-200-cases.v2.audit.json is stale');
  }
  console.log(`✓ v2 language normalization verified: ${changedFields} fields, ${removedSemicolons} semicolons removed; ${EXCLUDED_CASE} unchanged.`);
} else if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  fs.writeFileSync(AUDIT, `${JSON.stringify(audit, null, 2)}\n`);
  console.log(`✓ wrote v2: ${changedFields} fields, ${removedSemicolons} semicolons removed; ${EXCLUDED_CASE} unchanged.`);
} else {
  console.log(JSON.stringify(audit, null, 2));
}
