# Bioethics Bench — Resource Card

**Status:** development resource / manuscript submission snapshot in preparation  
**Last updated:** 2026-08-30  
**Repository:** https://github.com/alethicresearch/bioethics-bench  
**Project site:** https://bioethicsbench.com  
**Standalone manuscript:** *Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics*

## 1. What Bioethics Bench is

Bioethics Bench is a source-grounded, versioned research infrastructure for computational bioethics. Its core object is not a moral answer label. It is a reconstructable normative research object containing a decision problem, represented policy candidates, source and warrant provenance, benchmark stipulations, controlled representation variants, version lineage, review state, and the metadata needed to project the resource into explicit computational tasks.

The resource is designed so that three scientific objects remain separable:

1. **Resource** — the bioethical case family, representations, candidates, provenance, stipulations, geometry, versions, and review state.
2. **Task** — a declared transformation or evaluation applied to resource objects. The first mature reference task is `sacre-qccs-v1`.
3. **Evaluation condition** — model, human, ensemble, protocol, repetitions, perturbations, metrics, exclusions, and other execution conditions.

This separation is intended to prevent one computational procedure from becoming the ontology of the underlying bioethical resource.

## 2. Current corpus state

The current Full Corpus is the executable output of a 200-family research and disposition program rather than a preset target-sized sample.

| Disposition | Families |
|---|---:|
| Current Full Corpus executable | 34 |
| Featured-only separate lineage | 1 |
| Held — additional evidence needed | 82 |
| Research complete but not executable under current source/decision structure | 71 |
| Held after candidate audit | 12 |
| Total research/disposition program | 200 |

The 34 executable Full Corpus families contain:

- **68 records** — one concise and one detailed representation per executable family;
- **210 unique family-level candidates**;
- current `sacre-qccs-v1` task roles: **69 Public, 55 Expert, 86 Framework** candidates;
- current policy bases: Public 49 source-informed / 20 direct; Expert 49 direct / 6 source-informed; Framework 86 framework-derived;
- current records remain `status: draft` and `reviewed_by_human: false`.

The executable count is an output of evidence, action-distinctness, and source-to-policy eligibility constraints. Held families are not filled out merely to reach a target corpus size.

## 3. Unit of analysis

A case family is a normative decision problem represented through one or more versioned frames. The current Full Corpus uses matched **concise** and **detailed** representations for each executable frame.

Each executable record includes or points to:

- stable `case_id`, `record_id`, schema version, record version, and content hash;
- title, decision question, jurisdiction/context fields, domains, and tags;
- scenario text and explicit benchmark stipulations;
- scenario provenance;
- candidate pools and candidate identifiers;
- candidate text, construction method, policy basis, source pool/task role, and provenance;
- source references;
- representation metadata and reciprocal companion identifiers;
- benchmark/task profile metadata where applicable;
- intended use, collection/exposure state, review state, and rights metadata.

The exact machine-readable contract is governed by the schemas under `schemas/` rather than this prose summary.

## 4. Candidate construction and warrant

The current executable corpus distinguishes three principal policy bases:

- **direct-policy-evidence** — the cited source itself supports a sufficiently close policy recommendation;
- **source-informed-policy-inference** — the source establishes an orientation, preference, principle, or empirical premise and the Bench discloses the bridge to an executable policy;
- **framework-derived-policy** — the candidate is a Bench-authored operational derivation from a named normative framework or principle set.

Current source-review work shows that a future generic warrant representation needs more than a single relation label. The shadow ontology therefore separates source/document type, evidence function, translation mode, support direction, warrant scope, source assertion, Bench bridge, and relation-level review identity. That architecture is not yet a production v2 schema.

## 5. Natural candidate geometry

Candidate counts are evidence-qualified rather than forced into a uniform grid. The 34 executable families occupy eight current geometries:

| Public × Expert × Framework | Families | Candidates/family | Cross-source pairs/representation |
|---|---:|---:|---:|
| 2×2×2 | 8 | 6 | 12 |
| 1×2×2 | 1 | 5 | 8 |
| 2×1×2 | 7 | 5 | 8 |
| 2×1×3 | 7 | 6 | 11 |
| 2×2×3 | 6 | 7 | 16 |
| 2×3×3 | 1 | 8 | 21 |
| 3×2×3 | 3 | 8 | 21 |
| 1×2×3 | 1 | 6 | 11 |

Only 8/34 families have the symmetric 2×2×2 shape. The current geometry implies **428 unordered cross-source pairs per representation** and **856 across one matched concise+detailed pass** under the `sacre-qccs-v1` reference task.

For asymmetric geometries, Mean aggregation is required where unequal partner counts would otherwise allow pool size to influence rankings mechanically.

## 6. Stipulations as experimental controls

