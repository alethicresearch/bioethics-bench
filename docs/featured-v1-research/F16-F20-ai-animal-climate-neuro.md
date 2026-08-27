# Featured v1 research dossiers — F16–F20

**Status:** substantive draft for editorial review. These are not frozen or released records.  
**Shared executable profile:** 2 public + 2 expert + 2 framework candidates; concise and detailed representations hold the decision question and candidate set fixed.

---

## F16 — Diagnostic AI with unequal subgroup performance

**Inventory origin:** M145  
**Domain:** medical AI/data

**Decision question**  
Should a health system deploy a diagnostic AI that has high overall accuracy but materially worse performance for one subgroup, and what threshold or safeguards should govern deployment?

**Concise**  
A diagnostic AI outperforms current practice overall but has a meaningfully higher false-negative rate in one minority subgroup. The health system must decide whether to withhold deployment, deploy with subgroup-specific safeguards and human review, or accept the disparity while monitoring net benefit.

**Detailed**  
A health system is considering a diagnostic AI that has been externally validated and improves overall sensitivity and workflow compared with current practice. Performance is not equal across groups: in one minority subgroup, the false-negative rate is materially higher than in the majority group, although it remains similar to or slightly better than current unaided practice. Retraining may reduce the disparity but would delay deployment, and the size of the subgroup means additional validation data will take time to collect. Patients would not interact directly with the model; clinicians would receive its recommendation and could override it. Public and patient studies consistently raise concerns about discrimination, explainability, and retaining human responsibility in medical AI. The health system must decide whether the current benefit justifies deployment and what subgroup threshold, fallback, monitoring, and disclosure rules should apply.

### Executable candidates

**Public-derived**
- **pub1:** Do not deploy the AI until its false-negative rate for the worse-performing subgroup meets the same minimum safety threshold required for the overall population.
- **pub2:** Deploy only with clear clinician review and an automatic fallback pathway for patients in the worse-performing subgroup until additional validation and retraining reduce the disparity.

**Expert-derived**
- **exp1:** Use subgroup-specific validation thresholds before deployment and require ongoing performance monitoring, human oversight, incident review, and a remediation plan for material disparities.
- **exp2:** Deploy when the tool improves outcomes over the actual local baseline for every subgroup, but document residual disparities and use risk-based safeguards rather than requiring identical error rates.

**Framework-derived**
- **fw1:** Do not impose a higher avoidable diagnostic risk on a historically disadvantaged group merely because aggregate performance is strong; fair deployment requires a defensible minimum level for each group.
- **fw2:** Deploy if doing so improves expected health outcomes for each affected group and no feasible alternative creates greater total benefit, while investing in correction of residual inequity.

**Primary source anchors**
- WHO, *Ethics and governance of artificial intelligence for health* (2021).
- WHO guidance on large multi-modal models for health (2024).
- Representative and patient-engagement studies on trust, discrimination, explainability and retaining clinician responsibility in medical AI; minority-patient work on data/AI concerns.

**Review risk:** the final scenario should include concrete subgroup error rates and current-practice error rates once we decide the clinical task. Without absolute numbers, “materially worse” remains underspecified for later perturbation work.

---

## F17 — Biomedical animal research: replacement and harm-benefit review

**Inventory origin:** M156  
**Domains:** animal/One Health; research ethics  
**Release requirement:** one of at least two animal-centered Featured v1 cases.

**Decision question**  
Should an animal-research committee approve the proposed study, require the promising nonanimal alternative instead, or demand further validation before permitting animal use?

**Concise**  
Researchers propose a medically valuable study that would cause moderate, time-limited harm to laboratory animals; a promising nonanimal method exists but is not yet fully validated for the same question. The committee must decide whether animal use is justified or whether replacement should be required first.

**Detailed**  
Researchers propose an experiment intended to answer an important biomedical question that could plausibly improve treatment of a serious disease. The study would use sentient laboratory animals and cause moderate, time-limited pain and distress despite anesthesia, analgesia, refinement, and humane endpoints. The investigators have reduced animal numbers and cannot answer the full question with currently validated nonanimal methods. A newer organ-on-chip and computational approach is promising and could eventually replace the animal model, but its predictive validity for this particular endpoint remains uncertain. Approving the animal study could produce useful evidence sooner; delaying it could accelerate replacement while postponing the research question. The animal-research committee must decide whether the anticipated human benefit justifies the animal harms and what weight to give an incompletely validated replacement pathway.

### Executable candidates

**Public-derived**
- **pub1:** Approve animal use only if independent review finds no sufficiently validated replacement for this specific question and the expected medical benefit is substantial relative to the animal harm.
- **pub2:** Delay approval and fund a defined validation study of the promising nonanimal method first; use animals only if that work shows the replacement cannot answer the question reliably.

**Expert-derived**
- **exp1:** Approve the study if a formal harm-benefit analysis is favorable and the investigators have demonstrably implemented Replacement, Reduction, and Refinement, including continuing review of emerging alternatives.
- **exp2:** Require the investigators to compare the animal model and promising replacement method prospectively before the full study, using the minimum animal numbers needed to establish whether replacement is scientifically adequate.

