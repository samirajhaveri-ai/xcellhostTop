import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-imunify360-followup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './imunify360-followup.component.html',
  styleUrl: './imunify360-followup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Imunify360FollowupComponent {
  readonly consultationRequested = output<string>();
  requestConsultation(event: Event): void {
    event.preventDefault();
    this.consultationRequested.emit('Server security consultation');
  }
}
