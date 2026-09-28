import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

/** Selected content from the supplied email-archiving reference. */
@Component({
  selector: 'xh-email-archiving-content',
  standalone: true,
  templateUrl: './email-archiving-content.component.html',
  styleUrl: './email-archiving-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailArchivingContentComponent {
  readonly archiveQuery = signal('');
  readonly archiveTag = signal('');
  readonly policyScope = signal('A department');
  readonly retentionPeriod = signal('8 years');
  readonly legalHoldEnabled = signal(false);
  readonly annualRequests = signal(6);
  readonly hoursPerRequest = signal(20);
  readonly peoplePerSearch = signal(3);
  readonly hourlyCost = signal(1200);
  readonly tourTab = signal<'ediscovery' | 'hold' | 'retention' | 'alerts' | 'audit'>('ediscovery');

  readonly archiveMessages = [
    { subject: 'FY25 statutory audit — ledger confirmations', sender: 'cfo@yourcompany.in → auditor@kpcassociates.in', date: '12 Jun 2025', attachment: 'Ledger_Confirmation_FY25.pdf', tags: ['audit', 'gst'] },
    { subject: 'Revised quotation — Acme annual contract', sender: 'sales@yourcompany.in → procurement@acmeindia.com', date: '03 Feb 2024', attachment: 'Quote_Acme_v3.xlsx', tags: ['acme'] },
    { subject: 'Acme dispute — notice and timeline', sender: 'legal@yourcompany.in → counsel@lawchambers.in', date: '18 Aug 2025', attachment: 'Notice_Acme.pdf', tags: ['acme', 'legal'] },
    { subject: 'Exit formalities and handover', sender: 'hr@yourcompany.in → vikram.rao@yourcompany.in', date: '30 Apr 2025', attachment: 'Handover_Checklist.docx', tags: ['hr'] },
    { subject: 'Board meeting minutes — Q2', sender: 'secretary@yourcompany.in → board@yourcompany.in', date: '22 Jul 2025', attachment: 'Board_Minutes_Q2.pdf', tags: ['board'] },
  ] as const;

  readonly filteredArchiveMessages = computed(() => {
    const query = this.archiveQuery().trim().toLowerCase();
    const tag = this.archiveTag();
    return this.archiveMessages.filter((message) => {
      const matchesTag = !tag || message.tags.includes(tag as never);
      const haystack = `${message.subject} ${message.sender} ${message.attachment} ${message.tags.join(' ')}`.toLowerCase();
      return matchesTag && (!query || haystack.includes(query));
    });
  });

  readonly policySummary = computed(() => {
    const scope = this.policyScope();
    const subject = scope === 'A user' ? 'priya.shah@yourcompany.in' : scope === 'A domain' ? 'yourcompany.in' : 'Finance';
    return `Policy “${subject} — ${this.retentionPeriod()}”`;
  });

  readonly policySubject = computed(() => this.policyScope() === 'A user' ? 'priya.shah@yourcompany.in' : this.policyScope() === 'A domain' ? 'yourcompany.in' : 'Finance');
  readonly policyScopeCode = computed(() => this.policyScope().replace('A ', '').toUpperCase());
  readonly policyKeepCode = computed(() => this.retentionPeriod() === 'Indefinitely' ? 'INDEFINITELY' : this.retentionPeriod().toUpperCase());

  readonly annualDiscoveryHours = computed(() => this.annualRequests() * this.hoursPerRequest() * this.peoplePerSearch());
  readonly annualDiscoveryCost = computed(() => this.annualDiscoveryHours() * this.hourlyCost());

  setArchiveTag(tag: string): void {
    this.archiveTag.update((current) => current === tag ? '' : tag);
  }

  toggleLegalHold(): void {
    this.legalHoldEnabled.update((enabled) => !enabled);
  }

  formatInr(value: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  }
}
