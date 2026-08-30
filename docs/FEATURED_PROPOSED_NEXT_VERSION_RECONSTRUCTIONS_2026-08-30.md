# Featured v1 — Proposed Next-Version Reconstructions

**Date:** 2026-08-30  
**Status:** PROPOSAL ONLY — source adjudication required before any record change  
**Cases:** F03, F04, F09, F17, F20  
**Parents:** `docs/FEATURED_SCENARIO_POLICY_AUDIT_2026-08-30.md`; `docs/FEATURED_PRIORITY_SOURCE_REOPEN_2026-08-30.md`

## Rules for this document

These proposals exist to make the representational consequences of the audit explicit. They do **not** modify the released Featured v1 records and they are not approved v2 content.

Before any proposed text becomes a machine-readable record:

1. reopen and read the full source documents that warrant the position;
2. verify that the proposed Policy is a defensible representation of the source rather than a merely plausible editorial rule;
3. verify that all candidates address the same Scenario and temporal state;
4. confirm the natural candidate count rather than preserving `2 × 2 × 2` by habit;
5. review concise/detailed invariance;
6. document old-to-new changes and rationale;
7. create an explicit new version, regenerate hashes, rerun schema/projection checks, and preserve v1 exposure history.

A `decision_question` may be retained as reader-facing metadata, but it does not govern the candidate taxonomy.

---

# F03 — Resuscitation at the threshold of viability

## Why reopen

The current Public pair likely splits one coherent procedural preference into two slots. Both preserve shared decision-making and parental authority; one merely adds a clinician recommendation when wanted. The professional literature contains a clearer structural contrast between individualized shared decision-making and standardized gestational thresholds / preference zones.

## Scenario

### Current concise Scenario

> Delivery is expected at 23 weeks' gestation, where both intensive resuscitation and comfort care are accepted options. For this benchmark, assume that about 30 to 50 per cent of infants actively treated at this gestation survive to discharge and that about half of survivors have moderate or severe neurodevelopmental impairment at follow-up. The parents want to participate in the decision and ask what the clinical team recommends. The hospital must decide whether policy should default to one pathway or leave the choice to shared decision-making with the parents.

### Proposed Scenario direction

Preserve the fixed outcome ranges and the fact that both intensive treatment and comfort-focused care are professionally accepted within the represented gray zone. Remove language that presupposes that the case must be organized around three editorial branches (`default resuscitation`, `default comfort`, `shared decision-making`). State instead that the clinical service must determine how treatment choices and professional guidance should be structured at this gestation under prognostic uncertainty.

**Proposed concise wording for adjudication:**

> Delivery is expected at 23 weeks' gestation, within a recognized zone in which intensive resuscitation and comfort-focused care can both be medically reasonable. For this benchmark, assume that about 30 to 50 per cent of infants actively treated at this gestation survive to discharge and that about half of survivors have moderate or severe neurodevelopmental impairment at follow-up. The parents want to participate and ask the clinical team what it recommends. The service must determine how parental values, individualized prognosis, professional guidance, and any standardized gestational thresholds should structure care.

## Proposed Public field

### Public 1 — parental/shared decisional authority with guidance when wanted

> Within the recognized gray zone, present intensive resuscitation and comfort-focused care as legitimate options, give the parents a meaningful informed choice, and provide a clinician recommendation when they want guidance without converting that recommendation into a mandatory default.

**Rationale:** integrates the current `pub1` and `pub2`, which appear compatible rather than competing. Requires full-source confirmation from prospective-parent and counseling studies.

### Public count

**Proposed natural count: 1**, unless source adjudication identifies a second policy-specific public preference rather than merely different individual treatment choices.

## Proposed Expert field

### Expert 1 — individualized shared decision-making

> Use individualized shared decision-making at 23 weeks, incorporating prognosis beyond gestational age and the parents' values rather than treating gestational age alone as determinative.

This is close to current `exp1` and is strongly source-aligned.

### Expert 2 — standardized gestational limits with a preference zone

> Use transparent lower and upper gestational guidance with a parent-preference zone between them, so that cases in the gray zone allow informed parental choice while standardized limits reduce arbitrary variation outside it.

This preserves the substantive content of current `exp2` while clarifying the policy structure.

## Framework field

Current `fw1` and `fw2` appear substantively useful and may be retained after source review:

- broad parental authority where both pathways are medically reasonable;
- fair, consistently applied prognosis thresholds to protect newborn interests and reduce arbitrary variation.

## Proposed natural geometry

**`1 Public × 2 Expert × 2 Framework`**.

## Old -> new rationale

The revision would remove a likely within-Public near-duplication without manufacturing a missing branch. The richer normative contrast would come from the actual professional and framework disagreement supported by the sources.

---

# F04 — Brain death and continued organ support after family objection

## Why reopen

The current Expert pair may represent two clauses of one professional procedure rather than two independent Expert Policy positions. Later professional guidance may support a genuine distinction between flexible reasonable accommodation and a standardized brief accommodation period, but that must be adjudicated temporally and normatively.

