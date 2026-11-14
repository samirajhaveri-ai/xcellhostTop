const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript'),crypto=require('node:crypto');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {parseDkimRecord,normalizeDkimSelector,lookupDkim,dkimAnalysis,dkimReportCsv,DKIM_COMMON_SELECTORS,DKIM_LIMITS}=load('src/app/core/dkim-lookup.ts');
const rsa=new crypto.X509Certificate(require('./fixtures/certificate-fingerprint.json').rsa).publicKey;
const key=(type='spki')=>rsa.export({type,format:'der'}).toString('base64');
const valid='v=DKIM1; k=rsa; p='+key();
const record=(name,data,type=16)=>({name:name+'.',type,TTL:300,data:type===16?JSON.stringify(data):data});
const response=(records,status=0)=>({ok:true,json:async()=>({Status:status,AD:true,Answer:records})});
function mockDns(t,records){const calls=[];t.mock.method(globalThis,'fetch',async url=>{const u=new URL(url),name=u.searchParams.get('name');calls.push(u);const value=records[name];return value?.ok!==undefined?value:response((value||[]).map(data=>record(name,data)));});return calls;}

test('RSA SubjectPublicKeyInfo and PKCS#1 decode to the independently known key size',()=>{
  for(const type of ['spki','pkcs1']){const result=parseDkimRecord('v=DKIM1; k=rsa; p='+key(type));assert.equal(result.status,'DECODED');assert.equal(result.bits,rsa.asymmetricKeyDetails.modulusLength);assert.equal(result.algorithm,'rsa');assert(result.keyFormat.includes(type==='spki'?'SubjectPublicKeyInfo':'PKCS#1'));assert.deepEqual(result.errors,[]);}
});
test('Ed25519 accepts a raw 32-byte public key and rejects a wrapped or wrong-sized key',()=>{
  const ed=crypto.generateKeyPairSync('ed25519').publicKey.export({format:'jwk'}),raw=Buffer.from(ed.x,'base64url');const parsed=parseDkimRecord('v=DKIM1;k=ed25519;p='+raw.toString('base64'));assert.equal(parsed.status,'DECODED');assert.equal(parsed.bits,256);assert(parsed.keyFormat.includes('point not verified'));
  for(const bytes of [Buffer.alloc(31),Buffer.alloc(33),rsa.export({type:'spki',format:'der'})])assert.equal(parseDkimRecord('v=DKIM1;k=ed25519;p='+bytes.toString('base64')).status,'INVALID');
});
test('defaults, folded whitespace and flags are interpreted without claiming message verification',()=>{
  const parsed=parseDkimRecord('p='+key()+'; t=y:s; h=sha256; s=email; n=demo');assert.equal(parsed.status,'DECODED');assert.equal(parsed.algorithm,'rsa');assert(parsed.testing);assert(parsed.strictIdentity);assert(parsed.warnings.some(value=>value.includes('Testing')));assert(!Object.hasOwn(parsed,'signatureVerified'));
  assert.equal(parseDkimRecord('v=DKIM1;\r\n\tk=rsa; p='+key().slice(0,60)+' \r\n '+key().slice(60)).status,'DECODED');
});
test('empty p revokes a key but missing, duplicate, misordered and unsupported version tags are invalid',()=>{
  assert.equal(parseDkimRecord('v=DKIM1;p=').status,'REVOKED');
  for(const text of ['v=DKIM1;k=rsa','v=DKIM1;p=;p=','p=;v=DKIM1','v=DKIM2;p=','v=dkim1;p=','v=DKIM1;;p=','v=DKIM1;p=;t=','v=DKIM1;p=;h=','v=DKIM1;p=;s=','v=DKIM1;p=;k=','v=DKIM1;P=abc','v=DKIM1;p=\nAAAA'])assert.equal(parseDkimRecord(text).status,'INVALID',text);
});
test('invalid Base64, noncanonical padding, wrong key type and trailing DER are rejected',()=>{
  for(const body of ['%%%','AB==','AAAA=','A',Buffer.concat([rsa.export({type:'spki',format:'der'}),Buffer.from([0])]).toString('base64'),Buffer.from('arbitrary bytes').toString('base64')])assert.equal(parseDkimRecord('v=DKIM1;p='+body).status,'INVALID');
  const ec=crypto.generateKeyPairSync('ec',{namedCurve:'prime256v1'}).publicKey.export({type:'spki',format:'der'});assert.equal(parseDkimRecord('v=DKIM1;k=rsa;p='+ec.toString('base64')).status,'INVALID');
  assert.equal(parseDkimRecord('v=DKIM1;k=other;p=AQID').status,'UNSUPPORTED');
});
test('weak RSA, historic hashes and service restrictions are review findings',()=>{
  const weak=crypto.generateKeyPairSync('rsa',{modulusLength:1024}).publicKey.export({type:'spki',format:'der'});const parsed=parseDkimRecord('v=DKIM1;p='+weak.toString('base64')+'; h=sha1; s=other');assert.equal(parsed.bits,1024);assert(parsed.warnings.some(value=>value.includes('2048')));assert(parsed.warnings.some(value=>value.includes('SHA-1')));assert(parsed.warnings.some(value=>value.includes('does not include email')));
});
test('selectors are validated as labels, allow dotted selectors and cannot inject another query',()=>{
  assert.equal(normalizeDkimSelector(' Google '),'google');assert.equal(normalizeDkimSelector('a.b-2'),'a.b-2');
  for(const value of ['', 'a..b','-a','https://example.com','a/_domainkey','a._domainkey.example.com','a b','a?type=MX','a@b', 'a'.repeat(64)])assert.throws(()=>normalizeDkimSelector(value));
});
test('lookup uses the exact selector hostname and joins TXT chunks without inserting spaces',async t=>{
  const name='google._domainkey.example.com';const calls=mockDns(t,{[name]:response([{...record(name,''),data:'"v=DKIM1; p=" "'+key()+'"'}])});const report=await lookupDkim('https://EXAMPLE.com/path','google','cloudflare');assert.equal(calls.length,1);assert.equal(calls[0].hostname,'cloudflare-dns.com');assert.equal(calls[0].searchParams.get('name'),name);assert.equal(calls[0].searchParams.get('type'),'TXT');assert.equal(report.selectors[0].entries[0].chunks,2);assert.equal(dkimAnalysis(report).decoded,1);
});
test('CNAME delegation is followed within answers or with an additional bounded TXT query',async t=>{
  const root='s1._domainkey.example.com',target='provider.example';let calls=mockDns(t,{[root]:response([record(root,target+'.',5),record(target,valid)]),'provider.example':[valid]});const full=await lookupDkim('example.com','s1','google');assert.equal(calls.length,1);assert.equal(full.selectors[0].owner,target);assert.equal(full.selectors[0].aliases.length,1);
  calls=mockDns(t,{[root]:response([record(root,target+'.',5)]),[target]:[valid]});const split=await lookupDkim('example.com','s1','google');assert.equal(calls.length,2);assert.equal(dkimAnalysis(split).decoded,1);
});
test('CNAME loops, ambiguous answers and unrelated TXT owners cannot provide a valid result',async t=>{
  const root='s1._domainkey.example.com';mockDns(t,{[root]:response([record(root,root+'.',5)])});assert.equal((await lookupDkim('example.com','s1','google')).selectors[0].state,'LOOP');
  mockDns(t,{[root]:response([record(root,'other.example.',5),record(root,valid)])});assert.equal((await lookupDkim('example.com','s1','google')).selectors[0].state,'ERROR');
  mockDns(t,{[root]:response([record('unrelated.example',valid)])});assert.equal(dkimAnalysis(await lookupDkim('example.com','s1','google')).decoded,0);
});
test('the common-selector sweep is finite, deduplicates the selected name and keeps missed names scoped',async t=>{
  const root='google._domainkey.example.com',calls=mockDns(t,{[root]:[valid]});const report=await lookupDkim('example.com','google','google',true);assert.equal(report.selectors.length,DKIM_COMMON_SELECTORS.length);assert.equal(calls.length,DKIM_COMMON_SELECTORS.length);assert.equal(dkimAnalysis(report).decoded,1);assert.equal(dkimAnalysis(report).badge,'KEY SNAPSHOT');assert(report.selectors.some(result=>result.state==='NOT_FOUND'));assert(dkimAnalysis(report).checks[0].detail.includes('limited guess'));
});
test('revoked, malformed, multiple and unrelated TXT records are preserved as distinct findings',async t=>{
  const name='s._domainkey.example.com';mockDns(t,{[name]:['v=DKIM1;p=',valid,'v=DKIM1;p=bad!!!','verification=abc']});const report=await lookupDkim('example.com','s','google'),analysis=dkimAnalysis(report);assert.equal(report.selectors[0].entries.length,4);assert.equal(analysis.entries.length,3);assert.equal(analysis.revoked,1);assert.equal(analysis.decoded,1);assert.equal(analysis.badge,'KEY ISSUES');assert(analysis.checks.find(check=>check.label==='DKIM key records').detail.includes('1 selector(s)'));
});
test('DNS error and NXDOMAIN are not reported as successful message authentication',async t=>{
  const name='s._domainkey.example.com';mockDns(t,{[name]:response([],3)});const missing=await lookupDkim('example.com','s','google');assert.equal(missing.selectors[0].state,'NOT_FOUND');assert.match(missing.selectors[0].note,/NXDOMAIN/);
  mockDns(t,{[name]:response([],2)});const failed=await lookupDkim('example.com','s','google');assert.equal(failed.selectors[0].state,'ERROR');assert.equal(dkimAnalysis(failed).badge,'DNS REVIEW');
});
test('concurrency, total queries and delegation depth remain bounded',async t=>{
  let active=0,peak=0,calls=0;t.mock.method(globalThis,'fetch',async url=>{active++;peak=Math.max(peak,active);calls++;await new Promise(resolve=>setTimeout(resolve,1));active--;const name=new URL(url).searchParams.get('name');return response([record(name,'n'+calls+'.provider.example.',5)]);});const report=await lookupDkim('example.com','custom','google',true);assert(peak<=3);assert(calls<=DKIM_LIMITS.queries);assert(report.selectors.every(result=>result.aliases.length<=DKIM_LIMITS.aliases));assert(report.limits.length);
});
test('cancellation and the global deadline stop work without fabricating absent keys',async t=>{
  const abort=new AbortController();t.mock.method(globalThis,'fetch',async()=>{abort.abort();throw new DOMException('Cancelled','AbortError');});await assert.rejects(lookupDkim('example.com','s','google',false,abort.signal),{name:'AbortError'});
  const timeout=AbortSignal.timeout.bind(AbortSignal);t.mock.method(AbortSignal,'timeout',ms=>timeout(ms===DKIM_LIMITS.timeoutMs?10:ms));t.mock.method(globalThis,'fetch',async(url,options)=>new Promise((resolve,reject)=>{const handle=setTimeout(()=>reject(new Error('Test stalled')),1000);options.signal.addEventListener('abort',()=>{clearTimeout(handle);reject(options.signal.reason);},{once:true});}));const timed=await lookupDkim('example.com','s','google');assert.equal(timed.selectors[0].state,'ERROR');assert.equal(timed.queryCount,1);assert(timed.limits.length);
});
test('CSV exports preserve selector/key context and neutralize untrusted formula-like notes',async t=>{
  mockDns(t,{'s._domainkey.example.com':['v=DKIM1;p=;n==untrusted']});const report=await lookupDkim('example.com','s','google'),csv=dkimReportCsv(report);assert(csv.startsWith('\ufeff'));assert(csv.includes('Query hostname'));assert(csv.includes("'=untrusted"));assert(csv.includes(report.checkedAt));assert(csv.includes('REVOKED'));
});
test('record and tag limits are checked before expensive key parsing',()=>{
  assert(parseDkimRecord('p='+'A'.repeat(DKIM_LIMITS.recordLength)).errors.some(value=>value.includes('32 KiB')));assert(parseDkimRecord(Array.from({length:51},(_,i)=>'x'+i+'=value').join(';')).errors.some(value=>value.includes('50-tag')));
});
