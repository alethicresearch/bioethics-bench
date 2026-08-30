# Bioethics Bench Full Corpus — Self-Handoff

**Last updated: 2026-08-29.** This is the durable onboarding record for a fresh thread, collaborator, or agent working on the Full Corpus. It replaces earlier completion-candidate narratives and branch-era instructions that are no longer current.

For the wider program, first read the canonical central self-handoff in:

`xnuxi/sacre-prototype` → `docs/CENTRAL_COORDINATOR_CONTINUITY.md`

Then read this repo's:

- `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
- `docs/PROGRAM_COORDINATION.md`
- `docs/COORDINATOR_DIRECTIVE.md`
- `docs/BRANCH_COORDINATION.md`
- `docs/COMPLETION.md`
- `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

## 1. What the project is

Bioethics Bench is a **source-grounded research infrastructure for computational bioethics** within the broader **Doing Ethics with AI (DEWA)** research program.

The core DEWA sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is not simply the test set for ReflectiveEquilibrium.AI. It was developed because systematic SACRE/REai investigation required stable, versioned, source-grounded normative objects, but its intended scientific identity is broader.

Use a three-layer model:

```text
RESOURCE LAYER
cases • decision questions • candidate positions • sources/provenance • stipulations • representations • versioning
   ↓
TASK LAYER
SACRE/QCCS first; future identification, explanation, disagreement, retrieval, framework, and other tasks
   ↓
EVALUATION LAYER
models • humans • ensembles • hybrids • future computational-bioethics systems
```

SACRE/QCCS is the first mature task family rather than the definition of the resource.

## 2. Current verified Full Corpus state

Current executable Full Corpus:

- **34 executable families**;
- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- all 200 researched families have dispositions;
- current executable records remain `status: draft`;
- `reviewed_by_human: false` on all current executable records.

PR #10 has been merged. Do not resurrect the obsolete 106-family / 212-record completion-candidate story as current state; it was never the verified committed canonical corpus.

The generated corpus/review surfaces, not old prose counts, govern current truth.

## 3. Canonical v1 method boundary

Canonical SACRE v1 uses three represented source classes:

- Public
- Expert
- Framework

A source pool can legitimately contain one candidate when the source field genuinely converges on one action-distinct position. Natural geometry is allowed; records are not forced into a regular 2×2×2 or 3×3×3 shape.

When candidate partner counts differ, the declared aggregation must avoid geometry-induced score magnitude bias; current asymmetric profiles use Mean. Complete required matrices are required before official ranking/provisional Final Policy.

The generalized/partial-source architecture track remains a future method/research direction. Do not silently relax canonical v1 source semantics merely to increase executable n.

## 4. Policy basis and provenance

Source pool and evidentiary policy basis are separate dimensions. Current policy-basis vocabulary includes:

- `direct-policy-evidence`
- `source-informed-policy-inference`
- `framework-derived-policy`
- `synthetic-author-constructed-policy`

The executable Full Corpus currently contains direct, inferred, and framework-derived candidates; it does not rely on undisclosed synthetic candidates.

Candidate construction must preserve action-target alignment and make inferential bridges explicit. A preference, behavior, or uptake measure is not automatically a policy recommendation unless the bridge to the represented action is justified.

## 5. Current review state

Structural validation and source fidelity are distinct.

Current model-assisted review has checked direct-policy-evidence candidates against sources and checked source-informed bridges for whether the inference holds. This remains model-assisted review, **not independent human review**.

A deliberate whole-document omission-review method has so far examined five families. **Twenty-nine families remain unexamined by that method.** Do not infer a corpus-wide finding rate and do not describe the remaining families as cleared.

For live review work, use:

