# Normative Computation — Program Coordination

This file is the repo-local operating view of the wider normative computation program. It exists so an agent working on Bioethics Bench does not have to reconstruct the publication, SACRE, evidence, and validation state from branch history or chat.

## Read this first

Before substantive work, read the Drive document **`00 — PROJECT COORDINATION — Normative Computation — LIVE`** (Google Doc ID `16CFU3qBbHcK2ZEIQ3478lQbk0KRLVjpdZKVbQP3u8XA`) in the `00 — START HERE and Program` folder.

Also check the current Drive manuscripts:

- P1 v56 — *Doing Ethics with AI*
- P2 v40 — *Building a Normative Computation Infrastructure*
- P3 v5 — *Validating Normative Computation*
- Publication Program v12

For Bench work, also read `docs/papers/PAPER_UPDATE_BRIEF.md`, `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`, `docs/full-corpus/FULL_CORPUS_DISPOSITION_LEDGER.md`, the current Full Corpus manifest, and the generators/validators that establish any numeric claim needed for the task.

## Source-of-truth rule

No coordination summary overrides repository-derived state.

- **Bench records/manifests/generators/tests** govern corpus counts, profiles, provenance, lifecycle, hashes and formal validity.
- **SACRE code/run records** govern current application behavior and execution evidence.
- **Drive** governs publication sequencing, manuscript claims, and explicit authorization to run development or confirmatory studies.
- This file is a cross-project map. If it disagrees with generated state or Drive, update it rather than using it to override them.

Never take a corpus count, release state, geometry distribution, or evaluation status from an earlier chat or manuscript when the repository can regenerate it.

## What the program is doing

The program follows one research object through successive states:

`normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation`

SACRE is the worked normative-computation procedure. Bioethics Bench provides the source-grounded case and candidate layer needed to execute and eventually validate that procedure on real bioethical decision structures.

P1 is primarily specification. P2 is construction/design/deployment/investigation. P3 is confirmatory validation. Bench construction and review may inform all three, but Bench development records must not be treated as validation results.

## What this repository owns

`alethicresearch/bioethics-bench` owns:

- case research and dossiers
- source grounding
- candidate-field construction
- candidate-level provenance and inference bridges
- natural candidate geometry / executable profiles
- record lifecycle
- corpus manifests and release state
- structural validators and self-tests
- benchmark release gates

It does **not** own model-performance claims, application-deployment claims, or authorization to execute SACRE studies.

## Current Bench state

### Released Featured v1

Bench `main` contains the released Featured v1 lineage. SACRE current `main` vendors that released lineage at Bench commit:

`b466da3071ba7e0bb8f80a7b66fad14b2657c913`

Featured v1 is 20 families / 40 records. It is a separate lineage from the Full Corpus.

### Full Corpus completion

The live Full Corpus work is open PR #10:

- head: `author/full-corpus-completion`
- head at coordination review: `6e219940dbd0307c8bd13153c3c136bd4e310777`
- base: `research/full-corpus-v1`

Current verified PR-head state:

- 34 executable families
- 68 matched concise/detailed records
- all 200 researched families explicitly dispositioned
- manifest status `release-candidate`
- every Full Corpus record remains `status: draft`
- every Full Corpus record remains `reviewed_by_human: false`
- no Full Corpus evaluation has been run

The executable count is an outcome of the disposition/audit process, not a target.

### Older 17-family branch is not current

`claude/normative-computation-research-f6zfep` reported 17 executable families after an earlier model review. It is an ancestor of the current completion branch. At coordination review, `author/full-corpus-completion` was 73 commits ahead of it and 0 behind.

Do **not** use 17 as current project state.

## Release gate and evidence boundary

The remaining release gate is **independent human source-to-policy fidelity review** across the executable Full Corpus.

A green validator can establish, among other things:

- schema conformance
- hashes
- profile registration
- candidate ids and pool geometry
- companion structure
- required aggregation
- dossier/manifest consistency

It cannot establish that a source genuinely warrants the policy candidate attributed to it.

The model-generated `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` is useful internal review/planning material. It is not independent human review and must not be cited in a manuscript as evidence that fidelity has been established.

## Full Corpus scope

The executable Full Corpus is a bounded validation substrate, not yet a representative sample of all bioethics.

Current 34-family geometry counts are:

`8, 1, 7, 7, 6, 1, 3, 1`

across the eight registered Full Corpus geometries. The `1×2×2`, `2×3×3`, and `1×2×3` geometries are each represented by one family.

