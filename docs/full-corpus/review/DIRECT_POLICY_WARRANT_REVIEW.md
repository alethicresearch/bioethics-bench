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

## What this review does not establish

It checks that a source states the policy. It does not check the 98 public
`source-informed-policy-inference` candidates, whose bridges were verified as *stated* in an
earlier pass but not as *sound*. It does not touch the 98 expert `direct-policy-evidence`
candidates, which cite professional guidance — a larger tranche, but a lower-risk one, since
professional guidance usually is a policy and citing it for one is the expected case rather than
the surprising one. That is the next bounded batch.
