import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from './callback-topic.service';

/** Global Zoho enquiry form shared by every sales CTA. */
@Component({
  selector: 'xh-callback-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './callback-modal.component.html',
  styleUrl: './callback-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallbackModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required], lastName: ['', Validators.required], company: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
    email: ['', [Validators.required, Validators.email]], role: ['', Validators.required],
    help: ['', Validators.required], captcha: ['', Validators.required],
  });
  readonly firstCaptchaNumber = signal(0);
  readonly secondCaptchaNumber = signal(0);
  readonly captchaMessage = signal('');
  readonly product = signal('Website Enquiry');
  readonly productLabel = computed(() => this.product() || 'Website Enquiry');

  constructor() {
    effect(() => {
      const open = this.overlay.isOpen('callback');
      untracked(() => open ? this.resetForm() : this.topics.clear());
    });
  }

  open(): void { this.overlay.open('callback'); }
  close(): void { this.overlay.close('callback'); }
  onBackdrop(event: Event): void { if (event.target === event.currentTarget) this.close(); }

  validateCaptcha(): void {
    const answer = Number(this.form.controls.captcha.value);
    this.captchaMessage.set(Number.isFinite(answer) && answer === this.captchaAnswer() ? 'Correct' : 'Try again');
  }

  submit(event: SubmitEvent): void {
    event.preventDefault();
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (Number(this.form.controls.captcha.value) !== this.captchaAnswer()) {
      this.captchaMessage.set('Enter the correct answer'); this.form.controls.captcha.markAsTouched();
      return;
    }

    // FormGroup intercepts the normal submit event; use the native form method
    // after validation so the existing Zoho endpoint receives this lead.
    (event.currentTarget as HTMLFormElement).submit();
  }

  captchaAnswer(): number { return this.firstCaptchaNumber() + this.secondCaptchaNumber(); }

  private resetForm(): void {
    this.form.reset(); this.captchaMessage.set('');
    this.product.set(this.topics.topic().trim() || this.productFromRoute());
    this.firstCaptchaNumber.set(this.randomCaptchaNumber()); this.secondCaptchaNumber.set(this.randomCaptchaNumber());
  }

  private productFromRoute(): string {
    const title = document.title.split(/[\-|—]/)[0]?.trim();
    if (title && !/^(home|contact( us)?)$/i.test(title)) return title;
    const segment = this.router.url.split('?')[0].split('#')[0].split('/').filter(Boolean).pop();
    return segment ? segment.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()) : 'Website Enquiry';
  }

  private randomCaptchaNumber(): number { return Math.floor(Math.random() * 9) + 1; }
}
