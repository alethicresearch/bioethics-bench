#!/usr/bin/env node
/**
 * Check every committed record against the schema and against its own recorded hash.
 *
 * Schemas that nothing runs drift away from the records they describe, and a content
 * hash nobody verifies is a string that looks like provenance. This is what makes both
 * of them true. Run by `npm run validate` and by CI on every push.
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

function kindOf(file, record) {
  if (record.manifest_version || record.release_id) return 'manifest';
  if (record.result_id) return 'result';
  if (record.case_id) return 'case';
  return null;
}

let checked = 0;
const problems = [];

for (const file of [...jsonFilesUnder(join(root, 'data')), ...jsonFilesUnder(join(root, 'releases'))]) {
  const rel = relative(root, file);
  let record;
  try {
    record = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    problems.push(`${rel}: not valid JSON — ${err.message}`);
    continue;
  }

  const kind = kindOf(file, record);
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

  if (kind === 'case' && record.content_hash) {
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
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) across ${checked} record(s):\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error('');
  process.exit(1);
}

console.log(`✓ ${checked} record(s) valid against schema and content hash.`);
