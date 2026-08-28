# Normative Computation Program / Bioethics Bench v1 — project onboarding and self-handoff

**Last updated:** 2026-08-28  
**Primary Bench working branch:** `author/full-corpus-completion`  
**Bench target/base:** `research/full-corpus-v1`  
**Purpose:** durable onboarding + continuation record for a fresh ChatGPT thread, collaborator, or agent. A new worker should read this file before modifying the Bench, SACRE integration, or program manuscripts. Update it whenever the completion state, pinned commits, paper versions, or division of labor materially changes.

---

## 0. Read this first — what the project is

This is one coordinated research program about **doing ethics with AI as a form of normative computation**. The central claim is not that AI replaces ethical judgment. The program asks whether parts of ethical reasoning can be specified, calculated, executed, inspected, revised, and evaluated in a way that remains recognizably **doing ethics**.

The program moves through a sequence:

**normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation.**

The papers divide that sequence deliberately:

- **P1 specifies** the normative-computation problem and procedure.
- **P2 builds and deploys** the infrastructure that makes that procedure executable, inspectable, repeatable, comparable, revisable, and shareable.
- **P3 validates** the resulting computational object and its epistemic/measurement claims.

Bioethics Bench is the source-grounded case resource that makes the transition from illustrative examples to serious executable ethical cases possible. SACRE is the principal normative-computation procedure being instantiated and evaluated. ReflectiveEquilibrium.AI / Alethic-ISM are the implementation/application layer through which SACRE can be run, compared, inspected, iterated, exported, and eventually evaluated at scale.

A useful program ethos is:

> **Doing ethics with AI is best understood simply as doing ethics. It is a field for discovery.**

Do not rewrite the program as “AI ethics automation,” “AI makes moral decisions,” or “the software architecture is itself the general standard.” The point is to make normative reasoning sufficiently explicit and executable that its assumptions, relations, outputs, revisions, and limits become objects of inquiry.

---

## 1. Program architecture and paper boundaries

### P1 — *Doing Ethics with AI*

**Role:** specification / conceptual paper.

P1 develops the normative-computation framework and the movement from:

**Inputs → Operations → Outputs**  
**Conceptual → Calculable → Executable → AI**

Its important objects include SACRE, QCS/QCCS, the bounded highest-coherence claim, and the relationship between normative specification and executable comparison. P1 should explain what the normative procedure is and what follows from making it calculable/executable. It should not become an implementation report or empirical-validation paper.

**Current program role of Bioethics Bench in P1:** evidence that real source-grounded candidate construction creates methodological questions that abstract toy examples hide — especially action-target alignment, policy-basis provenance, natural candidate geometry, singleton source pools, and legitimate non-executability.

### P2 — *Building a Normative Computation Infrastructure: ReflectiveEquilibrium.AI and Alethic-ISM*

**Role:** construction / implementation / deployment paper.

P2 is implementation-led: **here is how normative computation is actually made executable and inspectable.** It should foreground what had to be built and what was learned from building it, not invent a “failure story” merely to create drama.

Important application/infrastructure features include:

- repeated runs on the same and different models;
- Compare Runs and cross-model comparison;
- dashboards and score graphs;
- pairwise explanations;
- RE-Iteration / revision workflows;
- project organization;
- sharing/team workflows;
- reports and exports;
- deployment and scalable reuse;
- provenance and run identity.

P2 contains concrete construction findings from SACRE implementation, including geometry/Mean aggregation, incomplete-matrix behavior, report-layer consistency, provider request contracts, truthful execution provenance, stable candidate IDs, and declared revision vs undeclared drift.

Bioethics Bench gives P2 a real source-grounded evaluation layer rather than relying only on illustrative/synthetic examples. Current automated Bench runs are **development/application evidence**, not confirmatory validation.

### P3 — validation

**Role:** validation / epistemology / measurement / standards / scope.

P3 asks whether and how the computational object should be validated. It is the home for pre-specified repeated-model studies, model-vs-model reliability/sensitivity, human comparison where justified, measurement properties, scope conditions, and claims about what kinds of normative conclusions the procedure can support.

Do **not** turn current SACRE development runs into retrospective confirmatory validation. Do **not** initiate E1–E4, paid Prolific, or human empirical work unless explicitly authorized.

