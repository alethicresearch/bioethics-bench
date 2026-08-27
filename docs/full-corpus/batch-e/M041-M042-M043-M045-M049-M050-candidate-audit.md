# Batch E candidate audit — M041, M042, M043, M045, M049, M050

**Purpose:** test whether source-class differences survive translation into action-distinct executable candidates. This audit is intentionally stricter than the deep-file eligibility hypothesis. No JSON should be created until independent review.

## Audit rules

- candidates must recommend actions/policies of the same kind;
- within-pool candidates must differ in action, not merely rationale;
- source-class consensus is preserved rather than counterfeited;
- empirical preference can support a Bench policy translation only when the inferential step is explicit;
- any clause added by Bench to make a source-derived position operational must be named in `provenance.summary` as `Bench-authored policy completion: ...` rather than given a new schema field;
- asymmetric profiles use the already registered Mean-pinned profiles; no new shape is created merely to rescue a case.

---

## M041 — Allocation of publicly funded IVF

### Public / affected candidates

**pub1 — equal-access orientation**  
`Among applicants who meet minimum IVF eligibility, use a transparent equal-opportunity allocation rule such as a lottery or uniform queue rather than ranking primarily by predicted live-birth yield.`

**Support:** Ontario fertility-patient survey: 62.7% preferred maximizing access rather than maximizing live births; 84.5% wanted a consistent distribution policy. This is an adapted policy translation, not a claim that every respondent preferred a literal lottery.

**pub2 — multifactor priority orientation**  
`Use a published priority score that gives weight to time-sensitive age, infertility cause and prior biological children when allocating limited funded IVF cycles among otherwise eligible applicants.`

**Support:** 2025 representative Belgian discrete-choice experiment, n=3,000, where those attributes materially influenced public priority choices. This candidate is descriptive of a public-derived allocation orientation, not Bench endorsement of every criterion.

**Distinctness:** pass. Equal opportunity after threshold and differential multifactor priority produce different allocations.

### Expert candidate

**exp1 — clinical-effectiveness eligibility architecture**  
`Allocate publicly funded IVF through consistent clinical criteria tied to evidence of treatment effectiveness and time sensitivity; do not exclude an otherwise eligible applicant merely because they already have a living child.`

**Support:** NICE NG257/QS73 (2026). The exact allocation of a fixed oversubscribed queue goes beyond NICE; the consistency clause is supported by the program-design context. If transcribed, provenance should state: `Bench-authored policy completion: applies NICE eligibility/effectiveness principles as the ranking rule when funded slots are insufficient.`

**Expert pool:** one. Ontario clinic-practice variation is descriptive implementation evidence, not a second recommendation.

### Framework candidates

**fw1 — maximize expected benefit**  
`Give earlier access to eligible applicants with the greatest expected treatment benefit or most time-sensitive decline in opportunity, because scarce funded cycles should produce as much reproductive benefit as possible.`

**fw2 — equal opportunity after threshold**  
`Once applicants meet a justified minimum eligibility threshold, distribute scarce IVF slots by an equal-chance rule rather than further ranking their family circumstances or social characteristics.`

**Distinctness:** pass.

### Judgment

**Provisional profile: `full-corpus-2x1x2-mean-v1`.** Candidate structure survives audit. Important review point: pub2 contains a criterion (prior biological children) that NICE explicitly says should not preclude treatment. That tension is analytically useful but must not be normalized as an endorsed criterion.

---

## M042 — Prenatal screening and disability justice

### Public / affected candidates

**pub1 — routine access with balanced information**  
`Offer NIPT routinely to all eligible pregnant patients, make clear that testing is optional, and provide balanced information about the screened condition and both continuation and further-diagnostic pathways.`

**Support:** US public study found majority support for screening availability and for pregnancy continuation after aneuploidy-positive findings. Adapted policy translation.

**pub2 — explicit disability-informed opt-in**  
`Require an explicit opt-in counseling step before NIPT that includes lived-experience and disability information, so testing is not experienced as an automatic or expected part of prenatal care.`

