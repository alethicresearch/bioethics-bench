# Coordinator Directive — Bioethics Bench Lane

**Current objective:** mature Bioethics Bench as a defensible source-grounded research infrastructure for computational bioethics and move the standalone resource paper toward publication without turning source review into a developmental execution gate.

For a cold start, read:

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/PROGRAM_COORDINATION.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/papers/BENCH_MANUSCRIPT_V4_HANDOFF.md`
6. `docs/papers/BENCH_STANDALONE_FINDINGS.md`
7. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
8. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
9. `docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`
10. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
11. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current manuscript frontier

**CURRENT Bioethics Bench v4 — evidence-integrated manuscript development draft:**  
https://docs.google.com/document/d/1xasH7pOkuPXoC5xLGEy4SlzHyr3dJET3/edit

The prior v3 research/publication plan remains preserved in the same Drive folder as a superseded source and no longer carries the `CURRENT` label.

V4 is a substantive **nine-page manuscript development draft**, not another planning document. It integrates the verified resource/task boundary, the corpus-driven warrant ontology, current resource/review counts, layered validation/release architecture, discussion, limitations, and conclusion. It contains two figures and three evidence tables. The exact final DOCX was rendered and visually inspected page-by-page before promotion; all nine pages passed.

The manuscript-facing handoff is `docs/papers/BENCH_MANUSCRIPT_V4_HANDOFF.md`.

## Current verified resource state

The executable Full Corpus contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. Current records remain `status: draft` and `reviewed_by_human: false`.

Current SACRE task-role counts are 69 Public, 55 Expert, and 86 Framework candidates. Current policy-basis distribution is Public 49 source-informed / 20 direct; Expert 49 direct / 6 source-informed; Framework 86 framework-derived.

Whole-document omission review has examined five families by that method; **29 remain unexamined**. Do not extrapolate a corpus-wide rate.

## Closed architecture gates — do not redo

The first-pass generalization audit, explicit `sacre-qccs-v1` task contract, read-only adapter, and all-record equivalence gate are complete.

Verification established across all 68 records:

- **0 execution/task-semantic differences**;
- **36/68 stale Bench `content_hash` values** in SACRE's older pin with no accompanying execution-relevant change;
- classification of those differences as **provenance-only drift**;
- SACRE re-vendoring/re-pinning to merged Bench `main` commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- exact byte equivalence between the adapter projection and refreshed SACRE vendor payload;
- passing SACRE Full Corpus regression tests.

Current SACRE vendor payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

Do **not** restart the generalization audit, re-specify `sacre-qccs-v1`, or redo adapter equivalence.

## Generic resource-model milestone

The future generic candidate/source-role model is specified conceptually in `docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md` and stress-tested against M004, M028, M141, and M146 plus the live relation-level review workflow in `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`.

The stress test supports the resource/task separation but requires a richer many-to-many warrant relation with distinct axes for:

- source/document type;
- evidence function;
- translation mode;
- support direction;
- warrant scope;
- source assertion summary;
- Bench bridge summary;
- relation-level review identity/fingerprint.

This remains **shadow-design work**. Do not migrate canonical v1 merely for architectural neatness.

## Current priorities

### 1. Turn v4 into a citation-complete scientific manuscript

The paper is now beyond prospectus stage. The next work is evidence integration rather than another architecture rewrite:

- convert corpus/review examples into manuscript-grade cited examples;
- build the resource-identity versus task-projection figure from the 36-record provenance refresh;
- build the construction/review/release lifecycle figure;
- deepen corpus-method detail where needed for reproducibility;
- keep the warrant ontology synchronized with continuing source review;
- select a target venue after the scientific core is stable, then adapt abstract/length/format to that venue.

### 2. Continue source/review/release maturation in parallel

Keep the current corpus structurally valid and versioned. Apply candidate/source repairs because evidence warrants them, never to optimize rankings or executable count.

Model-assisted checks are useful quality evidence but are not independent human review. Independent review remains a quality/release layer, **not a developmental execution gate**.

### 3. Keep future generalized schema work in shadow mode

Before any v2 schema implementation, stabilize the warrant vocabulary through real review findings and require deterministic compatibility with canonical v1 through the already verified adapter.

### 4. Develop a second task only when scientifically mature

A future **source-to-policy warrant task** is the strongest current candidate. It could evaluate source-description fidelity, bridge adequacy, translation disclosure, whole-document omission sensitivity, and support direction. It is not yet a frozen or validated second task family.

### 5. Support P3/P4 with separately frozen objects

For P3/P4 distinguish and freeze:

1. **resource snapshot** — exact cases, representations, candidate content, provenance/version state;
2. **task specification** — `sacre-qccs-v1`, QCCS identity, source-role mapping, pair generation, aggregation, outputs;
3. **evaluation/execution condition** — model/provider/configuration, repetitions, retry/exclusion rules, perturbation assignment, or human evaluator condition.

No confirmatory P3 execution or human P4 fielding is authorized by the v4 manuscript promotion.

## Cross-repository change rule

**Execution-relevant:** candidate IDs/texts, scenario/task meaning, profile/geometry, required aggregation, executable-set membership, or execution-relevant schema. Notify SACRE, re-vendor/re-pin/reverify, and rerun affected results if the executed object changed.

**Provenance-only:** citations, provenance summaries, source-review metadata, or resulting record-hash drift with unchanged executable projection. Refresh provenance/pins as needed; **do not automatically rerun model outputs**. The 36-record 2026-08-30 refresh is the reference example.

**Documentation/manuscript-only:** coordination, ontology prose, manuscript drafting, figures/tables with no executable effect. No product action unless the work exposes an execution defect.

## Evidence ceiling

The verified task adapter establishes architectural/reproducibility equivalence. The generic resource model and ontology stress test establish a corpus-grounded conceptual architecture. V4 may state those findings.

V4 may **not** claim independent corpus-wide human source validation, QCCS reliability or construct validity, moral correctness of a provisional Final Policy, demonstrated method-neutrality across multiple mature tasks, a production generic v2 schema, a mature warrant task, or human-model correspondence.

Current developmental SACRE evidence remains developmental: the 8-family / 16-record geometry tranche is complete; the attempted 68-record census produced 20 complete single executions and 48 incomplete non-results.

## Handoff rule

Every substantive handoff states: **Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.

**CURRENT NEXT DEPENDENCY: manuscript-grade reference/source integration into Bioethics Bench v4 while source review continues in parallel.**
