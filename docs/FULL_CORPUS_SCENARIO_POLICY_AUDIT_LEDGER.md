# Bioethics Bench — Full Corpus Candidate-Universe Audit Ledger

**Created:** 2026-08-30  
**Status:** active completion ledger  
**Scope:** M001–M200  
**Governing standard:** `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`  
**Calibration:** Featured v1 audit + source re-open documents

## Purpose

This ledger tracks the mandatory all-200 audit before Full Corpus v1 freeze.

It is intentionally separate from `docs/FULL_CORPUS_PROGRESS.md`. The older progress file remains development history and records source packets, deep-case drafting, structural executable work, and prior eligibility judgments. A prior `executable`, source-audited, or schema-valid status does **not** count as passing this new audit.

The new review asks whether each case has:

1. an adequate Scenario;
2. an adequate **rich candidate universe**;
3. correct candidate-level provenance/source marks;
4. one or more defensible SACRE projections where useful.

No final resource freeze is permitted until **M001–M200** each have an explicit case-level disposition.

## Audit row schema

Each reviewed case must receive a row with:

| Field | Required value |
|---|---|
| Inventory ID | M001–M200 |
| Featured crosswalk | Fxx or `—` |
| Scenario adequacy | `PASS`, `REVIEW`, or `RECONSTRUCT` |
| Candidate-universe adequacy | `PASS`, `REVIEW`, or `RECONSTRUCT` |
| Total candidate count | integer |
| ✓ Source count | integer |
| Direct-source count | integer |
| Source-informed count | integer |
| Framework-derived count | integer |
| Constructed-comparator count | integer |
| Distinctness | `PASS` / `REVIEW` |
| Provenance accuracy | `PASS` / `REVIEW` |
| Concise/detailed invariance | `PASS` / `REVIEW` |
| Stipulation leverage | `LOW`, `MATERIAL`, or `REVIEW` |
| Available projection(s) | IDs/types or `NONE` |
| Source-grounded projection | `YES`, `NO`, or `NEEDS-EVIDENCE` |
| Expanded projection | `YES`, `NO`, or `NOT-NEEDED` |
| Demonstration richness | `HIGH`, `MEDIUM`, `LOW`, or `N/A` |
| Final disposition | `RETAIN`, `NEW-VERSION`, `EXPAND-UNIVERSE`, `HOLD`, or `RESEARCH-COMPLETE` |
| Audit note | short rationale and path to adjudication |

`✓ Source` counts every candidate whose provenance is defensibly supported by an external empirical, professional, stakeholder, or normative-framework source. It does **not** mean that every sourced candidate is an observed Public preference or an Expert consensus. The provenance subtype remains authoritative.

## Mandatory questions

For every M001–M200 case, answer:

1. Does the Scenario hold the relevant factual, temporal, legal, and institutional state fixed without stipulating away the normative problem?
2. What are the important serious Policy positions for this Scenario, regardless of whether each has direct source support?
3. Is the candidate universe rich enough to preserve the main normative alternatives without becoming repetitive or theatrical?
4. Which candidates genuinely earn ✓ Source?
5. Which candidates are direct-source, source-informed, Framework-derived, or constructed comparators?
6. Are any candidates near-paraphrases, nested variants, slot-filling constructions, merged positions, artificial extremes, or overtranslations from a concern into a Policy?
7. Has an important position been omitted merely because direct source evidence was weak (`source-ceiling compression`)?
8. Are sources and provenance being represented accurately, without a constructed candidate masquerading as a sourced position?
9. Do concise and detailed forms represent the same Scenario and candidate universe for controlled-comparison purposes?
10. Are benchmark stipulations necessary for interpretive consistency, and how much normative leverage do they exert?
11. What SACRE projection(s) are useful for this case: source-grounded, expanded, matched-study, demonstration, direct-grounding, or none?
12. What claims can each projection legitimately support?
13. Is the case research-complete and is any projection especially demonstration-rich? Keep those judgments separate.

## Queue status

| Queue | Inventory range | Status | Notes |
|---|---|---|---|
| Featured calibration | released F01–F20 + crosswalks | **REOPEN UNDER RICH-UNIVERSE MODEL** | The first record-level audit remains useful, but its source-only candidate-count assumptions are superseded. Priority cases F03/F04/F09/F17/F20 should now be reconsidered as candidate-universe/projection problems, not automatically as source-only reconstruction problems. |
| Full Corpus A | M001–M050 | **IN PROGRESS — 10/50 audited** | M001–M010 complete under rich-universe model at `docs/full-corpus/audit-v2/M001-M010-rich-candidate-audit.md`. |
| Full Corpus B | M051–M100 | PENDING all-case audit | Reopen source packets where provenance or universe audit finds a material issue. |
| Full Corpus C | M101–M150 | PENDING all-case audit | Apply same standard regardless of prior geometry or schema validity. |
| Full Corpus D | M151–M175 | PENDING all-case audit | Includes animal / One Health cases; explicitly audit missing serious normative positions and nonhuman representation. |
| Full Corpus E | M176–M200 | PENDING all-case audit | Apply the same Scenario → candidate universe → projection model. |

## Case-level reviewed rows

Add one row here as each underlying M-case completes the new audit. Do not bulk-mark a range complete without case-level adjudication.

