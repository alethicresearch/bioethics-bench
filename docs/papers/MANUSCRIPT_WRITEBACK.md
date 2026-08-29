# Manuscript Writeback Queue — Bioethics Bench

This is the canonical repo-side surface for Bench/corpus findings that may change P1, P2, P3, or the Computational Bioethics chapter. Agents should update this file rather than leaving manuscript-facing language only in chat or editing Drive manuscript binaries directly.

## Entry format

### [Short title]
- **Target:** P1 / P2 / P3 / Computational Bioethics; manuscript version and section if known
- **Status:** proposed / ready-for-central-integration / integrated
- **Branch:** exact branch
- **Commit/evidence:** exact SHA plus relevant record/manifest/dossier ids
- **Evidence class:** corpus construction / independent human review / exploratory-descriptive / confirmatory
- **Lifecycle state:** draft / release-candidate / reviewed / released
- **Proposed writeback:** concise paper-ready claim, paragraph, table/figure change, or scope note
- **Limits:** what the evidence does not establish
- **Dependency:** what must happen before integration
- **Integrated into:** filled by central coordinator when applied

## Current queue

### Full Corpus v1 current substrate
- **Target:** P2 v41 status/scope language; P3 v5 corpus description
- **Status:** integrated
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** PR #10; generated disposition ledger and release-candidate manifest; current substantive state 34 executable families / 68 concise+detailed records with all 200 researched families dispositioned
- **Evidence class:** corpus construction/internal review
- **Lifecycle state:** release-candidate; records draft and not independently human-reviewed
- **Proposed writeback:** describe the Full Corpus as a bounded 34-family/68-record release-candidate substrate spanning eight candidate geometries, not as a released or representative sample of all bioethics. Keep Featured v1 separate.
- **Limits:** machine validity and internal audit do not establish source-to-policy fidelity; independent human review remains the release gate.
- **Dependency:** regenerate counts if any canonical v1 record/disposition changes; P3 v5 still needs central status/protocol update.
- **Integrated into:** P2 v41 Section VIII, conclusion, and Appendix D.

### Three-source boundary finding
- **Target:** P1 v58 scope boundary; P2 v41 construction lessons; P3 external-validity/scope conditions
- **Status:** integrated
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/SACRE_V1_SOURCE_COMPLETENESS_DECISION.md`; candidate-audit dossiers
- **Evidence class:** corpus-construction/architecture finding
- **Lifecycle state:** canonical v1 decision
- **Proposed writeback:** canonical SACRE v1 requires defensibly source-grounded public, expert, and framework pools. Several audited held cases are blocked not by missing research effort in general but because a defensible public pool cannot be populated for the represented decision without proxy or action-target mismatch. Treat this as a representational boundary of the current method, while preserving generalized-source architectures as a future extension.
- **Limits:** this does not establish that three-source SACRE is universally preferable; it states the identity/scope of v1.
- **Dependency:** generalized-source work remains parked; P3 should eventually state the scope consequence explicitly.
- **Integrated into:** P1 v58 and P2 v41; P3 pending.

### Human source-to-policy review gate
- **Target:** P2 v41 Bench/release language; P3 v5 validation substrate
- **Status:** integrated
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md`, dossiers, release-candidate manifest
- **Evidence class:** planned independent human review
- **Lifecycle state:** not yet complete
- **Proposed writeback:** distinguish structural validation from semantic/source fidelity. A green validator establishes schema/hash/profile/corpus invariants; Full Corpus release requires independent human review that each source actually warrants the policy candidate attributed to it.
- **Limits:** the model-generated source-to-policy review is internal planning/review material, not independent human evidence.
- **Dependency:** complete the human review and regenerate the release manifest; P3 corpus freeze depends on the reviewed release.
- **Integrated into:** P2 v41; P3 pending.

