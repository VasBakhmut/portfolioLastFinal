"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { TimelineItem } from "@/types";

const ITEMS: TimelineItem[] = [
  { year: 2009, endYear: 2017, title: "Supervisor", organisation: "Val Interior", type: "experience", description: "Led building and renovation projects across Melbourne. Managed teams of up to 20 workers, subcontractors, and delivered projects on time and within budget." },
  { year: 2014, endYear: 2016, title: "Diploma of Building & Construction", organisation: "ParkerBrent", type: "education", description: "Formal qualification covering project planning, compliance, and site supervision." },
  { year: 2016, endYear: 2019, title: "Founder", organisation: "PhotoLightStudio", type: "experience", description: "Founded and operated a product design and photography studio. Handled design, sourcing, production, and digital marketing end-to-end." },
  { year: 2017, endYear: 2022, title: "Managing Director", organisation: "Mizara Design & Construction", type: "experience", description: "Directed a boutique design and construction firm. Managed contractor relationships, budgets, compliance, and CNC machine operation." },
  { year: 2022, endYear: 2023, title: "Diploma of Front End Development", organisation: "Meta / Coursera", type: "education", description: "Completed Meta's professional front-end curriculum: React, JavaScript, and responsive design." },
  { year: 2023, endYear: 2024, title: "Diploma of FullStack Development", organisation: "Genius Space", type: "education", description: "Intensive full-stack programme: Node.js, Express, MongoDB, PostgreSQL, and cloud deployment." },
  { year: 2023, endYear: 2024, title: "Full-Stack Developer", organisation: "Personal Projects", type: "experience", description: "Built full-stack applications including REST APIs, database integrations, authentication, and deployment pipelines." },
  { year: 2025, title: "Prompt Engineering Certificate", organisation: "Vanderbilt University", type: "education", description: "Advanced prompt engineering for LLMs &#8212; chain-of-thought, RAG, agentic workflows, and fine-tuning." },
  { year: 2025, title: "Full Stack Software Developer", organisation: "IBM / Coursera", type: "education", description: "Cloud-native development, microservices, Docker, Kubernetes, and DevOps practices." },
  { year: 2025, endYear: 2026, title: "Freelance Full-Stack Developer & AI Automation Specialist", organisation: "Self-Employed", type: "experience", description: "Building bespoke websites, web applications, and AI-powered automation workflows for Australian small businesses. Specialising in React, Next.js, Node.js, and n8n-based integrations that save clients hours of manual work each week." },
];

const MILESTONES = [2009, 2013, 2017, 2020, 2022, 2023, 2025, 2026];
const MIN = 2009;
const MAX = 2026;

