#!/usr/bin/env node
/**
 * Emit Bioethics Bench Featured v2.
 *
 * Featured v2 is a language-normalized successor to released Featured v1. It preserves the
 * twenty-case structure, decision questions, candidate identities, normative positions, source
 * provenance, numerical stipulations, and benchmark profile. The v2 editorial pass improves
 * punctuation and sentence flow across F01-F07 and F09-F20.
 *
 * F08 is deliberately carried forward with text-identical Scenario, Policy, jurisdiction, and
 * stipulation language so its v2 execution remains directly comparable to the historical v1
 * worked example.
 *
 * Featured v1 remains immutable under data/featured/.
 *
 *   node scripts/build-featured-v2.mjs
 *   node scripts/build-featured-v2.mjs --check
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import {
  FAMILIES as V1_FAMILIES,
  BENCHMARK_PROFILE,
  buildRecord as buildV1Record,
} from './build-featured-v1.mjs';
import { canonicalContentHash } from './hash-case.mjs';
import { LANGUAGE_OVERRIDES } from './featured-v2/language-overrides.mjs';

export const SOURCE_RELEASE = 'featured-v2';
export const RECORD_VERSION = '2.0.0';
export const RECORD_STATUS = 'released';
export const RELEASE_DATE = '2026-09-24';
export const F08_CASE_ID = 'f08-fourteen-day-embryo-research-limit';

export const REVIEW = Object.freeze({
  reviewed_by: ['research/editorial reviewer, Alethic Research'],
  reviewed_at: RELEASE_DATE,
  notes: 'Featured v2 language-normalization review completed before any Featured-20 v2 study execution. '
    + 'The pass revised punctuation, sentence boundaries, and local syntax across F01-F07 and F09-F20 '
    + 'without changing decision questions, Policy identities, represented normative positions, source '
    + 'provenance, numerical stipulations, or the 2x2x2 benchmark structure. F08 Scenario, Policy, '
    + 'jurisdiction, and stipulation wording was carried forward text-identically from Featured v1 to '
    + 'preserve continuity with the historical F08 worked example.',
});

const clone = (value) => JSON.parse(JSON.stringify(value));

function findCandidate(family, pool, id) {
  const found = family.candidates?.[pool]?.find((candidate) => candidate.id === id);
  if (!found) throw new Error(`${family.caseId}: missing ${pool} candidate ${id} required by v2 override`);
  return found;
}

function applyOverride(v1Family) {
  const family = clone(v1Family);
  const override = LANGUAGE_OVERRIDES[family.caseId];
  if (!override) return family;

  for (const key of ['title', 'shortDescription', 'decisionQuestion', 'jurisdictionContext', 'concise', 'detailed']) {
    if (Object.hasOwn(override, key)) family[key] = override[key];
  }

  for (const [pool, byId] of Object.entries(override.candidates || {})) {
    for (const [id, text] of Object.entries(byId || {})) {
      findCandidate(family, pool, id).text = text;
    }
  }

  for (const [id, patch] of Object.entries(override.stipulations || {})) {
    const stipulation = (family.stipulations || []).find((entry) => entry.id === id);
    if (!stipulation) throw new Error(`${family.caseId}: missing stipulation ${id} required by v2 override`);
    Object.assign(stipulation, patch);
  }

  return family;
}

export const FAMILIES = V1_FAMILIES.map(applyOverride);

function textSnapshot(family) {
  return {
    title: family.title,
    shortDescription: family.shortDescription,
    decisionQuestion: family.decisionQuestion,
    jurisdictionContext: family.jurisdictionContext ?? null,
    concise: family.concise,
    detailed: family.detailed,
    stipulations: clone(family.stipulations || []),
    candidates: {
      public: family.candidates.public.map(({ id, text }) => ({ id, text })),
      expert: family.candidates.expert.map(({ id, text }) => ({ id, text })),
      framework: family.candidates.framework.map(({ id, text }) => ({ id, text })),
    },
  };
}

const v1F08 = V1_FAMILIES.find((family) => family.caseId === F08_CASE_ID);
const v2F08 = FAMILIES.find((family) => family.caseId === F08_CASE_ID);
if (!v1F08 || !v2F08 || JSON.stringify(textSnapshot(v1F08)) !== JSON.stringify(textSnapshot(v2F08))) {
  throw new Error('Featured v2 must preserve all F08 authored text exactly');
}

function editorialStrings(family) {
  return [
    family.shortDescription,
    family.decisionQuestion,
    family.jurisdictionContext,
    family.concise,
    family.detailed,
    ...(family.stipulations || []).flatMap((entry) => [entry.statement, entry.rationale]),
    ...family.candidates.public.map((candidate) => candidate.text),
    ...family.candidates.expert.map((candidate) => candidate.text),
    ...family.candidates.framework.map((candidate) => candidate.text),
  ].filter((value) => typeof value === 'string');
}

for (const family of FAMILIES) {
  if (family.caseId === F08_CASE_ID) continue;
  const remaining = editorialStrings(family).filter((text) => text.includes(';'));
  if (remaining.length) {
    throw new Error(`${family.caseId}: Featured v2 language pass left ${remaining.length} semicolon-bearing authored field(s)`);
  }
}

function recordId(caseId, form) {
  return `${caseId}-${form}-v2`;
}

export function buildRecord(family, form) {
  const base = buildV1Record(family, form);
  const record = {
    ...base,
    record_id: recordId(family.caseId, form),
    version: RECORD_VERSION,
    representation: {
      ...base.representation,
      companion_record_ids: [recordId(family.caseId, form === 'concise' ? 'detailed' : 'concise')],
    },
    status: RECORD_STATUS,
    review: REVIEW,
    exposure_history: [{
      date: RELEASE_DATE,
      use: 'Published as part of the Bioethics Bench Featured v2 release after a pre-execution language-normalization pass. '
        + 'The collection remains public/exposed and is not confirmatory-holdout material.',
      reference: 'https://github.com/alethicresearch/bioethics-bench/tree/main/data/featured-v2',
    }],
  };
  return { ...record, content_hash: canonicalContentHash(record) };
}

export function buildAll() {
  return FAMILIES.flatMap((family) => ['concise', 'detailed'].map((form) => buildRecord(family, form)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const check = process.argv.includes('--check');
  const dir = join(process.cwd(), 'data', 'featured-v2');
  const records = buildAll();

  if (check) {
    const onDisk = existsSync(dir)
      ? readdirSync(dir).filter((file) => file.endsWith('.json') && file !== 'index.json').sort()
      : [];
    const expected = records.map((record) => `${record.record_id}.json`).sort();
    const problems = [];
    if (JSON.stringify(onDisk) !== JSON.stringify(expected)) {
      problems.push(`file set differs\n  on disk: ${onDisk.length} file(s)\n  expected: ${expected.length} file(s)`);
    }
    for (const record of records) {
      const file = join(dir, `${record.record_id}.json`);
      if (!existsSync(file)) continue;
      const actual = readFileSync(file, 'utf8');
      const wanted = `${JSON.stringify(record, null, 2)}\n`;
      if (actual !== wanted) problems.push(`${record.record_id}.json differs from the v2 generator output`);
    }
    if (problems.length) {
      console.error('\ndata/featured-v2 is out of date with scripts/build-featured-v2.mjs:\n');
      for (const problem of problems) console.error(`  ✗ ${problem}`);
      console.error('\nRun: node scripts/build-featured-v2.mjs\n');
      process.exit(1);
    }
    console.log(`✓ data/featured-v2 matches the generator (${records.length} records).`);
  } else {
    mkdirSync(dir, { recursive: true });
    for (const stale of readdirSync(dir).filter((file) => file.endsWith('.json') && file !== 'index.json')) {
      rmSync(join(dir, stale));
    }
    for (const record of records) {
      writeFileSync(join(dir, `${record.record_id}.json`), `${JSON.stringify(record, null, 2)}\n`);
    }
    const index = {
      generated_from: 'scripts/build-featured-v2.mjs',
      source_release: SOURCE_RELEASE,
      derived_from: 'featured-v1',
      editorial_scope: 'language normalization only; F08 authored text unchanged',
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
        records: ['concise', 'detailed'].map((form) => {
          const record = records.find((entry) => entry.record_id === recordId(family.caseId, form));
          return {
            form,
            record_id: record.record_id,
            version: record.version,
            content_hash: record.content_hash,
            path: `data/featured-v2/${record.record_id}.json`,
          };
        }),
      })),
    };
    writeFileSync(join(dir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
    console.log(`✓ wrote ${records.length} Featured v2 records for ${FAMILIES.length} cases to data/featured-v2/`);
  }
}
