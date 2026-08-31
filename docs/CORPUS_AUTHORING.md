# Authoring Bioethics Bench cases

**Audience:** anyone creating or revising machine-readable Bench cases.  
**Status:** current authoring rules.

`npm run validate` checks these rules. A green build means a file is structurally well formed; it does not mean the ethical or scholarly judgment is correct.

Released Featured v1 files remain unchanged for reproducibility.

## 1. Use the current terms

- **Case** — one bioethics problem.
- **Policy** — one possible position or course of action.
- **Policy type** — **Public**, **Expert**, or **Framework**.
- **Sourcing** — **Direct source**, **Inferred from source**, or **Constructed** in public-facing language.
- **Case version** — concise or detailed wording of the same case.
- **Evaluation setup** — the case plus the Public, Expert, and Framework policies used in a SACRE evaluation.

Legacy fields such as `benchmark_profile`, `candidate_pools`, `source_pool`, `policy_basis`, `frame_id`, and `geometry` remain where existing files and validators depend on them. New explanatory prose should translate them into the plain terms above.

## 2. Policy type and sourcing are separate

A policy's **type** says which role it plays in an evaluation:

- Public
- Expert
- Framework

A policy's **sourcing** says how it was identified.

Current benchmark records use `policy_basis` to preserve a more detailed machine distinction:

| Machine value | Plain meaning |
|---|---|
| `direct-policy-evidence` | **Direct source** — a source supports substantially the same policy |
| `source-informed-policy-inference` | **Inferred from source** — the source supports the underlying view or evidence and the Bench states the policy as an inference |
| `framework-derived-policy` | **Inferred from source** for public presentation — a framework supplies the principle and the Bench states its policy implication |
| `synthetic-author-constructed-policy` | **Constructed** — the Bench wrote the policy as a serious comparison option |

Do not infer Public / Expert / Framework type from the sourcing value.

## 3. Do not invent attributed positions

In evidence-bearing collections:

- a Public policy must not be presented as if a public, patient, or affected group directly holds it unless the evidence supports that claim;
- an Expert policy must not be presented as if a professional or governance source directly endorses it unless the evidence supports that claim;
- a Framework policy must identify the ethical framework or principle from which it is drawn;
- a Constructed policy is permitted, but it must be visibly identified as constructed.

A source may support a broader value or concern without stating an institutional policy. In that case, the policy should be labeled **Inferred from source**, not Direct source.

## 4. Policy wording can complete a source without overstating it

A sourced policy may add a narrow implementation detail needed to make the position usable, such as a safeguard, review step, documentation requirement, or continuity provision, when that detail does not change the source's basic recommendation.

If the Bench adds wording the source does not itself entail, disclose it in `provenance.summary` using:

> **Bench-authored policy completion:** …

Do not:

- turn a general attitude or concern into a stronger institutional rule and call it directly sourced;
- combine separate source themes into a new policy and attribute the composite to the source;
- create an opposing policy simply to fill a Public, Expert, or Framework slot;
- split one policy's nested conditions into several supposedly different policies;
- present an ethical-framework position as an affected-community or professional position, or vice versa.

## 5. Case assumptions must be visible

A `stipulations` entry is an assumption added to make the case sufficiently clear to evaluate. Every stipulation must also appear in the case text using the required marker:

> **For this benchmark, assume …**

An assumption stored only in metadata is invisible to the reader and to the model.

## 6. Concise and detailed versions must match

When a case has concise and detailed versions, they must preserve the same:

- decision question;
- Public / Expert / Framework policies;
- assumptions;
- declared evaluation profile, when one is used.

The case descriptions themselves must differ: the detailed version adds context.

Companion files must name each other in `representation.companion_record_ids`.

Once either version is frozen or released, the required companion set must be complete.

## 7. Number of policies and aggregation

A SACRE-ready case can have different numbers of Public, Expert, and Framework policies.

If those three counts are unequal, policies will have unequal numbers of cross-type comparison partners. In that situation, the record must declare `required_aggregation: "mean"` unless a registered profile already requires it.

Legacy code calls the three counts a `geometry`. Current prose should say **policy counts** or **number of policies**.

## 8. Registered profiles

`benchmark_profile` is an optional machine identifier for a reusable evaluation setup. `schemas/benchmark-profiles.json` defines the expected Public, Expert, and Framework policy IDs, required aggregation, and case versions for registered profiles.

An unregistered profile fails validation.

A case that does not need a reusable named setup can omit the profile and still be valid, provided the record itself satisfies all relevant checks.

## 9. Several evaluation setups for one case

A well-researched case may support more than one defensible SACRE evaluation setup. Legacy files may represent these with `frame_id` and `frame_version` and may use terms such as `natural`, `source-informed`, or `matched-3x3x3`.

Treat each as a distinct, versioned evaluation setup. Do not place several different Public / Expert / Framework assignments inside one record.

The case itself can remain the same; the set or type assignment of policies changes only in the explicitly named evaluation setup.

## 10. Lifecycle and exposure

`draft → editorial-review → reviewed → frozen → released`

- `confirmatory-holdout` material must not be publicly committed.
- A released record must carry an `exposure_history` entry.
- A frozen or released record must be covered by a registered editorial source under `docs/dossier-sources.json`.

Publication is irreversible for holdout purposes.

## 11. Register the editorial source

`docs/dossier-sources.json` tells the validation scripts where the prose used to review a collection lives.

The dossier/record comparison checks the decision question, case versions, and policy wording against that registered source.

A frozen or released record in an unregistered collection fails validation.

## 12. Run the checks

```bash
npm run validate
node scripts/validate-selftest.mjs
```

Add a self-test whenever you add a new validation rule.

## 13. What automated checks do not establish

Automated validation cannot determine:

- whether the case is ethically important or well chosen;
- whether two policies are genuinely distinct;
- whether policies are matched at a sensible level of specificity;
- whether a cited source really supports the policy attributed to it;
- whether Direct / Inferred / Constructed is the correct sourcing judgment;
- whether Public / Expert / Framework is the correct policy type for an evaluation.

Those require scholarly review.
