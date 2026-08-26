import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SITE } from '../data/site.data';

export type LeadKind = 'checkout' | 'trial' | 'callback' | 'doc' | 'partner' | 'newsletter';

const ENDPOINTS: Record<LeadKind, () => string> = {
  checkout: () => environment.checkoutWebhook,
  trial: () => environment.trialWebhook,
  callback: () => environment.callbackWebhook,
  doc: () => environment.docWebhook,
  partner: () => environment.partnerWebhook,
  newsletter: () =>
    (environment as typeof environment & { newsletterWebhook?: string }).newsletterWebhook ?? '',
};

export interface LeadResult {
  ok: boolean;
  /** true when no endpoint is configured and the caller should fall back */
  skipped: boolean;
  ref: string;
}

/**
 * Posts a captured lead to whichever webhook is configured in environment.ts.
 * With no endpoint set it reports `skipped` so the caller can fall back to
 * WhatsApp or email, which is what the original site always did.
 */
@Injectable({ providedIn: 'root' })
export class LeadService {
  async submit(kind: LeadKind, payload: Record<string, unknown>): Promise<LeadResult> {
    const ref = this.reference();
    const url = ENDPOINTS[kind]();
    if (!url) return { ok: true, skipped: true, ref };
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, kind, ref, source: SITE.siteUrl, at: new Date().toISOString() }),
      });
      return { ok: res.ok, skipped: false, ref };
    } catch {
      return { ok: false, skipped: false, ref };
    }
  }

  /** Short human-quotable reference, e.g. XH-8F2A41. */
  reference(): string {
    const n = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, '0');
    return 'XH-' + n;
  }

  whatsappLink(text: string): string {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  mailtoLink(subject: string, body: string): string {
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
