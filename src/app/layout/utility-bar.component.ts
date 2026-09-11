import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { ThemeService } from '../core/theme.service';
import { SITE } from '../data/site.data';
import { LanguagePickerComponent } from './language-picker.component';

/**
 * The navy strip above the header: portal shortcuts on the left, phone number
 * and WhatsApp on the right. Numbers come from `SITE`.
 */
@Component({
  selector: 'xh-utility-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  templateUrl: './utility-bar.component.html',
  imports: [LanguagePickerComponent],
})
export class UtilityBarComponent implements AfterViewInit {
  readonly site = SITE;
  readonly theme = inject(ThemeService);
  readonly language = inject(LanguageService);
  readonly whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  ngAfterViewInit(): void {
    this.language.initGoogleTranslate('google_translate_element');
  }

  retryTranslation(): void {
    this.language.initGoogleTranslate('google_translate_element');
  }
}
