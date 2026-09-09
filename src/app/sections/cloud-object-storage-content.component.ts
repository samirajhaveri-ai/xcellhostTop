import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type StorageTab = { title: string; heading: string; body: string; items: string[]; values: string[] };

@Component({
  selector: 'xh-cloud-object-storage-content',
  standalone: true,
  templateUrl: './cloud-object-storage-content.component.html',
  styleUrls: ['./cloud-object-storage-content.component.css', './cloud-object-storage-content.layout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudObjectStorageContentComponent {
  readonly activeTab = signal(0);
  readonly tabs: StorageTab[] = [
    { title: 'Buckets', heading: 'Buckets & objects', body: 'Create buckets, browse folders and objects, and upload or download files right from the console — or leave it all to your apps over the S3 API.', items: ['Create & organise buckets', 'Browse, upload & download', 'Set public or private access', 'See size & object counts'], values: ['backups-prod · 2.4 TB · encrypted', 'media-assets · 860 GB · public', 'archive-2025 · 5.1 TB · cold'] },
    { title: 'Access Keys', heading: 'Access keys & endpoints', body: 'Generate S3 access keys, copy your region endpoint, and connect any S3-compatible app, backup tool or SDK in minutes.', items: ['S3 access key & secret', 'Region endpoint URL', 'Rotate or revoke keys', 'Works with any S3 client'], values: ['Access key · Created just now', 'Endpoint · s3.region.xcellhost…', 'Secret key · Copied securely'] },
    { title: 'Permissions', heading: 'Permissions & policies', body: 'Control exactly who can read or write each bucket — keep archives private, make a media bucket public, and set fine-grained policies.', items: ['Public or private buckets', 'Bucket & object policies', 'Fine-grained permissions', 'Signed URLs for sharing'], values: ['archive-2025 · Private · team only', 'media-assets · Public read', 'Signed URL · Expires in 24h'] },
    { title: 'Lifecycle', heading: 'Lifecycle & versioning', body: 'Keep versions of every object, auto-expire old data, and move data between storage classes automatically with lifecycle rules.', items: ['Object versioning', 'Auto-expire old objects', 'Move hot → cold automatically', 'Retention for compliance'], values: ['Rule: logs · Delete after 90 days', 'Rule: backups · Move to cold after 30d', 'Versioning · Enabled'] },
    { title: 'Usage & Billing', heading: 'Usage & billing', body: 'See exactly how much storage and transfer you’re using, per bucket, in real time — with clear, GST-compliant monthly billing.', items: ['Storage & transfer usage', 'Per-bucket breakdown', 'Real-time metrics', 'GST-compliant invoices'], values: ['Total stored · 8.4 TB this month', 'Data transfer · 1.2 TB egress', 'Next invoice · GST invoice ready'] },
  ];

  selectTab(index: number): void { this.activeTab.set(index); }
}
