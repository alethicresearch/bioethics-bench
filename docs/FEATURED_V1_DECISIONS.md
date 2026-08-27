# Featured Bioethics Bench v1 — current research decisions

**Status:** governing design decisions for the next corpus-construction phase.

## 1. Release size

Featured v1 will target **20 deeply researched case families**.

The 200-case master inventory remains open-ended and is not pruned or discarded to reach 20. Featured v1 is the first polished public release, not the definition of the field or the lifetime size of Bioethics Bench.

## 2. Animal ethics is required

Animal ethics / One Health is part of the Bench proper, not an optional boundary domain. The first Featured release should include **at least two case families that directly represent nonhuman interests**, preferably from different decision structures (for example animal research plus food/One Health, wildlife, or zoonotic governance).

This is methodologically informative as well as substantively important: the project should test whether its public/expert/framework source architecture can represent nonhuman interests directly and faithfully rather than only through human preference proxies.

## 3. Concise and detailed representations

Each Featured case family should be developed with **two curated scenario representations**:

- **Concise** — the default application/onboarding representation: digestible, minimal context, all outcome-critical facts preserved.
- **Detailed** — a richer representation of the same decision problem, adding relevant context and nuance without changing the decision question or silently changing the factual assumptions.

These are **not interchangeable text strings for benchmarking**. Scenario wording and information density can affect QCCS results. Each representation therefore needs an explicit representation identity and its own content hash. Both share the same underlying `case_id` but should be distinguishable in execution provenance.

The first pilot should keep the **same substantive executable policy set** across concise and detailed scenario representations wherever defensible. That creates a clean representation-robustness comparison: same decision and same policies, different scenario detail.

If candidate wording itself is also varied by length, that is a separate perturbation and should receive a distinct identity; it should not be silently conflated with scenario-length variation.

## 4. Relation to SACRE's existing generation UI

SACRE already exposes `Concise / Standard / Detailed` controls for scenario and policy generation. Those controls are authoring/generation options. A curated Featured record is different: its concise and detailed representations are reviewed and frozen content, not regenerated on every load.

The product can later align the labels so users understand the connection, but the benchmark must load the exact frozen representation chosen.

## 5. Proposed initial executable profile

For pilot work, use:

- one explicit decision question;
- a concise scenario and a detailed scenario sharing the same decision facts;
- six policy candidates under the default profile: 2 public-derived, 2 expert-derived, 2 framework-derived;
- 12 unordered cross-source QCCS pairs per complete run;
- identical candidate set across concise/detailed scenario representations for the first representation-robustness pilot.

The 2×2×2 profile remains a **pilot standard**, not a permanent assumption. Real case construction may show that some domains require another representation design.

## 6. Featured v1 and validation

Both concise and detailed Featured representations are deliberately public/exposed. They may support teaching, demonstrations, exploratory runs, representation-robustness development, P1/P2 illustrations, and later public benchmark releases. They are **not** the future unseen P3 confirmatory holdout.

## 7. Immediate next work

1. Choose a deliberately diverse pilot subset from the master inventory, including an animal-ethics case.
2. Deep-source those cases and construct paired concise/detailed scenario representations.
3. Test the 2×2×2 candidate profile and provenance model in the actual SACRE application.
4. Use the pilot to refine the construction standard before drafting all 20 Featured v1 case families.
5. Select final Featured v1 balance only after real executable records have been reviewed and run.