# Bioethics Bench — Case Construction Standard

**Status:** proposed research standard for the first deeply researched cases.  
**Scope:** how a source-grounded bioethical problem becomes a compact executable object for SACRE/QCCS, teaching, repeated runs, and later human/model benchmarking.

The central distinction is between the **scholarly case file** and the **executable case record**.

A scholarly case file may contain many position families, a long literature review, jurisdictional history, empirical uncertainty, stakeholder commentary and alternative phrasings. The executable case should not. It is a controlled representation of one decision problem. Its job is to make repeated executions interpretable.

A case that is philosophically rich but poorly specified is a bad benchmark. A case that is perfectly standardized but normatively trivial is also a bad benchmark. This standard is designed to preserve both.

---

## 1. The executable object

A Featured case should ordinarily contain:

1. **Title** — short and descriptive, not argumentative.
2. **Short description** — one or two sentences for browsing.
3. **Decision question** — one explicit question identifying the decision-maker and the action/policy to choose.
4. **Scenario** — the minimum factual context needed to make that question answerable.
5. **Six executable policy candidates** — two public-derived, two expert-derived, two framework-derived candidates under the default Featured profile.
6. **Candidate and scenario provenance** — enough to reconstruct why each represented object is in the record.
7. **Version/hash/exposure/review metadata** — as required by the Bench schema.

The full position map and literature synthesis remain research metadata and need not be injected into the prompt.

---

# 2. Scenario design

## 2.1 Length

**Target: 100–160 words.**  
**Usual hard ceiling: 220 words.**

The historical SACRE examples were useful partly because they were digestible. Longer scenarios should earn their length by resolving a fact that would otherwise change the normative problem. Background scholarship does not belong in the executable prompt.

A scenario under about 80 words is often too thin for difficult clinical, legal, or technological cases. A scenario over about 220 words often begins testing long-context comprehension, memory, or factual prioritization rather than the represented normative decision.

Length is a design variable to study later, not a claim that 160 words is morally or psychometrically optimal. The point of the initial standard is to reduce irrelevant between-case variance.

## 2.2 One decision, stated explicitly

Every case should answer:

> **Who must decide what?**

The `decision_question` should normally be 15–35 words and should be usable as the final sentence of the scenario.

Bad:
> What are the ethical issues here?

Better:
> Should the hospital require an independent best-interests review before overriding the parents' refusal of surgery?

The first invites essays. The second creates policy candidates.

## 2.3 Facts before values

Include facts that materially constrain the decision:

- prognosis or treatment effect if it changes the available positions;
- decision-making capacity when relevant;
- age where ethically or legally relevant;
- scarcity quantity when allocation is the problem;
- whether a technology is validated, experimental, reversible, or uncertain;
- whose consent exists;
- whether viable alternatives exist;
- the decision-maker's institutional authority.

Do **not** resolve the normative question through loaded factual language. Terms such as `futile`, `burdensome`, `unsafe`, `discriminatory`, `unjust`, `desperate`, `irresponsible`, or `best interests` should appear as attributed judgments unless they are part of a stipulated technical definition.

## 2.4 Make uncertainty explicit

When factual uncertainty is part of the ethical problem, state the uncertainty rather than silently choosing a point estimate.

Good:
> Published evidence suggests a 20–35% chance of one-year survival; long-term functional outcome is uncertain.

Bad:
> The intervention is unlikely to work.

Where the case should hold facts constant across runs, use a bounded stated range or a stipulated value and mark it as such in provenance.

## 2.5 Jurisdiction and time

Use one of three patterns deliberately:

1. **Jurisdiction-neutral governance scenario.** State that the decision-maker is permitted to choose among the represented policies. Best when the ethical issue should not collapse into a legal lookup.
2. **Named jurisdiction/date.** Use when law, reimbursement, professional rules, or institutional authority are themselves part of the problem. The case must then be versioned when those facts change.
3. **Historically anchored case.** Use when the evolution of policy is itself analytically useful. Historical facts must be clearly distinguished from current guidance.

Never write `under current law` without a jurisdiction and date when the law matters.

## 2.6 Avoid hidden diagnostic tests

