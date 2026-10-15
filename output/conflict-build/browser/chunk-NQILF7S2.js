import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/pages/contact.page.ts
var _forTrack0 = ($index, $item) => $item.city;
function ContactPage_For_360_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 180);
    \u0275\u0275listener("click", function ContactPage_For_360_Template_button_click_0_listener() {
      const \u0275$index_609_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectOffice(\u0275$index_609_r2));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const office_r4 = ctx.$implicit;
    const \u0275$index_609_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.selectedOfficeIndex() === \u0275$index_609_r2);
    \u0275\u0275attribute("aria-selected", ctx_r2.selectedOfficeIndex() === \u0275$index_609_r2)("aria-controls", "office-panel-" + \u0275$index_609_r2)("id", "office-tab-" + \u0275$index_609_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(office_r4.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(office_r4.country);
  }
}
var ContactPage = class _ContactPage {
  overlay = inject(OverlayService);
  route = inject(ActivatedRoute);
  seo = inject(SeoService);
  sanitizer = inject(DomSanitizer);
  timers = [];
  offices = [
    this.createOffice({
      city: "Mumbai",
      country: "India",
      label: "Head office",
      company: "XcellHost Cloud Services Pvt. Ltd.",
      address: "209, Laxmi Plaza, Building No. 9, Laxmi Industrial Estate, Andheri West, Mumbai 400053, Maharashtra, India",
      phoneDisplay: "+91 22 6711 1555",
      phoneHref: "+912267111555",
      email: "sales@xcellhost.cloud"
    }),
    this.createOffice({
      city: "Bangalore",
      country: "India",
      label: "India office",
      company: "XcellHost Cloud Services Pvt. Ltd.",
      address: "Janardhan Towers, First Floor, A Wing, #562/640, Bilekahalli, Bannerghatta Road, Bangalore 560076, Karnataka, India",
      phoneDisplay: "+91 22 6711 1555",
      phoneHref: "+912267111555",
      email: "sales@xcellhost.cloud"
    }),
    this.createOffice({
      city: "Dubai",
      country: "UAE",
      label: "Middle East office",
      company: "Xcellhost Cloud Services LLC",
      address: "102-16, 1st Floor, CBD Bank Building, Al Mankhool, Dubai, United Arab Emirates",
      phoneDisplay: "+971 4 341 3811 \xB7 +971 58 594 1802",
      phoneHref: "+97143413811",
      email: "yogendra@xcellhost.cloud"
    }),
    this.createOffice({
      city: "Singapore",
      country: "Singapore",
      label: "Asia office",
      company: "XcellHost Cloud Services Pte. Ltd.",
      address: "320 Serangoon Road, Serangoon Plaza #04-46, Singapore 218108",
      phoneDisplay: "+91 22 6711 1555",
      phoneHref: "+912267111555",
      email: "sales@xcellhost.cloud"
    })
  ];
  selectedOfficeIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedOfficeIndex" }] : []);
  selectedOffice = () => this.offices[this.selectedOfficeIndex()];
  constructor() {
    this.seo.set("Contact XcellHost \u2014 Cloud & Security Experts", "Talk to XcellHost about cloud, cybersecurity, support, partnerships and free trials.", "/contact/");
  }
  ngAfterViewInit() {
    this.initializeCrmForm();
    this.timers.push(window.setTimeout(() => this.initializeCrmForm(), 300));
    this.timers.push(window.setTimeout(() => this.initializeCrmForm(), 1e3));
  }
  ngOnDestroy() {
    for (const timer of this.timers)
      window.clearTimeout(timer);
  }
  openCallback() {
    this.overlay.open("callback");
  }
  selectOffice(index) {
    this.selectedOfficeIndex.set(index);
  }
  createOffice(office) {
    const query = encodeURIComponent(`${office.company}, ${office.address}`);
    return __spreadProps(__spreadValues({}, office), {
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps?q=${query}&output=embed`),
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`
    });
  }
  initializeCrmForm() {
    const section = document.getElementById("xch-sales-enquiry-section");
    if (!section)
      return;
    const form = section.querySelector("#xch-sales-enquiry-form");
    if (!form || form.dataset["xchInitialized"] === "true")
      return;
    form.dataset["xchInitialized"] = "true";
    const firstNumberElement = form.querySelector("[data-xch-captcha-first]");
    const secondNumberElement = form.querySelector("[data-xch-captcha-second]");
    const captchaInput = form.querySelector("[data-xch-captcha-answer]");
    const captchaMessage = form.querySelector("[data-xch-captcha-message]");
    const submitButton = form.querySelector("[data-xch-submit-button]");
    const submitText = form.querySelector("[data-xch-submit-text]");
    const productField = form.querySelector("[data-xch-product-field]");
    const serviceField = form.querySelector("[data-xch-service-field]");
    const customText = section.querySelector("[data-xch-custom-text]");
    if (!firstNumberElement || !secondNumberElement || !captchaInput || !submitButton)
      return;
    let expectedCaptchaAnswer = 0;
    let captchaIsValid = false;
    let formIsSubmitting = false;
    const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;
    const showCaptchaMessage = (message, state) => {
      if (!captchaMessage)
        return;
      captchaMessage.textContent = message;
      captchaMessage.classList.remove("is-correct", "is-wrong");
      if (state)
        captchaMessage.classList.add(state);
    };
    const resetCaptchaState = () => {
      captchaIsValid = false;
      captchaInput.value = "";
      captchaInput.classList.remove("is-correct", "is-wrong");
      showCaptchaMessage("", "");
      submitButton.disabled = true;
    };
    const generateCaptcha = () => {
      const firstNumber = generateRandomNumber();
      const secondNumber = generateRandomNumber();
      expectedCaptchaAnswer = firstNumber + secondNumber;
      firstNumberElement.textContent = String(firstNumber);
      secondNumberElement.textContent = String(secondNumber);
      resetCaptchaState();
    };
    const validateCaptcha = () => {
      const value = captchaInput.value.trim();
      captchaInput.classList.remove("is-correct", "is-wrong");
      if (!value) {
        captchaIsValid = false;
        submitButton.disabled = true;
        showCaptchaMessage("", "");
        return false;
      }
      const enteredAnswer = Number(value);
      if (Number.isFinite(enteredAnswer) && enteredAnswer === expectedCaptchaAnswer) {
        captchaIsValid = true;
        captchaInput.classList.add("is-correct");
        showCaptchaMessage("Correct", "is-correct");
        submitButton.disabled = false;
        return true;
      }
      captchaIsValid = false;
      captchaInput.classList.add("is-wrong");
      showCaptchaMessage("Try again", "is-wrong");
      submitButton.disabled = true;
      return false;
    };
    const getProductName = () => {
      const requestedService = this.route.snapshot.queryParamMap.get("service")?.trim();
      if (requestedService)
        return requestedService;
      const pageTitle = document.title ? document.title.trim() : "";
      const genericTitles = [
        "",
        "Home - Xcellhost",
        "Home - XcellHost",
        "Contact-Us - Xcellhost",
        "Contact Us - XcellHost",
        "Checkout - Xcellhost",
        "Enquiry - Xcellhost",
        "Enquiry - XcellHost"
      ];
      if (genericTitles.includes(pageTitle))
        return "Website Enquiry";
      const titleParts = pageTitle.split(" - ");
      return titleParts[0].trim() || "Website Enquiry";
    };
    const updateProductFields = () => {
      const productName = getProductName();
      if (productField)
        productField.value = productName;
      if (serviceField)
        serviceField.value = productName;
      if (customText && productName !== "Website Enquiry") {
        const serviceName = document.createElement("strong");
        serviceName.textContent = productName;
        customText.replaceChildren("Our sales team can answer questions about ", serviceName, " and recommend the right solution.");
      }
    };
    captchaInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
      validateCaptcha();
    });
    captchaInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !validateCaptcha())
        event.preventDefault();
    });
    form.addEventListener("submit", (event) => {
      if (formIsSubmitting) {
        event.preventDefault();
        return;
      }
      if (!captchaIsValid || !validateCaptcha()) {
        event.preventDefault();
        captchaInput.focus();
        showCaptchaMessage("Enter correct answer", "is-wrong");
        return;
      }
      if (productField && !productField.value.trim())
        productField.value = "Website Enquiry";
      if (serviceField && !serviceField.value.trim())
        serviceField.value = productField?.value.trim() || "Website Enquiry";
      formIsSubmitting = true;
      submitButton.disabled = true;
      if (submitText)
        submitText.textContent = "Submitting...";
    });
    updateProductFields();
    generateCaptcha();
  }
  static \u0275fac = function ContactPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactPage, selectors: [["xh-contact-page"]], hostAttrs: [2, "display", "contents"], decls: 445, vars: 14, consts: [[1, "ppage", "as-page", "contact-page"], ["aria-labelledby", "contact-hero-title", 1, "pp-hero", "contact-hero"], [1, "wrap", "contact-hero-grid"], [1, "contact-hero-copy"], ["aria-label", "Breadcrumb", 1, "contact-hero-crumb"], ["href", "/"], ["aria-hidden", "true"], ["id", "contact-hero-title"], [1, "contact-hero-benefits"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["aria-hidden", "true", 1, "contact-hero-art", "contact-hero-animation"], ["viewBox", "0 0 500 370", "fill", "none"], ["id", "contactGlobeFill", "cx", ".3", "cy", ".25"], ["stop-color", "#187cc6"], ["offset", "1", "stop-color", "#03234a"], ["id", "contactScreenFill", "x1", "105", "y1", "170", "x2", "330", "y2", "310", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#eef8ff"], ["offset", "1", "stop-color", "#a3cfff"], ["id", "contactDeviceFill"], ["stop-color", "#3a79ba"], ["offset", "1", "stop-color", "#0b2a50"], ["cx", "271", "cy", "336", "rx", "177", "ry", "14", "fill", "#21aaff", "opacity", ".12"], [1, "contact-animated-globe"], ["cx", "302", "cy", "166", "r", "112", "fill", "url(#contactGlobeFill)", "stroke", "#3ebaff", "stroke-width", "1.5"], ["stroke", "#68caff", "stroke-opacity", ".35"], ["cx", "302", "cy", "166", "rx", "57", "ry", "112"], ["cx", "302", "cy", "166", "rx", "90", "ry", "112"], ["cx", "302", "cy", "166", "rx", "112", "ry", "42"], ["cx", "302", "cy", "166", "rx", "105", "ry", "79"], ["d", "M190 166H414M302 54V278"], ["d", "M215 122Q320 54 388 145Q395 210 249 243", "stroke", "#8cddff", "stroke-width", "2", "stroke-dasharray", "5 10", 1, "contact-globe-route"], ["cx", "231", "cy", "131", "r", "5", "fill", "#71e2ff", 1, "contact-beacon"], ["cx", "365", "cy", "188", "r", "5", "fill", "#71e2ff", 1, "contact-beacon", "beacon-two"], ["cx", "293", "cy", "166", "rx", "174", "ry", "79", "transform", "rotate(-24 293 166)", "stroke", "#49baff", "stroke-opacity", ".45", "stroke-dasharray", "3 8", 1, "contact-orbit-path"], [1, "contact-laptop"], ["d", "M115 173Q117 163 127 163H325Q338 163 335 177L315 306H96Z", "fill", "url(#contactDeviceFill)", "stroke", "#70b9ed", "stroke-width", "2"], ["d", "M127 176H321L302 292H109Z", "fill", "url(#contactScreenFill)"], ["x", "145", "y", "209", 1, "connect-heading"], ["x", "141", "y", "237", 1, "connect-heading", "connect-blue"], ["x", "138", "y", "254", 1, "connect-subtitle"], ["fill", "#178ce3", 1, "contact-typing"], ["cx", "144", "cy", "274", "r", "3"], ["cx", "156", "cy", "274", "r", "3"], ["cx", "168", "cy", "274", "r", "3"], ["d", "M96 306H315L347 324Q351 330 338 332H70Q56 330 66 323Z", "fill", "url(#contactDeviceFill)", "stroke", "#68abdf", "stroke-width", "1.5"], ["d", "M174 308H239L247 316H165Z", "fill", "#86b9e2", "opacity", ".5"], [1, "contact-floating-phone"], ["x", "332", "y", "198", "width", "75", "height", "132", "rx", "14", "fill", "#09284b", "stroke", "#77bdf5", "stroke-width", "2"], ["x", "338", "y", "204", "width", "63", "height", "120", "rx", "9", "fill", "url(#contactScreenFill)"], ["d", "M355 204H385L381 211H359Z", "fill", "#09284b"], ["cx", "369", "cy", "252", "r", "19", "fill", "#138ee7"], ["d", "M359 249H379V259H368L362 263V259H359Z", "stroke", "white", "stroke-width", "1.5", "stroke-linejoin", "round"], ["x", "369", "y", "290", "text-anchor", "middle", 1, "phone-caption"], ["x", "369", "y", "303", "text-anchor", "middle", 1, "phone-caption"], [1, "contact-floating-channel", "channel-call"], ["cx", "133", "cy", "104", "r", "24"], ["d", "M123 94L128 92L132 99L128 103Q132 110 138 111L141 107L147 111L145 117Q132 122 121 101Z"], [1, "contact-floating-channel", "channel-mail"], ["cx", "260", "cy", "39", "r", "24"], ["d", "M248 31H272V47H248ZM248 31L260 41L272 31"], [1, "contact-floating-channel", "channel-chat"], ["cx", "413", "cy", "71", "r", "24"], ["d", "M402 62H424V77H413L405 83V77H402Z"], ["fill", "#a4dfff", "stroke", "none", 1, "contact-typing"], ["cx", "407", "cy", "70", "r", "1.5"], ["cx", "413", "cy", "70", "r", "1.5"], ["cx", "419", "cy", "70", "r", "1.5"], [1, "contact-body"], [1, "wrap", "contact-wrap"], ["aria-labelledby", "contact-options-title", 1, "contact-section"], [1, "contact-heading"], ["id", "contact-options-title"], [1, "contact-channel-grid"], ["href", "tel:+912267111555", 1, "contact-channel"], ["aria-hidden", "true", 1, "contact-channel-icon", "contact-blue"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "contact-channel"], ["aria-hidden", "true", 1, "contact-channel-icon", "contact-green"], ["href", "mailto:sales@xcellhost.cloud", 1, "contact-channel"], ["aria-hidden", "true", 1, "contact-channel-icon", "contact-orange"], [1, "contact-channel"], ["aria-hidden", "true", 1, "contact-channel-icon", "contact-violet"], ["aria-labelledby", "contact-form-title", 1, "contact-form-section"], [1, "contact-form-copy"], [1, "contact-kicker"], [1, "contact-form-methods"], ["href", "tel:+912267111555"], ["aria-hidden", "true", 1, "method-icon", "method-blue", "material-symbols-outlined"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener"], ["aria-hidden", "true", 1, "method-icon", "method-green", "material-symbols-outlined"], ["href", "mailto:sales@xcellhost.cloud"], ["aria-hidden", "true", 1, "method-icon", "method-orange", "material-symbols-outlined"], ["aria-hidden", "true", 1, "method-icon", "method-violet", "material-symbols-outlined"], [1, "contact-trust"], [1, "contact-form-card"], ["id", "xch-sales-enquiry-section", 1, "xch-sales-page"], [1, "xch-form-shell"], [1, "contact-form-head", "xch-form-head"], ["id", "contact-form-title"], ["action", "https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/xcellhostform/formperma/bZ5rEp9aOJGgQGNccOrarg3MksQYykD8HUut8dl-c5w/htmlRecords/submit", "name", "xch_sales_enquiry_form", "id", "xch-sales-enquiry-form", "method", "POST", "accept-charset", "UTF-8", "enctype", "multipart/form-data", 1, "xch-form"], ["type", "hidden", "name", "zf_referrer_name", "value", ""], ["type", "hidden", "name", "zf_redirect_url", "value", ""], ["type", "hidden", "name", "zc_gad", "value", ""], [1, "xch-field-grid"], [1, "xch-field"], ["for", "xch-sales-first-name", 1, "xch-label"], [1, "xch-required"], ["id", "xch-sales-first-name", "type", "text", "name", "Name_First", "autocomplete", "given-name", "required", "", 1, "xch-input"], ["for", "xch-sales-last-name", 1, "xch-label"], ["id", "xch-sales-last-name", "type", "text", "name", "Name_Last", "autocomplete", "family-name", "required", "", 1, "xch-input"], [1, "xch-field", "xch-field-full"], ["for", "xch-sales-company", 1, "xch-label"], ["id", "xch-sales-company", "type", "text", "name", "SingleLine", "autocomplete", "organization", "required", "", 1, "xch-input"], ["for", "xch-sales-phone", 1, "xch-label"], [1, "xch-phone-grid"], ["name", "CountryCode", "aria-label", "Country code", 1, "xch-select"], ["value", "91", "selected", ""], ["value", "971"], ["value", "1"], ["value", "44"], ["value", "65"], ["value", "61"], ["value", "254"], ["value", "256"], ["value", "243"], ["id", "xch-sales-phone", "type", "tel", "name", "PhoneNumber_countrycode", "autocomplete", "tel", "inputmode", "numeric", "maxlength", "15", "pattern", "[0-9]{7,15}", "placeholder", "Phone Number", "required", "", 1, "xch-input"], ["for", "xch-sales-email", 1, "xch-label"], ["id", "xch-sales-email", "type", "email", "name", "Email", "autocomplete", "email", "required", "", 1, "xch-input"], ["type", "hidden", "name", "SingleLine1", "data-xch-product-field", "", "value", "Website Enquiry"], ["type", "hidden", "name", "Number", "value", "1"], ["type", "hidden", "name", "SingleLine2", "data-xch-service-field", "", "value", "Website Enquiry"], [1, "xch-option-section", "xch-role-section"], [1, "xch-option-title"], [1, "xch-radio-list"], [1, "xch-radio-item"], ["type", "radio", "name", "Radio1", "value", "Customer C", "required", ""], ["type", "radio", "name", "Radio1", "value", "Partner P"], ["type", "radio", "name", "Radio1", "value", "Vendor V"], [1, "xch-option-section"], ["type", "radio", "name", "Radio", "value", "Schedule 1:1 Demo", "required", ""], ["type", "radio", "name", "Radio", "value", "Ask For FREE Trial"], [1, "xch-free"], ["type", "radio", "name", "Radio", "value", "Request a CallBack"], ["data-xch-captcha", "", 1, "xch-captcha-wrap"], [1, "xch-captcha-label"], ["data-xch-captcha-first", "", 1, "xch-captcha-number"], [1, "xch-captcha-symbol"], ["data-xch-captcha-second", "", 1, "xch-captcha-number"], ["type", "text", "name", "captcha_answer", "data-xch-captcha-answer", "", "placeholder", "Answer", "autocomplete", "off", "inputmode", "numeric", "pattern", "[0-9]*", "aria-label", "Captcha answer", "required", "", 1, "xch-captcha-input"], ["data-xch-captcha-message", "", "aria-live", "polite", 1, "xch-captcha-message"], [1, "xch-policy"], ["href", "https://www.xcellhost.cloud/privacy-cookie-policy/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/terms-of-service/", "target", "_blank", "rel", "noopener noreferrer"], [1, "xch-submit-row"], ["type", "submit", "data-xch-submit-button", "", "disabled", "", 1, "xch-submit-button"], ["data-xch-submit-text", ""], ["aria-hidden", "true", 1, "xch-submit-arrow"], ["aria-labelledby", "contact-offices-title", 1, "contact-offices"], [1, "contact-offices-head"], ["id", "contact-offices-title"], [1, "office-locator"], ["role", "tablist", "aria-label", "Choose an office location", 1, "office-tabs"], ["type", "button", "role", "tab", 3, "is-active"], ["role", "tabpanel", 1, "office-locator-body"], [1, "office-contact-panel"], [1, "office-contact-heading"], [1, "office-contact-list"], [1, "office-contact-row"], [3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "office-directions", 3, "href"], [1, "office-map-panel"], ["loading", "lazy", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], [1, "contact-callback"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-labelledby", "existing-title", 1, "contact-section", "contact-existing"], [1, "contact-heading", "compact"], ["id", "existing-title"], [1, "contact-existing-grid"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/home", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open the XcellHost Support Portal in a new tab", 1, "contact-existing-card"], ["href", "https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Open the XcellHost Billing Portal in a new tab", 1, "contact-existing-card"], ["routerLink", "/escalation-matrix", "aria-label", "Open the XcellHost escalation matrix", 1, "contact-existing-card"], ["type", "button", "role", "tab", 3, "click"]], template: function ContactPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Contact Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "h1", 7);
      \u0275\u0275text(12, "Contact ");
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "We\u2019re here to help. Get in touch with our team for any questions, support, or custom solutions \u2014 and let\u2019s build something great together.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8)(18, "div")(19, "span", 9);
      \u0275\u0275text(20, "headset_mic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div")(22, "b");
      \u0275\u0275text(23, "Expert Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "small");
      \u0275\u0275text(25, "Always here for you");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div")(27, "span", 9);
      \u0275\u0275text(28, "bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "b");
      \u0275\u0275text(31, "Quick Response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "small");
      \u0275\u0275text(33, "We value your time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div")(35, "span", 9);
      \u0275\u0275text(36, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "b");
      \u0275\u0275text(39, "Real Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "small");
      \u0275\u0275text(41, "For your business needs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 11)(44, "defs")(45, "radialGradient", 12);
      \u0275\u0275element(46, "stop", 13)(47, "stop", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "linearGradient", 15);
      \u0275\u0275element(49, "stop", 16)(50, "stop", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "linearGradient", 18);
      \u0275\u0275element(52, "stop", 19)(53, "stop", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "ellipse", 21);
      \u0275\u0275elementStart(55, "g", 22);
      \u0275\u0275element(56, "circle", 23);
      \u0275\u0275elementStart(57, "g", 24);
      \u0275\u0275element(58, "ellipse", 25)(59, "ellipse", 26)(60, "ellipse", 27)(61, "ellipse", 28)(62, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "path", 30)(64, "circle", 31)(65, "circle", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "ellipse", 33);
      \u0275\u0275elementStart(67, "g", 34);
      \u0275\u0275element(68, "path", 35)(69, "path", 36);
      \u0275\u0275elementStart(70, "text", 37);
      \u0275\u0275text(71, "Let's");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "text", 38);
      \u0275\u0275text(73, "Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "text", 39);
      \u0275\u0275text(75, "We're here to help.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "g", 40);
      \u0275\u0275element(77, "circle", 41)(78, "circle", 42)(79, "circle", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "path", 44)(81, "path", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "g", 46);
      \u0275\u0275element(83, "rect", 47)(84, "rect", 48)(85, "path", 49)(86, "circle", 50)(87, "path", 51);
      \u0275\u0275elementStart(88, "text", 52);
      \u0275\u0275text(89, "Get in touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "text", 53);
      \u0275\u0275text(91, "Anytime");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "g", 54);
      \u0275\u0275element(93, "circle", 55)(94, "path", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "g", 57);
      \u0275\u0275element(96, "circle", 58)(97, "path", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "g", 60);
      \u0275\u0275element(99, "circle", 61)(100, "path", 62);
      \u0275\u0275elementStart(101, "g", 63);
      \u0275\u0275element(102, "circle", 64)(103, "circle", 65)(104, "circle", 66);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(105, "section", 67)(106, "div", 68)(107, "section", 69)(108, "div", 70)(109, "span");
      \u0275\u0275text(110, "Talk to our team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "h2", 71);
      \u0275\u0275text(112, "Choose the fastest way to reach us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p");
      \u0275\u0275text(114, "Our Mumbai team is available for sales, support and service enquiries.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 72)(116, "a", 73)(117, "span", 74);
      \u0275\u0275text(118, "\u260E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "span")(120, "b");
      \u0275\u0275text(121, "Call us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "small");
      \u0275\u0275text(123, "+91-2267111555");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "em");
      \u0275\u0275text(125, "Mon-Sat, 9 AM-8 PM IST");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "strong", 6);
      \u0275\u0275text(127, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "a", 75)(129, "span", 76);
      \u0275\u0275text(130, "\u25C9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span")(132, "b");
      \u0275\u0275text(133, "WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "small");
      \u0275\u0275text(135, "+91 8657032540");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "em");
      \u0275\u0275text(137, "Fastest for quick questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "strong", 6);
      \u0275\u0275text(139, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "a", 77)(141, "span", 78);
      \u0275\u0275text(142, "\u2709");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span")(144, "b");
      \u0275\u0275text(145, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "small");
      \u0275\u0275text(147, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "em");
      \u0275\u0275text(149, "Replies within one business day");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "strong", 6);
      \u0275\u0275text(151, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "article", 79)(153, "span", 80);
      \u0275\u0275text(154, "\u2316");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "span")(156, "b");
      \u0275\u0275text(157, "Office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "small");
      \u0275\u0275text(159, "Mumbai, Maharashtra");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "em");
      \u0275\u0275text(161, "XcellHost Cloud Services Pvt. Ltd.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(162, "section", 81)(163, "div", 82)(164, "span", 83);
      \u0275\u0275text(165, "Get in touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "h2");
      \u0275\u0275text(167, "Tell us what you need.");
      \u0275\u0275element(168, "br");
      \u0275\u0275elementStart(169, "strong");
      \u0275\u0275text(170, "We'll take it from here.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, " Complete the form for a sales enquiry, partnership discussion, free trial, demo or callback. We'll connect you with the right specialist. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 84)(174, "a", 85)(175, "span", 86);
      \u0275\u0275text(176, "phone_in_talk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "span")(178, "small");
      \u0275\u0275text(179, "Call us - 24x7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "strong");
      \u0275\u0275text(181, "+91-22-6711 1555");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "b", 6);
      \u0275\u0275text(183, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "a", 87)(185, "span", 88);
      \u0275\u0275text(186, "chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span")(188, "small");
      \u0275\u0275text(189, "WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "strong");
      \u0275\u0275text(191, "+91 86570 32540");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "b", 6);
      \u0275\u0275text(193, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "a", 89)(195, "span", 90);
      \u0275\u0275text(196, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "span")(198, "small");
      \u0275\u0275text(199, "Email - reply in one business day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "strong");
      \u0275\u0275text(201, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "b", 6);
      \u0275\u0275text(203, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div")(205, "span", 91);
      \u0275\u0275text(206, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "span")(208, "small");
      \u0275\u0275text(209, "Office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "strong");
      \u0275\u0275text(211, "Mumbai, Maharashtra");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(212, "div", 92)(213, "span");
      \u0275\u0275text(214, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "span");
      \u0275\u0275text(216, "ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "span");
      \u0275\u0275text(218, "Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "span");
      \u0275\u0275text(220, "24x7 Support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 93)(222, "section", 94)(223, "div", 95)(224, "div", 96)(225, "h2", 97);
      \u0275\u0275text(226, "Get in touch with our team");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "form", 98);
      \u0275\u0275element(228, "input", 99)(229, "input", 100)(230, "input", 101);
      \u0275\u0275elementStart(231, "div", 102)(232, "div", 103)(233, "label", 104);
      \u0275\u0275text(234, "First name ");
      \u0275\u0275elementStart(235, "span", 105);
      \u0275\u0275text(236, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(237, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 103)(239, "label", 107);
      \u0275\u0275text(240, "Last name ");
      \u0275\u0275elementStart(241, "span", 105);
      \u0275\u0275text(242, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(243, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 109)(245, "label", 110);
      \u0275\u0275text(246, "Company name ");
      \u0275\u0275elementStart(247, "span", 105);
      \u0275\u0275text(248, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(249, "input", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 103)(251, "label", 112);
      \u0275\u0275text(252, "Phone Number ");
      \u0275\u0275elementStart(253, "span", 105);
      \u0275\u0275text(254, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 113)(256, "select", 114)(257, "option", 115);
      \u0275\u0275text(258, "India +91");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "option", 116);
      \u0275\u0275text(260, "UAE +971");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "option", 117);
      \u0275\u0275text(262, "USA/Canada +1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "option", 118);
      \u0275\u0275text(264, "UK +44");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "option", 119);
      \u0275\u0275text(266, "Singapore +65");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "option", 120);
      \u0275\u0275text(268, "Australia +61");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "option", 121);
      \u0275\u0275text(270, "Kenya +254");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "option", 122);
      \u0275\u0275text(272, "Uganda +256");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "option", 123);
      \u0275\u0275text(274, "DR Congo +243");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(275, "input", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 103)(277, "label", 125);
      \u0275\u0275text(278, "Email ");
      \u0275\u0275elementStart(279, "span", 105);
      \u0275\u0275text(280, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(281, "input", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(282, "input", 127)(283, "input", 128)(284, "input", 129);
      \u0275\u0275elementStart(285, "div", 130)(286, "span", 131);
      \u0275\u0275text(287, "I am a ");
      \u0275\u0275elementStart(288, "span", 105);
      \u0275\u0275text(289, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "div", 132)(291, "label", 133);
      \u0275\u0275element(292, "input", 134);
      \u0275\u0275elementStart(293, "span");
      \u0275\u0275text(294, "Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "label", 133);
      \u0275\u0275element(296, "input", 135);
      \u0275\u0275elementStart(297, "span");
      \u0275\u0275text(298, "Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "label", 133);
      \u0275\u0275element(300, "input", 136);
      \u0275\u0275elementStart(301, "span");
      \u0275\u0275text(302, "Vendor");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "div", 137)(304, "span", 131);
      \u0275\u0275text(305, "How can we help? ");
      \u0275\u0275elementStart(306, "span", 105);
      \u0275\u0275text(307, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 132)(309, "label", 133);
      \u0275\u0275element(310, "input", 138);
      \u0275\u0275elementStart(311, "span");
      \u0275\u0275text(312, "Schedule 1:1 Demo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "label", 133);
      \u0275\u0275element(314, "input", 139);
      \u0275\u0275elementStart(315, "span");
      \u0275\u0275text(316, "Ask for ");
      \u0275\u0275elementStart(317, "span", 140);
      \u0275\u0275text(318, "FREE");
      \u0275\u0275elementEnd();
      \u0275\u0275text(319, " Trial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "label", 133);
      \u0275\u0275element(321, "input", 141);
      \u0275\u0275elementStart(322, "span");
      \u0275\u0275text(323, "Request Callback");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(324, "div", 142)(325, "span", 143);
      \u0275\u0275text(326, "Captcha");
      \u0275\u0275elementEnd();
      \u0275\u0275element(327, "span", 144);
      \u0275\u0275elementStart(328, "span", 145);
      \u0275\u0275text(329, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275element(330, "span", 146);
      \u0275\u0275elementStart(331, "span", 145);
      \u0275\u0275text(332, "=");
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "input", 147)(334, "span", 148);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "p", 149);
      \u0275\u0275text(336, " XcellHost will use your information to respond to your enquiry and communicate relevant products and services. See our ");
      \u0275\u0275elementStart(337, "a", 150);
      \u0275\u0275text(338, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(339, " and ");
      \u0275\u0275elementStart(340, "a", 151);
      \u0275\u0275text(341, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(342, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div", 152)(344, "button", 153)(345, "span", 154);
      \u0275\u0275text(346, "Submit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "span", 155);
      \u0275\u0275text(348, "\u2192");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(349, "section", 156)(350, "div", 157)(351, "span");
      \u0275\u0275text(352, "Our offices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "h2", 158);
      \u0275\u0275text(354, "India, Middle East & Asia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "p");
      \u0275\u0275text(356, "Local teams ready to support your cloud and security requirements.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 159)(358, "div", 160);
      \u0275\u0275repeaterCreate(359, ContactPage_For_360_Template, 8, 7, "button", 161, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "div", 162)(362, "article", 163)(363, "div", 164)(364, "span", 9);
      \u0275\u0275text(365, "apartment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div")(367, "small");
      \u0275\u0275text(368);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "h3");
      \u0275\u0275text(370);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(371, "div", 165)(372, "div", 166)(373, "span", 9);
      \u0275\u0275text(374, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "div")(376, "small");
      \u0275\u0275text(377, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "strong");
      \u0275\u0275text(379);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "p");
      \u0275\u0275text(381);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(382, "div", 166)(383, "span", 9);
      \u0275\u0275text(384, "phone_in_talk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div")(386, "small");
      \u0275\u0275text(387, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "a", 167);
      \u0275\u0275text(389);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(390, "div", 166)(391, "span", 9);
      \u0275\u0275text(392, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "div")(394, "small");
      \u0275\u0275text(395, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "a", 167);
      \u0275\u0275text(397);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(398, "a", 168);
      \u0275\u0275text(399, " Open in Google Maps ");
      \u0275\u0275elementStart(400, "span", 6);
      \u0275\u0275text(401, "\u2197");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(402, "div", 169);
      \u0275\u0275element(403, "iframe", 170);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(404, "section", 171)(405, "div")(406, "span");
      \u0275\u0275text(407, "Prefer we call you?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "h2");
      \u0275\u0275text(409, "Request a callback at a convenient time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "p");
      \u0275\u0275text(411, "We typically call back within 30 minutes during business hours.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "button", 172);
      \u0275\u0275listener("click", function ContactPage_Template_button_click_412_listener() {
        return ctx.openCallback();
      });
      \u0275\u0275text(413, "Request a Callback \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "section", 173)(415, "div", 174)(416, "span");
      \u0275\u0275text(417, "Customer care");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "h2", 175);
      \u0275\u0275text(419, "Existing customer?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "div", 176)(421, "a", 177)(422, "span");
      \u0275\u0275text(423, "\u{1F3A7}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "div")(425, "h3");
      \u0275\u0275text(426, "Support Portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "p");
      \u0275\u0275text(428, "Raise a ticket, track its status and browse the knowledge base.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(429, "a", 178)(430, "span");
      \u0275\u0275text(431, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "div")(433, "h3");
      \u0275\u0275text(434, "Billing Portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "p");
      \u0275\u0275text(436, "Access invoices, renewals and secure payment options.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(437, "a", 179)(438, "span");
      \u0275\u0275text(439, "\u{1F6A8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "div")(441, "h3");
      \u0275\u0275text(442, "Emergency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "p");
      \u0275\u0275text(444, 'For a breach or outage, call and say "emergency" for the on-call team.');
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(359);
      \u0275\u0275repeater(ctx.offices);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("id", "office-panel-" + ctx.selectedOfficeIndex())("aria-labelledby", "office-tab-" + ctx.selectedOfficeIndex());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.selectedOffice().label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.selectedOffice().city, ", ", ctx.selectedOffice().country);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.selectedOffice().company);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.selectedOffice().address);
      \u0275\u0275advance(7);
      \u0275\u0275property("href", "tel:" + ctx.selectedOffice().phoneHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.selectedOffice().phoneDisplay);
      \u0275\u0275advance(7);
      \u0275\u0275property("href", "mailto:" + ctx.selectedOffice().email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.selectedOffice().email);
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.selectedOffice().directionsUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.selectedOffice().mapUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx.selectedOffice().city + " office location on Google Maps");
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.contact-page[_ngcontent-%COMP%] {\n  --c-navy:#071f45;\n  --c-blue:#1467dc;\n  --c-ice:#f2f7ff;\n  --c-line:#d7e3f4;\n  --c-slate:#526481;\n  background: #fff;\n  color: var(--c-navy);\n}\n.contact-body[_ngcontent-%COMP%] {\n  padding: 32px 0 41px 0;\n  background: #fff;\n}\n.contact-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 68px;\n}\n.contact-section[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.contact-page[_ngcontent-%COMP%]   .contact-section[aria-labelledby=contact-options-title][_ngcontent-%COMP%] {\n  display: none;\n}\n.contact-heading[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-bottom: 25px;\n}\n.contact-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.contact-form-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 9px;\n  color: var(--c-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.contact-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.contact-form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.contact-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.contact-callback[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-navy);\n  font-family: var(--disp);\n}\n.contact-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(25px, 3vw, 38px);\n  line-height: 1.18;\n}\n.contact-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: var(--c-slate);\n  font-size: 14px;\n}\n.contact-heading.compact[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.contact-channel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-channel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 14px;\n  min-height: 108px;\n  padding: 19px;\n  border: 1px solid var(--c-line);\n  border-radius: 15px;\n  background: #fff;\n  color: var(--c-navy);\n  box-shadow: 0 8px 24px rgba(7, 31, 69, .055);\n  transition: .22s;\n}\na.contact-channel[_ngcontent-%COMP%]:hover {\n  border-color: #9fc4f5;\n  transform: translateY(-3px);\n  box-shadow: 0 14px 30px rgba(20, 103, 220, .1);\n}\n.contact-channel-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  font-size: 20px;\n  background: #eef5ff;\n  border: 1px solid #d7e7fc;\n}\n.contact-blue[_ngcontent-%COMP%] {\n  color: #1269df;\n}\n.contact-green[_ngcontent-%COMP%] {\n  color: #08a76f;\n}\n.contact-orange[_ngcontent-%COMP%] {\n  color: #e67513;\n}\n.contact-violet[_ngcontent-%COMP%] {\n  color: #7b52dc;\n}\n.contact-channel[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.contact-channel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.contact-channel[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n}\n.contact-channel[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font: 700 16px var(--disp);\n}\n.contact-channel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n  font-size: 13px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n.contact-channel[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--c-slate);\n  font-size: 11.5px;\n  font-style: normal;\n}\n.contact-channel[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n  font-size: 20px;\n}\n.contact-form-section[_ngcontent-%COMP%] {\n  order: -1;\n  display: grid;\n  grid-template-columns: minmax(0, .82fr) minmax(560px, 1.18fr);\n  gap: clamp(38px, 6vw, 78px);\n  align-items: center;\n  padding: clamp(8px, 1.25vw, 14px) clamp(34px, 5vw, 62px);\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.contact-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 7px 12px;\n  border: 1px solid #b9d4f8;\n  border-radius: 999px;\n  color: var(--c-blue);\n  background: #fff;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.contact-form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: clamp(31px, 3.3vw, 45px);\n  line-height: 1.06;\n  letter-spacing: -.035em;\n}\n.contact-form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n  font-size: 37px;\n}\n.contact-form-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 17px 0;\n  color: var(--c-slate);\n  font-size: 13.5px;\n  line-height: 1.65;\n}\n.contact-form-methods[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n}\n.contact-form-methods[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.contact-form-methods[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  min-height: 68px;\n  padding: 11px 14px;\n  border: 1px solid #d6e2f2;\n  border-radius: 12px;\n  color: var(--c-navy);\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(7, 31, 69, .045);\n  transition: .2s;\n}\n.contact-form-methods[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  border-color: #a8c9f3;\n  transform: translateX(3px);\n  box-shadow: 0 9px 22px rgba(20, 103, 220, .09);\n}\n.contact-form-methods[_ngcontent-%COMP%]   .method-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  background: #f5f9ff;\n  font-size: 17px;\n}\n.contact-form-methods[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.contact-form-methods[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.contact-form-methods[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  color: #6d7d96;\n  font: 700 9px/1.2 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.contact-form-methods[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  overflow-wrap: anywhere;\n}\n.contact-form-methods[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n  font-size: 18px;\n}\n.method-blue[_ngcontent-%COMP%] {\n  color: #1467dc;\n}\n.method-green[_ngcontent-%COMP%] {\n  color: #08a76f;\n}\n.method-orange[_ngcontent-%COMP%] {\n  color: #e67513;\n}\n.method-violet[_ngcontent-%COMP%] {\n  color: #7b52dc;\n}\n.contact-trust[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 4px;\n  margin-top: 20px;\n  max-width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.contact-trust[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.contact-trust[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 6px 7px;\n  border: 1px solid #c5daf5;\n  border-radius: 999px;\n  color: #205da7;\n  background: #fff;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .035em;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.contact-form-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: clamp(10px, 1.25vw, 14px) clamp(18px, 2vw, 24px);\n  border: 1px solid #d4e1f1;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 18px 46px rgba(7, 31, 69, .11);\n}\n.contact-form-head[_ngcontent-%COMP%] {\n  margin-bottom: 23px;\n}\n.contact-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(25px, 2.5vw, 34px);\n}\n.contact-form-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: var(--c-slate);\n  font-size: 12.5px;\n}\n.contact-form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px 13px;\n}\n.contact-field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.contact-field-wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.contact-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.contact-interest[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 7px;\n  color: #50617c;\n  font: 700 9.5px/1.2 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.contact-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.contact-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.contact-captcha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  padding: 0 13px;\n  border: 1px solid #cad7e8;\n  border-radius: 8px;\n  outline: none;\n  color: var(--c-navy);\n  background: #fbfdff;\n  font: 500 13px var(--body);\n  transition: .2s;\n}\n.contact-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.contact-captcha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8b99ad;\n}\n.contact-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.contact-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.contact-captcha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3781e5;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .1);\n}\n.contact-field[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.contact-captcha[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #e55364;\n}\n.contact-phone[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(140px, .42fr) minmax(0, 1fr);\n  gap: 13px;\n}\n.contact-interest[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 2px 0 0;\n  padding: 0;\n  border: 0;\n}\n.contact-interest-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 7px;\n}\n.contact-interest-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.contact-interest-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.contact-interest-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 7px;\n  border: 1px solid #d1dceb;\n  border-radius: 8px;\n  color: #586985;\n  background: #f8fbff;\n  text-align: center;\n  font-size: 10.5px;\n  line-height: 1.25;\n  transition: .2s;\n}\n.contact-interest-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: var(--c-blue);\n  background:\n    linear-gradient(\n      135deg,\n      #176ee0,\n      #0b52b5);\n  box-shadow: 0 6px 15px rgba(20, 103, 220, .18);\n}\n.contact-captcha[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 115px;\n  gap: 12px;\n  align-items: center;\n}\n.contact-captcha[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #526481;\n  font-size: 12px;\n}\n.contact-captcha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-navy);\n  font-family: var(--mono);\n}\n.contact-consent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  color: #677791;\n  font-size: 10.5px;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.contact-consent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 2px;\n  accent-color: var(--c-blue);\n}\n.contact-consent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n  font-weight: 700;\n}\n.contact-error[_ngcontent-%COMP%] {\n  margin: -3px 0 0;\n  color: #d63448;\n  font-size: 11.5px;\n}\n.contact-submit[_ngcontent-%COMP%] {\n  height: 49px;\n  border: 0;\n  border-radius: 8px;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #084ca9);\n  box-shadow: 0 11px 25px rgba(20, 103, 220, .24);\n  font: 750 13px var(--body);\n  cursor: pointer;\n  transition: .2s;\n}\n.contact-submit[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .32);\n}\n.contact-submit[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: wait;\n  transform: none;\n}\n.contact-submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n.xch-sales-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact-form-card[_ngcontent-%COMP%]   .xch-sales-page[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.xch-form-shell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.xch-form-shell[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.xch-form-head[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.xch-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.contact-form-card[_ngcontent-%COMP%]   form.xch-form[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.xch-field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.xch-field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.xch-field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.xch-label[_ngcontent-%COMP%], \n.xch-option-title[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 6px;\n  color: #32507c;\n  font: 700 11px/1.3 var(--body);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.xch-required[_ngcontent-%COMP%] {\n  color: #1467dc;\n}\n.xch-input[_ngcontent-%COMP%], \n.xch-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 42px;\n  padding: 8px 12px;\n  border: 1px solid #d8e3f2;\n  border-radius: 0;\n  background: #f5f9ff;\n  color: var(--c-navy);\n  font: 500 13px var(--body);\n  outline: none;\n  transition:\n    border-color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.xch-input[_ngcontent-%COMP%]:hover, \n.xch-select[_ngcontent-%COMP%]:hover {\n  background: #edf4ff;\n}\n.xch-input[_ngcontent-%COMP%]:focus, \n.xch-select[_ngcontent-%COMP%]:focus {\n  border-color: #1467dc;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.xch-input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.xch-select.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.xch-captcha-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #e55364;\n}\n.xch-phone-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 128px minmax(0, 1fr);\n  gap: 8px;\n}\n.xch-option-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.xch-radio-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.xch-radio-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 6px 10px;\n  border: 1px solid #d7e3f3;\n  background: #fff;\n  border-radius: 0;\n  cursor: pointer;\n  transition:\n    border-color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.xch-role-section[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.xch-role-section[_ngcontent-%COMP%]   .xch-radio-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.xch-role-section[_ngcontent-%COMP%]   .xch-radio-item[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.xch-role-section[_ngcontent-%COMP%]   .xch-radio-item[_ngcontent-%COMP%]:nth-child(2) {\n  order: 3;\n}\n.xch-role-section[_ngcontent-%COMP%]   .xch-radio-item[_ngcontent-%COMP%]:nth-child(3) {\n  order: 2;\n}\n.xch-radio-item[_ngcontent-%COMP%]:hover {\n  border-color: #8eb8ee;\n  background: #f7fbff;\n}\n.xch-radio-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 0 6px 0 0;\n  accent-color: #1467dc;\n}\n.xch-radio-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #314762;\n  font-size: 11.5px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n.xch-radio-item[_ngcontent-%COMP%]:has(input:checked) {\n  border-color: #1467dc;\n  background: #edf5ff;\n  box-shadow: inset 0 0 0 1px rgba(20, 103, 220, .08);\n}\n.xch-free[_ngcontent-%COMP%] {\n  color: #1467dc !important;\n  font-weight: 900 !important;\n}\n.xch-captcha-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.xch-captcha-label[_ngcontent-%COMP%] {\n  color: #32507c;\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-number[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n  padding: 0 6px;\n  border: 1px solid #d6e4f7;\n  background: #f5f9ff;\n  color: var(--c-navy);\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-symbol[_ngcontent-%COMP%] {\n  color: #5c7396;\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-input[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 34px;\n  padding: 6px 8px;\n  border: 1px solid #d8e3f2;\n  background: #fff;\n  color: var(--c-navy);\n  font: 700 12px var(--body);\n  text-align: center;\n  outline: none;\n  transition: border-color .2s, box-shadow .2s;\n}\n.xch-captcha-input[_ngcontent-%COMP%]:focus {\n  border-color: #1467dc;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.xch-captcha-input.is-correct[_ngcontent-%COMP%] {\n  border-color: #218739;\n  background: #f4fff7;\n}\n.xch-captcha-input.is-wrong[_ngcontent-%COMP%] {\n  border-color: #d63448;\n  background: #fff5f5;\n}\n.xch-captcha-message[_ngcontent-%COMP%] {\n  min-width: 58px;\n  font-size: 10px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n.xch-captcha-message.is-correct[_ngcontent-%COMP%] {\n  color: #218739;\n}\n.xch-captcha-message.is-wrong[_ngcontent-%COMP%] {\n  color: #d63448;\n}\n.xch-submit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.xch-submit-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-width: 150px;\n  min-height: 44px;\n  padding: 10px 18px;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0b52b5);\n  color: #fff;\n  font: 800 13px var(--body);\n  cursor: pointer;\n  transition: transform .2s, box-shadow .2s;\n  box-shadow: 0 11px 24px rgba(20, 103, 220, .22);\n}\n.xch-submit-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .28);\n}\n.xch-submit-button[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: wait;\n  transform: none;\n}\n.xch-submit-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform .2s;\n}\n.xch-submit-button[_ngcontent-%COMP%]:hover:not(:disabled)   .xch-submit-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.xch-policy[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  color: #667791;\n  font-size: 10.5px;\n  line-height: 1.5;\n}\n.xch-policy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d57be;\n  font-weight: 700;\n  text-decoration: underline;\n}\n.xch-error[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.contact-success[_ngcontent-%COMP%] {\n  min-height: 430px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  text-align: center;\n}\n.contact-success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: #fff;\n  background: #14aa78;\n  font-size: 28px;\n  font-weight: 900;\n  box-shadow: 0 0 0 11px #e8f8f2;\n}\n.contact-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 25px 0 7px;\n  color: var(--c-navy);\n  font-size: 32px;\n}\n.contact-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 380px;\n  margin: 0;\n  color: var(--c-slate);\n}\n.contact-success[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: var(--c-blue);\n  font-family: var(--mono);\n}\n.contact-map[_ngcontent-%COMP%] {\n  height: 410px;\n  overflow: hidden;\n  border: 1px solid var(--c-line);\n  border-radius: 17px;\n  background: var(--c-ice);\n  box-shadow: 0 12px 34px rgba(7, 31, 69, .07);\n}\n.contact-map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.contact-offices[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 32px) 0;\n  color: var(--c-navy);\n  background: transparent;\n}\n.contact-offices-head[_ngcontent-%COMP%] {\n  max-width: 660px;\n  margin: 0 auto 32px;\n  text-align: center;\n}\n.contact-offices-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 13px;\n  border: 1px solid #b8d3f5;\n  border-radius: 999px;\n  color: var(--c-blue);\n  background: #fff;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.contact-offices-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  color: var(--c-navy);\n  font: 800 clamp(30px, 4vw, 46px)/1.08 var(--disp);\n  letter-spacing: -.035em;\n}\n.contact-offices-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-slate);\n  font-size: 14px;\n  line-height: 1.55;\n}\n.contact-office-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-office-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  min-height: 275px;\n  padding: 22px 18px;\n  border: 1px solid #cfdef1;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 20px rgba(7, 31, 69, .055);\n}\n.contact-office-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  right: 18px;\n  height: 3px;\n  border-radius: 0 0 99px 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #4aa0ff);\n}\n.contact-office-card-head[_ngcontent-%COMP%] {\n  display: block;\n  margin: 14px 0 20px;\n}\n.contact-office-card-head[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  margin-bottom: 12px;\n  border: 1px solid #bcd6f6;\n  border-radius: 12px;\n  color: #1467dc;\n  background: #eef6ff;\n  font-size: 24px;\n}\n.contact-office-card-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #36649a;\n  font: 700 8px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.contact-office-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-navy);\n  font: 750 20px/1.15 var(--disp);\n}\n.contact-office-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 26px minmax(0, 1fr);\n  gap: 8px;\n  align-items: start;\n  margin-top: 11px;\n}\n.contact-office-detail[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  color: #1467dc;\n  background: #edf5ff;\n  font-size: 15px;\n}\n.contact-office-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  color: #50617c;\n  font-size: 11.5px;\n  line-height: 1.55;\n}\n.contact-office-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--c-navy);\n}\n.contact-office-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1467dc;\n  text-decoration: none;\n}\n.contact-office-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.contact-offices[_ngcontent-%COMP%] {\n  padding: clamp(28px, 4vw, 52px) 0;\n}\n.contact-offices-head[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 0 0 28px;\n  text-align: left;\n}\n.contact-offices-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 13px 0 7px;\n  font-size: clamp(29px, 3.5vw, 42px);\n}\n.contact-office-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  align-items: stretch;\n}\n.contact-office-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: 340px;\n  padding: 24px 20px;\n  border-radius: 18px;\n  box-shadow: 0 12px 28px rgba(7, 31, 69, .065);\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.contact-office-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #9fc4f5;\n  box-shadow: 0 18px 34px rgba(20, 103, 220, .12);\n}\n.contact-office-card[_ngcontent-%COMP%]::before {\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n}\n.contact-office-card[_ngcontent-%COMP%]:nth-child(2)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #6aa7ff);\n}\n.contact-office-card[_ngcontent-%COMP%]:nth-child(3)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #0c9d92,\n      #26cbb7);\n}\n.contact-office-card[_ngcontent-%COMP%]:nth-child(4)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #4d70d9,\n      #8ba8ff);\n}\n.contact-office-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 58px;\n  margin: 0 0 20px;\n}\n.contact-office-card-head[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  flex: none;\n  margin: 0;\n  width: 42px;\n  height: 42px;\n}\n.contact-office-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.15;\n}\n.contact-office-detail[_ngcontent-%COMP%] {\n  grid-template-columns: 26px minmax(0, 1fr);\n  gap: 8px;\n  margin-top: 12px;\n}\n.contact-office-detail[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.contact-office-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.65;\n}\n.contact-offices[_ngcontent-%COMP%]    + .contact-section[aria-labelledby=office-title][_ngcontent-%COMP%] {\n  margin-top: -60px;\n}\n.contact-office-card[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.contact-callback[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  padding: 30px 34px;\n  border-radius: 18px;\n  color: #fff;\n  background:\n    linear-gradient(\n      110deg,\n      #082b5d,\n      #105ebd);\n  box-shadow: 0 18px 40px rgba(8, 58, 124, .2);\n}\n.contact-callback[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8fc3ff;\n  font: 700 9px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.contact-callback[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #fff;\n  font-size: 25px;\n}\n.contact-callback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #cbdcf3;\n  font-size: 13px;\n}\n.contact-callback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: none;\n  background: #ff8a1a;\n  border-color: #ff8a1a;\n  color: #fff;\n}\n.contact-existing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-existing-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  min-height: 130px;\n  padding: 22px;\n  border: 1px solid var(--c-line);\n  border-radius: 14px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.contact-existing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #8ebaf3;\n  box-shadow: 0 14px 28px rgba(20, 103, 220, .12);\n}\n.contact-existing-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, .28);\n  outline-offset: 3px;\n}\n.contact-existing-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.contact-existing-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: var(--c-navy);\n  font: 700 16px var(--disp);\n}\n.contact-existing-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-slate);\n  font-size: 12.5px;\n  line-height: 1.55;\n}\n@media (max-width: 1000px) {\n  .contact-form-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-form-copy[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n@media (max-width: 1100px) {\n  .contact-office-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .contact-body[_ngcontent-%COMP%] {\n    padding: 24px 0 32px 0;\n  }\n  .contact-wrap[_ngcontent-%COMP%] {\n    gap: 48px;\n  }\n  .contact-channel-grid[_ngcontent-%COMP%], \n   .contact-existing-grid[_ngcontent-%COMP%], \n   .contact-office-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-form-section[_ngcontent-%COMP%] {\n    padding: 26px 18px;\n    border-radius: 18px;\n  }\n  .contact-offices[_ngcontent-%COMP%] {\n    padding: 40px 22px;\n    border-radius: 18px;\n  }\n  .contact-offices[_ngcontent-%COMP%]    + .contact-section[aria-labelledby=office-title][_ngcontent-%COMP%] {\n    margin-top: -36px;\n  }\n  .contact-callback[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 22px;\n  }\n  .contact-map[_ngcontent-%COMP%] {\n    height: 340px;\n  }\n}\n@media (max-width: 580px) {\n  .contact-form-card[_ngcontent-%COMP%] {\n    padding: 23px 16px;\n  }\n  .contact-form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-field-wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .contact-phone[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-template-columns: 112px minmax(0, 1fr);\n    gap: 9px;\n  }\n  .contact-interest-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .contact-captcha[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-template-columns: minmax(0, 1fr) 96px;\n  }\n  .contact-consent[_ngcontent-%COMP%], \n   .contact-error[_ngcontent-%COMP%], \n   .contact-submit[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .contact-channel[_ngcontent-%COMP%] {\n    grid-template-columns: 42px minmax(0, 1fr) auto;\n    padding: 15px;\n  }\n  .contact-channel-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .contact-channel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .contact-form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .xch-field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  .xch-field-full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .xch-phone-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xch-radio-list[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .xch-radio-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .xch-submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 390px) {\n  .contact-phone[_ngcontent-%COMP%], \n   .contact-interest-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-channel[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.contact-page[_ngcontent-%COMP%]   .contact-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 440px;\n  padding: 55px 0;\n  background:\n    radial-gradient(\n      ellipse at 73% 35%,\n      #074888 0,\n      transparent 47%),\n    linear-gradient(\n      115deg,\n      #04264d,\n      #021a38 62%,\n      #032854);\n  color: #fff;\n}\n.contact-hero[_ngcontent-%COMP%]   .contact-hero-grid[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  display: grid;\n  grid-template-columns: 1.35fr 1fr;\n  align-items: center;\n  gap: 35px;\n  padding-inline: 40px;\n}\n.contact-hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.contact-hero-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  font-size: 14px;\n  color: #36b3ff;\n  margin-bottom: 22px;\n}\n.contact-hero-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c4d5ec;\n  text-decoration: none;\n}\n.contact-page[_ngcontent-%COMP%]   .contact-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(48px, 5.3vw, 76px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n  margin: 0 0 20px;\n  color: #fff;\n  font-weight: 700;\n}\n.contact-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2ba8f7;\n}\n.contact-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.65;\n  color: #c4d1e3;\n  max-width: 720px;\n  margin: 0;\n}\n.contact-hero-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-top: 38px;\n  gap: 18px;\n}\n.contact-hero-benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-right: 1px solid #19609a;\n  padding-right: 10px;\n}\n.contact-hero-benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border: 0;\n  padding-right: 0;\n}\n.contact-hero-benefits[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  flex: 0 0 50px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #064279,\n      #022349);\n  color: #3cb9ff;\n  font-size: 29px;\n}\n.contact-hero-benefits[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.contact-hero-benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #c2d0e5;\n  font-size: 12px;\n  margin-top: 5px;\n  line-height: 1.5;\n}\n.contact-hero-art[_ngcontent-%COMP%] {\n  position: relative;\n  height: 350px;\n  perspective: 800px;\n}\n.contact-globe[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  left: 19%;\n  top: 0;\n  overflow: hidden;\n  border: 1px solid #29afff88;\n  background:\n    radial-gradient(\n      circle at 27% 22%,\n      #1d95d3,\n      #073b73 42%,\n      #021c43 77%);\n  box-shadow: inset 9px 5px 20px #21bcff55, 0 0 45px #087de333;\n}\n.contact-globe[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background-image: radial-gradient(#37b5ef 1px, transparent 1.6px);\n  background-size: 6px 6px;\n  opacity: .55;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 45% 30%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      ellipse at 45% 30%,\n      #000,\n      transparent 75%);\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 25%;\n  border: 1px solid #36b3ed60;\n  border-radius: 50%;\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  inset: 25% 0;\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  inset: 10% 10%;\n  transform: rotate(35deg);\n}\n.contact-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4%;\n  top: 48px;\n  width: 95%;\n  height: 180px;\n  border: 1px solid #22b9fbb0;\n  border-radius: 50%;\n  transform: rotate(-22deg);\n}\n.orbit-two[_ngcontent-%COMP%] {\n  transform: rotate(25deg);\n  opacity: .45;\n  top: 73px;\n}\n.contact-orbit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 12%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #7be2ff;\n  box-shadow: 0 0 12px #00bdff;\n}\n.contact-glass[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  border: 2px solid #a7e7ff;\n  border-radius: 25px;\n  background:\n    linear-gradient(\n      140deg,\n      #5bc4ffb8,\n      #075299cc 55%,\n      #168dedab);\n  box-shadow:\n    inset 4px 4px 13px #ffffff50,\n    0 15px 40px #00102980,\n    0 0 15px #079deb55;\n  transform: rotateY(-14deg) rotate(-3deg);\n}\n.contact-glass[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 75px;\n  color: #c4f5ff;\n  text-shadow: 0 0 18px #00acff;\n}\n.glass-phone[_ngcontent-%COMP%] {\n  width: 165px;\n  height: 195px;\n  left: 36%;\n  top: 133px;\n  z-index: 3;\n}\n.glass-phone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 110px;\n}\n.glass-mail[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 125px;\n  left: 11%;\n  top: 201px;\n  z-index: 4;\n}\n.glass-chat[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 135px;\n  left: 70%;\n  top: 155px;\n  z-index: 2;\n}\n.glass-chat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.contact-wave[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -10%;\n  top: 170px;\n  width: 125%;\n  height: 180px;\n  border-bottom: 5px solid #00c3ff;\n  border-radius: 50%;\n  transform: rotate(-13deg);\n  box-shadow:\n    0 12px 12px -8px #019fff,\n    0 26px 0 -17px #0671d3,\n    0 40px 0 -28px #004e9f;\n}\n@media (max-width: 1100px) {\n  .contact-hero[_ngcontent-%COMP%]   .contact-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1.2fr 1fr;\n    gap: 15px;\n    padding-inline: 24px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    flex-basis: 36px;\n    font-size: 24px;\n  }\n  .contact-hero-art[_ngcontent-%COMP%] {\n    transform: scale(.9);\n    transform-origin: center;\n  }\n}\n@media (max-width: 800px) {\n  .contact-hero[_ngcontent-%COMP%]   .contact-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-page[_ngcontent-%COMP%]   .contact-hero[_ngcontent-%COMP%] {\n    padding: 35px 0;\n  }\n  .contact-hero-art[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 490px;\n    margin: 15px auto 0;\n    transform: none;\n  }\n  .contact-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n    margin-top: 25px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .contact-hero-art[_ngcontent-%COMP%] {\n    height: 290px;\n    transform: scale(.8);\n    transform-origin: top center;\n    margin-bottom: -45px;\n  }\n  .contact-hero-benefits[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.contact-globe[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-globe-turn 36s linear infinite;\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-meridian-turn 18s linear infinite;\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -6s;\n}\n.contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -12s;\n}\n@keyframes _ngcontent-%COMP%_contact-globe-turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_contact-meridian-turn {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-globe[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .contact-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.contact-hero-animation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.contact-hero-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: 390px;\n  overflow: visible;\n}\n.contact-animated-globe[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 16px #128fff66);\n}\n.contact-floating-channel[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #0c427a;\n  stroke: #469dec;\n  stroke-width: 1.5;\n  filter: drop-shadow(0 0 8px #209fff66);\n}\n.contact-floating-channel[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #a4dfff;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.connect-heading[_ngcontent-%COMP%] {\n  fill: #06315d;\n  font: 700 24px system-ui, sans-serif;\n  font-style: italic;\n}\n.connect-blue[_ngcontent-%COMP%] {\n  fill: #128ee7;\n}\n.connect-subtitle[_ngcontent-%COMP%] {\n  fill: #416d99;\n  font: 9px system-ui, sans-serif;\n}\n.phone-caption[_ngcontent-%COMP%] {\n  fill: #154a7d;\n  font: 8px system-ui, sans-serif;\n}\n.contact-floating-phone[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-device-float 6s ease-in-out infinite;\n}\n.contact-floating-channel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-channel-float 5s ease-in-out infinite;\n}\n.channel-mail[_ngcontent-%COMP%] {\n  animation-delay: -1.5s;\n}\n.channel-chat[_ngcontent-%COMP%] {\n  animation-delay: -3s;\n}\n.contact-globe-route[_ngcontent-%COMP%], \n.contact-orbit-path[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-route-flow 14s linear infinite;\n}\n.contact-beacon[_ngcontent-%COMP%] {\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_contact-beacon-pulse 3s ease-in-out infinite;\n}\n.beacon-two[_ngcontent-%COMP%] {\n  animation-delay: -1.5s;\n}\n.contact-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_contact-dot-pulse 1.5s ease-in-out infinite;\n}\n.contact-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: .2s;\n}\n.contact-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: .4s;\n}\n@keyframes _ngcontent-%COMP%_contact-device-float {\n  50% {\n    transform: translateY(-7px);\n  }\n}\n@keyframes _ngcontent-%COMP%_contact-channel-float {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_contact-route-flow {\n  to {\n    stroke-dashoffset: -180;\n  }\n}\n@keyframes _ngcontent-%COMP%_contact-beacon-pulse {\n  50% {\n    opacity: .4;\n    transform: scale(1.5);\n  }\n}\n@keyframes _ngcontent-%COMP%_contact-dot-pulse {\n  50% {\n    opacity: .25;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-hero-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n.office-locator[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #c9dcf4;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 20px 52px rgba(7, 31, 69, .1);\n}\n.office-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0;\n  padding: 8px;\n  border-bottom: 1px solid #dbe7f5;\n  background: #f5f9ff;\n}\n.office-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-width: 0;\n  min-height: 70px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: 14px;\n  color: #536987;\n  background: transparent;\n  font-family: var(--body);\n  text-align: left;\n  cursor: pointer;\n  transition:\n    color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.office-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 18px;\n  bottom: 5px;\n  left: 18px;\n  height: 3px;\n  border-radius: 99px;\n  background: #1467dc;\n  opacity: 0;\n  transform: scaleX(.35);\n  transition: opacity .2s, transform .2s;\n}\n.office-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0a315f;\n  background: #eaf3ff;\n}\n.office-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(20, 103, 220, .24);\n  outline-offset: -3px;\n}\n.office-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: #07336c;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(20, 103, 220, .12);\n}\n.office-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.office-tabs[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  color: #1467dc;\n  background: #e5f0ff;\n  font-size: 20px;\n}\n.office-tabs[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.office-tabs[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.office-tabs[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.office-tabs[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #7385a0;\n  font: 650 9px/1.2 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.office-locator-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, .82fr) minmax(0, 1.48fr);\n  min-height: 500px;\n}\n.office-contact-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 38px 34px;\n  border-right: 1px solid #dbe7f5;\n  background:\n    linear-gradient(\n      150deg,\n      #fff 40%,\n      #f4f9ff);\n}\n.office-contact-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #dbe7f5;\n}\n.office-contact-heading[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 50px;\n  flex: 0 0 50px;\n  border: 1px solid #b7d4f8;\n  border-radius: 14px;\n  color: #1467dc;\n  background: #ebf4ff;\n  font-size: 27px;\n}\n.office-contact-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #3971b7;\n  font: 750 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.office-contact-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-navy);\n  font: 800 24px/1.15 var(--disp);\n}\n.office-contact-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n  margin: 28px 0;\n}\n.office-contact-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr);\n  gap: 13px;\n  align-items: start;\n}\n.office-contact-row[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  color: #1467dc;\n  background: #eaf3ff;\n  font-size: 19px;\n}\n.office-contact-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1px 0 6px;\n  color: #72829a;\n  font: 750 9px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.office-contact-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--c-navy);\n  font-size: 14px;\n  line-height: 1.45;\n}\n.office-contact-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #566984;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.office-contact-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0c61ce;\n  font-size: 13px;\n  font-weight: 750;\n  line-height: 1.55;\n  text-decoration: none;\n}\n.office-contact-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.office-directions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: max-content;\n  margin-top: auto;\n  padding: 12px 17px;\n  border-radius: 9px;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0752b4);\n  box-shadow: 0 10px 22px rgba(20, 103, 220, .2);\n  font-size: 12px;\n  font-weight: 800;\n  text-decoration: none;\n  transition: transform .2s, box-shadow .2s;\n}\n.office-directions[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 28px rgba(20, 103, 220, .28);\n}\n.office-map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  min-height: 500px;\n  background: #e8f0f8;\n}\n.office-map-panel[_ngcontent-%COMP%]::before {\n  content: "Google Maps";\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  z-index: 1;\n  padding: 7px 10px;\n  border: 1px solid rgba(183, 205, 231, .85);\n  border-radius: 8px;\n  color: #49627f;\n  background: rgba(255, 255, 255, .92);\n  box-shadow: 0 6px 16px rgba(7, 31, 69, .1);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n.office-map-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 500px;\n  border: 0;\n}\n@media (max-width: 900px) {\n  .office-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 6px;\n  }\n  .office-locator-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .office-contact-panel[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid #dbe7f5;\n  }\n  .office-map-panel[_ngcontent-%COMP%], \n   .office-map-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    min-height: 410px;\n  }\n}\n@media (max-width: 560px) {\n  .contact-offices[_ngcontent-%COMP%] {\n    padding-inline: 0;\n  }\n  .office-locator[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n  .office-tabs[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .office-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    min-height: 60px;\n    padding: 9px;\n  }\n  .office-tabs[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n    width: 31px;\n    height: 31px;\n    font-size: 18px;\n  }\n  .office-tabs[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .office-contact-panel[_ngcontent-%COMP%] {\n    padding: 27px 20px;\n  }\n  .office-contact-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .office-map-panel[_ngcontent-%COMP%], \n   .office-map-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n}\n@media (max-width: 700px) {\n  .contact-form-section[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    min-width: 0;\n    width: 100%;\n  }\n  .contact-form-copy[_ngcontent-%COMP%], \n   .contact-form-card[_ngcontent-%COMP%], \n   .contact-form-methods[_ngcontent-%COMP%] {\n    min-width: 0;\n    max-width: 100%;\n  }\n  .contact-form-methods[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n   .contact-form-methods[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 0;\n    gap: 10px;\n  }\n  .contact-form-methods[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .contact-form-methods[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .contact-form-methods[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .contact-form-methods[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: anywhere;\n  }\n  .contact-form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: clamp(25px, 6vw, 34px);\n    overflow-wrap: anywhere;\n  }\n  .xch-field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .xch-phone-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100px minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=contact.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactPage, [{
    type: Component,
    args: [{ selector: "xh-contact-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="ppage as-page contact-page">\r
  <section class="pp-hero contact-hero" aria-labelledby="contact-hero-title">\r
    <div class="wrap contact-hero-grid">\r
      <div class="contact-hero-copy">\r
        <nav class="contact-hero-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">&rsaquo;</span><span>Contact Us</span></nav>\r
        <h1 id="contact-hero-title">Contact <span>Us</span></h1>\r
        <p>We&rsquo;re here to help. Get in touch with our team for any questions, support, or custom solutions &mdash; and let&rsquo;s build something great together.</p>\r
        <div class="contact-hero-benefits">\r
          <div><span class="material-symbols-outlined" aria-hidden="true">headset_mic</span><div><b>Expert Support</b><small>Always here for you</small></div></div>\r
          <div><span class="material-symbols-outlined" aria-hidden="true">bolt</span><div><b>Quick Response</b><small>We value your time</small></div></div>\r
          <div><span class="material-symbols-outlined" aria-hidden="true">groups</span><div><b>Real Solutions</b><small>For your business needs</small></div></div>\r
        </div>\r
      </div>\r
      <div class="contact-hero-art contact-hero-animation" aria-hidden="true">\r
        <svg viewBox="0 0 500 370" fill="none">\r
          <defs>\r
            <radialGradient id="contactGlobeFill" cx=".3" cy=".25"><stop stop-color="#187cc6"/><stop offset="1" stop-color="#03234a"/></radialGradient>\r
            <linearGradient id="contactScreenFill" x1="105" y1="170" x2="330" y2="310" gradientUnits="userSpaceOnUse"><stop stop-color="#eef8ff"/><stop offset="1" stop-color="#a3cfff"/></linearGradient>\r
            <linearGradient id="contactDeviceFill"><stop stop-color="#3a79ba"/><stop offset="1" stop-color="#0b2a50"/></linearGradient>\r
          </defs>\r
          <ellipse cx="271" cy="336" rx="177" ry="14" fill="#21aaff" opacity=".12"/>\r
          <g class="contact-animated-globe">\r
            <circle cx="302" cy="166" r="112" fill="url(#contactGlobeFill)" stroke="#3ebaff" stroke-width="1.5"/>\r
            <g stroke="#68caff" stroke-opacity=".35">\r
              <ellipse cx="302" cy="166" rx="57" ry="112"/><ellipse cx="302" cy="166" rx="90" ry="112"/>\r
              <ellipse cx="302" cy="166" rx="112" ry="42"/><ellipse cx="302" cy="166" rx="105" ry="79"/>\r
              <path d="M190 166H414M302 54V278"/>\r
            </g>\r
            <path class="contact-globe-route" d="M215 122Q320 54 388 145Q395 210 249 243" stroke="#8cddff" stroke-width="2" stroke-dasharray="5 10"/>\r
            <circle class="contact-beacon" cx="231" cy="131" r="5" fill="#71e2ff"/><circle class="contact-beacon beacon-two" cx="365" cy="188" r="5" fill="#71e2ff"/>\r
          </g>\r
          <ellipse class="contact-orbit-path" cx="293" cy="166" rx="174" ry="79" transform="rotate(-24 293 166)" stroke="#49baff" stroke-opacity=".45" stroke-dasharray="3 8"/>\r
          <g class="contact-laptop">\r
            <path d="M115 173Q117 163 127 163H325Q338 163 335 177L315 306H96Z" fill="url(#contactDeviceFill)" stroke="#70b9ed" stroke-width="2"/>\r
            <path d="M127 176H321L302 292H109Z" fill="url(#contactScreenFill)"/>\r
            <text x="145" y="209" class="connect-heading">Let's</text><text x="141" y="237" class="connect-heading connect-blue">Connect</text>\r
            <text x="138" y="254" class="connect-subtitle">We're here to help.</text>\r
            <g class="contact-typing" fill="#178ce3"><circle cx="144" cy="274" r="3"/><circle cx="156" cy="274" r="3"/><circle cx="168" cy="274" r="3"/></g>\r
            <path d="M96 306H315L347 324Q351 330 338 332H70Q56 330 66 323Z" fill="url(#contactDeviceFill)" stroke="#68abdf" stroke-width="1.5"/>\r
            <path d="M174 308H239L247 316H165Z" fill="#86b9e2" opacity=".5"/>\r
          </g>\r
          <g class="contact-floating-phone">\r
            <rect x="332" y="198" width="75" height="132" rx="14" fill="#09284b" stroke="#77bdf5" stroke-width="2"/>\r
            <rect x="338" y="204" width="63" height="120" rx="9" fill="url(#contactScreenFill)"/>\r
            <path d="M355 204H385L381 211H359Z" fill="#09284b"/>\r
            <circle cx="369" cy="252" r="19" fill="#138ee7"/>\r
            <path d="M359 249H379V259H368L362 263V259H359Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>\r
            <text x="369" y="290" class="phone-caption" text-anchor="middle">Get in touch</text><text x="369" y="303" class="phone-caption" text-anchor="middle">Anytime</text>\r
          </g>\r
          <g class="contact-floating-channel channel-call">\r
            <circle cx="133" cy="104" r="24"/>\r
            <path d="M123 94L128 92L132 99L128 103Q132 110 138 111L141 107L147 111L145 117Q132 122 121 101Z"/>\r
          </g>\r
          <g class="contact-floating-channel channel-mail">\r
            <circle cx="260" cy="39" r="24"/>\r
            <path d="M248 31H272V47H248ZM248 31L260 41L272 31"/>\r
          </g>\r
          <g class="contact-floating-channel channel-chat">\r
            <circle cx="413" cy="71" r="24"/>\r
            <path d="M402 62H424V77H413L405 83V77H402Z"/>\r
            <g class="contact-typing" fill="#a4dfff" stroke="none"><circle cx="407" cy="70" r="1.5"/><circle cx="413" cy="70" r="1.5"/><circle cx="419" cy="70" r="1.5"/></g>\r
          </g>\r
        </svg>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="contact-body">\r
    <div class="wrap contact-wrap">\r
      <section class="contact-section" aria-labelledby="contact-options-title">\r
        <div class="contact-heading">\r
          <span>Talk to our team</span>\r
          <h2 id="contact-options-title">Choose the fastest way to reach us</h2>\r
          <p>Our Mumbai team is available for sales, support and service enquiries.</p>\r
        </div>\r
\r
        <div class="contact-channel-grid">\r
          <a href="tel:+912267111555" class="contact-channel">\r
            <span class="contact-channel-icon contact-blue" aria-hidden="true">&#9742;</span>\r
            <span><b>Call us</b><small>+91-2267111555</small><em>Mon-Sat, 9 AM-8 PM IST</em></span>\r
            <strong aria-hidden="true">&rarr;</strong>\r
          </a>\r
          <a href="https://wa.me/918657032540" target="_blank" rel="noopener" class="contact-channel">\r
            <span class="contact-channel-icon contact-green" aria-hidden="true">&#9673;</span>\r
            <span><b>WhatsApp</b><small>+91 8657032540</small><em>Fastest for quick questions</em></span>\r
            <strong aria-hidden="true">&rarr;</strong>\r
          </a>\r
          <a href="mailto:sales@xcellhost.cloud" class="contact-channel">\r
            <span class="contact-channel-icon contact-orange" aria-hidden="true">&#9993;</span>\r
            <span><b>Email</b><small>sales&#64;xcellhost.cloud</small><em>Replies within one business day</em></span>\r
            <strong aria-hidden="true">&rarr;</strong>\r
          </a>\r
          <article class="contact-channel">\r
            <span class="contact-channel-icon contact-violet" aria-hidden="true">&#8982;</span>\r
            <span><b>Office</b><small>Mumbai, Maharashtra</small><em>XcellHost Cloud Services Pvt. Ltd.</em></span>\r
          </article>\r
        </div>\r
      </section>\r
\r
      <section class="contact-form-section" aria-labelledby="contact-form-title">\r
        <div class="contact-form-copy">\r
          <span class="contact-kicker">Get in touch</span>\r
          <h2>Tell us what you need.<br /><strong>We&apos;ll take it from here.</strong></h2>\r
          <p>\r
            Complete the form for a sales enquiry, partnership discussion, free trial,\r
            demo or callback. We&apos;ll connect you with the right specialist.\r
          </p>\r
          <div class="contact-form-methods">\r
            <a href="tel:+912267111555">\r
              <span class="method-icon method-blue material-symbols-outlined" aria-hidden="true">phone_in_talk</span>\r
              <span><small>Call us - 24x7</small><strong>+91-22-6711 1555</strong></span>\r
              <b aria-hidden="true">&rarr;</b>\r
            </a>\r
            <a href="https://wa.me/918657032540" target="_blank" rel="noopener">\r
              <span class="method-icon method-green material-symbols-outlined" aria-hidden="true">chat</span>\r
              <span><small>WhatsApp</small><strong>+91 86570 32540</strong></span>\r
              <b aria-hidden="true">&rarr;</b>\r
            </a>\r
            <a href="mailto:sales@xcellhost.cloud">\r
              <span class="method-icon method-orange material-symbols-outlined" aria-hidden="true">mail</span>\r
              <span><small>Email - reply in one business day</small><strong>sales&#64;xcellhost.cloud</strong></span>\r
              <b aria-hidden="true">&rarr;</b>\r
            </a>\r
            <div>\r
              <span class="method-icon method-violet material-symbols-outlined" aria-hidden="true">location_on</span>\r
              <span><small>Office</small><strong>Mumbai, Maharashtra</strong></span>\r
            </div>\r
          </div>\r
          <div class="contact-trust">\r
            <span>ISO 27001</span><span>ISO 20000-1</span><span>Microsoft Gold Partner</span><span>24x7 Support</span>\r
          </div>\r
        </div>\r
\r
        <div class="contact-form-card">\r
          <section class="xch-sales-page" id="xch-sales-enquiry-section">\r
            <div class="xch-form-shell">\r
              <div class="contact-form-head xch-form-head">\r
                <h2 id="contact-form-title">Get in touch with our team</h2>\r
                <!-- <p data-xch-custom-text>Our sales team can answer questions about our products, services and managed cloud solutions.</p> -->\r
              </div>\r
\r
              <form\r
                class="xch-form"\r
                action="https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/xcellhostform/formperma/bZ5rEp9aOJGgQGNccOrarg3MksQYykD8HUut8dl-c5w/htmlRecords/submit"\r
                name="xch_sales_enquiry_form"\r
                id="xch-sales-enquiry-form"\r
                method="POST"\r
                accept-charset="UTF-8"\r
                enctype="multipart/form-data"\r
              >\r
                <input type="hidden" name="zf_referrer_name" value="">\r
                <input type="hidden" name="zf_redirect_url" value="">\r
                <input type="hidden" name="zc_gad" value="">\r
\r
                <div class="xch-field-grid">\r
                  <div class="xch-field">\r
                    <label class="xch-label" for="xch-sales-first-name">First name <span class="xch-required">*</span></label>\r
                    <input id="xch-sales-first-name" type="text" name="Name_First" class="xch-input" autocomplete="given-name" required>\r
                  </div>\r
\r
                  <div class="xch-field">\r
                    <label class="xch-label" for="xch-sales-last-name">Last name <span class="xch-required">*</span></label>\r
                    <input id="xch-sales-last-name" type="text" name="Name_Last" class="xch-input" autocomplete="family-name" required>\r
                  </div>\r
\r
                  <div class="xch-field xch-field-full">\r
                    <label class="xch-label" for="xch-sales-company">Company name <span class="xch-required">*</span></label>\r
                    <input id="xch-sales-company" type="text" name="SingleLine" class="xch-input" autocomplete="organization" required>\r
                  </div>\r
\r
                  <div class="xch-field">\r
                    <label class="xch-label" for="xch-sales-phone">Phone Number <span class="xch-required">*</span></label>\r
                    <div class="xch-phone-grid">\r
                      <select name="CountryCode" class="xch-select" aria-label="Country code">\r
                        <option value="91" selected>India +91</option>\r
                        <option value="971">UAE +971</option>\r
                        <option value="1">USA/Canada +1</option>\r
                        <option value="44">UK +44</option>\r
                        <option value="65">Singapore +65</option>\r
                        <option value="61">Australia +61</option>\r
                        <option value="254">Kenya +254</option>\r
                        <option value="256">Uganda +256</option>\r
                        <option value="243">DR Congo +243</option>\r
                      </select>\r
\r
                      <input id="xch-sales-phone" type="tel" name="PhoneNumber_countrycode" class="xch-input" autocomplete="tel" inputmode="numeric" maxlength="15" pattern="[0-9]{7,15}" placeholder="Phone Number" required>\r
                    </div>\r
                  </div>\r
\r
                  <div class="xch-field">\r
                    <label class="xch-label" for="xch-sales-email">Email <span class="xch-required">*</span></label>\r
                    <input id="xch-sales-email" type="email" name="Email" class="xch-input" autocomplete="email" required>\r
                  </div>\r
\r
                </div>\r
\r
                <input type="hidden" name="SingleLine1" data-xch-product-field value="Website Enquiry">\r
                <input type="hidden" name="Number" value="1">\r
                <input type="hidden" name="SingleLine2" data-xch-service-field value="Website Enquiry">\r
\r
                <div class="xch-option-section xch-role-section">\r
                  <span class="xch-option-title">I am a <span class="xch-required">*</span></span>\r
                  <div class="xch-radio-list">\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio1" value="Customer C" required>\r
                      <span>Customer</span>\r
                    </label>\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio1" value="Partner P">\r
                      <span>Partner</span>\r
                    </label>\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio1" value="Vendor V">\r
                      <span>Vendor</span>\r
                    </label>\r
                  </div>\r
                </div>\r
\r
                <div class="xch-option-section">\r
                  <span class="xch-option-title">How can we help? <span class="xch-required">*</span></span>\r
                  <div class="xch-radio-list">\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio" value="Schedule 1:1 Demo" required>\r
                      <span>Schedule 1:1 Demo</span>\r
                    </label>\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio" value="Ask For FREE Trial">\r
                      <span>Ask for <span class="xch-free">FREE</span> Trial</span>\r
                    </label>\r
                    <label class="xch-radio-item">\r
                      <input type="radio" name="Radio" value="Request a CallBack">\r
                      <span>Request Callback</span>\r
                    </label>\r
                  </div>\r
                </div>\r
\r
                <div class="xch-captcha-wrap" data-xch-captcha>\r
                  <span class="xch-captcha-label">Captcha</span>\r
                  <span class="xch-captcha-number" data-xch-captcha-first></span>\r
                  <span class="xch-captcha-symbol">+</span>\r
                  <span class="xch-captcha-number" data-xch-captcha-second></span>\r
                  <span class="xch-captcha-symbol">=</span>\r
                  <input\r
                    type="text"\r
                    name="captcha_answer"\r
                    class="xch-captcha-input"\r
                    data-xch-captcha-answer\r
                    placeholder="Answer"\r
                    autocomplete="off"\r
                    inputmode="numeric"\r
                    pattern="[0-9]*"\r
                    aria-label="Captcha answer"\r
                    required\r
                  >\r
                  <span class="xch-captcha-message" data-xch-captcha-message aria-live="polite"></span>\r
                </div>\r
\r
                <p class="xch-policy">\r
                  XcellHost will use your information to respond to your enquiry and communicate relevant products and services.\r
                  See our\r
                  <a href="https://www.xcellhost.cloud/privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>\r
                  and\r
                  <a href="https://www.xcellhost.cloud/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms of Service</a>.\r
                </p>\r
\r
                <div class="xch-submit-row">\r
                  <button type="submit" class="xch-submit-button" data-xch-submit-button disabled>\r
                    <span data-xch-submit-text>Submit</span>\r
                    <span class="xch-submit-arrow" aria-hidden="true">&rarr;</span>\r
                  </button>\r
                </div>\r
              </form>\r
            </div>\r
          </section>\r
        </div>\r
      </section>\r
\r
      <section class="contact-offices" aria-labelledby="contact-offices-title">\r
        <div class="contact-offices-head">\r
          <span>Our offices</span>\r
          <h2 id="contact-offices-title">India, Middle East &amp; Asia</h2>\r
          <p>Local teams ready to support your cloud and security requirements.</p>\r
        </div>\r
\r
        <div class="office-locator">\r
          <div class="office-tabs" role="tablist" aria-label="Choose an office location">\r
            @for (office of offices; track office.city; let index = $index) {\r
              <button\r
                type="button"\r
                role="tab"\r
                [class.is-active]="selectedOfficeIndex() === index"\r
                [attr.aria-selected]="selectedOfficeIndex() === index"\r
                [attr.aria-controls]="'office-panel-' + index"\r
                [attr.id]="'office-tab-' + index"\r
                (click)="selectOffice(index)"\r
              >\r
                <span class="material-symbols-outlined" aria-hidden="true">location_on</span>\r
                <span><b>{{ office.city }}</b><small>{{ office.country }}</small></span>\r
              </button>\r
            }\r
          </div>\r
\r
          <div\r
            class="office-locator-body"\r
            role="tabpanel"\r
            [attr.id]="'office-panel-' + selectedOfficeIndex()"\r
            [attr.aria-labelledby]="'office-tab-' + selectedOfficeIndex()"\r
          >\r
            <article class="office-contact-panel">\r
              <div class="office-contact-heading">\r
                <span class="material-symbols-outlined" aria-hidden="true">apartment</span>\r
                <div><small>{{ selectedOffice().label }}</small><h3>{{ selectedOffice().city }}, {{ selectedOffice().country }}</h3></div>\r
              </div>\r
\r
              <div class="office-contact-list">\r
                <div class="office-contact-row">\r
                  <span class="material-symbols-outlined" aria-hidden="true">location_on</span>\r
                  <div><small>Address</small><strong>{{ selectedOffice().company }}</strong><p>{{ selectedOffice().address }}</p></div>\r
                </div>\r
                <div class="office-contact-row">\r
                  <span class="material-symbols-outlined" aria-hidden="true">phone_in_talk</span>\r
                  <div><small>Contact</small><a [href]="'tel:' + selectedOffice().phoneHref">{{ selectedOffice().phoneDisplay }}</a></div>\r
                </div>\r
                <div class="office-contact-row">\r
                  <span class="material-symbols-outlined" aria-hidden="true">mail</span>\r
                  <div><small>Email</small><a [href]="'mailto:' + selectedOffice().email">{{ selectedOffice().email }}</a></div>\r
                </div>\r
              </div>\r
\r
              <a class="office-directions" [href]="selectedOffice().directionsUrl" target="_blank" rel="noopener noreferrer">\r
                Open in Google Maps <span aria-hidden="true">&nearr;</span>\r
              </a>\r
            </article>\r
\r
            <div class="office-map-panel">\r
              <iframe\r
                [src]="selectedOffice().mapUrl"\r
                [title]="selectedOffice().city + ' office location on Google Maps'"\r
                loading="lazy"\r
                referrerpolicy="strict-origin-when-cross-origin"\r
                allowfullscreen\r
              ></iframe>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section class="contact-callback">\r
        <div><span>Prefer we call you?</span><h2>Request a callback at a convenient time</h2><p>We typically call back within 30 minutes during business hours.</p></div>\r
        <button type="button" class="btn btn-primary" (click)="openCallback()">Request a Callback &rarr;</button>\r
      </section>\r
\r
      <section class="contact-section contact-existing" aria-labelledby="existing-title">\r
        <div class="contact-heading compact"><span>Customer care</span><h2 id="existing-title">Existing customer?</h2></div>\r
        <div class="contact-existing-grid">\r
          <a class="contact-existing-card" href="https://supportdesk.xcellhost.cloud/portal/en/home" target="_blank" rel="noopener noreferrer" aria-label="Open the XcellHost Support Portal in a new tab"><span>&#127911;</span><div><h3>Support Portal</h3><p>Raise a ticket, track its status and browse the knowledge base.</p></div></a>\r
          <a class="contact-existing-card" href="https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin" target="_blank" rel="noopener noreferrer" aria-label="Open the XcellHost Billing Portal in a new tab"><span>&#128179;</span><div><h3>Billing Portal</h3><p>Access invoices, renewals and secure payment options.</p></div></a>\r
          <a class="contact-existing-card" routerLink="/escalation-matrix" aria-label="Open the XcellHost escalation matrix"><span>&#128680;</span><div><h3>Emergency</h3><p>For a breach or outage, call and say "emergency" for the on-call team.</p></div></a>\r
        </div>\r
      </section>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ['/* src/app/pages/contact.page.css */\n:host {\n  display: contents;\n}\n.contact-page {\n  --c-navy:#071f45;\n  --c-blue:#1467dc;\n  --c-ice:#f2f7ff;\n  --c-line:#d7e3f4;\n  --c-slate:#526481;\n  background: #fff;\n  color: var(--c-navy);\n}\n.contact-body {\n  padding: 32px 0 41px 0;\n  background: #fff;\n}\n.contact-wrap {\n  display: grid;\n  gap: 68px;\n}\n.contact-section {\n  min-width: 0;\n}\n.contact-page .contact-section[aria-labelledby=contact-options-title] {\n  display: none;\n}\n.contact-heading {\n  max-width: 720px;\n  margin-bottom: 25px;\n}\n.contact-heading > span,\n.contact-form-head > span {\n  display: block;\n  margin-bottom: 9px;\n  color: var(--c-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.contact-heading h2,\n.contact-form-copy h2,\n.contact-form-head h2,\n.contact-callback h2 {\n  margin: 0;\n  color: var(--c-navy);\n  font-family: var(--disp);\n}\n.contact-heading h2 {\n  font-size: clamp(25px, 3vw, 38px);\n  line-height: 1.18;\n}\n.contact-heading p {\n  margin: 10px 0 0;\n  color: var(--c-slate);\n  font-size: 14px;\n}\n.contact-heading.compact {\n  margin-bottom: 20px;\n}\n.contact-channel-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-channel {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 14px;\n  min-height: 108px;\n  padding: 19px;\n  border: 1px solid var(--c-line);\n  border-radius: 15px;\n  background: #fff;\n  color: var(--c-navy);\n  box-shadow: 0 8px 24px rgba(7, 31, 69, .055);\n  transition: .22s;\n}\na.contact-channel:hover {\n  border-color: #9fc4f5;\n  transform: translateY(-3px);\n  box-shadow: 0 14px 30px rgba(20, 103, 220, .1);\n}\n.contact-channel-icon {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  font-size: 20px;\n  background: #eef5ff;\n  border: 1px solid #d7e7fc;\n}\n.contact-blue {\n  color: #1269df;\n}\n.contact-green {\n  color: #08a76f;\n}\n.contact-orange {\n  color: #e67513;\n}\n.contact-violet {\n  color: #7b52dc;\n}\n.contact-channel b,\n.contact-channel small,\n.contact-channel em {\n  display: block;\n}\n.contact-channel b {\n  margin-bottom: 5px;\n  font: 700 16px var(--disp);\n}\n.contact-channel small {\n  color: var(--c-blue);\n  font-size: 13px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n.contact-channel em {\n  margin-top: 4px;\n  color: var(--c-slate);\n  font-size: 11.5px;\n  font-style: normal;\n}\n.contact-channel > strong {\n  color: var(--c-blue);\n  font-size: 20px;\n}\n.contact-form-section {\n  order: -1;\n  display: grid;\n  grid-template-columns: minmax(0, .82fr) minmax(560px, 1.18fr);\n  gap: clamp(38px, 6vw, 78px);\n  align-items: center;\n  padding: clamp(8px, 1.25vw, 14px) clamp(34px, 5vw, 62px);\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.contact-kicker {\n  display: inline-flex;\n  padding: 7px 12px;\n  border: 1px solid #b9d4f8;\n  border-radius: 999px;\n  color: var(--c-blue);\n  background: #fff;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.contact-form-copy h2 {\n  margin-top: 18px;\n  font-size: clamp(31px, 3.3vw, 45px);\n  line-height: 1.06;\n  letter-spacing: -.035em;\n}\n.contact-form-copy h2 strong {\n  color: var(--c-blue);\n  font-size: 37px;\n}\n.contact-form-copy > p {\n  margin: 17px 0;\n  color: var(--c-slate);\n  font-size: 13.5px;\n  line-height: 1.65;\n}\n.contact-form-methods {\n  display: grid;\n  gap: 9px;\n}\n.contact-form-methods > a,\n.contact-form-methods > div {\n  display: grid;\n  grid-template-columns: 40px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  min-height: 68px;\n  padding: 11px 14px;\n  border: 1px solid #d6e2f2;\n  border-radius: 12px;\n  color: var(--c-navy);\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(7, 31, 69, .045);\n  transition: .2s;\n}\n.contact-form-methods > a:hover {\n  border-color: #a8c9f3;\n  transform: translateX(3px);\n  box-shadow: 0 9px 22px rgba(20, 103, 220, .09);\n}\n.contact-form-methods .method-icon {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  background: #f5f9ff;\n  font-size: 17px;\n}\n.contact-form-methods small,\n.contact-form-methods strong {\n  display: block;\n}\n.contact-form-methods small {\n  margin-bottom: 3px;\n  color: #6d7d96;\n  font: 700 9px/1.2 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.contact-form-methods strong {\n  font-size: 12.5px;\n  overflow-wrap: anywhere;\n}\n.contact-form-methods b {\n  color: var(--c-blue);\n  font-size: 18px;\n}\n.method-blue {\n  color: #1467dc;\n}\n.method-green {\n  color: #08a76f;\n}\n.method-orange {\n  color: #e67513;\n}\n.method-violet {\n  color: #7b52dc;\n}\n.contact-trust {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 4px;\n  margin-top: 20px;\n  max-width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.contact-trust::-webkit-scrollbar {\n  display: none;\n}\n.contact-trust span {\n  flex: 0 0 auto;\n  padding: 6px 7px;\n  border: 1px solid #c5daf5;\n  border-radius: 999px;\n  color: #205da7;\n  background: #fff;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .035em;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.contact-form-card {\n  min-width: 0;\n  padding: clamp(10px, 1.25vw, 14px) clamp(18px, 2vw, 24px);\n  border: 1px solid #d4e1f1;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 18px 46px rgba(7, 31, 69, .11);\n}\n.contact-form-head {\n  margin-bottom: 23px;\n}\n.contact-form-head h2 {\n  font-size: clamp(25px, 2.5vw, 34px);\n}\n.contact-form-head p {\n  margin: 7px 0 0;\n  color: var(--c-slate);\n  font-size: 12.5px;\n}\n.contact-form-card form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px 13px;\n}\n.contact-field {\n  min-width: 0;\n}\n.contact-field-wide {\n  grid-column: 1/-1;\n}\n.contact-field label,\n.contact-interest legend {\n  display: block;\n  margin: 0 0 7px;\n  color: #50617c;\n  font: 700 9.5px/1.2 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.contact-field input,\n.contact-field select,\n.contact-captcha input {\n  width: 100%;\n  height: 45px;\n  padding: 0 13px;\n  border: 1px solid #cad7e8;\n  border-radius: 8px;\n  outline: none;\n  color: var(--c-navy);\n  background: #fbfdff;\n  font: 500 13px var(--body);\n  transition: .2s;\n}\n.contact-field input::placeholder,\n.contact-captcha input::placeholder {\n  color: #8b99ad;\n}\n.contact-field input:focus,\n.contact-field select:focus,\n.contact-captcha input:focus {\n  border-color: #3781e5;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .1);\n}\n.contact-field input.ng-invalid.ng-touched,\n.contact-captcha input.ng-invalid.ng-touched {\n  border-color: #e55364;\n}\n.contact-phone {\n  display: grid;\n  grid-template-columns: minmax(140px, .42fr) minmax(0, 1fr);\n  gap: 13px;\n}\n.contact-interest {\n  min-width: 0;\n  margin: 2px 0 0;\n  padding: 0;\n  border: 0;\n}\n.contact-interest-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 7px;\n}\n.contact-interest-grid label {\n  position: relative;\n  cursor: pointer;\n}\n.contact-interest-grid input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.contact-interest-grid span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 7px;\n  border: 1px solid #d1dceb;\n  border-radius: 8px;\n  color: #586985;\n  background: #f8fbff;\n  text-align: center;\n  font-size: 10.5px;\n  line-height: 1.25;\n  transition: .2s;\n}\n.contact-interest-grid input:checked + span {\n  color: #fff;\n  border-color: var(--c-blue);\n  background:\n    linear-gradient(\n      135deg,\n      #176ee0,\n      #0b52b5);\n  box-shadow: 0 6px 15px rgba(20, 103, 220, .18);\n}\n.contact-captcha {\n  display: grid;\n  grid-template-columns: auto 115px;\n  gap: 12px;\n  align-items: center;\n}\n.contact-captcha label {\n  margin: 0;\n  color: #526481;\n  font-size: 12px;\n}\n.contact-captcha strong {\n  color: var(--c-navy);\n  font-family: var(--mono);\n}\n.contact-consent {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  color: #677791;\n  font-size: 10.5px;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.contact-consent input {\n  flex: none;\n  margin-top: 2px;\n  accent-color: var(--c-blue);\n}\n.contact-consent a {\n  color: var(--c-blue);\n  font-weight: 700;\n}\n.contact-error {\n  margin: -3px 0 0;\n  color: #d63448;\n  font-size: 11.5px;\n}\n.contact-submit {\n  height: 49px;\n  border: 0;\n  border-radius: 8px;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #084ca9);\n  box-shadow: 0 11px 25px rgba(20, 103, 220, .24);\n  font: 750 13px var(--body);\n  cursor: pointer;\n  transition: .2s;\n}\n.contact-submit:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .32);\n}\n.contact-submit:disabled {\n  opacity: .65;\n  cursor: wait;\n  transform: none;\n}\n.contact-submit span {\n  margin-left: 7px;\n}\n.xch-sales-page {\n  width: 100%;\n}\n.contact-form-card .xch-sales-page {\n  padding: 0;\n}\n.xch-form-shell {\n  position: relative;\n}\n.xch-form-shell::before {\n  display: none;\n}\n.xch-form-head {\n  padding-top: 10px;\n}\n.xch-form {\n  display: grid;\n  gap: 14px;\n}\n.contact-form-card form.xch-form {\n  grid-template-columns: 1fr;\n}\n.xch-field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n.xch-field {\n  min-width: 0;\n}\n.xch-field-full {\n  grid-column: 1/-1;\n}\n.xch-label,\n.xch-option-title {\n  display: block;\n  margin: 0 0 6px;\n  color: #32507c;\n  font: 700 11px/1.3 var(--body);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.xch-required {\n  color: #1467dc;\n}\n.xch-input,\n.xch-select {\n  display: block;\n  width: 100%;\n  height: 42px;\n  padding: 8px 12px;\n  border: 1px solid #d8e3f2;\n  border-radius: 0;\n  background: #f5f9ff;\n  color: var(--c-navy);\n  font: 500 13px var(--body);\n  outline: none;\n  transition:\n    border-color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.xch-input:hover,\n.xch-select:hover {\n  background: #edf4ff;\n}\n.xch-input:focus,\n.xch-select:focus {\n  border-color: #1467dc;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.xch-input.ng-invalid.ng-touched,\n.xch-select.ng-invalid.ng-touched,\n.xch-captcha-input.ng-invalid.ng-touched {\n  border-color: #e55364;\n}\n.xch-phone-grid {\n  display: grid;\n  grid-template-columns: 128px minmax(0, 1fr);\n  gap: 8px;\n}\n.xch-option-section {\n  display: grid;\n  gap: 8px;\n}\n.xch-radio-list {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.xch-radio-item {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 6px 10px;\n  border: 1px solid #d7e3f3;\n  background: #fff;\n  border-radius: 0;\n  cursor: pointer;\n  transition:\n    border-color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.xch-role-section {\n  grid-column: 1/-1;\n}\n.xch-role-section .xch-radio-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.xch-role-section .xch-radio-item {\n  justify-content: center;\n}\n.xch-role-section .xch-radio-item:nth-child(2) {\n  order: 3;\n}\n.xch-role-section .xch-radio-item:nth-child(3) {\n  order: 2;\n}\n.xch-radio-item:hover {\n  border-color: #8eb8ee;\n  background: #f7fbff;\n}\n.xch-radio-item input {\n  width: 13px;\n  height: 13px;\n  margin: 0 6px 0 0;\n  accent-color: #1467dc;\n}\n.xch-radio-item span {\n  color: #314762;\n  font-size: 11.5px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n.xch-radio-item:has(input:checked) {\n  border-color: #1467dc;\n  background: #edf5ff;\n  box-shadow: inset 0 0 0 1px rgba(20, 103, 220, .08);\n}\n.xch-free {\n  color: #1467dc !important;\n  font-weight: 900 !important;\n}\n.xch-captcha-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.xch-captcha-label {\n  color: #32507c;\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-number {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n  padding: 0 6px;\n  border: 1px solid #d6e4f7;\n  background: #f5f9ff;\n  color: var(--c-navy);\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-symbol {\n  color: #5c7396;\n  font-size: 12px;\n  font-weight: 800;\n}\n.xch-captcha-input {\n  width: 84px;\n  height: 34px;\n  padding: 6px 8px;\n  border: 1px solid #d8e3f2;\n  background: #fff;\n  color: var(--c-navy);\n  font: 700 12px var(--body);\n  text-align: center;\n  outline: none;\n  transition: border-color .2s, box-shadow .2s;\n}\n.xch-captcha-input:focus {\n  border-color: #1467dc;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.xch-captcha-input.is-correct {\n  border-color: #218739;\n  background: #f4fff7;\n}\n.xch-captcha-input.is-wrong {\n  border-color: #d63448;\n  background: #fff5f5;\n}\n.xch-captcha-message {\n  min-width: 58px;\n  font-size: 10px;\n  line-height: 1.2;\n  font-weight: 700;\n}\n.xch-captcha-message.is-correct {\n  color: #218739;\n}\n.xch-captcha-message.is-wrong {\n  color: #d63448;\n}\n.xch-submit-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.xch-submit-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-width: 150px;\n  min-height: 44px;\n  padding: 10px 18px;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0b52b5);\n  color: #fff;\n  font: 800 13px var(--body);\n  cursor: pointer;\n  transition: transform .2s, box-shadow .2s;\n  box-shadow: 0 11px 24px rgba(20, 103, 220, .22);\n}\n.xch-submit-button:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .28);\n}\n.xch-submit-button:disabled {\n  opacity: .65;\n  cursor: wait;\n  transform: none;\n}\n.xch-submit-arrow {\n  font-size: 16px;\n  transition: transform .2s;\n}\n.xch-submit-button:hover:not(:disabled) .xch-submit-arrow {\n  transform: translateX(4px);\n}\n.xch-policy {\n  margin: 2px 0 0;\n  color: #667791;\n  font-size: 10.5px;\n  line-height: 1.5;\n}\n.xch-policy a {\n  color: #0d57be;\n  font-weight: 700;\n  text-decoration: underline;\n}\n.xch-error {\n  margin: 0;\n}\n.contact-success {\n  min-height: 430px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  text-align: center;\n}\n.contact-success > span {\n  display: grid;\n  place-items: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: #fff;\n  background: #14aa78;\n  font-size: 28px;\n  font-weight: 900;\n  box-shadow: 0 0 0 11px #e8f8f2;\n}\n.contact-success h2 {\n  margin: 25px 0 7px;\n  color: var(--c-navy);\n  font-size: 32px;\n}\n.contact-success p {\n  max-width: 380px;\n  margin: 0;\n  color: var(--c-slate);\n}\n.contact-success small {\n  margin-top: 15px;\n  color: var(--c-blue);\n  font-family: var(--mono);\n}\n.contact-map {\n  height: 410px;\n  overflow: hidden;\n  border: 1px solid var(--c-line);\n  border-radius: 17px;\n  background: var(--c-ice);\n  box-shadow: 0 12px 34px rgba(7, 31, 69, .07);\n}\n.contact-map iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.contact-offices {\n  padding: clamp(18px, 3vw, 32px) 0;\n  color: var(--c-navy);\n  background: transparent;\n}\n.contact-offices-head {\n  max-width: 660px;\n  margin: 0 auto 32px;\n  text-align: center;\n}\n.contact-offices-head > span {\n  display: inline-block;\n  padding: 7px 13px;\n  border: 1px solid #b8d3f5;\n  border-radius: 999px;\n  color: var(--c-blue);\n  background: #fff;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.contact-offices-head h2 {\n  margin: 16px 0 8px;\n  color: var(--c-navy);\n  font: 800 clamp(30px, 4vw, 46px)/1.08 var(--disp);\n  letter-spacing: -.035em;\n}\n.contact-offices-head p {\n  margin: 0;\n  color: var(--c-slate);\n  font-size: 14px;\n  line-height: 1.55;\n}\n.contact-office-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-office-card {\n  position: relative;\n  min-width: 0;\n  min-height: 275px;\n  padding: 22px 18px;\n  border: 1px solid #cfdef1;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 20px rgba(7, 31, 69, .055);\n}\n.contact-office-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  right: 18px;\n  height: 3px;\n  border-radius: 0 0 99px 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #4aa0ff);\n}\n.contact-office-card-head {\n  display: block;\n  margin: 14px 0 20px;\n}\n.contact-office-card-head > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  margin-bottom: 12px;\n  border: 1px solid #bcd6f6;\n  border-radius: 12px;\n  color: #1467dc;\n  background: #eef6ff;\n  font-size: 24px;\n}\n.contact-office-card-head small {\n  display: block;\n  margin-bottom: 5px;\n  color: #36649a;\n  font: 700 8px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.contact-office-card h3 {\n  margin: 0;\n  color: var(--c-navy);\n  font: 750 20px/1.15 var(--disp);\n}\n.contact-office-detail {\n  display: grid;\n  grid-template-columns: 26px minmax(0, 1fr);\n  gap: 8px;\n  align-items: start;\n  margin-top: 11px;\n}\n.contact-office-detail > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  color: #1467dc;\n  background: #edf5ff;\n  font-size: 15px;\n}\n.contact-office-detail p {\n  margin: 2px 0 0;\n  color: #50617c;\n  font-size: 11.5px;\n  line-height: 1.55;\n}\n.contact-office-detail p b {\n  display: block;\n  color: var(--c-navy);\n}\n.contact-office-detail a {\n  color: #1467dc;\n  text-decoration: none;\n}\n.contact-office-detail a:hover {\n  text-decoration: underline;\n}\n.contact-offices {\n  padding: clamp(28px, 4vw, 52px) 0;\n}\n.contact-offices-head {\n  max-width: none;\n  margin: 0 0 28px;\n  text-align: left;\n}\n.contact-offices-head h2 {\n  margin: 13px 0 7px;\n  font-size: clamp(29px, 3.5vw, 42px);\n}\n.contact-office-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  align-items: stretch;\n}\n.contact-office-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: 340px;\n  padding: 24px 20px;\n  border-radius: 18px;\n  box-shadow: 0 12px 28px rgba(7, 31, 69, .065);\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.contact-office-card:hover {\n  transform: translateY(-3px);\n  border-color: #9fc4f5;\n  box-shadow: 0 18px 34px rgba(20, 103, 220, .12);\n}\n.contact-office-card::before {\n  left: 0;\n  right: 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n}\n.contact-office-card:nth-child(2)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #6aa7ff);\n}\n.contact-office-card:nth-child(3)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #0c9d92,\n      #26cbb7);\n}\n.contact-office-card:nth-child(4)::before {\n  background:\n    linear-gradient(\n      90deg,\n      #4d70d9,\n      #8ba8ff);\n}\n.contact-office-card-head {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 58px;\n  margin: 0 0 20px;\n}\n.contact-office-card-head > .material-symbols-outlined {\n  flex: none;\n  margin: 0;\n  width: 42px;\n  height: 42px;\n}\n.contact-office-card h3 {\n  font-size: 20px;\n  line-height: 1.15;\n}\n.contact-office-detail {\n  grid-template-columns: 26px minmax(0, 1fr);\n  gap: 8px;\n  margin-top: 12px;\n}\n.contact-office-detail > .material-symbols-outlined {\n  width: 26px;\n  height: 26px;\n}\n.contact-office-detail p {\n  font-size: 16px;\n  line-height: 1.65;\n}\n.contact-offices + .contact-section[aria-labelledby=office-title] {\n  margin-top: -60px;\n}\n.contact-office-card::before {\n  display: none;\n}\n.contact-callback {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  padding: 30px 34px;\n  border-radius: 18px;\n  color: #fff;\n  background:\n    linear-gradient(\n      110deg,\n      #082b5d,\n      #105ebd);\n  box-shadow: 0 18px 40px rgba(8, 58, 124, .2);\n}\n.contact-callback span {\n  color: #8fc3ff;\n  font: 700 9px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.contact-callback h2 {\n  margin-top: 6px;\n  color: #fff;\n  font-size: 25px;\n}\n.contact-callback p {\n  margin: 6px 0 0;\n  color: #cbdcf3;\n  font-size: 13px;\n}\n.contact-callback .btn {\n  flex: none;\n  background: #ff8a1a;\n  border-color: #ff8a1a;\n  color: #fff;\n}\n.contact-existing-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.contact-existing-card {\n  display: flex;\n  gap: 13px;\n  min-height: 130px;\n  padding: 22px;\n  border: 1px solid var(--c-line);\n  border-radius: 14px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.contact-existing-card:hover {\n  transform: translateY(-3px);\n  border-color: #8ebaf3;\n  box-shadow: 0 14px 28px rgba(20, 103, 220, .12);\n}\n.contact-existing-card:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, .28);\n  outline-offset: 3px;\n}\n.contact-existing-card > span {\n  font-size: 25px;\n}\n.contact-existing-grid h3 {\n  margin: 0 0 7px;\n  color: var(--c-navy);\n  font: 700 16px var(--disp);\n}\n.contact-existing-grid p {\n  margin: 0;\n  color: var(--c-slate);\n  font-size: 12.5px;\n  line-height: 1.55;\n}\n@media (max-width: 1000px) {\n  .contact-form-section {\n    grid-template-columns: 1fr;\n  }\n  .contact-form-copy {\n    max-width: 680px;\n  }\n}\n@media (max-width: 1100px) {\n  .contact-office-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .contact-body {\n    padding: 24px 0 32px 0;\n  }\n  .contact-wrap {\n    gap: 48px;\n  }\n  .contact-channel-grid,\n  .contact-existing-grid,\n  .contact-office-grid {\n    grid-template-columns: 1fr;\n  }\n  .contact-form-section {\n    padding: 26px 18px;\n    border-radius: 18px;\n  }\n  .contact-offices {\n    padding: 40px 22px;\n    border-radius: 18px;\n  }\n  .contact-offices + .contact-section[aria-labelledby=office-title] {\n    margin-top: -36px;\n  }\n  .contact-callback {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 22px;\n  }\n  .contact-map {\n    height: 340px;\n  }\n}\n@media (max-width: 580px) {\n  .contact-form-card {\n    padding: 23px 16px;\n  }\n  .contact-form-card form {\n    grid-template-columns: 1fr;\n  }\n  .contact-field-wide {\n    grid-column: auto;\n  }\n  .contact-phone {\n    grid-column: auto;\n    grid-template-columns: 112px minmax(0, 1fr);\n    gap: 9px;\n  }\n  .contact-interest-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .contact-captcha {\n    grid-column: auto;\n    grid-template-columns: minmax(0, 1fr) 96px;\n  }\n  .contact-consent,\n  .contact-error,\n  .contact-submit {\n    grid-column: auto;\n  }\n  .contact-channel {\n    grid-template-columns: 42px minmax(0, 1fr) auto;\n    padding: 15px;\n  }\n  .contact-channel-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .contact-channel small {\n    font-size: 12px;\n  }\n  .contact-form-copy h2 {\n    font-size: 36px;\n  }\n  .xch-field-grid {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  .xch-field-full {\n    grid-column: auto;\n  }\n  .xch-phone-grid {\n    grid-template-columns: 1fr;\n  }\n  .xch-radio-list {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .xch-radio-item {\n    width: 100%;\n  }\n  .xch-submit-button {\n    width: 100%;\n  }\n}\n@media (max-width: 390px) {\n  .contact-phone,\n  .contact-interest-grid {\n    grid-template-columns: 1fr;\n  }\n  .contact-channel > strong {\n    display: none;\n  }\n}\n.contact-page .contact-hero {\n  position: relative;\n  overflow: hidden;\n  min-height: 440px;\n  padding: 55px 0;\n  background:\n    radial-gradient(\n      ellipse at 73% 35%,\n      #074888 0,\n      transparent 47%),\n    linear-gradient(\n      115deg,\n      #04264d,\n      #021a38 62%,\n      #032854);\n  color: #fff;\n}\n.contact-hero .contact-hero-grid {\n  max-width: 1440px;\n  display: grid;\n  grid-template-columns: 1.35fr 1fr;\n  align-items: center;\n  gap: 35px;\n  padding-inline: 40px;\n}\n.contact-hero-copy {\n  position: relative;\n  z-index: 2;\n}\n.contact-hero-crumb {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  font-size: 14px;\n  color: #36b3ff;\n  margin-bottom: 22px;\n}\n.contact-hero-crumb a {\n  color: #c4d5ec;\n  text-decoration: none;\n}\n.contact-page .contact-hero h1 {\n  font-size: clamp(48px, 5.3vw, 76px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n  margin: 0 0 20px;\n  color: #fff;\n  font-weight: 700;\n}\n.contact-hero h1 span {\n  color: #2ba8f7;\n}\n.contact-hero-copy > p {\n  font-size: 18px;\n  line-height: 1.65;\n  color: #c4d1e3;\n  max-width: 720px;\n  margin: 0;\n}\n.contact-hero-benefits {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-top: 38px;\n  gap: 18px;\n}\n.contact-hero-benefits > div {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-right: 1px solid #19609a;\n  padding-right: 10px;\n}\n.contact-hero-benefits > div:last-child {\n  border: 0;\n  padding-right: 0;\n}\n.contact-hero-benefits .material-symbols-outlined {\n  width: 50px;\n  height: 50px;\n  flex: 0 0 50px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #064279,\n      #022349);\n  color: #3cb9ff;\n  font-size: 29px;\n}\n.contact-hero-benefits b {\n  display: block;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.contact-hero-benefits small {\n  display: block;\n  color: #c2d0e5;\n  font-size: 12px;\n  margin-top: 5px;\n  line-height: 1.5;\n}\n.contact-hero-art {\n  position: relative;\n  height: 350px;\n  perspective: 800px;\n}\n.contact-globe {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  left: 19%;\n  top: 0;\n  overflow: hidden;\n  border: 1px solid #29afff88;\n  background:\n    radial-gradient(\n      circle at 27% 22%,\n      #1d95d3,\n      #073b73 42%,\n      #021c43 77%);\n  box-shadow: inset 9px 5px 20px #21bcff55, 0 0 45px #087de333;\n}\n.contact-globe > div {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background-image: radial-gradient(#37b5ef 1px, transparent 1.6px);\n  background-size: 6px 6px;\n  opacity: .55;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 45% 30%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      ellipse at 45% 30%,\n      #000,\n      transparent 75%);\n}\n.contact-globe i {\n  position: absolute;\n  inset: 0 25%;\n  border: 1px solid #36b3ed60;\n  border-radius: 50%;\n}\n.contact-globe i:nth-child(3) {\n  inset: 25% 0;\n}\n.contact-globe i:nth-child(4) {\n  inset: 10% 10%;\n  transform: rotate(35deg);\n}\n.contact-orbit {\n  position: absolute;\n  left: 4%;\n  top: 48px;\n  width: 95%;\n  height: 180px;\n  border: 1px solid #22b9fbb0;\n  border-radius: 50%;\n  transform: rotate(-22deg);\n}\n.orbit-two {\n  transform: rotate(25deg);\n  opacity: .45;\n  top: 73px;\n}\n.contact-orbit::before {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 12%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #7be2ff;\n  box-shadow: 0 0 12px #00bdff;\n}\n.contact-glass {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  border: 2px solid #a7e7ff;\n  border-radius: 25px;\n  background:\n    linear-gradient(\n      140deg,\n      #5bc4ffb8,\n      #075299cc 55%,\n      #168dedab);\n  box-shadow:\n    inset 4px 4px 13px #ffffff50,\n    0 15px 40px #00102980,\n    0 0 15px #079deb55;\n  transform: rotateY(-14deg) rotate(-3deg);\n}\n.contact-glass span {\n  font-size: 75px;\n  color: #c4f5ff;\n  text-shadow: 0 0 18px #00acff;\n}\n.glass-phone {\n  width: 165px;\n  height: 195px;\n  left: 36%;\n  top: 133px;\n  z-index: 3;\n}\n.glass-phone span {\n  font-size: 110px;\n}\n.glass-mail {\n  width: 120px;\n  height: 125px;\n  left: 11%;\n  top: 201px;\n  z-index: 4;\n}\n.glass-chat {\n  width: 120px;\n  height: 135px;\n  left: 70%;\n  top: 155px;\n  z-index: 2;\n}\n.glass-chat span {\n  font-size: 65px;\n}\n.contact-wave {\n  position: absolute;\n  left: -10%;\n  top: 170px;\n  width: 125%;\n  height: 180px;\n  border-bottom: 5px solid #00c3ff;\n  border-radius: 50%;\n  transform: rotate(-13deg);\n  box-shadow:\n    0 12px 12px -8px #019fff,\n    0 26px 0 -17px #0671d3,\n    0 40px 0 -28px #004e9f;\n}\n@media (max-width: 1100px) {\n  .contact-hero .contact-hero-grid {\n    grid-template-columns: 1.2fr 1fr;\n    gap: 15px;\n    padding-inline: 24px;\n  }\n  .contact-hero-benefits {\n    gap: 10px;\n  }\n  .contact-hero-benefits > div {\n    gap: 7px;\n  }\n  .contact-hero-benefits .material-symbols-outlined {\n    width: 36px;\n    height: 36px;\n    flex-basis: 36px;\n    font-size: 24px;\n  }\n  .contact-hero-art {\n    transform: scale(.9);\n    transform-origin: center;\n  }\n}\n@media (max-width: 800px) {\n  .contact-hero .contact-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .contact-page .contact-hero {\n    padding: 35px 0;\n  }\n  .contact-hero-art {\n    width: 100%;\n    max-width: 490px;\n    margin: 15px auto 0;\n    transform: none;\n  }\n  .contact-hero-copy > p {\n    font-size: 17px;\n  }\n  .contact-hero-benefits {\n    max-width: 650px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero-benefits {\n    grid-template-columns: 1fr;\n    gap: 15px;\n    margin-top: 25px;\n  }\n  .contact-hero-benefits > div {\n    border: 0;\n  }\n  .contact-hero-art {\n    height: 290px;\n    transform: scale(.8);\n    transform-origin: top center;\n    margin-bottom: -45px;\n  }\n  .contact-hero-benefits b {\n    font-size: 15px;\n  }\n}\n.contact-globe > div {\n  animation: contact-globe-turn 36s linear infinite;\n}\n.contact-globe i {\n  animation: contact-meridian-turn 18s linear infinite;\n}\n.contact-globe i:nth-child(3) {\n  animation-delay: -6s;\n}\n.contact-globe i:nth-child(4) {\n  animation-delay: -12s;\n}\n@keyframes contact-globe-turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes contact-meridian-turn {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-globe > div,\n  .contact-globe i {\n    animation: none;\n  }\n}\n.contact-hero-animation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.contact-hero-animation svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: 390px;\n  overflow: visible;\n}\n.contact-animated-globe {\n  filter: drop-shadow(0 0 16px #128fff66);\n}\n.contact-floating-channel circle {\n  fill: #0c427a;\n  stroke: #469dec;\n  stroke-width: 1.5;\n  filter: drop-shadow(0 0 8px #209fff66);\n}\n.contact-floating-channel path {\n  stroke: #a4dfff;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.connect-heading {\n  fill: #06315d;\n  font: 700 24px system-ui, sans-serif;\n  font-style: italic;\n}\n.connect-blue {\n  fill: #128ee7;\n}\n.connect-subtitle {\n  fill: #416d99;\n  font: 9px system-ui, sans-serif;\n}\n.phone-caption {\n  fill: #154a7d;\n  font: 8px system-ui, sans-serif;\n}\n.contact-floating-phone {\n  animation: contact-device-float 6s ease-in-out infinite;\n}\n.contact-floating-channel {\n  animation: contact-channel-float 5s ease-in-out infinite;\n}\n.channel-mail {\n  animation-delay: -1.5s;\n}\n.channel-chat {\n  animation-delay: -3s;\n}\n.contact-globe-route,\n.contact-orbit-path {\n  animation: contact-route-flow 14s linear infinite;\n}\n.contact-beacon {\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: contact-beacon-pulse 3s ease-in-out infinite;\n}\n.beacon-two {\n  animation-delay: -1.5s;\n}\n.contact-typing circle {\n  animation: contact-dot-pulse 1.5s ease-in-out infinite;\n}\n.contact-typing circle:nth-child(2) {\n  animation-delay: .2s;\n}\n.contact-typing circle:nth-child(3) {\n  animation-delay: .4s;\n}\n@keyframes contact-device-float {\n  50% {\n    transform: translateY(-7px);\n  }\n}\n@keyframes contact-channel-float {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes contact-route-flow {\n  to {\n    stroke-dashoffset: -180;\n  }\n}\n@keyframes contact-beacon-pulse {\n  50% {\n    opacity: .4;\n    transform: scale(1.5);\n  }\n}\n@keyframes contact-dot-pulse {\n  50% {\n    opacity: .25;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-hero-animation * {\n    animation: none !important;\n  }\n}\n.office-locator {\n  overflow: hidden;\n  border: 1px solid #c9dcf4;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 20px 52px rgba(7, 31, 69, .1);\n}\n.office-tabs {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0;\n  padding: 8px;\n  border-bottom: 1px solid #dbe7f5;\n  background: #f5f9ff;\n}\n.office-tabs button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-width: 0;\n  min-height: 70px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: 14px;\n  color: #536987;\n  background: transparent;\n  font-family: var(--body);\n  text-align: left;\n  cursor: pointer;\n  transition:\n    color .2s,\n    background-color .2s,\n    box-shadow .2s;\n}\n.office-tabs button::after {\n  content: "";\n  position: absolute;\n  right: 18px;\n  bottom: 5px;\n  left: 18px;\n  height: 3px;\n  border-radius: 99px;\n  background: #1467dc;\n  opacity: 0;\n  transform: scaleX(.35);\n  transition: opacity .2s, transform .2s;\n}\n.office-tabs button:hover {\n  color: #0a315f;\n  background: #eaf3ff;\n}\n.office-tabs button:focus-visible {\n  outline: 3px solid rgba(20, 103, 220, .24);\n  outline-offset: -3px;\n}\n.office-tabs button.is-active {\n  color: #07336c;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(20, 103, 220, .12);\n}\n.office-tabs button.is-active::after {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.office-tabs .material-symbols-outlined {\n  flex: 0 0 auto;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  color: #1467dc;\n  background: #e5f0ff;\n  font-size: 20px;\n}\n.office-tabs b,\n.office-tabs small {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.office-tabs b {\n  font-size: 14px;\n}\n.office-tabs small {\n  margin-top: 3px;\n  color: #7385a0;\n  font: 650 9px/1.2 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.office-locator-body {\n  display: grid;\n  grid-template-columns: minmax(320px, .82fr) minmax(0, 1.48fr);\n  min-height: 500px;\n}\n.office-contact-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 38px 34px;\n  border-right: 1px solid #dbe7f5;\n  background:\n    linear-gradient(\n      150deg,\n      #fff 40%,\n      #f4f9ff);\n}\n.office-contact-heading {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #dbe7f5;\n}\n.office-contact-heading > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 50px;\n  flex: 0 0 50px;\n  border: 1px solid #b7d4f8;\n  border-radius: 14px;\n  color: #1467dc;\n  background: #ebf4ff;\n  font-size: 27px;\n}\n.office-contact-heading small {\n  display: block;\n  margin-bottom: 5px;\n  color: #3971b7;\n  font: 750 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.office-contact-heading h3 {\n  margin: 0;\n  color: var(--c-navy);\n  font: 800 24px/1.15 var(--disp);\n}\n.office-contact-list {\n  display: grid;\n  gap: 24px;\n  margin: 28px 0;\n}\n.office-contact-row {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr);\n  gap: 13px;\n  align-items: start;\n}\n.office-contact-row > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  color: #1467dc;\n  background: #eaf3ff;\n  font-size: 19px;\n}\n.office-contact-row small {\n  display: block;\n  margin: 1px 0 6px;\n  color: #72829a;\n  font: 750 9px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.office-contact-row strong {\n  display: block;\n  color: var(--c-navy);\n  font-size: 14px;\n  line-height: 1.45;\n}\n.office-contact-row p {\n  margin: 5px 0 0;\n  color: #566984;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.office-contact-row a {\n  color: #0c61ce;\n  font-size: 13px;\n  font-weight: 750;\n  line-height: 1.55;\n  text-decoration: none;\n}\n.office-contact-row a:hover {\n  text-decoration: underline;\n}\n.office-directions {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: max-content;\n  margin-top: auto;\n  padding: 12px 17px;\n  border-radius: 9px;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0752b4);\n  box-shadow: 0 10px 22px rgba(20, 103, 220, .2);\n  font-size: 12px;\n  font-weight: 800;\n  text-decoration: none;\n  transition: transform .2s, box-shadow .2s;\n}\n.office-directions:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 28px rgba(20, 103, 220, .28);\n}\n.office-map-panel {\n  position: relative;\n  min-width: 0;\n  min-height: 500px;\n  background: #e8f0f8;\n}\n.office-map-panel::before {\n  content: "Google Maps";\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  z-index: 1;\n  padding: 7px 10px;\n  border: 1px solid rgba(183, 205, 231, .85);\n  border-radius: 8px;\n  color: #49627f;\n  background: rgba(255, 255, 255, .92);\n  box-shadow: 0 6px 16px rgba(7, 31, 69, .1);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n.office-map-panel iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 500px;\n  border: 0;\n}\n@media (max-width: 900px) {\n  .office-tabs {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 6px;\n  }\n  .office-locator-body {\n    grid-template-columns: 1fr;\n  }\n  .office-contact-panel {\n    border-right: 0;\n    border-bottom: 1px solid #dbe7f5;\n  }\n  .office-map-panel,\n  .office-map-panel iframe {\n    min-height: 410px;\n  }\n}\n@media (max-width: 560px) {\n  .contact-offices {\n    padding-inline: 0;\n  }\n  .office-locator {\n    border-radius: 16px;\n  }\n  .office-tabs {\n    padding: 6px;\n  }\n  .office-tabs button {\n    justify-content: flex-start;\n    min-height: 60px;\n    padding: 9px;\n  }\n  .office-tabs .material-symbols-outlined {\n    width: 31px;\n    height: 31px;\n    font-size: 18px;\n  }\n  .office-tabs b {\n    font-size: 12px;\n  }\n  .office-contact-panel {\n    padding: 27px 20px;\n  }\n  .office-contact-heading h3 {\n    font-size: 21px;\n  }\n  .office-map-panel,\n  .office-map-panel iframe {\n    min-height: 340px;\n  }\n}\n@media (max-width: 700px) {\n  .contact-form-section {\n    grid-template-columns: minmax(0, 1fr);\n    min-width: 0;\n    width: 100%;\n  }\n  .contact-form-copy,\n  .contact-form-card,\n  .contact-form-methods {\n    min-width: 0;\n    max-width: 100%;\n  }\n  .contact-form-methods > a,\n  .contact-form-methods > div {\n    min-width: 0;\n    gap: 10px;\n  }\n  .contact-form-methods > a > span,\n  .contact-form-methods > div > span {\n    min-width: 0;\n  }\n  .contact-form-methods strong,\n  .contact-form-methods small {\n    white-space: normal;\n    overflow-wrap: anywhere;\n  }\n  .contact-form-copy h2 {\n    font-size: clamp(25px, 6vw, 34px);\n    overflow-wrap: anywhere;\n  }\n  .xch-field-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .xch-phone-grid {\n    grid-template-columns: 100px minmax(0, 1fr);\n  }\n}\n/*# sourceMappingURL=contact.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactPage, { className: "ContactPage", filePath: "src/app/pages/contact.page.ts", lineNumber: 30 });
})();
export {
  ContactPage
};
//# sourceMappingURL=chunk-NQILF7S2.js.map
