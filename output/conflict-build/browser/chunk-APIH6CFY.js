import {
  ChangeDetectionStrategy,
  Component,
  Input,
  effect,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";

// src/app/sections/product/product-faq.component.ts
var _forTrack0 = ($index, $item) => $item[0];
function ProductFaqComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275domListener("click", function ProductFaqComponent_For_1_Template_button_click_1_listener() {
      const \u0275$index_1_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(\u0275$index_1_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementStart(3, "span", 3);
    \u0275\u0275text(4, "+");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 4)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const \u0275$index_1_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("order", \u0275$index_1_r2 * 2 + ctx_r2.orderOffset());
    \u0275\u0275classProp("open", ctx_r2.open() === \u0275$index_1_r2);
    \u0275\u0275attribute("data-q", f_r4[0]);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r2.open() === \u0275$index_1_r2)("aria-controls", ctx_r2.idPrefix() + \u0275$index_1_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r4[0]);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("id", ctx_r2.idPrefix() + \u0275$index_1_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4[1]);
  }
}
var ProductFaqComponent = class _ProductFaqComponent {
  faqs = input.required(...ngDevMode ? [{ debugName: "faqs" }] : []);
  initialOpen = input(0, ...ngDevMode ? [{ debugName: "initialOpen" }] : []);
  idPrefix = input("ppFaqA", ...ngDevMode ? [{ debugName: "idPrefix" }] : []);
  orderOffset = input(1, ...ngDevMode ? [{ debugName: "orderOffset" }] : []);
  /** index of the open panel, or -1 when they are all closed */
  open = signal(0, ...ngDevMode ? [{ debugName: "open" }] : []);
  constructor() {
    effect(() => {
      this.faqs();
      this.open.set(this.initialOpen());
    });
  }
  toggle(i) {
    this.open.update((o) => o === i ? -1 : i);
  }
  static \u0275fac = function ProductFaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFaqComponent, selectors: [["xh-product-faq"]], hostAttrs: [2, "display", "contents"], inputs: { faqs: [1, "faqs"], initialOpen: [1, "initialOpen"], idPrefix: [1, "idPrefix"], orderOffset: [1, "orderOffset"] }, decls: 2, vars: 0, consts: [[1, "faq2", 3, "open", "order"], [1, "faq2"], ["type", "button", 1, "faq2-q", 3, "click"], [1, "faq2-ic"], [1, "faq2-a", 3, "id"]], template: function ProductFaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, ProductFaqComponent_For_1_Template, 8, 10, "div", 0, _forTrack0);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.faqs());
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFaqComponent, [{
    type: Component,
    args: [{
      selector: "xh-product-faq",
      standalone: true,
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @for (f of faqs(); track f[0]; let i = $index) {
      <div class="faq2" [class.open]="open() === i" [attr.data-q]="f[0]" [style.order]="i * 2 + orderOffset()">
        <button
          type="button"
          class="faq2-q"
          [attr.aria-expanded]="open() === i"
          [attr.aria-controls]="idPrefix() + i"
          (click)="toggle(i)"
        >
          {{ f[0] }}<span class="faq2-ic">+</span>
        </button>
        <div class="faq2-a" [id]="idPrefix() + i">
          <p>{{ f[1] }}</p>
        </div>
      </div>
    }
  `
    }]
  }], () => [], { faqs: [{ type: Input, args: [{ isSignal: true, alias: "faqs", required: true }] }], initialOpen: [{ type: Input, args: [{ isSignal: true, alias: "initialOpen", required: false }] }], idPrefix: [{ type: Input, args: [{ isSignal: true, alias: "idPrefix", required: false }] }], orderOffset: [{ type: Input, args: [{ isSignal: true, alias: "orderOffset", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFaqComponent, { className: "ProductFaqComponent", filePath: "src/app/sections/product/product-faq.component.ts", lineNumber: 33 });
})();

export {
  ProductFaqComponent
};
//# sourceMappingURL=chunk-APIH6CFY.js.map
