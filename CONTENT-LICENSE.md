# Content license — Bioethics Bench case text

## What this license covers

**Bench-authored case content is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).**

Copyright holder: **Alethic Research**.

This covers the text Bioethics Bench wrote:

- scenario text, in every representation;
- decision questions;
- executable policy-candidate text;
- provenance summaries, editorial notes, benchmark stipulations, titles, descriptions and tags;
- the curation, selection and arrangement of the corpus.

Under CC BY 4.0 you may share and adapt this material for any purpose, including commercially, provided you give appropriate credit, link to the license, and indicate whether changes were made.

Suggested attribution:

> Bioethics Bench Featured v1 case records, Alethic Research, CC BY 4.0.
> https://bioethicsbench.com — record `<record_id>`, version `<version>`, content hash `<content_hash>`.

Cite the record id, version and content hash. A Bench record is a versioned research object, and an attribution that does not say which version it used cannot be checked.

## What this license does NOT cover

**This license does not relicense any third-party source material.** Guidelines, articles, surveys, statutes, casebooks and reports cited in a record's `references` and in candidate and scenario `provenance.sources` keep their own rights, which are recorded per source. Nothing here grants any right in them.

**Bench case text adapts and summarizes; it does not reproduce.** Every Featured scenario is an independently constructed representation written for the Bench, marked `adapted_not_reproduced: true` in its `scenario_provenance`. Where a source informed a policy candidate, the provenance says whether the candidate was extracted from evidence that asked a closely matching question or adapted from evidence that established a value or process preference the Bench had to translate into an actionable policy. No copyrighted casebook or article prose is copied into a record.

Framework-derived candidates state what policy follows in the scenario from a named normative approach. They are Bench constructions and are **not quotations** from any philosopher or framework document, and the provenance for each says so.

## Benchmark stipulations

Some records contain **editorial benchmark stipulations** — constructed numerical or contextual assumptions (an error rate, a species and severity classification, a legal setting, a trade-off magnitude) that make a decision problem determinate enough to execute and to perturb. These are listed in the record's `stipulations` field and marked in the scenario text.

A stipulation is a property of the benchmark, not a claim about the world. Do not cite one as an empirical finding.

## Software

The tooling in `scripts/`, the schemas in `schemas/` and the site implementation are covered by the repository's software license, not by this content license.

## Status

Featured v1 records are `status: editorial-review`. They are curated research objects under review, not a released or validated benchmark, and no human or model evaluation has been executed against them. Applying a license does not make a record released; see `docs/GOVERNANCE.md` and `docs/VERSIONING.md`.
