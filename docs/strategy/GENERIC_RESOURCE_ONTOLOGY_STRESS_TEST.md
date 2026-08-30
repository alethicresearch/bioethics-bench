# Bioethics Bench — Generic Resource Ontology Stress Test

**Status:** first corpus-driven stress test complete  
**Date:** 2026-08-30  
**Scope:** four structurally and evidentially different current Full Corpus families plus the live relation-level review workflow  
**Depends on:** `GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`

## Purpose

The generic candidate/source-role model should be driven by the corpus rather than by an abstract desire for a cleaner schema. This stress test asks whether the proposed separation among **candidate identity**, **source/evidence objects**, **warrant-bearing source relations**, and **task-role assignments** can represent actual difficult current cases without losing information that matters scientifically.

The sampled families were selected for different pressures:

- **M004 — Adolescent confidentiality for sensitive care:** 2×1×2 geometry; public policies inferred from different constituencies represented in overlapping survey evidence; singleton professional pool; multi-source professional synthesis.
- **M028 — Continued organ support after death by neurologic criteria:** 2×1×3 geometry; direct public-policy evidence with Bench-authored operational completion; professional guidance; framework positions drawing partly on the same professional/empirical sources.
- **M141 — Commercial partnership using health-system data:** 3×2×3 geometry; the same commercialization literature supports multiple public positions and a framework-derived position; expert task role contains both direct-policy and inferred policy bases; live whole-document review asks whether a source bears on other candidates.
- **M146 — Ambient AI recording for clinical documentation:** 2×1×3 geometry; one empirical study supports direct public evidence, a competing inferred public policy, and three different framework derivations; the source itself recommends an opt-in approach while some Bench constructions use its empirical findings toward other policies.

These families are not intended as a representative statistical sample. They are **ontology stressors**: cases likely to expose whether a supposedly generic model is actually hiding SACRE assumptions or collapsing different evidentiary relationships.

## 1. Result in one sentence

The proposed resource/task separation survives the stress test, but the source-relation object needs to be **richer than a simple source-class + supports-candidate link**.

The corpus requires explicit representation of:

1. many-to-many source ↔ candidate relations;
2. source document type separate from evidentiary class;
3. evidentiary class separate from task role;
4. support direction and scope;
5. the degree of editorial/normative translation from source to executable policy;
6. candidate-level synthesis across multiple source relations;
7. relation-level review state/fingerprints;
8. the possibility that one source both supports one relation and challenges or qualifies another.

These are resource/provenance requirements. They should not be encoded by forcing every source or candidate into a permanent Public / Expert / Framework identity.

## 2. M004 — one source ecology, two public policies, one professional synthesis

M004 uses two public candidates, one expert candidate and two framework candidates.

The public layer demonstrates immediately why `source_pool = public` cannot carry the full epistemic meaning of a candidate. The same adolescent-parent confidentiality literature supports two different policy translations:

- `pub1` translates adolescent attitudes and access concerns toward strong confidentiality;
- `pub2` translates parent-attitude evidence toward broader parental information access with protected private care.

The useful resource-level facts are therefore not simply “both are public.” They include:

- which population or constituency the evidence describes;
- what was measured—attitude/preference rather than an institutional policy vote;
- which candidate proposition the evidence bears on;
- that the final policy wording is a **source-informed policy inference**, not a directly issued respondent policy.

The singleton expert candidate adds another pressure. `exp1` is a synthesis across AAP, SAHM and ACOG guidance. A generic resource should not need to create one synthetic “expert source” merely because one candidate has several professional warrants. The candidate can remain one represented policy while carrying several source relations plus a candidate-level synthesis statement.

### Ontology consequence

A source relation needs at least:

```text
source_id
candidate_id
support_direction
relation_type / evidence_function
translation_mode
warrant_scope
constituency_or_population where relevant
review_state
```

Candidate-level provenance then explains how several relations were synthesized into one executable position.

## 3. M028 — “direct-policy evidence” can still contain authored operational completion

