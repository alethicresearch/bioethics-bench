# Normative Computation — Program Coordination

This file is the repo-local operating view of the wider normative-computation program. It exists so an agent working on Bioethics Bench does not have to reconstruct publication, SACRE, evidence, and validation state from branch history or chat.

## Read this first

Before substantive work, read:

1. Drive: **`00 — PROJECT COORDINATION — Normative Computation — LIVE`** — ID `16CFU3qBbHcK2ZEIQ3478lQbk0KRLVjpdZKVbQP3u8XA`.
2. Drive: **`01 — EXECUTION & EVIDENCE ARCHITECTURE — Tutorial → Featured → Full Corpus → Validation — LIVE`** — ID `1Z6vFFGyxp4ctEz5pudM9xoCmwobgM9LawYocaceagck`.
3. `docs/BRANCH_COORDINATION.md` — branch ownership and release/merge order.
4. `docs/COORDINATOR_DIRECTIVE.md` — current product priorities.
5. `docs/papers/MANUSCRIPT_WRITEBACK.md` — manuscript-facing queue and central-integration status.
6. The current Drive manuscripts: **P1 v58**, **P2 v41**, P3 v5, Publication Program v12.

Current manuscript IDs:
- P1 v58: `1wRq2K8o-6GwJ0Dd2BlX8rA46WIiicSq2`
- P2 v41: `1LgxLnGo6hA7TSf9OwDm4gy88k0NcA42X`

For Bench work also read `docs/papers/PAPER_UPDATE_BRIEF.md`, `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`, `docs/full-corpus/FULL_CORPUS_DISPOSITION_LEDGER.md`, the generated Full Corpus manifest, and the generators/validators that establish any numeric claim used in a handoff or paper writeback.

Fetch exact Git heads and regenerate numeric state at the start/end of every work session. Moving SHAs and ahead/behind counts are session metadata, not durable program prose.

## Source-of-truth rule

No coordination summary overrides repository-derived state.

- **Bench records/manifests/generators/tests** govern corpus content, counts, profiles, provenance, lifecycle, hashes and formal validity.
- **SACRE code/run records** govern application behavior and execution evidence.
- **Drive** governs current manuscript versions, publication sequencing, execution/evidence roles, and explicit study authorization.
- **Repo coordination/writeback files** govern cross-agent workflow and record what must propagate.

Never take a corpus count, release state, geometry distribution, execution status, or branch head from an earlier chat/manuscript when the repository can regenerate it.

## Program architecture

The research progression is:

`normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation`

- **P1** — specification/conceptual paper.
- **P2** — construction/design/deployment/investigation paper.
- **P3** — confirmatory validation paper.
- **Computational Bioethics chapter** — downstream field/genealogy synthesis.

SACRE is the worked normative-computation procedure. Bioethics Bench provides the source-grounded case/candidate substrate needed to execute and eventually validate it on real bioethical decision structures.

## What this repository owns

`alethicresearch/bioethics-bench` owns case research and dossiers; source grounding; candidate-field construction; candidate provenance/inference bridges; natural candidate geometry and executable profiles; record lifecycle; corpus manifests/release state; structural validators/self-tests; and benchmark release gates.

It does **not** own model-performance claims, application-deployment claims, or authorization to execute SACRE studies.

## Canonical source architecture for v1

Canonical SACRE/Full Corpus v1 remains tripartite: public, expert, and framework source classes.

A family is executable in canonical v1 only when at least one defensibly source-grounded, action-distinct candidate can be represented in each of those three pools. Do not fill a missing pool by proxy, relabel evidence to make the geometry work, or admit zero-public/otherwise partial-source profiles merely to increase n.

This is a method-identity constraint, not a preference for a smaller benchmark. P1 v58 specifies a public–expert Step 3 before public–expert–framework completion in Step 4, and current SACRE execution/report semantics preserve those roles. `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md` governs this boundary.

The branch `claude/generalized-source-architecture-track` is a parked future-method track. Its generalized profiles/schema/reconstructed cases are not canonical v1 inputs. Preserve the research insight, but do not merge those semantics or resulting promotions into `author/full-corpus-completion` through the near-term P1/P2 freeze.

## Execution and evidence architecture relevant to Bench

### Featured v1 exploratory layer — planned

Featured v1 is already released and fixed at **20 families / 40 concise+detailed records**. It is the appropriate first released source-grounded corpus for a clean exploratory application sweep.

A one-run-per-record Featured sweep is **exploratory/descriptive execution evidence**, not validation. Its purpose is end-to-end Bench/SACRE execution and descriptive analysis of QCCS distributions, source/candidate relationships, rankings/provisional Final Policies, concise-vs-detailed movement, explanations/charts, and selected interpretive case vignettes.

