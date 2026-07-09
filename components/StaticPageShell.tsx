"use client";

import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface Feature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface FaqItem {
  q: string;
  a: string;
}

export interface StaticPageProps {
  breadcrumbs: Breadcrumb[];
  accentColor: string;
  eyebrow: string;
  h1: string;
  tagline: string;
  heroDescription: string;
  features: Feature[];
  process: ProcessStep[];
  faq: FaqItem[];
  ctaHref: string;
  ctaLabel: string;
  relatedLinks?: { label: string; href: string }[];
}

export function StaticPageShell({
  breadcrumbs,
  accentColor,
  eyebrow,
  h1,
  tagline,
  heroDescription,
  features,
  process,
  faq,
  ctaHref,
  ctaLabel,
  relatedLinks,
}: StaticPageProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Nav bar */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0.75rem 1.5rem", background: "var(--nav-bg)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)", textDecoration: "none", letterSpacing: "-0.04em", display: "flex", alignItems: "center", gap: "0.15rem" }}>
            <span style={{ color: "var(--accent)" }}>VB</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>/</span>
            <span> Bakhmut</span>
          </Link>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <Link href="/#services" style={{ fontSize: "0.825rem", color: "var(--text-secondary)", textDecoration: "none" }}>Services</Link>
            <Link href="/#pricing" style={{ fontSize: "0.825rem", color: "var(--text-secondary)", textDecoration: "none" }}>Pricing</Link>
            <Link href="/#contact" className="btn-primary" style={{ padding: "0.38rem 1rem", fontSize: "0.8rem" }}>{ctaLabel}</Link>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: "5rem" }}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ padding: "1rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
          <ol style={{ display: "flex", gap: "0.4rem", listStyle: "none", margin: 0, padding: 0, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {breadcrumbs.map((bc, i) => (
              <li key={bc.href} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                {i > 0 && <span>/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={bc.href} style={{ color: "var(--accent)", textDecoration: "none" }}>{bc.label}</Link>
                ) : (
                  <span>{bc.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero */}
        <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor, marginBottom: "0.75rem" }}>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.875rem" }}>
            {h1}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: 640, lineHeight: 1.7, marginBottom: "0.5rem" }}>
            {tagline}
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", maxWidth: 640, lineHeight: 1.75, marginBottom: "2.5rem" }}>
            {heroDescription}
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href={ctaHref} className="btn-primary">{ctaLabel}</Link>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", borderRadius: "0.625rem", border: "1px solid var(--border)", fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}>
              Back to Home
            </Link>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "3rem 1.5rem", borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
              What&apos;s Included
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {features.map((f) => (
                <div key={f.title} className="glass-card" style={{ padding: "1.375rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: accentColor, marginBottom: "0.875rem" }} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        {process.length > 0 && (
          <section style={{ padding: "3rem 1.5rem" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
                How It Works
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {process.map((step) => (
                  <div key={step.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${accentColor}20`, border: `2px solid ${accentColor}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.875rem", color: accentColor }}>
                      {step.step}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>{step.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq.length > 0 && (
          <section style={{ padding: "3rem 1.5rem", borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faq.map((item) => (
                  <div key={item.q} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.5rem" }}>{item.q}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section style={{ padding: "2.5rem 1.5rem" }}>
            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              {relatedLinks.map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "0.8125rem", color: "var(--accent)", textDecoration: "none", padding: "0.4rem 0.875rem", border: `1px solid ${accentColor}40`, borderRadius: "100px" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "4rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "0.875rem" }}>
              Ready to get started?
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.7 }}>
              Book a free consultation and let&apos;s talk about your project.
            </p>
            <Link href={ctaHref} className="btn-primary">{ctaLabel}</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          &#169; {new Date().getFullYear()} Vasyl Bakhmut. Full-Stack Web Developer &amp; AI Automation Specialist, Melbourne, Australia.
        </p>
      </footer>
    </div>
  );
}
