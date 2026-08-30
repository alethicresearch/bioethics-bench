# Bioethics Bench — Standalone Paper Findings and Argument Surface

**Date:** 2026-08-30  
**Target paper:** *Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics*  
**Current Drive plan:** https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

This is the current manuscript-facing synthesis for the standalone Bioethics Bench paper. It does not replace the chronological audit trail or the P1/P2 findings surface. It collects the claims that now belong specifically to the resource paper after the generalization audit, `sacre-qccs-v1` equivalence verification, provenance re-pin, and first corpus-driven ontology stress test.

## 1. The paper's center of gravity

The strongest paper is not “we made a benchmark for SACRE.”

The stronger contribution is:

> **computational bioethics needs source-grounded normative research objects whose identity, provenance, representation, task projection, review state, and experimental use can be separated and versioned explicitly. Bioethics Bench develops that infrastructure and demonstrates the separation through a complete reference-task projection into SACRE/QCCS.**

The manuscript should move from a concrete scientific problem—normative systems cannot be compared reproducibly if the represented bioethical objects themselves drift or hide their source construction—to the resource architecture that problem forced us to build.

SACRE/QCCS is the first mature reference task and an implementation test of the architecture. It is not the ontological definition of Bioethics Bench.

## 2. Current resource state

Current executable Full Corpus:

- **34 families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- 69 Public, 55 Expert, 86 Framework candidates under current SACRE task roles;
- all current records remain `status: draft`;
- all remain `reviewed_by_human: false`.

Current basis distribution:

- Public: 49 source-informed policy inferences / 20 direct-policy evidence;
- Expert: 49 direct-policy evidence / 6 source-informed policy inferences;
- Framework: 86 framework-derived policies.

The paper should not present these pool labels as universal resource ontology. They are current SACRE task roles over a richer source/provenance structure.

## 3. Contribution 1 — a benchmarkable normative research object

The current corpus already demonstrates that a useful computational-bioethics object needs more than prompt text plus a label.

A reconstructable object includes:

- case-family identity;
- decision question;
- frame identity/version where applicable;
- representation identity;
- scenario and explicit stipulations;
- candidate identities/text/version;
- source and provenance relationships;
- policy basis / construction method;
- jurisdiction/time context where relevant;
- rights;
- lifecycle/review/exposure state;
- immutable/versioned hashes and release lineage.

This structure supports repeated computation, representation experiments, source review, later human comparison, and reproducible release.

The paper should emphasize that the normative object itself is part of the measurement apparatus. An unstable or source-misrepresented case makes downstream computational precision scientifically uninterpretable.

## 4. Contribution 2 — provenance is part of construct validity

The corpus review program supplies concrete reasons source provenance cannot be treated as decorative metadata.

Current failure modes that survived structural validation include:

1. **the source does not support the represented policy**;
2. **the candidate adds an undeclared authored clause**;
3. **the cited passage is accurate but whole-document reading reveals a material omitted position**;
4. **source pools are not actually independent**, causing a purported cross-source comparison to compare a document against itself;
5. **a source may professionally support a position currently represented as framework-derived**, so pool labels alone do not describe evidentiary support;
6. **an official source may be about a policy without being the source that states it**.

This makes source fidelity a resource-validity question. Structural validation can establish schema, geometry, identifiers, profile compatibility, and hash integrity while leaving the warrant relation wrong.

The paper can use the concise line:

> **A citation check verifies that the passage exists; only source-level review establishes what the passage and document warrant.**

Do not imply independent human source validation. Current direct-policy and bridge work remains model-assisted; whole-document review remains incomplete.

## 5. Contribution 3 — resource, task, and evaluation can now be separated empirically

The resource/task/evaluation architecture is no longer only an aspiration.

The first-pass generalization audit localized the strongest SACRE-specific coupling to:

- Public / Expert / Framework task roles;
- current `pubN` / `expN` / `fwN` aliases;
- benchmark-profile geometry and cross-source pair generation;
- aggregation semantics.

The explicit reference task `sacre-qccs-v1` was then specified and implemented as a read-only adapter.

### All-record equivalence result

Across **all 34 families / 68 records**, comparison with SACRE's prior vendor representation found:

- **0 execution/task-semantic differences**;
- exact agreement on record/version/representation identity, scenario, candidate IDs/text/order/source roles, stipulations, profile, geometry, pair semantics/count, partner counts, structural asymmetry, and required aggregation;
- **36/68 stale Bench `content_hash` values** in SACRE's older resource pin.

The 36 hash differences were provenance-only: source/provenance-bearing resource identity had changed while the task projection had not.

SACRE was re-vendored/re-pinned to merged Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

Current SACRE Full Corpus vendor SHA-256:

