import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'xh-infrastructure-hero',
  standalone: true,
  templateUrl: './infrastructure-hero.component.html',
  styleUrl: './infrastructure-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfrastructureHeroComponent {
  @Output() readonly talkRequested = new EventEmitter<Event>();
  @Output() readonly trialRequested = new EventEmitter<Event>();
  @Output() readonly tourRequested = new EventEmitter<void>();
}
