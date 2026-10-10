# Resource Corner review

## Scope and content manifest

Adds /resources and /resources/product-demo using the existing graphite, bone and brass design system and existing brand artwork. Main navigation now leads to Resources; Insights retains every URL and redirect and remains linked in the footer, library and resource hub. No app wiring, mailboxes, tracking or delivery configuration changed.

14 public entries:
- Seven existing Insights articles (canonical /insights/<slug> destinations and source publication dates preserved; stale reading-time estimates omitted).
- Sync Field Manual v0 (/manuals/field-manual), an online educational workflow guide, with existing author/date and eight chapters. It is not presented as certification or proof of connected execution.
- Three existing facilitated training offers (canonical /training/<slug>, existing format metadata, no invented dates, recordings or downloads).
- Public Decision Case demo guide (/resources/product-demo), explicitly opening the public /workspace experience; commercial access remains /contact.
- Architecture and security overviews (/architecture, /security), described as review starting points rather than API documentation or independently verified certifications.

lib/resources.ts is the manifest: format, topic, canonical destination, publication status, source path, audience and buyer job. Webinar, Podcast, Template / checklist and Event are supported content types but have no published entries and are excluded from active filters. Their restrained availability section points to existing articles, training and the Field Manual. No newsletter form, fake players, recordings, speakers, commitments or confidential materials were added.

## Buyer journey and accessibility

Three starting points: reliability decision → Field Manual; team method → training; product evaluation → demo guide. Featured substantive article links to Recommend Is Not Authorize. Library search and format/topic filters combine; state is reflected in shareable query URLs. Explicit GET search works with JavaScript disabled and preserves server-rendered results. Canonical metadata points to unfiltered /resources. Empty results offer a real clear/browse path; live count uses a polite atomic status. Resource detail pages remain at their existing canonical destinations, with related content on the new demo guide. Both new routes are included in the sitemap fallback and filesystem discovery.

## Validation

- Production build: passed (54 generated static pages; /resources server-rendered for query filtering). Resource manifest/filter and existing contact/training checks run automatically before the build.
- Lint and TypeScript/Insights SEO: passed; all seven catalog slugs and 263 existing redirects preserved.
- Local production browser QA: 12 new-page renders at 1440/1024/768/390/375/320 widths; no overflow, malformed nested controls, missing H1 or runtime errors. All 14 resource destinations returned 200. Mobile Resources navigation opens and closes with Escape.
- Four search/filter checks passed: Training (3), combined empty result, restored Article + Business case query (1), case-insensitive search and empty state. Three no-JavaScript cases passed, including server-filtered Training results.
- Sitemap includes both new routes; canonical metadata checked. Zero POSTs; external demo was not clicked. Desktop/mobile screenshots inspected.
- Intermediate failures: an uncached sandbox build could not resolve existing Google Fonts; a subsequent build failed with host ENOSPC while writing a prerendered page. An attempted cache-clear here-document also failed due disk exhaustion; it was corrected with direct Python invocation. Only this task's disposable .next/cache was cleared, and the final network-enabled build passed. These failed attempts are not represented as successes.

## Publication gate

Draft PR and its Vercel preview are for independent review. Source changes must be reviewed before merge/publication. Preview deployment success alone is not production publication. Protected-preview browser access may require an authorized reviewer session; never change protection or expose a bypass token merely for QA. Evidence JSON/screenshots live outside the repository in the sibling qa-evidence directory. The pending customer-sign-in/assessment-loop and notification-ownership reconciliation remains a separate proposal.

## Independent-review repairs

Authenticated Chrome preview QA reproduced two reset defects at 03c6b6c: Training → Clear filters retained three cards despite an unfiltered URL; a zero-match query → Browse all resources retained zero cards. The initial four-scenario browser suite did not cover these actions or history. ResourceLibrary now derives its entire filter state from useSearchParams. Filter selections add native history entries; query typing replaces the current entry. Next same-route reset links and Back/Forward therefore restore the controls and results from the URL without a second client-state copy. /resources explicitly renders dynamically, preserving server-rendered no-JavaScript filters.

Computed pre-repair sizes also confirmed unavailable Tailwind 3.3 utilities: hero CTA 24px, search input 22px, selects about 22.5px. New resource controls/CTAs now use min-h-[44px] or min-h-[48px], and unavailable /15,/45,/65 opacity scales use arbitrary values. Header action/menu minimum sizes were made compatible in the same way; no Tailwind upgrade.

Expanded local production QA passed nine filter/navigation checks, including both reset links, Back/Forward after each reset, direct deep links, combined filters and keyboard search → format → topic → submit traversal. Both new pages at all six widths also enforce computed 44/48px minima for each designated target. Final lint, typecheck, build (53 static pages plus dynamic /resources), manifest/filter and existing contact/training regressions passed. Zero page errors or POSTs. Hosted revalidation is against the repair commit's new preview, not the initial candidate.

Existing authorized Chrome session successfully opens protected previews without credentials or protection changes. All 14 initial-preview resource destinations rendered a single H1 with no overflow. The demo guide's customer CTA opens /contact with the explicit user-controlled email draft; it was not sent. Its public demo CTA opens app.syncai.ca/workspace, including the public first-decision route and a labeled illustrative Compare path; no question, upload, saved customer case, approval or work execution was submitted.

Customer sign-in contract: deployed app 37af9fd uses /signin?returnTo=%2Foverview on its customer card; /overview and / both render RoleLanding inside AuthenticatedApp. Draft app 24c0fcc0 changes the customer card to a safely encoded root return, preserving acquisition context through publicJourneyPath. Thus the separate marketing proposal /signin?returnTo=%2F is valid and aligns with draft #655. /workspace remains a public demo and /setup remains a public service page. No customer-link repair is silently included in this resource PR.
