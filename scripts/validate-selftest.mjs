#!/usr/bin/env node
/**
 * Self-test for the validator, against collections other than `featured`.
 *
 * Every guard here was written while building Featured v1 and was, until now, gated on
 * `collection === 'featured'` or on one hardcoded profile string. A corpus built to any
 * other collection or profile inherited the schema and almost none of the checks. These
 * probes construct records in `development` and `stress-test`, break one thing each, and
 * assert the validator objects — so the guards are demonstrably general rather than
 * generalised in intent only.
 *
 * Each probe is written to data/development/, validated, and removed.
 *
 *   node scripts/validate-selftest.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';

const dir = join(process.cwd(), 'data/development');
const created = [];

function ref(citation) {
  return { citation, type: 'other' };
}

function candidate(id, pool, method) {
  return {
    id,
    text: `Represented policy ${id}.`,
    source_pool: pool,
    provenance: { construction_method: method, summary: 'probe', sources: [ref('A probe source.')] },
  };
}

/** A minimal, valid non-Featured record. Probes mutate a copy of this. */
function baseRecord(overrides = {}) {
  const record = {
    record_id: 'probe-case-concise-v1',
    case_id: 'probe-case',
    version: '1.0.0',
    title: 'Probe case',
    short_description: 'A probe record used only by the validator self-test.',
    decision_question: 'What should the probe do?',
    representation: { form: 'concise', companion_record_ids: ['probe-case-detailed-v1'] },
    benchmark_profile: 'featured-core-2x2x2-v1',
    domains: ['research-ethics'],
    scenario: 'A probe scenario.',
    scenario_provenance: { construction_method: 'editorial', summary: 'probe', sources: [ref('A probe source.')] },
    candidate_pools: {
      public: [candidate('pub1', 'public', 'adapted-from-source'), candidate('pub2', 'public', 'adapted-from-source')],
      expert: [candidate('exp1', 'expert', 'adapted-from-source'), candidate('exp2', 'expert', 'adapted-from-source')],
      framework: [candidate('fw1', 'framework', 'derived-from-framework'), candidate('fw2', 'framework', 'derived-from-framework')],
    },
    collection: 'development',
    exposure: 'internal-development',
    status: 'draft',
    schema_version: '1.0.0',
    ...overrides,
  };
  return { ...record, content_hash: canonicalContentHash(record) };
}

function write(record) {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${record.record_id}.json`);
  writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`);
  created.push(file);
  return file;
}

