# Bioethics Bench reconstruction — Batch 01 implementation status

**Date:** 2026-08-27  
**Branch:** `author/reconstruction-batch-01`  
**Review target:** PR #9  
**Status:** authoring complete except one explicit M010 companion-repair decision; independent review requested before merge or scaling.

## Current canonical dispositions

| Family | Canonical field / disposition | Pair count | Aggregation | Machine-readable status |
|---|---:|---:|---|---|
| M028 | natural 2×1×3 | 11 | Mean | new concise/detailed pair authored |
| M033 | natural 2×1×3 | 11 | Mean | new concise/detailed pair authored |
| M056 | natural 2×1×2 | 8 | Mean | new concise/detailed pair authored |
| M054 | natural 2×1×3 | 11 | Mean | new concise/detailed pair authored |
| M097 | natural 2×2×3 | 16 | Mean | new concise/detailed pair authored |
| M031 | natural 2×3×3 | 21 | Mean | new concise/detailed pair authored |
| M025 | source-informed 2×1×3 | 11 | Mean | new concise/detailed pair authored |
| M156/F17 | architecture-limited | — | — | intentionally no canonical executable record |
| M005 | existing 2×1×2 | 8 | Mean via existing Full Corpus profile | existing pair preserved |
| M010 | existing 2×2×2 | 12 | symmetric | existing pair preserved pending companion repair decision |

No synthetic candidate is required in the nine executable fields.

## Machine-readable pairs authored in this branch

- `data/benchmark/m028-brain-death-accommodation-natural-concise-v1.json`
- `data/benchmark/m028-brain-death-accommodation-natural-detailed-v1.json`
- `data/benchmark/m033-advance-request-euthanasia-dementia-natural-concise-v1.json`
- `data/benchmark/m033-advance-request-euthanasia-dementia-natural-detailed-v1.json`
- `data/benchmark/m056-fourteen-day-embryo-research-limit-natural-concise-v1.json`
- `data/benchmark/m056-fourteen-day-embryo-research-limit-natural-detailed-v1.json`
- `data/benchmark/m054-secondary-findings-clinical-genomic-sequencing-natural-concise-v1.json`
- `data/benchmark/m054-secondary-findings-clinical-genomic-sequencing-natural-detailed-v1.json`
- `data/benchmark/m097-supervised-consumption-services-natural-concise-v1.json`
- `data/benchmark/m097-supervised-consumption-services-natural-detailed-v1.json`
- `data/benchmark/m031-medical-aid-in-dying-terminal-illness-natural-concise-v1.json`
- `data/benchmark/m031-medical-aid-in-dying-terminal-illness-natural-detailed-v1.json`
- `data/benchmark/m025-cochlear-implantation-deaf-child-source-informed-concise-v1.json`
- `data/benchmark/m025-cochlear-implantation-deaf-child-source-informed-detailed-v1.json`

All new asymmetric pairs declare `required_aggregation: "mean"`; all companions use byte-identical candidate pools and reciprocal companion ids; candidate-level `policy_basis` is explicit; frame identity is explicit for reconstructed multi/frame-sensitive objects; content hashes use the repository JCS/SHA-256 rule.

## Existing M005 and M010 records

M005 and M010 already contain the intended candidate fields and four-basis provenance classifications. This branch does **not** create duplicate v2 pairs merely to add `frame_id: natural`. The schema deliberately permits `frame_id` to be absent where a family has only one represented framing. Their existing profile identities continue to carry the geometry/aggregation contract.

M005 is preserved unchanged. Its 2×1×2 asymmetry is already Mean-pinned by `full-corpus-2x1x2-mean-v1`.

M010 is also preserved substantively, but the author audit found one real concise/detailed issue that should be resolved before freeze: the detailed scenario explicitly states that the chosen adult family member is conversationally fluent **but has no interpreter credential**; the concise scenario says only that the family member speaks both languages. Because several candidates turn on qualified versus unqualified interpretation, qualification status is load-bearing. The repair should add the lack-of-credential fact to the concise representation and version the companion research object consistently rather than silently mutating one record. Independent review is requested on the cleanest pair-level versioning implementation before that repair is committed.

## Dossier synchronization completed

The current reconstruction decision is now recorded in the deep dossiers for:

- M028 — restores the third proportional-accommodation framework;
- M033 — separates current-welfare threshold from contemporaneous-confirmation precaution and adds explicit normative anchors;
- M056 — removes the unsupported executable “new fixed later day” option from the current deep case;
- M054 — records both public candidates as source-informed and restores the higher-actionability framework;
- M097 — records source-informed affected/public policies and the establish / decline-threshold / pilot framework ecology;
- M031 — records the 2×3×3 natural field, including AAHPM studied neutrality as source-informed expert policy inference;
- M025 — records the action-divergence repair while preserving the strict source-to-policy failure as the reason for the source-informed frame;
- M156 — records why F17 is not an alternate frame of M156 and why human policy attitudes do not solve nonhuman affected-interest representation.

Historical candidate audits and the earlier strict source-to-policy review are intentionally not rewritten. They remain evidence of the direct-grounding exercise that motivated the new policy-basis taxonomy.

## Independent review requested

Before merge, review the authored batch for:

1. `policy_basis` accuracy and source-to-policy fidelity;
2. candidate action distinctness within each pool;
3. scenario/action divergence under the fixed facts;
4. concise/detailed companion equivalence on load-bearing facts;
5. geometry and complete cross-source pair counts;
6. Mean enforcement on asymmetric fields;
7. frame identity, version lineage and content hashes;
8. dossier/record consistency;
9. M156/F17 case-versus-frame distinction;
10. the proposed M010 pair-level companion repair.

A green structural validator is necessary but not sufficient: near-entailment, matched policy granularity, philosophical distinctness and substantive provenance remain reviewer judgments.

## Execution boundary

This batch authorizes no E1–E4 execution, no human/Prolific study and no confirmatory validation spend. The separate SACRE repository has already completed its E0 development calibration; that is implementation evidence for P2 and remains distinct from validation of this reconstructed Full Corpus batch.

After independent review and repair of any recurring construction defects, the next authoring unit should be a 15–20-family batch rather than one-by-one corpus completion.
