import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      title: "EPOS Payments",
      description: "One stop for payments, providing comprehensive global payment network. Facilitates local currency delivery to bank accounts in most markets.",
      features: [
        "Local and cross border payment solutions",
        "Multi-currency support with integrated FX",
        "Merchant acquiring for Visa, Mastercard and UnionPay"
      ]
    },
    {
      title: "EPOS Connect",
      description: "Fast-track onboarding system designed to manage customer requirements and risk efficiently with extensive AML compliance.",
      features: [
        "Automated AML/CTF/ATF compliance workflows",
        "Real-time transaction monitoring and risk assessment",
        "End-to-end customer lifecycle management"
      ]
    },
    {
      title: "EPOS FX",
      description: "Multi-currency foreign exchange with physical delivery across markets, providing deep liquidity for instant exchange and delivery.",
      features: [
        "Real-time FX across global markets",
        "OTC trading for tailored currency solutions",
        "Speed, transparency and financial flexibility"
      ]
    },
    {
      title: "EPOS Cards",
      description: "Global issuance of Mastercard and Visa card programs including debit, credit, and prepaid cards in multi-currency options.",
      features: [
        "Global issuance of Visa and Mastercard programs",
        "Multi-currency and single-currency card options",
        "Virtual and physical cards"
      ]
    },
    {
      title: "EPOS Wealth",
      description: "Wealth management services adhering to IOSCO principles, enabling distribution and issuance of securities.",
      features: [
        "Global issuance and distribution of securities",
        "Support for traditional, digital, and tokenized assets",
        "IOSCO compliant framework"
      ]
    },
    {
      title: "EPOS HPP",
      description: "Hosted Payment Page allowing merchants to accept various payment methods with easy integration.",
      features: [
        "Easy integration into existing platforms",
        "Support for card payments, bank wires, and Web3",
        "Seamless transaction experience"
      ]
    }
  ];

  const whyUs = [
    {
      title: "Comprehensive Solutions",
      description: "Access a full suite of payment and financial services designed to meet diverse business needs across industries and geographies."
    },
    {
      title: "Global Reach",
      description: "Our extensive network spans multiple markets and currencies, enabling seamless international transactions and local compliance."
    },
    {
      title: "Advanced Compliance",
      description: "Robust AML/KYC frameworks ensure regulatory compliance and risk management across all jurisdictions and transaction types."
    },
    {
      title: "Expert Support",
      description: "Dedicated team with deep expertise in payments, fintech, and financial services ready to support your business growth."
    },
    {
      title: "Flexible Integration",
      description: "Seamless integration with existing systems and platforms, designed for businesses of all sizes and technical capabilities."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Discuss your payment and financial service requirements with our expert team."
    },
    {
      number: "2",
      title: "Assessment",
      description: "We evaluate your business needs and identify the best EPOS solutions for you."
    },
    {
      number: "3",
      title: "Proposal",
      description: "Receive a tailored proposal with recommended services and implementation timeline."
    },
    {
      number: "4",
      title: "Integration",
      description: "Our team guides you through seamless integration and configuration of selected services."
    },
    {
      number: "5",
      title: "Activation",
      description: "Go live with your payment solutions and begin processing transactions immediately."
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
              Payments, FX & Financial Services. Made Simple.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EPOS provides comprehensive global payment solutions, multi-currency support, and advanced financial services designed to help your business grow and expand internationally.
            </p>
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-cyan-500/50">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive payment and financial solutions designed to meet the diverse needs of modern businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose EPOS?</h2>
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
              Get started with EPOS in 5 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">{step.number}</span>
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
          <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-cyan-500/50">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
