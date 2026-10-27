import { Component, Input, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-smart-qr-and-nfc-automation-content',
  standalone: true,
  template: `@if (hero) { <iframe #frame src="/smart-qr-and-nfc-automation-hero.html" title="Illustrative Smart QR And NFC Dashboard" scrolling="no" (load)="onLoad()"></iframe> } @else if (demo) { <iframe #frame src="/smart-qr-and-nfc-automation-demo.html" title="Digital Card Demo" scrolling="no" (load)="onLoad()"></iframe> } @else { <iframe #frame src="/smart-qr-and-nfc-automation-content.html" title="Smart QR &amp; NFC Automation Features And Use Cases" scrolling="no" (load)="onLoad()"></iframe> }`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:0;border:0}`],
})
export class SmartQrContentComponent implements OnDestroy {
  @Input() demo = false;
  @Input() hero = false;
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
