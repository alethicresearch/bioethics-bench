#!/usr/bin/env node
/**
 * Build Full-200 neutral candidate-universe resource v1.1.0.
 *
 * v1.0.0 remains immutable as the first deterministic machine transcription.
 * v1.1.0 applies the authoritative M002 QualityRights/CRPD supersession and
 * otherwise preserves v1.0.0 byte-for-semantic-byte. A substantive candidate
 * change therefore receives a new resource version rather than silently
 * rewriting the already hashed v1.0 object.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const basePath = join(root, 'resources', 'case-families', 'full-200-rich-candidate-universes.v1.json');
const supersessionRel = 'docs/full-corpus/audit-v2/M002-rich-candidate-audit-supersession.md';
const supersessionPath = join(root, supersessionRel);
const outPath = join(root, 'resources', 'case-families', 'full-200-rich-candidate-universes.v1.1.json');

function clean(value) {
  return String(value ?? '').trim().replace(/[.;]\s*$/, '').trim();
}

function provenanceClass(label, sourceMark) {
  const value = label.toLowerCase();
  const hasConstructed = value.includes('constructed');
  const hasDirect = value.includes('direct');
  const hasSourceInformed = value.includes('source-informed') || value.includes('derived') || value.includes('adapted');
  const hasFramework = value.includes('framework');
  if (hasConstructed && sourceMark) return 'mixed';
  if (hasConstructed) return 'constructed-comparator';
  if (hasDirect) return 'direct-source';
  if (hasSourceInformed) return 'source-informed';
  if (hasFramework) return 'framework-derived';
  if (sourceMark) return 'source-anchored-other';
  return 'other';
}

function parseM002(markdown) {
  const tableRows = [...markdown.matchAll(/^\|\s*M002-C(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/gm)];
  if (tableRows.length !== 7) throw new Error(`M002 supersession must contain 7 candidate rows; found ${tableRows.length}.`);
  const candidate_universe = tableRows.map((row, index) => {
    const label = clean(row[3]);
    const sourceMark = label.includes('✓');
    return {
      candidate_id: `c${String(index + 1).padStart(2, '0')}`,
      text: clean(row[2]),
      audit_source_mark: sourceMark,
      audit_provenance_label: label,
      provenance_class: provenanceClass(label, sourceMark),
    };
  });

  const scenarioMatch = markdown.match(/### Scenario audit\s+\n\n([\s\S]*?)(?=\n\n### )/);
  const sourceMatch = markdown.match(/- \*\*Source-grounded:\*\*\s*([^\n]+)/);
  const expandedMatch = markdown.match(/- \*\*Expanded:\*\*\s*([^\n]+)/);
  const demoMatch = markdown.match(/\*\*Demonstration richness:\*\*\s*([^\n]+)/);
  const actionMatch = markdown.match(/\*\*Action:\*\*\s*([^\n]+)/);
  if (!scenarioMatch || !sourceMatch || !expandedMatch || !demoMatch || !actionMatch) {
    throw new Error('M002 supersession is missing one or more required audit fields.');
  }

  const scenario = clean(scenarioMatch[1].replace(/^\*\*PASS\.\*\*\s*/, '').replace(/\s+/g, ' '));
  return {
    scenario_audit: scenario,
    candidate_count: candidate_universe.length,
    candidate_universe,
    source_grounded_status: clean(sourceMatch[1]),
    expanded_projection_status: clean(expandedMatch[1]),
    demonstration_richness: clean(demoMatch[1]),
    action: clean(actionMatch[1]),
    audit_source_path: supersessionRel,
  };
}

const base = JSON.parse(readFileSync(basePath, 'utf8'));
if (base.resource_version !== '1.0.0' || base.case_count !== 200) {
  throw new Error(`Expected immutable base resource v1.0.0 / 200 cases; found ${base.resource_version} / ${base.case_count}.`);
}
const supersession = readFileSync(supersessionPath, 'utf8');
const m002Patch = parseM002(supersession);
const resource = structuredClone(base);
resource.resource_version = '1.1.0';
const index = resource.cases.findIndex((family) => family.inventory_id === 'M002');
if (index < 0) throw new Error('Base resource contains no M002 family.');
resource.cases[index] = { ...resource.cases[index], ...m002Patch };

const totalCandidates = resource.cases.reduce((sum, family) => sum + family.candidate_count, 0);
if (resource.case_count !== 200 || totalCandidates !== 1298) {
  throw new Error(`v1.1 invariants changed unexpectedly: cases=${resource.case_count}, candidates=${totalCandidates}.`);
}
const serialized = `${JSON.stringify(resource, null, 2)}\n`;

if (process.argv.includes('--write')) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, serialized);
  console.log(`✓ wrote Full-200 neutral resource v1.1.0: ${resource.case_count} cases / ${totalCandidates} candidates.`);
} else if (process.argv.includes('--check')) {
  let committed = null;
  try { committed = readFileSync(outPath, 'utf8'); } catch {}
  if (committed !== serialized) {
    console.error('✗ Full-200 neutral resource v1.1 is stale or absent. Run: node scripts/build-rich-candidate-universes-v1-1.mjs --write');
    process.exit(1);
  }
  console.log(`✓ Full-200 neutral resource v1.1.0 matches v1.0 + authoritative M002 supersession: ${resource.case_count} cases / ${totalCandidates} candidates.`);
} else {
  console.log(`✓ v1.1 derivation valid: ${resource.case_count} cases / ${totalCandidates} candidates.`);
}
