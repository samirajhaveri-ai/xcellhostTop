import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface EntraPlan {
  name: string;
  sku: string;
  list: string;
  monthly: string;
  yearly: string;
}

interface ExploreTab {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  items: [string, string][];
}

@Component({
  selector: 'xh-entra-id-content',
  standalone: true,
  templateUrl: './entra-id-content.component.html',
  styleUrl: './entra-id-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntraIdContentComponent {
  readonly activeExploreTab = signal(0);

  readonly plans: EntraPlan[] = [
    { name: 'Microsoft Entra Workload ID', sku: 'CFQ7TTC0R9QB:0002', list: '₹250/mo', monthly: '₹228', yearly: '₹2,640' },
    { name: 'Microsoft Entra Internet Access', sku: 'MS-ENTRA-INTERNET', list: '₹415/mo', monthly: '₹378', yearly: '₹4,382' },
    { name: 'Microsoft Entra Private Access', sku: 'CFQ7TTC0PFZR:0003', list: '₹415/mo', monthly: '₹378', yearly: '₹4,382' },
    { name: 'Microsoft Entra ID Governance', sku: 'CFQ7TTC0MFT1:0001', list: '₹580/mo', monthly: '₹528', yearly: '₹6,125' },
    { name: 'Microsoft Entra ID P1', sku: 'MS-ENTRA-ID-P1', list: '₹580/mo', monthly: '₹528', yearly: '₹6,125' },
    { name: 'Microsoft Entra ID P2', sku: 'MS-ENTRA-ID-P2', list: '₹830/mo', monthly: '₹755', yearly: '₹8,765' },
    { name: 'Microsoft Entra Suite', sku: 'CFQ7TTC0NZT8:0004', list: '₹1,000/mo', monthly: '₹910', yearly: '₹10,560' },
  ];

  readonly compareRows = [
    ['Core identity & SSO', '', ''],
    ['Single sign-on (SSO)', 'One login for Microsoft 365 & SaaS apps', 'both'],
    ['User & group management', 'Directory, users, groups and roles', 'both'],
    ['Multi-factor authentication', 'Verify sign-ins with a second factor', 'both'],
    ['Device registration', 'Register and join devices to Entra ID', 'both'],
    ['Advanced access management', '', ''],
    ['Conditional access', 'Policies by user, device, location and app', 'both'],
    ['Self-service password reset', 'Let users reset passwords securely', 'both'],
    ['Hybrid identity', 'Connect on-premises Active Directory', 'both'],
    ['Application proxy', 'Secure remote access to on-premises apps', 'both'],
    ['Advanced group management', 'Dynamic groups and naming policies', 'both'],
    ['Identity protection & governance', '', ''],
    ['Identity Protection', 'Risk-based detection and remediation', 'p2'],
    ['Risk-based conditional access', 'Trigger policies on user or sign-in risk', 'p2'],
    ['Privileged Identity Management', 'Just-in-time privileged access', 'p2'],
    ['Access reviews', 'Regularly review and remove access', 'p2'],
    ['Entitlement management', 'Automated access packages and workflows', 'p2'],
  ] as const;

  readonly exploreTabs: ExploreTab[] = [
    { label: 'Email', title: 'Professional business email', body: 'Run secure email on your own domain with shared calendars, contacts and reliable anywhere access.', bullets: ['Custom-domain email', 'Large cloud mailboxes', 'Shared calendars and contacts', 'Spam and malware protection'], items: [['Inbox', 'Priority mail protected'], ['Calendar', 'Team meeting at 3:00 PM'], ['Contacts', 'Company directory synced']] },
    { label: 'Office apps', title: 'The Office apps, everywhere', body: 'Create and collaborate in Word, Excel, PowerPoint and Outlook across desktop, web and mobile.', bullets: ['Always-up-to-date Office apps', 'Desktop, web and mobile', 'Cloud autosave', 'Real-time co-authoring'], items: [['Business plan.docx', 'Auto-saved · 1 min ago'], ['Budget-FY.xlsx', 'Edited by 2 people'], ['Pitch deck.pptx', 'Shared link ready']] },
    { label: 'Teams', title: 'Teams for chat & meetings', body: 'Bring chat, video calls and file sharing together in Microsoft Teams, with every project in its own channel.', bullets: ['HD video calls and webinars', 'Chat and channels', 'Screen share and recordings', 'Files and apps in one place'], items: [['Sales team', '5 members · active now'], ['Client call', 'Recording available'], ['Shared: agenda.docx', 'In General channel']] },
    { label: 'Copilot', title: 'Copilot — your AI assistant', body: 'Draft and rewrite, analyse data, build slides and summarise email and meetings from a simple prompt.', bullets: ['Draft in Word and Outlook', 'Analyse data in Excel', 'Create PowerPoint decks', 'Catch up on Teams meetings'], items: [['Summarise this thread', 'Done in 3 seconds'], ['Draft a reply', 'Professional · friendly'], ['Create a 5-slide deck', 'From your document']] },
    { label: 'Security & Admin', title: 'Security & simple admin', body: 'Protect accounts and data with MFA, threat protection and device management from one admin centre.', bullets: ['Multi-factor authentication', 'Advanced threat protection', 'Device management (Intune)', 'One admin centre'], items: [['MFA enforced', 'All users protected'], ['Threat protection', 'On · 0 incidents'], ['Add / remove users', 'Manage licences']] },
  ];

  selectExploreTab(index: number): void {
    this.activeExploreTab.set(index);
  }
}
