import type { CmsBlogPost } from './blog-api.service';

export interface BlogAdvertisement {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly href: string;
  readonly cta: string;
  readonly accent: string;
  readonly imageOnly?: boolean;
  readonly format?: 'feature' | 'light' | 'compact' | 'poster';
  readonly label?: string;
}

type AdvertisementSource = Pick<CmsBlogPost, 'slug' | 'title' | 'category' | 'mainCategory' | 'subCategory' | 'product' | 'relatedPages'>;

interface AdvertisementRule extends BlogAdvertisement {
  readonly match: RegExp;
}

const ad = (
  match: RegExp,
  title: string,
  description: string,
  image: string,
  href: string,
  options: Partial<Pick<BlogAdvertisement, 'eyebrow' | 'cta' | 'accent' | 'imageOnly'>> = {},
): AdvertisementRule => ({
  match,
  eyebrow: options.eyebrow ?? 'Recommended solution',
  title,
  description,
  image,
  imageAlt: `${title} from XcellHost`,
  href,
  cta: options.cta ?? 'Explore solution',
  accent: options.accent ?? '#1565d8',
  imageOnly: options.imageOnly,
});

/** Ordered from the most specific product match to broad category fallbacks. */
const ADVERTISEMENT_RULES: readonly AdvertisementRule[] = [
  ad(/tally(?:-|\s)*(?:on(?:-|\s)*)?cloud|tally-cloud/i, 'Tally on Cloud', 'Run Tally securely from anywhere with managed cloud infrastructure and 24x7 support.', '/assets/images/tally-on-cloud-blog-banner.jpg', '/tally-on-cloud', { accent: '#ff8c1a', imageOnly: true, cta: 'Start now' }),
  ad(/geotrust|ssl|certificate/i, 'GeoTrust SSL Certificates', 'Protect customer connections and build visible website trust with the right SSL certificate.', '/assets/images/menu-digital-trust-geotrust-ssl-v1.png', '/geotrust-ssl-certificates', { accent: '#18a999' }),
  ad(/google(?:-|\s)*workspace/i, 'Managed Google Workspace', 'Business email, collaboration and administration with migration and ongoing support.', '/assets/images/menu-productivity-managed-google-workspace-v1.png', '/google-workspace', { accent: '#34a853' }),
  ad(/microsoft(?:-|\s)*365|office(?:-|\s)*365/i, 'Microsoft 365 for Business', 'Bring email, collaboration, security and productivity together with expert migration support.', '/assets/images/menu-productivity-microsoft-365-smb-v1.png', '/microsoft-365-smb', { accent: '#6b5ce7' }),
  ad(/business(?:-|\s)*e-?mail|email(?:-|\s)*(?:for|security)/i, 'Secure Business Email', 'Give your team professional email with managed security, continuity and support.', '/assets/images/menu-productivity-email-security-smb-v1.png', '/business-e-mail', { accent: '#6b5ce7' }),
  ad(/ca(?:-|\s)*cloud|chartered accountant/i, 'CA Cloud', 'A secure managed workspace for accounting applications, teams and client data.', '/assets/images/menu-solutions-ca-cloud-v1.png', '/ca-cloud'),
  ad(/smb(?:-|\s)*cloud(?:-|\s)*desktop|cloud(?:-|\s)*desktop/i, 'SMB Cloud Desktop', 'A secure Windows workspace your team can use from the office, home or on the move.', '/assets/images/menu-productivity-smb-cloud-desktop-v1.png', '/smb-cloud-desktop'),
  ad(/remote(?:-|\s)*monitoring|\brmm\b/i, 'Remote Monitoring & Management', 'Monitor devices, automate maintenance and support users proactively from one managed platform.', '/assets/images/hero-rmm.png', '/remote-monitoring-and-mgmt-rmm', { accent: '#00a6a6' }),
  ad(/endpoint(?:-|\s)*security|\bedr\b/i, 'Advanced Endpoint Security + EDR', 'Detect, investigate and contain endpoint threats with managed protection and response.', '/assets/images/hero-advanced-endpoint-security-edr.svg', '/advanced-endpoint-security-edr', { accent: '#e84b4b' }),
  ad(/smb(?:-|\s)*cyber|security(?:-|\s)*appliance/i, 'SMB Cyber Security Appliance', 'Protect business networks, users and internet access with one managed security appliance.', '/assets/images/hero-smb-cyber-security-appliance.png', '/smb-cyber-security-appliance', { accent: '#e84b4b' }),
  ad(/gen(?:-|\s)*ai(?:-|\s)*protection|acronis(?:-|\s)*genai/i, 'Acronis GenAI Protection', 'Control generative AI usage and help prevent sensitive business data from leaving approved workflows.', '/assets/images/acronis-genai-protection.png', '/acronis-genai-protection', { accent: '#7c3aed' }),
  ad(/cloud(?:-|\s)*disaster(?:-|\s)*recovery|\bcloud-dr\b/i, 'Cloud Disaster Recovery', 'Keep critical workloads recoverable with managed replication, failover planning and testing.', '/assets/images/menu-data-protection-cloud-dr-smb-v1.png', '/cloud-disaster-recovery-smb', { accent: '#159447' }),
  ad(/cloud(?:-|\s)*backup|acronis(?:-|\s)*(?:advanced(?:-|\s)*)?backup|data(?:-|\s)*resilience|backup(?:-|\s)*storage/i, 'Managed Cloud Backup', 'Protect business data with automated backups, monitored recovery points and expert support.', '/assets/images/hero-cloud-backup-acronis.png', '/cloud-backup', { accent: '#159447' }),
  ad(/cloud(?:-|\s)*drive|file(?:-|\s)*storage|file(?:-|\s)*sharing/i, 'Cloud Drive for Business', 'Store, share and collaborate on business files with governed access and version history.', '/assets/images/cloud-drive-tour-dashboard.jpg', '/cloud-drive', { accent: '#00a6a6' }),
  ad(/workforce(?:-|\s)*analytics/i, 'Workforce Analytics', 'Turn activity and attendance data into practical visibility for managers and teams.', '/assets/images/rmm-advanced-platform.png', '/workforce-analytics', { accent: '#7c3aed' }),
  ad(/dpdpa|data(?:-|\s)*protection(?:-|\s)*readiness|privacy/i, 'DPDPA Readiness for SMBs', 'Move from policy documents to practical privacy workflows, ownership and evidence.', '/assets/images/menu-security-dpdpa-consulting-v1.png', '/dpdpa-for-smb', { accent: '#db2777' }),
  ad(/identity(?:-|\s)*resilience|entra(?:-|\s)*id/i, 'Identity Security', 'Protect trusted access with stronger identity controls, monitoring and recoverability.', '/assets/images/menu-security-microsoft-entra-id-v1.png', '/identity-and-access-management', { accent: '#7c3aed' }),
  ad(/nvidia|gpu(?:-|\s)*cloud|\ba(?:2|30|100)\b|\bh(?:100|200)\b|\bl4(?:0s)?\b|rtx/i, 'NVIDIA GPU Cloud', 'Accelerate AI, inference, rendering and high-performance workloads on managed GPU infrastructure.', '/assets/images/hero-gpu-cloud-v2.png', '/gpu-cloud', { accent: '#76b900' }),
  ad(/oracle(?:-|\s)*cloud/i, 'Managed Oracle Cloud', 'Plan, migrate and operate Oracle workloads with managed cloud expertise.', '/assets/images/platforms/oracle-oci.png', '/managed-oracle', { accent: '#f05023' }),
  ad(/tsplus(?:-|\s)*server(?:-|\s)*monitoring/i, 'TSplus Server Monitoring', 'Track server and website health with clear dashboards, alerts and reports.', '/assets/images/tsplus-server-monitoring-tour-dashboard.png', '/tsplus-server-monitoring', { accent: '#ef4444' }),
  ad(/tsplus(?:-|\s)*remote(?:-|\s)*support/i, 'TSplus Remote Support', 'Deliver secure attended and unattended support across business devices.', '/assets/images/tsplus-remote-support-tour-windows.png', '/tsplus-remote-support', { accent: '#ef4444' }),
  ad(/tsplus(?:-|\s)*advanced(?:-|\s)*security/i, 'TSplus Advanced Security', 'Add layered protection to remote-access servers and user sessions.', '/assets/images/menu-marketplace-tsplus-advanced-security-v1.png', '/tsplus-advanced-security', { accent: '#ef4444' }),
  ad(/tsplus(?:-|\s)*remote(?:-|\s)*access/i, 'TSplus Remote Access', 'Publish Windows applications and desktops securely through a simple web portal.', '/assets/images/menu-marketplace-tsplus-remote-access-v1.png', '/tsplus-remote-access', { accent: '#ef4444' }),
  ad(/domain|\bdns\b/i, 'Business Domains', 'Register, manage and protect the domains that customers use to find and trust your business.', '/assets/images/menu-register-domain.png', '/register-a-domain-name', { accent: '#f59e0b' }),
  ad(/object(?:-|\s)*storage/i, 'Cloud Object Storage', 'Build durable, scalable storage for backups, archives and application data.', '/assets/images/menu-data-protection-cloud-object-storage-v1.png', '/cloud-object-storage', { accent: '#159447' }),
  ad(/ai(?:-|\s)*voice|voice(?:-|\s)*bot/i, 'AI Voice Bot', 'Automate routine customer calls while keeping conversations available around the clock.', '/assets/images/menu-productivity-cloud-contact-center-v1.png', '/ai-voice-bot', { accent: '#7c3aed' }),
  ad(/ai(?:-|\s)*resilience|generative(?:-|\s)*ai|artificial(?:-|\s)*intelligence/i, 'AI Solutions from XcellHost', 'Adopt AI with the infrastructure, protection and operational support needed for reliable business use.', '/assets/images/menu-solutions-acronis-ai-v1.png', '/ai', { accent: '#7c3aed' }),
  ad(/casb|devsecops|\bsoc\b|\bsoar\b|\bsiem\b|ztna|sase|secure(?:-|\s)*(?:web|service)|cyber|security/i, 'Cloud Security Assessment', 'Find security gaps, prioritise risk and build a practical improvement roadmap.', '/assets/images/menu-security-cloud-security-assessment-v1.png', '/cloud-security-assessment', { accent: '#e84b4b' }),
  ad(/cloud(?:-|\s)*hosting|cloud(?:-|\s)*repatriation|performance(?:-|\s)*cloud|memory(?:-|\s)*optimized|infrastructure/i, 'Cloud Infrastructure', 'Right-size compute, storage and managed operations for dependable business workloads.', '/assets/images/hero-performance-cloud-v2.png', '/performance-cloud'),
  ad(/marketplace/i, 'XcellHost Marketplace', 'Discover managed software, security and infrastructure solutions in one place.', '/assets/images/menu-marketplace-marketplace-v1.png', '/marketplace', { accent: '#f59e0b' }),
  ad(/productivity/i, 'Modern Workplace Solutions', 'Equip teams with secure email, collaboration and managed productivity tools.', '/assets/images/menu-productivity-microsoft-365-smb-v1.png', '/microsoft-365-smb', { accent: '#6b5ce7' }),
  ad(/data(?:-|\s)*protection|backup|recovery/i, 'Backup & Disaster Recovery', 'Protect critical data and keep recovery practical with managed resilience services.', '/assets/images/hero-cloud-backup-acronis.png', '/backup-disaster-recovery', { accent: '#159447' }),
  ad(/digital(?:-|\s)*trust/i, 'Digital Trust', 'Protect websites, identities and digital transactions with managed trust services.', '/assets/images/menu-digital-trust-ssl-certificates-v1.png', '/ssl-certificates', { accent: '#18a999' }),
];

