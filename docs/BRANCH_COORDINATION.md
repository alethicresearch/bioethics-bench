# Branch & Merge Coordination — Bioethics Bench

**Coordinator role:** this file is the repo-local merge map for the normative-computation program. Agents should update it when branch roles, release dependencies, or merge readiness change. The central program/manuscript coordinator integrates cross-repo consequences into Drive and the papers.

## Operating rule

Work belongs in Git first. Case research, records, dossiers, validators, release state, manuscript-facing findings, and coordination deltas should be committed to the branch that owns them. Do not create a parallel branch for work already owned by an active lane unless it is explicitly an experiment/review track.

Before substantive work:
1. fetch the current branch and its intended base;
2. read `docs/PROGRAM_COORDINATION.md`, `docs/BRANCH_COORDINATION.md`, and the controlling Full Corpus protocol/ledger;
3. state the active branch and merge target in every handoff;
4. check whether a different branch is experimental/legacy before borrowing its content.

## Canonical branches

### `main`
Released Featured v1 lineage and repository-wide infrastructure. Full Corpus v1 construction is not being developed directly here.

### `research/full-corpus-v1`
Base line for the Full Corpus v1 completion PR. Current base head at the coordination check: `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`.

### `author/full-corpus-completion`
**Role:** canonical Full Corpus v1 completion lane and PR #10 head. Current head at the coordination check: `79347f7c45a1a02ec13ee11467a93d7ebe046144`.

Relative to `research/full-corpus-v1`, this branch is **69 commits ahead and 0 behind**. It owns the current 34-family / 68-record release-candidate state, disposition ledger, candidate audits, source-to-policy review workflow, manifest generation, and v1 release preparation.

This is the only branch that should change the canonical Full Corpus v1 records/dispositions while PR #10 is active.

### `claude/bioethics-bench-completion-m0p43e`
Currently points to the same SHA as `author/full-corpus-completion`. Treat it as an alias, not a second development lane. Do not make independent commits here. All canonical v1 work goes to `author/full-corpus-completion`.

### `claude/generalized-source-architecture-track`
**Role:** parked research track for generalized/partial-source schemes. Current head: `190debde55b97d7dd3e6f69356b040674f2d52d8`.

Relative to the canonical Full Corpus head, this branch is **5 commits ahead and 4 behind** from an older merge base. It contains generalized source-scheme/schema work and an M099 reconstruction that are **not part of canonical v1** under the current source-completeness decision.

Do not merge or cherry-pick generalized source-scheme semantics, generalized profiles, or records promoted only under that scheme into `author/full-corpus-completion`. A source-scheme-neutral validator bug discovered there may be ported only after separate review.

## Branches to treat as historical/read-only unless explicitly reactivated

- `author/full-corpus-completion-audited`
- `author/full-corpus-completion-export`
- `author/full-corpus-completion-export-2`
- `author/reconstruction-batch-01`
- `claude/bioethics-bench-landing-kBjiZ`
- `claude/normative-computation-research-f6zfep`
- `review-full-corpus`
- `research/clean-state-v3`
- `archive/*`

These branches preserve prior attempts, audits, transports, or handoffs. Do not use an older count, record, or disposition merely because it exists there.

## Merge/release order for product completion

1. Keep PR #10 (`author/full-corpus-completion` → `research/full-corpus-v1`) internally green and derive all counts/manifests from committed state.
2. Complete the independent human source-to-policy review on the canonical three-source executable subset. Apply repairs/demotions/promotions only on `author/full-corpus-completion`; regenerate ledger/manifest after every substantive change.
3. Fix the Full Corpus release manifest and lifecycle only after that review gate is satisfied.
4. Notify the SACRE lane whenever execution-relevant records/schema/profile/manifest content changes. SACRE must re-vendor/re-pin before any paper-facing execution or integration merge that depends on the changed corpus.
5. Preserve the generalized-source branch as a later architecture track; do not let it delay or contaminate the v1 release.
6. After the human-reviewed release is fixed, coordinate the released pin with SACRE for the all-record exploratory census and later P3 validation.

## Current cross-repo dependency

SACRE’s Full Corpus integration branch currently vendors Bench content at commit `8811c0c7c31232b13c370518f3f1f1f9de5eabbb`. The canonical Bench branch has since advanced to `79347f7c45a1a02ec13ee11467a93d7ebe046144`, but the two later commits change only coordination documentation, not records/schema/manifest. Thus the currently vendored execution input has not drifted.

If any later commit changes `data/benchmark`, executable profiles, schemas that affect execution, or the Full Corpus manifest, this statement becomes false immediately. Update this file and flag SACRE for re-vendoring.

## Manuscript interface

Agents should stage manuscript-facing contributions in `docs/papers/MANUSCRIPT_WRITEBACK.md`, not in Drive manuscript binaries as their primary writing surface. Every writeback must include:
- target paper/version/section;
- proposed claim/paragraph/table/figure change;
- exact branch, commit, record/manifest/dossier evidence;
- evidence class;
- whether the fact is released, release-candidate, human-reviewed, exploratory, or planned;
- dependency/blocker;
- status: `proposed`, `ready-for-central-integration`, or `integrated`.

The central coordinator owns final manuscript integration and records the manuscript version where the item was applied.

## Handoff requirement

Every substantive handoff must include: **Branch**, **Merge target**, **Changed**, **Verified**, **Program/paper impact**, **Evidence status**, **Writeback status**, **Cross-repo dependency**, **Next dependency**.
