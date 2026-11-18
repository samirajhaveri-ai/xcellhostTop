import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { Ipv6AddressReport, Ipv6Probe, Ipv6ReadinessReport, expandIpv6, ipv6Checks, ipv6ReportText, normalizeIpv6Domain } from '../core/ipv6-tools';

@Component({selector:'xh-ipv6-expand-page',standalone:true,imports:[RouterLink],templateUrl:'./ipv6-expand.page.html',styleUrls:['./dns-lookup.page.css','./ipv6-expand.page.css'],changeDetection:ChangeDetectionStrategy.OnPush})
export class Ipv6ExpandPage {
  private readonly document=inject(DOCUMENT);
  private controller:AbortController|null=null;
  private revision=0;
  readonly mode=signal<'readiness'|'expand'>('readiness');
  readonly domain=signal('');
  readonly includeMail=signal(true);
  readonly busy=signal(false);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly report=signal<Ipv6ReadinessReport|null>(null);
  readonly address=signal('');
  readonly addressReport=signal<Ipv6AddressReport|null>(null);
  readonly checks=computed(()=>this.report()?ipv6Checks(this.report()!):[]);
  readonly passed=computed(()=>this.checks().filter(c=>c.state==='PASS').length);
  readonly unknown=computed(()=>this.checks().filter(c=>c.state==='UNKNOWN').length);
  readonly review=computed(()=>this.checks().filter(c=>c.state==='FAIL').length);
  readonly dnsRows=computed(()=>{const r=this.report();return r?[r.dns.a,r.dns.aaaa,r.dns.ns,...(r.dns.mx?[r.dns.mx]:[])]:[];});
  readonly addressRows=computed(()=>{const r=this.addressReport();return r?[
    {label:'Expanded (eight groups)',value:r.expanded},{label:'Compressed hexadecimal',value:r.compressed},{label:'Common address category',value:r.kind},
    {label:'128-bit hexadecimal',value:r.hex},{label:'Unsigned decimal',value:r.decimal},{label:'Reverse DNS name',value:r.reverseName},
    ...(r.embeddedIpv4?[{label:'Mapped IPv4 address',value:r.embeddedIpv4}]:[]),
  ]:[];});
  readonly websiteRows=computed(()=>{const r=this.report();return r?[{label:'IPv4 · HTTPS / 443',probe:r.website.ipv4},{label:'IPv6 · HTTPS / 443',probe:r.website.ipv6},{label:'IPv6 · HTTP / 80',probe:r.website.http6}]:[];});
  readonly related=[{id:'dns-lookup',title:'DNS Lookup',icon:'dns',text:'Inspect A, AAAA and other DNS records.'},{id:'ns-lookup',title:'NS Lookup',icon:'account_tree',text:'Inspect published nameserver records.'},{id:'mx-lookup',title:'MX Lookup',icon:'mail',text:'Inspect mail hosts and their addresses.'},{id:'ptr-lookup',title:'PTR Lookup',icon:'manage_search',text:'Look up reverse DNS and forward confirmation.'},{id:'subnet-calculator',title:'Subnet Calculator',icon:'calculate',text:'Calculate IPv4 network and address ranges.'},{id:'ipv4-converter',title:'IPv4 Converter',icon:'swap_horiz',text:'View binary, hex and decimal IPv4 values.'}];
  readonly features=[{icon:'language',title:'Probe the web listener',text:'Test the initial HTTP and HTTPS responses on a pinned public IPv6 address.'},{icon:'verified_user',title:'Validate IPv6 TLS',text:'Check the certificate chain and hostname on the IPv6 HTTPS connection.'},{icon:'compare_arrows',title:'Compare protocol responses',text:'Compare initial HTTPS status and Location headers for IPv4 and IPv6.'},{icon:'account_tree',title:'Query authoritative DNS',text:'Send a direct IPv6 UDP/53 SOA query to sampled nameservers.'},{icon:'mail',title:'Read the mail greeting',text:'Read a bounded SMTP greeting and inspect reverse/forward DNS without sending email.'},{icon:'code',title:'Expand an IPv6 address',text:'Convert compressed notation to eight groups, binary, decimal and a reverse DNS name locally.'}];
  readonly questions=[
    {q:'Does an AAAA record prove IPv6 service availability?',a:'No. It publishes an address, while a usable service also needs routing, a listener, firewall access and appropriate application configuration. The report separates DNS publication from the observed IPv6 transport and TLS results.'},
    {q:'Where do the live connection checks run?',a:'They run on the server hosting this tool, using public pinned addresses. They do not measure your browser’s own IPv6 path. A failed baseline means this runner could not establish IPv6 connectivity; target connection tests are then unverified rather than reported as domain failures.'},
    {q:'What exactly is compared between IPv4 and IPv6?',a:'The initial HTTPS response status and Location header at the domain’s root path are compared. Redirects are not followed and page bodies are not compared. Matching headers do not guarantee identical application behavior, content or availability at every returned address.'},
    {q:'What do the nameserver checks cover?',a:'The tool discovers NS records, with bounded parent-zone discovery where needed, and samples up to three unique nameservers. For the first permitted public IPv6 address of each, it sends a non-recursive SOA query over UDP/53 and checks the response. DNS-over-TCP, full DNSSEC validation and every address are outside this snapshot.'},
    {q:'Do the mail checks send a message?',a:'No SMTP commands or email are sent. Up to two mail hosts are sampled by preference. The connection reads one greeting from IPv6 TCP/25, then closes. PTR and forward AAAA records are checked for the selected address. Port 25 may be blocked by the testing server’s network. A valid Null MX declaration means receiving mail is not applicable.'},
    {q:'Why are some checks unverified?',a:'The runner may lack IPv6 connectivity, a request can time out, a DNS lookup can fail, or the shared deadline can be reached. An unverified check is not a pass and does not by itself identify a target configuration problem. The report states what was observed and includes the sampling limits.'},
    {q:'What does the address expander accept?',a:'Compressed or full IPv6 text, optional enclosing brackets, and valid embedded IPv4 tails are supported. Zone IDs, CIDR prefixes and bracketed port suffixes are not. The formatter uses lowercase hexadecimal, removes leading zeros and compresses the longest eligible zero run, choosing the first in a tie.'},
    {q:'Is address formatting an availability check?',a:'No. Expanding, compressing or classifying an address is local arithmetic. It makes no network requests and does not establish ownership, routing or reachability. IPv4-mapped addresses are shown in hexadecimal form with their mapped IPv4 tail listed separately.'},
  ];
  constructor(){inject(SeoService).set('IPv6 Readiness Test & Address Expander | XcellHost Tools','Test a domain’s IPv6 website, TLS, DNS and mail endpoints with explicit scope and runner limitations, or expand and inspect an IPv6 address locally.','/tools/ipv6-expand');inject(DestroyRef).onDestroy(()=>this.controller?.abort());}
  private reset():void{this.revision++;this.controller?.abort();this.controller=null;this.busy.set(false);this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  setMode(mode:'readiness'|'expand'):void{if(this.busy())this.reset();this.mode.set(mode);this.error.set('');this.notice.set('');this.fallback.set('');}
  editDomain(event:Event):void{this.reset();this.domain.set((event.target as HTMLInputElement).value);}
  toggleMail(event:Event):void{this.reset();this.includeMail.set((event.target as HTMLInputElement).checked);}
  example(domain:string):void{this.reset();this.domain.set(domain);}
  async test(event?:Event):Promise<void>{event?.preventDefault();this.reset();const revision=this.revision,controller=new AbortController();this.controller=controller;this.busy.set(true);
    try{const domain=normalizeIpv6Domain(this.domain());const response=await fetch('/api/ipv6-readiness.php',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer',body:JSON.stringify({domain,includeMail:this.includeMail()}),signal:AbortSignal.any([controller.signal,AbortSignal.timeout(45000)])});let data:any;try{data=await response.json();}catch{throw new Error('The IPv6 service did not return JSON. Restart the development server to load its endpoint configuration.');}if(!response.ok||data.error)throw new Error(typeof data.error==='string'?data.error:'The check could not complete.');if(typeof data.domain!=='string'||typeof data.runner?.available!=='boolean'||!Array.isArray(data.nameservers)||!Array.isArray(data.mail?.hosts)||!Array.isArray(data.dns?.aaaa?.records)||!data.website?.ipv6||!Array.isArray(data.notes))throw new Error('The IPv6 service returned an invalid snapshot.');if(revision!==this.revision)return;this.report.set(data);this.notice.set('Snapshot complete. Review individual observations and the runner’s IPv6 capability.');}
    catch(error){if(revision===this.revision&&!controller.signal.aborted)this.error.set(error instanceof Error?error.message:'The IPv6 test failed.');}finally{if(revision===this.revision){this.busy.set(false);this.controller=null;}}
  }
  editAddress(event:Event):void{this.revision++;this.address.set((event.target as HTMLInputElement).value);this.addressReport.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  addressExample(value:string):void{this.address.set(value);this.expand();}
  expand(event?:Event):void{event?.preventDefault();this.revision++;this.addressReport.set(null);this.error.set('');this.notice.set('');this.fallback.set('');try{this.addressReport.set(expandIpv6(this.address()));this.notice.set('Address formatted locally. No network requests were made.');}catch(error){this.error.set(error instanceof Error?error.message:'The address could not be expanded.');}}
  clear():void{this.reset();this.domain.set('');this.address.set('');this.addressReport.set(null);}
  label(probe:Ipv6Probe):string{return probe.state==='PASS'?'Observed pass':probe.state==='FAIL'?'Review result':probe.state==='INFO'?'Not applicable':'Unverified';}
  dnsType(type:number):string{return ({1:'A',28:'AAAA',2:'NS',15:'MX',5:'CNAME',12:'PTR'} as Record<number,string>)[type]||String(type);}
  icon(state:string):string{return state==='PASS'?'check_circle':state==='FAIL'?'cancel':state==='INFO'?'info':'help';}
  async copy(text?:string):Promise<void>{const content=text||(this.mode()==='readiness'&&this.report()?ipv6ReportText(this.report()!):this.addressReport()?this.addressRows().map(row=>row.label+': '+row.value).join('\n'):'');if(!content)return;const revision=this.revision;try{await navigator.clipboard.writeText(content);if(revision===this.revision){this.fallback.set('');this.notice.set('Copied to your clipboard.');}}catch{if(revision!==this.revision)return;this.fallback.set(content);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#ipv6-copy-fallback')?.select(),0);}}
  download():void{const data=this.mode()==='readiness'?this.report():this.addressReport();if(!data)return;const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const link=this.document.createElement('a');link.href=url;link.download=this.mode()==='readiness'?'ipv6-readiness.json':'ipv6-address.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('JSON download started.');}
}
