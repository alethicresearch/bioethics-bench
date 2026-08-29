# Deep-research brief — the review work that needs sources

**For:** a research agent or a human reviewer with retrieval, working the Full Corpus release gate.

**Start here. Then check [`RESEARCH_HANDOFF.md`](RESEARCH_HANDOFF.md) for current state — it is
regenerated on every validate run and is the answer to "has anything moved?" — then work
[`research-tasks/README.md`](research-tasks/README.md).**

You do not need a frozen snapshot to work against. The corpus is still being repaired, and that is
fine: every reviewable unit carries a fingerprint over the candidate's own text, basis and
provenance, and the return gate checks *your unit* rather than the whole record. Repairing a
citation in one candidate will not invalidate your finding about another. If something you actually
read has changed, the gate names that unit and only that unit.

---

## What you are inheriting

Six review passes have run against the 34-family executable subset, all performed by a model. They
are indexed in `README.md` and each closed a question about the *record*. Everything they can
establish is established, and the corpus survived them: no family was demoted, no basis changed, no
geometry moved, one candidate's text was repaired.

**The most useful thing this brief can give you is the list of questions you do not need to
re-ask.** Time spent re-deriving these is time not spent on the three that remain.

Already settled, and not worth your time:

- **Do the identifiers resolve?** Yes. 113 PMIDs, all resolving with year and title-or-author
  consistent. A citation naming a PMC id with no PMID now fails the build.
- **Can a reader get from a candidate to a nameable source?** Yes. Seven circular citations — which
  named this repository's own audit documents as a candidate's warrant — were repaired, one
  genuinely missing source was identified, and a guard prevents recurrence.
- **Does each scenario sit where its candidates diverge?** Yes, all 34 families.
- **Does each `direct-policy-evidence` source *state* the policy attributed to it?** Checked for all
  69 such candidates against the passage each cites.
- **Do the 55 inference bridges hold logically?** Yes, all 55.

## The three things that remain, and why each is here

### A — source-description verification (55 units, largest surface)

Every `source-informed-policy-inference` candidate states what its sources measured. The bridge
*from* that description to the policy has been checked. **The description itself has not.** A bridge
can be perfectly sound reasoning from a finding the source does not report.

For each: read the cited work and say whether it reports what the bridge claims — population,
measure, direction, rough magnitude.

The known failure shape, from the one instance found so far: M030's candidate described its source
as "directly elicited care preferences," and the study had surveyed **adult smokers imagining
advanced lung cancer**, not patients under treatment. The bridge was fine. The description was not.

### B — whole-document reads (69 units, where the real defects were)

The warrant review read the passage each candidate cites. Twice, reading the *whole* document found
something the passage could not show: the source taking a position on **another question the family
divides along**, which the record does not carry.

- **M041** — the candidate reproduces ESHRE Task Force 14's funding-threshold rule almost verbatim.
  The same paper also holds that when only one patient can be treated, priority goes to a childless
  couple. Prior children is exactly the axis that family's other candidates split on.
- **M042** — the candidate carries Nuffield's "accurate, balanced and non-directive" standard. The
  same report warns that normalising NIPT without deliberative support erodes rather than supports
  autonomous choice — which sits on the routine-offer versus opt-in axis the other candidates split
  on.

Both were invisible from the abstract and from the cited passage. **Both were found in the only two
sources read from their own full text.** That is the reason to expect more of them, and the reason
this task exists: it is under-detected, not rare.

So read for what the source says about the *other* candidates in the family, not only about the one
citing it. Each task file lists them for exactly this purpose.

### C — re-source two public pools (2 units, release-gating)

**M045** and **M060** have public pools derived entirely from the professional-body document their
expert pools also cite. Their public–expert QCCS cells compare one document against itself, so a
high coherence score there is guaranteed by construction and reports nothing.

Work back from the ASRM opinion to the public-attitude studies it summarises and cite them directly.

**A negative result is a real result here.** If the studies cannot be identified, or exist but do not
report what the candidate needs, say so — that is the evidence for holding the family. The one
outcome worse than either is a plausible-looking substitute citation that nobody checks.

## How to work

Read what has already been found before you start, particularly the failure modes:
`DIRECT_POLICY_WARRANT_REVIEW.md` and `BRIDGE_REVIEW.md`. They are short and they will tell you what
these errors look like in this corpus, which is more useful than a general instruction to be careful.

Then take one family per sitting from `research-tasks/README.md`, in the order C → B → A.

Return a verdict as JSON per the template at the foot of each task file — copying each unit's
fingerprint from the task file or the handoff — then run:

```
node scripts/ingest-research-verdicts.mjs
```

It refuses three things: a verdict naming a unit that does not exist, a verdict asserting a defect
or a discovery with no evidence, and a verdict whose own unit has been repaired since you read it.
Those refusals are the point — a review that cannot be returned into the repository is a request,
not a gate. Partial returns in any order over any period are fine and report as partial; coverage
is computed from the corpus, not from what you sent, so an incomplete review never looks finished.

## Three standing rules

**Report what you find, not what would be convenient.** The corpus has already produced one error
whose direction was convenient — M002 attributed to WHO QualityRights a "substitute decision-making
only as a last resort" rule, which is the framing that body exists to reject, and which happened to
make that candidate easier to compare against its pool-mate. Errors that tidy a corpus are the ones
to be most suspicious of, including your own.

**Do not manufacture grounding.** If a source does not support a candidate, the finding is that it
does not. This corpus was rebuilt after eight records were withdrawn for grounding asserted rather
than verified, and a defect that survives review and reaches a production run is worse than a red
build.

**You are not the release gate.** Nothing here sets `reviewed_by_human`, and no verdict edits a
record. This work makes the gate *assessable* from repository state rather than from someone's
memory of who looked at what. Whether the corpus is releasable remains a human decision, informed
by what you return.
