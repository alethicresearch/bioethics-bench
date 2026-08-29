# Source traceability review — can a reader get from a candidate to its source?

**Date:** 2026-08-29
**Branch:** `author/full-corpus-completion`
**Scope:** the 20 public-pool `direct-policy-evidence` candidates across the 34 executable
families — the class the fidelity review named as highest-value, because a candidate on this
basis claims its source *states* the policy, so an error is a false claim of grounding rather
than a weak inference.
**Performed by:** a model (Claude Opus 5), not a human reviewer.

---

## The finding

Seven source citations in the Full Corpus named one of **this repository's own documents** as a
candidate's warrant — "as documented in the M075 candidate audit," "described in the M106
candidate audit," and so on. That is circular: the record is grounded in a document that was
written from the record.

The distribution is the striking part. **All seven were in the public pool, and all seven were on
`direct-policy-evidence` candidates.** Of 420 candidates, the circular citations landed entirely
in the one place where the claim of grounding is strongest and a failure costs the most. That is
not coincidence — it is where a construction pass under time pressure reaches for a summary
instead of a source, and it is exactly the failure Phase A withdrew eight records for.

All seven are now repaired against identified, verified sources, and a build guard makes the
count non-recoverable. Finding the last of them took a search outside PubMed, and the fact that it
was findable at all is the useful part of this document.

## Repaired — five citations, four candidates

| Family | Was | Now |
|---|---|---|
| **M106** `pub1` | "Representative Israeli public survey of organ-allocation priorities described in the M106 candidate audit." | Elalouf A, Pliskin JS, Kogut T. *Isr J Health Policy Res.* 2020;9(1):25. PMID 32366325. Telephone survey of 604 adults; donor-registration status ranked least significant by 43%, against maximum medical benefit 51.3% and waiting time 21%. Read against the abstract: the audit's description was accurate in every particular, it simply never cited the paper. |
| **M102** `pub2` | "Family-role and next-of-kin surveys summarized in the M102 candidate audit." | Dropped in favour of the named systematic review the candidate already carried (Molina-Pérez et al., *Transplant Rev* 2022, PMID 34864448), which is what actually warrants it. |
| **M141** `pub3` | A named review "…and the M141 candidate audit." | The trailing pointer removed. Walshe et al. 2024, PMID 38389329, stands on its own. |
| **M075** `pub1`, `pub2` | "Representative U.S. genomic-research survey of 4,659 adults… as documented in the M075 candidate audit." | Platt J, Bollinger J, Dvoskin R, Kardia SL, Kaufman D. *Genet Med* 2014;16(1):11-8, PMID 23660530. Sample size and both percentages match the audit exactly. See below — this one was not findable by PubMed keyword search. |
| **M075** `pub1` | "Biobank participant preference studies favoring broad research consent after active opt-in, as documented in the M075 candidate audit." | Sanderson SC, Brothers KB, Mercaldo ND, et al. *Am J Hum Genet* 2017;100(3):414-27, PMID 28190457 — the eMERGE survey the audit refers to. 13,000 respondents across 11 health systems randomised across tiered-consent, broad-consent and broad-consent-with-open-sharing scenarios; 66% willing to participate, **and willingness did not differ between the three consent scenarios**. That is a stronger warrant for `pub1` than the audit's own paraphrase: it is direct evidence that a broad-consent architecture does not depress participation. |

A guard now enforces this. `scripts/fidelity-audit.mjs` fails the build if any candidate cites a
Bench audit, deep-case file or disposition ledger as a source. The count is zero and cannot
silently return to non-zero.

## Resolved — M075's load-bearing survey, found

The M075 candidate audit states: *"representative US genomic-research survey of 4,659 adults found
broad consent preferred by 52% versus study-by-study consent by 48%."* That single finding is the
warrant for **both** M075 public candidates — the 52% for `pub1`, the 48% for `pub2` — and the
audit cited no bibliographic record for it. PubMed keyword search did not match it, and the
obvious candidate, Sanderson 2017, is not it: that study has 13,000 respondents and reports no
difference between consent scenarios rather than a 52/48 split.

A web search found it. **Platt J, Bollinger J, Dvoskin R, Kardia SL, Kaufman D. Public preferences
regarding informed consent models for participation in population-based genomic research. Genet
Med. 2014;16(1):11-8. PMID 23660530.** Verified against the abstract: online survey of a
representative sample of 4,659 US adults; broad consent preferred by 52% over study-by-study
consent by 48%. Sample size and both percentages match the audit exactly.

The M075 public pool now stands as follows.

- **`pub1`** — Platt 2014 (52% preferring broad consent) plus Sanderson 2017 (willingness to
  participate did not differ across tiered, broad, and broad-with-open-sharing scenarios). Two
  verified sources, one of them direct evidence that a broad-consent architecture does not depress
  participation.
- **`pub2`** — Platt 2014 (48% preferring study-by-study consent). One verified source.

`direct-policy-evidence` is the right basis for both, and Platt is an unusually clean instance of
why. The survey elicited preferences **over consent models themselves**, not preferences over
research participation from which a consent model would then be inferred. Under the action-target
alignment standard that is the distinction that matters: the target of the preference is the
policy, so no inference bridge is required. Most public evidence in this corpus is not like that,
which is why 98 of 138 public candidates are `source-informed-policy-inference` and only 40 are
direct.

The audit's second support for `pub2` — "dynamic-consent studies show donor preferences can change
over time" — names no study, and none was matched. It is **not carried as a source**. `pub2`'s
provenance summary now says so explicitly rather than gesturing at literature the record cannot
produce.

**The release-gate item this document opened is closed.** No candidate in the corpus rests on an
unresolved source; `npm run validate` reports none. The reporting check in
`scripts/fidelity-audit.mjs` remains, so the condition cannot recur silently.

### What the episode is worth keeping

The gap was invisible to every mechanical check the corpus had. M075 passed schema, content
hashing, companion equivalence, geometry, profile, action-distinctness and citation verification —
the last of these precisely because a citation with no identifier is not checkable, so it was
skipped rather than failed. What surfaced it was asking a different question: not "is this citation
correct?" but "can a reader get from this candidate to a source at all?" That question found seven
circular citations, and the one genuinely missing source underneath them.

## What this review covered, and what it did not

It checked whether a reader can get from a candidate to a nameable source. It did **not** check
whether the source, once reached, supports the policy. For the five repaired citations that
question was answered along the way, because identifying the paper meant reading its abstract
against the candidate — and in all five the audit's description held. For the other 15 public
`direct-policy-evidence` candidates, the citation resolves and the reading is the open human gate.
