# Bioethics Bench — Deep Case File Template

Use one section per underlying scholarly case. The case file is the research object; executable SACRE records are downstream derivatives and exist only when the evidence and representation support them.

**Governing ontology:** SACRE formally begins with a **Scenario** and source-tagged **Policy candidates**. A `decision_question` or named decision-maker may be useful explanatory metadata, but neither is a formal SACRE input and neither should dictate the candidate taxonomy.

Read `docs/CANDIDATE_POLICY_SPACE_AUDIT.md` before constructing candidates.

## [Inventory handle] — [Stable working title]

**Case identity:**  
**Featured crosswalk:**  
**Primary domain:**  
**Subdomain:**  
**Tags:**  
**Research status:**  
**Evidence date:**

### 1. Normative Scenario

Explain the practical ethical situation being represented. State why it is bounded enough for meaningful comparison rather than a broad topic, without forcing it into a separate formal `decision` object.

**Relevant actor / institutional context:**  
**Optional practical framing question:**

Use these fields only where they clarify the Scenario. Do not use the framing question to pre-author which Policy positions the source search is expected to find.

### 2. Concise Scenario representation

Draft the concise Scenario. It must contain every load-bearing fact required for evaluators to interpret the same normative situation and candidate field as the detailed representation.

### 3. Detailed Scenario representation

Draft the detailed Scenario. Add context, stakeholder structure, institutional background and explicit uncertainty without changing the underlying load-bearing factual state or substantive Policy field.

### 4. Load-bearing facts

- 

Identify facts whose variation would materially change how one or more represented Policy positions apply.

### 5. Explicit uncertainty

- 

Distinguish uncertainty inside the represented Scenario from uncertainty in the literature used to construct it.

### 6. Jurisdiction and time strategy

State whether the Scenario is jurisdiction-neutral, tied to a named jurisdiction/date, future-conditional, or historically anchored.

Check **temporal consistency**: all executable candidates must address the same represented temporal and institutional state. A present-day professional prohibition is not automatically a Policy position about a stipulated future Scenario in which its factual preconditions have changed.

Where relevant, state what authority or discretion exists in the Scenario. This is contextual information, not a required SACRE primitive.

### 7. Benchmark stipulations

List any constructed assumptions needed to prevent different evaluators from silently filling a consequential factual gap in incompatible ways.

For every stipulation, state:

- what ambiguity it fixes;
- why the ambiguity is material;
- whether the chosen value or condition could alter the normative balance;
- why the stipulation is not simply engineering a desired disagreement, near-tie, or result.

When a stipulation enters an executable Scenario, mark it transparently as a benchmark assumption rather than an empirical fact.

If none are needed, write `None at present`.

### 8. Source-grounded normative position map

**Before selecting executable candidate text**, map the substantively distinct positions that the source research actually supports.

Do not start from a desired candidate count. Do not use `2 × 2 × 2` as a target. Do not infer that every branch named in a practical framing question must have a candidate.

Record possible positions by source domain:

#### Public / affected-community positions

- 

#### Expert / professional positions

- 

#### Ethical Framework positions

- 

For each proposed position, note whether it appears genuinely distinct or compatible/nested with another position.

### 9. Public / affected-community evidence

For each source, record:

- population/community and setting;
- study, survey, consultation, advocacy, or other evidence design;
- what preference, value, concern, attitude, experience, or **policy position** it actually supports;
- whether the evidence is policy-specific or requires an editorial inference to become an actionable Policy candidate;
- the exact reasoning bridge for any source-informed inference;
- limits on generalization;
- independence from Expert/professional sources used elsewhere in the same case.

A broad concern such as “people worry about fairness” does not by itself warrant any arbitrary fairness policy. If the evidence does not defensibly support an actionable Public Policy position, say so.

### 10. Expert / professional evidence

For each source, separate:

- empirical/scientific facts;
- professional guidance or recommendations;
- documented disagreement among professional bodies or experts;
- current versus conditional/future-facing recommendations;
- procedural clauses that form one integrated policy versus genuinely distinct professional Policy positions.

Do not split several components of one guidance process into separate candidates merely to increase candidate count.

### 11. Normative / Framework positions and reasoning bridges

First identify the major serious normative families that are live for the Scenario. Do not choose two convenient frameworks from a small familiar canon before asking whether an important position family is missing.

