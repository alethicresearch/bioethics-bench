#!/usr/bin/env node
// Verify the PMIDs the corpus cites against PubMed.
//
// A corpus whose whole claim is that candidates are source-grounded should be able to show
// that its sources exist and say what is attributed to them. Most of that is judgement and
// belongs to the human reviewer. One part is not: a PMID either resolves to a record or it
// does not, and the year and title either match the citation or they do not. Doing that
// mechanically removes roughly a hundred lookups from the reviewer's desk and turns the
// remaining question into the one they are actually needed for.
//
// What this does NOT establish: that the source supports the policy candidate attributed to
// it. A resolving PMID with a matching title can still be cited for a claim it does not make.
// That is source-to-policy fidelity and it is the human review gate.
//
//   node scripts/verify-citations.mjs             verify, exit non-zero on unresolved PMIDs
//   node scripts/verify-citations.mjs --report    also write docs/full-corpus/review/citation-verification.md
//   node scripts/verify-citations.mjs --offline   re-check a previous report without network

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recordDir = join(root, 'data', 'benchmark');
const outDir = join(root, 'docs', 'full-corpus', 'review');
const outPath = join(outDir, 'citation-verification.md');
const cachePath = join(outDir, 'citation-verification.json');
const report = process.argv.includes('--report');
const offline = process.argv.includes('--offline');

/** Every citation in the corpus, with where it is used and what it is used to support. */
function collectCitations() {
  const map = new Map();
  for (const file of readdirSync(recordDir).filter((f) => f.includes('concise'))) {
    const record = JSON.parse(readFileSync(join(recordDir, file), 'utf8'));
    const family = record.case_id.slice(0, 4).toUpperCase();
    const add = (source, use) => {
      if (!map.has(source.citation)) map.set(source.citation, { type: source.type, uses: [] });
      map.get(source.citation).uses.push(use);
    };
    for (const s of record.scenario_provenance?.sources ?? []) add(s, { family, where: 'scenario' });
    for (const pool of ['public', 'expert', 'framework']) {
      for (const c of record.candidate_pools?.[pool] ?? []) {
        for (const s of c.provenance?.sources ?? []) {
          add(s, { family, where: c.id, pool, basis: c.policy_basis });
        }
      }
    }
  }
  return map;
}

const PMID = /PMID[:\s]*(\d{6,9})/i;
const YEAR = /\b(19|20)\d{2}\b/;

// Titles are paraphrased in citations, so compare on content words rather than exact string.
const STOP = new Set(['the', 'and', 'for', 'with', 'from', 'that', 'этот', 'a', 'an', 'of', 'in', 'on', 'to', 'by']);
const words = (t) => (t || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)
  .filter((w) => w.length > 3 && !STOP.has(w));
const overlap = (a, b) => {
  const A = new Set(words(a)); const B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  return [...A].filter((w) => B.has(w)).length / Math.min(A.size, B.size);
};

async function fetchSummaries(ids) {
  const out = new Map();
  for (let i = 0; i < ids.length; i += 150) {
    const batch = ids.slice(i, i + 150);
    const url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi'
      + `?db=pubmed&id=${batch.join(',')}&retmode=json&tool=bioethics-bench`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`PubMed returned ${response.status}`);
    const body = await response.json();
    for (const uid of body.result?.uids ?? []) {
      const rec = body.result[uid];
      out.set(uid, {
        title: rec.title ?? '',
        year: (rec.pubdate ?? '').slice(0, 4),
        journal: rec.fulljournalname ?? '',
        authors: (rec.authors ?? []).map((a) => a.name ?? '').filter(Boolean),
      });
    }
    if (i + 150 < ids.length) await new Promise((r) => setTimeout(r, 400));
  }
  return out;
}

const citations = collectCitations();
const withPmid = [...citations.entries()]
  .map(([citation, meta]) => ({ citation, ...meta, pmid: PMID.exec(citation)?.[1] ?? null }))
  .filter((c) => c.pmid);

let summaries;
if (offline && existsSync(cachePath)) {
  summaries = new Map(Object.entries(JSON.parse(readFileSync(cachePath, 'utf8'))));
} else {
  summaries = await fetchSummaries([...new Set(withPmid.map((c) => c.pmid))]);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(cachePath, `${JSON.stringify(Object.fromEntries(summaries), null, 2)}\n`);
}

const unresolved = [];
const yearMismatch = [];
const titleWeak = [];
const ok = [];