M028 is especially useful because the public candidates are classified as `direct-policy-evidence`, yet their provenance explicitly says the Bench completed the policy into an executable institutional rule.

For `pub1`, the underlying survey directly asked whether hospitals should be required to continue treatment after family rejection of brain death, while the **defined accommodation and transfer period** is Bench-authored operational completion. `pub2` likewise uses a directly elicited orientation while adding transition/transfer safeguards.

This shows that `policy_basis = direct-policy-evidence` should remain a valuable coarse classification, but it is not sufficient to describe **how much of the executable candidate is directly present in the source**.

The expert and framework candidates expose a second issue. The same 2023 BD/DNC professional guideline can support:

- an `expert` task candidate as direct professional policy guidance;
- a `framework` task candidate as one premise in public-standard/professional-integrity reasoning;
- another framework position as one premise in proportional accommodation reasoning.

The document's bibliographic `source_type = guideline` does not determine the candidate's task role or the relation's epistemic function.

### Ontology consequence

Add an explicit **translation/representation extent** axis. A workable initial vocabulary is:

```text
direct-statement
close-policy-paraphrase
operational-completion
source-informed-policy-inference
framework-derivation
composite-synthesis
```

This axis should coexist with `policy_basis` rather than replace it. It answers a different question: **how did this source become this particular represented sentence?**

## 4. M141 — source type, evidence class, policy basis and task role are four different axes

M141 provides the clearest demonstration that these categories must not be collapsed.

### Same public literature, multiple candidate relations

The Walshe commercialization review contributes to:

- `pub1`: governed collaboration without specific permission under safeguards — source-informed inference;
- `pub2`: fair-value / benefit-sharing condition — source-informed inference;
- `pub3`: specific commercial permission — direct-policy evidence in the current record;
- `fw3`: informational-autonomy / purpose-limitation framework derivation.

A single source object therefore participates in several candidate relations with different evidentiary functions and different task roles.

### Same task role, different policy bases

The Expert pool contains:

- `exp1`: an inferred commercial-partnership policy built from AHA data-sharing principles;
- `exp2`: a more directly grounded fair-benefit/fair-value policy adapted from DHSC/NHS guidance.

Task role `expert` cannot substitute for `policy_basis` or translation mode.

### Whole-document review is already relation-oriented

The live M141 review task asks not only whether each candidate's bridge accurately describes its cited evidence, but whether the **same source document takes a position on another dimension represented elsewhere in the family**. That is naturally expressed as relation-level review:

```text
candidate ↔ source relation under review
plus possible source ↔ other-candidate relevance
```

The current review-unit fingerprints already behave like early relation identities: a repair to one unit need not invalidate unrelated units.

### Ontology consequence

A future source relation should be independently addressable and versionable enough to support review/adjudication without re-identifying the whole candidate or record.

It should carry a **support direction** such as:

```text
supports
qualifies
challenges
mixed
context-only
```

and a **warrant scope** identifying what part of the candidate or derivation the relation supports.

## 5. M146 — one study can support, qualify, and challenge different constructions

M146 places the most pressure on a simple provenance model.

One 2025 ambient-documentation study supplies:

- measured consent behavior and disclosure sensitivity for `pub1`;
- evidence used to infer `pub2`'s default-with-opt-out policy;
- empirical premises for `fw1`, `fw2`, and `fw3` framework-derived policies.

But the source's authors themselves recommend an **opt-in** approach with flexible multimodal implementation. The live review task therefore explicitly asks whether reading the whole document reveals a position bearing on competing candidates.

This means the relation between a source and a candidate cannot be summarized by `source is cited by candidate`.

For example, the same source can plausibly have:

```text
source → pub1 : directly supports / close policy recommendation
source → pub2 : informs empirical premise, but source recommendation may qualify or oppose the completed institutional rule
source → fw2  : provides empirical premise about workflow/comfort, not the normative framework itself
source → fw3  : provides empirical premise about sensitivity to encounter/data context
```

