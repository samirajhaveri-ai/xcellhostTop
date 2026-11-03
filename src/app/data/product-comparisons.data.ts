export type ComparisonCategory =
  | 'TSplus Comparisons'
  | 'Cloud Infrastructure'
  | 'Productivity & Business Apps'
  | 'Cybersecurity'
  | 'Digital Trust'
  | 'Managed Cloud Operations';

export interface ComparisonProductContent {
  group: string;
  description: string;
  price: string;
  features: readonly string[];
  considerations: readonly string[];
}

export interface ProductComparisonDefinition {
  category: ComparisonCategory;
  left: string;
  right: string;
  kind?: 'pair' | 'guide';
  title?: string;
  detailSlug?: string;
  leftContent?: ComparisonProductContent;
  rightContent?: ComparisonProductContent;
  leftLabel?: string;
  rightLabel?: string;
  summary: string;
  eyebrow: string;
}

export const PRODUCT_COMPARISONS: readonly ProductComparisonDefinition[] = [
  {
    category: 'Cloud Infrastructure', kind: 'guide', title: 'AMD EPYC CPU Comparison', detailSlug: 'amd-epyc-cpu-comparison',
    left: 'AMD EPYC 9005', right: 'AMD EPYC 4005', eyebrow: 'Server processor guide',
    summary: 'Compare AMD EPYC 9005 and EPYC 4005 for core density, memory capacity, expansion and workload fit.',
    leftContent: {
      group: 'Data-centre CPU', description: 'Mainstream SP5 processors for virtualisation, databases and AI host nodes, with up to 192 Zen 5c cores.', price: 'Custom quote',
      features: ['8–192 cores', '12-channel DDR5-6400', 'PCIe 5.0 ×128', 'F-series boost up to 5 GHz'],
      considerations: ['Best suited to enterprise SP5 platforms and dense workloads.', 'Confirm core licensing, memory population and power requirements.'],
    },
    rightContent: {
      group: 'Entry server CPU', description: 'AM5 server processors for SMB hosting and game servers, combining high clock speeds with a compact platform.', price: 'Custom quote',
      features: ['6–16 cores', 'Boost up to 5.7 GHz', '2-channel DDR5-5600', 'Up to 28 PCIe 5.0 lanes'],
      considerations: ['Lower memory capacity and expansion than SP5 platforms.', 'Choose this family when clock speed and platform cost matter most.'],
    },
  },
  {
    category: 'Cloud Infrastructure', kind: 'guide', title: 'NVIDIA Server GPU Comparison', detailSlug: 'nvidia-server-gpu-comparison',
    left: 'NVIDIA B300', right: 'NVIDIA H200 SXM', eyebrow: 'Server GPU guide',
    summary: 'Compare NVIDIA B300 and H200 SXM for model memory, bandwidth, AI precision, power and deployment fit.',
    leftContent: {
      group: 'Blackwell Ultra GPU', description: 'Current HGX accelerator for reasoning models, frontier training and high-throughput FP4 inference.', price: 'Pre-book on quote',
      features: ['288 GB HBM3e', '8 TB/s memory bandwidth', 'NVLink 5 at 1.8 TB/s', 'Up to 1,400 W'],
      considerations: ['Requires an HGX-class platform and substantial cooling capacity.', 'Confirm allocation, rack power and software readiness at quote.'],
    },
    rightContent: {
      group: 'Hopper GPU', description: 'Proven HGX accelerator for large-model inference, training and HPC workloads requiring strong FP8 and FP64 performance.', price: 'Available on quote',
      features: ['141 GB HBM3e', '4.8 TB/s memory bandwidth', 'NVLink at 900 GB/s', 'Up to 700 W'],
      considerations: ['Provides less memory and FP4 capability than Blackwell Ultra.', 'Validate model size, GPU count and MIG requirements before sizing.'],
    },
  },
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
