import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { EMAIL_VALIDATORS } from '../overlays/form.util';

type LoginType = 'customer' | 'partner' | 'vendor' | 'employee';

interface LoginPageData {
  type: LoginType;
  heading: string;
  portal: string;
  description: string;
}

@Component({
  selector: 'xh-portal-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portal-login.page.html',
  styleUrl: './portal-login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalLoginPage {
  private readonly fb = inject(FormBuilder);
  readonly page = inject(ActivatedRoute).snapshot.data as LoginPageData;

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
    { icon: '▦', eyebrow: 'Built for every workload', title: 'Performance Cloud', description: 'Run business-critical workloads on secure, high-performance cloud infrastructure that scales with you.', tags: ['Compute', 'Storage', 'GPU', 'Auto Scaling'] },
    { icon: '◇', eyebrow: 'Always-on protection', title: 'Managed Cybersecurity', description: 'Protect users, endpoints and cloud workloads with 24×7 monitoring and expert-led threat response.', tags: ['SOC 24×7', 'MDR', 'EDR', 'Threat Intel'] },
    { icon: '▣', eyebrow: 'Resilient by design', title: 'Backup & Disaster Recovery', description: 'Keep critical data protected and recover operations quickly with managed backup and disaster recovery.', tags: ['Acronis', 'M365', 'Geo-DR', 'Immutable'] },
    { icon: 'M', eyebrow: 'Work from anywhere', title: 'Managed Microsoft 365', description: 'Simplify collaboration with migration, security, backup and ongoing Microsoft 365 management.', tags: ['Exchange', 'Teams', 'Backup', 'Support'] },
  ] as const;

  constructor() {
    inject(SeoService).set(
      `${this.page.heading} | XcellHost`,
      this.page.description,
      `/${this.page.type}-login/`,
    );
  }

  togglePassword(): void {
    this.showPassword.update((show) => !show);
  }

  nextService(direction: number): void {
    this.activeService.update(
      (current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length,
    );
  }

  setService(index: number): void {
    this.activeService.set(index);
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
          loginType: this.page.type,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        redirectUrl?: string;
      };
      if (!response.ok) throw new Error(data.message || 'Invalid email or password.');
      window.location.assign(data.redirectUrl || '/dashboard');
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Unable to sign in. Please try again.');
    } finally {
      this.busy.set(false);
    }
  }
}
