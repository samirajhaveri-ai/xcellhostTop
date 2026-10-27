import { Component, Input, Output, EventEmitter, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-virtualization-servers-content',
  standalone: true,
  template: `@if (hero) { <iframe #frame src="/virtualization-servers-hero.html" title="Illustrative Virtualization Servers Anomaly Detection" scrolling="no" (load)="onLoad()"></iframe> } @else { <iframe #frame src="/virtualization-servers-content.html" title="Virtualization Servers Platform Features" scrolling="no" (load)="onLoad()"></iframe> }`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:0;border:0}`],
})
export class VirtualizationContentComponent implements OnDestroy {
  @Input() hero = false;
  @Output() quoteRequested = new EventEmitter<Event>();
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
    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    this.document = doc;
    this.clickListener = (event) => {
      const targetElement = event.target as Element;
      if (targetElement.closest('#bxGo') || (targetElement.closest('.bx-buy') && doc.querySelector<HTMLSelectElement>('#bxLoc')?.value === 'global')) {
        this.quoteRequested.emit(event);
        return;
      }
      if (targetElement.closest('.bx-buy, #bxFab')) {
        window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top - 90, behavior: 'smooth' });
      }
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (href === '#lead') {
        event.preventDefault();
        window.document.querySelector('#ppage .pp-cta')?.scrollIntoView({behavior: 'smooth', block: 'center'});
        return;
      }
      const target = href && href.length > 1 ? doc.getElementById(href.slice(1)) : null;
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 24, behavior: 'smooth' });
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
