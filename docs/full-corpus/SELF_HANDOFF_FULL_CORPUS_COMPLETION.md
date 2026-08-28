# Bioethics Bench Full Corpus v1 — self-handoff / continuation state

**Last updated:** 2026-08-28  
**Primary working branch:** `author/full-corpus-completion`  
**Target/base:** `research/full-corpus-v1`  
**Purpose:** durable continuation record for a new ChatGPT thread or collaborator. This file should be updated whenever the completion state materially changes.

## 1. Program objective

Finish Bioethics Bench v1 as a **200-family source-first research corpus plus a defensible natural-ecology executable subset**, without forcing every researched family into an executable candidate matrix. The executable resource feeds SACRE automated evaluation, application screenshots, reports/exports, and the evidence layer for P1/P2. Confirmatory repeated-model/human validation belongs later in P3 and is not authorized merely by completing this corpus.

## 2. Governing construction rules

1. **All 200 families are assessed; not all must execute.** Research completeness and executable eligibility are separate.
2. **Natural candidate ecology.** Candidate pools are not forced to 2×2×2. A singleton Public, Expert, or Framework pool is legitimate when serious evidence converges on one action-distinct policy. A singleton must be the result of a competing-policy search, not stopping after the first source.
3. **Every represented pool must contain at least one defensible candidate.** Weak or quota-filling candidates are not added.
4. **Four-basis taxonomy is authoritative:**
   - `direct-policy-evidence`
   - `source-informed-policy-inference`
   - `framework-derived-policy`
   - `synthetic-author-constructed-policy`
5. **Source pool and policy basis are separate dimensions.** A Public candidate may be a transparent source-informed policy inference from affected-community preferences without being falsely described as direct institutional-policy evidence.
6. **Action distinctness.** Multiple rationales that produce the same action in the fixed scenario are one candidate, not several.
7. **Scenario/action divergence.** A case is executable only when the fixed fact pattern lies where at least two represented policies actually produce different actions.
8. **Only cross-source QCCS comparisons:** Public×Expert, Public×Framework, Expert×Framework. For pool sizes `a,b,c`, pair count is `ab + ac + bc`.
9. **Mean is required whenever candidate partner counts differ.** Sum is permitted only when every candidate has the same number of cross-source partners.
10. **Incomplete required matrices do not rank.** Measured cells may remain diagnostic, but there is no provisional Final Policy from a partial required matrix.
11. **Stable candidate IDs and truthful provenance are required.** Requested and actual execution provenance must remain distinct in SACRE runs.
12. `decision_question` is case-construction metadata, not a SACRE scoring primitive.

## 3. Corpus state at this handoff

- Deep research dossiers: **200/200 M001–M200 complete**.
- Previous reconstruction tranche: merged into `research/full-corpus-v1` via PR #9, merge commit `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`.
- Completion working branch: `author/full-corpus-completion`.
- Local completion candidate: **106 Full Corpus executable families / 212 concise/detailed JSON records**.
- M001 is represented separately by released Featured F01 and should not be duplicated into the Full Corpus executable manifest merely to raise the count.
- Remaining Full Corpus families: **93 v1-held/non-executable dispositions** rather than forced candidates.
- Four accidental parallel duplicate frame pairs were identified for deletion in favor of their richer/canonical natural records:
  - M041 `m041-publicly-funded-ivf-allocation-*`
  - M042 `m042-nipt-disability-informed-offer-*`
  - M045 `m045-posthumous-reproductive-use-*`
  - M050 `m050-donor-identity-adult-access-*`
- After those deletions the local candidate has exactly two machine records per executable Full Corpus family.

**Important:** the 106-family count is a completion **candidate** until the canonical 212-record tree, provenance normalization, final 200-family ledger/manifest, and official GitHub CI are complete. Do not describe it as a frozen/released v1 artifact before that point.

## 4. Model-assistance provenance

The 75 newly reconstructed families (150 JSON records) were produced with GPT-5.6 Sol assistance from the completed source dossiers under the four-basis/natural-ecology rules. Before freeze, their record provenance must explicitly record model assistance and must not falsely claim human review. Current intended provenance:

- model: `GPT-5.6 Sol`
- role: reconstruction/drafting from completed dossier; candidate ecology and record construction
- `reviewed_by_human: false` until an independent human/editorial review actually occurs

After provenance changes, recompute each record's canonical JCS/SHA-256 `content_hash` with `scripts/hash-case.mjs --write`.

## 5. Partner / SACRE division of labor

### Corpus-author lane (this workstream)

- finish and publish canonical Full Corpus records;
- maintain source fidelity, policy basis, natural geometry, scenario/action divergence, hashes and manifests;
- produce the authoritative 200-family disposition ledger;
- run repository validation and provide an immutable CI-green Bench SHA;
- respond to partner-reported corpus/schema defects.

