export interface CustomerTestimonial {
  name: string;
  role: string;
  quote: string;
  rating?: number;
}

// Add the customer's supplied wording under the canonical page slug.
// Do not generate names, quotations or ratings. Pages without an override use
// the attributed, user-supplied feedback below when they contain a FAQ section.
export const CUSTOMER_TESTIMONIALS: Record<string, CustomerTestimonial[]> = {};

// Supplied in the user's endpoint-security screenshot. Keep this attribution
// when these service-level experiences appear on a different product page.
export const ENDPOINT_CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Aakash Mehta', role: 'IT Manager, Manufacturing Company', rating: 5,
    quote: 'We have much better visibility across our employee devices now. Suspicious activity is easier to spot, and our team can respond quickly when something unusual occurs.',
  },
  {
    name: 'Sneha Kulkarni', role: 'Head of IT, Logistics Company', rating: 5,
    quote: 'Managing security across multiple endpoints has become much simpler. Centralized monitoring saves our team time, while clear alerts help us focus on important threats.',
  },
  {
    name: 'Rohit Agarwal', role: 'Operations Director, Financial Services', rating: 5,
    quote: 'The behavioral approach gives us more confidence than relying on traditional antivirus alone. We can identify unusual activity earlier and take action before it affects our operations.',
  },
];
