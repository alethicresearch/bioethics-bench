# SACRE v1 source-completeness decision

**Status:** program-level architecture hold for Full Corpus v1, 2026-08-28.

## Decision

Do **not** relax the current public–expert–framework source-completeness requirement in order to recover held families or increase the executable Full Corpus v1 count.

For the canonical SACRE v1 Full Corpus, a family counts as executable only when at least one defensibly source-grounded Policy candidate can be represented in each of the three declared source classes:

- public
- expert
- framework

Where one class cannot be populated without proxying an affected interest, misclassifying evidence, or otherwise weakening source-to-policy fidelity, the family remains held for canonical v1.

This is **not** a target-n rule. The reason is method identity: the present P1 specification defines SACRE as a tripartite collective procedure, with a public–expert Step-3 state and a Step-4 completion of the public–expert–framework cross-source graph. The present SACRE implementation/reporting semantics also encode these roles. A zero-public or otherwise missing-source profile would therefore instantiate a different procedure unless the theory and implementation are deliberately generalized.

## What to preserve

The proposed scheme change is scientifically important and should not be discarded. In particular, audit holds that otherwise appear executable but fail solely because a defensible public pool cannot be populated are evidence about the representational boundary of canonical SACRE v1.

If missing-source/generalized-profile work already exists locally, preserve it as a patch, branch, or explicit proposal. Do not merge it into Full Corpus v1 and do not count resulting families in the canonical v1 executable total.

## Possible future extension

A generalized or partial-source SACRE variant can be considered after the near-term P1/P2 freeze. Before such a variant becomes an executable research object, it must specify at minimum:

1. the admissible set and minimum number of normative source classes;
2. whether source classes remain fixed as public/expert/framework or become generic/configurable;
3. what replaces or generalizes the current Step-3 public–expert state;
4. when a provisional Final Policy is legitimate under missing source classes;
5. aggregation and completeness rules for partial-source geometries;
6. source identity, candidate IDs, provenance, UI and report labeling;
7. corpus lineage/release rules that keep generalized records distinct from canonical Full Corpus v1;
8. a separate validation plan.

Until those questions are answered, missing-source cases remain legitimate scope findings rather than schema defects.

## Program impact

- **P1:** v58 now makes this present-specification boundary explicit while leaving generalized source architectures open as future method extensions.
- **P2:** should report architecture limits as construction findings rather than implying that every researched case must be made executable.
- **P3:** canonical validation should use the source-complete released Full Corpus; generalized-source validation is a separate future design question.
- **Bench:** continue human source-to-policy review of the cases already used in evaluations. Do not batch-reconstruct held cases under a missing-source profile unless this architecture decision is later explicitly revised.

## Next dependency

Continue the existing source-to-policy fidelity/release work under the canonical three-source scheme. Preserve the generalized-scheme proposal and the cases that motivated it for a later architecture review after P1/P2 are frozen.
