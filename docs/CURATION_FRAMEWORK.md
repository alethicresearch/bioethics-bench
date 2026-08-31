# Featured Collection — curation framework

How cases move from the **open master inventory** into a public Featured release. Two stages, in order: **eligibility gates** filter, then **portfolio dimensions** inform a deliberately balanced release.

The order matters. Gates are pass/fail and apply regardless of how famous or interesting a case is — a case that fails one is not rescued by scoring well on the dimensions. Only eligible cases are assessed on the dimensions, and those assessments inform curation rather than deciding it.

This framework no longer treats 24–30 cases as the size of the research universe. The project now maintains an **open-ended master inventory** in `docs/case-inventory/`; strong cases remain there whether or not they are used in the first Featured release. A Featured release is a curated public slice of that inventory, and later releases may add further cases. Release size is therefore a product/editorial decision, not a reason to discard research-worthy cases.

## Stage 1 — Eligibility gates

A proposed executable Featured case should ordinarily satisfy **all** of these before it is assessed further.

| # | Gate | Fails when |
|---|---|---|
| G1 | Presents a recognizable **bioethical decision problem** | It is an abstract philosophical puzzle with no institutional decision attached |
| G2 | **Bounded** enough to support explicit policy candidates | The scenario is so open that candidates cannot answer "what should be done?" |
| G3 | Admits **at least two substantively distinct defensible positions**, preferably three or more | One position is obviously correct and the others are strawmen |
| G4 | Has adequate **literature / guideline / public-source provenance** | Candidate pools would have to be invented rather than sourced |
| G5 | Does **not require a predetermined moral ground truth** | Representing it fairly requires presupposing the answer |
| G6 | Suitable for **public exposure** and reuse | Identifiable private individuals; material that should not be a teaching object |
| G7 | Reconstructable **without copying protected source text** | The case only works if published text is reproduced at length |
| G8 | Does not depend critically on **unstated specialist facts** | A small change in unmentioned clinical or legal detail flips the answer |
| G9 | Understandable as a **self-contained represented scenario** | An informed reader needs a specialist monograph to see the problem |

Two gates deserve emphasis because they are the ones a compelling case most often fails.

**G5** excludes cases whose fair representation requires presupposing an answer. Historical atrocities are morally important and pedagogically vital, but they are not useful SACRE benchmark cases if one side of the represented choice can only be a straw position.

**G8** excludes cases that only look well specified. A scenario that turns on an unstated prognosis, statute, treatment effect, technology performance figure or other specialist fact does not yet state one stable problem: the policies may be answering different versions of it. Some cases are rescued by stating the fact or bounded uncertainty explicitly; others remain unsuitable because the factual controversy is inseparable from the normative decision.

## Stage 2 — Portfolio dimensions

Eligible cases are assessed on the following. These describe a case and a release; they do not generate a mechanical ranking.

**Intrinsic to the case**

- **Canonical importance** — should bioethics students and scholars recognize this problem?
- **Normative richness** — is there a real conflict, or a consensus with dissent attached?
- **Teaching value** — does the case make the underlying ethical problem legible?
- **Contemporary relevance** — does it connect to live biomedical practice or policy?
- **Difficulty** — a clear teaching case, or a genuinely unresolved frontier problem?

**Representational**

- **Source-perspective diversity** — can public preferences, expert/professional judgment, and ethical-framework reasoning each contribute something distinct? A case where all three converge trivially, or where one pool has nothing responsible to say, may be weak for SACRE even if important in another context.
- **SACRE usefulness** — does the represented problem create meaningful convergence structure rather than duplicated candidates? Close margins, cross-cutting similarities and run disagreement are potentially informative; a curated case is not required to produce a dramatic winner.
- **Representational tractability** — can each position be stated faithfully, in its own terms, without caricature?
- **Literature / provenance depth** — can the scenario and position families be reconstructed from serious sources with recordable citations?
- **Executable tractability** — can the scholarship be translated into a digestible scenario and commensurable policy candidates without losing the ethically decisive facts?

**Collection / release level**

