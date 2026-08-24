import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../data/site.data';

/** Keeps <title>, meta description and JSON-LD in step with the current route. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  set(pageTitle: string, description?: string, canonicalPath?: string): void {
    this.title.setTitle(pageTitle);
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    if (canonicalPath) {
      const href = SITE.siteUrl.replace(/\/$/, '') + canonicalPath;
      let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement('link');
        link.rel = 'canonical';
        this.doc.head.appendChild(link);
      }
      link.href = href;
      this.meta.updateTag({ property: 'og:url', content: href });
    }
  }

  /** Replace the page-level structured data block. */
  setJsonLd(id: string, data: unknown): void {
    const elId = 'jsonld-' + id;
    let el = this.doc.getElementById(elId) as HTMLScriptElement | null;
    if (!el) {
      el = this.doc.createElement('script');
      el.type = 'application/ld+json';
      el.id = elId;
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }
}
