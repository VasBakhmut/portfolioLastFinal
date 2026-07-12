const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4001";

// ── Raw shapes from the NestJS backend ────────────────────────────────────────

export interface ApiProject {
  _id: string;
  title: string;
  price: string;
  categories: string[];
  description: string;
  tags: string[];
  image: string;
  linkType: "live" | "private";
  linkUrl?: string;
  createdAt: string;
}

export interface ApiBlog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: number;
  content?: string;
  createdAt: string;
}

// ── Fetch helpers (server-side ISR) ───────────────────────────────────────────

export async function getProjects(): Promise<ApiProject[]> {
  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      next: { revalidate: 86400, tags: ["projects"] },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getBlogs(): Promise<ApiBlog[]> {
  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 86400, tags: ["blogs"] },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<ApiBlog | null> {
  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
      next: { revalidate: 86400, tags: ["blogs", `blog-${slug}`] },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