- **Distinctiveness** — does it add something the other cases in this release do not?
- **Domain coverage** — clinical, research, reproduction/genetics, public health, allocation, AI/data, disability/mental health, global/structural, neuroethics, animal/One Health, climate/planetary, biosecurity and emerging biotechnology where appropriate.
- **Stakeholder diversity** — patients, families, clinicians, researchers, institutions, publics, affected communities, future persons, nonhuman animals and cross-border populations where relevant.
- **Geographic / cultural breadth** — a release that quietly equates bioethics with US hospital ethics has made a substantive claim it did not intend to make.
- **Decision-type diversity** — individual treatment, allocation, regulation, research design, institutional governance, population policy and international governance.
- **Benchmark-profile balance** — cases should be executable under a common profile where possible, so differences in results are not merely differences in prompt length or matrix size.

### These are not summed

A portfolio is not a leaderboard. Adding the dimensions and taking the top N would favor exactly the cases with the deepest Anglophone clinical literature and highest canonical recognition. Every individual choice could look defensible while the resulting release misrepresented the field.

The dimensions are used two ways instead:

1. **Diagnostically per case** — to identify what must be solved before a topic becomes an executable record.
2. **As balance constraints across a release** — coverage, breadth, decision type and difficulty are properties of the *set*.

The three selection rationales below serve the same purpose: a case earns release space for a stated reason, and a release can be checked for having all three.

| Rationale | A case belongs because |
|---|---|
| **Core / canonical** | It represents an important part of bioethics that a serious collection should expose |
| **Methodologically informative** | It is unusually good for exercising SACRE, QCCS, repeated runs, comparison or RE-Iteration |
| **Frontier / contemporary** | It extends the collection into emerging practice or governance — for example medical AI, genome editing, neurotechnology, synthetic biology or climate/One Health ethics |

A case may carry more than one. No release should be dominated merely by whichever rationale has the most famous literature.

## Inventory and release architecture

| Layer | Purpose | Current status |
|---|---|---|
| Master inventory | Open-ended research universe of candidate decision problems | **175 provisional problems in `docs/case-inventory/`** |
| Deep case files | Case-specific literature, position map, factual assumptions and provenance | Next phase; created as cases are developed |
| Executable records | Compact scenario + frozen candidate pools suitable for SACRE/human QCCS | Pilot next under `CASE_CONSTRUCTION_STANDARD.md` |
| Featured release | Public, browsable collection of reviewed executable records | No fixed lifetime cap; release size chosen editorially |
| P1 tutorial | Separate simplified teaching object with stipulated arithmetic | To be rebuilt/reconciled after case-profile pilot |
| P2 demonstration subset | A few real Featured cases shown deeply | Selected after real runs exist |

The former `FEATURED_LONGLIST_v0.md` remains useful as the first 56-topic exercise that exposed the old collection's skew. It is now a historical curation artifact rather than the complete longlist.

## Legacy SACRE examples

The nine historical topics enter the master inventory **on equal terms** — no grandfathering, no automatic exclusion. Their exact scenarios, candidates and old runs remain historical objects.

Two observations about that set remain important:

- **It is end-of-life weighted.** Four of nine sit in or adjacent to end-of-life care.
- **It is uniformly affluent-hospital-shaped.** None is a public-health, global-health, structural, animal/One Health, climate or non-clinical governance decision.

The open inventory solves this by adding rather than by deleting. A particular public release can still be balanced without pretending the omitted topics are unimportant.

## What comes next

1. Deep research and source mapping continue across the master inventory.
2. Pilot the executable-record profile on a deliberately diverse small set of cases, using `CASE_CONSTRUCTION_STANDARD.md`.
3. Revise the construction standard only where real cases expose a problem.
4. Draft reviewed Featured records with provenance recorded during construction.
5. Run them through SACRE and inspect whether the represented candidates and comparison structure behave as intended.
6. Freeze public records only after editorial/domain review.
7. Identify the P1 tutorial and P2 demonstration subset from what we learn.

The P1 tutorial has different requirements from a Featured case. It needs stipulated values and arithmetic a reader can follow by hand, and should eventually demonstrate the full current flow including Step 6 and a fresh re-run over the revised candidate set. A Featured case optimized for normative richness need not be the best tutorial object.