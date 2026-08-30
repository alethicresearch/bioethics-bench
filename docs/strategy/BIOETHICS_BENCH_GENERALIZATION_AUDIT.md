# Bioethics Bench Generalization Audit

**Status:** first-pass structural audit complete — 2026-08-29  
**Scope:** current `schemas/case.schema.json`, `schemas/benchmark-profiles.json`, representative Full Corpus records, and the current SACRE Full Corpus vendoring/execution projection.  
**Purpose:** determine which parts of Bioethics Bench are intrinsic resource infrastructure, which are generic task/evaluation infrastructure, and which are specifically coupled to SACRE/QCCS. This audit is architectural evidence and a refactoring plan; it is **not** evidence that Bioethics Bench has already demonstrated method-neutrality across multiple mature task families.

## Executive finding

The current Bench record is **less SACRE-bound than its surface schema suggests**. Most of the scientific object already describes a reusable, source-grounded bioethics research resource: a versioned decision problem, represented scenario, candidate positions, source/provenance and policy-basis information, representation identity, lifecycle/exposure state, rights, review, and perturbation lineage.

The strongest accidental coupling is concentrated in a smaller execution layer:

1. the record requires exactly three named candidate pools — `public`, `expert`, and `framework`;
2. candidate identifiers are required to use SACRE-oriented `pub` / `exp` / `fw` prefixes;
3. `benchmark_profile` encodes candidate-pool geometry and therefore the QCCS pair field;
4. `required_aggregation` encodes a SACRE candidate-ranking requirement derived from that geometry;
5. current profile validation assumes cross-source pair generation over those three pools.

The current SACRE vendor confirms this separation at the software boundary. It consumes the case/scenario/candidate texts and selected governance/version fields, then derives the executable SACRE object from pool membership, profile, geometry, and aggregation. It does **not** need most source-fidelity and scholarly metadata to calculate a run, even though those fields remain essential to the scientific validity and provenance of the resource.

The appropriate next move is therefore **not a disruptive v1 schema rewrite**. Preserve the current executable projection and introduce an explicit task-specification/adapter boundary. A future resource schema can then represent candidates and source relationships more generally while a `sacre-qccs-v1` adapter reconstructs the exact public/expert/framework pools, IDs, pairing rule, and aggregation semantics required by current execution.

## 1. Three-layer classification

### A. Intrinsic resource fields

These describe the bioethical research object, its source grounding, or its versioned identity independently of SACRE's scoring procedure.

| Current field/object | Classification | Rationale |
|---|---|---|
| `record_id`, `case_id`, `frame_id`, `frame_version`, `version` | **Intrinsic resource** | Stable identity across case family, framing, representation, and substantive revision. |
| `title`, `short_description` | **Intrinsic resource** | Human-readable resource discovery. |
| `decision_question` | **Intrinsic resource** | Defines the actionable normative decision represented by the case; useful across computational and human methods. |
| `scenario` | **Intrinsic resource** | The represented factual decision object. |
| `scenario_provenance` | **Intrinsic resource** | Source and construction lineage for the scenario. |
| `jurisdiction_context`, `as_of_date` | **Intrinsic resource** | Time/legal context required to interpret a source-grounded case. |
| `stipulations` | **Intrinsic resource** | Declared benchmark-constructed assumptions that fix the represented factual state. Their experimental use is generic, but the stipulations themselves belong to the case object. |
| `position_families` | **Intrinsic resource / scholarly metadata** | Broader map of documented positions; explicitly not the executable candidate set. |
| `domains`, `tags` | **Intrinsic resource / discovery metadata** | Domain classification and search/browsing. |
| candidate `text` | **Intrinsic resource** | The represented normative/policy position can support many tasks besides QCCS. |
| candidate `policy_basis` | **Intrinsic resource / provenance** | Records how the represented policy was obtained; distinct from the evaluation task. |
| candidate `provenance` and references | **Intrinsic resource / provenance** | Source-grounding and construction lineage. |
| `references` | **Intrinsic resource / provenance** | Case-level literature/source record. |
| `rights` | **Intrinsic resource / governance** | Reuse/licensing status of Bench-authored content. |
| `schema_version`, `content_hash` | **Intrinsic resource / versioning** | Reproducibility and immutable identity. |

### B. Generic task/evaluation/governance fields

These are not tied to SACRE specifically. They organize representations, experimental use, perturbations, exposure, and lifecycle across possible tasks and evaluators.

| Current field/object | Classification | Rationale |
|---|---|---|
| `representation.form`, `companion_record_ids`, `representation.notes` | **Generic evaluation infrastructure** | Matched concise/detailed representations can support model, human, retrieval, explanation, and robustness tasks. |
| `collection` | **Generic resource/evaluation governance** | Tutorial/featured/development/stress-test/benchmark is a research-program role rather than a SACRE operation. |
| `exposure`, `exposure_history` | **Generic evaluation governance** | Needed for public/development/holdout integrity across task families. |
| `status`, `review` | **Generic release governance** | Editorial/release lifecycle independent of evaluation method. |
| `intended_use` | **Generic evaluation governance** | Records whether an object is for teaching, protocol development, robustness testing, or released evaluation. |
| `paper_usage` | **Program metadata** | Useful coordination field; not scientifically intrinsic and not part of execution. |
| `parent_record_id`, `perturbation_metadata` | **Generic evaluation infrastructure** | Parent/child perturbation relationships are useful for any controlled invariance/sensitivity task. |

