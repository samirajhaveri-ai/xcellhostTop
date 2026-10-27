import "./chunk-CUVUGSTP.js";
import "./chunk-CRL34XPE.js";
import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
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
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/sections/managed-database-sections.component.ts
var _c0 = (a0) => [a0];
var _c1 = (a0) => ({ service: a0, request: "callback" });
var _c2 = (a0) => ({ service: a0, request: "quote" });
var _c3 = (a0) => ({ service: a0, resource: "infosheet" });
var _c4 = (a0) => ({ service: a0, resource: "presentation" });
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.name;
function ManagedDatabaseSectionsComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path");
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
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.body);
  }
}
function ManagedDatabaseSectionsComponent_For_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ManagedDatabaseSectionsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 23);
    \u0275\u0275repeaterCreate(2, ManagedDatabaseSectionsComponent_For_11_For_3_Template, 2, 0, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "cite")(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span")(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.stars);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u201C", review_r2.quote, "\u201D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r2.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r2.role);
  }
}
var DEFAULT_WHY = [
  { title: "24\xD77 database operations", body: "Continuous monitoring of availability, replication, backups and capacity.", icon: "M12 8v4l3 2M12 3a9 9 0 1 0 9 9" },
  { title: "Indian data residency", body: "Production hosting in Indian data centres with INR billing and GST invoices.", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 0c3 3 3 17 0 20m0-20c-3 3-3 17 0 20M2 12h20" },
  { title: "Backup and recovery", body: "Protected backups, monitored jobs and restore testing against your recovery policy.", icon: "M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6" },
  { title: "Migration included", body: "Assessment, rehearsal, controlled cutover and post-migration validation.", icon: "M5 12h14m-6-6 6 6-6 6" },
  { title: "Security by design", body: "Private networking, TLS, encryption at rest and controlled administrator access.", icon: "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" },
  { title: "One accountable team", body: "Infrastructure, database operations, security and support under one SLA.", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8" }
];
var profiles = {
  "managed-mysql": {
    name: "Managed MySQL",
    shortName: "MySQL",
    why: DEFAULT_WHY,
    reviews: [
      { initials: "NK", name: "Neha Kulkarni", role: "CTO, Commerce Platform", quote: "The team moved our busiest MySQL workload with a controlled cutover. Replication, backups and peak-season capacity are now handled without distracting our developers." },
      { initials: "RM", name: "Rohit Mehta", role: "Engineering Lead, SaaS Company", quote: "We have clear visibility into query health and replica lag, and XcellHost responds before a database issue becomes a customer issue." },
      { initials: "AS", name: "Anita Shah", role: "IT Head, Retail Group", quote: "Predictable INR billing and one team for infrastructure and MySQL operations made the service much easier to govern." }
    ],
    faqs: [
      ["What is included with Managed MySQL?", "Provisioning, monitoring, patch planning, automated backups, point-in-time recovery, replication management and 24\xD77 support are included."],
      ["Can you migrate an existing MySQL database?", "Yes. We assess compatibility, rehearse the migration, establish replication where appropriate and perform a controlled low-downtime cutover."],
      ["Do you support high availability and read replicas?", "Yes. Production designs can include an HA pair with automatic failover and additional read replicas for reporting or read-heavy traffic."],
      ["Which MySQL versions are supported?", "Current supported releases, including MySQL 8.4 LTS, are available. Version choice and upgrade sequencing are confirmed during design."],
      ["Can the database be accessed privately?", "Yes. Private connectivity is the default, with VPN or private network access and no public endpoint unless explicitly approved."],
      ["How quickly can data be restored?", "You can restore a scheduled backup or recover to a point in time within the configured retention window. Recovery objectives are agreed during onboarding."]
    ]
  },
  "managed-mariadb": {
    name: "Managed MariaDB",
    shortName: "MariaDB",
    why: DEFAULT_WHY,
    reviews: [
      { initials: "VP", name: "Vikram Patel", role: "Platform Manager, Digital Services", quote: "Our MariaDB cluster is now patched, backed up and monitored consistently. Failover testing gives the team confidence before every major release." },
      { initials: "SJ", name: "Sneha Joshi", role: "Head of Engineering, Marketplace", quote: "XcellHost helped us tune Galera and remove operational bottlenecks we had been carrying for months." },
      { initials: "KA", name: "Karan Arora", role: "IT Director, Services Group", quote: "The managed model gave us one clear owner for the database, private network and recovery plan." }
    ],
    faqs: [
      ["What is included with Managed MariaDB?", "The service covers provisioning, monitoring, updates, backup and recovery, replication or Galera operations, capacity management and 24\xD77 support."],
      ["Do you support MariaDB Galera Cluster?", "Yes. We design and operate multi-node Galera clusters, monitor node state and flow control, and rehearse failure and recovery procedures."],
      ["Can you migrate from MySQL to MariaDB?", "Yes. We validate application, SQL mode, character set, connector and feature compatibility before rehearsing and executing the migration."],
      ["Can MariaDB run on a private network?", "Yes. The standard deployment uses private addressing, restricted administrative paths, TLS and explicit application access rules."],
      ["Are backups and point-in-time recovery included?", "Automated backups are included. Point-in-time recovery is available for supported configurations and retention is set to your needs."],
      ["Can capacity grow without rebuilding the service?", "Yes. Compute, memory and storage can be expanded, and cluster topology can be adjusted as workload demand changes."]
    ]
  },
  "managed-postgresql": {
    name: "Managed PostgreSQL",
    shortName: "PostgreSQL",
    why: DEFAULT_WHY,
    reviews: [
      { initials: "AG", name: "Aarav Gupta", role: "VP Engineering, Fintech", quote: "PostgreSQL failover and PITR are no longer runbooks we hope will work. The XcellHost team tests them and reports the result." },
      { initials: "PM", name: "Priya Menon", role: "Data Lead, Healthcare Technology", quote: "We gained reliable PostGIS and pgvector operations without adding another specialist to the internal team." },
      { initials: "DV", name: "Deepak Verma", role: "CIO, Business Services", quote: "The migration was well rehearsed, downtime stayed inside the agreed window and performance improved after tuning." }
    ],
    faqs: [
      ["What is included with Managed PostgreSQL?", "Provisioning, monitoring, patching, backups, WAL archiving, point-in-time recovery, replication, failover support and performance reviews are included."],
      ["Which PostgreSQL extensions are available?", "Common extensions such as PostGIS, pgvector and pg_stat_statements are supported. Dedicated deployments can accommodate a broader set after review."],
      ["Can you migrate our existing PostgreSQL database?", "Yes. We use a rehearsed approach based on database size, version and downtime tolerance, including logical replication where suitable."],
      ["Do you provide automatic failover?", "Yes. High-availability plans include a standby and managed failover with a stable application endpoint."],
      ["How does point-in-time recovery work?", "Base backups and continuously archived WAL allow recovery to a selected point within the configured retention window."],
      ["Is pgvector suitable for production AI applications?", "Yes for many workloads. We size memory, storage, indexes and connection pooling around your vector count, dimensions and query pattern."]
    ]
  },
  "managed-oracle": {
    name: "Managed Oracle Database",
    shortName: "Oracle",
    why: [
      { title: "Licence-aware architecture", body: "Placement and core allocation designed around your Oracle agreement.", icon: "M7 3h10v18H7zM10 7h4m-4 4h4m-4 4h4" },
      ...DEFAULT_WHY.slice(0, 5)
    ],
    reviews: [
      { initials: "RS", name: "Rajiv Sharma", role: "CIO, Manufacturing Enterprise", quote: "XcellHost brought structure to our Oracle estate\u2014licence-aware placement, tested RMAN restores and a clear Data Guard operating process." },
      { initials: "MN", name: "Meera Nair", role: "Applications Head, Financial Services", quote: "The team understands both the database and the infrastructure underneath it. That has shortened incident resolution considerably." },
      { initials: "SK", name: "Sanjay Kumar", role: "ERP Director, Distribution Group", quote: "Our upgrade and migration were rehearsed end to end. The production cutover was controlled and every fallback step was documented." }
    ],
    faqs: [
      ["What is included with Managed Oracle Database?", "The service can cover hosting, monitoring, patching, RMAN backups, recovery testing, Data Guard operations, performance reviews and optional DBA support."],
      ["Can we bring our existing Oracle licences?", "Yes. BYOL is common. We map deployment topology and core allocation to your agreement and document the resulting licence position."],
      ["Do you support Oracle Data Guard?", "Yes. We can operate a physical standby, monitor transport and apply lag, and rehearse switchover on an agreed schedule."],
      ["How are Oracle backups handled?", "RMAN backups are written to protected storage, monitored for completion and validated through scheduled restore tests."],
      ["Can you take over an existing Oracle environment?", "Yes. We begin with discovery, health and licence mapping, then agree remediation priorities and transition day-to-day operations."],
      ["Will scaling change our licence position?", "No licence-impacting core or placement change is made without review and approval. The revised position is documented first."]
    ]
  }
};
var ManagedDatabaseSectionsComponent = class _ManagedDatabaseSectionsComponent {
  slug = input.required(...ngDevMode ? [{ debugName: "slug" }] : []);
  profile = computed(() => profiles[this.slug()], ...ngDevMode ? [{ debugName: "profile" }] : []);
  stars = [0, 1, 2, 3, 4];
  static \u0275fac = function ManagedDatabaseSectionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagedDatabaseSectionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagedDatabaseSectionsComponent, selectors: [["xh-managed-database-sections"]], inputs: { slug: [1, "slug"] }, decls: 50, vars: 19, consts: [[1, "pp-body", "managed-database-defaults"], [1, "wrap"], ["id", "ppWhyHead", 1, "pp-sec"], ["id", "ppWhy", 1, "pp-why"], [1, "pw"], [1, "pp-sec"], ["id", "ppRevs", 1, "pp-revs"], [1, "prv"], [1, "pp-sec", "pp-faq-heading"], ["id", "ppFaq", 1, "pp-faq"], [3, "faqs"], [1, "managed-database-insights"], [3, "pageSlug", "pageAliases"], [1, "pp-body", "managed-database-cta-wrap"], [1, "pp-cta"], [1, "managed-database-cta-actions"], ["routerLink", "/contact", 1, "btn", "btn-primary", 3, "queryParams"], ["routerLink", "/contact", 1, "btn", "btn-ghost", 3, "queryParams"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.cloud", 1, "btn", "btn-ghost"], [1, "pp-proof"], ["aria-hidden", "true", 1, "pw-ic"], ["viewBox", "0 0 24 24"], ["aria-label", "5 out of 5 stars", 1, "stars"], [1, "rav"]], template: function ManagedDatabaseSectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275repeaterCreate(5, ManagedDatabaseSectionsComponent_For_6_Template, 8, 3, "div", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, ManagedDatabaseSectionsComponent_For_11_Template, 13, 4, "div", 7, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275element(15, "xh-product-faq", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275element(17, "xh-insights-section", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 1)(20, "div", 14)(21, "div")(22, "h3");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "a", 16);
      \u0275\u0275text(28, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 17);
      \u0275\u0275text(30, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 17);
      \u0275\u0275text(32, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 17);
      \u0275\u0275text(34, "\u25A3 Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 18);
      \u0275\u0275text(36, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 19);
      \u0275\u0275text(38, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 20)(40, "span");
      \u0275\u0275text(41, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const database_r4 = ctx.profile();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Why XcellHost for ", database_r4.name);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(database_r4.why);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(database_r4.reviews);
      \u0275\u0275advance(5);
      \u0275\u0275property("faqs", database_r4.faqs);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageSlug", ctx.slug())("pageAliases", \u0275\u0275pureFunction1(9, _c0, database_r4.shortName));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Ready to start with ", database_r4.name, "?");
      \u0275\u0275advance(4);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(11, _c1, ctx.slug()));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(13, _c2, ctx.slug()));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(15, _c3, ctx.slug()));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(17, _c4, ctx.slug()));
    }
  }, dependencies: [RouterLink, InsightsSectionComponent, ProductFaqComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.managed-database-defaults[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n.managed-database-defaults[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%] {\n  margin-top: 56px;\n}\n.managed-database-defaults[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 20px;\n}\n.managed-database-insights[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 8px;\n}\n.managed-database-cta-wrap[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.managed-database-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.managed-database-cta-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n@media (max-width: 640px) {\n  .managed-database-defaults[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%] {\n    margin-top: 38px;\n  }\n  .managed-database-cta-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .managed-database-cta-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 150px;\n  }\n}\n/*# sourceMappingURL=managed-database-sections.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagedDatabaseSectionsComponent, [{
    type: Component,
    args: [{ selector: "xh-managed-database-sections", standalone: true, imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@let database = profile();\r
<div class="pp-body managed-database-defaults">\r
  <div class="wrap">\r
    <div class="pp-sec" id="ppWhyHead">Why XcellHost for {{ database.name }}</div>\r
    <div class="pp-why" id="ppWhy">\r
      @for (item of database.why; track item.title) {\r
        <div class="pw">\r
          <span class="pw-ic" aria-hidden="true">\r
            <svg viewBox="0 0 24 24"><path [attr.d]="item.icon" /></svg>\r
          </span>\r
          <b>{{ item.title }}</b>\r
          <span>{{ item.body }}</span>\r
        </div>\r
      }\r
    </div>\r
\r
    <div class="pp-sec">What customers say</div>\r
    <div class="pp-revs" id="ppRevs">\r
      @for (review of database.reviews; track review.name) {\r
        <div class="prv">\r
          <div class="stars" aria-label="5 out of 5 stars">\r
            @for (star of stars; track star) { <span>\u2605</span> }\r
          </div>\r
          <p>\u201C{{ review.quote }}\u201D</p>\r
          <cite>\r
            <span class="rav">{{ review.initials }}</span>\r
            <span><b>{{ review.name }}</b>{{ review.role }}</span>\r
          </cite>\r
        </div>\r
      }\r
    </div>\r
\r
    <div class="pp-sec pp-faq-heading">Frequently asked questions</div>\r
    <div class="pp-faq" id="ppFaq">\r
      <xh-product-faq [faqs]="database.faqs" />\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="managed-database-insights">\r
  <xh-insights-section [pageSlug]="slug()" [pageAliases]="[database.shortName]" />\r
</div>\r
\r
<div class="pp-body managed-database-cta-wrap">\r
  <div class="wrap">\r
    <div class="pp-cta">\r
      <div>\r
        <h3>Ready to start with {{ database.name }}?</h3>\r
        <p>FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English &amp; Hindi</p>\r
      </div>\r
      <div class="managed-database-cta-actions">\r
        <a class="btn btn-primary" routerLink="/contact" [queryParams]="{ service: slug(), request: 'callback' }">Request a callback</a>\r
        <a class="btn btn-ghost" routerLink="/contact" [queryParams]="{ service: slug(), request: 'quote' }">\u26A1 Buy Now</a>\r
        <a class="btn btn-ghost" routerLink="/contact" [queryParams]="{ service: slug(), resource: 'infosheet' }">\u2B07 Infosheet</a>\r
        <a class="btn btn-ghost" routerLink="/contact" [queryParams]="{ service: slug(), resource: 'presentation' }">\u25A3 Presentation</a>\r
        <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
        <a class="btn btn-ghost" href="mailto:sales@xcellhost.cloud">Email Us</a>\r
      </div>\r
    </div>\r
    <div class="pp-proof">\r
      <span>\u{1F3C5} ISO 27001</span><span>\u{1F3C5} ISO 20000-1</span><span>\u{1F91D} Microsoft Gold Partner</span><span>\u{1F570} Since 1999</span><span>\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/sections/managed-database-sections.component.css */\n:host {\n  display: block;\n}\n.managed-database-defaults {\n  padding-top: 24px;\n}\n.managed-database-defaults .pp-sec {\n  margin-top: 56px;\n}\n.managed-database-defaults .pp-sec:first-child {\n  margin-top: 20px;\n}\n.managed-database-insights {\n  display: block;\n  padding-top: 8px;\n}\n.managed-database-cta-wrap {\n  padding-top: 8px;\n}\n.managed-database-cta-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.managed-database-cta-actions .btn-ghost {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n@media (max-width: 640px) {\n  .managed-database-defaults .pp-sec {\n    margin-top: 38px;\n  }\n  .managed-database-cta-actions {\n    width: 100%;\n  }\n  .managed-database-cta-actions .btn {\n    flex: 1 1 150px;\n  }\n}\n/*# sourceMappingURL=managed-database-sections.component.css.map */\n"] }]
  }], null, { slug: [{ type: Input, args: [{ isSignal: true, alias: "slug", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagedDatabaseSectionsComponent, { className: "ManagedDatabaseSectionsComponent", filePath: "src/app/sections/managed-database-sections.component.ts", lineNumber: 110 });
})();

// src/app/pages/managed-database.page.ts
var _c02 = ["pageFrame"];
var ManagedDatabasePage = class _ManagedDatabasePage {
  frame;
  route = inject(ActivatedRoute);
  router = inject(Router);
  sanitizer = inject(DomSanitizer);
  resizeObserver;
  documentClick;
  slug = this.route.snapshot.data["databaseSlug"];
  pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/managed-databases/${this.slug}.html`);
  pageTitle = this.route.snapshot.data["title"];
  ngAfterViewInit() {
    if (this.frame?.nativeElement.contentDocument?.readyState === "complete") {
      this.onFrameLoad();
    }
  }
  onFrameLoad() {
    const iframe = this.frame?.nativeElement;
    const document = iframe?.contentDocument;
    if (!iframe || !document)
      return;
    this.resizeObserver?.disconnect();
    if (this.documentClick)
      document.removeEventListener("click", this.documentClick);
    const resize = () => {
      const height = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight ?? 0);
      iframe.style.height = `${height}px`;
    };
    resize();
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(document.documentElement);
    if (document.body)
      this.resizeObserver.observe(document.body);
    this.documentClick = (event) => {
      const anchor = event.target?.closest("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download"))
        return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
        return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin)
        return;
      event.preventDefault();
      const path = url.pathname.replace(/^\/assets\/managed-databases\//, "/").replace(/\.html$/, "") || "/";
      void this.router.navigateByUrl(`${path}${url.hash}`);
    };
    document.addEventListener("click", this.documentClick);
    void document.fonts?.ready.then(resize);
    window.setTimeout(resize, 250);
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    const document = this.frame?.nativeElement.contentDocument;
    if (document && this.documentClick)
      document.removeEventListener("click", this.documentClick);
  }
  static \u0275fac = function ManagedDatabasePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagedDatabasePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagedDatabasePage, selectors: [["xh-managed-database-page"]], viewQuery: function ManagedDatabasePage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 3, vars: 3, consts: [["pageFrame", ""], ["scrolling", "no", 1, "database-page", 3, "load", "src", "title"], [3, "slug"]], template: function ManagedDatabasePage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function ManagedDatabasePage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFrameLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-managed-database-sections", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.pageUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx.pageTitle);
      \u0275\u0275advance(2);
      \u0275\u0275property("slug", ctx.slug);
    }
  }, dependencies: [ManagedDatabaseSectionsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #fff;\n}\n.database-page[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  overflow: hidden;\n  background: #fff;\n}\n/*# sourceMappingURL=managed-database.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagedDatabasePage, [{
    type: Component,
    args: [{ selector: "xh-managed-database-page", standalone: true, imports: [ManagedDatabaseSectionsComponent], template: `
    <iframe
      #pageFrame
      class="database-page"
      [src]="pageUrl"
      [title]="pageTitle"
      scrolling="no"
      (load)="onFrameLoad()"
    ></iframe>
    <xh-managed-database-sections [slug]="slug" />
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;0b2ee75bb34217626cfa6b4a1babe7a1d9d268af5e961b93c3c11279d2cd7300;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/managed-database.page.ts */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: #fff;\n}\n.database-page {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  border: 0;\n  overflow: hidden;\n  background: #fff;\n}\n/*# sourceMappingURL=managed-database.page.css.map */\n"] }]
  }], null, { frame: [{
    type: ViewChild,
    args: ["pageFrame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagedDatabasePage, { className: "ManagedDatabasePage", filePath: "src/app/pages/managed-database.page.ts", lineNumber: 51 });
})();
export {
  ManagedDatabasePage
};
//# sourceMappingURL=chunk-VGOF57UF.js.map
