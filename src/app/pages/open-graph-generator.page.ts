import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebToolsNavigationComponent } from './web-tools-navigation.component';
import { SeoService } from '../core/seo.service';
import { SocialFields, SocialSnapshot, SocialTag, analyzeSocial, escapeSocialHtml, firstSocialTag, generateSocial, socialExample, socialPageUrl, socialResource } from '../core/open-graph-tool';

@Component({
  selector:'xh-open-graph-generator-page', standalone:true, imports:[RouterLink, WebToolsNavigationComponent],
  templateUrl:'./open-graph-generator.page.html', styleUrls:['./dns-lookup.page.css','./open-graph-generator.page.css','./web-tools.page.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class OpenGraphGeneratorPage {
  private readonly document=inject(DOCUMENT);
  private controller:AbortController|null=null;
  private revision=0;
  readonly mode=signal<'check'|'generate'>('check');
  readonly url=signal('');
  readonly fetchImages=signal(true);
  readonly busy=signal(false);
  readonly error=signal('');
  readonly notice=signal('');
  readonly fallback=signal('');
  readonly snapshot=signal<SocialSnapshot|null>(null);
  readonly analysis=computed(()=>{const snapshot=this.snapshot();return snapshot?analyzeSocial(snapshot):null;});
  readonly platforms=['Facebook','X','LinkedIn','Slack','Google'];
  readonly platform=signal('Facebook');
  readonly preview=computed(()=>{const a=this.analysis();return a?(this.platform()==='X'?a.twitter:this.platform()==='Google'?a.search:a.og):null;});
  readonly failedImages=signal<string[]>([]);
  readonly previewImage=computed(()=>{
    const image=this.preview()?.image;if(!image||this.failedImages().includes(image))return '';
    const data=this.snapshot()?.images.find(item=>item.url===image)?.dataUrl||'';
    return /^data:image\/(?:png|jpeg|gif|webp|avif);base64,[A-Za-z0-9+/=]+$/.test(data)&&data.length<2200000?data:'';
  });
  readonly fields=signal<SocialFields>({title:'',description:'',url:'',image:'',imageAlt:'',type:'website',site:'',locale:'en_US',card:'summary_large_image'});
  readonly generated=computed(()=>{try{return {text:generateSocial(this.fields()),error:''};}catch(error){return {text:'',error:(error as Error).message};}});
  readonly groups=[{id:'og',name:'Open Graph',icon:'share'},{id:'twitter',name:'X / Twitter Cards',icon:'chat_bubble'},{id:'seo',name:'SEO metadata',icon:'search'}] as const;
  readonly related=[{id:'robots-generator',icon:'smart_toy',title:'Robots.txt Tester',text:'Test path and crawler access rules.'},{id:'url-inspector',icon:'link',title:'URL Inspector',text:'Inspect a URL’s components.'},{id:'dns-lookup',icon:'dns',title:'DNS Lookup',text:'Look up your domain’s DNS records.'},{id:'hash-generator',icon:'tag',title:'Hash Generator',text:'Create a digest of text or files.'}];
  readonly features=[{icon:'data_object',title:'Read the metadata',text:'Inspect Open Graph, X card and search tags from the response HTML.'},{icon:'preview',title:'Compare link cards',text:'Switch between five illustrative social and search layouts.'},{icon:'fact_check',title:'Find missing tags',text:'Review ten explicit completeness checks and conflicting values.'},{icon:'code',title:'Generate a fix',text:'Build escaped HTML tags, then copy or download your snippet.'}];
  readonly steps=[{title:'Choose the exact page',text:'Use the complete public URL you intend to share, including its path.'},{title:'Capture the response',text:'Fetch the server’s HTML and optionally retrieve up to two preview images.'},{title:'Review tags and cards',text:'Check missing values, image availability and the first selected metadata values.'},{title:'Publish and check again',text:'Add the corrected tags to your page’s head and refresh the relevant platform cache.'}];
  readonly questions=[
    {q:'Which tags should I include?',a:'The Open Graph protocol defines og:title, og:type, og:image and og:url as its four basic required properties. Add a useful og:description and image alt text. The completeness checklist also includes X and SEO fields; it is a transparent list of markup checks, not an SEO ranking or platform acceptance score.'},
    {q:'Are these exact Facebook, X, LinkedIn or Slack previews?',a:'They are approximations made from the captured metadata. Real services use their own layout, image cropping, fallback logic, crawler policies and cached copies. This tool does not publish a post, contact a platform debugger or impersonate a platform crawler.'},
    {q:'What image should I use?',a:'A clear landscape image around 1200 × 630 pixels is a common starting point for wide link cards. Check each destination’s current requirements. This preview service retrieves up to two declared raster images, each no larger than 1.5 MiB, and reports actual dimensions when readable. SVG previews and very large images are not rendered here.'},
    {q:'Why are my tags missing from the result?',a:'The tool reads the initial server HTML without executing JavaScript. Tags inserted only after client-side rendering may not be present in that response. Redirects, bot protection, a login page or geographic rules can also change what is returned. The status and final URL help identify the response that was inspected.'},
    {q:'Why is an old preview still visible after I fix the tags?',a:'Social services cache link cards. Recheck the page here to verify its current response, then use the destination’s sharing debugger or post inspector where available. Fetching a page here does not clear another service’s cache.'},
    {q:'How does X use these tags?',a:'This tool uses twitter:title, twitter:description and twitter:image first, then Open Graph fallbacks for this illustrative card. The summary and summary_large_image layouts are approximated. Player and app cards require additional metadata and are outside the visual preview supported here.'},
    {q:'Does the Google preview show the real search result?',a:'It uses the HTML title, meta description and canonical URL as an illustration. Google can choose a different title or snippet based on the query and page content. This tool does not check whether the page is indexed or eligible for a search feature.'},
    {q:'What happens when I check a page?',a:'The fetch service requests public HTTP(S) resources as XcellHostLinkPreview/1.0, follows up to five validated redirects, and captures up to 1 MiB of HTML. The optional image setting makes bounded server requests for preview images. It sends no account cookies, runs no page scripts and does not store your report. Generator fields stay in your browser.'},
  ];
  constructor(){inject(SeoService).set('Open Graph Checker & Generator | XcellHost Tools','Check social sharing tags, compare illustrative link previews, inspect SEO metadata and generate Open Graph and X card markup.','/tools/open-graph-generator');inject(DestroyRef).onDestroy(()=>this.controller?.abort());}
  private invalidate():void{this.revision++;this.controller?.abort();this.controller=null;this.busy.set(false);this.snapshot.set(null);this.failedImages.set([]);this.error.set('');this.notice.set('');this.fallback.set('');}
  setMode(mode:'check'|'generate'):void{if(this.busy())this.invalidate();this.mode.set(mode);this.error.set('');this.notice.set('');this.fallback.set('');}
  editUrl(event:Event):void{this.invalidate();this.url.set((event.target as HTMLInputElement).value);}
  toggleImages(event:Event):void{this.invalidate();this.fetchImages.set((event.target as HTMLInputElement).checked);}
  clear():void{this.invalidate();this.url.set('');}
  async check(event?:Event):Promise<void>{
    event?.preventDefault();this.invalidate();const revision=this.revision,controller=new AbortController();this.controller=controller;this.busy.set(true);
    try{
      if(!this.url().trim())throw new Error('Enter the public page URL you want to check.');
      const url=socialPageUrl(this.url());
      const response=await fetch('/api/open-graph.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url,fetchImages:this.fetchImages()}),credentials:'omit',cache:'no-store',signal:AbortSignal.any([controller.signal,AbortSignal.timeout(30000)])});
      let data:any;try{data=await response.json();}catch{throw new Error('The metadata service did not return JSON. Restart the development server to load its proxy configuration.');}
      if(!response.ok||data.error)throw new Error(typeof data.error==='string'?data.error:'The page could not be checked.');
      if(!Array.isArray(data.tags)||data.tags.length>500||!data.tags.every((tag:any)=>typeof tag.key==='string'&&typeof tag.value==='string'&&['og','twitter','seo'].includes(tag.source))||!Array.isArray(data.images)||!Array.isArray(data.redirects)||!Array.isArray(data.warnings)||!Number.isInteger(data.status)||typeof data.finalUrl!=='string'||typeof data.baseUrl!=='string')throw new Error('The service returned an invalid metadata snapshot.');
      socialPageUrl(data.finalUrl);socialPageUrl(data.baseUrl);
      if(revision!==this.revision)return;
      this.snapshot.set(data as SocialSnapshot);this.notice.set('Response captured. Previews use this snapshot and do not confirm a platform’s cached card.');
    }catch(error){if(revision===this.revision&&!controller.signal.aborted)this.error.set(error instanceof Error?error.message:'The metadata check failed.');}
    finally{if(revision===this.revision){this.busy.set(false);this.controller=null;}}
  }
  example(url?:string):void{this.invalidate();if(url){this.url.set(url);}else{this.mode.set('check');this.snapshot.set(socialExample());this.notice.set('Local sample loaded. No network requests were made.');}}
  tags(source:SocialTag['source']):SocialTag[]{return this.snapshot()?.tags.filter(tag=>tag.source===source)||[];}
  meta(key:string):string{return firstSocialTag(this.snapshot()?.tags||[],key);}
  host(url:string):string{try{return new URL(url).hostname;}catch{return '';}}
  imageError():void{const image=this.preview()?.image;if(image)this.failedImages.update(values=>[...values,image]);}
  imageInfo():string{const image=this.snapshot()?.images.find(item=>item.url===this.preview()?.image);return image?.error||(image?.width?image.width+' × '+image.height+' px · '+image.mime:this.preview()?.image?'Image not fetched or unavailable':'No supported image URL declared');}
  editField(key:keyof SocialFields,event:Event):void{this.fields.update(fields=>({...fields,[key]:(event.target as HTMLInputElement).value}));this.notice.set('');this.fallback.set('');}
  loadGenerator():void{
    const s=this.snapshot(),a=this.analysis();if(!s||!a)return;
    this.fields.set({title:this.meta('og:title')||this.meta('title'),description:this.meta('og:description')||this.meta('description'),url:socialResource(this.meta('og:url'),s.baseUrl)||s.finalUrl,image:a.og.image,imageAlt:this.meta('og:image:alt'),site:this.meta('og:site_name'),type:['website','article','profile'].includes(this.meta('og:type'))?this.meta('og:type'):'website',locale:this.meta('og:locale')||'en_US',card:this.meta('twitter:card')==='summary'?'summary':'summary_large_image'});
    this.setMode('generate');this.notice.set('Metadata loaded into the generator. Review and complete the fields.');
  }
  generatorExample():void{this.fields.set({title:'Cloud services for your next big idea',description:'Bring your applications, data and team together with secure cloud services.',url:'https://example.com/launch',image:'https://example.com/social-preview.jpg',imageAlt:'Cloud services for a growing business',type:'website',site:'Example Cloud',locale:'en_US',card:'summary_large_image'});this.notice.set('Example fields loaded. Replace the example URLs before publishing.');}
  tagsHtml():string{return (this.snapshot()?.tags||[]).map(tag=>tag.key==='title'?'<title>'+escapeSocialHtml(tag.value)+'</title>':tag.key==='canonical'?'<link rel="canonical" href="'+escapeSocialHtml(tag.value)+'">':'<meta '+(tag.source==='og'?'property':'name')+'="'+escapeSocialHtml(tag.key)+'" content="'+escapeSocialHtml(tag.value)+'">').join('\n');}
  async copy(text:string):Promise<void>{const revision=this.revision;try{await navigator.clipboard.writeText(text);if(revision===this.revision)this.notice.set('Copied to your clipboard.');}catch{if(revision!==this.revision)return;this.fallback.set(text);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>this.document.querySelector<HTMLTextAreaElement>('#og-copy-fallback')?.select(),0);}}
  download(text:string,name:string):void{const url=URL.createObjectURL(new Blob([text],{type:name.endsWith('.json')?'application/json':'text/html;charset=utf-8'}));const link=this.document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('Download started: '+name);}
  downloadReport():void{const s=this.snapshot();if(s)this.download(JSON.stringify({...s,images:s.images.map(({dataUrl,...image})=>image),analysis:this.analysis()},null,2),'open-graph-report.json');}
}
