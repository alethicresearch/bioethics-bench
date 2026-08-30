#!/usr/bin/env node
/**
 * Apply source-by-source verified canonical locators to exact citation strings across
 * the Full Corpus. This is provenance-only. Do not place search-result URLs here.
 *
 * Override entries are authoritative for fields they explicitly contain. Setting
 * `doi: null` or `url: null` removes a previously propagated incorrect locator.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalContentHash } from './hash-case.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'benchmark');
const mapPath = join(root, 'docs', 'source-locators', 'source-locator-overrides.json');
const write = process.argv.includes('--write');
const map = JSON.parse(readFileSync(mapPath, 'utf8')).citations || {};

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
    const local = applyField(ref, ov, 'doi') | applyField(ref, ov, 'url');
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
console.log(`✓ locator overrides ${write ? 'applied' : 'current'}: ${refsChanged} source objects across ${recordsChanged} records changed.`);
