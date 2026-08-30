// Read-only Bioethics Bench -> SACRE/QCCS v1 task adapter.
//
// This module deliberately does not mutate canonical Bench records. It makes explicit the
// projection that SACRE's current Full Corpus vendor performs implicitly, while also exposing
// record-level task semantics (role mapping, pair set, geometry and aggregation requirement)
// for equivalence testing and later protocol freezes.

import assert from 'node:assert/strict';

export const SACRE_QCCS_V1_TASK_PROTOCOL_ID = 'sacre-qccs-v1';
export const SACRE_QCCS_V1_CONTRACT_VERSION = '0.1.0';
export const QCCS_PROTOCOL_ID = 'qccs-v1';
export const QCCS_PROTOCOL_VERSION = '1.0.0';
export const QCCS_OPERATIONALIZATION = 'conv+';

export const SOURCE_ROLES = ['public', 'expert', 'framework'];

const ID_PATTERNS = {
  public: /^pub[1-9][0-9]*$/,
  expert: /^exp[1-9][0-9]*$/,
  framework: /^fw[1-9][0-9]*$/,
};

const LEGACY_COMMENT = 'Vendored copy of the Bioethics Bench Full Corpus executable subset. Do not edit here; change it upstream, then re-vendor with scripts/vendor-bench-full-corpus.mjs.';

function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function canonicalPairKey(a, b) {
  return a < b ? `${a}-${b}` : `${b}-${a}`;
}

function requireProfile(record, profiles) {
  const profile = profiles?.[record.benchmark_profile];
  assert.ok(profile, `${record.record_id}: unregistered benchmark profile ${JSON.stringify(record.benchmark_profile)}`);
  return profile;
}

function candidateRoleMap(record) {
  assert.ok(record?.candidate_pools && typeof record.candidate_pools === 'object', `${record?.record_id}: candidate_pools missing`);
  assert.deepEqual(
    Object.keys(record.candidate_pools).sort(),
    [...SOURCE_ROLES].sort(),
    `${record.record_id}: sacre-qccs-v1 requires exactly public, expert and framework pools`,
  );

  const roleById = new Map();
  const policies = {};
  for (const role of SOURCE_ROLES) {
    const pool = record.candidate_pools[role];
    assert.ok(Array.isArray(pool) && pool.length > 0, `${record.record_id}: ${role} pool must be non-empty`);
    policies[role] = pool.map((candidate) => {
      assert.ok(ID_PATTERNS[role].test(candidate.id), `${record.record_id}: ${candidate.id} is not a valid ${role} task alias`);
      assert.equal(candidate.source_pool, role, `${record.record_id}: ${candidate.id} source_pool does not match ${role}`);
      assert.ok(!roleById.has(candidate.id), `${record.record_id}: duplicate candidate id ${candidate.id}`);
      roleById.set(candidate.id, role);
      return { id: candidate.id, text: candidate.text };
    });
  }
  return { policies, roleById };
}

function flattenPolicies(policies) {
  return SOURCE_ROLES.flatMap((role) => policies[role].map((candidate) => ({ ...candidate, role })));
}

function pairProjection(flat) {
  const pairs = [];
  for (let i = 0; i < flat.length; i += 1) {
    for (let j = i + 1; j < flat.length; j += 1) {
      if (flat[i].role === flat[j].role) continue;
      pairs.push({
        aId: flat[i].id,
        bId: flat[j].id,
        key: canonicalPairKey(flat[i].id, flat[j].id),
      });
    }
  }
  return pairs;
}

function aggregationProjection(flat) {
  const partnerCounts = Object.fromEntries(flat.map((candidate) => [
    candidate.id,
    flat.filter((other) => other.id !== candidate.id && other.role !== candidate.role).length,
  ]));
  const distinctPartnerCounts = [...new Set(Object.values(partnerCounts))].sort((a, b) => a - b);
  const structurallyAsymmetric = distinctPartnerCounts.length > 1;
  return {
    partnerCounts,
    distinctPartnerCounts,
    structurallyAsymmetric,
    requiredAggregation: structurallyAsymmetric ? 'mean' : null,
  };
}

function resolvedManifestAggregation(manifestEntry) {
  return manifestEntry?.required_aggregation ?? null;
}

