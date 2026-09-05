import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-tsplus-remote-access-content',
  standalone: true,
  templateUrl: './tsplus-remote-access-content.component.html',
  styleUrls: ['./vmc-content.component.css', './tsplus-server-monitoring-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusRemoteAccessContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  requestQuote(plan: string): void {
    this.topics.ask(`TSplus Remote Access — ${plan}`);
    this.overlay.open('callback');
  }
}
