# Bioethics Bench — Submission Resource Package Handoff

**Date:** 2026-08-30  
**Manuscript frontier:** Bioethics Bench v8 — Patterns submission-prepared manuscript development draft  
**Primary target:** *Patterns* (Cell Press), Resource-style submission  
**Current resource/provenance reference:** Bench `0a8317ba8a2c5978f7a50bb5f13de875153b6782` → SACRE re-pin merge `9fa908a45c2447aa97f0473754c434bdb874b19e`

## Submission package state

The publication-linked repository package has been moved from an internal research repository state to a reviewer-inspectable submission resource. The package now includes:

- `docs/RESOURCE_CARD.md` — scientific resource description, composition, unit of analysis, provenance/warrant model, geometry, representation controls, intended uses, limitations, validation state, citation and release status;
- `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md` — explicit separation of first-submission requirements, submission snapshot freeze, and later public archival-release requirements;
- `docs/ARCHIVAL_RELEASE_PLAN.md` — two-freeze architecture for manuscript submission snapshot versus later public archival release, including identity requirements for resource, task, and evaluation layers;
- `CITATION.cff` — provisional repository-level citation metadata that does not invent a final manuscript author list;
- refreshed public `README.md`;
- `docs/papers/PATTERNS_SUBMISSION_METADATA.md`;
- `docs/papers/PATTERNS_COVER_LETTER_DRAFT.md`;
- this package handoff.

The package explicitly distinguishes a **peer-review submission snapshot** from a later **formal public archival release**. The submission snapshot may remain transparently draft and not independently human-reviewed; that state must be stated rather than hidden.

## Corpus and source-provenance state

The reviewer-facing resource now reflects the completed canonical source-locator repair:

- 34 executable Full Corpus families;
- 68 matched concise/detailed records;
- 210 unique family-level candidates;
- eight natural candidate geometries;
- 428 unordered cross-source QCCS pairs per representation / 856 per matched concise+detailed pass;
- current records remain `status: draft`, `reviewed_by_human: false`;
- **242 unique Full Corpus citations**;
- **130 citations carry a PMID and 130/130 resolve consistently** against PubMed;
- **0 unresolved canonical source locators** remain across all 68 records;
- traceable internal “research packet” placeholders were replaced with the underlying external literature;
- policies, guidelines, books and other non-PubMed sources carry direct official/publisher/bibliographic locators where available.

Complete locator coverage is a traceability/identifier result. It does **not** establish independent source-to-policy fidelity or corpus-wide omission sensitivity.

## Canonical locator repair and execution boundary

The locator work changed provenance metadata inside the canonical Full Corpus resource. Because whole-resource `content_hash` includes provenance, the repair changed **68/68 record hashes**.

The explicit `sacre-qccs-v1` all-record gate was therefore rerun rather than assuming those changes were harmless. Pre-repin verification found:

- all 34 families / 68 records task-semantic equivalent;
- **68/68** stale SACRE-side resource hashes relative to the newly enriched Bench records;
- **0 execution/task-semantic differences**;
- unchanged scenarios, candidate ids/text/order/source roles, stipulations, profiles, geometry, pair-generation semantics/counts, partner counts, structural asymmetry, and required aggregation.

The 68 hash changes were classified as **provenance-only drift**. SACRE was then re-vendored/re-pinned from locator-enriched Bench commit:

`0a8317ba8a2c5978f7a50bb5f13de875153b6782`

The current SACRE consumer pin was merged through PR #22 at:

`9fa908a45c2447aa97f0473754c434bdb874b19e`

Current vendored Full Corpus SHA-256:

`82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`

After re-pin:

- adapter projection and SACRE vendor payload are byte-for-byte identical;
- SACRE Full Corpus regression suite passes **46/46**;
- the SACRE main-branch post-merge equivalence workflow passes;
- **no model/QCCS rerun was required or performed**.

The earlier 36/68 provenance-hash refresh remains historical evidence and is no longer the current consumer pin.

## Publication-package validation

The original submission-package pass exposed a latent task-contract/verifier mismatch: the verifier required a current expected corpus cardinality while the machine contract retained only the historical verified count. That repair added explicit current expected and historically verified 68-record / 34-family fields and passed validation/self-tests.

The task-contract verification metadata has now been advanced again to the locator-enriched equivalence event while preserving task contract version `0.1.0`: pair generation, QCCS semantics, aggregation rules, outputs, and evaluation boundaries did not change.

Current Bench CI remains green after the locator repair and documentation synchronization.

## Manuscript / metadata impact

Bioethics Bench v8 is the current **15-page, four-figure, five-table** submission-prepared manuscript. It is scientifically identical to v7 apart from the already-completed Highlight production correction; all four current Highlights are below the Cell Press 85-character general production limit.

The submission metadata and Resource Card now use the current locator-enriched corpus state and current SACRE pin. They no longer present the earlier 122/122 PMID count or the earlier 36-hash re-pin as current.

No manuscript-wide rewrite is warranted by the locator repair. If the paper's Data and Code Availability or source-count language is updated at final snapshot freeze, use the exact immutable submission-snapshot identity rather than a moving `main` reference.

## Product / paper impact

The standalone paper now has a repository package that can be given to reviewers as an inspectable research object rather than as an informal code/data link. The submission architecture remains:

1. **submission snapshot** — immutable reviewer-facing state allowed to remain transparently draft;
2. **public archival release** — later, separately governed release with its own review state, licenses, checksums, release notes, and DOI-bearing archive where feasible.

This preserves the program rule that independent source review is a quality/release layer rather than a developmental execution gate.

## Evidence status

This package and locator repair strengthen **reproducibility, traceability, and inspectability**, not normative validity.

Supported:

- exact current corpus and disposition state;
- structural and provenance validation pipeline;
- complete canonical locator coverage for current Full Corpus citations;
- 130/130 PMID identifier consistency against PubMed;
- exact resource/task identity separation;
- all-record adapter equivalence after the provenance enrichment;
- transparent review/release boundary.

Still not established:

- independent corpus-wide human source validation;
- corpus-wide source fidelity/omission sensitivity;
- QCCS reliability or construct validity;
- moral correctness;
- human-model correspondence;
- method-neutrality across multiple mature tasks.

## Licensing boundary

Bench-authored case content is explicitly CC BY 4.0. The repository still has **no finalized root software/tooling license** and no package software-license declaration.

**Do not infer or silently choose a software license.** Selecting the software/tooling license remains a named pre-final-submission / pre-archival-release decision.

## Current blockers and next dependency

The remaining submission-facing work is now narrow:

1. lock the actual manuscript author list, affiliations, corresponding author/email, ORCIDs, contributions, funding/acknowledgments, and competing interests;
2. choose the software/tooling license;
3. verify remaining live *Patterns* article-specific requirements;
4. finalize cover letter/front matter with locked metadata;
5. run logged-out reviewer-access and clean-clone validation;
6. create the immutable submission snapshot/tag/checksum set immediately before submission;
7. write that exact snapshot identity into manuscript Data and Code Availability;
8. conduct final author/coauthor prose review and submit.

Do not reopen broad Methods architecture, source-locator cleanup, adapter proof, schema-v2 migration, or second-task construction at this stage.

**SUBMISSION RESOURCE PACKAGE AND CANONICAL SOURCE-LOCATOR PROVENANCE REPAIR COMPLETE FOR CURRENT DEVELOPMENT STATE.**