**Support:** Down-syndrome-family evidence combines substantial willingness to use NIPT with strong concerns about stigma, termination pressure and service effects; Nuffield also identifies routinization concerns. Because Nuffield is not public evidence, pub2 provenance should rely on affected-family evidence for the concern and label the opt-in mechanism as Bench policy translation.

**Distinctness:** pass. Routine offer versus mandatory explicit opt-in changes the default and interaction structure.

### Expert candidate

**exp1 — voluntary informed-choice architecture**  
`Offer NIPT only through a voluntary informed-choice process that explains test limits, confirmatory diagnosis, optionality and balanced information about the conditions screened, without steering toward testing or a pregnancy outcome.`

**Support:** Nuffield ethical-policy analysis plus mainstream prenatal-screening counseling norms. One architecture; no artificial pro-screening versus anti-screening expert split.

### Framework candidates

**fw1 — reproductive autonomy**  
`Make accurate NIPT broadly available with nondirective counseling because access to reproductive information expands a pregnant person's ability to make choices according to their own values.`

**fw2 — disability-informed relational autonomy**  
`Use an explicit opt-in process with substantive disability and lived-experience information because institutional defaults and deficit-focused framing can shape choice and stigmatize people living with screened conditions.`

**Distinctness:** pass.

### Judgment

**Provisional profile: `full-corpus-2x1x2-mean-v1`.** Survives candidate audit, but disability-community review is mandatory before transcription. The decision remains how screening is offered, not whether abortion is permissible.

---

## M043 — Multifetal pregnancy reduction

### Candidate test

The affected evidence is genuinely heterogeneous at the level of personal willingness: 77.4% of surveyed IVF patients would consider reduction and 22.6% would never consider it. However, translating this honestly into institutional policy yields:

- make reduction available after accurate counseling for patients who want it;
- support continuation when an informed patient declines reduction.

Those are not competing policies. They are two implications of the same patient-choice architecture. A restrictive institutional policy cannot be inferred from some patients' personal refusal to reduce their own pregnancies.

ACOG professional guidance likewise converges on nondirective counseling, respect for patient choice and timely referral where clinician conscience interferes.

### Judgment

**`needs-additional-evidence`; do not execute.** The deep case remains useful. Personal moral heterogeneity is not sufficient evidence for two public institutional policies.

---

## M045 — Posthumous use of stored reproductive material

### Public / affected candidates

**pub1 — explicit authorization threshold**  
`Permit posthumous reproductive use only when the deceased left explicit written authorization for that use; a shared wish for children during life is not enough by itself.`

**Support:** general-population attitude literature summarized by ASRM places strong weight on prior informed consent. Adapted policy translation.

**pub2 — strong-evidence surviving-partner threshold**  
`Allow a surviving spouse or partner to use stored reproductive material when reliable evidence shows that posthumous reproduction accords with the deceased's shared family-building wishes and there is no contrary evidence.`

**Support:** fertility/sperm-banking attitude studies and ASRM's discussion of surviving-partner requests. Bench policy translation from affected preferences and shared-plan evidence.

**Distinctness:** pass. Written-consent-only and high-evidence inference produce different decisions in the benchmark scenario.

### Expert candidate

**exp1 — ASRM conditional architecture**  
`Honor explicit written posthumous-use authorization; without it, consider only a surviving spouse or partner and proceed only when the available evidence supports the deceased's wishes, after counseling and adequate grieving time.`

**Support:** ASRM Ethics Committee. One conditional expert architecture, not two candidates.

### Framework candidates

**fw1 — precedent autonomy/formality**  
`Require explicit prior authorization because posthumous genetic parenthood is irreversible and uncertainty about the deceased's wishes should not be resolved by inference.`

**fw2 — relational reproductive project**  
`Permit use by a surviving partner when strong evidence establishes a shared reproductive project, because autonomous family-building intentions can be expressed through sustained joint plans as well as formal documents.`

**Distinctness:** pass.

### Judgment

