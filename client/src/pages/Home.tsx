import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";
import { serviceOfferings } from "@/data/services";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whyUs = [
    {
      title: "Tier 1 Network Access",
      description: "Connect directly with prestigious Tier 1 banks, EMIs, asset managers, and payment gateways through EPOS' curated partner ecosystem."
    },
    {
      title: "Global Reach",
      description: "Deliver local currency to bank accounts in most markets, leveraging connections to the Bank of England via Faster Payments and to the European Central Bank for Instant SEPA."
    },
    {
      title: "Trusted Infrastructure",
      description: "Work with FCA-regulated UK EMIs and partners that safeguard client funds in segregated accounts while supporting SWIFT, SEPA, and faster payment rails."
    },
    {
      title: "Expert Support",
      description: "Benefit from a team with over a decade of experience in FX, payments, and financial services that listens first and tailors every engagement."
    },
    {
      title: "Comprehensive Coverage",
      description: "Access real-time tracking across 40+ collection currencies and 100+ payout currencies through a single, global payment network."
    }
  ];

  const processSteps = [
    {
      number: "One",
      title: "Qualification",
      description: "We listen to understand each client's demands and capture the details we need through a structured questionnaire."
    },
    {
      number: "Two",
      title: "Introduction",
      description: "After review, we introduce you to the financial institutions best aligned with your profile, risk appetite, and objectives."
    },
    {
      number: "Three",
      title: "Continued Assistance",
      description: "We remain involved to ensure you secure the right mix of solutions and stay supported as your business evolves."
    }
  ];

  const faqs = [
    {
      question: "What payment methods does EPOS support?",
      answer: "EPOS supports a comprehensive range of payment methods including credit cards, debit cards, bank transfers, digital wallets, and Web3 payments across multiple currencies and markets."
    },
    {
      question: "Is EPOS compliant with international regulations?",
      answer: "Yes, EPOS maintains full compliance with international financial regulations including AML/KYC requirements, FATF standards, and local regulatory requirements across all supported markets."
    },
    {
      question: "How quickly can we integrate EPOS services?",
      answer: "Integration timelines vary based on your specific requirements, but our streamlined onboarding process typically enables activation within weeks rather than months."
    },
    {
      question: "What currencies does EPOS support?",
      answer: "EPOS facilitates local currency delivery to bank accounts in most markets worldwide, supporting multi-currency operations and real-time FX conversion."
    },
    {
      question: "Can EPOS handle high transaction volumes?",
      answer: "Yes, EPOS is designed to handle enterprise-scale transaction volumes with robust infrastructure, real-time monitoring, and dedicated support."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={pages.home.title}
        description={pages.home.description}
        keywords={pages.home.keywords}
        url={getFullUrl(pages.home.path)}
        structuredData={getStructuredData("home", getFullUrl(pages.home.path))}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">GLOBAL PAYMENT SOLUTIONS</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tier 1 Payments, FX & Institutional Partnerships.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EPOS specializes in connecting clients with leading banks, asset managers, EMIs, processing houses, and payment gateways to optimize payment workflows, reduce FX costs, and manage currency exposures.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-cyan-500/50">
                  Get Free Consultation
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive payment and financial solutions built on strategic Tier 1 partnerships and a global delivery network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition border border-gray-200">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-cyan-500 font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose EPOS Payments?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer unique advantages that set us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with EPOS in 3 collaborative steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl font-bold text-gray-900 text-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-center mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-2 w-4 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-amber-500 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join businesses worldwide using EPOS for their global payment and financial needs.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-cyan-500/50">
                Get Free Consultation
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
