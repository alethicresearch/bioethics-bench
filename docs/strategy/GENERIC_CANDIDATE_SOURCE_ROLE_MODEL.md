# Bioethics Bench — Generic Candidate and Source-Role Resource Model

**Status:** architecture specification; no canonical schema migration authorized  
**Date:** 2026-08-30  
**Depends on:** `BIOETHICS_BENCH_GENERALIZATION_AUDIT.md` and the equivalence-verified `sacre-qccs-v1` task contract

## Purpose

Bioethics Bench now has an empirically verified boundary between its source-grounded resource objects and the first mature task applied to them. The `sacre-qccs-v1` adapter reproduces current SACRE semantics across all 34 families / 68 records, while the current schema still encodes some SACRE-specific structure directly in each record. This document defines the **future generic resource model on paper** before any schema change is attempted.

The objective is not abstraction for its own sake. The model must do two things at once:

1. preserve the exact scientific identity, provenance, and executable meaning of canonical v1; and
2. allow the same source-grounded normative objects to support future computational-bioethics tasks without requiring every task to pretend that its ontology is SACRE's Public / Expert / Framework comparison structure.

Nothing here changes canonical v1 records, hashes, manifests, or current SACRE execution. A schema migration would be a separately versioned future decision with its own compatibility tests.

## 1. The central distinction

The current v1 representation places three different questions close together:

1. **What normative position is represented?**
2. **What evidence/source lineage supports or generated that representation?**
3. **What role does a particular computational task assign that position?**

Those questions often coincide in SACRE v1, but they are not logically identical.

A candidate may be grounded in public-attitude evidence and therefore mapped to SACRE's `public` role. Yet “public” describes two different things:

- a **resource-level evidentiary relationship**: the represented policy is grounded in evidence from an affected public, patient group, community, citizen sample, advocacy constituency, or similar source ecology;
- a **task-level role**: SACRE places that candidate in the Public pool and compares it only with candidates in the other two task roles.

The first fact should survive if SACRE disappears. The second exists because a particular task needs it.

The generic model therefore separates **candidate identity**, **source/evidence relations**, and **task-role assignment**.

## 2. Proposed conceptual objects

```text
CASE FAMILY
  └─ FRAME
      ├─ REPRESENTATION(S)
      │   └─ scenario / decision question / stipulations
      └─ CANDIDATE FIELD
          ├─ CANDIDATE POSITION
          │   ├─ text / version
          │   ├─ policy basis / construction lineage
          │   └─ SOURCE RELATION(S) ──→ SOURCE / EVIDENCE OBJECT(S)
          └─ ...

TASK SPECIFICATION
  ├─ selects frame + representation
  ├─ maps candidate IDs → task roles / aliases
  ├─ defines operations / pairings / measurements
  └─ defines task outputs

EVALUATION CONDITION
  ├─ evaluator/model/human
  ├─ provider/configuration
  ├─ repeats/retries
  ├─ perturbation assignment
  └─ metrics / analysis plan
```

The case family, frame, representations, candidates, and source relations belong to the resource. Task roles and aliases belong to the task. Models, humans, retries, repetitions, and experimental assignments belong to evaluation.

## 3. Candidate position as a first-class resource object

A future generic candidate should be a normative object with a stable identity independent of its role in one task.

Conceptually:

```json
{
  "candidate_id": "cand-...",
  "version": "1.0.0",
  "text": "...",
  "object_type": "policy-position",
  "policy_basis": "direct-policy-evidence",
  "construction_provenance": { "...": "..." },
  "source_relations": ["sr-...", "sr-..."],
  "content_hash": "sha256:..."
}
```

### Candidate identity

A generic `candidate_id` should identify the represented position itself, not encode its task role. It therefore should not require `pub`, `exp`, or `fw` prefixes.

This does **not** mean renaming current v1 candidates. `pub1`, `exp1`, and `fw1` remain canonical identifiers inside the v1 compatibility lineage. A future generalized representation could assign opaque/stable resource candidate IDs and let the `sacre-qccs-v1` adapter expose the legacy task aliases deterministically.

