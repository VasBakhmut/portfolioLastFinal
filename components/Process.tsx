"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We discuss your goals, audience, and requirements. I ask the right questions so we're aligned before a single line of code is written.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "I create wireframes and a visual direction — clean, modern, and on-brand. You review and approve before development begins.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    description: "I build with clean, maintainable code — responsive, accessible, and performant. Regular check-ins keep you in the loop.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We test thoroughly, then deploy. After launch I provide a handover, documentation, and ongoing support to make sure everything runs smoothly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section
      id="process"
      style={{ padding: "3.5rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> How It Works <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              My <span className="gradient-text">Process</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ position: "relative" }}>
          {/* Connecting line (desktop) */}
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: "3rem",
              left: "12.5%",
              right: "12.5%",
              height: 2,
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", position: "relative", zIndex: 1 }}
            className="process-grid"
          >
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  {/* Circle */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      border: "2px solid var(--accent)",
                      background: "var(--bg-card)",
                      backdropFilter: "blur(12px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      marginBottom: "1.5rem",
                      boxShadow: "0 0 20px var(--accent-glow)",
                      position: "relative",
                    }}
                  >
                    {step.icon}
                    <span
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .process-grid > div > div > div:first-child { width: 48px !important; height: 48px !important; margin-bottom: 0.875rem !important; }
          .process-grid > div > div > div:first-child svg { width: 18px !important; height: 18px !important; }
          .process-grid p { font-size: 0.75rem !important; line-height: 1.6 !important; }
        }
      `}</style>
    </section>
  );
}
