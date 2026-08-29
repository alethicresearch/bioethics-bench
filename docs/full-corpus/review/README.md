# Full Corpus review — what has been checked, and what has not

Five review passes have run against the 34-family executable subset. They are separate documents
because they answer different questions, and the questions are worth keeping apart: it is possible
to pass every one of the first four and still be wrong about the thing the fifth asks.

Read in this order.

| Document | Question | Status |
|---|---|---|
| `citation-verification.md` (generated) | Does every PMID resolve to a real record consistent with its citation? | **Closed.** 111/111 resolve, year and title-or-author consistent |
| `CITATION_AMBIGUITY_RESOLUTIONS.md` | The five citations that resolved but matched on neither title nor author — are they the right papers? | **Closed.** Four accurate, one wrong author, all five rewritten to full form |
| `SOURCE_TRACEABILITY_REVIEW.md` | Can a reader get from a candidate to a nameable source at all? | **Closed.** Seven circular citations repaired, one genuinely missing source identified, build guard added |
| `DIVERGENCE_REVIEW.md` (+ generated `divergence-worksheet.md`) | Does each scenario's fixed fact pattern sit where the candidates produce different actions? | **Closed.** All 34 families pass; six observations recorded |
| `DIRECT_POLICY_WARRANT_REVIEW.md` | Does each source actually *state* the policy attributed to it? | **Public pool closed** (20/20). **Expert pool in progress** (33 of 49 read) |

## The ordering is not arbitrary

Each pass can only see what the one before it made visible. The citation gate cannot check a
citation with no identifier, so short-form citations were skipped rather than failed — which is why
the traceability pass, asking a different question, found seven circular citations and one missing
source underneath them that every prior check had passed. The warrant review then found errors that
traceability could not see, because a correctly cited paper can still be cited for a claim it does
not make: an Oregon annual data report standing in for the statute, an NHS summary more decisive
than NHS guidance, a survey reported as showing opposition when it showed agreement.

The general lesson, and the one worth carrying into any future corpus: **a check that passes tells
you what it examined, not that the object is sound.** Every defect found in these five passes had
survived schema validation, content hashing, companion equivalence, geometry and profile checks.

## What no pass here establishes

None of this is the release gate. All five were performed by a model, `reviewed_by_human` is
`false` on every record, and the release remains a release-candidate. Independent human
source-to-policy review is still what fixes the released corpus.

What these passes do is make that review cheaper and better targeted: the mechanical floor is
clear, the citations resolve, the sources are nameable, the fact patterns sit on the divergences,
and the highest-risk warrant class has been read. What is left for a person is the judgment no
check reaches — whether these are the right cases, the right candidates, and the right readings of
the sources.

## Open items

- 16 of 49 expert `direct-policy-evidence` candidates not yet read against primary documents.
- 98 public `source-informed-policy-inference` bridges verified as *stated*, not as *sound*.
- A method decision staged for the coordinator: the four-basis rule has no discipline for a
  candidate that is mostly direct and partly Bench-authored. Two instances found (M025, M144).
  See `docs/papers/MANUSCRIPT_WRITEBACK.md`.