For each proposed framework candidate, make the bridge explicit:

`normative commitment → Scenario-relevant consideration → represented Policy position`

Framework-derived executable sentences are Bench constructions, not quotations. The framework source must genuinely support the commitment used in the bridge.

### 12. Natural candidate geometry

After source review, record the natural candidate count:

- Public / affected-community: `[n]`
- Expert / professional: `[n]`
- Ethical Framework: `[n]`
- natural geometry: `[P × E × F]`

Explain why each candidate is substantively distinct within its own source pool.

Asymmetry is permitted and may be methodologically informative. A matched geometry for a later experiment should be created by **selecting cases that naturally meet the study profile**, not by rewriting the Bench to fill slots.

### 13. Scenario / Policy-representation audit

Apply `docs/CANDIDATE_POLICY_SPACE_AUDIT.md` explicitly.

Record:

- **Scenario adequacy:** PASS / REVIEW
- **source-to-Policy fidelity:** PASS / REVIEW / RECONSTRUCT
- **within-pool distinctness:** PASS / REVIEW
- **cross-source independence:** PASS / REVIEW
- **position merging / omission risk:** NONE / REVIEW + explanation
- **decision-question overfitting risk:** NONE / REVIEW + explanation
- **stipulation leverage:** LOW / MATERIAL / REVIEW + explanation
- **concise/detailed invariance:** PASS / REVIEW

Explicitly check for:

- near-paraphrase;
- nested-caveat duplication;
- source-slot completion;
- decision-question overfitting;
- constraint-induced collapse;
- evidence-to-policy overcompression;
- rationale diversity without position diversity;
- position merging;
- temporal Scenario/candidate mismatch;
- missing serious Framework families.

### 14. References and provenance

Group sources by source domain where useful. Record enough bibliographic information or stable identifiers to reconstruct the source packet.

Preserve the difference between:

- direct policy evidence;
- source-informed policy inference;
- framework-derived Policy construction;
- editorial benchmark stipulation.

A synthetic author-constructed comparator does **not** satisfy a missing Public or Expert source class in canonical Bioethics Bench.

### 15. Rights / licensing notes

Bench-authored Scenario and candidate text may be released under CC BY 4.0. Cited source material retains its original rights. Do not reproduce protected source prose beyond what is necessary for scholarship and provenance.

### 16. Research uses

Examples: teaching, SACRE execution, representation-sensitivity runs, human/model QCCS, perturbation, RE-Iteration, comparison explanation, robustness analysis.

Separate these classifications:

- **research-complete** — scholarly case construction is adequate;
- **SACRE-suitable** — current three-source specification can represent the case with defensibly grounded candidates and meaningful cross-source comparisons;
- **demonstration-rich** — the naturally supported field is especially useful for explaining or visually demonstrating SACRE / RE-Iteration.

A case can be research-complete without being SACRE-suitable, and SACRE-suitable without being demonstration-rich.

### 17. Executable-eligibility judgment

Choose one and give the reason:

- `executable-natural-geometry`
- `executable-study-profile` — only when a declared study profile is naturally satisfied
- `research-complete-not-executable`
- `needs-additional-evidence`

Canonical SACRE v1 requires at least one defensibly source-grounded candidate in each declared Public, Expert, and Framework source class. Do not fill a missing source class with an author-constructed proxy.

### 18. Demonstration-richness judgment

Choose one and explain:

- `high`
- `medium`
- `low`
- `not-assessed`

This is not a validity score. Genuine convergence can make a case lower in demonstration richness while remaining scientifically valuable.

### 19. Review requirements

Name the substantive review still required: clinical, legal, affected-community, disability, cultural, technical, animal-welfare, empirical-methods, philosophical-framework completeness, provenance, representation, stipulation-neutrality, or other review.

### 20. Downstream record rule

If the case becomes executable, specify which case-file material may be transcribed into machine-readable records and which remains research metadata.

If the case already has a released Featured record, preserve that historical record unchanged unless a genuine defect requires an **explicitly versioned correction**. Never silently mutate released content or hashes.

If a new version is proposed, include:

- old -> new Scenario diff;
- old -> new candidate-field diff;
- source/provenance rationale;
- geometry change;
- exposure-history treatment;
- required regression/projection checks.
