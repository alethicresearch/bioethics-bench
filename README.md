# Bioethics Bench

A structured evaluation corpus for benchmarking and improving AI performance in
**normative reasoning** across clinical, research, public health, and other
bioethical domains.

🌐 **Live site:** [bioethicsbench.com](https://bioethicsbench.com)
&nbsp;·&nbsp; [alethicresearch.github.io/bioethics-bench](https://alethicresearch.github.io/bioethics-bench)

> **Status: In Development.** Bioethics Bench is being built through careful
> scenario construction, expert consultation, and institutional collaboration.

---

## About

Bioethics Bench is a large-scale, structured dataset and benchmark for bioethical
reasoning. Each record pairs a bioethical scenario with candidate policies — drawn
from public preferences, expert judgment, and ethical frameworks — and a full
**SACRE** evaluation that scores their normative convergence and identifies the
most justified position.

The Bench sits within a broader normative-computation pipeline:

| Stage | Component | Role |
|-------|-----------|------|
| Formal procedure | **SACRE** | Structurally Analyzed Collective Reflective Equilibrium — integrates public preferences, expert judgments, and ethical frameworks through pairwise convergence testing. |
| Research workbench | **Alethic-ISM** | Composes analytic workflows as computable directed graphs, running SACRE at scale with full auditability. |
| Evaluation corpus | **Bioethics Bench** | A validated dataset of scenarios and SACRE evaluations for benchmarking normative reasoning. |
| AI model | **SACRE-FT** | Supervised fine-tuning on Bench outputs for domain-adapted normative models. |

## Repository

This repository hosts the project's landing and explanation page, served via
**GitHub Pages**.

```
.
├── index.html              # The landing page (self-contained HTML + CSS)
├── assets/                 # Images (logo / favicon)
├── CNAME                   # Custom domain (bioethicsbench.com)
├── .nojekyll               # Disable Jekyll processing
└── .github/workflows/      # GitHub Pages deployment workflow
    └── deploy.yml
```

## Local development

The page is a single self-contained `index.html` with no build step. To preview
locally:

```bash
# Open directly
open index.html

# …or serve over http
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment

Every push to `main` triggers the **Deploy to GitHub Pages** workflow
(`.github/workflows/deploy.yml`), which publishes the site automatically.

## Related projects

- **[ReflectiveEquilibrium.AI](https://reflectiveequilibrium.ai)** — the deployed SACRE application
- **[Alethic-ISM](https://github.com/alethicresearch/alethic-ism)** — AI research workbench
- **[Doing Ethics with AI](https://alethicresearch.github.io/doing-ethics-with-ai/)** — the introducing paper

## In collaboration with

- [Initiative for Medical AI](https://im-ai.org)
- [Centre for Biomedical Ethics, NUS](https://medicine.nus.edu.sg/cbme/)
- [OpenTelemed](https://opentelemed.org)
- [Alethic Research](https://alethic.ai)

## Citation

If you use Bioethics Bench or the SACRE methodology in your research, please cite
the introducing paper:

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
