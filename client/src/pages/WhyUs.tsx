import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function WhyUs() {
  const benefits = [
    {
      title: "Tier 1 Access",
      description: "Leverage curated introductions to Tier 1 banks, asset managers, FX brokers, EMIs, and gateways that align with your risk profile."
    },
    {
      title: "Institutional Partnerships",
      description: "We act as an external business development arm for financial institutions, deepening trusted relationships on your behalf."
    },
    {
      title: "Regulated Infrastructure",
      description: "Engage FCA-regulated partners connected to the Bank of England via Faster Payments and the ECB for Instant SEPA, with SWIFT reach."
    },
    {
      title: "Global Currency Delivery",
      description: "Collect funds in 40+ currencies and pay out in 100+ currencies with real-time tracking via our partners' global networks."
    },
    {
      title: "Specialist Guidance",
      description: "Our consultants bring over a decade of experience in FX, payments, and fintech, tailoring solutions through structured discovery."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Qualification",
      description: "We listen to each client's demands and standardize requirements with a detailed questionnaire."
    },
    {
      number: "2",
      title: "Introduction",
      description: "We arrange introductions to the institutions whose acceptance criteria, appetite, and capabilities best match your profile."
    },
    {
      number: "3",
      title: "Continued Assistance",
      description: "We stay engaged to ensure you secure the right mix of solutions and remain supported as your business evolves."
    }
  ];

  const testimonials = [
    {
      quote: "EPOS transformed our payment infrastructure and enabled us to expand into new markets.",
      company: "FinTech Startup",
      role: "CEO"
    },
    {
      quote: "The compliance support and regulatory expertise were invaluable to our business.",
      company: "Payment Service Provider",
      role: "Compliance Officer"
    },
    {
      quote: "Integration was seamless and their support team was exceptional throughout.",
      company: "E-commerce Platform",
      role: "Technical Director"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={pages["why-us"].title}
        description={pages["why-us"].description}
        keywords={pages["why-us"].keywords}
        url={getFullUrl(pages["why-us"].path)}
        structuredData={getStructuredData("why-us", getFullUrl(pages["why-us"].path))}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">WHY CHOOSE EPOS</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Tier 1 Payment, FX, and Compliance Relationships
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We deliver the EPOS approach outlined for 2025—listening first, qualifying every requirement, and introducing you to partners that can execute.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Benefits of Working with EPOS</h2>
            <p className="text-xl text-gray-600">
              Our strategic partnerships enable you to access comprehensive global financial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Your Journey With Us</h2>
            <p className="text-xl text-gray-600">
              A simple process to onboard and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg w-full p-6 mb-4 shadow-lg shadow-cyan-500/30">
                  <span className="text-black font-bold text-3xl">{step.number}</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from businesses that have transformed with EPOS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
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
