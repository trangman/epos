import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pages, getStructuredData, getFullUrl } from "@/lib/seo";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Privacy Policy - EPOS Payments"
        description="Read EPOS Payments' privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, EPOS privacy, GDPR compliance"
        url={getFullUrl("/privacy")}
        structuredData={getStructuredData("privacy", getFullUrl("/privacy"))}
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
            <p className="text-cyan-300 font-semibold mb-4 text-lg tracking-widest">PRIVACY POLICY</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
                <p className="mb-4">
                  EPOS Payments ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
                <p className="mb-4">
                  This policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events (we refer to them collectively in this privacy policy as the "Services").
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us, information we obtain automatically when you use our Services, and information from third-party sources.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Information You Provide to Us</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name, job title, and other contact details</li>
                  <li><strong>Business Information:</strong> Company registration details, business address, tax identification numbers, and financial information</li>
                  <li><strong>Identity Verification:</strong> Government-issued identification documents, proof of address, and other documents required for compliance and verification purposes</li>
                  <li><strong>Payment Information:</strong> Bank account details, payment card information, and transaction history</li>
                  <li><strong>Communication Data:</strong> Records of correspondence, including emails, phone calls, and chat messages</li>
                  <li><strong>Application Data:</strong> Information submitted through forms, surveys, or when requesting our services</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.2 Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you access and use our Services, including pages visited, time spent, and features used</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and mobile network information</li>
                  <li><strong>Location Data:</strong> General location information based on your IP address or device settings</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, web beacons, and similar tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.3 Information from Third Parties</h3>
                <p className="mb-4">
                  We may receive information about you from third-party sources, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Credit bureaus and identity verification services</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Business partners and service providers</li>
                  <li>Public databases and government sources</li>
                  <li>Social media platforms (if you connect your accounts)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our payment processing, FX, card issuance, and other financial services</li>
                  <li><strong>Account Management:</strong> To create and manage your account, process transactions, and handle customer service requests</li>
                  <li><strong>Compliance and Security:</strong> To comply with legal obligations, prevent fraud, conduct anti-money laundering (AML) checks, and ensure security</li>
                  <li><strong>Communication:</strong> To send you service updates, respond to inquiries, and provide customer support</li>
                  <li><strong>Marketing:</strong> To send promotional materials, newsletters, and information about our services (with your consent where required)</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns, improve our Services, and develop new features</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Legal Basis for Processing (GDPR)</h2>
                <p className="mb-4">If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data based on the following legal grounds:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Contract Performance:</strong> To fulfill our contractual obligations to you</li>
                  <li><strong>Legal Obligation:</strong> To comply with legal and regulatory requirements</li>
                  <li><strong>Legitimate Interests:</strong> To operate our business, prevent fraud, and improve our Services</li>
                  <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities</li>
                  <li><strong>Vital Interests:</strong> To protect your or others' vital interests</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Information Sharing and Disclosure</h2>
                <p className="mb-4">We may share your information in the following circumstances:</p>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.1 Service Providers</h3>
                <p className="mb-4">
                  We share information with third-party service providers who perform services on our behalf, such as payment processing, data storage, analytics, customer support, and fraud prevention.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.2 Business Partners</h3>
                <p className="mb-4">
                  We may share information with business partners, including banks, payment networks, and financial institutions, to provide our services.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.3 Legal Requirements</h3>
                <p className="mb-4">
                  We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our users or others.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.4 Business Transfers</h3>
                <p className="mb-4">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.5 With Your Consent</h3>
                <p className="mb-4">
                  We may share your information with third parties when you have provided explicit consent to do so.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Compliance with industry standards, including PCI DSS for payment card data</li>
                </ul>
                <p className="mb-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Your Rights and Choices</h2>
                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and contractual obligations)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  <li><strong>Complaint:</strong> Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@epos.com" className="text-cyan-500 hover:text-cyan-400 underline">
                    privacy@epos.com
                  </a>
                  . We will respond to your request within the timeframes required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to collect and store information about your preferences and usage patterns. Cookies are small data files stored on your device that help us improve your experience on our website.
                </p>
                <p className="mb-4">We use the following types of cookies:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                </ul>
                <p className="mb-4">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. International Data Transfers</h2>
                <p className="mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure that appropriate safeguards are in place to protect your information, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Standard contractual clauses approved by relevant data protection authorities</li>
                  <li>Adequacy decisions by the European Commission or other competent authorities</li>
                  <li>Other legally recognized transfer mechanisms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Data Retention</h2>
                <p className="mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider when determining retention periods include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>The nature and sensitivity of the information</li>
                  <li>Legal and regulatory requirements</li>
                  <li>The purposes for which we process the information</li>
                  <li>Our legitimate business interests</li>
                </ul>
                <p className="mb-4">
                  When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Children's Privacy</h2>
                <p className="mb-4">
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Third-Party Links</h2>
                <p className="mb-4">
                  Our Services may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites or services you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                  <li>Sending you an email notification (if you have provided an email address)</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>
                <p className="mb-4">
                  Your continued use of our Services after such changes constitutes your acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="mb-2"><strong>EPOS Payments</strong></p>
                  <p className="mb-2">Level 39, One Canada Square, Canary Wharf</p>
                  <p className="mb-2">London E14 5AB, United Kingdom</p>
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@epos.com" className="text-cyan-500 hover:text-cyan-400 underline">
                      privacy@epos.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+442012345678" className="text-cyan-500 hover:text-cyan-400 underline">
                      +44 (0) 20 1234 5678
                    </a>
                  </p>
                </div>
                <p className="mb-4">
                  If you are located in the EEA or UK and wish to contact our Data Protection Officer, please email{" "}
                  <a href="mailto:dpo@epos.com" className="text-cyan-500 hover:text-cyan-400 underline">
                    dpo@epos.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

