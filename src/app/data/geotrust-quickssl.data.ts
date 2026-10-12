/** Product-specific content copied from the supplied QuickSSL reference files. */
export const QUICKSSL_PAGES = {
  "san": {
    "variant": "san",
    "slug": "geotrust-quickssl-premium-san",
    "name": "GeoTrust QuickSSL Premium SAN",
    "heroId": "qsHero",
    "faqs": [
      {
        "question": "What is GeoTrust QuickSSL Premium SAN?",
        "answer": "A domain-validated multi-domain TLS certificate from GeoTrust, a DigiCert brand. It secures one main domain plus four additional domains or subdomains (SANs) on one certificate, is issued within minutes and carries a US$500K warranty and a time-stamped site seal."
      },
      {
        "question": "Which names can I put on it?",
        "answer": "Any fully qualified domains or subdomains you control — for example yourco.in, yourco.com, shop.yourco.in, yourco.co.in and mail.yourco.in. They don't have to share a base domain. Wildcards and IP addresses aren't supported."
      },
      {
        "question": "Can I add more than five domains?",
        "answer": "Yes — extra SANs can be added at ₹1,999 per SAN per year (indicative), and the certificate is reissued with the longer list. For large estates, compare DV SSL (FLEX) or True BusinessID Multi-Domain, which go up to 250 names."
      },
      {
        "question": "Is www included?",
        "answer": "For the main domain, GeoTrust secures both the www and non-www forms, so www.yourco.in doesn't use a SAN seat. For other domains, list the www form as its own SAN if you use it."
      },
      {
        "question": "I need a wildcard. Does this work?",
        "answer": "No — QuickSSL Premium SAN covers named domains only. For one wildcard, use QuickSSL Premium Wildcard; to mix wildcards with standard names on one certificate, use DV SSL (FLEX)."
      },
      {
        "question": "How is each domain validated?",
        "answer": "Each domain passes one domain-control check: approve an email to an address such as admin@, add a DNS TXT or CNAME record, or place a file on the website. Checks are automated and we can set up the records for you."
      },
      {
        "question": "Can all five sites run on one IP address?",
        "answer": "Yes. With Server Name Indication (SNI), supported by every modern browser, one server and one IP can host all five names with this single certificate."
      },
      {
        "question": "Why do certificates need reissuing during the term?",
        "answer": "Browser rules cap certificate lifetimes at 200 days since 15 March 2026, 100 days from March 2027 and 47 days from March 2029. Your 1–3-year purchase is a subscription with unlimited free reissues; we do them for all five names at once, or automate them through ACME."
      }
    ]
  },
  "single": {
    "variant": "single",
    "slug": "geotrust-quickssl-premium",
    "name": "GeoTrust QuickSSL Premium",
    "heroId": "gqHero",
    "faqs": [
      {
        "question": "What does GeoTrust QuickSSL Premium cover?",
        "answer": "One fully qualified domain and its www form — for example yourbusiness.in and www.yourbusiness.in, or shop.yourbusiness.in and www.shop.yourbusiness.in. It doesn't take extra domains or a wildcard; for those see QuickSSL Premium SAN or QuickSSL Premium Wildcard."
      },
      {
        "question": "How fast is it issued?",
        "answer": "Usually within about ten minutes of the domain check passing. A DNS record can take a few minutes to propagate; email validation completes as soon as you click approve."
      },
      {
        "question": "Which validation methods can I use?",
        "answer": "A DNS TXT record, an approval email to admin@, administrator@, webmaster@, hostmaster@ or postmaster@ your domain, or a file placed under /.well-known/pki-validation/ on the live site. Use the helper above to see the exact record."
      },
      {
        "question": "Do I need company documents?",
        "answer": "No. DV certificates only check domain control, so no MCA, GST or Udyam records are needed. If you want your company name in the certificate, choose GeoTrust True BusinessID (OV)."
      },
      {
        "question": "If I buy 2 or 3 years, why are there several certificates?",
        "answer": "Since 15 March 2026 browsers accept public certificates for at most 200 days, with shorter limits planned. A multi-year plan is a subscription: you pay once and receive free reissues through the term. XcellHost reissues and reinstalls them, or you can automate with GeoTrust DV Automate."
      },
      {
        "question": "Is DV encryption weaker than OV or EV?",
        "answer": "No. The encryption is identical — up to 256-bit sessions with RSA 2048+ or ECC keys. The difference is identity: OV and EV also verify and display your organisation."
      },
      {
        "question": "Why pay when free certificates exist?",
        "answer": "Free certificates encrypt just as well, but come without a warranty, a site seal or a support desk, and expire every 90 days. QuickSSL Premium adds the US$500K warranty, a dynamic GeoTrust seal, unlimited reissues and XcellHost's 24×7 installation support."
      },
      {
        "question": "Can I install it on more than one server?",
        "answer": "Yes. Server licensing is unlimited, so the same certificate can sit on several web servers or behind a load balancer. You can also reissue with a separate key per server, free."
      }
    ]
  },
  "wildcard": {
    "variant": "wildcard",
    "slug": "geotrust-quickssl-premium-wildcard",
    "name": "GeoTrust QuickSSL Premium Wildcard",
    "heroId": "gwHero",
    "faqs": [
      {
        "question": "What does *.yourbusiness.in cover?",
        "answer": "The base domain (yourbusiness.in) and every first-level subdomain — www., shop., mail., app. and any you create later. It does not cover a second level such as staging.app.yourbusiness.in; add *.app.yourbusiness.in as an extra wildcard for that."
      },
      {
        "question": "How fast is it issued?",
        "answer": "Usually within about ten minutes of the domain check passing. A new DNS record can take a few minutes to propagate; email validation completes as soon as you click approve."
      },
      {
        "question": "Why can't I validate with an HTTP file?",
        "answer": "Industry rules don't allow file-based validation for wildcard names, because a file on one website doesn't prove control of the whole domain. Use a DNS TXT record or approve an email sent to admin@, administrator@, webmaster@, hostmaster@ or postmaster@ your domain."
      },
      {
        "question": "When is a wildcard cheaper than separate certificates?",
        "answer": "At indicative prices, from about three subdomains besides the base domain — four hosts in all — and it keeps getting cheaper per host as you add more. Try the planner above with your own numbers."
      },
      {
        "question": "Can I add a different domain to the wildcard?",
        "answer": "Yes — as an extra domain (SAN), indicatively ₹1,999 per year, or as an extra wildcard such as *.yourbrand.com at ₹14,999 per year, up to 250 names in total."
      },
      {
        "question": "Does the certificate show my company name?",
        "answer": "No. It is domain-validated, so only the domain appears in the certificate and seal. For a verified company name on a wildcard, choose GeoTrust True BusinessID Wildcard (OV). EV certificates never allow wildcards."
      },
      {
        "question": "If I buy 2 or 3 years, why are there several certificates?",
        "answer": "Since 15 March 2026 browsers accept public certificates for at most 200 days, with shorter limits planned. A multi-year plan is a subscription: you pay once and receive free reissues through the term. XcellHost reissues and redeploys them to every host, or you can automate with GeoTrust Wildcard DV Automate."
      },
      {
        "question": "Can I install it on many servers?",
        "answer": "Yes. Server licensing is unlimited, so the same wildcard can sit on web servers, mail servers and every node behind a load balancer. You can also reissue with a separate key per server group, free."
      }
    ]
  }
} as const;
export type QuickSslVariant = keyof typeof QUICKSSL_PAGES;