A respondent should not need specialist facts omitted from the scenario to know whether one candidate is feasible. If the answer turns on disease prognosis, device performance, infectiousness, legal capacity, genetic penetrance or a similar variable, either state it or make the uncertainty itself part of the represented problem.

## 2.7 Neutrality is structural, not merely tonal

Neutral wording requires more than removing adjectives. Check whether:

- one side receives more factual support than another;
- only one position is associated with harms;
- one stakeholder is individuated while another is statistical or faceless;
- one option is described concretely and another abstractly;
- the scenario names a professional consensus but omits a documented dissent relevant to the decision;
- legal status is mistaken for ethical resolution.

Where asymmetry is an authentic feature of the real case, preserve it and document it rather than artificially balancing facts.

---

# 3. Candidate design

## 3.1 Every candidate is the same kind of object

QCCS v1 compares represented **policy candidates** in what they recommend should be done. Therefore public, expert and framework pools must all end in actionable recommendations answering the same decision question.

Do not compare:

- a public policy recommendation,
- an expert empirical claim, and
- an abstract moral principle.

That was a weakness of several historical examples.

A framework-derived candidate may be *derived from* equal respect, autonomy, utility, capabilities, care ethics, rights or another framework, but the executable text should still say what policy follows in this scenario. The provenance record carries the framework and reasoning.

## 3.2 Candidate length

**Target: 18–40 words.**  
**Usual hard ceiling: 55 words.**

Use one or two sentences only when a condition or tie-break rule is essential.

Candidates should be long enough to specify an operational recommendation and short enough that QCCS is comparing policy content rather than unequal explanatory essays.

## 3.3 Default Featured profile: 2 × 2 × 2

The proposed default frozen Featured profile is:

- 2 public-derived candidates;
- 2 expert-derived candidates;
- 2 framework-derived candidates;
- 6 candidates total;
- 12 unordered cross-source QCCS pairs per complete run.

Why 2 × 2 × 2:

- every Featured case has the same QCCS pair count;
- repeated-run model cost is predictable;
- Compare Runs is not confounded by case-specific matrix size;
- matched human QCCS tasks have a stable burden;
- a 12-pair case is practical for panel assignment and repeated measures;
- the scholarly position map can remain richer than the executable slice.

This is a **benchmark profile**, not a claim that every real debate has only six views. A case may retain additional sourced position families in its research file. An explicitly extended exploratory record could later use more candidates, but it should receive a different record version/profile and should not be silently pooled with the 2 × 2 × 2 benchmark profile.

Before the first Featured records are frozen, this profile should be piloted on cases from several domains to ensure it does not systematically erase important structures.

## 3.4 How to choose the two candidates within each pool

The pair should represent **substantively distinct, defensible, source-grounded recommendations**, not simply the two extremes.

Prefer:

- a well-supported dominant/major position and a serious alternative; or
- two materially different policy architectures where no dominance exists.

Avoid:

- near paraphrases that create trivially high QCCS;
- straw positions included only to create contrast;
- an extreme position unsupported by the source class;
- candidates that differ only in rhetoric;
- making every pool artificially contain a permissive and restrictive option.

Real cross-pool convergence is desirable. SACRE should be allowed to discover that public, expert and framework sources recommend similar policies when they do.

## 3.5 Recommendation first; rationale in metadata

Candidate `text` should foreground the policy rule. Do not routinely append a mini-essay beginning `because`.

Preferred:
> When two candidates have equivalent expected transplant benefit, do not use chronological age as a tie-breaker; use the next declared allocation criterion.

Less suitable:
> Because all persons have equal moral worth and age discrimination violates justice, older patients should not be disadvantaged...

The second confounds the policy with one reason for it and gives some candidates more conceptual surface area than others. Store the rationale and derivation in provenance/research notes.

## 3.6 Conditions and hybrids must be real policies

`Balance autonomy and beneficence` is not a policy.

A conditional candidate should state a rule:
> Honor the refusal when two independent capacity assessments find decision-making capacity; otherwise use supported decision-making and reassess before compulsory treatment.

Hybrid policies are valuable when they are genuinely represented in guidance or public deliberation. They should not be invented merely to sit between two extremes.

---

# 4. The three source pools

## 4.1 Public-derived

A public candidate may be grounded in:

