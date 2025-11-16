import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Compliance - EPOS Payments | Regulatory Compliance & Standards"
        description="Learn about EPOS Payments' commitment to regulatory compliance, AML/KYC standards, and adherence to international financial regulations."
        keywords="compliance, regulatory compliance, AML, KYC, financial regulations, EPOS compliance"
        url={getFullUrl("/compliance")}
        structuredData={getStructuredData("compliance", getFullUrl("/compliance"))}
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
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">COMPLIANCE</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Compliance & Regulatory Standards
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EPOS Payments maintains the highest standards of regulatory compliance across all jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment to Compliance</h2>
            <p className="text-gray-600 mb-6">
              EPOS Payments is committed to maintaining the highest standards of regulatory compliance and adhering to international financial regulations. We operate in accordance with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Anti-Money Laundering (AML) regulations</li>
              <li>Know Your Customer (KYC) requirements</li>
              <li>FATF (Financial Action Task Force) standards</li>
              <li>Local regulatory requirements across all supported markets</li>
              <li>Data protection and privacy regulations (GDPR, etc.)</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Our compliance framework is continuously updated to reflect changes in regulatory requirements and industry best practices.
            </p>
            <p className="text-gray-600 mb-6">
              For more information about our compliance practices, please contact us at{" "}
              <a href="mailto:compliance@epos.com" className="text-cyan-500 hover:text-cyan-400">
                compliance@epos.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

