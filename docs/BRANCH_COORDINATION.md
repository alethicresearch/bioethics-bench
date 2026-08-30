# Branch & Merge Coordination — Bioethics Bench

This file records durable branch roles and cross-repo dependency rules for Bioethics Bench. Exact branch heads and ahead/behind counts are session metadata; fetch them live.

## Operating rule

Work belongs on the branch that actually owns the current task. Do not create parallel canonical-v1 lanes for the same corpus work. Historical branches preserve research history but are not sources of current truth merely because they contain more records or older candidate constructions.

Before substantive work:
1. fetch current `main` and any branch you intend to modify;
2. read `docs/PROGRAM_COORDINATION.md`, `docs/COORDINATOR_DIRECTIVE.md`, and the relevant review/resource protocol;
3. verify generated corpus state rather than copying counts from prose;
4. state branch and merge target in the handoff;
5. classify any downstream SACRE dependency as execution-relevant, provenance-only, or documentation/specification-only.

## Canonical branch roles

### `main`

Current repository-wide canonical line. PR #10 has been merged; the 34-family / 68-record Full Corpus v1 lineage, current review infrastructure, first-pass generalization audit, and explicit `sacre-qccs-v1` task specification are available from the merged repository state.

### `research/full-corpus-v1`

Preserved Full Corpus research lineage/base. Use only when a current task explicitly belongs to this lineage. Do not assume it is ahead of or preferable to `main`; fetch and compare live state.

### `author/full-corpus-completion`

Historical merged completion/PR #10 head. Its prior role as the sole open Full Corpus integration lane is complete. Do not continue canonical work there by inertia. Reactivate only through an explicit branch decision.

### `claude/generalized-source-architecture-track`

Parked future research track for generalized/partial-source schemes. It is not canonical SACRE v1. Do not merge generalized source semantics or cases executable only under that scheme into current v1 through opportunistic cherry-picks.

The first-pass generalization audit and `sacre-qccs-v1` specification on `main` do **not** reactivate this branch or authorize generalized-source semantics. They establish a non-breaking task-adapter boundary around current v1. Current records and hashes remain canonical until a separately verified migration is justified.

### Other historical branches

Treat older reconstruction, export, audit, review, alias, `research/clean-state-v3`, and archive branches as read-only history unless explicitly reactivated. Historical records may explain why a rule changed; they do not define the current corpus.

## Current Full Corpus state

The executable Full Corpus currently contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. Records remain `status: draft`, `reviewed_by_human: false`.

Independent human source-to-policy review is incomplete. That is a release/quality fact, not an execution gate for current developmental/paper-facing SACRE work.

## Cross-repo dependency classes

Classify the change before asking the SACRE lane to act.

| Class | Examples | SACRE response | Bench responsibility |
|---|---|---|---|
| **Execution-relevant** | candidate id/text; scenario/task meaning; stipulations consumed by execution; profile; geometry; required aggregation; executable family added/removed; execution-relevant schema | re-vendor/re-pin and reverify before affected paper-facing execution; rerun affected results when the executed object changed | notify SACRE in the same work cycle and identify affected families/objects |
| **Provenance-only** | citation strings; provenance summaries; basis metadata with unchanged executable text; content-hash drift following those changes | refresh provenance when needed; no automatic semantic rerun | record in review/writeback; do not manufacture a resync loop |
| **Documentation/specification-only** | dossiers, review documents, coordination text, manuscript writebacks, generalization audit, task contract that describes unchanged v1 semantics | no product action unless adapter/equivalence work exposes an execution defect | maintain the durable record and label specification status accurately |

A provenance-only change can alter what a manuscript may say about source support even when it does not alter a computational result.

## Current source-review work

Use the generated review system rather than branch names as the live review state:

- `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
- generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
- `docs/full-corpus/review/research-tasks/README.md`

The generated handoff carries unit fingerprints precisely so unrelated corpus changes do not invalidate already returned verdicts.

Model-assisted source review is not independent human review. Whole-document omission review has examined five families by that method; 29 remain unexamined by that method. Do not convert that subset into a corpus-wide rate.

## Current manuscript/research dependency

P2 v49 main + Supplementary Information are complete for this compositional stage and now enter author/coauthor submission-facing review. Bench should not reopen P2 reconstruction; it should supply only targeted factual corrections if new Bench evidence materially changes an existing P2 claim.

The first-pass structural generalization audit is complete, and the explicit **`sacre-qccs-v1` task contract** is now specified in both reader-facing and machine-readable form. Its status is **specified, not yet equivalence-verified**.

The immediate architectural dependency is therefore the **read-only adapter + all-record equivalence test**: reproduce current SACRE vendoring semantics across all 68 canonical records before any generalized schema or vendor-path refactor. Source/review/release work continues in parallel. Later P3/P4 support should distinguish a frozen resource snapshot, task specification, and evaluation/execution condition.

## Merge/release standard

A change enters canonical state because:
- the owning branch is current;
- source/corpus evidence supports it;
- generated validation is green;
- the change preserves declared method semantics or explicitly escalates a method change;
- downstream execution dependencies are identified.

Do not merge merely to maximize executable count or because a historical branch is “ahead.”

Do not replace current v1 resource/task semantics merely because the generalized architecture is conceptually cleaner. A replacement path must first pass the explicit equivalence gate.

## Handoff requirement

Every substantive handoff must include:
**Branch; Merge target; Changed; Verified; Program/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
