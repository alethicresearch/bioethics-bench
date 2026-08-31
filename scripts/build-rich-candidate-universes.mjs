#!/usr/bin/env node
// Derive the neutral Full-200 case-family candidate universe from the reviewed
// audit-v2 files. This is deliberately upstream of SACRE role assignment:
// provenance/source marks belong to candidates; Public/Expert/Framework roles
// belong to a separately declared projection manifest.
//
// Default mode validates that all 200 audit sections parse and that the number
// of structured candidates agrees with the reviewed count. --write emits the
// deterministic machine-readable resource. --check additionally requires the
// committed resource to equal the derived output.

import {
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const auditDir = join(root, 'docs', 'full-corpus', 'audit-v2');
const outDir = join(root, 'data', 'case-families');
const outPath = join(outDir, 'full-200-rich-candidate-universes.v1.json');

const AUDIT_DATE = '2026-08-30';
const RESOURCE_ID = 'full-200-rich-candidate-universes';
const RESOURCE_VERSION = '1.0.0';
const STANDARD = 'scenario-candidate-universe-projection-v1';

const batchLetter = (number) => String.fromCharCode('a'.charCodeAt(0) + Math.floor((number - 1) / 10));

function extractSections(markdown, sourcePath) {
  const heading = /^## (M\d{3}) — (.+)$/gm;
  const matches = [...markdown.matchAll(heading)];
  const out = [];
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : markdown.length;
    out.push({
      inventoryId: matches[i][1],
      title: matches[i][2].trim(),
      body: markdown.slice(start, end),
      sourcePath,
      fullMarkdown: markdown,
    });
  }
  return out;
}

function oneLine(body, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = body.match(new RegExp(`^\\*\\*${escaped}:\\*\\*\\s*(.+?)(?:\\s{2})?$`, 'm'));
  return match?.[1]?.trim() ?? null;
}

function reviewedCount(section, universeLabelCount) {
  if (universeLabelCount) return Number(universeLabelCount);
  const row = section.fullMarkdown.match(new RegExp(`^\\|\\s*${section.inventoryId}\\s*\\|\\s*(\\d+)\\s*\\|`, 'm'));
  return row ? Number(row[1]) : null;
}

function splitCandidateChunks(text) {
  // Audit candidates are written as semicolon-delimited propositions whose
  // terminal parenthesis is the provenance annotation. Splitting only after a
  // closing parenthesis deliberately leaves semicolons inside policy prose intact.
  const parts = text.split(/\)\s*;\s*/);
  return parts.map((part, index) => {
    if (index < parts.length - 1) return `${part.trim()})`;
    return part.trim();
  }).filter(Boolean);
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

function parseCandidate(chunk, index, inventoryId) {
  const boundary = chunk.lastIndexOf(' (');
  if (boundary < 0 || !chunk.endsWith(')')) {
    throw new Error(`${inventoryId}: candidate ${index + 1} has no terminal provenance annotation: ${chunk}`);
  }
  const text = chunk.slice(0, boundary).trim();
  const label = chunk.slice(boundary + 2, -1).trim();
  if (!text || !label) throw new Error(`${inventoryId}: empty candidate text/provenance annotation`);
  const sourceMark = label.includes('✓');
  return {
    candidate_id: `c${String(index + 1).padStart(2, '0')}`,
    text,
    audit_source_mark: sourceMark,
    audit_provenance_label: label,
    provenance_class: provenanceClass(label, sourceMark),
  };
}

const candidateOverrides = {
  // M101 is a crosswalk note rather than a freshly enumerated audit line. These
  // six families are copied from the reviewed F10 crosswalk sentence rather than
  // guessed from punctuation.
  M101: [
    ['limited younger tie-break', '✓ F10 established provenance'],
    ['no independent age weight', '✓ F10 established provenance'],
    ['prognosis-only use of age-related information', '✓ F10 established provenance'],
    ['neutral lottery when candidates are otherwise equivalent', '✓ F10 established provenance'],
    ['fair-innings priority', '✓ F10 established framework provenance'],
    ['equal-status reasoning rejecting age as independent moral worth', '✓ F10 established framework provenance'],
  ].map(([text, label], index) => ({
    candidate_id: `c${String(index + 1).padStart(2, '0')}`,
    text,
    audit_source_mark: true,
    audit_provenance_label: label,
    provenance_class: label.includes('framework') ? 'framework-derived' : 'source-anchored-other',
  })),
};

function parseProjectionStatus(body) {
  const regular = body.match(/^\*\*Source-grounded:\*\*\s*(.*?)\s+\*\*Expanded:\*\*\s*(.*?)\s+\*\*Demo:\*\*\s*(.*?)\s+\*\*Action:\*\*\s*(.*?)(?:\s{2})?$/m);
  if (regular) {
    return {
      sourceGrounded: regular[1].trim(),
      expanded: regular[2].trim(),
      demo: regular[3].trim().replace(/\.$/, ''),
      action: regular[4].trim().replace(/\.$/, ''),
    };
  }

  // M047's supersession intentionally uses more explicit field labels.
  const sourceGrounded = oneLine(body, 'Source-grounded projection');
  const expanded = oneLine(body, 'Expanded projection');
  const demo = oneLine(body, 'Demonstration richness');
  const action = oneLine(body, 'Action');
  if (sourceGrounded && expanded && demo && action) {
    return {
      sourceGrounded: sourceGrounded.replace(/\.$/, ''),
      expanded: expanded.replace(/\.$/, ''),
      demo: demo.replace(/\.$/, ''),
      action: action.replace(/\.$/, ''),
    };
  }
  return null;
}

