# M009 — Requested CPR judged medically non-beneficial

**Case-family identity:** M009  
**Featured crosswalk:** none  
**Primary domain:** end-of-life / professional duties  
**Subdomain:** CPR; potentially inappropriate treatment; conflict resolution  
**Tags:** CPR, DNAR, nonbeneficial treatment, surrogate, fair process  
**Research status:** deep case draft; public-policy evidence gap preserved  
**Evidence date:** 2026-08-27

## Decision architecture

**Decision-maker:** hospital/ICU service.  
**Decision question:** When a surrogate requests CPR but the clinical team judges it unable to achieve the agreed physiological goal, what process should govern whether CPR is offered?

The case avoids the contested label `futile`. It fixes the clinical outcome assumptions and asks about the process for responding to disagreement: honor the request, recommend against/non-offer CPR after fair process, or require independent review/transfer before limitation.

## Concise representation

An adult with advanced progressive disease is in the ICU and lacks decision-making capacity. The surrogate asks that CPR be attempted if cardiac arrest occurs, citing the patient's earlier general request to “keep fighting.” For this benchmark, assume that if arrest occurs, CPR has less than a 1% chance of survival to hospital discharge with enough recovery to leave the ICU and cannot reverse the underlying terminal disease; it would predictably cause substantial physical injury. The clinical team believes CPR cannot achieve the agreed goal of recovery to leave intensive care. The surrogate understands these facts but continues to request CPR. The hospital must decide what process should govern whether CPR is offered.

## Detailed representation

An adult with advanced progressive disease has developed multiorgan failure in the ICU and no longer has decision-making capacity. Before this illness the patient made a general statement to family members to “keep fighting,” but left no specific instruction about CPR in a terminal condition. The surrogate asks that full CPR be attempted if cardiac arrest occurs. For this benchmark, assume that CPR would have less than a 1% chance of survival to hospital discharge with enough recovery to leave the ICU, cannot reverse the underlying terminal disease, and would predictably cause substantial physical injury. The team and surrogate agree that the relevant treatment goal is recovery sufficient to leave intensive care; the disagreement is whether CPR should still be attempted despite the probability and burdens stated. The surrogate has received a clear recommendation against CPR and understands the prognosis but continues to request it. The hospital must decide what fair process should govern whether CPR is offered.

## Decision-critical facts

- patient lacks current decision-making capacity;
- prior statement is general and does not specifically direct CPR in this condition;
- surrogate requests CPR after understanding the stated prognosis;
- agreed goal is recovery sufficient to leave the ICU;
- benchmark fixes survival-to-discharge-with-recovery probability below 1%;
- CPR cannot reverse the underlying terminal disease;
- CPR would predictably cause substantial physical injury;
- disagreement persists after clinician recommendation.

## Explicit uncertainty

The benchmark fixes a very low outcome probability rather than asserting zero physiological effect. The normative disagreement concerns whether very low expected benefit plus substantial burden justifies non-offer and what process is required before clinicians limit treatment over surrogate objection.

## Jurisdiction and time strategy

Jurisdiction-neutral institutional policy. The scenario assumes the hospital may choose among the represented conflict-resolution policies; named state statutes are excluded unless a later historical/legal version is created.

## Benchmark stipulations

- **Outcome stipulation:** CPR has <1% chance of survival to hospital discharge with enough recovery to leave ICU.
- **Goal stipulation:** agreed relevant goal is recovery sufficient to leave intensive care.
- **Disease stipulation:** CPR cannot reverse the underlying terminal disease and would predictably cause substantial physical injury.

All appear in both representations.

## Serious policy / position families

- honor the surrogate's request for CPR despite clinician recommendation when the intervention retains any meaningful physiological possibility and prior wishes remain ambiguous;
- do not offer CPR after a transparent process establishes that it cannot reasonably achieve the agreed treatment goal;
- require independent clinical/ethics review and an opportunity for transfer before entering a unilateral DNAR order;
- use informed nondissent/clinician recommendation models that remove decision burden where the surrogate is willing not to object, while escalating persistent disagreement to fair process.

## Public / affected-community evidence

