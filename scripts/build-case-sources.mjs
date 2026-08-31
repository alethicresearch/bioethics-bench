/**
 * Sources for the public case file.
 *
 * Every case gets the references its case file records, resolved to a link where the citation
 * carries a PMID, DOI or URL and to a scholarly search where it does not. The 22 cases with an
 * approved crosswalk also get per-policy sources, taken from the released records those policies
 * were matched to, so a reader can go from one policy to the source behind it rather than to the
 * case's reading list.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INVENTORY = path.join(ROOT, 'resources/case-families/full-200-rich-candidate-universes.v1.1.json');
const CROSSWALK_DIR = path.join(ROOT, 'resources/projections/source-grounded');
const RECORD_DIR = path.join(ROOT, 'data/benchmark');
const OUTPUT = path.join(ROOT, 'resources/cases/case-sources.v1.json');

const REFERENCE_HEADINGS = /^(references and provenance|references|principal sources|sources|key sources|source architecture|evidence layers|evidence architecture)$/i;

/* These sections mix citations with their own sub-headings ("Affected-public / empirical") and
   with pointers to bodies of work rather than documents ("relational-autonomy scholarship"). Drop
   those two; anything else naming a document is kept, including guidance with no identifier. */
function isCitation(line) {
  if (line.length < 25 || line.startsWith('|')) return false;
  if (line.endsWith(':')) return false;
  if (/^(affected|public|expert|framework|normative|evidence|sources?|references?)\b[^.]*$/i.test(line)) return false;
  const identified = /PMID|doi|https?:\/\//i.test(line);
  if (identified) return true;
  if (/\b(literature|scholarship|arguments?|reasoning|debate)\b/i.test(line) && !/\b(19|20)\d{2}\b/.test(line)) return false;
  return /^[A-Z0-9]/.test(line);
}

function referenceLines(markdown) {
  const out = [];
  for (const match of markdown.matchAll(/^##\s+(?:\d+[.)]?\s*)?(.+)$/gm)) {
    if (!REFERENCE_HEADINGS.test(match[1].trim())) continue;
    const rest = markdown.slice(match.index + match[0].length);
    const next = rest.search(/^##\s/m);
    const body = next >= 0 ? rest.slice(0, next) : rest;
    const lines = body.split('\n').map((raw) => raw.replace(/^[-*]\s*/, '').replace(/\*/g, '').trim());
    const kept = lines.filter(isCitation);
    // A few case files write the section as one semicolon-joined sentence rather than a list.
    if (!kept.length) {
      for (const part of body.replace(/\*/g, '').split(/;\s*/)) {
        const line = part.trim().replace(/\.$/, '');
        if (line.length > 20) out.push(`${line}.`);
      }
      continue;
    }
    out.push(...kept);
  }
  return [...new Set(out)];
}

/** A citation is only useful if a reader can reach it. Prefer a real identifier; else search. */
export function link(citation) {
  const text = String(citation || '');
  const url = text.match(/https?:\/\/[^\s)>\]]+/);
  if (url) return { url: url[0].replace(/[).,;]+$/, ''), resolved: true };
  const pmid = text.match(/\bPMID:?\s*(\d{5,10})\b/i);
  if (pmid) return { url: `https://pubmed.ncbi.nlm.nih.gov/${pmid[1]}/`, resolved: true };
  const doi = text.match(/\b10\.\d{4,9}\/[^\s,;)]+/);
  if (doi) return { url: `https://doi.org/${doi[0].replace(/[).,;]+$/, '')}`, resolved: true };
  const trimmed = text.trim();
  if (!trimmed) return { url: null, resolved: false };
  return { url: `https://scholar.google.com/scholar?q=${encodeURIComponent(trimmed.slice(0, 200))}`, resolved: false };
}

const inventory = JSON.parse(fs.readFileSync(INVENTORY, 'utf8'));
const cases = {};
let caseSourceCount = 0;
let policySourceCount = 0;
let casesWithPolicySources = 0;

for (const entry of inventory.cases) {
  const markdown = fs.readFileSync(path.join(ROOT, entry.deep_case_path), 'utf8');
  const sources = referenceLines(markdown).map((citation) => ({ citation, ...link(citation) }));
  caseSourceCount += sources.length;
  cases[entry.inventory_id] = { sources, policies: {} };
}

// Per-policy sources, where an approved crosswalk names the released record each policy matches.
for (const name of fs.existsSync(CROSSWALK_DIR) ? fs.readdirSync(CROSSWALK_DIR).filter((x) => x.endsWith('.json')) : []) {
  const crosswalk = JSON.parse(fs.readFileSync(path.join(CROSSWALK_DIR, name), 'utf8'));
  if (!/^approved/.test(String(crosswalk.review_status || ''))) continue;
  const caseId = String(crosswalk.case_family_id || '').toUpperCase();
  const target = cases[caseId];
  if (!target) continue;

  const recordId = (crosswalk.source_record_ids || []).find((id) => id.includes('concise'));
  const file = path.join(RECORD_DIR, `${recordId}.json`);
  if (!recordId || !fs.existsSync(file)) continue;
  const record = JSON.parse(fs.readFileSync(file, 'utf8'));
  const byId = new Map();
  for (const pool of Object.values(record.candidate_pools || {})) {
    for (const candidate of pool) byId.set(candidate.id, candidate);
  }

  let added = 0;
  for (const row of crosswalk.source_candidate_crosswalk || []) {
    const candidate = byId.get(row.source_candidate_id);
    const citations = candidate?.provenance?.sources || [];
    if (!citations.length) continue;
    const list = citations.map((s) => ({ citation: s.citation, ...link(s.citation) }));
    const existing = target.policies[row.neutral_candidate_id] || [];
    const seen = new Set(existing.map((s) => s.citation));
    target.policies[row.neutral_candidate_id] = existing.concat(list.filter((s) => !seen.has(s.citation)));
    added += list.length;
  }
  if (added) { casesWithPolicySources += 1; policySourceCount += added; }
}

const output = {
  resource_id: 'bioethics-bench-case-sources',
  resource_version: '1.0.0',
  case_count: Object.keys(cases).length,
  case_source_count: caseSourceCount,
  policy_source_count: policySourceCount,
  cases_with_policy_sources: casesWithPolicySources,
  cases,
};

const rendered = `${JSON.stringify(output, null, 2)}\n`;
if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)}: ${caseSourceCount} case sources, ${policySourceCount} policy sources across ${casesWithPolicySources} cases.`);
} else {
  if (!fs.existsSync(OUTPUT)) throw new Error(`${path.relative(ROOT, OUTPUT)} is missing; run with --write`);
  if (fs.readFileSync(OUTPUT, 'utf8') !== rendered) throw new Error(`${path.relative(ROOT, OUTPUT)} is stale; run with --write`);
  console.log(`Verified ${caseSourceCount} case sources / ${policySourceCount} policy sources.`);
}
