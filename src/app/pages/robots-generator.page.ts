import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebToolsNavigationComponent } from './web-tools-navigation.component';
import { SeoService } from '../core/seo.service';
import { ROBOTS_CRAWLERS, ROBOTS_SAMPLE, RobotsDecision, RobotsDocument, RobotsFetchResult, generateRobots, parseRobots, robotsHttpMeaning, robotsOrigin, robotsPath, testRobots } from '../core/robots-tool';
interface RobotsReport { source: 'live' | 'paste'; origin: string; path: string; crawler: string; checkedAt: string; state: 'rules' | 'no-file' | 'unavailable'; document: RobotsDocument | null; decision: RobotsDecision | null; fetch: RobotsFetchResult | null; }
@Component({
  selector: 'xh-robots-generator-page', standalone: true, imports: [RouterLink, WebToolsNavigationComponent],
  templateUrl: './robots-generator.page.html', styleUrls: ['./dns-lookup.page.css','./robots-generator.page.css','./web-tools.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RobotsGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private controller: AbortController | null = null;
  private revision = 0;
  readonly mode = signal<'test' | 'build'>('test');
  readonly source = signal<'live' | 'paste'>('live');
  readonly site = signal('');
  readonly path = signal('');
  readonly crawler = signal('Googlebot');
  readonly customCrawler = signal('');
  readonly crawlers = ROBOTS_CRAWLERS;
  readonly draft = signal('');
  readonly checkSitemaps = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly report = signal<RobotsReport | null>(null);
  readonly builderAgent = signal('*');
  readonly builderAllow = signal('/private/public/');
  readonly builderDisallow = signal('/admin/\n/private/');
  readonly builderSitemap = signal('');
  readonly builder = computed(() => { try { return {text:generateRobots(this.builderAgent(),this.builderAllow(),this.builderDisallow(),this.builderSitemap()),error:''}; } catch (error) { return {text:'',error:(error as Error).message}; } });
  readonly matrix = computed(() => { const r=this.report(); return r?.document ? ROBOTS_CRAWLERS.map(crawler=>testRobots(r.document!,crawler,r.path)) : []; });
  readonly related = [
    { id:'url-inspector',icon:'link',title:'URL Inspector',text:'Read a URL’s host, path and query components.' },
    { id:'open-graph-generator',icon:'share',title:'Open Graph Generator',text:'Prepare metadata for social previews.' },
    { id:'dns-lookup',icon:'dns',title:'DNS Lookup',text:'Check the public DNS records for your domain.' },
    { id:'hash-generator',icon:'tag',title:'Hash Generator',text:'Calculate a digest of text or files.' },
  ];
  readonly questions = [
    {q:'Does robots.txt block access or remove URLs from search?',a:'No. It asks cooperating crawlers not to fetch matching URLs. It is public and is not an access-control mechanism. A blocked URL can still be indexed from other signals. Use authentication for private content. Indexing controls such as noindex require the crawler to be able to read the relevant response.'},
    {q:'How are the winning group and rule selected?',a:'This tester uses a product-token matching model: an exact case-insensitive crawler product token selects its group, repeated matching groups combine, and * is the fallback. It does not guess parent-token aliases. It does not merge the wildcard group into a specific group. Rules match case-sensitive path and query bytes, with * wildcards and a final $ anchor. The longest normalized pattern wins, with Allow winning ties. Operators can have additional crawler-specific behavior.'},
    {q:'Why does HTTP status change the result?',a:'A successful response supplies rules to parse. In Google’s documented HTTP behavior, 4xx responses other than 429 are treated as no robots file, including 401 and 403. Rate limits, 5xx responses and network failures need more context and may involve cached files, so this tool does not invent a definite live crawl verdict for them. The tool cannot inspect a crawler’s cache.'},
    {q:'Why might the fetched file differ from what a crawler sees?',a:'Live fetching uses the declared XcellHostRobotsTester user agent from the server running this site. The crawler selection is applied locally to that fetched text; it does not impersonate Googlebot or an AI crawler. Servers can vary content by headers, geography, IP or authentication. This is one response snapshot, not evidence of an actual crawler visit.'},
    {q:'What do the sitemap checks verify?',a:'When enabled, the service probes at most five unique declared sitemap URLs. It reports HTTP status, final URL and whether a sitemap XML root appears near the start. It does not validate the complete XML, decompress a raw .gz sitemap file, follow sitemap-index children or confirm indexing. A rule comparison is shown only for sitemap URLs on the original robots origin. Failed or unprobed references remain explicitly unverified.'},
    {q:'Can I test an edited file before publishing?',a:'Yes. Choose Paste text, enter the robots.txt contents and a path, then run the local test. You can load an example or send the Build tab’s output to the tester. Pasted text and generated content are processed locally. The optional site URL supplies origin context; it is not fetched in Paste mode.'},
    {q:'What does the crawler comparison table mean?',a:'It applies each listed product token to the same supplied file and the same test path. It does not grade the entire site, prove that a named crawler obeys the rules or describe what an operator does with already collected content. Use the Custom product token option for a crawler not listed.'},
    {q:'Where should I publish the generated file?',a:'Review it and place it at /robots.txt on the relevant scheme, host and port. Subdomains and different origins can need separate files. Start small, test representative paths and avoid accidentally leaving Disallow: / on a public site. Crawl-delay, Host and noindex are outside this builder’s core access-rule model; unknown directives are reported without changing supported group parsing.'},
  ];
  constructor(){inject(SeoService).set('Robots.txt Tester & Generator | XcellHost Tools','Fetch or paste robots.txt, test crawler access with matching-rule lines, review syntax and sitemap references, or build and download a robots.txt file.','/tools/robots-generator');inject(DestroyRef).onDestroy(()=>this.controller?.abort());}
  private invalidate(): void {this.revision++;this.controller?.abort();this.controller=null;this.busy.set(false);this.report.set(null);this.error.set('');this.notice.set('');this.fallback.set('');}
  setMode(mode:'test'|'build'):void{this.mode.set(mode);this.error.set('');this.notice.set('');this.fallback.set('');if(this.busy())this.invalidate();}
  setSource(source:'live'|'paste'):void{this.invalidate();this.source.set(source);}
  edit(field:'site'|'path'|'draft'|'customCrawler',event:Event):void{this.invalidate();this[field].set((event.target as HTMLInputElement).value);}
  selectCrawler(event:Event):void{this.invalidate();this.crawler.set((event.target as HTMLSelectElement).value);}
  toggleSitemaps(event:Event):void{this.invalidate();this.checkSitemaps.set((event.target as HTMLInputElement).checked);}
  editBuilder(field:'builderAgent'|'builderAllow'|'builderDisallow'|'builderSitemap',event:Event):void{this[field].set((event.target as HTMLInputElement).value);this.notice.set('');this.fallback.set('');}
  template(kind:'allow'|'block'|'common'):void{this.builderAgent.set('*');this.builderAllow.set(kind==='allow'?'/':kind==='common'?'/private/public/':'');this.builderDisallow.set(kind==='block'?'/':kind==='common'?'/admin/\n/private/':'');this.notice.set('Template loaded. Review the paths before publishing.');}
  example(site?:string):void{this.invalidate();if(site){this.source.set('live');this.site.set(site);}else{this.source.set('paste');this.draft.set(ROBOTS_SAMPLE);this.path.set('/private/report');}}
  async test(event?:Event):Promise<void>{
    event?.preventDefault();this.invalidate();const revision=this.revision;this.busy.set(true);const controller=new AbortController();this.controller=controller;
    try{
      const source=this.source(),site=this.site().trim();const url=site?robotsOrigin(site):undefined;if(source==='live'&&!url)throw new Error('Enter the website domain or URL.');
      const path=robotsPath(this.path()||((url?.pathname||'/')+(url?.search||'')),url),crawler=this.crawler()==='custom'?this.customCrawler().trim():this.crawler();
      // Validate the product token before requesting a remote resource.
      testRobots({text:'',groups:[],sitemaps:[],findings:[],bytes:0},crawler,path);
      let fetched:RobotsFetchResult|null=null,state:RobotsReport['state']='rules',parsed:RobotsDocument|null=null;
      if(source==='live'){
        const response=await fetch('/api/robots-fetch.php',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'omit',cache:'no-store',body:JSON.stringify({url:url!.origin,checkSitemaps:this.checkSitemaps()}),signal:AbortSignal.any([controller.signal,AbortSignal.timeout(30000)])});
        let data:any;try{data=await response.json();}catch{throw new Error('The fetch service did not return JSON. Use Paste text or check the PHP endpoint configuration.');}
        if(!response.ok||data.error)throw new Error(typeof data.error==='string'?data.error:'The website could not be checked.');
        if(typeof data.text!=='string'||!Number.isInteger(data.status)||typeof data.finalUrl!=='string'||!Array.isArray(data.sitemaps))throw new Error('The fetch service returned an invalid snapshot.');
        fetched=data as RobotsFetchResult;state=robotsHttpMeaning(fetched.status);if(state==='rules')parsed=parseRobots(fetched.text);
      }else{if(!this.draft().trim())throw new Error('Paste robots.txt text or load the example.');parsed=parseRobots(this.draft());}
      if(revision!==this.revision)return;
      this.report.set({source,origin:url?.origin||'',path,crawler,checkedAt:fetched?.checkedAt||new Date().toISOString(),state,document:parsed,decision:parsed?testRobots(parsed,crawler,path):null,fetch:fetched});
      this.notice.set(source==='paste'?'Local text test complete. No website request was made.':'Live response captured. The selected crawler was applied to this snapshot.');
    }catch(error){if(revision===this.revision&&!controller.signal.aborted)this.error.set(error instanceof Error?error.message:'The robots.txt check failed.');}
    finally{if(revision===this.revision){this.busy.set(false);this.controller=null;}}
  }
  editFetched():void{const text=this.report()?.document?.text;if(text!==undefined){this.setSource('paste');this.draft.set(text);this.notice.set('Fetched text copied to the local editor. Edit and test again.');}}
  testGenerated():void{const text=this.builder().text;if(!text)return;this.invalidate();this.mode.set('test');this.source.set('paste');this.draft.set(text);this.notice.set('Generated text loaded in the tester. Choose a path and run the test.');}
  sitemapDecision(url:string):string{const r=this.report();if(!r?.document||!r.origin)return 'Origin context unavailable';try{const target=new URL(url);if(target.origin!==r.origin)return 'Different origin · not compared';return testRobots(r.document,r.crawler,robotsPath(target.href,new URL(r.origin))).allowed?'Allowed for selected crawler':'Blocked for selected crawler';}catch{return 'Not compared';}}
  sitemapProbe(url:string){return this.report()?.fetch?.sitemaps.find(row=>row.url===url);}
  clear():void{this.invalidate();this.site.set('');this.path.set('');this.draft.set('');this.customCrawler.set('');this.notice.set('Input and results cleared.');}
  async copy(text:string):Promise<void>{try{await navigator.clipboard.writeText(text);this.notice.set('Copied to your clipboard.');this.fallback.set('');}catch{this.fallback.set(text);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#robots-copy-fallback')?.select(),0);}}
  download(text:string,name='robots.txt'):void{try{const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),link=this.document.createElement('a');link.href=url;link.download=name;this.document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('Download started: '+name);}catch{this.notice.set('Download unavailable. Use Copy instead.');}}
  downloadReport():void{const report=this.report();if(report)this.download(JSON.stringify(report,null,2),'robots-report.json');}
}
