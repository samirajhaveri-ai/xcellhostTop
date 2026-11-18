import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { InspectedUrl, inspectWebUrl, inspectedUrlRows, inspectedUrlText } from '../core/url-inspector';
import { WebToolsNavigationComponent } from './web-tools-navigation.component';

@Component({
  selector:'xh-url-inspector-page', standalone:true, imports:[RouterLink, WebToolsNavigationComponent],
  templateUrl:'./url-inspector.page.html',styleUrls:['./dns-lookup.page.css','./url-inspector.page.css','./web-tools.page.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class UrlInspectorPage {
  private readonly document=inject(DOCUMENT);
  private revision=0;
  readonly input=signal('');
  readonly report=signal<InspectedUrl|null>(null);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly rows=computed(()=>{const report=this.report();return report?inspectedUrlRows(report):[];});
  readonly queryRows=computed(()=>this.report()?.parameters.slice(0,200)||[]);
  readonly pathRows=computed(()=>this.report()?.segments.slice(0,100)||[]);
  readonly examples=[
    {name:'Query parameters',url:'https://example.com/products/cloud?region=Mumbai&tag=security&tag=backup#plans'},
    {name:'Encoded path',url:'https://example.com/guides/cloud%20security?search=hello+world&literal=%2B'},
    {name:'Local URL',url:'http://localhost:4200/tools/url-inspector?mode=inspect'},
  ];
  readonly related=[{id:'robots-generator',title:'Robots.txt Generator',text:'Test crawler rules and build a robots file.',icon:'smart_toy'},{id:'open-graph-generator',title:'Open Graph Generator',text:'Inspect link previews and generate metadata.',icon:'share'},{id:'dns-lookup',title:'DNS Lookup',text:'Look up DNS records for a domain.',icon:'dns'},{id:'subnet-calculator',title:'Subnet Calculator',text:'Inspect IPv4 network ranges and masks.',icon:'account_tree'}];
  readonly questions=[
    {q:'Does inspecting a URL visit the website?',a:'No. This page parses the supplied HTTP(S) URL locally using the browser URL API. It does not fetch the destination, execute its scripts or perform a DNS lookup. Local hosts and IP-literal URLs can therefore be inspected without contacting those addresses.'},
    {q:'Why is the normalized URL different from my input?',a:'Browser URL rules normalize values such as hostname case, default ports, encoded characters and dot segments. For example, https://EXAMPLE.com:443/a/../b becomes https://example.com/b. If username/password user info is present, this report also removes those values from its displayed normalized URL and exports.'},
    {q:'Why do repeated query keys appear on separate rows?',a:'A URL can contain the same query key more than once, such as tag=cloud&tag=security. The table and JSON report preserve each entry and its order instead of turning the query into an object that loses duplicates. The interface displays the first 200 rows; exports retain all entries within the input limit.'},
    {q:'Why does a plus sign become a space in the query table?',a:'URLSearchParams follows form-style query decoding: a literal + becomes a space, while %2B becomes a plus sign. The raw query is retained in the component breakdown so you can compare the encoded source with the decoded parameters.'},
    {q:'Is the fragment sent in an HTTP request?',a:'The #fragment is separate from the path and query. It is not included in the HTTP request target. Browsers and client-side applications can use it for in-page locations or application state, so the inspector shows it separately.'},
    {q:'What do hostname and host mean?',a:'Hostname is the hostname or IP literal without its port; host also includes a non-default port when present. The origin combines scheme, host and port. Internationalized hostnames use the URL API’s ASCII representation, and IPv6 literals retain square brackets.'},
    {q:'Can this tell whether a link is safe?',a:'Parsing shows the URL’s structure, not the destination’s reputation or behavior. This tool does not check redirects, ownership, certificates, response status or page content. Use the displayed hostname and components to understand what you entered; no safety grade is assigned.'},
    {q:'What is included when I copy or download a report?',a:'The report includes normalized URL components, decoded query entries and parsing notes. Embedded username/password user-info values are omitted. Query and fragment values are retained, so review those before sharing an export. Reports are generated locally and are not saved by this tool.'},
  ];
  constructor(){inject(SeoService).set('URL Inspector | XcellHost Web Tools','Inspect HTTP(S) URL components, paths, query parameters and fragments locally. Preserve repeated query keys, review encoded values and export your report.','/tools/url-inspector');}
  private reset():void{this.revision++;this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  edit(event:Event):void{this.reset();this.input.set((event.target as HTMLInputElement).value);}
  inspect(event?:Event):void{event?.preventDefault();this.reset();try{this.report.set(inspectWebUrl(this.input()));this.notice.set('URL inspected locally. The destination was not requested.');}catch(error){this.error.set(error instanceof Error?error.message:'The URL could not be inspected.');}}
  example(url:string):void{this.input.set(url);this.inspect();}
  clear():void{this.reset();this.input.set('');}
  async copy(value?:string):Promise<void>{const report=this.report();if(!value&&!report)return;const text=value||inspectedUrlText(report!),revision=this.revision;try{await navigator.clipboard.writeText(text);if(revision===this.revision){this.fallback.set('');this.notice.set('Copied to your clipboard.');}}catch{if(revision!==this.revision)return;this.fallback.set(text);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#url-copy-fallback')?.select(),0);}}
  download():void{const report=this.report();if(!report)return;const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json'}));const link=this.document.createElement('a');link.href=url;link.download='url-inspection.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('JSON report download started.');}
}
