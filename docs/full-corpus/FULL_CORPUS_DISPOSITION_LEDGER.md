# Full Corpus v1 — 200-family disposition ledger (repository-derived)

**Generated:** 2026-08-28
**Source of truth:** `alethicresearch/bioethics-bench`, branch `author/full-corpus-completion`, head `cff41aaad0aba6a98e1ddf30afe102b973ccebad`
**Base:** `research/full-corpus-v1` @ `f32eb82237650ec9485b29f1ce7a6aec1e3a5ee2` (PR #9 merge)

Every column below is extracted from committed repository state — the 200 dossiers under
`docs/full-corpus/batch-*/M*-deep-case.md` and the record files under `data/benchmark/`.
**No count from prior chat state was used, and none should be reintroduced.**

## Summary

| Disposition | Families |
|---|---|
| executable-v1, record present | 27 |
| executable-v1, duplicate older frame to delete (M041, M042, M045, M050) | 4 |
| executable-candidate, dossier supports it but no record transcribed yet | 8 |
| Featured-only (M001 → F01) | 1 |
| held — needs additional evidence | 75 |
| held — research-complete, not executable | 64 |
| undeclared — dossier states no judgment, needs disposition review | 17 |
| **Total** | **200** |

### What this means for the completion criterion

- Executable families with canonical records today: **31** (62 records after the 8 duplicate
  deletions and the 8 machine-generated withdrawals described below).
- Plausible near-term ceiling without new research: **39 families / 78 records**, if all 8
  `executable-candidate` families are transcribed.
- The **106-family / 212-record** figure in the rescue handoff is **not reconstructible from
  repository state**. It survives only as a prose count in
  `docs/full-corpus/reconstruction/COMPLETION_CANDIDATE_STATUS.md`. Reaching it would require
  promoting ~70 families that their own dossiers currently mark `needs-additional-evidence` or
  `research-complete-not-executable`.

### Dossier depth caveat

80 of the 200 dossiers are under 45 lines; the fully-developed ones run ~100–126 lines. The
"200/200 deep dossiers complete" claim is true as to coverage, not as to uniform depth. Thin
dossiers are not a sufficient basis for deterministic record generation.

## Ledger

| Family | Dossier judgment | Declared profile | Dossier lines | Records on branch | Proposed v1 disposition |
|---|---|---|---|---|---|
| M001 | executable-2x2x2 | — | 117 | 0 | featured-only (F01) |
| M002 | executable-other-profile | — | 126 | 2 | executable-v1 (record present) |
| M003 | needs-additional-evidence | 2×2×2 | 117 | 2 | HELD — withdraw machine-generated record |
| M004 | executable-other-profile | — | 123 | 2 | executable-v1 (record present) |
| M005 | executable-other-profile | — | 120 | 2 | executable-v1 (record present) |
| M006 | needs-additional-evidence | 2×2×2 | 110 | 2 | HELD — withdraw machine-generated record |
| M007 | needs-additional-evidence | 2×2×2 | 123 | 2 | HELD — withdraw machine-generated record |
| M008 | needs-additional-evidence | 2×2×2 | 118 | 2 | HELD — withdraw machine-generated record |
| M009 | needs-additional-evidence | 2×2×2 | 122 | 0 | held — needs additional evidence |
| M010 | executable-2x2x2 | — | 120 | 2 | executable-v1 (record present) |
| M011 | needs-additional-evidence | — | 129 | 0 | held — needs additional evidence |
| M012 | executable-other-profile | 2×1×2 | 124 | 2 | executable-v1 (record present) |
| M013 | needs-additional-evidence | — | 128 | 0 | held — needs additional evidence |
| M014 | needs-additional-evidence | — | 123 | 0 | held — needs additional evidence |
| M015 | needs-additional-evidence | — | 129 | 0 | held — needs additional evidence |
| M016 | needs-additional-evidence | — | 128 | 0 | held — needs additional evidence |
| M017 | needs-additional-evidence | — | 126 | 0 | held — needs additional evidence |
| M018 | executable-other-profile | — | 129 | 2 | executable-v1 (record present) |
| M019 | executable-other-profile | 2×1×2 | 127 | 2 | executable-v1 (record present) |
| M020 | executable-2x2x2 | — | 129 | 2 | executable-v1 (record present) |
| M021 | needs-additional-evidence | — | 121 | 0 | held — needs additional evidence |
| M022 | executable-other-profile | — | 114 | 0 | executable-candidate (no record yet) |
| M023 | needs-additional-evidence | — | 115 | 0 | held — needs additional evidence |
| M024 | research-complete-not-executable | — | 125 | 0 | held — research-complete, not executable |
| M025 | executable-other-profile | — | 131 | 2 | executable-v1 (record present) |
| M026 | needs-additional-evidence | — | 117 | 0 | held — needs additional evidence |
| M027 | research-complete-not-executable | — | 116 | 0 | held — research-complete, not executable |
| M028 | executable-other-profile | — | 131 | 2 | executable-v1 (record present) |
| M029 | needs-additional-evidence | — | 115 | 0 | held — needs additional evidence |
| M030 | executable-2x2x2 | — | 124 | 2 | executable-v1 (record present) |
| M031 | executable-2x2x2 | — | 131 | 2 | executable-v1 (record present) |
| M032 | research-complete-not-executable | — | 116 | 0 | held — research-complete, not executable |
| M033 | executable-2x2x2 | — | 132 | 2 | executable-v1 (record present) |
| M034 | executable-other-profile | — | 113 | 2 | executable-v1 (record present) |
| M035 | needs-additional-evidence | — | 116 | 0 | held — needs additional evidence |
| M036 | executable-other-profile | — | 112 | 0 | executable-candidate (no record yet) |
| M037 | needs-additional-evidence | — | 114 | 0 | held — needs additional evidence |
| M038 | research-complete-not-executable | — | 117 | 0 | held — research-complete, not executable |
| M039 | needs-additional-evidence | — | 118 | 0 | held — needs additional evidence |
| M040 | needs-additional-evidence | — | 115 | 0 | held — needs additional evidence |
| M041 | executable-other-profile | — | 105 | 4 | executable-v1 (delete duplicate older frame) |
| M042 | executable-other-profile | — | 105 | 4 | executable-v1 (delete duplicate older frame) |
| M043 | executable-other-profile | — | 99 | 0 | executable-candidate (no record yet) |
| M044 | research-complete-not-executable | — | 103 | 0 | held — research-complete, not executable |
| M045 | executable-other-profile | — | 102 | 4 | executable-v1 (delete duplicate older frame) |
| M046 | needs-additional-evidence | — | 101 | 0 | held — needs additional evidence |
| M047 | needs-additional-evidence | — | 102 | 0 | held — needs additional evidence |
| M048 | needs-additional-evidence | — | 101 | 0 | held — needs additional evidence |
| M049 | executable-other-profile | — | 104 | 0 | executable-candidate (no record yet) |
| M050 | executable-2x2x2 | — | 111 | 4 | executable-v1 (delete duplicate older frame) |
| M051 | needs-additional-evidence | — | 111 | 0 | held — needs additional evidence |
| M052 | needs-additional-evidence | — | 106 | 0 | held — needs additional evidence |
| M053 | research-complete-not-executable | — | 103 | 0 | held — research-complete, not executable |
| M054 | executable-other-profile | — | 121 | 2 | executable-v1 (record present) |
| M055 | needs-additional-evidence | — | 106 | 0 | held — needs additional evidence |
| M056 | undeclared | — | 117 | 2 | executable-v1 (record present) |
| M057 | research-complete-not-executable | — | 101 | 0 | held — research-complete, not executable |
| M058 | research-complete-not-executable | — | 103 | 0 | held — research-complete, not executable |
| M059 | executable-2x2x2 | — | 107 | 0 | executable-candidate (no record yet) |
| M060 | executable-2x2x2 | — | 105 | 2 | executable-v1 (record present) |
| M061 | needs-additional-evidence | — | 101 | 0 | held — needs additional evidence |
| M062 | needs-additional-evidence | — | 101 | 0 | held — needs additional evidence |
| M063 | research-complete-not-executable | — | 100 | 0 | held — research-complete, not executable |
| M064 | research-complete-not-executable | — | 100 | 0 | held — research-complete, not executable |
| M065 | needs-additional-evidence | — | 103 | 0 | held — needs additional evidence |
| M066 | executable-2x2x2 | — | 100 | 0 | executable-candidate (no record yet) |
| M067 | needs-additional-evidence | — | 100 | 0 | held — needs additional evidence |
| M068 | needs-additional-evidence | — | 100 | 0 | held — needs additional evidence |
| M069 | needs-additional-evidence | — | 99 | 0 | held — needs additional evidence |
| M070 | needs-additional-evidence | — | 101 | 0 | held — needs additional evidence |
| M071 | needs-additional-evidence | — | 97 | 0 | held — needs additional evidence |
| M072 | needs-additional-evidence | — | 98 | 0 | held — needs additional evidence |
| M073 | needs-additional-evidence | — | 97 | 0 | held — needs additional evidence |
| M074 | needs-additional-evidence | — | 75 | 0 | held — needs additional evidence |
| M075 | needs-additional-evidence | — | 76 | 2 | executable-v1 (record present) |
| M076 | needs-additional-evidence | — | 79 | 0 | held — needs additional evidence |
| M077 | needs-additional-evidence | — | 75 | 0 | held — needs additional evidence |
| M078 | needs-additional-evidence | — | 76 | 0 | held — needs additional evidence |
| M079 | needs-additional-evidence | — | 76 | 0 | held — needs additional evidence |
| M080 | executable-other-profile | — | 76 | 2 | executable-v1 (record present) |
| M081 | research-complete-not-executable | — | 56 | 0 | held — research-complete, not executable |
| M082 | needs-additional-evidence | — | 45 | 0 | held — needs additional evidence |
| M083 | needs-additional-evidence | — | 45 | 0 | held — needs additional evidence |
| M084 | research-complete-not-executable | — | 45 | 0 | held — research-complete, not executable |
| M085 | research-complete-not-executable | — | 46 | 0 | held — research-complete, not executable |
| M086 | needs-additional-evidence | — | 48 | 0 | held — needs additional evidence |
| M087 | needs-additional-evidence | — | 45 | 0 | held — needs additional evidence |
| M088 | research-complete-not-executable | — | 39 | 0 | held — research-complete, not executable |
| M089 | needs-additional-evidence | — | 47 | 0 | held — needs additional evidence |
| M090 | research-complete-not-executable | — | 54 | 0 | held — research-complete, not executable |
| M091 | research-complete-not-executable | — | 42 | 0 | held — research-complete, not executable |
| M092 | research-complete-not-executable | — | 43 | 0 | held — research-complete, not executable |
| M093 | research-complete-not-executable | — | 43 | 0 | held — research-complete, not executable |
| M094 | undeclared | — | 41 | 2 | executable-v1 (record present) |
| M095 | needs-additional-evidence | — | 41 | 0 | held — needs additional evidence |
| M096 | needs-additional-evidence | — | 41 | 0 | held — needs additional evidence |
| M097 | undeclared | — | 55 | 2 | executable-v1 (record present) |
| M098 | undeclared | — | 39 | 0 | undeclared — needs disposition review |
| M099 | undeclared | — | 41 | 0 | undeclared — needs disposition review |
| M100 | needs-additional-evidence | — | 41 | 0 | held — needs additional evidence |
| M101 | needs-additional-evidence | — | 98 | 0 | held — needs additional evidence |
| M102 | undeclared | — | 96 | 2 | executable-v1 (record present) |
| M103 | needs-additional-evidence | — | 95 | 0 | held — needs additional evidence |
| M104 | needs-additional-evidence | — | 95 | 0 | held — needs additional evidence |
| M105 | needs-additional-evidence | — | 95 | 0 | held — needs additional evidence |
| M106 | undeclared | — | 94 | 2 | executable-v1 (record present) |
| M107 | research-complete-not-executable | — | 97 | 0 | held — research-complete, not executable |
| M108 | research-complete-not-executable | — | 95 | 0 | held — research-complete, not executable |
| M109 | research-complete-not-executable | — | 96 | 0 | held — research-complete, not executable |
| M110 | research-complete-not-executable | — | 95 | 0 | held — research-complete, not executable |
| M111 | research-complete-not-executable | — | 91 | 0 | held — research-complete, not executable |
| M112 | research-complete-not-executable | — | 92 | 0 | held — research-complete, not executable |
| M113 | research-complete-not-executable | — | 93 | 0 | held — research-complete, not executable |
| M114 | needs-additional-evidence | — | 95 | 0 | held — needs additional evidence |
| M115 | research-complete-not-executable | — | 94 | 0 | held — research-complete, not executable |
| M116 | needs-additional-evidence | — | 94 | 0 | held — needs additional evidence |
| M117 | research-complete-not-executable | — | 92 | 0 | held — research-complete, not executable |
| M118 | research-complete-not-executable | — | 91 | 0 | held — research-complete, not executable |
| M119 | needs-additional-evidence | — | 91 | 0 | held — needs additional evidence |
| M120 | research-complete-not-executable | — | 94 | 0 | held — research-complete, not executable |
| M121 | needs-additional-evidence | — | 44 | 0 | held — needs additional evidence |
| M122 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M123 | undeclared | 2×1×2 | 37 | 2 | executable-v1 (record present) |
| M124 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M125 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M126 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M127 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M128 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M129 | undeclared | — | 37 | 0 | undeclared — needs disposition review |
| M130 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M131 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M132 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M133 | undeclared | — | 37 | 0 | undeclared — needs disposition review |
| M134 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M135 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M136 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M137 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M138 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M139 | undeclared | 2×1×2 | 37 | 2 | executable-v1 (record present) |
| M140 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M141 | undeclared | — | 37 | 2 | executable-v1 (record present) |
| M142 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M143 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M144 | undeclared | — | 37 | 2 | executable-v1 (record present) |
| M145 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M146 | undeclared | — | 37 | 0 | undeclared — needs disposition review |
| M147 | needs-additional-evidence | — | 37 | 0 | held — needs additional evidence |
| M148 | undeclared | — | 37 | 0 | undeclared — needs disposition review |
| M149 | undeclared | — | 37 | 0 | undeclared — needs disposition review |
| M150 | research-complete-not-executable | — | 37 | 0 | held — research-complete, not executable |
| M151 | undeclared | — | 62 | 0 | undeclared — needs disposition review |
| M152 | undeclared | — | 62 | 0 | undeclared — needs disposition review |
| M153 | undeclared | — | 63 | 0 | undeclared — needs disposition review |
| M154 | undeclared | — | 60 | 0 | undeclared — needs disposition review |
| M155 | undeclared | — | 62 | 0 | undeclared — needs disposition review |
| M156 | undeclared | — | 73 | 0 | undeclared — needs disposition review |
| M157 | undeclared | — | 63 | 0 | undeclared — needs disposition review |
| M158 | undeclared | — | 62 | 0 | undeclared — needs disposition review |
| M159 | undeclared | — | 65 | 0 | undeclared — needs disposition review |
| M160 | undeclared | — | 63 | 0 | undeclared — needs disposition review |
| M161 | research-complete-not-executable | — | 41 | 0 | held — research-complete, not executable |
| M162 | research-complete-not-executable | — | 39 | 0 | held — research-complete, not executable |
| M163 | research-complete-not-executable | — | 35 | 0 | held — research-complete, not executable |
| M164 | research-complete-not-executable | — | 35 | 0 | held — research-complete, not executable |
| M165 | needs-additional-evidence | — | 29 | 0 | held — needs additional evidence |
| M166 | needs-additional-evidence | — | 31 | 0 | held — needs additional evidence |
| M167 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M168 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M169 | full-corpus-2x1x2-mean-v1 | — | 35 | 0 | executable-candidate (no record yet) |
| M170 | needs-additional-evidence | — | 32 | 0 | held — needs additional evidence |
| M171 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M172 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M173 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M174 | research-complete-not-executable | — | 26 | 0 | held — research-complete, not executable |
| M175 | research-complete-not-executable | — | 28 | 0 | held — research-complete, not executable |
| M176 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M177 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M178 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M179 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M180 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M181 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M182 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M183 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M184 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M185 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M186 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M187 | research-complete-not-executable-as-duplicate | — | 20 | 0 | held — research-complete, not executable |
| M188 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M189 | executable-2x2x2 | — | 32 | 0 | executable-candidate (no record yet) |
| M190 | research-complete-not-executable | — | 20 | 0 | held — research-complete, not executable |
| M191 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M192 | research-complete-not-executable | — | 20 | 0 | held — research-complete, not executable |
| M193 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M194 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M195 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M196 | needs-additional-evidence | — | 28 | 0 | held — needs additional evidence |
| M197 | research-complete-not-executable | — | 25 | 0 | held — research-complete, not executable |
| M198 | needs-additional-evidence | — | 25 | 0 | held — needs additional evidence |
| M199 | needs-additional-evidence | — | 28 | 0 | held — needs additional evidence |
| M200 | needs-additional-evidence | — | 32 | 0 | held — needs additional evidence |
