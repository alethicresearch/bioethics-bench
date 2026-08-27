# M142 — AI care-management allocation and structural bias

**Case-family identity:** M142  
**Primary domain:** health AI / distributive justice  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system population-health program.  
**Decision question:** Should a health system deploy an AI care-management model that improves aggregate targeting but systematically under-identifies need in a disadvantaged group?

## Scenario pair
**Concise:** A validated algorithm ranks patients for intensive care management and improves overall identification of people likely to benefit. Audit shows that, because it partly learned from prior health spending, it under-ranks clinically ill patients in a disadvantaged group whose historical spending was lower despite similar illness burden. The system must decide whether to withhold deployment until disparity is corrected, deploy only with fairness correction/human review, or deploy for aggregate benefit while monitoring the gap.

**Detailed:** A health system has a model that predicts which chronically ill patients should receive scarce high-intensity care-management slots. Compared with the prior manual process, the model increases overall identification of high-need patients. Subgroup audit, however, shows materially lower sensitivity for a disadvantaged racialized population because past health expenditures imperfectly proxy health need and reflect unequal access. The disparity is known and technically reducible, though correction may modestly reduce overall predictive accuracy. The system must decide whether deployment should wait until subgroup performance meets a threshold, proceed with explicit fairness correction and human review, or proceed based on net aggregate benefit with monitoring.

## Source architecture
WHO AI governance emphasizes safety, autonomy, transparency, inclusiveness, equity and accountability. Health-algorithm bias literature demonstrates that cost proxies can encode structural inequality and systematically under-identify need even when aggregate performance appears strong. Contemporary professional governance generally treats identified remediable disparity as a defect to mitigate, not a neutral tradeoff to ignore.

## Serious policy families
- do not deploy until a defined subgroup performance/equity threshold is met;
- deploy with fairness correction, human review and ongoing subgroup audit;
- deploy for aggregate benefit with transparent disparity monitoring while improvement continues.

## Normative bridges
**Equal concern:** predictive systems should not reproduce unequal access as lower measured need.  
**Aggregate benefit:** withholding a useful model can also harm patients who would gain from improved targeting.  
**Correctability:** known remediable bias creates stronger duties than unavoidable statistical variation.

## Construction risks
Specify absolute subgroup performance; do not use “biased” as a conclusion rather than a fact pattern; distinguish calibration, sensitivity and allocation consequences; do not make human review a magical cure.

## Executable judgment
`needs-additional-evidence`. The professional layer converges strongly on mitigation; direct affected-public evidence does not yet provide multiple action-distinct institutional policies.

## Principal sources
WHO, *Ethics and governance of AI for health*; empirical literature on structural bias in population-health algorithms; AI fairness/governance guidance.
