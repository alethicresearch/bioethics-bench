#!/usr/bin/env node
/**
 * Validate a neutral Full-200 case-family candidate-universe resource.
 *
 * Usage:
 *   node scripts/validate-candidate-universe.mjs [resource-path]
 *
 * The default remains the immutable v1.0 resource. Versioned successors can be
 * checked with the same invariants by passing their repository-relative path.
 */

import { existsSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const root = process.cwd();
const resourceArg = process.argv[2] ?? 'resources/case-families/full-200-rich-candidate-universes.v1.json';
const resourcePath = join(root, resourceArg);
const schemaPath = join(root, 'schemas', 'candidate-universe.schema.json');
const problems = [];

if (!existsSync(resourcePath)) {
  console.error(`✗ neutral Full-200 candidate-universe resource is absent: ${resourceArg}`);
  process.exit(1);
}

let resource;
let schema;
try {
  resource = JSON.parse(readFileSync(resourcePath, 'utf8'));
  schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
} catch (error) {
  console.error(`✗ cannot parse candidate-universe resource/schema: ${error.message}`);
  process.exit(1);
}

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);
if (!validate(resource)) {
  for (const error of validate.errors ?? []) problems.push(`schema ${error.instancePath || '/'} ${error.message}`);
}

const expectedIds = Array.from({ length: 200 }, (_, index) => `M${String(index + 1).padStart(3, '0')}`);
if (resource.case_count !== resource.cases?.length) {
  problems.push(`case_count=${resource.case_count} but cases.length=${resource.cases?.length ?? 'missing'}`);
}

for (let index = 0; index < (resource.cases ?? []).length; index += 1) {
  const family = resource.cases[index];
  const expectedInventoryId = expectedIds[index];
  if (family.inventory_id !== expectedInventoryId) {
    problems.push(`cases[${index}]: expected inventory_id ${expectedInventoryId}; found ${family.inventory_id}`);
  }
  if (family.case_family_id !== expectedInventoryId.toLowerCase()) {
    problems.push(`${family.inventory_id}: case_family_id must equal lowercase inventory identity; found ${family.case_family_id}`);
  }
  if (family.candidate_count !== family.candidate_universe?.length) {
    problems.push(`${family.inventory_id}: candidate_count=${family.candidate_count} but candidate_universe.length=${family.candidate_universe?.length ?? 'missing'}`);
  }

  const candidateIds = new Set();
  const normalizedTexts = new Set();
  for (let candidateIndex = 0; candidateIndex < (family.candidate_universe ?? []).length; candidateIndex += 1) {
    const candidate = family.candidate_universe[candidateIndex];
    const expectedCandidateId = `c${String(candidateIndex + 1).padStart(2, '0')}`;
    if (candidate.candidate_id !== expectedCandidateId) {
      problems.push(`${family.inventory_id}: candidate ${candidateIndex + 1} expected id ${expectedCandidateId}; found ${candidate.candidate_id}`);
    }
    if (candidateIds.has(candidate.candidate_id)) problems.push(`${family.inventory_id}: duplicate candidate_id ${candidate.candidate_id}`);
    candidateIds.add(candidate.candidate_id);

    const normalized = String(candidate.text ?? '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.;,]+$/, '');
    if (normalizedTexts.has(normalized)) problems.push(`${family.inventory_id}: duplicate candidate text after conservative normalization: ${candidate.text}`);
    normalizedTexts.add(normalized);
  }

  const auditPath = join(root, family.audit_source_path ?? '');
  const deepPath = join(root, family.deep_case_path ?? '');
  if (!existsSync(auditPath)) problems.push(`${family.inventory_id}: audit_source_path does not exist: ${family.audit_source_path}`);
  if (!existsSync(deepPath)) problems.push(`${family.inventory_id}: deep_case_path does not exist: ${family.deep_case_path}`);
}

const totalCandidates = (resource.cases ?? []).reduce((sum, family) => sum + (family.candidate_count ?? 0), 0);
const mean = resource.cases?.length ? totalCandidates / resource.cases.length : 0;

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in ${relative(root, resourcePath)}:`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`✓ neutral candidate-universe resource valid (${resource.resource_version}): ${resource.case_count} cases / ${totalCandidates} candidates / mean ${mean.toFixed(2)}.`);
