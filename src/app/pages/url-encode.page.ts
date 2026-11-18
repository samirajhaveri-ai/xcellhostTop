import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { URL_ENCODING_REFERENCE, URL_INPUT_LIMIT, UrlConversionReport, UrlConversionSettings, convertUrl, urlReportJson } from '../core/url-converter';

@Component({selector:'xh-url-encode-page',standalone:true,imports:[RouterLink],templateUrl:'./url-encode.page.html',styleUrls:['./dns-lookup.page.css','./url-encode.page.css'],changeDetection:ChangeDetectionStrategy.OnPush})
export class UrlEncodePage {
  private readonly document=inject(DOCUMENT);
  private revision=0;
  readonly action=signal<'encode'|'decode'>('encode');
  readonly mode=signal<'component'|'uri'>('component');
  readonly batch=signal(false);
  readonly plusAsSpace=signal(false);
  readonly input=signal('');
  readonly report=signal<UrlConversionReport|null>(null);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly copiedLine=signal<number|null>(null);
  readonly page=signal(0);
  readonly pageSize=10;
  readonly inputLimit=URL_INPUT_LIMIT;
  readonly reference=URL_ENCODING_REFERENCE;
  readonly settings=computed<UrlConversionSettings>(()=>({action:this.action(),mode:this.mode(),batch:this.batch(),plusAsSpace:this.plusAsSpace()}));
  readonly inputStats=computed(()=>({characters:Array.from(this.input()).length,bytes:new TextEncoder().encode(this.input()).length,lines:this.input().split(/\r\n|\n|\r/).length}));
  readonly preview=computed(()=>this.report()?.output.slice(0,20000)||'');
  readonly pages=computed(()=>Math.max(1,Math.ceil((this.report()?.rows.length||0)/this.pageSize)));
  readonly rows=computed(()=>this.report()?.rows.slice(this.page()*this.pageSize,(this.page()+1)*this.pageSize)||[]);
  readonly range=computed(()=>({first:this.rows()[0]?.line||0,last:this.rows().at(-1)?.line||0}));
  readonly related=[
    {id:'base64',icon:'code',title:'Base64 Encoder / Decoder',text:'Convert UTF-8 text and file bytes.'},
    {id:'jwt-decoder',icon:'data_object',title:'JWT Decoder',text:'Inspect token headers and payloads.'},
    {id:'json-formatter',icon:'data_object',title:'JSON Formatter',text:'Format and validate JSON text.'},
    {id:'hash-generator',icon:'tag',title:'Hash Generator',text:'Calculate text and file checksums.'},
  ];
  readonly features=[
    {icon:'arrow_forward',title:'Percent encoding',text:'Encode text as a component or preserve the separators of a whole URI.'},
    {icon:'arrow_back',title:'Matching decode modes',text:'Decode components fully, or preserve reserved escapes in whole-URI mode.'},
    {icon:'layers',title:'Per-line batch results',text:'Convert up to 1,000 entries and inspect individual errors.'},
    {icon:'download',title:'Copy and export',text:'Copy a result or successful batch, and save TXT or a detailed JSON report.'},
  ];
  readonly questions=[
    {q:'When should I choose component mode?',a:'Use component mode for one query parameter value or one path segment. It uses encodeURIComponent and decodeURIComponent. For example, a literal & inside a value becomes %26, so it is not interpreted as a separator between query parameters.'},
    {q:'What does whole-URI mode preserve?',a:'Whole-URI mode uses encodeURI and decodeURI. Encoding keeps separators such as :, /, ?, #, & and = so an already assembled URI retains its structure. Decoding deliberately leaves escapes for reserved URI characters in place. Use component mode when you need %2F or %3F decoded into literal characters.'},
    {q:'Why does a space become %20 instead of +?',a:'These JavaScript encoders use %20 for a space. Form/query-value formats can use + to represent a space, but a literal plus can also be meaningful. The optional + as space setting applies only when decoding a component. It converts raw + before percent decoding, so %2B remains a literal plus.'},
    {q:'Why are some punctuation characters unchanged?',a:'encodeURIComponent leaves letters, digits and - _ . ! ~ * single quote and parentheses unchanged. encodeURI additionally preserves URI delimiters. The reference table shows the actual output of each mode. If a destination needs stricter protocol-specific escaping, follow that protocol’s rules.'},
    {q:'Why does decoding fail?',a:'Each percent escape must have two hexadecimal digits, and escaped non-ASCII bytes must form valid UTF-8. Truncated escapes, invalid byte sequences and incomplete Unicode input produce errors. In batch mode, one failed row does not prevent other rows from being converted.'},
    {q:'How are blank lines and partial batches handled?',a:'Batch mode treats each line as an entry, including blank and trailing lines. CRLF, CR and LF separate entries; spaces inside an entry are preserved. Copy-all and TXT include successful results in their original order and omit failed rows. JSON preserves every input, its original line number, its output or error, and the conversion settings.'},
    {q:'Can encoding or decoding be applied repeatedly?',a:'Each conversion performs one pass. Encoding an existing %20 escapes the percent sign again as %2520. A single decode turns %2520 into %20, rather than immediately into a space. In single-entry mode, Use output as input lets you review the result before applying the opposite operation.'},
    {q:'Does this tool open the URLs or send my input anywhere?',a:'The conversion code runs locally and does not fetch destinations, navigate to the transformed values, include your input in the page URL or save it in browser storage. Output is shown as text. Text previews may be shortened for display, while copy/download use the full successful output. TXT joins results with line breaks; JSON retains embedded line breaks and error details.'},
  ];
  constructor(){inject(SeoService).set('URL Encoder / Decoder - Percent Encoding & Batch Tools | XcellHost','Encode and decode URL components or whole URIs locally. Process batches with per-line errors, handle form plus signs and export TXT or JSON results.','/tools/url-encode');inject(DestroyRef).onDestroy(()=>{this.revision++;this.input.set('');this.report.set(null);this.fallback.set('');});}
  private invalidate():void{this.revision++;this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');this.copiedLine.set(null);this.page.set(0);}
  changeAction(action:'encode'|'decode'):void{if(this.action()===action)return;this.invalidate();this.action.set(action);if(action==='encode')this.plusAsSpace.set(false);}
  changeMode(mode:'component'|'uri'):void{if(this.mode()===mode)return;this.invalidate();this.mode.set(mode);if(mode==='uri')this.plusAsSpace.set(false);}
  toggle(field:'batch'|'plusAsSpace',event:Event):void{this.invalidate();this[field].set((event.target as HTMLInputElement).checked);}
  edit(event:Event):void{this.invalidate();this.input.set((event.target as HTMLTextAreaElement).value);}
  convert(event?:Event):void{event?.preventDefault();this.invalidate();try{const report=convertUrl(this.input(),this.settings());if(!report.settings.batch&&report.failures){this.error.set(report.rows[0].error);return;}this.report.set(report);this.notice.set(report.settings.batch?report.successes+' successful, '+report.failures+' failed.':'Conversion complete.');}catch(error){this.error.set(error instanceof Error?error.message:'Conversion could not complete.');}}
  clear():void{this.invalidate();this.input.set('');}
  example():void{this.invalidate();let entries=this.mode()==='uri'?['https://example.com/search?q=hello world&lang=hi#section 1','https://example.org/नमस्ते?name=A B']:['Hello, XcellHost! 👋 & café','coffee & tea / 50%','नमस्ते 🌍'];if(!this.batch())entries=entries.slice(0,1);if(this.action()==='decode')entries=entries.map(value=>convertUrl(value,{...this.settings(),action:'encode',batch:false}).output);this.input.set(entries.join('\n'));}
  navigate(page:number):void{this.page.set(Math.min(this.pages()-1,Math.max(0,page)));}
  short(value:string):string{return value.length>500?value.slice(0,500)+'…':value;}
  size(bytes:number):string{return bytes<1024?bytes+' B':bytes<1048576?(bytes/1024).toFixed(1)+' KiB':(bytes/1048576).toFixed(2)+' MiB';}
  useOutput():void{const report=this.report();if(!report||report.settings.batch||!report.successes)return;const value=report.output;this.invalidate();this.input.set(value);this.action.set(report.settings.action==='encode'?'decode':'encode');this.notice.set('Output moved to the '+this.action()+' input.');}
  async copy(line?:number):Promise<void>{const report=this.report();if(!report)return;const row=line===undefined?null:report.rows.find(item=>item.line===line);const value=line===undefined?(report.successes?report.output:null):row?.output;if(value===undefined||value===null)return;const revision=this.revision;try{await navigator.clipboard.writeText(value);if(revision===this.revision){this.fallback.set('');this.copiedLine.set(line??null);this.notice.set(line!==undefined?'Line '+line+' copied.':report.failures?report.successes+' successful results copied; failed rows omitted.':'Complete output copied.');}}catch{if(revision!==this.revision)return;this.fallback.set(value);this.notice.set('Clipboard unavailable. Select and copy the complete text below.');setTimeout(()=>{if(revision===this.revision)this.document.querySelector<HTMLTextAreaElement>('#url-copy-fallback')?.select();},0);}}
  download(type:'txt'|'json'):void{const report=this.report();if(!report||type==='txt'&&!report.successes)return;const value=type==='json'?urlReportJson(report):report.output;const url=URL.createObjectURL(new Blob([value],{type:type==='json'?'application/json':'text/plain;charset=utf-8'}));const link=this.document.createElement('a');link.href=url;link.download='url-'+report.settings.action+(report.settings.batch?'-batch':'')+'.'+type;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set(type.toUpperCase()+' download started.');}
}
