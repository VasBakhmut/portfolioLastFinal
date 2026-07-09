"use client";

/** Decorative background blobs + floating shapes for non-Hero sections */
interface SectionDecorProps {
  variant?: "left" | "right" | "center" | "both";
  intensity?: "low" | "medium";
}

export function SectionDecor({ variant = "right", intensity = "low" }: SectionDecorProps) {
  const alpha = intensity === "low" ? 0.18 : 0.28;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Primary glow blob */}
      {(variant === "right" || variant === "both") && (
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-8%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(6,182,212,${alpha}) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      )}
      {(variant === "left" || variant === "both") && (
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-8%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(6,182,212,${alpha}) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      )}
      {variant === "center" && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(ellipse, rgba(6,182,212,${alpha * 0.7}) 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
      )}

      {/* Floating geometric accents */}
      <svg
        style={{ position: "absolute", top: "8%", right: "5%", opacity: 0.07 }}
        width="140" height="140" viewBox="0 0 140 140"
      >
        <polygon
          points="70,6 132,37 132,103 70,134 8,103 8,37"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        style={{ position: "absolute", bottom: "12%", left: "3%", opacity: 0.06 }}
        width="100" height="100" viewBox="0 0 100 100"
      >
        <rect x="8" y="8" width="84" height="84" rx="16"
          fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 5"
        />
      </svg>

      <svg
        style={{ position: "absolute", top: "45%", left: "1%", opacity: 0.05 }}
        width="70" height="70" viewBox="0 0 70 70"
      >
        <circle cx="35" cy="35" r="30" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="35" cy="35" r="20" fill="none" stroke="var(--accent)" strokeWidth="1" />
      </svg>

      {/* Dot grid */}
      <svg
        style={{ position: "absolute", bottom: "5%", right: "2%", opacity: 0.06 }}
        width="110" height="110" viewBox="0 0 110 110"
      >
        {[0, 22, 44, 66, 88, 110].flatMap((x) =>
          [0, 22, 44, 66, 88, 110].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--accent)" />
          ))
        )}
      </svg>
    </div>
  );
}
