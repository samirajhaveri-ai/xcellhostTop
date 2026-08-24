import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { CHAT_OFFTOPIC, CHAT_QUICK, CHAT_SYSTEM_PROMPT, CHAT_TASKY } from '../data/chat.data';
import { SITE } from '../data/site.data';
import { CatalogService } from './catalog.service';

export interface ChatMessage {
  role: 'user' | 'bot';
  /**
   * Ready-to-render markup.
   *
   * Anything the visitor typed, or that came back from a remote endpoint, is
   * escaped before it reaches this field — only literals from `chat.data.ts`
   * and the rule table below carry real markup. The component renders this
   * through `bypassSecurityTrustHtml`, so that invariant is what keeps the
   * assistant free of stored XSS: never assign unescaped input here.
   */
  html: string;
}

export interface ChatReply {
  html: string;
  chips: string[];
  /** offer the human-handoff buttons under this reply */
  escalate?: boolean;
}

/** Rule table replacing the original chain of inline `if (/re/.test(s))` branches. */
interface Rule {
  test: RegExp;
  reply: (s: string, ctx: ChatService) => ChatReply;
}

const DEFAULT_CHIPS = ['Pricing', 'What do you offer', 'Free trial', 'Talk to a human'];

@Injectable({ providedIn: 'root' })
export class ChatService {
  private catalog = inject(CatalogService);

  readonly messages = signal<ChatMessage[]>([]);
  /** true when the last reply suggested handing over to a person */
  readonly escalate = signal(false);
  readonly busy = signal(false);
  readonly chips = signal<string[]>(DEFAULT_CHIPS);

  readonly quickKeys = Object.keys(CHAT_QUICK);

  private readonly rules: Rule[] = [
    {
      test: /^(hi|hello|hey|good (morning|afternoon|evening)|namaste)\b/i,
      reply: () => ({
        html: `Hello. I can help with XcellHost services, pricing and getting you to the right person. What are you looking for?`,
        chips: DEFAULT_CHIPS,
      }),
    },
    {
      test: /\b(thanks|thank you|thx|great|perfect)\b/i,
      reply: () => ({ html: `Happy to help. Anything else?`, chips: DEFAULT_CHIPS }),
    },
    {
      test: /\b(human|agent|person|sales|representative|talk to someone|call me)\b/i,
      reply: () => ({
        html: `Of course — the quickest route is WhatsApp or a scheduled callback. Our team is in Mumbai and answers during Indian business hours.`,
        chips: ['Request a callback', 'Pricing'],
        escalate: true,
      }),
    },
    {
      test: /\b(price|pricing|cost|rate|quote|how much|charges)\b/i,
      reply: (s, ctx) => {
        const hits = ctx.catalog.search(s.replace(/price|pricing|cost|of|for|how much|the/gi, '').trim(), 3);
        if (hits.length) {
          const list = hits
            .map((h) => `<b>${h.name}</b> — ${ctx.priceOf(h.name) || 'priced on scope'}`)
            .join('<br>');
          return { html: `Here is what I have:<br>${list}<br><br>Exact pricing depends on users and term — a two- or three-year plan is 10–20% cheaper.`, chips: ['Request a callback', 'Free trial'] };
        }
        return {
          html: `Pricing depends on the service and how many users or endpoints you have. Tell me which service you are looking at and I will give you the starting figure.`,
          chips: ['Tally on Cloud', 'Cloud Backup (Acronis)', 'Microsoft 365'],
        };
      },
    },
    {
      test: /\b(trial|demo|try|poc|pilot)\b/i,
      reply: () => ({
        html: `Yes — most services can be trialled before you commit. Tell me which one and we will set it up, usually within one business day.`,
        chips: ['Tally on Cloud', 'Cloud Backup (Acronis)', 'Request a callback'],
      }),
    },
    {
      test: /\b(support|help desk|ticket|down|outage|not working|issue)\b/i,
      reply: () => ({
        html: `Support runs 24×7. Existing customers should raise a ticket through the support portal or call <b>${SITE.phone}</b>. If it is urgent, WhatsApp is fastest.`,
        chips: ['Talk to a human'],
        escalate: true,
      }),
    },
    {
      test: /\b(partner|reseller|channel|affiliate|white label)\b/i,
      reply: () => ({
        html: `We run a partner programme for resellers and consultants — margins, deal registration and pre-sales support. Leave your details and the channel team will get in touch.`,
        chips: ['Request a callback'],
      }),
    },
  ];

