# Bioethics Bench — Program Coordination

This file is the repo-local operating view of Bioethics Bench within the wider **Doing Ethics with AI (DEWA)** research program. It exists so a Bench agent can understand current paper roles, execution boundaries, and cross-repo dependencies without reconstructing them from chat or historical branches.

## Read first

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md` — Bench entry point to the canonical cross-program self-handoff.
2. `docs/COORDINATOR_DIRECTIVE.md` — current Bench priorities.
3. `docs/BRANCH_COORDINATION.md` — current branch roles and change-class rules.
4. `docs/COMPLETION.md` — concise definition of what remains in this lane.
5. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md` — completed first-pass resource/task/evaluation audit.
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md` and `tasks/sacre-qccs-v1/task-contract.json` — explicit current SACRE/QCCS task projection.
7. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` — current drafting surface for manuscript-facing findings.
8. `docs/papers/MANUSCRIPT_WRITEBACK.md` — chronological audit trail.
9. For source review: `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.

Fetch live repo heads and regenerated numeric state before reusing a count, review total, or corpus status.

## Source-of-truth rule

- Bench records, dossiers, generators, validators, manifests, review state, and Bench-owned task specifications govern resource/task truth.
- SACRE / ReflectiveEquilibrium.AI code and run records govern execution behavior and execution evidence.
- Drive governs current manuscript versions, publication sequencing, and confirmatory/human-study authorization.
- Coordination files preserve ownership and next dependencies; they do not override generated state.

## Program architecture

Part I, **Doing Ethics with AI: Practical Ethics Engineering, Product-Led Philosophy, & Computer-Aided Ethics** (Ghose, Singer, & Savulescu, 2026a), introduces **Doing Ethics with AI (DEWA)** as the general paradigm.

The cumulative core sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a **parallel major research object/publication** and part of the Computational Bioethics domain program. It is not merely the test set for REai and is not a conceptual stage inserted between P2 and P3.

## What this repository owns

Bioethics Bench owns:
- source-grounded cases and decision questions;
- candidate positions and source/provenance relationships;
- policy-basis and construction-method declarations;
- concise/detailed companion representations;
- resource lifecycle, versioning, manifests, and release/review state;
- structural validation and corpus-review tooling;
- resource/task abstraction and Bench-owned task contracts;
- the scientific architecture of the standalone resource paper.

The intended architecture has three separable layers:

```text
RESOURCE
cases • decision questions • candidates • sources/provenance • stipulations • representations • versioning
   ↓
TASK
sacre-qccs-v1 first; future scientifically motivated computational-bioethics tasks
   ↓
