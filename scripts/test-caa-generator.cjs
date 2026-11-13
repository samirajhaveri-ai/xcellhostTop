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

const { generateCaaPolicy, normalizeCaaIssuer, normalizeCaaReport, quoteCaaValue, caaGeneratorCsv, caaGeneratorShareUrl, parseCaaGeneratorSettings, CAA_PROVIDERS } = load('src/app/core/caa-generator.ts');
const { parseCaaValue, caaSetSummary } = load('src/app/core/caa-lookup.ts');
const { caaGeneratorPdf } = load('src/app/core/caa-generator-pdf.ts');
const settings=(extra={})=>({domain:'Example.COM.',authorities:[{issuer:'letsencrypt.org',issue:true,issuewild:false}],ordinary:'selected',wildcard:'inherit',ttl:'3600',critical:false,reports:[],...extra});
const entries=policy=>policy.records.map(record=>({name:record.name,ttl:record.ttl,rawValue:record.line,property:parseCaaValue(record.flags+' '+record.tag+' '+quoteCaaValue(record.value))}));

test('default generation emits a valid absolute zone-file record without DNS requests',()=>{
  const policy=generateCaaPolicy(settings());assert.equal(policy.domain,'example.com');assert.equal(policy.zoneFile,'example.com. 3600 IN CAA 0 issue "letsencrypt.org"\n');assert.equal(policy.records.length,1);assert.equal(policy.records[0].flags,0);assert.deepEqual(policy.wildcardIssuers,['letsencrypt.org']);assert(entries(policy).every(entry=>entry.property.issueValid));assert.match(policy.notes[0],/No DNS queries/);
});
test('CA identifiers are canonicalized, deduplicated and their requested tags are merged',()=>{
  assert.equal(normalizeCaaIssuer(' DIGICERT.COM. '),'digicert.com');assert.equal(normalizeCaaIssuer('b\u00fccher.example'),'xn--bcher-kva.example');
  const policy=generateCaaPolicy(settings({wildcard:'selected',authorities:[{issuer:'LetsEncrypt.org',issue:true,issuewild:false},{issuer:'letsencrypt.org.',issue:false,issuewild:true},{issuer:'digicert.com',issue:true,issuewild:false}]}));
  assert.equal(policy.settings.authorities.length,2);assert.equal(policy.records.length,3);assert.deepEqual(policy.ordinaryIssuers,['letsencrypt.org','digicert.com']);assert.deepEqual(policy.wildcardIssuers,['letsencrypt.org']);
});
test('issuewild rules take precedence and explicit block generates only empty grants for its tag',()=>{
  const policy=generateCaaPolicy(settings({wildcard:'block'}));assert.deepEqual(policy.records.map(r=>[r.tag,r.value]),[['issue','letsencrypt.org'],['issuewild',';']]);assert.equal(policy.wildcardBlocked,true);assert.deepEqual(caaSetSummary(entries(policy),true).issuers,[]);
  const all=generateCaaPolicy(settings({ordinary:'block',wildcard:'block',authorities:[]}));assert.deepEqual(all.records.map(r=>[r.tag,r.value]),[['issue',';'],['issuewild',';']]);assert.equal(caaSetSummary(entries(all),false).issuers.length,0);
  const inherit=generateCaaPolicy(settings({ordinary:'block'}));assert.equal(inherit.records.length,1);assert.equal(inherit.wildcardBlocked,true);
});
test('wildcard-only issuance can override an ordinary blocking rule',()=>{
  const policy=generateCaaPolicy(settings({ordinary:'block',wildcard:'selected',authorities:[{issuer:'sectigo.com',issue:true,issuewild:true}]}));assert.deepEqual(policy.records.map(r=>[r.tag,r.value]),[['issue',';'],['issuewild','sectigo.com']]);assert.equal(policy.ordinaryBlocked,true);assert.equal(policy.wildcardBlocked,false);assert.deepEqual(caaSetSummary(entries(policy),true).issuers,['sectigo.com']);
});
test('unselected tags are never silently converted to a deny-all or unrestricted policy',()=>{
  assert.throws(()=>generateCaaPolicy(settings({authorities:[]})),/Select at least one issue/);assert.throws(()=>generateCaaPolicy(settings({wildcard:'selected'})),/Select at least one issuewild/);
  assert.throws(()=>generateCaaPolicy(settings({ordinary:'invalid'})),/valid ordinary/);assert.throws(()=>generateCaaPolicy(settings({critical:1})),/valid ordinary/);
});
test('TTL is consistent across the RRset, including zero and the maximum supported value',()=>{
  for(const ttl of ['0','3600','2147483647']){const p=generateCaaPolicy(settings({ttl,critical:true,wildcard:'block',reports:['mailto:security@example.com']}));assert(p.records.every(r=>r.ttl===Number(ttl)&&r.flags===128));assert(entries(p).every(entry=>entry.property.critical));}
  for(const ttl of ['','-1','1.5','1e3','2147483648','3600\nIN TXT "bad"'])assert.throws(()=>generateCaaPolicy(settings({ttl})),/TTL/);
});
test('reporting destinations normalize supported URIs, deduplicate and do not fetch',()=>{
  assert.equal(normalizeCaaReport('mailto:security@example.com'),'mailto:security@example.com');assert.equal(normalizeCaaReport('HTTPS://EXAMPLE.COM/reports'),'https://example.com/reports');assert.equal(normalizeCaaReport('http://example.com/reports'),'http://example.com/reports');
  const p=generateCaaPolicy(settings({reports:['','mailto:security@example.com','mailto:security@example.com','https://example.com/reports']}));assert.equal(p.records.filter(r=>r.tag==='iodef').length,2);assert(entries(p).filter(e=>e.property.tag==='iodef').every(e=>e.property.reportingValid));
  for(const value of ['security@example.com','mailto:invalid','javascript:alert(1)','ftp://example.com','https://user:password@example.com','mailto:security@example.com?body=%0D%0ABcc:bad','https://example.com/\nIN TXT bad'])assert.throws(()=>normalizeCaaReport(value));
});
test('issuer, owner and reporting inputs cannot inject zone-file lines or extra properties',()=>{
  for(const issuer of ['https://letsencrypt.org','ca.example;other=1','127.0.0.1','issuer.example/path','a'.repeat(64)+'.example','bad_domain.example','letsencrypt.org"\nIN TXT "bad'])assert.throws(()=>normalizeCaaIssuer(issuer));
  for(const domain of ['*.example.com','example.com\nIN TXT "x"','http://user:pass@example.com','127.0.0.1'])assert.throws(()=>generateCaaPolicy(settings({domain})));
  assert.equal(quoteCaaValue('a"b\\c'),'"a\\"b\\\\c"');const p=generateCaaPolicy(settings({reports:['https://example.com/report?value="quoted"']}));assert(entries(p).every(e=>!!e.property));assert.equal(p.zoneFile.split('\n').filter(Boolean).length,2);
});
test('bounded policies reject oversized CA lists, report lists and destinations',()=>{
  assert.throws(()=>generateCaaPolicy(settings({authorities:Array.from({length:21},(_,i)=>({issuer:'ca'+i+'.example',issue:true,issuewild:false}))})),/20 CA/);assert.throws(()=>generateCaaPolicy(settings({reports:Array(6).fill('mailto:a@example.com')})),/5 reporting/);assert.throws(()=>normalizeCaaReport('https://example.com/'+ 'a'.repeat(2050)));
});
test('share links round-trip normalized fields and ignore unsupported object keys',()=>{
  const p=generateCaaPolicy(settings({critical:true,wildcard:'block',reports:['mailto:security@example.com']})),url=new URL(caaGeneratorShareUrl('https://xcellhost.cloud/tools/caa-generator?old=1#section',p));assert.equal(url.hash,'');assert.equal(url.searchParams.has('old'),false);assert.deepEqual(parseCaaGeneratorSettings(url.searchParams.get('config')),p.settings);
  assert.equal(parseCaaGeneratorSettings(JSON.stringify({...p.settings,unknown:'ignored',__proto__:{injected:true}})).injected,undefined);
  for(const raw of ['not json','null','[]',JSON.stringify({...p.settings,ttl:3600}),JSON.stringify({...p.settings,reports:[{}]}),'x'.repeat(16001)])assert.throws(()=>parseCaaGeneratorSettings(raw));
});
test('documented provider presets are unique bare identifiers with canonical DigiCert value',()=>{
  assert.equal(CAA_PROVIDERS.length,8);assert.equal(new Set(CAA_PROVIDERS.map(p=>p.issuer)).size,8);assert(CAA_PROVIDERS.every(p=>normalizeCaaIssuer(p.issuer)===p.issuer&&p.docs.startsWith('https://')));assert.equal(CAA_PROVIDERS.find(p=>p.name==='DigiCert').issuer,'digicert.com');
});
test('CSV, JSON and PDF are generation artifacts and preserve record values',()=>{
  const p=generateCaaPolicy(settings({wildcard:'block',reports:['mailto:security@example.com']})),csv=caaGeneratorCsv(p),pdf=Buffer.from(caaGeneratorPdf(p));assert(csv.startsWith('\ufeff'));assert(csv.includes('Generated; not published or queried'));assert(csv.includes('"0","issue"'));assert.equal(JSON.parse(JSON.stringify(p)).records[1].value,';');assert(pdf.toString('latin1').startsWith('%PDF-'));assert(pdf.toString('latin1').includes('https://xcellhost.cloud/tools/caa-generator?domain=example.com'));
  const changed=structuredClone(p);changed.records[0].value='=UNTRUSTED(1)';assert(caaGeneratorCsv(changed).includes("'=UNTRUSTED(1)"));
});


