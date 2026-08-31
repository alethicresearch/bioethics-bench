import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'resources/case-families/full-200-rich-candidate-universes.v1.1.json');
const PROJECTION_DIR = path.join(ROOT, 'resources/projections/source-grounded');
const OUTPUT = path.join(ROOT, 'resources/cases/full-200-cases.v1.json');
const CONSTRUCTED = path.join(ROOT, 'resources/cases/constructed-policies.v1.json');

const CATEGORIES = {
  clinical: 'Clinical care',
  children: 'Children & families',
  'end-of-life': 'End of life',
  reproduction: 'Reproduction & genetics',
  research: 'Research ethics',
  'public-health': 'Public health & allocation',
  transplant: 'Transplantation & donation',
  'global-health': 'Global health',
  'mental-health': 'Mental health & disability',
  neuro: 'Neuroethics',
  'ai-data': 'AI & health data',
  animals: 'Animals & One Health',
  environment: 'Climate & environment',
  everyday: 'Everyday practice',
};

// Public / Expert / Framework is the policy type; Direct / Inferred / Constructed is how the
// policy was sourced. They are separate, and neither implies the other.
//
// Types come from a reviewed assignment where one exists, and otherwise from the wording of the
// policy and its source note. Only the reviewed ones are marked reviewed in the published file;
// the rest are a first pass, and the site says so rather than presenting them as settled.
// The list below covers policies whose wording alone does not decide the type.
const TYPE_OVERRIDES = {
  'M008:c04': ['expert'], 'M011:c06': ['framework'], 'M012:c06': ['framework'],
  'M019:c06': ['expert'], 'M033:c07': ['expert'], 'M034:c03': ['expert'],
  'M036:c04': ['framework'], 'M037:c04': ['expert'], 'M038:c02': ['public'],
  'M040:c05': ['expert'], 'M041:c05': ['public'], 'M047:c04': ['expert'],
  'M049:c01': ['public'], 'M049:c03': ['expert'], 'M054:c03': ['expert'],
  'M054:c07': ['expert'], 'M055:c03': ['expert'], 'M055:c04': ['expert'],
  'M058:c04': ['expert'], 'M059:c04': ['public'], 'M062:c04': ['framework'],
  'M066:c06': ['public'], 'M066:c07': ['expert'], 'M070:c06': ['expert'],
  'M073:c02': ['expert'], 'M074:c04': ['expert'], 'M077:c04': ['public'],
  'M080:c04': ['framework'], 'M081:c02': ['expert'], 'M082:c06': ['expert'],
  'M084:c03': ['expert'], 'M086:c02': ['framework'], 'M088:c02': ['expert'],
  'M088:c04': ['expert'], 'M089:c04': ['framework'], 'M091:c03': ['framework'],
  'M094:c04': ['expert'], 'M098:c06': ['expert'], 'M100:c06': ['expert'],
  'M101:c01': ['public'], 'M101:c02': ['public'], 'M101:c03': ['expert'],
  'M101:c04': ['framework'], 'M102:c05': ['expert'], 'M105:c03': ['framework'],
  'M105:c04': ['expert'], 'M108:c02': ['framework'], 'M109:c03': ['framework'],
  'M115:c03': ['framework'], 'M118:c01': ['expert'], 'M124:c04': ['framework'],
  'M124:c07': ['expert'], 'M126:c04': ['expert'], 'M128:c03': ['framework'],
  'M129:c04': ['framework'], 'M130:c04': ['expert'], 'M132:c03': ['framework'],
  'M132:c07': ['expert'], 'M133:c06': ['public'], 'M143:c04': ['expert'],
  'M144:c02': ['public'], 'M145:c03': ['expert'], 'M146:c02': ['public'],
  'M147:c03': ['expert'], 'M148:c04': ['expert'], 'M149:c03': ['expert'],
  'M150:c02': ['expert'], 'M150:c04': ['expert'], 'M151:c04': ['expert'],
  'M153:c04': ['expert'], 'M155:c04': ['expert'], 'M157:c03': ['framework'],
  'M158:c04': ['expert'], 'M159:c04': ['framework'], 'M161:c03': ['expert'],
  'M164:c03': ['framework'], 'M164:c05': ['public'], 'M165:c03': ['framework'],
  'M166:c03': ['framework'], 'M167:c03': ['framework'], 'M171:c04': ['framework'],
  'M172:c06': ['framework'], 'M173:c03': ['framework'], 'M174:c07': ['framework'],
  'M175:c04': ['framework'], 'M180:c04': ['expert'], 'M181:c02': ['public'],
  'M185:c05': ['expert'], 'M187:c02': ['expert'], 'M191:c04': ['expert'],
  'M194:c04': ['expert'], 'M196:c01': ['public'], 'M196:c05': ['public'],
  'M198:c05': ['expert'],
};

