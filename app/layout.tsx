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

const SITE_URL = "https://vasdev.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vasyl Bakhmut | Full-Stack Web Developer & AI Automation Specialist Melbourne",
    template: "%s | Vasyl Bakhmut",
  },
  description:
    "Melbourne-based full-stack web developer and AI automation specialist. Custom websites, AI chatbots, workflow automation and SEO for Australian small businesses. Fast delivery, transparent pricing.",
  keywords: [
    "web developer Melbourne",
    "AI automation Melbourne",
    "web design Melbourne",
    "small business website Australia",
    "Next.js developer Melbourne",
    "n8n automation Australia",
    "AI chatbot Melbourne",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  authors: [{ name: "Vasyl Bakhmut", url: SITE_URL }],
  creator: "Vasyl Bakhmut",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Vasyl Bakhmut",
    title: "Vasyl Bakhmut | Full-Stack Web Developer & AI Automation Specialist Melbourne",
    description:
      "Melbourne-based full-stack web developer and AI automation specialist. Custom websites, AI chatbots, workflow automation and SEO for Australian small businesses.",
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
    title: "Vasyl Bakhmut | Full-Stack Developer & AI Automation Specialist Melbourne",
    description: "Custom websites, AI chatbots, and workflow automation for Australian small businesses. Fast delivery, transparent pricing.",
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
