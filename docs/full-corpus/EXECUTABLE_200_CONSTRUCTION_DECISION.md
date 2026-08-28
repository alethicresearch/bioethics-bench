# Bioethics Bench — Full Corpus reconstruction decision

**Decision date:** 2026-08-27  
**Updated:** 2026-08-27 after candidate-field reconstruction reset  
**Scope:** M001–M200 deep-research corpus  
**Status:** authoritative construction decision for the next phase  
**Filename note:** the historical filename is retained for repository continuity; the present decision supersedes the earlier goal of forcing all 200 families into executable form.

## Decision

The M001–M200 deep-research corpus is complete. The next phase is a **candidate-field reconstruction pass across all 200 families**, using the existing dossiers as the research substrate.

Every family receives a provenance-aware candidate-field assessment. Families that support a strong executable representation are constructed as versioned concise/detailed record pairs. Families that do not support a compelling executable frame remain first-class researched cases rather than being padded with weak or artificial candidates merely to reach a numerical target.

The earlier strict source-to-policy review remains preserved as a source-grounding study. It established the methodological problem of **action-target alignment**: much empirical bioethics evidence concerns preferences, attitudes, uptake, willingness, experience or moral approval rather than the institutional action represented by a benchmark policy. The 17 families that survived that unusually strict rule remain a valuable **direct-grounding subset**. The strict rule is no longer the boundary of Bioethics Bench executability.

The reconstructed Bench instead makes candidate construction explicit at the **candidate level** and lets the evidence and practical decision determine the natural candidate ecology.

## Four distinct research artifacts

Do not collapse these into one dataset.

1. **Canonical SACRE worked example** — the fixed 3×3×3 paper demonstration and deterministic regression target used in P1/P2.
2. **SACRE evaluation / demonstration library** — deliberately constructed or synthetic cases used to demonstrate and investigate the method, including controlled geometry, aggregation, framing and RE-Iteration examples.
3. **Bioethics Bench** — the source-grounded, versioned corpus of real bioethical problems, scenarios, evidence, candidate provenance and natural candidate ecologies.
4. **Experimental / paper subsets** — selected later from the Bench and evaluation library for repeated runs, matched geometries, framing comparisons, model/human studies and paper figures.

Synthetic cases are legitimate in the evaluation library because their purpose is methodological demonstration. Bioethics Bench should preserve the provenance and natural structure of researched cases rather than being standardized to look like the synthetic library.

## Canonical policy-basis taxonomy

Every executable candidate in the reconstructed Full Corpus carries exactly one of these four policy-basis labels:

1. **Direct policy evidence**  
   The cited source itself addresses substantially the same action, rule, obligation, eligibility criterion, allocation rule, consent architecture, authorization decision or other policy target represented by the candidate. Editorial work may adapt wording and add narrow operational completion, but does not supply the core policy orientation.

2. **Source-informed policy inference**  
   The cited source provides relevant preferences, attitudes, values, behavior, willingness, lived-experience evidence, professional concerns or other source-class evidence, and the Bench explicitly draws the inference to an actionable policy. The policy must be a reasonable and transparent construction from the evidence, but it is **not attributed to the source as though the source directly endorsed that policy**.

3. **Framework-derived policy**  
   The policy is derived from an identified normative framework or philosophical position and is authored as an actionable implication of that framework for the represented scenario. Framework candidates remain constructions, not quotations.

4. **Synthetic/author-constructed policy**  
   The policy is deliberately authored to instantiate a serious, action-distinct alternative in the decision space without claiming direct empirical provenance. Relevant factual or scholarly sources may motivate the case, but they are not claimed to be the source of the policy itself.

These labels describe **how the policy candidate was obtained**, not how morally credible it is and not whether SACRE should prefer it.

## Source pool and policy basis are different axes

`source_pool` identifies the perspective layer in which a candidate is represented (`public`, `expert`, `framework`). `policy_basis` identifies the epistemic/construction relation between the represented policy and its sources.

