# Central Coordinator Continuity — Bioethics Bench Entry Point

Bioethics Bench participates in the wider **Doing Ethics with AI (DEWA)** research program. The canonical cross-program self-handoff lives in:

`xnuxi/sacre-prototype` → `docs/CENTRAL_COORDINATOR_CONTINUITY.md`

The compact current checkpoint lives beside it in:

`xnuxi/sacre-prototype` → `docs/CURRENT_COORDINATOR_STATUS.md`

Read those first in a new central-coordination thread. This file is the Bench-specific entry point.

## Minimum Bench bootstrap

Then read:

1. `docs/PROGRAM_COORDINATION.md`
2. `docs/COORDINATOR_DIRECTIVE.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
7. `tasks/sacre-qccs-v1/task-contract.json`
8. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
9. `docs/papers/MANUSCRIPT_WRITEBACK.md`
10. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

Treat live records, manifests, generated review state, and repository tests as authoritative for corpus facts. Historical branches preserve research history; they do not override current `main`.

## Program relationship

The core DEWA sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a parallel major research object/publication: a source-grounded research infrastructure for computational bioethics. It emerged from systematic SACRE/ReflectiveEquilibrium.AI work, but SACRE/QCCS is the first mature task family rather than the definition of the resource.

Keep three layers separable:

**RESOURCE → TASK → EVALUATION**

## Current verified Bench state

Current executable Full Corpus:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- records remain `status: draft`;
- records remain `reviewed_by_human: false`.

Structural validation is not source fidelity. Model-assisted review is not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**. Do not infer a corpus-wide finding rate.

Independent human source-to-policy review is a quality/release layer, not a gate on developmental/paper-facing computational work. Confirmatory P3 and human P4 work remain separately authorization-gated.

## Generalization milestone — audit, task contract, adapter and equivalence all complete

The first-pass structural generalization audit localized the strongest SACRE-specific coupling to:

- Public / Expert / Framework task roles;
- current `pubN` / `expN` / `fwN` aliases;
- benchmark-profile geometry and cross-source pairing;
- aggregation semantics.

Most case identity, scenario, candidate content, source/provenance, policy basis, representation, lifecycle, rights, and versioning remain part of a richer resource layer.

The first explicit task contract is:

- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`

The read-only adapter and verifier are:

- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The task boundary is now **equivalence verified across all 34 families / 68 records**.

Verification found:

- **0 execution/task-semantic differences** against SACRE's prior vendor representation;
- **36/68 stale Bench `content_hash` values** in the older SACRE pin;
- no associated scenario, candidate, profile, geometry, version, pairing, or aggregation change;
- therefore provenance-only drift rather than execution drift.

SACRE was re-vendored/re-pinned to merged Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

Current SACRE Full Corpus payload SHA-256:

`7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

After re-pin, the explicit adapter projection and SACRE vendor payload were byte-for-byte identical and the existing Full Corpus regression tests passed. The SACRE work was merged at `4ed4b24ab99d7427195a21393474c02700274ee6`.

**Do not restart the generalization audit, `sacre-qccs-v1` specification, or adapter-equivalence work. Those stages are complete.**

This verifies architectural/reproducibility separation. It does **not** demonstrate Bioethics Bench method-neutrality across multiple mature task families or validate QCCS itself.

## Current manuscript interface

Standalone Bench plan in Drive:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

P2 has completed its v49 submission-composition stage:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- Supplementary Information: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit
- preserved v48 maximal master: https://docs.google.com/document/d/12W2-SHZ1CSdbTfQWO1i0nXcCViVR_AiI/edit

Bench should support P2 only with targeted corrections if new evidence materially changes an existing claim. The full resource contribution belongs in the standalone Bench paper.

For P3/P4, freeze separately:

1. **resource snapshot**;
2. **task specification**;
3. **evaluation/execution condition**.

## Current Bench frontier

1. Continue source/review/release maturation.
2. Define the future **generic candidate/source-role resource model on paper** before schema change.
3. Mature the standalone Bioethics Bench paper using the now-demonstrated resource/task boundary.
4. Refine P3 protocol around separately frozen resource and task objects; no confirmatory execution yet.
5. Specify a non-SACRE task only when a genuine scientific question warrants it; do not manufacture breadth merely to claim generality.
6. Preserve canonical v1 as a compatibility lineage until a future versioned architecture change is justified.

## Cross-repo rule

Execution-relevant changes require SACRE re-vendor/re-pin/reverification and affected reruns when the executed object changed.

Provenance-only changes may require a current pin/hash refresh but **do not automatically require semantic model reruns**. The 36-record 2026-08-30 hash refresh is the reference example.

Documentation-only work needs no product action unless it reveals an execution defect.

## Handoff rule

Every substantive handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
