# M150 — Synthetic health data: privacy versus representativeness

**Case-family identity:** M150  
**Primary domain:** health data / synthetic data governance  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system data-governance board.  
**Decision question:** Should a health system release synthetic patient data for research when re-identification risk is low but minority patterns may be distorted?

## Scenario pair
**Concise:** A health system can generate a synthetic dataset that closely reproduces overall clinical patterns and has low measured re-identification risk. Audit shows that several small minority subgroups are less faithfully represented, making some disparities and rare associations harder to study. The system must decide whether to release the synthetic data after privacy/utility validation, keep data under controlled access because fidelity is uneven, or release synthetic data while retaining governed real-data access for questions requiring subgroup fidelity.

**Detailed:** A health system wants to expand research access while protecting patient privacy. A synthetic-data generator creates records that do not correspond one-to-one with real patients and performs well on common population-level analyses. Formal privacy testing suggests low re-identification risk, but validation shows reduced fidelity for rare conditions and smaller demographic subgroups. A 2025 scoping review found no consensus on standardized privacy/utility evaluation for medical synthetic data and noted that many studies either omit privacy evaluation or underestimate risk. The board must decide whether validated synthetic data are safe enough for broad release, whether all use should remain controlled until stronger standards exist, or whether synthetic release should be paired with governed access to real data for equity-sensitive analyses.

## Source architecture
Contemporary reviews characterize synthetic health data as promising but not automatically private or representative. Privacy and utility must both be measured for the intended use, and subgroup/rare-event fidelity can be a distinct concern from average performance. Direct public policy evidence is still limited.

## Serious policy families
- release after explicit privacy and utility validation;
- controlled access only while privacy/utility standards remain unsettled;
- release synthetic data for broad exploration while preserving governed real-data access for subgroup-sensitive validation.

## Normative bridges
**Privacy/access:** synthetic data may enable useful research without distributing raw records.  
**Epistemic justice:** data that erase minority patterns can make underrepresented groups less visible in research.  
**Fitness for purpose:** “synthetic” is not a categorical safety label; governance should track measured privacy and analytic fidelity.

## Construction risks
Do not say synthetic data cannot leak information; do not assess utility only on population averages; distinguish release for exploration from evidence used in clinical/regulatory decisions.

## Executable judgment
`research-complete-not-executable`. The policy object is strong and contemporary, but direct affected-public evidence is insufficient for a source-grounded executable candidate pool.

## Principal sources
Kaabachi et al., npj Digital Medicine 2025, scoping review of privacy and utility metrics in medical synthetic data (PMID 39870798); 2025 systematic reviews of privacy-preserving synthetic health data; health-data equity literature.
