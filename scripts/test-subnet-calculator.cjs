const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const api={};
new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/subnet-calculator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {calculateSubnet,parseSubnetAddress,subnetAddressText,subnetRows,subnetReportCsv,subnetReportText}=api;

test('standard /24 includes network, wildcard, directed broadcast and conventional host slots',()=>{
 const r=calculateSubnet('192.168.1.10/24');
 assert.equal(r.cidr,'192.168.1.0/24');assert.equal(r.mask,'255.255.255.0');assert.equal(r.wildcard,'0.0.0.255');assert.equal(r.broadcast,'192.168.1.255');assert.equal(r.firstHost,'192.168.1.1');assert.equal(r.lastHost,'192.168.1.254');assert.equal(r.total,256);assert.equal(r.usable,254);assert.equal(r.hostOffset,10);assert.equal(r.inputPosition,'Host address');
});
test('non-octet prefixes find exact boundaries inside and across octets',()=>{
 const cases=[['172.16.5.130/26','172.16.5.128/26','172.16.5.191','255.255.255.192','0.0.0.63',62],['10.20.30.40/20','10.20.16.0/20','10.20.31.255','255.255.240.0','0.0.15.255',4094],['192.0.2.7/30','192.0.2.4/30','192.0.2.7','255.255.255.252','0.0.0.3',2]];
 for(const [input,cidr,last,mask,wildcard,usable]of cases){const r=calculateSubnet(input);assert.equal(r.cidr,cidr);assert.equal(r.broadcast,last);assert.equal(r.mask,mask);assert.equal(r.wildcard,wildcard);assert.equal(r.usable,usable);}
});
test('zero prefix covers exactly 2^32 addresses without signed overflow',()=>{
 const r=calculateSubnet('255.255.255.254/0');assert.equal(r.cidr,'0.0.0.0/0');assert.equal(r.mask,'0.0.0.0');assert.equal(r.wildcard,'255.255.255.255');assert.equal(r.broadcast,'255.255.255.255');assert.equal(r.total,4294967296);assert.equal(r.usable,4294967294);assert.equal(r.firstHost,'0.0.0.1');assert.equal(r.lastHost,'255.255.255.254');
});
test('/31 endpoints use point-to-point semantics with no separate broadcast slot',()=>{
 const r=calculateSubnet('192.0.2.11/31');assert.equal(r.cidr,'192.0.2.10/31');assert.equal(r.firstHost,'192.0.2.10');assert.equal(r.lastHost,'192.0.2.11');assert.equal(r.total,2);assert.equal(r.usable,2);assert.equal(r.broadcast,null);assert.equal(r.mode,'point-to-point');assert.equal(r.inputPosition,'Point-to-point endpoint');assert.match(r.note,/RFC 3021/);
});
test('/32 is one host route at either end of IPv4 space',()=>{
 for(const ip of ['0.0.0.0','192.0.2.1','255.255.255.255']){const r=calculateSubnet(ip+'/32');assert.equal(r.cidr,ip+'/32');assert.equal(r.total,1);assert.equal(r.usable,1);assert.equal(r.firstHost,ip);assert.equal(r.lastHost,ip);assert.equal(r.broadcast,null);assert.equal(r.mask,'255.255.255.255');assert.equal(r.wildcard,'0.0.0.0');assert.equal(r.mode,'host-route');}
});
test('all 33 prefixes and 256 sample addresses agree with independent BigInt bitwise math',()=>{
 let seed=0x12345678;
 for(let i=0;i<256;i++){
   seed=(Math.imul(seed,1664525)+1013904223)>>>0;const ip=seed;
   const address=[(ip>>>24)&255,(ip>>>16)&255,(ip>>>8)&255,ip&255].join('.');
   for(let prefix=0;prefix<=32;prefix++){
     const r=calculateSubnet(address+'/'+prefix),hostMask=(1n<<BigInt(32-prefix))-1n,mask=0xffffffffn^hostMask,network=BigInt(ip)&mask,last=network|hostMask;
     const fromText=value=>value.split('.').reduce((n,v)=>(n<<8n)|BigInt(v),0n);
     assert.equal(fromText(r.network),network);assert.equal(fromText(r.lastAddress),last);assert.equal(fromText(r.mask),mask);assert.equal(fromText(r.wildcard),hostMask);assert.equal(BigInt(r.total),hostMask+1n);assert.equal(r.hostOffset,Number(BigInt(ip)-network));
   }
 }
});
test('binary rows retain 32 bits and reproduce network AND mask identities',()=>{
 const r=calculateSubnet('172.16.5.130/26');const values=r.binary.map(row=>{assert.equal(row.octets.length,4);assert(row.octets.every(o=>/^[01]{8}$/.test(o)));return BigInt('0b'+row.octets.join(''));});assert.equal(values[0]&values[1],values[2]);assert.equal(values[1]^values[4],0xffffffffn);assert.equal(values[2]|values[4],values[3]);
});
test('strict IPv4/CIDR validation rejects ambiguity, injection, unsupported input and bad prefixes',()=>{
 for(const value of ['',undefined,null,3,'192.168.1.1','192.168.1.1/33','192.168.1.1/-1','192.168.1.1/24.0','192.168.1.1/024','192.168.1.1/00','192.168.1.1/255.255.255.0','192.168.1.1/24/25','256.0.0.1/24','1.2.3/24','1.2.3.4.5/24','01.2.3.4/24','0x7f.0.0.1/24','1.2.3.4 /24','1.2.3.4/ 24','1.2.3.4/24\n','1.2.3.4/24\x00','::1/32','a'.repeat(65)])assert.throws(()=>calculateSubnet(value),String(value));assert.equal(calculateSubnet(' 192.168.1.1/24 ').input,'192.168.1.1/24');
});
test('integer conversions round-trip and reject out-of-range numbers',()=>{
 for(const address of ['0.0.0.0','127.0.0.1','128.0.0.0','255.255.255.255'])assert.equal(subnetAddressText(parseSubnetAddress(address)),address);
 for(const value of [-1,2**32,0.5,NaN,Infinity])assert.throws(()=>subnetAddressText(value));
});
test('network and directed broadcast inputs are distinguished from host positions',()=>{
 assert.equal(calculateSubnet('192.168.1.0/24').inputPosition,'Network address');assert.equal(calculateSubnet('192.168.1.255/24').inputPosition,'Directed broadcast address');assert.equal(calculateSubnet('192.168.1.254/24').inputPosition,'Host address');
});
test('private classification is separate from whole-subnet RFC1918 containment',()=>{
 for(const value of ['10.0.0.1/8','172.16.0.1/12','192.168.1.1/16']){const r=calculateSubnet(value);assert(r.category.private);assert(r.allPrivate);}
 for(const value of ['10.0.0.1/7','172.16.0.1/11','192.168.1.1/15']){const r=calculateSubnet(value);assert(r.category.private);assert(!r.allPrivate);}
 for(const value of ['172.15.255.255/32','172.32.0.0/32','192.167.255.255/32','192.169.0.0/32'])assert(!calculateSubnet(value).category.private);
});
test('common special purposes do not get mislabeled as private or guaranteed public',()=>{
 for(const [ip,name] of [['0.0.0.0','Unspecified'],['100.64.0.1','Shared'],['127.0.0.1','Loopback'],['169.254.1.1','Link-local'],['192.0.2.1','Documentation'],['198.18.0.1','Benchmark'],['198.51.100.1','Documentation'],['203.0.113.1','Documentation'],['224.0.0.1','Multicast'],['240.0.0.1','Reserved'],['255.255.255.255','Limited broadcast']]){const r=calculateSubnet(ip+'/32');assert(!r.category.private);assert(r.category.name.startsWith(name));}
 assert.equal(calculateSubnet('8.8.8.8/32').category.name,'Other IPv4 space');
});
test('text and CSV exports preserve /31 semantics and all complete binary values',()=>{
 const r=calculateSubnet('192.0.2.11/31'),text=subnetReportText(r),csv=subnetReportCsv(r);assert(text.includes('Broadcast address: Not used for /31 and /32'));assert(text.includes('First host slot: 192.0.2.10'));assert(csv.startsWith('Field,Value\r\n'));assert(csv.includes('"Subnet interpretation","Both addresses'));assert.equal(csv.split('\r\n').filter(Boolean).length,subnetRows(r).length+1);assert(text.includes(r.binary[0].value));assert.equal(JSON.parse(JSON.stringify(r)).broadcast,null);
});
test('calculations and exports do not use network or persistent storage',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw Error('No network permitted');});subnetReportCsv(calculateSubnet('10.20.30.40/16'));const source=fs.readFileSync('src/app/core/subnet-calculator.ts','utf8');for(const token of ['fetch(', 'localStorage','sessionStorage','XMLHttpRequest'])assert(!source.includes(token));
});
