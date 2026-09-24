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
import { normalizeField, lexicalSignature } from './language-normalization-v2.mjs';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'resources/cases/full-200-cases.v1.json');
const OUTPUT = path.join(ROOT, 'resources/cases/full-200-cases.v2.json');
const AUDIT = path.join(ROOT, 'resources/cases/full-200-cases.v2.audit.json');
const EXCLUDED_CASE = 'M056';
const F08_RECORD = path.join(ROOT, 'data/featured/f08-fourteen-day-embryo-research-limit-detailed-v1.json');

const source = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));
const f08 = JSON.parse(fs.readFileSync(F08_RECORD, 'utf8'));
const output = structuredClone(source);
output.resource_version = '2.0.0';
output.derived_from = {
  resource_id: source.resource_id,
  resource_version: source.resource_version,
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
  const benchCase = output.cases[i];
  if (benchCase.id === EXCLUDED_CASE) {
    // Preserve the exact evaluation-facing F08 wording used by the historical worked example.
    // The 200-case library identity stays M056, but its v2 scenario/policies use the frozen
    // Featured F08 Detailed record so the continuity case is genuinely unchanged.
    benchCase.title = f08.title;
    benchCase.concise = f08.scenario;
    benchCase.detailed = f08.scenario;
    benchCase.source_file = 'data/featured/f08-fourteen-day-embryo-research-limit-detailed-v1.json';
    benchCase.preserved_featured_record = { record_id: f08.record_id, version: f08.version, content_hash: f08.content_hash };
    const featuredPolicies = [
      ...(f08.candidate_pools?.public || []),
      ...(f08.candidate_pools?.expert || []),
      ...(f08.candidate_pools?.framework || []),
    ];
    benchCase.policies = featuredPolicies.map((p) => ({
      id: p.id,
      text: p.text,
      text_detailed: p.text,
      types: p.source_pool ? [p.source_pool] : (
        (f08.candidate_pools?.public || []).some((x) => x.id === p.id) ? ['public'] :
        (f08.candidate_pools?.expert || []).some((x) => x.id === p.id) ? ['expert'] : ['framework']
      ),
      type_reviewed: true,
      type_route: 'featured-v1-preserved',
      sourcing: p.provenance?.construction_method === 'extracted-from-evidence' ? 'direct'
        : p.provenance?.construction_method === 'adapted-from-source' ? 'inferred'
        : 'constructed',
    }));
    continue;
  }
  benchCase.concise = normalize(benchCase.concise, `${benchCase.id}.concise`, benchCase.id);
  benchCase.detailed = normalize(benchCase.detailed, `${benchCase.id}.detailed`, benchCase.id);
  for (const policy of benchCase.policies || []) {
    policy.text = normalize(policy.text, `${benchCase.id}.${policy.id}.text`, benchCase.id);
    policy.text_detailed = normalize(policy.text_detailed, `${benchCase.id}.${policy.id}.text_detailed`, benchCase.id);
  }
}

// Structural identity and lexical content must be unchanged for the 199 normalized cases.
// M056 is the one declared exception: it carries the exact historical Featured F08 setup.
if (output.cases.length !== source.cases.length) throw new Error('case count changed');
for (let i = 0; i < source.cases.length; i += 1) {
  const a = source.cases[i], b = output.cases[i];
  if (b.id === EXCLUDED_CASE) {
    if (b.title !== f08.title || b.concise !== f08.scenario || b.detailed !== f08.scenario) {
      throw new Error(`${EXCLUDED_CASE}: preserved F08 scenario drifted`);
    }
    const expectedIds = ['pub1','pub2','exp1','exp2','fw1','fw2'];
    if (JSON.stringify((b.policies || []).map((p) => p.id)) !== JSON.stringify(expectedIds)) {
      throw new Error(`${EXCLUDED_CASE}: preserved F08 candidate field drifted`);
    }
    continue;
  }
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
  f08_source_record: f08.record_id,
  f08_source_content_hash: f08.content_hash,
  changed_fields: changedFields,
  removed_semicolons: removedSemicolons,
  cases_changed: Object.keys(perCase).length,
  per_case_removed_semicolons: Object.fromEntries(Object.entries(perCase).sort()),
  lexical_content_preserved_for_199_normalized_cases: true,
  f08_preserved_from_featured_v1: true,
};

if (process.argv.includes('--check')) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, 'utf8') !== rendered) {
    throw new Error('full-200-cases.v2.json is stale; run node scripts/build-public-cases-v2.mjs --write');
  }
  if (!fs.existsSync(AUDIT) || fs.readFileSync(AUDIT, 'utf8') !== `${JSON.stringify(audit, null, 2)}\n`) {
    throw new Error('full-200-cases.v2.audit.json is stale');
  }
  console.log(`✓ v2 verified: ${changedFields} fields, ${removedSemicolons} semicolons removed across 199 cases; F08 preserved from ${f08.record_id}.`);
} else if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  fs.writeFileSync(AUDIT, `${JSON.stringify(audit, null, 2)}\n`);
  console.log(`✓ wrote v2: ${changedFields} fields, ${removedSemicolons} semicolons removed across 199 cases; F08 preserved from ${f08.record_id}.`);
} else {
  console.log(JSON.stringify(audit, null, 2));
}
