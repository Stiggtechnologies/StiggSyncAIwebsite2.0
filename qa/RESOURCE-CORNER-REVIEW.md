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
