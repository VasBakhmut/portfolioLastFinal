"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const HIGHLIGHTS = [
  { icon: "🏗️", label: "10+ years", detail: "Construction management" },
  { icon: "💻", label: "3+ years", detail: "Full-stack development" },
  { icon: "🤖", label: "Specialised in", detail: "AI & automation" },
  { icon: "📍", label: "Based in", detail: "Cheltenham, VIC" },
];

export function About() {
  return (
    <section
      id="about"
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal>
          <p className="section-label"><span>&#8212;</span> About Me</p>
          <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
            From Building Sites to{" "}
            <span className="gradient-text">Building Software</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="about-cols">
          <ScrollReveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
              <p>
                For over a decade, I led complex construction projects &#8212; managing teams,
                budgets, compliance, and client relationships at Val Interior, PhotoLightStudio,
                and Mizara Design &amp; Construction. I know what it means to deliver under
                pressure and communicate clearly with clients who have real deadlines.
              </p>
              <p>
                In 2022 I made a deliberate pivot into software development. The discipline
                and problem-solving instincts from construction translate directly: I plan
                before I build, I communicate constantly, and I don&apos;t cut corners.
                Today I specialise in full-stack web applications and AI-powered workflow
                automation for Australian small businesses. I work with clients across
                Melbourne, Sydney, and regional Victoria &#8212; fully remote and online.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="glass-card"
                  style={{ padding: "1rem 1.125rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{h.icon}</span>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>{h.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{h.detail}</div>
                </div>
              ))}
              <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                <a href="#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Let&apos;s Work Together
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
