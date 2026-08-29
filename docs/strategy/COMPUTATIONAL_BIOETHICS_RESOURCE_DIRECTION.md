# Bioethics Bench — Computational Bioethics Resource Direction

**As of 2026-08-29.** This document records the program-level destination of Bioethics Bench so that its current integration with SACRE does not become accidental architectural lock-in.

## Where Bioethics Bench sits

Part I, *Doing Ethics with AI: Practical Ethics Engineering, Product-Led Philosophy, & Computer-Aided Ethics* (Ghose, Rasaee, Singer, & Savulescu, 2026a), introduces **Doing Ethics with AI (DEWA)** as a general paradigm for specifying practical ethical reasoning, constructing it as computational systems, and studying those systems experimentally and in use. Computational bioethics is a major domain realization of that paradigm.

Bioethics Bench emerged inside this program for a concrete reason: systematic investigation of SACRE and ReflectiveEquilibrium.AI required stable, source-grounded, versioned normative research objects that could be executed repeatedly under controlled conditions. That origin should be preserved, but it should not define the endpoint of the resource.

The intended identity is broader:

> **Bioethics Bench is a source-grounded, structured, extensible research infrastructure for computational bioethics.**

SACRE/QCCS is its first mature task family. It is not the definition of the resource.

## Resource → task → evaluation

The design should keep three layers conceptually and technically separable:

```text
RESOURCE LAYER
Bioethical research objects
case/scenario • decision question • candidate positions • sources/provenance
policy basis • stipulations • representations • geometry • versioning/review state
        ↓
TASK LAYER
Computational questions over those objects
SACRE/QCCS first
future: source-grounded policy identification • normative explanation • framework analysis
        disagreement analysis • representation sensitivity • retrieval/source-use • other methods
        ↓
EVALUATION LAYER
Protocols and metrics
models • humans • ensembles • hybrids • future computational-bioethics systems
```

This separation matters because a durable computational-bioethics resource should survive changes in the first method built on top of it. Resource objects should not silently encode the assumption that every future entrant must run SACRE; equally, broadening the resource should not damage the complete and reproducible SACRE path that motivated its construction.

## Resource layer

The resource layer owns the bioethical objects and their epistemic provenance. Core elements include:

- case/scenario and the decision question actually under evaluation;
- candidate positions and stable candidate identifiers;
- the relation of candidates to public, expert, framework, or other source classes;
- source identifiers and provenance chains;
- policy-basis classification, including direct-policy evidence, source-informed policy inference, framework-derived policy, and any future disclosed author-constructed comparator;
- stipulations that define what an evaluator is being asked to hold fixed;
- concise/detailed companion representations where used;
- natural candidate/source geometry rather than forced symmetric pools;
- versioning, lineage, review state, freeze state, and release state.

Source fidelity is not ancillary metadata. If a represented policy does not accurately express the source to which it is attributed, the benchmark is measuring performance on a different normative object from the one it claims to represent. Provenance and review therefore belong to construct validity, not merely documentation quality.

## Task layer

Tasks define computational questions over the underlying objects. SACRE/QCCS is currently the most developed task family because it can consume the existing candidate pools, conduct cross-source convergence judgments, aggregate them into coherence profiles, and generate rankings and provisional Final Policies.

The broader resource should nevertheless permit other scientifically useful tasks where the record supports them—for example source-grounded candidate identification, source entailment or warrant assessment, normative explanation, framework mapping, disagreement localization, representation sensitivity, retrieval/source-use, or evaluation through other computer-aided-ethics methods. These should be added because they answer useful research questions, not simply to manufacture task count.

## Evaluation layer

Evaluation protocols define what is compared and how. Entrants may include language models, domain-adapted models, retrieval-augmented systems, ensembles, human evaluators or panels, hybrid systems, or future normative-computation architectures. No universal moral answer key or single “ethical intelligence” score is assumed. The benchmark should instead support explicit multidimensional profiles appropriate to the task: agreement, stability, representation robustness, source fidelity, explanatory adequacy, ranking behavior, disagreement localization, operational reliability, latency/cost, or other preregistered outcomes.

