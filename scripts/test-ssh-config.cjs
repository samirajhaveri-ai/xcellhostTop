const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/ssh-config.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {newSshConfigHost,buildSshConfig}=api;
const host=(extra={})=>({...newSshConfigHost('prod'),hostname:'server.example.com',...extra});
test('minimal host configuration has one stable block and no unrequested identity or keepalive',()=>{
 const r=buildSshConfig([host()]);assert.equal(r.hostCount,1);assert.equal(r.forwardingCount,0);assert.equal(r.warnings.length,0);assert(r.config.includes('Host prod\n    HostName server.example.com\n    Port 22\n'));assert(r.config.includes('StrictHostKeyChecking ask'));assert(r.config.includes('ForwardAgent no\n    Compression no'));for(const directive of ['IdentityFile','IdentitiesOnly','ServerAlive','ProxyJump','ProxyCommand','Forward '])assert(!r.config.includes(directive));assert(r.config.endsWith('\n'));assert(!r.config.includes('\r'));
});
test('multiple host order is preserved and pattern blocks can omit HostName',()=>{
 const r=buildSshConfig([host(),host({alias:'bastion',hostname:'bastion.example.com'}),host({alias:'* !retired',hostname:''})]);assert.deepEqual(r.aliases,['prod','bastion','* !retired']);assert(r.config.indexOf('Host prod')<r.config.indexOf('Host bastion'));assert(r.config.indexOf('Host bastion')<r.config.indexOf('Host * !retired'));assert(!r.config.split('Host * !retired')[1].includes('HostName'));assert(r.warnings.some(w=>w.includes('patterns may overlap')));
});
test('aliases reject directive injection, duplicate names and ineffective all-negative blocks',()=>{
 for(const alias of ['', 'prod\nMatch exec bad', '-bad', 'bad;command', 'prod prod', '!retired', '!prod !old', 'x'.repeat(254),Array(11).fill('x').join(' ')])assert.throws(()=>buildSshConfig([host({alias})]));assert.throws(()=>buildSshConfig([host(),host({alias:'PROD'})]),/another Host block/);assert(buildSshConfig([host({alias:'prod staging *.internal !old.internal'})]).config.includes('Host prod staging *.internal !old.internal'));
});
test('bare DNS, strict IPv4 and unscoped IPv6 destinations normalize without DNS',()=>{
 for(const [hostname,expected] of [['SERVER.Example.COM.','server.example.com.'],['localhost','localhost'],['192.0.2.10','192.0.2.10'],['[2001:0db8::1]','2001:db8::1'],['::1','::1'],['::ffff:192.0.2.10','::ffff:c000:20a']])assert(buildSshConfig([host({hostname})]).config.includes('HostName '+expected+'\n'));for(const hostname of ['', 'https://server.example.com','user@server','server:22','127.1','192.168.001.1','999.0.0.1','bad name','-bad','example..com','fe80::1%eth0'])assert.throws(()=>buildSshConfig([host({hostname})]));
});
test('ports and keepalive integers are bounded and disabled values are omitted',()=>{
 assert(buildSshConfig([host({port:'00022',keepAlive:true,aliveInterval:'60',aliveCount:'3'})]).config.includes('ServerAliveInterval 60\n    ServerAliveCountMax 3'));for(const port of ['0','65536','22.5','1e2','-1',''])assert.throws(()=>buildSshConfig([host({port})]));for(const extra of [{keepAlive:true,aliveInterval:'0'},{keepAlive:true,aliveInterval:'86401'},{keepAlive:true,aliveCount:'0'},{keepAlive:true,aliveCount:'101'},{keepAlive:'yes'},{forwardAgent:1},{compression:null}])assert.throws(()=>buildSshConfig([host(extra)]));assert(!buildSshConfig([host({aliveInterval:'ignored',aliveCount:'ignored'})]).config.includes('ServerAlive'));
});
test('identity and known-host paths preserve spaces with quoting and normalize Windows separators',()=>{
 const r=buildSshConfig([host({user:'DOMAIN\\deploy',identityFile:'C:\\Users\\Ada Smith\\.ssh\\prod key',knownHostsFile:'~/.ssh/known hosts',identitiesOnly:true})]);assert(r.config.includes('IdentityFile "C:/Users/Ada Smith/.ssh/prod key"'));assert(r.config.includes('UserKnownHostsFile "~/.ssh/known hosts"'));assert(r.config.includes('IdentitiesOnly yes'));assert(r.config.includes('User "DOMAIN\\\\deploy"'));assert(buildSshConfig([host({identityFile:'~/.ssh/%h_%r',identitiesOnly:false})]).config.includes('IdentitiesOnly no'));for(const identityFile of ['key\nInclude bad','key"bad','key`bad','~/.ssh/%x'])assert.throws(()=>buildSshConfig([host({identityFile})]));
});
test('all host-key checking modes emit exactly the selected directive and review notes are scoped',()=>{
 for(const hostKeyChecking of ['ask','yes','accept-new','no']){const r=buildSshConfig([host({hostKeyChecking})]);assert(r.config.includes('StrictHostKeyChecking '+hostKeyChecking+'\n'));assert.equal(r.warnings.some(w=>w.includes('weakens')),hostKeyChecking==='no');}for(const knownHostsFile of ['none','/dev/null','NUL'])assert(buildSshConfig([host({knownHostsFile})]).warnings.some(w=>w.includes('discarded')));assert.throws(()=>buildSshConfig([host({hostKeyChecking:'off'})]));
});
test('agent and compression settings are explicit without automatic connection or command behavior',()=>{
 const r=buildSshConfig([host({forwardAgent:true,compression:true})]);assert(r.config.includes('ForwardAgent yes\n    Compression yes'));assert(r.warnings.some(w=>w.includes('request signatures')));assert(!r.config.includes('LocalCommand'));assert(!r.config.includes('PermitLocalCommand'));
});
test('jump chains normalize ports and IPv6 and emit no competing ProxyCommand',()=>{
 const r=buildSshConfig([host({proxyMode:'jump',proxyJump:'deploy@BASTION:02222, user@[2001:db8::1]:22',proxyCommand:'ignored\nunsafe'})]);assert(r.config.includes('ProxyJump deploy@bastion:2222,user@[2001:db8::1]:22'));assert(!r.config.includes('ProxyCommand'));for(const proxyJump of ['', 'none', 'https://bastion','user@bastion:0','user@bastion:65536','bastion;evil',Array(6).fill('bastion').join(',')])assert.throws(()=>buildSshConfig([host({proxyMode:'jump',proxyJump})]));
});
test('direct and indirect jumps through configured alias cycles are rejected',()=>{
 assert.throws(()=>buildSshConfig([host({proxyMode:'jump',proxyJump:'prod'})]),/cycle/);assert.throws(()=>buildSshConfig([host({proxyMode:'jump',proxyJump:'bastion'}),host({alias:'bastion',proxyMode:'jump',proxyJump:'prod'})]),/cycle/);assert.equal(buildSshConfig([host({proxyMode:'jump',proxyJump:'bastion'}),host({alias:'bastion'})]).hostCount,2);
});
test('ProxyCommand is output text only, preserves supported tokens and requires balanced quoting',()=>{
 const proxyCommand='ssh -W %h:%p -l %r bastion.example.com',r=buildSshConfig([host({proxyMode:'command',proxyCommand,proxyJump:'ignored\ninvalid'})]);assert(r.config.includes('ProxyCommand '+proxyCommand+'\n'));assert(!r.config.includes('ProxyJump'));assert(r.warnings.some(w=>w.includes('does not execute')));for(const command of ['', 'ssh\nInclude bad','ssh # comment','ssh %x','ssh %','ssh "unbalanced','ssh \\'])assert.throws(()=>buildSshConfig([host({proxyMode:'command',proxyCommand:command})]));
});
test('local, remote and dynamic TCP forwards support multiple rules and bracketed IPv6',()=>{
 const r=buildSshConfig([host({localForward:'127.0.0.1:8080 localhost:80\n[::1]:8081 [2001:db8::20]:443',remoteForward:'0 localhost:3000',dynamicForward:'1080\n[::1]:1081'})]);assert.equal(r.forwardingCount,5);for(const line of ['LocalForward 127.0.0.1:8080 localhost:80','LocalForward [::1]:8081 [2001:db8::20]:443','RemoteForward 0 localhost:3000','DynamicForward 1080','DynamicForward [::1]:1081'])assert(r.config.includes(line));assert(!r.warnings.length);
});
test('public binds are visible while malformed or repeated TCP forwarding rules are rejected',()=>{
 assert(buildSshConfig([host({localForward:'*:8080 localhost:80',dynamicForward:'0.0.0.0:1080'})]).warnings.filter(w=>w.includes('all-interface')).length===2);for(const extra of [{localForward:'0 localhost:80'},{dynamicForward:'0'},{localForward:'8080 localhost:0'},{remoteForward:'8080 localhost:99999'},{localForward:'8080 ::1:80'},{localForward:'8080 /tmp/socket'},{localForward:'8080 localhost:80\nProxyCommand evil'},{dynamicForward:'1080 target:80'},{localForward:'8080 localhost:80\n8080 localhost:80'},{dynamicForward:Array(11).fill('1080').join('\n')}])assert.throws(()=>buildSshConfig([host(extra)]));
});
test('all single-line inputs reject newline and control-character config injection',()=>{
 for(const field of ['alias','hostname','user','port','identityFile','knownHostsFile'])for(const suffix of ['\nInclude /tmp/bad','\rMatch exec bad','\x00bad'])assert.throws(()=>buildSshConfig([host({[field]:'value'+suffix})]));for(const user of ['-option','user name','x;echo','x"y','%r'])assert.throws(()=>buildSshConfig([host({user})]));
});
test('host collection and field lengths are bounded without silently dropping entries',()=>{
 assert.equal(buildSshConfig(Array.from({length:20},(_,i)=>host({alias:'host-'+i}))).hostCount,20);for(const value of [[],Array.from({length:21},(_,i)=>host({alias:'host-'+i}))])assert.throws(()=>buildSshConfig(value));assert.throws(()=>buildSshConfig([host({identityFile:'x'.repeat(1025)})]));assert.throws(()=>buildSshConfig([host({proxyMode:'command',proxyCommand:'x'.repeat(2049)})]));assert.throws(()=>buildSshConfig([host({localForward:'x'.repeat(4097)})]));
});
test('default form entries are independent objects and processing has no network or persistence path',t=>{
 const a=newSshConfigHost(),b=newSshConfigHost();a.hostname='changed';assert.equal(b.hostname,'');t.mock.method(globalThis,'fetch',()=>{throw new Error('Network forbidden');});assert(buildSshConfig([host()]).config.includes('Host prod'));const source=fs.readFileSync('src/app/core/ssh-config.ts','utf8');for(const token of ['fetch(', 'localStorage','sessionStorage','console.','child_process','eval('])assert(!source.includes(token),token);
});
