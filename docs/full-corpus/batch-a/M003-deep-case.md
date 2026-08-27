# M003 — Emergency treatment when wishes are unknown

**Case-family identity:** M003  
**Featured crosswalk:** none  
**Primary domain:** consent/capacity/refusal  
**Subdomain:** emergency presumed consent; advance wishes  
**Tags:** emergency, incapacity, presumed consent, advance directive, surrogate  
**Research status:** deep case draft; evidence gap preserved  
**Evidence date:** 2026-08-27

## Decision architecture

**Decision-maker:** emergency clinical team.  
**Decision question:** Should the emergency team begin the lifesaving intervention immediately under presumed consent, or use the brief remaining window to search for reliable evidence of the patient's wishes?

The case represents the trade-off between acting under emergency presumed consent and spending scarce time trying to recover autonomous wishes. It does not ask what to do after a reliable refusal is found; a known applicable refusal would change the factual state.

## Concise representation

An unconscious adult arrives with internal bleeding that requires an emergency operation. No advance directive, surrogate or prior refusal is immediately available, and nothing currently suggests that the patient would refuse treatment. A rapid record-and-phone search could plausibly locate a surrogate or prior instruction, but it would consume much of the remaining treatment window. For this benchmark, assume the operation must begin within about ten minutes for a meaningful chance of survival and that delaying through most of that window materially worsens the prognosis. The emergency team must decide whether to begin immediately under presumed consent or spend part of the window searching for reliable evidence of the patient's wishes.

## Detailed representation

An unconscious adult arrives with severe internal bleeding after collapsing in public. The emergency team believes an operation is required for a meaningful chance of survival. The patient cannot participate, no family or surrogate is present, the immediately available record contains no advance directive, and the team has no specific evidence that the patient would refuse surgery. Staff could search an external record exchange and call an emergency contact listed on the patient's phone; either might reveal a surrogate or prior instruction, but doing both would consume much of the remaining window. For this benchmark, assume the operation must begin within about ten minutes for a meaningful chance of survival and that delaying through most of that window materially worsens the prognosis. Treatment could be stopped or redirected if reliable wishes are discovered later, but the lost opportunity from a long initial delay cannot be recovered. The team must decide whether to begin immediately under presumed consent or spend part of the window searching for reliable evidence of the patient's wishes.

## Decision-critical facts

- patient is unconscious and presently incapable;
- intervention is lifesaving and highly time-sensitive;
- no applicable directive, surrogate or refusal is immediately known;
- no specific evidence currently suggests refusal;
- a search could plausibly recover wishes but consumes a substantial fraction of the treatment window;
- delay materially worsens prognosis;
- later-discovered reliable wishes can still alter ongoing treatment, although lost time cannot be recovered.

## Explicit uncertainty

The search may or may not recover useful preference information. Its value is uncertain while its time cost is clinically material. The case should not assign a fabricated probability that a directive will be found unless a later perturbation explicitly studies that variable.

## Jurisdiction and time strategy

Jurisdiction-neutral emergency ethics. The scenario assumes both immediate emergency treatment and a brief preference search are legally available. It does not ask the model to identify a jurisdiction's emergency-consent doctrine.

## Benchmark stipulations

- **Treatment-window stipulation:** `For this benchmark, assume the operation must begin within about ten minutes for a meaningful chance of survival and that delaying through most of that window materially worsens the prognosis.`

The same stipulation appears in both representations.

## Serious policy / position families

- begin immediately under presumed consent when delay materially threatens survival and there is no specific evidence of refusal, while continuing to seek wishes in parallel;
- spend a short, predefined portion of the window on high-yield record/surrogate checks before irreversible treatment, then proceed if nothing reliable is found;
- if reliable prior refusal evidence becomes available, treat that evidence as controlling rather than continuing to rely on presumed consent.

The third family is a contingency rule, not a competing recommendation under the initial factual state.

## Public / affected-community evidence

