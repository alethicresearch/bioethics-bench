# Bioethics Bench — Full Corpus Scenario / Policy Audit Ledger

**Created:** 2026-08-30  
**Status:** active completion ledger  
**Scope:** M001–M200  
**Governing standard:** `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`  
**Calibration:** `docs/FEATURED_SCENARIO_POLICY_AUDIT_2026-08-30.md`

## Purpose

This ledger tracks the mandatory Stage B audit of the complete planned Bioethics Bench before Full Corpus v1 freeze.

It is intentionally separate from `docs/FULL_CORPUS_PROGRESS.md`. The older progress file remains development history and records source packets, deep-case drafting, structural executable work, and prior eligibility judgments. A prior `executable`, source-audited, or schema-valid status does **not** count as passing this new audit.

No final resource freeze is permitted until **M001–M200** each have an explicit Scenario / Policy-representation disposition.

## Audit row schema

Each reviewed case must receive a row with:

| Field | Required value |
|---|---|
| Inventory ID | M001–M200 |
| Featured crosswalk | Fxx or `—` |
| Scenario adequacy | `PASS`, `REVIEW`, or `RECONSTRUCT` |
| Source→Policy fidelity | `PASS`, `REVIEW`, or `RECONSTRUCT` |
| Public natural count | integer or `0` |
| Expert natural count | integer or `0` |
| Framework natural count | integer or `0` |
| Natural geometry | `P × E × F` or `—` |
| Within-pool distinctness | `PASS` / `REVIEW` |
| Cross-source independence | `PASS` / `REVIEW` |
| Concise/detailed invariance | `PASS` / `REVIEW` |
| Stipulation leverage | `LOW`, `MATERIAL`, or `REVIEW` |
| SACRE suitability | `SUITABLE`, `NOT-SUITABLE`, or `NEEDS-EVIDENCE` |
| Demonstration richness | `HIGH`, `MEDIUM`, `LOW`, or `N/A` |
| Final disposition | `RETAIN`, `NEW-VERSION`, `HOLD`, or `RESEARCH-COMPLETE-NOT-EXECUTABLE` |
| Audit note | short rationale and link/path to adjudication |

## Mandatory questions

For every M001–M200 case, answer:

1. Does the Scenario hold the relevant factual, temporal, legal, and institutional state fixed without stipulating away the normative problem?
2. Does each Public / affected-community candidate have defensible grounding in that source domain?
3. Does each Expert / professional candidate have defensible grounding and represent a distinct professional position rather than a clause of one integrated policy?
4. Were the major serious Ethical Framework position families actively sought, and is every reasoning bridge defensible?
5. What is the natural candidate count in each source domain after review?
6. Are any candidates near-paraphrases, nested variants, slot-filling constructions, merged positions, or overtranslations from a concern/value into a Policy?
7. Are sources sufficiently independent across source domains for the represented cross-source convergence claim?
8. Do concise and detailed forms represent the same Scenario and Policy field?
9. Are benchmark stipulations necessary for interpretive consistency, and how much normative leverage do they exert?
10. Is the case research-complete, SACRE-suitable, and/or demonstration-rich? Keep these judgments separate.

## Queue status

| Queue | Inventory range | Status | Notes |
|---|---|---|---|
| Featured calibration | released F01–F20 + crosswalks | **IN PROGRESS / CALIBRATED** | Record-level audit complete; priority source re-open complete for F03/F04/F09/F17/F18/F20; proposed next-version sheets created for F03/F04/F09/F17/F20. |
| Full Corpus A | M001–M050 | PENDING Stage B audit | Existing deep files and executable judgments are inputs, not exemptions. |
| Full Corpus B | M051–M100 | PENDING Stage B audit | Reopen source packets where representational audit finds a material issue. |
| Full Corpus C | M101–M150 | PENDING Stage B audit | Apply same standard regardless of prior geometry or schema validity. |
| Full Corpus D | M151–M175 | PENDING Stage B audit | Includes animal / One Health cases; explicitly audit Framework completeness and nonhuman representation. |
| Full Corpus E | M176–M200 | PENDING Stage B audit | Apply same Scenario-first construction standard. |

## Case-level reviewed rows

Add one row here as each underlying M-case completes Stage B review. Do not bulk-mark a range complete without case-level adjudication.

| Inventory | Featured | Scenario | Source→Policy | P | E | F | Geometry | Distinctness | Independence | C/D invariant | Stipulation | SACRE | Demo | Disposition | Note / adjudication |
|---|---|---|---|---:|---:|---:|---|---|---|---|---|---|---|---|---|

## Featured calibration relationship

The released Featured cases are audited first under `docs/FEATURED_SCENARIO_POLICY_AUDIT_2026-08-30.md` and the priority source-reopen documents. When a Featured case is crosswalked to an M-inventory case, carry its finding into this ledger only after confirming that the underlying inventory case represents the same scholarly object.

Featured v1 bytes and hashes remain historical released objects. A confirmed substantive defect is handled through an explicit new version, never silent mutation.

## Completion gate

This ledger is complete only when all 200 inventory cases have a case-level row containing:

- reviewed Scenario result;
- reviewed source-to-Policy result;
- natural candidate geometry or an explicit reason no canonical executable field exists;
- SACRE suitability;
- demonstration-richness classification;
- final disposition;
- short rationale or case-specific adjudication pointer.

The final frozen Bench statistics must be generated from the reviewed release object, not manually inferred from this editorial ledger.
