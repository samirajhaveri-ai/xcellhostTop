import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS } from '../overlays/form.util';

const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const ZOHO_ENDPOINT = 'https://crm.zoho.in/crm/WebToLeadForm';

const matchingPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmation = group.get('confirmPassword')?.value;
  return password && confirmation && password !== confirmation ? { passwordMismatch: true } : null;
};

@Component({
  selector: 'xh-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage implements AfterViewInit {
  @ViewChild('backgroundCanvas') private canvas?: ElementRef<HTMLCanvasElement>;

  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private animationFrame = 0;
  private pendingForm?: HTMLFormElement;

  readonly form = this.fb.nonNullable.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', EMAIL_VALIDATORS],
      phone: ['', PHONE_VALIDATORS],
      company: ['', Validators.required],
      city: [''],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    },
    { validators: matchingPasswords },
  );

  readonly showPassword = signal(false);
  readonly showConfirmation = signal(false);
  readonly submitted = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly activeService = signal(0);
  readonly serviceSlides = [
    { icon: '☁️', eyebrow: 'Managed Cloud Services', title: 'Cloud Infrastructure', description: 'Multi-cloud management across AWS, Azure, GCP and Oracle. Cloud assessment, migration, deployment, monitoring and DevOps with 24×7 NOC.', tags: [['AWS', '#FF8A00'], ['Azure', '#0066FF'], ['GCP', '#22c55e'], ['Oracle', '#06b6d4']] },
    { icon: '🔐', eyebrow: 'Cybersecurity Platform', title: 'Managed SOC & Threat Defence', description: 'Autonomous threat management, attack surface monitoring, dark web intelligence, brand protection and 24×7 SOC operations centre.', tags: [['SOC 24×7', '#ef4444'], ['ATM', '#06b6d4'], ['Dark Web Intel', '#FF8A00']] },
    { icon: '🛡️', eyebrow: 'Endpoint Security', title: 'Scrutiny EDR & DLP', description: 'Endpoint detection and response with data loss prevention, device control, email protection and DPDPA compliance — powered by Cyberstanc.', tags: [['EDR', '#ef4444'], ['DLP', '#0066FF'], ['Cyberstanc', '#22c55e']] },
    { icon: '💾', eyebrow: 'Data Protection', title: 'Backup & Disaster Recovery', description: 'Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup, endpoint protection and one-click restore.', tags: [['Acronis', '#22c55e'], ['M365 Backup', '#0066FF'], ['Geo-DR', '#FF8A00']] },
    { icon: '🔒', eyebrow: 'Digital Trust', title: 'SSL & Certificate Management', description: 'Multi-CA certificate lifecycle management with DigiCert, Sectigo and GlobalSign, including code signing, S/MIME, IoT certificates and private PKI.', tags: [['DigiCert', '#0066FF'], ['Sectigo', '#22c55e'], ['GlobalSign', '#06b6d4']] },
    { icon: '📧', eyebrow: 'Email Security', title: 'DMARC+ Email Protection', description: 'Valimail-powered DMARC enforcement with SPF and DKIM management, business email compromise protection and phishing defence.', tags: [['DMARC', '#FF8A00'], ['SPF / DKIM', '#0066FF'], ['Valimail', '#22c55e']] },
    { icon: '📋', eyebrow: 'Compliance Platform', title: 'SecureSetu — DPDPA Compliance', description: 'End-to-end Digital Personal Data Protection Act compliance with data mapping, consent management, DPIA and breach notification workflows.', tags: [['DPDPA', '#22c55e'], ['Consent Mgmt', '#0066FF'], ['DPIA', '#FF8A00']] },
    { icon: '📊', eyebrow: 'Cloud ERP', title: 'Tally on Cloud', description: 'Access Tally ERP from anywhere on any device. Multi-user, multi-branch with automatic backup and zero downtime.', tags: [['Tally ERP', '#FF8A00'], ['From ₹499', '#0066FF'], ['Multi-User', '#22c55e']] },
    { icon: '📨', eyebrow: 'Productivity & Collaboration', title: 'Managed Microsoft 365', description: 'Provisioning, migration, email backup, compliance and ongoing management of Microsoft 365 tenants.', tags: [['Microsoft 365', '#0066FF'], ['Exchange', '#FF8A00'], ['Gold Partner', '#22c55e']] },
    { icon: '☁️', eyebrow: 'Infrastructure', title: 'Performance Cloud & FileCloud', description: 'High-performance VPS and dedicated cloud servers with enterprise file sharing across on-premise and hybrid environments.', tags: [['VPS', '#06b6d4'], ['FileCloud', '#0066FF'], ['Dedicated', '#FF8A00']] },
    { icon: '🔌', eyebrow: 'SMB Security', title: 'Cybird Security Appliance', description: 'Plug-and-play cybersecurity for SMBs with firewall, UTM, VPN and threat prevention in one appliance.', tags: [['Firewall', '#ef4444'], ['UTM', '#0066FF'], ['Plug & Play', '#22c55e']] },
    { icon: '🖥️', eyebrow: 'Managed IT Services', title: 'RMM, VAPT & IT Operations', description: 'Remote monitoring, vulnerability testing, WhatsApp marketing and video surveillance as a service.', tags: [['RMM', '#FF8A00'], ['VAPT', '#0066FF'], ['VSaaS', '#06b6d4'], ['WhatsApp', '#22c55e']] },
  ] as const;

  constructor() {
    inject(SeoService).set(
      'Sign Up — XcellHost Cloud Services',
      'Create your XcellHost account to access managed cloud, cybersecurity and digital trust services.',
      '/signup/',
    );
    const carouselTimer = window.setInterval(() => this.nextService(1), 4500);
    this.destroyRef.onDestroy(() => window.clearInterval(carouselTimer));
  }

  ngAfterViewInit(): void {
    const canvas = this.canvas?.nativeElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.alpha += star.speed * star.direction;
        if (star.alpha >= 1 || star.alpha <= 0.08) star.direction *= -1;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0,102,255,${star.alpha.toFixed(2)})`;
        context.fill();
      }
      this.animationFrame = window.requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize);
    draw();
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(this.animationFrame);
    });
  }

  togglePassword(): void { this.showPassword.update((show) => !show); }
  toggleConfirmation(): void { this.showConfirmation.update((show) => !show); }
  nextService(direction: number): void {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index: number): void { this.activeService.set(index); }

  submit(): void {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please correct the highlighted fields and accept the terms.');
      return;
    }

    this.error.set('');
    this.busy.set(true);
    const value = this.form.getRawValue();
    const zohoForm = document.createElement('form');
    zohoForm.method = 'POST';
    zohoForm.action = ZOHO_ENDPOINT;
    zohoForm.target = 'zohoFrame';
    zohoForm.style.display = 'none';
    zohoForm.acceptCharset = 'UTF-8';

    const fields: Record<string, string> = {
      xnQsjsdp: '6b9425c7b8c91e8768ec8be5a272d5a9f0b5261989d70523d8f2a7e419e5a64d',
      xmIwtLD: 'a98994818746fa2996adef0834f16a1b6c2b71d21c4c2b57ab068f2a00004bda2d13d70ba5e2f21704a6a9dddd3a4c8c',
      actionType: 'TGVhZHM=',
      returnURL: 'https://xcellhost.top/signup-success',
      aG9uZXlwb3Q: '',
      'First Name': value.firstName.trim(),
      'Last Name': value.lastName.trim(),
      Email: value.email.trim(),
      Mobile: value.phone.trim(),
      Company: value.company.trim(),
      City: value.city.trim(),
      LEADCF21: 'Customer C',
      'Lead Source': 'Website',
    };
    for (const [name, fieldValue] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = fieldValue;
      zohoForm.appendChild(input);
    }
    document.body.appendChild(zohoForm);
    this.pendingForm = zohoForm;
    zohoForm.submit();
    window.setTimeout(() => this.finishSubmission(), 4000);
  }

  onZohoLoad(): void {
    if (this.busy()) this.finishSubmission();
  }

  private finishSubmission(): void {
    if (!this.busy()) return;
    this.pendingForm?.remove();
    this.pendingForm = undefined;
    this.busy.set(false);
    this.submitted.set(true);
  }
}
