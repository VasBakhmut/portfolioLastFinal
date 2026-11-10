# Vasdev — vasdev.au

Source code of **[www.vasdev.au](https://www.vasdev.au)**, the website of **Vasdev**, the business of
**Vasyl Bakhmut** — a Melbourne-based full-stack web developer and AI automation specialist.

Vasdev builds websites, Shopify stores and AI automation (n8n workflows, chatbots) for Australian small
businesses, and helps them get found in Google and in AI search (SEO and GEO).

## What the site covers

- Websites from $199, Shopify stores from $599, AI automation from $99, GEO (AI search optimisation) from $399/month
- Service pages for Melbourne and Sydney, FAQ, blog and a contact form
- SEO / GEO foundations: structured data (JSON-LD), `sitemap.xml`, `robots.txt`, `llms.txt`,
  generated Open Graph images

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, Framer Motion
- Deployed on Vercel

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint     # ESLint
```

Set `NEXT_PUBLIC_API_URL` to the URL of the backend API (blog posts, contact form) in `.env.local`.

## Author

Built by **Vasyl Bakhmut**, founder of Vasdev — Melbourne web developer & AI automation.

- Website: https://www.vasdev.au
- LinkedIn: https://www.linkedin.com/in/vasyl-bakhmut-dev
- GitHub: https://github.com/VasBakhmut
