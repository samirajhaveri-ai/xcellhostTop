import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { OnChanges, signal } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { CartService } from '../core/cart.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { useScrollingSectionNavigation } from './section-navigation-flow';

type InteractiveContentSource =
  | 'email-security-enterprise'
  | 'red-hat'
  | 'sitelock'
  | 'ssl-installation-service'
  | 'acronis-ot'
  | 'whats-new'
  | 'fortinet-fortigate'
  | 'teamviewer'
  | 'anydesk'
  | 'sap-s4-hana-private-cloud'
  | 'sap-b1-cloud'
  | 'sap-hosting'
  | 'cloud-desktop-enterprise-vdi'
  | 'accops-digital-workspace'
  | 'accops-hyworks' | 'accops-hysecure' | 'accops-hyid' | 'accops-hylabs' | 'accops-hydesk' | 'more-from-accops'
  | 'ai-identity-security' | 'ai-security-platform' | 'ai-security-audit' | 'ai-security-assessment' | 'ai-red-teaming-services'
  | 'managed-gws' | 'managed-mdm' | 'managed-intune-services' | 'managed-phishing-simulation'
  | 'power-pages' | 'power-apps' | 'power-automate' | 'power-bi'
  | 'cpanel-control-panel' | 'plesk-control-panel' | 'webuzo-control-panel' | 'cloudlinux' | 'plesk-servers' | 'cpanel-servers'
  | 'managed-microsoft-sentinel'
  | 'sage-300-hosting'
  | 'sage-x3-hosting'
  | 'virtual-networks'
  | 'virtual-firewalls'
  | 'virtual-load-balancer'
  | 'gcc-cloud'
  | 'scrutiny-dlp'
  | 'scrutiny-edr'
  | 'sap-on-aws'
  | 'sap-on-gcp'
  | 'sap-on-azure'
  | 'developer-page'
  | 'cybird'
  | 'cybird-sections'

  | 'veritas'

  | 'inference-page'
  | 'vps-page'
  | 'sectigo-detail'
  | 'project-server'
  | 'microsoft-viva'
  | 'microsoft-visio'
  | 'genian-nac'
  | 'wordpress-vps' | 'wordpress-vps-hero' | 'general-compute' | 'general-compute-hero' | 'bio-link' | 'bio-link-hero' | 'cpanel' | 'cpanel-hero' | 'acronis-ai' | 'acronis-ai-hero' | 'openclaw' | 'openclaw-hero' | 'kubernetes' | 'podcasts' | 'deepcall' | 'workspace' | '47-day-ssl' | '47-day-ssl-hero' | 'direct-backup' | 'direct-backup-hero' | 'druva' | 'druva-hero'
  | 'rapidssl' | 'sectigo' | 'sectigo-ev' | 'mark' | 'website-security'
  | 'certificate-management' | 'code-signing-certificates' | 'email-signing-certificates'
  | 'consulting' | 'digicert-standard-ssl' | 'digicert-ev-ssl'
  | 'digicert-multi-domain-ssl' | 'ssl-detail' | 'managed-pki' | 'managed-pki-hero' | 'private-ca' | 'private-ca-hero' | 'iot-pki' | 'iot-pki-hero' | 'iot-device-certificates' | 'iot-device-certificates-hero' | 'cloud-code-signing' | 'cloud-code-signing-hero' | 'clm-solutions' | 'clm-solutions-hero' | 'matter-dac' | 'matter-dac-hero' | 'pki-software' | 'pki-software-hero' | 'windows-365' | 'windows-365-hero';

