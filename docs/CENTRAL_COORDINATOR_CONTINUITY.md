# Central Coordinator Continuity — Bioethics Bench Entry Point

Bioethics Bench participates in the wider **Doing Ethics with AI (DEWA)** research program. The canonical durable cross-program self-handoff lives in:

`xnuxi/sacre-prototype` → `docs/CENTRAL_COORDINATOR_CONTINUITY.md` on `main`.

The latest compact checkpoint lives beside it in:

`xnuxi/sacre-prototype` → `docs/CURRENT_COORDINATOR_STATUS.md`.

Read those first when starting a new central-coordination thread. This file intentionally remains a Bench-specific entry point rather than duplicating the entire program handoff.

## Minimum Bench bootstrap

After reading the canonical central continuity/status files:

1. Fetch current Bioethics Bench `main` and the current Full Corpus lineage; PR #10 has already been merged. Do not treat `author/full-corpus-completion` as a still-open integration gate unless it is explicitly reactivated.
2. Read:
   - `docs/PROGRAM_COORDINATION.md`
   - `docs/COORDINATOR_DIRECTIVE.md`
   - `docs/BRANCH_COORDINATION.md`
   - `docs/COMPLETION.md`
   - `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md` — current resource/task/evaluation separation audit
   - `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` — current manuscript-facing drafting surface
   - `docs/papers/MANUSCRIPT_WRITEBACK.md` — chronological audit trail
3. For source-review work, read:
   - `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
   - generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
   - `docs/full-corpus/review/research-tasks/README.md`
4. Treat repository-generated records/manifests/review state as authoritative for corpus facts.
5. Keep the generalized-source architecture track separate from canonical v1 unless the program explicitly re-specifies SACRE's source architecture.

## Current program relationship

The core DEWA sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a coordinated major research object and planned standalone paper: a source-grounded research infrastructure for computational bioethics. It arose from systematic SACRE/REai investigation, but SACRE/QCCS is the first mature task family rather than the definition of the resource.

Keep the intended architecture separable:

**resource layer → task layer → evaluation layer.**

The first-pass structural generalization audit is complete in `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`. It found that most current fields form a reusable resource/provenance core, while the strongest SACRE-specific coupling is concentrated in the fixed public/expert/framework pool structure, `pub/exp/fw` aliases, `benchmark_profile`, geometry/cross-source pairing, and `required_aggregation`. Current v1 should remain unchanged; the next architectural step is an explicit `sacre-qccs-v1` task contract plus a read-only equivalence-tested adapter before any generalized schema revision.

This is evidence of an identifiable separation boundary and a non-breaking generalization path, **not** a demonstration that Bioethics Bench is already method-neutral across multiple mature task families.

## Current Bench evidence boundary

The executable Full Corpus currently contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. Records remain `status: draft` and `reviewed_by_human: false`.

Structural validation is not source fidelity. Model-assisted review is not independent human review. Whole-document omission review has examined five families by that method; 29 remain unexamined by that method. Do not extrapolate a corpus-wide rate from that subset.

Independent human source-to-policy review remains a quality/release layer. It is **not a gate on developmental or paper-facing SACRE execution** under the current program architecture. Execution-relevant corpus changes still require SACRE re-pin/reverification and, where applicable, rerun.

## Current manuscript interface

The current standalone Bench research/publication plan is **v3** in Drive:

https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

P2 has completed its v49 submission-composition stage. Current P2 artifacts are:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- Supplementary Information: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit
- preserved maximal v48 master: https://docs.google.com/document/d/12W2-SHZ1CSdbTfQWO1i0nXcCViVR_AiI/edit

Bench support for P2 is therefore no longer a maximal-master drafting task. The current Bench lane is source/review/release work, the explicit task-contract/adapter step following the completed generalization audit, standalone paper development, and later frozen support for P3/P4 study designs. P2 should receive only targeted corrections if new Bench evidence changes a claim materially.

## Handoff rule

Every substantive Bench handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

If an execution-relevant object changes, state explicitly whether SACRE must re-vendor/re-pin and which paper-facing runs are affected.

## Generated review handoff

`docs/full-corpus/review/RESEARCH_HANDOFF.md` is generated by the review tooling and should not be manually edited. It is the precise live answer for review-unit/fingerprint state; the coordination files explain how that state fits the broader program.
