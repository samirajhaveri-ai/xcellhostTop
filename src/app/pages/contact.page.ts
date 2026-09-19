import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';

interface ContactOffice {
  city: string;
  country: string;
  label: string;
  company: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  mapUrl: SafeResourceUrl;
  directionsUrl: string;
}

@Component({
  selector: 'xh-contact-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage implements AfterViewInit, OnDestroy {
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly timers: number[] = [];

  readonly offices: readonly ContactOffice[] = [
    this.createOffice({
      city: 'Mumbai',
      country: 'India',
      label: 'Head office',
      company: 'XcellHost Cloud Services Pvt. Ltd.',
      address: '209, Laxmi Plaza, Building No. 9, Laxmi Industrial Estate, Andheri West, Mumbai 400053, Maharashtra, India',
      phoneDisplay: '+91 22 6711 1555',
      phoneHref: '+912267111555',
      email: 'sales@xcellhost.cloud',
    }),
    this.createOffice({
      city: 'Bangalore',
      country: 'India',
      label: 'India office',
      company: 'XcellHost Cloud Services Pvt. Ltd.',
      address: 'Janardhan Towers, First Floor, A Wing, #562/640, Bilekahalli, Bannerghatta Road, Bangalore 560076, Karnataka, India',
      phoneDisplay: '+91 22 6711 1555',
      phoneHref: '+912267111555',
      email: 'sales@xcellhost.cloud',
    }),
    this.createOffice({
      city: 'Dubai',
      country: 'UAE',
      label: 'Middle East office',
      company: 'Virtue Cloud & IT Solutions LLC',
      address: '102-16, 1st Floor, CBD Bank Building, Al Mankhool, Dubai, United Arab Emirates',
      phoneDisplay: '+971 4 341 3811 · +971 58 594 1802',
      phoneHref: '+97143413811',
      email: 'yogendra@xcellhost.cloud',
    }),
    this.createOffice({
      city: 'Singapore',
      country: 'Singapore',
      label: 'Asia office',
      company: 'XcellHost Cloud Services Pte. Ltd.',
      address: '320 Serangoon Road, Serangoon Plaza #04-46, Singapore 218108',
      phoneDisplay: '+91 22 6711 1555',
      phoneHref: '+912267111555',
      email: 'sales@xcellhost.cloud',
    }),
  ];

  readonly selectedOfficeIndex = signal(0);
  readonly selectedOffice = () => this.offices[this.selectedOfficeIndex()];

  constructor() {
    this.seo.set(
      'Contact XcellHost — Cloud & Security Experts',
      'Talk to XcellHost about cloud, cybersecurity, support, partnerships and free trials.',
      '/contact/',
    );
  }

  ngAfterViewInit(): void {
    this.initializeCrmForm();
    this.timers.push(window.setTimeout(() => this.initializeCrmForm(), 300));
    this.timers.push(window.setTimeout(() => this.initializeCrmForm(), 1000));
  }

  ngOnDestroy(): void {
    for (const timer of this.timers) window.clearTimeout(timer);
  }

  openCallback(): void {
    this.overlay.open('callback');
  }

  selectOffice(index: number): void {
    this.selectedOfficeIndex.set(index);
  }

  private createOffice(
    office: Omit<ContactOffice, 'mapUrl' | 'directionsUrl'>,
  ): ContactOffice {
    const query = encodeURIComponent(`${office.company}, ${office.address}`);
    return {
      ...office,
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.google.com/maps?q=${query}&output=embed`,
      ),
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
    };
  }

  private initializeCrmForm(): void {
    const section = document.getElementById('xch-sales-enquiry-section');
    if (!section) return;

    const form = section.querySelector<HTMLFormElement>('#xch-sales-enquiry-form');
    if (!form || form.dataset['xchInitialized'] === 'true') return;
    form.dataset['xchInitialized'] = 'true';

    const firstNumberElement = form.querySelector<HTMLElement>('[data-xch-captcha-first]');
    const secondNumberElement = form.querySelector<HTMLElement>('[data-xch-captcha-second]');
    const captchaInput = form.querySelector<HTMLInputElement>('[data-xch-captcha-answer]');
    const captchaMessage = form.querySelector<HTMLElement>('[data-xch-captcha-message]');
    const submitButton = form.querySelector<HTMLButtonElement>('[data-xch-submit-button]');
    const submitText = form.querySelector<HTMLElement>('[data-xch-submit-text]');
    const productField = form.querySelector<HTMLInputElement>('[data-xch-product-field]');
    const serviceField = form.querySelector<HTMLInputElement>('[data-xch-service-field]');
    const customText = section.querySelector<HTMLElement>('[data-xch-custom-text]');

    if (!firstNumberElement || !secondNumberElement || !captchaInput || !submitButton) return;

    let expectedCaptchaAnswer = 0;
    let captchaIsValid = false;
    let formIsSubmitting = false;

    const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

    const showCaptchaMessage = (message: string, state: '' | 'is-correct' | 'is-wrong') => {
      if (!captchaMessage) return;
      captchaMessage.textContent = message;
      captchaMessage.classList.remove('is-correct', 'is-wrong');
      if (state) captchaMessage.classList.add(state);
    };

    const resetCaptchaState = () => {
      captchaIsValid = false;
      captchaInput.value = '';
      captchaInput.classList.remove('is-correct', 'is-wrong');
      showCaptchaMessage('', '');
      submitButton.disabled = true;
    };

    const generateCaptcha = () => {
      const firstNumber = generateRandomNumber();
      const secondNumber = generateRandomNumber();
      expectedCaptchaAnswer = firstNumber + secondNumber;
      firstNumberElement.textContent = String(firstNumber);
      secondNumberElement.textContent = String(secondNumber);
      resetCaptchaState();
    };

    const validateCaptcha = () => {
      const value = captchaInput.value.trim();
      captchaInput.classList.remove('is-correct', 'is-wrong');

      if (!value) {
        captchaIsValid = false;
        submitButton.disabled = true;
        showCaptchaMessage('', '');
        return false;
      }

      const enteredAnswer = Number(value);
      if (Number.isFinite(enteredAnswer) && enteredAnswer === expectedCaptchaAnswer) {
        captchaIsValid = true;
        captchaInput.classList.add('is-correct');
        showCaptchaMessage('Correct', 'is-correct');
        submitButton.disabled = false;
        return true;
      }

      captchaIsValid = false;
      captchaInput.classList.add('is-wrong');
      showCaptchaMessage('Try again', 'is-wrong');
      submitButton.disabled = true;
      return false;
    };

    const getProductName = () => {
      const pageTitle = document.title ? document.title.trim() : '';
      const genericTitles = [
        '',
        'Home - Xcellhost',
        'Home - XcellHost',
        'Contact-Us - Xcellhost',
        'Contact Us - XcellHost',
        'Checkout - Xcellhost',
        'Enquiry - Xcellhost',
        'Enquiry - XcellHost',
      ];

      if (genericTitles.includes(pageTitle)) return 'Website Enquiry';
      const titleParts = pageTitle.split(' - ');
      return titleParts[0].trim() || 'Website Enquiry';
    };

    const updateProductFields = () => {
      const productName = getProductName();
      if (productField) productField.value = productName;
      if (serviceField) serviceField.value = productName;
      if (customText && productName !== 'Website Enquiry') {
        customText.innerHTML = `Our sales team can answer questions about <strong>${productName}</strong> and recommend the right solution.`;
      }
    };

    captchaInput.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
      validateCaptcha();
    });

    captchaInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !validateCaptcha()) event.preventDefault();
    });

    form.addEventListener('submit', (event) => {
      if (formIsSubmitting) {
        event.preventDefault();
        return;
      }

      if (!captchaIsValid || !validateCaptcha()) {
        event.preventDefault();
        captchaInput.focus();
        showCaptchaMessage('Enter correct answer', 'is-wrong');
        return;
      }

      if (productField && !productField.value.trim()) productField.value = 'Website Enquiry';
      if (serviceField && !serviceField.value.trim()) serviceField.value = productField?.value.trim() || 'Website Enquiry';

      formIsSubmitting = true;
      submitButton.disabled = true;
      if (submitText) submitText.textContent = 'Submitting...';
    });

    updateProductFields();
    generateCaptcha();
  }
}
