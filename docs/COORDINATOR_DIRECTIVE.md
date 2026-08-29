# Central Coordinator Directive — Bioethics Bench Lane

**Program objective:** finish a defensible canonical Full Corpus v1 and its release substrate while keeping the Bench, SACRE application, and near-term P1/P2 manuscripts synchronized.

If this work is being resumed in a new central-coordination chat, read **`docs/CENTRAL_COORDINATOR_CONTINUITY.md` first**. This Bench file points to the canonical program-level handoff in the SACRE repo; the present file remains the lane-specific directive.

**Start at [`docs/COMPLETION.md`](COMPLETION.md)** if you want the whole project in one page — what "done" means for each lane, who owns it, and where the live answer lives.

Read this together with:
- `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
- `docs/PROGRAM_COORDINATION.md`
- `docs/BRANCH_COORDINATION.md`
- `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` — **read this if you are drafting**; the nine findings triaged in the order they are worth using
- `docs/papers/MANUSCRIPT_WRITEBACK.md` — the chronological audit trail behind them
- `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`
- `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`
- the generated Full Corpus disposition ledger and manifest

## Completion-first operating mode

The program is now deliberately **completion-driven**. Prefer completing a defensible review tranche, release artifact, or corpus state and then doing a correction pass over repeatedly widening the review surface, reopening architecture, or polishing intermediate documentation.

Work in the largest safe completion unit. A round should normally end with a concrete state change such as: a completed review batch, repaired/demoted records with regenerated manifest state, a closed citation-verification tranche, or a release-gate milestone — not merely another list of questions.

Do **not** stop for a non-blocking imperfection. Record it for a later review/fix pass and keep moving. Stop early only when continuing would likely make the corpus misleading, source-unsupported, internally inconsistent, non-reproducible, expensive to repair later, or would cross an explicit method/authorization boundary.

Before starting adjacent research or tooling, ask: **what release-critical tranche can be completed next?** Prefer that work. New validator/tooling work should be undertaken now only when it removes substantial mechanical burden, catches a real class of corpus error, or is necessary to complete the human review/release gate.

When a family or review batch is adequately decided under the protocol, record the decision and move on. Do not keep reopening already-supported cases merely because additional literature could always be gathered. The objective is a defensible v1 release, not exhaustive scholarship on every family.

## Current priority order

1. **Keep `author/full-corpus-completion` the sole canonical v1 work lane.** Do not develop independently on alias/export/audited/reconstruction branches. PR #10 is the integration surface for Full Corpus v1.
2. **Complete independent source-to-policy review in bounded batches.** This is the release-critical product task. Resolve the remaining mechanically ambiguous citations, then review executable families under `PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`. Apply pass/repair/demote decisions on the canonical branch and regenerate the ledger/manifest after substantive changes. Do not optimize for preserving the current executable count.
3. **Do not merge generalized-source architecture into v1.** Preserve `claude/generalized-source-architecture-track` as a future research branch. Missing-public/source cases are current method-boundary findings, not an instruction to redesign v1 for a larger n.
4. **Keep SACRE informed of execution-relevant drift.** If records, candidate texts/ids, profiles, execution-relevant schema, geometry, required aggregation, content hashes carried by the vendor payload, or the Full Corpus manifest change, update the cross-repo dependency immediately. SACRE must re-vendor/re-pin before a product merge or paper-facing execution uses stale corpus state.
5. **Write manuscript-facing findings in Git.** Log each finding in `docs/papers/MANUSCRIPT_WRITEBACK.md` with paper-ready language and exact evidence, and keep `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` current as the drafting surface — the log is chronological and accumulates superseded entries and stale version targets, so a coordinator who reads only the log will work from the wrong material. Do not wait for the central coordinator to reconstruct implications from commit history.
6. **Do not turn corpus work into model evaluation.** The completed SACRE Full Corpus development tranche is downstream execution evidence owned by the SACRE lane. Bench owns the input/release facts. Do not treat execution outcomes as Bench release validation or expand calibration runs ad hoc.

## Product-quality rule

Optimize for source-to-policy fidelity, release confidence, reproducibility, and closure—not for maximizing the executable count or eliminating every possible future criticism before v1 exists. A family should enter canonical v1 only because the evidence supports an action-distinct candidate field under the current three-source method.

Perfection is not the acceptance criterion for a review batch. **A defensible documented disposition, regenerated canonical state, and clear later correction path are.**

## Cross-lane handoff rule

If your work changes the Full Corpus executable set or any execution-relevant object:
- update `docs/papers/MANUSCRIPT_WRITEBACK.md`, and retriage `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` if the change alters a number or supersedes a finding;
- update `docs/BRANCH_COORDINATION.md` if branch/release dependencies changed;
- explicitly tell the SACRE lane whether its current vendor pin is still execution-equivalent and hash-current;
- stage any Drive/program delta that the central coordinator must apply.

If SACRE or manuscript work reveals a Bench problem, resolve it here only if it is genuinely a corpus/source/provenance issue. Do not change Bench objects simply to make an application result or manuscript narrative cleaner.

## Required handoff

Every substantive handoff must state:
**Branch**; **Merge target**; **Changed**; **Verified**; **Product/paper impact**; **Evidence status**; **Writeback status**; **Cross-repo dependency**; **Next dependency**.

Also state one of:
- **COMPLETE FOR THIS STAGE** — ready for the next review/release step; or
- **BLOCKED** — with the single blocking condition preventing safe completion.

Do not return a long optional-improvements list as if it were a blocker list. Put non-blocking improvements into a later review/fix queue.

If a cross-project architecture decision is needed, stop at the boundary and record the options/evidence in Git rather than silently changing the corpus scheme.
