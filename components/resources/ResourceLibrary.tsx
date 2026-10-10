"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  filterResources,
  availableResourceFormats,
  resourceTopics,
} from "@/lib/resources";

export default function ResourceLibrary() {
  // The URL is the sole filter state: same-route Links and browser history
  // must restore results as well as the address bar.
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").slice(0, 200);
  const format =
    availableResourceFormats.find(
      (value) => value === searchParams.get("format"),
    ) || "";
  const topic =
    resourceTopics.find((value) => value === searchParams.get("topic")) || "";
  const matches = filterResources(query, format, topic);
  const updateFilter = (name: string, value: string, addHistory = false) => {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set(name, value);
    else url.searchParams.delete(name);
    if (addHistory) window.history.pushState(null, "", url);
    else window.history.replaceState(null, "", url);
  };
  return (
    <section
      id="library"
      aria-labelledby="library-title"
      className="scroll-mt-24 border-y border-bone/10 bg-graphite"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              The library
            </p>
            <h2
              id="library-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Find your next useful read.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-bone/[0.65]">
            Browse by the question you’re working on, or choose the format that
            fits your time.
          </p>
        </div>
        <form
          action="/resources#library"
          method="get"
          role="search"
          aria-label="Search resources"
          className="mt-10 grid gap-5 rounded-sm border border-bone/[0.15] bg-ink p-5 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto]"
        >
          <label className="text-sm text-bone/80">
            Search resources
            <input
              type="search"
              name="q"
              maxLength={200}
              value={query}
              onChange={(event) => updateFilter("q", event.target.value)}
              placeholder="Try evidence, planning or governance"
              className="mt-2 min-h-[48px] w-full rounded-sm border border-bone/25 bg-graphite px-3 text-bone placeholder:text-bone/[0.45]"
            />
          </label>
          <label className="text-sm text-bone/80">
            Format
            <select
              name="format"
              value={format}
              onChange={(event) =>
                updateFilter("format", event.target.value, true)
              }
              className="mt-2 min-h-[48px] w-full rounded-sm border border-bone/25 bg-graphite px-3 text-bone"
            >
              <option value="">All formats</option>
              {availableResourceFormats.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="text-sm text-bone/80">
            Topic
            <select
              name="topic"
              value={topic}
              onChange={(event) =>
                updateFilter("topic", event.target.value, true)
              }
              className="mt-2 min-h-[48px] w-full rounded-sm border border-bone/25 bg-graphite px-3 text-bone"
            >
              <option value="">All topics</option>
              {resourceTopics.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="min-h-[48px] self-end rounded-sm bg-cyan-300 px-5 font-semibold text-ink hover:bg-cyan-200"
          >
            Search
          </button>
        </form>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="text-sm text-bone/[0.65]"
          >
            {matches.length} {matches.length === 1 ? "resource" : "resources"}
            {query || format || topic
              ? " matching your selection"
              : " available"}
          </p>
          {(query || format || topic) && (
            <Link
              href="/resources#library"
              data-resource-reset="clear"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-cyan-300"
            >
              Clear filters →
            </Link>
          )}
        </div>
        {matches.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((resource) => (
              <article
                key={resource.id}
                data-resource-id={resource.id}
                className="flex flex-col border border-bone/[0.15] bg-ink p-6 transition-colors hover:border-cyan-300/[0.45] sm:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                  {resource.format}
                </p>
                <p className="mt-3 text-xs text-bone/60">{resource.topic}</p>
                <h3 className="mt-5 text-xl font-semibold leading-snug">
                  <Link href={resource.href} className="hover:text-cyan-300">
                    {resource.title}
                  </Link>
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-bone/70">
                  {resource.description}
                </p>
                <div className="mt-6 border-t border-bone/10 pt-5 text-xs leading-6 text-bone/60">
                  <p>{resource.metadata}</p>
                  {resource.published && (
                    <p>
                      <time dateTime={resource.published}>
                        {new Intl.DateTimeFormat("en-CA", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          timeZone: "UTC",
                        }).format(new Date(`${resource.published}T00:00:00Z`))}
                      </time>
                      {resource.author ? ` · ${resource.author}` : ""}
                    </p>
                  )}
                </div>
                <Link
                  href={resource.href}
                  aria-label={`${resource.action}: ${resource.title}`}
                  className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  {resource.action} →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-bone/[0.15] p-8">
            <h3 className="text-xl font-semibold">
              No resources match that combination.
            </h3>
            <p className="mt-3 text-bone/70">
              Try fewer words, a broader topic, or clear your filters to browse
              the full library.
            </p>
            <Link
              href="/resources#library"
              data-resource-reset="empty"
              className="mt-5 inline-flex min-h-[44px] items-center font-semibold text-cyan-300"
            >
              Browse all resources →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
