import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-copilot-studio-content',
  standalone: true,
  templateUrl: './copilot-studio-content.component.html',
  styleUrls: ['./copilot-studio-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopilotStudioContentComponent {
  readonly activeFeature = signal(0);
}
