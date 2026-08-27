# Automated execution plan — Bioethics Bench

**Status:** decided. Sections 3–5 are governing after the research-reviewer decisions of
27 August 2026. **E0 is authorized; E1–E4 are not.**
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

**Decided and implemented.** A partial matrix produces no official ranking and no
provisional Final Policy, under Sum, Mean, weighting or any other aggregation. Noting
coverage while still naming a winner was insufficient — the winner is the part that gets
quoted.

An incomplete execution carries `status: incomplete`, `finalPolicy: null` and empty Step-5
rankings, in the application, the report, the shared view and every export. Measured cells
are preserved; failures keep their type; `expectedPairCount`, `scoredPairCount` and
`missingPairs` are exposed; missing measurements can be retried explicitly, including pairs
that were never attempted; and a retry is recorded as a new attempt rather than erasing the
previous one. Partial totals survive only under a `diagnostic` field that says it is not a
SACRE ranking.

Documented in `SACRE_FLOW.md`: *SACRE identifies a provisional Final Policy only when the
required represented cross-source QCCS matrix for that execution is complete.*

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

# 4. Result identity and storage — decided

Results are not records and do not live in `data/`.

**Development results are not committed to this repository.** They remain local and
content-addressed; manifests and hashes may be reported in review logs; case records stay
independent of model-result data. Raw model responses are preserved locally for replay and
audit and are **not** committed in this phase.

When a citable model-results release is wanted, it is packaged as a **separate versioned
result artifact** — a dedicated results repository, a release asset, a Zenodo artifact or
equivalent — rather than mixing mutable execution output into the case corpus. Whether raw
responses are published is decided then, separately.

**Result lifecycle:** `development → reviewed → frozen → released`. Every executed result
is `development` for now. A result may become `reviewed` only with a complete matrix,
complete protocol/corpus/model/settings identity, recorded prompt hashes, deterministic
recomputation agreeing exactly, failures and retries represented honestly, and human
inspection finding no malformed QCCS response. `frozen` means the result set and manifest
are immutable and hash-addressed. `released` means it is intentionally published as
model-output evidence. **None of these statuses implies moral truth, human agreement, or
validation.**

Local layout:

```
results/
  <run_id>/
    manifest.json                     ← manifest.schema.json, release_status: development
    <record_id>--<model>--<n>.json    ← result.schema.json
    raw/<result_id>.jsonl             ← raw model responses, for replay
```

`results/` is git-ignored in the SACRE repository, so a development run cannot be committed
by accident.

---

# 5. Phases, gates and spend

One representation = **12 QCCS calls**. One family in both representations = **24**.

| Phase | Scope | Calls | Gate to proceed |
|---|---|---|---|
| **E0 — calibration** *(authorized)* | **F11** ventilator triage, both representations, 1 model | **24** | A complete 12/12 matrix, provenance intact, verifier clean, measured cost and latency per call reported. Hard ceiling **US$3**. |
| **E1 — figures** *(not authorized)* | diverse subset, 7 families × 2 | **168** | — |
| **E2 — reference pass** *(not authorized)* | all 20 × 2, 1 model | **480** | — |
| **E3 — stability** *(not authorized)* | 2 further repetitions of the corpus | **+960** | — |
| **E4 — cross-model** *(not authorized)* | 2 further models × corpus | **+960** | — |
| RE-Iteration demo | F11, the designated case | **~40–60** | Revision Ψ, fidelity QCS, diagnostic QCCS, then a fresh full run |

Phases are named **E**, not P: the publication programme already has Papers P1/P2/P3, and
calling an execution stage "P3" would collide with confirmatory validation, which is the
one thing these runs are definitively not.

**Only E0 is authorized.** The ~2,400-call full programme remains useful planning, but
E1–E4 are **not prerequisites for completing Bioethics Bench v1** and belong to the
subsequent P1/P2 manuscript and P3 validation work. Each would need its own explicit
authorization.

E0 exists so the cost estimate stops being a guess: measured tokens, latency and cost per
call are reported before anything larger is proposed. If projected or actual spend would
exceed US$3, execution stops and reports.

Every phase is resumable and idempotent; results are reused rather than re-run, because
the work-item key is identical.

**Reference model (decided).** OpenAI `gpt-5.6-sol`, standard service tier, through the
application's own QCCS prompt path and its actual supported request behaviour — no
research-only prompt. The explicit identifier is used rather than the mutable `gpt-5.6`
alias. Each result records the requested model id, the identifier the provider returns if
it differs, the timestamp, every request parameter actually sent, token usage, cost and
prompt hashes. SACRE's OpenAI path does not set a reasoning-effort parameter, and no
result claims that it did.

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

# 8. Running E0

```
read -rs OPENAI_API_KEY && export OPENAI_API_KEY     # never on the command line
node scripts/execute-bench.mjs --dry-run             # work list + sample prompt, spends nothing
node scripts/execute-bench.mjs                       # 24 calls, stops at US$3
unset OPENAI_API_KEY
```

Preferred credential route: a non-spending SACRE test account plus a model API key supplied
locally through environment or secret handling. Not an admin session for convenience.
Neither credential is requested or transmitted in chat, GitHub, review documents, shell
history or logs, and neither is printed or written into a result. If no authorized key is
present locally, E0 is prepared and stops at the credential boundary rather than asking for
the secret.
