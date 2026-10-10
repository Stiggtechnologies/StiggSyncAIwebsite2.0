const puppeteer = require('../syncai-website/node_modules/puppeteer');
const fs = require('node:fs');
const assert = require('node:assert/strict');

(async () => {
  const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3100';
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox', '--disable-extensions'], userDataDir: '/tmp/syncai-contact-qa-' + Date.now() });
  try {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    const errors = [], posts = [], cases = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.method() === 'POST') { posts.push(request.url()); request.abort(); }
      else request.continue();
    });
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('syncai_analytics_consent_v1', 'denied');
      Object.defineProperty(navigator, 'clipboard', { value: { writeText: async (text) => { window.__testCopiedDraft = text; } }, configurable: true });
    });
    for (const width of [1440, 768, 390, 375, 320]) {
      await page.setViewport({ width, height: 900 });
      for (const route of ['/', '/platform', '/industries', '/contact']) {
        const response = await page.goto(base + route, { waitUntil: 'networkidle0' });
        assert.equal(response.status(), 200);
        const detail = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth,
          contactLinks: [...document.querySelectorAll('a[href="/contact"]')].map(a => a.textContent.trim()),
          unsafeLinks: [...document.querySelectorAll('a[href]')].filter(a => a.href.includes('app.syncai.ca/get-started')).length,
        }));
        assert.equal(detail.overflow, false, route + ' overflow at ' + width);
        assert.equal(detail.unsafeLinks, 0);
        if (route === '/' || route === '/platform') assert(detail.contactLinks.some(text => /evaluation|purchas|demo/i.test(text)), 'Buying CTA must reach usable contact page');
        cases.push({ route, width, status: response.status(), ...detail });
      }
      assert.equal(await page.$$eval('form, button[type="submit"]', nodes => nodes.length), 0);
      assert((await page.$eval('#email-handoff-help', e => e.textContent)).includes('send it there'));
      const handoff = await page.$eval('a[aria-describedby="email-handoff-help"]', a => a.href);
      assert(handoff.startsWith('mailto:oadavis@syncai.ca?'));
      await page.type('input[name="name"]', 'Controlled local draft');
      await page.type('input[name="company"]', 'Test & Company');
      await page.type('textarea[name="message"]', 'Test question? Pumps & motors #1');
      const changed = await page.$eval('a[aria-describedby="email-handoff-help"]', a => a.href);
      const params = new URLSearchParams(changed.split('?')[1]);
      assert(params.get('body').includes('Test question? Pumps & motors #1'));
      assert.equal(params.get('subject'), 'SyncAI inquiry — Test & Company');
      const copy = await page.$$('button');
      for (const button of copy) if ((await button.evaluate(e => e.textContent)).trim() === 'Copy email draft') await button.click();
      await page.waitForFunction(() => document.querySelector('[role="status"]')?.textContent.includes('Draft copied'));
      assert((await page.evaluate(() => window.__testCopiedDraft)).includes('To: oadavis@syncai.ca'));
      await page.evaluate(() => window.scrollTo(0, 0));
      if ([1440, 375].includes(width)) await page.screenshot({ path: '../qa-evidence/contact-handoff-' + (width === 1440 ? 'desktop' : 'mobile') + '.png', fullPage: true });
    }
    const nojs = await browser.newPage();
    await nojs.setJavaScriptEnabled(false);
    await nojs.goto(base + '/contact');
    const nojsLink = await nojs.$eval('a[aria-describedby="email-handoff-help"]', a => ({ href: a.href, visible: a.getBoundingClientRect().height > 0, text: a.textContent }));
    assert(nojsLink.visible && nojsLink.href.startsWith('mailto:oadavis@syncai.ca?'));
    assert.equal(posts.length, 0, 'Draft preparation must not make network submissions');
    assert.equal(errors.length, 0);
    const report = { base, checkedAt: new Date().toISOString(), cases, errors, posts, mailtoClicked: false, nojsLink, clipboard: 'Mocked in isolated test page; no system clipboard writes', deliveryVerified: false };
    fs.writeFileSync('../qa-evidence/contact-browser-' + (base.startsWith('http://127.') ? 'local' : 'hosted') + '.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ base, cases: cases.length, errors, posts, nojsFallback: nojsLink.visible, mailtoClicked: false }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
