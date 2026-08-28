# Executable eligibility ledger

**Maintained by:** the independent reviewer, since review state is what it records.
**Purpose:** for each family in the strict-standard executable set, its profile and where it
stands against the review gate. Rebuilt when review status changes.

Reconstructed from the batch candidate audits and reconciled against every checkpoint:
26 at n=100, 32 at n=150 and n=160, 31 at n=200 after M102's demotion. The arithmetic below
matches those figures exactly, which is the check that the list is complete.

---

## Status at completion of independent review

All thirty-one strict-standard families have now been through the four gates.

| | n | families |
|---|---|---|
| **Transcribed and reviewed** | 4 | M002, M004, M005, M010 |
| **Cleared, awaiting transcription** | 13 | M028, M033, M041, M056, M060, M075, M080, M094, M106, M123, M139, M141, M144 |
| **Demoted on review** | 13 | M012, M018, M019, M020, M025, M030, M031, M034, M042, M045, M050, M054, M097 |
| **Demoted earlier** | 1 | M102 |
| **Featured manifest, not Full Corpus** | 1 | M001 / F01 |

**Full Corpus executable manifest: 17 families.** `17 + 13 = 30`, plus M001 in Featured and M102
demoted, reconciling to the historical 32.

**17 of 200 researched families — 8.5%.**

### Why the number moved

The thirteen demoted on review were all accepted by audits written before the source-to-policy
standard was fully articulated. Applied from scratch, gate 1 removes them: patient attitudes toward
an intervention are not a view about clinician conduct; uptake under an offer is not endorsement of
a default; willingness to use a service is not a position on whether it should be provided; moral
acceptability of an act is not a position on institutional participation.

Two cases carry a route back. **M025** needs affected-community evidence about what programmes
should recommend rather than what parents choose. **M054**'s failure is one-sided — `pub2` is
sound, `pub1` rests on uptake — so a replacement `pub1` from consent-design evidence would restore
it.

Dispositions: `reviews/2026-08-27-early-ten-dispositions.md` and
`reviews/2026-08-27-remaining-eleven-and-m025.md`.

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

## Transcription preconditions (custodial check, 2026-08-28)

Before writing thirteen more families into `data/benchmark`, the infrastructure was checked
against the newly adopted build gate that Featured v1 and the Full Corpus executable subset
ship as **separate manifests**. Two things had to be true and one was not.

**Profile coverage.** The registry held only two Full Corpus profiles, both asymmetric
(`1×2×2` and `2×1×2`). A cleared family whose evidence supports two candidates in every pool
had nowhere to land except the Featured profile. `full-corpus-2x2x2-v1` is now registered:
the same geometry as the Featured pilot standard, twelve cross-source pairs, Full Corpus
lineage.

**Lineage leak — M010.** `m010`, a `benchmark`-collection Full Corpus family, declared
`featured-core-2x2x2-v1`. Nothing structural caught it, because the shapes are identical; the
profile name is the only thing tying a record to a construction lineage, and it pointed at the
wrong corpus. Under the separate-manifest gate that record would have carried Featured pilot
lineage into the Full Corpus manifest.

Fixed rather than worked around: profiles now declare `lineage`, the registry maps each
lineage-bound collection to one lineage, and the validator rejects a record whose collection
and profile disagree. Self-test probes 12 and 13 demonstrate both halves — a profile with no
lineage, and a Full Corpus record carrying a Featured profile — so broadening the corpus
cannot silently drop the guard. `m010` was re-declared to `full-corpus-2x2x2-v1` and rehashed:

| record | new content hash |
|---|---|
| `m010-…-concise-v1` | `sha256:0ccf4d98e3cb2588e3b81af08c16ac74332893f4eca0c4c7ce94b1a845890ea6` |
| `m010-…-detailed-v1` | `sha256:2823cf13afb763110dd6318e6bf226b45e430dbaf079f858f340ec99fcfce318` |

Both were `draft` / `internal-development`, so nothing frozen or released was re-hashed. The
Featured substantive digest is unchanged at `6bfb77d1…`, which is the check that the fix did
not reach across the boundary it was added to defend. 48 records valid, 20/20 self-test guards,
dossier sync 180 comparisons.

The re-declaration is flagged rather than assumed: it follows from the adopted separate-manifest
gate, not from a judgment of mine about M010's content. Its candidate set, scenario and review
status are untouched.

---

## Legacy Full Corpus labelling under the four-basis taxonomy (2026-08-28)

`policy_basis` is required on every `benchmark` candidate, which made the four already-transcribed
families — M002, M004, M005, M010, 42 candidates across 8 draft records — invalid until labelled.
Labels assigned, and the basis for each:

| layer | n | label | why |
|---|---|---|---|
| framework | 12 | `framework-derived-policy` | rule, not judgment |
| expert | 6 | `direct-policy-evidence` | each summary names guidance or regulation addressing the represented action: WHO QualityRights, AMA 2.1.2, AAP/SAHM/ACOG, AMA/ASCO, AHRQ, 45 C.F.R. § 92.201(e)(2)(ii) |
| public | 7 | `source-informed-policy-inference` | **conservative default — see below** |

**The seven public candidates need the author's ruling.** Their own provenance summaries describe
a translation step, in the authors' words: M004 `pub2` is "an inferred policy family from
parent-attitude evidence"; M010 `pub1` says "translating that preference into an institutional
permission rule is a Bench construction; the sources do not themselves establish this exact
safeguard threshold"; M010 `pub2` calls its policy sentence "an editorial translation of that
affected-public orientation"; M004 `pub1` is "an affected-public policy translation of adolescent
attitudes"; M005 `pub1` says "this is a Bench policy translation". M002 `pub1` and M005 `pub2` are
the closest to direct and still read as orientation-to-policy translation.

I labelled all seven as inference because the two errors are not symmetric. Calling inference
direct is the false attribution the taxonomy exists to prevent; calling direct evidence inference
understates grounding and attributes nothing to anyone. Where the corpus author judges that a
source addresses the represented action itself, promoting a candidate to `direct-policy-evidence`
is a one-word change plus a rehash.

**This does not demote the strict 17.** The strict gate asked whether evidence concerned the
*action* — action-target alignment — not whether the policy sentence was quoted or authored. A
candidate can be action-aligned and still be a Bench translation into policy text. But it does mean
the direct-grounding subset is direct at the expert and framework layers, and translated at the
public layer, in all four transcribed families. That is worth stating plainly wherever the subset
is described, rather than leaving "direct-grounding" to be read as quotation.

All four families are `draft` / `internal-development`; the eight records were rehashed. Featured
v1 is untouched and its substantive digest is unchanged at `6bfb77d1…`.

---

## What review involved

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
