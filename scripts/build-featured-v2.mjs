#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { canonicalContentHash } from './hash-case.mjs';
import { normalizeEditorialProse } from './editorial-prose-normalize.mjs';

const SRC = 'data/featured';
const OUT = 'data/featured-v2';
const EXCLUDED_CASE = 'f08-fourteen-day-embryo-research-limit';
const EDIT_KEYS = new Set(['short_description','decision_question','jurisdiction_context','scenario','text','statement','rationale']);

function editRecord(record) {
  if (record.case_id === EXCLUDED_CASE) return structuredClone(record);
  const out = structuredClone(record);
  const changes = [];
  function walk(node, path = []) {
    if (!node || typeof node !== 'object') return;
    for (const [key, value] of Object.entries(node)) {
      const next = [...path, key];
      if (typeof value === 'string' && EDIT_KEYS.has(key)) {
        const edited = normalizeEditorialProse(value);
        if (edited !== value) {
          changes.push({ path: next.join('.'), before: value, after: edited });
          node[key] = edited;
        }
      } else if (value && typeof value === 'object') {
        walk(value, next);
      }
    }
  }
  walk(out);
  out.record_id = out.record_id.replace(/-v1$/, '-v2');
  out.version = '2.0.0';
  out.representation.companion_record_ids = (out.representation.companion_record_ids || [])
    .map((id) => id.replace(/-v1$/, '-v2'));
  out.exposure_history = [...(out.exposure_history || []), {
    date: '2026-09-24',
    use: 'Published in Featured v2 after a pre-study punctuation/readability normalization. Normative positions, factual stipulations, source identity, candidate identity, and candidate ordering were preserved.',
    reference: 'https://bioethicsbench.com/cases/',
  }];
  delete out.content_hash;
  out.content_hash = canonicalContentHash(out);
  return { record: out, changes };
}

const check = process.argv.includes('--check');
const sourceFiles = readdirSync(SRC).filter((f) => f.endsWith('.json') && f !== 'index.json').sort();
const sourceRecords = sourceFiles.map((f) => JSON.parse(readFileSync(join(SRC, f), 'utf8')));
const built = sourceRecords.map((record) => editRecord(record));
const records = built.map((x) => x.record);
const changes = built.flatMap((x, i) => (x.changes || []).map((change) => ({
  case_id: sourceRecords[i].case_id,
  source_record_id: sourceRecords[i].record_id,
  ...change,
})));

const index = {
  generated_from: 'scripts/build-featured-v2.mjs',
  source_release: 'featured-v2',
  derived_from: 'featured-v1',
  excluded_unchanged_case: EXCLUDED_CASE,
  family_count: new Set(records.map((r) => r.case_id)).size,
  record_count: records.length,
  families: [...new Set(records.map((r) => r.case_id))].map((caseId) => {
    const rs = records.filter((r) => r.case_id === caseId);
    return {
      case_id: caseId,
      title: rs[0].title,
      short_description: rs[0].short_description,
      decision_question: rs[0].decision_question,
      records: rs.map((r) => ({
        form: r.representation.form,
        record_id: r.record_id,
        version: r.version,
        content_hash: r.content_hash,
        path: `data/featured-v2/${r.record_id}.json`,
      })),
    };
  }),
};

if (check) {
  const expected = new Map(records.map((r) => [`${r.record_id}.json`, JSON.stringify(r, null, 2) + '\n']));
  const actualFiles = existsSync(OUT) ? readdirSync(OUT).filter((f) => f.endsWith('.json') && f !== 'index.json' && f !== 'changes.json').sort() : [];
  const problems = [];
  if (JSON.stringify(actualFiles) !== JSON.stringify([...expected.keys()].sort())) problems.push('record file set differs');
  for (const [name, wanted] of expected) {
    const path = join(OUT, name);
    if (!existsSync(path) || readFileSync(path, 'utf8') !== wanted) problems.push(`${name} differs`);
  }
  if (!existsSync(join(OUT,'index.json')) || readFileSync(join(OUT,'index.json'),'utf8') !== JSON.stringify(index,null,2)+'\n') problems.push('index.json differs');
  if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
  console.log(`✓ data/featured-v2 matches generator (${records.length} records)`);
} else {
  mkdirSync(OUT, { recursive: true });
  for (const f of readdirSync(OUT)) if (f.endsWith('.json')) rmSync(join(OUT,f));
  for (const record of records) writeFileSync(join(OUT, `${record.record_id}.json`), JSON.stringify(record,null,2)+'\n');
  writeFileSync(join(OUT,'index.json'), JSON.stringify(index,null,2)+'\n');
  writeFileSync(join(OUT,'changes.json'), JSON.stringify({
    schema: 'bioethics-bench-featured-v2-editorial-changes/1',
    from_release: 'featured-v1',
    to_release: 'featured-v2',
    excluded_case_id: EXCLUDED_CASE,
    scope: 'punctuation/readability only; substantive content preserved',
    change_count: changes.length,
    changes,
  }, null, 2)+'\n');
  console.log(`✓ wrote Featured v2: ${records.length} records, ${changes.length} changed fields; F08 preserved exactly`);
}
