import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type HigherEducationHeroAction = 'presentation' | 'tour' | 'trial' | 'callback';

@Component({
  selector: 'xh-higher-education-hero-copy',
  standalone: true,
  templateUrl: './higher-education-hero-copy.component.html',
  styleUrl: './higher-education-hero-copy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HigherEducationHeroCopyComponent {
  readonly infosheetUrl = input.required<string>();
  readonly actionRequested = output<HigherEducationHeroAction>();
}
