# Coordinator Directive — Bioethics Bench Lane

**Current objective:** complete the planned Bioethics Bench v1 resource and release study, using the completion-state manuscript as the execution blueprint. Do **not** treat the current 34-family / 68-record executable subset as the intended endpoint of the standalone paper, and do not freeze a submission snapshot around interim build state.

This directive supersedes the prior “submit the current-state v8 package now” objective. The v8/v9 manuscripts, Patterns production materials, provenance work, and submission-resource package remain useful development history and production assets; they are not discarded.

## Governing manuscript rule

Read `docs/papers/BENCH_COMPLETION_STATE_MANUSCRIPT_PLAN.md` first.

The manuscript should be the paper intended to exist after the planned research is complete. Write the final scientific question, Methods, Results surfaces, figures, tables, Discussion, and Limitations now. For outputs not yet available, use explicit placeholders that specify exactly what study or release artifact must replace them.

Do not substitute partial batches, interrupted executions, interim review counts, temporary implementation checks, or current resource counts known to be intermediate for the planned final result. Those belong in coordination, protocol, review, and technical handoff records unless the development event remains scientifically relevant after the final release.

## Governing Bench construction model — 2026-08-30

Bioethics Bench must remain aligned with the formal SACRE specification while preserving a **richer normative research object** than any single SACRE run.

The three layers are:

1. **Scenario** — the practical normative situation;
2. **candidate universe** — the serious Policy positions worth representing for that Scenario;
3. **SACRE projection** — an explicit selection from that universe for a particular source-grounded, expanded, matched-study, or demonstration analysis.

SACRE itself begins with a Scenario and Policy candidates represented in Public Preferences, Expert Judgments, and Ethical Framework roles for the run. It does not formally take a separate `decision`, `decision-maker`, or `decision_question` object as input.

A practical `decision_question` and named decision-maker may remain useful metadata when they help a reader understand or bound a Scenario. They must not dictate the candidate universe.

### Rich candidate universe

The Bench candidate universe is **not restricted to candidates that carry direct source support**.

A serious candidate may be:

- directly source-grounded;
- source-informed through an explicit reasoning bridge;
- Framework-derived;
- constructed as a serious comparator, boundary position, or missing normative alternative.

Every candidate must disclose which of these it is.

The public interface may use a simple **✓ Source** mark where defensible external grounding exists. The check mark is provenance metadata, not an inclusion criterion and not a quality score.

A constructed comparator is legitimate research material. It must never masquerade as an observed public preference, affected-community position, professional recommendation, or verbatim philosophical view.

### SACRE projections

A case may support several projections from one richer candidate universe:

- `source-grounded`;
- `expanded`;
- `matched-study`;
- `demonstration`;
- `direct-grounding`;
- another explicitly justified research projection.

Every projection must declare which candidate IDs it uses, their Public/Expert/Framework role assignment, provenance state, geometry, purpose, and what claims the result can support.

A projection that claims convergence among **actual represented source positions** must use defensibly grounded candidates in those roles. An expanded projection may include constructed comparators, but the resulting claim is about the represented expanded field rather than empirical consensus among the named source communities.

The governing construction rule is therefore:

> **Scenario first → build a rich serious candidate universe → mark provenance/source status → audit the universe → derive explicit SACRE projection(s) for the research purpose.**

Do not replace this with either “one bounded decision → fill a candidate geometry” or “only sourced candidates may exist in the Bench.”

The governing audit is `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`, now titled **Scenario, Candidate-Universe, and Projection Audit**.

## Cold-start reading order

