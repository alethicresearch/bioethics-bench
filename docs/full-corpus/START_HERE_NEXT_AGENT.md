# START HERE — Bioethics Bench Full Corpus v1 rescue / next-agent handoff

> ## ⚠️ CURRENT STATE — 2026-08-28, later than the rest of this file
>
> **The rescue described below has been carried out. Sections 5–10 are superseded on the
> points listed here. Everything else in this file still stands.**
>
> Work branch: `claude/bioethics-bench-completion-m0p43e`
> CI-green head: **`f2f3cb7c9c57ff606bf7873cec42aac3586f4f8e`** — ordinary `Validate records`
> workflow, run 711, conclusion success.
>
> | Claim below | Actual state |
> |---|---|
> | RC3 archive is the authoritative payload | **Closed.** `.completion/full-corpus-completion-rc3.tar.gz` is truncated — `tar tzf` lists two entries then fails. Its SHA-256 does not match the expected value. All `.completion/` debris is deleted. Do not go looking for it in Drive again. |
> | 106 executable families / 212 records | **Not reconstructible from repository state, and not a target.** The actual executable corpus is **31 families / 62 records**. The 106 figure survived only as prose. |
> | 150 new records still to land | **There are none to land.** They were never committed and cannot be recovered. Growing the corpus is new research, not transport. |
> | 8 duplicate frames to delete | **Done.** |
> | Validator is manual-only | **Restored** to push / pull_request / workflow_dispatch. |
> | M003/M006/M007/M008 records exist | **Withdrawn.** They contradicted their own dossiers and carried candidates byte-identical across source pools. |
>
> **What is now true and machine-checked:**
> - All 200 families carry an explicit disposition; none is undeclared.
> - `scripts/disposition-ledger.mjs` regenerates the ledger from committed state and fails on drift.
> - `scripts/dossier-decision-sync.mjs` keeps each executable dossier in agreement with its record.
> - The validator gained an action-distinctness guard; duplicate candidate text across pools was
>   previously invisible to CI.
> - Every Full Corpus record now declares a registered profile, so its pool ids and pair count are
>   checked rather than passing unchecked.
>
> **What remains, in order:**
> 1. The 8-family RECONCILE queue — dossier judgments that predate the audit producing their
>    record. No new research needed. See `PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md` §4.
> 2. The 8-family candidate audit. **Blocked on source-level research, deliberately.** Every one
>    of those dossiers says its judgment is provisional pending audit, and M022 says outright that
>    no record should be created first. See `PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`.
> 3. Independent review of source-to-policy fidelity across the 31 executable families.
> 4. Only then a pinned SHA for the partner — and it must be described as **31 families, not 106**.
>
> Read `RESCUE_CORRECTION_2026-08-28.md` and `PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md` next.

**Date:** 2026-08-28  
**Purpose:** exact continuation checkpoint for a fresh ChatGPT thread / agent. Read this file first, then read `docs/full-corpus/SELF_HANDOFF_FULL_CORPUS_COMPLETION.md` for the broader project onboarding.

This file is intentionally operational and conservative. It records what is actually finished, what is only a completion candidate, what has and has not been pushed canonically, what temporary transport artifacts should be ignored, and the shortest safe path to finish Bioethics Bench v1.

---

## 1. What this project is

This is one coordinated research program about **doing ethics with AI as normative computation**. The central question is whether parts of ethical reasoning can be made sufficiently explicit to be specified, calculated, executed, inspected, revised, compared, and empirically evaluated while remaining recognizably ethical reasoning rather than merely automated decision output.

Program sequence:

**normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation**

The core artifacts are:

- **SACRE** — the normative-computation procedure.
- **QCCS/QCS** — the cross-candidate coherence/convergence scoring layer.
- **ReflectiveEquilibrium.AI / Alethic-ISM** — executable/application infrastructure.
- **Bioethics Bench** — source-grounded benchmark / case resource.

The program ethos is: **doing ethics with AI is best understood simply as doing ethics; it is a field for discovery.** Do not recast the project as “AI makes moral decisions” or as a claim that the current software architecture is itself a universal ethical standard.

---

## 2. Paper/program boundaries and current manuscript pointers

Organized Drive working folder:

`https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe`

Current drafts produced immediately before the Bench completion push:

- **P1 v55 — Doing Ethics with AI**: specification/conceptual paper; light Bench source-grounding integration.
- **P2 v39 — Building a Normative Computation Infrastructure: ReflectiveEquilibrium.AI and Alethic-ISM**: implementation/deployment paper; substantive real-Bench pre-results integration with explicit placeholders for actual run statistics/screenshots.
- **Publication Program v11**: current program sequencing.
- **P3 v4**: validation paper outline; current automated Bench runs are development evidence, not confirmatory validation.

