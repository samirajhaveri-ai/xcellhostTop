import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

interface AgreementSection {
  readonly id: string;
  readonly number: string;
  readonly title: string;
}

@Component({
  selector: 'xh-data-processing-agreement-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './data-processing-agreement.page.html',
  styleUrl: './data-processing-agreement.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataProcessingAgreementPage {
  private readonly document = inject(DOCUMENT);

  readonly sections: readonly AgreementSection[] = [
    { id: 'introduction', number: '01', title: 'Introduction' },
    { id: 'definitions', number: '02', title: 'Definitions' },
    { id: 'scope', number: '03', title: 'Scope of processing' },
    { id: 'customer-obligations', number: '04', title: 'Customer obligations' },
    { id: 'processor-obligations', number: '05', title: 'XcellHost obligations' },
    { id: 'security', number: '06', title: 'Security measures' },
    { id: 'subprocessors', number: '07', title: 'Sub-processors' },
    { id: 'transfers', number: '08', title: 'International transfers' },
    { id: 'rights', number: '09', title: 'Data Principal rights' },
    { id: 'audits', number: '10', title: 'Audits and compliance' },
    { id: 'liability', number: '11', title: 'Return, deletion and liability' },
    { id: 'contact', number: '12', title: 'Contact' },
  ];

  constructor() {
    inject(SeoService).set(
      'Data Processing Agreement | XcellHost',
      'The XcellHost Data Processing Agreement explains how personal data is processed and protected when XcellHost provides cloud and managed services.',
      '/under-construction/data-processing-agreement/',
    );
  }

  printAgreement(): void {
    this.document.defaultView?.print();
  }
}