@Component({
  selector: 'xh-imported-interactive-content',
  standalone: true,
  host: { '[class.openclaw-page-content]': "source === 'openclaw' || source === 'cpanel'" },
  template: `@if (source === 'cybird' || source === 'veritas') {
    <iframe #frame [srcdoc]="embeddedDocument()" [title]="contentTitle"
      scrolling="no" (load)="onLoad()"></iframe>
  } @else {
    <iframe #frame [style.min-height.px]="source.endsWith('-hero') ? 0 : 600"
      [src]="contentUrl" [title]="contentTitle" scrolling="no" (load)="onLoad()"></iframe>
  }`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:600px;border:0}`],
})
export class ImportedInteractiveContentComponent implements OnChanges, OnDestroy {
  @Input() source: InteractiveContentSource = 'kubernetes';
  @Input() consultingSlug = '';
  @Input() sslSlug = '';
  @Input() vpsSlug = '';
  @Input() sectigoSlug = '';
  @Input() inferenceSlug = '';
  @Input() developerSlug = '';
  private readonly developerSlugs = new Set(['openstack-api', 'terraform-provider', 's3-object-storage-api', 'openstack-cli', 'openstack-credentials', 'kubernetes-api']);
  private readonly inferenceSlugs = new Set(['serverless-inference', 'dedicated-inference', 'model-catalog', 'model-directory']);
  private readonly sectigoSlugs = new Set(['sectigo-ssl', 'sectigo-ov-ssl-wildcard', 'sectigo-ov-ssl', 'sectigo-acme-certificate-as-a-service', 'sectigo-ssl-wildcard', 'sectigo-ssl-multi-domain-ucc', 'sectigo-ov-ssl-multi-domain-wildcard', 'sectigo-ov-ssl-multi-domain-ucc', 'sectigo-ev-ssl-multi-domain-ucc', 'sectigo-ev-ssl']);
  private readonly vpsSlugs = new Set(['wordpress-vps', 'windows-vps', 'vps-usa', 'vps-netherlands', 'vps-india', 'vps-hosting', 'openclaw-vps', 'n8n-vps', 'cpanel-vps']);

  private readonly sanitizer = inject(DomSanitizer);
  readonly embeddedDocument = signal<SafeHtml | null>(null);
  private embeddedSource: 'cybird' | 'veritas' | null = null;
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly cart = inject(CartService);
  private readonly leads = inject(LeadService);
  private readonly safeUrls = new Map<string, SafeResourceUrl>();
  private readonly consultingUrls: Record<string, string> = {
    'managed-grc': '/imported-consulting-managed-grc.html',
    'iso-27001-consulting': '/imported-consulting-iso-27001.html',
    'iso-20000-itsm': '/imported-consulting-iso-20000.html',
    'iso-27017-cloud-infosec': '/imported-consulting-iso-27017.html',
    'iso-22301-bmc': '/imported-consulting-iso-22301.html',
    'iso-27018-pii-public-cloud': '/imported-consulting-iso-27018.html',
    'iso-42001ai-risk': '/imported-consulting-iso-42001.html',
    'soc-1-cunsulting': '/imported-consulting-soc-1.html',
    'soc-2-cunsulting': '/imported-consulting-soc-2.html',
    'pci-consulting': '/imported-consulting-pci-dss.html',
  };
  private readonly sslSlugs = new Set([
    'digicert-ev-multi-domain-ssl', 'digicert-wildcard-ssl',
    'digicert-secure-site-ev-ssl', 'digicert-secure-site-multi-domain-ssl',
    'digicert-secure-site-wildcard-ssl', 'digicert-secure-site-pro-ssl',
    'digicert-secure-site-pro-ev-ssl',
  ]);
  private readonly sourceUrls: Record<
    Exclude<InteractiveContentSource, 'consulting' | 'ssl-detail' | 'vps-page' | 'sectigo-detail' | 'inference-page' | 'developer-page'>,
    string
  > = {
    'email-security-enterprise': '/imported-email-security-enterprise.html',
    'red-hat': '/imported-red-hat.html',
    'sitelock': '/imported-sitelock.html',
    'ssl-installation-service': '/imported-ssl-installation-service.html',
    'acronis-ot': '/imported-acronis-ot.html',
    'whats-new': '/imported-whats-new.html',
    'fortinet-fortigate': '/imported-fortinet-fortigate.html',
    'teamviewer': '/imported-teamviewer.html',
    'anydesk': '/imported-anydesk.html',
    'sap-s4-hana-private-cloud': '/imported-sap-s4-hana-private-cloud.html',
    'sap-b1-cloud': '/imported-sap-b1-cloud.html',
    'sap-hosting': '/imported-sap-hosting.html',
    'cloud-desktop-enterprise-vdi': '/imported-cloud-desktop-enterprise-vdi.html',
    'accops-digital-workspace': '/imported-accops-digital-workspace.html',
    'accops-hyworks': '/imported-accops-hyworks.html',
    'accops-hysecure': '/imported-accops-hysecure.html',
    'accops-hyid': '/imported-accops-hyid.html',
    'accops-hylabs': '/imported-accops-hylabs.html',
    'accops-hydesk': '/imported-accops-hydesk.html',
    'more-from-accops': '/imported-more-from-accops.html',
    'cpanel-control-panel': '/imported-cpanel-control-panel.html',
    'power-pages': '/imported-power-pages.html',
    'managed-gws': '/imported-managed-gws.html',
    'ai-identity-security': '/imported-ai-identity-security.html',
    'ai-security-platform': '/imported-ai-security-platform.html',
    'ai-security-audit': '/imported-ai-security-audit.html',
    'ai-security-assessment': '/imported-ai-security-assessment.html',
    'ai-red-teaming-services': '/imported-ai-red-teaming-services.html',
    'managed-mdm': '/imported-managed-mdm.html',
    'managed-intune-services': '/imported-managed-intune-services.html',
    'managed-phishing-simulation': '/imported-managed-phishing-simulation.html',
    'power-apps': '/imported-power-apps.html',
    'power-automate': '/imported-power-automate.html',
    'power-bi': '/imported-power-bi.html',
    'plesk-control-panel': '/imported-plesk-control-panel.html',
    'webuzo-control-panel': '/imported-webuzo-control-panel.html',
    'cloudlinux': '/imported-cloudlinux.html',
    'plesk-servers': '/imported-plesk-servers.html',
    'cpanel-servers': '/imported-cpanel-servers.html',
    'managed-microsoft-sentinel': '/imported-managed-microsoft-sentinel.html',
    'sage-300-hosting': '/imported-sage-300-hosting.html',
    'sage-x3-hosting': '/imported-sage-x3-hosting.html',
    'virtual-networks': '/imported-virtual-networks.html',
    'virtual-firewalls': '/imported-virtual-firewalls.html',
    'virtual-load-balancer': '/imported-virtual-load-balancer.html',
    'gcc-cloud': '/imported-gcc-cloud.html',
    'sap-on-azure': '/imported-sap-on-azure.html',
    'sap-on-gcp': '/imported-sap-on-gcp.html',
    'sap-on-aws': '/imported-sap-on-aws.html',
    'scrutiny-dlp': '/imported-scrutiny-dlp.html',
    'scrutiny-edr': '/imported-scrutiny-edr.html',
    cybird: 'about:blank',

    'cybird-sections': '/imported-cybird-sections.html',

    veritas: 'about:blank',

    'managed-pki': '/imported-managed-pki.html',
    'managed-pki-hero': '/imported-managed-pki-hero.html',
    'private-ca': '/imported-private-ca.html',
    'private-ca-hero': '/imported-private-ca-hero.html',
    'iot-pki': '/imported-iot-pki.html',
    'iot-pki-hero': '/imported-iot-pki-hero.html',
    'iot-device-certificates': '/imported-iot-device-certificates.html',
    'iot-device-certificates-hero': '/imported-iot-device-certificates-hero.html',
    'cloud-code-signing': '/imported-cloud-code-signing.html',
    'cloud-code-signing-hero': '/imported-cloud-code-signing-hero.html',
    'clm-solutions': '/imported-clm-solutions.html',
    'clm-solutions-hero': '/imported-clm-solutions-hero.html',
    'matter-dac': '/imported-matter-dac.html',
    'matter-dac-hero': '/imported-matter-dac-hero.html',
    'pki-software': '/imported-pki-software.html',
    'pki-software-hero': '/imported-pki-software-hero.html',
    'windows-365': '/imported-windows-365.html',
    'windows-365-hero': '/imported-windows-365-hero.html',

    'project-server': '/imported-project-server.html',
    'microsoft-viva': '/imported-microsoft-viva.html',
    'microsoft-visio': '/imported-microsoft-visio.html',
    'genian-nac': '/imported-genian-nac.html',

    'wordpress-vps': '/imported-wordpress-vps.html',
    'wordpress-vps-hero': '/imported-wordpress-vps-hero.html',
    'general-compute': '/imported-general-compute.html',
    'general-compute-hero': '/imported-general-compute-hero.html',
    'bio-link': '/imported-bio-link.html',
    'bio-link-hero': '/imported-bio-link-hero.html',
    '47-day-ssl': '/imported-47-day-ssl.html',
    '47-day-ssl-hero': '/imported-47-day-ssl-hero.html',
    'direct-backup': '/imported-acronis-direct-backup.html',
    'direct-backup-hero': '/imported-acronis-direct-backup-hero.html',
    druva: '/imported-druva.html',
    'druva-hero': '/imported-druva-hero.html',
    cpanel: '/imported-cpanel-vps.html',
    'cpanel-hero': '/imported-cpanel-vps-hero.html',
    'acronis-ai': '/imported-acronis-ai.html',
    'acronis-ai-hero': '/imported-acronis-ai-hero.html',
    openclaw: '/imported-openclaw-vps.html',
    'openclaw-hero': '/imported-openclaw-vps-hero.html',
    kubernetes: '/imported-kubernetes.html',
    podcasts: '/imported-podcasts.html',
    deepcall: '/imported-deepcall.html',
    workspace: '/imported-sarv-workspace.html',
    rapidssl: '/imported-rapidssl.html',
    sectigo: '/imported-sectigo-code-signing.html',
    'sectigo-ev': '/imported-sectigo-ev-code-signing.html',
    mark: '/imported-mark-certificates.html',
    'website-security': '/imported-website-security.html',
    'certificate-management': '/imported-certificate-management.html',
    'code-signing-certificates': '/imported-code-signing-certificates.html',
    'email-signing-certificates': '/imported-email-signing-certificates.html',
    'digicert-standard-ssl': '/imported-digicert-standard-ssl.html',
    'digicert-ev-ssl': '/imported-digicert-ev-ssl.html',
    'digicert-multi-domain-ssl': '/imported-digicert-multi-domain-ssl.html',
  };
  private readonly sourceTitles: Record<InteractiveContentSource, string> = {
    'email-security-enterprise': 'Email Security Enterprise, animated mail estate, high availability, DLP, DMARC and archive scenes, estate sizing and change-managed rollout',
    'red-hat': 'Red Hat services, animated RHEL, Ansible, OpenShift, virtualisation and AI scenes, service explorer and Stack Builder',
    'sitelock': 'SiteLock Website Security, animated scan, WAF, CDN, patching and trust seal scenes, plans and Why XcellHost',
    'ssl-installation-service': 'SSL Installation Service, animated installation desk, platforms, pricing, installation configurator and related certificates',
    'acronis-ot': 'Acronis Cyber Protect for OT, animated demo, coverage, plant sizing, recovery calculator and quotation',
    'whats-new': 'What’s New at XcellHost, animated release radar, launch spotlights and filterable release log',
    'fortinet-fortigate': 'Fortinet FortiGate, animated demo, Security Fabric, models, sizing, configuration and FAQs',
    'teamviewer': 'TeamViewer remote access, animated demo, plans, pricing, selection tools and FAQs',
    'anydesk': 'AnyDesk remote access, animated demo, editions, pricing, selection tools and FAQs',
    'sap-s4-hana-private-cloud': 'SAP S/4HANA Private Cloud, animated demo, getting started, configurator, HANA sizing and FAQs',
    'sap-b1-cloud': 'SAP B1 HANA on Cloud, animated demo, getting started, plans, calculators and FAQs',
    'sap-hosting': 'SAP Hosting, animated demo, hosting process, plans, landscape sizer and FAQs',
    'cloud-desktop-enterprise-vdi': 'Cloud Desktop Enterprise VDI, animated demo, use cases, rollout timeline, pricing and FAQs',
    'accops-digital-workspace': 'Accops Digital Workspace, animated demo, use cases, pricing, support and FAQs',
    'accops-hyworks': 'Accops HyWorks, features, tools, pricing and FAQs',
    'accops-hysecure': 'Accops HySecure, features, tools, pricing and FAQs',
    'accops-hyid': 'Accops HyID, features, tools, pricing and FAQs',
    'accops-hylabs': 'Accops HyLabs, features, tools, pricing and FAQs',
    'accops-hydesk': 'Accops HyDesk, features, tools, pricing and FAQs',
    'more-from-accops': 'More From Accops, features, tools, pricing and FAQs',
    'cpanel-control-panel': 'cPanel Control Panel licensing, tools, pricing and FAQs',
    'power-pages': 'Microsoft Power Pages portals, plans, tools and FAQs',
    'managed-gws': 'Managed Google Workspace services, tools, pricing and FAQs',
    'ai-identity-security': 'AI Identity Security services, tools, pricing and FAQs',
    'ai-security-platform': 'AI Security Platform capabilities, tools, pricing and FAQs',
    'ai-security-audit': 'AI Security Audit scope, readiness tools, pricing and FAQs',
    'ai-security-assessment': 'AI Security Assessment scope, tools, pricing and FAQs',
    'ai-red-teaming-services': 'AI Red Teaming scope, coverage tools, pricing and FAQs',
    'managed-mdm': 'Managed MDM services, tools, pricing and FAQs',
    'managed-intune-services': 'Managed Intune services, tools, pricing and FAQs',
    'managed-phishing-simulation': 'Managed phishing simulation services, awareness tools, pricing and FAQs',
    'power-apps': 'Microsoft Power Apps applications, plans, tools and FAQs',
    'power-automate': 'Microsoft Power Automate workflows, plans, tools and FAQs',
    'power-bi': 'Microsoft Power BI dashboards, plans, tools and FAQs',
    'plesk-control-panel': 'Plesk Control Panel licensing, tools, pricing and FAQs',
    'webuzo-control-panel': 'Webuzo Control Panel licensing, tools, pricing and FAQs',
    'cloudlinux': 'CloudLinux OS licensing, resource isolation, pricing and FAQs',
    'plesk-servers': 'Managed Plesk Servers, sizing, pricing and FAQs',
    'cpanel-servers': 'Managed cPanel Servers, sizing, pricing and FAQs',
    'managed-microsoft-sentinel': 'Managed Microsoft Sentinel SOC, pricing, interactive tools and FAQs',
    'sage-300-hosting': 'Sage 300 ERP Hosting, plans, add-ons, configurator and FAQs',
    'sage-x3-hosting': 'Sage X3 Hosting, plans, add-ons, configurator and FAQs',
    'virtual-networks': 'Virtual Networks, VPC plans, subnet designer and FAQs',
    'virtual-firewalls': 'Virtual Firewalls, plans, rule tester and FAQs',
    'virtual-load-balancer': 'Virtual Load Balancer, plans, traffic simulator and FAQs',
    'gcc-cloud': 'GCC Cloud services, lifecycle, planner and FAQs',
    'developer-page': 'XcellCloud developer tools, API examples and documentation',
    'sap-on-azure': 'SAP on Azure services, pricing, sizing tools and FAQs',
    'sap-on-gcp': 'SAP on Google Cloud services, pricing, sizing tools and FAQs',
    'sap-on-aws': 'SAP on AWS services, pricing, sizing tools and FAQs',
    'scrutiny-dlp': 'Scrutiny DLP plans, classifier, policy tools and FAQs',
    'scrutiny-edr': 'Scrutiny EDR plans, threat simulator, trial enquiry and FAQs',
    cybird: 'Cybird X2 security platform, animated network, plans and threat simulator',

    'cybird-sections': 'Cybird features, benefits, operation, hardware, threat simulator, comparisons, use cases, partners and pricing',

    veritas: 'Veritas AI visibility and SEO platform, interactive tools and pricing',


    'managed-pki': 'Managed PKI overview, comparisons, use-case builder and pricing',
    'managed-pki-hero': 'Managed PKI root ceremony, issuance, revocation and renewal animation',
    'private-ca': 'Private CA overview, certificate designer, comparisons, setup and pricing',
    'private-ca-hero': 'Private CA root ceremony, certificate issuance and trust animation',
    'iot-pki': 'IoT PKI provisioning, threat mapper, fleet sizing and pricing',
    'iot-pki-hero': 'IoT PKI factory provisioning and device identity animation',
    'iot-device-certificates': 'IoT Device Certificates lifecycle, certificate picker, comparisons and pricing',
    'iot-device-certificates-hero': 'IoT Device Certificates fleet identity map animation',
    'cloud-code-signing': 'Cloud Code Signing policies, CI integrations, product comparison and pricing',
    'cloud-code-signing-hero': 'Cloud Code Signing build pipeline, policy gate and HSM animation',
    'clm-solutions': 'CLM Solutions platform comparison, workload calculator, chooser and pricing',
    'clm-solutions-hero': 'Certificate lifecycle discovery, inventory and renewal animation',
    'matter-dac': 'Matter DAC trust chain, commissioning simulator, manufacturing planner and pricing',
    'matter-dac-hero': 'Matter device commissioning and attestation animation',
    'pki-software': 'PKI Software platform comparison, chooser, architecture builder and pricing',
    'pki-software-hero': 'PKI Software infrastructure deployment and operation animation',
    'windows-365': 'Windows 365 Cloud PC plans, finder, configurator, apps and cost calculators',
    'windows-365-hero': 'Windows 365 Cloud PC desktop, Entra ID, Intune and device continuity animation',

    'inference-page': 'Inference Cloud models, features and deployment options',
    'sectigo-detail': 'Sectigo certificate features, validation and pricing',

    'vps-page': 'VPS hosting features, plans and server configurator',
    'project-server': 'Microsoft Project Server features, migration and pricing',
    'microsoft-viva': 'Microsoft Viva modules, employee experience and pricing',
    'microsoft-visio': 'Microsoft Visio diagrams, plans and pricing',
    'genian-nac': 'Genian NAC network access control, demos and pricing',

    'wordpress-vps': 'WordPress VPS plans, server builder and Why XcellHost',
    'wordpress-vps-hero': 'WordPress VPS animated hero and speed preview',
    'general-compute': 'General Compute plans, add-ons and launch steps',
    'general-compute-hero': 'General Compute interactive deploy preview',
    'bio-link': 'Bio Link and Digital Visiting Card tools and pricing',
    'bio-link-hero': 'XcellCard animated visiting card preview',
    '47-day-ssl': '47-Day SSL readiness, automation and pricing tools',
    '47-day-ssl-hero': '47-Day SSL certificate renewal animation',
    'direct-backup': 'Acronis Direct Cloud Backup features and interactive tools',
    'direct-backup-hero': 'Acronis direct cloud backup animation',
    druva: 'Druva Resilience Cloud features and interactive tools',
    'druva-hero': 'Druva resilience timeline animation',
    cpanel: 'cPanel VPS plans and server builder',
    'cpanel-hero': 'cPanel hosting console',
    'acronis-ai': 'Acronis AI platform, interactive demos and pricing',
    'acronis-ai-hero': 'Acronis Cyber Console animated overview',
    openclaw: 'OpenClaw VPS plans and server builder',
    'openclaw-hero': 'OpenClaw agent console',
    kubernetes: 'Managed Kubernetes workloads and calculator',
    podcasts: 'XcellHost Cloud Podcast',
    deepcall: 'Sarv DeepCall features, IVR builder and calculator',
    workspace: 'XcellWorkSpace applications and pricing',
    rapidssl: 'RapidSSL certificates, selector and calculator',
    sectigo: 'Sectigo Code Signing tools and pricing',
    'sectigo-ev': 'Sectigo EV Code Signing tools and pricing',
    mark: 'Mark Certificates eligibility, preview and pricing',
    'website-security': 'Website Security Solutions scorecard and pricing',
    'certificate-management': 'Certificate Management dashboard and calculators',
    'code-signing-certificates': 'Code Signing Certificates tools and pricing',
    'email-signing-certificates': 'Email Signing Certificates tools and pricing',
    consulting: 'Security consulting content and tools',
    'digicert-standard-ssl': 'DigiCert Standard SSL features and pricing',
    'digicert-ev-ssl': 'DigiCert EV SSL features and pricing',
    'digicert-multi-domain-ssl': 'DigiCert Multi-Domain SSL features and pricing',
    'ssl-detail': 'DigiCert certificate features and pricing',
  };


  @ViewChild('frame') frame?: ElementRef<HTMLIFrameElement>;
  private cleanup: (() => void)[] = [];

  ngOnChanges(): void {
    const source = this.source;
    if (source !== 'cybird' && source !== 'veritas') {
      this.embeddedSource = null;
      this.embeddedDocument.set(null);
      return;
    }
    if (this.embeddedSource === source) return;
    this.embeddedSource = source;
    this.embeddedDocument.set(null);
    const document = source === 'cybird'
      ? import('../data/cybird-document.data').then((module) => module.CYBIRD_DOCUMENT)
      : import('../data/veritas-document.data').then((module) => module.VERITAS_DOCUMENT);
    void document.then((html) => {
      if (this.source === source) this.embeddedDocument.set(this.sanitizer.bypassSecurityTrustHtml(html));
    });
  }

  get contentUrl(): SafeResourceUrl {
    let url: string;
    if (this.source === 'developer-page') {
      url = this.developerSlugs.has(this.developerSlug) ? `/imported-developer-${this.developerSlug}.html` : 'about:blank';
    } else if (this.source === 'inference-page') {
      url = this.inferenceSlugs.has(this.inferenceSlug) ? `/imported-inference-${this.inferenceSlug}.html` : 'about:blank';
    } else if (this.source === 'sectigo-detail') {
      url = this.sectigoSlugs.has(this.sectigoSlug) ? `/imported-sectigo-detail-${this.sectigoSlug}.html` : 'about:blank';
    } else if (this.source === 'vps-page') {
      url = this.vpsSlugs.has(this.vpsSlug) ? `/imported-vps-page-${this.vpsSlug}.html` : 'about:blank';
    } else if (this.source === 'consulting') {
      url = this.consultingUrls[this.consultingSlug] ?? 'about:blank';
    } else if (this.source === 'ssl-detail') {
      url = this.sslSlugs.has(this.sslSlug) ? `/imported-${this.sslSlug}.html` : 'about:blank';
      if (this.sslSlug === 'digicert-secure-site-pro-ssl') {
        url += '?v=powered-by-below-ai-2';
      }
    } else {
      url = this.sourceUrls[this.source];
    }
    let safeUrl = this.safeUrls.get(url);
    if (!safeUrl) {
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.safeUrls.set(url, safeUrl);
    }
    return safeUrl;
  }

  get contentTitle(): string { return this.sourceTitles[this.source]; }

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (doc) useScrollingSectionNavigation(doc);
    if (!frame || !doc || !main) return;
    const resize = () => {

      if (this.source === 'cybird' || this.source === 'cybird-sections') doc.documentElement.style.setProperty('--cybird-vh', `${window.innerHeight / 100}px`);
      if (this.source === 'veritas') doc.documentElement.style.setProperty('--veritas-vh', `${window.innerHeight / 100}px`);

      const height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    let resizeFrame = 0;
    const observer = new ResizeObserver(() => {

      if (this.source !== 'cybird' && this.source !== 'cybird-sections' && this.source !== 'veritas') { resize(); return; }

      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    const position = () => {
      const top = Math.max(0, -frame.getBoundingClientRect().top + 90);
      doc.querySelectorAll<HTMLElement>('.modal').forEach((modal) => {
        modal.style.position = 'absolute'; modal.style.top = `${top}px`; modal.style.bottom = 'auto';
        modal.style.height = `${Math.max(300, window.innerHeight - 100)}px`;
      });
      const mini = doc.getElementById('mini');
      if (mini) {
        mini.style.position = 'absolute';
        mini.style.top = `${Math.max(0, -frame.getBoundingClientRect().top + window.innerHeight - 100)}px`;
        mini.style.bottom = 'auto';
      }
    };
    const mutations = new MutationObserver(position);
    doc.querySelectorAll('.modal').forEach((modal) =>
      mutations.observe(modal, { attributes: true, attributeFilter: ['class'] }));
    window.addEventListener('scroll', position, { passive: true });
    position();
    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Podcast enquiry');
      this.overlay.open('callback');
    };
    const add = (event: Event) => {
      const item = (event as CustomEvent).detail;
      this.cart.add(item.name + ' - ' + item.sub, 'INR ' + item.price, item.qty,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    const newsletter = async (event: Event) => {
      if (this.source !== 'whats-new') return;
      const detail = (event as CustomEvent<{
        payload: Record<string, unknown>;
        complete: (result: { ok: boolean; skipped: boolean; ref: string; fallbackUrl: string }) => void;
      }>).detail;
      const result = await this.leads.submit('newsletter', { ...detail.payload, page: '/whats-new' });
      detail.complete({
        ...result,
        fallbackUrl: this.leads.mailtoLink(
          "Subscribe to XcellHost What's New",
          `Please subscribe ${String(detail.payload['email'] ?? '')} to What's New updates.\nInterests: ${String(detail.payload['interests'] || 'All new services')}`,
        ),
      });
    };
    const enquiry = async (event: Event) => {
      if (this.source !== 'acronis-ot' && this.source !== 'red-hat' && this.source !== 'email-security-enterprise') return;
      const detail = (event as CustomEvent<{
        payload: Record<string, unknown>;
        complete: (result: { ok: boolean; skipped: boolean; ref: string; fallbackUrl: string }) => void;
      }>).detail;
      const redHat = this.source === 'red-hat';
      const emailSecurity = this.source === 'email-security-enterprise';
      const topic = emailSecurity ? 'Email Security Enterprise quotation' : redHat ? 'Red Hat quotation' : 'Acronis OT quotation';
      const subject = topic + ' request';
      const payload = {
        ...detail.payload,
        message: emailSecurity ? detail.payload['summary'] : redHat ? detail.payload['services'] : detail.payload['sizing'],
        topic,
        page: emailSecurity ? '/email-security-enterprise' : redHat ? '/vendor-partners/red-hat' : '/acronis-ot',
      };
      const result = await this.leads.submit('callback', payload);
      detail.complete({
        ...result,
        fallbackUrl: this.leads.mailtoLink(
          subject,
          (emailSecurity ? ['name', 'company', 'email', 'phone', 'summary'] : redHat ? ['name', 'company', 'email', 'phone', 'services', 'servers'] : ['name', 'company', 'email', 'phone', 'sizing'])
            .map(key => `${key}: ${String(detail.payload[key] ?? '')}`).join('\n'),
        ),
      });
    };
    const click = (event: Event) => {
      const element = event.target as Element;
      const anchor = element.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = element.closest('[data-sel]') ? 'calc' : anchor?.getAttribute('href')?.slice(1);
      const target = id ? doc.getElementById(id) ?? document.getElementById(id) : null;
      if (!target) return;
      event.preventDefault();
      if (this.source === 'cybird' && anchor?.closest('.cybird-section-nav')) {
        doc.querySelectorAll('.cybird-section-nav a').forEach((link) => link.removeAttribute('aria-current'));
        anchor.setAttribute('aria-current', 'location');
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`);
      }
      const frameTop = target.ownerDocument === doc ? frame.getBoundingClientRect().top : 0;
      const anchorOffset = Number.parseFloat(doc.defaultView?.getComputedStyle(doc.documentElement).getPropertyValue('--xh-anchor-offset') || '') || 148;
      window.scrollTo({
        top: window.scrollY + frameTop + target.getBoundingClientRect().top - anchorOffset,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    };
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-cart', add);
    doc.addEventListener('import-newsletter', newsletter);
    doc.addEventListener('import-enquiry', enquiry);
    doc.addEventListener('click', click);
    this.cleanup.push(
      () => observer.disconnect(), () => cancelAnimationFrame(resizeFrame), () => mutations.disconnect(),
      () => window.removeEventListener('scroll', position),
      () => doc.removeEventListener('import-callback', callback),
      () => doc.removeEventListener('import-cart', add),
      () => doc.removeEventListener('import-newsletter', newsletter),
      () => doc.removeEventListener('import-enquiry', enquiry),
      () => doc.removeEventListener('click', click),
    );
  }

  ngOnDestroy(): void { this.cleanup.forEach((fn) => fn()); this.cleanup = []; }
}

