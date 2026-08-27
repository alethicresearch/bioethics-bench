# Bioethics Bench — Master Case Inventory

**Status:** research inventory, not a frozen benchmark release  
**Purpose:** maintain an open-ended, source-grounded universe of candidate practical-ethics decision problems from which Featured, teaching, demonstration, development, stress-test, and later empirical collections can be constructed.

The earlier `FEATURED_LONGLIST_v0.md` was intentionally bounded at 56 topics because it was built as a pruning exercise toward a 24–30-case Featured release. That was useful for exposing coverage problems, but the research program does not benefit from throwing away strong cases merely to meet a quota. This directory therefore separates two objects:

1. **Master inventory** — open-ended. A good case stays useful even if it is not in the first Featured release.
2. **Executable case record** — compact, versioned, reviewed, and deliberately designed for SACRE/QCCS and human comparison.

A public Featured release may be curated from the inventory, and may grow across releases. There is no hard cap on the master inventory and no requirement that a later release remain at 24–30 cases.

The three inventory files currently contain **175 provisional decision problems**. Inventory IDs (`M001`, etc.) are editorial handles only; they are **not** final `case_id` values and should not be cited as immutable benchmark identifiers.

- [`01-clinical-life-reproduction.md`](01-clinical-life-reproduction.md) — M001–M050
- [`02-research-public-global.md`](02-research-public-global.md) — M051–M100
- [`03-emerging-ai-neuro-animal-planetary.md`](03-emerging-ai-neuro-animal-planetary.md) — M101–M175

See [`../CASE_CONSTRUCTION_STANDARD.md`](../CASE_CONSTRUCTION_STANDARD.md) for the proposed executable-record design.

---

## How to read the inventory

Each entry records five things:

- **Decision** — the bounded question an eventual scenario would put to the represented decision-maker.
- **Position families** — substantive policy families that the literature makes available. These are *not* yet the six executable candidate texts.
- **Research anchors** — the source bundles below that make the topic researchable. A final record gets case-specific references, not merely these bundle codes.
- **Use** — `C` canonical/core; `M` methodologically informative for SACRE/QCCS/RE-Iteration; `F` frontier/contemporary. Multiple labels are normal.
- **Construction note** — the main issue to solve before writing a neutral, benchmarkable scenario.

`PSAI` means the topic is also represented in the Practical Ethics course repository (`alethicresearch/psai`), which is useful as a map of established practical-ethics questions, **not** as independent empirical evidence for a candidate position.

`LEGACY:<id>` means the topic appeared in the historical pre-clean SACRE example set. The exact old wording and results remain historical. Only the underlying decision problem is being reconsidered.

---

# Research source map

These are **anchor source families**, not a substitute for case-level research. They establish that the inventory is being built against real guidance, scholarship, policy, and documented controversies rather than from free association. Every final case will receive a smaller, case-specific bibliography and provenance record.

### General practical ethics and bioethics

**A01 — Practical Ethics / PSai course map.** `alethicresearch/psai`, `content/course.json` and lecture summaries. The 13-module course covers ethical theories; death and brain death; abortion; killing/letting die and double effect; disabled and premature infants; euthanasia; global poverty; climate change and geoengineering; animals and animal research; food systems; biodiversity, feral animals and predation. It is used here to identify established practical-ethics problem families and blind spots in the Bench inventory.

**A02 — WHO Health Ethics & Governance.** WHO work across research ethics, outbreaks, emerging technologies, disease-specific ethics, AI, genome editing, climate and health, and public-health surveillance.

### Clinical research and research governance

**A03 — WMA Declaration of Helsinki, 2024 revision.** Current international research-ethics declaration, including placebo use, post-trial provisions, registration/publication of negative and inconclusive results, and unproven interventions in clinical practice.

**A04 — CIOMS, _International Ethical Guidelines for Health-related Research Involving Humans_, 2016 (republished CC in 2025).** Social value, low-resource settings, vulnerable groups, biological samples, health data, broad consent, and governance.

**A05 — WHO guidance on controlled human infection studies, 2022; WHO emergency CHIS criteria, 2025.** Intentional infection, risk, rescue treatment, social value, participant selection and emergency context.

**A06 — WHO guidance on ethics of health-research priority setting, 2025.** Makes explicit that research agenda setting distributes scarce potential benefits and embeds value judgments.

**A07 — WHO global guidance framework for responsible use of the life sciences, 2022.** Biorisk and dual-use governance across researchers, institutions, funders, publishers, regulators and the private sector.

**A08 — WHO, _Clinical trials and environmental sustainability_, 2026.** Ethical and operational questions about climate mitigation/adaptation across trial design and conduct.

### Reproduction, embryos and genetics

**A09 — WHO Abortion Care Guideline, 2022.** Evidence-based clinical, service-delivery, law and policy recommendations for quality abortion care across varying jurisdictions.

**A10 — ASRM Ethics Committee opinions.** Includes posthumous gamete/embryo use; donor-conceived persons and disclosure; gestational carriers; intrafamilial donation; unclaimed embryos; non-medical sex selection; transfer of embryos affected by monogenic conditions; and disclosure of ART errors.

**A11 — ISSCR Guidelines for Stem Cell Research and Clinical Translation, 2025 v1.2.** International oversight of embryos, stem-cell-based embryo models, chimeras, organoids, genome editing and related research; 2025 update specifically revises embryo-model governance.

**A12 — Nuffield Council on Bioethics, review of the 14-day rule, 2025–26.** Scientific, ethical and public-dialogue work on whether human embryo culture limits should change.

