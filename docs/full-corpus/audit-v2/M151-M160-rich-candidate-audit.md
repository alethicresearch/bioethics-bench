# Bioethics Bench — Rich Candidate Audit M151–M160

**Date:** 2026-08-30

## M151 — Patient data deletion versus learning health system
**Scenario:** PASS if withdrawal applies to future secondary use and model retraining/unlearning feasibility is explicit.  
**Universe (7):** stop all future use and exclude data from future model versions (✓ autonomy/governance); perform machine unlearning where technically feasible and validated not to create unsafe/fairness degradation (✓ emerging governance); do not alter already trained deployed model but stop future data use and document residual contribution (constructed proportionality); retrain model without withdrawn data at next scheduled safe release (constructed operational); patient-control framework favoring maximal removal (✓ framework); safety/fairness framework limiting retroactive alteration when deletion would degrade care for others (✓ framework); transparent residual-data/model lineage + independent review of infeasible deletion requests (✓ governance).  
**Source-grounded:** emerging; direct patient-policy evidence sparse. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M152 — AI prescreening for clinical-trial recruitment
**Scenario:** PASS; separate algorithmic EHR prescreening, outreach, and consent to enroll.  
**Universe (7):** allow internal EHR prescreening under research/privacy governance before patient contact (✓ governance-derived); require treating-clinician mediation before outreach (constructed/professional); direct research-team outreach after prescreening with transparent opt-out (constructed policy); explicit patient opt-in to research-search services before algorithmic screening (✓ autonomy framework); bias/representativeness rule requiring subgroup audit before use (✓ FDA/justice governance); privacy framework minimizing data fields and logging every query (✓ framework); access/justice framework favoring prescreening where it reduces arbitrary clinician gatekeeping and improves representative enrollment (✓ framework).  
**Source-grounded:** governance/ethics; affected-policy evidence limited. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M153 — AI mental-health companion for crisis users
**Scenario:** PASS at product-governance level; do not treat chatbot as clinician or provide unsafe crisis instructions.  
**Universe (6):** immediately encourage/route to human crisis/emergency support when credible acute risk is detected (✓ APA/WHO direction); keep conversational support active while escalating, without presenting AI as substitute treatment (✓ professional); require emergency-contact/location escalation only with prior consent or defined imminent-risk/legal threshold (constructed governance); stop ordinary therapeutic-style conversation and switch to crisis-safe minimal mode (constructed safety comparator); autonomy/privacy framework limiting covert escalation/data sharing (✓ framework); beneficence/safety framework favoring proactive human escalation when risk is high (✓ framework).  
**Source-grounded:** professional convergence on human escalation/non-substitution. **Expanded:** YES. **Demo:** HIGH. **Action:** EXPAND-UNIVERSE.

## M154 — AI in organ-allocation support
**Scenario:** PASS if ML adds a validated prediction beyond current score and allocation principles remain declared.  
**Universe (7):** use ML only as advisory input to transparent allocation rule (✓ governance/framework); integrate validated ML prediction directly into declared score after subgroup/robustness audit (constructed future policy); prohibit black-box features that cannot be related to legitimate allocation principles (✓ framework); human committee review for exceptions/outlier cases (constructed governance); utility framework favoring improved outcome prediction (✓ framework); procedural-legitimacy/equity framework limiting opaque algorithmic influence (✓ framework); prospective silent evaluation before policy deployment with public reporting of subgroup impact (✓ governance).  
**Source-grounded:** immature implementation; Public role sparse. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M155 — AI diagnosis in lower-resource setting with weak local validation
**Scenario:** PASS if access benefit is substantial, local validation limited rather than absent, and alternative care scarcity specified.  
**Universe (7):** do not deploy until adequate local-population validation (✓ WHO/safety governance); monitored limited deployment with human confirmation while gathering local evidence (✓ governance-derived); deploy broadly if model substantially improves access over current absence of care, with active monitoring/rollback (constructed proportionality); restrict to tasks/subgroups where local performance has been verified (constructed risk-tiered); epistemic-justice framework requiring local expertise/data and governance (✓ WHO/framework); access/beneficence framework tolerating bounded uncertainty when alternative is no service (✓ framework); equity rule requiring local subgroup performance and community oversight rather than importing data-rich-country averages (✓ framework).  
**Source-grounded:** governance strong, affected local-policy evidence setting-specific. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M156 — Biomedical animal research: replacement threshold
**Scenario:** CROSSWALK with Featured F17 unless the inventory object is materially different. The packet itself concerns moderate-harm animal research where a nonanimal method can answer much but not all of the question.  
**Universe (7):** replace animal study when nonanimal method is scientifically adequate for the question (✓ 3Rs/professional); use staged NAM-first design and animals only for residual questions not answerable otherwise (✓ professional/governance); permit animal study when whole-organism evidence is materially necessary and harms minimized (✓ professional); require higher scientific-value threshold as animal harm severity rises (✓ framework/governance); rights-based abolitionist position rejecting harmful non-beneficial animal experimentation (✓ framework—this was a confirmed omission in F17); welfare-utilitarian harm-benefit position allowing research when expected benefit and necessity justify burden (✓ framework); precautionary replacement rule favoring slower/costlier NAMs when they can answer most of the question and remaining uncertainty is not decision-critical (constructed comparator).  
**Source-grounded:** professional + framework rich; animal interests are direct normative interests, not a human Public proxy. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** CROSSWALK F17 / EXPAND-UNIVERSE; explicit successor should add abolitionist family rather than silently altering Featured v1.

