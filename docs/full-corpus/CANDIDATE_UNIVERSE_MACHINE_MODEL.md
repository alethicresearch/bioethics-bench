# Bioethics Bench — Machine Model for Cases, Policies, and Evaluation Setups

**Status:** current implementation model  
**Date:** 2026-08-30

> The filename is retained for compatibility with existing links. New documentation should use the terms **case**, **policy**, **policy type**, **sourcing**, and **evaluation setup**.

## 1. What the machine files need to represent

Bioethics Bench keeps two questions separate:

1. **Which serious policies belong with a case, and how was each policy sourced?**
2. **Which policies are Public, Expert, and Framework positions in a particular SACRE evaluation?**

Keeping these separate prevents a sparse source base from erasing a serious policy and prevents a constructed policy from being presented as a Public or Expert source position.

## 2. The three relevant file types

### A. Case record

Schema: `schemas/case.schema.json`

A case record contains one concise or detailed version of a case and the Public, Expert, and Framework policies used in that evaluation-ready record.

Released records remain unchanged for reproducibility.

### B. Full 200-case policy resource

Schema: `schemas/candidate-universe.schema.json`  
Builder: `scripts/build-rich-candidate-universes.mjs`  
Validator: `scripts/validate-candidate-universe.mjs`  
Generated file: `resources/case-families/full-200-rich-candidate-universes.v1.1.json`

The schema and filenames use older internal names for compatibility. Conceptually, this is simply the **200 cases and their reviewed policies**.

For each case it records:

- case ID and title;
- case review notes;
- policy text;
- exact sourcing note for each policy;
- a coarse sourcing class;
- links to the research and source notes;
- review/action notes.

It does **not** automatically decide that every policy is Public, Expert, or Framework. Policy type is a separate scholarly judgment.

### C. Evaluation setup

Schema: `schemas/projection-manifest.schema.json`

The schema filename uses the older word `projection`; in ordinary language it is an **evaluation setup**. It records:

- which case is being evaluated;
- which policies are included;
- which policies are Public, Expert, and Framework;
- date or jurisdiction where that matters;
- the aggregation setting required by the evaluation;
- links to an earlier case record where applicable.

## 3. Policy type and sourcing are different

**Policy type** is one of:

- Public
- Expert
- Framework

**Sourcing** is one of the following public-facing categories:

- **Direct source** — a source supports substantially the same policy;
- **Inferred from source** — the source supports the underlying view, evidence, guidance, or principle and the Bench states the policy as a careful inference;
- **Constructed** — a serious comparison policy written by the Bench.

A Framework policy may be direct or inferred. A Public or Expert policy may likewise be direct or inferred. Never infer policy type from the sourcing label alone.

## 4. Policy identity and versioning

The 200-case resource uses stable policy IDs such as `c01`, `c02`, and so on within each case.

Existing SACRE-ready records use IDs such as `pub1`, `exp1`, and `fw1`. A reviewed crosswalk links those existing typed policies to the corresponding case-level policies. Numerical suffixes must never be used to guess the mapping.

Adding, removing, merging, splitting, or materially rewriting a policy requires a new version of the 200-case resource. Changing only which reviewed policies are used in a particular evaluation can be versioned separately as an evaluation-setup change.

## 5. Existing SACRE-ready records

Do not mass-rewrite existing records solely to adopt newer terminology.

For an existing case:

1. preserve the existing record;
2. keep the reviewed case-level policies and sourcing;
3. explicitly crosswalk the existing Public / Expert / Framework policies to those case-level policies;
4. record that crosswalk in the evaluation setup;
5. create a new concise/detailed record only when the case text, policy wording, sourcing, stipulations, or another substantive element changes.

## 6. Builder and validation behavior

`node scripts/build-rich-candidate-universes.mjs`

The builder checks that:

- the audits cover exactly M001–M200 once;
- each case has review notes and a complete set of policies;
- each policy has a sourcing note;
- the parsed policy count equals the reviewed count;
- known identity corrections such as M047 are applied.

`node scripts/validate-candidate-universe.mjs` additionally checks the generated file against its schema, case ordering, policy counts and IDs, duplicate policy text, and links to the supporting research files.

## 7. Public / Expert / Framework assignment is not automatic

Assigning a policy type is a substantive research judgment. Do not use text similarity, policy order, or sourcing labels to automatically decide that a policy is Public, Expert, or Framework.

For cases already used in SACRE, the assignment is reviewed against the existing record and sources. For other cases, type assignment should be added only when the research supports it.

## 8. Remaining release work

Before final release:

1. independently review the policies and sourcing across all 200 cases;
2. resolve remaining case crosswalks;
3. confirm Public / Expert / Framework assignments for evaluation-ready cases;
4. update concise/detailed records only where a substantive change is required;
5. verify concise/detailed consistency, sources, sourcing labels, aggregation settings, and hashes;
6. generate final release statistics from the validated files;
7. freeze and version the release.

P3 confirmatory evaluation remains blocked until the exact Bench cases and evaluation setup used by P3 are explicitly frozen and preregistered.
