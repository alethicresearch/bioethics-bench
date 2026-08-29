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

Five of the seven are now repaired against identified, verified sources. Two are not, and the
reason they are not is the substance of this document.

## Repaired — five citations, four candidates

| Family | Was | Now |
|---|---|---|
| **M106** `pub1` | "Representative Israeli public survey of organ-allocation priorities described in the M106 candidate audit." | Elalouf A, Pliskin JS, Kogut T. *Isr J Health Policy Res.* 2020;9(1):25. PMID 32366325. Telephone survey of 604 adults; donor-registration status ranked least significant by 43%, against maximum medical benefit 51.3% and waiting time 21%. Read against the abstract: the audit's description was accurate in every particular, it simply never cited the paper. |
| **M102** `pub2` | "Family-role and next-of-kin surveys summarized in the M102 candidate audit." | Dropped in favour of the named systematic review the candidate already carried (Molina-Pérez et al., *Transplant Rev* 2022, PMID 34864448), which is what actually warrants it. |
| **M141** `pub3` | A named review "…and the M141 candidate audit." | The trailing pointer removed. Walshe et al. 2024, PMID 38389329, stands on its own. |
| **M075** `pub1` | "Biobank participant preference studies favoring broad research consent after active opt-in, as documented in the M075 candidate audit." | Sanderson SC, Brothers KB, Mercaldo ND, et al. *Am J Hum Genet* 2017;100(3):414-27, PMID 28190457 — the eMERGE survey the audit refers to. 13,000 respondents across 11 health systems randomised across tiered-consent, broad-consent and broad-consent-with-open-sharing scenarios; 66% willing to participate, **and willingness did not differ between the three consent scenarios**. That is a stronger warrant for `pub1` than the audit's own paraphrase: it is direct evidence that a broad-consent architecture does not depress participation. |

A guard now enforces this. `scripts/fidelity-audit.mjs` fails the build if any candidate cites a
Bench audit, deep-case file or disposition ledger as a source. The count is zero and cannot
silently return to non-zero.

## Not repaired — M075's load-bearing survey

The M075 candidate audit states: *"representative US genomic-research survey of 4,659 adults found
broad consent preferred by 52% versus study-by-study consent by 48%."* That single finding is the
warrant for **both** M075 public candidates — the 52% for `pub1`, the 48% for `pub2`. The audit
cites no bibliographic record for it, and searching PubMed has not matched it to one. The obvious
candidate, Sanderson 2017, is not it: that study has 13,000 respondents and reports no difference
between consent scenarios rather than a 52/48 split.

The audit's second support for `pub2` — "dynamic-consent studies show donor preferences can change
over time" — names no study either.

So the position is:

- **M075 `pub1`** now rests on one verified source (Sanderson 2017) plus one unresolved one. It has
  a real warrant.
- **M075 `pub2`** rests on **nothing traceable**. Both of its sources are unresolved. It is a
  `direct-policy-evidence` candidate — the basis that asserts a source states this policy — and no
  source in the repository can be shown to state it.

Both citations have been rewritten to say this plainly rather than to point inward, and
`npm run validate` now prints the condition on every run:

```
! 2 candidate(s) rest partly or wholly on an unresolved source:
  ! m075…: pub1 (public, direct-policy-evidence) — 1/2 source(s) unresolved
  ! m075…: pub2 (public, direct-policy-evidence) — 2/2 source(s) unresolved; UNRESOLVED IS THE CANDIDATE'S ONLY WARRANT
```

### Why a source was not substituted

There is adjacent literature that could be made to fit — patient-preference surveys on research
use of biospecimens, dynamic-consent papers. Reading two of them, neither states the policy
`pub2` encodes, and attaching one anyway would convert a visible gap into an invisible false
citation. That is the manufactured-grounding failure this corpus was rebuilt to avoid, and it is
worse than the gap.

### The two resolutions, and why this is not decided here

1. **Supply the citation.** Whoever performed the M075 audit had a source in hand for the 52/48
   finding. If it can be produced, both candidates are sound as written and this closes with a
   one-line edit.
2. **Hold M075.** Withdraw the family from the executable subset pending source identification.
   The corpus goes to 33 families / 66 records, the manifest and the SACRE vendor pin change, and
   the paper-facing count moves.

**This is recorded rather than decided.** Option 2 changes the executable set, the release
manifest, SACRE's pinned corpus and the count the manuscripts state — a cross-project consequence,
and the coordinator directive says to stop at that boundary and record the evidence rather than
move it unilaterally. Option 1 costs nothing and may simply be available. The disposition is
therefore **open and visible**: the corpus still ships M075, and no run of the validator can now
report a clean corpus without also reporting why M075 is not.

If option 1 cannot be met, option 2 is the consistent answer under this corpus's own standard, and
`pub2` is the candidate that fails it — not the family's expert or framework layers, which are
sourced.

## What this review covered, and what it did not

It checked whether a reader can get from a candidate to a nameable source. It did **not** check
whether the source, once reached, supports the policy. For the five repaired citations that
question was answered along the way, because identifying the paper meant reading its abstract
against the candidate — and in all five the audit's description held. For the other 15 public
`direct-policy-evidence` candidates, the citation resolves and the reading is the open human gate.
