# Bioethics Bench

A developing, versioned evaluation corpus and benchmark framework for studying
**normative computation** across clinical, research, public health, and other
bioethical domains.

🌐 **Live site:** [bioethicsbench.com](https://bioethicsbench.com)
&nbsp;·&nbsp; [alethicresearch.github.io/bioethics-bench](https://alethicresearch.github.io/bioethics-bench)

> **Status: In Development.** Bioethics Bench is being constructed prospectively.
> No current repository release should be treated as a validated benchmark or a
> source of morally correct answers.

---

## About

Bioethics Bench is the prospective empirical corpus for the broader normative-
computation research program around **SACRE** (Structurally Analyzed Collective
Reflective Equilibrium). Future released records will pair a bioethical scenario
with versioned policy candidates drawn from public preferences, expert judgments,
and ethical frameworks, together with explicit provenance and declared evaluation
conditions.

SACRE compares represented policy candidates through pairwise normative convergence
and aggregates those relations into candidate coherence profiles under a declared
procedure. The highest-ranked represented candidate is the provisional Final Policy
for that analysis; neither a SACRE score nor agreement with a benchmark establishes
moral truth by itself.

The repository is being organized so that tutorial material, protocol-development
cases, stress tests, and future released benchmark records are not silently mixed.
Historical SACRE application examples are preserved in the SACRE repository archive
and are **not** being promoted into the active Bioethics Bench dataset.

## Repository structure

```text
.
├── schemas/                # Versioned case / manifest / result schemas
├── docs/                   # Data card, governance, construction and release rules
├── data/
│   ├── tutorial/           # Non-benchmark teaching objects
│   ├── featured/           # The public Featured Collection
│   ├── development/        # Prospective protocol-development cases
│   └── stress-tests/       # Deliberate perturbation / robustness cases
├── scripts/                # Canonical hashing + schema validation
├── releases/               # Immutable public releases when ready
├── analyses/               # Reproducible release analyses when available
├── index.html              # Project landing page
├── assets/
├── CNAME
└── .github/workflows/
```

A confirmatory holdout is intentionally **not** stored publicly before confirmatory
execution is complete.

## Record principles

Every empirical record should ultimately have stable identifiers, versions, content
hashes, scenario and candidate provenance, source-pool labels, exposure history,
review status, and an explicit intended-use designation. Substantive changes to a
frozen or released record create a new version rather than overwriting the old one.

See [`docs/CASE_CONSTRUCTION.md`](docs/CASE_CONSTRUCTION.md),
[`docs/GOVERNANCE.md`](docs/GOVERNANCE.md), and
[`docs/VERSIONING.md`](docs/VERSIONING.md).

## Documents

| Document | What it settles |
|---|---|
| [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) | Collections, release principles, what may be mixed with what |
| [`docs/VERSIONING.md`](docs/VERSIONING.md) | Record identity and the canonical JCS + SHA-256 content hash |
| [`docs/CASE_CONSTRUCTION_STANDARD.md`](docs/CASE_CONSTRUCTION_STANDARD.md) | How a case is built and what makes a candidate executable |
| [`docs/CORPUS_AUTHORING.md`](docs/CORPUS_AUTHORING.md) | **What the checks enforce.** Read before authoring records outside Featured v1 |
| [`docs/FEATURED_V1_DECISIONS.md`](docs/FEATURED_V1_DECISIONS.md) | Featured v1 size, representation pairs, required animal ethics |
| [`docs/FEATURED_V1_SELECTION.md`](docs/FEATURED_V1_SELECTION.md) | The 20 Featured case families and why each is in v1 |
| [`docs/featured-v1-research/`](docs/featured-v1-research/) | Case dossiers and the source/provenance ledger — the editorial source of truth for case text |
| [`docs/EXECUTION_PLAN.md`](docs/EXECUTION_PLAN.md) | **Proposal, awaiting review.** How records get executed at corpus scale: architecture, the five guards, phased spend, and the open storage/exposure questions |
| [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) | CC BY 4.0 on Bench-authored case text, and what it does not cover |

The review → decision → implementation cycle for this corpus is recorded in the SACRE
repository, because the two move together. Start at
[**`docs/research-program/reviews/OPEN_DECISIONS.md`**](https://github.com/xnuxi/sacre-prototype/blob/claude/normative-computation-research-f6zfep/docs/research-program/reviews/OPEN_DECISIONS.md)
— every question awaiting the research reviewer, what it blocks, and where the current
work actually lives in each repository.

## Relationship to the research program

| Component | Role |
|---|---|
| **SACRE** | Formal procedure for representing candidates, eliciting pairwise normative convergence, aggregating coherence, and returning a provisional Final Policy under a declared procedure. |
| **ReflectiveEquilibrium.AI** | Interactive research application for running, inspecting, comparing, revising, sharing, and fielding SACRE evaluations. |
| **Alethic-ISM** | Computation substrate/workbench for inspectable, provenance-preserving analytic execution. |
| **Bioethics Bench** | Prospective versioned corpus and benchmark framework for empirical study of normative computation. |
| **SACRE-FT** | Model-development layer that may use suitably released evaluation outputs as training objects. |

## Current phase

The immediate research sequence is:

1. finalize the current QCS/QCCS and SACRE specification;
2. finalize the clean P1 tutorial and P2 demonstration objects;
3. freeze the executable research object;
4. construct and pilot fresh Bioethics Bench development cases;
5. freeze a separate confirmatory design/holdout;
6. conduct P3 reliability, human-comparison, perturbation, and iteration studies;
7. release appropriate data, protocols, analyses, and checksums.

## Related projects

- **[ReflectiveEquilibrium.AI](https://reflectiveequilibrium.ai)** — deployed SACRE application
- **[Alethic-ISM](https://github.com/alethicresearch/alethic-ism)** — analytic computation workbench
- **[Doing Ethics with AI](https://alethicresearch.github.io/doing-ethics-with-ai/)** — research program companion

## License

**Bench-authored case content — scenario text, decision questions, policy candidates,
provenance summaries and benchmark stipulations — is licensed
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), copyright Alethic Research.**
See [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

This does **not** relicense cited source material. Guidelines, articles, surveys and
reports keep their own rights, recorded per source in each record's `references` and
in candidate and scenario `provenance.sources`. Bench case text **adapts and
summarizes; it does not reproduce** third-party prose, and every scenario is marked
`adapted_not_reproduced: true`.

When citing a record, give its `record_id`, `version` and `content_hash`. A Bench
record is a versioned research object, and an attribution that does not say which
version it used cannot be checked.

The tooling in `scripts/` and the schemas in `schemas/` are covered by the
repository's software license, not by the content license.

## Citation

Bioethics Bench is not yet a frozen benchmark release. For the current research
program, cite the introducing work as appropriate:

```bibtex
@article{ghose2026doingethics,
  title   = {Doing Ethics with AI: Practical Ethics Engineering,
             Product-Led Philosophy, and Computer-Aided Ethics},
  author  = {Ghose, Sankalpa and Rasaee, Kasra and
             Singer, Peter and Savulescu, Julian},
  year    = {2026}
}
```

## Contact

[research@alethic.ai](mailto:research@alethic.ai)
