import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    interest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Encode form data for Netlify
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          interest: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={pages.contact.title}
        description={pages.contact.description}
        keywords={pages.contact.keywords}
        url={getFullUrl(pages.contact.path)}
        structuredData={getStructuredData("contact", getFullUrl(pages.contact.path))}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We can help. Just submit a form and get a free consultation with EPOS to transform your financial challenges into opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-600 mb-2">We're here to provide solutions.</p>
              <a href="mailto:contact@epos.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                contact@epos.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Call Us</h3>
              <p className="text-gray-600 mb-2">Available Mon - Fri, 9am - 6pm GMT.</p>
              <a href="tel:+441234567890" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +44 (0) 20 1234 5678
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Office Location</h3>
              <p className="text-gray-600 mb-2">Our office is located in London.</p>
              <p className="text-cyan-400 font-semibold">
                100 Bishopsgate<br />London, EC2N 4AG
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Reach Out to Us</h2>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden form-name field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field for spam protection */}
              <input type="hidden" name="bot-field" />
              
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or contact us directly at contact@epos.com</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="+44 123 456 7890"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Area of Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select an option</option>
                  <option value="payments">EPOS Payments</option>
                  <option value="connect">EPOS Connect</option>
                  <option value="fx">EPOS FX</option>
                  <option value="cards">EPOS Cards</option>
                  <option value="wealth">EPOS Wealth</option>
                  <option value="hpp">EPOS HPP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold text-lg py-6 shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
