"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("api error");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "0.625rem",
    border: "1.5px solid var(--border-strong)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>—</span> Let&apos;s Talk <span>—</span>
            </p>
            <h2 className="section-heading">
              Start a <span className="gradient-text">Project</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 480, margin: "1rem auto 0" }}>
              Have an idea or a problem to solve? Get in touch — I respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Form */}
          <ScrollReveal direction="left">
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                    Message received!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Budget (AUD)
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)")}
                    >
                      <option value="">Select budget range</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                      onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)")}
                    />
                  </div>
                  {error && (
                    <div style={{ padding: "0.75rem 1rem", borderRadius: "0.625rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)", color: "#ef4444", fontSize: "0.875rem", lineHeight: 1.5 }}>
                      Something went wrong. Please try again or contact me directly at{" "}
                      <a href="mailto:bakhmutvas@gmail.com" style={{ color: "#ef4444", fontWeight: 600 }}>bakhmutvas@gmail.com</a>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ justifyContent: "center", opacity: loading ? 0.75 : 1 }}
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal direction="right">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Contact info */}
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "bakhmutvas@gmail.com",
                  href: "mailto:bakhmutvas@gmail.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: "Phone",
                  value: "0425 401 444",
                  href: "tel:0425401444",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  ),
                  label: "Location",
                  value: "Cheltenham, VIC 3192",
                  href: null,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="glass-card"
                  style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "0.75rem",
                      background: "var(--accent-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", textDecoration: "none" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability badge */}
              <div
                className="glass-card"
                style={{ padding: "1.5rem", textAlign: "center" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.625rem",
                    color: "#10b981",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#10b981",
                      display: "inline-block",
                      boxShadow: "0 0 8px #10b981",
                      animation: "pulse-glow 2s infinite",
                    }}
                  />
                  Available for New Projects
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", margin: 0 }}>
                  Currently accepting clients in Melbourne and across Australia.
                  Typically respond within 24 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
