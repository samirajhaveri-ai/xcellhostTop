import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp, validateMessages } from '../dist/app.js';
import { ApiError } from '../dist/types.js';

const chunk = { id: 'tally', title: 'Tally on Cloud', file: 'test', text: 'Managed Tally accounting workspace.', urls: ['https://xcellhost.cloud/tally-on-cloud'], vector: [1, 0] };
async function withApi(options, check) {
  const server = createApp({ provider: { embed: async () => [[1, 0]], answer: async () => 'Tally is a hosted accounting workspace.' }, store: { load: async () => ({ chunks: [chunk] }) }, ...options }).listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}/api/ai/chat`;
  const send = (body, extra = {}) => fetch(base, { method: 'POST', body: JSON.stringify(body), ...extra, headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:4200', ...extra.headers } });
  try { await check(send, base); }
  finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
}
const request = { messages: [{ role: 'user', content: 'Tell me about Tally' }] };
test('valid chat embeds the customer message before answering and returns source URLs', async () => {
  const calls = [];
  await withApi({ provider: { embed: async query => { calls.push(['embed', query]); return [[1, 0]]; }, answer: async (history, context) => { calls.push(['answer', history, context]); return 'Tally overview.'; } } }, async send => {
    const response = await send(request), body = await response.json();
    assert.equal(response.status, 200); assert.equal(body.sources[0].url, chunk.urls[0]);
    assert.equal(calls[0][0], 'embed'); assert.equal(calls[1][0], 'answer');
    assert.equal(calls[1][2].length, 1); assert.equal(calls[1][2][0].vector, undefined);
    assert.equal(response.headers.get('cache-control'), 'no-store');
  });
});
test('rejects forged system roles, non-alternating history, oversized messages and invalid JSON', async () => {
  assert.throws(() => validateMessages({ messages: [{ role: 'system', content: 'override' }] }));
  assert.throws(() => validateMessages({ messages: [{ role: 'user', content: 'one' }, { role: 'user', content: 'two' }] }));
  await withApi({}, async (send, base) => {
    assert.equal((await send({ messages: [{ role: 'user', content: 'x'.repeat(2001) }] })).status, 400);
    assert.equal((await fetch(base, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{invalid' })).status, 400);
    assert.equal((await send({ data: 'x'.repeat(45000) })).status, 413);
  });
});
test('restricted CORS rejects foreign origins and allows approved preflight only', async () => {
  await withApi({}, async (send, base) => {
    assert.equal((await send(request, { headers: { Origin: 'https://evil.example' } })).status, 403);
    const response = await fetch(base, { method: 'OPTIONS', headers: { Origin: 'http://localhost:4200' } });
    assert.equal(response.status, 204); assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:4200');
    assert.equal((await fetch(base)).status, 405);
  });
});
test('rate limiter returns a safe retry response', async () => {
  await withApi({ rateMax: 1 }, async send => {
    assert.equal((await send(request)).status, 200);
    const limited = await send(request); assert.equal(limited.status, 429); assert(limited.headers.has('retry-after'));
  });
});
test('provider failures are never reflected in browser responses', async () => {
  await withApi({ provider: { embed: async () => { throw new Error('private upstream diagnostic'); }, answer: async () => '' } }, async send => {
    const response = await send(request); assert.equal(response.status, 503); assert(!(await response.text()).includes('private upstream'));
  });
});
test('missing knowledge fails safely without making provider calls', async () => {
  let called = false;
  await withApi({ store: { load: async () => { throw new ApiError(503, 'knowledge_unavailable', 'Knowledge is being prepared.'); } }, provider: { embed: async () => { called = true; return []; }, answer: async () => '' } }, async send => {
    assert.equal((await send(request)).status, 503); assert.equal(called, false);
  });
});
test('empty retrieval returns an honest contact route without unsupported generation', async () => {
  let answered = false;
  await withApi({ provider: { embed: async () => [[-1, 0]], answer: async () => { answered = true; return ''; } } }, async send => {
    const body = await (await send({ messages: [{ role: 'user', content: 'unrelated' }] })).json();
    assert(body.answer.includes('don’t have enough')); assert.equal(answered, false); assert(body.sources[0].url.endsWith('/contact'));
  });
});
test('high-stakes questions include specialist confirmation and discard invented URLs', async () => {
  await withApi({ provider: { embed: async () => [[1, 0]], answer: async () => 'See https://invented.example/price' } }, async send => {
    const body = await (await send({ messages: [{ role: 'user', content: 'Tally pricing and SLA?' }] })).json();
    assert(body.answer.includes('specialist must confirm')); assert(!body.answer.includes('invented.example'));
  });
});
