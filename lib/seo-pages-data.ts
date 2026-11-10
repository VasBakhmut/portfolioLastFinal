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
  /** Starting price in AUD, used for the Service/Offer structured data. */
  priceFrom?: { amount: number; per?: "month" };
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
    priceFrom: { amount: 199 },
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
    priceFrom: { amount: 799 },
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
    priceFrom: { amount: 299 },
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
    priceFrom: { amount: 99 },
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
    priceFrom: { amount: 149 },
  },
  {
    slug: "shopify-stores",
    name: "Shopify Stores",
    h1: "Shopify Store Setup & Development in Australia",
    metaTitle: "Shopify Developer Melbourne | Store Setup From $599 | Vasyl Bakhmut",
    metaDescription:
      "Shopify store setup and customisation for Australian small businesses. Australian payments, GST and shipping configured. From $599 AUD.",
    intro:
      "I set up Shopify stores for Australian small businesses — branded, mobile-first, and ready to take orders with Australian payments, GST and shipping configured from day one.",
    h2Sections: [
      {
        heading: "How Much Does a Shopify Store Cost in Australia?",
        body: "A professionally set-up Shopify store in Australia typically costs from a few hundred dollars for a basic template to $5,000+ at agency rates. My Shopify stores start from $599 AUD for a clean, mobile-first store with your branding, products and Australian checkout configured. Shopify's monthly subscription is separate and paid directly to Shopify, so the store account is yours from the start.",
      },
      {
        heading: "Shopify Set Up for the Australian Market",
        body: "Australian customers expect GST-inclusive pricing in AUD, familiar payment options such as card payments, Afterpay and PayPal, and clear Australia Post shipping rates. I configure these properly, along with the SEO basics Shopify leaves to you — page titles, descriptions, clean product URLs and structured data — so your store can be found in Google and in AI search tools.",
      },
      {
        heading: "Shopify or Custom Ecommerce — Which Should You Choose?",
        body: "Shopify is the fastest way to launch an online store and lets you manage products yourself without a developer. A custom ecommerce build gives you full ownership of the code and no platform fees, but costs more up front. If you want to start selling quickly and keep running costs predictable, Shopify is usually the right choice; if you have unusual requirements, we can talk through a custom build instead.",
      },
    ],
    pricing: "ecommerce",
    schema: "Shopify",
    priceFrom: { amount: 599 },
  },
  {
    slug: "geo-ai-search-optimisation",
    name: "GEO & AI Search Optimisation",
    h1: "GEO — AI Search Optimisation for Australian Businesses",
    metaTitle: "GEO & AI Search Optimisation Melbourne | Vasyl Bakhmut",
    metaDescription:
      "Get your business found and cited by ChatGPT, Perplexity and Google AI. GEO and AI search optimisation for Australian businesses from $399/month.",
    intro:
      "More customers now ask ChatGPT, Perplexity and Google AI who to hire instead of scrolling search results. I make your business easy for these AI tools to find, understand and recommend.",
    h2Sections: [
      {
        heading: "What Is GEO (Generative Engine Optimisation)?",
        body: "GEO is the practice of making your business easy for AI answer engines — ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot — to find, understand and cite. Instead of ten blue links, these tools give one written answer and mention a handful of businesses. GEO focuses on making sure yours is one of them, and it builds on solid traditional SEO rather than replacing it.",
      },
      {
        heading: "What I Do for GEO and AI Visibility",
        body: "I start with an AI-readiness audit: whether AI crawlers can access your site, whether your structured data and llms.txt are in place, and whether your business details are consistent across the web. Then I restructure your key pages and FAQs so the answers are clear, factual and easy to quote, and I track which AI tools mention you for the questions your customers actually ask.",
      },
      {
        heading: "How Much Does GEO Cost in Australia?",
        body: "Australian agencies commonly quote GEO retainers from around $1,500 to $2,000 or more per month. Working directly with a specialist without agency overhead, ongoing GEO optimisation with me starts from $399 per month. I do not promise guaranteed placement in AI answers, because nobody honestly can — what I deliver is a site and a web presence that AI tools can understand and trust.",
      },
    ],
    pricing: "seo",
    schema: "GEO",
    priceFrom: { amount: 399, per: "month" },
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
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "QLD",
    type: "remote",
    suburbs: ["CBD", "South Brisbane", "Fortitude Valley", "West End", "New Farm", "Paddington", "Indooroopilly", "Chermside"],
    locationIntro:
      "I build websites, Shopify stores and AI automation for Brisbane businesses remotely, with clear communication and fast turnaround. Brisbane stays on AEST all year, so our working hours overlap with Melbourne almost completely.",
    locationNote:
      "Remote-first · Brisbane runs on AEST · Fixed prices · No agency overhead",
  },
  {
    slug: "perth",
    name: "Perth",
    state: "WA",
    type: "remote",
    suburbs: ["CBD", "Subiaco", "Fremantle", "Northbridge", "Joondalup", "Cottesloe", "Claremont", "Scarborough"],
    locationIntro:
      "Perth businesses work with me remotely, with calls scheduled around the two to three hour time difference so you still get same-day replies. Websites, Shopify stores and AI automation at fixed prices, without Perth agency overhead.",
    locationNote:
      "Remote-first · Perth is 2–3 hours behind Melbourne · Same-day replies · Fixed prices",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "SA",
    type: "remote",
    suburbs: ["CBD", "Glenelg", "Norwood", "Unley", "Prospect", "Mawson Lakes", "Henley Beach", "North Adelaide"],
    locationIntro:
      "Adelaide is only 30 minutes behind Melbourne, so working remotely with Adelaide businesses feels like working next door. I build websites, Shopify stores and AI automation with fixed prices agreed before any work starts.",
    locationNote:
      "Remote-first · Adelaide is 30 minutes behind Melbourne · Fixed prices · Fast turnaround",
  },
  {
    slug: "canberra",
    name: "Canberra",
    state: "ACT",
    type: "remote",
    suburbs: ["City", "Braddon", "Kingston", "Belconnen", "Woden", "Gungahlin", "Manuka", "Fyshwick"],
    locationIntro:
      "I work with Canberra businesses, consultants and community organisations remotely, in the same timezone as Melbourne. Clear scoping, fixed prices and websites built to be fast, accessible and easy to find in search.",
    locationNote:
      "Remote-first · Same timezone as Melbourne · Fixed prices · Accessible, SEO-ready builds",
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    state: "QLD",
    type: "remote",
    suburbs: ["Surfers Paradise", "Broadbeach", "Burleigh Heads", "Southport", "Robina", "Coolangatta", "Palm Beach", "Nerang"],
    locationIntro:
      "Gold Coast service businesses, hospitality venues and retailers need websites that work on a phone first. I build them remotely, in a timezone that closely matches Melbourne, with fixed prices and fast delivery.",
    locationNote:
      "Remote-first · Gold Coast runs on AEST · Mobile-first builds · Fixed prices",
  },
  {
    slug: "hobart",
    name: "Hobart",
    state: "TAS",
    type: "remote",
    suburbs: ["CBD", "Sandy Bay", "Battery Point", "North Hobart", "Glenorchy", "Kingston", "Bellerive", "Moonah"],
    locationIntro:
      "Hobart makers, producers and small businesses often sell to customers far beyond Tasmania. I build their websites and Shopify stores remotely, in the same timezone as Melbourne, with fixed prices and no agency overhead.",
    locationNote:
      "Remote-first · Same timezone as Melbourne · Shopify and website specialist · Fixed prices",
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
  "shopify-stores": {
    melbourne:
      "Melbourne's independent retailers, makers and local brands are moving online fast. Based in Cheltenham, I set up Shopify stores for Melbourne businesses that look the part, handle GST and Australian shipping correctly, and are ready to be found in local and AI search.",
    sydney:
      "Sydney shoppers expect a fast, polished checkout. I set up Shopify stores for Sydney businesses remotely — same AEDT timezone, clear communication and a launch-ready store without Sydney agency pricing.",
  },
  "geo-ai-search-optimisation": {
    melbourne:
      "Melbourne customers increasingly ask ChatGPT and Google AI for the best local provider instead of searching. I help Melbourne businesses give those tools clear, consistent local information to cite — from suburb-level details to structured data and well-structured FAQs.",
    sydney:
      "Sydney is a crowded market, and AI answers only name a few businesses. I work remotely with Sydney businesses to make their sites and online presence easy for AI search tools to understand and cite — same AEDT timezone and no agency overhead.",
  },
  "cloud-devops": {
    melbourne:
      "Melbourne tech startups and growing SMBs need cloud infrastructure that scales with them. Based locally, I can meet in person to audit your current setup and build a cost-efficient AWS or Vercel architecture tailored to your Melbourne business needs.",
    sydney:
      "Sydney businesses need cloud infrastructure that's reliable, compliant, and cost-effective. I design and implement cloud setups for Sydney companies remotely — same timezone, fast delivery, and no Sydney agency markup on straightforward DevOps work.",
  },
};

