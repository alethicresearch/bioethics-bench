# M028 — Continued organ support after death by neurologic criteria

**Case-family identity:** M028  
**Featured crosswalk:** none  
**Primary domain:** death and dying / neurologic criteria  
**Subdomain:** brain death; family objection; accommodation  
**Tags:** brain death, BD/DNC, organ support, family objection, religious accommodation, death determination  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** hospital/ICU service after valid determination of death by neurologic criteria (BD/DNC).  
**Decision question:** After a valid BD/DNC determination, what accommodation policy should a hospital use when the family rejects the determination and asks that organ support continue?

This case starts **after** death has been validly determined. It is distinct from M040, which concerns objections to performing the testing itself. The decision here is whether and for how long to continue somatic/organ support after declaration.

## 2. Concise representation

An adult with catastrophic brain injury has been validly determined dead by neurologic criteria under current accepted medical standards. Organ donation is not planned. The family does not accept neurologic criteria as death and asks that ventilation and other organ support continue until the heart stops, citing religious and moral beliefs. For this benchmark, assume the determination was correctly performed, the family has received repeated clear explanations, and continued support could maintain circulation for an uncertain period while using ICU resources. The hospital must decide what accommodation policy should apply.

## 3. Detailed representation

An adult sustains catastrophic permanent brain injury and, after prerequisites are satisfied, is evaluated under the current multidisciplinary US consensus guideline for death by neurologic criteria. The examination and apnea testing are completed correctly and death is declared. Organ donation is not planned. The family understands that the medical and legal system treats BD/DNC as death but rejects this definition on religious and moral grounds and asks that mechanical ventilation, vasoactive medication and other organ support continue until circulatory arrest. The hospital has already offered spiritual care and repeated meetings. For this benchmark, assume no error or uncertainty remains about the BD/DNC determination, continued support may preserve circulation for an uncertain period but cannot restore brain function, and ongoing support uses an ICU bed and intensive clinical resources. The hospital must decide whether to discontinue after a short period, provide a longer accommodation/transfer opportunity, or continue support until circulatory arrest.

## 4. Decision-critical facts

- BD/DNC determination is valid and complete;
- no remaining diagnostic uncertainty about death determination;
- organ donation is not planned;
- family objection is informed and based on moral/religious understanding of death;
- continued support cannot restore brain function;
- duration of ongoing somatic support is uncertain;
- ICU resources are consumed but no immediate named competing patient is introduced;
- hospital has provided explanation and spiritual/ethics support.

## 5. Explicit uncertainty

The case does not stipulate how long circulation can be maintained, because duration is clinically variable. It also avoids asserting that all members of any religious tradition share the family's view. Resource burden is real but not converted into an emergency rationing scenario.

## 6. Jurisdiction and time strategy

US medical-standard context dated to 2026. The benchmark assumes the jurisdiction recognizes BD/DNC as legal death and permits the hospital to choose among reasonable accommodation policies. Jurisdictions with mandated indefinite or specific religious exemptions require separate versions.

## 7. Benchmark stipulations

- **Validity stipulation:** BD/DNC was correctly determined under accepted medical standards.
- **No-donation stipulation:** organ donation does not supply an independent reason for continued support.
- **Understanding stipulation:** family understands the clinical/legal position but rejects it on moral/religious grounds.
- **Resource stipulation:** ongoing organ support requires ICU-level resources but no immediate scarcity crisis is stipulated.

## 8. Serious policy / position families

- discontinue organ support after a reasonable short period for family presence and grieving;
- provide a defined accommodation period with spiritual care, ethics support and active transfer assistance;
- continue support until circulatory arrest for sincerely held moral/religious objection where feasible;
- use case-by-case accommodation based on burden, duration, institutional capacity and family circumstances.

## 9. Public / affected-community evidence

Understanding of brain death is often incomplete even among families directly exposed to the concept; a large family study found substantial misunderstanding after clinicians had communicated a brain-death diagnosis (PMID 14558637). More recent nationwide survey work specifically examines informed public attitudes toward allowing families to continue medical support after brain death (PMID 39810074), making this unusually relevant public-policy evidence. Hospital-chaplain research also shows religious objections are common in practice and that chaplains themselves hold heterogeneous views about whether families should be able to choose continued support (PMID 34195896).

This source class is promising for two distinct public/affected orientations, but candidate audit must read the recent survey carefully before translating attitudes into institutional policy text.

## 10. Expert / professional recommendations