### Candidate object type

The current executable corpus intentionally compares actionable policy positions. A generic resource may later contain other scholarly objects—principles, factual claims, rationales, source passages, stakeholder concerns—but they should not be silently treated as interchangeable candidates. `object_type` should make the distinction explicit.

For current v1 compatibility:

```text
object_type = policy-position
```

for every executable candidate.

### Policy basis remains intrinsic provenance

The current `policy_basis` distinctions remain scientifically valuable independent of SACRE:

- `direct-policy-evidence`
- `source-informed-policy-inference`
- `framework-derived-policy`
- `synthetic-author-constructed-policy`

They describe **how the represented policy came to exist**, not which task role it occupies. Preserve this axis in the generic resource.

## 4. Source and evidence objects

A source-grounded resource needs a clearer distinction between a **document/source object** and the **relationship by which that source warrants a represented candidate**.

A future source object could hold bibliographic and rights/identifier information:

```json
{
  "source_id": "src-...",
  "citation": "...",
  "source_type": "guideline",
  "doi": null,
  "pmid": "...",
  "url": "...",
  "jurisdiction": null,
  "as_of_date": "2026-08-27"
}
```

The source object alone does not say that it warrants a candidate. That belongs in a separate relation.

## 5. Source relation as the warrant-bearing object

The scientifically important unit is often not “candidate has citation X” but rather:

> **What relation is being asserted between source X and represented position Y?**

A future relation object should make that assertion explicit.

Conceptually:

```json
{
  "source_relation_id": "sr-...",
  "candidate_id": "cand-...",
  "source_id": "src-...",
  "relation_type": "supports-policy",
  "evidence_class": "public-attitude-evidence",
  "construction_method": "adapted-from-source",
  "warrant_summary": "...",
  "scope": "...",
  "review_state": "model-assisted-reviewed"
}
```

### Relation type

A controlled relation vocabulary should distinguish, at minimum, relationships such as:

- `directly-states-policy`
- `supports-policy`
- `informs-policy-inference`
- `documents-preference-or-attitude`
- `documents-practice-or-behavior`
- `provides-empirical-premise`
- `provides-normative-framework`
- `provides-legal-or-regulatory-constraint`
- `challenges-policy`
- `contextualizes-scenario`

The exact vocabulary needs later corpus-driven refinement. The important architectural point is that **a source citation and a warrant claim are distinct objects**.

This structure is directly useful to the current source-review program because a whole-document omission finding may add or revise a source relation without changing executable candidate text.

## 6. Source class is resource metadata; task role is a task mapping

A generic source/evidence classification can remain in the resource because it describes the source ecology. It should be richer and less task-prescriptive than SACRE's three roles.

Possible resource-level classes include:

- affected-public / patient / community evidence;
- general-population evidence;
- advocacy or organized-stakeholder position;
- professional guidance or consensus;
- expert policy analysis;
- empirical scientific evidence;
- law / regulation / court decision;
- institutional policy;
- normative philosophical framework;
- religious or cultural normative framework;
- mixed / composite evidence.

A task specification may then map those resource relations into whatever roles it needs.

For `sacre-qccs-v1`:

```text
selected candidate A → task role public    → alias pub1
selected candidate B → task role expert    → alias exp1
selected candidate C → task role framework → alias fw1
```

Another future task might ignore these three roles entirely and instead ask whether a candidate is adequately warranted by its cited source, retrieve the best supporting source, identify disagreement among source objects, or classify construction method.

## 7. Task-role assignment is many-to-one and task-local

A task role should be represented as an assignment in the task contract or task view, not as the candidate's universal identity.

Conceptually:

```json
{
  "task_protocol_id": "sacre-qccs-v1",
  "candidate_mapping": [
    {
      "candidate_id": "cand-a",
      "task_role": "public",
      "task_alias": "pub1"
    },
    {
      "candidate_id": "cand-b",
      "task_role": "expert",
      "task_alias": "exp1"
    }
  ]
}
```

