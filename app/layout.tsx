import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Providers } from "@/lib/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://vasylbakhmut.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vasyl Bakhmut — Full-Stack Web Developer & Business Automation | Melbourne",
    template: "%s | Vasyl Bakhmut",
  },
  description:
    "Melbourne-based full-stack web developer and business automation specialist. I build responsive websites, AI chatbots, and workflow automation for Australian small businesses. React, Next.js, Node.js.",
  keywords: [
    "web developer Melbourne",
    "full-stack developer Australia",
    "business automation Melbourne",
    "AI chatbot development",
    "Next.js developer",
    "React developer Melbourne",
    "website development Melbourne",
    "workflow automation Australia",
    "SEO Melbourne",
    "freelance developer Melbourne",
  ],
  authors: [{ name: "Vasyl Bakhmut", url: SITE_URL }],
  creator: "Vasyl Bakhmut",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Vasyl Bakhmut",
    title: "Vasyl Bakhmut — Full-Stack Web Developer & Business Automation | Melbourne",
    description:
      "Melbourne-based full-stack web developer and business automation specialist. Websites, AI chatbots, and workflow automation for Australian small businesses.",
    images: [
      {
        url: "/og-image.png", // TODO: create og-image.png (1200×630) in /public
        width: 1200,
        height: 630,
        alt: "Vasyl Bakhmut — Web Developer & Business Automation, Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasyl Bakhmut — Full-Stack Developer & Automation | Melbourne",
    description: "Websites, AI chatbots, and automation for Australian small businesses.",
    images: ["/og-image.png"], // TODO: same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
