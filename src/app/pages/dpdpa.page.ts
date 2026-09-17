import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { DPDPA_MODULES, DPDPA_ORDER } from '../data/dpdpa.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/**
 * The card face of a module. `icon`, `blurb` and `hot` are page furniture that
 * has no home in `dpdpa.data.ts` — the rest is read straight off the module.
 */
interface ModuleCard {
  readonly slug: string;
  readonly title: string;
  readonly tier: string;
  readonly section: string;
  readonly icon: string;
  readonly blurb: string;
  readonly hot: boolean;
}

/** Per-module card icon, one-line card copy and the "hot" highlight, by key. */
const CARD_FACE: Record<string, { icon: string; blurb: string; hot?: boolean }> = {
  consent: {
    icon: '🤝',
    blurb:
      'Purpose-specific notice builder in major Indian languages. Cryptographic receipt per consent event. Version-controlled notices with re-consent campaigns.',
  },
  rights: {
    icon: '👤',
    blurb:
      'Branded, OTP-verified portal for every request type. Statutory SLA engine with escalation alerts. Closure certificate stored immutably.',
  },
  breach: {
    icon: '🚨',
    blurb:
      'Dual clock — CERT-In 6-hour and DPDPA 72-hour tracked in parallel. Board notification packs generated on one click. Tabletop drill mode.',
  },
  dashboard: {
    icon: '📊',
    blurb:
      '0–100 readiness score across every module, penalty-weighted so gaps are sized by regulatory cost. Board-ready PDF report.',
  },
  ropa: {
    icon: '🗂',
    blurb:
      'Discovery across databases, file servers, SaaS and endpoints. Visual data-flow maps with encryption status. Cross-border transfer tracking.',
  },
  vendor: {
    icon: '🔗',
    blurb:
      'DPA status across your vendor stack, risk scoring, expiry alerts and a portfolio risk report your board can read.',
  },
  children: {
    icon: '👶',
    blurb:
      'Age-verification gate, verified parental consent, and default restrictions on profiling and ad targeting for minors.',
  },
  dpia: {
    icon: '📋',
    blurb:
      'Structured impact assessments with risk scoring, algorithm registry and cross-border transfer tracking for Significant Data Fiduciaries.',
  },
  vdpo: {
    icon: '🎓',
    hot: true,
    blurb:
      'A qualified, India-based Data Protection Officer — named in your records, handling grievances and the regulator interface. The obligation, owned.',
  },
};

const TITLE = 'SecureSetu — DPDPA compliance platform | XcellHost';
const DESCRIPTION =
  'Consent, data-principal rights, breach response, vendor DPAs and live compliance scoring — ' +
  'one DPDPA platform backed by XcellHost’s certified privacy consultants.';

/**
 * `/securesetu-dpdpa` — the SecureSetu platform page. The marketing copy is
 * one-off and stays inline; the nine module cards are rendered from
 * `DPDPA_MODULES` in `DPDPA_ORDER`, each opening its own module page.
 */
@Component({
  selector: 'xh-dpdpa-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dpdpa.page.html',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpdpaPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);

  readonly modules: readonly ModuleCard[] = DPDPA_ORDER.map((key) => {
    const m = DPDPA_MODULES[key];
    const face = CARD_FACE[key];
    return {
      slug: m.slug,
      title: m.t,
      tier: m.tier,
      section: m.sec,
      icon: face?.icon ?? '🛡️',
      blurb: face?.blurb ?? m.tag,
      hot: face?.hot === true,
    };
  });

  readonly waHref = this.leads.whatsappLink(
    'Hi XcellHost, I would like to know more about SecureSetu and DPDPA compliance.'
  );

  constructor() {
    this.seo.set(TITLE, DESCRIPTION, '/securesetu-dpdpa/');
  }

  /** Every assessment / pricing / tool CTA on this page opens the callback modal. */
  openCallback(ev: Event): void {
    ev.preventDefault();
    this.topics.ask('SecureSetu DPDPA');
    this.overlay.open('callback');
  }
}
