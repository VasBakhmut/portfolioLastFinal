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
      <svg width="22" height="22" viewBox="0 0 800 800" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        {/* Australia outline — simplified vector path */}
        <path d="M420,120 C445,118 470,125 490,138 C510,150 522,168 530,188 C538,208 542,230 548,252 C554,274 562,296 575,314 C588,332 606,346 618,364 C630,382 636,404 630,424 C624,444 606,460 592,478 C578,496 568,516 558,538 C548,560 540,584 528,606 C516,628 500,648 480,660 C460,672 436,676 414,672 C392,668 372,656 354,642 C336,628 320,610 308,590 C296,570 288,548 280,526 C272,504 264,482 252,462 C240,442 224,424 214,404 C204,384 200,362 202,340 C204,318 212,298 224,280 C236,262 252,248 268,234 C284,220 300,208 316,196 C332,184 348,172 366,162 C384,152 404,144 420,120 Z"/>
      </svg>
    ),
    display: "100%",
    label: "Local — Based in AU",
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
