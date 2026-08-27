#!/usr/bin/env node
/**
 * Emit the 40 Featured v1 records — 20 case families × {concise, detailed}.
 *
 * The companion invariants (byte-identical decision question, byte-identical candidate
 * pools, reciprocal companion links) are structural here rather than maintained by hand:
 * both records are generated from one family object, so the only way they can differ in
 * a field that must match is a bug in this file, which npm run validate then catches.
 *
 *   node scripts/build-featured-v1.mjs            write data/featured/*.json
 *   node scripts/build-featured-v1.mjs --check    fail if the tree is out of date
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';
import { RIGHTS } from './featured-v1/refs.mjs';
import { F01_F05 } from './featured-v1/f01-f05.mjs';
import { F06_F10 } from './featured-v1/f06-f10.mjs';
import { F11_F15 } from './featured-v1/f11-f15.mjs';
import { F16_F20 } from './featured-v1/f16-f20.mjs';

export const FAMILIES = [...F01_F05, ...F06_F10, ...F11_F15, ...F16_F20];

export const BENCHMARK_PROFILE = 'featured-core-2x2x2-v1';

/**
 * Lifecycle position of every record in this build.
 *
 * Advanced deliberately, one step at a time, so the corpus passes through each state as a
 * commit rather than jumping: editorial-review → reviewed → frozen → released. Lifecycle
 * metadata is part of the research object, so each transition changes every content hash;
 * that is correct, and it is why the execution-relevant content is digested separately and
 * checked across the whole sequence.
 */
export const RECORD_STATUS = 'frozen';

/**
 * The review that moved the corpus past editorial-review. Roles rather than names: this
 * records which function signed off, and no individual is attributed a sign-off they did
 * not personally give.
 */
export const REVIEW = Object.freeze({
  reviewed_by: ['research/editorial reviewer, Alethic Research'],
  reviewed_at: '2026-08-27',
  notes: 'Featured v1 editorial review across three iterations: case-by-case source review against '
    + 'SOURCE_LEDGER.md; scenario and decision-question review; candidate source-class and provenance '
    + 'review, including replacement of the F05 public pair with legalization policy-attitude evidence '
    + 'and correction of near-entailing pairs in F01 and F04; a matched-policy-granularity audit across '
    + 'all twenty families; and the addition of provenance-marked benchmark stipulations to six families. '
    + 'Deterministic checks at review: generator parity, dossier/record sync across 180 fields, schema, '
    + 'content hashes, Featured companion invariants, and 1040 corpus pipeline checks. '
    + 'No model execution formed part of this review: no QCCS results existed for these records at the '
    + 'time it was given, and the review concerns the represented objects, not any measurement of them.',
});
export const SCHEMA_VERSION = '1.0.0';
export const RECORD_VERSION = '1.0.0';
export const AS_OF_DATE = '2026-08-26';

const FORMS = ['concise', 'detailed'];

function recordId(caseId, form) {
  return `${caseId}-${form}-v1`;
}

function candidate(pool, c) {
  return {
    id: c.id,
    text: c.text,
    source_pool: pool,
    provenance: {
      construction_method: c.method,
      summary: c.summary,
      sources: c.sources,
    },
  };
}

/**
 * The candidate pools are built once per family and shared by both companions by
 * reference, so `concise` and `detailed` cannot drift apart in this dimension.
 */
function candidatePools(family) {
  return {
    public: family.candidates.public.map((c) => candidate('public', c)),
    expert: family.candidates.expert.map((c) => candidate('expert', c)),
    framework: family.candidates.framework.map((c) => candidate('framework', c)),
  };
}

function scenarioProvenance(family, form) {
  const stipulated = (family.stipulations || []).length > 0
    ? ' The scenario states editorial benchmark stipulations, listed in this record\u2019s `stipulations` field: constructed assumptions that make the decision determinate enough to execute and to perturb. They are properties of the benchmark, not claims about the world.'
    : '';
  const shape = form === 'concise'
    ? 'The concise representation states the decision-relevant facts in minimal form; it is the default loader representation.'
    : 'The detailed representation unpacks facts, uncertainty, stakeholders and institutional authority already implicit in the concise companion. It adds no morally decisive fact and does not change the decision being represented.';
  return {
    construction_method: 'adapted-from-source',
    summary: `Independently constructed Bench representation of the case family, written for this record from the source material listed here. No casebook or article prose is reproduced. ${shape}${stipulated}`,
    sources: family.scenarioSources,
    adapted_not_reproduced: true,
  };
}

