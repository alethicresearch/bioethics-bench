# Bioethics Bench — Archival Release Plan

**Status:** publication/release architecture; no public release authorized by this document  
**Current manuscript frontier:** Bioethics Bench v7  
**Current corpus state:** development / release-candidate lineage, not independently human-reviewed

## 1. Why there are two freezes

Bioethics Bench needs two different immutable references because the scientific paper can be peer reviewed before the resource has reached its eventual public-validation state.

### A. Manuscript submission snapshot

Purpose: allow editors and reviewers to inspect exactly the resource, schemas, task contract, validation code, and provenance state underlying the submitted manuscript.

A submission snapshot may legitimately contain records whose status remains `draft` and `reviewed_by_human: false`, provided the manuscript states that limitation and does not imply a validated public release.

### B. Public archival release

Purpose: create the stable object that downstream researchers can cite and reuse as a declared release, with its own review state, immutable manifest, checksums, licenses, release notes, and archival identifier.

The public archival release can therefore post-date manuscript submission and can incorporate scientifically warranted source/provenance repairs. If those repairs alter executable semantics, affected task results must be reverified/rerun according to the cross-repository change rule.

## 2. Identity layers to freeze

Every paper-facing computation should identify three independently versioned layers.

### Resource identity

Freeze:

- case/record IDs;
- record versions;
- scenarios and stipulations;
- candidate IDs/text/order;
- source/provenance state;
- representation state;
- geometry/profile state;
- content hashes;
- corpus manifest and manifest checksum;
- schema versions.

### Task identity

For the first mature reference task, freeze:

- `task_protocol_id: sacre-qccs-v1`;
- task-contract version;
- QCCS identity/version and operationalization;
- role mapping;
- pair generation;
- required matrix completeness;
- aggregation rule;
- ranking/output semantics.

### Evaluation identity

Freeze separately for each reported experiment:

- model/provider/human evaluator identity;
- model version/configuration and prompting condition;
- repetitions/seeds where relevant;
- perturbation assignment;
- retry/exclusion rules;
- dates and runtime environment where material;
- metrics and analysis code.

This prevents a resource update, task update, or evaluator update from being hidden inside one generic “benchmark version.”

## 3. Current reference points

The all-record `sacre-qccs-v1` equivalence result is tied to the following verified executable-projection lineage:

- Bench commit: `077b36ff1eb9662e93549b1f4261691960cfa605`
- SACRE re-pin merge commit: `4ed4b24ab99d7427195a21393474c02700274ee6`
- SACRE Full Corpus vendor payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

Later manuscript/coordination commits have added documentation without altering the verified executable projection. The submission snapshot should nevertheless point to one exact repository commit after the publication resource package is complete, while preserving the above commit as the specific equivalence-tested execution reference.

## 4. Submission snapshot procedure

Immediately before manuscript submission:

1. Ensure all intended manuscript-linked repository documentation is merged.
2. Run the full repository validation suite from a clean checkout.
3. Regenerate/check the disposition ledger and Full Corpus completion-candidate manifest.
4. Confirm 34 families, 68 matched records, 210 unique family-level candidates, and the current role/basis counts.
5. Confirm the eight geometry classes reconstruct 428 cross-source pairs per representation / 856 across the matched pair.
6. Run `sacre-qccs-v1` adapter verification.
7. Confirm the corresponding SACRE vendor pin and regression tests remain valid.
8. Record the exact passing Bench commit SHA.
9. Create an immutable submission tag or equivalent archival reference.
10. Generate a checksum file covering the manifest, schemas, task contract, and other paper-critical machine-readable artifacts.
11. Record that identifier in the manuscript Data and Code Availability section and cover letter.
12. Test reviewer access without privileged credentials.

The submission snapshot should be named so that it cannot be mistaken for a validated corpus release, e.g. `paper-v1-submission-snapshot` or an equivalent explicit label.

## 5. Public archival release procedure

A later public release should be constructed from a deliberate release candidate, not simply renamed from the submission snapshot.

### Review and scientific state

