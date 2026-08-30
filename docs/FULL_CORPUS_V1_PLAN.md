# Bioethics Bench — Full Corpus v1 Plan

**Status:** active research build  
**Branch:** `research/full-corpus-v1`  
**Base:** released Featured v1 on `main`  
**Scope:** convert the 200-case master inventory into a completed, source-grounded Bioethics Bench resource while preserving the released 20-case Featured collection as the curated public front door.

## 1. Research object

Bioethics Bench v1 will contain **200 bounded practical-ethics cases / Scenarios**, each represented in two controlled forms:

- **concise** — a compact representation for browsing, teaching and low-friction application use;
- **detailed** — a richer representation of the same normative Scenario, adding relevant context without changing the underlying represented Policy field.

The full resource therefore targets **200 cases / 400 authored Scenario representations**.

The existing 20-case Featured collection remains a released subset, not a separate ontology. Featured cases are the first fully reviewed public executable slice of the larger resource.

### Governing SACRE ontology

The resource must remain aligned with the SACRE specification in Part I.

SACRE does not formally take a separate `decision` object as input. Its represented normative material begins with:

1. a **Scenario** `S`;
2. source-tagged **Policy candidates** from Public Preferences / affected-community evidence, Expert Judgments / professional evidence, and Ethical Frameworks.

SACRE then measures cross-source normative convergence, aggregates the completed relation field, identifies a provisional Final Policy, and may revise selected positions through RE-Iteration.

A `decision_question` may remain useful editorial metadata because it can make a Scenario intelligible and bounded. An explicit decision-maker may likewise be useful contextual metadata. Neither should be treated as a formal SACRE primitive or used to pre-author the candidate taxonomy.

The construction goal is therefore **Scenario-first, source-grounded recovery of the natural Policy positions**, not exhaustive completion of an editor-defined menu of decision branches.

## 2. What every case must contain

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
10. explicit benchmark stipulations where needed to prevent hidden factual completion by the scorer;
11. a source-grounded map of substantively distinct Policy positions naturally supported by the evidence;
12. public or affected-community evidence where it genuinely exists;
13. professional/expert recommendations or judgments;
14. normative/framework positions and the reasoning bridge from principle to Policy;
15. references and provenance;
16. construction and representation risks;
17. a Scenario / Policy-representation audit;
18. an executable-eligibility determination;
19. a demonstration-richness determination where relevant;
20. suggested uses such as teaching, SACRE, matched human QCCS, robustness, RE-Iteration or perturbation.

The case file is a research object in its own right even when the case does not qualify for the executable subset.

## 3. Controlled concise and detailed representations

Concise and detailed forms are two authored representations of **one underlying normative Scenario**.

They must share:

- case identity;
- the same practical normative problem;
- decision-critical factual state;
- benchmark stipulations;
- substantive source-grounded Policy field.

A practical framing question may be shared when useful, but it is metadata rather than the object that defines the candidate set.

Detailed may unpack context, uncertainty, stakeholder structure and institutional background. It must not introduce a load-bearing fact absent from concise if the same executable candidate field is intended to apply to both.

Where a case becomes executable, Policy candidates should initially be held constant across concise and detailed representations so representation sensitivity is not confounded with candidate wording.

## 4. Evidence-qualified executable status

The full corpus must **not** manufacture evidence or normative disagreement to force all 200 cases into one executable profile.

A case may be designated executable only when the evidence supports a defensible represented Policy field satisfying the case-construction standard.

Under the current SACRE specification, that means:

- at least one defensible Public / affected-community Policy candidate;
- at least one defensible Expert / professional Policy candidate;
- at least one defensible Framework-derived Policy candidate;
- candidate counts following the evidence rather than a preferred visual geometry;
- candidates preserving substantively distinct source-supported normative positions rather than near-paraphrases or merged synthetic compromises;
- cross-source QCCS pairs representing meaningful comparisons at a sufficiently comparable level of abstraction;
- any asymmetric candidate geometry handled explicitly by the SACRE aggregation rule rather than edited away at the resource level.

A `2 × 2 × 2` profile may still be selected for a controlled study where the evidence naturally supports it. It is not the substantive definition of an executable case.

If a source class is genuinely missing or too weak, record that as an **evidence gap**. Do not write an editorial intuition and label it public preference, expert judgment, or framework evidence.

Accordingly the public resource has nested levels:

