# Release decisions and evidence

## Dependency audit

The initial 21 high / 19 moderate counts were affected dependency nodes, not 40 independent exploitable vulnerabilities. All tools were declared under `dependencies`, so `npm audit --omit=dev` alone did not distinguish deployment runtime from build-time tools.

Applied compatible `npm audit fix` without `--force`, retaining declared ranges; updated direct PostCSS to patched 8.5.29 and applied the same major-8 version to Next's nested PostCSS through a scoped override. Clean installation and production build must pass before release. Next remains 15.5.27, React remains 18.3.1, and Tailwind remains 3.3.3.

Remaining audit findings: 7 high affected nodes / 2 moderate affected nodes / 0 critical. The two independent root advisories are:

| Advisory root | Affected chains | Exposure in this repository | Disposition |
| --- | --- | --- | --- |
| `braces` 3.0.3, deeply nested pattern stack exhaustion, GHSA-vfj7-8cjw-p6xm | chokidar, micromatch, fast-glob, Tailwind, Next ESLint plugin/config | Build/watch/lint pattern processing. No app/API handler imports these packages; source and glob patterns are repository-controlled. An untrusted contribution could affect a build; no public form passes data into this chain. | Latest published braces is 3.0.3; npm proposes Tailwind 4 / ESLint config downgrade. Avoid an unreviewed design/compiler migration. Track build-tool remediation; restricted trusted build inputs mitigate current website exposure. |
| `postcss-selector-parser` 6.1.4, flat-selector CPU exhaustion, GHSA-rj75-hqrm-r3gf | postcss-nested, Tailwind | Build-time processing of checked-in CSS. The marketing app has no user-supplied CSS compilation route. | Patched release is 7.1.6, a major change from the nested required 6.x API. Defer a tested Tailwind/compiler migration; do not force an incompatible nested major merely to hide the audit. |

This is a source reachability assessment, not a penetration test or a claim that every indirect package is harmless. Current remaining findings do not block serving this fixed-source marketing site; CI must only build trusted changes. Any future user-defined glob/CSS processing requires reassessment.

## Policies and contact decisions

- Terms section 2 lists AI Readiness/ROI calculators; section 3 describes their informational estimates. Proposed owner/legal review: replace section 2's retired tool list with the available industrial AI platform, Reliability Intelligence Assessment, focused pilots, and training. Decide whether section 3 should be retired or replaced with assessment-specific limitations. Retain the existing liability, IP, confidentiality, dispute and other obligations until counsel/owner approves the substantive revision.
- `security@syncai.ca`, `privacy@syncai.ca`, `legal@syncai.ca` are existing published aliases whose delivery is unverified. Owner decision: confirm that they forward to a monitored inbox, or authorize routing those contact links to the confirmed `oadavis@syncai.ca` with the relevant subject. No delivery claim is made here.
- Environment variables can override the contact recipient. Confirm production `CONTACT_EMAIL` and form-specific recipients are monitored. No production lead was sent.
- Confirm hosted encryption/RLS/access isolation and privacy model-data statements against current implementation. The review did not certify these controls or change contractual obligations.

## Removed stale assets

Independent review found unsupported connector/ROI/autonomous-control promises in all three public whitepapers. Removed download CTAs and public PDF assets. Their exact `/pdfs/<slug>.pdf` URLs permanently redirect to the respective corrected `/insights/<slug>` article. Git history retains the originals. No replacement PDF implies verified customer results.

## Coordination

PR 286 adds exactly Training links to Navigation/Footer. PR 288 includes those links alongside the broader journey changes; merge PR 288 first, then have the owner close/rebase 286 as redundant. No change was made to PR 286, no comment was sent, and no other contributor branch was modified. PR 284's unverified Edmonton draft and PR 283's Insights publish gate remain separate.

## Preview evidence

GitHub deployment 6974818490 is Preview for full commit 8e96c96881d910aa4b14fb1219dfc2a096ea7b36; Vercel status succeeded. Hosted in-app browser smoke verified home → mobile menu → platform → purchasing contact. No overflow at 390px; menu closes on navigation; platform explore links target `/workspace`, purchasing targets `/contact`, and explicitly labeled assessment setup targets `/setup`. The later dependency/PDF/role follow-up requires a fresh exact-head preview check before publication.
