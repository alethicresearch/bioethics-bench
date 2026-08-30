# Bioethics Bench — Rich Candidate Audit M141–M150

**Date:** 2026-08-30

## M141 — Commercial partnership using health-system data
**Scenario:** PASS; purpose, data identifiability, commercial benefit, public benefit, and governance/return must be explicit.  
**Universe (7):** governed partnership without individual reconsent for low-risk public-benefit analytics (✓ source-informed public/governance); explicit opt-in for identifiable/commercial uses (✓ source-informed public); opt-out with strong transparency/independent oversight (✓ policy/public); benefit-sharing/reinvestment requirement where commercial value is generated (✓ framework); prohibit sale/exclusive commercial access without consent (✓ privacy framework); public-benefit framework allowing partnership where outputs improve care and access (✓ framework); data-trust/intermediary model separating health system from vendor and constraining downstream use (constructed governance).  
**Source-grounded:** YES. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M142 — AI care-management allocation and structural bias
**Scenario:** PASS if validated disparity is traced to proxy/structural bias and an alternative correction exists with known tradeoffs.  
**Universe (7):** recalibrate/replace biased proxy before continued use (✓ professional/governance); add equity constraints or direct need variables even at modest overall predictive cost (✓ framework/governance); suspend use until subgroup performance meets threshold (✓ professional); continue temporarily with clinician review/manual equity correction while replacement is built (constructed operational); equal-performance framework favoring subgroup parity (✓ framework); clinical-benefit framework permitting some performance differences if outcomes improve for every group and no less discriminatory alternative exists (constructed proportionality); continuous bias monitoring/audit + appeal pathway (✓ governance).  
**Source-grounded:** professional mitigation consensus; expanded tradeoff analysis valuable. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M143 — Clinician override of validated AI recommendation
**Scenario:** PASS; model validated for task, recommendation conflicts with clinician judgment, stakes and override documentation explicit.  
**Universe (6):** clinician may override with documented rationale and accountability (✓ AMA/WHO); mandatory human review before high-stakes AI recommendation is acted on (✓ professional); require second review when override conflicts with strongly validated model in high-risk case (constructed safety comparator); model-default with human override for low-risk standardized tasks (constructed risk-tiered rule); professional-responsibility framework preserving clinician authority (✓ framework); consistency/decision-quality framework requiring structured justification for override to reduce arbitrary bias (✓ framework).  
**Source-grounded:** one human-oversight architecture. **Expanded:** YES. **Demo:** HIGH. **Action:** EXPAND-UNIVERSE.

## M144 — Disclosure of AI involvement to patients
**Scenario:** PASS; define whether AI affects diagnosis/treatment, documentation only, or autonomous workflow.  
**Universe (7):** disclose any material AI role in clinical decision-making (✓ professional/patient); disclose only when AI materially affects high-stakes decision or substitutes for human work (✓ source-informed/constructed); routine general notice for low-risk ubiquitous tools plus encounter-specific disclosure for material uses (constructed tiered); explicit consent for autonomous/high-impact AI (✓ framework/patient); transparency framework favoring meaningful explanation rather than boilerplate (✓ professional/framework); burden/attention framework limiting repetitive disclosure where AI use is incidental (constructed); patient-choice rule allowing request for human-only review where feasible (✓ source-informed/framework).  
**Source-grounded:** YES. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M145 — Diagnostic AI with unequal subgroup performance
**Scenario:** PASS if performance gap, clinical benefit, alternative access, and subgroup harm are quantified.  
**Universe (7):** do not deploy until minimum subgroup-performance/equity threshold met (✓ governance); deploy with restricted indication excluding underperforming subgroup while collecting data/improving model (constructed professional comparator); deploy with mandatory human confirmation for underperforming subgroup (constructed mitigation); deploy if every subgroup benefits versus current care despite unequal absolute performance, with monitoring and improvement plan (constructed proportionality); equity framework favoring parity/anti-discrimination (✓ framework); aggregate-benefit framework allowing bounded disparity when no better alternative and net benefit positive (constructed framework); postmarket subgroup monitoring + transparent labeling/appeal (✓ FDA/WHO governance).  
**Source-grounded:** professional rejects avoidable major disparity; expanded policy thresholds useful. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M146 — Ambient AI recording for clinical documentation
**Scenario:** PASS; audio capture, retention, vendor access, secondary use, and deletion rules explicit.  
**Universe (7):** encounter-level explicit opt-in consent (✓ patient evidence); well-disclosed default-on with easy opt-out where recordings are transient/minimized (✓ source-informed/constructed); no persistent audio retention after note generation except separately authorized cases (✓ privacy framework); patient may pause/exclude sensitive portions at any time (✓ patient-control framework); clinician may decline ambient tool where it impairs care/confidentiality (constructed professional); prohibit secondary model training without separate consent (✓ privacy/governance); transparency/benefit framework permitting routine use when documentation burden falls and patient acceptance is high under strong safeguards (✓ framework).  
**Source-grounded:** YES. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M147 — Autonomous diagnostic AI and human review
**Scenario:** PASS only for a defined FDA-authorized/validated task and harm tier.  
**Universe (6):** autonomous use for narrow low-risk validated task with clear escalation triggers (✓ real policy/practice); mandatory clinician review for high-stakes diagnoses or uncertain outputs (✓ professional); human review only for low-confidence/out-of-distribution cases (constructed risk-tiered); patient option to request clinician review where practical (✓ autonomy framework); safety/accountability framework favoring earlier human intervention as harm rises (✓ AMA); access/efficiency framework allowing autonomy where human bottleneck materially reduces care and validation is strong (constructed framework).  
**Source-grounded:** risk-tiered professional architecture. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M148 — AI-driven prior authorization
**Scenario:** PASS; separate automatic approval from denial/adverse determination.  
**Universe (6):** automate approvals but require physician/human review for denials or material restrictions (✓ AMA policy); no autonomous adverse coverage decisions (✓ professional); AI triage/prioritization with mandatory human final decision for adverse cases (✓ governance); fully automated determinations only for objective rule-based criteria with immediate appeal (constructed comparator); due-process framework requiring explanation, timely appeal, and conflict-of-interest safeguards (✓ framework); efficiency/access framework favoring automation when it shortens approval time without increasing wrongful denials (constructed framework).  
**Source-grounded:** strong professional consensus against autonomous adverse substitution. **Expanded:** YES. **Demo:** HIGH. **Action:** EXPAND-UNIVERSE.