1. **Full Corpus** — 200 complete scholarly cases / 400 representations.
2. **SACRE-suitable / Executable Collection** — every case that passes evidence, Scenario, and Policy-representation gates under a declared executable profile.
3. **Demonstration-rich Collection** — cases whose naturally supported Policy fields make the method especially informative to inspect or revise.
4. **Featured Collection** — the curated public front door, which may draw preferentially from demonstration-rich cases but remains a release/versioning designation rather than an ontology.

Executable status is an evidence/construction property, not a judgment of philosophical importance.

## 5. Source architecture

Research should use multiple discovery streams rather than one canon:

- recurring casebooks and curricula;
- professional guidance, law and policy;
- empirical bioethics and public/affected-community evidence;
- normative scholarship;
- emerging-governance literature;
- PSAI as a topic map only, not as evidence of public or expert positions.

For each case distinguish:

- reported fact;
- professional recommendation or judgment;
- empirical public/affected-community position;
- advocacy or stakeholder position;
- framework-derived Policy position;
- Bench editorial stipulation.

A source may support more than one layer, but the provenance record must state what it actually supports.

Source search must not stop once an editorially prewritten `decision_question` appears to have two answers. Research should instead ask what substantively distinct normative positions the relevant source domain actually contains.

## 6. Animal ethics and One Health

Animal ethics, multispecies ethics and One Health are first-class components of the corpus.

The full build should include the existing inventory cases concerning animal research, replacement, farmed-animal welfare, antimicrobial use, zoonotic control, outbreak culling, wildlife disease, invasive/feral animal control, conservation, wild-animal intervention, xenotransplant donor-animal welfare and related questions.

Human public opinion about animals is not a substitute for animal interests. Where animals cannot supply a public-preference source, their interests should be represented through relevant welfare/scientific expertise and normative frameworks that treat nonhuman animals as direct moral subjects.

Do not add an artificial fourth source pool merely for symmetry. Reopen the source architecture only if actual case construction demonstrates that the three-pool structure cannot faithfully represent a case.

## 7. Construction workflow

Each inventory topic moves through the following gates:

**inventory → source packet → deep case file → concise/detailed Scenario representations → Scenario / Policy-representation audit → editorial/source audit → executable-eligibility audit → executable record(s) where supported → demonstration-richness classification → release**

The workflow is deliberately source-first and Scenario-first. Do not mass-generate Scenarios or Policy candidates directly from inventory descriptions, and do not use an editorial `decision_question` to dictate what candidate positions the source search is expected to find.

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
- substantively distinct source-supported Policy positions;
- source-class evidence and gaps;
- likely benchmark stipulations;
- risks of triviality, hidden factual dependence, source duplication, position merging, rhetorical imbalance, or decision-question overfitting.

A practical framing question may be included for clarity but should be derived after understanding the Scenario and source positions, not used as the generator of those positions.

### Gate 3 — controlled representations

Draft concise and detailed forms under the controlled-representation rule.

### Gate 4 — Scenario / Policy-representation audit

Apply `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`.

The audit asks whether:

- the Scenario contains enough context for meaningful comparison without stipulating away the normative problem;
- the source search recovered the natural number of substantively distinct positions in each source domain;
- candidates were merged, duplicated, overcompressed, or created to fill a slot;
- the framing question has narrowed the candidate field artificially;
- concise and detailed forms preserve the same normative object;
- genuine source convergence is preserved rather than artificially diversified.

### Gate 5 — executable eligibility

Classify each case:

- `executable-natural-geometry`;
- `executable-study-profile` where a declared study subset naturally satisfies a specified geometry;
- `research-complete-not-executable`;
- `needs-additional-evidence`.

The classification must include a reason.

### Gate 6 — demonstration richness

Separately classify whether the case is especially suitable for public demonstration, teaching, or RE-Iteration because its naturally supported Policy field yields an informative coherence structure.

A case can be executable without being demonstration-rich, and research-complete without being executable.

### Gate 7 — release review

No new executable record becomes released merely because it validates as JSON. Apply the existing provenance, distinctness, granularity, rights, hashing, substantive-digest and review rules.

## 8. Audit sequence: Featured calibration, then the whole Bench

The Scenario / Policy-representation audit is a **Bench-wide completion requirement**, not a one-off check on Featured cases.

Proceed in two stages:

### Stage A — Featured calibration

Audit all 20 currently released Featured cases first.

Purpose:

- calibrate what counts as adequate Scenario specification;
- identify recurring source-to-Policy construction failures;
- distinguish natural convergence from editorial compression;
- identify which released cases remain strong demonstrations;
- establish concrete examples of acceptable asymmetry and natural candidate geometry;
- test the audit rubric against cases the research team already understands well.

