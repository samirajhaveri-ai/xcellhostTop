const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript'),net=require('node:net');const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/ipv6-tools.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {expandIpv6,normalizeIpv6Domain,ipv6Checks,ipv6ReportText}=api;
test('compressed addresses expand to eight lowercase groups and round-trip 128-bit values',()=>{
 const r=expandIpv6('2001:0DB8::1');assert.equal(r.expanded,'2001:0db8:0000:0000:0000:0000:0000:0001');assert.equal(r.compressed,'2001:db8::1');assert.equal(r.groups.length,8);assert.equal(BigInt(r.decimal),BigInt('0x'+r.hex));assert.equal(r.binary.join('').length,128);assert.equal(r.kind,'Documentation');assert.equal(net.isIP(r.compressed),6);
});
test('zero runs use the longest sequence, first tie and never compress a single zero group',()=>{
 assert.equal(expandIpv6('2001:0:0:1:0:0:2:3').compressed,'2001::1:0:0:2:3');assert.equal(expandIpv6('2001:0:1:0:0:0:2:3').compressed,'2001:0:1::2:3');assert.equal(expandIpv6('2001:db8:0:1:2:3:4:5').compressed,'2001:db8:0:1:2:3:4:5');assert.equal(expandIpv6('::').compressed,'::');assert.equal(expandIpv6('0:0:0:0:0:0:0:1').compressed,'::1');
});
test('brackets and strict embedded IPv4 tails preserve bytes and mapped display',()=>{
 const r=expandIpv6('[::ffff:192.0.2.128]');assert.equal(r.expanded,'0000:0000:0000:0000:0000:ffff:c000:0280');assert.equal(r.compressed,'::ffff:c000:280');assert.equal(r.embeddedIpv4,'192.0.2.128');assert.equal(r.kind,'IPv4-mapped');assert.equal(expandIpv6('2001:db8::192.0.2.1').embeddedIpv4,null);
});
test('reverse DNS uses all 32 nibbles in reverse order',()=>{
 const r=expandIpv6('2001:db8::1');assert.equal(r.reverseName,'1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa');
});
test('special categories remain formatting observations rather than reachability claims',()=>{
 for(const [ip,kind]of [['::','Unspecified'],['::1','Loopback'],['fd00::1','Unique local'],['fc00::1','Unique local'],['fe80::1','Link-local'],['ff02::1','Multicast'],['2606:4700::1111','Global-unicast prefix'],['64:ff9b::1','Other / special-use']])assert.equal(expandIpv6(ip).kind,kind);
});
test('malformed groups, multiple compression, scopes, masks and ports are rejected',()=>{
 for(const input of ['',null,12,'192.0.2.1','2001::db8::1','2001:db8:1:2:3:4:5','1:2:3:4:5:6:7:8:9','1:2:3:4:5:6:7::8','2001:db8:gggg::1','2001:db8:12345::1','2001:db8::1/64','fe80::1%eth0','[::1]:443','[::1','::ffff:192.168.001.1','::ffff:256.0.0.1','::ffff:1.2.3','1:::2','2001:db8::1\nextra'])assert.throws(()=>expandIpv6(input),String(input));
});
test('representative full addresses agree with Node IPv6 syntax validation',()=>{
 for(let i=0;i<256;i++){const hex=Array.from({length:8},(_,g)=>((i*257+g*8191)%65536).toString(16)).join(':');const r=expandIpv6(hex);assert.equal(net.isIP(r.compressed),6);assert.equal(expandIpv6(r.compressed).expanded,r.expanded);}
});
test('domain extraction handles IDNs, website paths and simple email domains',()=>{
 assert.equal(normalizeIpv6Domain('HTTPS://Example.COM/path?x=1'),'example.com');assert.equal(normalizeIpv6Domain('admin@example.com'),'example.com');assert.equal(normalizeIpv6Domain('münich.example'),'xn--mnich-kva.example');assert.equal(normalizeIpv6Domain('example.com.'),'example.com');
});
test('readiness targets cannot become local addresses, credentials or arbitrary ports',()=>{
 for(const input of ['',null,'localhost','http://127.0.0.1','http://[::1]','https://example.local','https://a:b@example.com','https://example.com:8443','file:///etc/passwd','a@@example.com','example.com\\@localhost','example.com /bad'])assert.throws(()=>normalizeIpv6Domain(input),String(input));
});
const unknown={state:'UNKNOWN',detail:'Not verified.'},dns=(type)=>({name:'example.com',type,status:'NOERROR',records:[]});
const report=()=>({domain:'example.com',checkedAt:'2026-11-18T00:00:00Z',durationMs:100,runner:{available:false,detail:'Runner IPv6 unavailable.'},dns:{a:dns(1),aaaa:dns(28),ns:dns(2),mx:dns(15),zone:'example.com'},website:{ipv4:unknown,ipv6:unknown,http6:unknown,parity:unknown,tls:unknown},nameservers:[],nameserverCount:0,mail:{mode:'null',hosts:[],publishedCount:0},queryCount:4,limits:{nameservers:3,mailHosts:2,addressesPerHost:1,deadlineSeconds:30,redirectsFollowed:0},notes:['Scoped observations only.']});
test('AAAA publication never turns unknown connectivity or TLS into a pass',()=>{
 const r=report();r.dns.aaaa.records=[{name:'example.com',type:28,ttl:60,data:'2606:4700::1111'}];const c=ipv6Checks(r);assert.equal(c.length,6);assert.equal(c[0].state,'PASS');assert.equal(c[1].state,'UNKNOWN');assert.equal(c[2].state,'UNKNOWN');assert.equal(c[5].state,'INFO');assert(ipv6ReportText(r).includes('Runner IPv6 unavailable'));
});
test('DNS failures, invalid Null MX and failed probes remain separate from clean missing records',()=>{
 const r=report();r.dns.aaaa.status='ERROR';r.mail.mode='invalid';assert.equal(ipv6Checks(r)[0].state,'UNKNOWN');assert.equal(ipv6Checks(r)[5].state,'FAIL');r.dns.aaaa.status='NOERROR';assert.equal(ipv6Checks(r)[0].state,'FAIL');
});
test('address formatting performs no network or persistence operations',t=>{t.mock.method(globalThis,'fetch',()=>{throw Error('No network allowed');});expandIpv6('::1');const source=fs.readFileSync('src/app/core/ipv6-tools.ts','utf8');for(const word of ['fetch(', 'localStorage','sessionStorage'])assert(!source.includes(word));});
