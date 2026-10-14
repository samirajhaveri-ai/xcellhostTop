// Eight questions from the supplied Cloud Code Signing page, rendered in the shared FAQ section.
export const CLOUD_CODE_SIGNING_FAQS: [string, string][] = [
  [
    "What is cloud code signing?",
    "It is code signing delivered as a service. Your code-signing certificate's private key is generated and kept in a certified cloud HSM, and your developers and build pipelines sign through an API under the rules you set — instead of plugging in a USB token."
  ],
  [
    "Does the private key ever leave the HSM?",
    "No. Your build computes a hash of the file and sends only that hash. The signature is created inside the HSM and returned. Nobody — including XcellHost — can export the key."
  ],
  [
    "Does it meet the June 2023 hardware key requirement?",
    "Yes. Since June 2023 the CA/Browser Forum has required code-signing keys to be generated and stored on hardware certified to FIPS 140-2 Level 2 or Common Criteria EAL4+. The cloud HSMs used by these services meet that bar."
  ],
  [
    "What changes in February 2026?",
    "New code-signing certificates are limited to one year of validity. HSM-based plans can be bought for longer terms but the certificate is reissued every year. On a cloud signing service we schedule and complete that reissue for you, so pipelines keep working."
  ],
  [
    "Which CI/CD tools can sign this way?",
    "GitHub Actions, GitLab CI, Jenkins, Azure DevOps and Bitbucket, plus build tools such as Gradle, Maven and ANT. Anything that can run a command line and keep a secret can usually be connected; we set it up and document it."
  ],
  [
    "Do I need OV or EV?",
    "OV (organisation-validated) suits most software and is also available to individual developers. EV is for registered organisations only, has the strictest vetting and is required for kernel-mode drivers submitted through Microsoft's Hardware Dev Center. Our Team edition uses OV; Business and Enterprise include EV."
  ],
  [
    "Does EV still remove SmartScreen warnings instantly?",
    "Not any more. Since March 2024 Microsoft SmartScreen builds reputation for EV-signed files the same way it does for OV — through clean downloads over time. EV still gives the highest assurance of who the publisher is, and signing consistently with the same certificate helps reputation build."
  ],
  [
    "Can we limit when and by whom signing happens?",
    "Yes. You can restrict each key to named users or services, require one or two approvers with MFA, allow signing only from protected branches and only inside release windows. Try the policy builder above to see how a request is checked."
  ]
];
