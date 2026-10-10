const puppeteer = require('../syncai-website/node_modules/puppeteer');
const fs = require('node:fs');
const assert = require('node:assert/strict');

(async () => {
  const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3100';
  const routes = ['/training/planners-supervisors', '/training/superintendents-managers', '/training/technicians-operators'];
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox', '--disable-extensions'], userDataDir: '/tmp/syncai-training-qa-' + Date.now() });
  try {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    const errors = [], posts = [], cases = [], nojsCases = [];
    page.on('pageerror', error => errors.push({ url: page.url(), message: error.message }));
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.method() === 'POST') { posts.push(request.url()); request.abort(); }
      else request.continue();
    });
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('syncai_analytics_consent_v1', 'denied');
      Object.defineProperty(navigator, 'clipboard', { value: { writeText: async text => {
        if (window.__testClipboardFailure) throw new Error('Mocked unavailable clipboard');
        window.__testCopiedDraft = text;
      } }, configurable: true });
    });
    for (const width of [1440, 768, 390, 375, 320]) {
      await page.setViewport({ width, height: 900 });
      for (const route of routes) {
        const response = await page.goto(base + route + '#request', { waitUntil: 'networkidle0' });
        assert.equal(response.status(), 200);
        const course = await page.$eval('h1', h => h.textContent.trim());
        const wrapper = '[data-training-inquiry="true"]';
        assert.equal(await page.$$eval('form, button[type="submit"]', nodes => nodes.length), 0);
        assert((await page.$eval('#training-email-help', e => e.textContent)).includes('send it there'));
        await page.type(wrapper + ' input[name="name"]', 'Controlled draft');
        await page.type(wrapper + ' input[name="email"]', 'test@example.test');
        await page.type(wrapper + ' input[name="company"]', 'Test & Company');
        await page.select(wrapper + ' select[name="format"]', 'Live virtual');
        await page.type(wrapper + ' input[name="groupSize"]', '15');
        await page.type(wrapper + ' input[name="timing"]', 'November');
        await page.type(wrapper + ' textarea[name="notes"]', 'Pumps & motors?\nSecond line #1');
        const stateBefore = await page.$$eval(wrapper + ' input, ' + wrapper + ' select, ' + wrapper + ' textarea', nodes => nodes.map(node => ({ name: node.name, value: node.value })));
        const href = await page.$eval('a[aria-describedby="training-email-help"]', a => a.href);
        assert(href.startsWith('mailto:oadavis@syncai.ca?'));
        const params = new URLSearchParams(href.split('?')[1]);
        assert.equal(params.get('subject'), 'SyncAI training inquiry — ' + course);
        for (const field of stateBefore) assert(params.get('body').includes(field.value), 'Email must preserve ' + field.name);
        assert(params.get('body').includes(course));
        const copy = await page.$(wrapper + ' button[type="button"]');
        await copy.click();
        await page.waitForFunction(() => document.querySelector('[data-training-inquiry] [role="status"]')?.textContent.includes('Draft copied'));
        assert.equal(await page.evaluate(() => window.__testCopiedDraft), 'To: oadavis@syncai.ca\nSubject: ' + params.get('subject') + '\n\n' + params.get('body'));
        assert.deepEqual(await page.$$eval(wrapper + ' input, ' + wrapper + ' select, ' + wrapper + ' textarea', nodes => nodes.map(node => ({ name: node.name, value: node.value }))), stateBefore, 'Copy success must not discard fields');
        await page.evaluate(() => { window.__testClipboardFailure = true; });
        await copy.click();
        await page.waitForFunction(() => document.querySelector('[data-training-inquiry] [role="status"]')?.textContent.includes('Copy is unavailable'));
        assert.deepEqual(await page.$$eval(wrapper + ' input, ' + wrapper + ' select, ' + wrapper + ' textarea', nodes => nodes.map(node => ({ name: node.name, value: node.value }))), stateBefore, 'Copy failure must not discard fields');
        await page.type(wrapper + ' textarea[name="notes"]', ' Updated');
        assert.equal(await page.$eval(wrapper + ' [role="status"]', s => s.textContent), '', 'Editing must clear obsolete copy status');
        assert((await page.$eval('a[aria-describedby="training-email-help"]', a => new URL(a.href).searchParams.get('body'))).includes(' Updated'));
        const layout = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth, falseSuccess: /Request received|Message sent|Your message was delivered/.test(document.querySelector('[data-training-inquiry]').innerText), personalPhone: document.body.innerText.replace(/\D/g, '').includes('7802152887') }));
        assert.equal(layout.overflow, false);
        assert.equal(layout.falseSuccess, false);
        assert.equal(layout.personalPhone, false);
        cases.push({ route, width, status: response.status(), course, fieldsPreserved: true, clipboardSuccess: true, clipboardFailure: true, ...layout });
        if (route === routes[0] && [1440, 375].includes(width)) {
          await page.$eval('#request', section => section.scrollIntoView());
          await page.screenshot({ path: '../qa-evidence/training-handoff-' + (width === 1440 ? 'desktop' : 'mobile') + '.png' });
        }
      }
    }
    const nojs = await browser.newPage();
    await nojs.setJavaScriptEnabled(false);
    for (const route of routes) {
      await nojs.goto(base + route);
      const course = await nojs.$eval('h1', h => h.textContent.trim());
      const link = await nojs.$eval('a[aria-describedby="training-email-help"]', a => ({ href: a.href, visible: a.getBoundingClientRect().height > 0 }));
      const params = new URLSearchParams(link.href.split('?')[1]);
      assert(link.visible && link.href.startsWith('mailto:oadavis@syncai.ca?'));
      assert(params.get('body').includes(course) && params.get('subject').includes(course));
      nojsCases.push({ route, coursePreserved: true, emailFallbackVisible: link.visible });
    }
    assert.equal(posts.length, 0);
    assert.equal(errors.length, 0);
    const report = { base, checkedAt: new Date().toISOString(), cases, nojsCases, errors, posts, mailtoClicked: false, clipboard: 'Mocked; system clipboard unchanged', deliveryVerified: false };
    fs.writeFileSync('../qa-evidence/training-browser-' + (base.startsWith('http://127.') ? 'local' : 'hosted') + '.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ base, cases: cases.length, nojsCases: nojsCases.length, errors, posts, fieldsPreserved: true, mailtoClicked: false }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
