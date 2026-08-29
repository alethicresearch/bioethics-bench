# Bioethics Bench Full Corpus v1 — rescue handoff

**Date:** 2026-08-28
**Repository:** `alethicresearch/bioethics-bench`
**Base:** `research/full-corpus-v1`
**Working branch:** `author/full-corpus-completion`
**Draft PR:** #10 — https://github.com/alethicresearch/bioethics-bench/pull/10

## Read first

This file is the operational rescue handoff after the previous ChatGPT thread became too long and spent excessive time on transport mechanics. A new thread/agent should read this file first, then `docs/full-corpus/SELF_HANDOFF_FULL_CORPUS_COMPLETION.md` for the full program/methodological context.

**Do not continue the Drive/chunk-transport experiments.** They were an implementation detour, not part of the Bench design.

## What is safely complete

- Research corpus: 200/200 M001–M200 deep dossiers complete.
- Previous reconstruction tranche merged into `research/full-corpus-v1` via PR #9; base merge commit `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2`.
- Corpus-wide reconsideration under the current four-basis / natural-candidate-ecology rule produced a completion candidate of:
  - 106 Full Corpus executable families;
  - 212 matched concise/detailed records;
  - M001 represented separately by Featured F01;
  - 93 families deliberately held/non-executable for v1 rather than padded.
- Four weaker duplicate parallel frame pairs were identified for deletion in favor of canonical richer/natural frames: M041, M042, M045, M050.
- The 75 newly reconstructed families / 150 records were locally normalized with explicit GPT-5.6 Sol assistance provenance and `reviewed_by_human: false`.
- A local integrity pass previously found the 212-record candidate clean on schema/hash/geometry/companion/policy-basis checks after provenance normalization, but this must be re-established from durable artifacts before freeze.
- The durable project/program onboarding is in `docs/full-corpus/SELF_HANDOFF_FULL_CORPUS_COMPLETION.md`.

## What is actually on GitHub now

At the time this rescue file is written:

- PR #10 exists and is draft.
- The branch contains the onboarding handoff and some canonical records from early population attempts.
- The branch also contains temporary `.completion/` transport/staging files and one-time workflow changes from failed bulk-transfer attempts.
- **Do not treat the branch head as the final 212-record corpus.**
- Automatic `Validate records` was temporarily made manual-only on this branch to stop one failure email per intermediate push. Restore the ordinary validator before final review/freeze.

The previous thread attempted:
1. one-file-at-a-time population (stopped because it caused CI/email noise);
2. Drive transport (failed safely at checksum because the runner downloaded an access response, not the archive);
3. repository chunk transport (became unnecessarily complex and should be abandoned).

No failed transport should be accepted as evidence that the canonical corpus was applied.

## Correct rescue strategy

The next thread/agent should use a **fresh, simple Git-native completion path**. Recommended order:

1. Inspect PR #10 and `author/full-corpus-completion` versus base.
2. Preserve the research/program handoff docs.
3. Remove/ignore temporary `.completion/` files and one-time apply workflows; they are not source data.
4. Recover the 106-family completion candidate from the durable local/export artifact if accessible. If the exact 150-record candidate cannot be reliably recovered from the current branch, regenerate those records deterministically from the 200 deep dossiers and the disposition decisions recorded in the handoff/current conversation context rather than trying to decode partial transport chunks.
5. Apply the 150 new records plus the eight duplicate deletions as canonical files under `data/benchmark/` using a clean Git-native method. Prefer a true multi-file/tree commit or a local git clone/push if available to the new agent; do not use one commit per JSON record.
6. Ensure every framework-derived candidate has non-empty provenance sources pointing to the relevant dossier/framework analysis. This was a real validator requirement discovered during the previous attempt.
7. Ensure all newly reconstructed records disclose GPT-5.6 Sol assistance and remain `reviewed_by_human: false` until real independent review.
8. Recompute canonical JCS/SHA-256 hashes after any content/provenance change.
9. Generate/verify the authoritative 200-family disposition ledger and 106-family executable manifest.
10. Restore `.github/workflows/validate.yml` to normal `push`, `pull_request`, and `workflow_dispatch` triggers.
11. Run the official repository validator once on the complete candidate; fix substantive errors, not merely suppress checks.
12. Remove all temporary transport files/workflows before PR review.
13. Update the main self-handoff with the final 212-record count and CI-green SHA.
14. Give the partner the immutable CI-green SHA; only then should they start the full 106-family production SACRE evaluation.

## Methodological invariants that must not regress

- Natural candidate ecology; no forced 2×2×2.
- Singleton pools are legitimate only after competing-policy search shows convergence.
- Four policy-basis labels are authoritative: `direct-policy-evidence`, `source-informed-policy-inference`, `framework-derived-policy`, `synthetic-author-constructed-policy`.
- Source pool and policy basis are separate.
- Action-target alignment and explicit inferential bridges matter.
- Candidates must be action-distinct in the fixed scenario.
- Cross-source pairs only; pair count = `ab + ac + bc`.
- Mean whenever partner counts differ.
- Incomplete required matrix = no ranking / no provisional Final Policy.
- Do not turn current development runs into confirmatory validation.
- No paid human/Prolific/E1–E4 work unless explicitly authorized.

## Paper/program pointers

Working publication folder:
https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe

Current aligned drafts at this handoff:
- P1 v55 — specification/conceptual paper with light Bench integration.
- P2 v39 — implementation/infrastructure paper with real-Bench pre-results integration and bounded results placeholders.
- Publication Program v11 — sequencing aligned to real-Bench automation.
- P3 v4 — validation outline; current automated Bench runs are development evidence, not confirmatory validation.

SACRE application repo: `xnuxi/sacre-prototype`.
Partner coordination issue: #20.

## Division of labor

**Bench/corpus thread:** finish canonical corpus, provenance, hashes, disposition ledger, manifest, CI, independent review, pinned SHA.

**Partner/SACRE thread:** continue harness/application development and the existing development tranche, but wait for the pinned CI-green Bench SHA before the full 106-family production run. Partner should report corpus/schema defects, not rewrite Bench candidate sets.

## Immediate success criterion

Do not report “Bench complete” until all of the following are true:

- 106 executable Full Corpus families are represented by exactly 212 canonical concise/detailed records;
- M001 remains Featured-only;
- 93 other families have explicit held/non-executable dispositions;
- duplicate weaker frames are removed;
- no temporary transport artifacts remain;
- normal CI is restored and green;
- a pinned completion SHA is recorded in the handoff and sent to the partner.
