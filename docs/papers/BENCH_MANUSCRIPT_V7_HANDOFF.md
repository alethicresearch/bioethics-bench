# Bioethics Bench — Manuscript v7 Handoff

**Date:** 2026-08-30  
**Current manuscript:** `CURRENT — Bioethics Bench v7 — Patterns-positioned manuscript development draft`  
**Drive:** https://docs.google.com/document/d/1aL0sM1Ilx9ihPF7T7705vBCOe2iLN4SQ/edit

## Stage completed

V7 is the **submission-positioning pass** over the validated v6 Methods/Results spine. It does not change canonical Bench records, SACRE task semantics, resource counts, or the current release state. It reframes the paper for a data-science Resource audience, adds the missing adjacent-literature argument, and preserves the v6 quantitative/resource results unchanged.

The exact promoted DOCX rendered to **15 pages** and was inspected page-by-page at 100%. All 15 pages passed with no clipping, overlap, split table rows, broken figure text, missing glyphs, or pagination defects. V6 is preserved in the same Drive folder as the immediate superseded source.

## Changed

### Primary submission position is now explicit

The current recommended first target is **Patterns (Cell Press), Resource article**. Patterns formally launched a flexible Resource article type in 2025 for software, datasets, and other research resources, including technical and governance/history material. The OpenML Resource paper provides a close publication analogue: a reusable evaluation infrastructure whose scientific contribution includes datasets/resources, task specification, reproducibility, standards, and an ecosystem rather than a new predictive model.

A dedicated strategy document now records the venue reasoning and alternatives:

`docs/papers/BENCH_SUBMISSION_POSITIONING.md`

Primary hierarchy:

1. Patterns — Resource;
2. NeurIPS 2027 Evaluations & Datasets if deliberately waiting for a public archival release and track-specific metadata maturity;
3. Journal of Biomedical Informatics as a methodology-oriented fallback;
4. Scientific Data Article only as a less-direct alternative; Data Descriptor is not recommended for the current argument;
5. Journal of Medical Ethics better suited to a focused conceptual derivative than the standalone resource paper.

### Front matter is now Patterns-facing

V7 adds:

- four concise **Highlights**;
- a **The bigger picture** section explaining why benchmark construction is especially consequential in ethics;
- keywords;
- a revised subtitle: `Source-grounded normative research objects for reproducible computational bioethics`;
- a revised abstract that opens from the evaluation-science problem rather than from the internal DEWA program.

The bigger-picture claim is deliberately restrained: Bioethics Bench does not encode moral truth; it makes the normative objects of computational evaluation more reproducible, inspectable, and scientifically contestable.

### The Introduction now positions the paper against three adjacent literatures

#### 1. Moral-judgment and machine-ethics benchmarks

The Introduction now situates Bioethics Bench against:

- Moral Machine (Awad et al., Nature 2018);
- ETHICS (Hendrycks et al., ICLR 2021);
- Delphi / Norm Bank (Jiang et al., Nature Machine Intelligence 2025);
- TRIAGE (Kirch et al., Scientific Reports 2025).

The distinction is not that these resources are inadequate; they measure different objects. They make moral preference, moral-judgment prediction, or ethically salient decision performance computationally measurable. Bioethics Bench addresses the upstream measurement problem: the institutional decision, candidate policy field, source-to-policy warrant, fixed assumptions, representation state, and task projection must themselves be reconstructable before model comparisons over them are interpretable.

#### 2. Evaluation science

The paper now connects to HELM and the Benchmark Lottery. HELM demonstrates the value of standardized scenarios, metrics, and execution conditions; the Benchmark Lottery shows that benchmark/task choice can alter comparative conclusions. Bioethics Bench extends that concern upstream in normative domains, where changing a policy candidate, source relation, or scenario stipulation can change the ethical object under study even if evaluator and metric are fixed.

#### 3. Dataset/model documentation and provenance

The paper now cites:

