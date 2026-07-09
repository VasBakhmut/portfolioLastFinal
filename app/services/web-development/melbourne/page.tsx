import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Web Developer Melbourne | Custom Websites & Next.js Development",
  description: "Looking for a web developer in Melbourne? Vasyl Bakhmut builds fast, SEO-optimised websites with Next.js and React for Melbourne small businesses. From $199.",
  alternates: { canonical: "https://bakhmut.com.au/services/web-development/melbourne" },
  openGraph: {
    title: "Web Developer Melbourne | Custom Websites & Next.js Development",
    description: "Fast, accessible, SEO-optimised websites for Melbourne businesses. Built with Next.js, React, TypeScript. From $199.",
    url: "https://bakhmut.com.au/services/web-development/melbourne",
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
    { "@type": "ListItem", position: 3, name: "Melbourne", item: "https://bakhmut.com.au/services/web-development/melbourne" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Melbourne",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: { "@type": "City", name: "Melbourne" },
  description: "Custom website design and development for Melbourne small businesses using Next.js, React, and TypeScript.",
  offers: { "@type": "Offer", price: "199", priceCurrency: "AUD" },
};

export default function WebDevMelbournePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Melbourne", href: "/services/web-development/melbourne" },
        ]}
        accentColor="#06b6d4"
        eyebrow="Web Development · Melbourne"
        h1="Web Developer in Melbourne — Fast, Modern Websites"
        tagline="Custom websites for Melbourne small businesses, built with Next.js and React."
        heroDescription="Based in Cheltenham, Melbourne, I build responsive, accessible, and SEO-optimised websites for local businesses across Melbourne CBD, Bayside, South-East Melbourne, and beyond. Every project is custom-coded — no page builders, no bloat."
        features={[
          { title: "Next.js & React", description: "Server-rendered pages for maximum speed and SEO performance." },
          { title: "Mobile-First Design", description: "Every site is designed for mobile first and scales up to desktop." },
          { title: "Melbourne SEO", description: "On-page SEO, structured data, and Core Web Vitals optimised from day one." },
          { title: "Fast Delivery", description: "Landing pages live in 7 days. Business sites in 2-3 weeks." },
          { title: "Transparent Pricing", description: "Landing page from $199, business website from $299. No hidden fees." },
          { title: "Ongoing Support", description: "Care plans from $29/mo for hosting, backups, and minor edits." },
        ]}
        process={[
          { step: "1", title: "Discovery Call", description: "30-minute call to understand your business, goals, and target audience in Melbourne." },
          { step: "2", title: "Design & Content", description: "I design the site structure and content strategy tailored to your local Melbourne market." },
          { step: "3", title: "Development", description: "Clean, custom code with React and Next.js. No WordPress, no page builders." },
          { step: "4", title: "Launch & Support", description: "Site goes live on your domain. Ongoing support available via a Care plan." },
        ]}
        faq={[
          { q: "Do you build websites for Melbourne businesses only?", a: "I'm based in Melbourne and many of my clients are local, but I work with businesses across Australia and remotely worldwide." },
          { q: "What's included in the $199 landing page?", a: "Design, development, mobile responsiveness, contact form, basic SEO setup, and deployment. Domain and hosting are separate." },
          { q: "Can I see examples of your work?", a: "Yes - visit the Projects section on my homepage or contact me to see case studies relevant to your industry." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Get a Free Quote"
        relatedLinks={[
          { label: "Web Development Sydney", href: "/services/web-development/sydney" },
          { label: "SEO Melbourne", href: "/services/seo" },
          { label: "AI Automation Melbourne", href: "/services/ai-automation/melbourne" },
          { label: "Locations", href: "/locations/melbourne" },
        ]}
      />
    </>
  );
}
