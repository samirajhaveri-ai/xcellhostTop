const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const crypto = require('node:crypto');

function load(relative) {
  const module = { exports: {} };
  const filename = path.resolve(__dirname, '..', relative);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  new Function('module', 'exports', source)(module, module.exports);
  return module.exports;
}
const { SITE_TOOLS, TOOL_CATEGORIES } = load('src/app/data/tools.data.ts');
const { runSiteTool } = load('src/app/core/tool-runner.ts');
const run = (id, values = {}) => {
  const tool = SITE_TOOLS.find(t => t.id === id);
  assert(tool, id);
  return runSiteTool(tool, { ...Object.fromEntries(tool.fields.map(f => [f.key, f.value || ''])), ...values });
};

test('catalogue has nine categories, unique destinations and usable input fields', () => {
  assert.equal(TOOL_CATEGORIES.length, 9);
  assert.equal(new Set(SITE_TOOLS.map(t => t.id)).size, SITE_TOOLS.length);
  for (const tool of SITE_TOOLS) {
    assert.match(tool.id, /^[a-z0-9-]+$/);
    assert(tool.fields.length);
    assert.equal(new Set(tool.fields.map(f => f.key)).size, tool.fields.length);
  }
});

test('hashes match a published SHA-256 test vector and Unicode round-trips', async () => {
  assert.equal((await run('hash-generator', { input: 'abc' })).text, 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  const unicode = 'Hello नमस्ते 🌏';
  const encoded = (await run('base64', { input: unicode })).text;
  assert.equal((await run('base64', { input: encoded, mode: 'Decode' })).text, unicode);
  const url = (await run('url-encode', { input: 'a+b / नमस्ते' })).text;
  assert.equal((await run('url-encode', { input: url, mode: 'Decode' })).text, 'a+b / नमस्ते');
});

test('IPv4 calculations handle zero, point-to-point and single-host prefixes', async () => {
  const standard = (await run('subnet-calculator', { input: '192.168.1.10/24' })).text;
  assert.match(standard, /Network: 192\.168\.1\.0\/24/);
  assert.match(standard, /Broadcast: 192\.168\.1\.255/);
  assert.match(standard, /Usable addresses: 254/);
  assert.match((await run('subnet-calculator', { input: '8.8.8.8/0' })).text, /Subnet mask: 0\.0\.0\.0/);
  assert.match((await run('subnet-calculator', { input: '192.0.2.2/31' })).text, /Usable addresses: 2/);
  assert.match((await run('subnet-calculator', { input: '192.0.2.2/32' })).text, /Usable addresses: 1/);
  await assert.rejects(run('subnet-calculator', { input: '256.1.1.1/24' }));
  await assert.rejects(run('subnet-calculator', { input: '1.1.1.1/33' }));
  assert.equal((await run('ipv6-expand', { input: '2001:db8::1' })).text, '2001:0db8:0000:0000:0000:0000:0000:0001');
  await assert.rejects(run('ipv6-expand', { input: '1::2::3' }));
});

test('CSV handles multiline quoted fields and rejects malformed rows', async () => {
  const data = [{ name: 'A, B', text: 'line 1\nline "2"' }, { name: 'C', text: '' }];
  const csv = (await run('json-to-csv', { input: JSON.stringify(data) })).text;
  assert.deepEqual(JSON.parse((await run('csv-to-json', { input: csv })).text), data);
  await assert.rejects(run('csv-to-json', { input: 'a,b\n1' }));
  await assert.rejects(run('csv-to-json', { input: 'a,a\n1,2' }));
  await assert.rejects(run('csv-to-json', { input: 'a,b\n"unclosed,2' }));
  await assert.rejects(run('json-to-csv', { input: '[{"a":{"nested":1}}]' }));
});

test('generators enforce bounds and generate valid independent values', async () => {
  const password = (await run('password-generator')).text;
  assert.equal(password.length, 24); assert.match(password, /[A-Z]/); assert.match(password, /[a-z]/); assert.match(password, /[0-9]/); assert.match(password, /[!@#$%&*+\-=?]/);
  assert.notEqual(password, (await run('password-generator')).text);
  await assert.rejects(run('password-generator', { length: '3' }));
  const uuids = (await run('uuid-generator')).text.split('\n');
  assert.equal(new Set(uuids).size, 5);
  uuids.forEach(uuid => assert.match(uuid, /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/));
  assert.equal((await run('api-key-generator')).text.length, 64);
  for (const mac of (await run('mac-generator')).text.split('\n')) assert.equal(parseInt(mac.slice(0, 2), 16) & 3, 2);
  assert.equal((await run('cron-generator', { schedule: 'Weekdays', hour: '9', minute: '30' })).text, '30 9 * * 1-5');
});

test('RSA SSH public and private key material agree and fingerprints match', async () => {
  const generated = (await run('ssh-key-generator')).text;
  const publicLine = generated.split('\n')[0];
  const privatePem = generated.slice(generated.indexOf('-----BEGIN PRIVATE KEY-----'));
  const publicJwk = crypto.createPublicKey(crypto.createPrivateKey(privatePem)).export({ format: 'jwk' });
  const wire = Buffer.from(publicLine.split(' ')[1], 'base64'); let offset = 0;
  const field = () => { const length = wire.readUInt32BE(offset); const result = wire.subarray(offset + 4, offset + 4 + length); offset += 4 + length; return result; };
  assert.equal(field().toString(), 'ssh-rsa');
  const exponent = field(), modulus = field();
  assert.deepEqual(exponent, Buffer.from(publicJwk.e, 'base64url'));
  assert.deepEqual(modulus[0] === 0 ? modulus.subarray(1) : modulus, Buffer.from(publicJwk.n, 'base64url'));
  assert.equal((await run('ssh-fingerprint', { input: publicLine })).text, 'SHA256:' + crypto.createHash('sha256').update(wire).digest('base64').replace(/=+$/, ''));
});

test('date, JWT, metadata and JSON utilities return honest results', async () => {
  assert.match((await run('epoch-converter', { input: '0' })).text, /1970-01-01T00:00:00.000Z/);
  assert.match((await run('date-difference', { start: '2024-02-28', end: '2024-03-01' })).text, /Days: 2/);
  await assert.rejects(run('date-difference', { start: '2026-02-30', end: '2026-03-01' }));
  const token = Buffer.from('{"alg":"none"}').toString('base64url') + '.' + Buffer.from('{"admin":true}').toString('base64url') + '.';
  const decoded = await run('jwt-decoder', { input: token }); assert.match(decoded.notice, /not been verified/);
  assert.equal(JSON.parse(decoded.text).payload.admin, true);
  assert.equal((await run('json-formatter', { input: '{"a":1}' })).text, '{\n  "a": 1\n}');
  await assert.rejects(run('json-formatter', { input: '{a:1}' }));
  const meta = await run('open-graph-generator', { title: '"><script>', url: 'https://example.com', image: 'https://example.com/image.png' });
  assert(!meta.text.includes('<script>')); assert.match(meta.text, /&quot;&gt;&lt;script&gt;/);
});

test('DNS requests use correct record names and distinguish resolver failures', async t => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async url => {
    calls.push(new URL(url));
    return { ok: true, json: async () => ({ Status: 0, AD: true, Answer: [{ name: 'example.com.', type: 16, TTL: 300, data: '"v=spf1 -all"' }] }) };
  });
  const records = await run('spf-lookup', { input: 'https://example.com/path' });
  assert.equal(records.records[0].ttl, 300);
  assert.equal(calls[0].searchParams.get('name'), 'example.com');
  await run('dkim-lookup', { input: 'example.com', selector: 'selector1' });
  assert.equal(calls.at(-1).searchParams.get('name'), 'selector1._domainkey.example.com');
  await run('ptr-lookup', { input: '8.8.4.4' });
  assert.equal(calls.at(-1).searchParams.get('name'), '4.4.8.8.in-addr.arpa');
  assert.equal((await run('dnssec-check', { input: 'example.com' })).summary, 'DNSSEC authenticated');
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ Status: 3 }) });
  assert.match((await run('dns-lookup', { input: 'missing.example.com', type: 'A' })).text, /NXDOMAIN/);
  assert.equal((await run('dnssec-check', { input: 'missing.example.com' })).summary, 'Domain not found');
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ Status: 2 }) });
  await assert.rejects(run('dns-lookup', { input: 'example.com', type: 'A' }), /resolver status 2/);
});
