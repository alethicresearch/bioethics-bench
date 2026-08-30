# Coordinator Directive — Bioethics Bench Lane

**Program objective:** mature Bioethics Bench as a defensible source-grounded research infrastructure for computational bioethics while supporting the DEWA paper program without making corpus review a blocking loop.

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

## Current state

PR #10 is merged. The executable Full Corpus currently contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. All records remain draft and `reviewed_by_human=false`.

The current standalone research/publication plan is Bioethics Bench v3 in Drive:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

P2 has completed its v49 submission-composition stage. Current P2 main and supplement are:
- https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit

The **first-pass Bioethics Bench generalization audit is complete** in `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`. It identifies a large reusable resource/provenance core and localizes the strongest SACRE-specific coupling to the fixed public/expert/framework pool structure, `pub/exp/fw` candidate aliases, SACRE profiles/geometry/cross-source pairing, and `required_aggregation`. The v1 corpus should not be rewritten merely for architectural neatness.

The audit's first implementation artifact is now also complete for the specification stage:

- reader-facing task contract: `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`;
- machine-readable contract: `tasks/sacre-qccs-v1/task-contract.json`.

The contract makes the current task projection explicit without changing any canonical v1 record. Its status is **specified, not yet equivalence-verified**. The sole remaining gate before replacing/refactoring the existing vendor path is a read-only adapter plus all-record equivalence testing.

Bench should now prioritize that equivalence gate, source/review/release work, and the standalone paper, while supplying P2 only with targeted factual corrections if new evidence changes a current claim materially.

## Operating mode

Work in meaningful completion units. Prefer a completed review batch, a resolved resource-design question, or a verified adapter/equivalence step over another layer of coordination prose.

Do not stop developmental/paper-facing SACRE work because independent human source review is incomplete. Human review is a quality/release layer under the current program architecture, not an execution gate.

Stop/escalate only when continuing would make the corpus materially misleading, source-unsupported, internally inconsistent, non-reproducible, or would silently change the SACRE v1 method or a confirmatory/human-study boundary.

## Current priorities

### 1. Preserve a truthful executable resource

Keep the current Full Corpus structurally valid, versioned, and reproducible. Do not optimize for executable count. Apply candidate/source repairs because the evidence warrants them, not because a cleaner downstream result is desired.

### 2. Continue source/review work in parallel

Use the existing review tooling and task system. Model-assisted review remains useful quality work but is not independent human review. Whole-document omission review is incomplete and should be described exactly as such.

When a review finding is actionable, distinguish whether it changes executable meaning or only provenance.

### 3. Complete the non-breaking task-adapter gate

The structural audit and explicit `sacre-qccs-v1` task specification are complete.

Next architectural steps:

- build a **read-only adapter prototype** that consumes current canonical v1 Bench records and emits the explicit task projection;
- compare that projection with the current SACRE vendoring semantics for **all 68 records**;
- test case/record/representation identity, scenario, candidate ids/text/role/order, profile, geometry, pair set/count, partner counts, structural asymmetry, required aggregation, and release/hash provenance;
- do not replace or refactor the current vendor path until equivalence passes;
- define any future generic candidate/source-role schema only after this compatibility boundary is verified;
- specify an additional non-SACRE task only when it has a real scientific purpose, not merely to demonstrate breadth.

Do not claim demonstrated method-neutrality merely because the architecture and task boundary have now been specified.

### 4. Mature the standalone resource paper

`docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` remains the manuscript-facing findings surface; `MANUSCRIPT_WRITEBACK.md` remains the chronological audit trail. Use the completed audit and explicit task contract to develop the standalone Bench paper around:

- why source-grounded/versioned normative research objects are needed;
- resource / task / evaluation separation;
- construction and release methods;
- provenance and policy-basis distinctions;
- source fidelity and review limits;
- baseline/evaluation protocol architecture;
- governance/versioning and future extension.

SACRE/QCCS remains the first mature task family rather than the definition of the resource.

### 5. Support P3/P4 only with frozen, explicit objects

When P3/P4 protocols need Bench objects, distinguish and freeze:

1. the **resource snapshot** — exact cases, representations, candidate content, provenance/version state;
2. the **task specification** — `sacre-qccs-v1`, QCCS protocol identity, source-role mapping, pair-generation rule, aggregation, and required outputs;
3. the **evaluation/execution condition** — model/provider/configuration, repetitions, retry/exclusion rules, perturbation assignment, or human evaluator condition.

Do not let protocol convenience silently alter the canonical resource.

## Change-class rule for SACRE

If a Bench change alters:
- candidate ids or texts;
- scenario/task meaning;
- profile or geometry;
- required aggregation;
- executable family set;
- execution-relevant schema;

it is **execution-relevant**. Notify SACRE in the same work cycle; re-vendoring/re-pinning/reverification is required before affected paper-facing execution is treated as current.

Citation/provenance changes with an unchanged executable projection are **provenance-only**. Propagate them truthfully but do not automatically request a semantic rerun.

Documentation/specification changes that merely describe the current projection — including the current audit/task-contract work — do not require a rerun unless equivalence work reveals an execution defect.

## Evidence boundary

Bench construction/review state does not establish model reliability, moral correctness, or human correspondence. Developmental SACRE runs do not validate the corpus's source fidelity.

Current downstream developmental evidence includes an 8-family / 16-record geometry-stratified tranche and 20 complete records from a halted 68-record census attempt. These are SACRE execution evidence, not Bench release validation.

Confirmatory P3 and human P4 work remain separately protocol/authorization-gated.

## Required handoff

Every substantive handoff must state:
**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

Also state either **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
