import {
  ChangeDetectionStrategy,
  Component,
  Input,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";

// src/app/sections/geotrust-ev-flex-followup.component.ts
var _forTrack0 = ($index, $item) => $item.initials;
var _forTrack1 = ($index, $item) => $item.question;
function GeoTrustEvFlexFollowupComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u201D");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 10);
    \u0275\u0275text(10, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "blockquote");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const review_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r1.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r1.product);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r1.quote);
  }
}
function GeoTrustEvFlexFollowupComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 11)(1, "h3")(2, "button", 12);
    \u0275\u0275domListener("click", function GeoTrustEvFlexFollowupComponent_For_12_Template_button_click_2_listener() {
      const \u0275$index_38_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFaq(\u0275$index_38_r3));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementStart(4, "span", 13);
    \u0275\u0275text(5, "+");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "div", 14)(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const faq_r5 = ctx.$implicit;
    const \u0275$index_38_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r3.openQuestions().has(\u0275$index_38_r3));
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("id", ctx_r3.idPrefix() + "-faq-question-" + \u0275$index_38_r3);
    \u0275\u0275attribute("aria-expanded", ctx_r3.openQuestions().has(\u0275$index_38_r3))("aria-controls", ctx_r3.idPrefix() + "-faq-answer-" + \u0275$index_38_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r5.question);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("id", ctx_r3.idPrefix() + "-faq-answer-" + \u0275$index_38_r3)("hidden", !ctx_r3.openQuestions().has(\u0275$index_38_r3));
    \u0275\u0275attribute("aria-labelledby", ctx_r3.idPrefix() + "-faq-question-" + \u0275$index_38_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r5.answer);
  }
}
var GeoTrustEvFlexFollowupComponent = class _GeoTrustEvFlexFollowupComponent {
  idPrefix = input("geotrust-ev", ...ngDevMode ? [{ debugName: "idPrefix" }] : []);
  // Existing GeoTrust feedback keeps the customer's original product and wording.
  reviews = [
    {
      initials: "RS",
      name: "Retail & Payments Team",
      product: "E-commerce \xB7 EV SSL",
      quote: "The EV certificate lifted checkout trust noticeably. XcellHost handled the whole business validation and installed it on our load balancer the same week."
    },
    {
      initials: "IT",
      name: "IT Operations",
      product: "SaaS \xB7 Wildcard SSL",
      quote: "One wildcard now covers all our subdomains and the automation renews it for us. We haven't had a single expiry incident since we moved to XcellHost."
    },
    {
      initials: "FC",
      name: "Finance Controller",
      product: "NBFC \xB7 OV SSL",
      quote: "Transparent INR pricing, a proper GST invoice and quick support. Renewals are now completely hands-off for our team."
    }
  ];
  faqs = input([
    {
      question: "What is GeoTrust TrueBusiness ID EV (FLEX)?",
      answer: "It's GeoTrust's Extended Validation SSL certificate with a flexible name list. One certificate carries your verified legal company identity and between 1 and 250 fully qualified domain names, which you can add to during the term."
    },
    {
      question: "How is FLEX different from a multi-domain EV certificate?",
      answer: "A classic multi-domain EV order usually starts as a three-name bundle. FLEX lets you start with one or two names and pay for exactly what you list, then add more names as your business grows."
    },
    {
      question: "Can I add a wildcard or an IP address?",
      answer: "No. EV FLEX covers exact domain names only. Wildcards and IP addresses need a suitable DV or OV certificate alongside EV. XcellHost can help plan the right combination."
    },
    {
      question: "How quickly is an EV FLEX certificate issued?",
      answer: "First-time EV usually takes 1\u20135 business days, depending on how quickly company records match and the verification call connects. Each domain must also pass a control check."
    },
    {
      question: "Do you install the certificate on my servers?",
      answer: "XcellHost offers installation on cPanel, Plesk, IIS, Nginx, Apache, load balancers and other supported platforms. Add installation in the configurator. Server licences are unlimited for the names covered by your certificate."
    },
    {
      question: "Can I add domains after the certificate is issued?",
      answer: "Yes, up to 250 in total. Each new name passes a domain-control check, and the certificate is reissued with the updated list. Your quotation confirms the cost of the additional names."
    },
    {
      question: "Do I get a GST invoice?",
      answer: "Yes. XcellHost bills in Indian rupees and provides a GST invoice. The configurator shows certificate, SAN and installation costs, plus 18% GST and the payable total."
    },
    {
      question: "What happens when my certificate expires during the term?",
      answer: "A multi-year purchase is a subscription. You receive fresh certificates through the purchased term, with free reissues. XcellHost can manage each reissue and installation, or help set up ACME automation."
    }
  ], ...ngDevMode ? [{ debugName: "faqs" }] : []);
  openQuestions = signal(/* @__PURE__ */ new Set([0]), ...ngDevMode ? [{ debugName: "openQuestions" }] : []);
  toggleFaq(index) {
    this.openQuestions.update((current) => {
      const next = new Set(current);
      if (next.has(index))
        next.delete(index);
      else
        next.add(index);
      return next;
    });
  }
  static \u0275fac = function GeoTrustEvFlexFollowupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoTrustEvFlexFollowupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeoTrustEvFlexFollowupComponent, selectors: [["xh-geotrust-ev-flex-followup"]], inputs: { idPrefix: [1, "idPrefix"], faqs: [1, "faqs"] }, decls: 13, vars: 6, consts: [[1, "followup-wrap"], [3, "id"], [1, "section-label", 3, "id"], [1, "reviews-grid"], [1, "review-card"], [1, "faq-grid"], [1, "faq-card", 3, "open"], ["aria-hidden", "true", 1, "quote-badge"], ["aria-hidden", "true", 1, "review-avatar"], [1, "review-product"], ["aria-label", "5 out of 5 stars", 1, "review-stars"], [1, "faq-card"], ["type", "button", 3, "click", "id"], ["aria-hidden", "true", 1, "faq-icon"], ["role", "region", 3, "id", "hidden"], [1, "faq-answer"]], template: function GeoTrustEvFlexFollowupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275text(3, "What customers say");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3);
      \u0275\u0275repeaterCreate(5, GeoTrustEvFlexFollowupComponent_For_6_Template, 13, 4, "article", 4, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "section", 1)(8, "h2", 2);
      \u0275\u0275text(9, "Frequently asked questions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 5);
      \u0275\u0275repeaterCreate(11, GeoTrustEvFlexFollowupComponent_For_12_Template, 9, 10, "article", 6, _forTrack1);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("id", ctx.idPrefix() + "-feedback");
      \u0275\u0275attribute("aria-labelledby", ctx.idPrefix() + "-feedback-title");
      \u0275\u0275advance();
      \u0275\u0275domProperty("id", ctx.idPrefix() + "-feedback-title");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.reviews);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("id", ctx.idPrefix() + "-faq");
      \u0275\u0275attribute("aria-labelledby", ctx.idPrefix() + "-faq-title");
      \u0275\u0275advance();
      \u0275\u0275domProperty("id", ctx.idPrefix() + "-faq-title");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.faqs());
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --navy:#041E42;\n  --blue:#1565D8;\n  --line:#DCE5F2;\n  --slate:#51607A;\n  --ice:#F2F6FC;\n  --orange:#FF8C1A;\n  color: var(--navy);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.followup-wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: auto;\n  padding: 26px 24px 0;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  scroll-margin-top: 110px;\n}\n.section-label[_ngcontent-%COMP%] {\n  font: 700 12px/1.5 "IBM Plex Mono", monospace;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 0 0 14px;\n}\n.reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.review-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: white;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n  transition: transform .25s, box-shadow .25s;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(4, 30, 66, .1);\n}\n.quote-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 0 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: white;\n  font: 700 48px/1 "Sora", sans-serif;\n  text-align: center;\n  padding-top: 3px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  display: grid;\n  place-items: center;\n  color: white;\n  font: 700 15px "Sora", sans-serif;\n}\n.review-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 14px/1.4 "Sora", sans-serif;\n  text-align: center;\n  margin: 0 0 4px;\n  color: var(--navy);\n}\n.review-product[_ngcontent-%COMP%] {\n  font: 500 11px/1.5 "IBM Plex Mono", monospace;\n  text-align: center;\n  color: var(--slate);\n  margin: 0 0 10px;\n}\n.review-stars[_ngcontent-%COMP%] {\n  color: var(--orange);\n  letter-spacing: 2px;\n  text-align: center;\n  font-size: 13px;\n  margin-bottom: 14px;\n}\nblockquote[_ngcontent-%COMP%] {\n  font: 400 13px/1.65 "IBM Plex Sans", sans-serif;\n  color: var(--navy);\n  text-align: justify;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  align-items: start;\n}\n.faq-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  overflow: hidden;\n  background: white;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq-card.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.faq-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  width: 100%;\n  padding: 18px 20px;\n  background: none;\n  border: 0;\n  text-align: left;\n  color: var(--navy);\n  font: 700 15px/1.5 "Sora", sans-serif;\n  cursor: pointer;\n}\n.faq-icon[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  font-size: 18px;\n  transition: transform .25s;\n}\n.faq-card.open[_ngcontent-%COMP%]   .faq-icon[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: white;\n  transform: rotate(45deg);\n}\n.faq-answer[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 20px 18px;\n  color: var(--slate);\n  font: 400 13.5px/1.65 "IBM Plex Sans", sans-serif;\n}\nbutton[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -4px;\n  border-radius: 12px;\n}\n.dark-mode[_nghost-%COMP%]   .review-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .review-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .faq-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .faq-card[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .review-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .review-card[_ngcontent-%COMP%], \n[data-theme="dark"][_nghost-%COMP%]   .faq-card[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .faq-card[_ngcontent-%COMP%] {\n  background: #0E1630;\n  border-color: #27355A;\n  --navy:#F2F5FB;\n  --slate:#B6C2DA;\n  --ice:#14204A;\n}\n@media (max-width: 760px) {\n  .reviews-grid[_ngcontent-%COMP%], \n   .faq-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .review-card[_ngcontent-%COMP%], \n   .faq-card[_ngcontent-%COMP%], \n   .faq-icon[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .review-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=geotrust-ev-flex-followup.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoTrustEvFlexFollowupComponent, [{
    type: Component,
    args: [{ selector: "xh-geotrust-ev-flex-followup", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="followup-wrap">\r
  <section [id]="idPrefix() + '-feedback'" [attr.aria-labelledby]="idPrefix() + '-feedback-title'">\r
    <h2 class="section-label" [id]="idPrefix() + '-feedback-title'">What customers say</h2>\r
    <div class="reviews-grid">\r
      @for (review of reviews; track review.initials) {\r
        <article class="review-card">\r
          <span class="quote-badge" aria-hidden="true">&rdquo;</span>\r
          <div class="review-avatar" aria-hidden="true">{{ review.initials }}</div>\r
          <h3>{{ review.name }}</h3>\r
          <p class="review-product">{{ review.product }}</p>\r
          <div class="review-stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>\r
          <blockquote>{{ review.quote }}</blockquote>\r
        </article>\r
      }\r
    </div>\r
  </section>\r
  <section [id]="idPrefix() + '-faq'" [attr.aria-labelledby]="idPrefix() + '-faq-title'">\r
    <h2 class="section-label" [id]="idPrefix() + '-faq-title'">Frequently asked questions</h2>\r
    <div class="faq-grid">\r
      @for (faq of faqs(); track faq.question; let index = $index) {\r
        <article class="faq-card" [class.open]="openQuestions().has(index)">\r
          <h3>\r
            <button type="button" [id]="idPrefix() + '-faq-question-' + index"\r
              [attr.aria-expanded]="openQuestions().has(index)"\r
              [attr.aria-controls]="idPrefix() + '-faq-answer-' + index" (click)="toggleFaq(index)">\r
              {{ faq.question }}<span class="faq-icon" aria-hidden="true">+</span>\r
            </button>\r
          </h3>\r
          <div [id]="idPrefix() + '-faq-answer-' + index" [hidden]="!openQuestions().has(index)"\r
            role="region" [attr.aria-labelledby]="idPrefix() + '-faq-question-' + index">\r
            <p class="faq-answer">{{ faq.answer }}</p>\r
          </div>\r
        </article>\r
      }\r
    </div>\r
  </section>\r
</div>\r
`, styles: ['/* src/app/sections/geotrust-ev-flex-followup.component.css */\n:host {\n  display: block;\n  --navy:#041E42;\n  --blue:#1565D8;\n  --line:#DCE5F2;\n  --slate:#51607A;\n  --ice:#F2F6FC;\n  --orange:#FF8C1A;\n  color: var(--navy);\n}\n* {\n  box-sizing: border-box;\n}\n.followup-wrap {\n  max-width: 1240px;\n  margin: auto;\n  padding: 26px 24px 0;\n}\nsection {\n  margin-bottom: 28px;\n  scroll-margin-top: 110px;\n}\n.section-label {\n  font: 700 12px/1.5 "IBM Plex Mono", monospace;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 0 0 14px;\n}\n.reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.review-card {\n  position: relative;\n  min-width: 0;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: white;\n  box-shadow: 0 6px 18px rgba(4, 30, 66, .06);\n  transition: transform .25s, box-shadow .25s;\n}\n.review-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(4, 30, 66, .1);\n}\n.quote-badge {\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 0 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: white;\n  font: 700 48px/1 "Sora", sans-serif;\n  text-align: center;\n  padding-top: 3px;\n}\n.review-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  display: grid;\n  place-items: center;\n  color: white;\n  font: 700 15px "Sora", sans-serif;\n}\n.review-card h3 {\n  font: 700 14px/1.4 "Sora", sans-serif;\n  text-align: center;\n  margin: 0 0 4px;\n  color: var(--navy);\n}\n.review-product {\n  font: 500 11px/1.5 "IBM Plex Mono", monospace;\n  text-align: center;\n  color: var(--slate);\n  margin: 0 0 10px;\n}\n.review-stars {\n  color: var(--orange);\n  letter-spacing: 2px;\n  text-align: center;\n  font-size: 13px;\n  margin-bottom: 14px;\n}\nblockquote {\n  font: 400 13px/1.65 "IBM Plex Sans", sans-serif;\n  color: var(--navy);\n  text-align: justify;\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.faq-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  align-items: start;\n}\n.faq-card {\n  min-width: 0;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  overflow: hidden;\n  background: white;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq-card.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq-card h3 {\n  margin: 0;\n}\n.faq-card button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  width: 100%;\n  padding: 18px 20px;\n  background: none;\n  border: 0;\n  text-align: left;\n  color: var(--navy);\n  font: 700 15px/1.5 "Sora", sans-serif;\n  cursor: pointer;\n}\n.faq-icon {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  font-size: 18px;\n  transition: transform .25s;\n}\n.faq-card.open .faq-icon {\n  background: var(--blue);\n  color: white;\n  transform: rotate(45deg);\n}\n.faq-answer {\n  margin: 0;\n  padding: 0 20px 18px;\n  color: var(--slate);\n  font: 400 13.5px/1.65 "IBM Plex Sans", sans-serif;\n}\nbutton:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -4px;\n  border-radius: 12px;\n}\n:host-context(.dark-mode) .review-card,\n:host-context(.dark-mode) .faq-card,\n:host-context([data-theme="dark"]) .review-card,\n:host-context([data-theme="dark"]) .faq-card {\n  background: #0E1630;\n  border-color: #27355A;\n  --navy:#F2F5FB;\n  --slate:#B6C2DA;\n  --ice:#14204A;\n}\n@media (max-width: 760px) {\n  .reviews-grid,\n  .faq-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .review-card,\n  .faq-card,\n  .faq-icon {\n    transition: none;\n  }\n  .review-card:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=geotrust-ev-flex-followup.component.css.map */\n'] }]
  }], null, { idPrefix: [{ type: Input, args: [{ isSignal: true, alias: "idPrefix", required: false }] }], faqs: [{ type: Input, args: [{ isSignal: true, alias: "faqs", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeoTrustEvFlexFollowupComponent, { className: "GeoTrustEvFlexFollowupComponent", filePath: "src/app/sections/geotrust-ev-flex-followup.component.ts", lineNumber: 10 });
})();

export {
  GeoTrustEvFlexFollowupComponent
};
//# sourceMappingURL=chunk-YFCOG2LG.js.map
