import {
  SmbSectionNavComponent
} from "./chunk-JECKRT3F.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  QuantityInputDirective
} from "./chunk-XXOOERF5.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import {
  DecimalPipe
} from "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtrustConstantResourceUrl
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/pages/microsoft-365-smb.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function Microsoft365SmbPage_Conditional_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63);
    \u0275\u0275text(1, "Business Basic");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1, "Business Basic");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "MS list ");
    \u0275\u0275elementStart(2, "s");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " /user/mo");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(4, 1, ctx_r0.displayPrice("basic", ctx_r0.basicTeamsListMonthly), "1.0-2"));
  }
}
function Microsoft365SmbPage_For_213_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Save ", ctx_r0.basicTeamsUpfrontDiscount, "%");
  }
}
function Microsoft365SmbPage_For_213_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2713");
  }
}
function Microsoft365SmbPage_For_213_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r0.displayPrice("basic", ctx_r0.annualRate("basic", option_r3.id)), "1.0-0"), " /user/year");
  }
}
function Microsoft365SmbPage_For_213_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " /user/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_213_Conditional_8_Conditional_5_Template, 3, 4, "span", 188);
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 2, ctx, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(option_r3.id !== "monthly" ? 5 : -1);
  }
}
function Microsoft365SmbPage_For_213_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2, "Quote on request");
    \u0275\u0275elementEnd()();
  }
}
function Microsoft365SmbPage_For_213_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 3, ctx, "1.0-2"), " /mo");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u20B9", \u0275\u0275pipeBind2(6, 6, ctx_r0.displayPrice("basic", ctx_r0.billingTotal("basic", option_r3.id, true)), "1.0-0"), " /year", option_r3.id === "monthly" ? " equivalent" : "");
  }
}
function Microsoft365SmbPage_For_213_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Quote for ", ctx_r0.quoteQuantities()["basic"], " users");
  }
}
function Microsoft365SmbPage_For_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function Microsoft365SmbPage_For_213_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setBillingTerm("basic", option_r3.id));
    });
    \u0275\u0275elementStart(1, "span", 179)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 180);
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_213_Conditional_5_Template, 2, 1, "span", 181);
    \u0275\u0275elementStart(6, "span", 182);
    \u0275\u0275conditionalCreate(7, Microsoft365SmbPage_For_213_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Microsoft365SmbPage_For_213_Conditional_8_Template, 6, 5)(9, Microsoft365SmbPage_For_213_Conditional_9_Template, 3, 0, "span", 183);
    \u0275\u0275elementStart(10, "span", 184);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 185);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 186)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, Microsoft365SmbPage_For_213_Conditional_17_Template, 7, 9, "span", 187)(18, Microsoft365SmbPage_For_213_Conditional_18_Template, 2, 1, "span", 187);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_20_0;
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chosen", ctx_r0.billingTerms()["basic"] === option_r3.id)("upfront", option_r3.id === "upfront");
    \u0275\u0275attribute("aria-pressed", ctx_r0.billingTerms()["basic"] === option_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.includesTeams() && option_r3.id === "upfront" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.billingTerms()["basic"] === option_r3.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.displayPrice("basic", ctx_r0.monthlyRate("basic", option_r3.id))) ? 8 : 9, tmp_16_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r3.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.includesGst()["basic"] ? "Includes GST 18%" : "Excludes GST 18% (added at billing)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xD7 ", ctx_r0.quoteQuantities()["basic"], " ", ctx_r0.quoteQuantities()["basic"] === 1 ? "user" : "users");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r0.displayPrice("basic", ctx_r0.billingTotal("basic", option_r3.id))) ? 17 : 18, tmp_20_0);
  }
}
function Microsoft365SmbPage_Conditional_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Online checkout uses annual upfront billing.");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 80);
    \u0275\u0275text(1, "Business Standard");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_242_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275text(1, "Business Standard");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_245_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "MS list ");
    \u0275\u0275elementStart(2, "s");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " /user/mo");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(4, 1, ctx_r0.displayPrice("standard", ctx_r0.standardTeamsListMonthly), "1.0-2"));
  }
}
function Microsoft365SmbPage_For_256_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Save ", ctx_r0.standardTeamsUpfrontDiscount, "%");
  }
}
function Microsoft365SmbPage_For_256_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2713");
  }
}
function Microsoft365SmbPage_For_256_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r0.displayPrice("standard", ctx_r0.annualRate("standard", option_r5.id)), "1.0-0"), " /user/year");
  }
}
function Microsoft365SmbPage_For_256_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " /user/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_256_Conditional_8_Conditional_5_Template, 3, 4, "span", 188);
  }
  if (rf & 2) {
    const option_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 2, ctx, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(option_r5.id !== "monthly" ? 5 : -1);
  }
}
function Microsoft365SmbPage_For_256_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2, "Quote on request");
    \u0275\u0275elementEnd()();
  }
}
function Microsoft365SmbPage_For_256_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 3, ctx, "1.0-2"), " /mo");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u20B9", \u0275\u0275pipeBind2(6, 6, ctx_r0.displayPrice("standard", ctx_r0.billingTotal("standard", option_r5.id, true)), "1.0-0"), " /year", option_r5.id === "monthly" ? " equivalent" : "");
  }
}
function Microsoft365SmbPage_For_256_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Quote for ", ctx_r0.quoteQuantities()["standard"], " users");
  }
}
function Microsoft365SmbPage_For_256_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function Microsoft365SmbPage_For_256_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setBillingTerm("standard", option_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 179)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 180);
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_256_Conditional_5_Template, 2, 1, "span", 181);
    \u0275\u0275elementStart(6, "span", 182);
    \u0275\u0275conditionalCreate(7, Microsoft365SmbPage_For_256_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Microsoft365SmbPage_For_256_Conditional_8_Template, 6, 5)(9, Microsoft365SmbPage_For_256_Conditional_9_Template, 3, 0, "span", 183);
    \u0275\u0275elementStart(10, "span", 184);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 185);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 186)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, Microsoft365SmbPage_For_256_Conditional_17_Template, 7, 9, "span", 187)(18, Microsoft365SmbPage_For_256_Conditional_18_Template, 2, 1, "span", 187);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_20_0;
    const option_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chosen", ctx_r0.billingTerms()["standard"] === option_r5.id)("upfront", option_r5.id === "upfront");
    \u0275\u0275attribute("aria-pressed", ctx_r0.billingTerms()["standard"] === option_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.includesTeams() && option_r5.id === "upfront" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.billingTerms()["standard"] === option_r5.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.displayPrice("standard", ctx_r0.monthlyRate("standard", option_r5.id))) ? 8 : 9, tmp_16_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r5.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.includesGst()["standard"] ? "Includes GST 18%" : "Excludes GST 18% (added at billing)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xD7 ", ctx_r0.quoteQuantities()["standard"], " ", ctx_r0.quoteQuantities()["standard"] === 1 ? "user" : "users");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r0.displayPrice("standard", ctx_r0.billingTotal("standard", option_r5.id))) ? 17 : 18, tmp_20_0);
  }
}
function Microsoft365SmbPage_Conditional_264_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, "Teams webinars & meeting recordings");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Online checkout uses annual upfront billing.");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_283_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275text(1, "Business Premium");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_284_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 89);
    \u0275\u0275text(1, "Business Premium");
    \u0275\u0275elementEnd();
  }
}
function Microsoft365SmbPage_Conditional_287_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "MS list ");
    \u0275\u0275elementStart(2, "s");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " /user/mo");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(4, 1, ctx_r0.displayPrice("premium", ctx_r0.premiumTeamsListMonthly), "1.0-2"));
  }
}
function Microsoft365SmbPage_For_298_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Save ", ctx_r0.premiumTeamsUpfrontDiscount, "%");
  }
}
function Microsoft365SmbPage_For_298_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2713");
  }
}
function Microsoft365SmbPage_For_298_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r0.displayPrice("premium", ctx_r0.annualRate("premium", option_r7.id)), "1.0-0"), " /user/year");
  }
}
function Microsoft365SmbPage_For_298_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " /user/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_298_Conditional_8_Conditional_5_Template, 3, 4, "span", 188);
  }
  if (rf & 2) {
    const option_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 2, ctx, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(option_r7.id !== "monthly" ? 5 : -1);
  }
}
function Microsoft365SmbPage_For_298_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183)(1, "b");
    \u0275\u0275text(2, "Quote on request");
    \u0275\u0275elementEnd()();
  }
}
function Microsoft365SmbPage_For_298_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(3, 3, ctx, "1.0-2"), " /mo");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u20B9", \u0275\u0275pipeBind2(6, 6, ctx_r0.displayPrice("premium", ctx_r0.billingTotal("premium", option_r7.id, true)), "1.0-0"), " /year", option_r7.id === "monthly" ? " equivalent" : "");
  }
}
function Microsoft365SmbPage_For_298_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Quote for ", ctx_r0.quoteQuantities()["premium"], " users");
  }
}
function Microsoft365SmbPage_For_298_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function Microsoft365SmbPage_For_298_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setBillingTerm("premium", option_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 179)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 180);
    \u0275\u0275conditionalCreate(5, Microsoft365SmbPage_For_298_Conditional_5_Template, 2, 1, "span", 181);
    \u0275\u0275elementStart(6, "span", 182);
    \u0275\u0275conditionalCreate(7, Microsoft365SmbPage_For_298_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Microsoft365SmbPage_For_298_Conditional_8_Template, 6, 5)(9, Microsoft365SmbPage_For_298_Conditional_9_Template, 3, 0, "span", 183);
    \u0275\u0275elementStart(10, "span", 184);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 185);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 186)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, Microsoft365SmbPage_For_298_Conditional_17_Template, 7, 9, "span", 187)(18, Microsoft365SmbPage_For_298_Conditional_18_Template, 2, 1, "span", 187);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_20_0;
    const option_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chosen", ctx_r0.billingTerms()["premium"] === option_r7.id)("upfront", option_r7.id === "upfront");
    \u0275\u0275attribute("aria-pressed", ctx_r0.billingTerms()["premium"] === option_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.includesTeams() && option_r7.id === "upfront" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.billingTerms()["premium"] === option_r7.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.displayPrice("premium", ctx_r0.monthlyRate("premium", option_r7.id))) ? 8 : 9, tmp_16_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r7.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.includesGst()["premium"] ? "Includes GST 18%" : "Excludes GST 18% (added at billing)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xD7 ", ctx_r0.quoteQuantities()["premium"], " ", ctx_r0.quoteQuantities()["premium"] === 1 ? "user" : "users");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r0.displayPrice("premium", ctx_r0.billingTotal("premium", option_r7.id))) ? 17 : 18, tmp_20_0);
  }
}
function Microsoft365SmbPage_Conditional_321_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Online checkout uses annual upfront billing.");
    \u0275\u0275elementEnd();
  }
}
var Microsoft365SmbPage = class _Microsoft365SmbPage {
  docs = inject(DocRequestService);
  overlay = inject(OverlayService);
  seo = inject(SeoService);
  topics = inject(CallbackTopicService);
  sanitizer = inject(DomSanitizer);
  insightVideos = ["Product Intro", "Use Cases"].map((title) => ({
    title,
    src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OMJo7BpTzmM")
  }));
  openFaq = signal(0, ...ngDevMode ? [{ debugName: "openFaq" }] : []);
  sectionNavLinks = [
    { label: "Overview", target: "m365Overview" },
    { label: "Pricing", target: "pricing" },
    { label: "Security", target: "m365Security" },
    { label: "Why to Choose", target: "m365WhyChoose" },
    { label: "Features", target: "m365Features" },
    { label: "Customer Testimonials", target: "m365Testimonials" },
    { label: "FAQs", target: "m365Faq" },
    { label: "Insights", target: "m365Insights" }
  ];
  includesTeams = signal(true, ...ngDevMode ? [{ debugName: "includesTeams" }] : []);
  includesGst = signal({ basic: false, standard: false, premium: false }, ...ngDevMode ? [{ debugName: "includesGst" }] : []);
  billingOptions = [
    { id: "upfront", label: "Annual \xB7 paid upfront", note: "1-year commitment \xB7 one annual payment" },
    { id: "monthly", label: "Monthly \xB7 no commitment", note: "Month-to-month \xB7 cancel anytime" }
  ];
  billingTerms = signal({ basic: "upfront", standard: "upfront", premium: "upfront" }, ...ngDevMode ? [{ debugName: "billingTerms" }] : []);
  basicTeamsListMonthly = 170;
  basicTeamsUpfrontDiscount = 15;
  standardTeamsListMonthly = 860;
  standardTeamsUpfrontDiscount = 15;
  premiumTeamsListMonthly = 1830;
  premiumTeamsUpfrontDiscount = 15;
  // Calculate the annual amount before rounding the displayed monthly equivalent.
  // Business Basic with Teams: 170 × 12 × 85% = 1,734, or 144.50/month.
  annualRates = {
    basic: [1260, Math.round(this.basicTeamsListMonthly * 12 * (1 - this.basicTeamsUpfrontDiscount / 100))],
    standard: [6840, Math.round(this.standardTeamsListMonthly * 12 * (1 - this.standardTeamsUpfrontDiscount / 100))],
    premium: [18780, Math.round(this.premiumTeamsListMonthly * 12 * (1 - this.premiumTeamsUpfrontDiscount / 100))]
  };
  monthlyRates = { basic: 200, standard: 1011, premium: 2152 };
  noTeamsMonthlyRates = { basic: 153, standard: 782, premium: 1840 };
  quoteQuantities = signal({
    basic: 1,
    standard: 1,
    premium: 1
  }, ...ngDevMode ? [{ debugName: "quoteQuantities" }] : []);
  basicTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-WT-A";
  standardTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-WT-A";
  premiumTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-WT-A";
  basicNoTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-NT-A";
  standardNoTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-NT-A";
  premiumNoTeamsCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-NT-A";
  constructor() {
    this.seo.set("Microsoft 365 India \u2014 Authorised Microsoft Partner | XcellHost", "Buy Microsoft 365 in India from XcellHost. Outlook, Teams, Word, Excel, OneDrive, SharePoint and Copilot AI, with migration and 24\xD77 support.", "/microsoft-365-smb/");
  }
  toggleFaq(index) {
    this.openFaq.update((current) => current === index ? null : index);
  }
  setTeamsOption(includesTeams) {
    this.includesTeams.set(includesTeams);
  }
  adjustQuantity(plan, change) {
    this.quoteQuantities.update((quantities) => __spreadProps(__spreadValues({}, quantities), {
      [plan]: Math.min(300, Math.max(1, (quantities[plan] ?? 1) + change))
    }));
  }
  setBillingTerm(plan, term) {
    this.billingTerms.update((terms) => __spreadProps(__spreadValues({}, terms), { [plan]: term }));
  }
  setGstOption(plan, included) {
    this.includesGst.update((options) => __spreadProps(__spreadValues({}, options), { [plan]: included }));
  }
  displayPrice(plan, amount) {
    return amount === null ? null : amount * (this.includesGst()[plan] ? 1.18 : 1);
  }
  monthlyRate(plan, term) {
    if (term === "upfront")
      return this.annualRates[plan][this.includesTeams() ? 1 : 0] / 12;
    return this.includesTeams() ? this.monthlyRates[plan] : this.noTeamsMonthlyRates[plan];
  }
  annualRate(plan, term) {
    const rate = this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * 12);
  }
  billingTotal(plan, term, yearly = false) {
    const rate = yearly ? this.annualRate(plan, term) : this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * this.quoteQuantities()[plan] * 100) / 100;
  }
  planTotal(plan) {
    const term = this.billingTerms()[plan];
    const rate = term === "upfront" ? this.annualRate(plan, term) : this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * this.quoteQuantities()[plan] * 100) / 100;
  }
  checkoutUrl(plan) {
    const links = {
      basic: this.includesTeams() ? this.basicTeamsCheckoutUrl : this.basicNoTeamsCheckoutUrl,
      standard: this.includesTeams() ? this.standardTeamsCheckoutUrl : this.standardNoTeamsCheckoutUrl,
      premium: this.includesTeams() ? this.premiumTeamsCheckoutUrl : this.premiumNoTeamsCheckoutUrl
    };
    return links[plan];
  }
  requestPlanQuote(plan) {
    const title = { basic: "Business Basic", standard: "Business Standard", premium: "Business Premium" }[plan];
    const term = this.billingOptions.find((option) => option.id === this.billingTerms()[plan]);
    const total = this.planTotal(plan);
    const amount = total === null ? "Pricing on request" : `INR ${total.toLocaleString("en-IN")} / ${term.id === "upfront" ? "year" : "month"} + GST`;
    this.topics.ask(`Microsoft 365 ${title} \xB7 ${this.includesTeams() ? "With Teams" : "Without Teams"} \xB7 ${term.label} \xB7 ${this.quoteQuantities()[plan]} users \xB7 ${amount}`);
    this.overlay.open("callback");
  }
  requestPresentation(event) {
    event.preventDefault();
    this.docs.ask("presentation", "Microsoft 365 SMB");
    this.overlay.open("doc");
  }
  openCallback(event) {
    event.preventDefault();
    this.topics.ask("Microsoft 365");
    this.overlay.open("callback");
  }
  static \u0275fac = function Microsoft365SmbPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Microsoft365SmbPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Microsoft365SmbPage, selectors: [["xh-microsoft-365-smb-page"]], decls: 913, vars: 70, consts: [["id", "ppage", 1, "ppage", "as-page"], ["aria-label", "Microsoft 365 SMB hero", 1, "supplied-smb-hero-shell"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/heroes/microsoft-365-smb-hero.html`, "title", "Microsoft 365 for SMB interactive overview", "sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox", "referrerpolicy", "strict-origin-when-cross-origin", "scrolling", "no", 1, "supplied-smb-hero-frame"], [1, "pp-hero", "legacy-smb-hero"], [1, "pph-map"], [1, "wm-ring"], [1, "wm-ring", "r2"], [1, "pph-grid"], [1, "pph-aur", "pph-a1"], [1, "pph-aur", "pph-a2"], [1, "pph-aur", "pph-a3"], [1, "pph-scan"], [1, "orb", "orb-1"], ["aria-hidden", "true", 1, "pph-scene", "has-illus", "standalone-illus"], [1, "pph-illus"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/animations/microsoft365-animation.html`, "title", "Microsoft 365 SMB productivity apps animation", "sandbox", "allow-scripts", "tabindex", "-1", 1, "microsoft365-hero-animation"], [1, "wrap"], [1, "pp-crumb"], [1, "pp-title-brand"], [1, "pp-brand-xcell"], [1, "pp-brand-family"], [1, "pp-title-divider"], [1, "pp-title-name"], [1, "pp-tagline"], [1, "pp-tagline-support"], [1, "pp-typewriter"], [1, "pp-chips"], [1, "pp-chip", "price"], [1, "pp-chip"], [1, "pp-hero-grid"], [1, "pp-hero-l"], [1, "pp-hpoints"], [1, "pp-hpoint"], [1, "tick"], [1, "hero-ctas"], ["type", "button", 1, "btn", "btn-ghost"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [1, "pp-trust"], ["label", "Microsoft 365 SMB page sections", 3, "links"], [1, "pp-body"], ["id", "m365Overview", 1, "pp-sec"], [1, "pp-ov", "m365-overview-copy"], [1, "pp-stats"], [1, "pp-stat"], [1, "pp-sec"], [1, "pp-apps"], [1, "pp-app"], [1, "ai", 2, "background", "#0F6CBD"], [1, "ai", 2, "background", "#5059C9"], [1, "ai", 2, "background", "#185ABD"], [1, "ai", 2, "background", "#107C41"], [1, "ai", 2, "background", "#C43E1C"], [1, "ai", 2, "background", "#0364B8"], [1, "ai", 2, "background", "#038387"], [1, "ai", 2, "background", "linear-gradient(135deg,#2F6FE4,#7C3AED 55%,#E8478B)"], ["id", "pricing", 1, "pp-sec"], [1, "pp-ov", 2, "margin-bottom", "18px"], [1, "pp-toggle-wrap"], ["role", "group", "aria-label", "Choose Microsoft 365 plans with or without Teams", 1, "pp-toggle"], ["type", "button", 3, "click"], [1, "pp-plans"], [1, "ppl"], [1, "tag"], ["routerLink", "/microsoft-365-business-basic", 1, "business-basic-detail-link"], ["routerLink", "/microsoft-365-business-basic-no-teams", 1, "business-basic-detail-link"], [1, "sub"], [1, "billing-list-price"], [1, "billing-gst-row"], ["role", "group", "aria-label", "Business Basic GST display", 1, "billing-gst-toggle"], ["role", "group", "aria-label", "Business Basic payment frequency", 1, "billing-choices"], ["type", "button", 1, "billing-choice", 3, "chosen", "upfront"], [1, "btns"], [1, "quantity-label"], ["role", "group", "aria-label", "Business Basic quantity", 1, "quote-quantity"], ["type", "button", "aria-label", "Decrease Business Basic quantity", 3, "click", "disabled"], ["xhQuantityInput", "", "aria-label", "Quantity for Business Basic quantity", 3, "quantityChange", "quantityValue", "quantityMax"], ["type", "button", "aria-label", "Increase Business Basic quantity", 3, "click", "disabled"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], [1, "checkout-term-note"], [1, "ppl", "hot"], ["routerLink", "/microsoft-365-business-standard", 1, "business-basic-detail-link"], ["routerLink", "/microsoft-365-business-standard-no-teams", 1, "business-basic-detail-link"], ["role", "group", "aria-label", "Business Standard GST display", 1, "billing-gst-toggle"], ["role", "group", "aria-label", "Business Standard payment frequency", 1, "billing-choices"], ["role", "group", "aria-label", "Business Standard quantity", 1, "quote-quantity"], ["type", "button", "aria-label", "Decrease Business Standard quantity", 3, "click", "disabled"], ["xhQuantityInput", "", "aria-label", "Quantity for Business Standard quantity", 3, "quantityChange", "quantityValue", "quantityMax"], ["type", "button", "aria-label", "Increase Business Standard quantity", 3, "click", "disabled"], ["routerLink", "/microsoft-365-business-premium", 1, "business-basic-detail-link"], ["routerLink", "/microsoft-365-business-premium-no-teams", 1, "business-basic-detail-link"], ["role", "group", "aria-label", "Business Premium GST display", 1, "billing-gst-toggle"], ["role", "group", "aria-label", "Business Premium payment frequency", 1, "billing-choices"], ["role", "group", "aria-label", "Business Premium quantity", 1, "quote-quantity"], ["type", "button", "aria-label", "Decrease Business Premium quantity", 3, "click", "disabled"], ["xhQuantityInput", "", "aria-label", "Quantity for Business Premium quantity", 3, "quantityChange", "quantityValue", "quantityMax"], ["type", "button", "aria-label", "Increase Business Premium quantity", 3, "click", "disabled"], [1, "billing-footnote"], [1, "pp-plans2"], [1, "ppl2"], [1, "amt"], [1, "pp-planstrip"], ["href", "#contact", 1, "btn", "btn-primary", 3, "click"], [1, "pp-ov", 2, "margin-bottom", "6px"], [1, "pp-addons"], [1, "pp-addon"], [1, "pv-note"], ["id", "m365Features", 1, "pp-sec"], [1, "pp-ov", 2, "margin-bottom", "20px"], [1, "pp-feats"], [1, "pp-feat"], [1, "fic", 2, "background", "#0F6CBD"], [1, "fic", 2, "background", "#5059C9"], [1, "fic", 2, "background", "#185ABD"], [1, "fic", 2, "background", "#0364B8"], [1, "fic", 2, "background", "#0B5CAB"], [1, "fic", 2, "background", "linear-gradient(135deg,#2F6FE4,#7C3AED 55%,#E8478B)"], [1, "pp-bens"], [1, "pb"], [1, "ic"], [1, "pp-suite"], [1, "lbl"], [1, "pp-suitegrid"], [1, "hero-ctas", 2, "animation", "none"], ["href", "#pricing", 1, "btn", "btn-ghost"], [1, "pp-suitecard"], [1, "cp-mark"], ["src", "/assets/images/microsoft-copilot-logo.png", "alt", "Microsoft Copilot logo"], ["aria-labelledby", "microsoft-365-protection-title", 1, "backup-protection", "cloud-backup-protection", "microsoft-365-protection"], [1, "cloud-backup-protection-copy"], ["id", "microsoft-365-protection-title"], ["src", "/assets/images/acronis-platinum-service-provider.png", "alt", "Acronis Platinum Service Provider", "width", "230", "height", "47", "loading", "lazy", "decoding", "async", 1, "acronis-platinum-partner"], ["src", "/assets/images/acronis-microsoft-365-badges-transparent-heading.png", "alt", "Acronis Certified Microsoft 365 Professional and M365 Backup Specialist badges", "loading", "lazy", "decoding", "async", 1, "backup-protection-badges", "backup-protection-badges-compact"], [1, "pp-uses"], [1, "pu"], [1, "pu-ic"], ["id", "m365Security", 1, "pp-sec"], [1, "pp-ov"], [1, "pp-secrows"], [1, "psrow"], [1, "pp-secfoot"], ["id", "m365WhyChoose", 1, "pp-sec"], [1, "pp-why"], [1, "pw"], [1, "pw-ic"], [1, "pp-badge"], [1, "seal"], ["width", "46", "height", "46", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["x", "0", "y", "0", "width", "11", "height", "11", "fill", "#F25022"], ["x", "13", "y", "0", "width", "11", "height", "11", "fill", "#7FBA00"], ["x", "0", "y", "13", "width", "11", "height", "11", "fill", "#00A4EF"], ["x", "13", "y", "13", "width", "11", "height", "11", "fill", "#FFB900"], [1, "txt"], ["id", "m365Testimonials", 1, "pp-sec"], [1, "pp-tcards"], [1, "tcard"], [1, "quote-badge"], [1, "tav"], [1, "tname"], [1, "trole"], [1, "tstars"], ["id", "m365Faq", 1, "pp-sec"], [1, "pp-faq"], [1, "faq2"], ["type", "button", 1, "faq2-q", 3, "click"], [1, "faq2-ic"], [1, "faq2-a"], ["id", "m365Insights"], ["pageSlug", "microsoft-365-smb", 3, "videos"], ["id", "contact", 1, "pp-cta"], [1, "pp-cta-copy"], [1, "pp-ctabtns"], ["href", "https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost"], ["href", "#", 1, "btn", "btn-ghost", 3, "click"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.cloud", 1, "btn", "btn-ghost"], ["href", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"], [1, "pp-proof"], ["type", "button", 1, "billing-choice", 3, "click"], [1, "billing-choice-heading"], [1, "billing-choice-status"], [1, "billing-discount-badge"], ["aria-hidden", "true", 1, "billing-indicator"], [1, "billing-unit-price"], [1, "billing-note"], [1, "billing-tax-note"], ["aria-live", "polite", 1, "billing-seat-total"], [1, "billing-seat-amount"], [1, "billing-annual-price"]], template: function Microsoft365SmbPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
      \u0275\u0275element(2, "iframe", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 3)(4, "div", 4);
      \u0275\u0275element(5, "div", 5)(6, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "span", 7)(8, "span", 8)(9, "span", 9)(10, "span", 10)(11, "span", 11)(12, "span", 12);
      \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
      \u0275\u0275element(15, "iframe", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 16)(17, "div", 17);
      \u0275\u0275text(18, "Home \u203A Cloud \u203A Email & Collaboration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h1")(20, "span", 18)(21, "span", 19);
      \u0275\u0275text(22, "Xcell");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 20);
      \u0275\u0275text(24, "Cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "span", 21);
      \u0275\u0275text(26, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 22);
      \u0275\u0275text(28, "Microsoft 365 SMB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "p", 23);
      \u0275\u0275text(30, "The complete cloud productivity suite for Indian businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 24);
      \u0275\u0275text(32, "Outlook \xB7 Teams \xB7 Word \xB7 Excel \xB7 OneDrive \xB7 SharePoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 25)(34, "span");
      \u0275\u0275text(35, "Everything your team needs to work, meet and create.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 26)(38, "span", 27);
      \u0275\u0275text(39, "Business Basic from \u20B91,740/user/year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 28);
      \u0275\u0275text(41, "Copilot AI add-on available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 28);
      \u0275\u0275text(43, "GST invoice \xB7 INR billing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "div", 32);
      \u0275\u0275element(48, "span", 33);
      \u0275\u0275text(49, "All apps + email on your domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 32);
      \u0275\u0275element(51, "span", 33);
      \u0275\u0275text(52, "Free migration \u2014 zero data loss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 32);
      \u0275\u0275element(54, "span", 33);
      \u0275\u0275text(55, "99.9% financially backed uptime SLA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 32);
      \u0275\u0275element(57, "span", 33);
      \u0275\u0275text(58, "Teams, DNS & DMARC set up by us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 34)(60, "button", 35);
      \u0275\u0275text(61, "7 Day's Free Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 36);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_62_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(63, "Let's Talk");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 37)(65, "div", 16)(66, "span")(67, "b");
      \u0275\u0275text(68, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " & ");
      \u0275\u0275elementStart(70, "b");
      \u0275\u0275text(71, "20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " certified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span")(74, "b");
      \u0275\u0275text(75, "Microsoft");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span")(78, "b");
      \u0275\u0275text(79, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span")(82, "b");
      \u0275\u0275text(83, "Since 1999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "span")(85, "b");
      \u0275\u0275text(86, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "span")(88, "b");
      \u0275\u0275text(89, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275text(90, " NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(91, "xh-smb-section-nav", 38);
      \u0275\u0275elementStart(92, "div", 39)(93, "div", 16)(94, "div", 40);
      \u0275\u0275text(95, "Overview \u2014 What is Microsoft 365?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 41);
      \u0275\u0275text(97, " Microsoft 365 (formerly Office 365) is Microsoft's cloud-based productivity platform, trusted by over 345 million users worldwide. It bundles your team's email, calendar, video meetings, document collaboration and cloud storage into a single subscription \u2014 hosted on Microsoft's globally distributed Azure infrastructure. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 41);
      \u0275\u0275text(99, " For Indian businesses, Microsoft 365 means your team gets ");
      \u0275\u0275elementStart(100, "b");
      \u0275\u0275text(101, "@yourcompany.com");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " professional email, the full Office desktop apps (Word, Excel, PowerPoint), Microsoft Teams for video meetings and chat, and 1 TB OneDrive storage per user \u2014 all from one subscription billed in INR with GST. XcellHost provisions the licences, migrates your mail, configures Teams and DNS, and supports it 24\xD77. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 42)(104, "div", 43)(105, "b");
      \u0275\u0275text(106, "345M+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "span");
      \u0275\u0275text(108, "Users on Microsoft 365 globally");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 43)(110, "b");
      \u0275\u0275text(111, "99.9%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "Uptime SLA guaranteed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 43)(115, "b");
      \u0275\u0275text(116, "1 TB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "OneDrive storage per user");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 43)(120, "b");
      \u0275\u0275text(121, "50 GB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Exchange mailbox per user");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 44);
      \u0275\u0275text(125, "The apps your team gets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 45)(127, "div", 46)(128, "span", 47);
      \u0275\u0275text(129, "O");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "b");
      \u0275\u0275text(131, "Outlook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, "Email & calendar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 46)(135, "span", 48);
      \u0275\u0275text(136, "T");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "b");
      \u0275\u0275text(138, "Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, "Meetings & chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 46)(142, "span", 49);
      \u0275\u0275text(143, "W");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "b");
      \u0275\u0275text(145, "Word");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 46)(149, "span", 50);
      \u0275\u0275text(150, "X");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "b");
      \u0275\u0275text(152, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "span");
      \u0275\u0275text(154, "Spreadsheets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 46)(156, "span", 51);
      \u0275\u0275text(157, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "b");
      \u0275\u0275text(159, "PowerPoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span");
      \u0275\u0275text(161, "Presentations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 46)(163, "span", 52);
      \u0275\u0275text(164, "\u2601");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "b");
      \u0275\u0275text(166, "OneDrive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "span");
      \u0275\u0275text(168, "1 TB storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 46)(170, "span", 53);
      \u0275\u0275text(171, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "b");
      \u0275\u0275text(173, "SharePoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span");
      \u0275\u0275text(175, "Team sites");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 46)(177, "span", 54);
      \u0275\u0275text(178, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "b");
      \u0275\u0275text(180, "Copilot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "span");
      \u0275\u0275text(182, "AI assistant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 55);
      \u0275\u0275text(184, "Microsoft 365 pricing in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p", 56);
      \u0275\u0275text(186, "Choose annual upfront or a flexible monthly term. Use each card's toggle to show INR prices with or without 18% GST.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 57)(188, "div", 58)(189, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_189_listener() {
        return ctx.setTeamsOption(true);
      });
      \u0275\u0275text(190, "With Microsoft Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_191_listener() {
        return ctx.setTeamsOption(false);
      });
      \u0275\u0275text(192, "Without Microsoft Teams");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 60)(194, "div", 61)(195, "span", 62);
      \u0275\u0275text(196, "Entry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "h4");
      \u0275\u0275conditionalCreate(198, Microsoft365SmbPage_Conditional_198_Template, 2, 0, "a", 63)(199, Microsoft365SmbPage_Conditional_199_Template, 2, 0, "a", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 65);
      \u0275\u0275text(201);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(202, Microsoft365SmbPage_Conditional_202_Template, 6, 4, "p", 66);
      \u0275\u0275elementStart(203, "div", 67)(204, "span");
      \u0275\u0275text(205, "Show prices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 68)(207, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_207_listener() {
        return ctx.setGstOption("basic", false);
      });
      \u0275\u0275text(208, "Excl. GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_209_listener() {
        return ctx.setGstOption("basic", true);
      });
      \u0275\u0275text(210, "Incl. GST");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 69);
      \u0275\u0275repeaterCreate(212, Microsoft365SmbPage_For_213_Template, 19, 14, "button", 70, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "ul")(215, "li");
      \u0275\u0275text(216, "Outlook email on @yourcompany.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "li");
      \u0275\u0275text(218, "1 TB OneDrive storage per user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "li");
      \u0275\u0275text(220, "Web & mobile Office apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "li");
      \u0275\u0275text(222, "50 GB Exchange mailbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "li");
      \u0275\u0275text(224);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 71)(226, "label", 72);
      \u0275\u0275text(227, "No. of users / licences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 73)(229, "button", 74);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_229_listener() {
        return ctx.adjustQuantity("basic", -1);
      });
      \u0275\u0275text(230, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "input", 75);
      \u0275\u0275listener("quantityChange", function Microsoft365SmbPage_Template_input_quantityChange_231_listener($event) {
        return ctx.adjustQuantity("basic", $event - ctx.quoteQuantities()["basic"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "button", 76);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_232_listener() {
        return ctx.adjustQuantity("basic", 1);
      });
      \u0275\u0275text(233, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "a", 77);
      \u0275\u0275text(235, "Buy Now \u2197");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(236, Microsoft365SmbPage_Conditional_236_Template, 2, 0, "span", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 79)(238, "span", 62);
      \u0275\u0275text(239, "Most Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "h4");
      \u0275\u0275conditionalCreate(241, Microsoft365SmbPage_Conditional_241_Template, 2, 0, "a", 80)(242, Microsoft365SmbPage_Conditional_242_Template, 2, 0, "a", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 65);
      \u0275\u0275text(244);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(245, Microsoft365SmbPage_Conditional_245_Template, 6, 4, "p", 66);
      \u0275\u0275elementStart(246, "div", 67)(247, "span");
      \u0275\u0275text(248, "Show prices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 82)(250, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_250_listener() {
        return ctx.setGstOption("standard", false);
      });
      \u0275\u0275text(251, "Excl. GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_252_listener() {
        return ctx.setGstOption("standard", true);
      });
      \u0275\u0275text(253, "Incl. GST");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 83);
      \u0275\u0275repeaterCreate(255, Microsoft365SmbPage_For_256_Template, 19, 14, "button", 70, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "ul")(258, "li");
      \u0275\u0275text(259, "Everything in Business Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "li");
      \u0275\u0275text(261, "Full desktop Word, Excel & PowerPoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "li");
      \u0275\u0275text(263, "Install on 5 PCs/Macs + 5 mobile devices");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(264, Microsoft365SmbPage_Conditional_264_Template, 2, 0, "li");
      \u0275\u0275elementStart(265, "li");
      \u0275\u0275text(266, "Bookings & Clipchamp included");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "div", 71)(268, "label", 72);
      \u0275\u0275text(269, "No. of users / licences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div", 84)(271, "button", 85);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_271_listener() {
        return ctx.adjustQuantity("standard", -1);
      });
      \u0275\u0275text(272, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "input", 86);
      \u0275\u0275listener("quantityChange", function Microsoft365SmbPage_Template_input_quantityChange_273_listener($event) {
        return ctx.adjustQuantity("standard", $event - ctx.quoteQuantities()["standard"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "button", 87);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_274_listener() {
        return ctx.adjustQuantity("standard", 1);
      });
      \u0275\u0275text(275, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "a", 77);
      \u0275\u0275text(277, "Buy Now \u2197");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(278, Microsoft365SmbPage_Conditional_278_Template, 2, 0, "span", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 61)(280, "span", 62);
      \u0275\u0275text(281, "Security Ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "h4");
      \u0275\u0275conditionalCreate(283, Microsoft365SmbPage_Conditional_283_Template, 2, 0, "a", 88)(284, Microsoft365SmbPage_Conditional_284_Template, 2, 0, "a", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 65);
      \u0275\u0275text(286, "Standard + enterprise security");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(287, Microsoft365SmbPage_Conditional_287_Template, 6, 4, "p", 66);
      \u0275\u0275elementStart(288, "div", 67)(289, "span");
      \u0275\u0275text(290, "Show prices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 90)(292, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_292_listener() {
        return ctx.setGstOption("premium", false);
      });
      \u0275\u0275text(293, "Excl. GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "button", 59);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_294_listener() {
        return ctx.setGstOption("premium", true);
      });
      \u0275\u0275text(295, "Incl. GST");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "div", 91);
      \u0275\u0275repeaterCreate(297, Microsoft365SmbPage_For_298_Template, 19, 14, "button", 70, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "ul")(300, "li");
      \u0275\u0275text(301, "Everything in Business Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "li");
      \u0275\u0275text(303, "Microsoft Defender for Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "li");
      \u0275\u0275text(305, "Intune device management (MDM)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "li");
      \u0275\u0275text(307, "Entra ID Premium \u2014 MFA & SSO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "li");
      \u0275\u0275text(309, "Microsoft Purview \u2014 DLP & compliance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 71)(311, "label", 72);
      \u0275\u0275text(312, "No. of users / licences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "div", 92)(314, "button", 93);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_314_listener() {
        return ctx.adjustQuantity("premium", -1);
      });
      \u0275\u0275text(315, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "input", 94);
      \u0275\u0275listener("quantityChange", function Microsoft365SmbPage_Template_input_quantityChange_316_listener($event) {
        return ctx.adjustQuantity("premium", $event - ctx.quoteQuantities()["premium"]);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "button", 95);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_317_listener() {
        return ctx.adjustQuantity("premium", 1);
      });
      \u0275\u0275text(318, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "a", 77);
      \u0275\u0275text(320, "Buy Now \u2197");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(321, Microsoft365SmbPage_Conditional_321_Template, 2, 0, "span", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "p", 96);
      \u0275\u0275text(323, "Buy Now opens the existing annual upfront checkout; select your user quantity again there. For other billing terms, contact our team. Monthly rates shown are indicative; your checkout or quote confirms the final amount.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div", 97)(325, "div", 98)(326, "div")(327, "b");
      \u0275\u0275text(328, "Apps for Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "span");
      \u0275\u0275text(330, "Desktop Office apps + 1 TB OneDrive \u2014 no email or Teams");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "div", 99);
      \u0275\u0275text(332, "\u20B9685");
      \u0275\u0275elementStart(333, "em");
      \u0275\u0275text(334, "/user/mo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "div", 98)(336, "div")(337, "b");
      \u0275\u0275text(338, "Teams Essentials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "span");
      \u0275\u0275text(340, "Standalone Microsoft Teams \u2014 meetings, chat & file collaboration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 99);
      \u0275\u0275text(342, "\u20B9115");
      \u0275\u0275elementStart(343, "em");
      \u0275\u0275text(344, "/user/mo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(345, "div", 100)(346, "div")(347, "b");
      \u0275\u0275text(348, "Microsoft 365 + Copilot AI bundles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "span");
      \u0275\u0275text(350, "Add Copilot to any Business plan \u2014 GPT-powered AI across Word, Excel, Teams and Outlook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "a", 101);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_351_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(352, "Ask about Copilot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "div", 100)(354, "div")(355, "b");
      \u0275\u0275text(356, "Nonprofit & education pricing available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "span");
      \u0275\u0275text(358, "Business Basic free for up to 300 users \xB7 Standard \u20B9250/user/mo \xB7 Premium \u20B9460/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "a", 101);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_359_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(360, "Check eligibility \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 44);
      \u0275\u0275text(362, "Add-on licences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p", 102);
      \u0275\u0275text(364, "Add to any Microsoft 365 Business or Enterprise plan. All prices per user per month, annual billing.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "div", 103)(366, "div", 104)(367, "b");
      \u0275\u0275text(368, "Microsoft 365 Copilot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "span");
      \u0275\u0275text(370, "\u20B91,496");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "em");
      \u0275\u0275text(372, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div", 104)(374, "b");
      \u0275\u0275text(375, "Teams Phone Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "span");
      \u0275\u0275text(377, "\u20B9830");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "em");
      \u0275\u0275text(379, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "div", 104)(381, "b");
      \u0275\u0275text(382, "Defender for Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "span");
      \u0275\u0275text(384, "\u20B9250");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "em");
      \u0275\u0275text(386, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(387, "div", 104)(388, "b");
      \u0275\u0275text(389, "Microsoft Purview Suite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "span");
      \u0275\u0275text(391, "\u20B9830");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "em");
      \u0275\u0275text(393, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "div", 104)(395, "b");
      \u0275\u0275text(396, "Microsoft Defender Suite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "span");
      \u0275\u0275text(398, "\u20B9830");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "em");
      \u0275\u0275text(400, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 104)(402, "b");
      \u0275\u0275text(403, "Planner Plan 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "span");
      \u0275\u0275text(405, "\u20B9830");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "em");
      \u0275\u0275text(407, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "div", 104)(409, "b");
      \u0275\u0275text(410, "Visio Plan 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "span");
      \u0275\u0275text(412, "\u20B9415");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "em");
      \u0275\u0275text(414, "/user/mo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "div", 104)(416, "b");
      \u0275\u0275text(417, "Clipchamp Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "span");
      \u0275\u0275text(419, "\u20B9250");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "em");
      \u0275\u0275text(421, "/user/mo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(422, "p", 105);
      \u0275\u0275text(423, "\u{1F4B3} All prices per user/month, annual commitment, approximate INR excluding GST. Pay online via UPI \xB7 Cards \xB7 NetBanking. Contact XcellHost for exact pricing, volume discounts and multi-year deals.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "div", 106);
      \u0275\u0275text(425, "Everything in Microsoft 365");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 107);
      \u0275\u0275text(427, "Email, meetings, collaboration, storage, security and AI \u2014 one integrated platform built for modern businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "div", 108)(429, "div", 109)(430, "span", 110);
      \u0275\u0275text(431, "O");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "div")(433, "p")(434, "b");
      \u0275\u0275text(435, "Outlook & Exchange Online");
      \u0275\u0275elementEnd();
      \u0275\u0275text(436, "Professional email on your domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "ul")(438, "li");
      \u0275\u0275text(439, "50 GB+ mailbox on @yourcompany.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "li");
      \u0275\u0275text(441, "Shared calendar, contacts and distribution lists");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "li");
      \u0275\u0275text(443, "IMAP / ActiveSync / Outlook desktop and mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "li");
      \u0275\u0275text(445, "Anti-spam and anti-phishing built in");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(446, "div", 109)(447, "span", 111);
      \u0275\u0275text(448, "T");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "div")(450, "p")(451, "b");
      \u0275\u0275text(452, "Microsoft Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275text(453, "Meetings, channels and real-time collaboration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "ul")(455, "li");
      \u0275\u0275text(456, "HD video meetings \u2014 up to 1,000 participants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "li");
      \u0275\u0275text(458, "Persistent channels, chat and shared file spaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "li");
      \u0275\u0275text(460, "Included in every Microsoft 365 Business plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "li");
      \u0275\u0275text(462, "Webinars and recordings on Standard and above");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(463, "div", 109)(464, "span", 112);
      \u0275\u0275text(465, "W");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "div")(467, "p")(468, "b");
      \u0275\u0275text(469, "Word, Excel & PowerPoint");
      \u0275\u0275elementEnd();
      \u0275\u0275text(470, "Full desktop apps \u2014 PC, Mac and mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "ul")(472, "li");
      \u0275\u0275text(473, "Install on 5 PCs/Macs + 5 tablets per user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "li");
      \u0275\u0275text(475, "Real-time co-authoring across all documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "li");
      \u0275\u0275text(477, "Works offline, syncs when you reconnect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "li");
      \u0275\u0275text(479, "Available in Business Standard and Premium");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(480, "div", 109)(481, "span", 113);
      \u0275\u0275text(482, "\u2601");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "div")(484, "p")(485, "b");
      \u0275\u0275text(486, "OneDrive & SharePoint");
      \u0275\u0275elementEnd();
      \u0275\u0275text(487, "1 TB storage + team document sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "ul")(489, "li");
      \u0275\u0275text(490, "1 TB OneDrive per user with desktop sync");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "li");
      \u0275\u0275text(492, "SharePoint team sites for every department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "li");
      \u0275\u0275text(494, "Version history, permissions and DLP controls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "li");
      \u0275\u0275text(496, "External sharing with expiry and access policies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(497, "div", 109)(498, "span", 114);
      \u0275\u0275text(499, "\u{1F6E1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "div")(501, "p")(502, "b");
      \u0275\u0275text(503, "Defender & Security");
      \u0275\u0275elementEnd();
      \u0275\u0275text(504, "Enterprise-grade security across every device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "ul")(506, "li");
      \u0275\u0275text(507, "Defender for Business \u2014 endpoint protection (Premium)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "li");
      \u0275\u0275text(509, "Intune MDM + Entra ID Premium MFA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "li");
      \u0275\u0275text(511, "Microsoft Purview \u2014 DLP and eDiscovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "li");
      \u0275\u0275text(513, "Conditional access and device compliance policies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(514, "div", 109)(515, "span", 115);
      \u0275\u0275text(516, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "div")(518, "p")(519, "b");
      \u0275\u0275text(520, "Microsoft 365 Copilot");
      \u0275\u0275elementEnd();
      \u0275\u0275text(521, "AI built into every app you already use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "ul")(523, "li");
      \u0275\u0275text(524, "Copilot in Word, Excel, Teams and Outlook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "li");
      \u0275\u0275text(526, "Meeting summaries, email drafts, data analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "li");
      \u0275\u0275text(528, "Grounded in your own organisational data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "li");
      \u0275\u0275text(530, "Runs privately on Microsoft Azure");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(531, "div", 44);
      \u0275\u0275text(532, "Benefits for your business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "div", 116)(534, "article", 117)(535, "span", 118);
      \u0275\u0275text(536, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "p")(538, "b");
      \u0275\u0275text(539, "Lower cost of ownership");
      \u0275\u0275elementEnd();
      \u0275\u0275text(540, "No Exchange server, no CALs, no refresh cycles \u2014 one predictable per-user price in INR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "article", 117)(542, "span", 118);
      \u0275\u0275text(543, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "p")(545, "b");
      \u0275\u0275text(546, "Work from anywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275text(547, "Desktop, web and mobile keep your team productive from office, home or site");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "article", 117)(549, "span", 118);
      \u0275\u0275text(550, "\u{1F6E1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "p")(552, "b");
      \u0275\u0275text(553, "Security that ships switched on");
      \u0275\u0275elementEnd();
      \u0275\u0275text(554, "MFA, Defender, Intune and Purview configured to policy, not left as defaults");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "article", 117)(556, "span", 118);
      \u0275\u0275text(557, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "p")(559, "b");
      \u0275\u0275text(560, "Scale on demand");
      \u0275\u0275elementEnd();
      \u0275\u0275text(561, "Add users, storage or Copilot seats the day you need them \u2014 not next quarter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(562, "div", 44);
      \u0275\u0275text(563, "Microsoft 365 Copilot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "div", 119)(565, "div")(566, "div", 120);
      \u0275\u0275text(567, "AI Assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "h3");
      \u0275\u0275text(569, "Your AI assistant \u2014 built into every Microsoft 365 app");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "p");
      \u0275\u0275text(571, " Microsoft 365 Copilot brings large-language-model AI directly into the apps your team already uses. Copilot can draft documents in Word, analyse data in Excel, summarise meetings in Teams and write email responses in Outlook \u2014 all grounded in your organisation's own data, with enterprise-grade privacy on Azure. XcellHost handles licensing, tenant readiness and rollout. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "div", 121)(573, "span");
      \u0275\u0275text(574, "Word \u2014 draft, rewrite, summarise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "span");
      \u0275\u0275text(576, "Teams \u2014 meeting notes & actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "span");
      \u0275\u0275text(578, "Outlook \u2014 drafts & thread summaries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "span");
      \u0275\u0275text(580, "Excel \u2014 analysis & formulas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "span");
      \u0275\u0275text(582, "OneDrive \u2014 intelligent file search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "span");
      \u0275\u0275text(584, "Enterprise privacy on Azure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(585, "div", 122)(586, "a", 101);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_586_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(587, "Ask About Copilot Licensing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "a", 123);
      \u0275\u0275text(589, "See Copilot pricing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(590, "div", 124)(591, "span", 125);
      \u0275\u0275element(592, "img", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "b");
      \u0275\u0275text(594, "AI-powered.");
      \u0275\u0275element(595, "br");
      \u0275\u0275text(596, "Privacy-first.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "span");
      \u0275\u0275text(598, "Runs on Azure");
      \u0275\u0275element(599, "br");
      \u0275\u0275text(600, "Your data stays yours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(601, "section", 127)(602, "div", 128)(603, "h2", 129);
      \u0275\u0275text(604, "We are Acronis Certified, delivering trusted and certified solutions for reliable data protection and cybersecurity.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "p");
      \u0275\u0275text(606, " Protect Exchange Online, OneDrive, SharePoint and Teams data from accidental deletion, ransomware and retention gaps. Acronis Microsoft 365 Backup provides automated cloud backups, flexible recovery and central visibility across your tenant. Our certified specialists help configure protection policies, retention and recovery workflows so your collaboration data remains available whenever your business needs it. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(607, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275element(608, "img", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "div", 44);
      \u0275\u0275text(610, "Who uses Microsoft 365 in India?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "div", 132)(612, "div", 133)(613, "span", 134);
      \u0275\u0275text(614, "\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "b");
      \u0275\u0275text(616, "CA & Tax Firms");
      \u0275\u0275elementEnd();
      \u0275\u0275text(617, "eDiscovery & compliance archiving");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "div", 133)(619, "span", 134);
      \u0275\u0275text(620, "\u2696");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "b");
      \u0275\u0275text(622, "Legal & Law Firms");
      \u0275\u0275elementEnd();
      \u0275\u0275text(623, "Secure document management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "div", 133)(625, "span", 134);
      \u0275\u0275text(626, "\u{1F3E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "b");
      \u0275\u0275text(628, "Healthcare");
      \u0275\u0275elementEnd();
      \u0275\u0275text(629, "Compliant collaboration platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(630, "div", 133)(631, "span", 134);
      \u0275\u0275text(632, "\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "b");
      \u0275\u0275text(634, "IT & Software");
      \u0275\u0275elementEnd();
      \u0275\u0275text(635, "DevOps integration with M365");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "div", 133)(637, "span", 134);
      \u0275\u0275text(638, "\u{1F3EB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "b");
      \u0275\u0275text(640, "Schools & Colleges");
      \u0275\u0275elementEnd();
      \u0275\u0275text(641, "Microsoft 365 Education plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "div", 133)(643, "span", 134);
      \u0275\u0275text(644, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "b");
      \u0275\u0275text(646, "SMBs & Startups");
      \u0275\u0275elementEnd();
      \u0275\u0275text(647, "All apps from \u20B9145/user/month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "div", 133)(649, "span", 134);
      \u0275\u0275text(650, "\u{1F3ED}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "b");
      \u0275\u0275text(652, "Manufacturing");
      \u0275\u0275elementEnd();
      \u0275\u0275text(653, "Teams for shop-floor comms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(654, "div", 133)(655, "span", 134);
      \u0275\u0275text(656, "\u{1F6CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "b");
      \u0275\u0275text(658, "Retail & E-commerce");
      \u0275\u0275elementEnd();
      \u0275\u0275text(659, "Shared inboxes for support teams");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "div", 135);
      \u0275\u0275text(661, "Security & compliance \u2014 Microsoft 365");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "p", 136);
      \u0275\u0275text(663, " The threat model for Microsoft 365 is identity-first \u2014 token theft, business email compromise, consent phishing and unmanaged devices. The controls are chosen to match it: MFA and conditional access before cutover, Defender on every endpoint, and retention set to the policy your auditors actually asked for. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "div", 137)(665, "div", 138)(666, "span");
      \u0275\u0275text(667, "At rest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "b");
      \u0275\u0275text(669, "BitLocker + service encryption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "div", 138)(671, "span");
      \u0275\u0275text(672, "In transit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(673, "b");
      \u0275\u0275text(674, "TLS 1.2+ enforced");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "div", 138)(676, "span");
      \u0275\u0275text(677, "Identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "b");
      \u0275\u0275text(679, "Entra ID MFA + conditional access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "div", 138)(681, "span");
      \u0275\u0275text(682, "Domain authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "b");
      \u0275\u0275text(684, "SPF \xB7 DKIM \xB7 DMARC by XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(685, "div", 138)(686, "span");
      \u0275\u0275text(687, "Endpoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "b");
      \u0275\u0275text(689, "Defender for Business + Intune");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(690, "div", 138)(691, "span");
      \u0275\u0275text(692, "Data protection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(693, "b");
      \u0275\u0275text(694, "Purview DLP & sensitivity labels");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "div", 138)(696, "span");
      \u0275\u0275text(697, "Legal hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "b");
      \u0275\u0275text(699, "eDiscovery & retention policies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "div", 138)(701, "span");
      \u0275\u0275text(702, "Incident response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(703, "b");
      \u0275\u0275text(704, "Named engineer, 15-min ack");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(705, "p", 139);
      \u0275\u0275text(706, "XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 Indian Tier-4 datacenters \xB7 DPDPA and RBI aligned \xB7 24\xD77 NOC and SOC.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "div", 140);
      \u0275\u0275text(708, "Why buy Microsoft 365 from XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "p", 107);
      \u0275\u0275text(710, "Any reseller sells a licence. XcellHost delivers the full deployment \u2014 configured, migrated and running on day one.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(711, "div", 141)(712, "div", 142)(713, "span", 143);
      \u0275\u0275text(714, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "b");
      \u0275\u0275text(716, "Authorised Microsoft Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(717, "span");
      \u0275\u0275text(718, "Genuine Microsoft 365 licences with a direct Microsoft escalation path and partner-level support.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(719, "div", 142)(720, "span", 143);
      \u0275\u0275text(721, "\u{1F504}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "b");
      \u0275\u0275text(723, "Free Email Migration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "span");
      \u0275\u0275text(725, "From Google Workspace, Zoho Mail, cPanel, Rediffmail or on-premises Exchange \u2014 zero data loss.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(726, "div", 142)(727, "span", 143);
      \u0275\u0275text(728, "\u{1F9FE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(729, "b");
      \u0275\u0275text(730, "INR Billing with GST Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(731, "span");
      \u0275\u0275text(732, "Proper GST documentation on every purchase, so your business can claim input tax credit.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(733, "div", 142)(734, "span", 143);
      \u0275\u0275text(735, "\u23F0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(736, "b");
      \u0275\u0275text(737, "Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "span");
      \u0275\u0275text(739, "27 years running production cloud and email for Indian businesses.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(740, "div", 142)(741, "span", 143);
      \u0275\u0275text(742, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "b");
      \u0275\u0275text(744, "24\xD77 Managed Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "span");
      \u0275\u0275text(746, "Phone, WhatsApp and ticket \u2014 in English and Hindi, by real engineers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(747, "div", 142)(748, "span", 143);
      \u0275\u0275text(749, "\u2699");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "b");
      \u0275\u0275text(751, "Full Technical Deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "span");
      \u0275\u0275text(753, "Tenant setup, DNS, SPF/DKIM/DMARC, Teams, Intune policies \u2014 all handled by us.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(754, "div", 144)(755, "div", 145);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(756, "svg", 146);
      \u0275\u0275element(757, "rect", 147)(758, "rect", 148)(759, "rect", 149)(760, "rect", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(761, "small");
      \u0275\u0275text(762, "Microsoft Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(763, "div", 151)(764, "b");
      \u0275\u0275text(765, "Authorised Microsoft Partner in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "span");
      \u0275\u0275text(767, "Genuine licences \xB7 Direct Microsoft escalation path \xB7 Quality-certified deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(768, "em");
      \u0275\u0275text(769, "ISO 27001 \xB7 ISO 20000-1 \xB7 10,000+ customers served since 1999");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(770, "div", 152);
      \u0275\u0275text(771, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(772, "div", 153)(773, "div", 154)(774, "div", 155);
      \u0275\u0275text(775, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(776, "div", 156);
      \u0275\u0275text(777, "RM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(778, "div", 157);
      \u0275\u0275text(779, "Rakesh Choudhary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(780, "div", 158);
      \u0275\u0275text(781, "IT Manager, Trading Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "div", 159);
      \u0275\u0275text(783, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "p");
      \u0275\u0275text(785, "Moving our business email and Office applications to Microsoft 365 made things much easier to manage. Our team can work on documents from different locations, and everything stays connected through one platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "div", 154)(787, "div", 155);
      \u0275\u0275text(788, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "div", 156);
      \u0275\u0275text(790, "MJ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "div", 157);
      \u0275\u0275text(792, "Meenal Joshi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "div", 158);
      \u0275\u0275text(794, "HR & Operations Manager, Manufacturing Firm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "div", 159);
      \u0275\u0275text(796, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "p");
      \u0275\u0275text(798, "Teams has made communication between our teams much smoother. We can quickly share files, schedule meetings, and collaborate without switching between different tools throughout the day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(799, "div", 154)(800, "div", 155);
      \u0275\u0275text(801, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "div", 156);
      \u0275\u0275text(803, "SM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(804, "div", 157);
      \u0275\u0275text(805, "Saurabh Mehta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(806, "div", 158);
      \u0275\u0275text(807, "Managing Director, Consulting Firm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(808, "div", 159);
      \u0275\u0275text(809, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "p");
      \u0275\u0275text(811, "We wanted a reliable setup for email, documents, and collaboration as our team grew. Microsoft 365 gave us the flexibility we needed, while making user and account management much more straightforward.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(812, "div", 160);
      \u0275\u0275text(813, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "div", 161)(815, "div", 162)(816, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_816_listener() {
        return ctx.toggleFaq(0);
      });
      \u0275\u0275text(817, "What is Microsoft 365?");
      \u0275\u0275elementStart(818, "span", 164);
      \u0275\u0275text(819, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "div", 165)(821, "p");
      \u0275\u0275text(822, "Microsoft 365 (formerly Office 365) is Microsoft's cloud-based productivity suite for businesses. It includes Outlook email, Microsoft Teams, Word, Excel, PowerPoint, OneDrive (1 TB cloud storage) and SharePoint \u2014 all delivered as subscription services hosted on Microsoft's Azure infrastructure. Plans start at \u20B9145 per user per month (Business Basic) for web and mobile apps with Teams and Exchange email.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(823, "div", 162)(824, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_824_listener() {
        return ctx.toggleFaq(1);
      });
      \u0275\u0275text(825, "Is XcellHost an authorised Microsoft partner in India?");
      \u0275\u0275elementStart(826, "span", 164);
      \u0275\u0275text(827, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(828, "div", 165)(829, "p");
      \u0275\u0275text(830, "Yes. XcellHost is an authorised Microsoft partner in India. We provision genuine Microsoft 365 licences, handle end-to-end deployment including tenant and Teams setup, DNS configuration and email migration, and provide ongoing managed support \u2014 all billed in INR with a GST-compliant invoice.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(831, "div", 162)(832, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_832_listener() {
        return ctx.toggleFaq(2);
      });
      \u0275\u0275text(833, "What is included in Microsoft 365 Business Standard?");
      \u0275\u0275elementStart(834, "span", 164);
      \u0275\u0275text(835, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "div", 165)(837, "p");
      \u0275\u0275text(838, "Business Standard includes the full Office desktop apps \u2014 Word, Excel, PowerPoint and Outlook \u2014 plus Microsoft Teams, Exchange Online with a 50 GB mailbox, OneDrive (1 TB) and SharePoint. Desktop apps install on up to 5 PCs or Macs, 5 tablets and 5 mobile devices per user.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(839, "div", 162)(840, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_840_listener() {
        return ctx.toggleFaq(3);
      });
      \u0275\u0275text(841, "What is the difference between Basic, Standard and Premium?");
      \u0275\u0275elementStart(842, "span", 164);
      \u0275\u0275text(843, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(844, "div", 165)(845, "p");
      \u0275\u0275text(846, "Business Basic includes web and mobile apps only, plus Exchange email, Teams and OneDrive. Business Standard adds the full desktop apps you install on your PC or Mac. Business Premium adds advanced security: Microsoft Defender for Business, Intune mobile device management, Entra ID Premium P1 and Microsoft Purview compliance tools.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(847, "div", 162)(848, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_848_listener() {
        return ctx.toggleFaq(4);
      });
      \u0275\u0275text(849, "Can XcellHost migrate our existing email to Microsoft 365?");
      \u0275\u0275elementStart(850, "span", 164);
      \u0275\u0275text(851, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(852, "div", 165)(853, "p");
      \u0275\u0275text(854, "Yes. XcellHost handles complete email migration to Microsoft 365 from any source \u2014 including Google Workspace, Zoho Mail, cPanel hosting, Rediffmail and on-premises Exchange servers. Migration includes mailbox data, contacts, calendar events and shared mailboxes with zero data loss and minimal downtime.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(855, "div", 162)(856, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_856_listener() {
        return ctx.toggleFaq(5);
      });
      \u0275\u0275text(857, "What is Microsoft 365 Copilot?");
      \u0275\u0275elementStart(858, "span", 164);
      \u0275\u0275text(859, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(860, "div", 165)(861, "p");
      \u0275\u0275text(862, "Microsoft 365 Copilot is Microsoft's AI assistant integrated directly into M365 apps \u2014 Word, Excel, PowerPoint, Teams and Outlook. Copilot can draft documents, summarise meetings, analyse data in spreadsheets, generate emails and create presentations. It runs on Microsoft's enterprise-grade, privacy-compliant Azure infrastructure and is available as an add-on licence.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(863, "div", 162)(864, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_864_listener() {
        return ctx.toggleFaq(6);
      });
      \u0275\u0275text(865, "Does Microsoft 365 work without internet?");
      \u0275\u0275elementStart(866, "span", 164);
      \u0275\u0275text(867, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "div", 165)(869, "p");
      \u0275\u0275text(870, "Yes. Business Standard and Premium include full desktop apps \u2014 Word, Excel, PowerPoint and Outlook \u2014 that work offline on your PC or Mac. Files sync locally via OneDrive and remain accessible offline. Exchange and Teams need internet for live data, but cached email is available offline in Outlook desktop.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(871, "div", 162)(872, "button", 163);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_button_click_872_listener() {
        return ctx.toggleFaq(7);
      });
      \u0275\u0275text(873, "Do I get a GST invoice for Microsoft 365 in India?");
      \u0275\u0275elementStart(874, "span", 164);
      \u0275\u0275text(875, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(876, "div", 165)(877, "p");
      \u0275\u0275text(878, "Yes. As an authorised Microsoft partner in India, XcellHost provides a GST-compliant invoice for every Microsoft 365 purchase in INR, enabling your business to claim input tax credit on the subscription.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(879, "div", 166);
      \u0275\u0275element(880, "xh-insights-section", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(881, "div", 168)(882, "div", 169)(883, "h3");
      \u0275\u0275text(884, "Ready to start with Microsoft 365 SMB?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(885, "p");
      \u0275\u0275text(886, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(887, "div", 170)(888, "a", 101);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_888_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(889, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(890, "a", 123);
      \u0275\u0275text(891, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "a", 171);
      \u0275\u0275text(893, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "a", 172);
      \u0275\u0275listener("click", function Microsoft365SmbPage_Template_a_click_894_listener($event) {
        return ctx.requestPresentation($event);
      });
      \u0275\u0275text(895, "\u{1F4D6} Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "a", 173);
      \u0275\u0275text(897, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "a", 174);
      \u0275\u0275text(899, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(900, "a", 175);
      \u0275\u0275element(901, "img", 176);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(902, "div", 177)(903, "span");
      \u0275\u0275text(904, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(905, "span");
      \u0275\u0275text(906, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "span");
      \u0275\u0275text(908, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(909, "span");
      \u0275\u0275text(910, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(911, "span");
      \u0275\u0275text(912, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(91);
      \u0275\u0275property("links", ctx.sectionNavLinks);
      \u0275\u0275advance(98);
      \u0275\u0275classProp("active", ctx.includesTeams());
      \u0275\u0275attribute("aria-pressed", ctx.includesTeams());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", !ctx.includesTeams());
      \u0275\u0275attribute("aria-pressed", !ctx.includesTeams());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.includesTeams() ? 198 : 199);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Email, ", ctx.includesTeams() ? "Teams & " : "", "cloud apps");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.includesTeams() ? 202 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", !ctx.includesGst()["basic"]);
      \u0275\u0275attribute("aria-pressed", !ctx.includesGst()["basic"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.includesGst()["basic"]);
      \u0275\u0275attribute("aria-pressed", ctx.includesGst()["basic"]);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.billingOptions);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("SharePoint", ctx.includesTeams() ? " & Teams" : "", " included");
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.quoteQuantities()["basic"] <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("quantityValue", ctx.quoteQuantities()["basic"])("quantityMax", 300);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.quoteQuantities()["basic"] >= 300);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.checkoutUrl("basic"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.billingTerms()["basic"] !== "upfront" ? 236 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.includesTeams() ? 241 : 242);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Full desktop apps", ctx.includesTeams() ? " + Teams" : "");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.includesTeams() ? 245 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", !ctx.includesGst()["standard"]);
      \u0275\u0275attribute("aria-pressed", !ctx.includesGst()["standard"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.includesGst()["standard"]);
      \u0275\u0275attribute("aria-pressed", ctx.includesGst()["standard"]);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.billingOptions);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.includesTeams() ? 264 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.quoteQuantities()["standard"] <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("quantityValue", ctx.quoteQuantities()["standard"])("quantityMax", 300);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.quoteQuantities()["standard"] >= 300);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.checkoutUrl("standard"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.billingTerms()["standard"] !== "upfront" ? 278 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.includesTeams() ? 283 : 284);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.includesTeams() ? 287 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", !ctx.includesGst()["premium"]);
      \u0275\u0275attribute("aria-pressed", !ctx.includesGst()["premium"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.includesGst()["premium"]);
      \u0275\u0275attribute("aria-pressed", ctx.includesGst()["premium"]);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.billingOptions);
      \u0275\u0275advance(17);
      \u0275\u0275property("disabled", ctx.quoteQuantities()["premium"] <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("quantityValue", ctx.quoteQuantities()["premium"])("quantityMax", 300);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.quoteQuantities()["premium"] >= 300);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.checkoutUrl("premium"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.billingTerms()["premium"] !== "upfront" ? 321 : -1);
      \u0275\u0275advance(494);
      \u0275\u0275classProp("open", ctx.openFaq() === 0);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 2);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 3);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 4);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 5);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 6);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openFaq() === 7);
      \u0275\u0275advance(9);
      \u0275\u0275property("videos", ctx.insightVideos);
    }
  }, dependencies: [QuantityInputDirective, InsightsSectionComponent, SmbSectionNavComponent, RouterLink, DecimalPipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --ice:#F2F6FC;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --white:#FFF;\n  --ok:#2ECC71;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --ms-red:#F25022;\n  --ms-green:#7FBA00;\n  --ms-blue:#00A4EF;\n  --ms-yellow:#FFB900;\n  --ms-grey:#737373;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--body);\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.025em;\n  margin-bottom: 18px;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: clamp(25px, 3vw, 34px);\n  color: var(--navy);\n  letter-spacing: -.015em;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.microsoft-365-protection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(16px, 1.35vw, 18px);\n  line-height: 1.35;\n  margin-bottom: 14px;\n  text-wrap: balance;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: .15s;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  animation: _ngcontent-%COMP%_glow 2.8s ease-in-out infinite;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  border-color: var(--line);\n  color: var(--navy);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pp-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.pp-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.pp-cta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  column-gap: 20px;\n  row-gap: 24px;\n  padding: 32px 26px 32px 36px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      #0C3E8F);\n  border-radius: 16px;\n  color: #fff;\n}\n.pp-cta-copy[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n.pp-cta-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-family: var(--disp);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.6;\n}\n.pp-cta-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #CFE0FA;\n  font-size: 14.5px;\n  line-height: 1.6;\n}\n.pp-cta[_ngcontent-%COMP%]   .pp-ctabtns[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n  justify-content: flex-start;\n  align-items: center;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  white-space: nowrap;\n}\n.pp-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n  position: static;\n  grid-column: 2;\n  grid-row: 1 / 3;\n  align-self: center;\n  width: 104px;\n  height: 104px;\n  margin: 0;\n  transform: none;\n}\n.pp-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  animation: none;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  border-color: #fff;\n}\n.btn-wa[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 12.5px;\n}\n.utility[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%]:hover {\n  color: #8ff0b0 !important;\n}\n.promo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n}\n.promo[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.xh-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid #E7EBF3;\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n}\n.xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 74px;\n  width: auto;\n  display: block;\n}\n.xh-main-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n}\n.xh-menu-link[_ngcontent-%COMP%] {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 30px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  transition: color .15s;\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover, \n.xh-menu-link.is-active[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.xh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .15s;\n}\n.xh-icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.xh-mobile-toggle[_ngcontent-%COMP%] {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.xh-mobile-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\n.ppage[_ngcontent-%COMP%] {\n  --ms-red:#F25022;\n  --ms-green:#7FBA00;\n  --ms-blue:#00A4EF;\n  --ms-yellow:#FFB900;\n  --ms-grey:#737373;\n  background: #fff;\n}\n.pp-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0E3A78 0%,\n      var(--navy) 60%);\n  color: #fff;\n  padding: 56px 0;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n}\n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n}\n.pph-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .1) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  animation: _ngcontent-%COMP%_pphgrid 20s linear infinite;\n}\n.pph-aur[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: .55;\n  z-index: 1;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n.pph-a1[_ngcontent-%COMP%] {\n  width: 520px;\n  height: 520px;\n  left: -8%;\n  top: -30%;\n  background:\n    radial-gradient(\n      circle,\n      #1565D8,\n      transparent 65%);\n  animation: _ngcontent-%COMP%_aflow1 17s ease-in-out infinite alternate;\n}\n.pph-a2[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  right: -6%;\n  top: -10%;\n  background:\n    radial-gradient(\n      circle,\n      #0C4EA8,\n      transparent 65%);\n  opacity: .4;\n  animation: _ngcontent-%COMP%_aflow2 21s ease-in-out infinite alternate;\n}\n.pph-a3[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  left: 40%;\n  bottom: -40%;\n  background:\n    radial-gradient(\n      circle,\n      #7C3AED,\n      transparent 62%);\n  opacity: .28;\n  animation: _ngcontent-%COMP%_aflow3 19s ease-in-out infinite alternate;\n}\n.pph-scan[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 34%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(127, 178, 255, .14),\n      transparent);\n  animation: _ngcontent-%COMP%_pphscan 7s ease-in-out infinite;\n}\n.pph-map[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  overflow: hidden;\n}\n.pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  width: 520px;\n  height: 520px;\n  transform: translate(-50%, -50%);\n  border: 1px dashed rgba(143, 184, 255, .22);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_wmSpin 60s linear infinite;\n}\n.pph-map[_ngcontent-%COMP%]   .wm-ring.r2[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  animation-duration: 42s;\n  animation-direction: reverse;\n  border-color: rgba(143, 184, 255, .16);\n}\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: .3;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background: #1565D8;\n  top: -90px;\n  left: -70px;\n  animation: _ngcontent-%COMP%_drift 14s ease-in-out infinite;\n}\n.pph-scene[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 4%;\n  bottom: 0;\n  width: 48%;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n}\n.pph-illus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 0;\n}\n.pph-illus-img[_ngcontent-%COMP%] {\n  width: 88%;\n  max-width: 520px;\n  max-height: 300px;\n  object-fit: contain;\n  filter: drop-shadow(0 18px 40px rgba(4, 30, 66, .35));\n  animation: _ngcontent-%COMP%_illusfloat 5.5s ease-in-out infinite;\n}\n.pph-powered-image[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 5px 16px rgba(0, 20, 55, .18);\n}\n.pph-powered-image[_ngcontent-%COMP%]   .pw-lbl[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #8FA2BD;\n}\n.pph-powered-image[_ngcontent-%COMP%]   .pw-sub[_ngcontent-%COMP%] {\n  font: 600 10px var(--body);\n  color: #51607A;\n  letter-spacing: .04em;\n}\n.ms-lockup[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n}\n.pph-powered-image[_ngcontent-%COMP%]   .ms-lockup[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex: none;\n  display: block;\n  width: 26px;\n  height: 26px;\n  max-height: none;\n}\n.ms-word[_ngcontent-%COMP%] {\n  font: 600 21px/1 "Segoe UI", var(--body);\n  color: var(--ms-grey);\n  letter-spacing: -.01em;\n}\n.ms-word[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2b2b2b;\n}\n.pp-crumb[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 14px;\n  animation: _ngcontent-%COMP%_pprise .5s cubic-bezier(.19, 1, .22, 1) .12s both;\n}\n.pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  margin: 0 0 14px;\n  color: #fff;\n  font: 800 clamp(22px, 3.8vw, 42px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .2s both;\n}\n.pp-title-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  flex: none;\n  font: inherit;\n  line-height: 1;\n  letter-spacing: 0;\n}\n.pp-brand-xcell[_ngcontent-%COMP%] {\n  color: #E60012;\n}\n.pp-brand-family[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pp-title-divider[_ngcontent-%COMP%] {\n  margin-left: .18em;\n  color: #fff;\n  opacity: .55;\n}\n.pp-title-name[_ngcontent-%COMP%] {\n  margin-left: .18em;\n}\n.pp-tagline[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #c7d5ec;\n  max-width: 60ch;\n  margin-bottom: 10px;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .3s both;\n}\n.pp-tagline-support[_ngcontent-%COMP%] {\n  width: fit-content;\n  margin: 0 0 16px;\n  color: #67B7FF;\n  font: 700 clamp(18px, 1.7vw, 23px)/1.35 var(--body);\n  text-wrap: balance;\n}\n.pp-typewriter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  margin: 0 0 10px;\n  color: #69B6FF;\n  font: 600 clamp(17px, 1.4vw, 22px)/1.35 var(--body);\n}\n.pp-typewriter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 1.15em;\n  margin-left: 4px;\n  background: currentColor;\n  animation: _ngcontent-%COMP%_ppcursor .75s steps(1, end) infinite;\n}\n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-crumb[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline-support[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-typewriter[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-chips[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-hero-grid[_ngcontent-%COMP%] {\n  max-width: 58%;\n}\n.pp-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 36px;\n  align-items: start;\n}\n.pp-hpoints[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  gap: 10px 32px;\n  width: fit-content;\n  max-width: 100%;\n  margin: 8px 0 18px;\n}\n.pp-hpoint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 14px;\n  color: #cfe0f7;\n}\n.pp-hpoint[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-hpoint[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.pp-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.pp-chip[_ngcontent-%COMP%] {\n  font: 600 12px var(--mono);\n  background: rgba(255, 255, 255, .1);\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 99px;\n  padding: 7px 16px;\n}\n.pp-chip.price[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .5);\n  color: #ffd9ac;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .46s both;\n}\n.pp-trust[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body[_ngcontent-%COMP%] {\n  padding: 16px 0 35px 0;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 19px 0 16px 0;\n}\n.pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.pp-ov[_ngcontent-%COMP%] {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.m365-overview-copy[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.pp-ov[_ngcontent-%COMP%]    + .pp-ov[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.pp-ov[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.pp-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-stat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: var(--ice);\n  text-align: center;\n}\n.pp-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.pp-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-apps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 26px;\n}\n.pp-app[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 16px 10px;\n  background: #fff;\n  text-align: center;\n  transition: .18s;\n}\n.pp-app[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.pp-app[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  margin: 0 auto 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 800 18px var(--disp);\n  color: #fff;\n  letter-spacing: -.02em;\n}\n.pp-app[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--navy);\n  font-weight: 600;\n  line-height: 1.3;\n}\n.pp-app[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.m365-video-grid[_ngcontent-%COMP%] {\n  width: min(1200px, 100%);\n  gap: 34px;\n  margin: 0 auto 38px;\n}\n.m365-video-grid[_ngcontent-%COMP%]   .pv-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 16px 0 18px;\n}\n.m365-video-grid[_ngcontent-%COMP%]   .pv-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border: 1px solid #cfe0f5;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #f4f8ff);\n  box-shadow: 0 10px 24px rgba(7, 45, 96, .08);\n  color: var(--navy);\n  font: 800 13px/1 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.m365-video-grid[_ngcontent-%COMP%]   .pv-frame[_ngcontent-%COMP%] {\n  border: 4px solid #fff;\n  border-radius: 7px;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, .45);\n}\n.pp-vids[_ngcontent-%COMP%] {\n  width: min(900px, 100%);\n  margin: 0 0 12px;\n}\n.pv-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.pv-tab[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--slate);\n  font: 600 13.5px var(--body);\n  padding: 9px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .2s;\n}\n.pv-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pv-tab.active[_ngcontent-%COMP%] {\n  background: var(--navy);\n  border-color: var(--navy);\n  color: #fff;\n}\n.pv-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0E3A78 60%,\n      #0C4EA8);\n  position: relative;\n  box-shadow: 0 20px 50px rgba(4, 30, 66, .25);\n}\n.pv-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.pv-poster[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: transparent;\n}\n.pv-poster[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(4, 30, 66, .35),\n      rgba(4, 30, 66, .6));\n}\n.pv-play[_ngcontent-%COMP%] {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .95);\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding-left: 5px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .35);\n  transition: transform .2s;\n}\n.pv-poster[_ngcontent-%COMP%]:hover   .pv-play[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n  background: #fff;\n}\n.pv-plabel[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  font: 600 14px var(--body);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, .5);\n}\n.pv-note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 10px;\n}\n.pp-toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n.pp-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  padding: 4px;\n  background: var(--ice);\n}\n.pp-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font: 700 13px var(--body);\n  color: var(--slate);\n  padding: 9px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition:\n    background .18s,\n    color .18s,\n    box-shadow .18s;\n}\n.pp-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--blue);\n}\n.pp-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  box-shadow: 0 3px 8px rgba(21, 101, 216, .22);\n}\n.pp-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: 2px;\n}\n.pp-plans[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.ppl[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 24px 20px;\n  background: #fff;\n  text-align: center;\n  position: relative;\n  transition:\n    transform .3s,\n    box-shadow .3s,\n    border-color .3s;\n  display: flex;\n  flex-direction: column;\n}\n.ppl[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 36px rgba(4, 30, 66, .1);\n}\n.ppl.hot[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n}\n.ppl[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -11px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--blue);\n  color: #fff;\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.ppl.hot[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: var(--orange);\n}\n.ppl[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.ppl[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.ppl[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  color: #128A42;\n  background: rgba(29, 168, 85, .1);\n  border-radius: 99px;\n  padding: 3px 10px;\n  display: inline-block;\n  margin-bottom: 14px;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: left;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--ok);\n  font-weight: 700;\n  font-size: 11px;\n}\n.ppl[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ppl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.quote-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  border: 1px solid #bfd3f3;\n  border-radius: 7px;\n  background: #f8fbff;\n  overflow: hidden;\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 100%;\n  flex: none;\n  border: 0;\n  background: transparent;\n  color: #075dbd;\n  font: 500 20px/1 var(--body);\n  cursor: pointer;\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #bfd3f3;\n  color: #91a4bd;\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-left: 1px solid #bfd3f3;\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #edf4ff;\n  color: var(--blue);\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: -3px;\n}\n.quote-quantity[_ngcontent-%COMP%]   :is(output[_ngcontent-%COMP%], input[xhQuantityInput][_ngcontent-%COMP%]) {\n  flex: 1;\n  min-width: 54px;\n  color: #071c39;\n  font: 500 16px var(--body);\n  text-align: center;\n}\n.billing-choices[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  margin: 0 0 16px;\n  text-align: left;\n}\n.billing-gst-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 0 0 12px;\n  text-align: left;\n  font: 700 10px/1.5 var(--mono);\n  color: var(--slate);\n}\n.billing-gst-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  padding: 3px;\n  border: 1px solid #d3def0;\n  border-radius: 8px;\n  background: #f1f5fa;\n}\n.billing-gst-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 6px;\n  padding: 6px 8px;\n  background: transparent;\n  color: #506079;\n  cursor: pointer;\n  font: 700 10px/1.4 var(--mono);\n  white-space: nowrap;\n}\n.billing-gst-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #041e42;\n  color: #fff;\n}\n.billing-gst-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 2px;\n}\n.billing-tax-note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-choice[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d3def0;\n  border-radius: 9px;\n  background: #fff;\n  padding: 12px;\n  text-align: left;\n  color: #506079;\n  cursor: pointer;\n  transition:\n    border-color .18s,\n    box-shadow .18s,\n    background .18s;\n  font: inherit;\n}\n.billing-choice.upfront[_ngcontent-%COMP%] {\n  background: #f2fbf7;\n  color: #008362;\n}\n.billing-choice.chosen[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 0 0 1px currentColor;\n}\n.billing-choice[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px #041e420d;\n}\n.billing-choice[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 2px;\n}\n.billing-choice-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font: 700 10px/1.5 var(--mono);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.billing-indicator[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 17px;\n  height: 17px;\n  border: 1px solid currentColor;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.billing-list-price[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--slate);\n  text-align: left;\n  font: 500 11px/1.5 var(--mono);\n}\n.billing-list-price[_ngcontent-%COMP%]   s[_ngcontent-%COMP%] {\n  color: #e60012;\n}\n.business-basic-detail-link[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n  text-decoration: underline;\n}\n.business-basic-detail-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 4px;\n  border-radius: 3px;\n}\n.billing-choice-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.billing-discount-badge[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  border-radius: 3px;\n  background: #008362;\n  color: #fff;\n  font: 700 9px/1.2 var(--mono);\n  white-space: nowrap;\n}\n.billing-unit-price[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-unit-price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.billing-annual-price[_ngcontent-%COMP%], \n.billing-note[_ngcontent-%COMP%] {\n  display: block;\n  font: 400 10px/1.6 var(--mono);\n}\n.billing-seat-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  border-top: 1px solid #d3def0;\n  padding-top: 9px;\n  margin-top: 10px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-seat-total[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  flex-shrink: 0;\n}\n.billing-seat-amount[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 2px 9px;\n  text-align: right;\n}\n.billing-seat-amount[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.quantity-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--navy);\n}\n.checkout-term-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 1.5;\n  color: var(--slate);\n}\n.quote-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n.billing-footnote[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--slate);\n  margin: 14px 0;\n}\n.pp-plans2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n  margin-top: 14px;\n}\n.ppl2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 22px;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.ppl2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n}\n.ppl2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.ppl2[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font: 700 22px var(--mono);\n  color: var(--navy);\n  white-space: nowrap;\n}\n.ppl2[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  font: 500 10.5px var(--mono);\n  color: var(--slate);\n  font-style: normal;\n}\n.pp-planstrip[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  border: 1.5px dashed var(--line);\n  border-radius: 14px;\n  padding: 20px 24px;\n  background: var(--ice);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.pp-planstrip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n}\n.pp-planstrip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-tablewrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  margin-top: 14px;\n}\n.pp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 600px;\n}\n.pp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ice);\n  font: 600 11.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: right;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 14px;\n  color: var(--slate);\n}\n.pp-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-family: var(--disp);\n  font-weight: 600;\n  color: var(--navy);\n  font-size: 14.5px;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child):not(:last-child) {\n  text-align: right;\n  font-family: var(--mono);\n  color: var(--navy);\n  font-weight: 600;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.pp-addons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 14px;\n}\n.pp-addon[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: #fff;\n  transition: .15s;\n}\n.pp-addon[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .08);\n}\n.pp-addon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.pp-addon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 700 15px var(--mono);\n  color: var(--blue);\n}\n.pp-addon[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font: 500 11px var(--mono);\n  color: var(--slate);\n  font-style: normal;\n  margin-left: 3px;\n}\n.pp-feats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-feat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .15s;\n  background: #fff;\n}\n.pp-feat[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n}\n.pp-feat[_ngcontent-%COMP%]   .fic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 800 16px var(--disp);\n  color: #fff;\n  letter-spacing: -.02em;\n}\n.pp-feat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-feat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 3px;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 3px 0 3px 15px;\n  position: relative;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--blue);\n  font-weight: 700;\n}\n.pp-bens[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.pb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n}\n.pb[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: rgba(29, 168, 85, .12);\n  color: #128A42;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.pb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 2px;\n}\n.pp-suite[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 18px;\n  padding: 34px;\n  background:\n    linear-gradient(\n      115deg,\n      var(--navy),\n      #0E3A78 70%);\n  color: #fff;\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 34px;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.pp-suite[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .08) 1px,\n      transparent 1px);\n  background-size: 38px 38px;\n  pointer-events: none;\n}\n.pp-suite[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.pp-suite[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 10px;\n}\n.pp-suite[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: clamp(21px, 2.4vw, 27px);\n  font-weight: 700;\n  line-height: 1.25;\n  margin-bottom: 12px;\n  letter-spacing: -.02em;\n}\n.pp-suite[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  line-height: 1.7;\n  margin-bottom: 18px;\n}\n.pp-suitegrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 9px;\n  margin-bottom: 20px;\n}\n.pp-suitegrid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #e2ecff;\n  background: rgba(255, 255, 255, .07);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 10px;\n  padding: 9px 13px;\n}\n.pp-suitecard[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 16px;\n  padding: 26px;\n  text-align: center;\n}\n.pp-suitecard[_ngcontent-%COMP%]   .cp-mark[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  border-radius: 16px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 12px 30px rgba(124, 58, 237, .4);\n  overflow: hidden;\n}\n.pp-suitecard[_ngcontent-%COMP%]   .cp-mark[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: inherit;\n}\n.pp-suitecard[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 21px var(--disp);\n  color: #fff;\n  line-height: 1.25;\n  letter-spacing: -.02em;\n}\n.pp-suitecard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  color: #9FBEEC;\n  line-height: 1.9;\n}\n.microsoft-365-protection[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 38px 0 54px;\n  padding-inline: 0;\n  background: #f0f3fb;\n  box-shadow: 0 0 0 100vmax #f0f3fb;\n  clip-path: inset(0 -100vmax);\n}\n.pp-uses[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-auto-rows: 1fr;\n  gap: 12px;\n  align-items: stretch;\n}\n.pu[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: var(--ice);\n  font-size: 13.5px;\n  color: var(--ink);\n  min-width: 0;\n  height: 100%;\n}\n.pu-ic[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: block;\n  margin-bottom: 6px;\n}\n.pu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  margin-bottom: 3px;\n  font-size: 14px;\n}\n.pp-secrows[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin: 20px 0 6px;\n}\n.psrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--line);\n}\n.psrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.psrow[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 600 13.5px var(--mono);\n  color: var(--navy);\n  text-align: right;\n}\n.pp-secfoot[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.pw[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: var(--ice);\n}\n.pw-ic[_ngcontent-%COMP%] {\n  display: flex;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid var(--line);\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.pw[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.pw[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-badge[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.pp-badge[_ngcontent-%COMP%]   .seal[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 18px 22px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n}\n.pp-badge[_ngcontent-%COMP%]   .seal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 600 9px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.pp-badge[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-badge[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-badge[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font: 600 12px var(--mono);\n  color: var(--blue);\n  font-style: normal;\n}\n.pp-tcards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.tcard[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .06);\n  transition: transform .3s;\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.quote-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-family: Georgia, serif;\n}\n.tav[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7C3AED);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 700 22px var(--disp);\n}\n.tname[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 16px;\n}\n.trole[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.tstars[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--orange);\n  letter-spacing: 2px;\n  margin-bottom: 14px;\n}\n.tcard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0;\n}\n.pp-faq[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.faq2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-ic[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-a[_ngcontent-%COMP%] {\n  max-height: 460px;\n}\n.faq2-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.pp-blog[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.bl[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s;\n  display: block;\n}\n.bl[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.bl[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 8px;\n}\n.bl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--navy);\n  line-height: 1.35;\n  margin-bottom: 8px;\n}\n.bl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.bl[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  font: 600 12.5px var(--body);\n  color: var(--blue);\n}\n.pp-blogbtn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 22px 0 4px;\n}\n.pp-blogbtn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border: none;\n  padding: 12px 26px;\n  border-radius: 99px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .22);\n  transition: transform .25s, box-shadow .25s;\n}\n.pp-blogbtn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(21, 101, 216, .3);\n  color: #fff;\n}\n.pp-contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n  margin-top: 18px;\n}\n.pp-ccard[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: var(--ice);\n}\n.pp-ccard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pp-ccard[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.pp-clist[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.pp-clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .15s;\n}\n.pp-clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n}\n.pp-clist[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.pp-clist[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.pp-clist[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.pp-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.pp-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.pp-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 88px;\n  resize: vertical;\n}\n.pp-form[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.pp-formnote[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.pp-ctabtns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pp-proof[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 22px;\n}\n.pp-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n.newsletter[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-top: 1px solid var(--line);\n  padding: 19px 0 19px 0;\n}\n.newsletter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(18px, 2vw, 23px);\n  margin: 0;\n  max-width: 52ch;\n  color: var(--navy);\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font: 400 14px var(--body);\n  min-width: 260px;\n  background: #fff;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 24px;\n  font: 600 14px var(--body);\n  cursor: pointer;\n  transition: .15s;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.nf-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n}\n.nf-rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 120px;\n  flex: none;\n  margin: 0;\n}\n.nf-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.nf-cert-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 200;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s;\n}\n.back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n@keyframes _ngcontent-%COMP%_pprise {\n  0% {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_ppcursor {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_illusfloat {\n  0%, to {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pphgrid {\n  to {\n    background-position: 44px 44px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pphscan {\n  0%, to {\n    transform: translateY(-10%);\n    opacity: .5;\n  }\n  50% {\n    transform: translateY(230%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow1 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(90px, 50px) scale(1.18);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow2 {\n  0% {\n    transform: translate(0) scale(1.1);\n  }\n  to {\n    transform: translate(-80px, 60px) scale(.95);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow3 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(60px, -45px) scale(1.22);\n  }\n}\n@keyframes _ngcontent-%COMP%_wmSpin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_drift {\n  0%, to {\n    transform: translate(0) scale(1);\n  }\n  50% {\n    transform: translate(34px, -26px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, to {\n    box-shadow: 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-mobile-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .pp-feats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-apps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .pp-addons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1000px) {\n  .pp-bens[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-why[_ngcontent-%COMP%], \n   .pp-blog[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-plans[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-crumb[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline-support[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-typewriter[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-chips[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-hero-grid[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pph-scene[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    top: 0;\n    padding: 8px 0 4px;\n    order: -1;\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n  .pph-illus-img[_ngcontent-%COMP%] {\n    width: 58%;\n    max-width: 260px;\n  }\n  .pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pp-suite[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 28px;\n  }\n  .pp-contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-tcards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-addons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 820px) {\n  .pp-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n@media (max-width: 760px) {\n  .pp-cta[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 28px 22px;\n  }\n  .pp-cta-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .pp-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 3;\n    width: 72px;\n    height: 72px;\n    justify-self: end;\n  }\n  .pp-feats[_ngcontent-%COMP%], \n   .pp-bens[_ngcontent-%COMP%], \n   .pp-plans[_ngcontent-%COMP%], \n   .pp-plans2[_ngcontent-%COMP%], \n   .pp-why[_ngcontent-%COMP%], \n   .pp-blog[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%], \n   .pp-secrows[_ngcontent-%COMP%], \n   .pp-faq[_ngcontent-%COMP%], \n   .pp-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-apps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-hero[_ngcontent-%COMP%] {\n    min-height: 340px;\n    padding: 40px 0;\n  }\n  .pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .pp-tagline[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .pp-body[_ngcontent-%COMP%] {\n    padding: 20px 0 28px 0;\n  }\n  .hero-ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .pv-frame[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .m365-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .nf-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 620px) {\n  .pp-hpoints[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n  .pp-form[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-addons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-icon-btn[_ngcontent-%COMP%], \n   .xh-mobile-toggle[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .pp-suite[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pph-grid[_ngcontent-%COMP%], \n   .pph-aur[_ngcontent-%COMP%], \n   .pph-scan[_ngcontent-%COMP%], \n   .pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%], \n   .pph-illus-img[_ngcontent-%COMP%], \n   .orb[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%], \n   .pp-crumb[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .pp-tagline[_ngcontent-%COMP%], \n   .hero-ctas[_ngcontent-%COMP%] {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=microsoft-365-smb.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Microsoft365SmbPage, [{
    type: Component,
    args: [{ selector: "xh-microsoft-365-smb-page", standalone: true, imports: [QuantityInputDirective, InsightsSectionComponent, DecimalPipe, SmbSectionNavComponent, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div id="ppage" class="ppage as-page">\r
\r
  <section class="supplied-smb-hero-shell" aria-label="Microsoft 365 SMB hero">\r
    <iframe\r
      class="supplied-smb-hero-frame"\r
      src="/assets/heroes/microsoft-365-smb-hero.html"\r
      title="Microsoft 365 for SMB interactive overview"\r
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"\r
      referrerpolicy="strict-origin-when-cross-origin"\r
      scrolling="no"\r
    ></iframe>\r
  </section>\r
\r
  <!-- ---------- HERO ---------- -->\r
  <section class="pp-hero legacy-smb-hero">\r
    <div class="pph-map"><div class="wm-ring"></div><div class="wm-ring r2"></div></div>\r
    <span class="pph-grid"></span>\r
    <span class="pph-aur pph-a1"></span>\r
    <span class="pph-aur pph-a2"></span>\r
    <span class="pph-aur pph-a3"></span>\r
    <span class="pph-scan"></span>\r
    <span class="orb orb-1"></span>\r
\r
    <div class="pph-scene has-illus standalone-illus" aria-hidden="true">\r
      <div class="pph-illus">\r
        <iframe\r
          class="microsoft365-hero-animation"\r
          src="/assets/animations/microsoft365-animation.html"\r
          title="Microsoft 365 SMB productivity apps animation"\r
          sandbox="allow-scripts"\r
          tabindex="-1"\r
        ></iframe>\r
      </div>\r
    </div>\r
    <div class="wrap">\r
      <div class="pp-crumb">Home &rsaquo; Cloud &rsaquo; Email &amp; Collaboration</div>\r
      <h1>\r
        <span class="pp-title-brand"><span class="pp-brand-xcell">Xcell</span><span class="pp-brand-family">Cloud</span></span>\r
        <span class="pp-title-divider">|</span>\r
        <span class="pp-title-name">Microsoft 365 SMB</span>\r
      </h1>\r
      <p class="pp-tagline">The complete cloud productivity suite for Indian businesses.</p>\r
      <p class="pp-tagline-support">Outlook &middot; Teams &middot; Word &middot; Excel &middot; OneDrive &middot; SharePoint</p>\r
      <div class="pp-typewriter"><span>Everything your team needs to work, meet and create.</span><i></i></div>\r
\r
      <div class="pp-chips">\r
        <span class="pp-chip price">Business Basic from &#8377;1,740/user/year</span>\r
        <span class="pp-chip">Copilot AI add-on available</span>\r
        <span class="pp-chip">GST invoice &middot; INR billing</span>\r
      </div>\r
\r
      <div class="pp-hero-grid">\r
        <div class="pp-hero-l">\r
          <div class="pp-hpoints">\r
            <div class="pp-hpoint"><span class="tick"></span>All apps + email on your domain</div>\r
            <div class="pp-hpoint"><span class="tick"></span>Free migration &mdash; zero data loss</div>\r
            <div class="pp-hpoint"><span class="tick"></span>99.9% financially backed uptime SLA</div>\r
            <div class="pp-hpoint"><span class="tick"></span>Teams, DNS &amp; DMARC set up by us</div>\r
          </div>\r
          <div class="hero-ctas">\r
            \r
            \r
            <button class="btn btn-ghost" type="button">7 Day's Free Trial</button>\r
            <a class="btn btn-primary" href="#" (click)="openCallback($event)">Let's Talk</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ---------- TRUST STRIP ---------- -->\r
  <div class="pp-trust">\r
    <div class="wrap">\r
      <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
      <span><b>Microsoft</b> Gold Partner</span>\r
      <span><b>10,000+</b> customers</span>\r
      <span><b>Since 1999</b></span>\r
      <span><b>99.95% uptime SLA</b></span>\r
      <span><b>24&times;7</b> NOC + SOC</span>\r
    </div>\r
  </div>\r
\r
  <!-- ---------- BODY ---------- -->\r
  <xh-smb-section-nav\r
    label="Microsoft 365 SMB page sections"\r
    [links]="sectionNavLinks"\r
  />\r
\r
  <div class="pp-body">\r
    <div class="wrap">\r
\r
      <!-- OVERVIEW -->\r
      <div class="pp-sec" id="m365Overview">Overview &mdash; What is Microsoft 365?</div>\r
      <p class="pp-ov m365-overview-copy">\r
        Microsoft 365 (formerly Office 365) is Microsoft's cloud-based productivity platform, trusted by over\r
        345 million users worldwide. It bundles your team's email, calendar, video meetings, document collaboration\r
        and cloud storage into a single subscription &mdash; hosted on Microsoft's globally distributed Azure infrastructure.\r
      </p>\r
      <p class="pp-ov m365-overview-copy">\r
        For Indian businesses, Microsoft 365 means your team gets <b>@yourcompany.com</b> professional email, the full\r
        Office desktop apps (Word, Excel, PowerPoint), Microsoft Teams for video meetings and chat, and 1 TB OneDrive\r
        storage per user &mdash; all from one subscription billed in INR with GST. XcellHost provisions the licences,\r
        migrates your mail, configures Teams and DNS, and supports it 24&times;7.\r
      </p>\r
\r
      <div class="pp-stats">\r
        <div class="pp-stat"><b>345M+</b><span>Users on Microsoft 365 globally</span></div>\r
        <div class="pp-stat"><b>99.9%</b><span>Uptime SLA guaranteed</span></div>\r
        <div class="pp-stat"><b>1 TB</b><span>OneDrive storage per user</span></div>\r
        <div class="pp-stat"><b>50 GB+</b><span>Exchange mailbox per user</span></div>\r
      </div>\r
\r
      <!-- APP STRIP -->\r
      <div class="pp-sec">The apps your team gets</div>\r
      <div class="pp-apps">\r
        <div class="pp-app"><span class="ai" style="background:#0F6CBD">O</span><b>Outlook</b><span>Email &amp; calendar</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#5059C9">T</span><b>Teams</b><span>Meetings &amp; chat</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#185ABD">W</span><b>Word</b><span>Documents</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#107C41">X</span><b>Excel</b><span>Spreadsheets</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#C43E1C">P</span><b>PowerPoint</b><span>Presentations</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#0364B8">&#9729;</span><b>OneDrive</b><span>1 TB storage</span></div>\r
        <div class="pp-app"><span class="ai" style="background:#038387">S</span><b>SharePoint</b><span>Team sites</span></div>\r
        <div class="pp-app"><span class="ai" style="background:linear-gradient(135deg,#2F6FE4,#7C3AED 55%,#E8478B)">&#10022;</span><b>Copilot</b><span>AI assistant</span></div>\r
      </div>\r
\r
      <!-- PRICING -->\r
      <div class="pp-sec" id="pricing">Microsoft 365 pricing in India</div>\r
      <p class="pp-ov" style="margin-bottom:18px">Choose annual upfront or a flexible monthly term. Use each card's toggle to show INR prices with or without 18% GST.</p>\r
      <div class="pp-toggle-wrap">\r
        <div class="pp-toggle" role="group" aria-label="Choose Microsoft 365 plans with or without Teams">\r
          <button\r
            type="button"\r
            [class.active]="includesTeams()"\r
            [attr.aria-pressed]="includesTeams()"\r
            (click)="setTeamsOption(true)"\r
          >With Microsoft Teams</button>\r
          <button\r
            type="button"\r
            [class.active]="!includesTeams()"\r
            [attr.aria-pressed]="!includesTeams()"\r
            (click)="setTeamsOption(false)"\r
          >Without Microsoft Teams</button>\r
        </div>\r
      </div>\r
      <div class="pp-plans">\r
        <div class="ppl">\r
          <span class="tag">Entry</span>\r
          <h4>@if (includesTeams()) {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-basic">Business Basic</a>} @else {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-basic-no-teams">Business Basic</a>}</h4>\r
          <div class="sub">Email, {{ includesTeams() ? 'Teams & ' : '' }}cloud apps</div>\r
          @if (includesTeams()) {\r
            <p class="billing-list-price">MS list <s>&#8377;{{ displayPrice('basic', basicTeamsListMonthly) | number:'1.0-2' }}</s> /user/mo</p>\r
          }\r
          <div class="billing-gst-row">\r
            <span>Show prices</span>\r
            <div class="billing-gst-toggle" role="group" aria-label="Business Basic GST display">\r
              <button type="button" [class.active]="!includesGst()['basic']" [attr.aria-pressed]="!includesGst()['basic']" (click)="setGstOption('basic', false)">Excl. GST</button>\r
              <button type="button" [class.active]="includesGst()['basic']" [attr.aria-pressed]="includesGst()['basic']" (click)="setGstOption('basic', true)">Incl. GST</button>\r
            </div>\r
          </div>\r
          <div class="billing-choices" role="group" aria-label="Business Basic payment frequency">\r
            @for (option of billingOptions; track option.id) {\r
              <button type="button" class="billing-choice" [class.chosen]="billingTerms()['basic'] === option.id" [class.upfront]="option.id === 'upfront'" [attr.aria-pressed]="billingTerms()['basic'] === option.id" (click)="setBillingTerm('basic', option.id)">\r
                <span class="billing-choice-heading"><span>{{ option.label }}</span><span class="billing-choice-status">@if (includesTeams() && option.id === 'upfront') {<span class="billing-discount-badge">Save {{ basicTeamsUpfrontDiscount }}%</span>}<span class="billing-indicator" aria-hidden="true">@if (billingTerms()['basic'] === option.id) {&#10003;}</span></span></span>\r
                @if (displayPrice('basic', monthlyRate('basic', option.id)); as rate) {\r
                  <span class="billing-unit-price"><b>&#8377;{{ rate | number:'1.0-0' }}</b> /user/mo</span>\r
                  @if (option.id !== 'monthly') {<span class="billing-annual-price">&#8377;{{ displayPrice('basic', annualRate('basic', option.id)) | number:'1.0-0' }} /user/year</span>}\r
                } @else {<span class="billing-unit-price"><b>Quote on request</b></span>}\r
                <span class="billing-note">{{ option.note }}</span>\r
                <span class="billing-tax-note">{{ includesGst()['basic'] ? 'Includes GST 18%' : 'Excludes GST 18% (added at billing)' }}</span>\r
                <span class="billing-seat-total" aria-live="polite">\r
                  <span>&times; {{ quoteQuantities()['basic'] }} {{ quoteQuantities()['basic'] === 1 ? 'user' : 'users' }}</span>\r
                  @if (displayPrice('basic', billingTotal('basic', option.id)); as total) {\r
                    <span class="billing-seat-amount"><b>&#8377;{{ total | number:'1.0-2' }} /mo</b><b>&#8377;{{ displayPrice('basic', billingTotal('basic', option.id, true)) | number:'1.0-0' }} /year{{ option.id === 'monthly' ? ' equivalent' : '' }}</b></span>\r
                  } @else {<span class="billing-seat-amount">Quote for {{ quoteQuantities()['basic'] }} users</span>}\r
                </span>\r
              </button>\r
            }\r
          </div>\r
          <ul>\r
            <li>Outlook email on @yourcompany.com</li>\r
            <li>1 TB OneDrive storage per user</li>\r
            <li>Web &amp; mobile Office apps</li>\r
            <li>50 GB Exchange mailbox</li>\r
            <li>SharePoint{{ includesTeams() ? ' & Teams' : '' }} included</li>\r
          </ul>\r
          <div class="btns">\r
            <label class="quantity-label">No. of users / licences</label>\r
            <div class="quote-quantity" role="group" aria-label="Business Basic quantity">\r
              <button type="button" aria-label="Decrease Business Basic quantity" [disabled]="quoteQuantities()['basic'] <= 1" (click)="adjustQuantity('basic', -1)">&minus;</button>\r
              <input xhQuantityInput aria-label="Quantity for Business Basic quantity" [quantityValue]="quoteQuantities()['basic']" [quantityMax]="300" (quantityChange)="adjustQuantity('basic', $event - (quoteQuantities()['basic']))" />\r
              <button type="button" aria-label="Increase Business Basic quantity" [disabled]="quoteQuantities()['basic'] >= 300" (click)="adjustQuantity('basic', 1)">+</button>\r
            </div>\r
            <a class="btn btn-primary" [href]="checkoutUrl('basic')" target="_blank" rel="noopener noreferrer">Buy Now &#8599;</a>\r
            @if (billingTerms()['basic'] !== 'upfront') {<span class="checkout-term-note">Online checkout uses annual upfront billing.</span>}\r
          </div>\r
        </div>\r
\r
        <div class="ppl hot">\r
          <span class="tag">Most Popular</span>\r
          <h4>@if (includesTeams()) {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-standard">Business Standard</a>} @else {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-standard-no-teams">Business Standard</a>}</h4>\r
          <div class="sub">Full desktop apps{{ includesTeams() ? ' + Teams' : '' }}</div>\r
          @if (includesTeams()) {\r
            <p class="billing-list-price">MS list <s>&#8377;{{ displayPrice('standard', standardTeamsListMonthly) | number:'1.0-2' }}</s> /user/mo</p>\r
          }\r
          <div class="billing-gst-row">\r
            <span>Show prices</span>\r
            <div class="billing-gst-toggle" role="group" aria-label="Business Standard GST display">\r
              <button type="button" [class.active]="!includesGst()['standard']" [attr.aria-pressed]="!includesGst()['standard']" (click)="setGstOption('standard', false)">Excl. GST</button>\r
              <button type="button" [class.active]="includesGst()['standard']" [attr.aria-pressed]="includesGst()['standard']" (click)="setGstOption('standard', true)">Incl. GST</button>\r
            </div>\r
          </div>\r
          <div class="billing-choices" role="group" aria-label="Business Standard payment frequency">\r
            @for (option of billingOptions; track option.id) {\r
              <button type="button" class="billing-choice" [class.chosen]="billingTerms()['standard'] === option.id" [class.upfront]="option.id === 'upfront'" [attr.aria-pressed]="billingTerms()['standard'] === option.id" (click)="setBillingTerm('standard', option.id)">\r
                <span class="billing-choice-heading"><span>{{ option.label }}</span><span class="billing-choice-status">@if (includesTeams() && option.id === 'upfront') {<span class="billing-discount-badge">Save {{ standardTeamsUpfrontDiscount }}%</span>}<span class="billing-indicator" aria-hidden="true">@if (billingTerms()['standard'] === option.id) {&#10003;}</span></span></span>\r
                @if (displayPrice('standard', monthlyRate('standard', option.id)); as rate) {\r
                  <span class="billing-unit-price"><b>&#8377;{{ rate | number:'1.0-0' }}</b> /user/mo</span>\r
                  @if (option.id !== 'monthly') {<span class="billing-annual-price">&#8377;{{ displayPrice('standard', annualRate('standard', option.id)) | number:'1.0-0' }} /user/year</span>}\r
                } @else {<span class="billing-unit-price"><b>Quote on request</b></span>}\r
                <span class="billing-note">{{ option.note }}</span>\r
                <span class="billing-tax-note">{{ includesGst()['standard'] ? 'Includes GST 18%' : 'Excludes GST 18% (added at billing)' }}</span>\r
                <span class="billing-seat-total" aria-live="polite">\r
                  <span>&times; {{ quoteQuantities()['standard'] }} {{ quoteQuantities()['standard'] === 1 ? 'user' : 'users' }}</span>\r
                  @if (displayPrice('standard', billingTotal('standard', option.id)); as total) {\r
                    <span class="billing-seat-amount"><b>&#8377;{{ total | number:'1.0-2' }} /mo</b><b>&#8377;{{ displayPrice('standard', billingTotal('standard', option.id, true)) | number:'1.0-0' }} /year{{ option.id === 'monthly' ? ' equivalent' : '' }}</b></span>\r
                  } @else {<span class="billing-seat-amount">Quote for {{ quoteQuantities()['standard'] }} users</span>}\r
                </span>\r
              </button>\r
            }\r
          </div>\r
          <ul>\r
            <li>Everything in Business Basic</li>\r
            <li>Full desktop Word, Excel &amp; PowerPoint</li>\r
            <li>Install on 5 PCs/Macs + 5 mobile devices</li>\r
            @if (includesTeams()) {<li>Teams webinars &amp; meeting recordings</li>}\r
            <li>Bookings &amp; Clipchamp included</li>\r
          </ul>\r
          <div class="btns">\r
            <label class="quantity-label">No. of users / licences</label>\r
            <div class="quote-quantity" role="group" aria-label="Business Standard quantity">\r
              <button type="button" aria-label="Decrease Business Standard quantity" [disabled]="quoteQuantities()['standard'] <= 1" (click)="adjustQuantity('standard', -1)">&minus;</button>\r
              <input xhQuantityInput aria-label="Quantity for Business Standard quantity" [quantityValue]="quoteQuantities()['standard']" [quantityMax]="300" (quantityChange)="adjustQuantity('standard', $event - (quoteQuantities()['standard']))" />\r
              <button type="button" aria-label="Increase Business Standard quantity" [disabled]="quoteQuantities()['standard'] >= 300" (click)="adjustQuantity('standard', 1)">+</button>\r
            </div>\r
            <a class="btn btn-primary" [href]="checkoutUrl('standard')" target="_blank" rel="noopener noreferrer">Buy Now &#8599;</a>\r
            @if (billingTerms()['standard'] !== 'upfront') {<span class="checkout-term-note">Online checkout uses annual upfront billing.</span>}\r
          </div>\r
        </div>\r
\r
        <div class="ppl">\r
          <span class="tag">Security Ready</span>\r
          <h4>@if (includesTeams()) {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-premium">Business Premium</a>} @else {<a class="business-basic-detail-link" routerLink="/microsoft-365-business-premium-no-teams">Business Premium</a>}</h4>\r
          <div class="sub">Standard + enterprise security</div>\r
          @if (includesTeams()) {\r
            <p class="billing-list-price">MS list <s>&#8377;{{ displayPrice('premium', premiumTeamsListMonthly) | number:'1.0-2' }}</s> /user/mo</p>\r
          }\r
          <div class="billing-gst-row">\r
            <span>Show prices</span>\r
            <div class="billing-gst-toggle" role="group" aria-label="Business Premium GST display">\r
              <button type="button" [class.active]="!includesGst()['premium']" [attr.aria-pressed]="!includesGst()['premium']" (click)="setGstOption('premium', false)">Excl. GST</button>\r
              <button type="button" [class.active]="includesGst()['premium']" [attr.aria-pressed]="includesGst()['premium']" (click)="setGstOption('premium', true)">Incl. GST</button>\r
            </div>\r
          </div>\r
          <div class="billing-choices" role="group" aria-label="Business Premium payment frequency">\r
            @for (option of billingOptions; track option.id) {\r
              <button type="button" class="billing-choice" [class.chosen]="billingTerms()['premium'] === option.id" [class.upfront]="option.id === 'upfront'" [attr.aria-pressed]="billingTerms()['premium'] === option.id" (click)="setBillingTerm('premium', option.id)">\r
                <span class="billing-choice-heading"><span>{{ option.label }}</span><span class="billing-choice-status">@if (includesTeams() && option.id === 'upfront') {<span class="billing-discount-badge">Save {{ premiumTeamsUpfrontDiscount }}%</span>}<span class="billing-indicator" aria-hidden="true">@if (billingTerms()['premium'] === option.id) {&#10003;}</span></span></span>\r
                @if (displayPrice('premium', monthlyRate('premium', option.id)); as rate) {\r
                  <span class="billing-unit-price"><b>&#8377;{{ rate | number:'1.0-0' }}</b> /user/mo</span>\r
                  @if (option.id !== 'monthly') {<span class="billing-annual-price">&#8377;{{ displayPrice('premium', annualRate('premium', option.id)) | number:'1.0-0' }} /user/year</span>}\r
                } @else {<span class="billing-unit-price"><b>Quote on request</b></span>}\r
                <span class="billing-note">{{ option.note }}</span>\r
                <span class="billing-tax-note">{{ includesGst()['premium'] ? 'Includes GST 18%' : 'Excludes GST 18% (added at billing)' }}</span>\r
                <span class="billing-seat-total" aria-live="polite">\r
                  <span>&times; {{ quoteQuantities()['premium'] }} {{ quoteQuantities()['premium'] === 1 ? 'user' : 'users' }}</span>\r
                  @if (displayPrice('premium', billingTotal('premium', option.id)); as total) {\r
                    <span class="billing-seat-amount"><b>&#8377;{{ total | number:'1.0-2' }} /mo</b><b>&#8377;{{ displayPrice('premium', billingTotal('premium', option.id, true)) | number:'1.0-0' }} /year{{ option.id === 'monthly' ? ' equivalent' : '' }}</b></span>\r
                  } @else {<span class="billing-seat-amount">Quote for {{ quoteQuantities()['premium'] }} users</span>}\r
                </span>\r
              </button>\r
            }\r
          </div>\r
          <ul>\r
            <li>Everything in Business Standard</li>\r
            <li>Microsoft Defender for Business</li>\r
            <li>Intune device management (MDM)</li>\r
            <li>Entra ID Premium &mdash; MFA &amp; SSO</li>\r
            <li>Microsoft Purview &mdash; DLP &amp; compliance</li>\r
          </ul>\r
          <div class="btns">\r
            <label class="quantity-label">No. of users / licences</label>\r
            <div class="quote-quantity" role="group" aria-label="Business Premium quantity">\r
              <button type="button" aria-label="Decrease Business Premium quantity" [disabled]="quoteQuantities()['premium'] <= 1" (click)="adjustQuantity('premium', -1)">&minus;</button>\r
              <input xhQuantityInput aria-label="Quantity for Business Premium quantity" [quantityValue]="quoteQuantities()['premium']" [quantityMax]="300" (quantityChange)="adjustQuantity('premium', $event - (quoteQuantities()['premium']))" />\r
              <button type="button" aria-label="Increase Business Premium quantity" [disabled]="quoteQuantities()['premium'] >= 300" (click)="adjustQuantity('premium', 1)">+</button>\r
            </div>\r
            <a class="btn btn-primary" [href]="checkoutUrl('premium')" target="_blank" rel="noopener noreferrer">Buy Now &#8599;</a>\r
            @if (billingTerms()['premium'] !== 'upfront') {<span class="checkout-term-note">Online checkout uses annual upfront billing.</span>}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <p class="billing-footnote">Buy Now opens the existing annual upfront checkout; select your user quantity again there. For other billing terms, contact our team. Monthly rates shown are indicative; your checkout or quote confirms the final amount.</p>\r
      <div class="pp-plans2">\r
        <div class="ppl2">\r
          <div><b>Apps for Business</b><span>Desktop Office apps + 1 TB OneDrive &mdash; no email or Teams</span></div>\r
          <div class="amt">&#8377;685<em>/user/mo</em></div>\r
        </div>\r
        <div class="ppl2">\r
          <div><b>Teams Essentials</b><span>Standalone Microsoft Teams &mdash; meetings, chat &amp; file collaboration</span></div>\r
          <div class="amt">&#8377;115<em>/user/mo</em></div>\r
        </div>\r
      </div>\r
\r
      <div class="pp-planstrip">\r
        <div>\r
          <b>Microsoft 365 + Copilot AI bundles</b>\r
          <span>Add Copilot to any Business plan &mdash; GPT-powered AI across Word, Excel, Teams and Outlook</span>\r
        </div>\r
        <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Ask about Copilot</a>\r
      </div>\r
\r
      <div class="pp-planstrip">\r
        <div>\r
          <b>Nonprofit &amp; education pricing available</b>\r
          <span>Business Basic free for up to 300 users &middot; Standard &#8377;250/user/mo &middot; Premium &#8377;460/user/mo</span>\r
        </div>\r
        <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Check eligibility &rarr;</a>\r
      </div>\r
\r
      <!-- ADD-ONS -->\r
      <div class="pp-sec">Add-on licences</div>\r
      <p class="pp-ov" style="margin-bottom:6px">Add to any Microsoft 365 Business or Enterprise plan. All prices per user per month, annual billing.</p>\r
      <div class="pp-addons">\r
        <div class="pp-addon"><b>Microsoft 365 Copilot</b><span>&#8377;1,496</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Teams Phone Standard</b><span>&#8377;830</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Defender for Business</b><span>&#8377;250</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Microsoft Purview Suite</b><span>&#8377;830</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Microsoft Defender Suite</b><span>&#8377;830</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Planner Plan 1</b><span>&#8377;830</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Visio Plan 1</b><span>&#8377;415</span><em>/user/mo</em></div>\r
        <div class="pp-addon"><b>Clipchamp Standard</b><span>&#8377;250</span><em>/user/mo</em></div>\r
      </div>\r
      <p class="pv-note">&#128179; All prices per user/month, annual commitment, approximate INR excluding GST. Pay online via UPI &middot; Cards &middot; NetBanking. Contact XcellHost for exact pricing, volume discounts and multi-year deals.</p>\r
\r
      <!-- KEY FEATURES -->\r
      <div class="pp-sec" id="m365Features">Everything in Microsoft 365</div>\r
      <p class="pp-ov" style="margin-bottom:20px">Email, meetings, collaboration, storage, security and AI &mdash; one integrated platform built for modern businesses.</p>\r
      <div class="pp-feats">\r
        <div class="pp-feat">\r
          <span class="fic" style="background:#0F6CBD">O</span>\r
          <div><p><b>Outlook &amp; Exchange Online</b>Professional email on your domain</p>\r
            <ul>\r
              <li>50 GB+ mailbox on @yourcompany.com</li>\r
              <li>Shared calendar, contacts and distribution lists</li>\r
              <li>IMAP / ActiveSync / Outlook desktop and mobile</li>\r
              <li>Anti-spam and anti-phishing built in</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="pp-feat">\r
          <span class="fic" style="background:#5059C9">T</span>\r
          <div><p><b>Microsoft Teams</b>Meetings, channels and real-time collaboration</p>\r
            <ul>\r
              <li>HD video meetings &mdash; up to 1,000 participants</li>\r
              <li>Persistent channels, chat and shared file spaces</li>\r
              <li>Included in every Microsoft 365 Business plan</li>\r
              <li>Webinars and recordings on Standard and above</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="pp-feat">\r
          <span class="fic" style="background:#185ABD">W</span>\r
          <div><p><b>Word, Excel &amp; PowerPoint</b>Full desktop apps &mdash; PC, Mac and mobile</p>\r
            <ul>\r
              <li>Install on 5 PCs/Macs + 5 tablets per user</li>\r
              <li>Real-time co-authoring across all documents</li>\r
              <li>Works offline, syncs when you reconnect</li>\r
              <li>Available in Business Standard and Premium</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="pp-feat">\r
          <span class="fic" style="background:#0364B8">&#9729;</span>\r
          <div><p><b>OneDrive &amp; SharePoint</b>1 TB storage + team document sites</p>\r
            <ul>\r
              <li>1 TB OneDrive per user with desktop sync</li>\r
              <li>SharePoint team sites for every department</li>\r
              <li>Version history, permissions and DLP controls</li>\r
              <li>External sharing with expiry and access policies</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="pp-feat">\r
          <span class="fic" style="background:#0B5CAB">&#128737;</span>\r
          <div><p><b>Defender &amp; Security</b>Enterprise-grade security across every device</p>\r
            <ul>\r
              <li>Defender for Business &mdash; endpoint protection (Premium)</li>\r
              <li>Intune MDM + Entra ID Premium MFA</li>\r
              <li>Microsoft Purview &mdash; DLP and eDiscovery</li>\r
              <li>Conditional access and device compliance policies</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="pp-feat">\r
          <span class="fic" style="background:linear-gradient(135deg,#2F6FE4,#7C3AED 55%,#E8478B)">&#10022;</span>\r
          <div><p><b>Microsoft 365 Copilot</b>AI built into every app you already use</p>\r
            <ul>\r
              <li>Copilot in Word, Excel, Teams and Outlook</li>\r
              <li>Meeting summaries, email drafts, data analysis</li>\r
              <li>Grounded in your own organisational data</li>\r
              <li>Runs privately on Microsoft Azure</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- BENEFITS -->\r
      <div class="pp-sec">Benefits for your business</div>\r
      <div class="pp-bens">\r
        <article class="pb"><span class="ic">&#8377;</span><p><b>Lower cost of ownership</b>No Exchange server, no CALs, no refresh cycles &mdash; one predictable per-user price in INR</p></article>\r
        <article class="pb"><span class="ic">&#127968;</span><p><b>Work from anywhere</b>Desktop, web and mobile keep your team productive from office, home or site</p></article>\r
        <article class="pb"><span class="ic">&#128737;</span><p><b>Security that ships switched on</b>MFA, Defender, Intune and Purview configured to policy, not left as defaults</p></article>\r
        <article class="pb"><span class="ic">&#128200;</span><p><b>Scale on demand</b>Add users, storage or Copilot seats the day you need them &mdash; not next quarter</p></article>\r
      </div>\r
\r
      <!-- COPILOT PANEL -->\r
      <div class="pp-sec">Microsoft 365 Copilot</div>\r
      <div class="pp-suite">\r
        <div>\r
          <div class="lbl">AI Assistant</div>\r
          <h3>Your AI assistant &mdash; built into every Microsoft 365 app</h3>\r
          <p>\r
            Microsoft 365 Copilot brings large-language-model AI directly into the apps your team already uses.\r
            Copilot can draft documents in Word, analyse data in Excel, summarise meetings in Teams and write\r
            email responses in Outlook &mdash; all grounded in your organisation's own data, with enterprise-grade\r
            privacy on Azure. XcellHost handles licensing, tenant readiness and rollout.\r
          </p>\r
          <div class="pp-suitegrid">\r
            <span>Word &mdash; draft, rewrite, summarise</span>\r
            <span>Teams &mdash; meeting notes &amp; actions</span>\r
            <span>Outlook &mdash; drafts &amp; thread summaries</span>\r
            <span>Excel &mdash; analysis &amp; formulas</span>\r
            <span>OneDrive &mdash; intelligent file search</span>\r
            <span>Enterprise privacy on Azure</span>\r
          </div>\r
          <div class="hero-ctas" style="animation:none">\r
            <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Ask About Copilot Licensing</a>\r
            <a class="btn btn-ghost" href="#pricing">See Copilot pricing</a>\r
          </div>\r
        </div>\r
        <div class="pp-suitecard">\r
          <span class="cp-mark">\r
            <img src="/assets/images/microsoft-copilot-logo.png" alt="Microsoft Copilot logo">\r
          </span>\r
          <b>AI-powered.<br>Privacy-first.</b>\r
          <span>Runs on Azure<br>Your data stays yours</span>\r
        </div>\r
      </div>\r
\r
      <section\r
        class="backup-protection cloud-backup-protection microsoft-365-protection"\r
        aria-labelledby="microsoft-365-protection-title"\r
      >\r
        <div class="cloud-backup-protection-copy">\r
          <h2 id="microsoft-365-protection-title">We are Acronis Certified, delivering trusted and certified solutions for reliable data protection and cybersecurity.</h2>\r
          <p>\r
            Protect Exchange Online, OneDrive, SharePoint and Teams data from accidental deletion,\r
            ransomware and retention gaps. Acronis Microsoft 365 Backup provides automated cloud\r
            backups, flexible recovery and central visibility across your tenant. Our certified\r
            specialists help configure protection policies, retention and recovery workflows so\r
            your collaboration data remains available whenever your business needs it.\r
          </p>\r
          <img class="acronis-platinum-partner" src="/assets/images/acronis-platinum-service-provider.png" alt="Acronis Platinum Service Provider" width="230" height="47" loading="lazy" decoding="async" />\r
        </div>\r
        <img\r
          class="backup-protection-badges backup-protection-badges-compact"\r
          src="/assets/images/acronis-microsoft-365-badges-transparent-heading.png"\r
          alt="Acronis Certified Microsoft 365 Professional and M365 Backup Specialist badges"\r
          loading="lazy"\r
          decoding="async"\r
        />\r
      </section>\r
\r
      <!-- USE CASES -->\r
      <div class="pp-sec">Who uses Microsoft 365 in India?</div>\r
      <div class="pp-uses">\r
        <div class="pu"><span class="pu-ic">&#128188;</span><b>CA &amp; Tax Firms</b>eDiscovery &amp; compliance archiving</div>\r
        <div class="pu"><span class="pu-ic">&#9878;</span><b>Legal &amp; Law Firms</b>Secure document management</div>\r
        <div class="pu"><span class="pu-ic">&#127973;</span><b>Healthcare</b>Compliant collaboration platform</div>\r
        <div class="pu"><span class="pu-ic">&#128187;</span><b>IT &amp; Software</b>DevOps integration with M365</div>\r
        <div class="pu"><span class="pu-ic">&#127979;</span><b>Schools &amp; Colleges</b>Microsoft 365 Education plans</div>\r
        <div class="pu"><span class="pu-ic">&#128640;</span><b>SMBs &amp; Startups</b>All apps from &#8377;145/user/month</div>\r
        <div class="pu"><span class="pu-ic">&#127981;</span><b>Manufacturing</b>Teams for shop-floor comms</div>\r
        <div class="pu"><span class="pu-ic">&#128717;</span><b>Retail &amp; E-commerce</b>Shared inboxes for support teams</div>\r
      </div>\r
\r
      <!-- SECURITY -->\r
      <div class="pp-sec" id="m365Security">Security &amp; compliance &mdash; Microsoft 365</div>\r
      <p class="pp-ov">\r
        The threat model for Microsoft 365 is identity-first &mdash; token theft, business email compromise, consent\r
        phishing and unmanaged devices. The controls are chosen to match it: MFA and conditional access before\r
        cutover, Defender on every endpoint, and retention set to the policy your auditors actually asked for.\r
      </p>\r
      <div class="pp-secrows">\r
        <div class="psrow"><span>At rest</span><b>BitLocker + service encryption</b></div>\r
        <div class="psrow"><span>In transit</span><b>TLS 1.2+ enforced</b></div>\r
        <div class="psrow"><span>Identity</span><b>Entra ID MFA + conditional access</b></div>\r
        <div class="psrow"><span>Domain authentication</span><b>SPF &middot; DKIM &middot; DMARC by XcellHost</b></div>\r
        <div class="psrow"><span>Endpoint</span><b>Defender for Business + Intune</b></div>\r
        <div class="psrow"><span>Data protection</span><b>Purview DLP &amp; sensitivity labels</b></div>\r
        <div class="psrow"><span>Legal hold</span><b>eDiscovery &amp; retention policies</b></div>\r
        <div class="psrow"><span>Incident response</span><b>Named engineer, 15-min ack</b></div>\r
      </div>\r
      <p class="pp-secfoot">XcellHost is ISO 27001 and ISO 20000-1 certified &middot; Indian Tier-4 datacenters &middot; DPDPA and RBI aligned &middot; 24&times;7 NOC and SOC.</p>\r
\r
      <!-- WHY XCELLHOST -->\r
      <div class="pp-sec" id="m365WhyChoose">Why buy Microsoft 365 from XcellHost?</div>\r
      <p class="pp-ov" style="margin-bottom:20px">Any reseller sells a licence. XcellHost delivers the full deployment &mdash; configured, migrated and running on day one.</p>\r
      <div class="pp-why">\r
        <div class="pw"><span class="pw-ic">&#129309;</span><b>Authorised Microsoft Partner</b><span>Genuine Microsoft 365 licences with a direct Microsoft escalation path and partner-level support.</span></div>\r
        <div class="pw"><span class="pw-ic">&#128260;</span><b>Free Email Migration</b><span>From Google Workspace, Zoho Mail, cPanel, Rediffmail or on-premises Exchange &mdash; zero data loss.</span></div>\r
        <div class="pw"><span class="pw-ic">&#129534;</span><b>INR Billing with GST Invoice</b><span>Proper GST documentation on every purchase, so your business can claim input tax credit.</span></div>\r
        <div class="pw"><span class="pw-ic">&#9200;</span><b>Since 1999</b><span>27 years running production cloud and email for Indian businesses.</span></div>\r
        <div class="pw"><span class="pw-ic">&#128222;</span><b>24&times;7 Managed Support</b><span>Phone, WhatsApp and ticket &mdash; in English and Hindi, by real engineers.</span></div>\r
        <div class="pw"><span class="pw-ic">&#9881;</span><b>Full Technical Deployment</b><span>Tenant setup, DNS, SPF/DKIM/DMARC, Teams, Intune policies &mdash; all handled by us.</span></div>\r
      </div>\r
\r
      <div class="pp-badge">\r
        <div class="seal">\r
          <svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true">\r
            <rect x="0" y="0"   width="11" height="11" fill="#F25022"/>\r
            <rect x="13" y="0"  width="11" height="11" fill="#7FBA00"/>\r
            <rect x="0" y="13"  width="11" height="11" fill="#00A4EF"/>\r
            <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>\r
          </svg>\r
          <small>Microsoft Partner</small>\r
        </div>\r
        <div class="txt">\r
          <b>Authorised Microsoft Partner in India</b>\r
          <span>Genuine licences &middot; Direct Microsoft escalation path &middot; Quality-certified deployment</span>\r
          <em>ISO 27001 &middot; ISO 20000-1 &middot; 10,000+ customers served since 1999</em>\r
        </div>\r
      </div>\r
\r
      <!-- TESTIMONIALS -->\r
      <div class="pp-sec" id="m365Testimonials">What customers say</div>\r
      <div class="pp-tcards">\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">RM</div>\r
          <div class="tname">Rakesh Choudhary</div>\r
          <div class="trole">IT Manager, Trading Company</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>Moving our business email and Office applications to Microsoft 365 made things much easier to manage. Our team can work on documents from different locations, and everything stays connected through one platform.</p>\r
        </div>\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">MJ</div>\r
          <div class="tname">Meenal Joshi</div>\r
          <div class="trole">HR &amp; Operations Manager, Manufacturing Firm</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>Teams has made communication between our teams much smoother. We can quickly share files, schedule meetings, and collaborate without switching between different tools throughout the day.</p>\r
        </div>\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">SM</div>\r
          <div class="tname">Saurabh Mehta</div>\r
          <div class="trole">Managing Director, Consulting Firm</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>We wanted a reliable setup for email, documents, and collaboration as our team grew. Microsoft 365 gave us the flexibility we needed, while making user and account management much more straightforward.</p>\r
        </div>\r
      </div>\r
\r
      <!-- FAQ -->\r
      <div class="pp-sec" id="m365Faq">Frequently asked questions</div>\r
      <div class="pp-faq">\r
        <div class="faq2" [class.open]="openFaq() === 0">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(0)">What is Microsoft 365?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Microsoft 365 (formerly Office 365) is Microsoft's cloud-based productivity suite for businesses. It includes Outlook email, Microsoft Teams, Word, Excel, PowerPoint, OneDrive (1 TB cloud storage) and SharePoint &mdash; all delivered as subscription services hosted on Microsoft's Azure infrastructure. Plans start at &#8377;145 per user per month (Business Basic) for web and mobile apps with Teams and Exchange email.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 1">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(1)">Is XcellHost an authorised Microsoft partner in India?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes. XcellHost is an authorised Microsoft partner in India. We provision genuine Microsoft 365 licences, handle end-to-end deployment including tenant and Teams setup, DNS configuration and email migration, and provide ongoing managed support &mdash; all billed in INR with a GST-compliant invoice.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 2">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(2)">What is included in Microsoft 365 Business Standard?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Business Standard includes the full Office desktop apps &mdash; Word, Excel, PowerPoint and Outlook &mdash; plus Microsoft Teams, Exchange Online with a 50 GB mailbox, OneDrive (1 TB) and SharePoint. Desktop apps install on up to 5 PCs or Macs, 5 tablets and 5 mobile devices per user.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 3">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(3)">What is the difference between Basic, Standard and Premium?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Business Basic includes web and mobile apps only, plus Exchange email, Teams and OneDrive. Business Standard adds the full desktop apps you install on your PC or Mac. Business Premium adds advanced security: Microsoft Defender for Business, Intune mobile device management, Entra ID Premium P1 and Microsoft Purview compliance tools.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 4">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(4)">Can XcellHost migrate our existing email to Microsoft 365?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes. XcellHost handles complete email migration to Microsoft 365 from any source &mdash; including Google Workspace, Zoho Mail, cPanel hosting, Rediffmail and on-premises Exchange servers. Migration includes mailbox data, contacts, calendar events and shared mailboxes with zero data loss and minimal downtime.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 5">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(5)">What is Microsoft 365 Copilot?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Microsoft 365 Copilot is Microsoft's AI assistant integrated directly into M365 apps &mdash; Word, Excel, PowerPoint, Teams and Outlook. Copilot can draft documents, summarise meetings, analyse data in spreadsheets, generate emails and create presentations. It runs on Microsoft's enterprise-grade, privacy-compliant Azure infrastructure and is available as an add-on licence.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 6">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(6)">Does Microsoft 365 work without internet?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes. Business Standard and Premium include full desktop apps &mdash; Word, Excel, PowerPoint and Outlook &mdash; that work offline on your PC or Mac. Files sync locally via OneDrive and remain accessible offline. Exchange and Teams need internet for live data, but cached email is available offline in Outlook desktop.</p></div>\r
        </div>\r
        <div class="faq2" [class.open]="openFaq() === 7">\r
          <button class="faq2-q" type="button" (click)="toggleFaq(7)">Do I get a GST invoice for Microsoft 365 in India?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes. As an authorised Microsoft partner in India, XcellHost provides a GST-compliant invoice for every Microsoft 365 purchase in INR, enabling your business to claim input tax credit on the subscription.</p></div>\r
        </div>\r
      </div>\r
\r
      <div id="m365Insights"><xh-insights-section pageSlug="microsoft-365-smb" [videos]="insightVideos" /></div>\r
\r
      <!-- Standard product CTA -->\r
      <div class="pp-cta" id="contact">\r
        <div class="pp-cta-copy">\r
          <h3>Ready to start with Microsoft 365 SMB?</h3>\r
          <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
        </div>\r
        <div class="pp-ctabtns">\r
          <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Request a callback</a>\r
          <a class="btn btn-ghost" href="#pricing">&#9889; Buy Now</a>\r
          <a class="btn btn-ghost" href="https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/" target="_blank" rel="noopener noreferrer">&#11015; Infosheet</a>\r
          <a class="btn btn-ghost" href="#" (click)="requestPresentation($event)">&#128214; Presentation</a>\r
          <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>\r
          <a class="btn btn-ghost" href="mailto:sales@xcellhost.cloud">Email Us</a>\r
</div>\r
        <a class="pp-cta-buddha-link" href="/company/support-overview" aria-label="Visit XcellHost customer support">\r
          <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" />\r
        </a>\r
      </div>\r
\r
      <div class="pp-proof">\r
        <span>&#127941; ISO 27001</span>\r
        <span>&#127941; ISO 20000-1</span>\r
        <span>&#129309; Microsoft Gold Partner</span>\r
        <span>&#128368; Since 1999</span>\r
        <span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/microsoft-365-smb.page.css */\n:root {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --ice:#F2F6FC;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --white:#FFF;\n  --ok:#2ECC71;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --ms-red:#F25022;\n  --ms-green:#7FBA00;\n  --ms-blue:#00A4EF;\n  --ms-yellow:#FFB900;\n  --ms-grey:#737373;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: var(--body);\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n.wrap {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\nh1 {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.025em;\n  margin-bottom: 18px;\n}\nh2 {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: clamp(25px, 3vw, 34px);\n  color: var(--navy);\n  letter-spacing: -.015em;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.microsoft-365-protection h2 {\n  font-size: clamp(16px, 1.35vw, 18px);\n  line-height: 1.35;\n  margin-bottom: 14px;\n  text-wrap: balance;\n}\n.btn {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: .15s;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n}\n.btn-primary {\n  background: var(--orange);\n  color: #fff;\n  animation: glow 2.8s ease-in-out infinite;\n}\n.btn-primary:hover {\n  background: #e97a08;\n}\n.btn-ghost {\n  border-color: var(--line);\n  color: var(--navy);\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pp-hero .btn-ghost {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.pp-hero .btn-ghost:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.pp-cta .btn-ghost {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.pp-cta {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  column-gap: 20px;\n  row-gap: 24px;\n  padding: 32px 26px 32px 36px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      #0C3E8F);\n  border-radius: 16px;\n  color: #fff;\n}\n.pp-cta-copy {\n  grid-column: 1;\n  grid-row: 1;\n}\n.pp-cta-copy h3 {\n  margin: 0;\n  color: #fff;\n  font-family: var(--disp);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.6;\n}\n.pp-cta-copy p {\n  margin: 4px 0 0;\n  color: #CFE0FA;\n  font-size: 14.5px;\n  line-height: 1.6;\n}\n.pp-cta .pp-ctabtns {\n  grid-column: 1;\n  grid-row: 2;\n  justify-content: flex-start;\n  align-items: center;\n}\n.pp-cta .btn {\n  line-height: 1.6;\n  white-space: nowrap;\n}\n.pp-cta .pp-cta-buddha-link {\n  position: static;\n  grid-column: 2;\n  grid-row: 1 / 3;\n  align-self: center;\n  width: 104px;\n  height: 104px;\n  margin: 0;\n  transform: none;\n}\n.pp-cta .pp-cta-buddha-link:hover {\n  transform: scale(1.06);\n}\n.pp-cta .btn-primary {\n  animation: none;\n}\n.pp-cta .btn-ghost:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  border-color: #fff;\n}\n.btn-wa {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.btn-sm {\n  padding: 7px 14px;\n  font-size: 12.5px;\n}\n.utility {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility .wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility .wrap::-webkit-scrollbar {\n  display: none;\n}\n.utility a {\n  color: #b9c9e2;\n}\n.utility a:hover {\n  color: #fff;\n}\n.utility .links {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility .links > a {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility .phone {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa:hover {\n  color: #8ff0b0 !important;\n}\n.promo {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo b {\n  color: #ffd9ac;\n}\n.promo .code {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo a {\n  text-decoration: underline;\n}\n.xh-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid #E7EBF3;\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n}\n.xh-brand img {\n  height: 74px;\n  width: auto;\n  display: block;\n}\n.xh-main-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n}\n.xh-menu-link {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 30px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  transition: color .15s;\n}\n.xh-menu-link:hover,\n.xh-menu-link.is-active {\n  color: var(--blue);\n}\n.xh-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .15s;\n}\n.xh-icon-btn:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.xh-mobile-toggle {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.xh-mobile-toggle span {\n  width: 19px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\n.ppage {\n  --ms-red:#F25022;\n  --ms-green:#7FBA00;\n  --ms-blue:#00A4EF;\n  --ms-yellow:#FFB900;\n  --ms-grey:#737373;\n  background: #fff;\n}\n.pp-hero {\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0E3A78 0%,\n      var(--navy) 60%);\n  color: #fff;\n  padding: 56px 0;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n}\n.pp-hero > .wrap {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n}\n.pph-grid {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .1) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  animation: pphgrid 20s linear infinite;\n}\n.pph-aur {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: .55;\n  z-index: 1;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n.pph-a1 {\n  width: 520px;\n  height: 520px;\n  left: -8%;\n  top: -30%;\n  background:\n    radial-gradient(\n      circle,\n      #1565D8,\n      transparent 65%);\n  animation: aflow1 17s ease-in-out infinite alternate;\n}\n.pph-a2 {\n  width: 480px;\n  height: 480px;\n  right: -6%;\n  top: -10%;\n  background:\n    radial-gradient(\n      circle,\n      #0C4EA8,\n      transparent 65%);\n  opacity: .4;\n  animation: aflow2 21s ease-in-out infinite alternate;\n}\n.pph-a3 {\n  width: 420px;\n  height: 420px;\n  left: 40%;\n  bottom: -40%;\n  background:\n    radial-gradient(\n      circle,\n      #7C3AED,\n      transparent 62%);\n  opacity: .28;\n  animation: aflow3 19s ease-in-out infinite alternate;\n}\n.pph-scan {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 34%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(127, 178, 255, .14),\n      transparent);\n  animation: pphscan 7s ease-in-out infinite;\n}\n.pph-map {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  overflow: hidden;\n}\n.pph-map .wm-ring {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  width: 520px;\n  height: 520px;\n  transform: translate(-50%, -50%);\n  border: 1px dashed rgba(143, 184, 255, .22);\n  border-radius: 50%;\n  animation: wmSpin 60s linear infinite;\n}\n.pph-map .wm-ring.r2 {\n  width: 340px;\n  height: 340px;\n  animation-duration: 42s;\n  animation-direction: reverse;\n  border-color: rgba(143, 184, 255, .16);\n}\n.orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: .3;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-1 {\n  width: 340px;\n  height: 340px;\n  background: #1565D8;\n  top: -90px;\n  left: -70px;\n  animation: drift 14s ease-in-out infinite;\n}\n.pph-scene {\n  position: absolute;\n  right: 0;\n  top: 4%;\n  bottom: 0;\n  width: 48%;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n}\n.pph-illus {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 0;\n}\n.pph-illus-img {\n  width: 88%;\n  max-width: 520px;\n  max-height: 300px;\n  object-fit: contain;\n  filter: drop-shadow(0 18px 40px rgba(4, 30, 66, .35));\n  animation: illusfloat 5.5s ease-in-out infinite;\n}\n.pph-powered-image {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 5px 16px rgba(0, 20, 55, .18);\n}\n.pph-powered-image .pw-lbl {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #8FA2BD;\n}\n.pph-powered-image .pw-sub {\n  font: 600 10px var(--body);\n  color: #51607A;\n  letter-spacing: .04em;\n}\n.ms-lockup {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n}\n.pph-powered-image .ms-lockup svg {\n  flex: none;\n  display: block;\n  width: 26px;\n  height: 26px;\n  max-height: none;\n}\n.ms-word {\n  font: 600 21px/1 "Segoe UI", var(--body);\n  color: var(--ms-grey);\n  letter-spacing: -.01em;\n}\n.ms-word b {\n  font-weight: 600;\n  color: #2b2b2b;\n}\n.pp-crumb {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 14px;\n  animation: pprise .5s cubic-bezier(.19, 1, .22, 1) .12s both;\n}\n.pp-hero h1 {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  margin: 0 0 14px;\n  color: #fff;\n  font: 800 clamp(22px, 3.8vw, 42px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .2s both;\n}\n.pp-title-brand {\n  display: inline-flex;\n  align-items: baseline;\n  flex: none;\n  font: inherit;\n  line-height: 1;\n  letter-spacing: 0;\n}\n.pp-brand-xcell {\n  color: #E60012;\n}\n.pp-brand-family {\n  color: #fff;\n}\n.pp-title-divider {\n  margin-left: .18em;\n  color: #fff;\n  opacity: .55;\n}\n.pp-title-name {\n  margin-left: .18em;\n}\n.pp-tagline {\n  font-size: 17px;\n  color: #c7d5ec;\n  max-width: 60ch;\n  margin-bottom: 10px;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .3s both;\n}\n.pp-tagline-support {\n  width: fit-content;\n  margin: 0 0 16px;\n  color: #67B7FF;\n  font: 700 clamp(18px, 1.7vw, 23px)/1.35 var(--body);\n  text-wrap: balance;\n}\n.pp-typewriter {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  margin: 0 0 10px;\n  color: #69B6FF;\n  font: 600 clamp(17px, 1.4vw, 22px)/1.35 var(--body);\n}\n.pp-typewriter i {\n  display: inline-block;\n  width: 2px;\n  height: 1.15em;\n  margin-left: 4px;\n  background: currentColor;\n  animation: ppcursor .75s steps(1, end) infinite;\n}\n.pp-hero > .wrap > .pp-crumb,\n.pp-hero > .wrap > h1,\n.pp-hero > .wrap > .pp-tagline,\n.pp-hero > .wrap > .pp-tagline-support,\n.pp-hero > .wrap > .pp-typewriter,\n.pp-hero > .wrap > .pp-chips,\n.pp-hero > .wrap > .pp-hero-grid {\n  max-width: 58%;\n}\n.pp-hero-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 36px;\n  align-items: start;\n}\n.pp-hpoints {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  gap: 10px 32px;\n  width: fit-content;\n  max-width: 100%;\n  margin: 8px 0 18px;\n}\n.pp-hpoint {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 14px;\n  color: #cfe0f7;\n}\n.pp-hpoint .tick {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-hpoint .tick:before {\n  content: "\\2713";\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.pp-chips {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.pp-chip {\n  font: 600 12px var(--mono);\n  background: rgba(255, 255, 255, .1);\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 99px;\n  padding: 7px 16px;\n}\n.pp-chip.price {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .5);\n  color: #ffd9ac;\n}\n.hero-ctas {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .46s both;\n}\n.pp-trust {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body {\n  padding: 16px 0 35px 0;\n}\n.pp-sec {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 19px 0 16px 0;\n}\n.pp-sec:first-child {\n  margin-top: 0;\n}\n.pp-ov {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.m365-overview-copy {\n  max-width: 100%;\n}\n.pp-ov + .pp-ov {\n  margin-top: 14px;\n}\n.pp-ov b {\n  color: var(--navy);\n}\n.pp-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-stat {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: var(--ice);\n  text-align: center;\n}\n.pp-stat b {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.pp-stat span {\n  display: block;\n  margin-top: 5px;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-apps {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 26px;\n}\n.pp-app {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 16px 10px;\n  background: #fff;\n  text-align: center;\n  transition: .18s;\n}\n.pp-app:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.pp-app .ai {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  margin: 0 auto 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 800 18px var(--disp);\n  color: #fff;\n  letter-spacing: -.02em;\n}\n.pp-app b {\n  display: block;\n  font-size: 12.5px;\n  color: var(--navy);\n  font-weight: 600;\n  line-height: 1.3;\n}\n.pp-app span {\n  display: block;\n  font-size: 10.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.m365-video-grid {\n  width: min(1200px, 100%);\n  gap: 34px;\n  margin: 0 auto 38px;\n}\n.m365-video-grid .pv-item h4 {\n  margin: 16px 0 18px;\n}\n.m365-video-grid .pv-item h4 span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border: 1px solid #cfe0f5;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #f4f8ff);\n  box-shadow: 0 10px 24px rgba(7, 45, 96, .08);\n  color: var(--navy);\n  font: 800 13px/1 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.m365-video-grid .pv-frame {\n  border: 4px solid #fff;\n  border-radius: 7px;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, .45);\n}\n.pp-vids {\n  width: min(900px, 100%);\n  margin: 0 0 12px;\n}\n.pv-tabs {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.pv-tab {\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--slate);\n  font: 600 13.5px var(--body);\n  padding: 9px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .2s;\n}\n.pv-tab:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pv-tab.active {\n  background: var(--navy);\n  border-color: var(--navy);\n  color: #fff;\n}\n.pv-frame {\n  aspect-ratio: 16/9;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0E3A78 60%,\n      #0C4EA8);\n  position: relative;\n  box-shadow: 0 20px 50px rgba(4, 30, 66, .25);\n}\n.pv-frame iframe {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.pv-poster {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: transparent;\n}\n.pv-poster:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(4, 30, 66, .35),\n      rgba(4, 30, 66, .6));\n}\n.pv-play {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .95);\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding-left: 5px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .35);\n  transition: transform .2s;\n}\n.pv-poster:hover .pv-play {\n  transform: scale(1.08);\n  background: #fff;\n}\n.pv-plabel {\n  position: relative;\n  color: #fff;\n  font: 600 14px var(--body);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, .5);\n}\n.pv-note {\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 10px;\n}\n.pp-toggle-wrap {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n.pp-toggle {\n  display: inline-flex;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  padding: 4px;\n  background: var(--ice);\n}\n.pp-toggle button {\n  border: 0;\n  background: none;\n  font: 700 13px var(--body);\n  color: var(--slate);\n  padding: 9px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition:\n    background .18s,\n    color .18s,\n    box-shadow .18s;\n}\n.pp-toggle button:hover:not(.active) {\n  color: var(--blue);\n}\n.pp-toggle button.active {\n  background: var(--blue);\n  color: #fff;\n  box-shadow: 0 3px 8px rgba(21, 101, 216, .22);\n}\n.pp-toggle button:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: 2px;\n}\n.pp-plans {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.ppl {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 24px 20px;\n  background: #fff;\n  text-align: center;\n  position: relative;\n  transition:\n    transform .3s,\n    box-shadow .3s,\n    border-color .3s;\n  display: flex;\n  flex-direction: column;\n}\n.ppl:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 36px rgba(4, 30, 66, .1);\n}\n.ppl.hot {\n  border-color: var(--blue);\n}\n.ppl .tag {\n  position: absolute;\n  top: -11px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--blue);\n  color: #fff;\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.ppl.hot .tag {\n  background: var(--orange);\n}\n.ppl h4 {\n  font-family: var(--disp);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.ppl .sub {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.ppl .amt {\n  font-family: var(--mono);\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.ppl .amt b {\n  font-size: 26px;\n}\n.ppl .amt span {\n  display: block;\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.ppl .save {\n  font: 600 11px var(--mono);\n  color: #128A42;\n  background: rgba(29, 168, 85, .1);\n  border-radius: 99px;\n  padding: 3px 10px;\n  display: inline-block;\n  margin-bottom: 14px;\n}\n.ppl ul {\n  list-style: none;\n  text-align: left;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.ppl ul li {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.ppl ul li:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--ok);\n  font-weight: 700;\n  font-size: 11px;\n}\n.ppl .btns {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ppl .btn {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.quote-quantity {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  border: 1px solid #bfd3f3;\n  border-radius: 7px;\n  background: #f8fbff;\n  overflow: hidden;\n}\n.quote-quantity button {\n  width: 44px;\n  height: 100%;\n  flex: none;\n  border: 0;\n  background: transparent;\n  color: #075dbd;\n  font: 500 20px/1 var(--body);\n  cursor: pointer;\n}\n.quote-quantity button:first-child {\n  border-right: 1px solid #bfd3f3;\n  color: #91a4bd;\n}\n.quote-quantity button:last-child {\n  border-left: 1px solid #bfd3f3;\n}\n.quote-quantity button:hover {\n  background: #edf4ff;\n  color: var(--blue);\n}\n.quote-quantity button:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: -3px;\n}\n.quote-quantity :is(output, input[xhQuantityInput]) {\n  flex: 1;\n  min-width: 54px;\n  color: #071c39;\n  font: 500 16px var(--body);\n  text-align: center;\n}\n.billing-choices {\n  display: grid;\n  gap: 9px;\n  margin: 0 0 16px;\n  text-align: left;\n}\n.billing-gst-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 0 0 12px;\n  text-align: left;\n  font: 700 10px/1.5 var(--mono);\n  color: var(--slate);\n}\n.billing-gst-toggle {\n  display: flex;\n  gap: 3px;\n  padding: 3px;\n  border: 1px solid #d3def0;\n  border-radius: 8px;\n  background: #f1f5fa;\n}\n.billing-gst-toggle button {\n  border: 0;\n  border-radius: 6px;\n  padding: 6px 8px;\n  background: transparent;\n  color: #506079;\n  cursor: pointer;\n  font: 700 10px/1.4 var(--mono);\n  white-space: nowrap;\n}\n.billing-gst-toggle button.active {\n  background: #041e42;\n  color: #fff;\n}\n.billing-gst-toggle button:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 2px;\n}\n.billing-tax-note {\n  display: block;\n  margin-top: 3px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-choice {\n  width: 100%;\n  border: 1px solid #d3def0;\n  border-radius: 9px;\n  background: #fff;\n  padding: 12px;\n  text-align: left;\n  color: #506079;\n  cursor: pointer;\n  transition:\n    border-color .18s,\n    box-shadow .18s,\n    background .18s;\n  font: inherit;\n}\n.billing-choice.upfront {\n  background: #f2fbf7;\n  color: #008362;\n}\n.billing-choice.chosen {\n  border-color: currentColor;\n  box-shadow: 0 0 0 1px currentColor;\n}\n.billing-choice:hover {\n  box-shadow: 0 3px 12px #041e420d;\n}\n.billing-choice:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 2px;\n}\n.billing-choice-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font: 700 10px/1.5 var(--mono);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.billing-indicator {\n  display: grid;\n  place-items: center;\n  width: 17px;\n  height: 17px;\n  border: 1px solid currentColor;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.billing-list-price {\n  margin: 0 0 10px;\n  color: var(--slate);\n  text-align: left;\n  font: 500 11px/1.5 var(--mono);\n}\n.billing-list-price s {\n  color: #e60012;\n}\n.business-basic-detail-link:hover {\n  color: var(--blue);\n  text-decoration: underline;\n}\n.business-basic-detail-link:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 4px;\n  border-radius: 3px;\n}\n.billing-choice-status {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.billing-discount-badge {\n  padding: 3px 5px;\n  border-radius: 3px;\n  background: #008362;\n  color: #fff;\n  font: 700 9px/1.2 var(--mono);\n  white-space: nowrap;\n}\n.billing-unit-price {\n  display: block;\n  margin-top: 3px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-unit-price b {\n  font-size: 20px;\n}\n.billing-annual-price,\n.billing-note {\n  display: block;\n  font: 400 10px/1.6 var(--mono);\n}\n.billing-seat-total {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  border-top: 1px solid #d3def0;\n  padding-top: 9px;\n  margin-top: 10px;\n  font: 500 10px/1.6 var(--mono);\n}\n.billing-seat-total > span:first-child {\n  flex-shrink: 0;\n}\n.billing-seat-amount {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 2px 9px;\n  text-align: right;\n}\n.billing-seat-amount b {\n  font-weight: 700;\n}\n.quantity-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--navy);\n}\n.checkout-term-note {\n  font-size: 10px;\n  line-height: 1.5;\n  color: var(--slate);\n}\n.quote-quantity button:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n.billing-footnote {\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--slate);\n  margin: 14px 0;\n}\n.pp-plans2 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n  margin-top: 14px;\n}\n.ppl2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 22px;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.ppl2 b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n}\n.ppl2 span {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.ppl2 .amt {\n  font: 700 22px var(--mono);\n  color: var(--navy);\n  white-space: nowrap;\n}\n.ppl2 .amt em {\n  display: block;\n  font: 500 10.5px var(--mono);\n  color: var(--slate);\n  font-style: normal;\n}\n.pp-planstrip {\n  margin-top: 14px;\n  border: 1.5px dashed var(--line);\n  border-radius: 14px;\n  padding: 20px 24px;\n  background: var(--ice);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.pp-planstrip b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n}\n.pp-planstrip span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-tablewrap {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  margin-top: 14px;\n}\n.pp-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 600px;\n}\n.pp-table th {\n  background: var(--ice);\n  font: 600 11.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-table th:not(:first-child) {\n  text-align: right;\n}\n.pp-table td {\n  padding: 15px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 14px;\n  color: var(--slate);\n}\n.pp-table tr:last-child td {\n  border-bottom: 0;\n}\n.pp-table td:first-child {\n  font-family: var(--disp);\n  font-weight: 600;\n  color: var(--navy);\n  font-size: 14.5px;\n}\n.pp-table td:not(:first-child):not(:last-child) {\n  text-align: right;\n  font-family: var(--mono);\n  color: var(--navy);\n  font-weight: 600;\n}\n.pp-table td:last-child {\n  text-align: right;\n}\n.pp-addons {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 14px;\n}\n.pp-addon {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: #fff;\n  transition: .15s;\n}\n.pp-addon:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .08);\n}\n.pp-addon b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.pp-addon span {\n  font: 700 15px var(--mono);\n  color: var(--blue);\n}\n.pp-addon em {\n  font: 500 11px var(--mono);\n  color: var(--slate);\n  font-style: normal;\n  margin-left: 3px;\n}\n.pp-feats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-feat {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .15s;\n  background: #fff;\n}\n.pp-feat:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n}\n.pp-feat .fic {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 800 16px var(--disp);\n  color: #fff;\n  letter-spacing: -.02em;\n}\n.pp-feat p {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-feat p b {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 3px;\n}\n.pp-feat ul {\n  list-style: none;\n  margin: 8px 0 0;\n}\n.pp-feat ul li {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 3px 0 3px 15px;\n  position: relative;\n}\n.pp-feat ul li:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--blue);\n  font-weight: 700;\n}\n.pp-bens {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.pb {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n}\n.pb .ic {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: rgba(29, 168, 85, .12);\n  color: #128A42;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.pb p {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pb p b {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 2px;\n}\n.pp-suite {\n  margin-top: 18px;\n  border-radius: 18px;\n  padding: 34px;\n  background:\n    linear-gradient(\n      115deg,\n      var(--navy),\n      #0E3A78 70%);\n  color: #fff;\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 34px;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.pp-suite:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .08) 1px,\n      transparent 1px);\n  background-size: 38px 38px;\n  pointer-events: none;\n}\n.pp-suite > * {\n  position: relative;\n  z-index: 1;\n}\n.pp-suite .lbl {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 10px;\n}\n.pp-suite h3 {\n  font-family: var(--disp);\n  font-size: clamp(21px, 2.4vw, 27px);\n  font-weight: 700;\n  line-height: 1.25;\n  margin-bottom: 12px;\n  letter-spacing: -.02em;\n}\n.pp-suite p {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  line-height: 1.7;\n  margin-bottom: 18px;\n}\n.pp-suitegrid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 9px;\n  margin-bottom: 20px;\n}\n.pp-suitegrid span {\n  font-size: 13px;\n  color: #e2ecff;\n  background: rgba(255, 255, 255, .07);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 10px;\n  padding: 9px 13px;\n}\n.pp-suitecard {\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 16px;\n  padding: 26px;\n  text-align: center;\n}\n.pp-suitecard .cp-mark {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  border-radius: 16px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 12px 30px rgba(124, 58, 237, .4);\n  overflow: hidden;\n}\n.pp-suitecard .cp-mark img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: inherit;\n}\n.pp-suitecard b {\n  display: block;\n  font: 800 21px var(--disp);\n  color: #fff;\n  line-height: 1.25;\n  letter-spacing: -.02em;\n}\n.pp-suitecard span {\n  display: block;\n  margin-top: 10px;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  color: #9FBEEC;\n  line-height: 1.9;\n}\n.microsoft-365-protection {\n  width: 100%;\n  margin: 38px 0 54px;\n  padding-inline: 0;\n  background: #f0f3fb;\n  box-shadow: 0 0 0 100vmax #f0f3fb;\n  clip-path: inset(0 -100vmax);\n}\n.pp-uses {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-auto-rows: 1fr;\n  gap: 12px;\n  align-items: stretch;\n}\n.pu {\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: var(--ice);\n  font-size: 13.5px;\n  color: var(--ink);\n  min-width: 0;\n  height: 100%;\n}\n.pu-ic {\n  font-size: 19px;\n  display: block;\n  margin-bottom: 6px;\n}\n.pu b {\n  display: block;\n  color: var(--navy);\n  margin-bottom: 3px;\n  font-size: 14px;\n}\n.pp-secrows {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin: 20px 0 6px;\n}\n.psrow {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--line);\n}\n.psrow span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.psrow b {\n  font: 600 13.5px var(--mono);\n  color: var(--navy);\n  text-align: right;\n}\n.pp-secfoot {\n  margin: 18px 0 0;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-why {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.pw {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: var(--ice);\n}\n.pw-ic {\n  display: flex;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid var(--line);\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.pw b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.pw span {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-badge {\n  margin-top: 16px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.pp-badge .seal {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 18px 22px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n}\n.pp-badge .seal small {\n  font: 600 9px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.pp-badge .txt b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-badge .txt span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-badge .txt em {\n  display: block;\n  margin-top: 6px;\n  font: 600 12px var(--mono);\n  color: var(--blue);\n  font-style: normal;\n}\n.pp-tcards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.tcard {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .06);\n  transition: transform .3s;\n}\n.tcard:hover {\n  transform: translateY(-4px);\n}\n.quote-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-family: Georgia, serif;\n}\n.tav {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7C3AED);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 700 22px var(--disp);\n}\n.tname {\n  text-align: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 16px;\n}\n.trole {\n  text-align: center;\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.tstars {\n  text-align: center;\n  color: var(--orange);\n  letter-spacing: 2px;\n  margin-bottom: 14px;\n}\n.tcard p {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0;\n}\n.pp-faq {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.faq2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open .faq2-ic {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open .faq2-a {\n  max-height: 460px;\n}\n.faq2-a p {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.pp-blog {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.bl {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s;\n  display: block;\n}\n.bl:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.bl .kicker {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 8px;\n}\n.bl h3 {\n  font-family: var(--disp);\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--navy);\n  line-height: 1.35;\n  margin-bottom: 8px;\n}\n.bl p {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.bl .more {\n  display: inline-block;\n  margin-top: 10px;\n  font: 600 12.5px var(--body);\n  color: var(--blue);\n}\n.pp-blogbtn-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 22px 0 4px;\n}\n.pp-blogbtn {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border: none;\n  padding: 12px 26px;\n  border-radius: 99px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .22);\n  transition: transform .25s, box-shadow .25s;\n}\n.pp-blogbtn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(21, 101, 216, .3);\n  color: #fff;\n}\n.pp-contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n  margin-top: 18px;\n}\n.pp-ccard {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: var(--ice);\n}\n.pp-ccard h3 {\n  font-family: var(--disp);\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pp-ccard > p {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.pp-clist {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.pp-clist a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .15s;\n}\n.pp-clist a:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n}\n.pp-clist .ci {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.pp-clist b {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.pp-clist span {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-form {\n  display: grid;\n  gap: 12px;\n}\n.pp-form label {\n  display: block;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.pp-form input,\n.pp-form textarea {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.pp-form input:focus,\n.pp-form textarea:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.pp-form textarea {\n  min-height: 88px;\n  resize: vertical;\n}\n.pp-form .row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.pp-formnote {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.pp-ctabtns {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pp-proof {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 22px;\n}\n.pp-proof span {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n.newsletter {\n  background: var(--ice);\n  border-top: 1px solid var(--line);\n  padding: 19px 0 19px 0;\n}\n.newsletter-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.newsletter h2 {\n  font-size: clamp(18px, 2vw, 23px);\n  margin: 0;\n  max-width: 52ch;\n  color: var(--navy);\n}\n.newsletter-form {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.newsletter-form input {\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font: 400 14px var(--body);\n  min-width: 260px;\n  background: #fff;\n}\n.newsletter-form input:focus {\n  outline: none;\n  border-color: var(--blue);\n}\n.newsletter-form button {\n  background: var(--orange);\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 24px;\n  font: 600 14px var(--body);\n  cursor: pointer;\n  transition: .15s;\n}\n.newsletter-form button:hover {\n  background: #e97a08;\n}\nfooter {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top {\n  margin-bottom: 28px;\n}\n.nf-logo {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo img {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag em {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n}\n.nf-rows {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 120px;\n  flex: none;\n  margin: 0;\n}\n.nf-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links a {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s;\n}\n.nf-links a:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links a:hover {\n  color: #fff;\n}\n.nf-cert-row {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso b {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 200;\n}\n.back-to-top {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s;\n}\n.back-to-top.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n@keyframes pprise {\n  0% {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes ppcursor {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes illusfloat {\n  0%, to {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes pphgrid {\n  to {\n    background-position: 44px 44px;\n  }\n}\n@keyframes pphscan {\n  0%, to {\n    transform: translateY(-10%);\n    opacity: .5;\n  }\n  50% {\n    transform: translateY(230%);\n    opacity: 1;\n  }\n}\n@keyframes aflow1 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(90px, 50px) scale(1.18);\n  }\n}\n@keyframes aflow2 {\n  0% {\n    transform: translate(0) scale(1.1);\n  }\n  to {\n    transform: translate(-80px, 60px) scale(.95);\n  }\n}\n@keyframes aflow3 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(60px, -45px) scale(1.22);\n  }\n}\n@keyframes wmSpin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes drift {\n  0%, to {\n    transform: translate(0) scale(1);\n  }\n  50% {\n    transform: translate(34px, -26px) scale(1.08);\n  }\n}\n@keyframes glow {\n  0%, to {\n    box-shadow: 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav {\n    display: none;\n  }\n  .xh-mobile-toggle {\n    display: flex;\n  }\n  .pp-feats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-apps {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .pp-addons {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1000px) {\n  .pp-bens {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-why,\n  .pp-blog,\n  .pp-uses {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-plans {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .pp-hero > .wrap > .pp-crumb,\n  .pp-hero > .wrap > h1,\n  .pp-hero > .wrap > .pp-tagline,\n  .pp-hero > .wrap > .pp-tagline-support,\n  .pp-hero > .wrap > .pp-typewriter,\n  .pp-hero > .wrap > .pp-chips,\n  .pp-hero > .wrap > .pp-hero-grid {\n    max-width: 100%;\n  }\n  .pph-scene {\n    position: relative;\n    width: 100%;\n    top: 0;\n    padding: 8px 0 4px;\n    order: -1;\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n  .pph-illus-img {\n    width: 58%;\n    max-width: 260px;\n  }\n  .pph-map .wm-ring {\n    display: none;\n  }\n  .pp-suite {\n    grid-template-columns: 1fr;\n    padding: 28px;\n  }\n  .pp-contact {\n    grid-template-columns: 1fr;\n  }\n  .pp-tcards {\n    grid-template-columns: 1fr;\n  }\n  .pp-addons {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 820px) {\n  .pp-hero {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n@media (max-width: 760px) {\n  .pp-cta {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 28px 22px;\n  }\n  .pp-cta-copy h3 {\n    font-size: 19px;\n  }\n  .pp-cta .pp-cta-buddha-link {\n    grid-column: 1;\n    grid-row: 3;\n    width: 72px;\n    height: 72px;\n    justify-self: end;\n  }\n  .pp-feats,\n  .pp-bens,\n  .pp-plans,\n  .pp-plans2,\n  .pp-why,\n  .pp-blog,\n  .pp-uses,\n  .pp-secrows,\n  .pp-faq,\n  .pp-stats {\n    grid-template-columns: 1fr;\n  }\n  .pp-apps {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-hero {\n    min-height: 340px;\n    padding: 40px 0;\n  }\n  .pp-hero h1 {\n    font-size: 26px;\n  }\n  .pp-tagline {\n    font-size: 15px;\n  }\n  .pp-body {\n    padding: 20px 0 28px 0;\n  }\n  .hero-ctas .btn {\n    width: 100%;\n    text-align: center;\n  }\n  .pv-frame {\n    border-radius: 12px;\n  }\n  .m365-video-grid {\n    grid-template-columns: 1fr;\n  }\n  .nf-bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .newsletter-form {\n    width: 100%;\n  }\n  .newsletter-form input {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 620px) {\n  .pp-hpoints {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n  .pp-form .row2 {\n    grid-template-columns: 1fr;\n  }\n  .pp-addons {\n    grid-template-columns: 1fr;\n  }\n  .xh-nav-wrap {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand img {\n    height: 52px;\n  }\n  .xh-actions .btn {\n    display: none;\n  }\n  .xh-icon-btn,\n  .xh-mobile-toggle {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .pp-suite {\n    padding: 22px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pph-grid,\n  .pph-aur,\n  .pph-scan,\n  .pph-map .wm-ring,\n  .pph-illus-img,\n  .orb,\n  .btn-primary,\n  .pp-crumb,\n  .pp-hero h1,\n  .pp-tagline,\n  .hero-ctas {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=microsoft-365-smb.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Microsoft365SmbPage, { className: "Microsoft365SmbPage", filePath: "src/app/pages/microsoft-365-smb.page.ts", lineNumber: 25 });
})();
export {
  Microsoft365SmbPage
};
//# sourceMappingURL=chunk-4IWICJYS.js.map
