# Bioethics Bench — Full Corpus v1 Plan

**Status:** active research build  
**Branch:** `research/full-corpus-v1`  
**Base:** released Featured v1 on `main`  
**Scope:** convert the 200-case master inventory into a completed Bioethics Bench research resource while preserving the released 20-case Featured collection as the curated public front door.

## 1. Research object

Bioethics Bench v1 will contain **200 bounded practical-ethics Scenarios**, each represented in two controlled forms:

- **concise** — a compact representation for browsing, teaching and low-friction application use;
- **detailed** — a richer representation of the same normative Scenario, adding relevant context without changing the underlying normative problem.

The full resource therefore targets **200 cases / 400 authored Scenario representations**.

Each completed case has three distinct layers:

1. **Scenario** — the normative situation being represented;
2. **candidate universe** — the serious, action- or commitment-distinct Policy positions worth representing for that Scenario;
3. **SACRE projection(s)** — explicit selections from that universe for a particular SACRE analysis, study, demonstration or matched protocol.

The existing 20-case Featured collection remains a released subset, not a separate ontology.

### Governing SACRE ontology

The resource must remain aligned with the SACRE specification in Part I.

SACRE itself begins with:

1. a **Scenario** `S`;
2. Policy candidates represented in the Public Preferences, Expert Judgments, and Ethical Framework source roles for that run.

SACRE then measures cross-source normative convergence, aggregates the completed relation field, identifies a provisional Final Policy, and may revise selected positions through RE-Iteration.

A `decision_question` may remain useful editorial metadata because it can make a Scenario intelligible and bounded. An explicit decision-maker may likewise be useful contextual metadata. Neither is a formal SACRE primitive and neither should determine the candidate taxonomy.

Crucially, **the full Bench candidate universe is allowed to be richer than any one SACRE projection**.

## 2. Candidate universe

The Bench should preserve the important Policy positions needed to understand the normative space, even when they do not all have the same evidential status.

A candidate may be:

- directly grounded in a public, affected-community, professional, legal, policy, or other external source;
- inferred from source evidence through an explicit reasoning bridge;
- derived from an Ethical Framework;
- constructed by the Bench as a serious comparator, boundary case, omitted normative position, or experimental alternative.

The resource must never blur those categories.

### Source marking

Every candidate carries provenance metadata. Public presentation may use a simple **✓ Source** mark when a candidate has defensible external source grounding.

Internally, preserve more detail than the public check mark, for example:

- `direct-source`;
- `source-informed`;
- `framework-derived`;
- `constructed-comparator`.

A constructed candidate may be valuable. It must simply not be presented as though a surveyed public, affected community, professional body, or named philosopher actually endorsed that exact Policy.

### Richness standard

Candidate construction asks:

> What serious Policy positions are needed to represent the important normative structure of this Scenario?

It does **not** ask:

> How many sourced candidates can we fit into a preset geometry?

A richer candidate universe can therefore include:

- major source-supported positions;
- serious positions omitted or compressed by the initial source translation;
- principled boundary positions;
- constructed comparators useful for analysis;
- nearby policies that diverge on authority, threshold, scope, sequence, allocation rule, exception structure, burden distribution, or underlying normative commitment.

Richness does not mean indiscriminate enumeration. Candidates should still be serious, intelligible, and non-duplicative.

## 3. SACRE projections

A SACRE projection is an explicit research object that selects candidates from the case's candidate universe and assigns the Public / Expert / Framework roles used in that analysis.

A case may support more than one projection, for example:

- `source-grounded` — uses only candidates with defensible source grounding in the relevant roles;
- `expanded` — adds clearly labeled constructed or inferred comparators to test a broader normative field;
- `matched-study` — selects a declared geometry for a controlled experiment;
- `demonstration` — selects an especially legible set for teaching or public explanation;
- `direct-grounding` — restricts to candidates with the strongest action-aligned source evidence.

Each projection must record:

- candidate IDs included;
- role assignment for the run;
- provenance/source status of every candidate;
- projection purpose;
- geometry;
- aggregation rule where relevant;
- whether claims about public/expert convergence are warranted or whether the projection contains constructed comparators.

