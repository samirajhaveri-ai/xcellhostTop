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

const { cnameTarget, cnameService, lookupCname, cnameAnalysis, cnameReportCsv, cnameExportReport, CNAME_HOP_LIMIT } = load('src/app/core/cname-lookup.ts');
const { dnsReportPdf, dnsReportAnalysis } = load('src/app/core/dns-report-pdf.ts');
const answer = (name, data, type = 5, TTL = 300) => ({ name: name + '.', data, type, TTL });
const response = (Answer = [], Status = 0) => ({ ok: true, json: async () => ({ Status, AD: true, Answer }) });
function mock(t, handler) { const original = global.fetch; t.after(() => global.fetch = original); global.fetch = (url, options) => handler(new URL(url), options); }

test('CNAME targets accept hostname presentation only and service hints match complete suffix boundaries', () => {
  assert.equal(cnameTarget('WWW.Example.COM.'), 'www.example.com');
  assert.equal(cnameTarget('_token.example.com.'), '_token.example.com');
  for (const value of ['.', 'host', '192.0.2.1', 'https://example.com', 'example.com/path', 'a.example.com?x=1', ' bad.example.com', '<script>']) assert.equal(cnameTarget(value), null, value);
  assert.equal(cnameService('d123.CLOUDFRONT.NET.'), 'Amazon CloudFront');
  assert.equal(cnameService('custom.github.io'), 'GitHub Pages');
  assert.equal(cnameService('cloudfront.net.attacker.example'), null);
  assert.equal(cnameService('notcloudfront.net'), null);
});

test('trace follows reordered bundled aliases, ignores unrelated owners and queries only its endpoint for addresses', async t => {
  const calls=[];
  mock(t, (url) => { const name=url.searchParams.get('name'), type=url.searchParams.get('type'); calls.push([name,type,url.hostname]);
    if (name==='www.example.com') return response([answer('second.example.net','site.github.io.'),answer('unrelated.example.com','ignored.example.net.'),answer('www.example.com','SECOND.example.net.')]);
    if(type==='A')return response([answer(name,'192.0.2.12',1,60)]);
    if(type==='AAAA')return response([answer(name,'2001:db8::12',28,90)]);
    return response();
  });
  const report=await lookupCname('https://WWW.example.com/path','cloudflare',true);
  assert.deepEqual(report.hops.map(hop=>hop.target),['second.example.net','site.github.io']);
  assert.equal(report.state,'resolved');assert.equal(report.terminal,'site.github.io');assert.equal(report.hops[1].service,'GitHub Pages');
  assert.deepEqual(calls.map(call=>call.slice(0,2)),[['www.example.com','CNAME'],['site.github.io','CNAME'],['site.github.io','A'],['site.github.io','AAAA']]);
  assert(calls.every(call=>call[2]==='cloudflare-dns.com'));assert.equal(report.hosts[0].raw.Answer.length,3);
  assert.equal(cnameAnalysis(report).addresses.length,2);assert.equal(cnameExportReport(report).hosts.length,2);
});

test('trace follows separate CNAME responses and deduplicates equal canonical targets', async t => {
  const calls=[];
  mock(t,url=>{const name=url.searchParams.get('name');calls.push(name);
    return name==='www.example.com'?response([answer(name,'next.example.net.'),answer(name,'NEXT.EXAMPLE.NET.')]):name==='next.example.net'?response([answer(name,'final.example.net.')]):response();
  });
  const report=await lookupCname('www.example.com','google',false);
  assert.equal(report.state,'resolved');assert.equal(report.hops.length,2);assert.equal(report.addressChecks.length,0);
  assert.deepEqual(calls,['www.example.com','next.example.net','final.example.net']);
  assert.equal(cnameAnalysis(report).diagnostics.find(check=>check.label==='Target addresses').state,'INFO');
});