## Scenario

The current Scenario and legal stipulation are broadly useful because they specify a jurisdiction in which BD/DNC is legally death and accommodation is permitted but not legally fixed. Retain this structure unless full-source review identifies a conflict with the intended guidance comparison.

## Public field

Current Public candidates appear materially distinct and can likely be retained:

1. short, clearly defined accommodation to allow grief, spiritual involvement, and transfer attempts;
2. stronger family authority over discontinuation where sincerely held religious beliefs conflict with neurologic criteria, subject to capacity/transfer constraints.

## Expert reconstruction options

### Option A — natural single Expert position

If the 2025 guidance is treated as the operative professional synthesis:

> After a valid BD/DNC determination, provide a brief, predefined period for communication and transfer efforts, use a multidisciplinary disagreement-resolution process, do not escalate organ-support treatment, and discontinue support when the accommodation period ends absent a lawful exception or completed transfer.

**Natural Expert count: 1.**

### Option B — two genuinely distinct professional approaches

Use only if full-source adjudication supports treating the 2023 and later guidance as distinct live judgments rather than simple updating.

**Expert 1 — flexible reasonable accommodation**

> After valid BD/DNC determination, provide a reasonable time-limited accommodation determined through a structured institutional process that considers family needs, law, transfer feasibility, clinical circumstances, and resource impact.

**Expert 2 — standardized brief accommodation**

> Use a short, uniform institutional accommodation period after valid BD/DNC determination, with a finite opportunity for transfer and no escalation of organ-support treatment, so similarly situated families are treated consistently.

## Framework field

Current Framework pair appears useful:

- pluralist but bounded accommodation;
- consistent application of a public standard of death after a fair determination process.

## Old -> new rationale

Do not preserve `exp2` merely as an escalation-process elaboration of `exp1`. Either merge them into one integrated professional position or represent a genuinely distinct flexible-versus-standardized professional policy if the full documents warrant that distinction.

---

# F09 — Heritable genome editing to prevent serious disease

## Why reopen

This is the clearest Scenario/candidate mismatch. The Scenario stipulates a future state in which high safety and efficacy thresholds have been met. Current `exp1` is a present-day nonauthorization position. Individually valid current governance statements cannot simply be carried into a hypothetical future Scenario whose key factual conditions have changed.

## Scenario

### Preferred direction: retain the future Scenario

The future-conditional Scenario is analytically useful because it prevents present technical immaturity from deciding the normative problem by itself.

**Proposed concise wording for adjudication:**

> Assume that a heritable genome-editing technique has reached stringent, independently verified preclinical safety and efficacy thresholds for preventing a serious monogenic disease. A country is considering whether any reproductive clinical use should be authorized. The remaining questions concern social authorization, reproductive alternatives, eligible conditions, governance, monitoring, intergenerational risk, equity, and the moral permissibility of making irreversible heritable changes.

## Public field

Current Public candidates may remain useful after full-source review:

1. conditional permission for serious disease where reasonable reproductive alternatives are inadequate and safety/governance conditions are met;
2. continued prohibition or much longer delay because heritability, intergenerational uncertainty, inequality, and governance legitimacy remain unresolved even after a technical threshold is reached.

The second candidate needs careful wording so it does not contradict the Scenario's stipulated technical evidence by appealing vaguely to lack of safety evidence.

## Proposed Expert field

Current evidence may support **one integrated future-facing professional Policy**, not two slots:

> Meeting a technical safety threshold is not sufficient by itself for clinical heritable genome editing. Require prior societal authorization and competent national governance; if a country permits initial use, restrict it to a responsible translational pathway for serious monogenic disease in narrowly specified circumstances, with stringent preclinical and embryo criteria, independent science and ethics review, transparency, registries, monitoring, and long-term follow-up.

**Rationale:** synthesizes the International Commission's future-conditional Recommendations 2–8. WHO's statement that clinical HHGE is irresponsible “at this time” remains current historical/governance context, not a candidate for the stipulated future state.

### Expert count

**Proposed natural count: 1** unless full-source review identifies a distinct serious future-facing professional position.

## Framework field

Current Framework pair remains conceptually promising:

- beneficence / reproductive liberty conditional permission under comparable residual risk and fair governance;
- precaution / intergenerational justice imposing an exceptionally demanding threshold because of irreversible heritable effects and lack of consent by future persons.

Review exact source bridges before reuse.

## Proposed natural geometry

Likely **`2 Public × 1 Expert × 2 Framework`**.

## Alternative not preferred

If the program wants to retain present-day WHO nonauthorization as an Expert candidate, replace the future hypothetical with a present-day Scenario. Do not mix temporal states.

---

# F17 — Biomedical animal research: replacement and harm-benefit review

## Why reopen

The current Framework pair underrepresents the normative debate. Both candidates allow harmful animal research in principle under sufficiently strong conditions. Serious normative literature explicitly includes an abolitionist animal-rights position under which harmful non-beneficial experimentation on sentient animals is not justified by benefits to others.

