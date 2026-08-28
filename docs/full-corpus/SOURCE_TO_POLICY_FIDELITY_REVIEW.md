# Source-to-policy fidelity review — Full Corpus executable subset

**Date:** 2026-08-28
**Scope:** all 34 executable families / 68 records at `d547e05` and after.
**Performed by:** a model (Claude Opus 5), not a human reviewer.
**Effect on record state:** none. `reviewed_by_human` remains `false` on every record and the
release stays `release-candidate`.

---

## 1. What this is, and what it is not

The completion criterion names independent human review of source-to-policy fidelity as the gate
before release. **This is not that review.** It is a systematic pass intended to make that review
cheaper and better targeted: to establish which properties can be checked mechanically and are
holding, to separate those from the ones that need a person, and to hand the reviewer a list of
places worth their attention rather than 34 families and 420 candidates undifferentiated.

Three limitations bound everything below, and the first is the most important.

**I authored three of the 34 families.** M189, M129 and M146 were built in this same session, from
audits I performed. A review of one's own construction is worth less than a review of someone
else's, and the failure mode is not carelessness but agreement: the same judgment that built a
candidate will find it sound. Those three should get *more* reviewer scrutiny than the rest, not
less, and nothing in this document should be read as reducing it.

**Citation verification was partial.** I verified sources directly for the three families I built
and for the fifteen audited families where a source decided the outcome. The remaining
citations — the bulk of roughly 200 across the corpus — were read for coherence with the claim
made, not confirmed to exist and say what is attributed to them. That confirmation is real work
and it has not been done.

**Some properties are not checkable by anyone quickly.** Whether a fixed fact pattern truly lies
where the represented policies diverge is a judgment about the case, not a property of the file.

## 2. Mechanical invariants — holding

`scripts/fidelity-audit.mjs` checks these and fails on violation. Across **420 candidates**:

| Invariant | Result |
|---|---|
| Every candidate carries at least one provenance source | 420 / 420 |
| `framework-derived-policy` appears only in the framework pool | no violations |
| No public or expert candidate claims framework-derived basis | no violations |
| No `synthetic-author-constructed-policy` anywhere | none present |

The absence of synthetic candidates matters: the four-basis taxonomy permits them, and a corpus
under pressure to fill shapes is exactly where they would appear. None does.

### Basis distribution

| Pool / basis | Candidates |
|---|---|
| public / source-informed-policy-inference | 98 |
| public / direct-policy-evidence | 40 |
| expert / direct-policy-evidence | 98 |
| expert / source-informed-policy-inference | 12 |
| framework / framework-derived-policy | 172 |

This is the shape the action-alignment rule predicts, and its asymmetry is the evidence that the
rule was applied rather than recited. Public evidence usually measures what people want for
themselves, so most public candidates should need a declared inference bridge — 98 of 138 do.
Professional guidance usually *is* a policy, so most expert candidates should be direct — 98 of
110 are. A corpus that had quietly labelled preference data as direct policy evidence would show
the opposite skew in the public pool.

## 3. Inference bridges — all stated

Every one of the **110 source-informed candidates** states, in its provenance summary, what the
step from evidence to policy is: what the source measured, what the candidate asserts, and which
part is Bench-authored. There are no candidates that assert an inference without declaring it.

A first pass of this check flagged four candidates (M004 `pub2`, M005 `pub1` and `pub2`, M010
`pub2`). All four were false positives on phrasing — the check looked for "inference" and found
"inferred", looked for "does not" and found "do not". The check in the script is now a reading aid
that never fails, for that reason: a keyword list tuned until it goes silent has replaced the
judgment rather than supported it.

## 4. Singleton pools — all justified

Sixteen pools across the corpus hold exactly one candidate. Construction rule 2 permits this only
after an active competing-policy sweep shows convergence, so each was checked against its dossier.
**All sixteen are justified.** Fifteen state the sweep conclusion explicitly, and several state it
as a refusal, which is the stronger form:

- **M033** — "Physician reluctance is relevant evidence about professional disagreement but is not
  promoted into a second authoritative expert policy merely to balance the pool."
- **M028** — "a second expert candidate is not manufactured from historical institutional variation."
- **M004** — "SAHM and ACOG guidance substantially converge on the same professional architecture,
  so the expert pool remains one candidate rather than manufacturing a second near-duplicate."
- **M012** — "Professional consensus therefore does **not** naturally yield two opposed expert
  candidates."
- **M034** — "one broad individualized/shared-decision architecture rather than two opposing expert
  rules."

M025 is the one exception in form rather than substance: it grounds its singleton in the American
Cochlear Implant Alliance architecture without framing that as the outcome of a search. Worth a
sentence from the author; not a defect.

Thirteen of the sixteen singletons are expert pools, which is the expected direction. Professional
bodies converge more often than publics do, and a corpus that reported plural expert positions in
most families would be the surprising one.

## 5. Near-duplicate candidates — one, and it is legitimate

The validator rejects candidates whose text repeats another's verbatim. That leaves the near
misses, so all 420 candidates were compared pairwise on token overlap within each record. **One
pair exceeds 0.50**: M010 `pub2` (public) and `exp1` (expert), at 0.52.

Reading them, they do direct substantially the same action — a qualified interpreter handles the
material consent discussion while the family member remains for support. This is legitimate
cross-source convergence rather than a defect: the public and expert layers genuinely agree, the
QCCS cell for that pair will score high, and that is a measurement rather than an artefact. It
would be degenerate only if it were the sole cross-source pair those pools had. M010 is 2×2×2 with
twelve pairs, so it is not.

The contrast is deliberate: M133 was **held** during the candidate audits for exactly the
degenerate version of this — its public and expert singletons would have expressed the same
action, and that single pair would have been the entire public-expert comparison.

## 6. What the human reviewer should look at, in order

1. **M189, M129, M146 — the three families built in this session.** Same-session construction and
   review. Check the audits as well as the records: `docs/full-corpus/` carries a
   `Candidate audit result` section for each stating what was verified against which source.
2. **Citation confirmation across the corpus.** Roughly 200 citations, most unverified here. The
   highest-value subset is the direct-policy-evidence candidates, because those claim a source
   *states* a policy; an error there is a false claim of grounding rather than a weak inference.
3. **Scenario/action divergence, family by family.** Does the fixed fact pattern actually sit where
   the represented policies produce different actions? This is the property most resistant to
   mechanical check and the one whose failure is least visible downstream.
4. **The eight reconciled families** (M075, M094, M102, M106, M123, M139, M141, M144). Their audits
   were performed before this session and written back into the dossiers from record provenance;
   the reasoning is reconstructed rather than original.
5. **M025's singleton framing**, per §4.
6. **M010's converging pair**, per §5 — a second opinion on whether the convergence is real.

## 7. What this review did not change

No record was edited. No `reviewed_by_human` flag was set. No family was promoted or demoted. The
corpus at the time of writing is 34 executable families and 68 records, and this document does not
move that number in either direction.