test('loops, conflicting targets, unsupported values and the hop cap stop traversal without querying arbitrary targets', async t => {
  let mode='loop',calls=[];
  mock(t,url=>{const name=url.searchParams.get('name');calls.push(name);
    if(mode==='loop')return response([answer(name,name==='www.example.com'?'next.example.net.':'WWW.example.com.')]);
    if(mode==='self')return response([answer(name,'www.example.com.')]);
    if(mode==='conflict')return response([answer(name,'one.example.net.'),answer(name,'two.example.net.')]);
    if(mode==='invalid')return response([answer(name,'https://untrusted.example/path')]);
    return response([answer(name,'hop'+calls.length+'.example.net.')]);
  });
  for(const [scenario,state,length] of [['loop','loop',2],['self','loop',1],['conflict','conflict',0],['invalid','invalid',0],['long','limit',CNAME_HOP_LIMIT]]){
    mode=scenario;calls=[];const report=await lookupCname('www.example.com','google',true);
    assert.equal(report.state,state,scenario);assert.equal(report.hops.length,length,scenario);assert.equal(report.terminal,null);assert.equal(report.addressChecks.length,0);
    assert(calls.length<=CNAME_HOP_LIMIT+1);assert.equal(cnameAnalysis(report).complete,false);
  }
});

test('no alias, nonexistent input, missing target and resolver failure remain different outcomes', async t => {
  let mode='direct';mock(t,url=>{const name=url.searchParams.get('name');return mode==='direct'?response():mode==='missing'?response([],3):mode==='failed'?response([],2):name==='www.example.com'?response([answer(name,'missing.example.net.')]):response([],3);});
  let report=await lookupCname('www.example.com','google',false);assert.equal(report.state,'direct');assert.equal(report.terminal,'www.example.com');assert.equal(cnameAnalysis(report).complete,true);
  mode='missing';report=await lookupCname('www.example.com','google',true);assert.equal(report.state,'nxdomain');assert.equal(report.hops.length,0);
  mode='target';report=await lookupCname('www.example.com','google',true);assert.equal(report.state,'nxdomain');assert.equal(report.hops.length,1);assert.equal(report.hosts[1].status,'NXDOMAIN');
  mode='failed';report=await lookupCname('www.example.com','google',true);assert.equal(report.state,'error');assert.match(report.detail,/SERVFAIL/);assert.equal(report.addressChecks.length,0);
});

test('partial endpoint failures preserve useful addresses and later aliases are reported as changed DNS', async t => {
  let mode='error';mock(t,url=>{const name=url.searchParams.get('name'),type=url.searchParams.get('type');return type==='CNAME'?response():type==='A'?response([answer(name,'192.0.2.1',1)]):mode==='error'?response([],2):response([answer(name,'changed.example.net.')]);});
  let report=await lookupCname('www.example.com','google',true);assert.equal(report.state,'direct');assert.equal(cnameAnalysis(report).addresses.length,1);assert.match(cnameAnalysis(report).diagnostics[2].detail,/SERVFAIL/);
  mode='changed';report=await lookupCname('www.example.com','google',true);assert.match(cnameAnalysis(report).diagnostics[2].detail,/alias appeared/);assert.equal(cnameAnalysis(report).diagnostics[2].state,'REVIEW');
});

test('cancelled lookups never publish a partial alias report', async t => {
  const controller=new AbortController();mock(t,async(_url,options)=>{controller.abort();options.signal.throwIfAborted();});
  await assert.rejects(lookupCname('www.example.com','google',true,controller.signal),{name:'AbortError'});
});

test('exports keep raw targets and response errors while PDF groups query names and links to CNAME Lookup', async t => {
  mock(t,url=>url.searchParams.get('name')==='www.example.com'?response([answer('www.example.com','NEXT.example.net.')]):url.searchParams.get('type')==='AAAA'?response([],2):url.searchParams.get('type')==='A'?response([answer('next.example.net','192.0.2.1',1)]):response());
  const report=await lookupCname('www.example.com','google',true), csv=cnameReportCsv(report), exported=cnameExportReport(report);
  assert(csv.startsWith('\ufeff'));assert(csv.includes('NEXT.example.net.'));assert(csv.includes('SERVFAIL'));assert(csv.includes('"AAAA"'));assert.equal(exported.hosts.length,2);assert.equal(exported.hosts[1].status,'ERROR');assert.equal(exported.hosts[1].records.length,1);
  const findings=cnameAnalysis(report),base=dnsReportAnalysis(exported);const pdf=Buffer.from(dnsReportPdf(exported,{toolPath:'cname-lookup',analysis:{...base,rootCount:report.hops.length,summary:report.detail,checks:findings.diagnostics,tips:findings.recommendations}}));
  assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/cname-lookup?domain=www.example.com'));assert.equal(JSON.parse(JSON.stringify(report)).hops[0].rawValue,'NEXT.example.net.');
  const injected=structuredClone(report);injected.hosts[0].records[0].value='=UNTRUSTED(1)';assert(cnameReportCsv(injected).includes("'=UNTRUSTED(1)"));
});
