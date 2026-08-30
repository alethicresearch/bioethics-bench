# Bioethics Bench — Deep Case File Template

Use one section per underlying scholarly case. The case file is the research object; individual SACRE analyses are downstream projections from it.

**Governing model:** `Scenario → rich candidate universe → declared SACRE projection(s)`.

A `decision_question` or named decision-maker may be useful explanatory metadata, but neither is a formal SACRE input and neither should dictate candidate construction.

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

Explain the practical ethical situation being represented. State why it is bounded enough for meaningful comparison rather than a broad topic.

**Relevant actor / institutional context:**  
**Optional practical framing question:**

Use these fields only where they clarify the Scenario. Do not use the framing question to pre-author the candidate universe.

### 2. Concise Scenario representation

Draft the concise Scenario. It must contain every load-bearing fact required for evaluators to interpret the same underlying normative problem as the detailed representation.

### 3. Detailed Scenario representation

Draft the detailed Scenario. Add context, stakeholder structure, institutional background and explicit uncertainty without changing the underlying load-bearing factual state.

### 4. Load-bearing facts

- 

Identify facts whose variation would materially change how one or more important Policy positions apply.

### 5. Explicit uncertainty

- 

Distinguish uncertainty inside the represented Scenario from uncertainty in the literature used to research it.

### 6. Jurisdiction and time strategy

State whether the Scenario is jurisdiction-neutral, tied to a named jurisdiction/date, future-conditional, or historically anchored.

Check temporal consistency: candidates used in the same projection must address the same represented temporal and institutional state.

### 7. Benchmark stipulations

List any constructed assumptions needed to stop different evaluators from silently filling consequential factual gaps in incompatible ways.

For every stipulation, state:

- what ambiguity it fixes;
- why the ambiguity is material;
- whether the chosen value or condition could alter the normative balance;
- why the stipulation is not simply engineering a desired disagreement or result.

If none are needed, write `None at present`.

### 8. Rich candidate universe

Map the serious Policy positions needed to represent the normative space **before** deciding which will enter any SACRE run.

Do not start from a target geometry. Do not limit the universe to candidates with direct source support.

For each candidate record:

- candidate ID;
- Policy text;
- main normative axis or distinction;
- provenance status;
- source/perspective association where relevant;
- whether it is intended for any current projection;
- why it is substantively distinct from neighboring candidates.

Use these provenance classes:

- `direct-source`;
- `source-informed`;
- `framework-derived`;
- `constructed-comparator`.

For public presentation, separately record whether the candidate earns **✓ Source**.

A constructed comparator may be valuable. It must never be presented as though an empirical public, affected community, professional body, or named philosopher directly endorsed the exact Policy.

### 9. Public / affected-community evidence

For each source, record:

- population/community and setting;
- study, survey, consultation, advocacy, or other evidence design;
- what preference, value, concern, attitude, experience, or Policy position it actually supports;
- whether translating it into an actionable Policy requires an editorial inference;
- the reasoning bridge for any source-informed candidate;
- limits on generalization.

A broad concern such as “people worry about fairness” does not by itself warrant any arbitrary fairness Policy.

### 10. Expert / professional evidence

For each source, separate:

- empirical/scientific facts;
- professional guidance or recommendations;
- documented disagreement;
- current versus conditional/future-facing positions;
- multiple clauses of one integrated policy versus genuinely distinct professional Policies.

### 11. Normative / Framework positions

Identify the major serious normative families that are live for the Scenario before selecting candidate text.

For each Framework-derived candidate, make the bridge explicit:

`normative commitment → Scenario-relevant consideration → represented Policy`

Do not let a small familiar canon erase major serious normative alternatives. A missing position can be represented as a constructed comparator if that is the honest status.

### 12. Candidate-universe adequacy

Record:

- total candidate count: `[n]`;
- candidates with ✓ Source: `[n]`;
- direct-source: `[n]`;
- source-informed: `[n]`;
- framework-derived: `[n]`;
- constructed-comparator: `[n]`.

Explain whether the universe adequately covers the important live normative positions without becoming indiscriminate or repetitive.

### 13. Scenario / candidate-universe audit

Apply `docs/CANDIDATE_POLICY_SPACE_AUDIT.md` explicitly.

Record:

- **Scenario adequacy:** PASS / REVIEW / RECONSTRUCT
- **candidate-universe adequacy:** PASS / REVIEW / RECONSTRUCT
- **provenance/source-mark accuracy:** PASS / REVIEW
- **distinctness:** PASS / REVIEW
- **position merging / omission risk:** NONE / REVIEW + explanation
- **source-ceiling compression risk:** NONE / REVIEW + explanation
- **decision-question overfitting risk:** NONE / REVIEW + explanation
- **stipulation leverage:** LOW / MATERIAL / REVIEW + explanation
- **concise/detailed invariance:** PASS / REVIEW

Explicitly check for:

- near-paraphrase;
- nested-caveat duplication;
- source-slot completion;
- source-ceiling compression;
- decision-question overfitting;
- constraint-induced collapse;
- evidence-to-policy overcompression;
- rationale diversity without Policy diversity;
- position merging;
- artificial extremity;
- provenance laundering;
- temporal Scenario/candidate mismatch;
- missing serious normative families.

### 14. SACRE projection(s)

Define each research projection separately.

Possible types include:

- `source-grounded`;
- `expanded`;
- `matched-study`;
- `demonstration`;
- `direct-grounding`.

For every projection record:

- projection ID/version;
- purpose;
- selected candidate IDs;
- Public / Expert / Framework role assignment;
- candidate provenance state;
- geometry;
- required aggregation rule;
- concise/detailed applicability;
- what claims the result can legitimately support.

A source-grounded projection that makes claims about represented Public/Expert/Framework positions should use candidates with defensible grounding for those roles.

An expanded projection may include constructed comparators, but the analysis must be described as a study of the expanded represented field rather than empirical consensus among source communities.

### 15. References and provenance

Record enough bibliographic information or stable identifiers to reconstruct the source packet.

Preserve the difference between direct evidence, source-informed inference, framework derivation, constructed comparator, and editorial benchmark stipulation.

### 16. Rights / licensing notes

Bench-authored Scenario and candidate text may be released under CC BY 4.0. Cited source material retains its original rights. Do not reproduce protected source prose beyond what is necessary for scholarship and provenance.

### 17. Research uses

Examples: teaching, SACRE execution, representation-sensitivity runs, human/model QCCS, perturbation, RE-Iteration, comparison explanation, robustness analysis.

Separate:

- **research-complete** — the case and candidate universe are adequate scholarly objects;
- **projection available** — one or more SACRE analysis sets are defensible;
- **demonstration-rich** — a projection is especially useful for explaining or visually demonstrating SACRE / RE-Iteration.

### 18. Demonstration-richness judgment

Choose one and explain:

- `high`
- `medium`
- `low`
- `not-assessed`

This is not a validity score.

### 19. Review requirements

Name substantive review still required: clinical, legal, affected-community, disability, cultural, technical, animal-welfare, empirical-methods, philosophical-framework completeness, provenance, representation, stipulation-neutrality, or other review.

### 20. Downstream record rule

Specify which case-file material is released as the stable scholarly object and which projection(s) become machine-readable SACRE records.

If the case already has a released Featured record, preserve that historical record unchanged unless a genuine defect requires an **explicitly versioned correction**. Never silently mutate released content or hashes.

If a new version is proposed, include:

- old → new Scenario diff;
- old → new candidate-universe diff;
- source/provenance changes;
- projection changes;
- exposure-history treatment;
- required regression/projection checks.
