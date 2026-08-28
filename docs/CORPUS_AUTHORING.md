# Authoring a corpus the checks will accept

**Audience:** anyone building records outside Featured v1 — in particular the full corpus
from the 200-case master inventory.

Everything in this document is *enforced*, not advisory. `npm run validate` runs the
generator check, the dossier/record comparison and the record validator, and a failure is a
build failure. Read this before authoring, not after.

Nothing here changes the released Featured v1 records. Structural checks derive their expectations
from the record's own declared profile and collection so later corpora inherit the same machine-
checkable invariants. The Full Corpus also applies the stricter manual source-to-policy rule in §2;
that later rule is deliberately not retroactive to frozen Featured v1.

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
  "lineage": "full-corpus",
  "pools": { "public": ["pub1"], "expert": ["exp1"], "framework": ["fw1"] },
  "cross_source_pairs": 3,
  "representations": ["concise", "detailed"]
}
```

### Frames: several candidate fields for one family

A well-researched family can support more than one defensible candidate field — the natural source
ecology, a direct-grounding frame, a source-informed frame, a matched `3x3x3` comparison frame.
Each is built as **its own concise/detailed record pair**, not as several frames inside one record:

```
case family m097
  frame  natural           → m097-natural-concise-v1 · m097-natural-detailed-v1
  frame  source-informed   → m097-source-informed-concise-v1 · …-detailed-v1
  frame  matched-3x3x3     → m097-matched-3x3x3-concise-v1 · …-detailed-v1