### Additional program document(s)

There is also a broader **Computational Bioethics** chapter/handbook-style piece. It is distinct from P1/P2/P3 and should not absorb their core argumentative jobs.

### Grammatical-role rule

The same artifact may appear across papers, but its **role changes**:

- P1: SACRE is an **object of specification**.
- P2: SACRE is a **case of construction and deployment**.
- P3: SACRE is a **measurement/validation target**.

This is a better anti-redundancy rule than “never repeat content.” Brief inherited-result recaps are fine; paper-management/meta prose inside manuscripts is not.

---

## 2. Authoritative manuscript/program pointers

### Working Drive folder

Organized publication-program folder:

`https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe`

Use the organized subfolders there as the manuscript working set rather than older scattered copies.

Current pre-results integration drafts at this handoff:

- **P1 v55** — light Bioethics Bench source-grounding / construction integration.
- **P2 v39** — substantive real-Bench pre-results integration; includes bounded placeholders for actual run statistics/screenshots.
- **Publication Program v11** — program sequencing aligned to the real-Bench automation path.
- **P3 v4** — Bench-ready validation outline; current automated runs treated as development evidence, not confirmatory validation.

Important historical note: an older `CURRENT — P2` file still contained stale language saying a synthetic study and Prolific study were underway. **P2 v38/v39 supersede that state.** Do not reintroduce that language.

### Recommended manuscript sequence from here

While Bench/harness results are still moving, avoid broad prose rewrites. When the partner returns real full-Bench application evidence:

1. update **P2 first** with actual run statistics, matrices, Compare Runs findings, selected pair explanations, screenshots, exports, and implementation observations;
2. update P1 only where those results materially sharpen the conceptual argument;
3. update the Program document/P3 only where sequencing or validation design actually changes.

Writing style across program documents should be reader-led, flowing, direct and concrete. Avoid abrupt meta sentences, filler, repeated “not X but Y” contrasts, and paper-management prose.

---

## 3. Repository / application pointers

### Bioethics Bench

Repository: `alethicresearch/bioethics-bench`

Important refs:

- primary Full Corpus base: `research/full-corpus-v1`
- current completion branch: `author/full-corpus-completion`
- previous reconstruction PR: **#9**, merged into Full Corpus base
- historical independent-review branch: `claude/normative-computation-research-f6zfep`

The historical Claude reviewer branch ended at the **old strict 17/200 direct-policy boundary**. That boundary is methodologically useful history but is **not the current executability rule** after adoption of the four-basis taxonomy and natural candidate ecology.

### SACRE / application

Repository: `xnuxi/sacre-prototype`

Current partner coordination issue: **#20 — Run real Bioethics Bench tranche and capture paper assets**.

The partner owns the application/harness/execution stream. This Bench workstream owns the corpus. Partner should not silently rewrite Bench candidate sets to make execution easier.

---

## 4. SACRE — what the procedure is

Canonical high-level pipeline:

**Scenario → Policy Candidates → cross-source QCCS → candidate coherence → aggregation → ranking → provisional Final Policy → RE-Iteration**

Candidate source pools are conceptually Public/Affected, Expert/Professional, and Framework/Normative-theory. Source pool is not the same thing as evidentiary policy basis.

### Cross-source comparison rule

Only compare across source pools:

- Public × Expert
- Public × Framework
- Expert × Framework

No within-source comparisons in SACRE v1.

For pool sizes `a,b,c`:

**cross-source pair count = `ab + ac + bc`**

### Natural geometry

There is no general 2×2×2 requirement. Real cases may be 2×1×3, 3×2×3, 1×2×2, etc. Candidate ecology should reflect serious action-distinct source positions, not a desired matrix shape.

### Mean vs Sum

If candidate partner counts differ, official ranking requires **Mean**, not Sum. Sum rewards candidates merely for having more cross-source partners.

Example: in a 2×1×3 field, every QCCS edge could be 50 and Sum would still give different totals because candidates have different numbers of partners. Mean correctly returns 50 for all candidates.

### Incomplete matrices

If a required cross-source pair has not been scored, measured cells may remain diagnostic but **no ranking and no provisional Final Policy** are permitted.

### QCCS v1

