"use client";

const PHONE_NUMBER = "+610425401444";

export function FloatingCallButton() {
  return (
    <>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Vasyl"
        className="floating-call-btn"
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 90,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.6rem 1.1rem",
          borderRadius: "100px",
          background: "var(--bg-card)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--border-strong)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          color: "var(--text-secondary)",
          textDecoration: "none",
          fontSize: "0.8125rem",
          fontWeight: 600,
          transition: "border-color 0.2s, color 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--accent)";
          el.style.color = "var(--accent)";
          el.style.boxShadow = "0 4px 24px var(--accent-glow-strong)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--border-strong)";
          el.style.color = "var(--text-secondary)";
          el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call Me
      </a>

      <style>{`
        @media (max-width: 480px) {
          .floating-call-btn span { display: none; }
          .floating-call-btn { padding: 0.75rem !important; border-radius: 50% !important; }
        }
      `}</style>
    </>
  );
}
