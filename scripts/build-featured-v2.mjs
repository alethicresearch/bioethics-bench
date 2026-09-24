#!/usr/bin/env node
/**
 * Build Featured v2 as a language-normalized successor to released Featured v1.
 *
 * F08 is intentionally reused byte-for-byte as its existing v1 records, preserving the exact
 * historical record ids, versions, and content hashes used by the worked example.
 */
import fs from 'node:fs';
import path from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';
import { normalizeField, lexicalSignature } from './language-normalization-v2.mjs';

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, 'data/featured');
const OUTPUT_DIR = path.join(ROOT, 'data/featured-v2');
const EXCLUDED_CASE = 'f08-fourteen-day-embryo-research-limit';

const files = fs.readdirSync(SOURCE_DIR)
  .filter((name) => name.endsWith('.json') && name !== 'index.json')
  .sort();
const sourceRecords = files.map((name) => JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, name), 'utf8')));

let changedFields = 0;
let removedSemicolons = 0;
const outputRecords = [];

function normalize(value, label) {
  if (typeof value !== 'string') return value;
  const before = (value.match(/;/g) || []).length;
  const afterValue = normalizeField(value, label);
  const after = (afterValue.match(/;/g) || []).length;
  if (before !== after) {
    changedFields += 1;
    removedSemicolons += before - after;
  }
  return afterValue;
}

for (const original of sourceRecords) {
  if (original.case_id === EXCLUDED_CASE) {
    outputRecords.push({ record: original, sourceFilename: `${original.record_id}.json`, preserved: true });
    continue;
  }

  const record = structuredClone(original);
  record.record_id = original.record_id.replace(/-v1$/, '-v2');
  record.version = '2.0.0';
  record.representation.companion_record_ids = (original.representation.companion_record_ids || [])
    .map((id) => id.replace(/-v1$/, '-v2'));
  record.short_description = normalize(record.short_description, `${record.case_id}.short_description`);
  record.decision_question = normalize(record.decision_question, `${record.case_id}.decision_question`);
  record.jurisdiction_context = normalize(record.jurisdiction_context, `${record.case_id}.jurisdiction_context`);
  record.scenario = normalize(record.scenario, `${record.case_id}.${record.representation.form}.scenario`);
  record.stipulations = (record.stipulations || []).map((s) => ({
    ...s,
    statement: normalize(s.statement, `${record.case_id}.${s.id}.statement`),
    rationale: normalize(s.rationale, `${record.case_id}.${s.id}.rationale`),
  }));
  for (const pool of ['public','expert','framework']) {
    for (const candidate of record.candidate_pools?.[pool] || []) {
      candidate.text = normalize(candidate.text, `${record.case_id}.${candidate.id}.text`);
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

  // Candidate pools remain companion-identical and lexically identical to v1.
  for (const pool of ['public','expert','framework']) {
    const a = original.candidate_pools?.[pool] || [];
    const b = record.candidate_pools?.[pool] || [];
    if (a.length !== b.length) throw new Error(`${record.case_id}: ${pool} candidate count changed`);
    for (let i = 0; i < a.length; i += 1) {
      if (a[i].id !== b[i].id || lexicalSignature(a[i].text) !== lexicalSignature(b[i].text)) {
        throw new Error(`${record.case_id}: ${pool} candidate lexical content changed`);
      }
    }
  }
  if (lexicalSignature(original.scenario) !== lexicalSignature(record.scenario)) {
    throw new Error(`${record.case_id}: scenario lexical content changed`);
  }
  outputRecords.push({ record, sourceFilename: `${record.record_id}.json`, preserved: false });
}

const f08Source = sourceRecords.filter((r) => r.case_id === EXCLUDED_CASE);
const f08Output = outputRecords.filter((r) => r.record.case_id === EXCLUDED_CASE);
if (JSON.stringify(f08Source) !== JSON.stringify(f08Output.map((x) => x.record))) {
  throw new Error('F08 changed in Featured v2');
}

for (const { record } of outputRecords) {
  if (record.case_id === EXCLUDED_CASE) continue;
  const check = [
    record.short_description, record.decision_question, record.jurisdiction_context, record.scenario,
    ...(record.stipulations || []).flatMap((s) => [s.statement, s.rationale]),
    ...['public','expert','framework'].flatMap((pool) => (record.candidate_pools?.[pool] || []).map((c) => c.text)),
  ].filter((v) => typeof v === 'string');
  if (check.some((v) => v.includes(';'))) throw new Error(`${record.case_id}: semicolon remains in evaluation-facing v2 text`);
}

const families = new Map();
for (const { record } of outputRecords) {
  if (!families.has(record.case_id)) {
    families.set(record.case_id, {
      case_id: record.case_id,
      title: record.title,
      short_description: record.short_description,
      decision_question: record.decision_question,
      domains: record.domains,
      tags: record.tags,
      stipulations: record.stipulations || [],
      records: [],
    });
  }
  families.get(record.case_id).records.push({
    form: record.representation.form,
    record_id: record.record_id,
    version: record.version,
    content_hash: record.content_hash,
    path: `data/featured-v2/${record.record_id}.json`,
  });
}
const index = {
  generated_from: 'scripts/build-featured-v2.mjs',
  source_release: 'featured-v1',
  release_id: 'featured-v2',
  editorial_normalization: {
    rule: 'semicolon-linked clauses normalized to sentences or ordinary coordination; punctuation, capitalization, and whitespace only',
    excluded_case: EXCLUDED_CASE,
    excluded_case_records_reused_from_v1: true,
  },
  family_count: families.size,
  record_count: outputRecords.length,
  families: [...families.values()],
};

if (process.argv.includes('--check')) {
  const expectedNames = [...outputRecords.map((x) => x.sourceFilename), 'index.json'].sort();
  const actualNames = fs.existsSync(OUTPUT_DIR) ? fs.readdirSync(OUTPUT_DIR).filter((x) => x.endsWith('.json')).sort() : [];
  if (JSON.stringify(expectedNames) !== JSON.stringify(actualNames)) throw new Error('data/featured-v2 file set is stale');
  for (const { record, sourceFilename } of outputRecords) {
    const wanted = `${JSON.stringify(record, null, 2)}\n`;
    if (fs.readFileSync(path.join(OUTPUT_DIR, sourceFilename), 'utf8') !== wanted) throw new Error(`${sourceFilename} is stale`);
  }
  if (fs.readFileSync(path.join(OUTPUT_DIR, 'index.json'), 'utf8') !== `${JSON.stringify(index, null, 2)}\n`) {
    throw new Error('data/featured-v2/index.json is stale');
  }
  console.log(`✓ Featured v2 verified: ${changedFields} fields, ${removedSemicolons} semicolons removed; F08 reused unchanged.`);
} else if (process.argv.includes('--write')) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const stale of fs.readdirSync(OUTPUT_DIR).filter((x) => x.endsWith('.json'))) fs.rmSync(path.join(OUTPUT_DIR, stale));
  for (const { record, sourceFilename } of outputRecords) {
    fs.writeFileSync(path.join(OUTPUT_DIR, sourceFilename), `${JSON.stringify(record, null, 2)}\n`);
  }
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
  console.log(`✓ wrote Featured v2: ${changedFields} fields, ${removedSemicolons} semicolons removed; F08 reused unchanged.`);
} else {
  console.log(JSON.stringify({ changedFields, removedSemicolons, excludedCase: EXCLUDED_CASE }, null, 2));
}
