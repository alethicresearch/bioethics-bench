# Bioethics Bench — Full Corpus v1 Plan

**Status:** active research build  
**Branch:** `research/full-corpus-v1`  
**Base:** released Featured v1 on `main`  
**Scope:** convert the 200-case master inventory into a completed, source-grounded Bioethics Bench resource while preserving the released 20-family Featured collection as the curated executable front door.

## 1. Research object

Bioethics Bench v1 will contain **200 bounded practical-ethics case families**, each represented in two controlled forms:

- **concise** — a compact representation for browsing, teaching and low-friction application use;
- **detailed** — a richer representation of the same decision problem, adding decision-relevant context without changing the underlying question.

The full resource therefore targets **200 case families / 400 authored scenario representations**.

The existing 20-family Featured collection remains a released subset, not a separate ontology. Featured cases are the first fully reviewed `2 × 2 × 2` executable slice of the larger resource.

## 2. What every case family must contain

Every case family in the completed resource must have a scholarly case file with:

1. stable case-family identifier and title;
2. domain, subdomain and tags;
3. explicit decision-maker;
4. one bounded decision question;
5. concise scenario;
6. detailed scenario;
7. decision-critical factual assumptions;
8. explicit uncertainties;
9. jurisdiction/time treatment where relevant;
10. explicit benchmark stipulations where needed to prevent hidden factual completion by the scorer;
11. source-grounded map of serious policy/position families;
12. public or affected-community evidence where it genuinely exists;
13. professional/expert recommendations;
14. normative/framework positions and the reasoning bridge from principle to action;
15. references and provenance;
16. construction and representation risks;
17. an executable-eligibility determination;
18. suggested uses such as teaching, SACRE, matched human QCCS, robustness, RE-Iteration or perturbation.

The case file is a research object in its own right even when the case does not qualify for the executable subset.

## 3. Controlled paired representations

Concise and detailed representations are two authored representations of **one underlying decision**.

They must share:

- case-family identity;
- decision-maker;
- decision question;
- decision-critical factual state;
- benchmark stipulations;
- substantive position map.

Detailed may unpack context, uncertainty, stakeholder structure and institutional background. It must not introduce a load-bearing fact absent from concise if the same executable candidate set is intended to apply to both.

Where a case becomes executable, candidate policies should initially be held constant across concise and detailed representations so representation sensitivity is not confounded with candidate wording.

## 4. Evidence-qualified executable status

The full corpus must **not** manufacture evidence to force all 200 cases into one executable profile.

A family may be designated executable only when the evidence supports a defensible set of policy candidates satisfying the case-construction standard.

For the default `2 × 2 × 2` profile, that means:

- two substantively distinct public- or affected-public-derived policy candidates;
- two substantively distinct expert/professional policy candidates;
- two actionable framework-derived candidates;
- all six answering the same decision question at comparable policy granularity;
- all twelve cross-source QCCS pairs being meaningful comparisons.

If a source class is genuinely missing or too weak, record that as an **evidence gap**. Do not write an editorial intuition and label it public preference.

Accordingly the public resource has nested levels:

1. **Full Corpus** — 200 complete scholarly case families / 400 representations.
2. **Executable Collection** — every family that passes executable evidence and representation gates.
3. **Featured Collection** — the released 20-family curated executable subset designed for demonstration, controlled execution and paper use.

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
- professional recommendation;
- empirical public/affected-community position;
- advocacy or stakeholder position;
- framework-derived recommendation;
- Bench editorial stipulation.

A source may support more than one layer, but the provenance record must state what it actually supports.

## 6. Animal ethics and One Health

Animal ethics, multispecies ethics and One Health are first-class components of the corpus.

The full build should include the existing inventory cases concerning animal research, replacement, farmed-animal welfare, antimicrobial use, zoonotic control, outbreak culling, wildlife disease, invasive/feral animal control, conservation, wild-animal intervention, xenotransplant donor-animal welfare and related questions.

Human public opinion about animals is not a substitute for animal interests. Where animals cannot supply a public-preference source, their interests should be represented through relevant welfare/scientific expertise and normative frameworks that treat nonhuman animals as direct moral subjects.

Do not add an artificial fourth source pool merely for symmetry. Reopen the source architecture only if actual case construction demonstrates that the three-pool structure cannot faithfully represent a case.

## 7. Construction workflow

Each inventory topic moves through the following gates:

**inventory → source packet → deep case file → paired representations → editorial audit → executable-eligibility audit → executable record(s) where supported → release**