1. `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
2. generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
3. `docs/full-corpus/review/research-tasks/README.md`
4. verdict ingestion tooling described there

The generated `RESEARCH_HANDOFF.md` carries unit fingerprints and is rewritten by the tooling. **Do not edit it manually.**

## 6. Human review is not a developmental execution gate

Independent human source-to-policy review remains important for release/quality. Under the current DEWA program decision, it does **not** block developmental or paper-facing SACRE execution.

SACRE may execute a precisely pinned current snapshot with explicit provenance/evidence labels. Later source repairs may require reruns; rerunnability is an expected feature of the program.

This does not authorize confirmatory P3 or human P4 studies.

## 7. Current downstream execution evidence

SACRE has already produced developmental evidence using the Full Corpus lineage:

- geometry-stratified tranche: **8 families / 16 concise+detailed records / 216 QCCS calls**;
- selected repeat/stability calibration showing heterogeneous case-level behavior;
- attempted corpus-wide pass: **68 records / 856 planned calls**, halted after 234 calls because provider credit was exhausted;
- **20 records complete** and usable as single-execution developmental evidence;
- **48 records incomplete** and therefore non-results.

Do not write SACRE outputs into Bench records as though they were source/release validation. Model execution and corpus-source fidelity are different evidence questions.

## 8. Current paper relationships

### P1

Bioethics Bench can inform the specification paper through construction findings: source independence, action alignment, natural geometry, provenance, representational boundaries, and the distinction between structural validity and source fidelity. Do not turn P1 into the Bench methods paper.

### P2

P2 has completed its v49 submission-composition stage. The current submission artifacts are:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- Supplementary Information: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit
- preserved v48 maximal authorial master: https://docs.google.com/document/d/12W2-SHZ1CSdbTfQWO1i0nXcCViVR_AiI/edit

Bench enters P2 because systematic investigation of SACRE/REai required stable source-grounded research objects. That role is now composed and QA'd in v49. Future Bench work should update P2 only when a new finding materially changes a factual or interpretive claim; otherwise the resource should mature in its own paper and release track.

### P3

Bench can provide frozen/versioned cases and task objects for computational validation. Following the completed generalization audit, P3 should distinguish the **resource snapshot** from the **SACRE task specification** rather than treating a Bench record as an indivisible experimental condition. P3 owns reliability, robustness, model/provider, representation, perturbation, aggregation/ranking, QCS/QCCS, and RE-Iteration behavior.

### P4

Bench cases can support matched human/model evaluation, but human recruitment, instructions, ethics/IRB, and fielding belong to P4. Resource content and task/instruction/UI conditions should be versioned separately where they differ.

### Standalone Bioethics Bench paper

Current Drive plan:

**Bioethics Bench v3 — research publication plan — reader-led P1 style**  
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The paper owns resource construction/release methods, source grounding, task abstraction, evaluation architecture, baselines, versioning/governance, and extensibility.

## 9. Generalization audit — first pass complete

The structural audit is recorded in:

`docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

It classifies current fields into:

1. **intrinsic computational-bioethics resource fields**;
2. **generic task/evaluation/governance fields**;
3. **SACRE-specific execution fields and semantics**.

The central finding is that the reusable resource/provenance core is already substantial. The strongest SACRE coupling is localized to the fixed public/expert/framework pool object, `pub/exp/fw` candidate aliases, SACRE benchmark profiles/geometry/cross-source pairing, and `required_aggregation`.

Current SACRE vendoring already functions as an implicit projection from the richer Bench record into an executable SACRE object. The non-breaking next sequence is therefore:

- keep canonical v1 records and hashes unchanged;
- specify **`sacre-qccs-v1`** as an explicit task contract;
- build a read-only adapter that reproduces the current executable projection;
- add equivalence tests before any generalized schema can replace v1;
- specify a scientifically motivated additional task only when mature enough.

This is an architectural separation result, **not** empirical proof of method-neutrality across multiple mature task families.

## 10. Cross-repo change rule

Before telling SACRE to re-vendor, classify the change.

### Execution-relevant
Candidate ids/texts, scenario/task meaning, profile, geometry, required aggregation, executable-set changes, or execution-relevant schema.

**Action:** notify SACRE, re-vendor/re-pin/reverify, and rerun affected paper-facing results if the executed object changed.

### Provenance-only
Citations, provenance summaries, non-execution basis metadata, or resulting content-hash drift with unchanged executable projection.

**Action:** propagate truthfully; no automatic semantic rerun.

### Documentation-only
Review docs, dossiers, coordination prose, writebacks, and the first-pass generalization audit.

**Action:** no SACRE product action unless the finding reveals an execution defect.

## 11. Manuscript writeback

Use:

- `docs/papers/BENCH_FINDINGS_FOR_P1_P2.md` for current drafting priorities;
- `docs/papers/MANUSCRIPT_WRITEBACK.md` for the chronological record.

Every new manuscript-facing finding should include exact evidence, evidence class, limits, target paper, and cross-repo dependency.

## 12. Handoff format

Every substantive handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

## 13. Claims that remain out of bounds

- The corpus is independently human-reviewed.
- Structural validation establishes source fidelity.
- Findings in the whole-document-reviewed subset establish a corpus-wide rate.
- SACRE execution validates Bench source construction.
- One-run developmental results establish reliability or model ranking.
- Bioethics Bench has already demonstrated method-neutrality across multiple computational-bioethics methods.
- Human-model correspondence has been established.

Fetch live generated state before reusing any number from this handoff.
