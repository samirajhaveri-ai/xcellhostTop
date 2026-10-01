import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { DocRequestService } from '../core/doc-request.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { DOC_META } from '../data/site.data';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS } from './form.util';

type InfosheetField = 'firstName' | 'lastName' | 'email' | 'phone' | 'company' | 'consent';

const ZOHO_ENDPOINT = 'https://crm.zoho.in/crm/WebToLeadForm';
const ZOHO_FIELDS = {
  xnQsjsdp: '072b4788f4d2c8520d476a8f2a2d6062f248f31d6ff204650dc893e0726b9bd8',
  zc_gad: '',
  xmIwtLD:
    '5911643b4955ace016ff910e449f97b18d9458cf9bb741c206856ca079ee2d3e64f9c9ef26eae413ba905b7b38a6a8b6',
  actionType: 'TGVhZHM=',
  returnURL: 'null',
} as const;

@Component({
  selector: 'xh-doc-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './doc-modal.component.html',
  styleUrl: './doc-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);
  private readonly document = inject(DOCUMENT);

  readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    company: ['', Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');
  readonly meta = computed(() => DOC_META[this.docs.kind()] ?? DOC_META['infosheet']);
  readonly isInfosheet = computed(() => this.docs.kind() === 'infosheet');
  readonly product = computed(() => this.docs.product());
  readonly title = computed(() =>
    this.done()
      ? "You're all set!"
      : `${this.meta().title}${this.product() ? ` - ${this.product()}` : ''}`,
  );
  readonly sub = computed(() =>
    this.done()
      ? `Your XcellHost ${this.isInfosheet() ? 'Infosheet' : 'presentation'} is on its way to your inbox.`
      : this.meta().sub,
  );
  readonly submitLabel = computed(() =>
    this.busy() ? 'Sending...' : this.isInfosheet() ? 'Get Infosheet' : this.meta().cta,
  );

  constructor() {
    effect(() => {
      if (this.overlay.isOpen('doc')) this.reset();
    });
  }

  onBackdrop(event: Event): void {
    if (event.target === event.currentTarget) this.close();
  }

  close(): void {
    this.overlay.close('doc');
  }

  fieldError(field: InfosheetField): string {
    const control = this.form.controls[field];
    if (!control.touched || control.valid) return '';
    if (field === 'consent') return 'Please accept the Terms and Privacy Policy to continue.';
    if (control.hasError('required')) {
      return `${
        field === 'firstName'
          ? 'First name'
          : field === 'lastName'
            ? 'Last name'
            : field === 'company'
              ? 'Company name'
              : field === 'email'
                ? 'Work email'
                : 'Mobile number'
      } is required.`;
    }
    if (field === 'email') return 'Enter a valid work email.';
    if (field === 'phone') return 'Enter a valid mobile number.';
    return '';
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please correct the highlighted fields.');
      return;
    }

    this.error.set('');
    this.busy.set(true);
    const values = this.form.getRawValue();

    try {
      if (this.isInfosheet()) {
        await this.submitInfosheetToZoho(values);
        this.reference.set(this.leads.reference());
      } else {
        const result = await this.leads.submit('doc', {
          doc: this.docs.kind(),
          product: this.product(),
          customer: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            company: values.company,
          },
          consent: values.consent,
          delivery: ['email', 'whatsapp'],
          zoho: { action: 'create_lead_and_send_document' },
        });
        if (!result.ok && !result.skipped) throw new Error('Submission failed');
        this.reference.set(result.ref);
      }

      this.done.set(true);
    } catch {
      this.error.set('Connection issue - please try again or contact us on WhatsApp.');
    } finally {
      this.busy.set(false);
    }
  }

  private submitInfosheetToZoho(values: ReturnType<typeof this.form.getRawValue>): Promise<void> {
    return new Promise((resolve) => {
      const targetName = 'xhZohoInfosheetFrame';
      const frame = this.document.querySelector<HTMLIFrameElement>(`iframe[name="${targetName}"]`);
      const zohoForm = this.document.createElement('form');
      zohoForm.method = 'POST';
      zohoForm.action = ZOHO_ENDPOINT;
      zohoForm.target = targetName;
      zohoForm.acceptCharset = 'UTF-8';
      zohoForm.hidden = true;

      const payload: Record<string, string> = {
        ...ZOHO_FIELDS,
        'First Name': values.firstName.trim(),
        'Last Name': values.lastName.trim(),
        Email: values.email.trim(),
        Mobile: values.phone.trim(),
        Company: values.company.trim(),
        LEADCF21: 'Customer C',
      };

      for (const [name, value] of Object.entries(payload)) {
        const input = this.document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        zohoForm.appendChild(input);
      }

      let finished = false;
      const finish = (): void => {
        if (finished) return;
        finished = true;
        zohoForm.remove();
        resolve();
      };

      frame?.addEventListener('load', finish, { once: true });
      this.document.body.appendChild(zohoForm);
      zohoForm.submit();
      setTimeout(finish, 4000);
    });
  }

  private reset(): void {
    this.done.set(false);
    this.busy.set(false);
    this.error.set('');
    this.reference.set('');
    this.form.reset();
  }
}
