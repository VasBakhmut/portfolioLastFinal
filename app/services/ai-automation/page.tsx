import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "AI Automation & Chatbots | n8n Workflow Automation Australia",
  description: "AI chatbots and n8n workflow automation for Australian small businesses. Save 10+ hours a week with custom AI integrations — CRM, email, calendar, and more. From $99.",
  alternates: { canonical: "https://bakhmut.com.au/services/ai-automation" },
  openGraph: {
    title: "AI Automation & Chatbots | n8n Workflow Automation Australia",
    description: "Custom AI chatbots and n8n workflow automation for Australian small businesses. From $99.",
    url: "https://bakhmut.com.au/services/ai-automation",
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
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation & Chatbots Australia",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: { "@type": "Country", name: "Australia" },
  description: "Custom AI chatbots and n8n workflow automation for Australian small businesses.",
  offers: { "@type": "Offer", price: "99", priceCurrency: "AUD" },
};

export default function AiAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "AI Automation", href: "/services/ai-automation" },
        ]}
        accentColor="#8b5cf6"
        eyebrow="AI & Automation"
        h1="AI Chatbots & n8n Automation for Australian Businesses"
        tagline="Save 10+ hours a week with custom AI workflows and chatbots."
        heroDescription="I build custom AI assistants, n8n automation workflows, CRM integrations, and intelligent tools for Australian small businesses. Whether you need a chatbot for your website, automated follow-ups, or a multi-step workflow connecting your existing tools — I scope it, build it, and hand it over."
        features={[
          { title: "AI Chatbots", description: "Custom chatbots trained on your business data — for support, lead capture, or bookings." },
          { title: "n8n Workflow Automation", description: "Connect your CRM, email, calendar, and other tools into automated workflows that run 24/7." },
          { title: "CRM Integration", description: "Automatically log leads, send follow-ups, and update records without lifting a finger." },
          { title: "Email Automation", description: "Drip sequences, triggered emails, and smart follow-ups based on user behaviour." },
          { title: "Calendar & Booking", description: "Automated scheduling, reminders, and calendar sync across your team." },
          { title: "Custom AI Tools", description: "Bespoke AI-powered tools tailored to your specific business workflow." },
        ]}
        process={[
          { step: "1", title: "Discovery", description: "We map out your current manual processes and identify the highest-value automation opportunities." },
          { step: "2", title: "Design", description: "I design the workflow architecture and select the right tools (n8n, OpenAI, Zapier alternatives)." },
          { step: "3", title: "Build & Test", description: "Workflow is built, tested with real data, and refined until it runs reliably." },
          { step: "4", title: "Handover", description: "You receive full documentation and a walkthrough so you can manage it yourself — or I handle it on a retainer." },
        ]}
        faq={[
          { q: "What is n8n automation?", a: "n8n is an open-source workflow automation tool that connects your business apps (CRM, email, Slack, Google Sheets, etc.) without needing to code. I build and host n8n workflows for you." },
          { q: "How much does AI automation cost?", a: "A starter chatbot or simple workflow starts at $99. More complex multi-step automations with CRM and email integrations start at $349. Custom enterprise workflows are scoped on a call." },
          { q: "Do I need technical knowledge to use the automation?", a: "No. I build workflows that run invisibly in the background. I also provide documentation and a walkthrough so you understand what's happening." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Book a Free Consultation"
        relatedLinks={[
          { label: "AI Automation Melbourne", href: "/services/ai-automation/melbourne" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "SEO", href: "/services/seo" },
        ]}
      />
    </>
  );
}
