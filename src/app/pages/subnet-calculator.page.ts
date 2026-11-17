import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SubnetReport, calculateSubnet, subnetReportCsv, subnetReportText, subnetRows } from '../core/subnet-calculator';

@Component({
  selector:'xh-subnet-calculator-page',standalone:true,imports:[RouterLink],
  templateUrl:'./subnet-calculator.page.html',styleUrls:['./dns-lookup.page.css','./subnet-calculator.page.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class SubnetCalculatorPage {
  private readonly document=inject(DOCUMENT);
  private revision=0;
  readonly input=signal('192.168.1.10/24');
  readonly report=signal<SubnetReport|null>(null);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly referenceOpen=signal(false);
  readonly presets=[8,16,24,25,26,27,28,29,30,31,32];
  readonly examples=['192.168.1.10/24','10.20.30.40/16','172.16.5.130/26','192.0.2.10/31'];
  readonly activePrefix=computed(()=>{const value=this.input().trim().split('/');return value.length===2&&/^(?:0|[1-9]\d?)$/.test(value[1])?Number(value[1]):-1;});
  readonly details=computed(()=>{const report=this.report();return report?subnetRows(report).slice(0,18):[];});
  readonly reference=Array.from({length:33},(_,prefix)=>calculateSubnet('0.0.0.0/'+prefix));
  readonly features=[
    {icon:'account_tree',title:'See the complete range',text:'Find the network boundary, broadcast address and conventional host range.'},
    {icon:'calculate',title:'Understand the mask',text:'Read the subnet mask, wildcard mask and exact number of address slots.'},
    {icon:'category',title:'Classify your input',text:'Identify private-use and common special-purpose address ranges.'},
    {icon:'code',title:'Explore the binary',text:'See which of the 32 bits belong to the network and which belong to hosts.'},
  ];
  readonly related=[{id:'ipv4-converter',icon:'swap_horiz',title:'IPv4 Converter',text:'Convert IPv4 to binary, hex and decimal.'},{id:'ipv6-expand',icon:'expand',title:'IPv6 Expander',text:'Expand compressed IPv6 notation.'},{id:'ptr-lookup',icon:'manage_search',title:'PTR Lookup',text:'Check an address’s reverse DNS records.'},{id:'dns-lookup',icon:'dns',title:'DNS Lookup',text:'Look up DNS records for a domain.'}];
  readonly questions=[
    {q:'What does the CIDR prefix mean?',a:'The number after / is the count of network bits in a 32-bit IPv4 address. The remaining bits identify positions within that block. A /24 has 24 network bits and 8 host bits, giving 256 total address positions. The prefix, rather than a historical address class, determines the subnet.'},
    {q:'How many usable hosts are in a subnet?',a:'For ordinary /0 through /30 subnet arithmetic, the conventional count is 2^(32 − prefix) minus 2, excluding the network and directed-broadcast positions. A /31 is shown as two endpoint slots for an RFC 3021 point-to-point link. A /32 identifies a single address. These counts do not subtract special-purpose space or cloud-provider reservations.'},
    {q:'Why does my entered IP differ from the network address?',a:'You can enter a host address such as 192.168.1.10/24. The calculator clears the host bits to find its enclosing block, 192.168.1.0/24. The result retains your input address and identifies whether it occupies a host, network or directed-broadcast position.'},
    {q:'What is a wildcard mask?',a:'It is the bitwise inverse of the subnet mask. A /24 has subnet mask 255.255.255.0 and wildcard mask 0.0.0.255. Some routing and access-control configurations use wildcard masks. Check your device’s syntax; a wildcard mask is not interchangeable with a subnet mask.'},
    {q:'Is a /31 always a two-host LAN?',a:'No. The two-endpoint interpretation here follows RFC 3021 for point-to-point links with compatible devices. It does not automatically make a /31 suitable for a normal broadcast LAN. The result therefore labels its addresses as endpoint slots and shows no separate directed broadcast.'},
    {q:'Which addresses are private?',a:'RFC 1918 private-use blocks are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. Shared CGNAT, loopback, link-local and documentation addresses have different purposes. The input’s category and whether the entire calculated subnet fits within an RFC 1918 block are shown separately.'},
    {q:'Does this check whether an IP is available or reachable?',a:'No. It performs address arithmetic and recognizes common categories. It does not ping, query a network, reserve an address, inspect routing or check ownership. “Other IPv4 space” does not guarantee a globally reachable address. Consult the IANA registry and your network or provider policy before assigning addresses.'},
    {q:'Can I use IPv6 or a dotted subnet mask?',a:'This page accepts four decimal IPv4 octets followed by /0 through /32, such as 10.20.30.40/16. It does not accept IPv6, dotted masks after the slash, leading-zero octets or abbreviated IPv4 forms. The separate IPv6 Expander tool handles hexadecimal IPv6 notation.'},
  ];
  constructor(){inject(SeoService).set('IPv4 Subnet / CIDR Calculator | XcellHost Tools','Calculate IPv4 network ranges, subnet and wildcard masks, broadcast and host slots. Explore CIDR prefixes, common address categories and binary subnet views.','/tools/subnet-calculator');}
  format(value:number):string{return new Intl.NumberFormat('en-US').format(value);}
  private resetResult():void{this.revision++;this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  edit(event:Event):void{this.resetResult();this.input.set((event.target as HTMLInputElement).value);}
  calculate(event?:Event):void{event?.preventDefault();this.resetResult();try{this.report.set(calculateSubnet(this.input()));this.notice.set('Subnet calculated locally. No network requests were made.');}catch(error){this.error.set(error instanceof Error?error.message:'The subnet could not be calculated.');}}
  preset(prefix:number):void{const address=this.input().trim().split('/')[0]||'192.168.1.10';this.input.set(address+'/'+prefix);this.calculate();}
  example(value:string):void{this.input.set(value);this.calculate();}
  clear():void{this.resetResult();this.input.set('');}
  async copy(value?:string):Promise<void>{const report=this.report();if(!value&&!report)return;const text=value||subnetReportText(report!),revision=this.revision;try{await navigator.clipboard.writeText(text);if(revision===this.revision){this.fallback.set('');this.notice.set('Copied to your clipboard.');}}catch{if(revision!==this.revision)return;this.fallback.set(text);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#subnet-copy-fallback')?.select(),0);}}
  download(kind:'json'|'csv'):void{const report=this.report();if(!report)return;const content=kind==='csv'?subnetReportCsv(report):JSON.stringify(report,null,2);const url=URL.createObjectURL(new Blob([content],{type:kind==='csv'?'text/csv;charset=utf-8':'application/json'}));const link=this.document.createElement('a');link.href=url;link.download='subnet-'+report.network+'-'+report.prefix+'.'+kind;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set(kind.toUpperCase()+' download started.');}
}
