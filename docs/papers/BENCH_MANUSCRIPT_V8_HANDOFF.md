# Bioethics Bench — Manuscript v8 Handoff

**Date:** 2026-08-30  
**Current manuscript:** `CURRENT — Bioethics Bench v8 — Patterns submission-prepared manuscript development draft`  
**Drive:** https://docs.google.com/document/d/14HRYJ1QDDfb7Rhv_QJGQ7siowIVm5BbK/edit

## Stage completed

V8 is a **production-compliance pass on v7**, not a scientific revision. The Methods, Results, figures, tables, abstract, Bigger Picture, references, quantitative claims, and evidence boundaries are unchanged.

The only substantive manuscript-facing production change is replacement of the four v7 Highlights, which were 105–110 characters each, with four general-audience Highlights that are each below the Cell Press 85-character limit:

1. `Normative benchmarks need versioned, source-grounded research objects` — 69 characters.
2. `Thirty-four families yield 68 matched records across eight candidate geometries` — 79 characters.
3. `All 68 reference-task projections reproduce with zero semantic differences` — 74 characters.
4. `Warrant relations separate source claims, policy construction, and task use` — 75 characters.

The draft/version label was updated from v7 to v8. The 291-word abstract and 136-word Bigger Picture were deliberately left unchanged because an exact live Patterns article-specific limit has not yet been verified; no text was shortened by analogy to another Cell Press journal.

## Changed

- four Highlights shortened to <=85 characters;
- manuscript development label advanced to v8;
- no scientific content changed;
- no resource, task, schema, candidate, scenario, provenance, geometry, or evaluation semantics changed.

## Verified

- final DOCX: **15 pages**;
- figures: **4**;
- tables: **5**;
- exact v8 DOCX rendered after the Highlight changes;
- all 15 pages visually inspected page-by-page;
- no clipping, overlap, broken figure text, split table rows, missing references, or pagination defects;
- v8 promoted as the sole `CURRENT` Bench manuscript in Drive;
- v7 preserved as `Bioethics Bench v7 — Patterns-positioned manuscript development draft — superseded source.docx`.

## Product / paper impact

The manuscript is now ready for the remaining **metadata and final-submission decisions** rather than another scientific drafting pass. The submission-facing repository package is already built and CI-clean: Resource Card, Patterns submission/release checklist, archival-release plan, provisional `CITATION.cff`, refreshed public README, submission metadata sheet, cover-letter draft, and the submission-resource-package handoff.

## Evidence status

Unchanged from v7. V8 may report the verified 200-family disposition program; 34-family / 68-record / 210-candidate executable substrate; eight natural candidate geometries; 428/856 pair workload; bounded source-review findings; explicit resource/task/evaluation separation; and all-record `sacre-qccs-v1` equivalence.

V8 does **not** establish independent corpus-wide human source validation, QCCS reliability or construct validity, moral correctness, human-model correspondence, method-neutrality across multiple mature tasks, a production generic v2 schema, or a frozen source-to-policy warrant benchmark.

## Writeback status

- v8 Drive manuscript: promoted;
- v7: preserved as superseded source;
- submission resource package: complete for current development state;
- current repository validation/self-tests: passing after restoration of the task-contract current-cardinality guard;
- no P1/P2/P3/P4 manuscript reopening required by this production-only pass.

## Cross-repository dependency

None. V8 is manuscript/production metadata only. No SACRE re-vendor, re-pin, or model/QCCS rerun is required.

The scientific all-record equivalence reference remains:

- Bench execution-equivalence commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- SACRE re-pin merge commit `4ed4b24ab99d7427195a21393474c02700274ee6`.

The publication-package/current-cardinality repair commit `00615a10d5a72d592dba39ca9b7ec71970d80cda` passed the full repository validation pipeline and deliberate validator self-tests.

## Next dependency

Two decisions now prevent a genuine final submission snapshot:

1. **author metadata** — ordered authors, affiliations, corresponding author, emails, ORCIDs, contribution statement, funding/acknowledgments, and competing interests;
2. **software/tooling license** — Bench-authored case content is CC BY 4.0, but no root software license has been selected; do not infer one.

After those are locked:

- finalize `CITATION.cff` and submission metadata;
- confirm live Patterns article-specific requirements that remain unresolved;
- finalize cover letter/front matter;
- run logged-out reviewer-access and clean-clone validation checks;
- create the immutable submission snapshot/tag/checksum set;
- write that exact snapshot identity into Data and Code Availability.

Source review continues in parallel under the established execution-relevant / provenance-only change rule.

**V8 PRODUCTION-COMPLIANCE STAGE COMPLETE.**
