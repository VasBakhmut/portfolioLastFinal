import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LOCATIONS, SERVICES, getLocation } from "@/lib/seo-pages-data";

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Not Found" };

  const title = `Web Developer & AI Automation ${location.name} | Vasyl Bakhmut`;
  const description = `Full-stack web developer and AI automation specialist serving ${location.name}, ${location.state}. Custom websites, AI chatbots, SEO. ${location.type === "local" ? "Based locally." : "Remote-first, same timezone."}`;
  const canonical = `https://vasdev.au/locations/${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website", locale: "en_AU" },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vasyl Bakhmut — Web Developer & AI Automation",
    description: `Web development and AI automation services in ${location.name}, ${location.state}.`,
    url: "https://vasdev.au",
    telephone: "0425401444",
    email: "bakhmutvas@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.type === "local" ? "Cheltenham" : location.name,
      addressRegion: location.state,
      addressCountry: "AU",
    },
    ...(location.type === "local"
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: -37.9526,
            longitude: 145.0592,
          },
        }
      : {}),
    areaServed: [
      { "@type": "City", name: location.name },
      ...location.suburbs.map((s) => ({ "@type": "Place", name: `${s}, ${location.name}` })),
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vasdev.au" },
      { "@type": "ListItem", position: 2, name: location.name, item: `https://vasdev.au/locations/${location.slug}` },
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
            <li><span>{location.name}</span></li>
          </ol>
        </nav>

        {/* Hero */}
        <section style={{ padding: "3rem 1.5rem 2.5rem", maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label">
            <span>&#8212;</span> {location.name}, {location.state} <span>&#8212;</span>
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              maxWidth: 760,
            }}
          >
            {location.type === "local"
              ? `Web Developer & AI Automation Specialist in ${location.name}`
              : `Web Development & AI Automation for ${location.name} Businesses`}
          </h1>

          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 640, marginBottom: "0.875rem" }}>
            {location.locationIntro}
          </p>

          <p
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              background: "var(--accent-glow)",
              border: "1px solid var(--accent-glow-strong)",
              borderRadius: "100px",
              padding: "0.3rem 0.875rem",
              marginBottom: "2rem",
            }}
          >
            {location.locationNote}
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary">Start a Project</a>
            <Link href="/" className="btn-outline" style={{ fontSize: "0.875rem" }}>Back to Home</Link>
          </div>
        </section>

        {/* Services available in this location */}
        <section
          style={{
            padding: "2.5rem 1.5rem 3rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Services Available in {location.name}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${location.slug}`}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.375rem",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {service.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {location.name}
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section style={{ padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.875rem",
              }}
            >
              Areas Served in {location.name}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Serving clients across {location.name} including{" "}
              {location.suburbs.join(", ")}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "4rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Ready to <span className="gradient-text">get started?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Book a free consultation and let&apos;s talk about your {location.name} project.
            </p>
            <a href="/#contact" className="btn-primary">Start a Project</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
