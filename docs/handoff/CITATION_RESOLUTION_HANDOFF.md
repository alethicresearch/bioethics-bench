# Handoff — resolve Featured v1 citations to works a reader can open

**For:** the corpus author.
**From:** the independent reviewer, 28 August 2026.
**Status:** method established, four citations resolved as worked examples, the rest inventoried
below. This is construction work, so it is handed over rather than done.

---

## The task

Featured v1 carries 324 candidate-level source citations. 82 have a URL and 22 a DOI. Of the 110
distinct citations left without a locator, **93 describe a literature rather than a single work**.

That is why this is not data entry. *"Representative German public surveys on vaccine mandates
during a serious outbreak, showing a genuine split…"* has no DOI, and assigning one would mean
choosing a study and presenting a class-level claim as a specific work — the failure the
policy-basis taxonomy prevents, one level down.

The tractable version is already in our own research. `docs/featured-v1-research/SOURCE_LEDGER.md`
names many of the specific works behind those class descriptions: Yui et al. on the Japanese 14-day
survey, RCS England *Caring for Patients who Refuse Blood* (2016), Declaration of Helsinki 2024,
CIOMS Guideline 5, the WHO Global Code as amended 29 May 2026, the AAN/AAP/CNS/SCCM guideline. The
identifications are **recoverable rather than invented**; they never travelled from the ledger into
the records' citations.

So, family by family: for each class-level citation, decide whether the ledger already names the
work; if it does, promote it into the citation and attach a verified locator.

## Rules that should not bend

1. **Never record a locator from memory.** Query Crossref (or the publisher) by bibliographic
   string and match on container title, year, author and subject. `confirmed` means all four
   matched; `probable` means a detail could not be checked.
2. **A class-level citation may stay class-level.** Some genuinely refer to a literature. Leaving
   one without a locator is a correct outcome, not a gap to close.
3. **Promoting a class-level citation to a named work changes what the record claims.** It is a
   construction decision, not a formatting one.
4. **Do not edit frozen records to add locators.** See below.

## Where locators go, and why not in the records

Featured v1 records are `released` and `public`. Their content hashes roll up into the corpus
SHA-256 `ca48c4dc84f3542b26344663af3049360acdf76c97ea3c0bcc67dfb33988054a`, which the deployment
record, the review documents and the shipped SACRE bundle all cite. **Adding a DOI to a frozen
record is a re-release, not a metadata edit.**

`docs/citation-locators.json` therefore sits beside the corpus, keyed by the exact citation string,
and is merged for display. Frozen records are untouched and the corpus hash does not move. At the
next genuine corpus release, fold the locators into the records and retire the sidecar.

If instead you want a **Featured v1.1** with locators in the records, that is a clean decision — it
just carries a new corpus hash, a new SACRE pin, and updates to the deployment and review documents.

## Done as worked examples

| citation | DOI | confidence |
|---|---|---|
| Broome, "Fairness" | `10.1093/aristotelian/91.1.87` | confirmed |
| Yui et al., Japanese 14-day survey | `10.1016/j.stemcr.2023.02.005` | confirmed |
| IVF/ICSI focus groups (n = 22) | `10.1016/j.reth.2024.09.005` | probable |
| AAN/AAP/CNS/SCCM guideline | `10.1212/wnl.0000000000208108` | confirmed |

F08 is the fully worked family: both public candidates now resolve to named, verified papers.

## Three citation-text errors to fix, independent of locators

These are in the records themselves and are the author's to correct:

- **Broome, "Fairness"** — published as vol. 91, pp. 87–**102**, issued **1991**; the record says
  87–101, 1990.
- **Yui et al.** — the published title is *"Survey of Japanese researchers and the public regarding
  the culture of human embryos in vitro beyond 14 days"*. The record gives a different title, so a
  reader searching it will not find the paper. This is the most consequential of the three.
- **AAN/AAP/CNS/SCCM guideline** — Crossref issues it in *Neurology* **2024**; the corpus and the
  ledger both say 2023, probably the online-first date.

## Did not resolve

The **F11** UK public triage survey (n = 763) did not come back from Crossref across several
bibliographic queries. Left without a locator rather than matched to a plausible neighbour. The
ledger describes it well enough that the author may recognise it directly.

## Suggested order

Work the families where the ledger is most specific first — **F04, F05, F06, F08, F10, F13** all
name datable works — then the ones whose public layer is described only as a literature. Books
(42 citations: Mill, Dworkin, Beauchamp & Childress and others) are lowest value: they have no DOI,
and a publisher URL adds little a reader cannot find.

---

## Inventory — every locator-less citation, by family

`class-level` means the citation describes a literature; `specific` means it names a single work
(author, year or quoted title present) and so should have a locator.


