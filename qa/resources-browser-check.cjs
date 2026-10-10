const puppeteer = require("../syncai-website/node_modules/puppeteer");
const fs = require("node:fs");
const assert = require("node:assert/strict");
const path = require("node:path");
(async () => {
  const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
  const output =
    process.env.QA_OUTPUT_DIR || path.resolve(__dirname, "../../qa-evidence");
  const profile = "/tmp/syncai-resources-qa-" + Date.now();
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-extensions"],
    userDataDir: profile,
  });
  const report = {
    base,
    cases: [],
    links: [],
    errors: [],
    posts: [],
    filterChecks: [],
    touchTargets: [],
    nojs: [],
  };
  try {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    page.on("pageerror", (e) => report.errors.push(e.message));
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (request.method() === "POST") {
        report.posts.push(request.url());
        request.abort();
      } else request.continue();
    });
    await page.evaluateOnNewDocument(() =>
      localStorage.setItem("syncai_analytics_consent_v1", "denied"),
    );
    let destinations;
    for (const width of [1440, 1024, 768, 390, 375, 320]) {
      await page.setViewport({ width, height: 900 });
      for (const route of ["/resources", "/resources/product-demo"]) {
        const response = await page.goto(base + route, {
          waitUntil: "networkidle0",
        });
        assert.equal(response.status(), 200);
        assert.equal(await page.$$eval("h1", (nodes) => nodes.length), 1);
        const layout = await page.evaluate(() => ({
          width: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          nestedControls: document.querySelectorAll("a a, a button, button a")
            .length,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          main: document.querySelector("#main-content")?.tagName,
        }));
        assert(
          layout.documentWidth <= layout.width + 1,
          `${route}@${width}: overflow`,
        );
        assert.equal(layout.nestedControls, 0);
        assert.equal(layout.main, "MAIN");
        assert.equal(layout.canonical, "https://syncai.ca" + route);
        const targets = await page.$$eval('main [class*="min-h-["]', (nodes) =>
          nodes.map((n) => ({
            label: n.getAttribute("name") || n.textContent.trim(),
            height: n.getBoundingClientRect().height,
            minHeight: getComputedStyle(n).minHeight,
            required: n.className.includes("min-h-[48px]") ? 48 : 44,
          })),
        );
        for (const target of targets)
          assert(
            target.height >= target.required - 0.5,
            `${route}@${width}: ${target.label} height ${target.height}`,
          );
        report.touchTargets.push({ route, width, targets });
        report.cases.push({
          route,
          width,
          status: response.status(),
          ...layout,
        });
        if (route === "/resources") {
          assert.equal(
            await page.$$eval("[data-resource-id]", (nodes) => nodes.length),
            14,
          );
          destinations = await page.$$eval("[data-resource-id] h3 a", (nodes) =>
            nodes.map((node) => new URL(node.href).pathname),
          );
          if (width === 1440 || width === 390)
            await page.screenshot({
              path: path.join(
                output,
                `resources-${width === 1440 ? "desktop" : "mobile"}.png`,
              ),
              fullPage: true,
            });
        }
      }
    }
    for (const route of [...new Set(destinations)]) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle0",
      });
      assert.equal(response.status(), 200, route);
      report.links.push({ route, status: response.status() });
    }
    await page.goto(base + "/resources", { waitUntil: "networkidle0" });
    await page.select('select[name="format"]', "Training");
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 3,
    );
    assert((await page.url()).includes("format=Training"));
    report.filterChecks.push("training:3");
    await page.click('[data-resource-reset="clear"]');
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 14,
    );
    assert.equal(await page.$eval('select[name="format"]', (n) => n.value), "");
    report.filterChecks.push("clear-restores-all:14");
    await page.goBack({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 3,
    );
    assert.equal(
      await page.$eval('select[name="format"]', (n) => n.value),
      "Training",
    );
    await page.goForward({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 14,
    );
    report.filterChecks.push("clear-back-forward-restores-state");
    await page.select('select[name="format"]', "Training");
    await page.select('select[name="topic"]', "Business case");
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 0,
    );
    assert(
      (await page.$eval('[role="status"]', (n) => n.textContent)).includes(
        "0 resources",
      ),
    );
    report.filterChecks.push("combined-empty:0");
    await page.goto(
      base + "/resources?format=Article&topic=Business%20case#library",
      { waitUntil: "networkidle0" },
    );
    assert.equal(
      await page.$$eval("[data-resource-id]", (nodes) => nodes.length),
      1,
    );
    report.filterChecks.push("shareable-article-business-case:1");
    await page.goto(base + "/resources?q=EVIDENCE#library", {
      waitUntil: "networkidle0",
    });
    assert(
      (await page.$$eval("[data-resource-id]", (nodes) => nodes.length)) > 0,
    );
    await page.click('input[name="q"]');
    await page.keyboard.press("Home");
    await page.keyboard.down("Shift");
    await page.keyboard.press("End");
    await page.keyboard.up("Shift");
    await page.type('input[name="q"]', "impossible-resource-zz");
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 0,
    );
    report.filterChecks.push("search-empty-state");
    await page.click('[data-resource-reset="empty"]');
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 14,
    );
    assert.equal(await page.$eval('input[name="q"]', (n) => n.value), "");
    report.filterChecks.push("browse-all-restores-all:14");
    await page.goBack({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 0,
    );
    assert.equal(
      await page.$eval('input[name="q"]', (n) => n.value),
      "impossible-resource-zz",
    );
    await page.goForward({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => document.querySelectorAll("[data-resource-id]").length === 14,
    );
    report.filterChecks.push("empty-back-forward-restores-state");
    await page.focus('input[name="q"]');
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() => document.activeElement?.getAttribute("name")),
      "format",
    );
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() => document.activeElement?.getAttribute("name")),
      "topic",
    );
    await page.keyboard.press("Tab");
    assert.equal(
      await page.evaluate(() => document.activeElement?.textContent),
      "Search",
    );
    report.filterChecks.push("keyboard-search-format-topic-submit");

    await page.goto(base + "/resources", { waitUntil: "networkidle0" });
    await page.setViewport({ width: 390, height: 844 });
    await page.click('button[aria-label="Open navigation"]');
    assert.equal(
      await page.$eval(
        '#mobile-navigation a[href="/resources"]',
        (a) => a.textContent,
      ),
      "Resources",
    );
    await page.keyboard.press("Escape");
    assert.equal(await page.$("#mobile-navigation"), null);
    await page.goto(base + "/resources/product-demo", {
      waitUntil: "networkidle0",
    });
    assert.equal(
      await page.$eval('main a[href="https://app.syncai.ca/workspace"]', (a) =>
        a.textContent.trim(),
      ),
      "Open the public demo →",
    );
    await page.setJavaScriptEnabled(false);
    for (const route of [
      "/resources",
      "/resources?format=Training#library",
      "/resources/product-demo",
    ]) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle0",
      });
      assert.equal(response.status(), 200);
      const visible = await page.$eval(
        "h1",
        (n) => n.getBoundingClientRect().height > 0,
      );
      assert(visible);
      if (route.includes("format=Training"))
        assert.equal(
          await page.$$eval("[data-resource-id]", (nodes) => nodes.length),
          3,
        );
      if (route === "/resources")
        assert.equal(
          await page.$$eval("[data-resource-id]", (nodes) => nodes.length),
          14,
        );
      report.nojs.push({
        route,
        status: response.status(),
        headingVisible: visible,
      });
    }
    assert.equal(report.errors.length, 0, JSON.stringify(report.errors));
    assert.equal(report.posts.length, 0);
    const sitemap = await (await fetch(base + "/sitemap.xml")).text();
    assert(sitemap.includes("https://syncai.ca/resources</loc>"));
    assert(sitemap.includes("https://syncai.ca/resources/product-demo</loc>"));
    fs.writeFileSync(
      path.join(output, "resources-browser.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(
      JSON.stringify({
        renders: report.cases.length,
        resourceLinks: report.links.length,
        filters: report.filterChecks,
        nojs: report.nojs.length,
        runtimeErrors: report.errors.length,
        posts: report.posts.length,
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
