# Central Coordinator Directive — Bioethics Bench Lane

**Program objective:** finish a defensible canonical Full Corpus v1 and its release substrate while keeping the Bench, SACRE application, and near-term P1/P2 manuscripts synchronized.

Read this together with:
- `docs/PROGRAM_COORDINATION.md`
- `docs/BRANCH_COORDINATION.md`
- `docs/papers/MANUSCRIPT_WRITEBACK.md`
- `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`
- `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`
- the generated Full Corpus disposition ledger and manifest

## Current priority order

1. **Keep `author/full-corpus-completion` the sole canonical v1 work lane.** Do not develop independently on alias/export/audited/reconstruction branches. PR #10 is the integration surface for Full Corpus v1.
2. **Complete independent human source-to-policy review.** This is the release-critical product task. Apply any repair, demotion, or defensible promotion on the canonical branch; regenerate the ledger/manifest rather than hand-maintaining counts.
3. **Do not merge generalized-source architecture into v1.** Preserve `claude/generalized-source-architecture-track` as a future research branch. Missing-public/source cases are current method-boundary findings, not an instruction to redesign v1 for a larger n.
4. **Keep SACRE informed of execution-relevant drift.** If records, candidate texts/ids, profiles, execution-relevant schema, geometry, required aggregation, or the Full Corpus manifest change, update the cross-repo dependency immediately. SACRE must re-vendor/re-pin before a product merge or paper-facing execution uses the changed corpus.
5. **Write manuscript-facing findings in Git.** Update `docs/papers/MANUSCRIPT_WRITEBACK.md` with paper-ready scope/release/architecture language and exact evidence. Do not wait for the central coordinator to reconstruct implications from commit history.
6. **Do not turn corpus work into model evaluation.** The completed SACRE Full Corpus development tranche is downstream execution evidence owned by the SACRE lane. Bench owns the input/release facts. Do not treat execution outcomes as Bench release validation or expand calibration runs ad hoc.

## Product-quality rule

Optimize for source-to-policy fidelity, release confidence, reproducibility, and closure—not for maximizing the executable count. A family should enter canonical v1 only because the evidence supports an action-distinct candidate field under the current three-source method.

## Cross-lane handoff rule

If your work changes the Full Corpus executable set or any execution-relevant object:
- update `docs/papers/MANUSCRIPT_WRITEBACK.md`;
- update `docs/BRANCH_COORDINATION.md` if branch/release dependencies changed;
- explicitly tell the SACRE lane whether its current vendor pin is still execution-equivalent;
- stage any Drive/program delta that the central coordinator must apply.

If SACRE or manuscript work reveals a Bench problem, resolve it here only if it is genuinely a corpus/source/provenance issue. Do not change Bench objects simply to make an application result or manuscript narrative cleaner.

## Required handoff

Every substantive handoff must state:
**Branch**; **Merge target**; **Changed**; **Verified**; **Product/paper impact**; **Evidence status**; **Writeback status**; **Cross-repo dependency**; **Next dependency**.

If a cross-project architecture decision is needed, stop at the boundary and record the options/evidence in Git rather than silently changing the corpus scheme.