export function projectBenchRecordToSacreQccsV1(record, { profile, manifestEntry } = {}) {
  assert.ok(record && typeof record === 'object', 'record is required');
  assert.ok(profile, `${record.record_id}: benchmark profile is required`);
  assert.ok(manifestEntry, `${record.record_id}: release manifest entry is required`);
  assert.equal(manifestEntry.record_id, record.record_id, `${record.record_id}: manifest record id mismatch`);
  assert.equal(manifestEntry.version, record.version, `${record.record_id}: manifest version mismatch`);
  assert.equal(manifestEntry.content_hash, record.content_hash, `${record.record_id}: manifest content hash mismatch`);
  assert.equal(manifestEntry.benchmark_profile, record.benchmark_profile, `${record.record_id}: manifest profile mismatch`);
  assert.equal(manifestEntry.representation, record.representation?.form, `${record.record_id}: manifest representation mismatch`);

  const { policies, roleById } = candidateRoleMap(record);
  const flat = flattenPolicies(policies);
  const pairs = pairProjection(flat);
  const aggregation = aggregationProjection(flat);
  const geometry = SOURCE_ROLES.map((role) => policies[role].length);

  for (const role of SOURCE_ROLES) {
    const expectedIds = profile.pools?.[role];
    assert.ok(Array.isArray(expectedIds), `${record.record_id}: profile ${record.benchmark_profile} lacks ${role} pool definition`);
    assert.deepEqual(
      policies[role].map((candidate) => candidate.id),
      expectedIds,
      `${record.record_id}: ${role} aliases differ from profile ${record.benchmark_profile}`,
    );
  }

  assert.ok(
    Array.isArray(profile.representations) && profile.representations.includes(record.representation?.form),
    `${record.record_id}: representation ${record.representation?.form} is not allowed by ${record.benchmark_profile}`,
  );
  assert.equal(
    pairs.length,
    profile.cross_source_pairs,
    `${record.record_id}: derived ${pairs.length} cross-source pairs but profile declares ${profile.cross_source_pairs}`,
  );

  const declaredAggregation = record.required_aggregation ?? profile.required_aggregation ?? null;
  const manifestAggregation = resolvedManifestAggregation(manifestEntry);
  assert.equal(
    manifestAggregation,
    declaredAggregation,
    `${record.record_id}: manifest aggregation does not match record/profile resolution`,
  );
  assert.equal(
    aggregation.requiredAggregation,
    manifestAggregation,
    `${record.record_id}: structural aggregation requirement disagrees with release declaration`,
  );

  return {
    taskProtocolId: SACRE_QCCS_V1_TASK_PROTOCOL_ID,
    taskContractVersion: SACRE_QCCS_V1_CONTRACT_VERSION,
    qccsProtocolId: QCCS_PROTOCOL_ID,
    qccsProtocolVersion: QCCS_PROTOCOL_VERSION,
    scoringMode: QCCS_OPERATIONALIZATION,
    resource: {
      caseId: record.case_id,
      recordId: record.record_id,
      frameId: record.frame_id ?? null,
      frameVersion: record.frame_version ?? null,
      version: record.version,
      contentHash: record.content_hash,
      representation: record.representation.form,
      benchmarkProfile: record.benchmark_profile,
      decisionQuestion: record.decision_question,
      scenario: record.scenario,
      stipulations: record.stipulations || [],
    },
    policies,
    roleByCandidateId: Object.fromEntries(roleById),
    geometry,
    expectedPairs: pairs,
    expectedPairCount: pairs.length,
    partnerCounts: aggregation.partnerCounts,
    distinctPartnerCounts: aggregation.distinctPartnerCounts,
    structurallyAsymmetric: aggregation.structurallyAsymmetric,
    requiredAggregation: aggregation.requiredAggregation,
  };
}

export function buildSacreQccsV1Projection({ records, manifest, profiles }) {
  assert.ok(Array.isArray(records) && records.length > 0, 'records are required');
  assert.ok(manifest && Array.isArray(manifest.records), 'release manifest is required');
  assert.ok(profiles && typeof profiles === 'object', 'benchmark profiles are required');
  assert.equal(manifest.records.length, records.length, 'manifest and record counts differ');

  const manifestById = new Map(manifest.records.map((entry) => [entry.record_id, entry]));
  const seen = new Set();
  const projectedRecords = records.map((record) => {
    assert.ok(!seen.has(record.record_id), `duplicate record id ${record.record_id}`);
    seen.add(record.record_id);
    const profile = requireProfile(record, profiles);
    const manifestEntry = manifestById.get(record.record_id);
    assert.ok(manifestEntry, `${record.record_id}: absent from release manifest`);
    return projectBenchRecordToSacreQccsV1(record, { profile, manifestEntry });
  });
  for (const entry of manifest.records) {
    assert.ok(seen.has(entry.record_id), `${entry.record_id}: manifest entry has no canonical record`);
  }
  return projectedRecords;
}

