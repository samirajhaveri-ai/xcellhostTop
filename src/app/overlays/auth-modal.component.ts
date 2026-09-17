import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { OverlayService } from '../core/overlay.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS } from './form.util';

const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

const matchingPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmation = group.get('confirmPassword')?.value;
  return password && confirmation && password !== confirmation ? { passwordMismatch: true } : null;
};

/** Customer account form displayed from the header's Customer Login menu item. */
@Component({
  selector: 'xh-auth-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    company: ['', Validators.required],
    city: [''],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  }, { validators: matchingPasswords });

  readonly showPassword = signal(false);
  readonly showConfirmation = signal(false);
  readonly submitted = signal(false);
  readonly error = signal('');
  readonly activeService = signal(0);
  readonly serviceSlides = [
    { icon: '☁', eyebrow: 'Managed Cloud Services', title: 'Cloud Infrastructure', description: 'Multi-cloud management across AWS, Azure, GCP and Oracle, backed by migration, monitoring, DevOps and a 24×7 NOC.', tags: ['AWS', 'Azure', 'GCP', 'Oracle'] },
    { icon: '⌾', eyebrow: 'Cybersecurity Platform', title: 'Managed SOC & Threat Defence', description: 'Autonomous threat management, attack-surface monitoring, dark-web intelligence, brand protection and 24×7 SOC operations.', tags: ['SOC 24×7', 'ATM', 'Dark Web Intel'] },
    { icon: '◆', eyebrow: 'Endpoint Security', title: 'Scrutiny EDR & DLP', description: 'Endpoint detection and response with data-loss prevention, device control, email protection and DPDPA compliance.', tags: ['EDR', 'DLP', 'Cyberstanc'] },
    { icon: '▣', eyebrow: 'Data Protection', title: 'Backup & Disaster Recovery', description: 'Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup and one-click restore.', tags: ['Acronis', 'M365 Backup', 'Geo-DR'] },
    { icon: '◇', eyebrow: 'Digital Trust', title: 'SSL & Certificate Management', description: 'Multi-CA certificate lifecycle management with DigiCert, Sectigo and GlobalSign, including private PKI.', tags: ['DigiCert', 'Sectigo', 'GlobalSign'] },
    { icon: '✉', eyebrow: 'Email Security', title: 'DMARC+ Email Protection', description: 'Valimail-powered DMARC enforcement with SPF and DKIM management, BEC protection and phishing defence.', tags: ['DMARC', 'SPF / DKIM', 'Valimail'] },
    { icon: '✓', eyebrow: 'Compliance Platform', title: 'SecureSetu — DPDPA Compliance', description: 'End-to-end compliance with data mapping, consent management, DPIA and breach-notification workflows.', tags: ['DPDPA', 'Consent Mgmt', 'DPIA'] },
    { icon: '₹', eyebrow: 'Cloud ERP', title: 'Tally on Cloud', description: 'Access Tally ERP from any device with multi-user, multi-branch support, automatic backup and zero downtime.', tags: ['Tally ERP', 'From ₹499', 'Multi-User'] },
    { icon: 'M', eyebrow: 'Productivity & Collaboration', title: 'Managed Microsoft 365', description: 'Provisioning, migration, email backup, compliance and ongoing management of Microsoft 365 tenants.', tags: ['Microsoft 365', 'Exchange', 'Gold Partner'] },
    { icon: '▤', eyebrow: 'Infrastructure', title: 'Performance Cloud & FileCloud', description: 'High-performance VPS, dedicated cloud servers and enterprise file sharing across hybrid environments.', tags: ['VPS', 'FileCloud', 'Dedicated'] },
    { icon: '⬡', eyebrow: 'SMB Security', title: 'Cybird Security Appliance', description: 'Plug-and-play cybersecurity for SMBs with firewall, UTM, VPN and threat prevention in one appliance.', tags: ['Firewall', 'UTM', 'Plug & Play'] },
    { icon: '⚙', eyebrow: 'Managed IT Services', title: 'RMM, VAPT & IT Operations', description: 'Remote monitoring, vulnerability testing, WhatsApp marketing and video surveillance as a service.', tags: ['RMM', 'VAPT', 'VSaaS', 'WhatsApp'] },
  ] as const;

  constructor() {
    effect((onCleanup) => {
      if (!this.overlay.isOpen('auth')) return;
      this.reset();
      const timer = setInterval(() => this.nextService(1), 4500);
      onCleanup(() => clearInterval(timer));
    });
  }

  onBackdrop(event: Event): void {
    if (event.target === event.currentTarget) this.close();
  }

  close(): void {
    this.overlay.close('auth');
  }

  togglePassword(): void {
    this.showPassword.update((show) => !show);
  }

  toggleConfirmation(): void {
    this.showConfirmation.update((show) => !show);
  }

  nextService(direction: number): void {
    const length = this.serviceSlides.length;
    this.activeService.update((current) => (current + direction + length) % length);
  }

  setService(index: number): void {
    this.activeService.set(index);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please correct the highlighted fields and accept the terms.');
      return;
    }

    this.error.set('');
    this.submitted.set(true);
  }

  private reset(): void {
    this.form.reset();
    this.showPassword.set(false);
    this.showConfirmation.set(false);
    this.submitted.set(false);
    this.error.set('');
    this.activeService.set(0);
  }
}