Benchmark stipulations are explicit constructed assumptions used to hold a case at a policy divergence, remove irrelevant factual uncertainty, or fix a dimension needed for controlled comparison. They are not empirical claims about the world.

The validator requires stipulated facts to be disclosed in executed scenario text. Internal scenario/action-divergence review has examined all 34 current executable families. That review is construction-quality evidence; it is not independent human source validation and does not establish that every candidate is warranted by its cited source.

## 7. Companion representation control

Concise and detailed records are controlled representations of the same underlying case frame. Current validation requires the pair to preserve the same decision question/profile, identical stipulations, byte-identical candidate pools, different scenario text, and reciprocal companion record identifiers.

This makes representation length/detail a manipulable experimental axis rather than an uncontrolled rewrite of the normative object.

## 8. First mature task projection: `sacre-qccs-v1`

The first mature reference task maps the resource into SACRE/QCCS without making SACRE-specific fields intrinsic to the resource ontology.

For `P` Public, `E` Expert, and `F` Framework candidates, the task generates all unordered cross-source pairs:

`P×E + P×F + E×F`

The current task contract uses QCCS v1.0.0 with the `conv+` operationalization, requires a complete matrix for official ranking, and requires Mean rather than Sum when partner counts differ.

An all-record adapter-equivalence gate verified the current projection across 34 families / 68 records. It found **0 execution/task-semantic differences** and **36 stale resource content hashes** in SACRE's older vendor state. Those 36 differences were provenance-only drift; after re-pinning, the adapter projection and SACRE vendor payload were byte-for-byte identical and regression tests passed. No model/QCCS rerun was triggered because executable semantics had not changed.

## 9. Validation and review state

Bioethics Bench deliberately separates different validation claims.

### Completed or currently available

- machine-readable schema and content-hash validation;
- profile/lineage, aggregation, provenance, representation-pair, and structural invariant checks;
- current identifier/source-resolution checks, including 122/122 recorded PMIDs resolving in the current review state;
- model-assisted reading of all current direct-policy-evidence candidates;
- model-assisted bridge checks for all current source-informed policy inferences;
- bounded whole-document omission review for five families;
- all-record `sacre-qccs-v1` adapter equivalence.

### Not yet established

- independent corpus-wide human source-to-policy validation;
- corpus-wide whole-document omission sensitivity;
- QCCS reliability or construct validity;
- human-model correspondence;
- moral correctness of any provisional Final Policy;
- method-neutrality across multiple mature task families;
- a production generic v2 resource schema;
- a frozen source-to-policy warrant benchmark task.

Independent source review is a quality/release layer. It is not a developmental-execution gate.

## 10. Intended uses

Appropriate current uses include:

- development and testing of computational-bioethics methods;
- methodological work on provenance, representation, normative comparison, and benchmark design;
- developmental model runs when the exact draft resource, task, and evaluation condition are pinned and reported;
- paper illustrations and reproducibility studies;
- protocol development for later confirmatory computational and human-comparison studies.

## 11. Uses that are not supported

The current resource should not be used as:

- a source of morally correct or clinically authoritative answers;
- a substitute for jurisdiction-specific legal, clinical, or ethics advice;
- a fully human-validated source-to-policy benchmark;
- evidence that one model is morally superior because it agrees with a provisional task output;
- a hidden training target presented later as an unexposed confirmatory benchmark.

## 12. Versioning, citation, and reproducibility

A citation to a Bench record should include **record ID, version, and content hash**. A citation to a computational result should additionally identify the resource snapshot, task specification, and evaluation/execution condition.

The current equivalence-verified Bench→SACRE executable projection is associated with Bench commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

and SACRE re-pin merge commit:

`4ed4b24ab99d7427195a21393474c02700274ee6`

The repository's release-candidate manifest is under `releases/full-corpus-v1-completion-candidate/manifest.json`. It is a **release candidate**, not a declaration that the corpus has been independently validated or formally released.

## 13. Rights and licensing

Bench-authored case content is licensed **CC BY 4.0**, as specified in `CONTENT-LICENSE.md`. Third-party source material retains its own rights and is cited/summarized rather than relicensed.

The repository currently does **not** contain a finalized root software-license file for the validation/tooling code. A software-license decision is therefore a pre-archival-release action and must not be inferred from the content license.

## 14. Release status

The manuscript and resource may be submitted for peer review while the corpus remains transparently identified as draft/developmental. A paper-submission snapshot and a later public archival release are distinct objects.

A formal public release should have an immutable repository tag/commit, machine-readable manifest and checksums, stable citation metadata, explicit software and content licensing, archived DOI-bearing deposit where feasible, and a recorded review/release state.

See `docs/ARCHIVAL_RELEASE_PLAN.md` and `docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md`.
