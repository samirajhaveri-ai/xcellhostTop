import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { BASE64_BYTE_LIMIT, BASE64_INPUT_LIMIT, Base64Variant, base64FileText, base64ToBytes, bytesToBase64, decodedText, hexBytes, hexPreview, utf8Bytes } from '../core/base64-converter';

interface Base64Result { action:'encode'|'decode'; variant:Base64Variant; bytes:Uint8Array; encoded:string; text:string|null; hasControls:boolean; inputBytes:number; outputBytes:number; sourceName:string; }
@Component({selector:'xh-base64-page',standalone:true,imports:[RouterLink],templateUrl:'./base64.page.html',styleUrls:['./dns-lookup.page.css','./base64.page.css'],changeDetection:ChangeDetectionStrategy.OnPush})
export class Base64Page {
  private readonly document=inject(DOCUMENT);
  private revision=0;
  readonly action=signal<'encode'|'decode'>('encode');
  readonly source=signal<'text'|'file'>('text');
  readonly input=signal('');
  readonly file=signal<File|null>(null);
  readonly variant=signal<Base64Variant>('standard');
  readonly padding=signal(true);
  readonly ignoreWhitespace=signal(true);
  readonly busy=signal(false);
  readonly result=signal<Base64Result|null>(null);
  readonly view=signal<'text'|'hex'>('text');
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly inputLimit=BASE64_INPUT_LIMIT;
  readonly selectedLimit=computed(()=>this.action()==='encode'?BASE64_BYTE_LIMIT:BASE64_INPUT_LIMIT);
  readonly inputBytes=computed(()=>new TextEncoder().encode(this.input()).length);
  readonly outputText=computed(()=>{const result=this.result();if(!result)return '';return result.action==='encode'?result.encoded:this.view()==='text'?(result.text??''):hexPreview(result.bytes);});
  readonly previewText=computed(()=>this.outputText().slice(0,20000));
  readonly truncated=computed(()=>{const result=this.result();return !!result&&(result.action==='decode'&&this.view()==='hex'?result.bytes.length>512:this.outputText().length>20000);});
  readonly related=[
    {id:'hash-generator',icon:'tag',title:'Hash Generator',text:'Calculate checksums for text and files.'},
    {id:'url-encode',icon:'link',title:'URL Encoder / Decoder',text:'Encode or decode a URL component.'},
    {id:'jwt-decoder',icon:'data_object',title:'JWT Decoder',text:'Inspect a JWT header and payload.'},
    {id:'random-string',icon:'shuffle',title:'Random String Generator',text:'Generate strings from a custom character pool.'},
  ];
  readonly features=[
    {icon:'sync_alt',title:'Encode and decode',text:'Convert UTF-8 text or original file bytes in either direction.'},
    {icon:'language',title:'Standard and URL-safe',text:'Choose the matching alphabet and control output padding.'},
    {icon:'folder_open',title:'Text and file support',text:'Process up to 5 MiB of raw data locally in your browser.'},
    {icon:'download',title:'Byte-preserving downloads',text:'Save decoded bytes even when the result is not UTF-8 text.'},
  ];
  readonly questions=[
    {q:'Is Base64 encryption?',a:'No. Base64 is a reversible representation of bytes and has no secret key. Treat an encoded password or token as sensitive as its original value. This tool’s conversion code stays in the browser and does not upload inputs or save results in browser storage.'},
    {q:'How does text encoding work?',a:'Text input is converted to UTF-8 bytes before Base64 encoding. Decoding shows text only when the decoded bytes form valid UTF-8. Text is not trimmed or Unicode-normalized by the converter. Browser text fields can normalize pasted line endings; use File Upload when exact original bytes matter.'},
    {q:'What is the difference between Base64 and Base64url?',a:'Standard Base64 uses + and / in addition to letters and digits. Base64url uses - and _ in their places. Choose the variant expected by your destination. The padding option affects encoded output; decoding accepts correctly formed padded or unpadded input in the selected alphabet.'},
    {q:'Why do some strings end with =?',a:'Padding completes a four-character output block when the input does not end on a three-byte boundary. The encoded length is normally 4 × ceil(byte count / 3), including padding. Some protocols permit padding to be omitted; this page lets you choose on encode.'},
    {q:'Why is the decoded result shown as hexadecimal?',a:'The data may be a file or byte sequence rather than readable UTF-8 text. Hex view is selected when UTF-8 decoding fails or the text contains control bytes. Download preserves the exact decoded bytes. Copy hex returns space-separated byte values without the preview’s offsets.'},
    {q:'Which file types can I use?',a:'Encode accepts any file type up to 5 MiB and reads its original bytes. Decode expects a UTF-8 or ASCII file containing Base64 text, up to 8 MiB, with decoded output limited to 5 MiB. A UTF-8 byte-order mark on an uploaded Base64 text file is ignored. Base64 alone does not retain a file’s name or media type.'},
    {q:'Why is an input rejected?',a:'The decoder checks the selected alphabet, valid block length, end padding and zero padding bits. It accepts spaces, tabs and line breaks only when the whitespace option is enabled. Other characters, mixed alphabets, truncated input and malformed padding produce errors. For a data URL, paste only the payload after the comma.'},
    {q:'Does a shortened preview affect copy or download?',a:'No. Text previews are limited to 20,000 characters and hexadecimal previews to 512 bytes for readability. Copy and download use the complete result. Encoded output is saved as TXT. Decoded output is saved as UTF-8 TXT when readable, or as a binary file; rename a binary download to its intended extension if needed.'},
  ];
  constructor(){inject(SeoService).set('Base64 Encoder / Decoder - Text & Files | XcellHost Tools','Encode UTF-8 text or files to Base64 and Base64url, decode back to text or original bytes, then copy or download results locally.','/tools/base64');inject(DestroyRef).onDestroy(()=>{this.revision++;this.input.set('');this.file.set(null);this.result.set(null);this.fallback.set('');});}
  private invalidate():void{this.revision++;this.busy.set(false);this.result.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  changeAction(action:'encode'|'decode'):void{if(this.action()===action)return;this.invalidate();this.action.set(action);}
  changeSource(source:'text'|'file'):void{if(this.source()===source)return;this.invalidate();this.source.set(source);}
  edit(event:Event):void{this.invalidate();this.input.set((event.target as HTMLTextAreaElement).value);}
  changeVariant(event:Event):void{this.invalidate();const variant=(event.target as HTMLSelectElement).value as Base64Variant;this.variant.set(variant);this.padding.set(variant==='standard');}
  toggle(field:'padding'|'ignoreWhitespace',event:Event):void{this.invalidate();this[field].set((event.target as HTMLInputElement).checked);}
  selectFile(event:Event):void{const picker=event.target as HTMLInputElement;this.setFile(picker.files?.[0]||null);picker.value='';}
  drop(event:DragEvent):void{event.preventDefault();this.setFile(event.dataTransfer?.files[0]||null);}
  setFile(file:File|null):void{this.invalidate();this.file.set(null);if(!file)return;if(file.size>this.selectedLimit()){this.error.set('Choose a file up to '+(this.action()==='encode'?'5 MiB.':'8 MiB of Base64 text.'));return;}this.file.set(file);}
  removeFile():void{this.invalidate();this.file.set(null);}
  size(bytes:number):string{return bytes<1024?bytes+' B':bytes<1048576?(bytes/1024).toFixed(1)+' KiB':(bytes/1048576).toFixed(2)+' MiB';}
  async convert(event?:Event):Promise<void>{
    event?.preventDefault();this.invalidate();const revision=this.revision,action=this.action(),variant=this.variant();this.busy.set(true);
    try{
      let raw:Uint8Array|undefined,text=this.input(),sourceName='Text input',sourceBytes=0;
      if(this.source()==='file'){
        const file=this.file();if(!file)throw new Error('Choose a file to convert.');if(file.size>this.selectedLimit())throw new Error('The selected file exceeds this mode’s size limit.');
        raw=new Uint8Array(await file.arrayBuffer());if(revision!==this.revision)return;sourceName=file.name;sourceBytes=file.size;if(action==='decode')text=base64FileText(raw);
      }
      let result:Base64Result;
      if(action==='encode'){
        const bytes=raw||utf8Bytes(text),encoded=bytesToBase64(bytes,variant,this.padding());
        result={action,variant,bytes,encoded,text:encoded,hasControls:false,inputBytes:bytes.length,outputBytes:encoded.length,sourceName};this.view.set('text');
      }else{
        const bytes=base64ToBytes(text,variant,this.ignoreWhitespace()),decoded=decodedText(bytes);
        result={action,variant,bytes,encoded:'',...decoded,inputBytes:raw?sourceBytes:new TextEncoder().encode(text).length,outputBytes:bytes.length,sourceName};this.view.set(decoded.text===null||decoded.hasControls?'hex':'text');
      }
      if(revision!==this.revision)return;this.result.set(result);this.notice.set(action==='encode'?'Base64 output is ready.':'Decoded bytes are ready.');
    }catch(error){if(revision===this.revision)this.error.set(error instanceof Error?error.message:'Conversion could not complete.');}
    finally{if(revision===this.revision)this.busy.set(false);}
  }
  changeView(view:'text'|'hex'):void{this.revision++;this.view.set(view);this.notice.set('');this.fallback.set('');}
  clear():void{this.invalidate();this.input.set('');this.file.set(null);}
  example():void{this.invalidate();this.source.set('text');this.file.set(null);const text='Hello, XcellHost! 👋';this.input.set(this.action()==='encode'?text:bytesToBase64(utf8Bytes(text),this.variant(),this.padding()));}
  useOutput():void{const result=this.result();if(!result)return;const text=result.action==='encode'?result.encoded:result.text;if(text===null)return;this.invalidate();this.input.set(text);this.source.set('text');this.file.set(null);this.action.set(result.action==='encode'?'decode':'encode');this.notice.set('Output moved to the '+this.action()+' input.');}
  async copy():Promise<void>{const result=this.result();if(!result)return;const value=result.action==='encode'?result.encoded:this.view()==='hex'?hexBytes(result.bytes):result.text;if(value===null)return;const revision=this.revision;try{await navigator.clipboard.writeText(value);if(revision===this.revision){this.fallback.set('');this.notice.set(this.view()==='hex'?'Hex bytes copied.':'Complete output copied.');}}catch{if(revision!==this.revision)return;this.fallback.set(value);this.notice.set('Clipboard unavailable. Select and copy the complete output below.');setTimeout(()=>{if(revision===this.revision)this.document.querySelector<HTMLTextAreaElement>('#b64-copy-fallback')?.select();},0);}}
  download():void{const result=this.result();if(!result)return;const textFile=result.action==='encode'||(result.text!==null&&!result.hasControls),data=result.action==='encode'?result.encoded:new Uint8Array(result.bytes).buffer;const url=URL.createObjectURL(new Blob([data],{type:textFile?'text/plain;charset=utf-8':'application/octet-stream'}));const link=this.document.createElement('a');link.href=url;link.download=result.action==='encode'?'encoded-base64.txt':textFile?'decoded-text.txt':'decoded-data.bin';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('Complete output download started.');}
}
