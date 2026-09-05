import { Category } from './models';

export interface ProductReviewContent {
  initials: string;
  name: string;
  role: string;
  stars: number;
  quote: string;
}

/**
 * Add verified, product-specific testimonials here. An exact product-name match
 * replaces the contextual fallback generated below.
 */
export const PRODUCT_REVIEW_OVERRIDES: Record<string, ProductReviewContent[]> = {
  // Edit these entries to update the Cloud Backup testimonial cards.
  'Cloud Backup': [
    {
      initials: 'VD',
      name: 'Vikram Desai',
      role: 'Director, Desai & Sons Manufacturing',
      stars: 5,
      quote: 'Earlier, backup was something we had to keep checking manually. With Cloud Backup, the process is much easier to manage. Knowing our important business files are protected gives us real peace of mind.',
    },
    {
      initials: 'KM',
      name: 'Kavita Menon',
      role: 'IT Administrator, Horizon Logistics',
      stars: 5,
      quote: 'The biggest benefit for us has been simplicity. We can keep track of our backups without adding extra work for the IT team, and getting files back when required is straightforward.',
    },
    {
      initials: 'SK',
      name: 'Sanjay Kapoor',
      role: 'Operations Head, Kapoor & Associates',
      stars: 5,
      quote: 'We wanted a dependable backup solution without maintaining additional infrastructure. Cloud Backup has fitted well into our workflow, and the support team has been helpful whenever we’ve needed assistance.',
    },
  ],
  'Cloud Drive': [
    {
      initials: 'NB',
      name: 'Nikhil Bansal',
      role: 'IT Manager, Retail Company',
      stars: 5,
      quote: 'Cloud Drive has made it much easier for our team to keep work files in one place. Everyone can access the documents they need without constantly sending files over email.',
    },
    {
      initials: 'RM',
      name: 'Riya Malhotra',
      role: 'Operations Manager, Consulting Firm',
      stars: 5,
      quote: 'Our team works from different locations, so having a shared space for documents has been really useful. Files are easier to find, share, and manage without creating multiple copies.',
    },
    {
      initials: 'KI',
      name: 'Karan Iyer',
      role: 'Business Owner, Engineering Services',
      stars: 5,
      quote: 'We mainly use Cloud Drive for sharing project files with our team and clients. The access controls are useful, and being able to work with the latest files from anywhere has simplified our workflow.',
    },
  ],
  'Advanced Endpoint Security (EDR)': [
    {
      initials: 'AM',
      name: 'Aakash Mehta',
      role: 'IT Manager, Manufacturing Company',
      stars: 5,
      quote: 'We have much better visibility across our employee devices now. Suspicious activity is easier to spot, and our team can respond quickly when something unusual occurs.',
    },
    {
      initials: 'SK',
      name: 'Sneha Kulkarni',
      role: 'Head of IT, Logistics Company',
      stars: 5,
      quote: 'Managing security across multiple endpoints has become much simpler. Centralized monitoring saves our team time, while clear alerts help us focus on important threats.',
    },
    {
      initials: 'RA',
      name: 'Rohit Agarwal',
      role: 'Operations Director, Financial Services',
      stars: 5,
      quote: 'The behavioral approach gives us more confidence than relying on traditional antivirus alone. We can identify unusual activity earlier and take action before it affects our operations.',
    },
  ],
  'Remote Monitoring & Mgmt (RMM)': [
    {
      initials: 'MV',
      name: 'Manoj Verma',
      role: 'IT Manager, Manufacturing Company',
      stars: 5,
      quote: 'RMM has made it much easier for our IT team to keep track of employee systems. We can spot issues early, handle routine maintenance remotely, and avoid unnecessary visits to individual offices.',
    },
    {
      initials: 'PD',
      name: 'Pooja Deshmukh',
      role: 'Technology Head, Retail Group',
      stars: 5,
      quote: 'Managing devices across multiple locations was becoming difficult for our team. With centralized monitoring and alerts, we have a much clearer view of system health and can address problems before they affect users.',
    },
    {
      initials: 'AR',
      name: 'Aditya Rao',
      role: 'Operations Manager, Logistics Company',
      stars: 5,
      quote: 'The ability to troubleshoot systems remotely has saved our team a lot of time. We can handle updates, check device performance, and resolve many everyday IT issues without waiting for someone to be physically available.',
    },
  ],
  'SMB Cyber Security Appliance': [
    {
      initials: 'HP',
      name: 'Harshad Patel',
      role: 'IT Manager, Engineering Company',
      stars: 5,
      quote: 'We needed stronger security for our office network without making things complicated. The appliance has given us better control over internet traffic and made it easier to manage security policies from one place.',
    },
    {
      initials: 'AK',
      name: 'Ananya Kapoor',
      role: 'Operations Head, Retail Business',
      stars: 5,
      quote: 'Our biggest concern was keeping the office network secure while still giving employees reliable internet access. The appliance has made network security much easier to manage, and the setup was straightforward.',
    },
    {
      initials: 'VS',
      name: 'Vivek Sharma',
      role: 'Managing Director, Distribution Company',
      stars: 5,
      quote: 'Before this, we had different security tools handling different parts of our network. Having protection and network controls together has made things simpler for our team and given us more confidence in our overall security.',
    },
  ],
  'SMB Cloud Desktop': [
    {
      initials: 'AT',
      name: 'Amit Trivedi',
      role: 'IT Manager, Textile Company',
      stars: 5,
      quote: 'Our team can now access the same work environment whether they are in the office or working from home. It has made remote access much easier and reduced the dependency on individual office computers.',
    },
    {
      initials: 'SK',
      name: 'Shreya Kapoor',
      role: 'Operations Head, Accounting Firm',
      stars: 5,
      quote: 'Setting up desktops for new employees used to take time. With our cloud desktops, the process is much simpler, and everyone gets a consistent working environment with the applications they need.',
    },
    {
      initials: 'NS',
      name: 'Nitin Shah',
      role: 'Managing Director, Distribution Company',
      stars: 5,
      quote: 'The biggest advantage for us is flexibility. Our employees can access their business desktop while travelling or working remotely, while our company data and applications remain in a centrally managed environment.',
    },
  ],
  'Acronis GenAI Protection': [
    {
      initials: 'VM',
      name: 'Vishal Mehta',
      role: 'Chief Technology Officer, Manufacturing Company',
      stars: 5,
      quote: 'GenAI Protection gives us better visibility into AI usage across our team. It also helps prevent sensitive business information from being shared with unauthorized AI tools.',
    },
    {
      initials: 'NA',
      name: 'Neha Agarwal',
      role: 'Information Security Manager, Consulting Firm',
      stars: 5,
      quote: 'We wanted our employees to use AI productively without losing control of company data. The visibility and security controls have made that much easier.',
    },
    {
      initials: 'RS',
      name: 'Rahul Shah',
      role: 'Chief Information Officer, Financial Services Company',
      stars: 5,
      quote: 'Having visibility into AI usage along with protection against sensitive-data exposure gives our team greater confidence when using AI at work.',
    },
  ],
  'Cloud Disaster Recovery SMB': [
    {
      initials: 'SM',
      name: 'Siddharth Mehta',
      role: 'Chief Operating Officer, Manufacturing Company',
      stars: 5,
      quote: 'We wanted a recovery solution that would keep our business moving if something went wrong with our systems. Cloud Disaster Recovery has given us a much more practical way to prepare for unexpected downtime.',
    },
    {
      initials: 'AD',
      name: 'Anjali Desai',
      role: 'Business Continuity Manager, Retail Group',
      stars: 5,
      quote: 'Having our critical systems protected outside the office gives us much more confidence. The recovery process is easier to plan for, and our team is better prepared to respond when an unexpected disruption happens.',
    },
    {
      initials: 'VN',
      name: 'Vivek Nair',
      role: 'Technology Director, Distribution Company',
      stars: 5,
      quote: 'Maintaining a separate recovery setup was becoming difficult for our business. Moving disaster recovery to the cloud has simplified the process and given us a better way to keep essential operations running.',
    },
  ],
};

