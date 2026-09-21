import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'xh-copilot-training-content',
  standalone: true,
  templateUrl: './copilot-training-content.component.html',
  styleUrl: './copilot-training-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopilotTrainingContentComponent {
  readonly trainingRequested = output<Event>();

  requestTraining(event: Event): void {
    event.preventDefault();
    this.trainingRequested.emit(event);
  }
}
