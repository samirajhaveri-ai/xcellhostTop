// Eight questions from the supplied Matter DAC page, rendered in the shared FAQ section.
export const MATTER_DAC_FAQS: [string, string][] = [
  [
    "What is a Matter Device Attestation Certificate (DAC)?",
    "An X.509 certificate unique to one Matter device. It holds the vendor and product IDs and is paired with a private key that stays on the device. When someone adds the device to a home, the phone or hub checks the DAC to confirm it is a genuine, certified product."
  ],
  [
    "What are the PAA and the PAI?",
    "The Product Attestation Authority (PAA) is the root certificate authority; commissioners trust only PAAs listed in the CSA's Distributed Compliance Ledger. The Product Attestation Intermediate (PAI) is the issuing CA for your brand, signed by the PAA, and it signs your DACs."
  ],
  [
    "Can't we use our own CA or an ordinary certificate?",
    "Only if your root is accepted as a PAA. That means meeting all the CSA's CA requirements — security, facilities, personnel and audit logging — paying for third-party audits, and going through root approval, which the CSA does not guarantee. Using a PAI under a trusted PAA such as DigiCert's avoids all of that."
  ],
  [
    "How fast can we start issuing DACs?",
    "DigiCert states issuance can begin in about a week, once your vendor details are confirmed and the PAI is signed. Factory-line integration and CSA certification run in parallel and depend on your production schedule."
  ],
  [
    "Do we need a CSA vendor ID and Matter certification?",
    "Yes. Your vendor ID goes into the PAI and DACs, and certified products get a CSA-signed Certification Declaration that the device presents during attestation. Our CSA certification guidance helps you plan membership, test labs and DCL entries; CSA and lab fees are paid directly by you."
  ],
  [
    "How do DACs get onto the devices?",
    "Usually during production: a key pair is generated in the device's secure element or flash, a DAC is issued for it and written back, along with the PAI and Certification Declaration. Some module vendors ship pre-provisioned modules. Our factory injection integration sets this up on your line or at your contract manufacturer."
  ],
  [
    "Can we issue DACs in batches?",
    "Yes. DACs can be issued one at a time or in batches, so the line keeps running even if the network to the CA is slow. Every issued certificate is recorded against its serial number."
  ],
  [
    "Which integrations are supported?",
    "DigiCert offers a REST API plus SCEP, EST and CMPv2. We connect these to your MES, test jigs or provisioning tools and document the process for your factory team."
  ]
];