### f01-elective-surgery-transfusion-refusal

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | other | class-level | Affected-community materials on refusal of allogeneic blood and acceptance of individually specified blood-conservation alternatives, published by Jehovah’s Witnesses hos… |
| `pub2` | other | class-level | Affected-community materials on refusal of allogeneic blood and acceptance of individually specified blood-conservation alternatives, published by Jehovah’s Witnesses hos… |
| `pub2` | article | class-level | Patient-blood-management and bloodless-medicine programme literature and affected-community hospital-liaison materials, describing referral of patients who refuse allogen… |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f02-advance-directive-dementia-contentment

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | article | class-level | Empirical advance-care-planning research with people living with dementia, their caregivers and clinicians, including studies of clinician responses when a prior directiv… |
| `pub2` | article | class-level | Empirical advance-care-planning research with people living with dementia, their caregivers and clinicians, including studies of clinician responses when a prior directiv… |
| `exp1` | guideline | class-level | Clinical-ethics guidance on the interpretation and application of advance directives by surrogates, including structured best-interpretation review where a directive does… |
| `exp2` | guideline | class-level | Clinical-ethics guidance on the interpretation and application of advance directives by surrogates, including structured best-interpretation review where a directive does… |
| `fw1` | book | class-level | Ronald Dworkin, Life’s Dominion: An Argument About Abortion, Euthanasia, and Individual Freedom (Knopf, 1993). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f03-periviable-resuscitation-default

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Prospective parents’ perspectives on antenatal decision making for the anticipated birth of an extremely premature infant, and subsequent 2024–25 qualitative studies of p… |
| `pub2` | survey | class-level | Prospective parents’ perspectives on antenatal decision making for the anticipated birth of an extremely premature infant, and subsequent 2024–25 qualitative studies of p… |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |

### f04-brain-death-accommodation

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Surveys of affected religious and pastoral communities on accommodation after death by neurologic criteria: a multidenominational rabbi survey found 18% favored continued… |
| `pub2` | survey | class-level | Surveys of affected religious and pastoral communities on accommodation after death by neurologic criteria: a multidenominational rabbi survey found 18% favored continued… |
| `exp1` | guideline | class-level | Contemporary professional guidance (2025–26) on communication, family objections, pregnancy, reasonable accommodation and institutional dispute processes after death by n… |
| `exp2` | guideline | class-level | Contemporary professional guidance (2025–26) on communication, family objections, pregnancy, reasonable accommodation and institutional dispute processes after death by n… |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw1` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |
| `fw2` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |

### f05-medical-aid-in-dying-policy

| candidate | type | kind | citation |
|---|---|---|---|
| `pub2` | survey | class-level | Public-opinion and stakeholder research on opposition to legal assisted dying: a persistent minority (roughly a quarter to a third of respondents across US and European s… |
| `exp1` | article | class-level | Contemporary literature on medical aid in dying: statutory safeguards, capacity and voluntariness assessment, conscientious objection and non-abandonment, and the distinc… |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw1` | book | specific | John Stuart Mill, On Liberty (1859), harm principle, chapter 1. |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f06-placebo-control-effective-treatment

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Public consultation and trial-participant research on placebo-controlled trials: conditional acceptance where effective treatment exists, sensitivity to symptom severity … |
| `pub2` | survey | class-level | Public consultation and trial-participant research on placebo-controlled trials: conditional acceptance where effective treatment exists, sensitivity to symptom severity … |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f07-lower-resource-trial-standard-of-care

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Community consultation and stakeholder research on trial standard of care and research benefits in lower-resource settings, including consultations in Mwanza (Tanzania), … |
| `pub2` | survey | class-level | Community consultation and stakeholder research on trial standard of care and research benefits in lower-resource settings, including consultations in Mwanza (Tanzania), … |
| `fw1` | article | class-level | Scholarship on exploitation, responsiveness and fair benefits in international research, including the standard-of-care debate following multinational perinatal HIV trial… |
| `fw1` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |

### f08-fourteen-day-embryo-research-limit

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | specific | Yui H. et al., “Public attitudes in Japan toward the extension of human embryo culture beyond 14 days,” Stem Cell Reports 18, no. 8 (2023) — national survey, n = 3,000: 3… |
| `pub2` | survey | specific | Yui H. et al., “Public attitudes in Japan toward the extension of human embryo culture beyond 14 days,” Stem Cell Reports 18, no. 8 (2023) — national survey, n = 3,000: 3… |
| `pub2` | survey | specific | Focus-group study of IVF/ICSI patients (n = 22) on extending the 14-day limit for human embryo research (2024). |
| `fw1` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f09-heritable-genome-editing-serious-disease

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Systematic review and multinational public-attitude studies on human genome editing: consistently greater support for preventing serious disease than for enhancement, wit… |
| `pub2` | survey | class-level | Systematic review and multinational public-attitude studies on human genome editing: consistently greater support for preventing serious disease than for enhancement, wit… |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | article | class-level | Scholarship on intergenerational justice and obligations to future people in health and environmental policy. |

