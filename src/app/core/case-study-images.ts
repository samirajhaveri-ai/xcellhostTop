import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';

type ImageSource = Pick<CaseStudy, 'id' | 'industry'> &
  Partial<Pick<CaseStudy, 'headline' | 'mainCategory' | 'coverImageUrl' | 'coverImageAlt'>>;

const GENERATED_IMAGES: Readonly<Record<string, { src: string; alt: string }>> = {
  'tally-cloud': { src: '/assets/images/case-studies/generated/tally-cloud.png', alt: "Three manufacturing branches sharing one live accounting workspace: miniature factory buildings linked by blue data paths to a central cloud and accounting ledger, subtle orange accents." },
  'ca-continuity': { src: '/assets/images/case-studies/generated/ca-continuity.png', alt: "Business continuity for an accounting practice: a closed failed desktop computer on one side and a working laptop on the other, a glowing cloud safely transferring the same folders and workspace to the laptop, soft teal accents." },
  'dpdpa-readiness': { src: '/assets/images/case-studies/generated/dpdpa-readiness.png', alt: "Enterprise privacy readiness programme: a circular network of document workflows, consent records, checkmarked audit evidence and a central glass privacy shield, calm indigo accents." },
  'cloud-drive-collaboration': { src: '/assets/images/case-studies/generated/cloud-drive-collaboration.png', alt: "A professional services team collaborating on one governed cloud drive: shared project folders with version history layers, secure sharing links between three laptops and a central blue cloud, turquoise accents." },
  'endpoint-security-response': { src: '/assets/images/case-studies/generated/endpoint-security-response.png', alt: "Endpoint detection and rapid threat containment in manufacturing: a grid of workstation devices with one suspicious red endpoint isolated inside a glowing protective boundary, the other devices safely connected, blue and amber accents." },
  'rmm-device-operations': { src: '/assets/images/case-studies/generated/rmm-device-operations.png', alt: "Remote monitoring for retail devices: a neat central operations screen surrounded by six miniature store terminals, green health indicators, maintenance gears and secure remote connection paths, blue and mint accents." },
  'smb-security-appliance': { src: '/assets/images/case-studies/generated/smb-security-appliance.png', alt: "A retail business protected by a compact physical firewall appliance: elegant white and navy network security box guarding a miniature shop and point-of-sale devices behind a translucent shield, blue and orange accents." },
  'microsoft-365-smb-collaboration': { src: '/assets/images/case-studies/generated/microsoft-365-smb-collaboration.png', alt: "Modern office productivity and collaboration: three connected workstations with abstract email, calendar, spreadsheet and meeting tiles converging into a unified workspace, no branding, cobalt blue and warm coral accents." },
  'acronis-genai-governance': { src: '/assets/images/case-studies/generated/acronis-genai-governance.png', alt: "Responsible use of generative AI with data protection: a luminous AI neural orb receiving a document through a privacy filter that masks sensitive data, protective glass gate between business records and AI prompts, navy and violet accents." },
  'cloud-disaster-recovery-smb': { src: '/assets/images/case-studies/generated/cloud-disaster-recovery-smb.png', alt: "Disaster recovery for a manufacturer: a miniature factory with two separate cloud server sites, backup data flowing across a bridge to a healthy recovery site while the primary site is softly dimmed, blue and green accents." },
  'dpdpa-for-smb-readiness': { src: '/assets/images/case-studies/generated/dpdpa-for-smb-readiness.png', alt: "Privacy governance for a small professional services business: a compact office, organized consent cards, a checklist and a small central privacy lock, approachable clean composition distinct from enterprise privacy workflow imagery, blue and teal accents." },
  'workforce-analytics-visibility': { src: '/assets/images/case-studies/generated/workforce-analytics-visibility.png', alt: "Hybrid workforce analytics: a single large dashboard showing abstract bar charts, time blocks and team activity patterns, connected to five small employee workstations across office and home settings, cobalt and soft violet accents, no security shields." },
  'domain-portfolio-control': { src: '/assets/images/case-studies/generated/domain-portfolio-control.png', alt: "Managing a portfolio of business domains: a central globe surrounded by a tidy orbit of website address cards, renewal calendar symbols and ownership keys, elegant blue glass and white cards, no text or logos." },
  'domain-extension-launch': { src: '/assets/images/case-studies/generated/domain-extension-launch.png', alt: "Digital commerce launch using regional domain extensions: miniature storefront emerging from an open browser window with a globe and multiple small regional website markers, celebratory but restrained blue and amber accents." },
  'ai-domain-shortlist': { src: '/assets/images/case-studies/generated/ai-domain-shortlist.png', alt: "AI assisted domain discovery for a startup: an elegant luminous search lens passing over a collection of blank web address tiles and selecting three refined candidates with small star highlights, blue and lavender accents." },
  'managed-web-hosting': { src: '/assets/images/case-studies/generated/managed-web-hosting.png', alt: "Reliable managed website hosting for a digital agency: polished server racks supporting several floating browser windows with abstract website layouts and a monitoring health dial, blue and cyan accents." },
  'ai-website-launch': { src: '/assets/images/case-studies/generated/ai-website-launch.png', alt: "AI assisted website creation for a startup: a sculptural robotic cursor arranging elegant website blocks into a polished browser canvas, small rocket accent suggesting launch, blue and violet accents." },
  'website-migration-backup': { src: '/assets/images/case-studies/generated/website-migration-backup.png', alt: "Safe website migration with protected backups: two distinct browser and server environments linked by a flowing blue transfer bridge, a safe copy of the website stored in a backup vault below, blue and turquoise accents." },
  'hosting-control-panel-operations': { src: '/assets/images/case-studies/generated/hosting-control-panel-operations.png', alt: "Hosting control panel operations for a digital agency: a large isometric control dashboard with abstract site tiles, server resource gauges, email and database controls, neat blue and white modular interface, no text." },
  'cloudlinux-account-isolation': { src: '/assets/images/case-studies/generated/cloudlinux-account-isolation.png', alt: "Isolation between hosting accounts: a blue server divided into separate translucent compartments, each containing an independent miniature website, one amber compartment safely contained without affecting adjacent compartments, navy and teal accents." },
  'website-security-trust': { src: '/assets/images/case-studies/generated/website-security-trust.png', alt: "Trust and security for an ecommerce website: an elegant browser storefront with a large certificate seal and small padlock, secure checkout cards and protected customer details, blue and emerald accents." },
  'web-design-business-portfolios': { src: '/assets/images/case-studies/generated/web-design-business-portfolios.png', alt: "Responsive web design for business portfolios: three polished desktop tablet and mobile website mockups with abstract image panels and elegant layout blocks, stylus and design swatches nearby, cobalt blue and coral accents." },
  'web-marketing-customer-journey': { src: '/assets/images/case-studies/generated/web-marketing-customer-journey.png', alt: "Digital marketing customer journey for a retail business: a clear flowing path from search discovery through a store page to chat and successful purchase, distinct pictorial stages with a miniature storefront and growth chart, blue and warm amber accents." },
  'vps-workload-platform': { src: '/assets/images/case-studies/generated/vps-workload-platform.png', alt: "VPS infrastructure for managed IT workloads: a powerful central physical server supporting several separated virtual machine cubes with their own compute and storage resources, glowing blue network connections, blue and ice cyan accents." },
  'aegis-finance-dpdpa-readiness': { src: '/assets/images/case-studies/aegis-privacy-banner.png', alt: 'Blue privacy shield, protected data records and a compliance checklist for financial services.' },
};



/** Shared by case study detail heroes and every case study listing card. */
export function getCaseStudyImage(study: ImageSource) {
  const generated = GENERATED_IMAGES[study.id];
  if (generated) return { ...generated, wide: false, uploaded: true };
  if (study.coverImageUrl) return {
    src: study.coverImageUrl,
    alt: study.coverImageAlt || study.headline || study.industry + ' case study',
    wide: false,
    uploaded: true,
  };
  const category = study.mainCategory || CASE_STUDIES.find(item => item.id === study.id)?.mainCategory;
  const fallback = category === 'Cybersecurity' || category === 'Data Protection & Compliance'
    ? 'hero-web-security-sitelock-wide.png'
    : 'hero-performance-cloud-v2.png';
  const filename = fallback;
  return {
    src: '/assets/images/' + filename,
    alt: 'Cloud and security technology illustration for ' + study.industry,
    wide: filename === 'hero-web-security-sitelock-wide.png',
    uploaded: false,
  };
}