The 2023 AAN/AAP/CNS/SCCM consensus guideline treats BD/DNC as death and states that hospital policies should include both a process for disagreements and consideration of a reasonable period of accommodation after death before organ support is discontinued. A 2025 AAN position statement updates guidance on objections, communication, pregnancy and public trust. Professional guidance therefore supports limited, process-based accommodation rather than treating indefinite organ support as ordinary ongoing treatment.

Hospital policy historically varied widely; older audits found most policies did not specify how to handle objections, reinforcing the value of explicit institutional rules.

## 11. Normative / framework positions and reasoning bridges

- **Public/legal standard and professional integrity:** once death is validly determined, clinicians no longer have an ordinary duty to provide treatment to a living patient → indefinite organ support misrepresents death and consumes care resources → discontinue after a reasonable limited period.
- **Religious liberty / respect for pluralism:** death concepts carry deep moral and religious meaning → abrupt discontinuation can inflict serious moral injury on families → provide substantial accommodation and transfer opportunity when feasible.
- **Justice / proportional accommodation:** pluralism deserves respect but cannot create unlimited claims on scarce intensive resources → accommodation should be real but bounded by burden and institutional capacity → use a defined, reviewable accommodation policy.

## 12. References and provenance

- 2023 AAN/AAP/CNS/SCCM Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Practice Guideline.
- AAN. Brain Death/Death by Neurologic Criteria Guidance on Communication, Objections, Pregnancy, and Public Trust. Position statement, 2025.
- Families' understanding of brain death. PMID 14558637.
- An Investigation into the Public's Attitude Toward Opting out of Brain Death. PMID 39810074.
- The Intersection of Neurology and Religion: survey of hospital chaplains on BD/DNC. PMID 34195896.
- Prolonging Support After Brain Death: When Families Ask for More. PMID 26490777.
- Organ support after death by neurologic criteria: survey of US neurologists. PMID 27449064.

## 13. Construction and representation risks

- reopening diagnostic uncertainty after stipulating a valid determination;
- stereotyping religions or implying one religious position;
- conflating temporary accommodation with denial of the medical standard;
- making ICU scarcity so acute that resource allocation determines the answer;
- conflating objection to testing (M040) with objection after declaration;
- using organ donation to bias support duration.

## 14. Rights / licensing notes

Bench-authored text may be CC BY 4.0; clinical guideline and empirical sources are paraphrased.

## 15. Possible uses

Public trust; religious accommodation; law/medicine boundary; policy comparison; representation sensitivity; later human/model QCCS.

## 16. Executable-eligibility judgment

`executable-other-profile` **provisionally**. A likely structure is `2 public × 1 expert × 2 framework` if the recent public-attitude study supports two institutionally translatable orientations and professional guidance is represented as one limited-accommodation architecture.

Candidate-level audit is required before any record.

## 17. Review requirements

Neurology/neurocritical care; law; religious/pluralism expertise; affected-family/public evidence review; candidate provenance audit.

## 18. Downstream record rule

If executable, both representations must state that BD/DNC determination is valid, complete and not under diagnostic dispute. Any candidate must concern accommodation after death, not whether the patient is medically dead.

## 19. Current reconstruction decision — 2026-08-27

This section supersedes the provisional 2×1×2 geometry in §16 for the post-strict reconstruction while preserving that earlier candidate-audit state as research history.

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** Mean.

M028 is a direct-grounding positive control. The informed-public survey asks an institutional action-level question about whether a hospital should be required to continue treatment after family rejection of brain death, so the two public orientations can be labeled **direct policy evidence** with their bounded transition/transfer language disclosed as Bench-authored completion. The expert layer remains one direct limited-accommodation/disagreement-process architecture from current AAN/AAP/CNS/SCCM guidance; a second expert candidate is not manufactured from historical institutional variation.

The natural framework ecology contains all three positions already mapped in §11 and the serious-policy map: robust conscience/pluralist accommodation, public-standard/professional-integrity discontinuation after a short transition, and proportional accommodation/distributive justice using a defined reviewable period. The older 2-framework audit collapsed the third position to fit a registered profile; natural ecology restores it because it gives a different rule for the duration and termination of accommodation.

Current machine-readable companions are `m028-brain-death-accommodation-natural-concise-v1` and `m028-brain-death-accommodation-natural-detailed-v1`. No separate direct-grounding frame is needed because it would duplicate this natural candidate field, and no synthetic candidate is required.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m028-brain-death-accommodation-natural-concise-v1`, `m028-brain-death-accommodation-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / direct-policy-evidence | 2 |
| expert / direct-policy-evidence | 1 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
