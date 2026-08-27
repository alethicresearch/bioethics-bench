#!/usr/bin/env node
/**
 * Keep the dossiers and the built records saying the same thing.
 *
 * The dossiers in docs/featured-v1-research/ are the editorial home of the case content:
 * decision questions, both scenarios, and the six candidate texts. scripts/featured-v1/
 * holds the machine-readable transcription the generator emits records from. Two copies
 * of the same prose in one repository will drift, and the drift is silent — a reviewer
 * reads the dossier and a run executes the record.
 *
 * This compares them and fails on any difference, in either direction. When an editorial
 * change is made, it has to land in both places before validation passes.
 *
 *   node scripts/check-dossier-sync.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const docsDir = join(root, 'docs/featured-v1-research');
const dataDir = join(root, 'data/featured');

const records = readdirSync(dataDir)
  .filter((f) => f.endsWith('.json') && f !== 'index.json')
  .map((f) => JSON.parse(readFileSync(join(dataDir, f), 'utf8')));

const byCase = new Map();
for (const r of records) {
  const entry = byCase.get(r.case_id) || {};
  entry[r.representation.form] = r;
  byCase.set(r.case_id, entry);
}

/** Normalize for comparison: prose differences that are not content differences. */
const norm = (s) => (s || '')
  .replace(/’/g, "'")
  .replace(/‘/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/—/g, '-')
  .replace(/–/g, '-')
  .replace(/\s+/g, ' ')
  .trim();

/**
 * Dossier sections are delimited by bold labels on their own line, with the value on the
 * following line(s) up to the next blank line or bold label.
 */
function section(block, label) {
  const re = new RegExp(`^\\*\\*${label}\\*\\*\\s*$`, 'm');
  const m = re.exec(block);
  if (!m) return null;
  const rest = block.slice(m.index + m[0].length);
  const lines = [];
  for (const line of rest.split('\n')) {
    if (!line.trim()) { if (lines.length) break; continue; }
    if (/^\*\*/.test(line.trim()) || /^#{1,6} /.test(line)) break;
    lines.push(line.trim());
  }
  return lines.length ? lines.join(' ') : null;
}

function candidateText(block, id) {
  const re = new RegExp(`^- \\*\\*${id}:\\*\\* (.+)$`, 'm');
  const m = re.exec(block);
  return m ? m[1].trim() : null;
}

const problems = [];
let compared = 0;

const files = readdirSync(docsDir).filter((f) => /^F\d\d-F\d\d/.test(f)).sort();
const seenCases = new Set();

for (const file of files) {
  const text = readFileSync(join(docsDir, file), 'utf8');
  // Each family is a "## Fxx — Title" section running to the next "## " heading.
  const blocks = text.split(/\n## /).slice(1);
  for (const raw of blocks) {
    const block = `## ${raw}`;
    const heading = block.split('\n')[0];
    const idMatch = /^## (F\d\d)\b/.exec(heading);
    if (!idMatch) continue;
    const num = idMatch[1].toLowerCase();

    const caseId = [...byCase.keys()].find((k) => k.startsWith(`${num}-`));
    if (!caseId) {
      problems.push(`${file}: dossier section ${idMatch[1]} has no matching record`);
      continue;
    }
    seenCases.add(caseId);
    const { concise, detailed } = byCase.get(caseId);
    const where = `${idMatch[1]} (${caseId})`;

    const checks = [
      ['decision question', section(block, 'Decision question'), concise.decision_question],
      ['concise scenario', section(block, 'Concise'), concise.scenario],
      ['detailed scenario', section(block, 'Detailed'), detailed.scenario],
    ];
    for (const id of ['pub1', 'pub2', 'exp1', 'exp2', 'fw1', 'fw2']) {
      const pool = id.startsWith('pub') ? 'public' : id.startsWith('exp') ? 'expert' : 'framework';
      const record = concise.candidate_pools[pool].find((c) => c.id === id);
      checks.push([id, candidateText(block, id), record?.text]);
    }

    for (const [label, fromDoc, fromRecord] of checks) {
      compared += 1;
      if (fromDoc === null) {
        problems.push(`${where}: dossier has no ${label}`);
      } else if (norm(fromDoc) !== norm(fromRecord)) {
        problems.push(
          `${where}: ${label} differs between the dossier and the record\n`
          + `    dossier: ${norm(fromDoc).slice(0, 150)}\n`
          + `    record:  ${norm(fromRecord).slice(0, 150)}`,
        );
      }
    }
  }
}

for (const caseId of byCase.keys()) {
  if (!seenCases.has(caseId)) problems.push(`${caseId}: built record has no dossier section`);
}

if (problems.length) {
  console.error(`\n${problems.length} dossier/record difference(s) across ${compared} comparisons:\n`);
  for (const p of problems) console.error(`  x ${p}`);
  console.error('\nThe dossier is the editorial home of this text and scripts/featured-v1/ is what the\n'
    + 'generator reads. An editorial change has to land in both.\n');
  process.exit(1);
}

console.log(`✓ dossiers and records agree across ${compared} comparisons in ${seenCases.size} families.`);
