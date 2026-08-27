// Shared bibliographic references for Featured v1.
//
// Every entry is a `reference` object as defined by schemas/case.schema.json. They live
// here rather than being retyped per record so that two companion records cite the same
// source with byte-identical text — the companion invariants compare candidate pools
// deep-equal, and a drifting citation would break a comparison for no research reason.

export const REF = {
  beauchampChildress: {
    citation: 'Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019).',
    type: 'book',
  },
  dworkinLifesDominion: {
    citation: 'Ronald Dworkin, Life’s Dominion: An Argument About Abortion, Euthanasia, and Individual Freedom (Knopf, 1993).',
    type: 'book',
  },
  singerAnimalLiberationNow: {
    citation: 'Peter Singer, Animal Liberation Now (Harper Perennial, 2023).',
    type: 'book',
  },
  nussbaumJusticeForAnimals: {
    citation: 'Martha C. Nussbaum, Justice for Animals: Our Collective Responsibility (Simon & Schuster, 2023).',
    type: 'book',
  },
  nussbaumCapabilities: {
    citation: 'Martha C. Nussbaum, Creating Capabilities: The Human Development Approach (Harvard University Press, 2011).',
    type: 'book',
  },
  danielsJustHealth: {
    citation: 'Norman Daniels, Just Health: Meeting Health Needs Fairly (Cambridge University Press, 2008).',
    type: 'book',
  },
  rawlsTheoryOfJustice: {
    citation: 'John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999).',
    type: 'book',
  },
  millOnLiberty: {
    citation: 'John Stuart Mill, On Liberty (1859), harm principle, chapter 1.',
    type: 'book',
  },
  parfitEqualityPriority: {
    citation: 'Derek Parfit, “Equality and Priority,” Ratio 10, no. 3 (1997): 202–221.',
    type: 'article',
    doi: '10.1111/1467-9329.00041',
  },
  broomeFairness: {
    citation: 'John Broome, “Fairness,” Proceedings of the Aristotelian Society 91 (1990): 87–101.',
    type: 'article',
  },
  emanuelWendlerGrady: {
    citation: 'Ezekiel J. Emanuel, David Wendler, and Christine Grady, “What Makes Clinical Research Ethical?” JAMA 283, no. 20 (2000): 2701–2711.',
    type: 'article',
    doi: '10.1001/jama.283.20.2701',
  },
  helsinki2024: {
    citation: 'World Medical Association, Declaration of Helsinki: Ethical Principles for Medical Research Involving Human Participants, 2024 revision (paragraph 33 on the use of placebo and the best proven intervention).',
    type: 'guideline',
    url: 'https://www.wma.net/policies-post/wma-declaration-of-helsinki/',
  },
  cioms2016: {
    citation: 'Council for International Organizations of Medical Sciences (CIOMS), International Ethical Guidelines for Health-related Research Involving Humans, 4th ed. (Geneva: CIOMS, 2016).',
    type: 'guideline',
    url: 'https://cioms.ch/publications/product/international-ethical-guidelines-for-health-related-research-involving-humans/',
  },
  whoAllocationEthics: {
    citation: 'World Health Organization, Ethics and COVID-19: Resource Allocation and Priority-Setting (Geneva: WHO, 2020) — equality, best outcomes, priority to the worst off, instrumental value and fair process.',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/ethics-and-covid-19-resource-allocation-and-priority-setting',
  },
  whoMandatoryVaccination2022: {
    citation: 'World Health Organization, COVID-19 and Mandatory Vaccination: Ethical Considerations and Caveats — policy brief (Geneva: WHO, 2022).',
    type: 'policy-document',
    url: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-Policy-brief-Mandatory-vaccination-2022.1',
  },
  whoAiHealth2021: {
    citation: 'World Health Organization, Ethics and Governance of Artificial Intelligence for Health: WHO Guidance (Geneva: WHO, 2021).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240029200',
  },
  whoLmm2024: {
    citation: 'World Health Organization, Ethics and Governance of Artificial Intelligence for Health: Guidance on Large Multi-Modal Models (Geneva: WHO, 2024).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240084759',
  },
  whoAntimicrobialsFoodAnimals: {
    citation: 'World Health Organization, WHO Guidelines on Use of Medically Important Antimicrobials in Food-Producing Animals (Geneva: WHO, 2017).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789241550130',
  },
  woahAmr: {
    citation: 'World Organisation for Animal Health (WOAH), Terrestrial Animal Health Code, chapters on responsible and prudent use of antimicrobial agents in veterinary medicine.',
    type: 'guideline',
    url: 'https://www.woah.org/en/what-we-do/standards/codes-and-manuals/terrestrial-code-online-access/',
  },
  whoGlobalCode2026: {
    citation: 'World Health Organization, WHO Global Code of Practice on the International Recruitment of Health Personnel, as amended 29 May 2026.',
    type: 'policy-document',
    url: 'https://www.who.int/publications/i/item/wha68.32',
  },
  whoSafeguardsList: {
    citation: 'World Health Organization, WHO Health Workforce Support and Safeguards List and accompanying implementation guidance (current as of August 2026).',
    type: 'policy-document',
    url: 'https://www.who.int/publications/i/item/9789240072105',
  },
  whoOhchrMentalHealth2023: {
    citation: 'World Health Organization and Office of the United Nations High Commissioner for Human Rights, Mental Health, Human Rights and Legislation: Guidance and Practice (Geneva: WHO/OHCHR, 2023).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240080737',
  },
  whoClimateHealthSystems: {
    citation: 'World Health Organization, Operational Framework for Building Climate Resilient and Low Carbon Health Systems (Geneva: WHO, 2023).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240081888',
  },
  whoGenomeEditingFramework2021: {
    citation: 'World Health Organization, Human Genome Editing: A Framework for Governance (Geneva: WHO, 2021).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240030060',
  },
  whoGenomeEditingRecommendations2021: {
    citation: 'World Health Organization, Human Genome Editing: Recommendations (Geneva: WHO, 2021).',
    type: 'guideline',
    url: 'https://www.who.int/publications/i/item/9789240030381',
  },
  heritableGenomeEditing2020: {
    citation: 'International Commission on the Clinical Use of Human Germline Genome Editing, Heritable Human Genome Editing (Washington, DC: National Academies Press, 2020).',
    type: 'policy-document',
    doi: '10.17226/25665',
  },
  isscr2025: {
    citation: 'International Society for Stem Cell Research, ISSCR Guidelines for Stem Cell Research and Clinical Translation, version 1.2 (2025).',
    type: 'guideline',
    url: 'https://www.isscr.org/guidelines',
  },
  yui2023: {
    citation: 'Yui H. et al., “Public attitudes in Japan toward the extension of human embryo culture beyond 14 days,” Stem Cell Reports 18, no. 8 (2023) — national survey, n = 3,000: 37.9% agreed with culture beyond 14 days, 42.9% could not judge, 19.2% disagreed.',
    type: 'survey',
  },
  ivfPatientFocusGroups2024: {
    citation: 'Focus-group study of IVF/ICSI patients (n = 22) on extending the 14-day limit for human embryo research (2024).',
    type: 'survey',
  },
  nuffield14Day: {
    citation: 'Nuffield Council on Bioethics, Reviewing the 14-day rule for human embryo research — project and public dialogue, 2025–26 (final dialogue findings not published as of 26 August 2026).',
    type: 'policy-document',
    url: 'https://www.nuffieldbioethics.org/',
  },
  nuffieldNeuralOrganoids2026: {
    citation: 'Nuffield Council on Bioethics, Neural Organoids: Ethical and Governance Considerations (2026), including its anticipatory-governance recommendations.',
    type: 'policy-document',
    url: 'https://www.nuffieldbioethics.org/',
  },
  organoidStakeholderReview2026: {
    citation: 'Review of empirical stakeholder studies on human neural organoids (2026), finding that governance, consent, commercialization and transplantation concerns are often at least as prominent as consciousness.',
    type: 'article',
  },
  organoidJapanSurvey2026: {
    citation: 'Japanese public survey on neural-organoid research (2026), reporting broad support alongside concern about unanticipated risk and commercialization.',
    type: 'survey',
  },
  nuffieldAnimals: {
    citation: 'Nuffield Council on Bioethics, The Ethics of Research Involving Animals (London: Nuffield Council on Bioethics, 2005).',
    type: 'policy-document',
    url: 'https://www.nuffieldbioethics.org/publications/animal-research',
  },
  nc3rs: {
    citation: 'National Centre for the Replacement, Refinement and Reduction of Animals in Research (NC3Rs), guidance on Replacement, Reduction and Refinement.',
    type: 'guideline',
    url: 'https://nc3rs.org.uk/',
  },
  aspaHarmBenefit: {
    citation: 'UK Home Office, Guidance on the Operation of the Animals (Scientific Procedures) Act 1986, including harm–benefit analysis and the application of the 3Rs.',
    type: 'guideline',
    url: 'https://www.gov.uk/government/collections/animals-in-science-guidance',
  },
  ukAnimalResearchAttitudes: {
    citation: 'UK public attitudes to animal research: Ipsos MORI surveys for the Department for Business, Innovation and Skills / Office for Life Sciences (2014, 2018) — acceptance conditional on purpose, welfare safeguards and the absence of an adequate alternative; the 2014 survey reported 68% acceptance of medical animal research where no alternative exists.',
    type: 'survey',
  },
  ukReplacementStrategy2025: {
    citation: 'UK cross-government strategy to accelerate the development and adoption of alternatives to animal testing (2025).',
    type: 'policy-document',
  },
  consumerAntibioticsPanel: {
    citation: 'UK supermarket-panel survey of consumer attitudes to antibiotic use in farmed animals (n = 5,693), with a systematic review of 39 consumer studies reporting concern about routine farm antibiotic use alongside support for treating sick animals.',
    type: 'survey',
  },
  rcsBloodRefusal2016: {
    citation: 'Royal College of Surgeons of England, Caring for Patients who Refuse Blood: A Guide to Good Practice (London: RCS England, 2016).',
    type: 'guideline',
    url: 'https://www.rcseng.ac.uk/standards-and-research/standards-and-guidance/good-practice-guides/caring-for-patients-who-refuse-blood/',
  },
  jwBloodRefusalMaterials: {
    citation: 'Affected-community materials on refusal of allogeneic blood and acceptance of individually specified blood-conservation alternatives, published by Jehovah’s Witnesses hospital liaison / patient-information services.',
    type: 'other',
  },
  acogPeriviable: {
    citation: 'American College of Obstetricians and Gynecologists and Society for Maternal-Fetal Medicine, Periviable Birth, Obstetric Care Consensus.',
    type: 'guideline',
    url: 'https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2017/10/periviable-birth',
  },
  krickFeltman2019: {
    citation: 'Krick J. A. and Feltman D. M., “Neonatologists’ preferences regarding guidelines for periviable deliveries: do we really know what we want?” Journal of Perinatology 39 (2019): 445–452.',
    type: 'article',
    doi: '10.1038/s41372-019-0313-1',
  },
  prospectiveParentsPeriviable: {
    citation: 'Prospective parents’ perspectives on antenatal decision making for the anticipated birth of an extremely premature infant, and subsequent 2024–25 qualitative studies of periviable counseling — 63% of prospective parents desired a shared decision-making role, and parents frequently wanted a clinician recommendation.',
    type: 'survey',
  },
  bdDncGuideline2023: {
    citation: 'Greer D. M. et al., Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Practice Guideline (AAN, AAP, CNS, SCCM), Neurology 101, no. 24 (2023): 1112–1132.',
    type: 'guideline',
    doi: '10.1212/WNL.0000000000207740',
  },
  bdDncAccommodationSurveys: {
    citation: 'Surveys of affected religious and pastoral communities on accommodation after death by neurologic criteria: a multidenominational rabbi survey found 18% favored continued ventilation after a BD/DNC determination, and a hospital-chaplain survey found 30% thought families should be able to choose whether organ support is discontinued.',
    type: 'survey',
  },
  bdDncCommunicationGuidance: {
    citation: 'Contemporary professional guidance (2025–26) on communication, family objections, pregnancy, reasonable accommodation and institutional dispute processes after death by neurologic criteria.',
    type: 'guideline',
  },
  gallupMoralAcceptability2026: {
    citation: 'Gallup Values and Beliefs poll, May 2026: doctor-assisted suicide judged morally acceptable by 49% and morally wrong by 45% of US adults; long-running trend shows persistent pluralism conditioned on terminal illness, suffering and safeguards.',
    type: 'survey',
    url: 'https://news.gallup.com/poll/1681/moral-issues.aspx',
  },
  amaCodeEndOfLife: {
    citation: 'American Medical Association, Code of Medical Ethics, Opinion 5.7 (Physician-Assisted Suicide) and related end-of-life care opinions.',
    type: 'guideline',
    url: 'https://code-medical-ethics.ama-assn.org/',
  },
  maidSafeguardsLiterature: {
    citation: 'Contemporary literature on medical aid in dying: statutory safeguards, capacity and voluntariness assessment, conscientious objection and non-abandonment, and the distinction between self-administered assisted dying and clinician-administered euthanasia regimes.',
    type: 'article',
  },
  advanceDirectiveDementiaStudies: {
    citation: 'Empirical advance-care-planning research with people living with dementia, their caregivers and clinicians, including studies of clinician responses when a prior directive refusing life-prolonging treatment meets a person who currently appears content.',
    type: 'article',
  },
  advanceDirectiveClinicalGuidance: {
    citation: 'Clinical-ethics guidance on the interpretation and application of advance directives by surrogates, including structured best-interpretation review where a directive does not name the present condition.',
    type: 'guideline',
  },
  placeboParticipantEvidence: {
    citation: 'Public consultation and trial-participant research on placebo-controlled trials: conditional acceptance where effective treatment exists, sensitivity to symptom severity and treatment deprivation, and a preference for active-treatment comparators as risk rises.',
    type: 'survey',
  },
  millumGradyPlacebo: {
    citation: 'Joseph Millum and Christine Grady, “The ethics of placebo-controlled trials: methodological justifications,” Contemporary Clinical Trials 36, no. 2 (2013): 510–514.',
    type: 'article',
    doi: '10.1016/j.cct.2013.09.003',
  },
  globalStandardOfCareConsultations: {
    citation: 'Community consultation and stakeholder research on trial standard of care and research benefits in lower-resource settings, including consultations in Mwanza (Tanzania), community dialogue in Nigeria, community and advocacy involvement in South African PrEP standard-of-care decisions, and Kenyan residents’ concerns about insufficient research benefits.',
    type: 'survey',
  },
  exploitationGlobalResearch: {
    citation: 'Scholarship on exploitation, responsiveness and fair benefits in international research, including the standard-of-care debate following multinational perinatal HIV trials.',
    type: 'article',
  },
  genomeEditingAttitudes: {
    citation: 'Systematic review and multinational public-attitude studies on human genome editing: consistently greater support for preventing serious disease than for enhancement, with support conditional on safety, heritability, available alternatives and governance.',
    type: 'survey',
  },
  optnEthics: {
    citation: 'Organ Procurement and Transplantation Network Ethics Committee, ethical principles of organ allocation (utility, justice and respect for persons) and current ethical-considerations papers.',
    type: 'policy-document',
    url: 'https://optn.transplant.hrsa.gov/professionals/by-topic/ethical-considerations/',
  },
  transplantPublicPreferences: {
    citation: 'Public-preference research on organ-allocation criteria, including German focus groups and a discrete-choice experiment (n = 1,028) in which respondents applied several principles at once and younger age influenced many respondents alongside expected benefit, urgency and waiting time.',
    type: 'survey',
  },
  ukTriageSurvey2020: {
    citation: 'Representative UK public survey on ventilator allocation (n = 763), BMJ Open (2020), reporting preferences responsive to survival probability, age, treatment duration and disability/frailty, with a lottery preferred where cases are close.',
    type: 'survey',
  },
  disabilityTriageCritique: {
    citation: 'Disability-rights critiques of crisis-standards-of-care triage protocols and empirical studies of disability-related bias in public and clinical allocation judgments.',
    type: 'article',
  },
  criticalCareTriageGuidance: {
    citation: 'Critical-care crisis-standards-of-care triage guidance on short-term prognosis criteria, repeated reassessment, exclusion of social-worth judgments and appeal processes.',
    type: 'guideline',
  },
  germanVaccineMandateSurveys: {
    citation: 'Representative German public surveys on vaccine mandates during a serious outbreak, showing a genuine split in which supporters emphasize insufficient voluntary uptake and collective protection while opponents emphasize bodily liberty and institutional trust.',
    type: 'survey',
  },
  healthWorkerMigrationStudies: {
    citation: 'Qualitative and stakeholder studies of international health-worker migration across several corridors (including Colombia, Indonesia, Jordan, the Philippines, and sub-Saharan Africa to Canada), reporting worker interests in mobility and career opportunity alongside exploitation risk and source-country health-system effects.',
    type: 'survey',
  },
  norwegianCoercionSurvey: {
    citation: 'Representative Norwegian public survey (n = 2,001) on involuntary psychiatric intervention, reporting very high public support for intervention in specified severe-risk scenarios; comparable vignette studies in Switzerland and elsewhere in Europe report similar patterns.',
    type: 'survey',
  },
  serviceUserCoercionAdvocacy: {
    citation: 'Service-user and rights-based advocacy literature on psychiatric coercion, supported decision-making and noncoercive crisis alternatives.',
    type: 'article',
  },
  niceHtaManual: {
    citation: 'National Institute for Health and Care Excellence, NICE Health Technology Evaluations: The Manual — quality-adjusted life years, opportunity cost, equal weighting of health gains and the severity modifier.',
    type: 'guideline',
    url: 'https://www.nice.org.uk/process/pmg36',
  },
  section1557ValueAssessment: {
    citation: 'US Department of Health and Human Services, Section 1557 nondiscrimination rules addressing the use of value-assessment methods that discriminate on the basis of disability, age or expected length of life.',
    type: 'statute',
  },
  personTradeoffDisability: {
    citation: 'Public person-tradeoff research on life-saving treatment for people with pre-existing disability, including studies reporting equal priority for people with pre-existing paraplegia and people returnable to full health, alongside broader evidence of public concern for severity and the worse off.',
    type: 'survey',
  },
  medicalAiPublicStudies: {
    citation: 'Patient and public studies of medical AI reporting persistent concerns about discrimination and bias, explainability, privacy, and retaining clinician responsibility, including work with minority patient groups on unequal datasets and subgroup performance.',
    type: 'survey',
  },
  aiSubgroupValidation: {
    citation: 'Literature on subgroup validation, performance disparity and post-deployment monitoring for clinical machine-learning systems.',
    type: 'article',
  },
  physicianSustainabilitySurvey: {
    citation: 'National physician survey on sustainability in clinical care (2025–26), reporting broad support for reducing health-care emissions.',
    type: 'survey',
  },
  patientSustainabilitySurvey: {
    citation: 'Patient survey across four US health systems (2025–26): very high support for clinicians helping make care sustainable, with substantially less willingness to accept restrictions on treatment options or reductions in clinical performance for environmental benefit.',
    type: 'survey',
  },
  lifecycleAssessmentHealthcare: {
    citation: 'Life-cycle assessment and low-carbon clinical-pathway evidence in health care, including inhaled and volatile anaesthetic agents, reusable versus single-use supplies and procurement decision rules.',
    type: 'article',
  },
  intergenerationalJustice: {
    citation: 'Scholarship on intergenerational justice and obligations to future people in health and environmental policy.',
    type: 'article',
  },
};

export const RIGHTS = {
  license: 'unresolved-pending-release-decision',
  holder: 'Alethic Research',
  notes: 'The scenario and candidate text in this record is Bench-authored and independently constructed. The repository has not yet adopted a case-text license; this field records that open decision rather than asserting a license the project has not made. Cited source materials keep their own rights, recorded per source. This must be resolved before any record moves to frozen or released.',
};