| Inventory | Featured | Scenario | Universe | Cand. n | ✓ Source | Direct | Inferred | Framework | Constructed | Distinct | Provenance | C/D | Stipulation | Projections | Source-grounded | Expanded | Demo | Disposition | Note |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---|---|---|---|---|---|---|---|---|---|
| M001 | F01 | PASS | PASS | 6 | 5 | 0 | 3 | 2 | 1 | REVIEW | PASS | PASS | LOW | released F01 source-grounded + future expanded | YES | YES | HIGH | EXPAND-UNIVERSE | Reconcile stale emergency-refusal packet with later M001/F01 elective-surgery identity; do not split blood-product heterogeneity into institutional policies. See `audit-v2/M001-M010-rich-candidate-audit.md`. |
| M002 | — | PASS | PASS | 7 | 6 | 2 | 1 | 3 | 1 | PASS | PASS | PASS | MATERIAL | current 1×2×2 source-grounded + expanded | YES | YES | HIGH | EXPAND-UNIVERSE | Preserve existing asymmetric draft; add substituted-judgment, best-interests, and deferral/support positions to research universe. |
| M003 | — | PASS | PASS | 6 | 4 | 1 | 0 | 3 | 2 | PASS | PASS | PASS | MATERIAL | expanded methodological; time-window perturbation | NO | YES | HIGH | EXPAND-UNIVERSE | Public treatment-preference data do not establish exact search-duration policy. Rich case remains useful without pretending a canonical Public-role policy exists. |
| M004 | — | PASS | PASS | 6 | 5 | 1 | 2 | 2 | 1 | REVIEW | PASS | PASS | LOW | current 2×1×2 source-grounded + expanded | YES | YES | HIGH | EXPAND-UNIVERSE | Preserve current projection; maturity-sensitive graduated comparator requires final distinctness check. |
| M005 | — | PASS | PASS | 7 | 7 | 2 | 3 | 2 | 0 | PASS | PASS | PASS | LOW | current 2×1×2 source-grounded + expanded stakeholder | YES | YES | HIGH | EXPAND-UNIVERSE | Caregiver nondisclosure position belongs in universe with stakeholder provenance, not as patient preference or professional standard. |
| M006 | — | PASS | PASS | 6 | 3 | 2 | 1 | 0 | 3 | PASS | PASS | PASS | LOW | asymmetric source-grounded candidate + expanded | YES | YES | HIGH | EXPAND-UNIVERSE | Patient evidence is disclosure-dominant; compare prompt/staged/risk-managed transparency without manufacturing two Public policies. |
| M007 | — | PASS | PASS | 6 | 5 | 2 | 1 | 2 | 1 | REVIEW | PASS | PASS | MATERIAL | source-grounded candidate + expanded | NEEDS-EVIDENCE | YES | HIGH | EXPAND-UNIVERSE | Referral/nonfacilitation/institutional-access positions are rich; exact empirical Public-role policy needs careful source labeling. |
| M008 | — | PASS | PASS | 6 | 3 | 1 | 0 | 2 | 3 | REVIEW | PASS | PASS | MATERIAL | expanded threshold/channel projections | NO | YES | HIGH | EXPAND-UNIVERSE | Strong confidentiality/protection case; no need to omit serious positions because direct Public-policy evidence is sparse. |
| M009 | — | PASS | PASS | 7 | 6 | 3 | 0 | 3 | 1 | PASS | PASS | PASS | MATERIAL | source-grounded candidate + expanded | YES | YES | HIGH | EXPAND-UNIVERSE | Keep fair-process, informed-nondissent, autonomy, and professional-integrity architectures separate. |
| M010 | — | PASS | PASS | 6 | 6 | 2 | 2 | 2 | 0 | PASS | PASS | PASS | LOW | current 2×2×2 source-grounded | YES | NOT-NEEDED | HIGH | RETAIN | Existing six-candidate field is already rich; do not add a duplicative `use both` seventh candidate. |

**Count note:** provenance counts are audit classifications of the proposed universe. Some candidates draw on both professional evidence and a framework; each is assigned one primary provenance subtype here to keep the columns additive. The candidate-level adjudication text is authoritative where a policy has mixed support.

## Featured calibration relationship

The released Featured records remain historical v1 objects and are not silently rewritten.

The existing Featured audit and source re-open work should now be interpreted through the richer model:

- a source-grounded record may remain valid even when the **candidate universe** should be expanded;
- a source-only asymmetry does not necessarily imply the case lacks a useful expanded SACRE projection;
- a major unsourced normative position can be represented honestly as a constructed comparator rather than omitted;
- a source-grounded projection and an expanded projection may coexist for the same case;
- a confirmed Scenario/provenance defect still requires a new explicit record version.

## Completion gate

This ledger is complete only when all 200 inventory cases have a case-level row containing:

- reviewed Scenario result;
- reviewed candidate-universe result;
- candidate provenance/source counts;
- candidate distinctness/provenance status;
- available SACRE projection(s) and their claim type;
- demonstration-richness classification;
- final disposition;
- short rationale or case-specific adjudication pointer.

The final frozen Bench statistics must be generated from the reviewed machine-readable release object, not manually inferred from this editorial ledger.
