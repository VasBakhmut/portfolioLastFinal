"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/types";

interface ProjectWithPrice extends Project {
  price?: string;
}

const PROJECTS: ProjectWithPrice[] = [
  {
    id: "telegram-bot",
    title: "Telegram Audio-to-Text Bot",
    description:
      "A Telegram bot that receives audio files and returns accurate text transcriptions using the Google Speech-to-Text API. Handles multiple audio formats and replies inline in the chat.",
    type: "Automation",
    tech: ["Node.js", "Express", "Telegraf", "Google API", "TypeScript"],
    budget: "Personal Project",
    price: "~$500 AUD",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/vasylbakhmut",
  },
  {
    id: "landing-pages",
    title: "Bakery & Beauty Salon Landing Pages",
    description:
      "Two polished, fully responsive landing pages built as a practical training project. Custom design, mobile-first layout, smooth scroll interactions.",
    type: "Landing Page",
    tech: ["JavaScript", "HTML5", "SCSS", "Responsive Design"],
    budget: "Training Project",
    price: "~$200 AUD",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60",
    liveUrl: "#",
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description: "A new project is in the works. Check back shortly for details on the tech stack, problem solved, and outcomes delivered.",
    type: "Web App",
    tech: ["React", "Next.js", "Node.js"],
    price: "TBD",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description: "An AI-powered workflow automation tool for Australian SMEs &#8212; launching soon.",
    type: "Automation",
    tech: ["Python", "LangChain", "n8n"],
    price: "TBD",
    placeholder: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
];

const TYPE_COLORS: Record<string, string> = {
  Automation: "#8b5cf6",
  "Landing Page": "#06b6d4",
  "Web App": "#10b981",
};

const PAGE_SIZE = 3;

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = PROJECTS.slice(0, visibleCount);
  const canShowMore = visibleCount < PROJECTS.length;
  const canShowLess = visibleCount > PAGE_SIZE;

  return (
    <section
      id="projects"
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <p className="section-label"><span>&#8212;</span> Selected Work</p>
              <h2 className="section-heading">
                Projects I&apos;ve <span className="gradient-text">Built</span>
              </h2>
            </div>
            <a
              href="https://github.com/vasylbakhmut"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
            >
              View GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
        >
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / show less */}
        {(canShowMore || canShowLess) && (
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "2rem" }}>
            {canShowMore && (
              <button
                onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, PROJECTS.length))}
                className="btn-outline"
              >
                Show More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            )}
            {canShowLess && (
              <button
                onClick={() => setVisibleCount((c) => Math.max(c - PAGE_SIZE, PAGE_SIZE))}
                className="btn-outline"
                style={{ opacity: 0.7 }}
              >
                Show Less
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project: p }: { project: ProjectWithPrice }) {
  const typeColor = TYPE_COLORS[p.type] ?? "var(--accent)";

  return (
    <div
      className="glass-card"
      style={{
        overflow: "hidden",
        opacity: p.placeholder ? 0.65 : 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/7",
          background: "var(--bg-secondary)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={p.image ?? "/placeholder-project-1.png"}
          alt={p.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        {/* Price badge */}
        {p.price && (
          <div
            style={{
              position: "absolute",
              top: "0.625rem",
              right: "0.625rem",
              background: p.placeholder ? "var(--bg-card)" : "var(--accent)",
              color: p.placeholder ? "var(--text-muted)" : "#fff",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.05em",
              padding: "0.3rem 0.8rem",
              borderRadius: "100px",
              backdropFilter: "blur(8px)",
              border: p.placeholder ? "1px solid var(--border)" : "none",
              boxShadow: p.placeholder ? "none" : "0 2px 10px rgba(6,182,212,0.4)",
            }}
          >
            {p.placeholder ? "Coming Soon" : `💰 ${p.price}`}
          </div>
        )}
        {!p.placeholder && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-card) 0%, transparent 50%)" }} />
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1rem 1.125rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.18rem 0.55rem",
              borderRadius: "100px",
              background: `${typeColor}18`,
              color: typeColor,
              border: `1px solid ${typeColor}30`,
            }}
          >
            {p.type}
          </span>
          {p.budget && (
            <span style={{ fontSize: "0.65rem", fontWeight: 500, color: "var(--text-muted)", padding: "0.18rem 0.55rem", borderRadius: "100px", background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              {p.budget}
            </span>
          )}
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.375rem" }}>
          {p.title}
        </h3>
        <p style={{ fontSize: "0.7875rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, marginBottom: "0.875rem" }}>
          {p.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: p.placeholder ? 0 : "0.875rem" }}>
          {p.tech.map((t) => (
            <span key={t} style={{ fontSize: "0.65rem", fontWeight: 500, padding: "0.15rem 0.5rem", borderRadius: "100px", background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              {t}
            </span>
          ))}
        </div>

        {!p.placeholder && (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.35rem 0.75rem" }}>
                Live Demo
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.75rem", padding: "0.35rem 0.75rem" }}>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
