const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/random-string.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {RANDOM_STRING_PRESETS,randomStringAnalysis,generateRandomStrings}=api;
const settings=(changes={})=>({length:16,quantity:1,groups:['uppercase','lowercase','numbers'],custom:'',customOnly:false,excludeAmbiguous:false,...changes});
const words=(values)=>size=>{const bytes=new Uint8Array(size);for(let i=0;i<size/2;i++){const n=values[i%values.length];bytes[2*i]=n>>8;bytes[2*i+1]=n&255;}return bytes;};

test('default pool has all 62 distinct letters and digits with the corresponding search space',()=>{
 const analysis=randomStringAnalysis(settings());assert.equal(analysis.alphabetSize,62);assert.equal(analysis.bits,16*Math.log2(62));assert.equal(new Set(analysis.alphabet).size,62);assert.equal(generateRandomStrings(settings()).values[0].length,16);
});
test('all presets create their intended length and character alphabet',()=>{
 for(const preset of RANDOM_STRING_PRESETS){const config=settings({...preset,groups:[...preset.groups],quantity:10,excludeAmbiguous:false}),batch=generateRandomStrings(config),{alphabet}=randomStringAnalysis(config);assert.equal(batch.values.length,10);assert(batch.values.every(value=>Array.from(value).length===preset.length&&[...value].every(c=>alphabet.includes(c))));}
});
test('custom characters append to the selected groups and duplicates do not add probability weight',()=>{
 const analysis=randomStringAnalysis(settings({groups:['numbers'],custom:'AAA123A'}));assert.equal(analysis.alphabetSize,11);assert.equal(analysis.alphabet.join(''),'0123456789A');
 const only=randomStringAnalysis(settings({custom:'AAABBBCCC',customOnly:true}));assert.deepEqual(only.alphabet,['A','B','C']);
});
test('custom-only mode ignores standard groups and exclusions affect the final combined pool',()=>{
 const config=settings({groups:['numbers'],custom:'0O1lIxyz',customOnly:true,excludeAmbiguous:true});assert.deepEqual(randomStringAnalysis(config).alphabet,['x','y','z']);assert(generateRandomStrings(config).values.every(v=>/^[xyz]{16}$/.test(v)));
 assert.throws(()=>generateRandomStrings(settings({custom:'0O1lI',customOnly:true,excludeAmbiguous:true})),/at least one custom/);
});
test('rejection sampling discards out-of-range 16-bit values instead of modulo bias',()=>{
 const config=settings({length:6,custom:'ABC',customOnly:true});assert.equal(generateRandomStrings(config,words([65535,0,1,2,3,4,5])).values[0],'ABCABC');
});
test('uniform samples cover custom alphabets exactly for an evenly distributed input sequence',()=>{
 const config=settings({length:300,custom:'abc',customOnly:true}),draw=words(Array.from({length:256},(_,i)=>i%3));const value=generateRandomStrings(config,draw).values[0];
 // One refill starts again at zero; verify the actual accepted sequence independently.
 const expected=Array.from({length:300},(_,i)=>'abc'[(i%256)%3]).join('');assert.equal(value,expected);
});
test('Unicode code points are sampled without splitting surrogate pairs',()=>{
 const config=settings({length:12,custom:'😀界é',customOnly:true}),batch=generateRandomStrings(config,words([0,1,2]));assert.equal(batch.values[0],'😀界é'.repeat(4));assert.equal(Array.from(batch.values[0]).length,12);assert.equal(batch.values[0].length,16);
});
test('a large custom pool can select characters beyond byte-sized indices',()=>{
 const custom=Array.from({length:256},(_,i)=>String.fromCodePoint(0x4e00+i)).join(''),config=settings({length:1,custom});const analysis=randomStringAnalysis(config);assert.equal(analysis.alphabetSize,318);assert.equal(generateRandomStrings(config,words([317])).values[0],String.fromCodePoint(0x4e00+255));
});
test('spaces are preserved while control characters, line breaks and incomplete Unicode are rejected',()=>{
 assert.equal(generateRandomStrings(settings({length:4,custom:' ',customOnly:true}),words([0])).values[0],'    ');
 for(const custom of ['a\nb','a\rb','a\tb','\x00','\x7f','\u0085','\ud800','\udfff'])assert.throws(()=>generateRandomStrings(settings({custom})),/Custom characters cannot include/);
});
test('short or single-character alphabets permit repeats and have an honest entropy estimate',()=>{
 const config=settings({length:1,quantity:100,custom:'A',customOnly:true});assert.equal(randomStringAnalysis(config).bits,0);assert.deepEqual(generateRandomStrings(config,words([0])).values,Array(100).fill('A'));
});
test('maximum-sized batches retain exact requested code-point lengths',()=>{
 const batch=generateRandomStrings(settings({length:512,quantity:100,custom:'😀'}));assert.equal(batch.values.length,100);assert(batch.values.every(value=>Array.from(value).length===512));
});
test('invalid lengths, quantities, groups and empty pools fail before requesting randomness',()=>{
 let calls=0;const draw=()=>{calls++;throw Error('Should not run');};
 for(const length of [0,513,-1,1.1,NaN,Infinity,'16'])assert.throws(()=>generateRandomStrings(settings({length}),draw),/whole length/);
 for(const quantity of [0,101,-1,1.1,NaN,'1'])assert.throws(()=>generateRandomStrings(settings({quantity}),draw),/whole quantity/);
 for(const groups of [null,['unknown'],['numbers','nope']])assert.throws(()=>generateRandomStrings(settings({groups}),draw),/character groups/);
 assert.throws(()=>generateRandomStrings(settings({groups:[]}),draw),/Choose a character group/);assert.throws(()=>generateRandomStrings(settings({custom:'',customOnly:true}),draw),/Enter at least one custom/);assert.throws(()=>generateRandomStrings(settings({custom:'a'.repeat(257)}),draw),/up to 256/);assert.equal(calls,0);
});
test('batch settings retain an independent snapshot of the selected groups',()=>{
 const config=settings(),batch=generateRandomStrings(config);config.groups.push('symbols');config.length=32;assert.equal(batch.settings.length,16);assert.equal(batch.settings.groups.length,3);assert.match(batch.generatedAt,/^\d{4}-\d{2}-\d{2}T/);
});
test('invalid random providers and unavailable randomness fail explicitly',()=>{
 for(const buffer of [null,[],new Uint8Array(511),new Uint8Array(513)])assert.throws(()=>generateRandomStrings(settings(),()=>buffer),/invalid byte sequence/);
 assert.throws(()=>generateRandomStrings(settings(),()=>{throw Error('Entropy error');}),/Entropy error/);
 assert.throws(()=>generateRandomStrings(settings({customOnly:true,custom:'ABC'}),size=>new Uint8Array(size).fill(255)),/could not complete/);
 const descriptor=Object.getOwnPropertyDescriptor(globalThis,'crypto');try{Object.defineProperty(globalThis,'crypto',{configurable:true,value:undefined});assert.throws(()=>generateRandomStrings(settings()),/Secure browser randomness is unavailable/);}finally{if(descriptor)Object.defineProperty(globalThis,'crypto',descriptor);else delete globalThis.crypto;}
});
test('temporary random buffers are cleared on success and on rejection exhaustion',()=>{
 const buffers=[];generateRandomStrings(settings(),size=>{const bytes=new Uint8Array(size).fill(7);buffers.push(bytes);return bytes;});assert(buffers.every(bytes=>bytes.every(b=>b===0)));
 const bytes=new Uint8Array(512);assert.throws(()=>generateRandomStrings(settings({custom:'ABC',customOnly:true}),()=>bytes.fill(255)));assert(bytes.every(b=>b===0));
});
test('dedicated route precedes the generic tools page and generation has no network or storage paths',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),page=fs.readFileSync('src/app/pages/random-string.page.ts','utf8'),core=fs.readFileSync('src/app/core/random-string.ts','utf8');assert(routes.indexOf("path: 'tools/random-string'")<routes.indexOf("path: 'tools/:tool'"));assert(!/Math\.random|localStorage|sessionStorage|fetch\(/.test(core+page));
});
