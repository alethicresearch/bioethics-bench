#!/usr/bin/env node
/**
 * Keep the dossiers and the built records saying the same thing.
 *
 * A dossier is the editorial home of case content: decision questions, every scenario
 * representation, and every candidate text. scripts/featured-v1/ and its successors hold
 * the machine-readable transcription the generators emit records from. Two copies of the
 * same prose in one repository will drift, and the drift is silent — a reviewer reads the
 * dossier and a run executes the record.
 *
 * This compares them and fails on any difference, in either direction. When an editorial
 * change is made, it has to land in both places before validation passes.
 *
 * Collections register their editorial home in docs/dossier-sources.json. Representation
 * forms and candidate ids come from the record's own benchmark_profile, so a collection
 * built to a different profile is compared on its own terms rather than on Featured v1's.
 * A frozen or released record in an unregistered collection fails: at freeze, agreement
 * has to be measured, and an unregistered collection previously meant no comparison ran.
 *
 *   node scripts/check-dossier-sync.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const SOURCES = JSON.parse(readFileSync(join(root, 'docs/dossier-sources.json'), 'utf8')).sources;
const PROFILES = JSON.parse(readFileSync(join(root, 'schemas/benchmark-profiles.json'), 'utf8')).profiles;

/** Normalize for comparison: prose differences that are not content differences. */
const norm = (s) => (s || '')
  .replace(/\u2019/g, "'")
  .replace(/\u2018/g, "'")
  .replace(/[\u201c\u201d]/g, '"')
  .replace(/\u2014/g, '-')
  .replace(/\u2013/g, '-')
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

/** The dossier label for a representation form: `concise` is written **Concise**. */
const formLabel = (form) => form.charAt(0).toUpperCase() + form.slice(1);

const problems = [];
let compared = 0;
let families = 0;

const coveredCases = new Set();

for (const source of SOURCES) {
  const docsDir = join(root, source.docs_dir);
  const dataDir = join(root, `data/${source.collection}`);
  if (!existsSync(dataDir)) {
    problems.push(`${source.collection}: registered in docs/dossier-sources.json but data/${source.collection} does not exist`);
    continue;
  }
  if (!existsSync(docsDir)) {
    problems.push(`${source.collection}: docs_dir ${source.docs_dir} does not exist`);
    continue;
  }

  const records = readdirSync(dataDir)
    .filter((f) => f.endsWith('.json') && f !== 'index.json')
    .map((f) => JSON.parse(readFileSync(join(dataDir, f), 'utf8')));

  const byCase = new Map();
  for (const r of records) {
    const entry = byCase.get(r.case_id) || {};
    entry[r.representation?.form || 'default'] = r;
    byCase.set(r.case_id, entry);
  }

  const filePattern = new RegExp(source.file_pattern);
  const sectionPattern = new RegExp(source.section_id_pattern);
  const files = readdirSync(docsDir).filter((f) => filePattern.test(f)).sort();
  const seenCases = new Set();

  for (const file of files) {
    const text = readFileSync(join(docsDir, file), 'utf8');
    // Each family is a "## <id> — Title" section running to the next "## " heading.
    const blocks = text.split(/\n## /).slice(1);
    for (const raw of blocks) {
      const block = `## ${raw}`;
      const idMatch = sectionPattern.exec(block.split('\n')[0]);
      if (!idMatch) continue;
      const num = idMatch[1].toLowerCase();

      const caseId = [...byCase.keys()].find((k) => k.toLowerCase().startsWith(`${num}-`));
      if (!caseId) {
        problems.push(`${file}: dossier section ${idMatch[1]} has no matching record in data/${source.collection}`);
        continue;
      }
      seenCases.add(caseId);
      coveredCases.add(caseId);
      const forms = byCase.get(caseId);
      const where = `${idMatch[1]} (${caseId})`;

      // The shape to compare against is the record's own, not Featured v1's.
      const anyRecord = Object.values(forms)[0];
      const profile = PROFILES[anyRecord.benchmark_profile];
      if (!profile) {
        problems.push(`${where}: benchmark_profile "${anyRecord.benchmark_profile}" is not registered in schemas/benchmark-profiles.json, so there is no shape to compare against`);
        continue;
      }
      const declaredForms = profile.representations || Object.keys(forms);
      const candidateIds = Object.values(profile.pools || {}).flat();

      const checks = [['decision question', section(block, 'Decision question'), anyRecord.decision_question]];
      for (const form of declaredForms) {
        const record = forms[form];
        if (!record) {
          problems.push(`${where}: profile ${anyRecord.benchmark_profile} declares a ${form} representation but no such record was built`);
          continue;
        }
        checks.push([`${form} scenario`, section(block, formLabel(form)), record.scenario]);
      }
      for (const id of candidateIds) {
        const pool = Object.entries(profile.pools).find(([, ids]) => ids.includes(id))?.[0];
        const record = anyRecord.candidate_pools?.[pool]?.find((c) => c.id === id);
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
    if (!seenCases.has(caseId)) problems.push(`${caseId}: built record has no dossier section in ${source.docs_dir}`);
  }
  families += seenCases.size;
}

// A frozen or released record is a claim that its prose was reviewed where reviewers read
// it. That claim is only checkable where the collection has a registered editorial home.
const registered = new Set(SOURCES.map((s) => s.collection));
const dataRoot = join(root, 'data');
for (const collection of existsSync(dataRoot) ? readdirSync(dataRoot) : []) {
  if (registered.has(collection)) continue;
  const dir = join(dataRoot, collection);
  let entries;
  try { entries = readdirSync(dir); } catch { continue; }
  for (const f of entries.filter((n) => n.endsWith('.json') && n !== 'index.json')) {
    const record = JSON.parse(readFileSync(join(dir, f), 'utf8'));
    if (['frozen', 'released'].includes(record.status)) {
      problems.push(
        `${collection}/${f}: status "${record.status}" but collection "${collection}" has no entry in docs/dossier-sources.json.\n`
        + '    Register its editorial home so the dossier/record comparison actually runs, or leave the record in draft.',
      );
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} dossier/record difference(s) across ${compared} comparisons:\n`);
  for (const p of problems) console.error(`  x ${p}`);
  console.error('\nThe dossier is the editorial home of this text and scripts/featured-v1/ is what the\n'
    + 'generator reads. An editorial change has to land in both.\n');
  process.exit(1);
}

console.log(`✓ dossiers and records agree across ${compared} comparisons in ${families} families across ${SOURCES.length} registered collection(s).`);
