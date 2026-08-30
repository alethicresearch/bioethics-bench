# Bioethics Bench task contract — `sacre-qccs-v1`

**Contract status:** equivalence verified  
**Contract version:** 0.1.0  
**Task protocol id:** `sacre-qccs-v1`  
**Measurement protocol:** SACRE `qccs-v1`, version 1.0.0, operationalization `conv+`  
**Latest verification date:** 2026-08-30

This contract makes explicit the task-layer semantics that were previously distributed across Bioethics Bench records/profiles and the SACRE implementation. Its central result is that a source-grounded Bioethics Bench resource can be distinguished from the SACRE/QCCS task applied to it without changing canonical v1 cases or their executable meaning.

The contract remains deliberately non-breaking. The read-only adapter verifies the current v1 projection across all **34 families / 68 concise+detailed records**. It does not replace the scientific resource with a SACRE-specific schema and does not turn task-equivalence evidence into validation of QCCS, moral correctness, source fidelity, or human correspondence.

## 1. Three objects must remain distinct

A reproducible Bench/SACRE study identifies **resource**, **task**, and **evaluation/execution** state separately.

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

These are properties of the research resource. They remain meaningful when another computational-bioethics task is applied instead of SACRE.

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

This distinction is especially important for P3: a computational repeat is interpretable only when the resource object, task definition, and execution condition held fixed or deliberately varied can each be named.

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

Current Full Corpus total: **428 unordered cross-source pairs per representation / 856 across one matched concise+detailed pass**.

## 5. Measurement contract — QCCS v1

The canonical measurement is SACRE `qccs-v1`, protocol version 1.0.0, operationalization `conv+`.

**Construct:** normative convergence is the degree to which two represented policy candidates align in what they recommend should be done in the stated scenario.

**Scale:** integer 0–100.

- 0 = no positive normative convergence represented on this scale;
- 100 = full normative convergence in what the two candidates recommend for the scenario.

The floor does not distinguish orthogonality from opposition. Divergence-only or signed alternatives are different measurement protocols and must not be pooled under `qccs-v1`.

The response contract is one integer score plus a brief justification. Executions should preserve QCCS protocol identity/hash, scoring mode, prompt hashes, model/provider/configuration, attempts/failures, and other state needed to reconstruct the measurement condition. Canonical prompt wording remains owned by the SACRE repository so the Bench task contract does not become a second independently editable prompt source.

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

If partner counts differ, Sum gives candidates with more partners more terms independently of measured QCCS values. Therefore:

```text
if partner counts differ:
    required_aggregation = mean
```

The adapter derives this requirement from the candidate set and checks it against the Bench release/profile declaration. If Mean is structurally required and another aggregation is selected, measured cells remain available diagnostically but official rankings and provisional Final Policy are withheld.

Current Full Corpus geometry is asymmetric in **26/34 families**. Current reference-task candidate weights are 1.0/absent. Weighted ranking is a separately declared extension or experimental condition.

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

## 11. All-record equivalence verification — complete and current

The read-only adapter is implemented in:

- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The adapter has now been used for two full-corpus provenance gates. The first established the resource/task boundary; the second proved that the later canonical source-locator enrichment changed resource identity without changing executable task semantics.

### Verification event A — initial explicit task-boundary gate

Against SACRE's earlier vendor pin, the adapter demonstrated equality across all **34 families / 68 records** for:

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

