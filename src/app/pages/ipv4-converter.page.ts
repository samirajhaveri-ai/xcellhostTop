import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { IPV4_INPUT_FORMATS, Ipv4Conversion, Ipv4InputFormat, convertIpv4, ipv4ConversionCsv, ipv4ConversionRows, ipv4ConversionText, ipv4InputValue } from '../core/ipv4-converter';

@Component({selector:'xh-ipv4-converter-page',standalone:true,imports:[RouterLink],templateUrl:'./ipv4-converter.page.html',styleUrls:['./dns-lookup.page.css','./ipv4-converter.page.css'],changeDetection:ChangeDetectionStrategy.OnPush})
export class Ipv4ConverterPage {
  private readonly document=inject(DOCUMENT);
  private revision=0;
  readonly formats=IPV4_INPUT_FORMATS;
  readonly format=signal<Ipv4InputFormat>('ipv4');
  readonly input=signal('192.168.1.1');
  readonly report=signal<Ipv4Conversion|null>(null);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly activeFormat=computed(()=>this.formats.find(f=>f.id===this.format())!);
  readonly rows=computed(()=>this.report()?ipv4ConversionRows(this.report()!):[]);
  readonly outputs=computed(()=>{const r=this.report();return r?this.formats.map(f=>({format:f.id,label:f.name,value:ipv4InputValue(r,f.id)})):[];});
  readonly examples=['192.168.1.1','8.8.8.8','127.0.0.1','255.255.255.255'];
  readonly related=[{id:'subnet-calculator',icon:'account_tree',title:'Subnet Calculator',text:'Find network ranges, masks and host slots.'},{id:'ipv6-expand',icon:'hub',title:'IPv6 Test & Expander',text:'Test a domain or inspect an IPv6 address.'},{id:'ptr-lookup',icon:'manage_search',title:'PTR Lookup',text:'Look up reverse DNS for an IP address.'},{id:'dns-lookup',icon:'dns',title:'DNS Lookup',text:'Inspect public DNS records for a domain.'}];
  readonly features=[{icon:'swap_horiz',title:'Convert in both directions',text:'Start with dotted IPv4, unsigned decimal, binary or hexadecimal.'},{icon:'grid_view',title:'Inspect each byte',text:'Compare the decimal, binary and hexadecimal values of all four octets.'},{icon:'calculate',title:'Understand the number',text:'See how each byte contributes to the full unsigned 32-bit integer.'},{icon:'download',title:'Copy and export',text:'Copy individual values or download a complete CSV or JSON report.'}];
  readonly questions=[
    {q:'How is an IPv4 address stored as a number?',a:'An IPv4 address has four 8-bit octets, for a total of 32 bits. This converter uses network byte order, with the first octet most significant. For a.b.c.d, the unsigned decimal value is a × 256³ + b × 256² + c × 256 + d.'},
    {q:'What input formats are supported?',a:'Choose dotted IPv4, unsigned decimal, binary or hexadecimal. Binary accepts up to 32 contiguous bits with an optional 0b prefix, or four 8-bit groups separated by dots or spaces. Hexadecimal accepts one to eight digits with an optional 0x prefix, or four 2-digit bytes separated consistently by colons or dots.'},
    {q:'Why does an address sometimes appear as a negative number in other software?',a:'Some programs display the same 32 bits as a signed integer. Values with the top bit set then appear negative. IPv4 conversion here uses an unsigned integer from 0 through 4294967295, so 255.255.255.255 becomes 4294967295.'},
    {q:'Are leading zeros accepted?',a:'Dotted decimal octets must not have leading zeros, avoiding ambiguity with legacy octal address forms. In explicit binary and hexadecimal modes, leading zeros are normal padding. Output always contains 32 binary bits and eight hexadecimal digits.'},
    {q:'What does the address category tell me?',a:'The tool identifies RFC 1918 private-use space and several common special-purpose ranges. It does not check ownership, live allocation, routing or availability. “Other IPv4 space” is a neutral fallback, not a guarantee that an address is publicly reachable.'},
    {q:'What is the reverse DNS name?',a:'IPv4 reverse DNS reverses the four decimal octets and appends in-addr.arpa. For 192.0.2.1 the name is 1.2.0.192.in-addr.arpa. The converter constructs that name locally; use the separate PTR Lookup tool to query it.'},
    {q:'Does an IPv4-mapped IPv6 representation enable IPv6 connectivity?',a:'No. The ::ffff:a.b.c.d representation identifies an IPv4 address within the IPv4-mapped IPv6 format used by software. Formatting an address this way does not assign a native IPv6 address, create a route or test a connection.'},
    {q:'Is anything sent to a server?',a:'Conversion, classification, copying and report generation run locally in your browser. The converter does not query DNS, ping an address or contact the entered host. Input and results are not saved by this tool.'},
  ];
  constructor(){inject(SeoService).set('IPv4 Converter - Binary, Hex & Decimal | XcellHost Tools','Convert IPv4 addresses between dotted decimal, unsigned integers, binary and hexadecimal. Inspect octets, address categories and reverse DNS names, then copy or export results.','/tools/ipv4-converter');}
  private reset():void{this.revision++;this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  edit(event:Event):void{this.reset();this.input.set((event.target as HTMLInputElement).value);}
  changeFormat(event:Event):void{
    const format=(event.target as HTMLSelectElement).value as Ipv4InputFormat;if(!this.formats.some(f=>f.id===format))return;
    let current=this.report();if(!current){try{current=convertIpv4(this.input(),this.format());}catch{}}
    this.reset();this.format.set(format);if(current){this.input.set(ipv4InputValue(current,format));this.convert();}
  }
  convert(event?:Event):void{event?.preventDefault();this.reset();try{this.report.set(convertIpv4(this.input(),this.format()));this.notice.set('Conversion complete. No network requests were made.');}catch(error){this.error.set(error instanceof Error?error.message:'The value could not be converted.');}}
  example(address:string):void{this.input.set(ipv4InputValue(convertIpv4(address,'ipv4'),this.format()));this.convert();}
  useOutput(format:Ipv4InputFormat):void{const report=this.report();if(!report)return;this.format.set(format);this.input.set(ipv4InputValue(report,format));this.convert();}
  clear():void{this.reset();this.input.set('');}
  number(value:number):string{return new Intl.NumberFormat('en-US').format(value);}
  async copy(value?:string):Promise<void>{const r=this.report();if(!value&&!r)return;const text=value||ipv4ConversionText(r!),revision=this.revision;try{await navigator.clipboard.writeText(text);if(revision===this.revision){this.fallback.set('');this.notice.set('Copied to your clipboard.');}}catch{if(revision!==this.revision)return;this.fallback.set(text);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#ipv4-copy-fallback')?.select(),0);}}
  download(format:'json'|'csv'):void{const r=this.report();if(!r)return;const content=format==='json'?JSON.stringify(r,null,2):ipv4ConversionCsv(r);const url=URL.createObjectURL(new Blob([content],{type:format==='json'?'application/json':'text/csv;charset=utf-8'}));const link=this.document.createElement('a');link.href=url;link.download='ipv4-'+r.address+'.'+format;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set(format.toUpperCase()+' download started.');}
}
