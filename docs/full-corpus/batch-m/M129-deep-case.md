# M129 — Disability weights and QALYs in coverage decisions

**Case-family identity:** M129  
**Primary domain:** health technology assessment / disability justice  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** public health-technology assessment body.  
**Decision question:** May a health system use QALY-based cost-effectiveness when disability groups argue that conventional quality weights can systematically undervalue benefits to people living with disability?

## Scenario pair
**Concise:** A public payer evaluates an expensive treatment for a progressive condition affecting people who already live with substantial disability. Conventional QALY analysis values both survival and health-related quality of life, but disability advocates argue that some preference weights make years lived with disability count less and can therefore undervalue life extension. The agency must decide whether to retain standard QALYs, use QALYs with equity/severity modifiers and complementary measures, or replace disability-sensitive quality weighting with a measure that gives equal value to life extension while considering functional benefit separately.

**Detailed:** A national HTA agency is evaluating a treatment that extends life and improves some function for people with a severe chronic disability but does not restore them to population-average health. Standard cost-effectiveness modeling uses QALYs derived from health-state utilities. Disability advocates argue that this can encode public preferences about living with disability and make identical survival gains appear less valuable for people starting from lower measured quality of life. The agency also recognizes that QALYs capture treatment benefits beyond survival and permit comparisons across interventions. Current HTA practice offers alternatives rather than a simple binary: NICE uses QALYs but permits severity and other decision modifiers; ICER reports equal-value life years alongside QALYs. The agency must decide what measurement rule should govern reimbursement decisions.

## Source architecture
NICE's current methods treat QALYs as the reference-case outcome while explicitly allowing decision modifiers, including severity weighting and deliberative factors beyond QALYs. ICER uses QALYs but also reports equal-value life years, which assign the same value to a year of life extension regardless of baseline quality of life. Disability critiques focus on whether health-state preference weights encode discriminatory valuations of lives with disability.

## Serious policy families
- retain standard QALY cost-effectiveness with equal QALY weighting;
- use QALYs with explicit severity/equity modifiers and complementary measures;
- use an equal-value life-extension metric for survival while evaluating quality/function benefits separately.

## Normative bridges
**Comparability/efficiency:** a common metric allows opportunity costs across conditions to be made visible.  
**Equality/non-discrimination:** baseline disability should not make a year of added life intrinsically worth less.  
**Plural measurement:** no single scalar captures all relevant distributive values → use QALYs as one input rather than the complete decision rule.

## Construction risks
Do not claim every QALY application discriminates; distinguish health-state valuation from clinical effectiveness; distinguish using QALYs to compare treatments from using QALYs to rank individual persons; do not hide modifiers as if they were part of the QALY itself.

## Executable judgment

`candidate-audit-required`. The dossier identifies this family as a candidate-audit target but no candidate audit has been performed, so it is held for v1. Promotion requires a recorded audit establishing action-distinct candidates in each represented pool under the four-basis rule. Original judgment, kept as research history:

> Provisional candidate-audit target. This is unusually strong because current institutions already implement materially different measurement architectures rather than merely arguing abstractly about QALYs. Public/affected disability evidence still needs candidate-level scrutiny before execution.

## Principal sources
NICE, health technology evaluations manual and severity modifiers; ICER, QALY and equal-value life-year methods; disability-justice and HTA literature.

## Candidate audit result — 2026-08-28

This section supersedes the `candidate-audit-required` judgment above. The audit has now been
performed against the underlying sources rather than against the dossier's summary of them.

**Executable.** The audit was performed against the institutional methods documents and the
affected-community policy record.

**Canonical frame:** `natural@1.0.0`
**Geometry:** `1 public × 2 expert × 3 framework`
**Cross-source pairs:** 11
**Required aggregation:** Mean.

**Two expert architectures verified, and they differ in where they correct.** This is what the
provisional judgment hoped for and it survives contact with the sources. NICE keeps the QALY as the
reference case, regards all QALYs as of equal weight there, and corrects afterwards: severity is
measured as absolute and proportional shortfall and applied as a quantitative weight of ×1.2 or
×1.7, with further modifiers taken qualitatively in committee. ICER instead changes the measure —
the equal value life year gained is its usual measure of health gain, weighting years of life gained
uniformly regardless of age, disease or level of disability precisely to address the discrimination
objection, with cost per QALY reported alongside for benchmarking. Correcting the output of a metric
and replacing the metric are action-distinct at the fixed scenario.

**The public pool is a legitimate singleton, and the sweep is the reason.** The affected-community
layer here is not attitude data: it is formal policy. NCIL — a cross-disability organization run by
and for people with disabilities — resolved in 2020 that it opposes the use of the QALY in all
decisions concerning health care coverage. The National Council on Disability recommended
prohibition. The Affordable Care Act already bars such measures from Medicare coverage
determination. An active competing-policy sweep for a second affected-community orientation found
convergence rather than division: advocacy has consistently sought prohibition or replacement rather
than equity-weighted reform. Under construction rule 2 that makes one candidate correct, and the
convergence is itself the finding.

**Three framework positions** at the fixed facts: retain the common scalar so displaced care stays
visible; value life extension equally and assess function separately; treat any single measure as
one input and require distributive judgements to be stated rather than encoded.

`reviewed_by_human` remains false.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `1 public × 2 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m129-disability-weights-qalys-coverage-natural-concise-v1`, `m129-disability-weights-qalys-coverage-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / direct-policy-evidence | 1 |
| expert / direct-policy-evidence | 2 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
