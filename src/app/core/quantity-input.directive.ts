import { Directive, ElementRef, inject, input, output } from '@angular/core';

/** Shared editable centre for quantity steppers; buttons keep their existing handlers. */
@Directive({
  selector: 'input[xhQuantityInput]',
  standalone: true,
  host: {
    type: 'number', inputmode: 'numeric', step: '1',
    class: 'quantity-number-input',
    '[value]': 'quantityValue()',
    '[attr.min]': 'quantityMin()',
    '[attr.max]': 'quantityMax() === unlimited ? null : quantityMax()',
    '(input)': 'update(false)',
    '(blur)': 'update(true)',
    '(keydown.enter)': 'finish($event)',
  },
})
export class QuantityInputDirective {
  readonly quantityValue = input.required<number>();
  readonly quantityMin = input(1);
  readonly quantityMax = input(Number.MAX_SAFE_INTEGER);
  readonly quantityChange = output<number>();
  readonly unlimited = Number.MAX_SAFE_INTEGER;
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);

  update(commit: boolean): void {
    const field = this.element.nativeElement;
    // Allow clearing the field while typing; retain the last valid model quantity.
    if (!field.value.trim() || !Number.isFinite(field.valueAsNumber)) {
      if (commit) field.value = String(this.quantityValue());
      return;
    }
    const value = Math.max(
      this.quantityMin(),
      Math.min(this.quantityMax(), Math.trunc(field.valueAsNumber)),
    );
    if (value !== this.quantityValue()) this.quantityChange.emit(value);
    if (commit || value !== field.valueAsNumber) field.value = String(value);
  }

  finish(event: Event): void {
    event.preventDefault();
    this.element.nativeElement.blur();
  }
}
