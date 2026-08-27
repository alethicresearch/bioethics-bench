# M143 — Clinician override of a validated AI recommendation

**Case-family identity:** M143  
**Primary domain:** clinical AI / professional judgment  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system clinical AI governance committee.  
**Decision question:** When a well-validated AI model recommends one course and the clinician's contextual judgment another, what should governance require?

## Scenario pair
**Concise:** A clinical prediction model is highly validated for a defined treatment decision and recommends treatment A. The treating clinician believes an unusual contextual factor not represented in the model makes treatment B safer. The hospital must decide whether clinicians retain unrestricted authority to override, whether following the AI should be the default unless a documented rationale is entered, or whether escalation should depend on model confidence, case novelty and risk.

**Detailed:** A hospital deploys a validated decision-support model with strong overall and subgroup performance for a common treatment decision. In a particular case the model strongly recommends treatment A, but the clinician identifies a contextual factor—documented in the chart but not represented in model inputs—that plausibly changes the risk-benefit balance. The patient has not yet been treated. AMA AI principles call for qualified human intervention points and generally preserving the ability of clinicians to intervene or override, with earlier intervention as potential harm increases. The governance committee must decide how much procedural weight the model should have while avoiding both reflexive automation and unaccountable intuition.

## Source architecture
WHO emphasizes human autonomy and accountability in health AI. AMA principles state that clinical decisions influenced by AI should include specified qualified-human intervention points and generally retain human capacity to intervene/override. These sources support human oversight but leave room over documentation and escalation requirements.

## Serious policy families
- clinician retains authority to override with ordinary professional accountability;
- AI recommendation is default, but override requires documented clinical rationale;
- risk-tiered/shared rule using model confidence, case novelty and potential harm to determine escalation.

## Normative bridges
**Professional responsibility:** clinicians remain answerable for care and may know context absent from the model.  
**Epistemic discipline:** requiring reasons can reduce unsupported distrust or automation bias.  
**Risk proportionality:** governance should be stronger where consequences of either human or model error are greater.

## Construction risks
Do not caricature human judgment as intuition or AI as objective; stipulate what the model does not know; distinguish override permission from liability rules.

## Executable judgment
`research-complete-not-executable`. Current professional guidance converges on meaningful human oversight; direct patient/public evidence does not support multiple governance rules at this granularity.

## Principal sources
AMA Principles for Augmented Intelligence Development, Deployment and Use; WHO AI governance guidance; clinical decision-support/human-factors literature.
