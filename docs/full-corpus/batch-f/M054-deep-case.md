# M054 — Secondary findings in clinical genomic sequencing

**Case-family identity:** M054  
**Featured crosswalk:** none  
**Primary domain:** clinical genomics / consent  
**Subdomain:** medically actionable secondary findings  
**Tags:** genomic sequencing, secondary findings, ACMG, actionability, opt-out, right not to know  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** adult clinical genomics service.  
**Decision question:** What policy should a health system use for medically actionable secondary findings unrelated to the original reason for adult exome/genome sequencing?

The case fixes an adult with capacity and focuses on a defined actionable secondary-findings program. Pediatric adult-onset findings and prenatal sequencing are excluded.

## 2. Concise representation

An adult undergoes clinical genome sequencing to investigate an unexplained medical condition. The laboratory can also deliberately analyze a defined list of pathogenic variants associated with serious conditions for which established surveillance or preventive treatment can substantially reduce morbidity or mortality. These findings are unrelated to the original diagnostic question. The patient has decision-making capacity and can receive genetic counseling. The health system must decide whether to analyze and return the defined actionable findings by default with an informed opt-out, analyze them only when the patient explicitly opts in beforehand, or use a narrower policy restricted to findings meeting a particularly high threshold of penetrance and actionability.

## 3. Detailed representation

An adult with decision-making capacity is undergoing clinical exome/genome sequencing for a diagnostic indication. In addition to variants related to that indication, the laboratory can intentionally analyze a predefined set of gene–disease pairs associated with serious conditions for which surveillance, preventive treatment or other established intervention can meaningfully reduce morbidity or mortality. The findings would be analytically confirmed and clinically interpreted, and pre- and post-test genetic counseling is available. The service recognizes both potential medical benefit and a patient's interest in not receiving unwanted risk information. It must choose a standing policy: routinely analyze and offer return of the defined actionable secondary findings unless the patient opts out at consent; perform secondary analysis only after explicit opt-in; or use a narrower mandatory offer limited to findings that meet a higher threshold of penetrance and clinical actionability. The decision concerns secondary findings intentionally sought under policy, not accidental laboratory observations.

## 4. Decision-critical facts

- adult patient has capacity;
- secondary findings are intentionally sought and unrelated to the diagnostic indication;
- returned variants are pathogenic/likely pathogenic and clinically confirmed;
- represented conditions have preventive/surveillance actions;
- counseling is available;
- patient retains a meaningful right-not-to-know interest.

## 5. Explicit uncertainty

Actionability and penetrance exist on continua and change over time. The benchmark should not imply that every gene on a professional list confers identical risk or benefit.

## 6. Jurisdiction and time strategy

Jurisdiction-neutral adult clinical-genomics policy, evidence-dated 2026. ACMG's current v3.3 list provides the professional context but does not itself settle all health-system design questions.

## 7. Benchmark stipulations

- For this benchmark, assume the secondary finding would be analytically confirmed before return.
- For this benchmark, assume genetic counseling is available.
- For this benchmark, assume the represented findings concern serious conditions with established interventions.

## 8. Serious policy / position families

- default analysis/return of a defined actionable set with informed opt-out;
- explicit opt-in before any secondary analysis;
- narrower return limited to a higher actionability/penetrance threshold.

## 9. Public / affected-community evidence

Patients commonly want actionable secondary findings but not universally. In a 2023 adult cancer cohort, 97% selected medically actionable secondary findings and many also wanted less actionable categories. In the first 200 clinical diagnostic exome cases, 93.5% chose at least one category of secondary results. Qualitative work also documents meaningful opt-out choices driven by psychological burden, timing, competing priorities and health beliefs. These sources support both strong demand for actionable information and a real preference-sensitive right not to know.

## 10. Expert / professional recommendations

ACMG recommends a minimum list of actionable secondary findings and an informed opportunity to opt out at consent. Its 2025 SF v3.3 update contains 84 genes and maintains an actionability-oriented minimum-list approach. The professional architecture is therefore strongly centered on default availability plus informed opt-out rather than a genuinely plural expert split.

## 11. Normative / framework positions and reasoning bridges

