# Coordinator Directive — Bioethics Bench Lane

**Current objective:** move Bioethics Bench from a scientifically coherent standalone resource manuscript into submission-ready research infrastructure without turning source review into a developmental execution gate.

For a cold start, read:

1. `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
2. `docs/PROGRAM_COORDINATION.md`
3. `docs/BRANCH_COORDINATION.md`
4. `docs/COMPLETION.md`
5. `docs/papers/BENCH_MANUSCRIPT_V7_HANDOFF.md`
6. `docs/papers/BENCH_SUBMISSION_POSITIONING.md`
7. `docs/papers/BENCH_V7_CITATION_CLAIM_AUDIT.md`
8. `docs/papers/BENCH_STANDALONE_FINDINGS.md`
9. `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
10. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
11. `docs/strategy/GENERIC_CANDIDATE_SOURCE_ROLE_MODEL.md`
12. `docs/strategy/GENERIC_RESOURCE_ONTOLOGY_STRESS_TEST.md`
13. for source review, `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md` and generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`

## Current manuscript frontier

**CURRENT Bioethics Bench v7 — Patterns-positioned manuscript development draft:**  
https://docs.google.com/document/d/1aL0sM1Ilx9ihPF7T7705vBCOe2iLN4SQ/edit

V6 is preserved as the immediate superseded source; v5, v4, and v3 remain preserved as earlier manuscript/planning states. Only v7 carries `CURRENT`.

V7 is a **15-page submission-positioned manuscript development draft** with four figures and five tables. The v6 Methods/Results spine is preserved. V7 adds Patterns-facing Highlights and `The bigger picture`, revises the abstract, positions the paper against moral-evaluation benchmarks, evaluation science, and dataset/model documentation, and expands the bibliography. The exact final DOCX was rendered and inspected page-by-page; **15/15 pages passed**.

The current primary venue recommendation is **Patterns (Cell Press), Resource article**. NeurIPS Evaluations & Datasets is a strong later-cycle alternative; JBI is a plausible methodology-oriented fallback. The venue and literature analysis is complete in `docs/papers/BENCH_SUBMISSION_POSITIONING.md`. Do not restart generic venue research unless a concrete submission constraint changes.

The exact v7 quantitative/source/literature claim surface has also been audited in `docs/papers/BENCH_V7_CITATION_CLAIM_AUDIT.md`; it passes for manuscript-development use while preserving the independent-review boundary.

## Current verified resource state

The executable Full Corpus contains **34 families / 68 matched concise+detailed records / 210 unique family-level candidates**. The broader disposition program covers **200 families**: 34 Full Corpus executable, one Featured-only, 82 held for additional evidence, 71 research-complete but not executable under the current source/decision structure, and 12 held after candidate audit. The executable count is an output of evidence/eligibility constraints rather than a preset target.

Current SACRE task-role counts are 69 Public, 55 Expert, and 86 Framework. Policy-basis distribution is Public 49 source-informed / 20 direct; Expert 49 direct / 6 source-informed; Framework 86 framework-derived. Current records remain `status: draft` and `reviewed_by_human: false`.

The 34 executable families occupy **eight natural candidate geometries**. Only 8/34 are 2×2×2; 26/34 are evidence-qualified asymmetric shapes. Current geometry yields **428 unordered cross-source QCCS pairs per representation and 856 across one matched concise+detailed pass**.

Current machine/model-assisted quality evidence includes 122/122 recorded PMIDs resolving, candidate-level reading of all 69 direct-policy-evidence candidates, and bridge checks for all 55 source-informed policy inferences. Whole-document omission review has examined five families by that method; **29 remain unexamined**. Do not extrapolate a corpus-wide omission/error rate.

## Closed architecture gates — do not redo

The first-pass generalization audit, explicit `sacre-qccs-v1` task contract, read-only adapter, and all-record equivalence gate are complete.

Verification established across all 68 records:

- **0/68 execution/task-semantic differences**;
- **36/68 stale Bench `content_hash` values** in SACRE's older pin with no accompanying execution-relevant change;
- those differences were **provenance-only drift**;
- SACRE re-vendored/re-pinned to merged Bench `main` commit `077b36ff1eb9662e93549b1f4261691960cfa605`;
- refreshed adapter projection and SACRE vendor payload are byte-for-byte identical;
- SACRE Full Corpus regression tests pass.

Current SACRE vendor payload SHA-256: `7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`.

Do **not** restart the generalization audit, re-specify `sacre-qccs-v1`, or redo adapter equivalence.

## Generic resource-model milestone

The future generic candidate/source-role model and corpus stress test remain conceptual/shadow architecture. The stress test requires separate axes for source/document type, evidence function, translation mode, support direction, warrant scope, source assertion summary, Bench bridge summary, and relation-level review identity/fingerprint, with many-to-many source↔candidate relations.

Do **not** migrate canonical v1 merely for architectural neatness. A future source-to-policy warrant task remains scientifically promising but is not a frozen second task.

## Current priorities

### 1. Build the submission-linked resource package

The next substantive Bench work is **resource release readiness**, not another manuscript rewrite. Prepare the repo-side package reviewers need to inspect and cite the manuscript-linked resource state:

- submission release checklist and immutable-state plan;
- citation metadata (`CITATION.cff` or equivalent) aligned with actual authorship and manuscript state;
- compact Resource/Data Card describing composition, provenance architecture, intended/out-of-scope use, review state, rights, versioning, and task/evaluation separation;
- exact validation and reference-task projection commands;
- archival DOI/release plan without claiming a DOI until one actually exists;
- stable schema/task/manifest pointers.

Do not silently promote the current completion-candidate manifest into a public independently reviewed release. Any submission-linked release must state its actual draft/review lifecycle clearly.

### 2. Verify concrete Patterns Resource requirements

The substantive venue fit is already established. Before final typesetting/submission, verify current article-specific author requirements where accessible; where public Cell author pages are unavailable, record the unresolved requirement and obtain direct editorial clarification rather than inventing word/figure limits.

### 3. Author/coauthor submission-facing review

After the resource package and format checklist are stable, perform byline/affiliation/funding/competing-interest/author-contribution completion and a prose review. Do not churn versions for purely speculative formatting.

### 4. Continue source/review/release maturation in parallel

Apply source/candidate repairs because evidence warrants them, never to optimize rankings or executable count. Independent review remains a quality/release layer, **not a developmental execution gate**.

### 5. Preserve P3/P4 gates

For P3/P4 freeze separately: **resource snapshot**, **task specification**, and **evaluation/execution condition**. No confirmatory P3 execution or human P4 fielding is authorized by v7 or the submission package.

## Cross-repository change rule

**Execution-relevant:** candidate IDs/texts, scenario/task meaning, profile/geometry, required aggregation, executable-set membership, or execution-relevant schema. Notify SACRE, re-vendor/re-pin/reverify, and rerun affected results if the executed object changed.

**Provenance-only:** citations, provenance summaries, source-review metadata, or resulting record-hash drift with unchanged executable projection. Refresh provenance/pins as needed; **do not automatically rerun model outputs**.

**Documentation/manuscript/release-metadata only:** coordination, manuscript prose, resource cards, citation metadata, release checklists, figures/tables with no executable effect. No product rerun unless the work exposes an execution defect.

## Evidence ceiling

V7 may claim the 200-family disposition process, 34-family/68-record executable substrate, 210 unique candidates, eight natural geometries, 428/856 pair-count consequences, structural/companion invariants, verified resource/task boundary, 36-record provenance-only refresh, bounded source-review repair examples, and the differentiated relationship to adjacent benchmark/evaluation/documentation literatures.

V7 may **not** claim independent corpus-wide human source validation, QCCS reliability or construct validity, moral correctness of a provisional Final Policy, human-model correspondence, method-neutrality across multiple mature tasks, a production generic v2 schema, or a mature source-to-policy warrant benchmark.

Current developmental SACRE evidence remains developmental: the 8-family / 16-record geometry tranche is complete; the attempted 68-record census produced 20 complete single executions and 48 incomplete non-results.

## Handoff rule

Every substantive handoff states: **Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

Do not manually edit generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`.

**CURRENT NEXT DEPENDENCY: submission-linked resource/release package + concrete Patterns requirement verification + author/coauthor review, while source review continues in parallel.**
