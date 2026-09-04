import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';

type Capability = 'backup' | 'cyber' | 'manage';

@Component({
  selector: 'xh-acronis-true-image-content',
  standalone: true,
  templateUrl: './acronis-true-image-content.component.html',
  styleUrl: './acronis-true-image-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisTrueImageContentComponent {
  private readonly overlay = inject(OverlayService);

  readonly activeCapability = signal<Capability>('backup');
  readonly essentialsDevices = signal(1);
  readonly essentialsTerm = signal(1);
  readonly advancedStorage = signal(50);
  readonly advancedTerm = signal(1);
  readonly advancedDevices = signal(1);
  readonly premiumDevices = signal(1);

  private readonly essentialsPrices: Record<number, Record<number, number>> = {
    1: { 1: 4199, 3: 6699, 5: 8399 },
    3: { 1: 11999, 3: 18999, 5: 23799 },
    5: { 1: 16699, 3: 24999, 5: 31699 },
  };

  private readonly advancedPrices: Record<number, Record<number, Record<number, number>>> = {
    50: {
      1: { 1: 4899, 3: 7499, 5: 9499 },
      3: { 1: 12999, 3: 19999, 5: 24999 },
    },
    250: { 1: { 1: 6099, 3: 9199, 5: 14199 } },
    500: { 1: { 1: 7499, 3: 10899, 5: 15899 } },
  };

  private readonly premiumPrices: Record<number, number> = {
    1: 10499,
    3: 15899,
    5: 17499,
  };

  readonly essentialsPrice = computed(
    () => this.essentialsPrices[this.essentialsTerm()][this.essentialsDevices()],
  );
  readonly advancedPrice = computed(
    () => this.advancedPrices[this.advancedStorage()][this.advancedTerm()][this.advancedDevices()],
  );
  readonly premiumPrice = computed(() => this.premiumPrices[this.premiumDevices()]);

  selectCapability(capability: Capability): void {
    this.activeCapability.set(capability);
  }

  selectAdvancedStorage(storage: number): void {
    this.advancedStorage.set(storage);
    if (storage !== 50) this.advancedTerm.set(1);
  }

  formatInr(value: number): string {
    return new Intl.NumberFormat('en-IN').format(value);
  }

  openTrial(event: Event): void {
    event.preventDefault();
    this.overlay.open('trial');
  }
}
