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



const { parsePtrAddress, parsePtrRecord, ptrHostnameHint, lookupPublicIp, lookupPtr, ptrAnalysis, ptrReportCsv, ptrExportReport, PTR_FORWARD_LIMIT } = load('src/app/core/ptr-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const answer=(name,data,type=12,TTL=300)=>({name:name+'.',data,type,TTL});
const response=(Answer=[],Status=0)=>({ok:true,json:async()=>({Status,AD:true,Answer})});
function mock(t,handler){const original=global.fetch;t.after(()=>global.fetch=original);global.fetch=(url,options)=>handler(new URL(url),options);}

test('IPv4 parsing builds the correct reverse name and rejects legacy or non-address inputs',()=>{
  assert.deepEqual(parsePtrAddress(' 8.8.8.8 '),{ip:'8.8.8.8',family:4,expanded:'8.8.8.8',reverseName:'8.8.8.8.in-addr.arpa'});assert.equal(parsePtrAddress('192.0.2.42').reverseName,'42.2.0.192.in-addr.arpa');
  for(const invalid of ['','8.08.8.8','256.1.1.1','127.1','0x08080808','8.8.8.8:53','https://8.8.8.8','8.8.8.8/32','example.com','[8.8.8.8]'])assert.throws(()=>parsePtrAddress(invalid),undefined,invalid);
});

test('IPv6 parsing handles compression, ties, embedded IPv4 and the RFC 3596 reverse-name vector',()=>{
  const address=parsePtrAddress('[2001:4860:4860:0:0:0:0:8888]');assert.equal(address.ip,'2001:4860:4860::8888');assert.equal(address.expanded,'2001:4860:4860:0000:0000:0000:0000:8888');
  assert.equal(parsePtrAddress('::').ip,'::');assert.equal(parsePtrAddress('::1').ip,'::1');assert.equal(parsePtrAddress('2001:db8::').ip,'2001:db8::');assert.equal(parsePtrAddress('2001:0:0:1:0:0:1:1').ip,'2001::1:0:0:1:1');
  assert.equal(parsePtrAddress('::ffff:192.0.2.128').expanded,'0000:0000:0000:0000:0000:ffff:c000:0280');
  assert.equal(parsePtrAddress('4321:0:1:2:3:4:567:89ab').reverseName,'b.a.9.8.7.6.5.0.4.0.0.0.3.0.0.0.2.0.0.0.1.0.0.0.0.0.0.0.1.2.3.4.ip6.arpa');
  for(const invalid of [':',':::1','1::2::3','1:2:3:4:5:6:7','1:2:3:4:5:6:7:8:9','1:2:3:4:5:6:7::8','::gggg','fe80::1%eth0','[::1]:53','::ffff:192.0.2.999'])assert.throws(()=>parsePtrAddress(invalid),undefined,invalid);
});

test('PTR hostnames retain raw values and provider hints match only whole hostname suffixes',()=>{
  const entry=parsePtrRecord({name:'8.8.8.8.in-addr.arpa',type:'PTR',ttl:300,value:'DNS.Google.'});assert.equal(entry.hostname,'dns.google');assert.equal(entry.value,'DNS.Google.');assert.equal(entry.hint,'Google hostname');assert.equal(ptrHostnameHint('dns.google.attacker.net'),null);assert.equal(ptrHostnameHint('notdns.google'),null);
  for(const value of ['https://example.com','192.0.2.1','a_bad.example.net','<script>','localhost.'])assert.equal(parsePtrRecord({name:'reverse.example',type:'PTR',ttl:60,value}).valid,false);
});

test('PTR lookup deduplicates valid targets and distinguishes matches, mismatches, errors, missing names and empty answers',async t=>{
  const calls=[];mock(t,url=>{const name=url.searchParams.get('name'),type=url.searchParams.get('type');calls.push([name,type]);
    if(type==='PTR')return response([answer(name,'alias.reverse.example.',5),...['DNS.Google.','dns.google.','mismatch.example.net.','error.example.net.','missing.example.net.','empty.example.net.','https://invalid.example/'].map(value=>answer('alias.reverse.example',value))]);
    return name==='dns.google'?response([answer(name,'8.8.8.8',1)]):name==='mismatch.example.net'?response([answer(name,'8.8.4.4',1)]):name==='error.example.net'?response([],2):name==='missing.example.net'?response([],3):response();
  });
  const report=await lookupPtr('8.8.8.8','google',true);assert.equal(report.queryCount,6);assert.deepEqual(calls[0],['8.8.8.8.in-addr.arpa','PTR']);assert(calls.slice(1).every(call=>call[1]==='A'));assert(!calls.some(call=>call[0].includes('invalid')));
  assert.deepEqual(report.forwardChecks.map(check=>check.state),['MATCH','MISMATCH','ERROR','NXDOMAIN','NO_ADDRESS']);assert.equal(ptrAnalysis(report).matched,1);assert.equal(report.hosts[0].raw.Answer.length,8);assert.equal(report.domain,'8.8.8.8');
});

test('IPv6 forward confirmation uses AAAA and compares normalized address values',async t=>{
  const calls=[];mock(t,url=>{const name=url.searchParams.get('name'),type=url.searchParams.get('type');calls.push([name,type,url.hostname]);return type==='PTR'?response([answer(name,'dns.google.')]):response([answer(name,'2001:4860:4860:0000:0000:0000:0000:8888',28)]);});
  const report=await lookupPtr('2001:4860:4860::8888','cloudflare',true);assert.equal(report.forwardChecks[0].state,'MATCH');assert.equal(calls[1][1],'AAAA');assert(calls.every(call=>call[2]==='cloudflare-dns.com'));assert(calls[0][0].endsWith('.ip6.arpa'));
});

test('forward checks can be disabled and are bounded without dropping PTR values',async t=>{
  let calls=0;mock(t,url=>{calls++;return url.searchParams.get('type')==='PTR'?response(Array.from({length:PTR_FORWARD_LIMIT+2},(_,i)=>answer('8.8.8.8.in-addr.arpa','h'+i+'.example.net.'))):response();});
  let report=await lookupPtr('8.8.8.8','google',false);assert.equal(calls,1);assert(report.forwardChecks.every(check=>check.state==='NOT_CHECKED'));calls=0;report=await lookupPtr('8.8.8.8','google',true);assert.equal(calls,1+PTR_FORWARD_LIMIT);assert.equal(report.entries.length,PTR_FORWARD_LIMIT+2);assert.equal(report.forwardChecks.filter(check=>check.skippedReason).length,2);
});

test('reverse empty, NXDOMAIN and resolver failures remain different outcomes',async t=>{
  let status=0;mock(t,()=>response([],status));let report=await lookupPtr('192.0.2.1','google',true);assert.equal(report.hosts[0].status,'NOERROR');assert.match(ptrAnalysis(report).diagnostics[0].detail,/No PTR/);status=3;report=await lookupPtr('192.0.2.1','google',true);assert.equal(report.hosts[0].status,'NXDOMAIN');assert.match(ptrAnalysis(report).diagnostics[0].detail,/does not mean/);status=2;report=await lookupPtr('192.0.2.1','google',true);assert.equal(report.hosts[0].status,'ERROR');assert.match(ptrAnalysis(report).diagnostics[0].detail,/SERVFAIL/);
});

test('cancellation during forward checking rejects without publishing a partial PTR report',async t=>{
  const controller=new AbortController();mock(t,async(url,options)=>{if(url.searchParams.get('type')==='PTR')return response([answer('8.8.8.8.in-addr.arpa','dns.google.')]);controller.abort();options.signal.throwIfAborted();});await assert.rejects(lookupPtr('8.8.8.8','google',true,controller.signal),{name:'AbortError'});
});

test('public-IP detection uses ipify only when called, validates its response and reports failures',async t=>{
  let mode='valid',calls=0;mock(t,(url,options)=>{calls++;assert.equal(url.hostname,'api64.ipify.org');assert.equal(options.credentials,'omit');return {ok:mode!=='failed',json:async()=>mode==='bad'?{ip:'not-an-ip'}:{ip:'2001:4860:4860:0:0:0:0:8888'}};});assert.equal(calls,0);assert.equal(await lookupPublicIp(),'2001:4860:4860::8888');mode='bad';await assert.rejects(lookupPublicIp());mode='failed';await assert.rejects(lookupPublicIp(),/manually/);
});

test('PTR CSV, JSON and PDF exports preserve reverse names, raw values, statuses and a dedicated IP share link',async t=>{
  mock(t,url=>url.searchParams.get('type')==='PTR'?response([answer('8.8.8.8.in-addr.arpa','DNS.Google.')]):response([answer('dns.google','8.8.8.8',1)]));const report=await lookupPtr('8.8.8.8','google',true),snapshot=ptrExportReport(report),findings=ptrAnalysis(report),csv=ptrReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('"MATCH"'));assert(csv.includes('DNS.Google.'));assert.equal(snapshot.hosts.length,2);assert.equal(JSON.parse(JSON.stringify(report)).entries[0].value,'DNS.Google.');
  const pdf=Buffer.from(dnsReportPdf(snapshot,{toolPath:'ptr-lookup',analysis:{...dnsReportAnalysis(snapshot),checks:findings.diagnostics,tips:findings.recommendations}}));assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/ptr-lookup?ip=8.8.8.8'));
  const injected=structuredClone(report);injected.entries[0].value='=UNTRUSTED(1)';assert(ptrReportCsv(injected).includes("'=UNTRUSTED(1)"));
});
