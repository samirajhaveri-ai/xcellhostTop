(async () => {
  const fs = require('fs'), vm = require('vm'), ts = require('typescript'), assert = require('node:assert/strict');
  await import('@angular/compiler');
  const forms = await import('@angular/forms');
  const source = fs.readFileSync('src/app/pages/signup.page.ts', 'utf8');
  const template = fs.readFileSync('src/app/pages/signup.page.html', 'utf8');
  const provided = fs.readFileSync('C:/Users/DivyaVarma/Downloads/---- Note _--  .txt', 'utf8');
  const destroy = { onDestroy() {} }, Seo = class {}, platform = Symbol('platform');
  let nativeSubmits = 0;
  const core = {
    Component: () => () => {}, ViewChild: () => () => {}, ChangeDetectionStrategy: { OnPush: 0 },
    PLATFORM_ID: platform, DestroyRef: destroy,
    inject(token) {
      if (token === forms.FormBuilder) return new forms.FormBuilder();
      if (token === platform) return 'server';
      if (token === destroy) return destroy;
      if (token === Seo) return { set() {} };
      throw Error('Unexpected injection');
    },
    signal(value) { const fn = () => value; fn.set = v => value = v; fn.update = cb => value = cb(value); return fn; },
  };
  const deps = {
    '@angular/core': core, '@angular/common': { isPlatformBrowser: p => p === 'browser' },
    '@angular/forms': forms, '@angular/router': { RouterLink: class {} }, '../core/seo.service': { SeoService: Seo },
  };
  function load(code) {
    const module = { exports: {} };
    const js = ts.transpileModule(code, { compilerOptions: {
      target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, experimentalDecorators: true,
    } }).outputText;
    vm.runInNewContext(js, {
      module, exports: module.exports, require: name => deps[name], console,
      HTMLFormElement: class { submit() { nativeSubmits++; } },
    });
    return module.exports;
  }
  deps['../data/signup-zoho.data'] = load(fs.readFileSync('src/app/data/signup-zoho.data.ts', 'utf8'));
  deps['../overlays/form.util'] = load(fs.readFileSync('src/app/overlays/form.util.ts', 'utf8'));
  const { SignupPage } = load(source), page = new SignupPage();
  page.isBrowser = true;
  page.signupForm = { nativeElement: {} };
  const valid = {
    company: 'Example', firstName: 'A', lastName: 'Test', email: 'test@example.com',
    phone: '+91 9876543210', city: 'Mumbai', leadTypes: ['Customer C'], terms: true,
  };
  page.submit();
  assert.equal(nativeSubmits, 0);
  for (const [field, value] of [
    ['company', '   '], ['firstName', ''], ['lastName', ''], ['email', 'invalid'], ['phone', '123'],
    ['leadTypes', []], ['leadTypes', ['unknown']], ['terms', false], ['firstName', 'a'.repeat(41)],
    ['lastName', 'a'.repeat(81)], ['company', 'a'.repeat(201)], ['email', 'a'.repeat(101) + '@example.com'],
    ['phone', '1'.repeat(31)], ['city', 'x'.repeat(101)],
  ]) {
    page.form.reset(valid);
    page.form.patchValue({ [field]: value });
    page.submit();
    assert.equal(nativeSubmits, 0, field + ' must not submit');
    assert.equal(page.form.invalid, true, field + ' must be invalid');
  }
  page.form.reset({ ...valid, firstName: ' A ', leadTypes: ['Customer C', 'Vendor V'] });
  page.submit();
  assert.equal(nativeSubmits, 1);
  assert.equal(page.form.controls.firstName.value, 'A');
  assert.equal(page.busy(), true);
  page.submit();
  assert.equal(nativeSubmits, 1, 'Prevent duplicate submit');
  page.busy.set(false);
  page.resetForm();
  assert.equal(page.form.controls.company.value, '');
  assert.deepEqual(Array.from(page.form.controls.leadTypes.value), ['Customer C']);
  assert.equal(page.form.controls.terms.value, false);
  assert.equal(page.error(), '');
  assert.equal(page.form.contains('password'), false);
  assert.equal(template.includes('zohoFrame'), false);
  assert.equal(source.includes('finishSubmission'), false);
  const settings = deps['../data/signup-zoho.data'].SIGNUP_ZOHO;
  for (const name of ['xnQsjsdp', 'xmIwtLD', 'actionType', 'returnURL']) {
    const match = provided.match(new RegExp("name\\s*=\\s*'" + name + "'\\s+value\\s*=\\s*'([^']*)'"));
    assert.equal(settings[name], match[1], name + ' must match provided form');
  }
  assert.equal(settings.endpoint, provided.match(/action\s*=\s*'([^']*)'/)[1]);
  assert.equal(settings.analyticsUrl, provided.match(/id\s*=\s*'wf_anal'\s+src\s*=\s*'([^']*)'/)[1]);
  for (const name of ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'City', 'LEADCF21', 'zc_gad', 'aG9uZXlwb3Q']) {
    assert.ok(template.includes('name="' + name + '"'), name + ' is serialized');
  }
  assert.ok(template.includes('multiple size="4"'));
  assert.ok(template.includes('method="POST"'));
  console.log('PASS: required fields, whitespace, length limits, email/mobile, multiple lead types, native submission and duplicate protection.');
  console.log('PASS: endpoint, hidden values, analytics URL and CRM field names match supplied TXT. No requests or CRM leads were sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
