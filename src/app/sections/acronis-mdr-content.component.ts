import { ChangeDetectionStrategy, Component, output } from '@angular/core';
@Component({
  selector: 'xh-acronis-mdr-content', standalone: true,
  templateUrl: './acronis-mdr-content.component.html',
  styleUrl: './acronis-mdr-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisMdrContentComponent {
  readonly quoteRequested = output<Event>();
  requestQuote(event: Event): void { event.preventDefault(); this.quoteRequested.emit(event); }
}
