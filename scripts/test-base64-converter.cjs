const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/base64-converter.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {BASE64_BYTE_LIMIT,BASE64_INPUT_LIMIT,utf8Bytes,bytesToBase64,base64ToBytes,decodedText,base64FileText,hexBytes,hexPreview}=api;

test('RFC 4648 vectors encode and decode exactly, including the empty sequence',()=>{
 for(const [text,encoded]of [['',''],['f','Zg=='],['fo','Zm8='],['foo','Zm9v'],['foob','Zm9vYg=='],['fooba','Zm9vYmE='],['foobar','Zm9vYmFy']]){assert.equal(bytesToBase64(utf8Bytes(text)),encoded);assert.equal(decodedText(base64ToBytes(encoded)).text,text);}
});
test('Unicode, emoji, whitespace and newlines round-trip as exact UTF-8 bytes',()=>{
 for(const text of ['Hello, XcellHost! 👋','नमस्ते दुनिया','你好 🌍','e\u0301','é',' leading and trailing \n\t','\ufeffHello']){const encoded=bytesToBase64(utf8Bytes(text));assert.equal(encoded,Buffer.from(text,'utf8').toString('base64'));assert.equal(decodedText(base64ToBytes(encoded)).text,text);}
});
test('standard and URL-safe alphabets match independent byte encoding',()=>{
 const bytes=Uint8Array.from([251,255]);assert.equal(bytesToBase64(bytes,'standard',true),'+/8=');assert.equal(bytesToBase64(bytes,'url',false),'-_8');assert.deepEqual(base64ToBytes('-_8','url'),bytes);assert.deepEqual(base64ToBytes('-_8=','url'),bytes);assert.throws(()=>base64ToBytes('-_8','standard'),/alphabet/);assert.throws(()=>base64ToBytes('+/8=','url'),/alphabet/);
});
test('padded and unpadded representations decode for each possible final byte count',()=>{
 for(let length=0;length<20;length++){const bytes=Uint8Array.from({length},(_,i)=>i*11);for(const variant of ['standard','url'])for(const padding of [true,false])assert.deepEqual(base64ToBytes(bytesToBase64(bytes,variant,padding),variant),bytes);}
});
test('ASCII whitespace is ignored only when explicitly enabled',()=>{
 assert.equal(decodedText(base64ToBytes(' Zm\t9v\r\n')).text,'foo');assert.throws(()=>base64ToBytes(' Zm9v', 'standard',false),/whitespace/);for(const input of ['Zm9v\u00a0','Zm9v\u200b','Zm9v\f'])assert.throws(()=>base64ToBytes(input),/alphabet/);
});
test('bad lengths, padding placement, invalid characters and nonzero pad bits are rejected',()=>{
 for(const input of ['A','Zg=','Zg===','Zm=9','====','Zm9v=','Zm9v====','Zm9v!','Zg==junk','Zh==','Zm9=','Zh','Zm9'])assert.throws(()=>base64ToBytes(input),input);assert.throws(()=>base64ToBytes('data:text/plain;base64,Zm9v'),/payload only/);
});
test('binary bytes remain intact when they are not valid UTF-8 text',()=>{
 const bytes=Uint8Array.from({length:256},(_,i)=>i),encoded=bytesToBase64(bytes),decoded=base64ToBytes(encoded);assert.deepEqual(decoded,bytes);assert.deepEqual(decodedText(decoded),{text:null,hasControls:true});
});
test('valid UTF-8 control bytes are identified without discarding the decoded text',()=>{
 assert.deepEqual(decodedText(Uint8Array.from([0,65,10,66])),{text:'\x00A\nB',hasControls:true});assert.deepEqual(decodedText(utf8Bytes('A\nB\tC')),{text:'A\nB\tC',hasControls:false});
});
test('BOM handling preserves decoded data while accepting UTF-8 BOMs on Base64 text files',()=>{
 assert.equal(decodedText(Uint8Array.from([239,187,191,65])).text,'\ufeffA');assert.equal(base64FileText(Uint8Array.from([239,187,191,90,103,61,61])),'Zg==');assert.throws(()=>base64FileText(Uint8Array.from([255,254,90,0])),/UTF-8 or ASCII/);
});
test('incomplete Unicode input fails instead of silently replacing characters',()=>{
 for(const text of ['\ud800','\udfff','x\ud800y','\ud800\ud800'])assert.throws(()=>utf8Bytes(text),/incomplete Unicode/);assert.equal(decodedText(utf8Bytes('😀')).text,'😀');
});
test('large inputs are processed in chunks without call-stack overflow',()=>{
 const bytes=new Uint8Array(BASE64_BYTE_LIMIT).fill(165),encoded=bytesToBase64(bytes);assert.equal(encoded.length,4*Math.ceil(bytes.length/3));assert.deepEqual(base64ToBytes(encoded),bytes);
});
test('size limits are checked for raw data, text files and decoded output',()=>{
 assert.throws(()=>bytesToBase64(new Uint8Array(BASE64_BYTE_LIMIT+1)),/5 MiB/);assert.throws(()=>utf8Bytes('a'.repeat(BASE64_BYTE_LIMIT+1)),/5 MiB/);assert.throws(()=>base64ToBytes('A'.repeat(BASE64_INPUT_LIMIT+1)),/8 MiB/);assert.throws(()=>base64FileText(new Uint8Array(BASE64_INPUT_LIMIT+1)),/8 MiB/);assert.throws(()=>base64ToBytes('A'.repeat(4*Math.ceil((BASE64_BYTE_LIMIT+1)/3))),/Decoded data exceeds/);
});
test('hex copy and bounded previews show the correct bytes and offsets',()=>{
 const bytes=Uint8Array.from([0,255,32,65]);assert.equal(hexBytes(bytes),'00 ff 20 41');assert(hexPreview(bytes).startsWith('00000000  00 ff 20 41'));assert(hexPreview(bytes).endsWith('.. A'));const preview=hexPreview(new Uint8Array(1000));assert.equal(preview.split('\n').length,32);assert(preview.includes('000001f0'));assert(!preview.includes('00000200'));
});
test('invalid option types and unknown alphabets fail explicitly',()=>{
 assert.throws(()=>bytesToBase64(new Uint8Array(),'unknown',true),/standard Base64/);assert.throws(()=>bytesToBase64(new Uint8Array(),'standard','yes'),/padding/);assert.throws(()=>base64ToBytes('Zg==','standard','yes'),/whitespace/);assert.throws(()=>bytesToBase64([]),/byte data/);
});
test('dedicated route precedes the generic tool and conversions do not send or persist data',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),page=fs.readFileSync('src/app/pages/base64.page.ts','utf8'),core=fs.readFileSync('src/app/core/base64-converter.ts','utf8');assert(routes.indexOf("path: 'tools/base64'")<routes.indexOf("path: 'tools/:tool'"));assert(!/fetch\(|localStorage|sessionStorage|innerHTML/.test(core+page));
});
