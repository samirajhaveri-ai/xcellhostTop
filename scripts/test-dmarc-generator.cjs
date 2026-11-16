const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {DMARC_GENERATOR_DEFAULTS,generateDmarcPolicy,normalizeDmarcOwner,normalizeDmarcMailbox,dmarcMailboxUri,splitDmarcMailboxes,dmarcGeneratorShareUrl,parseDmarcGeneratorSettings,dmarcGeneratorCsv}=load('src/app/core/dmarc-generator.ts');
const {parseDmarcRecord}=load('src/app/core/dmarc-lookup.ts');const {readTxtValue}=load('src/app/core/txt-lookup.ts');const {dmarcGeneratorPdf}=load('src/app/core/dmarc-generator-pdf.ts');
const settings=(extra={})=>({...DMARC_GENERATOR_DEFAULTS,domain:'Example.COM.',aggregate:[],failure:[],...extra});

test('generation is local and emits one policy at the _dmarc owner',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw new Error('Network request forbidden');});const result=generateDmarcPolicy(settings());assert.equal(result.owner,'_dmarc.example.com');assert.equal(result.record,'v=DMARC1; p=none; adkim=r; aspf=r');assert.equal(result.zoneFile,'_dmarc.example.com. 3600 IN TXT "'+result.record+'"\n');assert.equal(result.requestedPolicy,'none');assert(result.notes[0].includes('No DNS query'));assert(result.warnings.some(s=>s.includes('No rua')));assert(parseDmarcRecord(result.record).usable);
});
test('domain input accepts bare subdomains and rejects prefixes, URLs and zone-file injection',()=>{
 assert.equal(normalizeDmarcOwner('mail.EXAMPLE.com.'),'mail.example.com');for(const value of ['','https://example.com','user@example.com','_dmarc.example.com','example.com\nIN TXT evil','example.com/path','example.com;bad','127.0.0.1'])assert.throws(()=>normalizeDmarcOwner(value),value);
});
test('all policies and alignment settings keep version first and generate valid common syntax',()=>{
 for(const policy of ['none','quarantine','reject'])for(const adkim of ['r','s'])for(const aspf of ['r','s']){const result=generateDmarcPolicy(settings({policy,adkim,aspf}));assert(result.record.startsWith('v=DMARC1; p='+policy));const parsed=parseDmarcRecord(result.record);assert(parsed.usable);assert.equal(parsed.policy,policy);assert.equal(parsed.adkim,adkim);assert.equal(parsed.aspf,aspf);}
});
test('subdomain branches fall back from np to sp to p and current testing reduces each branch one level',()=>{
 let result=generateDmarcPolicy(settings({policy:'reject',subdomain:'quarantine',testing:true}));assert(result.record.includes('t=y'));assert.equal(result.requestedPolicy,'quarantine');assert.equal(result.subdomainPolicy,'none');assert.equal(result.nonexistentPolicy,'none');assert(!result.record.includes('np='));
 result=generateDmarcPolicy(settings({policy:'reject',subdomain:'none',nonexistent:'reject'}));assert.equal(result.subdomainPolicy,'none');assert.equal(result.nonexistentPolicy,'reject');assert(result.record.includes('np=reject'));assert(!result.record.includes('t='));
});
test('current mode omits removed tags and legacy mode emits scoped percentage and interval requests',()=>{
 const current=generateDmarcPolicy(settings({percentage:'bad',interval:'bad',aggregate:['r@example.com']}));assert(!current.record.includes('pct='));assert(!current.record.includes('ri='));assert(!current.record.includes('rf='));
 const legacy=generateDmarcPolicy(settings({standard:'legacy',policy:'reject',percentage:'25',interval:'43200',aggregate:['r@example.com']}));assert(legacy.record.includes('pct=25'));assert(legacy.record.includes('ri=43200'));assert(!legacy.record.includes('np='));assert(!legacy.tags.some(tag=>tag.name==='t'));assert.equal(legacy.requestedPolicy,'reject');assert(legacy.warnings.some(s=>s.includes('removed these tags')));assert(legacy.warnings.some(s=>s.includes('not an assurance')));assert(!generateDmarcPolicy(settings({standard:'legacy'})).record.includes('ri='));
 assert.throws(()=>generateDmarcPolicy(settings({standard:'legacy',testing:true})));assert.throws(()=>generateDmarcPolicy(settings({standard:'legacy',nonexistent:'none'})));
});
test('reporting lists normalize domains, preserve local-part case and deduplicate addresses',()=>{
 assert.equal(normalizeDmarcMailbox(' MAILTO:Reports@EXAMPLE.com. '),'Reports@example.com');const result=generateDmarcPolicy(settings({aggregate:['r@EXAMPLE.com','mailto:r@example.com'],failure:['f@example.com'],failureOptions:'s:d:1'}));assert.deepEqual(result.settings.aggregate,['r@example.com']);assert.equal(result.settings.failureOptions,'1:d:s');assert(result.record.includes('rua=mailto:r@example.com'));assert(result.record.includes('ruf=mailto:f@example.com'));assert(result.record.includes('fo=1:d:s'));assert(parseDmarcRecord(result.record).usable);
});
test('special local-part characters are URI encoded without adding tags, headers or quoted strings',()=>{
 const uri=dmarcMailboxUri("tag#part?x=y/r%25'o@example.com");assert(uri.includes('%23'));assert(uri.includes('%3F'));assert(uri.includes('%3D'));assert(uri.includes('%2F'));assert(uri.includes('%25'));assert(uri.includes('%27'));const result=generateDmarcPolicy(settings({aggregate:["tag#part?x=y/r%25'o@example.com"]}));assert(parseDmarcRecord(result.record).usable);assert.equal(result.tags.filter(tag=>tag.name==='rua').length,1);assert(!result.record.includes('"'));
});
test('invalid addresses and report-URI injection are rejected without contacting destinations',()=>{
 for(const value of ['Display <r@example.com>','r@example.com?subject=test','r@example.com; p=reject','r@example.com!10m','"r"@example.com','r..x@example.com','.r@example.com','r.@example.com','r@localhost','r@_mail.example.com','r@example.com/path','r\r\n@example.com','r@@example.com','ü@example.com'])assert.throws(()=>normalizeDmarcMailbox(value),value);
 assert.throws(()=>generateDmarcPolicy(settings({aggregate:['r@example.com;ruf=mailto:x@evil.example']})));
});
test('failure options require unique values with 0 and 1 mutually exclusive and are omitted without ruf',()=>{
 for(const failureOptions of ['0:1','d:d','2','0::d',''])assert.throws(()=>generateDmarcPolicy(settings({failure:['r@example.com'],failureOptions})),failureOptions);
 const result=generateDmarcPolicy(settings({failureOptions:'1:d:s'}));assert(!result.record.includes('fo='));assert(!result.record.includes('ruf='));
});
test('external reports, failure data and strict alignment receive scoped review notes',()=>{
 const result=generateDmarcPolicy(settings({policy:'reject',adkim:'s',aggregate:['r@outside.example'],failure:['f@example.com']}));assert(result.warnings.some(s=>s.includes('External-report authorization')));assert(result.warnings.some(s=>s.includes('message-specific')));assert(result.warnings.some(s=>s.includes('Strict alignment')));assert(result.warnings.some(s=>s.includes('general-purpose')));
 assert(!generateDmarcPolicy(settings({aggregate:['r@reports.example.com']})).warnings.some(s=>s.includes('External-report')));
});
test('TTL, legacy numeric ranges and collection limits reject invalid input',()=>{
 for(const ttl of ['-1','1.5','2147483648','1e3'])assert.throws(()=>generateDmarcPolicy(settings({ttl})));assert.equal(generateDmarcPolicy(settings({ttl:'0'})).ttl,0);
 for(const percentage of ['-1','101','50.5'])assert.throws(()=>generateDmarcPolicy(settings({standard:'legacy',percentage})));
 for(const interval of ['-1','4294967296','1e3'])assert.throws(()=>generateDmarcPolicy(settings({standard:'legacy',interval})));
 assert.throws(()=>generateDmarcPolicy(settings({aggregate:Array(6).fill('r@example.com')})));assert.throws(()=>generateDmarcPolicy(settings({testing:'yes'})));assert.throws(()=>generateDmarcPolicy(settings({policy:'bad'})));assert.throws(()=>generateDmarcPolicy(settings({adkim:'bad'})));assert.throws(()=>generateDmarcPolicy(settings({aggregate:[null]})));
});
test('long TXT values split into strings <=255 bytes that concatenate exactly into one policy',()=>{
 const addresses=Array.from({length:5},(_,i)=>('report'+i+'x'.repeat(40))+'@'+('dest'+i+'.'+'x'.repeat(50)+'.example'));const result=generateDmarcPolicy(settings({aggregate:addresses,failure:addresses}));assert(result.bytes>255);assert(result.chunks.every(chunk=>Buffer.byteLength(chunk)<=255));assert.equal(result.chunks.join(''),result.record);const value=result.zoneFile.replace(/^\S+ \d+ IN TXT /,'').trim();assert.equal(readTxtValue(value).value,result.record);assert.equal(result.zoneFile.split('\n').filter(Boolean).length,1);assert(parseDmarcRecord(result.record).usable);
});
test('shared configurations round-trip canonical fields while ignoring unknown keys and rejecting malformed input',()=>{
 const result=generateDmarcPolicy(settings({policy:'quarantine',aggregate:['mailto:R@EXAMPLE.com'],testing:true}));const url=new URL(dmarcGeneratorShareUrl('https://xcellhost.cloud/tools/dmarc-generator?old=1#fragment',result.settings));assert(!url.hash);assert(!url.searchParams.has('old'));const input=parseDmarcGeneratorSettings(url.searchParams.get('config'));assert.deepEqual(input,result.settings);assert.equal(generateDmarcPolicy(input).record,result.record);
 const data={version:1,...result.settings,unrelated:'ignored'};assert.deepEqual(parseDmarcGeneratorSettings(JSON.stringify(data)),result.settings);assert.throws(()=>parseDmarcGeneratorSettings('{bad'));assert.throws(()=>parseDmarcGeneratorSettings(JSON.stringify({...data,version:2})));assert.throws(()=>parseDmarcGeneratorSettings('x'.repeat(12001)));
});
test('report lists, CSV, JSON and PDF preserve the generated configuration and local-only scope',()=>{
 assert.deepEqual(splitDmarcMailboxes('r@example.com, f@example.com\nnext@example.com'),['r@example.com','f@example.com','next@example.com']);assert.throws(()=>splitDmarcMailboxes('x'.repeat(4097)));const result=generateDmarcPolicy(settings({aggregate:['r@example.com']})),csv=dmarcGeneratorCsv(result);assert(csv.startsWith('\ufeff'));assert(csv.includes(result.record));assert(csv.includes(result.owner));assert(csv.includes('not published'));assert.equal(JSON.parse(JSON.stringify(result)).record,result.record);const pdf=Buffer.from(dmarcGeneratorPdf(result));assert.equal(pdf.subarray(0,4).toString(),'%PDF');assert(pdf.toString().includes('Generated DMARC TXT record; not published or tested'));
});
