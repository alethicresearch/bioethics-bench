# M144 — Disclosure of AI involvement to patients

**Case-family identity:** M144  
**Primary domain:** clinical AI / transparency and consent  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health-system AI governance committee.  
**Decision question:** When should patients be told that AI materially contributed to diagnosis, triage or treatment planning?

## Scenario pair
**Concise:** A health system uses validated AI tools that sometimes materially influence diagnosis or treatment recommendations. Clinicians remain responsible for final decisions. The system must decide whether every material AI contribution should be disclosed specifically to the patient, whether specific disclosure is required only when AI changes risks/options or acts with substantial autonomy, or whether general institutional notice is enough for routine low-risk AI while high-impact uses receive case-specific disclosure.

**Detailed:** A health system uses multiple AI-enabled tools, ranging from routine image triage and documentation support to diagnostic and treatment-recommendation systems. The institution wants a disclosure policy that is informative rather than boilerplate. AMA policy emphasizes transparency to physicians and patients, while WHO emphasizes transparency, explainability and human autonomy. Patient-attitude research generally shows that desire for disclosure increases as AI has a more consequential or autonomous role. The system must decide whether any material AI contribution triggers specific disclosure, whether disclosure should be tied to effects on risks/options and patient choice, or whether a tiered system should combine general notice for low-impact tools with specific disclosure for autonomous/high-impact use.

## Source architecture
AMA's current AI policy calls for transparency around health-care AI and explainable tools. WHO requires transparency and intelligibility as core AI-governance principles. Empirical patient research supports meaningful disclosure rather than silent use, but the exact threshold and content of disclosure remain unsettled.

## Serious policy families
- disclose every material AI contribution to diagnosis/triage/treatment;
- disclose specifically when AI changes meaningful risks, options or decision authority;
- tiered disclosure: general notice for low-impact routine AI, specific notice for high-impact/autonomous uses.

## Normative bridges
**Respect for persons:** patients may reasonably care about how consequential judgments were produced.  
**Materiality:** disclosure should communicate information relevant to choice, not overwhelm patients with invisible infrastructure.  
**Trust/accountability:** transparency can help patients understand who remains responsible and how to contest decisions.

## Construction risks
Define “material contribution”; do not equate disclosure with informed consent for every tool; do not make boilerplate transparency count as meaningful notice.

## Executable judgment
Provisional candidate-audit target. Governance sources clearly support transparency, and empirical patient evidence may support action-distinct universal-versus-material/tiered disclosure rules.

## Principal sources
AMA 2025–2026 AI transparency/explainability policy; WHO AI governance guidance; patient-attitude studies on disclosure of AI involvement in clinical care.

## Candidate audit reconciliation — 2026-08-28

This section supersedes the provisional executable judgment above, which was written before
the candidate audit was performed and was never revised afterwards. The audit's result is the
committed record; what follows states that result in the dossier, where a reviewer will look
for it. The earlier judgment is preserved above as research history.

Both public candidates are **direct policy evidence**, and the second is the more interesting one.
Patient and public studies show very high importance attached to being informed when AI plays a major
role in diagnosis or treatment; `pub1` is bounded to material clinical contributions rather than
invisible infrastructure, which keeps it aligned with what was actually asked. `pub2` rests on focus
group and survey evidence that *distinguishes* critical clinical uses from minor or routine
functions, with disclosure preferences rising with role and stakes — so the materiality threshold is
directly elicited, and only the general-notice implementation for lower-impact use is Bench
completion. The two candidates diverge on the fixed scenario at exactly the case where AI contributes
materially but not critically.

The expert layer is a legitimate **singleton**. Current AMA policy makes transparency explicitly
risk- and impact-based, requiring disclosure where AI affects access or point-of-care decisions and
clear disclosure for direct patient-facing AI; WHO's transparency, intelligibility and
human-autonomy principles point the same direction. One tiered architecture, supported by two
convergent sources, is one candidate.

Geometry is 2x1x2 and asymmetric, so Mean is mandatory: the single expert candidate has four
cross-source partners while each public and framework candidate has three, and Sum would rank partly
on that.

Source-to-policy fidelity across these candidates remains subject to independent human review.
`reviewed_by_human` stays false on the records.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 2 framework`  
**Cross-source pairs:** 8  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m144-ai-disclosure-to-patients-natural-concise-v1`, `m144-ai-disclosure-to-patients-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / direct-policy-evidence | 2 |
| expert / direct-policy-evidence | 1 |
| framework / framework-derived-policy | 2 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
