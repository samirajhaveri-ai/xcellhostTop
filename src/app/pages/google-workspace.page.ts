import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-google-workspace-page',
  standalone: true,
  templateUrl: './google-workspace.page.html',
  styleUrl: './google-workspace.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleWorkspacePage implements AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cleanups: Array<() => void> = [];
  private typewriterTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.seo.set(
      'Google Workspace India — Authorised Reseller | XcellHost',
      'Buy Google Workspace in India from XcellHost. Gemini AI, Gmail, Meet, Drive and 60+ apps with INR billing, free migration and 24×7 support.',
      '/google-workspace/',
    );
  }

  ngAfterViewInit(): void {
    this.startTypewriter();

    this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.faq2-q').forEach((button) => {
      const onClick = () => button.parentElement?.classList.toggle('open');
      button.addEventListener('click', onClick);
      this.cleanups.push(() => button.removeEventListener('click', onClick));
    });

    const videoFrame = this.host.nativeElement.querySelector<HTMLElement>('#ppVid');
    const loadVideo = (videoId: string) => {
      if (!videoFrame) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
      iframe.title = 'Google Workspace overview';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      videoFrame.replaceChildren(iframe);
    };

    const playButton = this.host.nativeElement.querySelector<HTMLButtonElement>('#pvPlay');
    if (playButton) {
      const onPlay = () => loadVideo('hh1uJDL0nBQ');
      playButton.addEventListener('click', onPlay);
      this.cleanups.push(() => playButton.removeEventListener('click', onPlay));
    }

    this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.pv-tab').forEach((tab) => {
      const onClick = () => {
        this.host.nativeElement
          .querySelectorAll('.pv-tab')
          .forEach((item) => item.classList.remove('active'));
        tab.classList.add('active');
        loadVideo(tab.dataset['vid'] ?? 'hh1uJDL0nBQ');
      };
      tab.addEventListener('click', onClick);
      this.cleanups.push(() => tab.removeEventListener('click', onClick));
    });
  }

  submitForm(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    form.reset();
    if (form.classList.contains('pp-form')) {
      const message = this.host.nativeElement.querySelector<HTMLElement>('#fmsg');
      if (message) message.textContent = 'Thanks — our team will call you within one business day.';
    }
  }

  ngOnDestroy(): void {
    if (this.typewriterTimer) clearTimeout(this.typewriterTimer);
    this.cleanups.forEach((cleanup) => cleanup());
  }

  private startTypewriter(): void {
    const target = this.host.nativeElement.querySelector<HTMLElement>('#tw');
    if (!target) return;
    const lines = [
      'Gemini AI in Gmail, Docs & Meet',
      'Professional email on your domain',
      '2 TB pooled Drive storage',
      'Free migration from any platform',
    ];
    let line = 0;
    let character = 0;
    let deleting = false;
    const tick = () => {
      const text = lines[line];
      character += deleting ? -1 : 1;
      target.textContent = text.slice(0, character);
      let delay = deleting ? 38 : 62;
      if (!deleting && character === text.length) {
        deleting = true;
        delay = 1700;
      } else if (deleting && character === 0) {
        deleting = false;
        line = (line + 1) % lines.length;
        delay = 260;
      }
      this.typewriterTimer = setTimeout(tick, delay);
    };
    tick();
  }
}
