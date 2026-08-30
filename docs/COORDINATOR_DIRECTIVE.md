# Coordinator Directive — Bioethics Bench Lane

**Current objective:** complete the planned Bioethics Bench v1 resource and release study, using the completion-state manuscript as the execution blueprint. Do **not** treat the current 34-family / 68-record executable subset as the intended endpoint of the standalone paper, and do not freeze a submission snapshot around interim build state.

This directive supersedes the prior “submit the current-state v8 package now” objective. The v8/v9 manuscripts, Patterns production materials, provenance work, and submission-resource package remain useful development history and production assets; they are not discarded.

## Governing manuscript rule

Read `docs/papers/BENCH_COMPLETION_STATE_MANUSCRIPT_PLAN.md` first.

The manuscript should be the paper intended to exist after the planned research is complete. Write the final scientific question, Methods, Results surfaces, figures, tables, Discussion, and Limitations now. For outputs not yet available, use explicit placeholders that specify exactly what study or release artifact must replace them.

Do not substitute:

- partial batches;
- interrupted executions;
- interim review counts;
- temporary implementation checks;
- current resource counts that are known to be an intermediate state

for the planned final result.

Those belong in coordination, protocol, review, and technical handoff records unless the development event remains scientifically relevant after the final release.

## Cold-start reading order

