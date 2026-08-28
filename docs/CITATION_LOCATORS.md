# Resolving citations to works a reader can open

Featured v1 carries 324 candidate-level source citations. 82 have a URL and 22 a DOI; the rest are
text only. This note records what happened when we tried to close that gap, because the answer is
mostly not "look them up".

## What the 220 locator-less citations actually are

| | n |
|---|---|
| books — Mill, Dworkin, Beauchamp & Childress, and others | 42 |
| descriptions of a **literature**, not a single work | ~104 |
| specific citable articles, guidelines or statutes | ~16 |

The middle row is the finding. *"Representative German public surveys on vaccine mandates during a
serious outbreak, showing a genuine split in which supporters emphasize insufficient voluntary
uptake…"* is a citation to a **class** of evidence. No DOI exists for it. Assigning one would mean
silently choosing a single study and presenting a class-level claim as a specific work — the same
failure the policy-basis taxonomy exists to prevent, one level down.

So closing the gap is not data entry. For those citations it means deciding whether a class-level
reference should become one or more named works, which changes what the record claims and is
construction, not custody.

## What the source ledger already knows

`docs/featured-v1-research/SOURCE_LEDGER.md` names many of the specific works behind those class
descriptions — Yui et al. on the Japanese 14-day survey, the RCS England 2016 bloodless-surgery
guidance, Declaration of Helsinki 2024, CIOMS Guideline 5, the WHO Global Code as amended 29 May
2026, the 2023 AAN/AAP/CNS/SCCM guideline. The identifications are therefore **recoverable from our
own research** rather than invented; they simply never travelled from the ledger into the records'
citations.

That is the tractable version of this work: promote ledger-named works into the citations, with
locators, family by family.

## Why the locators live here and not in the records

Featured v1 records are `released` and `public`. Their content hashes roll up into the corpus
SHA-256 `ca48c4dc…`, which the deployment record, the review documents and the shipped bundle all
cite. **Adding a DOI to a frozen record is a re-release, not a metadata edit.**

`citation-locators.json` therefore sits beside the corpus, keyed by the exact citation string, and
is merged for display. Frozen records are untouched and the corpus hash does not move. At the next
genuine corpus release the locators should be folded into the records themselves.

## How a locator is established

Query the Crossref works API by bibliographic string; match on container title, year, author and
subject. Nothing is recorded from memory. `confirmed` means journal, year, authors and subject all
matched. `probable` means the work matches on subject, journal and year but a detail in the
record's citation could not be checked. A citation that describes a literature gets no locator at
all.

## Discrepancies found while resolving

Three of the four resolved citations disagree with the published record. None is a locator problem;
each is the record's citation text, which is the corpus author's to correct:

- **Broome, "Fairness"** — published as vol. 91, pp. 87–**102**, issued **1991**. The record says
  87–101, 1990.
- **Yui et al.** — the published title is *"Survey of Japanese researchers and the public regarding
  the culture of human embryos in vitro beyond 14 days"*. The record gives a different title, so a
  reader searching it will not find the paper.
- **AAN/AAP/CNS/SCCM guideline** — Crossref issues it in *Neurology* **2024**; the corpus and the
  ledger both say 2023, probably the online-first date.

## Not resolved

The F11 UK public triage survey (n = 763) did not come back from Crossref on several bibliographic
queries. It is left without a locator rather than matched to a plausible neighbour.
