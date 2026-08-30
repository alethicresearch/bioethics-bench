# Bioethics Bench — Candidate Policy-Space and Demonstration Audit

**Status:** active completion gate  
**Date:** 2026-08-30  
**Applies to:** Full Corpus completion, future Featured releases, SACRE demonstration selection, RE-Iteration suitability

## Why this audit exists

Bioethics Bench has become substantially stronger as a source-grounded research resource: cases now carry explicit sources, provenance, decision questions, assumptions, and controlled concise/detailed representations. During that improvement, another property became easier to miss: a case can be very well sourced while still presenting policy candidates that are too similar to one another to make the represented decision analytically informative.

This matters especially for SACRE. SACRE measures the coherence structure among represented policy candidates. If the candidate set occupies only a narrow part of the available policy space, the resulting analysis can be technically valid but substantively uninteresting. The problem is not low disagreement as such. Genuine convergence among sources is itself informative. The problem is mistaking **source diversity** for **policy diversity**, or treating a set of closely nested policy formulations as though it represented the major serious alternatives in the decision.

The older SACRE example library makes the contrast visible. Those examples were not source-grounded research objects, but many intentionally represented sharply different operative choices. The historical infant-treatment-refusal example, for instance, included parental final authority, state intervention, independent review, quality-of-life criteria, benefit/suffering, sanctity-of-life constraints, and parental-rights approaches. That breadth made the coherence structure and later revision behavior easier to see. The completed Bench should combine the strengths of both generations: scholarly grounding **and** a faithful representation of the serious policy space.

## Core distinction

A candidate set should be assessed on two separate dimensions.

### 1. Evidential adequacy

Is each candidate warranted by the source class and provenance claimed for it? Does the source actually support the policy, position, recommendation, or reasoning bridge recorded in the case file?

### 2. Policy-space adequacy

Taken together, do the candidates represent meaningfully different answers to the bounded decision question? Or are several candidates primarily different rationales, caveats, or rhetorical formulations of substantially the same operative rule?

A case may pass evidential adequacy and fail policy-space adequacy for SACRE demonstration. That is not a defect in the scholarship. It means the case belongs in the resource but may not be the right executable or Featured object.

## What counts as a substantively different policy

Candidate difference should be judged by what the policy would cause an institution, professional, regulator, or other decision-maker to do. Useful axes include:

- **action:** permit, require, prohibit, defer, fund, withdraw, disclose, allocate, regulate;
- **decision authority:** patient, parent, clinician, institution, court, regulator, community, independent reviewer;
- **threshold:** when a policy turns on or can be overridden;
- **scope:** universal rule, targeted rule, case-by-case discretion, high-risk settings only;
- **allocation rule:** need, expected benefit, equality/lottery, priority to the worse off, instrumental value;
- **sequence:** voluntary measures first, staged escalation, immediate mandate, mandatory reassessment;
- **procedure:** review, appeal, consultation, shared decision-making, independent authorization;
- **exception structure:** categorical rule versus defined exceptions or balancing tests;
- **time horizon:** immediate decision versus delayed/reviewable policy;
- **burden distribution:** who bears cost, risk, restriction, or responsibility.

Two policies can share values and still be substantively different if they prescribe different rules. Conversely, two policies can cite different values while prescribing nearly the same rule.

## Failure modes to flag

### Near-paraphrase

Two candidates differ in wording but would produce the same decision in almost every plausible instantiation of the case.

### Nested-caveat duplication

One candidate is effectively another candidate plus a modest safeguard, review clause, or exception that does not define a genuinely different policy branch.

### Source-slot completion

A candidate is written because a `public`, `expert`, or `framework` slot is expected rather than because the evidence supports a distinct serious policy position.

### Constraint-induced collapse

Benchmark stipulations remove so much of the live normative uncertainty that multiple serious alternatives become indistinguishable. Stipulations should prevent hidden factual completion, not decide the normative question in advance.

### Evidence-to-policy overcompression

Several sources are translated into a common cautious institutional formulation even though the underlying evidence supports more distinct policy implications.

### Rationale diversity without action diversity

Candidates differ mainly in justification while converging on the same operative policy.

## Completion gates

Before a case is treated as **executable for SACRE**, the case file should include a short policy-space audit answering:

