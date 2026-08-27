// Featured v1 families F11–F15 — public health, global structure and disability.
// Transcribed from docs/featured-v1-research/F11-F15-public-global-disability.md.

import { REF } from './refs.mjs';

export const F11_F15 = [
  {
    caseId: 'f11-ventilator-triage-catastrophic-scarcity',
    title: 'Ventilator triage during catastrophic scarcity',
    shortDescription: 'Ventilators are insufficient for all patients who need them. The health system must adopt a triage rule that uses expected short-term survival while deciding what role disability, age, disadvantage or lottery should play.',
    decisionQuestion: 'During catastrophic ventilator scarcity, what triage rule should allocate treatment among clinically eligible patients while balancing expected benefit, equality, urgency, and protection against discrimination?',
    domains: ['public-health', 'allocation-transplantation', 'disability-mental-health'],
    tags: ['crisis standards of care', 'triage', 'disability discrimination', 'lottery', 'pandemic preparedness'],
    jurisdictionContext: null,
    concise: 'During a catastrophic respiratory outbreak, ventilators are insufficient for all patients who need them. The health system must choose a triage rule that uses expected short-term survival while deciding whether disability, age, social disadvantage, or lottery should affect priority.',
    detailed: "A severe respiratory outbreak has produced a temporary but genuine shortage of mechanical ventilators: some patients who would ordinarily receive ventilation cannot be treated. The health system can estimate each patient's probability of surviving the acute episode with moderate uncertainty. Disability advocates warn that quality-of-life judgments, long-term life expectancy, and broad frailty measures can systematically disadvantage people with disabilities without improving the number of acute survivors. Other stakeholders argue that a rule should save as many lives as possible, while some members of the public favor giving additional weight to younger people, the worst off, or equal chance. The hospital can use a lottery among patients with similar priority and can reassess allocation as clinical prognosis changes. It must adopt a transparent triage rule before the next surge.",
    scenarioSources: [REF.whoAllocationEthics, REF.criticalCareTriageGuidance],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Prioritize patients with the highest chance of surviving the acute illness, and use a lottery when differences are too small to justify a confident clinical ranking.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from a representative UK public survey on ventilator allocation (n = 763), in which respondents’ preferences tracked survival probability and a lottery was preferred where cases were close — the two elements this candidate states.',
          sources: [REF.ukTriageSurvey2020],
        },
        {
          id: 'pub2',
          text: 'Use a multiprinciple rule that considers acute survival but gives additional protection to people who are socially disadvantaged or otherwise worse off, without lowering priority for pre-existing disability alone.',
          method: 'adapted-from-source',
          summary: 'Adapted from cross-national public triage studies showing pluralism about the worse off and from disability communities’ direct criticism of disability-based criteria, treated here as affected-community evidence. The combined rule is Bench editorial translation of those two strands.',
          sources: [REF.ukTriageSurvey2020, REF.disabilityTriageCritique],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Base priority on short-term clinical benefit using validated, repeatedly reassessed criteria; exclude judgments about social worth and do not use disability or long-term quality of life unless directly relevant to acute survival.',
          method: 'adapted-from-source',
          summary: 'Adapted from critical-care crisis-standards guidance on short-term prognosis criteria, repeated reassessment and the exclusion of social-worth judgments, together with WHO allocation-ethics material on best outcomes.',
          sources: [REF.criticalCareTriageGuidance, REF.whoAllocationEthics],
        },
        {
          id: 'exp2',
          text: 'Create broad clinical priority tiers and use a transparent lottery within each tier, with an appeal or review process for criteria that may indirectly disadvantage protected groups.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same triage guidance on broad priority tiers, tie-breaking and appeal processes, and from the documented revision of protocols following disability-rights challenges.',
          sources: [REF.criticalCareTriageGuidance, REF.disabilityTriageCritique],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Choose the rule expected to save the greatest number of lives, but count each person’s survival equally and exclude quality-adjusted life-years or social-value judgments from the emergency objective.',
          method: 'derived-from-framework',
          summary: 'Derived from a constrained consequentialist objective: the reasoning bridge is that the emergency good to be maximized is number of survivors, and equal counting of each survival is what keeps the objective from importing judgments about whose life is worth more. The policy sentence is a Bench construction.',
          sources: [REF.whoAllocationEthics, REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'When claims are comparably strong, give each eligible person an equal chance; departures from equality require a publicly defensible reason such as materially different short-term benefit or priority to the worst off.',
          method: 'derived-from-framework',
          summary: 'Derived from fairness in the satisfaction of competing claims together with prioritarianism: the reasoning bridge is that comparably strong claims are owed proportional chances rather than a winner-takes-all ranking, so any departure carries a justificatory burden. The policy sentence is a Bench construction.',
          sources: [REF.broomeFairness, REF.parfitEqualityPriority],
        },
      ],
    },
    references: [REF.whoAllocationEthics, REF.ukTriageSurvey2020, REF.disabilityTriageCritique, REF.criticalCareTriageGuidance, REF.broomeFairness, REF.parfitEqualityPriority, REF.beauchampChildress],
  },

  {
    caseId: 'f12-mandatory-vaccination-serious-outbreak',
    title: 'Mandatory vaccination during a serious outbreak',
    shortDescription: 'Voluntary vaccination has plateaued below the level needed to control a serious outbreak. Authorities must decide between continued voluntary measures, targeted requirements in high-risk settings, or a broader mandate.',
    decisionQuestion: 'When voluntary vaccination remains insufficient during a serious outbreak, under what conditions should a public authority impose a vaccine requirement rather than continue voluntary measures?',
    domains: ['public-health'],
    tags: ['vaccine mandate', 'harm principle', 'bodily autonomy', 'proportionality', 'public trust'],
    jurisdictionContext: null,
    concise: 'A serious contagious outbreak continues because voluntary vaccination remains below the level needed to reduce transmission substantially; the vaccine has strong safety and effectiveness evidence. Public-health authorities must decide whether to mandate vaccination broadly, restrict requirements to high-risk settings, or continue voluntary measures.',
    detailed: 'A contagious disease is causing substantial preventable hospitalization and death. A vaccine has strong evidence of safety and meaningfully reduces severe disease and transmission, but voluntary uptake has plateaued below the level public-health authorities estimate is needed to control the outbreak. Free vaccination, public education, paid time off, and convenient access have already been implemented, although a small number of people have recognized medical contraindications. A broad mandate would increase uptake but impose on bodily autonomy and could reduce trust in some communities; a narrower requirement for health-care workers or other high-risk settings would reduce some external risk while leaving more community transmission. Authorities must choose whether continued voluntary measures, targeted requirements, or a broader mandate is justified.',
    scenarioSources: [REF.whoMandatoryVaccination2022],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Continue voluntary vaccination with easy access, paid time off, and targeted communication rather than a general mandate, unless the outbreak becomes substantially more dangerous or alternatives fail.',
          method: 'adapted-from-source',
          summary: 'Adapted from representative public surveys on vaccine mandates in which opponents emphasize bodily liberty and the risk to institutional trust. The specific package of voluntary measures is Bench editorial translation of that position into an actionable policy.',
          sources: [REF.germanVaccineMandateSurveys],
        },
        {
          id: 'pub2',
          text: 'Require vaccination for adults without medical contraindications once transparent evidence shows voluntary uptake is insufficient to prevent serious avoidable harm, with proportionate exemptions and review.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the same surveys, in which mandate supporters gave insufficient voluntary uptake as their stated reason — the trigger condition this candidate makes explicit — alongside collective protection.',
          sources: [REF.germanVaccineMandateSurveys],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Use mandates only when vaccination is sufficiently safe and effective, necessary to achieve an important public-health goal, proportionate to the risk, and less restrictive alternatives have been reasonably tried.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the WHO policy brief on mandatory vaccination, which sets out necessity, safety and effectiveness, proportionality and the exhaustion of less restrictive alternatives as the conditions for a justified mandate.',
          sources: [REF.whoMandatoryVaccination2022],
        },
        {
          id: 'exp2',
          text: 'Prefer targeted requirements in settings where unvaccinated people create especially high risk to others, such as health care, before imposing a population-wide mandate.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same WHO guidance on scope and least-restrictive means, which treats occupational and high-risk-setting requirements as a narrower instrument to be considered before population-wide measures.',
          sources: [REF.whoMandatoryVaccination2022],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Coercive vaccination is justified when refusal creates a substantial preventable risk to others and a narrowly tailored requirement is necessary; liberty does not include an unlimited claim to impose serious external harm.',
          method: 'derived-from-framework',
          summary: 'Derived from Mill’s harm principle: the reasoning bridge is that transmission makes refusal other-regarding, which removes it from the protected sphere of self-regarding conduct and leaves only the question of narrow tailoring. The policy sentence is a Bench construction, not a quotation from Mill.',
          sources: [REF.millOnLiberty],
        },
        {
          id: 'fw2',
          text: 'Preserve voluntary bodily choice unless the expected harm prevented by a mandate clearly outweighs coercion, inequitable burdens, and damage to institutional trust, after access barriers are removed.',
          method: 'derived-from-framework',
          summary: 'Derived from respect for autonomy and bodily integrity weighed against beneficence: the reasoning bridge is that coercion, distributive burden and lost trust are themselves costs to be counted, so the harm-prevention case must clear them rather than merely be positive. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.whoMandatoryVaccination2022, REF.germanVaccineMandateSurveys, REF.millOnLiberty, REF.beauchampChildress],
  },

  {
    caseId: 'f13-international-health-worker-recruitment',
    title: 'International recruitment of health workers from shortage countries',
    shortDescription: 'A high-income health system wants to recruit nurses from a country with a critical workforce deficit. It must decide whether active recruitment is acceptable and what co-investment or worker-rights safeguards should govern it.',
    decisionQuestion: 'Should a destination health system actively recruit health workers from a country with a critical workforce shortage, and what co-investment or migration-right safeguards should govern recruitment?',
    domains: ['global-structural'],
    tags: ['health workforce', 'migration', 'WHO Global Code', 'co-investment', 'employer responsibility'],
    jurisdictionContext: null,
    concise: 'A high-income health system has severe staffing shortages and wants to recruit nurses from a country with a critical health-workforce deficit. It must decide whether active recruitment is acceptable and whether it should require bilateral co-investment, training support, or other source-country safeguards.',
    detailed: "A high-income health system faces persistent nursing vacancies that are contributing to delayed care and staff burnout. A recruitment company proposes a large campaign in a lower-income country whose own health service has a critical shortage of trained nurses. Individual nurses have strong interests in freedom of movement, higher income, and career development, and many actively seek opportunities abroad. The source country's health ministry argues that large-scale employer recruitment can weaken already fragile services after public funds helped train the workforce. WHO's Global Code now emphasizes ethical recruitment, worker rights, international cooperation, and co-investment so that mobility can benefit both source and destination systems. The destination health system must decide whether to recruit, refrain, or proceed only through a structured bilateral arrangement.",
    scenarioSources: [REF.whoGlobalCode2026, REF.whoSafeguardsList],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Allow individual nurses to accept overseas jobs they choose, but prohibit destination employers from aggressive recruitment campaigns that target health systems already facing critical shortages.',
          method: 'adapted-from-source',
          summary: 'Adapted from qualitative and stakeholder studies of migrant health workers, which consistently foreground worker freedom and career opportunity alongside concern about exploitation and source-system effects. The separation of worker choice from employer conduct is Bench editorial translation of that pattern.',
          sources: [REF.healthWorkerMigrationStudies],
        },
        {
          id: 'pub2',
          text: 'Permit active recruitment only through a bilateral agreement that funds additional training or health-system capacity in the source country and protects recruited workers from exploitative contracts.',
          method: 'adapted-from-source',
          summary: 'Adapted from source- and destination-country stakeholder evidence across several migration corridors, in which participants raise both contractual exploitation and the depletion of publicly funded training. The bilateral co-investment condition is Bench editorial translation of those concerns.',
          sources: [REF.healthWorkerMigrationStudies],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Follow the WHO Code and Support and Safeguards List: avoid active recruitment from vulnerable health systems unless a government-to-government arrangement supports mutual benefit, worker rights, and source-system strengthening.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the WHO Global Code as amended 29 May 2026 and the Health Workforce Support and Safeguards List, which discourage active recruitment from listed countries except under government-to-government arrangements meeting these conditions.',
          sources: [REF.whoGlobalCode2026, REF.whoSafeguardsList],
        },
        {
          id: 'exp2',
          text: 'Meet destination staffing needs through a workforce strategy that prioritizes domestic retention and training, using international recruitment only when transparent agreements prevent systematic harm to source-country services.',
          method: 'adapted-from-source',
          summary: 'Adapted from the Code’s provisions on destination-country responsibility for workforce sustainability and self-sufficiency, which treat domestic training and retention as the primary instrument.',
          sources: [REF.whoGlobalCode2026],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Respect health workers as persons with rights to migrate and pursue better lives; justice may regulate recruiting institutions, but it should not treat workers as resources owned by their country of origin.',
          method: 'derived-from-framework',
          summary: 'Derived from liberty of movement and respect for persons: the reasoning bridge is that the duty at issue binds institutions that benefit from recruitment, so any remedy must fall on them rather than on the worker’s freedom to leave. The policy sentence is a Bench construction.',
          sources: [REF.nussbaumCapabilities, REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'Institutions benefiting from migration should not externalize the cost of training and workforce depletion onto populations with worse health access; recruitment is permissible only with fair compensation or co-investment.',
          method: 'derived-from-framework',
          summary: 'Derived from global-justice and reciprocity accounts: the reasoning bridge is that the destination system captures a benefit financed by the source population, so fairness requires returning value rather than merely refraining from misconduct. The policy sentence is a Bench construction.',
          sources: [REF.danielsJustHealth, REF.rawlsTheoryOfJustice],
        },
      ],
    },
    references: [REF.whoGlobalCode2026, REF.whoSafeguardsList, REF.healthWorkerMigrationStudies, REF.nussbaumCapabilities, REF.danielsJustHealth, REF.rawlsTheoryOfJustice, REF.beauchampChildress],
  },

  {
    caseId: 'f14-involuntary-psychiatric-treatment',
    title: 'Involuntary psychiatric treatment',
    shortDescription: 'A person in a severe psychiatric crisis refuses care and has markedly impaired appreciation of immediate risk. The service must decide whether any involuntary intervention is permissible and under what threshold and safeguards.',
    decisionQuestion: 'What threshold, if any, should permit involuntary psychiatric hospitalization or treatment when a person refuses care during a severe mental-health crisis?',
    domains: ['disability-mental-health', 'consent-capacity-refusal'],
    tags: ['coercion', 'supported decision-making', 'capacity', 'crisis care', 'least restrictive alternative'],
    jurisdictionContext: null,
    concise: 'A person in a severe psychiatric crisis refuses hospital care and treatment, understands some information but has impaired ability to appreciate immediate risks. The service must decide whether any involuntary intervention is permissible and what threshold and review safeguards should apply.',
    detailed: 'An adult in a severe psychiatric crisis refuses hospitalization and medication. The person can repeat information about the proposed treatment but has markedly impaired ability to appreciate the immediate consequences of their current behavior; clinicians believe there is a substantial risk of serious harm over the next several days, although harm is not certain. Voluntary crisis support, involvement of a trusted supporter, and a less restrictive community plan have been offered but are not sufficient to manage the current risk. Rights-based advocates warn that psychiatric systems often overuse coercion and substitute diagnosis for genuine capacity assessment. Clinicians worry that refusing all temporary intervention can allow preventable catastrophic harm. The service must define whether any involuntary intervention is permissible, the threshold for it, and the safeguards for review and supported decision-making.',
    scenarioSources: [REF.whoOhchrMentalHealth2023, REF.serviceUserCoercionAdvocacy],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Permit short-term involuntary hospitalization when there is a substantial near-term risk of serious harm and voluntary alternatives have failed, but require rapid independent review and a renewed effort to obtain agreement.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from a representative Norwegian public survey (n = 2,001) and comparable European vignette studies reporting very high public support for involuntary intervention in specified severe-risk scenarios of this kind.',
          sources: [REF.norwegianCoercionSurvey],
        },
        {
          id: 'pub2',
          text: 'Do not impose treatment solely because clinicians believe it is beneficial; use crisis support, trusted supporters, and supported decision-making unless an immediate emergency leaves no less restrictive way to prevent grave harm.',
          method: 'adapted-from-source',
          summary: 'Adapted from service-user and rights-based advocacy evidence, treated here as affected-community evidence, which opposes clinician-benefit justifications and favors noncoercive crisis alternatives. The emergency exception wording is Bench editorial translation.',
          sources: [REF.serviceUserCoercionAdvocacy],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Move law and practice toward free and informed consent, supported decision-making, and noncoercive crisis services; do not use disability or diagnosis alone to justify involuntary treatment.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the WHO/OHCHR guidance on mental health, human rights and legislation, which directs states toward free and informed consent, supported decision-making and noncoercive services and rejects diagnosis as a basis for involuntary treatment.',
          sources: [REF.whoOhchrMentalHealth2023],
        },
        {
          id: 'exp2',
          text: 'If emergency coercion remains legally available, restrict it to a clearly documented necessity threshold, the least restrictive intervention, the shortest duration, independent review, and active restoration of supported decision-making.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same guidance’s treatment of safeguards where coercive powers persist in law, which requires necessity, least restriction, time limitation, independent review and restoration of supported decision-making.',
          sources: [REF.whoOhchrMentalHealth2023],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Respect equal legal and moral agency by maximizing support for the person's own decisions; coercion requires an exceptional justification and cannot rest on a judgment that a disabled life is irrationally lived.",
          method: 'derived-from-framework',
          summary: 'Derived from equal-agency and capabilities accounts: the reasoning bridge is that the appropriate response to impaired decision-making is support for the person’s own agency rather than its replacement, so coercion carries an exceptional burden. The policy sentence is a Bench construction.',
          sources: [REF.nussbaumCapabilities],
        },
        {
          id: 'fw2',
          text: 'Temporary coercion can be justified when decisional abilities are substantially impaired and it is necessary to avert imminent serious harm while preserving the person’s future ability to choose freely.',
          method: 'derived-from-framework',
          summary: 'Derived from soft paternalism within an autonomy-based framework: the reasoning bridge is that substantially impaired appreciation means the refusal is not an exercise of the autonomy the principle protects, and the intervention is justified by its restoration. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress, REF.millOnLiberty],
        },
      ],
    },
    references: [REF.whoOhchrMentalHealth2023, REF.norwegianCoercionSurvey, REF.serviceUserCoercionAdvocacy, REF.nussbaumCapabilities, REF.beauchampChildress, REF.millOnLiberty],
  },

  {
    caseId: 'f15-qalys-disability-technology-allocation',
    title: 'QALYs, disability and health-technology allocation',
    shortDescription: 'A health-technology agency must decide whether to retain QALYs unchanged, constrain or modify them, or use another benefit measure where conventional quality weights reduce priority for people with pre-existing disabilities.',
    decisionQuestion: 'How should a health-technology agency use QALYs or related value measures when conventional quality-of-life weights may reduce priority for people with pre-existing disabilities?',
    domains: ['disability-mental-health', 'allocation-transplantation'],
    tags: ['QALY', 'cost-effectiveness', 'disability discrimination', 'severity modifier', 'measurement architecture'],
    jurisdictionContext: null,
    concise: 'A health-technology agency uses QALYs to compare treatments, but disability advocates argue that conventional quality weights can make gains for people with pre-existing disabilities appear less valuable. The agency must decide whether to retain QALYs unchanged, constrain or modify them, or use another benefit measure in such cases.',
    detailed: 'A public health-technology agency uses cost per quality-adjusted life-year to compare treatments across diseases. The method can value both longer life and improvements in health-related quality of life, helping the system account for opportunity costs when budgets are limited. Disability advocates argue that some applications can disadvantage people whose baseline health states receive lower utility weights, especially when a life-saving intervention produces the same survival benefit for disabled and nondisabled patients but yields fewer conventionally measured QALYs. Public-preference research is plural: many people value severity and helping the worse off, and some studies find equal priority for life-saving treatment regardless of pre-existing disability. The agency can retain ordinary QALYs, add severity/equity modifiers and constraints, or use alternative benefit measures in specified contexts. It must decide how to preserve comparability without treating disabled lives as less worth saving.',
    scenarioSources: [REF.niceHtaManual, REF.section1557ValueAssessment],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'For life-saving treatments with comparable survival benefit, do not give lower priority merely because a patient has a pre-existing disability that reduces conventional quality-of-life weights.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from public person-tradeoff research reporting equal priority for life-saving treatment of people with pre-existing paraplegia and people returnable to full health — the judgment this candidate states as an allocation rule.',
          sources: [REF.personTradeoffDisability],
        },
        {
          id: 'pub2',
          text: 'Keep a common cost-effectiveness framework, but give additional weight to severe illness and allow explicit equity adjustments when standard QALYs would systematically disadvantage already worse-off groups.',
          method: 'adapted-from-source',
          summary: 'Adapted from broader public-preference research supporting severity weighting and priority to the worse off. The specific architecture of retaining a common framework with explicit equity adjustment is Bench editorial translation of that preference.',
          sources: [REF.personTradeoffDisability],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Continue using QALYs as a common measure of health benefit, but apply validated severity modifiers, transparent sensitivity analyses, and legal anti-discrimination constraints where baseline disability affects measured gains.',
          method: 'adapted-from-source',
          summary: 'Adapted from the NICE health-technology evaluation manual on QALYs, equal weighting of health gains, the severity modifier and sensitivity analysis, together with nondiscrimination requirements applying to value-assessment methods.',
          sources: [REF.niceHtaManual, REF.section1557ValueAssessment],
        },
        {
          id: 'exp2',
          text: 'In decisions where a quality weight would make identical survival gains count less solely because of pre-existing disability, use an alternative life-year or equal-survival valuation rather than the conventional QALY calculation.',
          method: 'adapted-from-source',
          summary: 'Adapted from nondiscrimination requirements addressing value-assessment methods that discount life extension by disability status, which point toward an alternative valuation in exactly this class of decision.',
          sources: [REF.section1557ValueAssessment],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Allocate scarce resources to produce the greatest total health benefit, but use measures that count changes in health rather than treating a person's baseline disability as evidence of lower moral worth.",
          method: 'derived-from-framework',
          summary: 'Derived from constrained consequentialism: the reasoning bridge is that the quantity to be maximized is the change a treatment produces, so importing the baseline level into the valuation of that change is a measurement error rather than a moral judgment the theory requires. The policy sentence is a Bench construction.',
          sources: [REF.danielsJustHealth],
        },
        {
          id: 'fw2',
          text: 'Give extra priority to people who are worse off in health or opportunity; efficiency measures should be subordinated when they reproduce disadvantage faced by disabled people.',
          method: 'derived-from-framework',
          summary: 'Derived from prioritarian and capabilities accounts: the reasoning bridge is that being worse off strengthens rather than weakens a claim, so a measure that inverts that relation must yield to the priority it violates. The policy sentence is a Bench construction.',
          sources: [REF.parfitEqualityPriority, REF.nussbaumCapabilities],
        },
      ],
    },
    references: [REF.niceHtaManual, REF.section1557ValueAssessment, REF.personTradeoffDisability, REF.danielsJustHealth, REF.parfitEqualityPriority, REF.nussbaumCapabilities],
  },
];
