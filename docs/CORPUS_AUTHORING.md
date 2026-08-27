# Authoring a corpus the checks will accept

**Audience:** anyone building records outside Featured v1 — in particular the full corpus
from the 200-case master inventory.

Everything in this document is *enforced*, not advisory. `npm run validate` runs the
generator check, the dossier/record comparison and the record validator, and a failure is a
build failure. Read this before authoring, not after.

Nothing here is new policy. Every rule below was already applied to Featured v1; what
changed is that the checks now derive their expectations from the record's own declared
profile and collection instead of from the string `featured`, so a second corpus inherits
them rather than passing unchecked.

---

## 1. Declare a registered profile

`benchmark_profile` says what shape a record's candidate set has.
`schemas/benchmark-profiles.json` says what that shape *is*.

**A profile that is not registered fails validation.** This is deliberate and it is the one
behavioural change a corpus author will notice first. Previously an unrecognised profile
meant *no structural checks at all* — the wrong default for a corpus meant to be
reproducible, because the least-checked records would have been the newest ones.

To use a different shape, register it first:

```json
"my-profile-v1": {
  "description": "...",
  "pools": { "public": ["pub1"], "expert": ["exp1"], "framework": ["fw1"] },
  "cross_source_pairs": 3,
  "representations": ["concise", "detailed"]
}
```

The registry then drives, for every record declaring it:

- which candidate ids must exist in which pool (exactly — extra and missing both fail);
- how many cross-source QCCS pairs a complete execution yields;
- which representation forms a case family must have, and the companion contract between
  them.

`cross_source_pairs` is checked against the pools rather than trusted, so a registry entry
cannot quietly misstate execution cost.

## 2. Candidate provenance must be honest

In any *evidential* collection — `featured`, `development`, `stress-test`, `benchmark`;
`tutorial` is exempt because it is never benchmark evidence:

- **no public candidate may be `editorial`.** A public-layer position is a claim about what
  some public actually holds. Writing one ourselves and pooling it with survey-grounded
  positions is the failure mode this check exists to prevent, and it is invisible in the
  rendered record.
- **every candidate and every scenario needs at least one provenance source.** An empty
  `sources` array is not a provenance record.

### Authored completion belongs in the summary

A candidate is often *mostly* what a source supports plus a clause the source does not entail —
a continuity guarantee, a safeguard, a non-abandonment commitment — added so the candidate is an
actionable policy rather than a survey result. That clause is authored, and the record has to say
so.

It goes in `provenance.summary`, prefixed exactly:

> **Bench-authored policy completion:** …

No new schema field, and `construction_method` stays `adapted-from-source`. The alternative — a
`partially-editorial` method — was considered and rejected: `summary` already travels with the
record everywhere it goes, and one more method value would invite a second ontology for what is
really a sentence of disclosure.

This is not machine-checkable. Nothing detects an unmarked completion clause, which is exactly
why it is a rule authors follow rather than a guard that catches them. The test to apply while
writing: *would a reader who went to the cited source find this clause there?* If not, mark it.

Universally, in every collection including `tutorial`:

- **framework candidates must use `derived-from-framework`.** A framework position derived
  any other way is not a framework position.
- **`source_pool` must match the pool the candidate sits in.** These disagreeing means the
  record and its execution disagree about what layer a position belongs to.

## 3. Mark stipulations in the scenario text

A `stipulations` entry is a constructed assumption. Every one must be findable in the
scenario a model actually reads, marked by the phrase **"For this benchmark, assume"**.

A stipulation recorded only in metadata is invisible to the reader and to the model. The
rationale field is required by the schema; the marking is required by the validator.

## 4. Companion representations

Where the profile declares two or more representation forms, all of them are compared
against the first, not merely pairwise between two:

| Must be identical | Must differ |
|---|---|
| `decision_question` (byte-identical) | `scenario` |
| `candidate_pools` (byte-identical) | |
| `stipulations` | |
| `benchmark_profile` | |

Companions must name each other reciprocally in `representation.companion_record_ids`, and
a case family may hold at most one record per form.

**Companions sharing a scenario fail.** Two identical scenarios under two record ids are
one represented object counted twice, and every representation-sensitivity result computed
over them would be measuring nothing.

Incremental commits are fine while records are `draft`. Once *any* representation of a
family is `frozen` or `released`, the complete set must be present.

## 5. Lifecycle and exposure

`draft → editorial-review → reviewed → frozen → released`

- **`confirmatory-holdout` records must never be committed to this repository.** Committing
  one destroys exactly the property it exists to have. This check is universal and has no
  collection exemption.
- **A `released` record must carry an `exposure_history` entry.** Publication is
  irreversible: once public, a record can never serve as confirmatory-holdout material, and
  the record has to say so itself rather than leaving it to be inferred from a git log.
- A `frozen` or `released` record must be covered by a registered dossier source (§6).

Because publication is one-way, decide *before* releasing whether the corpus should hold
records back. A published record cannot be un-published into a holdout.

## 6. Register the editorial home

`docs/dossier-sources.json` maps a collection to where its prose lives:

```json
{ "collection": "featured", "docs_dir": "docs/featured-v1-research",
  "file_pattern": "^F\\d\\d-F\\d\\d", "section_id_pattern": "^## (F\\d\\d)\\b" }
```

`scripts/check-dossier-sync.mjs` then compares dossier against built record for the
decision question, every declared scenario representation and every candidate text — the
comparison is derived from the profile, so it adapts to a different pool shape without code
changes.

**A `frozen` or `released` record in an unregistered collection fails.** Freezing asserts
that the prose was reviewed where reviewers read it; that assertion is only checkable where
the editorial home is registered. Draft and editorial-review work needs no entry.

Dossier sections use bold labels on their own line (`**Decision question**`, then the value
on the following lines), and candidates as `- **pub1:** text`. Representation labels are the
form capitalised: `concise` → `**Concise**`.

## 7. Run the checks

```
npm run validate                  # generator check, dossier sync, record validation
node scripts/validate-selftest.mjs   # proves the guards bite outside `featured`
```

`validate-selftest.mjs` constructs 17 deliberately broken `development` records, one per
guard, and asserts the validator objects to each. If a guard is ever weakened or
accidentally re-narrowed to one collection, that self-test fails rather than the corpus
silently losing a check. **Add a probe when you add a guard.**

---

## What is not checked

Automated checks catch shape, not judgement. None of these is machine-checkable and all of
them were done by hand for Featured v1:

- whether a candidate set is genuinely non-near-entailing;
- whether the policy candidates are matched in granularity;
- whether a cited source actually supports the position attributed to it;
- whether the case is worth including at all.

A green build means the record is well-formed. It does not mean the case is good.
