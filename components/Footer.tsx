"use client";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/vasylbakhmut",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vasylbakhmut",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/vasylbakhmut",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/vasylbakhmut",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const TECH_STACK = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
      {/* CTA band */}
      <div
        style={{
          position: "relative",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-footer, var(--bg-secondary))",
        }}
      >
        {/* Background glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 120%, var(--accent-glow), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", width: 200, height: 2, background: "linear-gradient(90deg, transparent, var(--accent), transparent)", borderRadius: 2 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
            Ready to Start?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "0.875rem",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s build something{" "}
            <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              great together
            </span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Whether it&apos;s a new website, an AI workflow, or an SEO strategy &#8212; I&apos;m here to help your Melbourne business grow online.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">
              Start a Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="mailto:bakhmutvas@gmail.com" className="btn-outline" style={{ fontSize: "0.875rem" }}>
              bakhmutvas@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div
        style={{
          background: "var(--bg-footer-dark, #070d1a)",
          borderTop: "1px solid var(--border)",
          padding: "3rem 1.5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}
            className="footer-grid"
          >
            {/* Brand */}
            <div>
              <a
                href="#top"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  letterSpacing: "-0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.15rem",
                  marginBottom: "0.875rem",
                }}
              >
                <span style={{ color: "var(--btn-outline-color)" }}>VB</span>
                <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>/</span>
                <span> Bakhmut</span>
              </a>
              <p style={{ fontSize: "0.8375rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 260, marginBottom: "0.625rem" }}>
                Full-stack web developer &amp; business automation specialist helping Australian small businesses grow online.
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                Serving Melbourne CBD &#183; Bayside Melbourne &#183; Sydney &#183; Victoria &#183; Australia-wide
              </p>
              {/* Tech stack pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {TECH_STACK.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "100px",
                      background: "transparent",
                      color: "var(--btn-outline-color)",
                      border: "1px solid var(--btn-outline-color)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Navigation
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Services
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "Web Design (Melbourne)", href: "/services/web-design/melbourne" },
                  { label: "Web Development (Melbourne)", href: "/services/web-development/melbourne" },
                  { label: "AI Automation (Melbourne)", href: "/services/ai-automation/melbourne" },
                  { label: "SEO Optimisation", href: "/services/seo-optimization" },
                  { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
                  { label: "Business Web Solutions", href: "/services/business-web-solutions" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Locations
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "Melbourne", href: "/locations/melbourne" },
                  { label: "Sydney", href: "/locations/sydney" },
                  { label: "Web Design Melbourne", href: "/services/web-design/melbourne" },
                  { label: "Web Design Sydney", href: "/services/web-design/sydney" },
                  { label: "AI Automation Melbourne", href: "/services/ai-automation/melbourne" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Connect
              </h3>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 40, height: 40, borderRadius: "0.625rem",
                      border: "1px solid var(--border)",
                      background: "var(--bg-card)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--text-secondary)",
                      transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href="mailto:bakhmutvas@gmail.com" style={{ fontSize: "0.8125rem", color: "var(--btn-outline-color)", textDecoration: "none", fontWeight: 600 }}>
                  bakhmutvas@gmail.com
                </a>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)" }}>
              &#169; {year} Vasyl Bakhmut. All rights reserved.
            </p>
            <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)" }}>
              Made with &#10084;&#65039; in Melbourne, Australia &#127462;&#127482;
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr !important; }
          .footer-grid > div:nth-child(5) { grid-column: 1 / -1; }
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .footer-grid > div:nth-child(1) { grid-column: 1 / -1; }
          .footer-grid > div:nth-child(5) { grid-column: auto; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:nth-child(1) { grid-column: 1 / -1; }
        }
        @media (max-width: 400px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
