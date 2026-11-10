"use client";

import Image from "next/image";

const fu = (delay: number) => ({
  style: { animation: `heromain-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s both` },
});

const PRICES = [
  { label: "Websites", price: "from $199", color: "#06b6d4" },
  { label: "Shopify stores", price: "from $599", color: "#84cc16" },
  { label: "AI & automation", price: "from $99", color: "#8b5cf6" },
  { label: "", price: "GEO", suffix: "get found in AI search", color: "#f59e0b" },
];

export function HeroMain() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "8rem 1.5rem 3.5rem",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div aria-hidden className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.7, pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", width: 800, height: 800, maxWidth: "140vw", borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* ── Top: centered message ── */}
        <div style={{ textAlign: "center", maxWidth: 940, margin: "0 auto" }}>
          <div {...fu(0.1)}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--accent)",
                background: "var(--accent-glow)",
                border: "1px solid var(--accent)",
                borderRadius: "100px",
                padding: "0.3rem 0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Melbourne, Australia &#183; Clients nationwide
            </span>
          </div>

          <h1
            {...fu(0.2)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5.6vw, 4.25rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            {"I build "}
            <span className="gradient-text">Websites</span>
            {", "}
            <span className="gradient-text">Shopify Stores</span>
            {" & AI Automation"}
          </h1>

          <p
            {...fu(0.3)}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.55,
              maxWidth: 640,
              margin: "0 auto 1.5rem",
            }}
          >
            For Australian small businesses &#8212; fixed prices, fast delivery, one developer from idea to launch.
          </p>

          <ul
            style={{
              ...fu(0.4).style,
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.75rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.625rem 2rem",
            }}
          >
            {PRICES.map((p) => (
              <li key={p.label} style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                {p.label ? `${p.label} ` : null}
                <strong style={{ color: p.color, fontFamily: "var(--font-display)", fontWeight: 800 }}>{p.price}</strong>
                {"suffix" in p && p.suffix ? ` — ${p.suffix}` : null}
              </li>
            ))}
          </ul>

          <div {...fu(0.5)} style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
            <a href="#services" className="btn-outline">
              See what I do
            </a>
            <a href="#contact" className="btn-primary">
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>
        </div>

        {/* ── Bottom: about text + photo on the same level ── */}
        <div
          className="heromain-about"
          style={{
            maxWidth: 960,
            margin: "3.5rem auto 0",
            display: "grid",
            gridTemplateColumns: "minmax(0, 560px) auto",
            justifyContent: "space-between",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div {...fu(0.6)}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.375rem, 2.6vw, 1.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {"Hi, I’m "}
              <span className="gradient-text">Vasyl Bakhmut</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.0625rem)",
                fontWeight: 500,
                color: "var(--accent)",
                lineHeight: 1.4,
                marginBottom: "0.75rem",
              }}
            >
              Full-Stack Web Developer &amp; Business Automation Specialist
            </p>
            <p lang="en" className="heromain-p" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "0.625rem" }}>
              For over a decade, I managed complex construction projects &#8212; leading teams,
              budgets, compliance, and client relationships. Working under pressure and delivering
              on tight deadlines taught me the value of clear communication and reliable execution.
            </p>
            <p lang="en" className="heromain-p" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              In 2022, I transitioned into software development, bringing the same structured
              approach to every project. Today I help Australian small businesses build full-stack
              web applications and AI-powered automation, delivering projects remotely from
              Melbourne to clients nationwide.
            </p>
          </div>

          <div
            className="heromain-photo"
            style={{ flexShrink: 0, textAlign: "center", animation: "heromain-scale-in 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}
          >
            <div className="heromain-ring" style={{ position: "relative", width: 220, height: 220, margin: "0 auto" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, var(--accent), transparent, var(--accent))",
                  animation: "spin-slow 8s linear infinite",
                  zIndex: 0,
                }}
              />
              <div style={{ position: "absolute", inset: 2, borderRadius: "50%", background: "var(--bg-primary)", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 8, borderRadius: "50%", overflow: "hidden", zIndex: 2, background: "var(--bg-secondary)" }}>
                <Image
                  src="/vasyl-avatar.jpg"
                  alt="Vasyl Bakhmut — Full-Stack Web Developer Melbourne"
                  fill
                  sizes="(max-width: 768px) 150px, 220px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            <div style={{ marginTop: "1rem", fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)" }}>
              From Building Sites to Building Software
            </div>

            <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  background: "var(--bg-card)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  borderRadius: "0.875rem",
                  padding: "0.5rem 1rem",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }} />
                <span style={{ fontWeight: 700, fontSize: "0.78rem", color: "var(--text-primary)" }}>Available for Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heromain-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heromain-scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        .heromain-p { text-align: justify; hyphens: auto; }
        @media (max-width: 860px) {
          .heromain-p { text-align: left; hyphens: none; }
          .heromain-about { grid-template-columns: 1fr !important; gap: 1.75rem !important; margin-top: 2.5rem !important; }
          .heromain-photo { order: -1; }
          .heromain-ring { width: 150px !important; height: 150px !important; }
        }
      `}</style>
    </section>
  );
}
