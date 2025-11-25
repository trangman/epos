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
              Please read these statements carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Disclaimer</h2>
            <p className="text-gray-600 mb-6 font-semibold uppercase">
              No investment, trading, or financial advice provided.
            </p>
            <p className="text-gray-600 mb-6">
              None of the data on this site is intended as investment, trading, or financial advice of any kind and is purely informative. The data and content published here should not be regarded as accurate real-time market values, and EPOS Payments accepts no liability for losses incurred by relying on any information contained on this website.
            </p>
            <p className="text-gray-600 mb-6">
              Any opinions, phone calls, WhatsApp chats, emails, messages, news, research, analysis, prices, or other information contained on this website are provided as general market information for educational and entertainment purposes only. They do not constitute investment, trading, or financial advice and therefore are not regulated by any banks. This website should not be considered a substitute for independent market research before making trading, investment, or financial decisions.
            </p>
            <p className="text-gray-600 mb-6">
              EPOS Payments (operating with the digital brand "EPOS") does not provide personalized investment, trading, or financial advice and never provides personalized recommendations of any sort. EPOS Payments does not provide ratings on financial instruments nor personalized financial advice. Opinions, market data, recommendations, or other informative content posted on www.epospayments.com are subject to change at any time without notice.
            </p>
            <p className="text-gray-600 mb-6">
              EPOS Payments accepts no liability for any loss or damage, including without limitation any loss of profit, which may arise directly or indirectly from the use of or reliance on our posted content or email newsletter. Comments made by any person involved in or affiliated with the company, including directors, are their personal opinions and should be treated as such.
            </p>
            <p className="text-gray-600">
              Always seek appropriate investment, trading, or financial advice from licensed professionals. For specific legal questions, contact{" "}
              <a href="mailto:legal@epos.com" className="text-cyan-500 hover:text-cyan-400">
                legal@epos.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

