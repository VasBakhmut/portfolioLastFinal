import { type ReactElement } from "react";
import Link from "next/link";
import { getService, SERVICES_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Vasyl Bakhmut`,
    description: service.metaDescription,
  };
}

const SERVICE_ICONS: Record<string, ReactElement> = {
  "web-development": (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  "ai-chatbots": (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10"/><circle cx="18" cy="5" r="3"/><path d="M12 8v4l3 3"/>
    </svg>
  ),
  "seo": (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  "devops": (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
};

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const icon = SERVICE_ICONS[s.slug];

  return (
    <div style={{ minHeight: "100svh", background: "var(--bg-primary)", color: "var(--text-primary)", fontFamily: "var(--font-body, Inter, sans-serif)" }}>

      {/* Fixed top nav */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "1rem 1.5rem", background: "var(--nav-bg)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/#services" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            All Services
          </Link>
          <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.45rem 1rem", borderRadius: "0.5rem", fontSize: "0.8rem", fontWeight: 700, background: s.color, color: "#fff", textDecoration: "none" }}>
            Get a Quote
          </Link>
        </div>
      </div>

      <main style={{ maxWidth: 1060, margin: "0 auto", padding: "6rem 1.5rem 5rem" }}>

        {/* Hero */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              width: 72, height: 72, borderRadius: "1.25rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: `${s.color}18`, color: s.color,
              border: `1px solid ${s.color}30`,
              marginBottom: "1.5rem",
            }}
          >
            {icon}
          </div>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: s.color, marginBottom: "0.75rem" }}>
            Service
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              maxWidth: 700,
            }}
          >
            {s.shortTitle}
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 640, marginBottom: "2rem" }}>
            {s.heroDescription}
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link
              href="/#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.75rem 1.75rem", borderRadius: "0.625rem", background: s.color, color: "#fff", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Start a Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.75rem 1.75rem", borderRadius: "0.625rem", border: `1.5px solid ${s.color}`, color: s.color, fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="service-page-grid">

          {/* Left column */}
          <div>
            {/* What is included */}
            <section style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid ${s.color}`,
                  display: "inline-block",
                }}
              >
                What&apos;s Included
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {s.features.map((f) => (
                  <div
                    key={f.title}
                    style={{
                      padding: "1.125rem 1.25rem",
                      borderRadius: "0.875rem",
                      background: "var(--bg-card)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid var(--border)",
                      borderLeft: `3px solid ${s.color}`,
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.375rem" }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid ${s.color}`,
                  display: "inline-block",
                }}
              >
                Why Choose Me
              </h2>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {s.benefits.map((b) => (
                  <li key={b} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                    <CheckIcon color={s.color} />
                    <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column */}
          <div>
            {/* My Process */}
            <section style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid ${s.color}`,
                  display: "inline-block",
                }}
              >
                My Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {s.process.map((step, idx) => (
                  <div key={step.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: `${s.color}18`, color: s.color,
                        border: `2px solid ${s.color}`,
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8125rem", fontWeight: 800,
                      }}
                    >
                      {step.step}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
                        {step.description}
                      </p>
                      {idx < s.process.length - 1 && (
                        <div style={{ width: 1, height: 16, background: `${s.color}40`, marginLeft: "calc(-1rem - 17px)", marginTop: "0.5rem" }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid ${s.color}`,
                  display: "inline-block",
                }}
              >
                FAQ
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {s.faq.map((item) => (
                  <div
                    key={item.q}
                    style={{
                      padding: "1.125rem 1.25rem",
                      borderRadius: "0.875rem",
                      background: "var(--bg-card)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: s.color, marginBottom: "0.5rem" }}>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA block */}
        <div
          style={{
            marginTop: "4rem",
            padding: "3rem 2.5rem",
            borderRadius: "1.5rem",
            background: "var(--bg-card)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${s.color}40`,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 100%, ${s.color}12, transparent 65%)`, pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: s.color, marginBottom: "0.75rem" }}>
              Ready to get started?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.875rem",
                lineHeight: 1.2,
              }}
            >
              Let&apos;s build something{" "}
              <span style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                great together
              </span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 2rem" }}>
              Message me today and I&apos;ll get back to you within 24 hours with a clear scope and timeline.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.75rem 1.75rem", borderRadius: "0.625rem", background: s.color, color: "#fff", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}>
                Contact Me
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <a href="mailto:bakhmutvas@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.75rem 1.75rem", borderRadius: "0.625rem", border: `1.5px solid ${s.color}`, color: s.color, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                bakhmutvas@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: s.color, fontWeight: 600, textDecoration: "none" }}>
            Vasyl Bakhmut
          </Link>
          {" "}&#8212; Full-Stack Developer &amp; {s.shortTitle} Specialist, Melbourne, Australia
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
