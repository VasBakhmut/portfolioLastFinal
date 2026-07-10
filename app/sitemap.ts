import type { MetadataRoute } from "next";
import { SERVICES, LOCATIONS } from "@/lib/seo-pages-data";

const BASE = "https://vasdev.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const serviceLocationPages = SERVICES.flatMap((s) =>
    LOCATIONS.map((l) => ({
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

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...servicePages,
    ...serviceLocationPages,
    ...locationPages,
  ];
}
