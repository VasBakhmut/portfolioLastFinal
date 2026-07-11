"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/types";

interface ProjectWithPrice extends Project {
  price?: string;
  categories?: string[];
  link?: { type: "demo" | "private"; url?: string; label: string };
}

const PROJECTS: ProjectWithPrice[] = [
  {
    id: "orhtorah",
    title: "Orhtorah Community Platform",
    description:
      "A full-featured community platform for a Melbourne Jewish organisation — built with custom membership management, event registrations, donation payments via Stripe, a personal Chitas study system, and a content management dashboard for news and photos.",
    type: "Web App",
    tech: ["Next.js", "TypeScript", "NestJS", "Stripe", "Custom CMS"],
    categories: ["Web Development", "Client Project"],
    price: "~$900 AUD",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    link: { type: "demo", url: "https://www.orhtorah.au/", label: "Live Demo" },
  },
  {
    id: "tradie-saas",
    title: "Tradie Quoting & Invoicing SaaS",
    description:
      "A multilingual quoting and invoicing SaaS for tradespeople — clients write in their native language, the system translates to English, generates professional PDF quotes and invoices, and sends them directly to customers.",
    type: "SaaS",
    tech: ["Node.js", "React", "NestJS", "Puppeteer", "Google Translate API"],
    categories: ["SaaS", "Client Project"],
    price: "~$400 AUD",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    link: { type: "private", label: "Private Client Project" },
  },
  {
    id: "builder-ai",
    title: "Builder AI Quoting SaaS",
    description:
      "An AI-powered quoting SaaS for builders — type a few words like 'bathroom 3x4 with bath and shower' and the system expands it into a full 3–4 page detailed quote covering labour, materials, and specifications. Generates and emails professional PDF documents.",
    type: "Automation",
    tech: ["Next.js", "NestJS", "OpenAI API", "Puppeteer"],
    categories: ["AI", "SaaS", "Client Project"],
    price: "~$2,800 AUD",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    link: { type: "private", label: "Private Client Project" },
  },
  {
    id: "salon-booking",
    title: "Salon Booking & Appointment SaaS",
    description:
      "A booking and appointment management SaaS for hair salons — clients book online, the system manages schedules, sends automated SMS and email reminders, and keeps a full client history.",
    type: "SaaS",
    tech: ["Next.js", "NestJS", "OpenAI API"],
    categories: ["SaaS", "Client Project"],
    price: "~$400 AUD",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    link: { type: "private", label: "Private Client Project" },
  },
  {
    id: "dog-food",
    title: "Dog Food Brand Landing Page",
    description:
      "A conversion-focused landing page for a dog food brand — bold product photography, ingredient highlights, trust signals, and a streamlined order flow designed to turn visitors into buyers.",
    type: "Landing Page",
    tech: ["Next.js", "NestJS", "Supabase"],
    categories: ["Landing Page", "Client Project"],
    price: "~$780 AUD",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    link: { type: "private", label: "Private Client Project" },
  },
];

const TYPE_COLORS: Record<string, string> = {
  Automation: "#8b5cf6",
  "Landing Page": "#06b6d4",
  "Web App": "#10b981",
  SaaS: "#f97316",
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
              background: "rgba(0,0,0,0.45)",
              color: p.placeholder ? "rgba(255,255,255,0.5)" : "#fff",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              padding: "0.22rem 0.7rem",
              borderRadius: "100px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: `1px solid ${p.placeholder ? "rgba(255,255,255,0.15)" : "var(--accent)"}`,
            }}
          >
            {p.placeholder ? "Coming Soon" : p.price}
          </div>
        )}
        {!p.placeholder && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-card) 0%, transparent 50%)" }} />
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1rem 1.125rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
          {(p.categories ?? [p.type]).map((cat) => {
            const catColor = TYPE_COLORS[cat] ?? TYPE_COLORS[p.type] ?? "var(--accent)";
            return (
              <span
                key={cat}
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.18rem 0.55rem",
                  borderRadius: "100px",
                  background: `${catColor}18`,
                  color: catColor,
                  border: `1px solid ${catColor}30`,
                }}
              >
                {cat}
              </span>
            );
          })}
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

        {p.link && (
          p.link.type === "demo" ? (
            <a
              href={p.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.75rem", padding: "0.35rem 0.75rem", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
            >
              {p.link.label}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                padding: "0.25rem 0.65rem",
                borderRadius: "100px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              {p.link.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
