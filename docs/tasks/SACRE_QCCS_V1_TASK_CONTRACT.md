# Bioethics Bench task contract — `sacre-qccs-v1`

**Contract status:** equivalence verified  
**Contract version:** 0.1.0  
**Task protocol id:** `sacre-qccs-v1`  
**Measurement protocol:** SACRE `qccs-v1`, version 1.0.0, operationalization `conv+`  
**Verification date:** 2026-08-30

This contract makes explicit the task-layer semantics that were previously distributed across Bioethics Bench records and profiles and the SACRE implementation. It is the first implemented result of the Bioethics Bench generalization audit: the source-grounded resource can be distinguished from the SACRE/QCCS task applied to it without changing canonical v1 cases or their executable meaning.

The contract is deliberately non-breaking. The read-only adapter now verifies the current v1 projection across all 34 families / 68 concise+detailed records. It does not replace the scientific resource with a SACRE-specific schema and does not turn task-equivalence evidence into validation of QCCS, moral correctness, or human correspondence.

## 1. Three objects must remain distinct

A reproducible Bench/SACRE study should identify **resource**, **task**, and **evaluation/execution** state separately.

### Resource snapshot

The selected Bioethics Bench record supplies the represented normative object:

- `case_id` and `record_id`;
- `frame_id` / `frame_version` where declared;
- record `version` and `content_hash`;
- representation form;
- decision question;
- scenario and declared stipulations;
- candidate policy content;
- source/provenance and policy-basis metadata;
- lifecycle, review, rights, and release state.

These are properties of the research resource. They remain meaningful even when another computational-bioethics task is applied instead of SACRE.

### Task specification

`sacre-qccs-v1` specifies what SACRE does with a selected resource snapshot:

- map candidates into Public, Expert, and Framework source roles;
- use the current task-local aliases `pubN`, `expN`, and `fwN`;
- generate every unordered cross-source candidate pair exactly once;
- measure normative convergence with QCCS v1.0.0 / `conv+`;
- require the complete expected pair matrix before official ranking;
- derive and enforce the aggregation mode required by candidate geometry;
- aggregate candidate coherence profiles and select a provisional Final Policy under the declared procedure.

### Evaluation/execution condition

Provider, model, model version, temperature, top-p, maximum tokens, seed, repetition count, retry/exclusion rules, representation comparisons, perturbations, and evaluator type belong to the evaluation layer. They are not intrinsic properties of either the Bench resource or the SACRE task contract.

This distinction is especially important for P3: a computational repeat is interpretable only when one can say which resource object, which task definition, and which execution condition were held fixed or deliberately varied.

## 2. Current v1 resource-to-task projection

For one selected Bench record, `sacre-qccs-v1` uses:

| Resource field | Task use |
|---|---|
| `scenario` | Scenario supplied for each QCCS pair measurement. |
| `candidate_pools.public[]` | Public policy candidates. Current aliases use `pubN`. |
| `candidate_pools.expert[]` | Expert policy candidates. Current aliases use `expN`. |
| `candidate_pools.framework[]` | Framework-derived policy candidates. Current aliases use `fwN`. |
| candidate `text` | Policy content compared by QCCS. |
| `benchmark_profile` | Validates lineage, candidate geometry, supported representations, and expected cross-source pair count. |
| resolved `required_aggregation` | Enforces Mean where unequal partner counts would make Sum geometry-biased. |
| record/version/hash/frame/representation/stipulation identity | Preserved as resource provenance so the executed object can be reconstructed. |

Candidate citations, provenance, `policy_basis`, review state, and rights are not needed to calculate a QCCS cell, but they remain scientifically essential. Their absence from the compact execution projection does not make source fidelity optional; it is precisely why the resource and task layers must remain distinguishable.

## 3. Source-role mapping and aliases

Current canonical mapping:

```text
candidate_pools.public     → public role     → pub1, pub2, ...
candidate_pools.expert     → expert role     → exp1, exp2, ...
candidate_pools.framework  → framework role  → fw1, fw2, ...
```

For canonical v1, the adapter validates both pool membership and alias prefix. A mismatch is an error. The adapter may not silently infer another role, rename a candidate, or reshape the candidate set.

This alias convention belongs to the current SACRE task projection. It is not a universal requirement for future Bioethics Bench resource schemas or other task families.

## 4. Pair-generation rule

Let `C` be the selected candidate set and `role(c)` the mapped SACRE source role. The required QCCS matrix contains every unordered pair `{a,b}` for which:

