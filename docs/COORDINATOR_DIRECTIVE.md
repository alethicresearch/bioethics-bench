# Coordinator Directive — Bioethics Bench Lane

**Current program objective:** mature Bioethics Bench as a defensible source-grounded research infrastructure for computational bioethics while supporting the Doing Ethics with AI (DEWA) paper program without turning corpus review into a blocking loop.

For a cold start, read:

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/PROGRAM_COORDINATION.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
7. `tasks/sacre-qccs-v1/task-contract.json`
8. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
9. `docs/papers/MANUSCRIPT_WRITEBACK.md`
10. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current verified state

The executable Full Corpus contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. Current records remain `status: draft` and `reviewed_by_human: false`.

P2 has completed its v49 submission-composition stage. Current artifacts:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- Supplementary Information: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit

The first-pass **Bioethics Bench generalization audit is complete**. It showed that most of the current record is reusable resource/provenance or generic evaluation/governance infrastructure; the strongest SACRE-specific coupling is concentrated in Public/Expert/Framework task roles, `pub/exp/fw` aliases, profile geometry/cross-source pairing, and aggregation semantics.

That result has now been implemented through an explicit **`sacre-qccs-v1` task contract and read-only adapter**. The adapter is **equivalence verified across all 68 records**.

Verification established:

- **0 execution/task-semantic differences** between current Bench and the prior SACRE vendor representation;
- **36/68 stale Bench `content_hash` values** in SACRE's older pin, with no accompanying scenario/candidate/profile/geometry/aggregation change;
- classification of that difference as **provenance-only drift**;
- SACRE re-vendoring/re-pinning to merged Bench `main` commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- exact byte equivalence between the adapter projection and the refreshed SACRE Full Corpus payload after re-pin;
- passing SACRE Full Corpus regression tests.

Current SACRE vendor payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

This closes the task-adapter equivalence gate. **Do not send future agents back to specify or prove `sacre-qccs-v1` again.**

## Operating mode

Work in meaningful scientific completion units. Prefer a completed review batch, a resolved resource-design question, a manuscript section, or a protocol freeze over another layer of coordination prose.

Independent human source-to-policy review remains a quality/release layer, **not an execution gate for developmental/paper-facing computational work**. Confirmatory P3 and human P4 studies remain separately protocol/authorization-gated.

Stop or escalate only when continuing would make the corpus materially misleading, source-unsupported, internally inconsistent, non-reproducible, or would silently change canonical SACRE v1 semantics or a confirmatory/human-study boundary.

## Current priorities

### 1. Preserve and mature the source-grounded resource

Keep the 34-family / 68-record corpus structurally valid, versioned, and reproducible. Apply source/candidate repairs because evidence warrants them, never to optimize downstream rankings or executable count.

Continue source/review work using the existing review tooling. Model-assisted checks remain useful quality evidence but are not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**. Do not extrapolate a corpus-wide rate.

### 2. Move the generalization program beyond the first SACRE adapter

The first task boundary is now demonstrated, not merely proposed. The next architectural work is:

- define a **generic candidate/source-role resource model on paper** before changing the canonical schema;
- preserve current v1 records and aliases as a versioned compatibility lineage;
- use the verified resource → task → evaluation separation in the standalone Bioethics Bench paper;
- specify an additional non-SACRE task only when a genuine computational-bioethics research question warrants it;
- do not claim empirical method-neutrality until more than one mature task family is actually specified and exercised.

A generalized schema is a future versioned change, not a cleanup exercise for current v1.

### 3. Mature the standalone Bioethics Bench paper

Current Drive plan:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The standalone paper owns:

- why source-grounded/versioned normative research objects are needed;
- resource construction and release methods;
- provenance and policy-basis ontology;
- representation and natural candidate geometry;
- resource / task / evaluation separation;
- the verified `sacre-qccs-v1` reference task;
- source-fidelity and review limits;
- benchmark/evaluation protocol architecture;
- governance, versioning, and future extension.

SACRE/QCCS remains the first mature task family rather than the definition of Bioethics Bench.

### 4. Support P3 and P4 with explicit frozen objects

For P3/P4, distinguish and freeze separately:

1. **resource snapshot** — exact cases, representations, candidate content, provenance/version state;
2. **task specification** — `sacre-qccs-v1`, QCCS protocol identity, source-role mapping, pair generation, aggregation, outputs;
3. **evaluation/execution condition** — model/provider/configuration, repetition, retry/exclusion rules, perturbation assignment, or human evaluator condition.

P3 owns computational validation. P4 owns human empirical/comparative validation. Do not let protocol convenience silently alter the resource.

## Cross-repository change rule

**Execution-relevant:** candidate ids/texts, scenario/task meaning, profile/geometry, required aggregation, executable-set membership, or execution-relevant schema. Notify SACRE, re-vendor/re-pin/reverify, and rerun affected results if the executed object changed.

**Provenance-only:** citations, provenance summaries, source-review metadata, or resulting `content_hash` drift with unchanged executable projection. Refresh provenance/pins as needed; **do not automatically rerun model outputs**. The 36-record hash refresh completed on 2026-08-30 is the reference example of this class.

**Documentation-only:** coordination, audit, manuscript writeback, explanatory task-contract prose. No product action unless the documentation exposes an execution defect.

## Evidence boundary

Current developmental SACRE evidence includes the 8-family / 16-record geometry-stratified tranche and 20 complete single executions from the halted 68-record census; 48 census records were incomplete non-results. These are execution evidence, not independent Bench source validation.

The verified task adapter establishes architectural/reproducibility equivalence. It does **not** establish QCCS reliability, construct validity, moral correctness, human correspondence, or confirmatory P3 findings.

## Required handoff

Every substantive handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
