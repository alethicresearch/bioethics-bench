#!/usr/bin/env node
/**
 * Conservatively resolve currently-unlocated Full Corpus citations through Crossref.
 * Writes only to data/source-locator-overrides.json; canonical records are updated by
 * the separate enrichment workflow. A match is accepted only when the returned title
 * strongly matches text already present in the citation. Ambiguous results remain manual.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'benchmark');
const mapPath = join(root, 'data', 'source-locator-overrides.json');
const mapDoc = JSON.parse(readFileSync(mapPath, 'utf8'));
const overrides = mapDoc.citations || {};
const eligibleTypes = new Set(['article','survey','guideline','policy-document']);

function refsIn(record) {
  const refs=[]; const add=(a)=>(a||[]).forEach(x=>refs.push(x));
  add(record.scenario_provenance?.sources);
  for (const pool of ['public','expert','framework']) for (const c of record.candidate_pools?.[pool] || []) add(c.provenance?.sources);
  add(record.references); return refs;
}
function norm(s) {
  return String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}
function tokens(s) { return new Set(norm(s).split(' ').filter(x=>x.length>2)); }
function jaccard(a,b) {
  const A=tokens(a), B=tokens(b); if (!A.size || !B.size) return 0;
  let inter=0; for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}
function titleMatch(citation,title) {
  const c=norm(citation), t=norm(title);
  if (t.length < 20) return 0;
  if (c.includes(t)) return 1;
  return jaccard(c,title);
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
  u.searchParams.set('rows','3');
  u.searchParams.set('mailto','research@alethic.ai');
  try {
    const res=await fetch(u,{headers:{'User-Agent':'BioethicsBench/1.0 (mailto:research@alethic.ai)'}});
    if (!res.ok) continue;
    const data=await res.json();
    let best=null;
    for (const w of data?.message?.items || []) {
      const title=Array.isArray(w.title)?w.title[0]:w.title;
      const doi=w.DOI;
      if (!title || !doi) continue;
      const match=titleMatch(item.citation,title);
      if (!best || match>best.match) best={match,title,doi,score:w.score||null};
    }
    if (best && best.match >= 0.82) {
      overrides[item.citation]={
        doi:best.doi,
        url:`https://doi.org/${best.doi}`,
        verified_by:'crossref-title-match',
        matched_title:best.title,
        title_match:Number(best.match.toFixed(3)),
        checked_at:new Date().toISOString().slice(0,10)
      };
      accepted++;
      console.log(`✓ ${item.citation}\n  → ${best.doi} · match ${best.match.toFixed(3)}`);
    }
  } catch (e) {
    console.error(`! Crossref lookup failed: ${item.citation}: ${e.message}`);
  }
  await new Promise(r=>setTimeout(r,80));
}

mapDoc.citations=overrides;
writeFileSync(mapPath,JSON.stringify(mapDoc,null,2)+'\n');
console.log(`Crossref resolver: queried ${queried} unresolved eligible citations; accepted ${accepted} high-confidence DOI matches.`);