For direct and source-informed public/expert candidates, the pool corresponds to the source class from which the policy is drawn or inferred. A synthetic candidate placed in a public- or expert-oriented slot must be described explicitly as an **author-constructed comparator for that perspective layer**, never as evidence that a public or professional group actually holds the policy. Downstream analyses must be able to stratify or exclude such candidates.

Framework candidates use **framework-derived-policy** unless a future, separately justified design says otherwise.

## Construction priority

When building a candidate field, use the strongest available provenance in this order:

1. direct policy evidence;
2. source-informed policy inference;
3. framework-derived policy for the framework layer;
4. synthetic/author-constructed policy when it adds a serious action-distinct alternative worth analyzing.

Do not replace a directly supported policy with a synthetic one merely to make a candidate set look balanced. Do not add a candidate merely to satisfy a quota.

## Natural candidate ecology

There is **no default 2×2×2 rule for Bioethics Bench**.

For each family ask how many serious, action-distinct Public, Expert and Framework policies the existing research actually supports. The answer may be symmetric or asymmetric and may vary substantially across cases. The original SACRE materials already contain useful shapes such as 3×2×3, 4×3×4, 3×3×3, 3×2×4, 2×3×3, 4×3×3 and 3×3×4. Natural asymmetry can itself be philosophically and experimentally informative.

`2×2×2` remains useful for simple Featured or pedagogical objects. `3×3×3` remains the canonical paper demonstration and may be used for deliberately matched experimental subsets. Neither geometry is the general ontology of SACRE or the default shape of Bioethics Bench.

Every executable frame must still satisfy action distinctness and scenario/action divergence: the represented scenario must lie in a region where the candidate set produces meaningful differences in recommended action.

## Aggregation for asymmetric fields

For pool sizes Public = `a`, Expert = `b`, Framework = `c`, the complete cross-source comparison count is:

`ab + ac + bc`

Cross-source comparisons only:

- Public × Expert
- Public × Framework
- Expert × Framework

No within-source QCCS pairs.

When candidates have unequal cross-source partner counts, the official ranking requires **Mean** aggregation. Raw Sum would rank partly by pool geometry. This rule applies directly at the record level for profile-less natural frames.

Mean removes deterministic partner-count bias. It does not erase composition effects or make scores from different geometries statistically interchangeable; those questions belong in later validation and sensitivity analysis.

## Decision question

`decision_question` is useful Bench and case-construction metadata because a shared Scenario alone does not guarantee that all candidates answer the same practical problem.

Conceptually:

- Scenario = SACRE input
- Decision question = representation / construction constraint
- Policy candidates = SACRE inputs

The decision question therefore constrains candidate commensurability but is not introduced as a new SACRE scoring primitive.

## Multiple canonical frames per family

A well-researched family may support more than one defensible candidate field, for example:

- `natural`
- `direct-grounding`
- `source-informed`
- `matched-3x3x3`
- `expanded`
- another explicitly justified research frame

Alternative canonical frames are represented as **separate executable record pairs**, not several candidate sets nested inside one record.

Conceptually:

```text
case family M097
  frame natural
    concise
    detailed
  frame source-informed
    concise
    detailed
  frame matched-3x3x3
    concise
    detailed
```

Each frame has its own `case_id`, `frame_id`, `frame_version`, ordered candidate IDs and candidate-set hash. Companion integrity applies per frame. Changing frame creates a new represented evaluation; it is not a display-only filter.

Within a frame, concise and detailed records must preserve the same practical decision, the same candidate set and the same load-bearing facts. Representation detail may differ; the represented decision may not.

## Relationship to the strict review

The strict review is retained rather than overwritten.

- The 17 independently cleared Full Corpus families constitute the **direct-grounding subset**.
- Cases that failed the strict gate are not retroactively described as direct.
- Their reconstructed candidates may be labeled source-informed, framework-derived or synthetic where appropriate.
- `research-complete-architecture-limited` remains a meaningful disposition, especially where the current source architecture cannot faithfully represent a materially affected interest.
- The earlier 17/200 result should be reported only as the yield of the unusually strict action-aligned source-grounding exercise, not as the executable size of Bioethics Bench and not as a claim about the computational executability of bioethics generally.

