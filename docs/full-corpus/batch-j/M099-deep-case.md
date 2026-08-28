# M099 — Public reimbursement of a very high-cost therapy

**Case-family identity:** M099  
**Primary domain:** health policy / resource allocation  
**Tags:** high-cost therapy, reimbursement, cost-effectiveness, severity, rare disease, coverage with evidence development  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## Decision architecture

**Decision-maker:** public health-technology assessment/reimbursement authority.  
**Decision question:** How should a public health system evaluate a very high-cost therapy that provides substantial benefit to a small group but displaces other effective services?

## Scenario pair

**Concise:** A new one-time therapy for a rare severe disorder produces a large average health gain compared with current care, but its price makes the cost per unit of health substantially higher than the health system's ordinary reimbursement threshold. Treating all eligible patients would displace other services that generate more aggregate health benefit. Evidence is promising but long-term durability remains uncertain. The authority must decide whether to apply its ordinary cost-effectiveness threshold, give extra weight to severity/rarity and accept a higher threshold, or provide conditional coverage while collecting longer-term evidence and negotiating price or outcome-based terms.

**Detailed:** A publicly funded health system is evaluating a one-time therapy for an ultra-rare, severely disabling and life-shortening condition. Clinical trials show a substantial improvement in survival and function compared with existing care, but patient numbers are small and durability beyond several years is uncertain. At the manufacturer's current price, the therapy's incremental cost-effectiveness is well above the system's ordinary threshold. Funding it for all eligible patients would consume resources that could otherwise generate greater aggregate health gains elsewhere. The system already recognizes that severity can ethically modify ordinary cost-effectiveness judgments and has mechanisms for conditional coverage/evidence development when uncertainty is material. The authority must choose whether to apply the ordinary threshold without special rarity treatment; accept a substantially higher threshold because of severity and the small ultra-rare population; or offer conditional/negotiated coverage tied to evidence development, price adjustment or outcomes while uncertainty is reduced.

## Evidence architecture

NICE explicitly treats opportunity cost as central to health-technology evaluation but uses severity modifiers and a much higher threshold for highly specialized ultra-rare technologies, acknowledging that this intentionally sacrifices some aggregate health gain to support access for severe rare disease. CMS Coverage with Evidence Development supplies a real governance architecture for conditional coverage when evidence uncertainty is important. These are action-distinct institutional approaches across systems, though not necessarily two recommendations from one authority.

Public/patient evidence often supports greater priority for severe/rare disease, but willingness to sacrifice aggregate health varies and is sensitive to size of benefit, severity and rarity. Direct evidence matched to the fixed opportunity-cost scenario is needed before execution.

## Frameworks

- **Cost-effectiveness/equal health opportunity:** scarce public funds should purchase as much health as possible → apply ordinary threshold and count displaced care.
- **Severity/prioritarianism:** greater weight can legitimately be given to people facing profound health loss even at lower aggregate efficiency → use a severity-adjusted threshold.
- **Learning/conditional access:** when benefit is plausible but durability/value uncertain, conditional coverage can provide access while protecting the system from an irreversible full-price commitment.

## Construction risks

Do not treat rarity alone as moral priority. Make opportunity cost explicit. Separate uncertainty from price. Do not imply conditional coverage eliminates access inequity or evidence burden.

## Executable judgment

`candidate-audit-required`. The dossier identifies this family as a candidate-audit target but no candidate audit has been performed, so it is held for v1. Promotion requires a recorded audit establishing action-distinct candidates in each represented pool under the four-basis rule. Original judgment, kept as research history:

> Provisional candidate-audit target. Real policy architectures exist (ordinary appraisal, severity/ultra-rare modifiers, conditional evidence development), but public/affected candidate support must be verified rather than inferred from rare-disease advocacy.

## Sources

NICE health-technology evaluation manual, severity modifier and Highly Specialised Technologies framework; NICE 2025 HST routing update; CMS Coverage with Evidence Development guidance (2024); ethics literature on coverage with evidence development.

## Candidate audit result — 2026-08-28

`audit-complete-not-executable`. This section supersedes the provisional judgment above. Where the hold rests on a gap the dossier itself identified, that is stated;
where sources were checked directly, the finding is given.

