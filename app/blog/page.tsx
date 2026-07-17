import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBlogs, type ApiBlog } from "@/lib/api";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog — Articles & Resources",
  description:
    "Practical guides on web development, AI automation, and SEO for Australian small businesses. Written by Vasyl Bakhmut, full-stack developer based in Melbourne.",
  alternates: { canonical: "https://www.vasdev.au/blog" },
  openGraph: {
    title: "Articles & Resources | Vasyl Bakhmut",
    description:
      "Practical guides on web development, AI automation, and SEO for Australian small businesses.",
    url: "https://vasdev.au/blog",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Resources | Vasyl Bakhmut",
    description:
      "Practical guides on web development, AI automation, and SEO for Australian small businesses.",
  },
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div style={{ minHeight: "100svh", background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Header */}
      <div style={{ padding: "7rem 1.5rem 3rem", textAlign: "center", background: "linear-gradient(to bottom, var(--accent-glow), transparent)", position: "relative" }}>
        <Link
          href="/"
          style={{ position: "absolute", top: "1.5rem", left: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </Link>

        <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
          &#8212; Blog &#8212;
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Articles &amp;{" "}
          <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Resources
          </span>
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>
          Practical guides on web development, AI automation, and SEO for Australian small businesses.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem 5rem" }}>
        {blogs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 1rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            Articles coming soon — check back shortly.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="blog-page-grid">
            {blogs.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-page-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .blog-page-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function BlogCard({ post }: { post: ApiBlog }) {
  const date = new Date(post.createdAt).toLocaleDateString("en-AU", {
    year: "numeric", month: "short", day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: "var(--bg-card)", backdropFilter: "blur(16px)",
          border: "1px solid var(--border)", borderRadius: "1.125rem",
          overflow: "hidden", display: "flex", flexDirection: "column",
          transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s", cursor: "pointer",
        }}
        className="blog-page-card"
      >
        <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-secondary)", overflow: "hidden" }}>
          {post.image && (
            <Image src={post.image} alt={post.title} fill sizes="(max-width: 600px) 100vw, 33vw" style={{ objectFit: "cover" }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--accent-glow), transparent)" }} />
          <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: "100px", background: "var(--btn-outline-color)", color: "var(--btn-outline-text)" }}>
            {post.category}
          </span>
        </div>

        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            <span>{date}</span><span>&#183;</span><span>{post.readTime} min read</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.5rem" }}>
            {post.title}
          </h2>
          <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "0.875rem" }}>
            {post.excerpt}
          </p>
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--btn-outline-color)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Read Article
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
