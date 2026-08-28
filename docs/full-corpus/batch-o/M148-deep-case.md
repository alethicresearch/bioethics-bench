# M148 — AI-driven prior authorization

**Case-family identity:** M148  
**Primary domain:** payer AI / procedural fairness  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture
**Decision-maker:** health insurer/payer governance body.  
**Decision question:** Should a payer use AI to approve or deny coverage requests when automation reduces delay but creates opaque errors?

## Scenario pair
**Concise:** A payer has an AI system that can rapidly approve many routine prior-authorization requests and recommend denials when criteria appear unmet. Automation shortens turnaround time, but clinicians report occasional denials based on incomplete context. The payer must decide whether AI may make approvals but all denials require physician review, whether automated adverse decisions are acceptable with rapid appeal, or whether high-stakes prior authorization should not use algorithmic decision-making at all.

**Detailed:** A health plan processes thousands of prior-authorization requests. An AI system accurately identifies straightforward approvals and can also recommend adverse decisions based on coverage guidelines. Automated processing reduces delays substantially, but some records contain contextual information the model may not interpret correctly, and the payer has a financial incentive to limit coverage. AMA's 2026 policy opposes autonomous or semiautonomous AI as a substitute for physician review in coverage determinations and calls for physician-led processes and transparency around adverse decisions. The payer must choose whether AI can automate approvals while denials receive qualified human review, whether automated denials can stand subject to fast appeal, or whether AI should be excluded from high-stakes coverage determinations.

## Source architecture
AMA currently provides unusually explicit professional guidance: coverage determinations should remain physician-led and AI should not substitute for physician review, especially for adverse decisions. Broader payer regulation emphasizes timely decisions and appeal rights. This supports asymmetric process rules rather than a professional pro-autonomous-denial candidate.

## Serious policy families
- automate approvals, require qualified physician review for denials;
- allow automated adverse decisions with immediate transparent appeal and human reconsideration;
- prohibit algorithmic prior authorization for high-stakes care.

## Normative bridges
**Due process:** denial of medically important care requires reasons, contestability and accountable review.  
**Efficiency:** automating routine approvals can reduce harmful administrative delay.  
**Conflict of interest:** payer incentives strengthen the case for human and procedural safeguards around adverse decisions.

## Construction risks
Do not treat approval and denial symmetrically; specify appeal speed; distinguish recommendation from final determination; do not infer professional acceptance of automated denials from use of AI elsewhere.

## Executable judgment

`candidate-audit-required`. The dossier identifies this family as a candidate-audit target but no candidate audit has been performed, so it is held for v1. Promotion requires a recorded audit establishing action-distinct candidates in each represented pool under the four-basis rule. Original judgment, kept as research history:

> Provisional candidate-audit target, but likely asymmetric: professional guidance strongly supports physician review while patient/clinician evidence may support different procedural thresholds.

## Principal sources
AMA 2026 policy on AI, physician judgment and payer coverage determinations; CMS prior-authorization/interoperability rules; health-law and utilization-management literature.

## Candidate audit result — 2026-08-28

`audit-complete-not-executable`. This section supersedes the provisional judgment above. Where the hold rests on a gap the dossier itself identified, that is stated;
where sources were checked directly, the finding is given.

**Held on a singleton professional layer and an unestablished public layer.** The dossier's own
source architecture is the finding: AMA guidance is "unusually explicit" that coverage
determinations should remain physician-led and that AI should not substitute for physician review,
especially for adverse decisions — and it notes that this "supports asymmetric process rules rather
than a professional pro-autonomous-denial candidate." That is one professional architecture, not
two, and the second represented position (permitting automated adverse decisions with transparent
appeal and human reconsideration) has no professional source endorsing it.

The public layer was flagged as likely to support "different procedural thresholds" but no direct
patient or enrollee evidence on prior-authorization automation policy has been identified. Public
hostility to prior authorization generally is not a position on whether the adverse decision may be
automated subject to appeal.

**Held.** Promotion requires either a professional or regulatory source that actually permits
automated adverse determinations under procedural safeguards — regulatory attention to timeliness
and appeal rights is not that — or direct affected-community evidence distinguishing the represented
procedural thresholds.

Held is a recoverable state. The dossier stands as a research result; what it lacks is
source-to-policy alignment at the represented action.
