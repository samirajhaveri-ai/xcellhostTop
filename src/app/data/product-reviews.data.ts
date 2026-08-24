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
export const PRODUCT_REVIEW_OVERRIDES: Record<string, ProductReviewContent[]> = {};

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