- representative surveys;
- deliberative public engagement;
- citizen juries/assemblies;
- patient, disability, service-user, community or advocacy-group positions where those groups are the affected public;
- public consultation records;
- recurring positions documented across qualitative studies.

Do not label an editor's intuition `public preference`.

Where high-quality public evidence is absent, say so. A case may remain in the master inventory until the public pool can be responsibly constructed.

## 4.2 Expert-derived

Expert candidates should reflect recommendations or positions from relevant professional or policy expertise, such as:

- professional-society guidelines;
- ethics committee opinions;
- regulatory or public-health guidance;
- specialist consensus statements;
- documented expert disagreement;
- health-technology assessment or institutional policy frameworks.

An empirical fact is not an expert policy candidate until translated into a recommendation supported by that source.

## 4.3 Framework-derived

Framework candidates should be derived from named normative approaches and made actionable in the scenario.

Potential sources include:

- consequentialist / welfare-maximizing approaches;
- deontological constraints;
- equal respect / anti-discrimination;
- rights-based accounts;
- prioritarian / worst-off approaches;
- capabilities;
- care ethics / relational autonomy;
- contractualist or fair-process approaches;
- public-health ethics frameworks;
- disability justice;
- global justice;
- animal-interest or One Health frameworks where the case requires them.

The framework pool should not mechanically use the same two theories in every case. Choose frameworks that actually illuminate the represented problem.

---

# 5. Provenance and editorial translation

Every scenario and candidate is a **constructed representation**, even when closely grounded in a source.

For each candidate record internally:

- source(s);
- source class;
- original position or finding;
- editorial transformation performed;
- whether source language was adapted rather than reproduced;
- why this candidate was selected over other positions in the same pool;
- human reviewer;
- any model assistance.

For empirical public-preference evidence, distinguish:

- direct policy question;
- inferred policy family from survey items;
- qualitative theme;
- advocacy/community position.

For framework derivation, record the reasoning bridge from principle to policy. Do not pretend an abstract theory literally published the candidate sentence.

---

# 6. Benchmark stability

## 6.1 Freeze all represented content

A frozen record fixes:

- scenario wording;
- decision question;
- candidate texts;
- candidate IDs;
- candidate ordering;
- pool membership;
- cited provenance;
- jurisdiction/date assumptions;
- schema version;
- content hash.

A substantive change creates a new record version.

## 6.2 Keep candidate IDs semantically boring

`pub1`, `pub2`, `exp1`, `exp2`, `fw1`, `fw2` are preferable to IDs such as `utilitarian-option` or `anti-abortion-policy`, which leak interpretation into prompts, graphs and exports.

## 6.3 Do not encode the expected winner

The case record must not contain `correct_policy`, `gold_policy`, expected Final Policy, or a curator ranking.

Later empirical releases may contain observed human/model judgments, reliability estimates and outcome distributions. Those are measurements, not moral ground truth.

## 6.4 Preserve negative and close results

A case is not defective because SACRE produces a close selection margin, model disagreement or unstable winner. Those may make it especially informative. Remove or revise a case only when the represented object itself is defective — e.g., ambiguity, duplicated candidates, bad provenance, hidden factual dependence — not because its result is aesthetically untidy.

---

# 7. Human/model benchmarking implications

The executable object should be usable without modification for:

- a model QCCS run;
- repeated same-model runs;
- cross-model runs;
- a matched human pairwise QCCS instrument;
- manual scoring;
- Compare Runs;
- RE-Iteration;
- representation-fidelity review;
- later perturbation/stress records.

The same frozen scenario/candidate texts should reach both model and human QCCS paths. Human-interface shortening may alter instructions, but not the represented case content.

A six-candidate case yields 12 cross-source pairs. Human studies can assign all 12 or a deterministically sampled subset, while the case identity and pair identity remain fixed.

---

# 8. RE-Iteration suitability

Featured cases do not all need to be chosen for RE-Iteration, but a useful subset should support it.

Good RE-Iteration cases have:

- policy candidates with real adjustable conditions rather than slogans;
- plausible ways to move toward another represented position while preserving source identity;
- enough normative tension that revision is meaningful;
- interpretable fidelity questions;
- no need to change the scenario facts when revising a policy.

