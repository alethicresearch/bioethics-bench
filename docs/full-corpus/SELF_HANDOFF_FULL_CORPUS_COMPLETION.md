# Bioethics Bench Full Corpus — Self-Handoff

**Last updated: 2026-08-30.** This is the durable onboarding record for a fresh thread, collaborator, or agent working on the Full Corpus. It replaces earlier rescue/completion narratives and branch-era instructions.

For the wider DEWA program, first read:

`xnuxi/sacre-prototype` → `docs/CENTRAL_COORDINATOR_CONTINUITY.md`

Then read this repo's:

- `docs/CENTRAL_COORDINATOR_CONTINUITY.md`
- `docs/PROGRAM_COORDINATION.md`
- `docs/COORDINATOR_DIRECTIVE.md`
- `docs/BRANCH_COORDINATION.md`
- `docs/COMPLETION.md`
- `docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`
- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`

## 1. Project identity

Bioethics Bench is a **source-grounded research infrastructure for computational bioethics** within **Doing Ethics with AI (DEWA)**.

The core DEWA sequence is:

**P1 specifies → P2 builds → P3 computationally validates → P4 empirically/comparatively validates → P5+ deploys and studies use.**

Bioethics Bench is a parallel major research object/publication. SACRE/QCCS is its first mature task family, not the definition of the resource.

Use the three-layer model:

```text
RESOURCE
cases • decision questions • candidate positions • sources/provenance • stipulations • representations • versioning
   ↓
TASK
sacre-qccs-v1 first • future scientifically motivated computational-bioethics tasks
   ↓
EVALUATION
models • humans • ensembles • hybrids • repetitions • perturbations • providers/configurations
```

## 2. Current verified Full Corpus state

- **34 executable families**
- **68 matched concise/detailed records**
- **210 unique family-level candidates**
- all 200 researched families have dispositions
- current records remain `status: draft`
- current records remain `reviewed_by_human: false`

Generated corpus/review state, not historical prose counts, governs current truth.

## 3. Canonical v1 method boundary

Current SACRE v1 uses Public, Expert, and Framework source roles. Natural candidate geometry is permitted. A source pool may legitimately contain one candidate where the source field supports one action-distinct position.

All unordered cross-source pairs are measured. Complete required matrices are necessary before official rankings/provisional Final Policy. When partner counts differ across candidates, Mean aggregation is required to remove geometry-induced score-magnitude bias.

Do not silently relax canonical v1 semantics merely to increase executable n.

## 4. Source grounding and review state

Source pool and evidentiary policy basis are separate dimensions. Current policy-basis vocabulary includes:

- `direct-policy-evidence`
- `source-informed-policy-inference`
- `framework-derived-policy`
- `synthetic-author-constructed-policy`

Structural validation is not source fidelity. Current source checks remain model-assisted rather than independent human review.

Whole-document omission review has examined five families by that method. **Twenty-nine families remain unexamined.** Do not infer a corpus-wide rate and do not describe unexamined families as cleared.

For live review work use:

1. `docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`
2. generated `docs/full-corpus/review/RESEARCH_HANDOFF.md`
3. `docs/full-corpus/review/research-tasks/README.md`
4. the verdict-ingestion tooling described there

Do **not** manually edit generated `RESEARCH_HANDOFF.md`.

## 5. Human review is not a developmental execution gate

Independent human source-to-policy review remains important for release/quality. It does **not** block developmental or paper-facing computational execution under the current DEWA program decision.

This does not authorize confirmatory P3 execution or P4 human fielding.

## 6. Current downstream developmental evidence

SACRE developmental Full Corpus evidence includes:

- **8 families / 16 records / 216 QCCS calls** in the geometry-stratified tranche;
- selected repeat/stability calibration showing heterogeneous case-level behavior;
- attempted 68-record census, 856 calls planned, halted after 234;
- **20 records complete** as single-execution developmental evidence;
- **48 records incomplete** and therefore non-results.

Do not write SACRE execution outputs into Bench records as though they validated source construction.

## 7. P2/P3/P4 relationships

### P2

P2 v49 main + Supplementary Information are complete for this compositional stage:

- main: https://docs.google.com/document/d/1NF6xZmdr59Thm2KihImGyVmbdX7bxyCl/edit
- supplement: https://docs.google.com/document/d/1DcFnJ4Prv6J0GBrn95KfTkgyNxDwPkcc/edit
- preserved v48 maximal master: https://docs.google.com/document/d/12W2-SHZ1CSdbTfQWO1i0nXcCViVR_AiI/edit

Future Bench work should alter P2 only if new evidence materially changes an existing factual or interpretive claim.

### P3

P3 should receive separately frozen:

1. **resource snapshot**;
2. **task specification**;
3. **evaluation/execution condition**.

P3 owns computational validation, not Bench construction or source validation.

### P4

The same frozen resource objects can support matched human/model studies. Human recruitment, instructions, ethics/IRB, and fielding belong to P4.

## 8. Standalone Bioethics Bench paper

Current Drive plan:
https://docs.google.com/document/d/1QpnkzGwElNP9IKrdz1S_9fC0KVWt2tzM/edit

The standalone paper owns resource construction/release methods, provenance and policy-basis ontology, representation and natural geometry, resource/task/evaluation separation, the verified reference task, source-fidelity limits, governance/versioning, baselines, and extension logic.

## 9. Generalization audit + `sacre-qccs-v1` adapter/equivalence — COMPLETE

The first-pass generalization audit is recorded in:

`docs/strategy/BIOETHICS_BENCH_GENERALIZATION_AUDIT.md`

The first explicit task contract is:

- `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
- `tasks/sacre-qccs-v1/task-contract.json`

