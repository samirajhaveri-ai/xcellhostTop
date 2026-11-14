const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const moduleExports = {};
new Function('exports', ts.transpileModule(fs.readFileSync('src/app/core/dns-lookup.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(moduleExports);
const { normalizeDnsDomain, lookupDns } = moduleExports;

test('normalizes website URLs, case, trailing dots and international domains', () => {
  assert.equal(normalizeDnsDomain(' HTTPS://Example.COM/path?q=1#section '), 'example.com');
  assert.equal(normalizeDnsDomain('www.example.com.'), 'www.example.com');
  assert.equal(normalizeDnsDomain('https://b\u00fccher.de'), 'xn--bcher-kva.de');
  for (const invalid of ['', 'localhost', '8.8.8.8', 'https://[::1]', 'https://user:pass@example.com', 'ftp://example.com', 'a..example.com', 'a b.com', 'https://example.com\\bad', 'a'.repeat(64) + '.com']) assert.throws(() => normalizeDnsDomain(invalid));
});

test('queries root and www, preserves TTL and CNAME records, and labels authenticated answers', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    const u = new URL(url); calls.push({ url: u, options });
    return { ok: true, json: async () => ({ Status: 0, AD: true, Answer: [{ name: u.searchParams.get('name') + '.', type: 5, TTL: 120, data: 'target.example.net.' }, { name: 'target.example.net.', type: 1, TTL: 300, data: '192.0.2.42' }, { name: 'target.example.net.', type: 46, TTL: 300, data: 'signature' }] }) };
  });
  const report = await lookupDns('https://example.com/path', 'A', 'google', true);
  assert.deepEqual(calls.map(c => c.url.searchParams.get('name')), ['example.com', 'www.example.com']);
  assert(calls.every(c => c.url.hostname === 'dns.google' && c.url.searchParams.get('type') === 'A' && c.url.searchParams.get('edns_client_subnet') === '0.0.0.0/0'));
  assert.equal(report.hosts[0].records[1].ttl, 300);
  assert.equal(report.hosts[0].records[0].type, 'CNAME');
  assert.equal(report.hosts[0].records.length, 2);
  assert.equal(report.hosts[0].authenticated, true);
});

test('uses the selected Cloudflare resolver and does not create www.www queries', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => { calls.push({ url: new URL(url), options }); return { ok: true, json: async () => ({ Status: 0, Answer: [] }) }; });
  await lookupDns('www.example.com', 'AAAA', 'cloudflare', true);
  assert.equal(calls.length, 1); assert.equal(calls[0].url.hostname, 'cloudflare-dns.com');
  assert.equal(calls[0].url.searchParams.get('type'), 'AAAA');
  assert.equal(calls[0].options.headers.Accept, 'application/dns-json');
  assert.equal(calls[0].url.searchParams.get('name'), 'www.example.com');
  await assert.rejects(lookupDns('example.com', 'ANY', 'google', false));
  await assert.rejects(lookupDns('example.com', 'A', 'untrusted', false));
});

test('distinguishes missing names, no matching records, partial failures and resolver errors', async t => {
  t.mock.method(globalThis, 'fetch', async url => ({ ok: true, json: async () => ({ Status: new URL(url).searchParams.get('name').startsWith('www.') ? 3 : 0, Answer: [] }) }));
  const empty = await lookupDns('example.com', 'A', 'google', true);
  assert.equal(empty.hosts[0].status, 'NOERROR'); assert.equal(empty.hosts[1].status, 'NXDOMAIN');
  globalThis.fetch = async url => {
    if (new URL(url).searchParams.get('name').startsWith('www.')) throw new TypeError('Network failure');
    return { ok: true, json: async () => ({ Status: 0, Answer: [{ name: 'example.com.', type: 1, TTL: 10, data: '192.0.2.1' }] }) };
  };
  const partial = await lookupDns('example.com', 'A', 'google', true);
  assert.equal(partial.hosts[0].records.length, 1); assert.equal(partial.hosts[1].status, 'ERROR'); assert.match(partial.hosts[1].error, /connection/);
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ Status: 2 }) });
  const failed = await lookupDns('example.com', 'A', 'google', false);
  assert.equal(failed.hosts[0].status, 'ERROR'); assert.match(failed.hosts[0].error, /SERVFAIL/);
  globalThis.fetch = async () => ({ ok: false, status: 429 });
  assert.match((await lookupDns('example.com', 'A', 'google', false)).hosts[0].error, /429/);
});

test('propagates cancellation so an outdated lookup cannot replace a newer result', async t => {
  const controller = new AbortController();
  t.mock.method(globalThis, 'fetch', async (_url, { signal }) => { controller.abort(); signal.throwIfAborted(); });
  await assert.rejects(lookupDns('example.com', 'A', 'google', true, controller.signal), { name: 'AbortError' });
});