### Generalized-source scheme is a separate future track
- **Target:** P2/P3 future-work discussion only if useful; not canonical Full Corpus v1 results
- **Status:** proposed
- **Branch:** `claude/generalized-source-architecture-track`
- **Commit/evidence:** `docs/full-corpus/SOURCE_SCHEME_DESIGN.md` and related generalized schema/profile work on the parked branch
- **Evidence class:** architecture proposal
- **Lifecycle state:** experimental branch; not v1
- **Proposed writeback:** note only if analytically useful that corpus construction exposed cases whose relevant normative sources do not map cleanly onto the current tripartite scheme, motivating future work on generalized/partial-source variants. Do not count generalized records in v1 or imply the current application supports them.
- **Limits:** no canonical specification, merge, release, or validation yet.
- **Dependency:** near-term P1/P2 freeze before resuming architecture track.
- **Integrated into:** current P1/P2 preserve the boundary; explicit generalized-source future-work paragraph is not required for submission unless centrally judged useful.

### Drive coordination deltas
- **Target:** shared Drive program documents
- **Status:** integrated
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/DRIVE_COORDINATION_DELTA.md` plus current repo/manifest state
- **Evidence class:** coordination metadata
- **Lifecycle state:** n/a
- **Proposed writeback:** central coordinator applies still-current deltas to Drive and regenerates moving SHAs at edit time.
- **Limits:** repo-generated technical state remains authoritative over stale prose.
- **Dependency:** future material branch/corpus changes should create/update a new delta rather than relying on this status.
- **Integrated into:** both live Drive coordination documents have been updated through P2 v41 propagation and current branch/evidence state.

### Citation verification quantifies what structural validation cannot reach
- **Target:** P2 v41 Bench/release language, alongside the existing structural-validation-versus-fidelity paragraph
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `scripts/verify-citations.mjs`, `docs/full-corpus/review/citation-verification.md`; 231 unique citations, 103 carrying a PMID
- **Evidence class:** corpus construction / mechanical verification
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the distinction between structural validation and source-to-policy fidelity can now be stated with a figure rather than asserted. Every one of the 103 PMIDs the Full Corpus cites resolves to a real record, and 98 are consistent with their citation on year and on title or author. That is the ceiling of what machine checking reaches: an identifier that resolves, to a paper that exists, cited accurately. Whether that paper supports the policy candidate attributed to it is a separate question that no check answers, and it is why independent human review remains the release gate.
- **Limits:** verification covers PMIDs only. The other 128 citations are named policy documents, guidelines and books, checkable only by reading. Resolution and consistency establish nothing about warrant.
- **Dependency:** none. Usable as written.
- **Integrated into:** _pending_

### The citation gate now closes at 103/103

- **Target:** P2 Bench/release language — supersedes the figure in the entry above
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/CITATION_AMBIGUITY_RESOLUTIONS.md`; `npm run validate` green
- **Evidence class:** corpus construction / mechanical verification
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the earlier entry's figure was 98 of 103 consistent with 5 requiring a human read. Those five have been read against their PubMed abstracts and the queue is closed: **103 of 103 now resolve with year and title-or-author consistent.** Four of the five glosses were substantively accurate; one carried a wrong author attribution and was repaired. All five were short-form citations naming neither author nor title — a form that defeats verification by construction — and all five were rewritten to full citations. If P2 states a figure, state 103/103.
- **Limits:** unchanged. PMIDs only; the other 128 citations are policy documents, guidelines and books, checkable only by reading. Resolution establishes nothing about warrant.
- **Dependency:** none. Supersede the "98 consistent" figure wherever it appears.
- **Integrated into:** _pending_

### A stipulation is a measurement instrument, and the corpus can now show it

