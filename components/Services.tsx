"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SERVICES = [
  {
    slug: "web-design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v6"/>
      </svg>
    ),
    title: "Web Design",
    description: "Clean, modern, and conversion-focused website designs built mobile-first for Australian small businesses. Every design is tailored to your brand and built to perform.",
    color: "#ec4899",
    priceHint: "from $199",
  },
  {
    slug: "web-development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Web Development",
    description: "Fast, accessible, and SEO-optimised websites and web applications built with React, Next.js, and TypeScript &#8212; designed to convert visitors into customers.",
    color: "#06b6d4",
    priceHint: "from $199",
  },
  {
    slug: "seo-optimization",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "SEO Optimisation",
    description: "Technical SEO audits, structured data, Core Web Vitals improvements, and on-page strategy to get your business ranking on the first page in Melbourne and beyond.",
    color: "#10b981",
    priceHint: "Free audit",
  },
  {
    slug: "ecommerce-solutions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: "Ecommerce Solutions",
    description: "Custom online stores with Australian payment gateways, product management, and mobile-first checkout &#8212; built to turn browsers into buyers.",
    color: "#f97316",
    priceHint: "from $799",
  },
  {
    slug: "business-web-solutions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Business Web Solutions",
    description: "Complete website packages for Australian SMBs &#8212; multi-page sites, CMS integration, contact forms, and SEO basics from a single point of contact.",
    color: "#3b82f6",
    priceHint: "from $299",
  },
  {
    slug: "ai-automation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><circle cx="18" cy="5" r="3"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "AI Chatbots & Automation",
    description: "Custom AI assistants, workflow automation with n8n, CRM integrations, and intelligent tools that save your team hours of repetitive work every week.",
    color: "#8b5cf6",
    priceHint: "from $99",
  },
];


export function Services() {
  return (
    <section
      id="services"
      style={{ padding: "2.5rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> What I Do <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", maxWidth: 520, margin: "0.75rem auto 0" }}>
              End-to-end digital services for Australian small businesses &#8212; from first design to launch and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.875rem" }}
          className="services-grid"
        >
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="glass-card service-card"
                style={{
                  position: "relative",
                  padding: "1.125rem 0.75rem 1rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  textDecoration: "none",
                  overflow: "hidden",
                  cursor: "pointer",
                  ["--service-color" as string]: s.color,
                }}
              >
                {/* Clickable hint: arrow in the corner, animates on hover */}
                <span
                  className="service-arrow"
                  aria-hidden="true"
                  style={{ position: "absolute", top: 8, right: 8, color: s.color, display: "flex" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>

                <div
                  className="service-icon"
                  style={{
                    width: 44, height: 44, borderRadius: "0.75rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${s.color}18`,
                    color: s.color,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem", fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.625rem", lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {s.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.7rem", fontWeight: 700,
                    color: s.color,
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}28`,
                    padding: "0.15rem 0.55rem",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.priceHint}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover { border-color: var(--service-color) !important; }
        .service-arrow { opacity: 0.45; transition: transform 0.25s ease, opacity 0.25s ease; }
        .service-card:hover .service-arrow { opacity: 1; transform: translate(2px, -2px); }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}
