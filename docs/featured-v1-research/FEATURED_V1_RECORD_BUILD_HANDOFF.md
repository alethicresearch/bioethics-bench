# Featured Bioethics Bench v1 — record build and integration handoff

**Status:** implementation contract after substantive dossier/source review.  
**Do not use this pass to rewrite the ethical content.** The case-family dossiers are the editorial source of truth for scenario wording, decision questions, and six executable candidates.

## Governing editorial sources

- `docs/FEATURED_V1_SELECTION.md` — the 20 case families and release coverage decision.
- `docs/featured-v1-research/F01-F05-clinical-life.md`
- `docs/featured-v1-research/F06-F10-research-reproduction-allocation.md`
- `docs/featured-v1-research/F11-F15-public-global-disability.md`
- `docs/featured-v1-research/F16-F20-ai-animal-climate-neuro.md`
- `docs/featured-v1-research/SOURCE_LEDGER.md`
- `docs/CASE_CONSTRUCTION_STANDARD.md`
- `schemas/case.schema.json`

The public-candidate corrections identified in `SOURCE_LEDGER.md` for F03, F06, F07, and F08 have now been incorporated into the dossiers. Do not restore the earlier wording.

---

# 1. Build exactly 40 editorial-review records

Each of the 20 case families receives two represented records:

- `<case-id>-concise-v1`
- `<case-id>-detailed-v1`

Both records share:

- `case_id`;
- title and short description apart from an optional representation label;
- **byte-identical `decision_question`**;
- **byte-identical `candidate_pools`**, including candidate order, text, IDs and candidate provenance;
- domains/tags;
- benchmark profile;
- source/reference set unless a reference applies only to representation construction.

They differ in:

- `record_id`;
- `representation` (`concise` or `detailed`);
- scenario text;
- scenario provenance details where appropriate;
- `companion_record_id`;
- content hash.

Use `version: 1.0.0`, `collection: featured`, `exposure: public`, **`status: editorial-review`**. Do not mark any record frozen or released in this pass.

Set `benchmark_profile` to the same stable identifier for all 40 records, proposed:

`featured-core-2x2x2-v1`

Each record must contain exactly:

- `pub1`, `pub2`;
- `exp1`, `exp2`;
- `fw1`, `fw2`.

No extra candidate should be added merely because the underlying literature contains more positions.

---

# 2. Candidate provenance must be source-class honest

## Public

Use the evidence classification in `SOURCE_LEDGER.md`.

For each public candidate:

- use `construction_method: extracted-from-evidence` where a survey/deliberation/consultation directly supports a closely matching policy family;
- use `construction_method: adapted-from-source` where the evidence supports values/process preferences and editorial translation was needed;
- do **not** use `editorial` for a Featured public candidate intended for eventual release.

The provenance summary must state the nature of the evidence. Examples:

- `Adapted from prospective-parent studies showing preference for shared decision-making and, for many parents, clinician guidance within the periviable gray zone.`
- `Adapted from community consultation on trial standards of care and sustainable research benefits in lower-resource settings.`

Do not describe advocacy-group, service-user, religious-community, patient, farmer/consumer, or disability-community evidence as a nationally representative public survey when it is not one.

## Expert

Use professional guidance, consensus statements, ethics-committee opinions, regulator guidance, or clearly identified domain-expert literature. An empirical fact alone is not an expert policy candidate.

## Framework

Use `construction_method: derived-from-framework`. The provenance summary should name the normative approach and describe the reasoning bridge from principle to the executable policy. Do not imply the policy sentence is a quotation from a philosopher or framework document.

---

# 3. Scenario provenance

Scenario provenance should state that the Bench text is an **independently constructed representation**, not copied casebook/article prose.

Use `adapted_not_reproduced: true` where external source material informed the scenario.

The concise and detailed records must represent the **same factual state**, not merely the same topic. The detailed version may unpack facts, uncertainty, stakeholders, institutional authority, or safeguards already implicit in the concise version; it must not add a morally decisive fact that changes the decision being represented.

If implementation detects a concise/detail factual inconsistency, do not silently harmonize it. Report it for editorial decision.

---

# 4. References and rights