- **Target:** P1 method section on scenario construction; P2 Bench-construction language
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIVERGENCE_REVIEW.md` and the generated `divergence-worksheet.md`; 34 families, 420 candidates
- **Evidence class:** corpus construction / internal-consistency review by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the review that closes SOURCE_TO_POLICY_FIDELITY_REVIEW §6.3 supplies a concrete account of what a benchmark stipulation is *for*, which the papers currently assert rather than show. A stipulation in this corpus is not scene-setting; it holds the case at the point where the represented policies come apart, and each one carries a rationale saying which alternative it is preventing from deciding the case in advance. M094 stipulates that the less-restrictive infection-control package can reach an institutionally acceptable level of patient protection — without that, the vaccination-mandate case answers itself. M045 stipulates strong evidence of a shared family-building plan *and* the absence of a signed instruction, and under exactly those facts the four source candidates split two and two along the written-authorization / strong-evidence line. This is the mechanism by which a case measures a disagreement rather than illustrating one, and one or two worked examples would carry it in a paragraph.
- **Limits:** the review is internal-consistency only — it reads stated actions against stated facts. It establishes nothing about whether a candidate is what its sources support. It was performed by a model; `reviewed_by_human` remains false on every record.
- **Dependency:** none. Usable as written.
- **Integrated into:** _pending_

### The fixed-fact-pattern test has a stateable limit, and one family sits on it

- **Target:** P1 limitations, or the QCCS method section where action-distinctness is defined
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIVERGENCE_REVIEW.md` observations 1–3
- **Evidence class:** method boundary finding
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the corpus's distinctness rule is *action-distinctness under the fixed fact pattern* — same action, one candidate. Applying it across all 34 families surfaces its boundary. In M033 (advance euthanasia directive in dementia) two framework candidates, current-welfare and contemporaneous-confirmation, both refuse under the stipulated facts, because the scenario deliberately leaves current welfare indeterminate so that neither precedent autonomy nor present interests wins by stipulation. They are nonetheless different policies: one keeps a defined reopening trigger, the other forecloses the question. So the field holds at three — on the ground that a standing policy is not only its answer today. That is a real and paper-worthy refinement: **a policy's identity includes the institutional behaviour it directs going forward, not only the action it selects on the instant case**, and a distinctness test evaluated on one fact pattern can only see the latter. A second, milder instance appears in M102. Separately, four expert singletons state a *process* rather than an outcome (M025, M034, M042, M146) and so score as compatible with both sides of a two-position public pool — a true report of what professional guidance often is, and a QCCS reading that should not be mistaken for the expert layer endorsing both policies.
- **Limits:** these are judgments about candidate texts, made by a model. No geometry was changed and no record was edited on the strength of them; they are recorded for the human gate.
- **Dependency:** if the coordinator wants the distinctness rule restated in P1, this is the evidence for it. Do not present it as a validated empirical result.
- **Integrated into:** _pending_

### A traceability check found the circular citations, and they clustered exactly where theory predicts

- **Target:** P2 Bench-construction and release-gate language; P1 limitations if a construction-failure example is wanted
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/SOURCE_TRACEABILITY_REVIEW.md`; the guard in `scripts/fidelity-audit.mjs`
- **Evidence class:** corpus construction / mechanical verification plus source reading
- **Lifecycle state:** release-candidate
- **Proposed writeback:** seven source citations in the Full Corpus named one of the repository's own audit documents as a candidate's warrant — grounding the record in a document written from the record. Of 420 candidates, **all seven were in the public pool and all seven were on `direct-policy-evidence` candidates**, the single basis that asserts a source *states* the policy. That distribution is the point worth making: circular grounding does not appear at random, it appears where a construction pass reaches for a summary instead of a source, which is the strongest-claim class. Five are now repaired against identified sources and a build guard makes the count non-recoverable. If P2 wants a concrete instance of why structural validation is not fidelity, this is a better one than any abstract statement: every one of the seven passed schema, hashing, companion equivalence, geometry and profile checks.
- **Limits:** the check establishes traceability, not warrant. Reaching the source is not reading it.
- **Dependency:** none.
- **Integrated into:** _pending_

### The M075 release-gate item is closed, and the missing source turned out to be findable

- **Target:** P2 release-status language; supersedes the "one open release-gate item" entry this replaces
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/SOURCE_TRACEABILITY_REVIEW.md`; `npm run validate` reports no unresolved source
- **Evidence class:** corpus construction / source identification
- **Lifecycle state:** release-candidate
- **Proposed writeback:** M075's public pool rested on a survey the repository described but never cited — 4,659 US adults, broad consent 52% against study-by-study 48%. It has been identified as Platt et al., *Genet Med* 2014;16(1):11-8, PMID 23660530, verified against the abstract: sample size and both percentages match exactly. **No candidate in the Full Corpus now rests on an unresolved source.** Platt is also worth a sentence on its own merits if P2 discusses the four-basis taxonomy: it is an unusually clean case of `direct-policy-evidence` in the public pool, because it elicited preferences *over consent models themselves* rather than preferences from which a consent model must be inferred. That is what the action-target alignment rule asks for, and the reason it is rare — 98 of 138 public candidates need a declared inference bridge and only 40 are direct.
- **Limits:** identification establishes that the source exists and reports what the audit said it reports. It does not by itself establish that the candidate's policy wording is the right translation of it.
- **Dependency:** none. **The earlier writeback saying manuscripts should not describe the corpus as fully source-traceable is withdrawn.** The count of 34 families stands and no family is held.
- **Integrated into:** _pending_

