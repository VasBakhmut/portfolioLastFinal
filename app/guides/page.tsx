import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GUIDES } from "@/lib/guides-data";

const url = "https://www.vasdev.au/guides";

export const metadata: Metadata = {
  title: { absolute: "Website Guides for Australian Small Businesses | Vasdev" },
  description:
    "Plain-English guides for Australian small businesses: website costs, how to choose a web developer, and WordPress vs Shopify vs Next.js.",
  alternates: { canonical: url },
  openGraph: {
    title: "Website Guides for Australian Small Businesses",
    description: "Website costs, choosing a web developer, and picking the right platform.",
    url,
    type: "website",
    locale: "en_AU",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "var(--bg-primary)", minHeight: "100svh" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
          <p className="section-label">
            <span>&#8212;</span> Guides <span>&#8212;</span>
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Website guides for Australian small businesses
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Straight answers to the questions I hear most from Australian business owners.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="glass-card"
                style={{ padding: "1.5rem 1.75rem", textDecoration: "none", display: "block" }}
              >
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  {g.title}
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 0.75rem" }}>{g.description}</p>
                <span style={{ fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 600 }}>
                  {g.readTime} &#8594;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
