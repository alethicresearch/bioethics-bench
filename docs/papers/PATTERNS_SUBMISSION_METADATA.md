# Bioethics Bench — Patterns Submission Metadata

**Manuscript:** Bioethics Bench v8 — Patterns submission-prepared manuscript development draft  
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

Current v8 abstract length: **291 words**.

Do not shorten solely by analogy to another Cell Press journal. Verify the live *Patterns* article-type limit in Editorial Manager / current author instructions first. If the live limit is lower than 291 words, produce a venue-compliant compressed abstract without changing the paper's evidence ceiling.

## Highlights

V8 implements the Cell Press general production constraint used for the submission-prepared draft. All four current Highlights are below 85 characters:

1. **69 characters** — Normative benchmarks need versioned, source-grounded research objects
2. **79 characters** — Thirty-four families yield 68 matched records across eight candidate geometries
3. **74 characters** — All 68 reference-task projections reproduce with zero semantic differences
4. **75 characters** — Warrant relations separate source claims, policy construction, and task use

Do not restore the longer v7 Highlights unless a journal-specific instruction requires a different form.

## The Bigger Picture

Current v8 Bigger Picture length: **136 words**.

Current text already serves the intended broad-audience function: it explains why normative benchmark construction itself is part of the measurement apparatus and distinguishes inspectability/reproducibility from moral truth.

Verify the live *Patterns* length limit at submission. Do not expand it further unless the journal requests a different form.

## Authors and affiliations — unresolved submission blocker

The current v8 development manuscript contains **no locked author line or affiliations in the front matter**. Do not infer the final author list from program participation or prior papers.

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

**Current locator-enriched all-record equivalence reference**  
Bench resource commit: `0a8317ba8a2c5978f7a50bb5f13de875153b6782`  
SACRE re-pin merge commit (PR #22): `9fa908a45c2447aa97f0473754c434bdb874b19e`  
SACRE Full Corpus payload SHA-256: `82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`

The final manuscript should cite the exact immutable **submission-snapshot** commit/tag created immediately before submission. The locator-enriched equivalence references above remain the scientific reference for the current resource→task projection even if later documentation-only commits advance repository `main`.

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
- **242 unique Full Corpus citations**.
- **130 PMID-bearing citations; 130/130 resolve consistently against PubMed**.
- **0 unresolved canonical source locators** across all 68 Full Corpus records.
- Traceable internal research-packet placeholders have been replaced with their underlying external sources.
- All-record `sacre-qccs-v1` task projection verified across 68 records after the locator enrichment.
- **0 execution/task-semantic differences** in the current equivalence test.
- **68/68 resource hashes changed**, classified as provenance-only drift because source/provenance metadata is part of whole-resource identity.
- Post-repin adapter projection and SACRE vendor payload byte-for-byte identical.
- SACRE Full Corpus regression suite passes **46/46** and the main-branch post-merge equivalence workflow passes.
- No model/QCCS rerun was required or performed.

Complete source-locator coverage and PMID resolution are traceability/identifier claims. They are **not** corpus-wide source-fidelity validation.

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

1. Lock authors/affiliations/ORCIDs/corresponding author/contributions/funding/competing interests.
2. Choose software/tooling license.
3. Verify live *Patterns* abstract, Bigger Picture, graphical-abstract, and file requirements.
4. Finalize cover letter/front matter with locked author metadata.
5. Freeze and validate the immutable submission snapshot.
6. Test logged-out reviewer access to repository, data, task contract, and documentation.
7. Update manuscript Data and Code Availability with the exact snapshot identifier.
8. Conduct final author/coauthor prose review and submit.
