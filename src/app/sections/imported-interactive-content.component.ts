import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'xh-imported-interactive-content', standalone: true,
  template: `<iframe #frame [src]="source === 'consulting' ? consultingUrl : source === 'email-signing-certificates' ? emailSigningCertificatesUrl : source === 'code-signing-certificates' ? codeSigningCertificatesUrl : source === 'podcasts' ? podcastsUrl : source === 'deepcall' ? deepcallUrl : source === 'workspace' ? workspaceUrl : source === 'rapidssl' ? rapidsslUrl : source === 'sectigo' ? sectigoUrl : source === 'sectigo-ev' ? sectigoEvUrl : source === 'mark' ? markUrl : source === 'website-security' ? websiteSecurityUrl : source === 'certificate-management' ? certificateManagementUrl : kubernetesUrl" [title]="source === 'consulting' ? 'Security consulting content and tools' : source === 'email-signing-certificates' ? 'Email Signing Certificates tools and pricing' : source === 'code-signing-certificates' ? 'Code Signing Certificates tools and pricing' : source === 'podcasts' ? 'XcellHost Cloud Podcast' : source === 'certificate-management' ? 'Certificate Management dashboard and calculators' : source === 'website-security' ? 'Website Security Solutions scorecard and pricing' : source === 'mark' ? 'Mark Certificates eligibility, preview and pricing' : source === 'sectigo-ev' ? 'Sectigo EV Code Signing tools and pricing' : source === 'sectigo' ? 'Sectigo Code Signing tools and pricing' : source === 'rapidssl' ? 'RapidSSL certificates, selector and calculator' : source === 'workspace' ? 'Sarv Workspace applications and pricing' : source === 'deepcall' ? 'Sarv DeepCall features, IVR builder and calculator' : 'Managed Kubernetes workloads and calculator'" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:600px;border:0}`],
})
export class ImportedInteractiveContentComponent implements OnDestroy {
  @Input() source: 'kubernetes' | 'podcasts' | 'deepcall' | 'workspace' | 'rapidssl' | 'sectigo' | 'sectigo-ev' | 'mark' | 'website-security' | 'certificate-management' | 'code-signing-certificates' | 'email-signing-certificates' | 'consulting' = 'kubernetes';
  @Input() consultingSlug = '';
  private readonly consultingUrls: Record<string, string> = {"managed-grc":"/imported-consulting-managed-grc.html","iso-27001-consulting":"/imported-consulting-iso-27001.html","iso-20000-itsm":"/imported-consulting-iso-20000.html","iso-27017-cloud-infosec":"/imported-consulting-iso-27017.html","iso-22301-bmc":"/imported-consulting-iso-22301.html","iso-27018-pii-public-cloud":"/imported-consulting-iso-27018.html","iso-42001ai-risk":"/imported-consulting-iso-42001.html","soc-1-cunsulting":"/imported-consulting-soc-1.html","soc-2-cunsulting":"/imported-consulting-soc-2.html","pci-consulting":"/imported-consulting-pci-dss.html"};
  private consultingSafeUrls = new Map<string, SafeResourceUrl>();
  get consultingUrl() {
    if (!this.consultingSafeUrls.has(this.consultingSlug)) this.consultingSafeUrls.set(this.consultingSlug, this.sanitizer.bypassSecurityTrustResourceUrl(this.consultingUrls[this.consultingSlug] || 'about:blank'));
    return this.consultingSafeUrls.get(this.consultingSlug)!;
  }
  private sanitizer = inject(DomSanitizer);
  private overlay = inject(OverlayService);
  private topics = inject(CallbackTopicService);
  private cart = inject(CartService);
  readonly codeSigningCertificatesUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-code-signing-certificates.html');
  readonly emailSigningCertificatesUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-email-signing-certificates.html');
  readonly podcastsUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-podcasts.html');
  readonly certificateManagementUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-certificate-management.html');
  readonly websiteSecurityUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-website-security.html');
  readonly markUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-mark-certificates.html');
  readonly sectigoEvUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-sectigo-ev-code-signing.html');
  readonly sectigoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-sectigo-code-signing.html');
  readonly rapidsslUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-rapidssl.html');
  readonly workspaceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-sarv-workspace.html');
  readonly deepcallUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-deepcall.html');
  readonly kubernetesUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-kubernetes.html');
  @ViewChild('frame') frame?: ElementRef<HTMLIFrameElement>;
  private cleanup: (() => void)[] = [];
  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement, doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;
    const resize = () => frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`;
    const observer = new ResizeObserver(resize); observer.observe(main);
    doc.fonts.ready.then(resize); resize();
    const position = () => {
      const top = Math.max(0, -frame.getBoundingClientRect().top + 90);
      doc.querySelectorAll<HTMLElement>('.modal').forEach(m => { m.style.position = 'absolute'; m.style.top = top + 'px'; m.style.bottom = 'auto'; m.style.height = Math.max(300, window.innerHeight - 100) + 'px'; });
      const mini = doc.getElementById('mini');
      if (mini) { mini.style.position = 'absolute'; mini.style.top = Math.max(0, -frame.getBoundingClientRect().top + window.innerHeight - 100) + 'px'; mini.style.bottom = 'auto'; }
    };
    const mutations = new MutationObserver(position);
    doc.querySelectorAll('.modal').forEach(m => mutations.observe(m, {attributes:true,attributeFilter:['class']}));
    window.addEventListener('scroll', position, {passive:true});position();
    const callback = (e: Event) => {this.topics.ask((e as CustomEvent<string>).detail || 'Podcast enquiry');this.overlay.open('callback');};
    const add = (e: Event) => {const item=(e as CustomEvent).detail;this.cart.add(item.name + ' - ' + item.sub, 'INR ' + item.price, item.qty, {unitAmount:item.price,currency:'INR',locale:'en-IN',suffix:''});this.cart.open();};
    const click = (event: Event) => {
      const a = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = (event.target as Element).closest('[data-sel]') ? 'calc' : a?.getAttribute('href')?.slice(1);
      const target = id ? doc.getElementById(id) ?? document.getElementById(id) : null;
      if (target) {
        event.preventDefault();
        const frameTop = target.ownerDocument === doc ? frame.getBoundingClientRect().top : 0;
        window.scrollTo({top:window.scrollY+frameTop+target.getBoundingClientRect().top-148,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
      }
    };
    doc.addEventListener('import-callback',callback);doc.addEventListener('import-cart',add);doc.addEventListener('click',click);
    this.cleanup.push(()=>observer.disconnect(),()=>mutations.disconnect(),()=>window.removeEventListener('scroll',position),()=>doc.removeEventListener('import-callback',callback),()=>doc.removeEventListener('import-cart',add),()=>doc.removeEventListener('click',click));
  }
  ngOnDestroy(): void {this.cleanup.forEach(fn=>fn());this.cleanup=[];}
}
