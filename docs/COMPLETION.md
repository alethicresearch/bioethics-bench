# What Completing Bioethics Bench Means

**Read this first, then go to the surface it points to.**

Bioethics Bench is a source-grounded research infrastructure for computational bioethics within the broader **Doing Ethics with AI (DEWA)** program. Its first mature executable task family is SACRE/QCCS, but the resource is intended to support broader computational-bioethics research through separable resource, task, and evaluation layers.

## Where this fits in the wider program

The core DEWA suite is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a coordinated major resource/publication, not an extra numbered stage and not a prerequisite between P2 and P3.

P2 v49 main + Supplementary Information are complete for this compositional stage. The current Bench priorities are **source/review/release maturation, implementing the non-breaking task-contract/adapter boundary identified by the completed first-pass generalization audit, and the standalone resource paper**. P2 receives only targeted factual corrections if new Bench evidence materially changes an existing claim.

## Current Bench state

The executable Full Corpus currently contains:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**.

PR #10 is merged. All current records remain `status: draft` and `reviewed_by_human: false`.

Structural validity is not source fidelity. Model-assisted source checks are not independent human review.

## Generalization audit state

The first-pass structural audit is complete:

`docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

Its central finding is that most current fields belong to a reusable resource/provenance and generic evaluation/governance core. The strongest SACRE/QCCS coupling is concentrated in the fixed public/expert/framework pool structure, `pub/exp/fw` IDs, `benchmark_profile`, QCCS geometry/cross-source pairing, and `required_aggregation`.

This supports a **non-breaking resource → task → evaluation architecture**. It does not establish empirical method-neutrality. Current v1 remains canonical and unchanged; the next architectural step is an explicit `sacre-qccs-v1` task contract plus a read-only equivalence-tested adapter.

## What “complete for the current stage” means

For the current developmental/publication stage, Bench is complete enough when:

1. the executable corpus remains structurally valid and versioned;
2. execution-relevant changes are clearly classified and propagated to SACRE;
3. source/review findings are recorded truthfully without being misrepresented as independent human review;
4. the standalone resource paper has a defensible architecture and evidence plan;
5. the completed generalization audit is translated into an explicit non-breaking task-contract/adapter boundary rather than a disruptive v1 rewrite;
6. P2 can use Bench accurately as the resource that made systematic investigation possible without absorbing the full standalone resource contribution.

Independent human source-to-policy review remains important for a stronger release/quality claim, but it is **not a gate on developmental or paper-facing SACRE execution**.

## What remains in the Bench lane

### 1. Source/review work

Continue the current deep-research review process. The live review surfaces are:

- `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` — what remains to be checked and how;
- generated `docs/full-corpus/review/RESEARCH_HANDOFF.md` — current review units/fingerprints;
- `docs/full-corpus/review/research-tasks/README.md` — task index;
- `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` — manuscript-facing findings;
- `docs/papers/MANUSCRIPT_WRITEBACK.md` — chronological audit trail.

Whole-document omission review has examined five families by that method; 29 remain unexamined by that method. Do not extrapolate a corpus-wide rate.

### 2. Task-contract/adapter implementation

Specify `sacre-qccs-v1` explicitly, then build a read-only projection from the current Bench resource objects into the exact current SACRE execution contract. Add equivalence tests before any generalized representation is allowed to replace canonical v1 records.

### 3. Standalone resource paper

Current Drive plan: **Bioethics Bench v3 — research publication plan**  
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper should establish:
- resource construction and release methods;
- source grounding/provenance;
- task abstraction;
- evaluation protocols and baselines;
- versioning and governance;
- limitations and review state;
- extension to future computational-bioethics tasks/methods.

## Downstream SACRE evidence

Developmental SACRE evidence currently includes:
- 8 families / 16 records / 216 QCCS calls in a geometry-stratified tranche;
- selected repeat/stability calibration;
- an attempted 68-record census halted after 234 calls: 20 complete records, 48 incomplete.

The 20 complete records are single-execution developmental evidence. The 48 incomplete records are non-results.

Those are SACRE execution artifacts, not evidence that Bench source fidelity has been independently validated.

## What must not be claimed

- The corpus is not independently human-reviewed.
- Structural validation is not source fidelity.
- The review is not complete.
- Findings in the whole-document-reviewed subset do not imply a corpus-wide rate.
- A successful SACRE run does not validate the source construction of the case.
- Bioethics Bench has not yet demonstrated method-neutrality across multiple mature task families.
- Developmental execution is not confirmatory P3 validation.
- Human-model correspondence has not been measured; that belongs to P4 after authorized fielding.

## If picking this up cold

Read in this order:

1. this file;
2. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`;
3. `docs/PROGRAM_COORDINATION.md`;
4. `docs/COORDINATOR_DIRECTIVE.md`;
5. `docs/BRANCH_COORDINATION.md`;
6. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`;
7. if doing source review, the generated review handoff and deep-research brief;
8. if drafting, `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`.

Fetch live repo state rather than trusting an old SHA or count in historical documents.
