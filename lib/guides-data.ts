export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  title: string;
  /** Short <title> tag (60 characters or fewer) */
  seoTitle: string;
  description: string;
  h1: string;
  intro: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: { label: string; href: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "how-much-does-a-website-cost-in-australia",
    title: "How Much Does a Small Business Website Cost in Australia? (2026)",
    seoTitle: "Website Cost in Australia for Small Business (2026) | Vasdev",
    description:
      "What small business websites typically cost in Australia in 2026: agency and freelancer price ranges, Shopify and ecommerce costs, ongoing fees, and what Vasdev charges from $299.",
    h1: "How Much Does a Small Business Website Cost in Australia?",
    intro:
      "Prices for a small business website in Australia run from a few hundred dollars to tens of thousands. This guide covers what drives the price, what published ranges look like in 2026 and what to budget after launch.",
    datePublished: "2026-11-10",
    dateModified: "2026-11-27",
    readTime: "6 min read",
    sections: [
      {
        heading: "Average cost of a small business website in Australia",
        paragraphs: [
          "Published Australian agency guides most often put a professionally built small business website at roughly $2,000 to $8,000. Basic three to six page sites are sometimes quoted from about $1,500, and larger custom builds go well beyond $10,000. Online stores cost more, commonly quoted from around $5,000 and into the tens of thousands for large catalogues.",
          "Most of these figures come from agency pricing pages, so treat them as rough benchmarks. Scope affects the price far more than the city does.",
        ],
      },
      {
        heading: "What decides the price of a website",
        paragraphs: [
          "Four things drive almost every quote: the number of pages, whether the design is custom or based on a template, the features you need (booking, online payments, member areas, integrations), and who builds it.",
          "Freelancers are commonly quoted at roughly $70 to $150 per hour and agencies at roughly $120 to $250 per hour. A freelancer usually has less overhead, while an agency can run several people on one project in parallel.",
        ],
      },
      {
        heading: "Website development cost: template, custom or Shopify?",
        paragraphs: [
          "A template-based site is usually the cheapest to start and suits a simple brochure site. A custom-built site costs more up front, but it can be faster and easier to change as your business grows. Shopify suits shops that want to start selling quickly with predictable running costs.",
          "With Shopify, the monthly subscription is paid to Shopify on top of the build price. With a custom site, there is no platform fee, but hosting and updates are your responsibility or part of a care plan.",
        ],
      },
      {
        heading: "Costs after launch",
        paragraphs: [
          "Plan for ongoing costs: a domain name, hosting, security and software updates, small content changes and, if you want to be found on Google, SEO.",
          "Agency care plans are often advertised from around $97 per month. My Basic Care plan covers hosting, backups and minor edits from $59 per month, and ongoing SEO care starts from $199 per month.",
        ],
      },
      {
        heading: "Does the city matter?",
        paragraphs: [
          "Not much. A website for a Melbourne, Sydney, Brisbane or Perth business is priced mainly on scope. I work remotely with small businesses across Australia, so you do not pay extra for a local office.",
        ],
      },
      {
        heading: "What Vasdev charges",
        paragraphs: [
          "I publish starting prices so you can plan before we talk: websites from $299, Shopify stores from $599, custom ecommerce from $799, AI chatbots and automation from $99, and ongoing GEO and AI search optimisation from $399 per month.",
          "These are starting prices. The final quote depends on scope and is agreed in writing before any work begins.",
        ],
      },
      {
        heading: "How to compare quotes properly",
        paragraphs: [
          "Two quotes are only comparable if they include the same things. Ask each provider whether the price covers design, the number of pages, mobile optimisation, basic SEO, contact forms, hosting, revisions, and a handover so you own your site and domain.",
          "Be wary of any quote that guarantees a first-page ranking. Nobody can guarantee that.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much should a small business spend on a website in Australia?",
        a: "Many agency guides suggest $2,000 to $8,000 for a professionally built small business site, while a simple landing page can cost far less. The right amount depends on how many pages and features you need and how much the website contributes to your sales.",
      },
      {
        q: "Is a cheaper freelance web developer worse than an agency?",
        a: "Not necessarily. Freelancers often charge less because they have lower overheads. Check live examples of their work, ask exactly what is included, and make sure you will own your website and domain at the end.",
      },
      {
        q: "What ongoing costs should I budget for?",
        a: "At minimum, a domain name and hosting, plus security updates and occasional edits. If you want to be found in search, add SEO. Care plans from $59 per month cover hosting, backups and minor edits with Vasdev.",
      },
      {
        q: "How much does an online store cost in Australia?",
        a: "Published ranges for ecommerce start from around $5,000 at agencies. A Shopify store set up by a specialist freelancer can cost much less: Vasdev Shopify stores start from $599, plus Shopify's own monthly subscription paid directly to Shopify.",
      },
    ],
    related: [
      { label: "Web design services", href: "/services/web-design" },
      { label: "Shopify stores from $599", href: "/services/shopify-stores" },
      { label: "How to choose a web developer", href: "/guides/how-to-choose-a-web-developer-small-business-australia" },
      { label: "Ecommerce website cost guide", href: "/guides/ecommerce-website-cost-australia" },
    ],
  },
  {
    slug: "how-to-choose-a-web-developer-small-business-australia",
    title: "How to Choose a Web Developer for Your Small Business in Australia",
    seoTitle: "How to Choose a Web Developer in Australia | Vasdev",
    description:
      "A practical checklist for choosing a web developer in Australia: freelancer or agency, what to check in a portfolio, which questions to ask, and the red flags to avoid.",
    h1: "How to Choose a Web Developer for Your Small Business in Australia",
    intro:
      "A good web developer saves you months of frustration. A poor one can leave you with a slow site you do not own. Use this checklist before you sign anything.",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    readTime: "5 min read",
    sections: [
      {
        heading: "1. Decide what you actually need",
        paragraphs: [
          "A simple brochure website, an online store and a custom business system are different jobs, and they suit different people. A designer focuses on how a site looks, while a developer builds how it works. Many small businesses need both in one person.",
        ],
      },
      {
        heading: "2. Freelancer or agency?",
        paragraphs: [
          "A freelancer usually costs less and you deal directly with the person doing the work. An agency can put several people on a large project at once. For most small business websites and Shopify stores, an experienced freelancer is a good fit.",
        ],
      },
      {
        heading: "3. Look at live websites, not just screenshots",
        paragraphs: [
          "Ask for links to real, live websites and open them on your phone. Check that they load quickly and read clearly. I have built live sites for Australian businesses, for example for a Sydney fashion photographer, a Sydney massage therapist, an online Ukrainian food shop and a Melbourne community centre, and you are welcome to review them.",
        ],
      },
      {
        heading: "4. Ask who owns the website and domain",
        paragraphs: [
          "You should own your domain name, your content and your site after it is finished. Ask directly what you receive at handover, and avoid arrangements where you can never move away from the builder.",
        ],
      },
      {
        heading: "5. Check speed, mobile design and SEO basics",
        paragraphs: [
          "Most visitors arrive on a phone. A good developer builds mobile-first, keeps pages fast, and sets up the technical SEO basics: page titles, descriptions, clean URLs and structured data, so your business can be found in Google and in AI tools such as ChatGPT and Perplexity.",
        ],
      },
      {
        heading: "6. Get a written quote that lists what is included",
        paragraphs: [
          "A good quote names the number of pages, revisions, hosting, what happens after launch and the total price. If two quotes differ a lot, compare what each includes before you compare the totals.",
        ],
      },
      {
        heading: "Red flags to avoid",
        paragraphs: [
          "Be wary of guaranteed first-page rankings, no live examples, vague pricing, pressure to decide the same day, and any arrangement where you do not receive access to your own website.",
        ],
      },
      {
        heading: "Working with a developer in another city",
        paragraphs: [
          "Most of the work is done online anyway. I am based in Melbourne and work remotely with businesses across Australia, including Sydney, Brisbane, Perth, Adelaide, Canberra, the Gold Coast and Hobart, with clear scoping and fixed prices agreed upfront.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I hire a freelancer or an agency for my small business website?",
        a: "For most small business websites and Shopify stores, an experienced freelancer is a strong choice because you work directly with the person building your site and usually pay less overhead. Larger projects with many moving parts can suit an agency.",
      },
      {
        q: "What should I ask a web developer before hiring them?",
        a: "Ask to see live websites they built, what exactly the quote includes, who owns the website and domain at the end, how they handle SEO basics and mobile speed, and what support is available after launch.",
      },
      {
        q: "Does my web developer need to be in my city?",
        a: "No. Websites are built and reviewed online, and good developers communicate clearly across timezones. What matters most is the quality of their previous work and how clearly they scope the project.",
      },
    ],
    related: [
      { label: "Web development services", href: "/services/web-development" },
      { label: "Website cost guide", href: "/guides/how-much-does-a-website-cost-in-australia" },
      { label: "Get a free quote", href: "/#contact" },
    ],
  },
  {
    slug: "wordpress-vs-shopify-vs-custom-website-australia",
    title: "WordPress vs Shopify vs a Custom Website: Which Is Right for Your Australian Business?",
    seoTitle: "WordPress vs Shopify vs Custom Website in Australia | Vasdev",
    description:
      "A plain-English comparison of WordPress, Shopify and a custom-built website for Australian small businesses: cost, speed, SEO, ease of editing, and which one suits a brochure site or an online store.",
    h1: "WordPress vs Shopify vs a Custom Website for Your Australian Business",
    intro:
      "Choosing the platform is the first big decision for a new website. Here is a plain comparison of WordPress, Shopify and a custom-built website, and which one tends to suit which kind of business.",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    readTime: "6 min read",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "If you sell products online, Shopify is usually the quickest and safest choice. If you want a content-heavy website that a non-technical person edits often, WordPress is a common fit. If speed, custom features and long-term control matter most, a custom-built site is a strong option.",
        ],
      },
      {
        heading: "Shopify: best for online stores",
        paragraphs: [
          "Shopify handles hosting, security, checkout and payments in one platform, so you can launch a store quickly and manage products yourself. You pay a monthly subscription and transaction fees to Shopify on top of the build cost. For most small online stores in Australia, this is the simplest way to start selling.",
        ],
      },
      {
        heading: "WordPress: flexible and widely used",
        paragraphs: [
          "WordPress is free software with a huge ecosystem and many developers. It suits blogs and content sites, and you can add a shop with WooCommerce. The trade-offs are that plugins need regular updates, hosting quality varies, and poorly configured sites can be slow and a security risk.",
        ],
      },
      {
        heading: "Custom website: fast and fully yours",
        paragraphs: [
          "A custom-built website is coded around your business instead of a template. Sites built this way are typically very quick and have no plugin maintenance, and you own the code. The trade-off is that changes usually go through a developer, or through an editing tool I connect for you.",
        ],
      },
      {
        heading: "Which one should you pick?",
        paragraphs: [
          "Selling products and want to start quickly: Shopify. A content website you will edit yourself: WordPress. A fast brochure site or a business with custom needs and a focus on search visibility: a custom-built site. If you are unsure, describe what you need and I will recommend one.",
        ],
      },
      {
        heading: "What this means for Google and AI search",
        paragraphs: [
          "The platform matters less than the basics: fast pages, clear headings, structured data, and content that answers customers' questions. Any of the three can rank well when it is built and maintained properly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Shopify better than WordPress for an online store?",
        a: "For most small online stores, yes: Shopify bundles hosting, checkout and payments, so there is less to maintain. WordPress with WooCommerce offers more control but needs more upkeep.",
      },
      {
        q: "Is a custom website better than WordPress for SEO?",
        a: "Custom-built sites are typically very fast and have no plugin overhead, which helps. But a well-built WordPress site can also rank well. What matters most is speed, structure and useful content.",
      },
      {
        q: "How much does a Shopify store cost to set up in Australia?",
        a: "Vasdev Shopify stores start from $599, plus Shopify's own monthly subscription paid directly to Shopify. Agency quotes for larger stores are commonly much higher.",
      },
    ],
    related: [
      { label: "Shopify stores from $599", href: "/services/shopify-stores" },
      { label: "Web development services", href: "/services/web-development" },
      { label: "Website cost guide", href: "/guides/how-much-does-a-website-cost-in-australia" },
    ],
  },
  {
    slug: "ai-search-optimisation-geo-guide-australia",
    title: "AI Search Optimisation (GEO): A Practical Guide for Australian Businesses",
    seoTitle: "AI Search Optimisation (GEO) Guide Australia | Vasdev",
    description: "What AI search optimisation (GEO) is, how AI tools decide which businesses to name, and the practical steps an Australian business can take.",
    h1: "AI Search Optimisation (GEO): What Australian Businesses Can Do",
    intro: "More people now ask ChatGPT, Perplexity or Google's AI for a recommendation instead of scrolling through a list of links, and those tools name only a few businesses in each answer. Whether yours is one of them depends partly on things you control.",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    readTime: "6 min read",
    sections: [
      {
        heading: "What is AI search optimisation?",
        paragraphs: [
          "AI search optimisation, also called GEO (generative engine optimisation) or AI search optimization in US spelling, is the work of making your business easy for AI tools to find, understand and mention. Tools such as ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot give one written answer and usually name only a few businesses.",
          "It builds on ordinary SEO. A site that search engines cannot read or trust is unlikely to be picked by an AI tool either.",
        ],
      },
      {
        heading: "How AI tools decide which businesses to mention",
        paragraphs: [
          "Nobody outside the AI companies knows the exact weighting, so anyone who claims to have a formula is guessing. These tools can only work with what they can read, so they lean on pages they can access, on directories and review sites, and on business details that match across the web.",
          "So the useful work is to write pages that answer real questions and to keep your business details identical everywhere. Reviews and mentions on other sites help too.",
        ],
      },
      {
        heading: "Practical steps you can take",
        paragraphs: [
          "Let AI crawlers reach your site. Many sites block them by accident in the robots file, which stops those tools reading your pages at all.",
          "Write service pages that say what you do, where you work and what it costs, in plain sentences that are easy to quote. Add a short FAQ that answers the questions customers really ask.",
          "Keep your business name, phone number and suburb identical on your website, Google Business Profile and every directory. Small differences make you look like different businesses.",
          "Collect genuine reviews, especially on Google. They are one of the clearest signs that a business is real and used.",
          "Get listed in reputable directories and on profiles such as LinkedIn. Mentions on other sites help AI tools confirm who you are.",
        ],
      },
      {
        heading: "What GEO cannot do",
        paragraphs: [
          "No one can guarantee that ChatGPT or any other tool will recommend your business. Results depend on your competition and your reviews, and the tools change without notice.",
          "A sensible way to measure progress is to ask the AI tools the questions your customers ask, such as who is a good web developer in your city, and note which businesses are named each month.",
        ],
      },
      {
        heading: "Does your city matter?",
        paragraphs: [
          "For a local business, yes. Name your city and suburbs on your pages, keep your Google Business Profile complete and make sure the area you serve is stated clearly. An AI tool answering a Melbourne question looks for businesses that say they work in Melbourne.",
        ],
      },
      {
        heading: "What Vasdev does",
        paragraphs: [
          "I start with an AI-readiness check of your site and online presence, rewrite the key pages and FAQs so the answers are easy to quote, and track which tools mention you. Ongoing GEO work starts from $399 per month, and I do not promise placement in any AI answer.",
        ],
      },
    ],
    faqs: [
      { q: "What does GEO stand for?", a: "GEO stands for generative engine optimisation. It is also called AI search optimisation, or AI search optimization in US spelling." },
      { q: "Is GEO different from SEO?", a: "SEO aims to rank your pages in a list of links. GEO aims to get your business named in the single written answer an AI tool gives. GEO builds on good SEO rather than replacing it." },
      { q: "Can I pay to be included in ChatGPT answers?", a: "No. There is no paid placement in the standard answers, and nobody can honestly sell you one. You can improve how readable and trustworthy your business looks to these tools." },
      { q: "How long does AI search optimisation take?", a: "There is no fixed timeline. Changes to your pages can be picked up within weeks, while reviews and mentions on other sites build up over months." },
    ],
    related: [
      { label: "GEO and AI search optimisation service", href: "/services/geo-ai-search-optimisation" },
      { label: "SEO optimisation", href: "/services/seo-optimization" },
      { label: "Website cost guide", href: "/guides/how-much-does-a-website-cost-in-australia" },
    ],
  },
  {
    slug: "business-automation-small-business-australia",
    title: "Business Automation for Small Businesses: 10 Tasks You Can Automate",
    seoTitle: "Business Automation for Small Business Australia | Vasdev",
    description: "Ten repetitive small business tasks that can be automated, what they cost to set up, and how to decide whether business automation is worth it for you.",
    h1: "Business Automation for Small Business: 10 Tasks You Can Automate",
    intro: "Most small businesses lose hours each week to admin that follows the same steps every time. Business automation hands those steps to software.",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    readTime: "6 min read",
    sections: [
      {
        heading: "Which tasks are worth automating?",
        paragraphs: [
          "A task is a good candidate if it happens often, follows the same steps each time and does not need personal judgement. Sending a reminder is easy to automate. Handling an unhappy customer is not.",
          "A quick test is to write down the steps. If you can list them in a few lines without saying it depends, software can usually do it.",
        ],
      },
      {
        heading: "Ten tasks you can automate",
        paragraphs: [
          "1. Appointment reminders and booking confirmations, so fewer people forget to turn up.",
          "2. A first reply to every new enquiry, so people know you received it while you are busy.",
          "3. Sending website form enquiries straight into a spreadsheet or customer list, instead of copying them by hand.",
          "4. Invoice emails when a job is finished.",
          "5. Payment reminders for invoices that are overdue.",
          "6. Follow-ups on quotes that have not had a reply.",
          "7. Review requests sent a few days after a job is complete.",
          "8. Welcome emails and checklists for new clients.",
          "9. A weekly summary of sales or bookings sent to your inbox.",
          "10. A chatbot that answers common questions and collects contact details outside business hours.",
        ],
      },
      {
        heading: "What not to automate",
        paragraphs: [
          "Complaints, sensitive conversations and anything where a wrong message could cost you a customer should stay with a person. A chatbot can pass these to you, but it should not handle them alone.",
        ],
      },
      {
        heading: "How to get started",
        paragraphs: [
          "Pick one task, not ten. Write down the steps, set it up, and test it on a few real customers before you trust it fully. Once it runs well, move to the next task.",
          "If the tools you use already have built-in reminders or follow-ups, try those first. Custom work makes sense when you need tools to talk to each other, or when the steps are specific to your business.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Costs vary with how many tools are involved. At Vasdev, AI chatbots and simple automations start from $99, and custom business software starts from $499, both at a fixed price agreed before work begins.",
        ],
      },
    ],
    faqs: [
      { q: "How much does business automation cost for a small business?", a: "A simple automation or chatbot can start from about $99 with Vasdev, while larger custom tools start from $499. The final price depends on what needs to connect and how many steps are involved." },
      { q: "Do I need to change the software I already use?", a: "Usually not. Most automation connects tools you already have, such as your website, email, accounting software and spreadsheets." },
      { q: "Will my customers notice that something is automated?", a: "They notice good automation as fast, consistent replies. It works best when the messages are written in your normal voice and a person takes over for anything complicated." },
      { q: "Is automation worth it for a very small business?", a: "It can be, if a few repeated tasks take up hours each week. I estimate the time saving with you before you pay for anything." },
    ],
    related: [
      { label: "AI chatbots and automation", href: "/services/ai-automation" },
      { label: "Business software and automation", href: "/services/business-software-automation" },
      { label: "Website cost guide", href: "/guides/how-much-does-a-website-cost-in-australia" },
    ],
  },
  {
    slug: "ecommerce-website-cost-australia",
    title: "How Much Does an Ecommerce Website Cost in Australia? (2026)",
    seoTitle: "Ecommerce Website Cost in Australia (2026) | Vasdev",
    description: "What an online store costs in Australia in 2026: Shopify, custom builds and agency ranges, plus the running costs that surprise new store owners.",
    h1: "How Much Does an Ecommerce Website Cost in Australia?",
    intro: "The price of an online store depends far more on what you sell and how you sell it than on where you are.",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    readTime: "6 min read",
    sections: [
      {
        heading: "What an online store typically costs",
        paragraphs: [
          "Published Australian agency guides most often start ecommerce builds at around $5,000 and run into the tens of thousands for large catalogues or custom features. These figures mostly come from agency pricing pages, so treat them as rough benchmarks.",
          "A small store built by a specialist freelancer on a standard platform can cost much less. The difference is mostly overhead and scope.",
        ],
      },
      {
        heading: "Shopify, a WordPress store or a custom build?",
        paragraphs: [
          "Shopify is the quickest way to launch. You manage products yourself, hosting and security are handled by Shopify, and the running costs are predictable.",
          "A WordPress store can work if you already use WordPress, but it needs regular updates. A fully custom store gives you complete control and no platform subscription, but it costs more up front and is only worth it if your needs are unusual.",
        ],
      },
      {
        heading: "What drives the price",
        paragraphs: [
          "The number of products, the type of products (simple items or ones with many options), custom design versus a theme, how many payment and shipping options you need, and any special features such as subscriptions or a booking system.",
        ],
      },
      {
        heading: "Running costs to plan for",
        paragraphs: [
          "Plan for the platform subscription (on Shopify, paid directly to Shopify), card payment fees on each sale, a domain name, any paid apps, and your time for product photos and descriptions.",
          "In Australia, show prices with GST included so customers see one price at checkout, and set clear shipping rates, for example Australia Post options, so there are no surprises at the end.",
        ],
      },
      {
        heading: "How to keep the cost down",
        paragraphs: [
          "Start with a small catalogue and add products later. Use a good theme instead of a fully custom design, and add features once the store is making sales. A simple, fast store that launches now is usually better than a large one that launches in six months.",
        ],
      },
      {
        heading: "What Vasdev charges",
        paragraphs: [
          "Shopify stores start from $599 AUD, and custom ecommerce builds from $799 AUD for up to 50 products, with cart, checkout and an Australian payment gateway. The Shopify subscription is separate and paid to Shopify. The final price is agreed in writing before any work begins.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a Shopify store cost to set up in Australia?", a: "A basic template setup can cost a few hundred dollars, while agency work often starts around $5,000. Vasdev Shopify stores start from $599, plus Shopify's own monthly subscription." },
      { q: "Do I need a developer to build an online store?", a: "Not always. Simple stores can be set up by the owner. A developer helps when you want a polished design, correct GST and shipping settings, or a faster launch." },
      { q: "What are the ongoing costs of an online store?", a: "The platform subscription, card payment fees, a domain, paid apps and your own time for products. A care plan from $59 per month with Vasdev can cover hosting, backups and small edits on custom sites." },
      { q: "Can I add products myself after launch?", a: "Yes. I show you how to add and edit products, so you do not need a developer for everyday changes." },
    ],
    related: [
      { label: "Shopify stores from $599", href: "/services/shopify-stores" },
      { label: "Ecommerce development", href: "/services/ecommerce-solutions" },
      { label: "Small business website cost guide", href: "/guides/how-much-does-a-website-cost-in-australia" },
    ],
  },
  {
    slug: "hire-shopify-developer-melbourne",
    title: "How to Hire a Shopify Developer in Melbourne (and What It Costs)",
    seoTitle: "Hire a Shopify Developer in Melbourne | Costs | Vasdev",
    description: "What a Shopify developer does, what to ask before you hire one in Melbourne, typical prices, and whether you need a local developer at all.",
    h1: "How to Hire a Shopify Developer in Melbourne",
    intro: "Shopify developers range from people who set up a template in a day to agencies that build custom features, and prices follow. Knowing which kind you need is most of the decision.",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    readTime: "5 min read",
    sections: [
      {
        heading: "What a Shopify developer does",
        paragraphs: [
          "At the simple end, a developer sets up your store: they choose and customise a theme, add your products, and configure payments, taxes and shipping. At the more advanced end, they add custom features or connect the store to other tools.",
          "Many small businesses only need the first kind of work, so check that you are not paying for custom development you do not need.",
        ],
      },
      {
        heading: "Do you need a developer in Melbourne?",
        paragraphs: [
          "It helps if you like meeting in person, but it is not necessary. Most of the work is done online, and calls and screen shares work well. What matters more is that the developer understands Australian GST, shipping and payment options.",
          "I am based in Cheltenham, so I can meet Melbourne clients in person, and I also work with stores across Australia.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Published prices vary widely. A basic template setup can cost a few hundred dollars, while agency work often starts around $5,000. The gap comes from scope, overhead and how much custom work is involved.",
          "Shopify's monthly subscription is separate. You pay it directly to Shopify, so the store account belongs to you.",
        ],
      },
      {
        heading: "Questions to ask before you hire",
        paragraphs: [
          "Can I see stores you have built that are live now?",
          "Will the store be set up on my own Shopify account, so I own it from day one?",
          "What exactly is included: number of products, pages, payments, shipping and GST settings?",
          "How long will it take, and when will I see a preview?",
          "What support do I get after launch, and what does it cost?",
        ],
      },
      {
        heading: "Red flags",
        paragraphs: [
          "Be careful if a developer builds your store on their own account, gives no written scope, refuses to show live work or guarantees sales. A store is a business tool, and no one can promise that it will sell.",
        ],
      },
      {
        heading: "What Vasdev does",
        paragraphs: [
          "Shopify stores start from $599 AUD and include your branding, your products, and checkout set up for Australia with GST and local shipping. The price is fixed and agreed in writing before any work begins.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a Shopify developer cost in Melbourne?", a: "Prices range from a few hundred dollars for a basic setup to $5,000 and more at agencies. Vasdev Shopify stores start from $599, plus Shopify's own subscription." },
      { q: "Should my Shopify developer be local?", a: "Not necessarily. Online calls and screen shares work well. What matters more is experience with Australian GST, shipping and payment options." },
      { q: "Who owns the Shopify store?", a: "You should. Ask for the store to be created on your own Shopify account from the start, so you keep full control if you change developers." },
      { q: "How long does it take to set up a Shopify store?", a: "A small store with a few dozen products usually takes one to two weeks, depending on how quickly you provide product details and photos." },
    ],
    related: [
      { label: "Shopify stores from $599", href: "/services/shopify-stores" },
      { label: "Shopify developer in Melbourne", href: "/services/shopify-stores/melbourne" },
      { label: "Ecommerce website cost guide", href: "/guides/ecommerce-website-cost-australia" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
