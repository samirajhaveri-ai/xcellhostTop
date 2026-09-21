import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'xh-copilot-studio-content',
  standalone: true,
  templateUrl: './copilot-studio-content.component.html',
  styleUrls: ['./copilot-studio-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopilotStudioContentComponent {
  readonly mode = input<'hero' | 'content'>('content');
  readonly activeFeature = signal(0);

  selectFeature(index: number): void {
    this.activeFeature.set(index);
  }
}