```

`frame_id` and `frame_version` are declared together or not at all; a framing that cannot be
versioned cannot be cited by a run, and an unnamed version belongs to nothing. Identity is
`case_id + frame_id + frame_version + representation`, and `record_id` is unique corpus-wide
because a run cites a record by it.

The companion contract therefore applies **per frame**. Bucketing on `case_id` alone would read two
frames' concise records as duplicate representations of one case, and would compare candidate pools
that are meant to differ. Within a frame the old rules are unchanged: identical decision question,
identical stipulations, byte-identical candidate pools, different scenarios.

Changing frame is a different represented evaluation, not a filtered view of one. That is why each
frame carries its own candidate set and hashes, and why a run records which frame it executed.

### A registered profile is optional

Under the executable-200 architecture the Bench records whatever candidate ecology its sources
support — `3x2x4`, `3x1x4`, `4x3x4` — so most Full Corpus records will name no profile at all.
Naming one is for canonical, reusable frames (Featured v1, a matched `3x3x3` comparison frame),
not a precondition for being a valid record.

Two checks therefore follow the **record** rather than the registry, so dropping the profile does
not drop the guard:

- **Asymmetry requires Mean.** Any record whose pools give unequal cross-source partner counts
  must declare `required_aggregation: "mean"`, directly or through a profile that requires it.
  Under Sum such a set is ranked partly by pool size: with identical convergence cells, a
  candidate from a smaller pool sums over more partners and wins on shape alone.
- **The companion contract still applies.** Records naming no profile are held to
  `[concise, detailed]`. Previously a profile-less record got no companion checks whatsoever,
  which under natural geometry would have meant no companion checks anywhere.

### Lineage: a profile belongs to one corpus

Featured v1 and the Full Corpus executable subset are built, reviewed and released as
separate manifests. `lineage` is how a profile says which one it serves, and
`collection_lineage` in the same file says which lineage each corpus collection belongs to
(`featured` → `featured`, `benchmark` → `full-corpus`; working collections such as
`development` are unconstrained).

A record whose collection and profile disagree fails. Without that guard the only thing
tying a record to a construction lineage is the profile name, and a Featured-lineage
profile sitting in a Full Corpus record would carry Featured pilot geometry into a manifest
that is supposed to be independent of it. Two shapes can be identical and still belong to
different corpora: `featured-core-2x2x2-v1` and `full-corpus-2x2x2-v1` have the same pools
and the same twelve cross-source pairs, and are not interchangeable.

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

- **no public candidate may be `editorial` unless it declares itself synthetic** (see
  `policy_basis` below). A public-layer position is a claim about what some public actually
  holds. Writing one ourselves and pooling it with survey-grounded positions is the failure mode
  this check exists to prevent, and it is invisible in the rendered record. Declaring the
  candidate an author-constructed comparator removes the false claim, which is why that is the
  one way past this guard.
- **every candidate and every scenario needs at least one provenance source**, again except a
  declared synthetic candidate, whose sources may motivate the case without being claimed as the
  source of the policy. An empty `sources` array is otherwise not a provenance record.

### `policy_basis`: how the policy was obtained

Every candidate in the `benchmark` collection carries exactly one:

| value | the source … |
|---|---|
| `direct-policy-evidence` | addresses substantially the same action the candidate represents |
| `source-informed-policy-inference` | supplies preferences, attitudes, behaviour or concerns, and the Bench draws the step to a policy |
| `framework-derived-policy` | is an identified normative framework, and the candidate is its authored implication |
| `synthetic-author-constructed-policy` | did not supply the policy; it is authored to instantiate a serious action-distinct alternative |

`docs/full-corpus/EXECUTABLE_200_CONSTRUCTION_DECISION.md` is authoritative on what each means.
Three points that trip people up:

- **It is a different axis from `source_pool`.** The pool says which perspective layer a
  candidate is represented in; the basis says the relation between the policy and its evidence.
  A synthetic candidate in a public slot is an author-constructed comparator *for that layer*,
  never evidence that a public holds it.
- **It is a different axis from `construction_method`,** which stays as it is and records textual
  construction mechanics. The usual pairings are in the decision document; they are usual, not
  enforced.
- **It is not a credibility ranking.** A synthetic candidate is not a weaker candidate; it is a
  candidate about which a different thing is being claimed.

What is checked: the enum, its presence on every Full Corpus candidate, that framework-pool
candidates are `framework-derived-policy`, and that a `direct-policy-evidence` candidate cites at
least one source — direct evidence is a claim *about a source*, so the label cannot be true
without one. What is not checked is whether the label is *accurate*. That is the reviewer's first
job, and no guard substitutes for it.

### Full Corpus source-to-policy rule (superseded as a gate)

Until the executable-200 decision, the Full Corpus required that the **core action and decision
axis of each public or expert candidate already be supported by evidence from that source pool** —
authoring could make a supported orientation operational but not create it. Candidates that could
not meet it were not built.

That is no longer an eligibility gate. It is now the definition of one label:
`direct-policy-evidence`. A policy the evidence does not supply may be built, and must then say so
as inference or as construction. The strict rule's real content is preserved, because the thing it
prevented — an authored orientation presented as an empirical finding — is still prevented, now by
disclosure rather than by exclusion.

The 17 families that cleared the strict review remain the direct-grounding subset. Failing that
review is not retroactively described as direct.

A source-grounded candidate may therefore add a narrow implementation clause — for example a
continuity guarantee, safeguard, non-abandonment provision, documentation requirement or defined
review step — when that clause makes an already-supported policy executable without changing what
the source position recommends.

It may **not**:

- convert general approval, concern, preference intensity or treatment-risk tolerance into a new
  institutional policy that the source did not support;
- combine separate empirical value strands into a novel composite rule and then attribute the
  composite to the source pool;
- create an opposing candidate merely because the candidate pool needs another member;
- split nested conditions inside one professional policy into multiple candidates;
- turn philosophical or institutional disagreement into an affected-community position, or vice
  versa.

The practical test is: **if the authored completion were removed, would the source still identify
the same action, direction or policy orientation?** If not, the candidate is too editorial for the
Full Corpus evidential pool.

This rule is stricter than the construction convention used for released Featured v1. Featured v1
allowed declared editorial translation of affected-community evidence into actionable institutional
rules. Those records remain frozen and valid under their released construction standard. Their
executable yield and E0 results must not be presented as though Featured and the Full Corpus used an
identical candidate-construction rule.

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

This prefix is **prospective for Full Corpus authoring**. Frozen Featured v1 candidates that already
describe editorial translation honestly in prose are not rewritten merely to add the new greppable
prefix, because doing so would change released records and hashes without changing their substance.
Collection-level documentation carries the legacy distinction instead.

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

`validate-selftest.mjs` constructs deliberately broken `development` records, one per guard, and
asserts the validator objects to each. If a guard is ever weakened or accidentally re-narrowed to
one collection, that self-test fails rather than the corpus silently losing a check. **Add a probe
when you add a guard.**

---

## What is not checked

Automated checks catch shape, not judgement. None of these is machine-checkable:

- whether a candidate set is genuinely non-near-entailing;
- whether the policy candidates are matched in granularity;
- whether a cited source actually supports the position attributed to it;
- whether a Full Corpus candidate obeys the source-to-policy rule above;
- whether the case is worth including at all.

A green build means the record is well-formed. It does not mean the case is good.
