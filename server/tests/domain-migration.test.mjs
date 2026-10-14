import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const module = { exports: {} };
const source = ts.transpileModule(readFileSync('src/app/core/domain-migration.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
new Function('module', 'exports', source)(module, module.exports);
const { migrateCmsDomains } = module.exports;
const legacy = ['xcellhost', 'top'].join('.');
test('migrates nested CMS media, rich text and resource URLs without changing the input', () => {
  const original = { content: `<a href="http://www.${legacy}/cloud-drive/?from=blog#demo">Read</a>`,
    coverImage: { url: `https://admin.${legacy}/uploads/photo.jpg` },
    relatedPages: [`https://${legacy}/tally-on-cloud`], id: 7, optional: null };
  const migrated = migrateCmsDomains(original);
  assert.equal(migrated.content, '<a href="https://xcellhost.cloud/cloud-drive/?from=blog#demo">Read</a>');
  assert.equal(migrated.coverImage.url, 'https://admin.xcellhost.cloud/uploads/photo.jpg');
  assert.deepEqual(migrated.relatedPages, ['https://xcellhost.cloud/tally-on-cloud']);
  assert.equal(migrated.optional, null);
  assert.equal(migrated.id, 7);
  assert.equal(original.coverImage.url, `https://admin.${legacy}/uploads/photo.jpg`);
});
test('preserves external URLs, lookalike hosts and relative uploads', () => {
  const urls = [`https://${legacy}.evil.test/image.png`, 'https://youtube.com/watch?v=abc', '/uploads/image.jpg', 'https://xcellhost.cloud/contact'];
  assert.deepEqual(migrateCmsDomains(urls), urls);
});