A generic ontology that assigns the study once to a single `public` source class and inherits that meaning everywhere would lose exactly the distinctions the review program is trying to audit.

### Ontology consequence

The relation object should distinguish **what the source says** from **what the Bench derives from it**.

A useful relation shape is therefore closer to:

```json
{
  "source_relation_id": "sr-...",
  "source_id": "src-...",
  "candidate_id": "cand-...",
  "support_direction": "supports",
  "evidence_function": "empirical-premise",
  "translation_mode": "framework-derivation",
  "warrant_scope": "sensitivity of consent/comfort to data handling and encounter context",
  "source_assertion_summary": "...",
  "bench_bridge_summary": "...",
  "review": { "...": "..." }
}
```

That separation would make it possible to say that the empirical findings are accurately described while the source's own recommendation points in a different direction from a Bench-authored completion.

## 6. Vocabulary revisions required by the stress test

The initial generic model proposed a single `relation_type` vocabulary. The corpus indicates that one field would mix questions that need to remain separate.

Use at least four axes.

### A. Source/document type

What kind of object is the source?

Examples:

```text
article
survey
systematic-review
guideline
professional-policy
government-policy
statute
court-decision
book
normative-framework
institutional-policy
other
```

This is bibliographic/resource metadata.

### B. Evidence function

What does the source contribute to this candidate relation?

Initial vocabulary:

```text
direct-policy-recommendation
policy-orientation
preference-or-attitude-evidence
behavior-or-choice-evidence
empirical-premise
professional-principle-or-guidance
legal-or-regulatory-constraint
normative-framework-premise
scenario-context
counterevidence-or-qualification
```

One source can have different evidence functions for different candidates.

### C. Translation mode

How did the source contribution become the represented policy sentence?

Initial vocabulary:

```text
direct-statement
close-policy-paraphrase
operational-completion
source-informed-policy-inference
framework-derivation
composite-synthesis
```

This is related to but more granular than current `policy_basis`.

### D. Support direction

How does the source bear on the represented proposition under review?

```text
supports
qualifies
challenges
mixed
context-only
```

This allows whole-document review findings to be represented without pretending every citation is purely supportive.

## 7. Additional fields the actual review workflow requires

The live M141/M146 review system reveals several useful requirements that were not explicit enough in the initial model.

### Relation-level review identity

A source relation should support:

- stable relation ID;
- relation version or fingerprint;
- review state;
- reviewer / review method;
- reviewed-at timestamp;
- adjudication notes;
- proposed repair / supersession lineage.

The current `u1:...` fingerprints demonstrate why this granularity matters: unrelated record changes should not invalidate a review of a still-identical warrant unit.

### Source assertion versus Bench bridge

Store separately:

- **source_assertion_summary** — what the source itself reports/recommends;
- **bench_bridge_summary** — the inferential/editorial move from that source material to the represented candidate.

This distinction is especially important for source-informed inference and framework derivation.

### Candidate-level synthesis provenance

When one candidate combines several relations, retain a candidate-level synthesis explanation. Do not force each individual source relation to pretend it alone entails the full policy.

## 8. Task role remains cleanly separable after the stress test

None of the sampled families requires `public`, `expert`, or `framework` to remain part of universal candidate identity.

Instead, the generic resource can represent its source relations faithfully, while `sacre-qccs-v1` provides the task-local mapping:

```text
resource candidate → SACRE task role → legacy task alias
```

This is especially important because:

- a professional guideline can support both an Expert candidate and a Framework-derived candidate;
- an empirical patient/public study can support Public candidates and provide premises for Framework candidates;
- the same public evidence source can support multiple competing public policy translations;
- task role and policy basis can differ even within the same pool.

The equivalence-verified v1 adapter remains the migration oracle for preserving current execution.

## 9. Frame and representation also survive intact

The sample supports keeping **frame** and **representation** distinct from both candidate identity and task.

M028, M141, and M146 use an explicit `natural` frame. M004 currently has no separate frame identifier but still fits the same conceptual structure. Concise/detailed companions preserve candidate field and stipulations while changing scenario representation.