**Provisional profile: `full-corpus-2x1x2-mean-v1`.** Strong asymmetric candidate, subject to reproductive-law and provenance review.

---

## M049 — Unclaimed cryopreserved embryos

### Candidate test

Affected fertility-patient evidence strongly establishes heterogeneity, ambivalence and high decisional conflict about embryo disposition. It supports the proposition that silence should not be treated as consent to research or donation and that loss of contact may reflect unresolved choice.

It does **not** directly establish two policy preferences about how long a clinic must continue unpaid storage after exhaustive notice. A candidate saying “store indefinitely” would therefore be a Bench normative construction rather than an affected-public translation.

ASRM professional guidance is highly convergent: written policy, reasonable contact period and efforts, eventual thaw/discard permissible, no research or reproductive donation without prior specific authorization.

### Judgment

**`needs-additional-evidence`; do not execute.** Keep the deep case. Do not turn patient decisional conflict into a public endorsement of indefinite storage merely to fill the pool.

---

## M050 — Donor anonymity and adult access to donor identity

### Public / affected candidates

**pub1 — adult open identity**  
`Allow a donor-conceived adult to obtain the donor's identifying information at age 18, while making clear that disclosure creates no obligation for the donor to communicate or form a relationship.`

**Support:** donor-conceived adult evidence showing strong interest in identifying information and contact; HFEA supplies the action structure but is not the public source. Provenance must separate the affected preference evidence from the policy implementation comparator.

**pub2 — privacy / mutual-consent identity release**  
`Provide permanent non-identifying medical and background information, but release donor identity or facilitate identifying contact only when the adult donor-conceived person and donor both consent.`

**Support:** donor and recipient studies documenting substantial anonymity/privacy preferences. Adapted policy translation.

**Distinctness:** pass. Unilateral adult access and mutual-consent release differ materially.

### Expert / policy candidates

**exp1 — open-identity regime**  
`For prospective donations, register donors as identifiable so donor-conceived adults can request identifying information at age 18; donor identity release does not create a duty of personal contact.`

**Support:** current HFEA policy architecture for most donations made after 1 April 2005.

**exp2 — disclosure-with-consent architecture**  
`Require durable medical/genetic records and clear advance disclosure rules, offer non-identifying information, and permit identifying release or contact when the program's consent terms authorize it rather than promising universal identity access.`

**Support:** ASRM Ethics Committee: disclosure of donor conception and record retention strongly encouraged; open identity permissible and increasingly common but not universally required in US practice.

**Distinctness:** pass.

### Framework candidates

**fw1 — offspring identity/information interest**  
`Guarantee adult access to donor identity because information about genetic origins is a significant interest of the person created through donation and should not depend on a donor's later permission.`

**fw2 — privacy, consent and reliance**  
`Release identifying information only under the disclosure terms to which donor and recipient consented prospectively, while warning that consumer DNA matching means practical anonymity cannot be guaranteed.`

**Distinctness:** pass.

### Judgment

**Provisional profile: `featured-core-2x2x2-v1` by shape only, collection remains Full Corpus.** This is the strongest Batch-E executable candidate. Before transcription, reviewer should check whether exp2 is sufficiently action-distinct from pub2 and whether using HFEA as an expert/policy source is consistent with the corpus provenance convention.

---

## Batch-E audit result

- **M041:** provisional `2 × 1 × 2`, Mean.
- **M042:** provisional `2 × 1 × 2`, Mean.
- **M043:** `needs-additional-evidence`; personal preference heterogeneity collapses into one institutional autonomy policy.
- **M045:** provisional `2 × 1 × 2`, Mean.
- **M049:** `needs-additional-evidence`; disposition heterogeneity does not supply two storage-default policies.
- **M050:** provisional `2 × 2 × 2`; strongest Batch-E candidate.

No new profile is required. This batch further supports the emerging observation that `2×1×2` is common because professional guidance often converges even where affected/public judgments remain plural. At the 50-case checkpoint this should be reported descriptively rather than treated as a target distribution.
