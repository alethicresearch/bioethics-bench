# Coordinator Directive — Bioethics Bench Lane

**Current objective:** convert the now submission-prepared Bioethics Bench manuscript and reviewer-inspectable repository package into a final immutable Patterns submission snapshot, without overstating source review or reopening completed architecture work.

## Cold-start reading order

1. `docs/papers/BENCH_MANUSCRIPT_V8_HANDOFF.md`
2. `docs/papers/BENCH_SUBMISSION_RESOURCE_PACKAGE_HANDOFF.md`
3. `docs/papers/PATTERNS_SUBMISSION_METADATA.md`
4. `docs/papers/PATTERNS_COVER_LETTER_DRAFT.md`
5. `docs/RESOURCE_CARD.md`
6. `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md`
7. `docs/ARCHIVAL_RELEASE_PLAN.md`
8. `docs/papers/BENCH_SUBMISSION_POSITIONING.md`
9. `docs/papers/BENCH_V7_CITATION_CLAIM_AUDIT.md`
10. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
11. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
12. for continuing source review, generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current manuscript

**CURRENT Bioethics Bench v8 — Patterns submission-prepared manuscript development draft**  
https://docs.google.com/document/d/14HRYJ1QDDfb7Rhv_QJGQ7siowIVm5BbK/edit

V8 is **15 pages, four figures, five tables**. It is scientifically identical to v7 except for a production-compliance correction: all four Highlights are now below the Cell Press 85-character limit. The 291-word abstract and 136-word Bigger Picture were deliberately left unchanged until the exact live Patterns article-specific limits are verified.

V8 passed a complete 15/15 page render inspection. V7 is preserved in Drive as the immediate superseded source.

**Primary target:** *Patterns* (Cell Press), Resource-style submission. Do not restart generic venue research unless a concrete journal requirement changes.

## Submission resource package — complete for current development state

The reviewer-facing repository package now includes:

- `docs/RESOURCE_CARD.md`;
- `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md`;
- `docs/ARCHIVAL_RELEASE_PLAN.md`;
- provisional `CITATION.cff`;
- refreshed current-state `README.md`;
- `docs/papers/PATTERNS_SUBMISSION_METADATA.md`;
- `docs/papers/PATTERNS_COVER_LETTER_DRAFT.md`;
- `docs/papers/BENCH_SUBMISSION_RESOURCE_PACKAGE_HANDOFF.md`.

The package explicitly distinguishes a **peer-review submission snapshot** from a later **formal public archival release**. The submission snapshot may remain transparently draft and not independently human-reviewed; that state must be stated rather than hidden.

## Repository verification

A publication-package push exposed a latent task-contract/verifier mismatch: the verifier required `equivalence_gate.current_expected_record_count`, while the contract only carried the historical `verified_record_count`.

The contract now distinguishes:

- current expected corpus: **68 records / 34 families**;
- historically equivalence-verified corpus: **68 records / 34 families**.

Repair commit: `00615a10d5a72d592dba39ca9b7ec71970d80cda`.

GitHub Actions validation run `33291927572` passed both `npm run validate` and `node scripts/validate-selftest.mjs`. A subsequent documentation-only package handoff commit also passed the full workflow.

### Canonical source-locator enrichment — complete

The Full Corpus provenance layer has now been repaired corpus-wide rather than relying on website search fallbacks:

- all **68** canonical Full Corpus records were scanned;
- unresolved canonical source locators reduced from 105 initially, to 74 after the first verified pass, to **0** after source-by-source verification;
- internal “research packet” citation placeholders that could be traced were replaced with their underlying external literature;
- automated fuzzy DOI matching was not accepted as canonical evidence; false-positive matches found during development were corrected and the final registry is explicit/source-verified;
- current citation inventory: **242 unique citations**, **130 with PMID**, with **130/130 resolving consistently** against PubMed;
- named policies, guidelines, books and other non-PubMed sources carry direct canonical/bibliographic locators where available.

Canonical locator-enriched Bench commit: `0a8317ba8a2c5978f7a50bb5f13de875153b6782`.

