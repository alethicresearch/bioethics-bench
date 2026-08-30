# Bioethics Bench — Patterns Submission Metadata

**Manuscript:** Bioethics Bench v7 — Patterns-positioned manuscript development draft  
**Primary target:** *Patterns* (Cell Press)  
**Proposed article type:** Resource-style submission; verify exact live Editorial Manager label at submission  
**Status:** submission metadata preparation

## Core manuscript metadata

**Title**  
Bioethics Bench: Source-grounded normative research objects for reproducible computational bioethics

**Working short title**  
Bioethics Bench

**Keywords**  
computational bioethics; evaluation science; benchmark design; provenance; normative AI; research infrastructure

**Current manuscript length**  
15 rendered pages

**Figures**  
4

**Tables**  
5

## Abstract

Current v7 abstract length: **291 words**.

Do not shorten solely by analogy to another Cell Press journal. Verify the live *Patterns* article-type limit in Editorial Manager / current author instructions first. If the live limit is lower than 291 words, produce a venue-compliant compressed abstract without changing the paper's evidence ceiling.

## Highlights

Current v7 Highlights are scientifically appropriate but exceed the Cell Press general production rule of 85 characters per Highlight.

Current character counts, including spaces:

1. 105 characters — Normative evaluation requires versioned, source-grounded research objects rather than moral labels alone.
2. 110 characters — Thirty-four executable families yield 68 matched records across eight evidence-qualified candidate geometries.
3. 107 characters — An explicit SACRE/QCCS adapter reproduces all 68 task projections with zero execution-semantic differences.
4. 107 characters — Warrant relations separate what sources assert, how policies are constructed, and how tasks later use them.

### Recommended compliant replacements

1. **69 characters** — Normative benchmarks need versioned, source-grounded research objects
2. **79 characters** — Thirty-four families yield 68 matched records across eight candidate geometries
3. **74 characters** — All 68 reference-task projections reproduce with zero semantic differences
4. **75 characters** — Warrant relations separate source claims, policy construction, and task use

These retain the current scientific claims while removing acronyms and staying below 85 characters.

## The Bigger Picture

Current v7 Bigger Picture length: **136 words**.

Current text already serves the intended broad-audience function: it explains why normative benchmark construction itself is part of the measurement apparatus and distinguishes inspectability/reproducibility from moral truth.

Verify the live *Patterns* length limit at submission. Do not expand it further unless the journal requests a different form.

## Authors and affiliations — unresolved submission blocker

The current v7 development manuscript contains **no author line or affiliations in the front matter**. Do not infer the final author list from program participation or prior papers.

Before the final submission snapshot, lock:

- ordered author list;
- affiliations;
- corresponding author;
- email;
- ORCIDs where available and approved;
- author-contribution statement;
- funding/acknowledgments;
- conflict-of-interest declaration.

## Data and code availability

**Working repository**  
https://github.com/alethicresearch/bioethics-bench

**Project site**  
https://bioethicsbench.com

**Resource Card**  
`docs/RESOURCE_CARD.md`

**Release-candidate manifest**  
`releases/full-corpus-v1-completion-candidate/manifest.json`

**First mature task contract**  
`docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`  
`tasks/sacre-qccs-v1/task-contract.json`

**All-record equivalence reference**  
Bench execution-equivalence commit: `077b36ff1eb9662e93549b1f4261691960cfa605`  
SACRE re-pin merge commit: `4ed4b24ab99d7427195a21393474c02700274ee6`

**Current publication-package validation commit**  
`00615a10d5a72d592dba39ca9b7ec71970d80cda`

The final manuscript should cite the exact immutable **submission-snapshot** commit/tag created immediately before submission, while retaining the earlier commit as the specific execution-equivalence reference.

## Licensing

**Bench-authored case content:** CC BY 4.0.  
**Third-party source material:** not relicensed.  
**Software/tooling:** no finalized root software license at present.

Software-license selection is a submission/public-release metadata decision that remains unresolved. Do not describe the repository as open-source software under a named license until that decision is made and written into the repository.

## Current verified scientific state for submission forms / cover letter

- 200-family research/disposition program.
- 34 current executable Full Corpus families.
- 68 matched concise/detailed records.
- 210 unique family-level candidates.
- Eight current evidence-qualified candidate geometries.
- 428 unordered cross-source reference-task pairs per representation; 856 across one concise/detailed pass.
- Current records remain `status: draft` and `reviewed_by_human: false`.
- All-record `sacre-qccs-v1` task projection verified across 68 records.
- 0 execution/task-semantic differences in the equivalence test.
- 36 stale content hashes in the prior SACRE vendor state, classified as provenance-only drift.
- Post-repin adapter projection and SACRE vendor payload byte-for-byte identical.
- Current repository validation and deliberate self-tests pass.

## Claims not to enter into submission metadata

Do not describe Bioethics Bench as:

- a moral answer key;
- independently human-validated across the full corpus;
- corpus-wide source-fidelity validated;
- evidence of QCCS reliability or construct validity;
- evidence of human-model correspondence;
- method-neutral across multiple mature task families;
- a production generic v2 schema;
- a released source-to-policy warrant benchmark.

## Suggested subject-area / editor-facing descriptors

Use descriptors that foreground the paper's actual contribution:

- data/evaluation science;
- research infrastructure;
- reproducibility;
- benchmark methodology;
- provenance and dataset documentation;
- computational social/ethical science;
- AI evaluation;
- computational bioethics.

Avoid positioning the paper as primarily an LLM performance comparison or as a philosophical argument for a single substantive moral view.

## Remaining pre-submission checklist

1. Lock authors/affiliations/ORCIDs/corresponding author.
2. Choose software/tooling license.
3. Replace v7 Highlights with the compliant versions above.
4. Verify live *Patterns* abstract, Bigger Picture, graphical-abstract, and file requirements.
5. Finalize cover letter.
6. Freeze and validate the immutable submission snapshot.
7. Test logged-out reviewer access to repository, data, task contract, and documentation.
8. Update manuscript Data and Code Availability with the exact snapshot identifier.
