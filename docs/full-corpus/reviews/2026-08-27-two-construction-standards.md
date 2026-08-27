# Featured v1 and the full corpus are being built to different standards

**From:** independent reviewer
**Found by:** following M098's non-executable judgment back to F11, which is the same family.

This is not a defect report. Nothing here is dishonest, hidden or wrong at the time it was
done. It is a comparability problem, and it reaches the only real result the project has.

---

## What happened

The Batch-J audit judges **M098 — ventilator triage during catastrophic scarcity** as
`needs-additional-evidence`, do not execute. `FEATURED_V1_SELECTION.md` records M098 as the
inventory origin of **F11**, which is released, public, `2×2×2`, and the case E0 executed 24/24
against. The same family is executable in one corpus and not in the other.

The audit's specific objection does not apply to F11. It says the public evidence supports one
nested rule — prognosis where it distinguishes patients, lottery where it does not — rather than
two candidates, "maximize survival" and "lottery". F11 does not make that split: `pub1` **is** the
nested rule, and `pub2` is an equity-weighted alternative, which is a different axis and a real
one. So there is no contradiction on the ground the audit states.

The difference is elsewhere, and it is systematic.

## The actual difference: editorial translation

F11's `pub2` provenance says, in its own words:

> The combined rule is Bench editorial translation of those two strands.

That is honest and it is the convention working. But the newer audits refuse exactly this move.
M066 was held back partly because an opt-in/opt-out distinction "would be partly Bench-designed
rather than directly elicited". M065, M070, M076 and M083 all turn on refusing to convert
attitudes or acceptability into an institutional policy the sources do not state.

So I counted. **Of 40 public candidates across the 20 Featured families, 25 declare an editorial
translation or construction component in their provenance summary.** Not a handful — the majority.

```
f02 pub1  The confirmation step is an editorial translation of that value, not a surveyed policy.
f09 pub1  The specific permissive rule is Bench editorial translation of that conditional support.
f11 pub2  The combined rule is Bench editorial translation of those two strands.
f16 pub1  The equal-threshold rule is Bench editorial translation of that concern into a deployment condition.
…25 in total
```

Featured v1 was built to a standard where an affected-community position could be translated into
an actionable institutional rule, provided the translation was declared. The full corpus is being
built to a standard where it cannot. Both are defensible. They are not the same standard, and the
corpus does not currently say so anywhere a reader would look.

## Three consequences

**1. The yield numbers are not comparable, and I got this wrong.** Earlier review flagged the
falling executable rate — Batch G zero of four, Batch I zero of five — and read it as a property
of the domain: how little of applied ethics has both direct affected-policy evidence and genuine
professional pluralism. That reading was incomplete. Part of the fall is the standard tightening.
Featured yielded 20 of 20 executable; the full corpus is near 26 of 100. Those two rates measure
different things and must not be reported as one trend.

**2. The only real QCCS data sits on a case built to the earlier standard.** E0 ran 24/24 against
F11, and F11's `pub2` is one of the 25. Nothing about the execution is invalid — the record is
what it is, the provenance says what it says, and the run is a faithful measurement *of that
record*. But a paper reporting E0 should not describe F11 as though it were built to the standard
the full corpus now applies.

**3. A published corpus would carry two standards without labelling them.** Featured v1 is
released and frozen, so it cannot be edited — only versioned. That is fine. What is not fine is a
reader being unable to tell which construction standard produced the case in front of them.

## What I would do, and what I would not

**Not** re-open Featured v1. It is released, its provenance is honest at the candidate level, and
re-deriving 25 candidates to a later standard would be a large change to a frozen artifact for
no research gain.

**Do** state the difference where it can be seen: a paragraph in the corpus documentation and in
any paper reporting either corpus, saying that Featured v1 permits declared editorial translation
of affected-community evidence into actionable rules, that the full corpus does not, and that
executable-yield figures from the two are not comparable.

**Consider** whether the full corpus's stricter rule is the right one for the whole resource. It
produces fewer executable cases and cleaner provenance. That is a real trade and the PI's call,
not mine — but it should be made deliberately rather than by drift, and it is currently being made
by drift.

## One smaller item

The agreed convention is that authored completion is declared in `provenance.summary` prefixed
`Bench-authored policy completion:`. The 25 Featured candidates declare the same thing in prose
without the prefix. If the prefix is meant to be greppable — which is its main advantage over
prose — Featured predates it and will not match. Worth deciding whether the convention applies
retroactively as a documentation pass, or only forward from the full corpus.
