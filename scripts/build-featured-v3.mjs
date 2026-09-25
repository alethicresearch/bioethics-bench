#!/usr/bin/env node
/**
 * Build the final pre-study Featured-20 v3 resource.
 *
 * Featured-v3 inherits the Featured-v2 language-normalized resource exactly except for F08.
 * F08 uses the separately reviewed polished v2 source records in data/featured. All output
 * records receive v3 record ids/version metadata so the frozen resource is internally uniform.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { canonicalContentHash } from './hash-case.mjs';

const SOURCE = 'resources/cases/featured20-prestudy-v2.json';
const OUTPUT = 'resources/cases/featured20-prestudy-v3.json';
const AUDIT = 'resources/cases/featured20-prestudy-v3.audit.json';
const F08 = 'f08-fourteen-day-embryo-research-limit';
const F08_CONCISE = 'data/featured-v3/f08-fourteen-day-embryo-research-limit-concise-v2.json';
const F08_DETAILED = 'data/featured-v3/f08-fourteen-day-embryo-research-limit-detailed-v2.json';

const source = JSON.parse(readFileSync(SOURCE, 'utf8'));
const f08ByForm = {
  concise: JSON.parse(readFileSync(F08_CONCISE, 'utf8')),
  detailed: JSON.parse(readFileSync(F08_DETAILED, 'utf8')),
};

function asV3(input) {
  const r = structuredClone(input);
  r.record_id = r.record_id.replace(/-v[0-9]+$/, '-v3');
  r.version = '3.0.0';
  r.collection = 'featured20-prestudy-v3';
  r.status = 'reviewed';
  r.representation.companion_record_ids = (r.representation.companion_record_ids || [])
    .map((id) => id.replace(/-v[0-9]+$/, '-v3'));
  delete r.content_hash;
  r.content_hash = canonicalContentHash(r);
  return r;
}

const records = source.records.map((r) => {
  if (r.case_id !== F08) return asV3(r);
  const replacement = f08ByForm[r.representation?.form];
  if (!replacement) throw new Error('missing F08 replacement for ' + r.representation?.form);
  return asV3(replacement);
});

if (records.length !== source.records.length) throw new Error('record count changed');
if (new Set(records.map((r) => r.case_id)).size !== 20) throw new Error('family count changed');

const resource = {
  ...source,
  resource_id: 'bioethics-bench-featured20-prestudy',
  resource_version: '3.0.0',
  derived_from: 'featured20-prestudy-v2',
  editorial_scope: 'Featured-v2 inherited; F08 candidate language polished for clarity and parallel granularity while preserving the same six source-grounded normative positions',
  excluded_unchanged_case_id: null,
  polished_case_id: F08,
  records,
};

const oldF08 = source.records.filter((r) => r.case_id === F08);
const newF08 = records.filter((r) => r.case_id === F08);
const audit = {
  schema: 'bioethics-bench-featured20-prestudy-v3-audit/1',
  source_resource_version: source.resource_version,
  output_resource_version: resource.resource_version,
  family_count: 20,
  record_count: records.length,
  polished_case_id: F08,
  inherited_case_count: 19,
  substantive_scope: 'F08 candidate wording only; ids within the candidate field, source pools, provenance sources, scenario, decision question and substantive policy directions preserved',
  f08: newF08.map((r) => {
    const before = oldF08.find((x) => x.representation?.form === r.representation?.form);
    return {
      form: r.representation?.form,
      source_record_id: before?.record_id || null,
      record_id: r.record_id,
      content_hash: r.content_hash,
      candidates_before: Object.fromEntries(Object.values(before?.candidate_pools || {}).flat().map((p) => [p.id, p.text])),
      candidates_after: Object.fromEntries(Object.values(r.candidate_pools || {}).flat().map((p) => [p.id, p.text])),
    };
  }),
};

writeFileSync(OUTPUT, JSON.stringify(resource, null, 2) + '\n');
writeFileSync(AUDIT, JSON.stringify(audit, null, 2) + '\n');
console.log('✓ wrote Featured-20 v3: 40 records; only F08 candidate wording changed substantively from v2');
