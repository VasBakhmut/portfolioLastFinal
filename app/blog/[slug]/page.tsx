import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from "@/lib/api";
import { getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const api = await getBlogBySlug(slug);

  if (api) {
    const canonical = `https://vasdev.au/blog/${slug}`;
    return {
      title: api.title,
      description: api.excerpt,
      alternates: { canonical },
      openGraph: {
        title: api.title,
        description: api.excerpt,
        url: canonical,
        type: "article",
        locale: "en_AU",
        publishedTime: api.createdAt,
        authors: ["Vasyl Bakhmut"],
        ...(api.image ? { images: [{ url: api.image, alt: api.title }] } : {}),
      },
      twitter: {
        card: "summary_large_image",
        title: api.title,
        description: api.excerpt,
        ...(api.image ? { images: [api.image] } : {}),
      },
    };
  }

  const local = getBlogPost(slug);
  if (!local) return { title: "Post Not Found" };
  const canonical = `https://vasdev.au/blog/${slug}`;
  return {
    title: local.title,
    description: local.excerpt,
    alternates: { canonical },
    openGraph: {
      title: local.title,
      description: local.excerpt,
      url: canonical,
      type: "article",
      locale: "en_AU",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Try API first; fall back to local hardcoded data
  const api = await getBlogBySlug(slug);

  if (api) {
    const date = new Date(api.createdAt).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const readTime = `${api.readTime} min read`;

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: api.title,
      description: api.excerpt,
      datePublished: api.createdAt,
      dateModified: api.createdAt,
      url: `https://vasdev.au/blog/${slug}`,
      author: {
        "@type": "Person",
        name: "Vasyl Bakhmut",
        url: "https://vasdev.au",
        jobTitle: "Full-Stack Web Developer & AI Automation Specialist",
      },
      publisher: {
        "@type": "Person",
        name: "Vasyl Bakhmut",
        url: "https://vasdev.au",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://vasdev.au/blog/${slug}` },
      ...(api.image ? { image: api.image } : {}),
    };

    return (
      <div style={{ minHeight: "100svh", background: "var(--bg-primary)", color: "var(--text-primary)", fontFamily: "var(--font-body, Inter, sans-serif)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
              {api.category}
            </span>
          </div>
        </div>

        <article style={{ maxWidth: 760, margin: "0 auto", padding: "6rem 1.5rem 5rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{date}</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>&#183;</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{readTime}</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            {api.title}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
            {api.excerpt}
          </p>

          {api.content ? (
            <div className="prose-content">
              <ReactMarkdown>{api.content}</ReactMarkdown>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-card)", backdropFilter: "blur(16px)", border: "1px solid var(--border)", borderRadius: "1.25rem", boxShadow: "var(--shadow-card)" }}>
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

        <div style={{ borderTop: "1px solid var(--border)", padding: "2rem 1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Written by{" "}
            <Link href="/" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
              Vasyl Bakhmut
            </Link>
            {" "}&#8212; Full-Stack Developer &amp; AI Automation Specialist, Melbourne
          </p>
        </div>

        <style>{`
          .prose-content { color: var(--text-secondary); line-height: 1.8; font-size: 1rem; }
          .prose-content h1, .prose-content h2, .prose-content h3, .prose-content h4 {
            font-family: var(--font-display); color: var(--text-primary);
            font-weight: 700; line-height: 1.3; margin: 2rem 0 0.875rem;
          }
          .prose-content h2 { font-size: 1.5rem; }
          .prose-content h3 { font-size: 1.25rem; }
          .prose-content p { margin: 0 0 1.25rem; }
          .prose-content ul, .prose-content ol { margin: 0 0 1.25rem 1.5rem; }
          .prose-content li { margin-bottom: 0.375rem; }
          .prose-content a { color: var(--accent); text-decoration: underline; }
          .prose-content code { font-size: 0.875em; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0.3rem; padding: 0.15em 0.4em; }
          .prose-content pre { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0.75rem; padding: 1.25rem; overflow-x: auto; margin: 0 0 1.5rem; }
          .prose-content pre code { background: none; border: none; padding: 0; font-size: 0.875rem; }
          .prose-content blockquote { border-left: 3px solid var(--accent); margin: 0 0 1.25rem; padding: 0.5rem 1.25rem; color: var(--text-muted); font-style: italic; }
          .prose-content strong { color: var(--text-primary); font-weight: 700; }
          .prose-content hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
        `}</style>
      </div>
    );
  }

  // Fallback to local hardcoded blog data
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

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "6rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.date}</span>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>&#183;</span>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
          {post.title}
        </h1>

        <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "3rem", borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
          {post.excerpt}
        </p>

        {post.placeholder && (
          <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-card)", backdropFilter: "blur(16px)", border: "1px solid var(--border)", borderRadius: "1.25rem", boxShadow: "var(--shadow-card)" }}>
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
