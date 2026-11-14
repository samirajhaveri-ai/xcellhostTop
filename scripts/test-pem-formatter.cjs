const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const ts = require('typescript');
const api = {};
new Function('exports', ts.transpileModule(fs.readFileSync('src/app/core/pem-formatter.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(api);
const { PEM_INPUT_LIMIT, parsePemBlocks, formatPem } = api;
const { ec, rsa } = require('./fixtures/certificate-fingerprint.json');
const options = {width:64,lineEnding:'LF',finalNewline:true};
const makePem = (label,body) => '-----BEGIN '+label+'-----\n'+body+'\n-----END '+label+'-----';

test('all output settings preserve independent certificate bytes and OpenSSL fingerprints', () => {
  for(const pem of [ec,rsa])for(const width of [0,64,76])for(const lineEnding of ['LF','CRLF'])for(const finalNewline of [false,true]){
    const result=formatPem(pem,{width,lineEnding,finalNewline}), eol=lineEnding==='LF'?'\n':'\r\n';
    assert.deepEqual(new crypto.X509Certificate(result.output).raw,new crypto.X509Certificate(pem).raw);
    assert.equal(result.output.endsWith(eol),finalNewline);
    if(lineEnding==='CRLF')assert(!result.output.replace(/\r\n/g,'').includes('\n'));
    const body=result.output.trim().split(eol).slice(1,-1);assert(body.every(line=>width===0||line.length<=width));
    if(width===0)assert.equal(body.length,1);else assert(body.slice(0,-1).every(line=>line.length===width));
    assert.equal(result.outputLines,result.output.trimEnd().split(eol).length);
  }
});
test('BOM, inline PEM, mixed line endings and whitespace are normalized idempotently', () => {
  const raw=new crypto.X509Certificate(ec).raw, b64=raw.toString('base64');
  for(const input of [ec.replace(/\n/g,''),'\ufeff \r\n'+ec.replace(/\n/g,'\r')+'\t\r\n',makePem('CERTIFICATE',b64.match(/.{1,17}/g).join(' \t\n'))]){
    const result=formatPem(input,options);assert.deepEqual(new crypto.X509Certificate(result.output).raw,raw);assert.equal(formatPem(result.output,options).output,result.output);
  }
});
test('bundle order and every decoded byte are preserved without partial extraction', () => {
  const result=formatPem(ec+'\n\n'+rsa,options);assert.equal(result.blocks.length,2);
  assert.equal(result.totalBytes,new crypto.X509Certificate(ec).raw.length+new crypto.X509Certificate(rsa).raw.length);
  assert.deepEqual(result.blocks.map(block=>Buffer.from(block.base64,'base64')),[new crypto.X509Certificate(ec).raw,new crypto.X509Certificate(rsa).raw]);
  assert(result.output.includes('-----END CERTIFICATE-----\n\n-----BEGIN CERTIFICATE-----'));
  assert.throws(()=>formatPem(ec+'\nnotes that must not disappear\n'+rsa,options),/outside/);
});
test('legacy encrypted private keys remain decryptable with the same key and passphrase', () => {
  const key=crypto.generateKeyPairSync('rsa',{modulusLength:1024}).privateKey;
  const encrypted=key.export({format:'pem',type:'pkcs1',cipher:'aes-256-cbc',passphrase:'test-only-passphrase'}).toString();
  const result=formatPem(encrypted,{...options,lineEnding:'CRLF'});
  assert.equal(result.blocks[0].headers.length,2);assert.equal(result.blocks[0].privateMaterial,true);assert.match(result.blocks[0].encryptionHint,/retained/);
  const restored=crypto.createPrivateKey({key:result.output,passphrase:'test-only-passphrase'});
  assert.deepEqual(crypto.createPublicKey(restored).export({type:'spki',format:'der'}),crypto.createPublicKey(key).export({type:'spki',format:'der'}));
  assert.deepEqual(parsePemBlocks(encrypted)[0].base64,result.blocks[0].base64);
  for(const width of [0,76])assert.throws(()=>formatPem(encrypted,{...options,width}),/64-character/);
});
test('PKCS8 encryption is untouched and requires no passphrase to format', () => {
  const key=crypto.generateKeyPairSync('ec',{namedCurve:'prime256v1'}).privateKey;
  const encrypted=key.export({format:'pem',type:'pkcs8',cipher:'aes-256-cbc',passphrase:'another-test-passphrase'}).toString();
  const result=formatPem(encrypted,options);assert.equal(result.blocks[0].encryptionHint,'Encrypted PKCS#8 label');assert(result.blocks[0].privateMaterial);
  const restored=crypto.createPrivateKey({key:result.output,passphrase:'another-test-passphrase'});
  assert.deepEqual(crypto.createPublicKey(restored).export({type:'spki',format:'der'}),crypto.createPublicKey(key).export({type:'spki',format:'der'}));
});
test('missing padding is restored only when canonical bytes are unambiguous', () => {
  for(const body of ['AA','AAA','AQIDBA','AQIDBAU']){
    const result=formatPem(makePem('PUBLIC KEY',body),options), block=result.blocks[0];
    assert(block.paddingRestored);assert.equal(block.base64,Buffer.from(body,'base64').toString('base64'));
  }
  assert.equal(formatPem(makePem('PUBLIC KEY','AQID'),options).blocks[0].paddingRestored,false);
  for(const body of ['A','AB','AB==','AAF','AAF=','AA=','A===','AA=A','AA-_','%%%','AAAA==='])assert.throws(()=>formatPem(makePem('PUBLIC KEY',body),options),/Base64/);
});
test('invalid boundaries and malformed later blocks reject the entire operation', () => {
  for(const input of ['', ' ', 'AAAA',ec.replace('END CERTIFICATE','END PUBLIC KEY'),'prefix '+ec,ec+' suffix',makePem('CERTIFICATE',''),makePem('CERTIFICATE',ec),ec+'\n'+makePem('PUBLIC KEY','not!base64')]) assert.throws(()=>formatPem(input,options));
});
test('unknown or incomplete legacy headers are rejected rather than silently dropped', () => {
  for(const headers of ['Proc-Type: 4,ENCRYPTED','DEK-Info: AES-256-CBC,00112233','Comment: secret-metadata','Proc-Type: 4,ENCRYPTED\nProc-Type: 4,ENCRYPTED\nDEK-Info: AES-256-CBC,00112233','Proc-Type: 4,ENCRYPTED\nDEK-Info: AES-256-CBC,NOTHEX'])assert.throws(()=>formatPem(makePem('RSA PRIVATE KEY',headers+'\n\nAQIDBA=='),options),/header/i);
  assert.throws(()=>formatPem(makePem('CERTIFICATE','Proc-Type: 4,ENCRYPTED\nDEK-Info: AES-256-CBC,00112233\n\nAQIDBA=='),options),/header/i);
});
test('labels are preserved safely and private-key labels are identified without inspecting key validity', () => {
  for(const label of ['CERTIFICATE','X509 CRL','CERTIFICATE REQUEST','PUBLIC KEY','RSA PRIVATE KEY','EC PRIVATE KEY','ENCRYPTED PRIVATE KEY','OPENSSH PRIVATE KEY','CUSTOM-DATA']){
    const result=formatPem(makePem(label,'AQIDBA=='),options);assert.equal(result.blocks[0].label,label);assert(result.output.startsWith('-----BEGIN '+label+'-----'));
    assert.equal(result.blocks[0].privateMaterial,label.endsWith('PRIVATE KEY'));assert.equal(result.blocks[0].bytes,4);
  }
  assert.match(formatPem(makePem('OPENSSH PRIVATE KEY','AQIDBA=='),options).blocks[0].encryptionHint,/not inspected/);
  for(const label of ['certificate','<script>','BAD  LABEL','BAD--LABEL','BAD_LABEL'])assert.throws(()=>formatPem(makePem(label,'AQID'),options));
});
test('block and UTF-8 input bounds fail before returning output', () => {
  const block=makePem('PUBLIC KEY','AQID');assert.equal(formatPem(Array(20).fill(block).join('\n'),options).blocks.length,20);
  assert.throws(()=>formatPem(Array(21).fill(block).join('\n'),options),/20 PEM blocks/);
  assert.throws(()=>formatPem('A'.repeat(PEM_INPUT_LIMIT+1),options),/1 MiB/);
  assert.throws(()=>formatPem('\u4f60'.repeat(Math.ceil(PEM_INPUT_LIMIT/3)),options),/1 MiB/);
});
test('unsupported options and PPK input fail with specific guidance', () => {
  for(const extra of [{width:1},{width:128},{lineEnding:'CR'},{finalNewline:'yes'}])assert.throws(()=>formatPem(ec,{...options,...extra}),/supported/);
  assert.throws(()=>formatPem('PuTTY-User-Key-File-3: ssh-ed25519\nEncryption: none',options),/PuTTY PPK/);
});
test('error messages never echo a payload and inputs are not persisted or transmitted', () => {
  const marker='TEST-PRIVATE-CONTENT-DO-NOT-LOG';
  try{formatPem(makePem('PRIVATE KEY',marker),options);assert.fail();}catch(error){assert(!error.message.includes(marker));}
  const source=fs.readFileSync('src/app/core/pem-formatter.ts','utf8');for(const token of ['fetch(', 'localStorage', 'sessionStorage', 'console.'])assert(!source.includes(token));
});
