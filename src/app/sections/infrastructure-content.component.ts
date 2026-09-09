import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

interface ArchitectureTab {
  key: 'security' | 'cloud' | 'data-center' | 'managed-security';
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
            <button
              class="infra-architecture-image-button"
              type="button"
              (click)="openImage(active)"
              [attr.aria-label]="'Zoom ' + active.title + ' image'"
            >
              <img [src]="active.image" [alt]="active.alt" loading="lazy" />
              <span aria-hidden="true">Zoom image</span>
            </button>
            <figcaption>{{ active.title }} — XcellHost infrastructure reference architecture.</figcaption>
          </figure>
        </article>
      </div>
    </section>

    @if (zoomedTab(); as zoomed) {
      <div
        class="infra-image-modal"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="zoomed.title + ' image preview'"
        (click)="closeImage()"
      >
        <div class="infra-image-modal-dialog" (click)="$event.stopPropagation()">
          <div class="infra-image-modal-header">
            <h3>{{ zoomed.title }}</h3>
            <button type="button" (click)="closeImage()" aria-label="Close image preview">&times;</button>
          </div>
          <div class="infra-image-modal-canvas">
            <img [src]="zoomed.image" [alt]="zoomed.alt" />
          </div>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfrastructureContentComponent {
  readonly activeTab = signal<ArchitectureTab['key']>('security');
  readonly zoomedTab = signal<ArchitectureTab | null>(null);
  readonly tabs: readonly ArchitectureTab[] = [
    {
      key: 'security',
      label: 'Security Architecture',
      title: 'Security Architecture',
      description: 'From the global network and DDoS protection to application security, monitoring and disaster recovery, each layer is designed to reduce risk without slowing your business down.',
      image: '/assets/images/infrastructure-security-architecture.jpg',
      alt: 'XcellHost security architecture diagram',
    },
    {
      key: 'cloud',
      label: 'Cloud Architecture',
      title: 'Cloud Architecture',
      description: 'Flexible compute, resilient storage and secure networking work together across our cloud platform so you can launch quickly, scale on demand and keep workloads available.',
      image: '/assets/images/infrastructure-cloud-architecture.jpg',
      alt: 'XcellHost cloud architecture diagram',
    },
    {
      key: 'data-center',
      label: 'Data Center',
      title: 'Data Center',
      description: 'Explore the resilient power, cooling, connectivity, physical security and operations behind XcellHost infrastructure at Equinix Mumbai data centers.',
      image: '/assets/images/infrastructure-data-center.jpeg',
      alt: 'Equinix Mumbai data center infrastructure overview',
    },
    {
      key: 'managed-security',
      label: 'Managed Security',
      title: 'Managed Security',
      description: 'See the XcellSecure managed security capabilities and the specialist SOC team structure that supports detection, response and ongoing protection.',
      image: '/assets/images/infrastructure-managed-security.jpg',
      alt: 'XcellSecure managed security capabilities and SOC team structure',
    },
  ];

  selectedTab(): ArchitectureTab {
    return this.tabs.find((tab) => tab.key === this.activeTab()) ?? this.tabs[0];
  }

  openImage(tab: ArchitectureTab): void {
    this.zoomedTab.set(tab);
  }

  closeImage(): void {
    this.zoomedTab.set(null);
  }

  @HostListener('document:keydown.escape')
  closeImageOnEscape(): void {
    this.closeImage();
  }
}
