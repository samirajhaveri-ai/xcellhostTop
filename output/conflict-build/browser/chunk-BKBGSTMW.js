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
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/compare-provider-detail.page.ts
var _c0 = ["comparisonFrame"];
var _c1 = () => ["cloud-backup-acronis", "data-protection"];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.name;
function CompareProviderDetailPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[1]);
  }
}
function CompareProviderDetailPage_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 14)(1, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3[1]);
  }
}
function CompareProviderDetailPage_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 16)(1, "div", 36);
    \u0275\u0275text(2, "\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275text(10, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r4.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r4.role);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r4.quote);
  }
}
var SOURCE_COMPARISONS = {
  vultr: { provider: "Vultr", file: "cloudbaba-vs-vultr.html" },
  ovhcloud: { provider: "OVHcloud", file: "cloudbaba-vs-ovhcloud.html" },
  digitalocean: { provider: "DigitalOcean", file: "cloudbaba-vs-digitalocean.html" },
  aws: { provider: "Amazon Web Services", file: "cloudbaba-vs-aws.html" },
  gcp: { provider: "Google Cloud", file: "cloudbaba-vs-gcp.html" },
  azure: { provider: "Microsoft Azure", file: "cloudbaba-vs-azure.html" }
};
var CompareProviderDetailPage = class _CompareProviderDetailPage {
  frame;
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  comparison = SOURCE_COMPARISONS[this.route.snapshot.data["comparison"]] ?? SOURCE_COMPARISONS["aws"];
  resizeObserver;
  resizeTimers = [];
  provider = this.comparison.provider;
  comparisonTitle = `CloudBaba vs ${this.provider}`;
  securityRows = [
    ["Immutability", "Write-once storage, retention-locked"],
    ["Isolation", "Outside your production network"],
    ["Encryption", "AES-256, customer-held keys"],
    ["Anomaly detection", "Ransomware patterns flagged on backup streams"],
    ["Restore testing", "Scheduled drills with timed, documented results"],
    ["Recovery scope", "File, folder, VM, or full bare metal"]
  ];
  whyCloudBackup = [
    ["Reliable Data Protection", "Protect servers, endpoints, applications, and critical workloads from data loss."],
    ["Automated Backups", "Schedule regular backups automatically and reduce manual backup efforts."],
    ["Ransomware Protection", "Safeguard critical data from ransomware, accidental deletion, and hardware failure."],
    ["Flexible Retention", "Maintain recoverable backup copies with configurable retention policies."],
    ["Fast Data Recovery", "Restore critical data and workloads quickly to minimize downtime."],
    ["Secure & Scalable Backup", "Protect growing data volumes with secure and scalable cloud backup."]
  ];
  reviews = [
    {
      initials: "VD",
      name: "Vikram Desai",
      role: "Director, Desai & Sons Manufacturing",
      quote: "Earlier, backup was something we had to keep checking manually. With Cloud Backup, the process is much easier to manage. Knowing our important business files are protected gives us real peace of mind."
    },
    {
      initials: "KM",
      name: "Kavita Menon",
      role: "IT Administrator, Horizon Logistics",
      quote: "The biggest benefit for us has been simplicity. We can keep track of our backups without adding extra work for the IT team, and getting files back when required is straightforward."
    },
    {
      initials: "SK",
      name: "Sanjay Kapoor",
      role: "Operations Head, Kapoor & Associates",
      quote: "We wanted a dependable backup solution without maintaining additional infrastructure. Cloud Backup has fitted well into our workflow, and the support team has been helpful whenever we have needed assistance."
    }
  ];
  faqs = [
    ["Can I pay monthly?", "Yes \u2014 flexible monthly and yearly billing. No long lock-in, with a GST invoice on every payment."],
    ["What is Acronis Backup Cloud?", "A fully managed, cloud-based backup and recovery service protecting servers, endpoints, virtual machines and Microsoft 365 with AI-based anti-ransomware."],
    ["How does Acronis Backup Cloud ensure data security?", "AES-256 encryption at rest, TLS in transit, immutable storage and Active Protection help keep backups protected from ransomware."],
    ["What types of data and systems can it protect?", "Physical, virtual and cloud workloads including Windows and Linux servers, PCs, Macs, mobile devices, Hyper-V, VMware, Microsoft 365, SQL and Exchange."],
    ["How frequently can I back up?", "Backups can run as often as every few minutes or on a daily schedule, depending on your plan and recovery-point objective."],
    ["How long does a restore take?", "It depends on the data size and connection. We measure it for your environment during onboarding and provide a realistic recovery target."],
    ["Can your staff read my data?", "No. Encryption keys remain under your control. Our team can monitor whether a backup ran without reading its contents."],
    ["Does this replace my local backup?", "It complements it. Local backup supports fast restores, while an off-site copy protects against fire, flood and ransomware."]
  ];
  sourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/comparisons/${this.comparison.file}`);
  insightVideos = [
    { title: "Product Intro", id: "rya4Q4IZniA" },
    { title: "Use Cases", id: "nIMbqdbGxao" }
  ].map((video) => ({
    title: video.title,
    src: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`)
  }));
  constructor() {
    inject(SeoService).set(`CloudBaba vs ${this.provider} | XcellHost`, `A detailed feature-by-feature comparison of CloudBaba and ${this.provider}.`, `/${this.route.snapshot.url.join("/")}/`);
  }
  ngAfterViewInit() {
    this.scheduleResize();
  }
  onFrameLoad() {
    this.revealFrameContent();
    this.resizeFrame();
    this.observeFrameContent();
    this.scheduleResize();
  }
  openCallback(event) {
    event.preventDefault();
    this.topics.ask(this.comparisonTitle);
    this.overlay.open("callback");
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.resizeTimers.forEach((timer) => clearTimeout(timer));
  }
  observeFrameContent() {
    this.resizeObserver?.disconnect();
    const body = this.frame?.nativeElement.contentDocument?.body;
    if (!body || typeof ResizeObserver === "undefined")
      return;
    this.resizeObserver = new ResizeObserver(() => this.resizeFrame());
    this.resizeObserver.observe(body);
  }
  scheduleResize() {
    this.resizeTimers.forEach((timer) => clearTimeout(timer));
    this.resizeTimers = [100, 500, 1500, 3e3].map((delay) => setTimeout(() => {
      this.revealFrameContent();
      this.resizeFrame();
    }, delay));
  }
  revealFrameContent() {
    this.frame?.nativeElement.contentDocument?.querySelectorAll(".rv").forEach((element) => element.classList.add("in"));
  }
  resizeFrame() {
    const iframe = this.frame?.nativeElement;
    const document = iframe?.contentDocument;
    if (!iframe || !document)
      return;
    const height = Math.max(document.body?.scrollHeight ?? 0, document.body?.offsetHeight ?? 0, document.documentElement?.scrollHeight ?? 0, document.documentElement?.offsetHeight ?? 0);
    if (height > 0)
      iframe.style.height = `${height}px`;
  }
  static \u0275fac = function CompareProviderDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareProviderDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareProviderDetailPage, selectors: [["xh-compare-provider-detail-page"]], viewQuery: function CompareProviderDetailPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 60, vars: 12, consts: [["comparisonFrame", ""], [1, "source-comparison-shell"], [1, "source-comparison-frame", 3, "load", "src", "title"], ["id", "ppage", "aria-label", "Cloud Backup information", 1, "comparison-default-sections"], [1, "pp-body", "cloud-backup-body"], [1, "wrap"], [1, "pp-sec"], ["id", "ppSecWrap"], [1, "pp-ov"], [1, "pp-secrows"], [1, "psrow"], [1, "pp-secfoot"], ["id", "ppWhyHead", 1, "pp-sec"], ["id", "ppWhy", 1, "pp-why"], [1, "pw"], ["id", "ppRevs", 1, "pp-tcards"], [1, "tcard"], [1, "pp-sec", "pp-faq-heading"], ["id", "ppFaq", 1, "pp-faq"], [3, "faqs"], ["id", "ppBlog"], ["pageSlug", "cloud-backup", 3, "pageAliases", "videos"], [1, "pp-cta"], [1, "comparison-cta-actions"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], ["href", "tel:+912267111555", 1, "btn", "btn-ghost"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], [1, "btn", "btn-ghost", 3, "href"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"], [1, "pp-proof"], [1, "psk"], [1, "psv"], ["aria-hidden", "true", 1, "pw-ic"], ["viewBox", "0 0 24 24"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10 2.2 2.2 4.8-5"], [1, "quote-badge"], [1, "tav"], [1, "tname"], [1, "trole"], ["aria-label", "5 out of 5 stars", 1, "tstars"]], template: function CompareProviderDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main", 1)(1, "iframe", 2, 0);
      \u0275\u0275listener("load", function CompareProviderDetailPage_Template_iframe_load_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFrameLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10, " Backups are what ransomware attacks first, so the copy is placed beyond reach of your production network and written in immutable form. Once a recovery point exists it cannot be modified or deleted inside its retention window. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275repeaterCreate(12, CompareProviderDetailPage_For_13_Template, 5, 2, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 11);
      \u0275\u0275text(15, " XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 Indian Tier-4 datacenters \xB7 DPDPA and RBI aligned \xB7 24\xD77 NOC and SOC. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275repeaterCreate(19, CompareProviderDetailPage_For_20_Template, 8, 2, "article", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 6);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275repeaterCreate(24, CompareProviderDetailPage_For_25_Template, 13, 4, "article", 16, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18);
      \u0275\u0275element(29, "xh-product-faq", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275element(31, "xh-insights-section", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 22)(33, "div")(34, "h3");
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 23)(39, "a", 24);
      \u0275\u0275listener("click", function CompareProviderDetailPage_Template_a_click_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback($event));
      });
      \u0275\u0275text(40, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 25);
      \u0275\u0275text(42, "Call +91 22 6711 1555");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "a", 26);
      \u0275\u0275text(44, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "a", 27);
      \u0275\u0275text(46, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 28);
      \u0275\u0275element(48, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 30)(50, "span");
      \u0275\u0275text(51, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.sourceUrl, \u0275\u0275sanitizeResourceUrl)("title", "CloudBaba vs " + ctx.provider + " comparison");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Security & compliance \u2014 ", ctx.comparisonTitle);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.securityRows);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Why XcellHost for ", ctx.comparisonTitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.whyCloudBackup);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("What customers say about ", ctx.comparisonTitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.reviews);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Frequently asked questions about ", ctx.comparisonTitle);
      \u0275\u0275advance(2);
      \u0275\u0275property("faqs", ctx.faqs);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(11, _c1))("videos", ctx.insightVideos);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Ready to explore ", ctx.comparisonTitle, "?");
      \u0275\u0275advance(10);
      \u0275\u0275property("href", "mailto:sales@xcellhost.cloud?subject=" + ctx.comparisonTitle + " enquiry", \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterLink, InsightsSectionComponent, ProductFaqComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #fff;\n}\n.source-comparison-shell[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.source-comparison-frame[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  background: #fff;\n}\n.comparison-default-sections[_ngcontent-%COMP%] {\n  display: block;\n  background: #fff;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%] {\n  padding: 36px 0 42px;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   #ppSecWrap[_ngcontent-%COMP%], \n.comparison-default-sections[_ngcontent-%COMP%]   #ppWhy[_ngcontent-%COMP%], \n.comparison-default-sections[_ngcontent-%COMP%]   .tally-videos[_ngcontent-%COMP%], \n.comparison-default-sections[_ngcontent-%COMP%]   #ppRevs[_ngcontent-%COMP%], \n.comparison-default-sections[_ngcontent-%COMP%]   #ppFaq[_ngcontent-%COMP%], \n.comparison-default-sections[_ngcontent-%COMP%]   #ppBlog[_ngcontent-%COMP%] {\n  margin-bottom: 42px;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .pw-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .comparison-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 560px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.42);\n  color: #fff;\n}\n.comparison-default-sections[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.12);\n}\n@media (max-width: 760px) {\n  .comparison-default-sections[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%] {\n    padding-top: 26px;\n  }\n  .comparison-default-sections[_ngcontent-%COMP%]   #ppSecWrap[_ngcontent-%COMP%], \n   .comparison-default-sections[_ngcontent-%COMP%]   #ppWhy[_ngcontent-%COMP%], \n   .comparison-default-sections[_ngcontent-%COMP%]   .tally-videos[_ngcontent-%COMP%], \n   .comparison-default-sections[_ngcontent-%COMP%]   #ppRevs[_ngcontent-%COMP%], \n   .comparison-default-sections[_ngcontent-%COMP%]   #ppFaq[_ngcontent-%COMP%], \n   .comparison-default-sections[_ngcontent-%COMP%]   #ppBlog[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n}\n/*# sourceMappingURL=compare-provider-detail.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareProviderDetailPage, [{
    type: Component,
    args: [{ selector: "xh-compare-provider-detail-page", standalone: true, imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="source-comparison-shell">\r
  <iframe\r
    #comparisonFrame\r
    class="source-comparison-frame"\r
    [src]="sourceUrl"\r
    [title]="'CloudBaba vs ' + provider + ' comparison'"\r
    (load)="onFrameLoad()"\r
  ></iframe>\r
\r
  <section id="ppage" class="comparison-default-sections" aria-label="Cloud Backup information">\r
    <div class="pp-body cloud-backup-body">\r
      <div class="wrap">\r
        <div class="pp-sec">Security &amp; compliance \u2014 {{ comparisonTitle }}</div>\r
        <div id="ppSecWrap">\r
          <p class="pp-ov">\r
            Backups are what ransomware attacks first, so the copy is placed beyond reach of your\r
            production network and written in immutable form. Once a recovery point exists it\r
            cannot be modified or deleted inside its retention window.\r
          </p>\r
          <div class="pp-secrows">\r
            @for (row of securityRows; track row[0]) {\r
              <div class="psrow"><span class="psk">{{ row[0] }}</span><span class="psv">{{ row[1] }}</span></div>\r
            }\r
          </div>\r
          <p class="pp-secfoot">\r
            XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 Indian Tier-4 datacenters \xB7 DPDPA\r
            and RBI aligned \xB7 24\xD77 NOC and SOC.\r
          </p>\r
        </div>\r
\r
        <div class="pp-sec" id="ppWhyHead">Why XcellHost for {{ comparisonTitle }}</div>\r
        <div class="pp-why" id="ppWhy">\r
          @for (item of whyCloudBackup; track item[0]) {\r
            <article class="pw">\r
              <span class="pw-ic" aria-hidden="true">\r
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10 2.2 2.2 4.8-5" /></svg>\r
              </span>\r
              <b>{{ item[0] }}</b><span>{{ item[1] }}</span>\r
            </article>\r
          }\r
        </div>\r
\r
        <div class="pp-sec">What customers say about {{ comparisonTitle }}</div>\r
        <div class="pp-tcards" id="ppRevs">\r
          @for (review of reviews; track review.name) {\r
            <article class="tcard">\r
              <div class="quote-badge">\u201D</div>\r
              <div class="tav">{{ review.initials }}</div>\r
              <div class="tname">{{ review.name }}</div>\r
              <div class="trole">{{ review.role }}</div>\r
              <div class="tstars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>\r
              <p>{{ review.quote }}</p>\r
            </article>\r
          }\r
        </div>\r
\r
        <div class="pp-sec pp-faq-heading">Frequently asked questions about {{ comparisonTitle }}</div>\r
        <div class="pp-faq" id="ppFaq"><xh-product-faq [faqs]="faqs" /></div>\r
\r
        <div id="ppBlog">\r
          <xh-insights-section pageSlug="cloud-backup" [pageAliases]="['cloud-backup-acronis', 'data-protection']" [videos]="insightVideos" />\r
        </div>\r
\r
        <div class="pp-cta">\r
          <div>\r
            <h3>Ready to explore {{ comparisonTitle }}?</h3>\r
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
          </div>\r
          <div class="comparison-cta-actions">\r
            <a class="btn btn-primary" href="#" (click)="openCallback($event)">Request a callback</a>\r
            <a class="btn btn-ghost" href="tel:+912267111555">Call +91 22 6711 1555</a>\r
            <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
            <a class="btn btn-ghost" [href]="'mailto:sales@xcellhost.cloud?subject=' + comparisonTitle + ' enquiry'">Email Us</a>\r
          </div>\r
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" />\r
          </a>\r
        </div>\r
\r
        <div class="pp-proof">\r
          <span>\u{1F3C5} ISO 27001</span><span>\u{1F3C5} ISO 20000-1</span><span>\u{1F91D} Microsoft Gold Partner</span>\r
          <span>\u{1F570} Since 1999</span><span>\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/pages/compare-provider-detail.page.css */\n:host {\n  display: block;\n  background: #fff;\n}\n.source-comparison-shell {\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.source-comparison-frame {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  background: #fff;\n}\n.comparison-default-sections {\n  display: block;\n  background: #fff;\n}\n.comparison-default-sections .pp-body {\n  padding: 36px 0 42px;\n}\n.comparison-default-sections .pp-sec:first-child {\n  margin-top: 0;\n}\n.comparison-default-sections #ppSecWrap,\n.comparison-default-sections #ppWhy,\n.comparison-default-sections .tally-videos,\n.comparison-default-sections #ppRevs,\n.comparison-default-sections #ppFaq,\n.comparison-default-sections #ppBlog {\n  margin-bottom: 42px;\n}\n.comparison-default-sections .pw-ic svg {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.comparison-default-sections .comparison-cta-actions {\n  display: flex;\n  max-width: 560px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.comparison-default-sections .pp-cta .btn-ghost {\n  border-color: rgba(255, 255, 255, 0.42);\n  color: #fff;\n}\n.comparison-default-sections .pp-cta .btn-ghost:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.12);\n}\n@media (max-width: 760px) {\n  .comparison-default-sections .pp-body {\n    padding-top: 26px;\n  }\n  .comparison-default-sections #ppSecWrap,\n  .comparison-default-sections #ppWhy,\n  .comparison-default-sections .tally-videos,\n  .comparison-default-sections #ppRevs,\n  .comparison-default-sections #ppFaq,\n  .comparison-default-sections #ppBlog {\n    margin-bottom: 32px;\n  }\n}\n/*# sourceMappingURL=compare-provider-detail.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["comparisonFrame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareProviderDetailPage, { className: "CompareProviderDetailPage", filePath: "src/app/pages/compare-provider-detail.page.ts", lineNumber: 40 });
})();
export {
  CompareProviderDetailPage
};
//# sourceMappingURL=chunk-BKBGSTMW.js.map
