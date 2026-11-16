const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {parseDmarcRecord,lookupDmarc,dmarcAnalysis,dmarcScenarios,dmarcTreatment,dmarcTreeNames,dmarcReportCsv,DMARC_LIMITS}=load('src/app/core/dmarc-lookup.ts');
const rr=(name,data,type=16)=>({name:name+'.',type,TTL:300,data:type===16?JSON.stringify(data):data});
const response=(records=[],status=0)=>({ok:true,json:async()=>({Status:status,AD:true,Answer:records})});
function mockDns(t,records){const calls=[];t.mock.method(globalThis,'fetch',async url=>{const u=new URL(url),name=u.searchParams.get('name');calls.push(u);const value=records[name];return value?.ok!==undefined?value:response((value||[]).map(data=>rr(name,data)));});return calls;}
const policy='v=DMARC1; p=reject; rua=mailto:reports@example.com';

test('published tags, defaults, subdomain branches and current testing rules are interpreted',()=>{
 const p=parseDmarcRecord(policy+';sp=quarantine;np=none;aspf=s;t=y;psd=n');assert(p.usable);assert.equal(p.policy,'reject');assert.equal(p.subdomain,'quarantine');assert.equal(p.nonexistent,'none');assert.equal(p.aspf,'s');assert.equal(p.adkim,'r');assert.equal(p.psd,'n');assert.equal(dmarcTreatment(p.policy,p.testing),'quarantine');assert.equal(dmarcTreatment(p.subdomain,true),'none');assert(p.tags.some(tag=>tag.name==='adkim'&&tag.source==='Default'));
});
test('missing p defaults to none in RFC 9989, legacy pct never changes the treatment',()=>{
 const p=parseDmarcRecord('v=DMARC1;rua=mailto:r@example.com');assert(p.usable);assert.equal(p.policy,'none');assert(p.warnings.some(s=>s.includes('older receivers')));
 const legacy=parseDmarcRecord(policy+';pct=0;ri=86400;rf=afrf');assert(legacy.usable);assert.equal(dmarcTreatment(legacy.policy,legacy.testing),'reject');assert.equal(legacy.warnings.filter(s=>s.includes('legacy tag')).length,3);
});
test('invalid policy falls back only with a syntactically valid aggregate-report URI',()=>{
 for(const tag of ['p=other','sp=other','np=other']){const p=parseDmarcRecord('v=DMARC1;'+tag+';rua=mailto:r@example.com');assert(p.usable);assert.equal(p.policy,'none');assert(p.warnings.some(s=>s.includes('fallback')));assert(!parseDmarcRecord('v=DMARC1;'+tag).usable);}
});
test('version, duplicates, controls and record size cannot masquerade as a usable policy',()=>{
 for(const s of ['p=reject;v=DMARC1','v=dmarc1;p=reject','v=DMARC2;p=reject','v=DMARC1;p=none;p=reject','v=DMARC1;p=reject\n','v=DMARC1;p=reject;rua='+ 'x'.repeat(DMARC_LIMITS.recordLength)]) assert(!parseDmarcRecord(s).usable,s.slice(0,100));
});
test('unknown tags stay visible while invalid optional values use defaults and produce findings',()=>{
 const p=parseDmarcRecord(policy+';adkim=x;aspf=X;t=bad;psd=bad;fo=0:1;x_custom=demo');assert(p.usable);assert.equal(p.adkim,'r');assert(!p.testing);assert.equal(p.psd,'u');assert(p.warnings.length>=5);assert(p.tags.some(tag=>tag.name==='x_custom'&&tag.meaning.includes('ignored')));
 const uppercase=parseDmarcRecord('v=DMARC1;p=REJECT;aspf=S;t=Y;psd=N');assert(uppercase.usable);assert.equal(uppercase.policy,'reject');assert.equal(uppercase.aspf,'s');assert(uppercase.testing);assert.equal(uppercase.psd,'n');
});
test('report destinations are inspected as text without turning data into navigation',()=>{
 const p=parseDmarcRecord(policy+'!10m;ruf=mailto:fail@external.example,not-a-uri');assert.equal(p.destinations.length,3);assert(p.destinations[0].valid);assert(p.destinations[1].valid);assert(!p.destinations[2].valid);assert(p.destinations[1].note.includes('not checked'));
 for(const uri of ['mailto:r@example.com/path','mailto:r@example.com?subject=x','mailto:r@example.com#x','mailto:no-address','mailto:r@localhost']) assert(!parseDmarcRecord('v=DMARC1;p=reject;rua='+uri).destinations[0].valid,uri);
});
test('direct lookup joins TXT chunks and uses the selected resolver without querying report destinations',async t=>{
 const name='_dmarc.example.com',calls=mockDns(t,{[name]:response([{...rr(name,''),data:'"v=DMARC1; p=reject; " "rua=mailto:r@external.example"'}])});const report=await lookupDmarc('https://EXAMPLE.com/path','cloudflare');assert.equal(calls.length,1);assert.equal(calls[0].hostname,'cloudflare-dns.com');assert.equal(report.selected.value,'v=DMARC1; p=reject; rua=mailto:r@external.example');assert.equal(report.effective,'reject');assert(!report.inherited);assert.equal(report.policyDomain,'example.com');
});
test('inherited policy selects the shortest found record unless psd=n establishes a boundary',async t=>{
 let calls=mockDns(t,{'_dmarc.mail.team.example.com':[], '_dmarc.team.example.com':['v=DMARC1;p=none'], '_dmarc.example.com':[policy+';sp=quarantine'], 'mail.team.example.com':response([rr('mail.team.example.com','192.0.2.1',1)])});const report=await lookupDmarc('mail.team.example.com','google');assert(report.inherited);assert.equal(report.policyDomain,'example.com');assert.equal(report.effective,'quarantine');assert.equal(calls.at(-1).searchParams.get('type'),'A');
 calls=mockDns(t,{'_dmarc.team.example.com':['v=DMARC1;p=none;psd=n']});const boundary=await lookupDmarc('mail.team.example.com','google');assert.equal(boundary.policyDomain,'team.example.com');assert(!calls.some(u=>u.searchParams.get('name')==='_dmarc.example.com'));
});
test('PSD boundaries select the immediately subordinate policy, or the PSD fallback',async t=>{
 mockDns(t,{'_dmarc.mail.example.com':['v=DMARC1;p=reject'], '_dmarc.example.com':['v=DMARC1;p=quarantine;sp=none;psd=y']});const report=await lookupDmarc('a.mail.example.com','google');assert.equal(report.policyDomain,'mail.example.com');assert.equal(report.effective,'reject');
 mockDns(t,{'_dmarc.com':['v=DMARC1;p=reject;sp=quarantine;psd=y']});const fallback=await lookupDmarc('a.example.com','google');assert.equal(fallback.policyDomain,'com');assert.equal(fallback.effective,'quarantine');
});
test('NXDOMAIN selects np, but an existence-query failure leaves inherited treatment unresolved',async t=>{
 mockDns(t,{'_dmarc.example.com':[policy+';sp=quarantine;np=none;psd=n'],'missing.example.com':response([],3)});const missing=await lookupDmarc('missing.example.com','google');assert.equal(missing.existence,'NONEXISTENT');assert.equal(missing.effective,'none');
 mockDns(t,{'_dmarc.example.com':[policy+';psd=n'],'missing.example.com':response([],2)});const failed=await lookupDmarc('missing.example.com','google');assert.equal(failed.existence,'UNKNOWN');assert.equal(failed.effective,null);
});
test('multiple records are discarded at one name; unrelated TXT owners never provide a policy',async t=>{
 mockDns(t,{'_dmarc.a.example.com':[policy,'v=DMARC1;p=none'],'_dmarc.example.com':[policy+';psd=n']});const multi=await lookupDmarc('a.example.com','google');assert.equal(multi.steps[0].state,'MULTIPLE');assert.equal(multi.policyDomain,'example.com');
 mockDns(t,{'_dmarc.example.com':response([rr('_dmarc.unrelated.com',policy)])});const wrong=await lookupDmarc('example.com','google');assert.equal(wrong.selected,null);
});
test('CNAME delegation follows same-answer and separate-answer targets; loops and ambiguity fail visibly',async t=>{
 const name='_dmarc.example.com',target='policy.provider.example';let calls=mockDns(t,{[name]:response([rr(name,target+'.',5),rr(target,policy)])});assert.equal((await lookupDmarc('example.com','google')).effective,'reject');assert.equal(calls.length,1);
 calls=mockDns(t,{[name]:response([rr(name,target+'.',5)]),[target]:[policy]});assert.equal((await lookupDmarc('example.com','google')).effective,'reject');assert.equal(calls.length,2);
 mockDns(t,{[name]:response([rr(name,name+'.',5)])});assert.equal((await lookupDmarc('example.com','google')).steps[0].state,'ERROR');
 mockDns(t,{[name]:response([rr(name,target+'.',5),rr(name,policy)])});assert.equal((await lookupDmarc('example.com','google')).selected,null);
});
test('DNS errors stop discovery instead of silently adopting an ancestor policy',async t=>{
 const calls=mockDns(t,{'_dmarc.example.com':response([],2),'_dmarc.com':[policy]});const report=await lookupDmarc('example.com','google');assert.equal(calls.length,1);assert.equal(report.selected,null);assert.equal(report.steps[0].state,'ERROR');assert(dmarcAnalysis(report).checks.some(c=>c.state==='REVIEW'));
});
test('deep domains and CNAME chains obey finite query limits',async t=>{
 const names=dmarcTreeNames('a.b.c.d.e.f.g.h.i.j.mail.example.com');assert.equal(names.length,8);assert.equal(names[1],'g.h.i.j.mail.example.com');assert.equal(names.at(-1),'com');
 let count=0;t.mock.method(globalThis,'fetch',async url=>{const name=new URL(url).searchParams.get('name');return response([rr(name,'next'+(++count)+'.example.com.',5)]);});const report=await lookupDmarc('example.com','google');assert(count<=DMARC_LIMITS.aliases+1);assert.equal(report.steps[0].state,'ERROR');
});
test('cancellation and global timeout stop outstanding work without producing absent-policy claims',async t=>{
 const abort=new AbortController();t.mock.method(globalThis,'fetch',async()=>{abort.abort();throw new DOMException('Cancelled','AbortError');});await assert.rejects(lookupDmarc('example.com','google',abort.signal),{name:'AbortError'});
 const timeout=AbortSignal.timeout.bind(AbortSignal);t.mock.method(AbortSignal,'timeout',ms=>timeout(ms===DMARC_LIMITS.timeoutMs?10:ms));t.mock.method(globalThis,'fetch',async(url,options)=>new Promise((resolve,reject)=>{const handle=setTimeout(()=>reject(new Error('Test stalled')),1000);options.signal.addEventListener('abort',()=>{clearTimeout(handle);reject(options.signal.reason);},{once:true});}));const report=await lookupDmarc('example.com','google');assert.equal(report.steps[0].state,'ERROR');assert(report.limits.length);
});
test('alignment examples require one aligned pass and never claim to authenticate an actual message',()=>{
 const relaxed=dmarcScenarios(parseDmarcRecord(policy)),strict=dmarcScenarios(parseDmarcRecord(policy+';adkim=s;aspf=s'));assert(relaxed[1].outcome.startsWith('PASS'));assert(strict[1].outcome.startsWith('FAIL'));assert(strict[2].outcome.startsWith('PASS'));assert(strict[3].outcome.startsWith('FAIL'));assert(strict.every(s=>s.outcome.includes('illustration')));
});
test('invalid input is rejected before network activity and CSV preserves the scoped snapshot',async t=>{
 const calls=mockDns(t,{'_dmarc.example.com':[policy+';x-note==SUM(1+1)']});for(const name of ['', '_dmarc.example.com','a_b.example.com','https://user:secret@example.com','1.2.3.4'])await assert.rejects(lookupDmarc(name,'google'));assert.equal(calls.length,0);await assert.rejects(lookupDmarc('example.com','bad'));const report=await lookupDmarc('example.com','google'),csv=dmarcReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('DMARC policy snapshot'));assert(csv.includes('Policy discovery'));assert.equal(report.type,'TXT');
});
