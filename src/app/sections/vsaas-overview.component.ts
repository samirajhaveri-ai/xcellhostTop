import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { VSAAS_ANALYTICS } from './vsaas-overview.data';

@Component({
  selector: 'xh-vsaas-overview',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './vsaas-overview.component.html',
  styleUrl: './vsaas-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsaasOverviewComponent {
  readonly selectedIndex = signal(0);
  readonly selection = computed(() => VSAAS_ANALYTICS[this.selectedIndex()]);

  selectCategory(index: number): void {
    if (Number.isInteger(index) && index >= 0 && index < VSAAS_ANALYTICS.length) {
      this.selectedIndex.set(index);
    }
  }
}
