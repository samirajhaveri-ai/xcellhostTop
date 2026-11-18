const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/api-key-generator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {API_KEY_FORMATS,apiKeyAnalysis,generateApiKeys}=api;
const settings=(changes={})=>({format:'base62',length:32,quantity:5,prefix:'',...changes});

test('three alphabets create exact-length, distinct batches up to the supported maximum',()=>{
 for(const format of API_KEY_FORMATS){const batch=generateApiKeys(settings({format:format.id,length:256,quantity:100,prefix:'app_test_'}));assert.equal(batch.keys.length,100);assert.equal(new Set(batch.keys).size,100);for(const key of batch.keys){assert(key.startsWith('app_test_'));assert.equal(key.length,265);assert([...key.slice(9)].every(c=>format.alphabet.includes(c)));}}
});
test('hex uses exactly four random bits per character and excludes public prefix bits',()=>{
 assert.equal(apiKeyAnalysis(settings({format:'hex',length:32})).bits,128);assert.equal(apiKeyAnalysis(settings({format:'hex',length:64})).bits,256);assert.equal(apiKeyAnalysis(settings({format:'hex',length:32,prefix:'sk_live_'})).bits,128);assert.equal(apiKeyAnalysis(settings({format:'hex',length:32,prefix:'sk_live_'})).totalLength,40);
});
test('Base62 and Base64url estimates use their actual alphabet size',()=>{
 assert.equal(apiKeyAnalysis(settings()).bits,32*Math.log2(62));assert.equal(apiKeyAnalysis(settings({format:'base64url'})).bits,192);assert.equal(apiKeyAnalysis(settings({format:'hex',length:16})).label,'Below 128 bits');assert.equal(apiKeyAnalysis(settings({format:'base64url',length:256})).percent,100);
});
test('Base62 rejection sampling excludes the biased tail of the byte range',()=>{
 const random=size=>Uint8Array.from({length:size},(_,i)=>i<8?248+i:i-8);
 const result=generateApiKeys(settings({length:16,quantity:1}),random);assert.equal(result.keys[0],'ABCDEFGHIJKLMNOP');
});
test('all accepted byte values map uniformly onto each alphabet',()=>{
 for(const format of API_KEY_FORMATS){const cutoff=256-256%format.alphabet.length;const random=size=>Uint8Array.from({length:size},(_,i)=>i);const result=generateApiKeys(settings({format:format.id,length:cutoff,quantity:1}),random);const counts=Object.fromEntries([...format.alphabet].map(c=>[c,0]));for(const c of result.keys[0])counts[c]++;assert.deepEqual([...new Set(Object.values(counts))],[cutoff/format.alphabet.length]);}
});
test('prefixes preserve the entire random part and add no sampling requirements',()=>{
 let calls=0;const draw=size=>{calls++;return Uint8Array.from({length:size},(_,i)=>i);};
 const first=generateApiKeys(settings({quantity:1,prefix:'sk_test_'}),draw),second=generateApiKeys(settings({quantity:1}),draw);assert.equal(first.keys[0],'sk_test_'+second.keys[0]);assert.equal(calls,2);
});
test('configuration is snapshotted so later form edits do not relabel old output',()=>{
 const config=settings({quantity:1});const batch=generateApiKeys(config);config.prefix='changed_';config.format='hex';assert.equal(batch.settings.prefix,'');assert.equal(batch.settings.format,'base62');assert.match(batch.generatedAt,/^\d{4}-\d{2}-\d{2}T/);
});
test('invalid format, prefix, quantities and lengths are rejected before entropy is requested',()=>{
 let calls=0;const draw=()=>{calls++;throw Error('Should not run');};
 for(const length of [0,15,257,1.5,NaN,Infinity,'32',null])assert.throws(()=>generateApiKeys(settings({length}),draw),/random length/);
 for(const quantity of [0,101,-1,1.2,NaN,'5',null])assert.throws(()=>generateApiKeys(settings({quantity}),draw),/quantity/);
 for(const prefix of ['a'.repeat(33),'space here','<script>','line\nbreak','x,y','é',null,5])assert.throws(()=>generateApiKeys(settings({prefix}),draw),/prefix/);
 assert.throws(()=>generateApiKeys(settings({format:'unknown'}),draw),/Choose Base62/);assert.equal(calls,0);
});
test('limits accept the smallest batch and full 32-character ASCII prefix',()=>{
 const config=settings({format:'hex',length:16,quantity:1,prefix:'a'.repeat(32)}),batch=generateApiKeys(config);assert.equal(batch.keys[0].length,48);assert.equal(batch.keys.length,1);
});
test('entropy failure and invalid source buffers cannot silently produce output',()=>{
 assert.throws(()=>generateApiKeys(settings(),()=>{throw Error('Entropy failure');}),/Entropy failure/);
 for(const bytes of [null,[],new Uint8Array(255),new Uint8Array(257)])assert.throws(()=>generateApiKeys(settings(),()=>bytes),/invalid byte sequence/);
 assert.throws(()=>generateApiKeys(settings({quantity:1}),size=>new Uint8Array(size).fill(255)),/could not complete/);
});
test('repeated random values cannot return a batch with duplicate keys',()=>{
 assert.throws(()=>generateApiKeys(settings({format:'hex',quantity:2}),size=>new Uint8Array(size)),/Repeated random values/);
});
test('temporary random byte buffers are cleared after completion or failure',()=>{
 const buffers=[];const draw=size=>{const b=Uint8Array.from({length:size},(_,i)=>i);buffers.push(b);return b;};generateApiKeys(settings({quantity:1}),draw);assert(buffers.every(b=>b.every(x=>x===0)));
 const rejected=new Uint8Array(256);assert.throws(()=>generateApiKeys(settings({quantity:1}),()=>rejected.fill(255)));assert(rejected.every(x=>x===0));
});
test('missing Web Crypto fails instead of falling back to a weaker random source',()=>{
 const descriptor=Object.getOwnPropertyDescriptor(globalThis,'crypto');try{Object.defineProperty(globalThis,'crypto',{configurable:true,value:undefined});assert.throws(()=>generateApiKeys(settings()),/Secure browser randomness is unavailable/);}finally{if(descriptor)Object.defineProperty(globalThis,'crypto',descriptor);else delete globalThis.crypto;}
});
test('page uses a dedicated route and exposes no keys in export filenames or query parameters',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),page=fs.readFileSync('src/app/pages/api-key-generator.page.ts','utf8');assert(routes.indexOf("path: 'tools/api-key-generator'")<routes.indexOf("path: 'tools/:tool'"));assert(!/localStorage|sessionStorage|Math\.random|fetch\(/.test(page));assert.match(page,/link.download = 'api-keys-' \+ batch.settings.format/);
});
