# Central Coordinator Continuity — Bench Entry Point

This repository participates in a multi-repo publication/application/benchmark program. The **canonical durable handoff for the central coordinator** lives in:

`xnuxi/sacre-prototype` → `docs/CENTRAL_COORDINATOR_CONTINUITY.md` on `main`.

Read that file first when starting a new central-coordination thread. It defines the source-of-truth hierarchy, new-thread bootstrap, manuscript/Drive promotion rules, evidence architecture, SACRE v1 method decisions, branch-control rules, current completion sequence, and author-authorization boundaries.

Do not copy or independently maintain the full central directive here: duplication creates competing coordinator truth. This Bench file is deliberately an entry point.

## Minimum Bench bootstrap

After reading the canonical central continuity file:

1. Fetch the live head of `author/full-corpus-completion` and PR #10; do not reuse a SHA from an old handoff.
2. Read:
   - `docs/COORDINATOR_DIRECTIVE.md`
   - `docs/PROGRAM_COORDINATION.md`
   - `docs/BRANCH_COORDINATION.md`
   - `docs/papers/MANUSCRIPT_WRITEBACK.md`

**Drafting note:** `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` is the surface to draft P1/P2 from — the Bench findings triaged into the order they are worth using, with current numbers and superseded entries retired. `MANUSCRIPT_WRITEBACK.md` remains the chronological audit trail behind it.

   - `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`
   - `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`
   - the generated Full Corpus disposition ledger and manifest
   - `docs/DRIVE_COORDINATION_DELTA.md` if present/non-empty
3. Treat repository-generated corpus state as authoritative for counts, profiles, geometry, provenance, review, and release status.
4. Keep `author/full-corpus-completion` as the canonical v1 work lane unless the central program explicitly changes it.
5. Keep `claude/generalized-source-architecture-track` separate from canonical v1 unless the source architecture is explicitly re-specified at program level.
6. The release-critical Bench task is independent human source-to-policy fidelity review; machine validity is not that review.
7. If Bench changes any execution-relevant object, explicitly tell the SACRE lane whether its current vendor pin is still execution-equivalent and update the manuscript writeback queue.

## Central manuscript/Drive rule

Repo agents should place paper-ready findings in `docs/papers/MANUSCRIPT_WRITEBACK.md`. The central coordinator integrates those findings into the actual P1/P2/P3 manuscripts, renders/QA-checks promoted DOCX versions, uploads/promotes them on Google Drive in the same work cycle, and updates coordination state. A manuscript version that exists only in chat is not fully promoted.

## Maintenance

Only update this file if the location of the canonical central continuity file or the Bench bootstrap contract changes. Current manuscript versions, evidence sequencing, and central rules belong in the canonical SACRE continuity file plus the live Drive/repo coordination surfaces.
