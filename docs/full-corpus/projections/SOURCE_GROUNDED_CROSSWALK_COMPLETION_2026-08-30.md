# Full Corpus — source-grounded historical crosswalk completion

**Date:** 2026-08-30  
**Status:** 34/34 existing executable Full Corpus families explicitly reviewed  
**Neutral resource:** `resources/case-families/full-200-rich-candidate-universes.v1.1.json`

## Result

The historical executable calibration set is now completely dispositioned against neutral candidate-universe resource v1.1.0 by manual editorial Policy-level review. No candidate-to-role mapping was inferred from candidate order, text similarity, source marks, or provenance classes.

- **22** families have approved materially equivalent historical source-grounded crosswalk manifests.
- **12** families are on explicit crosswalk hold.
- **34/34** existing executable families are declared.
- **0** families are undeclared.

Approved manifests live under `resources/projections/source-grounded/`. Holds live under `resources/projections/holds/`. The review ledger is `docs/full-corpus/projections/SOURCE_GROUNDED_CROSSWALK_REVIEW_LEDGER.md` and the compact judgment source is `docs/full-corpus/projections/SOURCE_GROUNDED_CROSSWALK_DECISIONS.v1.1.json`.

## Resource identity

The original machine transcription remains immutable as resource v1.0.0. Resource v1.1.0 applies the authoritative M002 QualityRights/CRPD-aligned supersession and otherwise preserves the Full-200 candidate universe.

- cases: **200**
- reviewed Policy candidates: **1,298**
- mean candidates per family: **6.49**
- v1.1.0 SHA-256: `195d66625df2a0be94e9c3fbc86dd4ed93e8b2cf6b2ca849730f42a9e0a49629`

The completed decision source SHA-256 is `cc4593e00acce6dc188d8135eae828f6e639f3319d2fcccdbdcfc932270c8488`; the generated review-ledger SHA-256 is `4a2b32ec0ba8c86a1988ec75b405b0dadca2f179049248cb4ae051b3ab20c23b`.

## Aggregation

The crosswalk preserves the current `sacre-qccs-v1` task contract. Asymmetric candidate geometries retain profile-required **Mean** aggregation. Symmetric historical geometries with equal partner counts and no explicit required aggregation use the task contract's reference **Sum** baseline. This makes the previously implicit symmetric-profile convention explicit in the projection manifest without changing historical task semantics.

## Hold families

The twelve holds are:

`M005`, `M034`, `M042`, `M050`, `M054`, `M056`, `M094`, `M097`, `M123`, `M139`, `M141`, `M146`.

They are held because a forced one-to-one historical crosswalk would combine or split neutral Policies, operate at incompatible granularity, omit a materially necessary neutral candidate, or overstate Public/source-role grounding. The historical represented records remain unchanged. Each hold object names the exact source candidate(s), related neutral candidates, reason codes, and required successor action.

## Validation and provenance boundary

Derived build run `33347485306` passed the complete projection review gate and produced **22 approved / 12 holds / 34 dispositions**. Its artifact ID is `9742464676`; artifact ZIP SHA-256 is `94e9116d04a07c0dad1a87995b734e53daf593d4fc519f0c788f0f351d4fb632`. The generated artifacts were committed by GitHub Actions at `b8410540eb0c34caa2858c0f8ed9f1e991e23142`.

This milestone completes the historical source-grounded crosswalk review. It does **not** mean that Bioethics Bench is release-frozen, that the twelve held families have been repaired, or that P3 confirmatory execution is authorized.

## Remaining Bench release gates

Before release freeze:

1. resolve hold-family successor work where those families are intended for the frozen executable/source-grounded projection;
2. complete independent scholarly/domain review of the candidate/provenance and projection judgments;
3. complete final concise/detailed representation-invariance and source/release review;
4. generate release statistics from the validated frozen objects;
5. freeze and version the Bench release.

Only after the exact P3 resource snapshot, task specification, and evaluation condition are separately frozen and preregistered may P3 be explicitly authorized.
