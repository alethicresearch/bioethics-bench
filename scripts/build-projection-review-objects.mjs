#!/usr/bin/env node
/**
 * Materialize the completed 34-family editorial crosswalk review.
 *
 * Source of judgment: SOURCE_GROUNDED_CROSSWALK_DECISIONS.v1.1.json.
 * This builder performs no semantic matching. It only verifies and expands the
 * explicit human decisions into versioned source-grounded manifests or hold
 * objects, plus a deterministic review ledger.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decisionsRel = 'docs/full-corpus/projections/SOURCE_GROUNDED_CROSSWALK_DECISIONS.v1.1.json';
const inputRel = 'docs/full-corpus/projections/SOURCE_GROUNDED_REVIEW_INPUT.v1.1.json';
const sourceDir = join(root, 'resources', 'projections', 'source-grounded');
const holdDir = join(root, 'resources', 'projections', 'holds');
const ledgerRel = 'docs/full-corpus/projections/SOURCE_GROUNDED_CROSSWALK_REVIEW_LEDGER.md';
const ledgerPath = join(root, ledgerRel);
const decisions = JSON.parse(readFileSync(join(root, decisionsRel), 'utf8'));
const reviewInput = JSON.parse(readFileSync(join(root, inputRel), 'utf8'));
const byFamily = new Map(reviewInput.cases.map((item) => [item.neutral_case_family_id, item]));
const problems = [];

const STANDARD_CLAIM = (inventory) => `Source-grounded comparison among the represented Public, Expert, and Framework positions in the historical ${inventory} Full Corpus v1 records; this crosswalk preserves represented source-role claims only and does not imply broader public, professional, or normative consensus.`;
const APPROVED_NOTE = 'Editorially reviewed against neutral resource v1.1.0 at operative Policy level. Cross-role reuse of a neutral Policy denotes independent evidential support, not duplicate Policy identity.';
const HOLD_NOTE = 'Historical represented records remain unchanged. Hold applies only to claiming a one-to-one historical crosswalk onto neutral resource v1.1.0.';

if (decisions.review_version !== '1.1.0') problems.push(`decision review_version must be 1.1.0; found ${decisions.review_version}`);
if (decisions.candidate_universe_resource !== reviewInput.candidate_universe_resource) problems.push('decision and review-input resource pins differ');
if (reviewInput.executable_family_count !== 34 || reviewInput.cases.length !== 34) problems.push(`review input must contain 34 families; found ${reviewInput.cases.length}`);
if (decisions.decisions?.length !== 34) problems.push(`decision source must contain 34 decisions; found ${decisions.decisions?.length ?? 0}`);

const seen = new Set();
const outputs = [];
for (const decision of decisions.decisions ?? []) {
  const familyId = decision.case_family_id;
  const source = byFamily.get(familyId);
  if (!source) {
    problems.push(`${familyId}: no review-input family`);
    continue;
  }
  if (seen.has(familyId)) problems.push(`${familyId}: duplicate decision`);
  seen.add(familyId);
  const validNeutral = new Set(source.neutral_candidates.map((candidate) => candidate.neutral_candidate_id));
  const sourceCandidates = new Map(source.source_candidates.map((candidate) => [`${candidate.source_role}:${candidate.source_candidate_id}`, candidate]));

  if (decision.disposition === 'approved') {
    const keys = Object.keys(decision.mapping ?? {});
    if (keys.length !== sourceCandidates.size) problems.push(`${familyId}: approved mapping has ${keys.length} source candidates; expected ${sourceCandidates.size}`);
    for (const key of sourceCandidates.keys()) if (!(key in (decision.mapping ?? {}))) problems.push(`${familyId}: approved mapping omits ${key}`);
    for (const [key, neutralId] of Object.entries(decision.mapping ?? {})) {
      if (!sourceCandidates.has(key)) problems.push(`${familyId}: mapping names unknown source candidate ${key}`);
      if (!validNeutral.has(neutralId)) problems.push(`${familyId}: mapping ${key} points to unknown ${neutralId}`);
    }
    const crosswalk = source.source_candidates.map((candidate) => ({
      source_role: candidate.source_role,
      source_candidate_id: candidate.source_candidate_id,
      neutral_candidate_id: decision.mapping[`${candidate.source_role}:${candidate.source_candidate_id}`],
      relation: 'materially-equivalent',
    }));
    const roleAssignments = Object.fromEntries(['public', 'expert', 'framework'].map((role) => [
      role,
      [...new Set(crosswalk.filter((item) => item.source_role === role).map((item) => item.neutral_candidate_id))],
    ]));
    const manifest = {
      projection_id: `${familyId}-source-grounded-historical-crosswalk`,
      projection_version: '1.0.0',
      case_family_id: familyId,
      candidate_universe_resource: decisions.candidate_universe_resource,
      projection_type: 'source-grounded',
      claim_scope: STANDARD_CLAIM(source.inventory_id),
      as_of_date: decisions.review_date,
      jurisdiction_context: null,
      role_assignments: roleAssignments,
      aggregation: source.aggregation,
      source_record_ids: source.source_record_ids,
      source_candidate_crosswalk: crosswalk,
      review_status: 'approved-editorial-crosswalk',
      reviewed_at: decisions.review_date,
      notes: APPROVED_NOTE,
    };
    outputs.push({ familyId, inventory: source.inventory_id, title: source.title, kind: 'approved', source, object: manifest });
  } else if (decision.disposition === 'hold') {
    for (const issue of decision.issues ?? []) {
      const key = `${issue.source_role}:${issue.source_candidate_id}`;
      if (!sourceCandidates.has(key)) problems.push(`${familyId}: hold issue names unknown ${key}`);
      for (const neutralId of issue.related_neutral_candidate_ids ?? []) if (!validNeutral.has(neutralId)) problems.push(`${familyId}: hold issue ${key} names unknown ${neutralId}`);
    }
    if (!(decision.reason_codes?.length) || !(decision.issues?.length) || !decision.next_action) problems.push(`${familyId}: hold requires reason_codes, issues, and next_action`);
    const hold = {
      review_id: `${familyId}-source-grounded-crosswalk-hold`,
      review_version: '1.0.0',
      case_family_id: familyId,
      candidate_universe_resource: decisions.candidate_universe_resource,
      source_record_ids: source.source_record_ids,
      status: 'hold',
      reason_codes: decision.reason_codes,
      issues: decision.issues,
      next_action: decision.next_action,
      reviewed_at: decisions.review_date,
      notes: HOLD_NOTE,
    };
    outputs.push({ familyId, inventory: source.inventory_id, title: source.title, kind: 'hold', source, object: hold });
  } else {
    problems.push(`${familyId}: unknown disposition ${decision.disposition}`);
  }
}
for (const family of byFamily.keys()) if (!seen.has(family)) problems.push(`${family}: no decision`);

if (problems.length) {
  console.error(`✗ ${problems.length} projection-review build problem(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

outputs.sort((a, b) => a.inventory.localeCompare(b.inventory));
const approved = outputs.filter((item) => item.kind === 'approved');
const held = outputs.filter((item) => item.kind === 'hold');
const ledger = [
  '# Full Corpus — Source-grounded historical crosswalk review ledger',
  '',
  '**Review date:** 2026-08-30  ',
  `**Neutral resource:** \`${decisions.candidate_universe_resource}\`  `,
  '**Method:** manual editorial Policy-level review; no automatic matching.**',
  '',
  '## Summary',
  '',
  `- Approved materially equivalent historical crosswalks: **${approved.length}**`,
  `- Explicit holds: **${held.length}**`,
  `- Total executable calibration families: **${outputs.length}**`,
  `- Undeclared: **${34 - outputs.length}**`,
  '',
  'An approval means each historical Public/Expert/Framework candidate can be traced to a materially equivalent neutral Policy in v1.1. A hold means the historical record remains valid as historical provenance, but a one-to-one crosswalk would collapse, split, misclassify, or overstate the current neutral representation. Holds are not silently repaired.',
  '',
  '| Family | Title | Disposition | Existing geometry | Crosswalk / hold reason | Next action |',
  '|---|---|---|---|---|---|',
];
for (const item of outputs) {
  const counts = Object.fromEntries(['public', 'expert', 'framework'].map((role) => [role, item.source.source_candidates.filter((candidate) => candidate.source_role === role).length]));
  const geometry = `${counts.public}P × ${counts.expert}E × ${counts.framework}F`;
  if (item.kind === 'approved') {
    const mapping = item.object.source_candidate_crosswalk.map((cw) => `${cw.source_role}:${cw.source_candidate_id}→${cw.neutral_candidate_id}`).join('; ');
    ledger.push(`| ${item.inventory} | ${item.title.replace(/\|/g, '\\|')} | approved | ${geometry} | ${mapping} | preserve historical records; manifest pins v1.1 |`);
  } else {
    ledger.push(`| ${item.inventory} | ${item.title.replace(/\|/g, '\\|')} | **HOLD** | ${geometry} | ${item.object.reason_codes.join('; ')} | ${item.object.next_action.replace(/\|/g, '\\|')} |`);
  }
}
ledger.push('', '## Holds requiring successor work', '');
for (const item of held) {
  ledger.push(`### ${item.inventory} — ${item.title}`, '');
  for (const issue of item.object.issues) ledger.push(`- **${issue.source_role}:${issue.source_candidate_id}** → [${issue.related_neutral_candidate_ids.join(', ')}]: ${issue.explanation}`);
  ledger.push(`- **Next:** ${item.object.next_action}`, '');
}
const ledgerText = `${ledger.join('\n')}\n`;

function expectedFiles(kind) {
  return outputs.filter((item) => item.kind === kind).map((item) => `${item.familyId}.json`).sort();
}
function checkDir(dir, kind) {
  const expected = expectedFiles(kind);
  const actual = existsSync(dir) ? readdirSync(dir).filter((name) => name.endsWith('.json')).sort() : [];
  if (JSON.stringify(actual) !== JSON.stringify(expected)) return false;
  for (const item of outputs.filter((entry) => entry.kind === kind)) {
    const expectedText = `${JSON.stringify(item.object, null, 2)}\n`;
    if (readFileSync(join(dir, `${item.familyId}.json`), 'utf8') !== expectedText) return false;
  }
  return true;
}

if (process.argv.includes('--write')) {
  rmSync(sourceDir, { recursive: true, force: true });
  rmSync(holdDir, { recursive: true, force: true });
  mkdirSync(sourceDir, { recursive: true });
  mkdirSync(holdDir, { recursive: true });
  for (const item of outputs) {
    const dir = item.kind === 'approved' ? sourceDir : holdDir;
    writeFileSync(join(dir, `${item.familyId}.json`), `${JSON.stringify(item.object, null, 2)}\n`);
  }
  mkdirSync(dirname(ledgerPath), { recursive: true });
  writeFileSync(ledgerPath, ledgerText);
  console.log(`✓ wrote projection review objects: ${approved.length} approved / ${held.length} holds / ${outputs.length} total.`);
} else if (process.argv.includes('--check')) {
  let ledgerCurrent = false;
  try { ledgerCurrent = readFileSync(ledgerPath, 'utf8') === ledgerText; } catch {}
  if (!checkDir(sourceDir, 'approved') || !checkDir(holdDir, 'hold') || !ledgerCurrent) {
    console.error('✗ projection review objects are stale. Run: node scripts/build-projection-review-objects.mjs --write');
    process.exit(1);
  }
  console.log(`✓ projection review objects match decisions: ${approved.length} approved / ${held.length} holds / ${outputs.length} total.`);
} else {
  console.log(`✓ projection review decision source is internally complete: ${approved.length} approved / ${held.length} holds / ${outputs.length} total.`);
}