export function buildRecord(family, form) {
  const pools = candidatePools(family);
  const record = {
    record_id: recordId(family.caseId, form),
    case_id: family.caseId,
    version: RECORD_VERSION,
    title: family.title,
    short_description: family.shortDescription,
    decision_question: family.decisionQuestion,
    representation: {
      form,
      companion_record_ids: FORMS.filter((f) => f !== form).map((f) => recordId(family.caseId, f)),
      notes: 'Concise and detailed are companion representations of one case family. They share the decision question and the executable candidate set exactly; only scenario detail differs. Neither is the correct or superior representation of the case.',
    },
    benchmark_profile: BENCHMARK_PROFILE,
    jurisdiction_context: family.jurisdictionContext ?? null,
    // Shared by reference between companions: both representations state the same
    // factual situation, so a stipulation cannot hold in one and not the other.
    stipulations: family.stipulations ?? [],
    as_of_date: AS_OF_DATE,
    domains: family.domains,
    tags: family.tags,
    scenario: form === 'concise' ? family.concise : family.detailed,
    scenario_provenance: scenarioProvenance(family, form),
    candidate_pools: pools,
    collection: 'featured',
    exposure: 'public',
    status: RECORD_STATUS,
    intended_use: ['teaching', 'application-demonstration', 'paper-illustration', 'protocol-development', 'robustness-testing'],
    // The schema requires a review record before a record may be frozen or released, which
    // is the point: nothing reaches those states without one.
    ...(RECORD_STATUS === 'editorial-review' ? {} : { review: REVIEW }),
    ...(RECORD_STATUS === 'released'
      ? {
        exposure_history: [{
          date: '2026-08-27',
          use: 'Published as part of the Bioethics Bench Featured v1 release: browsable at bioethicsbench.com/cases/ '
            + 'and loadable in the SACRE application. Public from this date, and therefore permanently ineligible '
            + 'as confirmatory-holdout material.',
          reference: 'https://bioethicsbench.com/cases/',
        }],
      }
      : {}),
    rights: RIGHTS,
    references: family.references,
    schema_version: SCHEMA_VERSION,
  };
  return { ...record, content_hash: canonicalContentHash(record) };
}

export function buildAll() {
  return FAMILIES.flatMap((family) => FORMS.map((form) => buildRecord(family, form)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const check = process.argv.includes('--check');
  const dir = join(process.cwd(), 'data/featured');
  const records = buildAll();

  if (check) {
    const onDisk = existsSync(dir)
      ? readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json').sort()
      : [];
    const expected = records.map((r) => `${r.record_id}.json`).sort();
    const problems = [];
    if (JSON.stringify(onDisk) !== JSON.stringify(expected)) {
      problems.push(`file set differs\n  on disk: ${onDisk.length} file(s)\n  expected: ${expected.length} file(s)`);
    }
    for (const record of records) {
      const file = join(dir, `${record.record_id}.json`);
      if (!existsSync(file)) continue;
      const actual = readFileSync(file, 'utf8');
      const wanted = `${JSON.stringify(record, null, 2)}\n`;
      if (actual !== wanted) problems.push(`${record.record_id}.json differs from the generator output`);
    }
    if (problems.length) {
      console.error(`\ndata/featured is out of date with scripts/build-featured-v1.mjs:\n`);
      for (const p of problems) console.error(`  ✗ ${p}`);
      console.error('\nRun: node scripts/build-featured-v1.mjs\n');
      process.exit(1);
    }
    console.log(`✓ data/featured matches the generator (${records.length} records).`);
  } else {
    mkdirSync(dir, { recursive: true });
    for (const stale of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'index.json')) {
      rmSync(join(dir, stale));
    }
    for (const record of records) {
      writeFileSync(join(dir, `${record.record_id}.json`), `${JSON.stringify(record, null, 2)}\n`);
    }
    // A small index so a static page can enumerate the corpus without a directory listing.
    const index = {
      generated_from: 'scripts/build-featured-v1.mjs',
      benchmark_profile: BENCHMARK_PROFILE,
      status: RECORD_STATUS,
      family_count: FAMILIES.length,
      record_count: records.length,
      families: FAMILIES.map((family) => ({
        case_id: family.caseId,
        title: family.title,
        short_description: family.shortDescription,
        decision_question: family.decisionQuestion,
        domains: family.domains,
        tags: family.tags,
        stipulations: family.stipulations ?? [],
        records: FORMS.map((form) => {
          const record = records.find((r) => r.record_id === recordId(family.caseId, form));
          return {
            form,
            record_id: record.record_id,
            version: record.version,
            content_hash: record.content_hash,
            path: `data/featured/${record.record_id}.json`,
          };
        }),
      })),
    };
    writeFileSync(join(dir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
    console.log(`✓ wrote ${records.length} records for ${FAMILIES.length} families to data/featured/`);
  }
}
