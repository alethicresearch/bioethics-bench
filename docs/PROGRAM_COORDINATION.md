# Normative Computation — Program Coordination

This file is the repo-local operating view of the wider normative computation program. It exists so an agent working on Bioethics Bench does not have to reconstruct the publication, SACRE, evidence, and validation state from branch history or chat.

## Read this first

Before substantive work, read both live Drive documents in `00 — START HERE & Program`:

1. **`00 — PROJECT COORDINATION — Normative Computation — LIVE`** — Google Doc ID `16CFU3qBbHcK2ZEIQ3478lQbk0KRLVjpdZKVbQP3u8XA`.
2. **`01 — EXECUTION & EVIDENCE ARCHITECTURE — Tutorial → Featured → Full Corpus → Validation — LIVE`** — Google Doc ID `1Z6vFFGyxp4ctEz5pudM9xoCmwobgM9LawYocaceagck`.

Also check current P1 v56, P2 v40, P3 v5 and Publication Program v12 in Drive. For Bench work, read `docs/papers/PAPER_UPDATE_BRIEF.md`, `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`, `docs/full-corpus/FULL_CORPUS_DISPOSITION_LEDGER.md`, the current Full Corpus manifest, and the generators/validators that establish any numeric claim needed for the task.

## Source-of-truth rule

No coordination summary overrides repository-derived state.

- **Bench records/manifests/generators/tests** govern corpus counts, profiles, provenance, lifecycle, hashes and formal validity.
- **SACRE code/run records** govern application behavior and execution evidence.
- **Drive** governs publication sequencing, manuscript claims, execution/evidence roles, and explicit authorization of studies.
- These coordination documents are the cross-project map. If they disagree with generated state, regenerate and correct them.

Never take a corpus count, release state, geometry distribution, or evaluation status from an earlier chat or manuscript when the repository can regenerate it.

## What the program is doing

The program follows one research object through successive states:

`normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation`

SACRE is the worked normative-computation procedure. Bioethics Bench provides the source-grounded case/candidate substrate needed to execute and eventually validate it on real bioethical decision structures.

P1 is specification. P2 is construction/design/deployment/investigation. P3 is confirmatory validation. Bench construction/review may inform all three, but Bench development records and one-off executions are not validation results.

## What this repository owns

`alethicresearch/bioethics-bench` owns case research and dossiers; source grounding; candidate-field construction; candidate provenance/inference bridges; natural candidate geometry and executable profiles; record lifecycle; corpus manifests/release state; structural validators/self-tests; and benchmark release gates.

It does not own model-performance claims, application-deployment claims, or authorization to execute SACRE studies.

## Execution and evidence architecture relevant to Bench

### Featured v1 exploratory layer

Featured v1 is already released and fixed at **20 families / 40 concise+detailed records**. It is therefore the appropriate first real source-grounded corpus for a clean exploratory application sweep.

A one-run-per-record Featured sweep should be treated as **exploratory/descriptive execution evidence**, not validation. Its purpose is to demonstrate end-to-end Bench/SACRE integration and expose analyzable patterns: execution completeness, QCCS distributions, source/candidate relationships, rankings/provisional Final Policies, concise-vs-detailed movement, explanations/charts, and selected interpretive case vignettes.

The Bench records remain the input objects; SACRE owns execution and results. Do not write execution outputs back into released Bench records. Do not infer reliability, human agreement, model superiority, benchmark accuracy or normative correctness from a one-run exploratory sweep.

### Full Corpus exploratory layer

The Full Corpus should **not** be used for the planned all-record exploratory census until independent human source-to-policy fidelity review fixes the release manifest. The current 34/68 release-candidate state is not guaranteed to survive that review unchanged.

After the human gate is complete, SACRE may execute every record in the resulting release once under a frozen exploratory configuration. That census can map geometry, representation, source-pair and candidate-field behavior and help finalize P3 hypotheses. One run per record remains exploratory and does not estimate reliability or validity.

### Confirmatory P3 layer

P3 must use a separately frozen/preregistered design for repeated runs, cross-model/provider comparisons, perturbations, human comparisons, ranking/Final-Policy robustness and RE-Iteration/QCS validation. Exploratory Featured/Full-Corpus executions may generate hypotheses but must remain distinct from the confirmatory dataset.

## Current Bench state

### Released Featured v1

Bench `main` contains the released Featured v1 lineage. SACRE current `main` vendors that lineage at Bench commit `b466da3071ba7e0bb8f80a7b66fad14b2657c913`.

Featured v1 is 20 families / 40 records and is a separate lineage from the Full Corpus. Released does not mean validated; the records contain no evaluation results.

### Full Corpus completion

The live Full Corpus work is open PR #10 on `author/full-corpus-completion` targeting `research/full-corpus-v1`.

Current substantive repository-derived state remains:

- 34 executable families
- 68 matched concise/detailed records
- all 200 researched families explicitly dispositioned
- manifest status `release-candidate`
- Full Corpus records `status: draft`
- Full Corpus records `reviewed_by_human: false`
- no paper-facing Full Corpus exploratory census or confirmatory validation has been run

