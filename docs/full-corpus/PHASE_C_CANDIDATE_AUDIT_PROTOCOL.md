# Phase C — candidate audit protocol and per-family specification

**Date:** 2026-08-28
**Applies to:** the 8 families the disposition ledger marks `executable-candidate`, and the
8 it marks RECONCILE.
**Status of Phase C record generation: BLOCKED, deliberately.**

---

## 1. Why no records were generated

The corrected rescue plan lists Phase C as "transcribe the 8 `executable-candidate` families
whose dossiers already support execution but have no record," and calls it "the only
record-generation work currently justified by repository state."

Reading those 8 dossiers in full does not support that. Every one of them declares its
judgment **provisionally and subject to a candidate audit that has not been performed**:

| Family | What the dossier actually says |
|---|---|
| M022 | ``executable-other-profile`` **provisionally** … "No machine-readable record should be created before that audit." |
| M036 | "candidate audit must test whether public evidence yields two actionable policy orientations rather than merely a mean difference in discomfort" |
| M043 | "Provisional …, subject to candidate audit. ACOG's professional architecture should not be split artificially." |
| M049 | "Provisional …, likely asymmetric, subject to candidate audit." |
| M059 | "Provisional …, subject to candidate audit. Public candidate grounding needs careful review." |
| M066 | "Provisional …, subject to candidate audit." |
| M169 | "Provisional ``full-corpus-2x1x2-mean-v1``, subject to candidate audit." |
| M189 | "Provisional ``executable-2x2x2``, subject to candidate audit." |

M022 states the prohibition outright. The others make the audit a precondition in substance.

The audit these dossiers demand is not a re-reading of the dossier. In every case it is the
same question, and it is the action-target alignment standard: **does the public/affected
evidence support two action-distinct policy positions, or only a difference in preference,
attitude, comfort or willingness?** That question can only be answered against the underlying
sources. Answering it from the dossier's own summary of those sources, and then writing the
answer into a record as provenance, would manufacture the grounding rather than verify it.

That is precisely the failure Phase A withdrew eight records for. Generating sixteen more
would reproduce it at twice the scale, and this time the records would pass every machine
check — schema, hashes, companion equivalence, action distinctness, geometry, profile — and
report as a complete corpus. They would then be pinned as the partner's production evaluation
corpus. A defect that survives CI and reaches a production run is worse than a red build.

So Phase C stops here, and stops visibly, rather than being completed on paper.

## 2. What the audit must establish, per family

An audit is complete for a family when each of these is answered **from the sources, with the
finding written into the dossier** — not asserted in a commit message:

1. **Action-distinctness of the public pool.** Do the cited studies support two or more
   positions that produce *different institutional actions* under the fixed scenario? A mean
   difference in attitude between two framings is not two policies.
2. **The inference bridge.** If a public candidate is a `source-informed-policy-inference`,
   what exactly is the step from the evidence to the institutional policy, and is it stated in
   the record rather than elided? Willingness to use is not a policy to establish; discomfort
   with an act is not endorsement of a rule against it.
3. **Expert pool cardinality.** Does professional guidance contain genuinely action-distinct
   architectures, or one architecture that would have to be split artificially to reach a
   desired shape? A singleton expert pool is a legitimate result, not a failure.
4. **Framework distinctness.** Do the framework positions terminate in different actions under
   the fixed fact pattern, or in the same action by different reasoning? Same action, one
   candidate.
5. **Scenario divergence.** Does the fixed fact pattern lie where the represented policies
   actually diverge?
6. **Per-candidate provenance.** Every candidate needs named sources it is genuinely adapted
   from, at the granularity the existing records use.

Only when 1–6 are answered does the geometry follow — and the geometry is an output of the
audit, never a target set before it.

## 3. Per-family audit specification