Studies of seriously ill patients and surrogates show heterogeneous CPR preferences and demonstrate that preferences are sensitive to prognosis and expected outcomes. They support careful disclosure of outcome probabilities and the importance of patient values.

The current packet does **not** yet contain strong direct public/affected-public evidence comparing the three institutional policies represented here: honoring requested CPR, unilateral non-offer after process, or mandatory independent review/transfer. Physician surveys cannot substitute for the public pool. This distinction matters because the Bench should not turn general desire for CPR into a public endorsement of a particular conflict-resolution architecture.

## Expert / professional recommendations

The 2025 American Heart Association ethics guidance states that patients/surrogates may choose among reasonable medical options but do not have a right to demand treatments that are not medically reasonable, while emphasizing that disagreements about appropriateness can be value-laden and should use a structured process with ethics consultation, clinical leadership, institutional policy and appeal.

Professional practice remains contested. A national physician survey found physicians evenly divided over whether unilateral DNAR orders can ever be appropriate. Recent ethics-consultation studies continue to document conflict, relational harms and disparities, supporting procedural safeguards rather than casual unilateral limitation.

## Normative / framework positions and reasoning bridges

- **Respect for prior wishes / surrogate authority:** uncertainty about a patient's specific CPR wishes gives the surrogate an interpretive role → clinicians should not displace that role merely because prognosis is poor → continue requested CPR where the intervention remains within a defensible range of medically reasonable options.
- **Nonmaleficence / goal-concordant care:** treatment is justified by its capacity to advance an agreed clinical goal, not by physiological activity alone → severe burden with vanishingly low chance of achieving the agreed goal can make CPR unreasonable → permit non-offer after transparent assessment.
- **Procedural justice:** prognosis and `appropriateness` judgments can contain value assumptions and historically unequal application → unilateral authority creates risks of bias and mistrust → require independent review, explanation, appeal and transfer opportunity before limitation over objection.
- **Relational care / burden of decision:** forcing a surrogate to authorize nonresuscitation can create lasting moral burden → clinicians may make clear recommendations and use nondissent where accepted → do not use nondissent as a way to bypass an expressed objection.

## References and provenance

**Public / patient-surrogate evidence**
- Seriously ill patient/family CPR preference literature in the source packet, including PMID 8629646 and PMID 28735269.
- ICU patient/surrogate communication and preference literature, PMID 24606839.

**Professional / empirical expert**
- American Heart Association. *2025 CPR & ECC Guidelines — Part 3: Ethics*.
- National survey of physicians on unilateral DNR orders, reported in CHEST: approximately half endorsed such orders as sometimes appropriate.
- Hernandez A, Marks A, Firn J. *Navigating Unilateral DNAR Orders: Findings from a Decade of Ethics Consultation Cases*. HEC Forum. 2026. PMID 42463620.

**Normative / policy**
- ATS/ACCM shared decision-making and potentially inappropriate treatment/fair-process literature.
- informed assent/nondissent literature.

## Construction and representation risks

- using `futile` as a conclusion rather than stating outcome facts;
- setting CPR probability to exactly zero and trivializing the case;
- using physician opinions as public-derived evidence;
- assuming the surrogate is irrational or uninformed;
- introducing disparities only as rhetorical decoration without process implications;
- changing prior-wish specificity or the agreed treatment goal between representations;
- conflating a clinician recommendation, informed nondissent and unilateral DNAR.

## Rights / licensing notes

Bench-authored text may be CC BY 4.0. Professional and empirical sources are paraphrased with attribution.

## Possible uses

Teaching; prognosis perturbation; fair-process analysis; RE-Iteration around appeal/transfer safeguards; representation sensitivity; later human/model studies of treatment-goal thresholds.

## Executable-eligibility judgment

`needs-additional-evidence` for the default 2×2×2 profile. Expert and framework position maps are strong, but current public/affected evidence does not directly support two distinct institutional conflict-resolution policies at the required granularity.

## Review requirements

Critical-care/palliative review; patient/surrogate evidence search; disability/equity review of non-offer criteria; candidate-provenance audit if executable construction is later attempted.

## Downstream record rule

Keep the paired representations in the full corpus. No default 2×2×2 executable record should be created until direct public/affected-policy evidence is adequate or a different profile is methodologically justified and registered.
