import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
}

export default function SEO({
  title = "EPOS Payments - Global Payment Solutions",
  description = "EPOS provides comprehensive global payment solutions, multi-currency support, and advanced financial services. Get merchant acquiring, FX, cards, and wealth management services.",
  keywords = "payment solutions, global payments, merchant acquiring, foreign exchange, FX, payment processing, financial services, multi-currency, EPOS",
  image = "/favicon.png",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
  siteName = "EPOS Payments",
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "EPOS Payments");
    updateMetaTag("theme-color", "#0f172a"); // Match site theme

    // Open Graph tags - ensure absolute URLs
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const ogImage = image.startsWith("http") ? image : `${origin}${image}`;
    const ogUrl = url.startsWith("http") ? url : `${origin}${url}`;
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("og:url", ogUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:site_name", siteName, "property");
    updateMetaTag("og:locale", "en_US", "property");

    // Twitter Card tags - ensure absolute URLs
    const twitterImage = image.startsWith("http") ? image : `${origin}${image}`;
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", twitterImage);

    // Canonical URL - ensure absolute URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    // Ensure canonical URL is absolute
    const canonicalUrl = url.startsWith("http") ? url : `${origin}${url}`;
    canonical.setAttribute("href", canonicalUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, type, siteName, structuredData]);

  return null;
}

