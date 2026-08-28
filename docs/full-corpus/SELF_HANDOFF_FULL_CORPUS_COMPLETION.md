# Normative Computation Program / Bioethics Bench v1 — audited completion handoff

**Last updated:** 2026-08-28  
**Primary Bench working branch:** `author/full-corpus-completion-audited`  
**Trusted base:** `research/full-corpus-v1` at `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`  
**Purpose:** durable onboarding and continuation record for a fresh ChatGPT thread, collaborator, or agent. Read this before modifying Bioethics Bench, SACRE integration, or the program papers.

## 1. Program orientation

This is one coordinated research program about **doing ethics with AI as normative computation**. The central project asks whether parts of ethical reasoning can be specified, calculated, executed, inspected, revised, and empirically studied while remaining recognizably doing ethics rather than delegating moral authority to AI.

Program sequence:

**normative concepts → calculable procedure → executable system → inspectable application → source-grounded benchmark → empirical validation**

Paper roles:

- **P1 — Doing Ethics with AI:** conceptual/specification paper. SACRE is the object of specification. Core structure includes Inputs → Operations → Outputs and Conceptual → Calculable → Executable → AI, plus QCS/QCCS and bounded highest-coherence claims.
- **P2 — Building a Normative Computation Infrastructure: ReflectiveEquilibrium.AI and Alethic-ISM:** implementation/deployment paper. SACRE is the case of construction. Important features include repeated runs, cross-model comparison, dashboards, pair explanations, RE-Iteration, projects, sharing/team workflows, reports/exports, provenance, and scalable deployment.
- **P3 — validation:** validation/epistemology/measurement paper. SACRE is the measurement target. Do not reinterpret current development runs as confirmatory validation. Do not initiate paid Prolific/human E1–E4 work without explicit authorization.

Program ethos: **Doing ethics with AI is best understood simply as doing ethics. It is a field for discovery.**

## 2. Manuscript pointers

Organized working Drive folder:
`https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe`

Current aligned drafts created 2026-08-28:
- P1 v55 — Bioethics Bench integration pre-results
- P2 v39 — real-Bench pre-results integration
- Publication Program v11 — Bench/evaluation sequencing alignment
- P3 v4 — Bench-ready pre-results validation outline

Do not broadly rewrite manuscripts while the Bench and automated results are moving. When real application results are available, update P2 first, then make consequential P1/P3/program changes only where justified.

## 3. Repositories and division of labor

Bioethics Bench: `alethicresearch/bioethics-bench`

SACRE/application: `xnuxi/sacre-prototype`

Partner coordination issue: SACRE issue #20.

**Corpus-author lane:** source fidelity, candidate construction, policy-basis labeling, natural geometry, companion equivalence, hashes/manifests, CI, independent review, and the pinned Bench SHA.

**Partner lane:** harness/application, variable geometry, Mean handling, complete-matrix guard, Compare Runs, explanations, dashboards, exports/reports/screenshots, and automated runs. Partner must not silently rewrite Bench candidate sets.

## 4. SACRE invariants

Pipeline:
**Scenario → Policy Candidates → cross-source QCCS → candidate coherence → aggregation → ranking → provisional Final Policy → RE-Iteration**

Only cross-source comparisons:
- Public × Expert
- Public × Framework
- Expert × Framework

No within-source comparisons.

For pool sizes `a,b,c`, required pair count is `ab + ac + bc`.

Natural candidate geometry is authoritative; there is no general 2×2×2 requirement. Legitimate singleton pools are allowed only when a real competing-policy search shows convergence.

Use **Mean** whenever candidate partner counts differ. Incomplete required matrices may be diagnostically displayed but must not rank or produce a provisional Final Policy.

QCCS v1 remains the frozen `conv+` 0–100 form. `decision_question` is case metadata, not a scoring primitive.

## 5. Bioethics Bench architecture

Two layers:
1. **Research corpus:** 200 deeply researched families M001–M200.
2. **Executable layer:** only those families for which source-grounded/action-distinct candidate fields can be defended.

Research completeness does not imply executability. A well-researched case may correctly remain held/non-executable.

Authoritative policy-basis taxonomy:
- `direct-policy-evidence`
- `source-informed-policy-inference`
- `framework-derived-policy`
- `synthetic-author-constructed-policy`

Source pool and policy basis are separate. Source-informed inference is allowed only when the inferential bridge from the source evidence to the represented institutional action is explicit and defensible. It is not a license to turn any attitude/preference result into a policy candidate.

Action-target alignment remains mandatory. Examples of invalid shortcuts:
- willingness to use ≠ policy to establish;
- uptake under default ≠ endorsement of default;
- personal treatment preference ≠ institutional recommendation;
- moral approval ≠ institutional participation;
- parental choice ≠ clinic recommendation.

Candidate multiplicity must reflect action distinction under the fixed scenario, not multiple rationales for the same action.

## 6. Trusted current state

- Deep research dossiers: **200/200 complete**.
- Previous carefully reconstructed tranche merged via PR #9.
- Trusted Full Corpus base: `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`.
- Trusted executable Full Corpus at that base: approximately **35 families / 70 concise+detailed records**.
- Featured v1 remains a separate 20-family / 40-record released layer.

