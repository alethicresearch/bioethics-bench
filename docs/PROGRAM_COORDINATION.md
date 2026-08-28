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

## Bench-lane state — 2026-08-28, after the source-completeness decision

### Generalized source architecture — held, preserved, not in v1

`SACRE_V1_SOURCE_COMPLETENESS_DECISION.md` resolves the question this lane raised. Full Corpus v1
remains three-source. The work is preserved and out of v1:

| Repository | Track branch | Contents |
|---|---|---|
| bioethics-bench | `claude/generalized-source-architecture-track` | `schemas/source-schemes.json`, scheme-aware validator, `SOURCE_SCHEME_DESIGN.md`, M099 as a two-pool case |
| sacre-prototype | `claude/generalized-source-architecture-track` | generic pool partitioning in step5/step6 and its tests |

Neither is merged into v1. The v1 Bench branch is back at the PR head: **34 executable families / 68
records**, no scheme artefacts, `npm run validate` green, 36/36 guards. The SACRE integration branch
has the partitioning reverted and holds at the three-source object.

**The decision corrected a real error in the proposal, and it is worth recording precisely.** The
proposal treated the fixed triple as an artefact of one experimental design, on the evidence that
`step5` and `step6` used it only to partition candidates. That is true of those two functions and
false of the procedure. P1 specifies a public–expert Step-3 state that Step 4 completes into the
full cross-source graph, and `buildStep5Aggregation` reports that Step-3 ranking. Under a two-pool
record the generalized partitioning would still have emitted a `step3_publicExpert` entry computed
over whichever pools occupied those argument positions — a labelled result no longer meaning what
its name says. Generic partitioning is necessary for a missing-source variant and nowhere near
sufficient, which is what item 3 of the future-extension list already says.

**What survives as a finding rather than a change.** 8 of the 12 families held by the candidate
audits were held solely because no defensible public pool could be populated: M022, M036, M043,
M049, M059, M099, M148, M149. Under the decision these stay held, and they are evidence about the
representational boundary of canonical SACRE v1 rather than a backlog. P2 should report this as a
construction finding.

**Two validator holes were found while implementing the proposal**, and both are scheme-only: the
asymmetry check and the profile pool comparison each built from the fixed triple, so a non-default
pool set would have bypassed the Mean requirement and the profile comparison. Under three-source v1
the original code is correct and the fixes are not needed. They are on the track branch and must be
carried into any future generalized variant, where their absence would be silent.

### SACRE integration reconciled — coordination milestone 2

SACRE `main` merged into the integration branch; the two coexist. Verified at `c7957b5`: 356 unit
tests, 73 web tests, 44 Full Corpus tests, clean build, harness intact. Vendored pin now Bench
`8811c0c` (current PR head), content hash unchanged at `f1de242c`.

This does **not** make Full Corpus loading a current-`main` capability — the branch is not merged to
`main`. The P2 v40 / Program v12 claim still needs either that merge or a softening to "integration
branch".

### Development tranche — run, authorized, development evidence only

Author-authorized in session. 8 families one per geometry, 16 executions, 216 QCCS calls, all
complete and verified on recomputation, estimated US$0.63. Plus repeated execution on three
families at five repetitions and a control varying aggregation mode.

Finding for P3 design: **the gap between the top two candidates relative to run-to-run spread
predicts whether a Final Policy is reproducible.** M004 at a ratio near 2.3 returns the same Final
Policy in all five runs; M094 at 0.03–0.20 returns a different ranking every run and up to four
different Final Policies. A single run is not a reliable output for a closely contested case, and
the tranche's apparent concise/detailed differences are not separable from run-to-run variation
without repetition. A hypothesis that Sum aggregation caused the instability was refuted by a
control under Mean: the ratio is invariant because Mean rescales gap and noise together.

Numbers: `docs/bench-runs/stability-2026-08-28.json` on the SACRE integration branch. This is not
validation and must not be relabelled as such.

A spend-ceiling defect was found and fixed in the Full Corpus harness: `spentUsd` was declared,
checked before every call, and never incremented. **`scripts/execute-bench.mjs` still has it**, so
E0 ran with no working cap. Worth fixing before any further authorized spend.

### Note on the Drive coordination document

It records SACRE `main` at `1b2a5db`; actual `origin/main` at this update is `99b484b`. It also
predates the Canonical Tutorial Execution Plan landing on SACRE main. Repository state governs.

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
