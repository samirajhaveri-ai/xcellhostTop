const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript'),net=require('node:net');
const subnet={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/subnet-calculator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(subnet);
const api={};new Function('exports','require',ts.transpileModule(fs.readFileSync('src/app/core/ipv4-converter.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,()=>subnet);
const {convertIpv4,ipv4InputValue,ipv4ConversionRows,ipv4ConversionText,ipv4ConversionCsv}=api;
test('known IPv4 vector produces correct unsigned decimal, binary and hexadecimal forms',()=>{
 const r=convertIpv4('192.168.1.1','ipv4');assert.equal(r.decimal,3232235777);assert.equal(r.hex,'0xC0A80101');assert.equal(r.hexBytes,'C0:A8:01:01');assert.equal(r.binary,'11000000101010000000000100000001');assert.equal(r.dottedBinary,'11000000.10101000.00000001.00000001');assert.equal(r.address,'192.168.1.1');
});
test('zero, sign boundary and maximum IPv4 values remain unsigned and fully padded',()=>{
 for(const [input,decimal,hex]of [['0.0.0.0',0,'0x00000000'],['128.0.0.0',2147483648,'0x80000000'],['255.255.255.255',4294967295,'0xFFFFFFFF']]){const r=convertIpv4(input,'ipv4');assert.equal(r.decimal,decimal);assert.equal(r.hex,hex);assert.equal(r.binary.length,32);assert.equal(r.octets.length,4);}
});
test('decimal mode accepts only the explicit unsigned decimal representation',()=>{
 assert.equal(convertIpv4('3232235777','decimal').address,'192.168.1.1');assert.equal(convertIpv4('0000000001','decimal').address,'0.0.0.1');
 for(const input of ['-1','+1','4294967296','5000000000','1.1','1e3','1,000','0x10','Infinity','00000000001'])assert.throws(()=>convertIpv4(input,'decimal'),input);
});
test('binary input supports compact, prefixed, dotted and space-separated bit groups',()=>{
 for(const input of ['11000000101010000000000100000001','0b11000000101010000000000100000001','11000000.10101000.00000001.00000001','11000000 10101000 00000001 00000001'])assert.equal(convertIpv4(input,'binary').address,'192.168.1.1');assert.equal(convertIpv4('0b1','binary').binary,'0'.repeat(31)+'1');assert.equal(convertIpv4('1','binary').address,'0.0.0.1');
});
test('hex input supports optional prefix, either case and consistent byte grouping',()=>{
 for(const input of ['C0A80101','0xC0A80101','0Xc0a80101','c0:a8:01:01','C0.A8.01.01'])assert.equal(convertIpv4(input,'hex').address,'192.168.1.1');assert.equal(convertIpv4('f','hex').address,'0.0.0.15');assert.equal(convertIpv4('0x0','hex').hex,'0x00000000');
});
test('malformed or mixed grouped notations and oversized bases are rejected',()=>{
 for(const input of ['1'.repeat(33),'0b','10102','0.0.0.1','00000000.00000000 00000000.00000001','00000000.00000000.00000000','00000000.00000000.00000000.000000001'])assert.throws(()=>convertIpv4(input,'binary'),input);
 for(const input of ['0x','0xFFFFFFFFF','123456789','fffffffg','c0:a8.01:01','c:a8:01:01','c0:a8:01','0xc0:a8:01:01','c0-a8-01-01'])assert.throws(()=>convertIpv4(input,'hex'),input);
});
test('IPv4 octets reject leading-zero ambiguity, URLs, CIDR masks and invalid ranges',()=>{
 for(const input of ['256.0.0.1','192.168.1','192.168.1.1.1','192.168.001.1','01.0.0.1','0xC0.168.1.1','https://192.168.1.1','192.168.1.1/24','::1'])assert.throws(()=>convertIpv4(input,'ipv4'),input);assert.equal(convertIpv4(' 192.168.1.1 ','ipv4').address,'192.168.1.1');
});
test('all input forms round-trip against independent Buffer big-endian conversion',()=>{
 let seed=0xdeadbeef;
 for(let i=0;i<2048;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const bytes=Buffer.alloc(4);bytes.writeUInt32BE(seed);const address=[...bytes].join('.'),r=convertIpv4(address,'ipv4');assert.equal(r.decimal,bytes.readUInt32BE());assert.equal(r.hex,'0x'+bytes.toString('hex').toUpperCase());for(const format of ['ipv4','decimal','binary','hex'])assert.equal(convertIpv4(ipv4InputValue(r,format),format).address,address);}
});
test('octet contributions reconstruct the unsigned integer in network byte order',()=>{
 const r=convertIpv4('192.168.1.1','ipv4');assert.deepEqual(r.octets.map(o=>o.weight),[16777216,65536,256,1]);assert.equal(r.octets.reduce((n,o)=>n+o.contribution,0),r.decimal);assert(r.octets.every(o=>o.binary.length===8&&o.hex.length===2));
});
test('reverse DNS and mapped IPv6 representations derive from the same four bytes',()=>{
 const r=convertIpv4('192.0.2.128','ipv4');assert.equal(r.reverseName,'128.2.0.192.in-addr.arpa');assert.equal(r.mappedIpv6,'::ffff:192.0.2.128');assert.equal(net.isIP(r.mappedIpv6),6);
});
test('common address categories are informative without claiming public reachability',()=>{
 assert(convertIpv4('192.168.1.1','ipv4').category.private);assert.equal(convertIpv4('127.0.0.1','ipv4').category.name,'Loopback');assert.equal(convertIpv4('0.0.0.0','ipv4').category.name,'Unspecified address');assert.equal(convertIpv4('8.8.8.8','ipv4').category.name,'Other IPv4 space');
});
test('empty, unsupported, oversized and control-bearing input fails explicitly',()=>{
 for(const input of ['',null,12,undefined,'a'.repeat(101),'1.2.3.4\n','1.2.3.4\x00'])assert.throws(()=>convertIpv4(input,'ipv4'),String(input));assert.throws(()=>convertIpv4('1','auto'));assert.throws(()=>ipv4InputValue(convertIpv4('1','decimal'),'auto'));
});
test('text, JSON and CSV exports preserve exact values and complete rows',()=>{
 const r=convertIpv4('4294967295','decimal'),text=ipv4ConversionText(r),csv=ipv4ConversionCsv(r);assert(text.includes('Unsigned decimal: 4294967295'));assert(text.includes('Binary (32 bits): '+'1'.repeat(32)));assert(csv.startsWith('Field,Value\r\n'));assert(csv.includes('"Hexadecimal","0xFFFFFFFF"'));assert.equal(csv.split('\r\n').filter(Boolean).length,ipv4ConversionRows(r).length+1);assert.equal(JSON.parse(JSON.stringify(r)).decimal,4294967295);
});
test('conversion and export functions do not use network or browser storage',t=>{
 t.mock.method(globalThis,'fetch',()=>{throw Error('Network is forbidden');});ipv4ConversionText(convertIpv4('192.168.1.1','ipv4'));const source=fs.readFileSync('src/app/core/ipv4-converter.ts','utf8');for(const value of ['fetch(', 'localStorage','sessionStorage','XMLHttpRequest'])assert(!source.includes(value));
});
