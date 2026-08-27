# M147 — Autonomous diagnostic AI and human review

**Case-family identity:** M147  
**Primary domain:** clinical AI / autonomy and oversight  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system clinical governance committee.  
**Decision question:** When an autonomous diagnostic system meets a high validation threshold, should clinician review still be required before action?

## Scenario pair
**Concise:** A validated autonomous AI performs a narrow diagnostic task with high accuracy and can immediately trigger a low-risk next step. Requiring clinician review adds delay and workload but creates an opportunity to catch unusual cases. The system must decide whether every result requires human review, whether autonomous action is acceptable for defined low-risk/high-confidence cases, or whether review should be risk-tiered.

**Detailed:** A health system deploys an FDA-authorized autonomous diagnostic tool for a narrowly defined task. Prospective local validation confirms high accuracy and reliable abstention when inputs are poor. A positive result would trigger a standardized low-risk referral rather than invasive treatment. Clinician review would add hours or days and may reduce access in resource-limited clinics. AMA principles generally preserve qualified human intervention points, with earlier intervention as potential patient harm rises. The system must decide whether all results require clinician review, whether low-risk high-confidence outputs can act autonomously, or whether escalation should depend on uncertainty and downstream harm.

## Source architecture
Professional AI guidance favors human oversight, but actual autonomous diagnostic devices create a concrete exception space for narrow tasks. The strongest source-grounded architecture is therefore risk-tiered rather than broad claims that humans must or need never review all AI outputs.

## Serious policy families
- mandatory human review before clinical action;
- autonomous action for narrowly defined low-risk/high-confidence outputs;
- risk-tiered escalation based on uncertainty and downstream harm.

## Normative bridges
**Accountability:** human review can preserve responsibility and contextual judgment.  
**Access/efficiency:** mandatory review can negate the access benefit of autonomous tools.  
**Proportionality:** oversight should scale with consequences of error and model uncertainty.

## Construction risks
Do not generalize from one low-risk task to medicine broadly; specify action consequences; distinguish autonomous diagnosis from autonomous high-risk treatment.

## Executable judgment
`needs-additional-evidence`. Strong governance object, but public/patient evidence on review thresholds is not yet sufficiently policy-specific.

## Principal sources
AMA AI principles; WHO AI governance; FDA-authorized autonomous diagnostic device literature and human-oversight scholarship.
