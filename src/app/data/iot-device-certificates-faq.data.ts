// Eight questions from the supplied IoT Device Certificates page, rendered in the shared FAQ section.
export const IOT_DEVICE_CERTIFICATES_FAQS: [string, string][] = [
  [
    "What is an IoT device certificate?",
    "An X.509 digital certificate issued to one device. It binds the device's identity — usually its serial number — to a public key whose private half stays on the device. The device uses it to prove who it is, typically over mutual TLS, and to sign or encrypt data."
  ],
  [
    "What's the difference between a birth and an operational certificate?",
    "A birth certificate is written during manufacturing and lasts the product's life; it proves the device is genuine. An operational certificate is issued after onboarding, is scoped to your cloud or customer, and is renewed every one to five years. Many fleets use both."
  ],
  [
    "How is the price per device worked out?",
    "The yearly rate depends on fleet size: ₹19 per device up to 10,000 devices, ₹12 up to 1 lakh and ₹7 above that, applied to every device. A 10-year long-life certificate is ₹99 per device, once. Integration is ₹1,49,999 one-time. All indicative and excluding 18% GST."
  ],
  [
    "Which protocols can devices use to get certificates?",
    "EST and SCEP for most devices, CMPv2 for industrial equipment, ACME for Linux-class gateways, and a REST API for factory systems. We recommend one per device class — the profile builder above shows our default."
  ],
  [
    "Do these certificates work with AWS IoT Core and Azure IoT Hub?",
    "Yes. AWS IoT Core and Azure IoT Hub (through the Device Provisioning Service) both accept devices that authenticate with X.509 certificates from your own CA. We register the CA, set up enrolment groups or just-in-time provisioning, and test the mutual-TLS connection."
  ],
  [
    "ECC or RSA keys — which should we use?",
    "ECC (P-256) is the usual choice for constrained devices: smaller certificates, faster handshakes and less power. RSA-2048 still suits older stacks. Long-life certificates may use P-384. The platform supports both, with SHA-2 or SHA-3 signatures."
  ],
  [
    "What happens when a device is lost, cloned or retired?",
    "We revoke its certificate. Brokers that check OCSP or CRLs — or your device registry — then refuse it, while the rest of the fleet keeps working. The record stays for audit."
  ],
  [
    "Can devices already in the field get certificates?",
    "Often, yes. If a device can reach an enrolment endpoint and has a bootstrap credential, it can enrol remotely over EST or SCEP. We review the firmware and connectivity first."
  ]
];
