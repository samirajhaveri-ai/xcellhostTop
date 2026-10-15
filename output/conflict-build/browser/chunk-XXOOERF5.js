import {
  Directive,
  ElementRef,
  Input,
  Output,
  inject,
  input,
  output,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵdomProperty,
  ɵɵlistener
} from "./chunk-7JITLDDL.js";

// src/app/core/quantity-input.directive.ts
var QuantityInputDirective = class _QuantityInputDirective {
  quantityValue = input.required(...ngDevMode ? [{ debugName: "quantityValue" }] : []);
  quantityMin = input(1, ...ngDevMode ? [{ debugName: "quantityMin" }] : []);
  quantityMax = input(Number.MAX_SAFE_INTEGER, ...ngDevMode ? [{ debugName: "quantityMax" }] : []);
  quantityChange = output();
  unlimited = Number.MAX_SAFE_INTEGER;
  element = inject(ElementRef);
  update(commit) {
    const field = this.element.nativeElement;
    if (!field.value.trim() || !Number.isFinite(field.valueAsNumber)) {
      if (commit)
        field.value = String(this.quantityValue());
      return;
    }
    const value = Math.max(this.quantityMin(), Math.min(this.quantityMax(), Math.trunc(field.valueAsNumber)));
    if (value !== this.quantityValue())
      this.quantityChange.emit(value);
    if (commit || value !== field.valueAsNumber)
      field.value = String(value);
  }
  finish(event) {
    event.preventDefault();
    this.element.nativeElement.blur();
  }
  static \u0275fac = function QuantityInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuantityInputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _QuantityInputDirective, selectors: [["input", "xhQuantityInput", ""]], hostAttrs: ["type", "number", "inputmode", "numeric", "step", "1", 1, "quantity-number-input"], hostVars: 3, hostBindings: function QuantityInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function QuantityInputDirective_input_HostBindingHandler() {
        return ctx.update(false);
      })("blur", function QuantityInputDirective_blur_HostBindingHandler() {
        return ctx.update(true);
      })("keydown.enter", function QuantityInputDirective_keydown_enter_HostBindingHandler($event) {
        return ctx.finish($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("value", ctx.quantityValue());
      \u0275\u0275attribute("min", ctx.quantityMin())("max", ctx.quantityMax() === ctx.unlimited ? null : ctx.quantityMax());
    }
  }, inputs: { quantityValue: [1, "quantityValue"], quantityMin: [1, "quantityMin"], quantityMax: [1, "quantityMax"] }, outputs: { quantityChange: "quantityChange" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuantityInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[xhQuantityInput]",
      standalone: true,
      host: {
        type: "number",
        inputmode: "numeric",
        step: "1",
        class: "quantity-number-input",
        "[value]": "quantityValue()",
        "[attr.min]": "quantityMin()",
        "[attr.max]": "quantityMax() === unlimited ? null : quantityMax()",
        "(input)": "update(false)",
        "(blur)": "update(true)",
        "(keydown.enter)": "finish($event)"
      }
    }]
  }], null, { quantityValue: [{ type: Input, args: [{ isSignal: true, alias: "quantityValue", required: true }] }], quantityMin: [{ type: Input, args: [{ isSignal: true, alias: "quantityMin", required: false }] }], quantityMax: [{ type: Input, args: [{ isSignal: true, alias: "quantityMax", required: false }] }], quantityChange: [{ type: Output, args: ["quantityChange"] }] });
})();

export {
  QuantityInputDirective
};
//# sourceMappingURL=chunk-XXOOERF5.js.map
