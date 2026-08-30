# Bioethics Bench — Submission and Literature Positioning

**Date:** 2026-08-30  
**Current manuscript:** v6 — Methods/Results manuscript development draft  
**Primary recommended target:** **Patterns (Cell Press), Resource article**

## 1. Submission recommendation

### Primary target — Patterns, Resource

Patterns is the strongest current continuous-submission fit for the manuscript Bioethics Bench has become. The journal defines itself across the full breadth of data science and across computational, life, social-science, and humanities domains. In July 2025, Patterns formally launched a flexible **Resource** article type for new or existing software, datasets, and other research resources; the editor explicitly describes the format as accommodating technical material alongside qualitative material about organization, governance, history, and maintenance of a resource. The inaugural Resource collection includes OpenML, whose paper treats datasets, tasks, runs, standards, governance, and open-science infrastructure as scientific contributions rather than reducing the paper to a conventional model-performance result.

This maps closely onto the strongest Bioethics Bench contribution:

> **Bioethics Bench develops source-grounded normative research objects whose provenance, representation, task projection, review state, and experimental use can be versioned separately, and demonstrates that separation through a fully verified reference-task projection across the current corpus.**

Patterns is also unusually compatible with the paper's interdisciplinary center. Bioethics Bench is simultaneously a computational resource, a data/provenance architecture, an evaluation-science intervention, and a methodological contribution to bioethics. A conventional bioethics journal would force the resource and reproducibility contribution to the margins; a conventional ML venue could force the bioethical warrant problem into a dataset-label framing that the paper is specifically designed to reject.

Current sources supporting this fit:

- Hufton AL. *Open-source software for data science.* Patterns. 2025;6(7):101324. doi:10.1016/j.patter.2025.101324. The editorial formally launches the Resource article type and states that submissions may describe software, datasets, or other resources, with a flexible format allowing technical and governance/history material.
- Bischl B, et al. *OpenML: Insights from 10 years and more than a thousand papers.* Patterns. 2025;6(7):101317. doi:10.1016/j.patter.2025.101317. This is a concrete Resource-paper analogue for scientific infrastructure whose contribution includes precise task definitions, standardized evaluations, open resources, and an ecosystem rather than a new predictive model.
- Patterns journal description: cross-disciplinary data science, open science, and research outputs including datasets, software, code, algorithms, and infrastructure.

### Strategic alternative — NeurIPS Evaluations & Datasets 2027

The redesigned NeurIPS Evaluations & Datasets Track is conceptually excellent. Its 2026 call explicitly treats **evaluation as an object of scientific study**, welcoming responsible dataset development frameworks, benchmarks and benchmarking methodologies, audits, protocols, tools, documentation practices, and work that clarifies what claims an evaluation can support under what assumptions. That language is unusually close to the resource/task/evaluation distinction developed in Bioethics Bench.

However, the 2026 submission deadline was May 6, 2026 and has passed. A 2027 E&D submission would make sense only if the program deliberately waits and uses the additional cycle to create a public, archival resource release with the hosting and metadata expected of the track. The 2026 rules require accessible datasets/code at submission and Croissant metadata including Responsible AI fields for dataset contributions. Thus NeurIPS 2027 is a strong alternative trajectory, not the best immediate submission path.

### Secondary journal alternative — Journal of Biomedical Informatics

JBI is plausible if the paper is reframed more strongly as a biomedical-informatics methodology contribution. Its scope emphasizes new methodologies and techniques with general applicability, grounded in real biomedical or clinical problems. The current manuscript does meet part of that description, but its center is evaluation/resource epistemology and normative provenance rather than an informatics algorithm or clinical decision-support method. JBI is therefore a credible fallback, especially if later computational validation strengthens the empirical comparison, but is not the cleanest first fit for the standalone resource paper.

### Not recommended as the primary home

**Journal of Medical Ethics:** useful for later focused conceptual papers, but the standalone resource manuscript would require severe compression and would lose much of the reproducibility, infrastructure, and evaluation-science contribution.

**Scientific Data Data Descriptor:** inappropriate for the present argument. Scientific Data states that Data Descriptors should not contain results, discussion, or analyses. Bioethics Bench's all-record equivalence experiment, resource/task identity result, warrant-ontology argument, and review/release architecture are not incidental—they are central scientific contributions. A later public Bench release could support a separate Data Descriptor, but stripping the current manuscript to that format would weaken it.

