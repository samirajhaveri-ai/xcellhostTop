import { DatePipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SPF_PROVIDERS, SpfGeneratorInput, generateSpfPolicy, parseSpfGeneratorSettings, spfGeneratorCsv, spfGeneratorShareUrl, splitSpfList } from '../core/spf-generator';

@Component({ selector: 'xh-spf-generator-page', standalone: true, imports: [RouterLink,DatePipe,JsonPipe], templateUrl: './spf-generator.page.html', styleUrls: ['./dns-lookup.page.css','./spf-lookup.page.css','./spf-generator.page.css'], changeDetection: ChangeDetectionStrategy.OnPush })
export class SpfGeneratorPage {
  private readonly document = inject(DOCUMENT);
  readonly providers = SPF_PROVIDERS;
  readonly stages = [{name:'Domain Setup',icon:'language'}, {name:'Local Servers',icon:'dns'}, {name:'Email Services',icon:'mail'}, {name:'IP Addresses',icon:'lan'}, {name:'Policy',icon:'policy'}];
  readonly stage = signal(0);
  readonly domain = signal(''); readonly a = signal(false); readonly mx = signal(false);
  readonly selectedProviders = signal<string[]>([]); readonly includes = signal(''); readonly ipv4 = signal(''); readonly ipv6 = signal('');
  readonly policy = signal<SpfGeneratorInput['policy']>('~all'); readonly ttl = signal('3600');
  readonly validation = computed(() => { try { return { policy: generateSpfPolicy(this.settings()), error:'' }; } catch (error) { return { policy:null, error:error instanceof Error?error.message:'Review your SPF settings.' }; } });
  readonly result = computed(() => this.validation().policy);
  readonly reviewed = signal(false); readonly error = signal(''); readonly copyMessage = signal('');
  readonly view = signal<'record'|'zone'|'json'>('record'); readonly exportOpen = signal(false); readonly exporting = signal<'zone'|'pdf'|'csv'|'json'|null>(null); readonly sharing = signal(false); readonly shareLink = signal('');
  readonly related = [
    {id:'spf-lookup',icon:'search',title:'SPF Lookup',text:'Inspect the published policy and static include dependencies.'},
    {id:'dkim-lookup',icon:'key',title:'DKIM Lookup',text:'Inspect selector records and public keys.'},
    {id:'dmarc-generator',icon:'policy',title:'DMARC Generator',text:'Prepare alignment and reporting preferences.'},
    {id:'email-dns-health',icon:'fact_check',title:'Email DNS Health',text:'Review authentication DNS and mail routing together.'},
  ];
  readonly questions = [
    {q:'Does generating a record change my DNS?',a:'No. The record is built locally in your browser. Copy the TXT value or download the zone-file snippet, then publish it through your DNS provider. No DNS query, publishing action, email transmission or sender authentication occurs here.'},
    {q:'Where should the SPF record be published?',a:'Publish at the exact domain used by your envelope sender (MAIL FROM), which may differ from the visible From domain. Provider interfaces may use @ for an apex owner or a relative subdomain. Follow your provider instructions, especially for managed return-path subdomains and CNAME-based authentication.'},
    {q:'Can a domain have more than one SPF policy?',a:'Publish one applicable v=spf1 TXT record per owner name. Combine legitimate senders into that policy rather than adding another SPF record. Other unrelated TXT records can coexist. Multiple quoted strings within one TXT record are joined without spaces and are not separate SPF policies.'},
    {q:'Should I enable a and mx?',a:'Only if those addresses actually send mail for your envelope-sender domain. The a mechanism can authorize a website host, and mx authorizes addresses of inbound mail servers. Neither is automatically needed when using a hosted provider.'},
    {q:'How do softfail, fail and neutral differ?',a:'~all requests SPF softfail, -all returns fail and ?all returns neutral when no earlier mechanism matches. Those are authentication results, not commands that force a receiver to accept or reject a message. Inventory every legitimate sender before choosing a restrictive policy.'},
    {q:'Is the direct DNS-term count the SPF ten-lookup limit?',a:'No. It counts only a, mx and include terms in the generated text. Nested policies and evaluation paths can add cost, while IP literals do not consume a DNS-querying term. SPF limits the number of evaluated DNS-querying terms; receiver processing has additional sub-limits. Use the lookup tool and a sender-aware evaluator before publishing complex policies.'},
    {q:'Why were my IP ranges or TXT strings changed?',a:'CIDR host bits are converted to their network base without changing the authorized range, and equivalent IP entries are deduplicated. Zone-file TXT values longer than 255 bytes are split into quoted strings that concatenate exactly. Splitting strings does not reduce total DNS response size or lookup cost.'},
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    if (params.has('config')) try { this.apply(parseSpfGeneratorSettings(params.get('config')!)); } catch(error) { this.error.set(error instanceof Error?error.message:'Shared configuration could not be loaded.'); }
    else this.domain.set((params.get('domain')||'').slice(0,253));
    inject(SeoService).set('SPF Record Generator - Sender Policy Builder | XcellHost','Build an SPF TXT record in five steps with provider includes, IPv4/IPv6 networks, local-server permissions and downloadable publication files.','/tools/spf-generator');
  }
  private settings(): SpfGeneratorInput { return {domain:this.domain(),a:this.a(),mx:this.mx(),providers:this.selectedProviders(),includes:splitSpfList(this.includes()),ipv4:splitSpfList(this.ipv4()),ipv6:splitSpfList(this.ipv6()),policy:this.policy(),ttl:this.ttl()}; }
  private changed(): void { this.error.set('');this.reviewed.set(false);this.copyMessage.set('');this.shareLink.set('');this.exportOpen.set(false); }
  private apply(input: SpfGeneratorInput): void { this.domain.set(input.domain);this.a.set(input.a);this.mx.set(input.mx);this.selectedProviders.set(input.providers);this.includes.set(input.includes.join('\n'));this.ipv4.set(input.ipv4.join('\n'));this.ipv6.set(input.ipv6.join('\n'));this.policy.set(input.policy);this.ttl.set(input.ttl); }
  edit(field:'domain'|'includes'|'ipv4'|'ipv6'|'ttl',event:Event):void { this.changed();this[field].set((event.target as HTMLInputElement).value); }
  local(field:'a'|'mx',event:Event):void { this.changed();this[field].set((event.target as HTMLInputElement).checked); }
  choosePolicy(event:Event):void { this.changed();const value=(event.target as HTMLSelectElement).value;if(['~all','-all','?all'].includes(value))this.policy.set(value as SpfGeneratorInput['policy']); }
  toggleProvider(id:string):void { this.changed();this.selectedProviders.update(values=>values.includes(id)?values.filter(value=>value!==id):[...values,id]); }
  navigate(stage:number):void { this.error.set('');this.stage.set(Math.max(0,Math.min(4,stage))); }
  next():void { if(!this.result()){this.error.set(this.validation().error);return;}this.navigate(this.stage()+1); }
  finish(event?:Event):void { event?.preventDefault();if(!this.result()){this.error.set(this.validation().error);return;}this.reviewed.set(true);setTimeout(()=>this.document.querySelector('#spf-generated-record')?.scrollIntoView({behavior:'smooth',block:'start'})); }
  reset():void { this.changed();this.apply({domain:'',a:false,mx:false,providers:[],includes:[],ipv4:[],ipv6:[],policy:'~all',ttl:'3600'});this.stage.set(0); }
  nonSending():void { this.changed();this.a.set(false);this.mx.set(false);this.selectedProviders.set([]);this.includes.set('');this.ipv4.set('');this.ipv6.set('');this.policy.set('-all'); }
  async copy(zone=false):Promise<void> { const result=this.result();if(!result)return;try{await navigator.clipboard.writeText(zone?result.zoneFile:result.record);this.copyMessage.set(zone?'Zone-file snippet copied':'TXT value copied without quotes');}catch{this.copyMessage.set('Copy is unavailable. Select the record text or download a file.');} }
  async share():Promise<void> { const result=this.result();if(!result||this.sharing())return;this.sharing.set(true);this.copyMessage.set('');try{const url=spfGeneratorShareUrl(this.document.location.href,result.settings);if(navigator.share)try{await navigator.share({title:result.domain+' SPF configuration',text:'Generated SPF settings; not published or tested.',url});return;}catch(error){if(error instanceof DOMException&&error.name==='AbortError')return;}try{await navigator.clipboard.writeText(url);this.copyMessage.set('Configuration link copied');}catch{this.shareLink.set(url);this.copyMessage.set('Copy this link to share the configuration.');}}catch(error){this.copyMessage.set(error instanceof Error?error.message:'Could not create a share link.');}finally{this.sharing.set(false);} }
  toggleExport(event:MouseEvent):void {this.exportOpen.update(open=>!open);if(this.exportOpen()&&event.detail===0)this.focusExportItem();}
  openExport(event:Event):void {event.preventDefault();this.exportOpen.set(true);this.focusExportItem();}
  private focusExportItem():void {setTimeout(()=>this.document.querySelector<HTMLButtonElement>('.dns-export-options button')?.focus());}
  exportKeydown(event:KeyboardEvent):void {if(event.key==='Escape'){event.preventDefault();this.exportOpen.set(false);this.document.querySelector<HTMLButtonElement>('.dns-export-trigger')?.focus();return;}if(event.key==='Tab'){this.exportOpen.set(false);return;}if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;event.preventDefault();const items=[...this.document.querySelectorAll<HTMLButtonElement>('.dns-export-options button')],index=items.indexOf(this.document.activeElement as HTMLButtonElement);items[event.key==='Home'?0:event.key==='End'?items.length-1:(index+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();}
  @HostListener('document:click',['$event']) outsideExport(event:Event):void {if(!(event.target instanceof Element)||!event.target.closest('.dns-export-menu'))this.exportOpen.set(false);}
  @HostListener('document:keydown.escape') closeExport():void {this.exportOpen.set(false);}
  async export(format:'zone'|'pdf'|'csv'|'json'):Promise<void> {const result=this.result();if(!result||this.exporting())return;this.exportOpen.set(false);this.exporting.set(format);try{let content:BlobPart,mime:string;if(format==='pdf'){const{spfGeneratorPdf}=await import('../core/spf-generator-pdf');content=spfGeneratorPdf(result);mime='application/pdf';}else if(format==='csv'){content=spfGeneratorCsv(result);mime='text/csv;charset=utf-8';}else if(format==='zone'){content='; Generated SPF configuration. Not published or queried.\n'+result.zoneFile;mime='text/plain;charset=utf-8';}else{content=JSON.stringify(result,null,2);mime='application/json';}const url=URL.createObjectURL(new Blob([content],{type:mime})),link=this.document.createElement('a');link.href=url;link.download=result.domain+'-spf-configuration.'+format;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.copyMessage.set((format==='zone'?'Zone file':format.toUpperCase())+' download started');}catch{this.copyMessage.set('The download could not be created. Please try again.');}finally{this.exporting.set(null);} }
}