export function Timeline() {
  const [activeYear, setActiveYear] = useState(MIN);
  const sectionRef = useRef<HTMLElement>(null);

  // Continuous scroll-driven year: maps section position in viewport to MIN..MAX
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress 0 = section top at viewport bottom, 1 = section bottom at viewport top
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const year = Math.round(MIN + clamped * (MAX - MIN));
      setActiveYear(year);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItems = ITEMS.filter((item) => {
    const end = item.endYear ?? item.year;
    return activeYear >= item.year && activeYear <= end;
  });

  const pct = ((activeYear - MIN) / (MAX - MIN)) * 100;

  return (
    <section
      id="timeline"
      ref={sectionRef}
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> My Journey <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              Experience &amp; <span className="gradient-text">Education</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            style={{
              background: "var(--bg-card)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Year Selector Bar */}
            <div
              style={{
                padding: "2rem 2.5rem 1.5rem",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg-secondary)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Selected year
                  </span>
                  <motion.div
                    key={activeYear}
                    initial={{ opacity: 0.6, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1 }}
                    style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}
                  >
                    {activeYear}
                  </motion.div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {activeItems.length} milestone{activeItems.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Progress track */}
              <div style={{ position: "relative", paddingBottom: "1.75rem" }}>
                <div
                  style={{
                    height: 3,
                    borderRadius: 2,
                    background: "var(--border-strong)",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    const ratio = (e.clientX - rect.left) / rect.width;
                    setActiveYear(Math.round(MIN + ratio * (MAX - MIN)));
                  }}
                >
                  {/* Animated fill */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: `${pct}%`,
                      background: "linear-gradient(90deg, var(--accent-dark), var(--accent))",
                      borderRadius: 2,
                      transition: "width 0.05s",
                      boxShadow: "0 0 10px var(--accent-glow)",
                    }}
                  />
                  {/* Thumb */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: `${pct}%`,
                      transform: "translate(-50%, -50%)",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "3px solid var(--bg-primary)",
                      boxShadow: "0 0 12px var(--accent-glow-strong)",
                      zIndex: 3,
                      cursor: "grab",
                      transition: "left 0.05s",
                    }}
                  />
                  {/* Hidden range input for manual drag */}
                  <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={activeYear}
                    onChange={(e) => setActiveYear(Number(e.target.value))}
                    style={{ position: "absolute", inset: "-8px 0", opacity: 0, width: "100%", cursor: "pointer", zIndex: 4 }}
                    aria-label="Select year"
                  />
                </div>

                {/* Milestone dots */}
                {MILESTONES.map((y) => {
                  const p = ((y - MIN) / (MAX - MIN)) * 100;
                  const isActive = y === activeYear;
                  const hasMilestone = ITEMS.some((item) => y >= item.year && y <= (item.endYear ?? item.year));
                  return (
                    <button
                      key={y}
                      onClick={() => setActiveYear(y)}
                      title={String(y)}
                      style={{ position: "absolute", top: "calc(3px + 0.5rem)", left: `${p}%`, transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem", padding: 0 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: hasMilestone ? (isActive ? "var(--accent)" : "var(--text-muted)") : "var(--border-strong)",
                          transition: "all 0.2s",
                          boxShadow: isActive ? "0 0 8px var(--accent-glow-strong)" : "none",
                        }}
                      />
                      <span style={{ fontSize: "0.65rem", fontWeight: isActive ? 800 : 500, color: isActive ? "var(--accent)" : "var(--text-muted)", transition: "color 0.2s", whiteSpace: "nowrap" }}>
                        {y}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content area */}
            <div style={{ padding: "1.75rem 2.5rem" }}>
              <AnimatePresence mode="popLayout">
                {activeItems.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", color: "var(--text-muted)", padding: "1.5rem 0", fontSize: "0.9rem" }}
                  >
                    No milestones recorded for {activeYear}. Try a different year.
                  </motion.p>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                    {activeItems.map((item) => (
                      <motion.div
                        key={`${item.year}-${item.title}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28 }}
                        style={{
                          display: "flex",
                          gap: "0.875rem",
                          padding: "1.125rem",
                          borderRadius: "0.875rem",
                          background: "var(--bg-secondary)",
                          border: `1px solid ${item.type === "education" ? "#8b5cf630" : "var(--accent-glow)"}`,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: item.type === "education" ? "#8b5cf618" : "var(--accent-glow)",
                            border: `2px solid ${item.type === "education" ? "#8b5cf6" : "var(--accent)"}`,
                            marginTop: "0.1rem",
                          }}
                        >
                          {item.type === "education" ? (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                          ) : (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                            </svg>
                          )}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                            <span
                              style={{
                                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                                padding: "0.15rem 0.5rem", borderRadius: "100px",
                                background: item.type === "education" ? "#8b5cf618" : "var(--accent-glow)",
                                color: item.type === "education" ? "#8b5cf6" : "var(--accent)",
                                border: `1px solid ${item.type === "education" ? "#8b5cf630" : "var(--accent)"}`,
                              }}
                            >
                              {item.type === "education" ? "Education" : "Experience"}
                            </span>
                            <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 500 }}>
                              {item.year}{item.endYear && item.endYear !== item.year ? `&#8211;${item.endYear}` : ""}
                            </span>
                          </div>
                          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem", lineHeight: 1.3 }}>
                            {item.title}
                          </h3>
                          <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
                            {item.organisation}
                          </div>
                          {item.description && (
                            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
