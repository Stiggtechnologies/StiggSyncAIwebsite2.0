# SyncAI marketing launch-readiness validation

Run `npm run build`, then `npm run start -- --hostname 127.0.0.1 --port 3100` and `node qa/browser-audit.cjs` on macOS with Chrome installed. The script uses a separate headless profile under /tmp and does not touch existing user tabs. It visits rendered pages at 320, 375, 390, 768 and 1440px, tests internal destinations, navigation open/Escape behavior and empty-form blocking. It never submits a lead.

The script writes `browser-report.json` and representative mobile screenshots in `../qa-evidence`. These generated artifacts stay outside the source tree because the Insights contract checks every JSON file for retired slugs. This is local build QA, not production or preview deployment validation. It does not verify email delivery, authenticated app functions, a completed purchase, or data onboarding.

## Owner review before production release

- Terms sections 2–3 still describe retired AI Readiness/ROI calculators. Obtain owner/legal approval for a replacement that addresses current platform and assessment offerings; this PR only adds the confirmed operator identity and visual consistency.
- Confirm specialized security/privacy/legal mailboxes and production form recipient configuration. The known business contact is oadavis@syncai.ca; contact fallback now uses it.
- Confirm current SSO, encryption/isolation, hosting/residency, and model-data representations in security/privacy against the actual customer environment. Existing controls were not independently certified by this marketing review.
- Review remaining dependency audit advisories. The direct Next.js critical advisory was addressed with patch 15.5.27; install still reports 21 high and 19 moderate advisories.
- App policy routes were separately reported to the app task: app.syncai.ca policy links must render the appropriate policy content or link to an approved policy destination. This marketing repository does not own that app routing.
- SaaS is commercially available per owner confirmation. Marketplace listing availability/credits/packaged integrations are separate and need verification before marketplace purchase claims return.

## Coordination and deployment

Started from clean main 8139b12 in an isolated clone. Open PR 286 adds Training to nav/footer; this change preserves that addition in its broader navigation work. PR 284 (draft Edmonton office) and PR 283 (Insights publish gate) are not incorporated. Insights keeps seven catalog slugs and 263 redirects.

Main and existing feature-PR commits have Vercel deployment checks for stiggsync-website. A pushed draft branch can trigger a Vercel preview; do not describe it as production. No merge or production deploy is performed by this task. The repository also contains netlify.toml, but the observed GitHub deployment status is Vercel.

## Results recorded on 2026-10-10

- `npm run build`: passed on Next.js 15.5.27 (52 generated static pages). Build emits an existing outdated Browserslist-data notice.
- `npm run lint`: passed without warnings/errors after fixing the existing observer cleanup warning.
- `npm run typecheck`: passed TypeScript and Insights SEO (7 catalog slugs, 263 redirects); one intermediate rerun failed when generated QA JSON was placed in the source tree. Evidence was moved outside the repo and the check rerun.
- Browser audit: 42 route destinations × 5 widths = 210 renders; no horizontal overflow, missing/duplicate H1, nested anchor/button controls, or JavaScript page errors. 42 internal link destinations had no 4xx/5xx. Cached responses returned 304 and are successful revalidations, not broken routes.
- Mobile menu opens and closes with Escape. Contact, pilot, and assessment empty-form validation blocks submission.
- Final investor follow-up: 200 responses and no overflow at all 5 widths; unsupported ROI numbers removed. Social image returns 200. Home platform-access CTA routes to contact; explore/workspace CTAs route to app.syncai.ca/workspace.
- Representative home and contact screenshots visually inspected; existing branding and premium palette retained.
- No production lead submission, real AI question, upload, completed purchase, email-delivery test, authenticated customer onboarding, or production deployment was performed.
