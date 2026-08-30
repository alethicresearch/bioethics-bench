# Bioethics Bench — Historical Full Corpus reconstruction decision

**Original decision date:** 2026-08-27  
**Superseded:** 2026-08-30  
**Status:** HISTORICAL — **not authoritative for current construction**  
**Filename note:** retained for repository and citation continuity. Git history preserves the complete prior text.

## Supersession notice

The August 27 reconstruction decision was useful in breaking the earlier assumption that all cases should be forced into a fixed `2 × 2 × 2` executable geometry. It correctly recognized natural candidate asymmetry and the distinction between Bioethics Bench and deliberately synthetic SACRE demonstration objects.

However, parts of that decision subsequently became inconsistent with the formal SACRE specification and with the corrected Bioethics Bench construction standard. In particular, it:

- treated a singular `decision_question` as a governing construction constraint rather than reader-facing / editorial metadata around the Scenario;
- permitted synthetic or author-constructed policies to occupy Public or Expert perspective slots in the canonical source-grounded Bench;
- allowed construction to move from an editorially specified practical decision toward candidate completion, which can overcompress or distort the natural normative positions supported by the sources.

Those instructions are **superseded**.

## Current governing documents

Read these instead, in this order:

1. `docs/COORDINATOR_DIRECTIVE.md`
2. `docs/FULL_CORPUS_V1_PLAN.md`
3. `docs/CANDIDATE_POLICY_SPACE_AUDIT.md` — current title/content: Scenario and Policy-Representation Audit
4. `docs/FEATURED_SCENARIO_POLICY_AUDIT_2026-08-30.md`
5. `docs/FEATURED_PRIORITY_SOURCE_REOPEN_2026-08-30.md`
6. `docs/FEATURED_PROPOSED_NEXT_VERSION_RECONSTRUCTIONS_2026-08-30.md`
7. `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`

The governing construction rule is:

> **Scenario first → recover the natural number of substantively distinct source-supported Policy positions → preserve provenance and source identity → audit the representation → classify SACRE suitability.**

## What remains valid from the August 27 decision

Several insights from the prior decision remain important.

### 1. Natural candidate geometry

There is no substantive default `2 × 2 × 2` ontology for Bioethics Bench. Candidate counts should follow the evidence. Fields may be symmetric or asymmetric. A matched geometry may be selected later for a controlled study from cases that naturally support it.

### 2. Bench and synthetic demonstration cases are different research objects

Synthetic or deliberately constructed cases remain legitimate in the **SACRE evaluation / demonstration library**, where their purpose is methodological demonstration, stress testing, controlled geometry, or pedagogical illustration.

They are **not** substitutes for source-grounded Public or Expert positions in the canonical Bioethics Bench executable collection.

### 3. Source-to-Policy inference must be explicit

A source may directly state a policy or may supply attitudes, values, experience, concerns, or professional considerations from which the Bench makes a bounded Policy inference. Those relations should remain explicit in provenance.

A source-informed inference does not become direct evidence merely because the resulting sentence is plausible.

### 4. Asymmetry affects aggregation

Where source-pool geometry gives candidates unequal numbers of cross-source partners, the SACRE aggregation rule must handle that structure explicitly rather than editing the resource to restore symmetry. The current SACRE specification governs the applicable ranking rule.

### 5. A research-complete case need not be executable

If one of the declared Public / Expert / Framework source classes cannot be populated with at least one defensibly source-grounded Policy candidate, the case can remain an excellent scholarly Bench case while falling outside the executable scope of canonical SACRE v1. See `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`.

## Current treatment of `decision_question`

`decision_question` may remain in schemas and case files because it can be useful for navigation, explanatory clarity, searching, and checking whether a Scenario has become too broad.

It is **not a formal SACRE input** and must not determine the candidate taxonomy.

Conceptually:

- **Scenario** = SACRE input;
- **Policy candidates** = SACRE inputs;
- **decision_question** = optional / useful Bench framing metadata;
- **decision-maker** = optional / useful practical context.

Source research should therefore not stop once an editorially written question appears to have a neat set of answers. The research task is to recover the substantively distinct normative positions that the relevant source domains actually support for the represented Scenario.

## Current treatment of synthetic policies

For the canonical source-grounded Bench:

- Public candidates require defensible Public / affected-community grounding;
- Expert candidates require defensible Expert / professional grounding;
- Framework candidates require an explicit normative framework and a defensible reasoning bridge to the represented Policy;
- a synthetic author-constructed comparator **does not satisfy a missing source class** and cannot make a case executable under canonical SACRE v1.

If a synthetic comparator is scientifically useful, place it in an explicitly synthetic evaluation / demonstration object or a separately specified experimental condition. Do not label it as an empirical Public or professional Expert position.

## Current all-200 rule

All 200 planned Bench cases must receive the Scenario / Policy-representation audit before final Full Corpus v1 freeze, including cases whose existing developmental records already validate structurally.

The audit records at minimum:

- Scenario adequacy;
- source-to-Policy fidelity;
- natural candidate count by source domain;
- within-pool distinctness;
- cross-source independence;
- position merging / omission risks;
- concise/detailed invariance;
- stipulation leverage;
- SACRE suitability;
- demonstration richness;
- final disposition.

The 20 Featured v1 cases are the calibration set for this all-corpus pass, not an exemption from it.

## Historical value

The August 27 decision remains useful evidence of the program's development. In particular, it captured the transition away from forced fixed geometry and toward natural candidate ecology. Its supersession on August 30 captures a second construction finding: **natural geometry is not enough if the candidate-generation ontology itself is allowed to be driven by an editorial decision frame or by synthetic slot completion.**

That development history can be discussed in internal methods records where useful, but current corpus construction must follow the documents listed above.
