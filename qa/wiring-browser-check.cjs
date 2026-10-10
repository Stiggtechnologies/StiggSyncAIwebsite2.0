const puppeteer = require("../syncai-website/node_modules/puppeteer");
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
(async () => {
  const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
  const output =
    process.env.QA_OUTPUT_DIR ||
    path.resolve(__dirname, "../../qa-evidence/wiring-local");
  fs.mkdirSync(output, { recursive: true });
  const routes = [
    "/",
    "/company",
    "/contact",
    "/faq",
    "/industries",
    "/platform",
    "/reliability-assessment",
    "/ai-for-mining-reliability",
    "/strategic-pilot",
    "/microsoft",
    "/aws",
    "/salesforce",
    "/insights/alert-is-not-decision",
    "/insights/recommend-is-not-authorize",
    "/insights/fracas-is-not-a-decision-system",
    "/insights/evidence-lineage-is-not-optional",
    "/resources",
    "/resources/product-demo",
  ];
  const customer = "https://app.syncai.ca/signin?returnTo=%2F";
  const profile = "/tmp/syncai-wiring-qa-" + Date.now();
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    userDataDir: profile,
  });
  const report = {
    base,
    cases: [],
    pageErrors: [],
    consoleErrors: [],
    blockedPosts: [],
  };
  try {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    page.on("pageerror", (error) =>
      report.pageErrors.push({ message: error.message, stack: error.stack }),
    );
    page.on("console", (message) => {
      if (message.type() === "error")
        report.consoleErrors.push({
          message: message.text(),
          url: message.location().url,
        });
    });
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (request.method() === "POST") {
        report.blockedPosts.push(new URL(request.url()).hostname);
        request.abort();
      } else request.continue();
    });
    await page.evaluateOnNewDocument(() =>
      localStorage.setItem("syncai_analytics_consent_v1", "denied"),
    );
    for (const width of [1440, 390, 320]) {
      await page.setViewport({ width, height: 900 });
      for (const route of routes) {
        const response = await page.goto(base + route, {
          waitUntil: "networkidle0",
        });
        assert.equal(response.status(), 200, route);
        const rendered = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          h1: document.querySelectorAll("h1").length,
          customers: Array.from(document.querySelectorAll("a"))
            .filter((a) =>
              /^(Customer sign-in|Existing customers: sign in)/.test(
                a.textContent.trim(),
              ),
            )
            .map((a) => ({ label: a.textContent.trim(), href: a.href })),
          stale: Array.from(document.querySelectorAll("a")).filter((a) =>
            /Customer workspace|Existing customers: workspace|assessment setup/.test(
              a.textContent,
            ),
          ).length,
          setupLinks: Array.from(document.querySelectorAll("a")).filter(
            (a) => a.href === "https://app.syncai.ca/setup",
          ).length,
          buyerCTAs: Array.from(document.querySelectorAll("a"))
            .filter((a) =>
              /Discuss an evaluation|Discuss purchasing SyncAI|Book a demo or discuss purchase|Discuss platform access|Discuss an assessment/.test(
                a.textContent,
              ),
            )
            .map((a) => ({
              label: a.textContent.trim(),
              path: new URL(a.href).pathname,
            })),
          icons: Array.from(document.querySelectorAll('link[rel="icon"]')).map(
            (a) => ({ path: new URL(a.href).pathname, type: a.type }),
          ),
        }));
        assert.equal(rendered.overflow, false, `${route}@${width}`);
        assert.equal(rendered.h1, 1);
        assert(
          rendered.customers.length >= 1,
          `${route}: footer customer handoff`,
        );
        for (const link of rendered.customers)
          assert.equal(link.href, customer, `${route}: ${link.label}`);
        for (const link of rendered.buyerCTAs)
          assert.equal(link.path, "/contact", `${route}: ${link.label}`);
        assert.equal(rendered.stale, 0);
        assert.equal(rendered.setupLinks, 0);
        assert(
          rendered.icons.some(
            (icon) =>
              icon.path === "/brand/syncai-wordmark.png" &&
              icon.type === "image/png",
          ),
        );
        if (route === "/platform")
          assert.equal(
            await page.$eval('main a[href="/contact"].underline', (a) =>
              a.textContent.trim(),
            ),
            "Discuss an assessment",
          );
        if (route === "/resources/product-demo")
          assert.equal(
            await page.$eval(
              'main a[href="https://app.syncai.ca/workspace"]',
              (a) => a.textContent.trim(),
            ),
            "Open the public demo →",
          );
        report.cases.push({
          route,
          width,
          status: response.status(),
          ...rendered,
        });
        if (route === "/platform" && [1440, 390].includes(width))
          await page.screenshot({
            path: path.join(output, `wiring-platform-${width}.png`),
            fullPage: true,
          });
      }
    }
    const redirect = await fetch(base + "/favicon.ico", { redirect: "manual" });
    assert.equal(redirect.status, 308);
    assert.equal(
      new URL(redirect.headers.get("location"), base).pathname,
      "/brand/syncai-wordmark.png",
    );
    const favicon = await fetch(base + "/favicon.ico");
    assert.equal(favicon.status, 200);
    assert(favicon.headers.get("content-type").includes("image/png"));
    const imageBytes = Buffer.from(await favicon.arrayBuffer());
    const brandBytes = Buffer.from(
      await (await fetch(base + "/brand/syncai-wordmark.png")).arrayBuffer(),
    );
    assert(
      imageBytes.equals(brandBytes),
      "Favicon must reuse approved asset bytes exactly",
    );
    await page.goto(base + "/favicon.ico", { waitUntil: "networkidle0" });
    assert.equal(await page.$eval("img", (image) => image.naturalWidth), 303);
    assert.equal(await page.$eval("img", (image) => image.naturalHeight), 144);
    report.favicon = {
      aliasStatus: redirect.status,
      resolvedStatus: favicon.status,
      mime: favicon.headers.get("content-type"),
      dimensions: [303, 144],
      approvedBytesUnchanged: true,
      browserDecoded: true,
    };
    await page.goto(base + "/platform", { waitUntil: "networkidle0" });
    await page.click('main a[href="/contact"].underline');
    assert(
      (await page.$eval("h1", (n) => n.textContent)).includes(
        "Put SyncAI to work",
      ),
    );
    report.assessmentContactHandoff = true;
    await page.setJavaScriptEnabled(false);
    const nojs = await page.goto(base + "/platform", {
      waitUntil: "networkidle0",
    });
    assert.equal(nojs.status(), 200);
    assert.equal(
      await page.$eval(`a[href="${customer}"]`, (a) => a.textContent.trim()),
      "Existing customers: sign in →",
    );
    report.nojsSignInVisible = true;
    await page.setJavaScriptEnabled(true);
    const signInResponse = await page.goto(customer, {
      waitUntil: "networkidle0",
    });
    assert.equal(signInResponse.status(), 200);
    assert.equal(new URL(page.url()).pathname, "/signin");
    assert(
      (await page.$$eval('input[type="email"]', (n) => n.length)) >= 1,
      "App must render an authentication form",
    );
    report.appSignIn = {
      status: signInResponse.status(),
      pathname: new URL(page.url()).pathname,
      returnTo: new URL(page.url()).searchParams.get("returnTo"),
      emailFieldPresent: true,
      credentialsEntered: false,
    };
    assert.equal(
      report.pageErrors.length,
      0,
      JSON.stringify(report.pageErrors),
    );
    assert.equal(
      report.consoleErrors.length,
      0,
      JSON.stringify(report.consoleErrors),
    );
    fs.writeFileSync(
      path.join(output, "wiring-browser.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(
      JSON.stringify({
        renders: report.cases.length,
        favicon: report.favicon,
        assessmentContact: report.assessmentContactHandoff,
        appSignIn: report.appSignIn,
        pageErrors: report.pageErrors.length,
        consoleErrors: report.consoleErrors.length,
        blockedPosts: report.blockedPosts.length,
      }),
    );
  } finally {
    await browser.close();
    fs.rmSync(profile, { recursive: true, force: true });
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
