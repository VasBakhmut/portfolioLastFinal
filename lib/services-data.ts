export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaDescription: string;
  color: string;
  heroDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  process: ServiceStep[];
  faq: ServiceFaq[];
  relatedProducts: string[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development Services Melbourne",
    shortTitle: "Web Development",
    tagline: "Fast, modern websites built with React & Next.js",
    metaDescription: "Professional web development services in Melbourne. Custom React and Next.js websites that are fast, accessible, and built to convert visitors into customers.",
    color: "#06b6d4",
    heroDescription: "I build fast, accessible, SEO-optimised websites and web applications for Melbourne businesses. From a sleek landing page to a full-featured web app, every project is crafted with React, Next.js, and TypeScript — and designed to turn visitors into paying customers.",
    features: [
      { title: "React & Next.js Development", description: "Modern, component-based architecture built on the most popular frameworks in the industry. Fast by default, scalable by design." },
      { title: "Mobile-First Responsive Design", description: "Your site looks and works perfectly on every device — phone, tablet, and desktop. Tested across major browsers." },
      { title: "Performance Optimisation", description: "95+ Lighthouse scores, image optimisation, lazy loading, and Core Web Vitals compliance so Google ranks you higher." },
      { title: "SEO-Ready Structure", description: "Semantic HTML, meta tags, Open Graph, structured data, and canonical URLs built in from day one — not bolted on later." },
      { title: "Contact Forms & Integrations", description: "EmailJS, Mailchimp, HubSpot, or custom API integrations — your leads land where you need them." },
      { title: "Deployment & Hosting Setup", description: "Deployed to Vercel, Netlify, or AWS with CI/CD pipelines so updates go live automatically on every push." },
    ],
    benefits: [
      "Delivered in 1–3 weeks depending on scope",
      "Clean code you or any developer can maintain",
      "Free 30-day bug-fix period after launch",
      "Melbourne-based, available for calls AEST",
    ],
    process: [
      { step: 1, title: "Discovery Call", description: "30-minute call to understand your business goals, target audience, and what success looks like for this project." },
      { step: 2, title: "Design & Wireframes", description: "I create wireframes and a design mockup based on your brand. You approve before a single line of code is written." },
      { step: 3, title: "Development", description: "I build the site in React & Next.js with weekly check-ins. You can see progress on a live preview URL throughout." },
      { step: 4, title: "Review & Revisions", description: "You test the site and submit feedback. I implement changes until you are happy." },
      { step: 5, title: "Launch", description: "Deployed to your domain with SSL, analytics, and a final performance audit. Your business goes live." },
    ],
    faq: [
      { q: "How long does a website take to build?", a: "A landing page takes 5–7 days. A 5-page business website takes 2–3 weeks. Larger apps are scoped individually." },
      { q: "Do I need to provide the content?", a: "Yes — you provide text, logos, and any photos. I can suggest a structure and help polish copy, but you know your business best." },
      { q: "Will I be able to update the site myself?", a: "Absolutely. I can integrate a headless CMS (like Sanity or Contentful) so you can edit content without touching code." },
      { q: "Do you work with businesses outside Melbourne?", a: "Yes. All collaboration happens via Notion, Figma, and Zoom. I have delivered projects for clients across Australia and internationally." },
    ],
    relatedProducts: ["landing-page", "business-website"],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbot & Automation Services Melbourne",
    shortTitle: "AI Chatbots & Automation",
    tagline: "Custom AI assistants and workflow automation for your business",
    metaDescription: "AI chatbot development and business automation services in Melbourne. Save hours of repetitive work with custom AI assistants, n8n workflows, and CRM integrations.",
    color: "#8b5cf6",
    heroDescription: "I build custom AI assistants and automation workflows that handle the repetitive tasks your team shouldn't be doing manually. From an AI chatbot that answers customer questions 24/7 to n8n pipelines that connect your entire toolstack — I build it, configure it, and hand it over ready to run.",
    features: [
      { title: "Custom AI Chatbots", description: "GPT-4 or Gemini-powered chatbots trained on your business data — FAQs, product catalogue, policies — embedded on your website or in Slack." },
      { title: "n8n Workflow Automation", description: "Connect your CRM, email platform, invoicing tool, and calendar. Automate lead follow-up, onboarding sequences, and reporting." },
      { title: "CRM Integrations", description: "HubSpot, Salesforce, Notion, Airtable — I wire up your existing tools so data flows automatically between systems." },
      { title: "Telegram & Slack Bots", description: "Internal bots for your team: daily summaries, alert routing, ticket creation, or anything repetitive that currently requires manual effort." },
      { title: "RAG Pipelines", description: "Retrieval-Augmented Generation so your AI answers questions using your own documents, not hallucinated information." },
      { title: "Maintenance & Monitoring", description: "Monthly retainer options available. I monitor your automations, update prompts as your business changes, and fix anything that breaks." },
    ],
    benefits: [
      "Save 5–20 hours of manual work per week",
      "Available 24/7 — no sick days, no holidays",
      "Responses trained specifically on your business",
      "Scales with your customer base at no extra cost",
    ],
    process: [
      { step: 1, title: "Audit Your Current Workflows", description: "We map out which tasks take the most time and identify the highest-ROI automations to build first." },
      { step: 2, title: "Data Preparation", description: "I collect and structure your FAQs, policies, product data, and knowledge base into a format the AI can use reliably." },
      { step: 3, title: "Build & Test", description: "I build the chatbot or automation, test it thoroughly with edge cases, and fine-tune the responses." },
      { step: 4, title: "Integration", description: "Embedded on your website, connected to your CRM, or deployed to Slack/Telegram — wherever your team or customers are." },
      { step: 5, title: "Handover & Training", description: "I walk you through exactly how everything works and provide documentation so you can manage it confidently." },
    ],
    faq: [
      { q: "Do I need a technical background to manage the chatbot?", a: "No. I build an admin interface so you can update FAQs and responses through a simple dashboard. No coding required." },
      { q: "Which AI models do you use?", a: "GPT-4o, Gemini 1.5 Pro, and Claude 3.5 Sonnet depending on your use case and budget. I recommend the best fit for your needs." },
      { q: "How accurate are AI chatbot answers?", a: "With RAG and a well-curated knowledge base, accuracy is very high for in-scope questions. The bot gracefully escalates anything it cannot answer to a human." },
      { q: "What if my business processes change?", a: "I offer monthly maintenance retainers. You send me the changes and I update the prompts and workflows — usually within 48 hours." },
    ],
    relatedProducts: ["ai-chatbot"],
  },
  {
    slug: "seo",
    title: "SEO Services Melbourne | Technical SEO & Strategy",
    shortTitle: "SEO Optimisation",
    tagline: "Get found on Google — technical SEO for Melbourne businesses",
    metaDescription: "Technical SEO and strategy services in Melbourne. Audits, Core Web Vitals, structured data, and on-page optimisation to rank higher and attract more customers.",
    color: "#10b981",
    heroDescription: "I help Melbourne businesses rank higher on Google through technical SEO audits, Core Web Vitals improvements, structured data, and on-page strategy. Whether your site is brand new or has been live for years, I find exactly what is holding you back and fix it.",
    features: [
      { title: "Full Technical SEO Audit", description: "Crawl-based audit covering indexability, canonicals, internal linking, crawl budget, page speed, and mobile usability — with a prioritised fix list." },
      { title: "Core Web Vitals Optimisation", description: "LCP, CLS, and INP improvements that directly affect your Google ranking and user experience. Often a 30-50% performance boost." },
      { title: "Structured Data & Schema", description: "LocalBusiness, Service, FAQ, Review, and Product schema so Google displays rich snippets for your pages." },
      { title: "On-Page SEO Strategy", description: "Keyword targeting, title tag and meta description writing, heading structure, and internal link optimisation — done properly, not with a plugin." },
      { title: "Local SEO for Melbourne", description: "Google Business Profile optimisation, local citations, and geo-targeted content to dominate Melbourne suburb searches." },
      { title: "Competitor Analysis", description: "I analyse your top 5 competitors, find the content and backlink gaps, and give you a roadmap to outrank them." },
    ],
    benefits: [
      "Detailed audit report with video walkthrough",
      "Changes prioritised by impact-to-effort ratio",
      "Transparent reporting — no black-box tactics",
      "Local SEO expertise for the Melbourne market",
    ],
    process: [
      { step: 1, title: "Crawl & Audit", description: "I run a full crawl of your site using Screaming Frog and Google Search Console data, and analyse every SEO signal." },
      { step: 2, title: "Competitor Research", description: "I identify your top organic competitors and find the gaps between their rankings and yours." },
      { step: 3, title: "Report Delivery", description: "You receive a detailed PDF report and a Loom video walkthrough explaining every finding and exactly how to fix it." },
      { step: 4, title: "Implementation (optional)", description: "I can implement all fixes directly on your site — technical changes, content updates, schema markup, and speed optimisations." },
      { step: 5, title: "Monitor & Iterate", description: "Monthly check-in to review ranking changes and adjust strategy based on what Google is rewarding." },
    ],
    faq: [
      { q: "How long does it take to see SEO results?", a: "Technical fixes take effect within 2–4 weeks. Ranking improvements typically show within 3–6 months depending on competition and domain authority." },
      { q: "Do you do link building?", a: "I focus on technical SEO and on-page strategy first — these have the highest ROI. I can advise on white-hat link building strategies but do not run outreach campaigns." },
      { q: "What access do you need?", a: "Read access to Google Search Console and Google Analytics is sufficient for the audit. Implementation requires CMS or code access." },
      { q: "Can SEO help a brand new website?", a: "Absolutely. Starting with a strong technical foundation and keyword strategy is far easier than fixing a site that has been live for years." },
    ],
    relatedProducts: ["seo-audit"],
  },
  {
    slug: "devops",
    title: "Cloud & DevOps Consulting Melbourne | AWS, Docker, CI/CD",
    shortTitle: "Cloud & DevOps",
    tagline: "Reliable, scalable infrastructure for your web applications",
    metaDescription: "Cloud and DevOps consulting in Melbourne. AWS setup, Docker containerisation, CI/CD pipelines, and Vercel deployments for Australian tech teams and startups.",
    color: "#f59e0b",
    heroDescription: "I help Melbourne startups and development teams set up reliable, cost-efficient cloud infrastructure. Whether you need an AWS environment from scratch, Docker containers for your app, or a CI/CD pipeline that deploys automatically on every push — I make it happen fast and document everything properly.",
    features: [
      { title: "AWS Infrastructure Setup", description: "EC2, S3, RDS, Lambda, CloudFront, and IAM roles configured securely from day one. Including cost optimisation and billing alerts." },
      { title: "Docker & Containerisation", description: "Dockerfile authoring, multi-stage builds, Docker Compose for local development, and container registry setup (ECR or Docker Hub)." },
      { title: "CI/CD Pipeline Setup", description: "GitHub Actions or GitLab CI pipelines that run tests, lint, build, and deploy automatically on every pull request and merge." },
      { title: "Vercel & Netlify Deployments", description: "Jam-stack deployments with preview environments, environment variables, and custom domain configuration." },
      { title: "Monitoring & Alerting", description: "CloudWatch, Grafana, or Datadog setup with alerts for errors, latency, and cost anomalies — so you know before your users do." },
      { title: "Security Hardening", description: "VPC configuration, security groups, secrets management with AWS Secrets Manager, and least-privilege IAM policies." },
    ],
    benefits: [
      "Infrastructure documented in Notion or Confluence",
      "Cost-conscious — no over-provisioning",
      "Handover session so your team fully understands the setup",
      "Available for ongoing retainer support",
    ],
    process: [
      { step: 1, title: "Architecture Review", description: "We review your current setup (or start from scratch), discuss your traffic requirements, and agree on the right architecture." },
      { step: 2, title: "Environment Setup", description: "I provision cloud resources using infrastructure-as-code (Terraform or CloudFormation) so everything is reproducible and version-controlled." },
      { step: 3, title: "CI/CD Integration", description: "Pipelines are connected to your repository. Every push triggers tests and a deployment to the appropriate environment." },
      { step: 4, title: "Monitoring & Alerts", description: "Dashboards and alerts are configured so you have full visibility over app health, costs, and performance." },
      { step: 5, title: "Documentation & Handover", description: "I deliver a full runbook covering every component, how to scale it, and how to troubleshoot common issues." },
    ],
    faq: [
      { q: "Do you work with teams that already have existing infrastructure?", a: "Yes. I can audit what you have, identify risks or cost issues, and improve it incrementally without breaking production." },
      { q: "Which cloud providers do you work with?", a: "Primarily AWS and Vercel. I also have experience with GCP and Azure for specific workloads." },
      { q: "Can you help reduce our AWS bill?", a: "Often yes. Common wins include right-sizing instances, moving to Savings Plans, using Spot Instances, and removing forgotten resources." },
      { q: "Do you offer ongoing support after the setup?", a: "Yes. Monthly retainer options are available for monitoring, incident response, and ongoing infrastructure changes." },
    ],
    relatedProducts: [],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
