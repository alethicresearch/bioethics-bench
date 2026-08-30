# Branch & Merge Coordination — Bioethics Bench

This file records durable branch roles and cross-repository change rules. Exact branch heads and ahead/behind counts are session metadata; fetch them live.

## Operating rule

Work belongs on the branch that owns the current task. Do not create parallel canonical-v1 lanes or treat a historical branch as authoritative merely because it contains more records or older construction work.

Before substantive work:

1. fetch current `main` and any branch you intend to modify;
2. read `docs/PROGRAM_COORDINATION.md`, `docs/COORDINATOR_DIRECTIVE.md`, and the relevant review/resource protocol;
3. verify generated corpus state rather than copying counts from prose;
4. state branch and merge target in the handoff;
5. classify downstream SACRE effects as execution-relevant, provenance-only, or documentation-only.

## Canonical branch roles

### `main`

Current repository-wide canonical line. It contains the verified **34-family / 68-record / 210-candidate** Full Corpus lineage, current review infrastructure, the first-pass generalization audit, the explicit `sacre-qccs-v1` task contract, and the equivalence-verified read-only adapter/verifier.

The adapter-equivalence work was merged through PR #11. Do not recreate an equivalent open adapter branch unless a new implementation change is actually needed.

### `research/full-corpus-v1`

Preserved Full Corpus research lineage/base. Use only when a current task explicitly belongs to this lineage. Fetch and compare with `main`; do not assume it is ahead or preferable.

### `author/full-corpus-completion`

Historical merged completion/PR #10 head. Its integration role is complete. Do not continue canonical work there by inertia.

### `claude/generalized-source-architecture-track`

Parked future research track for generalized/partial-source schemes. It is **not canonical SACRE v1**. The completed audit and verified `sacre-qccs-v1` adapter do not reactivate it or authorize generalized-source semantics.

The next architecture step is to define a generic candidate/source-role model **on paper**. Any future schema change must be explicitly versioned and preserve current v1 as a compatibility lineage until migration evidence justifies otherwise.

### Other historical branches

Treat older reconstruction, export, audit, review, alias, `research/clean-state-v3`, and archive branches as read-only history unless explicitly reactivated.

## Current Full Corpus state

- **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**
- current records remain `status: draft`
- current records remain `reviewed_by_human: false`

Independent human source-to-policy review remains incomplete. That is a release/quality fact, not a developmental execution gate.

## Completed task-equivalence dependency

The first explicit task boundary is no longer pending.

- `sacre-qccs-v1` task contract: complete
- read-only adapter: complete
- all-record equivalence test: complete
- execution/task-semantic differences found: **0/68**
- stale SACRE resource hashes found before refresh: **36/68**
- classification: **provenance-only drift**
- SACRE re-pinned to Bench `main` commit `077b36ff1eb9662e93549b1f4261691960cfa605`
- refreshed SACRE payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`
- post-refresh adapter/vendor equivalence: **byte-for-byte**
- SACRE Full Corpus regression tests: passing

No model/QCCS rerun was required because executed semantics did not change.

## Cross-repo dependency classes

| Class | Examples | SACRE response | Bench responsibility |
|---|---|---|---|
| **Execution-relevant** | candidate ID/text; scenario/task meaning; execution-relevant stipulation; profile; geometry; required aggregation; executable family added/removed; execution-relevant schema | re-vendor/re-pin/reverify; rerun affected results when the executed object changed | notify SACRE in the same work cycle and identify affected objects |
| **Provenance-only** | citation strings; provenance summaries; source-review metadata; `content_hash` drift with unchanged executable projection | refresh provenance/pin; **no automatic semantic rerun** | record truthfully and avoid a manufactured rerun loop |
| **Documentation-only** | dossiers, coordination text, audit/writeback prose with no executable effect | no product action unless a defect is exposed | maintain the durable record |

The 36-record 2026-08-30 provenance refresh is the reference example of the second class.

## Current source-review work

Use the generated review system:

- `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
- generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
- `docs/full-corpus/review/research-tasks/README.md`

Model-assisted source review is not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**.

## Current manuscript/research dependency

P2 v49 main + Supplementary Information are complete for this compositional stage and should not be reopened as a maximal reconstruction project.

The Bench architecture frontier is now:

- generic candidate/source-role resource modeling on paper;
- source/review/release maturation;
- standalone Bioethics Bench paper development;
- P3 support through separately frozen resource/task/evaluation objects;
- a second non-SACRE task only when scientifically motivated.

## Merge/release standard

A change enters canonical state because:

- the owning branch is current;
- source/corpus evidence supports it;
- generated validation is green;
- declared method semantics are preserved or an explicit method change is escalated;
- downstream dependencies are identified.

Do not merge merely to maximize executable count or because a historical branch is “ahead.”

## Handoff requirement

Every substantive handoff includes:

**Branch; Merge target; Changed; Verified; Program/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
