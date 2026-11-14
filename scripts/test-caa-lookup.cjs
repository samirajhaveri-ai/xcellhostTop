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


const { parseCaaValue, lookupCaa, caaSetSummary, caaAnalysis, caaReportCsv } = load('src/app/core/caa-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const entry=(value,name='example.com')=>({name,ttl:300,rawValue:value,property:parseCaaValue(value)});
const response=(values=[],Status=0)=>({ok:true,json:async()=>({Status,AD:true,Answer:values.map(data=>({name:'example.com.',type:257,TTL:300,data}))})});
function mock(t,handler){const original=global.fetch;t.after(()=>global.fetch=original);global.fetch=(url,options)=>handler(new URL(url),options);}

test('CAA flags, tags and single values decode without confusing reserved bit 1 with critical bit 128',()=>{
  let property=parseCaaValue('128 ISSUE "letsencrypt.org; validationmethods=dns-01"');assert.equal(property.tag,'issue');assert.equal(property.critical,true);assert.equal(property.reservedBits,0);assert.equal(property.issuer,'letsencrypt.org');assert.equal(property.parameters,'validationmethods=dns-01');assert.equal(property.issueValid,true);
  property=parseCaaValue('1 issue letsencrypt.org');assert.equal(property.critical,false);assert.equal(property.reservedBits,1);
  assert.equal(parseCaaValue('0 iodef "mailto:security@example.com"').reportingValid,true);assert.equal(parseCaaValue('0 iodef "https://reports.example.com/caa"').reportingValid,true);assert.equal(parseCaaValue('0 iodef "javascript:alert(1)"').reportingValid,false);
  assert.equal(parseCaaValue('0 custom "a\\032b"').value,'a b');assert.equal(parseCaaValue('0 custom "a\\\"b"').value,'a"b');
});

test('CAA presentation rejects overflowing flags, invalid tags, multiple strings and broken quoting',()=>{
  for(const value of ['256 issue "example.net"','-1 issue "example.net"','0 issue_bad "x"','0 issue','0 issue "unfinished','0 issue "one" "two"','0 issue two words','0 custom "\\999"','0 custom "\\255"'])assert.equal(parseCaaValue(value),null,value);
  assert.equal(parseCaaValue('0 issue ""').issueValid,true);assert.equal(parseCaaValue('0 issue ""').issuer,null);
});

test('issuer grants are additive, empty or malformed issue values do not cancel valid grants',()=>{
  let set=[entry('0 issue ";"')];assert.equal(caaSetSummary(set,false).title,'No issuer grant in this set');
  set.push(entry('0 issue "ca.example.net; account=123"'));assert.deepEqual(caaSetSummary(set,false).issuers,['ca.example.net']);
  const malformed=entry('0 issue "%%%%%"');assert.equal(malformed.property.issueValid,false);assert.equal(caaSetSummary([malformed],false).title,'No issuer grant in this set');
  assert.deepEqual(caaSetSummary([malformed,...set],false).issuers,['ca.example.net']);
  assert.equal(parseCaaValue('0 issue "ca.example.net; invalid parameter"').issueValid,false);assert.equal(parseCaaValue('0 issue "\u00a0ca.example.net"').issueValid,false);
});

test('wildcard properties take precedence, otherwise wildcard summaries fall back to issue',()=>{
  const normal=entry('0 issue "normal.example.net"'),wild=entry('0 issuewild "wild.example.net"');
  assert.deepEqual(caaSetSummary([normal,wild],false).issuers,['normal.example.net']);assert.deepEqual(caaSetSummary([normal,wild],true).issuers,['wild.example.net']);assert.equal(caaSetSummary([normal],true).fallback,true);assert.deepEqual(caaSetSummary([normal],true).issuers,['normal.example.net']);assert.equal(caaSetSummary([wild],false).title,'No issue restriction in this set');assert.equal(caaSetSummary([normal,entry('0 issuewild ";"')],true).title,'No issuer grant in this set');
});

test('additional critical tags require review and owner names are never merged into one policy',async t=>{
  const normal=entry('0 issue "normal.example.net"');assert.equal(caaSetSummary([normal,entry('128 custom "value"')],false).review,true);assert.equal(caaSetSummary([normal,entry('0 custom "value"')],false).review,false);assert.equal(caaSetSummary([normal,entry('broken')],false).review,true);
  mock(t,()=>({ok:true,json:async()=>({Status:0,Answer:[{name:'first.example.com.',type:257,TTL:300,data:'0 issue "first.example.net"'},{name:'second.example.com.',type:257,TTL:300,data:'0 issue "second.example.net"'}]})}));const report=await lookupCaa('example.com','google');const sets=caaAnalysis(report).sets;assert.equal(sets.length,2);assert.deepEqual(sets[0].normal.issuers,['first.example.net']);assert.deepEqual(sets[1].normal.issuers,['second.example.net']);
});

test('lookup queries exact CAA name through the chosen resolver and preserves aliases and raw responses',async t=>{
  const calls=[];mock(t,url=>{calls.push(url);return {ok:true,json:async()=>({Status:0,AD:true,Answer:[{name:'www.example.com.',type:5,TTL:60,data:'example.com.'},{name:'example.com.',type:257,TTL:300,data:'0 issue "letsencrypt.org"'}]})};});
  const report=await lookupCaa('https://WWW.example.com/path','cloudflare');assert.equal(calls.length,1);assert.equal(calls[0].hostname,'cloudflare-dns.com');assert.equal(calls[0].searchParams.get('type'),'CAA');assert.equal(calls[0].searchParams.get('name'),'www.example.com');assert.equal(report.entries[0].name,'example.com');assert.equal(report.hosts[0].raw.Answer.length,2);assert.match(caaAnalysis(report).diagnostics.find(check=>check.label==='Lookup scope').detail,/Parent names/);
});

test('empty, missing and failed lookups do not claim unrestricted certificate issuance',async t=>{
  let status=0;mock(t,()=>response([],status));let report=await lookupCaa('sub.example.com','google');assert.equal(report.hosts[0].status,'NOERROR');assert.match(caaAnalysis(report).diagnostics[0].detail,/not evidence/);assert.equal(caaAnalysis(report).sets.length,0);
  status=3;report=await lookupCaa('sub.example.com','google');assert.equal(report.hosts[0].status,'NXDOMAIN');assert.match(caaAnalysis(report).diagnostics[0].detail,/not been evaluated/);
  status=2;report=await lookupCaa('example.com','google');assert.equal(report.hosts[0].status,'ERROR');assert.match(caaAnalysis(report).diagnostics[0].detail,/SERVFAIL/);
});

test('cancelled CAA queries do not publish stale results',async t=>{
  const controller=new AbortController();mock(t,async(_url,options)=>{controller.abort();options.signal.throwIfAborted();});await assert.rejects(lookupCaa('example.com','google',controller.signal),{name:'AbortError'});
});

test('CAA CSV, JSON and PDF exports preserve raw values, zero flags and the dedicated tool link',async t=>{
  mock(t,()=>response(['0 issue "letsencrypt.org; account=123"','128 custom "future"','0 iodef "mailto:security@example.com"']));const report=await lookupCaa('example.com','google'),csv=caaReportCsv(report),findings=caaAnalysis(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('"0","No","issue"'));assert(csv.includes('account=123'));assert.equal(JSON.parse(JSON.stringify(report)).entries[1].property.critical,true);
  const pdf=Buffer.from(dnsReportPdf(report,{toolPath:'caa-lookup',analysis:{...dnsReportAnalysis(report),checks:findings.diagnostics,tips:findings.recommendations}}));assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/caa-lookup?domain=example.com'));
  const injected=structuredClone(report);injected.entries[0].rawValue='=UNTRUSTED(1)';assert(caaReportCsv(injected).includes("'=UNTRUSTED(1)"));
});