`7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

After refresh:

- the explicit adapter projection and SACRE vendor payload are **byte-for-byte identical**;
- SACRE Full Corpus regression tests pass;
- no model/QCCS rerun was needed because executable semantics did not change.

### Scientific point

This is more than software hygiene. It demonstrates a distinction the paper can name:

```text
RESOURCE IDENTITY
source/provenance/review-bearing object

≠

TASK-PROJECTION IDENTITY
exact fields a declared computational task consumes
```

A resource can acquire better provenance without becoming a different computational condition. Conversely, a seemingly small candidate/scenario change can be execution-relevant even if many bibliographic fields remain the same.

This distinction should become part of the paper's reproducibility contribution.

## 6. Contribution 4 — the corpus requires a many-to-many warrant ontology

The first corpus-driven ontology stress test examined M004, M028, M141 and M146 plus the live relation-level review workflow.

The result is important for the standalone paper: **source type, evidence function, policy basis, translation mode, and task role are distinct axes**.

Examples:

- one adolescent/parent survey ecology can support two different Public policy translations;
- one professional guideline can support an Expert candidate and also provide a premise for a Framework-derived candidate;
- one commercialization review supports three different Public candidates and a Framework candidate;
- one ambient-AI study supports direct public evidence, an inferred competing policy, and several framework derivations, while the source authors themselves recommend one particular consent architecture.

A simple `candidate cites source` relation loses too much information.

The stress-tested conceptual relation therefore needs separate fields for:

- **source/document type** — what the source is;
- **evidence function** — what it contributes to this candidate relation;
- **translation mode** — how the source contribution became the represented policy sentence;
- **support direction** — supports / qualifies / challenges / mixed / context-only;
- **warrant scope** — what proposition or part of the derivation the relation bears on;
- **source assertion summary** — what the source itself reports/recommends;
- **Bench bridge summary** — what editorial/normative move connects the source to the candidate;
- **relation-level review identity/fingerprint**.

This is a scientifically richer explanation of “source-grounded” than attaching references to benchmark items.

## 7. Contribution 5 — natural candidate geometry is a resource feature; aggregation is task semantics

The Full Corpus was not forced into a uniform candidate shape. Natural source ecology yields different pool geometries, including singleton source-role pools where evidence genuinely converges.

This taught two separate lessons:

1. **resource lesson:** a benchmark should not manufacture positions merely to fill a balanced matrix;
2. **task lesson:** when candidate partner counts differ, Sum aggregation creates a deterministic geometry advantage and Mean is required for current SACRE ranking semantics.

The paper should keep these levels distinct. Natural geometry belongs to the represented candidate field; the rule for what an evaluation method does with that geometry belongs to its task specification.

## 8. Contribution 6 — representation is an experimental axis, not formatting

Concise and detailed companions are distinct versioned resource snapshots of the same case family/frame. Current companion invariants preserve:

- decision question;
- candidate field;
- stipulations;

while varying scenario detail.

This means representation effects can be studied while holding task semantics fixed. P3 can therefore ask whether QCCS/ranking behavior changes under representation without conflating the result with a task-method change.

The standalone resource paper should present this as an infrastructure contribution: **representation is versioned as part of experimental design.**

## 9. Contribution 7 — review/release states must remain distinct

The current corpus deliberately separates:

- structural validity;
- source-review evidence;
- independent human review;
- freeze state;
- release state;
- public exposure / confirmatory holdout status.

Current records are draft and not independently human-reviewed. That does not prevent developmental/paper-facing execution under the present program decision, but it limits what the resource paper may claim.

Human review is a quality/release layer, not a developmental execution gate.

This architecture also prevents public cases from silently becoming future confirmatory holdouts.

## 10. The generic candidate/source-role model

The generic model is now specified on paper:

`docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`

Its central move is:

```text
resource candidate identity
+ source/evidence relations

separate from