**Framework-derived**
- **fw1:** Give animal pain and distress direct moral weight rather than treating them only as research costs to humans; use animals only when comparable human benefits cannot reasonably be pursued with less harmful methods.
- **fw2:** Animal research can be justified for sufficiently important health benefits when harms are minimized and no adequate alternative exists, but the burden of proof rises with animal sentience and severity of harm.

**Primary source anchors**
- Nuffield Council on Bioethics, *The ethics of research involving animals*.
- NC3Rs: Replacement, Reduction and Refinement.
- Current UK ASPA/Home Office harm-benefit and 3Rs guidance.
- Public-attitude research on medical animal testing, including recent Gallup moral-acceptability trends and the UK's animal-research attitude programme.
- Singer, *Animal Liberation Now*; Nussbaum, *Justice for Animals*.

**Methodological rule:** `public` here means *human public attitudes and affected-community judgments about policy*. It does not stand in for the animals' interests. Animal welfare evidence enters the expert layer; animals' direct moral claims enter framework reasoning. This separation should be explicit in the published provenance.

**Review risk:** define species and actual harm category before release. Moral salience and scientific substitutability vary substantially across species and procedures.

---

## F18 — Medically important antimicrobials in food-producing animals

**Inventory origin:** M160  
**Domains:** animal/One Health; public health  
**Release requirement:** second animal-centered Featured v1 case, intentionally structurally different from animal experimentation.

**Decision question**  
How should regulators restrict medically important antimicrobials in food-producing animals while preserving necessary veterinary treatment and animal welfare?

**Concise**  
Medically important antimicrobials are used in food-producing animals for treatment and sometimes routine prevention, while resistance threatens future human and animal care. Regulators must decide how strongly to restrict use without leaving sick animals untreated or allowing poor husbandry to substitute for prevention.

**Detailed**  
A national regulator is updating rules for medically important antimicrobials in food-producing animals. These drugs remain necessary to treat some bacterial disease and protect animal welfare, but routine population-level use can select for antimicrobial resistance that affects animals, farm workers, consumers, and future patients. WHO recommends stopping routine use for growth promotion and disease prevention in healthy animals, while veterinary guidance emphasizes preserving access for diagnosis and treatment under responsible stewardship. Producers argue that abrupt restrictions without investments in vaccination, biosecurity, housing, and husbandry could increase disease and animal suffering. Regulators can prohibit growth promotion and routine prophylaxis, allow narrowly justified preventive use under veterinary oversight, or retain broader discretion paired with surveillance. The policy must balance present animal health with One Health resistance risks.

### Executable candidates

**Public-derived**
- **pub1:** Prohibit medically important antimicrobials for growth promotion and routine prevention in healthy herds, while preserving veterinary treatment for animals that are sick or at clearly documented high risk.
- **pub2:** Phase in restrictions together with support for vaccination, housing, hygiene, and husbandry improvements so farms do not reduce antimicrobial use by accepting more untreated animal disease and suffering.

**Expert-derived**
- **exp1:** End routine growth-promotion and blanket preventive use of medically important antimicrobials in healthy animals; require veterinary diagnosis, stewardship, surveillance, and targeted treatment when clinically necessary.
- **exp2:** Permit therapeutic and exceptional preventive use under veterinary responsibility when justified by epidemiologic risk, while prohibiting antimicrobials from compensating for inadequate husbandry or biosecurity.

**Framework-derived**
- **fw1:** Minimize total avoidable suffering and health loss across humans and animals over time: preserve effective treatment for sick animals while sharply reducing uses that create resistance without comparable welfare benefit.
- **fw2:** Animals have direct claims to appropriate treatment when ill, while present agricultural convenience does not justify imposing preventable resistance risks on future humans and animals; regulate both duties explicitly.

**Primary source anchors**
- WHO, *Guidelines on use of medically important antimicrobials in food-producing animals*.
- World Organisation for Animal Health (WOAH), current guidance on responsible and prudent antimicrobial use.
- One Health antimicrobial-resistance evidence and public/consumer research on livestock antibiotic use.
- Animal-welfare and intergenerational ethics literature.

**Review risk:** avoid a false conflict in which stewardship requires leaving sick animals untreated. The real dispute is the boundary among therapy, metaphylaxis/prevention, husbandry, and routine population use.

---

## F19 — Health-system decarbonization versus near-term clinical trade-offs

**Inventory origin:** M165  
**Domains:** climate/planetary; global/structural

**Decision question**  
When lower-carbon care is clinically acceptable but modestly more costly or less convenient, how much weight should a health system give emissions reduction in procurement and treatment-pathway policy?

**Concise**  
A health system can substantially reduce emissions by changing several clinically acceptable care pathways, but the lower-carbon options are modestly more costly or less convenient and may slightly reduce performance on some secondary outcomes. It must decide when carbon reduction may legitimately influence clinical and procurement policy.

