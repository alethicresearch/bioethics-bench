# Bioethics Bench — Full Corpus v1 Progress

**Branch:** `research/full-corpus-v1`  
**Purpose:** operational research ledger. Inventory IDs are editorial handles, not immutable benchmark IDs.

Status in this file describes construction progress only. `released` remains a separate record lifecycle state and does not imply validation.

## Batch A — current work

| Inventory | Case family / working title | Domain | Source packet | Deep case file | Concise | Detailed | Public / affected evidence | Expert evidence | Framework map | Executable eligibility | Review | Featured crosswalk | Notes / blocker |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M001 | High-risk surgery when a competent adult refuses blood transfusion | consent/capacity/refusal | audited | drafted | released F01 text preserved | released F01 text preserved | strong affected-community; heterogeneous product acceptance | strong | strong | `executable-2x2x2` already represented by F01 | substantive deep-file review pending | F01 | M001 is the underlying inventory family for F01. Do not create a second independent M001 record. Emergency forced-transfusion refusal, if retained, needs a different inventory handle. |
| M002 | Capacity, risk and supported decision-making | consent/capacity/refusal | audited | drafted | drafted | drafted | strong but supports individualized support more clearly than two fixed policies | two distinct professional architectures | strong | `executable-other-profile` candidate: 1 public × 2 expert × 2 framework | substantive review + recurring-profile decision pending | — | Do not turn heterogeneous support preferences into two artificial public policies. Six-hour support/reassessment window is matched across representations. |
| M003 | Emergency treatment when wishes are unknown | consent/emergency | audited | drafted | drafted | drafted | meaningful evidence for presumed emergency treatment and respect for prior wishes; insufficient for a clean two-policy public pool | strong | strong | `needs-additional-evidence` | substantive review pending | — | Do not manufacture a public split around how long clinicians should search before treating. |
| M004 | Adolescent confidentiality | adolescent/consent/privacy | audited | drafted | drafted | drafted | strong and plural adolescent/parent attitudes | professional guidance converges on one confidentiality architecture | strong | `executable-other-profile` candidate: 2 public × 1 expert × 2 framework | substantive review + recurring-profile decision pending | — | Jurisdiction-neutral policy; confidentiality, voluntary family involvement and safety exceptions kept separate. |
| M005 | Family asks clinicians not to disclose a serious diagnosis | consent/disclosure/relational autonomy | audited | drafted | drafted | drafted | strong and plural patient/caregiver evidence | professional guidance converges on one patient-preference architecture | strong | `executable-other-profile` candidate: 2 public × 1 expert × 2 framework | substantive review + recurring-profile decision pending | — | Patient's own disclosure/family-role preference governs; no cultural stereotyping or invented family veto. |
| M006 | Disclosure of a consequential medical error | professional duty/disclosure | audited | drafted | drafted | drafted | strong but disclosure-dominant; no clean two-policy public pool on unresolved-information timing | strong | strong | `needs-additional-evidence` | substantive review pending | — | Distinguish immediate known-fact disclosure from staged causal updates; do not create concealment straw candidates. |
| M007 | Clinician conscientious objection and referral | professional duty/reproductive ethics | audited | drafted | drafted | drafted | affected-service-user evidence supports transparent access but does not yet yield two robust referral-policy positions | strong/plural | strong | `needs-additional-evidence` | substantive review pending | — | Concrete service is lawful abortion; direct referral versus institution-supplied access pathway must remain distinct. |
| M008 | Confidentiality versus serious preventable harm to a third party | confidentiality/mental health | audited | drafted | drafted | drafted | historical public evidence is genuinely plural but contemporary direct affected-public evidence remains thin | strong | strong | `needs-additional-evidence` | substantive review pending | — | Keep in full corpus even if non-executable; severity, probability, identifiability and minimum-necessary disclosure are explicit. |
| M009 | Requested CPR judged medically non-beneficial | end-of-life/professional duty | audited | drafted | drafted | drafted | patient/surrogate CPR evidence is relevant but does not directly compare institutional conflict-resolution policies | strong/plural | strong | `needs-additional-evidence` | substantive review pending | — | Avoid `futile`; outcome probability, agreed treatment goal and process safeguards are explicit. |
| M010 | Family members as interpreters for consequential consent | language access/consent | audited | drafted | drafted | drafted | strong and genuinely plural patient preference evidence | two distinct professional/policy architectures | strong | `executable-2x2x2` candidate set audited | substantive review + executable-record transcription pending | — | Existing `featured-core-2x2x2-v1` shape is supported; no new profile needed for M010. |

## Batch A1 eligibility snapshot

After the deep-research and first candidate-level audit:

- already executable/released through Featured crosswalk: **M001**;
- clean existing-profile candidate ready for executable-record transcription after branch infrastructure sync: **M010**;
- evidence supports an asymmetric executable profile rather than six candidates: **M002, M004, M005**;
- retain as `needs-additional-evidence` rather than forcing an executable profile: **M003, M006, M007, M008, M009**.

Do not register case-specific asymmetric profiles yet. Continue enough of the early corpus to see which source-pool shapes recur, then register the smallest stable vocabulary of executable profiles. A recurring 2 public × 1 expert × 2 framework profile would yield 8 unordered cross-source QCCS comparisons; a 1 public × 2 expert × 2 framework profile would also yield 8.

These are research-state judgments, not final release classifications. A case may become executable if later evidence closes a source-class gap; it need not do so to remain a complete Full Corpus case.

## Evidence-status vocabulary

- **strong** — multiple credible sources directly support construction in that source class.
- **usable** — credible evidence exists but translation into an actionable policy family requires explicit provenance.
- **limited** — relevant evidence exists but is not strong/direct enough to support the required candidate structure without further work.
- **not applicable / absent** — do not invent a source-class position.

## Executable-eligibility vocabulary

- `executable-2x2x2`
- `executable-other-profile`
- `research-complete-not-executable`
- `needs-additional-evidence`

The ledger should be expanded as each batch begins. A green schema/build is never a substitute for substantive source, distinctness, granularity or representation review.
