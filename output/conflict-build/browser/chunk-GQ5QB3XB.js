import {
  QuantityInputDirective
} from "./chunk-XXOOERF5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";

// src/app/shared/quantity-selector.component.ts
var QuantitySelectorComponent = class _QuantitySelectorComponent {
  label = input("No. of users / devices", ...ngDevMode ? [{ debugName: "label" }] : []);
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  max = input(Number.MAX_SAFE_INTEGER, ...ngDevMode ? [{ debugName: "max" }] : []);
  valueChange = output();
  static \u0275fac = function QuantitySelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuantitySelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuantitySelectorComponent, selectors: [["xh-quantity-selector"]], inputs: { label: [1, "label"], value: [1, "value"], max: [1, "max"] }, outputs: { valueChange: "valueChange" }, decls: 8, vars: 7, consts: [[1, "label"], ["role", "group", 1, "stepper"], ["type", "button", "aria-label", "Decrease quantity", 3, "click", "disabled"], ["xhQuantityInput", "", 3, "quantityChange", "quantityValue", "quantityMax"], ["type", "button", "aria-label", "Increase quantity", 3, "click", "disabled"]], template: function QuantitySelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "button", 2);
      \u0275\u0275listener("click", function QuantitySelectorComponent_Template_button_click_3_listener() {
        return ctx.valueChange.emit(ctx.value() - 1);
      });
      \u0275\u0275text(4, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 3);
      \u0275\u0275listener("quantityChange", function QuantitySelectorComponent_Template_input_quantityChange_5_listener($event) {
        return ctx.valueChange.emit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function QuantitySelectorComponent_Template_button_click_6_listener() {
        return ctx.valueChange.emit(ctx.value() + 1);
      });
      \u0275\u0275text(7, "+");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.label());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.value() <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("quantityValue", ctx.value())("quantityMax", ctx.max());
      \u0275\u0275attribute("aria-label", ctx.label());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.value() >= ctx.max());
    }
  }, dependencies: [QuantityInputDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 18px 0;\n  width: 100%;\n}\n.label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #041e42;\n  margin-bottom: 8px;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #c4d7fa;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 100%;\n  height: 38px;\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%] {\n  flex: 0 0 40px;\n  background: #f3f7ff;\n  color: #1565d8;\n  border: 0;\n  font-size: 19px;\n  font-weight: 700;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: default;\n}\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  width: 0;\n  border: 0;\n  border-left: 1px solid #c4d7fa;\n  border-right: 1px solid #c4d7fa;\n  border-radius: 0;\n  background: #fff;\n  color: #041e42;\n  text-align: center;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  appearance: textfield;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]::-webkit-inner-spin-button, \ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  appearance: none;\n  margin: 0;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \ninput[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1565d8;\n  outline-offset: -2px;\n}\n/*# sourceMappingURL=quantity-selector.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuantitySelectorComponent, [{
    type: Component,
    args: [{ selector: "xh-quantity-selector", standalone: true, imports: [QuantityInputDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="label">{{ label() }}</div>
    <div class="stepper" role="group" [attr.aria-label]="label()">
      <button type="button" aria-label="Decrease quantity" [disabled]="value() <= 1" (click)="valueChange.emit(value() - 1)">&minus;</button>
      <input xhQuantityInput [attr.aria-label]="label()" [quantityValue]="value()" [quantityMax]="max()" (quantityChange)="valueChange.emit($event)" />
      <button type="button" aria-label="Increase quantity" [disabled]="value() >= max()" (click)="valueChange.emit(value() + 1)">+</button>
    </div>
  `, styles: ["/* angular:styles/component:css;492d5bac9060b535a0bb124182e0c571e7825e8b40616b8a327b106526f82dd6;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/shared/quantity-selector.component.ts */\n:host {\n  display: block;\n  margin: 18px 0;\n  width: 100%;\n}\n.label {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #041e42;\n  margin-bottom: 8px;\n}\n.stepper {\n  display: flex;\n  border: 1px solid #c4d7fa;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 100%;\n  height: 38px;\n  box-sizing: border-box;\n}\nbutton {\n  flex: 0 0 40px;\n  background: #f3f7ff;\n  color: #1565d8;\n  border: 0;\n  font-size: 19px;\n  font-weight: 700;\n  cursor: pointer;\n}\nbutton:disabled {\n  opacity: .4;\n  cursor: default;\n}\ninput {\n  flex: 1;\n  min-width: 0;\n  width: 0;\n  border: 0;\n  border-left: 1px solid #c4d7fa;\n  border-right: 1px solid #c4d7fa;\n  border-radius: 0;\n  background: #fff;\n  color: #041e42;\n  text-align: center;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  appearance: textfield;\n  box-sizing: border-box;\n}\ninput::-webkit-inner-spin-button,\ninput::-webkit-outer-spin-button {\n  appearance: none;\n  margin: 0;\n}\nbutton:focus-visible,\ninput:focus-visible {\n  outline: 2px solid #1565d8;\n  outline-offset: -2px;\n}\n/*# sourceMappingURL=quantity-selector.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuantitySelectorComponent, { className: "QuantitySelectorComponent", filePath: "src/app/shared/quantity-selector.component.ts", lineNumber: 26 });
})();

export {
  QuantitySelectorComponent
};
//# sourceMappingURL=chunk-GQ5QB3XB.js.map
