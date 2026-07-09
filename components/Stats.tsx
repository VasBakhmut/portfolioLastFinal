"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    count: 99,
    suffix: "%",
    label: "On-Time Delivery",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    display: "24h",
    label: "Average Response",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    count: 15,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    count: 37,
    suffix: "+",
    label: "Projects Delivered",
  },
];

export function Stats() {
  return (
    <section style={{ padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              background: "var(--bg-card)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              boxShadow: "var(--shadow-card), 0 0 40px var(--accent-glow)",
              overflow: "hidden",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                }}
                className={i < STATS.length - 1 ? "stat-bordered" : ""}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: "0.75rem",
                    background: "var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 2.5vw, 2.25rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {"display" in s ? (
                      s.display
                    ) : (
                      <>
                        <AnimatedCounter end={s.count!} />
                        {s.suffix}
                      </>
                    )}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-bordered { border-right: none !important; }
          .stats-grid > div:nth-child(odd) { border-right: 1px solid var(--border) !important; }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) { border-bottom: 1px solid var(--border) !important; }
        }
        @media (max-width: 400px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stats-grid > div:nth-child(odd) { border-right: none !important; }
          .stats-grid > div { border-bottom: 1px solid var(--border) !important; }
          .stats-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