The Bench records remain the frozen input objects; SACRE owns execution/results. Do not write model outputs back into released Bench records or infer reliability, human agreement, model superiority, benchmark accuracy, or normative correctness from a one-run sweep.

Before any further paid Featured/E0 execution, the SACRE lane must repair/test the current E0 spend guard. The existing Featured/E0 script declares/checks `BENCH_MAX_USD` through `spentUsd`, but at the last direct code check the tracked amount was not incremented, so the advertised ceiling was not a real stop condition.

### Full Corpus geometry-stratified development tranche — completed downstream

SACRE has executed an author-authorized bounded development tranche against the current release-candidate Full Corpus lineage:

- one family from each of the eight current geometries;
- 8 families / 16 concise+detailed executions;
- 216 QCCS calls;
- QCCS v1;
- all result manifests explicitly `development`;
- estimated model cost approximately US$0.63.

This is **SACRE construction/development evidence**, not Bench release validation and not the all-record Full Corpus exploratory census. It demonstrates downstream integration across variable geometry, required Sum/Mean aggregation, complete-matrix execution, provenance, and comparison behavior. P2 v41 now integrates the bounded construction findings.

Do not write these execution outputs back into Bench records or use successful execution as evidence that a candidate field is source-faithful. Bench release status is governed by source/corpus review.

### Full Corpus all-record exploratory census — future

The Full Corpus should **not** be used for the planned all-record exploratory census until independent human source-to-policy fidelity review fixes the release manifest. The current 34/68 release-candidate state is not guaranteed to survive that review unchanged.

After the human gate is complete, SACRE may execute every record in the resulting release once under a separately frozen exploratory configuration. One run per record remains exploratory and does not estimate reliability or validity.

### Confirmatory P3 layer — not begun

P3 must use a separately frozen/preregistered design for repeated runs, cross-model/provider comparisons, perturbations, human comparisons, ranking/Final-Policy robustness, and RE-Iteration/QCS validation. Development and exploratory results may motivate hypotheses but must remain distinct from the confirmatory dataset.

## Current Bench state

### Released Featured v1

Bench `main` contains the released Featured v1 lineage. SACRE current `main` vendors that lineage at Bench commit `b466da3071ba7e0bb8f80a7b66fad14b2657c913`.

Featured v1 is 20 families / 40 records and is a separate lineage from Full Corpus. Released does not mean validated; the records contain no model/human evaluation results.

### Full Corpus completion

The live Full Corpus work is PR #10 on `author/full-corpus-completion` targeting `research/full-corpus-v1`.

Current substantive repository-derived state remains:

- **34 executable families**
- **68 matched concise/detailed records**
- **all 200 researched families explicitly dispositioned**
- manifest status `release-candidate`
- Full Corpus records `status: draft`
- `reviewed_by_human: false`
- no human-reviewed Full Corpus release
- no paper-facing all-record Full Corpus exploratory census or confirmatory validation.

The executable count is an outcome of the evidence/disposition process, not a target. An older ancestor branch reported 17 executable families; do not use that count as current state.

## Release gate and evidence boundary

The remaining release-critical task is **independent human source-to-policy fidelity review** across the canonical executable Full Corpus.

A green validator can establish schema conformance, hashes, profile registration, candidate IDs/pool geometry, companion structure, required aggregation, and dossier/manifest consistency. It cannot establish that a source genuinely warrants the Policy candidate attributed to it.

The model-generated `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` is internal review/planning material, not independent human review and not manuscript evidence that fidelity has been established.

Apply any repair, demotion, or defensible promotion only on `author/full-corpus-completion`, then regenerate the disposition ledger/manifest. Do not hand-maintain counts.

## Full Corpus scope

The current executable Full Corpus is a bounded substrate, not a representative sample of all bioethics. Current 34-family geometry distribution is `8, 1, 7, 7, 6, 1, 3, 1` across eight registered geometries; `1×2×2`, `2×3×3`, and `1×2×3` are singletons. Domain coverage is clustered, including 10/34 in consent/capacity/refusal and current gaps in animal/One Health, climate/planetary, and biosecurity under the executable architecture.

Regenerate these distributions before reuse after any corpus change. They are scope conditions for exploratory/validation work, not noise to average away.

## Generalized source architecture — held, preserved, not in v1

`SACRE_V1_SOURCE_COMPLETENESS_DECISION.md` resolves the question raised by the generalized-source proposal. Full Corpus v1 remains three-source. The work is preserved and out of v1:

| Repository | Track branch | Contents |
|---|---|---|
| bioethics-bench | `claude/generalized-source-architecture-track` | `schemas/source-schemes.json`, scheme-aware validator, `SOURCE_SCHEME_DESIGN.md`, experimental reconstructed cases |
| sacre-prototype | `claude/generalized-source-architecture-track` | generalized pool partitioning in Step 5/Step 6 and tests |

Neither track is a canonical-v1 merge source.

