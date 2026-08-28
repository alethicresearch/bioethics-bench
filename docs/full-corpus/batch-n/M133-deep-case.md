# M133 — Passive digital phenotyping in mental-health care

**Case-family identity:** M133  
**Primary domain:** mental health / digital surveillance  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** mental-health service.  
**Decision question:** Should a mental-health service continuously analyze phone/sensor data to predict relapse or self-harm, and under what consent rule?

## Scenario pair
**Concise:** A mental-health program can use smartphone and wearable data such as mobility, sleep, typing and communication patterns to detect changes associated with relapse. The model is clinically useful but imperfect and requires continuous passive collection. Patients can disable monitoring, but clinicians worry that those at highest risk may disengage just before relapse. The service must choose opt-in monitoring, default monitoring with granular controls for a narrowly defined high-risk program, or no passive monitoring outside specific validated episodes of care.

**Detailed:** A specialty clinic has validated a digital-phenotyping model that combines passive phone and wearable signals to identify increased relapse risk earlier than routine visits. Data are sensitive, false positives occur, and the raw signals could reveal behavior unrelated to treatment. Patients and caregivers want clear information about clinical utility, accuracy, privacy, control and who can access the data. The service must choose whether continuous monitoring requires affirmative opt-in; whether enrollment in a defined high-risk program can include default monitoring with clear notice, pause/delete controls and human review; or whether passive sensing should remain outside routine care except for narrowly validated indications.

## Source architecture
A US Delphi study found strong expert consensus around privacy, transparency, consent, accountability and fairness in mental-health digital phenotyping. A 2024 patient/caregiver interview study found stakeholders wanted detailed information about utility, evidence, explainability, privacy, consent/control, clinician relationships and safety. These sources directly support strong control/transparency requirements but do not automatically endorse a default-monitoring rule.

## Serious policy families
- explicit opt-in continuous monitoring;
- default monitoring only within a defined high-risk program with granular controls and human review;
- no routine passive sensing outside narrow validated uses.

## Normative bridges
**Autonomy/privacy:** passive collection can reveal intimate life patterns beyond the clinical target.  
**Beneficence:** earlier warning may prevent relapse or self-harm.  
**Non-domination:** control over pausing, deletion, secondary use and escalation limits protects against surveillance creep.

## Construction risks
Do not imply prediction is deterministic; separate raw-data collection from derived risk scores; specify false-positive consequences and human review; do not create default monitoring from general enthusiasm for digital care.

## Executable judgment

`candidate-audit-required`. The dossier identifies this family as a candidate-audit target but no candidate audit has been performed, so it is held for v1. Promotion requires a recorded audit establishing action-distinct candidates in each represented pool under the four-basis rule. Original judgment, kept as research history:

> Provisional candidate-audit target. The affected evidence clearly supports opt-in/control concerns; a second public policy orientation requires direct support rather than Bench invention.

## Principal sources
Digital phenotyping ethics Delphi study, PMID 34319252; 2024 patient/caregiver digital behavioral marker consent study; contemporary digital psychiatry ethics literature.

## Candidate audit result — 2026-08-28

`audit-complete-not-executable`. This section supersedes the provisional judgment above. Where the hold rests on a gap the dossier itself identified, that is stated;
where sources were checked directly, the finding is given.

**Held on the gap the dossier itself identifies, and on a degeneracy risk.** The dossier states the
problem exactly: the affected evidence clearly supports opt-in and control concerns, and "a second
public policy orientation requires direct support rather than Bench invention." The 2024
patient/caregiver interview study supports one orientation — detailed information, consent, control,
explainability and safety — and there is no direct support for a default-monitoring position from
the affected layer. Constructing one would be Bench invention, which is what the dossier forbids.

There is a second problem that would remain even if a singleton public pool were accepted as
legitimate. The expert layer is also a singleton: the Delphi study reports strong expert consensus
around privacy, transparency, consent, accountability and fairness. A 1x1x3 field is geometrically
executable, but here the single public and single expert candidates would express substantially the
same action — consent and control requirements over passive collection — which makes the one
public-expert pair in the matrix degenerate rather than informative. A cross-source comparison
between two statements of the same policy measures nothing.

**Held.** Promotion requires direct affected-community support for a second architecture, most
plausibly the bounded high-risk-programme default with granular controls and human review that the
dossier lists as a serious policy family.

Held is a recoverable state. The dossier stands as a research result; what it lacks is
source-to-policy alignment at the represented action.
