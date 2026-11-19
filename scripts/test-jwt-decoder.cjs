const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const modules={};function load(name){if(modules[name])return modules[name];const api={};modules[name]=api;new Function('exports','require',ts.transpileModule(fs.readFileSync('src/app/core/'+name+'.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,request=>{if(request==='./json-formatter')return load('json-formatter');throw Error('Unexpected dependency '+request);});return api;}
const {JWT_INPUT_LIMIT,decodeJwt,jwtSample,jwtTimeCards,jwtDuration,jwtReportJson}=load('jwt-decoder');
const enc=value=>Buffer.from(typeof value==='string'?value:JSON.stringify(value),'utf8').toString('base64url');
const token=(payload={},header={alg:'HS256',typ:'JWT'},signature=Buffer.alloc(32))=>enc(header)+'.'+enc(payload)+'.'+Buffer.from(signature).toString('base64url');
const now=1735689600000;

test('decodes UTF-8 header and payload objects into readable JSON',()=>{
 const report=decodeJwt(token({sub:'demo',name:'नमस्ते 🌍',nested:{enabled:true}}));assert.equal(report.algorithm,'HS256');assert.match(report.headerJson,/"alg": "HS256"/);assert.match(report.payloadJson,/नमस्ते 🌍/);assert.equal(report.signature.verified,false);assert.equal(report.signature.bytes,32);assert.equal(report.claims[2].type,'object');
});
test('signature bytes are decoded exactly without claiming cryptographic verification',()=>{
 const report=decodeJwt(token({},undefined,new Uint8Array([0,127,128,255])));assert.equal(report.signature.hex,'007f80ff');assert.equal(report.signature.bytes,4);assert.equal(report.signature.verified,false);assert.equal(report.signature.encoded,'AH-A_w');
});
test('Bearer prefix and surrounding whitespace are removed without changing the compact token',()=>{
 const compact=token({iss:'https://example.com'}),report=decodeJwt(' \r\n bEaReR\t'+compact+' \n');assert.equal(report.token,compact);assert(report.hadBearerPrefix);assert(report.notes.some(note=>note.includes('Bearer')));
});
test('two-part, four-part, empty and wrapped tokens are rejected',()=>{
 for(const value of ['', 'abc', 'a.b', 'a.b.c.d', token().replace('.', '.\n'), token().replace('.', '. ')])assert.throws(()=>decodeJwt(value));assert.throws(()=>decodeJwt('a.b.c.d.e'),/encrypted JWE/);
});
test('unpadded Base64url rejects padding, standard alphabet and invalid lengths',()=>{
 const parts=token().split('.');for(const segment of ['=',parts[0]+'=','ab+c','ab/c','a','!bad'])assert.throws(()=>decodeJwt(segment+'.'+parts[1]+'.'+parts[2]),/Base64url/);
 assert.throws(()=>decodeJwt(parts[0]+'.'+parts[1]+'.ab'),/non-canonical/);assert.throws(()=>decodeJwt(parts[0]+'.'+parts[1]+'.a'),/Base64url/);
});
test('invalid UTF-8, malformed JSON and JSON BOMs are rejected',()=>{
 const parts=token().split('.');assert.throws(()=>decodeJwt(Buffer.from([255]).toString('base64url')+'.'+parts[1]+'.'+parts[2]),/UTF-8/);assert.throws(()=>decodeJwt(parts[0]+'.'+enc('{"a":}')+'.'+parts[2]),/Payload JSON/);assert.throws(()=>decodeJwt(enc('\uFEFF{"alg":"HS256"}')+'.'+parts[1]+'.'+parts[2]),/BOM/);
});
test('header and payload must be objects rather than primitive or array JSON',()=>{
 for(const raw of ['null','[]','"text"','42','true']){assert.throws(()=>decodeJwt(token(raw)),/Payload must be a JSON object/);assert.throws(()=>decodeJwt(token({},raw)),/Header must be a JSON object/);}
});
test('a nonempty string alg parameter is required in the header',()=>{
 for(const header of [{},{alg:null},{alg:256},{alg:''},{alg:[]},{alg:{}}])assert.throws(()=>decodeJwt(token({},header)),/alg parameter/);
});
test('an unsecured alg none token has an empty signature and explicit notes',()=>{
 const report=decodeJwt(token({sub:'demo'},{alg:'none'},new Uint8Array()));assert.equal(report.signature.bytes,0);assert.equal(report.signature.encoded,'');assert.equal(report.signature.verified,false);assert(report.notes.some(note=>note.includes('unsecured')));assert.throws(()=>decodeJwt(token({},{alg:'none'})),/must have an empty/);
});
test('an empty signature for a declared signing algorithm is rejected',()=>{
 assert.throws(()=>decodeJwt(token({},undefined,new Uint8Array())),/signature segment is empty/);
});
test('unencoded payloads are unsupported and critical extensions are only noted',()=>{
 assert.throws(()=>decodeJwt(token({},{alg:'HS256',b64:false})),/Unencoded or detached/);const report=decodeJwt(token({},{alg:'HS256',crit:['example'],b64:'false'}));assert(report.notes.some(note=>note.includes('Critical extensions')));assert(report.notes.some(note=>note.includes('unexpected value')));
});
test('unknown algorithm names are displayed without being treated as verified',()=>{
 const report=decodeJwt(token({},{alg:'custom-algorithm'}));assert.equal(report.algorithm,'custom-algorithm');assert.equal(report.algorithmDescription,'Unrecognized algorithm name');assert(report.notes.some(note=>note.includes('common-algorithm')));assert.equal(report.signature.verified,false);
});
test('original numeric tokens, escape spellings and integer-like property order survive decoding',()=>{
 const raw='{"10":9007199254740993,"2":1.00,"x":"\\u0061","nested":{"n":1e999}}';const report=decodeJwt(token(raw));assert.equal(report.claims[0].name,'10');assert.equal(report.claims[0].raw,'9007199254740993');assert.equal(report.claims[1].raw,'1.00');assert.equal(report.claims[2].raw,'"\\u0061"');assert(report.payloadJson.includes('1e999'));
});
test('duplicate top-level claims are retained while summaries use the last occurrence',()=>{
 const report=decodeJwt(token('{"exp":1,"\\u0065xp":1735693200,"sub":"a","sub":"b"}'));assert.equal(report.claims.length,4);assert.equal(report.times.exp.seconds,1735693200);assert(report.notes.some(note=>note.includes('last occurrence')));assert.equal(report.claims[0].raw,'1');
});
test('duplicate algorithm parameters use the last value and retain the JSON',()=>{
 const report=decodeJwt(token({},'{"alg":"RS256","alg":"HS256"}'));assert.equal(report.algorithm,'HS256');assert.equal(report.headerMembers.length,2);assert(report.headerJson.includes('RS256'));assert(report.notes.some(note=>note.includes('Duplicate')));
});
test('prototype-shaped claims and algorithms cannot reach inherited dictionary properties',()=>{
 const report=decodeJwt(token('{"__proto__":{"admin":true},"constructor":"value","toString":false}',{alg:'constructor'}));assert.equal(report.claims[0].registered,false);assert.equal(report.claims[1].registered,false);assert.equal(report.algorithmDescription,'Unrecognized algorithm name');assert.equal({}.admin,undefined);
});
test('registered claims get descriptions and custom claims keep their application context',()=>{
 const report=decodeJwt(token({iss:'issuer',sub:'subject',aud:['app'],jti:'id',role:'viewer'}));for(const claim of report.claims.slice(0,4))assert(claim.registered);assert.equal(report.claims[4].registered,false);assert.match(report.claims[4].description,/application/);
});
test('wrong types for string and audience claims are noted without replacing their data',()=>{
 const report=decodeJwt(token({iss:42,sub:null,jti:[],aud:['app',1]}));assert.equal(report.notes.filter(note=>/expected to be a string/.test(note)).length,4);assert.equal(report.claims[0].raw,'42');assert.equal(decodeJwt(token({aud:'app'})).notes.length,0);assert.equal(decodeJwt(token({aud:['one','two']})).notes.length,0);
});
test('exp, nbf and iat are NumericDates in seconds and preserve fractions',()=>{
 const report=decodeJwt(token({exp:1735689600.125,nbf:1735689600,iat:1735689599.999}));assert.equal(report.times.exp.iso,'2025-01-01T00:00:00.125Z');assert.equal(report.times.iat.iso,'2024-12-31T23:59:59.999Z');assert.equal(jwtTimeCards(report,now)[0].state,'future');assert.equal(jwtTimeCards(report,now+125)[0].state,'past');
});
test('expiration boundary is exclusive and not-before boundary is inclusive',()=>{
 const report=decodeJwt(token({exp:1735689600,nbf:1735689600}));const at=jwtTimeCards(report,now),before=jwtTimeCards(report,now-1);assert.equal(at[0].tone,'danger');assert.equal(at[0].state,'past');assert.equal(at[1].state,'past');assert.equal(before[0].state,'future');assert.equal(before[1].state,'future');
});
test('missing and malformed dates are distinct and numeric strings are not coerced',()=>{
 const missing=jwtTimeCards(decodeJwt(token({})),now);assert(missing.every(card=>card.state==='missing'));for(const value of ['1735689600',null,true,[],{},'bad']){const cards=jwtTimeCards(decodeJwt(token({exp:value,nbf:value,iat:value})),now);assert(cards.every(card=>card.state==='invalid'));assert(cards.every(card=>!card.iso));}
 assert.equal(jwtTimeCards(decodeJwt(token('{"exp":1e999}')),now)[0].state,'invalid');assert.equal(jwtTimeCards(decodeJwt(token({exp:9000000000000})),now)[0].state,'invalid');
});
test('future issued-at and inconsistent date ordering are called out',()=>{
 const report=decodeJwt(token({exp:100,nbf:101,iat:102}));assert(report.notes.some(note=>note.includes('earlier than the issued-at')));assert(report.notes.some(note=>note.includes('at or before the not-before')));assert.equal(jwtTimeCards(report,0)[2].tone,'warning');
});
test('time comparisons update independently and never turn signature verification on',()=>{
 const report=decodeJwt(token({exp:1735689601}));assert.equal(jwtTimeCards(report,now)[0].state,'future');assert.equal(jwtTimeCards(report,now+2000)[0].state,'past');assert.equal(report.signature.verified,false);assert.throws(()=>jwtTimeCards(report,NaN),/comparison time/);
});
test('duration output is compact and supports subsecond differences',()=>{
 assert.equal(jwtDuration(.1),'less than 1 second');assert.equal(jwtDuration(3661),'1h 1m');assert.equal(jwtDuration(-90001),'1d 1h');assert.equal(jwtDuration(59),'59s');
});
test('sample token uses a placeholder signature and time claims relative to the supplied instant',()=>{
 const report=decodeJwt(jwtSample(now));assert.equal(report.algorithm,'HS256');assert.equal(report.signature.hex,'00'.repeat(32));assert.equal(report.times.iat.seconds,now/1000);assert.equal(report.times.exp.seconds,now/1000+3600);assert.equal(report.signature.verified,false);
});
test('decoded report exports full tokens and unverified metadata with a fixed comparison timestamp',()=>{
 const report=decodeJwt(token('{"n":9007199254740993,"escaped":"\\u0061","exp":1735693200}')),text=jwtReportJson(report,now),exported=JSON.parse(text);assert(text.includes('9007199254740993'));assert(text.includes('"\\u0061"'));assert.equal(exported.signature.verified,false);assert.equal(exported.inspection.signatureVerification,'not performed');assert.equal(exported.inspection.checkedAt,'2025-01-01T00:00:00.000Z');assert.equal(exported.inspection.temporalChecks[0].state,'future');assert(!text.endsWith('\n'));
});
test('large custom claims remain complete and limits bound header and total input',()=>{
 const report=decodeJwt(token({large:'x'.repeat(70000)}));assert.equal(JSON.parse(report.claims[0].raw).length,70000);assert(report.payloadJson.length>70000);assert.throws(()=>decodeJwt('x'.repeat(JWT_INPUT_LIMIT+1)),/128 KiB/);assert.throws(()=>decodeJwt(token({},{alg:'HS256',large:'x'.repeat(13000)})),/16 KiB/);
});
test('URL and HTML values are data and no endpoint, key or issuer is fetched',()=>{
 const report=decodeJwt(token({iss:'https://example.com/untrusted',html:'<img src=x onerror=alert(1)>'},{alg:'HS256',jku:'https://example.com/keys',x5u:'https://example.com/cert'}));assert(report.payloadJson.includes('<img'));assert(report.headerJson.includes('https://example.com/keys'));const source=fs.readFileSync('src/app/core/jwt-decoder.ts','utf8');assert(!/\b(fetch|XMLHttpRequest|localStorage|sessionStorage|eval|window|document)\b/.test(source));
});
test('dedicated route comes before the generic page and all related tools exist',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),data=fs.readFileSync('src/app/data/tools.data.ts','utf8');assert(routes.indexOf("path: 'tools/jwt-decoder'")<routes.indexOf("path: 'tools/:tool'"));for(const id of ['jwt-decoder','json-formatter','base64','epoch-converter','url-encode'])assert(data.includes("tool('"+id+"'"));
});
