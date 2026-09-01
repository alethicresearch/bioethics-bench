# Bioethics Bench

Bioethics Bench is a research resource of **200 bioethics cases** with clearly stated policy options and sources.

🌐 **Website:** [bioethicsbench.com](https://bioethicsbench.com)  
📄 **Resource card:** [`docs/RESOURCE_CARD.md`](docs/RESOURCE_CARD.md)  
🧪 **SACRE evaluation task:** [`sacre-qccs-v1`](docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md)

## What is in a case

Each case contains:

- a bioethics problem;
- a concise and detailed version of the case where both are available;
- a set of serious policy options;
- sourcing information for each policy;
- citations and supporting notes;
- version and review information.

### Policy type

When policies are prepared for a SACRE evaluation, each policy is assigned one of three types:

- **Public** — a position representing public, patient, affected-community, or stakeholder views;
- **Expert** — a position representing professional, scientific, clinical, legal, or governance guidance;
- **Framework** — a position representing an ethical framework or principle.

### How a policy was sourced

Policy type is separate from sourcing. A policy can be:

- **Direct source** — a source supports substantially the same policy;
- **Inferred from source** — the source supports the underlying view, evidence, or principle and the Bench states the policy as a careful inference;
- **Constructed** — a serious comparison policy written by the Bench and clearly marked as constructed.

A Framework policy, for example, may be directly sourced from a published framework or inferred from a principle. Public and Expert policies can likewise be direct or inferred.

## The 200 cases

The full research set contains **200 cases (M001–M200)** across clinical care, children and families, end-of-life care, reproduction and genetics, research ethics, public and global health, transplantation, mental health and disability, neuroethics, AI and health data, animals and One Health, climate and environment, and everyday clinical practice.

The case-level research pass is complete. Every case carries all three policy types and can be loaded into SACRE as it stands: **1,436 policies** across the 200 cases, each with a concise and a detailed form, and each labelled with how it was sourced.

Filling out the three types meant writing policies for the cases that lacked one. **138 of the 1,436 policies are Bench-written comparison policies**, marked as such wherever they appear. Twelve cases record their own judgement that the evidence did not support writing a pool of them; that judgement is kept with the case rather than overruled.

Policy type is recorded for every policy and reviewed for 108. Each policy publishes which route assigned its type — confirmed in a crosswalk, carried over from the case record, read from the policy wording, or set when the Bench wrote it — so a checked label is distinguishable from an inferred one. [`docs/REVIEW_QUEUE.md`](docs/REVIEW_QUEUE.md) orders the remaining review by consequence: the Bench-written policies, the twelve cases whose files objected to a pool, then the cases resting on one or two citations.

The machine-readable files are `resources/cases/full-200-cases.v1.json` (cases and policies), `resources/cases/case-sources.v1.json` (651 case citations, 208 policy citations), `resources/cases/composition.v1.json` (what the collection is made of, counted) and `resources/cases/source-index.v1.json` (the bibliography inverted: each source and the cases that draw on it, behind [the source explorer](https://bioethicsbench.com/cases/sources/explorer/)). [`docs/COMPOSITION.md`](docs/COMPOSITION.md) and [bioethicsbench.com/cases/sources/](https://bioethicsbench.com/cases/sources/) publish the same figures: 7% of policies are directly sourced, two thirds inferred, a quarter constructed, and the directly sourced ones are almost all Expert.

## Concise and detailed versions

A case may have:

- a **concise** version for quick reading and evaluation;
- a **detailed** version with more factual context.

The two versions describe one case and share its policies. Each policy is itself written twice, concise and detailed, so a detailed case is read against detailed policies rather than against summaries of them.

## Using Bioethics Bench with SACRE

SACRE can load a Bench case directly into an evaluation. Loading a case adds:

1. the case description;
2. its **Public** policies;
3. its **Expert** policies;
4. its **Framework** policies.

Users who want source details, fuller case notes, or the broader 200-case collection can open the case on the Bioethics Bench website.

## Benchmark study results

Bench cases are scored in SACRE under QCCS v1 with the `conv+` protocol: every cross-source policy
pair in a case is asked how far the two converge on what to do. Because each pair is an independent
call, the corpus can be scored model by model.

Results are published at **[bioethicsbench.com/study](https://bioethicsbench.com/study/)**. The page
shows the full study design — 200 cases, two representations, ten models, three repeats — a
completion matrix of which cells have been executed, and the dashboard for whatever has been
published: score distribution, concise-versus-detailed comparison, failed calls by error kind, and
the cases where cross-source policies pull furthest apart.

Everything there is provisional and marked as such. A single execution of a pair is one draw, not a
reliability estimate, and until the repeats exist a difference between two models or two
representations is not separable from run-to-run variation. The design is shown first so a partial
result reads as a fraction of a known whole rather than as a finding.

Reports are fetched live from the SACRE study API, so publishing a run updates the page without a
site change. The report JSON and the pair-level scores behind it are linked from the page itself.

## Source and review information

The repository keeps the source trail behind each policy. This includes article, guideline, professional-statement, survey, legal, governance, and ethical-framework sources where relevant.

A citation being correctly identified does not by itself establish that the source supports every word of a policy. Source-to-policy review therefore remains a substantive scholarly step. Constructed policies must remain visibly identified as constructed.

## Validation status

The repository checks file structure, identifiers, hashes, links between concise and detailed versions, policy IDs, citations, and compatibility with the SACRE loader.

These checks support reproducibility. They do not establish that:

- a policy is morally correct;
- a SACRE result is a moral answer key;
- human and model judgments will agree;
- every source-to-policy inference has completed independent scholarly review.

Those questions belong to the planned validation studies and final release review.

## Repository structure

```text
.
├── schemas/                # Machine-readable file definitions
├── tasks/                  # Evaluation task definitions
├── docs/                   # Case research, sourcing, review and release documents
├── resources/              # Full 200-case research files
├── data/
│   ├── tutorial/           # Teaching examples
│   ├── featured/           # Earlier released examples retained for reproducibility
│   ├── development/        # Development material
│   ├── stress-tests/       # Robustness cases
│   └── benchmark/          # Cases currently prepared for direct evaluation
├── scripts/                # Build, validation and review tools
├── releases/               # Versioned release material
├── analyses/               # Reproducible analyses when available
├── cases/                  # The case browser published at bioethicsbench.com/cases/
├── study/                  # Published study results at bioethicsbench.com/study/
├── archive/                # Earlier versions of the site, kept at /archive/v1 … /archive/v6
├── CONTENT-LICENSE.md
├── CITATION.cff
└── index.html
```

Some legacy filenames and JSON field names still contain terms such as `family`, `candidate_universe`, or `projection`. They are retained where changing them would break existing hashes, scripts, or reproducibility. New documentation and interfaces use **case**, **policy**, **policy type**, **sourcing**, and **evaluation setup**.

## Key documents

| Document | Purpose |
|---|---|
| [`docs/README.md`](docs/README.md) | Which documents govern current work and which record past work |
| [`docs/REVIEW_QUEUE.md`](docs/REVIEW_QUEUE.md) | What is left to review, ordered by consequence |
| [`docs/COMPOSITION.md`](docs/COMPOSITION.md) | What the collection is made of, counted from the published files |
| [`docs/RESOURCE_CARD.md`](docs/RESOURCE_CARD.md) | Scientific description, uses and limits |
| [`docs/CASE_CONSTRUCTION_STANDARD.md`](docs/CASE_CONSTRUCTION_STANDARD.md) | Rules for writing cases and policies |
| [`docs/CORPUS_AUTHORING.md`](docs/CORPUS_AUTHORING.md) | Machine-enforced authoring rules |
| [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) | Review and release rules |
| [`docs/VERSIONING.md`](docs/VERSIONING.md) | Version and content-hash rules |
| [`docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`](docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md) | How SACRE evaluates a loaded case |
| [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) | Rights for Bench-authored content |

## Manuscript

The standalone paper in development is:

> **Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics**

The submission manuscript is maintained in the broader research-program workspace. Repository documents provide the case data, source trail, review material, and release checks behind the paper.

## Citation and license

Repository-level citation metadata are provided in [`CITATION.cff`](CITATION.cff).

Bench-authored case content is licensed **CC BY 4.0**, copyright Alethic Research. Cited third-party articles, guidelines, surveys, statutes, reports, and other source material retain their own rights. See [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

## Related projects

- **[SACRE](https://github.com/xnuxi/sacre-prototype)** — application for evaluating cases and policies
- **[ReflectiveEquilibrium.AI](https://reflectiveequilibrium.ai)** — interactive research application
- **[Alethic-ISM](https://github.com/alethicresearch/alethic-ism)** — reproducible computation infrastructure
- **[Doing Ethics with AI](https://alethicresearch.github.io/doing-ethics-with-ai/)** — broader research program

## Contact

[research@alethic.ai](mailto:research@alethic.ai)