function categoryFor(id) {
  const n = Number(String(id).replace(/\D/g, ''));
  if (n <= 20) return 'clinical';
  if (n <= 25) return 'children';
  if (n <= 40) return 'end-of-life';
  if (n <= 70) return 'reproduction';
  if (n <= 93) return 'research';
  if (n <= 100) return 'public-health';
  if (n <= 113) return 'transplant';
  if (n <= 121) return 'global-health';
  if (n <= 126) return 'public-health';
  if (n <= 134) return 'mental-health';
  if (n <= 138) return 'neuro';
  if (n <= 151) return 'ai-data';
  if (n <= 166) return 'animals';
  if (n <= 175) return 'environment';
  return 'everyday';
}

function stripMarkdown(text) {
  return String(text || '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadingSection(markdown, labels) {
  for (const label of labels) {
    const re = new RegExp(`^##\\s+(?:\\d+[.)]?\\s+)?${label}\\s*$`, 'im');
    const match = re.exec(markdown);
    if (!match) continue;
    const rest = markdown.slice(match.index + match[0].length);
    const next = rest.search(/^##\s+/m);
    const value = stripMarkdown(next >= 0 ? rest.slice(0, next) : rest);
    if (value) return value;
  }
  return '';
}

function extractScenarioPair(markdown, label, nextLabel) {
  const start = new RegExp(`\\*\\*${label}:\\*\\*\\s*`, 'i').exec(markdown);
  if (!start) return '';
  const rest = markdown.slice(start.index + start[0].length);
  const next = nextLabel ? new RegExp(`\\n\\s*\\*\\*${nextLabel}:\\*\\*`, 'i').exec(rest) : null;
  const heading = /\n##\s+/.exec(rest);
  let end = rest.length;
  if (next) end = Math.min(end, next.index);
  if (heading) end = Math.min(end, heading.index);
  return stripMarkdown(rest.slice(0, end));
}

function extractDecisionQuestion(markdown, title) {
  const match = /\*\*Decision question:\*\*\s*([^\n]+)/i.exec(markdown)
    || /^Decision question:\s*([^\n]+)/im.exec(markdown);
  if (match) return stripMarkdown(match[1]);
  return title;
}

function caseTexts(markdown, title) {
  let concise = extractHeadingSection(markdown, ['Concise representation', 'Concise scenario']);
  let detailed = extractHeadingSection(markdown, ['Detailed representation', 'Detailed scenario']);
  if (!concise) concise = extractScenarioPair(markdown, 'Concise', 'Detailed');
  if (!detailed) detailed = extractScenarioPair(markdown, 'Detailed', null);
  const fallback = extractDecisionQuestion(markdown, title);
  return {
    concise: concise || detailed || fallback,
    detailed: detailed || concise || fallback,
  };
}

function sourcing(policy) {
  const cls = String(policy.provenance_class || '').toLowerCase();
  const label = String(policy.audit_provenance_label || '').toLowerCase();
  if (cls === 'direct-source') return 'direct';
  if (cls === 'constructed-comparator') return 'constructed';
  if (cls === 'mixed') return policy.audit_source_mark ? 'inferred' : 'constructed';
  if (label.includes('constructed') && !policy.audit_source_mark) return 'constructed';
  return 'inferred';
}

function loadReviewedTypes() {
  const result = new Map();
  if (!fs.existsSync(PROJECTION_DIR)) return result;
  for (const name of fs.readdirSync(PROJECTION_DIR).filter((x) => x.endsWith('.json'))) {
    const file = JSON.parse(fs.readFileSync(path.join(PROJECTION_DIR, name), 'utf8'));
    const caseId = String(file.case_family_id || '').toUpperCase();
    for (const [type, ids] of Object.entries(file.role_assignments || {})) {
      for (const id of ids) {
        const key = `${caseId}:${id}`;
        if (!result.has(key)) result.set(key, new Set());
        result.get(key).add(type);
      }
    }
  }
  return result;
}

const PUBLIC_TERMS = ['public', 'affected', 'service-user', 'service user', 'patient evidence', 'patient preference', 'patient survey', 'community preference', 'caregiver', 'parent preference', 'stakeholder', 'citizen', 'survey', 'preference evidence', 'attitude'];
const EXPERT_TERMS = ['professional', 'expert', 'guidance', 'governance', 'clinical', 'institution', 'who', 'aap', 'acog', 'ama', 'fda', 'cdc', 'woah', 'isscr', 'cioms', 'acmg', 'nice', 'icer', 'hrsa', 'optn', 'hfea', 'national academies', 'policy', 'regulat', 'legal', 'law', 'irb', 'crisis standards', 'care/sing', 'dutch policy'];
const FRAMEWORK_TERMS = ['framework', 'autonomy', 'utilitarian', 'consequential', 'deont', 'rights', 'justice', 'equity', 'fairness', 'benefic', 'harm-prevention', 'proportionality', 'capabilit', 'solidarity', 'stewardship', 'libert', 'precaution', 'moral', 'best interests', 'substituted judgment', 'nuffield', 'unesco-derived', 'olmstead-derived'];

function inferTypes(caseId, policy, reviewed) {
  const key = `${caseId}:${policy.candidate_id}`;
  if (reviewed.has(key)) return [...reviewed.get(key)].sort();
  const label = String(policy.audit_provenance_label || '').toLowerCase();
  const text = String(policy.text || '').toLowerCase();
  const types = new Set();
  if (PUBLIC_TERMS.some((x) => label.includes(x))) types.add('public');
  if (EXPERT_TERMS.some((x) => label.includes(x))) types.add('expert');
  if (FRAMEWORK_TERMS.some((x) => label.includes(x))) types.add('framework');
  if (!types.size) {
    if (['autonomy', 'equal moral', 'equal status', 'justice', 'fairness', 'rights', 'right to', 'dignity', 'best interests', 'substituted judgment', 'most vulnerable', 'cost-effective', 'maximize', 'maximise', 'utility', 'proportional', 'capabilities', 'solidarity', 'reciprocity', 'precaution', 'welfare', 'moral status', 'nonmalefic', 'benefic'].some((x) => text.includes(x))) types.add('framework');
    if (['clinician', 'hospital', 'program', 'institution', 'committee', 'irb', 'regulator', 'authority', 'health system', 'service', 'professional', 'review board', 'oversight', 'guideline', 'require ', 'permit ', 'prohibit ', 'report ', 'offer ', 'provide ', 'screen ', 'testing', 'monitoring', 'surveillance', 'disclosure', 'counseling', 'counselling', 'referral'].some((x) => text.includes(x))) types.add('expert');
    if (['patient chooses', 'patient choice', 'patient preference', 'family preference', 'parental preference', 'community choice', 'public preference', 'individual preference', 'allow the patient', 'respect refusal', 'honor refusal', 'honour refusal', 'patient-led'].some((x) => text.includes(x))) types.add('public');
  }
  if (!types.size && TYPE_OVERRIDES[key]) return TYPE_OVERRIDES[key];
  if (!types.size) throw new Error(`No Public / Expert / Framework type assigned for ${key}`);
  return [...types].sort();
}

const source = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));
const reviewed = loadReviewedTypes();
/* Cases that record no policy of a given type carry one written by the Bench, so every case can be
   evaluated across Public, Expert and Framework. It is published as sourcing "constructed", and
   where the case file judged the evidence insufficient to support such a pool, the case says so. */
