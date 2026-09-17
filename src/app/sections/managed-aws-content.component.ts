import { InsightsSectionComponent } from './insights-section.component';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-managed-aws-content',
  standalone: true,
  imports: [InsightsSectionComponent],
  templateUrl: './managed-aws-content.component.html',
  styleUrls: ['./managed-aws-content.component.css', './managed-cloud-faq.component.css', './managed-azure-ending.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedAwsContentComponent {
  readonly provider = input<'AWS' | 'Azure'>('AWS');
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  requestCallback(): void {
    this.topics.ask(`Managed ${this.provider()} Services`);
    this.overlay.open('callback');
  }
}
