import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EMAIL_SIGNATURE_VIDEOS } from '../data/email-signature-videos.data';
import { LeadService } from '../core/lead.service';

@Component({
  selector: 'xh-email-signature-content',
  standalone: true,
  templateUrl: './email-signature-content.component.html',
  styleUrl: './email-signature-shared.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSignatureContentComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly leads = inject(LeadService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly activeTab = signal(0);

  readonly submitting = signal(false);
  readonly status = signal('');
  readonly videoSearch = signal('');
  readonly videoTopic = signal('');
  readonly visibleVideoCount = signal(6);
  readonly activeVideoId = signal<string | null>(null);
  readonly videoTopics = [...new Set(EMAIL_SIGNATURE_VIDEOS.map(video => video.topic))];
  readonly videos = EMAIL_SIGNATURE_VIDEOS.map(video => ({
    ...video,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    watchUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`,
    ),
  }));
  readonly filteredVideos = computed(() => {
    const search = this.videoSearch().trim().toLowerCase();
    return this.videos.filter(video =>
      (!this.videoTopic() || video.topic === this.videoTopic()) &&
      (!search || `${video.title} ${video.topic}`.toLowerCase().includes(search)),
    );
  });
  readonly visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleVideoCount()));

  setVideoSearch(value: string): void {
    this.videoSearch.set(value);
    this.resetVideoResults();
  }

  setVideoTopic(value: string): void {
    this.videoTopic.set(value);
    this.resetVideoResults();
  }

  clearVideoFilters(): void {
    this.videoSearch.set('');
    this.videoTopic.set('');
    this.resetVideoResults();
  }

  showMoreVideos(): void {
    this.visibleVideoCount.update(count => count + 6);
  }

  private resetVideoResults(): void {
    this.visibleVideoCount.set(6);
    this.activeVideoId.set(null);
  }

  scrollToContact(event: Event): void {
    event.preventDefault();
    this.host.nativeElement.shadowRoot?.getElementById('email-signature-contact')?.scrollIntoView({ behavior: 'smooth' });
  }


  async submitCallback(event: Event): Promise<void> {
    event.preventDefault();
    if (this.submitting()) return;
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    const payload = Object.fromEntries(new FormData(form).entries());
    this.submitting.set(true);
    this.status.set('Sending your request…');
    const result = await this.leads.submit('callback', { ...payload, product: 'Email Signature' });
    this.submitting.set(false);
    if (!result.ok) {
      this.status.set('Your request could not be sent. Please try again or contact us by phone, email or WhatsApp.');
    } else if (result.skipped) {
      this.status.set('Please send the prepared email to complete your callback request.');
      window.location.href = this.leads.mailtoLink('Email Signature consultation', Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join('\n'));
    } else {
      this.status.set('Thank you — your callback request has been received.');
      form.reset();
    }
  }
}
