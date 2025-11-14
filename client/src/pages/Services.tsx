import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Services() {
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">OUR SERVICES</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Payment & Financial Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our full suite of services designed to meet the diverse needs of businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition border border-cyan-400/30 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Service FAQs</h2>
            <p className="text-xl text-gray-600">
              Common questions about our services.
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
                    className={`text-cyan-500 transition-transform ${
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
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you find the perfect solution for your business.
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
