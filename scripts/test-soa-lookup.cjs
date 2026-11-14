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
const { parseSoaValue, soaDuration, lookupSoa, soaAnalysis, soaReportCsv } = load('src/app/core/soa-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const normal='ns1.example.net. hostmaster.example.com. 2026111301 3600 600 1209600 300';
const response=(values=[normal],status=0)=>({ok:true,json:async()=>({Status:status,AD:true,Answer:values.map(data=>({name:'example.com.',type:6,TTL:120,data}))})});
function mock(t,handler){const original=global.fetch;t.after(()=>global.fetch=original);global.fetch=handler;}

test('SOA decodes seven fields, DNS mailbox escapes, root RNAME and full unsigned 32-bit values',()=>{
  assert.deepEqual(parseSoaValue(normal),{primary:'ns1.example.net',rname:'hostmaster.example.com.',contact:'hostmaster@example.com',serial:2026111301,refresh:3600,retry:600,expire:1209600,minimum:300});
  const escaped=String.raw`ns1.example.net. first\.last.example.com. 4294967295 0 0 4294967295 0`;
  assert.equal(parseSoaValue(escaped).contact,'first.last@example.com');assert.equal(parseSoaValue(escaped).serial,4294967295);
  assert.equal(parseSoaValue(String.raw`ns1.example.net. first\046last.example.com. 1 2 3 4 5`).contact,'first.last@example.com');
  assert.equal(parseSoaValue(String.raw`ns1.example.net. first\032last.example.com. 1 2 3 4 5`).contact,'first last@example.com');
  assert.equal(parseSoaValue('ns1.example.net. . 1 2 3 4 5').contact,null);
  assert.equal(parseSoaValue('ns1.example.net. hostmaster.example.com.\n  1\t2 3 4 5').expire,4);
});

test('malformed fields remain undecoded instead of silently shifting or truncating values',()=>{
  for(const raw of ['', 'ns1.example.net. contact.example.com. 1 2 3 4',normal+' 99',normal.replace('2026111301','4294967296'),normal.replace('3600','-1'),normal.replace('3600','1.5'),normal.replace('3600','1h'),normal.replace('ns1.','ns1..'),'ns.example. invalid..example. 1 2 3 4 5',String.raw`ns.example. contact\999.example. 1 2 3 4 5`])assert.equal(parseSoaValue(raw),null,raw);
  assert.equal(parseSoaValue('a'.repeat(64)+'.example. contact.example. 1 2 3 4 5'),null);
});

test('timers retain seconds and show complete readable durations including zero and large values',()=>{
  assert.equal(soaDuration(0),'0s');assert.equal(soaDuration(90061),'1d 1h 1m 1s');assert.equal(soaDuration(1209600),'14d');assert.equal(soaDuration(4294967295),'49710d 6h 28m 15s');assert.equal(soaDuration(-1),'Not available');
});

test('lookup uses exact SOA input and selected resolver, retains alias/raw data and compares TTL with MINIMUM',async t=>{
  const calls=[];mock(t,(url)=>{calls.push(new URL(url));return {ok:true,json:async()=>({Status:0,AD:true,Answer:[{name:'www.example.com.',type:5,TTL:60,data:'example.com.'},{name:'example.com.',type:6,TTL:120,data:normal}]})};});
  const report=await lookupSoa('https://WWW.example.com/path','cloudflare');
  assert.equal(calls.length,1);assert.equal(calls[0].hostname,'cloudflare-dns.com');assert.equal(calls[0].searchParams.get('name'),'www.example.com');assert.equal(calls[0].searchParams.get('type'),'SOA');
  assert.equal(report.domain,'www.example.com');assert.equal(report.entries[0].name,'example.com');assert.equal(report.entries[0].negativeCacheBound,120);assert.equal(report.hosts[0].raw.Answer.length,2);assert.equal(report.entries[0].rawValue,normal);
  assert(soaAnalysis(report).diagnostics.some(check=>check.label==='Query scope'&&check.detail.includes('not contacted directly')));
});

test('diagnostics distinguish malformed data, timer review, multiple values, empty answers and failures',async t=>{
  let mode='invalid';mock(t,()=>mode==='invalid'?response(['bad data']):mode==='timers'?response(['ns.example.net. hostmaster.example.com. 1 0 600 300 0']):mode==='multiple'?response([normal,normal.replace('2026111301','2026111302')]):mode==='empty'?response([]):mode==='missing'?response([],3):response([],2));
  let report=await lookupSoa('example.com','google');assert.equal(report.entries[0].fields,null);assert.equal(soaAnalysis(report).diagnostics[1].state,'REVIEW');
  mode='timers';report=await lookupSoa('example.com','google');assert.equal(soaAnalysis(report).timerReview,true);assert.equal(report.entries[0].negativeCacheBound,0);
  mode='multiple';report=await lookupSoa('example.com','google');assert.equal(soaAnalysis(report).multiple,true);
  mode='empty';report=await lookupSoa('example.com','google');assert.equal(report.hosts[0].status,'NOERROR');assert.equal(soaAnalysis(report).diagnostics[0].state,'INFO');
  mode='missing';report=await lookupSoa('example.com','google');assert.equal(report.hosts[0].status,'NXDOMAIN');
  mode='failed';report=await lookupSoa('example.com','google');assert.equal(report.hosts[0].status,'ERROR');assert.match(soaAnalysis(report).diagnostics[0].detail,/SERVFAIL/);
});

test('cancelled lookups do not publish stale SOA data',async t=>{
  const controller=new AbortController();mock(t,async(_url,options)=>{controller.abort();options.signal.throwIfAborted();});await assert.rejects(lookupSoa('example.com','google',controller.signal),{name:'AbortError'});
});

test('CSV, JSON and PDF retain raw values, decoded zero fields and the dedicated SOA tool link',async t=>{
  mock(t,()=>response(['ns.example.net. hostmaster.example.com. 0 3600 600 1209600 0']));
  const report=await lookupSoa('example.com','google'),csv=soaReportCsv(report),findings=soaAnalysis(report);
  assert(csv.startsWith('\ufeff'));assert(csv.includes('"0","3600","600","1209600","0","120","0"'));assert(csv.includes('hostmaster@example.com'));
  assert.equal(JSON.parse(JSON.stringify(report)).entries[0].fields.serial,0);
  const pdf=Buffer.from(dnsReportPdf(report,{toolPath:'soa-lookup',analysis:{...dnsReportAnalysis(report),checks:findings.diagnostics,tips:findings.recommendations}}));assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/soa-lookup?domain=example.com'));
  const injected=structuredClone(report);injected.entries[0].rawValue='=UNTRUSTED(1)';assert(soaReportCsv(injected).includes("'=UNTRUSTED(1)"));
});