- Data Statements (Bender & Friedman, 2018);
- Datasheets for Datasets (Gebru et al., 2021);
- Model Cards (Mitchell et al., 2019);
- Data Cards (Pushkarna, Zaldivar & Kjartansson, 2022).

Bioethics Bench inherits their transparency logic but adds a normative-warrant relation: what the source itself asserts, its evidence function, the translation into an actionable candidate, support direction, warrant scope, and task-local use must remain separable.

### Discussion now reads as a Resource/data-science contribution

The Discussion now explicitly locates the paper at the intersection of moral-evaluation benchmarks, evaluation science, and research-artifact documentation. It also connects the resource/task/evaluation structure to general evaluation infrastructure such as HELM and OpenML while preserving the domain-specific addition: source-to-policy warrant must itself be inspectable because normative candidates are authored representations rather than observed answer labels.

### References expanded

V7 adds manuscript references for the adjacent literature above and OpenML. The original corpus/source-grounding references remain intact.

## Verified

- Final DOCX: **15 pages**.
- Figures: **4**.
- Tables: **5**.
- All 15 rendered pages inspected at 100%.
- New front matter fits cleanly across pages 1–2.
- Related-work prose fits cleanly across pages 3–4.
- Existing tables retain no-split rows.
- Figures 1–4 unchanged and visually clean.
- Expanded references fit cleanly across pages 14–15.
- V7 is promoted as the sole `CURRENT` Bioethics Bench manuscript in Drive.
- V6 is preserved as a superseded source rather than overwritten.

## Product / paper impact

The paper now has a submission-facing identity rather than only an internally coherent architecture. The differentiated contribution is:

> Bioethics Bench is a research infrastructure for constructing, versioning, reviewing, and reusing normative objects in computational bioethics. It separates source-grounded resource identity from task semantics and evaluation conditions, and demonstrates that distinction operationally through all-record equivalence verification.

This is stronger than framing the work as a new LLM ethics benchmark or a dataset of dilemmas.

## Evidence status

The v6 claim ceiling remains unchanged. Literature positioning does not enlarge the empirical claims of the corpus.

Supported:

- current 200-family disposition and 34-family/68-record executable substrate;
- eight natural candidate geometries, 210 candidates, 428 pairs/representation, 856 matched pass;
- explicit structural/companion invariants;
- bounded source-review failure/repair examples;
- 0/68 task-semantic differences and 36/68 provenance-only hash drift;
- corpus-driven many-to-many warrant architecture;
- relationship/difference from adjacent moral-evaluation, evaluation-science, and documentation literatures.

Not established:

- independent corpus-wide human source validation;
- QCCS reliability or construct validity;
- moral correctness of a provisional Final Policy;
- human-model correspondence;
- method-neutrality across multiple mature tasks;
- implemented generic v2 schema;
- mature source-to-policy warrant task.

## Writeback status

- V7 promoted in Drive.
- V6 preserved as superseded source.
- Submission-positioning document created.
- Bench coordinator directive: advance to v7.
- Central coordinator status / Drive LIVE: advance to v7.
- No canonical Bench/SACRE execution writeback is required because this is manuscript-only work.

## Cross-repo dependency

None. No executable record or task field changed.

## Next dependency

The next paper stage is a **submission-readiness audit**, not another conceptual rewrite:

1. complete the quantitative/source/reference claim audit for the exact v7 text;
2. create an archival release plan for the manuscript-linked resource state (release tag + DOI + citation metadata + compact resource/data card) before actual Patterns submission;
3. inspect current Patterns Resource author requirements directly or obtain editor confirmation where the public page is inaccessible;
4. decide whether any of the five current tables should move to supplementary material for readability rather than because of an assumed word/page limit;
5. conduct author/coauthor prose review and affiliation/byline completion;
6. continue source review in parallel without converting it into a developmental execution gate.

Do not implement v2 schema, freeze the second task, or launch confirmatory P3/P4 as a consequence of v7.

**COMPLETE FOR THIS STAGE.**
