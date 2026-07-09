"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

const PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

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
        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem", justifyContent: "center" }}>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              style={{
                padding: "0.45rem 1.1rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                border: activeCategory === cat ? "1.5px solid var(--accent)" : "1.5px solid var(--border)",
                background: activeCategory === cat ? "var(--accent)" : "var(--bg-card)",
                color: activeCategory === cat ? "#fff" : "var(--text-secondary)",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s",
              }}
            >
              {cat}
              <span style={{ marginLeft: "0.4rem", fontSize: "0.7rem", opacity: 0.75 }}>
                ({cat === "All" ? BLOG_POSTS.length : BLOG_POSTS.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="blog-page-grid">
          {paginated.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article
                  style={{
                    background: "var(--bg-card)", backdropFilter: "blur(16px)",
                    border: "1px solid var(--border)", borderRadius: "1.125rem",
                    overflow: "hidden", display: "flex", flexDirection: "column",
                    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s", cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-secondary)", overflow: "hidden" }}>
                    <Image src={post.image ?? "/placeholder-blog-1.png"} alt={post.title} fill sizes="(max-width: 600px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--accent-glow), transparent)" }} />
                    <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: "100px", background: "var(--accent)", color: "#fff" }}>
                      {post.category}
                    </span>
                    {post.placeholder && (
                      <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "100px", background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)", backdropFilter: "blur(8px)" }}>
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                      <span>{post.date}</span><span>&#183;</span><span>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "0.875rem" }}>
                      {post.excerpt}
                    </p>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "var(--bg-card)", color: page === 1 ? "var(--text-muted)" : "var(--text-primary)", cursor: page === 1 ? "not-allowed" : "pointer", fontSize: "0.8rem", fontWeight: 600 }}>
              &#8592; Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => setPage(n)}
                style={{ width: 36, height: 36, borderRadius: "0.5rem", border: n === page ? "1.5px solid var(--accent)" : "1px solid var(--border)", background: n === page ? "var(--accent)" : "var(--bg-card)", color: n === page ? "#fff" : "var(--text-secondary)", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600 }}>
                {n}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "var(--bg-card)", color: page === totalPages ? "var(--text-muted)" : "var(--text-primary)", cursor: page === totalPages ? "not-allowed" : "pointer", fontSize: "0.8rem", fontWeight: 600 }}>
              Next &#8594;
            </button>
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
