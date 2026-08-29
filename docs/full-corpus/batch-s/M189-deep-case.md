# M189 — Preventive screening when guideline bodies disagree

**Domain:** primary care / screening ethics  
**Evidence date:** 2026-08-27  
**Research status:** deep case draft

## Decision
**Decision-maker:** primary-care practice.  
**Question:** What mammography screening policy should the practice recommend to average-risk women in their 40s when major guideline bodies differ on interval and framing?

## Scenario
The practice is creating a standard counseling policy for average-risk women aged 40–49. The 2024 USPSTF recommends biennial mammography from age 40 through 74. Current American Cancer Society guidance gives women 40–44 the option to start annual screening and recommends annual screening at 45–54. Benefits include earlier cancer detection; harms include false positives, additional procedures and overdiagnosis. National US survey evidence shows real preference heterogeneity: some women strongly prefer screening now/annually, while a sizable share prefer delay after balanced decision information. The practice must decide whether to recommend biennial screening from 40, recommend annual screening beginning no later than 45 with optional annual screening at 40–44, or explicitly treat frequency in the 40s as a shared decision after standardized benefit/harm counseling.

## Evidence layers
**Public/affected:** national probability-based preference research among women 39–49 directly shows screening-timing heterogeneity and movement toward delayed screening after decision information; earlier studies show strong annual-screening preference among many women.

**Professional:** USPSTF and ACS provide genuinely action-distinct current screening schedules.

**Frameworks:** maximize mortality benefit; minimize overdiagnosis/false-positive burden; preference-sensitive preventive care.

## Candidate families
1. biennial mammography age 40–74;
2. annual screening in the 40s under ACS schedule;
3. standardized shared decision over timing/frequency within guideline-supported options.

## Risks
Keep population average risk fixed and do not import high-risk MRI indications. Evidence and guideline dates must remain explicit.

## References
USPSTF Breast Cancer Screening (2024); current ACS screening guidance; PMID 39008858; PMID 37155576; related preference studies.

## Executable judgment
Provisional `executable-2x2x2`, subject to candidate audit. This is a rare everyday-practice case with both direct affected preference pluralism and genuine current expert policy divergence.

## Candidate audit result — 2026-08-28

**Executable.** This section supersedes the provisional judgment above, which was conditional on a
candidate audit. The audit has now been performed against the underlying sources.

**Canonical frame:** `natural@1.0.0`
**Geometry:** `2 public × 2 expert × 3 framework`
**Cross-source pairs:** 16
**Required aggregation:** Mean.

**Expert layer verified as two action-distinct published policies.** This is what makes M189
executable, and it is rare in the corpus: the divergence is between guidelines in force, not between
readings of one guideline. The 2024 USPSTF recommendation is biennial screening mammography for
women aged 40 to 74 at grade B, and it recommends this for women aged 40 to 49 *rather than*
individualizing the decision — a reversal of its 2016 position, and a point that also bears on the
third position family, since USPSTF now explicitly declines to make the 40s a shared decision.
Current American Cancer Society guidance gives women 40-44 the option to begin annual screening and
recommends annual screening from 45 to 54. At the fixed scenario — an average-risk woman aged 45 to
49 — one schedule yields a mammogram every two years and the other every year. They diverge on the
represented action.

**Public layer is executable as source-informed inference, not as direct policy evidence.** The
national probability-based survey of 495 women aged 39-49 (Ann Intern Med 2024;177:1069-1077,
PMID 39008858) measures respondents' preferences about *their own* screening, not about what a
practice should recommend, so both public candidates state that bridge rather than eliding it. What
makes two candidates defensible rather than one is the size and direction of the movement: 27.0%
preferred to delay screening before the decision aid and 38.5% after, while the share never wanting
mammography did not rise (5.4% to 4.3%). A majority still preferred screening at their current age,
which grounds `pub1`; a preference distribution that shifts by eleven points on disclosure, without
turning into refusal, grounds `pub2`. Both are orientations toward a policy, not a mean difference
in attitude.

**Framework layer holds three distinct actions** at the fixed facts: annual from 40 on
mortality-benefit reasoning; biennial on iatrogenic-burden reasoning that treats overdiagnosis and
cascade testing as harms the programme inflicts; and no standing recommendation on
preference-sensitivity reasoning.

**One citation could not be verified.** The dossier's reference list included PMID 37155576 as a
second public source. Repeated searches resolve that identifier to the same Annals study already
cited, and no distinct record could be confirmed. It is therefore not used in the record, and the
public layer rests on the single verified survey. A reviewer should either correct the identifier or
drop it.

`reviewed_by_human` remains false. The audit establishes source-to-policy alignment at the
represented action; it is not a substitute for independent editorial review.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 2 expert × 3 framework`  
**Cross-source pairs:** 16  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m189-mammography-screening-guideline-divergence-natural-concise-v1`, `m189-mammography-screening-guideline-divergence-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / source-informed-policy-inference | 2 |
| expert / direct-policy-evidence | 2 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
