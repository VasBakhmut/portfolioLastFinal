import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES, LOCATIONS, getService, hasServiceLocationPage } from "@/lib/seo-pages-data";

interface Props {
  params: Promise<{ service: string }>;
}

// Hero image per service: original banners in /public/images/services.
// File names carry the target keywords; alt text describes the picture.
const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "web-design": {
    src: "/images/services/web-design-services-australia.webp",
    alt: "Web designer's desk with a laptop and tablet showing a small business website layout, colour swatches and wireframe sketches",
  },
  "web-development": {
    src: "/images/services/website-development-melbourne.webp",
    alt: "Website development workstation with a code editor on one monitor and a website preview on another",
  },
  "seo-optimization": {
    src: "/images/services/seo-optimisation-melbourne-australia.webp",
    alt: "Laptop showing an SEO analytics dashboard with a rising traffic chart, next to a magnifying glass and keyword notes",
  },
  "ecommerce-solutions": {
    src: "/images/services/ecommerce-website-development-australia.webp",
    alt: "Online store product grid on a laptop and phone with a payment terminal and parcels ready to ship",
  },
  "business-web-solutions": {
    src: "/images/services/small-business-website-design-australia.webp",
    alt: "Laptop on a small business counter showing a multi-page business website with a contact form",
  },
  "ai-automation": {
    src: "/images/services/ai-chatbot-automation-melbourne.webp",
    alt: "AI chatbot conversation on a phone beside a laptop showing a connected workflow automation diagram",
  },
  "cloud-devops": {
    src: "/images/services/cloud-hosting-setup-melbourne.webp",
    alt: "Data centre aisle of server racks with a glowing network of connected cloud nodes",
  },
  "shopify-stores": {
    src: "/images/services/shopify-store-setup-australia.webp",
    alt: "Shopify store product page on a laptop and phone on a packing table with wrapped parcels",
  },
  "geo-ai-search-optimisation": {
    src: "/images/services/geo-ai-search-optimisation-australia.webp",
    alt: "AI search assistant on a laptop and phone recommending local businesses in a written answer",
  },
  "business-software-automation": {
    src: "/images/services/custom-business-software-automation-australia.webp",
    alt: "Business dashboard with charts on a monitor and a booking calendar on a tablet in a small office",
  },
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    // absolute: metaTitle already contains the brand, skip the layout template
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `https://www.vasdev.au/services/${service.slug}` },
    twitter: { title: service.metaTitle, description: service.metaDescription },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.vasdev.au/services/${service.slug}`,
      type: "website",
      locale: "en_AU",
      images: [{ url: SERVICE_IMAGES[slug]?.src ?? SERVICE_IMAGES["web-development"].src, width: 1920, height: 720, alt: SERVICE_IMAGES[slug]?.alt }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const hero = SERVICE_IMAGES[slug] ?? SERVICE_IMAGES["web-development"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Vasyl Bakhmut",
      url: "https://www.vasdev.au",
    },
    areaServed: "Australia",
    url: `https://www.vasdev.au/services/${service.slug}`,
    image: `https://www.vasdev.au${hero.src}`,
    ...(service.priceFrom && {
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          minPrice: service.priceFrom.amount,
          ...(service.priceFrom.per === "month" && { unitText: "MONTH" }),
        },
        url: `https://www.vasdev.au/services/${service.slug}`,
      },
    }),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const related = SERVICES.filter((s) => s.slug !== service.slug && s.slug !== "cloud-devops").slice(0, 4);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vasdev.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.vasdev.au/#services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://www.vasdev.au/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

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
              src={hero.src}
              alt={hero.alt}
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

        {/* ── FAQ (also exposed as FAQPage structured data) ── */}
        <section style={{ padding: "0 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            {service.name}: common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {service.faqs.map((f) => (
              <div key={f.q} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.q}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 760 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related services (internal links) ── */}
        <section style={{ padding: "0 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Related services
          </h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="glass-card"
                style={{ padding: "0.6rem 1.25rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)" }}
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>

        {LOCATIONS.some((loc) => hasServiceLocationPage(service.slug, loc.slug)) && (
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
              {LOCATIONS.filter((loc) => hasServiceLocationPage(service.slug, loc.slug)).map((loc) => (
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
        )}

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
