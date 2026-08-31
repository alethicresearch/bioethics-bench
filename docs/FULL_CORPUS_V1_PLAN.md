# Bioethics Bench — 200-Case Release Plan

**Status:** current  
**Scope:** complete the scholarly review and release of the 200 Bioethics Bench cases.

## 1. Current state

Bioethics Bench contains **200 cases (M001–M200)** and **1,298 policies**.

Each case has:

- a concise version;
- a detailed version;
- a set of serious policies;
- at least one **Public** policy;
- at least one **Expert** policy;
- at least one **Framework** policy;
- a sourcing label for each policy: **Direct source**, **Inferred from source**, or **Constructed**;
- a scholarly source file with supporting material and review notes.

The current machine-readable public file is:

`resources/cases/full-200-cases.v1.json`

`npm run validate` checks that all 200 cases and all 1,298 policies are present and that every case contains Public, Expert, and Framework policies.

## 2. The basic model

The Bench uses four simple ideas.

### Case

One bioethics problem.

### Policy

One possible position or course of action for that case.

### Policy type

The type says what kind of perspective the policy represents:

- **Public**
- **Expert**
- **Framework**

### Sourcing

Sourcing says how the policy was identified:

- **Direct source**
- **Inferred from source**
- **Constructed**

Policy type and sourcing are separate. A Framework policy may be directly sourced or inferred. Public and Expert policies may likewise be direct or inferred. A Constructed policy must remain visibly identified as constructed.

## 3. Concise and detailed versions

The concise and detailed versions should describe the same case with different amounts of context.

They should preserve the same:

- ethical problem;
- decision-critical facts;
- assumptions;
- policies;
- policy types;
- sourcing.

The detailed version may explain more. It should not silently change the decision.

## 4. Categories

The 200 cases are organized for browsing under:

- Clinical care
- Children & families
- End of life
- Reproduction & genetics
- Research ethics
- Public health & allocation
- Transplantation & donation
- Global health
- Mental health & disability
- Neuroethics
- AI & health data
- Animals & One Health
- Climate & environment
- Everyday practice

These categories are for navigation. They do not determine the policy type or sourcing.

## 5. What remains before release

The case-and-policy research pass is complete. The remaining work is review and release work.

### 5.1 Source review

For each policy, confirm:

- the cited source can be located;
- the source is being used for the right purpose;
- Direct / Inferred / Constructed is accurate;
- a Direct policy does not say more than the source supports;
- an Inferred policy has a clear and defensible reasoning bridge;
- a Constructed policy is not presented as an observed public, professional, or authorial position.

### 5.2 Policy-type review

Confirm that Public / Expert / Framework accurately describes the role of each policy in the intended evaluation.

Do not create a Public or Expert policy merely to fill a column.

### 5.3 Policy-quality review

Confirm that policies are:

- genuinely distinct;
- serious and defensible positions;
- stated at comparable levels of specificity;
- not near-paraphrases;
- not artificial extremes;
- not composites that hide several separate policies.

### 5.4 Case review

Confirm that:

- the ethical problem is clear;
- necessary facts are present;
- uncertainty is visible where it matters;
- assumptions are explicit;
- jurisdiction and time are handled appropriately;
- the wording does not decide the issue in advance;
- an informed non-specialist can understand the case.

### 5.5 Concise/detailed review

Confirm that the two versions remain matched descriptions of the same case.

### 5.6 Independent review

Complete independent scholarly or domain review before the formal release is frozen.

## 6. Using the cases in SACRE

A Bench case can be loaded into SACRE as a new evaluation.

Loading a case adds:

1. the selected concise or detailed case description;
2. its Public policies;
3. its Expert policies;
4. its Framework policies.

SACRE is deliberately simple about this. Users who want source details, sourcing labels, or fuller research notes can open the same case on Bioethics Bench.

The Bench website and SACRE use the same 200-case resource so the case list does not need to be maintained twice.

## 7. More than one evaluation setup

A case may support different legitimate evaluation setups for different studies.

One study might use all reviewed policies. Another might select only a subset. A controlled study might hold the number of Public, Expert, and Framework policies fixed across cases.

Each study should record exactly which policies it used. The underlying Bench case remains the same.

## 8. Unequal policy counts

Cases do not need equal numbers of Public, Expert, and Framework policies.

Where the counts are unequal, an evaluation should use an aggregation rule that does not give a policy a numerical advantage simply because it has more cross-type comparison partners.

Older machine fields may call these counts a `geometry`. Current prose should simply say **policy counts**.

## 9. Released earlier examples

Earlier released records remain unchanged for reproducibility. If an older released record differs from the current 200-case research file, preserve the released record and make any substantive correction through an explicit later version.

Known case-identity repairs include:

- M047 — permanent contraception requested by a young childfree adult;
- M187 — adolescent EHR and patient-portal confidentiality.

Known crosswalks to earlier Featured IDs should remain recorded so the same case is not counted twice.

## 10. Release checklist

The 200-case release can be frozen when:

1. all 200 cases pass structural validation;
2. all 1,298 policies have reviewed sourcing;
3. Public / Expert / Framework assignments are reviewed;
4. concise and detailed versions are confirmed to match;
5. citation and locator checks pass;
6. rights and licensing checks pass;
7. independent scholarly/domain review is complete;
8. release statistics and checksums are generated;
9. an immutable commit or tag is identified;
10. citation metadata and release notes are finalized.

## 11. What the release will and will not establish

The release will establish that the cases and policies have been constructed, sourced, reviewed, versioned, and made reproducible to the stated standard.

It will not establish that:

- any policy is morally correct;
- any SACRE ranking is a moral answer key;
- human and model judgments will agree;
- one model is morally superior to another.

Those are separate empirical and philosophical questions.

## 12. Legacy names

Some older filenames, scripts, and machine fields still contain terms such as `case_family`, `candidate_universe`, `projection`, or `geometry`. They are retained where changing them would break existing hashes, scripts, or historical reproducibility.

New documentation, the website, and SACRE should use **case**, **policy**, **policy type**, **sourcing**, **case version**, and **evaluation setup**.
