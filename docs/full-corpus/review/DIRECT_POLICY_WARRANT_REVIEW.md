# Direct-policy-evidence warrant review — the public pool

**Date:** 2026-08-29
**Branch:** `author/full-corpus-completion`
**Scope:** all 20 public-pool `direct-policy-evidence` candidates, across 14 families.
**Question:** does the cited source *state* the policy the candidate encodes, or does it record a
preference from which the policy would have to be inferred?
**Method:** every cited source read against the candidate text and its provenance summary. PMID
sources read from their PubMed abstracts; named policy documents read as cited.
**Performed by:** a model (Claude Opus 5), not a human reviewer. `reviewed_by_human` remains
`false` on every record.

---

## Why this class first

`SOURCE_TO_POLICY_FIDELITY_REVIEW.md` §6.2 named it: a `direct-policy-evidence` candidate asserts
that its source states the policy, so an error is a **false claim of grounding** rather than a weak
inference. The public pool is where that claim is hardest to earn, because public evidence usually
measures what people want for themselves rather than what institution should do. Only 40 of 138
public candidates claim this basis — 20 per family, counting each family once — and every one of
them is a place where the action-target alignment rule could have been quietly broken.

It was not broken. **All 20 hold.** Fourteen are unambiguous; six needed a repair to the citation
or the provenance summary, none to the basis or the candidate text.

## What "direct" turns out to mean here

The strongest cases share a feature worth naming, because it is the operational content of the
action-target alignment rule: **the survey asked about the policy, not about the respondent.**

- **M028** (`pub1`, `pub2`) — Ludka 2025 showed respondents a two-minute explanatory video, tested
  comprehension (mean score 88%), then asked whether *the hospital should be required* to continue
  treatment when a family rejects brain death. 41.9% agreed. That is a question about an
  institutional rule, and the survey separately asked what respondents would want *for themselves*
  (24.4%) — the two are different questions and the record cites the first. This is the corpus's
  cleanest instance of the distinction the rule exists to enforce.
- **M033** (`pub1`, `pub2`) — the Dutch item is "people with dementia should be eligible for
  euthanasia, even if they no longer understand what is happening (if they have previously asked
  for it)": 60% agreed. Kouwenhoven 2013 puts public agreement with advance-directive euthanasia in
  severe dementia at 77%. Both are eligibility-rule questions.
- **M075** (`pub1`, `pub2`) — Platt 2014 elicited preferences *over consent models*, 52% broad
  against 48% study-by-study. The target of the preference is the policy itself.
- **M056** (`pub1`, `pub2`) — the Japanese survey asked directly about the 14-day rule.
- **M123** (`pub1`) — Holm 2024 asked about surveillance targets and geographic scale, which are
  the two policy dimensions the candidate sets.
- **M129** (`pub1`) — the NCIL resolution, the NCD report and ACA §1182 are not attitude data at
  all. They are a formal organisational resolution, a federal advisory recommendation, and a
  statutory prohibition, each stating the policy in its own voice.
- **M106** (`pub1`) — Elalouf 2020 ranked allocation criteria; donor-registration status was ranked
  least significant by 43%. A ranking of allocation criteria is a statement about the allocation
  rule.

Against that, the four-basis taxonomy's asymmetry stops looking like bookkeeping. Public evidence
earns `direct-policy-evidence` when the instrument put a policy to the respondent, and that is
uncommon — which is why 98 of 138 public candidates carry a declared inference bridge instead.

## Six repairs

None changed a basis, a candidate's action, or a geometry.

