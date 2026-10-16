export type ComparisonCategory =
  | 'TSplus Comparisons'
  | 'Cloud Infrastructure'
  | 'Productivity & Business Apps'
  | 'Cybersecurity'
  | 'Digital Trust'
  | 'Managed Cloud Operations';

export interface ProductComparisonDefinition {
  category: ComparisonCategory;
  left: string;
  right: string;
  leftLabel?: string;
  rightLabel?: string;
  summary: string;
  eyebrow: string;
}

export const PRODUCT_COMPARISONS: readonly ProductComparisonDefinition[] = [
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'Citrix', leftLabel: 'TSplus', eyebrow: 'Remote access platforms', summary: 'Compare TSplus and Citrix across licensing, Windows application publishing, browser access, deployment complexity, administration and total cost of ownership.' },
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'AnyDesk', leftLabel: 'TSplus', eyebrow: 'Remote access platforms', summary: 'Compare TSplus and AnyDesk across remote access, application delivery, browser connectivity, administration, security and licensing.' },
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'RDS', leftLabel: 'TSplus', eyebrow: 'Windows remote access', summary: 'Compare TSplus and Microsoft Remote Desktop Services across setup, web access, application publishing, licensing and ongoing management.' },
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'TeamViewer', leftLabel: 'TSplus', eyebrow: 'Remote access platforms', summary: 'Compare TSplus and TeamViewer across remote desktop access, application publishing, deployment, security, support and pricing.' },
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'LogMeIn', leftLabel: 'TSplus', eyebrow: 'Remote access platforms', summary: 'Compare TSplus and LogMeIn across remote connectivity, user experience, administration, scalability, security and licensing.' },
  { category: 'TSplus Comparisons', left: 'TSplus Remote Access', right: 'Zoho Assist', leftLabel: 'TSplus', eyebrow: 'Remote access platforms', summary: 'Compare TSplus and Zoho Assist across attended and unattended access, application delivery, browser support, management and cost.' },
  { category: 'Cybersecurity', left: 'Advanced Endpoint Security (EDR)', right: 'Microsoft Defender', leftLabel: 'Acronis EDR', rightLabel: 'Microsoft Defender', eyebrow: 'Endpoint security', summary: 'Compare Acronis EDR with Microsoft Defender across endpoint protection, detection and response, recovery, ecosystem fit and managed security operations.' },
  { category: 'Cybersecurity', left: 'All Fortinet Products', right: 'All PaloAlto Products', leftLabel: 'Fortinet', rightLabel: 'Palo Alto Networks', eyebrow: 'Network security platforms', summary: 'Compare Fortinet and Palo Alto Networks across next-generation firewalls, security architecture, management, threat prevention, ecosystem breadth and operational fit.' },
  { category: 'Digital Trust', left: 'GeoTrust', right: 'DigiCert', eyebrow: 'SSL certificate brands', summary: 'Compare GeoTrust and DigiCert across certificate options, validation levels, enterprise trust, lifecycle management and the support required for your deployment.' },
  { category: 'Cloud Infrastructure', left: 'Performance Cloud', right: 'Bare Metal Server', eyebrow: 'Flexible compute', summary: 'Compare elastic cloud capacity with dedicated physical hardware for demanding production workloads.' },
  { category: 'Cloud Infrastructure', left: 'Dedicated Private Cloud', right: 'Hybrid Cloud', eyebrow: 'Deployment model', summary: 'Choose between a fully private environment and an architecture that connects private and public resources.' },
  { category: 'Cloud Infrastructure', left: 'Cloud Backup', right: 'Cloud Object Storage', eyebrow: 'Data protection', summary: 'Understand when you need managed recovery workflows versus scalable object-based storage.' },
  { category: 'Cloud Infrastructure', left: 'Cloud Drive', right: 'Cloud Backup', eyebrow: 'Files & recovery', summary: 'Separate everyday file access and collaboration from protected backup copies built for recovery.' },
  { category: 'Productivity & Business Apps', left: 'Google Workspace', right: 'Managed Microsoft 365', eyebrow: 'Productivity suites', summary: 'Compare collaboration ecosystems, administration models and the support your team receives.' },
  { category: 'Productivity & Business Apps', left: 'SMB Cloud Desktop', right: 'Azure Virtual Desktop', eyebrow: 'Cloud desktops', summary: 'Compare a straightforward managed desktop service with Microsoft Azure-based virtual desktops.' },
  { category: 'Productivity & Business Apps', left: 'Tally on Cloud', right: 'MARG on Cloud', eyebrow: 'Business applications', summary: 'Find the right hosted accounting or ERP workspace for your users, branches and access needs.' },
  { category: 'Cybersecurity', left: 'Advanced Endpoint Security (EDR)', right: 'SentinelOne', eyebrow: 'Endpoint protection', summary: 'Compare managed endpoint detection and response options across prevention, visibility and response.' },
  { category: 'Cybersecurity', left: 'Cloud SIEM-as-a-Service', right: 'Cloud Security Log Monitoring', eyebrow: 'Security operations', summary: 'Decide whether your environment needs full SIEM capabilities or focused managed log monitoring.' },
  { category: 'Cybersecurity', left: 'Vortex SEG', right: 'Advanced Email Security', eyebrow: 'Email security', summary: 'Compare secure email gateway controls with layered protection for modern business email.' },
  { category: 'Cybersecurity', left: 'DPDPA Platform & Consulting', right: 'Managed GRC', eyebrow: 'Compliance', summary: 'Compare India privacy readiness with a broader managed governance, risk and compliance program.' },
  { category: 'Digital Trust', left: 'DigiCert', right: 'Sectigo', eyebrow: 'Certificate authorities', summary: 'Compare certificate portfolios, validation options and managed lifecycle support.' },
  { category: 'Digital Trust', left: 'GeoTrust', right: 'Thawte', eyebrow: 'SSL/TLS', summary: 'Review trusted SSL certificate options for websites, applications and customer-facing services.' },
  { category: 'Managed Cloud Operations', left: 'Managed AWS', right: 'Managed Multi-Cloud', eyebrow: 'Cloud management', summary: 'Compare dedicated AWS operations with a unified operating model across multiple cloud platforms.' },
  { category: 'Managed Cloud Operations', left: 'Managed DevOps', right: 'Cloud DevOps Services', eyebrow: 'DevOps delivery', summary: 'Compare ongoing managed DevOps with project-led cloud automation and delivery services.' },
];
