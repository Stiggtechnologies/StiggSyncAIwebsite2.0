const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
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
  assert(
    !(await config.redirects()).some((item) => item.source === "/favicon.ico"),
  );
  const asset = fs.readFileSync(path.join(root, "app/favicon.ico"));
  assert.equal(asset.readUInt16LE(2), 1);
  assert.equal(asset.readUInt16LE(4), 3);
  const layout = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8");
  assert(layout.includes("/brand/syncai-icon.svg"));
  assert(layout.includes("/brand/syncai-icon-180.png"));
  console.log(
    `Link contracts passed: ${customerConsumers} customer consumers use sign-in, sole explicit public demo preserved, evaluation/assessment contact gates, precision ICO/favicon metadata.`,
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
