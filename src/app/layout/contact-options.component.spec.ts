import { TestBed } from '@angular/core/testing';
import { ContactOptionsComponent } from './contact-options.component';

describe('Newsletter Zoho submission', () => {
  function setup() {
    const fixture = TestBed.createComponent(ContactOptionsComponent);
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    const submit = spyOn(form, 'submit');
    return { fixture, form, submit };
  }

  it('blocks invalid email addresses before posting to Zoho', () => {
    const { fixture, form, submit } = setup();
    fixture.componentInstance.form.controls.email.setValue('invalid');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(submit).not.toHaveBeenCalled();
    expect(fixture.componentInstance.emailInvalid()).toBeTrue();
    expect(fixture.componentInstance.message()).toContain('valid email');
  });

  it('posts the trimmed email using the exported Zoho field names', () => {
    const { fixture, form, submit } = setup();
    fixture.componentInstance.form.controls.email.setValue('  subscriber@example.com  ');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(submit).toHaveBeenCalledTimes(1);
    expect(form.action).toBe('https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/NewsletterSubscriptionForm/formperma/ZFO74kn3xfRonRDRy3zFBSIcG82fsKdLTBd2toT0wPM/htmlRecords/submit');
    expect(form.method).toBe('post');
    expect(form.enctype).toBe('multipart/form-data');
    expect(form.target).toBe('_blank');
    const payload = new FormData(form);
    expect(payload.get('Email')).toBe('subscriber@example.com');
    expect(payload.get('zf_referrer_name')).toBe(document.location.href);
    expect(payload.get('zf_redirect_url')).toBe('');
    expect(payload.has('zc_gad')).toBeTrue();
    expect(fixture.componentInstance.done()).toBeFalse();
  });

  it('retains the email and offers a retry when native submission fails', () => {
    const { fixture, form, submit } = setup();
    fixture.componentInstance.form.controls.email.setValue('subscriber@example.com');
    submit.and.throwError('Submission unavailable');
    fixture.componentInstance.submit(form);
    expect(fixture.componentInstance.form.controls.email.value).toBe('subscriber@example.com');
    expect(fixture.componentInstance.message()).toContain('Please try again');
  });
});
