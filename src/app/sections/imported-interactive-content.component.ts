import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'xh-imported-interactive-content', standalone: true,
  template: `<iframe #frame [src]="source === 'podcasts' ? podcastsUrl : kubernetesUrl" [title]="source === 'podcasts' ? 'XcellHost Cloud Podcast' : 'Managed Kubernetes workloads and calculator'" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:600px;border:0}`],
})
export class ImportedInteractiveContentComponent implements OnDestroy {
  @Input() source: 'kubernetes' | 'podcasts' = 'kubernetes';
  private sanitizer = inject(DomSanitizer);
  private overlay = inject(OverlayService);
  private topics = inject(CallbackTopicService);
  private cart = inject(CartService);
  readonly podcastsUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-podcasts.html');
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
