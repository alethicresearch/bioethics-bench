# Branch & Merge Coordination — Bioethics Bench

**Coordinator role:** this file is the repo-local merge map for the normative-computation program. Agents should update it when branch roles, release dependencies, or merge readiness change. The central program/manuscript coordinator integrates cross-repo consequences into Drive and the papers.

## Operating rule

Work belongs in Git first. Case research, records, dossiers, validators, release state, manuscript-facing findings, and coordination deltas should be committed to the branch that owns them. Do not create a parallel branch for work already owned by an active lane unless it is explicitly an experiment/review track.

Before substantive work:
1. fetch the current branch and its intended base;
2. read `docs/PROGRAM_COORDINATION.md`, `docs/BRANCH_COORDINATION.md`, `docs/COORDINATOR_DIRECTIVE.md`, and the controlling Full Corpus protocol/ledger;
3. state the active branch and merge target in every handoff;
4. check whether a different branch is experimental/legacy before borrowing its content;
5. compute live merge/ahead/behind state rather than copying a count from this document.

Moving SHAs and ahead/behind counts are session metadata. Branch roles, release lineage, merge targets, and cross-repo dependencies are the durable coordination facts.

## Canonical branches

### `main`
Released Featured v1 lineage and repository-wide infrastructure. Full Corpus v1 construction is not being developed directly here.

### `research/full-corpus-v1`
Base line for the Full Corpus v1 completion PR. Fetch its exact head when evaluating PR #10.

### `author/full-corpus-completion`
**Role:** sole canonical Full Corpus v1 completion lane and PR #10 head.

It owns the current 34-family / 68-record release-candidate state, disposition ledger, candidate audits, source-to-policy review workflow, manifest generation, and v1 release preparation. This is the only branch that should change canonical Full Corpus v1 records/dispositions while PR #10 is active.

Fetch the exact current branch head and live comparison to `research/full-corpus-v1` at the start/end of work rather than treating a coordination-only commit SHA as a corpus identity.

### `claude/bioethics-bench-completion-m0p43e`
Treat as an alias/handoff lineage, not a second canonical development lane. Do not make independent canonical-v1 commits here. All v1 corpus work goes to `author/full-corpus-completion`.

### `claude/generalized-source-architecture-track`
**Role:** parked research track for generalized/partial-source schemes.

It contains generalized source-scheme/schema work and reconstructed cases that are **not part of canonical v1** under the current source-completeness decision. Do not merge or cherry-pick generalized source-scheme semantics, generalized profiles, or records promoted only under that scheme into `author/full-corpus-completion`. A source-scheme-neutral validator bug discovered there may be ported only after separate review.

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

## Cross-repo dependency: what changed, and who must act

This section used to record the current pin SHA and the current stale set. Both decayed within
hours and produced a day of unnecessary re-vendoring. **What is durable is the change class, not
the SHA.** Classify the change first; the response follows from the class, and the live SHA is
whatever `git fetch` says at the moment you act.

| Class | Examples | SACRE must | Bench must |
|---|---|---|---|
| **Execution-relevant** | Candidate id or text; scenario or stipulation text; `benchmark_profile`; geometry; `required_aggregation`; schema affecting execution; a family added, held or removed | Re-vendor, re-pin and re-run the suites **before** any product merge or paper-facing execution. Results computed under the old payload are not comparable. | Notify the SACRE lane in the same session, naming the first changing commit and the families affected |
| **Provenance-only** | Citation strings; provenance summaries; `policy_basis` declarations that do not change candidate text; manifest churn that follows from the above | **Nothing, by default.** Re-pin only when the vendor is needed for a paper-facing execution, when a provenance claim has to be true on inspection, or opportunistically alongside other work | Record it here and in `docs/papers/MANUSCRIPT_WRITEBACK.md`. Do **not** open a resync request |
| **Documentation** | Review documents, dossiers, coordination text, writebacks | Nothing | Record it in the writeback if it has a manuscript implication |

The rule for the middle row is the SACRE coordinator's, stated in that repo's
`docs/CURRENT_COORDINATOR_STATUS.md`: *do not restart a product-resync loop for
execution-equivalent citation/hash changes.* It is recorded here because the Bench lane is the one
that generates those changes and had been requesting a resync for each of them.

**How to tell the classes apart mechanically.** Re-vendor into a scratch checkout and diff the
payload. If every changed line is a `contentHash`, the change is provenance-only. If any candidate
id, text, scenario, profile, geometry or aggregation line moves, it is execution-relevant. That
check takes a minute and settles the question without judgment:

```
BENCH_REF=author/full-corpus-completion node scripts/vendor-bench-full-corpus.mjs
git diff src/lib/bench/full-corpus-v1.json | grep '^[+-]' | grep -v '^[+-][+-]' | grep -vc contentHash
```

A zero means provenance-only.

### Current state, 2026-08-29

Stated once, and expected to decay — fetch live heads rather than trusting these.

- Full Corpus integration is **merged to SACRE `main`**; the old integration lane is no longer the
  product merge gate, and `main` treats Full Corpus loading and execution as deployed current
  behaviour. Further Full Corpus product work starts from `main`.
- The direct-policy warrant review is **complete**: all 20 public and all 49 expert
  `direct-policy-evidence` candidates read against their sources. This is the last review pass the
  Bench lane can perform without a human reviewer.
- Bench's executable set is **34 families / 68 records**, unchanged all day. Every Bench change on
  2026-08-29 was provenance-only, across twenty-two families.
- A refreshed payload sits verified on `claude/bioethics-bench-completion-m0p43e` (main plus the
  re-pin; 365 unit / 73 web / 46 Full Corpus tests, clean build). Available, not urgent.
- **One execution-relevant change has now occurred: M002 `exp1` candidate text.** The candidate
  attributed to WHO QualityRights a "substitute decision-making only as a last resort" rule; WHO
  QualityRights is CRPD-Article-12 aligned and treats substitute decision-making as something to be
  eliminated, declining even the last-resort framing. Repaired to "rather than transferring the
  decision to a substitute decision-maker." **SACRE must re-vendor and re-verify before any product
  merge or paper-facing execution that uses M002.** Any result computed for M002 under the previous
  payload is not comparable to one computed after. All other Bench changes on 2026-08-29 remain
  provenance-only.
- The other foreseeable execution-relevant change — holding a family whose source could not be
  traced — **did not occur**. M075's missing source was identified.

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