1. What are the major serious operative alternatives in this bounded decision?
2. Which of those alternatives are represented by the candidate set?
3. Are any candidates near-paraphrases or nested versions of another?
4. If source classes genuinely converge on one action, is that convergence being represented transparently rather than artificially diversified?
5. Do the benchmark stipulations preserve a live normative choice?
6. Are all cross-source comparisons meaningful comparisons of policies at comparable granularity?

Before a case is treated as **demonstration-rich** or placed in a future Featured/showcase release, apply an additional gate:

- the candidate set should span at least three substantively different operative policy strategies across the complete represented set, unless the case is intentionally selected to demonstrate genuine convergence;
- the set should vary on more than one operative axis where the underlying debate warrants it;
- no candidate should exist solely to satisfy source-count symmetry;
- the resulting SACRE matrix should be interpretable as a structure of real policy alternatives rather than a structure of minor wording differences;
- RE-Iteration should have a meaningful object to revise: a change to a candidate should be capable of altering a substantive policy relation, not only polishing language.

These are editorial/research gates, not automatic numeric thresholds. A lexical-distance metric cannot establish policy distinctness by itself.

## Do not force disagreement

The purpose of this audit is not to maximize pairwise distance. Some bioethical questions have substantial cross-source consensus, and that consensus may be the important finding. When serious sources converge:

- retain the convergence;
- do not invent a more extreme candidate for visual interest;
- classify the case appropriately;
- consider it for the Full Corpus even if it is a weak SACRE demonstration;
- reserve Featured/showcase status for cases whose represented policy space serves the intended demonstration or teaching role.

This preserves the scientific value of the resource while preventing the demonstration layer from becoming dull or misleading.

## Relationship to candidate geometry

Candidate counts should follow the evidence and the decision, not the visual neatness of a fixed geometry. A `2 × 2 × 2` design can be useful for controlled studies, but it is not a substantive definition of a good case. If the evidence supports one strong expert policy and several genuinely distinct affected-public positions, that asymmetry should be recorded rather than flattened.

For confirmatory studies that require a fixed geometry, the research protocol should select cases that naturally satisfy the required geometry after the scholarly construction process. The construction process should not reverse-engineer policy positions to fill the protocol.

## Immediate audit priorities

1. **Current Featured release:** audit all 20 released cases for operative policy diversity and identify which remain strong demonstrations without changing the released records in place.
2. **Full Corpus development records:** add policy-space adequacy to the executable-eligibility review before final freeze.
3. **Demonstration layer:** distinguish `executable` from `demonstration-rich`; a future Featured/showcase release may be narrower than the executable collection.
4. **Historical comparison:** use the archived SACRE example library as a qualitative stress test for whether a new case has lost a major serious policy branch during source-grounded reconstruction.
5. **RE-Iteration:** evaluate revision behavior on cases with broad and narrow candidate spaces separately before attributing poor revisions to the revision prompt.

## RE-Iteration finding, 2026-08-30

The current RE-Iteration revision prompt in `xnuxi/sacre-prototype` was compared with the prompt introduced in the original Phase 3 implementation (commit `64033f578d2df41d04f8aaf6020bc0d034cc24cb`). The operative instructions are unchanged: preserve the candidate's essential normative commitment and source perspective, make the smallest sufficient revision, and move convergence toward the stated target. The directive-proposal prompt introduced in Phase 4b is likewise unchanged in its core instructions.

Accordingly, recent weaker suggested directives or revised candidates should **not** be diagnosed as prompt drift without further evidence. More plausible contributors include:

- narrower starting candidate spaces in newer Bench records;
- changes in the QCCS operationalization and resulting convergence matrix;
- model/provider/configuration differences;
- the target and anchor policies selected by the directive;
- later RE-Iteration execution semantics, including full fresh re-execution after revision.

The next RE-Iteration audit should therefore compare the same case and same directive across historical and current execution conditions before any prompt is changed.

## Public-language rule

Public-facing material should avoid corpus-internal terminology where ordinary language is clearer. In particular, prefer:

- **case** or **bioethical decision** rather than *case family*;
- **concise and detailed versions of the same case** rather than *paired representations* when explaining the resource to a general reader;
- **policy options** rather than *candidate pools*;
- **cases suitable for SACRE analysis** rather than *executable families*;
- **current public demonstration set** rather than *Featured 2 × 2 × 2 slice*.

Technical terms remain appropriate in schemas, protocols, and methods documentation where they carry a precise role.