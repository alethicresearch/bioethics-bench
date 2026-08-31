#!/usr/bin/env node
/**
 * Build the editorial crosswalk worksheet for existing Full Corpus executable
 * projections against the neutral Full-200 candidate-universe resource.
 *
 * IMPORTANT: this script does not suggest or infer candidate mappings. It only
 * places the two reviewed objects side by side. Public/Expert/Framework mapping
 * is a substantive editorial/research judgment and must be entered explicitly
 * in a projection manifest after review.
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const resourcePath = join(root, 'resources', 'case-families', 'full-200-rich-candidate-universes.v1.json');
const recordDir = join(root, 'data', 'benchmark');
const outPath = join(root, 'docs', 'full-corpus', 'projections', 'SOURCE_GROUNDED_CROSSWALK_WORKSHEET.md');

const resource = JSON.parse(readFileSync(resourcePath, 'utf8'));
const neutralById = new Map(resource.cases.map((family) => [family.case_family_id, family]));

const conciseFiles = readdirSync(recordDir)
  .filter((file) => /^m\d{3}-.*-concise-v1\.json$/.test(file))
  .sort();

function compact(value) {
  return String(value ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}

function candidateCount(record) {
  return ['public', 'expert', 'framework']
    .reduce((sum, role) => sum + (record.candidate_pools?.[role]?.length ?? 0), 0);
}

const families = [];
const problems = [];
for (const file of conciseFiles) {
  const record = JSON.parse(readFileSync(join(recordDir, file), 'utf8'));
  const neutral = neutralById.get(record.case_id);
  if (!neutral) {
    problems.push(`${record.case_id}: no neutral Full-200 family found`);
    continue;
  }
  const detailedFile = file.replace('-concise-v1.json', '-detailed-v1.json');
  let detailed = null;
  try {
    detailed = JSON.parse(readFileSync(join(recordDir, detailedFile), 'utf8'));
  } catch {
    problems.push(`${record.case_id}: missing detailed companion ${detailedFile}`);
  }
  if (detailed && JSON.stringify(detailed.candidate_pools) !== JSON.stringify(record.candidate_pools)) {
    problems.push(`${record.case_id}: concise/detailed candidate pools differ; crosswalk cannot proceed`);
  }
  families.push({ file, record, detailedFile, detailed, neutral });
}

if (problems.length) {
  for (const problem of problems) console.error(`✗ ${problem}`);
  process.exit(1);
}

const lines = [
  '# Full Corpus — Source-grounded projection crosswalk worksheet',
  '',
  '**Generated from committed repository state. Do not enter mappings in this generated file.**',
  '',
  `Neutral resource: \`resources/case-families/full-200-rich-candidate-universes.v1.json\` (${resource.case_count} families).`,
  `Executable calibration set: **${families.length}** Full Corpus families with matched concise/detailed records.`,
  '',
  '## Review rule',
  '',
  'This worksheet deliberately makes **no automatic match** between an existing executable candidate and a neutral candidate ID. Candidate order, text similarity, the audit ✓ mark, and coarse provenance class are lookup aids only; none authorizes a Public / Expert / Framework role assignment.',
  '',
  'For each family, the reviewer must decide whether each existing executable Policy is materially represented by one neutral candidate, whether the existing wording combines more than one neutral position, or whether the neutral audit requires a substantive successor projection instead of a historical crosswalk. The final judgment belongs in a versioned projection manifest, not in this worksheet.',
  '',
  'A source-grounded manifest preserves the existing projection lineage only when the mapping is defensible at the represented source-role granularity. Do not manufacture a Public or Expert disagreement to preserve geometry.',
  '',
  '---',
  '',
];

for (const { file, record, detailedFile, detailed, neutral } of families) {
  const geometry = ['public', 'expert', 'framework']
    .map((role) => `${record.candidate_pools?.[role]?.length ?? 0} ${role}`)
    .join(' × ');
  lines.push(`## ${neutral.inventory_id} — ${compact(neutral.title)}`);
  lines.push('');
  lines.push(`- Case ID: \`${record.case_id}\``);
  lines.push(`- Existing concise record: \`${record.record_id}\``);
  lines.push(`- Existing detailed record: \`${detailed?.record_id ?? detailedFile.replace(/\.json$/, '')}\``);
  lines.push(`- Existing benchmark profile: \`${record.benchmark_profile ?? '—'}\``);
  lines.push(`- Existing geometry: ${geometry}; total ${candidateCount(record)} candidates.`);
  lines.push(`- Neutral candidate count: ${neutral.candidate_count}.`);
  lines.push(`- Neutral source-grounded audit: ${compact(neutral.source_grounded_status)}`);
  lines.push('');
  lines.push('### Existing executable projection');
  lines.push('');
  lines.push('| Role | Existing ID | Existing policy text | Policy basis | Provenance summary |');
  lines.push('|---|---|---|---|---|');
  for (const role of ['public', 'expert', 'framework']) {
    for (const candidate of record.candidate_pools?.[role] ?? []) {
      lines.push(`| ${role} | ${candidate.id} | ${compact(candidate.text)} | ${compact(candidate.policy_basis ?? '—')} | ${compact(candidate.provenance?.summary ?? '—')} |`);
    }
  }
  lines.push('');
  lines.push('### Neutral reviewed candidate universe');
  lines.push('');
  lines.push('| Neutral ID | Policy position | Audit source mark | Provenance class | Exact audit provenance label |');
  lines.push('|---|---|---|---|---|');
  for (const candidate of neutral.candidate_universe) {
    lines.push(`| ${candidate.candidate_id} | ${compact(candidate.text)} | ${candidate.audit_source_mark ? '✓' : '—'} | ${candidate.provenance_class} | ${compact(candidate.audit_provenance_label)} |`);
  }
  lines.push('');
  lines.push('### Required editorial decision');
  lines.push('');
  lines.push('- [ ] Review every existing candidate against the neutral universe and its provenance.');
  lines.push('- [ ] Declare one-to-one neutral IDs only where the Policy meaning is materially the same.');
  lines.push('- [ ] If an existing candidate combines/splits neutral positions, record that as a crosswalk issue rather than forcing a match.');
  lines.push('- [ ] Confirm Public / Expert / Framework role remains defensible at the source granularity claimed.');
  lines.push('- [ ] Create the source-grounded projection manifest with claim scope, aggregation, date/jurisdiction, and both source record IDs.');
  lines.push('');
  lines.push('---');
  lines.push('');
}

const output = `${lines.join('\n')}\n`;
if (process.argv.includes('--write')) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, output);
  console.log(`✓ wrote source-grounded crosswalk worksheet for ${families.length} executable families.`);
} else if (process.argv.includes('--check')) {
  let committed = null;
  try { committed = readFileSync(outPath, 'utf8'); } catch {}
  if (committed !== output) {
    console.error('✗ source-grounded crosswalk worksheet is stale. Run: node scripts/build-projection-crosswalk-worksheet.mjs --write');
    process.exit(1);
  }
  console.log(`✓ source-grounded crosswalk worksheet matches ${families.length} executable families.`);
} else {
  console.log(`✓ source-grounded crosswalk inputs valid for ${families.length} executable families.`);
}
