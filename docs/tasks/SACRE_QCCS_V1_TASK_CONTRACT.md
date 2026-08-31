# Bioethics Bench task contract — `sacre-qccs-v1`

**Contract version:** 0.1.0  
**Task protocol:** `sacre-qccs-v1`  
**QCCS version:** 1.0.0  
**Scoring scale:** `conv+`, integer 0–100

This document states, in plain terms, what SACRE does when a Bioethics Bench case is loaded for evaluation.

## 1. What SACRE loads

A SACRE evaluation starts with:

1. a **case**;
2. **Public** policies;
3. **Expert** policies;
4. **Framework** policies.

Public / Expert / Framework describe the **type of policy**.

How a policy was sourced is separate. Bioethics Bench may label a policy as **Direct source**, **Inferred from source**, or **Constructed**. Those sourcing labels matter for scholarship and review, but they do not change how QCCS calculates a policy-pair score.

The exact case text, policy text, policy type, version, and identifying hashes should be preserved with the evaluation so the same setup can be reconstructed later.

## 2. Which policies SACRE compares

SACRE compares policies across different types:

- Public ↔ Expert;
- Public ↔ Framework;
- Expert ↔ Framework.

It does not include Public ↔ Public, Expert ↔ Expert, or Framework ↔ Framework pairs in the standard QCCS matrix.

If there are `P` Public policies, `E` Expert policies, and `F` Framework policies, the number of required comparisons is:

```text
P×E + P×F + E×F
```

Every required pair appears once.

## 3. QCCS v1 score

For each required pair, QCCS asks:

> **How much do these two policies converge in what they recommend should be done in this case?**

The standard `conv+` scale is an integer from 0 to 100:

- **0** — no positive normative convergence;
- **100** — full convergence in what the two policies recommend.

Each score is accompanied by a short justification.

The scale measures positive convergence. A score of 0 does not separately distinguish unrelated policies from actively opposed policies.

## 4. Complete evaluations

SACRE needs a score for every required cross-type pair before it reports an official ranking or provisional Final Policy.

If a required comparison is missing or fails:

- completed scores can be retained for diagnosis or retry;
- the evaluation remains incomplete;
- the official ranking is withheld;
- the provisional Final Policy is withheld.

Retry rules and model settings belong to the evaluation being run. They do not change which policy pairs the task requires.

## 5. Combining the scores

Each policy receives scores from its comparisons with policies of the other two types.

When every policy has the same number of comparison partners, Sum and Mean produce the same ordering when all policies have equal weight. SACRE's reference setting may therefore use Sum.

When policies have different numbers of comparison partners, **Mean is required** so a policy is not favored simply because it was compared with more policies.

This rule depends only on the numbers of Public, Expert, and Framework policies in the loaded case.

## 6. SACRE outputs

With a complete comparison matrix and a compatible aggregation rule, SACRE produces:

1. a Public + Expert ranking;
2. a full ranking across Public, Expert, and Framework policies;
3. a **provisional Final Policy**, defined as the highest-ranked policy in the full ranking;
4. the pair-level scores and explanations used to produce those rankings.

The provisional Final Policy is the result of this stated evaluation procedure. It is not a claim of moral truth or an all-things-considered moral answer.

## 7. Concise and detailed case versions

A Bench case can have a **concise** and a **detailed** version.

When the two are used as matched versions of the same case, they should preserve the same policy options. SACRE evaluates one version at a time. Comparing concise and detailed runs therefore tests whether added case detail changes the evaluation.

## 8. What should be recorded with a research run

A reproducible run should identify:

### Case and policies

- Bench case and record identifiers;
- concise or detailed version;
- case text or case hash;
- ordered Public, Expert, and Framework policy IDs and text or hashes;
- Bench version/release information;
- sourcing information where available.

### QCCS task

- `task_protocol_id = sacre-qccs-v1`;
- contract version;
- QCCS protocol version;
- `scoring_mode = conv+`;
- required policy pairs;
- selected aggregation rule.

### Evaluation settings

- model/provider or human evaluator;
- model version where available;
- temperature, top-p, maximum tokens, and seed where supported;
- prompt hashes;
- attempts, failures, and retries;
- application commit/build identity.

## 9. Current compatibility check

The existing Bench-to-SACRE adapter verifies that the current prepared Bench cases load into SACRE with the same case text, Public / Expert / Framework policy assignments, pair counts, and required aggregation used by the application.

That check establishes compatibility between the Bench files and SACRE's task implementation. It does **not** establish:

- QCCS reliability or validity;
- moral correctness of QCCS scores or rankings;
- agreement with human judgments;
- independent source-to-policy fidelity for every Bench policy;
- confirmatory P3 results.

## 10. Authoritative machine files

The machine-readable definition remains in:

- `tasks/sacre-qccs-v1/task-contract.json`
- `scripts/task-adapters/sacre-qccs-v1.mjs`
- `scripts/verify-sacre-qccs-v1-adapter.mjs`

The canonical QCCS prompt/specification remains owned by the SACRE repository. Bioethics Bench should not maintain a second independently editable copy of that prompt.