const constructed = JSON.parse(fs.readFileSync(CONSTRUCTED, 'utf8')).policies;
/* Two policies (M189 c01 and c02) open with the classification they were filed under —
   "public/source-informed orientation toward …". The type and sourcing fields now carry that,
   so the prefix repeats itself in the reader's own words and adds the audit vocabulary back.
   Drop it here; the underlying record keeps the original wording. */
function publicPolicyText(text) {
  return String(text || '').replace(/^(?:public|expert|framework)\/source-informed\s+/i, '');
}

let policyCount = 0;
const cases = source.cases.map((entry) => {
  const markdown = fs.readFileSync(path.join(ROOT, entry.deep_case_path), 'utf8');
  const { concise, detailed } = caseTexts(markdown, entry.title);
  const policies = entry.candidate_universe.map((policy) => {
    policyCount += 1;
    return {
      id: policy.candidate_id,
      text: publicPolicyText(policy.text),
      types: inferTypes(entry.inventory_id, policy, reviewed),
      type_reviewed: reviewed.has(`${entry.inventory_id}:${policy.candidate_id}`),
      sourcing: sourcing(policy),
    };
  });
  const added = constructed[entry.inventory_id];
  if (added) {
    const present = new Set(policies.flatMap((p) => p.types));
    if (present.has(added.type)) throw new Error(`${entry.inventory_id} already records a ${added.type} policy`);
    policyCount += 1;
    policies.push({
      id: `c${String(policies.length + 1).padStart(2, '0')}`,
      text: added.text,
      types: [added.type],
      type_reviewed: false,
      sourcing: 'constructed',
      written_by_bench: true,
    });
  }
  return {
    id: entry.inventory_id,
    title: entry.title,
    case_file_objects_to_pool: added?.case_file_objects === true ? added.type : undefined,
    category: categoryFor(entry.inventory_id),
    concise,
    detailed,
    policies,
    source_file: entry.deep_case_path,
  };
});

