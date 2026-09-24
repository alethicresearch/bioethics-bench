#!/usr/bin/env node
/**
 * Build the Featured v2 language-normalized release resource from released Featured v1.
 *
 * F08 is reused exactly as its existing v1 records, preserving the historical record ids,
 * versions, wording, and content hashes. The other 19 case families receive punctuation-only
 * normalization of evaluation-facing prose; lexical content and candidate structure are invariant.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { canonicalContentHash } from './hash-case.mjs';
import { normalizeField, lexicalSignature } from './language-normalization-v2.mjs';

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, 'data/featured');
const OUTPUT = path.join(ROOT, 'resources/cases/featured-20.v2.json');
const AUDIT = path.join(ROOT, 'resources/cases/featured-20.v2.audit.json');
const EXCLUDED_CASE = 'f08-fourteen-day-embryo-research-limit';

const sourceFiles = fs.readdirSync(SOURCE_DIR)
  .filter((name) => name.endsWith('.json') && name !== 'index.json')
  .sort();
const sourceRecords = sourceFiles.map((name) =>
  JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, name), 'utf8')));

let changedFields = 0;
let removedSemicolons = 0;
const changedCases = new Set();
const perCase = {};

function normalize(value, label, caseId) {
  if (typeof value !== 'string') return value;
  const before = (value.match(/;/g) || []).length;
  const afterValue = normalizeField(value, label);
  const after = (afterValue.match(/;/g) || []).length;
  if (afterValue !== value) {
    changedFields += 1;
    changedCases.add(caseId);
  }
  if (before !== after) {
    removedSemicolons += before - after;
    perCase[caseId] = (perCase[caseId] || 0) + (before - after);
  }
  return afterValue;
}

const records = sourceRecords.map((original) => {
  if (original.case_id === EXCLUDED_CASE) return structuredClone(original);

  const record = structuredClone(original);
  record.record_id = original.record_id.replace(/-v1$/, '-v2');
  record.version = '2.0.0';
  record.representation.companion_record_ids = (original.representation.companion_record_ids || [])
    .map((id) => id.replace(/-v1$/, '-v2'));
  record.short_description = normalize(record.short_description, `${record.case_id}.short_description`, record.case_id);
  record.decision_question = normalize(record.decision_question, `${record.case_id}.decision_question`, record.case_id);
  record.jurisdiction_context = normalize(record.jurisdiction_context, `${record.case_id}.jurisdiction_context`, record.case_id);
  record.scenario = normalize(record.scenario, `${record.case_id}.${record.representation.form}.scenario`, record.case_id);
  record.stipulations = (record.stipulations || []).map((s) => ({
    ...s,
    statement: normalize(s.statement, `${record.case_id}.${s.id}.statement`, record.case_id),
    rationale: normalize(s.rationale, `${record.case_id}.${s.id}.rationale`, record.case_id),
  }));
  for (const pool of ['public', 'expert', 'framework']) {
    for (const candidate of record.candidate_pools?.[pool] || []) {
      candidate.text = normalize(candidate.text, `${record.case_id}.${candidate.id}.text`, record.case_id);
    }
  }
  record.exposure_history = [
    ...(record.exposure_history || []),
    {
      date: '2026-09-24',
      use: 'Published in Featured v2 after punctuation-only language normalization. Lexical content and candidate structure are unchanged from the corresponding Featured v1 record.',
      reference: 'https://bioethicsbench.com/cases/',
    },
  ];
  record.content_hash = canonicalContentHash(record);

  if (lexicalSignature(original.scenario) !== lexicalSignature(record.scenario)) {
    throw new Error(`${record.case_id}: scenario lexical content changed`);
  }
  for (const pool of ['public', 'expert', 'framework']) {
    const a = original.candidate_pools?.[pool] || [];
    const b = record.candidate_pools?.[pool] || [];
    if (a.length !== b.length) throw new Error(`${record.case_id}: ${pool} candidate count changed`);
    for (let i = 0; i < a.length; i += 1) {
      if (a[i].id !== b[i].id || lexicalSignature(a[i].text) !== lexicalSignature(b[i].text)) {
        throw new Error(`${record.case_id}: ${pool} candidate lexical content changed`);
      }
    }
  }
  return record;
});

const f08Source = sourceRecords.filter((r) => r.case_id === EXCLUDED_CASE);
const f08Output = records.filter((r) => r.case_id === EXCLUDED_CASE);
if (JSON.stringify(f08Source) !== JSON.stringify(f08Output)) throw new Error('F08 changed in Featured v2');

for (const record of records) {
  if (record.case_id === EXCLUDED_CASE) continue;
  const fields = [
    record.short_description, record.decision_question, record.jurisdiction_context, record.scenario,
    ...(record.stipulations || []).flatMap((s) => [s.statement, s.rationale]),
    ...['public','expert','framework'].flatMap((pool) =>
      (record.candidate_pools?.[pool] || []).map((candidate) => candidate.text)),
  ].filter((value) => typeof value === 'string');
  if (fields.some((value) => value.includes(';'))) {
    throw new Error(`${record.case_id}: semicolon remains in Featured v2 evaluation-facing text`);
  }
}

const payload = {
  release_id: 'featured-v2',
  release_date: '2026-09-24',
  derived_from: {
    release_id: 'featured-v1',
    upstream_directory: 'data/featured',
  },
  editorial_normalization: {
    scope: 'evaluation-facing prose',
    rule: 'semicolon-linked clauses normalized to sentences or ordinary coordination; punctuation, capitalization, and whitespace only',
    excluded_case: EXCLUDED_CASE,
    excluded_case_records_reused_exactly_from_v1: true,
  },
  family_count: new Set(records.map((record) => record.case_id)).size,
  record_count: records.length,
  records,
};

const rendered = `${JSON.stringify(payload, null, 2)}\n`;
const audit = {
  schema: 'bioethics-bench-featured-v2-language-normalization-audit/1',
  source_release: 'featured-v1',
  output_release: 'featured-v2',
  families: payload.family_count,
  records: payload.record_count,
  excluded_case: EXCLUDED_CASE,
  changed_fields: changedFields,
  removed_semicolons: removedSemicolons,
  cases_changed: changedCases.size,
  per_case_removed_semicolons: Object.fromEntries(Object.entries(perCase).sort()),
  lexical_content_preserved: true,
  f08_records_reused_exactly: true,
  output_sha256: createHash('sha256').update(rendered).digest('hex'),
};

if (process.argv.includes('--check')) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, 'utf8') !== rendered) {
    throw new Error('featured-20.v2.json is stale; run node scripts/build-featured-v2.mjs --write');
  }
  if (!fs.existsSync(AUDIT) || fs.readFileSync(AUDIT, 'utf8') !== `${JSON.stringify(audit, null, 2)}\n`) {
    throw new Error('featured-20.v2.audit.json is stale');
  }
  console.log(`✓ Featured v2 verified: ${changedFields} fields, ${removedSemicolons} semicolons removed; F08 reused unchanged.`);
} else if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  fs.writeFileSync(AUDIT, `${JSON.stringify(audit, null, 2)}\n`);
  console.log(`✓ wrote Featured v2: ${changedFields} fields, ${removedSemicolons} semicolons removed; F08 reused unchanged.`);
} else {
  console.log(JSON.stringify(audit, null, 2));
}
