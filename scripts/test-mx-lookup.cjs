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
const { lookupMx, parseMxRecord, mxAnalysis, mxAddresses, mxReportCsv, mxExportReport, MX_ADDRESS_LIMIT } = load('src/app/core/mx-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const record = value => ({ name: 'example.com', type: 'MX', ttl: 300, value });
const response = (answers = [], status = 0) => ({ ok: true, json: async () => ({ Status: status, AD: true, Answer: answers }) });
const mockMx = (url, records = ['20 backup.example.net.', '10 mail.example.net.', '10 second.example.net.']) => {
  const u = new URL(url), name = u.searchParams.get('name'), type = u.searchParams.get('type');
  if (type === 'MX') return response(records.map(data => ({ name: name + '.', type: 15, TTL: 300, data })));
  return response([{ name: name + '.', type: type === 'A' ? 1 : 28, TTL: 180, data: type === 'A' ? '192.0.2.42' : '2001:db8::42' }]);
};

test('parses MX preferences, names and Null MX without accepting malformed or unsafe destinations', () => {
  assert.deepEqual(parseMxRecord(record('0 .')), { name: 'example.com', value: '0 .', ttl: 300, preference: 0, exchange: '.', valid: true, nullMx: true });
  assert.equal(parseMxRecord(record('10 MAIL.Example.NET.')).exchange, 'mail.example.net');
  assert.equal(parseMxRecord(record('65535 mail.example.net.')).valid, true);
  for (const value of ['65536 mail.example.net.', '-1 mail.example.net.', '1.5 mail.example.net.', '10 .', '10 192.0.2.1', '10 https://mail.example.net', '10 user@mail.example.net', '10 mail.example.net extra', '<script>alert(1)</script>']) assert.equal(parseMxRecord(record(value)).valid, false, value);
});

test('MX lookup sorts equal preferences, resolves both address families once per target and preserves query scope', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async url => { calls.push(new URL(url)); return mockMx(url, ['20 mail.example.net.', '10 second.example.net.', '10 mail.example.net.']); });
  const report = await lookupMx('https://EXAMPLE.COM/path', 'cloudflare');
  assert.equal(report.domain, 'example.com'); assert.equal(report.resolver, 'Cloudflare'); assert.equal(report.queryCount, 5);
  assert(calls.every(url => url.hostname === 'cloudflare-dns.com'));
  assert.deepEqual(report.exchangers.map(entry => entry.preference), [10, 10, 20]);
  assert.equal(calls.filter(url => url.searchParams.get('name') === 'mail.example.net' && url.searchParams.get('type') === 'A').length, 1);
  assert(!calls.some(url => url.searchParams.get('name').startsWith('www.')));
  const analysis = mxAnalysis(report);
  assert.equal(analysis.primaryPreference, 10); assert.equal(analysis.serverCount, 2); assert.equal(analysis.resolved, 2);
  assert.deepEqual(mxAddresses(report.addressChecks[0], 'A'), ['192.0.2.42']);
  assert.deepEqual(mxAddresses(report.addressChecks[0], 'AAAA'), ['2001:db8::42']);
  assert.deepEqual(mxExportReport(report).hosts[0].records.map(record => parseMxRecord(record).preference), [10, 10, 20]);
});

test('Null MX is distinct from an empty answer and never triggers address queries for the root dot', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async url => { calls.push(new URL(url)); return mockMx(url, ['0 .']); });
  const report = await lookupMx('example.com', 'google');
  assert.equal(calls.length, 1); assert.equal(report.addressChecks.length, 0);
  assert.equal(mxAnalysis(report).nullMx, true); assert.equal(mxAnalysis(report).primaryPreference, null);
  assert.match(mxAnalysis(report).diagnostics[0].detail, /explicitly accepts no mail/);
  globalThis.fetch = async url => mockMx(url, []);
  const empty = await lookupMx('example.com', 'google');
  assert.equal(mxAnalysis(empty).nullMx, false); assert.match(mxAnalysis(empty).diagnostics[0].detail, /implicit A\/AAAA fallback/);
  globalThis.fetch = async url => mockMx(url, ['0 .', '10 mail.example.net.']);
  const conflict = mxAnalysis(await lookupMx('example.com', 'google'));
  assert.equal(conflict.nullConflict, true); assert.equal(conflict.diagnostics.find(c => c.label === 'Record format').state, 'FAIL');
});

test('preserves useful addresses when the other family fails and distinguishes missing domains from resolver errors', async t => {
  t.mock.method(globalThis, 'fetch', async url => new URL(url).searchParams.get('type') === 'AAAA' ? response([], 2) : mockMx(url, ['10 mail.example.net.']));
  const report = await lookupMx('example.com', 'google');
  assert.equal(report.hosts[0].status, 'NOERROR');
  assert.equal(report.addressChecks[0].ipv6.status, 'ERROR'); assert.equal(mxAddresses(report.addressChecks[0], 'A').length, 1);
  assert.equal(mxAnalysis(report).diagnostics.find(c => c.label === 'Server addresses').state, 'REVIEW');
  assert(mxReportCsv(report).includes('SERVFAIL'));
  globalThis.fetch = async () => response([], 3);
  const missing = await lookupMx('example.com', 'google');
  assert.equal(missing.hosts[0].status, 'NXDOMAIN'); assert.equal(mxAnalysis(missing).diagnostics[0].state, 'REVIEW');
  globalThis.fetch = async () => response([], 2);
  const failed = await lookupMx('example.com', 'google');
  assert.equal(failed.hosts[0].status, 'ERROR'); assert.equal(mxAnalysis(failed).diagnostics[0].state, 'FAIL');
});

test('address checks can be disabled, are bounded and cancel without publishing a stale result', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async url => { calls.push(url); return mockMx(url, Array.from({ length: MX_ADDRESS_LIMIT + 1 }, (_, index) => `${index} mx${index}.example.net.`)); });
  const disabled = await lookupMx('example.com', 'google', false);
  assert.equal(calls.length, 1); assert(disabled.addressChecks.every(check => check.skippedReason));
  const bounded = await lookupMx('example.com', 'google');
  assert.equal(bounded.queryCount, 1 + MX_ADDRESS_LIMIT * 2);
  assert.equal(bounded.addressChecks.filter(check => check.skippedReason).length, 1);
  const controller = new AbortController();
  globalThis.fetch = async (_url, { signal }) => { controller.abort(); signal.throwIfAborted(); };
  await assert.rejects(lookupMx('example.com', 'google', true, controller.signal), { name: 'AbortError' });
});

test('MX exports preserve priorities, addresses, errors and a PDF linked to the dedicated tool', async t => {
  t.mock.method(globalThis, 'fetch', async url => mockMx(url, ['10 mail.example.net.']));
  const report = await lookupMx('example.com', 'google');
  const csv = mxReportCsv(report);
  assert(csv.startsWith('\ufeff"Domain"')); assert(csv.includes('"10","mail.example.net","Preferred"'));
  assert(csv.includes('192.0.2.42')); assert(csv.includes('2001:db8::42')); assert(csv.includes('"300"'));
  const snapshot = mxExportReport(report), findings = mxAnalysis(report);
  const pdf = Buffer.from(dnsReportPdf(snapshot, { analysis: { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }, toolPath: 'mx-lookup' })).toString('latin1');
  assert(pdf.startsWith('%PDF-')); assert(pdf.trimEnd().endsWith('%%EOF'));
  assert(pdf.includes('https://xcellhost.cloud/tools/mx-lookup?domain=example.com'));
  report.exchangers[0].exchange = '=1+1';
  assert(mxReportCsv(report).includes('"\'=1+1"'));
});