## Generalization audit

Before release architecture hardens, classify the current schema and code into three categories:

1. **intrinsic resource fields** — needed to represent the bioethical research object independently of any one method;
2. **generic task/evaluation fields** — useful across multiple computational methods;
3. **SACRE-specific execution fields** — required specifically to run SACRE/QCCS or reconstruct its outputs.

The audit should ask whether any field currently treated as intrinsic is actually SACRE-specific, whether task execution metadata has been embedded in the case ontology, and whether a non-SACRE evaluator could consume the underlying resource without pretending to be a SACRE implementation. It should also ask the converse question: whether abstraction would remove information needed for exact SACRE replay.

The goal is **not** refactoring for elegance. It is not an execution gate for current paper-facing developmental work. The aim is to preserve exact SACRE support while avoiding coupling that would unnecessarily prevent Bioethics Bench from becoming a shared resource for computational bioethics.

## Current evidence ceiling

Current executable Full Corpus state remains **34 families / 68 concise+detailed records / 210 unique family-level candidates**. The current records remain `status: draft` and `reviewed_by_human: false`.

Mechanical/source-warrant work is substantial but bounded: 122/122 currently recorded PMIDs resolve; all currently declared direct-policy-evidence candidates and inference bridges have undergone the current model-led review workflow. Structural validity is not source fidelity, and whole-document omission review is incomplete. Findings from the small set examined by that method must not be extrapolated to a corpus-wide error rate.

Developmental SACRE execution demonstrates that the resource can function as a measurement substrate. It does **not** yet establish an independently human-reviewed, frozen, released, general-purpose computational-bioethics benchmark.

## Publication relation

```text
DEWA / P1
  └─ philosophical requirements for explicit representation and provenance
       ↓
P2 / REai construction
  └─ need for standardized, repeatable normative research objects
       ↓
BIOETHICS BENCH
  ├─ P3 computational validation substrate
  ├─ P4 human comparative study substrate
  ├─ Computational Bioethics shared resource
  └─ future methods / systems / tasks
```

- **P1:** Bench appears only where it teaches philosophical lessons about representation, provenance, source independence, and source fidelity.
- **P2:** owns the readable story of why standardized benchmark objects became necessary, how Bench integrates with SACRE/REai, and what developmental executions revealed.
- **P3:** inherits Bench as a computational measurement substrate.
- **P4:** can use frozen Bench objects to compare human and model judgments under common conditions.
- **Computational Bioethics handbook chapter:** presents Bench as a new kind of method/resource artifact for the domain.
- **Standalone Bioethics Bench paper:** owns the resource itself—construction, source-grounding, release methods, task abstraction, baselines, governance, and extension.

Provisional paper title: **Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics**.

Current Drive prospectus v2: https://docs.google.com/document/d/1rcr_Cd2tzPWiwps_R2rgKZh3yIXIc1Lj/edit

Overall DEWA Drive root: https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe

## Immediate repo work

1. Keep the current executable corpus structurally valid and preserve exact SACRE compatibility.
2. Continue source/warrant and whole-document review in parallel with developmental paper work.
3. Produce the resource/task/evaluation generalization audit before public release architecture hardens.
4. Separate generic resource objects from task-specific execution metadata where this can be done without destabilizing the tested path.
5. Define non-SACRE tasks only when scientifically useful and supported by the records.
6. Treat independent review, version freeze, release manifests, governance, and reproducible baselines as release-paper requirements rather than developmental execution gates.
7. Keep the standalone Bench paper deep enough to establish a reusable scientific resource rather than reducing it to a short project prospectus.

## Reference

Ghose, S., Rasaee, K., Singer, P., & Savulescu, J. (2026a). *Doing ethics with AI: Practical ethics engineering, product-led philosophy, & computer-aided ethics.* Manuscript in preparation.
