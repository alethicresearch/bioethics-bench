# M123 — Wastewater surveillance without individual consent

**Case-family identity:** M123  
**Primary domain:** public-health surveillance / privacy  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** municipal/public-health agency.  
**Decision question:** May a public-health agency monitor wastewater at neighborhood or institutional level without individual consent, and what limits should govern resolution and secondary use?

## Scenario pair
**Concise:** A city wants to expand wastewater surveillance from citywide infectious-disease monitoring to neighborhood-level monitoring for pathogens and drug markers. Individual opt-out is technically impossible. The data would not identify named people, but smaller catchments increase stigma and re-identification risks. The agency must choose whether to permit broad community-level surveillance, permit only lower-resolution pathogen surveillance with strict use limits and community oversight, or require special approval before small-area or noninfectious targets are monitored.

**Detailed:** A public-health department already monitors municipal wastewater for respiratory pathogens. It proposes adding neighborhood and institutional catchments and expanding targets to antimicrobial resistance and drug-use markers. Samples aggregate many individuals, but smaller catchments can map sensitive information to a dormitory, shelter, prison or neighborhood. Individual consent/opt-out cannot practically be obtained. The agency can keep broad surveillance authority where public-health benefit is demonstrated; restrict routine surveillance to sufficiently large catchments and infectious-disease targets while prohibiting law-enforcement or commercial use; or require community notice/ethics review before small-area or sensitive-target surveillance is added.

## Source architecture
The National Academies' 2023 report concludes that responsibly managed community-level wastewater surveillance can be ethically acceptable without individual consent but recommends privacy protection, transparency, community input, ethics governance and ongoing assessment of re-identification risk. A 2023 US survey found roughly 91% support for disease/toxin monitoring, 70% for illicit drugs, and much lower support for lifestyle/mental-health markers; support was also substantially higher for citywide than smaller-scale surveillance.

## Serious policy families
- broad governed public-health surveillance where population benefit is established;
- low-resolution/pathogen-focused surveillance with strict purpose and use limits;
- special community/ethics approval for small-area or sensitive-target monitoring.

## Normative bridges
**Public-health utility:** collective surveillance can detect threats without testing individuals.  
**Privacy/proportionality:** resolution and target sensitivity determine dignitary and stigma risk.  
**Legitimacy:** nonconsensual surveillance requires transparent governance and limits against mission creep.

## Construction risks
Do not say wastewater is anonymous by definition; do not treat pathogen and illicit-drug monitoring as ethically equivalent; do not allow law-enforcement use silently; specify geographic resolution.

## Executable judgment
Provisional candidate-audit target. Public evidence directly distinguishes targets and resolution, while professional governance supplies one conditional architecture. Likely `2×1×2` only if public positions can be translated without creating a new rule.

## Principal sources
National Academies, *Wastewater-based Disease Surveillance for Public Health Action* (2023); US public-opinion study PMID 39212278; 2025 wastewater-display ethics framework.

## Candidate audit reconciliation — 2026-08-28

This section supersedes the provisional executable judgment above, which was written before
the candidate audit was performed and was never revised afterwards. The audit's result is the
committed record; what follows states that result in the dossier, where a reviewer will look
for it. The earlier judgment is preserved above as research history.

The public layer is one direct and one inferred candidate, and the split tracks a real feature of the
evidence. National opinion research shows very high support for disease and toxin monitoring and,
importantly, *substantially greater* support for citywide than for highly localized surveillance —
so `pub1` is direct policy evidence, with a use-limit clause keeping it inside the public-health
purpose respondents were asked about. `pub2` infers a restriction on sensitive targets and small
catchments from the lower support those attract; the separate-justification and community-governance
threshold is Bench-authored completion, since respondents were not asked to design an approval
process.

The expert layer is a legitimate **singleton** formed by synthesis rather than by selection. The
National Academies and WHO converge on one architecture: community-level surveillance can be
ethically acceptable without individual consent, conditioned on proportional benefit, privacy and
stigma safeguards, purpose limitation, transparency, engagement, and heightened scrutiny for
hyper-localized or sensitive uses. Two convergent sources supporting one action-distinct position is
one candidate, per construction rule 7.

The framework layer's third position is worth noting because it is not a midpoint: conditional
authorization after a distinct approval process acts differently from categorical restriction on the
sensitive-target case, which is where the scenario is fixed.

Source-to-policy fidelity across these candidates remains subject to independent human review.
`reviewed_by_human` stays false on the records.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `2 public × 1 expert × 3 framework`  
**Cross-source pairs:** 11  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m123-wastewater-surveillance-consent-resolution-natural-concise-v1`, `m123-wastewater-surveillance-consent-resolution-natural-detailed-v1`

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
