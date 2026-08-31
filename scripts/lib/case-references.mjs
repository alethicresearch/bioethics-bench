/**
 * Reading the references section of a case file.
 *
 * The sections are prose written by hand over many batches: some list citations, a few write the
 * whole section as one semicolon-joined sentence, and twenty-three group their citations under
 * the evidence layer they belong to. Both the case-source build and the locator resolver read
 * them, so they read them the same way from here.
 */
import fs from 'node:fs';
import path from 'node:path';

const REFERENCE_HEADINGS = /^(references and provenance|references|principal sources|sources|key sources|source architecture|evidence layers|evidence architecture)$/i;

/* These sections mix citations with their own sub-headings ("Affected-public / empirical") and
   with pointers to bodies of work rather than documents ("relational-autonomy scholarship"). Drop
   those two; anything else naming a document is kept, including guidance with no identifier. */
export function isCitation(line) {
  if (line.length < 25 || line.startsWith('|')) return false;
  if (line.endsWith(':')) return false;
  if (/^(affected|public|expert|framework|normative|evidence|sources?|references?)\b[^.]*$/i.test(line)) return false;
  const identified = /PMID|doi|https?:\/\//i.test(line);
  if (identified) return true;
  if (/\b(literature|scholarship|arguments?|reasoning|debate)\b/i.test(line) && !/\b(19|20)\d{2}\b/.test(line)) return false;
  return /^[A-Z0-9]/.test(line);
}

export function referenceLines(markdown) {
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


/* Where a case file groups its references under a layer — "Affected-public / empirical",
   "Professional", "Normative" — the group says which kind of policy the citation stands behind.
   Only the heading's own words are used; nothing is inferred from a citation's text. */
const LAYER_PATTERNS = [
  ['public', /^(affected|public|patient|service.user|community|carer|family)/i],
  ['expert', /^(professional|expert|clinical|policy|regulatory|practice)/i],
  ['framework', /^(normative|framework|ethical|philosoph)/i],
];

function layerFor(heading) {
  for (const [layer, pattern] of LAYER_PATTERNS) if (pattern.test(heading.trim())) return layer;
  return null;
}

/** The reference section body of a case file, or '' when it has none. */
function referenceBody(markdown) {
  for (const match of markdown.matchAll(/^##\s+(?:\d+[.)]?\s*)?(.+)$/gm)) {
    if (!REFERENCE_HEADINGS.test(match[1].trim())) continue;
    const rest = markdown.slice(match.index + match[0].length);
    const next = rest.search(/^##\s/m);
    return next >= 0 ? rest.slice(0, next) : rest;
  }
  return '';
}

/**
 * The citations a case file records, grouped by the evidence layer its own sub-headings assign.
 * A case with no sub-headings returns empty groups: the material is still the case's, and saying
 * which policy type it stands behind would be this script's guess rather than the file's record.
 */
export function referenceLayers(markdown) {
  const body = referenceBody(markdown);
  const groups = { public: [], expert: [], framework: [] };
  const headings = [...body.matchAll(/^\*\*(.+?)\*\*\s*$/gm)];
  for (let i = 0; i < headings.length; i += 1) {
    const layer = layerFor(headings[i][1]);
    if (!layer) continue;
    const from = headings[i].index + headings[i][0].length;
    const to = i + 1 < headings.length ? headings[i + 1].index : body.length;
    const lines = body.slice(from, to).split('\n')
      .map((raw) => raw.replace(/^[-*]\s*/, '').replace(/\*/g, '').trim())
      .filter(isCitation);
    groups[layer].push(...lines);
  }
  for (const layer of Object.keys(groups)) groups[layer] = [...new Set(groups[layer])];
  return groups;
}

/** Every deep case file the inventory points at, in inventory order. */
export function allCaseFiles(root) {
  const inventoryPath = path.join(root, 'resources/case-families/full-200-rich-candidate-universes.v1.1.json');
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  return inventory.cases.map((entry) => path.join(root, entry.deep_case_path));
}

/** The citations one case file records, read from disk. */
export function referenceLinesFor(file) {
  return referenceLines(fs.readFileSync(file, 'utf8'));
}
