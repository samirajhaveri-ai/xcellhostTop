import { Faq } from './models';

// Sample page copy; replace with approved service details before publication.
export const AGENTIC_AI_SAMPLE_WHY = [
  { icon: 'M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6z', title: 'Security by design', body: 'Plan agent permissions, access boundaries and review steps from the start.' },
  { icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h1M8 17h1', title: 'Your infrastructure, your choice', body: 'Explore deployment options that fit your applications and data needs.' },
  { icon: 'M3 12h5l3-8 4 16 3-8h3', title: 'Start with a focused pilot', body: 'Test one practical workflow before expanding to more teams and tasks.' },
  { icon: 'M5 5h14v14H5zM9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3', title: 'Connect your existing tools', body: 'Identify the systems and integrations your agents need to get work done.' },
  { icon: 'M4 19V9M10 19V5M16 19v-7M22 19H2', title: 'Measure the impact', body: 'Track task completion, response quality and time saved as your pilot evolves.' },
  { icon: 'M4 13v-1a8 8 0 0116 0v1M4 12h3v7H4zM17 12h3v7h-3zM17 19v2h-5', title: 'People stay in control', body: 'Build in human approvals and a clear handoff for decisions that need review.' },
];

export const AGENTIC_AI_SAMPLE_FAQS: Faq[] = [
  ['What is agentic AI?', 'Agentic AI uses AI models and connected tools to work through tasks toward a defined goal, within the permissions and limits you set.'],
  ['How is an AI agent different from a chatbot?', 'A chatbot mainly responds to questions. An agent can also use tools and carry out steps in a workflow when it is authorised to do so.'],
  ['Which workflow should we start with?', 'Choose a small, repeatable task with clear inputs and a result you can check, such as sorting support requests or preparing draft summaries.'],
  ['Can an agent connect to our existing applications?', 'Integration depends on the APIs, connectors and access controls available in your applications. Review those requirements during planning.'],
  ['Can people approve actions before they happen?', 'A workflow can include approval steps before sensitive actions, such as sending a message or changing a record. Define those checkpoints during setup.'],
  ['Where will our data be stored?', 'Data location depends on the selected hosting, model providers and connected tools. Confirm storage and processing locations before deployment.'],
  ['How do we limit what an agent can access?', 'Use narrowly scoped permissions, separate credentials and clear tool restrictions. Review access regularly as workflows change.'],
  ['How can we measure success?', 'Agree on measures such as accuracy, task completion, time saved and the number of cases requiring human review, then compare against your current process.'],
  ['Can we expand after a pilot?', 'Use the pilot results to decide what to expand. Add workflows gradually and check capacity, cost, permissions and quality at each stage.'],
  ['How do we get started?', 'Contact the team with a workflow you want to improve, the systems involved and your requirements. These details help scope a practical first step.'],
];
