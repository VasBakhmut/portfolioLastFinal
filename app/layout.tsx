import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
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

const SITE_URL = "https://www.vasdev.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vasyl Bakhmut — Full-Stack Web Developer & AI Automation Specialist Melbourne",
    template: "%s — Vasyl Bakhmut",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasyl Bakhmut — Web Developer & AI Automation",
  url: "https://www.vasdev.au",
  telephone: "0425401444",
  email: "bakhmutvas@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cheltenham",
    addressLocality: "Cheltenham",
    addressRegion: "VIC",
    postalCode: "3192",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -37.9526, longitude: 145.0592 },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Sydney" },
    { "@type": "State", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/in/vasyl-bakhmut-dev",
    "https://www.facebook.com/vasyl.bakhmut",
    "https://www.instagram.com/vasyl_bakhmut",
    "https://github.com/VasBakhmut",
  ],
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vasyl Bakhmut",
  url: "https://www.vasdev.au",
  jobTitle: "Full-Stack Web Developer & AI Automation Specialist",
  worksFor: { "@type": "Organization", name: "Self-Employed" },
  address: { "@type": "PostalAddress", addressLocality: "Cheltenham", addressRegion: "VIC", addressCountry: "AU" },
  email: "bakhmutvas@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/vasyl-bakhmut-dev",
    "https://www.facebook.com/vasyl.bakhmut",
    "https://www.instagram.com/vasyl_bakhmut",
    "https://github.com/VasBakhmut",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vasyl Bakhmut",
  url: "https://www.vasdev.au",
  description: "Full-stack web developer and AI automation specialist based in Melbourne, Australia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* JSON-LD outside client boundary to avoid React script warning */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K31Q4XQMVQ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K31Q4XQMVQ');
        `}</Script>
      </body>
    </html>
  );
}