Domain coverage is clustered. Consent/capacity/refusal contributes 10 of 34 executable families. Animal/One Health, climate/planetary and biosecurity are empty in the current executable subset because the present three-pool architecture cannot represent nonhuman affected interests without a proxy. These are P3 scope conditions, not details to average away.

Regenerate distributions from repository state before using them after any corpus change.

## Current SACRE state relevant to Bench

Current SACRE `main` has the application/evidence work merged and currently vendors **Featured v1 only**.

Current SACRE paper-evidence package:

- 53 figures
- 101 development run records
- 4 walkthroughs

Those runs demonstrate reachable application states and run-to-figure provenance. They are not a model-comparison or validation study.

Full Corpus vendor/loader/execution machinery currently lives on SACRE branch:

`claude/bioethics-bench-completion-m0p43e`

At coordination review its head was `e442c19c60deac09355e84d59f1bef0cad721e84`; it was 6 commits ahead of its merge base and 79 commits behind current SACRE `main`. It must be reconciled with current main before Full Corpus execution is treated as a current application capability.

The branch contains a dedicated Full Corpus harness whose default dry run selects one family per current geometry: 8 families, 16 representations, 216 QCCS calls, 14 of 16 executions requiring Mean. That is **development machinery, not authorization and not a result**.

## Current paper alignment

P1 v56 should remain primarily specification; do not push corpus counts or run statistics into it unless a genuine conceptual requirement changes.

P2 v40 is the construction/deployment paper. Its Full Corpus quantitative/evaluation placeholder remains unfilled because no Full Corpus evaluation has been run.

P3 v5 is the validation outline. Confirmatory model and human studies have not begun and must be frozen/pre-specified before execution.

There is one current cross-repo discrepancy to resolve before P2 freeze: P2 v40 / Program v12 describe the Full Corpus as vendored/loadable in the deployed application, while current SACRE `main` vendors only Featured v1. Either the Full Corpus integration must be reconciled/merged and verified on current main, or the paper claim must be softened to an integration branch/environment.

## Evidence boundaries

1. Featured v1 and Full Corpus are separate lineages. Never pool their counts or results.
2. No Full Corpus evaluation has been run.
3. A harness, dry run, loader, schema test, or application route is capability, not empirical evidence.
4. Machine validity is not source-to-policy fidelity.
5. Development evidence must not be relabeled as confirmatory validation.
6. E1–E4, confirmatory P3 execution, human/Prolific fielding and paid fine-tuning remain unauthorized until explicitly approved.
7. Changes to candidate counts, geometry, release state or provenance can propagate into P2/P3 and the Drive Program; flag them explicitly.

## Immediate Bench priorities

1. Keep PR #10 internally green and derive all counts from repository state.
2. Complete independent human source-to-policy review across the executable families.
3. Record demotions, repairs, and promotions in the relevant dossiers and regenerate the disposition ledger/manifest; do not hand-maintain counts.
4. Only move the Full Corpus toward release after the human review gate is satisfied.
5. Coordinate any release/pin change with SACRE so its Full Corpus vendor uses an exact Bench commit/hash and current profiles.
6. Do not grow the executable corpus merely to improve n. Promotion requires additional evidence sufficient for an action-aligned candidate field.
7. Preserve the current structural finding: source architecture limits are legitimate reasons for a domain/family to remain non-executable.

## When this file must be updated

Update this file in the same change, or leave an explicit handoff requiring an update, when work changes any cross-project fact such as:

- executable family/record count
- disposition totals
- profile/geometry set or distribution
- release/lifecycle status
- provenance or inference semantics
- source-to-policy review state
- manifest/pin/hash
- a fact currently stated by P1/P2/P3/Program
- assumptions required by SACRE integration or validation design

Do not update manuscript claims merely because a record was constructed. Distinguish researched, structurally valid, executable, reviewed, released, run, and validated states.

## Agent handoff format

Every substantive handoff should include:

**Changed** — cases, records, dossiers, profiles, validators, manifests or review decisions changed.

**Verified** — commands/tests/generated ledgers/manifests that establish the state.

**Program impact** — effect on P1, P2, P3, handbook, SACRE integration, Bench release or validation design.

**Evidence status** — construction/internal review, independent human review, development evidence, confirmatory evidence, or no empirical evidence.

**Drive update** — whether the Program, current manuscripts or Drive coordination document must change.

**Next dependency** — what should happen next and what must be true before it starts.

## Decision rule

The program should now optimize for alignment and validation rather than horizontal expansion. Bench quality and release confidence matter more than maximizing the executable count. The next major scientific step is to provide a stable, human-reviewed substrate for a rigorously frozen SACRE validation design.
