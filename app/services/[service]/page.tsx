import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES, LOCATIONS, getService } from "@/lib/seo-pages-data";

interface Props {
  params: Promise<{ service: string }>;
}

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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: "1.25rem 1.5rem 0", maxWidth: 1200, margin: "0 auto" }}>
          <ol style={{ display: "flex", gap: "0.4rem", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8rem", color: "var(--text-muted)", flexWrap: "wrap" }}>
            <li><Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link></li>
            <li style={{ opacity: 0.5 }}>/</li>
            <li><span>Services</span></li>
            <li style={{ opacity: 0.5 }}>/</li>
            <li><span>{service.name}</span></li>
          </ol>
        </nav>

        {/* Hero */}
        <section style={{ padding: "3rem 1.5rem 2.5rem", maxWidth: 1200, margin: "0 auto" }}>
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
              maxWidth: 760,
            }}
          >
            {service.h1}
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 640, marginBottom: "2rem" }}>
            {service.intro}
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary">Get a Free Quote</a>
            <Link href="/" className="btn-outline" style={{ fontSize: "0.875rem" }}>Back to Home</Link>
          </div>
        </section>

        {/* H2 keyword sections */}
        <section style={{ padding: "2rem 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
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
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 680 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Also serving — location links */}
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

        {/* CTA */}
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