### "Direct policy evidence" from a public survey means the instrument asked about the policy

- **Target:** P1 method section on the four-basis taxonomy; P2 Bench-construction language
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`; all 20 public `direct-policy-evidence` candidates, sources read against candidates
- **Evidence class:** corpus construction / source reading by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the papers state the action-target alignment rule — willingness to use is not a policy to establish, uptake under a default is not endorsement — but state it as a principle. Reviewing every public-pool `direct-policy-evidence` candidate against its sources gives it an operational test that can be shown rather than asserted: **the basis is earned when the instrument put a policy to the respondent instead of asking about the respondent.** M028 is the worked example, because one study contains both questions. Ludka 2025 asked whether *the hospital should be required* to continue treatment when a family rejects brain death (41.9% agreed) and separately what respondents would want *for themselves* (24.4%). The record cites the first. Two numbers, one study, and the whole rule is visible in the gap between them. All 20 candidates hold; six needed a citation or summary repair, none needed a basis or action change.
- **Limits:** abstract-level reading. M144's three sources are correctly identified and on topic, but two are research letters without structured abstracts and its specific claims were not confirmed. The 98 expert `direct-policy-evidence` candidates are not covered.
- **Dependency:** none. Usable as written.
- **Integrated into:** _pending_

### Two ways an expert pool comes to hold two candidates

- **Target:** P1 method section on candidate-pool construction; P2 Bench-construction language
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`, expert batch; 22 of 49 expert `direct-policy-evidence` candidates read against primary guidance
- **Evidence class:** corpus construction / primary-source reading by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the papers describe expert pluralism as bodies disagreeing. Reading the primary documents shows a second and distinct source of it. **M060's two opposed expert candidates cite a single document** — the ASRM Ethics Committee's 2022 opinion, which states practitioners are "under no ethical obligation to provide *or refuse to provide*" nonmedical sex selection, that the practice should not be encouraged, and that clinics should develop and publish their own policies. One body, deliberately declining to settle the question, licensing two institutional policies. Contrast M189, where the pool is two because USPSTF and ACS actually disagree. Both are genuine policy pluralism and they are not the same phenomenon: one is disagreement between authorities, the other is an authority devolving the decision. A benchmark that only modelled the first would miss cases where the professional field is open by design.
- **Limits:** 22 of 49 expert candidates verified against primary documents; 27 remain. Model-performed, abstract- and web-level reading.
- **Dependency:** none.
- **Integrated into:** _pending_

### An evaluation report about a policy is not a statement of the policy

