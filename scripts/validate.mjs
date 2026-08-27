#!/usr/bin/env node
/**
 * Validate every committed Bench record against schema, content hash, and the
 * cross-record invariants that make a Featured case a reproducible research object.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { canonicalContentHash } from './hash-case.mjs';

const root = process.cwd();
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const schemas = {
  case: JSON.parse(readFileSync(join(root, 'schemas/case.schema.json'), 'utf8')),
  manifest: JSON.parse(readFileSync(join(root, 'schemas/manifest.schema.json'), 'utf8')),
  result: JSON.parse(readFileSync(join(root, 'schemas/result.schema.json'), 'utf8')),
};
const validators = Object.fromEntries(
  Object.entries(schemas).map(([k, v]) => [k, ajv.compile(v)]),
);

function jsonFilesUnder(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return jsonFilesUnder(full);
    return full.endsWith('.json') ? [full] : [];
  });
}

function kindOf(record) {
  if (record.manifest_version || record.release_id) return 'manifest';
  if (record.result_id) return 'result';
  if (record.case_id) return 'case';
  return null;
}

function candidateSignature(record) {
  return JSON.stringify(record.candidate_pools || null);
}

function expectedIds(poolName) {
  if (poolName === 'public') return ['pub1', 'pub2'];
  if (poolName === 'expert') return ['exp1', 'exp2'];
  return ['fw1', 'fw2'];
}

let checked = 0;
const problems = [];
const caseRecords = [];
const files = [...jsonFilesUnder(join(root, 'data')), ...jsonFilesUnder(join(root, 'releases'))];

for (const file of files) {
  const rel = relative(root, file);
  let record;
  try {
    record = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    problems.push(`${rel}: not valid JSON — ${err.message}`);
    continue;
  }

  const kind = kindOf(record);
  if (!kind) {
    problems.push(`${rel}: cannot tell what kind of record this is (no case_id, result_id, or manifest_version)`);
    continue;
  }

  checked += 1;
  const validate = validators[kind];
  if (!validate(record)) {
    for (const e of validate.errors) {
      problems.push(`${rel}: ${e.instancePath || '/'} ${e.message}`);
    }
  }

  if (kind === 'case') {
    caseRecords.push({ rel, record });
    if (record.content_hash) {
      const expected = canonicalContentHash(record);
      if (expected !== record.content_hash) {
        problems.push(
          `${rel}: content_hash does not match the record.\n`
          + `    recorded: ${record.content_hash}\n`
          + `    computed: ${expected}\n`
          + '    Either the record changed without a new version, or the hash was never recomputed.',
        );
      }
    }

    if (record.benchmark_profile === 'featured-core-2x2x2-v1') {
      for (const poolName of ['public', 'expert', 'framework']) {
        const pool = record.candidate_pools?.[poolName] || [];
        if (pool.length !== 2) {
          problems.push(`${rel}: benchmark_profile featured-core-2x2x2-v1 requires exactly 2 ${poolName} candidates; found ${pool.length}`);
          continue;
        }
        const ids = pool.map((c) => c.id);
        const expected = expectedIds(poolName);
        if (JSON.stringify(ids) !== JSON.stringify(expected)) {
          problems.push(`${rel}: ${poolName} candidate ids/order must be ${expected.join(', ')}; found ${ids.join(', ')}`);
        }
      }
    }
  }
}

// Cross-record invariants for Featured concise/detailed companion representations.
const featuredByCase = new Map();
for (const entry of caseRecords.filter(({ record }) => record.collection === 'featured')) {
  const bucket = featuredByCase.get(entry.record.case_id) || [];
  bucket.push(entry);
  featuredByCase.set(entry.record.case_id, bucket);
}

for (const [caseId, entries] of featuredByCase.entries()) {
  const byForm = new Map(entries.map((e) => [e.record.representation?.form, e]));
  const concise = byForm.get('concise');
  const detailed = byForm.get('detailed');

  // Draft/editorial work may be committed incrementally. Once either companion is
  // frozen/released, both representations must be present and internally matched.
  const requiresCompletePair = entries.some(({ record }) => ['frozen', 'released'].includes(record.status));
  if (requiresCompletePair && (!concise || !detailed)) {
    problems.push(`${caseId}: frozen/released Featured case requires both concise and detailed representations`);
    continue;
  }
  if (!concise || !detailed) continue;

  if (concise.record.decision_question !== detailed.record.decision_question) {
    problems.push(`${caseId}: concise/detailed decision_question must be byte-identical`);
  }
  if (concise.record.benchmark_profile !== detailed.record.benchmark_profile) {
    problems.push(`${caseId}: concise/detailed benchmark_profile must match`);
  }
  if (candidateSignature(concise.record) !== candidateSignature(detailed.record)) {
    problems.push(`${caseId}: concise/detailed candidate_pools must be byte-identical for the v1 representation comparison`);
  }

  const cCompanions = concise.record.representation?.companion_record_ids || [];
  const dCompanions = detailed.record.representation?.companion_record_ids || [];
  if (!cCompanions.includes(detailed.record.record_id)) {
    problems.push(`${caseId}: concise representation does not name detailed companion ${detailed.record.record_id}`);
  }
  if (!dCompanions.includes(concise.record.record_id)) {
    problems.push(`${caseId}: detailed representation does not name concise companion ${concise.record.record_id}`);
  }
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) across ${checked} record(s):\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error('');
  process.exit(1);
}

console.log(`✓ ${checked} record(s) valid against schema, content hash, and Featured invariants.`);
