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
