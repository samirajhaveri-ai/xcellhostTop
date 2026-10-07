import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FRAMEWORK_DETAILS } from '../data/framework-details.data';
import { Component, Input, ElementRef, OnDestroy, OnChanges, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'xh-nist-csf-2-0-content',
  standalone: true,
  template: `<iframe #frame [src]="source" [title]="frameTitle" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:0;border:0}`],
})
export class NistCsfContentComponent implements OnDestroy, OnChanges {
  @Input() hero = false;
  @Input() slug = 'nist-csf-2-0';
  private readonly sanitizer = inject(DomSanitizer);
  source: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/nist-csf-2-0-content.html');
  frameTitle = 'NIST CSF 2.0 Details';
  ngOnChanges(): void {
    const slug = Object.hasOwn(FRAMEWORK_DETAILS, this.slug) ? this.slug : 'nist-csf-2-0';
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl('/' + slug + (this.hero ? '-hero.html' : '-content.html'));
    this.frameTitle = FRAMEWORK_DETAILS[slug].name + (this.hero ? ' Framework Visual' : ' Details');
  }
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private document?: Document;
  private clickListener?: (event: MouseEvent) => void;

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;
    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().bottom + frame.contentWindow!.scrollY) + 8}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    this.document = doc;
    this.clickListener = (event) => {
      const pageLink = (event.target as Element).closest<HTMLAnchorElement>('a[href^="/"]');
      if (pageLink) pageLink.target = '_top';
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (href === '#lead') {
        event.preventDefault();
        window.document.querySelector('#ppage .pp-cta')?.scrollIntoView({behavior: 'smooth', block: 'center'});
        return;
      }
      let targetFrame = frame;
      let target = href && href.length > 1 ? doc.getElementById(href.slice(1)) : null;
      if (!target && this.hero && href && href.length > 1) {
        const contentFrame = Array.from(window.document.querySelectorAll<HTMLIFrameElement>('xh-nist-csf-2-0-content iframe'))
          .find(candidate => candidate.getAttribute('src') === '/' + this.slug + '-content.html');
        target = contentFrame?.contentDocument?.getElementById(href.slice(1)) ?? null;
        if (contentFrame && target) targetFrame = contentFrame;
      }
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: window.scrollY + targetFrame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110, behavior: 'smooth' });
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
