export interface XcellhostDemoVideo {
  readonly id: number;
  readonly title: string;
  readonly videoId: string;
  readonly category: string;
}

/** XcellHost Demo Center videos in their editorial display order. */
export const XCELLHOST_DEMO_VIDEOS = [
  {
    id: 1,
    title: 'Simplifying DPDPA Compliance with XcellHost.',
    videoId: '41Ipx1SYCOM',
    category: 'DPDPA',
  },
  {
    id: 2,
    title: 'Consent Management For DPDPA',
    videoId: 'xpDGGwaCiWM',
    category: 'DPDPA',
  },
  {
    id: 3,
    title: 'Understanding Breach Notification for DPDPA',
    videoId: 'gw-KlQAfxMs',
    category: 'DPDPA',
  },
  {
    id: 4,
    title: 'Unlock the Power of Enterprise Analytics for the DPDPA',
    videoId: 'pi1TLgo62bM',
    category: 'DPDPA',
  },
  {
    id: 5,
    title: 'Understanding DPDPA Compliance and Security Safeguards',
    videoId: 'I_KIF9TqsRg',
    category: 'DPDPA',
  },
  {
    id: 6,
    title: 'Understanding Data Retention for DPDPA',
    videoId: 'Xxk8yeyeXCY',
    category: 'DPDPA',
  },
  {
    id: 7,
    title: 'DPDPA SIEM Ready Event Pipeline A New Era of Compliance',
    videoId: '3Of3gCla-hU',
    category: 'DPDPA',
  },
  {
    id: 8,
    title: 'Unveiling the Power of Data Inventory & RoPA For DPDPA',
    videoId: '36rRBPnoPhQ',
    category: 'DPDPA',
  },
  {
    id: 9,
    title: 'Strengthening Your Data Compliance with DPDPA Audit Management',
    videoId: 'Y0RC-ZRPf34',
    category: 'DPDPA',
  },
  {
    id: 10,
    title: 'Ensuring Secure Cross-Border Data Transfer: DPDPA',
    videoId: 'XK4yLQxz11g',
    category: 'DPDPA',
  },
  {
    id: 11,
    title: 'Cybird Partner Opportunity Transforming IT Business for the Future',
    videoId: 'phzscka8jMM',
    category: 'Partner Opportunity',
  },
] as const satisfies readonly XcellhostDemoVideo[];
