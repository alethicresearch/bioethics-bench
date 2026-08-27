# Bioethics Bench — Full Corpus v1 Progress

**Branch:** `research/full-corpus-v1`  
**Purpose:** operational research ledger. Inventory IDs are editorial handles, not immutable benchmark IDs.

Status in this file describes construction progress only. `released` remains a separate record lifecycle state and does not imply validation.

## Batch A — current work

| Inventory | Case family / working title | Domain | Source packet | Deep case file | Concise | Detailed | Public / affected evidence | Expert evidence | Framework map | Executable eligibility | Review | Featured crosswalk | Notes / blocker |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M001 | High-risk surgery when a competent adult refuses blood transfusion | consent/capacity/refusal | audited | drafted | released F01 text preserved | released F01 text preserved | strong affected-community; heterogeneous product acceptance | strong | strong | `executable-2x2x2` already represented by F01 | substantive deep-file review pending | F01 | M001 is the underlying inventory family for F01. Do not create a second independent M001 record. Emergency forced-transfusion refusal, if retained, needs a different inventory handle. |
| M002 | Capacity, risk and supported decision-making | consent/capacity/refusal | audited | drafted | executable draft + hash valid | executable draft + hash valid | strong but supports individualized support more clearly than two fixed policies | two distinct professional architectures | strong | `executable-other-profile`: `full-corpus-1x2x2-mean-v1`; draft pair structurally valid | substantive/editorial review pending | — | Draft records in `data/benchmark`. Mean is required by the registered asymmetric profile and enforced by SACRE. Do not turn heterogeneous support preferences into two artificial public policies. Six-hour support/reassessment window is matched across representations. |
| M003 | Emergency treatment when wishes are unknown | consent/emergency | audited | drafted | drafted | drafted | meaningful evidence for presumed emergency treatment and respect for prior wishes; insufficient for a clean two-policy public pool | strong | strong | `needs-additional-evidence` | substantive review pending | — | Do not manufacture a public split around how long clinicians should search before treating. |
| M004 | Adolescent confidentiality | adolescent/consent/privacy | audited | drafted | executable draft + hash valid | executable draft + hash valid | strong and plural adolescent/parent attitudes | professional guidance converges on one confidentiality architecture | strong | `executable-other-profile`: `full-corpus-2x1x2-mean-v1`; draft pair structurally valid | substantive/editorial review pending | — | Draft records in `data/benchmark`. Mean is required by the registered asymmetric profile and enforced by SACRE. Jurisdiction-neutral policy; confidentiality, voluntary family involvement and safety exceptions kept separate. |
| M005 | Family asks clinicians not to disclose a serious diagnosis | consent/disclosure/relational autonomy | audited | drafted | executable draft + hash valid | executable draft + hash valid | strong and plural patient/caregiver evidence | professional guidance converges on one patient-preference architecture | strong | `executable-other-profile`: `full-corpus-2x1x2-mean-v1`; draft pair structurally valid | substantive/editorial review pending | — | Draft records in `data/benchmark`. Mean is required by the registered asymmetric profile and enforced by SACRE. Patient's own disclosure/family-role preference governs; no cultural stereotyping or invented family veto. |
| M006 | Disclosure of a consequential medical error | professional duty/disclosure | audited | drafted | drafted | drafted | strong but disclosure-dominant; no clean two-policy public pool on unresolved-information timing | strong | strong | `needs-additional-evidence` | substantive review pending | — | Distinguish immediate known-fact disclosure from staged causal updates; do not create concealment straw candidates. |
| M007 | Clinician conscientious objection and referral | professional duty/reproductive ethics | audited | drafted | drafted | drafted | affected-service-user evidence supports transparent access but does not yet yield two robust referral-policy positions | strong/plural | strong | `needs-additional-evidence` | substantive review pending | — | Concrete service is lawful abortion; direct referral versus institution-supplied access pathway must remain distinct. |
| M008 | Confidentiality versus serious preventable harm to a third party | confidentiality/mental health | audited | drafted | drafted | drafted | historical public evidence is genuinely plural but contemporary direct affected-public evidence remains thin | strong | strong | `needs-additional-evidence` | substantive review pending | — | Keep in full corpus even if non-executable; severity, probability, identifiability and minimum-necessary disclosure are explicit. |
| M009 | Requested CPR judged medically non-beneficial | end-of-life/professional duty | audited | drafted | drafted | drafted | patient/surrogate CPR evidence is relevant but does not directly compare institutional conflict-resolution policies | strong/plural | strong | `needs-additional-evidence` | substantive review pending | — | Avoid `futile`; outcome probability, agreed treatment goal and process safeguards are explicit. |
| M010 | Family members as interpreters for consequential consent | language access/consent | audited | drafted | executable draft + hash valid | executable draft + hash valid | strong and genuinely plural patient preference evidence | two distinct professional/policy architectures | strong | `executable-2x2x2`; draft pair structurally valid | substantive/editorial review pending | — | Draft records in `data/benchmark`; canonical hashes written. Existing `featured-core-2x2x2-v1` shape is supported; no asymmetric aggregation requirement applies. Not frozen or released. |

## Batch A1 eligibility snapshot

After deep research, candidate-level audit, aggregation-shape audit, and executable transcription:

- already executable/released through Featured crosswalk: **M001**;
- structurally valid Full Corpus executable draft pairs: **M002 (`1 × 2 × 2`, Mean)**, **M004 (`2 × 1 × 2`, Mean)**, **M005 (`2 × 1 × 2`, Mean)**, and **M010 (`2 × 2 × 2`)**;
- retain as `needs-additional-evidence` rather than forcing an executable profile: **M003, M006, M007, M008, M009**.

The asymmetric profiles are registered rather than treated as case-specific exceptions. Both yield 8 unordered cross-source QCCS comparisons per representation and declare `required_aggregation: "mean"`. SACRE main now enforces the same rule structurally at Step 5 and in report/export fallback paths: an asymmetric candidate set under Sum cannot publish an official ranking or provisional Final Policy. The guard was merged in SACRE PR #14 at `78d252dcccf7e7fcbebbc4c5bfa6965594442e8a`.

Mean removes deterministic pool-shape bias but does not make scores from different profile shapes statistically interchangeable. Cross-profile score comparisons therefore require explicit caution in the resource methods and later validation work.

M002, M004, M005 and M010 now have concise/detailed records in `data/benchmark` with `benchmark` / `internal-development` / `draft` lifecycle state. Across each pair, the decision question, stipulations and candidate pools are matched; the scenarios differ only in representation detail; canonical hashes are written. CI at `96b4270…` reports 48/48 records valid against schema, content hash, profile registry and corpus invariants, with Featured generator parity and all 180 dossier comparisons preserved, and 18/18 guard probes passing. Automated validity is a structural/provenance/consistency result only. It is not substantive validation, model evaluation, human agreement, freezing or release.

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
