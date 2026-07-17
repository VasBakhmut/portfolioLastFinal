export interface H2Section {
  heading: string;
  body: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  h2Sections: H2Section[];
  pricing: string;
  schema: string;
}

export interface LocationData {
  slug: string;
  name: string;
  state: string;
  type: "local" | "remote";
  suburbs: string[];
  locationIntro: string;
  locationNote: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "web-design",
    name: "Web Design",
    h1: "Professional Web Design Services",
    metaTitle: "Web Design Services Australia | Vasyl Bakhmut",
    metaDescription:
      "Professional web design for Australian small businesses. Mobile-first, SEO-optimised websites. From $199 AUD.",
    intro:
      "I design clean, fast, conversion-focused websites for Australian small businesses — built with modern technology that outperforms WordPress templates on every metric.",
    h2Sections: [
      {
        heading: "Affordable Website Design for Small Businesses",
        body: "Good web design doesn't have to mean agency prices. I work directly with clients — no account managers, no overhead — so I can deliver polished, custom website designs for Australian small businesses from $199. Every design is mobile-first, accessible, and built to convert visitors into leads.",
      },
      {
        heading: "How Much Does Web Design Cost in Australia?",
        body: "Web design in Australia typically ranges from $500 to $10,000+ through agencies. Working with a specialist freelance web designer means you get the same quality for significantly less — my packages start at $199 for a landing page and $299 for a full business site. Pricing is fixed, transparent, and agreed before a single line of code is written.",
      },
      {
        heading: "Professional Website Design vs DIY Builders",
        body: "DIY builders like Wix and Squarespace are great for hobby projects, but they come with real limitations for growing businesses — slow load times, duplicate content flags, limited SEO control, and no ownership of your code. A professionally designed website gives you speed, full SEO control, and a site that actually belongs to you.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "WebDesign",
  },
  {
    slug: "web-development",
    name: "Web Development",
    h1: "Full-Stack Web Development Services",
    metaTitle: "Web Development Melbourne & Australia | Next.js, React | Vasyl Bakhmut",
    metaDescription:
      "Custom full-stack development with React, Next.js and TypeScript. Fast, accessible, SEO-ready. Melbourne-based, serving Australia.",
    intro:
      "I build performant web applications using React, Next.js and TypeScript — the same stack used by the world's fastest websites, now accessible to Australian small businesses.",
    h2Sections: [
      {
        heading: "Why Next.js Beats WordPress for Australian Businesses",
        body: "WordPress powers 40% of the web but it wasn't designed for performance — plugins slow it down, security patches pile up, and SEO is an afterthought. Next.js was built specifically for fast, SEO-ready web applications, and Australian businesses benefit from the speed advantage it provides on local networks. A Next.js site typically achieves a Google PageSpeed score above 90 out of the box.",
      },
      {
        heading: "Custom Web Development vs Website Builders",
        body: "Website builders give you a template. Custom web development gives you a system designed around your business. I build with React and TypeScript so your site is maintainable, scalable, and fast — not dependent on a third-party platform's decisions. When your business grows, your website grows with it.",
      },
      {
        heading: "Full-Stack Development for Small Business Australia",
        body: "Full-stack development means I can build both the front-end your customers see and the back-end logic that powers it — contact forms, CMS integrations, booking systems, APIs — everything in one engagement. For Australian small businesses, this means one point of contact and no coordination overhead between a designer and a separate developer.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "WebDevelopment",
  },
  {
    slug: "seo-optimization",
    name: "SEO Optimisation",
    h1: "SEO Optimisation Services Australia",
    metaTitle: "SEO Services Melbourne & Australia | Free Audit | Vasyl Bakhmut",
    metaDescription:
      "Technical SEO and local search optimisation for Australian businesses. Free audit, weekly reporting. From $300/mo.",
    intro:
      "I help Australian businesses rank on the first page of Google through technical SEO, local search optimisation, and content strategy — without agency price tags.",
    h2Sections: [
      {
        heading: "Local SEO for Melbourne Small Businesses",
        body: "Local SEO helps Melbourne customers find your business when they search Google for services near them. I optimise your Google Business Profile, implement structured data (schema.org), and target suburb-level keywords so your business appears in the local map pack. Most Melbourne clients see measurable ranking improvements within 60–90 days.",
      },
      {
        heading: "How to Improve Google Rankings in Australia",
        body: "Australian Google rankings are driven by three things: technical health (Core Web Vitals, indexation, structured data), relevance (on-page content and keywords), and authority (backlinks and reviews). I audit all three and fix the highest-impact issues first — so you see results without waiting for a 12-month retainer to kick in.",
      },
      {
        heading: "Technical SEO vs Content SEO — What Does Your Business Need?",
        body: "Most small businesses need both, but in different amounts. Technical SEO fixes crawling, indexation, and page speed issues that prevent Google from finding your content. Content SEO creates the pages and keywords that give Google something worth ranking. I start with a free audit to identify which side of the equation is holding your rankings back.",
      },
    ],
    pricing: "seo",
    schema: "SEO",
  },
  {
    slug: "ecommerce-solutions",
    name: "Ecommerce Solutions",
    h1: "Ecommerce Website Development Australia",
    metaTitle: "Ecommerce Website Design Australia | Custom Online Store | Vasyl Bakhmut",
    metaDescription:
      "Custom ecommerce websites for Australian businesses. Shopping cart, payments, product management. From $799 AUD.",
    intro:
      "I build ecommerce stores that sell — custom product management, Australian payment gateways, and mobile-first design that converts browsers into buyers.",
    h2Sections: [
      {
        heading: "How Much Does an Ecommerce Website Cost in Australia?",
        body: "An ecommerce website in Australia typically costs between $799 and $5,000+ depending on the number of products, payment gateway complexity, and custom features. My ecommerce packages start at $799 for a store with up to 50 products and include cart, checkout, and Australian payment gateway integration. Ongoing maintenance is optional via a Care plan.",
      },
      {
        heading: "Custom Ecommerce vs Shopify — Which Is Right for Your Business?",
        body: "Shopify is excellent for businesses that need to get online quickly with minimal technical involvement. A custom ecommerce build gives you full ownership of your code, no per-transaction fees, and a faster, more distinctive storefront. For businesses turning over more than $5,000 per month, the monthly savings on Shopify fees typically cover the cost of a custom build within 12 months.",
      },
      {
        heading: "Ecommerce Website Design for Australian Small Business",
        body: "Australian ecommerce customers expect fast-loading pages, Australian payment options (Stripe, Afterpay, PayPal), and mobile-friendly checkout. I build ecommerce stores specifically for the Australian market — GST-inclusive pricing, Stripe integration, and designs optimised for the mobile-heavy shopping habits of Australian consumers.",
      },
    ],
    pricing: "ecommerce",
    schema: "Ecommerce",
  },
  {
    slug: "business-web-solutions",
    name: "Business Web Solutions",
    h1: "Business Website Solutions for Australian SMBs",
    metaTitle: "Business Website Design Australia | SMB Web Solutions | Vasyl Bakhmut",
    metaDescription:
      "Website solutions for Australian SMBs. Multi-page sites, CMS, SEO, contact forms. From $299 AUD.",
    intro:
      "From a simple 5-page business site to a full CMS-powered platform — I deliver complete web solutions for Australian SMBs that need more than a template but less than an enterprise build.",
    h2Sections: [
      {
        heading: "What Does a Professional Business Website Cost in Australia?",
        body: "A professional multi-page business website in Australia costs between $299 and $2,000 depending on scope, pages, and custom features. My business website packages start at $299 for up to 5 pages and include all the fundamentals — responsive design, contact form, SEO basics, and fast load times. Additional pages are $50 each.",
      },
      {
        heading: "Small Business Website Design — What You Actually Need",
        body: "Most small businesses need four things from their website: a homepage that clearly explains what you do, a services or products section, a contact page, and a reason for visitors to trust you (testimonials, case studies, or credentials). I design all of these to work together as a lead generation system, not just a static brochure.",
      },
      {
        heading: "Business Website Packages for Australian SMBs",
        body: "I offer three business website packages tailored to Australian SMBs: a $199 landing page for quick launches, a $299+ multi-page business site, and a $799+ ecommerce store. All packages include mobile-first design, basic SEO, and a contact form. Care plans from $29 per month handle hosting, backups, and ongoing minor edits.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "BusinessWeb",
  },
  {
    slug: "ai-automation",
    name: "AI Chatbots & Automation",
    h1: "AI Chatbots & Automation Services",
    metaTitle: "AI Automation Melbourne | Chatbots, n8n Workflows | Vasyl Bakhmut",
    metaDescription:
      "AI chatbots and n8n workflow automation for Australian small businesses. Save 10+ hours/week. CRM integration. From $99.",
    intro:
      "I build AI automation systems that eliminate repetitive work — custom chatbots, n8n workflows, CRM integrations, and intelligent tools that run while you focus on growing your business.",
    h2Sections: [
      {
        heading: "How AI Automation Saves Melbourne Businesses 10+ Hours Per Week",
        body: "Melbourne businesses across hospitality, retail, trades, and professional services are automating their most time-consuming tasks — appointment reminders, lead follow-ups, invoice sending — using n8n workflows and AI assistants. The average client I work with saves between 8 and 15 hours per week once their core workflows are automated. That's the equivalent of a part-time hire, without the overhead.",
      },
      {
        heading: "n8n Workflow Automation for Australian Small Business",
        body: "n8n is an open-source automation platform that connects the tools Australian businesses already use — Google Workspace, HubSpot, Xero, Slack, Stripe — into automated workflows that run 24/7 without manual intervention. I build, host, and maintain n8n workflows for Australian small businesses at a fraction of what managed Zapier plans cost at scale.",
      },
      {
        heading: "AI Chatbots vs Traditional Customer Support — ROI for SMBs",
        body: "A well-trained AI chatbot handles 60–80% of common customer enquiries automatically — qualifying leads, answering FAQs, collecting contact details, and routing complex issues. For Australian SMBs spending hours each day on repetitive customer communication, a one-time chatbot investment of $99–$349 typically pays for itself within the first month.",
      },
    ],
    pricing: "ai",
    schema: "AIAutomation",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    h1: "Cloud Infrastructure & DevOps Services",
    metaTitle: "Cloud & DevOps Consulting Melbourne | AWS, Docker, CI/CD | Vasyl Bakhmut",
    metaDescription:
      "DevOps & cloud infrastructure for Australian businesses. AWS, Docker, CI/CD pipelines, Vercel deployments. From $149 AUD.",
    intro:
      "I help Australian businesses set up and optimise their cloud infrastructure — reliable, scalable, and cost-efficient. AWS, Docker, CI/CD, and Vercel deployments handled end to end.",
    h2Sections: [
      {
        heading: "AWS Setup for Australian Small Businesses",
        body: "AWS is the world's most widely used cloud platform, but it's easy to misconfigure and end up overpaying. I set up AWS environments for Australian businesses correctly from the start — right-sized EC2 instances, S3 for storage, RDS for databases, and CloudFront for fast Australian content delivery. Most clients save 20–40% on their AWS bill after an audit.",
      },
      {
        heading: "Why Your Business Needs a CI/CD Pipeline",
        body: "A CI/CD pipeline automatically tests your code and deploys it to production — eliminating manual deployment errors and making it safe to ship updates multiple times a day. For small businesses, this means faster feature delivery, fewer outages, and a codebase that stays healthy over time. GitHub Actions setup is included in all my web development packages.",
      },
      {
        heading: "Docker Containerisation for Small Business Applications",
        body: "Docker containers make your application run identically in development, staging, and production — eliminating the classic 'it works on my machine' problem. Containerised applications are also easier to scale, move between cloud providers, and maintain. I containerise existing applications as a standalone service or as part of a larger cloud migration.",
      },
    ],
    pricing: "devops",
    schema: "CloudDevOps",
  },
];

export const LOCATIONS: LocationData[] = [
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "VIC",
    type: "local",
    suburbs: [
      "CBD",
      "South Yarra",
      "St Kilda",
      "Richmond",
      "Fitzroy",
      "Hawthorn",
      "Brighton",
      "Cheltenham",
      "Frankston",
      "Bayside",
    ],
    locationIntro:
      "Based in Cheltenham in Melbourne's bayside, I work face-to-face or remotely with businesses across all of Melbourne — from the CBD and inner suburbs to Frankston and the Mornington Peninsula.",
    locationNote:
      "Melbourne-based · Same timezone · Available for on-site meetings across Greater Melbourne",
  },
  {
    slug: "sydney",
    name: "Sydney",
    state: "NSW",
    type: "remote",
    suburbs: [
      "CBD",
      "Surry Hills",
      "Newtown",
      "Parramatta",
      "North Sydney",
      "Bondi",
      "Chatswood",
    ],
    locationIntro:
      "I work remotely with Sydney businesses using a communication-first approach — video calls, shared project boards, and same-day responses during AEDT business hours. No travel overhead means better value without compromising quality.",
    locationNote:
      "Remote-first · Same AEDT timezone · Fast turnaround · No Sydney agency prices",
  },
];

export const SERVICE_LOCATION_INTROS: Record<string, Record<string, string>> = {
  "web-design": {
    melbourne:
      "Melbourne businesses deserve websites that reflect the city's design-forward culture — clean, modern, and built to convert. Based in Cheltenham, I understand what Melbourne customers respond to, and I build web designs that speak their language.",
    sydney:
      "Sydney's competitive market means your website needs to stand out from day one. I design websites for Sydney businesses that load fast, rank well in Sydney-area Google searches, and convert visitors who are comparing multiple local providers.",
  },
  "web-development": {
    melbourne:
      "Melbourne's growing startup and SMB scene runs on technology that works. I build Next.js and React applications for Melbourne businesses that are faster, more secure, and easier to maintain than WordPress — without the Melbourne agency price tag.",
    sydney:
      "Sydney businesses need web development partners who deliver on time and on budget. Working remotely from Melbourne, I bring the same technical rigour as a Sydney agency at a fraction of the cost — with all communication in AEDT and no offshore handoffs.",
  },
  "seo-optimization": {
    melbourne:
      "Ranking in Melbourne Google searches requires understanding local search behaviour, Melbourne-specific competitors, and the suburbs your customers search from. I combine technical SEO with Melbourne local search strategy to get your business found by the right people.",
    sydney:
      "Sydney is one of Australia's most competitive SEO markets. I help Sydney businesses cut through by focusing on technical foundations, local schema markup, and suburb-level keyword targeting — the things Sydney agencies charge $2,000 per month for, at a fraction of the cost.",
  },
  "ecommerce-solutions": {
    melbourne:
      "Melbourne's retail and lifestyle market is increasingly online-first. I build ecommerce stores for Melbourne businesses that handle Australian payment gateways, GST-inclusive pricing, and the mobile shopping habits of Melbourne consumers.",
    sydney:
      "Sydney ecommerce businesses need stores that can handle high traffic and customers who expect a premium online experience. I build ecommerce solutions that perform under pressure — deployed on Australian infrastructure.",
  },
  "business-web-solutions": {
    melbourne:
      "From Brunswick cafes to Frankston tradespeople, Melbourne small businesses need websites that work as hard as they do. I build business websites for Melbourne SMBs that generate leads, not just look good on a screen.",
    sydney:
      "Sydney small businesses compete in one of Australia's toughest markets. Your website needs to immediately communicate credibility, answer the right questions, and make it easy to get in touch. That's exactly what I build — remotely, efficiently, and affordably.",
  },
  "ai-automation": {
    melbourne:
      "Melbourne businesses across hospitality, retail, trades, and professional services are saving hours every week with AI automation. Based locally, I can audit your existing workflows in person and build n8n automations, AI chatbots, and CRM integrations tailored to how Melbourne businesses actually operate.",
    sydney:
      "Sydney businesses move fast and expect systems that keep up. I build AI automation and n8n workflows for Sydney companies remotely — same AEDT timezone, fast delivery, and no Sydney agency overhead. Your customer enquiries, follow-ups, and repetitive tasks — automated.",
  },
  "cloud-devops": {
    melbourne:
      "Melbourne tech startups and growing SMBs need cloud infrastructure that scales with them. Based locally, I can meet in person to audit your current setup and build a cost-efficient AWS or Vercel architecture tailored to your Melbourne business needs.",
    sydney:
      "Sydney businesses need cloud infrastructure that's reliable, compliant, and cost-effective. I design and implement cloud setups for Sydney companies remotely — same timezone, fast delivery, and no Sydney agency markup on straightforward DevOps work.",
  },
};

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
