# Drive coordination delta — pending edits

**Why this file exists:** the Bench/execution agent cannot write the body of a Google Doc. The
Drive integration available to it exposes `update_file` for title and parent only, and
`create_file` for new files. It can *read* Drive and it can write both repositories. So the repo
coordination files are the surface it keeps current, and anything Drive needs arrives here for
whoever can edit it — the paper/program agent or the author — to lift across.

Delete an entry once it has been applied to Drive.

---

## Pending as of 2026-08-28, from the Bench/execution lane

### 1. Stale SHAs in `00 — PROJECT COORDINATION — Normative Computation — LIVE`

| Field | Document says | Actual |
|---|---|---|
| SACRE `main` | `1b2a5db` | moved twice since; regenerate rather than copy this |
| Bench PR #10 head | `6e21994` | `5e0a67e` |

Regenerate both at edit time rather than pasting these; they move.

### 2. Coordination milestone 2 is done

"Reconcile the SACRE Full Corpus integration branch with current main" is complete. Main merged
into the integration branch; the two coexist. Verified: 356 unit tests, 73 web tests, 44 Full
Corpus tests, clean build, harness enumerating 216 calls across eight geometries.

**It is still not a current-`main` capability**, because the branch is not merged to `main`. The
open discrepancy the Drive document already records — P2 v40 / Program v12 describing the Full
Corpus as loadable in the deployed application — is therefore not yet resolved. It needs either
that merge or a softening to "integration branch".

### 3. Source-completeness decision has been acted on

Full Corpus v1 remains three-source. The generalized work is preserved and out of v1 on
`claude/generalized-source-architecture-track` in both repositories. The Bench v1 branch is back at
34 families / 68 records with no scheme artefacts; SACRE has the pool-partitioning change reverted.

Worth recording in Drive as a finding rather than a backlog: **8 of the 12 families held by the
candidate audits are held solely because no defensible public pool can be populated** — M022, M036,
M043, M049, M059, M099, M148, M149. That is evidence about the representational boundary of
canonical SACRE v1.

### 4. A Full Corpus development tranche has been run

Author-authorized in session. **Development evidence only.** 8 families one per geometry, 16
executions, 216 QCCS calls, all complete and verified on recomputation, estimated US$0.63. Plus
five-repetition runs on three families and a control varying aggregation mode.

The Drive document currently states that no Full Corpus evaluation has been run. That is no longer
true, and the sentence should be replaced rather than deleted — the distinction between an
authorized development tranche and a confirmatory study is exactly what the evidence-boundaries
section exists to protect.

**Finding that P3 design should carry:** the gap between the top two candidates, relative to
run-to-run spread, predicts whether a Final Policy is reproducible. M004 at a ratio near 2.3 returns
the same Final Policy in all five runs; M094 at 0.03–0.20 returns a different ranking on every run
and up to four different Final Policies. A single run is not a reliable output for a closely
contested case, and single-run concise/detailed differences are not separable from run-to-run
variation. A hypothesis that Sum aggregation caused this was refuted by a control under Mean.

**Consequence for P2's unfilled Full Corpus placeholder:** if it is filled from a tranche, the
figures must carry candidate spread, not a bare Final Policy, for any family whose gap-to-noise
ratio is below about 1.

### 5. Two defects worth recording

`scripts/execute-bench.mjs` declares a spend ceiling, checks it before every call, and never
increments the variable it checks — so E0 ran with no working cap. Fixed in the Full Corpus harness,
still open in E0.

Two validator holes in the Bench repository were found while implementing the generalized proposal.
Both are scheme-only and do not affect three-source v1, but they must be carried into any future
generalized variant, where their absence would be silent: the asymmetry check and the profile pool
comparison each built from the fixed triple, so a non-default pool set would have bypassed the Mean
requirement and the profile comparison entirely.
