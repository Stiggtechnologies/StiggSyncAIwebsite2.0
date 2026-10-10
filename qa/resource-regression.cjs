const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const cache = new Map();
function load(name) {
  const file = path.join(root, name.replace("@/", "") + ".ts");
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  cache.set(file, module.exports);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  vm.runInNewContext(
    source,
    {
      module,
      exports: module.exports,
      require: load,
      URLSearchParams,
      console,
    },
    { filename: file },
  );
  return module.exports;
}
const {
  resources,
  filterResources,
  availableResourceFormats,
  resourceFormats,
} = load("@/lib/resources");
const { insightArticles } = load("@/lib/insights");
const { trainingOffers } = load("@/lib/training-offers");
assert.equal(resources.length, 14);
assert.equal(new Set(resources.map((r) => r.id)).size, resources.length);
assert.equal(new Set(resources.map((r) => r.href)).size, resources.length);
for (const r of resources) {
  assert.equal(r.status, "published");
  assert(
    r.title &&
      r.description &&
      r.action &&
      r.metadata &&
      r.audience &&
      r.buyerJob,
  );
  assert(fs.existsSync(path.join(root, r.sourcePath)), r.sourcePath);
  assert(fs.existsSync(path.join(root, "app", r.href, "page.tsx")), r.href);
  assert(!/\.pdf$|\/operator-brief|\/get-started/.test(r.href));
  assert(
    !/min read/.test(r.metadata),
    "Do not reuse stale catalog read-time estimates",
  );
}
for (const article of insightArticles)
  assert(
    resources.some(
      (r) =>
        r.href === `/insights/${article.slug}` &&
        r.published === article.published,
    ),
  );
for (const offer of trainingOffers)
  assert(resources.some((r) => r.href === offer.path && !r.published));
for (const planned of ["Webinar", "Podcast", "Template / checklist", "Event"]) {
  assert(resourceFormats.includes(planned));
  assert(!availableResourceFormats.includes(planned));
}
assert.equal(filterResources("", "", "").length, 14);
assert.equal(filterResources("", "Training", "").length, 3);
assert.equal(filterResources("", "Article", "").length, 7);
assert.equal(filterResources("EVIDENCE", "", "").length > 0, true);
assert.equal(filterResources("impossible-resource-zz", "", "").length, 0);
assert.equal(
  filterResources("evidence", "Training", "Business case").length,
  0,
);
console.log(
  "Resource manifest/filter checks passed: 14 real destinations, all 11 existing records preserved, publication/source metadata, planned media withheld, composable search.",
);

if (process.env.RESOURCE_MANIFEST_PATH)
  fs.writeFileSync(
    process.env.RESOURCE_MANIFEST_PATH,
    JSON.stringify(resources, null, 2),
  );
