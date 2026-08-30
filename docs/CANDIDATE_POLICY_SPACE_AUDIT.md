# Bioethics Bench — Scenario and Policy-Representation Audit

**Status:** active completion gate  
**Date:** 2026-08-30  
**Applies to:** Full Corpus completion, future Featured releases, SACRE suitability, demonstration selection, RE-Iteration suitability

## Why this audit exists

Bioethics Bench has become substantially stronger as a source-grounded research resource: cases now carry explicit sources, provenance, assumptions, and controlled concise/detailed representations. During that improvement, another property became easier to miss: a case can be very well sourced while the Policy candidates supplied to SACRE are compressed into neighboring formulations that do not faithfully preserve the normative positions supported by the sources.

This matters because SACRE does not formally take a separate `decision` object as input. In the governing specification, Step 1 identifies a **Scenario** and Steps 2A–2C identify source-tagged **Policy candidates** from Public Preferences, Expert Judgments, and Ethical Frameworks. SACRE then measures convergence among those represented Policy candidates, aggregates the completed relation field, identifies a provisional Final Policy, and may revise selected positions through RE-Iteration.

A `decision_question` can be useful metadata for making a Scenario intelligible and bounded, but it is not a SACRE primitive and must not become an ontology that dictates which candidates have to exist. Likewise, an explicit `decision-maker` may clarify the practical setting but is not a formal SACRE input.

The construction goal is therefore not to exhaust a predeclared menu of decision branches. It is to represent a sufficiently specified normative Scenario and recover the **natural number of substantively distinct Policy positions that the relevant sources genuinely support**.

The older SACRE example library makes the contrast visible. Those examples were not source-grounded research objects, but many intentionally represented sharply different normative positions. That breadth made the coherence structure and later revision behavior easier to see. The completed Bench should combine the strengths of both generations: scholarly grounding **and** faithful preservation of the normative position space.

## Core distinction

A candidate field should be assessed on two separate dimensions.

### 1. Evidential adequacy

Is each Policy candidate warranted by the source class and provenance claimed for it? Does the source actually support the position, recommendation, rule, or reasoning bridge recorded in the case file?

### 2. Representational adequacy

Taken together, do the candidates preserve the substantively distinct normative positions naturally supported by the evidence? Or have distinct positions been merged, translated into a common cautious institutional formulation, duplicated as near-paraphrases, or invented to satisfy a desired geometry?

A case may pass evidential adequacy and still be a weak SACRE research object if its represented Policy field is distorted or overly compressed. Conversely, genuine convergence among independent sources is not a failure and should not be artificially diversified.

## What counts as a substantively distinct Policy position

Distinctness should be judged at the level of the normative commitment and its practical implications. Useful axes include:

- **recommended action or policy:** permit, require, prohibit, fund, withdraw, disclose, defer, prioritize;
- **authority:** patient, parent, clinician, institution, court, regulator, community, independent reviewer;
- **governing threshold:** when a position applies, changes, escalates, or permits an exception;
- **scope:** universal rule, targeted rule, case-by-case discretion, restricted setting;
- **allocation principle:** need, expected benefit, equality, lottery, priority, desert, instrumental value;
- **sequence:** voluntary measures first, staged escalation, immediate mandate, mandatory reassessment;
- **procedure:** review, appeal, consultation, shared decision-making, independent authorization;
- **exception structure:** categorical position versus a defined exception or balancing rule;
- **time horizon:** immediate intervention versus delayed, reviewable, or prospective policy;
- **burden distribution:** who bears risk, restriction, cost, sacrifice, or responsibility;
- **normative commitment:** where two positions may recommend similar actions in the present Scenario but do so under materially different rules that would diverge under nearby conditions.

Different sources do not need to disagree in order to count as independent normative sources. But source labels alone do not establish candidate distinctness.

## Failure modes to flag

### Near-paraphrase

Two candidates differ in wording but express substantially the same normative position.

### Nested-caveat duplication

One candidate is effectively another candidate plus a modest safeguard or procedural clause without a materially different normative commitment.

### Source-slot completion

A candidate exists because a `public`, `expert`, or `framework` slot was expected rather than because the evidence supports a distinct position.

### Decision-question overfitting

Candidate construction is forced to mirror an editorially written `decision_question`, even where the sources organize the normative problem differently. The question should summarize the Scenario, not pre-author the candidate taxonomy.

### Constraint-induced collapse

Benchmark stipulations remove so much of the live normative structure that independently supported positions become indistinguishable. Stipulations should prevent hidden factual completion, not decide the normative problem in advance.

### Evidence-to-policy overcompression

Distinct source positions are translated into the same cautious institutional rule even though the underlying evidence supports materially different normative commitments or prescriptions.

### Rationale diversity without position diversity

Candidates cite different values or theories but are written so that they amount to the same represented position.

### Position merging

Two or more source-supported positions are collapsed into one synthetic candidate for neatness or symmetry, reducing the normative structure SACRE is meant to analyze.

## Scenario audit

Before candidate construction, ask:

1. Does the Scenario contain enough factual and institutional context for the represented positions to be interpreted consistently?
2. Have we added any stipulation that silently resolves the normative tension rather than merely fixing a factual ambiguity?
3. Does concise versus detailed wording preserve the same normative Scenario and candidate field?
4. Is a `decision_question` helping the reader understand the Scenario, or has it become an artificial mold that narrows the source search?
5. Are we treating an explicit decision-maker as useful context rather than as a required SACRE primitive?

The Scenario should be bounded enough to support meaningful comparison, but it need not be redescribed as a single formal `decision` object.

