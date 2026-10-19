import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  HostListener,
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
import { SIGNUP_ZOHO } from '../data/signup-zoho.data';

const passwordsMatch: ValidatorFn = (control) =>
  control.get('password')?.value === control.get('confirmPassword')?.value
    ? null
    : { passwordMismatch: true };

type CountryCode = { name: string; code: string; dial: string };

const COUNTRY_CODES: readonly CountryCode[] = [
  ['India', 'IN', '91'], ['Afghanistan', 'AF', '93'], ['Albania', 'AL', '355'], ['Algeria', 'DZ', '213'],
  ['Argentina', 'AR', '54'], ['Australia', 'AU', '61'], ['Austria', 'AT', '43'], ['Bahrain', 'BH', '973'],
  ['Bangladesh', 'BD', '880'], ['Belgium', 'BE', '32'], ['Bhutan', 'BT', '975'], ['Brazil', 'BR', '55'],
  ['Bulgaria', 'BG', '359'], ['Cambodia', 'KH', '855'], ['Canada', 'CA', '1'], ['Chile', 'CL', '56'],
  ['China', 'CN', '86'], ['Colombia', 'CO', '57'], ['Croatia', 'HR', '385'], ['Cyprus', 'CY', '357'],
  ['Czechia', 'CZ', '420'], ['Denmark', 'DK', '45'], ['Egypt', 'EG', '20'], ['Estonia', 'EE', '372'],
  ['Ethiopia', 'ET', '251'], ['Finland', 'FI', '358'], ['France', 'FR', '33'], ['Georgia', 'GE', '995'],
  ['Germany', 'DE', '49'], ['Ghana', 'GH', '233'], ['Greece', 'GR', '30'], ['Hong Kong', 'HK', '852'],
  ['Hungary', 'HU', '36'], ['Iceland', 'IS', '354'], ['Indonesia', 'ID', '62'], ['Iran', 'IR', '98'],
  ['Iraq', 'IQ', '964'], ['Ireland', 'IE', '353'], ['Israel', 'IL', '972'], ['Italy', 'IT', '39'],
  ['Japan', 'JP', '81'], ['Jordan', 'JO', '962'], ['Kazakhstan', 'KZ', '7'], ['Kenya', 'KE', '254'],
  ['Kuwait', 'KW', '965'], ['Latvia', 'LV', '371'], ['Lebanon', 'LB', '961'], ['Lithuania', 'LT', '370'],
  ['Luxembourg', 'LU', '352'], ['Malaysia', 'MY', '60'], ['Maldives', 'MV', '960'], ['Malta', 'MT', '356'],
  ['Mauritius', 'MU', '230'], ['Mexico', 'MX', '52'], ['Mongolia', 'MN', '976'], ['Morocco', 'MA', '212'],
  ['Myanmar', 'MM', '95'], ['Nepal', 'NP', '977'], ['Netherlands', 'NL', '31'], ['New Zealand', 'NZ', '64'],
  ['Nigeria', 'NG', '234'], ['Norway', 'NO', '47'], ['Oman', 'OM', '968'], ['Pakistan', 'PK', '92'],
  ['Philippines', 'PH', '63'], ['Poland', 'PL', '48'], ['Portugal', 'PT', '351'], ['Qatar', 'QA', '974'],
  ['Romania', 'RO', '40'], ['Russia', 'RU', '7'], ['Rwanda', 'RW', '250'], ['Saudi Arabia', 'SA', '966'],
  ['Serbia', 'RS', '381'], ['Singapore', 'SG', '65'], ['Slovakia', 'SK', '421'], ['Slovenia', 'SI', '386'],
  ['South Africa', 'ZA', '27'], ['South Korea', 'KR', '82'], ['Spain', 'ES', '34'], ['Sri Lanka', 'LK', '94'],
  ['Sweden', 'SE', '46'], ['Switzerland', 'CH', '41'], ['Taiwan', 'TW', '886'], ['Tanzania', 'TZ', '255'],
  ['Thailand', 'TH', '66'], ['Tunisia', 'TN', '216'], ['Turkey', 'TR', '90'], ['Uganda', 'UG', '256'],
  ['Ukraine', 'UA', '380'], ['United Arab Emirates', 'AE', '971'], ['United Kingdom', 'GB', '44'],
  ['United States', 'US', '1'], ['Uruguay', 'UY', '598'], ['Uzbekistan', 'UZ', '998'], ['Vietnam', 'VN', '84'],
  ['Yemen', 'YE', '967'], ['Zambia', 'ZM', '260'], ['Zimbabwe', 'ZW', '263'],
].map(([name, code, dial]) => ({ name, code, dial }));

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
  private submissionFallback = 0;
  readonly zoho = SIGNUP_ZOHO;
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
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/[A-Z]/), Validators.pattern(/[0-9]/)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    },
    { validators: passwordsMatch },
  );

  readonly busy = signal(false);
  readonly error = signal('');
  readonly submitted = signal(false);
  readonly showPassword = signal(false);
  readonly showConfirmation = signal(false);
  readonly countryMenuOpen = signal(false);
  readonly countrySearch = signal('');
  readonly selectedCountry = signal<CountryCode>(COUNTRY_CODES[0]);
  readonly filteredCountries = computed(() => {
    const query = this.countrySearch().trim().toLowerCase();
    const digits = query.replace(/\D/g, '');
    if (!query) return COUNTRY_CODES;
    return COUNTRY_CODES.filter((country) =>
      country.name.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query) ||
      (digits.length > 0 && country.dial.includes(digits)),
    );
  });
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
    this.destroyRef.onDestroy(() => window.clearTimeout(this.submissionFallback));
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

  toggleCountryMenu(): void {
    this.countryMenuOpen.update((open) => !open);
    if (this.countryMenuOpen()) this.countrySearch.set('');
  }

  closeCountryMenu(): void {
    this.countryMenuOpen.set(false);
  }

  @HostListener('document:click')
  closeCountryMenuFromOutside(): void {
    this.closeCountryMenu();
  }

  updateCountrySearch(event: Event): void {
    this.countrySearch.set((event.target as HTMLInputElement).value);
  }

  selectCountry(country: CountryCode): void {
    this.selectedCountry.set(country);
    this.closeCountryMenu();
  }

  countryFlagUrl(code: string): string {
    return `https://flagcdn.com/20x15/${code.toLowerCase()}.png`;
  }

  fullMobile(): string {
    const dial = this.selectedCountry().dial;
    const raw = this.form.controls.phone.value.trim();
    const international = /^(\+|00)/.test(raw);
    let number = raw.replace(/\D/g, '');
    if (number.startsWith(dial) && (international || number.length > 10)) number = number.slice(dial.length);
    return `+${dial}${number}`;
  }

  resetForm(): void {
    if (this.busy()) return;
    this.form.reset();
    this.error.set('');
    this.submitted.set(false);
    this.showPassword.set(false);
    this.showConfirmation.set(false);
    this.selectedCountry.set(COUNTRY_CODES[0]);
    this.closeCountryMenu();
  }

  completeSubmission(): void {
    if (!this.busy()) return;
    window.clearTimeout(this.submissionFallback);
    this.busy.set(false);
    this.submitted.set(true);
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
      this.submissionFallback = window.setTimeout(() => this.completeSubmission(), 4000);
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