A future generalized resource can therefore factor an experimental object as:

```text
case family
× frame
× representation
× task
× evaluation condition
```

This factorization remains scientifically useful and did not break under the sampled cases.

## 10. Revised minimal conceptual relation object

The stress-tested minimum is now:

```json
{
  "source_relation_id": "sr-...",
  "candidate_id": "cand-...",
  "source_id": "src-...",
  "evidence_function": "preference-or-attitude-evidence",
  "translation_mode": "source-informed-policy-inference",
  "support_direction": "supports",
  "warrant_scope": "...",
  "source_assertion_summary": "...",
  "bench_bridge_summary": "...",
  "review": {
    "state": "...",
    "unit_fingerprint": "...",
    "reviewed_by": [],
    "reviewed_at": null,
    "notes": null
  }
}
```

This is still conceptual. Exact schema syntax and vocabularies remain unapproved.

## 11. What the stress test changes in the generic model

The generic model is **supported with revisions**, not rejected.

Keep:

- candidate identity separate from task alias;
- source objects separate from candidates;
- source relations as first-class warrant-bearing objects;
- task-role mapping outside intrinsic candidate identity;
- frame/representation/task/evaluation separation;
- resource hash distinct from future task-projection hash;
- conservative shadow-migration strategy.

Refine:

- replace one overloaded `relation_type` with separate `evidence_function`, `translation_mode`, and `support_direction` axes;
- add separate source-assertion and Bench-bridge summaries;
- make relation-level review/fingerprint a first-class design requirement;
- preserve candidate-level synthesis provenance for multi-source candidates;
- permit many-to-many source/candidate relationships explicitly.

## 12. Implication for a future source-to-policy warrant task

The stress test strengthens the scientific case for a later warrant task, because the current corpus already contains the distinctions such a task would evaluate.

A mature task might separately score or adjudicate:

1. **source-description fidelity** — did the record accurately state what the source found or recommended?;
2. **bridge adequacy** — does that source material warrant the represented policy inference?;
3. **translation disclosure** — is authored operational completion/derivation made explicit?;
4. **omission sensitivity** — does the source itself contain a material position bearing on competing candidates that the relation failed to represent?;
5. **support direction** — does the whole source support, qualify, challenge, or mix with the represented candidate?

This is meaningfully different from QCCS. It concerns the validity of the source-to-representation relation rather than convergence among represented policies.

It should remain a future task until the review ontology and adjudication/reference process are sufficiently mature.

## 13. Paper-facing conclusion

The corpus provides concrete evidence for the paper's resource/task distinction.

The generality claim no longer rests only on aspiration. The current records themselves contain structures that are scientifically meaningful outside SACRE—candidate identity, source provenance, policy basis, representation, frame, review state, and warrant-bearing relations—while the verified adapter shows that SACRE-specific task roles and geometry can be layered over them without changing execution semantics.

The stress test also prevents overclaiming. Bioethics Bench has **not** demonstrated performance across multiple mature task families. What is now supported is more precise:

> the current resource contains a method-reusable epistemic core; SACRE-specific execution can be isolated as an explicit verified task projection; and the actual corpus requires a richer many-to-many warrant ontology that can support future source-fidelity and computational-bioethics research without erasing canonical v1.

## 14. Next dependency

The generic ontology is now sufficiently concrete to support the **standalone Bioethics Bench manuscript architecture** and a later shadow-schema prototype. The next step should not be canonical schema code.

Next:

1. write the resource/task/evaluation and source-relation model into the standalone Bench paper plan/manuscript-facing evidence surface;
2. continue source review, allowing the review process to refine the relation vocabularies;
3. only after that, design a shadow generalized representation and task-projection hash for testing alongside v1;
4. keep a second non-SACRE task prospective until its protocol/reference layer is mature.

**COMPLETE FOR FIRST CORPUS-DRIVEN ONTOLOGY STRESS TEST. NO SCHEMA MIGRATION AUTHORIZED.**
