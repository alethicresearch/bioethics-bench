#!/usr/bin/env node
/**
 * Validate reviewed projection-crosswalk dispositions over the neutral Full-200
 * v1.1 candidate-universe resource.
 *
 * Mapping is never inferred here. Approved historical crosswalks must account
 * explicitly for every represented source-role candidate. The same neutral
 * Policy may be independently supported in different source roles, but two
 * distinct historical candidates inside one role may not be collapsed onto one
 * neutral Policy under a claimed one-to-one crosswalk. Families that cannot
 * satisfy that rule belong in a machine-readable hold decision instead.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const root = process.cwd();
const sourceGroundedDir = join(root, 'resources', 'projections', 'source-grounded');
const holdDir = join(root, 'resources', 'projections', 'holds');
const universeRel = 'resources/case-families/full-200-rich-candidate-universes.v1.1.json';
const universePath = join(root, universeRel);
const manifestSchemaPath = join(root, 'schemas', 'projection-manifest.schema.json');
const holdSchemaPath = join(root, 'schemas', 'projection-crosswalk-hold.schema.json');
const profilePath = join(root, 'schemas', 'benchmark-profiles.json');
const benchmarkDir = join(root, 'data', 'benchmark');

if (!existsSync(universePath)) {
  console.error(`✗ projection validation requires ${universeRel}`);
  process.exit(1);
}

const universe = JSON.parse(readFileSync(universePath, 'utf8'));
const manifestSchema = JSON.parse(readFileSync(manifestSchemaPath, 'utf8'));
const holdSchema = JSON.parse(readFileSync(holdSchemaPath, 'utf8'));
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
const validateManifestSchema = ajv.compile(manifestSchema);
const validateHoldSchema = ajv.compile(holdSchema);
const problems = [];
const manifests = [];
const holds = [];

function readJsonFiles(dir, destination) {
  if (!existsSync(dir)) return;
  for (const file of readdirSync(dir).filter((name) => name.endsWith('.json')).sort()) {
    try {
      destination.push({ file, value: JSON.parse(readFileSync(join(dir, file), 'utf8')) });
    } catch (error) {
      problems.push(`${file}: invalid JSON: ${error.message}`);
    }
  }
}
readJsonFiles(sourceGroundedDir, manifests);
readJsonFiles(holdDir, holds);

function resolvedAggregation(record) {
  return record.required_aggregation ?? profiles[record.benchmark_profile]?.required_aggregation ?? null;
}

function sourceRecordPair(file, caseFamilyId, sourceIds) {
  const records = [];
  for (const recordId of sourceIds ?? []) {
    const record = recordById.get(recordId);
    if (!record) {
      problems.push(`${file}: source_record_id ${recordId} does not exist under data/benchmark`);
      continue;
    }
    records.push(record);
    const recordFamily = inventoryIdentity(record.case_id) ?? inventoryIdentity(record.record_id);
    if (recordFamily !== caseFamilyId) {
      problems.push(`${file}: source record ${recordId} belongs to inventory ${recordFamily ?? 'unknown'} (${record.case_id}), not ${caseFamilyId}`);
    }
  }
  if ((sourceIds ?? []).length !== 2) {
    problems.push(`${file}: historical crosswalk disposition must pin exactly two matched source records; found ${(sourceIds ?? []).length}`);
  }
  const forms = records.map((record) => record.representation?.form).sort();
  if (records.length === 2 && (forms[0] !== 'concise' || forms[1] !== 'detailed')) {
    problems.push(`${file}: source_record_ids must identify one concise and one detailed record; found [${forms.join(', ')}]`);
  }
  if (records.length === 2 && JSON.stringify(records[0].candidate_pools) !== JSON.stringify(records[1].candidate_pools)) {
    problems.push(`${file}: concise/detailed source records do not carry identical candidate pools`);
  }
  return records;
}

const dispositionByFamily = new Map();
const projectionIds = new Set();
for (const { file, value: manifest } of manifests) {
  if (!validateManifestSchema(manifest)) {
    for (const error of validateManifestSchema.errors ?? []) problems.push(`${file}: schema ${error.instancePath || '/'} ${error.message}`);
    continue;
  }
  if (projectionIds.has(manifest.projection_id)) problems.push(`${file}: duplicate projection_id ${manifest.projection_id}`);
  projectionIds.add(manifest.projection_id);
  if (dispositionByFamily.has(manifest.case_family_id)) problems.push(`${file}: duplicate disposition for ${manifest.case_family_id}`);
  dispositionByFamily.set(manifest.case_family_id, 'approved');

  const family = familyById.get(manifest.case_family_id);
  if (!family) {
    problems.push(`${file}: unknown case_family_id ${manifest.case_family_id}`);
    continue;
  }
  if (manifest.candidate_universe_resource !== universeRel) {
    problems.push(`${file}: candidate_universe_resource must pin ${universeRel}; found ${manifest.candidate_universe_resource}`);
  }
  if (manifest.projection_type !== 'source-grounded') {
    problems.push(`${file}: this reviewed historical-crosswalk directory only accepts projection_type source-grounded`);
  }
  if (manifest.review_status !== 'approved-editorial-crosswalk') {
    problems.push(`${file}: historical crosswalk must declare review_status approved-editorial-crosswalk`);
  }
  if (!manifest.claim_scope.toLowerCase().includes('source')) {
    problems.push(`${file}: source-grounded claim_scope must explicitly delimit represented source-role inference`);
  }

  const validNeutral = new Set(family.candidate_universe.map((candidate) => candidate.candidate_id));
  for (const role of ['public', 'expert', 'framework']) {
    const ids = manifest.role_assignments?.[role] ?? [];
    if (ids.length === 0) problems.push(`${file}: role_assignments.${role} is empty`);
    for (const id of ids) if (!validNeutral.has(id)) problems.push(`${file}: ${role} assigns unknown neutral candidate ${id}`);
  }

  const sourceRecords = sourceRecordPair(file, manifest.case_family_id, manifest.source_record_ids);
  const concise = sourceRecords.find((record) => record.representation?.form === 'concise') ?? sourceRecords[0];
  if (sourceRecords.length) {
    const aggs = [...new Set(sourceRecords.map(resolvedAggregation).filter(Boolean))];
    if (aggs.length > 1) problems.push(`${file}: source records resolve to inconsistent aggregation requirements [${aggs.join(', ')}]`);
    else if (aggs.length === 1 && manifest.aggregation !== aggs[0]) problems.push(`${file}: aggregation ${manifest.aggregation} disagrees with source requirement ${aggs[0]}`);
  }

  const expectedSource = new Map();
  if (concise) {
    for (const role of ['public', 'expert', 'framework']) {
      for (const candidate of concise.candidate_pools?.[role] ?? []) {
        expectedSource.set(`${role}:${candidate.id}`, { role, id: candidate.id });
      }
    }
  }
  const seenSource = new Set();
  const impliedByRole = Object.fromEntries(['public', 'expert', 'framework'].map((role) => [role, []]));
  const seenNeutralWithinRole = Object.fromEntries(['public', 'expert', 'framework'].map((role) => [role, new Set()]));
  for (const item of manifest.source_candidate_crosswalk ?? []) {
    const key = `${item.source_role}:${item.source_candidate_id}`;
    if (!expectedSource.has(key)) problems.push(`${file}: crosswalk names source candidate ${key} not present in the historical record`);
    if (seenSource.has(key)) problems.push(`${file}: source candidate ${key} crosswalked more than once`);
    seenSource.add(key);
    if (!validNeutral.has(item.neutral_candidate_id)) problems.push(`${file}: crosswalk maps ${key} to unknown neutral ${item.neutral_candidate_id}`);
    if (seenNeutralWithinRole[item.source_role].has(item.neutral_candidate_id)) {
      problems.push(`${file}: two ${item.source_role} source candidates collapse onto neutral ${item.neutral_candidate_id}; use a hold instead of claiming one-to-one equivalence`);
    }
    seenNeutralWithinRole[item.source_role].add(item.neutral_candidate_id);
    impliedByRole[item.source_role].push(item.neutral_candidate_id);
  }
  for (const key of expectedSource.keys()) {
    if (!seenSource.has(key)) problems.push(`${file}: historical source candidate ${key} is not covered by source_candidate_crosswalk`);
  }
  if ((manifest.source_candidate_crosswalk ?? []).length !== expectedSource.size) {
    problems.push(`${file}: source_candidate_crosswalk has ${(manifest.source_candidate_crosswalk ?? []).length} entries; historical record has ${expectedSource.size} candidates`);
  }
  for (const role of ['public', 'expert', 'framework']) {
    const declared = [...(manifest.role_assignments?.[role] ?? [])].sort();
    const implied = [...new Set(impliedByRole[role])].sort();
    if (JSON.stringify(declared) !== JSON.stringify(implied)) {
      problems.push(`${file}: role_assignments.${role}=[${declared}] disagrees with crosswalk-implied neutral IDs [${implied}]`);
    }
  }
}

const holdIds = new Set();
for (const { file, value: hold } of holds) {
  if (!validateHoldSchema(hold)) {
    for (const error of validateHoldSchema.errors ?? []) problems.push(`${file}: schema ${error.instancePath || '/'} ${error.message}`);
    continue;
  }
  if (holdIds.has(hold.review_id)) problems.push(`${file}: duplicate review_id ${hold.review_id}`);
  holdIds.add(hold.review_id);
  if (dispositionByFamily.has(hold.case_family_id)) problems.push(`${file}: duplicate disposition for ${hold.case_family_id}`);
  dispositionByFamily.set(hold.case_family_id, 'hold');

  const family = familyById.get(hold.case_family_id);
  if (!family) {
    problems.push(`${file}: unknown case_family_id ${hold.case_family_id}`);
    continue;
  }
  if (hold.candidate_universe_resource !== universeRel) {
    problems.push(`${file}: candidate_universe_resource must pin ${universeRel}; found ${hold.candidate_universe_resource}`);
  }
  const sourceRecords = sourceRecordPair(file, hold.case_family_id, hold.source_record_ids);
  const concise = sourceRecords.find((record) => record.representation?.form === 'concise') ?? sourceRecords[0];
  const validNeutral = new Set(family.candidate_universe.map((candidate) => candidate.candidate_id));
  const validSource = new Set();
  if (concise) {
    for (const role of ['public', 'expert', 'framework']) {
      for (const candidate of concise.candidate_pools?.[role] ?? []) validSource.add(`${role}:${candidate.id}`);
    }
  }
  for (const issue of hold.issues) {
    const key = `${issue.source_role}:${issue.source_candidate_id}`;
    if (!validSource.has(key)) problems.push(`${file}: hold issue names source candidate ${key} not present in historical record`);
    for (const id of issue.related_neutral_candidate_ids) if (!validNeutral.has(id)) problems.push(`${file}: hold issue ${key} names unknown neutral candidate ${id}`);
  }
}

if (process.argv.includes('--require-complete')) {
  const executableFamilies = new Set();
  for (const record of recordById.values()) {
    const family = inventoryIdentity(record.case_id) ?? inventoryIdentity(record.record_id);
    if (family && record.collection === 'benchmark') executableFamilies.add(family);
  }
  for (const family of executableFamilies) if (!dispositionByFamily.has(family)) problems.push(`completion gate: executable family ${family} has no approved manifest or hold`);
  for (const family of dispositionByFamily.keys()) if (!executableFamilies.has(family)) problems.push(`completion gate: disposition exists for non-executable calibration family ${family}`);
  if (executableFamilies.size !== 34) problems.push(`completion gate expected 34 executable families; found ${executableFamilies.size}`);
  if (dispositionByFamily.size !== 34) problems.push(`completion gate expected 34 dispositions; found ${dispositionByFamily.size}`);
}

if (problems.length) {
  console.error(`✗ ${problems.length} projection-review problem(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`✓ projection review objects valid: ${manifests.length} approved crosswalk(s), ${holds.length} hold(s), ${dispositionByFamily.size} disposition(s).`);
if (process.argv.includes('--require-complete')) console.log('✓ completion gate: all 34 executable calibration families are explicitly dispositioned.');
