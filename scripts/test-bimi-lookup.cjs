const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {normalizeBimiSelector,bimiAssetUrl,parseBimiRecord,lookupBimi,fetchBimiAsset,bimiAnalysis,bimiReportCsv,BIMI_LIMITS}=load('src/app/core/bimi-lookup.ts');
const rr=(name,data,type=16)=>({name:name+'.',type,TTL:300,data:type===16?JSON.stringify(data):data});
const response=(records=[],status=0)=>new Response(JSON.stringify({Status:status,AD:true,Answer:records}),{headers:{'content-type':'application/dns-json'}});
const policy='v=BIMI1; l=https://brand.example/logo.svg; a=https://brand.example/mark.pem';
const root='default._bimi.example.com',dmarc='v=DMARC1;p=reject;sp=reject;rua=mailto:r@example.com';
function mockDns(t,records={},assets={}){const calls=[];t.mock.method(globalThis,'fetch',async(url,options)=>{const u=new URL(url);calls.push({url:u,options});if(!['dns.google','cloudflare-dns.com'].includes(u.hostname)){if(assets[u.href] instanceof Error)throw assets[u.href];return assets[u.href]||new Response('Unavailable',{status:404});}const name=u.searchParams.get('name'),value=name==='_dmarc.example.com'&&records[name]===undefined?[dmarc]:records[name];return value instanceof Response?value:response((value||[]).map(data=>rr(name,data)));});return calls;}

