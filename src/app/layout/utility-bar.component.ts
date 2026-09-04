import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService, SITE_LANGUAGES, SiteLanguage } from '../core/language.service';
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
export class UtilityBarComponent implements AfterViewInit {
  readonly site = SITE;
  readonly theme = inject(ThemeService);
  readonly language = inject(LanguageService);
  readonly languages = SITE_LANGUAGES;
  readonly languageMenuOpen = signal(false);
  readonly whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  ngAfterViewInit(): void {
    this.language.initGoogleTranslate('google_translate_element');
  }

  chooseLanguage(code: SiteLanguage): void {
    this.languageMenuOpen.set(false);
    this.language.select(code);
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen.update((open) => !open);
  }
}
