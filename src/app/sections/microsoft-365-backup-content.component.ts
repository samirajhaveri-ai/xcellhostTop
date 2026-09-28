import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation, inject } from '@angular/core';

/** Detailed Microsoft 365 Backup content from the supplied reference page. */
@Component({
  selector: 'xh-microsoft-365-backup-content',
  templateUrl: './microsoft-365-backup-content.component.html',
  styleUrls: ['./microsoft-365-backup-hero.component.css', './microsoft-365-backup-content.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365BackupContentComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly cleanups: Array<() => void> = [];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement.shadowRoot as ShadowRoot | null;
    if (!root) return;
    const one = <T extends Element = HTMLElement>(selector: string): T | null => root.querySelector<T>(selector);
    const all = <T extends Element = HTMLElement>(selector: string): T[] => Array.from(root.querySelectorAll<T>(selector));
    const listen = (element: Element | null, event: string, handler: EventListener) => {
      if (!element) return;
      element.addEventListener(event, handler);
      this.cleanups.push(() => element.removeEventListener(event, handler));
    };

    all<HTMLElement>('.rv').forEach((element) => element.classList.add('is-in'));
    all<HTMLAnchorElement>('a[href^="#"]').forEach((link) => listen(link, 'click', (event) => {
      const target = root.getElementById(link.getAttribute('href')!.slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    const typewriter = one<HTMLElement>('#ppType');
    const typewriterText = typewriter?.querySelector('span');
    if (typewriter && typewriterText) {
      const words: string[] = JSON.parse(typewriter.dataset['words'] || '[]');
      let wordIndex = 0;
      const timer = window.setInterval(() => {
        if (!words.length) return;
        wordIndex = (wordIndex + 1) % words.length;
        typewriterText.textContent = words[wordIndex];
      }, 3200);
      this.cleanups.push(() => window.clearInterval(timer));
    }

    const backupStates = [
      { live: 'Protected', event: '4 backups today · 0 failed · immutable', time: '12:00', foot: 'Copies stored outside your tenant' },
      { live: 'Protected', event: 'Scheduled backup running · 248 users', time: '14:00', foot: 'Incremental: only changes are copied' },
      { live: 'Recovering', event: 'Modification spike · 2,940 files · OneDrive', time: '14:06', foot: 'XcellHost NOC engaged · endpoint isolated' },
      { live: 'Recovering', event: 'Rolling back to 10:00 · 1 user · 4,318 files', time: '14:12', foot: 'Restoring alongside — nothing overwritten' },
      { live: 'Protected', event: 'Restored from immutable copy in 6m 40s', time: '14:19', foot: 'Clean point verified · change logged' },
    ];
    let backupStateIndex = 0;
    const updateBackupState = () => {
      const state = backupStates[backupStateIndex];
      const set = (selector: string, value: string) => { const el = one(selector); if (el) el.textContent = value; };
      set('#mbLive', state.live);
      set('#mbEvT', state.event);
      set('#mbEvS', state.time);
      set('#mbFoot', state.foot);
      backupStateIndex = (backupStateIndex + 1) % backupStates.length;
    };
    if (one('#mbEvT')) {
      updateBackupState();
      const timer = window.setInterval(updateBackupState, 3500);
      this.cleanups.push(() => window.clearInterval(timer));
    }

    const showWorkload = (index: number) => {
      all<HTMLButtonElement>('#wlB button').forEach((button) => button.classList.toggle('is-on', Number(button.dataset['i']) === index));
      all<HTMLElement>('.wl-p').forEach((panel) => { panel.hidden = Number(panel.dataset['i']) !== index; });
    };
    all<HTMLButtonElement>('#wlB button').forEach((button) =>
      listen(button, 'click', () => showWorkload(Number(button.dataset['i']))));

    const plan = () => {
      const frequency = one<HTMLButtonElement>('#plF .is-on');
      const retention = one<HTMLButtonElement>('#plR .is-on');
      const users = one<HTMLInputElement>('#plU');
      if (!frequency || !retention || !users) return;
      const f = Number(frequency.dataset['v']);
      const days = Number(retention.dataset['v']);
      const points = Math.round(f * days);
      const set = (selector: string, value: string) => { const el = one(selector); if (el) el.textContent = value; };
      set('#plUO', users.value);
      set('#plN', days ? points.toLocaleString('en-IN') : 'Unlimited');
      set('#plL', `${frequency.dataset['l']} backups, kept ${days ? `for ${retention.dataset['l']}` : 'indefinitely'}`);
      set('#plRisk', f >= 24 ? '1 hour' : f >= 4 ? '6 hours' : f >= 1 ? '24 hours' : '7 days');
      const oldest = new Date(); oldest.setDate(oldest.getDate() - days);
      set('#plDate', days ? oldest.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Your first backup');
      set('#plAll', days ? (points * Number(users.value)).toLocaleString('en-IN') : 'Unlimited');
      set('#plOld', days ? `${retention.dataset['l']} ago` : 'forever');
      all<HTMLElement>('#plT i').forEach((bar, index) => {
        bar.style.height = `${25 + Math.min(1, f / 24) * 55 + ((index * 37) % 20)}%`;
        bar.classList.toggle('on', index >= 30 - Math.max(2, Math.round(30 * Math.min(1, (days || 3650) / 2555))));
      });
    };
    ['#plF', '#plR'].forEach((selector) => all<HTMLButtonElement>(`${selector} button`).forEach((button) =>
      listen(button, 'click', () => {
        all<HTMLButtonElement>(`${selector} button`).forEach((item) => item.classList.toggle('is-on', item === button));
        plan();
      })));
    listen(one('#plU'), 'input', plan);
    plan();

    const incidents: readonly [string, string][] = [
      ["Thousands of files are encrypted and synced back to the cloud. Restoring version by version is slow, and the tenant the attacker touched is the one you're relying on.", "Pick the last clean backup before encryption and roll users and sites back from copies the attacker couldn't reach."],
      ['The licence was removed, the mailbox was deleted and the retention window has passed.', 'Search the retained mailbox, restore it to a colleague, or export it for the auditor.'],
      ['Good files are replaced with old or empty copies. Version history must be checked file by file.', 'Restore the library to a known good point without touching correctly changed files.'],
      ['Channel conversations and project decisions disappear after the recovery window.', 'Restore the channel, conversations, files, members and settings from backup.'],
      ['Native retention was not configured consistently or for long enough.', 'Use the retained copies to search, hold and export the requested mail.'],
    ];
    all<HTMLButtonElement>('#simQ button').forEach((button) => listen(button, 'click', () => {
      const incident = incidents[Number(button.dataset['i'])];
      if (!incident) return;
      all<HTMLButtonElement>('#simQ button').forEach((item) => item.classList.toggle('is-on', item === button));
      const bad = one('#simBad'); const good = one('#simGood');
      if (bad) bad.textContent = incident[0];
      if (good) good.textContent = incident[1];
    }));

    const inr = (amount: number) => `₹${Math.round(amount).toLocaleString('en-IN')}`;
    const roi = () => {
      const read = (selector: string) => Number(one<HTMLInputElement>(selector)?.value || 0);
      const incidentsPerYear = read('#rInc'), hours = read('#rHrs'), people = read('#rPeople'), rate = read('#rRate');
      const set = (selector: string, value: string) => { const el = one(selector); if (el) el.textContent = value; };
      set('#rIncO', String(incidentsPerYear)); set('#rHrsO', String(hours));
      set('#rPeopleO', String(people)); set('#rRateO', inr(rate));
      set('#rTot', `${inr(incidentsPerYear * hours * rate * (1 + people * .5))} / yr`);
      set('#rHrsT', `${incidentsPerYear * hours} IT hours and ${Math.round(incidentsPerYear * hours * people * .5).toLocaleString('en-IN')} staff hours a year`);
      const lines = one('#rLines');
      if (lines) lines.innerHTML = `<li><span>IT time recovering or recreating data</span><b>${inr(incidentsPerYear * hours * rate)}</b></li><li><span>Staff productivity lost while data is missing</span><b>${inr(incidentsPerYear * hours * people * rate * .5)}</b></li><li><span>Incidents per year</span><b>${incidentsPerYear}</b></li>`;
    };
    ['#rInc', '#rHrs', '#rPeople', '#rRate'].forEach((selector) => listen(one(selector), 'input', roi));
    roi();

    all<HTMLButtonElement>('#tourTabs button').forEach((button) => listen(button, 'click', () => {
      const key = button.dataset['k'];
      all<HTMLButtonElement>('#tourTabs button').forEach((item) => item.classList.toggle('is-on', item === button));
      all<HTMLElement>('.tour-scr').forEach((screen) => screen.classList.toggle('is-on', screen.dataset['k'] === key));
      all<HTMLElement>('.tour-cap').forEach((caption) => { caption.hidden = caption.dataset['k'] !== key; });
    }));

    listen(one('#xgForm'), 'submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      if (!form.reportValidity()) return;
      const details = Array.from(new FormData(form).entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
      window.location.href = `mailto:sales@xcellhost.cloud?subject=${encodeURIComponent('Microsoft 365 Backup enquiry')}&body=${encodeURIComponent(details)}`;
    });
  }

  ngOnDestroy(): void { this.cleanups.forEach((cleanup) => cleanup()); }
}
