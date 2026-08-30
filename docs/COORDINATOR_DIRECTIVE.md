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

This repair changed no executable candidate/scenario/task semantics and requires no model rerun.

## Current resource state

- 200-family research/disposition program;
- 34 executable Full Corpus families;
- 68 matched concise/detailed records;
- 210 unique family-level candidates;
- task roles: 69 Public / 55 Expert / 86 Framework;
- eight natural candidate geometries;
- 428 unordered cross-source QCCS pairs per representation / 856 per matched concise+detailed pass;
- records remain `status: draft`, `reviewed_by_human: false`;
- 122/122 recorded PMIDs currently resolve;
- whole-document omission review by the current method covers five families; 29 remain unexamined.

## Closed gates — do not redo

The following are complete:

- first-pass generalization audit;
- explicit `sacre-qccs-v1` task contract;
- read-only adapter;
- 34-family / 68-record equivalence gate;
- generic candidate/source-role conceptual model;
- first corpus-driven warrant-ontology stress test;
- manuscript Methods/Results construction;
- venue/literature positioning;
- v7 claim/citation audit;
- reviewer-facing submission resource package;
- v8 Highlight compliance and visual QA.

The all-record equivalence result remains: **0/68 execution/task-semantic differences**, 36/68 stale provenance-bearing hashes in the older SACRE vendor state, then exact byte equivalence after re-pin. Scientific reference commits remain Bench `077b36ff1eb9662e93549b1f4261691960cfa605` and SACRE `4ed4b24ab99d7427195a21393474c02700274ee6`.

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

May claim current composition, natural geometry, structural/companion invariants, bounded source-review findings, resource/task/evaluation separation, and all-record task equivalence.

May **not** claim independent corpus-wide human source validation, corpus-wide source fidelity, QCCS reliability/construct validity, moral correctness, human-model correspondence, demonstrated method-neutrality across multiple mature tasks, an implemented generic v2 schema, or a mature source-to-policy warrant benchmark.

Independent source review remains a quality/release layer, **not a developmental execution gate**. Confirmatory P3 and human P4 execution remain separately protocol/authorization gated.

**CURRENT NEXT DEPENDENCY: lock author metadata + software-license decision, then freeze the immutable submission snapshot.**
