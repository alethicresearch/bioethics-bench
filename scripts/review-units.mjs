/**
 * Per-candidate fingerprints for the review gate.
 *
 * A record's content hash covers the whole record, so any edit anywhere moves it. That is right
 * for the vendor pin — SACRE cares whether the payload it holds is the payload upstream has — and
 * wrong for a review verdict, which is a judgment about one candidate. Repairing a citation in
 * `pub1` should not silently invalidate a reviewer's finding about `exp2`.
 *
 * So each reviewable unit gets its own fingerprint over just the material a verdict is about: the
 * candidate's text, its basis, and its provenance. A returned verdict carries the fingerprint it
 * judged, and the gate can then answer the question that actually matters — did the thing you
 * looked at change? — rather than the question the record hash answers, which is whether anything
 * did.
 */
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { jcs } from './hash-case.mjs';

export const MANIFEST = 'releases/full-corpus-v1-completion-candidate/manifest.json';

export function unitFingerprint(candidate) {
  const material = {
    text: candidate.text,
    policy_basis: candidate.policy_basis,
    provenance: candidate.provenance,
  };
  return `u1:${createHash('sha256').update(jcs(material)).digest('hex').slice(0, 16)}`;
}

// The two families whose public pool derives wholly from their own expert pool's document. M045 is
// detectable by citation string; M060 cites the same ASRM opinion in different words and was found
// by reading, so it is named rather than derived.
export const RESOURCE_FAMILIES = new Set(['M045', 'M060']);

export function collectUnits() {
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const byFamily = new Map();
  for (const r of manifest.records) {
    const family = r.record_id.slice(0, 4).toUpperCase();
    if (!byFamily.has(family) || r.representation === 'concise') byFamily.set(family, r);
  }

  const families = new Map();
  for (const [family, meta] of [...byFamily].sort(([a], [b]) => a.localeCompare(b))) {
    const record = JSON.parse(readFileSync(meta.path, 'utf8'));
    const units = [];
    for (const pool of ['public', 'expert']) {
      for (const c of record.candidate_pools?.[pool] ?? []) {
        const task = c.policy_basis === 'source-informed-policy-inference' ? 'A'
          : c.policy_basis === 'direct-policy-evidence' ? 'B' : null;
        if (!task) continue;
        units.push({ id: c.id, pool, task, fingerprint: unitFingerprint(c), candidate: c });
      }
    }
    if (RESOURCE_FAMILIES.has(family)) {
      // The C unit is about the pool as a whole, so its fingerprint covers every public candidate.
      const pubs = record.candidate_pools?.public ?? [];
      const fp = `u1:${createHash('sha256').update(jcs(pubs.map(unitFingerprint))).digest('hex').slice(0, 16)}`;
      units.push({ id: 'public-pool', pool: 'public', task: 'C', fingerprint: fp, candidate: null });
    }
    if (units.length) families.set(family, { meta, record, units });
  }
  return families;
}
