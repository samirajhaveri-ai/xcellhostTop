export const IDENTITY_SECURITY_PAGES = {
  "multi-factor-authentication": {
    "title": "Multi-Factor Authentication",
    "description": "Plan authentication methods, access policies and recovery procedures around your users and applications. Pilot the agreed controls before extending the rollout."
  },
  "identity-and-access-management": {
    "title": "Identity & Access Management",
    "description": "Agree identity ownership, application access and lifecycle controls before connecting applications or changing sign-in policies."
  },
  "privileged-access-management": {
    "title": "Privileged Access Management",
    "description": "Define which privileged accounts, systems and sessions are covered by the engagement. Agree approval, emergency access and operational responsibilities before rollout."
  },
  "privileged-identity-management": {
    "title": "Privileged Identity Management",
    "description": "Review administrator roles and define how privileged access is requested, approved and reviewed. Features depend on the selected Microsoft licences and agreed deployment scope."
  },
  "identity-governance-and-administration": {
    "title": "Identity Governance & Administration",
    "description": "Set ownership and approval boundaries for identity lifecycle processes, access requests and reviews. Start with a defined pilot and expand after the process is validated."
  },
  "iam-assessment": {
    "title": "IAM Assessment",
    "description": "Agree the assessment scope, evidence sources and authorised access before the review. Findings are prioritised with your team so remediation has clear owners."
  },
  "active-directory-assessment": {
    "title": "Active Directory Assessment",
    "description": "Start with written scope and approved evidence collection for your Active Directory environment. Review findings and remediation priorities before making production changes."
  },
  "security-hardware-token": {
    "title": "Security Hardware Token",
    "description": "Match the selected token model to your identity platform and application requirements. Define enrolment, inventory and recovery procedures before issuing keys."
  }
} as const;

export type IdentitySecuritySource = keyof typeof IDENTITY_SECURITY_PAGES;