QCCS v1 is currently frozen on the `conv+` 0–100 form. Do not casually treat other ranges/scales as QCCS v1.

### `decision_question`

`decision_question` is Bench/case-construction metadata. It is not itself a SACRE scoring primitive.

---

## 5. Bioethics Bench — why it exists and how it is structured

Bioethics Bench is not merely a prompt dataset. It is a **source-grounded research and executable case resource** designed to test whether normative computation can operate on serious policy candidates derived from public/affected evidence, professional guidance, and normative frameworks.

### Two layers

1. **Research corpus:** 200 deeply researched families, M001–M200.
2. **Executable layer:** a defensible subset with matched concise/detailed records and a complete actionable candidate ecology.

Research completeness does not imply executability. A family can be a valuable research result precisely because current evidence or architecture does not support a defensible executable field.

### Featured v1 vs Full Corpus

Featured v1 is a separate released/frozen collection of 20 families / 40 concise+detailed records and has historically used a regularized profile. Full Corpus reconstruction is a different layer with natural geometry.

M001 is already represented by **Featured F01** and should not be duplicated into Full Corpus merely to increase counts.

### Fixed paper regression is separate

Do not confuse the Bench with the fixed paper regression or with generic synthetic geometry diagnostics. Keep distinct:

1. fixed canonical 3×3×3 paper regression;
2. generic/synthetic geometry diagnostics and demonstration examples;
3. source-grounded Bioethics Bench;
4. later confirmatory experimental subsets.

---

## 6. Governing Full Corpus construction rules

1. **All 200 families are assessed; not all must execute.** Research completeness and executable eligibility are separate.
2. **Natural candidate ecology.** Candidate pools are not forced to 2×2×2. A singleton Public, Expert, or Framework pool is legitimate when serious evidence converges on one action-distinct policy. A singleton must be the result of a competing-policy search, not stopping after the first source.
3. **Every represented pool must contain at least one defensible candidate.** Weak or quota-filling candidates are not added.
4. **Four-basis taxonomy is authoritative:**
   - `direct-policy-evidence`
   - `source-informed-policy-inference`
   - `framework-derived-policy`
   - `synthetic-author-constructed-policy`
5. **Source pool and policy basis are separate dimensions.** A Public candidate may be a transparent source-informed policy inference from affected-community preferences without being falsely described as direct institutional-policy evidence.
6. **Action-target alignment remains important.** Evidence must genuinely bear on the represented action or make the inferential bridge transparent. Willingness to use a service is not automatically a policy to establish it; uptake under a default is not endorsement of that default; personal treatment preference is not automatically an institutional recommendation.
7. **Action distinctness.** Multiple rationales that produce the same action in the fixed scenario are one candidate, not several.
8. **Scenario/action divergence.** A case is executable only when the fixed fact pattern lies where at least two represented policies actually produce different actions.
9. **Mean is required whenever candidate partner counts differ.** Sum is permitted only when every candidate has the same number of cross-source partners.
10. **Incomplete required matrices do not rank.**
11. **Stable candidate IDs and truthful provenance are required.** Requested and actual execution provenance must remain distinct in SACRE runs.
12. Do not manufacture a second canonical frame merely because another framing is imaginable. Multiple frames are appropriate only when substantively warranted.

### Historical strict review — how to interpret it

A prior strict direct-grounding review cleared only **17/200 (8.5%)**. That finding is useful because it revealed action-target mismatch and the difference between direct policy evidence and preference/behavior evidence. It must **not** be rewritten as “only 8.5% of bioethics is executable.”

The later four-basis taxonomy was introduced precisely so source-informed policy inference could be represented transparently instead of either falsely labeling it direct evidence or discarding the entire family.

---

## 7. Current corpus state at this handoff

- Deep research dossiers: **200/200 M001–M200 complete**.
- Previous reconstruction tranche: merged into `research/full-corpus-v1` via PR #9, merge commit `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`.
- Completion working branch: `author/full-corpus-completion`.
- Local completion candidate: **106 Full Corpus executable families / 212 concise/detailed JSON records**.
- M001 is represented separately by released Featured F01.
- Remaining Full Corpus families: **93 proposed v1-held/non-executable dispositions** rather than forced candidates.
- Four accidental parallel duplicate frame pairs were identified for deletion in favor of richer/canonical natural records:
  - M041 `m041-publicly-funded-ivf-allocation-*`
  - M042 `m042-nipt-disability-informed-offer-*`
  - M045 `m045-posthumous-reproductive-use-*`
  - M050 `m050-donor-identity-adult-access-*`
