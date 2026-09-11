import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-reseller-program-content',
  standalone: true,
  templateUrl: './reseller-program-content.component.html',
  styleUrls: ['./vmc-content.component.css', './reseller-program-content.component.css', './reseller-program-spacing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResellerProgramContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  apply(): void {
    this.topics.ask('XcellHost Reseller Program application');
    this.overlay.open('callback');
  }
}
