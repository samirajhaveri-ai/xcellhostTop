const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('typescript');
const exportsObject = {};
new Function('exports', 'require', ts.transpileModule(fs.readFileSync('src/app/core/certificate-fingerprint.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exportsObject, require);
const { CERTIFICATE_INPUT_LIMIT, decodeCertificate, inspectCertificate, displayCertificateFingerprint, compareCertificateFingerprint } = exportsObject;
const fixtures = require('./fixtures/certificate-fingerprint.json');
const now = new Date('2026-11-14T12:00:00Z');
const pemOf = bytes => '-----BEGIN CERTIFICATE-----\n' + Buffer.from(bytes).toString('base64').match(/.{1,64}/g).join('\n') + '\n-----END CERTIFICATE-----';

test('RSA and EC fingerprints match independent OpenSSL-backed Node X509Certificate and hashes', () => {
  for (const pem of Object.values(fixtures)) {
    const node = new crypto.X509Certificate(pem), report = inspectCertificate(pem,now);
    assert.equal(report.bytes,node.raw.length); assert.equal(report.serial,node.serialNumber);
    for (const row of report.fingerprints) {
      const hash = crypto.createHash(row.algorithm.toLowerCase().replace('-','')).update(node.raw);
      assert.equal(row.hex,hash.digest('hex'));
      assert.equal(Buffer.from(row.base64,'base64').toString('hex'),row.hex);
    }
    assert.equal(displayCertificateFingerprint(report.fingerprints.find(row=>row.algorithm==='SHA-256'),'colon'),node.fingerprint256);
    assert.equal(displayCertificateFingerprint(report.fingerprints.find(row=>row.algorithm==='SHA-1'),'colon'),node.fingerprint);
  }
});
test('PEM formatting, BOM, line endings and binary DER preserve the complete certificate fingerprint', () => {
  const bytes = new crypto.X509Certificate(fixtures.ec).raw, expected = inspectCertificate(fixtures.ec,now).fingerprints;
  const wrapped = '\ufeff  \r\n' + pemOf(bytes).replace(/\n/g,'\r\n') + '\r\n\t';
  for (const input of [wrapped, bytes, new TextEncoder().encode(wrapped), pemOf(bytes).replace(/\n/g,' ')]) assert.deepEqual(inspectCertificate(input,now).fingerprints,expected);
});
test('metadata reports dates, serials, public-key details and SAN without claiming trust', () => {
  const rsa = inspectCertificate(fixtures.rsa,now), ec = inspectCertificate(fixtures.ec,now);
  assert.match(rsa.subject,/example\.invalid/);assert.match(rsa.issuer,/XcellHost Tool Demo/);assert.equal(rsa.keyBits,2048);
  assert.equal(ec.keyBits,256);assert.equal(ec.curve,'P-256');assert.equal(ec.dateStatus,'within');assert.equal(ec.notBefore,'2026-01-01T00:00:00.000Z');assert.equal(ec.notAfter,'2030-01-01T00:00:00.000Z');
  assert.deepEqual(ec.names,[{type:'dns',value:'example.invalid'},{type:'dns',value:'www.example.invalid'}]);
  assert.equal(ec.checkedAt,now.toISOString());assert(!Object.hasOwn(ec,'trusted'));assert(!Object.hasOwn(ec,'signatureVerified'));
});
test('date range classification uses the supplied clock and includes exact endpoints', () => {
  const dates=[['2025-12-31T23:59:59Z','not-yet'],['2026-01-01T00:00:00Z','within'],['2030-01-01T00:00:00Z','within'],['2030-01-01T00:00:01Z','expired']];
  for (const [date,state] of dates) assert.equal(inspectCertificate(fixtures.ec,new Date(date)).dateStatus,state);
  assert.throws(()=>inspectCertificate(fixtures.ec,new Date(NaN)),/date/);
});
test('private keys, CSRs, public keys, SSH keys, bundles and other PEM labels are rejected clearly', () => {
  for (const type of ['PRIVATE KEY','RSA PRIVATE KEY','EC PRIVATE KEY','ENCRYPTED PRIVATE KEY','OPENSSH PRIVATE KEY']) assert.throws(()=>inspectCertificate('-----BEGIN '+type+'-----\nAAAA\n-----END '+type+'-----'),/Private keys/);
  for (const type of ['CERTIFICATE REQUEST','PUBLIC KEY','PKCS7']) assert.throws(()=>inspectCertificate('-----BEGIN '+type+'-----\nAAAA\n-----END '+type+'-----'),/CERTIFICATE PEM block/);
  assert.throws(()=>inspectCertificate(fixtures.ec+'\n'+fixtures.rsa),/one certificate at a time/);
  assert.throws(()=>inspectCertificate('ssh-ed25519 AAAA demo@host'),/SSH public key/);
  assert.throws(()=>inspectCertificate(fixtures.ec+'\n-----BEGIN PRIVATE KEY-----\nAAAA\n-----END PRIVATE KEY-----'),/Private keys/);
});
test('truncated DER, extra bytes, BER indefinite length and malformed structures do not yield fingerprints', () => {
  const raw = new crypto.X509Certificate(fixtures.ec).raw;
  for (const input of [raw.subarray(0,raw.length-1),Buffer.concat([raw,Buffer.from([0])]),new Uint8Array([0x30,0x80,0,0]),new Uint8Array([0x30,0x81,0x01,0]),new Uint8Array([0x30,0x02,0x05,0]),new Uint8Array([0x30,0x82,0,1,0])]) assert.throws(()=>inspectCertificate(input),/certificate|DER/);
  assert.throws(()=>inspectCertificate(pemOf(Buffer.from('not a certificate'))),/not an X.509 certificate/);
});
test('invalid Base64, noncanonical padding, unrelated input and empty input are rejected', () => {
  for (const body of ['%%%','AB==','AAAA=','AA=A','A','AAAA===']) assert.throws(()=>inspectCertificate('-----BEGIN CERTIFICATE-----\n'+body+'\n-----END CERTIFICATE-----'),/Base64|CERTIFICATE/);
  for (const input of ['', '   ', 'hello', 'https://example.com/cert.pem', fixtures.ec.replace('END CERTIFICATE','END PUBLIC KEY')]) assert.throws(()=>inspectCertificate(input));
});
test('the input bound applies before decoding or parser work', () => {
  assert.throws(()=>decodeCertificate('A'.repeat(CERTIFICATE_INPUT_LIMIT+1)),/256 KiB/);
  assert.throws(()=>decodeCertificate(new Uint8Array(CERTIFICATE_INPUT_LIMIT+1)),/256 KiB/);
});
test('fingerprints cover the full certificate and not just its subject public key', () => {
  const cert = new crypto.X509Certificate(fixtures.rsa), report = inspectCertificate(fixtures.rsa,now);
  const spki = cert.publicKey.export({type:'spki',format:'der'});
  assert.notEqual(report.fingerprints.find(row=>row.algorithm==='SHA-256').hex,crypto.createHash('sha256').update(spki).digest('hex'));
});
test('comparison accepts exact hex and colon forms but rejects invalid lengths, bad separators and other representations', () => {
  for (const row of inspectCertificate(fixtures.ec,now).fingerprints) {
    for (const input of [row.hex,row.hex.toUpperCase(),displayCertificateFingerprint(row,'colon'),row.hex.match(/../g).join(' ')]) assert.equal(compareCertificateFingerprint(input,row).state,'match');
    assert.equal(compareCertificateFingerprint('00'.repeat(row.hex.length/2),row).state,'mismatch');
    for(const input of ['aa',row.base64,'SHA256:'+row.base64,row.hex+':',row.hex.slice(2),'00:11-22']) assert.equal(compareCertificateFingerprint(input,row).state,'invalid');
    assert.equal(compareCertificateFingerprint(' \n ',row).state,'empty');
  }
});
test('colon, plain Hex and Base64 displays preserve leading zeros and mark only legacy digests', () => {
  const row={hex:'0001feff',base64:'AAH+/w==',algorithm:'MD5',legacy:true};
  assert.equal(displayCertificateFingerprint(row,'colon'),'00:01:FE:FF');assert.equal(displayCertificateFingerprint(row,'hex'),'0001FEFF');assert.equal(displayCertificateFingerprint(row,'base64'),'AAH+/w==');
  const results=inspectCertificate(fixtures.ec,now).fingerprints;assert.deepEqual(results.filter(row=>row.legacy).map(row=>row.algorithm),['SHA-1','MD5']);
});
test('schema parsing is bounded for hostile ASN.1 nesting', () => {
  let encoded=Buffer.from([0x05,0]);
  for(let i=0;i<90;i++) { const len=encoded.length;const header=len<128?Buffer.from([0x30,len]):len<256?Buffer.from([0x30,0x81,len]):Buffer.from([0x30,0x82,len>>>8,len&255]);encoded=Buffer.concat([header,encoded]); }
  assert.throws(()=>inspectCertificate(encoded),/could not be parsed/);
});
