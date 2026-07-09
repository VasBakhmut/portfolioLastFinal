import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Web Developer Sydney | Custom Websites & Next.js Development",
  description: "Sydney-based web development services from a Melbourne-based full-stack developer. Fast, SEO-optimised Next.js websites for Sydney small businesses. From $199.",
  alternates: { canonical: "https://bakhmut.com.au/services/web-development/sydney" },
  openGraph: {
    title: "Web Developer Sydney | Custom Websites & Next.js Development",
    description: "Custom websites for Sydney businesses built with Next.js and React. Remote-friendly, fast delivery, transparent pricing.",
    url: "https://bakhmut.com.au/services/web-development/sydney",
    type: "website",
    locale: "en_AU",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "Web Development", item: "https://bakhmut.com.au/services/web-development" },
    { "@type": "ListItem", position: 3, name: "Sydney", item: "https://bakhmut.com.au/services/web-development/sydney" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Sydney",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: { "@type": "City", name: "Sydney" },
  description: "Custom website design and development for Sydney small businesses using Next.js, React, and TypeScript.",
  offers: { "@type": "Offer", price: "199", priceCurrency: "AUD" },
};

export default function WebDevSydneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Sydney", href: "/services/web-development/sydney" },
        ]}
        accentColor="#06b6d4"
        eyebrow="Web Development · Sydney"
        h1="Web Developer for Sydney Businesses — Remote & Fast"
        tagline="Custom websites for Sydney small businesses, built with Next.js and React."
        heroDescription="I work remotely with Sydney businesses to deliver fast, SEO-optimised websites using modern technologies. All collaboration happens online — video calls, Slack, and shared design reviews. Same quality as hiring a local Sydney web developer, with Melbourne pricing."
        features={[
          { title: "Next.js & React", description: "Server-rendered pages for maximum speed and SEO performance in Sydney search results." },
          { title: "Mobile-First Design", description: "Every site is designed for mobile first and scales up to desktop." },
          { title: "Sydney SEO", description: "On-page SEO optimised for Sydney local search — structured data, keywords, and fast load times." },
          { title: "Remote-Friendly Process", description: "100% online collaboration. Video calls, shared staging links, and async feedback." },
          { title: "Transparent Pricing", description: "Landing page from $199, business website from $299. No hidden fees." },
          { title: "Ongoing Support", description: "Care plans from $29/mo for hosting, backups, and minor edits." },
        ]}
        process={[
          { step: "1", title: "Discovery Call", description: "30-minute video call to understand your Sydney business, goals, and audience." },
          { step: "2", title: "Design & Content", description: "Site structure and content strategy tailored to your Sydney market." },
          { step: "3", title: "Development", description: "Clean, custom code with React and Next.js — no page builders." },
          { step: "4", title: "Launch & Support", description: "Site goes live on your domain. Ongoing support available via Care plan." },
        ]}
        faq={[
          { q: "Do I need to be in Melbourne to work with you?", a: "No. I work with Sydney clients (and anyone across Australia) fully remotely — all communication and reviews happen online." },
          { q: "How is working with a Melbourne web developer different from a Sydney one?", a: "There is no practical difference for a website project. All collaboration happens online via video calls and shared staging environments." },
          { q: "What is the turnaround time for a Sydney business website?", a: "Landing pages are typically live within 7 days. Business sites take 2-3 weeks." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Get a Free Quote"
        relatedLinks={[
          { label: "Web Development Melbourne", href: "/services/web-development/melbourne" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "SEO", href: "/services/seo" },
          { label: "Sydney Services", href: "/locations/sydney" },
        ]}
      />
    </>
  );
}