The proposal did expose a real conceptual error worth preserving. Treating the fixed triple as merely one data shape ignores that SACRE’s procedure itself specifies a public–expert Step-3 state that Step 4 completes into the full cross-source graph. A two-pool object would require an explicit generalization/replacement of Step 3 and associated reporting semantics, not just generic pair partitioning.

### Held-family finding

Eight of the twelve families held in the candidate audits were held solely because no defensible public pool could be populated:

- M022
- M036
- M043
- M049
- M059
- M099
- M148
- M149

Under the decision these stay held and count as evidence about the representational boundary of canonical SACRE v1 rather than a backlog to force into the release. P1 v58 and P2 v41 now preserve the three-source boundary; P2 can use the boundary itself as a construction finding without turning the held cases into executable v1 records.

Two scheme-only validator holes were discovered while exploring the generalized proposal: the asymmetry check and profile-pool comparison each assumed the fixed triple. Under canonical three-source v1 the original code remains correct; any future generalized-source variant must carry the generalized fixes or it could silently bypass the Mean requirement/profile comparison.

## Current SACRE state relevant to Bench

SACRE `main` contains the application/evidence work and the released Featured v1 vendor. Its 53-figure / 101-run / 4-walkthrough package is development/capture evidence, not the planned clean Featured exploratory sweep.

Full Corpus vendor/loader/execution work lives on `claude/bioethics-bench-completion-m0p43e` and remains **unmerged**. The latest directly published/verified branch head at this coordination reconciliation is `000f763ccb38a4aa837167bfc89284ce4e204ed8`, which passes 358 unit tests and 73 web tests, builds successfully, refuses records outside the canonical public/expert/framework source set at load time, and labels the repeated-run artifacts as harness calibration/development evidence.

A Bench-side coordination note previously recorded a local/reconciliation milestone `c7957b5`; that SHA is **not the current published Git branch head** and must not be used as durable cross-repo state. Fetch the live SACRE branch directly before every handoff/merge decision.

Because SACRE `main` has accumulated central coordination/manuscript commits after `000f...`, the integration branch must absorb the latest `main`, resolve only genuine conflicts, rerun the complete unit/web/build verification, and return the exact green head for the PI merge decision. Until it is merged and verified on `main`, Full Corpus loading is an integration-branch capability, not current/default application behavior.

The SACRE integration branch is currently pinned to Bench execution content at `8811c0c7c31232b13c370518f3f1f1f9de5eabbb`. Subsequent Bench commits at the last coordination check were documentation/coordination-only, so execution-relevant input remained equivalent. This equivalence becomes false immediately if any later commit changes records, candidate IDs/text, executable profiles, execution-relevant schema, geometry/aggregation requirements, or the Full Corpus manifest. When that happens, flag SACRE for re-vendoring/re-pinning before merge or paper-facing execution.

## Development repeat/calibration finding — preserve, do not relabel

Limited same-model repeated harness calibration exists downstream in SACRE. The current integration-branch README explicitly labels the repeated records **harness calibration/development evidence**, not the first P3 study. The latest branch commit records that the provisional Final Policy did not reproduce in 5 of 12 record-representations, with instability concentrated in some closely contested/asymmetric cases; this is hypothesis-generating only.

A separate development stability artifact suggests that the gap between the top two candidates relative to run-to-run candidate spread is a useful quantity for interpreting whether a provisional Final Policy is robust enough to summarize. It is appropriate to motivate an explicit margin/spread outcome in P3; it is not appropriate to claim a general reliability rate or validated cutoff from these development repeats.

The earliest repeat attempt had call failures and should not be used as evidence. Only the corrected clean manifests/run sets with complete scores should enter development-level discussion. Preserve this distinction when referencing any repeat artifact.

## Current paper alignment

### P1 v58

Current in Drive. P1 remains the specification paper. It now:

- specifies SACRE as one six-step iterative reflective-equilibrium procedure;
- treats Steps 1–5 as one equilibration cycle and Step 6 as directed revision leading to a fresh full cycle;
- retires the historical baked Tutorial scores;
- leaves explicit Canonical Tutorial execution placeholders;
- makes the current public/expert/framework executability boundary explicit.

Bench should not push corpus counts/results into P1.

### P2 v41

Current in Drive. P2 now:

- describes the Full Corpus as a bounded 34-family/68-record release-candidate substrate;
- distinguishes structural validity from source-to-policy fidelity;
- integrates the geometry-stratified Full Corpus development tranche explicitly as **development evidence**;
- incorporates the construction lesson that candidate margins/run-to-run spread matter when interpreting a provisional winner;
- removes the historical hard-coded Tutorial scores and fixed-paper regression framing;
- aligns RE-Iteration with P1 v58’s unified six-step SACRE;
- distinguishes branch-level Full Corpus integration from current-main deployment;
- leaves Figure 6 as an explicit placeholder for a frozen tranche-linked Compare Runs/provenance view.

