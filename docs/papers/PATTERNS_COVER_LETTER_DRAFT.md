# Draft cover letter — Patterns

> **Submission metadata note:** replace bracketed author/contact fields after the author list is formally locked. The scientific claims below are aligned to Bioethics Bench v7 and the current verified repository state.

Dear Editors,

We are pleased to submit **“Bioethics Bench: Source-grounded normative research objects for reproducible computational bioethics”** for consideration as a Resource-style contribution in *Patterns*.

Computational evaluation in normative domains faces an upstream measurement problem that conventional benchmark design does not fully solve. Before a model or human evaluator can be compared on a bioethical question, researchers have already decided what the institutional decision is, which facts are fixed, which policy alternatives count as distinct, what sources warrant those alternatives, and how empirical preferences, professional guidance, law, and normative frameworks are translated into executable representations. If those choices drift, a technically repeatable computation can cease to be scientifically comparable.

Bioethics Bench addresses that problem by treating the normative object itself as versioned research infrastructure. Each executable family preserves a decision question, controlled scenarios and stipulations, action-distinct candidate policies, provenance and source relationships, matched representation variants, review state, and version lineage. The architecture then separates this enduring **resource** from the **task contract** applied to it and from the **evaluation condition**—model, human evaluator, perturbation, repetition, or protocol—under which that task is executed.

The current Full Corpus is the evidence-qualified output of a 200-family research and disposition program. Thirty-four families currently meet v1 executability criteria, yielding 68 matched concise/detailed records and 210 unique family-level candidates. Rather than regularizing the corpus by inventing additional candidates, Bioethics Bench preserves eight naturally occurring candidate geometries. These imply 428 unordered cross-source comparisons per representation, or 856 across one matched concise/detailed pass under the first mature reference task.

The manuscript also provides a direct reproducibility demonstration of the resource/task boundary. We formalized the existing SACRE/QCCS use of Bioethics Bench as an explicit `sacre-qccs-v1` task contract and implemented a read-only adapter. Across all 68 current records, the adapter found **zero execution- or task-semantic differences** relative to the prior SACRE vendor representation while detecting stale provenance-bearing content hashes in 36 records. After re-pinning, the adapter projection and SACRE vendor payload were byte-for-byte identical. Because the change was provenance-only rather than execution-relevant, no model judgments needed to be rerun. This result makes a practical distinction between reproducibility of the executed condition and provenance evolution of the underlying research resource.

We believe the paper fits *Patterns* particularly well because its primary contribution is not a new moral-answer benchmark or a model leaderboard. It is a reusable data/evaluation infrastructure and a methodology for making constructed normative research objects inspectable, versioned, and experimentally separable from the computational methods applied to them. The work connects benchmark and evaluation science, dataset documentation and provenance, computational ethics, and bioethics, while exposing a general problem for AI evaluation in domains where benchmark inputs themselves encode contested interpretive choices.

The manuscript is deliberately explicit about its current evidence boundary. Bioethics Bench is not presented as a source of morally correct answers; the current Full Corpus remains draft and is not independently human-validated across all source-to-policy relations. The paper does not claim QCCS reliability, human-model correspondence, or method-neutrality across multiple mature tasks. Instead, it reports the resource construction, structural and provenance controls, bounded source-review findings, and verified reference-task projection that are presently established, while treating independent source review and later empirical validation as separate scientific layers.

The machine-readable records, schemas, validation tooling, resource documentation, release-candidate manifest, and task contract are available in the public Bioethics Bench repository. A submission-facing Resource Card and archival-release plan distinguish the immutable reviewer snapshot from a later formal public release, allowing reviewers to inspect exactly what underlies the manuscript without overstating the corpus's release state. Bench-authored case content is licensed CC BY 4.0; third-party sources retain their original rights. The final submission will identify the exact immutable repository snapshot used for peer review.

Thank you for considering this work. We would welcome review from readers spanning data and evaluation science, benchmark methodology, AI/ML evaluation, computational ethics, and bioethics.

Sincerely,

**[Corresponding author]**  
[Affiliation]  
[Email]  
On behalf of the authors
