import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Terms of Service - EPOS Payments"
        description="Read EPOS Payments' terms of service to understand the terms and conditions for using our services."
        keywords="terms of service, terms and conditions, EPOS terms, service agreement"
        url={getFullUrl("/terms")}
        structuredData={getStructuredData("terms", getFullUrl("/terms"))}
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
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">TERMS OF SERVICE</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Terms of Service</h2>
            <p className="text-gray-600 mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-gray-600 mb-6">
              These terms of service are currently being updated. Please check back soon for our complete terms of service that outline the terms and conditions for using EPOS Payments' services.
            </p>
            <p className="text-gray-600 mb-6">
              If you have any questions about our terms of service, please contact us at{" "}
              <a href="mailto:legal@epos.com" className="text-cyan-500 hover:text-cyan-400">
                legal@epos.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

