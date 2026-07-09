"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/lib/blog-data";

const FEATURED = BLOG_POSTS.slice(0, 3);

export function Blog() {
  return (
    <section
      id="blog"
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <div>
              <p className="section-label"><span>&#8212;</span> Insights</p>
              <h2 className="section-heading">
                Articles &amp; <span className="gradient-text">Resources</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="btn-outline"
              style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
            >
              View All Articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          className="blog-grid"
        >
          {FEATURED.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="glass-card blog-card"
                  style={{ overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s" }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-secondary)", overflow: "hidden" }}>
                    <Image
                      src={post.image ?? `/placeholder-blog-${i + 1}.png`}
                      alt={post.title}
                      fill
                      sizes="(max-width: 600px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--accent-glow), transparent)" }} />
                    <span
                      style={{
                        position: "absolute", top: "0.75rem", left: "0.75rem",
                        fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                        padding: "0.2rem 0.6rem", borderRadius: "100px",
                        background: "var(--accent)", color: "#fff",
                      }}
                    >
                      {post.category}
                    </span>
                    {post.placeholder && (
                      <span
                        style={{
                          position: "absolute", top: "0.75rem", right: "0.75rem",
                          fontSize: "0.65rem", fontWeight: 700,
                          padding: "0.2rem 0.6rem", borderRadius: "100px",
                          background: "var(--bg-card)", color: "var(--text-muted)",
                          border: "1px solid var(--border)", backdropFilter: "blur(8px)",
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                      <span>{post.date}</span>
                      <span>&#183;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.625rem" }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)", lineHeight: 1.7, flex: 1, marginBottom: "1rem" }}>
                      {post.excerpt}
                    </p>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      Read Article
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
        .blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card), 0 0 24px var(--accent-glow); }
      `}</style>
    </section>
  );
}
