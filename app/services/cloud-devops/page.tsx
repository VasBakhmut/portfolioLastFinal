import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Cloud & DevOps Consulting Melbourne | AWS, Docker, CI/CD",
  description: "Cloud infrastructure and DevOps consulting for Australian businesses. AWS setup, Docker containerisation, CI/CD pipelines, and Vercel deployments. From $149.",
  alternates: { canonical: "https://bakhmut.com.au/services/cloud-devops" },
  openGraph: {
    title: "Cloud & DevOps Consulting Melbourne | AWS, Docker, CI/CD",
    description: "AWS, Docker, CI/CD, and Vercel DevOps consulting for Australian businesses. From $149.",
    url: "https://bakhmut.com.au/services/cloud-devops",
    type: "website",
    locale: "en_AU",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
    { "@type": "ListItem", position: 2, name: "Cloud & DevOps", item: "https://bakhmut.com.au/services/cloud-devops" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud & DevOps Consulting",
  provider: { "@type": "Person", name: "Vasyl Bakhmut", url: "https://bakhmut.com.au" },
  areaServed: { "@type": "Country", name: "Australia" },
  description: "AWS setup, Docker containerisation, CI/CD pipelines, and Vercel deployments for Australian businesses.",
  offers: { "@type": "Offer", price: "149", priceCurrency: "AUD" },
};

export default function CloudDevOpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <StaticPageShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
        ]}
        accentColor="#f59e0b"
        eyebrow="Cloud & DevOps"
        h1="Cloud Infrastructure & DevOps for Australian Businesses"
        tagline="Reliable, scalable, and cost-efficient cloud setup — AWS, Docker, CI/CD, and Vercel."
        heroDescription="I help Australian businesses set up and optimise their cloud infrastructure. Whether you need a simple Vercel deployment, a Docker-containerised application, AWS configuration, or a full CI/CD pipeline — I design it for reliability, scalability, and cost-efficiency."
        features={[
          { title: "AWS Setup & Configuration", description: "EC2, S3, RDS, Lambda, CloudFront — configured correctly from the start." },
          { title: "Docker Containerisation", description: "Containerise your application for consistent deployments across environments." },
          { title: "CI/CD Pipelines", description: "GitHub Actions, automated testing, and deployment pipelines for faster, safer releases." },
          { title: "Vercel Deployments", description: "Optimised Next.js and React deployments on Vercel with custom domains and edge caching." },
          { title: "Cost Optimisation", description: "Review your current AWS spend and reduce waste with right-sized resources." },
          { title: "Monitoring & Alerts", description: "CloudWatch, uptime monitoring, and alert setup so you know before your users do." },
        ]}
        process={[
          { step: "1", title: "Infrastructure Audit", description: "Review your current setup, identify bottlenecks, security gaps, and cost inefficiencies." },
          { step: "2", title: "Architecture Design", description: "Propose the right cloud architecture for your scale and budget." },
          { step: "3", title: "Implementation", description: "Set up infrastructure, configure CI/CD, and document everything for your team." },
          { step: "4", title: "Handover", description: "Full documentation and walkthrough. Optional ongoing monitoring retainer available." },
        ]}
        faq={[
          { q: "What cloud providers do you work with?", a: "Primarily AWS and Vercel, but I also work with DigitalOcean, Google Cloud, and self-hosted VPS setups depending on your requirements." },
          { q: "Can you help reduce my current AWS bill?", a: "Yes. A cloud cost audit is one of the most common requests I get. Right-sizing, reserved instances, and removing unused resources can often cut costs by 30-50%." },
          { q: "Do I need DevOps if I am a small business?", a: "Even small sites benefit from a proper deployment pipeline, staging environments, and automated backups. The cost of a setup session pays for itself the first time you avoid a production incident." },
        ]}
        ctaHref="/#contact"
        ctaLabel="Book a Consultation"
        relatedLinks={[
          { label: "Web Development", href: "/services/web-development" },
          { label: "AI Automation", href: "/services/ai-automation" },
          { label: "Melbourne Services", href: "/locations/melbourne" },
        ]}
      />
    </>
  );
}
