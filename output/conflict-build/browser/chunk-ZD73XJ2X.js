import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  EMAIL_VALIDATORS,
  PHONE_VALIDATORS
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
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/signup.page.ts
var _c0 = ["backgroundCanvas"];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.title;
function SignupPage_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", tag_r2[1]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2[0]);
  }
}
function SignupPage_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function SignupPage_For_41_Template_button_click_0_listener() {
      const \u0275$index_73_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setService(\u0275$index_73_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const \u0275$index_73_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r4.activeService() === \u0275$index_73_r4);
    \u0275\u0275attribute("aria-label", "Show " + service_r6.title);
  }
}
function SignupPage_Conditional_55_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Enter at least two characters.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Last name is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Enter a valid number.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Company name is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1, "Use 8+ characters with an uppercase letter and number.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.form.hasError("passwordMismatch") ? "Passwords do not match." : "Please confirm your password.");
  }
}
function SignupPage_Conditional_55_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 73);
    \u0275\u0275text(1, "You must accept the terms to continue.");
    \u0275\u0275elementEnd();
  }
}
function SignupPage_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 45)(1, "h1");
    \u0275\u0275text(2, "Create your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Get started with XcellHost cloud services.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 46)(6, "button", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 48);
    \u0275\u0275element(8, "path", 49)(9, "path", 50)(10, "path", 51)(11, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Google");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 48);
    \u0275\u0275element(15, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 48);
    \u0275\u0275element(19, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Facebook");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 55);
    \u0275\u0275text(22, "or sign up with email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "form", 56);
    \u0275\u0275listener("ngSubmit", function SignupPage_Conditional_55_Template_form_ngSubmit_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.submit());
    });
    \u0275\u0275elementStart(24, "div", 57)(25, "div", 58)(26, "label");
    \u0275\u0275text(27, "First Name ");
    \u0275\u0275elementStart(28, "span", 59);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 60);
    \u0275\u0275conditionalCreate(31, SignupPage_Conditional_55_Conditional_31_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 58)(33, "label");
    \u0275\u0275text(34, "Last Name ");
    \u0275\u0275elementStart(35, "span", 59);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 62);
    \u0275\u0275conditionalCreate(38, SignupPage_Conditional_55_Conditional_38_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 58)(40, "label");
    \u0275\u0275text(41, "Work Email ");
    \u0275\u0275elementStart(42, "span", 59);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 63);
    \u0275\u0275conditionalCreate(45, SignupPage_Conditional_55_Conditional_45_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 57)(47, "div", 58)(48, "label");
    \u0275\u0275text(49, "Mobile / WhatsApp ");
    \u0275\u0275elementStart(50, "span", 59);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "input", 64);
    \u0275\u0275conditionalCreate(53, SignupPage_Conditional_55_Conditional_53_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 58)(55, "label");
    \u0275\u0275text(56, "Company Name ");
    \u0275\u0275elementStart(57, "span", 59);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "input", 65);
    \u0275\u0275conditionalCreate(60, SignupPage_Conditional_55_Conditional_60_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 58)(62, "label");
    \u0275\u0275text(63, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 57)(66, "div", 58)(67, "label");
    \u0275\u0275text(68, "Password ");
    \u0275\u0275elementStart(69, "span", 59);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 67);
    \u0275\u0275element(72, "input", 68);
    \u0275\u0275elementStart(73, "button", 69);
    \u0275\u0275listener("click", function SignupPage_Conditional_55_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.togglePassword());
    });
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(75, SignupPage_Conditional_55_Conditional_75_Template, 2, 0, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 58)(77, "label");
    \u0275\u0275text(78, "Confirm Password ");
    \u0275\u0275elementStart(79, "span", 59);
    \u0275\u0275text(80, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 67);
    \u0275\u0275element(82, "input", 70);
    \u0275\u0275elementStart(83, "button", 69);
    \u0275\u0275listener("click", function SignupPage_Conditional_55_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleConfirmation());
    });
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(85, SignupPage_Conditional_55_Conditional_85_Template, 2, 1, "small", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "label", 71);
    \u0275\u0275element(87, "input", 72);
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "I agree to the ");
    \u0275\u0275elementStart(90, "a", 38);
    \u0275\u0275text(91, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " and ");
    \u0275\u0275elementStart(93, "a", 39);
    \u0275\u0275text(94, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(96, SignupPage_Conditional_55_Conditional_96_Template, 2, 0, "small", 73);
    \u0275\u0275elementStart(97, "p", 74);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 75)(100, "span", 76);
    \u0275\u0275text(101, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "span", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "p", 78);
    \u0275\u0275text(104, "Already have an account? ");
    \u0275\u0275elementStart(105, "a", 79);
    \u0275\u0275text(106, "Sign In");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("formGroup", ctx_r4.form);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r4.form.controls.firstName.touched && ctx_r4.form.controls.firstName.invalid ? 31 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r4.form.controls.lastName.touched && ctx_r4.form.controls.lastName.invalid ? 38 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r4.form.controls.email.touched && ctx_r4.form.controls.email.invalid ? 45 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r4.form.controls.phone.touched && ctx_r4.form.controls.phone.invalid ? 53 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r4.form.controls.company.touched && ctx_r4.form.controls.company.invalid ? 60 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("type", ctx_r4.showPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r4.showPassword() ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.showPassword() ? "\u{1F648}" : "\u{1F441}");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.controls.password.touched && ctx_r4.form.controls.password.invalid ? 75 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r4.showConfirmation() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r4.showConfirmation() ? "Hide confirmation" : "Show confirmation");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.showConfirmation() ? "\u{1F648}" : "\u{1F441}");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.controls.confirmPassword.touched && (ctx_r4.form.controls.confirmPassword.invalid || ctx_r4.form.hasError("passwordMismatch")) ? 85 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r4.form.controls.terms.touched && ctx_r4.form.controls.terms.invalid ? 96 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.error());
    \u0275\u0275advance();
    \u0275\u0275classProp("ld", ctx_r4.busy());
    \u0275\u0275property("disabled", ctx_r4.busy());
  }
}
function SignupPage_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "span", 80);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Signup request submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your signup request has been submitted successfully.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 81);
    \u0275\u0275text(8, "Your customer portal access will be activated through the XcellHost customer onboarding process.");
    \u0275\u0275elementEnd()();
  }
}
var PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
var ZOHO_ENDPOINT = "https://crm.zoho.in/crm/WebToLeadForm";
var matchingPasswords = (group) => {
  const password = group.get("password")?.value;
  const confirmation = group.get("confirmPassword")?.value;
  return password && confirmation && password !== confirmation ? { passwordMismatch: true } : null;
};
var SignupPage = class _SignupPage {
  canvas;
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  animationFrame = 0;
  pendingForm;
  form = this.fb.nonNullable.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", Validators.required],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    company: ["", Validators.required],
    city: [""],
    password: ["", [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
    confirmPassword: ["", Validators.required],
    terms: [false, Validators.requiredTrue]
  }, { validators: matchingPasswords });
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  showConfirmation = signal(false, ...ngDevMode ? [{ debugName: "showConfirmation" }] : []);
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  activeService = signal(0, ...ngDevMode ? [{ debugName: "activeService" }] : []);
  serviceSlides = [
    { icon: "\u2601\uFE0F", eyebrow: "Managed Cloud Services", title: "Cloud Infrastructure", description: "Multi-cloud management across AWS, Azure, GCP and Oracle. Cloud assessment, migration, deployment, monitoring and DevOps with 24\xD77 NOC.", tags: [["AWS", "#FF8A00"], ["Azure", "#0066FF"], ["GCP", "#22c55e"], ["Oracle", "#06b6d4"]] },
    { icon: "\u{1F510}", eyebrow: "Cybersecurity Platform", title: "Managed SOC & Threat Defence", description: "Autonomous threat management, attack surface monitoring, dark web intelligence, brand protection and 24\xD77 SOC operations centre.", tags: [["SOC 24\xD77", "#ef4444"], ["ATM", "#06b6d4"], ["Dark Web Intel", "#FF8A00"]] },
    { icon: "\u{1F6E1}\uFE0F", eyebrow: "Endpoint Security", title: "Scrutiny EDR & DLP", description: "Endpoint detection and response with data loss prevention, device control, email protection and DPDPA compliance \u2014 powered by Cyberstanc.", tags: [["EDR", "#ef4444"], ["DLP", "#0066FF"], ["Cyberstanc", "#22c55e"]] },
    { icon: "\u{1F4BE}", eyebrow: "Data Protection", title: "Backup & Disaster Recovery", description: "Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup, endpoint protection and one-click restore.", tags: [["Acronis", "#22c55e"], ["M365 Backup", "#0066FF"], ["Geo-DR", "#FF8A00"]] },
    { icon: "\u{1F512}", eyebrow: "Digital Trust", title: "SSL & Certificate Management", description: "Multi-CA certificate lifecycle management with DigiCert, Sectigo and GlobalSign, including code signing, S/MIME, IoT certificates and private PKI.", tags: [["DigiCert", "#0066FF"], ["Sectigo", "#22c55e"], ["GlobalSign", "#06b6d4"]] },
    { icon: "\u{1F4E7}", eyebrow: "Email Security", title: "DMARC+ Email Protection", description: "Valimail-powered DMARC enforcement with SPF and DKIM management, business email compromise protection and phishing defence.", tags: [["DMARC", "#FF8A00"], ["SPF / DKIM", "#0066FF"], ["Valimail", "#22c55e"]] },
    { icon: "\u{1F4CB}", eyebrow: "Compliance Platform", title: "SecureSetu \u2014 DPDPA Compliance", description: "End-to-end Digital Personal Data Protection Act compliance with data mapping, consent management, DPIA and breach notification workflows.", tags: [["DPDPA", "#22c55e"], ["Consent Mgmt", "#0066FF"], ["DPIA", "#FF8A00"]] },
    { icon: "\u{1F4CA}", eyebrow: "Cloud ERP", title: "Tally on Cloud", description: "Access Tally ERP from anywhere on any device. Multi-user, multi-branch with automatic backup and zero downtime.", tags: [["Tally ERP", "#FF8A00"], ["From \u20B9499", "#0066FF"], ["Multi-User", "#22c55e"]] },
    { icon: "\u{1F4E8}", eyebrow: "Productivity & Collaboration", title: "Managed Microsoft 365", description: "Provisioning, migration, email backup, compliance and ongoing management of Microsoft 365 tenants.", tags: [["Microsoft 365", "#0066FF"], ["Exchange", "#FF8A00"], ["Gold Partner", "#22c55e"]] },
    { icon: "\u2601\uFE0F", eyebrow: "Infrastructure", title: "Performance Cloud & FileCloud", description: "High-performance VPS and dedicated cloud servers with enterprise file sharing across on-premise and hybrid environments.", tags: [["VPS", "#06b6d4"], ["FileCloud", "#0066FF"], ["Dedicated", "#FF8A00"]] },
    { icon: "\u{1F50C}", eyebrow: "SMB Security", title: "Cybird Security Appliance", description: "Plug-and-play cybersecurity for SMBs with firewall, UTM, VPN and threat prevention in one appliance.", tags: [["Firewall", "#ef4444"], ["UTM", "#0066FF"], ["Plug & Play", "#22c55e"]] },
    { icon: "\u{1F5A5}\uFE0F", eyebrow: "Managed IT Services", title: "RMM, VAPT & IT Operations", description: "Remote monitoring, vulnerability testing, WhatsApp marketing and video surveillance as a service.", tags: [["RMM", "#FF8A00"], ["VAPT", "#0066FF"], ["VSaaS", "#06b6d4"], ["WhatsApp", "#22c55e"]] }
  ];
  constructor() {
    inject(SeoService).set("Sign Up \u2014 XcellHost Cloud Services", "Create your XcellHost account to access managed cloud, cybersecurity and digital trust services.", "/signup/");
    const carouselTimer = window.setInterval(() => this.nextService(1), 4500);
    this.destroyRef.onDestroy(() => window.clearInterval(carouselTimer));
  }
  ngAfterViewInit() {
    const canvas = this.canvas?.nativeElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !context)
      return;
    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * 2e3,
      y: Math.random() * 2e3,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 5e-3 + 2e-3,
      direction: Math.random() > 0.5 ? 1 : -1
    }));
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent)
        return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.alpha += star.speed * star.direction;
        if (star.alpha >= 1 || star.alpha <= 0.08)
          star.direction *= -1;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0,102,255,${star.alpha.toFixed(2)})`;
        context.fill();
      }
      this.animationFrame = window.requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    draw();
    this.destroyRef.onDestroy(() => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(this.animationFrame);
    });
  }
  togglePassword() {
    this.showPassword.update((show) => !show);
  }
  toggleConfirmation() {
    this.showConfirmation.update((show) => !show);
  }
  nextService(direction) {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index) {
    this.activeService.set(index);
  }
  submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set("Please correct the highlighted fields and accept the terms.");
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const value = this.form.getRawValue();
    const zohoForm = document.createElement("form");
    zohoForm.method = "POST";
    zohoForm.action = ZOHO_ENDPOINT;
    zohoForm.target = "zohoFrame";
    zohoForm.style.display = "none";
    zohoForm.acceptCharset = "UTF-8";
    const fields = {
      xnQsjsdp: "6b9425c7b8c91e8768ec8be5a272d5a9f0b5261989d70523d8f2a7e419e5a64d",
      xmIwtLD: "a98994818746fa2996adef0834f16a1b6c2b71d21c4c2b57ab068f2a00004bda2d13d70ba5e2f21704a6a9dddd3a4c8c",
      actionType: "TGVhZHM=",
      returnURL: "https://xcellhost.cloud/signup-success",
      aG9uZXlwb3Q: "",
      "First Name": value.firstName.trim(),
      "Last Name": value.lastName.trim(),
      Email: value.email.trim(),
      Mobile: value.phone.trim(),
      Company: value.company.trim(),
      City: value.city.trim(),
      LEADCF21: "Customer C",
      "Lead Source": "Website"
    };
    for (const [name, fieldValue] of Object.entries(fields)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = fieldValue;
      zohoForm.appendChild(input);
    }
    document.body.appendChild(zohoForm);
    this.pendingForm = zohoForm;
    zohoForm.submit();
    window.setTimeout(() => this.finishSubmission(), 4e3);
  }
  onZohoLoad() {
    if (this.busy())
      this.finishSubmission();
  }
  finishSubmission() {
    if (!this.busy())
      return;
    this.pendingForm?.remove();
    this.pendingForm = void 0;
    this.busy.set(false);
    this.submitted.set(true);
  }
  static \u0275fac = function SignupPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupPage, selectors: [["xh-signup-page"]], viewQuery: function SignupPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
    }
  }, decls: 69, vars: 5, consts: [["backgroundCanvas", ""], [1, "page"], [1, "left"], ["aria-hidden", "true"], ["viewBox", "0 0 90 70", "fill", "none", "aria-hidden", "true", 1, "fi", "fi-1"], ["d", "M15 50Q35 20 55 35Q80 45 60 55Q40 65 15 50Z", "stroke", "rgba(255,255,255,.08)", "stroke-width", "1.5"], ["viewBox", "0 0 60 50", "fill", "none", "aria-hidden", "true", 1, "fi", "fi-2"], ["x", "10", "y", "12", "width", "40", "height", "28", "rx", "3", "stroke", "rgba(255,255,255,.08)", "stroke-width", "1.5"], ["viewBox", "0 0 70 55", "fill", "none", "aria-hidden", "true", 1, "fi", "fi-3"], ["d", "M10 40Q30 15 50 30Q70 40 50 48Q30 55 10 40Z", "stroke", "rgba(255,255,255,.06)", "stroke-width", "1.5"], ["viewBox", "0 0 50 40", "fill", "none", "aria-hidden", "true", 1, "fi", "fi-4"], ["x", "8", "y", "5", "width", "34", "height", "30", "rx", "2", "stroke", "rgba(255,255,255,.06)", "stroke-width", "1.5"], [1, "lc"], [1, "signup-brand-strip"], ["src", "/assets/images/XcellHost-main-logo-baba-1.png", "alt", "XcellHost secure cloud services since 1999, with 24\xD77 support", "width", "3508", "height", "415"], [1, "sub"], ["aria-label", "XcellHost services", 1, "car"], [1, "car-top"], ["aria-hidden", "true", 1, "car-ico"], [1, "car-nav"], ["type", "button", "aria-label", "Previous service", 3, "click"], ["type", "button", "aria-label", "Next service", 3, "click"], [1, "slides"], [1, "slide", "on"], [1, "s-ey"], [1, "s-t"], [1, "s-d"], [1, "tags"], [1, "tag"], ["aria-label", "Choose service slide", 1, "dots"], ["type", "button", 1, "dot", 3, "on"], ["routerLink", "/category/cloud", 1, "ml"], ["aria-label", "Customer benefits", 1, "lf"], [1, "lfi"], [1, "right"], [1, "fw"], ["aria-live", "polite", 1, "su", "sh"], [1, "rf"], ["routerLink", "/company/terms-of-service"], ["routerLink", "/company/privacy-policy"], ["href", "mailto:support@xcellhost.cloud"], [1, "cp"], ["name", "zohoFrame", "title", "Signup submission", "aria-hidden", "true", 1, "zoho-frame", 3, "load"], [1, "td"], ["type", "button", 1, "dot", 3, "click"], [1, "fh"], ["aria-label", "Social sign-up options", 1, "socials"], ["type", "button", 1, "soc-btn"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.8h3.6c2.1-2 3.3-4.8 3.3-8.1Z", "fill", "#4285F4"], ["d", "M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2V17C4 20.5 7.7 23 12 23Z", "fill", "#34A853"], ["d", "M5.8 14.1a6 6 0 0 1 0-4.2V7.1H2.2A11 11 0 0 0 1 12c0 1.8.4 3.5 1.2 4.9l3.6-2.8Z", "fill", "#FBBC05"], ["d", "M12 5.4c1.6 0 3.1.5 4.2 1.6l3.2-3.1A10.7 10.7 0 0 0 2.2 7.1l3.6 2.8c.9-2.6 3.3-4.5 6.2-4.5Z", "fill", "#EA4335"], ["d", "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.2 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z", "fill", "#333"], ["d", "M22 12A10 10 0 1 0 10.4 22v-7.1H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9l2.2.2v2.5h-1.2c-1.3 0-1.7.7-1.7 1.5V12h2.8l-.4 2.9h-2.4V22A10 10 0 0 0 22 12Z", "fill", "#1877F2"], [1, "divider"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "fr"], [1, "fg"], [1, "rq"], ["type", "text", "formControlName", "firstName", "autocomplete", "given-name", "placeholder", "Rajesh"], [1, "fe", "sh"], ["type", "text", "formControlName", "lastName", "autocomplete", "family-name", "placeholder", "Kumar"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], ["type", "tel", "formControlName", "phone", "autocomplete", "tel", "placeholder", "+91 98765 43210"], ["type", "text", "formControlName", "company", "autocomplete", "organization", "placeholder", "Company Pvt. Ltd."], ["type", "text", "formControlName", "city", "autocomplete", "address-level2", "placeholder", "Mumbai"], [1, "pw"], ["formControlName", "password", "autocomplete", "new-password", "placeholder", "Min. 8 characters", 3, "type"], ["type", "button", 3, "click"], ["formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Re-enter", 3, "type"], [1, "fc"], ["type", "checkbox", "formControlName", "terms"], [1, "ce", "sh"], ["role", "alert", 1, "form-error"], ["type", "submit", 1, "bs", 3, "disabled"], [1, "bt"], [1, "sp"], [1, "ff"], ["routerLink", "/customer-login"], [1, "ck"], [1, "su-note"]], template: function SignupPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main", 1)(1, "section", 2);
      \u0275\u0275element(2, "canvas", 3, 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "rect", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "svg", 10);
      \u0275\u0275element(11, "rect", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 12)(13, "div", 13);
      \u0275\u0275element(14, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1");
      \u0275\u0275text(16, "Enterprise cloud infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 15);
      \u0275\u0275text(18, "Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "section", 16)(20, "div", 17)(21, "span", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 19)(24, "button", 20);
      \u0275\u0275listener("click", function SignupPage_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextService(-1));
      });
      \u0275\u0275text(25, "\u2039");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 21);
      \u0275\u0275listener("click", function SignupPage_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextService(1));
      });
      \u0275\u0275text(27, "\u203A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 22)(29, "article", 23)(30, "span", 24);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h2", 25);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 26);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 27);
      \u0275\u0275repeaterCreate(37, SignupPage_For_38_Template, 3, 3, "span", 28, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 29);
      \u0275\u0275repeaterCreate(40, SignupPage_For_41_Template, 1, 3, "button", 30, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 31);
      \u0275\u0275text(43, "More Services ");
      \u0275\u0275elementStart(44, "span", 3);
      \u0275\u0275text(45, "\u2197");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 32)(47, "span", 33);
      \u0275\u0275text(48, "\u2713 Expert Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 33);
      \u0275\u0275text(50, "\u2713 Knowledge Base");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 33);
      \u0275\u0275text(52, "\u2713 Easy Onboarding");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "section", 34)(54, "div", 35);
      \u0275\u0275conditionalCreate(55, SignupPage_Conditional_55_Template, 107, 19)(56, SignupPage_Conditional_56_Template, 9, 0, "section", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "footer", 37)(58, "a", 38);
      \u0275\u0275text(59, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " | ");
      \u0275\u0275elementStart(61, "a", 39);
      \u0275\u0275text(62, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " | ");
      \u0275\u0275elementStart(64, "a", 40);
      \u0275\u0275text(65, "Get Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 41);
      \u0275\u0275text(67, "\xA9 2026 XcellHost Cloud Services Pvt. Ltd. All rights reserved.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "iframe", 42);
      \u0275\u0275listener("load", function SignupPage_Template_iframe_load_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onZohoLoad());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].icon);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].eyebrow);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.serviceSlides[ctx.activeService()].description);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.serviceSlides[ctx.activeService()].tags);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.serviceSlides);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(!ctx.submitted() ? 55 : 56);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  --bl:#0066ff;\n  --nv:#0b132b;\n  --or:#ff8a00;\n  --gn:#22c55e;\n  --er:#ef4444;\n  --f:"DM Sans",var(--body),system-ui,sans-serif;\n  display: block;\n  min-height: 100vh;\n  background: var(--nv);\n  color: #1e293b;\n  font-family: var(--f);\n  -webkit-font-smoothing: antialiased;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\na[_ngcontent-%COMP%] {\n  color: var(--bl);\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 54% 46%;\n  min-height: 100vh;\n}\n.left[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 28px 36px;\n  background: var(--nv);\n}\ncanvas[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  pointer-events: none;\n}\n.fi[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  opacity: .05;\n  pointer-events: none;\n}\n.fi-1[_ngcontent-%COMP%] {\n  top: 8%;\n  right: 12%;\n  width: 90px;\n  height: 70px;\n  animation: _ngcontent-%COMP%_fl 9s ease-in-out infinite;\n}\n.fi-2[_ngcontent-%COMP%] {\n  top: 22%;\n  right: 38%;\n  width: 60px;\n  height: 50px;\n  animation: _ngcontent-%COMP%_fl 11s 2s ease-in-out infinite;\n}\n.fi-3[_ngcontent-%COMP%] {\n  right: 8%;\n  bottom: 32%;\n  width: 70px;\n  height: 55px;\n  animation: _ngcontent-%COMP%_fl 8s 4s ease-in-out infinite;\n}\n.fi-4[_ngcontent-%COMP%] {\n  top: 48%;\n  right: 25%;\n  width: 50px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_fl 10s 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_fl {\n  50% {\n    transform: translateY(-12px);\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: clamp(150px, 18vw, 210px);\n  height: auto;\n  margin-bottom: auto;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 0 5px rgba(255, 255, 255, .35));\n}\n.lc[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: 100%;\n  max-width: 640px;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  margin-bottom: 14px;\n  padding: 5px 14px;\n  border-radius: 6px;\n  background: var(--bl);\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 700;\n}\n.signup-brand-strip[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 22px;\n  padding: 4px 6px;\n  border-radius: 4px;\n  background: #fff;\n}\n.signup-brand-strip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.lc[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 0 10px;\n  color: #fff;\n  font-size: clamp(1.8rem, 3.2vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -.04em;\n}\n.lc[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 0 22px;\n  color: rgba(255, 255, 255, .55);\n  font-size: .92rem;\n  line-height: 1.65;\n}\n.car[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 520px;\n  margin-bottom: 12px;\n  padding: 18px 20px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .04);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.car-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.car-ico[_ngcontent-%COMP%] {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 102, 255, .2);\n  border-radius: 8px;\n  background: rgba(0, 102, 255, .15);\n  font-size: 1rem;\n}\n.car-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.car-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 28px;\n  height: 28px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .4);\n  font-size: .8rem;\n  cursor: pointer;\n}\n.car-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.slides[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 115px;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  animation: _ngcontent-%COMP%_slideIn .4s ease;\n}\n.s-ey[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n  color: var(--bl);\n  font-size: .56rem;\n  font-weight: 700;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.s-t[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 1.02rem;\n  font-weight: 700;\n}\n.s-d[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: rgba(255, 255, 255, .5);\n  font-size: .76rem;\n  line-height: 1.55;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 4px;\n  background: rgba(255, 255, 255, .06);\n  color: rgba(255, 255, 255, .6);\n  font-size: .62rem;\n}\n.td[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n.dots[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .2);\n  cursor: pointer;\n  transition: .3s;\n}\n.dot.on[_ngcontent-%COMP%] {\n  width: 14px;\n  border-radius: 3px;\n  background: var(--bl);\n}\n.ml[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .5);\n  font-size: .78rem;\n  font-weight: 600;\n}\n.ml[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, .25);\n  background: rgba(255, 255, 255, .05);\n  color: #fff;\n  text-decoration: none;\n}\n.lf[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  gap: 16px;\n  margin-top: auto;\n  padding-top: 10px;\n}\n.lfi[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .35);\n  font-size: .68rem;\n}\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 32px 28px;\n  background: #fff;\n}\n.fw[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.fh[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -.02em;\n}\n.fh[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #64748b;\n  font-size: .88rem;\n}\n.socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.soc-btn[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px;\n  border: 1.5px solid #dfe6ed;\n  border-radius: 8px;\n  background: #fff;\n  color: #1e293b;\n  font: 600 .78rem var(--f);\n  cursor: pointer;\n}\n.soc-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--bl);\n  background: #fafafa;\n}\n.soc-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0;\n  color: #94a3b8;\n  font-size: .75rem;\n}\n.divider[_ngcontent-%COMP%]::before, \n.divider[_ngcontent-%COMP%]::after {\n  content: "";\n  height: 1px;\n  flex: 1;\n  background: #dfe6ed;\n}\n.fg[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #64748b;\n  font-size: .78rem;\n  font-weight: 600;\n}\n.rq[_ngcontent-%COMP%] {\n  color: var(--er);\n}\n.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #c8d1dc;\n  border-radius: 8px;\n  outline: none;\n  color: #1e293b;\n  font: .86rem var(--f);\n  transition: .2s;\n}\n.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #b0bac5;\n}\n.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--bl);\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .2);\n}\n.fg[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--er);\n}\n.fe[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 2px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.fe.sh[_ngcontent-%COMP%] {\n  display: block;\n}\n.fr[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.pw[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pw[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.pw[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  padding: 2px;\n  border: 0;\n  background: none;\n  color: #94a3b8;\n  font-size: .82rem;\n  line-height: 1;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.fc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 2px 0 4px;\n}\n.fc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex-shrink: 0;\n  accent-color: var(--bl);\n  cursor: pointer;\n}\n.fc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: .72rem;\n  line-height: 1.45;\n  cursor: pointer;\n}\n.fc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bl);\n  font-weight: 600;\n}\n.ce[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 8px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.ce.sh[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-error[_ngcontent-%COMP%] {\n  min-height: 0;\n  margin: 0 0 6px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.bs[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--bl);\n  color: #fff;\n  font: 700 .9rem var(--f);\n  cursor: pointer;\n  transition: .2s;\n}\n.bs[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(0, 102, 255, .25);\n}\n.bs[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n  transform: none;\n}\n.sp[_ngcontent-%COMP%] {\n  display: none;\n  width: 15px;\n  height: 15px;\n  margin: 0 auto;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sn .6s linear infinite;\n}\n.bs.ld[_ngcontent-%COMP%]   .bt[_ngcontent-%COMP%] {\n  display: none;\n}\n.bs.ld[_ngcontent-%COMP%]   .sp[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_sn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ff[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  color: #94a3b8;\n  font-size: .82rem;\n  text-align: center;\n}\n.ff[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--bl);\n  font-weight: 700;\n}\n.rf[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin-top: auto;\n  padding-top: 14px;\n  color: #94a3b8;\n  font-size: .68rem;\n  text-align: center;\n}\n.rf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 6px;\n  color: #64748b;\n}\n.rf[_ngcontent-%COMP%]   .cp[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #bcc5d0;\n  font-size: .6rem;\n}\n.su[_ngcontent-%COMP%] {\n  display: none;\n  padding: 20px 0;\n  text-align: center;\n}\n.su.sh[_ngcontent-%COMP%] {\n  display: block;\n}\n.su[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  display: flex;\n  width: 52px;\n  height: 52px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n  border: 2px solid var(--gn);\n  border-radius: 50%;\n  background: rgba(34, 197, 94, .08);\n  font-size: 1.4rem;\n}\n.su[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 1.15rem;\n}\n.su[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #64748b;\n  font-size: .85rem;\n}\n.su[_ngcontent-%COMP%]   .su-note[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: .8rem;\n  line-height: 1.6;\n}\n.zoho-frame[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .left[_ngcontent-%COMP%] {\n    min-height: 600px;\n    padding: 20px;\n  }\n  .lc[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .car[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .fi[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lf[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .right[_ngcontent-%COMP%] {\n    min-height: 760px;\n    padding: 20px 18px;\n  }\n  .fr[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n[_nghost-%COMP%] {\n  --nv:#0066ff;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: none;\n}\n.badge[_ngcontent-%COMP%] {\n  background: #0048bd;\n}\n.lc[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.lc[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .9);\n}\n.car[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .28);\n  background: rgba(0, 41, 120, .3);\n  box-shadow: 0 10px 28px rgba(0, 35, 100, .16);\n}\n.s-ey[_ngcontent-%COMP%] {\n  color: #d7e8ff;\n}\n.s-t[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.s-d[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .88);\n}\n.tag[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .25);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n}\n.car-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .35);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n}\n.car-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .25);\n  color: #fff;\n}\n.dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .5);\n}\n.dot.on[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.ml[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .55);\n  color: #fff;\n}\n.ml[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .16);\n  color: #fff;\n}\n.lfi[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .82);\n}\n.rf[_ngcontent-%COMP%], \n.rf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.rf[_ngcontent-%COMP%]   .cp[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=signup.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupPage, [{
    type: Component,
    args: [{ selector: "xh-signup-page", standalone: true, imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="page">\r
  <section class="left">\r
    <canvas #backgroundCanvas aria-hidden="true"></canvas>\r
    <svg class="fi fi-1" viewBox="0 0 90 70" fill="none" aria-hidden="true"><path d="M15 50Q35 20 55 35Q80 45 60 55Q40 65 15 50Z" stroke="rgba(255,255,255,.08)" stroke-width="1.5" /></svg>\r
    <svg class="fi fi-2" viewBox="0 0 60 50" fill="none" aria-hidden="true"><rect x="10" y="12" width="40" height="28" rx="3" stroke="rgba(255,255,255,.08)" stroke-width="1.5" /></svg>\r
    <svg class="fi fi-3" viewBox="0 0 70 55" fill="none" aria-hidden="true"><path d="M10 40Q30 15 50 30Q70 40 50 48Q30 55 10 40Z" stroke="rgba(255,255,255,.06)" stroke-width="1.5" /></svg>\r
    <svg class="fi fi-4" viewBox="0 0 50 40" fill="none" aria-hidden="true"><rect x="8" y="5" width="34" height="30" rx="2" stroke="rgba(255,255,255,.06)" stroke-width="1.5" /></svg>\r
\r
    <div class="lc">\r
      <div class="signup-brand-strip">\r
        <img src="/assets/images/XcellHost-main-logo-baba-1.png" alt="XcellHost secure cloud services since 1999, with 24\xD77 support" width="3508" height="415" />\r
      </div>\r
      <h1>Enterprise cloud infrastructure</h1>\r
      <p class="sub">Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.</p>\r
\r
      <section class="car" aria-label="XcellHost services">\r
        <div class="car-top">\r
          <span class="car-ico" aria-hidden="true">{{ serviceSlides[activeService()].icon }}</span>\r
          <div class="car-nav">\r
            <button type="button" aria-label="Previous service" (click)="nextService(-1)">&#8249;</button>\r
            <button type="button" aria-label="Next service" (click)="nextService(1)">&#8250;</button>\r
          </div>\r
        </div>\r
        <div class="slides">\r
          <article class="slide on">\r
            <span class="s-ey">{{ serviceSlides[activeService()].eyebrow }}</span>\r
            <h2 class="s-t">{{ serviceSlides[activeService()].title }}</h2>\r
            <p class="s-d">{{ serviceSlides[activeService()].description }}</p>\r
            <div class="tags">\r
              @for (tag of serviceSlides[activeService()].tags; track tag[0]) {\r
                <span class="tag"><i class="td" [style.background]="tag[1]"></i>{{ tag[0] }}</span>\r
              }\r
            </div>\r
          </article>\r
        </div>\r
      </section>\r
\r
      <div class="dots" aria-label="Choose service slide">\r
        @for (service of serviceSlides; track service.title; let index = $index) {\r
          <button type="button" class="dot" [class.on]="activeService() === index" [attr.aria-label]="'Show ' + service.title" (click)="setService(index)"></button>\r
        }\r
      </div>\r
      <a class="ml" routerLink="/category/cloud">More Services <span aria-hidden="true">&#8599;</span></a>\r
    </div>\r
\r
    <div class="lf" aria-label="Customer benefits">\r
      <span class="lfi">&#10003; Expert Support</span><span class="lfi">&#10003; Knowledge Base</span><span class="lfi">&#10003; Easy Onboarding</span>\r
    </div>\r
  </section>\r
\r
  <section class="right">\r
    <div class="fw">\r
      @if (!submitted()) {\r
        <header class="fh"><h1>Create your account</h1><p>Get started with XcellHost cloud services.</p></header>\r
\r
        <div class="socials" aria-label="Social sign-up options">\r
          <button type="button" class="soc-btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.8h3.6c2.1-2 3.3-4.8 3.3-8.1Z" fill="#4285F4"/><path d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2V17C4 20.5 7.7 23 12 23Z" fill="#34A853"/><path d="M5.8 14.1a6 6 0 0 1 0-4.2V7.1H2.2A11 11 0 0 0 1 12c0 1.8.4 3.5 1.2 4.9l3.6-2.8Z" fill="#FBBC05"/><path d="M12 5.4c1.6 0 3.1.5 4.2 1.6l3.2-3.1A10.7 10.7 0 0 0 2.2 7.1l3.6 2.8c.9-2.6 3.3-4.5 6.2-4.5Z" fill="#EA4335"/></svg>Google</button>\r
          <button type="button" class="soc-btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.2 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" fill="#333"/></svg>GitHub</button>\r
          <button type="button" class="soc-btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12A10 10 0 1 0 10.4 22v-7.1H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9l2.2.2v2.5h-1.2c-1.3 0-1.7.7-1.7 1.5V12h2.8l-.4 2.9h-2.4V22A10 10 0 0 0 22 12Z" fill="#1877F2"/></svg>Facebook</button>\r
        </div>\r
        <div class="divider">or sign up with email</div>\r
\r
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
          <div class="fr">\r
            <div class="fg"><label>First Name <span class="rq">*</span></label><input type="text" formControlName="firstName" autocomplete="given-name" placeholder="Rajesh" />@if(form.controls.firstName.touched&&form.controls.firstName.invalid){<small class="fe sh">Enter at least two characters.</small>}</div>\r
            <div class="fg"><label>Last Name <span class="rq">*</span></label><input type="text" formControlName="lastName" autocomplete="family-name" placeholder="Kumar" />@if(form.controls.lastName.touched&&form.controls.lastName.invalid){<small class="fe sh">Last name is required.</small>}</div>\r
          </div>\r
          <div class="fg"><label>Work Email <span class="rq">*</span></label><input type="email" formControlName="email" autocomplete="email" placeholder="you@company.com" />@if(form.controls.email.touched&&form.controls.email.invalid){<small class="fe sh">Enter a valid email.</small>}</div>\r
          <div class="fr">\r
            <div class="fg"><label>Mobile / WhatsApp <span class="rq">*</span></label><input type="tel" formControlName="phone" autocomplete="tel" placeholder="+91 98765 43210" />@if(form.controls.phone.touched&&form.controls.phone.invalid){<small class="fe sh">Enter a valid number.</small>}</div>\r
            <div class="fg"><label>Company Name <span class="rq">*</span></label><input type="text" formControlName="company" autocomplete="organization" placeholder="Company Pvt. Ltd." />@if(form.controls.company.touched&&form.controls.company.invalid){<small class="fe sh">Company name is required.</small>}</div>\r
          </div>\r
          <div class="fg"><label>City</label><input type="text" formControlName="city" autocomplete="address-level2" placeholder="Mumbai" /></div>\r
          <div class="fr">\r
            <div class="fg"><label>Password <span class="rq">*</span></label><div class="pw"><input [type]="showPassword()?'text':'password'" formControlName="password" autocomplete="new-password" placeholder="Min. 8 characters" /><button type="button" [attr.aria-label]="showPassword()?'Hide password':'Show password'" (click)="togglePassword()">{{showPassword()?'\u{1F648}':'\u{1F441}'}}</button></div>@if(form.controls.password.touched&&form.controls.password.invalid){<small class="fe sh">Use 8+ characters with an uppercase letter and number.</small>}</div>\r
            <div class="fg"><label>Confirm Password <span class="rq">*</span></label><div class="pw"><input [type]="showConfirmation()?'text':'password'" formControlName="confirmPassword" autocomplete="new-password" placeholder="Re-enter" /><button type="button" [attr.aria-label]="showConfirmation()?'Hide confirmation':'Show confirmation'" (click)="toggleConfirmation()">{{showConfirmation()?'\u{1F648}':'\u{1F441}'}}</button></div>@if(form.controls.confirmPassword.touched&&(form.controls.confirmPassword.invalid||form.hasError('passwordMismatch'))){<small class="fe sh">{{form.hasError('passwordMismatch')?'Passwords do not match.':'Please confirm your password.'}}</small>}</div>\r
          </div>\r
          <label class="fc"><input type="checkbox" formControlName="terms" /><span>I agree to the <a routerLink="/company/terms-of-service">Terms of Service</a> and <a routerLink="/company/privacy-policy">Privacy Policy</a>.</span></label>\r
          @if(form.controls.terms.touched&&form.controls.terms.invalid){<small class="ce sh">You must accept the terms to continue.</small>}\r
          <p class="form-error" role="alert">{{ error() }}</p>\r
          <button type="submit" class="bs" [class.ld]="busy()" [disabled]="busy()"><span class="bt">Create Account</span><span class="sp"></span></button>\r
        </form>\r
        <p class="ff">Already have an account? <a routerLink="/customer-login">Sign In</a></p>\r
      } @else {\r
        <section class="su sh" aria-live="polite"><span class="ck">&#10003;</span><h2>Signup request submitted</h2><p>Your signup request has been submitted successfully.</p><p class="su-note">Your customer portal access will be activated through the XcellHost customer onboarding process.</p></section>\r
      }\r
    </div>\r
\r
    <footer class="rf"><a routerLink="/company/terms-of-service">Terms &amp; Conditions</a> | <a routerLink="/company/privacy-policy">Privacy Policy</a> | <a href="mailto:support@xcellhost.cloud">Get Support</a><div class="cp">&copy; 2026 XcellHost Cloud Services Pvt. Ltd. All rights reserved.</div></footer>\r
    <iframe name="zohoFrame" class="zoho-frame" title="Signup submission" aria-hidden="true" (load)="onZohoLoad()"></iframe>\r
  </section>\r
</main>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap";\n\n/* src/app/pages/signup.page.css */\n:host {\n  --bl:#0066ff;\n  --nv:#0b132b;\n  --or:#ff8a00;\n  --gn:#22c55e;\n  --er:#ef4444;\n  --f:"DM Sans",var(--body),system-ui,sans-serif;\n  display: block;\n  min-height: 100vh;\n  background: var(--nv);\n  color: #1e293b;\n  font-family: var(--f);\n  -webkit-font-smoothing: antialiased;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\na {\n  color: var(--bl);\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.page {\n  display: grid;\n  grid-template-columns: 54% 46%;\n  min-height: 100vh;\n}\n.left {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 28px 36px;\n  background: var(--nv);\n}\ncanvas {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  pointer-events: none;\n}\n.fi {\n  position: absolute;\n  z-index: 1;\n  opacity: .05;\n  pointer-events: none;\n}\n.fi-1 {\n  top: 8%;\n  right: 12%;\n  width: 90px;\n  height: 70px;\n  animation: fl 9s ease-in-out infinite;\n}\n.fi-2 {\n  top: 22%;\n  right: 38%;\n  width: 60px;\n  height: 50px;\n  animation: fl 11s 2s ease-in-out infinite;\n}\n.fi-3 {\n  right: 8%;\n  bottom: 32%;\n  width: 70px;\n  height: 55px;\n  animation: fl 8s 4s ease-in-out infinite;\n}\n.fi-4 {\n  top: 48%;\n  right: 25%;\n  width: 50px;\n  height: 40px;\n  animation: fl 10s 1s ease-in-out infinite;\n}\n@keyframes fl {\n  50% {\n    transform: translateY(-12px);\n  }\n}\n.logo {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: clamp(150px, 18vw, 210px);\n  height: auto;\n  margin-bottom: auto;\n}\n.logo img {\n  display: block;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 0 5px rgba(255, 255, 255, .35));\n}\n.lc {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: 100%;\n  max-width: 640px;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n}\n.badge {\n  display: inline-flex;\n  width: fit-content;\n  margin-bottom: 14px;\n  padding: 5px 14px;\n  border-radius: 6px;\n  background: var(--bl);\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 700;\n}\n.signup-brand-strip {\n  width: 100%;\n  margin-bottom: 22px;\n  padding: 4px 6px;\n  border-radius: 4px;\n  background: #fff;\n}\n.signup-brand-strip img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.lc > h1 {\n  max-width: 520px;\n  margin: 0 0 10px;\n  color: #fff;\n  font-size: clamp(1.8rem, 3.2vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -.04em;\n}\n.lc .sub {\n  max-width: 400px;\n  margin: 0 0 22px;\n  color: rgba(255, 255, 255, .55);\n  font-size: .92rem;\n  line-height: 1.65;\n}\n.car {\n  position: relative;\n  z-index: 2;\n  max-width: 520px;\n  margin-bottom: 12px;\n  padding: 18px 20px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .04);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.car-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.car-ico {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 102, 255, .2);\n  border-radius: 8px;\n  background: rgba(0, 102, 255, .15);\n  font-size: 1rem;\n}\n.car-nav {\n  display: flex;\n  gap: 5px;\n}\n.car-nav button {\n  display: flex;\n  width: 28px;\n  height: 28px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .4);\n  font-size: .8rem;\n  cursor: pointer;\n}\n.car-nav button:hover {\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.slides {\n  position: relative;\n  min-height: 115px;\n}\n.slide {\n  position: absolute;\n  inset: 0;\n  animation: slideIn .4s ease;\n}\n.s-ey {\n  display: block;\n  margin-bottom: 2px;\n  color: var(--bl);\n  font-size: .56rem;\n  font-weight: 700;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.s-t {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 1.02rem;\n  font-weight: 700;\n}\n.s-d {\n  margin: 0 0 8px;\n  color: rgba(255, 255, 255, .5);\n  font-size: .76rem;\n  line-height: 1.55;\n}\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.tag {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 4px;\n  background: rgba(255, 255, 255, .06);\n  color: rgba(255, 255, 255, .6);\n  font-size: .62rem;\n}\n.td {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n.dots {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.dot {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .2);\n  cursor: pointer;\n  transition: .3s;\n}\n.dot.on {\n  width: 14px;\n  border-radius: 3px;\n  background: var(--bl);\n}\n.ml {\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .5);\n  font-size: .78rem;\n  font-weight: 600;\n}\n.ml:hover {\n  border-color: rgba(255, 255, 255, .25);\n  background: rgba(255, 255, 255, .05);\n  color: #fff;\n  text-decoration: none;\n}\n.lf {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  gap: 16px;\n  margin-top: auto;\n  padding-top: 10px;\n}\n.lfi {\n  color: rgba(255, 255, 255, .35);\n  font-size: .68rem;\n}\n.right {\n  display: flex;\n  min-width: 0;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 32px 28px;\n  background: #fff;\n}\n.fw {\n  width: 100%;\n  max-width: 400px;\n}\n.fh h1 {\n  margin: 0 0 3px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -.02em;\n}\n.fh p {\n  margin: 0 0 20px;\n  color: #64748b;\n  font-size: .88rem;\n}\n.socials {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.soc-btn {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px;\n  border: 1.5px solid #dfe6ed;\n  border-radius: 8px;\n  background: #fff;\n  color: #1e293b;\n  font: 600 .78rem var(--f);\n  cursor: pointer;\n}\n.soc-btn:hover {\n  border-color: var(--bl);\n  background: #fafafa;\n}\n.soc-btn svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0;\n  color: #94a3b8;\n  font-size: .75rem;\n}\n.divider::before,\n.divider::after {\n  content: "";\n  height: 1px;\n  flex: 1;\n  background: #dfe6ed;\n}\n.fg {\n  margin-bottom: 12px;\n}\n.fg label {\n  display: block;\n  margin-bottom: 3px;\n  color: #64748b;\n  font-size: .78rem;\n  font-weight: 600;\n}\n.rq {\n  color: var(--er);\n}\n.fg input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #c8d1dc;\n  border-radius: 8px;\n  outline: none;\n  color: #1e293b;\n  font: .86rem var(--f);\n  transition: .2s;\n}\n.fg input::placeholder {\n  color: #b0bac5;\n}\n.fg input:focus {\n  border-color: var(--bl);\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .2);\n}\n.fg input.ng-touched.ng-invalid {\n  border-color: var(--er);\n}\n.fe {\n  display: none;\n  margin-top: 2px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.fe.sh {\n  display: block;\n}\n.fr {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.pw {\n  position: relative;\n}\n.pw input {\n  padding-right: 40px;\n}\n.pw button {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  padding: 2px;\n  border: 0;\n  background: none;\n  color: #94a3b8;\n  font-size: .82rem;\n  line-height: 1;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.fc {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 2px 0 4px;\n}\n.fc input {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex-shrink: 0;\n  accent-color: var(--bl);\n  cursor: pointer;\n}\n.fc span {\n  color: #64748b;\n  font-size: .72rem;\n  line-height: 1.45;\n  cursor: pointer;\n}\n.fc a {\n  color: var(--bl);\n  font-weight: 600;\n}\n.ce {\n  display: none;\n  margin-bottom: 8px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.ce.sh {\n  display: block;\n}\n.form-error {\n  min-height: 0;\n  margin: 0 0 6px;\n  color: var(--er);\n  font-size: .68rem;\n}\n.bs {\n  width: 100%;\n  padding: 11px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--bl);\n  color: #fff;\n  font: 700 .9rem var(--f);\n  cursor: pointer;\n  transition: .2s;\n}\n.bs:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(0, 102, 255, .25);\n}\n.bs:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n  transform: none;\n}\n.sp {\n  display: none;\n  width: 15px;\n  height: 15px;\n  margin: 0 auto;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: sn .6s linear infinite;\n}\n.bs.ld .bt {\n  display: none;\n}\n.bs.ld .sp {\n  display: block;\n}\n@keyframes sn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ff {\n  margin: 14px 0 0;\n  color: #94a3b8;\n  font-size: .82rem;\n  text-align: center;\n}\n.ff a {\n  color: var(--bl);\n  font-weight: 700;\n}\n.rf {\n  width: 100%;\n  max-width: 400px;\n  margin-top: auto;\n  padding-top: 14px;\n  color: #94a3b8;\n  font-size: .68rem;\n  text-align: center;\n}\n.rf a {\n  margin: 0 6px;\n  color: #64748b;\n}\n.rf .cp {\n  margin-top: 4px;\n  color: #bcc5d0;\n  font-size: .6rem;\n}\n.su {\n  display: none;\n  padding: 20px 0;\n  text-align: center;\n}\n.su.sh {\n  display: block;\n}\n.su .ck {\n  display: flex;\n  width: 52px;\n  height: 52px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n  border: 2px solid var(--gn);\n  border-radius: 50%;\n  background: rgba(34, 197, 94, .08);\n  font-size: 1.4rem;\n}\n.su h2 {\n  margin: 0 0 3px;\n  font-size: 1.15rem;\n}\n.su p {\n  margin: 0 0 8px;\n  color: #64748b;\n  font-size: .85rem;\n}\n.su .su-note {\n  color: #94a3b8;\n  font-size: .8rem;\n  line-height: 1.6;\n}\n.zoho-frame {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .page {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .page {\n    grid-template-columns: 1fr;\n  }\n  .left {\n    min-height: 600px;\n    padding: 20px;\n  }\n  .lc > h1 {\n    font-size: 1.4rem;\n  }\n  .car {\n    padding: 14px;\n  }\n  .fi {\n    display: none;\n  }\n  .lf {\n    display: none;\n  }\n  .right {\n    min-height: 760px;\n    padding: 20px 18px;\n  }\n  .fr {\n    grid-template-columns: 1fr;\n  }\n}\n:host {\n  --nv:#0066ff;\n}\n.logo img {\n  filter: none;\n}\n.badge {\n  background: #0048bd;\n}\n.lc > h1 {\n  color: #fff;\n}\n.lc .sub {\n  color: rgba(255, 255, 255, .9);\n}\n.car {\n  border-color: rgba(255, 255, 255, .28);\n  background: rgba(0, 41, 120, .3);\n  box-shadow: 0 10px 28px rgba(0, 35, 100, .16);\n}\n.s-ey {\n  color: #d7e8ff;\n}\n.s-t {\n  color: #fff;\n}\n.s-d {\n  color: rgba(255, 255, 255, .88);\n}\n.tag {\n  border-color: rgba(255, 255, 255, .25);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n}\n.car-nav button {\n  border-color: rgba(255, 255, 255, .35);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n}\n.car-nav button:hover {\n  background: rgba(255, 255, 255, .25);\n  color: #fff;\n}\n.dot {\n  background: rgba(255, 255, 255, .5);\n}\n.dot.on {\n  background: #fff;\n}\n.ml {\n  border-color: rgba(255, 255, 255, .55);\n  color: #fff;\n}\n.ml:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .16);\n  color: #fff;\n}\n.lfi {\n  color: rgba(255, 255, 255, .82);\n}\n.rf,\n.rf a,\n.rf .cp {\n  color: #fff;\n}\n/*# sourceMappingURL=signup.page.css.map */\n'] }]
  }], () => [], { canvas: [{
    type: ViewChild,
    args: ["backgroundCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupPage, { className: "SignupPage", filePath: "src/app/pages/signup.page.ts", lineNumber: 41 });
})();
export {
  SignupPage
};
//# sourceMappingURL=chunk-ZD73XJ2X.js.map
