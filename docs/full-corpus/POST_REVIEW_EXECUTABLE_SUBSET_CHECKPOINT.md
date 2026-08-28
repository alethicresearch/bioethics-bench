# Bioethics Bench Full Corpus — post-review executable-subset checkpoint

**Checkpoint date:** 2026-08-27  
**Scope:** M001–M200 after completion of independent review of all strict-standard candidate-eligible families.  
**Status:** research corpus complete; executable eligibility review complete; transcription/build remains in progress.

## Canonical Full Corpus executable count

The strict Full Corpus executable manifest contains **17 of 200 researched families (8.5%)**.

This is the canonical post-review count. Historical checkpoints recorded larger provisional numbers before the later source-to-policy and scenario/action-divergence gates were applied independently.

### Profile distribution

- **2** symmetric `2 public × 2 expert × 2 framework` (`2×2×2`): M010, M060;
- **14** asymmetric `2 public × 1 expert × 2 framework` (`2×1×2`, Mean required);
- **1** asymmetric `1 public × 2 expert × 2 framework` (`1×2×2`, Mean required): M002.

Thus **15/17** cleared Full Corpus families are asymmetric, and **14/15** asymmetric families have the singleton in the professional/expert pool. This remains a descriptive property of the source architecture, not a sampling target or a claim about the distribution of moral disagreement.

## Cleared families

### Already transcribed and reviewed — 4

- M002
- M004
- M005
- M010

### Cleared and awaiting transcription — 13

- M028
- M033
- M041
- M056
- M060
- M075
- M080
- M094
- M106
- M123
- M139
- M141
- M144

These thirteen may enter machine-readable construction subject to the existing build gates: matched concise/detailed representations, scenario/action divergence, source-faithful provenance, correct profile/aggregation, and finalized hashes before commit.

## Demoted after independent review — 14

Thirteen families were demoted when audits written before the strict source-to-policy standard were re-reviewed from scratch:

- M012
- M018
- M019
- M020
- M025
- M030
- M031
- M034
- M042
- M045
- M050
- M054
- M097

M102 had already been demoted during earlier independent review because its public candidates were not grounded in the same deemed-consent fact pattern.

M001/F01 remains in the separate Featured manifest and is not part of the strict Full Corpus executable manifest.

## Central methodological result — action-target alignment

The completed review shows that evidence of ethical disagreement is not sufficient for executable construction. The evidence must speak to **the action or institutional decision represented by the candidate**.

Call this requirement **action-target alignment**:

> A source supports an executable candidate only when it bears on the action, rule, obligation, eligibility criterion, allocation policy, consent architecture, or other decision that the candidate asks the decision-maker to adopt. Evidence about personal preference, willingness to use a service, uptake under a default, moral approval, concern, predicted community acceptance, or behavior under a policy does not by itself establish a position on that institutional action.

This is not a new schema field or scoring rule. It is a construction and review criterion within source-to-policy fidelity.

### Positive controls

The cases that survive most cleanly ask the policy question directly:

- **M028:** whether hospitals should be required to continue support after BD/DNC;
- **M033:** whether a person with advanced dementia should remain eligible for euthanasia on a prior directive;
- **M041:** allocation objectives and distribution policy for scarce publicly funded IVF;
- **M056:** whether human embryos may be cultured beyond 14 days;
- **M060:** prohibition/legalization of non-medical sex selection;
- **M075:** broad versus study-by-study consent architecture;
- **M080:** what obligations exist after a clinical trial;
- **M094:** whether employers should mandate vaccination.

M028 is especially instructive because one study itself separates policy from personal choice: support for requiring hospitals to continue treatment was materially higher than willingness to request such treatment personally. The two constructs are empirically distinct rather than interchangeable.

### Negative controls and contrasts

The demoted cases show recurrent failures of action-target alignment:

- **M018:** wanting antibiotics is not a prescribing rule;
- **M019:** preferring telemedicine is not a triage rule;
- **M020:** willingness to work during an outbreak is not a mandatory-assignment policy;
- **M031:** judging assisted dying morally acceptable is not a position on institutional participation;
- **M054:** accepting offered genomic findings is not endorsement of an opt-out default;
- **M097:** willingness to use a supervised consumption service is not a position on whether a jurisdiction should establish one.

The contrast between **M031 and M033** is particularly clean: both concern assisted dying, but only M033's affected/public evidence asks an eligibility-policy question. The resulting difference in executability therefore cannot be explained merely by topic or amount of disagreement.

## Independent calibration result

Before the last eleven reviews, the corpus author prospectively classified the cases into three groups:

- expected positive controls: M056, M075, M080;
- expected preference-to-policy failures: M042, M045, M050, M054, M097;
- genuine borderline cases: M041, M060, M094.

An independent reviewer applying the four gates from scratch produced the predicted directional result for **all eleven cases**: all positive controls cleared, all predicted preference-to-policy cases were demoted, and all three borderlines cleared.

This is not a validation study and should not be presented as such. It is evidence that the construction standard has become sufficiently explicit to support reproducible qualitative review rather than relying only on an author's impression that a case is strong.

## Two routes back

Two demoted cases have identifiable, bounded recovery paths rather than generic requests for more literature:

- **M025:** gate 4 was repaired, but the affected evidence still concerns parents choosing for their own child rather than what an implant programme should recommend. Recovery requires affected/community evidence about the service-level recommendation itself.
- **M054:** the explicit-choice `pub2` is source-aligned; the default/opt-out `pub1` fails because it rests on uptake. Recovery requires consent-design evidence supporting the default architecture itself.

They should remain demoted unless such action-aligned evidence is found.

## Interpretation of the 17/200 yield

The **8.5% yield is not a measure of how often bioethical disagreement exists**. It reflects the conjunction of several requirements: a bounded decision, source-grounded affected/public positions on that decision, professional and framework candidates of the same actionable kind, genuine action distinctness, and a scenario that lies in the candidates' divergence band.

The 183 families outside the strict executable manifest remain part of the research resource. Their dispositions reveal different failures of translation, evidence, architecture, representable interests, or policy divergence and should be analyzed as results rather than treated as discarded cases.

## Next build stage

The immediate build queue is the thirteen cleared, untranscribed families listed above. For each pair:

1. transcribe concise and detailed representations from the reviewed deep file;
2. preserve identical load-bearing facts and the same decision question/candidate set;
3. verify the scenario occupies an action-divergence band;
4. carry source-aligned candidate provenance and label any narrow operational completion as `Bench-authored policy completion:`;
5. use the reviewed registered profile and Mean where asymmetric;
6. calculate hashes before commit;
7. run structural validation and companion/action audit;
8. keep Featured v1 in its separate manifest.

No additional family enters the Full Corpus executable manifest without independent clearance.