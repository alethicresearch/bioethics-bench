# Brief for an agent updating the manuscripts

**Date:** 2026-08-28
**Purpose:** everything an agent needs to update P1/P2/P3 and the Publication Program from the work
in these repositories, without reconstructing any of it from chat history.

Read this file, then the sources it points at. Do not take counts, dates or claims from a
conversation, a summary, or an earlier draft of a paper. Every number in this brief is derivable
from a command given below, and if a command disagrees with this file, the command is right.

---

## 1. The one blocker to solve first

**P2 v39 is 25.7 MB.** The Google Drive MCP integration refuses downloads over 10 MB, so an agent
using that integration cannot open it. P1 v55 at 5.2 MB downloads but is too large to upload back
through a tool call.

Do not work around this by rebuilding a manuscript from extracted text. Both documents contain
figures and styling that exist only in the binary; a rebuild silently destroys them and the loss is
not visible in a text diff. Either give the agent the `.docx` files directly in its workspace, or
give it Google Drive API credentials with resumable download and upload. If neither is available,
the correct output is an edit sheet, not a regenerated document — see `P2_v40_EDITS.md` in this
directory for the format and for the six P2 edits already specified.

### Editing a .docx without destroying it

    unzip -q paper.docx -d unpacked/
    find unpacked -type l -delete
    python3 merge_runs.py unpacked/          # from the docx skill; coalesces split runs
    # edit unpacked/word/document.xml in place; do not reformat or pretty-print
    (cd unpacked && zip -Xrq ../out.docx .)
    python3 validate.py out.docx --original paper.docx

Then confirm the figures survived before shipping anything:

    python3 -c "
    import zipfile
    a=zipfile.ZipFile('paper.docx'); b=zipfile.ZipFile('out.docx')
    m=[n for n in a.namelist() if 'media/' in n]
    print('images:', len(m), 'identical:', all(a.read(n)==b.read(n) for n in m))
    print('missing:', set(a.namelist())-set(b.namelist()))"

Paragraph count must be unchanged unless the edit deliberately adds one.

---

## 2. Drive locations

Working folder: `https://drive.google.com/drive/folders/1cYrCfxRhIwsO5Uo-5nIAxJUPTL5Z0cDe`

| What | Folder ID | File ID |
|---|---|---|
| 00 — START HERE and Program | `1niF6Bp-9yrAZze6l-HFtmPD7VIznmDOH` | Program v11 `1V9asxEud_adCcUBZL3TaS9BErSlCwJPJ` |
| 01 — P1 | `1ECcI2mLV7bQEt766C_SYdV34m_mPv0-U` | P1 v55 `1acZvkXMXzgN4bPHO9dOpOEEDVNsC6V41` |
| 02 — P2 | `1VpSqybJZy_AtbrL9Ouio-BXnIVIdge75` | P2 v39 `1Sx4vwik7s8U_nbRJXH1HBIAk-MkGGZ0u` |
| 05 — P3 | `1I09PTse1nZzdr2q5Hr_KDBznQNRSQPvi` | P3 v4 (list the folder) |
| 06 — Computational Bioethics chapter | `13uzR3eMIZLtGAHsnMduA0adZeo5e8ZDk` | |
| 90 — Archive | `1XGhsHIJaOiDkXJ_RgJsTCF6VGnEpelqn` | |

Each folder also holds a `CURRENT — …` copy. Those are the pre-v55/v39 state and are **not** the
drafting base; work from the highest version number.

P1 v56 and Program v12 already exist as edited files delivered outside Drive. If they have been
placed in their folders, start from those; if not, the edits in them are described in §5.

---

## 3. Repository state — the evidence base

| Repository | Branch | Head |
|---|---|---|
| `alethicresearch/bioethics-bench` | `author/full-corpus-completion` and `claude/bioethics-bench-completion-m0p43e` | `658041b` |
| `xnuxi/sacre-prototype` | `claude/bioethics-bench-completion-m0p43e` | `f5540a9` |

The Bench branches are identical and CI-green. PR #10 is open against `research/full-corpus-v1` and
its body is an accurate summary of the corpus work.

### Where each claim comes from

**Do not cite a paper draft as a source for a number.** Regenerate it:

    cd bioethics-bench && npm ci && npm run validate

The output lines are authoritative:

    ✓ 34 executable dossiers agree with their committed records.
    ✓ disposition ledger agrees with 200 dossiers and 68 records.
    ✓ Full Corpus manifest pins 34 families and 68 records.
    ✓ 420 candidates: all sourced, basis confined to its pool, none synthetic.
    ✓ 109 record(s) valid against schema, content hash, profile registry, and corpus invariants.

