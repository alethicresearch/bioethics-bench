#!/usr/bin/env node
/**
 * Build the final pre-study Featured-20 v2 resource.
 *
 * The released Featured v1 records remain immutable. Nineteen families receive the established
 * punctuation/readability normalization. F08 uses the separately reviewed polished v2 source
 * records, preserving its six policy ids, source classes, provenance sources and substantive
 * policy directions while bringing its candidate wording to the same editorial standard.
 */
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const SRC = 'data/featured';
const OUTPUT = 'resources/cases/featured20-prestudy-v2.json';
const CHANGES = 'resources/cases/featured20-prestudy-v2.changes.json';
const F08 = 'f08-fourteen-day-embryo-research-limit';
const F08_SOURCE = {
  concise: 'resources/cases/featured20-v2-source/f08-fourteen-day-embryo-research-limit-concise-v2.json',
  detailed: 'resources/cases/featured20-v2-source/f08-fourteen-day-embryo-research-limit-detailed-v2.json',
};
const EDIT_KEYS = new Set(['short_description','decision_question','jurisdiction_context','scenario','text','statement','rationale']);

const sourceFiles = readdirSync(SRC).filter((f) => f.endsWith('-v1.json')).sort();
const sourceRecords = sourceFiles.map((f) => JSON.parse(readFileSync(join(SRC, f), 'utf8')));
const polishedF08 = Object.fromEntries(Object.entries(F08_SOURCE).map(([form,path]) => [form, JSON.parse(readFileSync(path,'utf8'))]));

function editRecord(source) {
  if (source.case_id === F08) {
    const form = source.representation?.form;
    const replacement = structuredClone(polishedF08[form]);
    if (!replacement) throw new Error('missing polished F08 ' + form);
    const changes = [];
    for (const pool of ['public','expert','framework']) {
      for (let i = 0; i < source.candidate_pools[pool].length; i += 1) {
        const before = source.candidate_pools[pool][i];
        const after = replacement.candidate_pools[pool].find((p) => p.id === before.id);
        if (!after) throw new Error('missing polished F08 candidate ' + before.id);
        if (before.text !== after.text) changes.push({
          path: `candidate_pools.${pool}.${i}.text`,
          before: before.text,
          after: after.text,
        });
      }
    }
    return { record: replacement, changes };
  }

  const record = structuredClone(source);
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
      } else if (value && typeof value === 'object') walk(value, next);
    }
  }
  walk(record);
  record.record_id = record.record_id.replace(/-v1$/, '-v2');
  record.version = '2.0.0';
  record.representation.companion_record_ids = (record.representation.companion_record_ids || []).map((id) => id.replace(/-v1$/, '-v2'));
  record.status = 'reviewed';
  record.collection = 'featured20-prestudy-v2';
  delete record.content_hash;
  record.content_hash = canonicalContentHash(record);
  return { record, changes };
}

const built = sourceRecords.map(editRecord);
const records = built.map((x) => x.record);
const changes = built.flatMap((x,index) => x.changes.map((change) => ({
  case_id: sourceRecords[index].case_id,
  source_record_id: sourceRecords[index].record_id,
  record_id: x.record.record_id,
  ...change,
})));

if (records.length !== 40 || new Set(records.map((r) => r.case_id)).size !== 20) throw new Error('Featured-20 v2 geometry changed');
for (const r of records) {
  if (!/-v2$/.test(r.record_id) || r.version !== '2.0.0') throw new Error(r.record_id + ': final resource must be uniformly v2');
}

const resource = {
  resource_id: 'bioethics-bench-featured20-prestudy',
  resource_version: '2.0.0',
  derived_from: 'featured-v1',
  editorial_scope: 'Language-normalized Featured-20 study resource; F08 candidate wording additionally polished for clarity and parallel granularity while preserving the same six source-grounded normative positions',
  polished_case_id: F08,
  family_count: 20,
  record_count: 40,
  records,
};
const audit = {
  schema: 'bioethics-bench-featured20-prestudy-v2-editorial-changes/1',
  from_release: 'featured-v1',
  to_resource: resource.resource_id,
  polished_case_id: F08,
  scope: resource.editorial_scope,
  change_count: changes.length,
  cases_changed: new Set(changes.map((x) => x.case_id)).size,
  changes,
};
const rendered = JSON.stringify(resource,null,2) + '\n';
const auditRendered = JSON.stringify(audit,null,2) + '\n';

if (process.argv.includes('--check')) {
  if (!existsSync(OUTPUT) || readFileSync(OUTPUT,'utf8') !== rendered) throw new Error('featured20-prestudy-v2.json is stale');
  if (!existsSync(CHANGES) || readFileSync(CHANGES,'utf8') !== auditRendered) throw new Error('featured20-prestudy-v2.changes.json is stale');
  console.log('✓ Featured-20 v2 verified: 20 families / 40 uniformly-v2 records, including polished F08');
} else {
  writeFileSync(OUTPUT, rendered);
  writeFileSync(CHANGES, auditRendered);
  console.log('✓ wrote final Featured-20 v2');
}
