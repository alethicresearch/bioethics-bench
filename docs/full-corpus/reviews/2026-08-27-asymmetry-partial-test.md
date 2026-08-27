# Partial refutation test of the `2×1×2` result, from corpus material only

**From:** independent reviewer
**Follows:** `2026-08-27-asymmetry-pattern-review.md`, which proposed searching for a second
professional position as hard as the public layer is searched for heterogeneity.

---

## What was run

The full test needs an outside search. This is the part that can be done from the corpus itself,
and it is worth doing first because it is free and it narrows where to look.

For every case whose audit records a single expert candidate, count the professional bodies that
case's *own expert section* names. A case that names one body and derives one candidate tells us
nothing either way. **A case that names several and still derives one is where a second position
might have been available and was not taken** — the signature a search artifact would leave.

## Result

| case | bodies named in its expert section | outcome |
|---|---|---|
| M025 | 0 matched | inconclusive by this method |
| **M028** | **3 — AAN, AAP, SCCM** | **checked by hand: sound** |
| M033 | 0 matched | inconclusive by this method |
| M034 | 1 — AAN | consistent with a single position |

M028 was the one case the method flagged, and it survives inspection. The three bodies are not
three positions: AAN, AAP, CNS and SCCM **co-authored** the 2023 guideline the candidate is drawn
from, so naming three organisations is naming one professional position with three signatories.
The audit already says as much — *"A second expert candidate should not be invented from older
institutional variation; the current recognized medical standard is substantially convergent"* —
and that is the right call rather than a missed opportunity.

**On the evidence available inside the corpus, the `2×1×2` pattern shows no sign of being a search
artifact.** That is a real if modest strengthening of the checkpoint's claim.

## What this does not establish

Three limits, stated so the result is not read as more than it is.

**The sample is four cases, not eleven.** Only the later audit documents record an explicit
`Audit result:` line; the Batch A and B audits state their conclusions in prose, so a scripted
sweep cannot read them. The eleven-case denominator in the checkpoint is not reachable by this
method today.

**It can only see what the audit already looked at.** A professional body that was never searched
for leaves no trace in the document, so this method cannot distinguish "no second position exists"
from "no second position was sought". That distinction is the whole question, and only an outside
search settles it.

**Zero matches are not evidence of anything.** M025 and M033 name no organisation my pattern
recognises, which may mean the guidance is cited by author and year rather than by body.

So the strong version of the test still stands as proposed, and this result should not be used to
retire it. What it does is lower the prior that the pattern is an artifact, and identify that the
places worth searching are the cases where guidance is cited by document rather than by
organisation.

## One cheap change that would make this checkable corpus-wide

If every candidate audit recorded its conclusion in a fixed form — the `Audit result:` line the
later batches already use, with the profile written the same way each time — the sweep above would
run over all eleven single-expert cases instead of four, and the checkpoint's distribution could
be regenerated from the audits rather than maintained by hand. That is a note for the corpus
author rather than a change to make unilaterally: the audits are theirs, the convention is already
half-established, and a validator script to read it is a twenty-minute job whenever they want it.