task-local role assignment + alias
```

Canonical v1 remains untouched. The already verified adapter is the compatibility oracle for any future shadow representation or v2 schema.

The first corpus-driven stress test is:

`docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`

It supports the generic model with the warrant-ontology refinements described above.

## 11. A future second task — warranted direction, not yet mature

The resource now points naturally toward a **source-to-policy warrant task**, because the existing review program already evaluates candidate-source relations.

A later mature task could distinguish:

- source-description fidelity;
- bridge adequacy;
- disclosure of authored operational completion;
- whole-document omission sensitivity;
- support direction.

This is scientifically distinct from QCCS: it evaluates the validity of the source-to-representation relation rather than convergence among represented policies.

Do **not** present this as an existing mature second task. The relation vocabulary, independent review/adjudication protocol, and reference subset need further development first.

## 12. Recommended paper movement

A reader-led structure now has a clear argumentative sequence:

### I. Why computational bioethics needs stable normative research objects

Repeated computation is uninterpretable if scenarios, candidate positions, source construction, or representation state cannot be reconstructed.

### II. From bioethical scholarship to a benchmarkable normative object

Define case family, decision question, frame, representation, stipulations, candidate field, provenance, and lifecycle.

### III. Source grounding and the warrant problem

Explain policy basis, source relations, the failure modes found by review, and why provenance is part of construct validity.

### IV. Natural candidate fields and representation control

Explain action-distinct policies, natural geometry, concise/detailed companions, frames, and controlled stipulations.

### V. Resource → task → evaluation

Introduce the abstraction after the reader has seen why it is needed.

### VI. `sacre-qccs-v1` as the reference task

Specify role mapping, pair generation, QCCS, matrix completeness, aggregation and outputs.

### VII. Demonstrating the boundary

Report the 68-record equivalence test and 36-record provenance-only hash drift/re-pin as evidence that resource identity and task identity are genuinely separable.

### VIII. Validation and release architecture

Separate structural validation, source fidelity, model-assisted review, independent human review, freeze, release and exposure.

### IX. Toward a computational-bioethics resource ecosystem

Present the generic candidate/source-role model and future source-to-policy task as controlled extensions, with method-neutrality explicitly left as a future empirical question.

### X. Discussion

Bioethics Bench as infrastructure for making computational bioethics reproducible and inspectable rather than as a moral answer key.

## 13. Figures that now have real evidence behind them

### Figure 1 — Resource → Task → Evaluation

Show the persistent resource object, the verified `sacre-qccs-v1` projection, and evaluation conditions. Caption should state that the separation was tested across all 68 current records rather than presented as a purely conceptual diagram.

### Figure 2 — From source to represented candidate

Show:

```text
source object
   ↓ evidence function
source relation
   ↓ translation mode / Bench bridge
candidate position
   ↓ task mapping
SACRE role + alias
```

Use one current family where the same source supports different relations to make the many-to-many structure visible.

### Figure 3 — Resource identity versus task-projection identity

Use the 36-record provenance refresh:

```text
source/provenance repairs
      ↓
resource content hashes change (36/68)
      ↓
verified task semantics unchanged (0/68 differences)
      ↓
re-pin provenance, no semantic model rerun
```

This is a strong reproducibility figure because it demonstrates why one undifferentiated item hash is scientifically insufficient for change classification.

### Figure 4 — Review/release lifecycle

Construction → structural validation → source review → independent review → freeze → release, with developmental execution shown as a parallel permitted path under explicit evidence labels rather than as a release milestone.

## 14. Tables that should be prepared

1. **Corpus composition / natural geometry** — families, records, candidate counts, basis distributions, geometry profiles.
2. **Provenance ontology** — policy basis + evidence function + translation mode + support direction with examples.
3. **Validation layers** — what structural validation, citation resolution, model-assisted source review, whole-document review, independent human review, task equivalence, and computational validation each can/cannot establish.
4. **Resource/task/evaluation fields** — exact ownership of major fields.
5. **Reference-task reproducibility result** — 68/68 semantic equivalence, 36 provenance hash refreshes, post-refresh byte equivalence, regression test status.

## 15. Claim ceiling

Supported now:

- Bioethics Bench contains a substantial source-grounded resource/provenance core that is scientifically meaningful beyond SACRE execution;
- SACRE-specific semantics can be isolated as an explicit task projection;
- `sacre-qccs-v1` reproduces current execution semantics across all 68 records;
- resource-provenance identity and task-projection identity can change independently;
- the actual corpus requires a many-to-many warrant ontology richer than source labels alone;
- the architecture can preserve canonical v1 while supporting a future generalized resource model.

Not supported now:

- the corpus is independently human-reviewed;
- source fidelity is validated corpus-wide;
- QCCS is reliable or construct-valid;
- the provisional Final Policy is morally correct;
- Bioethics Bench has demonstrated method-neutrality across multiple mature tasks;
- the generic v2 schema is implemented;
- a source-to-policy warrant task has a frozen reference protocol;
- human-model correspondence has been established.

## 16. P1/P2/P3 writeback

### P1

No broad P1 rewrite follows automatically. The warrant ontology strengthens existing P1 claims about explicit representation/provenance if a targeted correction or illustration is later useful.

### P2

P2 v49 should **not** be reopened to absorb this standalone resource contribution. The verified adapter/provenance result may justify a targeted factual update only if a current P2 sentence describes task/resource separation as merely aspirational. Otherwise preserve the composed submission manuscript.

### P3

The result has a direct protocol consequence: P3 should freeze **resource snapshot**, **task specification**, and **evaluation/execution condition** separately. It should not use a single undifferentiated “benchmark version” field as the only experimental identity.

## 17. Next manuscript dependency

The standalone paper plan can now be revised around these demonstrated findings. Before claiming a mature second task family or implementing a generalized schema, continue source-review work and use it to stabilize the warrant-relation vocabulary.

**CURRENT STANDALONE PAPER EVIDENCE SURFACE.**
