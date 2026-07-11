"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MAIN_PLANS = [
  {
    id: "landing-page",
    name: "Landing Page",
    price: "$199 AUD",
    priceNote: "one-time &#183; live in 7 days",
    color: "#06b6d4",
    popular: false,
    features: [
      "1 fully responsive page",
      "Contact form included",
      "Basic on-page SEO",
      "Mobile + desktop optimised",
      "1 revision round",
    ],
    carePlan: true,
    cta: "Order Now",
    ctaHref: "#contact",
  },
  {
    id: "business-site",
    name: "Business Website",
    price: "from $299 AUD",
    priceNote: "up to 5 pages &#183; +$50 / 5 extra pages",
    color: "#8b5cf6",
    popular: true,
    features: [
      "Custom design + branding",
      "SEO-ready structure",
      "Contact form + Google Maps",
      "2 revision rounds",
    ],
    carePlan: true,
    cta: "Order Now",
    ctaHref: "#contact",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Store",
    price: "from $799 AUD",
    priceNote: "up to 50 products &#183; cart + payments",
    color: "#f59e0b",
    popular: false,
    features: [
      "Shopping cart",
      "Payment gateway",
      "Product management",
      "Basic SEO",
      "2 revision rounds",
    ],
    carePlan: true,
    cta: "Order Now",
    ctaHref: "#contact",
  },
];

const AI_TIERS = [
  {
    name: "Starter",
    price: "$99",
    currency: "AUD",
    note: "1 simple chatbot, 1hr consult",
    custom: false,
    color: "#8b5cf6",
  },
  {
    name: "Integration",
    price: "$349",
    currency: "AUD",
    note: "CRM / email / calendar, 1 workflow",
    custom: false,
    color: "#8b5cf6",
  },
  {
    name: "Custom",
    price: "Book a call",
    currency: "",
    note: "Multi-step, custom tools",
    custom: true,
    color: "#8b5cf6",
  },
];

const CARE_PLANS = [
  {
    name: "Basic care",
    price: "$29",
    period: "/mo",
    note: "Hosting, backups, minor edits",
  },
  {
    name: "SEO care",
    price: "$300&#8211;500",
    period: "/mo",
    note: "Weekly SEO reports + optimisation",
  },
  {
    name: "Social add-on",
    price: "+$149",
    period: "/mo",
    note: "Social media management",
  },
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "0.1rem" }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CarePlanHint = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      paddingTop: "0.875rem",
      marginTop: "0.875rem",
      borderTop: "1px solid var(--border)",
      fontSize: "0.75rem",
      color: "var(--text-muted)",
      fontWeight: 500,
    }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
    <span>
      + Care plan <span style={{ color: "var(--accent)", fontWeight: 700 }}>from $29/mo</span>
    </span>
  </div>
);

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> Investment <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.625rem", maxWidth: 500, margin: "0.625rem auto 0", fontSize: "0.875rem" }}>
              All prices in AUD inc. GST. Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>Get a free quote.</a>
            </p>
          </div>
        </ScrollReveal>

        {/* ── Main 3 plans + Custom ── */}
        <div
          className="pricing-main-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}
        >
          {MAIN_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.08}>
              <div
                style={{
                  position: "relative",
                  padding: "1.625rem 1.375rem",
                  borderRadius: "1.125rem",
                  border: plan.popular ? `2px solid ${plan.color}` : "1px solid var(--border)",
                  background: plan.popular
                    ? `linear-gradient(135deg, ${plan.color}10, var(--bg-card))`
                    : "var(--bg-card)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: plan.popular
                    ? `var(--shadow-card), 0 0 28px ${plan.color}28`
                    : "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Accent top bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${plan.color}66, ${plan.color})`, borderRadius: "1.125rem 1.125rem 0 0" }} />

                {plan.popular && (
                  <div style={{ position: "absolute", top: -1, right: 12, background: plan.color, color: "#fff", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: "0 0 0.5rem 0.5rem" }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", marginTop: "0.25rem" }}>
                  {plan.name}
                </h3>

                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 800, color: plan.color, lineHeight: 1, marginBottom: "0.25rem" }}>
                  {plan.price}
                </div>
                <p
                  style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "1.125rem", lineHeight: 1.4 }}
                  dangerouslySetInnerHTML={{ __html: plan.priceNote }}
                />

                <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.125rem" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                      <CheckIcon color={plan.color} />
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* ── Add-ons & Care ── */}
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
              Add-ons &amp; Care
            </p>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <div
          className="pricing-addons-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
        >
          {[
            { name: "AI Starter", price: "$99", period: " AUD", note: "1 chatbot + 1hr consult", color: "#8b5cf6" },
            { name: "Basic Care", price: "$29", period: "/mo", note: "Hosting, backups, minor edits", color: "var(--accent)" },
            { name: "SEO Care", price: "$300–500", period: "/mo", note: "Weekly SEO reports + optimisation", color: "#10b981" },
          ].map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.07}>
              <div
                style={{
                  padding: "1.125rem 1.25rem",
                  borderRadius: "0.875rem",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {item.name}
                  </span>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", margin: "0.2rem 0 0", lineHeight: 1.4 }}>
                    {item.note}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 800, color: item.color }}>
                    {item.price}
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600 }}>{item.period}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .pricing-main-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pricing-addons-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 580px) {
          .pricing-main-grid { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .pricing-main-grid > div > div { padding: 1.125rem 1rem !important; }
          .pricing-addons-grid { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}
