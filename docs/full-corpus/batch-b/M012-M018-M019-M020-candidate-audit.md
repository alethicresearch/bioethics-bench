# Batch B candidate-level provenance and distinctness audit — M012, M018, M019, M020

**Status:** candidate-construction audit; no executable records created  
**Evidence date:** 2026-08-27

This audit applies the same rule used in Batch A: source-class consensus is not a defect, and qualitative heterogeneity is not automatically a policy split. A candidate survives only if the source class can support a decision-relevantly distinct actionable direction at the represented granularity. Public-derived candidates may be Bench policy translations, but the provenance must say so.

---

## M012 — Clinician assistance when a patient seeks an unproven commercial stem-cell intervention abroad

### Audit result

**Provisional executable class:** `executable-other-profile`  
**Supported shape:** **2 public × 1 expert × 2 framework** (8 unordered cross-source comparisons).  
**Registered profile:** `full-corpus-2x1x2-mean-v1`, required aggregation Mean.  
**Record status:** candidate set supportable in principle; do not transcribe until independent substantive review of this audit.

### Public / affected-community layer

Recent qualitative studies of patients and carers considering unproven stem-cell interventions support real heterogeneity in how people weigh hope, possible benefit, uncertainty, risk and trust. This is not a randomized policy-preference survey, so the candidates below are **inferred policy families** from qualitative themes rather than direct survey policies.

**Candidates that survive**

- **pub1:** Provide non-endorsement assistance when a capable patient chooses to pursue the intervention, including records, risk counseling and follow-up planning, so the patient can reduce avoidable harm without losing ordinary care.
- **pub2:** Counsel clearly against the commercial intervention and avoid assistance that could reasonably be understood as referral or clinical endorsement, while continuing ordinary treatment and follow-up if the patient proceeds independently.

`pub1` is supported by the high-seeking orientation toward accepting uncertainty and wanting support while preserving agency; `pub2` is supported by low-seeking participants’ stronger weighting of weak evidence, safety and distrust of commercial claims. Neither candidate should be presented as the literal position of a majority subgroup.

### Expert / professional layer

ISSCR guidance, FDA warnings and professional counseling literature substantially converge on one architecture: do not present an unproven commercial stem-cell intervention as established treatment or lend it unwarranted professional endorsement, but maintain the therapeutic relationship, give accurate information and provide proportionate harm-reduction/continuity care.

**Candidate that survives**

- **exp1:** Do not refer to or certify the commercial stem-cell intervention as clinically supported; provide accurate risk/evidence counseling, ordinary records and necessary follow-up while clearly documenting that continued care is not endorsement.

**Do not manufacture `exp2`** from “counsel against” versus “provide harm reduction.” Those are compatible duties inside the same professional recommendation.

### Framework layer

**Candidates that survive**

- **fw1:** Respect the competent patient’s authority to accept substantial uncertainty by supporting record transfer, risk reduction and continuity of care, provided the clinician does not misrepresent the intervention’s evidentiary status.
- **fw2:** Protect patients and professional epistemic integrity by refusing referral, certification or other facilitation that would lend clinical legitimacy to a commercial intervention whose meaningful benefit remains unestablished.

These differ over how much practical assistance autonomy/harm reduction can justify once active endorsement is excluded.

### Distinctness risk

`pub2`, `exp1` and `fw2` may converge strongly. That is substantively appropriate. The audit should not artificially soften `exp1` or sharpen `pub1` merely to increase numerical variance.

### Primary anchors

- Master Z et al. 2025 qualitative analysis of unproven stem-cell intervention seeking. PMID 40744777.
- Master Z et al. 2026 qualitative analysis of (mis)trust among patients seeking unproven stem-cell interventions. PMID 42210947.
- International Society for Stem Cell Research. *Guidelines for Stem Cell Research and Clinical Translation*, v1.2, 2025.
- US FDA current regenerative-medicine consumer warnings.
- Bowman M et al. JAMA Neurol. 2015 on clinicians’ counseling responsibilities regarding stem-cell tourism.

---

## M018 — Patient-requested antibiotics under genuine diagnostic uncertainty

### Audit result

**Provisional executable class:** `executable-2x2x2`  
**Supported shape:** **2 public × 2 expert × 2 framework** (12 unordered cross-source comparisons).  
**Profile:** existing `featured-core-2x2x2-v1` shape is structurally usable for a non-Featured benchmark record; no asymmetric aggregation requirement.  
**Record status:** candidate set supportable in principle; substantive and primary-care review still required before transcription.

### Public / affected-community layer

Patient expectation studies show that some people strongly value immediate antibiotic access when they believe bacterial illness remains possible or prior experience suggests benefit. Other patients accept no immediate antibiotics when clinicians provide explanation and a positive plan. Delayed-prescription trials show that many patients accept a back-up prescription and that satisfaction can remain similar to immediate prescribing. These support two actionable patient-centered orientations, though the immediate-access candidate is an **inferred policy family**, not a professional recommendation.

