# Batch C candidate audit — M022, M025, M028, M030

**Evidence date:** 2026-08-27  
**Purpose:** test whether the four most promising M021–M030 cases support actionable, source-grounded candidate pools before any executable JSON is authored.

This audit is deliberately stricter than the deep-file eligibility hypothesis. A source class is not plural merely because people have different values. The translated candidates must be distinct policies of the same kind, and each must be supported at the relevant granularity.

## M022 — periviable resuscitation

### Audit result: do **not** transcribe yet

The deep file initially identified a possible `2 public × 1 expert × 2 framework` shape. Candidate-level translation reveals a collapse.

**Affected evidence actually supports:**

- some parents place greater weight on the possibility of survival/vitality;
- some place greater weight on avoiding suffering and invasive treatment;
- parents often need clearer explanation that comfort-focused care is active care;
- decisions are preference-sensitive and context dependent.

The clean institutional translation of both orientations is the same policy architecture:

> After balanced counseling, allow informed parents to choose between medically reasonable active resuscitation and comfort-focused care in the periviable gray zone, with reassessment at birth.

Trying to create `pub1 = resuscitate` and `pub2 = comfort care` would convert **individual treatment preferences** into competing institutional default policies that the studies did not test. Making them conditional (“resuscitate when parents prioritize survival” / “comfort when parents prioritize suffering reduction”) produces two halves of one shared-decision rule, not distinct candidates.

**Professional evidence:** ACOG likewise largely supports individualized/shared gray-zone decision-making. There is not a defensible second professional architecture in the current packet.

**Frameworks:** active-treatment presumption versus nonmaleficent/comfort presumption are genuinely distinct normative constructions, but frameworks alone cannot supply source-class plurality.

**Classification:** `needs-additional-evidence`. Keep the deep case. Do not register a `1×1×2` profile merely to force execution; the value of this case is not dependent on executable status.

---

## M025 — cochlear implantation for a Deaf child

### Audit result: provisional `2 public × 1 expert × 2 framework`

This case survives candidate-level scrutiny better because affected-parent evidence reflects different **care pathways**, not merely different abstract values.

### Public / affected candidates

**pub1 — parental Deaf-language pathway**

> Respect an informed parental decision to defer cochlear implantation when the child has immediate fluent sign-language access, while preserving audiologic follow-up and future reconsideration.

**Provenance:** adapted from Deaf-parent qualitative evidence (PMID 21941879) and parent value/preference literature (PMID 11006449; PMID 15236889). This is not a direct quotation or a claim that all Deaf parents prefer nonimplantation.

**pub2 — early auditory-opportunity pathway**

> Favor timely cochlear implantation for an eligible young child when the family prioritizes spoken-language and auditory opportunities, while maintaining sign-language and developmental support.

**Provenance:** adapted from parent studies showing substantial groups considered/chose implantation and prioritized spoken/mainstream or mixed communication outcomes (PMID 15236889; PMID 15148196). The sign-language safeguard prevents the candidate from falsely presenting implantation and sign access as exclusive.

These are distinct actionable pathways and can be represented without stereotyping identity groups.

### Expert candidate

**exp1 — family-centered candidacy/recommendation**

> Use an interdisciplinary, family-centered cochlear-implant evaluation that recommends timely implantation when clinically indicated but treats family goals, language access, developmental progress and rehabilitation capacity as part of the decision.

**Provenance:** adapted from the 2022 American Cochlear Implant Alliance Task Force pediatric candidacy guideline, endorsed by the American Academy of Audiology (PMID 35213891).

A second expert candidate should **not** be invented. Current professional guidance integrates early intervention and family-centered assessment within one architecture.

### Framework candidates

**fw1 — cultural-linguistic parental authority**

> Respect parental deferral of implantation when robust sign-language access protects the child's communication and development, because transmitting language and culture falls within broad parental discretion absent serious harm.

**fw2 — open future / opportunity preservation**

> Strongly favor timely implantation when it preserves auditory capacities that later delay may partly foreclose, while also guaranteeing sign-language access and later participation by the child.

### Profile

Use existing `full-corpus-2x1x2-mean-v1` if independent review approves. No new profile is needed. Mean is required by the registered asymmetric profile.

### Main risks before transcription

- pub2 must not be written as a hearing-parent stereotype;
- no candidate may equate Deaf identity with harm;
- concise/detailed scenarios must both include immediate high-quality sign-language access;
- exact age/timing claim should undergo audiology review.

---

## M028 — continued organ support after BD/DNC over family objection

### Audit result: provisional `2 public × 1 expert × 2 framework`

This case has unusually direct informed-public policy evidence.

### Public candidates

A nationwide US survey of 1,386 participants first provided a brief education about brain death; mean knowledge was 88%. **41.9%** agreed that a hospital should be required to continue treatment when a family rejects brain death, while the remainder did not agree with such a requirement. Only 24.4% would request further treatment for themselves and 27.3% for a family member, demonstrating that views about institutional accommodation are not identical to personal treatment preference (PMID 39810074).

**pub1 — required accommodation orientation**

> Require continued organ support when an informed family rejects brain death on conscience grounds, at least while continued support remains technically feasible and transfer or resolution is pursued.

**Provenance:** adapted from the 41.9% informed-public support for requiring hospitals to continue treatment after family rejection. The “while transfer or resolution is pursued” clause is a Bench policy translation and must be labeled as such; the survey did not specify duration.

**pub2 — no mandatory continuation orientation**

