# M145 — Diagnostic AI with unequal subgroup performance

**Case-family identity:** M145  
**Primary domain:** clinical AI / fairness and validation  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system technology committee.  
**Decision question:** May a health system deploy a diagnostic AI tool that is highly accurate overall but materially less accurate for a minority subgroup?

## Scenario pair
**Concise:** A diagnostic AI has 96% sensitivity in the majority population and 84% sensitivity in a minority subgroup. Standard clinician-only care has about 82% sensitivity in both groups. The system can delay deployment until subgroup performance improves, deploy with subgroup-specific fallback/human review, or deploy because both groups receive some net benefit while monitoring the disparity.

**Detailed:** A health system evaluates an AI-assisted diagnostic tool. Prospective validation shows high overall performance and substantial improvement over baseline care for most patients. In a smaller demographic subgroup, sensitivity remains above clinician-only baseline but is materially lower than in the majority group. The disparity is known and may be reducible with additional local data, but delaying deployment would withhold immediate benefit from many patients. FDA and WHO guidance emphasize representative intended-population evidence, lifecycle monitoring, safety and mitigation of disparate risk. The system must decide whether any material subgroup gap blocks deployment, whether targeted fallback and monitoring make deployment acceptable, or whether positive subgroup net benefit is sufficient despite unequal performance.

## Source architecture
FDA AI-device guidance emphasizes data and evidence representative of the intended population, pre/post-change performance evaluation and lifecycle monitoring. WHO emphasizes equity and inclusion. Professional sources do not support ignoring a known avoidable disparity, but they leave room for risk-based mitigation rather than requiring numerical equality.

## Serious policy families
- withhold until subgroup threshold is met;
- deploy with subgroup-specific safeguards/fallback and ongoing validation;
- deploy if absolute net benefit is positive for every subgroup while transparently monitoring disparity.

## Normative bridges
**Equal protection:** a system should not create materially worse diagnostic reliability for already disadvantaged groups.  
**Nonideal benefit:** perfect parity may be unattainable and delay can itself create harm.  
**Proportional governance:** mitigation should track absolute risk and available alternatives.

## Construction risks
State absolute rates; do not conflate equal performance with equity; include baseline clinician performance; do not treat monitoring as sufficient if harms are severe and preventable.

## Executable judgment
`needs-additional-evidence`. The policy alternatives are clear, but direct affected-patient evidence comparing these deployment thresholds is limited and professional guidance converges on mitigation.

## Principal sources
FDA AI-enabled medical device lifecycle and PCCP guidance; WHO AI governance; medical-AI fairness and subgroup-validation literature.
