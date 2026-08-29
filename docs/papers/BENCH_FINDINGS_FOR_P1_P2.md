# Bench findings ready for P1 v59 and P2 v45 — consolidated

**Date:** 2026-08-29. **For:** the central paper coordinator, writing now.
**Supersedes, for drafting purposes, the entry-by-entry list in `MANUSCRIPT_WRITEBACK.md`.**

That file is a chronological log with 21 entries of mixed vintage: several are superseded by later
ones, several name manuscript versions that have moved (P2 v41, P1 v58), and the ordering is when
things were found rather than what matters. This document is the same material triaged for someone
writing prose. The log stays as the audit trail; work from this.

**Nine findings, in the order they are worth using.** Each says what it gives the paper, the number
to state, and what would make the claim false.

---

## The numbers, current as of this document

State them from here rather than from any earlier entry.

| | |
|---|---|
| Executable subset | **34 families, 68 records** (concise + detailed companions) |
| Candidates | **210 per family set** — 69 public, 55 expert, 86 framework |
| Basis distribution | public: 49 inferred / 20 direct · expert: 49 direct / 6 inferred · framework: 86 derived |
| Citation gate | **122 PMIDs, 122 resolve** with year and title-or-author consistent |
| Sources read against candidates | **69 of 69** `direct-policy-evidence` candidates (all public, all expert) |
| Bridges checked | **55 of 55** `source-informed-policy-inference` candidates |
| Release state | release-candidate; `reviewed_by_human` false on all 68; **not** a release gate for the current paper program |

---

## 1. Structural validation is not source fidelity — and there are now three named ways it fails

**Gives the paper:** the argument it currently asserts, with instances. Every defect below survived
schema validation, content hashing, companion equivalence, geometry, profile registry,
action-distinctness, citation resolution, traceability and scenario/action divergence.

- **The source does not say it.** M002's expert candidate, cited to WHO QualityRights, read
  "substitute decision-making only as a last resort." That body is CRPD-Article-12 aligned and
  treats substitute decision-making as something to eliminate, declining even a last-resort framing.
  The citation was correct and the source real; the candidate said what the source rejects.
- **The candidate adds an undeclared clause.** M025's ACIA guideline governs candidacy and takes no
  position on informed parental refusal, so "refusal alone is not treated as neglect" was
  Bench-authored. M144 carries AMA H-480.931's risk-and-impact principle across from
  developer-to-purchaser disclosure to physician-to-patient disclosure.
- **The source is quoted correctly on one question and silent on its own position on another.**
  M041 reproduces ESHRE Task Force 14's funding-threshold rule almost verbatim and omits the same
  paper's holding that priority goes to a childless couple — the axis the family's other candidates
  divide along. M042 does the same with Nuffield's normalisation warning.

**The line worth writing:** a citation check verifies the passage; only a reader verifies the source.
Mode 3 is caught only by reading the whole document, because the failure is in what the record
leaves out.

**Mode 3 has a second consequence, found since:** an omission does not only understate the source it
came from — it can misrepresent a *different* pool. M054's expert source (ACMG) both explicitly
rejects the opt-in default two other candidates represent, and recommends the high-penetrance
threshold the framework candidate `fw3` derives from principle. So `fw3` has professional backing as
well as a framework derivation, and a reader taking the framework pool as the
unsupported-by-evidence layer would be wrong about that family. If P1 characterises what the
framework pool is, this is the caveat.

**What would falsify it:** nothing found here was a fabricated source or a wrong identifier — the
mechanical layer held. The claim is about what mechanical checking *reaches*, not that it failed.

## 2. Expert pluralism is usually one authority stating a duty and its limit

**Gives the paper:** a correction to the intuitive model, and a rule for reading a QCCS cell.

Two bodies contradicting each other is the *minority* case. More often one authority states a duty
and its limit, declines to settle, or endorses a menu — and both expert candidates are licensed by
the same document. ASRM 2022 says practitioners are under no obligation to provide *or refuse*
non-medical sex selection (M060); CDC's stewardship framework directs avoidance of low-benefit
antibiotics *and* supplies delayed-prescribing materials (M018); AMA Opinion 8.3 states the duty to
provide urgent disaster care and the duty to weigh present risk against future availability (M020).
M189's USPSTF-against-ACS is the exception, not the template.

**Consequence:** a low expert–expert coherence score reports a professional *disagreement* when the
candidates come from two bodies, and tension *within* a single professional position when they come
from one document's two clauses. The corpus can now tell them apart because the citations say which.

## 3. Source independence is a precondition nothing structural enforces

**Gives the paper:** a method-boundary claim with a worked failure and a repair.

QCCS reads a high public–expert cell as public and profession converging. That assumes the pools are
independent sources, and **nothing enforces it** — not the schema, geometry, profile registry or the
four-basis taxonomy. M045 and M060 failed it: their public candidates were grounded in the ASRM
opinions that were also their expert warrant, so those cells compared a document against itself and a
high score was guaranteed by construction.

