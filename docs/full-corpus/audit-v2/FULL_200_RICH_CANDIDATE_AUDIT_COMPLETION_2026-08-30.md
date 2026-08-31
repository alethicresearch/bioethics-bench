# Bioethics Bench — Full 200 Rich-Candidate Audit Completion Checkpoint

**Date:** 2026-08-30  
**Status:** research/editorial case-level audit complete; machine-readable release work remains open

## Completed in this pass

Bioethics Bench now has a substantive rich-candidate audit for every planned inventory case, **M001–M200**.

The governing architecture is:

> **Scenario → rich candidate universe → declared SACRE projection**

rather than:

> source class → fixed candidate quota → eligibility.

The detailed audits are stored in `docs/full-corpus/audit-v2/` as twenty ten-case files from `M001-M010-rich-candidate-audit.md` through `M191-M200-rich-candidate-audit.md`.

The compact canonical index is:

- `docs/full-corpus/audit-v2/FULL_200_RICH_CANDIDATE_INDEX.md`

The canonical coordination ledger has been updated:

- `docs/FULL_CORPUS_SCENARIO_POLICY_AUDIT_LEDGER.md`

## Quantitative audit result

- Cases audited: **200/200**
- Candidate-universe range: **5–7** serious Policy positions per case
- Mean candidate-universe size: **6.49**
- Demonstration richness:
  - VERY HIGH: **113**
  - HIGH: **79**
  - MEDIUM-HIGH: **5**
  - MEDIUM: **3**

These counts are editorial audit statistics, not final frozen release statistics. Final release statistics must be generated from the validated machine-readable release object.

## Ontology repairs

### M047

The old M047 abortion-conscience case duplicated M007. M047 has been replaced with:

> **Permanent contraception requested by a young childfree adult**

Files:
- `docs/full-corpus/batch-e/M047-identity-replacement-2026-08-30.md`
- `docs/full-corpus/batch-e/M047-deep-case.md`
- `docs/full-corpus/audit-v2/M047-rich-candidate-audit-supersession.md`

The replacement uses current professional guidance that reproductive autonomy is primary and age/parity thresholds should not be imposed, while preserving regret, longitudinal counseling, future-self concerns, and stronger safeguards as separate provenance-aware positions where appropriate.

### M187

The old M187 bedside adolescent-confidentiality case duplicated M004. M187 has been replaced with:

> **Adolescent EHR and patient-portal confidentiality**

Files:
- `docs/full-corpus/batch-s/M187-identity-replacement-2026-08-30.md`
- `docs/full-corpus/batch-s/M187-deep-case.md`
- `docs/full-corpus/audit-v2/M181-M190-rich-candidate-audit.md`

The replacement is a distinct informatics-governance problem: granular segmentation, proxy portal access, adolescent access, health-information exchange and billing/EOB leakage.

## Featured crosswalks

The audit identifies the following likely underlying-family crosswalks. These must be finalized before release so Featured records and Full Corpus records are not counted as independent duplicate families:

- M001 ↔ F01
- M101 ↔ F10
- M138 ↔ F20
- M156 ↔ F17
- M160 ↔ F18

Released Featured v1 remains immutable. A richer successor projection should be separately versioned rather than silently editing the released record.

## Stale development state corrected

M189 now has a current source-grounded **2 Public × 2 Expert × 3 Framework** construction. Older Batch-S text that described the batch as producing zero executable families is development history and must not override the later M189 deep case or audit-v2 disposition.

## Main scientific conclusion of the reconstruction

The old source-first construction method was valuable for provenance discipline but too often treated source-class plurality as a prerequisite for intellectual completeness. This created **source-ceiling compression**: professionally convergent or empirically under-sampled cases could be downgraded even when the underlying normative field was rich.

The revised model preserves both requirements:

1. source/provenance claims remain strict and candidate-specific;
2. serious normative positions are retained even when they must be labeled source-informed, Framework-derived, or constructed comparators.

A source-grounded SACRE projection therefore measures convergence among defensibly represented source positions. An expanded projection measures the represented broader normative field. Those are different studies and must be reported differently.

## Remaining work before final Full Corpus freeze

### 1. Machine-readable transcription

Transcribe the audited candidate universes into the Bench's machine-readable schema. Provenance must be stored independently of Public/Expert/Framework role.

### 2. Projection manifests

For each case intended for SACRE execution, create explicit projection objects defining:

- selected candidate IDs;
- assigned Public / Expert / Framework roles;
- provenance state;
- geometry;
- aggregation rule;
- purpose/claim type;
- source-grounded versus expanded status.

### 3. Independent review

Run the planned scholarly/resource review across the full corpus, using specialist review where flagged. Review should focus on factual fidelity, source scope, candidate distinctness, non-stereotyping, temporal/jurisdictional accuracy, and Scenario consistency.

### 4. Representation invariance

Ensure concise and detailed forms instantiate the same Scenario and candidate universe. Differences in detail must not alter eligibility, risk thresholds, legal state, available alternatives, or candidate interpretation.

### 5. Validation and freeze

Run citation/locator checks, source-mark audit, schema validation, pair-count and aggregation validation, regression checks, release build checks, and final statistical generation. Only then freeze/version Full Corpus v1.

## Downstream P3 implication

The P3 computational-validation freeze must use a **final, reviewed Bench release or preregistered frozen subset plus an explicit projection manifest**. The interrupted earlier census and older source-count geometry are developmental evidence only. The rich-universe audit does not itself authorize a confirmatory P3 run.

## Current completion statement

> **Bioethics Bench now has a complete 200-case research-level Scenario/candidate-universe audit. The next phase is implementation, independent scholarly review, projection freezing, and release validation—not further broad case ideation.**