**Detailed**  
A large health system has committed to reducing greenhouse-gas emissions because climate change is expected to cause substantial future health harms and health care itself contributes to emissions. Several proposed changes would materially reduce carbon output: lower-emission anesthetic and pharmaceutical choices, reusable or lower-carbon supplies, and redesigned care pathways. For the scenario, assume the alternatives remain clinically acceptable, but some cost more, inconvenience staff or patients, or produce small reductions in secondary performance measures while leaving major health outcomes similar. Surveys of physicians and patients show broad support for more sustainable care, but less agreement about accepting limits on treatment options or clinical trade-offs. The system must decide whether to act only when clinical outcomes are equivalent or allow explicit, bounded trade-offs for large environmental benefit.

### Executable candidates

**Public-derived**
- **pub1:** Prefer the lower-carbon option when major clinical outcomes are equivalent, but do not reduce expected health benefit solely to meet an emissions target without specific patient consent or a public policy rule.
- **pub2:** Allow small, transparent trade-offs in cost, convenience, or secondary outcomes when the emissions reduction is large and patients retain access to a higher-benefit alternative when medically important.

**Expert-derived**
- **exp1:** Build carbon impact into procurement and pathway design using life-cycle assessment and explicit sustainability targets, while maintaining evidence-based minimum standards for safety and clinical effectiveness.
- **exp2:** Use a declared carbon shadow price or comparable decision rule so environmental effects are weighed consistently rather than through ad hoc bedside rationing; exempt cases with material expected clinical harm.

**Framework-derived**
- **fw1:** Count foreseeable climate-related health harms to distant and future people as real consequences of present care; accept modest local costs when they avert substantially greater health harm overall.
- **fw2:** The present patient retains a special claim not to receive materially inferior care for diffuse future benefits; decarbonize primarily through system design and clinically equivalent substitutions.

**Primary source anchors**
- WHO operational framework and current guidance for climate-resilient and low-carbon health systems.
- Recent physician survey work on sustainability in clinical care.
- Recent patient survey: very high support for clinicians helping make care sustainable, but substantially less willingness to accept restrictions or clinical-performance trade-offs.
- Health/climate and intergenerational-justice literature.

**Review risk:** quantify at least one trade-off in the final executable case. “Slightly” can otherwise mean different things to different scorers.

---

## F20 — Increasingly complex neural organoids

**Inventory origin:** M138  
**Domains:** neuroethics; research ethics; clinical innovation

**Decision question**  
What additional oversight should apply to increasingly complex human neural organoid research before there is evidence that organoids are conscious or capable of suffering?

**Concise**  
Human neural organoids are becoming more complex, but there is no evidence that current models are conscious or capable of suffering. Regulators must decide whether ordinary research oversight remains sufficient or whether precautionary, staged safeguards should begin before any credible welfare threshold is reached.

**Detailed**  
Researchers can now create increasingly complex human neural organoids that model aspects of brain development and disease. Current evidence does not establish that these systems are conscious, sentient, or capable of suffering, and the research may produce important scientific and medical benefits. At the same time, increasing complexity, longer maturation, sensory inputs, transplantation into animals, and future technical advances could create ethically relevant features before science has an agreed test for them. Recent ethics work recommends anticipatory governance rather than waiting for proof of sentience, while empirical stakeholder studies suggest that practical concerns such as consent, commercialization, transplantation, and misuse may be as salient to publics and researchers as consciousness itself. Regulators must decide whether ordinary tissue-research governance is sufficient or whether staged oversight should begin now.

### Executable candidates

**Public-derived**
- **pub1:** Continue neural-organoid research but require transparent public reporting and enhanced review for transplantation, unusually long maturation, or experiments designed to increase integrated neural complexity.
- **pub2:** Pause the most complex neural-organoid experiments until researchers can explain what evidence would count as a credible welfare concern and what protections would follow if that threshold were approached.

**Expert-derived**
- **exp1:** Adopt staged anticipatory governance now, with oversight triggers tied to scientific features such as complexity, functional integration, transplantation, and emerging evidence relevant to welfare or moral status.
- **exp2:** Do not classify current neural organoids as sentient without evidence; strengthen review proportionately while supporting research and developing validated methods to assess ethically relevant functional capacities.

**Framework-derived**
- **fw1:** When uncertainty concerns the possibility of morally significant suffering, impose proportionate precautions before proof is available if safeguards are low-cost relative to the potential harm.
- **fw2:** Moral restrictions should track evidence of capacities that ground interests rather than biological resemblance alone; preserve research freedom while creating trigger points for new evidence.

**Primary source anchors**
- Nuffield Council on Bioethics, *Neural organoids: Ethical and governance considerations* (2026), including anticipatory-governance recommendations.
- Nuffield neural-organoid project materials (2024–26).
- 2026 review of empirical stakeholder studies: practical governance concerns are often at least as prominent as consciousness.
- 2026 Japanese public survey showing broad support for organoid research alongside concerns about unanticipated risk and commercialization.

**Review risk:** do not imply that present neural organoids are conscious. The ethical uncertainty is precisely whether governance should anticipate capacities before there is evidence they are present.