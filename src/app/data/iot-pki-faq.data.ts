// Eight questions from the supplied IoT PKI page, rendered in the shared FAQ section.
export const IOT_PKI_FAQS: [string, string][] = [
  [
    "What is IoT PKI?",
    "A public key infrastructure built for connected devices: a private certificate authority, HSM-protected keys and the tooling to issue a unique X.509 certificate to every device, then renew, revoke and update those certificates over the device's life."
  ],
  [
    "What is a device \"birth certificate\"?",
    "The first certificate a device receives, usually during manufacturing. It binds the device's serial number to a key pair generated on the device. Many fleets later swap it for a shorter-lived operational certificate after onboarding."
  ],
  [
    "Why not use passwords or API tokens on devices?",
    "They are usually shared across a batch, stored in firmware and easy to extract. One leak exposes the whole fleet. A per-device private key in a secure element can't be copied to another unit, so a breach stays contained to one device."
  ],
  [
    "Where can certificates be installed?",
    "On the silicon by the chip supplier, on your production line through an injection station, or remotely in the field over EST, SCEP or CMPv2. The right point depends on your volumes, line speed and the secure hardware on the device."
  ],
  [
    "Which protocols do you support?",
    "EST, SCEP and CMPv2 for device enrolment and renewal, ACME for Linux-class gateways, and a REST API for factory and cloud systems. Devices then use their certificates for mutual TLS — for example to an MQTT broker, AWS IoT Core or Azure IoT Hub."
  ],
  [
    "DigiCert or Sectigo — which should we choose?",
    "Both offer IoT PKI with private CAs and extra device protections. The choice usually comes down to scale, hosting model, existing CA relationships and integrations. We run a short requirements session and a side-by-side, then recommend one."
  ],
  [
    "How long should device certificates last?",
    "Birth certificates often match the product's service life — 10 to 20 years — because a device may sit offline for long periods. Operational certificates are typically shorter and renewed automatically. We plan key sizes, algorithms and the CA hierarchy so the root outlives the fleet."
  ],
  [
    "What does \"quantum-ready\" mean for devices?",
    "Long-life devices shipped today may still be in service when quantum computers threaten RSA and ECC. Crypto-agile profiles, firmware that can accept new trust anchors and a plan for NIST's post-quantum algorithms (such as ML-DSA) let you move later without recalling hardware. Confirm current PQC support with the vendor."
  ]
];
