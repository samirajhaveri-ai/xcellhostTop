import { Injectable, signal } from '@angular/core';

import { ProductDatasheet, datasheetForSlug } from '../data/product-datasheets.data';

@Injectable({ providedIn: 'root' })
export class DatasheetRequestService {
  private readonly _datasheet = signal<ProductDatasheet | null>(null);
  private readonly _requiresSelection = signal(false);
  private readonly _isOpen = signal(false);
  readonly datasheet = this._datasheet.asReadonly();
  readonly requiresSelection = this._requiresSelection.asReadonly();
  readonly isOpen = this._isOpen.asReadonly();

  ask(pageSlug: string): boolean {
    if (!pageSlug.trim()) {
      this._datasheet.set(null);
      this._requiresSelection.set(true);
      this._isOpen.set(true);
      return true;
    }
    const datasheet = datasheetForSlug(pageSlug);
    this._datasheet.set(datasheet);
    this._requiresSelection.set(false);
    this._isOpen.set(datasheet !== null);
    return datasheet !== null;
  }

  select(pageSlug: string): ProductDatasheet | null {
    const datasheet = datasheetForSlug(pageSlug);
    this._datasheet.set(datasheet);
    return datasheet;
  }

  close(): void {
    this._isOpen.set(false);
  }
}
