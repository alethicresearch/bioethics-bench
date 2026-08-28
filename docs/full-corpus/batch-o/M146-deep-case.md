# M146 — Ambient AI recording for clinical documentation

**Case-family identity:** M146  
**Primary domain:** clinical AI / documentation and consent  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** outpatient health system.  
**Decision question:** What consent and data-use policy should govern always-listening ambient AI systems that draft clinical notes from patient–clinician conversations?

## Scenario pair
**Concise:** A clinic wants to use ambient AI to record encounters temporarily and draft notes. The tool reduces documentation burden, raw audio is deleted after processing, and the clinician reviews the note. Patients can decline without affecting care. The system must choose encounter-level affirmative consent, default use with clear notice and easy opt-out, or a narrower policy allowing routine documentation but prohibiting vendor retention/training and sensitive-visit use without separate consent.

**Detailed:** A health system has piloted an ambient AI documentation tool. It passively captures encounter audio, generates a draft note and can reduce clinician documentation burden. The vendor can be configured not to retain raw audio or use it for model training. A 2025 JAMA Network Open study of 103 patients and 18 clinicians found most patients were comfortable, but detailed information about AI features, storage and corporate involvement reduced willingness to consent; nearly all patients said information about audio use, destination and access mattered, and many wanted clear opt-out. Another large Stanford survey found most exposed patients found ambient scribes helpful and wanted future use. The health system must decide the consent rule and what uses of raw audio/vendor data are categorically excluded.

## Source architecture
The 2025 NYU study explicitly recommends a comprehensive opt-in approach with information before and immediately prior to the encounter, while also documenting stakeholder interest in flexible multimodal consent and opt-out mechanisms. Patient acceptability is high among many users but declines with more detailed understanding of data flows. This is unusually direct affected-policy evidence.

## Serious policy families
- encounter-level affirmative opt-in before recording;
- default use with meaningful notice and easy immediate opt-out;
- routine documentation allowed only with strict no-retention/no-training rules, with separate consent for sensitive encounters or expanded data use.

## Normative bridges
**Conversational privacy:** recording changes the informational environment of the clinical encounter.  
**Clinician/patient benefit:** reduced documentation burden may improve attention and care experience.  
**Contextual integrity:** consent to note drafting should not imply consent to vendor training, indefinite storage or unrelated analysis.

## Construction risks
Separate recording from note generation, retention and model training; do not assume high satisfaction equals consent to every data use; preserve ability to decline without care penalty.

## Executable judgment

`candidate-audit-required`. The dossier identifies this family as a candidate-audit target but no candidate audit has been performed, so it is held for v1. Promotion requires a recorded audit establishing action-distinct candidates in each represented pool under the four-basis rule. Original judgment, kept as research history:

> Strong candidate-audit target. Direct patient/clinician evidence and real institutional practices support distinct consent architectures without needing speculative policy translation.

## Principal sources
Lawrence et al., JAMA Network Open 2025, *Informed Consent for Ambient Documentation Using Generative AI*; Stanford patient-perspective study of ambient AI scribes (2026); ambient-scribe implementation literature.

## Candidate audit result — 2026-08-28

This section supersedes the provisional judgment above. The audit has now been
performed against the underlying sources rather than against the dossier's summary of them.

**Executable.** The audit was performed against the underlying consent study and professional
guidance.

**Canonical frame:** `natural@1.0.0`
**Geometry:** `2 public × 1 expert × 3 framework`
**Cross-source pairs:** 11
**Required aggregation:** Mean.

**The public layer is unusually strong because the study measured the decision object itself.** The
ambulatory study at NYU Langone (JAMA Netw Open 2025; 121 participants, 18 clinicians and 103
patients, March–December 2024) did not merely record attitudes to AI. It recorded consent decisions
under differing disclosure: 81.6% consented given basic information, falling to 55.3% when told in
detail about AI features, data storage and corporate involvement. Comfort also varied sharply by
encounter type — 63.1% for a routine physical, 40.8% for sexual health, 35.0% for mental health —
and over 98% rated knowing where audio was sent and who could access it as important. Consent that
moves 26 points on disclosure is evidence about the consent architecture, which is exactly what this
case asks about. That grounds `pub1` as direct policy evidence.

`pub2` is marked source-informed inference rather than direct evidence, and the distinction matters.
Stakeholders asked for a flexible multimodal approach with notice, non-clinical staff support and
opt-out options; they were not asked to endorse a default-on institutional rule. The default-with-
opt-out policy form is Bench completion of that preference and the record says so.

**The expert layer is a legitimate singleton.** AMA guidance and augmented-intelligence principles
converge on one architecture: where AI is used in the encounter, and ambient scribing especially,
explain the technology, secure consent and address privacy. There is no competing professional
default-capture position, and inventing one to reach a symmetric shape would be the failure this
corpus withdrew records for.

**Three framework positions**: affirmative consent on conversational-privacy grounds; default with
opt-out on proportionality grounds that treat repeated consent friction as a real cost; and
drafting-only permission under strict no-retention and no-training terms with separate consent for
sensitive encounters, on contextual-integrity grounds.

`reviewed_by_human` remains false.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m146-ambient-ai-documentation-consent-natural-concise-v1`, `m146-ambient-ai-documentation-consent-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / direct-policy-evidence | 1 |
| public / source-informed-policy-inference | 1 |
| expert / direct-policy-evidence | 1 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
