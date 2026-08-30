#!/usr/bin/env node
/**
 * Conservatively resolve unresolved journal citations through Crossref.
 * Writes only to docs/source-locators/source-locator-overrides.json; canonical records
 * are updated by the separate enrichment workflow.
 *
 * Automatic acceptance is intentionally narrow:
 *  - only records typed article or survey;
 *  - strong title overlap (>= .90);
 *  - at least four meaningful returned-title tokens;
 *  - when the citation states a year, Crossref's publication year must be within one year
 *    (to permit online-ahead-of-print vs issue-year differences).
 * Policies, guidelines, books and institutional documents require official/manual lookup.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'benchmark');
const mapPath = join(root, 'docs', 'source-locators', 'source-locator-overrides.json');
const mapDoc = JSON.parse(readFileSync(mapPath, 'utf8'));
const overrides = mapDoc.citations || {};
const eligibleTypes = new Set(['article','survey']);

function refsIn(record) {
  const refs=[]; const add=(a)=>(a||[]).forEach(x=>refs.push(x));
  add(record.scenario_provenance?.sources);
  for (const pool of ['public','expert','framework']) for (const c of record.candidate_pools?.[pool] || []) add(c.provenance?.sources);
  add(record.references); return refs;
}
function norm(s) {
  return String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}
function tokenArray(s) { return norm(s).split(' ').filter(x=>x.length>2); }
function tokens(s) { return new Set(tokenArray(s)); }
function jaccard(a,b) {
  const A=tokens(a), B=tokens(b); if (!A.size || !B.size) return 0;
  let inter=0; for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}
function titleMatch(citation,title) {
  const c=norm(citation), t=norm(title);
  if (tokenArray(title).length < 4) return 0;
  if (c.includes(t)) return 1;
  return jaccard(c,title);
}
function citationYear(citation) {
  const years=[...String(citation||'').matchAll(/\b(19|20)\d{2}\b/g)].map(m=>Number(m[0]));
  return years.length ? years[years.length-1] : null;
}
function workYear(w) {
  for (const key of ['published-print','published-online','published','issued','created']) {
    const p=w?.[key]?.['date-parts']?.[0]?.[0];
    if (Number.isInteger(p)) return p;
  }
  return null;
}

const unique=new Map();
for (const file of readdirSync(dir).filter(f=>f.endsWith('.json'))) {
  const r=JSON.parse(readFileSync(join(dir,file),'utf8'));
  for (const ref of refsIn(r)) {
    if (ref.url || ref.doi || overrides[ref.citation] || !eligibleTypes.has(ref.type)) continue;
    unique.set(ref.citation,{citation:ref.citation,type:ref.type});
  }
}

let accepted=0, queried=0;
for (const item of unique.values()) {
  queried++;
  const u=new URL('https://api.crossref.org/works');
  u.searchParams.set('query.bibliographic',item.citation);
  u.searchParams.set('rows','5');
  u.searchParams.set('mailto','research@alethic.ai');
  try {
    const res=await fetch(u,{headers:{'User-Agent':'BioethicsBench/1.0 (mailto:research@alethic.ai)'}});
    if (!res.ok) continue;
    const data=await res.json();
    let best=null;
    const cy=citationYear(item.citation);
    for (const w of data?.message?.items || []) {
      const title=Array.isArray(w.title)?w.title[0]:w.title;
      const doi=w.DOI;
      if (!title || !doi) continue;
      const wy=workYear(w);
      if (cy && wy && Math.abs(cy-wy)>1) continue;
      const match=titleMatch(item.citation,title);
      if (!best || match>best.match) best={match,title,doi,year:wy,score:w.score||null};
    }
    if (best && best.match >= 0.90) {
      overrides[item.citation]={
        doi:best.doi,
        url:`https://doi.org/${best.doi}`,
        verified_by:'crossref-title-year-bibliographic-match',
        matched_title:best.title,
        matched_year:best.year,
        title_match:Number(best.match.toFixed(3)),
        checked_at:new Date().toISOString().slice(0,10)
      };
      accepted++;
      console.log(`✓ ${item.citation}\n  → ${best.doi} · title ${best.match.toFixed(3)} · year ${best.year ?? 'n/a'}`);
    }
  } catch (e) {
    console.error(`! Crossref lookup failed: ${item.citation}: ${e.message}`);
  }
  await new Promise(r=>setTimeout(r,100));
}

mapDoc.citations=overrides;
writeFileSync(mapPath,JSON.stringify(mapDoc,null,2)+'\n');
console.log(`Crossref resolver: queried ${queried} unresolved article/survey citations; accepted ${accepted} high-confidence DOI matches.`);
