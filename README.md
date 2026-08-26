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
│   ├── tutorial/           # Optional non-benchmark teaching objects
│   ├── development/        # Prospective protocol-development cases
│   └── stress-tests/       # Deliberate perturbation / robustness cases
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
