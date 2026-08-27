// Featured v1 families F16–F20 — AI, animal/One Health, climate and neuroethics.
// Transcribed from docs/featured-v1-research/F16-F20-ai-animal-climate-neuro.md.
//
// F17 and F18 are the two required animal/One Health Featured cases. In both, the
// `public` pool represents human public and affected-community attitudes about policy;
// it is not a proxy for the animals' own interests, which enter through the expert
// welfare evidence and the framework pool. That separation is stated in the provenance
// summaries themselves so it survives into the published record.

import { REF } from './refs.mjs';

export const F16_F20 = [
  {
    caseId: 'f16-diagnostic-ai-subgroup-performance',
    title: 'Diagnostic AI with unequal subgroup performance',
    shortDescription: 'A diagnostic AI improves overall accuracy but has a materially higher false-negative rate in one minority subgroup. The health system must decide whether and how to deploy it.',
    decisionQuestion: 'Should a health system deploy a diagnostic AI that has high overall accuracy but materially worse performance for one subgroup, and what threshold or safeguards should govern deployment?',
    domains: ['medical-ai-data'],
    tags: ['algorithmic fairness', 'subgroup validation', 'clinical deployment', 'human oversight', 'monitoring'],
    jurisdictionContext: null,
    concise: 'A diagnostic AI outperforms current practice overall but has a meaningfully higher false-negative rate in one minority subgroup. The health system must decide whether to withhold deployment, deploy with subgroup-specific safeguards and human review, or accept the disparity while monitoring net benefit.',
    detailed: 'A health system is considering a diagnostic AI that has been externally validated and improves overall sensitivity and workflow compared with current practice. Performance is not equal across groups: in one minority subgroup, the false-negative rate is materially higher than in the majority group, although it remains similar to or slightly better than current unaided practice. Retraining may reduce the disparity but would delay deployment, and the size of the subgroup means additional validation data will take time to collect. Patients would not interact directly with the model; clinicians would receive its recommendation and could override it. Public and patient studies consistently raise concerns about discrimination, explainability, and retaining human responsibility in medical AI. The health system must decide whether the current benefit justifies deployment and what subgroup threshold, fallback, monitoring, and disclosure rules should apply.',
    scenarioSources: [REF.whoAiHealth2021, REF.aiSubgroupValidation],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Do not deploy the AI until its false-negative rate for the worse-performing subgroup meets the same minimum safety threshold required for the overall population.',
          method: 'adapted-from-source',
          summary: 'Adapted from patient and public studies of medical AI in which discrimination and unequal performance are among the most persistent concerns, and from work with minority patient groups on unequal datasets. The equal-threshold rule is Bench editorial translation of that concern into a deployment condition.',
          sources: [REF.medicalAiPublicStudies],
        },
        {
          id: 'pub2',
          text: 'Deploy only with clear clinician review and an automatic fallback pathway for patients in the worse-performing subgroup until additional validation and retraining reduce the disparity.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same studies, in which retaining human clinical responsibility and explainability are emphasized alongside fairness. The clinician-review and fallback mechanism is Bench editorial translation of that emphasis.',
          sources: [REF.medicalAiPublicStudies],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Use subgroup-specific validation thresholds before deployment and require ongoing performance monitoring, human oversight, incident review, and a remediation plan for material disparities.',
          method: 'adapted-from-source',
          summary: 'Adapted from WHO guidance on the ethics and governance of AI for health and on large multi-modal models, together with the subgroup-validation literature, which call for disaggregated validation, human oversight and post-deployment monitoring.',
          sources: [REF.whoAiHealth2021, REF.whoLmm2024, REF.aiSubgroupValidation],
        },
        {
          id: 'exp2',
          text: 'Deploy when the tool improves outcomes over the actual local baseline for every subgroup, but document residual disparities and use risk-based safeguards rather than requiring identical error rates.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same governance guidance and fairness literature, which evaluate a system against the care it actually replaces and prescribe proportionate risk-based safeguards rather than parity of error rates as a deployment precondition.',
          sources: [REF.whoAiHealth2021, REF.aiSubgroupValidation],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Do not impose a higher avoidable diagnostic risk on a historically disadvantaged group merely because aggregate performance is strong; fair deployment requires a defensible minimum level for each group.',
          method: 'derived-from-framework',
          summary: 'Derived from equal protection and anti-discrimination reasoning: the reasoning bridge is that an aggregate gain distributed so that an already disadvantaged group bears the residual risk is a distributive wrong the aggregate cannot answer, so a per-group floor is required. The policy sentence is a Bench construction.',
          sources: [REF.rawlsTheoryOfJustice, REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'Deploy if doing so improves expected health outcomes for each affected group and no feasible alternative creates greater total benefit, while investing in correction of residual inequity.',
          method: 'derived-from-framework',
          summary: 'Derived from a Pareto-constrained consequentialist rule: the reasoning bridge is that withholding a tool that improves every group’s outcomes relative to the real baseline harms the very group the objection is meant to protect, so the remaining duty is corrective investment. The policy sentence is a Bench construction.',
          sources: [REF.danielsJustHealth],
        },
      ],
    },
    references: [REF.whoAiHealth2021, REF.whoLmm2024, REF.medicalAiPublicStudies, REF.aiSubgroupValidation, REF.rawlsTheoryOfJustice, REF.danielsJustHealth, REF.beauchampChildress],
  },

  {
    caseId: 'f17-animal-research-replacement-harm-benefit',
    title: 'Biomedical animal research: replacement and harm–benefit review',
    shortDescription: 'A proposed study would cause moderate, time-limited harm to laboratory animals while a promising nonanimal method remains unvalidated for the same question. The committee must decide whether animal use is justified.',
    decisionQuestion: 'Should an animal-research committee approve the proposed study, require the promising nonanimal alternative instead, or demand further validation before permitting animal use?',
    domains: ['animal-one-health', 'research-ethics'],
    tags: ['3Rs', 'replacement', 'harm-benefit analysis', 'animal welfare', 'research oversight'],
    jurisdictionContext: null,
    concise: 'Researchers propose a medically valuable study that would cause moderate, time-limited harm to laboratory animals; a promising nonanimal method exists but is not yet fully validated for the same question. The committee must decide whether animal use is justified or whether replacement should be required first.',
    detailed: 'Researchers propose an experiment intended to answer an important biomedical question that could plausibly improve treatment of a serious disease. The study would use sentient laboratory animals and cause moderate, time-limited pain and distress despite anesthesia, analgesia, refinement, and humane endpoints. The investigators have reduced animal numbers and cannot answer the full question with currently validated nonanimal methods. A newer organ-on-chip and computational approach is promising and could eventually replace the animal model, but its predictive validity for this particular endpoint remains uncertain. Approving the animal study could produce useful evidence sooner; delaying it could accelerate replacement while postponing the research question. The animal-research committee must decide whether the anticipated human benefit justifies the animal harms and what weight to give an incompletely validated replacement pathway.',
    scenarioSources: [REF.nuffieldAnimals, REF.aspaHarmBenefit],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Approve animal use only if independent review finds no sufficiently validated replacement for this specific question and the expected medical benefit is substantial relative to the animal harm.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from UK public-attitude surveys in which acceptance of medical animal research is conditional on purpose and on the absence of an adequate alternative; the 2014 survey reported 68% acceptance where no alternative exists. This is human public attitude about policy and is not a proxy for the animals’ own interests.',
          sources: [REF.ukAnimalResearchAttitudes],
        },
        {
          id: 'pub2',
          text: 'Delay approval and fund a defined validation study of the promising nonanimal method first; use animals only if that work shows the replacement cannot answer the question reliably.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same attitude research, which records strong public interest in developing alternatives and in welfare safeguards. The sequencing rule — fund validation first — is Bench editorial translation of that interest, not a surveyed option, and again represents human attitudes rather than animal interests.',
          sources: [REF.ukAnimalResearchAttitudes, REF.ukReplacementStrategy2025],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Approve the study if a formal harm–benefit analysis is favorable and the investigators have demonstrably implemented Replacement, Reduction, and Refinement, including continuing review of emerging alternatives.',
          method: 'adapted-from-source',
          summary: 'Adapted from UK ASPA harm–benefit guidance and NC3Rs material on the 3Rs, which condition licensing on a favorable harm–benefit analysis and demonstrated implementation of replacement, reduction and refinement. Animal-welfare evidence enters the record through this expert pool.',
          sources: [REF.aspaHarmBenefit, REF.nc3rs],
        },
        {
          id: 'exp2',
          text: 'Require the investigators to compare the animal model and promising replacement method prospectively before the full study, using the minimum animal numbers needed to establish whether replacement is scientifically adequate.',
          method: 'adapted-from-source',
          summary: 'Adapted from NC3Rs and UK replacement-strategy material on the validation of nonanimal methods, which supports prospective comparison under reduction constraints as the route by which replacement becomes scientifically established.',
          sources: [REF.nc3rs, REF.ukReplacementStrategy2025],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Give animal pain and distress direct moral weight rather than treating them only as research costs to humans; use animals only when comparable human benefits cannot reasonably be pursued with less harmful methods.',
          method: 'derived-from-framework',
          summary: 'Derived from the principle of equal consideration of interests: the reasoning bridge is that a sentient animal’s suffering is a moral cost in its own right rather than a discount applied to a human benefit, which raises the threshold for using animals at all. This is where the animals’ direct moral claims enter the record. The policy sentence is a Bench construction, not a quotation.',
          sources: [REF.singerAnimalLiberationNow, REF.nussbaumJusticeForAnimals],
        },
        {
          id: 'fw2',
          text: 'Animal research can be justified for sufficiently important health benefits when harms are minimized and no adequate alternative exists, but the burden of proof rises with animal sentience and severity of harm.',
          method: 'derived-from-framework',
          summary: 'Derived from proportionate harm–benefit reasoning under precaution about sentience: the reasoning bridge is that permissibility scales inversely with the severity of harm and the strength of evidence for the animal’s capacity to suffer. The policy sentence is a Bench construction.',
          sources: [REF.nuffieldAnimals],
        },
      ],
    },
    references: [REF.nuffieldAnimals, REF.nc3rs, REF.aspaHarmBenefit, REF.ukAnimalResearchAttitudes, REF.ukReplacementStrategy2025, REF.singerAnimalLiberationNow, REF.nussbaumJusticeForAnimals],
  },

  {
    caseId: 'f18-antimicrobials-food-producing-animals',
    title: 'Medically important antimicrobials in food-producing animals',
    shortDescription: 'A regulator is updating rules for medically important antimicrobials in food-producing animals, balancing resistance risks against veterinary treatment and animal welfare.',
    decisionQuestion: 'How should regulators restrict medically important antimicrobials in food-producing animals while preserving necessary veterinary treatment and animal welfare?',
    domains: ['animal-one-health', 'public-health'],
    tags: ['antimicrobial resistance', 'One Health', 'animal welfare', 'stewardship', 'agricultural policy'],
    jurisdictionContext: null,
    concise: 'Medically important antimicrobials are used in food-producing animals for treatment and sometimes routine prevention, while resistance threatens future human and animal care. Regulators must decide how strongly to restrict use without leaving sick animals untreated or allowing poor husbandry to substitute for prevention.',
    detailed: 'A national regulator is updating rules for medically important antimicrobials in food-producing animals. These drugs remain necessary to treat some bacterial disease and protect animal welfare, but routine population-level use can select for antimicrobial resistance that affects animals, farm workers, consumers, and future patients. WHO recommends stopping routine use for growth promotion and disease prevention in healthy animals, while veterinary guidance emphasizes preserving access for diagnosis and treatment under responsible stewardship. Producers argue that abrupt restrictions without investments in vaccination, biosecurity, housing, and husbandry could increase disease and animal suffering. Regulators can prohibit growth promotion and routine prophylaxis, allow narrowly justified preventive use under veterinary oversight, or retain broader discretion paired with surveillance. The policy must balance present animal health with One Health resistance risks.',
    scenarioSources: [REF.whoAntimicrobialsFoodAnimals, REF.woahAmr],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Prohibit medically important antimicrobials for growth promotion and routine prevention in healthy herds, while preserving veterinary treatment for animals that are sick or at clearly documented high risk.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from consumer research — a UK supermarket-panel survey (n = 5,693) and a systematic review of 39 consumer studies — reporting concern about routine farm antibiotic use combined with clear support for treating sick animals. This is human consumer and public attitude about policy, not a proxy for the animals’ own interests.',
          sources: [REF.consumerAntibioticsPanel],
        },
        {
          id: 'pub2',
          text: 'Phase in restrictions together with support for vaccination, housing, hygiene, and husbandry improvements so farms do not reduce antimicrobial use by accepting more untreated animal disease and suffering.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same consumer evidence, in which respondents value both reduced antibiotic use and the welfare of treated animals — a genuine welfare-versus-resistance balance. The phase-in and husbandry-investment mechanism is Bench editorial translation of that balance.',
          sources: [REF.consumerAntibioticsPanel],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'End routine growth-promotion and blanket preventive use of medically important antimicrobials in healthy animals; require veterinary diagnosis, stewardship, surveillance, and targeted treatment when clinically necessary.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the WHO guidelines on the use of medically important antimicrobials in food-producing animals, which recommend ending use for growth promotion and for disease prevention in animals that are not ill.',
          sources: [REF.whoAntimicrobialsFoodAnimals],
        },
        {
          id: 'exp2',
          text: 'Permit therapeutic and exceptional preventive use under veterinary responsibility when justified by epidemiologic risk, while prohibiting antimicrobials from compensating for inadequate husbandry or biosecurity.',
          method: 'adapted-from-source',
          summary: 'Adapted from WOAH standards on responsible and prudent antimicrobial use in veterinary medicine, which retain veterinary responsibility for therapeutic and justified preventive use and reject antimicrobials as a substitute for husbandry and biosecurity. Animal-welfare evidence enters the record through this expert pool.',
          sources: [REF.woahAmr],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Minimize total avoidable suffering and health loss across humans and animals over time: preserve effective treatment for sick animals while sharply reducing uses that create resistance without comparable welfare benefit.',
          method: 'derived-from-framework',
          summary: 'Derived from a One Health consequentialist objective that counts human and animal suffering in one calculation across time: the reasoning bridge is that therapeutic use buys a large welfare gain per unit of resistance risk while routine population use does not. The policy sentence is a Bench construction.',
          sources: [REF.singerAnimalLiberationNow],
        },
        {
          id: 'fw2',
          text: 'Animals have direct claims to appropriate treatment when ill, while present agricultural convenience does not justify imposing preventable resistance risks on future humans and animals; regulate both duties explicitly.',
          method: 'derived-from-framework',
          summary: 'Derived from capabilities-based accounts of what is owed to animals together with intergenerational justice: the reasoning bridge is that these are two distinct duties — one owed to the animal now, one owed to future humans and animals — so a policy must satisfy both rather than trade one against the other implicitly. This is where the animals’ direct moral claims enter the record. The policy sentence is a Bench construction.',
          sources: [REF.nussbaumJusticeForAnimals, REF.intergenerationalJustice],
        },
      ],
    },
    references: [REF.whoAntimicrobialsFoodAnimals, REF.woahAmr, REF.consumerAntibioticsPanel, REF.singerAnimalLiberationNow, REF.nussbaumJusticeForAnimals, REF.intergenerationalJustice],
  },

  {
    caseId: 'f19-health-system-decarbonization-tradeoffs',
    title: 'Health-system decarbonization versus near-term clinical trade-offs',
    shortDescription: 'Lower-carbon care pathways are clinically acceptable but modestly more costly or less convenient. The health system must decide how much weight emissions reduction may carry in clinical and procurement policy.',
    decisionQuestion: 'When lower-carbon care is clinically acceptable but modestly more costly or less convenient, how much weight should a health system give emissions reduction in procurement and treatment-pathway policy?',
    domains: ['climate-planetary', 'global-structural'],
    tags: ['decarbonization', 'procurement', 'life-cycle assessment', 'future generations', 'clinical trade-offs'],
    jurisdictionContext: null,
    concise: 'A health system can substantially reduce emissions by changing several clinically acceptable care pathways, but the lower-carbon options are modestly more costly or less convenient and may slightly reduce performance on some secondary outcomes. It must decide when carbon reduction may legitimately influence clinical and procurement policy.',
    detailed: 'A large health system has committed to reducing greenhouse-gas emissions because climate change is expected to cause substantial future health harms and health care itself contributes to emissions. Several proposed changes would materially reduce carbon output: lower-emission anesthetic and pharmaceutical choices, reusable or lower-carbon supplies, and redesigned care pathways. For the scenario, assume the alternatives remain clinically acceptable, but some cost more, inconvenience staff or patients, or produce small reductions in secondary performance measures while leaving major health outcomes similar. Surveys of physicians and patients show broad support for more sustainable care, but less agreement about accepting limits on treatment options or clinical trade-offs. The system must decide whether to act only when clinical outcomes are equivalent or allow explicit, bounded trade-offs for large environmental benefit.',
    scenarioSources: [REF.whoClimateHealthSystems, REF.lifecycleAssessmentHealthcare],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Prefer the lower-carbon option when major clinical outcomes are equivalent, but do not reduce expected health benefit solely to meet an emissions target without specific patient consent or a public policy rule.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from a patient survey across four US health systems reporting very high support for clinicians making care sustainable together with substantially less willingness to accept restrictions on treatment options or reductions in clinical performance — the boundary this candidate states.',
          sources: [REF.patientSustainabilitySurvey],
        },
        {
          id: 'pub2',
          text: 'Allow small, transparent trade-offs in cost, convenience, or secondary outcomes when the emissions reduction is large and patients retain access to a higher-benefit alternative when medically important.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same patient survey together with national physician survey work supporting sustainable care, in which the resistance concentrates on major clinical outcomes rather than on cost or convenience. The bounded-trade-off rule is Bench editorial translation of that pattern.',
          sources: [REF.patientSustainabilitySurvey, REF.physicianSustainabilitySurvey],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Build carbon impact into procurement and pathway design using life-cycle assessment and explicit sustainability targets, while maintaining evidence-based minimum standards for safety and clinical effectiveness.',
          method: 'adapted-from-source',
          summary: 'Adapted from the WHO operational framework for climate-resilient and low-carbon health systems and from life-cycle-assessment evidence in health care, which locate decarbonization in procurement and pathway design under maintained clinical standards.',
          sources: [REF.whoClimateHealthSystems, REF.lifecycleAssessmentHealthcare],
        },
        {
          id: 'exp2',
          text: 'Use a declared carbon shadow price or comparable decision rule so environmental effects are weighed consistently rather than through ad hoc bedside rationing; exempt cases with material expected clinical harm.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same low-carbon health-system material and from decision-rule practice in health-care procurement, which favor an explicit and consistently applied valuation over discretionary case-by-case judgment.',
          sources: [REF.whoClimateHealthSystems, REF.lifecycleAssessmentHealthcare],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Count foreseeable climate-related health harms to distant and future people as real consequences of present care; accept modest local costs when they avert substantially greater health harm overall.',
          method: 'derived-from-framework',
          summary: 'Derived from impartial consequentialism extended across time and distance: the reasoning bridge is that a foreseeable health harm does not lose moral weight through remoteness, so the comparison is between a modest present cost and a larger aggregate harm. The policy sentence is a Bench construction.',
          sources: [REF.intergenerationalJustice],
        },
        {
          id: 'fw2',
          text: 'The present patient retains a special claim not to receive materially inferior care for diffuse future benefits; decarbonize primarily through system design and clinically equivalent substitutions.',
          method: 'derived-from-framework',
          summary: 'Derived from fiduciary and role-based obligations to the patient in front of the clinician: the reasoning bridge is that the patient did not consent to bear a concentrated cost for a diffuse benefit, so the duty is discharged through system design rather than at the bedside. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.whoClimateHealthSystems, REF.patientSustainabilitySurvey, REF.physicianSustainabilitySurvey, REF.lifecycleAssessmentHealthcare, REF.intergenerationalJustice, REF.beauchampChildress],
  },

  {
    caseId: 'f20-neural-organoid-oversight',
    title: 'Increasingly complex neural organoids',
    shortDescription: 'Human neural organoids are becoming more complex with no evidence of consciousness. Regulators must decide whether ordinary research oversight suffices or whether staged precautionary safeguards should begin now.',
    decisionQuestion: 'What additional oversight should apply to increasingly complex human neural organoid research before there is evidence that organoids are conscious or capable of suffering?',
    domains: ['neuroethics', 'research-ethics', 'clinical-innovation'],
    tags: ['neural organoids', 'anticipatory governance', 'moral status', 'precaution', 'research oversight'],
    jurisdictionContext: null,
    concise: 'Human neural organoids are becoming more complex, but there is no evidence that current models are conscious or capable of suffering. Regulators must decide whether ordinary research oversight remains sufficient or whether precautionary, staged safeguards should begin before any credible welfare threshold is reached.',
    detailed: 'Researchers can now create increasingly complex human neural organoids that model aspects of brain development and disease. Current evidence does not establish that these systems are conscious, sentient, or capable of suffering, and the research may produce important scientific and medical benefits. At the same time, increasing complexity, longer maturation, sensory inputs, transplantation into animals, and future technical advances could create ethically relevant features before science has an agreed test for them. Recent ethics work recommends anticipatory governance rather than waiting for proof of sentience, while empirical stakeholder studies suggest that practical concerns such as consent, commercialization, transplantation, and misuse may be as salient to publics and researchers as consciousness itself. Regulators must decide whether ordinary tissue-research governance is sufficient or whether staged oversight should begin now.',
    scenarioSources: [REF.nuffieldNeuralOrganoids2026, REF.organoidStakeholderReview2026],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Continue neural-organoid research but require transparent public reporting and enhanced review for transplantation, unusually long maturation, or experiments designed to increase integrated neural complexity.',
          method: 'adapted-from-source',
          summary: 'Adapted from emerging stakeholder and public studies, including a 2026 Japanese survey reporting broad support for organoid research alongside concern about unanticipated risk and commercialization, and from an empirical review finding governance and transplantation concerns as prominent as consciousness. The reporting and enhanced-review triggers are Bench editorial translation of those concerns.',
          sources: [REF.organoidJapanSurvey2026, REF.organoidStakeholderReview2026],
        },
        {
          id: 'pub2',
          text: 'Pause the most complex neural-organoid experiments until researchers can explain what evidence would count as a credible welfare concern and what protections would follow if that threshold were approached.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same stakeholder evidence, in which concern about unanticipated risk and about the absence of agreed thresholds is prominent. The pause condition is Bench editorial translation and does not claim that current organoids are believed to be sentient.',
          sources: [REF.organoidStakeholderReview2026, REF.organoidJapanSurvey2026],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Adopt staged anticipatory governance now, with oversight triggers tied to scientific features such as complexity, functional integration, transplantation, and emerging evidence relevant to welfare or moral status.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the Nuffield Council on Bioethics 2026 report on neural organoids, which recommends anticipatory governance with staged triggers rather than waiting for proof of sentience.',
          sources: [REF.nuffieldNeuralOrganoids2026],
        },
        {
          id: 'exp2',
          text: 'Do not classify current neural organoids as sentient without evidence; strengthen review proportionately while supporting research and developing validated methods to assess ethically relevant functional capacities.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same report and the surrounding organoid science and governance literature, which are explicit that present evidence does not establish sentience and that assessment methods for ethically relevant capacities remain to be validated.',
          sources: [REF.nuffieldNeuralOrganoids2026, REF.organoidStakeholderReview2026],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'When uncertainty concerns the possibility of morally significant suffering, impose proportionate precautions before proof is available if safeguards are low-cost relative to the potential harm.',
          method: 'derived-from-framework',
          summary: 'Derived from precautionary reasoning under moral uncertainty: the reasoning bridge is that the asymmetry between a low-cost safeguard and an unrecognized capacity to suffer makes acting before proof rational rather than merely cautious. The policy sentence is a Bench construction.',
          sources: [REF.nuffieldNeuralOrganoids2026],
        },
        {
          id: 'fw2',
          text: 'Moral restrictions should track evidence of capacities that ground interests rather than biological resemblance alone; preserve research freedom while creating trigger points for new evidence.',
          method: 'derived-from-framework',
          summary: 'Derived from interest-based accounts of moral status: the reasoning bridge is that what grounds a claim is the capacity to have interests, not tissue of origin, so restriction should follow evidence of that capacity while remaining ready to move when it arrives. The policy sentence is a Bench construction.',
          sources: [REF.singerAnimalLiberationNow, REF.beauchampChildress],
        },
      ],
    },
    references: [REF.nuffieldNeuralOrganoids2026, REF.organoidStakeholderReview2026, REF.organoidJapanSurvey2026, REF.singerAnimalLiberationNow, REF.beauchampChildress],
  },
];
