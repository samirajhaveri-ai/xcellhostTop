import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵlistener,
  ɵɵresolveWindow,
  ɵɵstyleProp,
  ɵɵtrustConstantResourceUrl
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/cloud-drive-checkout.page.ts
var CloudDriveCheckoutPage = class _CloudDriveCheckoutPage {
  checkoutHeight = signal(1200, ...ngDevMode ? [{ debugName: "checkoutHeight" }] : []);
  onCheckoutMessage(event) {
    if (event.origin !== window.location.origin)
      return;
    const message = event.data;
    if (message?.type !== "xcellhost-checkout-height" || typeof message.height !== "number" || !Number.isFinite(message.height))
      return;
    this.checkoutHeight.set(Math.max(800, Math.ceil(message.height)));
  }
  static \u0275fac = function CloudDriveCheckoutPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudDriveCheckoutPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloudDriveCheckoutPage, selectors: [["xh-cloud-drive-checkout-page"]], hostBindings: function CloudDriveCheckoutPage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("message", function CloudDriveCheckoutPage_message_HostBindingHandler($event) {
        return ctx.onCheckoutMessage($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 2, vars: 2, consts: [[1, "checkout-shell"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/xcellhost-xcelldrive-checkout.html`, "title", "XcellDrive checkout"]], template: function CloudDriveCheckoutPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0);
      \u0275\u0275domElement(1, "iframe", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.checkoutHeight(), "px");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f6f9fc;\n}\n.checkout-shell[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 800px;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 800px;\n  border: 0;\n  background: #f6f9fc;\n}\n/*# sourceMappingURL=cloud-drive-checkout.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudDriveCheckoutPage, [{
    type: Component,
    args: [{ selector: "xh-cloud-drive-checkout-page", standalone: true, template: `
    <main class="checkout-shell">
      <iframe
        src="/assets/xcellhost-xcelldrive-checkout.html"
        title="XcellDrive checkout"
        [style.height.px]="checkoutHeight()"
      ></iframe>
    </main>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;f7328e5c2a0bf896ae7498252099ad5e04f40bca5f3eb17d9d6c9849aca24a30;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/cloud-drive-checkout.page.ts */\n:host {\n  display: block;\n  background: #f6f9fc;\n}\n.checkout-shell {\n  width: 100%;\n  min-height: 800px;\n}\niframe {\n  display: block;\n  width: 100%;\n  min-height: 800px;\n  border: 0;\n  background: #f6f9fc;\n}\n/*# sourceMappingURL=cloud-drive-checkout.page.css.map */\n"] }]
  }], null, { onCheckoutMessage: [{
    type: HostListener,
    args: ["window:message", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloudDriveCheckoutPage, { className: "CloudDriveCheckoutPage", filePath: "src/app/pages/cloud-drive-checkout.page.ts", lineNumber: 36 });
})();
export {
  CloudDriveCheckoutPage
};
//# sourceMappingURL=chunk-MT22LYIQ.js.map