Do not silently rewrite released v1 records. Any substantive correction becomes a new explicit version with change history.

### Stage B — Full Bench audit

Once the calibration standard is stable, apply the same audit systematically to **all 200 planned cases before final corpus freeze**.

The audit should occur during case construction and source/release review rather than as a cosmetic pass after all 200 are already frozen. Existing developmental records must be reopened where necessary.

No case should enter the final executable collection solely because it already has valid JSON, resolved citations, or a previously assigned geometry.

## 9. Batching

The 200-case build should proceed in five research batches while preserving the master inventory IDs as editorial handles:

- **Batch A — M001–M050:** clinical care, consent, pediatrics, end-of-life, reproduction;
- **Batch B — M051–M100:** genetics, research ethics, public health and global health;
- **Batch C — M101–M150:** allocation/transplantation, disability/mental health, neuroethics, AI/data and emerging technology;
- **Batch D — M151–M175:** animal ethics, One Health, planetary/climate and adjacent multispecies governance;
- **Batch E — M176–M200:** everyday clinical, professional and interprofessional ethics from casebook/practice streams.

Work may be reordered within a batch when sourceability or overlap makes a cluster more efficient, but no domain should be deferred simply because it is harder.

## 10. Tracking fields

`docs/FULL_CORPUS_PROGRESS.md` is the operational ledger. Each inventory case should ultimately carry:

- inventory ID;
- case ID;
- title;
- primary domain;
- source packet status;
- deep case-file status;
- concise status;
- detailed status;
- public evidence status;
- expert evidence status;
- framework status;
- Scenario / Policy-representation audit status;
- natural candidate geometry;
- executable eligibility;
- demonstration-richness classification;
- release-review status;
- Featured crosswalk if applicable;
- notes/blocker.

The progress ledger is editorial state, not benchmark identity.

## 11. Relationship to Featured v1

Featured v1 is closed and remains released on `main`.

The full-corpus work must not silently rewrite those 20 released research objects. For a Featured case:

- the full scholarly case file may be expanded;
- the master-corpus taxonomy may add metadata around it;
- the new audit may classify it differently for future demonstration use;
- the released executable record remains unchanged unless a genuine representational or factual defect requires a new explicit version.

A crosswalk should connect Featured IDs to their underlying master-inventory cases so the full corpus does not duplicate them as new independent objects.

## 12. Resource-paper deliverable

The completed corpus is intended to support a standalone resource/methods paper in addition to its use in the normative-computation papers.

The paper-facing description should be able to report, without projection:

- how the 200-Scenario universe was assembled;
- why bounded normative Scenarios rather than broad topics are the unit of construction;
- how casebooks, policy/guidance, empirical bioethics, normative scholarship and emerging governance were combined;
- how concise/detailed controlled representations were constructed;
- how source-class provenance and evidence gaps were handled;
- how Policy positions were recovered from sources without forcing a fixed candidate geometry;
- how benchmark stipulations were separated from reported facts;
- how Scenario / Policy-representation adequacy was audited;
- how executable eligibility and demonstration richness were distinguished;
- the resulting counts by domain, natural candidate geometry, and eligibility class;
- how the Featured/public demonstration set was selected;
- licensing, versioning, hashing and substantive-digest rules;
- what the resource enables for teaching, ethics research, SACRE, matched human/model studies, representation robustness, RE-Iteration and future validation.

The resource paper should not claim that release, execution, model agreement or human agreement establishes moral correctness.

## 13. Completion definition

Bioethics Bench Full Corpus v1 is complete when:

1. all M001–M200 are accounted for by a stable case crosswalk;
2. all 200 have deep scholarly case files;
3. all 200 have reviewed concise and detailed Scenario representations;
4. all 200 have passed an explicit Scenario / Policy-representation audit;
5. every case has an explicit executable-eligibility classification with reasons;
6. every case has a demonstration-richness classification where relevant;
7. every case has source/provenance documentation and rights treatment;
8. the executable subset has schema-valid versioned records under the appropriate natural or declared study profile(s);
9. Featured v1 remains intact as a historical released front door, with any substantive corrections represented as new versions rather than silent mutation;
10. the public site can browse the full corpus and distinguish full, SACRE-suitable, and demonstration layers;
11. corpus-level counts, domain coverage, provenance summaries and natural candidate geometry are reproducible from machine-readable metadata;
12. a methods/resource-paper report can be generated from the completed object rather than from planned future work.

The 200-case inventory remains extensible after v1. Completion means this release is finished, not that practical bioethics has been exhaustively enumerated forever.
