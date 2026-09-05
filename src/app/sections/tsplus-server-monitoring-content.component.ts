import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-tsplus-server-monitoring-content',
  standalone: true,
  templateUrl: './tsplus-server-monitoring-content.component.html',
  styleUrls: ['./vmc-content.component.css', './tsplus-server-monitoring-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusServerMonitoringContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly activeFeature = signal(0);

  selectFeature(index: number): void {
    this.activeFeature.set(index);
  }

  requestQuote(plan: string): void {
    this.topics.ask(`TSplus Server Monitoring — ${plan}`);
    this.overlay.open('callback');
  }
}
