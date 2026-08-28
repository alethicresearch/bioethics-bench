#!/usr/bin/env node
// Derives the Full Corpus 200-family disposition ledger from committed state.
//
// Every figure the ledger reports is read back out of the repository: the
// executable-eligibility judgment each dossier declares, and the records that
// actually exist under data/benchmark. Nothing is carried over from prose.
// Run with --check to fail when the committed ledger has drifted.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dossierRoot = join(root, 'docs', 'full-corpus');
const ledgerPath = join(dossierRoot, 'FULL_CORPUS_DISPOSITION_LEDGER.md');
const recordDir = join(root, 'data', 'benchmark');

// A dossier's judgment section declares one of these. Order matters: the first
// token that appears in the section is the declared judgment.
const JUDGMENTS = [
  'executable-2x2x2',
  'executable-other-profile',
  'full-corpus-2x1x2-mean-v1',
  'full-corpus-1x2x2-mean-v1',
  'needs-additional-evidence',
  'research-complete-not-executable',
  'as-duplicate',
  'candidate-audit-required',
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
  'declared-canonical-frame': 'executable-eligible',
  'audited-reconciled': 'executable-eligible',
};

// M001 is released as Featured F01 and is deliberately not duplicated into the
// Full Corpus, so it never carries benchmark records however it is judged.
const FEATURED_ONLY = new Set(['M001']);

const JUDGMENT_HEADING = /^## (?:\d+\.\s*)?(?:Current )?Executab\w*[- ]?\w*\s*judgment/i;
// A later reconstruction decision supersedes the strict-era judgment above it.
const RECONSTRUCTION_HEADING = /^## (?:\d+\.\s*)?Current reconstruction decision/i;
// So does a candidate-audit reconciliation, written when a dossier's judgment
// predated the audit that produced its record.
const RECONCILIATION_HEADING = /^## (?:\d+\.\s*)?Candidate audit reconciliation/i;
// The reconstructed style declares a frame and geometry instead of a token.
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

// The authoritative section is the reconstruction decision when one exists,
// otherwise the executable-eligibility judgment.
function judgmentSection(text) {
  return sectionUnder(text, RECONCILIATION_HEADING)
    ?? sectionUnder(text, RECONSTRUCTION_HEADING)
    ?? sectionUnder(text, JUDGMENT_HEADING);
}

// A reconciliation section is itself the declaration: it states that the audit
// ran and that the committed record is its result.
function isReconciliation(text) {
  return RECONCILIATION_HEADING.test(text.split('\n').find((l) => RECONCILIATION_HEADING.test(l)) ?? '');
}

// A dossier declares executability either with a legacy token or, in the
// reconstructed style, by naming the canonical frame and geometry it executes.
function declaredJudgment(section) {
  if (!section) return null;
  const token = JUDGMENTS.find((j) => section.includes(j));
  if (token) return token;
  return FRAME_DECLARATION.test(section) ? 'declared-canonical-frame' : null;
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
        judgment: isReconciliation(text) ? 'audited-reconciled' : declaredJudgment(section),
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

  // A family carrying a matched record pair is executable in the machine corpus
  // whatever its dossier prose says. Several dossiers were written before the
  // candidate audit ran and still state the pre-audit judgment, so the two can
  // disagree without either being wrong. That is a reconciliation the corpus
  // author owes a reviewer, not a defect to be silently resolved either way:
  // the record is not withdrawn on the strength of stale prose, and the prose
  // is not treated as revised merely because a record exists.
  if (entry.records > 0) {
    return klass === 'executable-eligible'
      ? 'executable-v1 (record present)'
      : 'executable-v1 (record present; dossier judgment predates the audit — RECONCILE)';
  }

  if (!entry.judgment) return 'UNDECLARED — needs disposition review';
  return klass === 'executable-eligible' ? 'executable-candidate (no record yet)' : klass;
}

const families = readDossiers().map((entry) => {
  const records = recordsByFamily().get(entry.family) ?? 0;
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
  reconcile: tally((f) => f.disposition.includes('RECONCILE')),
  undeclared: tally((f) => f.disposition.startsWith('UNDECLARED')),
};
const totalRecords = readdirSync(recordDir).filter((f) => f.endsWith('.json')).length;

// A family dispositioned executable must carry exactly one matched
// concise/detailed pair, and a held family must carry none. Anything else means
// the ledger and the machine corpus disagree.
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

Every column below is read back out of committed repository state: the
executable-eligibility judgment declared by each dossier under
\`docs/full-corpus/batch-*/M*-deep-case.md\`, and the records that actually exist
under \`data/benchmark/\`. No count from prior chat state is used here, and none
should be reintroduced.

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
| undeclared — dossier states no judgment | ${counts.undeclared} |
| **Total** | **${families.length}** |

Full Corpus records under \`data/benchmark/\`: **${totalRecords}** across
**${counts.executableWithRecord + counts.reconcile}** executable families, two matched records each.

${counts.reconcile === 0
  ? 'Every executable family\'s dossier states the audit result that produced its record. No family\nis executable merely because a record for it exists.'
  : `Of those, **${counts.reconcile}** carry a dossier judgment written before the candidate audit that\nproduced the record. Those records pass every machine invariant, but the dossier has not been\nformally re-judged under the four-basis rule. They are the first priority for independent review,\nand no family should be promoted on the strength of its record existing.`}

The executable count is an output of this process, not an input to it. Promoting
a held family requires new targeted research recorded in its dossier — not a
re-reading of the same sources, and not an assertion in a commit message.

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
    console.error('✗ FULL_CORPUS_DISPOSITION_LEDGER.md is stale. Run: node scripts/disposition-ledger.mjs --write');
    process.exit(1);
  }
  console.log(`✓ disposition ledger agrees with ${families.length} dossiers and ${totalRecords} records.`);
}
