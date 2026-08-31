#!/usr/bin/env node
/**
 * Give the case-level citations a locator a reader can follow.
 *
 * The references sections of the case files are prose. Where a citation carries a PMID, a DOI or
 * a URL the build turns it into a link; the rest fall back to a scholarly search, which finds the
 * source often enough but is a guess presented as a link. This asks Crossref for the ones that
 * look like articles and keeps only unambiguous answers: a title that all but matches, a year
 * within one of the year the citation states. Guidelines, statutes, books and institutional
 * documents are not in Crossref in any reliable way and stay for manual lookup.
 *
 * Accepted matches are written to docs/source-locators/case-source-overrides.json, which the
 * case-source build reads. Nothing here edits a case file.
 *
 *   node scripts/resolve-case-source-locators.mjs           # report only
 *   node scripts/resolve-case-source-locators.mjs --write   # record accepted matches
 */
import fs from 'node:fs';
import path from 'node:path';
import { referenceLinesFor, allCaseFiles } from './lib/case-references.mjs';

const ROOT = process.cwd();
const MAP_PATH = path.join(ROOT, 'docs/source-locators/case-source-overrides.json');
const CONTACT = 'research@alethic.ai';
const ACCEPT = 0.90;

const mapDoc = fs.existsSync(MAP_PATH)
  ? JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'))
  : {
    _comment: 'Locators for case-level citations, accepted only on an unambiguous Crossref match. Written by scripts/resolve-case-source-locators.mjs and read by scripts/build-case-sources.mjs.',
    citations: {},
  };
const overrides = mapDoc.citations;

const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
const tokenArray = (s) => norm(s).split(' ').filter((x) => x.length > 2);
const tokens = (s) => new Set(tokenArray(s));
function jaccard(a, b) {
  const A = tokens(a); const B = tokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter += 1;
  return inter / (A.size + B.size - inter);
}
function titleMatch(citation, title) {
  if (tokenArray(title).length < 4) return 0;
  if (norm(citation).includes(norm(title))) return 1;
  return jaccard(citation, title);
}
function citationYear(citation) {
  const years = [...String(citation).matchAll(/\b(19|20)\d{2}\b/g)].map((m) => Number(m[0]));
  return years.length ? years[years.length - 1] : null;
}
function workYear(work) {
  for (const key of ['published-print', 'published-online', 'published', 'issued', 'created']) {
    const year = work?.[key]?.['date-parts']?.[0]?.[0];
    if (Number.isInteger(year)) return year;
  }
  return null;
}

/* A citation Crossref can answer for: no identifier of its own, and not obviously a guideline,
   statute, book or institutional page, which Crossref indexes patchily and would match loosely. */
const INSTITUTIONAL = /\b(guideline|guidance|policy statement|committee opinion|code of|act\b|regulation|directive|convention|declaration|handbook|textbook|principles of biomedical ethics|report|framework|standards?)\b/i;
function eligible(citation) {
  if (/PMID|10\.\d{4,9}\/|https?:\/\//i.test(citation)) return false;
  if (INSTITUTIONAL.test(citation)) return false;
  return citationYear(citation) !== null;
}

const unresolved = new Map();
for (const file of allCaseFiles(ROOT)) {
  for (const citation of referenceLinesFor(file)) {
    if (overrides[citation] || !eligible(citation)) continue;
    unresolved.set(citation, true);
  }
}

console.log(`${unresolved.size} case-level citation(s) look like articles and carry no locator.`);
if (!process.argv.includes('--write')) {
  console.log('Report only. Re-run with --write to ask Crossref and record what it answers unambiguously.');
  process.exit(0);
}

let queried = 0;
let accepted = 0;
for (const citation of unresolved.keys()) {
  queried += 1;
  const url = new URL('https://api.crossref.org/works');
  url.searchParams.set('query.bibliographic', citation);
  url.searchParams.set('rows', '5');
  url.searchParams.set('mailto', CONTACT);
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': `BioethicsBench/1.0 (mailto:${CONTACT})` },
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) continue;
    const data = await response.json();
    const stated = citationYear(citation);
    let best = null;
    for (const work of data?.message?.items || []) {
      const title = Array.isArray(work.title) ? work.title[0] : work.title;
      if (!title || !work.DOI) continue;
      const year = workYear(work);
      if (stated && year && Math.abs(stated - year) > 1) continue;
      const match = titleMatch(citation, title);
      if (!best || match > best.match) best = { match, title, doi: work.DOI, year };
    }
    if (best && best.match >= ACCEPT) {
      overrides[citation] = {
        doi: best.doi,
        url: `https://doi.org/${best.doi}`,
        verified_by: 'crossref-title-year-bibliographic-match',
        matched_title: best.title,
        matched_year: best.year,
        title_match: Number(best.match.toFixed(3)),
        checked_at: new Date().toISOString().slice(0, 10),
      };
      accepted += 1;
      console.log(`✓ ${citation}\n  → ${best.doi} · title ${best.match.toFixed(3)} · year ${best.year ?? 'n/a'}`);
    }
  } catch (error) {
    console.error(`! Crossref lookup failed: ${citation}: ${error.message}`);
  }
  await new Promise((r) => setTimeout(r, 120));
}

mapDoc.citations = Object.fromEntries(Object.entries(overrides).sort(([a], [b]) => a.localeCompare(b)));
fs.mkdirSync(path.dirname(MAP_PATH), { recursive: true });
fs.writeFileSync(MAP_PATH, `${JSON.stringify(mapDoc, null, 2)}\n`);
console.log(`Asked Crossref about ${queried} citation(s); recorded ${accepted} unambiguous match(es).`);