const DEFAULT_ADVERTISEMENT = ad(/./, 'Managed Cloud Solutions', 'Turn this insight into a practical next step with XcellHost cloud and managed services.', '/assets/images/menu-solutions-cloud-infrastructure-v1.png', '/cloud-infrastructure');

const companion = (
  title: string,
  description: string,
  image: string,
  href: string,
  accent = '#1565d8',
): BlogAdvertisement => {
  const { match: _match, ...advertisement } = ad(/./, title, description, image, href, { accent });
  return advertisement;
};

const CLOUD_AD = companion('Cloud Infrastructure', 'Right-size compute, storage and managed operations for dependable business workloads.', '/assets/images/hero-performance-cloud-v2.png', '/performance-cloud');
const BACKUP_AD = companion('Managed Cloud Backup', 'Protect business data with monitored backups and practical recovery support.', '/assets/images/hero-cloud-backup-acronis.png', '/cloud-backup', '#159447');
const SECURITY_AD = companion('Managed Cybersecurity', 'Strengthen prevention, detection and response with XcellHost security specialists.', '/assets/images/menu-security-mdr-v1.png', '/managed-detection-response', '#e84b4b');
const DR_AD = companion('Cloud Disaster Recovery', 'Prepare critical workloads for disruption with replication, failover and recovery testing.', '/assets/images/menu-data-protection-cloud-dr-smb-v1.png', '/cloud-disaster-recovery-smb', '#159447');

