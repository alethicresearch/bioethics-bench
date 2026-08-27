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
    // index.json files are generated corpus indexes for the static site, not records.
    if (entry === 'index.json') return [];
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

const PROFILES = JSON.parse(readFileSync(join(root, 'schemas/benchmark-profiles.json'), 'utf8')).profiles;

/**
 * Which collections carry evidential weight.
 *
 * `tutorial` objects are teaching material and are never benchmark evidence, so they may
 * carry editorial candidates and stipulated values. Every other collection makes a claim
 * about what some source recommends, and has to be able to show where its text came from.
 */
const EVIDENTIAL_COLLECTIONS = new Set(['featured', 'development', 'stress-test', 'benchmark']);

const POOLS = ['public', 'expert', 'framework'];

function crossSourcePairCount(record) {
  const ids = POOLS.flatMap((pool) => (record.candidate_pools?.[pool] || []).map((c) => [c.id, pool]));
  let n = 0;
  for (let i = 0; i < ids.length; i += 1) {
    for (let j = i + 1; j < ids.length; j += 1) if (ids[i][1] !== ids[j][1]) n += 1;
  }
  return n;
}

function allCandidates(record) {
  return ['public', 'expert', 'framework'].flatMap(
    (pool) => (record.candidate_pools?.[pool] || []).map((c) => ({ pool, candidate: c })),
  );
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

    // ── Universal: true of every committed case record, whatever its collection ──

    // Governance: a confirmatory holdout is not committed publicly before execution. This
    // repository is public, so a holdout record here is already spent — the exposure it is
    // supposed to avoid has happened by the act of committing it.
    if (record.exposure === 'confirmatory-holdout') {
      problems.push(
        `${rel}: exposure is confirmatory-holdout, which must never be committed to this repository.\n`
        + '    Committing it here is the exposure it exists to avoid; the record is spent as holdout\n'
        + '    material the moment it lands. See docs/GOVERNANCE.md and docs/CASE_CONSTRUCTION.md.',
      );
    }

    for (const { pool, candidate } of allCandidates(record)) {
      const method = candidate.provenance?.construction_method;
      // Definitional, not editorial: a framework candidate is one derived from a framework.
      if (pool === 'framework' && method !== 'derived-from-framework') {
        problems.push(`${rel}: framework candidate ${candidate.id} must use construction_method derived-from-framework; found ${method}`);
      }
      if (candidate.source_pool !== pool) {
        problems.push(`${rel}: candidate ${candidate.id} sits in the ${pool} pool but declares source_pool ${candidate.source_pool}`);
      }
    }

    // A stipulation that is not marked in the scenario is a fact the record claims and the
    // executed text does not carry. SACRE scores the scenario, not the metadata.
    if ((record.stipulations || []).length > 0 && !/(^|\. )For this benchmark, assume/.test(record.scenario || '')) {
      problems.push(
        `${rel}: the record carries ${record.stipulations.length} benchmark stipulation(s) but the scenario does not mark any.\n`
        + '    A stipulated fact must appear in the executed scenario text, introduced by a sentence\n'
        + '    beginning "For this benchmark, assume" so a reader can tell it apart from a reported fact.',
      );
    }

    // A released record is public from that moment, whatever collection it belongs to.
    if (record.status === 'released' && !(record.exposure_history || []).length) {
      problems.push(`${rel}: a released record must record its public exposure in exposure_history`);
    }

    // ── Evidential collections: the record claims something about a source ──

    if (EVIDENTIAL_COLLECTIONS.has(record.collection)) {
      for (const { pool, candidate } of allCandidates(record)) {
        const method = candidate.provenance?.construction_method;
        if (pool === 'public' && method === 'editorial') {
          problems.push(
            `${rel}: public candidate ${candidate.id} has construction_method "editorial", in collection "${record.collection}".\n`
            + '    A public candidate in an evidential collection must be extracted-from-evidence or\n'
            + "    adapted-from-source; the Bench must never imply that an editor's plausible intuition\n"
            + '    is an empirical public preference. Only `tutorial` records may carry editorial candidates.',
          );
        }
        if ((candidate.provenance?.sources || []).length === 0) {
          problems.push(`${rel}: candidate ${candidate.id} has no provenance sources (collection "${record.collection}")`);
        }
      }
      if ((record.scenario_provenance?.sources || []).length === 0) {
        problems.push(`${rel}: scenario_provenance has no sources (collection "${record.collection}")`);
      }
    }

    // ── Structural: driven by the declared profile, for any profile ──

    if (record.benchmark_profile) {
      const profile = PROFILES[record.benchmark_profile];
      if (!profile) {
        // An unregistered profile used to mean no structural checks at all. That is the
        // wrong default: a typo, or a new profile nobody described, would pass silently.
        problems.push(
          `${rel}: benchmark_profile "${record.benchmark_profile}" is not registered in schemas/benchmark-profiles.json.\n`
          + '    Register it with its pools, candidate ids and representation forms, or correct the record.\n'
          + `    Known profiles: ${Object.keys(PROFILES).join(', ') || '(none)'}.`,
        );
      } else {
        for (const poolName of POOLS) {
          const pool = record.candidate_pools?.[poolName] || [];
          const expected = profile.pools?.[poolName] || [];
          const ids = pool.map((c) => c.id);
          if (JSON.stringify(ids) !== JSON.stringify(expected)) {
            problems.push(
              `${rel}: profile ${record.benchmark_profile} requires ${poolName} candidates `
              + `[${expected.join(', ')}]; found [${ids.join(', ') || 'none'}]`,
            );
          }
        }
        if (typeof profile.cross_source_pairs === 'number') {
          const actual = crossSourcePairCount(record);
          if (actual !== profile.cross_source_pairs) {
            problems.push(
              `${rel}: profile ${record.benchmark_profile} declares ${profile.cross_source_pairs} cross-source `
              + `pairs; this candidate set yields ${actual}`,
            );
          }
        }
      }
    }
  }
}

