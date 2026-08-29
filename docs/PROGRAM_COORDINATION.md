# Bioethics Bench — Program Coordination

This file is the repo-local operating view of Bioethics Bench within the wider **Doing Ethics with AI (DEWA)** research program. It exists so a Bench agent can understand current paper roles, execution boundaries, and cross-repo dependencies without reconstructing them from chat or historical branches.

## Read first

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md` — Bench entry point to the canonical cross-program self-handoff.
2. `docs/COORDINATOR_DIRECTIVE.md` — current Bench priorities.
3. `docs/BRANCH_COORDINATION.md` — current branch roles and change-class rules.
4. `docs/COMPLETION.md` — concise definition of what remains in this lane.
5. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` — current drafting surface for manuscript-facing findings.
6. `docs/papers/MANUSCRIPT_WRITEBACK.md` — chronological audit trail.
7. For source review: `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.

Fetch live repo heads and regenerated numeric state before reusing a count, review total, or corpus status.

## Source-of-truth rule

- Bench records, dossiers, generators, validators, manifests, and review state govern corpus truth.
- SACRE / ReflectiveEquilibrium.AI code and run records govern execution behavior and execution evidence.
- Drive governs current manuscript versions, publication sequencing, and confirmatory/human-study authorization.
- Coordination files preserve ownership and next dependencies; they do not override generated state.

## Program architecture

Part I, **Doing Ethics with AI: Practical Ethics Engineering, Product-Led Philosophy, & Computer-Aided Ethics** (Ghose, Rasaee, Singer, & Savulescu, 2026a), introduces **Doing Ethics with AI (DEWA)** as the general paradigm.

The cumulative core sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a **parallel major research object/publication** and part of the Computational Bioethics domain program. It is not merely the test set for REai and is not a conceptual stage inserted between P2 and P3.

## What this repository owns

Bioethics Bench owns:
- source-grounded cases and decision questions;
- candidate positions and source/provenance relationships;
- policy-basis and construction-method declarations;
- concise/detailed companion representations;
- natural candidate geometry and aggregation requirements;
- lifecycle, versioning, manifests, and release/review state;
- structural validation and corpus-review tooling;
- the scientific architecture of the standalone resource paper.

The intended resource architecture has three separable layers:

```text
RESOURCE
cases • decision questions • candidates • sources/provenance • stipulations • representations • versioning
   ↓
TASK
SACRE/QCCS first; future source-grounded identification, explanation, disagreement, retrieval, framework, and other tasks
   ↓
EVALUATION
models • humans • ensembles • hybrids • future computational-bioethics methods
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
- whole-document omission review has found findings in five of five families examined by that method; 29 families remain unexamined by that method;
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

P2 is the immediate program priority. Bench appears because systematic investigation of SACRE/REai required stable, versioned, source-grounded normative objects. P2 may explain the Bench architecture and bounded developmental execution insofar as they show what building a research instrument required and revealed.

P2 must remain self-contained and centered on SACRE→REai construction; the standalone Bench paper owns the full resource contribution.

### P3

Bioethics Bench functions as a versioned measurement substrate for computational validation. P3 owns reliability/robustness/model/representation/perturbation/aggregation behavior, not Bench construction or source validation.

### P4

The same cases/representations can support matched human-model studies, but human recruitment, instructions, ethics, and fielding belong to P4 rather than this repository.

### Standalone Bioethics Bench paper

Current Drive research/publication plan: **v3**  
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper should establish the resource architecture, construction/release methods, source grounding, task abstraction, evaluation protocols, governance, baselines, and extension logic. Broader method-neutrality should be treated as a design direction until demonstrated.

## Current Bench research priority — generalization audit

Alongside ongoing source/review work, audit the schema and executable records for accidental SACRE coupling. Classify fields into:

1. **intrinsic resource fields** — genuinely part of the computational-bioethics research object;
2. **generic task/evaluation fields** — reusable across methods;
3. **SACRE-specific execution fields** — better represented in a task specification/adapter layer.

The purpose is to protect the intended breadth of Bioethics Bench without destabilizing the current v1 executable path merely for architectural elegance.

## Cross-repo dependency rule

Classify every Bench change before asking SACRE to act.

- **Execution-relevant:** candidate id/text, scenario/task meaning, profile, geometry, aggregation, executable set, or execution-relevant schema → SACRE must re-vendor/re-pin/reverify and affected paper-facing runs may require rerun.
- **Provenance-only:** citations, provenance summaries, non-execution metadata, content-hash drift with unchanged executable projection → propagate truthfully, no automatic semantic rerun.
- **Documentation-only:** no SACRE action unless the finding exposes an execution defect.

## Current Drive program baseline

Current high-level set includes Program Overview v3, Publication Program v18, P1 v61, P2 v47, P3 v9, P4 v3, P5+ v2, Computational Bioethics v3, Bench v3, and Alethic-ISM v3. Exact links live in the canonical SACRE `docs/CURRENT_COORDINATOR_STATUS.md`.

## Handoff requirement

Every substantive Bench handoff states:
**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

The generated `docs/full-corpus/review/RESEARCH_HANDOFF.md` should not be edited manually.