for (const c of withPmid) {
  const found = summaries.get(c.pmid);
  if (!found) { unresolved.push(c); continue; }
  // Many citations are short-form — author, journal, year, PMID — with no title at all, so a
  // low title overlap says nothing about them. Where the citation names the first author,
  // that plus the year is the check that actually discriminates. A first pass without this
  // flagged 16 citations, nearly all of them correct references written in short form.
  // Against every author, not only the first: a short-form citation may name any of them, and
  // surnames are not always one word. Checking only sortfirstauthor flagged correct citations
  // such as "de la Poza Abad M" (split on the first space, leaving "de") and papers cited by a
  // non-first author.
  const surnames = (found.authors ?? [])
    .map((name) => name.replace(/\s+[A-Z]{1,3}$/, '').trim())
    .filter((surname) => surname.length > 2);
  const authorMatches = surnames.some((surname) => c.citation.toLowerCase().includes(surname.toLowerCase()));

  // A year range such as "2016-2024" is a study period, not a publication year. Compare only
  // when the citation carries a single unambiguous year.
  const hasRange = /\b(19|20)\d{2}\s*[–—-]\s*(19|20)?\d{2}\b/.test(c.citation);
  const yearsFound = c.citation.match(/\b(19|20)\d{2}\b/g) ?? [];
  const citedYear = hasRange || yearsFound.length !== 1 ? null : yearsFound[0];

  const sim = overlap(c.citation, found.title);
  const entry = {
    ...c, found, citedYear, authorMatches,
    similarity: Number(sim.toFixed(2)),
  };
  if (citedYear && found.year && citedYear !== found.year) yearMismatch.push(entry);
  else if (sim < 0.30 && !authorMatches) titleWeak.push(entry);
  else ok.push(entry);
}

console.log(`Citations in corpus: ${citations.size} unique; ${withPmid.length} carry a PMID.`);
console.log(`  resolved and consistent   ${ok.length}`);
console.log(`  year disagrees            ${yearMismatch.length}`);
console.log(`  neither title nor author  ${titleWeak.length}`);
console.log(`  PMID does not resolve     ${unresolved.length}`);

const describe = (e) => `  ${e.pmid}  ${e.uses.map((u) => `${u.family}/${u.where}`).join(' ')}\n`
  + `      cited: ${e.citation.slice(0, 150)}\n`
  + (e.found ? `      pubmed: ${e.found.year} — ${e.found.title.slice(0, 130)}\n` : '');

if (unresolved.length) { console.log('\nUNRESOLVED:'); for (const e of unresolved) console.log(describe(e)); }
if (yearMismatch.length) { console.log('\nYEAR DISAGREES:'); for (const e of yearMismatch) console.log(describe(e)); }
if (titleWeak.length) { console.log('\nNEITHER TITLE NOR AUTHOR MATCHES (read these):'); for (const e of titleWeak) console.log(describe(e)); }

if (report) {
  mkdirSync(outDir, { recursive: true });
  const section = (title, list, note) => `## ${title} — ${list.length}\n\n${note}\n\n`
    + (list.length ? list.map((e) => `### PMID ${e.pmid}\n\n- **Used by:** ${e.uses.map((u) => `${u.family} \`${u.where}\`${u.basis ? ` (${u.basis})` : ''}`).join(', ')}\n`
      + `- **Cited as:** ${e.citation}\n`
      + (e.found ? `- **PubMed says:** ${e.found.year}, *${e.found.title}*, ${e.found.journal}${(e.found.authors ?? []).length ? ` — ${e.found.authors.slice(0, 3).join('; ')}${e.found.authors.length > 3 ? ' et al.' : ''}` : ''}\n` : '- **PubMed:** no record for this identifier\n')
      + (e.similarity !== undefined ? `- **Title overlap:** ${e.similarity}${e.authorMatches ? '; an author matches' : '; no author name found in citation'}\n` : '')).join('\n') : '_None._\n');

  writeFileSync(outPath, `# Citation verification — PMID resolution

**Generated by \`scripts/verify-citations.mjs\`. Do not edit by hand.**

Of ${citations.size} unique citations in the Full Corpus, ${withPmid.length} carry a PMID and are
checked here against PubMed. The remaining ${citations.size - withPmid.length} are named policy
documents, guidelines and books; they are not machine-checkable and are listed for the reviewer in
\`review-worksheet.md\`.

**What a pass here means:** the identifier resolves to a real record whose year and title are
consistent with the citation. **What it does not mean:** that the source supports the policy
candidate attributed to it. A correctly cited paper can still be cited for a claim it does not
make. That judgement is the human review gate and is not automatable.

${section('PMID does not resolve', unresolved, 'A hard defect. The identifier is wrong, or the record was withdrawn. Repair on the canonical branch.')}
${section('Year disagrees', yearMismatch, "The cited year differs from the PubMed record. Often an epub-versus-issue difference and harmless; occasionally the wrong paper.")}
${section('Neither title nor first author matches', titleWeak, 'Citations paraphrase titles and many are short-form with no title at all, so low overlap alone is not an error. These match on neither title nor first author and should be read.')}
`);
  console.log(`\nWrote ${outPath}`);
}

if (unresolved.length) process.exit(1);
