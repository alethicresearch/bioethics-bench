#!/usr/bin/env node
/**
 * The bibliography, read the other way round.
 *
 * The case files record which sources a case rests on. Nobody could ask the opposite question —
 * which cases rest on a given source, what kind of source the collection leans on, which sources
 * carry a link and which only a search. This inverts the record into one citation-keyed index the
 * Source Explorer reads.
 *
 *   node scripts/build-source-index.mjs           # verify the committed file is current
 *   node scripts/build-source-index.mjs --write   # regenerate it
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CASES = JSON.parse(fs.readFileSync(path.join(ROOT, 'resources/cases/full-200-cases.v1.json'), 'utf8'));
const SOURCES = JSON.parse(fs.readFileSync(path.join(ROOT, 'resources/cases/case-sources.v1.json'), 'utf8'));
const OUTPUT = path.join(ROOT, 'resources/cases/source-index.v1.json');

const titleOf = new Map(CASES.cases.map((c) => [c.id, c.title]));
const categoryOf = new Map(CASES.cases.map((c) => [c.id, c.category]));

/* What kind of thing a citation points at, read from the citation itself. A reader wants to know
   whether the collection rests on trials and surveys or on guidance and statute, and the wording
   is all there is to go on — so the kinds are broad, and "other" is left visible rather than
   guessed at. */
const KINDS = [
  ['law', /(§|C\.F\.R\.|U\.S\.C\.|\bstatute\b|\bregulations?\b|\bdirective\b|\bconvention\b|\bruling\b|\bcourt\b|\bAct of\b|\b(Act|Law)\s+\d{4}\b)/i],
  // A professional body's statement is guidance whether or not it says so: most of these citations
  // are "ACOG. Abortion Policy." or "HRSA/OPTN. Ethical Principles…", which named no kind at all
  // and fell to "other" — 176 of 752 sources, the second-largest bucket, for want of a keyword.
  ['guideline', /\b(guideline|guidance|policy statement|committee opinion|position statement|consensus|recommendation|standards?|code of|technical report|committee|college|academy|society|association|task force|ethics committee)\b/i],
  ['guideline', /^[A-Z][A-Z0-9/&.-]{1,}\.\s/],
  ['survey', /\b(survey|poll|questionnaire|focus group|interview study|attitudes?|preferences?|public opinion)\b/i],
  ['study', /\b(PMID|doi|10\.\d{4}|trial|cohort|review|meta-analysis|study|analysis|J\s|Journal|BMJ|JAMA|Lancet|N Engl)\b/i],
  ['book', /\b(principles of biomedical ethics|handbook|textbook|\bed\.\b|press\b|university press)\b/i],
  ['report', /\b(report|national academies|WHO\b|OECD|commission|working group|framework)\b/i],
];
function kindOf(citation) {
  for (const [kind, pattern] of KINDS) if (pattern.test(citation)) return kind;
  return 'other';
}

const byCitation = new Map();
for (const [caseId, entry] of Object.entries(SOURCES.cases)) {
  const layerOf = new Map();
  for (const [layer, list] of Object.entries(entry.layers || {})) {
    for (const source of list) layerOf.set(source.citation, layer);
  }
  const policyOf = new Map();
  for (const [policyId, list] of Object.entries(entry.policies || {})) {
    for (const source of list) {
      if (!policyOf.has(source.citation)) policyOf.set(source.citation, []);
      policyOf.get(source.citation).push(policyId);
    }
  }
  const seen = new Set();
  for (const source of [...entry.sources, ...Object.values(entry.policies || {}).flat()]) {
    const key = source.citation;
    if (!byCitation.has(key)) {
      byCitation.set(key, {
        citation: key,
        url: source.url || null,
        resolved: !!source.resolved,
        kind: kindOf(key),
        cases: [],
      });
    }
    const record = byCitation.get(key);
    if (!record.url && source.url) { record.url = source.url; record.resolved = !!source.resolved; }
    if (seen.has(key)) continue;
    seen.add(key);
    record.cases.push({
      id: caseId,
      title: titleOf.get(caseId) || caseId,
      category: categoryOf.get(caseId) || null,
      layer: layerOf.get(key) || null,
      policies: policyOf.get(key) || [],
    });
  }
}

const sources = [...byCitation.values()]
  .map((s) => ({ ...s, cases: s.cases.sort((a, b) => a.id.localeCompare(b.id)) }))
  .sort((a, b) => b.cases.length - a.cases.length || a.citation.localeCompare(b.citation));

const counts = (key) => sources.reduce((acc, s) => {
  const k = typeof key === 'function' ? key(s) : s[key];
  acc[k] = (acc[k] || 0) + 1;
  return acc;
}, {});

const index = {
  resource_id: 'bioethics-bench-source-index',
  resource_version: '1.0.0',
  generated_from: SOURCES.resource_version || null,
  source_count: sources.length,
  case_count: CASES.cases.length,
  resolved_count: sources.filter((s) => s.resolved).length,
  shared_count: sources.filter((s) => s.cases.length > 1).length,
  policy_level_count: sources.filter((s) => s.cases.some((c) => c.policies.length)).length,
  kinds: counts('kind'),
  categories: CASES.categories || {},
  sources,
};

const rendered = `${JSON.stringify(index, null, 2)}\n`;
if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)}: ${sources.length} distinct citations, ${index.shared_count} used by more than one case.`);
} else {
  if (!fs.existsSync(OUTPUT)) throw new Error(`${path.relative(ROOT, OUTPUT)} is missing; run with --write`);
  if (fs.readFileSync(OUTPUT, 'utf8') !== rendered) throw new Error(`${path.relative(ROOT, OUTPUT)} is stale; run with --write`);
  console.log(`Verified source index: ${sources.length} citations across ${index.case_count} cases.`);
}