### Canonical source-grounded SACRE projection

When the study claim is specifically about convergence among **actual represented Public, Expert, and Framework source positions**, the projection must contain at least one defensibly grounded candidate in each role and must not use an unsourced comparator as evidence that such a source position exists.

A case can still be a complete and useful Bench case when that canonical source-grounded projection is unavailable.

## 4. What every case must contain

Every case in the completed resource must have a scholarly case file with:

1. stable case identifier and title;
2. domain, subdomain and tags;
3. concise Scenario;
4. detailed Scenario;
5. an optional practical framing question where it helps a reader understand the Scenario;
6. relevant actor / institutional context where it matters;
7. decision-critical factual assumptions;
8. explicit uncertainties;
9. jurisdiction/time treatment where relevant;
10. explicit benchmark stipulations where needed to prevent hidden factual completion;
11. a **rich candidate universe** of serious Policy positions;
12. candidate-level provenance and source status, including the public-facing ✓ Source state where warranted;
13. public / affected-community evidence where it exists;
14. professional/expert recommendations or judgments;
15. normative/framework positions and reasoning bridges;
16. clearly labeled constructed comparators where useful;
17. references and provenance;
18. construction and representation risks;
19. a Scenario / candidate-universe audit;
20. one or more declared SACRE projections where appropriate;
21. a projection-level suitability determination;
22. a demonstration-richness determination where relevant;
23. suggested uses such as teaching, SACRE, matched human QCCS, robustness, RE-Iteration or perturbation.

The case file is a research object in its own right regardless of whether a particular projection is available.

## 5. Controlled concise and detailed representations

Concise and detailed forms are two authored representations of **one underlying normative Scenario**.

They must share:

- case identity;
- the same practical normative problem;
- decision-critical factual state;
- benchmark stipulations;
- the same candidate universe for any comparison intended to isolate representation effects.

A practical framing question may be shared when useful, but it is metadata rather than the object that defines the candidate universe.

Detailed may unpack context, uncertainty, stakeholder structure and institutional background. It must not introduce a load-bearing fact absent from concise when the two forms are intended as controlled representations.

For a representation-sensitivity study, the same SACRE projection should be used across concise and detailed forms unless the study explicitly manipulates candidate framing as a separate factor.

## 6. Source architecture

Research should use multiple discovery streams rather than one canon:

- recurring casebooks and curricula;
- professional guidance, law and policy;
- empirical bioethics and public/affected-community evidence;
- normative scholarship;
- emerging-governance literature;
- PSAI as a topic map only, not as evidence of public or expert positions.

For each candidate distinguish:

- direct external support;
- source-informed inference;
- framework derivation;
- Bench construction.

For each source distinguish:

- reported fact;
- professional recommendation or judgment;
- empirical public/affected-community position;
- advocacy or stakeholder position;
- normative principle or framework;
- benchmark/editorial stipulation.

A source may support more than one layer, but provenance must say what it actually supports.

Source search should not stop once an editorially prewritten `decision_question` appears to have a neat set of answers. Research should ask what important positions the source domain contains **and** whether serious unsourced or under-sourced normative positions are needed to make the candidate universe intellectually complete.

## 7. Animal ethics and One Health

Animal ethics, multispecies ethics and One Health are first-class components of the corpus.

The full build should include the existing inventory cases concerning animal research, replacement, farmed-animal welfare, antimicrobial use, zoonotic control, outbreak culling, wildlife disease, invasive/feral animal control, conservation, wild-animal intervention, xenotransplant donor-animal welfare and related questions.

Human public opinion about animals is not a substitute for animal interests. Animal interests may enter through welfare/scientific expertise, affected-interest representation, Ethical Frameworks, and serious constructed comparators where a morally relevant position would otherwise disappear from the candidate universe.

The source status of each candidate must remain explicit.

## 8. Construction workflow

Each inventory topic moves through:

**inventory → source packet → deep case file → concise/detailed Scenario representations → rich candidate-universe construction → source/provenance marking → Scenario / candidate-universe audit → SACRE projection design → projection audit → release review**

