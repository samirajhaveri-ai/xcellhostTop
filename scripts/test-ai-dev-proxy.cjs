const { test } = require('node:test');
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const { PassThrough, Writable } = require('node:stream');
const http = require('node:http');
const { createAiDevProxy } = require('./ai-dev-proxy.cjs');

async function exercise(reply, requestBody = '{}') {
  let launches = 0;
  const spawnPhp = () => {
    launches++;
    const child = new EventEmitter();
    child.stdout = new PassThrough(); child.stderr = new PassThrough(); child.kill = () => {};
    child.stdin = new Writable({ write(chunk, encoding, next) { next(); }, final(next) {
      next(); queueMicrotask(() => { child.stdout.end(reply); child.emit('close', 0); });
    } });
    return child;
  };
  const handler = createAiDevProxy(spawnPhp);
  const server = http.createServer((req, res) => handler(req, res));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const response = await fetch('http://127.0.0.1:' + server.address().port, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: requestBody });
    return { status: response.status, type: response.headers.get('content-type'), body: await response.json(), launches };
  } finally { await new Promise(resolve => server.close(resolve)); }
}

test('returns the assistant answer as JSON without the CLI envelope', async () => {
  const result = await exercise(JSON.stringify({ status: 200, body: { answer: 'Cloud services overview.' } }));
  assert.equal(result.status, 200); assert.equal(result.type, 'application/json');
  assert.deepEqual(result.body, { answer: 'Cloud services overview.' });
});
test('preserves backend rate-limit status instead of turning every failure into 503', async () => {
  const result = await exercise(JSON.stringify({ status: 429, body: { error: 'Please try again later.' } }));
  assert.equal(result.status, 429); assert.equal(result.body.error, 'Please try again later.');
});
test('returns a safe JSON error when PHP emits invalid output', async () => {
  const result = await exercise('PHP failure with fake-secret-value');
  assert.equal(result.status, 502); assert.ok(!JSON.stringify(result.body).includes('fake-secret-value'));
});
test('rejects oversized input before starting PHP', async () => {
  const result = await exercise('', 'a'.repeat(65537));
  assert.equal(result.status, 413); assert.equal(result.type, 'application/json'); assert.equal(result.launches, 0);
});
