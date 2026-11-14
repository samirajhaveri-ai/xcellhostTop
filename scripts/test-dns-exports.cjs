const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const load = file => {
  const exports = {};
  new Function('exports', 'require', ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exports, require);
  return exports;
};
const { dnsReportCsv, dnsShareUrl } = load('src/app/core/dns-report-export.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const report = () => ({ domain: 'example.com', type: 'TXT', resolver: 'Google Public DNS', checkedAt: '2026-11-12T12:00:00Z', durationMs: 33, hosts: [
  { name: 'example.com', status: 'NOERROR', authenticated: true, records: [{ name: 'example.com', type: 'TXT', ttl: 300, value: 'A "quoted", multiline\nrecord \u0928\u092e\u0938\u094d\u0924\u0947' }] },
  { name: 'www.example.com', status: 'NXDOMAIN', authenticated: false, records: [] },
] });

test('CSV preserves quotes, line breaks, Unicode, TTL and empty-host status', () => {
  const csv = dnsReportCsv(report());
  assert(csv.startsWith('\ufeff"Queried hostname"'));
  assert(csv.includes('"A ""quoted"", multiline\nrecord \u0928\u092e\u0938\u094d\u0924\u0947"'));
  assert(csv.includes('"TXT","300"')); assert(csv.includes('"www.example.com"')); assert(csv.includes('"NXDOMAIN"'));
  assert(csv.includes('"Google Public DNS"')); assert(csv.includes('2026-11-12T12:00:00Z'));
});
test('CSV neutralizes spreadsheet formula prefixes in untrusted record data', () => {
  const r = report();
  for (const value of ['=1+1', '+SUM(A1:A2)', '-1+2', '@SUM(1)', ' \t=1']) {
    r.hosts[0].records[0].value = value;
    assert(dnsReportCsv(r).includes('"\'' + value + '"'));
  }
});
test('share URL retains lookup settings without carrying unrelated query parameters', () => {
  const url = new URL(dnsShareUrl('https://xcellhost.cloud/tools/dns-lookup?old=1#results', 'example.com', 'MX', 'cloudflare', false));
  assert.equal(url.pathname, '/tools/dns-lookup'); assert.equal(url.searchParams.get('domain'), 'example.com');
  assert.equal(url.searchParams.get('type'), 'MX'); assert.equal(url.searchParams.get('resolver'), 'cloudflare');
  assert.equal(url.searchParams.get('www'), '0'); assert(!url.searchParams.has('old')); assert.equal(url.hash, '');
});
test('PDF produces a real document with metadata, records and multiple pages for long answers', () => {
  const r = report(); r.hosts[0].records[0].value += '\n' + 'long value (with parentheses) \\ check '.repeat(500);
  const bytes = Buffer.from(dnsReportPdf(r)); const text = bytes.toString('latin1');
  assert(text.startsWith('%PDF-')); assert(text.trimEnd().endsWith('%%EOF'));
  assert.match(text, /\/Title \(example.com DNS lookup\)/); assert.match(text, /\/Author \(XcellHost\)/);
  assert((text.match(/\/Type \/Page\b/g) || []).length > 1);
  assert.match(text, /\/Font/); assert.match(text, /\/Contents/);
});

const addressReport = () => ({ ...report(), type: 'A', hosts: [
  { name: 'example.com', status: 'NOERROR', authenticated: false, records: [{ name: 'example.com', type: 'A', ttl: 60, value: '4.187.247.160' }] },
  { name: 'www.example.com', status: 'NOERROR', authenticated: false, records: [
    { name: 'www.example.com', type: 'CNAME', ttl: 3600, value: 'example.com.' },
    { name: 'example.com', type: 'A', ttl: 120, value: '135.235.149.144' },
  ] },
] });

test('PDF analysis distinguishes the root count, alias answers and selected-type TTLs', () => {
  const result = dnsReportAnalysis(addressReport());
  assert.equal(result.rootCount, 1); assert.equal(result.answerCount, 3);
  assert.equal(result.ttlRange, '60-120s');
  assert.match(result.checks.find(c => c.label === 'Requested records').detail, /^2 A answers/);
  assert.equal(result.checks.find(c => c.label === 'Other record types').state, 'INFO');
  assert.match(result.checks.find(c => c.label === 'Other record types').detail, /IPv6 \(AAAA\) were not checked/);
  assert.equal(result.checks.find(c => c.label === 'DNSSEC authentication').state, 'INFO');
  assert(result.tips.some(tip => tip.includes('DNS alone cannot establish resilience')));
});

test('PDF analysis reports failed responses and treats malformed or special-purpose addresses accurately', () => {
  const r = addressReport();
  r.hosts[0].records[0].value = '999.1.2.3';
  let checks = dnsReportAnalysis(r).checks;
  assert.equal(checks.find(c => c.label === 'IPv4 address format').state, 'FAIL');
  assert.equal(checks.find(c => c.label === 'IPv4 address scope').state, 'INFO');
  for (const value of ['10.0.0.1', '172.16.0.1', '192.168.1.1', '192.0.2.42', '100.64.0.1', '203.0.113.1']) {
    r.hosts[0].records[0].value = value;
    assert.equal(dnsReportAnalysis(r).checks.find(c => c.label === 'IPv4 address scope').state, 'REVIEW', value);
  }
  r.hosts[1] = { name: 'www.example.com', status: 'ERROR', authenticated: false, records: [], error: 'Resolver timed out' };
  let result = dnsReportAnalysis(r);
  assert.equal(result.checks.find(c => c.label === 'DNS responses').state, 'FAIL');
  assert.match(result.tips[0], /resolver requests failed/);
  r.hosts[1].status = 'NXDOMAIN';
  result = dnsReportAnalysis(r);
  assert.equal(result.checks.find(c => c.label === 'DNS responses').state, 'REVIEW');
  assert.match(result.tips[0], /NXDOMAIN/);
});

test('PDF keeps an ordinary root and www report on a single A4 page', () => {
  const pdf = Buffer.from(dnsReportPdf(addressReport())).toString('latin1');
  assert.equal((pdf.match(/\/Type \/Page\b/g) || []).length, 1);
  const size = pdf.match(/\/MediaBox \[0 0 ([\d.]+) ([\d.]+)\]/);
  assert(size); assert(Math.abs(Number(size[1]) - 595.28) < .01);
  assert(Math.abs(Number(size[2]) - 841.89) < .01);
});
