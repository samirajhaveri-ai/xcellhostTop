import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { COMPANY_PAGES } from '../data/company.data';
import { WORLD_MAP_HTML } from '../data/site.data';
import { HeroNetDirective } from '../sections/product';
import { ResellerProgramContentComponent } from '../sections/reseller-program-content.component';

@Component({
  selector: 'xh-company-page',
  standalone: true,
  imports: [RouterLink, HeroNetDirective, ResellerProgramContentComponent],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company.page.html',
  styleUrl: './company.page.css',
})
export class CompanyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly page = computed(() => COMPANY_PAGES[this.slug()] ?? null);
  readonly worldMap: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);

  readonly founder = {
    name: 'Dr. Samir Jhaveri',
    role: 'Managing Director, XcellHost Cloud Services Pvt. Ltd.',
    specialties: 'Cloud, cybersecurity, AI and digital marketing',
    summary:
      'A long-time technology leader with over two decades in the industry, guiding XcellHost since 1999 and helping SMBs and enterprises simplify cloud operations.',
    note:
      'Our approach is simple: give customers practical guidance, deliver what was promised and stay accountable after go-live.',
  } as const;

  readonly managementTeam = [
    { initials: 'YJ', name: 'Yogendra Jagger', role: 'Regional Director - Middle East & Africa', image: '/assets/images/team-yogendra-jagger.png' },
    { initials: 'JP', name: 'Jaynam Pandya', role: 'Chief Marketing Officer', image: '/assets/images/team-jaynam-pandya.png' },
    { initials: 'AN', name: 'Abhishek Nimbalkar', role: 'Chief AI Officer', image: '/assets/images/team-abhishek-nimbalkar.jpg' },
    { initials: 'PN', name: 'Prashant N.V', role: 'Service Delivery Director', image: '/assets/images/team-prashant-nv.png' },
  ] as const;

  readonly advisoryTeam = [
    { initials: 'SJ', name: 'Suraj Jain', role: 'Financial Advisor', image: '/assets/images/team-suraj-jain.png' },
    { initials: 'SM', name: 'Surendra Mehra', role: 'Chartered Accountant', image: '/assets/images/team-surendra-mehra.png' },
  ] as const;

  readonly salesTeam = [
    { initials: 'SJ', name: 'Sanjay Jade', role: 'Accounts Payable Manager', image: '/assets/images/team-sanjay-jade.png' },
    { initials: 'RS', name: 'Rizwan Shaikh', role: 'Cloud Pre-Sales Manager', image: '/assets/images/team-rizwan-shaikh.png' },
    { initials: 'AP', name: 'Abhishek Pandey', role: 'Cloud Sales Manager', image: '/assets/images/team-abhishek-pandey.png' },
  ] as const;

  readonly values = [
    { title: 'Teamwork', body: 'We work across functions so customers get one coordinated answer.' },
    { title: 'Integrity', body: 'We say what we can do, do what we say and keep the record clear.' },
    { title: 'Respect', body: 'People and customer situations are handled with care and fairness.' },
    { title: 'Diligence', body: 'The small details matter, especially in operational work that others depend on.' },
  ] as const;

  readonly commitmentStats = [
    { value: '1999', label: 'Serving customers since' },
    { value: '10,000+', label: 'Businesses supported' },
    { value: '24x7', label: 'Monitoring and response' },
    { value: '1 team', label: 'For cloud, security and support' },
  ] as const;

  readonly contactCards = [
    {
      label: 'Call us',
      value: '+91 22 6711 1555',
      note: 'Best for sales, service guidance and urgent issues.',
      href: 'tel:+912267111555',
    },
    {
      label: 'Email us',
      value: 'sales@xcellhost.cloud',
      note: 'For a project conversation or written details.',
      href: 'mailto:sales@xcellhost.cloud',
    },
    {
      label: 'WhatsApp',
      value: '+91 86570 32540',
      note: 'Fastest route for a quick introduction.',
      href: 'https://wa.me/918657032540',
    },
  ] as const;

  readonly certifications = [
    {
      title: 'ISO/IEC 27001:2013',
      type: 'Information Security Management System',
      image: '/assets/images/company-recognition/iso-27001-certificate.jpg',
      alt: 'XcellHost ISO IEC 27001:2013 certificate',
    },
    {
      title: 'ISO/IEC 20000-1:2018',
      type: 'IT Service Management System',
      image: '/assets/images/company-recognition/iso-20000-certificate.jpg',
      alt: 'XcellHost ISO IEC 20000-1:2018 certificate',
    },
    {
      title: 'Honorary Doctorate in Artificial Intelligence',
      type: 'Leadership recognition · Samir Jhaveri, Managing Director',
      image: '/assets/images/company-recognition/ai-certification.jpeg',
      alt: 'Honorary Doctorate in Artificial Intelligence awarded to Samir Jhaveri',
    },
  ] as const;

  readonly awardYears = ['2025', '2024', '2023', '2022', '2018'] as const;
  readonly activeAwardYear = signal<(typeof this.awardYears)[number]>('2025');

  readonly awards = [
    { year: '2025', title: 'Asian-African Iconic Awards', image: '/assets/images/company-recognition/asian-african.png' },
    { year: '2024', title: 'Emerging Partner of the Year — India West', image: '/assets/images/company-recognition/emerging-partner-of-the-year.png' },
    { year: '2024', title: 'IT Expo 2024', image: '/assets/images/company-recognition/it-expo.png' },
    { year: '2023', title: 'MSP India Summit 2023', image: '/assets/images/company-recognition/india-summit-2023.png' },
    { year: '2023', title: 'TAIT Membership', image: '/assets/images/company-recognition/tait-membership.png' },
    { year: '2023', title: 'The Institute of Cost Accountants of India', image: '/assets/images/company-recognition/institute-cost-accountants-india.png' },
    { year: '2022', title: 'Kaspersky Emerging MSP Partner of the Year', image: '/assets/images/company-recognition/kaspersky.png' },
    { year: '2022', title: 'Grahams Award of Excellence', image: '/assets/images/company-recognition/graham.png' },
    { year: '2018', title: 'Emerging Cloud Solution Provider of the Year', image: '/assets/images/company-recognition/summit-awards-2018.png' },
  ] as const;

  readonly visibleAwards = computed(() =>
    this.awards.filter((award) => award.year === this.activeAwardYear()),
  );

  readonly partnerCategories = [
    { title: 'Strategic cloud & infrastructure', description: 'Cloud platforms, hyperscalers and datacentre infrastructure.', partners: [
      ['Azure', '01-azure.png'], ['Microsoft Partner', '02-microsoft-partner.png'], ['AWS', '21-aws.png'], ['Google Cloud Platform', '41-google-cloud-platform.png'], ['Oracle Cloud Infrastructure', '61-oracle-cloud-infrastructure.png'], ['Equinix', '42-equinix.png'],
    ] },
    { title: 'SSL certificates & PKI', description: 'Public trust, TLS certificates and digital identity.', partners: [
      ['DigiCert', '03-digicert.png'], ['Sectigo', '23-sectigo.png'], ['GeoTrust', '62-geotrust.png'],
    ] },
    { title: 'Web, network & DNS security', description: 'WAF, DDoS protection, firewalls and secure network services.', partners: [
      ['cWatch', '43-cwatch.png'], ['Prophaze', '63-prophaze.png'], ['Fortinet', '64-fortinet.png'], ['Palo Alto Networks', '05-palo-alto-networks-1.png'], ['Infoblox', '12-infoblox.png'],
    ] },
    { title: 'Digital risk & threat intelligence', description: 'External risk monitoring and actionable threat intelligence.', partners: [
      ['Foresiet', '04-foresiet.png'], ['Kaspersky Digital Footprint Intelligence', '24-kaspersky-digital-footprint-intelligence.png'], ['Kaspersky Threat Intelligence', '44-kaspersky-threat-intelligence.png'],
    ] },
    { title: 'Endpoint security', description: 'Endpoint protection, detection and managed response.', partners: [
      ['Acronis', '22-acronis-1.png'], ['Microsoft Defender for Endpoint', '45-microsoft-defender-for-endpoint.png'],
    ] },
    { title: 'Email security', description: 'Secure email gateways, anti-phishing and trusted messaging.', partners: [
      ['Threatcop', '06-threatcop.png'], ['RPost', '26-rpost.png'], ['Mimecast Partner', '46-mimecast-partner.png'], ['SpamExperts', '65-spamexperts.png'],
    ] },
    { title: 'SASE & data security', description: 'Secure access, information protection and data loss prevention.', partners: [
      ['Kite Cyber', '07-kite-cyber.png'], ['Data Resolve', '66-data-resolve.png'],
    ] },
    { title: 'Data protection', description: 'Backup, cyber resilience and SaaS data recovery.', partners: [
      ['Druva', '27-druva.png'], ['Veeam', '47-veeam.png'], ['Dropsuite', '67-dropsuite.png'],
    ] },
    { title: 'Network access, vulnerability & patching', description: 'Asset visibility, exposure management and remediation.', partners: [
      ['Genians', '08-genians.png'], ['SecPod', '28-secpod.png'], ['Qualys', '48-qualys.png'], ['Rapid7', '68-rapid7.png'],
    ] },
    { title: 'SIEM, XDR, SOC & SOAR', description: 'Security analytics, detection, orchestration and response.', partners: [
      ['Wazuh', '09-wazuh.png'], ['Seceon', '29-seceon.png'], ['Azure Sentinel', '30-azure-sentinel.png'], ['Logsign', '49-logsign.png'], ['Xcell AI SIEM', '50-xcell-ai-siem.png'], ['FortiSIEM', '69-fortisiem.png'],
    ] },
    { title: 'Identity, governance & cloud posture', description: 'IAM, privileged access, compliance automation and CSPM.', partners: [
      ['Arcon', '11-arcon.png'], ['Scrut Automation', '31-scrut-automation.png'], ['CloudWize', '32-cloudwize.png'], ['Drata', '51-drata.png'], ['OneLogin', '70-onelogin.png'], ['Prisma Cloud', '71-prisma-cloud.png'],
    ] },
    { title: 'Remote work & collaboration', description: 'Secure remote access, support and digital workspaces.', partners: [
      ['TeamViewer', '13-teamviewer.png'], ['TSplus', '16-tsplus.png'], ['AnyDesk', '33-anydesk.png'], ['GoTo', '52-goto.png'], ['Accops', '72-accops.png'],
    ] },
    { title: 'Cloud & security monitoring', description: 'Infrastructure, application and service observability.', partners: [
      ['New Relic', '14-new-relic.png'], ['Datadog', '34-datadog.png'], ['Site24x7', '53-site24x7.png'], ['Elastic', '73-elastic.png'],
    ] },
    { title: 'OT & industrial security', description: 'Protection for operational technology and industrial environments.', partners: [
      ['Kaspersky Industrial CyberSecurity', '15-kaspersky-industrial-cybersecurity.png'], ['Nozomi Networks', '35-nozomi-networks.png'], ['Acronis Cyber Protect OT', '74-acronis-cyber-protect-ot.png'],
    ] },
    { title: 'Network segmentation', description: 'Zero-trust segmentation and lateral-movement containment.', partners: [
      ['ColorTokens', '17-colortokens.png'], ['Illumio', '36-illumio.png'],
    ] },
    { title: 'Security training & professional bodies', description: 'Cybersecurity learning, certification and professional development.', partners: [
      ['SANS', '18-sans.png'], ['ISC2', '19-isc2.png'], ['ISACA', '40-isaca.png'], ['CompTIA', '56-comptia.png'], ['EC-Council', '76-ec-council.png'],
    ] },
    { title: 'Data privacy & cyber risk', description: 'Privacy operations, governance and financial risk quantification.', partners: [
      ['Ardent', '20-ardent.png'], ['OneTrust', '38-onetrust.png'], ['Risknox.ai', '39-risknox-ai.png'],
    ] },
    { title: 'API, mobile & breach simulation', description: 'API protection, unified endpoint management and attack simulation.', partners: [
      ['Salt Security', '54-salt-security.png'], ['Scalefusion', '55-scalefusion.png'], ['FourCore', '59-fourcore.png'], ['Protectt.ai', '75-protectt-ai.png'], ['XM Cyber', '79-xm-cyber.png'],
    ] },
    { title: 'Security audit & application security', description: 'Policy assurance, firewall audit and secure software delivery.', partners: [
      ['AlgoSec', '37-algosec.png'], ['FireMon', '57-firemon-1.png'], ['Synopsys', '77-synopsys.png'],
    ] },
    { title: 'Security hardware & software', description: 'Cryptographic hardware and specialised security tooling.', partners: [
      ['Utimaco', '58-utimo.png'], ['Securaze', '78-securaze.png'],
    ] },
  ] as const;

  constructor() {
    effect(() => {
      const page = this.page();
      if (!page) {
        void this.router.navigate(['/']);
        return;
      }
      this.seo.set(`${page.title} — XcellHost`, page.tagline, `/company/${this.slug()}/`);
    });
  }
}
