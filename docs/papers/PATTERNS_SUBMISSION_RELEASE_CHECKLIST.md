# Bioethics Bench — Patterns Submission & Release Checklist

**Primary target:** *Patterns* (Cell Press), Resource-style submission  
**Manuscript frontier:** Bioethics Bench v7  
**Status:** submission package in preparation; public archival release not yet frozen

This checklist separates **what is needed to submit the paper for peer review** from **what is needed to declare a durable public resource release**. Those are deliberately different gates.

## A. Scientific manuscript — current state

- [x] Submission-facing title and abstract
- [x] Patterns-style Highlights
- [x] Patterns-style Bigger Picture framing
- [x] Introduction and related-work positioning
- [x] Explicit corpus construction / eligibility Methods
- [x] Quantitative corpus geometry Results
- [x] Stipulation and companion-representation controls
- [x] Explicit `sacre-qccs-v1` task method
- [x] All-record adapter-equivalence reproducibility result
- [x] Validation/release architecture
- [x] Data and code availability section
- [x] Full-document visual QA
- [x] Claim/citation audit for v7
- [ ] Final author/coauthor prose review
- [ ] Final author list, affiliations, corresponding author, contribution statement
- [ ] Conflict-of-interest declaration
- [ ] Funding/acknowledgment statement
- [ ] Final cover letter

## B. First-submission resource access

Cell Press emphasizes making the data and code underlying a paper available to reviewers and clearly describing access. For Bioethics Bench, the practical submission package should therefore make the following inspectable without requiring reconstruction from the manuscript alone.

- [x] Public source repository exists
- [x] Machine-readable case records exist
- [x] Versioned schemas exist
- [x] Validation scripts exist
- [x] Release-candidate manifest exists
- [x] Explicit task contract exists
- [x] Adapter/equivalence verification exists
- [x] Content license exists for Bench-authored case material
- [x] Submission-facing Resource Card exists (`docs/RESOURCE_CARD.md`)
- [ ] Repository-level citation metadata finalized for the submission snapshot
- [ ] Public README updated to current resource state
- [ ] Exact submission-snapshot commit recorded in manuscript and cover letter
- [ ] Reviewer-facing access instructions tested from a logged-out/private browser
- [ ] One command or short documented sequence reproduces structural validation from a clean clone
- [ ] One documented sequence reproduces the `sacre-qccs-v1` adapter-equivalence check

## C. Patterns/Cell Press front matter and production items

The exact Editorial Manager fields and production requirements should be rechecked at the moment of submission because journal forms can change. Current Cell Press guidance supports the following preparation order.

- [x] Highlights drafted
- [x] Bigger Picture text drafted
- [ ] Verify each Highlight against the live character limit at submission
- [ ] In Brief/eTOC blurb if requested by the live journal workflow
- [ ] Graphical Abstract if requested for the selected article type/final-file stage
- [ ] Key Resources Table / STAR-style components only if the live Patterns instructions require them for this article type
- [ ] Separate high-resolution figure files prepared if requested
- [ ] Combined reviewer PDF checked after Editorial Manager conversion

## D. Citation and identity package

- [ ] `CITATION.cff` finalized with the locked author list
- [ ] Final manuscript citation inserted into README once a preprint/DOI or stable bibliographic form exists
- [ ] Repository citation distinguishes project-level citation from record-level citation
- [x] Record-level citation rule defined: `record_id` + `version` + `content_hash`
- [ ] Release-level citation rule defined using immutable release identifier + manifest checksum
- [ ] ORCIDs added where available and approved
- [ ] Preferred citation exported in BibTeX and CFF form

## E. Licensing and rights

- [x] Bench-authored case content license: CC BY 4.0
- [x] Third-party source material explicitly excluded from relicensing
- [x] Adapted/summarized source handling documented
- [ ] **Software license selected and added at repository root**
- [ ] Package metadata updated to match the chosen software license
- [ ] Confirm figure/artwork rights and attribution for all manuscript figures

**Current blocker:** the repository says tooling has a separate software license, but no root software-license file or package license declaration is currently present. Do not infer or silently choose a license.

## F. Submission snapshot — recommended freeze

A manuscript submission snapshot should be immutable enough for reviewers to inspect even though it remains a developmental resource.

Before submission:

- [ ] Run the full repository validation suite
- [ ] Record the exact passing commit SHA
- [ ] Build/regenerate the Full Corpus manifest from that commit
- [ ] Confirm all 68 expected records are represented once
- [ ] Confirm companion-pair invariants
- [ ] Confirm geometry totals and 428/856 pair-count reconstruction
- [ ] Confirm `sacre-qccs-v1` task contract version and hash/identity
- [ ] Confirm SACRE vendor pin/equivalence state
- [ ] Create immutable submission tag or equivalent archival reference
- [ ] Capture a checksum list for manuscript-linked machine-readable artifacts
- [ ] Add the snapshot identifier to manuscript Data and Code Availability

A submission snapshot may remain explicitly **draft / not independently human-reviewed**. Peer-review submission does not require pretending that the resource has reached its later public-release state.

## G. Public archival release — separate later gate

Do not conflate acceptance/submission with public validation.

Before calling a corpus version a formal public release:

- [ ] Define the exact review state required for the release label
- [ ] Complete or explicitly scope independent source-to-policy review for the released set
- [ ] Resolve release-blocking source/warrant defects
- [ ] Regenerate all affected record hashes and manifest entries
- [ ] Re-run structural validation
- [ ] Re-run adapter equivalence if executable semantics changed
- [ ] Re-run affected model/task outputs only when execution-relevant semantics changed
- [ ] Create immutable Git tag/release
- [ ] Archive the release in a DOI-bearing repository where feasible
- [ ] Deposit manifest/checksums with the archive
- [ ] Freeze release citation metadata
- [ ] Publish release notes describing changes from the submission snapshot
- [ ] Mark each released record's exposure/review state accurately

## H. Claims that must remain out of the submission unless new evidence is added

Do not describe the current resource as:

- independently human-validated across the full corpus;
- source-fidelity validated corpus-wide;
- a moral answer key;
- evidence of QCCS reliability or construct validity;
- evidence of human-model correspondence;
- method-neutral across multiple mature task families;
- a production generic v2 schema;
- a frozen source-to-policy warrant benchmark.

## I. Immediate next actions

1. Update the public README from the older prospective/SACRE-centric framing to the current resource/task/evaluation architecture.
2. Add provisional repository citation metadata without inventing a final paper author list.
3. Document the archival-release plan and distinguish submission snapshot from public release.
4. Run a clean-clone validation/accessibility check.
5. Lock author/coauthor metadata and choose the software license before the final submission snapshot.