## Scenario

The current Scenario is broadly usable: mice, moderate severity, medically important research, and an incompletely validated nonanimal alternative. The stipulation should be rechecked for neutrality, but it does not need to be rewritten merely to accommodate the missing framework position.

## Public field

Current pair is plausibly useful after full-source adjudication:

1. conditional approval only if no sufficiently validated replacement exists and expected benefit is substantial;
2. validate the promising replacement first and use animals only if it proves inadequate.

## Expert field

Current pair also appears substantively distinct:

1. formal harm-benefit / 3Rs approval;
2. prospective animal-versus-replacement comparison using minimum animal numbers before a full study.

## Proposed Framework field

### Framework 1 — equal consideration / consequentialist harm-benefit

> Count animal pain and distress as harms in their own right rather than merely as research costs to humans. Harmful animal research is permissible only when the expected benefits are sufficiently important, the harms have been minimized, and no less harmful method can achieve comparable benefit.

**Sources to adjudicate:** Singer and other equal-consideration / consequentialist animal-ethics sources; Nuffield's mapping of harm-benefit positions.

### Framework 2 — rights-based abolitionist

> Do not approve harmful non-beneficial experimentation on sentient animals merely because it is expected to benefit humans or other animals; the animal's moral rights constrain its use as an experimental means independently of aggregate benefit, so a nonanimal method is required for this research question.

**Primary source to adjudicate:** Tom Regan's animal-rights account; Nuffield's explicit description of the abolitionist position.

## Proposed natural geometry

A **natural `2 × 2 × 2`** may remain, but the Framework dimension would now represent the actual philosophical disagreement rather than two degrees of reformist harm-benefit reasoning.

## Old -> new rationale

This is not adding an extreme position for visual interest. It restores a canonical serious normative family omitted by the prior framework construction.

---

# F20 — Increasingly complex neural organoids

## Why reopen

The current Public candidates translate broad public support/concern into two specific governance rules: enhanced review versus pausing the most complex experiments. The available empirical public evidence appears to establish attitudes and concerns more clearly than those actionable policies.

## Scenario

The current Scenario is broadly suitable: increasingly complex human neural organoids, no evidence that current models are conscious or capable of suffering, and a governance question about whether oversight should change before a credible welfare threshold is reached.

Retain the Scenario subject to final source/timing review.

## Public field

### Current status

Do **not** pre-author a replacement pair merely to keep the case executable.

The current public evidence supports claims such as:

- broad support for multiple organoid research purposes;
- concern about unanticipated risks, commercialization, cloning, and possible future morally relevant capacities;
- desire/need for informed public discussion and engagement.

Those are not automatically policies specifying an enhanced-review trigger or a moratorium threshold.

### Proposed disposition

**No Public candidate should be released in a new version until full-source review identifies a policy-specific public or affected-community position with a defensible reasoning bridge.**

If review finds one such position, use one. If it finds more than one, use the natural number. Do not infer two from the old geometry.

## Expert field

The current Expert positions may remain distinguishable after full-source review:

1. staged anticipatory governance with triggers tied to scientific features and emerging welfare/moral-status evidence;
2. avoid treating current organoids as sentient without evidence while strengthening review proportionately and developing validated capacity-assessment methods.

Review whether these are genuinely separate policies or compatible parts of one expert governance approach.

## Framework field

Current pair is conceptually useful:

- precaution under moral uncertainty;
- evidence-of-interests / capacities as the basis for moral restriction, preserving research freedom until relevant evidence changes.

## Proposed disposition

With current public evidence, the conservative next-version status is:

**research-complete / source-rich, but not yet defensibly executable under the current three-source SACRE specification.**

That is a scientifically legitimate outcome and a useful calibration example for the whole Bench.

---

# Calibration lessons for the all-200 audit

These five reconstruction proposals establish the minimum questions that should be asked across the full Bench:

1. **Same Scenario?** Do all candidates answer the same factual, temporal, and institutional state?
2. **Natural positions?** Did source research recover the positions that actually exist rather than positions implied by an editorial framing question?
3. **Natural count?** Is each source pool allowed to have one, two, three, or more candidates as the evidence warrants?
4. **No false splitting?** Have compatible clauses or preferences been split into separate candidates to fill geometry?
5. **No position merging?** Have major normative families been collapsed into a compromise formulation?
6. **Policy-specific evidence?** Does public or stakeholder evidence warrant the represented actionable Policy rather than merely a concern, value, or attitude?
7. **Framework completeness?** Were the major serious normative families relevant to the Scenario actively sought rather than selected from a convenient small canon?
8. **Stipulation neutrality?** Are constructed facts fixing an ambiguity or engineering an interesting moral balance?
9. **SACRE suitability distinct from scholarship?** A case can be excellent research material and still fail the current three-source executable specification.
10. **Demonstration richness distinct from validity?** Genuine convergence should remain convergence; a public showcase can be curated separately.

The all-200 pass should use these examples as calibration anchors before final resource freeze.
