import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "SEO Melbourne | Technical SEO & Google Rankings for Australian Businesses",
  description: "SEO services for Melbourne and Australian small businesses. Technical SEO audits, Core Web Vitals, structured data, and on-page optimisation. Free SEO audit available.",
  alternates: { canonical: "https://bakhmut.com.au/services/seo" },
  openGraph: {
    title: "SEO Melbourne | Technical SEO & Google Rankings",
    description: "Technical SEO, Core Web Vitals, structured data, and content strategy for Melbourne and Australian businesses. Free audit.",
    url: "https://bakhmut.com.au/services/seo",
    type: "website",
    locale: "en_AU",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "SEO", item: "https://bakhmut.com.au/services/seo" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services Melbourne",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "Country", name: "Australia" },
  ],
  description: "Technical SEO, structured data, Core Web Vitals, and on-page optimisation for Melbourne and Australian businesses.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "AUD", description: "Free initial SEO audit" },
};

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/services/seo" },
        ]}
        accentColor="#10b981"
        eyebrow="SEO Optimisation"
        h1="SEO for Melbourne & Australian Small Businesses"
        tagline="Technical SEO, structured data, and content strategy to get you ranking on Google."
        heroDescription="I offer technical SEO audits, Core Web Vitals optimisation, structured data (schema.org), and on-page content strategy for Melbourne and Australian businesses. Start with a free audit — no obligation, no sales pitch, just real actionable findings for your website."
        features={[
          { title: "Free SEO Audit", description: "A real technical audit of your current site with actionable recommendations. No obligation." },
          { title: "Core Web Vitals", description: "Improve LCP, CLS, and FID scores to rank higher and convert more visitors." },
          { title: "Structured Data", description: "Schema.org markup — LocalBusiness, FAQPage, Service, BreadcrumbList — for rich search results." },
          { title: "On-Page SEO", description: "Title tags, meta descriptions, heading structure, and keyword optimisation." },
          { title: "Technical SEO", description: "Crawlability, indexation, sitemap, robots.txt, canonical tags, and page speed." },
          { title: "Monthly SEO Care", description: "Weekly reports, keyword tracking, and ongoing optimisation from $300/mo." },
        ]}
        process={[
          { step: "1", title: "Free Audit", description: "Submit your website URL. I audit technical SEO, Core Web Vitals, structured data, and content gaps." },
          { step: "2", title: "Strategy", description: "I produce a prioritised action plan with the highest-impact improvements for your Melbourne market." },
          { step: "3", title: "Implementation", description: "I implement fixes directly in your codebase or provide a handover document for your developer." },
          { step: "4", title: "Monthly Care", description: "Optional monthly SEO care plan with weekly keyword rank reports and ongoing improvements." },
        ]}
        faq={[
          { q: "Is the SEO audit really free?", a: "Yes, completely free with no obligation. You will receive a real audit with actionable recommendations." },
          { q: "How long before I see results from SEO?", a: "Technical SEO improvements can show results within weeks for crawling and indexation. Ranking improvements for competitive Melbourne keywords typically take 3-6 months." },
          { q: "Do you do content writing?", a: "I focus on technical SEO and content strategy. For content writing, I can recommend trusted partners or work alongside your content team." },
        ]}
        ctaHref="/#seo-audit"
        ctaLabel="Get My Free SEO Audit"
        relatedLinks={[
          { label: "Web Development Melbourne", href: "/services/web-development/melbourne" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "Melbourne Services", href: "/locations/melbourne" },
        ]}
      />
    </>
  );
}