function runValidator() {
  try {
    execFileSync('node', ['scripts/validate.mjs'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return '';
  } catch (err) {
    return `${err.stdout || ''}${err.stderr || ''}`;
  }
}

function cleanup() {
  for (const f of created.splice(0)) if (existsSync(f)) rmSync(f);
}

const results = [];
function probe(label, records, expected) {
  cleanup();
  for (const r of records) write(r);
  const output = runValidator();
  cleanup();
  const caught = expected.test(output);
  results.push({ label, caught, output: caught ? '' : output.split('\n').filter((l) => l.includes('✗')).slice(0, 2).join(' | ') });
}

// ── the guards, each on a non-featured record ───────────────────────────────────

probe('a clean development record passes', [baseRecord({ representation: undefined })], /^$/);

probe('editorial public candidate in `development`',
  [baseRecord({
    representation: undefined,
    candidate_pools: {
      ...baseRecord().candidate_pools,
      public: [candidate('pub1', 'public', 'editorial'), candidate('pub2', 'public', 'adapted-from-source')],
    },
  })],
  /construction_method "editorial", in collection "development"/);

probe('empty candidate provenance sources in `development`',
  [baseRecord({
    representation: undefined,
    candidate_pools: {
      ...baseRecord().candidate_pools,
      expert: [
        { ...candidate('exp1', 'expert', 'adapted-from-source'), provenance: { construction_method: 'adapted-from-source', sources: [] } },
        candidate('exp2', 'expert', 'adapted-from-source'),
      ],
    },
  })],
  /candidate exp1 has no provenance sources \(collection "development"\)/);

probe('framework candidate not derived-from-framework',
  [baseRecord({
    representation: undefined,
    candidate_pools: {
      ...baseRecord().candidate_pools,
      framework: [candidate('fw1', 'framework', 'adapted-from-source'), candidate('fw2', 'framework', 'derived-from-framework')],
    },
  })],
  /framework candidate fw1 must use construction_method derived-from-framework/);

probe('candidate declaring the wrong source_pool',
  [baseRecord({
    representation: undefined,
    candidate_pools: {
      ...baseRecord().candidate_pools,
      public: [{ ...candidate('pub1', 'public', 'adapted-from-source'), source_pool: 'expert' }, candidate('pub2', 'public', 'adapted-from-source')],
    },
  })],
  /candidate pub1 sits in the public pool but declares source_pool expert/);

probe('a confirmatory holdout committed to the repository',
  [baseRecord({ representation: undefined, exposure: 'confirmatory-holdout' })],
  /must never be committed to this repository/);

probe('an unregistered benchmark profile',
  [baseRecord({ representation: undefined, benchmark_profile: 'some-future-profile-v2' })],
  /is not registered in schemas\/benchmark-profiles\.json/);

probe('a profile whose pools do not match the record',
  [baseRecord({
    representation: undefined,
    candidate_pools: {
      ...baseRecord().candidate_pools,
      public: [candidate('pub1', 'public', 'adapted-from-source')],
    },
  })],
  /requires public candidates \[pub1, pub2\]; found \[pub1\]/);

probe('an unmarked stipulation in `development`',
  [baseRecord({
    representation: undefined,
    stipulations: [{ id: 'probe-stip', kind: 'numerical', statement: 'Something is fixed.', rationale: 'Because.' }],
  })],
  /does not mark any/);

probe('a released record with no exposure history',
  [baseRecord({
    representation: undefined,
    status: 'released',
    exposure: 'public',
    review: { reviewed_by: ['probe'], reviewed_at: '2026-08-27', notes: 'probe' },
    intended_use: ['protocol-development'],
  })],
  /must record its public exposure in exposure_history/);

// ── companion invariants, driven by the profile, on a development family ────────

const conciseBase = (overrides = {}) => baseRecord(overrides);
const detailedBase = (overrides = {}) => baseRecord({
  record_id: 'probe-case-detailed-v1',
  scenario: 'A probe scenario, at greater length.',
  representation: { form: 'detailed', companion_record_ids: ['probe-case-concise-v1'] },
  ...overrides,
});

probe('a matched development companion pair passes', [conciseBase(), detailedBase()], /^$/);

probe('companion decision questions differing, outside `featured`',
  [conciseBase(), detailedBase({ decision_question: 'Something else entirely?' })],
  /decision_question must be byte-identical/);

probe('companion candidate pools differing, outside `featured`',
  [conciseBase(), detailedBase({
    candidate_pools: {
      ...baseRecord().candidate_pools,
      public: [candidate('pub1', 'public', 'adapted-from-source'), { ...candidate('pub2', 'public', 'adapted-from-source'), text: 'Different.' }],
    },
  })],
  /candidate_pools must be byte-identical/);

probe('companions sharing one scenario',
  [conciseBase(), detailedBase({ scenario: 'A probe scenario.' })],
  /share a scenario/);

probe('a companion link that does not point back',
  [conciseBase(), detailedBase({ representation: { form: 'detailed', companion_record_ids: [] } })],
  /does not name companion probe-case-concise-v1/);

probe('a frozen record with its companion missing',
  [conciseBase({
    status: 'frozen',
    review: { reviewed_by: ['probe'], reviewed_at: '2026-08-27', notes: 'probe' },
    intended_use: ['protocol-development'],
  })],
  /requires all representations \[concise, detailed\]/);

probe('a representation form the profile does not declare',
  [conciseBase(), detailedBase({ representation: { form: 'standard', companion_record_ids: ['probe-case-concise-v1'] } })],
  /is not one of \[concise, detailed\]/);

// ── report ─────────────────────────────────────────────────────────────────────

cleanup();
const failed = results.filter((r) => !r.caught);
for (const r of results) console.log(`  ${r.caught ? 'ok  ' : 'FAIL'}  ${r.label}${r.output ? `\n        ${r.output}` : ''}`);
console.log(`\n${results.length - failed.length}/${results.length} guards demonstrated on non-featured records.`);
if (failed.length) process.exit(1);
