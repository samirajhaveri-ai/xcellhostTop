interface DatasheetSection {
  readonly title: string;
  readonly summary?: string;
  readonly points?: readonly string[];
  readonly table?: {
    readonly columns: readonly string[];
    readonly rows: readonly (readonly [label: string, ...values: string[]])[];
  };
}

export interface ProductDatasheet {
  readonly slug: string;
  readonly productName: string;
  readonly description: string;
  readonly sections: readonly DatasheetSection[];
  readonly coverUrl: string;
  readonly assetUrl: string;
  readonly downloadName: string;
  readonly pageSlugs: readonly string[];
}

export const PRODUCT_DATASHEETS: readonly ProductDatasheet[] = [
  {
    slug: 'cloud-desktop-as-a-service',
    productName: 'Cloud Desktop as a Service',
    description: 'Compare hosted shared desktops, virtual desktop infrastructure, and GPU cloud desktops.',
    sections: [
      {
        title: 'Cloud desktop options',
        table: {
          columns: ['Desktop type', 'Best suited for', 'What you get'],
          rows: [
            ['Hosted Shared Desktop', 'Small businesses, branch teams, accountants, and remote staff', 'A shared cloud desktop for everyday applications and remote access.'],
            ['Enterprise Desktop / VDI', 'Teams that need dedicated desktops and more control', 'An isolated virtual desktop with policy-based access and centralized management.'],
            ['GPU Cloud Desktop', 'Designers, architects, and teams running graphics, CAD, rendering, or AI workloads', 'A cloud workstation with GPU acceleration.'],
          ],
        },
      },
      {
        title: 'Managing desktops in the cloud',
        points: [
          'Give remote and hybrid staff access to their work desktops from different locations.',
          'Manage desktop updates and maintenance centrally.',
          'Scale desktop capacity as teams grow, with 24/7 support.',
        ],
      },
      {
        title: 'Common use cases',
        summary: 'The datasheet identifies call centers, development teams, design studios, healthcare providers, and education and training teams as candidates for cloud desktops.',
      },
    ],
    coverUrl: '/assets/datasheets/cloud-desktop-as-a-service.jpg',
    assetUrl: '/assets/datasheets/cloud-desktop-as-a-service.pdf',
    downloadName: 'XcellHost Cloud Desktop-as-a-Service.pdf',
    pageSlugs: ['smb-cloud-desktop', 'cloud-desktop-as-a-service'],
  },
  {
    slug: 'cybird-cyber-security-platform',
    productName: 'Cybird Cyber Security Platform',
    description: 'Explore business Wi-Fi, firewall protection, a secure web gateway, and remote access controls.',
    sections: [
      {
        title: 'Network security and access',
        points: [
          'Separate employee and guest Wi-Fi and give staff individual WPA2-Enterprise identities.',
          'Use the firewall, secure web gateway, and DNS filtering to block malicious sites and harmful downloads.',
          'Apply access, application, and bandwidth policies based on user roles and device permissions.',
        ],
      },
      {
        title: 'Deployment and monitoring',
        summary: 'Zero-touch provisioning automates device setup. The cloud dashboard lets IT teams and service providers manage multiple sites, review reports and alerts, and troubleshoot remotely.',
        points: ['Hardware and security bundles are sized for up to 10, 25, 50, or 100 users.', 'Typical deployments include branch offices, retail stores, clinics, and education sites.'],
      },
      {
        title: 'Cybird X2 specifications',
        table: {
          columns: ['Specification', 'Cybird X2'],
          rows: [
            ['Processor', 'MediaTek 1.3 GHz dual-core ARM'],
            ['Memory and storage', '1 GB DDR4 and 128 MB NAND flash'],
            ['Ports', '1 Gigabit WAN, 4 Gigabit LAN, 2 USB 3.0, and 1 optional console port'],
            ['Wireless', 'Dual-band Wi-Fi 6 (2.4 and 5 GHz), 2×2 MU-MIMO, up to 1,200 Mbps'],
            ['Firewall and VPN throughput', 'Up to 900 Mbps for the firewall and 300 Mbps for WireGuard VPN. Performance depends on enabled services, configuration, and deployment conditions.'],
            ['Power and dimensions', '12 V DC / 2 A. 200 × 120 × 35 mm.'],
            ['Operating temperature', '0–40 °C'],
            ['Certifications and warranty', 'CE, FCC, and RoHS compliance. One-year standard warranty, extendable.'],
          ],
        },
      },
    ],
    coverUrl: '/assets/datasheets/cybird-cyber-security-platform.jpg',
    assetUrl: '/assets/datasheets/cybird-cyber-security-platform.pdf',
    downloadName: 'XcellHost Cybird Cyber Security Platform.pdf',
    pageSlugs: ['cybird', 'vendor-partners/cybird', 'smb-cyber-security-appliance'],
  },
  {
    slug: 'acronis-advanced-rmm',
    productName: 'Acronis Advanced RMM',
    description: 'Explore hardware monitoring, patch management, software deployment, and remote support.',
    sections: [
      {
        title: 'Remote monitoring and management',
        summary: 'Acronis Advanced RMM gives managed service providers and IT teams a central console for managing endpoints and resolving issues remotely.',
        points: [
          'Discover devices, keep a hardware and software inventory, and monitor CPU, memory, disk usage, and device health.',
          'Set real-time alerts and use remote desktop assistance to investigate issues.',
          'Assess patch exposure and automate operating system and third-party application updates.',
          'Deploy software with DeployPilot and automate routine maintenance with scripts and task rules.',
          'Review Microsoft 365 security posture, backup status, and patch compliance from the management console.',
        ],
      },
      {
        title: 'Managed service packages',
        table: {
          columns: ['Package', 'Scope described in the datasheet'],
          rows: [
            ['Essential Cyber Hygiene', 'Core patching, monitoring, basic alerts, and reporting.'],
            ['Advanced Cyber Hygiene', 'Adds third-party application patching, vulnerability-based patching, and asset inventory.'],
            ['Cyber Resilience Managed Service', 'Adds advanced security with XDR, automated remediation, and restore testing.'],
          ],
        },
      },
      {
        title: 'Implementation roadmap',
        points: [
          'Days 0–7: Build the device inventory, identify unmanaged endpoints, and check patch and backup status.',
          'Days 8–15: Resolve failed backups, patch critical vulnerabilities, and configure alerts and maintenance windows.',
          'Days 16–30: Set patch policies, create device groups, and automate remediation, reporting, and escalation.',
          'Ongoing: Review patch and backup coverage, resolve recurring issues, and document restore tests.',
        ],
      },
    ],
    coverUrl: '/assets/datasheets/acronis-advanced-rmm.jpg',
    assetUrl: '/assets/datasheets/acronis-advanced-rmm.pdf',
    downloadName: 'XcellHost Acronis Advanced RMM.pdf',
    pageSlugs: ['remote-monitoring-and-mgmt-rmm', 'acronis-advanced-rmm', 'endpoint-security-rmm'],
  },
  {
    slug: 'acronis-advanced-security-edr',
    productName: 'Acronis Advanced Security + EDR',
    description: 'Review endpoint detection and response, ransomware protection, and automated remediation.',
    sections: [
      {
        title: 'Endpoint prevention and detection',
        points: [
          'Use behavioral analysis and threat intelligence to identify unfamiliar threats.',
          'Combine exploit prevention, web and URL filtering, removable-device controls, and ransomware protection.',
          'Monitor endpoint events continuously, correlate related alerts, and capture forensic evidence for investigations.',
          'Review visual attack timelines, search for indicators of compromise, and prioritize alerts for investigation.',
        ],
      },
      {
        title: 'Incident response and recovery',
        summary: 'Teams can isolate affected endpoints, quarantine threats, and use automated response actions to contain an incident. Rollback, system reimaging, and integrated backup and disaster recovery support restoration after an attack.',
      },
      {
        title: 'EDR, XDR, and MDR',
        table: {
          columns: ['Capability', 'Role'],
          rows: [
            ['EDR', 'Detect, investigate, and respond to endpoint activity.'],
            ['XDR', 'Extend visibility across users, workloads, and cloud environments.'],
            ['MDR', 'Add a managed service with 24/7 experts who help contain and remediate incidents.'],
          ],
        },
      },
    ],
    coverUrl: '/assets/datasheets/acronis-advanced-security-edr.jpg',
    assetUrl: '/assets/datasheets/acronis-advanced-security-edr.pdf',
    downloadName: 'XcellHost Acronis Advanced Security EDR.pdf',
    pageSlugs: ['advanced-endpoint-security-edr', 'acronis-advanced-security-edr'],
  },
  {
    slug: 'secure-file-cloud',
    productName: 'Secure File Cloud',
    description: 'See how teams can securely share, sync, and collaborate on files across devices.',
    sections: [
      {
        title: 'File sharing and collaboration',
        points: [
          'Share large files and sync protected folders across desktops, laptops, tablets, and phones.',
          'Use version history, file locking, and recovery to manage edits and restore files.',
          'Edit shared files through Office Online and use Office and Outlook add-ins for everyday collaboration.',
        ],
      },
      {
        title: 'Security and administration',
        points: [
          'Protect data at rest with encryption and control sign-in with two-factor authentication and SAML single sign-on.',
          'Apply role-based access and use device management, file analytics, and audit logs to track activity.',
          'Customize policies and workflows and use REST APIs to integrate administrative tasks.',
        ],
      },
      {
        title: 'Hosting and storage options',
        summary: 'Secure File Cloud can be self-hosted or hosted by XcellHost. It can also integrate with existing file servers to support a move away from legacy Windows file shares. The datasheet lists 500 GB and 1 TB storage options with unlimited users.',
      },
    ],
    coverUrl: '/assets/datasheets/secure-file-cloud.jpg',
    assetUrl: '/assets/datasheets/secure-file-cloud.pdf',
    downloadName: 'XcellHost Secure File Cloud.pdf',
    pageSlugs: ['cloud-drive', 'secure-file-cloud'],
  },
  {
    slug: 'secure-backup-cloud',
    productName: 'Secure Backup Cloud',
    description: 'Review backup and recovery coverage for servers, endpoints, virtual machines, and cloud apps.',
    sections: [
      {
        title: 'Supported workloads',
        points: [
          'Windows and Linux servers, Windows PCs, Macs, and iOS and Android devices.',
          'Virtual machines running on VMware and Microsoft Hyper-V.',
          'Microsoft 365, Exchange Server, SQL Server, Oracle Database, and Google Workspace.',
        ],
      },
      {
        title: 'Backup, protection, and recovery',
        points: [
          'Back up full system images, individual files and folders, or virtual machines.',
          'Use cloud or hybrid backup, continuous data protection, and end-to-end encryption.',
          'Use Acronis Active Protection in the backup agent to help protect against ransomware.',
          'Restore individual files or use instant, bare-metal, and universal recovery options when a system fails.',
        ],
      },
      {
        title: 'Storage subscriptions',
        summary: 'The datasheet lists standard subscriptions at 50 GB, 100 GB, 250 GB, 500 GB, and 1 TB, each with unlimited backup agents. An administration console manages backups and restores, with 24/7 recovery support available.',
      },
    ],
    coverUrl: '/assets/datasheets/secure-backup-cloud.jpg',
    assetUrl: '/assets/datasheets/secure-backup-cloud.pdf',
    downloadName: 'XcellHost Secure Backup Cloud.pdf',
    pageSlugs: ['cloud-backup', 'secure-backup-cloud'],
  },
  {
    slug: 'tally-on-cloud',
    productName: 'Tally On Cloud',
    description: 'See how to access TallyPrime remotely and which applications you can run alongside it.',
    sections: [
      {
        title: 'Remote access and compatible applications',
        summary: 'Run TallyPrime, including version 7.0, on Windows Server 2025 and access it remotely from desktops and laptops or through a browser on Apple and Android tablets.',
        points: [
          'Use your existing Tally licence when moving your accounting data to the cloud.',
          'Run related applications such as TDSMAN, ClearTax, Winman, CompuTax, Biz Analyst, Saral, CredFlow, or Microsoft 365 alongside Tally.',
        ],
      },
      {
        title: 'Tally Private Cloud plans',
        summary: 'Each listed plan includes a dedicated virtual machine, SSD storage, Windows Server 2025, backups every eight hours, Acronis Cyber Protect Cloud, Fortinet, and 24/7 support.',
        table: {
          columns: ['Plan', 'Users', 'SSD storage', 'RAM', 'vCPU'],
          rows: [
            ['Lite', '3–4', '100 GB', '6 GB', '4'],
            ['X Small', '5', '150 GB', '8 GB', '4'],
            ['Small', '10', '150 GB', '12 GB', '6'],
            ['Medium', '11–15', '200 GB', '16 GB', '8'],
            ['X Large', '16–20', '300 GB', '32 GB', '12'],
            ['XX Large', '21–30', '400 GB', '64 GB', '16'],
            ['XXX Large', '31–50', '500 GB', '96 GB', '20'],
            ['XXX Large', '51–75', '750 GB', '128 GB', '24'],
          ],
        },
      },
      {
        title: 'Migration and add-ons',
        summary: 'Migration starts with provisioning the Tally server and creating user accounts, followed by moving the data, activating the licence, and installing any required third-party applications.',
        points: ['Optional add-ons include TSplus Enterprise, XcellDrive Starter, Microsoft 365 Business, an SSL VPN client, and a site-to-site VPN tunnel.'],
      },
    ],
    coverUrl: '/assets/datasheets/tally-on-cloud.jpg',
    assetUrl: '/assets/datasheets/tally-on-cloud.pdf',
    downloadName: 'XcellHost Tally On Cloud.pdf',
    pageSlugs: ['tally-on-cloud'],
  },
];

const normalizeSlug = (value: string): string =>
  value.trim().toLowerCase().replace(/^\/+|\/+$/g, '').split(/[?#]/, 1)[0];

const DATASHEET_BY_SLUG = new Map(
  PRODUCT_DATASHEETS.flatMap((datasheet) =>
    datasheet.pageSlugs.map((slug) => [normalizeSlug(slug), datasheet] as const),
  ),
);

export function datasheetForSlug(slug: string): ProductDatasheet | null {
  return DATASHEET_BY_SLUG.get(normalizeSlug(slug)) ?? null;
}