const COMPANION_GROUPS: readonly { readonly match: RegExp; readonly advertisements: readonly BlogAdvertisement[] }[] = [
  {
    match: /nvidia|gpu|\ba(?:2|30|100)\b|\bh(?:100|200)\b|\bl4(?:0s)?\b|rtx/i,
    advertisements: [
      companion('AI Solutions from XcellHost', 'Build and operate business AI with managed platforms, protection and support.', '/assets/images/menu-solutions-acronis-ai-v1.png', '/ai', '#7c3aed'),
      CLOUD_AD,
      BACKUP_AD,
    ],
  },
  {
    match: /tally|ca(?:-|\s)*cloud|accounting|chartered accountant/i,
    advertisements: [
      companion('SMB Cloud Desktop', 'Give finance teams a secure managed Windows workspace from any location.', '/assets/images/menu-productivity-smb-cloud-desktop-v1.png', '/smb-cloud-desktop'),
      BACKUP_AD,
      companion('Remote Monitoring & Management', 'Monitor and maintain business devices proactively with managed RMM.', '/assets/images/hero-rmm.png', '/remote-monitoring-and-mgmt-rmm', '#00a6a6'),
    ],
  },
  {
    match: /microsoft(?:-|\s)*365|office(?:-|\s)*365|google(?:-|\s)*workspace|productivity|business(?:-|\s)*e-?mail/i,
    advertisements: [
      companion('Microsoft 365 Backup', 'Protect Exchange, OneDrive, SharePoint and Teams data independently.', '/assets/images/menu-data-protection-microsoft-365-backup-v1.png', '/microsoft-365-backup', '#159447'),
      companion('Managed Email Security', 'Reduce phishing, malware and account-takeover risk across business email.', '/assets/images/menu-productivity-email-security-enterprise-v1.png', '/advanced-email-security', '#6b5ce7'),
      companion('SMB Cloud Desktop', 'Bring applications and files into a secure managed workspace.', '/assets/images/menu-productivity-smb-cloud-desktop-v1.png', '/smb-cloud-desktop'),
    ],
  },
  {
    match: /backup|recovery|resilience|data(?:-|\s)*protection|object(?:-|\s)*storage/i,
    advertisements: [
      DR_AD,
      companion('Cloud Object Storage', 'Add durable, scalable storage for backups, archives and application data.', '/assets/images/menu-data-protection-cloud-object-storage-v1.png', '/cloud-object-storage', '#159447'),
      SECURITY_AD,
    ],
  },
  {
    match: /geotrust|ssl|certificate|domain|\bdns\b|digital(?:-|\s)*trust/i,
    advertisements: [
      companion('Business Domains', 'Register, manage and protect the domains behind your digital presence.', '/assets/images/menu-register-domain.png', '/register-a-domain-name', '#f59e0b'),
      companion('DNS Trust', 'Improve resilience and control across the DNS services your business relies on.', '/assets/images/menu-digital-trust-dns-trust-v1.png', '/dns-trust', '#18a999'),
      companion('Website Security', 'Add monitoring and protection around public websites and customer journeys.', '/assets/images/hero-web-security-sitelock-wide.png', '/website-security', '#e84b4b'),
    ],
  },
  {
    match: /casb|devsecops|\bsoc\b|\bsoar\b|\bsiem\b|ztna|sase|secure|cyber|security|endpoint|\bedr\b/i,
    advertisements: [
      companion('Managed Detection & Response', 'Add continuous monitoring, investigation and guided response.', '/assets/images/menu-security-mdr-v1.png', '/managed-detection-response', '#e84b4b'),
      companion('VAPT Services', 'Find exploitable weaknesses and prioritise remediation with practical testing.', '/assets/images/menu-security-vapt-services-v1.png', '/vapt-services', '#f97316'),
      BACKUP_AD,
    ],
  },
  {
    match: /ai|voice(?:-|\s)*bot|automation|genai/i,
    advertisements: [
      companion('NVIDIA GPU Cloud', 'Accelerate AI training, inference and high-performance workloads.', '/assets/images/hero-gpu-cloud-v2.png', '/gpu-cloud', '#76b900'),
      companion('Acronis GenAI Protection', 'Help control generative AI use and protect sensitive business data.', '/assets/images/acronis-genai-protection.png', '/acronis-genai-protection', '#7c3aed'),
      CLOUD_AD,
    ],
  },
  {
    match: /cloud|hosting|infrastructure|server|oracle|memory(?:-|\s)*optimized/i,
    advertisements: [BACKUP_AD, SECURITY_AD, DR_AD],
  },
];