### C. SACRE/QCCS-specific execution fields or semantics

These should ultimately be treated as a task specification/adapter over the resource rather than as defining features of Bioethics Bench itself.

| Current field/object | Why it is SACRE-specific | Future home |
|---|---|---|
| `candidate_pools.public / expert / framework` as a required fixed object | SACRE v1 represents three source layers and generates cross-source QCCS comparisons across them. Other computational-bioethics tasks need not partition positions this way. | `sacre-qccs-v1` task adapter: map generic candidate/source-role objects into the three SACRE pools. |
| candidate `source_pool` restricted to `public`, `expert`, `framework` | Encodes SACRE's represented source taxonomy directly in every candidate. | Generic resource may retain source/stakeholder roles, but task-specific role vocabulary should be declared by the adapter/task spec. |
| candidate IDs constrained to `pubN`, `expN`, `fwN` | The prefix leaks SACRE pool membership into identity. | Preserve existing IDs for v1 reproducibility; future generic IDs can be stable opaque candidate IDs with task-local aliases. |
| `benchmark_profile` | Current profiles define public/expert/framework pool counts, cross-source pair count, lineage, and representation compatibility. | Task profile registry associated with `sacre-qccs-v1`, not a universal resource requirement. |
| `required_aggregation` | Encodes SACRE Step-5 ranking semantics needed when unequal partner counts make Sum geometry-biased. | SACRE task/run configuration; adapter may derive/validate it from the selected candidate field. |
| profile `cross_source_pairs` | Explicitly the size of the SACRE/QCCS comparison matrix. | Derived SACRE task metadata. |
| profile geometry (`2x2x2`, `1x2x3`, etc.) | Describes a SACRE source-partition shape rather than a general property of a bioethics case. | Derived SACRE task metadata. |

## 2. What the current SACRE boundary proves

The current `vendor-bench-full-corpus.mjs` provides a useful implementation-level audit because it shows what is copied into the actual execution substrate.

At the family/resource level SACRE carries:

- `case_id`, title, short description, decision question;
- domains/tags;
- stipulations;
- rights notes;
- representation identity/version/hash/status;
- jurisdiction context;
- scenario text;
- candidate IDs and texts.

At the task-specific level it carries or derives:

- `benchmark_profile`;
- the three pool partitions;
- required aggregation;
- candidate geometry;
- cross-source pair count;
- partner counts / structural asymmetry.

The vendor deliberately verifies that the corpus-declared aggregation requirement agrees with what SACRE derives from the candidate IDs and geometry, and refuses to vendor a mismatch. This is strong evidence that **resource truth and SACRE execution semantics already meet at an identifiable adapter boundary**, even though they currently live in one record schema.

The vendor does not copy candidate source citations, policy-basis metadata, or full provenance into the object used to calculate the SACRE run. Their absence from the computational projection does not make them optional scientifically: they establish what the candidate represents and whether the research object is source-grounded. The separation instead clarifies two different validity questions:

- **resource validity/provenance:** is the represented object defensible and reconstructable from its sources?;
- **task/execution validity:** given that object and a declared SACRE task mapping, does QCCS/aggregation execute reproducibly under the intended semantics?

That distinction should become explicit in the standalone Bioethics Bench paper.

## 3. Proposed non-breaking architecture

```text
BIOETHICS BENCH RESOURCE
case identity • decision question • scenario • stipulations
candidate positions • provenance • policy basis • source relationships
representations • versioning • rights • lifecycle/review/exposure
                 |
                 | task adapter selects/maps resource objects
                 v
TASK SPECIFICATION
sacre-qccs-v1
source-role mapping: public / expert / framework
candidate aliases: pubN / expN / fwN
pair-generation rule: cross-source QCCS
scoring instruction/scale version
profile / geometry
aggregation requirement and ranking semantics
                 |
                 v
EVALUATION / EXECUTION
models • humans • ensembles • hybrids
repeats • perturbations • representations • providers/configurations
pair scores • explanations • rankings • provisional Final Policy
reliability • robustness • disagreement • operational outcomes
```

This architecture preserves the current SACRE task exactly while allowing future tasks to use the same source-grounded objects differently. Examples could include position identification, source-to-policy entailment, explanation, disagreement localization, framework classification, retrieval, provenance verification, or alternative normative-computation methods. Those examples are **design possibilities**, not demonstrated mature task families.

## 4. Compatibility rule for v1

Do not refactor the canonical 68 records merely to make the architecture look cleaner.

For the current v1 lineage:

