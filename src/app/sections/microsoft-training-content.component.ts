import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'xh-microsoft-training-content',
  standalone: true,
  templateUrl: './microsoft-training-content.component.html',
  styleUrl: './microsoft-training-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MicrosoftTrainingContentComponent {
  readonly trainingRequested = output<Event>();

  requestTraining(event: Event): void {
    event.preventDefault();
    this.trainingRequested.emit(event);
  }
}
