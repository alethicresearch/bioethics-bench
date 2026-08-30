# M187 identity replacement — 2026-08-30

## Why the identity changed

The original M187, **confidentiality of adolescent sexual and reproductive health information**, substantially duplicated M004. M004 already owns the primary bedside/service confidentiality family: lawful sensitive care, adolescent request for nondisclosure, parent access, developing autonomy, confidentiality and safety exceptions.

The old M187 material remains development history and a service-specific crosswalk to M004, but it must not count as an independent case family in the frozen 200-case inventory.

## Replacement identity

M187 is replaced by **Adolescent EHR and patient-portal confidentiality**.

The replacement asks a distinct informatics/governance question: how an EHR and proxy portal should protect lawfully confidential adolescent information while preserving appropriate adolescent and parent/guardian access to the rest of the record.

## Source basis

The American Academy of Pediatrics 2026 policy statement *Principles for Health Information Technology to Support and Protect Adolescent Confidentiality* explicitly recommends:

- granular segmentation of sensitive electronic health information across diagnoses, laboratory results, prescriptions, problem lists and notes;
- the ability to mark an entire visit private from proxy access;
- selective blocking of sensitive data from proxies;
- portal policies that prohibit proxy access to protected sensitive information while preserving equitable adolescent portal access;
- protections for confidential details in billing/EOB workflows.

## Provenance rule

The AAP source directly supports a granular-segmentation/proxy-protection architecture. Alternative default architectures—such as broad proxy access with clinician-by-clinician marking, age-based adolescent control defaults, or separate confidential sub-portals—may be represented only with their actual implementation evidence or as transparently constructed comparators.

## Downstream rule

- M004 owns bedside/service adolescent confidentiality.
- M187 owns health-information-system confidentiality and proxy-access design.
- New M187 records must keep the EHR/portal decision object fixed and must not duplicate M004's direct disclosure-to-parents question.
