# P2 v39 → v40 — edits to apply

**Why this is an edit sheet rather than a new file:** P2 v39 is 25.7 MB, above the Drive download
limit available to this session, so I could not open the document itself. Regenerating it from
extracted text would have destroyed every figure and all styling, which is not a trade worth making
for six edits. Each edit below gives the exact existing sentence to find and the exact text to
replace it with. Nothing else in the paper changes.

Six edits, all placed where the argument already runs. No new sections, no new headings.
Net change is roughly +330 words on 11,777.

---

## Edit 1 — §I, the development-failures paragraph

The paragraph beginning *"Development exposed failures with philosophical consequence."*

**Find** (the final sentence of that paragraph):

> Construction made each choice and failure observable enough to revise or test.

**Replace with:**

> Corpus work later added a boundary of a different kind: a validator can confirm that a record is
> well formed, hash-stable and structurally complete without being able to see whether its
> candidates are grounded in the sources they cite. Construction made each choice and failure
> observable enough to revise or test.

---

## Edit 2 — §VIII, opening paragraph, counts

**Find:**

> At the pre-results checkpoint reported here, 35 families have been reconstructed as
> machine-readable executable concise/detailed pairs, yielding 70 Full Corpus records; together with
> the 40 Featured records, the repository validator passes a 110-record state.

**Replace with:**

> At the checkpoint reported here, 34 families have been reconstructed as machine-readable executable
> concise/detailed pairs, yielding 68 Full Corpus records; together with the 40 Featured records and
> the release manifest, the repository validator passes a 109-record state. All 200 families now
> carry an explicit recorded disposition, so the executable count is the outcome of that assessment
> rather than a target set in advance.

---

## Edit 3 — §VIII, new paragraph after the action-target paragraph

Insert as a new paragraph immediately after the paragraph ending *"...framework-derived policy, and
synthetic or author-constructed policy at the candidate level."*

> The reconstruction also showed how far a validator can be trusted. An interrupted transport left
> part of the corpus unrecoverable, and the quickest way to restore the missing families would have
> been to generate their records from the dossiers describing them. Sixteen such records were
> drafted. An audit against the underlying sources found that fourteen rested on evidence that did
> not bear on the action they represented, and that all sixteen passed every automated check the
> repository had: schema, content hash, companion equivalence, declared profile, and cross-source
> pair count. One defect was catchable because it was structural, three records containing
> candidates whose text was identical across different source pools, which makes a cross-source
> comparison compare a candidate with itself; a guard now rejects that. The rest were invisible by
> construction, because whether a candidate's cited evidence supports the action it states is a
> question about meaning rather than form. Machine checking secures the conditions under which a
> comparison can be interpreted. It does not establish that the comparison is grounded.

---

## Edit 4 — §VIII, the evaluation-tranche paragraph

**Find** (from "The harness vendors" to the end of that paragraph):

> The harness vendors and pins the Bench objects rather than fetching mutable records at runtime,
> preserves stable candidate identifiers and content hashes, and is required to respect each
> record's declared aggregation contract. Results from that tranche will be inserted here as
> application-level evidence once complete; they are not treated as confirmatory validation simply
> because they were produced automatically.

**Replace with:**

> The harness vendors and pins the Bench objects rather than fetching mutable records at runtime,
> preserves stable candidate identifiers and content hashes, and respects each record's declared
> aggregation contract. That contract is now checked rather than assumed: the corpus declares the
> aggregation its geometry requires, the application derives the same requirement independently from
> the candidate identifiers it will rank, and vendoring fails if the two disagree. The check found a
> disagreement on its first execution. Most records take their aggregation requirement from a named
> profile rather than stating it directly, and the release manifest had been publishing the
> unresolved field, so it reported no requirement for records whose asymmetric shape makes Mean
> mandatory. A consumer reading only the manifest would have aggregated them under Sum. Results from
> an evaluation tranche will be inserted here as application-level evidence once one has been
> executed; they would not be treated as confirmatory validation simply because they were produced
> automatically.

*Note: the sentence earlier in this paragraph beginning "The first automated paper tranche selects
12 families because they collectively exercise..." should read "A first evaluation tranche selects
12 families because..." — the tranche has not been run.*

---

## Edit 5 — §VI, the paragraph following E0

**Find:**

> The current executable Full Corpus tranche contains 35 reconstructed case families represented as
> matched concise/detailed records. A first 12-family evaluation tranche has been pre-specified for
> automated execution through the same application/request path used in E0, spanning symmetric and
> asymmetric natural geometries, direct and source-informed policy bases, and real institutional
> policy contrasts.

**Replace with:**

> The current executable Full Corpus contains 34 reconstructed case families represented as matched
> concise/detailed records across eight distinct candidate geometries. The corpus is vendored,
> pinned, and loadable in the application alongside the Featured collection, and a record's declared
> aggregation is applied when it is loaded rather than left to the default. Twenty-six of the
> thirty-four families have unequal cross-source partner counts, so under the previous default a
> fully scored matrix would have returned no ranking at all. A 12-family evaluation tranche spanning
> symmetric and asymmetric natural geometries, direct and source-informed policy bases, and real
> institutional policy contrasts remains to be executed through the same application/request path
> used in E0.

The two bracketed placeholders and the closing sentence about reliability and construct validity
stay exactly as they are.

---

## Edit 6 — §VIII, the M156 paragraph

**Find** (the sentence ending that thought):

> Preserving this family as architecture-limited exposes a limitation in the representation scheme
> rather than hiding it with a proxy.

**Replace with:**

> Preserving this family as architecture-limited exposes a limitation in the representation scheme
> rather than hiding it with a proxy. The same limit recurs across the families concerned with
> animal and environmental interests, and it leaves those regions of the corpus deliberately empty
> rather than thinly populated.

---

## What was deliberately left out

Material that exists and could have been added, but was not, because it would not earn its place in
this paper:

- Per-family audit outcomes for the fifteen families audited against sources. These are corpus
  documentation and live in the repository.
- The disposition ledger, dossier-record agreement check, and manifest generators. Infrastructure
  for the corpus, not for the argument P2 makes.
- The domain and geometry distribution of the 34 families. Belongs with P3's scope conditions.
- The fidelity review. It is a model review of partly its own work and should not be cited as
  evidence in a paper.
