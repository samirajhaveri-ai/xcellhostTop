import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { ThemeService } from '../core/theme.service';
import { SITE } from '../data/site.data';

/**
 * The navy strip above the header: portal shortcuts on the left, phone number
 * and WhatsApp on the right. Numbers come from `SITE`.
 */
@Component({
  selector: 'xh-utility-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  templateUrl: './utility-bar.component.html',
})
export class UtilityBarComponent {
  readonly site = SITE;
  readonly theme = inject(ThemeService);
  readonly language = inject(LanguageService);
  readonly whatsappHref = `https://wa.me/${SITE.whatsapp}`;
}
