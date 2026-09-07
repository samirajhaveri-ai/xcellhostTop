import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ArchitectureTab {
  key: 'security' | 'cloud';
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'xh-infrastructure-content',
  standalone: true,
  template: `
    <section class="infra-architecture" aria-labelledby="infraArchitectureTitle">
      <div class="infra-architecture-heading">
        <div class="pp-sec">Infrastructure architecture</div>
        <h2 id="infraArchitectureTitle">Built for secure, reliable cloud workloads</h2>
        <p>Explore the layered architecture behind XcellHost infrastructure and the controls that keep every workload available, protected and ready to scale.</p>
      </div>

      <div class="infra-architecture-layout">
        <div class="infra-architecture-tabs" role="tablist" aria-label="Infrastructure architecture views">
          @for (tab of tabs; track tab.key) {
            <button
              type="button"
              role="tab"
              [class.is-active]="activeTab() === tab.key"
              [attr.aria-selected]="activeTab() === tab.key"
              [attr.aria-controls]="'infra-panel-' + tab.key"
              (click)="activeTab.set(tab.key)"
            >{{ tab.label }}</button>
          }
        </div>

        @let active = selectedTab();
        <article class="infra-architecture-panel" [id]="'infra-panel-' + active.key" role="tabpanel">
          <div class="infra-architecture-copy">
            <span class="infra-architecture-kicker">{{ active.label }}</span>
            <h3>{{ active.title }}</h3>
            <p>{{ active.description }}</p>
          </div>
          <figure class="infra-architecture-figure">
            <img [src]="active.image" [alt]="active.alt" loading="lazy" />
            <figcaption>{{ active.title }} — XcellHost infrastructure reference architecture.</figcaption>
          </figure>
        </article>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfrastructureContentComponent {
  readonly activeTab = signal<ArchitectureTab['key']>('security');
  readonly tabs: readonly ArchitectureTab[] = [
    {
      key: 'security',
      label: 'Infrastructure',
      title: 'Security Architecture',
      description: 'From the global network and DDoS protection to application security, monitoring and disaster recovery, each layer is designed to reduce risk without slowing your business down.',
      image: '/assets/images/infrastructure-security-architecture.jpg',
      alt: 'XcellHost security architecture diagram',
    },
    {
      key: 'cloud',
      label: 'Infrastructure',
      title: 'Cloud Architecture',
      description: 'Flexible compute, resilient storage and secure networking work together across our cloud platform so you can launch quickly, scale on demand and keep workloads available.',
      image: '/assets/images/infrastructure-cloud-architecture.jpg',
      alt: 'XcellHost cloud architecture diagram',
    },
  ];

  selectedTab(): ArchitectureTab {
    return this.tabs.find((tab) => tab.key === this.activeTab()) ?? this.tabs[0];
  }
}
