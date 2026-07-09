"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FAQ_ITEMS = [
  {
    q: "What's included in the website price &#8212; and what's not?",
    a: "Every package includes design, development, mobile responsiveness, a contact form, and basic SEO setup as listed in each plan &#8212; standard for any Melbourne small business website. Domain registration, premium plugins/integrations beyond what's listed, and ongoing hosting after the first month are not included &#8212; these are covered separately or as part of a Care plan.",
  },
  {
    q: "Do I need a Care plan, or can I host the site myself?",
    a: "A Care plan is optional. You're welcome to take the finished website and host it yourself on any platform. The Care plan exists for clients who'd rather not deal with hosting in Australia, backups, uptime monitoring, and small content updates &#8212; I handle all of that so you don't have to.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page is typically live within 7 days. A business website takes around 2&#8211;3 weeks depending on the number of pages and revisions. As a web developer in Melbourne I try to work efficiently within your schedule &#8212; ecommerce stores and custom/AI automation projects vary based on scope and I'll give you a clear timeline after our first call.",
  },
  {
    q: "Can I upgrade from a landing page to a full business website later?",
    a: "Yes. Many clients start with a landing page to launch quickly, then upgrade to a full multi-page site once the business grows. I'll credit what's reusable from the original build toward the upgrade cost.",
  },
  {
    q: "Do you offer refunds if I'm not happy with the result?",
    a: "Each package includes revision rounds specifically so we can get the result right together before final delivery. If there's a genuine issue with delivery, reach out and we'll find a fair resolution &#8212; I'd rather solve the problem than leave a client unhappy.",
  },
  {
    q: "What happens after my revision rounds are used &#8212; can I still request changes?",
    a: "Yes. Additional revisions outside your plan's included rounds can be added at an hourly rate, or covered automatically if you're on a Care plan, which includes ongoing minor edits each month.",
  },
  {
    q: "Do you work with businesses outside Melbourne or Australia?",
    a: "Yes. While I'm based in Melbourne and serve clients across Melbourne, Sydney, and Victoria, I also work remotely with businesses anywhere in Australia and beyond &#8212; all communication, design reviews, and project updates happen online.",
  },
  {
    q: "What's the difference between the AI Starter, Integration, and Custom tiers?",
    a: "Starter ($99) covers a single simple chatbot and a 1-hour consultation &#8212; a great entry point for Melbourne businesses new to AI. Integration ($349) covers connecting tools with n8n automation: your CRM, email, or calendar into one automated workflow. Custom (book a call) is for businesses that need multiple connected systems or bespoke automation tools &#8212; pricing depends on scope.",
  },
  {
    q: "Is the SEO audit really free, with no obligation?",
    a: "Yes, completely free with no obligation. You'll get a real technical audit of your site with actionable recommendations. If you'd like ongoing help acting on those recommendations, I offer a monthly SEO Care plan with weekly reporting &#8212; but that's entirely optional.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's included in the website price — and what's not?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every package includes design, development, mobile responsiveness, a contact form, and basic SEO setup as listed in each plan — standard for any Melbourne small business website. Domain registration, premium plugins/integrations beyond what's listed, and ongoing hosting after the first month are not included — these are covered separately or as part of a Care plan.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Care plan, or can I host the site myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Care plan is optional. You're welcome to take the finished website and host it yourself on any platform. The Care plan exists for clients who'd rather not deal with hosting in Australia, backups, uptime monitoring, and small content updates — I handle all of that so you don't have to.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page is typically live within 7 days. A business website takes around 2-3 weeks depending on the number of pages and revisions. As a web developer in Melbourne I try to work efficiently within your schedule — ecommerce stores and custom/AI automation projects vary based on scope and I'll give you a clear timeline after our first call.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade from a landing page to a full business website later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients start with a landing page to launch quickly, then upgrade to a full multi-page site once the business grows. I'll credit what's reusable from the original build toward the upgrade cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer refunds if I'm not happy with the result?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each package includes revision rounds specifically so we can get the result right together before final delivery. If there's a genuine issue with delivery, reach out and we'll find a fair resolution — I'd rather solve the problem than leave a client unhappy.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after my revision rounds are used — can I still request changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Additional revisions outside your plan's included rounds can be added at an hourly rate, or covered automatically if you're on a Care plan, which includes ongoing minor edits each month.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Melbourne or Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While I'm based in Melbourne and serve clients across Melbourne, Sydney, and Victoria, I also work remotely with businesses anywhere in Australia and beyond — all communication, design reviews, and project updates happen online.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between the AI Starter, Integration, and Custom tiers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter ($99) covers a single simple chatbot and a 1-hour consultation — a great entry point for Melbourne businesses new to AI. Integration ($349) covers connecting tools with n8n automation: your CRM, email, or calendar into one automated workflow. Custom (book a call) is for businesses that need multiple connected systems or bespoke automation tools — pricing depends on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Is the SEO audit really free, with no obligation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no obligation. You'll get a real technical audit of your site with actionable recommendations. If you'd like ongoing help acting on those recommendations, I offer a monthly SEO Care plan with weekly reporting — but that's entirely optional.",
      },
    },
  ],
};

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      style={{ padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}
    >
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center" }}>
              <span>&#8212;</span> FAQ <span>&#8212;</span>
            </p>
            <h2 className="section-heading">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "0.9375rem" }}>
              Common questions about pricing, process, and working with me.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div
                  style={{
                    background: "var(--bg-card)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: isOpen ? "1px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: "0.875rem",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                    boxShadow: isOpen ? "0 0 20px var(--accent-glow)" : "var(--shadow-card)",
                  }}
                >
                  {/* Question button */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.125rem 1.375rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--accent)" : "var(--text-primary)",
                        lineHeight: 1.4,
                        transition: "color 0.2s",
                      }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ flexShrink: 0, color: isOpen ? "var(--accent)" : "var(--text-muted)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            margin: 0,
                            padding: "0 1.375rem 1.25rem",
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.75,
                          }}
                          dangerouslySetInnerHTML={{ __html: item.a }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
