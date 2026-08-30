#!/usr/bin/env node
/**
 * Apply source-by-source verified canonical locators to exact citation strings across
 * the Full Corpus. This is provenance-only. Do not place search-result URLs here.
 *
 * Override entries are authoritative for fields they explicitly contain. Setting
 * `doi: null` or `url: null` removes a previously propagated incorrect locator.
 * Multiple source-locator-overrides*.json files are merged so verified batches can be
 * added without rewriting one large registry. Conflicting non-identical fields fail.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalContentHash } from './hash-case.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'benchmark');
const registryDir = join(root, 'docs', 'source-locators');
const write = process.argv.includes('--write');

const registryFiles = readdirSync(registryDir)
  .filter((f) => /^source-locator-overrides(?:-[^.]+)?\.json$/.test(f))
  .sort();
const map = {};
for (const file of registryFiles) {
  const doc = JSON.parse(readFileSync(join(registryDir, file), 'utf8'));
  for (const [citation, ov] of Object.entries(doc.citations || {})) {
    if (!map[citation]) { map[citation] = { ...ov }; continue; }
    for (const [field, value] of Object.entries(ov)) {
      if (Object.prototype.hasOwnProperty.call(map[citation], field)
          && JSON.stringify(map[citation][field]) !== JSON.stringify(value)) {
        throw new Error(`conflicting locator override for ${JSON.stringify(citation)} field ${field}: ${file}`);
      }
      map[citation][field] = value;
    }
  }
}

function refsIn(record) {
  const refs = [];
  const add = (arr) => (arr || []).forEach((ref) => refs.push(ref));
  add(record.scenario_provenance?.sources);
  for (const pool of ['public','expert','framework']) {
    for (const c of record.candidate_pools?.[pool] || []) add(c.provenance?.sources);
  }
  add(record.references);
  return refs;
}
function applyField(ref, ov, field) {
  if (!Object.prototype.hasOwnProperty.call(ov, field)) return false;
  const target = ov[field];
  const current = Object.prototype.hasOwnProperty.call(ref, field) ? ref[field] : undefined;
  if ((current ?? null) === (target ?? null)) return false;
  if (target == null) delete ref[field];
  else ref[field] = target;
  return true;
}

let recordsChanged = 0, refsChanged = 0;
for (const file of readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  const path = join(dir, file);
  const record = JSON.parse(readFileSync(path, 'utf8'));
  let changed = false;
  for (const ref of refsIn(record)) {
    const ov = map[ref.citation];
    if (!ov) continue;
    const local = Boolean(applyField(ref, ov, 'doi') | applyField(ref, ov, 'url'));
    if (local) { refsChanged++; changed = true; }
  }
  if (changed) {
    record.content_hash = canonicalContentHash(record);
    recordsChanged++;
    if (write) writeFileSync(path, JSON.stringify(record, null, 2) + '\n');
  }
}

if (!write && (recordsChanged || refsChanged)) {
  console.error(`✗ ${refsChanged} source objects in ${recordsChanged} records need verified locator overrides applied. Run --write.`);
  process.exit(1);
}
console.log(`✓ locator overrides ${write ? 'applied' : 'current'} from ${registryFiles.length} registry file(s): ${refsChanged} source objects across ${recordsChanged} records changed.`);
