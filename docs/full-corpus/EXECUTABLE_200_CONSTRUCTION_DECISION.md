# Bioethics Bench — executable 200 construction decision

**Decision date:** 2026-08-27  
**Scope:** M001–M200 deep-research corpus  
**Status:** authoritative construction decision for the next phase

## Decision

The 200-case research corpus will now be completed as an **executable 200-case benchmark**. The earlier strict source-to-policy review remains preserved as a source-grounding study, but it is no longer an eligibility gate for whether a researched family may become executable.

The strict review established an important methodological result: much empirical bioethics evidence concerns preferences, attitudes, uptake, willingness or moral approval rather than the institutional action represented by a benchmark policy. That result is retained as **action-target alignment** and the 17 independently cleared Full Corpus families remain a high-confidence **direct-grounding subset**. It does not follow that the other researched families should be excluded from the working benchmark.

The executable benchmark instead makes the construction step explicit at the **candidate level**.

## Canonical policy-basis taxonomy

Every executable candidate in the reconstructed Full Corpus must carry exactly one of these four policy-basis labels:

1. **Direct policy evidence**  
   The cited source itself addresses substantially the same action, rule, obligation, eligibility criterion, allocation rule, consent architecture, authorization decision or other policy target represented by the candidate. Editorial work may adapt wording and add narrow operational completion, but does not supply the core policy orientation.

2. **Source-informed policy inference**  
   The cited source provides relevant preferences, attitudes, values, behavior, willingness, lived-experience evidence, professional concerns or other source-class evidence, and the Bench explicitly draws the inference to an actionable policy. The policy must be a reasonable and transparent construction from the evidence, but it is **not attributed to the source as though the source directly endorsed that policy**.

3. **Framework-derived policy**  
   The policy is derived from an identified normative framework or philosophical position and is authored as an actionable implication of that framework for the represented scenario. Framework candidates remain constructions, not quotations.

4. **Synthetic/author-constructed policy**  
   The policy is deliberately authored to instantiate a serious, action-distinct alternative in the decision space when direct or source-informed evidence does not supply one adequately. It is not represented as an empirical public preference or professional recommendation. Relevant factual or scholarly sources may motivate the case, but they are not claimed to be the source of the policy itself.

These labels describe **how the policy candidate was obtained**, not how morally credible it is and not whether SACRE should prefer it.

## Source pool and policy basis are different axes

`source_pool` continues to identify the perspective layer in which a candidate is represented (`public`, `expert`, `framework`). The new policy-basis label identifies the epistemic/construction relation between the represented policy and its sources.

For direct and source-informed public/expert candidates, the pool corresponds to the source class from which the policy is drawn or inferred. A synthetic candidate placed in a public- or expert-oriented slot must be described explicitly as an **author-constructed comparator for that perspective layer**, not as evidence that a public or professional group actually holds the policy. Downstream analyses must be able to stratify or exclude such candidates.

Framework candidates use **Framework-derived policy** unless a future, separately justified design says otherwise.

## Construction priority

When building a candidate set, use the strongest available provenance in this order:

1. direct policy evidence;
2. source-informed policy inference;
3. framework-derived policy for the framework layer;
4. synthetic/author-constructed policy only where needed to create a serious, action-distinct comparison.

Do not replace a directly supported policy with a synthetic one merely to make a candidate set look more balanced.

## Executable shape

The default target is a **2 public × 2 expert × 2 framework** candidate set because a common six-candidate geometry makes cross-case SACRE execution and comparison substantially easier. The Full Corpus uses `full-corpus-2x2x2-v1`, not the Featured profile of identical geometry.

Uniform geometry is a construction convenience, **not a claim that every domain contains two empirically observed public positions and two empirically observed professional positions**. The policy-basis labels make that distinction explicit. A registered asymmetric Full Corpus profile may still be used where two candidates in a layer would be near-entailing or otherwise substantively meaningless even after transparent construction.

Every case must still satisfy action distinctness and scenario/action divergence: the represented scenario must lie in a region where the candidate set produces meaningful differences in recommended action.

## Relationship to the strict review

The strict review is retained rather than overwritten.

- The 17 independently cleared Full Corpus families constitute the **direct-grounding subset**.
- Demoted cases are not reclassified as having passed the strict gate. Instead, their new executable candidates are labeled honestly as source-informed, framework-derived or synthetic where appropriate.
- `research-complete-architecture-limited` remains a useful research disposition for the strict source architecture, especially for nonhuman-interest cases. It does not prevent constructing an executable benchmark case under the present decision.
- The earlier 17/200 result should be reported only as the yield of the strict action-aligned source-grounding exercise, not as the executable size of Bioethics Bench.

## Featured boundary

Featured v1 remains frozen and separate. Its records and hashes are not rewritten to adopt the new labels retroactively. The Full Corpus uses Full Corpus profiles and its own manifest. The lineage guard introduced before this decision remains correct and necessary.

## Authorship and independent review

The corpus-author side authors the reconstructed executable candidates and concise/detailed companion records. The independent partner remains the review gate and implementation custodian; they should not author the candidate sets they subsequently certify unless that loss of independence is explicitly accepted and documented.

Independent review of reconstructed records should check:

1. whether the policy-basis label is accurate;
2. whether direct policies really are direct;
3. whether source-informed inferences are reasonable and not falsely attributed;
4. whether synthetic policies are clearly disclosed and serious rather than straw positions;
5. action distinctness and matched granularity;
6. scenario/action divergence;
7. concise/detailed companion equivalence on load-bearing facts;
8. provenance completeness and correct Full Corpus profile lineage.

## Minimal implementation rule

Do not build a second provenance ontology. Add one machine-readable candidate-level policy-basis field with exactly the four values above, while retaining the existing `construction_method` field for backward compatibility and Featured v1. The older field records textual construction mechanics; the new field records the substantive relation between a policy and its evidentiary basis.

The intended mapping for newly reconstructed Full Corpus candidates is:

| policy basis | usual existing `construction_method` |
|---|---|
| Direct policy evidence | `extracted-from-evidence` or `adapted-from-source` |
| Source-informed policy inference | `adapted-from-source` |
| Framework-derived policy | `derived-from-framework` |
| Synthetic/author-constructed policy | `editorial` |

Synthetic candidates must not be presented as empirical public or professional positions. A source-informed candidate must state the inferential step in `provenance.summary`. Direct policy evidence should identify the source-level action being represented.

## Immediate work plan

1. Implement the single `policy_basis` field and relax the old strict Full Corpus gate so transparently inferred and synthetic candidates are allowed without false attribution.
2. Use the completed M001–M200 deep research as the source layer; do not restart broad literature research case by case unless a candidate cannot be constructed responsibly from the existing packet.
3. Reconstruct cases in batches, prioritizing direct evidence and then drawing explicit source-informed inferences.
4. Build concise/detailed companions and compute hashes before committing valid pairs.
5. Send each authored batch to the independent reviewer for provenance-label, action-divergence and companion review.
6. Complete a 200-family Full Corpus executable manifest, with candidate-level policy-basis counts so downstream P1/P2/P3 analyses can stratify direct, inferred, framework and synthetic construction.

The goal of this phase is therefore **200 executable, transparently constructed normative decision problems**, not 200 claims that empirical bioethics literature directly elicited every represented policy.