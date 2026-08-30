#!/usr/bin/env node
// Verify the read-only sacre-qccs-v1 task adapter against canonical Bench records.
//
// With --sacre-reference and --sacre-pin, this becomes a cross-repository equivalence test:
// it must reproduce the exact JSON currently vendored by SACRE and the reference must itself
// match SACRE's recorded SHA-256 pin. Without those options it still validates all current
// records against the explicit task contract and is safe to run as part of Bench validation.

import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  buildLegacySacreFullCorpusPayload,
  buildSacreQccsV1Projection,
  QCCS_OPERATIONALIZATION,
  QCCS_PROTOCOL_ID,
  QCCS_PROTOCOL_VERSION,
  SACRE_QCCS_V1_TASK_PROTOCOL_ID,
} from './task-adapters/sacre-qccs-v1.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recordDir = join(root, 'data', 'benchmark');
const manifestPath = join(root, 'releases', 'full-corpus-v1-completion-candidate', 'manifest.json');
const profilesPath = join(root, 'schemas', 'benchmark-profiles.json');
const taskContractPath = join(root, 'tasks', 'sacre-qccs-v1', 'task-contract.json');

function argValue(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) return null;
  assert.ok(process.argv[index + 1], `${name} requires a path`);
  return resolve(process.argv[index + 1]);
}

const referencePath = argValue('--sacre-reference');
const pinPath = argValue('--sacre-pin');
assert.equal(Boolean(referencePath), Boolean(pinPath), '--sacre-reference and --sacre-pin must be supplied together');

const files = readdirSync(recordDir).filter((file) => file.endsWith('.json')).sort();
const records = files.map((file) => JSON.parse(readFileSync(join(recordDir, file), 'utf8')));
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const profileRegistry = JSON.parse(readFileSync(profilesPath, 'utf8'));
const profiles = profileRegistry.profiles;
const taskContract = JSON.parse(readFileSync(taskContractPath, 'utf8'));

assert.equal(taskContract.task_protocol_id, SACRE_QCCS_V1_TASK_PROTOCOL_ID);
assert.equal(taskContract.measurement.protocol_id, QCCS_PROTOCOL_ID);
assert.equal(taskContract.measurement.protocol_version, QCCS_PROTOCOL_VERSION);
assert.equal(taskContract.measurement.operationalization_id, QCCS_OPERATIONALIZATION);
assert.equal(manifest.qccs_protocol_id, QCCS_PROTOCOL_ID);
assert.equal(manifest.qccs_protocol_version, QCCS_PROTOCOL_VERSION);
assert.match(manifest.scoring_mode, /^conv\+/);

const projections = buildSacreQccsV1Projection({ records, manifest, profiles });
const payload = buildLegacySacreFullCorpusPayload({ records, manifest, profiles });

assert.equal(records.length, taskContract.equivalence_gate.current_expected_record_count,
  'task contract expected-record count is stale');
assert.equal(projections.length, records.length);
assert.equal(payload.recordCount, records.length);
assert.equal(payload.familyCount * 2, records.length, 'current Full Corpus must contain matched concise/detailed companions');

const familyIds = new Set(projections.map((projection) => projection.resource.caseId));
assert.equal(familyIds.size, payload.familyCount);

for (const projection of projections) {
  const [p, e, f] = projection.geometry;
  assert.equal(projection.expectedPairCount, p * e + p * f + e * f, `${projection.resource.recordId}: pair-count formula`);
  assert.equal(new Set(projection.expectedPairs.map((pair) => pair.key)).size, projection.expectedPairCount,
    `${projection.resource.recordId}: duplicate canonical pair key`);
  assert.equal(
    projection.requiredAggregation,
    projection.structurallyAsymmetric ? 'mean' : null,
    `${projection.resource.recordId}: aggregation/asymmetry mismatch`,
  );
}

if (referencePath && pinPath) {
  const referenceRaw = readFileSync(referencePath, 'utf8');
  const reference = JSON.parse(referenceRaw);
  const pin = JSON.parse(readFileSync(pinPath, 'utf8'));
  const referenceSha = createHash('sha256').update(referenceRaw).digest('hex');

  assert.equal(referenceSha, pin.sha256, 'SACRE reference Full Corpus does not match its recorded pin');
  assert.equal(pin.source_release, manifest.release_id, 'SACRE pin points to a different Bench release');
  assert.equal(pin.release_status, manifest.release_status, 'SACRE pin and current Bench release status differ');
  assert.equal(pin.family_count, payload.familyCount, 'SACRE pin family count differs');
  assert.equal(pin.record_count, payload.recordCount, 'SACRE pin record count differs');
  assert.deepEqual(pin.record_statuses, payload.recordStatuses, 'SACRE pin record statuses differ');
  assert.equal(pin.content_license, payload.rights.license, 'SACRE pin content license differs');

  // Object equality names the semantic difference if one appears. Byte equality then proves
  // property/order serialization is also unchanged relative to the current vendor artifact.
  assert.deepEqual(payload, reference, 'adapter projection differs from current SACRE vendored semantics');
  const serialized = `${JSON.stringify(payload, null, 2)}\n`;
  assert.equal(serialized, referenceRaw, 'adapter projection is semantically equal but serialization differs from SACRE reference');

  console.log(`✓ sacre-qccs-v1 adapter is byte-equivalent to the pinned SACRE Full Corpus: ${payload.familyCount} families / ${payload.recordCount} records.`);
  console.log(`  SACRE reference sha256 ${referenceSha}`);
} else {
  console.log(`✓ sacre-qccs-v1 adapter validated ${payload.familyCount} families / ${payload.recordCount} records against the explicit task contract.`);
  console.log('  Cross-repo equivalence not requested; pass --sacre-reference and --sacre-pin to verify against SACRE.');
}
