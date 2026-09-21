import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ZohoRecruitEmbed {
  load(config: {
    widget_id: string;
    page_name: string;
    source: string;
    site: string;
    brand_color: string;
    empty_job_msg: string;
  }): void;
}

type ZohoWindow = Window & { rec_embed_js?: ZohoRecruitEmbed };

@Component({
  selector: 'xh-zoho-job-listing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zoho-job-listing.component.html',
  styleUrl: './zoho-job-listing.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZohoJobListingComponent implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private observer?: MutationObserver;
  private failureTimer?: number;

  readonly status = signal<'loading' | 'ready' | 'error'>('loading');

  ngAfterViewInit(): void {
    const win = this.document.defaultView as ZohoWindow | null;
    const target = this.document.getElementById('rec_job_listing_div');
    if (!win || !target) {
      this.status.set('error');
      return;
    }

    this.installStylesheet();
    this.observer = new MutationObserver(() => {
      if (target.childElementCount > 0 || target.textContent?.trim()) {
        this.status.set('ready');
        if (this.failureTimer) win.clearTimeout(this.failureTimer);
      }
    });
    this.observer.observe(target, { childList: true, subtree: true, characterData: true });

    const initialise = () => {
      if (!win.rec_embed_js) {
        this.status.set('error');
        return;
      }

      target.replaceChildren();
      win.rec_embed_js.load({
        widget_id: 'rec_job_listing_div',
        page_name: 'Careers',
        source: 'CareerSite',
        site: 'https://xcellhost.zohorecruit.in',
        brand_color: '#1769ff',
        empty_job_msg: 'There are no open roles right now. Please check back soon.',
      });
    };

    if (win.rec_embed_js) {
      initialise();
    } else {
      const existingScript = this.document.getElementById('xh-zoho-recruit-script') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', initialise, { once: true });
        existingScript.addEventListener('error', () => this.status.set('error'), { once: true });
      } else {
        const script = this.document.createElement('script');
        script.id = 'xh-zoho-recruit-script';
        script.src = 'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
        script.async = true;
        script.addEventListener('load', initialise, { once: true });
        script.addEventListener('error', () => this.status.set('error'), { once: true });
        this.document.head.appendChild(script);
      }
    }

    this.failureTimer = win.setTimeout(() => {
      if (this.status() === 'loading') this.status.set('error');
    }, 20000);

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      if (this.failureTimer) win.clearTimeout(this.failureTimer);
    });
  }

  private installStylesheet(): void {
    if (this.document.getElementById('xh-zoho-recruit-styles')) return;
    const stylesheet = this.document.createElement('link');
    stylesheet.id = 'xh-zoho-recruit-styles';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
    this.document.head.appendChild(stylesheet);
  }
}
