#!/usr/bin/env node
// Derive the neutral Full-200 case-family candidate universe from the reviewed
// audit-v2 files. This is deliberately upstream of SACRE role assignment:
// provenance/source marks belong to candidates; Public/Expert/Framework roles
// belong to a separately declared projection manifest.
//
// The audit was written in three editorial formats as the review matured:
//   1. Markdown candidate tables (early batches),
//   2. numbered candidate lists (middle batches), and
//   3. compact semicolon-delimited Universe lines (later batches).
// This builder accepts all three without rewriting the scholarly audit merely
// to satisfy code. It also uses each batch disposition table as a metadata/count
// cross-check and fallback when a prose field is deliberately abbreviated.
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
// Neutral case-family resources are not represented executable case records.
// Keep them outside data/, whose generic validator is intentionally scoped to
// executable/result/release objects.
const outDir = join(root, 'resources', 'case-families');
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

function stripOuterMarkdown(value) {
  let out = value.trim();
  out = out.replace(/^[-*]\s+/, '').trim();
  if (out.startsWith('**') && out.endsWith('**') && out.length > 4) out = out.slice(2, -2).trim();
  return out;
}

const FIELD_LABELS = [
  'Source-grounded canonical three-source SACRE',
  'Source-grounded projection',
  'Source-grounded',
  'Expanded methodological projection',
  'Expanded projection',
  'Expanded',
  'Demonstration richness',
  'Demo',
  'Action',
  'Scenario',
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractLabel(body, label) {
  const escaped = escapeRegex(label);
  const labels = FIELD_LABELS.map(escapeRegex).join('|');
  const re = new RegExp(`\\*\\*${escaped}:\\*\\*\\s*([\\s\\S]*?)(?=\\s+\\*\\*(?:${labels}):\\*\\*|\\n|$)`);
  const match = body.match(re);
  return match?.[1] ? stripOuterMarkdown(match[1]).trim() : null;
}

function subsection(body, heading) {
  const escaped = escapeRegex(heading);
  const match = body.match(new RegExp(`^###\\s+${escaped}\\s*$`, 'mi'));
  if (!match) return null;
  const rest = body.slice(match.index + match[0].length);
  const next = rest.search(/^###\s+|^##\s+/m);
  return (next < 0 ? rest : rest.slice(0, next)).trim();
}

function firstParagraph(text) {
  if (!text) return null;
  const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const block = blocks.find((item) => !item.startsWith('|') && !item.startsWith('#'));
  if (!block) return null;
  return stripOuterMarkdown(block.replace(/\s{2}\n/g, ' ').replace(/\n/g, ' '));
}

function batchDisposition(section) {
  const re = new RegExp(`^\\|\\s*${section.inventoryId}\\s*\\|\\s*(\\d+)\\s*\\|\\s*([^|]+?)\\s*\\|\\s*([^|]+?)\\s*\\|\\s*([^|]+?)\\s*\\|\\s*([^|]+?)\\s*\\|\\s*$`, 'm');
  const row = section.fullMarkdown.match(re);
  if (!row) return null;
  return {
    count: Number(row[1]),
    sourceGrounded: row[2].trim(),
    expanded: row[3].trim(),
    demo: row[4].trim(),
    action: row[5].trim(),
  };
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

function candidateFromParts(text, label, index, inventoryId) {
  const cleanText = stripOuterMarkdown(text).replace(/[.;]\s*$/, '').trim();
  const cleanLabel = stripOuterMarkdown(label).replace(/[.;]\s*$/, '').trim();
  if (!cleanText || !cleanLabel) throw new Error(`${inventoryId}: candidate ${index + 1} has empty text/provenance`);
  const sourceMark = cleanLabel.includes('✓');
  return {
    candidate_id: `c${String(index + 1).padStart(2, '0')}`,
    text: cleanText,
    audit_source_mark: sourceMark,
    audit_provenance_label: cleanLabel,
    provenance_class: provenanceClass(cleanLabel, sourceMark),
  };
}

function parseTerminalCandidate(chunk, index, inventoryId) {
  const normalized = chunk.trim().replace(/[.;]\s*$/, '').trim();
  const boundary = normalized.lastIndexOf(' (');
  if (boundary < 0 || !normalized.endsWith(')')) {
    throw new Error(`${inventoryId}: candidate ${index + 1} has no terminal provenance annotation: ${chunk}`);
  }
  return candidateFromParts(
    normalized.slice(0, boundary),
    normalized.slice(boundary + 2, -1),
    index,
    inventoryId,
  );
}

function splitCompactCandidates(text) {
  return text
    .trim()
    .split(/\)\s*;\s*/)
    .map((part, index, all) => (index < all.length - 1 ? `${part.trim()})` : part.trim()))
    .filter(Boolean);
}

function parseTableCandidates(section) {
  const rows = [...section.body.matchAll(/^\|\s*M\d{3}-C(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/gm)];
  if (!rows.length) return null;
  return rows.map((row, index) => candidateFromParts(row[2], row[3], index, section.inventoryId));
}

function candidateArea(body) {
  const headings = [
    /^###\s+(?:Rich )?candidate universe\s*$/mi,
    /^\*\*(?:Candidate universe|Universe)(?:\s*\(\d+\))?:\*\*/mi,
  ];
  for (const re of headings) {
    const match = body.match(re);
    if (!match) continue;
    const rest = body.slice(match.index + match[0].length);
    const next = rest.search(/^###\s+|^##\s+|^\*\*(?:Source-grounded|Expanded|Demo|Demonstration richness|Action):\*\*/m);
    return (next < 0 ? rest : rest.slice(0, next)).trim();
  }
  return null;
}

function splitNumberedCandidate(line, inventoryId, index) {
  const cleaned = line.replace(/^\d+\.\s+/, '').trim().replace(/[.;]\s*$/, '').trim();
  const boundary = cleaned.lastIndexOf(' — ');
  if (boundary < 0) throw new Error(`${inventoryId}: numbered candidate ${index + 1} has no provenance separator: ${line}`);
  return candidateFromParts(cleaned.slice(0, boundary), cleaned.slice(boundary + 3), index, inventoryId);
}

function parseNumberedCandidates(section) {
  const area = candidateArea(section.body);
  if (!area) return null;
  const lines = area.split('\n').map((line) => line.trim()).filter((line) => /^\d+\.\s+/.test(line));
  if (!lines.length) return null;
  return lines.map((line, index) => splitNumberedCandidate(line, section.inventoryId, index));
}

function compactUniverse(section) {
  const match = section.body.match(/^\*\*(?:Candidate universe|Universe)(?:\s*\((\d+)\))?:\*\*\s*(.+)$/m);
  if (!match || !match[2]?.trim()) return null;
  if (!match[2].includes(' (') && !match[2].includes('(✓') && !match[2].includes('(constructed')) return null;
  return { declaredCount: match[1] ? Number(match[1]) : null, text: match[2].trim() };
}

const candidateOverrides = {
  M101: [
    ['limited younger tie-break', '✓ F10 established provenance'],
    ['no independent age weight', '✓ F10 established provenance'],
    ['prognosis-only use of age-related information', '✓ F10 established provenance'],
    ['neutral lottery when candidates are otherwise equivalent', '✓ F10 established provenance'],
    ['fair-innings priority', '✓ F10 established framework provenance'],
    ['equal-status reasoning rejecting age as independent moral worth', '✓ F10 established framework provenance'],
  ].map(([text, label], index) => candidateFromParts(text, label, index, 'M101')),
};

function parseProjectionStatus(section) {
  const body = section.body;
  const batch = batchDisposition(section);
  const sourceGrounded = extractLabel(body, 'Source-grounded canonical three-source SACRE')
    ?? extractLabel(body, 'Source-grounded projection')
    ?? extractLabel(body, 'Source-grounded')
    ?? batch?.sourceGrounded
    ?? null;
  const expanded = extractLabel(body, 'Expanded methodological projection')
    ?? extractLabel(body, 'Expanded projection')
    ?? extractLabel(body, 'Expanded')
    ?? batch?.expanded
    ?? null;
  const demo = extractLabel(body, 'Demonstration richness')
    ?? extractLabel(body, 'Demo')
    ?? batch?.demo
    ?? null;
  const action = extractLabel(body, 'Action')
    ?? batch?.action
    ?? null;
  if (![sourceGrounded, expanded, demo, action].every(Boolean)) return null;
  return {
    sourceGrounded: sourceGrounded.replace(/\.$/, '').trim(),
    expanded: expanded.replace(/\.$/, '').trim(),
    demo: demo.replace(/\.$/, '').trim(),
    action: action.replace(/\.$/, '').trim(),
  };
}

function parseScenario(section) {
  return extractLabel(section.body, 'Scenario')
    ?? firstParagraph(subsection(section.body, 'Scenario audit'));
}

function parseCandidates(section, problems) {
  if (candidateOverrides[section.inventoryId]) return { candidates: candidateOverrides[section.inventoryId], declaredCount: null };

  try {
    const table = parseTableCandidates(section);
    if (table) return { candidates: table, declaredCount: null };

    const numbered = parseNumberedCandidates(section);
    if (numbered) {
      const heading = section.body.match(/^\*\*(?:Candidate universe|Universe)\s*\((\d+)\):\*\*/m);
      return { candidates: numbered, declaredCount: heading ? Number(heading[1]) : null };
    }

    const compact = compactUniverse(section);
    if (compact) {
      const candidates = splitCompactCandidates(compact.text)
        .map((chunk, index) => parseTerminalCandidate(chunk, index, section.inventoryId));
      return { candidates, declaredCount: compact.declaredCount };
    }
  } catch (error) {
    problems.push(error.message);
    return { candidates: [], declaredCount: null };
  }

  problems.push(`${section.inventoryId}: no recognized candidate-universe representation`);
  return { candidates: [], declaredCount: null };
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
  const scenario = parseScenario(section);
  const projection = parseProjectionStatus(section);
  const parsed = parseCandidates(section, problems);
  const batch = batchDisposition(section);
  const count = parsed.declaredCount ?? batch?.count ?? parsed.candidates.length;

  if (!scenario) problems.push(`${inventoryId}: missing Scenario audit`);
  if (!projection) problems.push(`${inventoryId}: missing source-grounded/expanded/demo/action audit fields`);
  if (!parsed.candidates.length) problems.push(`${inventoryId}: candidate universe is empty`);
  if (parsed.candidates.length && count !== parsed.candidates.length) {
    problems.push(`${inventoryId}: reviewed candidate count is ${count}, parser found ${parsed.candidates.length}`);
  }
  if (!scenario || !projection || !parsed.candidates.length) continue;

  const number = Number(inventoryId.slice(1));
  cases.push({
    inventory_id: inventoryId,
    case_family_id: inventoryId.toLowerCase(),
    title: section.title,
    scenario_audit: scenario,
    candidate_count: count,
    candidate_universe: parsed.candidates,
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
