import type { MetadataRoute } from "next";
import { SERVICES, LOCATIONS, hasServiceLocationPage } from "@/lib/seo-pages-data";
import { GUIDES } from "@/lib/guides-data";

const BASE = "https://www.vasdev.au";
const LAST_CONTENT_UPDATE = new Date("2026-11-10");

export const revalidate = 86400; // refresh every 24 hours

async function fetchBlogSlugs(): Promise<{ slug: string; createdAt?: string }[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return [];
    const res = await fetch(`${apiUrl}/api/blogs`, { next: { revalidate: 86400 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fixed date instead of "now": a changing lastmod on every request trains
  // search engines to ignore it. Bump this when page content really changes.
  const now = LAST_CONTENT_UPDATE;

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const serviceLocationPages = SERVICES.flatMap((s) =>
    LOCATIONS.filter((l) => hasServiceLocationPage(s.slug, l.slug)).map((l) => ({
      url: `${BASE}/services/${s.slug}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  const locationPages = LOCATIONS.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const guidePages = GUIDES.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogs = await fetchBlogSlugs();
  const blogPages = blogs.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: b.createdAt ? new Date(b.createdAt) : now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    ...guidePages,
    ...blogPages,
    ...servicePages,
    ...serviceLocationPages,
    ...locationPages,
  ];
}
