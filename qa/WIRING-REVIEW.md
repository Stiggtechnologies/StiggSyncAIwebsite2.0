# Customer handoff and favicon repair

## Bounded changes

Customer links now use APP_CUSTOMER_SIGN_IN_URL=https://app.syncai.ca/signin?returnTo=%2F and labels Customer sign-in / Existing customers: sign in. Fifteen existing template consumers are updated, including shared footer and marketplace component; the latter renders on Microsoft/AWS/Salesforce pages. / and /overview resolve through the app's authenticated RoleLanding, verified against deployed37af9fd and draft655 source. Public exploration remains explicitly labeled on the resource demo guide via APP_PUBLIC_DEMO_URL=https://app.syncai.ca/workspace. No organization provisioning, successful authentication or purchased tenant execution is claimed.

APP_SETUP_URL is removed. Platform's misleading Continue to assessment setup in the app becomes Discuss an assessment → /contact. The unused legacy ResultsDisplay handoff uses that same contact contract instead of /setup. /setup is an app public service brochure that returns to marketing assessment, not the authenticated SetupWizard. New-buyer evaluation/purchasing CTAs remain /contact; no guided /get-started promotion added.

Root metadata declares the existing approved /brand/syncai-wordmark.png as PNG icon/shortcut. /favicon.ico redirects308 to that asset, which resolves200 with image/png and browser-decodes. Original303×144 PNG bytes are unchanged; no ICO conversion, new logo, concept-board artwork, generated imagery or outside-organization mark changes. It reuses the full approved wordmark rather than introducing a separate icon identity.

Legal policies, email delivery/configuration/API handlers, consent/tracking and commercial pricing unchanged. Existing Resource Corner content/canonicals and all263 Insights redirects preserved. Existing untracked supabase/.temp cache untouched.

## Validation

Build, lint, typecheck/Insights SEO and existing contact/training/resource regressions passed. New test:links checks encoded root-return/sign-in/public-demo/contact contracts, all fifteen consumers, absence of stale constants/handoffs, and approved favicon alias/metadata.

Local production rendering passed54 cases (18 routes ×1440/390/320): no overflow, singleH1, correct rendered customer destinations, contact buyer gates, no stale customer-workspace/setup labels, explicit demo preserved and icon metadata present. Favicon308→200, MIMEimage/png, bytes equal approved asset, browser decoded303×144. Assessment CTA reached contact; no-JavaScript platform retains sign-in link. Actual public app/signin?returnTo=%2F rendered an email authentication field with HTTP200; no credentials entered. Zero page errors, console errors or POSTs.

One initial browser run failed saving the first screenshot due host ENOSPC; it is not counted as a pass. Only this task's disposable .next/cache was cleared, preserving source and compiled build, then full rerun passed. Rendered screenshots inspected; evidence JSON/screenshots are outside the source tree in sibling qa-evidence/wiring-local.

## Review and publication

Prepare draft PR and exact-head Vercel preview for independent review before publication. A pushed feature branch triggers preview; neither preview readiness nor local tests imply production publication. Protected preview QA uses the authorized existing browser session; do not change protection or copy credentials. Keep source head fixed during acceptance. Backend notification-owner reconciliation remains separate and is not changed by this PR.
