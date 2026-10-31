// FAQs from the supplied Cyber Range as a Service document.
export const CYBER_RANGE_FAQS: [string, string][] = [
  [
    "What is a cyber range?",
    "A cyber range is an isolated, realistic copy of an organisation's network — servers, users, security tools and traffic — where people practise detecting and responding to simulated attacks. Because it is sealed off, teams can make mistakes and learn from them without any risk to production systems."
  ],
  [
    "Is the range connected to our network?",
    "No. Ranges run in isolated XcellHost tenants in India with no route to your network and no open internet egress. Learners connect through a browser. If you want the range to mirror your environment, we rebuild it from your design documents, not by connecting to it."
  ],
  [
    "Do you teach people how to attack systems?",
    "No. Simulated adversary activity is scripted and run by our exercise team inside the range. Learners practise the defender's job: triage, investigation, containment, recovery, reporting and decisions. CTF challenges are built around defensive tasks such as log analysis and forensics."
  ],
  [
    "Which security tools are in the range?",
    "Each range includes a SIEM, endpoint detection and a ticketing workflow so analysts work the way they do on shift. Where your licences allow, we can build scenarios around the same product families you use; ask during discovery."
  ],
  [
    "Can you simulate OT and industrial systems?",
    "Yes. OT/ICS segments include HMI, PLC simulators, a historian and an engineering workstation behind an IT/OT boundary, so plant and IT teams can rehearse a disruption together. Scenarios are tagged to ATT&CK for ICS. For assessments of your real plant, see our OT Assessment service."
  ],
  [
    "How does this help with CERT-In's 6-hour reporting?",
    "Incident drills run a visible 6-hour clock from the moment the incident is noticed. Teams classify the incident against the directions, gather what is known, name the point of contact and draft the report, and we test whether 180 days of logs can actually be retrieved. The after-action report records how long each step took."
  ],
  [
    "Will a drill satisfy RBI or SEBI requirements?",
    "A drill gives you a tested plan and a written record, which helps you meet expectations for cyber crisis management and periodic drills. Whether a specific exercise fulfils a specific clause depends on your category and the regulator; confirm with your compliance team. We can align the scenario to the requirement you name."
  ],
  [
    "How are teams scored?",
    "From evidence: flags captured, correct triage decisions, tickets raised, containment steps taken and timestamps. Each task carries points and a time bonus, and every scoring event is mapped to an ATT&CK technique and a NICE work role. Leaderboards on this page are samples."
  ],
  [
    "Can we use the range for hiring?",
    "Yes. Role-based tests for L1 and L2 analysts, incident responders and OT engineers are scored by task, so you compare candidates on what they did rather than what they said. Results are shared only with your hiring team."
  ],
  [
    "Do you support universities and certification prep?",
    "Yes. Universities can run semester labs, CTF events and capstones with per-learner seats and instructor dashboards, alongside our AI IDE Lab. Labs support practice for common blue-team certifications; we are not affiliated with any certification body."
  ],
  [
    "How is this different from purple teaming or breach and attack simulation?",
    "A range trains people in a copy of a network. Purple teaming and breach and attack simulation test detections on your real environment, and a red team assessment tests your real defences end to end. Many teams train in the range first, then validate in production."
  ],
  [
    "Where is data stored and who sees results?",
    "Ranges and results are hosted in India. Learner names, scores and reports are visible only to people you nominate; individual results are not shared with other customers. Synthetic data is used inside the range — no real personal data is needed."
  ]
];
