const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/url-converter.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {URL_INPUT_LIMIT,URL_ENCODING_REFERENCE,convertUrl,urlReportJson}=api;
const settings=(changes={})=>({action:'encode',mode:'component',batch:false,plusAsSpace:false,...changes});

test('component mode escapes URL data delimiters and preserves native safe punctuation',()=>{
 assert.equal(convertUrl('coffee & tea / café',settings()).output,'coffee%20%26%20tea%20%2F%20caf%C3%A9');assert.equal(convertUrl("AZaz09-_.!~*'()",settings()).output,"AZaz09-_.!~*'()");
});
test('whole-URI mode preserves structural delimiters while encoding spaces and Unicode',()=>{
 const input='https://example.com/नमस्ते?q=hello world&x=1#part 2';assert.equal(convertUrl(input,settings({mode:'uri'})).output,'https://example.com/%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87?q=hello%20world&x=1#part%202');
});
test('Unicode strings, combining marks, BOMs and emoji round-trip in component mode',()=>{
 for(const input of ['नमस्ते 🌍','café','e\u0301','中文','\ufeffhello',' leading\tand\ntrailing ']){const encoded=convertUrl(input,settings()).output,decoded=convertUrl(encoded,settings({action:'decode'}));assert.equal(decoded.output,input);assert.equal(decoded.failures,0);}
});
test('whole-URI decoding preserves reserved escapes while component decoding removes them',()=>{
 const encoded='%2F%3F%26%23%3D%3A%2B%40%24%2C%3B';assert.equal(convertUrl(encoded,settings({action:'decode',mode:'uri'})).output,encoded);assert.equal(convertUrl(encoded,settings({action:'decode'})).output,'/?&#=:+@$,;');assert.equal(convertUrl('hello%20world',settings({action:'decode',mode:'uri'})).output,'hello world');
});
test('literal plus signs remain literal unless form-style component decoding is selected',()=>{
 assert.equal(convertUrl('a%2Bb+c',settings({action:'decode'})).output,'a+b+c');assert.equal(convertUrl('a%2Bb+c',settings({action:'decode',plusAsSpace:true})).output,'a+b c');assert.equal(convertUrl('a+b',settings({mode:'uri',action:'decode',plusAsSpace:true})).output,'a+b');assert.equal(convertUrl('a+b c',settings({plusAsSpace:true})).output,'a%2Bb%20c');
});
test('conversion is one pass and does not trim the input or normalize complete URLs',()=>{
 assert.equal(convertUrl('%20',settings()).output,'%2520');assert.equal(convertUrl('%2520',settings({action:'decode'})).output,'%20');assert.equal(convertUrl(' a ',settings()).output,'%20a%20');assert.equal(convertUrl('HTTP://EXAMPLE.COM:80/a/../b',settings({mode:'uri'})).output,'HTTP://EXAMPLE.COM:80/a/../b');
});
test('batch mode keeps blank entries and treats CRLF, CR and LF as separators',()=>{
 const report=convertUrl('one two\r\n\rthree\n',settings({batch:true}));assert.deepEqual(report.rows.map(row=>row.input),['one two','','three','']);assert.deepEqual(report.rows.map(row=>row.line),[1,2,3,4]);assert.equal(report.output,'one%20two\n\nthree\n');assert.equal(report.successes,4);
});
test('failed rows do not erase valid results and retain their original physical line number',()=>{
 const report=convertUrl('hello%20world\n%GG\n%F0%9F%8C%8D\n',settings({batch:true,action:'decode'}));assert.equal(report.successes,3);assert.equal(report.failures,1);assert.equal(report.rows[1].line,2);assert.equal(report.rows[1].output,null);assert.match(report.rows[1].error,/Malformed percent/);assert.equal(report.output,'hello world\n🌍\n');
});
test('truncated escapes and malformed UTF-8 produce errors instead of replacement characters',()=>{
 for(const input of ['%','%2','%GG','%FF','%C0%AF','%ED%A0%80','%F0%9F','%E2%28%A1']){const report=convertUrl(input,settings({action:'decode'}));assert.equal(report.failures,1,input);assert.equal(report.rows[0].output,null);}
});
test('incomplete Unicode code units are rejected on either encode or decode',()=>{
 for(const action of ['encode','decode'])for(const input of ['\ud800','\udfff','a\ud800b']){const result=convertUrl(input,settings({action}));assert.equal(result.failures,1);assert.match(result.rows[0].error,/Incomplete Unicode/);}assert.equal(convertUrl('😀',settings()).output,'%F0%9F%98%80');
});
test('empty successful outputs are kept separate from failed rows',()=>{
 for(const action of ['encode','decode']){const report=convertUrl('',settings({action}));assert.equal(report.successes,1);assert.equal(report.failures,0);assert.equal(report.rows[0].output,'');assert.equal(report.outputBytes,0);}const failed=convertUrl('%',settings({action:'decode',batch:true}));assert.equal(failed.successes,0);assert.equal(failed.output,'');assert.equal(failed.rows[0].output,null);
});
test('reference table reflects actual JavaScript behavior rather than assuming every punctuation mark is escaped',()=>{
 assert.equal(URL_ENCODING_REFERENCE.length,17);const bang=URL_ENCODING_REFERENCE.find(row=>row.character==='!'),slash=URL_ENCODING_REFERENCE.find(row=>row.character==='/');assert.equal(bang.component,'!');assert.equal(slash.component,'%2F');assert.equal(slash.uri,'/');
});
test('UTF-8 input limits and 1000-line batch limits are enforced',()=>{
 assert.equal(convertUrl('a'.repeat(URL_INPUT_LIMIT),settings()).output.length,URL_INPUT_LIMIT);assert.throws(()=>convertUrl('a'.repeat(URL_INPUT_LIMIT+1),settings()),/1 MiB/);assert.throws(()=>convertUrl('界'.repeat(Math.ceil(URL_INPUT_LIMIT/3)),settings()),/1 MiB/);assert.equal(convertUrl(Array(1000).fill('x').join('\n'),settings({batch:true})).rows.length,1000);assert.throws(()=>convertUrl(Array(1001).fill('x').join('\n'),settings({batch:true})),/1,000 lines/);
});
test('JSON reports preserve exact strings, errors and settings without ambiguous line joining',()=>{
 const report=convertUrl('%0A\n%GG\n%2B',settings({batch:true,action:'decode',plusAsSpace:true})),json=JSON.parse(urlReportJson(report));assert.equal(json.rows[0].output,'\n');assert.equal(json.rows[1].output,null);assert.equal(json.rows[2].output,'+');assert.equal(json.rows[1].line,2);assert.equal(json.plusAsSpace,true);assert.equal(json.failures,1);assert.equal(json.successes,2);
});
test('settings snapshots are independent and unsupported options fail clearly',()=>{
 const config=settings(),report=convertUrl('x',config);config.mode='uri';assert.equal(report.settings.mode,'component');for(const changes of [{action:'unknown'},{mode:'unknown'},{batch:'true'},{plusAsSpace:1}])assert.throws(()=>convertUrl('x',settings(changes)),/valid conversion/);
});
test('dedicated route precedes the generic tool page and conversions do not access the network or storage',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),page=fs.readFileSync('src/app/pages/url-encode.page.ts','utf8'),core=fs.readFileSync('src/app/core/url-converter.ts','utf8');assert(routes.indexOf("path: 'tools/url-encode'")<routes.indexOf("path: 'tools/:tool'"));assert(!/fetch\(|localStorage|sessionStorage|innerHTML|window\.open/.test(page+core));
});
