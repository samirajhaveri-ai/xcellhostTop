import { TestBed } from '@angular/core/testing';
import { LanguagePickerComponent } from './language-picker.component';

describe('LanguagePickerComponent', () => {
  function setup() {
    const fixture = TestBed.createComponent(LanguagePickerComponent);
    fixture.componentRef.setInput('options', [
      { code: 'en', name: 'English', nativeName: 'English', region: 'International' },
      { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'India' },
      { code: 'fr', name: 'French', nativeName: 'Français', region: 'France' },
    ]);
    fixture.detectChanges();
    return fixture;
  }

  it('finds a language by its native name or region', () => {
    const fixture = setup();
    fixture.componentInstance.query.set('हिन्दी');
    expect(fixture.componentInstance.filtered().map(item => item.code)).toEqual(['hi']);
    fixture.componentInstance.query.set('france');
    expect(fixture.componentInstance.filtered().map(item => item.code)).toEqual(['fr']);
  });

  it('opens a modal and emits the selected language once before closing', () => {
    const fixture = setup();
    const selected = jasmine.createSpy('selected');
    fixture.componentInstance.selectLanguage.subscribe(selected);
    fixture.nativeElement.querySelector('.language-trigger').click();
    fixture.detectChanges();
    const dialog = fixture.nativeElement.querySelector('dialog') as HTMLDialogElement;
    expect(dialog.open).toBeTrue();
    fixture.nativeElement.querySelectorAll('.language-option')[1].click();
    expect(selected).toHaveBeenCalledOnceWith('hi');
    expect(dialog.open).toBeFalse();
  });

  it('disables translation choices when the provider is unavailable', () => {
    const fixture = setup();
    fixture.componentRef.setInput('status', 'error');
    fixture.detectChanges();
    const choices = fixture.nativeElement.querySelectorAll('.language-option') as NodeListOf<HTMLButtonElement>;
    expect(choices[0].disabled).toBeFalse();
    expect(choices[1].disabled).toBeTrue();
    expect(fixture.nativeElement.textContent).toContain('Try again');
  });
});
