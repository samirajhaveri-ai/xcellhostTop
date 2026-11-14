const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('typescript');
const filename = path.resolve('src/app/core/hash-generator.ts');
const exportsObject = {};
new Function('exports', 'require', ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exportsObject, require);
const { HASH_ALGORITHMS, HASH_FILE_LIMIT, HASH_TEXT_LIMIT, encodeHashText, formatHash, hashBytes, hashBlob } = exportsObject;
const ids = HASH_ALGORITHMS.map(item => item.id);
const nodeAlgorithm = { 'MD5': 'md5', 'SHA-1': 'sha1', 'SHA-256': 'sha256', 'SHA-384': 'sha384', 'SHA-512': 'sha512', 'SHA3-256': 'sha3-256', 'BLAKE2b-512': 'blake2b512' };
const hex = digest => formatHash(digest.bytes, 'hex');

test('all seven cryptographic digests match independent Node/OpenSSL for empty, UTF-8 and padding boundaries', () => {
  for (const input of ['', 'abc', 'Hello, world!', '\u4f60\u597d \ud83c\udf0d caf\u00e9', ...[55, 56, 63, 64, 65, 111, 112, 127, 128, 129, 135, 136, 137, 1024].map(n => 'x'.repeat(n))]) {
    const bytes = encodeHashText(input);
    for (const digest of hashBytes(bytes, ids.filter(id => id !== 'CRC32'))) assert.equal(hex(digest), crypto.createHash(nodeAlgorithm[digest.algorithm]).update(bytes).digest('hex'), input.length + ': ' + digest.algorithm);
  }
});
test('CRC32 matches ISO-HDLC check vectors, including all byte values', () => {
  for (const [input, expected] of [['', '00000000'], ['123456789', 'cbf43926'], ['The quick brown fox jumps over the lazy dog', '414fa339']]) assert.equal(hex(hashBytes(encodeHashText(input), ['CRC32'])[0]), expected);
  assert.equal(hex(hashBytes(Uint8Array.from({length:256}, (_, i) => i), ['CRC32'])[0]), '29058c73');
});
test('known MD5, SHA-256 and SHA3-256 vectors retain the exact named variants', () => {
  const digests = Object.fromEntries(hashBytes(encodeHashText('abc'), ['MD5','SHA-256','SHA3-256']).map(row => [row.algorithm, hex(row)]));
  assert.equal(digests['MD5'], '900150983cd24fb0d6963f7d28e17f72');
  assert.equal(digests['SHA-256'], 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.equal(digests['SHA3-256'], '3a985da74fe225b2045c172d6bd390bd855f086e3e9d525b46bfe24511431532');
});
test('raw binary is preserved and chunked file hashes match independent cryptographic digests', async () => {
  const input = Uint8Array.from({length: 700003}, (_, i) => i * 37 % 256);
  const progress = [], rows = await hashBlob(new Blob([input]), ids, { onProgress: percent => progress.push(percent) });
  assert.equal(rows.length, ids.length);
  for (const row of rows) {
    assert.equal(hex(row), hex(hashBytes(input, [row.algorithm])[0]));
    if (row.algorithm !== 'CRC32') assert.equal(hex(row), crypto.createHash(nodeAlgorithm[row.algorithm]).update(input).digest('hex'));
  }
  assert(progress.length >= 3); assert(progress[0] > 0 && progress[0] < 100); assert.equal(progress.at(-1),100);
  assert(progress.every((value,index) => index === 0 || value >= progress[index-1]));
});
test('empty files are valid and match empty text for every algorithm', async () => {
  const output = await hashBlob(new Blob([]), ids);
  assert.deepEqual(output.map(hex), hashBytes(encodeHashText(''), ids).map(hex));
});
test('selection is canonical, deduplicated and rejects unsupported or empty algorithms', async () => {
  assert.deepEqual(hashBytes(new Uint8Array(), ['SHA-512','MD5','MD5']).map(item=>item.algorithm), ['MD5','SHA-512']);
  for (const selected of [[], ['SHA3'], ['__proto__'], ['CRC32','bad'], null]) {
    assert.throws(()=>hashBytes(new Uint8Array(), selected), /algorithm/);
    await assert.rejects(hashBlob(new Blob([]), selected), /algorithm/);
  }
});
test('Hex lowercase, uppercase and Base64 encode the same bytes without losing leading zeros', () => {
  for (const bytes of [new Uint8Array([0,1,2,254,255]), ...hashBytes(encodeHashText('abc'), ids).map(row=>row.bytes)]) {
    assert.equal(formatHash(bytes,'hex'), Buffer.from(bytes).toString('hex'));
    assert.equal(formatHash(bytes,'hex-upper'), Buffer.from(bytes).toString('hex').toUpperCase());
    assert.equal(formatHash(bytes,'base64'), Buffer.from(bytes).toString('base64'));
  }
  assert.throws(()=>formatHash(new Uint8Array([0]),'binary'),/output/);
});
test('text encoding preserves whitespace, line endings and Unicode without normalization', () => {
  for (const text of [' abc ', 'abc\n', 'abc\r\n', '\ufeffabc', '\u00e9', 'e\u0301', '\ud800', '\u0000']) assert.deepEqual(Buffer.from(encodeHashText(text)), Buffer.from(text,'utf8'));
  const values = ['abc',' abc','abc ','abc\n','abc\r\n','\u00e9','e\u0301'].map(input=>hex(hashBytes(encodeHashText(input),['SHA-256'])[0]));
  assert.equal(new Set(values).size, values.length);
});
test('input limits are enforced before file reads and include UTF-8 byte length', async () => {
  assert.throws(()=>encodeHashText('a'.repeat(HASH_TEXT_LIMIT+1)),/5 MiB/);
  assert.throws(()=>encodeHashText('\u4f60'.repeat(Math.ceil(HASH_TEXT_LIMIT/3))),/5 MiB/);
  let read = false;
  await assert.rejects(hashBlob({size:HASH_FILE_LIMIT+1,slice(){read=true;throw new Error('unexpected read');}},ids),/100 MiB/);
  assert.equal(read,false);
});
test('cancellation stops file work before reads and between chunks without returning partial hashes', async () => {
  const controller = new AbortController();controller.abort();let read=false;
  await assert.rejects(hashBlob({size:1,slice(){read=true;throw new Error('unexpected read');}},ids,{signal:controller.signal}),{name:'AbortError'});assert.equal(read,false);
  const mid = new AbortController(), progress=[];
  await assert.rejects(hashBlob(new Blob([new Uint8Array(700000)]), ids, {signal:mid.signal,onProgress:percent=>{progress.push(percent);mid.abort();}}),{name:'AbortError'});
  assert.equal(progress.length,1);assert(progress[0]<100);
});
test('a file read failure rejects instead of producing empty or truncated file hashes', async () => {
  await assert.rejects(hashBlob({size:1,slice(){return {arrayBuffer:async()=>{throw new Error('File read denied');}};}},ids),/File read denied/);
});
