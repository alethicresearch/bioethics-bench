# M151 — Patient data deletion versus a learning health system

**Case-family identity:** M151  
**Primary domain:** health data / clinical AI governance  
**Subdomain:** withdrawal, deletion, machine unlearning  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** health-system data/AI governance committee.  
**Decision question:** When a patient withdraws permission for secondary use of their records, what should happen to deployed models already trained on those data?

## 2. Concise representation

A health system trained a validated clinical risk model on historical patient records collected under a lawful secondary-use program. A patient later withdraws permission for future secondary use and asks that the influence of their record also be removed from models already trained on it. The system can stop future use of the raw record immediately. Exact machine unlearning is technically possible only for some model types and can alter subgroup performance; full retraining is costly and may itself change clinical behavior. The system must decide whether withdrawal applies prospectively only, whether it should require feasible and validated unlearning/retraining when individual influence can be removed safely, or whether models trained under prior lawful governance may retain historical aggregate influence while the underlying record is no longer reused.

## 3. Detailed representation

A learning health system uses de-identified historical records to train a deployed prediction model. The patient whose record contributed to training later withdraws permission for secondary research use. The raw record can be removed from future research datasets and new training runs. The patient also asks the institution to remove the effect of their prior data from the deployed model. Recent machine-unlearning methods can sometimes approximate or achieve removal without rebuilding a model from scratch, but performance and fairness may change after selective removal, especially for small subgroups. Full retraining is feasible but expensive and can disrupt a clinically validated model. The governance committee must decide whether withdrawal stops only future access/use; whether validated unlearning or retraining should be required whenever technically feasible and clinically safe; or whether previously trained model parameters may remain unchanged when the earlier use was lawful, with deletion applying to identifiable/raw data and future model development.

## 4. Critical facts and uncertainty

- raw data can be removed from future secondary use;
- model influence is not equivalent to a stored row;
- unlearning may be technically feasible but can alter fairness/performance;
- full retraining has real costs and can change a validated clinical system;
- the original training use was lawful and governed.

## 5. Serious policy families

- prospective stop only;
- feasible validated unlearning/retraining;
- no retroactive model alteration once data are irreversibly aggregated under prior governance.

## 6. Public / affected evidence

Direct patient-policy evidence comparing these three architectures is currently insufficient. Existing privacy preferences support control over secondary data use but do not establish whether patients expect model-parameter effects to be removed after lawful training.

## 7. Expert / professional evidence

2026 clinical-AI literature argues that machine-unlearning readiness should become part of governance, while companion work demonstrates that removal can worsen subgroup fairness. No mature health-system consensus yet defines a universal retrospective deletion rule.

## 8. Framework positions

- autonomy/data control → require meaningful downstream withdrawal where feasible;
- learning-health-system stewardship → prospectively stop reuse but preserve validated aggregate models;
- proportionality/safety → require unlearning only when removal is technically demonstrable and does not create disproportionate clinical harm.

## 9. References

- Porter A, et al. *Machine unlearning as a governance imperative for clinical AI*. npj Digit Med. 2026.
- Wang Y, et al. *Mitigating algorithmic unfairness arising from forgetfulness of medical records in clinical artificial intelligence*. Nat Commun. 2026.
- Machine-unlearning and right-to-be-forgotten healthcare literature, 2024–2026.

## 10. Construction risks

Do not equate deleting a source record with guaranteed erasure of statistical influence; do not assume unlearning is always safe; do not treat legal deletion rights as identical across jurisdictions.

## 11. Executable-eligibility judgment

`research-complete-not-executable`. The policy problem is mature enough for the corpus, but direct affected-community evidence for competing downstream-model rules is not yet strong enough under the strict source-to-policy standard.