if (cases.length !== 200) throw new Error(`Expected 200 cases, found ${cases.length}`);
if (policyCount !== 1436) throw new Error(`Expected 1436 policies, found ${policyCount}`);
for (const benchCase of cases) {
  if (!benchCase.concise || !benchCase.detailed) throw new Error(`Missing case text for ${benchCase.id}`);
  for (const policy of benchCase.policies) {
    if (!policy.types.length) throw new Error(`Untyped policy ${benchCase.id}:${policy.id}`);
  }
}

const output = {
  resource_id: 'bioethics-bench-cases',
  resource_version: '1.0.0',
  case_count: cases.length,
  policy_count: policyCount,
  categories: CATEGORIES,
  policy_types: ['public', 'expert', 'framework'],
  sourcing_types: ['direct', 'inferred', 'constructed'],
  reviewed_policy_count: cases.reduce((n, c) => n + c.policies.filter((p) => p.type_reviewed).length, 0),
  cases,
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
const rendered = `${JSON.stringify(output, null, 2)}\n`;
if (process.argv.includes('--write')) {
  fs.writeFileSync(OUTPUT, rendered);
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)}: ${cases.length} cases / ${policyCount} policies.`);
} else {
  if (!fs.existsSync(OUTPUT)) throw new Error(`${path.relative(ROOT, OUTPUT)} is missing; run with --write`);
  if (fs.readFileSync(OUTPUT, 'utf8') !== rendered) throw new Error(`${path.relative(ROOT, OUTPUT)} is stale; run with --write`);
  console.log(`Verified ${cases.length} cases / ${policyCount} policies.`);
}
