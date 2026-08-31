# Coordinator Directive — Bioethics Bench

**Current objective:** complete scholarly review and release of the 200 Bioethics Bench cases, keep the public website simple, and keep SACRE loading simple.

## Use these terms

Use ordinary language in current documentation, code comments, the website, and SACRE integration:

- **Case** — one bioethics problem.
- **Policy** — one possible position or course of action.
- **Policy type** — **Public**, **Expert**, or **Framework**.
- **Sourcing** — **Direct source**, **Inferred from source**, or **Constructed**.
- **Case version** — concise or detailed wording of the same case.
- **Evaluation setup** — the case and selected Public, Expert, and Framework policies used in an evaluation.

Policy type and sourcing are different properties. A Framework policy can be directly sourced or inferred. Public and Expert policies can also be direct or inferred. A Constructed policy must remain visibly identified as constructed.

Avoid current explanatory use of **case family**, **candidate universe**, **candidate geometry**, **normative research object**, **projection**, **source ecology**, and similar shorthand when the terms above say the same thing more clearly.

Some legacy filenames, JSON fields, scripts, archived records, and historical research notes still contain older terms. Keep those only where renaming would break compatibility, hashes, or reproducibility. Do not copy that language into new prose.

## Current Bench state

Bioethics Bench contains **200 cases (M001–M200)** and **1,298 policies**.

The current public machine-readable case file is:

`resources/cases/full-200-cases.v1.json`

Every case in that file has:

- a concise version;
- a detailed version;
- a set of policies;
- a current Public, Expert, or Framework type assignment for each policy;
- a sourcing label for every policy;
- a link to the supporting research file.

The current type assignments are a preview layer and remain subject to scholarly release review. The number and mix of Public, Expert, and Framework policies vary naturally by case. Some cases do not currently contain all three types. Do not manufacture a missing Public, Expert, or Framework policy merely to make a case symmetrical.

The case-and-policy research pass is complete. Remaining work is scholarly review and release work: source checking, policy-type checking, concise/detailed consistency, citation review, independent review, release statistics, and final freeze/versioning.

## Public website

The current design candidate is `/v6/`.

Its public story is deliberately simple:

> **200 cases in bioethics. Each case has policies. Policies are identified as Public, Expert, or Framework positions, and each policy is labeled by how it was sourced.**

The website should provide:

- a simple overview page;
- topic categories directly below the hero;
- a separate Cases page;
- search;
- category selectors;
- Policy type filters: Public / Expert / Framework;
- Sourcing filters: Direct source / Inferred from source / Constructed;
- concise / detailed case switching;
- clear policy lists;
- links to supporting source material;
- a simple **Load in SACRE** action.

Do not put development history, internal gates, manuscript state, old subset counts, or research-coordination terminology on the public page.

## SACRE integration

SACRE should treat Bioethics Bench as a case library.

A user should be able to:

1. open the examples/cases library;
2. choose **Bioethics Bench**;
3. search or filter the cases;
4. choose concise or detailed wording;
5. load the case;
6. have its currently assigned Public, Expert, and Framework policies appear in the evaluation setup.

If one policy type is absent, SACRE should show that plainly and load the policies that are available. It must not create a missing type automatically. A complete three-type SACRE evaluation requires at least one Public, Expert, and Framework policy.

SACRE should stay concise. Users who want source details, sourcing labels, fuller notes, or wider exploration should follow the link to the corresponding case on Bioethics Bench.

Do not show policy-pair counts, geometry language, corpus lineages, internal release notes, hashes, or source-construction mechanics in the ordinary case picker.

## Current review rules

For every case:

### Case

Confirm that the ethical problem is understandable, sufficiently specified, and neutral enough that the wording does not decide the issue in advance.

### Policies

Confirm that the policies are serious, genuinely distinct, and stated at comparable levels of specificity. Avoid near-paraphrases, minor caveat variants, artificial extremes, and compromise policies that hide several distinct positions.

### Policy type

Confirm that Public / Expert / Framework accurately describes the kind of position represented.

Do not infer policy type merely from the sourcing label. Do not add a policy just to fill a missing type.

### Sourcing

Use:

- **Direct source** when the source supports substantially the same policy;
- **Inferred from source** when the source supplies the underlying view, evidence, guidance, preference, or principle and the policy is a careful inference;
- **Constructed** when the Bench adds a serious comparison policy.

Never present an inferred or constructed policy as if a public group, professional body, or named author directly endorsed it.

### Concise and detailed versions

The two versions should describe the same case and retain the same policies, policy types, and sourcing. The detailed version may add context without changing the decision.

## Case identity rules

- Released Featured v1 records remain unchanged for reproducibility.
- M047 now means **permanent contraception requested by a young childfree adult**; the former abortion-conscience version is retired as duplicative of M007.
- M187 now means **adolescent EHR and patient-portal confidentiality**; the former bedside-confidentiality version is retired as duplicative of M004.
- Preserve crosswalks to earlier released case IDs where the same case appeared under another identifier.

## Reading order

For current work, read:

1. `AGENTS.md`
2. `README.md`
3. `docs/FULL_CORPUS_V1_PLAN.md`
4. `docs/CANDIDATE_POLICY_SPACE_AUDIT.md`
5. `docs/RESOURCE_CARD.md`
6. `docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`
7. the current manuscript blueprint in the program Drive when manuscript work is requested.

Historical batch notes, old release plans, old website versions, and older machine-model files may be consulted for provenance or reproducibility, but they do not define current terminology.

## Remaining release work

Complete in this order:

1. review all policy sourcing;
2. review Public / Expert / Framework assignments without filling missing types artificially;
3. check concise/detailed consistency;
4. complete citation and source-locator checks;
5. complete independent scholarly/domain review;
6. generate release statistics and checksums from the validated files;
7. freeze a versioned 200-case release;
8. update manuscript placeholders with the final observed release results;
9. only then freeze the exact Bench cases/evaluation setup used for P3 and proceed through its separate preregistration and authorization gate.

## Evidence boundary

A completed Bench release will establish that the cases and policies were constructed, sourced, reviewed, versioned, and made reproducible to the stated standard.

It will not establish that any policy is morally correct, that any SACRE ranking is a moral answer key, or that human and model judgments agree. Those remain separate philosophical and empirical questions.
