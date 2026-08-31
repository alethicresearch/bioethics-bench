# Bioethics Bench — Full Corpus v1 Progress

**Branch:** `research/full-corpus-v1`  
**Purpose:** operational research ledger. Inventory IDs are editorial handles, not immutable benchmark IDs.

Status in this file describes construction progress only. `released` remains a separate record lifecycle state and does not imply validation.

## Batch A — current work

| Inventory | Case / working title | Domain | Source packet | Deep case file | Concise | Detailed | Public / affected evidence | Expert evidence | Framework map | Executable eligibility | Review | Featured crosswalk | Notes / blocker |
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

## Batch B — M011–M020

| Inventory | Case / working title | Domain | Source packet | Deep case file | Concise | Detailed | Public / affected evidence | Expert evidence | Framework map | Executable eligibility | Review | Notes / blocker |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| M011 | Expanded access to an investigational intervention | clinical/research translation | audited | drafted | drafted | drafted | substantive patient evidence but not two direct institutional policies | strong conditional FDA/professional architecture | strong | `needs-additional-evidence` | oncology/regulatory/affected-community review pending | Do not turn interest in discussing expanded access into unconditional-access policy. Trial unavailability and non-depletion of enrolled-trial supply are explicit. |
| M012 | Clinician assistance for unproven commercial stem-cell treatment abroad | emerging therapy/medical tourism | audited | drafted | drafted | drafted | strong qualitative heterogeneity; two policy translations appear supportable | professional guidance converges on one non-endorsement + continuity/harm-reduction architecture | strong | provisional `executable-other-profile`: `full-corpus-2x1x2-mean-v1` | independent candidate/provenance review required before transcription | Candidate audit supports 2 public ×1 expert×2 framework; do not equate ordinary records/follow-up with referral or endorsement. |
| M013 | Consent to material trainee participation | consent/medical education | audited | drafted | drafted | drafted | strong role-sensitive patient preferences but no clean institutional-policy split | strong disclosure/opportunity-to-decline architecture | strong | `needs-additional-evidence` | surgical-education/consent review pending | Material supervised resident role; intimate examination deliberately excluded so the case remains nontrivial. |
| M014 | Pregnant patient refuses recommended treatment intended primarily to benefit fetus | reproductive/clinical ethics | audited | drafted | drafted | drafted | respectful-maternity/coercion evidence strong contextually but direct policy comparison limited | very strong consensus to respect capable refusal and avoid coercion | strong/plural frameworks | `needs-additional-evidence` | obstetric/reproductive-justice/legal review pending | Do not manufacture an expert override candidate from philosophical dissent. Capacity, fetal benefit, maternal burden and time are fixed. |
| M015 | Pediatric practice policy after persistent routine-vaccine refusal | pediatrics/public health | audited | drafted | drafted | drafted | vaccine-hesitancy/trust evidence strong; direct dismissal-policy preference limited | genuine professional-practice variation; AAP permits guarded dismissal | strong | `needs-additional-evidence` | pediatrics/affected-community/access review pending | Separate practice relationship from school/state mandate; no current outbreak; safe transfer is stipulated. |
| M016 | Parents refuse high-benefit curative cancer therapy for child | pediatric oncology | audited | drafted | drafted | drafted | strong family decision-making evidence but indirect for state-intervention policy | strong harm-threshold/last-resort architecture | strong | `needs-additional-evidence` | pediatric-oncology/child-ethics/legal review pending | Approx. 85–90% cure is a constructed case parameter, not a universal cancer claim; short safe negotiation window fixed. |
| M017 | Reserve antimicrobial for present patient versus stewardship | infectious disease/One Health | audited | drafted | drafted | drafted | public AMR concern directly relevant but restriction-policy translation still indirect | strong stewardship/preauthorization architecture | strong | `needs-additional-evidence` | ID/stewardship/One Health review pending | Reserve drug has meaningful but non-overwhelming individual advantage; alternative remains real; no precise one-course future harm invented. |
| M018 | Patient-requested antibiotics under genuine diagnostic uncertainty | outpatient stewardship | audited | drafted | drafted | drafted | strong heterogeneous expectations; delayed prescribing has direct patient-acceptability evidence | two distinct defensible strategies: no immediate vs delayed prescription | strong | provisional `executable-2x2x2` | primary-care/candidate-provenance review required before transcription | Candidate audit supports 2×2×2; no expert immediate-antibiotic candidate is manufactured. |
| M019 | Telemedicine access versus in-person diagnostic safety | digital health/rural access | audited | drafted | drafted | drafted | strong context-sensitive access vs examination preferences | professional guidance converges on risk-triggered hybrid | strong | provisional `executable-other-profile`: `full-corpus-2x1x2-mean-v1` | clinical/telemedicine/affected-patient review required before transcription | Concrete rural wrist-injury presentation; candidate audit supports 2 public ×1 expert×2 framework. |
| M020 | Clinician duty to work during dangerous outbreak | professional/public-health ethics | audited | drafted | drafted | drafted | strong affected-worker heterogeneity in duty/risk/family obligations | distinguishable strong-duty and individualized-limit architectures within reciprocal-protection boundary | strong | provisional `executable-2x2x2` | occupational-health/affected-worker candidate review required before transcription | Strongest Batch-B symmetric candidate; appropriate PPE/protection and real residual risk are both stipulated. |

## Batch B eligibility snapshot

Batch B now has a source packet, ten complete deep-case drafts, matched concise/detailed representations, and a candidate-level audit for the four families whose evidence appears executable. **No Batch-B machine-readable record has been created.** This is deliberate: the partner/reviewer should independently audit the candidate translations before transcription.

Provisional structure after candidate audit:

- **M012:** `2 public × 1 expert × 2 framework` → existing `full-corpus-2x1x2-mean-v1` profile;
- **M018:** `2 × 2 × 2` appears supportable;
- **M019:** `2 public × 1 expert × 2 framework` → existing `full-corpus-2x1x2-mean-v1` profile;
- **M020:** `2 × 2 × 2` appears supportable;
- **M011, M013, M014, M015, M016, M017:** retain as `needs-additional-evidence` rather than manufacturing source-class disagreement.

No new profile is required by Batch B. The only asymmetric shape identified is already registered and Mean-pinned. The candidate audit is at `docs/full-corpus/batch-b/M012-M018-M019-M020-candidate-audit.md` and should be the partner's principal review target before any JSON transcription.

The pattern is methodologically useful: several philosophically rich cases have strong professional consensus and therefore remain non-executable under the present source architecture. Executable status is not treated as a measure of philosophical importance or research completeness.

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
