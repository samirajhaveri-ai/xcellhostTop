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
  new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(exports,localRequire);return exports;
};
const { parseSpfPolicy, lookupSpf, spfAnalysis, spfReportCsv, SPF_LIMITS } = load('src/app/core/spf-lookup.ts');
const answer = (name,values,status=0) => ({ok:true,json:async()=>({Status:status,AD:true,Answer:values.map(data=>({name:name+'.',type:16,TTL:300,data:JSON.stringify(data)}))})});
function dnsMock(t,policies) { const calls=[];t.mock.method(globalThis,'fetch',async url=>{const parsed=new URL(url),name=parsed.searchParams.get('name');calls.push(parsed);const value=policies[name];return value?.ok!==undefined?value:answer(name,Array.isArray(value)?value:value===undefined?[]:[value]);});return calls; }

test('SPF parsing supports qualifiers, networks, dual CIDRs, macros and modifiers',()=>{
  const parsed=parseSpfPolicy('V=SPF1 +a/0//128 mx:mail.example/24//64 ptr:example.com ip4:192.0.2.0/24 ip6:2001:db8::/32 include:_spf.example.com exists:%{ir}._spf.example.com -all exp=explain.example.com');
  assert.deepEqual(parsed.errors,[]);assert.equal(parsed.dnsTerms,5);assert.equal(parsed.all,'-all');assert(parsed.terms.find(term=>term.name==='exists').dynamic);assert(parsed.warnings.some(value=>value.includes('ptr')));
  for(const value of ['v=spf1 a//64 ~all','v=spf1 a:%{d}/24//64 -all','v=spf1 exists:%{l1r+-}._spf.example.com -all','v=spf1 include:%{D}.example.net -all'])assert.deepEqual(parseSpfPolicy(value).errors,[],value);
});
test('malformed terms, unknown mechanisms and invalid networks are detected before expansion',()=>{
  for(const term of ['ip4:999.1.1.1','ip4:192.0.2.1/33','ip4:01.2.3.4','ip6:2001:db8::/129','ip6:[::1]','ip6:abc','a/33','mx//129','mx/24/64','include','include:https://example.com','include:bad..example','exists:%(ir).example.com','exists:%{c}.example.com','redirect=','+redirect=example.com','all:example.com','whatever'])assert(parseSpfPolicy('v=spf1 '+term+' -all').errors.length,term);
  for(const record of [' v=spf1 -all','v=spf10 -all','v=spf1\t-all','v=spf1 ip4:192.0.2.1\n-all','v=spf1 '+ 'a '.repeat(201)])assert(parseSpfPolicy(record).errors.length);
});
test('all makes later mechanisms and redirect inactive while unknown and duplicate modifiers follow SPF rules',()=>{
  const parsed=parseSpfPolicy('v=spf1 -all include:never.example redirect:bad');assert(parsed.errors.length,'invalid syntax is detected even after all');
  const valid=parseSpfPolicy('v=spf1 -all include:never.example redirect=ignored.example x-unknown=foo x-unknown=bar');assert.deepEqual(valid.errors,[]);assert.equal(valid.dnsTerms,0);assert.equal(valid.terms.find(term=>term.name==='include').active,false);assert.equal(valid.terms.find(term=>term.name==='redirect').active,false);
  for(const term of ['redirect=one.example redirect=two.example','exp=one.example exp=two.example'])assert(parseSpfPolicy('v=spf1 -all '+term).errors.some(value=>value.includes('more than once')));
});
test('exact TXT queries expand dependencies, reuse DNS snapshots and count repeated term occurrences separately',async t=>{
  const calls=dnsMock(t,{'example.com':'v=spf1 include:a.example include:a.example mx -all redirect=ignored.example','a.example':'v=spf1 a include:b.example ~all','b.example':'v=spf1 ip4:192.0.2.0/24 -all'});
  const report=await lookupSpf('https://EXAMPLE.com/path','cloudflare');assert.equal(calls.length,3);assert.equal(report.nodes.length,5);assert.equal(report.potentialDnsTerms,7);assert(report.expansionComplete);
  assert(calls.every(url=>url.hostname==='cloudflare-dns.com'&&url.searchParams.get('type')==='TXT'));assert(!calls.some(url=>url.searchParams.get('name')==='ignored.example'));assert.equal(report.queryCount,3);assert.equal(report.nodes[1].from,0);assert.equal(report.nodes[2].from,1);
  assert.equal(spfAnalysis(report).diagnostics.find(check=>check.label==='Potential DNS terms').state,'INFO');
});
test('TXT chunks join within one record and unrelated owners cannot supply the queried SPF policy',async t=>{
  t.mock.method(globalThis,'fetch',async()=>({ok:true,json:async()=>({Status:0,Answer:[{name:'example.com.',type:16,TTL:60,data:'"v=spf1 " "ip4:192.0.2.1 -all"'},{name:'unrelated.example.',type:16,TTL:60,data:'"v=spf1 +all"'}]})}));
  const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].records.length,1);assert.equal(report.nodes[0].records[0].chunks,2);assert.equal(report.nodes[0].policy.all,'-all');
});
test('multiple distinct SPF TXT records are flagged, while unrelated TXT and v=spf10 are ignored',async t=>{
  dnsMock(t,{'example.com':['v=spf1 -all','v=spf1 ~all','google-site-verification=token','v=spf10 -all']});const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].state,'MULTIPLE');assert.equal(report.nodes[0].records.length,2);assert.equal(spfAnalysis(report).badge,'POLICY ISSUES');
});
test('no SPF, NXDOMAIN and resolver failures remain distinct from a sender fail result',async t=>{
  for(const [response,state] of [[answer('example.com',[]),'NONE'],[answer('example.com',[],3),'NONE'],[answer('example.com',[],2),'ERROR']]){
    t.mock.method(globalThis,'fetch',async()=>response);const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].state,state);assert(!spfAnalysis(report).diagnostics.some(check=>check.detail==='SPF fail'));
  }
});
test('redirect is expanded only when active and a missing include target is visible',async t=>{
  const calls=dnsMock(t,{'example.com':'v=spf1 redirect=target.example','target.example':'v=spf1 include:missing.example -all'});const report=await lookupSpf('example.com','google');assert.equal(calls.length,3);assert.equal(report.nodes[1].via,'redirect=target.example');assert.equal(report.nodes[2].state,'NONE');assert(!report.expansionComplete);assert.equal(spfAnalysis(report).badge,'REVIEW DEPENDENCIES');
});
test('dependency cycles stop and macros are deferred without sending literal macro DNS queries',async t=>{
  const calls=dnsMock(t,{'example.com':'v=spf1 include:%{d} include:%{ir}.macro.example -all'});const report=await lookupSpf('example.com','google');assert.equal(calls.length,1);assert(report.nodes.some(node=>node.state==='CYCLE'));assert(report.nodes.some(node=>node.state==='DEFERRED'));assert(calls.every(url=>!url.searchParams.get('name').includes('%')));
});
test('domain-only macros can resolve statically and expansion can be disabled',async t=>{
  const calls=dnsMock(t,{'example.com':'v=spf1 include:_spf.%{d} -all','_spf.example.com':'v=spf1 -all'});const full=await lookupSpf('example.com','google');assert.equal(full.nodes[1].domain,'_spf.example.com');assert.equal(calls.length,2);calls.length=0;
  const rootOnly=await lookupSpf('example.com','google',false);assert.equal(calls.length,1);assert.equal(rootOnly.nodes[1].state,'SKIPPED');assert(!rootOnly.expansionComplete);
});
test('query, depth and node bounds produce partial snapshots without unbounded DNS work',async t=>{
  let calls=0;t.mock.method(globalThis,'fetch',async url=>{calls++;const name=new URL(url).searchParams.get('name');return answer(name,[name==='example.com'?'v=spf1 '+Array.from({length:60},(_,i)=>'include:n'+i+'.example').join(' ')+' -all':'v=spf1 -all']);});
  const broad=await lookupSpf('example.com','google');assert(calls<=SPF_LIMITS.queries);assert(broad.nodes.length<=SPF_LIMITS.nodes);assert(broad.limits.length);assert(!broad.expansionComplete);
  calls=0;t.mock.method(globalThis,'fetch',async url=>{calls++;const name=new URL(url).searchParams.get('name');const next=name==='example.com'?0:Number(name.match(/^n(\d+)/)[1])+1;return answer(name,['v=spf1 include:n'+next+'.example -all']);});const deep=await lookupSpf('example.com','google');assert(calls<=9);assert(deep.nodes.some(node=>node.state==='LIMIT'));
});
test('CNAME-linked policies use the canonical owner and detect invalid alias chains',async t=>{
  t.mock.method(globalThis,'fetch',async()=>({ok:true,json:async()=>({Status:0,Answer:[{name:'example.com.',type:5,TTL:60,data:'alias.example.'},{name:'alias.example.',type:16,TTL:300,data:'"v=spf1 -all"'}]})}));const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].owner,'alias.example');assert.equal(report.nodes[0].state,'POLICY');
  t.mock.method(globalThis,'fetch',async()=>({ok:true,json:async()=>({Status:0,Answer:[{name:'example.com.',type:5,TTL:60,data:'example.com.'}]})}));assert.equal((await lookupSpf('example.com','google')).nodes[0].state,'ERROR');
});
test('a static total above ten is a review finding, never a fabricated authentication verdict',async t=>{
  dnsMock(t,{'example.com':'v=spf1 '+Array.from({length:11},()=> 'a').join(' ')+' -all'});const report=await lookupSpf('example.com','google');assert.equal(report.potentialDnsTerms,11);const analysis=spfAnalysis(report);assert.equal(analysis.diagnostics.find(check=>check.label==='Potential DNS terms').state,'REVIEW');assert.match(analysis.tips.join(' '),/static sum alone/);assert.equal(Object.hasOwn(report,'spfResult'),false);
});
test('cancellation propagates and no parent-domain SPF inheritance is attempted',async t=>{
  const controller=new AbortController();let calls=0;t.mock.method(globalThis,'fetch',async()=>{calls++;controller.abort();throw new DOMException('Cancelled','AbortError');});await assert.rejects(lookupSpf('sub.example.com','google',true,controller.signal),{name:'AbortError'});assert.equal(calls,1);
  const names=dnsMock(t,{});const report=await lookupSpf('sub.example.com','google');assert.equal(report.nodes[0].state,'NONE');assert.deepEqual(names.map(url=>url.searchParams.get('name')),['sub.example.com']);
});
test('CSV preserves capture context and neutralizes formula-like untrusted terms',async t=>{
  dnsMock(t,{'example.com':'v=spf1 +include:sender.example -all','sender.example':'v=spf1 -all'});const report=await lookupSpf('example.com','google');const csv=spfReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('Root domain'));assert(csv.includes("'+include:sender.example"));assert(csv.includes('Google Public DNS'));assert(csv.includes(report.checkedAt));
});
test('mechanism-like names used as unknown modifiers stay ignored and never trigger DNS expansion',async t=>{
  const calls=dnsMock(t,{'example.com':'v=spf1 a=ignored.example mx=ignored.example ptr=ignored.example include=ignored.example -all'});const report=await lookupSpf('example.com','google');assert.equal(calls.length,1);assert.equal(report.potentialDnsTerms,0);assert.equal(report.nodes.length,1);assert(report.nodes[0].policy.terms.slice(0,4).every(term=>!term.dns&&term.note.includes('Unknown modifier')));
});
test('unreadable TXT alongside a readable policy remains an incomplete snapshot',async t=>{
  t.mock.method(globalThis,'fetch',async()=>({ok:true,json:async()=>({Status:0,Answer:[{name:'example.com.',type:16,TTL:60,data:'"v=spf1 -all"'},{name:'example.com.',type:16,TTL:60,data:'"unterminated'}]})}));const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].state,'POLICY');assert(!report.expansionComplete);assert.equal(spfAnalysis(report).badge,'REVIEW DEPENDENCIES');
});
test('the global deadline retains a failed-query record rather than reporting a missing SPF policy',async t=>{
  const timeout=AbortSignal.timeout.bind(AbortSignal);t.mock.method(AbortSignal,'timeout',ms=>timeout(ms===SPF_LIMITS.timeoutMs?10:ms));
  t.mock.method(globalThis,'fetch',async(url,options)=>new Promise((resolve,reject)=>{const handle=setTimeout(()=>reject(new Error('Test fetch stalled')),1000);options.signal.addEventListener('abort',()=>{clearTimeout(handle);reject(options.signal.reason);},{once:true});}));
  const report=await lookupSpf('example.com','google');assert.equal(report.nodes[0].state,'LIMIT');assert.equal(report.queryCount,1);assert.equal(report.hosts[0].status,'ERROR');assert.equal(spfAnalysis(report).badge,'LOOKUP INCOMPLETE');
});
