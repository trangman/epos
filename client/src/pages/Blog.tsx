import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Blog - EPOS Payments | Payment Solutions News & Insights"
        description="Stay updated with the latest news, insights, and updates from EPOS Payments about payment solutions, financial services, and industry trends."
        keywords="EPOS blog, payment solutions news, financial services insights, payment industry updates"
        url={getFullUrl("/blog")}
        structuredData={getStructuredData("blog", getFullUrl("/blog"))}
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
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">BLOG</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest news, insights, and updates from EPOS Payments.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Coming Soon</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're working on bringing you valuable insights, industry news, and updates about payment solutions and financial services. Check back soon for our latest articles.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

