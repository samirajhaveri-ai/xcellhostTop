import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-contact-page',
  standalone: true,
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage implements AfterViewInit, OnDestroy {
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly timers: number[] = [];

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
