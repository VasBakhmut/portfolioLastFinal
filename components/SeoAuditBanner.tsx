"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function normalizeUrl(url: string) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}

function isValidUrl(url: string) {
  try {
    new URL(normalizeUrl(url));
    return true;
  } catch {
    return false;
  }
}

export function SeoAuditBanner() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setUrlError(true);
      return;
    }
    setUrlError(false);
    setError(false);
    const normalizedUrl = normalizeUrl(url);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seo-audit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: normalizedUrl, email }),
        }
      );
      if (!res.ok) throw new Error("api error");
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  return (
    <section
      style={{ padding: "0 1.5rem", position: "relative", zIndex: 1 }}
    >
      <ScrollReveal>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            background: "linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 50%, var(--accent-light) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background pattern */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "center",
            }}
            className="seo-banner-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                Get Your Free SEO Audit
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                Fill in a few quick details and I&apos;ll analyse your site and send actionable recommendations — completely free, no strings attached.
              </p>
            </div>

            <div style={{ minWidth: 340 }} className="seo-form-wrapper">
              {submitted ? (
                <div
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "0.875rem",
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  ✅ Thanks! I&apos;ll send your audit within 48 hours.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "0.875rem",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your website URL (e.g. example.com.au)"
                    value={url}
                    onChange={(e) => { setUrl(e.target.value); setUrlError(false); }}
                    required
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.3)",
                      background: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      fontSize: "0.875rem",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  {urlError && (
                    <p style={{ color: "#fff", fontSize: "0.75rem", marginTop: "-0.25rem", opacity: 0.9 }}>
                      Please enter a valid URL (e.g. example.com.au)
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.3)",
                      background: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      fontSize: "0.875rem",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  {error && (
                    <div style={{ padding: "0.625rem 0.875rem", borderRadius: "0.5rem", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "0.8125rem" }}>
                      Something went wrong. Please try again or email{" "}
                      <a href="mailto:bakhmutvas@gmail.com" style={{ color: "#fff", fontWeight: 700 }}>bakhmutvas@gmail.com</a>
                    </div>
                  )}
                  <button
                    type="submit"
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      background: "#fff",
                      color: "var(--accent-dark)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    Get Free Audit →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style>{`
        @media (max-width: 768px) {
          .seo-banner-grid { grid-template-columns: 1fr !important; }
          .seo-form-wrapper { min-width: unset !important; }
        }
      `}</style>
    </section>
  );
}
