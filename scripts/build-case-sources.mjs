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
import { referenceLines, referenceLayers } from './lib/case-references.mjs';

/* Locators established by asking Crossref about a citation and accepting only an unambiguous
   answer (scripts/resolve-case-source-locators.mjs). A recorded locator beats a search link. */
const OVERRIDES_PATH = path.join(process.cwd(), 'docs/source-locators/case-source-overrides.json');
const LOCATOR_OVERRIDES = fs.existsSync(OVERRIDES_PATH)
  ? JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8')).citations || {}
  : {};

const ROOT = process.cwd();
const INVENTORY = path.join(ROOT, 'resources/case-families/full-200-rich-candidate-universes.v1.1.json');
const CROSSWALK_DIR = path.join(ROOT, 'resources/projections/source-grounded');
const RECORD_DIR = path.join(ROOT, 'data/benchmark');
const OUTPUT = path.join(ROOT, 'resources/cases/case-sources.v1.json');

/** A citation is only useful if a reader can reach it. Prefer a real identifier; else search. */
export function link(citation) {
  const text = String(citation || '');
  const recorded = LOCATOR_OVERRIDES[text];
  if (recorded?.url) return { url: recorded.url, resolved: true };
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
let casesWithLayers = 0;

for (const entry of inventory.cases) {
  const markdown = fs.readFileSync(path.join(ROOT, entry.deep_case_path), 'utf8');
  const sources = referenceLines(markdown).map((citation) => ({ citation, ...link(citation) }));
  caseSourceCount += sources.length;
  // Where the case file grouped its references by evidence layer, keep the grouping: a Public
  // policy can then show the affected-public material rather than the whole reading list.
  const grouped = referenceLayers(markdown);
  const layers = {};
  for (const [layer, citations] of Object.entries(grouped)) {
    if (citations.length) layers[layer] = citations.map((citation) => ({ citation, ...link(citation) }));
  }
  if (Object.keys(layers).length) casesWithLayers += 1;
  cases[entry.inventory_id] = { sources, layers, policies: {} };
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
  cases_with_layered_sources: casesWithLayers,
  cases,
};

const rendered = `${JSON.stringify(output, null, 2)}\n`;
if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)}: ${caseSourceCount} case sources (${casesWithLayers} cases grouped by evidence layer), ${policySourceCount} policy sources across ${casesWithPolicySources} cases.`);
} else {
  if (!fs.existsSync(OUTPUT)) throw new Error(`${path.relative(ROOT, OUTPUT)} is missing; run with --write`);
  if (fs.readFileSync(OUTPUT, 'utf8') !== rendered) throw new Error(`${path.relative(ROOT, OUTPUT)} is stale; run with --write`);
  console.log(`Verified ${caseSourceCount} case sources / ${policySourceCount} policy sources / ${casesWithLayers} cases grouped by evidence layer.`);
}