- **Target:** P2 Bench-construction language, alongside the circular-citation finding
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`, M031 repair
- **Evidence class:** construction-failure finding
- **Lifecycle state:** release-candidate
- **Proposed writeback:** M031's expert candidate for permitting clinician participation in medical aid in dying encoded Oregon's safeguards — capacity, terminal prognosis, two oral requests plus a written one, consulting-physician confirmation, right to rescind. Its only source was the Oregon Health Authority's **annual Death with Dignity data summary**, a report of how many prescriptions were written and how many people died. That document contains none of those safeguards; they are in ORS 127.800–127.897. Everything the candidate said was true of Oregon and nothing in the cited artefact said it. This is the same circularity as citing a Bench audit, in a form that looks entirely respectable: an official government document, on exactly the right topic, from the right agency, that is nonetheless evidence *about* the policy rather than a statement *of* it. Worth a sentence wherever the papers discuss what a provenance chain has to establish.
- **Limits:** one instance found in 22 candidates read.
- **Dependency:** none.
- **Integrated into:** _pending_

### The four-basis rule has no discipline for a partly-authored direct candidate

- **Target:** P1 method section on the four-basis taxonomy; `CONSTRUCTION_STANDARD_DECISION.md` if the coordinator wants it fixed in the standard
- **Status:** proposed — **method decision for the coordinator**
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`, expert batch 2
- **Evidence class:** method-boundary finding
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the taxonomy requires a `source-informed-policy-inference` candidate to state its bridge — what the source measured, what the candidate asserts, which part is Bench-authored — and 110 of 110 do. It says nothing about a `direct-policy-evidence` candidate that is *mostly* direct and partly authored. M025 is where that gap is widest: the ACIA candidacy guideline supports the candidate's evaluation architecture but takes no position on informed parental refusal, so the clause doing the actual policy work — that refusal alone is not treated as neglect — was Bench-authored and undeclared. Most of the corpus declares such completion by convention ("Bench-authored policy completion," "the clauses are not survey wording"), so the practice exists without a rule behind it. **A guard was written for this and deleted: it fired on 59 of 118 direct candidates**, because many silences are correct — a candidate that adds nothing to its source has nothing to declare — and no keyword check can separate those from M025 without doing the reading. The fix belongs in the construction standard, not in a script.
- **Limits:** one clear instance found in 24 expert candidates read. The other 25 are unread.
- **Dependency:** if the standard is amended, existing direct candidates need a declaration pass. That is a corpus-wide edit and is not made here.
- **Integrated into:** _pending_

### Expert pluralism is mostly one authority stating a duty and its limit, not two authorities disagreeing

- **Target:** P1 method section on source pools and what a cross-source QCCS cell measures; P2 Bench-construction language. **Supersedes the "two ways an expert pool comes to hold two candidates" entry above**, which had the shape right and the proportions wrong.
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`, expert batches 1–3; 28 of 49 expert `direct-policy-evidence` candidates read against primary professional documents
- **Evidence class:** corpus construction / primary-source reading by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the intuitive model of expert pluralism — two professional bodies contradicting each other — describes the minority of this corpus. Reading the primary documents, the more common structure is **one authority stating a duty and its limit, declining to settle, or endorsing a menu of strategies**, with both expert candidates licensed by the same document. Three worked cases: ASRM 2022 says practitioners are under no obligation to provide *or refuse to provide* nonmedical sex selection and that clinics should publish their own policies (M060); CDC's Core Elements framework directs avoidance of low-benefit antibiotics *and* supplies watchful-waiting and delayed-prescribing materials (M018); AMA Opinion 8.3 states the obligation to provide urgent disaster care "even in the face of greater than usual risks to physicians' own safety, health, or life" *and* the obligation to weigh present risk against remaining available in future (M020). M189's USPSTF-against-ACS is the exception, not the template.
  **This changes how an expert–expert QCCS cell should be read.** A low coherence score between two candidates drawn from two bodies reports a professional disagreement. A low score between two candidates drawn from one document's two clauses reports tension *within* a single professional position. Those are different findings about the field, and the corpus can now distinguish them because the citations say which case each family is. If P1 discusses what a cross-source cell measures, this is the distinction to make.
- **Limits:** 28 of 49 expert candidates verified against primary documents; 21 remain. Model-performed reading of published guidance, not a survey of the professional literature.
- **Dependency:** none. Supersede the earlier two-ways entry.
- **Integrated into:** _pending_

### The first candidate-text error, and what made it findable

- **Target:** P2 Bench-construction language; P1 limitations if a construction-failure example is wanted
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`, M002 section; SACRE re-vendored at `e4c0548`
- **Evidence class:** construction-failure finding
- **Lifecycle state:** release-candidate
- **Proposed writeback:** across five review passes and thirty-four families, every defect found had been in a citation or a provenance summary — until M002. Its expert candidate, cited to the WHO QualityRights module on supported decision-making, read "using substitute decision-making only as a last resort." WHO QualityRights is explicitly aligned with CRPD Article 12 as the CRPD Committee reads it, which requires **eliminating** substitute decision-making rather than reserving it; commentary on QualityRights notes it declines even a last-resort framing, on the ground that naming something a last resort is what normalises it. The candidate attributed to a rights-maximalist source the exact formulation it exists to reject.
  Two things make this worth a paragraph rather than a line. First, **the error's direction was convenient**: the wrong reading made this candidate easier to compare against the AMA surrogate rule in the same pool, and the repair makes the two sharply action-distinct where they had partly converged. Errors that make a corpus tidier are the ones to be most suspicious of. Second, **no mechanical check could have found it**. M002 passed schema, hashing, companion equivalence, geometry, profile, action-distinctness, citation resolution, source traceability and scenario/action divergence. The citation was correct, the source was real and nameable, and the paper existed — the candidate simply said something the source does not. Only reading the source against the candidate finds that, which is the argument for why the human source-to-policy gate is the release gate and not a formality.
