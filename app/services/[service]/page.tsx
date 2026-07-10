import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES, LOCATIONS, getService } from "@/lib/seo-pages-data";

interface Props {
  params: Promise<{ service: string }>;
}

// Hero image per service — thematic Unsplash photos
const SERVICE_IMAGES: Record<string, string> = {
  "web-design": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop&q=70",
  "web-development": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&auto=format&fit=crop&q=70",
  "seo-optimization": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=70",
  "ecommerce-solutions": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=70",
  "business-web-solutions": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&auto=format&fit=crop&q=70",
  "ai-automation": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=70",
  "cloud-devops": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=70",
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://bakhmut.com.au/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://bakhmut.com.au/services/${service.slug}`,
      type: "website",
      locale: "en_AU",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const heroImage = SERVICE_IMAGES[slug] ?? SERVICE_IMAGES["web-development"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Vasyl Bakhmut",
      url: "https://bakhmut.com.au",
    },
    areaServed: "Australia",
    url: `https://bakhmut.com.au/services/${service.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bakhmut.com.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://bakhmut.com.au/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://bakhmut.com.au/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Navbar />

      <main style={{ paddingTop: "5rem", background: "var(--bg-primary)", minHeight: "100svh" }}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ padding: "1.25rem 1.5rem 0", maxWidth: 1200, margin: "0 auto" }}>
          <ol style={{ display: "flex", gap: "0.4rem", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8rem", color: "var(--text-muted)", flexWrap: "wrap" }}>
            <li><Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link></li>
            <li style={{ opacity: 0.5 }}>/</li>
            <li><span>Services</span></li>
            <li style={{ opacity: 0.5 }}>/</li>
            <li><span>{service.name}</span></li>
          </ol>
        </nav>

        {/* ── 1. Heading ── */}
        <section style={{ padding: "3rem 1.5rem 0", maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">
            <span>&#8212;</span> Services <span>&#8212;</span>
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              maxWidth: 800,
            }}
          >
            {service.h1}
          </h1>

          {/* ── 2. Subheading / intro ── */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: 680,
              marginBottom: "2rem",
            }}
          >
            {service.intro}
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a href="/#contact" className="btn-primary">Get a Free Quote</a>
            <Link href="/" className="btn-outline" style={{ fontSize: "0.875rem" }}>Back to Home</Link>
          </div>
        </section>

        {/* ── 3. SEO Banner — What's Included ── */}
        <section style={{ padding: "0 1.5rem 2.5rem", maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="glass-card"
            style={{
              padding: "1.75rem 2rem",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.875rem",
              }}
            >
              What&apos;s Included
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.625rem 1.5rem",
              }}
            >
              {service.h2Sections.map((sec) => (
                <div
                  key={sec.heading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {sec.heading}
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Melbourne &amp; Australia-wide
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Service Image ── */}
        <section style={{ padding: "0 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/6",
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <Image
              src={heroImage}
              alt={`${service.name} services — Vasyl Bakhmut, Melbourne`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 40%)",
                opacity: 0.5,
              }}
            />
          </div>
        </section>

        {/* ── 5. H2 text content sections ── */}
        <section style={{ padding: "0 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {service.h2Sections.map((sec) => (
              <div key={sec.heading} className="glass-card" style={{ padding: "1.75rem 2rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {sec.heading}
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 720 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Location links ── */}
        <section
          style={{
            padding: "2.5rem 1.5rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Also serving:
            </h2>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}/${loc.slug}`}
                  className="glass-card"
                  style={{
                    padding: "0.6rem 1.25rem",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {service.name} {loc.name}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Ready to <span className="gradient-text">get started?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Book a free consultation and let&apos;s talk about your project.
            </p>
            <a href="/#contact" className="btn-primary">Get a Free Quote</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