The 35-family base is structurally validated and substantially more carefully constructed than the abandoned bulk expansion, but it should still receive an editorial substantive audit before v1 freeze. Green CI is necessary, not sufficient, for source-policy validity.

## 7. CRITICAL FAILED ATTEMPT — DO NOT REVIVE RC3

A later bulk completion attempt proposed **75 additional families / 150 records**, yielding a claimed 106-family Full Corpus. That candidate was packaged as RC3 and associated with draft PR #10 on `author/full-corpus-completion`.

**That bulk expansion failed substantive audit and is abandoned. Do not merge, execute, cite, or use it as a v1 corpus.**

Audit findings across the 75-family RC3 tranche:
- **65/75** reconstructed families came from deep dossiers that explicitly concluded `needs-additional-evidence`.
- **74/75** contained at least one policy text duplicated verbatim across different source pools.
- **65/75** collapsed to the same `1×1×2` geometry.
- Specific examples exposed unjustified policy translation:
  - **M017** dossier said public evidence showed resistance-preservation concerns but did not support distinct institutional access policies; RC3 nevertheless inferred a Public preauthorization policy identical to the Expert stewardship policy.
  - **M069** dossier explicitly said affected-public policy comparison was limited and `Do not manufacture a non-disclosure alternative`; RC3 nevertheless created a Public `Delay disclosure until investigation is complete` candidate.

These patterns indicate over-aggressive/template-like reconstruction. The error was methodological: natural singleton pools and source-informed inference were treated too permissively, turning an exception mechanism into a way to bypass dossier-level evidence insufficiency.

PR #10 has been explicitly commented **DO NOT MERGE**. SACRE issue #20 has been told not to consume RC3.

## 8. Corrected completion method

Resume from `author/full-corpus-completion-audited`, not from PR #10.

For each remaining family:
1. Read the complete deep dossier and any candidate audit.
2. Treat the dossier's prior `needs-additional-evidence` conclusion as a substantive presumption, not a formatting obstacle.
3. Identify exactly what evidence gap prevented execution.
4. Only reopen the case if one of the following is true:
   - new/current source evidence directly repairs that gap;
   - the four-basis taxonomy permits a **specific, defensible** source-informed inference that was previously excluded solely because it was mislabeled as direct evidence;
   - natural singleton geometry solves only a candidate-count problem **without changing the action-target evidence problem**.
5. Before accepting any singleton Expert pool, actively search competing professional/institutional architectures across societies, jurisdictions, regulators, and serious policy bodies.
6. Before accepting a Public source-informed policy, write the inferential bridge in one sentence and ask: *Would a skeptical reviewer agree that these affected-community data support this institutional action, rather than merely a value or attitude?* If not, hold the case.
7. Ensure the fixed scenario lies in an action-divergence band.
8. Ensure at least two represented policies actually produce different actions in that scenario.
9. Author concise/detailed companions only after the ecology is substantively cleared.
10. Run schema/hash/profile/companion CI after a small reviewed batch, not after a large speculative generation.

### Batch size rule

Do not bulk-generate dozens of cases. Work in **small batches of roughly 3–5 families**, with an explicit substantive checkpoint before the next batch.

### Quality-control red flags

Pause and investigate if:
- most cases in a batch produce identical geometry;
- Public and Expert candidates are repeatedly verbatim identical;
- a dossier marked `needs-additional-evidence` is being recovered without identifying the exact repaired evidence gap;
- one generic policy sentence appears in Public, Expert, and Framework pools;
- source-informed inference is being used to express a policy substantially stronger or more institutionally specific than the source material;
- CI is green but source-to-action fidelity has not been independently checked.

## 9. Immediate continuation sequence

1. Audit the existing ~35 executable Full Corpus families for source-to-policy fidelity, prioritizing the most recently recovered cases.
2. Produce a compact audit table: family, current geometry, Public basis, Expert basis, framework basis, source-action fidelity, action divergence, keep/revise/hold.
3. Repair or demote any weak existing case before expanding further.
4. Then reconsider held cases in small dossier-by-dossier batches.
5. Push each substantively cleared small batch to `author/full-corpus-completion-audited`.
6. Keep normal validation enabled on this clean branch; do not suppress CI through large speculative population work.
7. Maintain this handoff after each batch.
8. Only establish a final executable-family count **after** the substantive sweep; do not target a numerical quota.
9. Once the audited corpus is frozen and CI green, give the partner one immutable SHA for full automated execution.
10. Then update P2 with real Bench run evidence/screenshots and adjust P1/P3 only where consequential.

## 10. Paper regression / Bench separation

Keep distinct:
1. fixed canonical 3×3×3 paper regression;
2. synthetic/demo geometry diagnostics;
3. source-grounded Bioethics Bench;
4. later confirmatory validation subsets.

The fixed paper regression ranking remains:
`pub2 > fw2 > exp2 > fw1 > pub3 > fw3 > exp3 > exp1 > pub1`.

Do not let generic geometry demonstrations or development screenshots become evidence claims about the Bench.

## 11. Final warning for a new thread

Do not infer that a large executable count is a success metric. The Bench is stronger when a well-researched family is explicitly held than when weak evidence is translated into a superficially complete candidate matrix. The failed RC3 attempt is part of the methodological record: **natural ecology reduces quota bias, but it does not relax source-to-action fidelity.**
