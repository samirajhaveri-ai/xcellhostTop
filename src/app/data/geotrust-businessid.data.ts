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
  },
  "ev": {
    "variant": "ev",
    "slug": "geotrust-true-businessid-ev",
    "name": "GeoTrust True BusinessID with EV",
    "heroId": "geHero",
    "faqs": [
      {
        "question": "What is GeoTrust True BusinessID with EV?",
        "answer": "It is GeoTrust's Extended Validation SSL certificate for one website. It encrypts traffic like any SSL certificate, and it also carries your verified legal name, registration number and country, checked under the CA/Browser Forum's EV Guidelines."
      },
      {
        "question": "What does EV vetting check?",
        "answer": "That your organisation legally exists and is active, operates from a verifiable address, has been trading for a while (or can show a bank or CA letter), that the person ordering is authorised, and finally a call to a number listed in a public directory. Domain control is checked too."
      },
      {
        "question": "How long does it take?",
        "answer": "Anywhere from a few hours to a few days. Most Indian companies with documents ready are issued within 1–5 business days. The biggest delays are mismatched addresses and missed verification calls, which we chase for you."
      },
      {
        "question": "Do browsers still show a green address bar?",
        "answer": "No. Major browsers retired the green bar in 2019. Your verified organisation details now appear when a visitor opens the padlock or clicks the True Site seal, and anti-phishing tools can still read the EV data."
      },
      {
        "question": "Which documents does an Indian company need?",
        "answer": "Usually MCA master data (CIN or LLPIN) or another registration, your GSTIN, an EV request signed by a director or officer, a company phone number listed in a public directory and, for organisations under about three years old, a bank confirmation or CA letter. We check that names and addresses match before ordering."
      },
      {
        "question": "Can I add more domains or a wildcard?",
        "answer": "Not on this certificate. It covers one domain with and without www. EV certificates can never include wildcards or IP addresses. For several domains on one EV certificate choose True BusinessID EV Multi-Domain."
      },
      {
        "question": "How long is the certificate valid?",
        "answer": "Since 15 March 2026 a single certificate can be valid for at most 200 days, falling to 100 days in 2027 and 47 days in 2029. You can still buy 1, 2 or 3 years: it's a subscription, and each reissue in the term is free. XcellHost handles the reissues and the yearly EV refresh."
      },
      {
        "question": "What is the True Site seal?",
        "answer": "A dynamic GeoTrust seal for your pages that shows your organisation name with the date and a timestamp. Clicking it opens GeoTrust's verification page, so a copied image doesn't work."
      }
    ]
  },
  "ovFlex": {
    "variant": "ovFlex",
    "slug": "geotrust-true-businessid-ov",
    "name": "GeoTrust TrueBusiness ID OV (FLEX)",
    "heroId": "gtoHero",
    "faqs": [
      {
        "question": "What is GeoTrust True BusinessID (FLEX)?",
        "answer": "It's GeoTrust's organisation-validated SSL certificate with a flexible name list. One certificate can hold 1 to 250 names, and each slot can be a standard domain, a wildcard or a public IP address. You can add names during the term."
      },
      {
        "question": "How is FLEX different from a multi-domain wildcard certificate?",
        "answer": "A multi-domain wildcard usually starts at three names, makes every name except the main one a wildcard and needs a standard main name. FLEX lets you start with one name, mix standard names and wildcards freely, make the main name a wildcard and add public IPs."
      },
      {
        "question": "Can I put an IP address on the certificate?",
        "answer": "Yes, public IPv4 addresses you control. Private or reserved addresses (10.x, 172.16–31.x, 192.168.x) can't go on any public certificate. IP entries are priced like standard SANs."
      },
      {
        "question": "How long does OV validation take?",
        "answer": "Usually 1–3 business days for a new organisation, depending on how quickly your records and phone number are matched. Names added later, or reissues while your OV details are current, usually come through within hours."
      },
      {
        "question": "Which documents will an Indian company need?",
        "answer": "Usually MCA master data with your CIN, or a GSTIN, Udyam or Shop & Establishment registration for other entity types, plus a phone number listed in a public directory. We check that names and addresses match before ordering."
      },
      {
        "question": "Why is the certificate reissued about twice a year?",
        "answer": "Since 15 March 2026 browsers accept public certificates valid for at most 200 days. That falls to 100 days in 2027 and 47 days in 2029. A multi-year purchase is a subscription: you pay once and get fresh certificates through the term, free. XcellHost installs each one, or you can automate it with ACME."
      },
      {
        "question": "Can I add names after the certificate is issued?",
        "answer": "Yes. Add standard names, wildcards or IPs at any time, up to 250 in total. New entries pass a control check, the certificate is reissued with the full list, and you pay only for what you added for the rest of the term."
      },
      {
        "question": "Does a wildcard cover every level of subdomain?",
        "answer": "No. *.yourbusiness.in covers shop.yourbusiness.in and mail.yourbusiness.in, but not a.b.yourbusiness.in or the bare yourbusiness.in. Add the bare domain or a deeper wildcard as its own entry; the builder above flags what's already covered."
      },
      {
        "question": "Does this include malware scanning or a vulnerability assessment?",
        "answer": "No. True BusinessID (FLEX) covers encryption, organisation validation and the True Site seal. For scanning and monitoring, add one of XcellHost's website security plans alongside it."
      },
      {
        "question": "How does GeoTrust relate to DigiCert?",
        "answer": "GeoTrust is a DigiCert brand. Its certificates are validated by DigiCert's teams, chain to DigiCert's public roots and are managed in DigiCert CertCentral, so trust and compatibility match DigiCert's own certificates."
      },
      {
        "question": "Can I install it on several servers?",
        "answer": "Yes. Server licences are unlimited, so the same certificate can run on every server that answers for a name on the list, whether origin, CDN, load balancer or appliance. Reissues for key changes or server moves are free."
      },
      {
        "question": "Are the prices final, and can I get a refund?",
        "answer": "Prices are indicative, in rupees, and exclude 18% GST. Final certificate, SAN, wildcard and installation prices are confirmed on your quotation, along with the 30-day refund terms for your order."
      }
    ]
  }
} as const;
export type BusinessIdVariant = keyof typeof BUSINESSID_PAGES;