- define which records are in the release;
- define the independent source-review requirement for those records;
- resolve release-blocking source/warrant defects;
- document unresolved non-blocking limitations;
- update record review/exposure state honestly.

### Rebuild and verification

- regenerate canonical content hashes for changed records;
- regenerate the release manifest;
- run structural validation;
- rerun task projection equivalence;
- if execution-relevant fields changed, rerun affected evaluations rather than only repinning;
- if changes are provenance-only, repin/reverify without automatic model rerun;
- confirm machine-readable and manuscript-reported counts match.

### Licensing and rights

- retain CC BY 4.0 for Bench-authored case content unless deliberately changed;
- retain third-party rights boundaries;
- choose and add an explicit software license for schemas/tooling/site code;
- update package metadata to match the software-license decision;
- verify rights for manuscript/public-release figures and graphical material.

### Archival identity

- create an immutable Git tag/release;
- publish release notes;
- attach the release manifest and checksum list;
- archive a snapshot in a DOI-bearing repository where feasible;
- record the DOI in repository citation metadata;
- freeze a preferred citation for the resource release;
- update the manuscript/public site to distinguish paper DOI from resource DOI if both exist.

## 6. Recommended citation hierarchy

### Paper-level citation

Use the standalone Bioethics Bench paper for the scientific contribution and architecture once it has a stable bibliographic citation.

### Resource-release citation

Use the archived resource DOI/tag/version for a specific released corpus snapshot.

### Record-level citation

Always include:

`record_id` + `version` + `content_hash`

### Result-level citation

Additionally include:

resource snapshot + task specification + evaluation/execution condition.

This hierarchy lets a reader distinguish credit for the paper, identity of the reused dataset/resource, identity of a particular normative object, and identity of a computational result.

## 7. DOI/archive strategy

Preferred architecture:

1. GitHub remains the working/source repository.
2. A release tag defines the exact repository state.
3. A DOI-bearing archive (for example Zenodo or another suitable repository selected by the authors/institution) preserves the immutable release payload and metadata.
4. The archive contains or references the release manifest, checksum list, schemas, task contract, Resource Card, license files, and machine-readable corpus.
5. The paper's Data and Code Availability section links the working repository and the immutable archive once available.

No DOI provider is selected by this document; the final choice should be made with the authors/institution before public release.

## 8. Change classification after submission

Every post-submission corpus change must be classified before deciding whether results need to be regenerated.

### Execution-relevant

Examples: scenario meaning, stipulations that affect execution, candidate IDs/text/order, candidate membership, role mapping, geometry/profile, pair generation, required aggregation, task semantics.

Action: update version/hash, re-vendor/re-pin/reverify, and rerun affected evaluations when the executed object changed.

### Provenance-only

Examples: citation correction, provenance summary, source-review metadata, warrant annotation with unchanged executable projection.

Action: update version/hash/provenance and re-pin/reverify as appropriate; **do not automatically rerun model/QCCS evaluations**.

### Documentation-only

Examples: Resource Card prose, README, manuscript coordination, publication checklists.

Action: no execution rerun unless the documentation work exposes a substantive defect.

The 36-record hash refresh found during adapter verification is the canonical provenance-only example.

## 9. Release labels and language

Use language that identifies the state rather than implying quality through naming alone.

Recommended progression:

- `development`
- `submission-snapshot`
- `release-candidate`
- `released`
- later versioned releases as needed

A release label must not be used to imply moral correctness, QCCS validity, or corpus-wide source fidelity beyond the recorded review state.

## 10. Current blockers to a formal archival release

The following are not blockers to peer-review submission, but they must be resolved or deliberately scoped before a formal public archival release:

- final author/resource citation metadata;
- explicit software-license choice;
- exact independent source-review/release criterion;
- archival DOI provider and metadata;
- final immutable release tag and checksum set;
- final release notes and review/exposure-state writeback.

## 11. What this plan does not authorize

This plan does not authorize:

- a schema-v2 migration;
- a second benchmark task;
- confirmatory P3 model execution;
- P4 human/Prolific fielding;
- changing record semantics merely to regularize geometry or improve results;
- calling the current corpus independently validated.
