#!/usr/bin/env node
/**
 * Enrich Full Corpus source objects with canonical locators already recoverable from
 * the corpus itself. This is provenance-only: it does not change scenario text,
 * candidate text/order, stipulations, representation, profile or task semantics.
 *
 * Rules, in order:
 *  1. Preserve any explicit URL already present.
 *  2. Normalize/infer DOI from an existing doi field, doi.org URL, or DOI in citation text.
 *  3. If no URL exists and a DOI is known, add the canonical https://doi.org/<doi> URL.
 *  4. If no URL exists and a PMID appears in citation text, add canonical PubMed URL.
 *  5. Propagate locators across exact repeated citations within the Full Corpus.
 *
 * No guessed/search URLs are written into canonical records. Citations still lacking a
 * canonical locator are written to docs/source-locators/UNRESOLVED_FULL_CORPUS.md for
 * explicit source-by-source follow-up.
 *
 *   node scripts/enrich-source-locators.mjs --check
 *   node scripts/enrich-source-locators.mjs --write
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalContentHash } from './hash-case.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recordDir = join(root, 'data', 'benchmark');
const reportPath = join(root, 'docs', 'source-locators', 'UNRESOLVED_FULL_CORPUS.md');
const write = process.argv.includes('--write');
const check = process.argv.includes('--check') || !write;

const files = readdirSync(recordDir).filter((f) => f.endsWith('.json')).sort();
const records = files.map((file) => ({ file, data: JSON.parse(readFileSync(join(recordDir, file), 'utf8')) }));

function citationKey(ref) {
  return String(ref?.citation || '').trim().replace(/\s+/g, ' ').toLowerCase();
}
function cleanDoi(v) {
  const s = String(v || '').trim()
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
    .replace(/^doi:\s*/i, '')
    .replace(/[\s).,;]+$/, '');
  return /^10\.\d{4,9}\/.+/i.test(s) ? s : null;
}
function doiFromCitation(c) {
  const m = String(c || '').match(/\b10\.\d{4,9}\/[A-Z0-9._;()/:+-]+/i);
  return m ? cleanDoi(m[0]) : null;
}
function doiFromUrl(url) {
  const m = String(url || '').match(/^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i);
  return m ? cleanDoi(m[1]) : null;
}
function pmidFromCitation(c) {
  return String(c || '').match(/\bPMID\s*[: ]\s*(\d{5,10})\b/i)?.[1] || null;
}
function refsIn(record) {
  const refs = [];
  const add = (arr, where) => (arr || []).forEach((ref, i) => refs.push({ ref, where: `${where}[${i}]` }));
  add(record.scenario_provenance?.sources, 'scenario_provenance.sources');
  for (const pool of ['public','expert','framework']) {
    for (const c of record.candidate_pools?.[pool] || []) add(c.provenance?.sources, `candidate_pools.${pool}.${c.id}.provenance.sources`);
  }
  add(record.references, 'references');
  return refs;
}

// Build a registry first so one exact citation carrying a locator can enrich its repeats.
const registry = new Map();
for (const { data } of records) {
  for (const { ref } of refsIn(data)) {
    const key = citationKey(ref); if (!key) continue;
    const current = registry.get(key) || {};
    const doi = cleanDoi(ref.doi) || doiFromUrl(ref.url) || doiFromCitation(ref.citation) || current.doi || null;
    const url = ref.url || current.url || (doi ? `https://doi.org/${doi}` : null) || (() => {
      const pmid = pmidFromCitation(ref.citation); return pmid ? `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` : null;
    })();
    registry.set(key, { doi, url });
  }
}

let changedRecords = 0;
let changedRefs = 0;
let doiAdded = 0;
let urlAdded = 0;
const unresolved = new Map();

for (const row of records) {
  let changed = false;
  for (const { ref, where } of refsIn(row.data)) {
    const key = citationKey(ref); if (!key) continue;
    const known = registry.get(key) || {};
    const doi = cleanDoi(ref.doi) || doiFromUrl(ref.url) || doiFromCitation(ref.citation) || known.doi || null;
    let url = ref.url || known.url || null;
    if (!url && doi) url = `https://doi.org/${doi}`;
    if (!url) {
      const pmid = pmidFromCitation(ref.citation);
      if (pmid) url = `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
    }
    let refChanged = false;
    if (doi && !ref.doi) { ref.doi = doi; doiAdded++; refChanged = true; }
    if (url && !ref.url) { ref.url = url; urlAdded++; refChanged = true; }
    if (refChanged) { changed = true; changedRefs++; }
    if (!ref.url && !ref.doi) {
      const item = unresolved.get(key) || { citation: ref.citation, type: ref.type || null, occurrences: [] };
      item.occurrences.push(`${row.data.record_id} · ${where}`);
      unresolved.set(key, item);
    }
  }
  if (changed) {
    row.data.content_hash = canonicalContentHash(row.data);
    changedRecords++;
  }
}

const unresolvedItems = [...unresolved.values()].sort((a,b) => a.citation.localeCompare(b.citation));
const report = [
  '# Unresolved Full Corpus source locators',
  '',
  '> Generated by `scripts/enrich-source-locators.mjs`. These citations have no explicit URL/DOI and no DOI/PMID recoverable from their current citation text. They require source-by-source verification; do not replace them with search-result URLs in canonical records.',
  '',
  `- Unique unresolved citations: **${unresolvedItems.length}**`,
  `- Full Corpus records scanned: **${records.length}**`,
  '',
  ...unresolvedItems.flatMap((x, i) => [
    `## ${i + 1}. ${x.type ? `[${x.type}] ` : ''}${x.citation}`,
    '',
    ...x.occurrences.slice(0, 12).map((o) => `- ${o}`),
    ...(x.occurrences.length > 12 ? [`- …and ${x.occurrences.length - 12} more occurrences`] : []),
    ''
  ])
].join('\n') + '\n';

if (write) {
  for (const row of records) writeFileSync(join(recordDir, row.file), JSON.stringify(row.data, null, 2) + '\n');
  mkdirSync(dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, report);
  console.log(`✓ enriched Full Corpus source locators: ${changedRecords}/${records.length} records changed; ${changedRefs} source objects changed; ${doiAdded} DOI fields added; ${urlAdded} URL fields added; ${unresolvedItems.length} unique citations remain.`);
} else if (check) {
  let stale = false;
  for (const row of records) {
    const committed = JSON.parse(readFileSync(join(recordDir, row.file), 'utf8'));
    if (JSON.stringify(committed) !== JSON.stringify(row.data)) stale = true;
  }
  let committedReport = null; try { committedReport = readFileSync(reportPath, 'utf8'); } catch {}
  if (committedReport !== report) stale = true;
  if (stale) {
    console.error(`✗ source locators/report are stale: ${changedRecords} records could be enriched; ${unresolvedItems.length} unique citations would remain. Run --write.`);
    process.exit(1);
  }
  console.log(`✓ source locators current; ${unresolvedItems.length} unique citations remain without canonical locator.`);
}
