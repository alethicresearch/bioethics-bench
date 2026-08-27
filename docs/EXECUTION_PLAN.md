# Automated execution plan — Bioethics Bench

**Status:** proposal for research-reviewer approval. Nothing here has been run.
**Scope:** how Bench records get executed through SACRE at corpus scale, reproducibly, with results that can be cited and re-derived.

This is not a plan to build an execution engine. Most of it exists. It is a plan to close one seam, add five guards, and phase the spend.

---

# 1. What already exists

| Piece | Where | State |
|---|---|---|
| Frozen protocol | QCCS v1, `conv+` 0–100, SHA-256 `3fbb1a2d…`, vendored into SACRE and hash-pinned | done |
| Frozen corpus | 40 Featured records, JCS+SHA-256 content hashes, generator-checked | done (editorial-review) |
| Run identity | `runSchemaVersion: 2`, protocol id/version/hash, scoring mode, aggregation, model, input fingerprints, record id + representation | done |
| Result schema | `schemas/result.schema.json` — result_id, record identity, protocol identity, pair_scores, ranking, selection_margin, deterministic_verification | done |
| Release manifest | `schemas/manifest.schema.json` — jcs-sha256 fixed, protocol identity, scoring mode | done |
| Deterministic pipeline | `sacre-prototype/scripts/smoke-bench-featured.mjs` — load, enumerate 12 pairs, build run + provenance, aggregate, rank, compare, export | done, 1040 checks |
| Persistence round trip | `scripts/smoke-persistence.mjs` — save, reload, provenance survival, share, cleanup | done, 29 checks |
| Capture path | Node-relayed Chromium against the production origin | proven |

**The pipeline is already written and tested. It has one stubbed function.**

```js
/** A deterministic stand-in for the QCCS fan-out. Not a measurement. */
function stubScore(recordId, key) { … }
```

Everything downstream of that line — pair enumeration, provenance, aggregation, ranking, comparison, export — is exercised over all 20 families today. Automated execution is that stub replaced by a real scored call, plus the guards below.

---

# 2. Architecture

Six layers, each independently testable. The point of the separation is that only one layer costs money.

```
work list  →  scorer  →  executor  →  store  →  verifier  →  reporter
              ↑ the only layer that spends
```

**Work list.** Deterministic enumeration of `(record_id, record_content_hash, model, settings, repetition)`. Every item has a stable key. The list is derived, never hand-maintained, and is printable before any spend.

**Scorer.** One QCCS pair call behind one interface, with three interchangeable implementations: `stub` (free, deterministic — what the smoke test uses today), `live` (a real model through the production `/api/llm`), and `replay` (re-serve a stored raw response). `replay` is what makes a result set re-derivable without re-spending.

**Executor.** Takes a work item to a `result` object conforming to `result.schema.json`. Uses SACRE's own `promptConvergenceTest`/`SYSTEM_CONVERGENCE_TEST` built from the vendored spec, so what the harness sends is what the application sends.

**Store.** Result files plus a run manifest. Content-addressed, append-only, resumable.

**Verifier.** Recomputes the aggregation from stored `pair_scores` and compares against the recorded ranking. Fills `deterministic_verification`. Costs nothing and catches any drift between what was scored and what was reported.

**Reporter.** The analyses. Also costs nothing — see §6.

---

# 3. Five guards

These are the failure modes that would silently corrupt a corpus-scale result set. Each is a defect that produces plausible-looking output, which is why each needs a guard rather than care.

### G1 — An incomplete matrix must not produce a Final Policy

**This is a live defect, not a hypothetical.** `computeRankings` skips a missing cell:

```js
const data = convergenceData[`${pol.id}-${other.id}`] || convergenceData[`${other.id}-${pol.id}`];
if (data && data.score !== null) { total += …; partnerCount += 1; }
```

Under the default `sum` aggregation, a candidate whose pair failed sums over fewer partners, so **a failed call systematically lowers that candidate's score** — and the ranking, the Final Policy and the selection margin all come out looking complete. One dropped call in 480 silently changes a result and nothing reports it.

Demonstrated, with all twelve cells at the same score so nothing else can explain the change:

```
complete  ranking: pub1:280 pub2:280 exp1:280 exp2:280 fw1:280 fw2:280   final: pub1
11/12     ranking: pub2:280 exp2:280 fw1:280 fw2:280 pub1:210 exp1:210   final: pub2
cells scored: 11 — reported as incomplete anywhere? false
```

**Half of this is now fixed.** `buildStep5Aggregation` returns a `coverage` block — `expectedPairCount`, `scoredPairCount`, `complete`, `missingPairs` — with an errored cell counted as unscored rather than as a score. The change is purely additive: no ranking moves, nothing that worked stops working, but a partial matrix now declares itself instead of passing as complete.

**The other half is a research decision, not mine.** Should a partial matrix be permitted to report a ranking and a provisional Final Policy at all, with its incompleteness noted — or should it refuse? Refusing changes behaviour for runs that currently produce output, so it is escalated rather than applied.

