# Executable eligibility ledger

**Maintained by:** the independent reviewer, since review state is what it records.
**Purpose:** for each family in the strict-standard executable set, its profile and where it
stands against the review gate. Rebuilt when review status changes.

Reconstructed from the batch candidate audits and reconciled against every checkpoint:
26 at n=100, 32 at n=150 and n=160, 31 at n=200 after M102's demotion. The arithmetic below
matches those figures exactly, which is the check that the list is complete.

---

## A boundary question that changes the headline number

**M001 is Featured F01.** `FIRST_50_CHECKPOINT` lists it as *"released through Featured F01
(`2×2×2`)"* and counts it inside the executable set. It has no separate Full Corpus record; the
family was realised as F01 and F01 was not modified.

Under the build gate just adopted — Featured v1 and the Full Corpus executable subset get separate
manifests — M001 belongs in the Featured manifest. Carrying it into the Full Corpus manifest puts
a family selected under the earlier standard into the artifact defined by the strict one, which is
the exact case the rule was written to prevent.

So: **31 strict-standard executable families, of which 30 belong in the Full Corpus manifest.**
Not an error in the research; an error that would have entered the manifest if the count were
copied across unexamined.

---

## The ledger

**Transcribed and reviewed — 4.** In `data/benchmark` today.

| family | profile | note |
|---|---|---|
| M002 | `1×2×2` | the only `1×2×2` in the corpus |
| M004 | `2×1×2` | |
| M005 | `2×1×2` | `fw1` re-derived after review; records re-hashed |
| M010 | `2×2×2` | |

**Cleared, awaiting transcription — 5.**

| family | profile | cleared in |
|---|---|---|
| M106 | `2×1×2` | Batch K/L review |
| M123 | `2×1×2` | n=150 six-case review — expert singleton straddles the axis |
| M139 | `2×1×2` | n=150 — distinctness test is the reference example |
| M141 | `2×1×2` | n=150 |
| M144 | `2×1×2` | n=150 — reference case for the scenario/action-divergence gate |

**Awaiting independent review — 21.** Audited by the corpus author, not yet through the gate.

M012, M018, M019, M020, M025, M028, M030, M031, M033, M034, M041, M042, M045, M050, M054, M056,
M060, M075, M080, M094, M097.

**Demoted — 1.** M102, `needs-additional-evidence`, deemed-consent evidence mismatch.

**Featured, not in the Full Corpus manifest — 1.** M001 / F01.

`4 + 5 + 21 + 1 = 31.` The 21 is the real queue.

---

## What review of the 21 involves

Each needs the same three checks the cleared five passed:

1. **Action test** — apply every candidate to the case's own scenario and write down the first
   action. Candidates with the same entry are one candidate in several voices. This is what M005
   failed and what `scripts/audit-actions.mjs` sets up.
2. **Axis spanning** — the public and framework layers must each hold both sides. A framework
   layer entirely on one side does not span the case, whatever its sources say.
3. **Scenario/action divergence** — the newly adopted gate. Does the represented fact pattern lie
   where the candidates actually produce different actions? M144 is the reference: its candidates
   agree on high-impact AI use and differ only below it, so a high-impact scenario would have left
   it executable on paper and empty in practice.

Ten of the twenty-one are from batches audited before the strict standard was fully articulated
(M012–M050, Batch B and C). Those are worth reading first, not because the audits were weaker but
because the standard they were written against has since moved — the same reason F11 and F17 read
differently now than when they were built.

## Note on the expected outcome

The cleared rate so far is five of six. If that holds, most of the 21 will pass and the manifest
will land near 28–30 Full Corpus families. It should not be assumed: M102 failed on a mismatch
that its own audit had half-identified and that no structural check would catch, and the earlier
batches have had the least scrutiny under the current rules.
