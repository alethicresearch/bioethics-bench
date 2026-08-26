# Versioning

Every Bioethics Bench record is content-addressed and versioned.

## Record identity

- `case_id` identifies the underlying case family.
- `record_id` identifies a specific represented record.
- `version` changes whenever the represented scenario, candidate set, ordering, provenance record, or other research-relevant content changes.
- `content_hash` is computed from a canonical serialization of the frozen research object.

## No silent edits

A frozen-development, release-candidate, or released record is immutable. Any substantive edit creates a new version and records its parent/derivation.

## Releases

A release manifest records:
- release ID/tag;
- schema versions;
- QCCS/SACRE protocol identifiers where applicable;
- record IDs/versions/hashes;
- file paths;
- release status and date.

Published applications should load Bench material from a pinned release rather than mutable `main`.
