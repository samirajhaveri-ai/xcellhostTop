import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-ediscovery-compliance-content',
  standalone: true,
  templateUrl: './ediscovery-compliance-content.component.html',
  styleUrl: './identity-resilience-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdiscoveryComplianceContentComponent {
  readonly activeTab = signal(0);
}
