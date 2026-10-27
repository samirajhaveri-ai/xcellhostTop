import test from 'node:test';
import assert from 'node:assert/strict';
import { OpenAiProvider, DIMENSIONS } from '../dist/provider.js';
test('provider uses Responses with the exact model, disabled storage and relevant context only', async () => {
  const calls = [];
  const provider = new OpenAiProvider('test-placeholder', async (url, init) => {
    calls.push({ url, body: JSON.parse(init.body) });
    return new Response(JSON.stringify({ status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text: 'Grounded answer.' }] }] }), { status: 200 });
  });
  assert.equal(await provider.answer([{ role: 'user', content: 'Question?' }], [{ title: 'Relevant', text: 'Relevant facts', urls: [] }]), 'Grounded answer.');
  assert(calls[0].url.endsWith('/responses')); assert.equal(calls[0].body.model, 'gpt-5.4-mini'); assert.equal(calls[0].body.store, false);
  assert(calls[0].body.input[0].content.includes('Relevant facts'));
});
test('embedding API validates output dimensions and input order', async () => {
  const provider = new OpenAiProvider('test-placeholder', async (_url, init) => {
    const body = JSON.parse(init.body); assert.equal(body.model, 'text-embedding-3-small');
    return new Response(JSON.stringify({ data: [{ index: 0, embedding: Array(DIMENSIONS).fill(.1) }] }));
  });
  assert.equal((await provider.embed(['query']))[0].length, DIMENSIONS);
});
test('unconfigured provider and upstream authentication fail without revealing response bodies', async () => {
  await assert.rejects(new OpenAiProvider('').embed(['query']), error => error.code === 'not_configured');
  const provider = new OpenAiProvider('test-placeholder', async () => new Response('private diagnostic', { status: 401 }));
  await assert.rejects(provider.embed(['query']), error => error.status === 503 && !error.message.includes('private'));
});
