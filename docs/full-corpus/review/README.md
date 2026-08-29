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
| `BRIDGE_REVIEW.md` (+ generated `bridge-worksheet.md`) | Do the inference bridges hold — does what the source measured license what the candidate directs? | **Closed.** All 55 hold; the finding is that two families' public pools rest on their own expert document |
| `DIRECT_POLICY_WARRANT_REVIEW.md` | Does each source actually *state* the policy attributed to it? | **Closed.** All 20 public and all 49 expert `direct-policy-evidence` candidates read against their sources |

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

## What all five passes together establish

The mechanical floor is clear and the highest-warrant class has been read. Across 69
`direct-policy-evidence` candidates the warrant review found one wrong claim, two undeclared
authored clauses, two partial representations, one warrant pointing at an evaluation report rather
than a policy, two summaries overstating their sources, and roughly twenty citations that named no
author, title, section or date. One candidate's text changed; everything else was provenance. The
executable set never moved from 34 families / 68 records.

## The next pass needs sources, and is packaged for one

The six passes above are what a model can establish from the record. What remains needs the sources
themselves, and is packaged as a task set with a return path:

- **`DEEP_RESEARCH_BRIEF.md`** — what has already been checked (so effort does not go there), the
  three remaining questions, and the failure shapes each one is looking for.
- **`research-tasks/`** — 126 units across 34 families, generated from committed state, one file per
  family. Work order C → B → A.
- **`scripts/ingest-research-verdicts.mjs`** — the return path. It refuses a verdict that judges a
  record whose content hash has moved, names a candidate that is not a unit of that family, or
  asserts a defect without evidence. `npm run validate` reports coverage on every run.

This is not the release gate and it does not set `reviewed_by_human`. It makes the gate assessable
from repository state instead of from someone's memory of who looked at what.

## This review no longer gates execution

As of 2026-08-29 the coordinator has removed human source-to-policy review as a release or
execution gate for the current paper program. The corpus is being executed end to end now for
developmental and exploratory paper evidence, with this review continuing in parallel as a quality
layer, and reruns against an improved snapshot later where the delta is worth reporting.

Nothing below changes as a result. `reviewed_by_human` stays `false`, the findings stand, and the
work still needs doing — it is simply no longer the thing everything else waits on. What that does
change is the standard for a repair: a change that alters what the pipeline reads now costs a rerun
of paper-facing evidence, so it is reported to the SACRE lane before it lands. See
`docs/full-corpus/CHANGE_LOG.md`.

## Open items

- **The largest remaining gap:** 55 inference bridges were checked for whether they *hold*, but their
  descriptions of what each source found were largely taken on trust. Sources were read directly only
  for the `direct-policy-evidence` class. A bridge can be logically sound and still rest on a
  misdescribed finding.
- ~~A cross-source independence question for the coordinator (M045, M060).~~ **Resolved
  2026-08-29** by the deep-research review, which traced both ASRM opinions back to the underlying
  population studies. Nine proposed PMIDs, all verified here against PubMed; both public pools
  re-sourced and the professional-body documents removed from them. Provenance-only. See
  `BRIDGE_REVIEW.md`.
- A method decision staged for the coordinator: the four-basis rule has no discipline for a
  candidate that is mostly direct and partly Bench-authored. Two instances found (M025, M144).
  See `docs/papers/MANUSCRIPT_WRITEBACK.md`.
- **Mode 3 is under-detected.** The warrant review found one instance of a source quoted correctly
  on one question while silent on its own position on another (M041/ESHRE), and found it in the
  one source read from its own PDF rather than from an abstract. Every other source read at
  abstract level could carry the same defect invisibly. Closing this properly means reading whole
  documents, not cited passages.