- After those deletions, the local completion candidate has exactly two machine records per executable Full Corpus family.

**Important:** the 106-family count is a **completion candidate**, not yet frozen/released v1, until the canonical 212-record tree, final 200-family disposition ledger/manifest, official GitHub CI, and independent review are complete.

### Current publication/push state

Do not assume local completion work is already canonical on the branch just because this handoff exists.

At this update:

- the completion branch is live and this handoff is pushed;
- temporary `.completion/` staging chunks may exist and are not the authoritative corpus;
- the canonical 150 newly reconstructed JSON records still need to be landed under `data/benchmark/` unless a later update to this section says otherwise;
- the eight duplicate weaker records still need canonical deletion unless a later update says otherwise.

Always inspect the current branch before resuming and update this section when those steps complete.

---

## 8. Model-assistance provenance

The 75 newly reconstructed families (150 JSON records) were produced with GPT-5.6 Sol assistance from the completed source dossiers under the four-basis/natural-ecology rules.

Current intended record provenance:

- model: `GPT-5.6 Sol`
- role: reconstruction/drafting from completed dossier; candidate ecology and record construction
- `reviewed_by_human: false` until an independent human/editorial review actually occurs

At the latest local state, explicit model-assistance provenance and refreshed hashes were being applied across all 150 newly reconstructed records. Verify the branch before assuming those updates have been canonically pushed.

After any provenance/content change, recompute each record's canonical JCS/SHA-256 `content_hash` with `scripts/hash-case.mjs --write`.

Never mark records human-reviewed merely because they were discussed in chat or because a model/partner inspected them.

---

## 9. Partner / SACRE division of labor

### Corpus-author lane — this workstream

- finish and publish canonical Full Corpus records;
- maintain source fidelity, policy basis, natural geometry, scenario/action divergence, hashes and manifests;
- produce the authoritative 200-family disposition ledger;
- run repository validation and provide an immutable CI-green Bench SHA;
- obtain/coordinate independent corpus review;
- respond to partner-reported corpus/schema defects.

### Partner / SACRE lane

Partner may continue immediately with:

- harness/app integration;
- variable candidate geometry support;
- Mean aggregation for asymmetric cases;
- complete-matrix/no-ranking guard;
- Compare Runs, explanations, dashboards, reports/exports and screenshot automation;
- the already-agreed 12-family real-Bench **development** tranche.

Partner should **wait for the explicit pinned CI-green completion SHA before launching the full 106-family production evaluation**.

Partner should **not** rewrite Bench candidate sets in the SACRE repo. Corpus/schema/provenance problems should be reported back to this workstream.

No E1–E4, paid Prolific/human study, or confirmatory validation is authorized by corpus completion.

---

## 10. SACRE implementation findings that must remain preserved

P2-relevant implementation evidence already established in `xnuxi/sacre-prototype` includes:

- partial required matrix once still produced a winner → fixed to no Final Policy if incomplete;
- Sum creates deterministic shape bias on unequal partner counts → Mean required for asymmetry;
- report-layer fallback once bypassed the aggregation guard → ranking centralized;
- selectable GPT-5 execution once failed because an unsupported temperature was sent → model support is an executable request contract, not a dropdown label;
- requested versus actual sampling/execution provenance must be recorded separately;
- Bench source relation distinguishes as-published, declared-derived/revision, modified-undeclared and no Bench source;
- stable candidate IDs must survive revision/removal so stored score cells cannot migrate to a different candidate;
- legitimate RE-Iteration should be recorded as declared derivation, not falsely flagged as drift.

These are implementation/construction findings, not confirmatory moral-validation results.

### E0 development calibration

Historical E0 development calibration used F11 concise+detailed, GPT-5.6 Sol, app request path:

- 24/24 required comparisons complete;
- 12/12 each representation;
- pub1 leader in both;
- 8/12 pair scores differed between concise and detailed;
- 11,324 input / 3,546 output tokens;
- median latency about 3.1 seconds;
- actual temperature null/default, with requested 0.3 recorded separately.