**Held on the gap the dossier itself identifies.** The expert layer is the strong part and is close
to executable: NICE's ordinary appraisal with severity modifiers and a substantially higher threshold
for highly specialised ultra-rare technologies, against the CMS Coverage with Evidence Development
architecture for conditional coverage under material uncertainty. Those are action-distinct across
systems, and the corpus already accepts cross-jurisdiction expert pluralism where both positions are
in force (M106 does exactly this).

The public layer is what blocks it, and the dossier states the requirement precisely: public and
patient evidence supports greater priority for severe and rare disease, but willingness to sacrifice
aggregate health varies and is sensitive to the size of benefit, severity and rarity, so "direct
evidence matched to the fixed opportunity-cost scenario is needed before execution." A preference
that moves with how the trade-off is framed is not yet a policy position on this trade-off. The
dossier's construction risks also warn against treating rarity alone as moral priority, which is the
shape the inference would most easily take.

**Held, and the nearest of the held families to promotion.** What it needs is specific: preference
evidence elicited with the opportunity cost made explicit — respondents told what is displaced —
rather than rare-disease support elicited in isolation. That is a single targeted study, not a
research programme.

Held is a recoverable state. The dossier stands as a research result; what it lacks is
source-to-policy alignment at the represented action.

## Candidate audit result — 2026-08-28 (revised)

**Executable under a two-pool scheme.** This supersedes the hold recorded above, and the reason
it does is worth stating precisely: nothing was discovered about M099. What changed is that the
corpus no longer requires every case to populate a public pool.

**Canonical frame:** `natural@1.0.0`
**Source scheme:** `professional-framework@1.0.0`
**Geometry:** `2 professional × 3 framework`
**Cross-source pairs:** 6
**Required aggregation:** Mean.

The earlier hold said the expert layer was "the strong part and close to executable" and that
"the public layer is what blocks it." That assessment stands in full. NICE and CMS supply two
architectures that are action-distinct at the fixed facts: NICE holds the ordinary threshold and
adjusts it, applying a severity weight by health shortfall and routing highly specialised
technologies for very rare conditions to a substantially higher threshold; CMS Coverage with
Evidence Development, as updated in August 2024, declines to settle the threshold judgment now and
conditions coverage on the patient's care contributing data through an approved registry or study,
time-limited rather than indefinite. Adjusting a threshold and deferring the judgment are different
actions, and the authority must choose one.

The public layer remains exactly as the hold described it. Affected-community evidence on
willingness to trade aggregate health for severity exists, but it moves with how the trade-off is
framed, and no candidate can be built from it without a bridge the evidence does not support. Under
the fixed three-pool requirement that made the case non-executable. Under
`professional-framework` it is a declared property of the field: this is a disagreement between
institutional architectures and normative positions, and the record says so rather than
manufacturing a third pool to satisfy a shape.

The three framework positions are action-distinct at the fixed facts and each is deliberately
separated from its nearest professional neighbour. `fw1` declines at this price on equal-health-
opportunity grounds, which no professional candidate does. `fw2` grounds the severity concession
itself, where `prof1` bounds it within a threshold architecture. `fw3` makes payment contingent on
outcomes achieved, where `prof2` defers the judgment procedurally.

Sources verified directly: the CMS CED guidance and its 2024 revision, and the NICE severity
weighting and highly specialised technologies routing.

`reviewed_by_human` remains false.

## Audited executable decision

<!-- BEGIN AUDITED-EXECUTABLE-DECISION — generated by scripts/dossier-decision-sync.mjs -->

**Canonical frame:** `natural@1.0.0`  
**Geometry:** `0 public × 0 expert × 3 framework`  
**Cross-source pairs:** 0  
**Required aggregation:** mean — Mean is mandatory; partner counts differ across candidates.  
**Records:** `m099-public-reimbursement-very-high-cost-therapy-natural-concise-v1`, `m099-public-reimbursement-very-high-cost-therapy-natural-detailed-v1`

Policy basis of the audited candidate set:

| Source pool / policy basis | Candidates |
|---|---|
| framework / framework-derived-policy | 3 |

This block is derived from the committed record, not from the prose above it.
Where the two differ, the record is the audited result and the prose is the
pre-audit estimate, kept as research history. Nothing here certifies
source-to-policy fidelity, which remains subject to independent human review.

<!-- END AUDITED-EXECUTABLE-DECISION -->
