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

  const contactModule = loadSource('lib/contact-email.ts', () => { throw new Error('Draft builder must have no external dependency'); });
  const { buildContactEmailDraft, CONTACT_EMAIL } = contactModule;
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
  const dependency = (name) => {
    if (name === '@/lib/contact-email') return contactModule;
    throw new Error(`Unexpected draft dependency: ${name}`);
  };
  const { buildTrainingEmailDraft } = loadSource('lib/training-email.ts', dependency);
  const { trainingOffers, TRAINING_CONTACT_EMAIL } = loadSource('lib/training-offers.ts', dependency);
  assert.equal(TRAINING_CONTACT_EMAIL, CONTACT_EMAIL, 'Training fallback and composed draft must use the same recipient');
  const training = { name: 'A & B', email: 'reply@example.test', company: 'Example & Company', format: 'Live virtual', groupSize: '15', timing: 'November', notes: 'Pumps & motors?\nSecond line #1' };
  const before = JSON.stringify(training);
  for (const offer of trainingOffers) {
    const result = buildTrainingEmailDraft(offer.title, training);
    const query = new URLSearchParams(result.href.split('?')[1]);
    assert(result.href.startsWith(`mailto:${CONTACT_EMAIL}?`));
    assert.equal(query.get('subject'), `SyncAI training inquiry — ${offer.title}`);
    for (const value of [offer.title, ...Object.values(training)]) assert(query.get('body').includes(value), 'Training draft must preserve the selected course and inquiry fields');
    assert(result.text.includes(`To: ${CONTACT_EMAIL}`));
    assert(result.text.includes(offer.title));
    assert.equal([...query.keys()].length, 2);
    const emptyTraining = buildTrainingEmailDraft(offer.title, { name: '', email: '', company: '', format: 'In-house at our site', groupSize: '', timing: '', notes: '' });
    assert(new URLSearchParams(emptyTraining.href.split('?')[1]).get('body').includes(offer.title), 'No-JavaScript/default draft must retain course context');
  }
  assert.equal(JSON.stringify(training), before, 'Preparing a draft must not mutate or discard the source fields');
  const unsafeTitle = new URLSearchParams(buildTrainingEmailDraft('Course\r\nBcc:other@example.test', training).href.split('?')[1]);
  assert(!unsafeTitle.get('subject').includes('\n'));
  const trainingPage = fs.readFileSync('components/training/TrainingInquiryForm.tsx', 'utf8');
  assert(!/fetch\(|<form\b|type="submit"|Request received|setForm\([^)]*initial/.test(trainingPage), 'Training inquiry must not submit or report a false receipt');
  assert(trainingPage.includes('Open email app') && trainingPage.includes('Copy email draft'));
  assert(trainingPage.includes('send it there') && trainingPage.includes('does not send or submit requests'));
  assert(trainingPage.includes('data-clarity-mask="true"'));
  function publicFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
      const path = `${dir}/${entry.name}`;
      if (path.startsWith('app/api/')) return [];
      return entry.isDirectory() ? publicFiles(path) : /\.(?:tsx?|jsx?)$/.test(path) ? [path] : [];
    });
  }
  const contactConsumers = ['app', 'components', 'lib'].flatMap(publicFiles).filter(path => fs.readFileSync(path, 'utf8').includes('/api/contact'));
  assert.equal(contactConsumers.length, 0, `Unconfigured public contact consumers: ${contactConsumers.join(', ')}`);
  console.log(`Contact/training regressions passed: absent provider, ${trainingOffers.length} course drafts, encoded preserved fields, recipient consistency, no public contact API consumers or false success. No network or email sent.`);
})().catch((error) => { console.error(error); process.exit(1); });
