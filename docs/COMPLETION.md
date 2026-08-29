# What completing this project means

**One page. Read this first, then go to the surface it points you at.**

The Normative Computation program runs across two repositories, a Drive manuscript set and four
working lanes. This file is the map: what "done" means for each part, who owns it, and where the
live answer lives. It states no numbers that live somewhere else — every row points at the
authoritative surface instead, because a copied figure goes stale within hours and this one is meant
to survive.

---

## The whole thing, in one paragraph

A method (SACRE) turns a policy question into a scored comparison across public, expert and
framework sources. An application executes that method. A benchmark corpus (Bioethics Bench)
supplies the cases it runs on. Three papers describe the method (P1), the infrastructure (P2), and
the validation that has not happened yet (P3). **The project is complete when the papers can make
true claims about a working system running a defensible corpus — and can say precisely what has not
been established.** Everything below is in service of that sentence.

---

## The four lanes

| Lane | Done means | Live answer |
|---|---|---|
| **SACRE / application** | Canonical Tutorial Step 6 and a fresh iteration-1 cycle executed, with one immutable evidence bundle; Full Corpus executed end to end for exploratory evidence | `xnuxi/sacre-prototype` → `docs/CURRENT_COORDINATOR_STATUS.md` on `main` |
| **Bioethics Bench / corpus** | Corpus executable, structurally valid, and every source claim it makes checked against its sources | this repo → [`docs/full-corpus/review/README.md`](full-corpus/review/README.md) |
| **Papers** | P1 and P2 integrated from the evidence bundle and frozen for authorial review; P3 preregistered, not executed | Drive, sequenced from the SACRE coordinator status |
| **Validation (P3)** | Confirmatory and human-subject work, **after explicit authorization only** | not started, deliberately |

**The critical path runs through SACRE, not here.** The coordinator has removed human
source-to-policy review as a gate on the paper program: the corpus is executed now for developmental
evidence, and review continues in parallel. Nothing in the Bench lane should block that.

---

## The Bench lane, which this repository owns

Six review passes have run, each answering a different question about the corpus. **All six are
closed**, and the corpus survived them: no family demoted, no basis changed, no geometry moved.
Their findings, current numbers and limitations live in two places and nowhere else:

- **[`docs/papers/BENCH_FINDINGS_FOR_P1_P2.md`](papers/BENCH_FINDINGS_FOR_P1_P2.md)** — what to draft
  from. Nine findings in the order they are worth using, with the numbers stated once and section 9
  as the limitations language.
- **[`docs/full-corpus/review/README.md`](full-corpus/review/README.md)** — the review index: what
  each pass asked, what it found, and why their order matters.

### What is genuinely left

**One thing, and it needs sources rather than reasoning.** Everything a model can establish from the
record is established. What remains is reading the cited sources themselves, packaged as 126 units
with a return path:

- **Start:** [`docs/full-corpus/review/DEEP_RESEARCH_BRIEF.md`](full-corpus/review/DEEP_RESEARCH_BRIEF.md)
  — what is already settled (so effort does not go there), and the three remaining questions.
- **Current state:** [`docs/full-corpus/review/RESEARCH_HANDOFF.md`](full-corpus/review/RESEARCH_HANDOFF.md)
  — regenerated every validate run; carries per-unit fingerprints so a verdict survives unrelated
  repairs.
- **Tasks:** [`docs/full-corpus/review/research-tasks/README.md`](full-corpus/review/research-tasks/README.md)
  — one file per family. Work order **C → B → A**.
- **Return:** `node scripts/ingest-research-verdicts.mjs`, which reports coverage on every
  `npm run validate` and refuses a verdict that names a nonexistent unit, asserts a defect without
  evidence, or judges a unit that has since been repaired.

**Task B is where the yield is.** Five families have had a whole-document read and all five carried
a finding the passage-level check could not see. Twenty-nine have not been read that way.

### Two open decisions, staged not taken

Both are in `docs/papers/MANUSCRIPT_WRITEBACK.md`, and both change the corpus rather than its
description, which is why they wait for the coordinator:

1. **The four-basis rule has no discipline for a partly-authored direct candidate.** Two instances
   found. Fixing it means amending the construction standard and a corpus-wide declaration pass.
2. Nothing else. The cross-source independence question that stood here is **closed** — resolved by
   re-sourcing rather than by holding families.

---

## What must not be claimed

Stated here because it is the easiest thing to get wrong under deadline, and because every lane
touches it:

- The corpus is **not human-reviewed**. `reviewed_by_human` is `false` on all 68 records.
- The review is **not complete**. 121 of 126 external units are unreturned.
- Cross-source coherence has **not been validated**. No confirmatory evaluation has been run.
- Implementation capability is **not** empirical evidence; development runs are **not** confirmatory
  validation; branch-only functionality is **not** deployed functionality.

The corpus being published at bioethicsbench.com does not change any of these. The site says so.

---

## If you are picking this up cold

Read in this order: this file, then the coordinator status in the SACRE repo for the critical path,
then — if you are working the Bench lane — the review index here, then the deep-research brief.
Fetch live branch heads rather than trusting any SHA written in a coordination document, including
this one, which deliberately contains none.
