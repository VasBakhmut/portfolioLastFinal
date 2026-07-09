import Link from "next/link";
import { getBlogPost, BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Vasyl Bakhmut`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div style={{ minHeight: "100svh", background: "var(--bg-primary)", color: "var(--text-primary)", fontFamily: "var(--font-body, Inter, sans-serif)" }}>
      {/* Back nav */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "1rem 1.5rem", background: "var(--nav-bg)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            All Articles
          </Link>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.2rem 0.7rem", borderRadius: "100px", background: "var(--accent)", color: "#fff" }}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Article */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "6rem 1.5rem 5rem" }}>
        {/* Meta */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.date}</span>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>&#183;</span>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: "-0.025em",
            color: "var(--text-primary)",
            marginBottom: "1.25rem",
          }}
        >
          {post.title}
        </h1>

        <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
          {post.excerpt}
        </p>

        {/* Coming soon state */}
        {post.placeholder && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--bg-card)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--border)",
              borderRadius: "1.25rem",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>&#9997;&#65039;</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Article Coming Soon
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 2rem" }}>
              This article is currently being written. Check back soon or get in touch if you&apos;d like to be notified when it&apos;s published.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", borderRadius: "0.625rem", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", border: "1.5px solid var(--accent)", color: "var(--accent)" }}>
                &#8592; Back to Blog
              </Link>
              <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", borderRadius: "0.625rem", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", background: "var(--accent)", color: "#fff" }}>
                Notify Me
              </Link>
            </div>
          </div>
        )}
      </article>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          Written by{" "}
          <Link href="/" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
            Vasyl Bakhmut
          </Link>
          {" "}&#8212; Full-Stack Developer &amp; AI Automation Specialist, Melbourne
        </p>
      </div>
    </div>
  );
}