### G2 — Failures are preserved, not retried into success

Governance principle 4: *preserve failed executions and deviations in research results rather than silently repairing them.* The run schema already has `research.failures.attemptCount` and `failedAttempts`, currently unfilled.

A retry is a new attempt recorded on the result, never an erasure of the previous one. Transport failure, a model refusal, and an unparseable score are three different things and are recorded as three different things. Retries are capped and counted.

### G3 — No silent protocol or corpus mixing

Every result carries `record_content_hash`, `qccs_protocol_hash`, `scoring_mode` and `run_schema_version`. Resume refuses to add items to a run whose corpus hash or protocol hash differs from the manifest's — that is a new run, not a continuation. This is the same rule that already governs `compareRuns`, applied to the store.

### G4 — Prompt identity is recorded

`research.promptSet.userPromptHashes` exists and is currently empty. The harness fills it, so a later reader can establish which text was sent rather than only which specification was pinned. A vendored spec proves the instruction; the prompt hash proves the request.

### G5 — Development runs are never validation

Featured records are `exposure: public` and can never become the confirmatory holdout. Everything this pipeline produces is **development evidence**: manifests carry `release_status: development`, no result is written back into a case record, and the word "validation" does not appear in any generated artifact. P3 needs a separate, unseen corpus; this pipeline is the machinery P3 will reuse, not P3 itself.

---

# 4. Result identity and storage — open governance question

Results are not records and must not live in `data/`. The schemas already imply the shape; what needs a decision is exposure.

Proposed layout:

```
results/
  <run_id>/
    manifest.json                     ← manifest.schema.json, release_status: development
    <record_id>--<model>--<n>.json    ← result.schema.json
    raw/<result_id>.jsonl             ← raw model responses, for replay
```

**Three questions for the reviewer, none of which I should decide:**

1. **Do result files get committed to this repository at all**, or only manifests plus hashes, with the results held elsewhere? Committing them starts a public results corpus with its own versioning and exposure rules.
2. **Do raw model responses get committed?** They make replay and audit possible; they are also verbose and carry model-identifying text.
3. **What is a result's release status** as it moves from development toward anything citable, and what gate does it pass?

Until these are answered, results stay local and only the manifest and hashes get reported.

---

# 5. Phases, gates and spend

One representation = **12 QCCS calls**. One family in both representations = **24**.

| Phase | Scope | Calls | Gate to proceed |
|---|---|---|---|
| **P0 — calibration** | 1 family, both representations, 1 model | **24** | A complete 12/12 matrix, provenance intact, verifier clean, measured cost and latency per call reported |
| **P1 — figures** | diverse subset, 7 families × 2 | **168** | Paper and tutorial figures captured; reviewer sees real output before the corpus is committed to |
| **P2 — reference pass** | all 20 × 2, 1 model | **480** total, 312 new after P1 | The reference result set at one model |
| **P3 — stability** | 2 further repetitions of the corpus | **+960** | Repetition and stability analysis |
| **P4 — cross-model** | 2 further models × corpus | **+960** | Cross-model comparison |
| RE-Iteration demo | F11, the designated case | **~40–60** | Revision Ψ, fidelity QCS, diagnostic QCCS, then a fresh full run |

**Full programme ≈ 2,400 calls.** Each phase is gated on the previous returning clean *and* an explicit go. P0 exists specifically so the cost estimate stops being a guess: I report measured tokens and cost per call before anything larger is authorised.

Every phase is resumable and idempotent. P1's results are reused by P2 rather than re-run, because the work-item key is identical.

---

# 6. What the pipeline buys for nothing

Because `pair_scores` are stored per result, several of the investigations the Bench advertises need **zero additional model calls**:

- **Aggregation sensitivity** — Sum against Mean, weighted variants, any declared procedure: recomputed from stored scores.
- **Re-ranking and selection margin** — likewise.
- **Representation robustness** — concise against detailed is already a property of the corpus and of the stored results.
- **Deterministic verification** — recompute and compare; this is how a result proves it reports what it scored.

Only repetition, cross-model comparison, perturbation of new records, and RE-Iteration require fresh calls. Worth knowing before authorising spend: a large part of the analysis programme is free once one pass exists.

---

# 7. What this pipeline does not do

- **Human comparison.** That is the fielding/panel track, needs a paid study, and is out of scope. Model agreement and human agreement stay conceptually separate (governance principle 5).
- **P3 confirmatory validation.** Featured is public and permanently exposed. P3 needs an unseen corpus.
- **Anything about moral truth.** A provisional Final Policy is the highest-ranked represented candidate under a declared aggregation. Every figure will say so.

---

# 8. To start

1. **Decide the second half of G1** — a partial matrix now reports its coverage; should it also refuse to name a Final Policy?
2. **Answer §4** — or defer it and I keep results local.
3. **Authorise P0**: one family, both representations, 24 calls, one model.

Credentials needed for P0: a session token for the executing account, and either a model API key (unmetered pass-through) or reliance on included usage, which is capped per model. The session is revoked on exit; the key is yours to rotate.
