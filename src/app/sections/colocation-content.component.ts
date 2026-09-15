import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-colocation-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './colocation-content.component.html',
  styleUrl: './colocation-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColocationContentComponent {
  readonly securityLayer = signal(0);
  readonly plans = ["Colo 1U","Colo 2U","Colo 4U","Quarter Rack","Half Rack","Full Rack","Full Rack+"];
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  requestPlan(index: number): void { this.requestCallback(this.plans[index]); }
  requestCallback(plan?: string): void {
    this.topics.ask(plan ? 'Co-Location: ' + plan : 'Co-Location');
    this.overlay.open('callback');
  }
}
