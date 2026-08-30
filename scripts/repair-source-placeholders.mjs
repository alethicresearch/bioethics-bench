#!/usr/bin/env node
/**
 * Replace a small set of provenance placeholders with the external sources they were
 * summarizing. This is a provenance-only repair: no scenario, stipulation, candidate
 * text/order, source-role assignment, representation, profile, or task semantics change.
 *
 * The replacements below are deliberately explicit and reviewable. They are not a fuzzy
 * citation resolver. Each exact placeholder may expand to one or more source objects.
 *
 *   node scripts/repair-source-placeholders.mjs --check
 *   node scripts/repair-source-placeholders.mjs --write
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalContentHash } from './hash-case.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'benchmark');
const write = process.argv.includes('--write');

const PLATT = {
  citation: 'Platt J, Bollinger J, Dvoskin R, Kardia SLR, Kaufman D. Public preferences regarding informed consent models for participation in population-based genomic research. Genet Med. 2014;16(1):11-18. PMID 23660530.',
  type: 'survey',
  doi: '10.1038/gim.2013.59',
  url: 'https://doi.org/10.1038/gim.2013.59'
};
const KAYE = {
  citation: 'Kaye J, Whitley EA, Lund D, Morrison M, Teare H, Melham K. Dynamic consent: a patient interface for twenty-first century research networks. Eur J Hum Genet. 2015;23(2):141-146. PMID 24801761.',
  type: 'article',
  doi: '10.1038/ejhg.2014.71',
  url: 'https://doi.org/10.1038/ejhg.2014.71'
};
const PACYNA = {
  citation: 'Pacyna JE, et al. Assessing the stability of biobank donor preferences regarding sample use: evidence supporting the value of dynamic consent. Eur J Hum Genet. 2020;28(9):1168-1177. PMID 32327712.',
  type: 'article',
  doi: '10.1038/s41431-020-0625-9',
  url: 'https://doi.org/10.1038/s41431-020-0625-9'
};
const MOLINA = {
  citation: 'Molina-Pérez A, Delgado J, Frunza M, et al. Should the family have a role in deceased organ donation decision-making? A systematic review of public knowledge and attitudes towards organ procurement policies in Europe. Transplant Rev (Orlando). 2022;36(1):100673. PMID 34864448.',
  type: 'article',
  url: 'https://pubmed.ncbi.nlm.nih.gov/34864448/'
};
const SHEPHERD = {
  citation: "Shepherd L, O'Carroll RE, Ferguson E. Assessing the factors that influence the donation of a deceased family member's organs in an opt-out system for organ donation. Soc Sci Med. 2023;317:115545. PMID 36436261.",
  type: 'article',
  doi: '10.1016/j.socscimed.2022.115545',
  url: 'https://doi.org/10.1016/j.socscimed.2022.115545'
};
const FADEN = {
  citation: 'Faden RR, Kass NE, Goodman SN, Pronovost P, Tunis S, Beauchamp TL. An ethics framework for a learning health care system: a departure from traditional research ethics and clinical ethics. Hastings Cent Rep. 2013;Spec No:S16-S27. PMID 23315888.',
  type: 'article',
  doi: '10.1002/hast.134',
  url: 'https://doi.org/10.1002/hast.134'
};
const KHULLAR = {
  citation: 'Khullar D, Casalino LP, Qian Y, Lu Y, Krumholz HM, Aneja S. Perspectives of Patients About Artificial Intelligence in Health Care. JAMA Netw Open. 2022;5(5):e2210309. PMID 35507346.',
  type: 'article',
  url: 'https://pubmed.ncbi.nlm.nih.gov/35507346/'
};
const AI_NOTICE = {
  citation: 'Public Attitudes Toward Notification of Use of Artificial Intelligence in Health Care. JAMA Netw Open. 2024;7(12):e2450102. PMID 39661391.',
  type: 'article',
  url: 'https://pubmed.ncbi.nlm.nih.gov/39661391/'
};
const AI_INFO = {
  citation: 'Patient information needs for transparent and trustworthy cardiovascular artificial intelligence: a qualitative study. PLOS Digit Health. 2025;4(4):e0000826. PMID 40258073.',
  type: 'article',
  url: 'https://pubmed.ncbi.nlm.nih.gov/40258073/'
};

const replacements = new Map([
  ['Representative U.S. genomic-research survey of 4,659 adults comparing broad and study-by-study consent, as documented in the M075 source packet.', [PLATT]],
  ['UNRESOLVED SOURCE. A representative US genomic-research survey of 4,659 adults reporting broad consent preferred 52% to study-by-study 48%. No bibliographic record has been matched to this finding anywhere in the repository. Disposition: docs/full-corpus/review/SOURCE_TRACEABILITY_REVIEW.md.', [PLATT]],
  ['Dynamic-consent scholarship and participant-preference evidence summarized in the M075 research packet.', [KAYE, PACYNA]],
  ['Dynamic-consent and biobank preference studies summarized in the M075 research packet.', [KAYE, PACYNA]],
  ['Family-role evidence summarized in the M102 research packet.', [MOLINA, SHEPHERD]],
  ['Institute of Medicine and learning-health-system ethics literature on responsible secondary use of clinical data.', [FADEN]],
  ['Patient AI disclosure literature summarized in the M144 research packet.', [KHULLAR, AI_NOTICE, AI_INFO]]
]);

function clone(x) { return JSON.parse(JSON.stringify(x)); }
function replaceArray(arr) {
  if (!Array.isArray(arr)) return { arr, changed: 0 };
  const out = []; let changed = 0;
  for (const ref of arr) {
    const repl = replacements.get(ref?.citation);
    if (repl) { out.push(...repl.map(clone)); changed++; }
    else out.push(ref);
  }
  return { arr: out, changed };
}
function apply(record) {
  let changes = 0;
  if (record.scenario_provenance?.sources) {
    const r = replaceArray(record.scenario_provenance.sources);
    record.scenario_provenance.sources = r.arr; changes += r.changed;
  }
  for (const pool of ['public','expert','framework']) {
    for (const c of record.candidate_pools?.[pool] || []) {
      if (!c.provenance?.sources) continue;
      const r = replaceArray(c.provenance.sources);
      c.provenance.sources = r.arr; changes += r.changed;
    }
  }
  if (record.references) {
    const r = replaceArray(record.references);
    record.references = r.arr; changes += r.changed;
  }
  if (changes) record.content_hash = canonicalContentHash(record);
  return changes;
}

let changedRecords = 0, placeholders = 0;
for (const file of readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  const path = join(dir, file);
  const record = JSON.parse(readFileSync(path, 'utf8'));
  const n = apply(record);
  if (!n) continue;
  changedRecords++; placeholders += n;
  if (write) writeFileSync(path, JSON.stringify(record, null, 2) + '\n');
}

if (!write && placeholders) {
  console.error(`✗ ${placeholders} source placeholders in ${changedRecords} records can be replaced. Run --write.`);
  process.exit(1);
}
console.log(`✓ source placeholder repair ${write ? 'applied' : 'current'}: ${placeholders} placeholder occurrence(s) in ${changedRecords} record(s) changed.`);
