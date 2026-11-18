const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/url-inspector.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {inspectWebUrl,inspectedUrlRows,inspectedUrlText}=api;
test('complete URL is split into origin, host, effective port, path, query and fragment',()=>{
 const r=inspectWebUrl('https://example.com:8443/a/b?x=1#section');assert.equal(r.origin,'https://example.com:8443');assert.equal(r.hostname,'example.com');assert.equal(r.host,'example.com:8443');assert.equal(r.port,'8443');assert.equal(r.effectivePort,8443);assert.equal(r.pathname,'/a/b');assert.equal(r.requestTarget,'/a/b?x=1');assert.equal(r.fragment,'section');assert.equal(r.segments.length,2);
});
test('normalization handles hostname case, default ports and dot segments with a visible note',()=>{
 const r=inspectWebUrl('https://EXAMPLE.com:443/a/../b');assert.equal(r.normalized,'https://example.com/b');assert.equal(r.port,'');assert.equal(r.effectivePort,443);assert(r.notes.some(n=>n.includes('normalized URL')));assert.equal(inspectWebUrl('http://example.com:80').effectivePort,80);
});
test('decoded query entries preserve duplicates, empty names and empty values in source order',()=>{
 const r=inspectWebUrl('https://example.com/?tag=cloud&tag=security&empty=&=value&flag&__proto__=ok');assert.deepEqual(r.parameters.map(p=>[p.key,p.value]),[['tag','cloud'],['tag','security'],['empty',''],['','value'],['flag',''],['__proto__','ok']]);assert.deepEqual(r.duplicateKeys,['tag']);assert.equal(r.parameters[5].index,6);
});
test('query plus decoding differs from path/fragment decoding and encoded plus is preserved',()=>{
 const r=inspectWebUrl('https://example.com/a+b?q=hello+world&plus=%2B#a+b');assert.equal(r.decodedPath,'/a+b');assert.equal(r.parameters[0].value,'hello world');assert.equal(r.parameters[1].value,'+');assert.equal(r.decodedFragment,'a+b');
});
test('percent-encoded Unicode decodes while raw path separators retain segment boundaries',()=>{
 const r=inspectWebUrl('https://example.com/caf%C3%A9/a%2Fb');assert.equal(r.decodedPath,'/café/a/b');assert.equal(r.segments.length,2);assert.equal(r.segments[1].encoded,'a%2Fb');assert.equal(r.segments[1].decoded,'a/b');
});
test('local hosts, IPv4 and bracketed IPv6 parse locally without public-host restrictions',()=>{
 assert.equal(inspectWebUrl('http://localhost:4200/a').hostKind,'Local hostname');assert.equal(inspectWebUrl('http://192.168.1.2/a').hostKind,'IPv4 literal');const r=inspectWebUrl('http://[2001:db8::1]:8080/a');assert.equal(r.hostname,'[2001:db8::1]');assert.equal(r.host,'[2001:db8::1]:8080');assert.equal(r.hostKind,'IPv6 literal');
});
test('IDN hostnames use browser ASCII normalization',()=>{
 const r=inspectWebUrl('https://münich.example/');assert.equal(r.hostname,'xn--mnich-kva.example');assert(r.notes.some(n=>n.includes('Punycode')));
});
test('user-info values are omitted consistently from displayed normalized URL and reports',()=>{
 const r=inspectWebUrl('https://alice:secret-value@example.com/path?visible=1');assert(r.hasCredentials);assert.equal(r.normalized,'https://example.com/path?visible=1');for(const output of [JSON.stringify(r),inspectedUrlText(r),JSON.stringify(inspectedUrlRows(r))]){assert(!output.includes('secret-value'));assert(!output.includes('alice'));}assert(r.notes.some(n=>n.includes('omitted')));
});
test('empty query/fragment markers and empty path segments remain distinguishable',()=>{
 const r=inspectWebUrl('https://example.com/a//b/?#');assert(r.hasQuery);assert(r.hasFragment);assert.equal(r.parameters.length,0);assert.deepEqual(r.segments.map(s=>s.encoded),['a','','b','']);assert.equal(inspectWebUrl('https://example.com/').segments.length,0);assert(!inspectWebUrl('https://example.com/').hasQuery);
});
test('malformed escapes retain raw path and fragment while noting tolerant query decoding',()=>{
 const r=inspectWebUrl('https://example.com/%XX?bad=%FF#%E0%A4');assert.equal(r.decodedPath,'/%XX');assert.equal(r.decodedFragment,'%E0%A4');assert.equal(r.parameters[0].value,'�');assert(r.notes.length>=3);assert(inspectWebUrl('https://example.com/'+Array(200).fill('%XX').join('/')).notes.length<5);
});
test('invalid, unsupported, oversized and invisible-control inputs fail before producing a report',()=>{
 for(const value of ['',null,3,undefined,'example.com/a','//example.com','javascript:alert(1)','file:///tmp/a','ftp://example.com','https://','https://example.com:65536','https://[::1','https://example.com\\a','https://example.com\n/path','https://example.com/\x00','https://example.com/'+'x'.repeat(8192)])assert.throws(()=>inspectWebUrl(value),String(value));
});
test('large query arrays remain intact in reports for interface pagination',()=>{
 const r=inspectWebUrl('https://example.com/?'+Array.from({length:250},(_,i)=>'item='+i).join('&'));assert.equal(r.parameters.length,250);assert.equal(r.parameters[249].value,'249');assert(inspectedUrlText(r).includes('250. "item" = "249"'));
});
test('parsing and report generation make no network or storage calls',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw Error('Unexpected network');});inspectedUrlText(inspectWebUrl('https://example.com/?q=a'));const source=fs.readFileSync('src/app/core/url-inspector.ts','utf8');for(const value of ['fetch(', 'localStorage','sessionStorage','XMLHttpRequest'])assert(!source.includes(value));
});
