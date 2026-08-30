# Bioethics Bench — completion-state manuscript plan

**Status:** governing manuscript-shape plan for the standalone Bioethics Bench paper.  
**Supersedes as a submission objective:** treating the current 34-family / 68-record executable state as the intended endpoint of the resource paper.  
**Does not erase:** the existing v8/v9 manuscripts, submission package, provenance work, or current-state handoffs; those remain development history and reusable production material.

## Drafting principle

The manuscript should be the paper we intend to submit **after the planned Bioethics Bench v1 research program is complete**. It should not narrate the incidental sequence of partial batches, interrupted executions, or incomplete review passes used to build the resource.

Write the final scientific question, Methods, Results surfaces, figures, tables, Discussion, and Limitations now. Where a final output is not yet available, use an explicit placeholder that names exactly what must be produced. The placeholder is an execution specification, not a result.

Do not use:

- the current 34-family executable subset as though it were the planned Full Corpus endpoint;
- the interrupted 68-record developmental QCCS census as a resource-paper result;
- interim review fractions as substitutes for the completed release-review result;
- provenance-repair events as the main scientific Results surface when a final release-level audit will supersede them.

Current-state evidence stays in coordination, review, protocol, and technical handoff documents unless it remains scientifically relevant after the final release.

## Intended v1 resource endpoint

The governing resource program is the existing `docs/FULL_CORPUS_V1_PLAN.md`:

- 200 bounded practical-ethics case families;
- matched concise and detailed forms for each family, yielding 400 authored representations if the completion criterion is met;
- source-first construction with explicit decision-maker, decision question, decision-critical facts, uncertainties, jurisdiction/time treatment, stipulations, candidate map, provenance, and construction risks;
- explicit executable eligibility rather than a forced regular matrix;
- nested resource structure:
  - Full Corpus = completed scholarly case resource;
  - Executable Collection = evidence-qualified subset under declared profiles;
  - Featured Collection = curated front door;
- reproducible corpus statistics generated from machine-readable metadata;
- release review, versioning, rights/licensing, hashing, manifests, and reviewer-inspectable provenance.

A completed family may be research-complete but non-executable. That is a legitimate result of the resource study.

## Final paper question

**Can practical bioethics cases be constructed as source-grounded, versioned normative research objects whose decision target, candidate field, provenance, representation, eligibility, task projection, and release lineage are sufficiently explicit to support reproducible computational and human studies?**

The paper should answer this question through the completed resource and release process, not through a provisional model run.

## Final Methods architecture

### 1. Case-universe construction

Report how the 200-family decision universe was assembled and bounded. Each family should resolve to one practical decision rather than a broad topic.

### 2. Paired representations

Explain the concise/detailed construction rule and the release audit that holds decision identity, candidate field, stipulations, and decision-critical factual state fixed while representation detail changes.

### 3. Source-grounded candidate construction

Report source streams and the many-to-many source–candidate warrant relation. Preserve the distinction among direct policy evidence, source-informed policy inference, framework-derived recommendation, source assertion, Bench bridge, support direction, warrant scope, and task-local role.

### 4. Executable eligibility and natural geometry

Explain why evidence determines whether a family is executable and why the resource does not manufacture missing source roles or force regular candidate counts.

### 5. Resource / task / evaluator separation

Define the persistent resource object separately from task contracts and evaluator/execution conditions.

### 6. Release review

Freeze the independent review/adjudication protocol and report complete review coverage, findings, repairs, holds/demotions, and release decisions. Current model review remains development evidence unless intentionally retained as a prespecified preliminary layer.

### 7. Reference-task reproducibility

After the final executable collection is frozen, project every eligible record through the frozen `sacre-qccs-v1` adapter and verify resource identity, task semantics, pair construction, aggregation requirements, consumer pin, and equivalence on the final release object.

## Final Results surfaces

### Results 1 — completed corpus and eligibility

Placeholder must eventually be replaced with:

- final family and representation counts;
- domain/subdomain distribution;
- executable counts by profile;
- research-complete/non-executable count;
- additional-evidence/held count if any;
- Featured crosswalk;
- final candidate count and candidate-count distribution;
- final source/citation inventory.

