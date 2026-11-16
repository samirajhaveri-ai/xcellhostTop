const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const cache=new Map();const load=file=>{const resolved=path.resolve(file);if(cache.has(resolved))return cache.get(resolved);const api={};cache.set(resolved,api);const localRequire=name=>name.startsWith('.')?load(path.resolve(path.dirname(resolved),name+'.ts')):require(name);new Function('exports','require',ts.transpileModule(fs.readFileSync(resolved,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,localRequire);return api;};
const {generateSpfPolicy,normalizeSpfOwner,normalizeSpfInclude,normalizeSpfNetwork,splitSpfList,spfGeneratorShareUrl,parseSpfGeneratorSettings,spfGeneratorCsv,SPF_PROVIDERS}=load('src/app/core/spf-generator.ts');
const {parseSpfPolicy}=load('src/app/core/spf-lookup.ts');const {readTxtValue}=load('src/app/core/txt-lookup.ts');const {spfGeneratorPdf}=load('src/app/core/spf-generator-pdf.ts');
const settings=(extra={})=>({domain:'Example.COM.',a:false,mx:false,providers:[],includes:[],ipv4:[],ipv6:[],policy:'~all',ttl:'3600',...extra});

test('local generation creates one TXT policy without DNS or publishing actions',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw new Error('Network request forbidden');});const result=generateSpfPolicy(settings());assert.equal(result.domain,'example.com');assert.equal(result.record,'v=spf1 ~all');assert.equal(result.zoneFile,'example.com. 3600 IN TXT "v=spf1 ~all"\n');assert.equal(result.directDnsTerms,0);assert(result.warnings.some(s=>s.includes('No sending source')));assert(result.notes[0].includes('No DNS lookup'));
});
test('presets and custom includes merge deterministically without duplicate authorizations',()=>{
 const result=generateSpfPolicy(settings({providers:['microsoft','google','google'],includes:['_SPF.GOOGLE.COM.','custom.example','CUSTOM.EXAMPLE.']}));assert.equal(result.record,'v=spf1 include:_spf.google.com include:spf.protection.outlook.com include:custom.example ~all');assert.equal(result.directDnsTerms,3);assert.deepEqual(result.settings.providers,['google','microsoft']);assert.deepEqual(result.settings.includes,['custom.example']);assert.deepEqual(parseSpfPolicy(result.record).errors,[]);
});
test('a and mx are explicit permissions and provider account instructions remain contextual',()=>{
 const result=generateSpfPolicy(settings({a:true,mx:true,providers:['sendgrid']}));assert.equal(result.record,'v=spf1 a mx include:sendgrid.net ~all');assert.equal(result.directDnsTerms,3);assert(result.warnings.some(s=>s.includes('website')));assert(result.warnings.some(s=>s.includes('inbound')));assert(result.notes.some(s=>s.includes('return-path')));assert(!generateSpfPolicy(settings()).record.split(' ').includes('a'));
});
test('IPv4 CIDR host bits are masked, /32 omitted and equivalent networks deduplicated',()=>{
 assert.equal(normalizeSpfNetwork('192.0.2.129/24',4),'192.0.2.0/24');assert.equal(normalizeSpfNetwork('203.0.113.7/32',4),'203.0.113.7');assert.equal(normalizeSpfNetwork('203.0.113.7/0',4),'0.0.0.0/0');
 const result=generateSpfPolicy(settings({ipv4:['192.0.2.7/24','192.0.2.0/24','203.0.113.7/32']}));assert.deepEqual(result.settings.ipv4,['192.0.2.0/24','203.0.113.7']);assert.equal(result.directDnsTerms,0);assert(result.record.includes('ip4:192.0.2.0/24'));assert(result.warnings.some(s=>s.includes('canonicalized')));
});
test('IPv6 CIDR masking handles non-hextet boundaries, compression and mapped addresses',()=>{
 assert.equal(normalizeSpfNetwork('2001:0DB8:abcd:FFFF::1234/49',6),'2001:db8:abcd:8000::/49');assert.equal(normalizeSpfNetwork('2001:db8::1234/128',6),'2001:db8::1234');assert.equal(normalizeSpfNetwork('2001:db8::1/0',6),'::/0');assert.equal(normalizeSpfNetwork('::ffff:192.0.2.1/120',6),'::ffff:c000:200/120');
 const result=generateSpfPolicy(settings({ipv6:['2001:0db8::1/128','2001:db8::1']}));assert.equal(result.settings.ipv6.length,1);assert(result.record.includes('ip6:2001:db8::1'));
});
test('IP input rejects wrong families, zones, legacy IPv4, ports and invalid prefixes',()=>{
 for(const value of ['192.0.2.1/33','192.0.2.1/-1','192.0.2.1/01','192.168.01.1','999.1.1.1','192.0.2.1:25','example.com','192.0.2.1/24/2','::1'])assert.throws(()=>normalizeSpfNetwork(value,4),value);
 for(const value of ['2001:db8::/129','2001:db8::/064','fe80::1%eth0','[2001:db8::1]','2001:db8:::1','192.0.2.1'])assert.throws(()=>normalizeSpfNetwork(value,6),value);
});
test('bare domain/include validation prevents zone-file and SPF-term injection or self-includes',()=>{
 assert.equal(normalizeSpfOwner('mail.EXAMPLE.com.'),'mail.example.com');assert.equal(normalizeSpfInclude('_SPF.Example.com.'),'_spf.example.com');
 for(const value of ['https://example.com','person@example.com','example.com/path','example.com\nIN TXT evil','_spf.example.com','example.com;bad'])assert.throws(()=>normalizeSpfOwner(value),value);
 for(const value of ['include:example.com','example.com -all','https://example.com','%{d}','example.com;','a@example.com','example.com/24'])assert.throws(()=>normalizeSpfInclude(value),value);
 assert.throws(()=>generateSpfPolicy(settings({includes:['EXAMPLE.COM.']})),/cycle/);
});
test('one terminal all mechanism preserves selected policy semantics and non-sending intent',()=>{
 for(const policy of ['~all','-all','?all']){const result=generateSpfPolicy(settings({providers:['google'],policy}));assert(result.record.endsWith(' '+policy));assert.equal(result.terms.filter(t=>t.value.endsWith('all')).length,1);assert(!parseSpfPolicy(result.record).errors.length);}
 const none=generateSpfPolicy(settings({policy:'-all'}));assert.equal(none.record,'v=spf1 -all');assert(none.warnings.some(s=>s.includes('no sending IPs')));assert.throws(()=>generateSpfPolicy(settings({policy:'+all'})));
});
test('lookup counts are direct only and excessive or broad grants produce explicit review notes',()=>{
 const result=generateSpfPolicy(settings({a:true,mx:true,includes:Array.from({length:10},(_,i)=>'sender'+i+'.example'),ipv4:['192.0.2.1','0.0.0.0/0']}));assert.equal(result.directDnsTerms,12);assert(result.warnings.some(s=>s.includes('More than 10')));assert(result.warnings.some(s=>s.includes('/0')));
 const nested=generateSpfPolicy(settings({providers:['google']}));assert(nested.warnings.some(s=>s.includes('not the complete lookup budget')));assert.equal(nested.directDnsTerms,1);
});
test('long logical TXT records split into <=255-byte strings that rejoin without added spaces',()=>{
 const result=generateSpfPolicy(settings({includes:Array.from({length:15},(_,i)=>'sender'+i+'.mail.example'),ipv4:['192.0.2.1'],policy:'-all'}));assert(result.bytes>255);assert(result.chunks.every(chunk=>Buffer.byteLength(chunk)<=255));assert.equal(result.chunks.join(''),result.record);const data=result.zoneFile.replace(/^\S+ \d+ IN TXT /,'').trim();assert.equal(readTxtValue(data).value,result.record);assert.equal(result.zoneFile.split('\n').filter(Boolean).length,1);
});
test('TTL and collection bounds reject malformed input without truncating authorizations',()=>{
 for(const ttl of ['-1','1.5','Infinity','2147483648','1e3'])assert.throws(()=>generateSpfPolicy(settings({ttl})),ttl);
 assert.equal(generateSpfPolicy(settings({ttl:'0'})).ttl,0);assert.equal(generateSpfPolicy(settings({ttl:'2147483647'})).ttl,2147483647);
 assert.throws(()=>generateSpfPolicy(settings({providers:['unknown']})));assert.throws(()=>generateSpfPolicy(settings({includes:Array(21).fill('a.example')})));assert.throws(()=>generateSpfPolicy(settings({ipv4:Array(101).fill('192.0.2.1')})));assert.throws(()=>generateSpfPolicy(settings({a:'true'})));assert.throws(()=>generateSpfPolicy(settings({includes:[null]})));
});
test('share links round-trip normalized settings and ignore unrecognized object properties',()=>{
 const result=generateSpfPolicy(settings({providers:['google'],ipv4:['192.0.2.33/24'],policy:'-all'})),url=new URL(spfGeneratorShareUrl('https://xcellhost.cloud/tools/spf-generator?old=1#part',result.settings));assert(!url.hash);assert(!url.searchParams.has('old'));const decoded=parseSpfGeneratorSettings(url.searchParams.get('config'));assert.equal(generateSpfPolicy(decoded).record,result.record);assert.deepEqual(decoded,result.settings);
 const data=JSON.parse(url.searchParams.get('config'));data.__proto__={polluted:true};data.unrelated='ignored';assert.deepEqual(parseSpfGeneratorSettings(JSON.stringify(data)),result.settings);assert.throws(()=>parseSpfGeneratorSettings('{bad'));assert.throws(()=>parseSpfGeneratorSettings(JSON.stringify({...data,version:2})));assert.throws(()=>parseSpfGeneratorSettings('x'.repeat(12001)));
});
test('list parsing accepts comma/space/newline separators and presets are unique documented domains',()=>{
 assert.deepEqual(splitSpfList(' 192.0.2.1,\n198.51.100.0/24\t203.0.113.3 '),['192.0.2.1','198.51.100.0/24','203.0.113.3']);assert.throws(()=>splitSpfList('x'.repeat(12001)));assert.equal(new Set(SPF_PROVIDERS.map(p=>p.id)).size,SPF_PROVIDERS.length);for(const p of SPF_PROVIDERS){assert.equal(normalizeSpfInclude(p.include),p.include);assert(p.docs.startsWith('https://'));}
});
test('CSV/JSON/PDF are generation artifacts, preserve the policy and do not claim live authentication',()=>{
 const result=generateSpfPolicy(settings({providers:['google'],ipv4:['192.0.2.1'],policy:'-all'})),csv=spfGeneratorCsv(result),json=JSON.stringify(result);assert(csv.startsWith('\ufeff'));assert(csv.includes(result.record));assert(csv.includes('not published'));assert.equal(JSON.parse(json).record,result.record);const pdf=Buffer.from(spfGeneratorPdf(result));assert.equal(pdf.subarray(0,4).toString(),'%PDF');assert(pdf.toString().includes('Generated SPF TXT record; not published or tested'));
});
