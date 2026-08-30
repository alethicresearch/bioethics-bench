# Bioethics Bench

A source-grounded, versioned research infrastructure for **computational bioethics**.

🌐 **Live site:** [bioethicsbench.com](https://bioethicsbench.com)  
📄 **Resource card:** [`docs/RESOURCE_CARD.md`](docs/RESOURCE_CARD.md)  
🧪 **Reference task:** [`sacre-qccs-v1`](docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md)

> **Status: development / manuscript submission snapshot in preparation.**
> The current corpus is structurally executable and reproducibly task-projectable,
> but it is **not** an independently human-validated moral answer key. Current Full
> Corpus records remain `status: draft` and `reviewed_by_human: false`.

## What Bioethics Bench is

Bioethics Bench represents bioethical decision problems as reconstructable normative
research objects rather than fixed moral labels. A record can preserve the decision
question, represented policy candidates, source and warrant provenance, benchmark
stipulations, controlled representation variants, natural candidate geometry,
version lineage, review state, and rights metadata.

The architecture separates three objects that should not be collapsed:

1. **Resource** — cases, candidates, provenance, stipulations, representations,
   geometry, versions, and review state.
2. **Task** — an explicit contract specifying what a system does with the resource.
3. **Evaluation condition** — the model, human evaluator, protocol, repetitions,
   perturbations, metrics, and analysis conditions used in a particular study.

The first mature reference task is `sacre-qccs-v1`, which projects the current resource
into SACRE/QCCS while leaving SACRE-specific execution semantics outside the enduring
resource ontology.

## Current corpus

The current Full Corpus is the executable output of a **200-family research and
disposition program**, not a preset target-sized sample.

| Current disposition | Families |
|---|---:|
| Full Corpus executable | 34 |
| Featured-only separate lineage | 1 |
| Held — additional evidence needed | 82 |
| Research complete but not executable under current source/decision structure | 71 |
| Held after candidate audit | 12 |
| **Total** | **200** |

The 34 executable Full Corpus families contain:

- **68 matched concise/detailed records**;
- **210 unique family-level candidates**;
- current task roles: **69 Public, 55 Expert, 86 Framework**;
- eight evidence-qualified candidate geometries;
- **428 unordered cross-source QCCS pairs per representation**, or **856** across one
  matched concise/detailed pass.

Only 8/34 executable families have the symmetric 2×2×2 candidate shape. The remaining
26 preserve asymmetric source ecologies rather than inventing extra candidates to
regularize the benchmark.

See the [Resource Card](docs/RESOURCE_CARD.md) and the repository-derived
[Full Corpus disposition ledger](docs/full-corpus/FULL_CORPUS_DISPOSITION_LEDGER.md)
for the scientific and construction state.

## Source grounding and policy basis

Current executable candidates distinguish:

- `direct-policy-evidence` — the cited source supports a sufficiently close policy;
- `source-informed-policy-inference` — the source supports an orientation, preference,
  principle, or premise and the Bench discloses the bridge to an executable policy;
- `framework-derived-policy` — the executable policy is a Bench-authored derivation
  from a named normative framework or principle set.

The ongoing warrant-ontology work further separates source type, evidence function,
translation mode, support direction, warrant scope, source assertion, Bench bridge,
and relation-level review identity. That richer model is **shadow architecture**, not
an implemented schema-v2 migration.

## Representation and stipulations

Each current executable family has a concise and detailed companion representation of
the same case frame. The validator requires companion records to preserve the same
decision question/profile, identical stipulations, byte-identical candidate pools,
different scenario text, and reciprocal companion identifiers.

Benchmark stipulations are explicit constructed assumptions that hold a case at a
policy divergence or remove irrelevant factual uncertainty. They are properties of the
benchmark, **not empirical claims about the world**.

## Reference task and reproducibility

The first mature task contract is
[`sacre-qccs-v1`](docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md).
For `P` Public, `E` Expert, and `F` Framework candidates, it generates all unordered
cross-source pairs:

```text
P×E + P×F + E×F
```

The current task contract uses QCCS v1.0.0 with the `conv+` operationalization and
requires Mean rather than Sum when unequal partner counts would otherwise introduce
pool-shape bias.

An all-record adapter-equivalence gate verified the current projection across all
**34 families / 68 records**. It found **0 execution/task-semantic differences** and
**36 stale resource content hashes** in SACRE's older vendor state. Those differences
were provenance-only; after re-pinning, the adapter projection and SACRE vendor payload
were byte-for-byte identical and regression tests passed. No model/QCCS rerun was
required because executable semantics had not changed.

Equivalence-tested Bench commit:
`077b36ff1eb9662e93549b1f4261691960cfa605`

Corresponding SACRE re-pin merge commit:
`4ed4b24ab99d7427195a21393474c02700274ee6`

## Validation state

Current quality evidence includes structural/schema/hash validation, profile and
aggregation checks, companion-representation checks, identifier/source-resolution
checks, model-assisted direct-policy and inference-bridge review, bounded
whole-document omission review, scenario/action-divergence review, and all-record task
adapter equivalence.

These checks do **not** establish:

- independent corpus-wide human source validation;
- corpus-wide source fidelity or omission sensitivity;
- QCCS reliability or construct validity;
- human-model correspondence;
- moral correctness of a provisional Final Policy;
- method-neutrality across multiple mature task families.

Independent source-to-policy review is a quality/release layer, not a developmental
execution gate.

## Repository structure

```text
.
├── schemas/                # Versioned case / manifest / result schemas
├── tasks/                  # Machine-readable task contracts
├── docs/                   # Construction, governance, review, paper and release docs
├── data/
│   ├── tutorial/           # Non-benchmark teaching objects
│   ├── featured/           # Separate Featured lineage
│   ├── development/        # Protocol-development material
│   ├── stress-tests/       # Deliberate perturbation / robustness cases
│   └── benchmark/          # Current Full Corpus executable records
├── scripts/                # Hashing, validation, review and adapter-verification tools
├── releases/               # Release-candidate / later immutable release manifests
├── analyses/               # Reproducible analyses when available
├── CONTENT-LICENSE.md      # CC BY 4.0 for Bench-authored case content
├── CITATION.cff            # Repository-level citation metadata
└── index.html              # Project landing page
```

A confirmatory holdout is intentionally not committed publicly before confirmatory
execution is complete.

## Key documents

| Document | What it establishes |
|---|---|
| [`docs/RESOURCE_CARD.md`](docs/RESOURCE_CARD.md) | Submission-facing scientific description, use limits, validation and release state |
| [`docs/CASE_CONSTRUCTION_STANDARD.md`](docs/CASE_CONSTRUCTION_STANDARD.md) | Case and candidate construction rules |
| [`docs/CORPUS_AUTHORING.md`](docs/CORPUS_AUTHORING.md) | Machine-enforced authoring and corpus invariants |
| [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) | Collections, exposure, review and release principles |
| [`docs/VERSIONING.md`](docs/VERSIONING.md) | Record identity and canonical content hashing |
| [`docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md`](docs/tasks/SACRE_QCCS_V1_TASK_CONTRACT.md) | Human-readable first mature task contract |
| [`tasks/sacre-qccs-v1/task-contract.json`](tasks/sacre-qccs-v1/task-contract.json) | Machine-readable task contract |
| [`docs/ARCHIVAL_RELEASE_PLAN.md`](docs/ARCHIVAL_RELEASE_PLAN.md) | Submission snapshot versus public archival-release architecture |
| [`docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md`](docs/papers/PATTERNS_SUBMISSION_RELEASE_CHECKLIST.md) | Submission and release checklist |
| [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) | Rights for Bench-authored case content and third-party boundaries |

## Manuscript

The standalone paper in development is:

> **Bioethics Bench: A Source-Grounded Research Infrastructure for Computational Bioethics**

The current submission-facing manuscript is maintained in the research program's
manuscript workspace. The repository contains manuscript handoffs, evidence surfaces,
claim audits, and publication/release documentation under `docs/papers/`.

## Citation

Repository-level citation metadata are provided in [`CITATION.cff`](CITATION.cff).
The final preferred paper citation will be added when the manuscript author list and a
stable bibliographic identifier are locked.

For record-level reuse, cite at minimum:

```text
Bioethics Bench — <record_id>, version <version>, content hash <content_hash>
```

For computational results, also report the exact **resource snapshot, task
specification, and evaluation/execution condition**. A result that does not identify
those three objects is not fully reconstructable.

The current release-candidate manifest is:
[`releases/full-corpus-v1-completion-candidate/manifest.json`](releases/full-corpus-v1-completion-candidate/manifest.json).
It is a **release candidate**, not a claim of independent validation or formal release.

## License

**Bench-authored case content** — including scenario text, decision questions, policy
candidates, provenance summaries and benchmark stipulations — is licensed
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), copyright Alethic Research.
See [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

This does **not** relicense cited third-party sources. Guidelines, articles, surveys,
statutes, reports and other source material retain their own rights.

**Software/tooling license:** not yet finalized at the repository root. Do not infer a
software license from the CC BY content license. Selecting and recording the software
license is a pre-archival-release action.

## Release architecture

Peer-review submission and formal public release are separate gates. A manuscript
submission snapshot can be immutable and reviewer-inspectable while current records
remain transparently draft. A later public archival release should carry its own review
state, immutable manifest/checksums, explicit content and software licensing, release
notes, and DOI-bearing archive where feasible.

See [`docs/ARCHIVAL_RELEASE_PLAN.md`](docs/ARCHIVAL_RELEASE_PLAN.md).

## Related projects

- **[ReflectiveEquilibrium.AI](https://reflectiveequilibrium.ai)** — interactive research application for normative-computation studies
- **[SACRE](https://github.com/xnuxi/sacre-prototype)** — formal normative-computation procedure and reference-task implementation
- **[Alethic-ISM](https://github.com/alethicresearch/alethic-ism)** — inspectable computation infrastructure/workbench
- **[Doing Ethics with AI](https://alethicresearch.github.io/doing-ethics-with-ai/)** — broader research program

## Contact

[research@alethic.ai](mailto:research@alethic.ai)