```text
a != b
role(a) != role(b)
```

Same-source pairs are excluded and each eligible unordered pair appears exactly once. The canonical key sorts the two candidate aliases lexically and joins them with `-`, matching the current SACRE implementation.

For Public, Expert, and Framework pool sizes `P`, `E`, and `F`, the expected number of cells is:

```text
P×E + P×F + E×F
```

The adapter independently derives that pair set and count and verifies it against the registered `benchmark_profile.cross_source_pairs`. A mismatch is a projection error and execution should stop.

## 5. Measurement contract — QCCS v1

The canonical measurement is SACRE `qccs-v1`, protocol version 1.0.0, operationalization `conv+`.

**Construct:** normative convergence is the degree to which two represented policy candidates align in what they recommend should be done in the stated scenario.

**Scale:** integer 0–100.

- 0 = no positive normative convergence represented on this scale;
- 100 = full normative convergence in what the two candidates recommend for the scenario.

The floor does not distinguish orthogonality from opposition. Divergence-only or signed alternatives are different measurement protocols and must not be pooled under `qccs-v1`.

The response contract is one integer score plus a brief justification. Executions should preserve QCCS protocol identity/hash, scoring mode, prompt hashes, model/provider/configuration, attempts/failures, and other state needed to reconstruct the measurement condition. The canonical prompt wording remains owned by the SACRE repository so that the Bench task contract does not become a second independently editable prompt source.

## 6. Matrix-completeness rule

All expected cross-source cells must be successfully measured before an official SACRE ranking or provisional Final Policy is produced.

If a required pair is missing, null, or errored:

- retain measured cells for diagnostics/retry;
- mark the aggregation incomplete;
- withhold official rankings;
- withhold provisional Final Policy.

Retry and exclusion rules belong to the evaluation protocol. They may not silently redefine the expected task matrix.

## 7. Aggregation-compatibility rule

For each candidate, the cross-source partner count is the number of candidates in the other two source roles.

If every candidate has the same partner count, the geometry is structurally symmetric. Current v1 does not impose Mean in that case; the reference baseline uses Sum unless another compatible aggregation is explicitly declared as an evaluation condition.

If partner counts differ, Sum would give candidates with more partners more terms in their total independently of the measured QCCS values. Therefore:

```text
if partner counts differ:
    required_aggregation = mean
```

The adapter derives this requirement from the candidate set and checks it against the Bench release/profile declaration. If Mean is structurally required and another aggregation is selected, measured cells remain available diagnostically but official rankings and provisional Final Policy are withheld.

Current reference-task candidate weights are 1.0/absent. Weighted ranking is a separately declared extension or experimental condition.

## 8. Ranking outputs

Given a complete matrix and compatible aggregation, SACRE produces:

1. a Public + Expert ranking over that subset;
2. a full ranking over Public, Expert, and Framework candidates;
3. a provisional Final Policy equal to the highest-ranked candidate under the declared aggregation;
4. partner-count and reporting metadata, including selection margin where the reporting layer computes it.

The provisional Final Policy is the output of the represented procedure. It does not establish moral truth or all-things-considered justification.

## 9. Representation rule

Concise and detailed Full Corpus companions are separate resource snapshots of the same case family. Current profiles require them to preserve the same decision question, candidate field, and stipulations while differing in scenario detail.

`sacre-qccs-v1` executes one selected representation at a time. A concise-vs-detailed study therefore varies **resource representation under one task contract**; it is not a comparison of two different SACRE methods.

## 10. Provenance required for research use

A paper-facing execution should identify at minimum:

### Resource identity

- immutable release/repository/commit identity;
- case and record ids;
- representation;
- record/frame version;
- `content_hash`;
- benchmark profile;
- scenario and candidate-set fingerprints;
- ordered candidate ids;
- stipulation ids;
- whether the execution is as-published, a declared derivation, or modified without declared lineage.

### Task identity

- `task_protocol_id = sacre-qccs-v1`;
- contract version;
- QCCS protocol id/version/hash;
- `scoring_mode = conv+`;
- mapped source role for every candidate;
- expected pair set/count;
- selected aggregation and derived aggregation requirement.

### Evaluation identity

- provider/model/model version where available;
- temperature/top-p/max tokens/seed where supported;
- prompt hashes;
- attempt/failure/retry record;
- app commit/build/deployment identity.

## 11. All-record equivalence verification — complete

The read-only adapter is implemented in:

- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The adapter was tested over every current canonical v1 Full Corpus record. The verification proceeded in two stages because it exposed a scientifically important distinction between executable semantics and whole-resource provenance identity.

### Stage A — execution/task-semantic equivalence

Against SACRE's pre-existing vendor pin, the adapter demonstrated equality across all **34 families / 68 records** for:

- case, record, version, and representation identity;
- scenario text;
- candidate ids, texts, source-role mapping, and ordering;
- stipulations and benchmark profile;
- candidate geometry;
- complete cross-source pair semantics and count;
- partner counts;
- structural asymmetry;
- required aggregation.

**Semantic differences found: 0.**

The comparison simultaneously found that SACRE's older vendor carried stale Bioethics Bench `content_hash` values for **36 of 68 records**. The corresponding scenario/candidate/task fields were unchanged. This was therefore classified as **provenance-only drift**, consistent with the program's cross-repository change rule: resource identity needed refreshing, but existing model results did not require semantic rerun merely because source/provenance metadata had changed.

### Stage B — current resource-provenance re-pin

SACRE was re-vendored from merged Bioethics Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

The resulting SACRE pin now records:

- 34 families / 68 records;
- upstream ref `main`;
- upstream commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- vendored payload SHA-256 `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

After re-pinning, the explicit adapter projection and SACRE's refreshed Full Corpus payload were **byte-for-byte identical**, and SACRE's existing `src/lib/bench/full-corpus.test.mjs` regression suite passed.

The SACRE equivalence/provenance work was merged at:

`4ed4b24ab99d7427195a21393474c02700274ee6`

The generated SACRE diff contained the 36 refreshed `contentHash` values plus pin metadata only. It did not change scenario text, candidates, geometry, aggregation, QCCS semantics, rankings, or model outputs.

**Conclusion:** the task boundary is no longer merely proposed. The current Bioethics Bench v1 resource can be projected through an explicit `sacre-qccs-v1` adapter with verified identity to the SACRE vendor representation.

This verification does **not** mean the adapter must immediately replace the current vendor path. It establishes that replacement/refactoring can occur without semantic change if and when there is a concrete engineering reason to do so.

## 12. Truthfulness boundary after equivalence verification

Supported now:

- SACRE/QCCS is explicitly specified as a task layer over richer Bioethics Bench resource objects;
- the read-only adapter reproduces current v1 SACRE task semantics across all 68 records;
- SACRE is re-pinned to the current merged Bench resource identity;
- the adapter and refreshed SACRE vendor payload are exactly equivalent after the provenance refresh;
- resource provenance drift can be distinguished from execution-semantic drift rather than automatically forcing unnecessary model reruns.

Still not established:

- QCCS reliability or construct validity;
- moral correctness of QCCS scores, rankings, or provisional Final Policies;
- independent human source fidelity for the full Bench corpus;
- Bioethics Bench method-neutrality across multiple mature task families;
- human-model correspondence;
- confirmatory P3 results.

The verified adapter is architectural/reproducibility evidence. It is not computational validation of the normative method.

## 13. Next dependency

The first SACRE task boundary is now specified and equivalence verified. The Bench generalization lane should therefore move forward rather than continue polishing this adapter.

The next useful work is to:

1. define the **generic candidate/source-role resource model on paper** without changing canonical v1 records;
2. use the verified resource/task separation in the standalone Bioethics Bench manuscript;
3. refine P3 so the protocol freezes the **resource snapshot** and **task specification** separately;
4. continue source/review/release work in parallel;
5. specify an additional non-SACRE task only when a genuine computational-bioethics research question warrants it, rather than adding task breadth for appearance's sake.

A generalized schema remains a future versioned architectural change, not something to impose on canonical v1 merely because the separation boundary has now been demonstrated.

## 14. Authoritative references

Bioethics Bench:

- `schemas/case.schema.json`
- `schemas/benchmark-profiles.json`
- `tasks/sacre-qccs-v1/task-contract.json`
- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`
- `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

SACRE/REai:

- `src/lib/spec/qccs-v1.json`
- `src/lib/prompts.js`
- `src/lib/sacre-core/step6.js`
- `src/lib/sacre-core/step5.js`
- `src/lib/sacre-core/schemas.js`
- `scripts/vendor-bench-full-corpus.mjs`
- `src/lib/bench/full-corpus-v1.json`
- `src/lib/bench/PINNED-FULL-CORPUS.json`
- `src/lib/bench/full-corpus.test.mjs`

**COMPLETE FOR TASK-SPECIFICATION AND EQUIVALENCE STAGE.**