1. `AGENTS.md`
2. `docs/papers/BENCH_COMPLETION_STATE_MANUSCRIPT_PLAN.md`
3. `docs/FULL_CORPUS_V1_PLAN.md`
4. `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`
5. `docs/FULL_CORPUS_SCENARIO_POLICY_AUDIT_LEDGER.md`
6. `docs/FEATURED_SCENARIO_POLICY_AUDIT_2026-08-30.md`
7. `docs/FEATURED_PRIORITY_SOURCE_REOPEN_2026-08-30.md`
8. `docs/FEATURED_PROPOSED_NEXT_VERSION_RECONSTRUCTIONS_2026-08-30.md`
9. `docs/PROGRAM_COORDINATION.md`
10. generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
11. `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
12. `docs/RESOURCE_CARD.md`
13. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
14. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
15. `docs/papers/BENCH_MANUSCRIPT_V8_HANDOFF.md` for historical manuscript/submission state
16. `docs/papers/BENCH_SUBMISSION_RESOURCE_PACKAGE_HANDOFF.md` for reusable production material
17. `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md` when the completed resource is ready for submission freeze

## Manuscript state

**CURRENT source remains:** Bioethics Bench v8 — Patterns submission-prepared development draft.  
Drive: `14HRYJ1QDDfb7Rhv_QJGQ7siowIVm5BbK`

**Prior reader-led/current-state candidate:** v9.  
Drive: `1qBqD2yKpsYSymPxv8FtuKqIipW6pPK48`

**Completion-state manuscript candidate:** Bioethics Bench v10 — completion-state full-study manuscript blueprint.  
Drive: `1IYG8N2PHQOMGva6a-sdE7YEKb29TiSHG`

V10 is the governing **shape** for the intended completed standalone paper. It does not claim that placeholder studies have already been completed and is not automatically promoted to CURRENT.

The richer candidate-universe model will require terminology and Methods cleanup in the final v10 manuscript when its placeholders are populated. Do not churn the manuscript merely for versioning; make those corrections as part of the next substantive Bench manuscript pass.

## Intended v1 resource endpoint

The endpoint is defined by `docs/FULL_CORPUS_V1_PLAN.md`, not by the present executable subset:

- 200 bounded practical-ethics Scenarios / cases;
- concise and detailed forms, yielding 400 authored Scenario representations if the completion criterion is met;
- a reviewed **rich candidate universe** for every case;
- candidate-level provenance status, including visible source grounding where warranted;
- source-supported Public / affected-community, Expert / professional, and Ethical Framework evidence where available;
- serious constructed comparators where needed to represent important normative structure;
- explicit factual assumptions, uncertainty, jurisdiction/time treatment, and stipulations;
- a Scenario / candidate-universe audit for **all 200 cases**;
- one or more explicit SACRE projections where appropriate;
- clear separation between source-grounded and expanded/constructed projections;
- explicit distinction between research completeness, projection suitability, demonstration richness, and Featured/public-release status;
- reproducible corpus-level statistics generated from machine-readable metadata;
- release review, versioning, rights/licensing, hashing, manifests, and reviewer-inspectable provenance.

A case may legitimately have a narrow source-grounded projection and a richer expanded projection. A case may also be complete scholarship without an appropriate SACRE projection yet. These are not failures.

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

The provenance refresh changed 68/68 resource hashes but produced 0 execution/task-semantic differences; post-repin adapter projection is byte-equivalent and the Full Corpus regression suite passes 46/46. This remains useful reproducibility evidence, but the final paper should report the equivalent release-level test on the frozen final research object and declared projection(s).

The interrupted 68-record developmental QCCS census (20 complete / 48 incomplete non-results) is coordination evidence only. It is not the final Bench study and should not appear as the standalone resource paper's endpoint.

## Representational finding — 2026-08-30

The resource became substantially stronger on provenance and source grounding, but some cases narrowed their normative field because candidate construction was effectively limited by the available source map or by a fixed geometry.

The corrected question is no longer only:

> What source-supported positions exist?

It is also:

> What serious Policy positions are needed to represent the normative space, and what is the provenance status of each?

Risks include:

- near-paraphrase candidates;
- nested-caveat duplication;
- source-slot completion;
- **source-ceiling compression**;
- decision-question overfitting;
- constraint-induced collapse;
- evidence-to-policy overcompression;
- rationale diversity without Policy diversity;
- merging genuinely distinct positions into a cautious synthesis;
- adding a constructed extreme that is merely theatrical;
- provenance laundering, where a constructed/inferred Policy looks source-backed.

Current Featured F10 remains a positive example because its positions differ materially in the role of age, prognosis, lottery, fair innings, and equal moral status.

F17 is a useful example of why the candidate universe may need to be richer than the original sourced field: serious rights-based abolitionist animal-ethics reasoning should not disappear merely because the initial source construction centered reformist harm-benefit positions.

Do not silently rewrite released Featured records. Any changed record is a new explicit version with change history.

## Public website

`/v4/` is the current design candidate for the next Bioethics Bench public page.

It deliberately returns to the original pre-recent-change v1 visual language:

- centered navy/teal hero;
- compact provenance strip;
- restrained cards and spacing;
- dark research-framework band;
- example-record treatment;
- minimal public-facing prose.

Do **not** use `/v3/` as the style model. V3 is retained only as a historical comparison and is too meta for the public site.

The v4 public-language rule is simple: explain the resource, not the coordination process. Do not surface calibration stages, audit queues, completion gates, internal version logic, or manuscript-development state on the main page.

## RE-Iteration finding

The current RE-Iteration revision prompt in `xnuxi/sacre-prototype` was compared with its original Phase 3 implementation. The operative prompt did **not** drift: it continues to require preservation of the candidate's essential normative commitment and source perspective, the smallest sufficient revision, and movement toward the stated target.

Therefore weaker recent directives or revised candidates should not be “fixed” by restoring an older prompt. More plausible contributors include overcompressed starting Policy fields, QCCS operationalization and the resulting coherence matrix, model/provider/configuration differences, selected anchors and targets, and later full fresh re-execution semantics.

The next RE-Iteration diagnostic should compare at least:

- a source-grounded projection; and
- a richer expanded projection

under controlled current conditions before any prompt modification.

## Final paper evidence surfaces

The completed paper should report at least:

### 1. Completed corpus

Final case/representation counts, domain distribution, candidate-universe sizes, candidate provenance classes, Featured crosswalk, and source/citation inventory.

### 2. Source grounding and release review

Complete release-review coverage, source/warrant/whole-document/source-independence findings, repairs, additions, adjudicated outcomes, independent human review status, and canonical locator/identifier coverage.

### 3. Controlled representations and candidate universes

Final concise/detailed invariant audit, Scenario / candidate-universe audit, candidate counts per case, provenance/source-mark distribution, and important reconstruction findings.

### 4. SACRE projections and reproducibility

Projection types, candidate IDs, projection geometries, source-grounded versus expanded claims, frozen resource/checksums, `sacre-qccs-v1` contract/version/checksum where used, projection/equivalence checks, regression status, and immutable release identifiers.

## Ownership boundaries

The standalone Bench paper owns:

- resource construction and release methods;
- candidate-universe construction;
- provenance and source-marking architecture;
- Scenario and Policy-representation quality;
- SACRE projection construction as a resource interface;
- controlled representation construction;
- release governance, versioning, and reproducibility;
- the uses enabled by the completed resource.

It does **not** own:

- QCCS/QCS test-retest reliability, model/provider effects, prompt/representation perturbation, rank robustness, or RE-Iteration computational validation — P3 owns those;
- human-human reliability, human-model correspondence, participant heterogeneity, or human empirical interpretation — P4 owns those;
- deployment outcomes — P5+ owns those when a real institutional study is activated.

## Closed development gates — preserve, but reopen representations where justified

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

These technical gates do not prove candidate-universe adequacy. Existing developmental records may be reopened without treating prior technical work as invalid.

Do not implement schema v2 merely for manuscript neatness. A schema revision should occur only when the richer case object cannot be represented cleanly through current records plus explicit projection metadata.

## Current research work

Proceed in this order:

1. Use the 20 Featured cases as the calibration set for **candidate-universe richness, provenance accuracy, and projection design**; never silently mutate released v1 records.
2. Revisit the five priority cases already identified (F03, F04, F09, F17, F20) under the richer-universe model. Some issues may require a new record version; others may be solved by adding an expanded projection without changing the historical source-grounded record.
3. Apply the same audit to **all 200 cases**, reopening developmental records where necessary.
4. For every case, construct a serious candidate universe and mark candidate provenance/source status.
5. Derive source-grounded, expanded, matched-study, and/or demonstration projections only where they serve a real research purpose.
6. Complete source research, source-description verification, whole-document omission work, source-independence review, and candidate provenance adjudication.
7. Freeze the final resource object, candidate universes, and declared projections.
8. Generate final corpus, provenance, source-marking, candidate-universe, projection, and demonstration statistics directly from the machine-readable release.
9. Run the final `sacre-qccs-v1` projection/equivalence gate on every frozen projection used in the paper and pin consumer artifacts.
10. Generate final tables and figures from versioned scripts/artifacts.
11. Replace all v10 placeholders with the complete observed result set, including negative/null/held/non-projected outcomes.
12. Complete submission metadata, live Patterns requirements, reviewer access, clean-clone validation, archival identifiers, immutable snapshot, coauthor review, and submission.

## Evidence ceiling while the work remains incomplete

Current coordination documents may accurately state the present development substrate, provenance repairs, equivalence checks, and results of candidate-universe/source audits as they are completed.

The completion-state manuscript may specify planned final analyses and placeholders, but it must not invent their outcomes or imply that the 200-case release, all-case audit, independent review, final candidate-universe statistics, final projection distribution, or final equivalence gates have already been completed.

Do not claim corpus-wide human source validation, corpus-wide candidate-universe adequacy, QCCS reliability/construct validity, moral correctness, human-model correspondence, or demonstrated method-neutrality until the corresponding evidence exists.

**CURRENT NEXT DEPENDENCY:** stabilize the Featured calibration under the richer candidate-universe model, then apply that model to all 200 cases while completing source and release review. The final Bench freeze comes only after the whole-corpus audit.
