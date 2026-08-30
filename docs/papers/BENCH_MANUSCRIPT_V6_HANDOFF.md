# Bioethics Bench — Manuscript v6 Handoff

**Date:** 2026-08-30  
**Current manuscript:** `CURRENT — Bioethics Bench v6 — methods-results manuscript development draft`  
**Drive:** https://docs.google.com/document/d/1skorTkdWrlUtz25EMnXTDwGB8n23Hl02/edit

## Stage completed

V6 converts the source-integrated v5 manuscript into a substantially more paper-like **Methods/Results development draft**. It does not change canonical Bench records, SACRE execution semantics, or the current release state. The exact promoted DOCX was rendered to 13 pages and visually inspected page-by-page after the final pagination repair; all pages passed. V5 is preserved in the same Drive folder as a superseded source.

## Changed

### Corpus construction and eligibility are now explicit methods

The manuscript now states that the Full Corpus executable subset is the output of a **200-family research and disposition program**, not a target-sized sample. Current disposition state is represented directly in Table 1:

- 34 executable Full Corpus families;
- 1 Featured-only family maintained in a separate release lineage;
- 82 held for additional evidence;
- 71 research-complete but not executable under the current source/decision structure;
- 12 held after candidate audit;
- 68 executable records, two matched representations per executable family;
- 210 unique family-level candidates.

Candidate construction now explicitly distinguishes `direct-policy-evidence`, `source-informed-policy-inference`, and `framework-derived-policy`, and explains action-distinctness, dated standing guidance, content hashes, source objects, and review/version state as parts of the research object.

### Structural validation is now a reproducible method rather than a generic claim

The Methods text now names the relevant validator invariants: schema conformance, canonical content hashes, profile/lineage consistency, provenance and policy-basis requirements, reciprocal companion representation links, explicit stipulated-fact disclosure, action-duplicate guards, and Mean aggregation where geometry creates unequal partner counts.

### Natural geometry is now a corpus result

Table 2 reconstructs the eight evidence-qualified Full Corpus geometries:

| Geometry | Families | Candidates/family | Cross-source pairs/representation |
|---|---:|---:|---:|
| 2×2×2 | 8 | 6 | 12 |
| 1×2×2 | 1 | 5 | 8 |
| 2×1×2 | 7 | 5 | 8 |
| 2×1×3 | 7 | 6 | 11 |
| 2×2×3 | 6 | 7 | 16 |
| 2×3×3 | 1 | 8 | 21 |
| 3×2×3 | 3 | 8 | 21 |
| 1×2×3 | 1 | 6 | 11 |

Only 8/34 families have the symmetric 2×2×2 shape; 26/34 are asymmetric because source ecology was not regularized by inventing additional candidates. The geometry distribution reconstructs **210 unique family-level candidates** and **428 unordered cross-source QCCS pairs per representation**, or **856 across one matched concise+detailed pass**.

### Stipulations and representation are now concrete experimental controls

The manuscript uses M094 and M045 to show why a stipulation is not scene-setting but a measurement control that holds a case at the represented policy divergence. It reports the internal scenario/action review across all 34 executable families while preserving the review boundary: this was model-assisted construction-quality work, not independent human source validation. M033 is retained as the important boundary case where two policies can choose the same immediate action while differing in future institutional behavior.

The companion representation contract is stated explicitly: per case frame, decision question/profile match, stipulations are identical, candidate pools are byte-identical, scenarios differ, and reciprocal companion IDs are required. This makes concise/detailed representation a controlled experimental axis.

### SACRE/QCCS is now presented as a task method

Section 6 now specifies the reference task mathematically and procedurally. For P Public, E Expert, and F Framework candidates, required unordered cross-source comparisons are:

`P×E + P×F + E×F`

QCCS v1.0.0 uses the `conv+` operationalization; complete matrices are required for official ranking; Mean is required when partner counts differ; outputs such as ranking and provisional Final Policy are task/evaluation outputs rather than intrinsic resource labels.

### The 68-record equivalence gate is now a formal Results section

Section 7 and Table 3 now report the all-record adapter experiment as a reproducibility result:

- 34 families / 68 records evaluated;
- 0/68 execution- or task-semantic differences;
- 36/68 stale resource content hashes in the pre-refresh SACRE vendor state;
- differences localized to provenance-bearing resource identity rather than scenario/candidate/profile/geometry/pair/aggregation semantics;
- post-refresh adapter projection and SACRE vendor payload byte-for-byte identical;
- Full Corpus regression test passed;
- consequence: provenance re-pin and re-verification, **no model/QCCS rerun** for provenance-only change.