The workflow is deliberately source-first. Do not mass-generate scenarios or candidate policies directly from the inventory descriptions.

### Gate 1 — source packet

Minimum expectation:

- authoritative professional/policy source where one exists;
- serious normative source(s);
- empirical public/affected-community evidence where available;
- relevant casebook or historical source where useful;
- current empirical facts needed to make the decision interpretable.

### Gate 2 — deep case file

The case file should explain:

- why this is one decision rather than a topic;
- which facts actually change the normative problem;
- serious position families;
- source-class evidence and gaps;
- likely benchmark stipulations;
- risks of triviality, hidden factual dependence, source duplication or rhetorical imbalance.

### Gate 3 — paired representations

Draft concise and detailed forms under the controlled-representation rule.

### Gate 4 — executable eligibility

Classify each family:

- `executable-2x2x2`;
- `executable-other-profile`;
- `research-complete-not-executable`;
- `needs-additional-evidence`.

The classification must include a reason.

### Gate 5 — release review

No new executable record becomes released merely because it validates as JSON. Apply the existing provenance, distinctness, granularity, rights, hashing, substantive-digest and review rules.

## 8. Batching

The 200-case build should proceed in five research batches while preserving the master inventory IDs as editorial handles:

- **Batch A — M001–M050:** clinical care, consent, pediatrics, end-of-life, reproduction;
- **Batch B — M051–M100:** genetics, research ethics, public health and global health;
- **Batch C — M101–M150:** allocation/transplantation, disability/mental health, neuroethics, AI/data and emerging technology;
- **Batch D — M151–M175:** animal ethics, One Health, planetary/climate and adjacent multispecies governance;
- **Batch E — M176–M200:** everyday clinical, professional and interprofessional ethics from casebook/practice streams.

Work may be reordered within a batch when sourceability or overlap makes a cluster more efficient, but no domain should be deferred simply because it is harder.

## 9. Tracking fields

`docs/FULL_CORPUS_PROGRESS.md` is the operational ledger. Each inventory case should ultimately carry:

- inventory ID;
- case-family ID;
- title;
- primary domain;
- source packet status;
- case-file status;
- concise status;
- detailed status;
- public evidence status;
- expert evidence status;
- framework status;
- executable eligibility;
- review status;
- Featured crosswalk if applicable;
- notes/blocker.

The progress ledger is editorial state, not benchmark identity.

## 10. Relationship to Featured v1

Featured v1 is closed and remains released on `main`.

The full-corpus branch must not silently rewrite those 20 released research objects. For a Featured case:

- the full case file may be expanded;
- the master-corpus taxonomy may add metadata around it;
- the released executable record remains unchanged unless a genuine defect requires a new explicit version.

A crosswalk should connect Featured IDs to their underlying master-inventory cases so the full corpus does not duplicate them as new independent decisions.

## 11. Resource-paper deliverable

The completed corpus is intended to support a standalone resource/methods paper in addition to its use in the normative-computation papers.

The paper-facing description should be able to report, without projection:

- how the 200-decision universe was assembled;
- why bounded decisions rather than broad topics are the unit of analysis;
- how casebooks, policy/guidance, empirical bioethics, normative scholarship and emerging governance were combined;
- how concise/detailed controlled representations were constructed;
- how source-class provenance and evidence gaps were handled;
- how benchmark stipulations were separated from reported facts;
- how executable eligibility was determined;
- the resulting counts by domain and eligibility class;
- how the 20-case Featured subset was chosen;
- licensing, versioning, hashing and substantive-digest rules;
- what the resource enables for teaching, ethics research, SACRE, matched human/model studies, representation robustness, RE-Iteration and future validation.

The resource paper should not claim that release, execution, model agreement or human agreement establishes moral correctness.

## 12. Completion definition

Bioethics Bench Full Corpus v1 is complete when:

1. all M001–M200 are accounted for by a stable case-family crosswalk;
2. all 200 have deep case files;
3. all 200 have reviewed concise and detailed representations;
4. every case has an explicit executable-eligibility classification with reasons;
5. every case has source/provenance documentation and rights treatment;
6. the executable subset has schema-valid versioned records under the appropriate profile(s);
7. Featured v1 remains intact as the curated 20-family front door;
8. the public site can browse the full corpus and distinguish full, executable and Featured layers;
9. corpus-level counts, domain coverage and provenance summaries are reproducible from machine-readable metadata;
10. a methods/resource-paper report can be generated from the completed object rather than from planned future work.

The 200-case inventory remains extensible after v1. Completion means this release is finished, not that practical bioethics has been exhaustively enumerated forever.
