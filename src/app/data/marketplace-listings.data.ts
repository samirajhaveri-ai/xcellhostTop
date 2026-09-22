import { MarketplaceListing } from './marketplace.data';

export interface CuratedMarketplaceListing extends MarketplaceListing {
  price: string;
  unit: string;
  delivery: string;
}

export const LISTING_CATEGORIES = [
  { id: 'experiences', label: 'Experience', icon: 'work', color: '#147afa' },
  { id: 'ai', label: 'AI Services', icon: 'auto_awesome', color: '#854bff' },
  { id: 'managed', label: 'Service Listings', icon: 'build', color: '#00a669' },
  { id: 'licenses', label: 'Licenses', icon: 'key', color: '#dd7900' },
] as const;

// Editorial listing content and indicative USD pricing supplied in the reference.
// Quotes are requested from XcellHost before configuration or purchase.
const CONTENT: readonly [typeof LISTING_CATEGORIES[number]['id'], string, string, string, string, string, string][] = [
  ['experiences', 'Always-On Estate', 'Monitoring, alert triage and 24/7 response combined into one accountable operations service.', 'From $2,400', 'per month', 'Operations, 24/7', 'Configured with our team.'],
  ['experiences', 'Change & Compliance Assurance', 'Patching, change governance and continuous compliance evidence delivered together.', 'From $2,100', 'per month', 'Operations, Audit-ready', 'Configured with our team.'],
  ['experiences', 'Protected Estate', 'Backup, replication and rehearsed failover assembled into one tested recovery position.', 'From $2,800', 'per month', 'Operations, Tested', 'Configured with our team.'],
  ['experiences', 'Guarded Estate', 'Firewall, WAF and endpoint controls watched and responded to by our security analysts.', 'From $3,200', 'per month', 'Operations, SOC-run', 'Configured with our team.'],
  ['experiences', 'Data Layer Assurance', 'Database operations with the storage beneath it tuned, backed up and restore-tested.', 'From $2,600', 'per month', 'Operations, DBA-run', 'Configured with our team.'],
  ['experiences', 'Connected Estate', 'Networking, private connectivity and NOC-managed routing under one owner.', 'From $2,200', 'per month', 'Operations, NOC-run', 'Configured with our team.'],
  ['experiences', 'Healthcare Cloud', 'Clinical workload templates, patient-data controls and audit-ready evidence.', 'From $3,600', 'per month · starter environment', 'HIPAA-aligned, Sovereign', 'Live in 6 weeks.'],
  ['experiences', 'Financial Services Cloud', 'Resilient regulated environment for core banking and payment workloads.', 'From $4,800', 'per month · starter environment', 'PCI-DSS, Resilient', 'Live in 8 weeks.'],
  ['experiences', 'Disaster Recovery', 'Replication, orchestrated failover and quarterly recovery tests against your RPO/RTO.', 'From $1,900', 'per month · 10 workloads', 'Recovery, RPO/RTO', 'Live in 4 weeks.'],
  ['ai', 'GPU Compute', 'On-demand and reserved GPU capacity with scheduling, quotas and cost guardrails.', 'From $4,200', 'per month · per GPU node', 'GPU, Reserved', 'Minutes.'],
  ['ai', 'Model Serving & MLOps', 'Inference endpoints, pipelines and evaluation with governance and audit logging.', 'From $1,450', 'per month · per environment', 'Inference, MLOps', 'Live in 2 weeks.'],
  ['ai', 'Enterprise RAG Platform', 'Vector store, connectors and retrieval services for grounded internal assistants.', 'From $980', 'per month · per workspace', 'RAG, Connectors', 'Live in 2 weeks.'],
  ['managed', 'Managed Kubernetes', 'Production clusters with platform engineering, GitOps delivery and upgrades handled.', 'From $890', 'per month · per cluster', 'CNCF, GitOps', 'Minutes.'],
  ['managed', 'Managed SOC', '24/7 detection and response with incident playbooks and monthly threat reporting.', 'From $2,400', 'per month · up to 250 assets', 'MDR, 24/7', 'Live in 3 weeks.'],
  ['managed', 'SAP Basis Support', 'Certified Basis administration and landscape support delivered by a specialist partner.', 'From $3,100', 'per month · per landscape', 'SAP, Specialist', 'Live in 2 weeks.'],
  ['licenses', 'Microsoft 365', 'Business and Enterprise plans with tenant setup, identity and licence true-up handled.', 'From $6.50', 'per user per month', 'CSP, Identity', 'Minutes.'],
  ['licenses', 'Veeam Backup', 'Backup and replication licensing bundled with our managed protection service.', 'From $9', 'per VM per month', 'Backup, Rental', 'Minutes.'],
  ['licenses', 'VMware & Red Hat', 'Hypervisor and enterprise Linux subscriptions on a single monthly invoice.', 'On request', 'per host or per socket', 'Subscription, Compliance', 'Minutes.'],
];

export const CURATED_MARKETPLACE_LISTINGS: CuratedMarketplaceListing[] = CONTENT.map(([category, name, description, price, unit, group, delivery]) => {
  const meta = LISTING_CATEGORIES.find(item => item.id === category)!;
  return {
    name, description, price, unit, group, delivery, category,
    categoryName: meta.label, icon: meta.icon, color: meta.color, featured: false,
    link: '/contact',
  };
});