Repaired by tracing both opinions back to the population studies underneath them (Barton 2012, Hans
2014, Pastuszak 2013, Nakhuda 2011, Côté 2014; Dahl 2006, Winkelman 2015, Kippen 2018, Dahl 2004),
verified against PubMed including reported figures, with the ASRM opinions removed from the public
pools. Executable set unchanged at 34.

**The durable claim:** a corpus can satisfy every construction rule and still contain cells that
measure nothing.

## 4. "Direct policy evidence" from a public survey means the instrument asked about the policy

**Gives the paper:** an operational test for the action-target alignment rule it currently states as
a principle.

M028 is the worked example because one study contains both questions. Ludka 2025 asked whether *the
hospital should be required* to continue treatment when a family rejects brain death (41.9% agreed)
and separately what respondents would want *for themselves* (24.4%). The record cites the first. Two
numbers, one study, and the whole rule is visible in the gap between them.

This is why the basis distribution is asymmetric rather than arbitrary: public evidence usually
measures what people want for themselves, so 49 of 69 public candidates need a declared bridge and
only 20 are direct; professional guidance usually *is* a policy, so 49 of 55 expert candidates are
direct.

## 5. A stipulation is a measurement instrument

**Gives the paper:** what benchmark stipulations are *for*, shown rather than asserted.

Each one holds the case where the represented policies come apart, and carries a rationale naming
which alternative it stops from deciding the case in advance. M094 stipulates that the
less-restrictive infection-control package can reach acceptable patient protection — without it, the
vaccination-mandate case answers itself. M045 stipulates strong evidence of a shared family-building
plan *and* no signed instruction, and under exactly those facts the four source candidates split two
and two along the written-authorization / strong-evidence line.

## 6. The distinctness rule has a stateable limit

**Gives the paper:** an honest refinement rather than a defect.

The rule is action-distinctness *under the fixed fact pattern* — same action, one candidate. In M033
two framework candidates both refuse under the stipulated facts, because the scenario deliberately
leaves current welfare indeterminate. They stay as two because one keeps a defined reopening trigger
and the other forecloses the question. **A policy's identity includes the institutional behaviour it
directs going forward, not only the action it selects on the instant case** — and a distinctness test
evaluated on one fact pattern can only see the latter.

## 7. Circular grounding clusters where the claim is strongest

**Gives the paper:** a construction-failure pattern with a distribution worth reporting.

Seven citations named one of the repository's own audit documents as a candidate's warrant. Of 420
candidates, **all seven were in the public pool and all seven were `direct-policy-evidence`** — the
one basis asserting a source *states* the policy. Circular grounding does not appear at random; it
appears where a construction pass reaches for a summary instead of a source, which is the
strongest-claim class. All seven are repaired and a build guard makes the count non-recoverable.

Related and worth one sentence: an official government document from the right agency on the right
topic can still be evidence *about* a policy rather than a statement *of* it. M031's candidate
encoded Oregon's MAID safeguards and cited the OHA's annual **data summary**, which contains none of
them; they are in ORS 127.800–127.897.

## 8. What the citation gate reaches, and what it cannot

**Gives the paper:** the release-readiness claim in its defensible form.

122 of 122 PMIDs resolve to real records consistent with their citations. That is the ceiling of
machine checking: an identifier that resolves, to a paper that exists, cited accurately. Whether that
paper supports the policy attributed to it is a separate question no check answers.

**Both halves should be stated together:** the Bench's strongest evidentiary claims — all 69
`direct-policy-evidence` candidates — have now been read against their sources and survived, with
corrections recorded; *and* the corpus remains release-candidate because that reading was done by a
model, not the independent human reviewer the release gate names.

## 9. Open, and should be described as open

**Gives the paper:** accurate limitations language.

- **124 of 126 external review units are unreturned.** Two are complete (the re-sourcing in §3).
- **The 55 bridges were checked for whether they hold, not for whether they describe their sources
  correctly.** Sources were read directly only for the direct-policy class. A bridge can be sound
  reasoning from a finding the source does not report — M030 described "directly elicited care
  preferences" from a study of adult smokers imagining lung cancer.
- **Mode 3 is under-detected, not rare — now with a rate.** Three families were given a deliberate
  whole-document read and **all three carried it** (M054, M075, M139), on top of the two found
  incidentally (M041, M042). Five findings from five families examined this way. Thirty-one families
  have not been examined this way at all. Do not extrapolate the rate, but do not describe the
  corpus as free of it either.
- **The four-basis rule has no discipline for a partly-authored direct candidate.** Two instances;
  staged as a construction-standard decision, not silently changed.

**Do not write** that the corpus is human-reviewed, that the review is complete, or that
cross-source coherence has been validated. None is true.

---

## Retired

Superseded by the above; do not draft from them. Earlier citation-gate figures (98, 103, 107, 110,
111) — use 122. "Two ways an expert pool comes to hold two candidates" — superseded by §2, which has
the proportions right. The M031 and M002 standalone entries — folded into §1. The cross-source
independence entry requesting a coordinator decision — decided and implemented, see §3.
