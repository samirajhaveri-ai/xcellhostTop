// FAQs from the supplied Cloud Hardware Security Module document.
export const CLOUD_HSM_FAQS: [string, string][] = [
  [
    "What is a cloud HSM?",
    "A hardware security module delivered as a service. The provider owns, hosts and operates the HSM appliances; you get dedicated HSM capacity — a partition or a cluster — with your own credentials, keys and policies, and use it through standard APIs such as PKCS#11, JCE and CNG."
  ],
  [
    "How is XcellHost Cloud HSM different from AWS CloudHSM or Azure Cloud HSM?",
    "Hyperscaler HSMs live inside one provider's region and mainly serve that cloud. XcellHost Cloud HSM partitions sit in our Mumbai Tier IV data centre and are reachable over private link or IPsec from several clouds and your own data centre, are run 24×7 by our team with your quorum, and are billed in INR with GST."
  ],
  [
    "Is a partition really isolated from other customers?",
    "Yes. Each partition has its own keys, users, credentials and policy, enforced by the HSM firmware. Other tenants cannot see or use your keys, and appliance administrators — including XcellHost staff — manage hardware but cannot use partition keys."
  ],
  [
    "What is the difference between BYOK and HYOK?",
    "With BYOK you generate a key in your HSM, wrap it and import it into the cloud's key service, which then holds a copy. With HYOK the key never leaves your HSM; the cloud calls out to it, through a service such as AWS KMS external key store or Google Cloud EKM, each time it needs to decrypt, so you can refuse or revoke."
  ],
  [
    "Which FIPS level do the HSMs have?",
    "We deploy partitions on network HSMs validated to FIPS 140-3 Level 3*. The OEM model is to be confirmed* in your quotation, and we give you the NIST certificate number for the exact model and firmware."
  ],
  [
    "Where are my keys and backups stored?",
    "In India. The primary partition runs in our Mumbai Tier IV data centre, mirrored across two HSMs; the DR replica sits at a partner data centre in India* that you approve. Backups are HSM-wrapped and never stored as plaintext."
  ],
  [
    "How do my cloud applications connect?",
    "Over private connectivity from AWS, Azure, Google Cloud or Oracle Cloud, or an IPsec tunnel through our cloud router. The HSM client library on your servers talks to the partition over that private path; no HSM interface is exposed to the internet. Connectivity is quoted for your setup."
  ],
  [
    "We use Azure Dedicated HSM. What should we do?",
    "Plan to move before Microsoft ends support on 31 July 2028. Microsoft points to Azure Cloud HSM as the successor and Managed HSM for Key Vault-style workloads. If you want keys in a named Indian facility serving more than one cloud, an XcellHost Cloud HSM partition is the third option; we run the migration ceremony."
  ],
  [
    "Can I move keys from my on-prem HSM?",
    "Only if they were created as exportable and the OEMs support a wrapped transfer. Non-extractable keys — the right default for CA and signing keys — are replaced with new keys generated in the partition, and certificates re-issued. We plan this key by key."
  ],
  [
    "Does Cloud HSM help with the CCA's FIPS 140-3 deadline?",
    "It can. The CCA stops DSC issuance on FIPS 140-2 modules after 21 September 2026 and requires full retirement by 21 September 2029. Moving CA and eSign keys to a partition on FIPS 140-3 Level 3 hardware* removes the hardware refresh from your plan; your CA audit still applies."
  ],
  [
    "What does it cost?",
    "Indicatively ₹24,999* per partition per month, with 24×7 monitoring included; a DR replica is another partition. Key ceremony is ₹49,999* one-time, integration ₹29,999* per application, and managing a hyperscaler HSM is ₹14,999* per HSM per month. All excl. 18% GST; connectivity is quoted."
  ],
  [
    "Can you host payment HSMs as a service?",
    "Partitions on general-purpose HSMs suit tokenisation and data keys. PIN and card processing need PCI PTS HSM-certified payment HSMs; some clouds offer them as a service, and we can host dedicated payment HSMs under dual control in Mumbai on quote."
  ]
];
