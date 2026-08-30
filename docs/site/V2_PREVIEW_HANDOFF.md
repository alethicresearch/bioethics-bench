# Bioethics Bench `/v2` website preview — handoff

**Status:** deployed draft preview; does not replace the current root homepage.

**Preview URLs**

- Overview: https://bioethicsbench.com/v2/
- Full Corpus explorer: https://bioethicsbench.com/v2/cases/
- Developmental results explorer: https://bioethicsbench.com/v2/results/

## Purpose

The `/v2` preview tests a next-generation public presentation of Bioethics Bench that reflects the standalone resource-paper architecture. It is intentionally non-destructive: the root homepage remains the current public site until the program decides to promote a replacement.

The preview is organized around three user journeys:

1. **Overview** — explain Bioethics Bench as source-grounded normative research infrastructure using the Resource → Task → Evaluation separation.
2. **Explore cases** — inspect the current Full Corpus release-candidate directly from repository artifacts.
3. **Developmental results** — inspect reproducibility and bounded developmental execution evidence without turning results into a moral answer key.

## Data architecture

The case explorer does not maintain a parallel hand-entered website dataset. It loads:

- `releases/full-corpus-v1-completion-candidate/manifest.json`;
- the 34 concise Full Corpus records for family metadata;
- the selected concise/detailed record on demand for detailed inspection.

The explorer exposes decision question, scenario, benchmark stipulations, Public/Expert/Framework task-facing candidate pools, policy basis, candidate/scenario provenance, sources, references, geometry, profile, aggregation requirement, record version and content hash.

The results explorer separates two evidence classes:

### Completed reproducibility result

- 68/68 current records checked;
- 0 execution/task-semantic differences;
- 36 older stale content hashes classified as provenance-only drift;
- post-refresh Bench adapter projection and SACRE vendor payload byte-for-byte identical.

### Developmental execution evidence

The page reads the current public SACRE artifacts directly:

- `xnuxi/sacre-prototype/docs/bench-runs/fc-2026-08-28-gpt-5.6-sol-manifest.json`
- `xnuxi/sacre-prototype/docs/bench-runs/stability-2026-08-28.json`

The first supplies the completed 8-family / 16-record / 216-call geometry tranche and concise-vs-detailed discrimination summaries. The second supplies selected repeat-calibration results.

The attempted 68-record census is presented only as execution status: 856 calls planned, 234 reached before halt, 20 complete records, 48 incomplete non-results.

## Evidence boundary

The preview must not imply:

- independent corpus-wide human source validation;
- corpus-wide source fidelity;
- QCCS reliability or construct validity;
- moral correctness of the provisional top candidate;
- a model leaderboard or model superiority;
- human-model correspondence;
- method-neutrality across multiple mature task families;
- confirmatory P3 validation.

Full Corpus records remain release-candidate / draft and not independently human-reviewed for corpus-wide source-to-policy fidelity. Developmental results are explicitly labeled developmental.

## Promotion rule

Do not replace the root homepage merely because `/v2` exists. Promotion should occur only after a deliberate website review and after deciding what resource lifecycle state should be public-facing at that time.

This preview is non-blocking relative to the ordered paper program. P1/P2 completion and P3 protocol work remain the substantive publication/research priorities.

## Useful next website enhancements

When website work becomes timely again:

1. add direct deep links to individual case families and representations;
2. add source/warrant-oriented filters and compact citation graphs;
3. visualize the distribution of eight candidate geometries across the 34 families;
4. connect developmental result rows back to the matching case-family view;
5. add provenance-diff views across record versions;
6. later, when independently reviewed releases and confirmatory evaluations exist, expose them as separate selectable resource/evaluation snapshots rather than overwriting developmental history.