// Cross-record invariants for companion representations of one case family.
//
// Driven by the declared profile rather than by collection: any corpus whose profile
// declares representation forms inherits these, so a later collection built to a different
// profile is checked the same way rather than silently unchecked.
const byCase = new Map();
for (const entry of caseRecords) {
  if (!entry.record.representation?.form) continue;
  const bucket = byCase.get(entry.record.case_id) || [];
  bucket.push(entry);
  byCase.set(entry.record.case_id, bucket);
}

for (const [caseId, entries] of byCase.entries()) {
  const profileName = entries[0].record.benchmark_profile;
  const forms = PROFILES[profileName]?.representations;
  // No declared forms means no companion contract to enforce. The unregistered-profile
  // check above has already flagged the case where a profile was named but not described.
  if (!forms || forms.length < 2) continue;

  const byForm = new Map(entries.map((e) => [e.record.representation?.form, e]));

  for (const form of forms) {
    const count = entries.filter(({ record }) => record.representation?.form === form).length;
    if (count > 1) {
      problems.push(`${caseId}: ${count} ${form} representations; profile ${profileName} allows exactly one of each`);
    }
  }
  for (const entry of entries) {
    const form = entry.record.representation.form;
    if (!forms.includes(form)) {
      problems.push(`${caseId}: representation form "${form}" is not one of [${forms.join(', ')}] for profile ${profileName}`);
    }
  }

  // Draft work may be committed incrementally. Once any representation is frozen or
  // released, the full companion set must be present and internally matched.
  const requiresCompleteSet = entries.some(({ record }) => ['frozen', 'released'].includes(record.status));
  const present = forms.filter((f) => byForm.has(f));
  if (requiresCompleteSet && present.length !== forms.length) {
    problems.push(`${caseId}: a frozen/released case requires all representations [${forms.join(', ')}]; found [${present.join(', ')}]`);
    continue;
  }
  if (present.length !== forms.length) continue;

  // Every representation is compared against the first: what must match, must match across
  // the whole set, not just between two of them.
  const [baseForm, ...others] = forms;
  const base = byForm.get(baseForm);
  for (const other of others.map((f) => byForm.get(f))) {
    const pair = `${baseForm}/${other.record.representation.form}`;
    if (base.record.decision_question !== other.record.decision_question) {
      problems.push(`${caseId}: ${pair} decision_question must be byte-identical`);
    }
    if (base.record.benchmark_profile !== other.record.benchmark_profile) {
      problems.push(`${caseId}: ${pair} benchmark_profile must match`);
    }
    if (JSON.stringify(base.record.stipulations || []) !== JSON.stringify(other.record.stipulations || [])) {
      problems.push(`${caseId}: ${pair} stipulations must be identical - companions represent the same factual state`);
    }
    if (candidateSignature(base.record) !== candidateSignature(other.record)) {
      problems.push(`${caseId}: ${pair} candidate_pools must be byte-identical for the representation comparison`);
    }
    if (base.record.scenario === other.record.scenario) {
      problems.push(`${caseId}: ${pair} share a scenario — they would be the same represented object under two ids`);
    }
    for (const [a, b] of [[base, other], [other, base]]) {
      const companions = a.record.representation?.companion_record_ids || [];
      if (!companions.includes(b.record.record_id)) {
        problems.push(`${caseId}: ${a.record.representation.form} does not name companion ${b.record.record_id}`);
      }
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) across ${checked} record(s):\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error('');
  process.exit(1);
}

console.log(`✓ ${checked} record(s) valid against schema, content hash, and Featured invariants.`);
