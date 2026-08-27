// Featured v1 families F01–F05 — clinical, consent and end of life.
//
// Scenario text, decision questions and all six candidate texts are transcribed from
// docs/featured-v1-research/F01-F05-clinical-life.md, which is the editorial source of
// truth. This file adds only the machine-readable identity and provenance the schema
// requires. Do not edit the wording here; change the dossier and re-transcribe.

import { REF } from './refs.mjs';

export const F01_F05 = [
  {
    caseId: 'f01-elective-surgery-transfusion-refusal',
    title: 'High-risk surgery when a competent adult refuses blood transfusion',
    shortDescription: 'A competent adult refuses allogeneic transfusion but accepts blood-conservation methods before elective surgery with a meaningful bleeding risk. The hospital must decide whether to proceed and under what safeguards.',
    decisionQuestion: 'Should the hospital undertake the elective operation under a bloodless-management plan when the competent patient refuses transfusion, and what risk threshold or safeguards should govern that decision?',
    domains: ['consent-capacity-refusal'],
    tags: ['informed refusal', 'religious belief', 'professional integrity', 'surgery', 'institutional policy'],
    jurisdictionContext: null,
    concise: 'A competent adult needs elective surgery with a meaningful risk of major bleeding and refuses allogeneic blood transfusion, while accepting evidence-based blood-conservation methods. The hospital must decide whether to proceed and what safety threshold or safeguards should apply.',
    detailed: 'A competent adult is considering elective surgery that offers substantial expected benefit but carries a meaningful risk of major blood loss. The patient consistently refuses allogeneic blood transfusion for religious reasons after discussing the risk of severe anemia, disability, and death, but accepts specified blood-conservation techniques and nonblood alternatives. A multidisciplinary team can reduce, but not eliminate, the bleeding risk. Some surgeons are willing to operate under a documented bloodless-management plan; others believe the residual risk may exceed what they can responsibly accept for an elective procedure. Transfer to another experienced center is possible but would delay care. The hospital must decide whether to proceed and what risk threshold or safeguards should govern that decision.',
    scenarioSources: [REF.rcsBloodRefusal2016, REF.jwBloodRefusalMaterials],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: "Proceed if the patient gives informed refusal of transfusion and the team offers a feasible bloodless plan, because the patient's treatment choices should be respected.",
          method: 'adapted-from-source',
          summary: 'Adapted from affected-community materials in which refusal of allogeneic blood is explicit and longstanding while individually specified blood-conservation alternatives are accepted. The community evidence establishes the refusal and the acceptance of alternatives directly; converting that into a hospital rule about proceeding with elective surgery is Bench editorial translation, and no surveyed community risk threshold is claimed.',
          sources: [REF.jwBloodRefusalMaterials],
        },
        {
          id: 'pub2',
          text: 'Proceed only after a second specialist review confirms that blood-conservation options, emergency contingencies, and transfer alternatives have been fully discussed with the patient.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same affected-community evidence together with patient-information practice emphasizing advance discussion of contingencies and transfer. The process safeguard is an editorial translation of the community preference for informed, individually planned bloodless care, not a directly surveyed policy option.',
          sources: [REF.jwBloodRefusalMaterials, REF.rcsBloodRefusal2016],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Proceed when the multidisciplinary team judges that the operation can be performed to an acceptable professional standard using agreed blood-conservation strategies and documented informed refusal.',
          method: 'adapted-from-source',
          summary: 'Adapted from Royal College of Surgeons good-practice guidance on caring for patients who refuse blood, which requires advance planning, multidisciplinary involvement, documented refusal and application of blood-conservation techniques.',
          sources: [REF.rcsBloodRefusal2016],
        },
        {
          id: 'exp2',
          text: "Postpone, modify, or decline the elective operation when refusal of transfusion makes the residual perioperative risk exceed the team's defensible safety threshold; facilitate referral where feasible.",
          method: 'adapted-from-source',
          summary: 'Adapted from the same professional guidance and perioperative bloodless-management literature, which recognize that surgeons may decline an elective procedure they cannot perform to an acceptable standard and should then support referral rather than abandon the patient.',
          sources: [REF.rcsBloodRefusal2016],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Honor the patient's autonomous refusal and offer the operation when it remains within the ordinary range of professionally acceptable risk; do not make acceptance of transfusion a condition by itself.",
          method: 'derived-from-framework',
          summary: 'Derived from respect for autonomy as developed in principlism: a capacitated refusal of a specific intervention is authoritative over that intervention, so the reasoning bridge is that refusal of one rescue modality does not by itself withdraw the patient from care otherwise within accepted professional risk. The policy sentence is a Bench construction, not a quotation.',
          sources: [REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'Do not undertake an elective procedure when the foreseeable risk created by unavailable rescue treatment exceeds a reasonable nonmaleficence threshold, while preserving referral and alternative-care options.',
          method: 'derived-from-framework',
          summary: 'Derived from nonmaleficence and professional integrity: where the elective character of the procedure means the harm can be avoided without loss of a necessary benefit, the reasoning bridge is that a foreseeable increase in serious harm can defeat the reason to operate, with referral preserving the patient’s access. The policy sentence is a Bench construction, not a quotation.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.rcsBloodRefusal2016, REF.jwBloodRefusalMaterials, REF.beauchampChildress],
  },

  {
    caseId: 'f02-advance-directive-dementia-contentment',
    title: 'Advance directive versus current contentment in dementia',
    shortDescription: 'A person with advanced dementia appears content but signed a directive years earlier refusing life-prolonging treatment. Clinicians must decide how strongly it should control treatment of a serious but reversible infection.',
    decisionQuestion: "When a person with advanced dementia lacks decision-making capacity but appears content, how should clinicians weigh a prior directive refusing life-prolonging treatment against the person's current welfare?",
    domains: ['end-of-life', 'consent-capacity-refusal'],
    tags: ['advance directive', 'dementia', 'precedent autonomy', 'surrogate decision-making', 'best interests'],
    jurisdictionContext: null,
    concise: 'A person with advanced dementia lacks decision-making capacity but appears comfortable and engaged. Years earlier, while competent, they signed a directive refusing life-prolonging treatment in this condition; clinicians must decide how strongly it should control treatment of a serious but reversible infection.',
    detailed: 'A person with advanced dementia no longer has decision-making capacity, recognizes few people, and cannot understand treatment decisions, but currently appears comfortable, enjoys music and meals, and shows no persistent distress. Years earlier, while fully competent, the person signed an advance directive stating that if severe dementia caused loss of decisional capacity, they did not want life-prolonging treatment. The directive did not name the specific infection now diagnosed, which is serious but likely treatable with hospitalization and intravenous therapy. The surrogate believes the earlier directive should be followed; some caregivers feel the person’s present enjoyment matters morally. The clinical team must decide how strongly the prior directive should control treatment in light of the person’s current welfare.',
    scenarioSources: [REF.advanceDirectiveDementiaStudies, REF.advanceDirectiveClinicalGuidance],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Give substantial weight to the prior directive, but confirm with the surrogate that it was meant to apply to this kind of treatable illness and this current state.',
          method: 'adapted-from-source',
          summary: 'Adapted from advance-care-planning research with people living with dementia and their caregivers, in which participants treat previously expressed values as continuing to carry authority while wanting a surrogate to confirm that a nonspecific directive was meant for the situation that has arisen. The confirmation step is an editorial translation of that value, not a surveyed policy.',
          sources: [REF.advanceDirectiveDementiaStudies],
        },
        {
          id: 'pub2',
          text: 'Treat the serious reversible illness when treatment is not highly burdensome and the person presently appears content, unless the directive unmistakably anticipated and rejected this situation.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same body of empirical work, which documents caregivers and clinicians giving weight to a person’s present comfort and engagement when a directive does not clearly speak to the current illness. The treatment-burden condition is Bench editorial translation of that concern into an actionable rule.',
          sources: [REF.advanceDirectiveDementiaStudies],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: "Follow the valid prior directive when it clearly applies to the present condition, using the surrogate to interpret rather than replace the person's previously expressed values.",
          method: 'adapted-from-source',
          summary: 'Adapted from clinical-ethics guidance on advance directives and substituted judgment, under which a valid and applicable directive governs and the surrogate’s role is interpretive rather than substitutive.',
          sources: [REF.advanceDirectiveClinicalGuidance],
        },
        {
          id: 'exp2',
          text: "Use a structured best-interpretation review when the directive is nonspecific, weighing its applicability, treatment burden, prognosis, and the person's current signs of welfare before withholding treatment.",
          method: 'adapted-from-source',
          summary: 'Adapted from the same clinical-ethics guidance, which prescribes a structured review of applicability, burden and prognosis where a directive does not name the present condition rather than automatic application or automatic disregard.',
          sources: [REF.advanceDirectiveClinicalGuidance],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Give priority to precedent autonomy: the competent person's considered plan for the shape of their life should continue to govern after decisional capacity is lost.",
          method: 'derived-from-framework',
          summary: 'Derived from Dworkin’s distinction between critical and experiential interests: the reasoning bridge is that a competent person’s considered judgment about the narrative shape of their own life retains authority over later states in which they can no longer form such judgments. The policy sentence is a Bench construction, not a quotation from Dworkin.',
          sources: [REF.dworkinLifesDominion],
        },
        {
          id: 'fw2',
          text: 'Give independent moral weight to the person’s current experiential interests; a past directive should not automatically defeat substantial present welfare when its application is ambiguous.',
          method: 'derived-from-framework',
          summary: 'Derived from accounts that ground moral claims in a subject’s present capacity for welfare, together with the principlist weighing of beneficence against autonomy: the reasoning bridge is that where the directive’s application is genuinely ambiguous, present welfare is not displaced by a prior judgment that did not address this state. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.dworkinLifesDominion, REF.advanceDirectiveDementiaStudies, REF.advanceDirectiveClinicalGuidance, REF.beauchampChildress],
  },

  {
    caseId: 'f03-periviable-resuscitation-default',
    title: 'Resuscitation at the threshold of viability',
    shortDescription: 'Delivery is expected at 23 weeks, where both intensive resuscitation and comfort care are accepted options. The hospital must decide whether policy should set a default or leave the choice to shared decision-making with parents.',
    decisionQuestion: 'For an anticipated birth in the periviable gray zone, should the hospital default to resuscitation, default to comfort care, or defer the choice to shared decision-making with the parents?',
    domains: ['pediatric-neonatal'],
    tags: ['periviability', 'shared decision-making', 'parental authority', 'prognostic uncertainty', 'institutional policy'],
    jurisdictionContext: null,
    concise: "Delivery is expected at 23 weeks' gestation, where survival and long-term outcomes remain highly uncertain and both intensive resuscitation and comfort care are accepted options. The hospital must decide whether policy should default to one pathway or leave the choice to shared decision-making with the parents.",
    detailed: "A pregnant patient is likely to deliver at 23 weeks' gestation despite efforts to prolong pregnancy. At this gestation, survival is possible but uncertain, and survivors face substantial risks of serious morbidity; individual prognosis also depends on factors beyond gestational age. The neonatal team can provide full delivery-room resuscitation and intensive care or comfort-focused care after birth. The parents have received balanced counseling and understand that either pathway may be reasonable in this gray zone, but they ask what the hospital recommends. Clinicians differ on whether standardized gestational thresholds promote consistency or whether parental values should control within a zone of prognostic uncertainty. The hospital must decide what default and decision process its policy should use.",
    scenarioSources: [REF.acogPeriviable, REF.prospectiveParentsPeriviable],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: "Within the acknowledged gray zone, present resuscitation and comfort care as legitimate options and follow the informed parents' preference unless it falls outside accepted clinical bounds.",
          method: 'adapted-from-source',
          summary: 'Adapted from qualitative studies of prospective parents facing periviable delivery, which identify values including giving the infant a chance, future quality of life, suffering, family life and faith, and a strong wish to participate in the decision. The specific institutional rule of following parental preference within accepted bounds is Bench editorial translation of those values.',
          sources: [REF.prospectiveParentsPeriviable],
        },
        {
          id: 'pub2',
          text: 'Use shared decision-making and, when parents want guidance, provide a clinician recommendation based on individualized prognosis while preserving parental choice within the accepted gray zone.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from prospective-parent studies reporting that 63% desired a shared decision-making role and that parents frequently want a clinician recommendation within that shared process. This candidate represents that reported preference rather than a public preference for a rigid gestational default.',
          sources: [REF.prospectiveParentsPeriviable],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: "Use individualized shared decision-making at 23 weeks, incorporating prognosis beyond gestational age and the parents' values rather than treating gestational age alone as determinative.",
          method: 'adapted-from-source',
          summary: 'Adapted from the ACOG/SMFM Periviable Birth obstetric care consensus and allied neonatal counseling guidance, which direct that gestational age alone should not determine management and that individualized prognosis and family values be incorporated.',
          sources: [REF.acogPeriviable],
        },
        {
          id: 'exp2',
          text: 'Adopt transparent lower and upper thresholds with a parent-preference zone between them, because clinicians favor standardization but also defer to parental choice within uncertainty.',
          method: 'extracted-from-evidence',
          summary: 'Extracted from Krick and Feltman’s survey of neonatologists’ guideline preferences, which found simultaneous support for standardized thresholds and for parental choice within a gray zone — the structure this candidate states as policy.',
          sources: [REF.krickFeltman2019],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Give parents broad decisional authority where both pathways are medically reasonable, because they bear special responsibility for interpreting the child's best interests under uncertainty.",
          method: 'derived-from-framework',
          summary: 'Derived from accounts of parental authority and the best-interests standard: the reasoning bridge is that where reasonable clinicians disagree and outcomes are genuinely uncertain, the party who will bear and interpret the consequences of the choice has the stronger claim to make it. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
        {
          id: 'fw2',
          text: 'Use a fair, consistently applied prognosis threshold to protect newborn interests and reduce arbitrary variation, while permitting parental choice only where expected burdens and benefits are closely balanced.',
          method: 'derived-from-framework',
          summary: 'Derived from formal justice and the requirement to treat like cases alike: the reasoning bridge is that arbitrary institutional variation is itself a harm to newborns whose treatment then depends on where they are born, so a published threshold constrains parental choice to the genuinely balanced range. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress, REF.rawlsTheoryOfJustice],
        },
      ],
    },
    references: [REF.acogPeriviable, REF.krickFeltman2019, REF.prospectiveParentsPeriviable, REF.beauchampChildress],
  },

  {
    caseId: 'f04-brain-death-accommodation',
    title: 'Brain death and continued organ support after family objection',
    shortDescription: 'A patient has been validly declared dead by neurologic criteria, but the family rejects the determination and asks that organ support continue. The hospital must set its accommodation policy.',
    decisionQuestion: 'After death by neurologic criteria has been validly determined, what accommodation should a hospital provide when the family objects and asks for continued organ support?',
    domains: ['end-of-life'],
    tags: ['brain death', 'religious accommodation', 'definition of death', 'institutional policy', 'public trust'],
    jurisdictionContext: 'An institutional-policy decision taken within a jurisdiction whose law permits the hospital to choose among these accommodation options. No specific national or state statute is stipulated; where local law mandates a particular accommodation, that law governs and this record represents the remaining policy discretion.',
    concise: 'A patient has been validly declared dead by neurologic criteria, but the family rejects the determination and asks that ventilation and other organ support continue. The hospital must decide how much accommodation, time for transfer, or continued support its policy should provide.',
    detailed: "A patient has suffered catastrophic brain injury and, after all prerequisites and examinations required by the hospital's current protocol, has been declared dead by neurologic criteria. The family does not accept brain death as death for religious and personal reasons and asks that ventilation, vasopressors, and other organ support continue. The clinical team has explained the determination and offered ethics, spiritual-care, and language support. There is no prospect that treatment will restore brain function, but short-term organ support can continue while the family seeks transfer. A receiving facility has not yet been identified, and prolonged support would use intensive-care resources and require staff to treat a legally dead patient. The hospital must decide what period and form of accommodation its policy should provide.",
    scenarioSources: [REF.bdDncGuideline2023, REF.bdDncCommunicationGuidance],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Continue organ support for a short, clearly defined accommodation period so the family can absorb the death determination, involve spiritual advisers, and seek transfer if desired.',
          method: 'adapted-from-source',
          summary: 'Adapted from affected religious and pastoral stakeholder evidence documenting families’ reasons for objecting and their need for time, spiritual involvement and the option of transfer. This is affected-community evidence, not a nationally representative public survey; the bounded accommodation period is Bench editorial translation.',
          sources: [REF.bdDncAccommodationSurveys],
        },
        {
          id: 'pub2',
          text: "Continue support longer when a family's sincerely held religious understanding of death conflicts with neurologic criteria, provided transfer is actively pursued and resource burdens remain manageable.",
          method: 'extracted-from-evidence',
          summary: 'Extracted from surveys of affected religious and pastoral communities: a multidenominational rabbi survey found 18% favored continued ventilation after a BD/DNC determination, and a hospital-chaplain survey found 30% thought families should be able to choose whether organ support is discontinued. This is affected-community evidence about the policy itself, and is not presented as general public opinion.',
          sources: [REF.bdDncAccommodationSurveys],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'After valid BD/DNC determination, provide a reasonable, time-limited accommodation and a process for resolving disagreement; discontinue organ support when that process is complete absent a lawful exception.',
          method: 'adapted-from-source',
          summary: 'Adapted from the 2023 AAN/AAP/CNS/SCCM consensus practice guideline and subsequent professional guidance on family objections, which support reasonable time-limited accommodation together with a defined process for resolving disagreement.',
          sources: [REF.bdDncGuideline2023, REF.bdDncCommunicationGuidance],
        },
        {
          id: 'exp2',
          text: 'Use an institutional escalation process that includes ethics, legal, spiritual care, and transfer efforts, with accommodation duration determined by clinical feasibility, law, and resource impact rather than an open-ended family veto.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same professional guidance on institutional dispute processes, which describes multidisciplinary escalation and transfer efforts and does not treat family disagreement as conferring an indefinite entitlement to organ support.',
          sources: [REF.bdDncCommunicationGuidance],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: 'Respect pluralism by allowing meaningful but bounded accommodation for families who reject neurologic criteria, while not requiring institutions to sustain organ support indefinitely after death has been validly determined.',
          method: 'derived-from-framework',
          summary: 'Derived from liberal pluralism and respect for persons: the reasoning bridge is that a public institution owes real weight to a sincerely held comprehensive view about what death is, but not an unlimited claim on shared resources or on staff who must act under the public standard. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress, REF.rawlsTheoryOfJustice],
        },
        {
          id: 'fw2',
          text: "Apply the accepted public standard of death consistently after a fair determination process; provide compassionate transition support, but do not treat family disagreement as authority to redefine the patient's status indefinitely.",
          method: 'derived-from-framework',
          summary: 'Derived from public-reason and formal-justice considerations: the reasoning bridge is that a determination of death is a public status established by a fair and consistently applied procedure, so its content cannot vary with the objections of the party most affected without destroying the standard. The policy sentence is a Bench construction.',
          sources: [REF.rawlsTheoryOfJustice],
        },
      ],
    },
    references: [REF.bdDncGuideline2023, REF.bdDncAccommodationSurveys, REF.bdDncCommunicationGuidance, REF.beauchampChildress, REF.rawlsTheoryOfJustice],
  },

  {
    caseId: 'f05-medical-aid-in-dying-policy',
    title: 'Medical aid in dying for terminal illness',
    shortDescription: 'A health system in a jurisdiction where medical aid in dying is legally permitted must decide whether its clinicians may participate, and what safeguards, palliative-care requirements and conscience protections should apply.',
    decisionQuestion: 'Should a health system permit clinician participation in medical aid in dying for competent adults with terminal illness under specified safeguards, and what alternative or conscience protections should accompany that policy?',
    domains: ['assisted-dying', 'end-of-life'],
    tags: ['medical aid in dying', 'autonomy', 'conscientious objection', 'palliative care', 'institutional policy'],
    jurisdictionContext: 'A jurisdiction in which medical aid in dying is legally permitted for competent adults with terminal illness who meet statutory safeguards. No specific national or state statute is stipulated, and the record does not represent a clinician-administered euthanasia regime.',
    concise: 'A health system in a jurisdiction where medical aid in dying is legally permitted is setting policy for competent adults with terminal illness who make sustained voluntary requests. It must decide whether clinicians may participate and what safeguards, palliative-care requirements, and conscience protections should apply.',
    detailed: 'A health system operates in a jurisdiction where medical aid in dying is legally permitted for competent adults with terminal illness who meet statutory safeguards. It must decide whether and how its clinicians may participate. Requests must be voluntary and informed, and the patient must retain decision-making capacity at the relevant stages; palliative and hospice care are also available. Some patients and clinicians regard assisted dying as an important form of control over intolerable end-of-life suffering, while others believe deliberately helping cause death conflicts with professional commitments or moral convictions. The system can require independent assessment, waiting or reconfirmation steps, palliative-care discussion, and protections for conscientious nonparticipation. It must adopt a policy that governs access without treating legal permission as ethical resolution.',
    scenarioSources: [REF.maidSafeguardsLiterature, REF.amaCodeEndOfLife],
    candidates: {
      public: [
        {
          id: 'pub1',
          text: 'Permit medical aid in dying for eligible competent adults after a voluntary, informed, sustained request and independent confirmation that legal safeguards are met.',
          method: 'adapted-from-source',
          summary: 'Adapted from long-running public-opinion evidence, including the Gallup May 2026 reading in which 49% of US adults judged doctor-assisted suicide morally acceptable, and from survey work showing that support is conditioned on terminal illness, voluntariness and safeguards. The polling measures moral acceptability rather than this institutional rule, so the policy wording is Bench editorial translation of the supportive position.',
          sources: [REF.gallupMoralAcceptability2026],
        },
        {
          id: 'pub2',
          text: 'Permit access only after the patient has been offered specialist palliative-care consultation and an independent clinician has reconfirmed capacity, voluntariness, and eligibility.',
          method: 'adapted-from-source',
          summary: 'Adapted from the same public-opinion evidence, in which a substantial minority (45% in May 2026) judged the practice morally wrong and in which support across studies is strongly conditional on safeguards and available alternatives. The specific palliative-consultation and reconfirmation requirements are Bench editorial translation of that conditional position, not a surveyed option.',
          sources: [REF.gallupMoralAcceptability2026],
        },
      ],
      expert: [
        {
          id: 'exp1',
          text: 'Allow participating clinicians to provide medical aid in dying under a standardized eligibility, capacity, documentation, and independent-review protocol, while protecting conscientious nonparticipation without patient abandonment.',
          method: 'adapted-from-source',
          summary: 'Adapted from contemporary practice and safeguard literature in permitting jurisdictions, which describes standardized eligibility and capacity assessment, documentation, independent review, and protection of conscientious nonparticipation coupled with a duty of non-abandonment.',
          sources: [REF.maidSafeguardsLiterature],
        },
        {
          id: 'exp2',
          text: 'Do not require clinicians or institutional services to provide medical aid in dying; require truthful information, continuity of symptom care, and a lawful pathway for patients to obtain information or transfer care.',
          method: 'adapted-from-source',
          summary: 'Adapted from professional-code positions treating physician-assisted suicide as incompatible with the physician’s role while requiring truthful information, continued symptom management and non-abandonment.',
          sources: [REF.amaCodeEndOfLife],
        },
      ],
      framework: [
        {
          id: 'fw1',
          text: "Permit aid in dying when a competent person's informed and enduring choice concerns their own terminal suffering and the policy contains safeguards against coercion and impaired decision-making.",
          method: 'derived-from-framework',
          summary: 'Derived from respect for autonomy together with the relief of suffering: the reasoning bridge is that a decision about the manner of one’s own imminent death is paradigmatically self-regarding, so the burden falls on safeguards against coercion and impairment rather than on prohibition. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress, REF.millOnLiberty],
        },
        {
          id: 'fw2',
          text: "Do not make intentional assistance in causing death part of the clinician's therapeutic role; meet suffering through palliation, non-abandonment, and respect for refusals of burdensome treatment.",
          method: 'derived-from-framework',
          summary: 'Derived from deontological accounts of the professional role and of the intention to cause death: the reasoning bridge is that the wrongness attaches to the clinician’s intended end rather than to the patient’s suffering, leaving palliation, non-abandonment and honoring refusals as the available responses. The policy sentence is a Bench construction.',
          sources: [REF.beauchampChildress],
        },
      ],
    },
    references: [REF.gallupMoralAcceptability2026, REF.amaCodeEndOfLife, REF.maidSafeguardsLiterature, REF.beauchampChildress, REF.millOnLiberty],
  },
];
