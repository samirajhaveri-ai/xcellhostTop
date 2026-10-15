import {
  SmbSectionNavComponent
} from "./chunk-JECKRT3F.js";
import "./chunk-CUVUGSTP.js";
import "./chunk-CRL34XPE.js";
import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
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
import "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/acme-certificate.page.ts
var _forTrack0 = ($index, $item) => $item.domain;
var _forTrack1 = ($index, $item) => $item.title;
function AcmeCertificatePage_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 116)(9, "small");
    \u0275\u0275text(10, "expires in ");
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "i");
    \u0275\u0275element(14, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const certificate_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(certificate_r1.domain);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(certificate_r1.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Sectigo \xB7 ", certificate_r1.challenge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", certificate_r1.days, "d");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", certificate_r1.days, "%");
  }
}
function AcmeCertificatePage_For_240_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function AcmeCertificatePage_For_240_Template_button_click_0_listener() {
      const \u0275$index_408_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedStep.set(\u0275$index_408_r3));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_408_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.selectedStep() === \u0275$index_408_r3);
    \u0275\u0275attribute("aria-selected", ctx_r3.selectedStep() === \u0275$index_408_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_408_r3 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.summary);
  }
}
function AcmeCertificatePage_For_250_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r6);
  }
}
var AcmeCertificatePage = class _AcmeCertificatePage {
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  selectedStep = signal(0, ...ngDevMode ? [{ debugName: "selectedStep" }] : []);
  validation = signal("dv", ...ngDevMode ? [{ debugName: "validation" }] : []);
  domains = signal(5, ...ngDevMode ? [{ debugName: "domains" }] : []);
  term = signal(1, ...ngDevMode ? [{ debugName: "term" }] : []);
  sectionNavLinks = [
    { label: "Overview", target: "overview" },
    { label: "Pricing", target: "pricing" },
    { label: "Security", target: "security-compliance" },
    { label: "Why to Choose", target: "why-acme" },
    { label: "Features", target: "how" },
    { label: "Customer Testimonials", target: "testimonials" },
    { label: "FAQs", target: "faqs" },
    { label: "Insights", target: "insights" }
  ];
  faqs = [
    ["What does ACME stand for?", "ACME stands for Automated Certificate Management Environment. It is the RFC 8555 protocol that lets software request, validate, install and renew SSL/TLS certificates automatically."],
    ["Does Sectigo ACME require External Account Binding?", "Yes. Sectigo uses an EAB key ID and HMAC token to connect your ACME client securely to the paid subscription in your XcellHost account."],
    ["Which ACME clients can I use?", "You can use any RFC 8555-compatible client, including Certbot, cert-manager, acme.sh, lego, win-acme, Certify The Web, Posh-ACME and dehydrated."],
    ["Can ACME secure internal servers?", "Yes. DNS-01 validation works for internal services and private endpoints that are not publicly reachable, as long as the required DNS record can be created."],
    ["What happens if an automatic renewal fails?", "The client retries automatically and can send alerts. XcellHost support can investigate validation, DNS, permissions or web-server configuration before the certificate expires."],
    ["Can I use one subscription on multiple servers?", "Yes. The ACME plans include unlimited server installations and free reissues for the covered domains during the subscription term."],
    ["What is the difference between DV and OV?", "DV verifies control of the domain and is issued quickly. OV also verifies the legal organisation, making it suitable for customer-facing portals, ecommerce and B2B services."],
    ["Will XcellHost configure ACME for us?", "Yes. We can install the client, configure EAB and HTTP-01 or DNS-01 validation, complete the first issuance and confirm automatic renewal with your team."]
  ];
  certificates = [
    { domain: "shop.yourbrand.in", type: "DV", challenge: "HTTP-01", days: 62 },
    { domain: "portal.yourbrand.co.in", type: "OV", challenge: "DNS-01", days: 34 },
    { domain: "api.yourbrand.in", type: "DV", challenge: "HTTP-01", days: 81 },
    { domain: "erp.internal.yourbrand.in", type: "OV", challenge: "DNS-01", days: 47 }
  ];
  steps = [
    {
      title: "Set up your ACME client",
      summary: "Install once on each server",
      description: "Install an RFC 8555-compatible client on every server, VM or container host that will hold a certificate.",
      points: ["Certbot, cert-manager, acme.sh and win-acme supported", "Works across Linux, Windows and Kubernetes", "XcellHost can install it with you"],
      command: "sudo apt install certbot python3-certbot-nginx"
    },
    {
      title: "Register with EAB credentials",
      summary: "Link the client to your account",
      description: "External Account Binding securely connects the ACME client to your paid Sectigo subscription.",
      points: ["EAB key ID and HMAC token per deployment", "One-time registration per client", "Credentials remain on your server"],
      command: 'certbot register --server https://acme.sectigo.com/v2/DV --eab-kid "$EAB_KID" --eab-hmac-key "$EAB_HMAC"'
    },
    {
      title: "Prove domain ownership",
      summary: "Complete HTTP-01 or DNS-01",
      description: "Sectigo asks the client to prove control of the domain using a short-lived HTTP token or DNS TXT record.",
      points: ["HTTP-01 for public web servers", "DNS-01 for private hosts and wildcards", "Usually completes in seconds"],
      command: "certbot certonly --nginx -d yourbrand.in -d www.yourbrand.in"
    },
    {
      title: "Certificate issued",
      summary: "Signed and delivered in minutes",
      description: "After validation, Sectigo returns the signed certificate directly to the client\u2014without email or manual downloads.",
      points: ["SHA-256 signature", "RSA 2048+ or ECC 256+", "Unlimited free reissues"],
      command: "Certificate saved to /etc/letsencrypt/live/yourbrand.in/fullchain.pem"
    },
    {
      title: "Installed and live",
      summary: "Configured for your web server",
      description: "The client installs the files, updates the server configuration and performs a graceful reload.",
      points: ["Apache, NGINX, IIS, Caddy, cPanel and Plesk", "Graceful reload with zero downtime", "HTTPS live on every listed host"],
      command: "certbot install --nginx --cert-name yourbrand.in && systemctl reload nginx"
    },
    {
      title: "Renews on its own",
      summary: "Before expiry, every time",
      description: "A scheduled job checks regularly and repeats validation, issuance and installation before the certificate expires.",
      points: ["Renews around 30 days before expiry", "Alerts if a renewal fails", "Runs throughout the subscription term"],
      command: "certbot renew --dry-run"
    }
  ];
  unitPrice = computed(() => this.validation() === "dv" ? 1699 : 7499, ...ngDevMode ? [{ debugName: "unitPrice" }] : []);
  listPrice = computed(() => this.unitPrice() * this.domains() * this.term(), ...ngDevMode ? [{ debugName: "listPrice" }] : []);
  discountRate = computed(() => this.term() === 2 ? 0.1 : this.term() === 3 ? 0.15 : 0, ...ngDevMode ? [{ debugName: "discountRate" }] : []);
  saving = computed(() => Math.round(this.listPrice() * this.discountRate()), ...ngDevMode ? [{ debugName: "saving" }] : []);
  subtotal = computed(() => this.listPrice() - this.saving(), ...ngDevMode ? [{ debugName: "subtotal" }] : []);
  gst = computed(() => Math.round(this.subtotal() * 0.18), ...ngDevMode ? [{ debugName: "gst" }] : []);
  payable = computed(() => this.subtotal() + this.gst(), ...ngDevMode ? [{ debugName: "payable" }] : []);
  constructor() {
    this.seo.set("ACME SSL Certificates | Automated DV & OV Renewal | XcellHost", "Automate Sectigo DV and OV certificate issuance, installation and renewal with ACME, EAB credentials and expert setup from XcellHost.", "/acme-enabled-ssl-certificates/");
  }
  selectValidation(value) {
    this.validation.set(value);
  }
  selectTerm(value) {
    this.term.set(value);
  }
  updateDomains(event) {
    const value = Number(event.target.value);
    this.domains.set(Math.min(100, Math.max(1, value)));
  }
  formatInr(value) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
  }
  requestCallback(topic = "ACME Certificate") {
    this.topics.ask(topic);
    this.overlay.open("callback");
  }
  static \u0275fac = function AcmeCertificatePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcmeCertificatePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcmeCertificatePage, selectors: [["xh-acme-certificate-page"]], decls: 866, vars: 32, consts: [[1, "acme-page"], ["aria-labelledby", "acme-hero-title", 1, "acme-hero"], [1, "wrap"], ["aria-label", "Breadcrumb", 1, "crumb"], ["href", "/"], [1, "hero-grid"], [1, "hero-copy"], ["id", "acme-hero-title"], [1, "hero-tag-secondary"], [1, "hero-type"], ["aria-hidden", "true"], [1, "hero-points"], [1, "hero-actions", "tally-style-actions"], ["href", "#overview", 1, "btn", "secondary"], ["href", "#how", 1, "btn", "secondary"], ["type", "button", 1, "btn", "primary", 3, "click"], ["role", "group", "aria-label", "Ask AI about ACME certificates from XcellHost", 1, "hero-ai"], ["href", "https://chatgpt.com/?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal", "target", "_blank", "rel", "noopener", "aria-label", "Ask ChatGPT", "title", "Ask ChatGPT"], ["href", "https://www.perplexity.ai/search/new?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal", "target", "_blank", "rel", "noopener", "aria-label", "Ask Perplexity", "title", "Ask Perplexity"], ["href", "https://claude.ai/new?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal", "target", "_blank", "rel", "noopener", "aria-label", "Ask Claude", "title", "Ask Claude"], ["href", "https://www.google.com/search?udm=50&q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal", "target", "_blank", "rel", "noopener", "aria-label", "Ask Google AI", "title", "Ask Google AI"], ["href", "https://grok.com/?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal", "target", "_blank", "rel", "noopener", "aria-label", "Ask Grok", "title", "Ask Grok"], [1, "hero-media"], ["href", "#how", 1, "hero-guide-player"], [1, "powered"], ["aria-label", "Example automated certificate fleet", 1, "fleet"], [1, "fleet-head"], [1, "fleet-list"], [1, "fleet-foot"], [1, "fleet-log"], ["aria-label", "XcellHost credentials", 1, "pp-trust"], ["label", "ACME certificate page sections", 3, "links"], ["id", "overview", "aria-labelledby", "lifetimes-title", 1, "acme-section"], ["id", "lifetimes-title", 1, "pp-sec"], [1, "pp-ov"], [1, "lifetime-layout"], [1, "timeline"], [2, "width", "100%"], [1, "current"], [2, "width", "50.25%"], [2, "width", "25.1%"], [2, "width", "11.8%"], [1, "renewal-callout"], ["id", "how", "aria-labelledby", "how-title", 1, "acme-section", "alt"], ["id", "how-title", 1, "pp-sec"], [1, "workflow"], ["role", "tablist", "aria-label", "ACME setup steps", 1, "step-list"], ["type", "button", "role", "tab", 3, "active"], ["aria-live", "polite", 1, "step-panel"], [1, "terminal"], ["id", "pricing", "aria-labelledby", "plans-title", 1, "acme-section"], ["id", "plans-title", 1, "pp-sec"], [1, "plan-grid"], [1, "plan-card"], [1, "plan-top"], [1, "price"], [1, "gst-line"], [1, "plan-actions"], ["href", "#configure", 1, "plan-button"], ["type", "button", 3, "click"], [1, "plan-card", "featured"], [1, "flag"], ["href", "#configure", 1, "plan-button", "orange"], ["id", "configure", "aria-labelledby", "configure-title", 1, "acme-section", "alt"], ["id", "configure-title", 1, "pp-sec"], [1, "calculator"], [1, "calculator-controls"], [1, "segmented"], ["type", "range", "min", "1", "max", "100", 3, "input", "value"], [1, "segmented", "three"], [1, "setup-note"], ["type", "checkbox", "checked", ""], [1, "estimate"], [1, "saving"], [1, "payable"], ["type", "button", 1, "outline", 3, "click"], [1, "estimate-fine"], ["id", "comparison", "aria-labelledby", "comparison-title", 1, "acme-section"], ["id", "comparison-title", 1, "pp-sec"], [1, "table-wrap"], ["id", "compatibility", "aria-labelledby", "compatibility-title", 1, "acme-section", "alt"], ["id", "compatibility-title", 1, "pp-sec"], [1, "compatibility-grid"], ["id", "use-cases", "aria-labelledby", "teams-title", 1, "acme-section"], ["id", "teams-title", 1, "pp-sec"], [1, "card-grid", "four", "use-cases"], [1, "case-icon"], [1, "case-icon", "orange"], [1, "case-icon", "navy"], [1, "case-icon", "green"], ["id", "why-xcellhost", "aria-labelledby", "why-xcellhost-title", 1, "acme-section", "alt"], ["id", "why-xcellhost-title", 1, "pp-sec"], [1, "card-grid", "benefits"], ["id", "security-compliance", "aria-labelledby", "security-compliance-title", 1, "acme-section", "default-tail"], ["id", "security-compliance-title", 1, "pp-sec"], [1, "pp-secrows"], [1, "psrow"], [1, "psk"], [1, "psv"], [1, "pp-secfoot"], ["id", "why-acme", "aria-labelledby", "why-acme-title", 1, "acme-section", "alt", "default-tail"], ["id", "why-acme-title", 1, "pp-sec"], [1, "pp-why"], [1, "pw"], ["aria-hidden", "true", 1, "pw-ic"], ["id", "testimonials", "aria-labelledby", "testimonials-title", 1, "acme-section", "default-tail"], ["id", "testimonials-title", 1, "pp-sec"], [1, "pp-revs"], [1, "prv"], ["aria-label", "5 out of 5 stars", 1, "stars"], [1, "rav"], ["id", "faqs", "aria-labelledby", "faqs-title", 1, "acme-section", "alt", "default-tail"], ["id", "faqs-title", 1, "pp-sec", "pp-faq-heading"], [1, "pp-faq"], ["idPrefix", "acmeFaq", 3, "faqs"], ["pageSlug", "acme-enabled-ssl-certificates", 3, "showVideos"], [1, "life"], ["type", "button", "role", "tab", 3, "click"]], template: function AcmeCertificatePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Digital Trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "b");
      \u0275\u0275text(13, "ACME Certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "div", 6)(16, "h1", 7);
      \u0275\u0275text(17, "ACME ");
      \u0275\u0275elementStart(18, "em");
      \u0275\u0275text(19, "Certificates ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 8);
      \u0275\u0275text(21, "Your infrastructure depends on certificates. Let ACME keep every endpoint protected.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9)(23, "span");
      \u0275\u0275text(24, "Renew certificates automatically, before they expire");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul", 11)(27, "li")(28, "span");
      \u0275\u0275text(29, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, "Automated certificate issuance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "span");
      \u0275\u0275text(33, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, "Zero-downtime renewals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li")(36, "span");
      \u0275\u0275text(37, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "DV and OV certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "li")(40, "span");
      \u0275\u0275text(41, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, "HTTP-01 and DNS-01 validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "li")(44, "span");
      \u0275\u0275text(45, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, "Unlimited free reissues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "li")(48, "span");
      \u0275\u0275text(49, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, "Every server and workload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 12)(52, "a", 13)(53, "span", 10);
      \u0275\u0275text(54, "\u25A3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Screenshot tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "a", 14)(57, "span", 10);
      \u0275\u0275text(58, "\u25A6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Free Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 15);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_60_listener() {
        return ctx.requestCallback("ACME certificate consultation");
      });
      \u0275\u0275text(61, "Let's Talk ");
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 16)(65, "span");
      \u0275\u0275text(66, "\u2726 Ask AI About ACME Certificates from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div")(68, "a", 17)(69, "b");
      \u0275\u0275text(70, "AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "a", 18)(72, "b");
      \u0275\u0275text(73, "P");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "a", 19)(75, "b");
      \u0275\u0275text(76, "C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "a", 20)(78, "b");
      \u0275\u0275text(79, "G");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "a", 21)(81, "b");
      \u0275\u0275text(82, "X");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 22)(84, "strong")(85, "span", 10);
      \u0275\u0275text(86, "\u25AE\u25AE\u25AE");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " Explore ACME certificate automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "a", 23)(89, "span", 10);
      \u0275\u0275text(90, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "b");
      \u0275\u0275text(92, "See the six-step workflow");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 24)(95, "small");
      \u0275\u0275text(96, "Powered by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span", 10);
      \u0275\u0275text(98, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "b");
      \u0275\u0275text(100, "Sectigo ACME");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 25)(102, "div", 26)(103, "b")(104, "span");
      \u0275\u0275text(105, "\u21BB");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " Certificate fleet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "small");
      \u0275\u0275text(108, "LIVE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 27);
      \u0275\u0275repeaterCreate(110, AcmeCertificatePage_For_111_Template, 15, 6, "article", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 28)(113, "span")(114, "b");
      \u0275\u0275text(115, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "small");
      \u0275\u0275text(117, "Auto-renewed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "span")(119, "b");
      \u0275\u0275text(120, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "small");
      \u0275\u0275text(122, "Expired");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "span")(124, "b");
      \u0275\u0275text(125, "4d");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "small");
      \u0275\u0275text(127, "Next renewal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 29);
      \u0275\u0275element(129, "span");
      \u0275\u0275elementStart(130, "code");
      \u0275\u0275text(131, "acme-client");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, " watching certificates\u2026");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(133, "div", 30)(134, "div", 2)(135, "span")(136, "b");
      \u0275\u0275text(137, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275text(138, " & ");
      \u0275\u0275elementStart(139, "b");
      \u0275\u0275text(140, "20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(141, " certified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "span");
      \u0275\u0275text(143, "Microsoft ");
      \u0275\u0275elementStart(144, "b");
      \u0275\u0275text(145, "Gold Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "span")(147, "b");
      \u0275\u0275text(148, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, " customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "span")(151, "b");
      \u0275\u0275text(152, "Since 1999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "span")(154, "b");
      \u0275\u0275text(155, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "span")(157, "b");
      \u0275\u0275text(158, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(160, "xh-smb-section-nav", 31);
      \u0275\u0275elementStart(161, "section", 32)(162, "div", 2)(163, "h2", 33);
      \u0275\u0275text(164, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 34);
      \u0275\u0275text(166, "The CA/Browser Forum is reducing the maximum validity of public TLS certificates in stages. Each reduction means more renewals\u2014which becomes unmanageable by hand once you run more than a few sites.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 35)(168, "div", 36)(169, "article")(170, "span")(171, "b");
      \u0275\u0275text(172, "Until Mar 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, "Before 15 Mar 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "i")(175, "b", 37);
      \u0275\u0275text(176, "398 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "em");
      \u0275\u0275text(178, "1\xD7 ");
      \u0275\u0275elementStart(179, "small");
      \u0275\u0275text(180, "per year");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "article", 38)(182, "span")(183, "b");
      \u0275\u0275text(184, "From Mar 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "15 Mar 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "i")(187, "b", 39);
      \u0275\u0275text(188, "200 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "em");
      \u0275\u0275text(190, "2\xD7 ");
      \u0275\u0275elementStart(191, "small");
      \u0275\u0275text(192, "per year");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "article")(194, "span")(195, "b");
      \u0275\u0275text(196, "From Mar 2027");
      \u0275\u0275elementEnd();
      \u0275\u0275text(197, "15 Mar 2027");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "i")(199, "b", 40);
      \u0275\u0275text(200, "100 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "em");
      \u0275\u0275text(202, "4\xD7 ");
      \u0275\u0275elementStart(203, "small");
      \u0275\u0275text(204, "per year");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "article")(206, "span")(207, "b");
      \u0275\u0275text(208, "From Mar 2029");
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, "15 Mar 2029");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "i")(211, "b", 41);
      \u0275\u0275text(212, "47 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "em");
      \u0275\u0275text(214, "8\xD7 ");
      \u0275\u0275elementStart(215, "small");
      \u0275\u0275text(216, "per year");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "aside", 42)(218, "strong");
      \u0275\u0275text(219, "200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "h3");
      \u0275\u0275text(221, "manual renewals a year for 25 sites by 2029");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "p");
      \u0275\u0275text(223, "With ACME, the client renews well before expiry, on its own, every time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div")(225, "span");
      \u0275\u0275text(226, "90-day certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "span");
      \u0275\u0275text(228, "Renews early");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "span");
      \u0275\u0275text(230, "Zero downtime");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(231, "section", 43)(232, "div", 2)(233, "h2", 44);
      \u0275\u0275text(234, "How it works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 34);
      \u0275\u0275text(236, "Set up once and the ACME client handles every renewal for the life of your subscription. Select any step to see what happens\u2014and the command behind it.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 45)(238, "div", 46);
      \u0275\u0275repeaterCreate(239, AcmeCertificatePage_For_240_Template, 8, 6, "button", 47, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "article", 48)(242, "span");
      \u0275\u0275text(243);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "h3");
      \u0275\u0275text(245);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "p");
      \u0275\u0275text(247);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "ul");
      \u0275\u0275repeaterCreate(249, AcmeCertificatePage_For_250_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 49)(252, "div");
      \u0275\u0275element(253, "i")(254, "i")(255, "i");
      \u0275\u0275elementStart(256, "span");
      \u0275\u0275text(257, "bash");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "code")(259, "b");
      \u0275\u0275text(260, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275text(261);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(262, "section", 50)(263, "div", 2)(264, "h2", 51);
      \u0275\u0275text(265, "Plans & Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "p", 34);
      \u0275\u0275text(267, "Both include unlimited server installs, unlimited free reissues and External Account Binding credentials from your XcellHost dashboard. Prices are per domain, per year.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 52)(269, "article", 53)(270, "div", 54)(271, "span");
      \u0275\u0275text(272, "\u25A3 Sectigo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "small");
      \u0275\u0275text(274, "Domain Validated");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "h3");
      \u0275\u0275text(276, "ACME Certificate \u2014 DV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p");
      \u0275\u0275text(278, "Fast, fully automated HTTPS for websites, APIs and apps. Validation proves domain control only\u2014issued in minutes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 55)(280, "b");
      \u0275\u0275text(281, "\u20B91,699");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "span");
      \u0275\u0275text(283, "/ domain / year");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "div", 56);
      \u0275\u0275text(285, "Indicative \xB7 excl. 18% GST \xB7 multi-year discounts available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "dl")(287, "div")(288, "dd");
      \u0275\u0275text(289, "US$500,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "dt");
      \u0275\u0275text(291, "Warranty");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div")(293, "dd");
      \u0275\u0275text(294, "1\u2013999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "dt");
      \u0275\u0275text(296, "Domains + free www");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div")(298, "dd");
      \u0275\u0275text(299, "SHA-256");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "dt");
      \u0275\u0275text(301, "Signature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div")(303, "dd");
      \u0275\u0275text(304, "Up to 256-bit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "dt");
      \u0275\u0275text(306, "Encryption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "div")(308, "dd");
      \u0275\u0275text(309, "RSA 2048+ / ECC 256+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "dt");
      \u0275\u0275text(311, "Key types");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "div")(313, "dd");
      \u0275\u0275text(314, "90 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "dt");
      \u0275\u0275text(316, "Default cert life");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "ul")(318, "li")(319, "b");
      \u0275\u0275text(320, "Automated renewal");
      \u0275\u0275elementEnd();
      \u0275\u0275text(321, " via HTTP-01 or DNS-01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "li")(323, "b");
      \u0275\u0275text(324, "Unlimited server licences");
      \u0275\u0275elementEnd();
      \u0275\u0275text(325, "\u2014one cert, every node");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "li")(327, "b");
      \u0275\u0275text(328, "Unlimited reissues");
      \u0275\u0275elementEnd();
      \u0275\u0275text(329, " at no cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "li");
      \u0275\u0275text(331, "Live chat & ticket support, ");
      \u0275\u0275elementStart(332, "b");
      \u0275\u0275text(333, "30-day refund");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(334, "div", 57)(335, "a", 58);
      \u0275\u0275text(336, "Configure DV ");
      \u0275\u0275elementStart(337, "span");
      \u0275\u0275text(338, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_339_listener() {
        return ctx.requestCallback("ACME DV certificate");
      });
      \u0275\u0275text(340, "\u{1F6D2}\xA0 Add 1 domain \xB7 1 year");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(341, "article", 60)(342, "span", 61);
      \u0275\u0275text(343, "FOR BUSINESSES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 54)(345, "span");
      \u0275\u0275text(346, "\u25A3 Sectigo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "small");
      \u0275\u0275text(348, "Organization Validated");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "h3");
      \u0275\u0275text(350, "ACME Certificate \u2014 OV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "p");
      \u0275\u0275text(352, "Your verified company name in the certificate\u2014for customer-facing portals, banking, ecommerce and B2B apps.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "div", 55)(354, "b");
      \u0275\u0275text(355, "\u20B97,499");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "span");
      \u0275\u0275text(357, "/ domain / year");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 56);
      \u0275\u0275text(359, "Indicative \xB7 excl. 18% GST \xB7 multi-year discounts available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "dl")(361, "div")(362, "dd");
      \u0275\u0275text(363, "US$1,000,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "dt");
      \u0275\u0275text(365, "Warranty");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div")(367, "dd");
      \u0275\u0275text(368, "1\u2013999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "dt");
      \u0275\u0275text(370, "Domains + free www");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div")(372, "dd");
      \u0275\u0275text(373, "SHA-256");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "dt");
      \u0275\u0275text(375, "Signature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "div")(377, "dd");
      \u0275\u0275text(378, "Up to 256-bit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "dt");
      \u0275\u0275text(380, "Encryption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "div")(382, "dd");
      \u0275\u0275text(383, "RSA 2048+ / ECC 256+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "dt");
      \u0275\u0275text(385, "Key types");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div")(387, "dd");
      \u0275\u0275text(388, "90 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "dt");
      \u0275\u0275text(390, "Default cert life");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "ul")(392, "li")(393, "b");
      \u0275\u0275text(394, "Organisation verified");
      \u0275\u0275elementEnd();
      \u0275\u0275text(395, " once, then renewals stay automatic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "li")(397, "b");
      \u0275\u0275text(398, "Unlimited server licences");
      \u0275\u0275elementEnd();
      \u0275\u0275text(399, " and reissues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "li")(401, "b");
      \u0275\u0275text(402, "EAB credentials");
      \u0275\u0275elementEnd();
      \u0275\u0275text(403, " issued from your dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "li");
      \u0275\u0275text(405, "Priority support, ");
      \u0275\u0275elementStart(406, "b");
      \u0275\u0275text(407, "30-day refund");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(408, "div", 57)(409, "a", 62);
      \u0275\u0275text(410, "Configure OV ");
      \u0275\u0275elementStart(411, "span");
      \u0275\u0275text(412, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_413_listener() {
        return ctx.requestCallback("ACME OV certificate");
      });
      \u0275\u0275text(414, "\u{1F6D2}\xA0 Add 1 domain \xB7 1 year");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(415, "section", 63)(416, "div", 2)(417, "h2", 64);
      \u0275\u0275text(418, "Configure & buy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "p", 34);
      \u0275\u0275text(420, "Pick the validation type, how many domains you need to cover and the term. Adding domains later is billed only for the days left in your subscription.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "div", 65)(422, "div", 66)(423, "fieldset")(424, "legend");
      \u0275\u0275text(425, "Validation type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "div", 67)(427, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_427_listener() {
        return ctx.selectValidation("dv");
      });
      \u0275\u0275text(428, "Domain Validated");
      \u0275\u0275elementStart(429, "small");
      \u0275\u0275text(430, "\u20B91,699 / domain / yr");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_431_listener() {
        return ctx.selectValidation("ov");
      });
      \u0275\u0275text(432, "Organization Validated");
      \u0275\u0275elementStart(433, "small");
      \u0275\u0275text(434, "\u20B97,499 / domain / yr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(435, "label");
      \u0275\u0275text(436, "Domains to secure ");
      \u0275\u0275elementStart(437, "output");
      \u0275\u0275text(438);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "input", 68);
      \u0275\u0275listener("input", function AcmeCertificatePage_Template_input_input_439_listener($event) {
        return ctx.updateDomains($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "small");
      \u0275\u0275text(441, "Each domain includes its www/non-www pair. Ask us about subscriptions covering up to 999 domains.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(442, "fieldset")(443, "legend");
      \u0275\u0275text(444, "Term");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "div", 69)(446, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_446_listener() {
        return ctx.selectTerm(1);
      });
      \u0275\u0275text(447, "1 year");
      \u0275\u0275elementStart(448, "small");
      \u0275\u0275text(449, "list price");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(450, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_450_listener() {
        return ctx.selectTerm(2);
      });
      \u0275\u0275text(451, "2 years");
      \u0275\u0275elementStart(452, "small");
      \u0275\u0275text(453, "save 10%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(454, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_454_listener() {
        return ctx.selectTerm(3);
      });
      \u0275\u0275text(455, "3 years");
      \u0275\u0275elementStart(456, "small");
      \u0275\u0275text(457, "save 15%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(458, "label");
      \u0275\u0275text(459, "Your ACME client");
      \u0275\u0275elementStart(460, "select")(461, "option");
      \u0275\u0275text(462, "Certbot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "option");
      \u0275\u0275text(464, "cert-manager (Kubernetes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "option");
      \u0275\u0275text(466, "acme.sh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "option");
      \u0275\u0275text(468, "lego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "option");
      \u0275\u0275text(470, "win-acme (IIS)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "option");
      \u0275\u0275text(472, "Not sure yet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(473, "label", 70);
      \u0275\u0275element(474, "input", 71)(475, "span");
      \u0275\u0275elementStart(476, "p")(477, "b");
      \u0275\u0275text(478, "XcellHost sets it up for me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "small");
      \u0275\u0275text(480, "We install the client, configure EAB and run the first issuance with you\u2014included free.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(481, "aside", 72)(482, "span");
      \u0275\u0275text(483, "Your estimate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "strong");
      \u0275\u0275text(485);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "small");
      \u0275\u0275text(487);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "dl")(489, "div")(490, "dt");
      \u0275\u0275text(491);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "dd");
      \u0275\u0275text(493);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "div", 73)(495, "dt");
      \u0275\u0275text(496, "Multi-year saving");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "dd");
      \u0275\u0275text(498);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(499, "div")(500, "dt");
      \u0275\u0275text(501, "Effective per domain/year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "dd");
      \u0275\u0275text(503);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "div")(505, "dt");
      \u0275\u0275text(506, "GST (18%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "dd");
      \u0275\u0275text(508);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(509, "div", 74)(510, "dt");
      \u0275\u0275text(511, "Payable incl. GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "dd");
      \u0275\u0275text(513);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(514, "button", 59);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_514_listener() {
        return ctx.requestCallback("ACME certificate purchase");
      });
      \u0275\u0275text(515, "\u{1F6D2}\xA0 Add to cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "button", 75);
      \u0275\u0275listener("click", function AcmeCertificatePage_Template_button_click_516_listener() {
        return ctx.requestCallback("ACME setup and EAB help");
      });
      \u0275\u0275text(517, "Talk to an SSL expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "p", 76);
      \u0275\u0275text(519, "Indicative pricing in INR, excl. GST. Final price confirmed on your GST invoice.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(520, "section", 77)(521, "div", 2)(522, "h2", 78);
      \u0275\u0275text(523, "ACME vs traditional SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "p", 34);
      \u0275\u0275text(525, "See how an automated ACME workflow replaces the repetitive steps of traditional SSL certificate management.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "div", 79)(527, "table")(528, "thead")(529, "tr")(530, "th");
      \u0275\u0275text(531, "Task");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "th");
      \u0275\u0275text(533, "Traditional SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "th");
      \u0275\u0275text(535, "ACME with XcellHost");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(536, "tbody")(537, "tr")(538, "td");
      \u0275\u0275text(539, "Getting a certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "td");
      \u0275\u0275text(541, "Generate a CSR, submit it, wait, download files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "td");
      \u0275\u0275text(543, "Client requests and receives it automatically");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "tr")(545, "td");
      \u0275\u0275text(546, "Domain validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "td");
      \u0275\u0275text(548, "Email approvals or manual file uploads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "td");
      \u0275\u0275text(550, "HTTP-01 or DNS-01 challenge, solved by the client");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "tr")(552, "td");
      \u0275\u0275text(553, "Installation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "td");
      \u0275\u0275text(555, "Copy files to every server, edit configs, restart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "td");
      \u0275\u0275text(557, "Installed and reloaded on each server automatically");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(558, "tr")(559, "td");
      \u0275\u0275text(560, "Renewal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "td");
      \u0275\u0275text(562, "Calendar reminders\u2014and the occasional expired site");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "td");
      \u0275\u0275text(564, "Renews ~30 days before expiry, with zero downtime");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(565, "tr")(566, "td");
      \u0275\u0275text(567, "Scaling to more domains");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "td");
      \u0275\u0275text(569, "Effort grows with every domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "td");
      \u0275\u0275text(571, "Add domains to the same setup; billed pro-rata");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(572, "tr")(573, "td");
      \u0275\u0275text(574, "Best for");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "td");
      \u0275\u0275text(576, "A handful of static sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "td");
      \u0275\u0275text(578, "DevOps teams, hosting providers, SaaS and growing estates");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(579, "section", 80)(580, "div", 2)(581, "h2", 81);
      \u0275\u0275text(582, "Works with the tools you already run");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "p", 34);
      \u0275\u0275text(584, "Sectigo ACME is standards-based ACME v2 (RFC 8555), so any compliant client works. These are the tools and environments our team sets up most often.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "div", 82)(586, "article")(587, "h3");
      \u0275\u0275text(588, "ACME clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "p");
      \u0275\u0275text(590, "Command-line, Kubernetes-native and Windows clients.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(591, "div")(592, "span");
      \u0275\u0275text(593, "Certbot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "span");
      \u0275\u0275text(595, "cert-manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "span");
      \u0275\u0275text(597, "acme.sh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "span");
      \u0275\u0275text(599, "lego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "span");
      \u0275\u0275text(601, "win-acme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "span");
      \u0275\u0275text(603, "Certify The Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "span");
      \u0275\u0275text(605, "Posh-ACME");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "span");
      \u0275\u0275text(607, "dehydrated");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(608, "article")(609, "h3");
      \u0275\u0275text(610, "Server environments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p");
      \u0275\u0275text(612, "Install and auto-reload on the platforms you host on.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "div")(614, "span");
      \u0275\u0275text(615, "Apache");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "span");
      \u0275\u0275text(617, "NGINX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "span");
      \u0275\u0275text(619, "cPanel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "span");
      \u0275\u0275text(621, "Plesk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "span");
      \u0275\u0275text(623, "Docker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "span");
      \u0275\u0275text(625, "Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "span");
      \u0275\u0275text(627, "Microsoft IIS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(628, "span");
      \u0275\u0275text(629, "Caddy");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(630, "section", 83)(631, "div", 2)(632, "h2", 84);
      \u0275\u0275text(633, "Built for teams with more than a few sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(634, "p", 34);
      \u0275\u0275text(635, "Automated certificate management fits any environment where certificates must be issued quickly and renewed reliably at scale.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "div", 85)(637, "article")(638, "span", 86);
      \u0275\u0275text(639, "\u2318");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "small");
      \u0275\u0275text(641, "DevOps & CI/CD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "h3");
      \u0275\u0275text(643, "Certificates in the pipeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "p");
      \u0275\u0275text(645, "Every new environment gets a valid certificate as part of the deploy\u2014no tickets, no waiting.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(646, "article")(647, "span", 87);
      \u0275\u0275text(648, "\u25A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "small");
      \u0275\u0275text(650, "Hosting providers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "h3");
      \u0275\u0275text(652, "Thousands of customer sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "p");
      \u0275\u0275text(654, "Issue and renew for every hosted domain from one automated setup, billed per domain.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(655, "article")(656, "span", 88);
      \u0275\u0275text(657, "\u2B21");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(658, "small");
      \u0275\u0275text(659, "SaaS platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "h3");
      \u0275\u0275text(661, "Custom domains for tenants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "p");
      \u0275\u0275text(663, "Secure each customer's vanity domain the moment they point it at your platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "article")(665, "span", 89);
      \u0275\u0275text(666, "\u25A7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "small");
      \u0275\u0275text(668, "Internal networks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(669, "h3");
      \u0275\u0275text(670, "Private endpoints too");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(671, "p");
      \u0275\u0275text(672, "DNS-01 validation works even when the server isn't reachable from the internet.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(673, "section", 90)(674, "div", 2)(675, "h2", 91);
      \u0275\u0275text(676, "Why buy from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "p", 34);
      \u0275\u0275text(678, "Buy from an authorised Sectigo partner in Mumbai\u2014billed in rupees with a GST invoice and backed by engineers who set up ACME workflows every week.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "div", 92)(680, "article")(681, "span");
      \u0275\u0275text(682, "\u2315");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "h3");
      \u0275\u0275text(684, "Client setup, done with you");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "p");
      \u0275\u0275text(686, "We install and configure your ACME client, wire DNS-01 where you need wildcards or private hosts, and run the first issuance together.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(687, "article")(688, "span");
      \u0275\u0275text(689, "\u26BF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "h3");
      \u0275\u0275text(691, "EAB credentials, explained");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "p");
      \u0275\u0275text(693, "Sectigo ACME uses External Account Binding\u2014a key ID and HMAC token per deployment. We issue them from your dashboard and show you where they go.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(694, "article")(695, "span");
      \u0275\u0275text(696, "\u25A6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(697, "h3");
      \u0275\u0275text(698, "One dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "p");
      \u0275\u0275text(700, "Every certificate, domain and renewal in one place, alongside your other XcellHost services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "article")(702, "span");
      \u0275\u0275text(703, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "h3");
      \u0275\u0275text(705, "INR billing & GST invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "p");
      \u0275\u0275text(707, "Pay by UPI, card or net banking. Multi-year discounts and no hidden fees.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(708, "article")(709, "span");
      \u0275\u0275text(710, "\u2667");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(711, "h3");
      \u0275\u0275text(712, "24\xD77 expert support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "p");
      \u0275\u0275text(714, "Real engineers on phone, WhatsApp and tickets\u2014round the clock, in your time zone.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(715, "article")(716, "span");
      \u0275\u0275text(717, "\u2662");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "h3");
      \u0275\u0275text(719, "Authorised CA partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "p");
      \u0275\u0275text(721, "Genuine Sectigo certificates trusted by 99% of browsers, operating systems and mobile devices.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(722, "section", 93)(723, "div", 2)(724, "h2", 94);
      \u0275\u0275text(725, "Security & compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "p", 34);
      \u0275\u0275text(727, "Sectigo ACME combines trusted public certificates with automated validation, secure account binding and repeatable renewal workflows that reduce certificate risk across your estate.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "div", 95)(729, "div", 96)(730, "span", 97);
      \u0275\u0275text(731, "Certificate authority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(732, "span", 98);
      \u0275\u0275text(733, "Sectigo public trust");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(734, "div", 96)(735, "span", 97);
      \u0275\u0275text(736, "Automation standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "span", 98);
      \u0275\u0275text(738, "ACME v2 \xB7 RFC 8555");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(739, "div", 96)(740, "span", 97);
      \u0275\u0275text(741, "Account security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "span", 98);
      \u0275\u0275text(743, "External Account Binding");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(744, "div", 96)(745, "span", 97);
      \u0275\u0275text(746, "Domain validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(747, "span", 98);
      \u0275\u0275text(748, "HTTP-01 or DNS-01");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(749, "div", 96)(750, "span", 97);
      \u0275\u0275text(751, "Cryptography");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "span", 98);
      \u0275\u0275text(753, "SHA-256 \xB7 RSA 2048+ \xB7 ECC 256+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(754, "div", 96)(755, "span", 97);
      \u0275\u0275text(756, "Transport encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "span", 98);
      \u0275\u0275text(758, "Up to 256-bit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(759, "div", 96)(760, "span", 97);
      \u0275\u0275text(761, "Renewal protection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(762, "span", 98);
      \u0275\u0275text(763, "Automated checks and early renewal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(764, "div", 96)(765, "span", 97);
      \u0275\u0275text(766, "Operational support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "span", 98);
      \u0275\u0275text(768, "24\xD77 XcellHost NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(769, "p", 99);
      \u0275\u0275text(770, "XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 DPDPA-aligned operations \xB7 GST-compliant Indian billing.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(771, "section", 100)(772, "div", 2)(773, "h2", 101);
      \u0275\u0275text(774, "Why XcellHost for ACME Certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "div", 102)(776, "article", 103)(777, "span", 104);
      \u0275\u0275text(778, "\u21BB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "b");
      \u0275\u0275text(780, "Automation expertise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(781, "span");
      \u0275\u0275text(782, "We configure clients, EAB credentials, validation and renewals as one reliable workflow.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(783, "article", 103)(784, "span", 104);
      \u0275\u0275text(785, "\u25C7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "b");
      \u0275\u0275text(787, "Trusted Sectigo certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "span");
      \u0275\u0275text(789, "Deploy genuine DV and OV certificates recognised by major browsers and devices.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(790, "article", 103)(791, "span", 104);
      \u0275\u0275text(792, "DNS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "b");
      \u0275\u0275text(794, "HTTP-01 and DNS-01 help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "span");
      \u0275\u0275text(796, "Secure public websites, private endpoints, Kubernetes services and wildcard domains.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(797, "article", 103)(798, "span", 104);
      \u0275\u0275text(799, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "b");
      \u0275\u0275text(801, "INR billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "span");
      \u0275\u0275text(803, "Pay locally with a GST invoice, predictable pricing and multi-year savings.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(804, "article", 103)(805, "span", 104);
      \u0275\u0275text(806, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "b");
      \u0275\u0275text(808, "24\xD77 expert support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "span");
      \u0275\u0275text(810, "Get renewal and deployment assistance from engineers in your time zone.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(811, "article", 103)(812, "span", 104);
      \u0275\u0275text(813, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "b");
      \u0275\u0275text(815, "First issuance included");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "span");
      \u0275\u0275text(817, "We validate the complete process with your team before handing over automation.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(818, "section", 105)(819, "div", 2)(820, "h2", 106);
      \u0275\u0275text(821, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "div", 107)(823, "article", 108)(824, "div", 109);
      \u0275\u0275text(825, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "p");
      \u0275\u0275text(827, "\u201CXcellHost moved our certificates to ACME and tested every renewal path. We no longer track expiry dates in spreadsheets.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "cite")(829, "span", 110);
      \u0275\u0275text(830, "RK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "span")(832, "b");
      \u0275\u0275text(833, "Rohan Kulkarni");
      \u0275\u0275elementEnd();
      \u0275\u0275text(834, "Infrastructure Lead \xB7 SaaS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(835, "article", 108)(836, "div", 109);
      \u0275\u0275text(837, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "p");
      \u0275\u0275text(839, "\u201CDNS-01 automation now protects both our public sites and internal services. Their team handled the first deployment end to end.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(840, "cite")(841, "span", 110);
      \u0275\u0275text(842, "AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "span")(844, "b");
      \u0275\u0275text(845, "Ananya Mehta");
      \u0275\u0275elementEnd();
      \u0275\u0275text(846, "DevOps Manager \xB7 Fintech");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(847, "article", 108)(848, "div", 109);
      \u0275\u0275text(849, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(850, "p");
      \u0275\u0275text(851, "\u201CThe Sectigo OV setup, EAB registration and automatic reloads all worked exactly as promised, with clear local support.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(852, "cite")(853, "span", 110);
      \u0275\u0275text(854, "VS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "span")(856, "b");
      \u0275\u0275text(857, "Vikram Shah");
      \u0275\u0275elementEnd();
      \u0275\u0275text(858, "Technology Director \xB7 Ecommerce");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(859, "section", 111)(860, "div", 2)(861, "h2", 112);
      \u0275\u0275text(862, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(863, "div", 113);
      \u0275\u0275element(864, "xh-product-faq", 114);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(865, "xh-insights-section", 115);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(110);
      \u0275\u0275repeater(ctx.certificates);
      \u0275\u0275advance(50);
      \u0275\u0275property("links", ctx.sectionNavLinks);
      \u0275\u0275advance(79);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Step ", ctx.selectedStep() + 1, " of 6");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.steps[ctx.selectedStep()].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.steps[ctx.selectedStep()].description);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.steps[ctx.selectedStep()].points);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.steps[ctx.selectedStep()].command);
      \u0275\u0275advance(166);
      \u0275\u0275classProp("active", ctx.validation() === "dv");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.validation() === "ov");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.domains(), " domains");
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-size", ctx.domains(), "%");
      \u0275\u0275property("value", ctx.domains());
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.term() === 1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.term() === 2);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.term() === 3);
      \u0275\u0275advance(31);
      \u0275\u0275textInterpolate1("\u20B9", ctx.formatInr(ctx.subtotal()));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("Total for ", ctx.term(), " ", ctx.term() === 1 ? "year" : "years", ", excluding GST");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate3("", ctx.domains(), " \xD7 ", ctx.validation().toUpperCase(), " \xD7 ", ctx.term(), " yr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u20B9", ctx.formatInr(ctx.listPrice()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.saving() ? "\u2212\u20B9" + ctx.formatInr(ctx.saving()) : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.formatInr(ctx.subtotal() / ctx.domains() / ctx.term()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.formatInr(ctx.gst()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u20B9", ctx.formatInr(ctx.payable()));
      \u0275\u0275advance(351);
      \u0275\u0275property("faqs", ctx.faqs);
      \u0275\u0275advance();
      \u0275\u0275property("showVideos", false);
    }
  }, dependencies: [InsightsSectionComponent, ProductFaqComponent, SmbSectionNavComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --navy:#041e42;\n  --blue:#1565d8;\n  --blue-d:#0c3e8f;\n  --blue-soft:#e8f0fd;\n  --orange:#ff8c1a;\n  --orange-d:#e97000;\n  --ice:#f2f6fc;\n  --ink:#1c2a3a;\n  --slate:#51607a;\n  --line:#dce5f2;\n  --green:#16a34a;\n  --shadow:0 18px 50px rgba(4,30,66,.1);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.acme-page[_ngcontent-%COMP%] {\n  overflow: clip;\n  background: #fff;\n  color: var(--ink);\n  font-family: var(--body);\n}\n.wrap[_ngcontent-%COMP%] {\n  width: min(1248px, 100%);\n  margin: 0 auto;\n  padding-inline: 24px;\n}\n.acme-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 34px 0 0;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      rgba(21, 101, 216, .28),\n      transparent 32%),\n    linear-gradient(\n      135deg,\n      #03152f,\n      #082b61 60%,\n      #0b3f82);\n  color: #fff;\n}\n.acme-hero[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .035) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent);\n}\n.acme-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 34px;\n  color: #aebfd9;\n  font: 500 11px var(--mono);\n}\n.crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.crumb[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #9cc0ff;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.03fr .97fr;\n  gap: 64px;\n  align-items: center;\n  padding-bottom: 48px;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 18px;\n  color: #8ab4ff;\n  font: 700 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 670px;\n  margin: 0 0 20px;\n  color: #fff;\n  font: 800 clamp(38px, 5vw, 64px)/1.05 var(--disp);\n  letter-spacing: -.045em;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #ffae52;\n  font-style: normal;\n}\n.hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 660px;\n  margin: 0;\n  color: #c8d6ea;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.powered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.powered[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 10px;\n  background: #0b132b;\n  color: #54df8a;\n}\n.powered[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: grid;\n  color: #9eb0ca;\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.powered[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n  font: 700 17px var(--disp);\n  text-transform: none;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 27px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 47px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  box-shadow: 0 12px 30px rgba(255, 140, 26, .26);\n}\n.btn.secondary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .06);\n}\n.fleet[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(138, 180, 255, .28);\n  border-radius: 20px;\n  background: rgba(3, 17, 39, .82);\n  box-shadow: 0 28px 70px rgba(0, 0, 0, .3);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.fleet-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 19px;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.fleet-head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font: 700 14px var(--disp);\n}\n.fleet-head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #65e296;\n  font-size: 20px;\n}\n.fleet-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 99px;\n  background: rgba(22, 163, 74, .18);\n  color: #65e296;\n  font: 700 9px var(--mono);\n  letter-spacing: .12em;\n}\n.fleet-list[_ngcontent-%COMP%] {\n  padding: 5px 18px;\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr .7fr;\n  gap: 18px;\n  align-items: center;\n  padding: 13px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .08);\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 4px;\n  min-width: 0;\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #fff;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8095b4;\n  font: 500 9px var(--mono);\n}\n.fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #8ab4ff;\n}\n.life[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.life[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.life[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.life[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: block;\n  height: 4px;\n  overflow: hidden;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, .1);\n}\n.life[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #65e296);\n}\n.fleet-foot[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  border-block: 1px solid rgba(255, 255, 255, .1);\n  background: rgba(255, 255, 255, .035);\n}\n.fleet-foot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n  padding: 12px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.fleet-foot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.fleet-foot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n.fleet-foot[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8095b4;\n  font: 500 8px var(--mono);\n  text-transform: uppercase;\n}\n.fleet-log[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  color: #8397b6;\n  font: 500 10px var(--mono);\n}\n.fleet-log[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 7px;\n  border-radius: 50%;\n  background: #43db7c;\n  box-shadow: 0 0 10px #43db7c;\n}\n.fleet-log[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #8ab4ff;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border-top: 1px solid rgba(255, 255, 255, .12);\n  background: rgba(255, 255, 255, .04);\n}\n.hero-stats[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n  padding: 20px 13px;\n  border-right: 1px solid rgba(255, 255, 255, .1);\n  text-align: center;\n}\n.hero-stats[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.hero-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n.hero-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9fb0c8;\n  font: 500 9px var(--mono);\n  text-transform: uppercase;\n}\n.acme-section[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n.acme-section.alt[_ngcontent-%COMP%] {\n  background: #f5f8fc;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 16px;\n  color: var(--blue);\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.pp-ov[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: 0 0 30px;\n  color: var(--ink);\n  font-size: 16.5px;\n  line-height: 1.75;\n}\n.lifetime-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(280px, .5fr);\n  gap: 24px;\n  align-items: stretch;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(4, 30, 66, .05);\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 150px minmax(0, 1fr) 70px;\n  gap: 15px;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  color: var(--slate);\n  font-size: 11px;\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-size: 13px;\n}\n.timeline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 28px;\n  overflow: hidden;\n  border-radius: 7px;\n  background: #edf1f7;\n}\n.timeline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  min-width: 58px;\n  padding: 0 7px;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #69a3f6,\n      var(--blue));\n  color: #fff;\n  font-size: 10px;\n  font-style: normal;\n  white-space: nowrap;\n}\n.timeline[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ffb15c,\n      var(--orange));\n}\n.timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  color: var(--navy);\n  font: 800 17px var(--disp);\n  font-style: normal;\n}\n.timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 9px;\n  font-weight: 500;\n}\n.renewal-callout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 28px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--navy),\n      #0c3978);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.renewal-callout[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffae52;\n  font: 800 58px/1 var(--disp);\n}\n.renewal-callout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0;\n  color: #fff;\n  font: 700 19px/1.3 var(--disp);\n}\n.renewal-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c5d4e9;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.renewal-callout[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 18px;\n}\n.renewal-callout[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, .1);\n  color: #dce7f7;\n  font: 600 9px var(--mono);\n}\n.pp-trust[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding-block: 16px;\n  color: var(--slate);\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.default-tail[_ngcontent-%COMP%]   .pp-secrows[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.default-tail[_ngcontent-%COMP%]   .pp-why[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.default-tail[_ngcontent-%COMP%]   .pw[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 42px minmax(0, 1fr);\n  grid-template-rows: auto auto;\n  gap: 3px 12px;\n}\n.default-tail[_ngcontent-%COMP%]   .pw-ic[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 11px;\n  background: #fff;\n  color: var(--blue);\n  font: 700 11px var(--mono);\n}\n.default-tail[_ngcontent-%COMP%]   .prv[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.default-tail[_ngcontent-%COMP%]   .prv[_ngcontent-%COMP%]   .rav[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  flex: none;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7c3aed);\n  color: #fff;\n  font: 700 11px var(--mono);\n}\n.default-tail[_ngcontent-%COMP%]   .pp-faq[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.workflow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: var(--shadow);\n}\n.step-list[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 12px;\n  border-right: 1px solid var(--line);\n  background: #f7f9fc;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 11px;\n  align-items: center;\n  width: 100%;\n  padding: 13px;\n  border: 0;\n  border-radius: 11px;\n  background: transparent;\n  color: var(--ink);\n  text-align: left;\n  cursor: pointer;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--blue);\n  font: 700 10px var(--mono);\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  gap: 3px;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-size: 12px;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 10px;\n}\n.step-list[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #eaf2ff;\n}\n.step-list[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  border-color: var(--blue);\n  background: var(--blue);\n  color: #fff;\n}\n.step-panel[_ngcontent-%COMP%] {\n  padding: 34px;\n}\n.step-panel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font: 700 10px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.step-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0;\n  color: var(--navy);\n  font: 700 25px var(--disp);\n}\n.step-panel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--slate);\n  font-size: 14px;\n  line-height: 1.7;\n}\n.step-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin: 20px 0;\n  padding: 0;\n  list-style: none;\n}\n.step-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 25px;\n  color: var(--ink);\n  font-size: 13px;\n}\n.step-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 0;\n  color: var(--green);\n  content: "\\2713";\n  font-weight: 800;\n}\n.terminal[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  overflow: hidden;\n  border-radius: 13px;\n  background: #071329;\n  color: #d4e2f6;\n  box-shadow: 0 15px 30px rgba(4, 18, 42, .18);\n}\n.terminal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  background: #0e203d;\n}\n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ff6b6b;\n}\n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd4a;\n}\n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  background: #51d780;\n}\n.terminal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #8298b8;\n  font: 500 9px var(--mono);\n}\n.terminal[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  padding: 22px;\n  color: #d4e2f6;\n  font: 500 11px/1.7 var(--mono);\n  white-space: pre-wrap;\n}\n.terminal[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #54df8a;\n}\n.plan-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 28px;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(4, 30, 66, .06);\n}\n.plan-card.featured[_ngcontent-%COMP%] {\n  border-color: #f5a14d;\n  box-shadow: 0 20px 48px rgba(255, 140, 26, .14);\n}\n.flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: 24px;\n  padding: 7px 11px;\n  border-radius: 99px;\n  background: var(--orange);\n  color: #fff;\n  font: 700 9px var(--mono);\n  letter-spacing: .08em;\n}\n.plan-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.plan-top[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-weight: 800;\n}\n.plan-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  border-radius: 99px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font: 700 9px var(--mono);\n  text-transform: uppercase;\n}\n.plan-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 18px 0 9px;\n  color: var(--navy);\n  font: 700 23px var(--disp);\n}\n.plan-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  min-height: 48px;\n  margin: 0;\n  color: var(--slate);\n  font-size: 13.5px;\n  line-height: 1.65;\n}\n.price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin: 23px 0;\n}\n.price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font: 800 35px var(--disp);\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 11px;\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 0;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  padding: 12px;\n  border-bottom: 1px solid var(--line);\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd) {\n  border-right: 1px solid var(--line);\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: 0;\n}\n.plan-card[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.plan-card[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 700;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  margin: 20px 0;\n  padding: 0;\n  list-style: none;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 23px;\n  font-size: 13px;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 0;\n  color: var(--green);\n  content: "\\2713";\n  font-weight: 800;\n}\n.plan-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border-radius: 10px;\n  background: var(--blue);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 750;\n}\n.plan-button.orange[_ngcontent-%COMP%] {\n  background: var(--orange);\n}\n.calculator[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(320px, .75fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: var(--shadow);\n}\n.calculator-controls[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 23px;\n  padding: 32px;\n}\n.calculator[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.calculator[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], \n.calculator-controls[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 700;\n}\n.calculator[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\n  justify-self: end;\n  margin-top: -24px;\n  color: var(--blue);\n  font-weight: 700;\n}\n.segmented[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n}\n.segmented.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n  min-height: 58px;\n  padding: 10px;\n  border: 0;\n  border-right: 1px solid var(--line);\n  background: #f8fafc;\n  color: var(--navy);\n  cursor: pointer;\n  font-weight: 700;\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 9px;\n  font-weight: 500;\n}\n.segmented[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n}\n.segmented[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #dceaff;\n}\n.calculator[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: var(--blue);\n}\n.calculator-controls[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.calculator[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--ink);\n  font: 500 13px var(--body);\n}\n.setup-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 14px;\n  border-radius: 12px;\n  background: #eff8f2;\n}\n.setup-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 26px;\n  height: 26px;\n  place-items: center;\n  flex: none;\n  border-radius: 8px;\n  background: var(--green);\n  color: #fff;\n}\n.setup-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  margin: 0;\n}\n.setup-note[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-size: 12px;\n}\n.setup-note[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 10px;\n}\n.estimate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--navy),\n      #0c3978);\n  color: #fff;\n}\n.estimate[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8ab4ff;\n  font: 700 10px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.estimate[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  font: 800 42px var(--disp);\n}\n.estimate[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: #aebfd8;\n  font-size: 10px;\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 26px 0;\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.estimate[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #aebfd8;\n  font-size: 11px;\n}\n.estimate[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n}\n.estimate[_ngcontent-%COMP%]   .saving[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #65e296;\n}\n.estimate[_ngcontent-%COMP%]   .payable[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.estimate[_ngcontent-%COMP%]   .payable[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.estimate[_ngcontent-%COMP%]   .payable[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 13px;\n}\n.estimate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 44px;\n  border: 0;\n  border-radius: 9px;\n  background: var(--orange);\n  color: #fff;\n  cursor: pointer;\n  font-weight: 750;\n}\n.estimate[_ngcontent-%COMP%]   button.outline[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  border: 1px solid rgba(255, 255, 255, .25);\n  background: transparent;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 720px;\n  border-collapse: collapse;\n  background: #fff;\n}\n.table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px 17px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  font-size: 12.5px;\n}\n.table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n  font: 700 11px var(--mono);\n  text-transform: uppercase;\n}\n.table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  background: var(--blue);\n}\n.table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: var(--navy);\n  font-weight: 700;\n}\n.table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  background: #f2f7ff;\n  color: #0b438f;\n}\n.table-wrap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.compatibility-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n}\n.compatibility-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.card-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: var(--navy);\n  font: 700 18px var(--disp);\n}\n.compatibility-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.card-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--slate);\n  font-size: 12.5px;\n  line-height: 1.6;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 20px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f8fafc;\n  color: var(--navy);\n  font-size: 11px;\n  font-weight: 700;\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.card-grid.four[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.card-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 23px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .05);\n}\n.card-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  margin-bottom: 15px;\n  place-items: center;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  font: 800 10px var(--mono);\n}\n@media (max-width: 1000px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .fleet[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .lifetime-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .workflow[_ngcontent-%COMP%] {\n    grid-template-columns: 290px minmax(0, 1fr);\n  }\n  .calculator[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-grid.four[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 760px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding-inline: 18px;\n  }\n  .acme-hero[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .crumb[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(35px, 11vw, 48px);\n  }\n  .hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero-stats[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n  .acme-section[_ngcontent-%COMP%] {\n    padding: 46px 0;\n  }\n  .pp-sec[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .pp-ov[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 110px minmax(0, 1fr);\n    gap: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: end;\n    margin-top: -7px;\n  }\n  .workflow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    text-align: center;\n  }\n  .step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n    margin: auto;\n  }\n  .step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .step-panel[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .plan-grid[_ngcontent-%COMP%], \n   .compatibility-grid[_ngcontent-%COMP%], \n   .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calculator-controls[_ngcontent-%COMP%], \n   .estimate[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .card-grid.four[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 520px) {\n  .fleet-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-stats[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n    grid-column: auto;\n  }\n  .timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    grid-column: auto;\n    justify-self: start;\n    margin: 0;\n  }\n  .plan-card[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n   .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .segmented[_ngcontent-%COMP%], \n   .segmented.three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .card-grid.four[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.lifetime-layout[_ngcontent-%COMP%] {\n  grid-template-columns: 1.25fr 1fr;\n  gap: 28px;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%] {\n  gap: 14px;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  grid-template-columns: 150px minmax(0, 1fr) 86px;\n  gap: 16px;\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font: 400 12px/1.3 var(--mono);\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 700 14px/1.3 var(--disp);\n}\n.timeline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 34px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f1f4f9;\n}\n.timeline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  min-width: 84px;\n  padding-right: 10px;\n  border-radius: 8px;\n  background: #0667f7;\n  font: 600 12px var(--mono);\n}\n.timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #d6deeb;\n  color: #53647d;\n}\n.timeline[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #ff8708;\n}\n.timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font: 800 18px/1.15 var(--disp);\n  text-align: right;\n}\n.timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font: 500 11px var(--mono);\n}\n.timeline[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #ff8708;\n}\n.renewal-callout[_ngcontent-%COMP%] {\n  padding: 28px;\n  border-radius: 20px;\n  background: #0b142e;\n}\n.renewal-callout[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ff8708;\n  font: 700 46px/1 Georgia, serif;\n}\n.renewal-callout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0 8px;\n  font-size: 19px;\n}\n.renewal-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.renewal-callout[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.renewal-callout[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .08);\n  font-size: 11px;\n}\n.workflow[_ngcontent-%COMP%] {\n  grid-template-columns: 330px minmax(0, 1fr);\n  gap: 22px;\n  overflow: visible;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.step-list[_ngcontent-%COMP%] {\n  gap: 8px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  grid-template-columns: none;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 14px 16px;\n  overflow: hidden;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  transition:\n    border-color .25s,\n    transform .25s,\n    box-shadow .25s;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  border: 0;\n  border-radius: 9px;\n  background: #edf3ff;\n  color: #0667f7;\n  font: 600 12px var(--mono);\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  gap: 2px;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.step-list[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #0667f7;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.step-list[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 10%;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background: #0667f7;\n  content: "";\n}\n.step-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: none;\n}\n.step-panel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.step-panel[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%], \n.step-panel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.step-panel[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-right: 28px;\n  margin-left: 28px;\n}\n.step-panel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 26px;\n  color: #ff7800;\n}\n.step-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 10px;\n  font: 700 27px/1.2 Georgia, serif;\n}\n.step-panel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.step-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n.step-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 34px;\n  line-height: 24px;\n}\n.step-panel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  place-items: center;\n  border-radius: 7px;\n  background: #edf3ff;\n  color: #0667f7;\n}\n.terminal[_ngcontent-%COMP%] {\n  min-height: 150px;\n  margin-top: auto;\n  border-radius: 0;\n  background: #0b142e;\n  box-shadow: none;\n}\n.terminal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: transparent;\n}\n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  background: #31436d;\n}\n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2), \n.terminal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  background: #31436d;\n}\n.terminal[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 2px 20px 20px;\n  color: #fff;\n  font-size: 12.5px;\n}\n.terminal[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ff8708;\n}\n.plan-grid[_ngcontent-%COMP%] {\n  gap: 18px;\n}\n.plan-card[_ngcontent-%COMP%] {\n  padding: 26px;\n  border-width: 1.5px;\n  border-radius: 20px;\n  box-shadow: none;\n  transition: transform .35s, box-shadow .35s;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow);\n}\n.plan-card.featured[_ngcontent-%COMP%] {\n  border-color: #ff8708;\n  box-shadow: none;\n}\n.flag[_ngcontent-%COMP%] {\n  top: -12px;\n  right: auto;\n  left: 24px;\n  padding: 5px 10px;\n  background: #ff8708;\n  font-size: 10px;\n}\n.plan-top[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: stretch;\n  gap: 11px;\n}\n.plan-top[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font: 700 14px var(--disp);\n}\n.plan-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  justify-self: start;\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  color: #0667f7;\n  font: 600 11px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.plan-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 6px 0 8px;\n  font-size: 21px;\n}\n.plan-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  min-height: 42px;\n  font-size: 13.5px;\n}\n.price[_ngcontent-%COMP%] {\n  margin: 20px 0 4px;\n}\n.price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.gst-line[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  color: var(--slate);\n  font: 500 11px var(--mono);\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px 14px;\n  border: 0;\n  border-radius: 0;\n}\n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd), \n.plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  gap: 4px;\n  padding: 0 0 8px;\n  border: 0;\n  border-bottom: 1px dashed var(--line);\n}\n.plan-card[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  order: 2;\n  font-size: 12px;\n  text-transform: none;\n}\n.plan-card[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  order: 1;\n  font-size: 13.5px;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-bottom: 22px;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 24px;\n  align-items: center;\n  padding-left: 35px;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  place-items: center;\n  border-radius: 7px;\n  background: #edf3ff;\n  color: #0667f7;\n}\n.plan-card[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.plan-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin-top: auto;\n}\n.plan-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 45px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: #fff;\n  color: var(--navy);\n  cursor: pointer;\n  font-weight: 700;\n}\n.plan-button[_ngcontent-%COMP%] {\n  min-height: 45px;\n}\n.plan-button.orange[_ngcontent-%COMP%] {\n  background: #ff8708;\n}\n.calculator[_ngcontent-%COMP%] {\n  grid-template-columns: 1.25fr 1fr;\n  border-radius: 20px;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.calculator-controls[_ngcontent-%COMP%] {\n  gap: 22px;\n  padding: 28px;\n}\n.calculator[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%], \n.calculator-controls[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.segmented[_ngcontent-%COMP%] {\n  gap: 6px;\n  padding: 4px;\n  border-radius: 12px;\n  background: #f1f4f9;\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 53px;\n  border: 0 !important;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--slate);\n}\n.segmented[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #0667f7;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.segmented[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #0667f7;\n}\n.calculator[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 99px;\n  background-color: #d6deeb;\n  background-image: linear-gradient(#0667f7, #0667f7);\n  background-repeat: no-repeat;\n  accent-color: #0667f7;\n}\n.calculator[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 22px;\n  height: 22px;\n  border: 3px solid #0667f7;\n  background: #fff;\n}\n.calculator-controls[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.setup-note[_ngcontent-%COMP%] {\n  display: flex !important;\n  grid-template-columns: none !important;\n  align-items: center;\n  gap: 11px;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.setup-note[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.setup-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 42px;\n  height: 24px;\n  border-radius: 99px;\n  background: #0667f7;\n}\n.setup-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 3px;\n  left: 21px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #fff;\n  content: "";\n  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);\n}\n.setup-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n}\n.setup-note[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.setup-note[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.estimate[_ngcontent-%COMP%] {\n  padding: 28px;\n  background: #0b142e;\n}\n.estimate[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  border: 0;\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]::before, \n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]::after {\n  height: 1px;\n  margin-bottom: 9px;\n  background: rgba(255, 255, 255, .12);\n  content: "";\n}\n.estimate[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]::after {\n  margin-top: 9px;\n  margin-bottom: 0;\n}\n.estimate[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.estimate[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n.estimate[_ngcontent-%COMP%]   .payable[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.estimate[_ngcontent-%COMP%]   .payable[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n.estimate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 45px;\n  background: #ff8708;\n}\n.estimate-fine[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #91a2c3;\n  font: 500 10.5px/1.5 var(--mono);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 620px;\n}\n.table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px 18px;\n  background: #f1f4f9;\n  color: var(--slate);\n  font: 600 11px var(--mono);\n  letter-spacing: .1em;\n}\n.table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  background: #eaf2ff;\n  color: #0667f7;\n}\n.table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  font-size: 14px;\n}\n.table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  background: #eaf2ff;\n  color: var(--ink);\n}\n.compatibility-grid[_ngcontent-%COMP%] {\n  gap: 22px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 20px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 13.5px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-top: 0;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px 8px 8px;\n  border-radius: 12px;\n  background: #fff;\n  font-size: 13.5px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  display: grid;\n  width: 26px;\n  height: 26px;\n  place-items: center;\n  border-radius: 7px;\n  background: #0667f7;\n  color: #fff;\n  content: "\\25c7";\n  font-size: 12px;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n+2)::before {\n  background: #0b142e;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n)::before {\n  background: #ff8708;\n}\n.compatibility-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n+2)::before {\n  background: #16a34a;\n}\n.card-grid[_ngcontent-%COMP%] {\n  gap: 18px;\n}\n.card-grid.four[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.card-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 18px;\n  box-shadow: none;\n  transition: transform .35s, box-shadow .35s;\n}\n.card-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow);\n}\n.card-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  margin-bottom: 16px;\n  border-radius: 12px;\n  font-size: 14px;\n}\n.card-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.card-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.use-cases[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #ff7800;\n  font: 600 11px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.use-cases[_ngcontent-%COMP%]   .case-icon[_ngcontent-%COMP%] {\n  background: #0667f7;\n}\n.use-cases[_ngcontent-%COMP%]   .case-icon.orange[_ngcontent-%COMP%] {\n  background: #ff8708;\n}\n.use-cases[_ngcontent-%COMP%]   .case-icon.navy[_ngcontent-%COMP%] {\n  background: #0b142e;\n}\n.use-cases[_ngcontent-%COMP%]   .case-icon.green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%], \n.benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(6)   span[_ngcontent-%COMP%] {\n  background: #ff8708;\n}\n.benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(3)   span[_ngcontent-%COMP%] {\n  background: #0b142e;\n}\n.benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(4)   span[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n@media (max-width: 900px) {\n  .lifetime-layout[_ngcontent-%COMP%], \n   .calculator[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .workflow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n    display: grid;\n  }\n}\n@media (max-width: 760px) {\n  .step-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: left;\n  }\n  .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 96px minmax(0, 1fr) 60px;\n    gap: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    grid-column: auto;\n    justify-self: auto;\n    margin: 0;\n  }\n  .plan-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);\n  gap: 40px;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: clamp(30px, 4vw, 46px);\n  line-height: 1.08;\n  letter-spacing: -.02em;\n}\n.hero-copy[_ngcontent-%COMP%]   .hero-tag[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 14px 0 0;\n  color: #c7d9f5;\n  font: 700 clamp(15px, 1.5vw, 18px)/1.45 var(--disp);\n}\n.hero-copy[_ngcontent-%COMP%]   .hero-tag-secondary[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 6px 0 0;\n  color: #fff;\n  font: 600 15.5px/1.45 var(--disp);\n}\n.hero-type[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: 2px;\n  margin-top: 20px;\n  color: #69b6ff;\n  font: 700 clamp(16px, 1.7vw, 19px)/1.35 var(--disp);\n}\n.hero-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 22px;\n  background: #69b6ff;\n  animation: _ngcontent-%COMP%_acme-caret 1s steps(1) infinite;\n}\n@keyframes _ngcontent-%COMP%_acme-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.hero-points[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, max-content));\n  gap: 12px 34px;\n  margin: 20px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.hero-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #dce7f8;\n  font-size: 14.5px;\n  font-weight: 600;\n}\n.hero-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  flex: none;\n  border-radius: 6px;\n  background: var(--blue);\n  color: #fff;\n  font-size: 12px;\n  box-shadow: 0 4px 12px rgba(21, 101, 216, .45);\n}\n.tally-style-actions[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  gap: 6px;\n  margin-top: 28px;\n  overflow: visible;\n}\n.tally-style-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: auto;\n  min-height: 36px;\n  padding: 8px 9px;\n  border-width: 1.5px;\n  border-radius: 8px;\n  font: 700 11px var(--disp);\n  white-space: nowrap;\n  cursor: pointer;\n}\n.tally-style-actions[_ngcontent-%COMP%]   .btn.secondary[_ngcontent-%COMP%] {\n  border-color: rgba(156, 200, 255, .35);\n  background: rgba(255, 255, 255, .05);\n}\n.tally-style-actions[_ngcontent-%COMP%]   .btn.primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  box-shadow: 0 10px 24px rgba(255, 140, 26, .35);\n}\n.hero-ai[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 9px 12px 9px 16px;\n  border: 1px solid rgba(156, 200, 255, .25);\n  border-radius: 14px;\n  background: rgba(4, 30, 66, .55);\n}\n.hero-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #fff;\n  font: 700 11.5px var(--mono);\n  letter-spacing: .06em;\n}\n.hero-ai[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n  text-decoration: none;\n  transition: transform .2s, background .2s;\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, .2);\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 700 11px var(--mono);\n}\n.hero-media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  margin-top: 18px;\n  color: #fff;\n}\n.hero-media[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font: 700 15px/1.4 var(--body);\n}\n.hero-media[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff8c1a;\n  font-size: 11px;\n  letter-spacing: -.08em;\n}\n.hero-guide-player[_ngcontent-%COMP%] {\n  display: flex;\n  width: 280px;\n  max-width: 100%;\n  height: 44px;\n  align-items: center;\n  gap: 12px;\n  padding: 0 14px;\n  border-radius: 24px;\n  background: #f5f7fb;\n  color: #101827;\n  text-decoration: none;\n}\n.hero-guide-player[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  font-size: 12px;\n}\n.hero-guide-player[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: nowrap;\n}\n.hero-guide-player[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 4px;\n  flex: 1;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #626a75 42%,\n      #b6bbc2 42%);\n}\n.hero-copy[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  color: #c7d5ec;\n}\n.hero-copy[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n  color: #c7d5ec;\n  font-size: 13px;\n  text-transform: none;\n}\n.hero-copy[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline;\n  width: auto;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  background: none;\n  color: #c7d5ec;\n}\n.hero-copy[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 4px;\n  background: #204353;\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 1000px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fleet[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n@media (max-width: 760px) {\n  .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(30px, 9vw, 46px);\n  }\n  .hero-points[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tally-style-actions[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    padding-bottom: 4px;\n  }\n  .tally-style-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: auto;\n    flex: 0 0 auto;\n  }\n  .hero-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=acme-certificate.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcmeCertificatePage, [{
    type: Component,
    args: [{ selector: "xh-acme-certificate-page", standalone: true, imports: [InsightsSectionComponent, ProductFaqComponent, SmbSectionNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="acme-page">\r
  <section class="acme-hero" aria-labelledby="acme-hero-title">\r
    <div class="wrap">\r
      <nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Digital Trust</span><span>/</span><b>ACME Certificates</b></nav>\r
      <div class="hero-grid">\r
        <div class="hero-copy">\r
          <h1 id="acme-hero-title">ACME <em>Certificates </em></h1>\r
          <p class="hero-tag-secondary">Your infrastructure depends on certificates. Let ACME keep every endpoint protected.</p>\r
          <div class="hero-type"><span>Renew certificates automatically, before they expire</span><i aria-hidden="true"></i></div>\r
          <ul class="hero-points">\r
            <li><span>\u2713</span>Automated certificate issuance</li>\r
            <li><span>\u2713</span>Zero-downtime renewals</li>\r
            <li><span>\u2713</span>DV and OV certificates</li>\r
            <li><span>\u2713</span>HTTP-01 and DNS-01 validation</li>\r
            <li><span>\u2713</span>Unlimited free reissues</li>\r
            <li><span>\u2713</span>Every server and workload</li>\r
          </ul>\r
          <div class="hero-actions tally-style-actions">\r
            <a class="btn secondary" href="#overview"><span aria-hidden="true">\u25A3</span> Screenshot tour</a>\r
            <a class="btn secondary" href="#how"><span aria-hidden="true">\u25A6</span> Free Trial</a>\r
            <button class="btn primary" type="button" (click)="requestCallback('ACME certificate consultation')">Let's Talk <span>\u2192</span></button>\r
          </div>\r
          <div class="hero-ai" role="group" aria-label="Ask AI about ACME certificates from XcellHost">\r
            <span>\u2726 Ask AI About ACME Certificates from XcellHost</span>\r
            <div>\r
              <a href="https://chatgpt.com/?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal" target="_blank" rel="noopener" aria-label="Ask ChatGPT" title="Ask ChatGPT"><b>AI</b></a>\r
              <a href="https://www.perplexity.ai/search/new?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal" target="_blank" rel="noopener" aria-label="Ask Perplexity" title="Ask Perplexity"><b>P</b></a>\r
              <a href="https://claude.ai/new?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal" target="_blank" rel="noopener" aria-label="Ask Claude" title="Ask Claude"><b>C</b></a>\r
              <a href="https://www.google.com/search?udm=50&amp;q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal" target="_blank" rel="noopener" aria-label="Ask Google AI" title="Ask Google AI"><b>G</b></a>\r
              <a href="https://grok.com/?q=Explain%20XcellHost%20ACME%20Certificates%20and%20automated%20SSL%20renewal" target="_blank" rel="noopener" aria-label="Ask Grok" title="Ask Grok"><b>X</b></a>\r
            </div>\r
          </div>\r
          <div class="hero-media">\r
            <strong><span aria-hidden="true">\u25AE\u25AE\u25AE</span> Explore ACME certificate automation</strong>\r
            <a class="hero-guide-player" href="#how"><span aria-hidden="true">\u25B6</span><b>See the six-step workflow</b><i aria-hidden="true"></i></a>\r
          </div>\r
          <div class="powered"><small>Powered by</small><span aria-hidden="true">|</span><b>Sectigo ACME</b></div>\r
        </div>\r
        <div class="fleet" aria-label="Example automated certificate fleet">\r
          <div class="fleet-head"><b><span>\u21BB</span> Certificate fleet</b><small>LIVE</small></div>\r
          <div class="fleet-list">\r
            @for (certificate of certificates; track certificate.domain) {\r
              <article>\r
                <div><b>{{ certificate.domain }}</b><small><span>{{ certificate.type }}</span> Sectigo \xB7 {{ certificate.challenge }}</small></div>\r
                <div class="life"><small>expires in <b>{{ certificate.days }}d</b></small><i><span [style.width.%]="certificate.days"></span></i></div>\r
              </article>\r
            }\r
          </div>\r
          <div class="fleet-foot"><span><b>24</b><small>Auto-renewed</small></span><span><b>0</b><small>Expired</small></span><span><b>4d</b><small>Next renewal</small></span></div>\r
          <div class="fleet-log"><span></span><code>acme-client</code> watching certificates\u2026</div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="pp-trust" aria-label="XcellHost credentials">\r
    <div class="wrap">\r
      <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
      <span>Microsoft <b>Gold Partner</b></span>\r
      <span><b>10,000+</b> customers</span>\r
      <span><b>Since 1999</b></span>\r
      <span><b>99.95% uptime SLA</b></span>\r
      <span><b>24&times;7</b> NOC + SOC</span>\r
    </div>\r
  </div>\r
\r
  <xh-smb-section-nav label="ACME certificate page sections" [links]="sectionNavLinks" />\r
\r
  <section class="acme-section" id="overview" aria-labelledby="lifetimes-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="lifetimes-title">Overview</h2>\r
      <p class="pp-ov">The CA/Browser Forum is reducing the maximum validity of public TLS certificates in stages. Each reduction means more renewals\u2014which becomes unmanageable by hand once you run more than a few sites.</p>\r
      <div class="lifetime-layout">\r
        <div class="timeline">\r
          <article><span><b>Until Mar 2026</b>Before 15 Mar 2026</span><i><b style="width:100%">398 days</b></i><em>1\xD7 <small>per year</small></em></article>\r
          <article class="current"><span><b>From Mar 2026</b>15 Mar 2026</span><i><b style="width:50.25%">200 days</b></i><em>2\xD7 <small>per year</small></em></article>\r
          <article><span><b>From Mar 2027</b>15 Mar 2027</span><i><b style="width:25.1%">100 days</b></i><em>4\xD7 <small>per year</small></em></article>\r
          <article><span><b>From Mar 2029</b>15 Mar 2029</span><i><b style="width:11.8%">47 days</b></i><em>8\xD7 <small>per year</small></em></article>\r
        </div>\r
        <aside class="renewal-callout"><strong>200</strong><h3>manual renewals a year for 25 sites by 2029</h3><p>With ACME, the client renews well before expiry, on its own, every time.</p><div><span>90-day certificates</span><span>Renews early</span><span>Zero downtime</span></div></aside>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt" id="how" aria-labelledby="how-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="how-title">How it works</h2>\r
      <p class="pp-ov">Set up once and the ACME client handles every renewal for the life of your subscription. Select any step to see what happens\u2014and the command behind it.</p>\r
      <div class="workflow">\r
        <div class="step-list" role="tablist" aria-label="ACME setup steps">\r
          @for (step of steps; track step.title; let index = $index) {\r
            <button type="button" role="tab" [class.active]="selectedStep() === index" [attr.aria-selected]="selectedStep() === index" (click)="selectedStep.set(index)"><span>0{{ index + 1 }}</span><span><b>{{ step.title }}</b><small>{{ step.summary }}</small></span></button>\r
          }\r
        </div>\r
        <article class="step-panel" aria-live="polite">\r
          <span>Step {{ selectedStep() + 1 }} of 6</span>\r
          <h3>{{ steps[selectedStep()].title }}</h3>\r
          <p>{{ steps[selectedStep()].description }}</p>\r
          <ul>@for (point of steps[selectedStep()].points; track point) {<li>{{ point }}</li>}</ul>\r
          <div class="terminal"><div><i></i><i></i><i></i><span>bash</span></div><code><b>$</b> {{ steps[selectedStep()].command }}</code></div>\r
        </article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section" id="pricing" aria-labelledby="plans-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="plans-title">Plans & Pricing</h2>\r
      <p class="pp-ov">Both include unlimited server installs, unlimited free reissues and External Account Binding credentials from your XcellHost dashboard. Prices are per domain, per year.</p>\r
      <div class="plan-grid">\r
        <article class="plan-card"><div class="plan-top"><span>\u25A3 Sectigo</span><small>Domain Validated</small></div><h3>ACME Certificate \u2014 DV</h3><p>Fast, fully automated HTTPS for websites, APIs and apps. Validation proves domain control only\u2014issued in minutes.</p><div class="price"><b>\u20B91,699</b><span>/ domain / year</span></div><div class="gst-line">Indicative \xB7 excl. 18% GST \xB7 multi-year discounts available</div><dl><div><dd>US$500,000</dd><dt>Warranty</dt></div><div><dd>1\u2013999</dd><dt>Domains + free www</dt></div><div><dd>SHA-256</dd><dt>Signature</dt></div><div><dd>Up to 256-bit</dd><dt>Encryption</dt></div><div><dd>RSA 2048+ / ECC 256+</dd><dt>Key types</dt></div><div><dd>90 days</dd><dt>Default cert life</dt></div></dl><ul><li><b>Automated renewal</b> via HTTP-01 or DNS-01</li><li><b>Unlimited server licences</b>\u2014one cert, every node</li><li><b>Unlimited reissues</b> at no cost</li><li>Live chat &amp; ticket support, <b>30-day refund</b></li></ul><div class="plan-actions"><a href="#configure" class="plan-button">Configure DV <span>\u2192</span></a><button type="button" (click)="requestCallback('ACME DV certificate')">\u{1F6D2}&nbsp; Add 1 domain \xB7 1 year</button></div></article>\r
        <article class="plan-card featured"><span class="flag">FOR BUSINESSES</span><div class="plan-top"><span>\u25A3 Sectigo</span><small>Organization Validated</small></div><h3>ACME Certificate \u2014 OV</h3><p>Your verified company name in the certificate\u2014for customer-facing portals, banking, ecommerce and B2B apps.</p><div class="price"><b>\u20B97,499</b><span>/ domain / year</span></div><div class="gst-line">Indicative \xB7 excl. 18% GST \xB7 multi-year discounts available</div><dl><div><dd>US$1,000,000</dd><dt>Warranty</dt></div><div><dd>1\u2013999</dd><dt>Domains + free www</dt></div><div><dd>SHA-256</dd><dt>Signature</dt></div><div><dd>Up to 256-bit</dd><dt>Encryption</dt></div><div><dd>RSA 2048+ / ECC 256+</dd><dt>Key types</dt></div><div><dd>90 days</dd><dt>Default cert life</dt></div></dl><ul><li><b>Organisation verified</b> once, then renewals stay automatic</li><li><b>Unlimited server licences</b> and reissues</li><li><b>EAB credentials</b> issued from your dashboard</li><li>Priority support, <b>30-day refund</b></li></ul><div class="plan-actions"><a href="#configure" class="plan-button orange">Configure OV <span>\u2192</span></a><button type="button" (click)="requestCallback('ACME OV certificate')">\u{1F6D2}&nbsp; Add 1 domain \xB7 1 year</button></div></article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt" id="configure" aria-labelledby="configure-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="configure-title">Configure & buy</h2>\r
      <p class="pp-ov">Pick the validation type, how many domains you need to cover and the term. Adding domains later is billed only for the days left in your subscription.</p>\r
      <div class="calculator">\r
        <div class="calculator-controls">\r
          <fieldset><legend>Validation type</legend><div class="segmented"><button type="button" [class.active]="validation() === 'dv'" (click)="selectValidation('dv')">Domain Validated<small>\u20B91,699 / domain / yr</small></button><button type="button" [class.active]="validation() === 'ov'" (click)="selectValidation('ov')">Organization Validated<small>\u20B97,499 / domain / yr</small></button></div></fieldset>\r
          <label>Domains to secure <output>{{ domains() }} domains</output><input type="range" min="1" max="100" [value]="domains()" [style.background-size.%]="domains()" (input)="updateDomains($event)" /><small>Each domain includes its www/non-www pair. Ask us about subscriptions covering up to 999 domains.</small></label>\r
          <fieldset><legend>Term</legend><div class="segmented three"><button type="button" [class.active]="term() === 1" (click)="selectTerm(1)">1 year<small>list price</small></button><button type="button" [class.active]="term() === 2" (click)="selectTerm(2)">2 years<small>save 10%</small></button><button type="button" [class.active]="term() === 3" (click)="selectTerm(3)">3 years<small>save 15%</small></button></div></fieldset>\r
          <label>Your ACME client<select><option>Certbot</option><option>cert-manager (Kubernetes)</option><option>acme.sh</option><option>lego</option><option>win-acme (IIS)</option><option>Not sure yet</option></select></label>\r
          <label class="setup-note"><input type="checkbox" checked /><span></span><p><b>XcellHost sets it up for me</b><small>We install the client, configure EAB and run the first issuance with you\u2014included free.</small></p></label>\r
        </div>\r
        <aside class="estimate"><span>Your estimate</span><strong>\u20B9{{ formatInr(subtotal()) }}</strong><small>Total for {{ term() }} {{ term() === 1 ? 'year' : 'years' }}, excluding GST</small><dl><div><dt>{{ domains() }} \xD7 {{ validation().toUpperCase() }} \xD7 {{ term() }} yr</dt><dd>\u20B9{{ formatInr(listPrice()) }}</dd></div><div class="saving"><dt>Multi-year saving</dt><dd>{{ saving() ? '\u2212\u20B9' + formatInr(saving()) : '\u2014' }}</dd></div><div><dt>Effective per domain/year</dt><dd>\u20B9{{ formatInr(subtotal() / domains() / term()) }}</dd></div><div><dt>GST (18%)</dt><dd>\u20B9{{ formatInr(gst()) }}</dd></div><div class="payable"><dt>Payable incl. GST</dt><dd>\u20B9{{ formatInr(payable()) }}</dd></div></dl><button type="button" (click)="requestCallback('ACME certificate purchase')">\u{1F6D2}&nbsp; Add to cart</button><button class="outline" type="button" (click)="requestCallback('ACME setup and EAB help')">Talk to an SSL expert</button><p class="estimate-fine">Indicative pricing in INR, excl. GST. Final price confirmed on your GST invoice.</p></aside>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section" id="comparison" aria-labelledby="comparison-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="comparison-title">ACME vs traditional SSL</h2>\r
      <p class="pp-ov">See how an automated ACME workflow replaces the repetitive steps of traditional SSL certificate management.</p>\r
      <div class="table-wrap"><table><thead><tr><th>Task</th><th>Traditional SSL</th><th>ACME with XcellHost</th></tr></thead><tbody><tr><td>Getting a certificate</td><td>Generate a CSR, submit it, wait, download files</td><td>Client requests and receives it automatically</td></tr><tr><td>Domain validation</td><td>Email approvals or manual file uploads</td><td>HTTP-01 or DNS-01 challenge, solved by the client</td></tr><tr><td>Installation</td><td>Copy files to every server, edit configs, restart</td><td>Installed and reloaded on each server automatically</td></tr><tr><td>Renewal</td><td>Calendar reminders\u2014and the occasional expired site</td><td>Renews ~30 days before expiry, with zero downtime</td></tr><tr><td>Scaling to more domains</td><td>Effort grows with every domain</td><td>Add domains to the same setup; billed pro-rata</td></tr><tr><td>Best for</td><td>A handful of static sites</td><td>DevOps teams, hosting providers, SaaS and growing estates</td></tr></tbody></table></div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt" id="compatibility" aria-labelledby="compatibility-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="compatibility-title">Works with the tools you already run</h2>\r
      <p class="pp-ov">Sectigo ACME is standards-based ACME v2 (RFC 8555), so any compliant client works. These are the tools and environments our team sets up most often.</p>\r
      <div class="compatibility-grid"><article><h3>ACME clients</h3><p>Command-line, Kubernetes-native and Windows clients.</p><div><span>Certbot</span><span>cert-manager</span><span>acme.sh</span><span>lego</span><span>win-acme</span><span>Certify The Web</span><span>Posh-ACME</span><span>dehydrated</span></div></article><article><h3>Server environments</h3><p>Install and auto-reload on the platforms you host on.</p><div><span>Apache</span><span>NGINX</span><span>cPanel</span><span>Plesk</span><span>Docker</span><span>Kubernetes</span><span>Microsoft IIS</span><span>Caddy</span></div></article></div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section" id="use-cases" aria-labelledby="teams-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="teams-title">Built for teams with more than a few sites</h2>\r
      <p class="pp-ov">Automated certificate management fits any environment where certificates must be issued quickly and renewed reliably at scale.</p>\r
      <div class="card-grid four use-cases"><article><span class="case-icon">\u2318</span><small>DevOps &amp; CI/CD</small><h3>Certificates in the pipeline</h3><p>Every new environment gets a valid certificate as part of the deploy\u2014no tickets, no waiting.</p></article><article><span class="case-icon orange">\u25A4</span><small>Hosting providers</small><h3>Thousands of customer sites</h3><p>Issue and renew for every hosted domain from one automated setup, billed per domain.</p></article><article><span class="case-icon navy">\u2B21</span><small>SaaS platforms</small><h3>Custom domains for tenants</h3><p>Secure each customer's vanity domain the moment they point it at your platform.</p></article><article><span class="case-icon green">\u25A7</span><small>Internal networks</small><h3>Private endpoints too</h3><p>DNS-01 validation works even when the server isn't reachable from the internet.</p></article></div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt" id="why-xcellhost" aria-labelledby="why-xcellhost-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="why-xcellhost-title">Why buy from XcellHost</h2>\r
      <p class="pp-ov">Buy from an authorised Sectigo partner in Mumbai\u2014billed in rupees with a GST invoice and backed by engineers who set up ACME workflows every week.</p>\r
      <div class="card-grid benefits"><article><span>\u2315</span><h3>Client setup, done with you</h3><p>We install and configure your ACME client, wire DNS-01 where you need wildcards or private hosts, and run the first issuance together.</p></article><article><span>\u26BF</span><h3>EAB credentials, explained</h3><p>Sectigo ACME uses External Account Binding\u2014a key ID and HMAC token per deployment. We issue them from your dashboard and show you where they go.</p></article><article><span>\u25A6</span><h3>One dashboard</h3><p>Every certificate, domain and renewal in one place, alongside your other XcellHost services.</p></article><article><span>\u20B9</span><h3>INR billing &amp; GST invoice</h3><p>Pay by UPI, card or net banking. Multi-year discounts and no hidden fees.</p></article><article><span>\u2667</span><h3>24\xD77 expert support</h3><p>Real engineers on phone, WhatsApp and tickets\u2014round the clock, in your time zone.</p></article><article><span>\u2662</span><h3>Authorised CA partner</h3><p>Genuine Sectigo certificates trusted by 99% of browsers, operating systems and mobile devices.</p></article></div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section default-tail" id="security-compliance" aria-labelledby="security-compliance-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="security-compliance-title">Security &amp; compliance</h2>\r
      <p class="pp-ov">Sectigo ACME combines trusted public certificates with automated validation, secure account binding and repeatable renewal workflows that reduce certificate risk across your estate.</p>\r
      <div class="pp-secrows">\r
        <div class="psrow"><span class="psk">Certificate authority</span><span class="psv">Sectigo public trust</span></div>\r
        <div class="psrow"><span class="psk">Automation standard</span><span class="psv">ACME v2 \xB7 RFC 8555</span></div>\r
        <div class="psrow"><span class="psk">Account security</span><span class="psv">External Account Binding</span></div>\r
        <div class="psrow"><span class="psk">Domain validation</span><span class="psv">HTTP-01 or DNS-01</span></div>\r
        <div class="psrow"><span class="psk">Cryptography</span><span class="psv">SHA-256 \xB7 RSA 2048+ \xB7 ECC 256+</span></div>\r
        <div class="psrow"><span class="psk">Transport encryption</span><span class="psv">Up to 256-bit</span></div>\r
        <div class="psrow"><span class="psk">Renewal protection</span><span class="psv">Automated checks and early renewal</span></div>\r
        <div class="psrow"><span class="psk">Operational support</span><span class="psv">24\xD77 XcellHost NOC + SOC</span></div>\r
      </div>\r
      <p class="pp-secfoot">XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 DPDPA-aligned operations \xB7 GST-compliant Indian billing.</p>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt default-tail" id="why-acme" aria-labelledby="why-acme-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="why-acme-title">Why XcellHost for ACME Certificates</h2>\r
      <div class="pp-why">\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">\u21BB</span><b>Automation expertise</b><span>We configure clients, EAB credentials, validation and renewals as one reliable workflow.</span></article>\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">\u25C7</span><b>Trusted Sectigo certificates</b><span>Deploy genuine DV and OV certificates recognised by major browsers and devices.</span></article>\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">DNS</span><b>HTTP-01 and DNS-01 help</b><span>Secure public websites, private endpoints, Kubernetes services and wildcard domains.</span></article>\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">\u20B9</span><b>INR billing</b><span>Pay locally with a GST invoice, predictable pricing and multi-year savings.</span></article>\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">24</span><b>24\xD77 expert support</b><span>Get renewal and deployment assistance from engineers in your time zone.</span></article>\r
        <article class="pw"><span class="pw-ic" aria-hidden="true">\u2713</span><b>First issuance included</b><span>We validate the complete process with your team before handing over automation.</span></article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section default-tail" id="testimonials" aria-labelledby="testimonials-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec" id="testimonials-title">What customers say</h2>\r
      <div class="pp-revs">\r
        <article class="prv"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div><p>\u201CXcellHost moved our certificates to ACME and tested every renewal path. We no longer track expiry dates in spreadsheets.\u201D</p><cite><span class="rav">RK</span><span><b>Rohan Kulkarni</b>Infrastructure Lead \xB7 SaaS</span></cite></article>\r
        <article class="prv"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div><p>\u201CDNS-01 automation now protects both our public sites and internal services. Their team handled the first deployment end to end.\u201D</p><cite><span class="rav">AM</span><span><b>Ananya Mehta</b>DevOps Manager \xB7 Fintech</span></cite></article>\r
        <article class="prv"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div><p>\u201CThe Sectigo OV setup, EAB registration and automatic reloads all worked exactly as promised, with clear local support.\u201D</p><cite><span class="rav">VS</span><span><b>Vikram Shah</b>Technology Director \xB7 Ecommerce</span></cite></article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="acme-section alt default-tail" id="faqs" aria-labelledby="faqs-title">\r
    <div class="wrap">\r
      <h2 class="pp-sec pp-faq-heading" id="faqs-title">Frequently asked questions</h2>\r
      <div class="pp-faq"><xh-product-faq [faqs]="faqs" idPrefix="acmeFaq" /></div>\r
    </div>\r
  </section>\r
\r
  <xh-insights-section pageSlug="acme-enabled-ssl-certificates" [showVideos]="false" />\r
</main>\r
`, styles: ['/* src/app/pages/acme-certificate.page.css */\n:host {\n  display: block;\n  --navy:#041e42;\n  --blue:#1565d8;\n  --blue-d:#0c3e8f;\n  --blue-soft:#e8f0fd;\n  --orange:#ff8c1a;\n  --orange-d:#e97000;\n  --ice:#f2f6fc;\n  --ink:#1c2a3a;\n  --slate:#51607a;\n  --line:#dce5f2;\n  --green:#16a34a;\n  --shadow:0 18px 50px rgba(4,30,66,.1);\n}\n* {\n  box-sizing: border-box;\n}\n.acme-page {\n  overflow: clip;\n  background: #fff;\n  color: var(--ink);\n  font-family: var(--body);\n}\n.wrap {\n  width: min(1248px, 100%);\n  margin: 0 auto;\n  padding-inline: 24px;\n}\n.acme-hero {\n  position: relative;\n  padding: 34px 0 0;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 82% 20%,\n      rgba(21, 101, 216, .28),\n      transparent 32%),\n    linear-gradient(\n      135deg,\n      #03152f,\n      #082b61 60%,\n      #0b3f82);\n  color: #fff;\n}\n.acme-hero::before {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .035) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent);\n}\n.acme-hero .wrap {\n  position: relative;\n}\n.crumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 34px;\n  color: #aebfd9;\n  font: 500 11px var(--mono);\n}\n.crumb a {\n  color: #fff;\n  text-decoration: none;\n}\n.crumb b {\n  color: #9cc0ff;\n}\n.hero-grid {\n  display: grid;\n  grid-template-columns: 1.03fr .97fr;\n  gap: 64px;\n  align-items: center;\n  padding-bottom: 48px;\n}\n.hero-eyebrow {\n  display: inline-flex;\n  margin-bottom: 18px;\n  color: #8ab4ff;\n  font: 700 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.hero-copy h1 {\n  max-width: 670px;\n  margin: 0 0 20px;\n  color: #fff;\n  font: 800 clamp(38px, 5vw, 64px)/1.05 var(--disp);\n  letter-spacing: -.045em;\n}\n.hero-copy h1 em {\n  color: #ffae52;\n  font-style: normal;\n}\n.hero-copy > p {\n  max-width: 660px;\n  margin: 0;\n  color: #c8d6ea;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-copy > p b {\n  color: #fff;\n}\n.powered {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.powered > span {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 10px;\n  background: #0b132b;\n  color: #54df8a;\n}\n.powered small {\n  display: grid;\n  color: #9eb0ca;\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.powered b {\n  color: #fff;\n  font: 700 17px var(--disp);\n  text-transform: none;\n}\n.hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 27px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 47px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.btn.primary {\n  background: var(--orange);\n  box-shadow: 0 12px 30px rgba(255, 140, 26, .26);\n}\n.btn.secondary {\n  border-color: rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .06);\n}\n.fleet {\n  overflow: hidden;\n  border: 1px solid rgba(138, 180, 255, .28);\n  border-radius: 20px;\n  background: rgba(3, 17, 39, .82);\n  box-shadow: 0 28px 70px rgba(0, 0, 0, .3);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.fleet-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 19px;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.fleet-head b {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font: 700 14px var(--disp);\n}\n.fleet-head b span {\n  color: #65e296;\n  font-size: 20px;\n}\n.fleet-head small {\n  padding: 4px 8px;\n  border-radius: 99px;\n  background: rgba(22, 163, 74, .18);\n  color: #65e296;\n  font: 700 9px var(--mono);\n  letter-spacing: .12em;\n}\n.fleet-list {\n  padding: 5px 18px;\n}\n.fleet-list article {\n  display: grid;\n  grid-template-columns: 1.3fr .7fr;\n  gap: 18px;\n  align-items: center;\n  padding: 13px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .08);\n}\n.fleet-list article:last-child {\n  border-bottom: 0;\n}\n.fleet-list article > div:first-child {\n  display: grid;\n  gap: 4px;\n  min-width: 0;\n}\n.fleet-list article b {\n  overflow: hidden;\n  color: #fff;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fleet-list article small {\n  color: #8095b4;\n  font: 500 9px var(--mono);\n}\n.fleet-list article small span {\n  margin-right: 5px;\n  color: #8ab4ff;\n}\n.life {\n  display: grid;\n  gap: 6px;\n}\n.life small {\n  display: flex;\n  justify-content: space-between;\n}\n.life small b {\n  font-size: 10px;\n}\n.life > i {\n  display: block;\n  height: 4px;\n  overflow: hidden;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, .1);\n}\n.life > i span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #65e296);\n}\n.fleet-foot {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  border-block: 1px solid rgba(255, 255, 255, .1);\n  background: rgba(255, 255, 255, .035);\n}\n.fleet-foot span {\n  display: grid;\n  gap: 2px;\n  padding: 12px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.fleet-foot span:last-child {\n  border: 0;\n}\n.fleet-foot b {\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n.fleet-foot small {\n  color: #8095b4;\n  font: 500 8px var(--mono);\n  text-transform: uppercase;\n}\n.fleet-log {\n  padding: 12px 18px;\n  color: #8397b6;\n  font: 500 10px var(--mono);\n}\n.fleet-log > span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 7px;\n  border-radius: 50%;\n  background: #43db7c;\n  box-shadow: 0 0 10px #43db7c;\n}\n.fleet-log code {\n  color: #8ab4ff;\n}\n.hero-stats {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border-top: 1px solid rgba(255, 255, 255, .12);\n  background: rgba(255, 255, 255, .04);\n}\n.hero-stats > span {\n  display: grid;\n  gap: 4px;\n  padding: 20px 13px;\n  border-right: 1px solid rgba(255, 255, 255, .1);\n  text-align: center;\n}\n.hero-stats > span:last-child {\n  border: 0;\n}\n.hero-stats b {\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n.hero-stats small {\n  color: #9fb0c8;\n  font: 500 9px var(--mono);\n  text-transform: uppercase;\n}\n.acme-section {\n  padding: 64px 0;\n}\n.acme-section.alt {\n  background: #f5f8fc;\n}\n.pp-sec {\n  width: 100%;\n  margin: 0 0 16px;\n  color: var(--blue);\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.pp-ov {\n  width: 100%;\n  max-width: none;\n  margin: 0 0 30px;\n  color: var(--ink);\n  font-size: 16.5px;\n  line-height: 1.75;\n}\n.lifetime-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(280px, .5fr);\n  gap: 24px;\n  align-items: stretch;\n}\n.timeline {\n  display: grid;\n  gap: 12px;\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(4, 30, 66, .05);\n}\n.timeline article {\n  display: grid;\n  grid-template-columns: 150px minmax(0, 1fr) 70px;\n  gap: 15px;\n  align-items: center;\n}\n.timeline article > span {\n  display: grid;\n  color: var(--slate);\n  font-size: 11px;\n}\n.timeline article > span b {\n  color: var(--navy);\n  font-size: 13px;\n}\n.timeline i {\n  height: 28px;\n  overflow: hidden;\n  border-radius: 7px;\n  background: #edf1f7;\n}\n.timeline i b {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  min-width: 58px;\n  padding: 0 7px;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      #69a3f6,\n      var(--blue));\n  color: #fff;\n  font-size: 10px;\n  font-style: normal;\n  white-space: nowrap;\n}\n.timeline .current i b {\n  background:\n    linear-gradient(\n      90deg,\n      #ffb15c,\n      var(--orange));\n}\n.timeline em {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  color: var(--navy);\n  font: 800 17px var(--disp);\n  font-style: normal;\n}\n.timeline em small {\n  color: var(--slate);\n  font-size: 9px;\n  font-weight: 500;\n}\n.renewal-callout {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 28px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--navy),\n      #0c3978);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.renewal-callout strong {\n  color: #ffae52;\n  font: 800 58px/1 var(--disp);\n}\n.renewal-callout h3 {\n  margin: 9px 0;\n  color: #fff;\n  font: 700 19px/1.3 var(--disp);\n}\n.renewal-callout p {\n  margin: 0;\n  color: #c5d4e9;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.renewal-callout > div {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 18px;\n}\n.renewal-callout > div span {\n  padding: 5px 8px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, .1);\n  color: #dce7f7;\n  font: 600 9px var(--mono);\n}\n.pp-trust {\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding-block: 16px;\n  color: var(--slate);\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.default-tail .pp-secrows {\n  margin-top: 4px;\n}\n.default-tail .pp-why {\n  margin-top: 4px;\n}\n.default-tail .pw {\n  display: grid;\n  grid-template-columns: 42px minmax(0, 1fr);\n  grid-template-rows: auto auto;\n  gap: 3px 12px;\n}\n.default-tail .pw-ic {\n  grid-row: 1/3;\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 11px;\n  background: #fff;\n  color: var(--blue);\n  font: 700 11px var(--mono);\n}\n.default-tail .prv cite {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.default-tail .prv .rav {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  flex: none;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7c3aed);\n  color: #fff;\n  font: 700 11px var(--mono);\n}\n.default-tail .pp-faq {\n  margin-top: 4px;\n}\n.workflow {\n  display: grid;\n  grid-template-columns: 340px minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: var(--shadow);\n}\n.step-list {\n  display: grid;\n  padding: 12px;\n  border-right: 1px solid var(--line);\n  background: #f7f9fc;\n}\n.step-list button {\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 11px;\n  align-items: center;\n  width: 100%;\n  padding: 13px;\n  border: 0;\n  border-radius: 11px;\n  background: transparent;\n  color: var(--ink);\n  text-align: left;\n  cursor: pointer;\n}\n.step-list button > span:first-child {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--blue);\n  font: 700 10px var(--mono);\n}\n.step-list button > span:last-child {\n  display: grid;\n  gap: 3px;\n}\n.step-list button b {\n  color: var(--navy);\n  font-size: 12px;\n}\n.step-list button small {\n  color: var(--slate);\n  font-size: 10px;\n}\n.step-list button.active {\n  background: #eaf2ff;\n}\n.step-list button.active > span:first-child {\n  border-color: var(--blue);\n  background: var(--blue);\n  color: #fff;\n}\n.step-panel {\n  padding: 34px;\n}\n.step-panel > span {\n  color: var(--blue);\n  font: 700 10px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.step-panel h3 {\n  margin: 9px 0;\n  color: var(--navy);\n  font: 700 25px var(--disp);\n}\n.step-panel > p {\n  margin: 0;\n  color: var(--slate);\n  font-size: 14px;\n  line-height: 1.7;\n}\n.step-panel ul {\n  display: grid;\n  gap: 8px;\n  margin: 20px 0;\n  padding: 0;\n  list-style: none;\n}\n.step-panel li {\n  position: relative;\n  padding-left: 25px;\n  color: var(--ink);\n  font-size: 13px;\n}\n.step-panel li::before {\n  position: absolute;\n  left: 0;\n  color: var(--green);\n  content: "\\2713";\n  font-weight: 800;\n}\n.terminal {\n  margin-top: 24px;\n  overflow: hidden;\n  border-radius: 13px;\n  background: #071329;\n  color: #d4e2f6;\n  box-shadow: 0 15px 30px rgba(4, 18, 42, .18);\n}\n.terminal > div {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  background: #0e203d;\n}\n.terminal i {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ff6b6b;\n}\n.terminal i:nth-child(2) {\n  background: #ffbd4a;\n}\n.terminal i:nth-child(3) {\n  background: #51d780;\n}\n.terminal > div span {\n  margin-left: auto;\n  color: #8298b8;\n  font: 500 9px var(--mono);\n}\n.terminal code {\n  display: block;\n  overflow-x: auto;\n  padding: 22px;\n  color: #d4e2f6;\n  font: 500 11px/1.7 var(--mono);\n  white-space: pre-wrap;\n}\n.terminal code b {\n  color: #54df8a;\n}\n.plan-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.plan-card {\n  position: relative;\n  padding: 28px;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 8px 28px rgba(4, 30, 66, .06);\n}\n.plan-card.featured {\n  border-color: #f5a14d;\n  box-shadow: 0 20px 48px rgba(255, 140, 26, .14);\n}\n.flag {\n  position: absolute;\n  top: -12px;\n  right: 24px;\n  padding: 7px 11px;\n  border-radius: 99px;\n  background: var(--orange);\n  color: #fff;\n  font: 700 9px var(--mono);\n  letter-spacing: .08em;\n}\n.plan-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.plan-top > span {\n  color: var(--green);\n  font-weight: 800;\n}\n.plan-top small {\n  padding: 5px 9px;\n  border-radius: 99px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font: 700 9px var(--mono);\n  text-transform: uppercase;\n}\n.plan-card h3 {\n  margin: 18px 0 9px;\n  color: var(--navy);\n  font: 700 23px var(--disp);\n}\n.plan-card > p {\n  min-height: 48px;\n  margin: 0;\n  color: var(--slate);\n  font-size: 13.5px;\n  line-height: 1.65;\n}\n.price {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin: 23px 0;\n}\n.price b {\n  color: var(--navy);\n  font: 800 35px var(--disp);\n}\n.price span {\n  color: var(--slate);\n  font-size: 11px;\n}\n.plan-card dl {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 0;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n}\n.plan-card dl div {\n  display: grid;\n  gap: 3px;\n  padding: 12px;\n  border-bottom: 1px solid var(--line);\n}\n.plan-card dl div:nth-child(odd) {\n  border-right: 1px solid var(--line);\n}\n.plan-card dl div:nth-last-child(-n+2) {\n  border-bottom: 0;\n}\n.plan-card dt {\n  color: var(--slate);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.plan-card dd {\n  margin: 0;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 700;\n}\n.plan-card > ul {\n  display: grid;\n  gap: 9px;\n  margin: 20px 0;\n  padding: 0;\n  list-style: none;\n}\n.plan-card > ul li {\n  position: relative;\n  padding-left: 23px;\n  font-size: 13px;\n}\n.plan-card > ul li::before {\n  position: absolute;\n  left: 0;\n  color: var(--green);\n  content: "\\2713";\n  font-weight: 800;\n}\n.plan-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border-radius: 10px;\n  background: var(--blue);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 750;\n}\n.plan-button.orange {\n  background: var(--orange);\n}\n.calculator {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(320px, .75fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: var(--shadow);\n}\n.calculator-controls {\n  display: grid;\n  gap: 23px;\n  padding: 32px;\n}\n.calculator fieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.calculator legend,\n.calculator-controls > label {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 700;\n}\n.calculator output {\n  justify-self: end;\n  margin-top: -24px;\n  color: var(--blue);\n  font-weight: 700;\n}\n.segmented {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n}\n.segmented.three {\n  grid-template-columns: repeat(3, 1fr);\n}\n.segmented button {\n  display: grid;\n  gap: 4px;\n  min-height: 58px;\n  padding: 10px;\n  border: 0;\n  border-right: 1px solid var(--line);\n  background: #f8fafc;\n  color: var(--navy);\n  cursor: pointer;\n  font-weight: 700;\n}\n.segmented button:last-child {\n  border: 0;\n}\n.segmented button small {\n  color: var(--slate);\n  font-size: 9px;\n  font-weight: 500;\n}\n.segmented button.active {\n  background: var(--blue);\n  color: #fff;\n}\n.segmented button.active small {\n  color: #dceaff;\n}\n.calculator input[type=range] {\n  width: 100%;\n  accent-color: var(--blue);\n}\n.calculator-controls > label > small {\n  color: var(--slate);\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.calculator select {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--ink);\n  font: 500 13px var(--body);\n}\n.setup-note {\n  display: flex;\n  gap: 12px;\n  padding: 14px;\n  border-radius: 12px;\n  background: #eff8f2;\n}\n.setup-note > span {\n  display: grid;\n  width: 26px;\n  height: 26px;\n  place-items: center;\n  flex: none;\n  border-radius: 8px;\n  background: var(--green);\n  color: #fff;\n}\n.setup-note p {\n  display: grid;\n  gap: 3px;\n  margin: 0;\n}\n.setup-note b {\n  color: var(--navy);\n  font-size: 12px;\n}\n.setup-note small {\n  color: var(--slate);\n  font-size: 10px;\n}\n.estimate {\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background:\n    linear-gradient(\n      145deg,\n      var(--navy),\n      #0c3978);\n  color: #fff;\n}\n.estimate > span {\n  color: #8ab4ff;\n  font: 700 10px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.estimate > strong {\n  margin-top: 13px;\n  font: 800 42px var(--disp);\n}\n.estimate > small {\n  color: #aebfd8;\n  font-size: 10px;\n}\n.estimate dl {\n  display: grid;\n  margin: 26px 0;\n}\n.estimate dl div {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.estimate dt {\n  color: #aebfd8;\n  font-size: 11px;\n}\n.estimate dd {\n  margin: 0;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n}\n.estimate .saving dd {\n  color: #65e296;\n}\n.estimate .payable {\n  border-bottom: 0;\n}\n.estimate .payable dt,\n.estimate .payable dd {\n  color: #fff;\n  font-size: 13px;\n}\n.estimate button {\n  min-height: 44px;\n  border: 0;\n  border-radius: 9px;\n  background: var(--orange);\n  color: #fff;\n  cursor: pointer;\n  font-weight: 750;\n}\n.estimate button.outline {\n  margin-top: 9px;\n  border: 1px solid rgba(255, 255, 255, .25);\n  background: transparent;\n}\n.table-wrap {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n}\n.table-wrap table {\n  width: 100%;\n  min-width: 720px;\n  border-collapse: collapse;\n  background: #fff;\n}\n.table-wrap th,\n.table-wrap td {\n  padding: 15px 17px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  font-size: 12.5px;\n}\n.table-wrap th {\n  background: var(--navy);\n  color: #fff;\n  font: 700 11px var(--mono);\n  text-transform: uppercase;\n}\n.table-wrap th:last-child {\n  background: var(--blue);\n}\n.table-wrap td:first-child {\n  color: var(--navy);\n  font-weight: 700;\n}\n.table-wrap td:last-child {\n  background: #f2f7ff;\n  color: #0b438f;\n}\n.table-wrap tr:last-child td {\n  border-bottom: 0;\n}\n.compatibility-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.compatibility-grid article {\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n}\n.compatibility-grid h3,\n.card-grid h3 {\n  margin: 0 0 7px;\n  color: var(--navy);\n  font: 700 18px var(--disp);\n}\n.compatibility-grid p,\n.card-grid p {\n  margin: 0;\n  color: var(--slate);\n  font-size: 12.5px;\n  line-height: 1.6;\n}\n.compatibility-grid article > div {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 20px;\n}\n.compatibility-grid article > div span {\n  padding: 8px 11px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f8fafc;\n  color: var(--navy);\n  font-size: 11px;\n  font-weight: 700;\n}\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.card-grid.four {\n  grid-template-columns: repeat(4, 1fr);\n}\n.card-grid article {\n  padding: 23px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .05);\n}\n.card-grid article > span {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  margin-bottom: 15px;\n  place-items: center;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  font: 800 10px var(--mono);\n}\n@media (max-width: 1000px) {\n  .hero-grid {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .fleet {\n    max-width: 700px;\n  }\n  .hero-stats {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .lifetime-layout {\n    grid-template-columns: 1fr;\n  }\n  .workflow {\n    grid-template-columns: 290px minmax(0, 1fr);\n  }\n  .calculator {\n    grid-template-columns: 1fr;\n  }\n  .card-grid.four {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 760px) {\n  .wrap {\n    padding-inline: 18px;\n  }\n  .acme-hero {\n    padding-top: 24px;\n  }\n  .crumb {\n    margin-bottom: 25px;\n  }\n  .hero-copy h1 {\n    font-size: clamp(35px, 11vw, 48px);\n  }\n  .hero-copy > p {\n    font-size: 15px;\n  }\n  .hero-actions .btn {\n    width: 100%;\n  }\n  .hero-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero-stats > span:last-child {\n    grid-column: 1/-1;\n  }\n  .acme-section {\n    padding: 46px 0;\n  }\n  .pp-sec {\n    font-size: 13px;\n  }\n  .pp-ov {\n    font-size: 15px;\n  }\n  .timeline {\n    padding: 18px;\n  }\n  .timeline article {\n    grid-template-columns: 110px minmax(0, 1fr);\n    gap: 10px;\n  }\n  .timeline em {\n    grid-column: 2;\n    justify-self: end;\n    margin-top: -7px;\n  }\n  .workflow {\n    grid-template-columns: 1fr;\n  }\n  .step-list {\n    grid-template-columns: repeat(3, 1fr);\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .step-list button {\n    display: block;\n    padding: 10px;\n    text-align: center;\n  }\n  .step-list button > span:first-child {\n    margin: auto;\n  }\n  .step-list button > span:last-child {\n    display: none;\n  }\n  .step-panel {\n    padding: 24px;\n  }\n  .plan-grid,\n  .compatibility-grid,\n  .card-grid {\n    grid-template-columns: 1fr;\n  }\n  .calculator-controls,\n  .estimate {\n    padding: 24px;\n  }\n  .card-grid.four {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 520px) {\n  .fleet-list article {\n    grid-template-columns: 1fr;\n  }\n  .hero-stats {\n    grid-template-columns: 1fr;\n  }\n  .hero-stats > span:last-child {\n    grid-column: auto;\n  }\n  .timeline article {\n    grid-template-columns: 1fr;\n  }\n  .timeline em {\n    grid-column: auto;\n    justify-self: start;\n    margin: 0;\n  }\n  .plan-card {\n    padding: 22px;\n  }\n  .plan-card dl {\n    grid-template-columns: 1fr;\n  }\n  .plan-card dl div,\n  .plan-card dl div:nth-child(odd) {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .plan-card dl div:last-child {\n    border-bottom: 0;\n  }\n  .segmented,\n  .segmented.three {\n    grid-template-columns: 1fr;\n  }\n  .segmented button {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .card-grid.four {\n    grid-template-columns: 1fr;\n  }\n}\n.lifetime-layout {\n  grid-template-columns: 1.25fr 1fr;\n  gap: 28px;\n  align-items: center;\n}\n.timeline {\n  gap: 14px;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.timeline article {\n  grid-template-columns: 150px minmax(0, 1fr) 86px;\n  gap: 16px;\n}\n.timeline article > span {\n  font: 400 12px/1.3 var(--mono);\n}\n.timeline article > span b {\n  font: 700 14px/1.3 var(--disp);\n}\n.timeline i {\n  height: 34px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f1f4f9;\n}\n.timeline i b {\n  min-width: 84px;\n  padding-right: 10px;\n  border-radius: 8px;\n  background: #0667f7;\n  font: 600 12px var(--mono);\n}\n.timeline article:first-child i b {\n  background: #d6deeb;\n  color: #53647d;\n}\n.timeline .current i b {\n  background: #ff8708;\n}\n.timeline em {\n  display: block;\n  color: var(--navy);\n  font: 800 18px/1.15 var(--disp);\n  text-align: right;\n}\n.timeline em small {\n  display: block;\n  margin-top: 4px;\n  font: 500 11px var(--mono);\n}\n.timeline .current em {\n  color: #ff8708;\n}\n.renewal-callout {\n  padding: 28px;\n  border-radius: 20px;\n  background: #0b142e;\n}\n.renewal-callout strong {\n  color: #ff8708;\n  font: 700 46px/1 Georgia, serif;\n}\n.renewal-callout h3 {\n  margin: 9px 0 8px;\n  font-size: 19px;\n}\n.renewal-callout p {\n  font-size: 14px;\n}\n.renewal-callout > div {\n  gap: 10px;\n}\n.renewal-callout > div span {\n  padding: 6px 10px;\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .08);\n  font-size: 11px;\n}\n.workflow {\n  grid-template-columns: 330px minmax(0, 1fr);\n  gap: 22px;\n  overflow: visible;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.step-list {\n  gap: 8px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.step-list button {\n  position: relative;\n  display: flex;\n  grid-template-columns: none;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 14px 16px;\n  overflow: hidden;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  transition:\n    border-color .25s,\n    transform .25s,\n    box-shadow .25s;\n}\n.step-list button:hover {\n  transform: translateX(4px);\n}\n.step-list button > span:first-child {\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  border: 0;\n  border-radius: 9px;\n  background: #edf3ff;\n  color: #0667f7;\n  font: 600 12px var(--mono);\n}\n.step-list button > span:last-child {\n  display: grid;\n  gap: 2px;\n}\n.step-list button b {\n  font-size: 14px;\n}\n.step-list button small {\n  font-size: 12px;\n}\n.step-list button.active {\n  border-color: #0667f7;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.step-list button.active::after {\n  position: absolute;\n  right: 10%;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background: #0667f7;\n  content: "";\n}\n.step-panel {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: none;\n}\n.step-panel > span,\n.step-panel > h3,\n.step-panel > p,\n.step-panel > ul {\n  margin-right: 28px;\n  margin-left: 28px;\n}\n.step-panel > span {\n  display: block;\n  margin-top: 26px;\n  color: #ff7800;\n}\n.step-panel h3 {\n  margin-top: 8px;\n  margin-bottom: 10px;\n  font: 700 27px/1.2 Georgia, serif;\n}\n.step-panel > p {\n  font-size: 15px;\n}\n.step-panel ul {\n  margin-top: 16px;\n  margin-bottom: 20px;\n}\n.step-panel li {\n  padding-left: 34px;\n  line-height: 24px;\n}\n.step-panel li::before {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  place-items: center;\n  border-radius: 7px;\n  background: #edf3ff;\n  color: #0667f7;\n}\n.terminal {\n  min-height: 150px;\n  margin-top: auto;\n  border-radius: 0;\n  background: #0b142e;\n  box-shadow: none;\n}\n.terminal > div {\n  padding: 12px 20px;\n  background: transparent;\n}\n.terminal i {\n  width: 9px;\n  height: 9px;\n  background: #31436d;\n}\n.terminal i:nth-child(2),\n.terminal i:nth-child(3) {\n  background: #31436d;\n}\n.terminal code {\n  padding: 2px 20px 20px;\n  color: #fff;\n  font-size: 12.5px;\n}\n.terminal code b {\n  color: #ff8708;\n}\n.plan-grid {\n  gap: 18px;\n}\n.plan-card {\n  padding: 26px;\n  border-width: 1.5px;\n  border-radius: 20px;\n  box-shadow: none;\n  transition: transform .35s, box-shadow .35s;\n}\n.plan-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow);\n}\n.plan-card.featured {\n  border-color: #ff8708;\n  box-shadow: none;\n}\n.flag {\n  top: -12px;\n  right: auto;\n  left: 24px;\n  padding: 5px 10px;\n  background: #ff8708;\n  font-size: 10px;\n}\n.plan-top {\n  display: grid;\n  justify-content: stretch;\n  gap: 11px;\n}\n.plan-top > span {\n  color: var(--navy);\n  font: 700 14px var(--disp);\n}\n.plan-top small {\n  justify-self: start;\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  color: #0667f7;\n  font: 600 11px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.plan-card h3 {\n  margin: 6px 0 8px;\n  font-size: 21px;\n}\n.plan-card > p {\n  min-height: 42px;\n  font-size: 13.5px;\n}\n.price {\n  margin: 20px 0 4px;\n}\n.price b {\n  font-size: 36px;\n}\n.gst-line {\n  margin-bottom: 18px;\n  color: var(--slate);\n  font: 500 11px var(--mono);\n}\n.plan-card dl {\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px 14px;\n  border: 0;\n  border-radius: 0;\n}\n.plan-card dl div,\n.plan-card dl div:nth-child(odd),\n.plan-card dl div:nth-last-child(-n+2) {\n  gap: 4px;\n  padding: 0 0 8px;\n  border: 0;\n  border-bottom: 1px dashed var(--line);\n}\n.plan-card dt {\n  order: 2;\n  font-size: 12px;\n  text-transform: none;\n}\n.plan-card dd {\n  order: 1;\n  font-size: 13.5px;\n}\n.plan-card > ul {\n  gap: 10px;\n  margin-bottom: 22px;\n}\n.plan-card > ul li {\n  display: flex;\n  min-height: 24px;\n  align-items: center;\n  padding-left: 35px;\n}\n.plan-card > ul li::before {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  place-items: center;\n  border-radius: 7px;\n  background: #edf3ff;\n  color: #0667f7;\n}\n.plan-card > ul li b {\n  color: var(--navy);\n}\n.plan-actions {\n  display: grid;\n  gap: 8px;\n  margin-top: auto;\n}\n.plan-actions button {\n  min-height: 45px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: #fff;\n  color: var(--navy);\n  cursor: pointer;\n  font-weight: 700;\n}\n.plan-button {\n  min-height: 45px;\n}\n.plan-button.orange {\n  background: #ff8708;\n}\n.calculator {\n  grid-template-columns: 1.25fr 1fr;\n  border-radius: 20px;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.calculator-controls {\n  gap: 22px;\n  padding: 28px;\n}\n.calculator legend,\n.calculator-controls > label {\n  font-size: 14px;\n}\n.segmented {\n  gap: 6px;\n  padding: 4px;\n  border-radius: 12px;\n  background: #f1f4f9;\n}\n.segmented button {\n  min-height: 53px;\n  border: 0 !important;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--slate);\n}\n.segmented button.active {\n  background: #fff;\n  color: #0667f7;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n}\n.segmented button.active small {\n  color: #0667f7;\n}\n.calculator input[type=range] {\n  height: 6px;\n  border-radius: 99px;\n  background-color: #d6deeb;\n  background-image: linear-gradient(#0667f7, #0667f7);\n  background-repeat: no-repeat;\n  accent-color: #0667f7;\n}\n.calculator input[type=range]::-webkit-slider-thumb {\n  width: 22px;\n  height: 22px;\n  border: 3px solid #0667f7;\n  background: #fff;\n}\n.calculator-controls > label > small {\n  font-size: 12px;\n}\n.setup-note {\n  display: flex !important;\n  grid-template-columns: none !important;\n  align-items: center;\n  gap: 11px;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.setup-note input {\n  display: none;\n}\n.setup-note > span {\n  position: relative;\n  display: block;\n  width: 42px;\n  height: 24px;\n  border-radius: 99px;\n  background: #0667f7;\n}\n.setup-note > span::after {\n  position: absolute;\n  top: 3px;\n  left: 21px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #fff;\n  content: "";\n  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);\n}\n.setup-note p {\n  display: grid;\n  gap: 2px;\n}\n.setup-note b {\n  font-size: 14px;\n}\n.setup-note small {\n  font-size: 12px;\n}\n.estimate {\n  padding: 28px;\n  background: #0b142e;\n}\n.estimate > strong {\n  font-size: 44px;\n}\n.estimate dl {\n  margin: 20px 0;\n}\n.estimate dl div {\n  padding: 7px 0;\n  border: 0;\n}\n.estimate dl::before,\n.estimate dl::after {\n  height: 1px;\n  margin-bottom: 9px;\n  background: rgba(255, 255, 255, .12);\n  content: "";\n}\n.estimate dl::after {\n  margin-top: 9px;\n  margin-bottom: 0;\n}\n.estimate dt,\n.estimate dd {\n  font-size: 13.5px;\n}\n.estimate .payable dt,\n.estimate .payable dd {\n  font-size: 13.5px;\n}\n.estimate button {\n  min-height: 45px;\n  background: #ff8708;\n}\n.estimate-fine {\n  margin: 12px 0 0;\n  color: #91a2c3;\n  font: 500 10.5px/1.5 var(--mono);\n}\n.table-wrap {\n  border-radius: 14px;\n}\n.table-wrap table {\n  min-width: 620px;\n}\n.table-wrap th {\n  padding: 15px 18px;\n  background: #f1f4f9;\n  color: var(--slate);\n  font: 600 11px var(--mono);\n  letter-spacing: .1em;\n}\n.table-wrap th:last-child {\n  background: #eaf2ff;\n  color: #0667f7;\n}\n.table-wrap td {\n  padding: 14px 18px;\n  font-size: 14px;\n}\n.table-wrap td:last-child {\n  background: #eaf2ff;\n  color: var(--ink);\n}\n.compatibility-grid {\n  gap: 22px;\n}\n.compatibility-grid article {\n  padding: 24px;\n  border-radius: 20px;\n}\n.compatibility-grid h3 {\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n.compatibility-grid p {\n  margin-bottom: 16px;\n  font-size: 13.5px;\n}\n.compatibility-grid article > div {\n  gap: 10px;\n  margin-top: 0;\n}\n.compatibility-grid article > div span {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px 8px 8px;\n  border-radius: 12px;\n  background: #fff;\n  font-size: 13.5px;\n}\n.compatibility-grid article > div span::before {\n  display: grid;\n  width: 26px;\n  height: 26px;\n  place-items: center;\n  border-radius: 7px;\n  background: #0667f7;\n  color: #fff;\n  content: "\\25c7";\n  font-size: 12px;\n}\n.compatibility-grid article > div span:nth-child(3n+2)::before {\n  background: #0b142e;\n}\n.compatibility-grid article > div span:nth-child(3n)::before {\n  background: #ff8708;\n}\n.compatibility-grid article:nth-child(2) > div span:nth-child(3n+2)::before {\n  background: #16a34a;\n}\n.card-grid {\n  gap: 18px;\n}\n.card-grid.four {\n  gap: 16px;\n}\n.card-grid article {\n  padding: 24px;\n  border-radius: 18px;\n  box-shadow: none;\n  transition: transform .35s, box-shadow .35s;\n}\n.card-grid article:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow);\n}\n.card-grid article > span {\n  width: 44px;\n  height: 44px;\n  margin-bottom: 16px;\n  border-radius: 12px;\n  font-size: 14px;\n}\n.card-grid h3 {\n  font-size: 17px;\n}\n.card-grid p {\n  font-size: 14px;\n}\n.use-cases article > small {\n  display: block;\n  margin-bottom: 6px;\n  color: #ff7800;\n  font: 600 11px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.use-cases .case-icon {\n  background: #0667f7;\n}\n.use-cases .case-icon.orange {\n  background: #ff8708;\n}\n.use-cases .case-icon.navy {\n  background: #0b142e;\n}\n.use-cases .case-icon.green {\n  background: #16a34a;\n}\n.benefits article:nth-child(2) span,\n.benefits article:nth-child(6) span {\n  background: #ff8708;\n}\n.benefits article:nth-child(3) span {\n  background: #0b142e;\n}\n.benefits article:nth-child(4) span {\n  background: #16a34a;\n}\n@media (max-width: 900px) {\n  .lifetime-layout,\n  .calculator {\n    grid-template-columns: 1fr;\n  }\n  .workflow {\n    grid-template-columns: 1fr;\n  }\n  .step-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .step-list button > span:last-child {\n    display: grid;\n  }\n}\n@media (max-width: 760px) {\n  .step-list {\n    grid-template-columns: 1fr;\n  }\n  .step-list button {\n    display: flex;\n    text-align: left;\n  }\n  .plan-card dl {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .timeline article {\n    grid-template-columns: 96px minmax(0, 1fr) 60px;\n    gap: 10px;\n  }\n  .timeline em {\n    grid-column: auto;\n    justify-self: auto;\n    margin: 0;\n  }\n  .plan-card dl {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-grid {\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);\n  gap: 40px;\n}\n.hero-copy h1 {\n  margin-bottom: 0;\n  font-size: clamp(30px, 4vw, 46px);\n  line-height: 1.08;\n  letter-spacing: -.02em;\n}\n.hero-copy .hero-tag {\n  max-width: none;\n  margin: 14px 0 0;\n  color: #c7d9f5;\n  font: 700 clamp(15px, 1.5vw, 18px)/1.45 var(--disp);\n}\n.hero-copy .hero-tag-secondary {\n  max-width: none;\n  margin: 6px 0 0;\n  color: #fff;\n  font: 600 15.5px/1.45 var(--disp);\n}\n.hero-type {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: 2px;\n  margin-top: 20px;\n  color: #69b6ff;\n  font: 700 clamp(16px, 1.7vw, 19px)/1.35 var(--disp);\n}\n.hero-type i {\n  width: 2px;\n  height: 22px;\n  background: #69b6ff;\n  animation: acme-caret 1s steps(1) infinite;\n}\n@keyframes acme-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.hero-points {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, max-content));\n  gap: 12px 34px;\n  margin: 20px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.hero-points li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #dce7f8;\n  font-size: 14.5px;\n  font-weight: 600;\n}\n.hero-points li > span {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  flex: none;\n  border-radius: 6px;\n  background: var(--blue);\n  color: #fff;\n  font-size: 12px;\n  box-shadow: 0 4px 12px rgba(21, 101, 216, .45);\n}\n.tally-style-actions {\n  flex-wrap: nowrap;\n  gap: 6px;\n  margin-top: 28px;\n  overflow: visible;\n}\n.tally-style-actions .btn {\n  width: auto;\n  min-height: 36px;\n  padding: 8px 9px;\n  border-width: 1.5px;\n  border-radius: 8px;\n  font: 700 11px var(--disp);\n  white-space: nowrap;\n  cursor: pointer;\n}\n.tally-style-actions .btn.secondary {\n  border-color: rgba(156, 200, 255, .35);\n  background: rgba(255, 255, 255, .05);\n}\n.tally-style-actions .btn.primary {\n  background: var(--orange);\n  box-shadow: 0 10px 24px rgba(255, 140, 26, .35);\n}\n.hero-ai {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 9px 12px 9px 16px;\n  border: 1px solid rgba(156, 200, 255, .25);\n  border-radius: 14px;\n  background: rgba(4, 30, 66, .55);\n}\n.hero-ai > span {\n  color: #fff;\n  font: 700 11.5px var(--mono);\n  letter-spacing: .06em;\n}\n.hero-ai > div {\n  display: flex;\n  gap: 8px;\n}\n.hero-ai a {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n  text-decoration: none;\n  transition: transform .2s, background .2s;\n}\n.hero-ai a:hover,\n.hero-ai a:focus-visible {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, .2);\n}\n.hero-ai a b {\n  font: 700 11px var(--mono);\n}\n.hero-media {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  margin-top: 18px;\n  color: #fff;\n}\n.hero-media > strong {\n  font: 700 15px/1.4 var(--body);\n}\n.hero-media > strong span {\n  color: #ff8c1a;\n  font-size: 11px;\n  letter-spacing: -.08em;\n}\n.hero-guide-player {\n  display: flex;\n  width: 280px;\n  max-width: 100%;\n  height: 44px;\n  align-items: center;\n  gap: 12px;\n  padding: 0 14px;\n  border-radius: 24px;\n  background: #f5f7fb;\n  color: #101827;\n  text-decoration: none;\n}\n.hero-guide-player > span {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  font-size: 12px;\n}\n.hero-guide-player b {\n  font-size: 12px;\n  white-space: nowrap;\n}\n.hero-guide-player i {\n  height: 4px;\n  flex: 1;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #626a75 42%,\n      #b6bbc2 42%);\n}\n.hero-copy .powered {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  color: #c7d5ec;\n}\n.hero-copy .powered small {\n  display: inline;\n  color: #c7d5ec;\n  font-size: 13px;\n  text-transform: none;\n}\n.hero-copy .powered > span {\n  display: inline;\n  width: auto;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  background: none;\n  color: #c7d5ec;\n}\n.hero-copy .powered > b {\n  padding: 8px 14px;\n  border-radius: 4px;\n  background: #204353;\n  color: #fff;\n  font: 700 18px var(--disp);\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-type i {\n    animation: none;\n  }\n}\n@media (max-width: 1000px) {\n  .hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .fleet {\n    max-width: 700px;\n  }\n}\n@media (max-width: 760px) {\n  .hero-copy h1 {\n    font-size: clamp(30px, 9vw, 46px);\n  }\n  .hero-points {\n    grid-template-columns: 1fr;\n  }\n  .tally-style-actions {\n    overflow-x: auto;\n    padding-bottom: 4px;\n  }\n  .tally-style-actions .btn {\n    width: auto;\n    flex: 0 0 auto;\n  }\n  .hero-ai > span {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=acme-certificate.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcmeCertificatePage, { className: "AcmeCertificatePage", filePath: "src/app/pages/acme-certificate.page.ts", lineNumber: 21 });
})();
export {
  AcmeCertificatePage
};
//# sourceMappingURL=chunk-IS2SM7VL.js.map
