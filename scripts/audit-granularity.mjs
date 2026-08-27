#!/usr/bin/env node
/**
 * Matched-policy-granularity audit across the Featured corpus.
 *
 * Two questions the reviewer asked, kept separate because they are different failures:
 *
 *  1. **Action scope.** Does every candidate state what to *do* in this scenario, or does
 *     one state a principle and leave the action to be inferred? A framework candidate
 *     rendered as a slogan is not comparable with an expert candidate that names a policy,
 *     and QCCS will be scoring two different kinds of object.
 *
 *  2. **Conditionality.** Does a candidate carry the qualifiers ("when", "unless",
 *     "provided", "only if") that make it applicable, or is it stated absolutely? A pool
 *     whose candidates are all unconditional against pools whose candidates are all
 *     hedged is a granularity mismatch even if both name actions.
 *
 * This flags; it does not fix. Framework candidates *should* be more decisive than expert
 * candidates where the theory is more decisive — the audit exists to separate that from
 * a candidate that was simply written as a maxim.
 *
 *   node scripts/audit-granularity.mjs
 *   node scripts/audit-granularity.mjs --flagged   only families with a flag
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'data/featured');
const records = readdirSync(dir)
  .filter((f) => f.endsWith('.json') && f !== 'index.json')
  .map((f) => JSON.parse(readFileSync(join(dir, f), 'utf8')))
  .filter((r) => r.representation.form === 'concise');

// An imperative opening is the cheapest reliable signal that a sentence states an action:
// the candidate begins by telling the decision-maker to do something.
const IMPERATIVE = /^(do not|don't|never|permit|prohibit|allow|require|use|adopt|apply|proceed|withhold|continue|discontinue|retain|extend|approve|delay|deny|decline|postpone|give|grant|treat|follow|prefer|choose|base|create|build|end|meet|move|pause|phase|prioriti[sz]e|reject|respect|restrict|deploy|count|honou?r|present|impose|decarboni[sz]e|regulate|guarantee|cap|let|make|minimi[sz]e|preserve|provide|refer|co-design|allocate|place|set|keep|maintain|exclude|include|fund|invest|pay|reduce|raise|lower|score|rank|weigh|assign|withdraw|escalate|report|disclose|monitor|validate|test)\b/i;
const CONDITIONAL = /\b(when|unless|where|provided|only if|only when|if |until|subject to|absent)\b/i;

// A candidate may open with a subordinate clause that scopes the policy — "Within the
// gray zone, present both options…", "Where the family objects, let them decide…". The
// action verb is then the first word of the main clause, not of the sentence, so the
// scope-setting clause is stripped before the imperative test.
const LEADING_CLAUSE = /^(within|where|when|whenever|for|in|if|unless|after|before|once|during|under|while|assuming|given|as)\b[^,]{0,200},\s*/i;

function clauses(text) {
  // Many candidates are "ground; action" — the normative reason first, then what to do.
  // Both halves are tested, so a real action clause after a semicolon still counts.
  return text.trim().split(/;\s*/).map((c) => c.replace(LEADING_CLAUSE, '').trim());
}

function classify(text) {
  const parts = clauses(text);
  // "X can be justified when …" and "X should …" name an action without an imperative verb.
  const modal = (c) => /\b(should|must|can be justified|is justified|may be|is permissible)\b/i.test(c);
  const acts = parts.map((c) => IMPERATIVE.test(c) || modal(c));
  return {
    statesAction: acts.some(Boolean),
    // The action is present but arrives after a clause of theory. Not a defect on its
    // own; reported so a pool written entirely maxim-first is visible.
    actionAfterGround: acts.length > 1 && !acts[0] && acts.slice(1).some(Boolean),
    conditional: CONDITIONAL.test(text),
    words: text.trim().split(/\s+/).length,
  };
}

let flaggedFamilies = 0;
const onlyFlagged = process.argv.includes('--flagged');

for (const record of records) {
  const rows = [];
  const flags = [];
  for (const pool of ['public', 'expert', 'framework']) {
    for (const c of record.candidate_pools[pool]) {
      const k = classify(c.text);
      rows.push({ pool, id: c.id, ...k });
      if (!k.statesAction) flags.push(`${c.id} (${pool}) states no action - it reads as a principle, not a policy`);
      else if (k.actionAfterGround) flags.push(`NOTE  ${c.id} (${pool}) states its ground before its action`);
    }
  }

  // Conditionality mismatch: a pool with no conditional candidate sitting beside pools
  // where conditionality is the norm.
  const byPool = Object.fromEntries(['public', 'expert', 'framework'].map((p) => [
    p, rows.filter((r) => r.pool === p),
  ]));
  const condCount = (p) => byPool[p].filter((r) => r.conditional).length;
  for (const pool of ['public', 'expert', 'framework']) {
    const others = ['public', 'expert', 'framework'].filter((p) => p !== pool);
    if (condCount(pool) === 0 && others.every((p) => condCount(p) === 2)) {
      flags.push(`${pool} pool is unconditional while both other pools are fully conditional`);
    }
  }

  // Length mismatch: a pool averaging less than half the words of the widest pool is
  // usually a pool that was written as a maxim.
  const avg = (p) => byPool[p].reduce((n, r) => n + r.words, 0) / byPool[p].length;
  const widest = Math.max(...['public', 'expert', 'framework'].map(avg));
  for (const pool of ['public', 'expert', 'framework']) {
    if (avg(pool) < widest / 2) flags.push(`${pool} pool averages ${avg(pool).toFixed(0)} words against ${widest.toFixed(0)} in the widest pool`);
  }

  if (flags.length) flaggedFamilies += 1;
  if (onlyFlagged && !flags.length) continue;

  const summary = ['public', 'expert', 'framework']
    .map((p) => `${p[0]}: ${byPool[p].filter((r) => r.statesAction).length}/2 action, ${condCount(p)}/2 cond, ${avg(p).toFixed(0)}w`)
    .join('  |  ');
  console.log(`${record.case_id}\n  ${summary}`);
  for (const f of flags) console.log(`  FLAG  ${f}`);
}

console.log(`\n${records.length} families audited; ${flaggedFamilies} flagged.`);
