export type ServiceOffering = {
  title: string;
  description: string;
  features: string[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Local & Cross-Border Payments",
    description:
      "EPOS is your one stop for payments, facilitating local currency delivery to bank accounts across most markets through Tier 1 institutions such as Barclays, CITI, RBS, DBS, and HSBC to keep funds safe, secure, and segregated.",
    features: [
      "Local and cross border payment solutions",
      "Bank accounts and IBANs in key jurisdictions",
      "Multi-currency support with integrated FX",
      "Providing BaaS (Banking as a Service)"
    ]
  },
  {
    title: "FX Solutions",
    description:
      "Provide FX delivers multi-currency foreign exchange with physical delivery across markets and currencies, offering deep liquidity to facilitate instant exchange and settlement for fiat currencies.",
    features: [
      "Real-time FX access across global markets",
      "OTC trading for tailored currency solutions",
      "Speed, transparency, and financial flexibility"
    ]
  },
  {
    title: "Compliance Solutions",
    description:
      "Provide fast-track onboarding is designed to manage customer requirements and risk efficiently, with an extensive KYC/AML framework that aligns with FATF guidance and leading regulatory bodies.",
    features: [
      "Automated AML/CTF/ATF compliance workflows",
      "Real-time transaction monitoring and risk assessment",
      "End-to-end customer lifecycle management"
    ]
  },
  {
    title: "Card Issuance Programs",
    description:
      "Global issuance for Mastercard and Visa card programs, covering debit, credit, and prepaid cards in both single- and multi-currency formats with virtual and physical fulfillment.",
    features: [
      "Visa and Mastercard issuance worldwide",
      "Multi-currency and single-currency options",
      "Virtual and physical cards for payouts",
      "BIN sponsorship and full program management"
    ]
  },
  {
    title: "Merchant Acquiring",
    description:
      "Merchant acquiring for businesses of all sizes to accept a wide range of payment methods, embedding seamlessly into existing platforms to power services and products.",
    features: [
      "Easy integration into existing platforms",
      "Support for card payments, bank wires, and Web3",
      "BIN sponsorship with resilient processing"
    ]
  },
  {
    title: "Wealth Management",
    description:
      "Wealth management services adhere to IOSCO principles, enabling the distribution, issuance, fractionalization, or unitization of securities across traditional and digital channels.",
    features: [
      "Global issuance and distribution of securities",
      "Support for traditional, digital, and tokenized assets"
    ]
  }
];

