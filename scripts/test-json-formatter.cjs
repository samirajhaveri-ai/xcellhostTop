const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/json-formatter.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {JSON_INPUT_LIMIT,JSON_OUTPUT_LIMIT,JSON_TOKEN_LIMIT,JSON_DEPTH_LIMIT,JsonFormatError,analyzeJson,formatJson,renderJson,jsonLocation,jsonFileText}=api;

test('formats nested objects and arrays using the requested indentation',()=>{
 const input='{"service":"XcellHost","items":[1,{"active":true}],"empty":{}}';
 assert.equal(formatJson(input).output,'{\n  "service": "XcellHost",\n  "items": [\n    1,\n    {\n      "active": true\n    }\n  ],\n  "empty": {}\n}');
 assert.equal(formatJson('{"a":[1]}','pretty','4').output,'{\n    "a": [\n        1\n    ]\n}');assert.equal(formatJson('{"a":1}','pretty','tab').output,'{\n\t"a": 1\n}');
});
test('minification strips only insignificant whitespace',()=>{
 const input=' \n { "note" : " a  b ", "escape":"\\n\\t", "list" : [ 1, 2 ] }\r\n';
 assert.equal(formatJson(input,'minify').output,'{"note":" a  b ","escape":"\\n\\t","list":[1,2]}');
});
test('large integers, negative zero, decimal spellings and exponents remain exact',()=>{
 const input='[9007199254740993,123456789012345678901234567890,-0,1.00,1e+0999,-1.20E-003]';assert.equal(formatJson(input,'minify').output,input);assert(formatJson(input).output.includes('9007199254740993'));assert.equal(formatJson(input).analysis.stats.numbers,6);
});
test('integer-like property order and escape spelling are preserved',()=>{
 const input='{"10":1,"2":2,"a":"\\u0061\\/\\uD83C\\uDF0D","01":3}';assert.equal(formatJson(input,'minify').output,input);assert.equal(formatJson(formatJson(input).output,'minify').output,input);
});
test('duplicate names are retained and escaped equivalents are detected in one object',()=>{
 const input='{"a":1,"\\u0061":2,"a":3,"nested":{"a":4},"__proto__":5,"__proto__":6}';const report=formatJson(input,'minify');assert.equal(report.output,input);assert.equal(report.analysis.duplicateCount,3);assert.equal(report.analysis.duplicates[0].key,'a');assert.equal(report.analysis.stats.keys,7);
});
test('identical property names in separate objects are not duplicates',()=>{
 assert.equal(analyzeJson('[{"x":1},{"x":2,"inner":{"x":3}}]').duplicateCount,0);
});
test('duplicate samples are bounded while all repeated occurrences are counted',()=>{
 const report=analyzeJson('{'+Array.from({length:12},(_,i)=>'"x":'+i).join(',')+'}');assert.equal(report.duplicateCount,11);assert.equal(report.duplicates.length,5);
});
test('all root value types are accepted, including null and false',()=>{
 for(const [input,type] of [['null','null'],['false','boolean'],['true','boolean'],['0','number'],['-0.5e+2','number'],['"hello"','string'],['[]','array'],['{}','object']]){const report=formatJson(input);assert.equal(report.output,input);assert.equal(report.analysis.stats.root,type);}
});
test('Unicode, escaped control codes and lone escaped surrogates are valid string data',()=>{
 for(const input of ['"नमस्ते 🌍"','"\\u0000\\b\\f\\n\\r\\t"','"\\uD800"','"\\uDC00"','"a\u2028b\u2029c"'])assert.equal(formatJson(input,'minify').output,input);
});
test('structural characters and HTML inside strings are never interpreted as syntax',()=>{
 const input='{"html":"<img src=x onerror=alert(1)>","text":"[{}],: \\\" \\\\"}';assert.equal(formatJson(input,'minify').output,input);assert.deepEqual(JSON.parse(formatJson(input).output),JSON.parse(input));
});
test('comments, single quotes, unquoted names and trailing commas are rejected',()=>{
 for(const input of ['//x\n{}','{/* comment */"a":1}',"{'a':1}",'{a:1}','{"a":1,}','[1,]','[true, false, ]'])assert.throws(()=>formatJson(input),JsonFormatError,input);
});
test('invalid escapes, malformed Unicode and raw string controls are rejected',()=>{
 for(const input of ['"\\x20"','"\\v"','"\\uZZZZ"','"\\u123"','"\\u1"','"raw\nnewline"','"raw\ttab"','"\u0000"','"missing','"escape\\'])assert.throws(()=>formatJson(input),JsonFormatError,input);
});
test('JSON number grammar rejects leading zeros, plus signs and incomplete components',()=>{
 for(const input of ['01','-01','+1','.5','1.','1e','1e+','1e-','--1','NaN','Infinity','-Infinity','0x10','[1-2]'])assert.throws(()=>formatJson(input),JsonFormatError,input);
});
test('missing punctuation, mismatched containers and absent values are rejected',()=>{
 for(const input of ['{"a" 1}','{"a":}','{"a":1 "b":2}','[1 2]','[}','{]','{','[','{"a":','{"a":1','[[1]','[,]','{,}','true false','{}[]'])assert.throws(()=>formatJson(input),JsonFormatError,input);
});
test('only JSON whitespace is accepted outside strings',()=>{
 assert.equal(formatJson(' \t\r\n true \r\n\t ','minify').output,'true');for(const input of ['\u00a0{}','\uFEFF{}','{}\u000b','{}\u2028'])assert.throws(()=>formatJson(input),JsonFormatError);
});
test('errors identify the UTF-16 selection offset, one-based line and column',()=>{
 try{formatJson('{\r\n  "a": 1,\r\n}');assert.fail('Expected an error');}catch(error){assert.equal(error.position,14);assert.equal(error.line,3);assert.equal(error.column,1);assert.equal(error.kind,'syntax');assert.match(error.message,/Trailing/);}
 assert.deepEqual(jsonLocation('a\rb\nc\r\nd',7),{position:7,line:4,column:1});assert.deepEqual(jsonLocation('🌍x',2),{position:2,line:1,column:3});
});
test('end-of-input errors identify the insertion point',()=>{
 try{analyzeJson('{"a":');assert.fail();}catch(error){assert.equal(error.position,5);assert.equal(error.line,1);assert.equal(error.column,6);}
});
test('statistics distinguish property names from string values and count nested depth',()=>{
 const stats=analyzeJson('{"a":[1,"x",true,null,{}],"b":false}').stats;assert.deepEqual(stats,{root:'object',objects:2,arrays:1,keys:2,strings:1,numbers:1,booleans:2,nulls:1,depth:3});assert.equal(analyzeJson('42').stats.depth,0);assert.equal(analyzeJson('[]').stats.depth,1);
});
test('input boundaries use UTF-8 bytes rather than only JavaScript code units',()=>{
 assert.equal(formatJson('"'+'x'.repeat(JSON_INPUT_LIMIT-2)+'"','minify').outputBytes,JSON_INPUT_LIMIT);
 assert.throws(()=>analyzeJson('"'+'x'.repeat(JSON_INPUT_LIMIT-1)+'"'),/1 MiB/);assert.throws(()=>analyzeJson('"'+'🌍'.repeat(JSON_INPUT_LIMIT/4)+'"'),/UTF-8/);
});
test('token and nesting limits stop oversized structures',()=>{
 assert.equal(analyzeJson('['.repeat(JSON_DEPTH_LIMIT)+'0'+']'.repeat(JSON_DEPTH_LIMIT)).stats.depth,JSON_DEPTH_LIMIT);assert.throws(()=>analyzeJson('['.repeat(JSON_DEPTH_LIMIT+1)+'0'+']'.repeat(JSON_DEPTH_LIMIT+1)),/256-level/);
 assert.throws(()=>analyzeJson('['+Array(JSON_TOKEN_LIMIT/2+1).fill('0').join(',')+']'),/100,000-token/);
});
test('pretty output is bounded independently and the same input can be minified',()=>{
 const input='['.repeat(255)+'['+Array(9000).fill('0').join(',')+']'+']'.repeat(255);const analysis=analyzeJson(input);assert.throws(()=>renderJson(analysis,'pretty','4'),/4 MiB/);assert(renderJson(analysis,'minify','4').outputBytes<JSON_OUTPUT_LIMIT);
});
test('file loading accepts UTF-8 and removes exactly one leading UTF-8 BOM',()=>{
 assert.deepEqual(jsonFileText(new TextEncoder().encode('{"hi":"नमस्ते"}')),{text:'{"hi":"नमस्ते"}',removedBom:false});assert.deepEqual(jsonFileText(new Uint8Array([239,187,191,123,125])),{text:'{}',removedBom:true});assert.equal(jsonFileText(new Uint8Array([239,187,191,239,187,191,123,125])).text,'\uFEFF{}');assert.throws(()=>jsonFileText(new Uint8Array([255,254,123,0,125,0])),/not valid UTF-8/);assert.throws(()=>jsonFileText(new Uint8Array(JSON_INPUT_LIMIT+1)),/1 MiB/);
});
test('size and line counts match exact output without adding a final newline',()=>{
 const report=formatJson('{"hi":"🌍"}');assert.equal(report.outputBytes,new TextEncoder().encode(report.output).length);assert.equal(report.lines,3);assert(!report.output.endsWith('\n'));assert.equal(formatJson(' 42 ','minify').output,'42');
});
test('formatting is idempotent and generated JSON round-trips through a native parser',()=>{
 let seed=123456789;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 function value(depth){const n=Math.floor(rnd()*(depth<4?7:4));if(n===0)return null;if(n===1)return rnd()>.5;if(n===2)return Math.round((rnd()-.5)*1e6)/100;if(n===3)return ['नमस्ते 🌍','a\\b\n"quoted"','[{},:]','<script>',''][Math.floor(rnd()*5)];if(n===4)return Array.from({length:Math.floor(rnd()*5)},()=>value(depth+1));const obj={};for(let i=0;i<Math.floor(rnd()*6);i++)obj['key'+i]=value(depth+1);return obj;}
 for(let i=0;i<300;i++){const data=value(0),raw=JSON.stringify(data),report=formatJson(raw,'pretty',i%2?'4':'tab');assert.deepEqual(JSON.parse(report.output),data);assert.equal(formatJson(report.output,'minify').output,raw);assert.equal(formatJson(report.output,'pretty',report.indent).output,report.output);}
});
test('unsupported settings and empty input give direct errors',()=>{
 assert.throws(()=>formatJson('{}','sort'),/supported indentation/);assert.throws(()=>formatJson('{}','pretty','8'),/supported indentation/);for(const input of ['',' \t\r\n '])assert.throws(()=>analyzeJson(input),/Enter JSON/);
});
test('dedicated JSON route precedes the generic tools route and related links exist',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),data=fs.readFileSync('src/app/data/tools.data.ts','utf8');assert(routes.indexOf("path: 'tools/json-formatter'")<routes.indexOf("path: 'tools/:tool'"));for(const id of ['json-formatter','json-to-csv','csv-to-json','base64','jwt-decoder'])assert(data.includes("tool('"+id+"'"));
});
test('formatting code never evaluates JSON objects, fetches resources or writes storage',()=>{
 const source=fs.readFileSync('src/app/core/json-formatter.ts','utf8');assert(!/\b(eval|Function|fetch|XMLHttpRequest|localStorage|sessionStorage|window|document)\b/.test(source));assert(source.includes('JSON.parse(key.raw)'));
});