const DEFAULT_COMPANIONS: readonly BlogAdvertisement[] = [BACKUP_AD, SECURITY_AD, CLOUD_AD, DR_AD];

function searchableText(post: AdvertisementSource): string {
  return [post.slug, post.title, post.category, post.mainCategory, post.subCategory, post.product, post.relatedPages]
    .filter((value): value is string => Boolean(value))
    .join(' ');
}

export function getBlogAdvertisement(post: AdvertisementSource): BlogAdvertisement {
  const searchable = searchableText(post);
  const { match: _match, ...advertisement } = ADVERTISEMENT_RULES.find(rule => rule.match.test(searchable)) ?? DEFAULT_ADVERTISEMENT;
  return advertisement;
}

/** One primary campaign plus three related, non-duplicated sidebar campaigns. */
export function getBlogAdvertisements(post: AdvertisementSource, limit = 4): readonly BlogAdvertisement[] {
  const primary = getBlogAdvertisement(post);
  const related = COMPANION_GROUPS.find(group => group.match.test(searchableText(post)))?.advertisements ?? [];
  const unique = [primary, ...related, ...DEFAULT_COMPANIONS].filter((advertisement, index, items) =>
    items.findIndex(candidate => candidate.href === advertisement.href) === index
  );
  const formats: readonly NonNullable<BlogAdvertisement['format']>[] = ['feature', 'light', 'compact', 'poster'];
  const labels = ['Advertisement', 'Related service', 'Business essential', 'Explore next'] as const;

  return unique.slice(0, Math.max(1, limit)).map((advertisement, index) => ({
    ...advertisement,
    format: advertisement.imageOnly ? undefined : formats[index % formats.length],
    label: advertisement.imageOnly ? undefined : labels[index % labels.length],
  }));
}
