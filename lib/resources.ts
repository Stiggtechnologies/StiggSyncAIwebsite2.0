import { insightArticles } from "@/lib/insights";
import { fieldManual } from "@/lib/manuals";
import { trainingOffers } from "@/lib/training-offers";

export const resourceFormats = [
  "Article",
  "Guide",
  "Interactive demo",
  "Training",
  "Technical resource",
  "Webinar",
  "Podcast",
  "Template / checklist",
  "Event",
] as const;
export const resourceTopics = [
  "Reliability & maintenance",
  "Decisions & governance",
  "Business case",
  "Implementation & security",
] as const;
export type ResourceFormat = (typeof resourceFormats)[number];
export type ResourceTopic = (typeof resourceTopics)[number];
type PublishedResource = {
  id: string;
  title: string;
  description: string;
  href: string;
  format: ResourceFormat;
  topic: ResourceTopic;
  action: string;
  metadata: string;
  published?: string;
  author?: string;
};

/** Published public destinations only. Never add a planned recording as a playable resource. */
const publishedResources: PublishedResource[] = [
  {
    id: "field-manual",
    title: `${fieldManual.title} ${fieldManual.version}`,
    description:
      "A practical reference for the Decision Case: from the operating question to evidence, human approval, verification and learning.",
    href: "/manuals/field-manual",
    format: "Guide",
    topic: "Decisions & governance",
    action: "Read the manual",
    metadata: `${fieldManual.chapters.length} chapters · Online guide`,
    published: fieldManual.published,
    author: fieldManual.author,
  },
  {
    id: "product-demo",
    title: "Explore the public Decision Case demo",
    description:
      "See the public experience before discussing team access. Start with a question and explore how evidence and a proposed next action fit together.",
    href: "/resources/product-demo",
    format: "Interactive demo",
    topic: "Decisions & governance",
    action: "Explore the demo guide",
    metadata: "Browser-based · Public demo",
  },
  ...insightArticles.map((article) => ({
    id: article.slug,
    title: article.title,
    description: article.excerpt,
    href: `/insights/${article.slug}`,
    format: "Article" as const,
    topic: (article.category === "ROI & Business Case"
      ? "Business case"
      : article.category === "Decision Case" ||
          article.category.includes("Governance")
        ? "Decisions & governance"
        : "Reliability & maintenance") as ResourceTopic,
    action: "Read the article",
    metadata: "Online article",
    published: article.published,
    author: article.author,
  })),
  ...trainingOffers.map((offer) => ({
    id: `training-${offer.slug}`,
    title: offer.title,
    description: offer.metaDescription,
    href: offer.path,
    format: "Training" as const,
    topic: "Reliability & maintenance" as const,
    action: "View the course",
    metadata: offer.audienceLabel,
  })),
  {
    id: "architecture",
    title: "Architecture overview",
    description:
      "Review the platform architecture and prepare questions about your workflows, data sources and connection requirements.",
    href: "/architecture",
    format: "Technical resource",
    topic: "Implementation & security",
    action: "Review the architecture",
    metadata: "Public overview",
  },
  {
    id: "security",
    title: "Security overview",
    description:
      "Use the public security overview to start a review of the access, data handling and deployment requirements for your customer scope.",
    href: "/security",
    format: "Technical resource",
    topic: "Implementation & security",
    action: "Review security",
    metadata: "Public overview",
  },
];

export type Resource = PublishedResource & {
  status: "published";
  sourcePath: string;
  audience: string;
  buyerJob: string;
};
export const resources: Resource[] = publishedResources.map((resource) => ({
  ...resource,
  status: "published",
  sourcePath:
    resource.href === "/resources/product-demo"
      ? "app/resources/product-demo/page.tsx"
      : resource.href.startsWith("/training/")
        ? "lib/training-offers.ts"
        : resource.href.startsWith("/insights/")
          ? "lib/insights.ts"
          : resource.href.startsWith("/manuals/")
            ? "lib/manuals.ts"
            : `app${resource.href}/page.tsx`,
  audience:
    resource.format === "Training"
      ? "Maintenance and operations teams"
      : "Reliability, maintenance and technical evaluation teams",
  buyerJob:
    resource.topic === "Implementation & security"
      ? "Prepare a customer-scope review"
      : resource.format === "Training"
        ? "Build a repeatable team method"
        : "Evaluate evidence and decisions",
}));
export const availableResourceFormats = resourceFormats.filter((format) =>
  resources.some((resource) => resource.format === format),
);

export function filterResources(
  query: string,
  format: string,
  topic: string,
): Resource[] {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return resources.filter(
    (resource) =>
      (!format || resource.format === format) &&
      (!topic || resource.topic === topic) &&
      words.every((word) =>
        `${resource.title} ${resource.description} ${resource.topic} ${resource.format}`
          .toLocaleLowerCase()
          .includes(word),
      ),
  );
}