test('BIMI tags retain URLs and evidence absence is not treated as invalid assertion syntax',()=>{
 const p=parseBimiRecord(policy);assert.equal(p.state,'PUBLISHED');assert.equal(p.logo,'https://brand.example/logo.svg');assert.equal(p.evidence,'https://brand.example/mark.pem');assert.equal(parseBimiRecord('v=BIMI1;l=https://brand.example/logo.svg').state,'PUBLISHED');assert(parseBimiRecord('v=BIMI1;l=https://brand.example/logo.svg').warnings.some(s=>s.includes('self-asserted')));
});
test('explicit declination is distinct from missing, invalid and evidence-only publication',()=>{
 assert.equal(parseBimiRecord('v=BIMI1;l=;a=;').state,'DECLINED');assert.equal(parseBimiRecord('v=BIMI1;l=').state,'DECLINED');assert.equal(parseBimiRecord('v=BIMI1;l=;a=https://brand.example/mark.pem').state,'PUBLISHED');assert(parseBimiRecord('v=BIMI1;l=;a=https://brand.example/mark.pem').warnings.some(s=>s.includes('evidence-only')));assert.equal(parseBimiRecord('v=BIMI1;a=').state,'INVALID');
});
test('wrong versions, misplaced v, duplicates, controls, malformed and oversized records are rejected',()=>{
 for(const value of ['v=bimi1;l=','v=BIMI2;l=','l=;v=BIMI1','v=BIMI1;l=;l=https://brand.example/logo.svg','v=BIMI1;;l=','v=BIMI1;l=\n','v=BIMI1;l=;x='+ 'a'.repeat(BIMI_LIMITS.recordLength)])assert.equal(parseBimiRecord(value).state,'INVALID',value.slice(0,90));
 const extension=parseBimiRecord(policy+';lps=brand-');assert.equal(extension.state,'PUBLISHED');assert(extension.warnings.some(s=>s.includes('not evaluated')));assert(extension.tags.some(t=>t.name==='lps'));
});
test('asset URLs permit HTTPS public hostnames and reject credential, local, IP and injection targets',()=>{
 assert.equal(bimiAssetUrl('https://BRAND.example/logo.svg?version=2'),'https://brand.example/logo.svg?version=2');assert(bimiAssetUrl('https://brand.example/a%2Cb.svg'));
 for(const url of ['http://brand.example/logo.svg','javascript:alert(1)','data:image/svg+xml,x','https://user:pass@brand.example/a','https://127.0.0.1/a','https://[::1]/a','https://localhost/a','https://box.internal/a','https://box.local/a','https://2130706433/a','https://0x7f000001/a','https://brand.example:9443/a','https://brand.example/a#x','https://brand.example/a,b','https://brand.example/a b','https://brand.example/\\evil'])assert.throws(()=>bimiAssetUrl(url),url);
 assert.equal(parseBimiRecord('v=BIMI1;l=http://brand.example/logo.svg').state,'INVALID');
});
test('selector validation allows dotted selectors and rejects injected DNS labels',()=>{
 assert.equal(normalizeBimiSelector(' Default '),'default');assert.equal(normalizeBimiSelector('a.b-2'),'a.b-2');for(const s of ['', 'a..b','_bimi','a?type=TXT','https://a.example','a b','-a','a'.repeat(64)])assert.throws(()=>normalizeBimiSelector(s));
});
test('lookup queries the exact selector with selected resolver and joins DNS strings without spaces',async t=>{
 const calls=mockDns(t,{[root]:response([{...rr(root,''),data:'"v=BIMI1; l=https://brand.example/" "logo.svg; a="'}])});const report=await lookupBimi('https://EXAMPLE.com/path','default','cloudflare',false);assert.equal(report.state,'FOUND');assert.equal(report.entries[0].record.logo,'https://brand.example/logo.svg');assert.equal(report.selector,'default');assert.equal(calls[0].url.hostname,'cloudflare-dns.com');assert(calls.every(c=>c.url.searchParams.get('type')==='TXT'));assert.equal(report.logo.state,'NOT_REQUESTED');assert(report.dmarc.selected);
});
test('missing exact-name BIMI never turns DMARC or unrelated-owner records into a brand assertion',async t=>{
 const calls=mockDns(t,{[root]:response([rr('other._bimi.example.com',policy)])});const report=await lookupBimi('example.com','default','google',false);assert.equal(report.state,'MISSING');assert(report.note.includes('fallback are not searched'));assert.equal(report.entries.length,0);assert.equal(calls.filter(c=>c.url.searchParams.get('name')===root).length,1);assert(report.dmarc.selected);
});
test('NXDOMAIN and failed DNS answers remain distinct and do not claim brand verification',async t=>{
 mockDns(t,{[root]:response([],3)});const missing=await lookupBimi('example.com','default','google',false);assert.equal(missing.state,'MISSING');assert.match(missing.note,/NXDOMAIN/);
 mockDns(t,{[root]:response([],2)});const failed=await lookupBimi('example.com','default','google',false);assert.equal(failed.state,'ERROR');assert.equal(failed.logo.state,'NOT_REQUESTED');assert.equal(bimiAnalysis(failed).badge,'REVIEW BIMI');
});
test('same-answer and separately queried CNAME targets are inspected with exact owner scoping',async t=>{
 const target='bimi.provider.example';let calls=mockDns(t,{[root]:response([rr(root,target+'.',5),rr(target,policy)])});let report=await lookupBimi('example.com','default','google',false);assert.equal(report.owner,target);assert.equal(report.state,'FOUND');assert.equal(report.aliases.length,1);assert.equal(report.hosts.length,1);
 calls=mockDns(t,{[root]:response([rr(root,target+'.',5)]),[target]:[policy]});report=await lookupBimi('example.com','default','google',false);assert.equal(report.hosts.length,2);assert.equal(report.state,'FOUND');
});
test('CNAME loops, ambiguous answers and depth limits stop without asset requests',async t=>{
 let calls=mockDns(t,{[root]:response([rr(root,root+'.',5)])});assert.equal((await lookupBimi('example.com','default','google',true)).state,'ERROR');assert(calls.every(c=>['dns.google','cloudflare-dns.com'].includes(c.url.hostname)));
 mockDns(t,{[root]:response([rr(root,'target.example.',5),rr(root,policy)])});assert.equal((await lookupBimi('example.com','default','google',false)).state,'ERROR');
 let count=0;t.mock.method(globalThis,'fetch',async url=>{const name=new URL(url).searchParams.get('name');if(name.startsWith('_dmarc.'))return response([rr(name,dmarc)]);count++;return response([rr(name,'n'+count+'.example.com.',5)]);});const chain=await lookupBimi('example.com','default','google',false);assert.equal(chain.state,'ERROR');assert(count<=BIMI_LIMITS.aliases+1);
});
test('duplicate, invalid and declined assertions never choose an asset for retrieval',async t=>{
 for(const [records,state] of [[[policy,policy],'MULTIPLE'],[['v=BIMI1;l=http://brand.example/logo.svg'],'INVALID'],[['v=BIMI1;l=;a='],'FOUND']]){const calls=mockDns(t,{[root]:records});const report=await lookupBimi('example.com','default','google',true);assert.equal(report.state,state);assert(calls.every(c=>['dns.google','cloudflare-dns.com'].includes(c.url.hostname)));assert(!report.logo.content);}
});
test('asset retrieval uses CORS, no credentials/referrer/redirects and retains the DNS snapshot on browser restrictions',async t=>{
 const calls=mockDns(t,{[root]:[policy]},{'https://brand.example/logo.svg':new TypeError('Failed to fetch'),'https://brand.example/mark.pem':new TypeError('Failed to fetch')});const report=await lookupBimi('example.com','default','google',true);assert.equal(report.state,'FOUND');assert.equal(report.logo.state,'UNREADABLE');assert(report.logo.note.includes('not proof'));for(const c of calls.filter(c=>c.url.hostname==='brand.example')){assert.equal(c.options.credentials,'omit');assert.equal(c.options.redirect,'error');assert.equal(c.options.referrerPolicy,'no-referrer');assert.equal(c.options.mode,'cors');}
});
test('asset byte limits are enforced from Content-Length and streamed decoded bytes',async t=>{
 t.mock.method(globalThis,'fetch',async()=>new Response('x',{headers:{'content-length':String(BIMI_LIMITS.assetBytes+1)}}));assert.equal((await fetchBimiAsset('logo','https://brand.example/logo.svg')).state,'INVALID');
 let cancelled=false;t.mock.method(globalThis,'fetch',async()=>new Response(new ReadableStream({start(c){c.enqueue(new Uint8Array(BIMI_LIMITS.assetBytes+1));},cancel(){cancelled=true;}})));const streamed=await fetchBimiAsset('logo','https://brand.example/logo.svg');assert.equal(streamed.state,'INVALID');assert(streamed.note.includes('256 KiB'));assert(cancelled);
});
test('PEM chains decode only public certificate metadata without claiming VMC trust',async t=>{
 const fixture=require('./fixtures/certificate-fingerprint.json'),pem=fixture.rsa+'\n'+fixture.ec;
 t.mock.method(globalThis,'fetch',async()=>new Response(pem,{headers:{'content-type':'application/x-pem-file'}}));const report=await fetchBimiAsset('evidence','https://brand.example/mark.pem');assert.equal(report.state,'READABLE');assert.equal(report.certificate.chainLength,2);assert.equal(report.certificate.fingerprint.length,64);assert(report.note.includes('not verified'));assert(!Object.hasOwn(report.certificate,'trusted'));
});
test('non-certificate material and invalid encodings are visible asset issues',async t=>{
 for(const content of ['<!doctype html><h1>Error</h1>','-----BEGIN PRIVATE KEY-----\nAAAA\n-----END PRIVATE KEY-----','-----BEGIN CERTIFICATE-----\nAAAA\n-----END CERTIFICATE-----']){t.mock.method(globalThis,'fetch',async()=>new Response(content));const report=await fetchBimiAsset('evidence','https://brand.example/mark.pem');assert.equal(report.state,'INVALID');assert(!report.certificate);}
});
test('raw SVGZ is marked outside preflight scope rather than an invalid SVG or unreachable host',async t=>{
 t.mock.method(globalThis,'fetch',async()=>new Response(require('node:zlib').gzipSync('<svg/>')));const report=await fetchBimiAsset('logo','https://brand.example/logo.svgz');assert.equal(report.state,'UNREADABLE');assert(report.note.includes('Raw SVGZ/gzip'));assert(!report.svg);assert(!report.content);
});
test('DMARC context flags monitoring, testing and partial legacy coverage without fabricating a mail result',async t=>{
 for(const p of ['v=DMARC1;p=none','v=DMARC1;p=reject;t=y','v=DMARC1;p=reject;pct=50','v=DMARC1;p=reject;sp=none']){mockDns(t,{[root]:[policy],'_dmarc.example.com':[p]});const analysis=bimiAnalysis(await lookupBimi('example.com','default','google',false));assert.equal(analysis.checks.find(c=>c.label==='DMARC policy context').state,'REVIEW');assert(analysis.checks.find(c=>c.label==='Mailbox display').detail.includes('Not verified'));}
});
test('cancellation rejects stale work and a global deadline keeps completed public DNS context',async t=>{
 const abort=new AbortController();t.mock.method(globalThis,'fetch',async()=>{abort.abort();throw new DOMException('Cancelled','AbortError');});await assert.rejects(lookupBimi('example.com','default','google',true,abort.signal),{name:'AbortError'});
 const timeout=AbortSignal.timeout.bind(AbortSignal);t.mock.method(AbortSignal,'timeout',ms=>timeout(ms===BIMI_LIMITS.timeoutMs?10:ms));t.mock.method(globalThis,'fetch',async(url,options)=>{const u=new URL(url);if(u.hostname==='dns.google'){const name=u.searchParams.get('name');return response([rr(name,name===root?policy:dmarc)]);}return new Promise((resolve,reject)=>{const handle=setTimeout(()=>reject(new Error('Test stalled')),1000);options.signal.addEventListener('abort',()=>{clearTimeout(handle);reject(options.signal.reason);},{once:true});});});const report=await lookupBimi('example.com','default','google',true);assert.equal(report.state,'FOUND');assert(report.limits.length);assert.equal(report.logo.state,'UNREADABLE');
});
test('invalid inputs fail before any DNS query and exports preserve scope and diagnostics',async t=>{
 const calls=mockDns(t,{[root]:[policy]});for(const input of ['', '_bimi.example.com','1.2.3.4','https://user:secret@example.com'])await assert.rejects(lookupBimi(input,'default','google',false));await assert.rejects(lookupBimi('example.com','bad/name','google',false));await assert.rejects(lookupBimi('example.com','default','bad',false));assert.equal(calls.length,0);const report=await lookupBimi('example.com','default','google',false),csv=bimiReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('default._bimi.example.com'));assert(csv.includes('Mailbox display'));assert(csv.includes('Not verified'));
});
