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
