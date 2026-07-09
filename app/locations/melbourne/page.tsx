import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Web Developer Melbourne | Local Digital Services for Melbourne Businesses",
  description: "Melbourne-based full-stack web developer and AI automation specialist. Serving Melbourne CBD, Bayside, South-East Melbourne and all of Victoria. Custom websites, AI chatbots, SEO.",
  alternates: { canonical: "https://bakhmut.com.au/locations/melbourne" },
  openGraph: {
    title: "Web Developer Melbourne | Local Digital Services",
    description: "Local web developer based in Cheltenham, Melbourne. Websites, AI automation, and SEO for Melbourne businesses.",
    url: "https://bakhmut.com.au/locations/melbourne",
    type: "website",
    locale: "en_AU",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasyl Bakhmut — Web Developer Melbourne",
  url: "https://bakhmut.com.au",
  telephone: "0425401444",
  email: "bakhmutvas@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cheltenham",
    addressLocality: "Cheltenham",
    addressRegion: "VIC",
    postalCode: "3192",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.9526,
    longitude: 145.0592,
  },
  areaServed: { "@type": "City", name: "Melbourne" },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "Melbourne", item: "https://bakhmut.com.au/locations/melbourne" },
  ],
};

export default function MelbournePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Melbourne", href: "/locations/melbourne" },
        ]}
        accentColor="#06b6d4"
        eyebrow="Melbourne, VIC 3192"
        h1="Web Developer Based in Melbourne, Australia"
        tagline="Local digital services for Melbourne CBD, Bayside, South-East Melbourne, and all of Victoria."
        heroDescription="I'm Vasyl Bakhmut — a full-stack web developer and AI automation specialist based in Cheltenham, Melbourne. I work with local Melbourne businesses to build fast websites, automate repetitive workflows, and improve their Google rankings. In-person meetings available across Melbourne."
        features={[
          { title: "Web Development Melbourne", description: "Custom websites and web apps for Melbourne businesses. From $199." },
          { title: "AI Automation Melbourne", description: "n8n workflows and AI chatbots for Melbourne trade businesses, retailers, and service providers." },
          { title: "SEO Melbourne", description: "Technical SEO and Google rankings for Melbourne local search. Free audit available." },
          { title: "Cloud & DevOps", description: "AWS, Docker, and CI/CD for Melbourne tech businesses and startups." },
          { title: "In-Person Meetings", description: "Available for meetings in Melbourne CBD, Bayside, and South-East Melbourne suburbs." },
          { title: "Fast Response", description: "Melbourne clients get a response within 24 hours and same-timezone collaboration." },
        ]}
        process={[
          { step: "1", title: "Free Consultation", description: "Video call or in-person meeting in Melbourne to discuss your project and goals." },
          { step: "2", title: "Proposal", description: "Clear scope, timeline, and fixed price — no surprises." },
          { step: "3", title: "Build", description: "I build your website, automation, or SEO strategy with regular check-ins." },
          { step: "4", title: "Launch & Support", description: "Go live on schedule with ongoing support options available." },
        ]}
        faq={[
          { q: "Where in Melbourne are you based?", a: "I'm based in Cheltenham, VIC 3192 — in Melbourne's Bayside area. I'm available for in-person meetings across Melbourne CBD and surrounding suburbs." },
          { q: "Do you only work with Melbourne clients?", a: "No. I work with businesses across Melbourne, Sydney, Victoria, and Australia-wide. Melbourne clients benefit from same-timezone support and optional in-person meetings." },
          { q: "What industries do Melbourne clients typically come from?", a: "Trade businesses, real estate, retail, professional services, hospitality, and tech startups are the most common. I've built for all of these." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Contact Me in Melbourne"
        relatedLinks={[
          { label: "Web Development Melbourne", href: "/services/web-development/melbourne" },
          { label: "AI Automation Melbourne", href: "/services/ai-automation/melbourne" },
          { label: "SEO Melbourne", href: "/services/seo" },
          { label: "Sydney", href: "/locations/sydney" },
          { label: "Victoria", href: "/locations/victoria" },
        ]}
      />
    </>
  );
}