  /** Starting price for a service, if we publish one. */
  priceOf(name: string): string {
    return this.catalog.rich(name)?.price ?? '';
  }

  reset(): void {
    this.messages.set([]);
    this.chips.set(DEFAULT_CHIPS);
    this.escalate.set(false);
  }

  greet(): void {
    if (this.messages().length) return;
    this.pushText('bot', `Hi — I am the XcellHost assistant. Ask me about our services, pricing or how to get started.`);
  }

  quick(key: string): void {
    const entry = CHAT_QUICK[key];
    this.pushText('user', key);
    if (!entry) return;
    this.pushMarkup('bot', entry[0]);
    this.chips.set(entry[1] ?? DEFAULT_CHIPS);
  }

  async send(text: string): Promise<void> {
    const s = text.trim();
    if (!s) return;
    this.pushText('user', s);
    this.busy.set(true);
    try {
      const r = await this.answer(s);
      this.pushMarkup('bot', r.html);
      this.escalate.set(!!r.escalate);
      this.chips.set(r.chips.length ? r.chips : DEFAULT_CHIPS);
    } finally {
      this.busy.set(false);
    }
  }

  private async answer(s: string): Promise<ChatReply> {
    if (CHAT_TASKY.test(s)) {
      return {
        html: `I can point you to the right service or person, but I cannot carry out tasks. Would you like me to arrange a callback?`,
        chips: ['Request a callback'],
      };
    }
    if (CHAT_OFFTOPIC.test(s)) {
      return {
        html: `I only cover XcellHost — cloud, backup, security and compliance. Ask me about any of those and I will help.`,
        chips: DEFAULT_CHIPS,
      };
    }

    const quick = Object.keys(CHAT_QUICK).find((k) => s.toLowerCase().includes(k.toLowerCase()));
    if (quick) return { html: CHAT_QUICK[quick][0], chips: CHAT_QUICK[quick][1] ?? DEFAULT_CHIPS };

    for (const r of this.rules) if (r.test.test(s)) return r.reply(s, this);

    /* a named service? */
    const hits = this.catalog.search(s, 4);
    if (hits.length) {
      const list = hits.map((h) => `<b>${h.name}</b> — ${h.desc}`).join('<br>');
      return {
        html: `That matches:<br>${list}<br><br>Open one from the menu for full detail, or I can arrange a callback.`,
        chips: ['Request a callback', 'Pricing'],
      };
    }

    /* configured live endpoint */
    if (environment.chatEndpoint) {
      try {
        const res = await fetch(environment.chatEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ system: CHAT_SYSTEM_PROMPT, message: s }),
        });
        const j = await res.json();
        /* a remote endpoint is not a trusted source — escape it */
        if (j?.answer) return { html: this.escape(String(j.answer)), chips: DEFAULT_CHIPS };
      } catch { /* fall through to the default reply */ }
    }

    return {
      html: `I did not find that one. Try a service name — or I can put you in front of someone who will know.`,
      chips: DEFAULT_CHIPS,
      escalate: true,
    };
  }

  /** Trusted markup from our own data files or rule table. */
  private pushMarkup(role: 'user' | 'bot', html: string): void {
    this.messages.update((m) => [...m, { role, html }]);
  }

  /** Anything else — escaped on the way in. */
  private pushText(role: 'user' | 'bot', text: string): void {
    this.messages.update((m) => [...m, { role, html: this.escape(text) }]);
  }

  private escape(s: string): string {
    return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
  }
}
