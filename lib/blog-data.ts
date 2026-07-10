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
    excerpt: "Melbourne small business owners are saving 10+ hours a week with n8n automation - from scheduling to customer follow-ups, here is how to get started.",
    readTime: "5 min read",
    date: "Coming soon",
    slug: "melbourne-ai-automation-2026",
    category: "AI & Automation",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Next.js vs WordPress: Which Is Right for Your Business Site?",
    excerpt: "A practical comparison for Melbourne and Sydney small business owners - covering performance, SEO, cost, and long-term maintainability for Australian sites.",
    readTime: "7 min read",
    date: "Coming soon",
    slug: "nextjs-vs-wordpress-australia",
    category: "Web Development",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "How to Improve Your Google Rankings Without an Agency",
    excerpt: "A step-by-step guide any Melbourne web developer or small business owner in Australia can follow - no agency required.",
    readTime: "6 min read",
    date: "Coming soon",
    slug: "seo-guide-australian-small-business",
    category: "SEO",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Building a Telegram Bot with Node.js and Google Speech API",
    excerpt: "A technical walkthrough of how I built an audio-to-text Telegram bot — from webhook setup to cloud deployment.",
    readTime: "8 min read",
    date: "Coming soon",
    slug: "telegram-bot-nodejs-google-speech",
    category: "Web Development",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "n8n vs Zapier: Which Automation Tool Is Better for Your Business?",
    excerpt: "An honest comparison of n8n and Zapier for Australian small businesses — pricing, flexibility, and use cases.",
    readTime: "6 min read",
    date: "Coming soon",
    slug: "n8n-vs-zapier-australia",
    category: "AI & Automation",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Core Web Vitals Explained for Non-Technical Business Owners",
    excerpt: "What Google's Core Web Vitals actually mean, why they affect your rankings, and what you can do about them today.",
    readTime: "5 min read",
    date: "Coming soon",
    slug: "core-web-vitals-explained",
    category: "SEO",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&auto=format&fit=crop&q=60",
  },
];

export const BLOG_CATEGORIES = ["All", "AI & Automation", "Web Development", "SEO"];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
