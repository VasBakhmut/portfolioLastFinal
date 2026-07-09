import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Web Developer Victoria | Digital Services Across VIC",
  description: "Web development, AI automation, and SEO for businesses across Victoria — Melbourne, Geelong, Ballarat, Bendigo, Shepparton, and regional VIC. From $199.",
  alternates: { canonical: "https://bakhmut.com.au/locations/victoria" },
  openGraph: {
    title: "Web Developer Victoria | Digital Services Across VIC",
    description: "Custom websites, AI automation, and SEO for Victorian businesses. Melbourne-based, serving all of VIC.",
    url: "https://bakhmut.com.au/locations/victoria",
    type: "website",
    locale: "en_AU",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasyl Bakhmut — Web Developer Victoria",
  url: "https://bakhmut.com.au",
  telephone: "0425401444",
  email: "bakhmutvas@gmail.com",
  areaServed: { "@type": "State", name: "Victoria" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cheltenham",
    addressRegion: "VIC",
    postalCode: "3192",
    addressCountry: "AU",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "Victoria", item: "https://bakhmut.com.au/locations/victoria" },
  ],
};

export default function VictoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Victoria", href: "/locations/victoria" },
        ]}
        accentColor="#10b981"
        eyebrow="Serving Victoria, Australia"
        h1="Web Developer Serving All of Victoria"
        tagline="Digital services for Victorian businesses — from Melbourne to Geelong, Ballarat, Bendigo, and regional VIC."
        heroDescription="Based in Cheltenham, Melbourne, I provide web development, AI automation, and SEO services to businesses across Victoria. Whether you're in inner Melbourne, the Mornington Peninsula, Geelong, or rural Victoria — I work remotely and deliver online. Regional Victorian businesses get the same quality as metropolitan clients."
        features={[
          { title: "Statewide Coverage", description: "Serving Melbourne, Geelong, Ballarat, Bendigo, Shepparton, Warrnambool, and all of regional Victoria." },
          { title: "Web Development VIC", description: "Custom websites for Victorian businesses. From $199." },
          { title: "AI Automation Victoria", description: "n8n workflows and AI chatbots for Victorian trade, retail, and agricultural businesses." },
          { title: "SEO Victoria", description: "Google rankings for Victorian local search — suburb and city level." },
          { title: "Remote-First", description: "All projects delivered online. No geographic limitations within Victoria." },
          { title: "Local Business Support", description: "Supporting Victorian small businesses with practical, affordable digital solutions." },
        ]}
        process={[
          { step: "1", title: "Free Consultation", description: "Video call to discuss your Victorian business, goals, and digital needs." },
          { step: "2", title: "Proposal", description: "Clear scope, timeline, and fixed pricing in AUD." },
          { step: "3", title: "Build", description: "Regular updates and staging previews throughout the project." },
          { step: "4", title: "Launch & Support", description: "Go live with confidence. Ongoing support via Care plans from $29/mo." },
        ]}
        faq={[
          { q: "Do you serve regional Victoria?", a: "Yes. I work fully remotely so geography within Victoria makes no difference to quality or service. Geelong, Ballarat, Bendigo, Shepparton, and other regional centres are all served." },
          { q: "Is there a travel cost for in-person meetings in Victoria?", a: "In-person meetings in Melbourne and nearby suburbs are included at no extra cost. For regional Victoria, I typically recommend video calls for convenience — though travel can be arranged for larger projects." },
          { q: "Are your prices different for regional Victorian clients?", a: "No. All pricing is the same regardless of location within Victoria or Australia." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Get in Touch"
        relatedLinks={[
          { label: "Melbourne", href: "/locations/melbourne" },
          { label: "Sydney", href: "/locations/sydney" },
          { label: "Web Development Melbourne", href: "/services/web-development/melbourne" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "SEO", href: "/services/seo" },
        ]}
      />
    </>
  );
}
