import {
  ActivatedRoute
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer,
  Title
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/checkout.page.ts
var _c0 = ["checkout"];
var CheckoutPage = class _CheckoutPage {
  checkout;
  observer;
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  checkoutProduct = this.route.snapshot.data["checkoutProduct"];
  smbDesktopPlan = this.readSmbDesktopPlan();
  smbDesktopTerm = this.readSmbDesktopTerm();
  productLabel = this.checkoutProduct === "tally" ? "Tally on Cloud" : this.checkoutProduct === "rmm" ? "RMM" : this.checkoutProduct === "genai" ? "Acronis GenAI Protection Enforce" : this.checkoutProduct === "dpdpa-launch" ? "DPDP Compliance for SMB Launch" : this.checkoutProduct === "dpdpa-growth" ? "DPDP Compliance for SMB Growth" : this.checkoutProduct === "dpdpa-enterprise" ? "DPDP Compliance for SMB Enterprise Enquiry" : this.checkoutProduct === "cybird" ? "Cybird SMB Cyber Security Appliance" : this.checkoutProduct === "cdr-smb" ? "Acronis Cloud Disaster Recovery SMB" : this.checkoutProduct === "smb-desktop" ? `SMB Cloud Desktop ${this.titleCase(this.smbDesktopPlan)}` : "EDR";
  checkoutFile = this.checkoutProduct === "rmm" ? "xcellhost-rmm-checkout.html" : this.checkoutProduct === "genai" ? "xcellhost-acronis-genai-protection-enforce-checkout.html" : this.checkoutProduct === "dpdpa-launch" ? "dpdpa-smb/xcellhost-dpdp-smb-launch-checkout.html" : this.checkoutProduct === "dpdpa-growth" ? "dpdpa-smb/xcellhost-dpdp-smb-growth-checkout.html" : this.checkoutProduct === "dpdpa-enterprise" ? "dpdpa-smb/xcellhost-dpdp-smb-enterprise-enquiry.html" : this.checkoutProduct === "cybird" ? "xcellhost-cybird-checkout.html" : this.checkoutProduct === "cdr-smb" ? "xcellhost-acronis-cloud-disaster-recovery-smb-checkout.html" : this.checkoutProduct === "smb-desktop" ? `smb-cloud-desktop-checkout/xcellhost-smb-cloud-desktop-${this.smbDesktopPlan}-${this.smbDesktopTerm}-checkout.html` : "xcellhost-checkout.html";
  checkoutParams = new URLSearchParams(this.checkoutProduct === "tally" ? {
    product: "tally-private-cloud-lite",
    billing: this.route.snapshot.queryParamMap.get("billing") || "monthly",
    quantity: this.route.snapshot.queryParamMap.get("quantity") || "1"
  } : this.checkoutProduct === "rmm" ? {
    term: this.route.snapshot.queryParamMap.get("term") || "1y",
    quantity: this.route.snapshot.queryParamMap.get("quantity") || "1"
  } : this.checkoutProduct === "genai" ? { quantity: this.route.snapshot.queryParamMap.get("quantity") || "1" } : this.checkoutProduct === "edr" ? {
    product: "acronis-edr",
    billing: this.route.snapshot.queryParamMap.get("billing") || "1-year",
    quantity: this.route.snapshot.queryParamMap.get("quantity") || "1"
  } : this.checkoutProduct === "cdr-smb" ? { qty: this.route.snapshot.queryParamMap.get("qty") || "1" } : this.checkoutProduct === "smb-desktop" ? { quantity: this.route.snapshot.queryParamMap.get("quantity") || "1" } : {});
  checkoutUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${this.checkoutFile}${this.checkoutParams.size ? `?${this.checkoutParams}` : ""}`);
  constructor() {
    inject(Title).setTitle(`Complete Your ${this.productLabel} Order | XcellHost Cloud Services`);
  }
  onLoad() {
    this.observer?.disconnect();
    const frame = this.checkout?.nativeElement;
    const checkoutDocument = frame?.contentDocument;
    const body = checkoutDocument?.body;
    if (!frame || !checkoutDocument || !body)
      return;
    if (this.checkoutProduct === "tally" || this.checkoutProduct === "smb-desktop" || this.checkoutProduct === "genai" || this.checkoutProduct === "cdr-smb" || this.checkoutProduct.startsWith("dpdpa-")) {
      const embeddedStyles = checkoutDocument.createElement("style");
      embeddedStyles.textContent = ".nav,.foot{display:none!important}";
      checkoutDocument.head.appendChild(embeddedStyles);
    }
    if (this.checkoutProduct === "smb-desktop") {
      this.applySmbDesktopPricing(checkoutDocument);
      this.applySmbDesktopThreeColumnLayout(checkoutDocument);
    }
    const resize = () => {
      frame.style.height = `${Math.ceil(body.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(body);
    void body.ownerDocument.fonts.ready.then(resize);
    resize();
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  readSmbDesktopPlan() {
    const plan = this.route.snapshot.queryParamMap.get("plan");
    return plan === "business" || plan === "professional" || plan === "enterprise" ? plan : "starter";
  }
  readSmbDesktopTerm() {
    switch (this.route.snapshot.queryParamMap.get("term")) {
      case "3m":
        return "3-months";
      case "6m":
        return "6-months";
      case "1y":
        return "1-year";
      default:
        return "monthly";
    }
  }
  applySmbDesktopPricing(checkoutDocument, selectedQuantity) {
    const maximumUsers = {
      starter: 5,
      business: 10,
      professional: 20,
      enterprise: 50
    }[this.smbDesktopPlan];
    const requestedQuantity = selectedQuantity ?? Number(this.route.snapshot.queryParamMap.get("quantity"));
    const quantity = Number.isFinite(requestedQuantity) ? Math.min(maximumUsers, Math.max(1, Math.trunc(requestedQuantity))) : 1;
    const unitPrice = {
      monthly: 999,
      "3-months": 2997,
      "6-months": 5994,
      "1-year": 11988
    }[this.smbDesktopTerm];
    const subtotal = unitPrice * quantity;
    const tax = subtotal * 0.09;
    const total = subtotal + tax * 2;
    checkoutDocument.querySelectorAll(".ps-price .amt").forEach((amount) => {
      amount.textContent = this.formatInr(subtotal);
    });
    checkoutDocument.querySelectorAll(".ps-users").forEach((users) => {
      users.textContent = `${quantity} ${quantity === 1 ? "USER" : "USERS"} SELECTED`;
    });
    const term = checkoutDocument.querySelector(".sum-prod .term");
    if (term) {
      const termLabel = {
        monthly: "Monthly",
        "3-months": "3 Months",
        "6-months": "6 Months",
        "1-year": "1 Year"
      }[this.smbDesktopTerm];
      term.textContent = `${termLabel} \xB7 ${quantity} ${quantity === 1 ? "User" : "Users"}`;
    }
    const summaryAmounts = checkoutDocument.querySelectorAll(".summary .pline .amt");
    const calculatedAmounts = [subtotal, tax, tax, total];
    summaryAmounts.forEach((amount, index) => {
      const value = calculatedAmounts[index];
      if (value !== void 0)
        amount.textContent = this.formatInr(value, index > 0);
    });
    const taxNote = checkoutDocument.querySelector(".tax-note");
    if (taxNote) {
      taxNote.textContent = `Taxes shown are an estimate for ${quantity} selected ${quantity === 1 ? "user" : "users"} (CGST 9% + SGST 9%). There is no hardware or setup fee. Final billing and payment are completed securely on Zoho Billing.`;
    }
    this.applySmbDesktopQuantityControl(checkoutDocument, quantity, maximumUsers);
  }
  applySmbDesktopQuantityControl(checkoutDocument, quantity, maximumUsers) {
    const planHeader = checkoutDocument.querySelector("#cardReview .ps-top");
    if (!planHeader)
      return;
    let control = planHeader.querySelector(".qty-control");
    if (!control) {
      control = checkoutDocument.createElement("div");
      control.className = "qty-control";
      control.setAttribute("aria-label", "Select number of users");
      const decrease2 = checkoutDocument.createElement("button");
      decrease2.type = "button";
      decrease2.className = "qty-btn qty-minus";
      decrease2.setAttribute("aria-label", "Remove one user");
      decrease2.textContent = "\u2212";
      const value2 = checkoutDocument.createElement("span");
      value2.className = "qty-value";
      value2.setAttribute("aria-live", "polite");
      const increase2 = checkoutDocument.createElement("button");
      increase2.type = "button";
      increase2.className = "qty-btn qty-plus";
      increase2.setAttribute("aria-label", "Add one user");
      increase2.textContent = "+";
      decrease2.addEventListener("click", () => {
        this.applySmbDesktopPricing(checkoutDocument, Number(control?.dataset["quantity"]) - 1);
      });
      increase2.addEventListener("click", () => {
        this.applySmbDesktopPricing(checkoutDocument, Number(control?.dataset["quantity"]) + 1);
      });
      control.append(decrease2, value2, increase2);
      planHeader.appendChild(control);
    }
    control.dataset["quantity"] = `${quantity}`;
    const value = control.querySelector(".qty-value");
    if (value)
      value.textContent = `${quantity}`;
    const decrease = control.querySelector(".qty-minus");
    const increase = control.querySelector(".qty-plus");
    if (decrease)
      decrease.disabled = quantity <= 1;
    if (increase)
      increase.disabled = quantity >= maximumUsers;
  }
  applySmbDesktopThreeColumnLayout(checkoutDocument) {
    const layout = checkoutDocument.querySelector(".layout");
    const reviewCard = checkoutDocument.querySelector("#cardReview");
    if (!layout || !reviewCard)
      return;
    if (!layout.querySelector(".col-benefits")) {
      const sectionForHeading = (label) => {
        const heading = Array.from(reviewCard.querySelectorAll(".card-h")).find((item) => item.textContent?.trim() === label);
        return heading?.parentElement ?? null;
      };
      const whySection = sectionForHeading("Why this plan");
      const includedSection = sectionForHeading("What's included");
      if (!whySection || !includedSection)
        return;
      const benefitsColumn = checkoutDocument.createElement("aside");
      benefitsColumn.className = "col-benefits";
      benefitsColumn.setAttribute("aria-label", "Plan benefits");
      const benefitsCard = checkoutDocument.createElement("div");
      benefitsCard.className = "card benefits-card";
      benefitsCard.append(whySection, includedSection);
      benefitsColumn.appendChild(benefitsCard);
      layout.appendChild(benefitsColumn);
    }
    if (checkoutDocument.head.querySelector("[data-smb-three-column-styles]"))
      return;
    const layoutStyles = checkoutDocument.createElement("style");
    layoutStyles.setAttribute("data-smb-three-column-styles", "");
    layoutStyles.textContent = `
      .stepper { max-width: 1680px !important; }
      .layout {
        width: 100%;
        max-width: 1680px !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        align-items: stretch !important;
      }
      .col-left, .col-right, .col-benefits { min-width: 0; height: 100%; }
      .col-left > .card:not([style*="display: none"]):not([style*="display:none"]),
      .col-right .summary,
      .col-benefits .benefits-card {
        position: static;
        height: 100%;
        margin-bottom: 0;
      }
      .col-benefits .why { margin: 0; }
      #cardReview .ps-top { position: relative; min-height: 148px; padding-right: 166px; }
      .qty-control {
        position: absolute;
        right: 20px;
        bottom: 18px;
        display: inline-grid;
        grid-template-columns: 34px 44px 34px;
        align-items: center;
        border: 1px solid #cbdcf8;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 5px 14px rgba(4, 30, 66, .08);
      }
      .qty-btn {
        width: 34px;
        height: 34px;
        border: 0;
        background: #e8f0ff;
        color: #0066ff;
        font: 800 20px/1 'DM Sans', sans-serif;
        cursor: pointer;
      }
      .qty-btn:hover:not(:disabled) { background: #d8e7ff; }
      .qty-btn:disabled { cursor: not-allowed; color: #9aabc4; background: #f2f5f9; }
      .qty-value { text-align: center; font-size: .9rem; font-weight: 800; color: #041e42; }
      @media (max-width: 1280px) {
        .layout {
          max-width: 1080px !important;
          grid-template-columns: minmax(0, 1fr) 340px !important;
        }
        .col-benefits { grid-column: 1 / -1; }
        .col-left, .col-right, .col-benefits,
        .col-left > .card:not([style*="display: none"]):not([style*="display:none"]),
        .col-right .summary,
        .col-benefits .benefits-card { height: auto; }
      }
      @media (max-width: 900px) {
        .layout { max-width: 760px !important; grid-template-columns: 1fr !important; }
        .col-right, .col-benefits { grid-column: auto; }
      }
      @media (max-width: 560px) {
        #cardReview .ps-top { padding-right: 20px; }
        .qty-control { position: static; margin-top: 12px; }
      }
    `;
    checkoutDocument.head.appendChild(layoutStyles);
  }
  formatInr(amount, showPaise = false) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: showPaise ? 2 : 0,
      maximumFractionDigits: showPaise ? 2 : 0
    }).format(amount);
  }
  titleCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  static \u0275fac = function CheckoutPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutPage, selectors: [["xh-checkout-page"]], viewQuery: function CheckoutPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkout = _t.first);
    }
  }, decls: 3, vars: 3, consts: [["checkout", ""], [3, "load", "src", "title"]], template: function CheckoutPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "main")(1, "iframe", 1, 0);
      \u0275\u0275domListener("load", function CheckoutPage_Template_iframe_load_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.productLabel + " checkout");
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.checkoutUrl, \u0275\u0275sanitizeResourceUrl)("title", "Complete your " + ctx.productLabel + " order");
    }
  }, styles: ["\n\n[_nghost-%COMP%], \nmain[_ngcontent-%COMP%] {\n  display: block;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 1100px;\n  border: 0;\n}\n/*# sourceMappingURL=checkout.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPage, [{
    type: Component,
    args: [{ selector: "xh-checkout-page", standalone: true, template: `
    <main [attr.aria-label]="productLabel + ' checkout'">
      <iframe #checkout [src]="checkoutUrl" [title]="'Complete your ' + productLabel + ' order'"
        (load)="onLoad()"></iframe>
    </main>
  `, styles: ["/* angular:styles/component:css;440422a77d2e2e0dabad13142c3ac29581f05fba35375ea7ad561a10d692e2c5;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/checkout.page.ts */\n:host,\nmain {\n  display: block;\n}\niframe {\n  display: block;\n  width: 100%;\n  height: 1100px;\n  border: 0;\n}\n/*# sourceMappingURL=checkout.page.css.map */\n"] }]
  }], () => [], { checkout: [{
    type: ViewChild,
    args: ["checkout"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutPage, { className: "CheckoutPage", filePath: "src/app/pages/checkout.page.ts", lineNumber: 20 });
})();
export {
  CheckoutPage
};
//# sourceMappingURL=chunk-CYMBZINR.js.map