| Where | Problem | Repair |
|---|---|---|
| **M056** `pub1` | The summary said the survey showed "direct opposition" to culture beyond 14 days. It shows 37.9% of the public *agreeing* with extension; the balance is split between disagreement and an explicit "cannot judge" option that the abstract does not break out. "Opposition" was a reading, not a finding. | Summary now states the 37.9% figure, notes the unseparated "cannot judge" band, and says explicitly that the candidate represents the position retaining the boundary rather than a claim about majority opposition. |
| **M139** `pub1` | The summary attributed to Cascini et al. a direct comparison of "opt-out or passive-consent approaches with affirmative consent." Cascini is a systematic review of health-data sharing *attitudes*; its abstract does not establish that comparison. The real direct warrant is the NHS England engagement, which addresses opt-out retention as a policy question. | Summary now names the NHS engagement as the direct warrant and describes Cascini as what it is. |
| **M080** `pub1` | Cited as though a study of general design; it is ten focus groups with 93 participants. For a `direct-policy-evidence` claim the method belongs in the citation. | Full title and method restored: "qualitative results from the EPIC study… ten focus groups, 93 current and recent US trial participants." |
| **M123** `pub1` | Short-form citation naming neither author nor title. | Full citation with the figures the candidate rests on (91% for diseases and toxins, 35% for lifestyle behaviours, majority support for citywide over smaller-area scales). |
| **M033** `pub2` | Citation misnamed the journal article ("health professionals" for "health care professionals") and omitted the figure. | Full citation, with the 77% public agreement figure. |
| **M144** `pub1`, `pub2` | Three sources cited by title and journal with no identifier, so the verifier skipped them. | All three identified and given PMIDs: Khullar 2022 (PMID 35507346), the 2024 notification survey (PMID 39661391), and the cardiovascular-AI qualitative study (PMID 40258073). |

The citation gate moved from 107 to **110 resolvable PMIDs, all consistent**, purely from this
tranche.

## The one limit worth stating

**M144's specific claims are not verifiable at abstract level.** All three of its sources are real,
correctly identified, and squarely on topic — but two are JAMA Network Open research letters whose
PubMed records carry a one-line plain-language summary rather than a structured abstract, and the
third is a qualitative study whose abstract describes "information needs" without stating the
critical-versus-routine materiality threshold that `pub2` builds on. The claims may well be in the
full texts. They were not confirmed here, and no other candidate in this tranche has that gap.

That is the honest boundary of an abstract-level review, and it is narrower than it was: for the
other 18 candidates, the abstract carried the finding the record attributes to it.

## The expert pool: traceability swept, and what `as_of_date` is actually for

The same traceability question was put to the **49 expert `direct-policy-evidence` candidates**
(counting each family once). Every one cites a named issuing body and a named document, usually to
a section number: AMA *Code of Medical Ethics* Opinion 2.1.2, NICE PMG36, ISSCR Recommendation
2.2.2.1, 45 C.F.R. § 92.201, HFEA, ACS, CIOMS. **None is circular and none is unattributable.**

Seventeen of those sources carry no publication year — they say "current guidance," or name a
standing opinion that the issuing body revises in place. That is the honest way to cite a living
document, and it is also a claim that decays: a candidate grounded in "current ACS guidance"
becomes false the day ACS revises, silently.

What stops that from being a defect is a field that has been sitting in every record without its
purpose being stated: **`as_of_date`.** All 34 families carry one — 31 at 2026-08-27, three at
2026-08-28. It is what converts "current guidance" from an unfalsifiable claim into a dated,
checkable one: the record asserts what the body's guidance said on a stated day, and a reader
who finds otherwise has found an error rather than an ambiguity.

That relationship is now enforced. `scripts/fidelity-audit.mjs` fails if any candidate cites
standing guidance as current while its record lacks an `as_of_date` to anchor it. The count is
zero, and it cannot silently stop being zero.

**M189 is where this will bite first.** Its expert pool is USPSTF 2024 against current ACS
guidance, and the family exists *because* those two bodies disagree. If either revises toward the
other, M189 stops being a guideline-disagreement case — and the corpus will need to notice, not
discover it in a paper.

## What this review does not establish

It checks that a source states the policy. It does not check the 98 public
`source-informed-policy-inference` candidates, whose bridges were verified as *stated* in an
earlier pass but not as *sound*. For the expert pool it establishes traceability and temporal
anchoring, not that each guidance document says what is attributed to it — that requires reading
49 professional documents against 49 candidates, and is the next bounded batch. It is a
lower-risk tranche than the public one just closed, because professional guidance usually *is* a
policy, so citing it for one is the expected case rather than the surprising one.