Paper roles:

- **P1 specifies** the normative procedure and the conceptual → calculable → executable transition.
- **P2 builds/deploys** the infrastructure and reports what implementation makes visible.
- **P3 validates** the computational object, measurement claims, reliability/sensitivity, scope, and later human/model comparison.

Do **not** restart broad manuscript polishing while the Bench/harness results are moving. When the partner returns real Bench results, update **P2 first**, then P1 only where results materially sharpen the conceptual argument.

Do **not** initiate E1–E4, paid Prolific, or human confirmatory work unless the user explicitly authorizes it.

---

## 3. Repositories and live coordination

### Bioethics Bench

Repository: `alethicresearch/bioethics-bench`

Important refs:

- Base: `research/full-corpus-v1`
- Current completion branch: `author/full-corpus-completion`
- Current completion PR: **#10 — Bioethics Bench Full Corpus v1 completion — 106-family candidate**
- Previous reconstruction PR #9 was merged into the base at merge commit:
  `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`

At the time this rescue document was drafted, the live completion branch head immediately before this document commit was:

`2234a7b20307e18f98645e8272444507389cdd22`

Always inspect the live branch head first; this rescue document itself advances the branch.

### SACRE / partner application repo

Repository: `xnuxi/sacre-prototype`

Partner coordination issue: **#20 — Run real Bioethics Bench tranche and capture paper assets**.

**Division of labor:**

- This Bench/corpus lane owns candidate construction, source fidelity, policy-basis labels, natural geometry, scenario/action divergence, provenance, hashes, manifests, CI and the pinned Bench SHA.
- Partner owns harness/app execution, variable geometries, Mean handling, complete-matrix guard, Compare Runs, explanations, reports/exports/screenshots and automated runs.
- Partner should continue harness development and the existing 12-family development tranche.
- Partner should **wait for the explicit CI-green pinned Bench SHA before starting the full 106-family production run**.
- Partner should not silently rewrite Bench candidate sets; corpus defects should be reported back to the Bench lane.

---

## 4. SACRE / Bench methodological invariants

Canonical SACRE pipeline:

**Scenario → Policy Candidates → cross-source QCCS → candidate coherence → aggregation → ranking → provisional Final Policy → RE-Iteration**

Cross-source comparisons only:

- Public × Expert
- Public × Framework
- Expert × Framework

No within-source comparisons.

For pool sizes `a,b,c`, required pair count is:

`ab + ac + bc`

### Natural candidate ecology

There is **no general 2×2×2 rule**. Natural source ecology may yield 1×2×2, 2×1×3, 3×2×3, etc. A singleton pool is legitimate only after an active competing-policy sweep shows substantive convergence. “One” means one **action-distinct policy candidate after synthesis**, not one source document.

### Mean vs Sum

Use **Mean whenever cross-source partner counts differ**. Sum is shape-biased in asymmetric geometries. Sum is acceptable only when every candidate has the same number of cross-source partners.

### Incomplete matrices

If any required cross-source QCCS pair is missing, measured cells may remain diagnostic but there is **no ranking and no provisional Final Policy**.

### Four-basis taxonomy

Authoritative `policy_basis` values:

1. `direct-policy-evidence`
2. `source-informed-policy-inference`
3. `framework-derived-policy`
4. `synthetic-author-constructed-policy`

Source pool and policy basis are separate dimensions. Preferences/attitudes can support a transparently source-informed institutional policy inference; do not falsely label that as direct policy evidence.

### Action alignment

Do not equate:

- willingness to use with a policy to establish;
- uptake under a default with endorsement of the default;
- personal treatment preference with institutional recommendation;
- moral approval with institutional participation;
- parental choice with clinic recommendation.

Candidates must be action-distinct under the **fixed scenario**. Multiple rationales producing the same action are one candidate, not several.

QCCS v1 remains frozen on `conv+` 0–100. `decision_question` is Bench metadata, not a SACRE scoring primitive.

---

## 5. Full Corpus target state already determined

The research layer is complete:

- **200/200 M001–M200 deep research dossiers complete.**

The current v1 completion candidate is:

- **106 Full Corpus executable families**
- **212 matched concise/detailed Full Corpus JSON records**
- **M001 represented separately by Featured F01**, not duplicated into Full Corpus
- **93 families explicitly held/non-executable for v1**, rather than padded with weak candidates

The 106-family number is a **completion candidate**, not yet a frozen/released v1 count. It becomes the v1 corpus only after canonical application, official validator success and independent review.

Four weaker accidental duplicate frame pairs were identified for deletion in favor of the richer/canonical natural pair:

