#!/usr/bin/env node
/**
 * Self-test for the validator, against collections other than `featured` and against the
 * benchmark-profile registry itself.
 *
 * Every guard here is demonstrated on a deliberately broken development object or registry
 * entry, so broadening the corpus cannot silently narrow the checks again.
 *
 *   node scripts/validate-selftest.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';

const root = process.cwd();
const dir = join(root, 'data/development');
const profileFile = join(root, 'schemas/benchmark-profiles.json');
const created = [];

function ref(citation) {
  return { citation, type: 'other' };
}

function candidate(id, pool, method, extra = {}) {
  const { sources = [ref('A probe source.')], ...rest } = extra;
  return {
    id,
    text: `Represented policy ${id}.`,
    source_pool: pool,
    ...rest,
    provenance: { construction_method: method, summary: 'probe', sources },
  };
}

/** The default policy basis for each pool, for probes that only care about one candidate. */
const BASIS = {
  public: 'direct-policy-evidence',
  expert: 'direct-policy-evidence',
  framework: 'framework-derived-policy',
};

/** A minimal, valid Full Corpus record: `benchmark` collection, Full Corpus profile, every candidate labelled. */
function benchmarkRecord(overrides = {}) {
  const base = baseRecord({ representation: undefined });
  const pools = Object.fromEntries(Object.entries(base.candidate_pools).map(
    ([pool, cs]) => [pool, cs.map((c) => ({ ...c, policy_basis: BASIS[pool] }))],
  ));
  const record = {
    ...base,
    collection: 'benchmark',
    benchmark_profile: 'full-corpus-2x2x2-v1',
    candidate_pools: pools,
    ...overrides,
  };
  delete record.content_hash;
  return { ...record, content_hash: canonicalContentHash(record) };
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
  // Named by record_id, except when a probe deliberately writes two records claiming one id —
  // that probe needs both files on disk for the validator to see the clash at all.
  let file = join(dir, `${record.record_id}.json`);
  for (let n = 2; existsSync(file); n += 1) file = join(dir, `${record.record_id}-dup${n}.json`);
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
function recordResult(label, output, expected) {
  const caught = expected.test(output);
  results.push({ label, caught, output: caught ? '' : output.split('\n').filter((l) => l.includes('✗')).slice(0, 2).join(' | ') });
}

function probe(label, records, expected) {
  cleanup();
  for (const r of records) write(r);
  const output = runValidator();
  cleanup();
  recordResult(label, output, expected);
}

function probeProfileRegistry(label, mutate, expected) {
  cleanup();
  const original = readFileSync(profileFile, 'utf8');
  try {
    const registry = JSON.parse(original);
    mutate(registry);
    writeFileSync(profileFile, `${JSON.stringify(registry, null, 2)}\n`);
    recordResult(label, runValidator(), expected);
  } finally {
    writeFileSync(profileFile, original);
    cleanup();
  }
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

// ── profile-registry invariants ─────────────────────────────────────────────────

probeProfileRegistry(
  'an asymmetric profile without required Mean aggregation',
  (registry) => { delete registry.profiles['full-corpus-1x2x2-mean-v1'].required_aggregation; },
  /require required_aggregation "mean"/,
);

probeProfileRegistry(
  'a profile that declares no construction lineage',
  (registry) => { delete registry.profiles['full-corpus-2x2x2-v1'].lineage; },
  /lineage must be one of \[featured, full-corpus\]/,
);

probe('a Full Corpus record carrying a Featured-lineage profile',
  [baseRecord({
    representation: undefined,
    collection: 'benchmark',
    benchmark_profile: 'featured-core-2x2x2-v1',
  })],
  /collection "benchmark" is full-corpus lineage, but benchmark_profile "featured-core-2x2x2-v1" is featured lineage/);

// ── policy basis, on Full Corpus records ────────────────────────────────────────

probe('a labelled Full Corpus record passes', [benchmarkRecord()], /^$/);

probe('a Full Corpus candidate with no policy_basis',
  [benchmarkRecord({
    candidate_pools: (() => {
      const pools = benchmarkRecord().candidate_pools;
      const [, ...rest] = pools.public;
      const { policy_basis: _drop, ...bare } = pools.public[0];
      return { ...pools, public: [bare, ...rest] };
    })(),
  })],
  /candidate pub1 declares no policy_basis/);

probe('a framework candidate labelled anything but framework-derived',
  [benchmarkRecord({
    candidate_pools: (() => {
      const pools = benchmarkRecord().candidate_pools;
      const [first, ...rest] = pools.framework;
      return { ...pools, framework: [{ ...first, policy_basis: 'direct-policy-evidence' }, ...rest] };
    })(),
  })],
  /framework candidate fw1 declares policy_basis "direct-policy-evidence"/);

probe('a direct-policy-evidence candidate citing no source',
  [benchmarkRecord({
    candidate_pools: (() => {
      const pools = benchmarkRecord().candidate_pools;
      const [, ...rest] = pools.expert;
      return {
        ...pools,
        expert: [{ ...candidate('exp1', 'expert', 'adapted-from-source', { sources: [], policy_basis: 'direct-policy-evidence' }) }, ...rest],
      };
    })(),
  })],
  /policy_basis "direct-policy-evidence" with no provenance sources/);

probe('an editorial public candidate that does not declare itself synthetic',
  [benchmarkRecord({
    candidate_pools: (() => {
      const pools = benchmarkRecord().candidate_pools;
      const [, ...rest] = pools.public;
      return { ...pools, public: [candidate('pub1', 'public', 'editorial', { policy_basis: 'direct-policy-evidence' }), ...rest] };
    })(),
  })],
  /construction_method "editorial", in collection "benchmark"/);

// The relaxation itself: a declared author-constructed comparator is allowed, sources and all.
probe('a declared synthetic public comparator with no sources passes',
  [benchmarkRecord({
    candidate_pools: (() => {
      const pools = benchmarkRecord().candidate_pools;
      const [, ...rest] = pools.public;
      return {
        ...pools,
        public: [candidate('pub1', 'public', 'editorial', { sources: [], policy_basis: 'synthetic-author-constructed-policy' }), ...rest],
      };
    })(),
  })],
  /^$/);

// ── frames: several candidate framings of one case family ───────────────────────

/** A concise/detailed pair for one frame of one family. */
function framePair(frameId, frameVersion, shape, overrides = {}) {
  const ids = frameId ? { frame_id: frameId, frame_version: frameVersion } : {};
  const suffix = frameId ? `-${frameId}` : '';
  const concise = naturalRecord(shape, {
    ...ids,
    record_id: `probe-case${suffix}-concise-v1`,
    representation: { form: 'concise', companion_record_ids: [`probe-case${suffix}-detailed-v1`] },
    ...overrides,
  });
  const detailed = naturalRecord(shape, {
    ...ids,
    record_id: `probe-case${suffix}-detailed-v1`,
    scenario: 'A probe scenario, at greater length.',
    representation: { form: 'detailed', companion_record_ids: [`probe-case${suffix}-concise-v1`] },
    ...overrides,
  });
  return [concise, detailed];
}

probe('two frames of one family, each a complete pair, pass',
  [
    ...framePair('direct', '1.0.0', { public: 2, expert: 1, framework: 2 }, { required_aggregation: 'mean' }),
    ...framePair('source-informed', '1.0.0', { public: 3, expert: 3, framework: 3 }),
  ],
  /^$/);

probe('two concise records inside one frame',
  [
    ...framePair('direct', '1.0.0', { public: 3, expert: 3, framework: 3 }),
    naturalRecord({ public: 3, expert: 3, framework: 3 }, {
      frame_id: 'direct',
      frame_version: '1.0.0',
      record_id: 'probe-case-direct-concise-v2',
      representation: { form: 'concise', companion_record_ids: ['probe-case-direct-detailed-v1'] },
    }),
  ],
  /2 concise representations/);

probe('a frame named without a version',
  [naturalRecord({ public: 3, expert: 3, framework: 3 }, { frame_id: 'direct' })],
  /frame_id and frame_version must be declared together/);

probe('two records claiming one record_id',
  [
    naturalRecord({ public: 3, expert: 3, framework: 3 }, { record_id: 'probe-clash', representation: undefined }),
    naturalRecord({ public: 2, expert: 2, framework: 2 }, {
      record_id: 'probe-clash', case_id: 'probe-other', representation: undefined,
    }),
  ],
  /record_id "probe-clash" is already used by/);

// ── natural geometry: records that name no registered profile ───────────────────

/** A `benchmark` record of any shape, naming no profile. Pools are built from a shape spec. */
function naturalRecord(shape, overrides = {}) {
  const prefix = { public: 'pub', expert: 'exp', framework: 'fw' };
  const method = { public: 'adapted-from-source', expert: 'adapted-from-source', framework: 'derived-from-framework' };
  const pools = Object.fromEntries(Object.entries(shape).map(([pool, n]) => [
    pool,
    Array.from({ length: n }, (_, i) => candidate(`${prefix[pool]}${i + 1}`, pool, method[pool], { policy_basis: BASIS[pool] })),
  ]));
  const record = benchmarkRecord({ candidate_pools: pools, ...overrides });
  delete record.benchmark_profile;
  delete record.content_hash;
  return { ...record, content_hash: canonicalContentHash(record) };
}

probe('a 3x2x4 record naming no profile, declaring Mean, passes',
  [naturalRecord({ public: 3, expert: 2, framework: 4 }, { required_aggregation: 'mean' })], /^$/);

probe('a symmetric 3x3x3 record naming no profile passes without declaring aggregation',
  [naturalRecord({ public: 3, expert: 3, framework: 3 })], /^$/);

probe('an asymmetric record that declares no aggregation',
  [naturalRecord({ public: 3, expert: 1, framework: 4 })],
  /require Mean aggregation; the record declares none/);

probe('an asymmetric record that declares Sum',
  [naturalRecord({ public: 2, expert: 1, framework: 2 }, { required_aggregation: 'sum' })],
  /require Mean aggregation; the record declares sum/);

probe('a companion contract still applies with no profile to drive it',
  [naturalRecord({ public: 3, expert: 3, framework: 3 }, {
    representation: { form: 'standard', companion_record_ids: [] },
  })],
  /is not one of \[concise, detailed\] for the corpus representation contract/);

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
console.log(`\n${results.length - failed.length}/${results.length} guards demonstrated across non-featured records and the profile registry.`);
if (failed.length) process.exit(1);
