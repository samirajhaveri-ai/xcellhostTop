import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LanguageService } from './language.service';

describe('LanguageService custom picker integration', () => {
  let host: HTMLDivElement;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    host = document.createElement('div');
    host.id = 'google_translate_element';
    host.innerHTML = '<select class="goog-te-combo"><option value="">Select language</option><option value="hi">Hindi</option><option value="fr">French</option></select>';
    document.body.appendChild(host);
  });
  afterEach(() => { host.remove(); });

  it('exposes supported languages with native labels and English', () => {
    const service = TestBed.inject(LanguageService);
    service.initGoogleTranslate(host.id);
    expect(service.status()).toBe('ready');
    expect(service.options().map(item => item.code)).toEqual(['en', 'hi', 'fr']);
    expect(service.options()[1].nativeName).toBe('हिन्दी');
  });

  it('dispatches a provider change for a supported choice and rejects unknown codes', () => {
    const service = TestBed.inject(LanguageService);
    service.initGoogleTranslate(host.id);
    const select = host.querySelector('select')!;
    const change = jasmine.createSpy('change');
    select.addEventListener('change', change);
    service.choose('fr');
    expect(select.value).toBe('fr');
    expect(service.selected()).toBe('fr');
    expect(change).toHaveBeenCalledTimes(1);
    service.choose('invalid');
    expect(change).toHaveBeenCalledTimes(1);
  });
});
