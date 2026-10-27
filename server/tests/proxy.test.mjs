import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
const { loadProxyConfiguration } = require(resolve('node_modules/@angular/build/src/utils/load-proxy-config.js'));
test('Angular proxy routes chat locally before the existing general API proxy', async () => {
  const proxy = await loadProxyConfiguration(resolve('.'), 'proxy.conf.cjs');
  const matchingProxy = url => {
    const key = Object.keys(proxy).find(key => key.startsWith('^') ? new RegExp(key).test(url) : url.startsWith(key));
    assert.ok(key, `No proxy matches ${url}`);
    return proxy[key];
  };
  for (const url of ['/api/ai/chat', '/api/ai/health']) {
    assert.equal(matchingProxy(url).target, 'http://127.0.0.1:3001');
  }
  assert.equal(typeof proxy['/api/ai-assistant'].bypass, 'function');
  assert.equal(matchingProxy('/api/products').target, 'https://admin.xcellhost.cloud');
  assert.equal(typeof matchingProxy('/api/auth.php').bypass, 'function');
});