## 2. Literature map — what Bioethics Bench is adjacent to, and what it adds

The manuscript should position itself at the intersection of three literatures rather than claiming an empty field.

### A. Moral-judgment and machine-ethics benchmarks

**Moral Machine** (Awad et al., Nature 2018) elicited roughly 40 million choices across 233 countries and territories, making public moral preferences measurable at global scale. It is a landmark descriptive moral-preference resource.

**ETHICS** (Hendrycks et al., ICLR 2021) introduced benchmark tasks spanning justice, deontology, virtue ethics, utilitarianism, and commonsense morality, evaluating whether models predict widespread human ethical judgments.

**Delphi / Norm Bank** (Jiang et al., Nature Machine Intelligence 2025) unified large-scale human moral-judgment datasets and trained a system to predict descriptive moral judgments, explicitly releasing Norm Bank as a representation of particular participants' judgments rather than moral truth.

**TRIAGE** (Kirch, Hebenstreit & Samwald, Scientific Reports 2025) is the closest medical-neighbor benchmark: clinician-created mass-casualty dilemmas are used to evaluate ethical decision-making by LLMs under ethical and adversarial prompts.

These contributions ask important questions about moral preference, moral-judgment prediction, or ethical decision performance. Bioethics Bench begins one level upstream. It asks what must be fixed and inspectable before a computational comparison over bioethical problems is interpretable at all: the institutional decision question, candidate policy field, source-to-policy warrant, stipulations, representation state, review lineage, and task projection. Public preferences can be one evidentiary input, but they are not silently promoted into an institutional answer key.

**Positioning sentence for the manuscript:**

> Existing machine-ethics benchmarks have made moral preferences, judgment prediction, and ethically salient decision performance computationally measurable; Bioethics Bench addresses the upstream measurement problem of making the normative research object itself reconstructable, source-grounded, and separable from the task used to evaluate it.

### B. Evaluation science and benchmark design

**HELM** (Liang et al., 2022/2023) demonstrates the scientific value of explicit scenarios, multiple metrics, standardized execution conditions, and transparent model comparisons.

**The Benchmark Lottery** (Dehghani et al., 2021) shows that benchmark and task selection can materially change comparative conclusions, arguing that benchmark choice itself encodes what a field treats as important.

Bioethics Bench extends this evaluation-science concern upstream. In normative domains, conclusions can shift not only because a different metric or task was chosen, but because a scenario, policy candidate, source relation, or representation was silently changed. The resource/task/evaluation separation is therefore a response to a specifically normative form of benchmark fragility.

**Positioning sentence:**

> Evaluation science has shown that task and metric choices shape the conclusions benchmarks support; normative evaluation adds a further source of fragility because the represented ethical object—including its competing policies and evidentiary construction—is itself an authored experimental object.

### C. Dataset/model documentation and provenance

**Data Statements** (Bender & Friedman, TACL 2018), **Datasheets for Datasets** (Gebru et al., CACM 2021), **Model Cards** (Mitchell et al., FAT* 2019), and **Data Cards** (Pushkarna, Zaldivar & Kjartansson, 2022) establish a mature transparency tradition: document origins, composition, collection and annotation, intended use, limitations, evolution, and relevant evaluation conditions rather than treating data/models as context-free artifacts.

Bioethics Bench inherits that transparency commitment but requires a domain-specific extension: **normative warrant provenance**. A citation is insufficient. A computational-bioethics resource must distinguish what a source itself says, what evidentiary function it plays, how the source was translated into an actionable policy candidate, whether it supports or qualifies that construction, what scope the warrant covers, and which task-local role later consumes the candidate.

**Positioning sentence:**

> Dataset documentation frameworks make provenance and intended use explicit; Bioethics Bench adds a normative-warrant layer that records the inferential relation between source material and the policy object subsequently exposed to computational evaluation.

## 3. The differentiated contribution

The manuscript should avoid three weak framings:

