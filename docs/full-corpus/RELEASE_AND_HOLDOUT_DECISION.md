# Full Corpus v1 — Release and Confirmatory-Holdout Decision

**Decision date:** 2026-08-27  
**Applies to:** Bioethics Bench Full Corpus v1  
**Branch:** `research/full-corpus-v1`

## Decision

Bioethics Bench Full Corpus v1 is a public research resource. The 200-case corpus will **not** reserve a confirmatory holdout inside this repository.

P3 validation will instead use a **separately constructed, previously unseen confirmatory corpus** created for that purpose after the public Bench has been completed. No case committed to or publicly released from Bioethics Bench may later be reclassified as a confirmatory holdout.

This means:

- the 200-case Full Corpus may be researched, reviewed and ultimately published without attempting to preserve a hidden subset for P3;
- the existing 20-case Featured Collection remains public and can never serve as the P3 holdout;
- executable eligibility remains an evidence/construction judgment and is unrelated to holdout status;
- future P3 confirmatory material must be planned and stored outside this public repository until its confirmatory use is complete.

## Reason

The Bench and the P3 confirmatory corpus have different research functions. Bioethics Bench is intended to be inspectable, reusable and source-grounded. P3 requires genuinely unseen material for confirmatory validation. Trying to make one public resource perform both roles would weaken both.

## Implementation consequence

The validator rule rejecting committed `confirmatory-holdout` records is consistent with this decision. Full-corpus records should never use that status. Before any future P3 confirmatory corpus is constructed, its storage, access and exposure rules must be specified separately from Bioethics Bench.
