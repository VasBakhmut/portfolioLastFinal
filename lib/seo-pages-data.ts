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
  /** Question and answer pairs, shown on the page and as FAQPage structured data. */
  faqs: { q: string; a: string }[];
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
    metaTitle: "Web Design Services Australia | Vasdev",
    metaDescription:
      "Web design for Australian small businesses. Mobile-first, search-friendly websites from $199 AUD. Based in Melbourne, working Australia-wide.",
    intro:
      "A small business website should load quickly, read well on a phone and say plainly what you sell. That is what I design, for businesses in Melbourne and across Australia.",
    h2Sections: [
      {
        heading: "Website design for small businesses on a budget",
        body: "Agency prices put a custom website out of reach for a lot of small businesses. I work directly with clients, with no account managers in between, so a custom design starts from $199. Every site is built for phones first and for visitors who want to know what you do, what it costs and how to get in touch.",
      },
      {
        heading: "How much does web design cost in Australia?",
        body: "Agencies commonly charge somewhere between $500 and $10,000 or more for a website, depending on its size. A freelance web designer working alone can often charge less for a similar result. My packages start at $199 for a landing page and $299 for a full business site. The price is fixed and agreed in writing before I start.",
      },
      {
        heading: "Custom web design or a DIY builder?",
        body: "Wix and Squarespace are fine for a hobby project. Business sites tend to run into their limits: slower pages, little control over SEO and no ownership of the code. A site I design belongs to you, loads fast and can be changed later without starting again.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "WebDesign",
    faqs: [
      { q: "How much does website design cost in Australia?", a: "Agencies commonly charge from about $500 to $10,000 or more. My web design starts from $199 for a landing page and from $299 for a full business website. The price is fixed and agreed in writing before any work begins." },
      { q: "How long does web design take?", a: "Most landing pages take about a week. A business website usually takes one to three weeks, depending on the scope and on how quickly I receive your content." },
      { q: "Will my website work well on a phone?", a: "Yes. Every site is designed mobile-first, because most visitors arrive on a phone. I check each page on small screens before launch." },
      { q: "Do I own the website after it is built?", a: "Yes. At handover you receive your code, your deployment and any accounts created for the project, so you are never locked in to me." },
    ],
    priceFrom: { amount: 199 },
  },
  {
    slug: "web-development",
    name: "Website Development",
    h1: "Website Development Services",
    metaTitle: "Website Development Melbourne | Custom Websites | Vasdev",
    metaDescription:
      "Custom website development for Australian small businesses. Fast, mobile-friendly, search-ready websites from $299. Melbourne-based, serving Australia.",
    intro:
      "I build fast, custom websites and web applications for small businesses. You get a site that you own, without the plugin updates and slowdowns that come with many WordPress sites.",
    h2Sections: [
      {
        heading: "Why I build custom sites instead of using WordPress",
        body: "WordPress runs more than 40% of websites and works well for many of them. It also relies on plugins that need regular updates, and one slow or outdated plugin can drag a whole site down. A custom-built site loads only what it needs, which usually means faster pages that search engines can read easily. Speed still depends on the content and images, so I test every site with Google PageSpeed before launch.",
      },
      {
        heading: "Custom development or a website builder?",
        body: "A website builder gives you a template and the limits that come with it. Custom development means the site is built around what your business needs. I build it so that it stays easy to maintain and does not depend on one platform's pricing or rules. If the business grows, the site can grow with it.",
      },
      {
        heading: "One developer for the whole website",
        body: "I build the part your customers see and the part behind it: contact forms, booking systems, a way for you to edit your own content, and connections to the other tools you use. You deal with one person instead of coordinating a designer and a separate developer.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "WebDevelopment",
    faqs: [
      { q: "What is the difference between web design and web development?", a: "Design is how a site looks and how it is organised. Development is how it works: forms, bookings, content editing and connections to other tools. I do both, so you deal with one person." },
      { q: "Is a custom website better than WordPress?", a: "It depends. WordPress suits content-heavy sites that you edit often. A custom-built site is usually faster and needs no plugin updates, but changes go through me or through an editing tool I set up for you." },
      { q: "How much does website development cost?", a: "Websites start from $299 AUD. Larger projects with bookings, payments or custom features are quoted after a free consultation, and you know the full price before any work begins." },
      { q: "Can you rebuild my existing website?", a: "Yes. I can update the design, improve the speed or rebuild the site from scratch, depending on what you have now and what you want." },
    ],
    priceFrom: { amount: 299 },
  },
  {
    slug: "seo-optimization",
    name: "SEO Optimisation",
    h1: "SEO Optimisation Services Australia",
    metaTitle: "SEO Services Melbourne & Australia | Free Audit | Vasdev",
    metaDescription:
      "Technical SEO and local search optimisation for Australian businesses. Free audit and regular reporting, without an agency retainer.",
    intro:
      "I help Australian businesses show up in Google through technical SEO, local search and useful content, without an agency retainer.",
    h2Sections: [
      {
        heading: "Local SEO for Melbourne small businesses",
        body: "Local SEO helps people near you find your business when they search on Google. I set up your Google Business Profile, add structured data (schema.org) and target suburb-level keywords, so you have a chance of appearing in the map results. Rankings usually take a few months to move, so I report on progress along the way instead of promising a date.",
      },
      {
        heading: "How to improve your Google rankings in Australia",
        body: "Three things move rankings: technical health, relevance and authority. Technical health covers Core Web Vitals, indexing and structured data. Relevance means your pages answer what people actually search for. Authority comes from links and reviews. I audit all three and fix the biggest problems first.",
      },
      {
        heading: "Technical SEO or content SEO?",
        body: "Most small businesses need some of each. Technical SEO removes the problems that stop Google from crawling and indexing your pages. Content SEO gives Google something worth ranking. I start with a free audit so we can see which one is holding you back.",
      },
    ],
    pricing: "seo",
    schema: "SEO",
    faqs: [
      { q: "How long does SEO take to work?", a: "Rankings usually take a few months to move, and the time depends on your competition and your starting point. I report on progress along the way and do not promise a date." },
      { q: "What does the free SEO audit cover?", a: "It looks at technical health, relevance and authority: how fast and crawlable your site is, how well your pages match what people search for, and what links and reviews you have. You get a list of the biggest problems to fix first." },
      { q: "Do you guarantee first-page rankings?", a: "No. Nobody can guarantee a ranking, and a provider who does should be treated with caution. I focus on the fixes that improve your chances and I report on what changes." },
      { q: "Is SEO worth it for a small local business?", a: "For businesses that depend on local customers, usually yes. Local SEO helps people near you find you when they search, through your Google Business Profile, suburb-level keywords and reviews." },
    ],
  },
  {
    slug: "ecommerce-solutions",
    name: "Ecommerce Solutions",
    h1: "Ecommerce Website Development Australia",
    metaTitle: "Ecommerce Website Design Australia | Online Stores | Vasdev",
    metaDescription:
      "Custom ecommerce websites for Australian businesses. Shopping cart, payments, product management. From $799 AUD.",
    intro:
      "I build online stores with product management, Australian payment gateways and a checkout that works well on a phone.",
    h2Sections: [
      {
        heading: "How much does an ecommerce website cost in Australia?",
        body: "An ecommerce website in Australia can cost anywhere from $799 to $5,000 or more. The main factors are the number of products, the payment setup and any custom features. My ecommerce builds start at $799 for a store with up to 50 products, including the cart, checkout and an Australian payment gateway. Ongoing maintenance is optional through a Care plan.",
      },
      {
        heading: "Custom ecommerce or Shopify?",
        body: "Shopify suits businesses that want to launch quickly and manage products without a developer. A custom build gives you full ownership of the code and no platform fees, but it costs more up front. If your store turns over more than about $5,000 a month, the platform fees can add up and a custom build is worth a look. I will tell you which one fits your case.",
      },
      {
        heading: "Online stores for Australian customers",
        body: "Australian shoppers expect prices in AUD with GST included, pages that load quickly and payment options such as Stripe, Afterpay and PayPal. Most of them browse on a phone, so I design the checkout for small screens first.",
      },
    ],
    pricing: "ecommerce",
    schema: "Ecommerce",
    faqs: [
      { q: "How much does an ecommerce website cost in Australia?", a: "Typically from $799 to $5,000 or more, depending on the number of products, the payment setup and any custom features. My ecommerce builds start at $799 for up to 50 products, including cart, checkout and an Australian payment gateway." },
      { q: "Should I choose Shopify or a custom online store?", a: "Shopify is the quickest way to launch and lets you manage products yourself. A custom store gives you full ownership of the code and no platform fees, but costs more up front. I will tell you which one fits your case." },
      { q: "Which payment options do you set up?", a: "I set up Stripe and can connect Afterpay and PayPal, with prices in AUD and GST included, so customers see the same price at checkout." },
      { q: "Are hosting and a domain included?", a: "No. Hosting and a domain are third-party services that you own directly. I help you choose and set them up. If you would rather not deal with it, a Care plan from $59 a month covers hosting, backups and small edits." },
    ],
    priceFrom: { amount: 799 },
  },
  {
    slug: "business-web-solutions",
    name: "Business Web Solutions",
    h1: "Business Website Solutions for Australian SMBs",
    metaTitle: "Business Website Design Australia | SMB Sites | Vasdev",
    metaDescription:
      "Website solutions for Australian SMBs. Multi-page sites, easy content editing, SEO, contact forms. From $299 AUD.",
    intro:
      "From a five-page business site to a larger site you can edit yourself, I build complete websites for Australian small and medium businesses that need more than a template but less than an enterprise project.",
    h2Sections: [
      {
        heading: "What does a business website cost in Australia?",
        body: "A multi-page business website in Australia usually costs between $299 and $2,000, depending on the number of pages and the features. Mine start at $299 for up to 5 pages and include responsive design, a contact form, SEO basics and fast loading. Additional pages are $50 each.",
      },
      {
        heading: "What a small business website needs",
        body: "Most small businesses need four things: a homepage that says what you do, a page for each service or product, a contact page, and some proof that you can be trusted, such as testimonials or past work. I plan these pages so they work together and visitors end up contacting you.",
      },
      {
        heading: "Business website packages",
        body: "I offer three packages: a $199 landing page for a quick launch, a multi-page business site from $299 and an ecommerce store from $799. Each includes mobile-first design, basic SEO and a contact form. A Care plan from $59 a month covers hosting, backups and small edits.",
      },
    ],
    pricing: "landing-business-ecommerce",
    schema: "BusinessWeb",
    faqs: [
      { q: "How much does a business website cost in Australia?", a: "A multi-page business website usually costs between $299 and $2,000, depending on the pages and features. Mine start at $299 for up to 5 pages, and additional pages are $50 each." },
      { q: "How many pages does a small business website need?", a: "Most small businesses need a homepage, a page for each service or product, a contact page and some proof that you can be trusted, such as testimonials or past work. That fits within the 5 pages in my starting package." },
      { q: "Can I edit the website myself?", a: "Yes, if you want to. I can set up an easy way to change text and images, and I show you how to make basic updates yourself." },
      { q: "What happens after the website is launched?", a: "You get a full handover: your code, your deployment and any accounts created for the project. If you want ongoing help, a Care plan from $59 a month covers hosting, backups and small edits." },
    ],
    priceFrom: { amount: 299 },
  },
  {
    slug: "ai-automation",
    name: "AI Chatbots & Automation",
    h1: "AI Chatbots & Automation Services",
    metaTitle: "AI Automation Melbourne | Chatbots & Workflows | Vasdev",
    metaDescription:
      "AI chatbots and workflow automation for Australian small businesses. CRM integration and less repetitive admin. From $99.",
    intro:
      "I build chatbots, automated workflows and CRM integrations that take repetitive work off your plate, so you can spend the time on customers.",
    h2Sections: [
      {
        heading: "Where AI automation saves time",
        body: "Hospitality, retail, trades and professional services all have tasks that repeat every day: appointment reminders, lead follow-ups, invoice emails. These are good candidates for automation with automated workflows or an AI assistant. How many hours you save depends on how much of your week goes into that kind of admin, and I estimate it with you before you pay for anything.",
      },
      {
        heading: "Workflow automation for Australian small business",
        body: "Workflow automation connects tools you already use, such as Google Workspace, HubSpot, Xero, Slack and Stripe, so data moves between them without anyone retyping it. I build, host and maintain the workflows for small businesses, and the running cost can be lower than a Zapier plan at the same volume.",
      },
      {
        heading: "AI chatbot or a person answering enquiries?",
        body: "A chatbot can answer common questions, collect contact details and pass harder questions to you. It will not replace a person for complex or sensitive conversations. If your business gets the same ten questions every day, a chatbot can free up a good part of your time. Chatbots start from $99.",
      },
    ],
    pricing: "ai",
    schema: "AIAutomation",
    faqs: [
      { q: "What can an AI chatbot do for my business?", a: "It can answer common questions, collect contact details, qualify leads and pass harder questions to you. It will not replace a person for complex or sensitive conversations." },
      { q: "How much does an AI chatbot cost?", a: "Chatbots and automations start from $99 AUD. The final price depends on what the chatbot needs to do and which tools it has to connect to." },
      { q: "Which tasks can be automated?", a: "Typical examples are appointment reminders, lead follow-ups, invoice emails and moving data between tools such as Google Workspace, HubSpot, Xero, Slack and Stripe." },
      { q: "How do I know automation is worth it for me?", a: "How much time you save depends on how much of your week goes into repetitive admin. I estimate it with you before you pay for anything." },
    ],
    priceFrom: { amount: 99 },
  },
  {
    slug: "cloud-devops",
    name: "Cloud Hosting & Deployment",
    h1: "Cloud Hosting & Deployment Services",
    metaTitle: "Cloud Hosting Setup Melbourne | Vasdev",
    metaDescription:
      "Cloud hosting setup and automatic deployment for Australian businesses. Reliable, cost-conscious and fully managed. From $149 AUD.",
    intro:
      "I set up cloud hosting for Australian businesses so your website or app runs reliably and costs what it should, from first setup to day-to-day running.",
    h2Sections: [
      {
        heading: "Cloud hosting setup for small businesses",
        body: "A wrongly sized cloud setup can cost far more than it should. I choose sensible sizes from the start, set up storage, databases and fast delivery for Australian visitors, and add billing alerts so there are no surprise invoices. If you already have an account with a cloud provider, I can review the bill and the setup first.",
      },
      {
        heading: "Automatic deployment",
        body: "Automatic deployment tests your site or app and publishes updates for you, so releases do not depend on someone remembering the right steps. That means fewer mistakes and safer updates. It is included in my website development packages.",
      },
      {
        heading: "Backups and moving between hosts",
        body: "I set your application up so that it runs the same way on a test copy and on the live site, and so that it can move between hosts without trouble. That makes it easier to grow later and to recover if something fails.",
      },
    ],
    pricing: "devops",
    schema: "CloudDevOps",
    faqs: [
      { q: "What does cloud hosting setup involve?", a: "I choose sensible sizes for your setup, configure storage and databases, set up fast delivery for Australian visitors and add billing alerts so there are no surprise invoices." },
      { q: "How much does cloud setup cost?", a: "Setup starts from $149 AUD. The running costs of the hosting itself are paid to your cloud provider, and I help keep them as low as the setup allows." },
      { q: "Can you review my current cloud bill?", a: "Yes. If you already have a cloud account, I can review the bill and the setup first and tell you where you are paying for more than you need." },
      { q: "What is automatic deployment?", a: "It means your site or app is tested and published for you whenever there is an update, so releases do not depend on someone remembering the right steps." },
    ],
    priceFrom: { amount: 149 },
  },
  {
    slug: "shopify-stores",
    name: "Shopify Stores",
    h1: "Shopify Store Setup & Development in Australia",
    metaTitle: "Shopify Developer Melbourne | Stores From $599 | Vasdev",
    metaDescription:
      "Shopify store setup and customisation for Australian small businesses. Australian payments, GST and shipping configured. From $599 AUD.",
    intro:
      "I set up Shopify stores for Australian small businesses. Each store has your branding, your products and a checkout configured for Australia, with GST and shipping done properly from day one.",
    h2Sections: [
      {
        heading: "How much does a Shopify store cost in Australia?",
        body: "A Shopify store in Australia can cost a few hundred dollars for a basic template, or $5,000 and up at agency rates. My stores start from $599 AUD and include your branding, your products and an Australian checkout. Shopify's monthly subscription is separate. You pay Shopify directly, so the store account belongs to you from the start.",
      },
      {
        heading: "Shopify set up for Australia",
        body: "Australian customers expect prices in AUD with GST included, card payments, Afterpay and PayPal, and clear Australia Post shipping rates. I configure all of that. I also handle the SEO basics Shopify leaves to you: page titles, descriptions, clean product URLs and structured data, so your store can show up in Google and in AI search tools.",
      },
      {
        heading: "Shopify or custom ecommerce?",
        body: "Shopify is the fastest way to open an online store, and you can manage products yourself. A custom build gives you full ownership of the code and no platform fees, but it costs more up front. If you want to start selling quickly with predictable running costs, Shopify is usually the better choice. If your needs are unusual, we can talk about a custom build.",
      },
    ],
    pricing: "ecommerce",
    schema: "Shopify",
    faqs: [
      { q: "How much does a Shopify store cost in Australia?", a: "A Shopify store can cost a few hundred dollars for a basic template or $5,000 and up at agency rates. My stores start from $599 AUD and include your branding, your products and an Australian checkout." },
      { q: "Do I pay Shopify separately?", a: "Yes. Shopify's monthly subscription is paid directly to Shopify, so the store account belongs to you from the start. My price covers the setup work." },
      { q: "Is GST and Australian shipping set up?", a: "Yes. I configure prices in AUD with GST included, card payments, Afterpay and PayPal, and clear Australia Post shipping rates." },
      { q: "Is Shopify better than a custom online store?", a: "For most small businesses that want to start selling quickly with predictable running costs, yes. A custom store makes sense only if your needs are unusual." },
    ],
    priceFrom: { amount: 599 },
  },
  {
    slug: "geo-ai-search-optimisation",
    name: "GEO & AI Search Optimisation",
    h1: "GEO: AI Search Optimisation for Australian Businesses",
    metaTitle: "GEO & AI Search Optimisation Melbourne | Vasdev",
    metaDescription:
      "Get your business found and cited by ChatGPT, Perplexity and Google AI. GEO and AI search optimisation for Australian businesses from $399/month.",
    intro:
      "More people now ask ChatGPT, Perplexity or Google's AI who to hire, instead of scrolling through search results. GEO is the work of making your business easy for those tools to find, understand and recommend.",
    h2Sections: [
      {
        heading: "What is GEO (generative engine optimisation)?",
        body: "GEO is the practice of helping AI answer engines such as ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot find, understand and cite your business. These tools give one written answer and name a few businesses, instead of listing ten links. GEO aims to get yours named. It builds on good SEO rather than replacing it.",
      },
      {
        heading: "What I do for AI visibility",
        body: "I start with an AI-readiness audit. Can AI crawlers reach your site? Is your structured data in place? Do you have an llms.txt file? Are your business details the same everywhere online? Then I rewrite key pages and FAQs so the answers are clear and easy to quote, and I check which AI tools mention you for the questions your customers ask.",
      },
      {
        heading: "How much does GEO cost in Australia?",
        body: "Australian agencies often quote GEO retainers from about $1,500 to $2,000 a month or more. Because I work directly, without agency overhead, ongoing GEO work with me starts from $399 a month. I do not promise placement in AI answers, because nobody can honestly do that. What I deliver is a site and an online presence that AI tools can read and trust.",
      },
    ],
    pricing: "seo",
    schema: "GEO",
    faqs: [
      { q: "What is GEO?", a: "GEO, or generative engine optimisation, is the work of helping AI answer engines such as ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot find, understand and cite your business." },
      { q: "How is GEO different from SEO?", a: "SEO aims to rank your pages in a list of links. GEO aims to get your business named in the single written answer that an AI tool gives. GEO builds on good SEO rather than replacing it." },
      { q: "Can you guarantee ChatGPT will recommend my business?", a: "No. Nobody can guarantee that. What I deliver is a site and an online presence that AI tools can read and trust, and I track which tools mention you." },
      { q: "How much does GEO cost?", a: "Ongoing GEO work starts from $399 a month. Agencies often quote retainers of about $1,500 to $2,000 a month or more." },
    ],
    priceFrom: { amount: 399, per: "month" },
  },
  {
    slug: "business-software-automation",
    name: "Business Software & Automation",
    h1: "Custom Business Software & Automation in Australia",
    metaTitle: "Business Software & Automation | From $499 | Vasdev",
    metaDescription:
      "Custom business software and workflow automation for Australian small businesses: booking systems, client portals, dashboards and integrations. From $499 AUD.",
    intro:
      "I build the tools that small businesses usually cannot get from an agency at a sensible price: booking and quoting systems, client portals, dashboards, and automations that link the systems you already use.",
    h2Sections: [
      {
        heading: "What is custom business software?",
        body: "Custom business software is built around the way your business already works, instead of forcing your process into an off-the-shelf app. Common examples are an online booking and quoting system, a client portal, a simple CRM, an internal dashboard, or an automation that moves data between your website, email, accounting and spreadsheets.",
      },
      {
        heading: "How much does custom business software cost in Australia?",
        body: "Agencies often quote custom software in the thousands of dollars, even for a small tool. Working directly with a developer, small software and automation projects start from $499 AUD. You get a clearly scoped tool for one workflow, built and tested, at a fixed price agreed beforehand. Bigger systems are scoped after a free consultation.",
      },
      {
        heading: "Business automation or a chatbot?",
        body: "If your main problem is answering customer questions and capturing leads, an AI chatbot from $99 is usually enough. If the time goes into admin behind the scenes, such as quoting, scheduling, invoice follow-ups, reporting or moving data between systems, you need workflow automation or a small custom tool. I will say which one is cheaper for your problem.",
      },
    ],
    pricing: "software",
    schema: "BusinessSoftware",
    faqs: [
      { q: "What is custom business software?", a: "It is a tool built around the way your business already works, such as a booking and quoting system, a client portal, a simple CRM or a dashboard, instead of forcing your process into an off-the-shelf app." },
      { q: "How much does custom business software cost?", a: "Small software and automation projects start from $499 AUD, at a fixed price agreed beforehand. Larger systems are scoped after a free consultation." },
      { q: "Do I need a chatbot or business automation?", a: "If your main problem is answering customer questions, a chatbot from $99 is usually enough. If the time goes into admin behind the scenes, such as quoting, scheduling or reporting, you need workflow automation or a small custom tool." },
      { q: "Can you connect software to the tools I already use?", a: "Yes. I can connect it to your website, email, accounting and spreadsheets, so data moves between them without anyone retyping it." },
    ],
    priceFrom: { amount: 499 },
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
      "I am based in Cheltenham on Melbourne's bayside. I work in person or remotely with businesses across Melbourne, from the CBD and inner suburbs to Frankston and the Mornington Peninsula.",
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
      "I work remotely with Sydney businesses through video calls, shared project boards and same-day replies during AEDT business hours. With no travel involved, you pay for the work and not for a Sydney office.",
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
      "I build websites, Shopify stores and AI automation for Brisbane businesses remotely. Brisbane stays on AEST all year, so our working hours overlap for most of the year.",
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
      "Gold Coast service businesses, hospitality venues and retailers need websites that work on a phone first. I build them remotely, in a timezone that closely matches Melbourne, at fixed prices.",
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
      "I am based in Cheltenham, on Melbourne's bayside, so I can meet Melbourne businesses in person or work online. Melbourne customers usually compare a few businesses before they call, so I design sites that load quickly and make your services and prices easy to find.",
    sydney:
      "Sydney is a crowded market, and visitors compare several providers in minutes. I design websites for Sydney businesses that load fast, say clearly what you offer and are set up for Sydney-area searches. I work remotely in the same timezone, with calls and screen shares instead of site visits.",
  },
  "web-development": {
    melbourne:
      "I build custom websites for Melbourne businesses that want something faster and easier to maintain than a typical WordPress site. Because I work on my own, you pay for the development and not for agency overhead.",
    sydney:
      "Sydney businesses want a developer who delivers on time and on budget. I work remotely from Melbourne in the same timezone, so we talk during Sydney business hours, and the work is done by me, not passed to someone else.",
  },
  "seo-optimization": {
    melbourne:
      "Ranking in Melbourne searches means understanding how people look for local services and which suburbs they search from. I combine technical SEO with local search work, such as your Google Business Profile and suburb pages, to help the right Melbourne customers find you.",
    sydney:
      "Sydney is one of the most competitive SEO markets in Australia. I help Sydney businesses by fixing the technical basics, adding local schema markup and targeting suburb-level keywords. Agencies often bill monthly retainers for the same work.",
  },
  "ecommerce-solutions": {
    melbourne:
      "Melbourne's retailers and independent brands increasingly sell online first. I build ecommerce stores for Melbourne businesses with Australian payment gateways, GST-inclusive pricing and a checkout designed for phones.",
    sydney:
      "Sydney shoppers expect a polished, quick checkout, and traffic can spike around sales. I build ecommerce stores for Sydney businesses that are made to stay fast under load.",
  },
  "business-web-solutions": {
    melbourne:
      "From Brunswick cafes to Frankston tradespeople, Melbourne small businesses need websites that bring in enquiries as well as look good. That is what I build.",
    sydney:
      "Sydney small businesses compete in a tough market. Your website has to look credible quickly, answer the obvious questions and make it easy to get in touch. I build that remotely, at a fixed price.",
  },
  "ai-automation": {
    melbourne:
      "Melbourne hospitality, retail, trades and professional services businesses are using automation to cut repetitive admin. Because I am based locally, I can review your current workflows in person and then build automations, chatbots and CRM integrations that fit how you work.",
    sydney:
      "Sydney businesses move quickly and expect their systems to keep up. I build AI automation and automated workflows for Sydney companies remotely, in the same timezone. Customer enquiries, follow-ups and repetitive tasks can run on their own, without an agency's overhead.",
  },
  "shopify-stores": {
    melbourne:
      "Melbourne's independent retailers, makers and local brands are moving online. I am based in Cheltenham and set up Shopify stores for Melbourne businesses with GST and Australian shipping handled correctly, ready to be found in local and AI search.",
    sydney:
      "Sydney shoppers expect a fast, polished checkout. I set up Shopify stores for Sydney businesses remotely, in the same timezone, with clear communication and a launch-ready store at a fixed price.",
  },
  "geo-ai-search-optimisation": {
    melbourne:
      "More Melbourne customers now ask ChatGPT or Google AI for the best local provider instead of searching. I help Melbourne businesses give those tools clear, consistent information to cite, from suburb details to structured data and well-written FAQs.",
    sydney:
      "Sydney is crowded, and AI answers only name a few businesses. I work remotely with Sydney businesses to make their sites easier for AI search tools to read and cite, in the same timezone and without agency overhead.",
  },
  "cloud-devops": {
    melbourne:
      "Melbourne startups and growing small businesses need cloud hosting that can scale. Being local, I can meet in person to review your current setup, then build a cost-conscious cloud setup that fits your business.",
    sydney:
      "Sydney businesses need cloud hosting that is reliable and does not cost more than it should. I design and set up cloud hosting for Sydney companies remotely, in the same timezone, without an agency markup on straightforward setup work.",
  },
};

// Extra Australian cities: a service x city page only exists where a genuinely
// unique intro is written below (avoids thin, near-duplicate doorway pages).
const EXTRA_CITY_INTROS: Record<string, Record<string, string>> = {
  "web-design": {
    brisbane:
      "Brisbane customers often find a business on their phone first. I design mobile-first websites for Brisbane small businesses, working remotely at fixed prices. Brisbane stays on AEST all year, so our working day overlaps with mine for most of the year.",
    perth:
      "Perth businesses often serve customers far from the east-coast agencies. I design websites for Perth small businesses remotely, book calls around the two to three hour time difference and keep pricing fixed and written down.",
    adelaide:
      "Adelaide is only 30 minutes behind Melbourne, so working together is easy. I design clean, mobile-first websites for Adelaide small businesses so they can stand next to bigger competitors online.",
    canberra:
      "Canberra consultancies, professional services and community groups need websites that are clear, accessible and easy to trust. I design them remotely, in the same timezone as Melbourne, at fixed prices.",
    "gold-coast":
      "On the Gold Coast, many visitors look up a business on their phone while they are nearby. I design fast, mobile-first websites for Gold Coast hospitality, service and retail businesses, working remotely.",
    hobart:
      "Hobart businesses often have a strong story and products worth showing. I design websites for Hobart small businesses that present them clearly and load quickly, working remotely at fixed prices.",
  },
  "shopify-stores": {
    brisbane:
      "Brisbane retailers and online brands can start selling quickly on Shopify. I set up Shopify stores for Brisbane businesses remotely, with GST, Australian shipping and payments configured, from $599.",
    perth:
      "Perth online sellers ship long distances to most customers, so clear delivery information and a smooth checkout matter. I set up Shopify stores for Perth businesses remotely, with Australian shipping and payments configured.",
    adelaide:
      "Adelaide makers, food brands and lifestyle labels can reach customers across Australia through Shopify. I set up Shopify stores for Adelaide businesses remotely, from $599, with checkout and shipping configured for Australia.",
    canberra:
      "Canberra businesses selling online need a store that is simple to run and easy for customers to trust. I set up Shopify stores for Canberra businesses remotely, in the Melbourne timezone, from $599.",
    "gold-coast":
      "Gold Coast surf, fashion and lifestyle brands often sell beyond the coast. I set up mobile-first Shopify stores for Gold Coast businesses remotely, with Australian payments and shipping configured, from $599.",
    hobart:
      "Hobart producers and makers sell to customers on the mainland and overseas. I set up Shopify stores for Hobart businesses remotely, with GST and Australian shipping configured, from $599.",
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
