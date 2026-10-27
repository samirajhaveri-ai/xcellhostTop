import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { QuantityInputDirective } from '../core/quantity-input.directive';

@Component({
  selector: 'xh-quantity-selector',
  standalone: true,
  imports: [QuantityInputDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="label">{{ label() }}</div>
    <div class="stepper" role="group" [attr.aria-label]="label()">
      <button type="button" aria-label="Decrease quantity" [disabled]="value() <= 1" (click)="valueChange.emit(value() - 1)">&minus;</button>
      <input xhQuantityInput [attr.aria-label]="label()" [quantityValue]="value()" [quantityMax]="max()" (quantityChange)="valueChange.emit($event)" />
      <button type="button" aria-label="Increase quantity" [disabled]="value() >= max()" (click)="valueChange.emit(value() + 1)">+</button>
    </div>
  `,
  styles: [`
    :host{display:block;margin:18px 0;width:100%}.label{text-align:center;font-size:12px;font-weight:600;color:#041e42;margin-bottom:8px}
    .stepper{display:flex;border:1px solid #c4d7fa;border-radius:5px;overflow:hidden;width:100%;height:38px;box-sizing:border-box}
    button{flex:0 0 40px;background:#f3f7ff;color:#1565d8;border:0;font-size:19px;font-weight:700;cursor:pointer}button:disabled{opacity:.4;cursor:default}
    input{flex:1;min-width:0;width:0;border:0;border-left:1px solid #c4d7fa;border-right:1px solid #c4d7fa;border-radius:0;background:#fff;color:#041e42;text-align:center;font-family:inherit;font-size:14px;font-weight:600;appearance:textfield;box-sizing:border-box}
    input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{appearance:none;margin:0}
    button:focus-visible,input:focus-visible{outline:2px solid #1565d8;outline-offset:-2px}
  `],
})
export class QuantitySelectorComponent {
  readonly label = input('No. of users / devices');
  readonly value = input.required<number>();
  readonly max = input(Number.MAX_SAFE_INTEGER);
  readonly valueChange = output<number>();
}
