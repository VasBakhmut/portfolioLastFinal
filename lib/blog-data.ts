export interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  slug: string;
  category: string;
  placeholder?: boolean;
  image?: string;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why Melbourne Small Businesses Need AI Automation in 2026",
    excerpt: "From scheduling to customer follow-ups, discover how local businesses are saving 10+ hours per week with simple AI workflows.",
    readTime: "5 min read",
    date: "Coming soon",
    slug: "melbourne-ai-automation-2026",
    category: "AI & Automation",
    placeholder: true,
    image: "/placeholder-blog-1.png",
  },
  {
    title: "Next.js vs WordPress: Which Is Right for Your Business Site?",
    excerpt: "A practical comparison for Australian small business owners — covering performance, SEO, cost, and long-term maintainability.",
    readTime: "7 min read",
    date: "Coming soon",
    slug: "nextjs-vs-wordpress-australia",
    category: "Web Development",
    placeholder: true,
    image: "/placeholder-blog-2.png",
  },
  {
    title: "How to Improve Your Google Rankings Without an Agency",
    excerpt: "A step-by-step guide to technical SEO and content strategy that any small business owner in Australia can follow independently.",
    readTime: "6 min read",
    date: "Coming soon",
    slug: "seo-guide-australian-small-business",
    category: "SEO",
    placeholder: true,
    image: "/placeholder-blog-3.png",
  },
  {
    title: "Building a Telegram Bot with Node.js and Google Speech API",
    excerpt: "A technical walkthrough of how I built an audio-to-text Telegram bot — from webhook setup to cloud deployment.",
    readTime: "8 min read",
    date: "Coming soon",
    slug: "telegram-bot-nodejs-google-speech",
    category: "Web Development",
    placeholder: true,
    image: "/placeholder-blog-4.png",
  },
  {
    title: "n8n vs Zapier: Which Automation Tool Is Better for Your Business?",
    excerpt: "An honest comparison of n8n and Zapier for Australian small businesses — pricing, flexibility, and use cases.",
    readTime: "6 min read",
    date: "Coming soon",
    slug: "n8n-vs-zapier-australia",
    category: "AI & Automation",
    placeholder: true,
    image: "/placeholder-blog-5.png",
  },
  {
    title: "Core Web Vitals Explained for Non-Technical Business Owners",
    excerpt: "What Google's Core Web Vitals actually mean, why they affect your rankings, and what you can do about them today.",
    readTime: "5 min read",
    date: "Coming soon",
    slug: "core-web-vitals-explained",
    category: "SEO",
    placeholder: true,
    image: "/placeholder-blog-6.png",
  },
];

export const BLOG_CATEGORIES = ["All", "AI & Automation", "Web Development", "SEO"];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