EVALUATION
models • humans • ensembles • hybrids • repetitions • perturbations • providers/configurations
```

SACRE/QCCS is the first mature task family, not the definition of the resource.

## Current corpus state

Current executable Full Corpus:
- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- all records remain `status: draft` and `reviewed_by_human: false`.

PR #10 has been merged. Do not describe it as a live integration gate.

Structural validation establishes schema/profile/geometry/manifest consistency; it does not establish that every source warrants every represented candidate.

Current source/review boundaries include:
- all direct-policy-evidence candidates have been model-read against their sources;
- all source-informed inference bridges have been checked for whether the bridge holds;
- this remains model-assisted review, not independent human review;
- whole-document omission review has examined five families by that method; **29 remain unexamined**;
- do not extrapolate a corpus-wide omission rate or describe unexamined families as cleared.

## Human review and execution

Independent human source-to-policy review remains a valuable quality/release layer. Under the current program decision, it is **not an execution gate for developmental or paper-facing computational work**.

SACRE may execute the current snapshot with explicit provenance and evidence classification. Later source repairs can trigger reruns; rerunnability is part of the program rather than a failure condition.

This does not authorize confirmatory P3 or human P4 studies. Those require the relevant frozen protocol and authorization.

## Downstream execution state

Current SACRE developmental evidence relevant to Bench includes:
- an 8-family / 16-record geometry-stratified tranche with 216 QCCS calls;
- repeat/stability calibration showing heterogeneous case-level behavior;
- an attempted 68-record corpus-wide pass halted by provider credit exhaustion after 234 calls: 20 records complete, 48 incomplete.

The 20 complete records are valid single-execution developmental evidence. The 48 incomplete records are non-results. These execution outputs are owned by the SACRE lane and must not be written back into Bench records as though they were source/release validation.

## Manuscript relationships

### P1
Bench may inform P1 where source-grounded construction reveals philosophical issues such as source independence, policy/action alignment, natural geometry, provenance, and the distinction between structural validity and source fidelity. P1 should not become a corpus methods paper.

### P2
P2 v49 main + Supplementary Information are complete for this compositional stage and enter author/coauthor submission-facing review. Bench appears because systematic investigation of SACRE/REai required stable, versioned, source-grounded normative objects. Future Bench work should change P2 only when new evidence materially changes a factual or interpretive claim.

Current P2:
- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- supplement: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit

### P3
Bioethics Bench functions as a versioned measurement substrate for computational validation. P3 owns reliability/robustness/model/representation/perturbation/aggregation behavior, not Bench construction or source validation. P3 v9 is already aligned with the stabilized P2 boundary. Its next protocol refinement should freeze **resource snapshot**, **task specification**, and **evaluation/execution condition** separately.

### P4
The same cases/representations can support matched human-model studies, but human recruitment, instructions, ethics, and fielding belong to P4 rather than this repository.

### Standalone Bioethics Bench paper

Current Drive research/publication plan: **v3**  
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper should establish the resource architecture, construction/release methods, source grounding, task abstraction, evaluation protocols, governance, baselines, and extension logic. Broader method-neutrality should be treated as a design/validation question until demonstrated.

## Current Bench research priority — adapter equivalence gate

The first-pass generalization audit is complete:

`docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

The first explicit task specification is also complete for this stage:

- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`

`sacre-qccs-v1` makes explicit the current public/expert/framework role mapping, `pub/exp/fw` aliases, unordered cross-source pair generation, QCCS v1.0.0/`conv+` measurement identity, complete-matrix rule, aggregation compatibility, ranking/provisional Final Policy outputs, and separate resource/task/evaluation provenance.

The task contract is **specified, not yet equivalence-verified**. The next substantive gate is a read-only adapter that reproduces current SACRE vendoring semantics for all 68 canonical records. Equivalence must cover record/representation identity, scenario, candidate ids/text/role/order, profile, geometry, cross-source pair set/count, partner counts, structural asymmetry, required aggregation, and release/hash provenance before any generalized schema or vendor-path refactor.

This is the current non-breaking path. Do not rewrite canonical v1 merely for architectural elegance.

## Cross-repo dependency rule

Classify every Bench change before asking SACRE to act.

- **Execution-relevant:** candidate id/text, scenario/task meaning, profile, geometry, aggregation, executable set, or execution-relevant schema → SACRE must re-vendor/re-pin/reverify and affected paper-facing runs may require rerun.
- **Provenance-only:** citations, provenance summaries, non-execution metadata, content-hash drift with unchanged executable projection → propagate truthfully, no automatic semantic rerun.
- **Documentation/specification-only:** coordination/audit/task-contract text that describes unchanged execution semantics → no SACRE action unless adapter/equivalence work reveals a defect.

## Current Drive program baseline

Current high-level set includes Program Overview v3, Publication Program v18, P1 v61, P2 v49 main + Supplementary Information with preserved v48 master, P3 v9, P4 v3, P5+ v2, Computational Bioethics v3, Bench v3, Alethic-ISM v3, and Evidence & Claim Ledger v1. Exact links live in the canonical SACRE `docs/CURRENT_COORDINATOR_STATUS.md`.

## Handoff requirement

Every substantive Bench handoff states:
**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

The generated `docs/full-corpus/review/RESEARCH_HANDOFF.md` should not be edited manually.