- **Limits:** the module's own wording was not retrievable — WHO's IRIS PDF returns 403 — so the repair rests on documented CRPD alignment plus secondary literature, and the record's provenance says so. That the previous wording was wrong in the permissive direction is not in doubt; the exact replacement should be confirmed by a reviewer with the module.
- **Dependency:** none for the manuscripts. Execution-relevant for SACRE, already discharged.
- **Integrated into:** _pending_

### Three ways a source-to-policy chain fails, each with an instance

- **Target:** P2 Bench-construction language; P1 limitations. **Consolidates and supersedes** the separate M031 and M002 construction-failure entries above, which are instances of modes 1 and 2.
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`; 36 of 49 expert plus 20 of 20 public `direct-policy-evidence` candidates read against sources
- **Evidence class:** construction-failure taxonomy from corpus review by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** the papers argue that structural validation is not source fidelity. Reading every high-warrant candidate against its sources turns that from an assertion into a taxonomy with three distinct modes, each with an instance, and each invisible to every mechanical check the corpus runs.
  **1. The source does not say it.** M002's expert candidate, cited to WHO QualityRights, read "using substitute decision-making only as a last resort." WHO QualityRights is CRPD-Article-12 aligned and treats substitute decision-making as something to eliminate, declining even a last-resort framing. The citation was correct, the source real; the candidate said something the source rejects.
  **2. The candidate adds a clause the source does not carry, undeclared.** M025's ACIA candidacy guideline supports the evaluation architecture but takes no position on informed parental refusal, so "refusal alone is not treated as neglect" was Bench-authored. M144 carries AMA H-480.931's risk-and-impact principle from developer-to-purchaser disclosure across to physician-to-patient disclosure. The taxonomy requires inferred candidates to declare their bridge and says nothing about a direct candidate that is mostly direct and partly authored.
  **3. The source is quoted correctly on one question and silent on its own position on another.** M041's expert candidate reproduces ESHRE Task Force 14's threshold rule almost verbatim — and omits the same paper's holding that when only one patient can be treated, priority goes to a childless couple. Prior children is exactly the axis the family's other candidates divide along.
  Mode 3 is the one worth dwelling on, because it defeats the obvious remedy. Modes 1 and 2 are caught by reading the passage a candidate cites. Mode 3 is caught only by reading the whole document, since the failure is in what the record leaves out. **A citation check verifies the passage; only a reader verifies the source.**
- **Limits:** 13 of 49 expert candidates remain unread. All reading was model-performed. Mode 3 was found once, in the one source read from its own PDF rather than an abstract — which suggests it is under-detected rather than rare.
- **Dependency:** none. If P2 wants one concrete example rather than three, mode 3 is the strongest, because it is the one no tightening of citation practice would catch.
- **Integrated into:** _pending_

### The warrant review is complete: what reading every high-warrant candidate against its sources found

- **Target:** P2 Bench release-status and construction language; P1 limitations
- **Status:** ready-for-central-integration
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/DIRECT_POLICY_WARRANT_REVIEW.md`; all 20 public and all 49 expert `direct-policy-evidence` candidates
- **Evidence class:** corpus review by a model, not a human
- **Lifecycle state:** release-candidate
- **Proposed writeback:** every candidate in the corpus claiming the strongest basis — that a source *states* this policy — has now been read against its sources. **69 candidates, and the corpus held.** No candidate was demoted, no basis changed, no geometry moved, and the executable set stayed at 34 families / 68 records throughout. Exactly one candidate's text changed. Everything else was provenance: two undeclared authored clauses, two partial representations, one warrant pointing at an evaluation report rather than the policy it evaluates, two summaries more decisive than their sources, and roughly twenty citations that named no author, title, section or date and now do.
  If P2 states a release-readiness position, this is the defensible form of it: **the Bench's strongest evidentiary claims have been checked against their sources and survived, with the corrections recorded**; and the corpus remains release-candidate because that check was performed by a model, not the independent human reviewer the release gate names. Those two statements are compatible and both should be made.
