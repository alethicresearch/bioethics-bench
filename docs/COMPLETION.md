# What Completing Bioethics Bench Means

**Read this first, then go to the surface it points to.**

Bioethics Bench is a source-grounded research infrastructure for computational bioethics within the broader **Doing Ethics with AI (DEWA)** program. Its first mature executable task family is SACRE/QCCS, but the resource is intended to support broader computational-bioethics research through separable resource, task, and evaluation layers.

## Where this fits in the wider program

The core DEWA suite is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a coordinated major resource/publication, not an extra numbered stage and not a prerequisite between P2 and P3.

P2 v49 main + Supplementary Information are complete for this compositional stage. The current Bench priorities are the **generalization audit, source/review/release maturation, and standalone resource paper**, while P2 receives only targeted factual corrections if new Bench evidence materially changes an existing claim.

## Current Bench state

The executable Full Corpus currently contains:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**.

PR #10 is merged. All current records remain `status: draft` and `reviewed_by_human: false`.

Structural validity is not source fidelity. Model-assisted source checks are not independent human review.

## What “complete for the current stage” means

For the current developmental/publication stage, Bench is complete enough when:

1. the executable corpus remains structurally valid and versioned;
2. execution-relevant changes are clearly classified and propagated to SACRE;
3. source/review findings are recorded truthfully without being misrepresented as independent human review;
4. the standalone resource paper has a defensible architecture and evidence plan;
5. the **generalization audit** identifies accidental SACRE coupling and a path to clearer resource/task/evaluation separation;
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

Whole-document omission review has found findings in five of five families examined by that method; 29 remain unexamined by that method. This is not a corpus-wide rate.

### 2. Generalization audit

Classify current schema/task fields as:

- **intrinsic resource fields**;
- **generic task/evaluation fields**;
- **SACRE-specific execution fields**.

The purpose is to protect the intended broader computational-bioethics identity without destabilizing v1 merely for conceptual neatness.

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
- Five of five whole-document findings do not imply a corpus-wide finding rate.
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
6. if doing source review, the generated review handoff and deep-research brief;
7. if drafting, `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`.

Fetch live repo state rather than trusting an old SHA or count in historical documents.
