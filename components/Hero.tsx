"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE } satisfies Transition,
});

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Radial glows */}
      <div aria-hidden style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", bottom: "5%", left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <FloatingShapes />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text */}
        <div>
          <motion.div {...fadeUp(0.1)}>
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
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Based in Melbourne, Australia
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Vasyl Bakhmut</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 500,
              color: "var(--accent)",
              marginBottom: "1.25rem",
              lineHeight: 1.4,
            }}
          >
            Full-Stack Web Developer &amp; Business Automation Specialist
          </motion.p>

          <motion.h2
            {...fadeUp(0.35)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2vw, 1.175rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            From Building Sites to{" "}
            <span style={{ color: "var(--accent)", opacity: 0.85 }}>Building Software</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: "0.75rem",
            }}
          >
            For over a decade, I managed complex construction projects &#8212; leading teams,
            budgets, compliance, and client relationships. Working under pressure and delivering
            on tight deadlines taught me the value of clear communication and reliable execution.
          </motion.p>

          <motion.p
            {...fadeUp(0.45)}
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: "2.25rem",
            }}
          >
            In 2022, I transitioned into software development, bringing the same structured
            approach to every project. Today I help Australian small businesses build full-stack
            web applications and AI-powered automation, delivering projects remotely from
            Melbourne to clients nationwide.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Get a Free Quote
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2.5rem" }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "AI/ML"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Photo + availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hero-photo"
          style={{ flexShrink: 0, position: "relative" }}
        >
          <div className="hero-photo-ring" style={{ position: "relative", width: 286, height: 286 }}>
            {/* Spinning glow ring */}
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
            <div
              style={{
                position: "absolute",
                inset: 2,
                borderRadius: "50%",
                background: "var(--bg-primary)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 8,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 2,
                background: "var(--bg-secondary)",
              }}
            >
              <Image
                src="/vasyl-avatar.jpg"
                alt="Vasyl Bakhmut — Full-Stack Web Developer Melbourne"
                fill
                sizes="286px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Availability badge — below photo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: "0.875rem",
                padding: "0.625rem 1rem",
                boxShadow: "0 4px 20px rgba(16,185,129,0.15)",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#10b981",
                  display: "inline-block",
                  boxShadow: "0 0 8px #10b981",
                }} />
                <span style={{ fontWeight: 700, fontSize: "0.78rem", color: "var(--text-primary)" }}>
                  Available for Work
                </span>
              </div>
              <span style={{ fontSize: "0.68rem", color: "#10b981", fontWeight: 600 }}>
                Open to new projects
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: flex !important; flex-direction: column; align-items: center; order: -1; }
          .hero-photo-ring { width: 176px !important; height: 176px !important; }
        }
      `}</style>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
      <svg className="float-1" style={{ position: "absolute", top: "15%", right: "12%", opacity: 0.15 }} width="120" height="120" viewBox="0 0 120 120">
        <polygon points="60,5 110,32.5 110,87.5 60,115 10,87.5 10,32.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
      <svg className="float-2 pulse-glow" style={{ position: "absolute", top: "60%", right: "8%", opacity: 0.2 }} width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>
      <svg className="float-3" style={{ position: "absolute", top: "40%", left: "2%", opacity: 0.1 }} width="90" height="90" viewBox="0 0 90 90">
        <rect x="10" y="10" width="70" height="70" rx="12" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
      <svg style={{ position: "absolute", bottom: "10%", left: "5%", opacity: 0.12 }} width="100" height="100" viewBox="0 0 100 100">
        {[0, 25, 50, 75, 100].flatMap((x) =>
          [0, 25, 50, 75, 100].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--accent)" />
          ))
        )}
      </svg>
    </div>
  );
}
