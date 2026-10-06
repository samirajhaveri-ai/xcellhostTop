import { fakeAsync, TestBed, tick } from '@angular/core/testing';
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
    expect(form.target).toBe('newsletter-response');
    const payload = new FormData(form);
    expect(payload.get('Email')).toBe('subscriber@example.com');
    expect(payload.get('zf_referrer_name')).toBe(document.location.href);
    expect(String(payload.get('zf_redirect_url'))).toContain('/newsletter-subscription-success.html?submission=');
    expect(payload.has('zc_gad')).toBeTrue();
    expect(fixture.componentInstance.done()).toBeFalse();
    expect(fixture.componentInstance.sending()).toBeTrue();
    fixture.destroy();
  });

  it('shows confirmation below the form only after the success callback loads', () => {
    const { fixture, form, submit } = setup();
    const component = fixture.componentInstance;
    component.form.controls.email.setValue('subscriber@example.com');
    component.submit(form);
    component.submit(form);
    expect(submit).toHaveBeenCalledTimes(1);
    fixture.detectChanges();
    expect(form.querySelector('button')?.disabled).toBeTrue();
    component.checkSubmission({ contentWindow: { location: { href: 'about:blank' } } } as HTMLIFrameElement);
    expect(component.done()).toBeFalse();
    const callbackUrl = (form.elements.namedItem('zf_redirect_url') as HTMLInputElement).value;
    component.checkSubmission({ contentWindow: { location: { href: callbackUrl } } } as HTMLIFrameElement);
    fixture.detectChanges();
    const message = fixture.nativeElement.querySelector('#newsletter-message') as HTMLElement;
    expect(message.textContent?.trim()).toBe('Thank you for subscribing!');
    expect(message.classList.contains('success')).toBeTrue();
    expect(message.previousElementSibling).toBe(form);
    expect(message.nextElementSibling?.classList.contains('newsletter-socials')).toBeTrue();
    expect(component.form.controls.email.value).toBe('');
    expect(component.sending()).toBeFalse();
    fixture.destroy();
  });

  it('does not report success for an inaccessible Zoho page or a timeout', fakeAsync(() => {
    const { fixture, form } = setup();
    const component = fixture.componentInstance;
    component.form.controls.email.setValue('subscriber@example.com');
    component.submit(form);
    const frame = { get contentWindow() { throw new Error('Cross-origin frame'); } };
    component.checkSubmission(frame as unknown as HTMLIFrameElement);
    expect(component.done()).toBeFalse();
    tick(30000);
    expect(component.sending()).toBeFalse();
    expect(component.done()).toBeFalse();
    expect(component.message()).toContain('could not confirm');
    expect(component.form.controls.email.value).toBe('subscriber@example.com');
    fixture.destroy();
  }));

  it('retains the email and offers a retry when native submission fails', () => {
    const { fixture, form, submit } = setup();
    fixture.componentInstance.form.controls.email.setValue('subscriber@example.com');
    submit.and.throwError('Submission unavailable');
    fixture.componentInstance.submit(form);
    expect(fixture.componentInstance.form.controls.email.value).toBe('subscriber@example.com');
    expect(fixture.componentInstance.message()).toContain('Please try again');
  });
});