### Partner / SACRE lane

Partner may continue immediately with:

- harness/app integration;
- variable candidate geometry support;
- Mean aggregation for asymmetric cases;
- complete-matrix/no-ranking guard;
- Compare Runs, explanations, dashboards, reports/exports and screenshot automation;
- the already-agreed 12-family real-Bench **development** tranche.

Partner should **wait for the explicit pinned CI-green completion SHA before launching the full 106-family production evaluation**. They should not rewrite Bench candidate sets in the SACRE repo. Corpus/schema/provenance problems should be reported back to this workstream.

No E1–E4, paid Prolific/human study, or confirmatory validation is authorized by corpus completion.

## 6. SACRE implementation findings that must remain preserved

P2-relevant implementation evidence already established in `xnuxi/sacre-prototype` includes:

- partial required matrix once still produced a winner → fixed to no Final Policy if incomplete;
- Sum creates deterministic shape bias on unequal partner counts → Mean required for asymmetry;
- report-layer fallback once bypassed the aggregation guard → ranking centralized;
- selectable GPT-5 execution once failed because an unsupported temperature was sent → model support is an executable request contract, not a dropdown label;
- requested versus actual sampling/execution provenance must be recorded separately;
- Bench source relation distinguishes as-published, declared-derived/revision, modified-undeclared and no Bench source;
- stable candidate IDs must survive revision/removal so stored score cells cannot migrate to a different candidate.

These are implementation/construction findings, not confirmatory moral-validation results.

## 7. Immediate continuation sequence

Continue in this order unless repository state materially changes:

1. **Keep pushing work; do not accumulate another large local-only tranche.**
2. Land the 150 new completion records canonically under `data/benchmark/` on `author/full-corpus-completion`.
3. Delete the eight weaker duplicate M041/M042/M045/M050 record files listed above.
4. Add explicit GPT-5.6 Sol model-assistance provenance to the 150 newly reconstructed records; do not mark human review complete unless it has actually happened.
5. Recompute canonical record hashes.
6. Run structural validation (`scripts/validate.mjs`) locally; official GitHub `Validate records` is authoritative because a minimal local snapshot may omit Featured dossier-sync inputs.
7. Generate/update an authoritative **M001–M200 completion ledger** with one current v1 disposition per family.
8. Generate the **106-family Full Corpus executable manifest** separately from Featured v1.
9. Remove temporary `.completion/` archive/chunk files once the canonical records are safely committed.
10. Open/update a completion PR against `research/full-corpus-v1` and obtain independent review focused on source-to-policy fidelity, action distinctness, singleton-pool legitimacy, scenario divergence, provenance, companion equivalence, geometry/pair counts, aggregation and hashes.
11. When official CI is green, record the immutable commit SHA in this handoff and send it to the SACRE partner as the **full-corpus production-evaluation pin**.
12. Partner then runs the full executable set and returns run records, matrices, rankings, Compare Runs, selected explanations, screenshots and exports for P2/P1 integration.

## 8. Manuscript state

The organized Drive publication-program folder contains recent pre-results integration drafts:

- P1 v55 — light Bioethics Bench construction/source-grounding integration;
- P2 v39 — substantive real-Bench pre-results integration with bounded result/screenshot placeholders;
- Publication Program v11 — sequencing aligned to real-Bench automation;
- P3 v4 — validation outline aligned to a source-grounded Bench; current automated runs remain development evidence, not confirmatory validation.

Do not broadly rewrite manuscripts while the Bench/harness result layer is moving. After partner handback, update P2 first with actual quantitative/application evidence and screenshots, then make only consequential P1/program/P3 changes.

## 9. Fixed paper regression — do not conflate with Bench

The canonical fixed 3×3×3 paper regression remains separate from Bioethics Bench and generic geometry diagnostics:

- pub1 302, pub2 473, pub3 417
- exp1 383, exp2 445, exp3 389
- fw1 430, fw2 470, fw3 397
- ranking: `pub2 > fw2 > exp2 > fw1 > pub3 > fw3 > exp3 > exp1 > pub1`

Keep distinct:
1. fixed paper regression;
2. generic/synthetic geometry diagnostics;
3. source-grounded Bioethics Bench;
4. later confirmatory experimental subsets.

## 10. Completion definition

Bioethics Bench v1 is author-complete when:

- all 200 families have a current disposition;
- every executable family has one canonical matched concise/detailed pair;
- no accidental duplicate canonical frames remain;
- provenance and content hashes are truthful/current;
- separate Featured and Full Corpus manifests are coherent;
- repository validation is green;
- the completion commit is pinned and independently reviewable;
- this handoff records that SHA and any remaining reviewer-only issues.

Until those conditions are met, use **completion candidate**, not **final/frozen v1**.
