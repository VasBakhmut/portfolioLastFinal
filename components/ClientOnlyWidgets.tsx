"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground").then((m) => ({ default: m.ParticleBackground })),
  { ssr: false }
);

const FloatingCallButton = dynamic(
  () => import("@/components/FloatingCallButton").then((m) => ({ default: m.FloatingCallButton })),
  { ssr: false }
);

export function ClientOnlyWidgets() {
  return (
    <>
      <ParticleBackground />
      <FloatingCallButton />
    </>
  );
}
