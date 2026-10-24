const test = require('node:test');
const assert = require('node:assert/strict');
const { createBlogRssProxy } = require('./blog-rss-dev-proxy.cjs');
const config = require('../proxy.conf.cjs');
const xml = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Blog</title></channel></rss>';

async function request(method = 'GET', output = xml, error = null) {
  let calls = 0;
  const proxy = createBlogRssProxy((_binary, _args, _options, callback) => {
    calls++;
    callback(error, output);
  });
  const headers = {};
  const res = {
    statusCode: 200, body: '',
    setHeader(name, value) { headers[name] = value; },
    end(value) { this.body = value || ''; this.writableEnded = true; },
  };
  const bypass = await proxy({ method }, res);
  return { ...res, headers, calls, bypass };
}

test('RSS proxy matches public URL and Angular-rewritten legacy assets', () => {
  const rule = Object.keys(config).find(key => key.includes('feeds/blog'));
  const match = new RegExp(rule);
  for (const path of ['/feeds/blog', '/feeds/blog?reader=test', '/feeds/blog.php', '/@fs/C:/site/public/feeds/blog.php']) {
    assert.equal(match.test(path), true, path);
  }
  assert.equal(match.test('/feeds/blog-rss-handler.php'), false);
});

test('returns a completed XML response so Vite cannot serve PHP source', async () => {
  const result = await request();
  assert.equal(result.statusCode, 200);
  assert.equal(result.headers['Content-Type'], 'application/rss+xml; charset=utf-8');
  assert.equal(result.body, xml);
  assert.equal(result.writableEnded, true);
  assert.equal(typeof result.bypass, 'string');
});

test('never sends PHP source, missing-runtime errors, or upstream errors to visitors', async () => {
  for (const [body, error] of [['<?php secret code', null], ['Warning: PHP unavailable', new Error('failed')], ['', null]]) {
    const result = await request('GET', body, error);
    assert.equal(result.statusCode, 503);
    assert.doesNotMatch(result.body, /<\?php|secret|Warning/);
    assert.equal(result.headers['Retry-After'], '300');
  }
});

test('HEAD has no body and unsupported methods never run PHP', async () => {
  const head = await request('HEAD');
  assert.equal(head.statusCode, 200);
  assert.equal(head.body, '');
  const post = await request('POST');
  assert.equal(post.statusCode, 405);
  assert.equal(post.calls, 0);
});
