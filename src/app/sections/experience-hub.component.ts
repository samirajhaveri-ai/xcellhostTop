import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-experience-hub',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="experience-hub" aria-labelledby="experience-hub-title">
      <div class="wrap">
        <div class="hub-heading">
          <div>
            <h2 id="experience-hub-title">XcellHost Cloud Marketplace</h2>
            <p>Build. Buy. Deploy. Explore cloud experiences, services and software with XcellHost.</p>
          </div>
        </div>
        <div class="hub-grid">
          <a class="hub-card hub-feature" routerLink="/explore-marketplace">
            <div class="hub-card-top"><span class="hub-label">COMPLETE CLOUD EXPERIENCES</span></div>
            <div class="cloud-scene" aria-hidden="true">
              <div class="scene-orbit orbit-one"></div><div class="scene-orbit orbit-two"></div>
              <span class="scene-chip chip-one material-symbols-outlined">database</span>
              <span class="scene-chip chip-two material-symbols-outlined">shield</span>
              <span class="scene-chip chip-three material-symbols-outlined">hub</span>
              <div class="scene-core"><span class="material-symbols-outlined">cloud</span><b>XCELLHOST</b><small>CONNECTED BY DESIGN</small></div>
              <div class="scene-base"></div>
            </div>
            <div class="hub-feature-copy"><span class="hub-mini">FROM IDEA TO EVERYDAY OPERATIONS</span><h3>Experiences</h3><p>Bring your applications, data and teams together with managed cloud experiences for your business.</p><span class="hub-link">Explore</span></div>
          </a>
          @for (card of cards; track card.title) {
            <a class="hub-card hub-small" [class]="'hub-card hub-small ' + card.theme" routerLink="/explore-marketplace">
              <div class="hub-card-top"><span class="hub-icon material-symbols-outlined" aria-hidden="true">{{ card.icon }}</span></div>
              <span class="hub-art material-symbols-outlined" aria-hidden="true">{{ card.art }}</span>
              <div class="hub-card-copy"><span class="hub-mini">{{ card.label }}</span><h3>{{ card.title }}</h3><p>{{ card.description }}</p><span class="hub-link">Explore</span></div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience-hub.component.css',
})
export class ExperienceHubComponent {
  readonly cards = [
    { title: 'AI Marketplace', label: 'INTELLIGENCE FOR YOUR BUSINESS', description: 'Explore AI solutions for smarter everyday work.', icon: 'auto_awesome', art: 'neurology', theme: 'hub-ai' },
    { title: 'Managed Services', label: 'EXPERTS BY YOUR SIDE', description: 'Keep your cloud running with expert support.', icon: 'support_agent', art: 'headset_mic', theme: 'hub-managed' },
    { title: 'Software License', label: 'EQUIP YOUR TEAM', description: 'Find the software your business needs.', icon: 'apps', art: 'verified_user', theme: 'hub-licenses' },
    { title: 'Professional Services', label: 'PLAN. IMPLEMENT. GROW.', description: 'Get expert guidance for your next project.', icon: 'person', art: 'extension', theme: 'hub-professional' },
    { title: 'Accelerators', label: 'MOVE YOUR IDEAS FORWARD', description: 'Find a faster path from planning to delivery.', icon: 'rocket_launch', art: 'rocket_launch', theme: 'hub-accelerators' },
    { title: 'Explore Marketplace', label: 'DISCOVER YOUR NEXT SOLUTION', description: 'Browse our curated products and offers.', icon: 'shopping_bag', art: 'shopping_bag', theme: 'hub-souq' },
    { title: 'Alliances', label: 'STRONGER TOGETHER', description: 'Connect with our partner ecosystem.', icon: 'groups', art: 'handshake', theme: 'hub-alliances' },
  ];
}
