"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SERVICE_LINKS = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "SEO Optimisation", href: "/services/seo-optimization" },
  { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
  { label: "Business Web Solutions", href: "/services/business-web-solutions" },
  { label: "AI Chatbots & Automation", href: "/services/ai-automation" },
];

const NAV_LINKS = [
  {
    label: "Projects", href: "#projects",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  },
  {
    label: "Pricing", href: "#pricing",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    label: "Blog", href: "#blog",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  },
  {
    label: "Contact", href: "#contact",
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0.75rem 1rem",
          pointerEvents: "none",
        }}
      >
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: scrolled ? "0.55rem 1.25rem" : "0.7rem 1.5rem",
            background: scrolled
              ? "var(--nav-bg)"
              : "rgba(11,17,32,0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "1rem",
            border: "1px solid var(--border-strong)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px var(--accent-glow)"
              : "0 4px 24px rgba(0,0,0,0.2)",
            transition: "padding 0.3s, background 0.3s, box-shadow 0.3s",
            pointerEvents: "all",
          }}
        >
          {/* Logo */}
          <a
            href="#top"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.15rem",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--accent)" }}>VB</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "1rem" }}>/</span>
            <span> Bakhmut</span>
          </a>

          {/* Desktop nav */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.1rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {/* Services dropdown */}
            <li ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.7rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: servicesOpen ? "var(--accent)" : "var(--text-secondary)",
                  background: servicesOpen ? "var(--accent-glow)" : "transparent",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  if (!servicesOpen) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                <span style={{ opacity: 0.7 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                </span>
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.5rem)",
                    left: 0,
                    background: "var(--nav-bg)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: "0.75rem",
                    padding: "0.5rem",
                    minWidth: 220,
                    zIndex: 10,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                >
                  {SERVICE_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        borderRadius: "0.5rem",
                        transition: "color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                        (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.35rem 0.7rem",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    borderRadius: "0.5rem",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span style={{ opacity: 0.7 }}>{l.icon}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ThemeToggle />

            {/* Task 1 fix: whiteSpace + minWidth ensure button never wraps */}
            <a
              href="#contact"
              className="btn-primary desktop-cta"
              style={{ padding: "0.42rem 1.1rem", fontSize: "0.8rem", whiteSpace: "nowrap", minWidth: "fit-content" }}
            >
              Get in Touch
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="hamburger"
              style={{
                display: "none",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
                width: 32,
                height: 32,
              }}
            >
              {[
                open ? "rotate(45deg) translate(5px,5px)" : "none",
                undefined,
                open ? "rotate(-45deg) translate(5px,-5px)" : "none",
              ].map((transform, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "var(--text-primary)",
                    borderRadius: 2,
                    transform: transform ?? "none",
                    opacity: i === 1 && open ? 0 : 1,
                    transition: "transform 0.25s, opacity 0.25s",
                  }}
                />
              ))}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "var(--bg-primary)",
              display: "flex",
              flexDirection: "column",
              padding: "5.5rem 1.5rem 2rem",
              overflowY: "auto",
            }}
          >
            {/* Services links in mobile menu */}
            <div style={{ borderBottom: "1px solid var(--border)", marginBottom: "0.25rem" }}>
              <div
                style={{
                  padding: "0.75rem 0",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Services
              </div>
              {SERVICE_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 0",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ color: "var(--accent)" }}>{l.icon}</span>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary"
              style={{ marginTop: "1.5rem", justifyContent: "center" }}
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
