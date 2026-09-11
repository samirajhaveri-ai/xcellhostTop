export interface TeamDivision {
  id: string;
  name: string;
  motto: string;
  icon: string;
  departments: readonly { name: string; roles: readonly string[] }[];
}

/** Transcribed from the supplied Cloud Team Structure chart; duplicate AI columns consolidated. */
export const TEAM_STRUCTURE: readonly TeamDivision[] = [
  {
    id: 'technology', name: 'Technology & Operations', motto: 'Build. Operate. Secure.', icon: 'settings',
    departments: [
      { name: 'Cloud Infrastructure & Engineering', roles: ['Cloud Operations Manager', 'Cloud Architect', 'Windows Cloud Administrator (L1/L2/L3)', 'Linux Cloud Administrator (L1/L2/L3)', 'Virtualization Engineer', 'Storage Engineer', 'Data Center Engineer', 'AWS / Azure / GCP / OCI Cloud Engineer'] },
      { name: 'NOC — Network Operations Center', roles: ['NOC Manager', 'NOC Engineer (L1/L2/L3)', 'Network Engineer', 'Firewall Engineer', 'Monitoring Engineer', 'Incident Manager', 'Data Center Operations Engineer'] },
      { name: 'SOC & Cybersecurity', roles: ['CISO / Head of Cybersecurity', 'SOC Manager', 'SOC Analyst (L1/L2/L3)', 'SIEM Engineer', 'XDR / EDR Engineer', 'Security Engineer', 'Vulnerability Assessment Engineer', 'Penetration Tester', 'Incident Response Analyst', 'Threat Intelligence Analyst', 'GRC / Compliance Specialist'] },
      { name: 'Backup, DR & Business Continuity', roles: ['Backup & DR Manager', 'Backup Architect', 'Backup Engineer', 'Disaster Recovery Engineer', 'Acronis Specialist', 'Business Continuity Consultant'] },
      { name: 'DevOps & Automation', roles: ['DevOps Manager', 'DevOps Architect', 'DevOps Engineer', 'Kubernetes Engineer', 'Site Reliability Engineer', 'Cloud Automation Engineer', 'Infrastructure-as-Code Engineer', 'AI Automation Engineer'] },
      { name: 'Technical Support & Service Desk', roles: ['Service Desk Manager', 'Technical Support Lead', 'Support Engineer (L1/L2/L3)', 'Desktop / Cloud Desktop Support', 'Customer Support Engineer', 'Incident Coordinator', 'Knowledge Base Manager'] },
      { name: 'Technical Support & Service Delivery', roles: ['Technical Support Engineer', 'Support Coordinator', 'Customer Support Engineer', 'Incident Coordinator', 'Knowledge Base Researcher'] },
    ],
  },
  {
    id: 'delivery', name: 'Customer Delivery', motto: 'Implement. Support. Succeed.', icon: 'groups',
    departments: [
      { name: 'Professional Services & Projects', roles: ['Professional Services Manager', 'Enterprise Solution Architect', 'Cloud Migration Consultant', 'Implementation Engineer', 'Technical Project Manager', 'Solution Consultant', 'Pre-Sales Cloud Consultant', 'Pre-Sales Security Consultant'] },
      { name: 'Customer Success & Service Delivery', roles: ['Head of Customer Success', 'Customer Success Manager', 'Service Delivery Manager', 'Technical Account Manager', 'Customer Success Engineer', 'Client Onboarding Executive', 'Renewal / Retention Executive'] },
    ],
  },
  {
    id: 'business', name: 'Business & Revenue', motto: 'Market. Sell. Grow.', icon: 'trending_up',
    departments: [
      { name: 'Sales & Channel', roles: ['VP / Head of Sales', 'Enterprise Sales Manager', 'Cloud Sales Consultant', 'Cybersecurity Sales Manager', 'Business Development Manager', 'Inside Sales Executive', 'Field Sales', 'Key Account Manager', 'Channel Sales Manager', 'Partner Account Manager', 'Alliance Manager', 'Renewal Manager', 'Sales Coordinator'] },
      { name: 'Marketing', roles: ['Head / CMO', 'Digital Marketing Manager', 'SEO Specialist', 'Social Media Manager', 'Content Marketing Manager', 'Technical Content Writer', 'Graphic Designer', 'Video Editor', 'Performance Marketing Specialist', 'Email Marketing Executive', 'WhatsApp Marketing Executive', 'Marketing Automation Specialist'] },
      { name: 'Product & SaaS Marketplace', roles: ['Chief Product Officer', 'Cloud Product Manager', 'Cybersecurity Product Manager', 'SaaS Marketplace Product Manager', 'Product Marketing Manager', 'Product Analyst', 'Business Analyst', 'UI/UX Designer'] },
    ],
  },
  {
    id: 'corporate', name: 'Corporate & Innovation', motto: 'Enable. Govern. Transform.', icon: 'lightbulb',
    departments: [
      { name: 'Finance, Billing & Collections', roles: ['CFO / Finance Head', 'Accounts Manager', 'Billing Manager', 'Billing Executive', 'Accounts Receivable', 'Accounts Payable', 'Collection Executive', 'MIS Executive', 'Tax / GST Specialist'] },
      { name: 'HR & Administration', roles: ['HR Manager', 'HR Executive', 'IT Recruiter / Talent Acquisition', 'Learning & Development', 'Payroll', 'Office Administration', 'Procurement', 'Vendor Management'] },
      { name: 'Legal, Risk & Compliance', roles: ['Legal Head / Consultant', 'Contract Manager', 'Compliance Officer', 'Data Protection Officer', 'Risk Manager'] },
      { name: 'Partner & Marketplace Operations', roles: ['Partner Program Manager', 'Channel Enablement Manager', 'Partner Success Manager', 'OEM / Vendor Relationship Manager', 'Marketplace Operations Executive', 'Partner Support Engineer'] },
      { name: 'AI & Innovation', roles: ['Head of AI / Innovation', 'AI Solutions Architect', 'Generative AI Engineer', 'AI Automation Specialist', 'AI Security Engineer', 'Data Scientist', 'ML Engineer'] },
    ],
  },
];
