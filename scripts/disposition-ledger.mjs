#!/usr/bin/env node
// Derives the Full Corpus 200-family disposition ledger from committed state.
//
// Every figure the ledger reports is read back out of the repository: the
// executable-eligibility judgment each dossier declares, and the records that
// actually exist under data/benchmark. Nothing is carried over from prose.
// This is the legacy/source-grounded executable-projection ledger; the neutral
// case-level rich candidate universe is maintained separately under
// data/case-families and docs/full-corpus/audit-v2.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dossierRoot = join(root, 'docs', 'full-corpus');
const ledgerPath = join(dossierRoot, 'FULL_CORPUS_DISPOSITION_LEDGER.md');
const recordDir = join(root, 'data', 'benchmark');

const JUDGMENTS = [
  'executable-2x2x2',
  'executable-other-profile',
  'full-corpus-2x1x2-mean-v1',
  'full-corpus-1x2x2-mean-v1',
  'needs-additional-evidence',
  'research-complete-not-executable',
  'as-duplicate',
  'candidate-audit-required',
  'audit-complete-not-executable',
];

const DISPOSITION = {
  'executable-2x2x2': 'executable-eligible',
  'executable-other-profile': 'executable-eligible',
  'full-corpus-2x1x2-mean-v1': 'executable-eligible',
  'full-corpus-1x2x2-mean-v1': 'executable-eligible',
  'needs-additional-evidence': 'held-needs-evidence',
  'research-complete-not-executable': 'held-not-executable',
  'as-duplicate': 'held-duplicate',
  'candidate-audit-required': 'held-candidate-audit',
  'audit-complete-not-executable': 'held-audited-not-executable',
  'declared-canonical-frame': 'executable-eligible',
  'audited-reconciled': 'executable-eligible',
};

const FEATURED_ONLY = new Set(['M001']);

const JUDGMENT_HEADING = /^## (?:\d+\.\s*)?(?:Current )?Executab\w*[- ]?\w*\s*judgment/i;
const RECONSTRUCTION_HEADING = /^## (?:\d+\.\s*)?Current reconstruction decision/i;
const RECONCILIATION_HEADING = /^## (?:\d+\.\s*)?Candidate audit reconciliation/i;
const AUDIT_RESULT_HEADING = /^## (?:\d+\.\s*)?Candidate audit result/i;
const FRAME_DECLARATION = /\*\*Canonical frame:\*\*/;
const GEOMETRY = /\*\*Geometry:\*\*\s*`([^`]+)`/;

function sectionUnder(text, heading) {
  const lines = text.split('\n');
  const start = lines.findIndex((line) => heading.test(line));
  if (start === -1) return null;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => line.startsWith('## '));
  return (end === -1 ? rest : rest.slice(0, end)).join('\n').trim();
}

function judgmentSection(text) {
  return sectionUnder(text, AUDIT_RESULT_HEADING)
    ?? sectionUnder(text, RECONCILIATION_HEADING)
    ?? sectionUnder(text, RECONSTRUCTION_HEADING)
    ?? sectionUnder(text, JUDGMENT_HEADING);
}

function isReconciliation(text) {
  return RECONCILIATION_HEADING.test(text.split('\n').find((l) => RECONCILIATION_HEADING.test(l)) ?? '');
}

function declaredJudgment(section) {
  if (!section) return null;
  if (FRAME_DECLARATION.test(section)) return 'declared-canonical-frame';
  return JUDGMENTS.find((j) => section.includes(`\`${j}\``))
    ?? JUDGMENTS.find((j) => section.includes(j))
    ?? null;
}

function readDossiers() {
  const families = [];
  for (const batch of readdirSync(dossierRoot).filter((d) => d.startsWith('batch-')).sort()) {
    for (const file of readdirSync(join(dossierRoot, batch)).filter((f) => /^M\d{3}-deep-case\.md$/.test(f)).sort()) {
      const path = join(dossierRoot, batch, file);
      const text = readFileSync(path, 'utf8');
      const section = judgmentSection(text);
      families.push({
        family: file.slice(0, 4),
        path: `docs/full-corpus/${batch}/${file}`,
        lines: text.split('\n').length,
        section,
        judgment: declaredJudgment(section)
          ?? (isReconciliation(text) ? 'audited-reconciled' : null),
        geometry: section ? (GEOMETRY.exec(section)?.[1] ?? null) : null,
      });
    }
  }
  return families;
}

function recordsByFamily() {
  const counts = new Map();
  for (const file of readdirSync(recordDir).filter((f) => f.endsWith('.json'))) {
    const match = /^m(\d{3})-/.exec(file);
    if (!match) continue;
    const family = `M${match[1]}`;
    counts.set(family, (counts.get(family) ?? 0) + 1);
  }
  return counts;
}

function disposition(entry) {
  if (FEATURED_ONLY.has(entry.family)) return 'featured-only (F01)';
  const klass = entry.judgment ? DISPOSITION[entry.judgment] : null;
  if (entry.records > 0) {
    return klass === 'executable-eligible'
      ? 'executable-v1 (record present)'
      : 'executable-v1 (record present; dossier judgment predates the audit — RECONCILE)';
  }
  if (!entry.judgment) return 'UNDECLARED — needs disposition review';
  return klass === 'executable-eligible' ? 'executable-candidate (no record yet)' : klass;
}

const recordCounts = recordsByFamily();
const families = readDossiers().map((entry) => {
  const records = recordCounts.get(entry.family) ?? 0;
  return { ...entry, records, disposition: disposition({ ...entry, records }) };
});

