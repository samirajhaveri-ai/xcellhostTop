const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript'),crypto=require('node:crypto');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {normalizeEmailHealthDomain,emailProviderHint,emailTransportMarker,lookupEmailDnsHealth,emailHealthAnalysis,emailHealthReportCsv,EMAIL_HEALTH_LIMITS}=load('src/app/core/email-dns-health.ts');
const key=new crypto.X509Certificate(require('./fixtures/certificate-fingerprint.json').rsa).publicKey.export({type:'spki',format:'der'}).toString('base64');
const rr=(name,data,type=16)=>({name:name+'.',type,TTL:300,data:type===16?JSON.stringify(data):data});
const response=(records=[],status=0)=>new Response(JSON.stringify({Status:status,AD:true,Answer:records}),{headers:{'content-type':'application/dns-json'}});
function fixture(overrides={}){return {'example.com:TXT':['v=spf1 -all'],'example.com:MX':response([rr('example.com','10 mx.example.com.',15)]),'default._domainkey.example.com:TXT':['v=DKIM1;p='+key],'_dmarc.example.com:TXT':['v=DMARC1;p=reject;sp=reject'],'_mta-sts.example.com:TXT':['v=STSv1;id=20261116'],'_smtp._tls.example.com:TXT':['v=TLSRPTv1;rua=mailto:tls@example.com'],'default._bimi.example.com:TXT':['v=BIMI1;l=https://brand.example/logo.svg;a='],'mx.example.com:A':response([rr('mx.example.com','192.0.2.1',1)]),'mx.example.com:AAAA':response([]),'1.2.0.192.in-addr.arpa:PTR':response([rr('1.2.0.192.in-addr.arpa','mx.example.com.',12)]),...overrides};}
function mockDns(t,records){const calls=[];t.mock.method(globalThis,'fetch',async(url,options)=>{const u=new URL(url);calls.push(u);assert(['dns.google','cloudflare-dns.com'].includes(u.hostname),'DNS only; no SMTP, assets or reputation service');const name=u.searchParams.get('name'),type=u.searchParams.get('type'),value=records[name+':'+type];return value instanceof Response?value.clone():response((value||[]).map(data=>rr(name,data)));});return calls;}
const group=(report,id)=>report.groups.find(item=>item.id===id);

