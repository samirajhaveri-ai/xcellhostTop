import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'xh-edr-seo-content',
  standalone: true,
  templateUrl: './edr-seo-content.component.html',
  styleUrl: './edr-seo-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdrSeoContentComponent {
  readonly variant = input.required<'acronis' | 'scrutiny'>();
}
