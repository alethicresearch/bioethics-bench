# M152 — AI prescreening for clinical-trial recruitment

**Case-family identity:** M152  
**Primary domain:** research ethics / health data / AI  
**Subdomain:** trial recruitment; EHR prescreening  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** health-system research governance committee.  
**Decision question:** May a health system use an AI system to prescreen patient records for trial eligibility before a patient has requested research contact?

## 2. Concise representation

A health system can use an AI system to scan electronic health records and identify patients who appear eligible for approved clinical trials. The system would not enroll anyone or disclose records outside the institution; it would generate a candidate list for clinician/research review. The program could improve enrollment speed and representation but may encode bias, use sensitive data, and surprise patients who did not expect research screening. The health system must decide whether governed prescreening may occur before individual permission, whether patients should opt in before any algorithmic screening, or whether prescreening may occur but initial contact should come through the treating clinician rather than directly from researchers.

## 3. Detailed representation

A large health system hosts many actively recruiting clinical trials. An AI tool can parse trial criteria and patient EHRs to identify likely eligible participants more efficiently than manual review. For this benchmark, assume the model is technically validated for eligibility matching and does not make enrollment decisions. It operates inside the health system under IRB/privacy governance, but it can inspect diagnoses, medications and other sensitive data relevant to eligibility. Candidate lists are reviewed by staff before outreach. The policy question is whether such prescreening itself may occur without prospective patient permission, whether the health system should require an opt-in research-preference flag before algorithmic screening, or whether governed prescreening may proceed but only a treating clinician may initiate contact with a potentially eligible patient.

## 4. Critical facts and uncertainty

- AI only prescreens; it does not consent or enroll;
- records remain inside the health system;
- sensitive information may be used;
- matching accuracy is validated but bias can remain in who is identified;
- outreach architecture is separable from prescreening itself.

## 5. Serious policy families

- governed prescreening without prior individual opt-in;
- explicit opt-in before algorithmic screening;
- prescreening allowed, clinician-mediated initial contact required.

## 6. Public / affected evidence

Patient evidence about trial contact and EHR research preferences is relevant, but direct studies comparing AI prescreening architectures are limited. Acceptance of research outreach does not by itself establish consent to algorithmic screening.

## 7. Expert / professional evidence

ICH E6(R3) and FDA guidance support modern, risk-based trial technologies while centering participant protection and representative enrollment. 2026 bioethics analysis of AI recruitment emphasizes privacy, bias, transparency, governance and the distinction between screening and human contact. This is an emerging governance space rather than a mature plural professional policy set.

## 8. Framework positions

- learning-health-system/public benefit → governed low-risk prescreening can improve access and representation;
- privacy/autonomy → patients should authorize algorithmic use of sensitive records for recruitment;
- relational trust → prescreening can occur under governance, but clinician-mediated contact reduces surprise and preserves context.

## 9. References

- FDA. ICH E6(R3) Good Clinical Practice. 2025.
- FDA. *Enhancing Participation in Clinical Trials*. 2025.
- *Use of AI as a Research Recruitment Tool: Ethical Elements, Considerations, and Recommendations*. 2026.

## 10. Construction risks

Do not conflate screening with enrollment consent; do not assume clinician mediation eliminates privacy concerns; do not use improved recruitment efficiency as a substitute for affected-patient policy evidence.

## 11. Executable-eligibility judgment

`needs-additional-evidence`. The institutional choices are clear, but direct affected-policy evidence at the AI-prescreening stage is currently insufficient for strict executable construction.
