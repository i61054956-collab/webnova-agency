/**
 * CENTRAL BRAND & CONTACT CONFIGURATION
 * Update this single file to finalize your brand name, contact details,
 * WhatsApp number, and optional backend/Formspree submission endpoint.
 */
export const siteConfig = {
  brandName: '[WEBNOVA]',
  brandShortName: 'WEBNOVA',
  tagline: 'Build Beyond Limits.',
  regionFocus: 'Tamil Nadu & Puducherry, India',
  nationwideNote: 'Serving Tamil Nadu, Puducherry & businesses across India',

  contact: {
    // Replace these placeholders with your official business contact details
    phoneDisplay: '+91 00000 00000',
    phoneHref: 'tel:+910000000000',
    whatsappNumber: '917010200933', // Digits only with country code (e.g., 919876543210)
    email: 'hello@webnova-placeholder.in',
    location: 'Tamil Nadu & Puducherry, India (Remote & Regional Consultations)',
    businessHours: 'Mon – Sat, 9:30 AM – 7:00 PM IST',
  },

  // Optional: Add a Formspree or custom backend API endpoint here when ready.
  // When empty (''), the Contact form runs in interactive frontend demonstration mode
  // with full validation and direct WhatsApp enquiry handoff.
  formEndpoint: '',

  seo: {
    defaultTitle: '[WEBNOVA] — Build Beyond Limits | AI-Powered Digital Agency',
    defaultDescription:
      'Premium web development, e-commerce solutions, custom web applications, and AI automation for growing businesses in Tamil Nadu, Puducherry, and across India.',
  },
};