---

# Expert pool, batch 1 — nine families read against primary guidance

**Date:** 2026-08-29 (second pass)
**Scope:** 16 of the 49 expert `direct-policy-evidence` candidates, chosen by structural risk
rather than by order: the families where a specific factual claim about a guidance document is
what makes the expert pool the size and shape it is.

Fourteen hold as written. Two needed repair, and both are the kind of error that only reading the
primary document finds.

## Where a pool's cardinality rests on one document saying two things

**M060 — verified, and it is a distinct structural type.** Both expert candidates cite a *single*
source, the ASRM Ethics Committee's 2022 opinion on nonmedical sex selection, for opposed clinic
policies. That looked like the highest structural risk in the tranche. It is instead a clean case:
the opinion states that practitioners "are under no ethical obligation to provide **or refuse to
provide**" nonmedical sex selection, that the practice "should not be encouraged," and that clinics
are encouraged to develop and publish their own policies. One document, deliberately declining to
settle the question, licensing two institutional policies.

Most expert pools in this corpus hold two candidates because two bodies disagree. M060 holds two
because one body refuses to decide — and that is a different and worth-naming source of genuine
policy pluralism. M066 was flagged in the Phase C protocol for the same reason (ISPD explicitly
leaves secondary-finding policy open); M060 is the executable instance of it.

**M189 — both candidates verified against current guidance, on the day.** USPSTF's final
recommendation of 30 April 2024 is biennial screening for women 40 through 74 at grade B, and
specifically declines to individualize the decision for women in their 40s as its 2016 statement
did. Current ACS guidance gives women 40–44 the option to begin annual screening, recommends annual
screening for 45–54, and allows 55+ to continue annually or switch to biennial. The record's
citations state both schedules correctly. The guideline disagreement this family exists for is
live as of this date.

**M129 — both candidates verified, to the numbers.** NICE PMG36's reference case "regard[s] all
QALYs as being of equal weight," assesses severity by absolute and proportional QALY shortfall, and
applies weights of ×1.2 and ×1.7 with further modifiers considered in committee deliberation — as
the citation states, including the multipliers. ICER's 2023 framework uses the equal-value life
year gained as its usual measure, valuing all life-year gains equally "regardless of age,
disability, or illness," while still presenting cost per QALY alongside. Both check out.

M189 and M129 are two of the three families built in this session, which the fidelity review marked
for *more* reviewer scrutiny rather than less. Under that scrutiny they hold against the primary
documents.

**M094, M054 — verified.** AMA Opinion 8.7 states the physician's responsibility to accept
immunization "absent a recognized medical contraindication" and also addresses institutional
responsibility, which is what M094 `exp1` translates into a staffing rule. M054's two candidates
cite ACMG's 2021 policy statement with the current SF v3.3 list and the ESHG opportunistic-screening
recommendations — dated, paginated, and PMID-carrying on both sides.

## Two repairs

### M031 `exp1` — the citation pointed at a data report, not at the policy

The candidate permits clinician participation "under the jurisdiction's required assessments,
informed consent, voluntariness safeguards and opportunity to withdraw." Its only source was the
**Oregon Health Authority's Death with Dignity Act 2025 Data Summary** — an annual report of how
many prescriptions were written and how many people died. That document contains none of the
safeguards the candidate encodes. They are in the statute.

This is a warrant mismatch rather than a wrong claim: everything the candidate says is true of
Oregon, but nothing in the cited artefact says it. Repaired to cite **ORS 127.800–127.897** (adult,
capable, terminal prognosis under six months; two oral requests separated by a waiting period plus
a written request; consulting-physician confirmation of diagnosis, capacity, voluntariness and
informed decision; right to rescind at any time) and the **OHA Death with Dignity Act
Requirements**, with the data summary retained and explicitly labelled as evidence that the regime
operates at scale rather than as the source of the policy.

The general form is worth stating: **an evaluation report about a policy is not a statement of the
policy**, and a `direct-policy-evidence` citation to one is circular in the same way a citation to
a Bench audit was.

### M102 `exp2` — the summary was more decisive than NHS guidance is

