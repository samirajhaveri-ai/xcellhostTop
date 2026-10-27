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
export class PortalLoginPage implements AfterViewInit {
  @ViewChild('backgroundCanvas') private canvas?: ElementRef<HTMLCanvasElement>;
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private animationFrame = 0;
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
      `${this.page.heading} | XcellHost`,
      this.page.description,
      `/${this.page.type}-login/`,
    );
    if (!this.isBrowser) return;
    const carouselTimer = window.setInterval(() => this.nextService(1), 4500);
    this.destroyRef.onDestroy(() => window.clearInterval(carouselTimer));
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
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
      const response = await fetch('/api/auth.php?action=signin', {
        method: 'POST',
        credentials: 'same-origin',
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