The 109 counts 68 Full Corpus records, 40 Featured records, and the release manifest.
`node scripts/fidelity-audit.mjs --report` prints the basis distribution and the reading-aid list.

**Bench repository, `docs/full-corpus/`:**

| File | What it establishes |
|---|---|
| `START_HERE_NEXT_AGENT.md` | Current state banner at the top supersedes the rest of the file. Read the banner first. |
| `FULL_CORPUS_DISPOSITION_LEDGER.md` | All 200 family dispositions. Generated; do not hand-edit. |
| `PHASE_C_CANDIDATE_AUDIT_PROTOCOL.md` | What a candidate audit must establish, and the per-family specification. |
| `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` | The fidelity pass, its findings, and its stated limits. |
| `RESCUE_CORRECTION_2026-08-28.md` | Why the 106-family figure dissolved; the truncated transport archive. |
| `batch-*/M*-deep-case.md` | Per-family. `Candidate audit result` and `Candidate audit reconciliation` sections carry the audited findings. |

**SACRE repository:**

| File | What it establishes |
|---|---|
| `src/lib/sacre-core/step5.js` | Aggregation requirement, the asymmetry rule, and the guards that withhold a ranking. |
| `scripts/vendor-bench-full-corpus.mjs` | Corpus-to-harness shape agreement check; the comment explains why it exists. |
| `src/lib/bench/full-corpus.test.mjs` | 44 tests; the per-family aggregation invariant and the Sum-yields-no-ranking guard. |
| `src/lib/bench/PINNED-FULL-CORPUS.json` | The pinned corpus commit and hash. |

Verify with `npm ci && npm run test:unit` (325 pass) and `npm run test:web` (73 pass).

---

## 4. Facts that are easy to get wrong

- The corpus is **34 executable families / 68 records**, not 106/212 and not 35/70. The 106 figure
  was never in the repository; the transport archive said to contain it is truncated.
- **No evaluation has been run against the Full Corpus.** Not by the partner, not by anyone. Any
  sentence implying a tranche is underway or complete is false.
- **The partner lane has ended.** Remove division-of-labour framing that assigns work to a partner.
- Records are `status: draft` with `reviewed_by_human: false`; the release is `release-candidate`.
  Nothing may be described as released, validated, or reviewed.
- The historical **17/200** strict review is correct as history and should stay framed as history.
- `SOURCE_TO_POLICY_FIDELITY_REVIEW.md` is a **model review of partly its own work**. Do not cite it
  in a manuscript as evidence of fidelity.
- Three domains — animal/one-health, climate/planetary, biosecurity — are empty because the
  three-pool source architecture cannot represent nonhuman affected interests without a proxy. That
  is a structural limit worth stating, not a coverage gap to apologise for.

---

## 5. Editorial constraints

These matter more than completeness. The author's standing instruction is that the manuscripts stay
legible and shapeable, and that material must not be poured in faster than it can be edited.

- **New text goes where the argument already runs.** No new sections or headings without being asked.
- **Every sentence does work the existing prose does not.** Delete anything that restates a neighbour.
- **No paper-management prose** — no "the companion paper owns", no boundary declarations, no
  announcements of what the section will do.
- **No contrastive filler.** "Not X but Y" constructions and empty scene-setting sentences are the
  specific failure mode to avoid.
- **Respect the paper's role.** P1 specifies and takes no run statistics or corpus counts. P2 reports
  construction and deployment. P3 validates and is the home for scope conditions and n.
- **Say what was left out and why.** A short list of deliberately omitted material at the end of an
  edit sheet lets the author overrule the judgment.

Scale check: the P1 v56 pass added 90 words to 16,262 and the P2 v40 edits add about 330 to 11,777.
An update that adds thousands of words has almost certainly stopped being an update.

---

## 6. Work outstanding

1. **Apply `P2_v40_EDITS.md` to P2 v39** and produce v40. Six edits, exact find/replace text given.
2. **P3** — the useful addition is scope conditions for a frozen validation subset: 34 families with
   domain clustering (`consent-capacity-refusal` is 10 of 34), three empty domains, three geometries
   represented by a single family, and no runs yet. `node scripts/fidelity-audit.mjs --report` and
   the ledger give the distribution.
3. **Computational Bioethics chapter** — coordinate against the frozen primaries; do not let it
   drive their argument.
4. Placeholders in P2 marked `[BIOETHICS BENCH EVALUATION UPDATE: …]` and
   `[BIOETHICS BENCH RESULTS: …]` stay until a tranche has actually been executed.