The summary said NHS clinicians "state they will never proceed if the family objects." No NHS page
says that, and the guidance is deliberately two-sided:

- the consent guidance says families "do not have the legal right to veto or overrule your
  decision," while allowing that "there may nevertheless be cases where it would be inappropriate
  for donation to go ahead if donation would cause distress to your family";
- the public opt-out FAQ says the family is always approached and "your organs will not be donated
  without their consent."

The candidate's *action* survives — England operates deemed consent in which family objection is
not a legal veto but is decisive in practice, and that is what the candidate encodes. The summary
now quotes both sides and says exactly that, instead of attributing a formal family veto to
guidance that expressly denies one.

The distinction from `exp1` is unaffected and, if anything, sharper. Under M102's stipulated facts
— the family objects on its own beliefs and offers no evidence about the deceased — the Dutch rule
proceeds and the English one does not.

## Four more verified, and three citations sharpened

**M056 `exp1`** — ISSCR Recommendation 2.2.2.1 (2021 guidelines) removes the categorical
prohibition and provides that where local policies and regulations permit *and* there is public
support, specialized scientific and ethics oversight may permit culture beyond 14 days. The
candidate's two conditions — specialized review, and prior public and regulatory authorization —
are the recommendation's own two conditions. Citation now names the guidelines and the year rather
than "current guidance."

**M080 `exp1`** — the closest source-to-candidate match found anywhere in this corpus. Declaration
of Helsinki 2024 ¶34: post-trial provisions "must be arranged" *in advance of the trial*, by
sponsors and researchers, for all participants who still need an intervention "identified as
beneficial and reasonably safe in the trial," with exceptions requiring research-ethics-committee
approval and the provisions disclosed in informed consent. Every operative element of the candidate
— advance arrangement, the beneficial-and-reasonably-safe test, disclosure, REC-approved exceptions
— is in the paragraph. Citation now names ¶34 and states its content.

**M097 `exp1`** — AMA Policy H-95.925 supports pilot supervised injection facilities "designed,
monitored and evaluated to generate data to inform policymakers on the feasibility, effectiveness,
and legal aspects." The candidate authorizes a time-limited independently evaluated pilot; the
specific outcome list is Bench completion and the summary already says the policy supports
"monitored and evaluated pilot" facilities rather than claiming the outcomes came from AMA.

**M139 `exp2`** — the candidate states the three §164.512(i) waiver criteria in order: minimal
privacy risk, an adequate plan to protect identifiers, and research that could not practicably be
conducted without both the waiver and access to the protected health information. That is the
regulation.

**M045 `exp2`** — ESHRE Task Force on Ethics and Law 11 (Hum Reprod 2006;21(12):3050-3) concludes
that conditions are met "when written consent has been given by the deceased person, the partner
received extensive counselling and a minimum waiting period of 1 year is imposed before a treatment
can be started." The candidate states all three. Citation now carries volume, pages, PMID and the
condition set.

**M106 `exp2`** — Israel's Organ Transplant Law 2008 adds credit points to a candidate's
waiting-list score for donor-card registration, subject to a minimum registration period, with
clinical suitability and matching still governing. The candidate says exactly that. Citation now
names the statute rather than only the ministry's public donor-card page.

## Expert pool, batch 2 — the singletons that carry a whole layer alone

A singleton expert pool is the highest-leverage place to check, because one document is the entire
professional layer of its family. Five were read.

**M075 `exp1` — verified, comprehensively.** CIOMS 2016 Guideline 11 permits broad informed consent
for unspecified future use, requires institutions to operate a governance system for authorizing
future use, makes the ethical acceptability of broad consent *depend* on that governance, and
requires the original consent process to state the limits of secondary use and the conditions
under which investigators must return for additional authorization. Every element of the candidate
— bounded scope, governance, ethics review of secondary uses, re-consent outside scope — is in the
guideline.

**M033 `exp1` — verified, both clauses.** The RTE EuthanasiaCode provides that where a patient can
no longer express their wishes, an advance directive can replace the oral request and the statutory
due-care criteria apply in the same way, and that the physician must be satisfied there are no
contraindications or signs the patient no longer wishes their life terminated. That second element
is the candidate's "heightened scrutiny," and it was in the source rather than added to it.

