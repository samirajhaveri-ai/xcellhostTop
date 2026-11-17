const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/robots-tool.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {parseRobots,testRobots,robotsPath,robotsOrigin,robotsHttpMeaning,generateRobots,ROBOTS_SAMPLE}=api;
const run=(text,path,crawler='Googlebot')=>testRobots(parseRobots(text),crawler,robotsPath(path));
test('exact product-token groups combine without merging wildcard or unrelated partial names',()=>{
 const text='User-agent: *\nDisallow: /\n\nUser-agent: ExampleBot\nDisallow: /private\n\nUser-agent: examplebot\nAllow: /private/public\n';const d=run(text,'/private/public','EXAMPLEBOT');assert(d.allowed);assert.equal(d.groups.length,2);assert.equal(d.rule.line,8);assert(!run(text,'/','OtherBot').allowed);assert.equal(run(text,'/','NotExampleBot').groups[0].agents[0],'*');assert(run(text,'/','ExampleBot').allowed);
});
test('longest rule wins regardless of order and Allow wins equal-length conflicts',()=>{
 for(const text of ['User-agent: *\nDisallow: /admin\nAllow: /admin/public','User-agent: *\nAllow: /admin/public\nDisallow: /admin']){assert(!run(text,'/admin/a').allowed);assert(run(text,'/admin/public/a').allowed);}assert(run('User-agent: *\nDisallow: /same\nAllow: /same','/same').allowed);assert(run('User-agent: *\nAllow: /same\nDisallow: /same','/same').allowed);
});
test('wildcards and final anchors handle queries, empty spans and late occurrences without regex expansion',()=>{
 const text='User-agent: *\nDisallow: /*.pdf$\nAllow: /public/*.pdf$';assert(!run(text,'/a.pdf').allowed);assert(run(text,'/a.pdf?x=1').allowed);assert(run(text,'/public/a.pdf').allowed);assert(!run('User-agent: *\nDisallow: /a*b*c$','/abcbcc').allowed);assert(!run('User-agent: *\nDisallow: /a*$','/a').allowed);assert(!run('User-agent: *\nDisallow: /x?draft=1','/x?draft=1').allowed);
});
test('Google precedence examples include wildcard characters and end anchor specificity',()=>{
 assert(!run('User-agent: *\nAllow: /page\nDisallow: /*.htm','/page.htm').allowed);assert(run('User-agent: *\nAllow: /page\nDisallow: /*.ph','/page.php5').allowed);assert(run('User-agent: *\nAllow: /$\nDisallow: /','/').allowed);assert(!run('User-agent: *\nAllow: /$\nDisallow: /','/else').allowed);
});
test('literal dollar characters inside a path remain distinct from the final anchor',()=>{
 assert(!run('User-agent: *\nDisallow: /price$usd','/price$usd').allowed);
 assert(!run('User-agent: *\nDisallow: /price$usd$','/price%24usd').allowed);
 assert(run('User-agent: *\nDisallow: /price$usd$','/price$usd/extra').allowed);
});
test('matching is case-sensitive and percent-encoded unreserved bytes normalize without decoding reserved slashes',()=>{
 assert(!run('User-agent: *\nDisallow: /caf%C3%A9','/café').allowed);assert(!run('User-agent: *\nDisallow: /café','/caf%C3%A9').allowed);assert(!run('User-agent: *\nDisallow: /foo/bar','/foo/%62ar').allowed);assert(run('User-agent: *\nDisallow: /foo/bar','/foo%2Fbar').allowed);assert(run('User-agent: *\nDisallow: /Admin','/admin').allowed);assert(!run('User-agent: *\nDisallow: /literal%2A','/literal*').allowed);assert(!run('User-agent: *\nDisallow: /literal%24','/literal$').allowed);
});
test('sitemap, comments, blank lines and ignored directives do not split an unfinished group',()=>{
 const d=parseRobots('\ufeffUser-agent: A\r\n# note\r\nSitemap: https://example.com/s.xml\r\nUser-agent: B\r\nDisallow: /secret # inline\r\nCrawl-delay: 4\r\n');assert.equal(d.groups.length,1);assert.deepEqual(d.groups[0].agents,['A','B']);assert.equal(d.groups[0].rules[0].line,5);assert.equal(d.sitemaps.length,1);assert(!testRobots(d,'B','/secret').allowed);assert(d.findings.some(f=>f.level==='info'));
});
test('malformed lines and rules outside a group are reported and ignored',()=>{
 const d=parseRobots('Disallow: /\nUser-agent: *\nDisallow: relative\nAllow: /valid\nDisalow: /mistyped\nDisallow: /bad%xx\nSitemap: /relative.xml\nDisallow:\nNoindex: /\nno colon\n');assert.equal(d.groups[0].rules.length,1);assert.equal(d.sitemaps.length,0);assert(d.findings.some(f=>f.line===1));assert(d.findings.some(f=>f.line===6));assert(testRobots(d,'Googlebot','/').allowed);
});
test('empty groups and no matching rules permit access; robots.txt is implicitly allowed',()=>{
 assert(run('User-agent: *\nDisallow:','/anything').allowed);assert(run('User-agent: OnlyBot\nDisallow: /','/anything').allowed);assert(run('User-agent: *\nDisallow: /','/robots.txt').allowed);assert(parseRobots('').findings.some(f=>f.line===0));assert(parseRobots('<html><body>Not robots</body></html>').findings.some(f=>f.message.includes('HTML')));
});
test('origins enforce public hostnames and ignore supplied paths when locating robots',()=>{
 const url=robotsOrigin('https://Example.com:443/a?x=1#fragment');assert.equal(url.origin,'https://example.com');assert.equal(robotsPath('',url),'/');assert.equal(robotsOrigin('example.com').origin,'https://example.com');for(const input of ['','http://localhost','http://127.0.0.1','http://2130706433','http://[::1]','https://example.local','https://user:pass@example.com','ftp://example.com','https://example.com:8080','example.com\n'])assert.throws(()=>robotsOrigin(input));assert.throws(()=>robotsPath('https://other.example/a',new URL('https://example.com')),/same/);
});
test('path normalization preserves query scope and removes fragments and dot segments',()=>{
 assert.equal(robotsPath('/a/../b?draft=1#x'),'/b?draft=1');assert.equal(robotsPath('/café'),'/caf%C3%A9');assert.throws(()=>robotsPath('relative'));assert.throws(()=>robotsPath('/bad%xx'));assert.throws(()=>robotsPath('/x'.repeat(3000)));assert.throws(()=>testRobots(parseRobots(ROBOTS_SAMPLE),'bad/version','/'));
});
test('HTTP status handling separates 403 and 404 from 429 and server failures',()=>{
 for(const status of [200,204,206])assert.equal(robotsHttpMeaning(status),'rules');for(const status of [400,401,403,404,410])assert.equal(robotsHttpMeaning(status),'no-file');for(const status of [0,301,429,500,503])assert.equal(robotsHttpMeaning(status),'unavailable');
});
test('generator output round-trips and block-all does not contain a conflicting allow-all',()=>{
 let text=generateRobots('*','','/','');assert(!run(text,'/').allowed);assert(!text.includes('Allow:'));text=generateRobots('*','/private/public/','/admin/\n/private/','https://example.com/sitemap.xml');assert(run(text,'/private/public/a').allowed);assert(!run(text,'/private/a').allowed);assert.equal(parseRobots(text).sitemaps.length,1);assert(generateRobots('*','','','').includes('Disallow:\n'));
});
test('generator and parser reject injection and bounded-size abuse without silent truncation',()=>{
 for(const args of [['*\nDisallow: /','','',''],['*','','/x\nSitemap: https://evil.example',''],['*','','/bad#comment',''],['*','','','javascript:alert(1)']])assert.throws(()=>generateRobots(...args));assert.throws(()=>parseRobots('a'.repeat(512001)));assert.throws(()=>parseRobots('\n'.repeat(12001)));assert.throws(()=>parseRobots('User-agent: *\n'+Array(3001).fill('Disallow: /x').join('\n')));assert(parseRobots(ROBOTS_SAMPLE).groups.length===2);
});
test('local parsing and generation perform no network or persistence calls',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw new Error('Network forbidden');});assert(!run(ROBOTS_SAMPLE,'/private/a').allowed);assert(generateRobots('*','/','','').includes('Allow: /'));const source=fs.readFileSync('src/app/core/robots-tool.ts','utf8');for(const token of ['fetch(', 'localStorage','sessionStorage','console.'])assert(!source.includes(token));
});