The manuscript explicitly limits this result to reproducibility/identity separation; it does not claim QCCS reliability, construct validity, or moral correctness.

### Validation/release architecture is retained but made more paper-like

Table 4 keeps structural validation, identifier resolution, model-assisted candidate/source review, whole-document omission review, independent human source review, task equivalence, P3 computational validation, and P4 human comparison as distinct scientific layers. Figure 4 retains developmental/paper-facing execution as a permitted parallel path on precisely pinned draft resources, while independent review, freeze, release, and confirmatory/human-study authorization remain distinct states.

### References and availability

The internal `Claim boundary` block was removed from the manuscript body. The prior selected-reference stub was replaced by a manuscript-style reference section covering the sources actually used in the current argument, and a `Data and code availability` section now names the Bench repository, the equivalence-verified Bench commit `077b36ff1eb9662e93549b1f4261691960cfa605`, the Full Corpus completion-candidate manifest, and the corresponding SACRE re-pin merge commit `4ed4b24ab99d7427195a21393474c02700274ee6`.

## Verified

- Final DOCX: **13 pages**.
- Figures: **4**.
- Tables: **5**.
- Final render inspected page-by-page at 100%.
- A final table-row pagination defect in Table 4 was repaired using Word `cantSplit`; the document was rerendered and every page re-inspected.
- No clipping, overlap, broken figure text, split table rows, missing text, or pagination defects remain.
- V6 is promoted as the sole `CURRENT` Bench manuscript in Drive.
- V5 is preserved as a superseded source rather than overwritten.

## Product / paper impact

The standalone paper has moved beyond architecture/prospectus and beyond source-example integration. It now has a defensible manuscript spine with explicit corpus Methods, quantitative resource Results, a formal reference-task method, and a reproducibility experiment. The main scientific contribution remains the resource architecture and its demonstrated separation from task execution; SACRE/QCCS remains the first mature reference task rather than the ontology of Bioethics Bench.

## Evidence status

Supported at this stage:

- current 200-family disposition and 34-family/68-record executable substrate;
- eight natural candidate geometries and their pair-count consequences;
- explicit companion-representation and structural-validation invariants;
- bounded model-assisted construction/source-review evidence;
- all-record `sacre-qccs-v1` equivalence and provenance-only refresh result;
- conceptual many-to-many warrant-relation architecture grounded in current corpus cases.

Not established:

- independent corpus-wide human source validation;
- QCCS reliability or construct validity;
- moral correctness of a provisional Final Policy;
- human-model correspondence;
- method-neutrality across multiple mature tasks;
- an implemented generic v2 schema;
- a frozen source-to-policy warrant benchmark task.

## Writeback status

- Bench manuscript: **v6 promoted**.
- V5: preserved as superseded source.
- Bench coordinator directive: update to v6 frontier.
- Central coordinator status / Drive LIVE: update to v6 frontier.
- No P1 or P2 reopening required by this manuscript-only pass.
- P3 still inherits the separate resource-snapshot / task-specification / evaluation-condition freeze rule.

## Cross-repo dependency

None from this manuscript pass: no canonical record or task semantics changed. The already verified Bench→SACRE pin remains authoritative. If future source review changes only provenance-bearing fields, refresh/re-pin provenance without automatically rerunning models; if a scenario, candidate, geometry, task mapping, or aggregation rule changes, re-verify and rerun affected execution as appropriate.

## Next dependency

The next paper stage should be **submission-facing scientific positioning rather than another Methods reconstruction**:

1. choose and assess likely target venues and article type/length constraints;
2. strengthen the Introduction against relevant benchmark/resource, computational ethics, and normative-AI literature;
3. run a full citation/reference/claim audit, including every quantitative corpus statement and every source-review example;
4. decide which current figures/tables remain in the main text versus supplement under venue constraints;
5. perform author/coauthor prose review once the venue-facing shape is selected;
6. continue source review in parallel, without treating it as a developmental execution gate.

Do **not** implement v2 schema, freeze a second task, or launch confirmatory P3/P4 solely because v6 is manuscript-ready for submission positioning.

**COMPLETE FOR THIS STAGE.**
