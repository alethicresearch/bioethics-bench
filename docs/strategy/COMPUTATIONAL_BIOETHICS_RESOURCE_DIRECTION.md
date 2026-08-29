# Bioethics Bench — Computational Bioethics Resource Direction

**As of 2026-08-29.** This document records the program-level destination of Bioethics Bench so current SACRE integration does not become accidental architectural lock-in.

## Governing identity

Bioethics Bench was developed because systematic evaluation of SACRE/ReflectiveEquilibrium.AI required stable, source-grounded, versioned normative problems. Its intended identity is broader:

> **a source-grounded, structured, extensible research infrastructure for computational bioethics.**

SACRE/QCCS is the first mature task family. It is not the definition of the resource.

## Three layers to keep separable

### 1. Resource layer

Owns the bioethical research objects:

- case/scenario and decision question;
- candidate positions;
- source and provenance relations;
- policy-basis classification;
- stipulations;
- concise/detailed companion representations;
- candidate/source geometry;
- versioning, lineage, review state, and release state.

### 2. Task layer

Defines computational questions over those objects. Current mature example: SACRE/QCCS execution. Future tasks may include source-grounded policy identification, normative explanation, framework analysis, disagreement analysis, representation sensitivity, retrieval/source-use, or other computational-bioethics methods.

### 3. Evaluation layer

Defines protocols and metrics for comparing models, humans, ensembles, hybrids, or other computational systems. No universal moral answer key or single “ethical intelligence” score is assumed.

## Generalization audit

Before release architecture hardens, classify current schema/code into:

1. intrinsically bioethics-resource fields;
2. generic task/evaluation fields;
3. SACRE-specific execution fields.

The goal is **not** refactoring for elegance and it is **not** a gate on current paper-facing execution. The goal is to preserve perfect SACRE support while preventing avoidable coupling that would block other computational-bioethics uses.

## Current evidence ceiling

Current executable state remains 34 families / 68 concise+detailed records / 210 unique family-level candidates. Structural validity and model-led source/warrant review are substantial, but independent human review and whole-document omission review are incomplete. `reviewed_by_human=false` remains true across the current records. Developmental SACRE executions demonstrate usefulness as a measurement substrate; they do not yet establish a fully validated general-purpose resource release.

## Publication relation

- **P1 / DEWA:** Bench appears only for philosophical lessons about representation, provenance, source independence, and source fidelity.
- **P2:** owns the readable account of why standardized benchmark objects were needed, how Bench integrates with SACRE/REai, and developmental benchmark use/results.
- **P3:** inherits Bench as the computational validation substrate.
- **P4:** can use the same frozen objects for human empirical/comparative validation.
- **Computational Bioethics handbook chapter:** introduces Bench as a new methodological/resource artifact for the domain.
- **Standalone Bioethics Bench paper:** owns the resource itself — construction, source-grounding, release methods, task abstraction, baselines, governance, and extension.

Provisional paper title: **Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics**.

Drive prospectus: https://docs.google.com/document/d/1UhVznDE-B3SkGWfwtFz8X1fxhYtYUSJJ/edit

## Immediate repo work

1. Keep current executable corpus structurally valid and preserve current SACRE compatibility.
2. Continue source/warrant and whole-document review in parallel.
3. Produce a generalization audit identifying accidental SACRE coupling.
4. Separate generic resource objects from task-specific execution metadata where this can be done without destabilizing current runs.
5. Define non-SACRE tasks only when scientifically useful; do not delay the current DEWA papers merely to prove breadth.
6. Treat independent review, version freeze, release manifests, governance, and reproducible baselines as release-paper requirements rather than developmental execution gates.