1. **"A bioethics benchmark for LLMs."** Too narrow; it makes a reusable resource look like a model test set.
2. **"A dataset of ethical dilemmas."** Incorrect; the resource's candidate fields, provenance, stipulations, representations, task projections, and review states are the contribution.
3. **"A benchmark without a moral answer key."** True but incomplete; several existing resources already distinguish descriptive judgment from moral truth.

The stronger framing is:

> **Bioethics Bench is a research infrastructure for constructing, versioning, reviewing, and reusing normative objects in computational bioethics. It separates source-grounded resource identity from task semantics and evaluation conditions, and it demonstrates that this distinction is operational rather than merely conceptual through all-record equivalence verification.**

The all-record provenance-refresh result should remain central because it is what turns an architecture claim into an empirical reproducibility result: 36/68 resource content hashes changed while 0/68 task-semantic projections changed. That is the concrete demonstration that better provenance can change the identity of a research object without necessarily changing the computational condition executed over it.

## 4. Patterns-facing manuscript changes

A v7 aimed at Patterns should make targeted changes rather than reconstruct the validated Methods/Results core.

### Front matter

Add concise **Highlights** and a **The bigger picture** section in the style commonly used by Patterns articles. The bigger-picture text should explain why benchmark construction is especially consequential in ethics: there may be no uncontested answer label, and public preferences, professional guidance, legal rules, empirical premises, and normative frameworks are evidentially different things.

### Introduction

Insert three compact related-work movements:

1. moral judgment / machine ethics — Moral Machine, ETHICS, Delphi/Norm Bank, TRIAGE;
2. evaluation science — HELM, Benchmark Lottery;
3. documentation/provenance — Data Statements, Datasheets, Model Cards, Data Cards.

Do not write this as a conventional catalogue of prior benchmarks. Each cluster should create pressure for the next component of the Bench architecture.

### Abstract

Keep the current quantitative results but open with the broader evaluation-science problem rather than "computational bioethics increasingly relies...". State that benchmark results are only interpretable if the represented normative objects and their provenance are themselves stable and reconstructable.

### Discussion

Explicitly connect Bioethics Bench to reusable data-science infrastructure: the resource provides persistent normative objects; task contracts provide declared projections; evaluation conditions provide experiment identity. This is analogous in spirit to the separation of data/tasks/runs in general evaluation infrastructures while adding source-to-policy warrant because normative candidates are authored representations rather than observed labels.

### Open-science readiness

Patterns' Resource format increases the importance of a clean archival resource story. Before submission, move from "repository available" to a release package that is straightforward for reviewers to inspect:

- immutable release tag/manifest;
- archival DOI (e.g. Zenodo) for the submitted resource state;
- machine-readable license and citation metadata;
- stable task contract and schema documentation;
- exact commands to validate and project the reference task;
- if feasible, a compact machine-readable resource card/data card documenting scope, source/review state, intended uses, and limits.

Independent human review is still not a developmental execution gate, but the paper must state the submitted resource state precisely. If the submission precedes independent review, it should be framed as a precisely versioned developmental/release-candidate resource, not as a fully validated gold-standard benchmark.

## 5. Current target hierarchy

1. **Patterns — Resource**: proceed now; best fit for the current scientific object and continuous-submission path.
2. **NeurIPS 2027 Evaluations & Datasets**: excellent alternative if deliberately waiting for a public archival release and track-specific metadata/hosting maturity.
3. **Journal of Biomedical Informatics**: credible fallback if later reframed toward biomedical-informatics methodology and strengthened empirical evaluation.
4. **Scientific Data Article (not Data Descriptor)**: possible but less direct; Data Descriptor specifically is not recommended for the present scientific argument.
5. **Journal of Medical Ethics**: better suited to a focused conceptual derivative than the standalone resource paper.

## 6. Immediate revision instruction

Proceed to **v7 — Patterns-positioned manuscript development draft** by preserving the v6 Methods/Results spine and making only submission-facing changes:

- Patterns-style highlights + bigger-picture framing;
- literature-positioned Introduction;
- revised abstract and discussion seams;
- expanded bibliography with the adjacent-work sources above;
- no schema migration;
- no second-task freeze;
- no confirmatory P3/P4 execution;
- render and inspect the complete DOCX before promotion.

**COMPLETE FOR SUBMISSION-POSITIONING STAGE; v7 manuscript revision is the next artifact.**
