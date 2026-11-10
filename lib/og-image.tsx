import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Vasyl Bakhmut — Web Developer in Melbourne: websites, Shopify stores and AI automation";

const ACCENT = "#22d3ee";

/** Shared 1200×630 social preview used by opengraph-image and twitter-image. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0b1120 0%, #0f172a 55%, #083344 100%)",
          color: "#f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: ACCENT,
              color: "#0c2233",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            VB
          </div>
          <div style={{ display: "flex" }}>Vasyl Bakhmut</div>
          <div style={{ display: "flex", color: "#94a3b8", fontWeight: 500 }}>
            &#183; Melbourne, Australia
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            <span style={{ color: ACCENT, marginRight: 18 }}>Websites,</span>
            <span style={{ color: ACCENT, marginRight: 18 }}>Shopify Stores</span>
            <span>&amp; AI Automation</span>
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#94a3b8" }}>
            For Australian small businesses &#8212; fixed prices, fast delivery.
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 30, fontWeight: 700 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>Websites</span>
            <span style={{ color: "#06b6d4" }}>from $199</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>Shopify</span>
            <span style={{ color: "#84cc16" }}>from $599</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>AI</span>
            <span style={{ color: "#8b5cf6" }}>from $99</span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