export function buildLegacySacreFullCorpusPayload({ records, manifest, profiles }) {
  const projectedRecords = buildSacreQccsV1Projection({ records, manifest, profiles });
  const recordsById = new Map(records.map((record) => [record.record_id, record]));
  const familiesById = new Map();

  for (const projection of projectedRecords) {
    const record = recordsById.get(projection.resource.recordId);
    const caseId = projection.resource.caseId;
    const existing = familiesById.get(caseId);
    const family = existing || {
      caseId,
      title: record.title,
      shortDescription: record.short_description,
      decisionQuestion: record.decision_question,
      domains: record.domains,
      tags: record.tags,
      stipulations: record.stipulations || [],
      rightsNotes: record.rights.notes,
      benchmarkProfile: record.benchmark_profile,
      requiredAggregation: projection.requiredAggregation,
      representations: {},
    };

    if (existing) {
      assert.equal(family.title, record.title, `${caseId}: companions disagree about title`);
      assert.equal(family.shortDescription, record.short_description, `${caseId}: companions disagree about short description`);
      assert.equal(family.decisionQuestion, record.decision_question, `${caseId}: companions disagree about decision question`);
      assert.ok(jsonEqual(family.domains, record.domains), `${caseId}: companions disagree about domains`);
      assert.ok(jsonEqual(family.tags, record.tags), `${caseId}: companions disagree about tags`);
      assert.ok(jsonEqual(family.stipulations, record.stipulations || []), `${caseId}: companions disagree about stipulations`);
      assert.equal(family.rightsNotes, record.rights.notes, `${caseId}: companions disagree about rights notes`);
      assert.equal(family.benchmarkProfile, record.benchmark_profile, `${caseId}: companions disagree about benchmark profile`);
      assert.equal(family.requiredAggregation, projection.requiredAggregation, `${caseId}: companions disagree about required aggregation`);
    }

    const form = projection.resource.representation;
    assert.ok(!family.representations[form], `${caseId}: duplicate ${form} representation`);
    family.representations[form] = {
      recordId: record.record_id,
      version: record.version,
      contentHash: record.content_hash,
      status: record.status,
      benchmarkProfile: record.benchmark_profile,
      jurisdictionContext: record.jurisdiction_context ?? null,
      companionRecordIds: record.representation.companion_record_ids || [],
      scenario: record.scenario,
      policies: projection.policies,
    };
    familiesById.set(caseId, family);
  }

  const families = [...familiesById.values()];
  for (const family of families) {
    const concise = family.representations.concise;
    const detailed = family.representations.detailed;
    assert.ok(concise && detailed, `${family.caseId}: expected concise and detailed companions`);
    assert.deepEqual(concise.policies, detailed.policies, `${family.caseId}: companion candidate pools differ`);

    const conciseProjection = projectedRecords.find((projection) => projection.resource.recordId === concise.recordId);
    const detailedProjection = projectedRecords.find((projection) => projection.resource.recordId === detailed.recordId);
    assert.deepEqual(conciseProjection.geometry, detailedProjection.geometry, `${family.caseId}: companion geometry differs`);
    assert.deepEqual(conciseProjection.expectedPairs, detailedProjection.expectedPairs, `${family.caseId}: companion pair set differs`);
    assert.deepEqual(conciseProjection.partnerCounts, detailedProjection.partnerCounts, `${family.caseId}: companion partner counts differ`);

    family.geometry = conciseProjection.geometry;
    family.crossSourcePairs = conciseProjection.expectedPairCount;
    family.partnerCounts = conciseProjection.partnerCounts;
    family.structurallyAsymmetric = conciseProjection.structurallyAsymmetric;
  }

  const licenses = [...new Set(records.map((record) => record.rights.license))];
  const holders = [...new Set(records.map((record) => record.rights.holder))];
  assert.equal(licenses.length, 1, `current SACRE projection expects one content license; found ${licenses.length}`);
  assert.equal(holders.length, 1, `current SACRE projection expects one rights holder; found ${holders.length}`);
  const statuses = [...new Set(records.map((record) => record.status))];

  return {
    _comment: LEGACY_COMMENT,
    sourceRelease: manifest.release_id,
    releaseStatus: manifest.release_status,
    recordStatuses: statuses,
    rights: { license: records[0].rights.license, holder: records[0].rights.holder },
    familyCount: families.length,
    recordCount: records.length,
    families,
  };
}
