# Bioethics Bench task contract — `sacre-qccs-v1`

**Contract status:** specified; equivalence verification against the current SACRE vendor/runtime is the next gate.  
**Contract version:** 0.1.0  
**Task protocol id:** `sacre-qccs-v1`  
**Measurement protocol:** SACRE `qccs-v1`, version 1.0.0, operationalization `conv+`  
**Date:** 2026-08-29

This document makes explicit the task-layer semantics that are currently distributed across Bioethics Bench records/profiles and the SACRE implementation. It is the first concrete artifact produced from `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`.

The contract is deliberately **non-breaking**. It does not alter any canonical Bioethics Bench v1 record, candidate, hash, profile, aggregation requirement, or SACRE result. Until the equivalence test is implemented and passes, this document is a specification of the current intended projection rather than a claim that a new adapter has replaced the existing vendor path.

## 1. Separation of objects

A reproducible SACRE/Bench execution should identify two objects separately.

### Resource snapshot

The selected Bioethics Bench record supplies the represented normative object:

- `record_id` and `case_id`;
- `frame_id` / `frame_version` where declared;
- record `version` and `content_hash`;
- `representation.form` (`concise` or `detailed` for the current Full Corpus companions);
- `decision_question`;
- `scenario` and declared stipulations;
- candidate policy text and resource provenance;
- resource lifecycle/review/rights state.

### Task specification

`sacre-qccs-v1` supplies the operation applied to that resource object:

- mapping of candidates into the three SACRE source roles `public`, `expert`, and `framework`;
- task-local candidate aliases (`pubN`, `expN`, `fwN`) for the current v1 lineage;
- unordered cross-source pair generation;
- QCCS measurement protocol and scoring operationalization;
- completeness rule;
- aggregation-compatibility rule;
- ranking and provisional Final Policy semantics.

Model/provider parameters, retry policy, repetition count, perturbation assignment, and human-vs-model evaluator are **evaluation/execution conditions** layered over the task; they are not intrinsic properties of the Bench resource.

## 2. Current v1 resource-to-task projection

For each selected Bench record:

| Resource field | `sacre-qccs-v1` use |
|---|---|
| `scenario` | Scenario shown for every QCCS pair in that record execution. |
| `candidate_pools.public[]` | SACRE Public policy candidates. Current ids must use `pubN`. |
| `candidate_pools.expert[]` | SACRE Expert policy candidates. Current ids must use `expN`. |
| `candidate_pools.framework[]` | SACRE Framework policy candidates. Current ids must use `fwN`. |
| candidate `text` | Policy text shown in pairwise QCCS measurement. |
| `benchmark_profile` | Validates the current candidate geometry, lineage, supported representations, and expected cross-source pair count. |
| resolved `required_aggregation` | Enforces Mean when unequal cross-source partner counts would make Sum geometry-biased. |
| record/version/hash/frame/representation/stipulation ids | Carried as provenance so a later reader can establish exactly what object was executed. |

Candidate provenance, `policy_basis`, source citations, review state, and rights are scientifically important resource metadata even though current SACRE pair scoring does not need them to calculate a QCCS score. Their separation from the computational projection must never be read as making source fidelity optional.

## 3. Source-role mapping and aliases

Current canonical v1 mapping:

```text
candidate_pools.public     → source role public     → aliases pub1, pub2, ...
candidate_pools.expert     → source role expert     → aliases exp1, exp2, ...
candidate_pools.framework  → source role framework  → aliases fw1, fw2, ...
```

For current v1 records, the adapter must validate both pool membership and alias prefix. A mismatch is an error; it must not silently infer a different role or rewrite the candidate id.

The alias convention is part of the **current SACRE task projection**, not a requirement for every future Bioethics Bench task or generalized resource schema.

## 4. Pair-generation rule

Let `C` be the candidate set for one selected record and `role(c)` its mapped SACRE source role.

The required QCCS matrix contains every unordered pair `{a,b}` satisfying:

```text
a != b
role(a) != role(b)
```

Same-source pairs are excluded. Each unordered cross-source pair occurs exactly once.

The canonical pair key is the two candidate aliases sorted lexically and joined with `-`, matching the current SACRE implementation.

For pool sizes `P`, `E`, and `F`, the expected number of QCCS cells is:

```text
P×E + P×F + E×F
```

The adapter must verify that this derived count agrees with the record's registered `benchmark_profile.cross_source_pairs`. A disagreement is a task-projection error and execution should stop rather than silently continue.

## 5. Measurement contract — QCCS v1

The canonical measurement object is SACRE `qccs-v1`, protocol version 1.0.0.

**Construct.** Normative convergence is the degree to which two represented policy candidates align in what they recommend should be done in the stated scenario.

**Operationalization.** `conv+` only for `qccs-v1`:

- integer score;
- minimum 0;
- maximum 100;
- 0 = no positive normative convergence represented on this scale;
- 100 = full normative convergence in what the two candidates recommend for the scenario.

The floor does not distinguish orthogonality from opposition. Signed or divergence-only alternatives are different measurements and must not be pooled under `qccs-v1`.

**Response contract.** One integer score plus a brief justification.

The executed run must preserve the QCCS protocol id, version, protocol hash, scoring mode, model/provider/configuration, and prompt hashes needed to reconstruct the measurement condition. The current canonical prompt wording remains owned by the SACRE repository; this Bench task contract references it rather than copying an independently editable prompt that could drift.

## 6. Matrix-completeness rule

All required cross-source cells must be successfully measured before an official SACRE ranking or provisional Final Policy is produced.

If any expected pair is missing, null, or errored:

- retain the measured QCCS cells for diagnostic/retry purposes;
- mark the aggregation as incomplete;
- do **not** publish an official ranking;
- do **not** name a provisional Final Policy.

A retry/exclusion policy belongs to the evaluation protocol. It must be declared separately and cannot turn an incomplete matrix into a complete one by silently dropping a required pair.

## 7. Aggregation-compatibility rule

For each candidate, define its cross-source partner count as the number of candidates in the other two source roles.

If all candidates have the same partner count, the candidate geometry is structurally symmetric and current v1 does not impose a Mean requirement. The present reference baseline uses **Sum** unless a separately declared execution condition specifies another compatible aggregation.

If partner counts differ, Sum would give candidates with more cross-source partners more terms in their total even if every QCCS cell were identical. For that geometry:

```text
required_aggregation = mean
```

The task adapter must independently derive this requirement from the actual mapped candidate set and verify it against the Bench release/profile declaration. A disagreement is an error.

If Mean is required but another aggregation is selected:

- retain measured cells;
- mark the run `aggregation-mode-incompatible`;
- withhold official rankings and provisional Final Policy.

For the current Bench reference task, candidate weights are fixed at the default 1.0/absent. Any weighted ranking is a separately declared task extension or experimental condition, not an unmarked `sacre-qccs-v1` baseline.

## 8. Ranking outputs

Given a complete matrix and compatible aggregation:

1. **Public + Expert ranking**: aggregate cross-source QCCS relations among the Public and Expert candidate subset.
2. **Full ranking**: aggregate each Public, Expert, and Framework candidate over all of its cross-source partners.
3. **Provisional Final Policy**: the highest-ranked candidate in the full ranking under the declared aggregation.
4. Record partner count with each ranking entry and the top-two selection margin when the reporting layer computes it.

The provisional Final Policy is the output of the represented procedure. It is not a claim of moral truth or all-things-considered justification.

## 9. Representation rule

Current Full Corpus concise and detailed companion records are separate **resource snapshots** of one case family. They must preserve the same decision question, candidate set, and stipulations while differing in scenario detail according to the registered profile.

`sacre-qccs-v1` executes one selected representation at a time. A concise-vs-detailed comparison is therefore an **evaluation design over two resource snapshots under one task contract**, not two different SACRE task definitions.

## 10. Provenance required for a research run

A paper-facing run should be able to identify at minimum:

### Resource identity

- upstream repository/release/commit or equivalent immutable release identity;
- case id;
- record id;
- representation;
- case/frame version;
- content hash;
- benchmark profile;
- scenario fingerprint;
- ordered candidate ids and candidate-set fingerprint;
- declared stipulation ids;
- whether the executed object is `as-published`, a declared derivation, or modified without declared lineage.

### Task identity

- `task_protocol_id = sacre-qccs-v1`;
- this contract version;
- QCCS protocol id/version/hash;
- `scoring_mode = conv+`;
- mapped source role for every candidate;
- expected pair set/count;
- aggregation mode and derived required aggregation.

### Evaluation/execution identity

- provider/model/model version where available;
- temperature, top-p, max tokens, seed where supported;
- system/user prompt hashes;
- attempt/failure/retry record;
- app git commit/build/deployment identity.

This separation is particularly important for P3: a repeat is interpretable only if resource, task, and execution state can be held fixed or varied deliberately.

## 11. Equivalence gate before implementation replacement

The next implementation step is a read-only adapter that consumes current canonical v1 records and emits the explicit task projection described here.

Before that adapter can replace or refactor the existing SACRE vendor path, tests must demonstrate for **all 68 current records** that it reproduces the existing execution semantics, including:

- case/record/representation identity;
- scenario text;
- candidate ids, texts, role mapping, and order;
- benchmark profile;
- geometry;
- complete expected cross-source pair set and count;
- partner counts;
- structural asymmetry flag;
- derived required aggregation;
- release/version/hash provenance carried into the execution object.

Equivalence means semantic identity of the executable projection, not merely the same record count. Any difference must be resolved as either a bug or an explicit versioned task change before canonical v1 is altered.

## 12. Truthfulness boundary

This contract supports the following claims now:

- SACRE/QCCS can be represented as an explicit task layer over richer Bioethics Bench resource objects;
- the current implementation semantics are sufficiently identifiable to specify that boundary;
- the proposed adapter can be built without changing current canonical records.

It does **not** yet establish:

- that the new adapter has passed equivalence testing;
- that a generalized resource schema is implemented;
- that Bioethics Bench is empirically method-neutral;
- that QCCS is reliable, valid, morally correct, or human-correspondent;
- that current developmental Full Corpus executions are confirmatory P3 results.

## 13. Authoritative implementation references for this contract

Bioethics Bench:

- `schemas/case.schema.json`
- `schemas/benchmark-profiles.json`
- Full Corpus release manifest and current canonical records
- `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

SACRE/REai:

- `src/lib/spec/qccs-v1.json` — canonical QCCS construct/measurement protocol
- `src/lib/prompts.js` — executable QCCS prompt construction
- `src/lib/sacre-core/step6.js` — source-role inference, canonical pair keys, cross-source pair enumeration
- `src/lib/sacre-core/step5.js` — coverage, aggregation requirement, rankings, provisional Final Policy
- `src/lib/sacre-core/schemas.js` — research-run provenance fields
- `scripts/vendor-bench-full-corpus.mjs` — current implicit Bench→SACRE projection and cross-checks

**COMPLETE FOR SPECIFICATION STAGE. NEXT GATE: READ-ONLY ADAPTER + ALL-RECORD EQUIVALENCE TEST.**
