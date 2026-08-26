# Case construction

Bioethics Bench cases are constructed prospectively for a declared research use. Historical SACRE application examples are not silently converted into Bench records.

## Required design record

For every empirical case, record:

- stable `case_id` and `record_id`;
- version and schema version;
- bioethical domain;
- scenario text and scenario provenance;
- public, expert, and framework candidate pools with stable candidate IDs;
- candidate provenance or an explicit `unknown/not_available` marker;
- construction method, including any human or model assistance;
- review status;
- exposure history, including whether the case has been used for software debugging, prompt development, paper illustration, or prior evaluation;
- intended collection and intended use;
- canonical content hash.

## Primary reliability cases

For the primary reliability design, prefer balanced source pools such as 3 public × 3 expert × 3 framework candidates when this is philosophically defensible. Balanced pools reduce accidental dependence of Sum aggregation on unequal partner counts. Deliberate asymmetry belongs in a stress-test condition rather than appearing accidentally in the primary corpus.

## Development versus confirmatory use

Development cases may be used to refine prompts, interfaces, assignment procedures, exports, and analyses. A confirmatory holdout must be constructed/frozen only after the SACRE/QCCS object and P3 protocol are locked, and it must not have been used for those development purposes.

No public holdout directory is maintained before confirmatory execution.
