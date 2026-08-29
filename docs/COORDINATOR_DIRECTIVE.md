# Coordinator Directive — Bioethics Bench Lane

**Program objective:** mature Bioethics Bench as a defensible source-grounded research infrastructure for computational bioethics while supporting the current DEWA paper program without making corpus review a blocking loop.

For a cold start, read:
1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/PROGRAM_COORDINATION.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
6. `docs/papers/MANUSCRIPT_WRITEBACK.md`
7. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current state

PR #10 is merged. The executable Full Corpus currently contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. All records remain draft and `reviewed_by_human=false`.

The current standalone research/publication plan is Bioethics Bench v3 in Drive:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The wider program's immediate substantive priority is **P2 maximal integrated master**. Bench should support that work with accurate construction/resource findings and bounded developmental evidence while continuing to mature as an independent paper/resource.

## Operating mode

Work in meaningful completion units. Prefer a completed review batch, a resolved resource-design question, or a verified generalization-audit tranche over another layer of coordination prose.

Do not stop developmental/paper-facing SACRE work because independent human source review is incomplete. Human review is a quality/release layer under the current program architecture, not an execution gate.

Stop/escalate only when continuing would make the corpus materially misleading, source-unsupported, internally inconsistent, non-reproducible, or would silently change the SACRE v1 method or a confirmatory/human-study boundary.

## Current priorities

### 1. Preserve a truthful executable resource

Keep the current Full Corpus structurally valid, versioned, and reproducible. Do not optimize for executable count. Apply candidate/source repairs because the evidence warrants them, not because a cleaner downstream result is desired.

### 2. Continue source/review work in parallel

Use the existing review tooling and task system. Model-assisted review remains useful quality work but is not independent human review. Whole-document omission review is incomplete and should be described exactly as such.

When a review finding is actionable, distinguish whether it changes executable meaning or only provenance.

### 3. Run the Bioethics Bench generalization audit

The standalone paper intends Bioethics Bench to be broader than SACRE/REai. Audit the current schema/task coupling and classify fields as:

- **intrinsic resource fields**;
- **generic task/evaluation fields**;
- **SACRE-specific execution fields**.

The goal is to identify accidental coupling and future abstraction opportunities without destabilizing the v1 execution path merely to make an architectural claim look cleaner.

### 4. Keep manuscript-facing findings current

`docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` is the drafting surface; `MANUSCRIPT_WRITEBACK.md` is the chronological audit trail. Keep the brief current when a finding changes materially.

For P2, prioritize findings that explain why systematic investigation required a stable resource and what source-grounded construction revealed about representation, provenance, geometry, source independence, and execution.

### 5. Preserve the standalone resource-paper identity

P2 should not absorb the full Bench contribution. The standalone Bench paper owns:
- resource construction and release methods;
- source grounding/provenance;
- task abstraction;
- evaluation architecture and baselines;
- versioning/governance;
- extensibility and future multi-method use.

SACRE/QCCS remains the first mature task family rather than the definition of the resource.

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

Documentation-only changes need no product action unless they reveal an execution defect.

## Evidence boundary

Bench construction/review state does not establish model reliability, moral correctness, or human correspondence. Developmental SACRE runs do not validate the corpus's source fidelity.

Current downstream developmental evidence includes an 8-family / 16-record geometry-stratified tranche and 20 complete records from a halted 68-record census attempt. These are SACRE execution evidence, not Bench release validation.

Confirmatory P3 and human P4 work remain separately protocol/authorization-gated.

## Required handoff

Every substantive handoff must state:
**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

Also state either **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
