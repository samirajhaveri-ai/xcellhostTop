// FAQs from the supplied Hardware Security Module document.
export const HARDWARE_SECURITY_MODULE_FAQS: [string, string][] = [
  [
    "What is a hardware security module?",
    "A tamper-resistant device that generates, stores and uses cryptographic keys inside a protected boundary. Applications send it data to sign, encrypt or decrypt and receive the result; the private key never leaves in plain form, and tamper sensors erase keys if the device is attacked."
  ],
  [
    "How does an HSM help my organisation?",
    "It removes the most valuable secrets — CA keys, signing keys, database master keys, payment keys — from servers where they can be copied. It also gives auditors hardware-enforced separation of duties, tamper evidence and a signed audit trail, which many Indian and global rules expect."
  ],
  [
    "What are the most important HSM functions?",
    "Key generation and lifecycle management, digital signing (certificates, code, documents, eSign), encryption and key wrapping for databases and storage, PIN and card-key processing in payment HSMs, Aadhaar Data Vault and e-KYC key protection, and DNSSEC and TLS key protection."
  ],
  [
    "How many types of HSM are there?",
    "Two by function — general-purpose HSMs and payment (transaction) HSMs — and several by form: network appliances, PCIe cards, USB devices, hyperscaler cloud HSMs and HSM-as-a-Service. The comparison table and type finder above help you choose."
  ],
  [
    "What changes with FIPS 140-2 in September 2026?",
    "On 21 September 2026 the remaining FIPS 140-2 certificates move to NIST's historical list, and India's CCA asks CAs to stop issuing DSCs on FIPS 140-2 modules from that date, with full retirement by 21 September 2029. New purchases should be FIPS 140-3 validated; we plan replacement for existing units."
  ],
  [
    "Cloud HSM, cloud KMS or HSM-as-a-Service — what is the difference?",
    "Cloud KMS is a key service, often HSM-backed, where the provider runs the hardware. A cloud HSM (such as AWS CloudHSM or Azure Cloud HSM) gives you a dedicated HSM in the provider's region. XcellHost HSM-as-a-Service gives you a dedicated partition on HSMs in our Mumbai data centre, with our team running it."
  ],
  [
    "Do keys ever leave the HSM?",
    "Not in plain form. Keys marked non-extractable stay inside. Backups and replication move keys only wrapped under another key, to another HSM or a backup token, under M-of-N control defined in your key ceremony."
  ],
  [
    "How long does installation take?",
    "An HSM-as-a-Service partition is usually ready within days*. A dedicated appliance typically takes 3–8 weeks* from order, mostly OEM lead time and import; racking, ceremony and first integration then take about one to two weeks*."
  ],
  [
    "Which applications and interfaces are supported?",
    "Anything that speaks PKCS#11, Java JCE/JCA, Microsoft CNG/KSP, OpenSSL, KMIP or REST — CAs, eSign platforms, databases with TDE, payment switches, code-signing tools, web servers and custom apps. Payment HSMs use their host command set over TCP/IP. Integration is ₹29,999* per application."
  ],
  [
    "What support is included, and for how long?",
    "HSM-as-a-Service includes 24×7 monitoring and support for as long as you subscribe. Appliances come with the OEM warranty and support you choose at purchase; Managed HSM operations (₹14,999* per appliance per month) adds 24×7 monitoring, firmware, backup and DR drills from XcellHost."
  ],
  [
    "Can you host our payment HSM for PCI?",
    "Yes. We rack payment HSMs in our Mumbai Tier IV data centre or support them in yours, with dual control and split knowledge for key loading. PCI PIN and PCI DSS assessment stays in your scope; we provide the operational evidence your QSA asks for."
  ],
  [
    "Why choose XcellHost for HSMs?",
    "We have run managed cloud and security for Indian businesses since 1999, under ISO 27001 and ISO 20000-1, with a 24×7 NOC and SOC in Mumbai. We are OEM-neutral, keep keys in India, and handle the full lifecycle — sizing, procurement, ceremony, integration, monitoring and DR — on one INR invoice."
  ]
];