The executable count is an outcome of the evidence/disposition process, not a target.

An older ancestor branch reported 17 executable families after an earlier model review. Do not use 17 as current state.

## Release gate and evidence boundary

The remaining release gate is **independent human source-to-policy fidelity review** across the executable Full Corpus.

A green validator can establish schema conformance, hashes, profile registration, candidate ids/pool geometry, companion structure, required aggregation, and dossier/manifest consistency. It cannot establish that a source genuinely warrants the policy candidate attributed to it.

The model-generated `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` is internal review/planning material, not independent human review and not manuscript evidence that fidelity has been established.

## Full Corpus scope

The current executable Full Corpus is a bounded substrate, not a representative sample of all bioethics. Current 34-family geometry distribution is `8, 1, 7, 7, 6, 1, 3, 1` across eight registered geometries; the `1×2×2`, `2×3×3`, and `1×2×3` geometries are singletons. Domain coverage is clustered, with consent/capacity/refusal contributing 10 of 34 and animal/One Health, climate/planetary and biosecurity empty under the present executable architecture.

Regenerate these distributions before reuse after any corpus change. They are scope conditions for exploratory/validation work, not noise to average away.

## Current SACRE state relevant to Bench

SACRE `main` contains the application/evidence work and the released Featured v1 vendor. Its existing 53-figure / 101-run / 4-walkthrough evidence package is development/capture evidence, not the planned clean Featured exploratory sweep.

Full Corpus vendor/loader/execution work lives on `claude/bioethics-bench-completion-m0p43e`. That branch has now been reconciled with current SACRE main. At `ef0becd82e3ccc9829f6605fb17b96cb8d0781d1`, 359 unit tests and 73 web tests pass, the build succeeds, and the Full Corpus harness still exercises all eight current geometries. It pins the current Bench PR #10 state.

Reconciliation is not deployment: until reviewed/merged, Full Corpus loading should not be described as a current SACRE-main capability.

## Current paper alignment

P1 v56 should remain primarily specification. The paper’s constructed county-health tutorial numbers are being superseded by a planned canonical clean tutorial execution; this does not change Bench content.

P2 v40 is the construction/deployment paper. Its near-term empirical/descriptive layer should use the canonical tutorial execution and then a separately frozen Featured v1 exploratory sweep. The Full Corpus exploratory census is downstream of the human release gate and should not delay near-term P1/P2 submission.

P3 v5 is the validation outline. Confirmatory model and human studies have not begun and must be pre-specified/frozen before execution.

## Evidence boundaries

1. Featured v1 and Full Corpus are separate lineages. Never pool their counts/results.
2. A Bench record being released or structurally valid does not make a downstream model execution validated.
3. A one-run-per-record Featured or Full-Corpus sweep is exploratory/descriptive, not reliability or validity evidence.
4. A harness, dry run, loader or schema test is capability, not empirical evidence.
5. Machine validity is not source-to-policy fidelity.
6. Development evidence must not be relabeled as confirmatory validation.
7. Changes to candidate counts, geometry, release state or provenance can propagate into P2/P3 and the Drive Program; flag them explicitly.

## Immediate Bench priorities

1. Keep PR #10 internally green and derive all counts from repository state.
2. Complete independent human source-to-policy review across the executable families.
3. Record demotions, repairs and promotions in the relevant dossiers and regenerate the disposition ledger/manifest; do not hand-maintain counts.
4. Only move the Full Corpus toward release after the human review gate is satisfied.
5. Coordinate the resulting release/pin with SACRE before any Full Corpus exploratory census.
6. Featured v1 can support the near-term clean exploratory execution layer without waiting for Full Corpus review; Bench should preserve its frozen input identity while SACRE owns run artifacts.
7. Do not grow the executable corpus merely to improve n. Promotion requires sufficient action-aligned evidence.

## When this file must be updated

Update this file in the same change, or leave an explicit handoff requiring an update, when work changes executable family/record counts, dispositions, profile/geometry set, release/lifecycle status, provenance/inference semantics, source-to-policy review state, manifest/pin/hash, manuscript-relevant facts, or assumptions required by SACRE exploratory/validation designs.

Distinguish researched, structurally valid, executable, human-reviewed, released, run, explored and validated states.

## Agent handoff format

Every substantive handoff should include:

**Changed** — cases, records, dossiers, profiles, validators, manifests or review decisions changed.

**Verified** — commands/tests/generated ledgers/manifests that establish the state.

**Program impact** — effect on P1, P2, P3, handbook, SACRE integration, Bench release or validation design.

**Evidence status** — construction/internal review, independent human review, exploratory/descriptive execution, confirmatory evidence, or no empirical evidence.

**Drive update** — whether the Program, current manuscripts or live coordination documents must change.

**Next dependency** — what should happen next and what must be true before it starts.

## Decision rule

Bench quality and release confidence matter more than maximizing the executable count. Featured v1 can support near-term exploratory application evidence; Full Corpus should become a stable human-reviewed substrate before its corpus-wide exploratory census; and confirmatory validation remains a separate planned stage.
