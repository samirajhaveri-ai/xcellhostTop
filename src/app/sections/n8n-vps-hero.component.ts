import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'xh-n8n-vps-hero',
  standalone: true,
  templateUrl: './n8n-vps-hero.component.html',
  styleUrl: './n8n-vps-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class N8nVpsHeroComponent {
  readonly infosheetUrl = input.required<string>();
  readonly presentationRequested = output<Event>();
  readonly tourRequested = output<void>();
  readonly talkRequested = output<Event>();

  requestPresentation(event: Event): void {
    event.preventDefault();
    this.presentationRequested.emit(event);
  }

  requestTour(): void {
    this.tourRequested.emit();
  }

  requestTalk(event: Event): void {
    event.preventDefault();
    this.talkRequested.emit(event);
  }
}
