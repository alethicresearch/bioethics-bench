# Repository Instructions

## Research artifact persistence

For DEWA work associated with this repository, creating or revising a local artifact is not completion. Every manuscript draft, supplement, coordination handoff, protocol, analysis artifact, figure package, or other project deliverable created or materially revised in a working session must be uploaded to the project Google Drive before the task is considered complete.

Operational requirements:

- Upload each created or materially revised project artifact to Google Drive in the same working session.
- Place it in the relevant project Drive folder; do not leave the only persistent copy in a sandbox, local runtime, or My Drive root.
- Verify the uploaded file's Drive ID and destination folder after upload.
- Record important new Drive IDs in the next coordination handoff when they define the working state.
- A local or sandbox download link is supplementary and never substitutes for the Drive upload.
- Preserve CURRENT/source manuscripts unless explicitly instructed otherwise. Uploading a candidate version does not promote it to CURRENT; promotion requires explicit user approval.

## Manuscripts are completion-state research blueprints

Draft manuscripts around the paper that should exist when the planned research is complete, not around the incidental state of an unfinished build.

- Write the final intended scientific question, methods, analyses, figures, tables, and argumentative sequence now.
- When a required study or analysis has not yet been run, insert an explicit results / figure / table placeholder that states exactly what output will later replace it.
- Do not use partial batches, aborted runs, interim review counts, temporary implementation checks, or other developmental evidence as substitutes for the planned final study.
- Keep developmental and operational evidence in coordination files, protocol documents, analysis logs, or technical handoffs unless it is intentionally designed to survive into the published paper as pilot evidence or as part of the phenomenon being studied.
- Static construction facts that are already final may be written as completed results. Future-dependent quantities must remain placeholders until the corresponding study or release gate is complete.
- Preserve evidence boundaries. A completion-shaped manuscript may describe planned analyses in final-paper form, but it must never invent outcomes or imply that an unrun study has already been completed.

## Bioethics Bench terminology

Use straightforward language in code comments, documentation, manuscripts, and the public site.

- **Case** — one bioethics problem.
- **Policy** — one possible position or course of action for that case.
- **Policy type** — **Public**, **Expert**, or **Framework**. This says what kind of position the policy represents.
- **Sourcing** — how the policy was identified:
  - **Direct source** — a source supports substantially the same policy.
  - **Inferred from source** — the policy is a careful inference from a source, including a source that states a principle or underlying view rather than the exact policy wording.
  - **Constructed** — a serious comparison policy written by the Bench and clearly identified as constructed.
- **Case version** — concise or detailed wording of the same case.
- **Evaluation setup** — the case and selected Public, Expert, and Framework policies loaded for an evaluation.

Avoid public-facing or explanatory use of **case family**, **candidate universe**, **candidate geometry**, **normative research object**, **projection**, **source ecology**, and similar internal shorthand when ordinary words above will do. Legacy machine fields and filenames may remain where renaming them would break reproducibility or compatibility, but new prose should translate them into the plain terms above.

## Current Bench state

All **200 cases (M001–M200)** have been researched and reviewed at the case-and-policy level. Each case has a set of serious policies with sourcing recorded for each policy.

The current machine-readable work also records reviewed Public / Expert / Framework assignments for the cases already used in SACRE. A sourcing label and a policy type are different properties: a Framework policy can be directly sourced or inferred, and a Public or Expert policy can also be direct or inferred. Never use sourcing as a substitute for policy type.

Do not invent Public or Expert positions simply to fill a column. If a policy was constructed by the Bench, label it **Constructed**. If a source supports a principle or underlying view and the Bench translates it into a policy, label it **Inferred from source**.

### Case identity rules

- Released Featured v1 records remain immutable.
- M047 now means **permanent contraception requested by a young childfree adult**; its former abortion-conscience identity is retired as duplicative of M007.
- M187 now means **adolescent EHR and patient-portal confidentiality**; its former bedside confidentiality identity is retired as duplicative of M004.
- Resolve the existing Featured crosswalks before final release: M001/F01, M101/F10, M138/F20, M156/F17, M160/F18.
- M189's later reviewed setup supersedes older Batch-S text that described it as unavailable for evaluation.

### Remaining release work

The 200-case research pass is complete, but the final release still requires review of the machine-readable case and policy files, confirmation of Public / Expert / Framework assignments where they will be used in evaluations, concise/detailed consistency checks, citation and sourcing checks, independent scholarly review, and final validation/release statistics.
