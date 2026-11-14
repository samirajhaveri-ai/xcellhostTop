const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const cache = new Map();
const load = file => {
  const resolved = path.resolve(file);
  if (cache.has(resolved)) return cache.get(resolved);
  const exports = {}; cache.set(resolved, exports);
  const localRequire = name => name.startsWith('.') ? load(path.resolve(path.dirname(resolved), name + '.ts')) : require(name);
  new Function('exports', 'require', ts.transpileModule(fs.readFileSync(resolved, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exports, localRequire);
  return exports;
};
const { lookupAllDns, allDnsReportCsv, allDnsExportReport } = load('src/app/core/all-dns-records.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const typeNumbers = { A: 1, AAAA: 28, MX: 15, TXT: 16, CNAME: 5, NS: 2, SOA: 6, CAA: 257 };
const values = { A: '192.0.2.42', AAAA: '2001:db8::1', MX: '10 mail.example.com.', TXT: '"v=spf1 include:_spf.example.com -all"', CNAME: 'origin.example.net.', NS: 'ns1.example.net.', SOA: 'ns1.example.net. admin.example.com. 1 7200 900 1209600 300', CAA: '0 issue "example-ca.com"' };
const answer = url => {
  const u = new URL(url), name = u.searchParams.get('name'), type = u.searchParams.get('type');
  return { ok: true, json: async () => ({ Status: 0, AD: true, Answer: [
    { name: name + '.', type: typeNumbers[type], TTL: 300, data: name.startsWith('_dmarc.') ? '"v=DMARC1; p=none; rua=mailto:dmarc@example.com"' : values[type] },
    ...(type === 'TXT' && !name.startsWith('_dmarc.') ? [{ name: name + '.', type: 16, TTL: 120, data: '"verification=example"' }] : []),
  ] }) };
};

test('all-record lookup queries explicit types, reuses TXT for SPF and queries the DMARC name', async t => {
  const requests = [], progress = [];
  t.mock.method(globalThis, 'fetch', async url => { requests.push(new URL(url)); return answer(url); });
  const report = await lookupAllDns('https://EXAMPLE.com/path', 'google', undefined, value => progress.push(value));
  assert.equal(report.domain, 'example.com'); assert.equal(report.queryCount, 9); assert.equal(requests.length, 9);
  assert.deepEqual(requests.filter(url => url.searchParams.get('name') === 'example.com').map(url => url.searchParams.get('type')), ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS', 'SOA', 'CAA']);
  assert.equal(requests.filter(url => url.searchParams.get('name') === '_dmarc.example.com').length, 1);
  assert(requests.every(url => url.hostname === 'dns.google' && url.searchParams.get('type') !== 'ANY'));
  assert.deepEqual(progress, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.equal(report.sections.length, 10);
  assert.equal(report.sections.find(s => s.key === 'TXT').records.length, 2);
  assert.equal(report.sections.find(s => s.key === 'SPF').records.length, 1);
  assert.equal(report.sections.find(s => s.key === 'SPF').queryType, 'TXT');
  assert.equal(report.sections.find(s => s.key === 'DMARC').name, '_dmarc.example.com');
  assert.equal(report.sections.find(s => s.key === 'MX').records[0].value, '10 mail.example.com.');
});

test('all-record lookup distinguishes empty types, missing policy names and individual query failures', async t => {
  t.mock.method(globalThis, 'fetch', async url => {
    const u = new URL(url);
    if (u.searchParams.get('type') === 'MX') throw new TypeError('Connection failed');
    if (u.searchParams.get('type') === 'AAAA') return { ok: true, json: async () => ({ Status: 0, Answer: [] }) };
    if (u.searchParams.get('name').startsWith('_dmarc.')) return { ok: true, json: async () => ({ Status: 3 }) };
    return answer(url);
  });
  const report = await lookupAllDns('example.com', 'cloudflare');
  const group = key => report.sections.find(s => s.key === key);
  assert.equal(report.resolver, 'Cloudflare');
  assert.equal(group('A').records.length, 1);
  assert.equal(group('AAAA').status, 'NOERROR'); assert.equal(group('AAAA').records.length, 0);
  assert.equal(group('MX').status, 'ERROR'); assert.match(group('MX').error, /connection/);
  assert.equal(group('DMARC').status, 'NXDOMAIN');
  const snapshot = allDnsExportReport(report);
  assert.equal(snapshot.hosts[0].status, 'ERROR'); assert.match(snapshot.hosts[0].error, /MX:/);
  assert(snapshot.hosts[0].records.some(record => record.type === 'A'));
  assert(allDnsReportCsv(report).includes('"MX","example.com","MX","ERROR"'));
});

test('SPF and DMARC views select policy versions without treating unrelated TXT as a policy', async t => {
  t.mock.method(globalThis, 'fetch', async url => ({ ok: true, json: async () => ({ Status: 0, Answer: [{ name: new URL(url).searchParams.get('name') + '.', type: 16, TTL: 10, data: '"v=spf10 not-an-spf-record"' }] }) }));
  const report = await lookupAllDns('example.com', 'google');
  assert.equal(report.sections.find(s => s.key === 'TXT').records.length, 1);
  assert.equal(report.sections.find(s => s.key === 'SPF').records.length, 0);
  assert.equal(report.sections.find(s => s.key === 'DMARC').records.length, 0);
});

test('all-record cancellation rejects instead of publishing a stale report', async t => {
  const controller = new AbortController(); let completed = 0;
  t.mock.method(globalThis, 'fetch', async (_url, { signal }) => { controller.abort(); signal.throwIfAborted(); });
  await assert.rejects(lookupAllDns('example.com', 'google', controller.signal, () => completed++), { name: 'AbortError' });
  assert.equal(completed, 0);
});

test('all-record exports preserve policy groups, avoid double counting SPF and generate a branded PDF', async t => {
  t.mock.method(globalThis, 'fetch', async url => answer(url));
  const report = await lookupAllDns('example.com', 'google');
  const snapshot = allDnsExportReport(report);
  assert.equal(snapshot.type, 'ALL'); assert.equal(snapshot.hosts.length, 2);
  assert.equal(snapshot.hosts.flatMap(host => host.records).length, 10);
  assert.equal(snapshot.hosts.flatMap(host => host.records).filter(record => record.value.includes('v=spf1')).length, 1);
  const analysis = dnsReportAnalysis(snapshot);
  assert.equal(analysis.answerCount, 10); assert.match(analysis.checks.find(c => c.label === 'Query coverage').detail, /DMARC at _dmarc/);
  assert(!analysis.checks.some(c => c.detail.includes('Only ALL')));
  assert(analysis.tips.some(tip => tip.includes('complete zone were not enumerated')));
  const csv = allDnsReportCsv(report);
  assert(csv.startsWith('\ufeff"Section"')); assert(csv.includes('"SPF","example.com","TXT"'));
  assert(csv.includes('"DMARC","_dmarc.example.com","TXT"'));
  report.sections[0].records[0].value = '=1+1';
  assert(allDnsReportCsv(report).includes('"\'=1+1"'));
  const pdf = Buffer.from(dnsReportPdf(snapshot)).toString('latin1');
  assert(pdf.startsWith('%PDF-')); assert(pdf.trimEnd().endsWith('%%EOF'));
  assert.match(pdf, /\/Subject \(ALL DNS report via Google Public DNS\)/);
  assert(pdf.includes('https://xcellhost.cloud/tools/all-dns-records?domain=example.com'));
});
