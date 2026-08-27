// Featured v1 families F06–F10 — research ethics, reproduction and allocation.
// Transcribed from docs/featured-v1-research/F06-F10-research-reproduction-allocation.md.

import { REF } from './refs.mjs';

export const F06_F10 = [
  {
    caseId: 'f06-placebo-control-effective-treatment',
    title: 'Placebo control when effective treatment exists',
    shortDescription: 'Investigators propose a placebo-controlled trial although an effective standard treatment exists. The ethics committee must decide whether placebo is permissible and what safeguards or alternative designs are required.',
    decisionQuestion: 'When an effective treatment exists, under what conditions should a research ethics committee permit a placebo-controlled trial rather than require comparison with the best proven intervention?',
    domains: ['research-ethics'],
    tags: ['placebo control', 'standard of care', 'informed consent', 'ethics committee', 'trial design'],
    jurisdictionContext: null,
    concise: "An effective standard treatment exists, but investigators propose a placebo-controlled trial because placebo would make the new treatment's effect easier to detect. Participants assigned placebo would face temporary symptoms but no additional risk of serious or irreversible harm; the ethics committee must decide whether placebo is permissible.",
    detailed: 'Investigators propose a randomized trial of a new treatment for a chronic condition for which an effective standard therapy already exists. A placebo comparison would yield a clearer estimate of efficacy and require fewer participants than an active-control design. Participants assigned placebo would temporarily forgo the proven treatment and could experience worsening symptoms, but the investigators present evidence that this would not create additional risk of serious or irreversible harm; rescue treatment would be available if prespecified criteria were met. Potential participants would be told that an effective treatment exists outside the trial. The research ethics committee must decide whether the methodological advantage justifies placebo, whether an active-control or add-on design is required, and what safeguards are necessary.',
    scenarioSources: [REF.helsinki2024, REF.cioms2016],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Allow placebo only if participants are clearly told that effective treatment exists, can leave the trial freely, and have prompt rescue treatment if symptoms worsen.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from public-consultation and trial-participant research in which placebo-controlled trials are regarded as acceptable conditional on disclosure that effective treatment exists, freedom to withdraw, and availability of rescue treatment — the conditions this candidate states.',
          sources: [REF.placeboParticipantEvidence],
        },
        {
          id: 'pub2',
          text: 'Prefer an active-control or add-on design when effective treatment exists and placebo would impose more than low incremental risk or meaningful treatment deprivation on participants.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same participant evidence, which shows a preference for active treatment and increasing reluctance as symptom severity and risk rise, without supporting a categorical ban on placebo. The threshold wording is Bench editorial translation of that graded preference.',
          sources: [REF.placeboParticipantEvidence],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Permit placebo when compelling scientifically sound reasons make it necessary and withholding the best proven intervention creates no additional risk of serious or irreversible harm.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from paragraph 33 of the 2024 Declaration of Helsinki, which permits placebo or no treatment where a compelling and scientifically sound methodological reason makes it necessary and participants will not be subject to additional risk of serious or irreversible harm.',
          sources: [REF.helsinki2024],
        },
        {
          id: 'exp2',
          text: 'Prefer an active-control or add-on design whenever it can answer the scientific question adequately; use placebo only after the ethics committee documents why less restrictive designs are insufficient.',
          method: 'adapted-from-source',
          summary: 'Adapted from CIOMS guidance on the choice of control and from the methodological-justification literature, which treat the best proven intervention as the default and require documented justification that a less restrictive design cannot answer the question.',
          sources: [REF.cioms2016, REF.millumGradyPlacebo],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Permit placebo only when the social value and methodological necessity are substantial and the incremental participant risk remains acceptably low; informed consent cannot justify excessive risk.',
          method: 'derived-from-framework',
          summary: 'Derived from the requirements of social value, scientific validity and a favorable risk–benefit ratio in the ethical-research framework: the reasoning bridge is that consent is one requirement among several and does not license risk that fails the independent risk–benefit condition. The policy sentence is a Bench construction.',
          sources: [REF.emanuelWendlerGrady],
        },
        {
          id: 'fw2',
          text: 'Do not deliberately deprive participants of effective treatment merely to make research more efficient when a scientifically adequate design can preserve access to proven care.',
          method: 'derived-from-framework',
          summary: 'Derived from nonmaleficence and the prohibition on using persons merely as means: the reasoning bridge is that efficiency gains accrue to the research enterprise while the deprivation falls on the participant, so a design that avoids the deprivation is required where it is scientifically adequate. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.helsinki2024, REF.cioms2016, REF.placeboParticipantEvidence, REF.millumGradyPlacebo, REF.emanuelWendlerGrady, REF.beauchampChildress],
  },

  {
    caseId: 'f07-lower-resource-trial-standard-of-care',
    title: 'Standard of care in a lower-resource-country trial',
    shortDescription: 'A multinational trial proposes comparing a new intervention with local usual care where the globally best proven treatment is not accessible. The ethics committee must decide the comparator and the fair-benefit conditions.',
    decisionQuestion: 'What control standard should a multinational trial use when the best proven treatment is not routinely accessible in the host community, and what fair-benefit obligations should accompany the study?',
    domains: ['research-ethics', 'global-structural'],
    tags: ['standard of care', 'exploitation', 'community engagement', 'post-trial access', 'multinational research'],
    jurisdictionContext: null,
    stipulations: [
      {
        id: 'f07-host-system-access',
        kind: 'contextual',
        statement: 'The best proven treatment is clinically appropriate but is not routinely available through the host public health system because of cost and supply constraints, while the investigational intervention, if effective, is designed to be deliverable within that system at a sustainable cost.',
        rationale: 'Without this, the claim that the trial is locally responsive is partly supplied by the scorer rather than by the represented case: whether a locally relevant design answers a question the host system can act on depends on facts the scenario did not state, and each scorer would fill them differently. No country is named or implied, and this is a constructed benchmark assumption, not an observation about any actual health system.',
      },
    ],
    concise: 'A trial is planned in a lower-resource setting where the globally best proven treatment is not routinely available. For this benchmark, assume the best proven treatment is clinically appropriate but is not routinely available through the host public health system because of cost and supply constraints, while the investigational intervention, if effective, is designed to be deliverable within that system at a sustainable cost. Investigators propose comparing a new intervention with local standard care; the ethics committee must decide whether that comparator is acceptable and what benefits or post-trial access the sponsor owes the host community.',
    detailed: "A multinational sponsor plans a trial in a lower-resource country for a condition with an effective treatment that is routinely available in wealthy health systems but is not reliably accessible in the host community. The proposed trial would compare the investigational intervention with the host system's usual care, making the study feasible and locally relevant. For this benchmark, assume the best proven treatment is clinically appropriate but is not routinely available through the host public health system because of cost and supply constraints, while the investigational intervention, if effective, is designed to be deliverable within that system at a sustainable cost. Critics argue that participants should not receive a lower control standard simply because they live in a poorer setting. Local investigators respond that a trial using an unaffordable comparator may answer a question with little relevance to the host health system and could prevent the research from occurring. The sponsor can provide enhanced care during the study and negotiate post-trial access or health-system benefits. The ethics committee must decide what comparator and fair-benefit conditions make the study ethically acceptable.",
    scenarioSources: [REF.cioms2016, REF.globalStandardOfCareConsultations],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Co-design the control-care package with participant and community representatives, and do not justify a lower standard merely because the host population lacks access to better care.',
          method: 'adapted-from-source',
          summary: 'Adapted from community consultations on trial standards of care in lower-resource settings — including work in Mwanza, community dialogue in Nigeria raising concern about lower national versus international standards, and community and advocacy involvement in South African PrEP standard-of-care decisions. The evidence establishes community ownership and objection to deprivation-based justification; the co-design rule is Bench editorial translation.',
          sources: [REF.globalStandardOfCareConsultations],
        },
        {
          id: 'pub2',
          text: 'Permit a locally relevant design only with community ownership of key decisions and enforceable commitments to sustainable post-trial access or health-system benefits.',
          method: 'adapted-from-source',
          summary: 'Adapted from community consultation on trial standards of care and sustainable research benefits in lower-resource settings, including Kenyan residents’ emphasis on the unfairness of too few research benefits. The enforceable post-trial-access condition is Bench editorial translation of that benefit-sharing concern.',
          sources: [REF.globalStandardOfCareConsultations],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Use the best proven intervention as the comparator unless a scientifically and ethically justified exception meets international guidance and does not exploit the host population’s lack of access.',
          method: 'adapted-from-source',
          summary: 'Adapted from the Declaration of Helsinki and CIOMS guidance on choice of control, which retain the best-proven-intervention default and admit exceptions only under stated scientific and ethical conditions.',
          sources: [REF.helsinki2024, REF.cioms2016],
        },
        {
          id: 'exp2',
          text: 'Permit an enhanced local standard when it answers an important host-country question more responsively than a globally unaffordable comparator, provided risks, fair benefits, and post-trial arrangements are independently reviewed.',
          method: 'adapted-from-source',
          summary: 'Adapted from CIOMS guidance on responsiveness to host-community health needs, fair distribution of benefits and burdens, and post-trial provisions, which permits a locally responsive design under independent review rather than treating local practice as self-justifying.',
          sources: [REF.cioms2016],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Require a control-care package the host community would accept if it were not deprived of access, rejecting any comparator whose justification is the population’s poverty; background injustice should not be converted into a research advantage.',
          method: 'derived-from-framework',
          summary: 'Derived from anti-exploitation accounts in global justice: the reasoning bridge is that a background injustice which lowers a population’s bargaining position cannot supply the justification for the terms it makes available, so the comparator is fixed by what the community would accept absent that deprivation. The policy sentence is a Bench construction.',
          sources: [REF.exploitationGlobalResearch, REF.rawlsTheoryOfJustice],
        },
        {
          id: 'fw2',
          text: 'Choose the comparator that produces socially valuable knowledge for the host population while ensuring participants are not made worse off by enrollment and the community receives a fair share of benefits.',
          method: 'derived-from-framework',
          summary: 'Derived from the social-value and fair-benefits requirements of the ethical-research framework: the reasoning bridge is that the wrong in question is unfair distribution of benefit rather than comparator choice as such, so the design is fixed by responsiveness plus a no-worse-off constraint and a benefit share. The policy sentence is a Bench construction.',
          sources: [REF.emanuelWendlerGrady],
        },
      ],
    },
    references: [REF.cioms2016, REF.helsinki2024, REF.globalStandardOfCareConsultations, REF.exploitationGlobalResearch, REF.emanuelWendlerGrady, REF.rawlsTheoryOfJustice],
  },

  {
    caseId: 'f08-fourteen-day-embryo-research-limit',
    title: 'Extending the 14-day limit for human embryo research',
    shortDescription: 'Culturing human embryos beyond 14 days is now feasible. Regulators must decide whether to retain the bright-line limit, extend it to a new fixed point, or adopt staged case-by-case oversight.',
    decisionQuestion: 'Should regulators retain the 14-day limit for human embryo research, extend it to a new fixed limit, or replace it with staged case-by-case oversight?',
    domains: ['reproduction-genetics', 'research-ethics'],
    tags: ['embryo research', '14-day rule', 'moral status', 'public dialogue', 'regulatory limits'],
    jurisdictionContext: null,
    concise: 'Scientific advances now make it feasible to study human embryos beyond 14 days, potentially yielding knowledge about early development and pregnancy loss. Regulators must decide whether to retain the current bright-line limit, extend it, or adopt staged case-by-case oversight.',
    detailed: 'Scientific advances have made it increasingly feasible to culture human embryos beyond the longstanding 14-day research limit. Researchers argue that studying the period immediately after 14 days could improve understanding of early development, implantation, miscarriage, and congenital conditions that cannot be directly observed in vivo. The 14-day rule has also served as a clear social and regulatory boundary around embryo research, and changing it raises questions about moral status, public trust, and whether any new endpoint would become similarly unstable. Current international professional guidance allows jurisdictions to reconsider limits only through robust public dialogue and specialized oversight; in the United Kingdom, a major public-dialogue process is underway in 2026 and final findings are not yet available. Regulators must decide whether to retain the bright line, extend it to a later fixed point, or adopt staged review.',
    scenarioSources: [REF.isscr2025, REF.nuffield14Day],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Retain the 14-day limit for now, reflecting substantial public caution and uncertainty until a change has clearer social legitimacy and safeguards.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from Yui et al. (Stem Cell Reports, 2023), a Japanese national survey (n = 3,000) in which 19.2% disagreed with culture beyond 14 days and 42.9% could not judge — a caution-and-uncertainty majority this candidate represents. No result is attributed to the unfinished 2026 Nuffield public dialogue.',
          sources: [REF.yui2023],
        },
        {
          id: 'pub2',
          text: 'Permit conditional extension beyond 14 days for serious health research under transparent developmental limits, specialized oversight, and continuing public review.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from the same national survey, in which 37.9% agreed with extending culture beyond 14 days, together with 2024 IVF/ICSI patient focus groups (n = 22) in which many participants favored extension while raising conditions and concerns. The oversight conditions represent those stated concerns.',
          sources: [REF.yui2023, REF.ivfPatientFocusGroups2024],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Allow research beyond 14 days only under specialized scientific and ethics review, with transparent justification of why the question cannot be answered using earlier embryos or alternative models.',
          method: 'adapted-from-source',
          summary: 'Adapted from the ISSCR guidelines, which place extended embryo culture in a category requiring specialized scientific and ethical review and justification that the question cannot be answered by less contested means.',
          sources: [REF.isscr2025],
        },
        {
          id: 'exp2',
          text: 'Retain a clear statutory limit until a regulator defines a new nationally accountable framework through evidence review, public engagement, licensing criteria, and enforceable developmental endpoints.',
          method: 'adapted-from-source',
          summary: 'Adapted from the ISSCR requirement that any change proceed through national processes with public dialogue, and from the Nuffield Council’s ongoing review of the rule, which frames the question as one for accountable national deliberation rather than professional discretion.',
          sources: [REF.isscr2025, REF.nuffield14Day],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Retain a fixed statutory limit at a single publicly declared developmental point and do not grant case-by-case exceptions, because a bright line is justified as a public rule that limits morally contested research predictably even when reasonable people disagree about the embryo's precise moral status.",
          method: 'derived-from-framework',
          summary: 'Derived from public-reason accounts of rule-making under reasonable disagreement: the reasoning bridge is that where a precise moral status cannot be publicly established, a clear and stable boundary can still be justified by the predictability and trust it secures - which is why the policy has to exclude case-by-case exception, since a line that bends on application is not the rule being defended. The policy sentence is a Bench construction.',
          sources: [REF.rawlsTheoryOfJustice],
        },
        {
          id: 'fw2',
          text: 'Moral concern can increase with embryonic development without requiring 14 days to be an absolute threshold; permit proportionate research as potential value and moral stakes increase under stronger oversight.',
          method: 'derived-from-framework',
          summary: 'Derived from gradualist accounts of moral status together with proportionality: the reasoning bridge is that if moral concern is continuous in development, an absolute discontinuity at one day is unmotivated, so oversight should scale with developmental stage instead. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.isscr2025, REF.yui2023, REF.ivfPatientFocusGroups2024, REF.nuffield14Day, REF.rawlsTheoryOfJustice, REF.beauchampChildress],
  },

  {
    caseId: 'f09-heritable-genome-editing-serious-disease',
    title: 'Heritable genome editing to prevent serious disease',
    shortDescription: 'Assuming a heritable genome-editing technique reaches a high verified safety threshold, regulators must decide whether reproductive use to prevent a serious monogenic disease should remain prohibited or be narrowly permitted.',
    decisionQuestion: 'If safety and efficacy eventually reach a specified high threshold, under what conditions, if any, should regulators permit heritable genome editing to prevent a serious genetic disease?',
    domains: ['reproduction-genetics'],
    tags: ['germline editing', 'future generations', 'stipulated safety threshold', 'international governance', 'reproductive alternatives'],
    jurisdictionContext: null,
    concise: 'Assume a heritable genome-editing technique has reached a high, independently verified safety and efficacy threshold for preventing a serious monogenic disease. Regulators must decide whether reproductive use should remain prohibited or be permitted under narrow clinical and governance conditions.',
    detailed: 'A regulator is considering a future clinical application of heritable genome editing for couples at high risk of transmitting a serious monogenic disease. For this scenario, assume extensive evidence has reduced off-target and mosaicism risks to a level comparable with other accepted assisted-reproduction procedures, while long-term uncertainty can never be eliminated completely. Preimplantation genetic testing may help some couples avoid transmission but is not a workable option in every reproductive circumstance. Any resulting genetic change could be inherited by future generations, who cannot consent, and access could be highly unequal. International governance would include registries, long-term follow-up, cross-border oversight, and a prohibition on nonmedical enhancement in this first use. Regulators must decide whether clinical reproductive use should remain prohibited or be permitted under narrow conditions.',
    scenarioSources: [REF.whoGenomeEditingFramework2021, REF.heritableGenomeEditing2020],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: "Permit heritable editing only to prevent a serious genetic disease when no reasonable reproductive alternative can achieve the couple's goal and independent oversight verifies safety and follow-up.",
          method: 'adapted-from-source',
          summary: 'Adapted from multinational public-attitude research consistently finding greater support for preventing serious disease than for enhancement, with support conditional on safety, the absence of alternatives and governance. The specific permissive rule is Bench editorial translation of that conditional support.',
          sources: [REF.genomeEditingAttitudes],
        },
        {
          id: 'pub2',
          text: 'Keep reproductive heritable editing prohibited even for disease prevention until several generations of broader evidence and international agreement show that risks and inequities can be governed responsibly.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same body of attitude research, in which support is contingent on heritability concerns and governance capacity and a substantial share of respondents remain opposed on those grounds. The generational-evidence condition is Bench editorial translation of that opposition, not a surveyed policy option.',
          sources: [REF.genomeEditingAttitudes],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Do not authorize clinical heritable genome editing at present; require international governance, registries, continuing evidence review, and explicit criteria before any future reproductive pathway is considered.',
          method: 'adapted-from-source',
          summary: 'Adapted from the WHO governance framework and recommendations on human genome editing, which call for registries, international oversight and the absence of any current clinical authorization for heritable applications.',
          sources: [REF.whoGenomeEditingFramework2021, REF.whoGenomeEditingRecommendations2021],
        },
        {
          id: 'exp2',
          text: 'If future clinical use is opened, restrict it initially to serious monogenic disease, stringent preclinical thresholds, independent review, long-term follow-up, and cases where established reproductive alternatives are inadequate.',
          method: 'adapted-from-source',
          summary: 'Adapted from the International Commission report on heritable human genome editing, which sets out an initial-use pathway limited to serious monogenic disease with stringent preclinical evidence thresholds, independent review, long-term follow-up and inadequacy of alternatives.',
          sources: [REF.heritableGenomeEditing2020],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Permit disease-preventing heritable editing when expected benefits to future children are large, residual risks are comparable to accepted reproduction, and access and enhancement boundaries are governed fairly.',
          method: 'derived-from-framework',
          summary: 'Derived from beneficence toward future persons together with reproductive liberty: the reasoning bridge is that if the residual risk is comparable to procedures already accepted, the remaining objection must rest on the distribution and scope of use, which governance can address. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'Maintain a prohibition where irreversible germline choices impose uncertain risks and social consequences on future persons who cannot consent, unless necessity and legitimacy meet an exceptionally demanding threshold.',
          method: 'derived-from-framework',
          summary: 'Derived from precaution and intergenerational justice: the reasoning bridge is that irreversibility plus the impossibility of consent by the affected parties raises the justificatory burden above what an ordinary risk–benefit comparison would require. The policy sentence is a Bench construction.',
          sources: [REF.intergenerationalJustice],
        },
      ],
    },
    references: [REF.whoGenomeEditingFramework2021, REF.whoGenomeEditingRecommendations2021, REF.heritableGenomeEditing2020, REF.genomeEditingAttitudes, REF.beauchampChildress, REF.intergenerationalJustice],
  },

  {
    caseId: 'f10-age-as-organ-allocation-criterion',
    title: 'Age as an organ-allocation criterion',
    shortDescription: 'Transplant candidates matched on urgency and expected benefit differ in age. The allocation system must decide whether chronological age should have no independent role, act only through prognosis, or serve as a limited tie-breaker.',
    decisionQuestion: 'When transplant candidates have similar urgency and expected transplant benefit, should chronological age independently influence allocation priority, and if so only as a tie-breaker or more strongly?',
    domains: ['allocation-transplantation'],
    tags: ['organ allocation', 'fair innings', 'age discrimination', 'tie-breaking', 'allocation policy'],
    jurisdictionContext: null,
    concise: 'Two transplant candidates have similar urgency and expected graft benefit but differ substantially in age. The allocation system must decide whether age should have no independent role, operate only through prognosis, or provide limited priority to the younger patient.',
    detailed: "An organ-allocation system is revising how it handles candidates who are otherwise closely matched in urgency and expected transplant benefit. Chronological age predicts some clinical outcomes, but the system can already incorporate those outcomes directly rather than using age as a proxy. Some members of the public and ethicists argue that younger people should sometimes receive priority because they have had less opportunity to pass through life's stages; others view age priority as unequal valuation of persons and potentially discriminatory. Allocation authorities also seek rules that are transparent and reproducible rather than informal bedside judgments. The policy question is whether age should have no independent role, appear only insofar as it changes expected medical benefit, or serve as a limited tie-breaker among otherwise comparable candidates.",
    scenarioSources: [REF.optnEthics, REF.transplantPublicPreferences],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: "When candidates are otherwise closely matched, give limited priority to the younger patient as a tie-breaker because they have had less opportunity to experience the stages of life.",
          method: 'extracted-from-evidence',
          summary: 'Extracted from public-preference research on transplant allocation, including German focus groups and a discrete-choice experiment (n = 1,028) in which younger age influenced many respondents alongside expected benefit, urgency and waiting time.',
          sources: [REF.transplantPublicPreferences],
        },
        {
          id: 'pub2',
          text: 'Do not give chronological age independent weight; allocate by urgency, expected transplant benefit, and other declared criteria that apply equally across ages.',
          method: 'adapted-from-source',
          summary: 'Adapted from the equality-focused themes in the same focus-group research, in which participants objected to treating age as a measure of a person’s claim. This candidate represents that theme; it does not claim a majority public preference for excluding age.',
          sources: [REF.transplantPublicPreferences],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Use age only when it contributes to a validated estimate of medically relevant outcomes; do not add a separate age score that double-counts prognosis or assigns social worth.',
          method: 'adapted-from-source',
          summary: 'Adapted from OPTN Ethics Committee statements of the ethical principles of allocation, which admit utility through validated outcome estimation and exclude judgments of social worth.',
          sources: [REF.optnEthics],
        },
        {
          id: 'exp2',
          text: 'When clinically relevant criteria leave candidates effectively tied, use a transparent neutral tie-break such as lottery rather than an independent age preference.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same allocation-ethics material, which values transparent and reproducible rules over informal discretion and treats equal chance as a defensible resolution where declared criteria do not discriminate between candidates.',
          sources: [REF.optnEthics],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Allow a modest life-cycle tie-break when all else is equal, because giving someone a chance to reach life stages others have already experienced can express priority to the worse off over a lifetime.',
          method: 'derived-from-framework',
          summary: 'Derived from prioritarian and fair-innings reasoning applied over complete lives: the reasoning bridge is that if the unit of moral concern is a whole life, the candidate with less life so far is the worse off, which grounds a modest priority where other criteria are equal. The policy sentence is a Bench construction.',
          sources: [REF.parfitEqualityPriority, REF.danielsJustHealth],
        },
        {
          id: 'fw2',
          text: 'Give persons equal moral status regardless of age; differences in priority should track relevant benefit or need, not the amount of life already lived as an independent value.',
          method: 'derived-from-framework',
          summary: 'Derived from equal moral status and fairness in claim-satisfaction: the reasoning bridge is that each candidate’s claim arises from present need and expected benefit, so life already lived is not a difference between the claims themselves. The policy sentence is a Bench construction.',
          sources: [REF.broomeFairness, REF.rawlsTheoryOfJustice],
        },
      ],
    },
    references: [REF.optnEthics, REF.transplantPublicPreferences, REF.parfitEqualityPriority, REF.danielsJustHealth, REF.broomeFairness, REF.rawlsTheoryOfJustice],
  },
];
