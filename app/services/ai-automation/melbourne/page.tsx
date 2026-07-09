import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "AI Automation Melbourne | n8n Workflows & AI Chatbots for Local Businesses",
  description: "Melbourne AI automation specialist. Custom n8n workflows, AI chatbots, and business automation for Melbourne small businesses. Save hours of manual work every week. From $99.",
  alternates: { canonical: "https://bakhmut.com.au/services/ai-automation/melbourne" },
  openGraph: {
    title: "AI Automation Melbourne | n8n Workflows & AI Chatbots",
    description: "Melbourne AI automation specialist. Custom n8n workflows and AI chatbots for Melbourne small businesses. From $99.",
    url: "https://bakhmut.com.au/services/ai-automation/melbourne",
    type: "website",
    locale: "en_AU",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "AI Automation", item: "https://bakhmut.com.au/services/ai-automation" },
    { "@type": "ListItem", position: 3, name: "Melbourne", item: "https://bakhmut.com.au/services/ai-automation/melbourne" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Melbourne",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: { "@type": "City", name: "Melbourne" },
  description: "n8n workflow automation and AI chatbots for Melbourne small businesses.",
  offers: { "@type": "Offer", price: "99", priceCurrency: "AUD" },
};

export default function AiAutomationMelbournePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "Melbourne", href: "/services/ai-automation/melbourne" },
        ]}
        accentColor="#8b5cf6"
        eyebrow="AI Automation · Melbourne"
        h1="AI Automation Specialist in Melbourne"
        tagline="n8n workflows, AI chatbots, and business automation for Melbourne small businesses."
        heroDescription="Based in Cheltenham, Melbourne, I help local businesses automate repetitive tasks using n8n, OpenAI, and custom integrations. Whether you run a trade business, a retail store, or a professional service — I can map your manual processes and replace them with reliable automated workflows that run 24/7."
        features={[
          { title: "Melbourne Business Focus", description: "I understand the local Melbourne market and build automations that fit how Australian businesses actually operate." },
          { title: "n8n Automation", description: "Open-source, self-hosted or cloud. Connect any tool your business already uses." },
          { title: "AI Chatbots", description: "Train an AI assistant on your business data for support, lead capture, or appointment booking." },
          { title: "CRM & Email", description: "Automatically update your CRM, send follow-ups, and manage leads without manual data entry." },
          { title: "Fast Implementation", description: "Most starter automations are live within a week." },
          { title: "From $99", description: "Starter chatbot from $99. Multi-step workflow integrations from $349." },
        ]}
        process={[
          { step: "1", title: "Automation Audit", description: "I review your current processes to find the highest-value automation opportunities for your Melbourne business." },
          { step: "2", title: "Workflow Design", description: "Map the trigger, actions, and conditions for each automated workflow." },
          { step: "3", title: "Build & Test", description: "Build in n8n (or compatible platform), test with real Melbourne business data." },
          { step: "4", title: "Handover & Docs", description: "Full walkthrough and documentation so you are in control." },
        ]}
        faq={[
          { q: "What Melbourne businesses benefit most from AI automation?", a: "Trade businesses, real estate agents, clinics, retail stores, and professional services typically save the most time — anything with repetitive admin, follow-ups, or scheduling." },
          { q: "Do you offer in-person meetings in Melbourne?", a: "Yes, I'm based in Cheltenham and available for in-person meetings in Melbourne. Most clients prefer video calls for convenience." },
          { q: "How quickly can you build an automation?", a: "A starter chatbot or simple n8n workflow is typically delivered within 5-7 business days after discovery." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Book a Free Consultation"
        relatedLinks={[
          { label: "AI Automation (All Australia)", href: "/services/ai-automation" },
          { label: "Web Development Melbourne", href: "/services/web-development/melbourne" },
          { label: "Melbourne Services", href: "/locations/melbourne" },
        ]}
      />
    </>
  );
}
