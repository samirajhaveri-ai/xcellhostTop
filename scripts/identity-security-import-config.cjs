module.exports = {
  'multi-factor-authentication': {
    title: 'Multi-Factor Authentication', file: 'multi-factor-authentication', prefix: 'mf', microsoft: true,
    intro: 'Plan authentication methods, access policies and recovery procedures around your users and applications. Pilot the agreed controls before extending the rollout.',
    controls: [['Authentication Methods', 'Agree the methods supported by your applications and the enrolment process for each user group.'], ['Policy Rollout', 'Test access rules with pilot users and review exclusions before enforcement.'], ['Account Recovery', 'Document lost-device recovery, emergency access and helpdesk verification procedures.']],
  },
  'identity-and-access-management': {
    title: 'Identity & Access Management', file: 'identity-access-management', prefix: 'ia', microsoft: true,
    intro: 'Agree identity ownership, application access and lifecycle controls before connecting applications or changing sign-in policies.',
    controls: [['Application Access', 'Map application owners, access requirements and the sign-in methods in scope.'], ['Identity Lifecycle', 'Define joiner, mover and leaver responsibilities, including access removal.'], ['Provisioning Scope', 'Pilot account and group changes before applying them across the organisation.']],
  },
  'privileged-access-management': {
    title: 'Privileged Access Management', file: 'privileged-access-management', prefix: 'pm',
    intro: 'Define which privileged accounts, systems and sessions are covered by the engagement. Agree approval, emergency access and operational responsibilities before rollout.',
    controls: [['Privileged Accounts', 'Inventory administrator and service accounts with named owners.'], ['Session Controls', 'Agree approval, monitoring and session-recording requirements for the selected platform.'], ['Credential Handling', 'Review credential storage, rotation and emergency recovery procedures.']],
  },
  'privileged-identity-management': {
    title: 'Privileged Identity Management', file: 'privileged-identity-management', prefix: 'pm', microsoft: true,
    intro: 'Review administrator roles and define how privileged access is requested, approved and reviewed. Features depend on the selected Microsoft licences and agreed deployment scope.',
    controls: [['Role Eligibility', 'Agree which administrators need eligible roles and which assignments require review.'], ['Activation Rules', 'Define approval, authentication and time limits for privileged-role activation.'], ['Emergency Access', 'Document emergency accounts, monitoring and recovery responsibilities.']],
  },
  'identity-governance-and-administration': {
    title: 'Identity Governance & Administration', file: 'identity-governance-administration', prefix: 'ig', microsoft: true,
    intro: 'Set ownership and approval boundaries for identity lifecycle processes, access requests and reviews. Start with a defined pilot and expand after the process is validated.',
    controls: [['Access Ownership', 'Assign application and resource owners who can approve or review access.'], ['Lifecycle Workflows', 'Agree joiner, mover and leaver triggers and exception handling.'], ['Access Reviews', 'Define review frequency, reviewers and how removal decisions are implemented.']],
  },
  'iam-assessment': {
    title: 'IAM Assessment', file: 'iam-assessment', prefix: 'ia',
    intro: 'Agree the assessment scope, evidence sources and authorised access before the review. Findings are prioritised with your team so remediation has clear owners.',
    controls: [['Authorised Scope', 'Confirm identity platforms, applications and business units included in the review.'], ['Evidence Collection', 'Agree the required exports and read-only access; avoid collecting credentials.'], ['Remediation Ownership', 'Record findings, priorities and accountable owners for follow-up.']],
  },
  'active-directory-assessment': {
    title: 'Active Directory Assessment', file: 'active-directory-assessment', prefix: 'ad',
    intro: 'Start with written scope and approved evidence collection for your Active Directory environment. Review findings and remediation priorities before making production changes.',
    controls: [['Directory Scope', 'Confirm forests, domains, trusts and domain controllers included in the assessment.'], ['Read-Only Review', 'Agree collection permissions and approved review tools with your administrators.'], ['Change Boundaries', 'Separate assessment findings from remediation changes, which require an agreed change plan.']],
  },
  'security-hardware-token': {
    title: 'Security Hardware Token', file: 'security-hardware-token', prefix: 'tk',
    intro: 'Match the selected token model to your identity platform and application requirements. Define enrolment, inventory and recovery procedures before issuing keys.',
    controls: [['Model Compatibility', 'Confirm connectors, supported protocols and certification for the actual token model supplied.'], ['Enrolment Process', 'Agree identity verification and supervised registration for users receiving tokens.'], ['Lost-Key Recovery', 'Document spare-key handling, revocation and replacement procedures.']],
  },
};
