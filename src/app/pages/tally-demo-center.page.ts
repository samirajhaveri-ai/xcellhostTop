import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-tally-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="demo-page">
      <div class="wrap">
        <nav aria-label="Breadcrumb">
          <a routerLink="/">Home</a><span>/</span><span>Experience Center</span><span>/</span><span>Tally Demo Center</span>
        </nav>
        <header>
          <span class="eyebrow">Experience Center</span>
          <h1>Tally Demo Center</h1>
          <p>Explore the Tally on Cloud workspace and see how to access your accounting applications and files.</p>
        </header>
        <section class="tour" aria-labelledby="tourTitle">
          <div class="tour-tabs" role="group" aria-label="Choose a Tally walkthrough">
            @for (slide of slides; track slide.image; let i = $index) {
              <button type="button" [class.active]="selected() === i"
                [attr.aria-pressed]="selected() === i" (click)="selected.set(i)">{{ slide.title }}</button>
            }
          </div>
          <figure>
            <img [src]="slides[selected()].image" [alt]="slides[selected()].description" width="1200" height="750" />
            <figcaption aria-live="polite">
              <h2 id="tourTitle">{{ slides[selected()].title }}</h2>
              <p>{{ slides[selected()].description }}</p>
            </figcaption>
          </figure>
        </section>
        <section class="demo-cta" aria-labelledby="liveDemoTitle">
          <div><h2 id="liveDemoTitle">See Tally on Cloud in action</h2>
            <p>Request a guided live demo with the XcellHost team, or explore available plans.</p></div>
          <div class="actions">
            <button type="button" (click)="requestDemo()">Request a live demo &#8594;</button>
            <a routerLink="/tally-on-cloud" fragment="ppPlans">View Tally on Cloud plans</a>
          </div>
        </section>
      </div>
    </main>
  `,
  styles: [`
    .demo-page { padding: 32px 0 64px; color: #102b55; background: #f7faff; }
    nav { display: flex; flex-wrap: wrap; gap: 10px; font-size: 13px; color: #5e7190; }
    a { color: #1261ff; }
    header { max-width: 780px; margin: 40px 0 32px; }
    .eyebrow { color: #1261ff; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
    h1 { margin: 10px 0 16px; font: 600 clamp(32px, 4vw, 48px)/1.2 var(--disp, sans-serif); }
    p { color: #5e7190; font-size: 16px; line-height: 1.65; }
    .tour { padding: 24px; border: 1px solid #d4e2f6; border-radius: 16px; background: #fff; }
    .tour-tabs, .actions { display: flex; flex-wrap: wrap; gap: 12px; }
    button, .actions a { border: 1px solid #cbdcf5; border-radius: 8px; padding: 12px 18px;
      font: 600 14px/1.4 var(--body, sans-serif); cursor: pointer; background: #fff; color: #1261ff; text-decoration: none; }
    button.active, .actions button { background: #1261ff; color: #fff; border-color: #1261ff; }
    button:focus-visible, a:focus-visible { outline: 3px solid #93bdf5; outline-offset: 3px; }
    figure { margin: 24px 0 0; }
    img { display: block; width: 100%; height: auto; max-height: 640px; object-fit: contain;
      border-radius: 8px; background: #eef3fa; }
    h2 { font-size: 24px; margin: 20px 0 10px; }
    figcaption p { margin: 0; }
    .demo-cta { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;
      gap: 24px; padding: 28px; margin-top: 32px; border-radius: 16px; background: #eaf2ff; }
    .demo-cta h2 { margin-top: 0; }
    .demo-cta p { margin-bottom: 0; }
    @media(max-width: 600px) { .tour, .demo-cta { padding: 16px; } .tour-tabs button { width: 100%; } }
  `],
})
export class TallyDemoCenterPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  readonly selected = signal(0);
  readonly slides = [
    { title: 'Remote app launcher', image: '/assets/images/tally-cloud-tour-1.png',
      description: 'Access TallyPrime Edit Log, Tally.ERP 9 and your files from the TSplus Remote App launcher.' },
    { title: 'Application workspace', image: '/assets/images/tally-cloud-tour-2.png',
      description: 'Explore the remote workspace with shortcuts for your desktop folder, accounting applications and exported files.' },
  ];

  constructor() {
    inject(SeoService).set('Tally Demo Center | XcellHost',
      'Explore Tally on Cloud workspace walkthroughs and request a guided live demo from XcellHost.',
      '/tally-demo-center/');
  }

  requestDemo(): void {
    this.topics.ask('Tally on Cloud live demo');
    this.overlay.open('callback');
  }
}
