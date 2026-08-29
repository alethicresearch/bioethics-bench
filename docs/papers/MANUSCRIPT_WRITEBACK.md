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
