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

## Existing customer-first walkthrough

Source ownership review identified `/get-started` as the existing Ask-first evaluation flow, `/workspace` as the separate public workspace, and `/setup` as the assessment path. Live browser inspection of `/get-started` showed an empty question field, labeled examples, intent choices, and a disabled Continue button until a question is supplied. Marketing first-visit CTAs now say **Explore a decision** and reuse that route; explicitly labeled workspace links remain `/workspace` and assessment setup remains `/setup`.

This is an evaluation walkthrough, not a promise of seamless signed-in onboarding or durable anonymous saving. The app owner is separately validating restart/exit/history, failed/anonymous-save behavior, and saved-case handoff. Do not publish a claim that complete signup/purchase/onboarding has been validated until the app owner's acceptance evidence and independent final rereview arrive. Commercial access and onboarding remain scoped with the team.

## Final buying-journey update and release blocker

The homepage and navigation now label `/get-started` as **Start an evaluation**, with **Book a demo** going to the real contact page. `/workspace` remains explicitly labeled Open the workspace; assessment setup stays `/setup`. Platform workflow cards describe the evidence input, reviewable output, and accountable next action. A final platform section explains extending scope across teams/sites/use cases based on results, without promising untested self-service purchasing.

The settled production-browser sweep covered 210 page/viewport combinations: no horizontal overflow, missing/duplicate H1, nested anchor/buttons, HTTP errors, or broken internal destinations. Mobile navigation opened and closed with Escape; all three empty inquiry forms blocked submission. **The run recorded 19 intermittent React #418 hydration errors.** An isolated development sweep did not reproduce them. They remain unresolved and block publishing; no all-green browser claim is warranted. `browser-report.json` preserves the affected routes. Independent final copy review and acceptance of the customer app handoff also remain required before release.

### Additional deployment reachability evidence

The refreshed npm audit still reports 7 high / 2 moderate affected nodes and zero critical, with exactly the two root advisories above. `deploy-reachability.json` inspected all 53 Next production `.nft.json` server traces: none includes braces, micromatch, fast-glob, postcss-selector-parser, postcss-nested, or Tailwind. Active server/app bundles likewise contain no imports of those packages. The lockfile-derived chains are preserved in `dependency-chains.json` (npm ls unexpectedly returned an empty filtered tree, so it is not used as evidence). This supports absence from the traced request-serving artifact, not a guarantee about all host-installed dependencies. Vercel builds still process repository CSS/glob inputs; hostile code/CSS/globs in an untrusted contribution could exhaust that build process. No compatible braces patch is published; selector-parser's patched 7.1.6 is outside the required 6.x nested ranges. A compiler migration requires separate compatibility testing.

### Runtime diagnosis in progress

Reproduced #418 in a fresh extension-disabled browser against both the current source and the initial 8139b12 source using isolated production builds with the same patched Next runtime. Exact stacks point to React rD → oq → iw; instrumentation shows the root content `<div>` correctly claimed, then claimed again with the cursor at its child `<main>`. This is an interrupted hydration/retry failure, not a differing date, consent initialization, navigation state, or an extension-injected attribute. The 19 original affected entries are preserved in `browser-report-original-19-errors.json`; `hydration-before-fix.log` records host-node claims and component ancestry.

An analytics-only hook change did not resolve the error and was reverted. A route-content Suspense boundary passed repeated failing-route loads and the focused journey, but was rejected because its server HTML streamed all content into a hidden segment requiring JavaScript to reveal it. Its full sweep was interrupted before completion when that SSR regression was discovered. No candidate is treated as a finished fix until both hydration and no-JavaScript visibility checks pass.

### Resolved runtime failure

Final repair removes the redundant root-layout div and places the skip-link id/tabIndex on each semantic main, including shared marketplace/manual/training pages and error/not-found fallbacks. The skip link now precedes the analytics UI. The route-content boundary and blocking-metadata experiments were reverted; Analytics behavior, normal metadata handling, and server rendering are preserved.

Clean build `b3ksr-Su7hziZBTgTcRIR` passed all 210 page/viewport cases at 1440, 768, 390, 375, and 320px with zero runtime/hydration errors, no layout/H1/main-target/nested-button issues, and no broken internal destinations. The build ID was unchanged through the run. Repeated formerly failing strategic-pilot loads also passed in a separate fresh extension-disabled profile. Focused journey passed skip visibility/focus, mobile menu closure on navigation, platform purchasing contact, empty-form blocking, necessary-only consent persistence with zero optional tracker requests, and all three PDF-to-article redirects. The platform heading and main content remained visible with JavaScript disabled, with no hidden streamed-content segments. A subsequent build adds only the same skip attributes to the two fallback pages and is checked separately; the full sweep is not misrepresented as testing a newer build.

The prior runtime release blocker is resolved by the recorded suite. App PR651 at 89473edf still needs its separate hosted CI/browser acceptance; the marketing links promise a bounded evaluation and scoped purchasing/onboarding, not untested seamless signup or self-service paid access. The prior marketing f2ca62a preview succeeded; the new fix must receive exact-head preview success and hosted smoke before release.

## Website-only release handoff gate

Independent review accepts c526's source and hydration repair. App PR651 has save/evidence bugs under repair, so this marketing release does not promote /get-started. Homepage, navigation, platform and footer evaluation requests go to /contact with Discuss an evaluation language; the home option row offers a scoped conversation, not a self-service walkthrough. Existing workspace links explicitly identify customer access; /setup remains assessment-only. No app PR is merged or deployed by this release.

Restoration point: c526b454e38f8e8954b945edd26a2facdc75b0d2 records the prior guided handoff and labels. After app PR651 is deployed and independently verifies saving, evidence retention, restart/history and handoff, selectively restore lib/site-links.ts plus home/nav/platform/footer evaluation routing and descriptions from that revision. Preserve subsequent hydration/SSR/accessibility fixes and customer-only workspace labels; do not revert the release wholesale. Recheck CTA meaning, links, keyboard/mobile flows and the exact app destination before restoring promotion.

## Published contact-path repair follow-up

Read-only production metadata, including shared environments, showed no RESEND_API_KEY. The old contact page would submit to a handler that returns 503 without it. Replace the public form with a clear direct-email handoff to oadavis@syncai.ca, local optional draft fields, and a clipboard fallback. The visitor must review and send through their email app; the website makes no delivery or acceptance claim. Keep the unused API's honest failure behavior, and do not restore public submission without verified configuration and controlled inbox testing.

Missing-provider and email draft regression checks now run before every Next production build. The focused browser harness inspects mailto URLs without clicking them, mocks clipboard writes, blocks POST requests, and checks home/platform/industry/contact routing across five widths plus a no-JavaScript fallback. Local tests passed with no requests submitted or runtime errors. Initial local server start hit sandbox EPERM and was rerun with permitted localhost escalation. The browser harness initially rejected a valid cached 304; disable caching and rerun rather than classify it as a website failure.

POLICY-REVIEW-DRAFT.md contains only owner review proposals. Public Terms/Privacy files are unchanged. Terms 2–3 describe retired tools; terms 5–6 reference assessment tools. Privacy's named analytics list omits configured Clarity. These are separate owner/legal review items, not a prerequisite to exposing a usable email contact.
