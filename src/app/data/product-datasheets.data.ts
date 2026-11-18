export interface ProductDatasheet {
  readonly productName: string;
  readonly assetUrl: string;
  readonly downloadName: string;
  readonly pageSlugs: readonly string[];
}

export const PRODUCT_DATASHEETS: readonly ProductDatasheet[] = [
  {
    productName: 'Cloud Desktop as a Service',
    assetUrl: '/assets/datasheets/cloud-desktop-as-a-service.pdf',
    downloadName: 'XcellHost Cloud Desktop-as-a-Service.pdf',
    pageSlugs: ['smb-cloud-desktop', 'cloud-desktop-as-a-service'],
  },
  {
    productName: 'Cybird Cyber Security Platform',
    assetUrl: '/assets/datasheets/cybird-cyber-security-platform.pdf',
    downloadName: 'XcellHost Cybird Cyber Security Platform.pdf',
    pageSlugs: ['cybird', 'vendor-partners/cybird', 'smb-cyber-security-appliance'],
  },
  {
    productName: 'Acronis Advanced RMM',
    assetUrl: '/assets/datasheets/acronis-advanced-rmm.pdf',
    downloadName: 'XcellHost Acronis Advanced RMM.pdf',
    pageSlugs: ['remote-monitoring-and-mgmt-rmm', 'acronis-advanced-rmm', 'endpoint-security-rmm'],
  },
  {
    productName: 'Acronis Advanced Security + EDR',
    assetUrl: '/assets/datasheets/acronis-advanced-security-edr.pdf',
    downloadName: 'XcellHost Acronis Advanced Security EDR.pdf',
    pageSlugs: ['advanced-endpoint-security-edr', 'acronis-advanced-security-edr'],
  },
  {
    productName: 'Secure File Cloud',
    assetUrl: '/assets/datasheets/secure-file-cloud.pdf',
    downloadName: 'XcellHost Secure File Cloud.pdf',
    pageSlugs: ['cloud-drive', 'secure-file-cloud'],
  },
  {
    productName: 'Secure Backup Cloud',
    assetUrl: '/assets/datasheets/secure-backup-cloud.pdf',
    downloadName: 'XcellHost Secure Backup Cloud.pdf',
    pageSlugs: ['cloud-backup', 'secure-backup-cloud'],
  },
  {
    productName: 'Tally On Cloud',
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
