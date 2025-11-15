/**
 * SEO utility functions for generating structured data and meta information
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  path: string;
  type?: string;
}

export const siteConfig = {
  name: "EPOS Payments",
  url: "https://epos.com", // Update with actual domain
  description: "EPOS provides comprehensive global payment solutions, multi-currency support, and advanced financial services.",
  defaultImage: "/logowhite.svg",
  twitterHandle: "@epospayments", // Update if available
};

export const pages: Record<string, PageSEO> = {
  home: {
    title: "EPOS Payments - Global Payment Solutions | Payments, FX & Financial Services",
    description: "EPOS provides comprehensive global payment solutions, multi-currency support, and advanced financial services. Get merchant acquiring, FX, cards, and wealth management services.",
    keywords: "payment solutions, global payments, merchant acquiring, foreign exchange, FX, payment processing, financial services, multi-currency, EPOS, payment gateway",
    path: "/",
    type: "website",
  },
  services: {
    title: "Our Services - EPOS Payments | Payment Solutions & Financial Services",
    description: "Explore EPOS comprehensive payment and financial solutions including Payments, Connect, FX, Cards, Wealth, and HPP services designed for modern businesses.",
    keywords: "payment services, EPOS Payments, EPOS Connect, EPOS FX, EPOS Cards, EPOS Wealth, EPOS HPP, payment solutions, financial services",
    path: "/services",
    type: "website",
  },
  "why-us": {
    title: "Why Choose EPOS - Payment Solutions Provider",
    description: "Discover why businesses choose EPOS for comprehensive payment solutions, global reach, advanced compliance, expert support, and flexible integration.",
    keywords: "why choose EPOS, payment provider benefits, global payment solutions, compliance, payment integration",
    path: "/why-us",
    type: "website",
  },
  about: {
    title: "About EPOS - Global Payment Solutions Provider",
    description: "Learn about EPOS, an independent financial services provider specializing in comprehensive payment solutions, foreign exchange, and financial services for businesses worldwide.",
    keywords: "about EPOS, payment company, financial services provider, payment solutions company",
    path: "/about",
    type: "website",
  },
  contact: {
    title: "Contact EPOS - Get in Touch | Free Consultation",
    description: "Contact EPOS for a free consultation. Get expert help with payment solutions, FX, cards, and financial services. Available Mon-Fri, 9am-6pm GMT.",
    keywords: "contact EPOS, payment consultation, EPOS support, payment services contact",
    path: "/contact",
    type: "website",
  },
};

export function getStructuredData(page: string, fullUrl: string) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.defaultImage}`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-20-1234-5678",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    sameAs: [
      // Add social media links when available
      // "https://www.linkedin.com/company/epos",
      // "https://twitter.com/epospayments",
    ],
  };

  if (page === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        baseStructuredData,
        {
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          url: siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          publisher: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        {
          "@type": "FinancialService",
          name: "EPOS Payments",
          description: "Comprehensive global payment solutions and financial services",
          serviceType: [
            "Payment Processing",
            "Foreign Exchange",
            "Merchant Acquiring",
            "Card Issuance",
            "Wealth Management",
          ],
          areaServed: "Worldwide",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      ],
    };
  }

  return baseStructuredData;
}

export function getFullUrl(path: string): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`;
  }
  return `${siteConfig.url}${path}`;
}