// Extra Australian cities: a service × city page only exists where a genuinely
// unique intro is written below (avoids thin, near-duplicate doorway pages).
const EXTRA_CITY_INTROS: Record<string, Record<string, string>> = {
  "web-design": {
    brisbane:
      "Brisbane businesses compete for attention in a fast-growing market, and a clear, quick-loading website is often the first thing customers judge. I design mobile-first websites for Brisbane small businesses, remotely and at fixed prices.",
    perth:
      "Perth businesses often serve a market that is far from the east-coast agencies. I design websites for Perth small businesses remotely, schedule calls around the time difference, and keep pricing fixed and transparent.",
    adelaide:
      "Adelaide small businesses deserve a website that looks as good as the bigger players. I design clean, mobile-first websites for Adelaide businesses, working remotely with only a 30 minute time difference.",
    canberra:
      "Canberra consultancies, professional services and community groups need websites that are clear, accessible and trustworthy. I design them remotely, in the same timezone as Melbourne, with fixed prices.",
    "gold-coast":
      "On the Gold Coast, most visitors find a business on their phone, often while they are already nearby. I design fast, mobile-first websites for Gold Coast hospitality, service and retail businesses, remotely.",
    hobart:
      "Hobart businesses often have a strong story and products worth showing off. I design websites for Hobart small businesses that present that story clearly and load quickly, working remotely at fixed prices.",
  },
  "shopify-stores": {
    brisbane:
      "Brisbane retailers and online brands can start selling quickly on Shopify. I set up Shopify stores for Brisbane businesses remotely, with GST, Australian shipping and payments configured and a fixed starting price of $599.",
    perth:
      "Perth online sellers face longer shipping distances to most customers, so clear delivery information and a smooth checkout matter. I set up Shopify stores for Perth businesses remotely, with Australian shipping and payments configured.",
    adelaide:
      "Adelaide makers and food and lifestyle brands can reach customers Australia-wide through Shopify. I set up Shopify stores for Adelaide businesses remotely, from $599, with checkout and shipping configured for Australia.",
    canberra:
      "Canberra businesses selling online need a store that is simple to run and easy for customers to trust. I set up Shopify stores for Canberra businesses remotely, in the Melbourne timezone, from $599.",
    "gold-coast":
      "Gold Coast surf, fashion and lifestyle brands often sell to customers beyond the coast. I set up Shopify stores for Gold Coast businesses remotely, with mobile-first design and Australian payments and shipping configured, from $599.",
    hobart:
      "Hobart producers and makers sell to customers on the mainland and overseas. I set up Shopify stores for Hobart businesses remotely, with GST and Australian shipping configured and a fixed starting price of $599.",
  },
};

for (const [service, byCity] of Object.entries(EXTRA_CITY_INTROS)) {
  SERVICE_LOCATION_INTROS[service] = { ...SERVICE_LOCATION_INTROS[service], ...byCity };
}

/** True when a service × city page has genuinely unique content and should exist. */
export function hasServiceLocationPage(serviceSlug: string, locationSlug: string): boolean {
  return Boolean(SERVICE_LOCATION_INTROS[serviceSlug]?.[locationSlug]);
}

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
