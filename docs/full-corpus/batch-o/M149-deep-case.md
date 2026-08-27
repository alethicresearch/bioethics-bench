# M149 — Updating a deployed clinical AI model

**Case-family identity:** M149  
**Primary domain:** clinical AI / versioning and lifecycle governance  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** regulator and health-system AI governance committee.  
**Decision question:** How much new validation and notice should be required when a deployed clinical AI model changes after implementation?

## Scenario pair
**Concise:** A clinical AI model is periodically retrained as new data arrive. Some updates are small and expected; others alter subgroup performance or decision thresholds. The system can require full revalidation before every material update, permit changes within a predetermined validated change-control plan with ongoing monitoring, or freeze deployed versions until scheduled formal review.

**Detailed:** A regulated clinical AI tool has been deployed for a defined diagnostic task. The developer wants to improve performance through periodic retraining. FDA's 2025 final guidance permits predetermined change control plans (PCCPs) that specify anticipated modifications, validation methods, impact assessment, transparency and lifecycle monitoring, allowing some updates without an entirely new authorization pathway. The health system also needs to know which version generated each recommendation and whether subgroup performance changed. It must decide whether every material update should trigger full local/regulatory revalidation, whether pre-specified PCCP changes can deploy after documented validation and surveillance, or whether models should remain frozen between periodic formal version reviews.

## Source architecture
FDA's final PCCP guidance creates a mature real-world governance architecture for bounded model evolution and explicitly requires planned modifications, methods for development/validation/implementation and impact assessment. FDA/Health Canada/MHRA principles also emphasize transparency, intended-population evidence and post-update monitoring. This is not equivalent to unrestricted continuous learning.

## Serious policy families
- full revalidation before every material update;
- predetermined change-control plan with bounded updates, validation and surveillance;
- frozen versions with periodic scheduled formal review.

## Normative bridges
**Safety/reproducibility:** a changing model can become a different clinical object.  
**Learning/adaptability:** excessive reauthorization can prevent safe performance improvement.  
**Traceability:** users and investigators must know which version produced a decision.

## Construction risks
Do not call PCCP unrestricted self-modification; define “material update”; distinguish developer validation, regulatory authorization and local monitoring; preserve version provenance.

## Executable judgment
Provisional candidate-audit target at the governance level. Professional sources support PCCP and full-review/frozen-version alternatives as recognizable regulatory strategies, but direct patient/public evidence is limited, so source-pool shape may remain non-executable.

## Principal sources
FDA, *Marketing Submission Recommendations for a Predetermined Change Control Plan for AI-Enabled Device Software Functions* (final guidance, August 2025); FDA/Health Canada/MHRA PCCP guiding principles; FDA AI-device lifecycle guidance.
