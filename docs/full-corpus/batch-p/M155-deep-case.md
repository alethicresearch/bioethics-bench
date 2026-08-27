# M155 — Deploying an AI diagnostic tool with weak local validation

**Case-family identity:** M155  
**Primary domain:** global health / AI governance  
**Subdomain:** local validation; access; lower-resource deployment  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** health-system regulator or ministry in a lower-resource setting.  
**Decision question:** Should a diagnostic AI be deployed when it could expand access substantially but has limited local-population validation?

## 2. Concise representation

A health system has severe shortages of specialists and long diagnostic delays. A diagnostic AI performs well in several external populations and could extend access immediately, but local validation is limited and the system may underperform because of differences in disease prevalence, equipment, language and population characteristics. The authority must decide whether to require local validation before deployment, permit a limited monitored pilot with fallback to clinicians, or deploy more broadly because the baseline alternative is often delayed or absent care.

## 3. Detailed representation

A ministry is considering a clinically validated diagnostic model developed mostly in wealthier health systems. Local specialist capacity is sparse, and many patients currently receive delayed diagnosis or none at all. Preliminary testing on a small local sample is promising but too limited to establish subgroup performance and calibration. The model can be used with human review for uncertain/high-risk cases, and prospective monitoring is feasible. The authority must decide whether full local validation must precede any use, whether a limited prospective pilot with predefined stopping rules and fallback care is justified, or whether broad deployment is acceptable because the expected access gain outweighs residual validation uncertainty.

## 4. Critical facts and uncertainty

- baseline access is materially poor;
- model has external but limited local validation;
- local epidemiology/workflow can affect performance;
- monitored pilot and fallback are feasible;
- broad deployment could rapidly expand access but also scale hidden error.

## 5. Serious policy families

- require local validation first;
- limited monitored pilot with fallback;
- broader deployment when expected net access benefit is high.

## 6. Public / affected evidence

Direct local-community evidence must be setting-specific. Current global surveys about AI trust cannot validly stand in for populations whose access constraints and data representation differ. No reusable two-policy affected pool is yet supported.

## 7. Expert / professional evidence

WHO AI guidance emphasizes safety, equity, inclusiveness, transparency and evidence of benefit. Its 2026 evidence-policy discussion warns that AI can marginalize local expertise and lived experience. The professional direction favors context-sensitive validation and monitored/risk-based deployment rather than a simple universal prohibition or permission.

## 8. Framework positions

- access/beneficence → some uncertain but monitored AI-supported care may be better than persistent no-access;
- epistemic justice → local populations should not bear unmeasured error from models trained elsewhere;
- staged proportionality → pilot under safeguards and expand only if local evidence supports it.

## 9. References

- WHO. *Ethics and governance of artificial intelligence for health*. 2021.
- WHO. *Ethics and governance of artificial intelligence for health: guidance on large multi-modal models*. 2025.
- WHO. *Artificial intelligence and evidence-informed policy: emerging challenges and opportunities*. 2026.

## 10. Construction risks

Do not assume “some care is better than none”; do not make lower-resource populations experimental by default; do not pretend generic public trust surveys provide local policy evidence.

## 11. Executable-eligibility judgment

`research-complete-not-executable`. The policy is important, but strict executable construction requires setting-specific affected evidence that cannot be generalized honestly at this stage.