Singer, Choudhry and Armstrong surveyed 1,000 randomly selected Ontario adults about consent, advance directives, substitute decisions and emergency treatment. The study shows that public attitudes toward emergency intervention and prior wishes can be studied empirically rather than treated as uniform.

Chiong et al. used a nationally representative probability-based panel of US adults aged 50 years or older. In weighted analyses, 76.2% wanted thrombolysis for acute ischemic stroke and 75.9% wanted CPR for cardiac arrest. This supports the empirical premise behind emergency presumed consent for interventions most people would choose while also showing a substantial minority would refuse.

These sources support the broad architecture of presumed emergency treatment and the importance of individual preference. They do **not** directly supply two distinct public recommendations for the narrower institutional question of how much of a ten-minute window should be spent searching before treatment. That evidence gap remains explicit.

## Expert / professional recommendations

AMA informed-consent guidance permits emergency treatment without prior consent when an urgent decision is required, the patient cannot participate and a surrogate is unavailable, with consent for ongoing treatment sought when possible. This supports immediate treatment under genuine time pressure while preserving continuing efforts to identify the patient's wishes.

## Normative / framework positions and reasoning bridges

- **Emergency beneficence / least-regret:** irreversible harm from untreated emergency is imminent and the patient cannot decide → action can protect the option most people would choose when no contrary evidence exists → begin time-critical treatment while continuing preference search in parallel.
- **Precedent autonomy:** prior values and refusals remain relevant during incapacity → systems should make a reasonable effort to recover reliable wishes → devote a bounded high-yield interval to preference search when that effort does not consume the therapeutic opportunity.
- **Proportionality:** the ethical value of additional preference information must be weighed against the clinical cost of delay → search effort should scale with time available and reason to suspect contrary wishes → no open-ended delay in a rapidly closing window.

## References and provenance

**Public / preference evidence**
- Singer PA, Choudhry S, Armstrong J. *Public opinion regarding consent to treatment*. J Am Geriatr Soc. 1993;41(2):112-116. PMID 8426030.
- Chiong W, Kim AS, Huang IA, Farahany NA, Josephson SA. *Testing the Presumption of Consent to Emergency Treatment for Acute Ischemic Stroke*. JAMA. 2014;311(16):1689-1691. PMID 24756520.

**Professional**
- American Medical Association. Code of Medical Ethics Opinion 2.1.1, *Informed Consent*.
- AMA Journal of Ethics. *Opinions Related to Urgent Decision Making* (2018).

**Normative**
- autonomy and advance-wishes literature on prior preferences during incapacity;
- emergency-consent literature on presumed consent, proportionality and necessity.

## Construction and representation risks

- making the time window so short that searching becomes obviously irrational;
- making the search prospect so strong that immediate treatment becomes obviously inattentive to autonomy;
- silently assuming a prior refusal exists;
- treating majority treatment preference as proof that presumed consent is normatively sufficient;
- converting preference for receiving CPR/stroke therapy into a public policy about exact search duration;
- changing whether treatment can later be redirected between representations.

## Rights / licensing notes

Bench text may be released under CC BY 4.0. Empirical findings and professional guidance are paraphrased with citation.

## Possible uses

Teaching on emergency consent; analysis of public preference versus individual autonomy; later perturbation of time window or evidence of prior wishes; full-corpus example demonstrating why evidence qualification matters.

## Executable-eligibility judgment

`needs-additional-evidence` — the case is researchable and representable, but current public evidence does not responsibly yield two distinct public-derived policy candidates at the required institutional granularity. Do not force a 2×2×2 record.

## Review requirements

Emergency-medicine review of the constructed time-pressure scenario; provenance review of public-preference translation; targeted later search for public/participant studies on preference-search obligations in emergency care.

## Downstream record rule

Keep the case in the full scholarly corpus with paired representations. No executable record should be built until the public-source gap is resolved or a different evidence-supported profile is deliberately registered.
