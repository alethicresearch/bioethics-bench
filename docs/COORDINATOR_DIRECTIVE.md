# Coordinator Directive — Bioethics Bench Lane

**Current program objective:** mature Bioethics Bench as a defensible source-grounded research infrastructure for computational bioethics while supporting the Doing Ethics with AI (DEWA) paper program without turning corpus review into a blocking loop.

For a cold start, read:

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/PROGRAM_COORDINATION.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
7. `docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`
8. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
9. `docs/papers/BENCH_STANDALONE_FINDINGS.md`
10. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
11. `docs/papers/MANUSCRIPT_WRITEBACK.md`
12. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current verified state

The executable Full Corpus contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. Current records remain `status: draft` and `reviewed_by_human: false`.

P2 has completed its v49 submission-composition stage:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- Supplementary Information: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit

The first-pass **Bioethics Bench generalization audit is complete**. The explicit **`sacre-qccs-v1` task contract, read-only adapter, and all-record equivalence gate are also complete**.

Verification established:

- **0 execution/task-semantic differences** across all 68 records;
- **36/68 stale Bench `content_hash` values** in SACRE's older pin with no accompanying execution-relevant change;
- classification as **provenance-only drift**;
- SACRE re-vendoring/re-pinning to merged Bench `main` commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- exact byte equivalence between adapter projection and refreshed SACRE Full Corpus payload;
- passing SACRE Full Corpus regression tests.

Current SACRE vendor payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

**Do not send future agents back to redo the generalization audit, specify `sacre-qccs-v1`, or prove adapter equivalence. Those stages are complete.**

## Generic resource-model milestone — also complete for the conceptual stage

The future generic candidate/source-role model is now specified on paper:

`docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`

The model keeps candidate identity, source/evidence relationships, and task-role assignment separate while preserving canonical v1 as a compatibility lineage. It does **not** authorize schema migration.

A first corpus-driven ontology stress test is also complete:

`docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`

The stress test used M004, M028, M141 and M146 plus the live relation-level review workflow. It supports the generic model but shows that a single source-relation label is too coarse. The actual corpus requires separate axes for:

- **source/document type**;
- **evidence function**;
- **translation mode**;
- **support direction**;
- **warrant scope**;
- **source assertion summary**;
- **Bench bridge summary**;
- **relation-level review identity/fingerprint**.

It also confirms many-to-many source↔candidate relations and candidate-level synthesis across multiple sources. A professional guideline, empirical study, or policy document can support different candidates under different evidentiary functions and different SACRE task roles.

The current architecture frontier is therefore **manuscript integration and continued ontology refinement through source review**, not canonical schema code.

## Operating mode

Work in meaningful scientific completion units. Prefer a completed review batch, resolved resource-design question, manuscript section, or protocol freeze over more coordination prose.

Independent human source-to-policy review remains a quality/release layer, **not an execution gate for developmental/paper-facing computational work**. Confirmatory P3 and human P4 studies remain separately protocol/authorization-gated.

Stop or escalate only when continuing would make the corpus materially misleading, source-unsupported, internally inconsistent, non-reproducible, or would silently change canonical SACRE v1 semantics or a confirmatory/human-study boundary.

## Current priorities

### 1. Preserve and mature the source-grounded resource

Keep the 34-family / 68-record corpus structurally valid, versioned, and reproducible. Apply source/candidate repairs because evidence warrants them, never to optimize downstream rankings or executable count.

Continue source/review work using the existing review tooling. Model-assisted checks remain useful quality evidence but are not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**. Do not extrapolate a corpus-wide rate.

Use incoming review findings to refine the proposed evidence-function / translation-mode / support-direction vocabulary before any future schema implementation.

### 2. Mature the standalone Bioethics Bench paper

Current Drive plan:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The current standalone manuscript-facing evidence surface is:

`docs/papers/BENCH_STANDALONE_FINDINGS.md`

It now provides:

- the paper's reader-led argumentative movement;
- the verified 68-record resource/task separation result;
- the 36-record provenance-only hash refresh as a reproducibility finding;
- the many-to-many warrant ontology derived from actual corpus stressors;
- recommended figures and tables;
- the exact claim ceiling;
- the boundary with P1/P2/P3.

The next paper step is to revise the standalone plan/manuscript around these demonstrated findings rather than adding more architecture notes.

### 3. Keep the future generalized schema in shadow-design mode

Canonical v1 remains authoritative. Do not implement a generalized schema merely because the conceptual model is now clearer.

Before code:

- continue corpus-driven ontology refinement through source review;
- design a future shadow representation only after the vocabulary stabilizes;
- require deterministic v1 compatibility through the already verified adapter;
- consider separate resource-content and task-projection hashes in a future version;
- make any migration a versioned release decision.

### 4. Keep a second non-SACRE task scientifically motivated

A future **source-to-policy warrant task** is now the strongest candidate because the review program already creates the relevant relation-level evidence. It could evaluate source-description fidelity, bridge adequacy, translation disclosure, whole-document omission sensitivity, and support direction.

It is **not yet a mature second task family**. Do not freeze it until relation vocabulary and independent review/adjudication are strong enough.

### 5. Support P3 and P4 with explicit frozen objects

For P3/P4, freeze separately:

1. **resource snapshot** — exact cases, representations, candidate content, provenance/version state;
2. **task specification** — `sacre-qccs-v1`, QCCS protocol identity, source-role mapping, pair generation, aggregation, outputs;
3. **evaluation/execution condition** — model/provider/configuration, repetitions, retry/exclusion rules, perturbation assignment, or human evaluator condition.

P3 owns computational validation. P4 owns human empirical/comparative validation. Do not let protocol convenience silently alter the resource.

## Cross-repository change rule

**Execution-relevant:** candidate IDs/texts, scenario/task meaning, profile/geometry, required aggregation, executable-set membership, or execution-relevant schema. Notify SACRE, re-vendor/re-pin/reverify, and rerun affected results if the executed object changed.

**Provenance-only:** citations, provenance summaries, source-review metadata, or resulting `content_hash` drift with unchanged executable projection. Refresh provenance/pins as needed; **do not automatically rerun model outputs**. The 36-record 2026-08-30 hash refresh is the reference example.

**Documentation-only:** coordination, audit, manuscript writeback, conceptual ontology work with no executable effect. No product action unless it exposes an execution defect.

## Evidence boundary

Current developmental SACRE evidence includes the 8-family / 16-record geometry-stratified tranche and 20 complete single executions from the halted 68-record census; 48 census records were incomplete non-results. These are execution evidence, not independent Bench source validation.

The verified task adapter establishes architectural/reproducibility equivalence. The generic resource model and ontology stress test establish a defensible conceptual resource architecture grounded in current cases. None establishes QCCS reliability, construct validity, moral correctness, human correspondence, corpus-wide source fidelity, or confirmatory P3 findings.

## Required handoff

Every substantive handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
