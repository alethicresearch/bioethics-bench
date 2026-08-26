# Governance

Bioethics Bench separates pedagogical material, protocol-development data, stress tests, and released benchmark records. These classes have different evidentiary meanings and must not be silently mixed.

## Collections

- `tutorial` — teaching/illustrative objects; may contain stipulated values; never benchmark evidence.
- `development` — prospectively constructed cases used to develop and pilot the research protocol.
- `stress-test` — deliberate perturbations and boundary conditions.
- `released-benchmark` — versioned public records that have met the applicable release criteria.

A private confirmatory holdout is a study-design designation and is not committed publicly before execution.

## Release principles

1. Freeze the QCCS/SACRE protocol before confirmatory scoring.
2. Freeze record text, candidate order, provenance, and hashes before use.
3. Never overwrite a frozen/released record; create a new version.
4. Preserve failed executions and deviations in research results rather than silently repairing them.
5. Keep model agreement, human agreement, robustness, and moral truth conceptually separate.
6. Public releases contain only data that may ethically and legally be shared; human data must be de-identified.
7. Every release should include a manifest, checksums, protocol identifiers, data card, and reproducible analysis material where possible.
