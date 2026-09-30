import { AfterViewInit, Component, ElementRef, ViewEncapsulation, inject, input, output } from '@angular/core';

@Component({
  selector: 'xh-gpu-clusters-content',
  standalone: true,
  templateUrl: './gpu-clusters-content.component.html',
  styleUrl: './gpu-clusters-content.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class GpuClustersContentComponent implements AfterViewInit {
  readonly hero = input(false);
  readonly enquiry = output<string>();
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private selected: HTMLElement[] = [];
  private configuration = '';
  private get root() { return this.host.nativeElement.shadowRoot!; }

  ngAfterViewInit(): void {
    if (!this.hero()) this.updateBuilder();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.root.querySelectorAll('animate, animateMotion').forEach(element => element.remove());
    }
  }

  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>('a');
    if (link) {
      if (link.getAttribute('href') === '#lead') {
        event.preventDefault();
        this.enquiry.emit(this.configuration);
      }
      return;
    }
    const filter = target.closest<HTMLButtonElement>('#gf button');
    if (filter) {
      this.root.querySelectorAll('#gf button').forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
      this.root.querySelectorAll<HTMLElement>('#gg article').forEach(card => {
        card.hidden = filter.dataset['f'] !== 'all' && card.dataset['f'] !== filter.dataset['f'];
      });
    }
    const card = target.closest<HTMLElement>('#gg article');
    if (card) this.compare(card);
  }

  handleKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.matches('#gg article') && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.compare(target);
    }
  }

  private compare(card: HTMLElement): void {
    this.selected = this.selected.includes(card) ? this.selected.filter(item => item !== card) : [...this.selected, card].slice(-2);
    this.root.querySelectorAll<HTMLElement>('#gg article').forEach(item => {
      item.classList.toggle('sel', this.selected.includes(item));
      item.setAttribute('aria-label', `${item.querySelector('h3')?.textContent}, ${this.selected.includes(item) ? 'selected for comparison' : 'select to compare'}`);
    });
    const comparison = this.root.querySelector<HTMLElement>('#cmp')!;
    comparison.replaceChildren();
    comparison.classList.toggle('on', this.selected.length === 2);
    if (this.selected.length !== 2) return;
    const table = document.createElement('table');
    const rows = [
      ['GPU', ...this.selected.map(item => item.querySelector('h3')?.textContent ?? '')],
      ['Architecture', ...this.selected.map(item => item.querySelector('small')?.textContent ?? '')],
      ...['Memory', 'Bandwidth', 'Compute', 'Interconnect'].map((label, index) => [label, ...this.selected.map(item => item.querySelectorAll('dd')[index].textContent ?? '')]),
      ['Best for', ...this.selected.map(item => item.querySelector('p')?.textContent ?? '')],
    ];
    rows.forEach((values, index) => {
      const row = table.insertRow();
      values.forEach((value, column) => {
        const cell = document.createElement(index === 0 || column === 0 ? 'th' : 'td');
        if (cell instanceof HTMLTableCellElement && cell.tagName === 'TH') cell.scope = index === 0 ? 'col' : 'row';
        cell.textContent = value;
        row.append(cell);
      });
    });
    comparison.append(table);
  }

  updateBuilder(): void {
    const gpu = this.root.querySelector<HTMLSelectElement>('#bG')?.selectedOptions[0];
    if (!gpu) return;
    const nodes = Number(this.root.querySelector<HTMLInputElement>('#bN')!.value);
    const days = Number(this.root.querySelector<HTMLInputElement>('#bD')!.value);
    const scheduler = this.root.querySelector<HTMLSelectElement>('#bS')!.value;
    const count = nodes * 8;
    const rate = count * Number(gpu.dataset['h']);
    const format = (value: number) => Math.round(value).toLocaleString('en-IN');
    const values: Record<string, string> = {
      bNv: String(nodes), bDv: String(days), oG: `${count} × ${gpu.dataset['n']}`,
      oM: `${format(count * Number(gpu.dataset['m']))} GB`,
      oF: nodes > 1 ? 'NVLink + InfiniBand NDR' : 'NVLink (single node)',
      oR: `₹${format(rate)}/hr`, oT: `₹${format(rate * 24 * days)}`,
    };
    for (const [id, value] of Object.entries(values)) this.root.querySelector('#' + id)!.textContent = value;
    this.configuration = `${nodes} × 8 ${gpu.dataset['n']} (${count} GPUs) · ${days} days · ${scheduler} · est. ${values['oT']}`;
  }
}
