export interface CustomerTestimonial {
  name: string;
  role: string;
  quote: string;
  rating?: number;
}

// Add the customer's supplied wording under the canonical page slug.
// Do not generate names, quotations or ratings. Empty pages render no section.
export const CUSTOMER_TESTIMONIALS: Record<string, CustomerTestimonial[]> = {};