A candidate should normally receive one role within a given SACRE task instance, but the resource model should not assume that the same candidate must receive the same role under every future task.

This also avoids forcing a future source object with mixed provenance into an artificial universal category merely because SACRE needs mutually exclusive execution pools.

## 8. Frame remains a resource-level selection object

The existing `frame_id` / `frame_version` distinction is valuable and should be preserved.

A case family may support multiple defensible candidate fields:

- natural source ecology;
- direct-evidence-only frame;
- source-informed frame;
- matched comparison frame;
- future scientifically justified constructions.

A frame answers:

> **Which represented normative field is this resource object making available?**

A task then consumes one frame. This is different from the task deciding what to do with the selected candidates.

A generic frame therefore should identify:

- frame identity/version;
- candidate membership;
- candidate ordering where ordering is scientifically meaningful;
- rationale for the field's construction;
- inclusion/exclusion logic;
- relation to companion frames;
- exposure/release state.

## 9. Representation remains separate from frame

Concise and detailed companions represent the same selected normative field under different scenario representations. The current invariant remains scientifically useful:

- same decision question;
- same stipulations;
- same candidate membership and candidate text;
- different scenario representation/detail.

This allows P3 to vary representation while holding frame and task constant.

The generic model should therefore preserve the orthogonality of:

```text
case family
× frame
× representation
× task
× evaluation condition
```

That factorization is more valuable scientifically than a single monolithic “benchmark item” identifier.

## 10. Resource truth versus task truth

The verified `sacre-qccs-v1` work exposed an important distinction that should become a permanent design principle.

Thirty-six current Bench records had newer whole-resource `content_hash` values than SACRE's older pin, while every execution-relevant field matched. The adapter could therefore show:

```text
resource provenance identity changed
execution/task semantics did not change
```

The generic architecture should preserve this distinction explicitly.

A future resource should support at least two fingerprints:

1. **resource-content identity** — includes source/provenance/review-bearing material;
2. **task-projection identity** — hashes the exact fields consumed by a declared task.

This would make change classification machine-checkable rather than relying solely on human inspection.

It does not eliminate the canonical record `content_hash`; it adds a more precise task-level projection hash where scientifically useful.

## 11. Proposed generic resource/task boundary

### Intrinsic resource state

- case family identity;
- frame identity/version and candidate membership;
- representation identity and scenario text;
- decision question and stipulations;
- candidate resource identities/text/version;
- policy basis;
- construction provenance;
- source/evidence objects;
- source relations / warrant summaries;
- jurisdiction/time context;
- rights;
- review/lifecycle/exposure state;
- resource hashes and lineage.

### Task-specific state

- selected resource frame/representation;
- candidate inclusion if the task uses a subset;
- role assignments;
- task-local aliases;
- pair-generation or other operation graph;
- measurement/instruction protocol;
- aggregation/ranking semantics;
- required outputs;
- task-projection hash.

### Evaluation-specific state

- evaluator type;
- provider/model/version;
- prompt realization where task permits variants;
- decoding/configuration parameters;
- repetitions;
- retry/exclusion policy;
- perturbation assignment;
- human-interface condition;
- analysis/metric version.

## 12. Canonical v1 compatibility projection

No future architecture is acceptable unless it can reproduce canonical v1 deterministically.

For every current record, a generalized shadow representation would need to map back to exactly:

```text
candidate_pools.public[]     + aliases pubN
candidate_pools.expert[]     + aliases expN
candidate_pools.framework[]  + aliases fwN
benchmark_profile
required_aggregation
scenario
record/version/frame/representation identity
```

and produce the current `sacre-qccs-v1` task projection without semantic change.

The already-verified adapter supplies the reference behavior for this future migration test.

## 13. What should *not* move into the generic resource

Avoid encoding these as intrinsic resource truth:

