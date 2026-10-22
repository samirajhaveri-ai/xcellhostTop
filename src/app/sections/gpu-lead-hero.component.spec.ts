import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GpuLeadHeroComponent } from './gpu-lead-hero.component';

describe('GPU lead Zoho mapping', () => {
  let post: jasmine.Spy;
  const storageKey = 'xcellhost.gpu.confirmed-emails.v1';

  beforeEach(() => {
    localStorage.removeItem(storageKey);
    post = spyOn(HTMLFormElement.prototype, 'submit');
  });
  afterEach(() => localStorage.removeItem(storageKey));

  function setup(slug = 'nvidia-l40s') {
    const fixture = TestBed.createComponent(GpuLeadHeroComponent);
    fixture.componentRef.setInput('slug', slug);
    fixture.componentRef.setInput('productName', slug);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.name = '  Sujeet   Vishwakarma  ';
    component.phone = '98765 43210';
    component.email = '  customer@example.com  ';
    return { fixture, component };
  }

  function submission() {
    const form = post.calls.mostRecent().object as HTMLFormElement;
    const frame = Array.from(document.querySelectorAll('iframe')).find(frame => frame.name === form.target)!;
    return { form, frame, data: new FormData(form) };
  }

  function confirm(frame: HTMLIFrameElement, url: string) {
    spyOnProperty(frame, 'contentWindow', 'get').and.returnValue({ location: { href: url } } as Window);
    frame.dispatchEvent(new Event('load'));
  }

  it('posts exact Zoho field names without altering the visible form', () => {
    const { fixture, component } = setup();
    component.submit();
    const { form, frame, data } = submission();
    expect(form.action).toBe('https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/GPUServer/formperma/rm-hrBAR3Ey-GbjL9pBjRSRssayZRmJhX7gTcGKsxlI/htmlRecords/submit');
    expect(form.method).toBe('post');
    expect(form.enctype).toBe('multipart/form-data');
    expect(form.acceptCharset).toBe('UTF-8');
    expect(data.get('Name_First')).toBe('Sujeet');
    expect(data.get('Name_Last')).toBe('Vishwakarma');
    expect(data.get('PhoneNumber_countrycode')).toBe('+919876543210');
    expect(data.get('Email')).toBe('customer@example.com');
    expect(data.get('zf_referrer_name')).toBe(document.location.href);
    expect(data.has('zc_gad')).toBeTrue();
    expect(String(data.get('zf_redirect_url'))).toContain('/gpu-lead-success.html?submission=');
    expect(form.hidden).toBeTrue();
    expect(frame.hidden).toBeTrue();
    expect(frame.contentWindow?.name).toBe(form.target);
    expect(frame.sandbox.contains('allow-top-navigation')).toBeFalse();
    expect(frame.sandbox.contains('allow-popups')).toBeFalse();
    const inputs = fixture.nativeElement.querySelectorAll('form input');
    expect(Array.from(inputs as NodeListOf<HTMLInputElement>).map(input => input.name)).toEqual(['name', 'phone', 'email']);
    expect(component.submitted()).toBeFalse();
    fixture.destroy();
    expect(frame.isConnected).toBeFalse();
    expect(form.isConnected).toBeFalse();
  });

  it('keeps single names and international phone numbers intact on other GPU pages', () => {
    const { fixture, component } = setup('nvidia-h100');
    component.name = 'Alex';
    component.phone = '+44 7700 900123';
    component.submit();
    const { data } = submission();
    expect(data.get('Name_First')).toBe('Alex');
    expect(data.get('Name_Last')).toBe('');
    expect(data.get('PhoneNumber_countrycode')).toBe('+447700900123');
    fixture.destroy();
  });

  it('shows an image flag and changes the country code through the native selector', fakeAsync(() => {
    const { fixture, component } = setup();
    tick();
    fixture.detectChanges();
    const flag = fixture.nativeElement.querySelector('.gpu-country-picker img') as HTMLImageElement;
    const selector = fixture.nativeElement.querySelector('select[name=phoneCountry]') as HTMLSelectElement;
    expect(flag.src).toBe('https://flagcdn.com/w40/in.png');
    expect(fixture.nativeElement.querySelector('.gpu-dial-code').textContent.trim()).toBe('+91');
    expect(selector.options.length).toBeGreaterThan(200);
    selector.value = 'gb';
    selector.dispatchEvent(new Event('change'));
    tick();
    fixture.detectChanges();
    expect(flag.src).toBe('https://flagcdn.com/w40/gb.png');
    expect(fixture.nativeElement.querySelector('.gpu-dial-code').textContent.trim()).toBe('+44');
    component.phone = '07700 900123';
    component.submit();
    expect(submission().data.get('PhoneNumber_countrycode')).toBe('+447700900123');
    fixture.destroy();
  }));

  for (const [country, phone, expected] of [
    ['us', '202 555 0123', '+12025550123'],
    ['ca', '416 555 0123', '+14165550123'],
    ['ae', '050 123 4567', '+971501234567'],
    ['sg', '8123 4567', '+6581234567'],
    ['it', '06 1234 5678', '+390612345678'],
    ['gb', '+44 7700 900123', '+447700900123'],
    ['gb', '0044 7700 900123', '+447700900123'],
    ['in', '91 98765 43210', '+919876543210'],
  ]) {
    it(`sends the complete ${country.toUpperCase()} phone number to Zoho: ${phone}`, () => {
      const { fixture, component } = setup();
      component.countryCode.set(country);
      component.phone = phone;
      component.submit();
      expect(submission().data.get('PhoneNumber_countrycode')).toBe(expected);
      fixture.destroy();
    });
  }

  it('rejects phone numbers with letters or too many international digits', () => {
    const { fixture, component } = setup();
    for (const phone of ['123abc456', '+1234567890123456', '123']) {
      component.phone = phone;
      component.submit();
      expect(post).not.toHaveBeenCalled();
      expect(component.error()).toContain('valid phone number');
    }
    fixture.destroy();
  });

  it('blocks invalid details and repeated clicks while a request is pending', () => {
    const { fixture, component } = setup();
    component.email = 'invalid';
    component.submit();
    expect(post).not.toHaveBeenCalled();
    expect(component.error()).toContain('valid phone number and work email');
    component.email = 'customer@example.com';
    component.submit();
    component.submit();
    expect(post).toHaveBeenCalledTimes(1);
    expect(component.submitting()).toBeTrue();
    fixture.destroy();
  });

  it('shows the existing success state only when Zoho returns to the exact callback', () => {
    const { fixture, component } = setup();
    component.submit();
    const { frame, data } = submission();
    frame.dispatchEvent(new Event('load'));
    expect(component.submitted()).toBeFalse();
    confirm(frame, String(data.get('zf_redirect_url')));
    fixture.detectChanges();
    expect(component.submitted()).toBeTrue();
    expect(component.submitting()).toBeFalse();
    expect(fixture.nativeElement.querySelector('.gpu-lead-success').textContent).toContain('Request received');
    expect(frame.isConnected).toBeFalse();
    component.submit();
    expect(post).toHaveBeenCalledTimes(1);
    fixture.destroy();
  });

  it('preserves details and allows retry when a Zoho response cannot be confirmed', fakeAsync(() => {
    const { fixture, component } = setup();
    component.submit();
    const { frame } = submission();
    spyOnProperty(frame, 'contentWindow', 'get').and.throwError('Cross-origin Zoho page');
    frame.dispatchEvent(new Event('load'));
    expect(component.submitted()).toBeFalse();
    tick(30000);
    expect(component.submitting()).toBeFalse();
    expect(component.error()).toContain('could not confirm');
    expect(component.email).toBe('  customer@example.com  ');
    expect(frame.isConnected).toBeFalse();
    component.submit();
    expect(post).toHaveBeenCalledTimes(2);
    fixture.destroy();
  }));

  it('recovers from submission errors and isolates simultaneous GPU form instances', () => {
    const first = setup();
    post.and.throwError('Cannot submit');
    first.component.submit();
    expect(first.component.error()).toContain('could not submit');
    expect(first.component.submitting()).toBeFalse();
    post.and.stub();
    first.component.submit();
    const firstPost = submission();
    const second = setup('nvidia-a100');
    second.component.submit();
    const secondPost = submission();
    expect(firstPost.form.target).not.toBe(secondPost.form.target);
    confirm(firstPost.frame, String(firstPost.data.get('zf_redirect_url')));
    expect(first.component.submitted()).toBeTrue();
    expect(second.component.submitted()).toBeFalse();
    expect(second.component.submitting()).toBeTrue();
    first.fixture.destroy();
    second.fixture.destroy();
  });

  it('blocks confirmed emails after recreation across GPU pages regardless of casing and spaces', () => {
    const first = setup();
    first.component.submit();
    const { frame, data } = submission();
    confirm(frame, String(data.get('zf_redirect_url')));
    first.fixture.destroy();
    TestBed.resetTestingModule();

    const second = setup('nvidia-a100');
    second.component.email = '  CUSTOMER@EXAMPLE.COM  ';
    second.component.submit();
    second.fixture.detectChanges();
    expect(post).toHaveBeenCalledTimes(1);
    expect(second.component.submitting()).toBeFalse();
    expect(second.fixture.nativeElement.querySelector('.gpu-form-error').textContent)
      .toBe('You have already applied with this email address.');
    second.component.email = 'another@example.com';
    second.component.submit();
    expect(post).toHaveBeenCalledTimes(2);
    second.fixture.destroy();
  });

  it('remembers the email actually sent even if the user edits the field while waiting', () => {
    const first = setup();
    first.component.submit();
    const { frame, data } = submission();
    first.component.email = 'changed@example.com';
    confirm(frame, String(data.get('zf_redirect_url')));
    const second = setup();
    second.component.submit();
    expect(post).toHaveBeenCalledTimes(1);
    second.component.email = 'changed@example.com';
    second.component.submit();
    expect(post).toHaveBeenCalledTimes(2);
    first.fixture.destroy();
    second.fixture.destroy();
  });

  it('still prevents repeats across GPU forms during the session when storage is blocked', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('Storage unavailable');
    spyOn(Storage.prototype, 'setItem').and.throwError('Storage unavailable');
    const first = setup();
    first.component.submit();
    const { frame, data } = submission();
    confirm(frame, String(data.get('zf_redirect_url')));
    const second = setup('nvidia-h100');
    second.component.submit();
    expect(post).toHaveBeenCalledTimes(1);
    expect(second.component.error()).toContain('already applied');
    first.fixture.destroy();
    second.fixture.destroy();
  });

  it('ignores malformed storage and does not remember failed requests', () => {
    localStorage.setItem(storageKey, '{broken');
    const { fixture, component } = setup();
    post.and.throwError('Cannot submit');
    component.submit();
    expect(component.submitting()).toBeFalse();
    post.and.stub();
    component.submit();
    expect(post).toHaveBeenCalledTimes(2);
    expect(component.error()).toBe('');
    fixture.destroy();
  });
});