That comparison found **36/68** stale Bench `content_hash` values in the older SACRE vendor while the corresponding scenario/candidate/task fields were unchanged. It was classified as provenance-only drift. The resulting historical re-pin used Bench commit `077b36ff1eb9662e93549b1f4261691960cfa605`, SACRE merge `4ed4b24ab99d7427195a21393474c02700274ee6`, and payload SHA-256 `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

That event is retained as historical evidence, not the current consumer pin.

### Verification event B — canonical source-locator enrichment

The Full Corpus provenance layer was subsequently repaired source-by-source. Across the 68 canonical records:

- unresolved canonical source locators were reduced to **0**;
- traceable internal “research packet” placeholders were replaced with their underlying external literature;
- the current corpus contains **242 unique citations**;
- **130 citations carry a PMID and 130/130 resolve consistently** against PubMed;
- official/publisher/bibliographic locators are carried for non-PubMed sources where available.

Complete locator coverage is a provenance/traceability result. It does not by itself establish that every source supports every Bench policy translation.

Because source/provenance metadata is included in whole-resource `content_hash`, the locator repair changed the resource hash for **68/68 records**. Before accepting a new SACRE pin, the same explicit all-record gate was rerun against the then-current SACRE vendor.

The gate found:

- **34/34 families and 68/68 records task-semantic equivalent**;
- **68/68 stale resource hashes** relative to the pre-repin vendor;
- **0 execution/task-semantic differences**;
- unchanged scenarios, candidate ids/text/order/source roles, stipulations, profiles, geometries, pair generation/counts, partner counts, structural asymmetry, and required aggregation.

The 68 hash differences were therefore classified as **provenance-only drift**, not execution drift. No LLM/QCCS rerun was required or performed.

SACRE was then re-vendored from locator-enriched Bench resource commit:

`0a8317ba8a2c5978f7a50bb5f13de875153b6782`

The resulting current SACRE pin records:

- 34 families / 68 records;
- upstream ref `main`;
- upstream resource commit `0a8317ba8a2c5978f7a50bb5f13de875153b6782`;
- vendored payload SHA-256 `82bb8abb93528ddc20e5c238826d34762d0d3aeb12eeabc7504dbf0181a74fec`.

After re-pinning:

- the explicit adapter projection and SACRE Full Corpus payload are **byte-for-byte identical**;
- SACRE's `src/lib/bench/full-corpus.test.mjs` regression suite passes **46/46**;
- SACRE's main-branch post-merge equivalence workflow also passes.

The current provenance re-pin was merged through SACRE PR #22 at:

`9fa908a45c2447aa97f0473754c434bdb874b19e`

The generated consumer diff changed resource `contentHash` values and pin metadata. It did not change scenario text, candidate content/order/roles, geometry, aggregation, QCCS semantics, rankings, or model outputs.

**Current conclusion:** the task boundary remains verified after the canonical source-locator repair. Bioethics Bench resource provenance can change and be re-pinned without conflating provenance drift with execution-semantic drift.

## 12. Truthfulness boundary after equivalence verification

Supported now:

- SACRE/QCCS is explicitly specified as a task layer over richer Bioethics Bench resource objects;
- the read-only adapter reproduces current v1 SACRE task semantics across all 68 records;
- SACRE is re-pinned to the locator-enriched Bench resource identity;
- the adapter and refreshed SACRE vendor payload are exactly equivalent after the provenance refresh;
- resource provenance drift can be distinguished from execution-semantic drift rather than automatically forcing unnecessary model reruns;
- canonical source-locator coverage is complete for the current Full Corpus, with zero unresolved locator residual;
- the 130 PMID-bearing citations resolve consistently against PubMed.

Still not established:

- QCCS reliability or construct validity;
- moral correctness of QCCS scores, rankings, or provisional Final Policies;
- independent human source fidelity for the full Bench corpus;
- corpus-wide warrant adequacy merely because source identifiers resolve;
- Bioethics Bench method-neutrality across multiple mature task families;
- human-model correspondence;
- confirmatory P3 results.

The verified adapter is architectural/reproducibility evidence. The locator repair is provenance/traceability evidence. Neither is computational or empirical validation of the normative method.

## 13. Current dependency

The first SACRE task boundary, canonical source-locator repair, and post-repair provenance re-pin are complete. Do not keep polishing or rerunning this gate unless a future execution-relevant or provenance-changing resource revision actually requires it.

For the submission lane, the current blockers are external to this task contract: lock final author/affiliation/contribution metadata and choose the repository's software/tooling license, then freeze the immutable reviewer-facing submission snapshot and run final clean-clone/reviewer-access checks.

For P3, freeze separately:

1. the exact Bioethics Bench resource snapshot;
2. `sacre-qccs-v1` task specification;
3. the evaluation/execution condition.

No confirmatory P3 execution is authorized by this equivalence work.

## 14. Authoritative references

Bioethics Bench:

- `schemas/case.schema.json`
- `schemas/benchmark-profiles.json`
- `tasks/sacre-qccs-v1/task-contract.json`
- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`
- `scripts/enrich-source-locators.mjs`
- `scripts/apply-source-locator-overrides.mjs`
- `scripts/repair-source-placeholders.mjs`
- `docs/source-locators/UNRESOLVED_FULL_CORPUS.md`
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

**COMPLETE FOR TASK-SPECIFICATION, SOURCE-LOCATOR PROVENANCE, AND CURRENT EQUIVALENCE STAGE.**