**Planned Table 1:** final corpus composition and eligibility.  
**Planned Figure 3:** all-family corpus map by domain and final disposition.

### Results 2 — source grounding and release review

Placeholder must eventually be replaced with:

- complete review coverage by review type;
- direct-policy / source-informed / framework-derived distributions;
- source-description defects;
- direct-policy warrant defects;
- inference-bridge defects;
- whole-document omitted-position findings;
- source-pool independence defects;
- repairs, additions, holds/demotions, and adjudicated outcomes;
- independent human release-review status;
- final canonical locator and identifier coverage.

**Planned Table 2:** final source-grounding and release-review results.

### Results 3 — controlled representations and natural geometry

Placeholder must eventually be replaced with:

- concise/detailed invariant-audit result across the completed resource;
- natural geometry distribution of the executable collection;
- candidates per family;
- partner-count asymmetry;
- pair/workload distribution under declared task profiles;
- domain-stratified summaries where scientifically informative.

**Planned Table 3:** controlled representation and natural candidate geometry.

### Results 4 — final reference-task reproducibility

Placeholder must eventually be replaced with:

- frozen resource release/tag/checksum;
- frozen `sacre-qccs-v1` task contract/version/checksum;
- records projected;
- execution/task-semantic differences;
- provenance-only differences if any;
- consumer re-pin / byte-equivalence result;
- regression/validator result;
- immutable release identifiers.

**Planned Table 4:** final reference-task reproducibility.  
**Planned Figure 4:** final freeze → release review → immutable resource → task projection → consumer pin → equivalence verification.

## Figures that can survive now

The generic resource → task → evaluation figure can remain because it expresses the final architecture.

The source → warrant → candidate → task-projection figure can remain because it expresses the final provenance model.

Current-event figures that mainly visualize a 68-record provenance refresh or other transitory build event should be replaced by final-release figures unless that event is deliberately retained as a methodological example.

## Discussion ownership

The standalone Bench paper should establish:

- the normative research object;
- source-grounded construction and release methodology;
- evidence-qualified executable eligibility;
- controlled paired representations;
- natural geometry;
- resource/task/evaluator separation;
- release governance and reproducibility;
- the scientific uses enabled by the completed resource.

It should **not** become the computational validation paper or human validation paper:

- P3 owns QCCS/QCS repeatability, model/provider variation, perturbation behavior, rank robustness, and RE-Iteration computational validation;
- P4 owns human-human variation, test-retest, human-model correspondence, participant heterogeneity, and human empirical interpretation.

## Limitations rule

The final Limitations section should describe limitations of the completed release: coverage, evidence asymmetry, jurisdiction/time sensitivity, interpretive translation from sources to action candidates, profile dependence, and the absence of a moral answer key.

Do not carry unresolved build chores into the final Limitations section if they have been resolved before submission.

## Execution order from the manuscript placeholders

1. Complete the 200-family / paired-representation scholarly resource under `FULL_CORPUS_V1_PLAN.md`.
2. Complete the outstanding source and whole-document research/review work and resolve defects without manufacturing grounding.
3. Freeze the independent release-review/adjudication protocol and complete it.
4. Freeze the final resource object and executable collection.
5. Generate final corpus statistics and all-family eligibility/geometry summaries from the machine-readable resource.
6. Run the final `sacre-qccs-v1` all-record task-projection/equivalence gate on the frozen executable collection.
7. Generate the final figures/tables directly from released artifacts and analysis scripts.
8. Replace manuscript placeholders with the complete observed results, including negative/null/held outcomes.
9. Complete author metadata, licensing, archival/reviewer snapshot, and journal-specific production requirements.
10. Only then freeze the submission manuscript and immutable submission/release snapshot.

## Current manuscript candidate

The Drive candidate corresponding to this plan is:

**Bioethics Bench v10 — completion-state full-study manuscript blueprint**  
Drive ID: `1IYG8N2PHQOMGva6a-sdE7YEKb29TiSHG`

It is a development candidate, not CURRENT and not a claim that the placeholder studies have already been completed.
