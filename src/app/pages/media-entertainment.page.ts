import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-media-entertainment-page',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './gcc-cloud.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="gcc-page">
      <section class="gcc-hero">
        <div class="wrap gcc-hero-grid">
          <div>
            <nav aria-label="Breadcrumb"><a routerLink="/">Home</a><span> / </span>Industries<span> / </span>Media &amp; Entertainment</nav>
            <span class="gcc-eyebrow">CLOUD FOR CREATIVE TEAMS</span>
            <h1>Media &amp; Entertainment<br /><span>From creation to delivery.</span></h1>
            <p>Plan cloud infrastructure for your production workflows, media assets and distributed creative teams.</p>
            <div class="gcc-hero-points"><span>Production workloads</span><span>Shared media assets</span><span>Backup &amp; recovery</span></div>
            <div class="gcc-actions"><button type="button" class="btn btn-primary" (click)="enquire()">Talk to an expert &#8594;</button><a class="btn gcc-outline" href="#media-features">Explore features</a></div>
          </div>
          <div class="gcc-visual" role="img" aria-label="Cloud connecting media production, storage, security and creative teams">
            <div class="gcc-orbit"></div>
            <div class="gcc-cloud-core"><span class="material-symbols-outlined" aria-hidden="true">movie</span><strong>MEDIA CLOUD</strong><small>Your connected creative workspace</small></div>
            <div class="gcc-node gcc-node-one"><span class="material-symbols-outlined" aria-hidden="true">videocam</span><b>Production</b></div>
            <div class="gcc-node gcc-node-two"><span class="material-symbols-outlined" aria-hidden="true">shield</span><b>Security</b></div>
            <div class="gcc-node gcc-node-three"><span class="material-symbols-outlined" aria-hidden="true">database</span><b>Media assets</b></div>
            <div class="gcc-node gcc-node-four"><span class="material-symbols-outlined" aria-hidden="true">groups</span><b>Teams</b></div>
          </div>
        </div>
      </section>
      <section class="gcc-section wrap">
        <span class="gcc-eyebrow">OVERVIEW</span><h2>A cloud foundation for your next production</h2>
        <p class="gcc-lead">Bring editing, animation, visual effects and digital publishing workflows together. Discuss the compute, storage, access controls and recovery plans your studio needs, from project setup to long-term archive.</p>
      </section>
      <section class="gcc-features gcc-section" id="media-features"><div class="wrap">
        <span class="gcc-eyebrow">FEATURES</span><h2>Support every stage of your creative workflow</h2>
        <div class="gcc-card-grid">@for (feature of features; track feature.title) {<article class="gcc-card"><span class="material-symbols-outlined" aria-hidden="true">{{ feature.icon }}</span><h3>{{ feature.title }}</h3><p>{{ feature.text }}</p></article>}</div>
      </div></section>
      <section class="gcc-section wrap"><span class="gcc-eyebrow">USE CASES</span><h2>Built around the work your team does</h2>
        <div class="gcc-card-grid">@for (use of uses; track use.title) {<article class="gcc-card"><span class="material-symbols-outlined" aria-hidden="true">{{ use.icon }}</span><h3>{{ use.title }}</h3><p>{{ use.text }}</p></article>}</div>
      </section>
      <section class="gcc-section gcc-faq wrap"><span class="gcc-eyebrow">FAQ</span><h2>Frequently asked questions</h2>
        <div class="faqs">@for (faq of faqs; track faq.question) {<details name="media-faq"><summary>{{ faq.question }}</summary><p>{{ faq.answer }}</p></details>}</div>
      </section>
      <section class="wrap gcc-cta-wrap"><div class="gcc-cta"><div><h2>Plan your media cloud environment</h2><p>Share your applications, asset sizes and production schedule with our team.</p></div><button type="button" class="btn btn-primary" (click)="enquire()">Let's talk &#8594;</button></div></section>
    </main>
  `,
})
export class MediaEntertainmentPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  readonly features = [
    { icon: 'memory', title: 'Production compute', text: 'Size CPU and GPU resources around rendering, encoding, animation and visual effects workloads.' },
    { icon: 'folder_shared', title: 'Shared media storage', text: 'Plan storage capacity and access for source footage, project files, proxies and finished masters.' },
    { icon: 'desktop_windows', title: 'Remote creative workspaces', text: 'Explore cloud workstations for editors, artists and collaborators working across locations.' },
    { icon: 'shield', title: 'Controlled access', text: 'Define project permissions and secure sharing workflows for unreleased content and production assets.' },
    { icon: 'backup', title: 'Backup and archive', text: 'Set backup, retention and recovery requirements for active projects and completed productions.' },
    { icon: 'support_agent', title: 'Managed operations', text: 'Discuss migration, monitoring and ongoing infrastructure support with XcellHost.' },
  ];
  readonly uses = [
    { icon: 'movie', title: 'Film & post-production', text: 'Support editing, review, encoding and delivery workflows around your production requirements.' },
    { icon: 'animation', title: 'Animation & visual effects', text: 'Plan rendering capacity, artist workspaces and shared project storage for your studio.' },
    { icon: 'video_library', title: 'Digital media & publishing', text: 'Bring content libraries, publishing applications and distribution infrastructure into one cloud plan.' },
  ];
  readonly faqs = [
    { question: 'Can we use our existing creative applications?', answer: 'Share your software, versions and licensing requirements. We will review compatibility and infrastructure needs before proposing an environment.' },
    { question: 'How do you size media storage and compute?', answer: 'We start with your asset volumes, file formats, concurrent users, processing workloads and delivery schedule, then scope the required capacity.' },
    { question: 'Can you help protect unreleased content?', answer: 'Discuss access permissions, secure sharing, backup and recovery requirements with our team so these controls can be included in the design.' },
  ];
  constructor() {
    inject(SeoService).set('Media & Entertainment | XcellHost', 'Explore cloud infrastructure, production compute, shared media storage and backup for media and entertainment teams.', '/media-and-entertainment');
  }
  enquire(): void {
    this.topics.ask('Media & Entertainment');
    this.overlay.open('callback');
  }
}
