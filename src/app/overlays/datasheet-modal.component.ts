import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { DatasheetRequestService } from '../core/datasheet-request.service';
import { PRODUCT_DATASHEETS } from '../data/product-datasheets.data';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS } from './form.util';

type DatasheetField = 'product' | 'firstName' | 'lastName' | 'phone' | 'email';

const ZOHO_DATASHEET_ENDPOINT =
  'https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/XcellhostDatasheet/formperma/0qjxx8xKjbkxNqRxPANMnX4mTGWC-GqgAfsL5dBOVME/htmlRecords/submit';

@Component({
  selector: 'xh-datasheet-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './datasheet-modal.component.html',
  styleUrl: './datasheet-modal.component.css',
  host: {
    style: 'display:contents',
    '(document:keydown.escape)': 'close()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasheetModalComponent {
  readonly requests = inject(DatasheetRequestService);
  private readonly document = inject(DOCUMENT);
  private readonly fb = inject(FormBuilder);

  readonly datasheet = this.requests.datasheet;
  readonly requiresSelection = this.requests.requiresSelection;
  readonly productOptions = PRODUCT_DATASHEETS;
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly error = signal('');

  readonly form = this.fb.nonNullable.group({
    product: ['', Validators.required],
    firstName: ['', [Validators.required, Validators.maxLength(255)]],
    lastName: ['', [Validators.required, Validators.maxLength(255)]],
    phone: ['', PHONE_VALIDATORS],
    email: ['', EMAIL_VALIDATORS],
  });

  constructor() {
    effect(() => {
      if (this.requests.isOpen()) untracked(() => this.reset());
    });
  }

  close(): void {
    this.requests.close();
  }

  onBackdrop(event: Event): void {
    if (event.target === event.currentTarget) this.close();
  }

  fieldError(field: DatasheetField): string {
    const control = this.form.controls[field];
    if (!control.touched || control.valid) return '';
    if (control.hasError('required')) return `${this.fieldLabel(field)} is required.`;
    if (field === 'email') return 'Enter a valid business email.';
    if (field === 'phone') return 'Enter a valid phone number.';
    return `${this.fieldLabel(field)} is too long.`;
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please complete the highlighted fields.');
      return;
    }

    this.error.set('');
    this.busy.set(true);
    const values = this.form.getRawValue();
    const datasheet = this.requiresSelection()
      ? this.requests.select(values.product)
      : this.datasheet();
    if (!datasheet) {
      this.error.set('Choose the product datasheet you want to download.');
      this.busy.set(false);
      return;
    }

    try {
      const submission = this.postToZoho({
        Name_First: values.firstName.trim(),
        Name_Last: values.lastName.trim(),
        PhoneNumber_countrycode: values.phone.trim(),
        Email: values.email.trim(),
        Product: datasheet.productName,
      });
      // Keep the download inside the visitor's click activation so browsers do
      // not treat it as an unsolicited delayed download.
      this.startDownload();
      await submission;
      this.done.set(true);
    } catch {
      this.error.set('The request could not be submitted. Please try again.');
    } finally {
      this.busy.set(false);
    }
  }

  startDownload(): void {
    const datasheet = this.datasheet();
    if (!datasheet) return;
    const link = this.document.createElement('a');
    link.href = datasheet.assetUrl;
    link.download = datasheet.downloadName;
    link.hidden = true;
    this.document.body.appendChild(link);
    link.click();
    link.remove();
  }

  private postToZoho(values: Record<string, string>): Promise<void> {
    return new Promise((resolve) => {
      const targetName = 'xhZohoDatasheetFrame';
      const frame = this.document.querySelector<HTMLIFrameElement>(`iframe[name="${targetName}"]`);
      const zohoForm = this.document.createElement('form');
      zohoForm.method = 'POST';
      zohoForm.action = ZOHO_DATASHEET_ENDPOINT;
      zohoForm.target = targetName;
      zohoForm.acceptCharset = 'UTF-8';
      zohoForm.enctype = 'multipart/form-data';
      zohoForm.hidden = true;

      const payload: Record<string, string> = {
        zf_referrer_name: this.document.location?.href ?? '',
        zf_redirect_url: '',
        zc_gad: '',
        ...values,
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
      setTimeout(finish, 3000);
    });
  }

  private fieldLabel(field: DatasheetField): string {
    return field === 'product'
      ? 'Product datasheet'
      : field === 'firstName'
      ? 'First name'
      : field === 'lastName'
        ? 'Last name'
        : field === 'phone'
          ? 'Phone number'
          : 'Business email';
  }

  private reset(): void {
    this.form.reset({
      product: this.requiresSelection() ? '' : (this.datasheet()?.pageSlugs[0] ?? ''),
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
    this.busy.set(false);
    this.done.set(false);
    this.error.set('');
  }
}
