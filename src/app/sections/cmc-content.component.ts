import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-cmc-content',
  standalone: true,
  templateUrl: './cmc-content.component.html',
  styleUrl: './vmc-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmcContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  requestQuote(term: string): void {
    this.topics.ask(`DigiCert Common Mark Certificate — ${term}`);
    this.overlay.open('callback');
  }
}
