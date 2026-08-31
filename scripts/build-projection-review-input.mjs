#!/usr/bin/env node
/**
 * Build a compact, deterministic editorial-review bundle for the 34 existing
 * Full Corpus executable families against neutral resource v1.1.0.
 *
 * This object deliberately contains no suggested mappings. It is a review
 * surface only: existing source-role candidates and neutral Policy candidates
 * are placed together so an editor can decide whether a historical one-to-one
 * crosswalk is defensible or whether the family must be held for a successor
 * projection/record.
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const universeRel = 'resources/case-families/full-200-rich-candidate-universes.v1.1.json';
const universe = JSON.parse(readFileSync(join(root, universeRel), 'utf8'));
const byInventory = new Map(universe.cases.map((family) => [family.inventory_id, family]));
const benchmarkDir = join(root, 'data', 'benchmark');
const profileRegistry = JSON.parse(readFileSync(join(root, 'schemas', 'benchmark-profiles.json'), 'utf8')).profiles ?? {};
const outRel = 'docs/full-corpus/projections/SOURCE_GROUNDED_REVIEW_INPUT.v1.1.json';
const outPath = join(root, outRel);

function inventoryFromCaseId(caseId) {
  const match = String(caseId ?? '').match(/^(m\d{3})(?:-|$)/i);
  return match ? match[1].toUpperCase() : null;
}

function sourceCandidate(candidate, role) {
  return {
    source_role: role,
    source_candidate_id: candidate.id,
    text: candidate.text,
    policy_basis: candidate.policy_basis ?? null,
    provenance_summary: candidate.provenance?.summary ?? null,
  };
}

const conciseFiles = readdirSync(benchmarkDir)
  .filter((file) => /^m\d{3}-.*-concise-v1\.json$/.test(file))
  .sort();
const cases = [];
const problems = [];

for (const conciseFile of conciseFiles) {
  const concise = JSON.parse(readFileSync(join(benchmarkDir, conciseFile), 'utf8'));
  const inventoryId = inventoryFromCaseId(concise.case_id);
  const neutral = byInventory.get(inventoryId);
  if (!neutral) {
    problems.push(`${concise.case_id}: no neutral family for ${inventoryId}`);
    continue;
  }
  const detailedFile = conciseFile.replace('-concise-v1.json', '-detailed-v1.json');
  let detailed;
  try {
    detailed = JSON.parse(readFileSync(join(benchmarkDir, detailedFile), 'utf8'));
  } catch {
    problems.push(`${concise.case_id}: missing detailed companion`);
    continue;
  }
  if (JSON.stringify(concise.candidate_pools) !== JSON.stringify(detailed.candidate_pools)) {
    problems.push(`${concise.case_id}: concise/detailed candidate pools differ`);
    continue;
  }
  const profile = profileRegistry[concise.benchmark_profile] ?? {};
  const aggregation = concise.required_aggregation ?? profile.required_aggregation ?? null;
  cases.push({
    inventory_id: inventoryId,
    neutral_case_family_id: neutral.case_family_id,
    executable_case_id: concise.case_id,
    title: neutral.title,
    source_record_ids: [concise.record_id, detailed.record_id],
    benchmark_profile: concise.benchmark_profile ?? null,
    aggregation,
    source_grounded_audit: neutral.source_grounded_status,
    source_candidates: ['public', 'expert', 'framework'].flatMap((role) =>
      (concise.candidate_pools?.[role] ?? []).map((candidate) => sourceCandidate(candidate, role))),
    neutral_candidates: neutral.candidate_universe.map((candidate) => ({
      neutral_candidate_id: candidate.candidate_id,
      text: candidate.text,
      audit_source_mark: candidate.audit_source_mark,
      provenance_class: candidate.provenance_class,
      audit_provenance_label: candidate.audit_provenance_label,
    })),
  });
}

if (problems.length) {
  for (const problem of problems) console.error(`✗ ${problem}`);
  process.exit(1);
}
if (cases.length !== 34) {
  console.error(`✗ expected 34 executable calibration families; found ${cases.length}`);
  process.exit(1);
}

const review = {
  review_input_id: 'full-corpus-source-grounded-crosswalk-review',
  review_input_version: '1.1.0',
  candidate_universe_resource: universeRel,
  candidate_universe_version: universe.resource_version,
  executable_family_count: cases.length,
  mapping_policy: 'no-automatic-matching',
  cases,
};
const serialized = `${JSON.stringify(review, null, 2)}\n`;

if (process.argv.includes('--write')) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, serialized);
  console.log(`✓ wrote compact source-grounded review input for ${cases.length} executable families.`);
} else if (process.argv.includes('--check')) {
  let committed = null;
  try { committed = readFileSync(outPath, 'utf8'); } catch {}
  if (committed !== serialized) {
    console.error('✗ source-grounded review input is stale. Run: node scripts/build-projection-review-input.mjs --write');
    process.exit(1);
  }
  console.log(`✓ source-grounded review input matches ${cases.length} executable families.`);
} else {
  console.log(`✓ source-grounded review inputs valid for ${cases.length} executable families.`);
}
