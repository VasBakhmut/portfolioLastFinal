import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES, LOCATIONS, SERVICE_LOCATION_INTROS, getService, getLocation } from "@/lib/seo-pages-data";

interface Props {
  params: Promise<{ service: string; location: string }>;
}

export async function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    LOCATIONS.map((l) => ({ service: s.slug, location: l.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: sSlug, location: lSlug } = await params;
  const service = getService(sSlug);
  const location = getLocation(lSlug);
  if (!service || !location) return { title: "Not Found" };

  const title = `${service.name} ${location.name} | ${location.state} | Vasyl Bakhmut`;
  const description = `${service.name} services in ${location.name}, ${location.state}. ${service.metaDescription}`;
  const canonical = `https://vasdev.au/services/${service.slug}/${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website", locale: "en_AU" },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: sSlug, location: lSlug } = await params;
  const service = getService(sSlug);
  const location = getLocation(lSlug);
  if (!service || !location) notFound();

  const uniqueIntro = SERVICE_LOCATION_INTROS[sSlug]?.[lSlug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} ${location.name}`,
    description: `${service.name} services in ${location.name}, ${location.state}.`,
    provider: {
      "@type": "Person",
      name: "Vasyl Bakhmut",
      url: "https://vasdev.au",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedIn: location.state,
    },
    url: `https://vasdev.au/services/${service.slug}/${location.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vasdev.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://vasdev.au/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://vasdev.au/services/${service.slug}` },
      { "@type": "ListItem", position: 4, name: location.name, item: `https://vasdev.au/services/${service.slug}/${location.slug}` },
    ],
  };

  const otherLocations = LOCATIONS.filter((l) => l.slug !== lSlug);

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
            <li><Link href={`/services/${service.slug}`} style={{ color: "var(--accent)", textDecoration: "none" }}>{service.name}</Link></li>
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
              marginBottom: "1rem",
              maxWidth: 760,
            }}
          >
            {service.name} {location.name} &#8212; {service.h1} in {location.name}
          </h1>

          {/* Location note badge */}
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
              marginBottom: "1.25rem",
            }}
          >
            {location.locationNote}
          </p>

          {uniqueIntro && (
            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 640, marginBottom: "1rem" }}>
              {uniqueIntro}
            </p>
          )}

          <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 640, marginBottom: "2rem" }}>
            Serving {location.name} including {location.suburbs.join(", ")}.
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary">Get a Free Quote</a>
            <Link href={`/services/${service.slug}`} className="btn-outline" style={{ fontSize: "0.875rem" }}>
              All {service.name} Services
            </Link>
          </div>
        </section>

        {/* H2 keyword sections — localised */}
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
                  {sec.heading} in {location.name}
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 680 }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <section
          style={{
            padding: "2.5rem 1.5rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href={`/services/${service.slug}`}
                style={{ fontSize: "0.875rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}
              >
                &#8592; View all {service.name} services
              </Link>
              {otherLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${service.slug}/${loc.slug}`}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  {service.name} {loc.name} &#8594;
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
              Book a free consultation and let&apos;s talk about your project in {location.name}.
            </p>
            <a href="/#contact" className="btn-primary">Get a Free Quote</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
