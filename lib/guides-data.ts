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
    description:
      "What small business websites typically cost in Australia in 2026: agency and freelancer price ranges, Shopify and ecommerce costs, ongoing fees, and what Vasdev charges from $199.",
    h1: "How Much Does a Small Business Website Cost in Australia?",
    intro:
      "Prices for a small business website in Australia range from a few hundred dollars to tens of thousands. This guide explains what drives the price, what published market ranges look like in 2026, and what to budget for after launch.",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    readTime: "6 min read",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Published Australian agency guides most often put a professionally built small business website at roughly $2,000 to $8,000. Basic three to six page sites are sometimes quoted from about $1,500, and larger custom builds go well beyond $10,000. Online stores cost more, commonly quoted from around $5,000 and into the tens of thousands for large catalogues.",
          "Most of these figures come from agency pricing pages, so treat them as benchmarks rather than rules. The scope of the project matters far more than the city you are in.",
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
        heading: "Costs after launch",
        paragraphs: [
          "A website is not a one-off purchase. Budget for a domain name, hosting, security and software updates, small content changes, and search engine optimisation if you want to be found on Google.",
          "Agency care plans are often advertised from around $97 per month. My Basic Care plan covers hosting, backups and minor edits from $29 per month, and ongoing SEO care starts from $199 per month.",
        ],
      },
      {
        heading: "Does the city matter?",
        paragraphs: [
          "Less than most people expect. A website for a Melbourne, Sydney, Brisbane or Perth business is priced mainly on scope. I work remotely with small businesses across Australia, so you do not pay extra for a local office.",
        ],
      },
      {
        heading: "What Vasdev charges",
        paragraphs: [
          "I publish starting prices so you can plan before we talk: landing page websites from $199, multi-page business websites from $299, Shopify stores from $599, custom ecommerce from $799, AI chatbots and automation from $99, and ongoing GEO and AI search optimisation from $399 per month.",
          "These are starting prices. The final quote depends on scope and is agreed in writing before any work begins.",
        ],
      },
      {
        heading: "How to compare quotes properly",
        paragraphs: [
          "Two quotes are only comparable if they include the same things. Ask each provider whether the price covers design, the number of pages, mobile optimisation, basic SEO, contact forms, hosting, revisions, and a handover so you own your site and domain.",
          "Be cautious of any quote that promises a guaranteed first-page ranking. Nobody can honestly guarantee that.",
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
        a: "At minimum, a domain name and hosting, plus security updates and occasional edits. If you want to be found in search, add SEO. Care plans from $29 per month cover hosting, backups and minor edits with Vasdev.",
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
    ],
  },
  {
    slug: "how-to-choose-a-web-developer-small-business-australia",
    title: "How to Choose a Web Developer for Your Small Business in Australia",
    description:
      "A practical checklist for choosing a web developer in Australia: freelancer or agency, what to check in a portfolio, which questions to ask, and the red flags to avoid.",
    h1: "How to Choose a Web Developer for Your Small Business in Australia",
    intro:
      "The right web developer saves you months of frustration, and the wrong one can leave you with a slow site you do not even own. Use this checklist before you sign anything.",
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
    slug: "wordpress-vs-shopify-vs-nextjs-australia",
    title: "WordPress vs Shopify vs Next.js: Which Is Right for Your Australian Business?",
    description:
      "A plain-English comparison of WordPress, Shopify and Next.js for Australian small businesses: cost, speed, SEO, ease of editing, and which one suits a brochure site or an online store.",
    h1: "WordPress vs Shopify vs Next.js for Your Australian Business Website",
    intro:
      "Choosing the platform is the first big decision for a new website. Here is an honest comparison of WordPress, Shopify and Next.js, and which one tends to suit which kind of business.",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    readTime: "6 min read",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "If you sell products online, Shopify is usually the quickest and safest choice. If you want a content-heavy website that a non-technical person edits often, WordPress is a common fit. If speed, custom features and long-term control matter most, a custom Next.js site is hard to beat.",
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
        heading: "Next.js: fast and fully custom",
        paragraphs: [
          "Next.js is a modern framework for building fast, SEO-friendly websites and web applications. Sites built with it are typically very quick and have no plugin maintenance, and you own the code. The trade-off is that changes usually go through a developer, or through a content system we connect for you.",
        ],
      },
      {
        heading: "Which one should you pick?",
        paragraphs: [
          "Selling products and want to start quickly: Shopify. A content website you will edit yourself: WordPress. A fast brochure site or a business with custom needs and a focus on search visibility: Next.js. If you are unsure, describe what you need and I will recommend one honestly.",
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
        q: "Is Next.js better than WordPress for SEO?",
        a: "Next.js sites are typically very fast and have no plugin overhead, which helps. But a well-built WordPress site can also rank well. What matters most is speed, structure and useful content.",
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
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
