#!/usr/bin/env node
// Builds the Full Corpus executable manifest from the records on disk.
//
// Featured v1 and the Full Corpus are separate lineages released as separate
// manifests, so this deliberately covers data/benchmark only and never mixes in
// Featured records. Every entry carries the record's own committed content hash,
// so a manifest that has drifted from the corpus fails rather than shipping a
// stale pin. Run with --write to regenerate; the default checks.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recordDir = join(root, 'data', 'benchmark');
const PROFILES = JSON.parse(readFileSync(join(root, 'schemas', 'benchmark-profiles.json'), 'utf8')).profiles;
const outDir = join(root, 'releases', 'full-corpus-v1-completion-candidate');
const outPath = join(outDir, 'manifest.json');

const files = readdirSync(recordDir).filter((f) => f.endsWith('.json')).sort();
const records = [];
const families = new Set();
const problems = [];

for (const file of files) {
  const record = JSON.parse(readFileSync(join(recordDir, file), 'utf8'));
  if (record.collection !== 'benchmark') {
    problems.push(`${file}: collection is "${record.collection}", not "benchmark"`);
    continue;
  }
  families.add(/^m\d{3}/.exec(file)?.[0] ?? file);
  records.push({
    record_id: record.record_id,
    version: record.version,
    content_hash: record.content_hash,
    path: `data/benchmark/${file}`,
    collection: record.collection,
    benchmark_profile: record.benchmark_profile ?? null,
    representation: record.representation?.form ?? null,
    // Resolved, not copied. A record may leave required_aggregation unset and take it
    // from its profile, which most of this corpus does. Publishing the raw field would
    // pin null for those and tell a consumer reading only the manifest that no
    // aggregation is required — on records whose asymmetric shape makes Mean mandatory.
    required_aggregation: record.required_aggregation
      ?? PROFILES[record.benchmark_profile]?.required_aggregation
      ?? null,
    required_aggregation_source: record.required_aggregation
      ? 'record'
      : (PROFILES[record.benchmark_profile]?.required_aggregation ? 'profile' : null),
  });
}

// Two matched representations per executable family, or the manifest is not a
// description of the corpus it claims to pin.
for (const family of families) {
  const forms = records.filter((r) => r.record_id.startsWith(family)).map((r) => r.representation).sort();
  if (forms.length !== 2 || forms[0] !== 'concise' || forms[1] !== 'detailed') {
    problems.push(`${family}: expected one concise/detailed pair, found [${forms.join(', ')}]`);
  }
}

if (problems.length) {
  for (const p of problems) console.error(`✗ ${p}`);
  process.exit(1);
}

const manifest = {
  manifest_version: '1.0.0',
  release_id: 'full-corpus-v1-completion-candidate',
  release_status: 'release-candidate',
  created_at: '2026-08-28',
  qccs_protocol_id: 'qccs-v1',
  qccs_protocol_version: '1.0.0',
  qccs_protocol_hash: null,
  scoring_mode: 'conv+ 0-100',
  content_hash_algorithm: 'jcs-sha256',
  schema_versions: { case: '1.0.0', manifest: '1.0.0' },
  notes: [
    `Full Corpus executable subset: ${families.size} case families, ${records.length} records,`,
    'two matched representations each. Separate from the Featured v1 release and from the fixed',
    'paper regression; a record may not carry a profile of the other lineage.',
    'Release status is release-candidate, not released: every record is status "draft" with',
    'reviewed_by_human false, and independent review of source-to-policy fidelity has not yet',
    'happened. The executable count is an output of the disposition process recorded in',
    'docs/full-corpus/FULL_CORPUS_DISPOSITION_LEDGER.md, not a target that was aimed at.',
    'M001 is released separately as Featured F01 and is deliberately not duplicated here.',
  ].join(' '),
  records,
};

const serialized = JSON.stringify(manifest, null, 2) + '\n';

if (process.argv.includes('--write')) {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, serialized);
  console.log(`✓ wrote manifest: ${families.size} families, ${records.length} records.`);
} else {
  let committed = null;
  try {
    committed = readFileSync(outPath, 'utf8');
  } catch {}
  if (committed !== serialized) {
    console.error('✗ Full Corpus manifest is stale. Run: node scripts/build-full-corpus-manifest.mjs --write');
    process.exit(1);
  }
  console.log(`✓ Full Corpus manifest pins ${families.size} families and ${records.length} records.`);
}