### M025 — the explanation for two earlier flags

`SOURCE_TO_POLICY_FIDELITY_REVIEW.md` §4 flagged M025 as the one singleton not framed as the
outcome of a competing-policy sweep. `DIVERGENCE_REVIEW.md` observation 4 flagged it again as the
singleton whose action overlaps most heavily with a public candidate. Reading the source explains
both at once.

The ACIA Task Force guideline (Ear Hear 2022;43(2):268-282) is a **candidacy-determination**
document. It recommends team-based evaluation of the whole child and family system, flexibility,
attention to skill progression and quality of life — all of which the candidate states accurately.
What it does not do is take a position on what a service should do when informed parents decline
implantation, which is M025's actual decision question.

So there was no competing-policy sweep to report, because the profession's document does not
contain a competing policy — it does not contain a policy on this question at all. And the
candidate reads as a process architecture because that is genuinely all the source supports.

The candidate's final clause — that informed refusal alone is not treated as neglect — is
**Bench-authored completion**, and was not declared as such. It is now. `direct-policy-evidence`
candidates have been carrying undeclared completion that the corpus requires inferred candidates to
declare; M025 is where that gap is widest, because the undeclared clause is the one doing the
policy work.

That is a finding about the taxonomy rather than about M025: the four-basis rule asks
`source-informed-policy-inference` candidates to state their bridge, but says nothing about a
`direct-policy-evidence` candidate that is *mostly* direct and partly authored. Most of this
corpus's direct candidates do declare it — M028's and M056's summaries open with "Bench-authored
policy completion" — so the practice exists without a rule behind it.

### The check that was written and then deleted

The obvious response to M025 was a guard: flag every `direct-policy-evidence` candidate whose
summary declares no Bench completion. It was written, and it fired on **59 of the 118 direct
candidates** — half the class.

That is not a finding, it is noise, and it fails the standard this repository already set when a
keyword check for inference bridges was demoted to a never-failing reading aid: *a check a reviewer
learns to ignore is worse than no check.* Many of the 59 are correct silences. M045 `exp2`, M033
`exp1` and M056 `exp1` were each verified in this pass as adding nothing to their sources, so they
have nothing to declare, and a check cannot tell them apart from M025 without doing the reading
that is the whole task.

So the heuristic was deleted rather than tuned. What survives is the finding: **the four-basis rule
has no discipline for a candidate that is mostly direct and partly authored**, most of the corpus
supplies one by convention anyway, and the place to fix it is the construction standard rather than
a script. That is a decision for the coordinator, not a repair to make here.

## Expert pool, batch 3 — and a pattern that has become the finding

**M010 `exp2` — verified with unusual precision.** 45 C.F.R. § 92.201 forbids relying on an
accompanying adult to interpret *unless* the individual specifically requests it in private with a
qualified interpreter present and without the accompanying adult present, the adult agrees, the
request and agreement are documented, and reliance is appropriate under the circumstances. The
candidate states the request-in-private condition, the qualified-interpreter-present condition, the
documentation condition and the appropriateness condition — four of the regulation's five, omitting
only the accompanying adult's own agreement, which the scenario's "requested family member" framing
already supplies. This is the closest thing in the corpus to a candidate that *is* its source.

### One document licensing both expert candidates — now three families, not one

Batch 1 recorded M060 as a distinct structural type: two opposed expert candidates from a single
ASRM opinion that declines to settle the question. Reading batch 3, it is not a curiosity. It is
the most common way this corpus's expert pools get to two.

- **M060** — ASRM 2022 says practitioners are under no obligation to provide *or refuse to provide*
  nonmedical sex selection, and that clinics should publish their own policies.
- **M018** — CDC's Core Elements framework directs avoidance of antibiotics where expected benefit
  is low, *and* its toolkit supplies watchful-waiting and delayed-prescribing materials. Both
  `exp1` (no antibiotic now) and `exp2` (delayed prescription) are strategies the same body
  endorses. The record cites Cochrane and JAMA trials for `exp2`, which is a stronger warrant, but
  `exp1`'s summary previously implied CDC settles against delayed prescribing. It does not, and the
  summary now says so.