## Policy-representation audit

Before a case is treated as **suitable for SACRE execution**, answer:

1. What substantively distinct Public or affected-community positions are genuinely supported?
2. What substantively distinct Expert or professional positions are genuinely supported?
3. What substantively distinct Framework-derived positions are genuinely supported, with explicit reasoning bridges?
4. Have any independent positions been merged during editorial translation?
5. Are any candidates near-paraphrases or nested versions of another?
6. Are any candidates present mainly to fill a source-class quota or preferred geometry?
7. If independent sources genuinely converge, is that convergence preserved transparently?
8. Are the candidates sufficiently comparable in level of abstraction for QCCS to represent a meaningful relation?
9. Does the final field preserve the **natural number of action- or commitment-distinct candidates supported by each pool**?

The audit does **not** ask whether the candidates exhaust every option that an editor could imagine from the `decision_question`.

## Demonstration-rich classification

SACRE suitability and demonstration quality are different judgments.

A case is **SACRE-suitable** when the Scenario is adequately specified and each declared source class contains at least one defensible source-grounded Policy candidate, with meaningful cross-source comparisons under the current SACRE specification.

A case is **demonstration-rich** when, in addition, its naturally supported Policy field makes SACRE's coherence structure especially informative to inspect or revise. Indicators include:

- several materially different positions across the complete field;
- disagreement distributed across more than one normative axis;
- informative mixtures of convergence, distance, and conflict;
- a field in which RE-Iteration can make a substantively meaningful revision rather than merely polish wording;
- a Scenario understandable enough that a reader can see why the candidate relations matter.

These are editorial/research judgments, not automatic numeric thresholds. Lexical distance is not policy distinctness, and dramatic disagreement is not a validity criterion.

## Do not force disagreement

The purpose of this audit is not to maximize pairwise distance. Some bioethical Scenarios have substantial cross-source consensus, and that consensus may itself be important.

When serious independent sources converge:

- retain the convergence;
- do not invent a more extreme candidate for visual interest;
- do not split one position into paraphrases to increase candidate count;
- retain the case in the scholarly resource when otherwise sound;
- classify demonstration quality separately from research completeness.

## Relationship to candidate geometry

Candidate counts should follow the evidence, not the visual neatness of a fixed geometry. The current SACRE specification requires at least one Policy candidate in each of the three source classes. It does not substantively require `2 × 2 × 2`.

A `2 × 2 × 2` design can still be useful for a controlled study, but it must arise by selecting cases that naturally satisfy that geometry after scholarly construction. The construction process must not reverse-engineer positions to fill a protocol.

Asymmetric fields are legitimate. Their aggregation implications must be handled by the SACRE specification and study protocol rather than erased at the resource-construction stage.

## Immediate audit priorities

1. **Current Featured release:** audit all 20 released cases against Scenario adequacy, source fidelity, natural candidate distinctness, position merging, and demonstration richness. Do not silently rewrite released records.
2. **Full Corpus development:** replace decision-question-first construction with Scenario-first, source-grounded position recovery before final freeze.
3. **Released-case corrections:** where the audit identifies a substantive representational defect, create a new explicit version with change history rather than mutating the released record in place.
4. **Demonstration layer:** distinguish `research-complete`, `SACRE-suitable`, and `demonstration-rich` rather than assuming one Featured designation does all three jobs.
5. **Historical comparison:** use archived SACRE examples as qualitative stress tests for whether source-grounded reconstruction has collapsed a meaningful normative position, while never treating those unsourced examples as evidence.
6. **RE-Iteration:** compare revision behavior on naturally broad and naturally convergent candidate fields before attributing weak revisions to the revision prompt.

## RE-Iteration finding, 2026-08-30

The current RE-Iteration revision prompt in `xnuxi/sacre-prototype` was compared with the prompt introduced in the original Phase 3 implementation (commit `64033f578d2df41d04f8aaf6020bc0d034cc24cb`). The operative instructions are unchanged: preserve the candidate's essential normative commitment and source perspective, make the smallest sufficient revision, and move convergence toward the stated target. The directive-proposal prompt introduced in Phase 4b is likewise unchanged in its core instructions.

Accordingly, recent weaker suggested directives or revised candidates should **not** be diagnosed as prompt drift without further evidence. More plausible contributors include:

- narrower or overcompressed starting Policy fields in newer Bench records;
- changes in the QCCS operationalization and resulting convergence matrix;
- model/provider/configuration differences;
- target and anchor policies selected by the directive;
- later RE-Iteration execution semantics, including full fresh re-execution after revision.

The next RE-Iteration audit should compare the same Scenario and candidate field under controlled historical/current execution conditions before any prompt is changed.

## Public-language rule

Public-facing material should preserve the SACRE ontology in ordinary language. Prefer:

- **case** or **Scenario** rather than *case family* where the distinction is not technically necessary;
- **concise and detailed versions of the same Scenario** rather than *paired representations* for a general reader;
- **Policy positions** or **policy candidates** rather than *candidate pools*;
- **Public / affected-community positions, Expert / professional positions, and Ethical Framework positions** when explaining source roles;
- **cases suitable for SACRE analysis** rather than *executable families*;
- **current public examples** or **demonstration set** rather than *Featured 2 × 2 × 2 slice*.

Avoid presenting a separate `decision`, `decision-maker`, or `decision question` as though it were a formal SACRE input. A practical question may still be shown to help a reader understand the Scenario, but the public explanation should make clear that SACRE analyzes a Scenario through source-tagged Policy candidates.