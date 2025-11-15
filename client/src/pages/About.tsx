import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge payment and financial solutions."
    },
    {
      title: "Reliability",
      description: "Our infrastructure is built on Tier 1 banking partnerships ensuring maximum uptime and security."
    },
    {
      title: "Compliance",
      description: "We maintain the highest standards of regulatory compliance across all jurisdictions."
    },
    {
      title: "Partnership",
      description: "We view our clients as partners, committed to their long-term success and growth."
    },
    {
      title: "Expertise",
      description: "Our team brings decades of combined experience in payments and financial services."
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
              About
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EPOS is an independent financial services provider specializing in comprehensive payment solutions, foreign exchange, and financial services. Our goal is to make the world of finance and payments more accessible to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Simple Solutions for Complex Problems</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With our extensive network of banks, EMIs, payment gateways, and other financial institutions, we can provide you with easy access to banking services, local payment solutions, and business finance options. These resources are designed to help your business thrive and expand on an international scale.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Originally established to provide innovative payment solutions, we have since expanded our reach to create a global network of diverse and trusted partners. This expansion allows us to serve clients from virtually any industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our experience enables us to navigate complex jurisdictional areas and deliver effective solutions. Choose EPOS for simplified solutions to complex financial needs. Let us help you achieve your business goals and unlock new opportunities for success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg h-96 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <div className="text-center text-white">
                <p className="text-6xl font-bold mb-2">10+</p>
                <p className="text-xl">Years of Experience</p>
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
          <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-cyan-500/50">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
