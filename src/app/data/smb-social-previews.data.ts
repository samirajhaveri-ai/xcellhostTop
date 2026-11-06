export interface SmbSocialPreview {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}

/** WhatsApp and social previews for the products in the SMB Cloud catalogue. */
export const SMB_SOCIAL_PREVIEWS: Readonly<Record<string, SmbSocialPreview>> = {
  'tally-on-cloud': {
    title: 'Tally on Cloud | XcellHost',
    description: 'Access Tally from anywhere, anytime, any device — from ₹499/user/mo',
    image: '/assets/images/hero-tally-on-cloud.png',
  },
  'cloud-backup': {
    title: 'Cloud Backup | XcellHost',
    description: 'Safeguard all your files with secure online data protection',
    image: '/assets/images/hero-cloud-backup-acronis.png',
  },
  'cloud-drive': {
    title: 'Cloud Drive | XcellHost',
    description: 'Share & access files online with secure collaboration across devices',
    image: '/assets/images/cloud-drive-tour-dashboard.jpg',
  },
  'advanced-endpoint-security-edr': {
    title: 'Advanced Endpoint Security (EDR) | XcellHost',
    description: 'Identify, protect, detect, respond & recover framework for endpoints',
    image: '/assets/images/hero-acronis-edr-v2.png',
  },
  'remote-monitoring-and-mgmt-rmm': {
    title: 'Remote Monitoring & Mgmt (RMM) | XcellHost',
    description: 'Manage, monitor, & secure all your IT endpoints with a powerful RMM solution.',
    image: '/assets/images/hero-rmm.png',
  },
  'smb-cyber-security-appliance': {
    title: 'SMB Cyber Security Appliance | XcellHost',
    description: 'All-in-one security device designed for SMBs — new launch',
    image: '/assets/images/hero-smb-cyber-security-appliance.png',
  },
  'microsoft-365-smb': {
    title: 'Microsoft 365 SMB | XcellHost',
    description: 'Cloud productivity tools with migration & 24/7 support',
    image: '/assets/images/case-studies/generated/microsoft-365-smb-collaboration.png',
  },
  'smb-cloud-desktop': {
    title: 'SMB Cloud Desktop | XcellHost',
    description: 'Secure, scalable access to apps & data anytime, anywhere',
    image: '/assets/images/menu-productivity-smb-cloud-desktop-v3.png',
  },
  'acronis-genai-protection': {
    title: 'Acronis GenAI Protection | XcellHost',
    description: 'Explore Acronis GenAI Protection services, features & solutions.',
    image: '/assets/images/case-studies/generated/acronis-genai-governance.png',
  },
  'cloud-disaster-recovery-smb': {
    title: 'Cloud Disaster Recovery SMB | XcellHost',
    description: 'Explore Cloud Disaster Recovery SMB services, features & solutions.',
    image: '/assets/images/case-studies/generated/cloud-disaster-recovery-smb.png',
  },
  'dpdpa-for-smb': {
    title: 'DPDPA For SMB | XcellHost',
    description: 'Explore DPDPA For SMB services, features & solutions.',
    image: '/assets/images/case-studies/generated/dpdpa-for-smb-readiness.png',
  },
  'workforce-analytics': {
    title: 'Workforce Analytics | XcellHost',
    description: 'Explore Workforce Analytics services, features & solutions.',
    image: '/assets/images/case-studies/generated/workforce-analytics-visibility.png',
  },
};
