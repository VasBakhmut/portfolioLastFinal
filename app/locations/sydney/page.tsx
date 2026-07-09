import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Web Developer for Sydney Businesses | Remote Digital Services",
  description: "Web development, AI automation, and SEO for Sydney small businesses — delivered remotely from Melbourne. Custom websites from $199, AI chatbots from $99.",
  alternates: { canonical: "https://bakhmut.com.au/locations/sydney" },
  openGraph: {
    title: "Web Developer for Sydney Businesses | Remote Digital Services",
    description: "Custom websites, AI automation, and SEO for Sydney businesses. Remote-friendly, fast delivery, transparent pricing.",
    url: "https://bakhmut.com.au/locations/sydney",
    type: "website",
    locale: "en_AU",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasyl Bakhmut — Web Developer for Sydney",
  url: "https://bakhmut.com.au",
  telephone: "0425401444",
  email: "bakhmutvas@gmail.com",
  areaServed: { "@type": "City", name: "Sydney" },
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
    { "@type": "ListItem", position: 2, name: "Sydney", item: "https://bakhmut.com.au/locations/sydney" },
  ],
};

export default function SydneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sydney", href: "/locations/sydney" },
        ]}
        accentColor="#06b6d4"
        eyebrow="Serving Sydney, NSW"
        h1="Web Development & AI Automation for Sydney Businesses"
        tagline="Remote-friendly digital services for Sydney small businesses — same quality, Melbourne pricing."
        heroDescription="I'm Vasyl Bakhmut, a full-stack web developer based in Melbourne. I work with Sydney businesses fully remotely — delivering websites, AI automation, and SEO with the same responsiveness and quality as a local Sydney developer. All projects run via video call, Slack, and shared staging environments."
        features={[
          { title: "Custom Websites for Sydney", description: "Next.js and React websites optimised for Sydney local search. From $199." },
          { title: "AI Automation", description: "n8n workflows and AI chatbots for Sydney retail, trade, and service businesses. From $99." },
          { title: "Sydney SEO", description: "Technical SEO and on-page strategy to rank your Sydney business on Google." },
          { title: "Remote-First Process", description: "100% online. Video discovery calls, staging link reviews, async feedback — no travel needed." },
          { title: "Same Timezone", description: "AEST/AEDT — same business hours as Sydney. Fast response and same-day communication." },
          { title: "Transparent Pricing", description: "Fixed-price packages with no hidden fees. Prices in AUD." },
        ]}
        process={[
          { step: "1", title: "Video Discovery", description: "30-minute video call to understand your Sydney business, goals, and audience." },
          { step: "2", title: "Proposal", description: "Fixed scope, timeline, and price sent within 24 hours." },
          { step: "3", title: "Build", description: "Regular check-ins via video call or Slack. Staging link shared for review." },
          { step: "4", title: "Launch", description: "Go live on schedule. Ongoing support available via Care plan." },
        ]}
        faq={[
          { q: "Can a Melbourne developer really serve Sydney clients?", a: "Absolutely. Website and automation projects are 100% deliverable online. Same timezone, same communication standards, often faster turnaround than busy Sydney agencies." },
          { q: "Are your prices in AUD?", a: "Yes. All prices are in Australian Dollars (AUD) with no foreign currency conversion." },
          { q: "What Sydney industries do you work with?", a: "Any industry that needs a website, automation, or better Google rankings. Common Sydney clients include hospitality, real estate, professional services, and ecommerce." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Get a Free Quote"
        relatedLinks={[
          { label: "Web Development Sydney", href: "/services/web-development/sydney" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "Melbourne", href: "/locations/melbourne" },
          { label: "Victoria", href: "/locations/victoria" },
        ]}
      />
    </>
  );
}
