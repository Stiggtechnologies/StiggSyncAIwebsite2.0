import Link from "next/link";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import {
  availableResourceFormats,
  resourceTopics,
  resources,
} from "@/lib/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resource Corner",
  description:
    "Explore SyncAI articles, the Field Manual, a public product demo, reliability training and technical resources. Browse by topic and format.",
  path: "/resources",
});
const paths = [
  {
    number: "01",
    title: "Make a better reliability decision",
    body: "Start with the question, examine the evidence and keep approval explicit.",
    href: "/manuals/field-manual",
    action: "Open the Field Manual",
  },
  {
    number: "02",
    title: "Build your team’s working method",
    body: "Find practical sessions for planners, supervisors, managers and frontline teams.",
    href: "/training",
    action: "Explore training",
  },
  {
    number: "03",
    title: "Evaluate SyncAI for your operation",
    body: "Explore the public demo, then prepare your implementation and security questions.",
    href: "/resources/product-demo",
    action: "Start with the demo guide",
  },
];

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const value = (key: string) =>
    typeof params[key] === "string" ? (params[key] as string) : "";
  const format =
    availableResourceFormats.find((item) => item === value("format")) || "";
  const topic = resourceTopics.find((item) => item === value("topic")) || "";
  return (
    <main id="main-content" tabIndex={-1} className="bg-ink pt-16 text-bone">
      <section className="relative overflow-hidden border-b border-bone/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-2/5 border-l border-cyan-300/10 bg-gradient-to-bl from-cyan-300/[0.07] to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
            SyncAI / Resource Corner
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Better questions.
                <br />
                <span className="text-cyan-300">Stronger decisions.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-bone/70">
                Ideas, practical references and learning experiences for the
                people responsible for reliability, maintenance and industrial
                operations.
              </p>
              <a
                href="#library"
                className="mt-9 inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-6 font-semibold text-ink hover:bg-cyan-200"
              >
                Explore the library ↓
              </a>
            </div>
            <div className="border-y border-bone/20 py-7">
              <p className="font-mono text-xs uppercase tracking-widest text-bone/60">
                Built for the work ahead
              </p>
              <p className="mt-5 text-2xl leading-snug">
                From understanding the evidence to deciding what happens next.
              </p>
              <p className="mt-5 text-sm leading-7 text-bone/65">
                {resources.length} public resources. Articles to challenge your
                thinking, a manual to structure the work, and clear paths to
                explore the product or learn with your team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="start-title"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
          Choose your starting point
        </p>
        <h2
          id="start-title"
          className="mt-4 text-3xl font-semibold tracking-tight"
        >
          What are you working toward?
        </h2>
        <div className="mt-9 grid gap-8 md:grid-cols-3">
          {paths.map((path) => (
            <article key={path.number} className="border-t border-bone/20 pt-6">
              <span
                aria-hidden="true"
                className="font-mono text-sm text-cyan-300"
              >
                {path.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{path.title}</h3>
              <p className="mt-4 text-sm leading-7 text-bone/65">{path.body}</p>
              <Link
                href={path.href}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-300"
              >
                {path.action} →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="featured-title"
        className="border-t border-bone/10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Featured perspective
            </p>
            <h2
              id="featured-title"
              className="mt-5 text-3xl font-semibold tracking-tight"
            >
              A recommendation needs a decision.
            </h2>
            <p className="mt-5 text-sm leading-7 text-bone/65">
              Begin with the distinction that shapes the rest of the library: a
              proposed next action still needs evidence and a person with
              authority.
            </p>
          </div>
          <article className="border border-cyan-300/25 bg-graphite p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Article · Decisions & governance
            </p>
            <h3 className="mt-6 text-3xl font-semibold sm:text-4xl">
              <Link
                href="/insights/recommend-is-not-authorize"
                className="hover:text-cyan-300"
              >
                Recommend Is Not Authorize
              </Link>
            </h3>
            <p className="mt-5 max-w-2xl leading-7 text-bone/70">
              Explore how a Decision Case keeps a proposal, its evidence and the
              named human decision together.
            </p>
            <Link
              href="/insights/recommend-is-not-authorize"
              className="mt-7 inline-flex min-h-11 items-center font-semibold text-cyan-300"
            >
              Read the article →
            </Link>
          </article>
        </div>
      </section>
      <ResourceLibrary
        initialQuery={value("q").slice(0, 200)}
        initialFormat={format}
        initialTopic={topic}
      />
      <section
        id="conversations"
        aria-labelledby="conversations-title"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Watch / Listen / Learn
            </p>
            <h2
              id="conversations-title"
              className="mt-5 text-3xl font-semibold tracking-tight"
            >
              More ways to explore the conversation.
            </h2>
            <p className="mt-5 leading-7 text-bone/65">
              The library starts with material you can use today. Webinars and
              podcasts will appear here when recordings are published.
            </p>
          </div>
          <div className="divide-y divide-bone/15 border-y border-bone/15">
            {[
              {
                name: "Webinars",
                detail:
                  "No published webinar recordings yet. For a guided session today, explore the role-based training courses.",
                href: "/training",
                action: "Explore live training",
              },
              {
                name: "Podcasts",
                detail:
                  "No published podcast episodes yet. Explore the ideas behind industrial decisions in the article collection.",
                href: "/insights",
                action: "Browse the articles",
              },
            ].map((item) => (
              <article key={item.name} className="py-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="rounded-full border border-bone/20 px-3 py-1 text-xs text-bone/65">
                    Recordings not yet published
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-bone/65">
                  {item.detail}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-300"
                >
                  {item.action} →
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-bone/15 pt-8">
          <h3 className="text-xl font-semibold">
            Looking for a template, checklist or event?
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-bone/65">
            Use the online Field Manual to structure a Decision Case, or review
            the training agendas for team exercises. Standalone downloadable
            templates and public event listings are not published here yet.
          </p>
          <Link
            href="/manuals/field-manual"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-300"
          >
            Use the online guide →
          </Link>
        </div>
      </section>
      <section className="border-t border-bone/10 bg-graphite">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold">
              Bring the question that matters to your team.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-bone/70">
              Talk with SyncAI about platform access, an assessment, a focused
              pilot or training. We’ll discuss your operating goals and the
              requirements for your scope.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-cyan-300 px-6 font-semibold text-ink hover:bg-cyan-200"
          >
            Talk with SyncAI →
          </Link>
        </div>
      </section>
    </main>
  );
}
