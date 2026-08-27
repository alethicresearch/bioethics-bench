#!/usr/bin/env node
/**
 * The canonical content hash for a Bioethics Bench record.
 *
 * Reference implementation of the rule in docs/VERSIONING.md. JCS (RFC 8785) then
 * SHA-256, over the whole record minus `content_hash` itself. Kept dependency-free so
 * the rule can be reimplemented from this file alone.
 *
 *   node scripts/hash-case.mjs <file.json>          print the hash
 *   node scripts/hash-case.mjs --write <file.json>  write it into the record
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

/** RFC 8785 JSON Canonicalization Scheme. */
export function jcs(value) {
  if (value === null || typeof value === 'boolean') return JSON.stringify(value);
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error('JCS: non-finite number');
    return JSON.stringify(value);
  }
  if (typeof value === 'string') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(jcs).join(',')}]`;
  if (typeof value === 'object') {
    // Sort by UTF-16 code unit, which is what Array.prototype.sort does by default.
    const keys = Object.keys(value).filter((k) => value[k] !== undefined).sort();
    return `{${keys.map((k) => `${JSON.stringify(k)}:${jcs(value[k])}`).join(',')}}`;
  }
  throw new Error(`JCS: unserializable value of type ${typeof value}`);
}

export function canonicalContentHash(record) {
  const { content_hash: _omit, ...rest } = record;
  return `sha256:${createHash('sha256').update(jcs(rest), 'utf8').digest('hex')}`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const write = process.argv.includes('--write');
  const file = process.argv.slice(2).find((a) => !a.startsWith('--'));
  if (!file) {
    console.error('usage: node scripts/hash-case.mjs [--write] <file.json>');
    process.exit(2);
  }
  const record = JSON.parse(readFileSync(file, 'utf8'));
  const hash = canonicalContentHash(record);
  if (write) {
    writeFileSync(file, `${JSON.stringify({ ...record, content_hash: hash }, null, 2)}\n`);
    console.log(`${file}: ${hash} (written)`);
  } else {
    console.log(hash);
  }
}