## M149 — Updating a deployed clinical AI model
**Scenario:** PASS; distinguish predefined bounded updates from material changes to intended use/performance.  
**Universe (7):** PCCP-bounded updates without full new authorization when validation/impact plan satisfied (✓ FDA); full revalidation/authorization for material out-of-scope changes (✓ FDA); frozen periodic version releases with scheduled validation (constructed conservative); continuous learning under real-time monitoring and rollback thresholds (constructed future governance); lifecycle-benefit framework favoring safe iterative improvement (✓ framework); precaution/traceability framework favoring slower versioned updates (✓ framework); user/patient transparency rule requiring meaningful notice when changes alter performance or intended use (✓ governance).  
**Source-grounded:** YES. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## M150 — Synthetic health data: privacy versus representativeness
**Scenario:** PASS if synthetic dataset is proposed for research/model development and privacy leakage + minority fidelity can be measured.  
**Universe (7):** use synthetic data only after formal privacy and utility/fidelity testing (✓ evidence/governance); prefer synthetic over real identifiable data where task performance and subgroup fidelity remain adequate (constructed privacy-first); use controlled real data instead when synthetic generation materially distorts minority/rare patterns (✓ equity framework); hybrid synthetic + secure real-data validation (constructed balanced); minimum subgroup-fidelity thresholds before release/use (✓ framework); privacy framework maximizing disclosure-risk reduction (✓ framework); scientific-validity/equity framework rejecting privacy gains that erase clinically important minority structure (✓ framework).  
**Source-grounded:** standards immature; Public role limited. **Expanded:** YES. **Demo:** VERY HIGH. **Action:** EXPAND-UNIVERSE.

## Batch disposition
| Case | n | Source-grounded | Expanded | Demo | Action |
|---|---:|---|---|---|---|
| M141 | 7 | YES | YES | VERY HIGH | EXPAND-UNIVERSE |
| M142 | 7 | mitigation consensus | YES | VERY HIGH | EXPAND-UNIVERSE |
| M143 | 6 | human-oversight consensus | YES | HIGH | EXPAND-UNIVERSE |
| M144 | 7 | YES | YES | VERY HIGH | EXPAND-UNIVERSE |
| M145 | 7 | equity governance strong | YES | VERY HIGH | EXPAND-UNIVERSE |
| M146 | 7 | YES | YES | VERY HIGH | EXPAND-UNIVERSE |
| M147 | 6 | risk-tiered | YES | VERY HIGH | EXPAND-UNIVERSE |
| M148 | 6 | adverse-review consensus | YES | HIGH | EXPAND-UNIVERSE |
| M149 | 7 | YES | YES | VERY HIGH | EXPAND-UNIVERSE |
| M150 | 7 | immature standards | YES | VERY HIGH | EXPAND-UNIVERSE |