Do not mass-generate candidates directly from inventory descriptions and do not use an editorial `decision_question` to dictate what the candidate universe must contain.

### Gate 1 — source packet

Minimum expectation:

- authoritative professional/policy source where one exists;
- serious normative source(s);
- empirical public/affected-community evidence where available;
- relevant casebook or historical source where useful;
- current empirical facts needed to make the Scenario interpretable.

### Gate 2 — deep case file

The case file should explain:

- what normative Scenario is being represented and why it is bounded enough to compare;
- which facts actually change the normative problem;
- important source-supported Policy positions;
- major serious positions not adequately captured by the initial source map;
- source-class evidence and gaps;
- likely benchmark stipulations;
- risks of triviality, hidden factual dependence, source duplication, position merging, rhetorical imbalance, or decision-question overfitting.

### Gate 3 — candidate universe

Construct the serious candidate universe before choosing a SACRE geometry.

Ask whether the universe includes the important live positions, not merely whether every source slot is filled.

Mark every candidate's evidential/provenance state. A simple public ✓ Source mark should correspond to real source support, not merely to the presence of a citation somewhere in the case file.

### Gate 4 — controlled representations

Draft concise and detailed forms under the controlled-representation rule.

### Gate 5 — Scenario / candidate-universe audit

Apply `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`.

The audit asks whether:

- the Scenario contains enough context for meaningful comparison without stipulating away the normative problem;
- the candidate universe contains the major serious positions needed to represent the normative field;
- candidates are duplicated, overcompressed, merged, or trivial variants;
- provenance/source status is accurate;
- constructed candidates are clearly disclosed;
- a framing question has narrowed the universe artificially;
- concise and detailed forms preserve the same normative object;
- genuine source convergence is preserved rather than artificially diversified.

### Gate 6 — SACRE projection design

For each useful run, define the projection explicitly.

Do not silently treat the entire candidate universe as though every candidate were an observed Public, Expert, or Framework source position.

Possible outcomes include:

- source-grounded projection available;
- expanded projection available;
- matched-study projection available;
- demonstration projection available;
- no appropriate SACRE projection yet.

### Gate 7 — demonstration richness

Separately classify whether the case's universe or a declared projection is especially suitable for public demonstration, teaching, or RE-Iteration.

A case can be scientifically valuable even when source evidence converges strongly or when a constructed comparator is needed to expose an important boundary position.

### Gate 8 — release review

No record becomes released merely because it validates structurally. Apply provenance, source-mark accuracy, candidate distinctness, granularity, rights, hashing, substantive-digest and review rules.

## 9. Audit sequence: Featured calibration, then the whole Bench

The Scenario / candidate-universe audit is a **Bench-wide completion requirement**, not a one-off check on Featured cases.

### Stage A — Featured calibration

Audit all 20 currently released Featured cases first.

Purpose:

- calibrate adequate Scenario specification;
- identify source-to-Policy construction failures;
- identify missing serious candidates even when unsourced;
- distinguish genuine source convergence from candidate-universe compression;
- establish when a constructed comparator adds real analytic value;
- identify strong source-grounded and expanded SACRE projections;
- test the audit rubric against cases the research team already understands well.

Do not silently rewrite released v1 records. Any substantive correction becomes a new explicit version with change history.

### Stage B — Full Bench audit

Once the calibration standard is stable, apply the same audit systematically to **all 200 planned cases before final corpus freeze**.

The audit should occur during case construction and source/release review rather than as a cosmetic pass after all 200 are already frozen. Existing developmental records must be reopened where necessary.

No case should be treated as complete solely because it already has valid JSON, resolved citations, or a previously assigned geometry.

## 10. Batching

The 200-case build should proceed in five research batches while preserving the master inventory IDs as editorial handles:

