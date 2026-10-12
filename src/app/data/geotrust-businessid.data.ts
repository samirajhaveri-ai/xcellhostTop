/** Product-specific content copied from the supplied BusinessID reference files. */
export const BUSINESSID_PAGES = {
  "single": {
    "variant": "single",
    "slug": "geotrust-true-businessid",
    "name": "GeoTrust True BusinessID",
    "heroId": "gtHero",
    "faqs": [
      {
        "question": "What is GeoTrust True BusinessID?",
        "answer": "It is GeoTrust's organisation-validated (OV) SSL certificate for a single website. It encrypts traffic like any certificate and also carries your verified company name, which visitors see when they inspect the padlock or click the GeoTrust seal."
      },
      {
        "question": "How long does validation take?",
        "answer": "Usually one to three business days. GeoTrust confirms domain control, checks your registration and address, and makes a short verification call on a listed phone number. When your records match, it moves quickly — we check them before ordering."
      },
      {
        "question": "Will my company name appear in the address bar?",
        "answer": "No. Modern browsers don't show organisation names in the address bar for OV or EV. Your name appears in the certificate details and in the GeoTrust seal. For the strictest vetting level, see True BusinessID with EV."
      },
      {
        "question": "Does it cover both www and non-www?",
        "answer": "Yes. A certificate for yourbusiness.in also secures www.yourbusiness.in. Other subdomains such as shop.yourbusiness.in are not covered."
      },
      {
        "question": "Can I add more domains or subdomains?",
        "answer": "Not on this certificate — it is single-domain only. Choose True BusinessID Multi-Domain for several domains, True BusinessID Wildcard for every first-level subdomain, or True BusinessID FLEX to mix names, wildcards and IP addresses."
      },
      {
        "question": "Which documents does an Indian company need?",
        "answer": "Usually your MCA company master data (CIN) or GSTIN, or Udyam / Shop & Establishment registration for other entity types, plus a phone number listed in a public or third-party directory for the verification call. Names and addresses must match across records."
      },
      {
        "question": "How long is the certificate valid?",
        "answer": "Each certificate can live at most 200 days since 15 March 2026 — 100 days from March 2027 and 47 days from March 2029. You can still buy 1, 2 or 3 years: the subscription is paid once, the organisation is re-validated each year, and the certificate is reissued free whenever it nears its limit. XcellHost does those reissues for you."
      },
      {
        "question": "What does the GeoTrust seal show?",
        "answer": "The dynamic True Site seal shows your organisation name along with the date and time it was checked, confirming the certificate is current. It is generated live, so it can't simply be copied to another site."
      }
    ]
  },
  "multi": {
    "variant": "multi",
    "slug": "geotrust-true-businessid-multi-domain",
    "name": "GeoTrust True BusinessID Multi-Domain",
    "heroId": "gmHero",
    "faqs": [
      {
        "question": "What is GeoTrust True BusinessID Multi-Domain?",
        "answer": "It is GeoTrust's organisation-validated (OV) SAN certificate. One certificate lists several fully qualified domain names — for example yourbusiness.in, yourbusiness.com and shop.yourbrand.in — and carries your verified company name, so you install and renew one certificate instead of one per site."
      },
      {
        "question": "How many domains are included?",
        "answer": "Five names are included in the base price — your primary domain plus four SANs — and you can add more up to 250 in total. The www version of the primary domain is secured as well."
      },
      {
        "question": "How much does an extra domain cost?",
        "answer": "Each additional SAN is ₹4,999 per year (indicative, excl. GST), with the same 8% and 12% per-year discounts on 2- and 3-year terms. The planner and configurator on this page work it out for your list."
      },
      {
        "question": "Can I add or change domains after issuance?",
        "answer": "Yes. You can add, swap or remove SANs during the term and reissue the certificate. Swapping or removing names is free; SANs added mid-term are quoted pro rata for the rest of the term."
      },
      {
        "question": "Can it include wildcard names?",
        "answer": "No — this product covers exact names only. For *.yourbusiness.in entries choose True BusinessID Multi-Domain Wildcard, or True BusinessID FLEX if you also need public IP addresses."
      },
      {
        "question": "How long does validation take?",
        "answer": "Usually one to three business days. GeoTrust checks your registration and a listed phone number, and confirms control of each domain by email, DNS or HTTP. Once vetted, reissues for SAN changes take minutes."
      },
      {
        "question": "Which documents does an Indian company need?",
        "answer": "Usually your MCA company master data (CIN) or GSTIN, an address that matches it, and a phone number listed in a public or third-party directory for the call-back. LLPs, partnerships and proprietorships can use registration, GST or Udyam records."
      },
      {
        "question": "Why are reissues needed during a multi-year plan?",
        "answer": "Industry rules cap a single certificate's life at 200 days since 15 March 2026, falling to 100 days in 2027 and 47 days in 2029. A 1–3 year subscription covers every certificate you need in that time, reissued free. XcellHost can automate this with ACME or do it for you."
      }
    ]
  },
  "evMulti": {
    "variant": "evMulti",
    "slug": "geotrust-true-businessid-ev-multi-domain",
    "name": "GeoTrust True BusinessID EV Multi-Domain",
    "heroId": "gmHero",
    "faqs": [
      {
        "question": "What is GeoTrust True BusinessID EV Multi-Domain?",
        "answer": "It is GeoTrust's Extended Validation SSL certificate for several domains. Your company is vetted once, and every domain listed on the certificate (up to 250) carries the same verified legal name, registration number and country."
      },
      {
        "question": "How many domains are included?",
        "answer": "Five: the primary domain plus four SANs. The www version of the primary domain is added free. You can add up to 245 more SANs, 250 names in total, at an indicative ₹7,999 per SAN per year."
      },
      {
        "question": "Can I include a wildcard or an IP address?",
        "answer": "No. CA/Browser Forum rules don't allow wildcards or IP addresses in EV certificates. List each host as its own SAN, or cover internal and non-customer subdomains with an OV wildcard such as True BusinessID Wildcard."
      },
      {
        "question": "Can the domains be completely different?",
        "answer": "Yes. They can be different brands and different extensions (.in, .com, .ae and so on), as long as they belong to the organisation that was vetted, or you can prove control of each one."
      },
      {
        "question": "What does EV vetting check?",
        "answer": "That your organisation legally exists and is active, operates from a verifiable address, has been trading for a while (or can show a bank or CA letter), that the person ordering is authorised, and a call to a listed number. Each domain is then checked for control by DNS, file or email."
      },
      {
        "question": "How long does it take?",
        "answer": "From a few hours to a few days. Most Indian companies with documents ready are issued within 1–5 business days. A long SAN list can add a little time if domain owners are slow to approve."
      },
      {
        "question": "Can I add domains later?",
        "answer": "Yes. While your EV vetting is current, new SANs only need a domain-control check, then we reissue the certificate and roll it out. SANs added mid-term are quoted pro rata."
      },
      {
        "question": "How long is the certificate valid?",
        "answer": "Since 15 March 2026 a single certificate can be valid for at most 200 days, falling to 100 days in 2027 and 47 days in 2029. Your 1–3 year plan is a subscription with free reissues; XcellHost reissues, rolls out to every server and refreshes the EV vetting each year."
      }
    ]
  },
  "wildcard": {
    "variant": "wildcard",
    "slug": "geotrust-true-businessid-wildcard",
    "name": "GeoTrust True BusinessID Wildcard",
    "heroId": "gwHero",
    "faqs": [
      {
        "question": "What does GeoTrust True BusinessID Wildcard cover?",
        "answer": "A certificate for *.yourbusiness.in covers every first-level subdomain — shop., mail., app., careers. and any you create later — on one organisation-validated certificate, with no limit on the number of subdomains."
      },
      {
        "question": "Is the main domain (yourbusiness.in) covered?",
        "answer": "A wildcard name on its own doesn't match the bare domain, so the base domain is normally added to the certificate at issuance. We confirm it is included when we place your order."
      },
      {
        "question": "Does it cover deeper names like dev.app.yourbusiness.in?",
        "answer": "No. A wildcard matches exactly one level. For dev.app.yourbusiness.in you need a wildcard for *.app.yourbusiness.in — which you can hold alongside others on True BusinessID Multi-Domain Wildcard or FLEX."
      },
      {
        "question": "Can I add a different domain, like yourbrand.com?",
        "answer": "Not on this certificate — it isn't SAN-enabled. Buy a second wildcard, or choose True BusinessID Multi-Domain Wildcard, which secures several domains and their subdomains on one certificate."
      },
      {
        "question": "What do visitors see when they click the padlock?",
        "answer": "The certificate details show the wildcard name, your verified organisation name and location, and GeoTrust as the issuer. A domain-validated certificate shows only the domain. There is no special address-bar colour for OV."
      },
      {
        "question": "Why can't I validate with an HTTP file?",
        "answer": "Industry rules don't allow file-based validation for wildcards, because a file on one web server doesn't prove control of the whole domain. Use a DNS TXT or CNAME record, or approve an email to an admin address. XcellHost can add the DNS record for you."
      },
      {
        "question": "Is there an EV version of this wildcard?",
        "answer": "No — industry rules never allow EV wildcard certificates. OV is the highest validation available on a wildcard. For EV, list each hostname on True BusinessID with EV Multi-Domain."
      },
      {
        "question": "How long does issuance take?",
        "answer": "The DNS or email check is quick once the record is in place. The business check usually takes 1–3 business days on a first order, faster when your company records and directory listing already match. Later reissues come through in minutes."
      }
    ]
  }
} as const;
export type BusinessIdVariant = keyof typeof BUSINESSID_PAGES;