- M041: `m041-publicly-funded-ivf-allocation-*`
- M042: `m042-nipt-disability-informed-offer-*`
- M045: `m045-posthumous-reproductive-use-*`
- M050: `m050-donor-identity-adult-access-*`

That is **8 JSON files to delete**.

---

## 6. CRITICAL: what is and is not currently canonical on GitHub

**The full 212-record completion candidate has NOT yet been canonically applied to the completion branch.**

Do not infer completion from files under `.completion/` or from a few manually pushed records.

What is definitely on GitHub:

- the merged reconstruction base;
- PR #10 and the completion branch;
- the broader self-handoff document;
- this rescue handoff;
- a small number of manually pushed new canonical records from the attempted population sequence (for example M003/M006);
- temporary/incomplete `.completion/` transport artifacts;
- a temporary apply workflow;
- a temporarily modified validator workflow.

What is **not yet safely complete on GitHub**:

- the full corrected set of 150 newly reconstructed records;
- the authoritative final 200-family disposition ledger in canonical form;
- the final 106-family executable manifest in canonical form;
- the 8 duplicate deletions as a completed canonical operation;
- restored ordinary validation + a green final CI run;
- pinned completion SHA.

### Do not trust the temporary chunk files

There are multiple stale/partial transport attempts under `.completion/`, including `full-corpus-candidate.*`, `full-corpus-completion-rc1.*`, `rc3.part-*`, `rc3s4k/*` and trigger files. They are **transport debris**, not source of truth. Some are incomplete or from earlier candidate shapes.

Do not try to infer the final corpus from these partial chunks unless there is absolutely no other recovery route.

---

## 7. Authoritative recovery payload for the unpushed completion tranche

The complete corrected payload was packaged as:

**`bioethics-bench-full-corpus-completion-rc3.tar.gz`**

Connected Google Drive file ID:

`1v9m25o27rtkvbEXNLwluZi-VIcRb85OK`

Expected SHA-256:

`2284aac13658b8e26035583eef6a5fcb010cf674ca09be55509a746631397706`

This RC3 archive is the authoritative rescue artifact for the newly reconstructed tranche at this handoff.

It contains:

- the **150 newly reconstructed JSON records** (75 families × concise/detailed);
- the 200-family completion ledger;
- the 106-family executable manifest;
- a deletion list for the 8 weaker duplicate-frame JSON files.

Use the connected Google Drive integration to retrieve/materialize this file. The failed GitHub Actions attempt does **not** imply the archive was corrupt: the runner downloaded a Google access page rather than the authenticated Drive file, and the checksum gate correctly stopped before any application.

Failed safe apply run:

- GitHub Actions run ID `33188871952`
- Failure occurred at **Download checked completion payload / checksum**
- No canonical files were applied by that run.

There was an earlier RC2 archive in Drive as well. **Use RC3, not RC2.**

---

## 8. Important correction already made in RC3

The first manually pushed new records exposed a real validator requirement: framework-derived candidates cannot have empty provenance-source arrays merely because the policy is normatively derived.

The corrected RC3 payload therefore does the following across all 150 new records:

- keeps `policy_basis: framework-derived-policy` truthful;
- gives each framework-derived candidate explicit provenance-source entries pointing back to the corresponding deep-dossier normative/framework analysis;
- records GPT-5.6 Sol assistance;
- keeps `reviewed_by_human: false`;
- recomputes the canonical content hashes after those provenance changes.

**RC3 supersedes the earlier uncorrected shapes for the newly reconstructed tranche.**

Model-assistance provenance intended across all 150 new records:

- model: `GPT-5.6 Sol`
- role: reconstruction/drafting from the completed dossier under the four-basis natural-ecology rule
- `reviewed_by_human: false`

Never set human review to true merely because another model inspected the file or because the record was discussed in chat.

---

## 9. CI/email-noise state — MUST RESTORE BEFORE FREEZE

The user received many GitHub Actions failure emails because `Validate records` originally ran on every push while records were being populated one at a time.

To stop the email flood, **the validation workflow on `author/full-corpus-completion` was temporarily changed to manual-only**.

Current completion-branch validator is therefore intentionally not the normal repository validator.

Before PR #10 can be considered complete:

1. Apply the full canonical corpus.
2. Remove `.completion/` transport debris.
3. Delete the temporary apply workflow `.github/workflows/apply-full-corpus-completion-rc3.yml`.
4. Restore `.github/workflows/validate.yml` to the normal base-branch version with:
   - `push`
   - `pull_request`
   - `workflow_dispatch`
5. Run the ordinary repository validation and self-test.
6. Require a green result before pinning the Bench SHA.

Do not leave validation manual-only in the merged/frozen corpus.

