# What Completing Bioethics Bench Means

Bioethics Bench is a source-grounded research infrastructure for computational bioethics within the broader **Doing Ethics with AI (DEWA)** program. The core DEWA sequence remains:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a parallel major resource/publication, not an extra numbered stage and not a prerequisite between P2 and P3.

## Current verified state

The executable Full Corpus contains:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- current records `status: draft`;
- current records `reviewed_by_human: false`.

Structural validity is not source fidelity. Model-assisted source review is not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**.

Independent human source-to-policy review remains important for release/quality, but it is **not a gate on developmental or paper-facing computational execution**.

## Generalization / task-boundary milestone — complete

The first-pass resource/task/evaluation audit is complete:

`docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

The first explicit task contract is complete and equivalence verified:

- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`
- adapter: `scripts/task-adapters/sacre-qccs-v1.mjs`
- verifier: `scripts/verify-sacre-qccs-v1-adapter.mjs`

The audit localized SACRE-specific coupling to the Public/Expert/Framework task roles, `pub/exp/fw` aliases, profile geometry/cross-source pairing, and aggregation semantics. Most of the current record remains a richer reusable resource/provenance object.

All-record verification showed **0 execution/task-semantic differences across 34 families / 68 records**. It also found **36/68 stale `content_hash` values** in SACRE's older vendor pin. Because no scenario, candidate, profile, geometry, aggregation, version, or other task-semantic field differed, that drift was classified as **provenance-only**.

SACRE was re-vendored/re-pinned to merged Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

Current SACRE Full Corpus payload SHA-256:

`7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

After re-pin, the explicit adapter projection and SACRE vendor payload were byte-for-byte identical and SACRE's Full Corpus regression tests passed. No model/QCCS rerun was required because executed semantics did not change.

**Do not restart the generalization audit, task specification, or adapter-equivalence work. Those stages are complete.**

## What “complete for the current stage” now means

The current Bench developmental/publication stage is complete enough to support ongoing paper-facing computation when:

1. the executable resource remains structurally valid, versioned, and reproducible;
2. changes are classified as execution-relevant, provenance-only, or documentation-only and propagated accordingly;
3. source/review findings are recorded without overstating independent human validation;
4. the verified resource → task → evaluation boundary is preserved;
5. P3 freezes resource snapshots and task specifications separately;
6. the standalone Bench paper develops the resource contribution without being swallowed by P2 or P3.

## What remains in the Bench lane

### Source/review/release maturation

Continue the existing review system:

- `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
- generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
- `docs/full-corpus/review/research-tasks/README.md`
- `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
- `docs/papers/MANUSCRIPT_WRITEBACK.md`

Do not manually edit the generated `RESEARCH_HANDOFF.md`.

### General resource modeling

Define the future **generic candidate/source-role model on paper** before changing the schema. Preserve canonical v1 as a compatibility lineage. A generalized schema is a future versioned change, not a cleanup requirement.

An additional non-SACRE task should be specified only when it answers a genuine scientific question. Architectural separability is now demonstrated; empirical method-neutrality is not.

### Standalone Bioethics Bench paper

Current Drive plan:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper owns resource construction/release methods, provenance and policy-basis ontology, representation and natural geometry, the resource/task/evaluation architecture, the verified `sacre-qccs-v1` reference task, source-fidelity limits, governance/versioning, and future extension.

### P3/P4 support

Freeze separately:

1. **resource snapshot**;
2. **task specification**;
3. **evaluation/execution condition**.

P3 owns computational validation. P4 owns human empirical/comparative validation. Neither confirmatory P3 execution nor P4 human fielding is authorized merely because the task boundary is now verified.

## Change-class rule

**Execution-relevant:** candidate IDs/text, scenario/task meaning, profile/geometry, required aggregation, executable set, or execution-relevant schema. Re-vendor/re-pin/reverify and rerun affected results when the executed object changed.

**Provenance-only:** source/citation/provenance changes or resulting record-hash drift with unchanged executable projection. Refresh provenance/pins; do **not** automatically rerun model outputs.

**Documentation-only:** coordination/audit/manuscript prose with no executable effect. No product action unless an execution defect is exposed.

## Claims that remain out of bounds

- the corpus is independently human-reviewed;
- structural validation establishes source fidelity;
- the whole-document-reviewed subset implies a corpus-wide finding rate;
- task equivalence establishes QCCS reliability or validity;
- Bioethics Bench has demonstrated method-neutrality across multiple mature task families;
- a successful SACRE run validates the source construction;
- developmental execution is confirmatory P3 validation;
- human-model correspondence has been established.

## Cold-start reading order

1. this file;
2. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`;
3. `docs/PROGRAM_COORDINATION.md`;
4. `docs/COORDINATOR_DIRECTIVE.md`;
5. `docs/BRANCH_COORDINATION.md`;
6. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`;
7. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`;
8. current generated review handoff if doing source review;
9. manuscript findings/writeback surfaces if drafting.

Fetch live repository state before reusing counts or SHAs from historical documents.
