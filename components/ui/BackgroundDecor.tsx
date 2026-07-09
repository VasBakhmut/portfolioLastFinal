"use client";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Top-left blob — cyan */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-15vw",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Centre-right blob — purple */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          right: "-20vw",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Bottom-left blob — cyan */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "-10vw",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* Bottom-right blob — amber */}
      <div
        style={{
          position: "absolute",
          bottom: "-5vh",
          right: "-5vw",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