**A13 — Nuffield Council on Bioethics, _In vitro gametogenesis: A review of ethical and policy questions_, 2025.** Safety, genetic relatedness, family formation, consent, equity and future regulation.

**A14 — WHO human genome editing governance framework and recommendations, 2021.** Somatic, germline and heritable editing; international oversight, registries, medical travel, IP, public engagement and governance.

**A15 — WHO, _Guidance for human genome data collection, access, use and sharing_, 2024.** Ethical, legal and equitable genomic-data governance, including collective as well as individual interests.

### Death, critical care and allocation

**A16 — AAN/AAP/CNS/SCCM Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Practice Guideline, 2023.** Standardized determination, communication, ancillary testing and contested areas in brain-death practice.

**A17 — WHO ethics guidance on resource allocation and priority setting.** Equality, best outcomes, worst-off, reciprocity/instrumental value, fair process and global allocation; developed in pandemic context but explicitly framed as broadly applicable scarcity ethics.

**A18 — WHO transplantation work and 2026 draft Global Strategy on Donation and Transplantation.** Access disparities, donation, transplantation, trafficking, global governance and emerging alternatives.

**A19 — OPTN Ethics Committee white papers.** Organ-allocation principles, candidacy, living non-directed donation, multi-organ transplantation, continuous distribution, transparency and normothermic regional perfusion.

### Public health, infectious disease and surveillance

**A20 — WHO mandatory-vaccination ethics, 2022.** Necessity, effectiveness, proportionality, exemptions, trust and transparent decision-making.

**A21 — WHO ethics of public-health surveillance, 2024.** Trust, legitimate purpose, secondary use, law-enforcement access, identifiable data and oversight.

**A22 — WHO ethics guidance for tuberculosis prevention, care and control; End TB ethics guidance.** Voluntary treatment, support for adherence, involuntary isolation as last resort, migrants/prisoners, non-abandonment and palliative care.

**A23 — WHO ethics and vector-borne diseases, 2020; WHO guidance for genetically modified mosquitoes, 2021.** Community engagement, health/environmental risks, governance, field testing and vector-control ethics.

**A24 — WHO antimicrobial-resistance work, including 2025 global call to action.** Stewardship, preservation of antimicrobial effectiveness, health-system obligations and effects on future populations.

### Mental health, disability and neuroethics

**A25 — WHO/OHCHR, _Mental health, human rights and legislation: guidance and practice_, 2023.** Rights-based law reform, supported decision-making, deinstitutionalization and elimination of coercive practices.

**A26 — Nuffield Council on Bioethics, _Neural organoids: Ethical and governance considerations_, 2026.** Governance gaps and increasing complexity of human neural organoids.

**A27 — UNESCO neurotechnology ethics work and 2025 Recommendation process.** Mental privacy, autonomy, identity, dignity and human–computer interfaces.

### AI, digital health and data

**A28 — WHO, _Ethics and governance of artificial intelligence for health_, 2021.** Autonomy, safety, transparency, accountability, equity, sustainability and governance across design, deployment and use.

**A29 — WHO guidance on AI/large multimodal models for health (current WHO emerging-technology guidance).** Generative and general-purpose model risks, governance, deployment and accountability.

**A30 — GA4GH Consent Policy.** Consent and responsible international sharing of genomic and related health data.

### Global and structural health ethics

**A31 — WHO Global Code of Practice on International Recruitment of Health Personnel, amended 2026.** Worker mobility and rights, source-country health-system impacts, ethical recruitment and co-investment.

**A32 — WHO refugee and migrant health work, including 2026 global report.** Equitable access, migration status, discrimination, continuity of care and universal health coverage.

**A33 — WHO/WIPO/WTO work on access to medical technologies, intellectual property and trade.** Innovation incentives, generics, neglected diseases and equitable access.

### Climate, environment and animals

**A34 — WHO Ethics in Health and Climate Change workstream, 2023–26.** Priority setting, vulnerable populations, acceptable trade-offs, health-system decisions and case-study development across all WHO regions.

**A35 — WHO low-carbon sustainable health-system guidance, 2024–25.** Decarbonization targets, health-sector emissions and health-system sustainability.

**A36 — Nuffield Council on Bioethics, _The ethics of research involving animals_, 2005.** Ethical framework for animal research, alternatives, harms and benefits; paired here with current NIH/sector welfare standards when a case is developed.

**A37 — PSai animal/environment modules.** Moral status of animals, equal consideration, defence of speciesism, animals in research, factory farming, environmental effects of food choices, endangered species, biodiversity, feral animals and wild-animal suffering. Used as a practical-ethics topic map, not as a substitute for independent evidence.

---

## Research rules for moving an inventory topic into a case record

A topic does **not** become a Bench case by being on this list. Before drafting an executable record:

1. identify the actual decision-maker and decision;
2. assemble case-specific primary/professional sources plus serious normative literature;
3. identify public-preference evidence where it exists, without inventing a public consensus where it does not;
4. identify professional/expert policy positions separately from empirical facts;
5. identify framework-derived policy recommendations without turning abstract principles into a different object type;
6. specify jurisdiction/time only when necessary, and version it when those facts change;
7. separate factual uncertainty from normative disagreement;
8. construct the executable scenario and candidates under `CASE_CONSTRUCTION_STANDARD.md`;
9. have the scenario and candidate provenance independently reviewed before release.

The master inventory is intentionally permissive. The executable-record standard is intentionally strict.