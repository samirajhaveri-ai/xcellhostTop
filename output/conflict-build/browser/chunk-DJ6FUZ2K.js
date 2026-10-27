import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import {
  buildContextualProductReviews
} from "./chunk-KQWZNZVP.js";
import {
  InsightsSectionComponent,
  RevealDirective
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
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  afterNextRender,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/sections/managed-redis-tail.component.ts
var _c0 = () => ["redis"];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.title;
var _forTrack2 = ($index, $item) => $item.name;
function ManagedRedisTailComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1[1]);
  }
}
function ManagedRedisTailComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "span", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 37);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.body);
  }
}
function ManagedRedisTailComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "div", 38);
    \u0275\u0275text(2, "\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 42);
    \u0275\u0275text(10, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r3.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r3.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", review_r3.stars + " out of 5 stars");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r3.quote);
  }
}
var ManagedRedisTailComponent = class _ManagedRedisTailComponent {
  configuration = input.required(...ngDevMode ? [{ debugName: "configuration" }] : []);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  docs = inject(DocRequestService);
  sanitizer = inject(DomSanitizer);
  securityRows = [
    ["Encryption", "TLS in transit \xB7 encryption at rest"],
    ["Network isolation", "Private networking \xB7 IP allow-lists"],
    ["Access control", "Redis ACL users \xB7 role-based permissions"],
    ["Data residency", "Hosted in Indian data centres"],
    ["Backup & recovery", "Hourly backups \xB7 persistence options"],
    ["Monitoring", "Memory, latency, evictions & replica health"]
  ];
  why = [
    { title: "24\xD77 Redis operations", body: "Patching, monitoring and capacity checks handled by database engineers.", icon: "M12 8v4l3 2M21 12a9 9 0 1 1-9-9" },
    { title: "Sentinel high availability", body: "Primary and replica monitored by Sentinel for automatic failover.", icon: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 10v4" },
    { title: "Backups you can restore", body: "Hourly snapshots, persistence options and recovery planning for your data.", icon: "M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6" },
    { title: "Help with your migration", body: "Sizing, data sync and a rehearsed cutover from your existing Redis setup.", icon: "M5 12h14m-6-6 6 6-6 6" },
    { title: "INR billing, Indian hosting", body: "Keep data in India with clear per-node pricing and GST invoicing.", icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18" },
    { title: "Grow with Redis Cluster", body: "Add replicas or plan a sharded cluster as memory and throughput needs grow.", icon: "M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6zM10 7h4M7 10v4M17 10v4M10 17h4" }
  ];
  // Reuse the site's existing Managed Redis review source and override support.
  reviews = buildContextualProductReviews("Managed Redis", "Cloud", [
    "Redis provisioning and patching",
    "Sentinel failover and replication",
    "Redis monitoring and backups"
  ]);
  faqs = [
    ["What is managed Redis?", "Managed Redis is a hosted in-memory data store where XcellHost handles provisioning, patching, monitoring, backups and failover. Use it for caching, sessions, queues and real-time analytics, with standalone, Sentinel HA or Redis Cluster deployments in Indian data centres."],
    ["What does managed Redis include?", "Provisioning, patching, monitoring, hourly backups and 24\xD77 support are included. Sentinel HA plans add a replica and automatic failover. Your team manages application code, keys and data."],
    ["Is it production-ready for caching, sessions and queues?", "Yes. Choose Sentinel HA for production availability, configure persistence for your workload and use monitoring to track memory, latency, hit ratio and evictions."],
    ["Do you support Redis Cluster?", "Yes. Redis Cluster distributes data across shards for larger datasets and higher throughput. We help design the node count, replicas and client configuration for your application."],
    ["How does failover work?", "Sentinel monitors the primary. When a quorum confirms failure, a replica is promoted. Use a Sentinel-aware client so your application can discover the new primary and reconnect."],
    ["Is my data persisted?", "RDB snapshots, AOF persistence or both can be configured. Hourly backups are included; retention and recovery requirements are agreed for your deployment."],
    ["How is pricing calculated?", "Compute is priced per node. A Sentinel HA pair runs two data nodes, and additional read replicas add nodes. The calculator uses 730 hours per month plus NVMe storage at \u20B96.20 per GB-month. Estimates are in INR excluding GST."],
    ["Can I migrate from ElastiCache or self-managed Redis?", "Yes. We check version and client compatibility, size the target, synchronise your data and rehearse a controlled cutover before validating the new deployment."],
    ["How is access secured?", "Use TLS, encryption at rest, Redis ACL users, private networking and IP allow-lists. Application access and administrative permissions are configured for your environment."],
    ["Is this suitable for startups?", "Yes. Start with a small standalone deployment for development or a Sentinel HA pair for production, then increase memory, compute and replicas as traffic grows."],
    ["Do you offer a free consultation?", "Yes. Discuss your cache size, peak traffic, persistence needs, availability and migration plan with a Redis engineer before selecting a deployment."]
  ];
  videos = [
    {
      title: "Redis Insight: a developer\u2019s guide",
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://fast.wistia.net/embed/iframe/iy6qqvu1nn"),
      poster: "/assets/images/managed-redis/video-iy6qqvu1nn.jpg"
    },
    {
      title: "Redis Insight: tech deep dive",
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://fast.wistia.net/embed/iframe/b34cf67ayc"),
      poster: "/assets/images/managed-redis/video-b34cf67ayc.jpg"
    }
  ];
  articles = [
    {
      title: "High availability with Redis Sentinel",
      description: "Understand quorum, replica promotion and how Sentinel-aware clients discover the current primary.",
      href: "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/",
      image: "/assets/images/managed-redis/sentinel-background.jpg",
      category: "Redis \xB7 High availability",
      author: "Redis documentation"
    },
    {
      title: "Redis persistence: RDB and AOF explained",
      description: "Compare snapshots and append-only files, and learn how persistence choices affect recovery and performance.",
      href: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
      image: "/assets/images/managed-redis/hero-code.jpg",
      category: "Redis \xB7 Data protection",
      author: "Redis documentation"
    }
  ];
  openCallback(request = "consultation") {
    this.topics.ask(`Managed Redis \u2014 ${request} \xB7 ${this.configuration()}`);
    this.overlay.open("callback");
  }
  requestDoc(kind) {
    this.docs.ask(kind, "Managed Redis");
    this.overlay.open("doc");
  }
  static \u0275fac = function ManagedRedisTailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagedRedisTailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagedRedisTailComponent, selectors: [["xh-managed-redis-tail"]], inputs: { configuration: [1, "configuration"] }, decls: 66, vars: 5, consts: [[1, "redis-tail-body"], [1, "wrap"], ["aria-labelledby", "redisSecurityTitle"], ["id", "redisSecurityTitle", 1, "pp-sec"], [1, "pp-ov"], [1, "pp-secrows"], [1, "psrow"], [1, "pp-secfoot"], ["aria-labelledby", "redisWhyTitle"], ["id", "redisWhyTitle", 1, "pp-sec"], ["xhReveal", "", 1, "pp-why"], [1, "pw"], ["aria-labelledby", "redisReviewsTitle"], ["id", "redisReviewsTitle", 1, "pp-sec"], [1, "pp-tcards"], ["xhReveal", "", 1, "tcard"], ["aria-labelledby", "faq"], ["id", "faq", 1, "pp-sec"], [1, "pp-faq"], ["idPrefix", "redisFaqAnswer", 3, "faqs"], ["pageSlug", "managed-redis", "videoDescription", "Explore Redis Insight demos for browsing data, debugging commands and understanding Redis workloads.", "videoLibraryUrl", "https://redis.io/resources/videos/", 3, "pageAliases", "videos", "articles"], [1, "redis-tail-footer"], ["id", "lead", "aria-labelledby", "redisCtaTitle", "xhReveal", "", 1, "pp-cta"], [1, "redis-cta-copy"], ["id", "redisCtaTitle"], [1, "redis-cta-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["href", "https://wa.me/918657032540?text=I%20would%20like%20to%20discuss%20Managed%20Redis", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.cloud?subject=Managed%20Redis%20enquiry", 1, "btn", "btn-ghost"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost customer support", "width", "104", "height", "104", "loading", "lazy", 1, "pp-cta-buddha"], [1, "pp-proof"], [1, "photo-credit"], [1, "psk"], [1, "psv"], ["aria-hidden", "true", 1, "pw-ic"], ["viewBox", "0 0 24 24"], ["aria-hidden", "true", 1, "quote-badge"], ["aria-hidden", "true", 1, "tav"], [1, "tname"], [1, "trole"], [1, "tstars"]], template: function ManagedRedisTailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Security & compliance \u2014 Managed Redis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Keep your cache, sessions and queues protected with encrypted connections, controlled access and private networking. XcellHost manages patching, monitoring and backups; your team controls application access and the data stored in Redis.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, ManagedRedisTailComponent_For_9_Template, 5, 2, "div", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Indian data centres \xB7 INR billing with GST \xB7 24\xD77 monitoring & support \xB7 Recovery requirements agreed during onboarding.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 8)(13, "h2", 9);
      \u0275\u0275text(14, "Why XcellHost for Managed Redis?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275repeaterCreate(16, ManagedRedisTailComponent_For_17_Template, 8, 3, "article", 11, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "section", 12)(19, "h2", 13);
      \u0275\u0275text(20, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275repeaterCreate(22, ManagedRedisTailComponent_For_23_Template, 13, 5, "article", 15, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "section", 16)(25, "h2", 17);
      \u0275\u0275text(26, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18);
      \u0275\u0275element(28, "xh-product-faq", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(29, "xh-insights-section", 20);
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 1)(32, "section", 22)(33, "div", 23)(34, "h2", 24);
      \u0275\u0275text(35, "Ready to start with Managed Redis?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "FREE Consultation \xB7 Migration planning \xB7 INR billing with GST \xB7 24\xD77 support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 25)(39, "button", 26);
      \u0275\u0275listener("click", function ManagedRedisTailComponent_Template_button_click_39_listener() {
        return ctx.openCallback();
      });
      \u0275\u0275text(40, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 27);
      \u0275\u0275listener("click", function ManagedRedisTailComponent_Template_button_click_41_listener() {
        return ctx.openCallback("deployment quote");
      });
      \u0275\u0275text(42, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 27);
      \u0275\u0275listener("click", function ManagedRedisTailComponent_Template_button_click_43_listener() {
        return ctx.requestDoc("infosheet");
      });
      \u0275\u0275text(44, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 27);
      \u0275\u0275listener("click", function ManagedRedisTailComponent_Template_button_click_45_listener() {
        return ctx.requestDoc("presentation");
      });
      \u0275\u0275text(46, "\u25A3 Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 28);
      \u0275\u0275text(48, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 29);
      \u0275\u0275text(50, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "a", 30);
      \u0275\u0275element(52, "img", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 32)(54, "span");
      \u0275\u0275text(55, "Indian data centres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "24\xD77 Redis support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "TLS + Redis ACLs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "Hourly backups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "INR billing \xB7 GST invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "p", 33);
      \u0275\u0275text(65, "The hero cluster diagram and console output are illustrative. Redis is a trademark of Redis Ltd. XcellHost is not affiliated with Redis Ltd. Videos: Redis. Photography: Unsplash.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.securityRows);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.why);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.reviews);
      \u0275\u0275advance(6);
      \u0275\u0275property("faqs", ctx.faqs);
      \u0275\u0275advance();
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(4, _c0))("videos", ctx.videos)("articles", ctx.articles);
    }
  }, dependencies: [RouterLink, RevealDirective, ProductFaqComponent, InsightsSectionComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  color: var(--ink);\n  font-family: var(--body);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0;\n}\nsection[id][_ngcontent-%COMP%], \nh2[id][_ngcontent-%COMP%] {\n  scroll-margin-top: 120px;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.redis-tail-body[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  margin: 44px 0 18px;\n  color: var(--blue);\n  font: 700 15px/1.4 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.pp-ov[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--slate);\n  font-size: 15px;\n  line-height: 1.75;\n}\n.pp-secrows[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.psrow[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.psk[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n}\n.psv[_ngcontent-%COMP%] {\n  max-width: 65%;\n}\n.pp-secfoot[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.7;\n}\n.pp-why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  padding: 12px 16px;\n  overflow: hidden;\n  border-radius: 22px;\n  background:\n    radial-gradient(\n      circle at 92% 10%,\n      rgba(45, 119, 230, .34),\n      transparent 45%),\n    linear-gradient(\n      135deg,\n      #061c3b,\n      #092c5d 58%,\n      #0b3d7b);\n  box-shadow: 0 18px 42px rgba(4, 30, 66, .18);\n  counter-reset: benefit;\n}\n.pw[_ngcontent-%COMP%] {\n  --accent: #67a5ff;\n  position: relative;\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 5px 16px;\n  padding: 25px 24px;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  counter-increment: benefit;\n  transition: background .2s;\n}\n.pw[_ngcontent-%COMP%]:nth-child(3n+2) {\n  --accent: #aa91ff;\n}\n.pw[_ngcontent-%COMP%]:nth-child(3n) {\n  --accent: #54d9c0;\n}\n.pw[_ngcontent-%COMP%]:not(:nth-child(3n)) {\n  border-right: 1px solid rgba(188, 213, 249, .15);\n}\n.pw[_ngcontent-%COMP%]:nth-child(-n+3) {\n  border-bottom: 1px solid rgba(188, 213, 249, .15);\n}\n.pw[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .04);\n}\n.pw[_ngcontent-%COMP%]::after {\n  content: "0" counter(benefit);\n  position: absolute;\n  right: 14px;\n  bottom: 9px;\n  font: 700 22px var(--mono);\n  color: rgba(200, 224, 255, .09);\n}\n.pw-ic[_ngcontent-%COMP%] {\n  grid-row: span 2;\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent);\n  color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 14%, transparent);\n}\n.pw-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.6;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.pw[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font: 700 14px/1.5 var(--disp);\n}\n.pw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c1d3ed;\n  font-size: 12.5px;\n  line-height: 1.65;\n}\n.tname[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.tcard[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.pp-faq[_ngcontent-%COMP%] {\n  align-items: start;\n}\n.redis-tail-footer[_ngcontent-%COMP%] {\n  padding: 0 0 30px;\n}\n.pp-cta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  align-items: center;\n  gap: 22px 32px;\n  min-height: 190px;\n  margin-top: 0;\n  padding: 28px 32px;\n  border-radius: 18px;\n}\n.redis-cta-copy[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  min-width: 0;\n}\n.pp-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: white;\n  font: 700 clamp(20px, 2.1vw, 26px)/1.3 var(--disp);\n}\n.pp-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #e2edff;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.redis-cta-actions[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  min-width: 0;\n}\n.redis-cta-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 42px;\n}\n.pp-cta-buddha-link[_ngcontent-%COMP%] {\n  position: static;\n  grid-column: 2;\n  grid-row: 1 / span 2;\n  justify-self: end;\n  width: 104px;\n  height: 104px;\n  margin: 0;\n  transform: none;\n}\n.pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: 1px solid transparent;\n  border-radius: 7px;\n  padding: 10px 14px;\n  font: 600 13px var(--body);\n  text-decoration: none;\n  cursor: pointer;\n  transition: background .2s, border-color .2s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .4);\n  color: white;\n  background: rgba(255, 255, 255, .06);\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .16);\n  border-color: white;\n}\na[_ngcontent-%COMP%]:focus-visible, \nbutton[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #77b6ff;\n  outline-offset: 4px;\n}\n.pp-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 7px 13px;\n}\n.photo-credit[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n  color: var(--slate);\n  font-size: 10px;\n  line-height: 1.6;\n}\n@media (max-width: 1000px) {\n  .pp-why[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pw[_ngcontent-%COMP%]:not(:nth-child(3n)) {\n    border-right: 0;\n  }\n  .pw[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 1px solid rgba(188, 213, 249, .15);\n  }\n  .pw[_ngcontent-%COMP%]:nth-child(-n+4) {\n    border-bottom: 1px solid rgba(188, 213, 249, .15);\n  }\n  .pw[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n  }\n}\n@media (max-width: 760px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .pp-sec[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-top: 34px;\n  }\n  .pp-secrows[_ngcontent-%COMP%], \n   .pp-why[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pw[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 0;\n  }\n  .pw[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 1px solid rgba(188, 213, 249, .15);\n  }\n  .psrow[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .psk[_ngcontent-%COMP%], \n   .psv[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .pp-cta[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 22px;\n    min-height: 0;\n    padding: 26px 22px;\n  }\n  .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 3;\n    justify-self: center;\n    width: 90px;\n    height: 90px;\n  }\n  .pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n  }\n  .redis-cta-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .redis-cta-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 11px 8px;\n    white-space: normal;\n    font-size: 12px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pw[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=managed-redis-tail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagedRedisTailComponent, [{
    type: Component,
    args: [{ selector: "xh-managed-redis-tail", standalone: true, imports: [RouterLink, RevealDirective, ProductFaqComponent, InsightsSectionComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="redis-tail-body">\r
  <div class="wrap">\r
    <section aria-labelledby="redisSecurityTitle">\r
      <h2 class="pp-sec" id="redisSecurityTitle">Security &amp; compliance \u2014 Managed Redis</h2>\r
      <p class="pp-ov">Keep your cache, sessions and queues protected with encrypted connections, controlled access and private networking. XcellHost manages patching, monitoring and backups; your team controls application access and the data stored in Redis.</p>\r
      <div class="pp-secrows">\r
        @for (row of securityRows; track row[0]) {\r
          <div class="psrow"><span class="psk">{{ row[0] }}</span><span class="psv">{{ row[1] }}</span></div>\r
        }\r
      </div>\r
      <p class="pp-secfoot">Indian data centres \xB7 INR billing with GST \xB7 24\xD77 monitoring &amp; support \xB7 Recovery requirements agreed during onboarding.</p>\r
    </section>\r
\r
    <section aria-labelledby="redisWhyTitle">\r
      <h2 class="pp-sec" id="redisWhyTitle">Why XcellHost for Managed Redis?</h2>\r
      <div class="pp-why" xhReveal>\r
        @for (item of why; track item.title) {\r
          <article class="pw">\r
            <span class="pw-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path [attr.d]="item.icon" /></svg></span>\r
            <h3>{{ item.title }}</h3><p>{{ item.body }}</p>\r
          </article>\r
        }\r
      </div>\r
    </section>\r
\r
    <section aria-labelledby="redisReviewsTitle">\r
      <h2 class="pp-sec" id="redisReviewsTitle">What customers say</h2>\r
      <div class="pp-tcards">\r
        @for (review of reviews; track review.name) {\r
          <article class="tcard" xhReveal>\r
            <div class="quote-badge" aria-hidden="true">\u201D</div>\r
            <div class="tav" aria-hidden="true">{{ review.initials }}</div>\r
            <h3 class="tname">{{ review.name }}</h3><div class="trole">{{ review.role }}</div>\r
            <div class="tstars" [attr.aria-label]="review.stars + ' out of 5 stars'">\u2605\u2605\u2605\u2605\u2605</div>\r
            <p>{{ review.quote }}</p>\r
          </article>\r
        }\r
      </div>\r
    </section>\r
\r
    <section aria-labelledby="faq">\r
      <h2 class="pp-sec" id="faq">Frequently asked questions</h2>\r
      <div class="pp-faq"><xh-product-faq [faqs]="faqs" idPrefix="redisFaqAnswer" /></div>\r
    </section>\r
  </div>\r
</div>\r
\r
<xh-insights-section pageSlug="managed-redis" [pageAliases]="['redis']" [videos]="videos" [articles]="articles" videoDescription="Explore Redis Insight demos for browsing data, debugging commands and understanding Redis workloads." videoLibraryUrl="https://redis.io/resources/videos/" />\r
\r
<div class="redis-tail-footer">\r
  <div class="wrap">\r
    <section class="pp-cta" id="lead" aria-labelledby="redisCtaTitle" xhReveal>\r
      <div class="redis-cta-copy"><h2 id="redisCtaTitle">Ready to start with Managed Redis?</h2><p>FREE Consultation \xB7 Migration planning \xB7 INR billing with GST \xB7 24\xD77 support</p></div>\r
      <div class="redis-cta-actions">\r
        <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>\r
        <button class="btn btn-ghost" type="button" (click)="openCallback('deployment quote')">\u26A1 Buy Now</button>\r
        <button class="btn btn-ghost" type="button" (click)="requestDoc('infosheet')">\u2B07 Infosheet</button>\r
        <button class="btn btn-ghost" type="button" (click)="requestDoc('presentation')">\u25A3 Presentation</button>\r
        <a class="btn btn-ghost" href="https://wa.me/918657032540?text=I%20would%20like%20to%20discuss%20Managed%20Redis" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>\r
        <a class="btn btn-ghost" href="mailto:sales&#64;xcellhost.cloud?subject=Managed%20Redis%20enquiry">Email Us</a>\r
      </div>\r
      <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support"><img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost customer support" width="104" height="104" loading="lazy" /></a>\r
    </section>\r
    <div class="pp-proof"><span>Indian data centres</span><span>24\xD77 Redis support</span><span>TLS + Redis ACLs</span><span>Hourly backups</span><span>INR billing \xB7 GST invoices</span></div>\r
    <p class="photo-credit">The hero cluster diagram and console output are illustrative. Redis is a trademark of Redis Ltd. XcellHost is not affiliated with Redis Ltd. Videos: Redis. Photography: Unsplash.</p>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/sections/managed-redis-tail.component.css */\n:host {\n  display: block;\n  color: var(--ink);\n  font-family: var(--body);\n}\n* {\n  box-sizing: border-box;\n}\nsection {\n  padding: 0;\n}\nsection[id],\nh2[id] {\n  scroll-margin-top: 120px;\n}\n.wrap {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.redis-tail-body {\n  padding-bottom: 12px;\n}\n.pp-sec {\n  margin: 44px 0 18px;\n  color: var(--blue);\n  font: 700 15px/1.4 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.pp-ov {\n  margin: 0;\n  color: var(--slate);\n  font-size: 15px;\n  line-height: 1.75;\n}\n.pp-secrows {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.psrow {\n  min-width: 0;\n}\n.psk {\n  flex-shrink: 1;\n}\n.psv {\n  max-width: 65%;\n}\n.pp-secfoot {\n  font-size: 12px;\n  line-height: 1.7;\n}\n.pp-why {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  padding: 12px 16px;\n  overflow: hidden;\n  border-radius: 22px;\n  background:\n    radial-gradient(\n      circle at 92% 10%,\n      rgba(45, 119, 230, .34),\n      transparent 45%),\n    linear-gradient(\n      135deg,\n      #061c3b,\n      #092c5d 58%,\n      #0b3d7b);\n  box-shadow: 0 18px 42px rgba(4, 30, 66, .18);\n  counter-reset: benefit;\n}\n.pw {\n  --accent: #67a5ff;\n  position: relative;\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 5px 16px;\n  padding: 25px 24px;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  counter-increment: benefit;\n  transition: background .2s;\n}\n.pw:nth-child(3n+2) {\n  --accent: #aa91ff;\n}\n.pw:nth-child(3n) {\n  --accent: #54d9c0;\n}\n.pw:not(:nth-child(3n)) {\n  border-right: 1px solid rgba(188, 213, 249, .15);\n}\n.pw:nth-child(-n+3) {\n  border-bottom: 1px solid rgba(188, 213, 249, .15);\n}\n.pw:hover {\n  background: rgba(255, 255, 255, .04);\n}\n.pw::after {\n  content: "0" counter(benefit);\n  position: absolute;\n  right: 14px;\n  bottom: 9px;\n  font: 700 22px var(--mono);\n  color: rgba(200, 224, 255, .09);\n}\n.pw-ic {\n  grid-row: span 2;\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent);\n  color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 14%, transparent);\n}\n.pw-ic svg {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.6;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.pw h3 {\n  margin: 0;\n  color: white;\n  font: 700 14px/1.5 var(--disp);\n}\n.pw p {\n  margin: 0;\n  color: #c1d3ed;\n  font-size: 12.5px;\n  line-height: 1.65;\n}\n.tname {\n  margin: 0 0 4px;\n}\n.tcard {\n  min-width: 0;\n}\n.tcard:hover {\n  transform: none;\n}\n.pp-faq {\n  align-items: start;\n}\n.redis-tail-footer {\n  padding: 0 0 30px;\n}\n.pp-cta {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  align-items: center;\n  gap: 22px 32px;\n  min-height: 190px;\n  margin-top: 0;\n  padding: 28px 32px;\n  border-radius: 18px;\n}\n.redis-cta-copy {\n  grid-column: 1;\n  grid-row: 1;\n  min-width: 0;\n}\n.pp-cta h2 {\n  margin: 0 0 9px;\n  color: white;\n  font: 700 clamp(20px, 2.1vw, 26px)/1.3 var(--disp);\n}\n.pp-cta p {\n  margin: 0;\n  color: #e2edff;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.redis-cta-actions {\n  grid-column: 1;\n  grid-row: 2;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  min-width: 0;\n}\n.redis-cta-actions .btn {\n  min-height: 42px;\n}\n.pp-cta-buddha-link {\n  position: static;\n  grid-column: 2;\n  grid-row: 1 / span 2;\n  justify-self: end;\n  width: 104px;\n  height: 104px;\n  margin: 0;\n  transform: none;\n}\n.pp-cta-buddha-link:hover {\n  transform: scale(1.06);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: 1px solid transparent;\n  border-radius: 7px;\n  padding: 10px 14px;\n  font: 600 13px var(--body);\n  text-decoration: none;\n  cursor: pointer;\n  transition: background .2s, border-color .2s;\n}\n.btn-primary {\n  background: var(--orange);\n  color: white;\n}\n.btn-primary:hover {\n  background: #e97a08;\n}\n.pp-cta .btn-ghost {\n  border-color: rgba(255, 255, 255, .4);\n  color: white;\n  background: rgba(255, 255, 255, .06);\n}\n.pp-cta .btn-ghost:hover {\n  background: rgba(255, 255, 255, .16);\n  border-color: white;\n}\na:focus-visible,\nbutton:focus-visible {\n  outline: 3px solid #77b6ff;\n  outline-offset: 4px;\n}\n.pp-proof span {\n  font-size: 11px;\n  padding: 7px 13px;\n}\n.photo-credit {\n  margin: 20px 0 0;\n  color: var(--slate);\n  font-size: 10px;\n  line-height: 1.6;\n}\n@media (max-width: 1000px) {\n  .pp-why {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pw:not(:nth-child(3n)) {\n    border-right: 0;\n  }\n  .pw:nth-child(odd) {\n    border-right: 1px solid rgba(188, 213, 249, .15);\n  }\n  .pw:nth-child(-n+4) {\n    border-bottom: 1px solid rgba(188, 213, 249, .15);\n  }\n  .pw {\n    padding: 22px 18px;\n  }\n}\n@media (max-width: 760px) {\n  .wrap {\n    padding: 0 20px;\n  }\n  .pp-sec {\n    font-size: 13px;\n    margin-top: 34px;\n  }\n  .pp-secrows,\n  .pp-why {\n    grid-template-columns: 1fr;\n  }\n  .pw:nth-child(odd) {\n    border-right: 0;\n  }\n  .pw:not(:last-child) {\n    border-bottom: 1px solid rgba(188, 213, 249, .15);\n  }\n  .psrow {\n    align-items: flex-start;\n  }\n  .psk,\n  .psv {\n    font-size: 12px;\n  }\n  .pp-cta {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 22px;\n    min-height: 0;\n    padding: 26px 22px;\n  }\n  .pp-cta-buddha-link {\n    grid-column: 1;\n    grid-row: 3;\n    justify-self: center;\n    width: 90px;\n    height: 90px;\n  }\n  .pp-cta-buddha-link:hover {\n    transform: scale(1.05);\n  }\n  .redis-cta-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .redis-cta-actions .btn {\n    padding: 11px 8px;\n    white-space: normal;\n    font-size: 12px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pw,\n  .btn,\n  .pp-cta-buddha-link {\n    transition: none;\n  }\n  .pp-cta-buddha-link:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=managed-redis-tail.component.css.map */\n'] }]
  }], null, { configuration: [{ type: Input, args: [{ isSignal: true, alias: "configuration", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagedRedisTailComponent, { className: "ManagedRedisTailComponent", filePath: "src/app/sections/managed-redis-tail.component.ts", lineNumber: 21 });
})();

// src/app/pages/managed-redis.page.ts
var _forTrack02 = ($index, $item) => $item.code;
function ManagedRedisPage_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "animateMotion", 33);
    \u0275\u0275element(1, "mpath", 180);
    \u0275\u0275elementEnd();
  }
}
function ManagedRedisPage_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "animateMotion", 34);
    \u0275\u0275element(1, "mpath", 181);
    \u0275\u0275elementEnd();
  }
}
function ManagedRedisPage_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "animateMotion", 35);
    \u0275\u0275element(1, "mpath", 182);
    \u0275\u0275elementEnd();
  }
}
function ManagedRedisPage_For_91_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 183);
  }
}
function ManagedRedisPage_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ManagedRedisPage_For_91_Conditional_2_Template, 1, 0, "span", 183);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const \u0275$index_161_r2 = ctx.$index;
    const \u0275$count_161_r3 = ctx.$count;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(row_r1[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1[1]);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_161_r2 === \u0275$count_161_r3 - 1 && !ctx_r3.reducedMotion() ? 2 : -1);
  }
}
function ManagedRedisPage_For_554_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 184);
    \u0275\u0275listener("click", function ManagedRedisPage_For_554_Template_tr_click_0_listener() {
      const plan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.planCode.set(plan_r6.code));
    });
    \u0275\u0275elementStart(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 185);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 186);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "button", 187);
    \u0275\u0275text(18, "Select");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sel", ctx_r3.planCode() === plan_r6.code);
    \u0275\u0275attribute("data-code", plan_r6.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", plan_r6.cpu, " vCPU \xB7 ", plan_r6.memory, " GB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r6.cpu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r6.memory, " GB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.tablePrice(plan_r6.hourly));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.billing() === "h" ? "/hr" : "/mo");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Select " + plan_r6.name + " plan")("aria-pressed", ctx_r3.planCode() === plan_r6.code);
  }
}
var PLANS = [
  { code: "rds.s", name: "Small", cpu: 2, memory: 8, hourly: 4.73, description: "Dev, test & small caches" },
  { code: "rds.m", name: "Medium", cpu: 4, memory: 16, hourly: 9.45, description: "Session stores & app caches" },
  { code: "rds.l", name: "Large", cpu: 8, memory: 32, hourly: 18.9, description: "Busy production caches" },
  { code: "rds.xl", name: "X-Large", cpu: 16, memory: 64, hourly: 37.8, description: "High-traffic queues & leaderboards" },
  { code: "rds.2xl", name: "2X-Large", cpu: 32, memory: 256, hourly: 119.73, description: "Large in-memory datasets" }
];
var ManagedRedisPage = class _ManagedRedisPage {
  plans = PLANS;
  reducedMotion = signal(true, ...ngDevMode ? [{ debugName: "reducedMotion" }] : []);
  terminalRows = signal([], ...ngDevMode ? [{ debugName: "terminalRows" }] : []);
  ha = signal(true, ...ngDevMode ? [{ debugName: "ha" }] : []);
  billing = signal("m", ...ngDevMode ? [{ debugName: "billing" }] : []);
  planCode = signal("rds.m", ...ngDevMode ? [{ debugName: "planCode" }] : []);
  version = signal("Redis 7.4", ...ngDevMode ? [{ debugName: "version" }] : []);
  storage = signal(100, ...ngDevMode ? [{ debugName: "storage" }] : []);
  replicas = signal(0, ...ngDevMode ? [{ debugName: "replicas" }] : []);
  architecture = signal("ha", ...ngDevMode ? [{ debugName: "architecture" }] : []);
  profile = signal("", ...ngDevMode ? [{ debugName: "profile" }] : []);
  audience = signal("cxo", ...ngDevMode ? [{ debugName: "audience" }] : []);
  selectedPlan = computed(() => PLANS.find((plan) => plan.code === this.planCode()), ...ngDevMode ? [{ debugName: "selectedPlan" }] : []);
  nodes = computed(() => (this.ha() ? 2 : 1) + this.replicas(), ...ngDevMode ? [{ debugName: "nodes" }] : []);
  computeCost = computed(() => this.selectedPlan().hourly * 730 * this.nodes(), ...ngDevMode ? [{ debugName: "computeCost" }] : []);
  storageCost = computed(() => this.storage() * 6.2 * this.nodes(), ...ngDevMode ? [{ debugName: "storageCost" }] : []);
  total = computed(() => this.computeCost() + this.storageCost(), ...ngDevMode ? [{ debugName: "total" }] : []);
  configuration = computed(() => {
    const plan = this.selectedPlan();
    return `${plan.name} (${plan.cpu} vCPU/${plan.memory} GB) \xB7 ${this.version()} \xB7 ${this.ha() ? "HA" : "Standalone"} \xB7 ${this.replicas()} replicas \xB7 ${this.storage()} GB \xB7 est. ${this.money(this.total())}/mo`;
  }, ...ngDevMode ? [{ debugName: "configuration" }] : []);
  host = inject(ElementRef).nativeElement;
  destroyRef = inject(DestroyRef);
  constructor() {
    inject(SeoService).set("Managed Redis India \u2014 Sentinel HA, Cluster & Backups | XcellHost", "Managed Redis in Indian data centres from \u20B94.73/hour. Sentinel high availability, Redis Cluster, hourly backups, TLS and 24\xD77 support with INR billing.", "/managed-redis");
    afterNextRender(() => this.animateTerminal());
  }
  money(value) {
    return `\u20B9${Math.round(value).toLocaleString("en-IN")}`;
  }
  hourly(value) {
    return `\u20B9${value.toFixed(2)}`;
  }
  tablePrice(value) {
    const rate = value * (this.ha() ? 2 : 1);
    return this.billing() === "h" ? this.hourly(rate) : this.money(rate * 730);
  }
  selectPlan(event) {
    this.planCode.set(event.target.value);
  }
  setMode(ha) {
    this.ha.set(ha);
    this.architecture.set(ha ? "ha" : "solo");
    this.profile.set("");
  }
  chooseArchitecture(key) {
    this.architecture.set(key);
    this.profile.set("");
    if (key === "rs") {
      this.scrollTo("lead");
      return;
    }
    this.ha.set(key === "ha");
    this.replicas.set(0);
  }
  chooseProfile(profile) {
    this.profile.set(profile);
    this.ha.set(profile !== "dev");
    this.planCode.set(profile === "dev" ? "rds.s" : profile === "sess" ? "rds.l" : "rds.m");
    this.replicas.set(profile === "sess" ? 1 : 0);
    this.architecture.set(profile === "dev" ? "solo" : "ha");
    this.host.querySelector(".calc")?.scrollIntoView({ behavior: this.reducedMotion() ? "instant" : "smooth", block: "center" });
  }
  onTabKey(event, current) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
      return;
    event.preventDefault();
    const tabs = ["cxo", "it", "fin", "risk"];
    const index = tabs.indexOf(current);
    const next = event.key === "Home" ? 0 : event.key === "End" ? 3 : (index + (event.key === "ArrowRight" ? 1 : -1) + 4) % 4;
    this.audience.set(tabs[next]);
    this.host.querySelector(`#at-${tabs[next]}`)?.focus();
  }
  scrollTo(id, event) {
    event?.preventDefault();
    this.host.querySelector(`#${id}`)?.scrollIntoView({ behavior: this.reducedMotion() ? "instant" : "smooth", block: "start" });
  }
  animateTerminal() {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const commands = [
      ["p", "127.0.0.1:6379> PING"],
      ["o", "PONG"],
      ["p", `127.0.0.1:6379> SET session:42 "{user:'asha'}" EX 1800`],
      ["o", "OK"],
      ["p", "127.0.0.1:6379> INCR page:views:home"],
      ["o", "(integer) 18291"],
      ["p", "127.0.0.1:6379> INFO replication"],
      ["o", "role:master \xB7 connected_slaves:1"]
    ];
    let command = 3;
    let timer;
    let visible = true;
    const stop = () => {
      if (timer)
        clearInterval(timer);
      timer = void 0;
    };
    const update = () => {
      stop();
      this.reducedMotion.set(motion.matches);
      if (motion.matches)
        this.terminalRows.set(commands.slice(0, 6));
      else if (visible && !document.hidden)
        timer = setInterval(() => {
          if (command >= commands.length) {
            command = 0;
            this.terminalRows.set([]);
          }
          const row = commands[command++];
          this.terminalRows.update((rows) => [...rows, row].slice(-6));
        }, 1500);
    };
    this.terminalRows.set(commands.slice(0, 3));
    update();
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      update();
    });
    observer.observe(this.host.querySelector(".clu"));
    this.destroyRef.onDestroy(() => {
      stop();
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    });
  }
  static \u0275fac = function ManagedRedisPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagedRedisPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagedRedisPage, selectors: [["xh-managed-redis-page"]], decls: 993, vars: 44, consts: [["aria-label", "Managed Redis"], [1, "pg-hero"], ["role", "img", "aria-label", "Code on a screen", 1, "bg", 2, "background-image", "url('/assets/images/managed-redis/hero-code.jpg')"], [1, "wrap"], [1, "crumb"], ["routerLink", "/"], [1, "sub"], [1, "pg-price"], [1, "hero-ctas"], ["href", "#pricing", 1, "btn", "btn-primary", 3, "click"], ["href", "#lead", 1, "btn", "btn-ghost", 3, "click"], [1, "pg-chips"], [1, "pwd"], ["title", "Redis"], ["src", "/assets/images/managed-redis/redis-logo.svg", "alt", "Redis logo", "width", "22", "height", "22", 1, "pwd-lg"], ["aria-label", "Illustrative HA cluster", 1, "clu"], [1, "clu-h"], ["viewBox", "0 0 440 190", "role", "img", "aria-label", "Redis primary replicates asynchronously to a replica, monitored by three Sentinels and connected to an application"], ["id", "l1", "d", "M150 60 H290", 1, "ln"], ["id", "l2", "d", "M95 85 V130 H150", 1, "ln"], ["id", "l3", "d", "M95 85 V130 H150 M200 130 H290", 1, "ln"], ["transform", "translate(40,35)", 1, "nd", "pri"], ["width", "110", "height", "50", "rx", "10"], ["x", "12", "y", "22"], ["x", "12", "y", "38", 1, "t2"], ["transform", "translate(290,35)", 1, "nd"], ["transform", "translate(150,110)", 1, "nd"], ["width", "100", "height", "44", "rx", "10"], ["x", "12", "y", "20"], ["x", "12", "y", "35", 1, "t2"], ["transform", "translate(290,110)", 1, "nd"], ["width", "110", "height", "44", "rx", "10"], ["r", "4", 1, "dot"], ["dur", "1.6s", "repeatCount", "indefinite"], ["dur", "2.2s", "repeatCount", "indefinite"], ["dur", "2.8s", "repeatCount", "indefinite"], ["x", "175", "y", "52", "fill", "#9FB8D8", "font-size", "10", "font-family", "ui-monospace,monospace"], ["x", "40", "y", "180", "fill", "#9FB8D8", "font-size", "10", "font-family", "ui-monospace,monospace", "id", "lag"], ["id", "term", "aria-hidden", "true", 1, "term"], [3, "class"], [1, "pp-body"], [1, "stat4"], ["xhReveal", "", 1, "rv"], ["xhReveal", "", "id", "answer", 1, "pp-answer", "rv", 2, "margin-top", "40px"], [1, "kick"], ["data-speakable", ""], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "xg-ico"], ["d", "m5 12 5 5 9-10"], [1, "bestfor"], [1, "h2s"], [1, "c10"], [1, "ic"], ["d", "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 11a13 13 0 0 1 11-8 13 13 0 0 1-8 11l-3-3z"], ["cx", "15", "cy", "9", "r", "1.5"], ["d", "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"], ["d", "m9 12 2 2 4-4"], ["d", "m12 3 9 5-9 5-9-5z"], ["d", "m3 13 9 5 9-5"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7v5l3 2"], ["x", "4", "y", "11", "width", "16", "height", "10", "rx", "2"], ["d", "M8 11V7a4 4 0 0 1 8 0v4"], ["d", "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M13 2 4 14h7l-1 8 9-12h-7z"], ["d", "M12 3v18M5 21h14M4 7h16M7 7l-3 7a3 3 0 0 0 6 0zM17 7l-3 7a3 3 0 0 0 6 0z"], ["d", "M4 18a9 9 0 1 1 16 0"], ["d", "m12 13 4-5"], ["d", "m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"], [2, "text-align", "center", "color", "var(--slate)", "max-width", "760px", "margin", "-8px auto 22px"], ["id", "arch", 1, "arch"], ["xhReveal", "", "role", "button", "data-k", "solo", "tabindex", "0", 1, "rv", 3, "click", "keydown.enter", "keydown.space"], [1, "tag"], [1, "dia"], [1, "p"], [1, "best"], ["xhReveal", "", "role", "button", "data-k", "ha", "tabindex", "0", 1, "rv", 3, "click", "keydown.enter", "keydown.space"], [1, "r"], ["xhReveal", "", "role", "button", "aria-pressed", "", "data-k", "rs", "tabindex", "0", 1, "rv"], [1, "mdl"], [1, "no"], [1, "tg"], [1, "bf"], [1, "pl"], [1, "bdg"], ["xhReveal", "", 1, "own", "rv"], [1, "us"], [1, "shared"], [1, "you"], ["id", "pricing"], [2, "text-align", "center", "color", "var(--slate)", "max-width", "720px", "margin", "-8px auto 16px"], ["id", "prof", 1, "prof"], ["type", "button", "data-k", "cache", 3, "click"], ["type", "button", "data-k", "sess", 3, "click"], ["type", "button", "data-k", "dev", 3, "click"], [1, "pz", 2, "margin-top", "20px"], [1, "pz-bar"], ["id", "sMode", 1, "seg"], ["type", "button", "data-v", "0", 3, "click"], ["type", "button", "data-v", "1", 3, "click"], ["id", "sBill", 1, "seg"], ["type", "button", "data-v", "h", 3, "click"], ["type", "button", "data-v", "m", 3, "click"], [1, "pt"], ["id", "ptb"], [3, "sel"], ["data-code", "ent"], [1, "pr", 2, "font-size", "15px"], ["href", "#lead", 1, "go", 3, "click"], [1, "pnote"], ["aria-label", "Price estimate", 1, "calc"], ["for", "cPlan"], ["id", "cPlan", 3, "change", "value"], ["value", "rds.s"], ["value", "rds.m"], ["value", "rds.l"], ["value", "rds.xl"], ["value", "rds.2xl"], ["for", "cVer"], ["id", "cVer", 3, "change", "value"], ["for", "cSto"], ["type", "range", "id", "cSto", "min", "20", "max", "2000", "step", "10", 3, "input", "value"], [1, "rv2"], ["id", "cStoV"], ["for", "cRep"], ["type", "range", "id", "cRep", "min", "0", "max", "4", "step", "1", 3, "input", "value"], ["id", "cRepV"], [2, "margin-top", "14px"], [1, "ln2"], ["id", "eN"], ["id", "eC"], ["id", "eS"], [1, "tot"], ["id", "eT"], ["id", "eH", 2, "color", "#9FB8D8"], ["href", "#lead", "id", "eGo", 1, "btn", "btn-primary", 3, "click"], [1, "u6"], ["x", "3", "y", "4", "width", "18", "height", "16", "rx", "2"], ["d", "M3 12h18M12 4v16"], ["d", "M3 12h4l3-8 4 16 3-8h4"], ["d", "M4 20V10M10 20V4M16 20v-7M22 20H2"], ["cx", "9", "cy", "20", "r", "1.5"], ["cx", "17", "cy", "20", "r", "1.5"], ["d", "M3 4h2l2.4 11h11l2-8H6"], ["d", "M6 4h12M6 9h12M9 4c6 0 6 10 0 10H6l9 7"], ["cx", "9", "cy", "8", "r", "3.5"], ["d", "M2 20c0-4 3-6 7-6s7 2 7 6"], ["d", "M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.6 4 2.6 4 6"], [1, "two"], ["d", "M5 12h14M13 6l6 6-6 6"], ["x", "2", "y", "4", "width", "20", "height", "13", "rx", "2"], ["d", "M8 21h8M12 17v4"], [2, "text-align", "center", "color", "var(--slate)", "margin-top", "14px", "font-size", "14px"], ["xhReveal", "", 1, "gband", "rv", 2, "background-image", "url('/assets/images/managed-redis/sentinel-background.jpg')"], [1, "gstats"], ["role", "tablist", 1, "aud-t"], ["type", "button", "role", "tab", "id", "at-cxo", "aria-controls", "ap-cxo", 3, "click", "keydown"], ["type", "button", "role", "tab", "id", "at-it", "aria-controls", "ap-it", 3, "click", "keydown"], ["type", "button", "role", "tab", "id", "at-fin", "aria-controls", "ap-fin", 3, "click", "keydown"], ["type", "button", "role", "tab", "id", "at-risk", "aria-controls", "ap-risk", 3, "click", "keydown"], ["role", "tabpanel", "id", "ap-cxo", "aria-labelledby", "at-cxo", 1, "aud-p", 3, "hidden"], [1, "who"], ["role", "tabpanel", "id", "ap-it", "aria-labelledby", "at-it", 1, "aud-p", 3, "hidden"], ["role", "tabpanel", "id", "ap-fin", "aria-labelledby", "at-fin", 1, "aud-p", 3, "hidden"], ["role", "tabpanel", "id", "ap-risk", "aria-labelledby", "at-risk", 1, "aud-p", 3, "hidden"], [1, "bt"], ["xhReveal", "", "routerLink", "/performance-cloud", 1, "rv"], ["x", "3", "y", "4", "width", "18", "height", "7", "rx", "2"], ["x", "3", "y", "13", "width", "18", "height", "7", "rx", "2"], ["d", "M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"], ["xhReveal", "", "routerLink", "/performance-cloud", "fragment", "pricing", 1, "rv"], ["xhReveal", "", "routerLink", "/cloud-backup", 1, "rv"], ["d", "M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z"], ["xhReveal", "", "routerLink", "/cloud-disaster-recovery", 1, "rv"], ["xhReveal", "", "routerLink", "/virtual-firewalls", 1, "rv"], ["d", "M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6"], ["xhReveal", "", "routerLink", "/managed-postgresql", 1, "rv"], ["d", "m12 2 9 5v10l-9 5-9-5V7z"], ["d", "m3 7 9 5 9-5M12 12v10"], [3, "configuration"], ["href", "#l1"], ["href", "#l2"], ["href", "#l3"], [1, "c"], [3, "click"], [1, "sp"], [1, "pr"], ["type", "button", 1, "go"]], template: function ManagedRedisPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "div", 4)(6, "a", 5);
      \u0275\u0275text(7, "HOME");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " \u203A CLOUD \u203A DATABASES \u203A REDIS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1");
      \u0275\u0275text(10, "Managed Redis \u2014 ");
      \u0275\u0275elementStart(11, "em");
      \u0275\u0275text(12, "launch in minutes, scale without limits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, "Sub-millisecond caching, sessions, queues and real-time data \u2014 with Sentinel failover, Redis Cluster, automatic backups and monitoring handled by XcellHost engineers. In Indian data centres, billed in INR.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "small");
      \u0275\u0275text(17, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "b");
      \u0275\u0275text(19, "\u20B94.73/hr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "small");
      \u0275\u0275text(21, "\u2248 3,453/month \xB7 INR + GST");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "a", 9);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_a_click_23_listener($event) {
        return ctx.scrollTo("pricing", $event);
      });
      \u0275\u0275text(24, "See plans & pricing \u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 10);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_a_click_25_listener($event) {
        return ctx.scrollTo("lead", $event);
      });
      \u0275\u0275text(26, "Book a Redis consultation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11)(28, "span");
      \u0275\u0275text(29, "Sub-ms latency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Sentinel HA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Redis Cluster");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Hourly backups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "TLS + ACLs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Redis 7.x");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 12)(41, "small");
      \u0275\u0275text(42, "POWERED BY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 13);
      \u0275\u0275element(44, "img", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 15)(46, "div", 16)(47, "span");
      \u0275\u0275text(48, "redis-sentinel \xB7 MUMBAI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "b");
      \u0275\u0275text(50, "\u25CF HEALTHY");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 17);
      \u0275\u0275element(52, "path", 18)(53, "path", 19)(54, "path", 20);
      \u0275\u0275elementStart(55, "g", 21);
      \u0275\u0275element(56, "rect", 22);
      \u0275\u0275elementStart(57, "text", 23);
      \u0275\u0275text(58, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "text", 24);
      \u0275\u0275text(60, "read / write");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "g", 25);
      \u0275\u0275element(62, "rect", 22);
      \u0275\u0275elementStart(63, "text", 23);
      \u0275\u0275text(64, "Replica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "text", 24);
      \u0275\u0275text(66, "async \xB7 in sync");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "g", 26);
      \u0275\u0275element(68, "rect", 27);
      \u0275\u0275elementStart(69, "text", 28);
      \u0275\u0275text(70, "Sentinel \xD73");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "text", 29);
      \u0275\u0275text(72, "quorum \xB7 watch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "g", 30);
      \u0275\u0275element(74, "rect", 31);
      \u0275\u0275elementStart(75, "text", 28);
      \u0275\u0275text(76, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "text", 29);
      \u0275\u0275text(78, "client \xB7 pool");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "circle", 32);
      \u0275\u0275conditionalCreate(80, ManagedRedisPage_Conditional_80_Template, 2, 0, ":svg:animateMotion", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "circle", 32);
      \u0275\u0275conditionalCreate(82, ManagedRedisPage_Conditional_82_Template, 2, 0, ":svg:animateMotion", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "circle", 32);
      \u0275\u0275conditionalCreate(84, ManagedRedisPage_Conditional_84_Template, 2, 0, ":svg:animateMotion", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "text", 36);
      \u0275\u0275text(86, "replication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "text", 37);
      \u0275\u0275text(88, "replication lag: 0.4 ms \xB7 last backup 12 min ago");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(89, "div", 38);
      \u0275\u0275repeaterCreate(90, ManagedRedisPage_For_91_Template, 3, 4, "div", 39, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(92, "div", 40)(93, "div", 3)(94, "div", 41)(95, "div", 42)(96, "b");
      \u0275\u0275text(97, "< 1 ms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "typical read latency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 42)(101, "b");
      \u0275\u0275text(102, "Hourly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "backups + PITR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 42)(106, "b");
      \u0275\u0275text(107, "Auto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, "failover with Sentinel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 42)(111, "b");
      \u0275\u0275text(112, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span");
      \u0275\u0275text(114, "monitoring & support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 43)(116, "div")(117, "span", 44);
      \u0275\u0275text(118, "QUICK ANSWER \xB7 UPDATED OCTOBER 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "h2");
      \u0275\u0275text(120, "What is managed Redis?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p", 45);
      \u0275\u0275text(122, "Managed Redis is a hosted Redis in-memory data store where XcellHost handles provisioning, patching, monitoring, backups and failover. Run it standalone for development, with Sentinel for production high availability, or as a Redis Cluster for scale \u2014 for caching, sessions, queues and real-time analytics, in Indian data centres.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div")(124, "span", 44);
      \u0275\u0275text(125, "INCLUDED IN EVERY PLAN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "ul")(127, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(128, "svg", 46);
      \u0275\u0275element(129, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "Automated provisioning and patching");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(133, "svg", 46);
      \u0275\u0275element(134, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Sentinel failover and replication");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(138, "svg", 46);
      \u0275\u0275element(139, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "Hourly backups + point-in-time recovery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(143, "svg", 46);
      \u0275\u0275element(144, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(145, "span");
      \u0275\u0275text(146, "Real-time CPU, memory and latency monitoring");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(148, "svg", 46);
      \u0275\u0275element(149, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(150, "span");
      \u0275\u0275text(151, "TLS encryption and role-based access");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 48)(153, "span");
      \u0275\u0275text(154, "Versions:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "b");
      \u0275\u0275text(156, "7.4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "b");
      \u0275\u0275text(158, "7.2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "b");
      \u0275\u0275text(160, "6.2");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(161, "h2", 49);
      \u0275\u0275text(162, "Redis built for ");
      \u0275\u0275elementStart(163, "em");
      \u0275\u0275text(164, "production");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 50)(166, "div", 42)(167, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(168, "svg", 46);
      \u0275\u0275element(169, "path", 52)(170, "circle", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(171, "h3");
      \u0275\u0275text(172, "Production-ready in minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p");
      \u0275\u0275text(174, "Provisioning, configuration and patching done for you \u2014 connection details ready to use.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 42)(176, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(177, "svg", 46);
      \u0275\u0275element(178, "path", 54)(179, "path", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(180, "h3");
      \u0275\u0275text(181, "Automatic failover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p");
      \u0275\u0275text(183, "Sentinel watches the primary and promotes the replica if it fails, so apps keep running.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 42)(185, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(186, "svg", 46);
      \u0275\u0275element(187, "path", 56)(188, "path", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(189, "h3");
      \u0275\u0275text(190, "Scale with Redis Cluster");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "p");
      \u0275\u0275text(192, "Shard data across nodes for more memory and throughput when one node is not enough.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 42)(194, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(195, "svg", 46);
      \u0275\u0275element(196, "circle", 58)(197, "path", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(198, "h3");
      \u0275\u0275text(199, "Backups & recovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "Hourly RDB snapshots with AOF persistence options and point-in-time recovery.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 42)(203, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(204, "svg", 46);
      \u0275\u0275element(205, "rect", 60)(206, "path", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(207, "h3");
      \u0275\u0275text(208, "Encryption & access control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "p");
      \u0275\u0275text(210, "TLS in transit, encryption at rest, ACL users and IP allow-lists.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 42)(212, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(213, "svg", 46);
      \u0275\u0275element(214, "path", 62)(215, "circle", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(216, "h3");
      \u0275\u0275text(217, "Real-time monitoring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "p");
      \u0275\u0275text(219, "Memory, CPU, hit ratio, evictions, latency and connected clients at a glance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 42)(221, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(222, "svg", 46);
      \u0275\u0275element(223, "path", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(224, "h3");
      \u0275\u0275text(225, "One-click backup & restore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "p");
      \u0275\u0275text(227, "Take an on-demand snapshot or restore one from the panel.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "div", 42)(229, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(230, "svg", 46);
      \u0275\u0275element(231, "path", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(232, "h3");
      \u0275\u0275text(233, "Resource-based autoscaling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "p");
      \u0275\u0275text(235, "Grow memory and compute as usage climbs, with alerts before you hit limits.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "div", 42)(237, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(238, "svg", 46);
      \u0275\u0275element(239, "path", 66)(240, "path", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(241, "h3");
      \u0275\u0275text(242, "Tuned for speed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "p");
      \u0275\u0275text(244, "Eviction policies, persistence and connection limits set for your workload.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 42)(246, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(247, "svg", 46);
      \u0275\u0275element(248, "path", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(249, "h3");
      \u0275\u0275text(250, "Works with every client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "p");
      \u0275\u0275text(252, "Official clients for Node.js, Python, Java, Go, PHP and .NET, plus Redis Insight.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "h2", 49);
      \u0275\u0275text(254, "Pick an ");
      \u0275\u0275elementStart(255, "em");
      \u0275\u0275text(256, "architecture");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "p", 69);
      \u0275\u0275text(258, "Start standalone, add Sentinel for production availability, and move to Redis Cluster for scale.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 70)(260, "article", 71);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_article_click_260_listener() {
        return ctx.chooseArchitecture("solo");
      })("keydown.enter", function ManagedRedisPage_Template_article_keydown_enter_260_listener() {
        return ctx.chooseArchitecture("solo");
      })("keydown.space", function ManagedRedisPage_Template_article_keydown_space_260_listener($event) {
        $event.preventDefault();
        return ctx.chooseArchitecture("solo");
      });
      \u0275\u0275elementStart(261, "span", 72);
      \u0275\u0275text(262, "Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 73);
      \u0275\u0275element(264, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "h3");
      \u0275\u0275text(266, "Standalone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "p", 75);
      \u0275\u0275text(268, "Best for: Development, testing and caches you can rebuild");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "ul")(270, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(271, "svg", 46);
      \u0275\u0275element(272, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(273, "span");
      \u0275\u0275text(274, "Single node");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(276, "svg", 46);
      \u0275\u0275element(277, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(278, "span");
      \u0275\u0275text(279, "Backups and persistence options");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(281, "svg", 46);
      \u0275\u0275element(282, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(283, "span");
      \u0275\u0275text(284, "Lowest cost");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(285, "article", 76);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_article_click_285_listener() {
        return ctx.chooseArchitecture("ha");
      })("keydown.enter", function ManagedRedisPage_Template_article_keydown_enter_285_listener() {
        return ctx.chooseArchitecture("ha");
      })("keydown.space", function ManagedRedisPage_Template_article_keydown_space_285_listener($event) {
        $event.preventDefault();
        return ctx.chooseArchitecture("ha");
      });
      \u0275\u0275elementStart(286, "span", 72);
      \u0275\u0275text(287, "Production default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "div", 73);
      \u0275\u0275element(289, "i", 74)(290, "i")(291, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "h3");
      \u0275\u0275text(293, "Sentinel (HA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "p", 75);
      \u0275\u0275text(295, "Best for: Production caches, sessions and queues that must stay up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "ul")(297, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(298, "svg", 46);
      \u0275\u0275element(299, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(300, "span");
      \u0275\u0275text(301, "Primary + replica");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(303, "svg", 46);
      \u0275\u0275element(304, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(305, "span");
      \u0275\u0275text(306, "Sentinel quorum monitoring");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(308, "svg", 46);
      \u0275\u0275element(309, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(310, "span");
      \u0275\u0275text(311, "Automatic failover");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(313, "svg", 46);
      \u0275\u0275element(314, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(315, "span");
      \u0275\u0275text(316, "Read replicas on demand");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(317, "article", 78)(318, "span", 72);
      \u0275\u0275text(319, "Scale-out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 73);
      \u0275\u0275element(321, "i", 74)(322, "i")(323, "i", 77)(324, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "h3");
      \u0275\u0275text(326, "Redis Cluster");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p", 75);
      \u0275\u0275text(328, "Best for: Large datasets and high throughput across many nodes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "ul")(330, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(331, "svg", 46);
      \u0275\u0275element(332, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(333, "span");
      \u0275\u0275text(334, "Data sharded across nodes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(336, "svg", 46);
      \u0275\u0275element(337, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(338, "span");
      \u0275\u0275text(339, "Horizontal scaling");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(341, "svg", 46);
      \u0275\u0275element(342, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(343, "span");
      \u0275\u0275text(344, "Replica per shard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(346, "svg", 46);
      \u0275\u0275element(347, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(348, "span");
      \u0275\u0275text(349, "Designed per project");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(350, "h2", 49);
      \u0275\u0275text(351, "Two ways to ");
      \u0275\u0275elementStart(352, "em");
      \u0275\u0275text(353, "run it");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "p", 69);
      \u0275\u0275text(355, "Both include patching, backup and monitoring \u2014 the difference is who owns query performance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "div", 79)(357, "article", 42)(358, "span", 80);
      \u0275\u0275text(359, "MODEL 01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "h3");
      \u0275\u0275text(361, "Managed Instance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "div", 81);
      \u0275\u0275text(363, "Platform level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "p");
      \u0275\u0275text(365, "We run the engine, replication and backups; your team owns data models, keys and application commands.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 82)(367, "span");
      \u0275\u0275text(368, "Teams with database skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "span");
      \u0275\u0275text(370, "Product engineering teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "span");
      \u0275\u0275text(372, "Dev & staging estates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div", 83)(374, "div")(375, "b");
      \u0275\u0275text(376, "Patching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "span");
      \u0275\u0275text(378, "Minor upgrades handled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div")(380, "b");
      \u0275\u0275text(381, "Restore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "span");
      \u0275\u0275text(383, "Tested point-in-time restore");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div")(385, "b");
      \u0275\u0275text(386, "Replication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "span");
      \u0275\u0275text(388, "Health monitored 24\xD77");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(389, "article", 42)(390, "span", 84);
      \u0275\u0275text(391, "For seasonal peaks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "span", 80);
      \u0275\u0275text(393, "MODEL 02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "h3");
      \u0275\u0275text(395, "Database Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "div", 81);
      \u0275\u0275text(397, "Engine level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "p");
      \u0275\u0275text(399, "Our engineers tune memory usage, eviction policies and persistence, plan capacity and run major upgrades with you \u2014 so the engine behind revenue is operated to an agreed standard.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div", 82)(401, "span");
      \u0275\u0275text(402, "Commerce estates with seasonal peaks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "span");
      \u0275\u0275text(404, "Teams without a DBA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "span");
      \u0275\u0275text(406, "Revenue-critical platforms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "div", 83)(408, "div")(409, "b");
      \u0275\u0275text(410, "Tuning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "span");
      \u0275\u0275text(412, "Memory, latency and eviction review");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "div")(414, "b");
      \u0275\u0275text(415, "Capacity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "span");
      \u0275\u0275text(417, "Peak-season readiness planning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "div")(419, "b");
      \u0275\u0275text(420, "Upgrades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "span");
      \u0275\u0275text(422, "Major-version upgrade programmes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(423, "div", 85)(424, "table")(425, "thead")(426, "tr")(427, "th");
      \u0275\u0275text(428, "WHO OWNS WHAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "th");
      \u0275\u0275text(430, "MANAGED INSTANCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "th");
      \u0275\u0275text(432, "DATABASE OPERATIONS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(433, "tbody")(434, "tr")(435, "td");
      \u0275\u0275text(436, "Hardware, hypervisor & network");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "td", 86);
      \u0275\u0275text(438, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "td", 86);
      \u0275\u0275text(440, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "tr")(442, "td");
      \u0275\u0275text(443, "OS, Redis install & minor updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "td", 86);
      \u0275\u0275text(445, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "td", 86);
      \u0275\u0275text(447, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "tr")(449, "td");
      \u0275\u0275text(450, "Replication, failover & backups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "td", 86);
      \u0275\u0275text(452, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "td", 86);
      \u0275\u0275text(454, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(455, "tr")(456, "td");
      \u0275\u0275text(457, "Monitoring & 24\xD77 alerting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "td", 86);
      \u0275\u0275text(459, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "td", 86);
      \u0275\u0275text(461, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(462, "tr")(463, "td");
      \u0275\u0275text(464, "Major-version upgrades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "td", 87);
      \u0275\u0275text(466, "Shared");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "td", 86);
      \u0275\u0275text(468, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "tr")(470, "td");
      \u0275\u0275text(471, "Slow-query & index tuning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "td", 88);
      \u0275\u0275text(473, "You");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "td", 86);
      \u0275\u0275text(475, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(476, "tr")(477, "td");
      \u0275\u0275text(478, "Capacity & peak-season planning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "td", 88);
      \u0275\u0275text(480, "You");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "td", 86);
      \u0275\u0275text(482, "XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(483, "tr")(484, "td");
      \u0275\u0275text(485, "Schema design & releases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "td", 88);
      \u0275\u0275text(487, "You");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "td", 87);
      \u0275\u0275text(489, "Shared");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "tr")(491, "td");
      \u0275\u0275text(492, "Users, grants & data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "td", 88);
      \u0275\u0275text(494, "You");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "td", 88);
      \u0275\u0275text(496, "You");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(497, "section", 89)(498, "h2", 49);
      \u0275\u0275text(499, "Plans & ");
      \u0275\u0275elementStart(500, "em");
      \u0275\u0275text(501, "pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "p", 90);
      \u0275\u0275text(503, "Start with a workload profile, or pick a plan directly \u2014 the estimate updates as you go.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "div", 91)(505, "button", 92);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_505_listener() {
        return ctx.chooseProfile("cache");
      });
      \u0275\u0275elementStart(506, "b");
      \u0275\u0275text(507, "Application cache");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "span");
      \u0275\u0275text(509, "Sentinel HA in front of your database to cut page and API response times.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "em");
      \u0275\u0275text(511, "Suggested: Medium \xB7 HA \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "button", 93);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_512_listener() {
        return ctx.chooseProfile("sess");
      });
      \u0275\u0275elementStart(513, "b");
      \u0275\u0275text(514, "Sessions & queues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "span");
      \u0275\u0275text(516, "Sentinel HA with a read replica for sessions, rate limits and job queues.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "em");
      \u0275\u0275text(518, "Suggested: Large \xB7 HA \xB7 1 replica \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "button", 94);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_519_listener() {
        return ctx.chooseProfile("dev");
      });
      \u0275\u0275elementStart(520, "b");
      \u0275\u0275text(521, "Dev & testing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "span");
      \u0275\u0275text(523, "A single standalone node with backups.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "em");
      \u0275\u0275text(525, "Suggested: Small \u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(526, "div", 95)(527, "div")(528, "div", 96)(529, "div", 97)(530, "button", 98);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_530_listener() {
        return ctx.setMode(false);
      });
      \u0275\u0275text(531, "Standalone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "button", 99);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_532_listener() {
        return ctx.setMode(true);
      });
      \u0275\u0275text(533, "HA pair");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 100)(535, "button", 101);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_535_listener() {
        return ctx.billing.set("h");
      });
      \u0275\u0275text(536, "Hourly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "button", 102);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_537_listener() {
        return ctx.billing.set("m");
      });
      \u0275\u0275text(538, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(539, "div", 103)(540, "table")(541, "thead")(542, "tr")(543, "th");
      \u0275\u0275text(544, "PLAN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "th");
      \u0275\u0275text(546, "vCPU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "th");
      \u0275\u0275text(548, "MEMORY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "th");
      \u0275\u0275text(550, "PRICE");
      \u0275\u0275elementEnd();
      \u0275\u0275element(551, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(552, "tbody", 104);
      \u0275\u0275repeaterCreate(553, ManagedRedisPage_For_554_Template, 19, 13, "tr", 105, _forTrack02);
      \u0275\u0275elementStart(555, "tr", 106)(556, "td")(557, "b");
      \u0275\u0275text(558, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "small");
      \u0275\u0275text(560, "Custom workloads and advanced availability");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "td");
      \u0275\u0275text(562, "Custom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "td");
      \u0275\u0275text(564, "Custom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "td", 107);
      \u0275\u0275text(566, "Contact us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "td")(568, "a", 108);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_a_click_568_listener($event) {
        return ctx.scrollTo("lead", $event);
      });
      \u0275\u0275text(569, "Talk to us");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(570, "p", 109);
      \u0275\u0275text(571, "Prices are for compute per node, in INR excluding GST (730 hours = 1 month). Sentinel HA runs a primary and a replica with automatic failover (2\xD7 compute). Storage \u20B96.20/GB-month on NVMe; backup storage beyond the included allowance \u20B92.00/GB-month.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(572, "aside", 110)(573, "h3");
      \u0275\u0275text(574, "Your estimate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "label", 111);
      \u0275\u0275text(576, "PLAN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "select", 112);
      \u0275\u0275listener("change", function ManagedRedisPage_Template_select_change_577_listener($event) {
        return ctx.selectPlan($event);
      });
      \u0275\u0275elementStart(578, "option", 113);
      \u0275\u0275text(579, "Small \u2014 2 vCPU / 8 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "option", 114);
      \u0275\u0275text(581, "Medium \u2014 4 vCPU / 16 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "option", 115);
      \u0275\u0275text(583, "Large \u2014 8 vCPU / 32 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "option", 116);
      \u0275\u0275text(585, "X-Large \u2014 16 vCPU / 64 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "option", 117);
      \u0275\u0275text(587, "2X-Large \u2014 32 vCPU / 256 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(588, "label", 118);
      \u0275\u0275text(589, "VERSION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "select", 119);
      \u0275\u0275listener("change", function ManagedRedisPage_Template_select_change_590_listener($event) {
        return ctx.version.set($event.target.value);
      });
      \u0275\u0275elementStart(591, "option");
      \u0275\u0275text(592, "Redis 7.4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "option");
      \u0275\u0275text(594, "Redis 7.2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(595, "option");
      \u0275\u0275text(596, "Redis 6.2 (upgrade path)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(597, "label", 120);
      \u0275\u0275text(598, "STORAGE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "input", 121);
      \u0275\u0275listener("input", function ManagedRedisPage_Template_input_input_599_listener($event) {
        return ctx.storage.set(+$event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "div", 122)(601, "span");
      \u0275\u0275text(602, "NVMe per node");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "b", 123);
      \u0275\u0275text(604);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(605, "label", 124);
      \u0275\u0275text(606, "READ REPLICAS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "input", 125);
      \u0275\u0275listener("input", function ManagedRedisPage_Template_input_input_607_listener($event) {
        return ctx.replicas.set(+$event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "div", 122)(609, "span");
      \u0275\u0275text(610, "Replicas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "b", 126);
      \u0275\u0275text(612);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "div", 127)(614, "div", 128)(615, "span", 129);
      \u0275\u0275text(616);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "b", 130);
      \u0275\u0275text(618);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(619, "div", 128)(620, "span");
      \u0275\u0275text(621, "Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "b", 131);
      \u0275\u0275text(623);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "div", 128)(625, "span");
      \u0275\u0275text(626, "Backups & PITR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "b");
      \u0275\u0275text(628, "Included");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(629, "div", 132)(630, "span");
      \u0275\u0275text(631, "Est. monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "b", 133);
      \u0275\u0275text(633);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(634, "small", 134);
      \u0275\u0275text(635);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "a", 135);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_a_click_636_listener($event) {
        return ctx.scrollTo("lead", $event);
      });
      \u0275\u0275text(637, "Get this database \u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(638, "h2", 49);
      \u0275\u0275text(639, "Ideal ");
      \u0275\u0275elementStart(640, "em");
      \u0275\u0275text(641, "use cases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "div", 136)(643, "div", 42)(644, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(645, "svg", 46);
      \u0275\u0275element(646, "rect", 137)(647, "path", 138);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(648, "h3");
      \u0275\u0275text(649, "Web & SaaS applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "p");
      \u0275\u0275text(651, "Cache pages, API responses and database queries for faster apps.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(652, "div", 42)(653, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(654, "svg", 46);
      \u0275\u0275element(655, "path", 139);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(656, "h3");
      \u0275\u0275text(657, "Real-time data streams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(658, "p");
      \u0275\u0275text(659, "Redis Streams and pub/sub for live feeds, notifications and event pipelines.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "div", 42)(661, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(662, "svg", 46);
      \u0275\u0275element(663, "path", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(664, "h3");
      \u0275\u0275text(665, "Analytics & leaderboards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "p");
      \u0275\u0275text(667, "Counters, sorted sets and HyperLogLog for live dashboards and rankings.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(668, "div", 42)(669, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(670, "svg", 46);
      \u0275\u0275element(671, "circle", 141)(672, "circle", 142)(673, "path", 143);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(674, "h3");
      \u0275\u0275text(675, "E-commerce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "p");
      \u0275\u0275text(677, "Carts, sessions, inventory counters and flash-sale rate limiting.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(678, "div", 42)(679, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(680, "svg", 46);
      \u0275\u0275element(681, "path", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(682, "h3");
      \u0275\u0275text(683, "Fintech & payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "p");
      \u0275\u0275text(685, "Low-latency lookups, idempotency keys and fraud-check caches.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "div", 42)(687, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(688, "svg", 46);
      \u0275\u0275element(689, "circle", 145)(690, "path", 146)(691, "path", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(692, "h3");
      \u0275\u0275text(693, "Sessions & authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(694, "p");
      \u0275\u0275text(695, "Fast session storage and token caches shared across app servers.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(696, "h2", 49);
      \u0275\u0275text(697, "Migration, security ");
      \u0275\u0275elementStart(698, "em");
      \u0275\u0275text(699, "& access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "div", 148)(701, "div", 42)(702, "h3")(703, "span");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(704, "svg", 46);
      \u0275\u0275element(705, "path", 149);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(706, "Expert migration support");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(707, "ul")(708, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(709, "svg", 46);
      \u0275\u0275element(710, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(711, "span");
      \u0275\u0275text(712, "Sizing for memory, throughput and persistence needs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(714, "svg", 46);
      \u0275\u0275element(715, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(716, "span");
      \u0275\u0275text(717, "Configuration of eviction, persistence and access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(718, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(719, "svg", 46);
      \u0275\u0275element(720, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(721, "span");
      \u0275\u0275text(722, "Data sync from your existing Redis or ElastiCache");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(724, "svg", 46);
      \u0275\u0275element(725, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(726, "span");
      \u0275\u0275text(727, "Cutover planning with minimal disruption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(728, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(729, "svg", 46);
      \u0275\u0275element(730, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(731, "span");
      \u0275\u0275text(732, "Validation and production go-live support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(733, "div", 42)(734, "h3")(735, "span");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(736, "svg", 46);
      \u0275\u0275element(737, "rect", 60)(738, "path", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(739, "Secure by design");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(740, "ul")(741, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(742, "svg", 46);
      \u0275\u0275element(743, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(744, "span");
      \u0275\u0275text(745, "Encryption at rest and TLS in transit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(747, "svg", 46);
      \u0275\u0275element(748, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(749, "span");
      \u0275\u0275text(750, "Isolated private network (VPC) environments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(751, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(752, "svg", 46);
      \u0275\u0275element(753, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(754, "span");
      \u0275\u0275text(755, "ACL users and role-based access control");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(756, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(757, "svg", 46);
      \u0275\u0275element(758, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(759, "span");
      \u0275\u0275text(760, "IP allow-listing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(761, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(762, "svg", 46);
      \u0275\u0275element(763, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(764, "span");
      \u0275\u0275text(765, "Compliance-ready operations \u2014 ISO 27001 provider");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(766, "div", 42)(767, "h3")(768, "span");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(769, "svg", 46);
      \u0275\u0275element(770, "rect", 150)(771, "path", 151);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(772, "Access & management");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(773, "ul")(774, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(775, "svg", 46);
      \u0275\u0275element(776, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(777, "span");
      \u0275\u0275text(778, "Manage through the XcellHost panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(780, "svg", 46);
      \u0275\u0275element(781, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(782, "span");
      \u0275\u0275text(783, "Connection strings for every client");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(784, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(785, "svg", 46);
      \u0275\u0275element(786, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(787, "span");
      \u0275\u0275text(788, "Live memory, latency and hit-ratio graphs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(790, "svg", 46);
      \u0275\u0275element(791, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(792, "span");
      \u0275\u0275text(793, "One-click backups and restores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(794, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(795, "svg", 46);
      \u0275\u0275element(796, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(797, "span");
      \u0275\u0275text(798, "CLI and API for automation");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(799, "p", 152);
      \u0275\u0275text(800, "Works with redis-cli, Redis Insight, and official clients for Node.js, Python, Java, Go, PHP and .NET.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "section", 153)(802, "h2");
      \u0275\u0275text(803, "Sentinel keeps you serving");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(804, "p");
      \u0275\u0275text(805, "If the primary fails, Sentinel promotes the replica within seconds and your clients reconnect \u2014 no manual failover at 3 am.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(806, "div", 154)(807, "div")(808, "b");
      \u0275\u0275text(809, "Governed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "span");
      \u0275\u0275text(811, "access, audit and tested restores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "div")(813, "b");
      \u0275\u0275text(814, "Sovereign");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(815, "span");
      \u0275\u0275text(816, "data stays in India");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(817, "div")(818, "b");
      \u0275\u0275text(819, "Predictable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(820, "span");
      \u0275\u0275text(821, "flat monthly plan price");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(822, "div")(823, "b");
      \u0275\u0275text(824, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(825, "span");
      \u0275\u0275text(826, "engineers in Mumbai");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(827, "h2", 49);
      \u0275\u0275text(828, "What each team gets from ");
      \u0275\u0275elementStart(829, "em");
      \u0275\u0275text(830, "Redis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(831, "div", 155)(832, "button", 156);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_832_listener() {
        return ctx.audience.set("cxo");
      })("keydown", function ManagedRedisPage_Template_button_keydown_832_listener($event) {
        return ctx.onTabKey($event, "cxo");
      });
      \u0275\u0275text(833, "Leadership");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "button", 157);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_834_listener() {
        return ctx.audience.set("it");
      })("keydown", function ManagedRedisPage_Template_button_keydown_834_listener($event) {
        return ctx.onTabKey($event, "it");
      });
      \u0275\u0275text(835, "IT & engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(836, "button", 158);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_836_listener() {
        return ctx.audience.set("fin");
      })("keydown", function ManagedRedisPage_Template_button_keydown_836_listener($event) {
        return ctx.onTabKey($event, "fin");
      });
      \u0275\u0275text(837, "Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "button", 159);
      \u0275\u0275listener("click", function ManagedRedisPage_Template_button_click_838_listener() {
        return ctx.audience.set("risk");
      })("keydown", function ManagedRedisPage_Template_button_keydown_838_listener($event) {
        return ctx.onTabKey($event, "risk");
      });
      \u0275\u0275text(839, "Risk & compliance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "div", 160)(841, "div")(842, "div", 161);
      \u0275\u0275text(843, "CEO \xB7 CTO \xB7 CIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(844, "h3");
      \u0275\u0275text(845, "Leadership");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(846, "ul")(847, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(848, "svg", 46);
      \u0275\u0275element(849, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(850, "span");
      \u0275\u0275text(851, "Revenue-critical database run to an agreed standard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(852, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(853, "svg", 46);
      \u0275\u0275element(854, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(855, "span");
      \u0275\u0275text(856, "Data stays in India");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(857, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(858, "svg", 46);
      \u0275\u0275element(859, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(860, "span");
      \u0275\u0275text(861, "One predictable INR bill");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(862, "div", 162)(863, "div")(864, "div", 161);
      \u0275\u0275text(865, "IT managers \xB7 Admins \xB7 DevOps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(866, "h3");
      \u0275\u0275text(867, "IT & engineering");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "ul")(869, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(870, "svg", 46);
      \u0275\u0275element(871, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(872, "span");
      \u0275\u0275text(873, "Failover, backups and patching handled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(874, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(875, "svg", 46);
      \u0275\u0275element(876, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(877, "span");
      \u0275\u0275text(878, "Replicas added for peaks and removed after");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(879, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(880, "svg", 46);
      \u0275\u0275element(881, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(882, "span");
      \u0275\u0275text(883, "CLI/API for pipelines");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(884, "div", 163)(885, "div")(886, "div", 161);
      \u0275\u0275text(887, "Founders \xB7 Finance \xB7 Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "h3");
      \u0275\u0275text(889, "Finance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(890, "ul")(891, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(892, "svg", 46);
      \u0275\u0275element(893, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(894, "span");
      \u0275\u0275text(895, "Flat monthly price per plan \u2014 no metered surprises");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(897, "svg", 46);
      \u0275\u0275element(898, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(899, "span");
      \u0275\u0275text(900, "GST invoice in INR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(901, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(902, "svg", 46);
      \u0275\u0275element(903, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(904, "span");
      \u0275\u0275text(905, "Scale for peak season, scale back after");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(906, "div", 164)(907, "div")(908, "div", 161);
      \u0275\u0275text(909, "CISO \xB7 Audit \xB7 Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(910, "h3");
      \u0275\u0275text(911, "Risk & compliance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(912, "ul")(913, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(914, "svg", 46);
      \u0275\u0275element(915, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(916, "span");
      \u0275\u0275text(917, "Encryption, access logs and drill-verified restores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(918, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(919, "svg", 46);
      \u0275\u0275element(920, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(921, "span");
      \u0275\u0275text(922, "Indian data residency for DPDP Act obligations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(923, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(924, "svg", 46);
      \u0275\u0275element(925, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(926, "span");
      \u0275\u0275text(927, "ISO 27001 and ISO 20000-1 certified provider");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(928, "h2", 49);
      \u0275\u0275text(929, "Build more around ");
      \u0275\u0275elementStart(930, "em");
      \u0275\u0275text(931, "every database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(932, "div", 165)(933, "a", 166)(934, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(935, "svg", 46);
      \u0275\u0275element(936, "rect", 167)(937, "rect", 168)(938, "path", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(939, "div")(940, "b");
      \u0275\u0275text(941, "Performance Cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "span");
      \u0275\u0275text(943, "App and web servers next to your database on the same private network.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(944, "a", 170)(945, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(946, "svg", 46);
      \u0275\u0275element(947, "path", 56)(948, "path", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(949, "div")(950, "b");
      \u0275\u0275text(951, "Block & object storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(952, "span");
      \u0275\u0275text(953, "NVMe volumes and S3-compatible storage for dumps and media.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(954, "a", 171)(955, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(956, "svg", 46);
      \u0275\u0275element(957, "path", 172);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(958, "div")(959, "b");
      \u0275\u0275text(960, "Cloud Backup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(961, "span");
      \u0275\u0275text(962, "Policy-based copies of databases to a separate location.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(963, "a", 173)(964, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(965, "svg", 46);
      \u0275\u0275element(966, "path", 139);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(967, "div")(968, "b");
      \u0275\u0275text(969, "Disaster Recovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(970, "span");
      \u0275\u0275text(971, "Keep database services recoverable across sites.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(972, "a", 174)(973, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(974, "svg", 46);
      \u0275\u0275element(975, "rect", 137)(976, "path", 175);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(977, "div")(978, "b");
      \u0275\u0275text(979, "Virtual Firewalls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(980, "span");
      \u0275\u0275text(981, "Segment database networks with explicit policies.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(982, "a", 176)(983, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(984, "svg", 46);
      \u0275\u0275element(985, "path", 177)(986, "path", 178);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(987, "div")(988, "b");
      \u0275\u0275text(989, "Managed PostgreSQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(990, "span");
      \u0275\u0275text(991, "Your system of record, with Redis caching in front.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(992, "xh-managed-redis-tail", 179);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(80);
      \u0275\u0275conditional(!ctx.reducedMotion() ? 80 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.reducedMotion() ? 82 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.reducedMotion() ? 84 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.terminalRows());
      \u0275\u0275advance(170);
      \u0275\u0275classProp("on", ctx.architecture() === "solo");
      \u0275\u0275attribute("aria-pressed", ctx.architecture() === "solo");
      \u0275\u0275advance(25);
      \u0275\u0275classProp("on", ctx.architecture() === "ha");
      \u0275\u0275attribute("aria-pressed", ctx.architecture() === "ha");
      \u0275\u0275advance(220);
      \u0275\u0275classProp("on", ctx.profile() === "cache");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("on", ctx.profile() === "sess");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("on", ctx.profile() === "dev");
      \u0275\u0275advance(11);
      \u0275\u0275attribute("aria-pressed", ctx.ha() === false);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-pressed", ctx.ha() === true);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-pressed", ctx.billing() === "h");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-pressed", ctx.billing() === "m");
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.plans);
      \u0275\u0275advance(24);
      \u0275\u0275property("value", ctx.planCode());
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.version());
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.storage());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.storage(), " GB");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.replicas());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.replicas());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("Compute \xB7 ", ctx.nodes(), " nodes (", ctx.ha() ? "HA" : "standalone", ")");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.money(ctx.computeCost()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.money(ctx.storageCost()));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.money(ctx.total()));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2248 ", ctx.hourly(ctx.total() / 730), "/hour \xB7 excl. GST");
      \u0275\u0275advance(197);
      \u0275\u0275attribute("aria-selected", ctx.audience() === "cxo")("tabindex", ctx.audience() === "cxo" ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-selected", ctx.audience() === "it")("tabindex", ctx.audience() === "it" ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-selected", ctx.audience() === "fin")("tabindex", ctx.audience() === "fin" ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-selected", ctx.audience() === "risk")("tabindex", ctx.audience() === "risk" ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", ctx.audience() !== "cxo");
      \u0275\u0275advance(22);
      \u0275\u0275property("hidden", ctx.audience() !== "it");
      \u0275\u0275advance(22);
      \u0275\u0275property("hidden", ctx.audience() !== "fin");
      \u0275\u0275advance(22);
      \u0275\u0275property("hidden", ctx.audience() !== "risk");
      \u0275\u0275advance(86);
      \u0275\u0275property("configuration", ctx.configuration());
    }
  }, dependencies: [RouterLink, RevealDirective, ManagedRedisTailComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --navy:#041E42;\n  --blue:#1565D8;\n  --blue-2:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --ice:#F2F6FC;\n  --line:#DCE5F2;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --orange:#FF8C1A;\n  --red:#E60012;\n  --ok:#2ECC71;\n  --h2:#080D2C;\n  --foot:#3B63E8;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --pop:"Poppins",sans-serif;\n  --bg:#fff;\n  --card:#fff;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  display: block;\n  scroll-behavior: smooth;\n}\n[_nghost-%COMP%] {\n  overflow-x: clip;\n}\n[_nghost-%COMP%] {\n  font-family: var(--body);\n  color: var(--ink);\n  background: var(--bg);\n  font-size: 16px;\n  line-height: 1.55;\n  -webkit-font-smoothing: antialiased;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.xg-ico[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex: none;\n  stroke: currentColor;\n  fill: none;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font: 600 14px var(--body);\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n  transition: .15s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  animation: _ngcontent-%COMP%_glow 2.8s ease-in-out infinite;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #E97A08;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  border-color: var(--line);\n  color: var(--navy);\n  background: transparent;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.cta-band[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n  background: rgba(255, 255, 255, .06);\n}\n.cta-band[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pp-body[_ngcontent-%COMP%] {\n  padding: 18px 0 35px;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 44px 0 16px;\n}\n.h2s[_ngcontent-%COMP%] {\n  color: var(--h2);\n  font: 600 clamp(22px, 2.2vw, 28px)/1.25 var(--pop);\n  text-align: center;\n  margin: 56px 0 24px;\n}\n.h2s[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--blue);\n}\n.pp-answer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 28px;\n  border: 1px solid var(--line);\n  border-left: 4px solid var(--blue);\n  border-radius: 14px;\n  padding: 26px 28px;\n  background: var(--card);\n  box-shadow: 0 8px 24px rgba(16, 43, 79, .06);\n  margin-top: 26px;\n}\n.pp-answer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 600 22px/1.3 var(--pop);\n  color: var(--h2);\n  margin: 6px 0 10px;\n}\n.pp-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 15.5px;\n  line-height: 1.7;\n}\n.pp-answer[_ngcontent-%COMP%]   .kick[_ngcontent-%COMP%] {\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  color: var(--blue);\n}\n.pp-answer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 9px;\n  margin: 8px 0 14px;\n}\n.pp-answer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  font-size: 14.5px;\n}\n.pp-answer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .xg-ico[_ngcontent-%COMP%] {\n  color: #16A34A;\n  margin-top: 2px;\n}\n.bestfor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: center;\n  font-size: 12.5px;\n}\n.bestfor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-weight: 600;\n}\n.bestfor[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n  border-radius: 99px;\n  padding: 3px 10px;\n  font-weight: 600;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: var(--card);\n  color: var(--ink);\n  font: 14.5px var(--body);\n}\n.faqs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--card);\n  transition: .15s;\n}\n.faqs[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 6px 18px rgba(21, 101, 216, .08);\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  font: 600 14.5px var(--pop);\n  color: var(--h2);\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after {\n  content: "+";\n  flex: none;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n  transition: .2s;\n}\n.faqs[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after {\n  content: "\\d7";\n  background: var(--blue);\n  color: #fff;\n}\n.faqs[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  padding: 0 18px 16px;\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.rel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  margin-top: 22px;\n  font-size: 13px;\n}\n.rel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--slate);\n}\n.rel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 5px 12px;\n  color: var(--blue);\n  background: var(--card);\n}\n.rel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n}\n.cta-band[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      var(--blue-2));\n  color: #fff;\n  border-radius: 18px;\n  padding: 40px 44px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 34px;\n  position: relative;\n  overflow: hidden;\n}\n.cta-band[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 100% 0,\n      #000,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      circle at 100% 0,\n      #000,\n      transparent 70%);\n}\n.cta-band[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n}\n.cta-band[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 700 26px/1.25 var(--disp);\n  margin-bottom: 6px;\n}\n.cta-band[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #CFE0FA;\n  font-size: 14.5px;\n}\n.cta-band[_ngcontent-%COMP%]   .hero-ctas[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.cta-band[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 8px;\n  margin-top: 18px;\n  font-size: 14px;\n  color: #E3EDFD;\n}\n.cta-band[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cta-band[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .xg-ico[_ngcontent-%COMP%] {\n  color: #FFD9AC;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 14px;\n  padding: 18px;\n}\n.form[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--navy);\n  border-color: #fff;\n}\n.form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #CFE0FA;\n  font-size: 11.5px;\n}\n.ok-msg[_ngcontent-%COMP%] {\n  display: none;\n  grid-column: 1/-1;\n  background: #16A34A;\n  border-radius: 9px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n  transition: opacity .6s, transform .6s;\n}\n.rv.reveal[_ngcontent-%COMP%]:not(.in) {\n  opacity: 0;\n  transform: translateY(16px);\n}\n@media (max-width: 1000px) {\n  .pp-answer[_ngcontent-%COMP%], \n   .cta-band[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 700px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .hero-ctas[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 6px;\n  }\n  .faqs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-band[_ngcontent-%COMP%] {\n    padding: 26px 18px;\n  }\n  .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gband[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  padding: 44px 40px;\n  color: #fff;\n  margin-top: 56px;\n}\n.gband[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(4, 30, 66, .95),\n      rgba(4, 30, 66, .7) 60%,\n      rgba(4, 30, 66, .35));\n}\n.gband[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.gband[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 700 clamp(24px, 2.6vw, 34px)/1.2 var(--disp);\n  max-width: 640px;\n}\n.gband[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #C7D5EC;\n  max-width: 640px;\n  margin: 10px 0 20px;\n}\n.gstats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.gstats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 30px var(--disp);\n  color: #FFB45C;\n}\n.gstats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #C7D5EC;\n}\n.cta-photo[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n}\n.cta-photo[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      100deg,\n      rgba(4, 30, 66, .96),\n      rgba(4, 30, 66, .9) 55%,\n      rgba(4, 30, 66, .8));\n  background-size: auto;\n  -webkit-mask-image: none;\n  mask-image: none;\n  z-index: 1;\n}\n.cta-photo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.photo-credit[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: #8FA2BD;\n  margin-top: 14px;\n}\n@media (max-width: 700px) {\n  .gband[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n.pg-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #041E42;\n  color: #fff;\n  padding: 66px 0 76px;\n}\n.pg-hero[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: .3;\n  animation: _ngcontent-%COMP%_kb 30s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_kb {\n  from {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1.16) translate(-2%, 1%);\n  }\n}\n.pg-hero[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 80% 30%,\n      rgba(51, 103, 145, .55),\n      transparent 55%),\n    linear-gradient(\n      90deg,\n      rgba(4, 30, 66, .97) 35%,\n      rgba(4, 30, 66, .6));\n}\n.pg-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 40px;\n  align-items: center;\n}\n.pg-hero[_ngcontent-%COMP%]   .crumb[_ngcontent-%COMP%] {\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n  color: #9CC8FF;\n  margin-bottom: 14px;\n}\n.pg-hero[_ngcontent-%COMP%]   .crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9CC8FF;\n}\n.pg-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 800 clamp(32px, 4.2vw, 54px)/1.08 var(--disp);\n  letter-spacing: -.02em;\n}\n.pg-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #FFB45C;\n}\n.pg-hero[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  margin: 16px 0 20px;\n  font-size: 17px;\n  color: #C7D5EC;\n  max-width: 600px;\n}\n.pg-price[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 8px;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 12px;\n  padding: 10px 16px;\n  margin-bottom: 22px;\n}\n.pg-price[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9FB8D8;\n  font-size: 13px;\n}\n.pg-price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 28px var(--disp);\n  color: #FFB45C;\n}\n.pg-hero[_ngcontent-%COMP%]   .hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pg-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .5);\n  background: rgba(255, 255, 255, .06);\n}\n.pg-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 22px;\n}\n.pg-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--mono);\n  padding: 5px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  border: 1px solid rgba(255, 255, 255, .16);\n  color: #DCE7F8;\n}\n.clu[_ngcontent-%COMP%] {\n  background: rgba(9, 24, 52, .85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(156, 200, 255, .22);\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .4);\n}\n.clu-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font: 700 11.5px var(--mono);\n  letter-spacing: .1em;\n  color: #9CC8FF;\n  margin-bottom: 8px;\n}\n.clu-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #4ADE80;\n}\n.clu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.clu[_ngcontent-%COMP%]   .nd[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: #0E2F63;\n  stroke: #3E6FB5;\n  stroke-width: 1.2;\n}\n.clu[_ngcontent-%COMP%]   .nd.pri[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: #1565D8;\n  stroke: #9CC8FF;\n}\n.clu[_ngcontent-%COMP%]   .nd[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: #fff;\n  font:\n    600 11px Inter,\n    system-ui,\n    sans-serif;\n}\n.clu[_ngcontent-%COMP%]   .nd[_ngcontent-%COMP%]   .t2[_ngcontent-%COMP%] {\n  fill: #9FB8D8;\n  font: 500 9.5px ui-monospace, monospace;\n}\n.clu[_ngcontent-%COMP%]   .ln[_ngcontent-%COMP%] {\n  stroke: #3E6FB5;\n  stroke-width: 1.5;\n  stroke-dasharray: 4 4;\n  fill: none;\n}\n.clu[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  fill: #FFB45C;\n}\n.term[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: #061329;\n  border-radius: 12px;\n  padding: 12px 14px;\n  font: 500 12px/1.65 var(--mono);\n  color: #9CC8FF;\n  height: 132px;\n  overflow: hidden;\n}\n.term[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  color: #4ADE80;\n}\n.stat4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: -38px;\n  position: relative;\n  z-index: 2;\n}\n.stat4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 18px 20px;\n  box-shadow: 0 18px 40px rgba(4, 30, 66, .1);\n}\n.stat4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--blue);\n}\n.stat4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.c10[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 14px;\n}\n.c10[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      170deg,\n      var(--card) 55%,\n      var(--ice));\n  transition: .2s;\n}\n.c10[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--blue);\n  box-shadow: 0 14px 30px rgba(21, 101, 216, .1);\n}\n.c10[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: var(--blue);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.c10[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 600 15px var(--pop);\n  color: var(--h2);\n  margin-bottom: 6px;\n}\n.c10[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.2px;\n  color: var(--slate);\n}\n.arch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.arch[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 18px;\n  padding: 22px;\n  background: var(--card);\n  cursor: pointer;\n  transition: .2s;\n  position: relative;\n}\n.arch[_ngcontent-%COMP%]   article.on[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 16px 36px rgba(21, 101, 216, .14);\n}\n.arch[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font: 700 10.5px var(--mono);\n  padding: 4px 9px;\n  border-radius: 999px;\n  background: #FFF3E3;\n  color: #B45309;\n}\n.arch[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%] {\n  height: 74px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  border-radius: 12px;\n  background: var(--ice);\n}\n.arch[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 40px;\n  border-radius: 7px;\n  background: #0E2F63;\n  position: relative;\n}\n.arch[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   i.p[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.arch[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   i.r[_ngcontent-%COMP%] {\n  background: #94B8E8;\n  width: 28px;\n  height: 32px;\n}\n.arch[_ngcontent-%COMP%]   .dia[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  right: 6px;\n  top: 8px;\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, .5);\n  box-shadow: 0 7px 0 rgba(255, 255, 255, .5), 0 14px 0 rgba(255, 255, 255, .5);\n}\n.arch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 18px var(--pop);\n  color: var(--h2);\n}\n.arch[_ngcontent-%COMP%]   .best[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin: 6px 0 12px;\n}\n.arch[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.arch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 14px;\n  padding: 4px 0;\n}\n.arch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16A34A;\n  flex: none;\n  width: 17px;\n  height: 17px;\n  margin-top: 2px;\n}\n.mdl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid var(--line);\n  background: var(--card);\n  position: relative;\n  overflow: hidden;\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2) {\n  background:\n    linear-gradient(\n      145deg,\n      #062452,\n      #0B3B82);\n  color: #DCE7F8;\n  border: 0;\n}\n.mdl[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  font: 800 12px var(--mono);\n  letter-spacing: .14em;\n  color: var(--blue);\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   .no[_ngcontent-%COMP%] {\n  color: #FFB45C;\n}\n.mdl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 800 26px var(--disp);\n  color: var(--h2);\n  margin: 4px 0;\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mdl[_ngcontent-%COMP%]   .tg[_ngcontent-%COMP%] {\n  font: 600 15px var(--pop);\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   .tg[_ngcontent-%COMP%] {\n  color: #9CC8FF;\n}\n.mdl[_ngcontent-%COMP%]   .bdg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  font: 700 10.5px var(--mono);\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #FF8C1A;\n  color: #fff;\n}\n.mdl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  margin-bottom: 14px;\n}\n.mdl[_ngcontent-%COMP%]   .bf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.mdl[_ngcontent-%COMP%]   .bf[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--pop);\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--ice);\n  color: var(--h2);\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   .bf[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.mdl[_ngcontent-%COMP%]   .pl[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.mdl[_ngcontent-%COMP%]   .pl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--line);\n  font-size: 13.5px;\n}\n.mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-child(2)   .pl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .16);\n}\n.mdl[_ngcontent-%COMP%]   .pl[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.own[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: auto;\n  background: var(--card);\n  margin-top: 18px;\n}\n.own[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n  font-size: 14px;\n}\n.own[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.own[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n}\n.own[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n}\n.own[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n  width: 180px;\n}\n.own[_ngcontent-%COMP%]   .us[_ngcontent-%COMP%] {\n  color: #15803D;\n  font-weight: 700;\n}\n.own[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 700;\n}\n.own[_ngcontent-%COMP%]   .shared[_ngcontent-%COMP%] {\n  color: #B45309;\n  font-weight: 700;\n}\n.pz[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);\n  gap: 22px;\n  align-items: start;\n}\n.pz[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pt[_ngcontent-%COMP%]   .sp[_ngcontent-%COMP%] {\n  display: none;\n}\n.pz-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.seg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 4px;\n}\n.seg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  padding: 8px 14px;\n  border-radius: 9px;\n  font: 600 13.5px var(--pop);\n  color: var(--slate);\n  cursor: pointer;\n}\n.seg[_ngcontent-%COMP%]   button[aria-pressed=true][_ngcontent-%COMP%] {\n  background: var(--card);\n  color: var(--blue);\n  box-shadow: 0 2px 8px rgba(4, 30, 66, .1);\n}\n.pt[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: auto;\n  background: var(--card);\n}\n.pt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  font-size: 14px;\n}\n.pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n}\n.pt[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 2px;\n}\n.pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 700 15px var(--pop);\n  color: var(--h2);\n}\n.pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--slate);\n  font-size: 12.5px;\n}\n.pt[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%] {\n  font: 800 18px var(--disp);\n  color: var(--h2);\n  white-space: nowrap;\n}\n.pt[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 500 12px var(--pop);\n  display: inline;\n}\n.pt[_ngcontent-%COMP%]   tr.sel[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n}\n.pt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pt[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--blue);\n  border-radius: 8px;\n  padding: 6px 12px;\n  color: var(--blue);\n  font: 600 13px var(--pop);\n  background: none;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.pt[_ngcontent-%COMP%]   tr.sel[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n}\n.pnote[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-top: 10px;\n}\n.calc[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 96px;\n  border-radius: 18px;\n  background: var(--navy);\n  color: #DCE7F8;\n  padding: 22px;\n}\n.calc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 17px var(--pop);\n  color: #fff;\n  margin-bottom: 14px;\n}\n.calc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: #9FB8D8;\n  margin: 12px 0 6px;\n}\n.calc[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.calc[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n}\n.calc[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #0E2F63;\n  color: #fff;\n  border: 1px solid #3E6FB5;\n  border-radius: 10px;\n  padding: 9px 10px;\n  font: 500 14px var(--pop);\n}\n.calc[_ngcontent-%COMP%]   .rv2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.calc[_ngcontent-%COMP%]   .rv2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.calc[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  accent-color: #FF8C1A;\n}\n.calc[_ngcontent-%COMP%]   .ln2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13.5px;\n  padding: 6px 0;\n  border-bottom: 1px dashed rgba(255, 255, 255, .14);\n}\n.calc[_ngcontent-%COMP%]   .tot[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.calc[_ngcontent-%COMP%]   .tot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 30px var(--disp);\n  color: #FFB45C;\n}\n.calc[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 14px;\n}\n.prof[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.prof[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1.5px solid var(--line);\n  background: var(--card);\n  border-radius: 16px;\n  padding: 18px;\n  cursor: pointer;\n  transition: .2s;\n}\n.prof[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 700 16px var(--pop);\n  color: var(--h2);\n  margin-bottom: 6px;\n}\n.prof[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.prof[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  font: 700 12px var(--mono);\n  font-style: normal;\n  color: var(--blue);\n}\n.prof[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.prof[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-soft);\n}\n.u6[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.u6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 22px;\n  background: var(--navy);\n  color: #DCE7F8;\n  position: relative;\n  overflow: hidden;\n}\n.u6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  right: -30px;\n  top: -30px;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: rgba(255, 140, 26, .14);\n}\n.u6[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, .1);\n  color: #FFB45C;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.u6[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 600 16px var(--pop);\n  color: #fff;\n  margin-bottom: 6px;\n}\n.u6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #C7D5EC;\n}\n.two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.two[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px;\n  background: var(--card);\n}\n.two[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font: 700 19px var(--pop);\n  color: var(--h2);\n  margin-bottom: 12px;\n}\n.two[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--blue);\n  color: #fff;\n  display: grid;\n  place-items: center;\n}\n.two[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 7px 0;\n  font-size: 14.5px;\n  border-bottom: 1px dashed var(--line);\n}\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16A34A;\n  flex: none;\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n}\n.aud-t[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.aud-t[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  background: var(--card);\n  border-radius: 999px;\n  padding: 9px 18px;\n  font: 600 14px var(--pop);\n  color: var(--h2);\n  cursor: pointer;\n}\n.aud-t[_ngcontent-%COMP%]   button[aria-selected=true][_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n  border-color: var(--navy);\n}\n.aud-p[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n  border-radius: 18px;\n  border: 1px solid var(--line);\n  background:\n    linear-gradient(\n      170deg,\n      var(--card) 50%,\n      var(--ice));\n  padding: 24px 28px;\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 20px;\n  align-items: center;\n}\n.aud-p[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n.aud-p[_ngcontent-%COMP%]   .who[_ngcontent-%COMP%] {\n  font: 700 12px var(--mono);\n  color: var(--slate);\n  letter-spacing: .06em;\n}\n.aud-p[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 800 22px var(--disp);\n  color: var(--h2);\n}\n.aud-p[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.aud-p[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 6px 0;\n  font-size: 15px;\n}\n.aud-p[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--blue);\n  flex: none;\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n}\n.bt[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.bt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 18px;\n  background: var(--card);\n  transition: .2s;\n}\n.bt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  transform: translateY(-3px);\n}\n.bt[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  flex: none;\n}\n.bt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 600 15.5px var(--pop);\n  color: var(--h2);\n}\n.bt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n@media (max-width: 1100px) {\n  .c10[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .pg-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .clu[_ngcontent-%COMP%] {\n    max-width: 560px;\n  }\n  .pz[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calc[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 900px) {\n  .arch[_ngcontent-%COMP%], \n   .u6[_ngcontent-%COMP%], \n   .bt[_ngcontent-%COMP%], \n   .prof[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .mdl[_ngcontent-%COMP%], \n   .two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat4[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .aud-p[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .pt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n   .pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), \n   .pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n  .pt[_ngcontent-%COMP%]   .sp[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 600;\n    color: var(--h2);\n  }\n  .pt[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .pt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n  }\n  .pt[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .c10[_ngcontent-%COMP%], \n   .arch[_ngcontent-%COMP%], \n   .u6[_ngcontent-%COMP%], \n   .bt[_ngcontent-%COMP%], \n   .prof[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pz-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .mdl[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .mdl[_ngcontent-%COMP%]   .bdg[_ngcontent-%COMP%] {\n    position: static;\n    display: inline-block;\n    margin-bottom: 8px;\n  }\n}\n.pwd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 14px;\n}\n.pwd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 700 10.5px var(--mono);\n  letter-spacing: .12em;\n  color: #9FB8D8;\n}\n.pwd[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 36px;\n  padding: 0 16px;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 0 rgba(4, 30, 66, .08);\n}\n.pwd[_ngcontent-%COMP%]   img.pwd-lg[_ngcontent-%COMP%] {\n  width: auto;\n  height: 22px;\n  max-width: 130px;\n}\n.pwd[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 16px var(--disp);\n  color: #0B1B33;\n  letter-spacing: -.01em;\n}\n#pricing[_ngcontent-%COMP%], \n#lead[_ngcontent-%COMP%], \n#answer[_ngcontent-%COMP%], \n#faq[_ngcontent-%COMP%] {\n  scroll-margin-top: 140px;\n}\n.clu-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_redis-health 2.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_redis-health {\n  50% {\n    text-shadow: 0 0 12px rgba(74, 222, 128, .55);\n  }\n}\n.term[_ngcontent-%COMP%] {\n  height: 152px;\n}\n[_ngcontent-%COMP%]:is(a, button, select, input, summary, [role=button]):focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(input, select):focus-visible {\n  outline-color: #ffb45c;\n}\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: wait;\n  animation: none;\n}\n.clu[_ngcontent-%COMP%], \n.pg-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 700px) {\n  .pg-hero[_ngcontent-%COMP%] {\n    padding: 36px 0 56px;\n  }\n  .pg-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    gap: 26px;\n  }\n  .pg-hero[_ngcontent-%COMP%]   .hero-ctas[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    overflow: visible;\n  }\n  .pg-hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .pp-answer[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n  }\n  .clu[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .term[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .stat4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n  .stat4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .rv.reveal[_ngcontent-%COMP%]:not(.in) {\n    opacity: 1;\n    transform: none;\n  }\n  .clu[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=managed-redis.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagedRedisPage, [{
    type: Component,
    args: [{ selector: "xh-managed-redis-page", standalone: true, imports: [RouterLink, RevealDirective, ManagedRedisTailComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main aria-label="Managed Redis">\r
\r
<section class="pg-hero">\r
 <span class="bg" style="background-image:url('/assets/images/managed-redis/hero-code.jpg')" role="img" aria-label="Code on a screen"></span>\r
 <div class="wrap">\r
  <div>\r
   <div class="crumb"><a routerLink="/">HOME</a> \u203A CLOUD \u203A DATABASES \u203A REDIS</div>\r
   <h1>Managed Redis \u2014 <em>launch in minutes, scale without limits</em></h1>\r
   <p class="sub">Sub-millisecond caching, sessions, queues and real-time data \u2014 with Sentinel failover, Redis Cluster, automatic backups and monitoring handled by XcellHost engineers. In Indian data centres, billed in INR.</p>\r
   <div class="pg-price"><small>From</small><b>\u20B94.73/hr</b><small>\u2248 3,453/month \xB7 INR + GST</small></div>\r
   <div class="hero-ctas"><a class="btn btn-primary" href="#pricing" (click)="scrollTo('pricing', $event)">See plans &amp; pricing \u2192</a><a class="btn btn-ghost" href="#lead" (click)="scrollTo('lead', $event)">Book a Redis consultation</a></div>\r
   <div class="pg-chips"><span>Sub-ms latency</span><span>Sentinel HA</span><span>Redis Cluster</span><span>Hourly backups</span><span>TLS + ACLs</span><span>Redis 7.x</span></div>\r
   <div class="pwd"><small>POWERED BY</small><span title="Redis"><img class="pwd-lg" src="/assets/images/managed-redis/redis-logo.svg" alt="Redis logo" width="22" height="22"></span></div>\r
  </div>\r
  <div class="clu" aria-label="Illustrative HA cluster">\r
   <div class="clu-h"><span>redis-sentinel \xB7 MUMBAI</span><b>\u25CF HEALTHY</b></div>\r
   <svg viewBox="0 0 440 190" role="img" aria-label="Redis primary replicates asynchronously to a replica, monitored by three Sentinels and connected to an application">\r
    <path class="ln" id="l1" d="M150 60 H290"/><path class="ln" id="l2" d="M95 85 V130 H150"/><path class="ln" id="l3" d="M95 85 V130 H150 M200 130 H290"/>\r
    <g class="nd pri" transform="translate(40,35)"><rect width="110" height="50" rx="10"/><text x="12" y="22">Primary</text><text class="t2" x="12" y="38">read / write</text></g>\r
    <g class="nd" transform="translate(290,35)"><rect width="110" height="50" rx="10"/><text x="12" y="22">Replica</text><text class="t2" x="12" y="38">async \xB7 in sync</text></g>\r
    <g class="nd" transform="translate(150,110)"><rect width="100" height="44" rx="10"/><text x="12" y="20">Sentinel \xD73</text><text class="t2" x="12" y="35">quorum \xB7 watch</text></g>\r
    <g class="nd" transform="translate(290,110)"><rect width="110" height="44" rx="10"/><text x="12" y="20">App</text><text class="t2" x="12" y="35">client \xB7 pool</text></g>\r
    <circle class="dot" r="4">@if (!reducedMotion()) { <animateMotion dur="1.6s" repeatCount="indefinite"><mpath href="#l1"/></animateMotion> }</circle>\r
    <circle class="dot" r="4">@if (!reducedMotion()) { <animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#l2"/></animateMotion> }</circle>\r
    <circle class="dot" r="4">@if (!reducedMotion()) { <animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#l3"/></animateMotion> }</circle>\r
    <text x="175" y="52" fill="#9FB8D8" font-size="10" font-family="ui-monospace,monospace">replication</text>\r
    <text x="40" y="180" fill="#9FB8D8" font-size="10" font-family="ui-monospace,monospace" id="lag">replication lag: 0.4 ms \xB7 last backup 12 min ago</text>\r
   </svg>\r
   <div class="term" id="term" aria-hidden="true">@for (row of terminalRows(); track $index) { <div [class]="row[0]">{{ row[1] }}@if ($last && !reducedMotion()) { <span class="c"></span> }</div> }</div>\r
  </div>\r
 </div>\r
</section>\r
\r
<div class="pp-body"><div class="wrap">\r
 <div class="stat4"><div class="rv" xhReveal><b>&lt; 1 ms</b><span>typical read latency</span></div><div class="rv" xhReveal><b>Hourly</b><span>backups + PITR</span></div><div class="rv" xhReveal><b>Auto</b><span>failover with Sentinel</span></div><div class="rv" xhReveal><b>24\xD77</b><span>monitoring &amp; support</span></div></div>\r
\r
 <div class="pp-answer rv" xhReveal id="answer" style="margin-top:40px">\r
  <div><span class="kick">QUICK ANSWER \xB7 UPDATED OCTOBER 2026</span><h2>What is managed Redis?</h2><p data-speakable>Managed Redis is a hosted Redis in-memory data store where XcellHost handles provisioning, patching, monitoring, backups and failover. Run it standalone for development, with Sentinel for production high availability, or as a Redis Cluster for scale \u2014 for caching, sessions, queues and real-time analytics, in Indian data centres.</p></div>\r
  <div><span class="kick">INCLUDED IN EVERY PLAN</span><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Automated provisioning and patching</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Sentinel failover and replication</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Hourly backups + point-in-time recovery</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Real-time CPU, memory and latency monitoring</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>TLS encryption and role-based access</span></li></ul>\r
   <div class="bestfor"><span>Versions:</span><b>7.4</b><b>7.2</b><b>6.2</b></div></div>\r
 </div>\r
\r
 <h2 class="h2s">Redis built for <em>production</em></h2>\r
 <div class="c10"><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 11a13 13 0 0 1 11-8 13 13 0 0 1-8 11l-3-3z"/><circle cx="15" cy="9" r="1.5"/></svg></span><h3>Production-ready in minutes</h3><p>Provisioning, configuration and patching done for you \u2014 connection details ready to use.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg></span><h3>Automatic failover</h3><p>Sentinel watches the primary and promotes the replica if it fails, so apps keep running.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg></span><h3>Scale with Redis Cluster</h3><p>Shard data across nodes for more memory and throughput when one node is not enough.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><h3>Backups &amp; recovery</h3><p>Hourly RDB snapshots with AOF persistence options and point-in-time recovery.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><h3>Encryption &amp; access control</h3><p>TLS in transit, encryption at rest, ACL users and IP allow-lists.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></span><h3>Real-time monitoring</h3><p>Memory, CPU, hit ratio, evictions, latency and connected clients at a glance.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><h3>One-click backup &amp; restore</h3><p>Take an on-demand snapshot or restore one from the panel.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M5 21h14M4 7h16M7 7l-3 7a3 3 0 0 0 6 0zM17 7l-3 7a3 3 0 0 0 6 0z"/></svg></span><h3>Resource-based autoscaling</h3><p>Grow memory and compute as usage climbs, with alerts before you hit limits.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18a9 9 0 1 1 16 0"/><path d="m12 13 4-5"/></svg></span><h3>Tuned for speed</h3><p>Eviction policies, persistence and connection limits set for your workload.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/></svg></span><h3>Works with every client</h3><p>Official clients for Node.js, Python, Java, Go, PHP and .NET, plus Redis Insight.</p></div></div>\r
\r
 <h2 class="h2s">Pick an <em>architecture</em></h2>\r
 <p style="text-align:center;color:var(--slate);max-width:760px;margin:-8px auto 22px">Start standalone, add Sentinel for production availability, and move to Redis Cluster for scale.</p>\r
 <div class="arch" id="arch"><article class="rv" xhReveal role="button" data-k="solo" tabindex="0" [class.on]="architecture() === 'solo'" [attr.aria-pressed]="architecture() === 'solo'" (click)="chooseArchitecture('solo')" (keydown.enter)="chooseArchitecture('solo')" (keydown.space)="$event.preventDefault(); chooseArchitecture('solo')"><span class="tag">Development</span>\r
  <div class="dia"><i class="p"></i></div>\r
  <h3>Standalone</h3><p class="best">Best for: Development, testing and caches you can rebuild</p><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Single node</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Backups and persistence options</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Lowest cost</span></li></ul></article><article class="rv" xhReveal role="button" data-k="ha" tabindex="0" [class.on]="architecture() === 'ha'" [attr.aria-pressed]="architecture() === 'ha'" (click)="chooseArchitecture('ha')" (keydown.enter)="chooseArchitecture('ha')" (keydown.space)="$event.preventDefault(); chooseArchitecture('ha')"><span class="tag">Production default</span>\r
  <div class="dia"><i class="p"></i><i></i><i class="r"></i></div>\r
  <h3>Sentinel (HA)</h3><p class="best">Best for: Production caches, sessions and queues that must stay up</p><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Primary + replica</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Sentinel quorum monitoring</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Automatic failover</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Read replicas on demand</span></li></ul></article><article class="rv" xhReveal role="button" aria-pressed="" data-k="rs" tabindex="0"><span class="tag">Scale-out</span>\r
  <div class="dia"><i class="p"></i><i></i><i class="r"></i><i class="r"></i></div>\r
  <h3>Redis Cluster</h3><p class="best">Best for: Large datasets and high throughput across many nodes</p><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Data sharded across nodes</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Horizontal scaling</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Replica per shard</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Designed per project</span></li></ul></article></div>\r
\r
 <h2 class="h2s">Two ways to <em>run it</em></h2>\r
 <p style="text-align:center;color:var(--slate);max-width:760px;margin:-8px auto 22px">Both include patching, backup and monitoring \u2014 the difference is who owns query performance.</p>\r
 <div class="mdl"><article class="rv" xhReveal><span class="no">MODEL 01</span><h3>Managed Instance</h3><div class="tg">Platform level</div><p>We run the engine, replication and backups; your team owns data models, keys and application commands.</p>\r
  <div class="bf"><span>Teams with database skills</span><span>Product engineering teams</span><span>Dev &amp; staging estates</span></div>\r
  <div class="pl"><div><b>Patching</b><span>Minor upgrades handled</span></div><div><b>Restore</b><span>Tested point-in-time restore</span></div><div><b>Replication</b><span>Health monitored 24\xD77</span></div></div></article><article class="rv" xhReveal><span class="bdg">For seasonal peaks</span><span class="no">MODEL 02</span><h3>Database Operations</h3><div class="tg">Engine level</div><p>Our engineers tune memory usage, eviction policies and persistence, plan capacity and run major upgrades with you \u2014 so the engine behind revenue is operated to an agreed standard.</p>\r
  <div class="bf"><span>Commerce estates with seasonal peaks</span><span>Teams without a DBA</span><span>Revenue-critical platforms</span></div>\r
  <div class="pl"><div><b>Tuning</b><span>Memory, latency and eviction review</span></div><div><b>Capacity</b><span>Peak-season readiness planning</span></div><div><b>Upgrades</b><span>Major-version upgrade programmes</span></div></div></article></div>\r
 <div class="own rv" xhReveal><table><thead><tr><th>WHO OWNS WHAT</th><th>MANAGED INSTANCE</th><th>DATABASE OPERATIONS</th></tr></thead><tbody>\r
  <tr><td>Hardware, hypervisor &amp; network</td><td class="us">XcellHost</td><td class="us">XcellHost</td></tr><tr><td>OS, Redis install &amp; minor updates</td><td class="us">XcellHost</td><td class="us">XcellHost</td></tr><tr><td>Replication, failover &amp; backups</td><td class="us">XcellHost</td><td class="us">XcellHost</td></tr><tr><td>Monitoring &amp; 24\xD77 alerting</td><td class="us">XcellHost</td><td class="us">XcellHost</td></tr><tr><td>Major-version upgrades</td><td class="shared">Shared</td><td class="us">XcellHost</td></tr><tr><td>Slow-query &amp; index tuning</td><td class="you">You</td><td class="us">XcellHost</td></tr><tr><td>Capacity &amp; peak-season planning</td><td class="you">You</td><td class="us">XcellHost</td></tr><tr><td>Schema design &amp; releases</td><td class="you">You</td><td class="shared">Shared</td></tr><tr><td>Users, grants &amp; data</td><td class="you">You</td><td class="you">You</td></tr></tbody></table></div>\r
\r
 <section id="pricing">\r
  <h2 class="h2s">Plans &amp; <em>pricing</em></h2>\r
  <p style="text-align:center;color:var(--slate);max-width:720px;margin:-8px auto 16px">Start with a workload profile, or pick a plan directly \u2014 the estimate updates as you go.</p>\r
  <div class="prof" id="prof"><button type="button" data-k="cache" [class.on]="profile() === 'cache'" (click)="chooseProfile('cache')"><b>Application cache</b><span>Sentinel HA in front of your database to cut page and API response times.</span><em>Suggested: Medium \xB7 HA \u2192</em></button><button type="button" data-k="sess" [class.on]="profile() === 'sess'" (click)="chooseProfile('sess')"><b>Sessions &amp; queues</b><span>Sentinel HA with a read replica for sessions, rate limits and job queues.</span><em>Suggested: Large \xB7 HA \xB7 1 replica \u2192</em></button><button type="button" data-k="dev" [class.on]="profile() === 'dev'" (click)="chooseProfile('dev')"><b>Dev &amp; testing</b><span>A single standalone node with backups.</span><em>Suggested: Small \u2192</em></button></div>\r
  <div class="pz" style="margin-top:20px">\r
   <div>\r
    <div class="pz-bar"><div class="seg" id="sMode"><button type="button" data-v="0" [attr.aria-pressed]="ha() === false" (click)="setMode(false)">Standalone</button><button type="button" data-v="1" [attr.aria-pressed]="ha() === true" (click)="setMode(true)">HA pair</button></div>\r
     <div class="seg" id="sBill"><button type="button" data-v="h" [attr.aria-pressed]="billing() === 'h'" (click)="billing.set('h')">Hourly</button><button type="button" data-v="m" [attr.aria-pressed]="billing() === 'm'" (click)="billing.set('m')">Monthly</button></div></div>\r
    <div class="pt"><table><thead><tr><th>PLAN</th><th>vCPU</th><th>MEMORY</th><th>PRICE</th><th></th></tr></thead><tbody id="ptb">\r
     @for (plan of plans; track plan.code) {\r
<tr [attr.data-code]="plan.code" [class.sel]="planCode() === plan.code" (click)="planCode.set(plan.code)"><td><b>{{ plan.name }}</b><small class="sp">{{ plan.cpu }} vCPU \xB7 {{ plan.memory }} GB</small><small>{{ plan.description }}</small></td><td>{{ plan.cpu }}</td><td>{{ plan.memory }} GB</td><td class="pr">{{ tablePrice(plan.hourly) }}<small>{{ billing() === 'h' ? '/hr' : '/mo' }}</small></td><td><button type="button" class="go" [attr.aria-label]="'Select ' + plan.name + ' plan'" [attr.aria-pressed]="planCode() === plan.code">Select</button></td></tr>\r
}\r
\r
     <tr data-code="ent"><td><b>Enterprise</b><small>Custom workloads and advanced availability</small></td><td>Custom</td><td>Custom</td><td class="pr" style="font-size:15px">Contact us</td><td><a class="go" href="#lead" (click)="scrollTo('lead', $event)">Talk to us</a></td></tr>\r
    </tbody></table></div>\r
    <p class="pnote">Prices are for compute per node, in INR excluding GST (730 hours = 1 month). Sentinel HA runs a primary and a replica with automatic failover (2\xD7 compute). Storage \u20B96.20/GB-month on NVMe; backup storage beyond the included allowance \u20B92.00/GB-month.</p>\r
   </div>\r
   <aside class="calc" aria-label="Price estimate">\r
    <h3>Your estimate</h3>\r
    <label for="cPlan">PLAN</label><select id="cPlan" [value]="planCode()" (change)="selectPlan($event)"><option value="rds.s">Small \u2014 2 vCPU / 8 GB</option><option value="rds.m">Medium \u2014 4 vCPU / 16 GB</option><option value="rds.l">Large \u2014 8 vCPU / 32 GB</option><option value="rds.xl">X-Large \u2014 16 vCPU / 64 GB</option><option value="rds.2xl">2X-Large \u2014 32 vCPU / 256 GB</option></select>\r
    <label for="cVer">VERSION</label><select id="cVer" [value]="version()" (change)="version.set($any($event.target).value)"><option>Redis 7.4</option><option>Redis 7.2</option><option>Redis 6.2 (upgrade path)</option></select>\r
    <label for="cSto">STORAGE</label><input type="range" id="cSto" min="20" max="2000" step="10" [value]="storage()" (input)="storage.set(+$any($event.target).value)"><div class="rv2"><span>NVMe per node</span><b id="cStoV">{{ storage() }} GB</b></div>\r
    <label for="cRep">READ REPLICAS</label><input type="range" id="cRep" min="0" max="4" step="1" [value]="replicas()" (input)="replicas.set(+$any($event.target).value)"><div class="rv2"><span>Replicas</span><b id="cRepV">{{ replicas() }}</b></div>\r
    <div style="margin-top:14px">\r
     <div class="ln2"><span id="eN">Compute \xB7 {{ nodes() }} nodes ({{ ha() ? 'HA' : 'standalone' }})</span><b id="eC">{{ money(computeCost()) }}</b></div><div class="ln2"><span>Storage</span><b id="eS">{{ money(storageCost()) }}</b></div><div class="ln2"><span>Backups &amp; PITR</span><b>Included</b></div>\r
    </div>\r
    <div class="tot"><span>Est. monthly</span><b id="eT">{{ money(total()) }}</b></div><small style="color:#9FB8D8" id="eH">\u2248 {{ hourly(total() / 730) }}/hour \xB7 excl. GST</small>\r
    <a class="btn btn-primary" href="#lead" (click)="scrollTo('lead', $event)" id="eGo">Get this database \u2192</a>\r
   </aside>\r
  </div>\r
 </section>\r
\r
 <h2 class="h2s">Ideal <em>use cases</em></h2>\r
 <div class="u6"><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 12h18M12 4v16"/></svg></span><h3>Web &amp; SaaS applications</h3><p>Cache pages, API responses and database queries for faster apps.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg></span><h3>Real-time data streams</h3><p>Redis Streams and pub/sub for live feeds, notifications and event pipelines.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></span><h3>Analytics &amp; leaderboards</h3><p>Counters, sorted sets and HyperLogLog for live dashboards and rankings.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.4 11h11l2-8H6"/></svg></span><h3>E-commerce</h3><p>Carts, sessions, inventory counters and flash-sale rate limiting.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12M6 9h12M9 4c6 0 6 10 0 10H6l9 7"/></svg></span><h3>Fintech &amp; payments</h3><p>Low-latency lookups, idempotency keys and fraud-check caches.</p></div><div class="rv" xhReveal><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.6 4 2.6 4 6"/></svg></span><h3>Sessions &amp; authentication</h3><p>Fast session storage and token caches shared across app servers.</p></div></div>\r
\r
 <h2 class="h2s">Migration, security <em>&amp; access</em></h2>\r
 <div class="two">\r
  <div class="rv" xhReveal><h3><span><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>Expert migration support</h3><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Sizing for memory, throughput and persistence needs</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Configuration of eviction, persistence and access</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Data sync from your existing Redis or ElastiCache</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Cutover planning with minimal disruption</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Validation and production go-live support</span></li></ul></div>\r
  <div class="rv" xhReveal><h3><span><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span>Secure by design</h3><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Encryption at rest and TLS in transit</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Isolated private network (VPC) environments</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>ACL users and role-based access control</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>IP allow-listing</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Compliance-ready operations \u2014 ISO 27001 provider</span></li></ul></div>\r
  <div class="rv" xhReveal><h3><span><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>Access &amp; management</h3><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Manage through the XcellHost panel</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Connection strings for every client</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Live memory, latency and hit-ratio graphs</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>One-click backups and restores</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>CLI and API for automation</span></li></ul></div>\r
 </div>\r
 <p style="text-align:center;color:var(--slate);margin-top:14px;font-size:14px">Works with redis-cli, Redis Insight, and official clients for Node.js, Python, Java, Go, PHP and .NET.</p>\r
\r
 <section class="gband rv" xhReveal style="background-image:url('/assets/images/managed-redis/sentinel-background.jpg')">\r
  <h2>Sentinel keeps you serving</h2>\r
  <p>If the primary fails, Sentinel promotes the replica within seconds and your clients reconnect \u2014 no manual failover at 3 am.</p>\r
  <div class="gstats"><div><b>Governed</b><span>access, audit and tested restores</span></div><div><b>Sovereign</b><span>data stays in India</span></div><div><b>Predictable</b><span>flat monthly plan price</span></div><div><b>24\xD77</b><span>engineers in Mumbai</span></div></div>\r
 </section>\r
\r
 <h2 class="h2s">What each team gets from <em>Redis</em></h2>\r
 <div class="aud-t" role="tablist"><button type="button" role="tab" id="at-cxo" aria-controls="ap-cxo" [attr.aria-selected]="audience() === 'cxo'" [attr.tabindex]="audience() === 'cxo' ? 0 : -1" (click)="audience.set('cxo')" (keydown)="onTabKey($event, 'cxo')">Leadership</button><button type="button" role="tab" id="at-it" aria-controls="ap-it" [attr.aria-selected]="audience() === 'it'" [attr.tabindex]="audience() === 'it' ? 0 : -1" (click)="audience.set('it')" (keydown)="onTabKey($event, 'it')">IT &amp; engineering</button><button type="button" role="tab" id="at-fin" aria-controls="ap-fin" [attr.aria-selected]="audience() === 'fin'" [attr.tabindex]="audience() === 'fin' ? 0 : -1" (click)="audience.set('fin')" (keydown)="onTabKey($event, 'fin')">Finance</button><button type="button" role="tab" id="at-risk" aria-controls="ap-risk" [attr.aria-selected]="audience() === 'risk'" [attr.tabindex]="audience() === 'risk' ? 0 : -1" (click)="audience.set('risk')" (keydown)="onTabKey($event, 'risk')">Risk &amp; compliance</button></div>\r
 <div class="aud-p" role="tabpanel" id="ap-cxo" aria-labelledby="at-cxo" [hidden]="audience() !== 'cxo'"><div><div class="who">CEO \xB7 CTO \xB7 CIO</div><h3>Leadership</h3></div><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Revenue-critical database run to an agreed standard</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Data stays in India</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>One predictable INR bill</span></li></ul></div><div class="aud-p" role="tabpanel" id="ap-it" aria-labelledby="at-it" [hidden]="audience() !== 'it'"><div><div class="who">IT managers \xB7 Admins \xB7 DevOps</div><h3>IT &amp; engineering</h3></div><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Failover, backups and patching handled</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Replicas added for peaks and removed after</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>CLI/API for pipelines</span></li></ul></div><div class="aud-p" role="tabpanel" id="ap-fin" aria-labelledby="at-fin" [hidden]="audience() !== 'fin'"><div><div class="who">Founders \xB7 Finance \xB7 Accounts</div><h3>Finance</h3></div><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Flat monthly price per plan \u2014 no metered surprises</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>GST invoice in INR</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Scale for peak season, scale back after</span></li></ul></div><div class="aud-p" role="tabpanel" id="ap-risk" aria-labelledby="at-risk" [hidden]="audience() !== 'risk'"><div><div class="who">CISO \xB7 Audit \xB7 Compliance</div><h3>Risk &amp; compliance</h3></div><ul><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Encryption, access logs and drill-verified restores</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>Indian data residency for DPDP Act obligations</span></li><li><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span>ISO 27001 and ISO 20000-1 certified provider</span></li></ul></div>\r
\r
 <h2 class="h2s">Build more around <em>every database</em></h2>\r
 <div class="bt"><a class="rv" xhReveal routerLink="/performance-cloud"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"/></svg></span><div><b>Performance Cloud</b><span>App and web servers next to your database on the same private network.</span></div></a><a class="rv" xhReveal routerLink="/performance-cloud" fragment="pricing"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg></span><div><b>Block &amp; object storage</b><span>NVMe volumes and S3-compatible storage for dumps and media.</span></div></a><a class="rv" xhReveal routerLink="/cloud-backup"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z"/></svg></span><div><b>Cloud Backup</b><span>Policy-based copies of databases to a separate location.</span></div></a><a class="rv" xhReveal routerLink="/cloud-disaster-recovery"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg></span><div><b>Disaster Recovery</b><span>Keep database services recoverable across sites.</span></div></a><a class="rv" xhReveal routerLink="/virtual-firewalls"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6"/></svg></span><div><b>Virtual Firewalls</b><span>Segment database networks with explicit policies.</span></div></a><a class="rv" xhReveal routerLink="/managed-postgresql"><span class="ic"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/></svg></span><div><b>Managed PostgreSQL</b><span>Your system of record, with Redis caching in front.</span></div></a></div>\r
\r
</div></div>\r
\r
<xh-managed-redis-tail [configuration]="configuration()" />\r
\r
</main>\r
`, styles: ['/* src/app/pages/managed-redis.page.css */\n:host {\n  --navy:#041E42;\n  --blue:#1565D8;\n  --blue-2:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --ice:#F2F6FC;\n  --line:#DCE5F2;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --orange:#FF8C1A;\n  --red:#E60012;\n  --ok:#2ECC71;\n  --h2:#080D2C;\n  --foot:#3B63E8;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --pop:"Poppins",sans-serif;\n  --bg:#fff;\n  --card:#fff;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:host {\n  display: block;\n  scroll-behavior: smooth;\n}\n:host {\n  overflow-x: clip;\n}\n:host {\n  font-family: var(--body);\n  color: var(--ink);\n  background: var(--bg);\n  font-size: 16px;\n  line-height: 1.55;\n  -webkit-font-smoothing: antialiased;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n.wrap {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.xg-ico {\n  width: 18px;\n  height: 18px;\n  flex: none;\n  stroke: currentColor;\n  fill: none;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font: 600 14px var(--body);\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n  transition: .15s;\n  white-space: nowrap;\n}\n.btn-primary {\n  background: var(--orange);\n  color: #fff;\n  animation: glow 2.8s ease-in-out infinite;\n}\n.btn-primary:hover {\n  background: #E97A08;\n}\n.btn-ghost {\n  border-color: var(--line);\n  color: var(--navy);\n  background: transparent;\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.cta-band .btn-ghost {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n  background: rgba(255, 255, 255, .06);\n}\n.cta-band .btn-ghost:hover {\n  border-color: #fff;\n}\n@keyframes glow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n.hero-ctas {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pp-body {\n  padding: 18px 0 35px;\n}\n.pp-sec {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 44px 0 16px;\n}\n.h2s {\n  color: var(--h2);\n  font: 600 clamp(22px, 2.2vw, 28px)/1.25 var(--pop);\n  text-align: center;\n  margin: 56px 0 24px;\n}\n.h2s em {\n  font-style: normal;\n  color: var(--blue);\n}\n.pp-answer {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 28px;\n  border: 1px solid var(--line);\n  border-left: 4px solid var(--blue);\n  border-radius: 14px;\n  padding: 26px 28px;\n  background: var(--card);\n  box-shadow: 0 8px 24px rgba(16, 43, 79, .06);\n  margin-top: 26px;\n}\n.pp-answer h2 {\n  font: 600 22px/1.3 var(--pop);\n  color: var(--h2);\n  margin: 6px 0 10px;\n}\n.pp-answer p {\n  color: var(--slate);\n  font-size: 15.5px;\n  line-height: 1.7;\n}\n.pp-answer .kick {\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  color: var(--blue);\n}\n.pp-answer ul {\n  list-style: none;\n  display: grid;\n  gap: 9px;\n  margin: 8px 0 14px;\n}\n.pp-answer li {\n  display: flex;\n  gap: 9px;\n  font-size: 14.5px;\n}\n.pp-answer li .xg-ico {\n  color: #16A34A;\n  margin-top: 2px;\n}\n.bestfor {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: center;\n  font-size: 12.5px;\n}\n.bestfor span {\n  color: var(--slate);\n  font-weight: 600;\n}\n.bestfor b {\n  background: var(--blue-soft);\n  color: var(--blue);\n  border-radius: 99px;\n  padding: 3px 10px;\n  font-weight: 600;\n}\n.form input,\n.form select,\n.form textarea {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: var(--card);\n  color: var(--ink);\n  font: 14.5px var(--body);\n}\n.faqs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.faqs details {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--card);\n  transition: .15s;\n}\n.faqs details[open] {\n  border-color: var(--blue);\n  box-shadow: 0 6px 18px rgba(21, 101, 216, .08);\n}\n.faqs summary {\n  cursor: pointer;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  font: 600 14.5px var(--pop);\n  color: var(--h2);\n}\n.faqs summary::-webkit-details-marker {\n  display: none;\n}\n.faqs summary:after {\n  content: "+";\n  flex: none;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n  transition: .2s;\n}\n.faqs details[open] summary:after {\n  content: "\\d7";\n  background: var(--blue);\n  color: #fff;\n}\n.faqs .ans {\n  padding: 0 18px 16px;\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.rel {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  margin-top: 22px;\n  font-size: 13px;\n}\n.rel span {\n  font-weight: 600;\n  color: var(--slate);\n}\n.rel a {\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 5px 12px;\n  color: var(--blue);\n  background: var(--card);\n}\n.rel a:hover {\n  border-color: var(--blue);\n}\n.cta-band {\n  margin-top: 50px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      var(--blue-2));\n  color: #fff;\n  border-radius: 18px;\n  padding: 40px 44px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 34px;\n  position: relative;\n  overflow: hidden;\n}\n.cta-band:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 100% 0,\n      #000,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      circle at 100% 0,\n      #000,\n      transparent 70%);\n}\n.cta-band > * {\n  position: relative;\n  min-width: 0;\n}\n.cta-band h2 {\n  font: 700 26px/1.25 var(--disp);\n  margin-bottom: 6px;\n}\n.cta-band p {\n  color: #CFE0FA;\n  font-size: 14.5px;\n}\n.cta-band .hero-ctas {\n  margin-top: 20px;\n}\n.cta-band ul {\n  list-style: none;\n  display: grid;\n  gap: 8px;\n  margin-top: 18px;\n  font-size: 14px;\n  color: #E3EDFD;\n}\n.cta-band li {\n  display: flex;\n  gap: 8px;\n}\n.cta-band li .xg-ico {\n  color: #FFD9AC;\n}\n.form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 14px;\n  padding: 18px;\n}\n.form .full {\n  grid-column: 1/-1;\n}\n.form input,\n.form select,\n.form textarea {\n  background: #fff;\n  color: var(--navy);\n  border-color: #fff;\n}\n.form small {\n  color: #CFE0FA;\n  font-size: 11.5px;\n}\n.ok-msg {\n  display: none;\n  grid-column: 1/-1;\n  background: #16A34A;\n  border-radius: 9px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.rv {\n  opacity: 1;\n  transform: none;\n  transition: opacity .6s, transform .6s;\n}\n.rv.reveal:not(.in) {\n  opacity: 0;\n  transform: translateY(16px);\n}\n@media (max-width: 1000px) {\n  .pp-answer,\n  .cta-band {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 700px) {\n  .wrap {\n    padding: 0 16px;\n  }\n  .hero-ctas {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 6px;\n  }\n  .faqs {\n    grid-template-columns: 1fr;\n  }\n  .cta-band {\n    padding: 26px 18px;\n  }\n  .form {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gband {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  padding: 44px 40px;\n  color: #fff;\n  margin-top: 56px;\n}\n.gband:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(4, 30, 66, .95),\n      rgba(4, 30, 66, .7) 60%,\n      rgba(4, 30, 66, .35));\n}\n.gband > * {\n  position: relative;\n  z-index: 2;\n}\n.gband h2 {\n  font: 700 clamp(24px, 2.6vw, 34px)/1.2 var(--disp);\n  max-width: 640px;\n}\n.gband p {\n  color: #C7D5EC;\n  max-width: 640px;\n  margin: 10px 0 20px;\n}\n.gstats {\n  display: flex;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.gstats div b {\n  display: block;\n  font: 800 30px var(--disp);\n  color: #FFB45C;\n}\n.gstats div span {\n  font-size: 12.5px;\n  color: #C7D5EC;\n}\n.cta-photo {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n}\n.cta-photo:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      100deg,\n      rgba(4, 30, 66, .96),\n      rgba(4, 30, 66, .9) 55%,\n      rgba(4, 30, 66, .8));\n  background-size: auto;\n  -webkit-mask-image: none;\n  mask-image: none;\n  z-index: 1;\n}\n.cta-photo > * {\n  position: relative;\n  z-index: 2;\n}\n.photo-credit {\n  font-size: 10.5px;\n  color: #8FA2BD;\n  margin-top: 14px;\n}\n@media (max-width: 700px) {\n  .gband {\n    padding: 28px 20px;\n  }\n}\n.pg-hero {\n  position: relative;\n  overflow: hidden;\n  background: #041E42;\n  color: #fff;\n  padding: 66px 0 76px;\n}\n.pg-hero .bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: .3;\n  animation: kb 30s ease-in-out infinite alternate;\n}\n@keyframes kb {\n  from {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1.16) translate(-2%, 1%);\n  }\n}\n.pg-hero:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 80% 30%,\n      rgba(51, 103, 145, .55),\n      transparent 55%),\n    linear-gradient(\n      90deg,\n      rgba(4, 30, 66, .97) 35%,\n      rgba(4, 30, 66, .6));\n}\n.pg-hero .wrap {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 40px;\n  align-items: center;\n}\n.pg-hero .crumb {\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n  color: #9CC8FF;\n  margin-bottom: 14px;\n}\n.pg-hero .crumb a {\n  color: #9CC8FF;\n}\n.pg-hero h1 {\n  font: 800 clamp(32px, 4.2vw, 54px)/1.08 var(--disp);\n  letter-spacing: -.02em;\n}\n.pg-hero h1 em {\n  font-style: normal;\n  color: #FFB45C;\n}\n.pg-hero .sub {\n  margin: 16px 0 20px;\n  font-size: 17px;\n  color: #C7D5EC;\n  max-width: 600px;\n}\n.pg-price {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 8px;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 12px;\n  padding: 10px 16px;\n  margin-bottom: 22px;\n}\n.pg-price small {\n  color: #9FB8D8;\n  font-size: 13px;\n}\n.pg-price b {\n  font: 800 28px var(--disp);\n  color: #FFB45C;\n}\n.pg-hero .hero-ctas {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pg-hero .btn-ghost {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .5);\n  background: rgba(255, 255, 255, .06);\n}\n.pg-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 22px;\n}\n.pg-chips span {\n  font: 600 12px var(--mono);\n  padding: 5px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  border: 1px solid rgba(255, 255, 255, .16);\n  color: #DCE7F8;\n}\n.clu {\n  background: rgba(9, 24, 52, .85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(156, 200, 255, .22);\n  border-radius: 18px;\n  padding: 16px;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .4);\n}\n.clu-h {\n  display: flex;\n  justify-content: space-between;\n  font: 700 11.5px var(--mono);\n  letter-spacing: .1em;\n  color: #9CC8FF;\n  margin-bottom: 8px;\n}\n.clu-h b {\n  color: #4ADE80;\n}\n.clu svg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.clu .nd rect {\n  fill: #0E2F63;\n  stroke: #3E6FB5;\n  stroke-width: 1.2;\n}\n.clu .nd.pri rect {\n  fill: #1565D8;\n  stroke: #9CC8FF;\n}\n.clu .nd text {\n  fill: #fff;\n  font:\n    600 11px Inter,\n    system-ui,\n    sans-serif;\n}\n.clu .nd .t2 {\n  fill: #9FB8D8;\n  font: 500 9.5px ui-monospace, monospace;\n}\n.clu .ln {\n  stroke: #3E6FB5;\n  stroke-width: 1.5;\n  stroke-dasharray: 4 4;\n  fill: none;\n}\n.clu .dot {\n  fill: #FFB45C;\n}\n.term {\n  margin-top: 10px;\n  background: #061329;\n  border-radius: 12px;\n  padding: 12px 14px;\n  font: 500 12px/1.65 var(--mono);\n  color: #9CC8FF;\n  height: 132px;\n  overflow: hidden;\n}\n.term .p {\n  color: #4ADE80;\n}\n.stat4 {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: -38px;\n  position: relative;\n  z-index: 2;\n}\n.stat4 div {\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 18px 20px;\n  box-shadow: 0 18px 40px rgba(4, 30, 66, .1);\n}\n.stat4 b {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--blue);\n}\n.stat4 span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.c10 {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 14px;\n}\n.c10 div {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      170deg,\n      var(--card) 55%,\n      var(--ice));\n  transition: .2s;\n}\n.c10 div:hover {\n  transform: translateY(-4px);\n  border-color: var(--blue);\n  box-shadow: 0 14px 30px rgba(21, 101, 216, .1);\n}\n.c10 .ic {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: var(--blue);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.c10 h3 {\n  font: 600 15px var(--pop);\n  color: var(--h2);\n  margin-bottom: 6px;\n}\n.c10 p {\n  font-size: 13.2px;\n  color: var(--slate);\n}\n.arch {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.arch article {\n  border: 1.5px solid var(--line);\n  border-radius: 18px;\n  padding: 22px;\n  background: var(--card);\n  cursor: pointer;\n  transition: .2s;\n  position: relative;\n}\n.arch article.on {\n  border-color: var(--blue);\n  box-shadow: 0 16px 36px rgba(21, 101, 216, .14);\n}\n.arch .tag {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font: 700 10.5px var(--mono);\n  padding: 4px 9px;\n  border-radius: 999px;\n  background: #FFF3E3;\n  color: #B45309;\n}\n.arch .dia {\n  height: 74px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  border-radius: 12px;\n  background: var(--ice);\n}\n.arch .dia i {\n  width: 34px;\n  height: 40px;\n  border-radius: 7px;\n  background: #0E2F63;\n  position: relative;\n}\n.arch .dia i.p {\n  background: var(--blue);\n}\n.arch .dia i.r {\n  background: #94B8E8;\n  width: 28px;\n  height: 32px;\n}\n.arch .dia i:after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  right: 6px;\n  top: 8px;\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, .5);\n  box-shadow: 0 7px 0 rgba(255, 255, 255, .5), 0 14px 0 rgba(255, 255, 255, .5);\n}\n.arch h3 {\n  font: 700 18px var(--pop);\n  color: var(--h2);\n}\n.arch .best {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin: 6px 0 12px;\n}\n.arch ul {\n  list-style: none;\n}\n.arch li {\n  display: flex;\n  gap: 8px;\n  font-size: 14px;\n  padding: 4px 0;\n}\n.arch li svg {\n  color: #16A34A;\n  flex: none;\n  width: 17px;\n  height: 17px;\n  margin-top: 2px;\n}\n.mdl {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.mdl article {\n  border-radius: 20px;\n  padding: 28px;\n  border: 1px solid var(--line);\n  background: var(--card);\n  position: relative;\n  overflow: hidden;\n}\n.mdl article:nth-child(2) {\n  background:\n    linear-gradient(\n      145deg,\n      #062452,\n      #0B3B82);\n  color: #DCE7F8;\n  border: 0;\n}\n.mdl .no {\n  font: 800 12px var(--mono);\n  letter-spacing: .14em;\n  color: var(--blue);\n}\n.mdl article:nth-child(2) .no {\n  color: #FFB45C;\n}\n.mdl h3 {\n  font: 800 26px var(--disp);\n  color: var(--h2);\n  margin: 4px 0;\n}\n.mdl article:nth-child(2) h3 {\n  color: #fff;\n}\n.mdl .tg {\n  font: 600 15px var(--pop);\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.mdl article:nth-child(2) .tg {\n  color: #9CC8FF;\n}\n.mdl .bdg {\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  font: 700 10.5px var(--mono);\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #FF8C1A;\n  color: #fff;\n}\n.mdl p {\n  font-size: 14.5px;\n  margin-bottom: 14px;\n}\n.mdl .bf {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.mdl .bf span {\n  font: 600 12px var(--pop);\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--ice);\n  color: var(--h2);\n}\n.mdl article:nth-child(2) .bf span {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.mdl .pl {\n  display: grid;\n  gap: 8px;\n}\n.mdl .pl div {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--line);\n  font-size: 13.5px;\n}\n.mdl article:nth-child(2) .pl div {\n  border-color: rgba(255, 255, 255, .16);\n}\n.mdl .pl b {\n  font-weight: 700;\n}\n.own {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: auto;\n  background: var(--card);\n  margin-top: 18px;\n}\n.own table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n  font-size: 14px;\n}\n.own th,\n.own td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n}\n.own th {\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n}\n.own td:not(:first-child) {\n  text-align: center;\n  width: 180px;\n}\n.own .us {\n  color: #15803D;\n  font-weight: 700;\n}\n.own .you {\n  color: var(--blue);\n  font-weight: 700;\n}\n.own .shared {\n  color: #B45309;\n  font-weight: 700;\n}\n.pz {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);\n  gap: 22px;\n  align-items: start;\n}\n.pz > * {\n  min-width: 0;\n}\n.pt .sp {\n  display: none;\n}\n.pz-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.seg {\n  display: inline-flex;\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 4px;\n}\n.seg button {\n  border: 0;\n  background: none;\n  padding: 8px 14px;\n  border-radius: 9px;\n  font: 600 13.5px var(--pop);\n  color: var(--slate);\n  cursor: pointer;\n}\n.seg button[aria-pressed=true] {\n  background: var(--card);\n  color: var(--blue);\n  box-shadow: 0 2px 8px rgba(4, 30, 66, .1);\n}\n.pt {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: auto;\n  background: var(--card);\n}\n.pt table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.pt th,\n.pt td {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--line);\n  text-align: left;\n  font-size: 14px;\n}\n.pt th {\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n}\n.pt .pr small {\n  display: inline;\n  margin-left: 2px;\n}\n.pt td b {\n  font: 700 15px var(--pop);\n  color: var(--h2);\n}\n.pt td small {\n  display: block;\n  color: var(--slate);\n  font-size: 12.5px;\n}\n.pt .pr {\n  font: 800 18px var(--disp);\n  color: var(--h2);\n  white-space: nowrap;\n}\n.pt .pr small {\n  font: 500 12px var(--pop);\n  display: inline;\n}\n.pt tr.sel {\n  background: var(--blue-soft);\n}\n.pt tr {\n  cursor: pointer;\n}\n.pt .go {\n  border: 1.5px solid var(--blue);\n  border-radius: 8px;\n  padding: 6px 12px;\n  color: var(--blue);\n  font: 600 13px var(--pop);\n  background: none;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.pt tr.sel .go {\n  background: var(--blue);\n  color: #fff;\n}\n.pnote {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-top: 10px;\n}\n.calc {\n  position: sticky;\n  top: 96px;\n  border-radius: 18px;\n  background: var(--navy);\n  color: #DCE7F8;\n  padding: 22px;\n}\n.calc h3 {\n  font: 700 17px var(--pop);\n  color: #fff;\n  margin-bottom: 14px;\n}\n.calc label {\n  display: block;\n  font: 700 11px var(--mono);\n  letter-spacing: .1em;\n  color: #9FB8D8;\n  margin: 12px 0 6px;\n}\n.calc select,\n.calc input[type=range] {\n  width: 100%;\n}\n.calc select {\n  background: #0E2F63;\n  color: #fff;\n  border: 1px solid #3E6FB5;\n  border-radius: 10px;\n  padding: 9px 10px;\n  font: 500 14px var(--pop);\n}\n.calc .rv2 {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.calc .rv2 b {\n  color: #fff;\n}\n.calc input[type=range] {\n  accent-color: #FF8C1A;\n}\n.calc .ln2 {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13.5px;\n  padding: 6px 0;\n  border-bottom: 1px dashed rgba(255, 255, 255, .14);\n}\n.calc .tot {\n  margin-top: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.calc .tot b {\n  font: 800 30px var(--disp);\n  color: #FFB45C;\n}\n.calc .btn {\n  width: 100%;\n  justify-content: center;\n  margin-top: 14px;\n}\n.prof {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.prof button {\n  text-align: left;\n  border: 1.5px solid var(--line);\n  background: var(--card);\n  border-radius: 16px;\n  padding: 18px;\n  cursor: pointer;\n  transition: .2s;\n}\n.prof button b {\n  display: block;\n  font: 700 16px var(--pop);\n  color: var(--h2);\n  margin-bottom: 6px;\n}\n.prof button span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.prof button em {\n  display: block;\n  margin-top: 10px;\n  font: 700 12px var(--mono);\n  font-style: normal;\n  color: var(--blue);\n}\n.prof button:hover,\n.prof button.on {\n  border-color: var(--blue);\n  background: var(--blue-soft);\n}\n.u6 {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.u6 div {\n  border-radius: 16px;\n  padding: 22px;\n  background: var(--navy);\n  color: #DCE7F8;\n  position: relative;\n  overflow: hidden;\n}\n.u6 div:after {\n  content: "";\n  position: absolute;\n  right: -30px;\n  top: -30px;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: rgba(255, 140, 26, .14);\n}\n.u6 .ic {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, .1);\n  color: #FFB45C;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.u6 h3 {\n  font: 600 16px var(--pop);\n  color: #fff;\n  margin-bottom: 6px;\n}\n.u6 p {\n  font-size: 13.5px;\n  color: #C7D5EC;\n}\n.two {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.two div {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px;\n  background: var(--card);\n}\n.two h3 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font: 700 19px var(--pop);\n  color: var(--h2);\n  margin-bottom: 12px;\n}\n.two h3 span {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--blue);\n  color: #fff;\n  display: grid;\n  place-items: center;\n}\n.two ul {\n  list-style: none;\n}\n.two li {\n  display: flex;\n  gap: 10px;\n  padding: 7px 0;\n  font-size: 14.5px;\n  border-bottom: 1px dashed var(--line);\n}\n.two li svg {\n  color: #16A34A;\n  flex: none;\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n}\n.aud-t {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.aud-t button {\n  border: 1px solid var(--line);\n  background: var(--card);\n  border-radius: 999px;\n  padding: 9px 18px;\n  font: 600 14px var(--pop);\n  color: var(--h2);\n  cursor: pointer;\n}\n.aud-t button[aria-selected=true] {\n  background: var(--navy);\n  color: #fff;\n  border-color: var(--navy);\n}\n.aud-p {\n  max-width: 820px;\n  margin: 0 auto;\n  border-radius: 18px;\n  border: 1px solid var(--line);\n  background:\n    linear-gradient(\n      170deg,\n      var(--card) 50%,\n      var(--ice));\n  padding: 24px 28px;\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 20px;\n  align-items: center;\n}\n.aud-p[hidden] {\n  display: none !important;\n}\n.aud-p .who {\n  font: 700 12px var(--mono);\n  color: var(--slate);\n  letter-spacing: .06em;\n}\n.aud-p h3 {\n  font: 800 22px var(--disp);\n  color: var(--h2);\n}\n.aud-p ul {\n  list-style: none;\n}\n.aud-p li {\n  display: flex;\n  gap: 10px;\n  padding: 6px 0;\n  font-size: 15px;\n}\n.aud-p li svg {\n  color: var(--blue);\n  flex: none;\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n}\n.bt {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.bt a {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 18px;\n  background: var(--card);\n  transition: .2s;\n}\n.bt a:hover {\n  border-color: var(--blue);\n  transform: translateY(-3px);\n}\n.bt .ic {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  flex: none;\n}\n.bt b {\n  display: block;\n  font: 600 15.5px var(--pop);\n  color: var(--h2);\n}\n.bt span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n@media (max-width: 1100px) {\n  .c10 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .pg-hero .wrap {\n    grid-template-columns: 1fr;\n  }\n  .clu {\n    max-width: 560px;\n  }\n  .pz {\n    grid-template-columns: 1fr;\n  }\n  .calc {\n    position: static;\n  }\n}\n@media (max-width: 900px) {\n  .arch,\n  .u6,\n  .bt,\n  .prof {\n    grid-template-columns: 1fr 1fr;\n  }\n  .mdl,\n  .two {\n    grid-template-columns: 1fr;\n  }\n  .stat4 {\n    grid-template-columns: 1fr 1fr;\n  }\n  .aud-p {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .pt table {\n    min-width: 0;\n  }\n  .pt th:nth-child(2),\n  .pt th:nth-child(3),\n  .pt td:nth-child(2),\n  .pt td:nth-child(3) {\n    display: none;\n  }\n  .pt .sp {\n    display: block;\n    font-weight: 600;\n    color: var(--h2);\n  }\n  .pt th,\n  .pt td {\n    padding: 12px 10px;\n  }\n  .pt .pr {\n    font-size: 16px;\n  }\n  .c10,\n  .arch,\n  .u6,\n  .bt,\n  .prof {\n    grid-template-columns: 1fr;\n  }\n  .pz-bar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .mdl article {\n    padding: 22px;\n  }\n  .mdl .bdg {\n    position: static;\n    display: inline-block;\n    margin-bottom: 8px;\n  }\n}\n.pwd {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 14px;\n}\n.pwd small {\n  font: 700 10.5px var(--mono);\n  letter-spacing: .12em;\n  color: #9FB8D8;\n}\n.pwd span {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 36px;\n  padding: 0 16px;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 0 rgba(4, 30, 66, .08);\n}\n.pwd img.pwd-lg {\n  width: auto;\n  height: 22px;\n  max-width: 130px;\n}\n.pwd b {\n  font: 800 16px var(--disp);\n  color: #0B1B33;\n  letter-spacing: -.01em;\n}\n#pricing,\n#lead,\n#answer,\n#faq {\n  scroll-margin-top: 140px;\n}\n.clu-h b {\n  animation: redis-health 2.8s ease-in-out infinite;\n}\n@keyframes redis-health {\n  50% {\n    text-shadow: 0 0 12px rgba(74, 222, 128, .55);\n  }\n}\n.term {\n  height: 152px;\n}\n:is(a, button, select, input, summary, [role=button]):focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.form :is(input, select):focus-visible {\n  outline-color: #ffb45c;\n}\n.form button:disabled {\n  opacity: .65;\n  cursor: wait;\n  animation: none;\n}\n.clu,\n.pg-hero .wrap > div {\n  min-width: 0;\n}\n@media (max-width: 700px) {\n  .pg-hero {\n    padding: 36px 0 56px;\n  }\n  .pg-hero .wrap {\n    gap: 26px;\n  }\n  .pg-hero .hero-ctas {\n    flex-wrap: wrap;\n    overflow: visible;\n  }\n  .pg-hero .btn {\n    white-space: normal;\n  }\n  .pp-answer {\n    padding: 22px 20px;\n  }\n  .clu {\n    padding: 12px;\n  }\n  .term {\n    font-size: 10px;\n  }\n  .stat4 div {\n    padding: 16px 14px;\n  }\n  .stat4 b {\n    font-size: 23px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .rv.reveal:not(.in) {\n    opacity: 1;\n    transform: none;\n  }\n  .clu .dot {\n    display: none;\n  }\n}\n/*# sourceMappingURL=managed-redis.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagedRedisPage, { className: "ManagedRedisPage", filePath: "src/app/pages/managed-redis.page.ts", lineNumber: 25 });
})();
export {
  ManagedRedisPage
};
//# sourceMappingURL=chunk-DJ6FUZ2K.js.map