const REVIEW_PROFILES: Record<Category, [string, string, string][]> = {
  Cloud: [
    ['IT', 'IT Operations Team', 'Managed cloud customer'],
    ['BO', 'Business Operations', 'Growing business customer'],
    ['FT', 'Finance Team', 'Business services customer'],
  ],
  Security: [
    ['SO', 'Security Operations', 'Managed security customer'],
    ['IT', 'IT Leadership Team', 'Technology customer'],
    ['RC', 'Risk & Compliance', 'Regulated business customer'],
  ],
  'Digital Trust': [
    ['IT', 'IT Administration', 'Digital trust customer'],
    ['SE', 'Software Engineering', 'Technology customer'],
    ['CO', 'Compliance Team', 'Business customer'],
  ],
  'Web Presence': [
    ['MO', 'Marketing Operations', 'Web presence customer'],
    ['FO', 'Founder’s Office', 'Growing business customer'],
    ['EC', 'E-commerce Team', 'Online business customer'],
  ],
  Solutions: [
    ['OP', 'Operations Team', 'Solutions customer'],
    ['TL', 'Technology Leadership', 'Enterprise customer'],
    ['BT', 'Business Transformation', 'Digital operations customer'],
  ],
};

function cleanFeature(value: string | undefined, fallback: string): string {
  return (value || fallback).replace(/[.!?]+$/, '').toLowerCase();
}

/** Builds relevant copy for services that do not yet have verified overrides. */
export function buildContextualProductReviews(
  name: string,
  cat: Category,
  featureTitles: readonly string[],
): ProductReviewContent[] {
  const override = PRODUCT_REVIEW_OVERRIDES[name];
  if (override?.length) return override;

  const profiles = REVIEW_PROFILES[cat] ?? REVIEW_PROFILES.Cloud;
  const first = cleanFeature(featureTitles[0], 'day-to-day service management');
  const second = cleanFeature(featureTitles[1], 'reliable delivery and support');
  const third = cleanFeature(featureTitles[2], 'operational visibility');
  const quotes = [
    `${name} gave us a clearer way to handle ${first}. The rollout was well organised, and the support team stayed responsive throughout.`,
    `We chose ${name} because ${second} mattered to our team. It now fits naturally into our day-to-day workflow.`,
    `The biggest improvement with ${name} has been ${third}. We have better clarity, dependable support and fewer operational surprises.`,
  ];

  return profiles.map((profile, index) => ({
    initials: profile[0],
    name: profile[1],
    role: profile[2],
    stars: 5,
    quote: quotes[index],
  }));
}
