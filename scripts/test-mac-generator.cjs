const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/mac-generator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {MAC_FORMATS,generateMacAddresses,formatMac,macDetails}=api;
const settings=(changes={})=>({mode:'random',vendor:'auto',quantity:5,...changes});

test('random mode creates 200 distinct local unicast 48-bit addresses',()=>{
 const batch=generateMacAddresses(settings({quantity:200}));assert.equal(batch.addresses.length,200);assert.equal(new Set(batch.addresses).size,200);for(const address of batch.addresses){assert.match(address,/^[a-f0-9]{12}$/);assert.equal(parseInt(address.slice(0,2),16)&3,2);assert(!['000000000000','ffffffffffff'].includes(address));}
});
test('all possible first-octet values preserve six random bits and set local/unicast bits correctly',()=>{
 for(let i=0;i<256;i++){const address=generateMacAddresses(settings({quantity:1}),()=>Uint8Array.from([i,1,2,3,4,5])).addresses[0];assert.equal(parseInt(address.slice(0,2),16),(i&0xfc)|2);assert.equal(address.slice(2),'0102030405');const info=macDetails(address);assert.equal(info.unicast,true);assert.equal(info.local,true);}
});
test('zero and maximum random input bytes produce fully padded known MAC vectors',()=>{
 assert.equal(generateMacAddresses(settings({quantity:1}),size=>new Uint8Array(size)).addresses[0],'020000000000');assert.equal(generateMacAddresses(settings({quantity:1}),size=>new Uint8Array(size).fill(255)).addresses[0],'feffffffffff');
});
test('VMware-style samples retain the OUI and restrict the manual-range fourth octet',()=>{
 const address=generateMacAddresses(settings({mode:'vendor',vendor:'vmware',quantity:1}),size=>new Uint8Array(size).fill(255)).addresses[0];assert.equal(address,'0050563fffff');assert.equal(macDetails(address).prefixLabel,'VMware-style');
 const batch=generateMacAddresses(settings({mode:'vendor',vendor:'vmware',quantity:200}));assert.equal(new Set(batch.addresses).size,200);for(const address of batch.addresses){assert(address.startsWith('005056'));assert(parseInt(address.slice(6,8),16)<=63);assert.equal(macDetails(address).local,false);assert.equal(macDetails(address).unicast,true);}
});
test('Hyper-V-style samples retain the prefix and all 24 suffix bits',()=>{
 const address=generateMacAddresses(settings({mode:'vendor',vendor:'hyperv',quantity:1}),size=>new Uint8Array(size).fill(255)).addresses[0];assert.equal(address,'00155dffffff');assert.equal(macDetails(address).prefixLabel,'Hyper-V-style');
});
test('mixed vendor selection uses an unbiased random bit without changing the chosen prefix',()=>{
 for(let first=0;first<256;first++){const address=generateMacAddresses(settings({mode:'vendor',quantity:1}),()=>Uint8Array.from([first,2,3,4,5,6])).addresses[0];assert.equal(address,first&1?'00155d040506':'005056040506');}
});
test('all four separators and either case represent the identical underlying address',()=>{
 const input='021a2b3c4d5e',expected={colon:'02:1A:2B:3C:4D:5E',hyphen:'02-1A-2B-3C-4D-5E',dot:'021A.2B3C.4D5E',none:'021A2B3C4D5E'};
 for(const format of MAC_FORMATS)for(const uppercase of [true,false]){const value=formatMac(input,format.id,uppercase);assert.equal(value,uppercase?expected[format.id]:expected[format.id].toLowerCase());assert.equal(value.replace(/[:.\-]/g,'').toLowerCase(),input);}
});
test('Cisco notation uses exactly three four-digit groups, including leading zeros',()=>{
 assert.equal(formatMac('00000100000a','dot',false),'0000.0100.000a');assert.equal(formatMac('000000000000','colon',true),'00:00:00:00:00:00');
});
test('first-octet inspection reports actual group and local bits in network byte order',()=>{
 const local=macDetails('021a2b3c4d5e');assert.equal(local.firstOctet,'02');assert.equal(local.binary,'00000010');assert.equal(local.unicast,true);assert.equal(local.local,true);assert.equal(local.prefix,'02:1A:2B');assert.equal(macDetails('01005e000001').unicast,false);assert.equal(macDetails('005056010203').local,false);
});
test('invalid quantities, address types and prefix selections fail before requesting randomness',()=>{
 let calls=0;const draw=()=>{calls++;throw Error('Should not run');};for(const quantity of [0,201,-1,1.2,NaN,Infinity,'5',null])assert.throws(()=>generateMacAddresses(settings({quantity}),draw),/whole quantity/);assert.throws(()=>generateMacAddresses(settings({mode:'multicast'}),draw),/Choose local random/);assert.throws(()=>generateMacAddresses(settings({vendor:'unknown'}),draw),/supported vendor/);assert.equal(calls,0);
});
test('invalid raw addresses and unsupported formatting options are rejected',()=>{
 for(const raw of ['not-a-mac','02:1a:2b:3c:4d:5e','021a2b3c4d5','021a2b3c4d5ef','021g2b3c4d5e'])assert.throws(()=>formatMac(raw,'colon',true),/12 hexadecimal/);assert.throws(()=>formatMac('021a2b3c4d5e','spaces',true),/separator/);assert.throws(()=>formatMac('021a2b3c4d5e','colon','yes'),/letter case/);
});
test('repeated random values cannot return a batch with duplicates or partial results',()=>{
 for(const mode of ['random','vendor'])assert.throws(()=>generateMacAddresses(settings({mode,quantity:2}),size=>new Uint8Array(size)),/Repeated random addresses/);
});
test('broken random providers fail clearly without weaker fallbacks',()=>{
 for(const value of [null,[],new Uint8Array(5),new Uint8Array(7)])assert.throws(()=>generateMacAddresses(settings(),()=>value),/invalid byte sequence/);assert.throws(()=>generateMacAddresses(settings(),()=>{throw Error('Entropy unavailable');}),/Entropy unavailable/);
 const descriptor=Object.getOwnPropertyDescriptor(globalThis,'crypto');try{Object.defineProperty(globalThis,'crypto',{configurable:true,value:undefined});assert.throws(()=>generateMacAddresses(settings()),/Secure browser randomness is unavailable/);}finally{if(descriptor)Object.defineProperty(globalThis,'crypto',descriptor);else delete globalThis.crypto;}
});
test('input random buffers remain unmodified and batch settings are independent snapshots',()=>{
 const bytes=Uint8Array.from([255,1,2,3,4,5]),config=settings({quantity:1}),batch=generateMacAddresses(config,()=>bytes);assert.equal(bytes[0],255);config.mode='vendor';assert.equal(batch.settings.mode,'random');assert.match(batch.generatedAt,/^\d{4}-\d{2}-\d{2}T/);
});
test('dedicated route precedes the generic page and generation has no network or storage access',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),core=fs.readFileSync('src/app/core/mac-generator.ts','utf8'),page=fs.readFileSync('src/app/pages/mac-generator.page.ts','utf8');assert(routes.indexOf("path: 'tools/mac-generator'")<routes.indexOf("path: 'tools/:tool'"));assert(!/Math\.random|fetch\(|localStorage|sessionStorage/.test(core+page));
});
