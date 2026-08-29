# Citation ambiguity resolutions — the five flagged short-form citations

**Date:** 2026-08-29
**Branch:** `author/full-corpus-completion`
**Closes:** the "neither title nor first author matches" queue from
`scripts/verify-citations.mjs`, which stood at 5 and now stands at 0.
**Method:** each PMID's abstract was fetched from PubMed `efetch` and read against the
candidate text and provenance summary that cites it.

---

## What was actually wrong

All five were **short-form descriptive citations** — a gloss of the study plus a PMID, naming
neither author nor title. That form defeats verification by construction: nothing in the
citation can be matched against the record it points to, so the identifier is the only thing
carrying the claim, and a transposed digit would be invisible.

Read against their abstracts, **four of the five glosses were substantively accurate** and one
carried a **wrong author attribution**. All five have been rewritten to full citations, so the
verifier now checks them rather than skipping them.

| PMID | Was | Finding |
|---|---|---|
| 19643441 | "National parent survey on private adolescent time and disclosure preferences." | Accurate. Dempsey 2009, n=1,025 parents; 66% held private adolescent time important, 46% preferred disclosure of what was said in it. This is exactly the split M004 `pub2` is built on. |
| 34780288 | "Ebola-era healthcare-worker willingness and duty-to-care study." | Accurate. Nagel 2021, 72 critical-care RNs; 63 agreed a duty to care despite risk, 59 agreed family responsibility would take priority. Supports M020 `pub2`'s vulnerability/caregiving architecture directly. |
| 34496995 | "Aitken P et al. 2021." | **Wrong author.** The record is Hill M, Smith E, Mills B — Australian frontline HCWs, n=580. The topic is right and the candidate's use of it survives; the attribution did not. Repaired. |
| 19114698 | "Hospice-service need and willingness to forgo cancer treatment study." | Accurate. Casarett 2009; the forgo-treatment requirement does not identify patients with greater perceived hospice need. |
| 19571331 | "Advanced lung-cancer treatment and hospice preference study." | Accurate as to topic, **misleading as to population.** Salz & Brewer 2009 surveyed 198 adult smokers imagining advanced lung cancer, not patients under treatment. The gloss implied a patient sample. Repaired, and the population is now stated in the citation itself. |

## The one substantive repair beyond citation form

M030 `pub1` is `direct-policy-evidence` — the strongest basis in the taxonomy, asserting that
the source *states* the policy. Its summary grounded that in "directly elicited care
preferences." With PMID 19571331's population now visible, that grounding does not hold on its
own: a hypothetical-scenario preference among smokers is not a public statement of an
institutional policy, and treating it as one is the action-target failure the construction
standard exists to prevent.

The basis nonetheless survives, on a different and better footing. Both cited studies state
this policy direction *in their own conclusions* — Salz & Brewer's title is "one solution to
hospice underuse," and Casarett's conclusion is that the eligibility criterion fails to do what
it was designed to do. The candidate is adapted from those stated conclusions. The summary now
says that, and says explicitly that the preference data alone would not carry the candidate.

This is the distinction worth carrying forward: a public-pool candidate may be
`direct-policy-evidence` because the source's authors state the policy, but that is a different
warrant from public preference data, and a provenance summary that blurs the two overstates
what the public layer measured.

## Status of the citation gate after this pass

- 231 unique citations; 103 carry a PMID.
- **103 / 103 resolve, with year and either title or first author consistent.** No unresolved
  identifier, no year disagreement, no unmatched record.
- The remaining 128 are named guidelines, statutes, policy documents and books. They are not
  machine-checkable and remain part of the human review surface.
- What this gate still does **not** establish: that any source supports the policy attributed to
  it. That is §3 of `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` and remains open.
