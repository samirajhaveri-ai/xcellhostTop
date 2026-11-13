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

const { parseNsRecord, nsProvider, lookupNs, nsAddresses, nsAnalysis, nsReportCsv, nsExportReport, NS_ADDRESS_LIMIT } = load('src/app/core/ns-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const answer=(name,data,type=2,TTL=300)=>({name:name+'.',data,type,TTL});
const response=(Answer=[],Status=0)=>({ok:true,json:async()=>({Status,AD:true,Answer})});
function mock(t,handler){const original=global.fetch;t.after(()=>global.fetch=original);global.fetch=(url,options)=>handler(new URL(url),options);}

test('NS parsing preserves originals, checks hostname syntax and matches provider suffix boundaries',()=>{
  const parsed=parseNsRecord({name:'example.com',type:'NS',ttl:3600,value:'NS1.Example.COM.'});assert.equal(parsed.server,'ns1.example.com');assert.equal(parsed.inZone,true);assert.equal(parsed.value,'NS1.Example.COM.');
  assert.equal(parseNsRecord({name:'example.com',ttl:1,type:'NS',value:'ns1.example.com.attacker.net.'}).inZone,false);
  for(const value of ['.','192.0.2.1','https://ns.example.com','ns.example.com?x=1','ns_bad.example.net','<script>',' ns.example.com.'])assert.equal(parseNsRecord({name:'example.com',type:'NS',ttl:60,value}).valid,false,value);
  assert.equal(nsProvider('aria.ns.cloudflare.com.'),'Cloudflare');assert.equal(nsProvider('ns-1.awsdns-08.co.uk.'),'Amazon Route 53');assert.equal(nsProvider('notns.cloudflare.com'),null);assert.equal(nsProvider('aria.ns.cloudflare.com.attacker.net'),null);
});

test('lookup queries exact input once, resolves each unique valid server and retains aliases and raw responses',async t=>{
  const calls=[];mock(t,url=>{const name=url.searchParams.get('name'),type=url.searchParams.get('type');calls.push([name,type,url.hostname]);return type==='NS'?response([answer('www.example.com','example.com.',5),answer('example.com','ARIA.ns.cloudflare.com.'),answer('example.com','aria.ns.cloudflare.com.'),answer('example.com','ns1.example.com.'),answer('example.com','https://invalid.example/')]):type==='A'?response([answer(name,'192.0.2.1',1)]):response([answer(name,'2001:db8::1',28)]);});
  const report=await lookupNs('https://WWW.example.com/path','cloudflare',true);
  assert.equal(report.domain,'www.example.com');assert.equal(report.queryCount,5);assert.equal(report.addressChecks.length,2);assert(calls.every(call=>call[2]==='cloudflare-dns.com'));assert.deepEqual(calls[0].slice(0,2),['www.example.com','NS']);assert(!calls.some(call=>call[0].includes('invalid')));
  assert.equal(nsAnalysis(report).serverCount,2);assert.equal(nsAnalysis(report).invalidCount,1);assert.equal(report.hosts[0].raw.Answer.length,5);assert.equal(nsAnalysis(report).resolved,2);assert.equal(nsAddresses(report.addressChecks[0],'A')[0],'192.0.2.1');
});

test('address checks can be disabled or bounded without dropping nameserver records',async t=>{
  let calls=0;mock(t,url=>{calls++;return url.searchParams.get('type')==='NS'?response(Array.from({length:NS_ADDRESS_LIMIT+2},(_,index)=>answer('example.com','ns'+index+'.example.net.'))):response();});
  let report=await lookupNs('example.com','google',false);assert.equal(calls,1);assert.equal(report.addressChecks.filter(check=>check.skippedReason).length,NS_ADDRESS_LIMIT+2);
  calls=0;report=await lookupNs('example.com','google',true);assert.equal(calls,1+2*NS_ADDRESS_LIMIT);assert.equal(report.entries.length,NS_ADDRESS_LIMIT+2);assert.equal(report.addressChecks.filter(check=>check.skippedReason).length,2);
});

test('partial failures preserve good addresses and nameserver aliases are flagged separately',async t=>{
  mock(t,url=>{const name=url.searchParams.get('name'),type=url.searchParams.get('type');return type==='NS'?response([answer('example.com','ns1.example.net.')]):type==='A'?response([answer(name,'alias.example.net.',5),answer('alias.example.net','192.0.2.5',1)]):response([],2);});
  const report=await lookupNs('example.com','google',true),findings=nsAnalysis(report);assert.equal(nsAddresses(report.addressChecks[0],'A')[0],'192.0.2.5');assert.equal(report.addressChecks[0].ipv6.status,'ERROR');assert.equal(findings.diagnostics.find(check=>check.label==='Server addresses').state,'REVIEW');assert.equal(findings.diagnostics.find(check=>check.label==='Nameserver aliases').state,'REVIEW');
});

test('empty NS, nonexistent input and resolver failures are separate states with honest scope diagnostics',async t=>{
  let status=0;mock(t,()=>response([],status));let report=await lookupNs('sub.example.com','google',true);assert.equal(report.hosts[0].status,'NOERROR');assert.equal(report.queryCount,1);assert.match(nsAnalysis(report).diagnostics[0].detail,/subdomain/);assert.match(nsAnalysis(report).diagnostics.find(check=>check.label==='Delegation scope').detail,/not compared/);
  status=3;report=await lookupNs('sub.example.com','google',true);assert.equal(report.hosts[0].status,'NXDOMAIN');status=2;report=await lookupNs('example.com','google',true);assert.equal(report.hosts[0].status,'ERROR');assert.match(nsAnalysis(report).diagnostics[0].detail,/SERVFAIL/);
});

test('cancelling NS and address lookups rejects instead of returning stale reports',async t=>{
  const controller=new AbortController();mock(t,async(url,options)=>{if(url.searchParams.get('type')==='NS')return response([answer('example.com','ns.example.net.')]);controller.abort();options.signal.throwIfAborted();});await assert.rejects(lookupNs('example.com','google',true,controller.signal),{name:'AbortError'});
});

test('exports preserve raw NS, provider hints, address errors and a dedicated PDF link',async t=>{
  mock(t,url=>url.searchParams.get('type')==='NS'?response([answer('example.com','Aria.ns.cloudflare.com.')]):url.searchParams.get('type')==='A'?response([answer('aria.ns.cloudflare.com','192.0.2.1',1)]):response([],2));
  const report=await lookupNs('example.com','google',true),csv=nsReportCsv(report),snapshot=nsExportReport(report),findings=nsAnalysis(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('Aria.ns.cloudflare.com.'));assert(csv.includes('Cloudflare'));assert(csv.includes('SERVFAIL'));assert.equal(snapshot.hosts.length,2);assert.equal(snapshot.hosts[1].status,'ERROR');assert.equal(snapshot.hosts[1].records.length,1);
  const pdf=Buffer.from(dnsReportPdf(snapshot,{toolPath:'ns-lookup',analysis:{...dnsReportAnalysis(snapshot),checks:findings.diagnostics,tips:findings.recommendations}}));assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/ns-lookup?domain=example.com'));assert.equal(JSON.parse(JSON.stringify(report)).entries[0].value,'Aria.ns.cloudflare.com.');
  const injected=structuredClone(report);injected.entries[0].value='=UNTRUSTED(1)';assert(nsReportCsv(injected).includes("'=UNTRUSTED(1)"));
});

test('a nameserver at the queried owner is merged correctly in PDF snapshots',async t=>{
  mock(t,url=>url.searchParams.get('type')==='NS'?response([answer('example.com','example.com.')]):url.searchParams.get('type')==='A'?response([answer('example.com','192.0.2.1',1)]):response());
  const report=await lookupNs('example.com','google',true),snapshot=nsExportReport(report);assert.equal(snapshot.hosts.length,1);assert.deepEqual(snapshot.hosts[0].records.map(record=>record.type),['NS','A']);
});