1. `AGENTS.md`
2. `docs/papers/BENCH_COMPLETION_STATE_MANUSCRIPT_PLAN.md`
3. `docs/FULL_CORPUS_V1_PLAN.md`
4. `docs/PROGRAM_COORDINATION.md`
5. generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
6. `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
7. `docs/RESOURCE_CARD.md`
8. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
9. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
10. `docs/papers/BENCH_MANUSCRIPT_V8_HANDOFF.md` for historical manuscript/submission state
11. `docs/papers/BENCH_SUBMISSION_RESOURCE_PACKAGE_HANDOFF.md` for reusable production material
12. `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md` when the completed resource is ready for submission freeze

## Manuscript state

**CURRENT source remains:** Bioethics Bench v8 — Patterns submission-prepared development draft.  
Drive: `14HRYJ1QDDfb7Rhv_QJGQ7siowIVm5BbK`

**Prior reader-led/current-state candidate:** v9.  
Drive: `1qBqD2yKpsYSymPxv8FtuKqIipW6pPK48`

**Completion-state manuscript candidate:** Bioethics Bench v10 — completion-state full-study manuscript blueprint.  
Drive: `1IYG8N2PHQOMGva6a-sdE7YEKb29TiSHG`

V10 is the governing **shape** for the intended completed standalone paper. It does not claim that placeholder studies have already been completed and is not automatically promoted to CURRENT.

## Intended v1 resource endpoint

The endpoint is defined by `docs/FULL_CORPUS_V1_PLAN.md`, not by the present executable subset:

- 200 bounded practical-ethics case families;
- paired concise and detailed forms, yielding 400 authored representations if the completion criterion is met;
- one bounded decision per family with explicit decision-maker/question, decision-critical facts, uncertainty, jurisdiction/time treatment, stipulations, source-grounded candidate map, provenance, and construction risks;
- explicit executable eligibility rather than manufactured regularity;
- nested resource structure:
  - Full Corpus = completed scholarly case resource;
  - Executable Collection = evidence-qualified subset under declared profiles;
  - Featured Collection = curated front door;
- reproducible corpus-level statistics generated from machine-readable metadata;
- release review, versioning, rights/licensing, hashing, manifests, and reviewer-inspectable provenance.

A research-complete family may legitimately be non-executable. Executable yield is an outcome of the evidence, not a quota.

## Current development state — coordination evidence, not final Results

The current executable development substrate contains:

- 34 executable families;
- 68 matched concise/detailed records;
- 210 unique family-level candidates;
- eight natural candidate geometries;
- 428 unordered cross-source QCCS pairs per representation / 856 per matched concise+detailed pass;
- records remain `status: draft`, `reviewed_by_human: false`;
- 242 unique citations;
- 130 PMID-bearing citations, 130/130 currently resolving consistently;
- 0 unresolved canonical source locators after the locator-enrichment pass.

Current locator-enriched Bench commit: `0a8317ba8a2c5978f7a50bb5f13de875153b6782`.

Current SACRE re-pin: `9fa908a45c2447aa97f0473754c434bdb874b19e`.  
Current vendored Full Corpus payload SHA-256: `82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`.

The provenance refresh changed 68/68 resource hashes but produced 0 execution/task-semantic differences; post-repin adapter projection is byte-equivalent and the Full Corpus regression suite passes 46/46. This remains useful reproducibility evidence, but the final paper should report the equivalent release-level test on the **frozen final executable collection** rather than making this transitory event the central Results section.

The interrupted 68-record developmental QCCS census (20 complete / 48 incomplete non-results) is coordination evidence only. It is not the final Bench study and should not appear as the standalone resource paper's endpoint.

## Final paper evidence surfaces

V10 and the manuscript plan organize the completed paper around four result surfaces.

### 1. Completed corpus and eligibility

Final family/representation counts, domain distribution, executable profiles, research-complete/non-executable families, any held/additional-evidence cases, Featured crosswalk, candidate counts, and source/citation inventory.

### 2. Source grounding and release review

Complete release-review coverage, material source/warrant/whole-document/source-independence findings, repairs, additions, holds/demotions, adjudicated outcomes, independent human review status, and final canonical locator/identifier coverage.

### 3. Controlled representations and natural geometry

Final concise/detailed invariant audit, executable-geometry distribution, candidates per family, partner-count asymmetry, and task workload summaries.

### 4. Final reference-task reproducibility

Frozen resource release/checksum, frozen `sacre-qccs-v1` contract/version/checksum, records projected, task-semantic differences, provenance-only differences if any, consumer re-pin / byte-equivalence, validator/regression status, and immutable release identifiers.

## Ownership boundaries

The standalone Bench paper owns:

- resource construction and release methods;
- provenance and source-grounding architecture;
- evidence-qualified executable eligibility;
- paired representation controls;
- natural candidate geometry;
- resource/task/evaluator separation;
- release governance, versioning, and reproducibility;
- the uses enabled by the completed resource.

It does **not** own:

- QCCS/QCS test-retest reliability, model/provider effects, prompt/representation perturbation, rank robustness, or RE-Iteration computational validation — P3 owns those;
- human-human reliability, human-model correspondence, participant heterogeneity, or human empirical interpretation — P4 owns those;
- deployment outcomes — P5+ owns those when a real institutional study is activated.

## Closed development gates — do not redo without a reason

The following remain valid development achievements:

- generalization audit;
- explicit `sacre-qccs-v1` task contract;
- read-only adapter;
- current 34-family / 68-record equivalence gate;
- canonical source-locator enrichment and source-placeholder repair;
- post-enrichment SACRE provenance re-pin and all-record equivalence verification;
- generic candidate/source-role conceptual model;
- first warrant-ontology stress test;
- current manuscript/literature/venue work;
- reviewer-facing submission resource package;
- current Patterns production metadata and release-checklist work.

Do not implement schema v2 or a second task merely for manuscript neatness.

## Current research work

Proceed in this order:

1. Complete all 200 scholarly case families under `FULL_CORPUS_V1_PLAN.md` with paired representations and explicit disposition.
2. Complete outstanding source research, source-description verification, whole-document omission work, and warrant/source-independence review; repair or hold cases without manufacturing grounding.
3. Freeze and complete the independent release-review/adjudication protocol.
4. Freeze the final resource object and evidence-qualified executable collection.
5. Generate final corpus, provenance, eligibility, representation, and geometry statistics directly from the machine-readable release.
6. Run the final `sacre-qccs-v1` all-record projection/equivalence gate on the frozen executable collection and pin the consumer artifact.
7. Generate final tables and figures from versioned scripts/artifacts.
8. Replace all v10 placeholders with the complete observed result set, including negative/null/held outcomes.
9. Then complete author metadata, software/tooling license, live Patterns requirements, cover letter/front matter, reviewer access, clean-clone validation, archival identifiers, and immutable submission snapshot.
10. Final author/coauthor prose review and submit.

## Evidence ceiling while the work remains incomplete

Current coordination documents may accurately state the present 34/68 development substrate, current provenance repairs, and current equivalence checks.

The completion-state manuscript may specify planned final analyses and placeholders, but it must not invent their outcomes or imply that the 200-family release, independent review, final eligibility distribution, or final equivalence gate has already been completed.

Do not claim independent corpus-wide human source validation, corpus-wide source fidelity, QCCS reliability/construct validity, moral correctness, human-model correspondence, demonstrated method-neutrality across multiple mature tasks, an implemented generic v2 schema, or a mature source-to-policy warrant benchmark until the corresponding evidence exists.

**CURRENT NEXT DEPENDENCY:** complete the 200-family / paired-representation scholarly resource and remaining source/release-review work; the manuscript placeholders are the execution checklist for the final paper.
