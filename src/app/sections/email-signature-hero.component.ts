import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xh-email-signature-hero',
  standalone: true,
  templateUrl: './email-signature-hero.component.html',
  styleUrls: ['./email-signature-shared.css', './email-signature-hero.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSignatureHeroComponent {}
