import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  EMAIL_VALIDATORS
} from "./chunk-TUHBAIE6.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EVL5GQOW.js";
import "./chunk-LN7P5EZP.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/portal-login.page.ts
var _forTrack0 = ($index, $item) => $item.title;
function PortalLoginPage_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function PortalLoginPage_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PortalLoginPage_For_50_Template_button_click_0_listener() {
      const \u0275$index_85_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setService(\u0275$index_85_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r5 = ctx.$implicit;
    const \u0275$index_85_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.activeService() === \u0275$index_85_r3);
    \u0275\u0275attribute("aria-label", "Show " + service_r5.title);
  }
}
function PortalLoginPage_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function PortalLoginPage_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
var PortalLoginPage = class _PortalLoginPage {
  fb = inject(FormBuilder);
  page = inject(ActivatedRoute).snapshot.data;
  form = this.fb.nonNullable.group({
    email: ["", EMAIL_VALIDATORS],
    password: ["", Validators.required],
    remember: [false]
  });
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  activeService = signal(0, ...ngDevMode ? [{ debugName: "activeService" }] : []);
  serviceSlides = [
    { icon: "\u25A6", eyebrow: "Built for every workload", title: "Performance Cloud", description: "Run business-critical workloads on secure, high-performance cloud infrastructure that scales with you.", tags: ["Compute", "Storage", "GPU", "Auto Scaling"] },
    { icon: "\u25C7", eyebrow: "Always-on protection", title: "Managed Cybersecurity", description: "Protect users, endpoints and cloud workloads with 24\xD77 monitoring and expert-led threat response.", tags: ["SOC 24\xD77", "MDR", "EDR", "Threat Intel"] },
    { icon: "\u25A3", eyebrow: "Resilient by design", title: "Backup & Disaster Recovery", description: "Keep critical data protected and recover operations quickly with managed backup and disaster recovery.", tags: ["Acronis", "M365", "Geo-DR", "Immutable"] },
    { icon: "M", eyebrow: "Work from anywhere", title: "Managed Microsoft 365", description: "Simplify collaboration with migration, security, backup and ongoing Microsoft 365 management.", tags: ["Exchange", "Teams", "Backup", "Support"] }
  ];
  constructor() {
    inject(SeoService).set(`${this.page.heading} | XcellHost`, this.page.description, `/${this.page.type}-login/`);
  }
  togglePassword() {
    this.showPassword.update((show) => !show);
  }
  nextService(direction) {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index) {
    this.activeService.set(index);
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set("Enter a valid email address and password.");
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const value = this.form.getRawValue();
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: value.email.trim().toLowerCase(),
          password: value.password,
          remember: value.remember,
          loginType: this.page.type
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(data.message || "Invalid email or password.");
      window.location.assign(data.redirectUrl || "/dashboard");
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : "Unable to sign in. Please try again.");
    } finally {
      this.busy.set(false);
    }
  }
  static \u0275fac = function PortalLoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalLoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalLoginPage, selectors: [["xh-portal-login-page"]], decls: 118, vars: 18, consts: [[1, "portal-login-page"], [1, "login-layout"], [1, "login-showcase"], ["aria-hidden", "true", 1, "showcase-grid"], ["aria-hidden", "true", 1, "floating-icons"], [1, "cloud-icon"], [1, "chip-icon"], [1, "server-icon"], [1, "globe-icon"], [1, "database-icon"], [1, "device-icon"], ["routerLink", "/", "aria-label", "XcellHost home", 1, "showcase-logo"], ["src", "/assets/images/xcellhost-login-logo.png", "alt", "XcellHost \u2014 Cloud, Security and AI"], [1, "showcase-content"], [1, "showcase-badge"], [1, "service-card"], [1, "service-card-head"], ["aria-hidden", "true", 1, "service-icon"], [1, "service-title"], [1, "service-arrows"], ["type", "button", "aria-label", "Previous service", 3, "click"], ["type", "button", "aria-label", "Next service", 3, "click"], [1, "service-tags"], [1, "service-navigation"], ["aria-label", "Choose service slide", 1, "service-dots"], ["type", "button", 3, "active"], ["routerLink", "/category/cloud"], ["aria-hidden", "true"], ["aria-label", "Customer benefits", 1, "showcase-benefits"], [1, "login-panel"], [1, "form-content"], [3, "id"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], [1, "password-field"], ["formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", 3, "type"], ["type", "button", 3, "click"], [1, "login-options"], ["type", "checkbox", "formControlName", "remember"], ["href", "mailto:support@xcellhost.cloud?subject=Password%20reset"], ["role", "alert", 1, "form-error"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "signup-copy"], ["routerLink", "/signup"], ["aria-label", "Login support links"], ["routerLink", "/company/terms-of-service"], ["routerLink", "/company/privacy-policy"], ["href", "mailto:support@xcellhost.cloud"]], template: function PortalLoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "aside", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "\u2601");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "\u25A6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "\u25A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "\u25CE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "\u25B1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16, "\u25AF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "a", 11);
      \u0275\u0275element(18, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "span", 14);
      \u0275\u0275text(21, "XcellHost Cloud Platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h2");
      \u0275\u0275text(23, "Enterprise cloud");
      \u0275\u0275element(24, "br");
      \u0275\u0275text(25, "infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Powerful, scalable and secure cloud services built for modern businesses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "article", 15)(29, "div", 16)(30, "span", 17);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "small");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h3");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 19)(38, "button", 20);
      \u0275\u0275listener("click", function PortalLoginPage_Template_button_click_38_listener() {
        return ctx.nextService(-1);
      });
      \u0275\u0275text(39, "\u2039");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 21);
      \u0275\u0275listener("click", function PortalLoginPage_Template_button_click_40_listener() {
        return ctx.nextService(1);
      });
      \u0275\u0275text(41, "\u203A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 22);
      \u0275\u0275repeaterCreate(45, PortalLoginPage_For_46_Template, 3, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 23)(48, "div", 24);
      \u0275\u0275repeaterCreate(49, PortalLoginPage_For_50_Template, 1, 3, "button", 25, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 26);
      \u0275\u0275text(52, "More Services ");
      \u0275\u0275elementStart(53, "span", 27);
      \u0275\u0275text(54, "\u2197");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 28)(56, "span");
      \u0275\u0275text(57, "\u25C9 Expert Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "\u25A3 Knowledge Base");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "\u2659 Easy Onboarding");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "section", 29)(63, "div", 30)(64, "header")(65, "span");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h1", 31);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "form", 32);
      \u0275\u0275listener("ngSubmit", function PortalLoginPage_Template_form_ngSubmit_71_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(72, "label")(73, "span");
      \u0275\u0275text(74, "Email address ");
      \u0275\u0275elementStart(75, "i");
      \u0275\u0275text(76, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "input", 33);
      \u0275\u0275conditionalCreate(78, PortalLoginPage_Conditional_78_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "label")(80, "span");
      \u0275\u0275text(81, "Password ");
      \u0275\u0275elementStart(82, "i");
      \u0275\u0275text(83, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "span", 34);
      \u0275\u0275element(85, "input", 35);
      \u0275\u0275elementStart(86, "button", 36);
      \u0275\u0275listener("click", function PortalLoginPage_Template_button_click_86_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275elementStart(87, "span", 27);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(89, PortalLoginPage_Conditional_89_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 37)(91, "label");
      \u0275\u0275element(92, "input", 38);
      \u0275\u0275text(93, " Remember me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 39);
      \u0275\u0275text(95, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "p", 40);
      \u0275\u0275text(97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 41);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "p", 42);
      \u0275\u0275text(101, "New to XcellHost? ");
      \u0275\u0275elementStart(102, "a", 43);
      \u0275\u0275text(103, "Create an account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "footer")(105, "nav", 44)(106, "a", 45);
      \u0275\u0275text(107, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "a", 46);
      \u0275\u0275text(111, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 47);
      \u0275\u0275text(115, "Get Support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "small");
      \u0275\u0275text(117, "\xA9 2026 XcellHost Cloud Services Pvt. Ltd. All rights reserved.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-labelledby", ctx.page.type + "-login-title");
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].title);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].description);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.serviceSlides[ctx.activeService()].tags);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.serviceSlides);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.page.portal);
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.page.type + "-login-title");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.page.heading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.page.description);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 78 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showPassword() ? "Hide" : "Show");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 89 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Signing in\u2026" : "Sign In", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.portal-login-page[_ngcontent-%COMP%], \n.login-layout[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n}\n.portal-login-page[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #fff;\n}\n.login-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 60fr) minmax(520px, 40fr);\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.login-showcase[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 40px 32px 30px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .16),\n      transparent 35%),\n    linear-gradient(\n      135deg,\n      #081329 0%,\n      #030916 72%,\n      #071126 100%);\n  color: #fff;\n}\n.showcase-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: .28;\n  background-image:\n    linear-gradient(rgba(74, 101, 151, .24) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(74, 101, 151, .24) 1px,\n      transparent 1px);\n  background-size: 46px 46px;\n}\n.floating-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  color: rgba(255, 255, 255, .07);\n  font: 44px/1 Arial, sans-serif;\n}\n.floating-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.cloud-icon[_ngcontent-%COMP%] {\n  left: 43%;\n  top: 7%;\n}\n.chip-icon[_ngcontent-%COMP%] {\n  left: 36%;\n  top: 17%;\n  font-size: 31px;\n}\n.server-icon[_ngcontent-%COMP%] {\n  left: 51%;\n  top: 31%;\n  font-size: 37px;\n}\n.globe-icon[_ngcontent-%COMP%] {\n  left: 55%;\n  top: 45%;\n  font-size: 50px;\n}\n.database-icon[_ngcontent-%COMP%] {\n  left: 42%;\n  top: 57%;\n  font-size: 47px;\n}\n.device-icon[_ngcontent-%COMP%] {\n  left: 48%;\n  top: 75%;\n  font-size: 47px;\n}\n.showcase-logo[_ngcontent-%COMP%], \n.showcase-content[_ngcontent-%COMP%], \n.showcase-benefits[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.showcase-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: max-content;\n}\n.showcase-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 190px;\n  height: auto;\n}\n.showcase-content[_ngcontent-%COMP%] {\n  width: min(660px, 72%);\n  max-width: none;\n  margin: auto 0;\n}\n.showcase-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px 24px;\n  border-radius: 999px;\n  background: #214898;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n}\n.showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 21px 0 10px;\n  color: #fff;\n  font-size: clamp(34px, 3vw, 48px);\n  line-height: 1.04;\n  letter-spacing: -.035em;\n}\n.showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 610px;\n  margin: 0 0 28px;\n  color: rgba(255, 255, 255, .57);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.55;\n}\n.service-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 270px;\n  padding: 29px 29px 27px;\n  border: 1px solid rgba(93, 128, 191, .26);\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 52, 82, .68),\n      rgba(22, 31, 51, .7));\n  box-shadow: inset 0 -3px 0 #244ba0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.service-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.service-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 60px;\n  height: 60px;\n  flex: 0 0 auto;\n  place-items: center;\n  border: 1px solid rgba(64, 113, 215, .38);\n  border-radius: 11px;\n  background: rgba(24, 53, 111, .32);\n  color: #2e63d4;\n  font-size: 28px;\n}\n.service-title[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.service-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #2760c7;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.service-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1.1;\n}\n.service-arrows[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.service-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 33px;\n  height: 33px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .07);\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n}\n.service-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 22px 0;\n  color: rgba(255, 255, 255, .59);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.65;\n}\n.service-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.service-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, .06);\n  color: rgba(255, 255, 255, .8);\n  font-size: 11px;\n  font-weight: 700;\n}\n.service-tags[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #2d61ca;\n}\n.service-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 18px;\n}\n.service-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n}\n.service-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  padding: 0;\n  border: 0;\n  border-radius: 7px;\n  background: rgba(255, 255, 255, .3);\n  cursor: pointer;\n}\n.service-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 25px;\n  background: #2857b7;\n}\n.service-navigation[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  border: 1px solid rgba(255, 255, 255, .27);\n  border-radius: 6px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.showcase-benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-top: auto;\n}\n.showcase-benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .82);\n  font-size: 10px;\n  font-weight: 700;\n}\n.login-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  padding: 36px clamp(38px, 5vw, 96px) 18px;\n  background: #fff;\n  color: #30354e;\n}\n.form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  margin: auto;\n}\n.form-content[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-content[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: #30354e;\n  font: 700 clamp(30px, 2.3vw, 38px)/1.15 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.form-content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666b80;\n  font-size: 14px;\n}\n.form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: block;\n  margin-bottom: 7px;\n  color: #4d5064;\n  font-size: 13px;\n}\n.form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e53935;\n  font-style: normal;\n}\n.form-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]) {\n  width: 100%;\n  height: 57px;\n  padding: 0 14px;\n  border: 1px solid #c8cad3;\n  border-radius: 6px;\n  outline: 0;\n  background: #fff;\n  color: #30354e;\n  font: 500 14px var(--body,sans-serif);\n  transition: .18s;\n}\n.form-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):focus {\n  border-color: #1d47a0;\n  box-shadow: 0 0 0 3px rgba(29, 71, 160, .1);\n}\n.form-content[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #d93025;\n}\n.form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #d93025;\n  font-size: 10.5px;\n}\n.password-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 58px !important;\n}\n.password-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  padding: 5px;\n  border: 0;\n  background: transparent;\n  color: #31384e;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.login-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #666b80;\n  font-size: 13px;\n}\n.login-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.login-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #214b9e;\n}\n.login-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.signup-copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #053a9f;\n  font-weight: 700;\n  text-decoration: none;\n}\n.form-error[_ngcontent-%COMP%] {\n  min-height: 14px;\n  margin: -3px 0;\n  color: #d93025;\n  font-size: 11px;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  border: 0;\n  border-radius: 6px;\n  background: #214b9e;\n  color: #fff;\n  font: 700 14px var(--body,sans-serif);\n  cursor: pointer;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  background: #163c88;\n}\n.submit-button[_ngcontent-%COMP%]:disabled {\n  opacity: .55;\n  cursor: wait;\n}\n.signup-copy[_ngcontent-%COMP%] {\n  margin: 13px 0 0;\n  color: #6b6f80;\n  font-size: 13px;\n  text-align: center;\n}\n.login-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n  padding-top: 16px;\n  border-top: 1px solid #e0e1e6;\n  color: #9a9daa;\n  text-align: center;\n}\n.login-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 7px;\n  font-size: 11px;\n}\n.login-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #073a94;\n  text-decoration: none;\n}\n.login-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 13px;\n  font-size: 10px;\n}\n@media (max-width: 1100px) {\n  .login-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 55fr) minmax(500px, 45fr);\n  }\n  .showcase-content[_ngcontent-%COMP%] {\n    width: 88%;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n  .login-panel[_ngcontent-%COMP%] {\n    padding-inline: 36px;\n  }\n}\n@media (max-width: 760px) {\n  .login-layout[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .login-showcase[_ngcontent-%COMP%] {\n    min-height: 500px;\n    padding: 25px 22px;\n  }\n  .showcase-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n  .showcase-content[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 55px 0 35px;\n  }\n  .showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 22px;\n  }\n  .showcase-benefits[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .login-panel[_ngcontent-%COMP%] {\n    min-height: 650px;\n    padding: 45px 22px 18px;\n  }\n  .form-content[_ngcontent-%COMP%] {\n    margin: 0 auto 55px;\n  }\n}\n@media (max-width: 430px) {\n  .login-showcase[_ngcontent-%COMP%] {\n    min-height: 460px;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .service-navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .showcase-content[_ngcontent-%COMP%] {\n    margin: auto 0;\n  }\n  .showcase-benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 9px;\n  }\n  .login-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=portal-login.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalLoginPage, [{
    type: Component,
    args: [{ selector: "xh-portal-login-page", standalone: true, imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="portal-login-page">\r
  <section class="login-layout" [attr.aria-labelledby]="page.type + '-login-title'">\r
    <aside class="login-showcase">\r
      <div class="showcase-grid" aria-hidden="true"></div>\r
      <div class="floating-icons" aria-hidden="true">\r
        <span class="cloud-icon">\u2601</span><span class="chip-icon">\u25A6</span><span class="server-icon">\u25A4</span>\r
        <span class="globe-icon">\u25CE</span><span class="database-icon">\u25B1</span><span class="device-icon">\u25AF</span>\r
      </div>\r
\r
      <a class="showcase-logo" routerLink="/" aria-label="XcellHost home">\r
        <img src="/assets/images/xcellhost-login-logo.png" alt="XcellHost \u2014 Cloud, Security and AI" />\r
      </a>\r
\r
      <div class="showcase-content">\r
        <span class="showcase-badge">XcellHost Cloud Platform</span>\r
        <h2>Enterprise cloud<br />infrastructure</h2>\r
        <p>Powerful, scalable and secure cloud services built for modern businesses.</p>\r
\r
        <article class="service-card">\r
          <div class="service-card-head">\r
            <span class="service-icon" aria-hidden="true">{{ serviceSlides[activeService()].icon }}</span>\r
            <div class="service-title">\r
              <small>{{ serviceSlides[activeService()].eyebrow }}</small>\r
              <h3>{{ serviceSlides[activeService()].title }}</h3>\r
            </div>\r
            <div class="service-arrows">\r
              <button type="button" aria-label="Previous service" (click)="nextService(-1)">&#8249;</button>\r
              <button type="button" aria-label="Next service" (click)="nextService(1)">&#8250;</button>\r
            </div>\r
          </div>\r
          <p>{{ serviceSlides[activeService()].description }}</p>\r
          <div class="service-tags">\r
            @for (tag of serviceSlides[activeService()].tags; track tag) {\r
              <span><i aria-hidden="true"></i>{{ tag }}</span>\r
            }\r
          </div>\r
        </article>\r
\r
        <div class="service-navigation">\r
          <div class="service-dots" aria-label="Choose service slide">\r
            @for (service of serviceSlides; track service.title; let index = $index) {\r
              <button type="button" [class.active]="activeService() === index" [attr.aria-label]="'Show ' + service.title" (click)="setService(index)"></button>\r
            }\r
          </div>\r
          <a routerLink="/category/cloud">More Services <span aria-hidden="true">&#8599;</span></a>\r
        </div>\r
      </div>\r
\r
      <div class="showcase-benefits" aria-label="Customer benefits">\r
        <span>\u25C9 Expert Support</span><span>\u25A3 Knowledge Base</span><span>\u2659 Easy Onboarding</span>\r
      </div>\r
    </aside>\r
\r
    <section class="login-panel">\r
      <div class="form-content">\r
        <header>\r
          <span>{{ page.portal }}</span>\r
          <h1 [id]="page.type + '-login-title'">{{ page.heading }}</h1>\r
          <p>{{ page.description }}</p>\r
        </header>\r
\r
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
          <label>\r
            <span>Email address <i>*</i></span>\r
            <input type="email" formControlName="email" autocomplete="email" placeholder="you@company.com" />\r
            @if (form.controls.email.touched && form.controls.email.invalid) {\r
              <small>Enter a valid email address.</small>\r
            }\r
          </label>\r
          <label>\r
            <span>Password <i>*</i></span>\r
            <span class="password-field">\r
              <input [type]="showPassword() ? 'text' : 'password'" formControlName="password" autocomplete="current-password" placeholder="Enter your password" />\r
              <button type="button" [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'" (click)="togglePassword()">\r
                <span aria-hidden="true">{{ showPassword() ? 'Hide' : 'Show' }}</span>\r
              </button>\r
            </span>\r
            @if (form.controls.password.touched && form.controls.password.invalid) {\r
              <small>Password is required.</small>\r
            }\r
          </label>\r
          <div class="login-options">\r
            <label><input type="checkbox" formControlName="remember" /> Remember me</label>\r
            <a href="mailto:support@xcellhost.cloud?subject=Password%20reset">Forgot password?</a>\r
          </div>\r
          <p class="form-error" role="alert">{{ error() }}</p>\r
          <button class="submit-button" type="submit" [disabled]="busy()">\r
            {{ busy() ? 'Signing in\u2026' : 'Sign In' }}\r
          </button>\r
        </form>\r
\r
        <p class="signup-copy">New to XcellHost? <a routerLink="/signup">Create an account</a></p>\r
      </div>\r
\r
      <footer>\r
        <nav aria-label="Login support links">\r
          <a routerLink="/company/terms-of-service">Terms &amp; Conditions</a><span>|</span>\r
          <a routerLink="/company/privacy-policy">Privacy Policy</a><span>|</span>\r
          <a href="mailto:support@xcellhost.cloud">Get Support</a>\r
        </nav>\r
        <small>&copy; 2026 XcellHost Cloud Services Pvt. Ltd. All rights reserved.</small>\r
      </footer>\r
    </section>\r
  </section>\r
</main>\r
`, styles: ['/* src/app/pages/portal-login.page.css */\n:host {\n  display: block;\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n}\n* {\n  box-sizing: border-box;\n}\n.portal-login-page,\n.login-layout {\n  width: 100%;\n  min-height: 100vh;\n}\n.portal-login-page {\n  padding: 0;\n  background: #fff;\n}\n.login-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 60fr) minmax(520px, 40fr);\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.login-showcase {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 40px 32px 30px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .16),\n      transparent 35%),\n    linear-gradient(\n      135deg,\n      #081329 0%,\n      #030916 72%,\n      #071126 100%);\n  color: #fff;\n}\n.showcase-grid {\n  position: absolute;\n  inset: 0;\n  opacity: .28;\n  background-image:\n    linear-gradient(rgba(74, 101, 151, .24) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(74, 101, 151, .24) 1px,\n      transparent 1px);\n  background-size: 46px 46px;\n}\n.floating-icons {\n  position: absolute;\n  inset: 0;\n  color: rgba(255, 255, 255, .07);\n  font: 44px/1 Arial, sans-serif;\n}\n.floating-icons span {\n  position: absolute;\n}\n.cloud-icon {\n  left: 43%;\n  top: 7%;\n}\n.chip-icon {\n  left: 36%;\n  top: 17%;\n  font-size: 31px;\n}\n.server-icon {\n  left: 51%;\n  top: 31%;\n  font-size: 37px;\n}\n.globe-icon {\n  left: 55%;\n  top: 45%;\n  font-size: 50px;\n}\n.database-icon {\n  left: 42%;\n  top: 57%;\n  font-size: 47px;\n}\n.device-icon {\n  left: 48%;\n  top: 75%;\n  font-size: 47px;\n}\n.showcase-logo,\n.showcase-content,\n.showcase-benefits {\n  position: relative;\n  z-index: 1;\n}\n.showcase-logo {\n  display: block;\n  width: max-content;\n}\n.showcase-logo img {\n  display: block;\n  width: 190px;\n  height: auto;\n}\n.showcase-content {\n  width: min(660px, 72%);\n  max-width: none;\n  margin: auto 0;\n}\n.showcase-badge {\n  display: inline-flex;\n  padding: 6px 24px;\n  border-radius: 999px;\n  background: #214898;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n}\n.showcase-content > h2 {\n  margin: 21px 0 10px;\n  color: #fff;\n  font-size: clamp(34px, 3vw, 48px);\n  line-height: 1.04;\n  letter-spacing: -.035em;\n}\n.showcase-content > p {\n  max-width: 610px;\n  margin: 0 0 28px;\n  color: rgba(255, 255, 255, .57);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.55;\n}\n.service-card {\n  position: relative;\n  min-height: 270px;\n  padding: 29px 29px 27px;\n  border: 1px solid rgba(93, 128, 191, .26);\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 52, 82, .68),\n      rgba(22, 31, 51, .7));\n  box-shadow: inset 0 -3px 0 #244ba0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.service-card-head {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.service-icon {\n  display: grid;\n  width: 60px;\n  height: 60px;\n  flex: 0 0 auto;\n  place-items: center;\n  border: 1px solid rgba(64, 113, 215, .38);\n  border-radius: 11px;\n  background: rgba(24, 53, 111, .32);\n  color: #2e63d4;\n  font-size: 28px;\n}\n.service-title {\n  min-width: 0;\n}\n.service-title small {\n  display: block;\n  color: #2760c7;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.service-title h3 {\n  margin: 6px 0 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1.1;\n}\n.service-arrows {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.service-arrows button {\n  display: grid;\n  width: 33px;\n  height: 33px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .07);\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n}\n.service-card > p {\n  margin: 22px 0;\n  color: rgba(255, 255, 255, .59);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.65;\n}\n.service-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.service-tags span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 6px;\n  background: rgba(255, 255, 255, .06);\n  color: rgba(255, 255, 255, .8);\n  font-size: 11px;\n  font-weight: 700;\n}\n.service-tags i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #2d61ca;\n}\n.service-navigation {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 18px;\n}\n.service-dots {\n  display: flex;\n  gap: 7px;\n}\n.service-dots button {\n  width: 7px;\n  height: 7px;\n  padding: 0;\n  border: 0;\n  border-radius: 7px;\n  background: rgba(255, 255, 255, .3);\n  cursor: pointer;\n}\n.service-dots button.active {\n  width: 25px;\n  background: #2857b7;\n}\n.service-navigation > a {\n  padding: 5px 9px;\n  border: 1px solid rgba(255, 255, 255, .27);\n  border-radius: 6px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.showcase-benefits {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-top: auto;\n}\n.showcase-benefits span {\n  padding: 7px 12px;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .82);\n  font-size: 10px;\n  font-weight: 700;\n}\n.login-panel {\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  padding: 36px clamp(38px, 5vw, 96px) 18px;\n  background: #fff;\n  color: #30354e;\n}\n.form-content {\n  width: 100%;\n  max-width: 520px;\n  margin: auto;\n}\n.form-content > header {\n  margin-bottom: 22px;\n}\n.form-content > header > span {\n  display: none;\n}\n.form-content h1 {\n  margin: 0 0 9px;\n  color: #30354e;\n  font: 700 clamp(30px, 2.3vw, 38px)/1.15 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.form-content header p {\n  margin: 0;\n  color: #666b80;\n  font-size: 14px;\n}\n.form-content form {\n  display: grid;\n  gap: 14px;\n}\n.form-content form label {\n  display: block;\n}\n.form-content form label > span:first-child {\n  display: block;\n  margin-bottom: 7px;\n  color: #4d5064;\n  font-size: 13px;\n}\n.form-content form label i {\n  color: #e53935;\n  font-style: normal;\n}\n.form-content input:not([type=checkbox]) {\n  width: 100%;\n  height: 57px;\n  padding: 0 14px;\n  border: 1px solid #c8cad3;\n  border-radius: 6px;\n  outline: 0;\n  background: #fff;\n  color: #30354e;\n  font: 500 14px var(--body,sans-serif);\n  transition: .18s;\n}\n.form-content input:not([type=checkbox]):focus {\n  border-color: #1d47a0;\n  box-shadow: 0 0 0 3px rgba(29, 71, 160, .1);\n}\n.form-content input.ng-touched.ng-invalid {\n  border-color: #d93025;\n}\n.form-content form label > small {\n  display: block;\n  margin-top: 4px;\n  color: #d93025;\n  font-size: 10.5px;\n}\n.password-field {\n  position: relative;\n  display: block;\n}\n.password-field input {\n  padding-right: 58px !important;\n}\n.password-field button {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  padding: 5px;\n  border: 0;\n  background: transparent;\n  color: #31384e;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.login-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #666b80;\n  font-size: 13px;\n}\n.login-options label {\n  display: flex !important;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.login-options input {\n  width: 16px;\n  height: 16px;\n  accent-color: #214b9e;\n}\n.login-options a,\n.signup-copy a {\n  color: #053a9f;\n  font-weight: 700;\n  text-decoration: none;\n}\n.form-error {\n  min-height: 14px;\n  margin: -3px 0;\n  color: #d93025;\n  font-size: 11px;\n}\n.submit-button {\n  width: 100%;\n  height: 42px;\n  border: 0;\n  border-radius: 6px;\n  background: #214b9e;\n  color: #fff;\n  font: 700 14px var(--body,sans-serif);\n  cursor: pointer;\n}\n.submit-button:hover {\n  background: #163c88;\n}\n.submit-button:disabled {\n  opacity: .55;\n  cursor: wait;\n}\n.signup-copy {\n  margin: 13px 0 0;\n  color: #6b6f80;\n  font-size: 13px;\n  text-align: center;\n}\n.login-panel footer {\n  width: 100%;\n  margin-top: auto;\n  padding-top: 16px;\n  border-top: 1px solid #e0e1e6;\n  color: #9a9daa;\n  text-align: center;\n}\n.login-panel footer nav {\n  display: flex;\n  justify-content: center;\n  gap: 7px;\n  font-size: 11px;\n}\n.login-panel footer a {\n  color: #073a94;\n  text-decoration: none;\n}\n.login-panel footer small {\n  display: block;\n  margin-top: 13px;\n  font-size: 10px;\n}\n@media (max-width: 1100px) {\n  .login-layout {\n    grid-template-columns: minmax(0, 55fr) minmax(500px, 45fr);\n  }\n  .showcase-content {\n    width: 88%;\n  }\n  .service-card {\n    min-height: 250px;\n  }\n  .login-panel {\n    padding-inline: 36px;\n  }\n}\n@media (max-width: 760px) {\n  .login-layout {\n    display: block;\n  }\n  .login-showcase {\n    min-height: 500px;\n    padding: 25px 22px;\n  }\n  .showcase-logo img {\n    width: 160px;\n  }\n  .showcase-content {\n    width: 100%;\n    margin: 55px 0 35px;\n  }\n  .showcase-content > h2 {\n    font-size: 34px;\n  }\n  .showcase-content > p {\n    font-size: 14px;\n  }\n  .service-card {\n    min-height: 0;\n    padding: 22px;\n  }\n  .showcase-benefits {\n    margin-top: 15px;\n  }\n  .login-panel {\n    min-height: 650px;\n    padding: 45px 22px 18px;\n  }\n  .form-content {\n    margin: 0 auto 55px;\n  }\n}\n@media (max-width: 430px) {\n  .login-showcase {\n    min-height: 460px;\n  }\n  .service-card {\n    display: none;\n  }\n  .service-navigation {\n    display: none;\n  }\n  .showcase-content {\n    margin: auto 0;\n  }\n  .showcase-benefits span {\n    padding: 6px 8px;\n    font-size: 9px;\n  }\n  .login-panel footer nav {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=portal-login.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalLoginPage, { className: "PortalLoginPage", filePath: "src/app/pages/portal-login.page.ts", lineNumber: 25 });
})();
export {
  PortalLoginPage
};
//# sourceMappingURL=chunk-CCSGHLYC.js.map
