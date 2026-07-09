"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SERVICES = [
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
    slug: "cloud-devops",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Cloud & DevOps Consulting",
    description: "AWS setup, Docker containerisation, CI/CD pipelines, and Vercel deployments &#8212; making sure your infrastructure is reliable, scalable, and cost-efficient.",
    color: "#f59e0b",
    priceHint: "from $149",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{ padding: "3.5rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
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
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}
          className="services-grid"
        >
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link
                href={`/services/${s.slug}`}
                className="glass-card"
                style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", textDecoration: "none", overflow: "hidden" }}
              >
                <div
                  style={{
                    width: 56, height: 56, borderRadius: "0.875rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${s.color}18`,
                    color: s.color,
                    marginBottom: "1rem",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem", fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem", lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.75, flex: 1 }}
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem", fontWeight: 700,
                      color: s.color,
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}28`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                    }}
                  >
                    {s.priceHint}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)" }}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
