import {
  SITE
} from "./chunk-LN7P5EZP.js";
import {
  Meta,
  Title
} from "./chunk-7DLAAEIP.js";
import {
  DOCUMENT,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";

// src/app/core/seo.service.ts
var SeoService = class _SeoService {
  title = inject(Title);
  meta = inject(Meta);
  doc = inject(DOCUMENT);
  set(pageTitle, description, canonicalPath, imagePath) {
    this.title.setTitle(pageTitle);
    this.meta.removeTag('name="keywords"');
    if (description) {
      this.meta.updateTag({ name: "description", content: description });
      this.meta.updateTag({ property: "og:description", content: description });
    }
    this.meta.updateTag({ property: "og:title", content: pageTitle });
    this.meta.updateTag({ name: "twitter:title", content: pageTitle });
    if (canonicalPath) {
      const href = SITE.siteUrl.replace(/\/$/, "") + canonicalPath;
      let link = this.doc.querySelector('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement("link");
        link.rel = "canonical";
        this.doc.head.appendChild(link);
      }
      link.href = href;
      this.meta.updateTag({ property: "og:url", content: href });
    }
    if (imagePath) {
      const image = /^https?:\/\//i.test(imagePath) ? imagePath : SITE.siteUrl.replace(/\/$/, "") + "/" + imagePath.replace(/^\//, "");
      this.meta.updateTag({ property: "og:image", content: image });
      this.meta.updateTag({ property: "og:image:secure_url", content: image });
      this.meta.updateTag({ property: "og:image:alt", content: pageTitle });
      this.meta.updateTag({ name: "twitter:card", content: "summary_large_image" });
      this.meta.updateTag({ name: "twitter:image", content: image });
      this.meta.updateTag({ name: "twitter:image:alt", content: pageTitle });
    }
  }
  /** Replace the page-level structured data block. */
  setJsonLd(id, data) {
    const elId = "jsonld-" + id;
    let el = this.doc.getElementById(elId);
    if (!el) {
      el = this.doc.createElement("script");
      el.type = "application/ld+json";
      el.id = elId;
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-WBLAWHJR.js.map
