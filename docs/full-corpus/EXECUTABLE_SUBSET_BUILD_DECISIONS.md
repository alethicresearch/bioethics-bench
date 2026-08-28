# Executable-subset build decisions

**Status:** adopted
**Applies to:** Full Corpus v1 executable-subset assembly after the 200-family research checkpoint

These decisions convert the independent review in PR #6 into build rules. They are requirements for subset assembly, not optional reviewer commentary.

## 1. Separate manifests by construction standard

The released Featured v1 set and the Full Corpus strict-standard executable subset MUST remain separate artifacts.

- Featured v1 keeps its existing released manifest and its own documented construction standard, which permitted declared editorial translation.
- The Full Corpus executable-subset manifest contains only families that pass the later strict source-to-policy construction standard.
- No combined executable manifest may silently mix the two standards.
- Downstream analyses may compare the sets only when the construction-standard difference is explicit.

This rule is required because released Featured families can have Full Corpus counterparts that are non-executable under the later standard, including the verified pairs F11/M098, F15/M129, F17/M156 and F18/M160.

## 2. Architecture-limited exclusions are distinct from evidence-limited exclusions

A researched family that cannot be executed because the source architecture cannot responsibly represent an affected interest MUST NOT be collapsed into `needs-additional-evidence`.

Use the disposition:

`research-complete-architecture-limited`

and record a short reason, for example:

`affected-interest-representation`

This is appropriate for cases in which the relevant bearer of harm cannot provide the kind of first-person public/affected testimony that the current source architecture ordinarily expects, and substituting third-party human attitudes would misdescribe whose interests are being represented.

This status does not assert that evidence is absent. It records that the present representational architecture is the blocker.

## 3. Executable cases must pass the action-divergence scenario test

Before transcription or manifest inclusion, every cleared family MUST pass a manual action audit in addition to companion equivalence.

The reviewer must ask:

> Does the represented scenario sit in the factual or policy band where the candidate policies actually produce different actions?

A case fails if the candidates are textually distinct but converge on the same action under the represented scenario. Matching concise/detailed representations do not cure this defect; both representations can preserve the same load-bearing facts and still occupy the wrong decision band.

M144 is the reference example: its candidates agree for a single high-impact AI use and diverge for low-to-moderate contributions. The represented policy scenario spans a range of AI uses and therefore sits where the candidate rules actually diverge.

`scripts/audit-actions.mjs` is the review aid for this check. The gate remains substantive/manual; automated semantic equivalence is not treated as sufficient.

## 4. Review remains the transcription gate

Candidate-audit status alone does not authorize record creation. A family enters the Full Corpus executable-subset build only after independent review clears:

1. source-to-policy provenance;
2. candidate action distinctness;
3. scenario/action divergence;
4. matched concise/detailed load-bearing facts;
5. profile compatibility and required Mean aggregation for asymmetric profiles.

Hashes are calculated before commit. Invalid placeholder hashes are never pushed to CI.

## 5. Research result to preserve

Non-executable families are part of the resource, not discarded failures. The final corpus index and P1/P2 reporting should preserve the reason a researched case did not become executable, especially when the reason is architectural rather than evidential.

The 31/200 strict-standard executable yield and the heterogeneous reasons among the remaining 169 families are therefore both substantive outputs of the Full Corpus construction process.