- QCCS scores;
- model rankings;
- provisional Final Policy;
- `correct_policy` / moral gold labels;
- model/provider identities;
- temperature or retry settings;
- SACRE pair matrices;
- task-specific aliases as universal candidate IDs;
- confirmatory holdout assignments after exposure;
- assumptions that every computational-bioethics method must use three source roles.

Measured outputs belong to run/evaluation artifacts. Moral ground truth is not presumed.

## 14. A scientifically useful second task

The next task should not be invented merely to prove extensibility. The strongest candidate emerging from current work is a **source-to-policy warrant task**, because the resource already contains and is actively improving the necessary evidence relationships.

A future task could ask an evaluator to determine, for a specified candidate-source relation:

- whether the source directly states, supports, merely informs, or fails to warrant the represented policy;
- where the relevant warrant occurs;
- whether the editorial bridge adds a normative inference not contained in the source;
- what confidence or adjudication state applies.

This would test a different scientific question from SACRE/QCCS while using the same resource objects. It would also connect directly to release quality rather than manufacturing a decorative benchmark task.

**However, it should not yet be called a mature second task family.** The current source-review process should first stabilize the relation vocabulary, adjudication protocol, and suitable independently reviewed subset.

## 15. Migration sequence — deliberately conservative

A future generalized schema should proceed only through these gates:

1. **Conceptual model** — this document. No record changes.
2. **Corpus-driven ontology review** — test the proposed source relation/class vocabulary against representative families and review findings.
3. **Shadow representation** — generate generalized objects alongside canonical v1 without replacing them.
4. **Deterministic v1 compatibility projection** — generalized objects must reproduce current `sacre-qccs-v1` semantics.
5. **Equivalence tests** — all canonical records, not a sample.
6. **Second-task scientific protocol** — only if the research question and evidence support it.
7. **Versioned schema/release decision** — explicit new schema lineage with migration record; never silently reinterpret v1.

Until those gates are met, canonical v1 remains the authoritative executable resource.

## 16. Implications for the standalone Bioethics Bench paper

This model sharpens the paper's generalization argument.

The paper need not claim that the resource has already demonstrated method-neutral performance across multiple methods. A stronger and more defensible sequence is:

1. systematic normative computation required source-grounded, versioned research objects;
2. constructing those objects required identity, provenance, representation, lifecycle, and warrant-bearing source relations that exceed the needs of SACRE execution itself;
3. the first generalization audit identified the SACRE-specific boundary;
4. the explicit `sacre-qccs-v1` adapter then reproduced current execution semantics across all 68 records;
5. a generic candidate/source-role model can therefore be specified without discarding the tested v1 lineage;
6. future tasks can test whether this architectural generality becomes empirical task generality.

The contribution is not “one schema can express anything.” It is a controlled separation between **what the bioethical research object is**, **what operation is applied to it**, and **how that operation is evaluated**.

## 17. Claim ceiling

Supported now:

- candidate identity can be conceptually separated from SACRE task alias/role;
- source/evidence identity can be separated from the warrant relation linking a source to a represented policy;
- frame, representation, task, and evaluation condition are distinct experimental axes;
- current v1 provides a deterministic compatibility target through the equivalence-verified adapter;
- resource-level and task-projection identity can diverge without execution-semantic drift;
- a non-breaking generalized resource model is therefore technically and scientifically plausible.

Not yet supported:

- a generalized v2 schema has been implemented or validated;
- every current candidate/source relation has been normalized into the proposed relation ontology;
- Bioethics Bench has demonstrated method-neutrality across multiple mature computational tasks;
- the proposed source-to-policy warrant task has a frozen protocol or independent human ground/reference layer;
- independent human source fidelity has been established corpus-wide.

## 18. Next dependency

Before any schema code is written, perform a **corpus-driven ontology stress test** of this conceptual model against representative case families and current review findings. The test should ask where the proposed candidate/source/relation objects fit cleanly, where they lose information, and what relation/source-class vocabulary the actual corpus requires.

**COMPLETE FOR GENERIC RESOURCE-MODEL SPECIFICATION STAGE. NO SCHEMA MIGRATION AUTHORIZED.**
