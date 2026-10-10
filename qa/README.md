# SyncAI marketing launch-readiness validation

Run `npm run build`, then `npm run start -- --hostname 127.0.0.1 --port 3100` and `node qa/browser-audit.cjs` on macOS with Chrome installed. The script uses a separate headless profile under /tmp and does not touch existing user tabs. It visits rendered pages at 320, 375, 390, 768 and 1440px, tests internal destinations, navigation open/Escape behavior and empty-form blocking. It never submits a lead.

The script writes `browser-report.json` and representative mobile screenshots in `../qa-evidence`. These generated artifacts stay outside the source tree because the Insights contract checks every JSON file for retired slugs. This is local build QA, not production or preview deployment validation. It does not verify email delivery, authenticated app functions, a completed purchase, or data onboarding.

## Owner review before production release

- Terms sections 2–3 still describe retired AI Readiness/ROI calculators. Obtain owner/legal approval for a replacement that addresses current platform and assessment offerings; this PR only adds the confirmed operator identity and visual consistency.
- Confirm specialized security/privacy/legal mailboxes and production form recipient configuration. The known business contact is oadavis@syncai.ca; contact fallback now uses it.
- Confirm current SSO, encryption/isolation, hosting/residency, and model-data representations in security/privacy against the actual customer environment. Existing controls were not independently certified by this marketing review.
- Review remaining dependency audit advisories. The direct Next.js critical advisory was addressed with patch 15.5.27. Compatible dependency remediation leaves 7 high and 2 moderate affected build-tool nodes; see RELEASE-REVIEW.md for root advisories and exposure.
- App policy routes were separately reported to the app task: app.syncai.ca policy links must render the appropriate policy content or link to an approved policy destination. This marketing repository does not own that app routing.
- SaaS is commercially available per owner confirmation. Marketplace listing availability/credits/packaged integrations are separate and need verification before marketplace purchase claims return.

## Coordination and deployment

Started from clean main 8139b12 in an isolated clone. Open PR 286 adds Training to nav/footer; this change preserves that addition in its broader navigation work. PR 284 (draft Edmonton office) and PR 283 (Insights publish gate) are not incorporated. Insights keeps seven catalog slugs and 263 redirects.

Main and existing feature-PR commits have Vercel deployment checks for stiggsync-website. A pushed draft branch can trigger a Vercel preview; do not describe it as production. No merge or production deploy is performed by this task. The repository also contains netlify.toml, but the observed GitHub deployment status is Vercel.

## Results recorded on 2026-10-10

- `npm run build`: passed on Next.js 15.5.27 (52 generated static pages). The dependency follow-up also refreshed browser support data.
- `npm run lint`: passed without warnings/errors after fixing the existing observer cleanup warning.
- `npm run typecheck`: passed TypeScript and Insights SEO (7 catalog slugs, 263 redirects); one intermediate rerun failed when generated QA JSON was placed in the source tree. Evidence was moved outside the repo and the check rerun.
- Browser audit: 42 route destinations × 5 widths = 210 renders; no horizontal overflow, missing/duplicate H1, nested anchor/button controls, or JavaScript page errors. 42 internal link destinations had no 4xx/5xx. Cached responses returned 304 and are successful revalidations, not broken routes.
- Mobile menu opens and closes with Escape. Contact, pilot, and assessment empty-form validation blocks submission.
- Final investor follow-up: 200 responses and no overflow at all 5 widths; unsupported ROI numbers removed. Social image returns 200. Home platform-access CTA routes to contact; explore/workspace CTAs route to app.syncai.ca/workspace.
- Representative home and contact screenshots visually inspected; existing branding and premium palette retained.
- No production lead submission, real AI question, upload, completed purchase, email-delivery test, authenticated customer onboarding, or production deployment was performed.

## Production hydration regression check

The current browser harness fails on any page error, verifies semantic skip targets, and records the production build ID before and after the run. `node qa/journey-check.cjs` checks keyboard skip focus, a mobile platform-to-purchasing journey, necessary-only consent persistence, all three retired PDF redirects, and empty-form blocking without sending a lead. `node qa/nojs-check.cjs` verifies that the platform heading and main content remain visible with JavaScript disabled. Historical failed/interrupted candidates are documented in RELEASE-REVIEW.md; they must not be presented as passing tests.

## Contact email handoff repair (2026-10-10 follow-up)

The production provider key was absent, so the public contact page now uses an explicit direct-email handoff. Optional fields only prepare a local draft; Open email app opens a mailto URL and the visitor must send from their email app. Copy email draft provides a fallback. No public contact form calls /api/contact or claims sent/delivered. Pilot and assessment remain separate intake forms; their production storage and notifications are still unverified.

Run `node qa/contact-regression.cjs` for missing-provider and draft encoding/error-claim regression checks, then `node qa/contact-browser-check.cjs` against the local production build. Set `QA_BASE_URL=https://syncai.ca` for hosted validation. Browser tests inspect but never click mailto links, mock clipboard writes, abort any POST, verify 20 route/viewport cases and a JavaScript-disabled usable fallback. Policy wording proposals are in POLICY-REVIEW-DRAFT.md and are not published policy changes.

## Training inquiry handoff follow-up

All three training inquiry routes now prepare a course-specific local email draft and copied text using the same verified recipient as /contact. No public component calls the unconfigured /api/contact handler. Each handoff explicitly requires review and sending in the visitor's email service; neither copying nor opening an email app implies submission. Draft fields remain on screen after clipboard success or failure.

The deployment-build regressions cover each configured course, field encoding/context, recipient consistency and an exhaustive source scan for public /api/contact consumers. `node qa/training-browser-check.cjs` checks all three routes at five widths, all inquiry fields and format selection, copy success/failure without data loss, editing after copying, runtime/layout behavior and course-preserving no-JavaScript fallbacks. It blocks POSTs, mocks clipboard writes and never clicks mailto links. Set QA_BASE_URL for public production verification. Pilot/RIA backend verification remains separate and their handlers are unchanged.

## Resource Corner

`npm run test:resources` validates published-resource integrity, all existing article/course destinations, source metadata, withheld unpublished media and combined search/filter behavior. It runs automatically before the production build.

`node qa/resources-browser-check.cjs` runs against `QA_BASE_URL` (default http://127.0.0.1:3100). It checks both new pages at six widths, all 14 resource destinations, canonical tags, mobile navigation, live and URL-restored filters, empty results, sitemap inclusion and three no-JavaScript cases. It blocks all POSTs and never clicks the external public demo. Evidence defaults to the sibling `qa-evidence` directory; no browser output belongs in the TypeScript source tree. Use `QA_OUTPUT_DIR` for a separate hosted-preview run.

Catalog policy: add published, public-ready material only. Preserve existing Insights and manual canonical paths. Webinars, podcasts, templates/checklists and events are supported formats but stay absent from filters until actual public assets exist. Never use confidential sales/investor material, draft training workbooks, retired PDFs, stale help pages or a planned recording as a published resource. Public architecture/security pages are overviews, not API documentation or proof of certifications.
