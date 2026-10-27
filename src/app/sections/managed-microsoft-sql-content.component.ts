import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-managed-microsoft-sql-content',
  standalone: true,
  host: { '[class.sql-hero]': 'hero' },
  template: `<iframe #frame [src]="hero ? heroUrl : contentUrl" [title]="hero ? 'Managed Microsoft SQL Server overview' : 'Managed Microsoft SQL Server features and pricing'" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:720px;border:0}:host(.sql-hero) iframe{min-height:0}`],
})
export class ManagedMicrosoftSqlContentComponent implements OnDestroy {
  @Input() hero = false;
  private readonly sanitizer = inject(DomSanitizer);
  readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/managed-microsoft-sql-hero.html');
  readonly contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/managed-microsoft-sql-content.html');
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
    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + (this.hero ? 0 : 8)}px`; };
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
      const contentFrame = this.hero
        ? window.document.querySelector<HTMLIFrameElement>('iframe[src="/managed-microsoft-sql-content.html"]')
        : frame;
      const target = href && href.length > 1 ? contentFrame?.contentDocument?.getElementById(href.slice(1)) : null;
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: window.scrollY + contentFrame!.getBoundingClientRect().top + target.getBoundingClientRect().top - 148, behavior: 'smooth' });
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