- **M020** — AMA Code Opinion 8.3 states the obligation to provide urgent care during disasters
  "even in the face of greater than usual risks to physicians' own safety, health, or life," *and*
  the obligation to weigh present risk against remaining available to provide care in future. `exp1`
  is the first clause and `exp2` the second. Both citations previously read "current ethics guidance
  on physicians' responsibilities during pandemics and disasters," naming no opinion; both now name
  8.3 and quote its two clauses.

The generalisation is worth stating carefully, because it cuts against the intuitive model. Expert
pluralism in this corpus is **not** mainly two authorities contradicting each other. It is more often
**one authority stating a duty and its limit**, or declining to settle, or endorsing a menu — and
the candidate field represents positions the same document licenses. M189 (USPSTF against ACS) is
the exception rather than the rule.

That matters for how a QCCS result should be read. Where two expert candidates come from two bodies,
a low expert–expert coherence score reflects a real professional disagreement. Where they come from
one document's two clauses, a low score reflects tension *within* a single professional position —
which is a different finding about the field, and one the corpus can now distinguish because the
citations say which case each family is.

## Expert pool, batch 4

Five more verified against primary documents, four citations sharpened, and a second instance of
the taxonomy gap.

**M141 `exp2` — verified against both operative clauses.** The DHSC framework's five principles
begin: use of NHS data must have "an explicit aim to improve patient health and care or the
operation of the NHS," and "fair terms should be agreed for the NHS." The candidate's two
conditions are those two principles. Citation now lists all five.

**M146 `exp1` — verified nearly verbatim.** AMA guidance on using health AI in the exam room:
"If AI tools are being used during an encounter — especially ambient scribing — physicians should
explain the technology, secure consent and reassure patients about HIPAA compliance." The candidate
is that sentence made executable. M146 is the third of the three families built in this session; all
three now hold against their primary sources.

**M050 `exp1` — verified on both clauses.** People conceived from donors registered after 1 April
2005 may apply to the HFEA at 18 for identifying information, and donors are encouraged but under
no obligation to have contact — which is exactly the candidate's "identity release does not create a
duty of personal contact."

**M012 `exp1` — verified at document level, with a dating note.** The ISSCR guidelines version 1.2
of August 2025 exists and contains a section on unproven stem-cell-based interventions. The August
2025 release is a *targeted* update covering stem-cell-based embryo models; every other section,
including this one, remains as published in 2021. The citation now says so, because "version 1.2,
August 2025" otherwise implies the unproven-interventions guidance is a 2025 position. The specific
clauses were not retrievable, so this is document-level rather than clause-level verification.

### M144 — the taxonomy gap, second instance

AMA Policy H-480.931 supplies the candidate's controlling phrase verbatim: transparency and
disclosure decisions "should be based upon a risk- and impact-based approach," with the need for
disclosure greater where the technology carries greater risk of harm to a patient. That is a real
and precise match.

But much of what H-480.931 enumerates is disclosure **by the AI developer to purchasers and
physicians** — regulatory approval status, consensus standards, intended use and population,
limitations. The candidate carries the risk-and-impact *principle* across to **physician-to-patient**
disclosure. That is a defensible move and it is what the family needs, but it is a step the source
does not itself take, and it was not declared. The citation now states it.

This is the same shape as M025: a candidate that is mostly direct and partly authored, with the
authored part undeclared. Two instances in 33 candidates read is no longer a one-off, and it
strengthens the case for fixing the construction standard rather than treating each occurrence as a
local repair.

## Still open in this tranche

16 of the 49 expert `direct-policy-evidence` candidates have not been read against their primary
documents. Traceability and temporal anchoring hold for all 49; what remains is confirming that
each document says what is attributed to it. The two errors found in the first 16 were both in the
provenance layer rather than in a candidate's action, and neither changed a geometry — which is
weak evidence that the remainder will behave similarly, and no substitute for reading them.