### f10-age-as-organ-allocation-criterion

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Public-preference research on organ-allocation criteria, including German focus groups and a discrete-choice experiment (n = 1,028) in which respondents applied several p… |
| `pub2` | survey | class-level | Public-preference research on organ-allocation criteria, including German focus groups and a discrete-choice experiment (n = 1,028) in which respondents applied several p… |
| `fw1` | book | class-level | Norman Daniels, Just Health: Meeting Health Needs Fairly (Cambridge University Press, 2008). |
| `fw2` | article | specific | John Broome, “Fairness,” Proceedings of the Aristotelian Society 91 (1990): 87–101. |
| `fw2` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |

### f11-ventilator-triage-catastrophic-scarcity

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | specific | Representative UK public survey on ventilator allocation (n = 763), BMJ Open (2020), reporting preferences responsive to survival probability, age, treatment duration and… |
| `pub2` | survey | specific | Representative UK public survey on ventilator allocation (n = 763), BMJ Open (2020), reporting preferences responsive to survival probability, age, treatment duration and… |
| `pub2` | article | class-level | Disability-rights critiques of crisis-standards-of-care triage protocols and empirical studies of disability-related bias in public and clinical allocation judgments. |
| `exp1` | guideline | class-level | Critical-care crisis-standards-of-care triage guidance on short-term prognosis criteria, repeated reassessment, exclusion of social-worth judgments and appeal processes. |
| `exp2` | guideline | class-level | Critical-care crisis-standards-of-care triage guidance on short-term prognosis criteria, repeated reassessment, exclusion of social-worth judgments and appeal processes. |
| `exp2` | article | class-level | Disability-rights critiques of crisis-standards-of-care triage protocols and empirical studies of disability-related bias in public and clinical allocation judgments. |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | article | specific | John Broome, “Fairness,” Proceedings of the Aristotelian Society 91 (1990): 87–101. |

