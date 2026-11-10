import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GUIDES, getGuide } from "@/lib/guides-data";

interface Props {
  params: Promise<{ slug: string }>;
}

const ORIGIN = "https://www.vasdev.au";

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide Not Found" };
  const url = `${ORIGIN}/guides/${guide.slug}`;
  return {
    title: { absolute: `${guide.title} | Vasdev` },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: "article",
      locale: "en_AU",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: ["Vasyl Bakhmut"],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${ORIGIN}/guides/${guide.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-AU",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@id": `${ORIGIN}/#person` },
    publisher: { "@id": `${ORIGIN}/#business` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${ORIGIN}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Navbar />

      <main style={{ paddingTop: "5rem", background: "var(--bg-primary)", minHeight: "100svh" }}>
        <nav aria-label="Breadcrumb" style={{ padding: "1.25rem 1.5rem 0", maxWidth: 860, margin: "0 auto" }}>
          <ol style={{ display: "flex", gap: "0.4rem", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8rem", color: "var(--text-muted)", flexWrap: "wrap" }}>
            <li><Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link></li>
            <li style={{ opacity: 0.5 }}>/</li>
            <li><Link href="/guides" style={{ color: "var(--accent)", textDecoration: "none" }}>Guides</Link></li>
          </ol>
        </nav>

        <article style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem 3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            By <Link href="/" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Vasyl Bakhmut</Link>, founder of Vasdev &#183; Updated {guide.dateModified} &#183; {guide.readTime}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            {guide.h1}
          </h1>

          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            {guide.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {guide.sections.map((sec) => (
              <section key={sec.heading}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2.6vw, 1.625rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "0.875rem" }}>
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section style={{ marginTop: "3rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.6vw, 1.625rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {guide.faqs.map((f) => (
                <div key={f.q} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                    {f.q}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: "3rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {guide.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="glass-card"
                style={{ padding: "0.6rem 1.25rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)" }}
              >
                {r.label} &#8594;
              </Link>
            ))}
          </section>
        </article>

        <section style={{ padding: "3rem 1.5rem 4rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Need a <span className="gradient-text">website?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Tell me what you need and I will send a fixed-price quote.
            </p>
            <Link href="/#contact" className="btn-primary">Get a Free Quote</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