RE-Iteration in the current application creates a revised candidate set, measures QCS fidelity, and performs diagnostic QCCS sampling of the relations targeted by the revision; the user then runs SACRE afresh over the revised set. A P2 demonstration case should make that sequence visually and conceptually legible.

---

# 9. Perturbation readiness

When possible, write scenarios so later stress tests can vary **one declared feature at a time**:

- prognosis;
- scarcity level;
- patient age;
- reversibility;
- cost;
- capacity;
- stakeholder identity;
- jurisdiction;
- degree of model performance disparity;
- public-health externality.

The parent Featured record remains unchanged; each perturbation is a new stress-test record with `parent_record_id` and explicit `perturbation_metadata`.

Do not pre-build confirmatory holdout perturbations in the public repository.

---

# 10. Required pre-freeze review

Before a Featured record can become `released`, reviewers should answer:

### Scenario
- Is the decision-maker explicit?
- Is the decision question singular and operational?
- Are all outcome-critical facts stated?
- Is uncertainty represented rather than hidden?
- Is jurisdiction/time handled deliberately?
- Does wording avoid resolving the ethical issue by description?
- Can an informed non-specialist understand it without external lookup?

### Candidates
- Do all six answer the same question?
- Are they all policy recommendations rather than mixed object types?
- Are lengths/granularity reasonably matched?
- Is each substantively distinct?
- Is each defensible from its recorded source class?
- Are any duplicates or straw positions present?
- Does framework provenance record the derivation rather than disguising it as quotation?

### Benchmark
- Is the 2 × 2 × 2 profile satisfied, or is a deviation explicitly justified?
- Are all 12 cross-source pairs meaningful to compare?
- Would changing candidate order alter interpretation? If yes, the case is not ready.
- Can the exact case be shown to human and model QCCS scorers?
- Is the record version/hash sufficient to reconstruct what was run?

### Public release
- Are all references and rights fields adequate?
- Has source language been adapted rather than improperly reproduced?
- Does any public exposure create a future holdout problem? If public, record that permanently.
- Has a domain/subject expert reviewed any technically or socially sensitive case?

---

# 11. Schema changes implied by this standard

The current schema is close, but before the first records are frozen it should be reviewed for several additions:

- `decision_question` as a first-class required field;
- a case-level `benchmark_profile` (e.g. `featured-core-2x2x2-v1`);
- optional scholarly `position_families` or an external research-file reference, so the six executable candidates are not mistaken for the whole debate;
- optional `jurisdiction_context` and `as_of_date` where relevant;
- candidate-level editorial derivation metadata beyond the current generic provenance object, if needed after piloting;
- domain vocabulary expansion for `neuroethics`, `animal-one-health`, `climate-planetary`, and `biosecurity-dual-use` if cases from the master inventory advance.

Do not change the schema merely because an inventory topic exists. Pilot several real records first, then make the smallest schema extension that their provenance and benchmarking actually require.

---

# 12. Relationship to P1 and P2

## P1 tutorial

The P1 tutorial remains a **teaching object**, not simply one more Featured case. Its values may be stipulated so the arithmetic can be followed by hand.

When P1 is next reconciled, the tutorial should be reconsidered as an end-to-end worked flow that now includes:

1. scenario;
2. candidate specification;
3. QCCS measurement;
4. aggregation and provisional Final Policy;
5. a Step-6 revision;
6. QCS fidelity + diagnostic QCCS sampling;
7. **a fresh SACRE re-run over the revised candidate set**;
8. comparison of the original and revised runs.

That complete sequence did not exist when the earlier P1 walkthrough was written.

Whether the prose should remain broken into many small stages or become a more continuous worked example is a reader-design decision to make during the next P1 pass. The test is whether the segmentation helps a first-time reader hold the method in mind.

## P2 demonstrations

P2 should use a small subset of genuine Featured records with actual executable runs. At least one should make repeated runs / Compare Runs useful, and at least one should make RE-Iteration + fresh re-run legible.

The figures should be audited at the same time as the P1/P2 reconciliation. Any flow diagram that depicts the old carried-score Step-6 architecture, multiple current QCCS modes/scales, or a revision directly generating a new Final Policy must be remade rather than cosmetically edited.