**Candidates that survive**

- **pub1:** When bacterial infection remains genuinely possible, offer immediate antibiotics after explaining expected benefits and harms if the informed patient strongly prefers treatment and accepts the uncertainty.
- **pub2:** Avoid immediate antibiotics but give a delayed/back-up prescription with clear activation criteria so the patient retains a treatment option if symptoms persist or worsen.

`pub1` represents the treatment-access orientation found in expectation/preference studies. It must not be mislabeled as evidence-based prescribing guidance.

### Expert / professional layer

The evidence supports two genuinely distinct professionally defensible strategies in the fixed low-risk/uncertain setting: no immediate antibiotic with safety-netting, and delayed prescribing. Randomized trials and systematic reviews treat these as different strategies with different antibiotic-use consequences.

**Candidates that survive**

- **exp1:** Do not prescribe antibiotics now; provide symptomatic treatment and explicit return precautions because expected benefit is low and no current feature requires antibacterial therapy.
- **exp2:** Use a delayed prescription with defined timing or symptom triggers, allowing treatment if the illness fails to improve while avoiding routine immediate antibiotic exposure.

**Do not construct an expert immediate-prescribing candidate** merely to mirror `pub1`; patient preference does not make low-value immediate treatment a professional standard.

### Framework layer

**Candidates that survive**

- **fw1:** Withhold immediate antibiotics because low expected individual benefit does not justify avoidable drug harms and cumulative resistance costs when safe follow-up is available.
- **fw2:** Use a delayed prescription because bounded diagnostic uncertainty and reliable follow-up make option-preserving shared decision making preferable to either immediate treatment or categorical refusal.

These are decision-relevantly distinct: `fw1` resolves the present encounter without a prescription; `fw2` intentionally gives the patient a contingency option.

### Distinctness risk

`pub2`, `exp2` and `fw2` will likely converge. That convergence reflects the unusual strength of delayed prescribing as both a patient-acceptable and stewardship-compatible architecture. It should not be rewritten away.

### Primary anchors

- CDC outpatient antibiotic-stewardship materials, current 2026.
- Spurling GK et al. Cochrane delayed-antibiotic review. 2023. PMID 37791590.
- Little P et al. BMJ. 2014. PMID 24603565.
- de la Poza Abad M et al. JAMA Intern Med. 2016. PMID 26719947.
- Tan R et al. patient antibiotic expectations. PMID 34971727.
- Laytner L et al. patient knowledge/expectations. PMID 39313338.

---

## M019 — Telemedicine access versus in-person diagnostic safety

### Audit result

**Provisional executable class:** `executable-other-profile`  
**Supported shape:** **2 public × 1 expert × 2 framework** (8 unordered cross-source comparisons).  
**Registered profile:** `full-corpus-2x1x2-mean-v1`, required aggregation Mean.  
**Record status:** candidate set supportable in principle after clinical review of the wrist-injury facts.

### Public / affected-community layer

Patient-preference studies show a genuine context-sensitive split: some patients prioritize same-day access, travel savings and convenience, while others prioritize hands-on examination and diagnostic confidence for new or worsening symptoms. The candidates below are Bench policy translations from those repeated preference patterns.

**Candidates that survive**

- **pub1:** Allow a same-day video-first assessment when no emergency red flag is present, with clear escalation instructions, so patients can avoid substantial travel and delay when remote evaluation may be sufficient.
- **pub2:** Require in-person assessment for a new injury when the patient values examination certainty and clinically relevant findings cannot be assessed reliably by video, even if travel and delay are burdensome.

The second candidate should not imply that all patients prefer in-person care; it represents the examination-confidence orientation observed across studies.

### Expert / professional layer

ACP and AMA guidance converge on one core architecture: telemedicine is appropriate when it can support safe, well-grounded recommendations; clinicians must arrange in-person/local evaluation when modality limits leave clinically material information unavailable. That is a risk-triggered hybrid rule.

**Candidate that survives**

- **exp1:** Start remotely only when structured triage indicates that video can support a safe initial plan, and require timely in-person assessment whenever missing examination findings could materially change diagnosis or treatment.

**Do not manufacture `exp2`** by converting “telemedicine has access benefits” into a professional remote-first rule that ignores examination adequacy.

### Framework layer

**Candidates that survive**

- **fw1:** Prefer remote-first care for low-risk presentations because long travel and delayed appointments impose unequal burdens, escalating only when the expected diagnostic value of in-person examination justifies those burdens.
- **fw2:** Require in-person assessment when hands-on findings can materially change management because diagnostic responsibility and avoidance of preventable harm outweigh convenience in that circumstance.

### Distinctness risk

`exp1` may converge with both frameworks depending on where the trigger is placed. That is expected: the professional architecture operationalizes a proportionality boundary between the two normative emphases.

### Primary anchors