## M157 — Nonhuman primates in biomedical research
**Scenario:** PASS if claimed unique predictive value, alternatives, species, procedures, severity, and scientific goal explicit.  
**Universe (7):** permit only when NHP model is scientifically necessary and no valid alternative can answer the question, under enhanced welfare/3Rs review (✓ professional); prohibit significant-harm NHP research even where scientifically useful because moral status/cognitive capacities impose a higher bar (✓ framework); allow only low/moderate severity except exceptional life-saving objectives (constructed threshold); phase out NHP use as alternatives mature through explicit replacement milestones (✓ advocacy/framework); welfare-utilitarian position permitting case-by-case use with strong harm-benefit justification (✓ framework/professional); rights/personhood-adjacent position rejecting instrumental harmful use of great apes/highly cognitively complex primates (✓ framework); independent species-specific ethics review + transparency/public reporting (✓ governance).  
**Source-grounded:** professional disagreement + normative; no need for human public proxy. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M158 — High-severity animal infectious challenge study
**Scenario:** PASS if lower-severity alternative is less informative but scientifically plausible, and humane endpoints are concrete.  
**Universe (7):** approve only when severe challenge is scientifically necessary and humane endpoint/minimization optimized (✓ animal-research governance); require lower-severity design even at reduced information yield when severe morbidity is not indispensable (✓ framework/3Rs); reject severe study above an absolute welfare ceiling (constructed rights/welfare threshold); staged pilot/escalation to determine whether lower challenge severity can answer the question (constructed refinement); expected-benefit harm-benefit framework (✓ framework); animal-rights/anti-instrumentalization framework rejecting severe challenge (✓ framework); replacement-first rule requiring nonanimal/in vitro evidence to exhaust uncertainty before severe challenge (✓ 3Rs/framework).  
**Source-grounded:** governance + frameworks; human Public evidence unnecessary for representing animal interests. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M159 — Welfare of source pigs in xenotransplantation
**Scenario:** PASS; source pigs genetically modified and pathogen-controlled, with chronic housing/procedural burdens explicit.  
**Universe (7):** meet regulatory research-animal welfare minimums + veterinary care/IACUC (✓ FDA/WHO); require enhanced species-specific welfare exceeding ordinary lab minimums because animals are bred/lived/killed as organ sources (✓ framework/scholarship); prohibit program configurations causing chronic severe welfare impairment even if biosecurity improves (✓ framework); enrich housing/social/behavioral opportunities to maximum compatible with pathogen control (constructed welfare rule); harm-benefit framework allowing source-animal use for major human benefit under stringent welfare (✓ framework); animal-rights position rejecting breeding/killing sentient animals as organ inventories (✓ framework); independent welfare audit/public reporting + refinement benchmarks (✓ governance).  
**Source-grounded:** governance/framework rich. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M160 — Antimicrobial use in food animals
**Scenario:** CROSSWALK with Featured F18 unless materially distinct.  
**Universe (7):** prohibit medically important antimicrobials for growth promotion/routine prevention without diagnosed disease (✓ WHO); allow therapeutic treatment of clinically ill animals under veterinary oversight (✓ WHO/WOAH); allow narrowly defined metaphylaxis/prevention in high-risk groups where husbandry alternatives insufficient (✓ WOAH-type professional nuance); stricter prevention ban favoring husbandry/biosecurity instead (✓ stewardship framework); animal-welfare framework opposing restrictions that leave sick animals untreated (✓ framework); One Health stewardship framework prioritizing preservation of antimicrobial effectiveness (✓ framework); farm-transition support rule coupling restrictions with husbandry investment so costs do not incentivize undertreatment (constructed justice/implementation).  
**Source-grounded:** strong convergence on therapeutic treatment + stewardship; expanded policy levels remain useful. **Expanded:** YES. **Demo:** HIGH. **Action:** CROSSWALK F18 / EXPAND-UNIVERSE; do not invent permissive routine-use candidate.

## Batch disposition
| Case | n | Source-grounded | Expanded | Demo | Action |
|---|---:|---|---|---|---|
| M151 | 7 | emerging | YES | VERY HIGH | EXPAND-UNIVERSE |
| M152 | 7 | governance | YES | VERY HIGH | EXPAND-UNIVERSE |
| M153 | 6 | human-escalation consensus | YES | HIGH | EXPAND-UNIVERSE |
| M154 | 7 | immature | YES | VERY HIGH | EXPAND-UNIVERSE |
| M155 | 7 | governance strong | YES | VERY HIGH | EXPAND-UNIVERSE |
| M156 | 7 | rich | YES | VERY HIGH | CROSSWALK F17 / EXPAND |
| M157 | 7 | plural | YES | VERY HIGH | EXPAND-UNIVERSE |
| M158 | 7 | governance/framework | YES | VERY HIGH | EXPAND-UNIVERSE |
| M159 | 7 | governance/framework | YES | VERY HIGH | EXPAND-UNIVERSE |
| M160 | 7 | convergence + nuance | YES | HIGH | CROSSWALK F18 / EXPAND |
