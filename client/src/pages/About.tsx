import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function About() {
  const values = [
    {
      title: "Strategic Connectivity",
      description: "We connect clients with Tier 1 banks, asset managers, FX brokers, EMIs, processing houses, and gateways."
    },
    {
      title: "Institutional Trust",
      description: "Our partners are FCA regulated, connected to the Bank of England via Faster Payments and the ECB for Instant SEPA."
    },
    {
      title: "Currency Coverage",
      description: "Real-time tracking for 40+ collection currencies and 100+ payout currencies keeps enterprises agile."
    },
    {
      title: "Client Advocacy",
      description: "Every engagement starts with listening, documenting requirements, and tailoring the right institutional match."
    },
    {
      title: "Experience",
      description: "Our team brings over 10 years of working alongside fintechs and banks worldwide."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={pages.about.title}
        description={pages.about.description}
        keywords={pages.about.keywords}
        url={getFullUrl(pages.about.path)}
        structuredData={getStructuredData("about", getFullUrl(pages.about.path))}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">ABOUT EPOS</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Ambitious Businesses to Tier 1 Financial Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EPOS specializes in delivering consulting-led payment solutions by aligning clients with prestigious institutions capable of optimizing FX, payments, and treasury workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Simple Solutions for Complex Payment Demands</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EPOS delivers a comprehensive consulting service with a unique approach: we connect clients directly with Tier 1 banks, asset managers, FX brokers, EMIs, processing houses, and payment gateways. The result is a curated, best-fit path to optimizing payment workflows, reducing FX costs, and managing currency exposure.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Acting as a strategic partner for financial institutions, we expand institutional relations and facilitate growth as an external business development force.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EPOS is your one stop for payments: delivering local currency to bank accounts in most markets, keeping funds safe, secure, and segregated through trusted banks such as Barclays, CITI, RBS, DBS, and HSBC. Our partners are UK-based EMIs regulated by the FCA, connected to the Bank of England via Faster Payments, and to the European Central Bank for Instant SEPA, while also enabling SWIFT.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With reliable, real-time tracking across 40 collection currencies and 100 payout currencies, our team applies more than a decade of experience to listen, understand, and deliver the right solution for every business we support.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg h-96 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <div className="text-center text-white space-y-8">
                <div>
                  <p className="text-5xl font-bold mb-1">10+</p>
                  <p className="text-base uppercase tracking-widest">Years of Experience</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold mb-1">40+</p>
                    <p className="text-sm uppercase tracking-widest">Collection Currencies</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">100+</p>
                    <p className="text-sm uppercase tracking-widest">Payout Currencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To empower businesses of all sizes by providing access to comprehensive, compliant, and innovative payment and financial solutions. We believe that every business, regardless of size or industry, deserves access to world-class financial infrastructure and expert guidance.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By connecting our clients with the right partners and solutions, we help them navigate the ever-changing landscape of global finance, reduce operational complexity, and unlock new opportunities for growth and expansion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how EPOS can help your business thrive in the global financial landscape.
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