The adapter/verifier are:

- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The adapter is **equivalence verified across all 34 families / 68 records**.

Against SACRE's older vendor payload, verification found:

- **0 execution/task-semantic differences**;
- **36/68 stale Bench `content_hash` values**;
- no scenario, candidate ID/text/order, representation, version, profile, geometry, pair-generation, partner-count, or aggregation difference.

This was classified as **provenance-only drift**.

SACRE was then re-vendored/re-pinned to merged Bench `main` commit:

`077b36ff1eb9662e93549b1f4261691960cfa605`

Current SACRE Full Corpus payload SHA-256:

`7bfe149a40494354f22ef4f137ec838bae5ad1e3a887cfe44d6d09f9bbf0399d`

After re-pin:

- adapter projection and SACRE vendor payload are byte-for-byte identical;
- SACRE Full Corpus regression tests pass;
- SACRE equivalence/provenance work is merged at `4ed4b24ab99d7427195a21393474c02700274ee6`.

**Do not restart the task-specification or adapter-equivalence work.** It is complete for this stage.

The result establishes architectural/reproducibility equivalence. It does **not** establish QCCS validity, moral truth, independent human source fidelity, or method-neutrality across multiple mature task families.

## 10. Current next dependencies

1. Continue source/review/release maturation.
2. Define the future **generic candidate/source-role resource model on paper** before changing canonical schema.
3. Mature the standalone Bioethics Bench paper using the verified resource/task boundary.
4. Refine P3 protocol around separately frozen resource/task/evaluation objects.
5. Specify an additional non-SACRE task only when a genuine scientific question warrants it.
6. Preserve canonical v1 as a compatibility lineage until a future versioned architecture change is justified.

## 11. Cross-repository change rule

### Execution-relevant

Candidate IDs/texts, scenario/task meaning, profile/geometry, required aggregation, executable-set changes, or execution-relevant schema.

**Action:** notify SACRE, re-vendor/re-pin/reverify, and rerun affected paper-facing results when the executed object changed.

### Provenance-only

Citations, provenance summaries, source-review metadata, or resulting content-hash drift with unchanged executable projection.

**Action:** refresh provenance/pins as needed; **no automatic semantic model rerun**. The 36-record 2026-08-30 refresh is the reference example.

### Documentation-only

Review docs, coordination prose, audit/writeback material with no executable effect.

**Action:** no product action unless an execution defect is exposed.

## 12. Handoff format

Every substantive handoff states:

**Branch; Merge target; Changed; Verified; Product/paper impact; Evidence status; Writeback status; Cross-repo dependency; Next dependency.**

End with **COMPLETE FOR THIS STAGE** or **BLOCKED** with one concrete blocking condition.

## 13. Claims that remain out of bounds

- The corpus is independently human-reviewed.
- Structural validation establishes source fidelity.
- The whole-document-reviewed subset establishes a corpus-wide finding rate.
- Task equivalence establishes QCCS reliability, validity, or moral correctness.
- Developmental SACRE execution is confirmatory P3 validation.
- One-run developmental results establish model ranking.
- Bioethics Bench has demonstrated method-neutrality across multiple mature computational-bioethics tasks.
- Human-model correspondence has been established.

Fetch live generated state before reusing any count or hash from this handoff.
