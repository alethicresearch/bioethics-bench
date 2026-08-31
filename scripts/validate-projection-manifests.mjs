#!/usr/bin/env node
/**
 * Validate explicit SACRE projection manifests over the neutral Full-200
 * candidate-universe resource.
 *
 * Projection mapping is substantive and is never inferred here. This validator
 * only checks that an editorially declared mapping is internally coherent and,
 * where it claims lineage to existing executable records, that the declared
 * inventory family and aggregation agree with those records.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const root = process.cwd();
const projectionDir = join(root, 'resources', 'projections');
const universePath = join(root, 'resources', 'case-families', 'full-200-rich-candidate-universes.v1.json');
const schemaPath = join(root, 'schemas', 'projection-manifest.schema.json');
const profilePath = join(root, 'schemas', 'benchmark-profiles.json');
const benchmarkDir = join(root, 'data', 'benchmark');

const universe = JSON.parse(readFileSync(universePath, 'utf8'));
const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
const profiles = JSON.parse(readFileSync(profilePath, 'utf8')).profiles ?? {};
const familyById = new Map(universe.cases.map((family) => [family.case_family_id, family]));
const recordById = new Map();

function inventoryIdentity(value) {
  return String(value ?? '').match(/^m\d{3}/)?.[0] ?? null;
}

for (const file of readdirSync(benchmarkDir).filter((name) => name.endsWith('.json'))) {
  const record = JSON.parse(readFileSync(join(benchmarkDir, file), 'utf8'));
  if (record.record_id) recordById.set(record.record_id, { ...record, _file: file });
}

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validateSchema = ajv.compile(schema);
const problems = [];
const manifests = [];

if (existsSync(projectionDir)) {
  for (const file of readdirSync(projectionDir).filter((name) => name.endsWith('.json')).sort()) {
    try {
      manifests.push({ file, manifest: JSON.parse(readFileSync(join(projectionDir, file), 'utf8')) });
    } catch (error) {
      problems.push(`${file}: invalid JSON: ${error.message}`);
    }
  }
}

function resolvedAggregation(record) {
  return record.required_aggregation
    ?? profiles[record.benchmark_profile]?.required_aggregation
    ?? null;
}

const projectionIds = new Set();
for (const { file, manifest } of manifests) {
  if (!validateSchema(manifest)) {
    for (const error of validateSchema.errors ?? []) {
      problems.push(`${file}: schema ${error.instancePath || '/'} ${error.message}`);
    }
    continue;
  }

  if (projectionIds.has(manifest.projection_id)) {
    problems.push(`${file}: duplicate projection_id ${manifest.projection_id}`);
  }
  projectionIds.add(manifest.projection_id);

  const family = familyById.get(manifest.case_family_id);
  if (!family) {
    problems.push(`${file}: unknown case_family_id ${manifest.case_family_id}`);
    continue;
  }

  const expectedResource = 'resources/case-families/full-200-rich-candidate-universes.v1.json';
  if (manifest.candidate_universe_resource !== expectedResource) {
    problems.push(`${file}: candidate_universe_resource must pin ${expectedResource}; found ${manifest.candidate_universe_resource}`);
  }

  const validCandidateIds = new Set(family.candidate_universe.map((candidate) => candidate.candidate_id));
  const assigned = new Map();
  for (const role of ['public', 'expert', 'framework']) {
    const ids = manifest.role_assignments?.[role] ?? [];
    if (ids.length === 0) {
      problems.push(`${file}: role_assignments.${role} is empty; an executable SACRE projection must represent all three roles`);
    }
    for (const id of ids) {
      if (!validCandidateIds.has(id)) {
        problems.push(`${file}: ${role} assigns unknown neutral candidate ${id} for ${manifest.case_family_id}`);
      }
      if (assigned.has(id)) {
        problems.push(`${file}: neutral candidate ${id} assigned to both ${assigned.get(id)} and ${role}`);
      } else {
        assigned.set(id, role);
      }
    }
  }

  const sourceIds = manifest.source_record_ids ?? [];
  const sourceRecords = [];
  for (const recordId of sourceIds) {
    const record = recordById.get(recordId);
    if (!record) {
      problems.push(`${file}: source_record_id ${recordId} does not exist under data/benchmark`);
      continue;
    }
    sourceRecords.push(record);
    const recordFamily = inventoryIdentity(record.case_id) ?? inventoryIdentity(record.record_id);
    if (recordFamily !== manifest.case_family_id) {
      problems.push(`${file}: source record ${recordId} belongs to inventory ${recordFamily ?? 'unknown'} (${record.case_id}), not ${manifest.case_family_id}`);
    }
  }

  if (manifest.projection_type === 'source-grounded' && sourceIds.length > 0) {
    if (sourceIds.length !== 2) {
      problems.push(`${file}: historical source-grounded crosswalk should pin the matched concise/detailed pair; found ${sourceIds.length} source_record_ids`);
    }
    const forms = sourceRecords.map((record) => record.representation?.form).sort();
    if (sourceRecords.length === 2 && (forms[0] !== 'concise' || forms[1] !== 'detailed')) {
      problems.push(`${file}: source_record_ids must identify one concise and one detailed record; found [${forms.join(', ')}]`);
    }

    const aggs = [...new Set(sourceRecords.map(resolvedAggregation).filter(Boolean))];
    if (aggs.length > 1) {
      problems.push(`${file}: source records resolve to inconsistent aggregation requirements [${aggs.join(', ')}]`);
    } else if (aggs.length === 1 && manifest.aggregation !== aggs[0]) {
      problems.push(`${file}: aggregation ${manifest.aggregation} disagrees with source-record/profile requirement ${aggs[0]}`);
    }
  }

  if (manifest.projection_type === 'source-grounded' && !manifest.claim_scope.toLowerCase().includes('source')) {
    problems.push(`${file}: source-grounded claim_scope should explicitly delimit the represented source-role inference`);
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} projection-manifest problem(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`✓ projection manifests valid: ${manifests.length} manifest(s) over the neutral Full-200 resource.`);
if (manifests.length === 0) {
  console.log('  No projection mapping has been declared yet; this is valid before editorial crosswalking begins.');
}
