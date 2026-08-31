# Bioethics Bench — Resource Card

**Status:** development resource / manuscript submission snapshot in preparation  
**Last updated:** 2026-08-31  
**Repository:** https://github.com/alethicresearch/bioethics-bench  
**Project site:** https://bioethicsbench.com  
**Standalone manuscript:** *Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics*

## 1. What Bioethics Bench is

Bioethics Bench is a versioned collection of **200 bioethics cases**. Each case states an ethical problem, identifies serious policy options, records how those policies were sourced, and links the policies to supporting material.

The resource is designed for computational and human studies in bioethics. It does not provide a moral answer key.

A Bench case can be used on its own for reading and comparison, or loaded into an evaluation such as SACRE once the relevant policies have been assigned the appropriate **Public**, **Expert**, and **Framework** types.

## 2. What a case contains

A case can include:

- a title and case ID;
- a concise description;
- a detailed description;
- policy options;
- the sourcing for each policy;
- citations and source notes;
- any assumptions needed to make the case clear enough to evaluate;
- version, review, and rights information.

The concise and detailed descriptions are intended to present the same underlying ethical problem with different amounts of factual context.

## 3. Policy type

When a case is prepared for SACRE, policies are assigned one of three types:

- **Public** — a position representing public, patient, affected-community, or stakeholder views;
- **Expert** — a position representing professional, scientific, clinical, legal, or governance guidance;
- **Framework** — a position representing an ethical framework or principle.

These types describe the role a policy plays in an evaluation.

## 4. How policies are sourced

Policy type is separate from sourcing. Bioethics Bench uses three plain sourcing labels in the public interface:

- **Direct source** — a source supports substantially the same policy;
- **Inferred from source** — a source supports the underlying view, evidence, guidance, preference, or principle and the Bench states the policy as a careful inference;
- **Constructed** — a serious policy option written by the Bench for comparison and clearly identified as constructed.

A Framework policy can be directly sourced or inferred from a framework. Public and Expert policies can also be direct or inferred. A sourcing label must never be used to guess a policy's Public / Expert / Framework type.

The repository retains more detailed scholarly notes behind these three public labels where a finer description is useful.

## 5. Current 200-case resource

The full research set contains **200 cases (M001–M200)** across:

- clinical care;
- children and families;
- end-of-life care;
- reproduction and genetics;
- research ethics;
- public health and allocation;
- transplantation and donation;
- global health;
- mental health and disability;
- neuroethics;
- AI and health data;
- animals and One Health;
- climate and environment;
- everyday clinical and professional practice.

The case-and-policy research pass is complete. The current machine-readable 200-case file contains **1,436 policies**, each with a concise and a detailed form and a sourcing label. 138 of them are Bench-written comparison policies, marked as such, added so that every case carries all three policy types. Policy type has been reviewed for 108 policies; the rest are assigned from the case record and marked unreviewed. Final release work includes scholarly review of policy sourcing, the remaining Public / Expert / Framework assignments, concise/detailed consistency, citations, and release checks.

## 6. Cases currently loadable in SACRE

SACRE can load any of the 200 cases; each supplies Public, Expert, and Framework policies.

Loading one of these cases adds:

1. the case description;
2. its Public policies;
3. its Expert policies;
4. its Framework policies.

The SACRE examples library keeps this presentation simple. Users can open Bioethics Bench for source details, sourcing labels, fuller case notes, and the broader 200-case collection.

## 7. Number of policies and pairwise comparison

Cases do not need to contain the same number of Public, Expert, and Framework policies.

If an evaluation contains:

- `P` Public policies;
- `E` Expert policies;
- `F` Framework policies;

then SACRE compares:

`P×E + P×F + E×F`

cross-type policy pairs.

When the three policy types contain different numbers of policies, Mean aggregation is used where necessary so a policy does not receive an automatic numerical advantage simply because it has more comparison partners.

Some legacy code and data fields call the three policy counts a `geometry`. Current explanatory prose should simply say **number of policies**, **policy counts**, or **evaluation setup**.