Bench manuscript-facing items that were ready have been marked integrated in `docs/papers/MANUSCRIPT_WRITEBACK.md`.

### P3 v5

Confirmatory work has not begun. P3 still requires central status/protocol cleanup and preregistration before execution. Bench-specific dependencies are the final human-reviewed released corpus, explicit geometry/domain/source-architecture scope reporting, and a frozen corpus/version for confirmatory studies.

### Computational Bioethics chapter

Align after P1/P2 freeze to the same six-step specification and eventual Canonical Tutorial outputs; do not carry the old demo numbers or an alternate corpus narrative forward.

## Branch ownership and product/release order

Use `docs/BRANCH_COORDINATION.md` as the durable map and `docs/COORDINATOR_DIRECTIVE.md` as the current priority instruction.

Core rules:

- `author/full-corpus-completion` is the **sole canonical Full Corpus v1 work lane** while PR #10 is active.
- `research/full-corpus-v1` is its base.
- `claude/bioethics-bench-completion-m0p43e` is an alias/handoff lineage, not a second canonical Bench lane.
- `claude/generalized-source-architecture-track` is parked future research, not a v1 merge source.
- export/audited/reconstruction/review/archive branches are historical unless explicitly reactivated.

Product/release order:

1. Keep PR #10 green and source-derived.
2. Complete independent human source-to-policy review.
3. Apply repairs/demotions/promotions and regenerate the ledger/manifest.
4. Fix/release Full Corpus v1 only after the human gate.
5. Notify SACRE of every execution-relevant corpus change and coordinate the released pin.
6. Only then permit the all-record Full Corpus exploratory census.
7. Later freeze the P3 confirmatory substrate.

The SACRE lane separately owns the near-term integration merge, Canonical Tutorial execution, P2 Figure 6 artifact, E0 spend-guard repair, and Featured exploratory sweep. Bench should preserve input identity and notify the SACRE lane of relevant changes, not duplicate that execution work here.

## Keeping the lanes aligned

Git is the primary agent working/writing interface.

| Surface | Primary role |
|---|---|
| `docs/PROGRAM_COORDINATION.md` | lane-owned program/technical state |
| `docs/BRANCH_COORDINATION.md` | branch ownership, merge/release order |
| `docs/COORDINATOR_DIRECTIVE.md` | current product priorities |
| `docs/papers/MANUSCRIPT_WRITEBACK.md` | paper-facing claims/assets and integration status |
| Drive `00 — PROJECT COORDINATION … LIVE` | publication sequencing, current manuscripts, cross-lane decisions |
| Drive `01 — EXECUTION & EVIDENCE ARCHITECTURE … LIVE` | evidence-layer definitions and execution order |
| `docs/DRIVE_COORDINATION_DELTA.md` | staged Drive changes when an agent cannot edit the Doc body |

Put a fact in the repo of the lane that owns it and cross-reference rather than unnecessarily duplicating it. When a cross-project fact changes, update the writeback/branch map and stage a Drive delta if needed. The central coordinator applies ready writebacks to the manuscript binaries and records the manuscript version in the queue.

## When this file must be updated

Update this file in the same change, or leave an explicit handoff requiring an update, when work changes executable family/record counts, dispositions, profile/geometry set, release/lifecycle status, provenance/inference semantics, source-to-policy review state, manifest/pin/hash equivalence, manuscript-relevant facts, or assumptions required by SACRE exploratory/validation designs.

Distinguish researched, structurally valid, executable, human-reviewed, released, run, explored, and validated states.

## Required handoff

Every substantive handoff must state:

**Branch** — exact active branch.

**Merge target** — branch/release target.

**Changed** — cases, records, dossiers, profiles, validators, manifests, or review decisions changed.

**Verified** — commands/tests/generated ledgers/manifests that establish state.

**Product/paper impact** — effect on P1, P2, P3, handbook, SACRE integration, Bench release, or validation design.

**Evidence status** — construction/internal review, independent human review, pedagogical execution, exploratory/descriptive, confirmatory, or no empirical evidence.

**Writeback status** — proposed / ready-for-central-integration / integrated.

**Cross-repo dependency** — whether SACRE must re-pin/re-vendor or another lane must act.

**Next dependency** — what must happen next and what must be true before it starts.

If a cross-project architecture decision is required, stop at the boundary and record alternatives/evidence in Git rather than silently changing the source scheme, corpus lineage, method, or release standard.

## Decision rule

Bench quality and release confidence matter more than maximizing executable count. Featured v1 can support near-term exploratory application evidence; Full Corpus should become a stable human-reviewed substrate before its corpus-wide exploratory census; and confirmatory validation remains a separate planned stage. The program should optimize for closure and progressively stronger evidence, not horizontal expansion.