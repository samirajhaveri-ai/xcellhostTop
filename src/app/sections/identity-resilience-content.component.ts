import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-identity-resilience-content',
  standalone: true,
  templateUrl: './identity-resilience-content.component.html',
  styleUrl: './identity-resilience-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityResilienceContentComponent {
  readonly activeTab = signal(0);
}