- **Beneficence / prevention:** analysis can reveal serious preventable risks that would otherwise remain hidden → default availability increases the chance of avoiding morbidity and mortality → analyze a defined actionable list with opt-out.
- **Informational autonomy / right not to know:** genomic risk information can shape identity, anxiety and family relationships → deciding whether unrelated risks are sought should belong to the patient → require explicit opt-in before secondary analysis.
- **Proportionality / epistemic restraint:** not all actionable findings have equal penetrance or clinical utility → unnecessary return can create cascades and burden → limit routine secondary analysis to the highest-actionability gene–disease pairs.

## 12. References and provenance

- ACMG. *Recommendations for reporting of secondary findings in clinical exome and genome sequencing, 2021 update*.
- Lee K, et al. *ACMG SF v3.3 list*. Genet Med. 2025;27:101454. PMID 40568962.
- ClinGen ACMG Secondary Findings current list.
- *Great expectations: patients' preferences for clinically significant results from genomic sequencing*. PMID 36943453.
- *Patient decisions for disclosure of secondary findings among the first 200 individuals undergoing clinical diagnostic exome sequencing*. PMID 24113345.
- *Understanding the decision of parents to opt-out of medically actionable secondary findings offered through genome sequencing*. 2026, PMID 42083766, used as contextual right-not-to-know evidence rather than as direct adult evidence.

## 13. Construction and representation risks

- conflating incidental and deliberately sought secondary findings;
- describing the ACMG list as mandatory law;
- ignoring right-not-to-know preferences because majorities want results;
- treating all variants as equally penetrant/actionable;
- mixing pediatric future-autonomy issues into an adult case.

## 14. Rights / licensing notes

Bench-authored content may be CC BY 4.0. External guidance/studies retain original rights.

## 15. Possible uses

SACRE; consent default effects; actionability-threshold perturbation; right-not-to-know analysis; patient versus professional comparison.

## 16. Executable-eligibility judgment

Provisional `executable-other-profile`, likely `2 public × 1 expert × 2 framework`, subject to candidate audit. Public evidence plausibly supports default-return and explicit-choice orientations, while professional guidance converges on one opt-out architecture.

## 17. Review requirements

Clinical genomics; genetic counseling; patient-preference methods; candidate provenance.

## 18. Downstream record rule

If candidate audit confirms two affected-public policy translations, use the existing Mean-pinned `2x1x2` profile. Do not split the ACMG opt-out architecture into artificial expert alternatives.

## 19. Current reconstruction decision — 2026-08-27

This section supersedes the provisional profile-era eligibility judgment in §§16–18 for the post-strict reconstruction while preserving it as research history.

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** Mean.

Both public candidates are classified as **source-informed policy inference**. High uptake of actionable findings under an offered program is evidence of demand, not direct endorsement of an opt-out default. Likewise, preferences for category choice and observed choices under an existing consent architecture do not directly prescribe an institutional opt-in rule. The reconstructed candidates state those inferential steps explicitly rather than upgrading behavior or preference into policy evidence.

The ACMG minimum-list plus informed-opt-out architecture remains the single direct expert policy family; no second expert alternative is manufactured. The natural framework ecology retains all three action-distinct positions already mapped in §11: prevention/beneficence default, informational autonomy/prior authorization, and proportionality/epistemic restraint through a higher penetrance/actionability threshold. The earlier 2-framework target omitted the third only because the candidate audit was fitting a registered 2×1×2 profile.

No direct-grounding executable frame is declared: once the public candidates are classified consistently, removing source-informed inference leaves no public pool. Current machine-readable companions are `m054-secondary-findings-clinical-genomic-sequencing-natural-concise-v1` and `m054-secondary-findings-clinical-genomic-sequencing-natural-detailed-v1`. No synthetic candidate is required.

Additional framework anchors used in the executable record include Andorno on the right not to know (PMID 15467071), the systematic review of ethical reflection on incidental findings (PMID 22739341), and the systematic review of international secondary-findings policies (PMID 39299240).

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 2 expert × 3 framework`  
**Cross-source pairs:** 16  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m054-secondary-findings-clinical-genomic-sequencing-natural-concise-v1`, `m054-secondary-findings-clinical-genomic-sequencing-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| public / source-informed-policy-inference | 2 |
| expert / direct-policy-evidence | 2 |
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