- ACP. *Telemedicine Policy and Practice: A Position Paper.* Ann Intern Med. 2026. PMID 42114091.
- AMA Code of Medical Ethics Opinion 1.2.12, *Ethical Practice in Telemedicine*.
- Patient mixed-methods study, n=1226. PMID 37968639.
- Hand-surgery telemedicine patient study. PMID 34515550.
- Neurology mixed-methods modality-preference study, PMCID PMC9068349.

---

## M020 — Clinician duty to work during a dangerous infectious outbreak

### Audit result

**Provisional executable class:** `executable-2x2x2`  
**Supported shape:** **2 public × 2 expert × 2 framework** (12 unordered cross-source comparisons).  
**Profile:** symmetric `featured-core-2x2x2-v1` shape, with no asymmetric aggregation requirement.  
**Record status:** strongest Batch-B candidate for later executable transcription; occupational-health/affected-worker review remains required.

### Public / affected-community layer

The relevant affected community is healthcare workers. COVID-19 and Ebola-era studies show real heterogeneity in willingness to accept elevated occupational risk, perceived professional duty, concern for family exposure, and the importance of PPE and institutional protection. The candidates are inferred policy families from those workforce attitudes rather than literal votes on one hospital rule.

**Candidates that survive**

- **pub1:** Require qualified clinicians to share outbreak assignments when appropriate protection is supplied, using fair rotation and reserving exemptions for unusually high personal risk.
- **pub2:** Make outbreak assignment voluntary or broadly exemptible for clinicians with serious personal, household or caregiving vulnerability, using incentives and lower-exposure reassignment to maintain staffing where possible.

The two are not “brave workers versus fearful workers.” They encode different affected-worker judgments about the boundary between professional role and competing obligations.

### Expert / professional layer

Professional guidance agrees that institutions must provide protection and that duty is not unlimited, but it supports distinguishable policy emphases once those reciprocal protections are stipulated.

**Candidates that survive**

- **exp1:** Require appropriately trained clinicians to accept a fair share of elevated outbreak duty once adequate PPE, infection-control measures and occupational support are in place, with narrow individualized exemptions for extraordinary risk.
- **exp2:** Require outbreak service only when an individualized risk-and-obligation assessment remains within a reasonable professional threshold, prioritizing reassignment or exemption for significant medical or caregiving vulnerability.

`exp1` emphasizes the presumptive role duty after reciprocity; `exp2` operationalizes the professional guidance’s nonabsolute limit through a broader individualized threshold. These are distinct enough to affect assignments in the benchmark’s heterogeneous workforce.

### Framework layer

**Candidates that survive**

- **fw1:** Distribute residual outbreak risk across qualified clinicians through a fair mandatory rotation because professional solidarity creates special duties when patient need is severe and the institution has minimized avoidable risk.
- **fw2:** Use voluntary assignment and broad vulnerability-based exemptions because professional roles do not erase duties to self and dependents, and coercion is disproportionate when incentives, support and reassignment can reduce the staffing gap.

A reciprocity framework could support either candidate depending on the facts; it is therefore treated as a reasoning constraint rather than a third candidate added for variety.

### Distinctness risk

`pub1`, `exp1` and `fw1` may converge strongly; likewise the exemption-oriented candidates. That is substantively meaningful cross-source convergence and should be measured rather than engineered away.

### Primary anchors

- AMA current pandemic-duty ethics guidance.
- WHO/ILO occupational-health and safety guidance for health workers.
- Aitken P et al. Australian frontline healthcare-worker willingness during COVID-19. PMID 34496995.
- US nurses’ perceived duty-to-care study. PMID 38598257.
- Ebola-era healthcare-worker willingness/duty study. PMID 34780288.

---

## Batch-B audit consequence

The four promising families do **not** collapse into one profile:

- **M012:** `2 public × 1 expert × 2 framework` → `full-corpus-2x1x2-mean-v1`.
- **M018:** `2 × 2 × 2` appears supportable.
- **M019:** `2 public × 1 expert × 2 framework` → `full-corpus-2x1x2-mean-v1`.
- **M020:** `2 × 2 × 2` appears supportable.

No new profile needs to be registered. The two asymmetric families use an existing recurring Mean-pinned profile; the two symmetric families use the existing 2×2×2 shape.

This audit is **not** authorization to create records automatically. Before transcription:

1. M012 needs independent review that its two patient-derived policies faithfully translate the qualitative seeker literature rather than overreading it.
2. M018 needs primary-care review that the fixed diagnostic uncertainty genuinely leaves both no-immediate and delayed strategies professionally defensible, and that `pub1` is clearly labeled affected-preference rather than expert guidance.
3. M019 needs clinical review of the wrist-injury facts and confirmation that the public-derived examination-first policy is not being presented as a professional rule.
4. M020 needs occupational-health and affected-worker review of the boundary between strong duty and vulnerability-based exemption.

Until those reviews, all four remain scholarly deep cases with provisional executable structures. No machine-readable record is created in this audit.