Add case-specific references from the dossier and source ledger rather than merely referencing the master `SOURCE_ANCHORS.md` code.

References should include enough bibliographic information to identify the source and use URLs/DOIs when available.

The case text itself is Bench-authored. Use the repository's intended case-text license if already established; otherwise report the missing release-license decision rather than inventing one.

Do not copy copyrighted casebook narrative into scenario text.

---

# 5. Hashing and validation

After records are created:

1. compute `content_hash` with `scripts/hash-case.mjs --write`;
2. run `npm run validate`;
3. confirm all 40 records pass schema and hash validation;
4. add/extend validation tests for these invariants:
   - every Featured case family has exactly one concise and one detailed record;
   - companion links are reciprocal;
   - decision question is byte-identical across companions;
   - candidate pools are deep-equal across companions;
   - each pool has exactly two candidates with expected IDs;
   - no candidate has empty provenance sources unless the framework provenance design explicitly permits named framework-only derivation;
   - no Featured public candidate has `construction_method: editorial`;
   - no Featured record is `confirmatory-holdout`;
   - status remains `editorial-review` in this pass.

If the current schema does not enforce one of these well, add the smallest validation-layer check needed. Do not redesign the schema broadly.

---

# 6. Bench browse experience

Update the public/site implementation on the branch so the 20 case families are browsable as **families**, not 40 undifferentiated cards.

Minimum v1 family card/page behavior:

- show 20 Featured families;
- title, short description, domains/tags;
- representation control: `Concise` / `Detailed`;
- display the exact represented scenario and decision question;
- show the six candidate policies grouped as Public / Expert / Framework;
- provenance/references expandable or linked;
- visible record version and content hash;
- `Load in SACRE` action for the selected representation;
- filtering at minimum by domain and keyword/tag.

The UI must not imply:

- one representation is morally superior;
- the six candidates exhaust the real debate;
- public candidates are moral ground truth;
- Featured cases are confirmatory validation data;
- Bench has human/model validation results that have not been executed.

Use the 20-family count in user-facing copy; explain that concise and detailed are companion representations of each family.

---

# 7. SACRE integration

Add the 20 Featured families to the current example/case loader without restoring the deleted historical example architecture.

Requirements:

- default loader representation = **concise**;
- user can intentionally choose detailed;
- loading a Bench representation populates `exampleMeta` with at least:
  - `case_id`;
  - `record_id`;
  - `version`;
  - `content_hash`;
  - `representation`;
  - `benchmark_profile`;
- scenario and candidate pools load exactly as frozen in the record;
- candidate IDs/order remain stable;
- run provenance carries that record identity through the existing `research.inputObject` path;
- concise/detailed are never silently treated as the same record in comparison/export provenance.

Do not reintroduce generated placeholder examples.

---

# 8. Execution smoke test before editorial freeze

Do **not** run all 40 through paid external models unless explicitly authorized. The implementation pass should first verify mechanically/manual-path that every record loads.

Then select a small diverse smoke-test subset for actual model execution if existing included/API access permits without new paid recruitment:

- one clinical case;
- F11 ventilator triage;
- one research/global case;
- F16 AI subgroup performance;
- F17 animal research;
- F18 One Health antimicrobials.

For each executed case, verify:

- all 12 QCCS cross-source pairs are generated;
- no duplicate/missing candidate IDs;
- aggregation produces a ranking without errors;
- Compare Runs works if repeated;
- concise and detailed executions retain distinct record identities;
- no execution result is written back into the case record as moral ground truth.

Do not label these development runs `validation`.

---

# 9. Return report

Return before any release/freeze:

1. commit(s) creating the 40 records;
2. validation output and number of records checked;
3. any cases where source provenance could not be represented honestly under the schema;
4. any concise/detail factual mismatches discovered;
5. any candidate-pair symmetry/granularity concerns discovered during implementation;
6. Bench browse/site commit and screenshots or route summary;
7. SACRE-loader integration commit and loader/provenance tests;
8. smoke-test evidence actually executed versus statically inspected;
9. proposed fixes, separated into mechanical fixes versus substantive/editorial questions.

**Do not mark records `frozen` or `released`, merge PRs, or deploy production until the research/editorial review of this return report is complete.**