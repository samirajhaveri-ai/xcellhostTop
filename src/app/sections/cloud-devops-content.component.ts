import { ChangeDetectionStrategy, Component, output } from '@angular/core';

/** Selected Cloud DevOps sections from the supplied reference. */
@Component({
  selector: 'xh-cloud-devops-content',
  standalone: true,
  templateUrl: './cloud-devops-content.component.html',
  styleUrl: './cloud-devops-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudDevopsContentComponent {
  readonly quoteRequested = output<Event>();

  requestQuote(event: Event): void {
    event.preventDefault();
    this.quoteRequested.emit(event);
  }
}