### f12-mandatory-vaccination-serious-outbreak

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Representative German public surveys on vaccine mandates during a serious outbreak, showing a genuine split in which supporters emphasize insufficient voluntary uptake an… |
| `pub2` | survey | class-level | Representative German public surveys on vaccine mandates during a serious outbreak, showing a genuine split in which supporters emphasize insufficient voluntary uptake an… |
| `fw1` | book | specific | John Stuart Mill, On Liberty (1859), harm principle, chapter 1. |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f13-international-health-worker-recruitment

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Qualitative and stakeholder studies of international health-worker migration across several corridors (including Colombia, Indonesia, Jordan, the Philippines, and sub-Sah… |
| `pub2` | survey | class-level | Qualitative and stakeholder studies of international health-worker migration across several corridors (including Colombia, Indonesia, Jordan, the Philippines, and sub-Sah… |
| `fw1` | book | class-level | Martha C. Nussbaum, Creating Capabilities: The Human Development Approach (Harvard University Press, 2011). |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | class-level | Norman Daniels, Just Health: Meeting Health Needs Fairly (Cambridge University Press, 2008). |
| `fw2` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |

### f14-involuntary-psychiatric-treatment

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Representative Norwegian public survey (n = 2,001) on involuntary psychiatric intervention, reporting very high public support for intervention in specified severe-risk s… |
| `pub2` | article | class-level | Service-user and rights-based advocacy literature on psychiatric coercion, supported decision-making and noncoercive crisis alternatives. |
| `fw1` | book | class-level | Martha C. Nussbaum, Creating Capabilities: The Human Development Approach (Harvard University Press, 2011). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | specific | John Stuart Mill, On Liberty (1859), harm principle, chapter 1. |

### f15-qalys-disability-technology-allocation

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Public person-tradeoff research on life-saving treatment for people with pre-existing disability, including studies reporting equal priority for people with pre-existing … |
| `pub2` | survey | class-level | Public person-tradeoff research on life-saving treatment for people with pre-existing disability, including studies reporting equal priority for people with pre-existing … |
| `exp1` | statute | class-level | US Department of Health and Human Services, Section 1557 nondiscrimination rules addressing the use of value-assessment methods that discriminate on the basis of disabili… |
| `exp2` | statute | class-level | US Department of Health and Human Services, Section 1557 nondiscrimination rules addressing the use of value-assessment methods that discriminate on the basis of disabili… |
| `fw1` | book | class-level | Norman Daniels, Just Health: Meeting Health Needs Fairly (Cambridge University Press, 2008). |
| `fw2` | book | class-level | Martha C. Nussbaum, Creating Capabilities: The Human Development Approach (Harvard University Press, 2011). |

### f16-diagnostic-ai-subgroup-performance

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Patient and public studies of medical AI reporting persistent concerns about discrimination and bias, explainability, privacy, and retaining clinician responsibility, inc… |
| `pub2` | survey | class-level | Patient and public studies of medical AI reporting persistent concerns about discrimination and bias, explainability, privacy, and retaining clinician responsibility, inc… |
| `exp1` | article | class-level | Literature on subgroup validation, performance disparity and post-deployment monitoring for clinical machine-learning systems. |
| `exp2` | article | class-level | Literature on subgroup validation, performance disparity and post-deployment monitoring for clinical machine-learning systems. |
| `fw1` | book | class-level | John Rawls, A Theory of Justice, revised ed. (Harvard University Press, 1999). |
| `fw1` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |
| `fw2` | book | class-level | Norman Daniels, Just Health: Meeting Health Needs Fairly (Cambridge University Press, 2008). |

### f17-animal-research-replacement-harm-benefit

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | UK public attitudes to animal research: Ipsos MORI surveys for the Department for Business, Innovation and Skills / Office for Life Sciences (2014, 2018) — acceptance con… |
| `pub2` | survey | class-level | UK public attitudes to animal research: Ipsos MORI surveys for the Department for Business, Innovation and Skills / Office for Life Sciences (2014, 2018) — acceptance con… |
| `pub2` | policy-document | specific | UK cross-government strategy to accelerate the development and adoption of alternatives to animal testing (2025). |
| `exp2` | policy-document | specific | UK cross-government strategy to accelerate the development and adoption of alternatives to animal testing (2025). |
| `fw1` | book | class-level | Peter Singer, Animal Liberation Now (Harper Perennial, 2023). |
| `fw1` | book | class-level | Martha C. Nussbaum, Justice for Animals: Our Collective Responsibility (Simon & Schuster, 2023). |

### f18-antimicrobials-food-producing-animals

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | UK supermarket-panel survey of consumer attitudes to antibiotic use in farmed animals (n = 5,693), with a systematic review of 39 consumer studies reporting concern about… |
| `pub2` | survey | class-level | UK supermarket-panel survey of consumer attitudes to antibiotic use in farmed animals (n = 5,693), with a systematic review of 39 consumer studies reporting concern about… |
| `fw1` | book | class-level | Peter Singer, Animal Liberation Now (Harper Perennial, 2023). |
| `fw2` | book | class-level | Martha C. Nussbaum, Justice for Animals: Our Collective Responsibility (Simon & Schuster, 2023). |
| `fw2` | article | class-level | Scholarship on intergenerational justice and obligations to future people in health and environmental policy. |

### f19-health-system-decarbonization-tradeoffs

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | class-level | Patient survey across four US health systems (2025–26): very high support for clinicians helping make care sustainable, with substantially less willingness to accept rest… |
| `pub2` | survey | class-level | Patient survey across four US health systems (2025–26): very high support for clinicians helping make care sustainable, with substantially less willingness to accept rest… |
| `pub2` | survey | class-level | National physician survey on sustainability in clinical care (2025–26), reporting broad support for reducing health-care emissions. |
| `exp1` | article | class-level | Life-cycle assessment and low-carbon clinical-pathway evidence in health care, including inhaled and volatile anaesthetic agents, reusable versus single-use supplies and … |
| `exp2` | article | class-level | Life-cycle assessment and low-carbon clinical-pathway evidence in health care, including inhaled and volatile anaesthetic agents, reusable versus single-use supplies and … |
| `fw1` | article | class-level | Scholarship on intergenerational justice and obligations to future people in health and environmental policy. |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

### f20-neural-organoid-oversight

| candidate | type | kind | citation |
|---|---|---|---|
| `pub1` | survey | specific | Japanese public survey on neural-organoid research (2026), reporting broad support alongside concern about unanticipated risk and commercialization. |
| `pub1` | article | specific | Review of empirical stakeholder studies on human neural organoids (2026), finding that governance, consent, commercialization and transplantation concerns are often at le… |
| `pub2` | article | specific | Review of empirical stakeholder studies on human neural organoids (2026), finding that governance, consent, commercialization and transplantation concerns are often at le… |
| `pub2` | survey | specific | Japanese public survey on neural-organoid research (2026), reporting broad support alongside concern about unanticipated risk and commercialization. |
| `exp2` | article | specific | Review of empirical stakeholder studies on human neural organoids (2026), finding that governance, consent, commercialization and transplantation concerns are often at le… |
| `fw2` | book | class-level | Peter Singer, Animal Liberation Now (Harper Perennial, 2023). |
| `fw2` | book | class-level | Tom L. Beauchamp and James F. Childress, Principles of Biomedical Ethics, 8th ed. (Oxford University Press, 2019). |

**110 locator-less citations across 20 families; 93 are class-level.**
