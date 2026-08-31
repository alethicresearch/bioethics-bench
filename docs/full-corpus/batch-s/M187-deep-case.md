# M187 — Adolescent EHR and patient-portal confidentiality

**Case-family identity:** M187 (replacement identity adopted 2026-08-30)  
**Historical identity:** adolescent sexual/reproductive-health confidentiality — superseded as duplicative of M004  
**Primary domain:** adolescent medicine / health information technology  
**Subdomain:** portal proxy access; EHR segmentation; confidential care  
**Tags:** adolescent confidentiality, EHR, patient portal, proxy access, sensitive information, billing  
**Research status:** reconstructed deep case  
**Evidence date:** 2026-08-30

## 1. Decision architecture

**Decision-maker:** health-system EHR/portal governance team.  
**Decision question:** What electronic-information access rule should protect a minor adolescent's lawfully confidential sensitive care while preserving appropriate parent/guardian proxy access to ordinary health information?

This is not M004's bedside question about whether a clinician should disclose a sensitive encounter to parents. The clinician and law have already established that the encounter is confidential. M187 asks whether the information system can faithfully preserve that confidentiality across diagnoses, laboratory results, prescriptions, notes, information exchange and billing while still supporting legitimate proxy access to the rest of the record.

## 2. Concise representation

A 16-year-old receives lawful confidential contraception and STI care. A parent appropriately has proxy access to the adolescent's portal for ordinary health information. The current EHR can expose sensitive diagnoses, laboratory results, prescriptions, notes or billing details unless the system applies special protections. The health system must choose how to segment and govern portal access so that confidential information is protected without unnecessarily blocking the adolescent or parent from unrelated records.

## 3. Detailed representation

A 16-year-old receives lawful confidential contraception and STI testing during a general adolescent-health visit. The patient has an individual portal account, while a parent retains proxy access for routine pediatric care, appointments, immunizations and other nonconfidential information. The EHR exchanges information with outside clinicians and automatically publishes many test results, medications, problem-list entries and notes. The insurer's explanation-of-benefits workflow can also expose details to the policy holder. The clinical confidentiality rule is not disputed: the sensitive care is protected under the benchmark's stipulated law and policy. The health-system informatics team must decide whether to use granular segmentation and selective proxy blocking across all sensitive data types, rely primarily on clinicians to mark protected items within an otherwise broad proxy-access default, or use a stronger age-based adolescent-control architecture with defined safety/legal exceptions. Any architecture must preserve usable portal access for the adolescent and appropriate parent/guardian access to nonconfidential information.

## 4. Decision-critical facts

- adolescent has lawful access to the represented confidential care;
- parent/guardian proxy access is legitimate for ordinary information;
- confidentiality failure can occur through multiple EHR surfaces, not only clinical notes;
- adolescent should not lose all portal access merely because some information is sensitive;
- proxy access should not be treated as all-or-nothing;
- information exchange and billing/EOB systems can create secondary disclosure paths;
- the case concerns system design and governance, not whether the clinician should tell the parent.

## 5. Explicit uncertainty

State law and technical capabilities vary. The benchmark fixes the legal entitlement to confidential care and asks which technically feasible architecture should be adopted, rather than asking the model to infer a jurisdiction's law.

## 6. Jurisdiction and time strategy

Jurisdiction-neutral system-governance case with confidentiality rights stipulated. A jurisdiction-specific projection may later model different age thresholds or categories of protected care.

## 7. Benchmark stipulations

- Assume the represented contraception/STI care is legally confidential.
- Assume parent proxy access remains appropriate for nonconfidential information.
- Assume the EHR can technically support granular segmentation if the health system chooses to implement it.
- Do not resolve the case by disabling the adolescent's entire portal.

## 8. Serious policy / position families

- granularly segment sensitive EHI across diagnoses, results, prescriptions, problem lists and notes, blocking protected items from proxy access while preserving ordinary proxy access;
- maintain a distinct confidential adolescent portal/encounter layer that automatically prevents proxy disclosure for protected categories while allowing adolescent access;
- use broad proxy access by default but require clinicians to mark individual sensitive items/visits for blocking, with system prompts and auditing;
- shift to adolescent-controlled proxy permissions from a defined age, subject to mandatory safety/legal exceptions;
- suppress confidential billing/EOB details and ensure protections survive health-information exchange as a system-wide confidentiality rule;
- use a trust/autonomy framework favoring strong technical confidentiality because portal leakage can deter sensitive-care disclosure and access;
- use a parental-responsibility/care-coordination framework favoring broad ordinary proxy access while requiring reliable carve-outs for legally protected information.

