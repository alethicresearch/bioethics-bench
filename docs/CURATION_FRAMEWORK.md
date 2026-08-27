# Featured Collection — curation framework

How cases get from a topic to a Featured v1 record. Two stages, in order: **eligibility gates**
filter, then **portfolio dimensions** inform a deliberately balanced selection.

The order matters. Gates are pass/fail and apply regardless of how famous or interesting a case
is — a case that fails one is not rescued by scoring well on the dimensions. Only eligible cases
are assessed on the dimensions, and those assessments inform curation rather than deciding it.

## Stage 1 — Eligibility gates

A proposed case should ordinarily satisfy **all** of these before it is assessed further.

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

**G5** is the one that excludes cases everyone recognizes. A case whose fair representation
requires presupposing an answer cannot support a candidate set that SACRE could rank. Historical
atrocities are the clearest instance: they are morally important and pedagogically vital, and
they are not Featured cases, because there is no defensible policy family on one side.

**G8** is the one that excludes cases that look ideal. A scenario that turns on an unstated
prognosis, an unmentioned statute, or a jurisdiction-specific rule is not representable — the
candidates would be answering different questions from each other. Some genuinely important
cases are rescuable by stipulating the missing fact in the scenario; others are not, because the
stipulation is where the ethics lives.

## Stage 2 — Portfolio dimensions

Eligible cases are assessed on the following. These describe a case; they do not rank it.

**Intrinsic to the case**

- **Canonical importance** — should bioethics students and scholars recognize this problem?
- **Normative richness** — is there a real conflict, or a consensus with dissent attached?
- **Teaching value** — does the case make the underlying ethical problem legible?
- **Contemporary relevance** — does it connect to live biomedical practice or policy?
- **Difficulty** — a clear teaching case, or a genuinely unresolved frontier problem?

**Representational**

- **Source-perspective diversity** — can public preferences, expert/professional judgment, and
  ethical-framework reasoning each contribute something distinct? A case where all three
  converge trivially, or where one pool has nothing to say, is weak for SACRE regardless of its
  importance.
- **SACRE usefulness** — does the case generate interesting convergence structure, or nine
  near-identical candidates? Cases producing a genuine spread, a near-tie, or a cross-cutting
  disagreement are more informative than cases producing a landslide.
- **Representational tractability** — can each position be stated faithfully, in its own terms,
  without caricature? A case where one family can only be phrased as a straw position fails
  this even if it passed G3.
- **Literature / provenance depth** — can the case and its positions be reconstructed from
  serious sources with recordable citations?

**Collection-level**

- **Distinctiveness** — does it add something the other Featured cases do not?
- **Domain coverage** — clinical, research, reproductive, genetics, public health, allocation,
  AI/data, disability, global health, emerging biotechnology.
- **Stakeholder diversity** — patients, families, clinicians, researchers, institutions, publics,
  communities, future persons.
- **Geographic / cultural breadth** — a collection that quietly equates bioethics with US
  hospital ethics has made a substantive claim it did not intend to make.
- **Decision-type diversity** — individual treatment, allocation, regulation, research design,
  institutional policy, population policy.

### These are not summed

A portfolio is not a leaderboard. Adding the dimensions and taking the top 30 would produce a
predictable collection: heavily end-of-life, heavily clinical, heavily Anglophone, because those
are the cases with the deepest literature and the highest canonical recognition. Every
individually strong choice, and a collection that misrepresents the field.

The dimensions are used two ways instead:

1. **Diagnostically per case** — a case weak on representational tractability may still belong,
   with a note that its candidate drafting needs particular care. A case weak on SACRE usefulness
   probably does not, however canonical it is.
2. **As balance constraints across the set** — coverage, breadth, decision type and difficulty
   are properties of the *collection*. They are checked over the whole selection, not scored per
   case, and they are what a deliberate curation adds over a ranking.

The three selection rationales below serve the same purpose: a case earns its place for a stated
reason, and the collection is checked for having all three.

| Rationale | A case belongs because |
|---|---|
| **Core / canonical** | It represents an important part of bioethics that a serious collection must contain |
| **Methodologically informative** | It is unusually good for exercising SACRE, QCCS, run comparison, or RE-Iteration |
| **Frontier / contemporary** | It extends the collection into emerging bioethics — medical AI, genome editing, neurotechnology, synthetic biology |

A case may carry more than one. A strong 24–30-case collection contains all three, and is not
dominated by the first.

## Funnel

| Stage | Target | Status |
|---|---|---|
| Longlist | 50–60 topics | **`FEATURED_LONGLIST_v0.md` — 56 entries** |
| Serious candidates | 35–40 | Not started — requires substantive review of the longlist |
| Featured v1 | 24–30 | Not started |

Pruning is a research/editorial decision, not an implementation one. The longlist is offered for
substantive review; nothing is selected.

## Legacy SACRE examples

The nine historical examples enter the longlist **on equal terms** — no grandfathering, no
automatic exclusion. Each longlist entry states whether it derives from or revisits one.

Two observations about that set, offered as evidence rather than as a recommendation:

- **It is end-of-life weighted.** Four of nine (withdrawal of life support, dementia and advance
  directives, medical aid in dying, hospice transition) sit in or adjacent to end-of-life care.
  Carrying them all forward would reproduce that weighting in the Featured Collection.
- **It is uniformly US-hospital-shaped.** All nine are framed around clinical decision-making in
  a well-resourced hospital system. None is a public-health, global-health, structural, or
  non-clinical decision. This is the concrete form the geographic/cultural breadth concern takes.

Where a legacy topic reappears below, the entry says what would need to change for it to be a
Featured case, because "we already had this one" is not a reason.

## What comes after review

Once the longlist is cut to serious candidates and then to Featured v1:

1. Deep research per finalist — sources, positions, provenance.
2. Scenario and candidate-pool drafting, with provenance recorded as it is gathered rather than
   reconstructed afterwards. `exposure_history` starts at the first commit.
3. Independent editorial/bioethics review.
4. Freeze at `status: released`, `collection: featured`, `exposure: public`.
5. Identify the P1 tutorial case and the 2–4 strongest P2 demonstration cases.

On (5): the P1 tutorial has different requirements from a Featured case and may not be one of
them. P1 needs stipulated values and arithmetic a reader can follow by hand — deliberately
simple, non-empirical. A Featured case optimized for normative richness is the opposite of that.
The tutorial may be derived from a Featured topic while remaining a distinct, simplified object.