> Do not require hospitals to continue organ support indefinitely after a valid brain-death determination; provide family support and a reasonable transition period before discontinuation.

**Provenance:** adapted from the majority who did not endorse a requirement of continued treatment, combined with the decision context presented in the study. The reasonable-period language aligns with professional policy and should be transparent as a Bench translation rather than direct public wording.

The two public positions are genuinely policy-level because the survey explicitly asked whether hospitals should be **required** to continue treatment.

### Expert candidate

**exp1 — limited accommodation after death**

> After a valid BD/DNC determination, provide a reasonable but limited period of continued organ support and a defined process for family disagreement, then discontinue support unless another authorized pathway applies.

**Provenance:** 2023 AAN/AAP/CNS/SCCM guideline Recommendation 37 and 2025 AAN objection/communication guidance.

A second expert candidate should not be invented from older institutional variation; the current recognized medical standard is substantially convergent.

### Framework candidates

**fw1 — pluralism / conscience accommodation**

> Provide substantial accommodation for sincere moral or religious rejection of neurologic criteria because coercive discontinuation can impose profound moral injury when continued support is feasible.

**fw2 — public standard / distributive justice**

> Limit accommodation after a valid death determination because clinicians should not be required to provide indefinite organ support to a deceased person and intensive resources remain owed to living patients.

### Profile

Use existing `full-corpus-2x1x2-mean-v1` if independent review approves. No new profile.

### Main risks before transcription

- pub2 combines survey nonendorsement with a professional-style transition safeguard; provenance must clearly separate empirical orientation from Bench policy completion;
- do not imply all religious communities reject BD/DNC;
- both representations must make validity of the death determination non-negotiable within the scenario;
- no immediate scarcity case should be added merely to strengthen fw2.

---

## M030 — concurrent disease-directed treatment and hospice

### Audit result: clean provisional `2×2×2`

This is the strongest Batch-C executable candidate.

### Public / affected candidates

An experimental preference study of 198 adults imagining advanced lung cancer found four distinct choices: supportive care only 10%, hospice only 19%, chemotherapy only 29%, and **concurrent chemotherapy plus hospice 42%**, the most common choice (PMID 19571331). A separate study of 300 patients with active cancer and 171 family members found that requiring willingness to forgo cancer treatment did **not** identify those with greater perceived need for hospice services (PMID 19114698).

**pub1 — concurrent-access orientation**

> Allow hospice-level services without requiring patients to stop selected disease-directed cancer treatment, so patients can pursue symptom support and limited disease control together.

**Provenance:** adapted directly from preference evidence favoring chemotherapy+hospice and from evidence that willingness to stop treatment does not track hospice-service need.

**pub2 — comfort-focused hospice orientation**

> Preserve a distinct hospice pathway centered on comfort rather than ongoing cancer-directed treatment, while allowing patients who prefer continued treatment to remain in palliative or oncology care until they choose hospice.

**Provenance:** adapted from respondents preferring hospice/supportive-care pathways and from the real treatment-preference distribution. This is not presented as the majority public view.

These are distinct program policies, not merely different individual bedside orders.

### Expert / policy candidates

**exp1 — traditional hospice election**

> Use a hospice election model in which beneficiaries waive payer coverage for treatment of the terminal illness and related conditions, while hospice assumes responsibility for comfort-focused terminal care.

**Provenance:** current CMS Medicare hospice architecture. This is a direct policy-family translation, not an empirical claim that it is ethically superior.

**exp2 — concurrent hospice model**

> Permit hospice enrollment while selected disease-directed treatment continues, with coordination to prevent duplicate services and maintain goal-concordant care.

**Provenance:** Veterans Health Administration concurrent-care architecture plus VA implementation literature (PMID 26670795; 30467792; 32119800; 37846638).

These are two real institutional architectures and therefore unusually strong expert/policy candidates.

### Framework candidates

**fw1 — autonomy / nonabandonment**

> Permit concurrent hospice because patients should not have to surrender a valued, proportionate disease-directed treatment merely to receive symptom, caregiver and home-support services.

**fw2 — stewardship / bounded program identity**

> Maintain a distinct comfort-focused hospice benefit because finite hospice resources and coherent care planning justify a clear boundary from ongoing disease-directed treatment for the terminal illness.

A conditional/proportional framework could also be defended, but two framework candidates are sufficient and cleaner for v1.

### Profile

`featured-core-2x2x2-v1` is structurally compatible as a **shape**, but this record is Full Corpus and not Featured. As with M010, use of the symmetric registered shape does not make the record Featured. No asymmetric aggregation requirement applies.

### Main risks before transcription

- distinguish payer policy from individual patient choice;
- exp1 must be described accurately as a Medicare payment/election architecture, not a universal hospice definition;
- exp2 must not claim VA observational associations are causal;
- pub2 must not be inflated into a majority preference;
- candidate texts should use the same treatment scope (selected noncurative cancer-directed therapy) across pools.

---

## Batch-C candidate-audit result

- **M022:** `needs-additional-evidence`; initial asymmetric hypothesis rejected because honest public translations collapse into one shared-decision rule.
- **M025:** provisional `executable-other-profile`, `full-corpus-2x1x2-mean-v1`.
- **M028:** provisional `executable-other-profile`, `full-corpus-2x1x2-mean-v1`.
- **M030:** provisional `executable-2x2x2`.

No JSON should be created until the independent corpus reviewer audits source fidelity, candidate distinctness and companion-case facts. No new profile or infrastructure change is required by this batch.
