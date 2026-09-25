#!/usr/bin/env node
/**
 * Build the pre-study language-normalized Featured-20 resource.
 *
 * This does not rewrite released Featured v1. Nineteen families receive punctuation/readability
 * normalization; F08 is copied byte-for-byte at the record-content level so continuity with the
 * historical worked example is preserved.
 */
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const SRC = 'data/featured';
const OUTPUT = 'resources/cases/featured20-prestudy-v2.json';
const CHANGES = 'resources/cases/featured20-prestudy-v2.changes.json';
const EXCLUDED_CASE = 'f08-fourteen-day-embryo-research-limit';
const EDIT_KEYS = new Set([
  'short_description',
  'decision_question',
  'jurisdiction_context',
  'scenario',
  'text',
  'statement',
  'rationale',
]);

const sourceFiles = readdirSync(SRC)
  .filter((f) => f.endsWith('-v1.json'))
  .sort();
const sourceRecords = sourceFiles.map((f) => JSON.parse(readFileSync(join(SRC, f), 'utf8')));

function editRecord(source) {
  if (source.case_id === EXCLUDED_CASE) {
    return { record: JSON.parse(JSON.stringify(source)), changes: [], inherited: true };
  }

  const record = JSON.parse(JSON.stringify(source));
  const changes = [];

  function walk(node, path = []) {
    if (!node || typeof node !== 'object') return;
    for (const [key, value] of Object.entries(node)) {
      const next = [...path, key];
      if (typeof value === 'string' && EDIT_KEYS.has(key)) {
        const edited = normalizeEditorialProse(value);
        if (edited !== value) {
          changes.push({ path: next.join('.'), before: value, after: edited });
          node[key] = edited;
        }
      } else if (value && typeof value === 'object') {
        walk(value, next);
      }
    }
  }

  walk(record);
  record.record_id = record.record_id.replace(/-v1$/, '-v2');
  record.version = '2.0.0';
  record.representation.companion_record_ids = (record.representation.companion_record_ids || [])
    .map((id) => id.replace(/-v1$/, '-v2'));
  record.status = 'reviewed';
  record.collection = 'featured20-prestudy-v2';
  delete record.content_hash;
  record.content_hash = canonicalContentHash(record);

  return { record, changes, inherited: false };
}

const built = sourceRecords.map(editRecord);
const records = built.map((x) => x.record);
const changes = built.flatMap((x, index) => (x.changes || []).map((change) => ({
  case_id: sourceRecords[index].case_id,
  source_record_id: sourceRecords[index].record_id,
  record_id: x.record.record_id,
  ...change,
})));

const f08Source = sourceRecords.filter((r) => r.case_id === EXCLUDED_CASE);
const f08Output = records.filter((r) => r.case_id === EXCLUDED_CASE);
if (JSON.stringify(f08Source) !== JSON.stringify(f08Output)) {
  throw new Error('F08 changed during Featured-20 pre-study build');
}

const resource = {
  resource_id: 'bioethics-bench-featured20-prestudy',
  resource_version: '2.0.0',
  derived_from: 'featured-v1',
  editorial_scope: 'punctuation/readability only; substantive content preserved',
  excluded_unchanged_case_id: EXCLUDED_CASE,
  family_count: new Set(records.map((r) => r.case_id)).size,
  record_count: records.length,
  records,
};

const rendered = JSON.stringify(resource, null, 2) + '\n';
const audit = {
  schema: 'bioethics-bench-featured20-prestudy-editorial-changes/1',
  from_release: 'featured-v1',
  to_resource: resource.resource_id,
  excluded_case_id: EXCLUDED_CASE,
  scope: resource.editorial_scope,
  change_count: changes.length,
  cases_changed: new Set(changes.map((x) => x.case_id)).size,
  changes,
};
const auditRendered = JSON.stringify(audit, null, 2) + '\n';

if (process.argv.includes('--check')) {
  if (!existsSync(OUTPUT) || readFileSync(OUTPUT, 'utf8') !== rendered) {
    throw new Error('featured20-prestudy-v2.json is stale');
  }
  if (!existsSync(CHANGES) || readFileSync(CHANGES, 'utf8') !== auditRendered) {
    throw new Error('featured20-prestudy-v2.changes.json is stale');
  }
  console.log(`✓ verified ${OUTPUT}: ${records.length} records; F08 preserved exactly`);
} else {
  writeFileSync(OUTPUT, rendered);
  writeFileSync(CHANGES, auditRendered);
  console.log(
    `✓ wrote ${OUTPUT}: ${records.length} records, ${changes.length} changed fields across `
    + `${new Set(changes.map((x) => x.case_id)).size} families; F08 preserved exactly`,
  );
}
