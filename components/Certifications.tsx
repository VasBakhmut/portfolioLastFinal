"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CERTS = [
  { institution: "IBM / Coursera", credential: "Full Stack Software Developer", year: "2025–present", emoji: "🏛️", color: "#0f62fe" },
  { institution: "Vanderbilt University", credential: "Prompt Engineering Certificate", year: "2025", emoji: "⭐", color: "#cfb87c" },
  { institution: "Genius Space", credential: "Diploma of FullStack Development", year: "2023–2024", emoji: "🚀", color: "#8b5cf6" },
  { institution: "Meta / Coursera", credential: "Diploma of Front End Development", year: "2022–2023", emoji: "🔵", color: "#1877f2" },
  // Duplicate set for seamless infinite loop
  { institution: "IBM / Coursera", credential: "Full Stack Software Developer", year: "2025–present", emoji: "🏛️", color: "#0f62fe" },
  { institution: "Vanderbilt University", credential: "Prompt Engineering Certificate", year: "2025", emoji: "⭐", color: "#cfb87c" },
  { institution: "Genius Space", credential: "Diploma of FullStack Development", year: "2023–2024", emoji: "🚀", color: "#8b5cf6" },
  { institution: "Meta / Coursera", credential: "Diploma of Front End Development", year: "2022–2023", emoji: "🔵", color: "#1877f2" },
];

const CARD_W = 280;
const CARD_GAP = 20;
const SPEED = 0.5; // px per frame

export function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const pausedRef = useRef(false);
  const animRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const halfWidth = (CARD_W + CARD_GAP) * 4; // 4 original cards

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= SPEED;
        if (Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0; // seamless reset
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      id="certifications"
      style={{ padding: "4rem 0", position: "relative", zIndex: 1, overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>—</span> Credentials <span>—</span>
            </p>
            <h2 className="section-heading">
              Certifications &amp; <span className="gradient-text">Education</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width carousel track */}
      <div
        style={{ position: "relative", overflow: "hidden", padding: "0.5rem 0" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Left fade */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: "linear-gradient(to right, var(--bg-primary), transparent)",
          pointerEvents: "none",
        }} />
        {/* Right fade */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: "linear-gradient(to left, var(--bg-primary), transparent)",
          pointerEvents: "none",
        }} />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: CARD_GAP,
            paddingLeft: CARD_GAP,
            willChange: "transform",
          }}
        >
          {CERTS.map((c, i) => (
            <motion.div
              key={`${c.credential}-${i}`}
              initial={ready ? false : { opacity: 0 }}
              style={{
                width: CARD_W,
                flexShrink: 0,
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "var(--shadow-card)",
                cursor: "default",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              whileHover={{
                borderColor: c.color,
                boxShadow: `var(--shadow-card), 0 0 20px ${c.color}30`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${c.color}15`,
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  border: `1px solid ${c.color}25`,
                }}
              >
                {c.emoji}
              </div>

              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.35rem" }}>
                {c.year}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, marginBottom: "0.4rem" }}>
                {c.credential}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500, marginBottom: "0.875rem" }}>
                {c.institution}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: c.color, fontSize: "0.72rem", fontWeight: 600 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Verified Certificate
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
