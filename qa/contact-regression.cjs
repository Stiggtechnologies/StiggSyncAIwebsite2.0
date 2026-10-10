const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function loadSource(path, requireDependency, env = {}) {
  const module = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(source, {
    module, exports: module.exports, require: requireDependency,
    process: { env }, console: { error() {} },
  });
  return module.exports;
}

(async () => {
  let providerCalls = 0;
  const handler = loadSource('app/api/contact/route.ts', (name) => {
    if (name === 'next/server') return { NextResponse: { json: (body, options) => ({ body, status: options?.status || 200 }) } };
    if (name === 'resend') return { Resend: class { constructor() { providerCalls++; } } };
    throw new Error(`Unexpected dependency: ${name}`);
  });
  const unavailable = await handler.POST({ json: async () => ({
    name: 'Controlled local test', email: 'test@example.test', company: 'Test company', message: 'Local test only',
  }) });
  assert.equal(unavailable.status, 503);
  assert.equal(unavailable.body.success, false);
  assert.equal(providerCalls, 0, 'Missing configuration must not report acceptance or call a provider');

  const { buildContactEmailDraft, CONTACT_EMAIL } = loadSource('lib/contact-email.ts', () => { throw new Error('Draft builder must have no external dependency'); });
  const empty = buildContactEmailDraft({ name: '', email: '', company: '', message: '' });
  assert.equal(CONTACT_EMAIL, 'oadavis@syncai.ca');
  assert(empty.href.startsWith('mailto:oadavis@syncai.ca?'));
  assert(new URLSearchParams(empty.href.split('?')[1]).get('body').includes('discuss SyncAI'));
  const draft = { name: 'A & B', email: 'reply@example.test', company: 'Example\nCompany & partners', message: 'Question? Scope = motors & pumps\nSecond line #1' };
  const populated = buildContactEmailDraft(draft);
  const params = new URLSearchParams(populated.href.split('?')[1]);
  assert.equal(params.get('subject'), 'SyncAI inquiry — Example Company & partners');
  assert(params.get('body').includes(draft.message));
  assert(params.get('body').includes('Contact email: reply@example.test'));
  assert.equal([...params.keys()].length, 2, 'User data must not inject mail headers');
  assert(populated.text.includes('To: oadavis@syncai.ca'));

  for (const file of ['app/contact/page.tsx', 'components/Footer.tsx', 'lib/seo.ts']) {
    assert(!fs.readFileSync(file, 'utf8').replace(/\D/g, '').includes('7802152887'), `${file} must not expose the removed personal phone`);
  }
  const page = fs.readFileSync('app/contact/page.tsx', 'utf8');
  assert(!/fetch\(|<form\b|type="submit"|delivered|Message sent/.test(page), 'Public contact page must not submit to the unavailable provider or claim delivery');
  assert(page.includes('Open email app') && page.includes('Copy email draft'));
  assert(page.includes('send it there') && page.includes('does not send or submit messages'));
  assert(page.includes('data-clarity-mask="true"'));
  console.log('Contact regression passed: absent provider, email fallback, encoding/context, no false submission or delivery claim. No network or email sent.');
})().catch((error) => { console.error(error); process.exit(1); });