test('domain/email/URL input normalization drops email local parts and rejects ambiguous addresses',()=>{
 assert.equal(normalizeEmailHealthDomain(' user+tag@EXAMPLE.com '),'example.com');assert.equal(normalizeEmailHealthDomain('https://EXAMPLE.com/path'),'example.com');assert.equal(normalizeEmailHealthDomain('example.com.'),'example.com');
 for(const s of ['','a@@example.com','a b@example.com','Display <a@example.com>','https://user:secret@example.com','name@example.com/path','_dmarc.example.com','127.0.0.1'])assert.throws(()=>normalizeEmailHealthDomain(s),s);
});
test('provider hints require a real suffix boundary rather than substrings',()=>{
 assert.equal(emailProviderHint('aspmx.l.google.com'),'Google Workspace / Gmail');assert.equal(emailProviderHint('x.mail.protection.outlook.com'),'Microsoft 365');assert.equal(emailProviderHint('evilgoogle.com'),'Custom / unknown');assert.equal(emailProviderHint('google.com.attacker.example'),'Custom / unknown');
});
test('transport DNS markers enforce versions, uniqueness, id bounds and report-URI syntax',()=>{
 assert.equal(emailTransportMarker('sts',['v=STSv1;id=20261116']).state,'PASS');assert.equal(emailTransportMarker('tlsrpt',['v=TLSRPTv1;rua=mailto:tls@example.com,https://reports.example/submit']).state,'PASS');
 for(const values of [[],['v=stsv1;id=x']])assert.equal(emailTransportMarker('sts',values).state,'REVIEW');
 for(const value of ['v=STSv1;id=','v=STSv1;id=a-b','v=STSv1;id='+ 'a'.repeat(33),'v=STSv1;id=x;id=y'])assert.equal(emailTransportMarker('sts',[value]).state,'FAIL',value);
 assert.equal(emailTransportMarker('sts',['v=STSv1;id=x','v=STSv1;id=y']).state,'FAIL');
 for(const value of ['v=TLSRPTv1;rua=','v=TLSRPTv1;rua=http://reports.example/','v=TLSRPTv1;rua=mailto:a@example.com/path','v=TLSRPTv1;rua=javascript:alert(1)'])assert.equal(emailTransportMarker('tlsrpt',[value]).state,'FAIL',value);
});
test('consolidated report uses live DNS and gives a scoped category summary without a delivery grade',async t=>{
 const calls=mockDns(t,fixture());const report=await lookupEmailDnsHealth('private-user@example.com','default','google',false);assert.equal(report.domain,'example.com');assert.equal(report.type,'ALL');assert.equal(report.groups.length,7);assert.equal(group(report,'spf').state,'PASS');assert.equal(group(report,'dkim').state,'PASS');assert.equal(group(report,'dmarc').state,'PASS');assert.equal(group(report,'mx').state,'PASS');assert.equal(group(report,'transport').state,'PASS');assert.equal(group(report,'reverse').state,'PASS');assert.equal(group(report,'bimi').state,'INFO');assert.equal(emailHealthAnalysis(report).passed,6);assert(!JSON.stringify(report).includes('private-user'));assert(calls.every(url=>!url.href.includes('private-user')));assert(!Object.hasOwn(report,'grade'));assert(emailHealthAnalysis(report).summary.includes('not an inbox-placement'));
});
test('mail-server priorities, address resolution and forward-confirmed reverse DNS remain owner-scoped',async t=>{
 mockDns(t,fixture({'example.com:MX':response([rr('example.com','20 backup.example.com.',15),rr('example.com','10 mx.example.com.',15),rr('unrelated.example','0 wrong.example.',15)]),'backup.example.com:A':response([rr('backup.example.com','192.0.2.2',1)]),'2.2.0.192.in-addr.arpa:PTR':response([rr('2.2.0.192.in-addr.arpa','unmatched.example.com.',12)]),'unmatched.example.com:A':response([rr('unmatched.example.com','192.0.2.99',1)])}));const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(report.servers.length,2);assert.equal(report.servers[0].priority,10);assert.equal(report.reverse[0].state,'MATCH');assert.equal(report.reverse[1].state,'REVIEW');assert.equal(group(report,'reverse').state,'REVIEW');
});
test('mixed and empty DNS answers retain their actual query types for exports',async t=>{
 mockDns(t,fixture());const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.deepEqual(report.hosts.filter(host=>host.name==='mx.example.com').map(host=>host.queriedType).sort(),['A','AAAA']);const empty=report.hosts.find(host=>host.name==='mx.example.com'&&host.queriedType==='AAAA');assert.equal(empty.records.length,0);assert(emailHealthReportCsv(report).includes('"mx.example.com","AAAA"'));
});
test('null MX is intentional information and conflicting null MX is an explicit configuration issue',async t=>{
 let calls=mockDns(t,fixture({'example.com:MX':response([rr('example.com','0 .',15)])}));let report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'INFO');assert.equal(report.servers.length,0);assert.equal(report.reverse.length,0);assert(!calls.some(url=>url.searchParams.get('type')==='PTR'));
 mockDns(t,fixture({'example.com:MX':response([rr('example.com','0 .',15),rr('example.com','10 mx.example.com.',15)])}));report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'FAIL');
});
test('missing MX, broken addresses and malformed MX have different observations',async t=>{
 mockDns(t,fixture({'example.com:MX':response([])}));let report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'INFO');assert(group(report,'mx').checks[0].detail.includes('implicit'));
 mockDns(t,fixture({'mx.example.com:A':response([])}));report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'REVIEW');
 mockDns(t,fixture({'example.com:MX':response([rr('example.com','wrong data',15)])}));report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'FAIL');
});
test('explicit permissive SPF and invalid include policies are never a clean category pass',async t=>{
 mockDns(t,fixture({'example.com:TXT':['v=spf1 +all']}));let report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'spf').state,'FAIL');
 mockDns(t,fixture({'example.com:TXT':['v=spf1 include:broken.example -all'],'broken.example:TXT':['v=spf1 ip4:bad -all']}));report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'spf').state,'FAIL');
});
test('targeted selector misses do not prove DKIM absence; extended mode has a visible finite scope',async t=>{
 let calls=mockDns(t,fixture({'default._domainkey.example.com:TXT':[],'google._domainkey.example.com:TXT':['v=DKIM1;p='+key]}));let report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'dkim').state,'REVIEW');assert.equal(report.dkim.selectors.length,1);
 calls=mockDns(t,fixture({'default._domainkey.example.com:TXT':[],'google._domainkey.example.com:TXT':['v=DKIM1;p='+key]}));report=await lookupEmailDnsHealth('example.com','default','google',true);assert.equal(report.dkim.selectors.length,8);assert.equal(report.dkim.selectors.find(s=>s.selector==='google').entries[0].key.status,'DECODED');assert(calls.filter(url=>url.searchParams.get('name').includes('._domainkey.')).length<=30);
});
test('DMARC monitoring is review and inherited quarantine policy is identified honestly',async t=>{
 mockDns(t,fixture({'_dmarc.example.com:TXT':['v=DMARC1;p=none']}));let report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'dmarc').state,'REVIEW');assert.equal(report.dmarc.effective,'none');
 mockDns(t,{'example.com:TXT':['v=spf1 -all'],'_dmarc.mail.example.com:TXT':[],'_dmarc.example.com:TXT':['v=DMARC1;p=reject;sp=quarantine;psd=n'],'mail.example.com:A':response([rr('mail.example.com','192.0.2.1',1)])});report=await lookupEmailDnsHealth('mail.example.com','default','google',false);assert(report.dmarc.inherited);assert.equal(report.dmarc.effective,'quarantine');
});
test('DNS errors leave review evidence while successful independent categories remain available',async t=>{
 mockDns(t,fixture({'example.com:MX':response([],2),'_mta-sts.example.com:TXT':response([],2)}));const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'REVIEW');assert.equal(group(report,'transport').state,'REVIEW');assert.equal(group(report,'spf').state,'PASS');assert(report.hosts.some(host=>host.status==='ERROR'));assert.equal(group(report,'reverse').state,'INFO');
});
test('TXT chunks are joined correctly and optional BIMI never fetches a logo or certificate',async t=>{
 const calls=mockDns(t,fixture({'_mta-sts.example.com:TXT':response([{...rr('_mta-sts.example.com',''),data:'"v=STSv1;" "id=demo"'}]),'default._bimi.example.com:TXT':['v=BIMI1;l=;a=']}));const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'transport').state,'PASS');assert.equal(group(report,'bimi').state,'INFO');assert(group(report,'bimi').summary.includes('declined'));assert(calls.every(url=>url.hostname==='dns.google'));
});
test('MX target CNAME delegation and cycles produce review rather than false clean routing',async t=>{
 mockDns(t,fixture({'mx.example.com:A':response([rr('mx.example.com','target.example.com.',5),rr('target.example.com','192.0.2.1',1)]),'mx.example.com:AAAA':response([rr('mx.example.com','mx.example.com.',5)])}));const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(group(report,'mx').state,'REVIEW');assert(report.servers[0].note.includes('failed'));assert(!report.hosts.some(host=>host.name==='target.example.com'));
});
test('mail-server, reverse-IP and PTR target work are bounded for oversized DNS configurations',async t=>{
 const data=fixture({'example.com:MX':response(Array.from({length:20},(_,i)=>rr('example.com',(i+1)+' mx'+i+'.example.com.',15)))});
 for(let i=0;i<3;i++){data['mx'+i+'.example.com:A']=response([rr('mx'+i+'.example.com','192.0.2.'+(i+1),1)]);data[(i+1)+'.2.0.192.in-addr.arpa:PTR']=response(Array.from({length:20},(_,n)=>rr((i+1)+'.2.0.192.in-addr.arpa','p'+n+'.example.com.',12)));}
 const calls=mockDns(t,data),report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(report.servers.length,EMAIL_HEALTH_LIMITS.mailServers);assert.equal(report.reverse.length,EMAIL_HEALTH_LIMITS.reverseIps);assert(report.limits.some(s=>s.includes('first three')));assert(report.limits.some(s=>s.includes('two PTR')));assert(calls.length<=110);
});
test('cancellation rejects stale work and the deadline yields a partial, reviewable snapshot',async t=>{
 const abort=new AbortController();t.mock.method(globalThis,'fetch',async()=>{abort.abort();throw new DOMException('Cancelled','AbortError');});await assert.rejects(lookupEmailDnsHealth('example.com','default','google',false,abort.signal),{name:'AbortError'});
 const timeout=AbortSignal.timeout.bind(AbortSignal);t.mock.method(AbortSignal,'timeout',ms=>timeout(ms===EMAIL_HEALTH_LIMITS.timeoutMs?10:ms));t.mock.method(globalThis,'fetch',async(url,options)=>new Promise((resolve,reject)=>{const handle=setTimeout(()=>reject(new Error('Test stalled')),1000);options.signal.addEventListener('abort',()=>{clearTimeout(handle);reject(options.signal.reason);},{once:true});}));const report=await lookupEmailDnsHealth('example.com','default','google',false);assert.equal(report.groups.length,7);assert(report.limits.length);assert.equal(emailHealthAnalysis(report).badge,'PARTIAL SNAPSHOT');assert.equal(emailHealthAnalysis(report).passed,0);
});
test('invalid input never queries DNS, resolver settings are applied and CSV preserves scope without mailbox data',async t=>{
 const calls=mockDns(t,fixture());await assert.rejects(lookupEmailDnsHealth('bad@@example.com','default','google',false));await assert.rejects(lookupEmailDnsHealth('example.com','bad/selector','google',false));await assert.rejects(lookupEmailDnsHealth('example.com','default','bad',false));assert.equal(calls.length,0);const report=await lookupEmailDnsHealth('secret-local@example.com','default','cloudflare',false),csv=emailHealthReportCsv(report);assert.equal(report.resolver,'Cloudflare');assert(calls.every(url=>url.hostname==='cloudflare-dns.com'));assert(csv.startsWith('\ufeff'));assert(!csv.includes('secret-local'));assert(csv.includes('Forward-confirmed reverse DNS'));assert(emailHealthAnalysis(report).checks.some(c=>c.detail.includes('blocklists')));
});
