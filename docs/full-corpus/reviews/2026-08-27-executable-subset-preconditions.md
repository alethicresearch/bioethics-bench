# Before the executable-subset build

**From:** independent reviewer
**Verified at `1d2e1a1`:** 200 deep-case files, M001–M200, no gaps. CI green. 48 records — the 40
released Featured plus 8 development — with nothing silently transcribed. M102 carries a formal
disposition. Distribution arithmetic checks: 9 + 21 + 1 = 31.

The research layer is done and the count is right. Three things should be settled before the
subset is assembled, because each is cheap now and expensive once a manifest exists that people
cite.

---

## 1. The manifest will mix two construction standards unless it is stopped from doing so

Featured v1's twenty families were built under a standard that permitted declared editorial
translation of affected-community evidence into actionable rules. The full corpus's thirty-one
were built under one that does not. Both are recorded; `FIRST_100_CHECKPOINT` says so explicitly.

The problem arrives at assembly. An "executable subset" that lists families from both sources
produces a single artifact whose members were selected by two different rules — and every
downstream use inherits that silently. Worse, four verified pairs have a *released Featured family
whose full-corpus counterpart is judged non-executable*: F11/M098, F15/M129, F17/M156, F18/M160.
A combined manifest would therefore contain cases the corpus's own current standard excludes.

Three ways to handle it, and the third is what happens by default:

- **Separate manifests.** The full-corpus executable subset is the thirty-one. Featured v1 remains
  a released demonstration set with its own manifest and its own standard. Cleanest, and it keeps
  the two rates — 20/20 and 31/200 — from ever being read as one trend.
- **One manifest with a `construction_standard` field per family.** Honest and larger, but every
  analysis downstream must then respect the field, and nothing enforces that.
- **One manifest without the field.** No decision required, which is why it is the likely outcome.
  It is the only option that produces a false artifact.

I would take the first.

## 2. Excluded-for-architecture is not the same status as excluded-for-evidence

M156–M164 and the other nonhuman-bearer cases are withheld pending a rule about whose interests
the `public` pool represents. That is a different reason from "insufficient direct affected-policy
evidence", and the difference is the finding: those cases are not short of data, they are short of
a way to represent the party that bears the harm.

If the manifest records both as `needs-additional-evidence`, the corpus's most interesting
methodological result becomes invisible in its own index. A distinct status —
`pending-affected-interest-rule`, or equivalent — costs nothing and preserves it.

The rule itself is still unsettled, and Batch Q was built through the animal and climate cases
without it. That was reasonable given zero executables resulted, but it remains open, and F19 is
M165, so the climate block has the same shape.

## 3. The companion audit has a specific failure mode worth naming

The proposed load-bearing-fact audit should ask, for each cleared case, the question that M144
turned on: **does the scenario sit where the candidates actually diverge?**

M144's own audit noted its candidates agree on high-impact AI use and differ only for
low-to-moderate contributions. Had the scenario described a single high-impact tool, every
candidate would have given the same answer and the case would have been executable on paper and
empty in practice. It passed because the scenario is pitched at the policy level, across a range
of tools.

That check is not the same as companion equivalence — two representations can state the same
load-bearing facts and both sit in the wrong band. `scripts/audit-actions.mjs` prints the scenario
beside each candidate for exactly this comparison; the automated version was attempted and
demonstrated not to work, with the number recorded in that file's header.

---

## On the shape of the result

Thirty-one of two hundred, with the last forty families adding none. That is not a shortfall. A
construction standard that admits fifteen per cent of researched cases, applied consistently
enough that a whole batch can return zero, is the strongest available evidence that the standard
is doing work rather than ratifying whatever was found.

The non-executable cases are the larger part of the resource and should be presented that way.
M129, M156–M164, M169, M189, M196 and M200 each mark a specific place where normative
disagreement, available evidence and representable interests fail to line up — and the reasons
differ case by case. A benchmark that records why a case cannot be executed is doing something a
benchmark of executable cases alone cannot.
