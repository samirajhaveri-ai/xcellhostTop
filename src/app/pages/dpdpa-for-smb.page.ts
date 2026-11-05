import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SeoService } from '../core/seo.service';
import { DPDPA_SMB_REVIEWS } from '../data/smb-page-testimonials.data';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { SmbSectionNavComponent } from '../sections/smb-section-nav.component';
import { SMB_SOCIAL_PREVIEWS } from '../data/smb-social-previews.data';

@Component({
  selector: 'xh-dpdpa-for-smb-page',
  standalone: true,
  imports: [SmbSectionNavComponent],
  templateUrl: './dpdpa-for-smb.page.html',
  styleUrl: './dpdpa-for-smb.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpdpaForSmbPage implements AfterViewInit, OnDestroy {
  readonly testimonials = DPDPA_SMB_REVIEWS;
  private readonly seo = inject(SeoService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly docs = inject(DocRequestService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly cleanups: Array<() => void> = [];
  private revealObserver?: IntersectionObserver;
  readonly sectionNavLinks = [
    { label: 'Overview', target: 'dpdpaOverview' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Features', target: 'modules' },
    { label: 'How it works', target: 'dpdpaWatch' },
    { label: 'Customer Testimonials', target: 'dpdpaTestimonials' },
    { label: 'FAQs', target: 'dpdpaFaq' },
    { label: 'Contact', target: 'contact' },
  ] as const;

  constructor() {
    const preview = SMB_SOCIAL_PREVIEWS['dpdpa-for-smb'];
    this.seo.set(
      preview.title,
      preview.description,
      '/dpdpa-for-smb/',
      preview.image,
    );
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );
    this.host.nativeElement
      .querySelectorAll('.rv, .head, .tier')
      .forEach((element) => this.revealObserver?.observe(element));

    this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.faq2-q').forEach((button) => {
      const onClick = () => button.parentElement?.classList.toggle('open');
      button.addEventListener('click', onClick);
      this.cleanups.push(() => button.removeEventListener('click', onClick));
    });

    this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.sc-tab').forEach((tab) => {
      const onClick = () => {
        this.host.nativeElement
          .querySelectorAll('.sc-tab')
          .forEach((item) => item.classList.remove('on'));
        tab.classList.add('on');
      };
      tab.addEventListener('click', onClick);
      this.cleanups.push(() => tab.removeEventListener('click', onClick));
    });

    this.host.nativeElement.querySelectorAll<HTMLElement>('.count').forEach((counter) => {
      const value = Number(counter.dataset['to']);
      const formatted = counter.dataset['comma'] === '1' ? value.toLocaleString('en-IN') : `${value}`;
      counter.textContent = `${formatted}${counter.dataset['suffix'] ?? ''}`;
    });
  }

  requestDoc(kind: DocKind, event: Event): void {
    event.preventDefault();
    this.docs.ask(kind, 'DPDPA for SMB');
    this.overlay.open('doc');
  }

  openContact(event: Event): void {
    event.preventDefault();
    const action = (event.currentTarget as HTMLElement).textContent?.trim() || 'Assessment';
    this.topics.ask(`DPDPA for SMB — ${action}`);
    this.overlay.open('callback');
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.cleanups.forEach((cleanup) => cleanup());
  }
}
