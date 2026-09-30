import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation, inject, input, output, signal } from '@angular/core';

@Component({
  selector: 'xh-ai-chatbot-content',
  standalone: true,
  templateUrl: './ai-chatbot-content.component.html',
  styleUrl: './ai-chatbot-content.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AiChatbotContentComponent implements AfterViewInit, OnDestroy {
  readonly hero = input(false);
  readonly enquiry = output<string>();
  readonly questions = ['Pricing', 'WhatsApp?', 'Setup', 'Hindi', 'Talk to a human'];
  readonly messages = signal([{ who: 'bot', text: 'Hi! I’m the XcellHost Assistant demo. Try a sample question about pricing, setup or WhatsApp.' }]);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cleanups: Array<() => void> = [];
  private get root() { return this.host.nativeElement.shadowRoot!; }

  ngAfterViewInit(): void {
    const click = (event: Event) => this.handleClick(event);
    const key = (event: Event) => this.handleKey(event as KeyboardEvent);
    this.root.addEventListener('click', click);
    this.root.addEventListener('keydown', key);
    this.cleanups.push(() => this.root.removeEventListener('click', click), () => this.root.removeEventListener('keydown', key));
    if (this.hero()) return;
    this.selectType(2);
    this.selectUse(0);
    const steps = Array.from(this.root.querySelectorAll<HTMLElement>('#flow > div'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      steps.forEach(step => step.classList.add('done'));
    } else {
      let index = 0;
      const timer = window.setInterval(() => {
        steps.forEach((step, position) => {
          step.classList.toggle('on', position === index);
          step.classList.toggle('done', position < index);
        });
        index = (index + 1) % (steps.length + 1);
      }, 700);
      this.cleanups.push(() => window.clearInterval(timer));
    }
  }

  ngOnDestroy(): void { this.cleanups.forEach(cleanup => cleanup()); }

  submit(event: Event): void {
    event.preventDefault();
    const input = this.root.querySelector<HTMLInputElement>('#cwI')!;
    if (input.value.trim()) this.ask(input.value.trim());
    input.value = '';
  }

  ask(question: string): void {
    let reply = 'This is a sample chatbot. Choose “Talk to a human” to open the callback form and discuss your requirements.';
    if (/price|pricing|cost|plan|free/i.test(question)) reply = 'Launch is free for 1 bot and 1,000 sessions. Orbit is ₹15,000/month for 5 bots; Galaxy is ₹30,000/month for unlimited bots. Paid prices exclude GST.';
    else if (/whatsapp|insta|messenger/i.test(question)) reply = 'The supplied chatbot plans support WhatsApp, Instagram and Messenger alongside your website, with one inbox for your team.';
    else if (/install|code|setup|wordpress/i.test(question)) reply = 'Embed the chatbot with one line of code on your website, or use the WordPress plugin. Our team can help with setup.';
    else if (/human|agent|call|talk/i.test(question)) {
      reply = 'I’m opening the callback form so you can request a conversation with our team.';
      this.enquiry.emit('Chatbot demo — talk to a human');
    } else if (/hindi|हिंदी|language/i.test(question)) reply = 'नमस्ते! यह एक डेमो है। हमारी टीम से हिंदी और अन्य भाषाओं में चैटबॉट सहायता के बारे में पूछें।';
    this.messages.update(messages => [...messages.slice(-6), { who: 'me', text: question }, { who: 'bot', text: reply }]);
    const frame = requestAnimationFrame(() => {
      const body = this.root.querySelector<HTMLElement>('#cwB');
      if (body) body.scrollTop = body.scrollHeight;
    });
    this.cleanups.push(() => cancelAnimationFrame(frame));
  }

  private handleClick(event: Event): void {
    const target = event.target as Element;
    const link = target.closest<HTMLAnchorElement>('a[href="#lead"]');
    if (link) {
      event.preventDefault();
      this.enquiry.emit(link.dataset['plan'] ? `${link.dataset['plan']} plan` : 'Build your chatbot');
    }
    const type = target.closest<HTMLButtonElement>('#tyT button');
    if (type) this.selectType(Number(type.dataset['i']));
    const tab = target.closest<HTMLButtonElement>('.tabs button');
    if (tab) this.selectUse(Number(tab.dataset['i']));
  }

  moveCarousel(direction: number): void {
    const track = this.root.querySelector<HTMLElement>('#car');
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    const step = card.getBoundingClientRect().width + (Number.parseFloat(getComputedStyle(track).columnGap) || 0);
    const left = direction > 0
      ? (track.scrollLeft >= maximum - 2 ? 0 : Math.min(maximum, track.scrollLeft + step))
      : (track.scrollLeft <= 2 ? maximum : Math.max(0, track.scrollLeft - step));
    track.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  private handleKey(event: KeyboardEvent): void {
    const tab = (event.target as Element).closest<HTMLButtonElement>('.tabs button');
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = Array.from(this.root.querySelectorAll<HTMLButtonElement>('.tabs button'));
    const current = tabs.indexOf(tab);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    this.selectUse(index);
    tabs[index].focus();
  }

  private selectType(index: number): void {
    const row = this.root.querySelectorAll<HTMLTableRowElement>('.tbl tbody tr')[index];
    if (!row) return;
    this.root.querySelectorAll<HTMLButtonElement>('#tyT button').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset['i']) === index)));
    const panel = this.root.querySelector<HTMLElement>('#tyC')!;
    panel.replaceChildren();
    ['TECHNOLOGY', 'BEST FOR', 'KEY FEATURES', 'LIMITATIONS'].forEach((label, position) => {
      const item = document.createElement('div');
      const heading = document.createElement('small');
      const text = document.createElement('p');
      heading.textContent = label;
      text.textContent = row.cells[position + 1].textContent;
      item.append(heading, text);
      panel.append(item);
    });
  }

  private selectUse(index: number): void {
    this.root.querySelectorAll<HTMLButtonElement>('.tabs button').forEach((button, position) => {
      button.id = `chatbot-use-tab-${position}`;
      button.setAttribute('aria-controls', `chatbot-use-panel-${position}`);
      button.setAttribute('aria-selected', String(position === index));
      button.tabIndex = position === index ? 0 : -1;
    });
    this.root.querySelectorAll<HTMLElement>('.tp').forEach((panel, position) => {
      panel.id = `chatbot-use-panel-${position}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `chatbot-use-tab-${position}`);
      panel.hidden = position !== index;
    });
  }
}