- **Limits:** verification depth is uneven and the review document says where — some sources read from their own PDFs, most from PubMed abstracts or publisher summaries, six at document level only. The 98 public `source-informed-policy-inference` bridges are verified as *stated*, not as *sound*. Mode 3 — a source quoted correctly on one question and silent on its own position on another — was found twice, both times in the deepest reads, so it is under-detected rather than rare.
- **Dependency:** none. This is the last review pass the Bench lane can perform without a human.
- **Integrated into:** _pending_

### Cross-source independence is an assumption the method makes and the corpus must earn — and it was earned

- **Target:** P1 method section on source pools and what a cross-source QCCS cell measures; P2 Bench-construction language
- **Status:** ready-for-central-integration — **the decision this entry previously requested has been made and implemented**
- **Branch:** `author/full-corpus-completion`
- **Commit/evidence:** `docs/full-corpus/review/BRIDGE_REVIEW.md`; guard in `scripts/fidelity-audit.mjs`, which no longer fires
- **Evidence class:** method-boundary finding, resolved by external source review verified here
- **Lifecycle state:** release-candidate
- **Proposed writeback:** QCCS reads a high public–expert cell as the public and the profession converging, which assumes the two pools are independent sources. **Nothing structural enforces that** — not the schema, the geometry, the profile registry or the four-basis taxonomy — and two families failed it. M045's and M060's public candidates were grounded in the ASRM Ethics Committee opinions that were also their expert pools' warrant, so those cells compared a document against itself and a high score was guaranteed by construction.
  It has since been fixed by the route worth reporting: an external research agent traced both opinions back to the population and patient studies underneath them, and both public pools now cite those directly — Barton 2012, Hans 2014, Pastuszak 2013, Nakhuda 2011 and Côté 2014 for M045; Dahl 2006, Winkelman 2015, Kippen 2018 and Dahl 2004 for M060. The ASRM opinions were removed from the public pools entirely. **All nine PMIDs were verified against PubMed here, including the reported figures**, because a real paper carrying an invented statistic is the failure mode this corpus exists to resist.
  If P1 discusses what a cross-source cell measures, the general claim is the durable part: **source independence is a precondition for a cross-source coherence score to mean anything, it is not implied by satisfying every construction rule, and a corpus can pass all of them while containing cells that measure nothing.** The two families are the worked example, and the repair shows the defect is findable and fixable rather than fatal.
- **Limits:** found in two of 34 families. The guard compares citation strings, so it caught M045 and missed M060, which cited the same document in different words — M060 was found by reading. Two further families (M050, M123) mix a shared professional document with an independent study, which is defensible and recorded rather than flagged.
- **Dependency:** none. Provenance-only; no candidate text changed and no SACRE rerun is implied.
- **Integrated into:** _pending_

