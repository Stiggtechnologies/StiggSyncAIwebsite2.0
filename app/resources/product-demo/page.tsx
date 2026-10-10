import Link from "next/link";
import { APP_WORKSPACE_URL } from "@/lib/site-links";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Public Decision Case Demo Guide",
  description:
    "Explore the public SyncAI demo with a useful operating question. Understand the experience and discuss customer access and implementation requirements.",
  path: "/resources/product-demo",
});
export default function DemoResourcePage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-ink pt-16 text-bone">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <nav aria-label="Breadcrumb">
          <Link
            href="/resources"
            className="inline-flex min-h-11 items-center text-sm text-cyan-300"
          >
            Resource Corner
          </Link>
          <span aria-hidden="true" className="mx-3 text-bone/40">
            /
          </span>
          <span className="text-sm text-bone/65">Demo guide</span>
        </nav>
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-cyan-300">
          Interactive demo · Browser-based
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Explore the public Decision Case demo.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-bone/70">
          Get a feel for how a question, supporting evidence and a proposed next
          action fit together before discussing SyncAI for your team.
        </p>
        <a
          href={APP_WORKSPACE_URL}
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-6 font-semibold text-ink hover:bg-cyan-200"
        >
          Open the public demo →
        </a>
        <p className="mt-4 text-sm text-bone/60">
          Opens app.syncai.ca. This link starts the public demo experience.
        </p>
        <section
          aria-labelledby="try-title"
          className="mt-16 border-t border-bone/20 pt-10"
        >
          <h2 id="try-title" className="text-3xl font-semibold">
            Start with a useful question.
          </h2>
          <ol className="mt-7 space-y-7">
            {[
              {
                title: "Name the operating question",
                body: "Choose a question you would ask in a maintenance review: what is recurring, what should we investigate, or what evidence would change the next action?",
              },
              {
                title: "Examine the basis for a proposal",
                body: "Look for the evidence behind a recommendation and what remains uncertain. Use a non-sensitive illustrative question while exploring the public experience.",
              },
              {
                title: "Keep the team’s authority explicit",
                body: "A recommendation is a proposal. Compare it with the Field Manual’s sequence of human decision, action, verification and learning.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="font-mono text-cyan-300">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-bone/70">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-14 border border-bone/15 bg-graphite p-7 sm:p-10">
          <h2 className="text-2xl font-semibold">Plan access for your team.</h2>
          <p className="mt-5 leading-7 text-bone/70">
            SyncAI is available to purchase and use. Customer access, authorized
            data sources, connection requirements and onboarding are agreed for
            your scope. The public demo is an exploration path; it does not
            provision your organization or connect your production systems.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-cyan-300"
          >
            Discuss platform access →
          </Link>
        </section>
        <section aria-labelledby="related-title" className="mt-14">
          <h2 id="related-title" className="text-2xl font-semibold">
            Continue exploring
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              {
                href: "/manuals/field-manual",
                title: "Sync Field Manual v0",
                body: "Read the Decision Case sequence and the role of evidence and human approval.",
              },
              {
                href: "/architecture",
                title: "Implementation architecture",
                body: "Prepare questions about workflows and the requirements for your customer scope.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-t border-bone/20 py-6 hover:text-cyan-300"
              >
                <h3 className="text-xl font-semibold">{item.title} →</h3>
                <p className="mt-3 text-sm leading-7 text-bone/65">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