## 8. Concise and detailed versions

Where a case has matched concise and detailed versions, the two versions should preserve:

- the same ethical problem;
- the same policy options;
- the same sourcing;
- the same stated assumptions.

The detailed version adds context; it should not silently turn the case into a different decision.

This allows studies to test whether additional context changes human or model judgments while holding the policies fixed.

## 9. Stated assumptions

Some cases include explicit assumptions that make a hypothetical decision sufficiently clear to evaluate. These assumptions are part of the case design and are not presented as empirical claims about the world.

Examples include a stipulated level of safety, a fixed resource constraint, or a future technology assumed to have reached a specified threshold.

Any such assumption should be visible in the case text rather than hidden in metadata.

## 10. Source traceability

The current SACRE-ready records contain **242 unique citations**. The repository includes identifier and locator checks for journal articles, guidelines, statutes, reports, books, surveys, and other sources.

For PMID-bearing citations, the current resource records 130 PMIDs, with 130/130 resolving consistently in the latest locator check.

A correct citation or locator establishes that the source can be found. It does **not** by itself establish that the source supports every word of the associated policy. Source-to-policy review is therefore a separate scholarly task.

## 11. SACRE / QCCS evaluation

The first mature evaluation method used with the Bench is `sacre-qccs-v1`.

SACRE compares Public, Expert, and Framework policies across policy types using QCCS v1.0.0 on the `conv+` scale. A complete set of required pairwise comparisons is needed before an official ranking is produced.

The technical task contract is in:

`docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`

The Bench itself remains useful independently of SACRE. A case, its policies, and their sources can be inspected without running any computational evaluation.

## 12. Validation and review state

### Available now

- machine-readable schema validation;
- case and policy identifiers;
- content hashes and version checks;
- concise/detailed companion checks for evaluation-ready records;
- citation and locator checks;
- checks that required SACRE policy types are present in evaluation-ready records;
- checks of pair counts and aggregation settings;
- source and review notes for the 200-case research set.

### Still required for final scholarly release

- independent source-to-policy review across the full 200-case resource;
- final review of Direct / Inferred / Constructed sourcing labels;
- final Public / Expert / Framework assignments for cases intended for direct SACRE loading;
- final concise/detailed consistency review;
- final release statistics and checksums;
- independent scholarly/domain review.

These checks do not establish moral correctness of any policy or any SACRE result.

## 13. Appropriate uses

Bioethics Bench can support:

- comparison of ethical policies;
- computational-bioethics method development;
- human and model studies using the same cases and policies;
- studies of source use and policy construction;
- studies of concise versus detailed case descriptions;
- repeated evaluations across models or people;
- reproducibility and sensitivity analyses;
- teaching and methodological illustration.

## 14. Uses that are not supported

Bioethics Bench should not be treated as:

- a set of morally correct answers;
- clinical, legal, or ethics advice for a real individual case;
- evidence that a model is morally superior because it agrees with one computational ranking;
- a substitute for independent review of the cited sources;
- a hidden answer key for later evaluation.

## 15. Versioning and reproducibility

A citation to a specific evaluation-ready Bench record should identify its record ID, version, and content hash. A computational result should also identify the case and policies that were evaluated, the QCCS version, the model or human condition, and the aggregation setting.

Legacy machine-readable fields and filenames may still contain terms such as `case_family_id`, `candidate_universe`, `projection`, or `geometry`. They are retained where changing them would break existing hashes, scripts, or historical reproducibility. New documentation and interfaces should translate them into **case**, **policy**, **evaluation setup**, and **policy counts**.

## 16. Rights and licensing

Bench-authored case content is licensed **CC BY 4.0**, as specified in `CONTENT-LICENSE.md`. Third-party source material retains its own rights and is cited or summarized rather than relicensed.

## 17. Release status

The resource remains under final scholarly and release review. A formal release should identify an immutable repository commit or tag, machine-readable checksums, stable citation metadata, and the review state of the released files.

See `docs/ARCHIVAL_RELEASE_PLAN.md` for the archival-release checklist.