### M022 — resuscitation at the threshold of viability
Pre-audit estimate `2 public × 1 expert × 2 framework`. Public evidence is PMID 39521888
(parental balancing of survival against suffering) and PMID 32332448 (comfort care poorly
understood, often described as "doing nothing"). **Critical risk:** the dossier's own §9 warns
these may be *personal treatment preferences*, not positions on the decision rule. The second
source is arguably about counseling quality rather than about a policy at all. The expert layer
(ACOG Periviable Birth) looks genuinely singleton — it recommends individualized shared
decision-making, which is one architecture. Audit must resist splitting it.

### M036 — withholding versus withdrawing
Pre-audit estimate `2 public × 1 expert × 2 framework`. Public evidence is PMID 38912645
(preregistered, n=1067), PMID 18279501, PMID 38588396. **Critical risk, named by the dossier
itself:** distinguishing public *discomfort* with withdrawal from a considered endorsement of a
categorical ethical difference. Note also that 38912645 concerns reimbursement/rationing
framing; §13 lists "conflating bedside permissibility with reimbursement/rationing policy
evidence" as a construction risk. Expert layer (AMA: no ethical difference) is singleton; the
dissent at PMID 30896350 belongs in the framework pool, as §10 says.

### M043 — ACOG architecture must not be split
Audit must confirm whether the expert pool is one or two architectures. The dossier's warning
that ACOG "should not be split artificially" is the whole question.

### M049 — asymmetric, professional guidance converges
Expect a singleton expert pool. Audit the affected-patient evidence for two dispositions.

### M059 — HFEA serious-disease vs "little or no benefit"
The interesting claim is that two HFEA rationales may be *action-distinct*. Audit whether they
diverge on the fixed fact pattern or only in stated rationale — same action, one candidate.
Dossier flags public candidate grounding as needing careful review.

### M066 — ISPD leaves secondary-finding policy open
Most likely of the eight to yield genuine expert pluralism, because the professional body
explicitly declines to settle the policy. Audit whether "left open" yields two *positions* or
merely an absence of one; an absence is not a candidate.

### M169 — solar geoengineering field test
**Weakest public layer of the eight.** The evidence is "heterogeneous risk/benefit perceptions"
and "concern for meaningful public participation" — attitude and process-preference data. The
step to "authorize under governance" versus "defer pending stronger international governance"
is a substantial inference that must be made explicit if it is made at all. Dossier is 35 lines
against ~110 for the developed ones. Recommend holding unless the audit is unusually convincing.

### M189 — mammography where guideline bodies disagree
**Strongest of the eight, and the recommended starting point.** The expert layer is verifiable
and unambiguously action-distinct from published guidance: USPSTF 2024 (biennial, 40–74) versus
current ACS (annual 45–54, option to start annually at 40–44). Public evidence is PMID 39008858
and PMID 37155576 with real preference heterogeneity including movement after decision
information. Audit still required for the public pool, but this family has the clearest path to
a defensible record. Dossier is thin (32 lines) relative to its evidentiary strength — the
audit should also deepen it.

## 4. The other queue — 8 families marked RECONCILE

M075, M094, M102, M106, M123, M139, M141, M144 carry hand-built records that pass every machine
invariant and carry 8–11 named sources each, but whose dossier judgment was written *before* the
audit that produced the record and was never revised. These need the opposite motion from Phase
C: not a new audit, but the existing one written back into the dossier as an explicit
re-judgment, in the form M097 uses.

Until that happens the ledger will keep reporting them as RECONCILE. That is intended. It is a
smaller and much better-defined task than Phase C, and it does not require new research.

## 5. What must not happen next

- Do not generate these 16 records from the dossier text. The dossiers say not to.
- Do not treat a geometry named in a dossier as a target to build toward. Every one of them is
  labelled an estimate.
- Do not read this document as saying the 8 families are non-executable. It says they are
  **unaudited**, which is a different and recoverable state.
- Do not give the partner a pinned SHA as a full-corpus production pin on the strength of the
  current 31 families without saying plainly that it is 31, not 106.