This is development evidence only. Do not describe it as moral validity or representation-sensitivity validation.

---

## 11. Immediate continuation sequence

Continue in this order unless repository state materially changes:

1. **Read this file and inspect current branch/PR/partner issue before doing anything.** Do not rely on stale chat-state counts.
2. **Keep pushing work; do not accumulate another large local-only tranche.**
3. Land the 150 new completion records canonically under `data/benchmark/` on `author/full-corpus-completion`.
4. Delete the eight weaker duplicate M041/M042/M045/M050 record files listed above.
5. Verify explicit GPT-5.6 Sol model-assistance provenance on all newly reconstructed records and truthful `reviewed_by_human` state.
6. Recompute canonical record hashes after any change.
7. Run structural validation. Official GitHub `Validate records` is authoritative if a local/minimal snapshot lacks repository dossier-sync inputs.
8. Generate/update an authoritative **M001–M200 completion ledger** with one current v1 disposition per family.
9. Generate the **106-family Full Corpus executable manifest** separately from Featured v1.
10. Remove temporary `.completion/` archive/chunk files once canonical records are safely committed.
11. Open/update a completion PR against `research/full-corpus-v1` and obtain independent review focused on source-to-policy fidelity, action distinctness, singleton-pool legitimacy, scenario divergence, provenance, companion equivalence, geometry/pair counts, aggregation and hashes.
12. When official CI is green, record the immutable commit SHA in this handoff and send it to the SACRE partner as the **full-corpus production-evaluation pin**.
13. Partner then runs the full executable set and returns run records, matrices, rankings, Compare Runs, selected explanations, screenshots and exports for P2/P1 integration.
14. Update P2 first with the real execution evidence; then make only consequential changes elsewhere.

---

## 12. Fixed paper regression — do not conflate with Bench

Canonical fixed 3×3×3 paper regression:

- pub1 302, pub2 473, pub3 417
- exp1 383, exp2 445, exp3 389
- fw1 430, fw2 470, fw3 397
- ranking: `pub2 > fw2 > exp2 > fw1 > pub3 > fw3 > exp3 > exp1 > pub1`

This is a paper regression/illustrative anchor, not a Bioethics Bench case and not evidence that real cases should be 3×3×3.

---

## 13. Common failure modes / do-not-do list

A fresh worker must avoid the following regressions:

- Do not revive **17/200** as the current executability boundary.
- Do not force every family to execute.
- Do not force 2×2×2 or any fixed candidate quota.
- Do not interpret one policy candidate as “only one source was found”; a candidate can synthesize multiple convergent sources.
- Do not create multiple candidates merely because several sources/rationales support the same action.
- Do not label preference/uptake evidence `direct-policy-evidence` when the candidate is an inference.
- Do not let Sum rank asymmetric natural geometries.
- Do not rank incomplete matrices.
- Do not renumber candidate identities in a way that lets old score cells migrate.
- Do not let reports/exports use different ranking logic from the app.
- Do not claim requested execution parameters were actually used when a provider omitted/rejected them.
- Do not treat current automated Bench runs as P3 validation.
- Do not authorize paid human/Prolific studies without explicit instruction.
- Do not let the SACRE partner silently rewrite Bench records.
- Do not replace mature P1/P2 prose with generic smoothing; preserve good authored language and paper boundaries.
- Do not conflate Featured, Full Corpus, fixed regression, synthetic diagnostics, and later experimental subsets.

---

## 14. Completion definition

Bioethics Bench v1 is author-complete when:

- all 200 families have a current disposition;
- every executable family has one canonical matched concise/detailed pair;
- no accidental duplicate canonical frames remain;
- provenance and content hashes are truthful/current;
- separate Featured and Full Corpus manifests are coherent;
- repository validation is green;
- the completion commit is pinned and independently reviewable;
- this handoff records that SHA, current PR/reviewer state, and any remaining reviewer-only issues.

Until those conditions are met, use **completion candidate**, not **final/frozen v1**.

When completion is reached, update Sections 7 and 11 with the pinned SHA and replace the remaining-work sequence with the partner full-run handoff and manuscript integration sequence.
