import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/** Browser-side repeat check, shared by all GPU lead forms. Only confirmed
 * submissions are remembered. Zoho's Email field must enforce global uniqueness. */
@Injectable({ providedIn: 'root' })
export class GpuLeadApplicationsService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'xcellhost.gpu.confirmed-emails.v1';
  private readonly confirmed = new Set<string>();

  has(email: string): boolean {
    const normalized = email.trim().toLowerCase();
    return this.confirmed.has(normalized) || this.read().includes(normalized);
  }

  remember(email: string): void {
    const normalized = email.trim().toLowerCase();
    if (!normalized) return;
    this.confirmed.add(normalized);
    try {
      this.document.defaultView?.localStorage.setItem(
        this.storageKey, JSON.stringify([...new Set([...this.read(), ...this.confirmed])]),
      );
    } catch {
      // All forms in this app session still share the in-memory check.
    }
  }

  private read(): string[] {
    try {
      const value: unknown = JSON.parse(this.document.defaultView?.localStorage.getItem(this.storageKey) ?? '[]');
      return Array.isArray(value)
        ? value.filter((email): email is string => typeof email === 'string').map(email => email.trim().toLowerCase())
        : [];
    } catch {
      return [];
    }
  }
}
