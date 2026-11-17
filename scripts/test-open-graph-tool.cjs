const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const robots={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/robots-tool.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(robots);
const api={};new Function('exports','require',ts.transpileModule(fs.readFileSync('src/app/core/open-graph-tool.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,()=>robots);
const {socialPageUrl,socialResource,socialExample,analyzeSocial,generateSocial,escapeSocialHtml}=api;
const fields={title:'A <new> "cloud" & more',description:'A useful summary',url:'https://example.com/page?a=1&b=2',image:'https://cdn.example.com/a.jpg',imageAlt:'An image',type:'website',site:'Example',locale:'en_US',card:'summary_large_image'};
test('URL validation retains the exact path/query and rejects unsafe protocols, credentials, ports and local targets',()=>{
 assert.equal(socialPageUrl('example.com/a?x=1#fragment'),'https://example.com/a?x=1');
 for(const url of ['','javascript:alert(1)','file:///etc/passwd','http://localhost','http://127.0.0.1','http://2130706433','https://example.local','https://a:b@example.com/','https://example.com:8080','https://-bad.example.com','https://example.com\\evil','https://example.com\n/injected'])assert.throws(()=>socialPageUrl(url),url);
});
test('relative metadata resolves against the final HTML base and cannot produce executable or local image URLs',()=>{
 assert.equal(socialResource('../social.jpg','https://example.com/blog/article'),'https://example.com/social.jpg');
 assert.equal(socialResource('//cdn.example.com/image.png','https://example.com/a'),'https://cdn.example.com/image.png');
 for(const url of ['javascript:alert(1)','data:image/svg+xml,bad','http://127.0.0.1','https://user:pw@example.com',''])assert.equal(socialResource(url,'https://example.com'),'');
});
test('sample completeness is explicit and preserves distinct SEO, OG and X title priorities',()=>{
 const s=socialExample(),a=analyzeSocial(s);assert.equal(a.checks.length,10);assert.equal(a.passed,10);assert.equal(a.score,100);assert.equal(a.checks.filter(c=>c.required).length,4);assert.equal(a.og.title,'A stronger foundation for your next idea');assert.equal(a.twitter.title,'Your next idea starts here');assert.equal(a.search.title,'Build your next idea with XcellHost');
});
test('fallback previews do not falsely mark missing OG properties as present',()=>{
 const s=socialExample();s.tags=s.tags.filter(t=>!t.key.startsWith('og:')&&!t.key.startsWith('twitter:'));const a=analyzeSocial(s);assert.equal(a.og.title,a.search.title);assert.equal(a.twitter.title,a.search.title);assert.equal(a.passed,3);assert(a.checks.filter(c=>c.required).every(c=>!c.pass));
});
test('first metadata values win and repeated image arrays do not create duplicate-tag findings',()=>{
 const s=socialExample();s.tags.push({key:'og:title',value:'Second title',source:'og'},{key:'og:image',value:'https://example.com/b.jpg',source:'og'});const a=analyzeSocial(s);assert.equal(a.og.title,'A stronger foundation for your next idea');assert(a.warnings.some(w=>w.includes('og:title appears 2')));assert(!a.warnings.some(w=>w.includes('og:image appears')));
});
test('empty first values, invalid URLs, canonical differences and indexing directives remain visible',()=>{
 const s=socialExample();s.tags.unshift({key:'og:title',value:'',source:'og'},{key:'og:image',value:'javascript:alert(1)',source:'og'},{key:'canonical',value:'https://example.com/other',source:'seo'},{key:'robots',value:'noindex, nofollow',source:'seo'});const a=analyzeSocial(s);assert(!a.checks.find(c=>c.key==='og:title').pass);assert(!a.checks.find(c=>c.key==='og:image').pass);assert.equal(a.og.image,'');assert(a.warnings.some(w=>w.includes('canonical URL and og:url')));assert(a.warnings.some(w=>w.includes('no indexing')));
});
test('HTTP errors and partial captures do not claim full healthy markup',()=>{
 const s=socialExample();s.status=403;s.truncated=true;const a=analyzeSocial(s);assert(a.warnings.some(w=>w.includes('HTTP 403')));assert(a.warnings.some(w=>w.includes('1 MiB')));
});
test('generator escapes text and attribute boundaries and emits the core four plus SEO and X tags',()=>{
 const html=generateSocial(fields);assert(html.includes('<title>A &lt;new&gt; &quot;cloud&quot; &amp; more</title>'));assert(html.includes('href="https://example.com/page?a=1&amp;b=2"'));for(const key of ['og:type','og:title','og:image','og:url','twitter:card','twitter:image:alt'])assert(html.includes('"'+key+'"'));assert.equal(escapeSocialHtml("'<>\"&"),'&#39;&lt;&gt;&quot;&amp;');
});
test('generator rejects empty mandatory fields, unsafe URLs, unsupported options and oversized values',()=>{
 for(const change of [{title:''},{url:'http://localhost'},{image:'javascript:alert(1)'},{image:''},{type:'script'},{card:'player'},{locale:'en-US'},{title:'a'.repeat(4001)},{description:'a\x00b'}])assert.throws(()=>generateSocial({...fields,...change}));
});
test('analysis and generation make no network requests or persistent-storage calls',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw Error('Unexpected network');});analyzeSocial(socialExample());generateSocial(fields);const source=fs.readFileSync('src/app/core/open-graph-tool.ts','utf8');for(const token of ['fetch(', 'localStorage','sessionStorage'])assert(!source.includes(token));
});
