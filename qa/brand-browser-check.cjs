const puppeteer = require("../syncai-website/node_modules/puppeteer"),
  fs = require("fs"),
  path = require("path"),
  assert = require("node:assert/strict"),
  crypto = require("crypto");
(async () => {
  const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100",
    out =
      process.env.QA_OUTPUT_DIR ||
      path.resolve(__dirname, "../../qa-evidence/brand-local"),
    profile = "/tmp/syncai-brand-qa-" + Date.now();
  fs.mkdirSync(out, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    userDataDir: profile,
  });
  const report = {
    base,
    cases: [],
    assets: [],
    errors: [],
    consoleErrors: [],
    posts: [],
  };
  try {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    page.on("pageerror", (e) => report.errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") report.consoleErrors.push(m.text());
    });
    await page.setRequestInterception(true);
    page.on("request", (r) => {
      if (r.method() === "POST") {
        report.posts.push(new URL(r.url()).hostname);
        r.abort();
      } else r.continue();
    });
    await page.evaluateOnNewDocument(() =>
      localStorage.setItem("syncai_analytics_consent_v1", "denied"),
    );
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewport({ width, height: 900 });
      for (const route of [
        "/",
        "/platform",
        "/contact",
        "/resources",
        "/resources/product-demo",
      ]) {
        const response = await page.goto(base + route, {
          waitUntil: "networkidle0",
        });
        assert.equal(response.status(), 200);
        await page.$eval("footer", (n) => n.scrollIntoView());
        await page.waitForFunction(() =>
          Array.from(
            document.querySelectorAll('a[aria-label="SyncAI home"] img'),
          ).every((i) => i.complete && i.naturalWidth > 0),
        );
        await page.evaluate(() => scrollTo(0, 0));
        const state = await page.evaluate(() => ({
          width: innerWidth,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          h1: document.querySelectorAll("h1").length,
          marks: Array.from(
            document.querySelectorAll('a[aria-label="SyncAI home"] img'),
          ).map((i) => ({
            src: new URL(i.src).pathname,
            alt: i.alt,
            decoded: i.complete && i.naturalWidth > 0,
            width: i.getBoundingClientRect().width,
            height: i.getBoundingClientRect().height,
          })),
          icons: Array.from(
            document.querySelectorAll(
              'link[rel="icon"],link[rel="apple-touch-icon"]',
            ),
          ).map((i) => ({ rel: i.rel, url: new URL(i.href).pathname })),
          social: Array.from(
            document.querySelectorAll(
              'meta[property="og:image"],meta[name="twitter:image"]',
            ),
          ).map((m) => m.content),
        }));
        assert(!state.overflow);
        assert.equal(state.h1, 1);
        assert.equal(state.marks.length, 2);
        for (const m of state.marks) {
          assert.equal(m.src, "/brand/syncai-wordmark-light.svg");
          assert.equal(m.alt, "SyncAI");
          assert(m.decoded);
          assert.equal(m.height, 32);
          assert(Math.abs(m.width / m.height - 843 / 224) < 0.03);
        }
        assert(state.icons.some((i) => i.url === "/brand/syncai-icon.svg"));
        assert(
          state.icons.some(
            (i) =>
              i.rel === "apple-touch-icon" &&
              i.url === "/brand/syncai-icon-180.png",
          ),
        );
        assert(state.social.some((u) => u.includes("/opengraph-image.png")));
        report.cases.push({ route, status: 200, ...state });
        if (route === "/" || route === "/resources")
          await page.screenshot({
            path: path.join(
              out,
              route === "/" ? `home-${width}.png` : `resources-${width}.png`,
            ),
            fullPage: true,
          });
      }
    }
    await page.goto(base + "/", { waitUntil: "networkidle0" });
    await page.click('button[aria-label="Open navigation"]');
    assert(await page.$("#mobile-navigation"));
    await page.keyboard.press("Escape");
    assert.equal(await page.$("#mobile-navigation"), null);
    report.mobileNavigation = true;
    const manifest = JSON.parse(
      fs.readFileSync(path.join(__dirname, "brand-manifest.json")),
    );
    for (const [file, expected] of Object.entries(manifest.assets)) {
      const response = await fetch(base + "/brand/" + file);
      assert.equal(response.status, 200, file);
      const bytes = Buffer.from(await response.arrayBuffer());
      assert.equal(
        crypto.createHash("sha256").update(bytes).digest("hex"),
        expected.sha256,
        file,
      );
      report.assets.push({
        file,
        status: response.status,
        mime: response.headers.get("content-type"),
        bytes: bytes.length,
        hashMatched: true,
      });
    }
    const ico = await fetch(base + "/favicon.ico", { redirect: "manual" });
    assert.equal(ico.status, 200);
    assert(
      Buffer.from(await ico.arrayBuffer()).equals(
        fs.readFileSync(path.join(__dirname, "../app/favicon.ico")),
      ),
    );
    report.faviconDirect200 = true;
    const oldsocial = await fetch(base + "/opengraph-image", {
      redirect: "manual",
    });
    assert.equal(oldsocial.status, 308);
    assert(
      new URL(oldsocial.headers.get("location"), base).pathname ===
        "/opengraph-image.png",
    );
    report.legacySocialRedirect = true;
    assert.equal(report.errors.length, 0);
    assert.equal(report.consoleErrors.length, 0);
    assert.equal(report.posts.length, 0);
    fs.writeFileSync(
      path.join(out, "brand-browser.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(
      JSON.stringify({
        renders: report.cases.length,
        assets: report.assets.length,
        errors: report.errors.length,
        consoleErrors: report.consoleErrors.length,
        posts: report.posts.length,
        menu: report.mobileNavigation,
        favicon: report.faviconDirect200,
        social: report.legacySocialRedirect,
      }),
    );
  } finally {
    await browser.close();
    fs.rmSync(profile, { recursive: true, force: true });
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
