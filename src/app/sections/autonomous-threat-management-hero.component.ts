import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-autonomous-threat-management-hero',
  standalone: true,
  templateUrl: './autonomous-threat-management-hero.component.html',
  styleUrl: './autonomous-threat-management-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutonomousThreatManagementHeroComponent {
  readonly agents = [
    ['ASM agent', 'Infrastructure risk', '⌕'],
    ['DMARC+ agent', 'Infrastructure risk', '✉'],
    ['SOC agent', 'Infrastructure risk', '▦'],
    ['Brand agent', 'Brand risk', '◉'],
    ['Dark-web agent', 'Brand risk', '⌁'],
    ['Takedown agent', 'Brand risk', '↯'],
    ['Third-party agent', 'Relationship risk', '∞'],
    ['Vendor agent', 'Relationship risk', '▤'],
    ['Human-risk agent', 'People risk', '♙'],
  ] as const;
}