1. existing `public/expert/framework` pool objects and `pub/exp/fw` IDs remain canonical execution identifiers;
2. current `benchmark_profile` and aggregation rules remain part of the executable projection;
3. SACRE vendoring/pinning continues to use the current hashes and refusal checks;
4. any future generalized schema must provide a deterministic adapter that reproduces the present executable projection before it can replace current records;
5. a generalized resource representation is a **new architectural layer/version**, not a silent reinterpretation of v1.

This avoids forcing a rerun or re-pin merely for conceptual refactoring. Only a change to the executable projection — scenario, candidate text/IDs, pool mapping, geometry, aggregation, or other consumed task semantics — should trigger the existing execution-relevant change rule.

## 5. Implications for P2, P3, and P4

### P2

P2 v49 can accurately describe Bioethics Bench as developing toward a broader source-grounded computational-bioethics research infrastructure, with SACRE/QCCS as its first mature task family. This audit strengthens the architectural basis for that claim but **does not convert the design direction into demonstrated method-neutrality**.

No P2 revision is required solely because this audit exists. P2 should change only if its wording materially overstates or understates the current architecture.

### P3

P3 should freeze two distinct objects:

1. a **resource snapshot** — exact versioned Bench cases/representations/candidate content and provenance state;
2. a **SACRE task specification** — pool mapping, QCCS instruction/scale, pair-generation rule, model/provider/configuration, aggregation, and exclusion/retry rules.

This is more precise than treating a Bench record as an indivisible experimental condition. It will make representation effects, task effects, model effects, and aggregation effects easier to localize.

### P4

Human/model comparison should likewise distinguish the represented resource object from the task instructions shown to human and computational evaluators. Matched human and model judgments require identical case/candidate content where intended, while instruction/UI differences must be versioned as evaluation conditions rather than hidden inside the resource.

## 6. Implications for the standalone Bioethics Bench paper

The paper's strongest generalization argument should be **architectural and empirical about the current boundary**, not rhetorical breadth.

A defensible contribution sequence is:

1. source-grounded normative objects became necessary when SACRE/REai moved from demonstration to systematic investigation;
2. building those objects required explicit identity, provenance, policy basis, representation, lifecycle, and exposure controls that are useful beyond one scoring method;
3. the current implementation audit shows that SACRE-specific semantics are concentrated in a separable candidate-partition/profile/aggregation layer;
4. resource → task → evaluation separation therefore has a concrete implementation path that preserves v1;
5. future task families can test whether the resource actually generalizes in practice.

Until at least one additional mature non-SACRE task family is specified and exercised, write **designed for extension**, **architecturally separable**, or **supports a task-adapter architecture** rather than **method-neutral** as an established empirical result.

## 7. Next implementation/research steps

1. **Specify `sacre-qccs-v1` explicitly** as a task contract: source-role mapping, candidate aliases, pair generation, QCCS version/instruction/scale, aggregation semantics, and required outputs.
2. **Define a generic candidate/source-role model** on paper before changing schema: preserve candidate identity/text/provenance/policy basis while allowing task-specific grouping/mapping.
3. **Build a read-only adapter prototype** that projects current v1 records into the explicit SACRE task contract and compare its projection with the existing vendor output. No canonical record changes yet.
4. **Add adapter equivalence tests** so future generalized representations cannot silently change current SACRE execution semantics.
5. **Specify one additional research task** whose scientific purpose comes from the resource rather than from demonstrating breadth for its own sake. A source-to-policy support/entailment task is a strong candidate because the current review program already creates relevant evidence objects; position/source retrieval or disagreement localization are alternatives.
6. **Update the standalone paper plan** around this concrete separation and its truth ceiling.
7. Keep independent human source-to-policy review as a quality/release layer; it is not a developmental execution gate.

## 8. Claim ceiling after this audit

Supported now:

- the current Bench schema contains a large method-reusable resource/provenance core;
- SACRE-specific coupling is identifiable and concentrated in the source-pool/profile/geometry/aggregation layer;
- current SACRE software already acts as an implicit adapter/projection from richer Bench records into an executable SACRE object;
- a non-breaking resource → task → evaluation architecture is technically plausible while preserving v1 semantics.

Not yet supported:

- Bioethics Bench has demonstrated method-neutrality across multiple computational-bioethics methods;
- the proposed generalized schema has been implemented or validated;
- future task families will be psychometrically or scientifically useful merely because the schema can express them;
- human source fidelity or human/model correspondence has been established.

## Evidence inspected

- `schemas/case.schema.json`
- `schemas/benchmark-profiles.json`
- representative Full Corpus record `data/benchmark/m045-posthumous-use-stored-reproductive-material-natural-concise-v1.json`
- `docs/CASE_CONSTRUCTION_STANDARD.md`
- SACRE `scripts/vendor-bench-full-corpus.mjs`
- current Bench/SACRE coordination and execution-capability surfaces

**COMPLETE FOR FIRST-PASS STRUCTURAL AUDIT.**