## Featured boundary

Featured v1 remains frozen and separate. Its records and hashes are not rewritten to adopt the new labels retroactively. The Full Corpus uses its own lineage and manifest. The construction-standard difference must remain explicit in any downstream comparison.

## Authorship and independent review

The corpus-author side authors reconstructed candidate sets, provenance classifications, framing decisions and concise/detailed companion records. The independent partner remains the structural/review gate and implementation custodian rather than substantively authoring the candidate sets they certify.

Independent review should check:

1. policy-basis accuracy;
2. whether direct policies really are direct;
3. whether source-informed inferences are reasonable and transparently described;
4. whether synthetic policies are clearly disclosed and serious rather than filler;
5. action distinctness and matched granularity;
6. scenario/action divergence;
7. concise/detailed companion equivalence on load-bearing facts;
8. frame identity, candidate IDs, hashes and provenance completeness;
9. pool geometry and complete cross-source pair count;
10. Mean enforcement where unequal partner counts require it.

## Minimal implementation rule

Do not build a second provenance ontology. Retain the machine-readable candidate-level `policy_basis` field with the four values above and the existing `construction_method` field. The older field records textual construction mechanics; the newer field records the substantive relation between a policy and its evidentiary basis.

The usual mapping for newly reconstructed Full Corpus candidates is:

| policy basis | usual `construction_method` |
|---|---|
| Direct policy evidence | `extracted-from-evidence` or `adapted-from-source` |
| Source-informed policy inference | `adapted-from-source` |
| Framework-derived policy | `derived-from-framework` |
| Synthetic/author-constructed policy | `editorial` |

Synthetic candidates must not be presented as empirical public or professional positions. A source-informed candidate must state the inferential step in `provenance.summary`. Direct policy evidence should identify the source-level action being represented.

## Reconstruction workflow

1. Use the completed M001–M200 deep research as the source layer; do not restart broad source research.
2. For each family, preserve/refine the Scenario and identify the singular practical decision question.
3. Construct the natural Public/Expert/Framework ecology without a preset geometry.
4. Label every candidate by policy basis and state any source→policy inference explicitly.
5. Define one or more canonical frames only where they create substantively different represented evaluations.
6. Mark experimental usefulness, including natural asymmetry, aggregation sensitivity, consensus, polarization, representation sensitivity, candidate-framing sensitivity, direct-vs-inferred comparison, nonhuman representation, candidate granularity and RE-Iteration suitability.
7. Build concise/detailed companions, compute hashes, and send authored frames to the independent partner for structural validation.
8. Scale after recurring construction defects have been resolved in the first diagnostic batch.

The first diagnostic reconstruction batch is:

`M028, M033, M056, M054, M097, M031, M025, M156/F17, M005, M010`.

## Target and stopping rule

All 200 families should receive a complete candidate-field assessment and provenance-aware representation. **Do not force all 200 into weak executable forms merely to claim 200 executable cases.**

A high-quality 100+ sourced/source-informed executable Bench would already be a substantial research asset if that is where the evidence and construction quality lead. Additional synthetic or expanded frames may be useful for selected cases, but corpus size is subordinate to representational quality.

The publication program supplies the practical stopping rule. Bioethics Bench, ReflectiveEquilibrium.AI, automated execution, dashboards and screenshots are research infrastructure for the papers, not independent projects allowed to expand indefinitely. Once the Bench contains enough high-quality cases and frames to support the required P2 evidence and the planned P3 studies, corpus perfection should not delay P1/P2 completion.

The intended sequence is:

**Bench reconstruction → selected executable sets → automated runs → structured dashboards/reports/screenshots → targeted P1/P2 updates → submission; broader validation follows in P3.**
