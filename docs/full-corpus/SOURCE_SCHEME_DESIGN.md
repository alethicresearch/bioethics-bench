# Declared source schemes — design note

**Date:** 2026-08-28
**Status:** proposed, being implemented
**Why now:** the fixed three-pool model is what holds 166 of the 200 families out of the executable
corpus, and most of them are held for reasons that are facts about the evidence rather than defects
in the case.

---

## 1. What is actually blocking the corpus

Every executable record must today supply `public`, `expert` and `framework` pools. The schema
requires all three and permits no others. Auditing fifteen families against their sources showed
that the requirement fails in three recurring ways, none of which is a flaw in the case:

**Affected-community evidence is usually not policy evidence.** People are asked what they would
choose, use, accept or feel. They are rarely asked what an institution should do. Where the bridge
from preference to policy cannot be made honestly, there is no public *policy* candidate — and the
case is discarded even when its professional and normative disagreement is real and sharp.

**Professional guidance often converges.** A single professional architecture is a finding about the
field, and the corpus already treats singleton pools as legitimate. But a singleton professional
pool combined with an absent public pool leaves too few pools, so the case fails on arithmetic
rather than on substance.

**Some affected parties are not people.** M156, M157 and M159 concern animal and environmental
interests. A `public` pool can only carry human attitudes *about* those interests, which is
different evidence about a different question. Rather than proxy them, the corpus holds the
families — and three domains stand empty as a result.

The common factor is that the fixed triple encodes one experimental design — compare public against
expert against framework — as though it were the definition of the method.

## 2. What must not change

The generalization below is deliberately narrow. It relaxes the identity and number of pools and
nothing else. These remain exactly as they are:

- Candidates are **action-distinct policies** under a fixed scenario. Two rationales producing the
  same action are one candidate.
- Every candidate carries **truthful provenance** under the four-basis taxonomy, and the basis is a
  claim about how that candidate relates to its sources.
- Comparison is **across pools, never within one**. A pool is a body of differently-warranted
  positions, and comparing two positions drawn from the same warrant measures agreement that was
  built in.
- **Mean is required wherever cross-pool partner counts differ.** This follows from the structure
  and is computed from it, so it generalizes to any number of pools without amendment.
- An **incomplete required matrix does not rank**.
- A **singleton pool is legitimate only after a competing-policy sweep** shows convergence.

## 3. The change

A record declares the source scheme it executes under:

    "source_scheme": "affected-professional-framework@1.0.0"

Schemes are registered in `schemas/source-schemes.json`, each naming its ordered pools, the
candidate-id prefix for each, and what kind of warrant each pool carries. `candidate_pools` must
then hold exactly the scheme's pools, and cross-source pairing is computed over them:

    pairs = sum over unordered pool pairs (i, j) of |P_i| x |P_j|

which reduces to `ab + ac + bc` for three pools and stays correct for two or four.

### Schemes registered initially

| Scheme | Pools | For |
|---|---|---|
| `public-expert-framework` | public, expert, framework | The current corpus. Unchanged, and remains the default. |
| `professional-framework` | professional, framework | Cases whose real disagreement is between professional architectures and normative positions, with no policy-level affected evidence. |
| `affected-professional-framework` | affected, professional, framework | As the default, but `affected` carries evidence about the interests of affected parties, which may be nonhuman and evidenced by welfare science rather than by opinion. |
| `institutional-framework` | institutional, framework | Cases where the live disagreement is between institutional architectures actually in force in different systems. |

### Two pools is a real field, not a degenerate one

A two-pool case still compares differently-warranted positions, still produces a coherence profile,
still requires Mean where partner counts differ, and still refuses to rank an incomplete matrix. It
is a thinner field and should be read as one. What it is not is an absence of a case: a genuine
disagreement between professional guidance and normative argument is ordinary in bioethics, and
discarding it because a third pool cannot be populated honestly loses a real object rather than
protecting a standard.

## 4. The safeguard this needs

Relaxing pool identity creates one new way to cheat: splitting a single body of evidence across two
pools to manufacture a cross-source comparison. That would produce a matrix whose agreement is an
artefact of the split.

A pool must therefore differ from its neighbours in **kind of warrant**, not merely in content, and
the validator enforces the checkable part: no two pools within a record may rest on the same
citations. Where the same source legitimately informs two pools, the record must say which distinct
warrant each draws from it.

This does not make the judgment mechanical. It makes the obvious version of the mistake fail.

## 5. What this does not license

- It does not license relabelling preference evidence as policy evidence. The four-basis rule is
  untouched, and a case that could only execute by mislabelling its provenance still may not.
- It does not license promoting a held family by choosing a scheme that flatters it. A promotion
  still requires a recorded audit against the sources.
- It does not license a one-pool case. Cross-source comparison needs at least two.
- It does not make the corpus larger by itself. It removes an obstacle that was not tracking
  anything real; how many families clear the remaining standard is an empirical question.
