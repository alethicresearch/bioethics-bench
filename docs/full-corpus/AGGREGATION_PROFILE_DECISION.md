# Full Corpus aggregation-profile decision

**Decision date:** 2026-08-27  
**Status:** adopted for Full Corpus v1

Evidence-qualified executable cases may use asymmetric source-pool profiles when the evidence genuinely supports different numbers of defensible candidates across source classes. Such cases are not forced into `2 × 2 × 2`, and they are not automatically demoted to non-executable status merely because one source class contains a single defensible policy family.

Asymmetric executable profiles must, however, use **Mean aggregation**.

## Why

Under Sum aggregation, a candidate's score increases with the number of cross-source partners it is compared against. In a symmetric `2 × 2 × 2` profile every candidate has four cross-source partners, so this does not create a pool-shape advantage. In `1 × 2 × 2` or `2 × 1 × 2`, the candidate in the singleton pool has four partners while candidates in the two-member pools have three. If every QCCS cell is identical, Sum therefore ranks the singleton-pool candidate first solely because of profile shape.

Mean aggregation divides each candidate's cross-source total by its own measured partner count and removes that deterministic pool-size advantage. SACRE must not produce an official ranking or provisional Final Policy for an asymmetric candidate set under Sum.

This follows the same research-object principle as the incomplete-matrix rule: when the aggregation procedure does not validly represent the declared comparison structure, measured cells may remain available diagnostically, but no official ranking or Final Policy is reported.

## Profiles

Full Corpus v1 may register asymmetric profiles such as:

- `full-corpus-1x2x2-mean-v1`
- `full-corpus-2x1x2-mean-v1`

Each asymmetric profile must declare `required_aggregation: "mean"` in the benchmark-profile registry. The validator must reject an asymmetric registered profile that does not declare Mean.

A symmetric profile may continue to permit Sum because every candidate has the same number of cross-source partners. Mean and Sum differ in scale there but not in rank order when candidate weights are otherwise equal.

## Interpretation limitation

Mean removes deterministic pool-size bias; it does not make scores from different profile shapes statistically interchangeable. A candidate mean based on three cross-source partners and one based on four partners have different sampling properties. Cross-profile raw score comparisons therefore require explicit caution and should not be treated as directly equivalent measurements without a separate analysis.

There is also a **pair-composition effect** in asymmetric profiles that Mean does not remove. When a `2 × 1 × 2` case lies on a roughly binary policy axis and the singleton professional candidate aligns with one public and one framework candidate, those three candidates form a three-edge cross-pool same-orientation cluster (`public–expert`, `public–framework`, `expert–framework`) within the eight-cell comparison matrix. The opposite orientation lacks a professional candidate and therefore has a less densely represented same-orientation cluster. This does **not** determine any QCCS score, but repeated high convergence around the singleton-aligned orientation cannot be interpreted as wholly independent of profile composition. Cases such as M123, where the professional candidate straddles rather than cleanly occupies one side of a binary axis, illustrate why the effect is structural but not universal.

This limitation belongs in the resource methods and later validation paper. It is not a reason to fabricate additional source-class candidates or to begin a new model-specification workstream.