# M139 — Secondary use of health records without re-consent

**Case-family identity:** M139  
**Primary domain:** health data / secondary research use  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system data-governance board.  
**Decision question:** May a health system use routinely collected patient records for approved research or quality improvement without obtaining new consent from every patient?

## Scenario pair
**Concise:** A public health system holds longitudinal clinical records from millions of patients. Researchers propose a low-risk study using coded data under data-access controls. Re-contacting every patient would make the study impracticable. The system can use governed secondary data by default with opt-out, require study-specific opt-in consent, or use a tiered rule in which low-risk coded research is governed centrally while identifiable, sensitive or commercial uses require stronger consent.

**Detailed:** A health system maintains longitudinal electronic records collected for direct care. A research team proposes analysis of coded records to study treatment outcomes; no direct patient contact is planned and the data would remain inside a secure environment. The health system also sometimes receives requests involving identifiable data, highly sensitive conditions or commercial partners. A 2024 systematic review of more than 100 studies found public willingness to share health data is generally conditional on purpose, recipient, privacy, trust and control rather than simply pro- or anti-sharing. The NHS National Data Opt-Out is a real policy model allowing confidential patient data to be used for research/planning unless individuals opt out, subject to exemptions. The governance board must choose whether broad governed opt-out use is acceptable, whether new research requires affirmative consent, or whether consent requirements should vary with identifiability, sensitivity and recipient.

## Source architecture
Health-data-sharing reviews show substantial support for socially beneficial secondary use alongside strong demand for privacy, transparency and control; commercial involvement and sensitive data often reduce willingness. The NHS provides a concrete national opt-out architecture. Research-ethics frameworks also permit some secondary use without re-consent when risk is low and governance is robust.

## Serious policy families
- governed secondary use with meaningful opt-out;
- study-specific opt-in consent before secondary research use;
- tiered governance based on identifiability, sensitivity and recipient/commercial use.

## Normative bridges
**Learning health system/social value:** requiring new consent for every low-risk analysis can make socially valuable research infeasible.  
**Informational autonomy:** records collected for care do not automatically authorize every later use.  
**Proportionality:** consent burden and governance should track privacy and misuse risk.

## Construction risks
Do not treat deidentification as perfect; distinguish research, quality improvement and commercial development; do not infer opt-out preference merely from general support for research.

## Executable judgment
Provisional candidate-audit target. There is mature real-world policy plus direct public evidence about consent/control, making a `2×1×2` or symmetric structure plausible if candidate wording remains source-faithful.

## Principal sources
Cascini et al., eClinicalMedicine 2024 systematic review (PMID 38533128); 2024 JMIR systematic review of third-party/secondary data sharing; NHS National Data Opt-Out.

## Candidate audit reconciliation — 2026-08-28

This section supersedes the provisional executable judgment above, which was written before
the candidate audit was performed and was never revised afterwards. The audit's result is the
committed record; what follows states that result in the dossier, where a reviewer will look
for it. The earlier judgment is preserved above as research history.

This is the richest public layer in the executable set — three candidates, two of them **direct
policy evidence**. Consent-model studies directly compare opt-out and passive-consent approaches
against affirmative consent, and recent NHS public engagement supports retaining a research opt-out;
that is a position on the consent architecture, not an attitude to data sharing. Systematic-review
and survey evidence documents substantial groups preferring active, study-specific or
category-specific permission. The third candidate is inference: willingness varies systematically by
sensitivity, recipient, profit motive, purpose and degree of control, and dynamic or responsive
consent is repeatedly valued — but the *threshold* between opt-out and affirmative permission is
Bench-authored operational completion and is not attributed to respondents as a surveyed rule.

The expert layer is two operating legal-institutional architectures. The NHS National Data Opt-Out
gives a standing choice preventing use of confidential patient information for research and planning
except in specified circumstances. The HIPAA research-waiver architecture at 45 CFR 164.512(i)
permits use without authorization after IRB or Privacy Board approval on minimal-risk and
impracticability criteria. Both are direct policy evidence and they diverge on the fixed facts.

Frameworks: governed use, affirmative consent, and a risk-tiered architecture — three distinct
actions.

Source-to-policy fidelity across these candidates remains subject to independent human review.
`reviewed_by_human` stays false on the records.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `3 public × 2 expert × 3 framework`  
**Cross-source pairs:** 21  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m139-secondary-use-health-records-consent-natural-concise-v1`, `m139-secondary-use-health-records-consent-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / direct-policy-evidence | 2 |
| public / source-informed-policy-inference | 1 |
| expert / direct-policy-evidence | 2 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
