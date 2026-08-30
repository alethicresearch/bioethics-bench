# Bioethics Bench — Program Coordination

This file is the repo-local operating view of Bioethics Bench within the wider **Doing Ethics with AI (DEWA)** research program. It exists so a Bench agent can recover current paper roles, evidence boundaries, and cross-repository dependencies without reconstructing them from historical branches or chat.

## Read first

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/COORDINATOR_DIRECTIVE.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
7. `tasks/sacre-qccs-v1/task-contract.json`
8. `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`
9. `docs/papers/MANUSCRIPT_WRITEBACK.md`
10. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

Fetch live repository state before reusing a count, hash, review total, or branch status.

## Program architecture

Part I, **Doing Ethics with AI: Practical Ethics Engineering, Product-Led Philosophy, & Computer-Aided Ethics**, introduces **Doing Ethics with AI (DEWA)** as the general paradigm.

The cumulative spine is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a **parallel major research object/publication** within the Computational Bioethics domain program. It is not merely a REai test set and is not inserted as a conceptual stage between P2 and P3.

Keep three layers explicit:

```text
RESOURCE
cases • decision questions • candidates • sources/provenance • stipulations • representations • versioning
   ↓
TASK
sacre-qccs-v1 first • future scientifically motivated computational-bioethics tasks
   ↓
EVALUATION
models • humans • ensembles • hybrids • repetitions • perturbations • providers/configurations
```

## What this repository owns

Bioethics Bench owns:

- source-grounded cases and decision questions;
- candidate positions and source/provenance relationships;
- policy-basis and construction-method declarations;
- concise/detailed companion representations;
- lifecycle, review, rights, versioning, manifests, and release state;
- structural validation and corpus-review tooling;
- resource/task abstraction and Bench-owned task contracts;
- the standalone resource-paper architecture.

SACRE/ReflectiveEquilibrium.AI owns executable implementation semantics and run evidence. Drive owns current manuscripts, publication sequencing, and authorization of confirmatory/human studies.

## Current corpus state

Current executable Full Corpus:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- all current records remain `status: draft`;
- all current records remain `reviewed_by_human: false`.

Structural validation establishes schema/profile/geometry/manifest consistency; it does not establish source fidelity. Model-assisted source checks are not independent human review. Whole-document omission review has examined five families by that method; **29 remain unexamined**.

Independent human source-to-policy review remains a quality/release layer and is **not an execution gate for developmental/paper-facing computational work**. Confirmatory P3 and human P4 studies remain separately authorization-gated.

## Generalization and `sacre-qccs-v1` status — complete for this stage

The first-pass generalization audit is complete. It found that most current fields form a reusable resource/provenance and generic governance/evaluation core. The strongest SACRE-specific coupling is localized to:

- Public / Expert / Framework task roles;
- current `pubN` / `expN` / `fwN` aliases;
- benchmark-profile geometry and cross-source pairing;
- aggregation semantics.

The first explicit task contract and adapter are now implemented:

- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`
- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The adapter is **equivalence verified across all 34 families / 68 records**.

The verification first compared current Bench with SACRE's pre-existing vendor payload. It found **0 execution/task-semantic differences** and **36/68 stale Bench `content_hash` values** in the older SACRE pin. Because scenario text, candidate IDs/text/order, representations, versions, profiles, geometry, pair semantics, partner counts, and aggregation were unchanged, the difference was classified as **provenance-only drift**.

SACRE was then re-vendored/re-pinned to merged Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

Current SACRE Full Corpus payload SHA-256:

`7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

After re-pin, the adapter projection and SACRE vendor payload were byte-for-byte identical, and the existing Full Corpus regression tests passed. The SACRE work was merged at:

`4ed4b24ab99d7427195a21393474c02700274ee6`

This closes the first adapter-equivalence gate. **Do not restart the audit, task specification, or all-record equivalence work.**

The result establishes architectural/reproducibility separation; it does not establish QCCS reliability/validity, moral correctness, independent corpus source validation, or empirical method-neutrality across multiple mature task families.

## Downstream developmental execution state

Current SACRE developmental evidence relevant to Bench includes:

- 8 families / 16 records / 216 QCCS calls in the geometry-stratified tranche;
- selected repeat/stability calibration showing heterogeneous case-level behavior;
- attempted 68-record corpus-wide pass halted after 234 calls;
- **20 complete** single executions;
- **48 incomplete non-results**.

Those outputs are execution evidence, not Bench release/source-fidelity validation.

## Manuscript relationships

### P1

Bench can inform P1 where construction reveals philosophical pressure around source independence, action alignment, natural geometry, provenance, and the distinction between structural validity and source fidelity. P1 does not own full Bench methods.

### P2

P2 v49 main + Supplementary Information are complete for this compositional stage and now enter author/coauthor submission-facing review.

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- supplement: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit

Bench belongs in P2 because building REai into a research instrument required stable source-grounded research objects. Future Bench work should alter P2 only when a new finding materially changes an existing claim.

### P3

Bench functions as a versioned measurement substrate. P3 owns computational validation. The next protocol refinement should separately freeze:

1. **resource snapshot**;
2. **task specification**;
3. **evaluation/execution condition**.

The verified task adapter supports that separation but does not authorize confirmatory P3 execution.

### P4

The same resource snapshots can support matched human/model studies. Human recruitment, instructions, ethics, and fielding belong to P4. No human results currently exist.

### Standalone Bioethics Bench paper

Current Drive plan:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper owns resource construction/release methods, provenance/policy-basis ontology, representation and natural geometry, resource/task/evaluation separation, the verified `sacre-qccs-v1` reference task, source-fidelity boundaries, governance/versioning, and future extension.

## Current research frontier

1. **Source/review/release maturation** continues in parallel.
2. Define the future **generic candidate/source-role resource model on paper** before altering canonical schema.
3. Mature the standalone Bench paper around the now-demonstrated resource/task boundary.
4. Refine P3 protocol using separately frozen resource/task/evaluation objects.
5. Specify a non-SACRE task only when it answers a genuine scientific question; do not add superficial breadth merely to claim generality.
6. Preserve canonical v1 as a compatibility lineage until a future versioned architecture change is scientifically justified.

## Cross-repository change rule

**Execution-relevant:** candidate ID/text, scenario/task meaning, profile, geometry, aggregation, executable set, or execution-relevant schema. Re-vendor/re-pin/reverify; rerun affected results when the executed object changed.

**Provenance-only:** citations, provenance summaries, source-review metadata, or resulting record-hash drift with unchanged executable projection. Refresh provenance/pins; **do not automatically rerun model outputs**. The 36-record 2026-08-30 refresh is the reference case.

**Documentation-only:** coordination/audit/manuscript prose describing unchanged semantics. No product action unless an execution defect is exposed.

## Handoff requirement

Every substantive Bench handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.
