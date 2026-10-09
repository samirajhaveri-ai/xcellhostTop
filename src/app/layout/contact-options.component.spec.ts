import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ContactOptionsComponent } from './contact-options.component';

describe('Newsletter Zoho submission', () => {
  const storageKey = 'xcellhost.newsletter.confirmed-emails.v1';
  beforeEach(() => localStorage.removeItem(storageKey));
  afterEach(() => localStorage.removeItem(storageKey));
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

  function confirm(component: ContactOptionsComponent, form: HTMLFormElement) {
    const href = (form.elements.namedItem('zf_redirect_url') as HTMLInputElement).value;
    component.checkSubmission({ contentWindow: { location: { href } } } as HTMLIFrameElement);
  }

  it('blocks the same confirmed email with different casing and spaces after recreation', () => {
    const first = setup();
    first.fixture.componentInstance.form.controls.email.setValue('Subscriber@example.com');
    first.fixture.componentInstance.submit(first.form);
    confirm(first.fixture.componentInstance, first.form);
    first.fixture.destroy();

    const second = setup();
    second.fixture.componentInstance.form.controls.email.setValue('  SUBSCRIBER@example.com  ');
    second.fixture.componentInstance.submit(second.form);
    second.fixture.detectChanges();
    expect(second.submit).not.toHaveBeenCalled();
    expect(second.fixture.componentInstance.message()).toBe('This email address is already subscribed.');
    expect(second.fixture.componentInstance.done()).toBeFalse();
    expect(second.fixture.componentInstance.sending()).toBeFalse();
    second.fixture.componentInstance.form.controls.email.setValue('other@example.com');
    second.fixture.componentInstance.submit(second.form);
    expect(second.submit).toHaveBeenCalledTimes(1);
    second.fixture.destroy();
  });

  it('allows retry after an unconfirmed submission times out', fakeAsync(() => {
    const { fixture, form, submit } = setup();
    fixture.componentInstance.form.controls.email.setValue('retry@example.com');
    fixture.componentInstance.submit(form);
    tick(30000);
    fixture.componentInstance.submit(form);
    expect(submit).toHaveBeenCalledTimes(2);
    fixture.destroy();
  }));

  it('remembers the submitted email even if the control changes before confirmation', () => {
    const { fixture, form, submit } = setup();
    const component = fixture.componentInstance;
    component.form.controls.email.setValue('sent@example.com');
    component.submit(form);
    component.form.controls.email.setValue('changed@example.com');
    confirm(component, form);
    component.form.controls.email.setValue('sent@example.com');
    component.submit(form);
    expect(submit).toHaveBeenCalledTimes(1);
    fixture.destroy();
  });

  it('still confirms and blocks repeats when browser storage is unavailable', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('Storage blocked');
    spyOn(Storage.prototype, 'setItem').and.throwError('Storage blocked');
    const { fixture, form, submit } = setup();
    const component = fixture.componentInstance;
    component.form.controls.email.setValue('subscriber@example.com');
    component.submit(form);
    confirm(component, form);
    expect(component.done()).toBeTrue();
    component.form.controls.email.setValue('subscriber@example.com');
    component.submit(form);
    expect(submit).toHaveBeenCalledTimes(1);
    fixture.destroy();
  });

  it('ignores malformed saved data and does not cache failed submissions', () => {
    localStorage.setItem(storageKey, '{broken');
    const { fixture, form, submit } = setup();
    submit.and.throwError('Submission unavailable');
    fixture.componentInstance.form.controls.email.setValue('subscriber@example.com');
    fixture.componentInstance.submit(form);
    submit.and.stub();
    fixture.componentInstance.submit(form);
    expect(submit).toHaveBeenCalledTimes(2);
    fixture.destroy();
  });
});
