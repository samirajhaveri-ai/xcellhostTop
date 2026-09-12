import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type CertificateGroupId = 'pro' | 'biz' | 'basic' | 'other';

interface CertificateGroup {
  id: CertificateGroupId;
  label: string;
  blurb: string;
}

interface Certificate {
  group: CertificateGroupId;
  name: string;
  price: number;
  save: number;
  warranty: string;
  validation: string;
  sans: boolean;
}

@Component({
  selector: 'xh-digicert-content',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './digicert-content.component.html',
  styleUrl: './digicert-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertContentComponent {
  readonly activeGroup = signal<'all' | CertificateGroupId>('all');

  readonly groups: readonly CertificateGroup[] = [
    { id: 'pro', label: 'Professional SSL/TLS', blurb: 'All-in-one comprehensive security beyond encryption.' },
    { id: 'biz', label: 'Business SSL/TLS', blurb: 'The industry’s leading certificate, now on DigiCert roots.' },
    { id: 'basic', label: 'Basic SSL/TLS', blurb: 'Standard encryption backed by great support.' },
    { id: 'other', label: 'Other Certificates', blurb: 'Digital certificates for every need.' },
  ];

  readonly certificates: readonly Certificate[] = [
    { group: 'pro', name: 'DigiCert Secure Site Pro EV (FLEX)', price: 1406.78, save: 864.41, warranty: '$2MM', validation: 'Domain + Full Business', sans: true },
    { group: 'pro', name: 'DigiCert Secure Site Pro SSL (FLEX)', price: 982.24, save: 603.54, warranty: '$2MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'pro', name: 'DigiCert Secure Site Pro SSL', price: 982.24, save: 603.54, warranty: '$2MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'pro', name: 'DigiCert Secure Site Pro EV SSL', price: 1406.78, save: 864.41, warranty: '$2MM', validation: 'Domain + Full Business', sans: true },
    { group: 'biz', name: 'DigiCert Secure Site EV (FLEX)', price: 910.72, save: 559.60, warranty: '$1.75MM', validation: 'Domain + Full Business', sans: true },
    { group: 'biz', name: 'DigiCert Secure Site OV (FLEX)', price: 394.11, save: 242.16, warranty: '$1.75MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'biz', name: 'DigiCert Secure Site SSL', price: 394.11, save: 242.16, warranty: '$1.75MM', validation: 'Domain + Basic Business', sans: false },
    { group: 'biz', name: 'DigiCert Secure Site Multi-Domain SSL', price: 1288.85, save: 791.94, warranty: '$1.75MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'biz', name: 'DigiCert Secure Site Wildcard SSL', price: 1879.26, save: 1154.72, warranty: '$1.75MM', validation: 'Domain + Basic Business', sans: false },
    { group: 'biz', name: 'DigiCert Secure Site EV SSL', price: 910.72, save: 559.60, warranty: '$1.75MM', validation: 'Domain + Full Business', sans: false },
    { group: 'biz', name: 'DigiCert Secure Site EV Multi-Domain SSL', price: 2554.12, save: 1569.40, warranty: '$1.75MM', validation: 'Domain + Full Business', sans: true },
    { group: 'basic', name: 'Basic EV (FLEX)', price: 356.35, save: 218.96, warranty: '$1.75MM', validation: 'Domain + Full Business', sans: true },
    { group: 'basic', name: 'Basic OV (FLEX)', price: 239.37, save: 147.08, warranty: '$1.25MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'basic', name: 'Standard SSL', price: 239.37, save: 147.08, warranty: '$1MM', validation: 'Domain + Basic Business', sans: false },
    { group: 'basic', name: 'Extended Validation SSL', price: 356.35, save: 218.96, warranty: '$1MM', validation: 'Domain + Full Business', sans: false },
    { group: 'basic', name: 'Multi-Domain SSL', price: 715.79, save: 439.82, warranty: '$1MM', validation: 'Domain + Basic Business', sans: true },
    { group: 'basic', name: 'EV Multi-Domain SSL', price: 715.79, save: 406.22, warranty: '$1MM', validation: 'Domain + Full Business', sans: true },
    { group: 'basic', name: 'Wildcard SSL', price: 759.17, save: 466.48, warranty: '$1MM', validation: 'Domain + Basic Business', sans: false },
    { group: 'other', name: 'DigiCert Code Signing Certificate', price: 438.24, save: 89.76, warranty: 'N/A', validation: 'Domain + Basic Business', sans: false },
    { group: 'other', name: 'DigiCert EV Code Signing Certificate', price: 617.52, save: 126.48, warranty: 'N/A', validation: 'Domain + Full Business', sans: false },
    { group: 'other', name: 'DigiCert Secure Email for Business (Premium)', price: 36.10, save: 133.00, warranty: 'N/A', validation: 'Organization-Validated', sans: false },
    { group: 'other', name: 'DigiCert Secure Email Certificate for Individuals (S/MIME Class 1)', price: 18.05, save: 55.10, warranty: 'N/A', validation: 'Mailbox-Validated', sans: false },
    { group: 'other', name: 'DigiCert Document Signing Certificate', price: 307.75, save: 137.96, warranty: '$500K', validation: 'Photo ID + Call', sans: false },
    { group: 'other', name: 'DigiCert Verified Mark Certificate', price: 1425.76, save: 978.72, warranty: 'N/A', validation: 'Domain + Full Business', sans: false },
    { group: 'other', name: 'DigiCert Common Mark Certificate', price: 1052.80, save: 1089.60, warranty: 'N/A', validation: 'Domain + Full Business', sans: false },
  ];

  selectGroup(group: 'all' | CertificateGroupId): void {
    this.activeGroup.set(group);
  }

  groupCount(group: CertificateGroupId): number {
    return this.certificates.filter((certificate) => certificate.group === group).length;
  }

  certificatesFor(group: CertificateGroupId): readonly Certificate[] {
    return this.certificates.filter((certificate) => certificate.group === group);
  }

  showGroup(group: CertificateGroupId): boolean {
    return this.activeGroup() === 'all' || this.activeGroup() === group;
  }
}
