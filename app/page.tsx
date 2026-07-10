import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { SeoAuditBanner } from "@/components/SeoAuditBanner";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasyl Bakhmut — Web Developer & AI Automation",
  url: "https://vasdev.au",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.9526,
    longitude: 145.0592,
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Sydney" },
    { "@type": "State", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://linkedin.com/in/vasylbakhmut",
    "https://github.com/vasylbakhmut",
  ],
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vasyl Bakhmut",
  url: "https://vasdev.au",
  jobTitle: "Full-Stack Web Developer & AI Automation Specialist",
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cheltenham",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  email: "bakhmutvas@gmail.com",
  sameAs: [
    "https://linkedin.com/in/vasylbakhmut",
    "https://github.com/vasylbakhmut",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vasyl Bakhmut",
  url: "https://vasdev.au",
  description: "Full-stack web developer and AI automation specialist based in Melbourne, Australia.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://vasdev.au/#contact",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <ParticleBackground />
      <BackgroundDecor />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Projects />
          <Skills />
          <Services />
          <Process />
          <Pricing />
          <Blog />
          <SeoAuditBanner />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
