"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CATEGORIES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Frontend",
    color: "#06b6d4",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Backend",
    color: "#8b5cf6",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v4l3 3"/><circle cx="18" cy="5" r="3"/>
      </svg>
    ),
    title: "Intelligence",
    color: "#f59e0b",
    skills: ["LLMs", "Prompt Engineering", "LangChain", "Python", "n8n", "Gemini API"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    title: "DevOps",
    color: "#10b981",
    skills: ["Docker", "Git / GitHub", "AWS (S3, EC2)", "Vercel", "CI/CD", "Linux"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "2.5rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> Engineered Stack <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              Technologies I <span className="gradient-text">Build With</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="glass-card skills-unified-card"
            style={{ overflow: "hidden", padding: 0 }}
          >
            <div className="skills-inner-grid">
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.title}
                  className={`skills-section${i < CATEGORIES.length - 1 ? " skills-section-divider" : ""}`}
                  style={{ padding: "1.25rem 1.375rem" }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "0.625rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${cat.color}18`,
                        color: cat.color,
                        border: `1px solid ${cat.color}25`,
                        flexShrink: 0,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: 0,
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.5rem",
                          borderRadius: "100px",
                          background: `${cat.color}12`,
                          color: cat.color,
                          border: `1px solid ${cat.color}22`,
                          lineHeight: 1.4,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .skills-inner-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .skills-section-divider {
          border-right: 1px solid var(--border);
        }
        @media (max-width: 800px) {
          .skills-inner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .skills-section-divider {
            border-right: none !important;
          }
          .skills-section:nth-child(1),
          .skills-section:nth-child(2) {
            border-bottom: 1px solid var(--border);
          }
          .skills-section:nth-child(1) {
            border-right: 1px solid var(--border) !important;
          }
          .skills-section:nth-child(3) {
            border-right: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 480px) {
          .skills-inner-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-section:nth-child(1),
          .skills-section:nth-child(2),
          .skills-section:nth-child(3) {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  );
}