- **Batch A — M001–M050:** clinical care, consent, pediatrics, end-of-life, reproduction;
- **Batch B — M051–M100:** genetics, research ethics, public health and global health;
- **Batch C — M101–M150:** allocation/transplantation, disability/mental health, neuroethics, AI/data and emerging technology;
- **Batch D — M151–M175:** animal ethics, One Health, planetary/climate and adjacent multispecies governance;
- **Batch E — M176–M200:** everyday clinical, professional and interprofessional ethics from casebook/practice streams.

Work may be reordered within a batch when sourceability or overlap makes a cluster more efficient, but no domain should be deferred simply because it is harder.

## 11. Tracking fields

`docs/FULL_CORPUS_PROGRESS.md` remains the historical/operational construction ledger. `docs/FULL_CORPUS_SCENARIO_POLICY_AUDIT_LEDGER.md` tracks the new all-200 review.

Each case should ultimately record:

- inventory ID;
- case ID;
- title;
- primary domain;
- source packet status;
- deep case-file status;
- concise/detailed status;
- candidate-universe status;
- candidate count;
- candidate provenance/source status;
- source-supported public evidence status;
- expert evidence status;
- framework status;
- Scenario / candidate-universe audit status;
- available SACRE projection(s);
- projection geometry;
- projection claim type (`source-grounded`, `expanded`, `matched-study`, `demonstration`, etc.);
- demonstration-richness classification;
- release-review status;
- Featured crosswalk if applicable;
- notes/blocker.

## 12. Relationship to Featured v1

Featured v1 is closed and remains released on `main`.

The full-corpus work must not silently rewrite those 20 released research objects. For a Featured case:

- the scholarly case file may be expanded;
- the candidate universe may become richer;
- new source/provenance marks may be added in a future version;
- new SACRE projections may be created;
- the released executable record remains unchanged unless an explicit new version is issued.

A crosswalk should connect Featured IDs to their underlying master-inventory cases so the full corpus does not duplicate them as independent objects.

## 13. Resource-paper deliverable

The completed corpus should allow the paper to report:

- how the 200-Scenario universe was assembled;
- why bounded normative Scenarios are the unit of construction;
- how casebooks, policy/guidance, empirical bioethics, normative scholarship and emerging governance were combined;
- how concise/detailed controlled representations were constructed;
- how rich candidate universes were constructed;
- how candidate-level source/provenance status was represented;
- how source-grounded, inferred, framework-derived and constructed positions were distinguished;
- how Scenario / candidate-universe adequacy was audited;
- how one or more SACRE projections were derived from the richer case object;
- resulting counts by domain, candidate provenance, candidate-universe size, projection type and geometry;
- how Featured/public demonstration objects were selected;
- licensing, versioning, hashing and substantive-digest rules;
- what the resource enables for teaching, ethics research, SACRE, matched human/model studies, representation robustness, RE-Iteration and future validation.

The resource paper should not claim that source presence, release, execution, model agreement or human agreement establishes moral correctness.

## 14. Completion definition

Bioethics Bench Full Corpus v1 is complete when:

1. all M001–M200 are accounted for by a stable case crosswalk;
2. all 200 have deep scholarly case files;
3. all 200 have reviewed concise and detailed Scenario representations;
4. all 200 have a reviewed **rich candidate universe**;
5. all candidates have explicit provenance/source status;
6. all 200 have passed an explicit Scenario / candidate-universe audit;
7. each case has explicit SACRE projection status and any available projections are versioned;
8. source-grounded projections are clearly distinguished from expanded/constructed projections;
9. every case has demonstration-richness classification where relevant;
10. every case has provenance documentation and rights treatment;
11. released projections have schema-valid versioned records and reproducible candidate IDs/hashes;
12. Featured v1 remains intact as a historical released front door, with substantive changes represented as new versions rather than silent mutation;
13. the public site can browse the full corpus and show candidate source status without turning the interface into a methods memo;
14. corpus-level counts, domain coverage, provenance summaries, candidate-universe statistics and projection statistics are reproducible from machine-readable metadata;
15. a methods/resource-paper report can be generated from the completed object rather than from planned future work.

The 200-case inventory remains extensible after v1. Completion means this release is finished, not that practical bioethics has been exhaustively enumerated forever.