const auditFiles = readdirSync(auditDir)
  .filter((file) => /^M\d{3}-M\d{3}-rich-candidate-audit\.md$/.test(file))
  .sort();

if (auditFiles.length !== 20) {
  throw new Error(`Expected 20 ten-case rich-candidate audit files; found ${auditFiles.length}.`);
}

const sections = new Map();
for (const file of auditFiles) {
  const sourcePath = `docs/full-corpus/audit-v2/${file}`;
  const markdown = readFileSync(join(auditDir, file), 'utf8');
  for (const section of extractSections(markdown, sourcePath)) {
    if (sections.has(section.inventoryId)) throw new Error(`Duplicate audit section ${section.inventoryId}`);
    sections.set(section.inventoryId, section);
  }
}

// The first M041–M050 audit correctly identified the old M047 as a duplicate.
// M047 was then replaced with a distinct permanent-contraception family; the
// supersession file is therefore the authoritative M047 candidate audit.
const m047Path = 'docs/full-corpus/audit-v2/M047-rich-candidate-audit-supersession.md';
const m047Markdown = readFileSync(join(root, m047Path), 'utf8');
const m047Section = extractSections(m047Markdown, m047Path).find((section) => section.inventoryId === 'M047');
if (!m047Section) throw new Error('M047 supersession audit has no M047 section.');
sections.set('M047', m047Section);

const expectedIds = Array.from({ length: 200 }, (_, i) => `M${String(i + 1).padStart(3, '0')}`);
const actualIds = [...sections.keys()].sort();
if (actualIds.length !== 200 || expectedIds.some((id, index) => id !== actualIds[index])) {
  const missing = expectedIds.filter((id) => !sections.has(id));
  const extras = actualIds.filter((id) => !expectedIds.includes(id));
  throw new Error(`Audit coverage is not exactly M001–M200. missing=[${missing}] extras=[${extras}] count=${actualIds.length}`);
}

const cases = [];
const problems = [];
for (const inventoryId of expectedIds) {
  const section = sections.get(inventoryId);
  const scenario = oneLine(section.body, 'Scenario');
  const universe = section.body.match(/^\*\*Universe(?: \((\d+)\))?:\*\*\s*(.+?)(?:\s{2})?$/m);
  const projection = parseProjectionStatus(section.body);
  if (!scenario) problems.push(`${inventoryId}: missing Scenario audit line`);
  if (!universe) problems.push(`${inventoryId}: missing Universe audit line`);
  if (!projection) problems.push(`${inventoryId}: missing source-grounded/expanded/demo/action audit fields`);
  if (!scenario || !universe || !projection) continue;

  const count = reviewedCount(section, universe[1]);
  let candidates = candidateOverrides[inventoryId] ?? splitCandidateChunks(universe[2]).map((chunk, index) => {
    try {
      return parseCandidate(chunk, index, inventoryId);
    } catch (error) {
      problems.push(error.message);
      return null;
    }
  }).filter(Boolean);

  if (count === null) problems.push(`${inventoryId}: no reviewed candidate count`);
  if (count !== null && candidates.length !== count) {
    problems.push(`${inventoryId}: reviewed candidate count is ${count}, parser found ${candidates.length}`);
  }

  const number = Number(inventoryId.slice(1));
  cases.push({
    inventory_id: inventoryId,
    case_family_id: inventoryId.toLowerCase(),
    title: section.title,
    scenario_audit: scenario,
    candidate_count: count ?? candidates.length,
    candidate_universe: candidates,
    source_grounded_status: projection.sourceGrounded,
    expanded_projection_status: projection.expanded,
    demonstration_richness: projection.demo,
    action: projection.action,
    audit_source_path: section.sourcePath,
    deep_case_path: `docs/full-corpus/batch-${batchLetter(number)}/${inventoryId}-deep-case.md`,
  });
}

if (problems.length) {
  for (const problem of problems) console.error(`✗ ${problem}`);
  process.exit(1);
}

const resource = {
  resource_id: RESOURCE_ID,
  resource_version: RESOURCE_VERSION,
  audit_date: AUDIT_DATE,
  construction_standard: STANDARD,
  source_directory: 'docs/full-corpus/audit-v2',
  case_count: cases.length,
  cases,
};

const serialized = `${JSON.stringify(resource, null, 2)}\n`;
const counts = cases.map((item) => item.candidate_count);
const candidateTotal = counts.reduce((sum, value) => sum + value, 0);
const mean = candidateTotal / cases.length;

if (process.argv.includes('--write')) {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, serialized);
  console.log(`✓ wrote ${outPath}: ${cases.length} cases / ${candidateTotal} candidates / mean ${mean.toFixed(2)}.`);
} else if (process.argv.includes('--check')) {
  let committed = null;
  try {
    committed = readFileSync(outPath, 'utf8');
  } catch {}
  if (committed !== serialized) {
    console.error('✗ rich candidate-universe resource is stale or absent. Run: node scripts/build-rich-candidate-universes.mjs --write');
    process.exit(1);
  }
  console.log(`✓ rich candidate-universe resource matches audits: ${cases.length} cases / ${candidateTotal} candidates / mean ${mean.toFixed(2)}.`);
} else {
  console.log(`✓ parsed rich candidate audits: ${cases.length} cases / ${candidateTotal} candidates / mean ${mean.toFixed(2)}.`);
}
