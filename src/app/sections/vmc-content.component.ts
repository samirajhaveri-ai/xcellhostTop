import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-vmc-content',
  standalone: true,
  templateUrl: './vmc-content.component.html',
  styleUrl: './vmc-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VmcContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  requestQuote(term: string): void {
    this.topics.ask(`DigiCert Verified Mark Certificate — ${term}`);
    this.overlay.open('callback');
  }
}
