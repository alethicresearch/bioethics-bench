# Bioethics Bench — Submission Resource Package Handoff

**Date:** 2026-08-30  
**Manuscript frontier:** Bioethics Bench v7 — Patterns-positioned manuscript development draft  
**Primary target:** *Patterns* (Cell Press), Resource-style submission  
**Current package verification commit:** `00615a10d5a72d592dba39ca9b7ec71970d80cda`

## Changed

The publication-linked repository package has been moved from an internal research repository state toward a reviewer-inspectable submission resource.

### New submission-facing artifacts

- `docs/RESOURCE_CARD.md` — scientific resource description, composition, unit of analysis, provenance/warrant model, geometry, representation controls, intended uses, limitations, validation state, citation and release status.
- `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md` — explicit separation of first-submission requirements, submission snapshot freeze, and later public archival-release requirements.
- `docs/ARCHIVAL_RELEASE_PLAN.md` — two-freeze architecture for manuscript submission snapshot versus later public archival release; identity requirements for resource, task, and evaluation layers; DOI/archive strategy; post-submission change classification.
- `CITATION.cff` — provisional repository-level citation metadata that does not invent a final manuscript author list.

### Public README rewritten

The previous README framed Bioethics Bench mainly as a prospective SACRE corpus and referred users primarily to the P1 citation. It now reflects the current scientific object:

- source-grounded computational-bioethics infrastructure;
- resource → task → evaluation separation;
- 200-family disposition program;
- 34 executable families / 68 records / 210 unique family-level candidates;
- eight natural candidate geometries and 428/856 pair workload;
- current source/provenance and review boundary;
- `sacre-qccs-v1` as the first mature reference task rather than the resource ontology;
- all-record adapter-equivalence result;
- record-level citation rule;
- submission-snapshot versus public-release distinction;
- explicit statement that the software/tooling license is not yet finalized.

### Latent CI defect found and repaired

The first post-package validation workflow failed at the final adapter-verification step:

`AssertionError: task contract expected-record count is stale — 68 !== undefined`

The verifier correctly expected a **current expected record count**, but the machine task contract only retained the historical `verified_record_count` field. The fix adds:

- `equivalence_gate.current_expected_record_count: 68`
- `equivalence_gate.current_expected_family_count: 34`

while preserving the historical:

- `verified_record_count: 68`
- `verified_family_count: 34`

This is the scientifically correct distinction: **what was verified at the equivalence gate** and **what the current contract expects the executable corpus to contain** are related but not conceptually identical fields.

## Verified

GitHub Actions validation run `33291927572` on commit `00615a10d5a72d592dba39ca9b7ec71970d80cda` completed successfully.

The workflow passed:

- checkout/setup/npm installation;
- `npm run validate`;
- `node scripts/validate-selftest.mjs`.

The validation pipeline itself reported successful checks for:

- generated Featured collection state;
- dossier/record synchronization;
- all 34 executable dossier/record decisions;
- the 200-family disposition ledger;
- the 34-family / 68-record Full Corpus manifest;
- 420 representation-level candidate instances passing provenance/policy-basis audit;
- current divergence worksheet;
- 55 source-informed policy inference bridge units;
- 126 source-review units;
- current source-review handoff generation;
- citation verification: 239 unique citations, 122 with PMIDs, 122/122 resolving consistently;
- 109 repository records valid against schema, canonical content hash, profile registry, and corpus invariants;
- `sacre-qccs-v1` adapter verification after restoration of the current-count guard.

The validator self-tests also passed, demonstrating that the structural guards still reject deliberately broken records/profile entries.

## Product / paper impact

The standalone paper now has a repository package that can be given to reviewers as an inspectable research object rather than as an informal code/data link. The submission architecture is explicit:

1. **submission snapshot** — immutable reviewer-facing state allowed to remain transparently draft;
2. **public archival release** — later, separately governed release with its own review state, licenses, checksums, release notes, and DOI-bearing archive where feasible.

This preserves the program's established rule that independent source review is a quality/release layer rather than a developmental execution gate.

## Evidence status

This package strengthens **reproducibility and inspectability**, not normative validity.

Supported:

- exact current corpus and disposition state;
- structural and provenance validation pipeline;
- exact resource/task identity separation;
- current CI-clean repository state;
- all-record adapter equivalence;
- transparent review/release boundary.

Still not established:

- independent corpus-wide human source validation;
- corpus-wide source fidelity/omission sensitivity;
- QCCS reliability or construct validity;
- moral correctness;
- human-model correspondence;
- method-neutrality across multiple mature tasks.

## Licensing boundary found

Bench-authored case content is explicitly CC BY 4.0. The repository previously stated that tooling had a separate software license, but no root software-license file and no package license declaration are present.

**Do not infer or silently choose a software license.** Selecting the software/tooling license is now a named pre-archival-release and pre-final-submission metadata decision.

## Writeback status

- Resource Card: complete.
- Patterns submission/release checklist: complete.
- Archival release plan: complete.
- Provisional `CITATION.cff`: complete.
- Public README: refreshed.
- Machine task-contract cardinality guard: repaired.
- CI validation and self-tests: passing.
- No canonical record content changed in this package pass.
- No SACRE vendor/model rerun required.

## Cross-repository dependency

The current resource-package commits do not change executable projection semantics. The original all-record equivalence reference remains:

- Bench equivalence-tested execution commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- SACRE re-pin merge commit `4ed4b24ab99d7427195a21393474c02700274ee6`.

The current package verification commit `00615a10d5a72d592dba39ca9b7ec71970d80cda` adds publication documentation and restores a machine cardinality guard; it does not supersede the scientific meaning of the earlier equivalence-test reference.

## Next dependency

The next submission-facing work is now narrow and concrete:

1. lock the actual manuscript author list, affiliations, ORCIDs and corresponding author;
2. choose the software/tooling license;
3. prepare the Patterns cover letter and final submission metadata;
4. run a clean reviewer-access check and final submission-snapshot validation;
5. create the immutable submission snapshot/tag/checksum set immediately before submission;
6. continue source review in parallel and incorporate only scientifically warranted repairs under the execution/provenance change rule.

Do not reopen broad Methods architecture, schema-v2 migration, or second-task construction at this stage.

**SUBMISSION RESOURCE PACKAGE COMPLETE FOR CURRENT DEVELOPMENT STATE.**