Because provenance is included in `content_hash`, all **68/68** Full Corpus hashes changed. The explicit `sacre-qccs-v1` equivalence gate classified this as **provenance-only drift** with **0 execution/task-semantic differences**. SACRE was re-vendored and re-pinned; the post-repin adapter projection is byte-for-byte identical and the Full Corpus regression suite passes **46/46**.

Current SACRE re-pin merge: `9fa908a45c2447aa97f0473754c434bdb874b19e` (PR #22).  
Current SACRE Full Corpus payload SHA-256: `82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`.

This enrichment changed no scenario/candidate/task semantics and required **no model/QCCS rerun**.

## Current resource state

- 200-family research/disposition program;
- 34 executable Full Corpus families;
- 68 matched concise/detailed records;
- 210 unique family-level candidates;
- task roles: 69 Public / 55 Expert / 86 Framework;
- eight natural candidate geometries;
- 428 unordered cross-source QCCS pairs per representation / 856 per matched concise/detailed pass;
- records remain `status: draft`, `reviewed_by_human: false`;
- 242 unique citations, of which 130 carry a PMID and **130/130 currently resolve consistently**;
- canonical source-locator residual: **0 unresolved citations**;
- whole-document omission review by the current method covers five families; 29 remain unexamined.

## Closed gates — do not redo

The following are complete:

- first-pass generalization audit;
- explicit `sacre-qccs-v1` task contract;
- read-only adapter;
- 34-family / 68-record equivalence gate;
- canonical source-locator enrichment and source-placeholder repair;
- post-enrichment SACRE provenance re-pin and all-record equivalence verification;
- generic candidate/source-role conceptual model;
- first corpus-driven warrant-ontology stress test;
- manuscript Methods/Results construction;
- venue/literature positioning;
- v7 claim/citation audit;
- reviewer-facing submission resource package;
- v8 Highlight compliance and visual QA.

The **current** all-record equivalence result is: **0/68 execution/task-semantic differences**, 68/68 provenance-bearing hashes refreshed after canonical source enrichment, then exact byte equivalence after re-pin. Current scientific reference commits are Bench `0a8317ba8a2c5978f7a50bb5f13de875153b6782` and SACRE `9fa908a45c2447aa97f0473754c434bdb874b19e`; current SACRE payload SHA-256 is `82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`.

The earlier 36/68 hash-refresh event remains historical evidence, not the current pin.

Do not implement schema v2 or a second task merely for submission neatness.

## Two unresolved submission decisions

### 1. Author metadata

Do **not** infer the final author list from other DEWA papers or repository participation. Before the final submission snapshot, explicitly lock:

- ordered authors;
- affiliations;
- corresponding author/email;
- ORCIDs where approved;
- CRediT/contribution statement;
- funding/acknowledgments;
- competing interests.

### 2. Software/tooling license

Bench-authored case content is explicitly CC BY 4.0. The repository currently has **no finalized root software license** and `package.json` has no software-license declaration. Do not silently choose or infer one. License selection is a real author/project decision required before the archival/public-release state and preferably before the final submission snapshot.

## After those two decisions are locked

Proceed directly to:

1. finalize `CITATION.cff` and submission metadata;
2. verify remaining live Patterns article-specific requirements rather than guessing limits;
3. finalize cover letter/front matter;
4. test logged-out reviewer access;
5. run clean-clone validation and task-adapter verification;
6. create immutable submission tag/snapshot plus checksums;
7. write the exact snapshot identifier into manuscript Data and Code Availability;
8. perform final author/coauthor prose review and submit.

## Evidence ceiling

May claim current composition, natural geometry, structural/companion invariants, bounded source-review findings, resource/task/evaluation separation, all-record task equivalence, complete canonical source-locator coverage, and PMID identifier consistency for the 130 PubMed-indexed citations.

May **not** claim independent corpus-wide human source validation, corpus-wide source fidelity, QCCS reliability/construct validity, moral correctness, human-model correspondence, demonstrated method-neutrality across multiple mature tasks, an implemented generic v2 schema, or a mature source-to-policy warrant benchmark.

Independent source review remains a quality/release layer, **not a developmental execution gate**. Confirmatory P3 and human P4 execution remain separately protocol/authorization gated.

**CURRENT NEXT DEPENDENCY: lock author metadata + software-license decision, then freeze the immutable submission snapshot.**
