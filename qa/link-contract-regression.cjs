const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");

const GET_STARTED_LABEL = /^(?:get started|start free)(?:\s*(?:→|->|›))?$/i;

function ctaHrefAllowed(href, appUrl) {
  const value = href.trim();
  return (
    value === appUrl ||
    value === "APP_GET_STARTED_URL" ||
    value === "{APP_GET_STARTED_URL}" ||
    value === "{links.APP_GET_STARTED_URL}"
  );
}

/** Get started / Start free controls must open the app route. Insights essays are out of scope. */
function assertGetStartedCtas(rootDir, appUrl) {
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const filename = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(filename);
        continue;
      }
      if (!/\.(tsx|jsx)$/.test(entry.name)) continue;
      const rel = path.relative(rootDir, filename);
      if (rel.startsWith(`app${path.sep}insights${path.sep}`)) continue;
      const source = fs.readFileSync(filename, "utf8");
      const tagRe = /<(a|Link|GlowButton)\b([^>]*)>([\s\S]*?)<\/\1>/g;
      for (const match of source.matchAll(tagRe)) {
        const label = match[3]
          .replace(/\{[^}]*\}/g, " ")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        if (!GET_STARTED_LABEL.test(label)) continue;
        const hrefMatch = match[2].match(/\bhref=\{([^}]+)\}|\bhref="([^"]+)"|\bhref='([^']+)'/);
        assert(hrefMatch, `${rel} has a ${label} control without an href`);
        const href = hrefMatch[1] || hrefMatch[2] || hrefMatch[3];
        assert(
          ctaHrefAllowed(href, appUrl),
          `${rel} ${label} must point at ${appUrl}`,
        );
      }
      const objectRe = /\{[^{}]*\}/g;
      for (const block of source.matchAll(objectRe)) {
        const cta = block[0].match(/\b(?:cta|label|children)\s*:\s*['"]([^'"]+)['"]/);
        if (!cta || !GET_STARTED_LABEL.test(cta[1].trim())) continue;
        const href = block[0].match(/\bhref\s*:\s*['"]([^'"]+)['"]|\bhref\s*:\s*(\{[^}]+\}|[A-Z0-9_]+)/);
        assert(href, `${rel} pairs "${cta[1]}" with no href`);
        assert(
          ctaHrefAllowed(href[1] || href[2], appUrl),
          `${rel} "${cta[1]}" must point at ${appUrl}`,
        );
      }
    }
  }
  walk(path.join(rootDir, "app"));
  walk(path.join(rootDir, "components"));
}

(async () => {
  const module = { exports: {} };
  const code = ts.transpileModule(
    fs.readFileSync(path.join(root, "lib/site-links.ts"), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  vm.runInNewContext(code, { module, exports: module.exports });
  const links = module.exports;
  const customer = new URL(links.APP_CUSTOMER_SIGN_IN_URL);
  assert.equal(customer.origin, "https://app.syncai.ca");
  assert.equal(customer.pathname, "/signin");
  assert.equal(customer.searchParams.get("returnTo"), "/");
  assert.equal(links.APP_PUBLIC_DEMO_URL, "https://app.syncai.ca/workspace");
  assert.equal(links.APP_GET_STARTED_URL, "https://app.syncai.ca/get-started");
  assert.equal(links.EVALUATION_CONTACT_URL, "/contact");
  assert.equal(links.ASSESSMENT_CONTACT_URL, "/contact");
  assert(!("APP_SETUP_URL" in links));
  assert(!("APP_WORKSPACE_URL" in links));
  let customerConsumers = 0,
    publicConsumers = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const filename = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(filename);
      else if (/\.tsx$/.test(entry.name)) {
        const source = fs.readFileSync(filename, "utf8");
        assert(
          !/APP_WORKSPACE_URL|APP_SETUP_URL|Customer workspace|Existing customers: workspace|https:\/\/app\.syncai\.ca\/(setup|workspace)/.test(
            source,
          ),
          path.relative(root, filename),
        );
        if (source.includes("APP_CUSTOMER_SIGN_IN_URL")) {
          customerConsumers++;
          assert(
            source.includes("Customer sign-in") ||
              source.includes("Existing customers: sign in"),
            filename,
          );
        }
        if (source.includes("APP_PUBLIC_DEMO_URL")) {
          publicConsumers.push(path.relative(root, filename));
          assert(source.includes("Open the public demo"), filename);
        }
      }
    }
  }
  walk(path.join(root, "app"));
  walk(path.join(root, "components"));
  assert.equal(customerConsumers, 15);
  assert.deepEqual(publicConsumers, ["app/resources/product-demo/page.tsx"]);
  for (const name of [
    "app/platform/page.tsx",
    "components/assessment/ResultsDisplay.tsx",
  ]) {
    const source = fs.readFileSync(path.join(root, name), "utf8");
    assert(source.includes("href={ASSESSMENT_CONTACT_URL}"));
    assert(source.includes("Discuss an assessment"));
  }
  const config = require("../next.config");
  const redirects = await config.redirects();
  assert(!redirects.some((item) => item.source === "/favicon.ico"));
  for (const source of ["/get-started", "/get-started/"]) {
    const match = redirects.find((item) => item.source === source);
    assert(match, `Missing permanent redirect for ${source}`);
    assert.equal(match.destination, links.APP_GET_STARTED_URL);
    assert.equal(match.statusCode, 301);
    assert.equal(match.permanent, undefined);
  }
  assertGetStartedCtas(root, links.APP_GET_STARTED_URL);
  const asset = fs.readFileSync(path.join(root, "app/favicon.ico"));
  assert.equal(asset.readUInt16LE(2), 1);
  assert.equal(asset.readUInt16LE(4), 3);
  const layout = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8");
  assert(layout.includes("/brand/syncai-icon.svg"));
  assert(layout.includes("/brand/syncai-icon-180.png"));
  console.log(
    `Link contracts passed: ${customerConsumers} customer consumers use sign-in, sole explicit public demo preserved, evaluation/assessment contact gates, permanent /get-started redirect, precision ICO/favicon metadata.`,
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
