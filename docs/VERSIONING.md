# Versioning

Every Bioethics Bench record is content-addressed and versioned.

## Record identity

- `case_id` identifies the underlying case family.
- `record_id` identifies a specific represented record.
- `version` changes whenever the represented scenario, candidate set, ordering, provenance record, or other research-relevant content changes.
- `content_hash` is computed from a canonical serialization of the frozen research object,
  by the rule below.

## Canonical content hash

Two correct implementations must agree, so the rule is fixed rather than described:

1. Take the record object and **remove** `content_hash` itself. Every other field is
   covered, including provenance, references, rights, and exposure history — a change to
   any of them is a change to the research object.
2. Serialize with **JCS** (RFC 8785, JSON Canonicalization Scheme): keys sorted by UTF-16
   code unit, no insignificant whitespace, shortest round-tripping number form, UTF-8.
3. Hash with **SHA-256**.
4. Store as `sha256:<64 lowercase hex>`.

`scripts/hash-case.mjs` implements this and is the reference. `npm run validate` checks
every record in `data/` and `releases/` against both the schema and its recorded hash;
CI runs it on every push. A hash rule that nothing enforces is decoration.

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
