import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS } from '../overlays/form.util';
import { SIGNUP_LEAD_TYPES, SIGNUP_ZOHO } from '../data/signup-zoho.data';

const validLeadTypes: ValidatorFn = (control) =>
  Array.isArray(control.value) && control.value.every((value) =>
    SIGNUP_LEAD_TYPES.includes(value as typeof SIGNUP_LEAD_TYPES[number]))
    ? null : { leadType: true };

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
  @ViewChild('signupForm') private signupForm?: ElementRef<HTMLFormElement>;

  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private animationFrame = 0;
  readonly zoho = SIGNUP_ZOHO;
  readonly leadTypes = SIGNUP_LEAD_TYPES;
  readonly smartUrlService = this.isBrowser && new URLSearchParams(window.location.search).get('service') === 'smarturl'
    ? 'smarturl' : '';

  readonly form = this.fb.nonNullable.group(
    {
      firstName: ['', [Validators.required, Validators.pattern(/\S/), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.pattern(/\S/), Validators.maxLength(80)]],
      email: ['', [...EMAIL_VALIDATORS, Validators.maxLength(100)]],
      phone: ['', [...PHONE_VALIDATORS, Validators.maxLength(30)]],
      company: ['', [Validators.required, Validators.pattern(/\S/), Validators.maxLength(200)]],
      city: ['', Validators.maxLength(100)],
      leadTypes: [['Customer C'] as string[], [Validators.required, validLeadTypes]],
      terms: [false, Validators.requiredTrue],
    },
  );

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
      'Submit your XcellHost signup request for managed cloud, cybersecurity and digital trust services.',
      '/signup/',
    );
    if (!this.isBrowser) return;
    const carouselTimer = window.setInterval(() => this.nextService(1), 4500);
    this.destroyRef.onDestroy(() => window.clearInterval(carouselTimer));
    const resetBusy = () => this.busy.set(false);
    window.addEventListener('pageshow', resetBusy);
    this.destroyRef.onDestroy(() => window.removeEventListener('pageshow', resetBusy));
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.loadZohoAnalytics();
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

  nextService(direction: number): void {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index: number): void { this.activeService.set(index); }

  resetForm(): void {
    if (this.busy()) return;
    this.form.reset();
    this.error.set('');
  }

  submit(): void {
    if (this.busy()) return;
    const value = this.form.getRawValue();
    this.form.patchValue({
      firstName: value.firstName.trim(), lastName: value.lastName.trim(),
      email: value.email.trim(), phone: value.phone.trim(),
      company: value.company.trim(), city: value.city.trim(),
    });
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please correct the highlighted fields and accept the terms.');
      return;
    }
    const form = this.signupForm?.nativeElement;
    if (!form || !this.isBrowser) return;
    this.error.set('');
    this.busy.set(true);
    try {
      // Submit the supplied Zoho form directly; Zoho displays its own result.
      HTMLFormElement.prototype.submit.call(form);
    } catch {
      this.busy.set(false);
      this.error.set('Unable to submit your request. Please try again.');
    }
  }

  private loadZohoAnalytics(): void {
    if (document.getElementById('wf_anal')) return;
    const tracking = window as unknown as {
      _wFa_ajax_will_be_replaced: boolean;
      _wfa_fstprtcken?: Record<string, boolean>;
    };
    tracking._wFa_ajax_will_be_replaced = false;
    tracking._wfa_fstprtcken ??= {};
    tracking._wfa_fstprtcken['667555000019526009'] = true;
    const script = document.createElement('script');
    script.id = 'wf_anal';
    script.src = this.zoho.analyticsUrl;
    script.async = true;
    this.signupForm?.nativeElement.appendChild(script);
    this.destroyRef.onDestroy(() => script.remove());
  }
}
