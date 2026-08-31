# Bioethics Bench — Machine Model for Scenario, Candidate Universe, and SACRE Projections

**Status:** implementation architecture adopted after the 200/200 rich-candidate audit  
**Date:** 2026-08-30

## 1. Why a second layer is necessary

The existing executable case schema stores candidates in `candidate_pools.public`, `candidate_pools.expert`, and `candidate_pools.framework`. That is appropriate for a **particular executable SACRE representation**, because the role assignment determines which cross-source comparisons are scored.

It is not an adequate neutral representation of the scholarly case family after the Full-200 reconstruction. The audit established that two questions must be kept separate:

1. **What serious Policy positions belong in the represented normative field, and what is the provenance of each?**
2. **Which of those positions should occupy Public, Expert, and Framework roles in one declared SACRE analysis?**

If these are collapsed, weak empirical coverage can erase serious positions, or an unsourced comparator can be laundered into a Public/Expert role merely because an executable geometry requires one.

## 2. Three machine objects

### A. Existing represented case record

Schema: `schemas/case.schema.json`

This remains the represented concise/detailed object used by current Featured and Full Corpus executable records. Released Featured v1 is immutable. Existing `candidate_pools` remain valid descriptions of their historical or current executable projection.

### B. Neutral case-family candidate universe

Schema: `schemas/candidate-universe.schema.json`

Builder: `scripts/build-rich-candidate-universes.mjs`

Validator: `scripts/validate-candidate-universe.mjs`

Canonical generated resource: `resources/case-families/full-200-rich-candidate-universes.v1.json`

Canonical research source: `docs/full-corpus/audit-v2/`

This object contains:

- inventory/case-family identity;
- title;
- Scenario audit;
- the reviewed rich Policy-candidate universe;
- exact audit provenance annotation for each candidate;
- the audit's ✓ source mark as an explicit Boolean;
- a conservative coarse provenance class;
- source-grounded projection status;
- expanded-projection status;
- demonstration richness;
- editorial/research action;
- pointers to the governing audit and deep-case dossier.

It **does not assign Public, Expert, or Framework roles**.

The audit's ✓ mark is intentionally not renamed `direct_source=true`. Some marked positions are framework-derived, governance-derived, source-informed, or otherwise anchored at different evidentiary levels. The exact annotation is retained so a coarse machine category cannot replace the scholarly provenance judgment.

The neutral resource lives under `resources/`, not `data/`, because `data/` is the represented executable/result layer and is governed by the generic record validator. Keeping the neutral research object separate prevents it from being mistaken for an executable case while still subjecting it to its own schema and cross-family invariants.

### C. SACRE projection manifest

Schema: `schemas/projection-manifest.schema.json`

A projection is a declared analysis view over one neutral candidate universe. It specifies:

- candidate IDs selected for the run;
- role assignment to Public / Expert / Framework;
- projection type;
- claim scope;
- date/jurisdiction where relevant;
- aggregation;
- lineage to existing represented records where applicable.

A source-grounded projection and an expanded projection therefore coexist without being confused.

## 3. Source-grounded versus expanded projections

### Source-grounded

Purpose: measure convergence among positions that can be defended as represented source roles at the declared granularity.

A source-grounded projection may be asymmetric, small, or unavailable. That does not make the case incomplete.

Claims must remain source-specific. For example, a patient-preference study cannot silently become a professional institutional recommendation.

### Expanded

Purpose: study the wider serious normative field, including provenance-labeled framework-derived and constructed comparator positions.

An expanded projection can be especially useful for:

- philosophical comparison;
- robustness and sensitivity work;
- demonstration of a method over a richer policy space;
- RE-Iteration;
- identifying how a sourced consensus interacts with serious normative objections.

Results from an expanded projection must not be reported as empirical Public/Expert consensus.

## 4. Candidate identity and versioning

The first neutral resource uses stable per-family identifiers `c01`, `c02`, … in the reviewed audit order.

These are **case-family candidate identifiers**, not existing executable `pub1`, `exp1`, or `fw1` identifiers. A future projection maps neutral candidate IDs into roles. It should not infer this mapping from numerical suffixes.

A substantive candidate-universe change—adding, removing, merging, splitting, or materially rewriting a Policy position—requires a new candidate-universe resource version and review. Projection changes can be versioned independently when the underlying universe is unchanged.

## 5. Existing executable records

Do not mass-rewrite existing records merely to adopt the new architecture.

Instead:

1. preserve the current represented record and its provenance;
2. derive the neutral universe from the reviewed Full-200 audit;
3. map the existing executable candidate texts to neutral candidate IDs through an explicit editorial crosswalk;
4. publish that mapping as a source-grounded projection manifest;
5. only create a new concise/detailed record pair when Scenario text, candidate wording, provenance, stipulations, or another represented object actually changes.

This protects Featured v1 and prevents version churn in current Full Corpus drafts.

## 6. Builder and validation behavior

`node scripts/build-rich-candidate-universes.mjs`

Validates that:

- exactly 20 ten-case audit-v2 files exist;
- they cover exactly M001–M200 once;
- M047 is replaced by its post-duplicate supersession audit;
- every case has a Scenario audit, candidate universe, source-grounded status, expanded status, demonstration richness, and action;
- every parsed candidate carries a provenance annotation;
- parsed candidate count equals the reviewed count.

`--write` emits:

`resources/case-families/full-200-rich-candidate-universes.v1.json`

`--check` requires the committed generated object to equal the audits exactly.

`node scripts/validate-candidate-universe.mjs` additionally validates the generated object against `schemas/candidate-universe.schema.json` and checks exact M001–M200 ordering, family identity, candidate-count agreement, sequential candidate IDs, conservative within-family text uniqueness, and existence of every linked audit/deep-case file.

The generated object is now committed and standard CI requires both exact audit→resource regeneration and dedicated resource validation.

## 7. Projection mapping is deliberately not automatic

Candidate-to-role mapping is a substantive research judgment. The implementation must **not** use text similarity, position order, or provenance heuristics to assign Public/Expert/Framework roles automatically.

For existing executable families, the mapping should be reviewed against the current record's exact `candidate_pools` and provenance. For cases without an existing executable projection, a new source-grounded projection is created only when the audit/deep dossier supports the role assignment.

## 8. Release gate

The Full-200 neutral candidate-universe resource is now machine-readable and CI-valid. It is **not yet a frozen release object**. Before Full Corpus release freeze:

1. independently review every candidate/provenance line;
2. resolve remaining Featured crosswalk identities;
3. create reviewed source-grounded projection manifests where warranted;
4. create expanded projection manifests only for prespecified study/demo purposes;
5. update/create represented concise/detailed records only where the projection requires a new version;
6. verify representation invariance, sources/locators, source badges, geometry, aggregation, and hashes;
7. generate release statistics from the validated machine-readable objects;
8. freeze/version the release.

P3 confirmatory execution remains blocked until the resource/projection used by P3 is explicitly frozen and preregistered.
