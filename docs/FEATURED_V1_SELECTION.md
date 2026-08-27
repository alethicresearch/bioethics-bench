# Bioethics Bench — Featured v1 selection

**Status:** selected for deep construction; not yet released.  
**Release target:** 20 underlying case families, each with a concise and detailed executable representation using the same decision question and candidate set.

The master inventory remains open-ended. These 20 are the first public product release because, together, they give a broad and methodologically useful cross-section of practical bioethics while remaining feasible to source, review, execute, and present well.

| # | Case family | Primary domains | Why it is in v1 | Inventory origin |
|---|---|---|---|---|
| F01 | Competent adult refusal of blood transfusion | consent-capacity-refusal | Canonical autonomy/refusal case; unusually clear affected-community source material; good low-complexity benchmark anchor | M001 |
| F02 | Advance directive versus current contentment in dementia | end-of-life; consent-capacity-refusal | Canonical precedent-autonomy/current-interests conflict; excellent nontrivial convergence structure | M027 |
| F03 | Resuscitation at the threshold of viability | pediatric-neonatal | Shared decision, prognosis uncertainty, parental authority and institutional policy in one bounded case | M022 |
| F04 | Brain death and continued organ support after family objection | end-of-life | Canonical definition-of-death/public-trust problem with current 2023–26 guidance | M028 |
| F05 | Medical aid in dying for terminal illness | assisted-dying; end-of-life | Core contemporary bioethics controversy; autonomy, professional role, safeguards and institutional policy | M031 |
| F06 | Placebo control when effective treatment exists | research-ethics | Canonical research-ethics problem with strong WMA/CIOMS structure and genuine exception conditions | M071 |
| F07 | Standard of care in a lower-resource-country trial | research-ethics; global-structural | Global research justice, exploitation, responsiveness and fair-benefit design | M074 |
| F08 | Extending the 14-day limit for human embryo research | reproduction-genetics; research-ethics | Current live policy review with explicit public dialogue and strong expert/normative disagreement | M056 |
| F09 | Heritable genome editing to prevent serious disease | reproduction-genetics | Canonical/frontier case with global governance and intergenerational implications | M051 |
| F10 | Age as an organ-allocation criterion | allocation-transplantation | Clean utility/justice/equal-respect problem with explicit allocation principles | M101 |
| F11 | Ventilator triage during catastrophic scarcity | public-health; allocation-transplantation; disability-mental-health | Best current RE-Iteration demonstration candidate; allocation rules can be challenged and revised without changing scenario facts | M098 |
| F12 | Mandatory vaccination during a serious outbreak | public-health | Familiar but genuinely conditional liberty/public-risk problem; useful public/expert/framework comparison | M094 |
| F13 | International recruitment of health workers from shortage countries | global-structural | Corrects affluent-hospital bias; worker liberty, source-country systems and destination-country need; WHO Code amended 2026 | M115 |
| F14 | Involuntary psychiatric treatment | disability-mental-health; consent-capacity-refusal | Major rights/beneficence/safety conflict with stark disagreement between rights-based guidance and public intuitions | M127 |
| F15 | QALYs, disability and health-technology allocation | disability-mental-health; allocation-transplantation | Directly tests measurement, distributive justice and disability critique; especially relevant to normative computation | M129 |
| F16 | Diagnostic AI with unequal subgroup performance | medical-ai-data | Concrete accuracy/equity/accountability problem; supports numeric perturbations and cross-model comparison | M145 |
| F17 | Biomedical animal research: replacement and harm–benefit review | animal-one-health; research-ethics | Animal ethics is part of the Bench proper; directly tests whether SACRE can represent nonhuman interests faithfully | M156 |
| F18 | Medically important antimicrobials in food-producing animals | animal-one-health; public-health | Strong One Health case involving animal welfare, veterinary care, present/future human health and agricultural practice | M160 |
| F19 | Health-system decarbonization versus near-term clinical trade-offs | climate-planetary; global-structural | Makes climate ethics a health-system decision; now supported by WHO guidance and recent patient/physician attitude data | M165 |
| F20 | Increasingly complex neural organoids | neuroethics; research-ethics; clinical-innovation | 2026 frontier case with active governance recommendations and emerging stakeholder-attitude evidence | M138 |

## Representation design

Each case family will receive two public executable records:

- **concise** — a short, high-signal version intended as the default loader representation;
- **detailed** — a fuller version containing additional decision-relevant context but no additional advocacy or change in underlying facts.

Both representations must preserve:

- one `case_id`;
- one decision-maker and `decision_question`;
- the same material factual assumptions;
- the same six executable candidates in the same order;
- the same source-class assignments;
- separate `record_id`, `representation.form`, semantic version and content hash.

This is deliberate experimental architecture: concise-versus-detailed is a representation comparison, not a hidden formatting choice.

## Default candidate profile

Featured v1 uses `featured-core-2x2x2-v1` unless a case fails piloting:

- `pub1`, `pub2` — two defensible public/affected-community-derived recommendations;
- `exp1`, `exp2` — two defensible professional/expert-derived recommendations;
- `fw1`, `fw2` — two actionable recommendations derived from named normative frameworks.

Six candidates yield 12 unordered cross-source QCCS comparisons per complete run.

## Release rule

Selection does not mean validation or endorsement. Records begin as `status: draft` / `editorial-review`. A case reaches `released` only after:

1. case-specific source review;
2. scenario neutrality/completeness review;
3. candidate source-class and commensurability review;
4. hash/schema validation;
5. SACRE load and execution checks;
6. subject/domain review where technically or socially sensitive;
7. explicit release freeze.