---

## 10. Shortest safe continuation sequence for the next agent

**Do these in this order. Do not restart the 200-case research sweep. Do not rewrite the candidate sets unless validation/review identifies a substantive defect.**

### A. Inspect live state

1. Read this file.
2. Read `docs/full-corpus/SELF_HANDOFF_FULL_CORPUS_COMPLETION.md`.
3. Inspect PR #10 and current `author/full-corpus-completion` head.
4. Confirm that no later agent has already completed the RC3 canonical apply.

### B. Recover RC3

5. Retrieve `bioethics-bench-full-corpus-completion-rc3.tar.gz` from connected Drive using file ID `1v9m25o27rtkvbEXNLwluZi-VIcRb85OK`.
6. Verify SHA-256 exactly equals:
   `2284aac13658b8e26035583eef6a5fcb010cf674ca09be55509a746631397706`.
7. Inspect archive contents before applying.

### C. Apply canonically

8. Overlay the 150 JSON files onto `data/benchmark/` on `author/full-corpus-completion`.
9. Apply the 8 deletions listed in the archive deletion list.
10. Add/update:
    - `docs/full-corpus/FULL_CORPUS_V1_COMPLETION_LEDGER.md`
    - `releases/full-corpus-v1-completion-candidate/manifest.json`
11. Ensure there are exactly **212 Full Corpus records across 106 executable family numbers**, two matched records per executable family.
12. Ensure M001 remains represented separately by Featured F01 and is not duplicated into the Full Corpus manifest.

### D. Clean temporary transport state

13. Remove `.completion/` entirely.
14. Remove `.github/workflows/apply-full-corpus-completion-rc3.yml`.
15. Restore normal `.github/workflows/validate.yml` from `research/full-corpus-v1`.

### E. Validate

16. Run the ordinary repository validator (`npm run validate`) and self-test through the restored workflow.
17. Fix only genuine validator/substantive failures. Do not alter methodology merely to make CI green.
18. Verify:
    - JSON schema;
    - content hashes;
    - companion equivalence;
    - candidate IDs/source pools;
    - truthful `policy_basis`;
    - source/provenance requirements;
    - pair counts;
    - Mean for asymmetric partner counts;
    - scenario stipulations/divergence;
    - no duplicate canonical frames.

### F. Freeze/handoff

19. Update this rescue document and the broader self-handoff with final counts and green SHA.
20. Update PR #10 from draft to review-ready only when CI is green.
21. Provide the partner an **immutable CI-green Bench commit SHA** in SACRE issue #20.
22. Partner may then launch the full 106-family production evaluation and capture paper-facing application evidence.
23. After partner results return, update **P2 first**; then make only consequential updates to P1/P3/program docs.

---

## 11. What “done” means

Bioethics Bench v1 is author-complete when:

- M001–M200 all have an explicit current disposition;
- 106 executable Full Corpus families (if the completion candidate survives review) have validated concise/detailed records;
- held cases remain explicitly held rather than being silently ignored;
- natural candidate geometry is preserved;
- four-basis provenance is truthful;
- all content hashes and companion invariants pass;
- duplicate frames are removed;
- 200-family ledger and executable manifest agree with the machine corpus;
- temporary transport/CI hacks are removed;
- normal repository CI is restored and green;
- an immutable Bench SHA is handed to the partner;
- independent review can then focus on substantive source-to-policy fidelity rather than repository mechanics.

Do **not** define completion as “make all 200 executable.” The corpus is complete when every family is assessed and every defensible executable family is represented without quota-filling.

---

## 12. Known failure modes to avoid

A fresh agent must not:

- revive the old “17/200 is the executability boundary” conclusion;
- force 2×2×2 geometry;
- treat one source document as sufficient reason for an Expert singleton without a competing-policy sweep;
- convert preferences directly into institutional policies without marking the source-informed inference;
- use Sum on asymmetric fields;
- rank incomplete matrices;
- create a second canonical frame simply because another framing is imaginable;
- confuse Featured v1, Full Corpus, the fixed paper regression and synthetic geometry diagnostics;
- claim current automated runs are confirmatory validation;
- start paid human/Prolific/E1–E4 work without explicit authorization;
- mark model-authored records as human-reviewed;
- use the partial `.completion/` chunk debris as if it were the authoritative corpus;
- leave the validator manual-only after completion.

---

## 13. Communication style / working preference

Drive toward completion rather than repeatedly asking for confirmation. For complex work, make best-effort decisions, push durable checkpoints into the repo, and keep updates focused on substantive milestones rather than low-level transport mechanics.

The repository—not chat memory—should be the durable source of truth. Update this file whenever the live completion state materially changes.
