import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { OverlayService } from '../core/overlay.service';
import { EMAIL_VALIDATORS } from './form.util';

@Component({
  selector: 'xh-signin-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./auth-modal.component.css', './signin-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: ['', EMAIL_VALIDATORS],
    password: ['', Validators.required],
    remember: [false],
  });
  readonly showPassword = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly activeService = signal(0);
  readonly serviceSlides = [
    { icon: '☁', eyebrow: 'Managed Cloud Services', title: 'Cloud Infrastructure', description: 'Multi-cloud management across AWS, Azure, GCP and Oracle, backed by migration, monitoring, DevOps and a 24×7 NOC.', tags: ['AWS', 'Azure', 'GCP', 'Oracle'] },
    { icon: '⌾', eyebrow: 'Cybersecurity Platform', title: 'Managed SOC & Threat Defence', description: 'Autonomous threat management, attack-surface monitoring, dark-web intelligence, brand protection and 24×7 SOC operations.', tags: ['SOC 24×7', 'ATM', 'Dark Web Intel'] },
    { icon: '◆', eyebrow: 'Endpoint Security', title: 'Scrutiny EDR & DLP', description: 'Endpoint detection and response with data-loss prevention, device control, email protection and DPDPA compliance.', tags: ['EDR', 'DLP', 'Cyberstanc'] },
    { icon: '▣', eyebrow: 'Data Protection', title: 'Backup & Disaster Recovery', description: 'Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup and one-click restore.', tags: ['Acronis', 'M365 Backup', 'Geo-DR'] },
  ] as const;

  constructor() {
    effect((onCleanup) => {
      if (!this.overlay.isOpen('signin')) return;
      this.reset();
      const timer = setInterval(() => this.nextService(1), 4500);
      onCleanup(() => clearInterval(timer));
    });
  }

  onBackdrop(event: Event): void {
    if (event.target === event.currentTarget) this.close();
  }

  close(): void { this.overlay.close('signin'); }
  togglePassword(): void { this.showPassword.update((show) => !show); }
  nextService(direction: number): void {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index: number): void { this.activeService.set(index); }

  createAccount(event: Event): void {
    event.preventDefault();
    this.close();
    this.overlay.open('auth');
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Enter a valid email address and password.');
      return;
    }

    this.error.set('');
    this.busy.set(true);
    const value = this.form.getRawValue();
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: value.email.trim().toLowerCase(),
          password: value.password,
          remember: value.remember,
        }),
      });
      const data = await response.json().catch(() => ({})) as { message?: string; redirectUrl?: string };
      if (!response.ok) throw new Error(data.message || 'Invalid email or password.');
      window.location.assign(data.redirectUrl || '/dashboard');
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to sign in. Please try again.');
    } finally {
      this.busy.set(false);
    }
  }

  private reset(): void {
    this.form.reset();
    this.showPassword.set(false);
    this.busy.set(false);
    this.error.set('');
    this.activeService.set(0);
  }
}