const tally = (pred) => families.filter(pred).length;
const counts = {
  executableWithRecord: tally((f) => f.disposition === 'executable-v1 (record present)'),
  executableCandidate: tally((f) => f.disposition === 'executable-candidate (no record yet)'),
  featuredOnly: tally((f) => f.disposition.startsWith('featured-only')),
  needsEvidence: tally((f) => f.disposition === 'held-needs-evidence'),
  notExecutable: tally((f) => f.disposition === 'held-not-executable'),
  duplicate: tally((f) => f.disposition === 'held-duplicate'),
  candidateAudit: tally((f) => f.disposition === 'held-candidate-audit'),
  auditedHeld: tally((f) => f.disposition === 'held-audited-not-executable'),
  reconcile: tally((f) => f.disposition.includes('RECONCILE')),
  undeclared: tally((f) => f.disposition.startsWith('UNDECLARED')),
};
const totalRecords = readdirSync(recordDir).filter((f) => f.endsWith('.json')).length;

const conflicts = families.filter((f) => {
  if (f.disposition.startsWith('executable-v1')) return f.records !== 2;
  return f.records !== 0;
});

const rows = families
  .map((f) => `| ${f.family} | ${f.judgment ?? '—'} | ${f.geometry ?? '—'} | ${f.lines} | ${f.records} | ${f.disposition} |`)
  .join('\n');

const ledger = `# Full Corpus v1 — 200-family disposition ledger (repository-derived)

<!-- GENERATED BY scripts/disposition-ledger.mjs — DO NOT EDIT BY HAND.
     Regenerate with: node scripts/disposition-ledger.mjs --write -->

This file records the **legacy/source-grounded executable projection lineage**:
which deep-case dossiers currently support an executable source-grounded record
and which such records exist under \`data/benchmark/\`. It is not the authority
for whether a scholarly case has a valid rich candidate universe. That neutral
case-level state is maintained by the Full-200 audit and
\`data/case-families/full-200-rich-candidate-universes.v1.json\`.

Every column below is read back out of committed repository state: the
executable-eligibility judgment declared by each dossier under
\`docs/full-corpus/batch-*/M*-deep-case.md\`, and the records that actually exist
under \`data/benchmark/\`. No count from prior chat state is used here.

## Summary

| Disposition | Families |
|---|---|
| executable-v1, record present, dossier agrees | ${counts.executableWithRecord} |
| executable-v1, record present, dossier judgment predates the audit — **reconcile** | ${counts.reconcile} |
| executable-candidate, dossier supports it but no record transcribed yet | ${counts.executableCandidate} |
| Featured-only (M001 → F01) | ${counts.featuredOnly} |
| held — needs additional evidence | ${counts.needsEvidence} |
| held — research-complete, not executable | ${counts.notExecutable} |
| held — as duplicate | ${counts.duplicate} |
| held — candidate-audit target, audit not yet performed | ${counts.candidateAudit} |
| held — candidate audit performed, not executable | ${counts.auditedHeld} |
| undeclared — dossier states no judgment | ${counts.undeclared} |
| **Total** | **${families.length}** |

Full Corpus records under \`data/benchmark/\`: **${totalRecords}** across
**${counts.executableWithRecord + counts.reconcile}** executable families, two matched records each.

${counts.reconcile === 0
  ? 'Every executable family\'s dossier states the audit result that produced its record. No family\nis executable merely because a record for it exists.'
  : `Of those, **${counts.reconcile}** carry a dossier judgment written before the candidate audit that\nproduced the record. Those records pass every machine invariant, but the dossier has not been\nformally re-judged under the four-basis rule. They are the first priority for independent review,\nand no family should be promoted on the strength of its record existing.`}

A held source-grounded projection does **not** mean the case lacks a serious
candidate universe. Promotion into this executable lineage requires an explicit,
reviewed projection manifest whose assigned roles satisfy the relevant source
claims; it must not be inferred merely from case-level candidate richness.

## Ledger

| Family | Declared judgment | Declared geometry | Dossier lines | Records | v1 disposition |
|---|---|---|---|---|---|
${rows}
`;

if (conflicts.length) {
  for (const f of conflicts) {
    console.error(`✗ ${f.family}: disposition "${f.disposition}" but ${f.records} record(s) present`);
  }
  console.error(`✗ ${conflicts.length} family/families where the ledger and the machine corpus disagree.`);
  process.exit(1);
}

if (process.argv.includes('--write')) {
  writeFileSync(ledgerPath, ledger);
  console.log(`✓ wrote ${ledgerPath}`);
} else {
  let committed = null;
  try {
    committed = readFileSync(ledgerPath, 'utf8');
  } catch {}
  if (committed !== ledger) {
    console.error('✗ FULL_CORPUS_DISPOSITION_LEDGER.md is stale. Derived-line differences:');
    const oldLines = (committed ?? '').split('\n');
    const newLines = ledger.split('\n');
    const length = Math.max(oldLines.length, newLines.length);
    for (let i = 0; i < length; i += 1) {
      if (oldLines[i] === newLines[i]) continue;
      console.error(`@@ line ${i + 1} @@`);
      if (oldLines[i] !== undefined) console.error(`- ${oldLines[i]}`);
      if (newLines[i] !== undefined) console.error(`+ ${newLines[i]}`);
    }
    console.error('Regenerate with: node scripts/disposition-ledger.mjs --write');
    process.exit(1);
  }
  console.log(`✓ disposition ledger agrees with ${families.length} dossiers and ${totalRecords} records.`);
}
