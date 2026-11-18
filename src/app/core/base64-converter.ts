export type Base64Variant = 'standard' | 'url';
export const BASE64_BYTE_LIMIT = 5 * 1024 * 1024;
export const BASE64_INPUT_LIMIT = 8 * 1024 * 1024;
function checkVariant(variant: Base64Variant): void { if (!['standard','url'].includes(variant)) throw new Error('Choose standard Base64 or Base64url.'); }

export function utf8Bytes(text: string): Uint8Array {
  if (typeof text !== 'string') throw new Error('Enter text to encode.');
  if (text.length > BASE64_INPUT_LIMIT) throw new Error('Text exceeds the input limit. Use up to 5 MiB of UTF-8 data.');
  for (let i=0;i<text.length;i++) {
    const code=text.charCodeAt(i);
    if (code>=0xd800&&code<=0xdbff) { const next=text.charCodeAt(++i); if (!(next>=0xdc00&&next<=0xdfff)) throw new Error('Text contains an incomplete Unicode character. Correct it or encode the original file bytes.'); }
    else if (code>=0xdc00&&code<=0xdfff) throw new Error('Text contains an incomplete Unicode character. Correct it or encode the original file bytes.');
  }
  const bytes=new TextEncoder().encode(text);
  if(bytes.length>BASE64_BYTE_LIMIT)throw new Error('Use up to 5 MiB of UTF-8 text or file data.');
  return bytes;
}
export function bytesToBase64(bytes: Uint8Array, variant: Base64Variant='standard', padding=true): string {
  checkVariant(variant);
  if (!(bytes instanceof Uint8Array)||bytes.length>BASE64_BYTE_LIMIT) throw new Error('Use up to 5 MiB of byte data.');
  if (typeof padding!=='boolean') throw new Error('Choose a valid padding option.');
  const parts:string[]=[];
  for(let i=0;i<bytes.length;i+=32768)parts.push(String.fromCharCode(...bytes.subarray(i,i+32768)));
  let encoded=btoa(parts.join(''));
  if(variant==='url')encoded=encoded.replaceAll('+','-').replaceAll('/','_');
  return padding?encoded:encoded.replace(/=+$/,'');
}
export function base64ToBytes(input: string, variant: Base64Variant='standard', ignoreWhitespace=true): Uint8Array {
  checkVariant(variant);
  if(typeof input!=='string'||input.length>BASE64_INPUT_LIMIT)throw new Error('Use up to 8 MiB of Base64 input, including whitespace.');
  if(typeof ignoreWhitespace!=='boolean')throw new Error('Choose a valid whitespace option.');
  if(/^\s*data:/i.test(input))throw new Error('Paste the Base64 payload only. Remove the data URL header and its comma.');
  const value=ignoreWhitespace?input.replace(/[\t\r\n ]/g,''):input;
  const allowed=variant==='url'?/^[A-Za-z0-9_-]*={0,2}$/:/^[A-Za-z0-9+/]*={0,2}$/;
  if(!allowed.test(value))throw new Error('Input contains characters outside the selected '+(variant==='url'?'Base64url':'Base64')+' alphabet'+(ignoreWhitespace?'.':', or contains whitespace.'));
  const data=value.replace(/=+$/,''),hasPadding=data.length!==value.length,remainder=data.length%4;
  if(remainder===1||(hasPadding&&value.length%4!==0))throw new Error('Invalid Base64 length or padding. Check for truncated text or extra = characters.');
  const padded=(variant==='url'?data.replaceAll('-','+').replaceAll('_','/'):data)+'='.repeat((4-remainder)%4);
  if(hasPadding&&value.length!==padded.length)throw new Error('Padding must appear only at the end and match the final Base64 block.');
  const expected=padded.length/4*3-(padded.endsWith('==')?2:padded.endsWith('=')?1:0);
  if(expected>BASE64_BYTE_LIMIT)throw new Error('Decoded data exceeds the 5 MiB limit.');
  let binary:string;
  try{binary=atob(padded);}catch{throw new Error('Invalid Base64 data. Check the alphabet, length and padding.');}
  const bytes=Uint8Array.from(binary,char=>char.charCodeAt(0));
  if(bytesToBase64(bytes,'standard',true)!==padded)throw new Error('Non-zero padding bits make this a non-canonical Base64 value. Check the final characters.');
  return bytes;
}
export function decodedText(bytes: Uint8Array): {text:string|null;hasControls:boolean} {
  try{const text=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes);return {text,hasControls:/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(text)};}catch{return {text:null,hasControls:true};}
}
export function base64FileText(bytes: Uint8Array): string {
  if(bytes.length>BASE64_INPUT_LIMIT)throw new Error('Use a Base64 text file up to 8 MiB.');
  try{return new TextDecoder('utf-8',{fatal:true}).decode(bytes);}catch{throw new Error('For decoding, select a UTF-8 or ASCII file containing Base64 text.');}
}
export function hexBytes(bytes: Uint8Array): string {const parts:string[]=[];for(let i=0;i<bytes.length;i+=8192)parts.push(Array.from(bytes.subarray(i,i+8192),byte=>byte.toString(16).padStart(2,'0')).join(' '));return parts.join(' ');}
export function hexPreview(bytes: Uint8Array, limit=512): string {
  const rows:string[]=[];
  for(let i=0;i<Math.min(bytes.length,limit);i+=16){const part=bytes.subarray(i,Math.min(i+16,limit));rows.push(i.toString(16).padStart(8,'0')+'  '+hexBytes(part).padEnd(47,' ')+'  '+Array.from(part,byte=>byte>=32&&byte<=126?String.fromCharCode(byte):'.').join(''));}
  return rows.join('\n');
}
