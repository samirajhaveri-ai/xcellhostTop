const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const cache = new Map();
const load = file => {
  const resolved = path.resolve(file); if (cache.has(resolved)) return cache.get(resolved);
  const exports = {}; cache.set(resolved, exports);
  const localRequire = name => name.startsWith('.') ? load(path.resolve(path.dirname(resolved), name + '.ts')) : require(name);
  new Function('exports', 'require', ts.transpileModule(fs.readFileSync(resolved, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)(exports, localRequire);
  return exports;
};

const { parseDnssecKey, parseDnssecDs, parseDnssecSignature, dnssecDigest, dnssecAnalysis, checkDnssec, dnssecReportCsv, dnssecExportReport } = load('src/app/core/dnssec-check.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const keyValue='256 3 5 AQOeiiR0GOMYkDshWoSKz9XzfwJr1AYtsmx3TGkJaNXVbfi/2pHm822aJ5iI9BMzNXxeYCmZDRD99WYwYqUSdjMmmAphXdvxegXd/M5+X7OrzKBaMbCVdFLUUh6DhweJBjEVv5f2wwjM9XzcnOf+EPbtG9DMBmADjFDc2w/rljwvFw==';
const rec=(name,type,data,TTL=300)=>({name:name+'.',type,data,TTL});
const sig=(covered='A',signer='example.com',inc='20260101000000',exp='20271231000000')=>`${covered} 13 2 300 ${exp} ${inc} 12345 ${signer}. AQAB`;
const reply=(Answer=[],AD=false,Status=0,Authority=[])=>({Status,AD,Answer,Authority});
const mock=(t,handler)=>{const original=global.fetch;global.fetch=async(url,options)=>{const raw=await handler(new URL(url),options);return {ok:true,json:async()=>raw};};t.after(()=>global.fetch=original);};
const signed=(u)=>{
  const name=u.searchParams.get('name'),type=u.searchParams.get('type');
  if(type==='A')return reply([rec(name,1,'192.0.2.1'),rec(name,46,sig())],true);
  if(type==='SOA')return reply([rec('example.com',6,'ns.example.com. hostmaster.example.com. 1 3600 600 86400 300')],true);
  if(type==='DNSKEY')return reply([rec('example.com',48,keyValue),rec('example.com',46,sig('DNSKEY'))],true);
  return reply([rec('example.com',43,'60485 5 1 0000000000000000000000000000000000000000')],true);
};

test('DNSKEY parsing calculates the RFC4034 key-tag vector and retains flags',()=>{
  const key=parseDnssecKey(keyValue);assert.equal(key.keyTag,60485);assert.equal(key.zoneKey,true);assert.equal(key.secureEntry,false);assert.equal(key.protocol,3);
  assert.equal(parseDnssecKey('385 3 13 AQAB').revoked,true);assert.equal(parseDnssecKey('257 3 13 AQAB').secureEntry,true);assert.equal(parseDnssecKey('256 3 1 AQAB').keyTag,null);
  for(const value of ['65536 3 13 AQAB','256 256 13 AQAB','256 3 256 AQAB','256 3 13 ???','256 3 13','negative 3 13 AQAB'])assert.equal(parseDnssecKey(value),null);
});
test('DS comparisons use canonical owner + key RDATA and the independent RFC4034 digest vector',async()=>{
  const digest=await dnssecDigest('DSKEY.EXAMPLE.COM.',parseDnssecKey(keyValue),1);assert.equal(digest,'2BB183AF5F22588179A53B0A98631FAD1A292118');
  assert.equal((await dnssecDigest('dskey.example.com',parseDnssecKey(keyValue),2)).length,64);assert.equal((await dnssecDigest('dskey.example.com',parseDnssecKey(keyValue),4)).length,96);assert.equal(await dnssecDigest('dskey.example.com',parseDnssecKey(keyValue),3),null);
  assert.equal(parseDnssecDs('60485 5 1 (2BB183AF5F22588179A53B0A 98631FAD1A292118)').digest,digest);
  assert.equal(parseDnssecDs('60485 5 2 DEAD'),null);assert.equal(parseDnssecDs('65536 5 1 '+digest),null);assert.equal(parseDnssecDs('1 13 200 AABB').digestType,200);
});
test('RRSIG parsing distinguishes time windows, validates dates and handles uint32 wrap',()=>{
  const now=Date.parse('2026-11-13T00:00:00Z');assert.equal(parseDnssecSignature(sig(),now).timing,'CURRENT');assert.equal(parseDnssecSignature(sig('A','example.com','20250101000000','20260101000000'),now).timing,'EXPIRED');assert.equal(parseDnssecSignature(sig('A','example.com','20270101000000','20280101000000'),now).timing,'NOT_YET');
  assert.equal(parseDnssecSignature(sig('A','example.com','20260230000000'),now),null);assert.equal(parseDnssecSignature('A 13 2 300 4294967296 0 1 example.com. AQAB',now),null);
  assert.equal(parseDnssecSignature('A 13 2 300 100 4294967200 1 example.com. AQAB',4294967290*1000).timing,'CURRENT');assert.equal(parseDnssecSignature('A 13 2 300 2147483649 0 1 example.com. AQAB',now).timing,'UNKNOWN');
});
test('validating queries request DO=1 CD=0, discover the real SOA zone and do not guess two labels',async t=>{
  const calls=[];mock(t,(u,o)=>{calls.push({url:u,options:o});return signed(u);});const result=await checkDnssec('https://WWW.Example.com/path','google');
  assert.equal(result.domain,'www.example.com');assert.equal(result.zone,'example.com');assert.equal(result.outcome,'VALIDATED');assert.equal(calls.length,4);assert.equal(result.keys.length,1);assert.equal(result.signatures.length,2);
  for(const {url,options} of calls){assert.equal(url.searchParams.get('do'),'1');assert.equal(url.searchParams.get('cd'),'0');assert.equal(url.searchParams.get('edns_client_subnet'),'0.0.0.0/0');assert.equal(options.credentials,'omit');}
  assert.equal(calls.find(x=>x.url.searchParams.get('type')==='DNSKEY').url.searchParams.get('name'),'example.com');
  assert.match(dnssecAnalysis(result).title,/resolver/);
});
test('DS matching requires a matching digest, not only matching tags or algorithms',async t=>{
  const correct=await dnssecDigest('example.com',parseDnssecKey(keyValue),2);let mismatch=false;
  mock(t,u=>u.searchParams.get('type')==='DS'?reply([rec('example.com',43,'60485 5 2 '+(mismatch?'0'.repeat(64):correct))],true):signed(u));
  assert.equal((await checkDnssec('example.com','google')).delegations[0].match,'MATCH');mismatch=true;const result=await checkDnssec('example.com','google');assert.equal(result.delegations[0].match,'NO_MATCH');assert.equal(result.outcome,'VALIDATED');assert.equal(dnssecAnalysis(result).diagnostics.find(x=>x.label==='DS digest comparison').state,'REVIEW');
});
test('unsigned zones are not confused with signed parent denial signatures',async t=>{
  mock(t,u=>{const type=u.searchParams.get('type');return type==='A'?reply([rec('example.com',1,'192.0.2.1')]):type==='SOA'?reply([rec('example.com',6,'ns.example.com. hostmaster.example.com. 1 2 3 4 5')]):type==='DS'?reply([],true,0,[rec('com',46,sig('NSEC3','com'))]):reply([]);});
  const result=await checkDnssec('example.com','google');assert.equal(result.outcome,'UNSIGNED');assert.equal(result.signatures.length,1);assert.match(dnssecAnalysis(result).summary,/not authenticated/);
});
test('keys without AD are signing evidence, not proof of a valid chain',async t=>{
  mock(t,u=>({...signed(u),AD:false}));const result=await checkDnssec('example.com','cloudflare');assert.equal(result.outcome,'INCOMPLETE');assert.match(dnssecAnalysis(result).summary,/Presence alone/);
});
test('SERVFAIL with a successful CD=1 retry is suspected failure and preserves diagnostic provenance',async t=>{
  const calls=[];mock(t,u=>{calls.push(u);return u.searchParams.get('cd')==='0'?reply([],false,2):signed(u);});const result=await checkDnssec('example.com','cloudflare');assert.equal(result.outcome,'SUSPECTED_FAILURE');assert.equal(calls.length,8);assert(result.keys.every(key=>key.diagnostic));assert.equal(result.queries.filter(q=>q.checkingDisabled).every(q=>!q.authenticated),true);assert.equal(result.queries.filter(q=>!q.checkingDisabled).every(q=>q.status===2),true);
});
test('SERVFAIL, transport errors and missing SOA never become unsigned or validated',async t=>{
  let mode='fail';mock(t,u=>{if(mode==='transport')throw new TypeError('offline');if(mode==='nozone')return reply([rec('alias.other.net',1,'192.0.2.1')]);return reply([],false,2);});
  assert.equal((await checkDnssec('example.com','google')).outcome,'INDETERMINATE');mode='transport';const failed=await checkDnssec('example.com','google');assert.equal(failed.outcome,'INDETERMINATE');assert(failed.queries.every(q=>q.error));mode='nozone';const unknown=await checkDnssec('sub.example.com','google');assert.equal(unknown.zone,null);assert.equal(unknown.queries.length,2);
});
test('authenticated NXDOMAIN is a protected denial, unauthenticated NXDOMAIN is separate',async t=>{
  let ad=true;mock(t,u=>u.searchParams.get('type')==='A'?reply([],ad,3,[rec('example.com',6,'ns.example.com. hostmaster.example.com. 1 2 3 4 5')]):signed(u));const secure=await checkDnssec('missing.example.com','google');assert.equal(secure.outcome,'VALIDATED');assert.match(dnssecAnalysis(secure).title,/denial/);ad=false;assert.equal((await checkDnssec('missing.example.com','google')).outcome,'NXDOMAIN');
});
test('unexpected CD=1 or truncated replies cannot authenticate results',async t=>{
  let truncated=false;mock(t,u=>({...signed(u),CD:!truncated,TC:truncated}));assert.notEqual((await checkDnssec('example.com','google')).outcome,'VALIDATED');truncated=true;assert.equal((await checkDnssec('example.com','google')).outcome,'INDETERMINATE');
});
test('cancellation and invalid inputs stop the check instead of returning stale output',async t=>{
  const c=new AbortController();mock(t,async(_u,o)=>{c.abort();o.signal.throwIfAborted();});await assert.rejects(checkDnssec('example.com','google',c.signal),{name:'AbortError'});await assert.rejects(checkDnssec('not a domain','google'));await assert.rejects(checkDnssec('example.com','invalid'));
});
test('DNSSEC CSV, JSON and PDF preserve original evidence and the dedicated link',async t=>{
  mock(t,signed);const report=await checkDnssec('example.com','google'),snapshot=dnssecExportReport(report),findings=dnssecAnalysis(report),csv=dnssecReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('Checking disabled'));assert(csv.includes(keyValue));assert.equal(JSON.parse(JSON.stringify(report)).queries[0].raw.Status,0);
  const pdf=Buffer.from(dnsReportPdf(snapshot,{toolPath:'dnssec-check',analysis:{...dnsReportAnalysis(snapshot),summary:findings.summary,checks:findings.diagnostics,tips:findings.recommendations}}));assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/dnssec-check?domain=example.com'));
  report.queries[0].records[0].value='=UNTRUSTED(1)';assert(dnssecReportCsv(report).includes("'=UNTRUSTED(1)"));
});


