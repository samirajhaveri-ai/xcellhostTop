import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type StorageTab = { title: string; heading: string; body: string; items: string[]; values: string[] };
type CompatibilityBrand = { name: string; src: string };
type CompatibilityRow = { title: string; tone: string; brands: readonly CompatibilityBrand[] };
type StorageFeature = { icon: string; title: string; description?: string };

@Component({
  selector: 'xh-cloud-object-storage-content',
  standalone: true,
  templateUrl: './cloud-object-storage-content.component.html',
  styleUrls: ['./cloud-object-storage-content.component.css', './cloud-object-storage-content.layout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudObjectStorageContentComponent {
  readonly activeTab = signal(0);
  readonly plansOpen = signal([true, true, true]);
  readonly marqueePasses = [0, 1];
  readonly storageUseCases: readonly StorageFeature[] = [
    { icon: 'camera', title: 'IP Camera Backup', description: 'Keep video footage available longer' },
    { icon: 'backup', title: 'Backup & Recovery', description: 'Offsite, highly scalable storage' },
    { icon: 'content', title: 'Content Distribution', description: 'Deliver great user experiences' },
    { icon: 'archive', title: 'Tape Archiving', description: 'Active & long-term archiving' },
    { icon: 'app', title: 'Application Development', description: 'Scale your app, not your budget' },
    { icon: 'iot', title: 'Internet of Things', description: 'Fast storage that scales' },
    { icon: 'code', title: 'DevOps', description: 'Fast cloud storage for agile teams' },
    { icon: 'ai', title: 'AI/ML', description: 'Affordable, scalable storage to feed your algorithms' },
    { icon: 'analytics', title: 'Big Data', description: 'Mine your data with fast & scalable cloud storage' },
  ];
  readonly nextGenStorageFeatures: readonly StorageFeature[] = [
    { icon: 's3', title: '100% Native Amazon S3 API' },
    { icon: 'protection', title: 'Policy-based data protection' },
    { icon: 'tenancy', title: 'Multi Tenancy, QoS, Billing' },
    { icon: 'peer', title: 'Real Peer-to-Peer' },
    { icon: 'tiering', title: 'Policy-based Tiering' },
    { icon: 'search', title: 'Integrated Search & Data Analytics' },
  ];
  readonly compatibilityRows: readonly CompatibilityRow[] = [
    {
      title: 'Works with leading backup software', tone: '#c81010',
      brands: [
        { name: 'Acronis', src: '/assets/images/storage-compatibility/acronis.png' },
        { name: 'Veeam', src: '/assets/images/storage-compatibility/veeam.svg' },
        { name: 'Veritas', src: '/assets/images/storage-compatibility/veritas.svg' },
        { name: 'Commvault', src: '/assets/images/storage-compatibility/commvault.svg' },
        { name: 'Actifio', src: '/assets/images/storage-compatibility/actifio.svg' },
        { name: 'Rubrik', src: '/assets/images/storage-compatibility/rubrik.svg' },
        { name: 'Cohesity', src: '/assets/images/storage-compatibility/cohesity.svg' },
        { name: 'EMC', src: '/assets/images/storage-compatibility/emc.svg' },
      ],
    },
    {
      title: 'Works with leading NAS appliances', tone: '#668b1e',
      brands: [
        { name: 'QNAP', src: '/assets/images/storage-compatibility/qnap.svg' },
        { name: 'Synology', src: '/assets/images/storage-compatibility/synology.svg' },
        { name: 'Infortrend', src: '/assets/images/storage-compatibility/infortrend.svg' },
        { name: 'Seagate', src: '/assets/images/storage-compatibility/seagate.svg' },
      ],
    },
    {
      title: 'Works with leading NVR & IP cameras', tone: '#0b5796',
      brands: [
        { name: 'Hikvision', src: '/assets/images/storage-compatibility/hikvision.svg' },
        { name: 'Huawei', src: '/assets/images/storage-compatibility/huawei.svg' },
        { name: 'Honeywell', src: '/assets/images/storage-compatibility/honeywell.svg' },
        { name: 'Bosch', src: '/assets/images/storage-compatibility/bosch.svg' },
        { name: 'Logitech G', src: '/assets/images/storage-compatibility/logitech-g.svg' },
        { name: 'Linksys', src: '/assets/images/storage-compatibility/linksys.svg' },
        { name: 'Samsung', src: '/assets/images/storage-compatibility/samsung.svg' },
        { name: 'Toshiba', src: '/assets/images/storage-compatibility/toshiba.svg' },
      ],
    },
  ];
  readonly tabs: StorageTab[] = [
    { title: 'Buckets', heading: 'Buckets & objects', body: 'Create buckets, browse folders and objects, and upload or download files right from the console — or leave it all to your apps over the S3 API.', items: ['Create & organise buckets', 'Browse, upload & download', 'Set public or private access', 'See size & object counts'], values: ['backups-prod · 2.4 TB · encrypted', 'media-assets · 860 GB · public', 'archive-2025 · 5.1 TB · cold'] },
    { title: 'Access Keys', heading: 'Access keys & endpoints', body: 'Generate S3 access keys, copy your region endpoint, and connect any S3-compatible app, backup tool or SDK in minutes.', items: ['S3 access key & secret', 'Region endpoint URL', 'Rotate or revoke keys', 'Works with any S3 client'], values: ['Access key · Created just now', 'Endpoint · s3.region.xcellhost…', 'Secret key · Copied securely'] },
    { title: 'Permissions', heading: 'Permissions & policies', body: 'Control exactly who can read or write each bucket — keep archives private, make a media bucket public, and set fine-grained policies.', items: ['Public or private buckets', 'Bucket & object policies', 'Fine-grained permissions', 'Signed URLs for sharing'], values: ['archive-2025 · Private · team only', 'media-assets · Public read', 'Signed URL · Expires in 24h'] },
    { title: 'Lifecycle', heading: 'Lifecycle & versioning', body: 'Keep versions of every object, auto-expire old data, and move data between storage classes automatically with lifecycle rules.', items: ['Object versioning', 'Auto-expire old objects', 'Move hot → cold automatically', 'Retention for compliance'], values: ['Rule: logs · Delete after 90 days', 'Rule: backups · Move to cold after 30d', 'Versioning · Enabled'] },
    { title: 'Usage & Billing', heading: 'Usage & billing', body: 'See exactly how much storage and transfer you’re using, per bucket, in real time — with clear, GST-compliant monthly billing.', items: ['Storage & transfer usage', 'Per-bucket breakdown', 'Real-time metrics', 'GST-compliant invoices'], values: ['Total stored · 8.4 TB this month', 'Data transfer · 1.2 TB egress', 'Next invoice · GST invoice ready'] },
  ];

  selectTab(index: number): void { this.activeTab.set(index); }

  togglePlans(index: number): void {
    this.plansOpen.update((plans) => plans.map((open, planIndex) => planIndex === index ? !open : open));
  }
}