Billing/EOB protection is partly a cross-cutting safeguard rather than a complete portal architecture; it should not be treated as a standalone competing projection unless the study specifically targets disclosure channels.

## 9. Public / affected-community evidence

Adolescent confidentiality research underlying M004 shows that adolescents value private access to sensitive services and may avoid care when confidentiality is uncertain. For M187, that evidence supports the importance of preventing portal leakage but does not by itself prescribe one technical architecture. Adolescent and parent portal-experience evidence should be added where a future projection claims stakeholder preference over specific implementations.

## 10. Expert / professional recommendations

The American Academy of Pediatrics' 2026 policy statement *Principles for Health Information Technology to Support and Protect Adolescent Confidentiality* directly supports granular segmentation of sensitive electronic health information, selective blocking from proxies, the ability to mark an entire visit private, equitable adolescent portal access, protection of sensitive information received through exchange, and suppression of confidential billing details where legally protected. This is strong direct professional support for a granular/proxy-protection architecture rather than an all-or-nothing portal model.

## 11. Normative / framework positions and reasoning bridges

- **Confidentiality / trust:** adolescent access to sensitive care depends on confidence that protected information will not leak through technical systems → EHR design is part of the ethical duty of confidentiality → implement reliable segmentation across every disclosure channel.
- **Developing autonomy:** adolescents should increasingly control access to sensitive information consistent with law and capacity → portal design should provide direct adolescent access and meaningful control rather than treating the parent as the only account holder.
- **Parental responsibility / care coordination:** parents often need information to coordinate ordinary pediatric care → confidentiality should be granular rather than achieved by excluding proxies from the entire chart → preserve broad nonconfidential access with protected carve-outs.
- **Equity:** requiring adolescents to sacrifice portal access or navigate hidden technical workarounds disproportionately burdens those seeking sensitive care → confidentiality protections should be systematic rather than dependent on individual clinician memory.

## 12. References and provenance

- American Academy of Pediatrics. *Principles for Health Information Technology to Support and Protect Adolescent Confidentiality: Policy Statement*. Pediatrics. 2026;157(3):e2025075747.
- AAP 2024 adolescent-confidentiality policy/technical report and the empirical adolescent/parent evidence already cited in M004 remain background sources for the clinical importance of confidentiality.

## 13. Construction and representation risks

- duplicating M004's question of whether parents should be told;
- treating proxy access as categorically good or bad rather than information-specific;
- assuming a technical architecture is directly preferred by adolescents without stakeholder evidence;
- allowing hidden leakage through medications, labs, problem lists, exchange or billing while claiming the visit is confidential;
- solving confidentiality by removing all adolescent portal access;
- confusing a source-backed granular-segmentation principle with one vendor-specific implementation.

## 14. Rights / licensing notes

Bench-authored text may be released under CC BY 4.0. External professional guidance is paraphrased.

## 15. Possible uses

Health-informatics ethics; confidentiality-system design; source-grounded versus expanded SACRE projections; proxy-access perturbations; comparison of clinical and technical confidentiality; RE-Iteration around granularity and parental access.

## 16. Executable-eligibility judgment

**Rich-universe judgment:** `candidate-universe-ready`. A source-grounded Expert-centered projection is available from the AAP architecture. Expanded projections can compare alternative portal defaults if they are labeled as implementation or framework constructions rather than misrepresented as AAP recommendations. Direct stakeholder-policy evidence should be added before claiming a Public source role for one specific technical architecture.

## 17. Review requirements

Adolescent-medicine review; pediatric informatics/EHR review; confidentiality-law review for any jurisdiction-specific projection; provenance review before assigning Public roles.

## 18. Downstream record rule

M187 now refers only to the EHR/portal confidentiality family. M004 remains the bedside/service confidentiality family. New M187 machine-readable records must keep the system-governance decision object fixed and preserve candidate-level provenance.
