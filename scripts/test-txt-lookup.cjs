const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const cache = new Map();
const load = file => {
  const resolved = path.resolve(file); if (cache.has(resolved)) return cache.get(resolved);
  const exports = {}; cache.set(resolved, exports);
  const localRequire = name => name.startsWith('.') ? load(path.resolve(path.dirname(resolved), name + '.ts')) : require(name);
  new Function('exports', 'require', ts.transpileModule(fs.readFileSync(resolved, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exports, localRequire);
  return exports;
};
const { readTxtValue, txtPurpose, lookupTxt, txtAnalysis, txtReportCsv } = load('src/app/core/txt-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const response = (values, status = 0) => ({ ok: true, json: async () => ({ Status: status, AD: true, Answer: values.map(data => ({ name: 'example.com.', type: 16, TTL: 300, data })) }) });

test('TXT presentation joins only strings within one value and correctly decodes DNS escapes and Unicode', () => {
  assert.deepEqual(readTxtValue('"v=spf1 " "include:example.net -all"'), { value: 'v=spf1 include:example.net -all', chunks: ['v=spf1 ', 'include:example.net -all'], parsed: true });
  assert.equal(readTxtValue(String.raw`"a\"b" "c\\d"`).value, 'a"bc\\d');
  assert.equal(readTxtValue(String.raw`"a\032b"`).value, 'a b');
  assert.equal(readTxtValue(String.raw`"\195" "\169"`).value, '\u00e9');
  assert.equal(readTxtValue('"\u0928\u092e\u0938\u094d\u0924\u0947"').value, '\u0928\u092e\u0938\u094d\u0924\u0947');
  assert.equal(readTxtValue('"\ufeffv=spf1 -all"').value, '\ufeffv=spf1 -all');
  assert.equal(readTxtValue('""').value, '');
  assert.equal(readTxtValue('unquoted token').value, 'unquoted token');
  for (const value of ['"unterminated', '"a" unexpected', String.raw`"\999"`, String.raw`"\255"`]) {
    assert.equal(readTxtValue(value).parsed, false, value); assert.equal(readTxtValue(value).value, value);
  }
});

test('purpose labels identify known prefixes without treating arbitrary text as a validated email policy', () => {
  assert.equal(txtPurpose('v=spf1 -all', 'example.com').purpose, 'SPF');
  assert.equal(txtPurpose('v=spf10 -all', 'example.com').purpose, 'Other');
  assert.equal(txtPurpose('v=DMARC1; p=none', '_dmarc.example.com').purpose, 'DMARC');
  assert.equal(txtPurpose('v=DKIM1; p=abc', 's._domainkey.example.com').purpose, 'DKIM');
  assert.equal(txtPurpose('k=rsa; p=abc', 's._domainkey.example.com').purpose, 'DKIM');
  assert.equal(txtPurpose('k=rsa; p=abc', 'example.com').purpose, 'Other');
  for (const value of ['google-site-verification=abc', 'MS=ms123456', 'apple-domain-verification=abc']) assert.equal(txtPurpose(value, 'example.com').purpose, 'Verification');
  assert.equal(txtPurpose('<script>alert(1)</script>', 'example.com').purpose, 'Other');
});

test('TXT lookup queries only the exact supplied hostname and keeps raw, decoded and alias answers', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async url => {
    calls.push(new URL(url));
    return { ok: true, json: async () => ({ Status: 0, AD: true, Answer: [
      { name: 'selector._domainkey.example.com.', type: 5, TTL: 60, data: 'key.example.net.' },
      { name: 'key.example.net.', type: 16, TTL: 300, data: '"v=DKIM1; " "p=abcdef"' },
    ] }) };
  });
  const report = await lookupTxt('https://selector._domainkey.EXAMPLE.com/path', 'cloudflare');
  assert.equal(calls.length, 1); assert.equal(calls[0].hostname, 'cloudflare-dns.com');
  assert.equal(calls[0].searchParams.get('name'), 'selector._domainkey.example.com'); assert.equal(calls[0].searchParams.get('type'), 'TXT');
  assert.equal(report.hosts[0].records[0].type, 'CNAME'); assert.equal(report.entries.length, 1);
  assert.equal(report.entries[0].value, 'v=DKIM1; p=abcdef'); assert.equal(report.entries[0].rawValue, '"v=DKIM1; " "p=abcdef"');
  assert.equal(report.entries[0].purpose, 'DKIM'); assert.equal(report.entries[0].name, 'key.example.net');
});

test('diagnostics distinguish duplicate SPF, empty answers, missing names and resolver failures', async t => {
  t.mock.method(globalThis, 'fetch', async () => response(['"v=spf1 -all"', '"v=spf1 include:example.net ~all"', '"google-site-verification=abc"']));
  const duplicate = await lookupTxt('example.com', 'google');
  const analysis = txtAnalysis(duplicate);
  assert.equal(analysis.counts.SPF, 2); assert.equal(analysis.counts.Verification, 1);
  assert.equal(analysis.duplicateSpf, 1); assert.equal(analysis.diagnostics.find(c => c.label === 'SPF record count').state, 'REVIEW');
  globalThis.fetch = async () => response([]);
  const empty = await lookupTxt('example.com', 'google');
  assert.equal(empty.entries.length, 0); assert.equal(txtAnalysis(empty).diagnostics[0].state, 'INFO');
  assert.match(txtAnalysis(empty).diagnostics.find(c => c.label === 'Lookup scope').detail, /not scanned automatically/);
  globalThis.fetch = async () => response([], 3);
  const missing = await lookupTxt('example.com', 'google');
  assert.equal(missing.hosts[0].status, 'NXDOMAIN'); assert.equal(txtAnalysis(missing).diagnostics[0].state, 'REVIEW');
  globalThis.fetch = async () => response([], 2);
  const failed = await lookupTxt('example.com', 'google');
  assert.equal(failed.hosts[0].status, 'ERROR'); assert.match(failed.hosts[0].error, /SERVFAIL/);
  assert.equal(txtAnalysis(failed).diagnostics[0].state, 'FAIL');
});

test('TXT lookup cancellation rejects instead of exposing a stale report', async t => {
  const controller = new AbortController();
  t.mock.method(globalThis, 'fetch', async (_url, { signal }) => { controller.abort(); signal.throwIfAborted(); });
  await assert.rejects(lookupTxt('example.com', 'google', controller.signal), { name: 'AbortError' });
});

test('TXT exports retain decoded text, original quoting, purpose, metadata and a dedicated PDF link', async t => {
  t.mock.method(globalThis, 'fetch', async () => response(['"google-site-verification=" "abc"', '"=SUM(1,2)"']));
  const report = await lookupTxt('example.com', 'google');
  const csv = txtReportCsv(report);
  assert(csv.startsWith('\ufeff"Queried hostname"')); assert(csv.includes('"Verification","google-site-verification=abc"'));
  assert(csv.includes('""google-site-verification="" ""abc""')); assert(csv.includes('"\'=SUM(1,2)"')); assert(csv.includes('"300"'));
  const findings = txtAnalysis(report), pdf = Buffer.from(dnsReportPdf(report, { analysis: { ...dnsReportAnalysis(report), checks: findings.diagnostics, tips: findings.recommendations }, toolPath: 'txt-lookup' })).toString('latin1');
  assert(pdf.startsWith('%PDF-')); assert(pdf.trimEnd().endsWith('%%EOF'));
  assert(pdf.includes('https://xcellhost.cloud/tools/txt-lookup?domain=example.com'));
  const json = JSON.parse(JSON.stringify(report)); assert.equal(json.entries[0].rawValue, '"google-site-verification=" "abc"');
});
